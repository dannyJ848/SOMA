/**
 * Trastorno de Estrés Postraumático / PTSD
 *
 * Contenido educativo integral sobre el TEPT con enfoque
 * en la comunidad hispanohablante. Incluye respuesta al trauma,
 * tratamiento y consideraciones culturales para la comunidad latina.
 *
 * Comprehensive educational content on PTSD with focus
 * on Spanish-speaking communities. Includes trauma response,
 * treatment, and cultural considerations for the Latino community.
 */

import { EducationalContent } from '../../../types';

export const trastornoEstresPostraumaticoPtsdContent: EducationalContent = {
  id: 'condition-trastorno-estres-postraumatico-ptsd',
  type: 'condition',
  name: 'Post-Traumatic Stress Disorder',
  nameEs: 'Trastorno de Estrés Postraumático',
  alternateNames: [
    'TEPT',
    'PTSD',
    'Estrés Postraumático',
    'Post-Traumatic Stress',
    'Trastorno por Estrés Postraumático',
    'Trauma',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'El TEPT es una condición que puede desarrollarse después de vivir o presenciar un evento traumático. Causa recuerdos intrusivos, pesadillas, evitación y cambios en el estado de ánimo. Es una respuesta normal del cerebro a algo anormal. Se puede tratar. | PTSD is a condition that can develop after living through or witnessing a traumatic event. It causes intrusive memories, nightmares, avoidance, and mood changes. It is a normal brain response to something abnormal. It can be treated.',
      explanation: `## Explicación

Cuando vivimos algo muy aterrador o peligroso, nuestro cerebro puede quedar "atascado" en modo de alerta. Esto es el Trastorno de Estrés Postraumático (TEPT).

**¿Qué tipo de eventos pueden causar TEPT?**

- Violencia (asalto, abuso, violencia doméstica, violencia comunitaria)
- Accidentes graves (de auto, en el trabajo)
- Desastres naturales (terremotos, huracanes, inundaciones)
- Experiencias de guerra o conflicto armado
- Abuso sexual o violación
- La muerte repentina o violenta de un ser querido
- Experiencias traumáticas de inmigración (cruce de frontera, detención, separación familiar)

**¿Qué se siente con TEPT?**

*Recuerdos que se repiten:*
- Recuerdos del evento que aparecen de repente (flashbacks)
- Sentir como si estuvieras viviendo el evento otra vez
- Pesadillas frecuentes sobre el trauma
- Reacciones intensas ante cosas que recuerdan el evento (sonidos, olores, lugares)

*Evitación:*
- Evitar lugares, personas o situaciones que recuerden el trauma
- No querer hablar ni pensar sobre lo que pasó
- Sentirse "adormecido/a" emocionalmente

*Cambios en pensamientos y emociones:*
- Sentirse culpable, avergonzado/a o creer que lo que pasó fue tu culpa
- Perder interés en actividades
- Sentirse distante de los demás
- Dificultad para sentir emociones positivas

*Estar siempre en alerta:*
- Sobresaltarse fácilmente
- Problemas para dormir
- Irritabilidad o enojo
- Dificultad para concentrarse
- Estar siempre vigilante, buscando peligro

**Mensaje importante para la comunidad hispana/latina:**

El TEPT es especialmente relevante en muchas comunidades latinas debido a:
- Experiencias traumáticas de migración
- Violencia en países de origen
- Separación de familias
- Experiencias de detención
- Discriminación y racismo

El TEPT NO es debilidad. Es la respuesta normal del cerebro a experiencias anormales. Muchas personas de nuestra comunidad han vivido cosas terribles y merecen apoyo y tratamiento.

**Buscar ayuda es valiente, no débil.**

El TEPT se puede tratar con terapia especializada y, cuando es necesario, con medicamentos. La mayoría de las personas mejoran significativamente con tratamiento.

**Si usted o alguien que conoce necesita ayuda:**
- Línea 988 de Prevención del Suicidio y Crisis (en español): llame o envíe texto al 988
- Línea Nacional de Violencia Doméstica: 1-800-799-7233 (español disponible)
- Línea de Crisis por Texto: envíe HOLA al 741741

---
## Explanation

When we live through something very scary or dangerous, our brain can get "stuck" in alert mode. This is Post-Traumatic Stress Disorder (PTSD).

**What kinds of events can cause PTSD?**

- Violence (assault, abuse, domestic violence, community violence)
- Serious accidents (car, workplace)
- Natural disasters (earthquakes, hurricanes, floods)
- War or armed conflict experiences
- Sexual abuse or rape
- Sudden or violent death of a loved one
- Traumatic immigration experiences (border crossing, detention, family separation)

**What does PTSD feel like?**

*Repeating memories:*
- Memories of the event appearing suddenly (flashbacks)
- Feeling as if you are living through the event again
- Frequent nightmares about the trauma
- Intense reactions to things that remind you of the event (sounds, smells, places)

*Avoidance:*
- Avoiding places, people, or situations that remind you of the trauma
- Not wanting to talk or think about what happened
- Feeling emotionally "numb"

*Changes in thoughts and emotions:*
- Feeling guilty, ashamed, or believing what happened was your fault
- Losing interest in activities
- Feeling distant from others
- Difficulty feeling positive emotions

*Always being on alert:*
- Startling easily
- Sleep problems
- Irritability or anger
- Difficulty concentrating
- Always being watchful, looking for danger

**Important message for the Hispanic/Latino community:**

PTSD is especially relevant in many Latino communities because of:
- Traumatic migration experiences
- Violence in countries of origin
- Family separation
- Detention experiences
- Discrimination and racism

PTSD is NOT weakness. It is the normal brain response to abnormal experiences. Many people in our community have lived through terrible things and deserve support and treatment.

**Seeking help is brave, not weak.**

PTSD can be treated with specialized therapy and, when needed, medications. Most people improve significantly with treatment.

**If you or someone you know needs help:**
- 988 Suicide & Crisis Lifeline (in Spanish): call or text 988
- National Domestic Violence Hotline: 1-800-799-7233 (Spanish available)
- Crisis Text Line: text HELLO to 741741`,
      keyTerms: [
        {
          term: 'trauma',
          definition:
            'Un evento o experiencia que causa miedo intenso, horror o sensación de peligro de muerte. Puede ser algo que te pasó a ti o que presenciaste. | An event or experience causing intense fear, horror, or sense of life-threatening danger. It can be something that happened to you or that you witnessed.',
        },
        {
          term: 'flashback',
          definition:
            'Un recuerdo tan vívido del evento traumático que sientes como si lo estuvieras viviendo otra vez en ese momento. | A memory of the traumatic event so vivid that you feel as if you are living through it again in that moment.',
        },
        {
          term: 'TEPT / PTSD',
          definition:
            'Trastorno de Estrés Postraumático. Condición médica del cerebro que se desarrolla después de un evento traumático. Es tratable. | Post-Traumatic Stress Disorder. Medical brain condition that develops after a traumatic event. It is treatable.',
        },
      ],
      analogies: [
        'El TEPT es como tener un detector de humo que se activó durante un incendio real y ahora sigue sonando aunque ya no hay fuego. Tu cerebro aprendió a protegerte, pero ahora está demasiado sensible. La terapia ayuda a recalibrar esa alarma. | PTSD is like having a smoke detector that went off during a real fire and now keeps sounding even though there is no fire. Your brain learned to protect you, but now it is too sensitive. Therapy helps recalibrate that alarm.',
        'Los flashbacks son como tener una película que se repite en tu mente sin que tú lo quieras. Con el tratamiento, puedes aprender a que esa película deje de repetirse. | Flashbacks are like having a movie that replays in your mind without you wanting it. With treatment, you can learn to make that movie stop replaying.',
      ],
      examples: [
        'Un padre que cruzó la frontera en condiciones peligrosas tiene pesadillas, se sobresalta con ruidos fuertes, y evita hablar de su viaje. Esto no es debilidad — es TEPT. | A father who crossed the border in dangerous conditions has nightmares, startles at loud noises, and avoids talking about his journey. This is not weakness — it is PTSD.',
        'Una mujer que sufrió violencia doméstica siente pánico cuando escucha una puerta cerrarse fuerte, aunque ahora está segura. Su cerebro todavía está en modo de protección. | A woman who suffered domestic violence feels panic when she hears a door slam, even though she is now safe. Her brain is still in protection mode.',
      ],
      patientCounselingPoints: [
        'Lo que le pasó NO fue su culpa. Y la forma en que su cerebro respondió es normal. Merece ayuda y la hay disponible. | What happened to you was NOT your fault. And the way your brain responded is normal. You deserve help and it is available.',
        'El TEPT NO se cura solo con el tiempo. El tratamiento profesional es muy efectivo y puede cambiar su vida. | PTSD does NOT get better just with time. Professional treatment is very effective and can change your life.',
        'Hablar sobre el trauma es difícil, pero con un terapeuta capacitado, es seguro. Usted controla el ritmo del tratamiento. | Talking about trauma is hard, but with a trained therapist, it is safe. You control the pace of treatment.',
        'Si tiene pensamientos de hacerse daño, llame al 988 ahora mismo. Hay ayuda en español disponible las 24 horas. | If you have thoughts of harming yourself, call 988 right now. Help in Spanish is available 24 hours.',
      ],
    },
    2: {
      level: 2,
      summary:
        'El TEPT se desarrolla tras la exposición a un evento traumático y se caracteriza por 4 grupos de síntomas: reexperimentación, evitación, cogniciones/ánimo negativos e hiperactivación. Los tratamientos de primera línea incluyen Terapia de Procesamiento Cognitivo (TPC) y Exposición Prolongada (EP), con ISRS/IRSN como apoyo farmacológico. | PTSD develops after exposure to a traumatic event and is characterized by 4 symptom clusters: reexperiencing, avoidance, negative cognitions/mood, and hyperarousal. First-line treatments include Cognitive Processing Therapy (CPT) and Prolonged Exposure (PE), with SSRIs/SNRIs as pharmacological support.',
      explanation: `## Explicación

**Criterios diagnósticos simplificados:**

Para diagnosticar TEPT, se necesita:
1. **Exposición a trauma:** Experiencia directa, ser testigo, enterarse de que le pasó a un ser querido, o exposición repetida a detalles del trauma
2. **Reexperimentación (1+ síntoma):** Flashbacks, pesadillas, recuerdos intrusivos, malestar psicológico o fisiológico ante recordatorios
3. **Evitación (1+ síntoma):** Evitar recuerdos, pensamientos, sentimientos del trauma; evitar recordatorios externos
4. **Cogniciones y ánimo negativos (2+ síntomas):** Amnesia del trauma, creencias negativas sobre sí mismo/mundo, culpa distorsionada, emociones negativas persistentes, pérdida de interés, desapego, incapacidad para sentir emociones positivas
5. **Hiperactivación (2+ síntomas):** Irritabilidad, comportamiento imprudente, hipervigilancia, respuesta de sobresalto exagerada, dificultad para concentrarse, alteración del sueño
6. **Duración:** Más de 1 mes
7. **Impacto:** Causa malestar significativo o deterioro funcional

**¿Quién desarrolla TEPT?**

- No todas las personas expuestas a trauma desarrollan TEPT
- ~7-8% de la población general lo desarrollará en su vida
- Factores de riesgo: trauma severo, falta de apoyo social, trauma previo, historia familiar de enfermedades mentales
- Factores protectores: apoyo social fuerte, estrategias de afrontamiento, acceso a tratamiento temprano

**Tratamientos basados en evidencia:**

*Psicoterapias de primera línea:*

1. **Terapia de Procesamiento Cognitivo (TPC / CPT):**
   - Examinar y cambiar pensamientos "atascados" sobre el trauma
   - Por ejemplo: "Fue mi culpa" → evaluar la evidencia
   - 12 sesiones típicamente
   - Muy efectiva y disponible en español

2. **Exposición Prolongada (EP / PE):**
   - Enfrentar gradualmente los recuerdos y situaciones evitadas
   - Exposición imaginaria: contar la historia del trauma en detalle
   - Exposición in vivo: enfrentar gradualmente situaciones seguras pero evitadas
   - 8-15 sesiones típicamente

3. **EMDR (Desensibilización y Reprocesamiento por Movimientos Oculares):**
   - Usar movimientos oculares mientras se recuerda el trauma
   - Ayuda al cerebro a "reprocesar" el recuerdo traumático
   - Puede funcionar más rápido que otras terapias
   - 6-12 sesiones típicamente

*Medicamentos:*
- ISRS: sertralina, paroxetina (aprobados por FDA para TEPT)
- IRSN: venlafaxina (buena evidencia)
- Prazosina: para pesadillas del TEPT (bloquea la norepinefrina)
- NO se recomiendan benzodiazepinas (pueden empeorar el TEPT)

**Consideraciones culturales para la comunidad latina:**

*Tipos de trauma frecuentes en la comunidad hispana:*
- Violencia comunitaria y del crimen organizado en países de origen
- Trauma migratorio: viaje peligroso, coyotes, desierto, asaltos
- Detención migratoria y separación familiar
- Violencia doméstica y sexual
- Discriminación y experiencias de racismo
- Desastres naturales en países de origen

*Barreras para el tratamiento:*
- Miedo a la deportación al buscar servicios de salud
- Falta de servicios de salud mental en español
- Estigma cultural: "lo que pasa en la familia, se queda en la familia"
- Normalización del sufrimiento: "hay que aguantar"
- Falta de seguros médicos
- Desconfianza en las autoridades y el sistema de salud

*Fortalezas culturales:*
- Familismo: apoyo familiar fuerte
- Fe y espiritualidad como fuentes de resiliencia
- Sentido de comunidad
- Capacidad de adaptación demostrada por la experiencia migratoria
- Valores de solidaridad y apoyo mutuo

---
## Explanation

**Simplified diagnostic criteria:**

To diagnose PTSD:
1. **Trauma exposure:** Direct experience, witnessing, learning about it happening to a loved one, or repeated exposure to trauma details
2. **Reexperiencing (1+ symptom):** Flashbacks, nightmares, intrusive memories, psychological or physiological distress at reminders
3. **Avoidance (1+ symptom):** Avoiding trauma memories, thoughts, feelings; avoiding external reminders
4. **Negative cognitions and mood (2+ symptoms):** Trauma amnesia, negative beliefs about self/world, distorted blame, persistent negative emotions, loss of interest, detachment, inability to feel positive emotions
5. **Hyperarousal (2+ symptoms):** Irritability, reckless behavior, hypervigilance, exaggerated startle response, difficulty concentrating, sleep disturbance
6. **Duration:** More than 1 month
7. **Impact:** Causes significant distress or functional impairment

**Who develops PTSD?**

- Not everyone exposed to trauma develops PTSD
- ~7-8% of the general population will develop it in their lifetime
- Risk factors: severe trauma, lack of social support, prior trauma, family history of mental illness
- Protective factors: strong social support, coping strategies, access to early treatment

**Evidence-based treatments:**

*First-line psychotherapies:*

1. **Cognitive Processing Therapy (CPT):**
   - Examine and change "stuck points" about the trauma
   - For example: "It was my fault" → evaluate the evidence
   - 12 sessions typically
   - Very effective and available in Spanish

2. **Prolonged Exposure (PE):**
   - Gradually face avoided memories and situations
   - Imaginal exposure: telling the trauma story in detail
   - In vivo exposure: gradually facing safe but avoided situations
   - 8-15 sessions typically

3. **EMDR (Eye Movement Desensitization and Reprocessing):**
   - Use eye movements while recalling the trauma
   - Helps the brain "reprocess" the traumatic memory
   - May work faster than other therapies
   - 6-12 sessions typically

*Medications:*
- SSRIs: sertraline, paroxetine (FDA-approved for PTSD)
- SNRIs: venlafaxine (good evidence)
- Prazosin: for PTSD nightmares (blocks norepinephrine)
- Benzodiazepines are NOT recommended (can worsen PTSD)

**Cultural considerations for the Latino community:**

*Common trauma types in the Hispanic community:*
- Community violence and organized crime in countries of origin
- Migration trauma: dangerous journey, smugglers, desert, assaults
- Immigration detention and family separation
- Domestic and sexual violence
- Discrimination and racism experiences
- Natural disasters in countries of origin

*Barriers to treatment:*
- Fear of deportation when seeking health services
- Lack of mental health services in Spanish
- Cultural stigma: "what happens in the family, stays in the family"
- Normalization of suffering: "you have to endure"
- Lack of health insurance
- Distrust of authorities and the health system

*Cultural strengths:*
- Familismo: strong family support
- Faith and spirituality as sources of resilience
- Sense of community
- Adaptation capacity demonstrated by migration experience
- Values of solidarity and mutual support`,
      keyTerms: [
        {
          term: 'reexperimentación / reexperiencing',
          definition:
            'Revivir el trauma involuntariamente a través de flashbacks, pesadillas o recuerdos intrusivos. Es el grupo de síntomas más característico del TEPT. | Involuntarily reliving trauma through flashbacks, nightmares, or intrusive memories. The most characteristic PTSD symptom cluster.',
        },
        {
          term: 'TPC / CPT',
          definition:
            'Terapia de Procesamiento Cognitivo. Tratamiento de primera línea para TEPT que se enfoca en cambiar pensamientos distorsionados sobre el trauma ("puntos atascados"). | Cognitive Processing Therapy. First-line PTSD treatment focused on changing distorted thoughts about trauma ("stuck points").',
        },
        {
          term: 'Exposición Prolongada / Prolonged Exposure',
          definition:
            'Terapia donde la persona enfrenta gradualmente los recuerdos y situaciones que evita debido al trauma, en un entorno seguro y controlado. | Therapy where the person gradually faces memories and situations avoided due to trauma, in a safe and controlled setting.',
        },
        {
          term: 'EMDR',
          definition:
            'Desensibilización y Reprocesamiento por Movimientos Oculares. Terapia que usa estimulación bilateral (movimientos oculares) mientras se procesa el recuerdo traumático. | Eye Movement Desensitization and Reprocessing. Therapy using bilateral stimulation (eye movements) while processing the traumatic memory.',
        },
        {
          term: 'hipervigilancia',
          definition:
            'Estado de alerta excesiva y constante, buscando peligro incluso cuando no lo hay. Común en el TEPT porque el cerebro sigue en "modo de supervivencia." | State of excessive, constant alertness, looking for danger even when there is none. Common in PTSD because the brain remains in "survival mode."',
        },
      ],
      analogies: [
        'Las terapias para el TEPT son como organizar un cuarto desordenado. Los recuerdos traumáticos están tirados por todos lados, y la terapia ayuda a ponerlos en su lugar correcto — en el pasado, no en el presente. | PTSD therapies are like organizing a messy room. Traumatic memories are thrown everywhere, and therapy helps put them in their correct place — in the past, not the present.',
      ],
      examples: [
        'Una familia que vivió un huracán devastador en Puerto Rico desarrolla TEPT. Los padres tienen pesadillas, los niños tienen miedo de la lluvia, y todos evitan hablar de lo que pasó. La TPC les ayuda a procesar lo vivido. | A family that lived through a devastating hurricane in Puerto Rico develops PTSD. Parents have nightmares, children fear rain, and everyone avoids talking about what happened. CPT helps them process the experience.',
        'Un joven que fue víctima de violencia de pandillas evita salir de su casa, no puede concentrarse en la escuela, y tiene flashbacks. La Exposición Prolongada le ayuda a recuperar su vida. | A young person who was a gang violence victim avoids leaving home, cannot concentrate at school, and has flashbacks. Prolonged Exposure helps them reclaim their life.',
      ],
      patientCounselingPoints: [
        'Las benzodiazepinas (como alprazolam/Xanax) NO se recomiendan para el TEPT. Pueden empeorar los síntomas a largo plazo. Hable con su médico sobre opciones mejores. | Benzodiazepines (like alprazolam/Xanax) are NOT recommended for PTSD. They can worsen symptoms long-term. Talk to your doctor about better options.',
        'El tratamiento para el TEPT es difícil al principio porque requiere enfrentar recuerdos dolorosos. Pero funciona: la mayoría de las personas mejoran significativamente en 3-4 meses. | PTSD treatment is difficult at first because it requires facing painful memories. But it works: most people improve significantly in 3-4 months.',
        'Si usted es indocumentado/a, tiene derecho a servicios de salud mental. Muchas clínicas comunitarias no preguntan por su estatus migratorio. | If you are undocumented, you have the right to mental health services. Many community clinics do not ask about your immigration status.',
      ],
    },
    3: {
      level: 3,
      summary:
        'El TEPT involucra disfunción del circuito amígdala-corteza prefrontal medial-hipocampo, con hiperactividad del sistema noradrenérgico, desregulación del eje HPA y fallo en la extinción del miedo condicionado. Los tratamientos de primera línea (TPC, EP, EMDR) actúan mediante la reconsolidación de memorias traumáticas y la extinción del miedo. La sertralina y paroxetina son los únicos fármacos aprobados por la FDA. | PTSD involves dysfunction of the amygdala-medial prefrontal cortex-hippocampus circuit, with noradrenergic system hyperactivity, HPA axis dysregulation, and failure of conditioned fear extinction. First-line treatments (CPT, PE, EMDR) act through traumatic memory reconsolidation and fear extinction. Sertraline and paroxetine are the only FDA-approved drugs.',
      explanation: `## Explicación

**Criterios diagnósticos DSM-5-TR para TEPT:**

A. Exposición a muerte real o amenaza de muerte, lesión grave o violencia sexual:
   1. Experiencia directa
   2. Presenciar el evento en persona
   3. Enterarse de que le ocurrió a un familiar o amigo cercano
   4. Exposición repetida a detalles aversivos del evento (profesionales)

B. Síntomas de intrusión (1+):
   - Recuerdos intrusivos involuntarios y recurrentes
   - Sueños perturbadores recurrentes
   - Reacciones disociativas (flashbacks)
   - Malestar psicológico intenso ante recordatorios
   - Reacciones fisiológicas marcadas ante recordatorios

C. Evitación persistente (1+):
   - Evitación de recuerdos, pensamientos o sentimientos
   - Evitación de recordatorios externos

D. Alteraciones cognitivas y del ánimo (2+):
   - Incapacidad para recordar aspectos del trauma (amnesia disociativa)
   - Creencias negativas persistentes y exageradas
   - Cogniciones distorsionadas sobre la causa o consecuencias
   - Estado emocional negativo persistente
   - Disminución del interés en actividades
   - Sensación de desapego
   - Incapacidad para experimentar emociones positivas

E. Alteraciones de activación y reactividad (2+):
   - Comportamiento irritable o agresivo
   - Comportamiento imprudente o autodestructivo
   - Hipervigilancia
   - Respuesta de sobresalto exagerada
   - Problemas de concentración
   - Alteración del sueño

F. Duración > 1 mes
G. Deterioro significativo
H. No atribuible a sustancias o condición médica

**Especificadores:**
- Con síntomas disociativos: despersonalización y/o desrealización
- Con expresión retardada: criterios completos no se cumplen hasta 6+ meses después
- Subtipo preescolar: criterios adaptados para niños ≤6 años

**Neurobiología del TEPT:**

*Circuito del miedo:*
- Amígdala hiperactiva: procesamiento de amenazas exagerado
- Corteza prefrontal medial hipoactiva: fallo en la regulación del miedo
- Hipocampo reducido: fallo en la contextualización de memorias (memorias fragmentadas)
- Ínsula anterior hiperactiva: amplificación de la conciencia corporal del miedo

*Sistema noradrenérgico:*
- Hiperactividad del locus cerúleo
- Niveles elevados de norepinefrina
- Respuesta de sobresalto exagerada
- Base del efecto de la prazosina en las pesadillas

*Eje HPA:*
- Cortisol paradójicamente bajo en algunos pacientes con TEPT
- Receptor de glucocorticoide sensibilizado (respuesta de feedback exagerada)
- Hipersupresión en prueba de dexametasona
- Diferente del patrón de cortisol alto en depresión

*Neuroquímica adicional:*
- Endocannabinoides reducidos (déficit de extinción del miedo)
- Glutamato: consolidación y reconsolidación de memorias traumáticas
- Serotonina: modulación de circuitos prefrontales
- Neuropéptido Y (NPY) reducido: menor resiliencia al estrés

*Epigenética:*
- Metilación de NR3C1 (receptor de glucocorticoide)
- FKBP5: interacción gen-ambiente con abuso infantil
- Transmisión intergeneracional de vulnerabilidad (hijos de sobrevivientes de trauma)

**Psicoterapias - mecanismos de acción:**

*TPC (Terapia de Procesamiento Cognitivo):*
- Identificación de "puntos atascados" (stuck points): creencias distorsionadas sobre el trauma
- Cuestionamiento socrático de cogniciones problemáticas
- Temas centrales: seguridad, confianza, poder/control, estima, intimidad
- No requiere exposición al relato detallado del trauma
- 12 sesiones protocolizadas
- Disponible en español (protocolo validado)

*EP (Exposición Prolongada):*
- Basada en la teoría del procesamiento emocional (Foa)
- Exposición imaginaria: relato repetido del trauma hasta habituación
- Exposición in vivo: jerarquía de situaciones evitadas
- Procesamiento emocional completo del recuerdo traumático
- 8-15 sesiones

*EMDR:*
- Modelo de Procesamiento Adaptativo de Información (PAI)
- Estimulación bilateral durante el acceso a la memoria traumática
- La memoria se "reprocesa" y se almacena de forma adaptativa
- 8 fases protocolizadas
- Mecanismo exacto debatido (¿taxación de la memoria de trabajo?)

**Farmacoterapia:**

*FDA-aprobados:*
- Sertralina: 50-200 mg/día
- Paroxetina: 20-50 mg/día

*Evidencia fuerte (off-label):*
- Venlafaxina XR: 75-225 mg/día
- Fluoxetina: 20-60 mg/día

*Para pesadillas:*
- Prazosina: 1-15 mg al acostarse (antagonista alfa-1 adrenérgico)

*NO recomendados para TEPT:*
- Benzodiazepinas: interfieren con la extinción del miedo, empeoran el pronóstico
- Antipsicóticos como monoterapia (excepto risperidona baja dosis como augmentación)

**Evaluación:**
- PCL-5 (PTSD Checklist): 20 ítems, autoinforme, versión en español validada
- CAPS-5 (Clinician-Administered PTSD Scale): entrevista estructurada, estándar de oro
- Life Events Checklist (LEC-5): evaluación de exposición a trauma
- PHQ-9 y GAD-7 para comorbilidad (depresión, ansiedad)

**Trauma y migración en poblaciones hispanas/latinas:**

*Modelo de estrés traumático migratorio:*
- Pre-migración: violencia, pobreza, desastres en el país de origen
- Tránsito: viaje peligroso, asalto, abuso, explotación
- Post-migración: detención, separación, discriminación, aislamiento, estatus legal

*Trauma complejo:*
- Exposición a múltiples eventos traumáticos crónicos
- Más común en poblaciones inmigrantes
- Puede incluir desregulación emocional, disociación, alteraciones de identidad
- Requiere tratamientos estabilizadores antes de procesamiento del trauma

---
## Explanation

**DSM-5-TR Diagnostic Criteria for PTSD:**

A. Exposure to actual or threatened death, serious injury, or sexual violence:
   1. Direct experience
   2. Witnessing the event in person
   3. Learning that it occurred to a close family member or friend
   4. Repeated exposure to aversive details of the event (professionals)

B. Intrusion symptoms (1+):
   - Involuntary, recurrent intrusive memories
   - Recurrent distressing dreams
   - Dissociative reactions (flashbacks)
   - Intense psychological distress at reminders
   - Marked physiological reactions to reminders

C. Persistent avoidance (1+):
   - Avoidance of memories, thoughts, or feelings
   - Avoidance of external reminders

D. Cognitive and mood alterations (2+):
   - Inability to remember trauma aspects (dissociative amnesia)
   - Persistent, exaggerated negative beliefs
   - Distorted cognitions about cause or consequences
   - Persistent negative emotional state
   - Diminished interest in activities
   - Feelings of detachment
   - Inability to experience positive emotions

E. Arousal and reactivity alterations (2+):
   - Irritable or aggressive behavior
   - Reckless or self-destructive behavior
   - Hypervigilance
   - Exaggerated startle response
   - Concentration problems
   - Sleep disturbance

F. Duration > 1 month
G. Significant impairment
H. Not attributable to substances or medical condition

**Specifiers:**
- With dissociative symptoms: depersonalization and/or derealization
- With delayed expression: full criteria not met until 6+ months later
- Preschool subtype: adapted criteria for children ≤6 years

**PTSD Neurobiology:**

*Fear circuit:*
- Hyperactive amygdala: exaggerated threat processing
- Hypoactive medial prefrontal cortex: failure of fear regulation
- Reduced hippocampus: failure of memory contextualization (fragmented memories)
- Hyperactive anterior insula: amplification of bodily fear awareness

*Noradrenergic system:*
- Locus coeruleus hyperactivity
- Elevated norepinephrine levels
- Exaggerated startle response
- Basis for prazosin effect on nightmares

*HPA axis:*
- Paradoxically low cortisol in some PTSD patients
- Sensitized glucocorticoid receptor (exaggerated feedback response)
- Hypersuppression on dexamethasone test
- Different from high cortisol pattern in depression

*Additional neurochemistry:*
- Reduced endocannabinoids (fear extinction deficit)
- Glutamate: consolidation and reconsolidation of traumatic memories
- Serotonin: modulation of prefrontal circuits
- Reduced Neuropeptide Y (NPY): lower stress resilience

*Epigenetics:*
- NR3C1 methylation (glucocorticoid receptor)
- FKBP5: gene-environment interaction with childhood abuse
- Intergenerational transmission of vulnerability (children of trauma survivors)

**Psychotherapies - mechanisms of action:**

*CPT (Cognitive Processing Therapy):*
- Identification of "stuck points": distorted beliefs about trauma
- Socratic questioning of problematic cognitions
- Central themes: safety, trust, power/control, esteem, intimacy
- Does not require detailed trauma narrative exposure
- 12 protocolized sessions
- Available in Spanish (validated protocol)

*PE (Prolonged Exposure):*
- Based on emotional processing theory (Foa)
- Imaginal exposure: repeated trauma narration until habituation
- In vivo exposure: hierarchy of avoided situations
- Complete emotional processing of traumatic memory
- 8-15 sessions

*EMDR:*
- Adaptive Information Processing (AIP) model
- Bilateral stimulation during traumatic memory access
- Memory is "reprocessed" and stored adaptively
- 8 protocolized phases
- Exact mechanism debated (working memory taxation?)

**Pharmacotherapy:**

*FDA-approved:*
- Sertraline: 50-200 mg/day
- Paroxetine: 20-50 mg/day

*Strong evidence (off-label):*
- Venlafaxine XR: 75-225 mg/day
- Fluoxetine: 20-60 mg/day

*For nightmares:*
- Prazosin: 1-15 mg at bedtime (alpha-1 adrenergic antagonist)

*NOT recommended for PTSD:*
- Benzodiazepines: interfere with fear extinction, worsen prognosis
- Antipsychotics as monotherapy (except low-dose risperidone as augmentation)

**Assessment:**
- PCL-5 (PTSD Checklist): 20 items, self-report, validated Spanish version
- CAPS-5 (Clinician-Administered PTSD Scale): structured interview, gold standard
- Life Events Checklist (LEC-5): trauma exposure assessment
- PHQ-9 and GAD-7 for comorbidity (depression, anxiety)

**Trauma and migration in Hispanic/Latino populations:**

*Migratory traumatic stress model:*
- Pre-migration: violence, poverty, disasters in country of origin
- Transit: dangerous journey, assault, abuse, exploitation
- Post-migration: detention, separation, discrimination, isolation, legal status

*Complex trauma:*
- Exposure to multiple chronic traumatic events
- More common in immigrant populations
- May include emotional dysregulation, dissociation, identity alterations
- Requires stabilization treatments before trauma processing`,
      keyTerms: [
        {
          term: 'extinción del miedo / fear extinction',
          definition:
            'Proceso neurobiológico mediante el cual se aprende que un estímulo previamente asociado con peligro ya no es amenazante. El TEPT implica un fallo en este proceso. Las benzodiazepinas lo inhiben. | Neurobiological process through which one learns that a stimulus previously associated with danger is no longer threatening. PTSD involves a failure of this process. Benzodiazepines inhibit it.',
        },
        {
          term: 'reconsolidación de memoria',
          definition:
            'Proceso por el cual una memoria reactivada se vuelve temporalmente maleable y puede ser modificada. Es el mecanismo propuesto de terapias como EMDR y la exposición prolongada. | Process by which a reactivated memory becomes temporarily malleable and can be modified. Proposed mechanism of therapies like EMDR and prolonged exposure.',
        },
        {
          term: 'puntos atascados / stuck points',
          definition:
            'En la TPC, creencias distorsionadas sobre el trauma que mantienen los síntomas del TEPT. Ejemplos: "Fue mi culpa," "No puedo confiar en nadie," "El mundo es completamente peligroso." | In CPT, distorted beliefs about trauma that maintain PTSD symptoms. Examples: "It was my fault," "I cannot trust anyone," "The world is completely dangerous."',
        },
        {
          term: 'prazosina / prazosin',
          definition:
            'Antagonista alfa-1 adrenérgico que reduce las pesadillas del TEPT al bloquear la acción de la norepinefrina en el sistema nervioso central durante el sueño. | Alpha-1 adrenergic antagonist that reduces PTSD nightmares by blocking norepinephrine action in the central nervous system during sleep.',
        },
        {
          term: 'trauma complejo',
          definition:
            'Exposición repetida y prolongada a trauma interpersonal, a menudo comenzando en la infancia. Causa síntomas que van más allá del TEPT clásico, incluyendo desregulación emocional y alteraciones de identidad. | Repeated and prolonged exposure to interpersonal trauma, often beginning in childhood. Causes symptoms beyond classic PTSD, including emotional dysregulation and identity alterations.',
        },
      ],
      clinicalNotes:
        'La psicoterapia enfocada en trauma (TPC, EP, EMDR) es superior a la farmacoterapia para el TEPT. Las benzodiazepinas están contraindicadas — interfieren con la extinción del miedo y la consolidación de memorias terapéuticas. La prazosina (titulada desde 1 mg) es primera línea para pesadillas del TEPT. Usar PCL-5 en español para monitorear el progreso. En pacientes hispanos con trauma migratorio, evaluar todos los períodos (pre-migración, tránsito, post-migración). El trauma complejo puede requerir estabilización previa. Los clínicos bilingües/biculturales mejoran significativamente los resultados. Considerar los síndromes culturales (susto, nervios) en la evaluación. El estatus migratorio no debe ser una barrera para el tratamiento — centros de salud comunitarios (FQHCs) proporcionan servicios independientemente del estatus. | Trauma-focused psychotherapy (CPT, PE, EMDR) is superior to pharmacotherapy for PTSD. Benzodiazepines are contraindicated — they interfere with fear extinction and therapeutic memory consolidation. Prazosin (titrated from 1 mg) is first-line for PTSD nightmares. Use PCL-5 in Spanish to monitor progress. In Hispanic patients with migration trauma, assess all periods (pre-migration, transit, post-migration). Complex trauma may require prior stabilization. Bilingual/bicultural clinicians significantly improve outcomes. Consider cultural syndromes (susto, nervios) in evaluation. Immigration status should not be a barrier to treatment — FQHCs provide services regardless of status.',
    },
    4: {
      level: 4,
      summary:
        'La fisiopatología del TEPT integra disfunción del circuito corticolímbico, alteraciones epigenéticas, desbalance noradrenérgico-endocannabinoide, y fallo de la reconsolidación adaptativa de memorias. Los tratamientos emergentes incluyen MDMA asistida, ketamina, reconsolidación farmacológica (propranolol), y neuromodulación. Las disparidades traumáticas en poblaciones latinas requieren modelos de intervención culturalmente responsivos. | PTSD pathophysiology integrates corticolimbic circuit dysfunction, epigenetic alterations, noradrenergic-endocannabinoid imbalance, and failure of adaptive memory reconsolidation. Emerging treatments include MDMA-assisted therapy, ketamine, pharmacological reconsolidation (propranolol), and neuromodulation. Traumatic disparities in Latino populations require culturally responsive intervention models.',
      explanation: `## Explicación

**Modelos neurobiológicos avanzados:**

*Modelo de circuito del miedo actualizado:*
- Amígdala basolateral: adquisición y expresión del miedo condicionado
- Amígdala central: respuestas autonómicas y conductuales al miedo
- Corteza prefrontal ventromedial/infralímbica: extinción del miedo
- Hipocampo: contextualización de memorias (distinguir peligroso de seguro)
- Ínsula: interocepción, conciencia corporal de la amenaza
- Corteza cingulada anterior dorsal: expresión del miedo aprendido
- Locus cerúleo-norepinefrina: activación/alerta

*Consolidación y reconsolidación de memorias:*
- Las memorias traumáticas se consolidan durante las horas posteriores al evento
- Al reactivarse, entran en un estado lábil (ventana de reconsolidación, ~6 horas)
- Las terapias de exposición aprovechan esta ventana para modificar la memoria
- El propranolol durante la reconsolidación puede debilitar el componente emocional
- El sueño REM es crucial para la consolidación y la extinción
- Las pesadillas del TEPT representan un fallo en el procesamiento de memorias durante el sueño

*Sistema endocannabinoide:*
- Los endocannabinoides (anandamida, 2-AG) facilitan la extinción del miedo
- Receptores CB1 en la amígdala basolateral son cruciales para la extinción
- El TEPT se asocia con niveles reducidos de anandamida
- Polimorfismos en FAAH (enzima degradadora) asociados con riesgo
- Base para el interés terapéutico en cannabinoides

*Neuroinflamación:*
- Citoquinas proinflamatorias elevadas (IL-6, TNF-alfa, CRP)
- Microglía activada
- El estrés crónico induce inflamación periférica y central
- Relación bidireccional entre TEPT e inflamación
- Potencial para intervenciones antiinflamatorias

*Diferencias de sexo:*
- Mujeres: 2x más riesgo de TEPT que hombres
- Factores hormonales: estrógeno modula la extinción del miedo
- Diferencias en circuitos amigdalinos
- Tipo de trauma diferente (más trauma interpersonal en mujeres)
- Fase del ciclo menstrual afecta la extinción del miedo (implicaciones para timing de terapia de exposición)

**Farmacología avanzada y tratamientos emergentes:**

*MDMA asistida (psicoterapia):*
- Aprobada por FDA para TEPT en 2024
- MDMA 80-120 mg en 2-3 sesiones de 8 horas con psicoterapia
- Mecanismo: liberación de serotonina, oxitocina, reducción de actividad amigdalina
- Facilita el procesamiento emocional del trauma
- Tasas de remisión >70% en ensayos clínicos
- Protocolo MAPS: sesiones de preparación, dosificación e integración

*Ketamina:*
- Evidencia preliminar para TEPT resistente
- Mecanismo: antagonismo NMDA, neuroplasticidad rápida, BDNF
- Puede facilitar la extinción del miedo
- Infusión IV o intranasal (esketamina)
- Efectos disociativos pueden ser problemáticos en algunos pacientes con TEPT

*Reconsolidación farmacológica:*
- Propranolol post-reactivación del trauma
- Bloquea la síntesis de proteínas necesaria para la reconsolidación
- Debilita el componente emocional sin borrar la memoria factual
- Estudios mixtos pero línea de investigación activa
- Mifepristona (antagonista de glucocorticoides): otra aproximación

*Nabilona (cannabinoide sintético):*
- Agonista CB1/CB2
- Evidencia para pesadillas del TEPT
- Alternativa o complemento a prazosina
- Consideraciones regulatorias varían por jurisdicción

*Neuromodulación:*
- EMT sobre corteza prefrontal dorsolateral: modulación top-down
- Estimulación del nervio vago (VNS): regulación autonómica
- Neurofeedback: entrenamiento de desactivación amigdalina
- Estimulación transcraneal de corriente directa (tDCS)

**Prevención del TEPT:**

*Intervención temprana:*
- Primeros auxilios psicológicos (NO debriefing obligatorio)
- Apoyo social en las primeras 72 horas
- Normalización de reacciones
- Monitoreo de síntomas persistentes

*Prevención farmacológica:*
- Hidrocortisona en las primeras horas: evidencia de reducción de TEPT
- Propranolol post-trauma: resultados mixtos
- Morfina en trauma con dolor: posible efecto preventivo
- Ketamina post-trauma: en investigación

**Trauma en poblaciones hispanas/latinas - modelos avanzados:**

*Modelo de estrés traumático acumulativo:*
- Trauma pre-migratorio + trauma de tránsito + estrés post-migratorio = carga acumulativa
- La carga alostática del estrés crónico aumenta la vulnerabilidad
- El "weathering" (desgaste) por discriminación crónica
- Los niños migrantes no acompañados: riesgo máximo

*Trauma histórico e intergeneracional:*
- Colonización, genocidio indígena, violencia estatal
- Transmisión epigenética de vulnerabilidad al estrés
- Memoria colectiva del trauma en comunidades
- Marco de justicia social para abordar las raíces del trauma

*Resiliencia cultural:*
- Los valores de comunidad, familismo y solidaridad como factores protectores
- Las prácticas espirituales y ceremoniales como procesamiento del trauma
- Los modelos de sanación colectiva vs. individual
- La narrativa de resistencia y supervivencia como factor de empoderamiento

---
## Explanation

**Advanced neurobiological models:**

*Updated fear circuit model:*
- Basolateral amygdala: acquisition and expression of conditioned fear
- Central amygdala: autonomic and behavioral fear responses
- Ventromedial/infralimbic prefrontal cortex: fear extinction
- Hippocampus: memory contextualization (distinguishing dangerous from safe)
- Insula: interoception, bodily awareness of threat
- Dorsal anterior cingulate cortex: expression of learned fear
- Locus coeruleus-norepinephrine: arousal/alertness

*Memory consolidation and reconsolidation:*
- Traumatic memories consolidate during hours after the event
- Upon reactivation, they enter a labile state (reconsolidation window, ~6 hours)
- Exposure therapies leverage this window to modify memory
- Propranolol during reconsolidation may weaken the emotional component
- REM sleep is crucial for consolidation and extinction
- PTSD nightmares represent a failure of memory processing during sleep

*Endocannabinoid system:*
- Endocannabinoids (anandamide, 2-AG) facilitate fear extinction
- CB1 receptors in basolateral amygdala are crucial for extinction
- PTSD is associated with reduced anandamide levels
- FAAH polymorphisms (degrading enzyme) associated with risk
- Basis for therapeutic interest in cannabinoids

*Neuroinflammation:*
- Elevated proinflammatory cytokines (IL-6, TNF-alpha, CRP)
- Activated microglia
- Chronic stress induces peripheral and central inflammation
- Bidirectional relationship between PTSD and inflammation
- Potential for anti-inflammatory interventions

*Sex differences:*
- Women: 2x more PTSD risk than men
- Hormonal factors: estrogen modulates fear extinction
- Differences in amygdala circuits
- Different trauma type (more interpersonal trauma in women)
- Menstrual cycle phase affects fear extinction (implications for exposure therapy timing)

**Advanced pharmacology and emerging treatments:**

*MDMA-assisted (psychotherapy):*
- FDA approved for PTSD in 2024
- MDMA 80-120 mg in 2-3 eight-hour sessions with psychotherapy
- Mechanism: serotonin release, oxytocin, reduced amygdala activity
- Facilitates emotional processing of trauma
- Remission rates >70% in clinical trials
- MAPS protocol: preparation, dosing, and integration sessions

*Ketamine:*
- Preliminary evidence for treatment-resistant PTSD
- Mechanism: NMDA antagonism, rapid neuroplasticity, BDNF
- May facilitate fear extinction
- IV infusion or intranasal (esketamine)
- Dissociative effects may be problematic in some PTSD patients

*Pharmacological reconsolidation:*
- Post-trauma-reactivation propranolol
- Blocks protein synthesis necessary for reconsolidation
- Weakens emotional component without erasing factual memory
- Mixed studies but active research line
- Mifepristone (glucocorticoid antagonist): another approach

*Nabilone (synthetic cannabinoid):*
- CB1/CB2 agonist
- Evidence for PTSD nightmares
- Alternative or complement to prazosin
- Regulatory considerations vary by jurisdiction

*Neuromodulation:*
- TMS over dorsolateral prefrontal cortex: top-down modulation
- Vagus nerve stimulation (VNS): autonomic regulation
- Neurofeedback: amygdala deactivation training
- Transcranial direct current stimulation (tDCS)

**PTSD prevention:**

*Early intervention:*
- Psychological first aid (NOT mandatory debriefing)
- Social support in the first 72 hours
- Normalization of reactions
- Monitoring of persistent symptoms

*Pharmacological prevention:*
- Hydrocortisone in the first hours: evidence of PTSD reduction
- Post-trauma propranolol: mixed results
- Morphine in trauma with pain: possible preventive effect
- Post-trauma ketamine: under investigation

**Trauma in Hispanic/Latino populations - advanced models:**

*Cumulative traumatic stress model:*
- Pre-migratory trauma + transit trauma + post-migratory stress = cumulative burden
- Allostatic load from chronic stress increases vulnerability
- "Weathering" from chronic discrimination
- Unaccompanied migrant children: maximum risk

*Historical and intergenerational trauma:*
- Colonization, indigenous genocide, state violence
- Epigenetic transmission of stress vulnerability
- Collective trauma memory in communities
- Social justice framework to address trauma roots

*Cultural resilience:*
- Community values, familismo, and solidarity as protective factors
- Spiritual and ceremonial practices as trauma processing
- Collective vs. individual healing models
- Narrative of resistance and survival as empowerment factor`,
      keyTerms: [
        {
          term: 'ventana de reconsolidación / reconsolidation window',
          definition:
            'Período de ~6 horas tras la reactivación de una memoria durante el cual esta se vuelve lábil y modificable. Las terapias de trauma y agentes como propranolol aprovechan esta ventana. | ~6-hour period after memory reactivation during which it becomes labile and modifiable. Trauma therapies and agents like propranolol leverage this window.',
        },
        {
          term: 'MDMA asistida / MDMA-assisted therapy',
          definition:
            'Protocolo terapéutico que usa MDMA para facilitar el procesamiento emocional del trauma durante sesiones prolongadas de psicoterapia. Tasas de remisión >70% en ensayos. | Therapeutic protocol using MDMA to facilitate emotional trauma processing during extended psychotherapy sessions. Remission rates >70% in trials.',
        },
        {
          term: 'carga alostática / allostatic load',
          definition:
            'Desgaste acumulativo de los sistemas biológicos de respuesta al estrés debido a estrés crónico o repetido. En inmigrantes, incluye estrés de múltiples etapas migratorias. | Cumulative wear on biological stress response systems due to chronic or repeated stress. In immigrants, includes stress from multiple migration stages.',
        },
        {
          term: 'sistema endocannabinoide',
          definition:
            'Sistema de señalización cerebral con receptores CB1/CB2 que regula la extinción del miedo, el estado de ánimo y la respuesta al estrés. Está disfuncional en el TEPT. | Brain signaling system with CB1/CB2 receptors that regulates fear extinction, mood, and stress response. It is dysfunctional in PTSD.',
        },
        {
          term: 'trauma histórico / historical trauma',
          definition:
            'Trauma acumulativo y colectivo experimentado por un grupo a través de generaciones (colonización, genocidio, esclavitud). Afecta la salud mental de las generaciones actuales a través de mecanismos epigenéticos y sociales. | Cumulative and collective trauma experienced by a group across generations (colonization, genocide, slavery). Affects current generations\' mental health through epigenetic and social mechanisms.',
        },
      ],
      clinicalNotes:
        'La MDMA asistida con psicoterapia es el avance más significativo en tratamiento del TEPT en décadas, con tasas de remisión >70% en ensayos controlados. Las benzodiazepinas están firmemente contraindicadas en TEPT. La prazosina sigue siendo primera línea para pesadillas aunque un ensayo grande del VA fue negativo (posiblemente por titulación insuficiente). Considerar el timing de exposición terapéutica en mujeres: la fase folicular (estrógeno alto) favorece la extinción del miedo. Para poblaciones latinas: evaluar trauma acumulativo usando un modelo de tres fases (pre-migración, tránsito, post-migración). Los niños migrantes no acompañados necesitan evaluación y tratamiento prioritarios. Los modelos de sanación colectiva (grupos de apoyo comunitario, ceremonias culturales) pueden complementar las terapias individuales basadas en evidencia. La interpretación profesional (no familiares) es esencial para la evaluación de trauma. | MDMA-assisted psychotherapy is the most significant PTSD treatment advance in decades, with remission rates >70% in controlled trials. Benzodiazepines are firmly contraindicated in PTSD. Prazosin remains first-line for nightmares although a large VA trial was negative (possibly due to insufficient titration). Consider timing of therapeutic exposure in women: follicular phase (high estrogen) favors fear extinction. For Latino populations: assess cumulative trauma using a three-phase model (pre-migration, transit, post-migration). Unaccompanied migrant children need priority assessment and treatment. Collective healing models (community support groups, cultural ceremonies) can complement individual evidence-based therapies. Professional interpretation (not family members) is essential for trauma assessment.',
    },
    5: {
      level: 5,
      summary:
        'La investigación de vanguardia en TEPT incluye biotipos basados en conectómica, terapias psicodélicas (MDMA, psilocibina), intervenciones de reconsolidación farmacológica, prevención basada en biomarcadores, y modelos de equidad en trauma que abordan los determinantes sociales del estrés traumático en poblaciones hispanas/latinas. | Cutting-edge PTSD research includes connectomics-based biotypes, psychedelic therapies (MDMA, psilocybin), pharmacological reconsolidation interventions, biomarker-based prevention, and trauma equity models addressing social determinants of traumatic stress in Hispanic/Latino populations.',
      explanation: `## Explicación

**Biotipos de TEPT y nosología dimensional:**

*Biotipos basados en neuroimagen (Lanius, Etkin):*
- Biotipo "disociativo": desconexión cortical-límbica, despersonalización
- Biotipo "hiperreactivo": amígdala hiperactiva, respuestas de sobresalto exageradas
- Biotipo "desregulación emocional": alteración de circuitos prefrontales
- Biotipo "mixto ansiedad-depresión": solapamiento con TDM y TAG
- Implicaciones para selección de tratamiento personalizado

*Conectómica del TEPT:*
- Mapeo completo de redes cerebrales (functional connectome)
- Desconexión entre red de saliencia y red ejecutiva central
- Hiperconectividad de la red de modo por defecto con la amígdala
- "Huella digital" conectómica del TEPT
- Potencial para diagnóstico objetivo basado en neuroimagen

*Abordaje transdiagnóstico:*
- El TEPT como disrupción de múltiples dominios RDoC
- Superposición con TDM, TAG, trastornos disociativos
- ¿Es el TEPT un trastorno unitario o un espectro de condiciones?
- Implicaciones nosológicas: del DSM a un modelo basado en circuitos

**Biomarcadores emergentes:**

*Biomarcadores predictivos de TEPT (pre-trauma):*
- Variantes de FKBP5 + exposición a trauma infantil
- Tono vagal bajo (HRV reducida) predice vulnerabilidad
- Niveles bajos de NPY pre-despliegue predicen TEPT en militares
- Respuesta de cortisol al estrés como predictor
- Evaluación de riesgo poligénico (PRS) en desarrollo

*Biomarcadores de estado y progreso:*
- Metilación de ADN (NR3C1, FKBP5, SLC6A4) en sangre periférica
- Exosomas derivados del cerebro en sangre (información sobre neuroinflamación)
- Metabolómica: perfiles de aminoácidos y lípidos
- BDNF como marcador de respuesta al tratamiento
- Panel de citoquinas inflamatorias

*Biomarcadores digitales avanzados:*
- Microexpresiones faciales por análisis de video
- Análisis de prosodia vocal para detección de TEPT
- Patrones de movimiento ocular (reducción del comportamiento exploratorio)
- Machine learning para predicción de crisis a partir de datos de smartphone
- Realidad virtual como herramienta diagnóstica y terapéutica

**Terapéuticas de nueva generación:**

*MDMA - detalles avanzados:*
- El protocolo actual: 3 sesiones de dosificación separadas por 3-5 semanas
- Mecanismo molecular: liberación masiva de serotonina (5-HT), norepinefrina, dopamina
- Aumento de oxitocina: facilita confianza y conexión social
- Reducción de actividad amigdalina con aumento de conectividad amígdala-corteza
- Restablecimiento de neuroplasticidad en circuitos del miedo
- Consideraciones: riesgo cardiovascular, interacciones con ISRS, neurotoxicidad

*Psilocibina para TEPT:*
- Ensayos clínicos en etapa temprana
- Mecanismo: agonismo 5-HT2A → neuroplasticidad masiva
- Potencial para reestructuración de redes cerebrales
- Consideraciones culturales: uso ceremonial en comunidades indígenas mexicanas
- Mazatec tradition: continuidad cultural en el contexto clínico moderno

*Stellate ganglion block (SGB):*
- Bloqueo del ganglio estrellado cervicotorácico
- Reduce la respuesta simpática al estrés
- Mecanismo: modulación del sistema nervioso simpático
- Ensayos clínicos con resultados prometedores
- Efecto rápido (días vs. semanas)

*Terapia génica y optogenética (preclínico):*
- Modulación selectiva de poblaciones neuronales en la amígdala
- Activación de neuronas de extinción vs. neuronas de miedo
- "Borrado" selectivo de memorias traumáticas (ético solo en investigación preclínica)
- Vectores virales para expresión de receptores modificados (DREADDs)

*Intervenciones basadas en el sueño:*
- Reactivación de memorias dirigida durante el sueño (TMR)
- Modulación del sueño REM para facilitar procesamiento del trauma
- Terapia de ensayo de imágenes para pesadillas (IRT)
- Estimulación sonora durante el sueño de ondas lentas

**Prevención basada en biomarcadores:**

*Identificación de individuos en riesgo:*
- Screenings pre-despliegue en militares con PRS + biomarcadores
- Monitoreo post-trauma con wearables (HRV, cortisol, actigrafía)
- Intervención temprana dirigida por riesgo biológico
- Ventana de oportunidad: primeras 6 horas (prevención de consolidación)

*Farmacología preventiva:*
- Hidrocortisona IV en las primeras 6 horas post-trauma
- Propranolol post-reactivación (reconsolidación bloqueada)
- Nabilona para prevención de consolidación (preclínico)
- Antibióticos (D-cicloserina) para potenciar intervención temprana

**Equidad en trauma y poblaciones hispanas/latinas - investigación de frontera:**

*Trauma estructural:*
- Las políticas migratorias como fuentes de trauma (separación familiar, detención)
- La pobreza y la discriminación como trauma crónico
- El racismo como determinante social del TEPT
- Marcos de justicia social para prevención primaria del trauma

*Investigación culturalmente centrada:*
- Métodos de investigación participativa con comunidades latinas
- Medidas de trauma validadas culturalmente
- Investigación en idioma preferido del participante
- Co-creación de intervenciones con la comunidad

*Innovaciones en acceso:*
- Telepsiquiatría bilingüe para regiones desatendidas
- Intervenciones escalonadas basadas en IA con adaptación cultural
- Capacitación de promotoras de salud en primeros auxilios psicológicos
- Modelos de atención informada por trauma en escuelas y centros comunitarios
- Apps terapéuticas en español para monitoreo y autogestión

*Modelos de sanación cultural:*
- Integración de prácticas de sanación indígenas con terapias basadas en evidencia
- Testimonios (narrativa terapéutica con dimensión política) para sobrevivientes de violencia de estado
- Grupos de apoyo mutuo para familias separadas
- Activismo como procesamiento del trauma colectivo

**Direcciones futuras:**
- Diagnóstico objetivo basado en biomarcadores (neuroimagen, molecular, digital)
- Tratamientos personalizados basados en biotipos de TEPT
- Prevención dirigida post-trauma basada en riesgo biológico
- Terapias de acción rápida accesibles para todas las poblaciones
- Modelos de equidad que aborden las raíces estructurales del trauma
- Integración de la sabiduría cultural en los protocolos clínicos

---
## Explanation

**PTSD biotypes and dimensional nosology:**

*Neuroimaging-based biotypes (Lanius, Etkin):*
- "Dissociative" biotype: cortical-limbic disconnection, depersonalization
- "Hyperreactive" biotype: hyperactive amygdala, exaggerated startle responses
- "Emotional dysregulation" biotype: prefrontal circuit alterations
- "Mixed anxiety-depression" biotype: overlap with MDD and GAD
- Implications for personalized treatment selection

*PTSD connectomics:*
- Complete brain network mapping (functional connectome)
- Disconnection between salience network and central executive network
- Default mode network hyperconnectivity with amygdala
- PTSD connectomic "fingerprint"
- Potential for objective neuroimaging-based diagnosis

*Transdiagnostic approach:*
- PTSD as disruption of multiple RDoC domains
- Overlap with MDD, GAD, dissociative disorders
- Is PTSD a unitary disorder or a spectrum of conditions?
- Nosological implications: from DSM to circuit-based model

**Emerging biomarkers:**

*Predictive biomarkers (pre-trauma):*
- FKBP5 variants + childhood trauma exposure
- Low vagal tone (reduced HRV) predicts vulnerability
- Low pre-deployment NPY levels predict PTSD in military
- Cortisol stress response as predictor
- Polygenic risk assessment (PRS) under development

*State and progress biomarkers:*
- DNA methylation (NR3C1, FKBP5, SLC6A4) in peripheral blood
- Brain-derived exosomes in blood (neuroinflammation information)
- Metabolomics: amino acid and lipid profiles
- BDNF as treatment response marker
- Inflammatory cytokine panel

*Advanced digital biomarkers:*
- Facial microexpressions by video analysis
- Vocal prosody analysis for PTSD detection
- Eye movement patterns (reduced exploratory behavior)
- Machine learning for crisis prediction from smartphone data
- Virtual reality as diagnostic and therapeutic tool

**Next-generation therapeutics:**

*MDMA - advanced details:*
- Current protocol: 3 dosing sessions separated by 3-5 weeks
- Molecular mechanism: massive serotonin (5-HT), norepinephrine, dopamine release
- Oxytocin increase: facilitates trust and social connection
- Reduced amygdala activity with increased amygdala-cortex connectivity
- Neuroplasticity restoration in fear circuits
- Considerations: cardiovascular risk, SSRI interactions, neurotoxicity

*Psilocybin for PTSD:*
- Early-stage clinical trials
- Mechanism: 5-HT2A agonism → massive neuroplasticity
- Potential for brain network restructuring
- Cultural considerations: ceremonial use in indigenous Mexican communities
- Mazatec tradition: cultural continuity in modern clinical context

*Stellate ganglion block (SGB):*
- Cervicothoracic stellate ganglion block
- Reduces sympathetic stress response
- Mechanism: sympathetic nervous system modulation
- Clinical trials with promising results
- Rapid effect (days vs. weeks)

*Gene therapy and optogenetics (preclinical):*
- Selective modulation of neuronal populations in the amygdala
- Activation of extinction neurons vs. fear neurons
- Selective "erasure" of traumatic memories (ethical only in preclinical research)
- Viral vectors for modified receptor expression (DREADDs)

*Sleep-based interventions:*
- Targeted memory reactivation during sleep (TMR)
- REM sleep modulation to facilitate trauma processing
- Imagery rehearsal therapy for nightmares (IRT)
- Sound stimulation during slow-wave sleep

**Biomarker-based prevention:**

*High-risk individual identification:*
- Pre-deployment screening in military with PRS + biomarkers
- Post-trauma monitoring with wearables (HRV, cortisol, actigraphy)
- Early intervention directed by biological risk
- Window of opportunity: first 6 hours (consolidation prevention)

*Preventive pharmacology:*
- IV hydrocortisone within first 6 hours post-trauma
- Post-reactivation propranolol (blocked reconsolidation)
- Nabilone for consolidation prevention (preclinical)
- Antibiotics (D-cycloserine) to potentiate early intervention

**Trauma equity and Hispanic/Latino populations - frontier research:**

*Structural trauma:*
- Immigration policies as trauma sources (family separation, detention)
- Poverty and discrimination as chronic trauma
- Racism as a social determinant of PTSD
- Social justice frameworks for primary trauma prevention

*Culturally centered research:*
- Participatory research methods with Latino communities
- Culturally validated trauma measures
- Research in participant's preferred language
- Co-creation of interventions with the community

*Access innovations:*
- Bilingual telepsychiatry for underserved regions
- AI-based stepped interventions with cultural adaptation
- Community health worker training in psychological first aid
- Trauma-informed care models in schools and community centers
- Spanish-language therapeutic apps for monitoring and self-management

*Cultural healing models:*
- Integration of indigenous healing practices with evidence-based therapies
- Testimonios (therapeutic narrative with political dimension) for state violence survivors
- Mutual support groups for separated families
- Activism as collective trauma processing

**Future directions:**
- Objective biomarker-based diagnosis (neuroimaging, molecular, digital)
- Personalized treatments based on PTSD biotypes
- Targeted post-trauma prevention based on biological risk
- Accessible rapid-acting therapies for all populations
- Equity models addressing structural roots of trauma
- Integration of cultural wisdom in clinical protocols`,
      keyTerms: [
        {
          term: 'conectómica / connectomics',
          definition:
            'Mapeo comprensivo de las conexiones neurales del cerebro. En el TEPT, la "huella digital conectómica" puede permitir diagnóstico objetivo y predicción de respuesta al tratamiento. | Comprehensive mapping of brain neural connections. In PTSD, the connectomic "fingerprint" may enable objective diagnosis and treatment response prediction.',
        },
        {
          term: 'bloqueo del ganglio estrellado (SGB)',
          definition:
            'Procedimiento mínimamente invasivo que bloquea el ganglio simpático cervicotorácico. Reduce la hiperactivación simpática del TEPT con efecto rápido. En ensayos clínicos prometedores. | Minimally invasive procedure blocking the cervicothoracic sympathetic ganglion. Reduces PTSD sympathetic hyperactivation with rapid effect. In promising clinical trials.',
        },
        {
          term: 'testimonios',
          definition:
            'Forma de narrativa terapéutica con dimensión política y comunitaria, desarrollada en América Latina para sobrevivientes de violencia de estado. Integra procesamiento del trauma con justicia social y dignificación. | Form of therapeutic narrative with political and community dimension, developed in Latin America for state violence survivors. Integrates trauma processing with social justice and dignity.',
        },
        {
          term: 'DREADDs',
          definition:
            'Designer Receptors Exclusively Activated by Designer Drugs. Herramienta de investigación preclínica que permite la modulación selectiva de poblaciones neuronales específicas en circuitos del miedo. | Designer Receptors Exclusively Activated by Designer Drugs. Preclinical research tool enabling selective modulation of specific neuronal populations in fear circuits.',
        },
        {
          term: 'trauma estructural',
          definition:
            'Trauma derivado de sistemas e instituciones (políticas migratorias, racismo sistémico, pobreza estructural) en lugar de eventos individuales. Requiere soluciones a nivel sistémico además de tratamiento individual. | Trauma derived from systems and institutions (immigration policies, systemic racism, structural poverty) rather than individual events. Requires systemic-level solutions in addition to individual treatment.',
        },
      ],
      clinicalNotes:
        'Estado del arte: La MDMA asistida con psicoterapia es la innovación más transformadora para el TEPT, con tasas de remisión superiores a cualquier tratamiento previo. El SGB (bloqueo del ganglio estrellado) es una opción rápida para pacientes en crisis o resistentes a otros tratamientos. La investigación en reconsolidación farmacológica (propranolol) es prometedora pero aún no lista para la práctica clínica rutinaria. Los biotipos de TEPT están en desarrollo pero podrían revolucionar la selección de tratamiento personalizado. Para poblaciones latinas: los testimonios (narrativa terapéutica con dimensión política) son una innovación nacida en América Latina con creciente respaldo empírico. La integración de prácticas de sanación cultural con terapias basadas en evidencia es el modelo más prometedor para comunidades diversas. La investigación participativa con comunidades latinas es esencial para desarrollar intervenciones culturalmente válidas. Los determinantes sociales del trauma (políticas migratorias, discriminación, pobreza) deben abordarse como parte de cualquier estrategia integral de prevención. La Línea 988 en español y las redes de promotoras de salud son las intervenciones de acceso más importantes actualmente. | State of the art: MDMA-assisted psychotherapy is the most transformative PTSD innovation, with remission rates exceeding any previous treatment. SGB (stellate ganglion block) is a rapid option for patients in crisis or resistant to other treatments. Pharmacological reconsolidation research (propranolol) is promising but not yet ready for routine clinical practice. PTSD biotypes are under development but could revolutionize personalized treatment selection. For Latino populations: testimonios (therapeutic narrative with political dimension) are a Latin America-born innovation with growing empirical support. Integration of cultural healing practices with evidence-based therapies is the most promising model for diverse communities. Participatory research with Latino communities is essential for developing culturally valid interventions. Social determinants of trauma (immigration policies, discrimination, poverty) must be addressed as part of any comprehensive prevention strategy. The 988 Lifeline in Spanish and promotora de salud networks are the most important access interventions currently.',
    },
  },

  media: [],

  citations: [
    {
      id: 'ref-dsm5-tr-ptsd',
      type: 'textbook',
      title: 'Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision (DSM-5-TR)',
      authors: ['American Psychiatric Association'],
      source: 'American Psychiatric Publishing, 2022',
      chapter: 'Trauma- and Stressor-Related Disorders',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-foa-pe',
      type: 'textbook',
      title: 'Prolonged Exposure Therapy for PTSD: Emotional Processing of Traumatic Experiences',
      authors: ['Foa EB', 'Hembree EA', 'Rothbaum BO'],
      source: 'Oxford University Press',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-resick-cpt',
      type: 'textbook',
      title: 'Cognitive Processing Therapy for PTSD: A Comprehensive Manual',
      authors: ['Resick PA', 'Monson CM', 'Chard KM'],
      source: 'Guilford Press',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-maps-mdma',
      type: 'article',
      title: 'MDMA-Assisted Therapy for Severe PTSD: A Randomized, Double-Blind, Placebo-Controlled Phase 3 Study',
      authors: ['Mitchell JM', 'Bogenschutz M', 'Lilienstein A'],
      source: 'Nature Medicine, 2021',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-kirmayer-cultural-trauma',
      type: 'textbook',
      title: 'Cultural Consultation: Encountering the Other in Mental Health Care',
      authors: ['Kirmayer LJ', 'Guzder J', 'Rousseau C'],
      source: 'Springer',
      license: 'CC BY 4.0',
    },
  ],

  crossReferences: [
    { targetId: 'psychiatry-ptsd', targetType: 'condition', relationship: 'related', label: 'PTSD (English primary)' },
    { targetId: 'condition-depresion-depression', targetType: 'condition', relationship: 'related', label: 'Depresión Mayor / Major Depression' },
    { targetId: 'condition-ansiedad-generalizada-gad', targetType: 'condition', relationship: 'related', label: 'TAG / GAD' },
    { targetId: 'psychiatry-acute-stress-disorder', targetType: 'condition', relationship: 'related', label: 'Acute Stress Disorder / Trastorno de Estrés Agudo' },
    { targetId: 'psychiatry-ssris', targetType: 'topic', relationship: 'see-also', label: 'SSRIs / ISRS' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['psychiatry', 'mental-health', 'trauma', 'cultural-competency', 'immigration-health'],
    keywords: [
      'TEPT',
      'PTSD',
      'trauma',
      'estrés postraumático',
      'flashback',
      'pesadillas',
      'nightmares',
      'exposición prolongada',
      'TPC',
      'CPT',
      'EMDR',
      'MDMA',
      'prazosina',
      'trauma migratorio',
      'migration trauma',
      'susto',
      'violencia',
      'salud mental latina',
      'Latino mental health',
    ],
    clinicalRelevance: 'critical',
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

export default trastornoEstresPostraumaticoPtsdContent;
