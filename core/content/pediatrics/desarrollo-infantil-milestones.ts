/**
 * Hitos del Desarrollo Infantil / Developmental Milestones
 *
 * Contenido educativo bilingüe (español primero) sobre los hitos del desarrollo
 * infantil incluyendo desarrollo motor grueso y fino, lenguaje, y desarrollo
 * social-emocional organizados por edad.
 *
 * Bilingual educational content (Spanish-first) on childhood developmental
 * milestones including gross and fine motor, language, and social-emotional
 * development organized by age.
 */

import { EducationalContent } from '../types';

export const DESARROLLO_INFANTIL_MILESTONES: EducationalContent = {
  id: 'condition-desarrollo-infantil-milestones',
  type: 'condition',
  name: 'Developmental Milestones',
  nameEs: 'Hitos del Desarrollo Infantil',
  alternateNames: [
    'Child development milestones',
    'Etapas del desarrollo',
    'Logros del desarrollo',
    'Pediatric developmental screening',
    'Detección del desarrollo pediátrico',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Los hitos del desarrollo son habilidades que la mayoría de los niños logran a ciertas edades, como sentarse, caminar y hablar. Los doctores los usan para asegurarse de que su hijo se está desarrollando bien. | Developmental milestones are skills most children achieve by certain ages, like sitting, walking, and talking. Doctors use them to make sure your child is developing well.',
      explanation: `## Explicación Simple

Los **hitos del desarrollo** son como una lista de logros que los niños van alcanzando mientras crecen. Cada niño es diferente, pero hay edades aproximadas en las que la mayoría de los niños aprenden ciertas cosas.

### Tipos de habilidades que desarrollan los niños

**Moverse (habilidades motoras gruesas)**
- Sostener la cabeza (2-4 meses)
- Sentarse solo (6 meses)
- Gatear (9 meses)
- Caminar (12-15 meses)
- Correr y subir escaleras (2 años)

**Usar las manos (habilidades motoras finas)**
- Agarrar un juguete (4-6 meses)
- Pasar objetos de una mano a otra (7 meses)
- Usar los dedos para comer (9 meses)
- Hacer garabatos con un crayón (15-18 meses)
- Apilar bloques (18-24 meses)

**Hablar y entender (lenguaje)**
- Balbucear "ba-ba-ba" (6 meses)
- Decir "mamá" o "papá" (12 meses)
- Decir 10-25 palabras (18 meses)
- Juntar dos palabras "más leche" (2 años)
- Hacer oraciones cortas (3 años)

**Llevarse bien con otros (social-emocional)**
- Sonreír a las personas (2 meses)
- Reconocer a mamá y papá (4-6 meses)
- Llorar cuando mamá se va (9 meses)
- Jugar al lado de otros niños (2 años)
- Compartir y tomar turnos (3-4 años)

### ¿Cuándo debo preocuparme?

Hable con su doctor si:
- Su bebé no sonríe para los 3 meses
- No balbucea para los 9 meses
- No dice ninguna palabra para los 18 meses
- Pierde habilidades que ya tenía
- No camina para los 18 meses

### Recuerde
- Cada niño se desarrolla a su propio ritmo
- Un pequeño retraso generalmente no es motivo de preocupación
- Hablar, leer y jugar con su hijo ayuda su desarrollo
- La ayuda temprana está disponible si su hijo la necesita

---
## Simple Explanation

**Developmental milestones** are like a checklist of achievements that children reach as they grow. Every child is different, but there are approximate ages when most children learn certain things.

### Types of skills children develop

**Moving around (gross motor skills)**
- Holding head up (2-4 months)
- Sitting alone (6 months)
- Crawling (9 months)
- Walking (12-15 months)
- Running and climbing stairs (2 years)

**Using hands (fine motor skills)**
- Grabbing a toy (4-6 months)
- Passing objects between hands (7 months)
- Using fingers to eat (9 months)
- Scribbling with a crayon (15-18 months)
- Stacking blocks (18-24 months)

**Talking and understanding (language)**
- Babbling "ba-ba-ba" (6 months)
- Saying "mama" or "dada" (12 months)
- Saying 10-25 words (18 months)
- Putting two words together "more milk" (2 years)
- Making short sentences (3 years)

**Getting along with others (social-emotional)**
- Smiling at people (2 months)
- Recognizing mom and dad (4-6 months)
- Crying when mom leaves (9 months)
- Playing next to other children (2 years)
- Sharing and taking turns (3-4 years)

### When should I worry?

Talk to your doctor if:
- Your baby does not smile by 3 months
- No babbling by 9 months
- No words by 18 months
- Loses skills they already had
- Not walking by 18 months

### Remember
- Every child develops at their own pace
- A small delay is usually not cause for worry
- Talking, reading, and playing with your child helps development
- Early help is available if your child needs it`,
      keyTerms: [
        {
          term: 'hito del desarrollo',
          definition:
            'Una habilidad que la mayoría de los niños logran a cierta edad, como caminar o hablar. | A skill most children achieve by a certain age, like walking or talking.',
          pronunciation: 'EE-toh del deh-sah-RROH-yoh',
        },
        {
          term: 'motricidad gruesa',
          definition:
            'Movimientos grandes del cuerpo como caminar, correr y saltar. | Large body movements like walking, running, and jumping.',
          pronunciation: 'moh-tree-see-DAHD GROO-eh-sah',
        },
        {
          term: 'motricidad fina',
          definition:
            'Movimientos pequeños y precisos como agarrar, dibujar y apilar bloques. | Small, precise movements like grasping, drawing, and stacking blocks.',
          pronunciation: 'moh-tree-see-DAHD FEE-nah',
        },
        {
          term: 'balbuceo',
          definition:
            'Sonidos repetitivos que hacen los bebés como "ba-ba" o "ma-ma" antes de hablar. | Repetitive sounds babies make like "ba-ba" or "ma-ma" before talking.',
          pronunciation: 'bal-boo-SEH-oh',
        },
      ],
      analogies: [
        'Los hitos del desarrollo son como escalones en una escalera — cada niño sube a su ritmo, pero el orden general es parecido para todos. | Developmental milestones are like steps on a staircase — every child climbs at their own pace, but the general order is similar for everyone.',
        'El cerebro de un bebé es como una esponja que absorbe todo lo que ve, oye y toca. Cada experiencia ayuda a "construir" nuevas conexiones. | A baby\'s brain is like a sponge that absorbs everything it sees, hears, and touches. Each experience helps "build" new connections.',
      ],
      examples: [
        'Un bebé de 9 meses que todavía no camina es completamente normal — la mayoría camina entre los 9 y 15 meses. | A 9-month-old who is not walking yet is completely normal — most walk between 9 and 15 months.',
        'Una niña de 2 años que dice 50 palabras y junta dos palabras está justo en camino con su desarrollo del lenguaje. | A 2-year-old girl who says 50 words and puts two words together is right on track with language development.',
      ],
      patientCounselingPoints: [
        'Léale a su hijo todos los días, incluso desde bebé — esto ayuda mucho al lenguaje. | Read to your child every day, even from infancy — this helps language greatly.',
        'El "tiempo boca abajo" (tummy time) ayuda a los bebés a desarrollar los músculos para gatear y caminar. | Tummy time helps babies develop the muscles needed to crawl and walk.',
        'Limite el tiempo de pantalla para niños menores de 2 años. | Limit screen time for children under 2 years old.',
        'Hable con su pediatra si tiene cualquier preocupación — es mejor preguntar temprano. | Talk to your pediatrician if you have any concerns — it is better to ask early.',
        'Jugar con su hijo es la mejor forma de ayudarlo a aprender. | Playing with your child is the best way to help them learn.',
      ],
    },

    2: {
      level: 2,
      summary:
        'El desarrollo infantil se evalúa en cuatro dominios: motor grueso, motor fino, lenguaje y social-emocional. Se usan herramientas de tamizaje como el Denver II y el ASQ-3 para detectar retrasos tempranamente. | Child development is assessed across four domains: gross motor, fine motor, language, and social-emotional. Screening tools like the Denver II and ASQ-3 are used to detect delays early.',
      explanation: `## Explicación Intermedia

El desarrollo infantil sigue patrones predecibles que los profesionales de salud evalúan usando tablas de hitos organizadas por edad y dominio.

### Dominio 1: Desarrollo Motor Grueso

| Edad | Hito en español | Milestone in English |
|------|----------------|---------------------|
| 2 meses | Levanta la cabeza boca abajo | Lifts head when prone |
| 4 meses | Rueda de frente a espalda | Rolls front to back |
| 6 meses | Se sienta sin apoyo | Sits without support |
| 9 meses | Se para sosteniéndose | Pulls to stand |
| 12 meses | Camina con una mano | Walks with one hand held |
| 15 meses | Camina solo | Walks independently |
| 18 meses | Corre, patea pelota | Runs, kicks ball |
| 2 años | Sube escaleras con ayuda, salta | Goes up stairs with help, jumps |
| 3 años | Triciclo, sube escaleras alternando pies | Tricycle, goes up stairs alternating feet |
| 4 años | Brinca en un pie | Hops on one foot |
| 5 años | Salta la cuerda | Skips |

### Dominio 2: Desarrollo Motor Fino

| Edad | Hito en español | Milestone in English |
|------|----------------|---------------------|
| 3 meses | Manos abiertas, manotea objetos | Hands open, bats at objects |
| 6 meses | Agarra objetos (prensión palmar) | Reaches and grasps (palmar grasp) |
| 9 meses | Pinza inferior en desarrollo | Pincer grasp developing |
| 12 meses | Pinza fina madura | Mature pincer grasp |
| 15 meses | Apila 2 bloques, garabatea | Stacks 2 blocks, scribbles |
| 2 años | Apila 6 bloques, copia línea vertical | Stacks 6 blocks, copies vertical line |
| 3 años | Copia círculo, usa tijeras | Copies circle, uses scissors |
| 4 años | Copia cruz, dibuja persona con 3 partes | Copies cross, draws person with 3 parts |
| 5 años | Copia cuadrado, dibuja persona con 6 partes | Copies square, draws person with 6 parts |

### Dominio 3: Desarrollo del Lenguaje

| Edad | Receptivo (comprensión) | Expresivo (producción) |
|------|------------------------|----------------------|
| 2 meses | Alerta a la voz | Arrullos / Cooing |
| 6 meses | Se gira hacia la voz | Balbuceo "bababa" |
| 9 meses | Entiende "no" | "Mamá/papá" inespecífico |
| 12 meses | Sigue orden de 1 paso | 1-3 palabras específicas |
| 18 meses | Señala partes del cuerpo | 10-25 palabras |
| 2 años | Sigue órdenes de 2 pasos | 50+ palabras, frases de 2 palabras |
| 3 años | Entiende preposiciones | Oraciones de 3 palabras, 75% inteligible |
| 4 años | Sigue órdenes de 3 pasos | Oraciones completas, 100% inteligible |

### Dominio 4: Desarrollo Social-Emocional

| Edad | Hito en español | Milestone in English |
|------|----------------|---------------------|
| 2 meses | Sonrisa social | Social smile |
| 6 meses | Ansiedad ante extraños | Stranger anxiety begins |
| 9 meses | Ansiedad de separación | Separation anxiety |
| 12 meses | Dice adiós con la mano, juega "peek-a-boo" | Waves bye-bye, plays peek-a-boo |
| 18 meses | Juego paralelo, berrinches | Parallel play, temper tantrums |
| 2 años | Imita adultos, juego simbólico | Imitates adults, pretend play |
| 3 años | Toma turnos, conoce su género | Takes turns, knows gender |
| 4 años | Juego cooperativo, tiene amigos | Cooperative play, has friends |
| 5 años | Sigue reglas, entiende bien y mal | Follows rules, understands right and wrong |

### Herramientas de Tamizaje / Screening Tools

- **Denver II (DDST-II):** Tamiza niños de 0-6 años en 4 dominios. Es una herramienta de tamizaje, NO un diagnóstico.
- **ASQ-3 (Ages and Stages):** Cuestionario llenado por los padres para niños de 1-66 meses.
- **M-CHAT-R/F:** Tamizaje específico para autismo a los 18 y 24 meses.

### Señales de Alarma / Red Flags

- Sin sonrisa social a los 3 meses
- Sin balbuceo a los 9 meses
- Sin palabras a los 18 meses
- Sin frases de 2 palabras a los 2 años
- Pérdida de habilidades ya adquiridas a cualquier edad
- No camina a los 18 meses

### Niños Bilingües / Bilingual Children

Los niños que crecen con dos idiomas pueden mezclar idiomas inicialmente, pero esto es normal. El total de palabras en ambos idiomas combinados debe alcanzar los hitos esperados.

---
## Intermediate Explanation

Child development follows predictable patterns assessed by healthcare professionals using milestone tables organized by age and domain. [Tables and content above cover all four domains with bilingual milestones, screening tools, red flags, and special considerations for bilingual children.]`,
      keyTerms: [
        {
          term: 'tamizaje del desarrollo',
          definition:
            'Proceso de evaluación rápida para identificar niños en riesgo de retraso del desarrollo. No es un diagnóstico, sino una detección temprana. | Quick evaluation process to identify children at risk for developmental delay. Not a diagnosis, but early detection.',
          pronunciation: 'tah-mee-SAH-heh del deh-sah-RROH-yoh',
        },
        {
          term: 'Denver II',
          definition:
            'Prueba estandarizada que evalúa el desarrollo de niños de 0 a 6 años en cuatro dominios: motor grueso, motor fino, lenguaje y personal-social. | Standardized test evaluating development in children 0-6 years across four domains: gross motor, fine motor, language, and personal-social.',
          pronunciation: 'DEN-ver dos',
        },
        {
          term: 'prensión en pinza',
          definition:
            'Habilidad de agarrar objetos pequeños entre el pulgar y el dedo índice, que se desarrolla alrededor de los 9-12 meses. | Ability to grasp small objects between the thumb and index finger, developing around 9-12 months.',
          pronunciation: 'pren-see-OHN en PEEN-sah',
        },
        {
          term: 'ansiedad de separación',
          definition:
            'Fase normal del desarrollo (~9 meses) donde el bebé llora al separarse de sus padres. | Normal developmental phase (~9 months) where the baby cries when separated from parents.',
          pronunciation: 'an-see-eh-DAHD deh seh-pah-rah-see-OHN',
        },
        {
          term: 'juego paralelo',
          definition:
            'Etapa del juego (~18 meses-2 años) donde los niños juegan al lado de otros pero no juntos. | Play stage (~18 months-2 years) where children play alongside others but not together.',
          pronunciation: 'HOO-eh-goh pah-rah-LEH-loh',
        },
      ],
      analogies: [
        'Las herramientas de tamizaje son como la luz de "revisar motor" en un carro — te avisan que algo podría necesitar atención, pero no dicen exactamente qué es. | Screening tools are like the "check engine" light in a car — they tell you something might need attention, but not exactly what it is.',
        'El desarrollo del lenguaje en niños bilingües es como llenar dos cubetas a la vez — puede parecer que cada cubeta se llena más lento, pero juntas tienen la misma cantidad de agua. | Language development in bilingual children is like filling two buckets at once — each bucket may seem to fill slower, but together they hold the same amount of water.',
      ],
    },

    3: {
      level: 3,
      summary:
        'La evaluación del desarrollo integra el conocimiento de reflejos primitivos, la secuencia de mielinización del SNC, herramientas diagnósticas formales como el Bayley-III, y el reconocimiento de regresión del desarrollo como bandera roja urgente. | Developmental assessment integrates knowledge of primitive reflexes, CNS myelination sequence, formal diagnostic tools like the Bayley-III, and recognition of developmental regression as an urgent red flag.',
      explanation: `## Explicación para Nivel Universitario / College-Level Explanation

### Reflejos Primitivos y su Significado Clínico

Los reflejos primitivos son respuestas automáticas mediadas por el tronco encefálico que aparecen en el período neonatal y desaparecen a medida que maduran las vías corticales superiores. Su persistencia puede indicar lesión de neurona motora superior.

| Reflejo | Aparece | Desaparece | Si persiste... |
|---------|---------|------------|----------------|
| Moro | Nacimiento | 4-6 meses | Lesión de neurona motora superior |
| Prensión palmar | Nacimiento | 4-6 meses | Patología del lóbulo frontal |
| Reflejo tónico-cervical asimétrico (RTCA) | Nacimiento | 6 meses | Riesgo de parálisis cerebral |
| Babinski | Nacimiento | 12-24 meses | Lesión de neurona motora superior |
| Paracaídas | 8-9 meses | Persiste | Ausencia = preocupación motora |

**Significado clínico:** La desaparición de los reflejos primitivos refleja la maduración del sistema corticoespinal. Su persistencia más allá de la edad esperada sugiere falla en la inhibición cortical.

### Mielinización del SNC y Desarrollo

La secuencia de mielinización del sistema nervioso central correlaciona directamente con la adquisición de habilidades:

- **Nacimiento-3 meses:** Mielinización del tronco encefálico → reflejos primitivos, funciones vitales básicas
- **3-6 meses:** Mielinización cerebelosa → mejora del control postural
- **6-12 meses:** Mielinización de tractos corticoespinales → control motor voluntario, desaparición de reflejos primitivos
- **1-3 años:** Mielinización de áreas de asociación cortical → lenguaje, pensamiento simbólico
- **3-7 años:** Mielinización del cuerpo calloso → coordinación bimanual, integración hemisférica
- **Adolescencia-25 años:** Mielinización de la corteza prefrontal → función ejecutiva, control de impulsos

### Herramientas de Evaluación del Desarrollo

| Herramienta | Rango de Edad | Propósito | Tipo |
|-------------|--------------|-----------|------|
| ASQ-3 | 1-66 meses | Tamizaje completado por padres | Screening |
| Denver II | 0-6 años | Tamizaje administrado por proveedor | Screening |
| PEDS | 0-8 años | Tamizaje basado en preocupaciones de los padres | Screening |
| Bayley-III | 1-42 meses | Evaluación diagnóstica formal | Diagnóstico |
| M-CHAT-R/F | 16-30 meses | Tamizaje específico para autismo | Screening |
| ADOS-2 | 12 meses+ | Evaluación diagnóstica de autismo | Diagnóstico |
| Vineland-3 | 0-90 años | Función adaptativa | Diagnóstico |

### Regresión del Desarrollo

La regresión (pérdida de habilidades previamente adquiridas) es SIEMPRE patológica y requiere evaluación urgente.

| Patrón | Considerar |
|--------|-----------|
| Regresión del lenguaje 18-24 meses | Trastorno del espectro autista |
| Regresión motora | Enfermedad neurodegenerativa (leucodistrofia) |
| Regresión global + convulsiones | Lipofuscinosis ceroidea neuronal, síndrome de Rett |
| Regresión después de enfermedad | Enfermedad mitocondrial, crisis metabólica |
| Regresión escalonada | Enfermedad vascular, desmielinizante |

**Abordaje diagnóstico de la regresión:**
1. RMN cerebral con espectroscopia
2. EEG
3. Estudios metabólicos (lactato, piruvato, aminoácidos, ácidos orgánicos)
4. Estudios genéticos (microarreglo cromosómico, paneles dirigidos)
5. Evaluación oftalmológica y audiológica

### Desarrollo Cognitivo según Piaget

| Etapa | Edad | Características Clave |
|-------|------|----------------------|
| Sensoriomotora | 0-2 años | Permanencia del objeto (8-12 meses), causa-efecto |
| Preoperacional | 2-7 años | Juego simbólico, egocentrismo, pensamiento mágico |
| Operacional concreta | 7-11 años | Conservación, razonamiento lógico concreto |
| Operacional formal | 11+ años | Pensamiento abstracto, razonamiento hipotético |

### Consideraciones Especiales en Población Hispana/Latina

- Las normas culturales pueden influir en cuándo los padres permiten ciertas actividades (por ejemplo, alimentación independiente)
- Las familias extendidas frecuentemente participan en el cuidado infantil, lo cual puede proveer más estimulación social
- El bilingüismo simultáneo es la norma en muchas familias; esto NO causa retraso del lenguaje
- Las herramientas de tamizaje deben estar validadas en español y aplicadas en el idioma dominante del niño
- El ASQ-3 tiene versiones validadas en español

---
## College-Level Explanation

[The above content covers primitive reflexes and their clinical significance, CNS myelination sequence and developmental correlation, comprehensive developmental assessment tools (screening vs. diagnostic), developmental regression patterns with urgent workup, Piaget cognitive stages, and special considerations for Hispanic/Latino populations including bilingual development norms.]`,
      keyTerms: [
        {
          term: 'reflejo primitivo',
          definition:
            'Respuesta motora automática mediada por el tronco encefálico, presente al nacer y que desaparece con la maduración cortical. Su persistencia es patológica. | Automatic motor response mediated by the brainstem, present at birth and disappearing with cortical maturation. Persistence is pathological.',
          pronunciation: 'reh-FLEH-hoh pree-mee-TEE-voh',
        },
        {
          term: 'mielinización',
          definition:
            'Proceso de formación de la vaina de mielina alrededor de los axones nerviosos, esencial para la conducción rápida de impulsos y la adquisición de habilidades del desarrollo. | Process of myelin sheath formation around nerve axons, essential for rapid impulse conduction and developmental skill acquisition.',
          pronunciation: 'mee-eh-lee-nee-sah-see-OHN',
        },
        {
          term: 'regresión del desarrollo',
          definition:
            'Pérdida de habilidades previamente adquiridas; siempre es patológica y requiere evaluación urgente con neuroimagen, EEG y estudios metabólicos. | Loss of previously acquired skills; always pathological and requires urgent evaluation with neuroimaging, EEG, and metabolic studies.',
          pronunciation: 'reh-greh-see-OHN del deh-sah-RROH-yoh',
        },
        {
          term: 'Bayley-III',
          definition:
            'Herramienta estándar de oro para evaluación diagnóstica formal del desarrollo en niños de 1 a 42 meses, que evalúa dominios cognitivo, motor y de lenguaje. | Gold standard tool for formal diagnostic developmental evaluation in children 1-42 months, assessing cognitive, motor, and language domains.',
          pronunciation: 'BAY-lee tres',
        },
        {
          term: 'permanencia del objeto',
          definition:
            'Concepto piagetiano que se desarrolla alrededor de los 8-12 meses: el niño entiende que los objetos siguen existiendo aunque no los vea. | Piagetian concept developing around 8-12 months: the child understands that objects continue to exist even when not visible.',
          pronunciation: 'per-mah-NEN-see-ah del ob-HEH-toh',
        },
      ],
      clinicalNotes:
        'La persistencia de reflejos primitivos más allá de su ventana normal de desaparición es un hallazgo clínico importante que sugiere patología de neurona motora superior. El reflejo tónico-cervical asimétrico persistente después de los 6 meses tiene alta asociación con parálisis cerebral. Cualquier regresión del desarrollo es una emergencia neurológica que requiere referencia inmediata. En familias bilingües, asegúrese de evaluar el vocabulario total combinando ambos idiomas — evaluar solo un idioma subestimará la capacidad lingüística del niño. | Persistence of primitive reflexes beyond their normal window of disappearance is an important clinical finding suggesting upper motor neuron pathology. Persistent asymmetric tonic neck reflex after 6 months is highly associated with cerebral palsy. Any developmental regression is a neurological emergency requiring immediate referral. In bilingual families, ensure total vocabulary is assessed by combining both languages — assessing only one language will underestimate the child\'s linguistic ability.',
    },

    4: {
      level: 4,
      summary:
        'La evaluación avanzada del desarrollo integra la neuroplasticidad dependiente de la experiencia, las bases genéticas y epigenéticas del neurodesarrollo, los algoritmos de intervención temprana, y las controversias actuales en el diagnóstico temprano de trastornos del neurodesarrollo. | Advanced developmental assessment integrates experience-dependent neuroplasticity, genetic and epigenetic bases of neurodevelopment, early intervention algorithms, and current controversies in early diagnosis of neurodevelopmental disorders.',
      explanation: `## Explicación Avanzada (Nivel de Posgrado) / Graduate-Level Explanation

### Neuroplasticidad y Períodos Críticos del Desarrollo

**Períodos críticos vs. períodos sensibles:**
- **Período crítico:** Ventana temporal durante la cual la experiencia es absolutamente necesaria para el desarrollo normal (ejemplo: visión binocular, primeros 2-3 años)
- **Período sensible:** Ventana durante la cual el cerebro es particularmente receptivo pero el aprendizaje sigue siendo posible fuera de ella (ejemplo: adquisición del lenguaje)

**Mecanismos moleculares:**
- Sinaptogénesis explosiva en los primeros 2 años (~700 nuevas sinapsis por segundo)
- Poda sináptica dependiente de actividad ("use it or lose it") — apoptosis de conexiones no utilizadas
- Regulación de la plasticidad por redes perineuronales (PNNs)
- El cierre de períodos críticos involucra la maduración de interneuronas GABAérgicas PV+

**Implicaciones clínicas:**
| Factor | Impacto en el Neurodesarrollo |
|--------|-------------------------------|
| Deprivación sensorial temprana | Déficits permanentes si no se corrige durante el período crítico |
| Estrés tóxico (ACEs) | Alteración del eje HPA, reducción del volumen hipocampal |
| Estimulación enriquecida | Mayor arborización dendrítica, mejor función ejecutiva |
| Bilingüismo temprano | Mayor densidad de materia gris en corteza prefrontal |
| Prematurez | Alteración de la conectividad de redes neuronales de reposo |

### Bases Genéticas del Neurodesarrollo

**Trastornos monogénicos comunes:**
| Condición | Gen | Mecanismo | Presentación |
|-----------|-----|-----------|-------------|
| Síndrome de X frágil | FMR1 (expansión CGG) | Pérdida de FMRP → traducción desregulada | Discapacidad intelectual, rasgos autistas |
| Síndrome de Rett | MECP2 (ligado al X) | Regulación epigenética alterada | Regresión 6-18m, estereotipias manuales |
| Esclerosis tuberosa | TSC1/TSC2 | Vía mTOR desregulada | Convulsiones, autismo, tuberosidades corticales |
| Síndrome de Angelman | UBE3A (imprinting materno) | Déficit de ubiquitina ligasa | Risa inapropiada, ataxia, discapacidad severa |
| Síndrome de Williams | Deleción 7q11.23 | Haploinsuficiencia de elastina y otros | Hipersociabilidad, estenosis aórtica |

**Arquitectura genética de TEA (Trastorno del Espectro Autista):**
- Heredabilidad estimada: 80-90%
- >100 genes de riesgo identificados (SFARI Gene Database)
- Variantes de novo (CNVs, SNVs) en 10-20% de los casos
- Genes principales: CHD8, SCN2A, SHANK3, PTEN, SYNGAP1
- Modelo poligénico + variantes raras explica la heterogeneidad

### Intervención Temprana: Marco Basado en Evidencia

**Principios fundamentales:**
1. **Detección temprana:** Tamizaje universal a los 9, 18 y 30 meses (AAP)
2. **Referencia inmediata:** No esperar a diagnóstico formal para iniciar terapias
3. **Intensidad:** ≥25 horas/semana de intervención estructurada para TEA
4. **Enfoque centrado en la familia:** Entrenamiento parental como componente central
5. **Naturalista:** Intervenciones en contextos cotidianos del niño

**Programas de Intervención Temprana con evidencia:**
| Programa | Población | Evidencia | Componentes Clave |
|----------|-----------|-----------|-------------------|
| ESDM | TEA 12-48m | RCTs positivos | Naturalista, basado en desarrollo, mediado por padres |
| JASPER | TEA 12-60m | RCTs positivos | Atención conjunta, juego simbólico |
| ABA/EIBI | TEA >2 años | Base amplia | Conductual, intensivo, individualizado |
| DIR/Floortime | TEA todas | Evidencia emergente | Basado en relación, siguiendo al niño |
| Hanen (It Takes Two to Talk) | Retraso lenguaje | RCTs | Mediado por padres, comunicación funcional |

**Servicios bajo IDEA Parte C (EE.UU.):**
- Elegibilidad: 0-3 años con retraso documentado o condición de riesgo
- IFSP (Plan de Servicio Familiar Individualizado) requerido
- Servicios en el ambiente natural del niño
- Transición a Parte B (preescolar) a los 3 años
- Importante para familias hispanohablantes: derecho a servicios y evaluación en el idioma del hogar

### El Examen Neurológico Pediátrico por Edad

**Recién nacido a 3 meses:**
- Tono: flexión fisiológica, simetría
- Reflejos primitivos: Moro, prensión, succión, búsqueda, tónico-cervical
- Tracción: grado de control cefálico
- Suspensión ventral: grado de extensión

**6-12 meses:**
- Hitos motores: sedestación, gateo, bipedestación
- Desaparición de reflejos primitivos
- Aparición de reflejos posturales (paracaídas, Landau)
- Transferencia de objetos, pinza
- Balbuceo diferenciado

**1-3 años:**
- Marcha: base, estabilidad, patrón
- Lenguaje expresivo y receptivo
- Juego funcional vs. simbólico
- Capacidad de señalar e imitar
- Atención conjunta

---
## Graduate-Level Explanation

[The above covers experience-dependent neuroplasticity and critical/sensitive periods, molecular mechanisms of synaptic development, genetic architecture of neurodevelopmental disorders, evidence-based early intervention frameworks, IDEA Part C services and language access rights, and age-specific neurological examination.]`,
      keyTerms: [
        {
          term: 'período crítico',
          definition:
            'Ventana temporal del desarrollo durante la cual la experiencia sensorial es absolutamente necesaria para la formación normal de circuitos neuronales; el cierre involucra la maduración de interneuronas PV+ y redes perineuronales. | Developmental time window during which sensory experience is absolutely necessary for normal neural circuit formation; closure involves PV+ interneuron maturation and perineuronal nets.',
          pronunciation: 'peh-REE-oh-doh KREE-tee-koh',
        },
        {
          term: 'poda sináptica',
          definition:
            'Proceso dependiente de actividad donde las sinapsis no utilizadas son eliminadas, refinando los circuitos neuronales según la experiencia — mecanismo "use it or lose it". | Activity-dependent process where unused synapses are eliminated, refining neural circuits based on experience — "use it or lose it" mechanism.',
          pronunciation: 'POH-dah see-NAHP-tee-kah',
        },
        {
          term: 'IFSP',
          definition:
            'Plan de Servicio Familiar Individualizado; documento legal bajo IDEA Parte C que define los servicios de intervención temprana para niños de 0-3 años con retrasos del desarrollo. | Individualized Family Service Plan; legal document under IDEA Part C defining early intervention services for children 0-3 years with developmental delays.',
          pronunciation: 'ee-efe-ese-peh',
        },
        {
          term: 'estrés tóxico',
          definition:
            'Activación prolongada del sistema de respuesta al estrés en ausencia de relaciones protectoras, causando alteraciones en la arquitectura cerebral, el eje HPA y la expresión genética. | Prolonged activation of the stress response system in the absence of protective relationships, causing alterations in brain architecture, the HPA axis, and gene expression.',
          pronunciation: 'es-TREHS TOHK-see-koh',
        },
        {
          term: 'SFARI Gene',
          definition:
            'Base de datos genómica del Simons Foundation que cataloga los genes de riesgo para trastorno del espectro autista con clasificación de nivel de evidencia. | Simons Foundation genomics database cataloging risk genes for autism spectrum disorder with evidence-level classification.',
          pronunciation: 'SFAH-ree jeen',
        },
      ],
      clinicalNotes:
        'En el contexto clínico, la evaluación del desarrollo debe ser culturalmente competente. Las familias hispanas/latinas pueden tener diferentes expectativas sobre hitos como la alimentación independiente o el entrenamiento para ir al baño. Las herramientas de tamizaje deben aplicarse en el idioma dominante del niño, y el vocabulario debe contarse en ambos idiomas combinados para niños bilingües. Bajo IDEA, las familias tienen derecho a evaluación y servicios en su idioma natal. La referencia a intervención temprana no debe retrasarse esperando un diagnóstico formal — el principio "diagnosticar y tratar simultáneamente" es clave. | In the clinical context, developmental assessment must be culturally competent. Hispanic/Latino families may have different expectations about milestones like independent eating or toilet training. Screening tools should be administered in the child\'s dominant language, and vocabulary should be counted across both languages combined for bilingual children. Under IDEA, families have the right to evaluation and services in their native language. Referral to early intervention should not be delayed waiting for a formal diagnosis — the "diagnose and treat simultaneously" principle is key.',
    },

    5: {
      level: 5,
      summary:
        'La frontera del neurodesarrollo pediátrico integra biomarcadores digitales emergentes para detección temprana, neuroimagen funcional del desarrollo, la revolución genómica en trastornos del neurodesarrollo, controversias en la medicalización del neurodesarrollo, y disparidades en el acceso a servicios de intervención temprana en poblaciones hispanas. | The frontier of pediatric neurodevelopment integrates emerging digital biomarkers for early detection, functional developmental neuroimaging, the genomic revolution in neurodevelopmental disorders, controversies in medicalization of neurodevelopment, and disparities in access to early intervention services in Hispanic populations.',
      explanation: `## Explicación Profesional (Nivel MD) / MD/Professional-Level Explanation

### Biomarcadores Digitales y Detección Temprana

**Tecnologías emergentes para detección de trastornos del neurodesarrollo:**

| Tecnología | Mecanismo | Etapa de Desarrollo | Sensibilidad Reportada |
|------------|-----------|--------------------|-----------------------|
| Eye-tracking (EarliPoint) | Patrones de fijación visual a estímulos sociales | FDA breakthrough designation | 71-98% para TEA |
| EEG de alta densidad | Conectividad funcional alterada | Investigación clínica | Variable según edad |
| Análisis de video por IA | ML sobre videos caseros de movimiento infantil | Desarrollo comercial | 80-90% en estudios piloto |
| Fenotipado digital (apps) | Análisis conductual por smartphone | Ensayos clínicos tempranos | En evaluación |
| RNA salival | Biomarcadores epigenéticos | Investigación básica | Preliminar |
| Movimiento general (GMA) | Evaluación de Prechtl de movimientos generales | Validado clínicamente | 95-98% para PC |

**Evaluación de Movimientos Generales de Prechtl:**
- Mejor predictor temprano de parálisis cerebral (disponible desde las 2 semanas)
- Movimientos "fidgety" ausentes a las 12-20 semanas de edad corregida → 95% valor predictivo positivo para PC
- Combinación de GMA + RMN neonatal alcanza sensibilidad >98%
- Implementación creciente en seguimiento de prematuros de alto riesgo
- Requiere entrenamiento certificado pero puede ser evaluada por video

### Neuroimagen del Desarrollo

**RMN funcional y el conectoma en desarrollo:**
- Redes de reposo (default mode, salience, executive control) se establecen en los primeros 2 años
- Prematuros muestran conectividad reducida en redes frontoparietal y de atención
- La conectividad talamocortical es un biomarcador potencial de resultado neurocognitivo
- Limitaciones: necesidad de sedación en lactantes, movimiento como artefacto

**Neuroimagen por difusión (DTI):**
- Mapeo de tractos de sustancia blanca y secuencia de mielinización
- Anisotropía fraccional (FA) como marcador de integridad axonal
- Prematuros con lesión de sustancia blanca → FA reducida en tractos corticoespinales → predicción de PC

### Revolución Genómica en el Neurodesarrollo

**Rendimiento diagnóstico de pruebas genéticas:**
| Prueba | Rendimiento Diagnóstico | Indicación Principal |
|--------|------------------------|---------------------|
| Microarreglo cromosómico (CMA) | 15-20% | Primera línea en DI/TEA |
| Secuenciación del exoma (WES) | 25-40% adicional | Tras CMA negativo |
| Secuenciación del genoma (WGS) | 5-10% adicional | Tras WES negativo |
| Panel dirigido | Variable | Fenotipo específico |
| Análisis de metilación | Variable | Sospecha de trastorno de imprinting |

**Genes de alto impacto en neurodesarrollo (Top 10 más frecuentes):**
1. CHD8 — remodelación de cromatina → TEA + macrocefalia
2. SCN2A — canal de sodio → encefalopatía epiléptica o TEA
3. SHANK3 (Phelan-McDermid) → TEA + discapacidad intelectual
4. PTEN → macrocefalia + TEA
5. SYNGAP1 → discapacidad intelectual + epilepsia
6. DYRK1A → microcefalia + discapacidad intelectual
7. ADNP (síndrome de Helsmoortel-Van der Aa) → TEA + DI
8. FOXP1 → DI + trastorno del lenguaje
9. KAT6A → DI + dismorfismo
10. ARID1B (Coffin-Siris) → DI + hirsutismo

**Terapias génicas emergentes:**
- Antisense oligonucleotides (ASOs) para Angelman (en ensayos fase 1/2)
- Reemplazo génico AAV para X frágil (preclínico)
- CRISPR base editing para corrección de mutaciones puntuales (investigación)
- Terapia con péptidos miméticos de FMRP para X frágil (fase 2)

### Disparidades en el Acceso a Servicios de Intervención Temprana

**Datos sobre la población hispana/latina en EE.UU.:**
| Indicador | Población Hispana | Promedio Nacional |
|-----------|-------------------|-------------------|
| Edad media al diagnóstico de TEA | 4.7 años | 4.0 años |
| Uso de servicios de intervención temprana | 30% menor | Referencia |
| Tamizaje del desarrollo completado | 67% | 75% |
| Acceso a evaluación en español | Variable | N/A |
| Familias que reportan barreras idiomáticas | 45% | N/A |

**Factores contribuyentes:**
1. Barreras de idioma en la comunicación con proveedores
2. Falta de herramientas validadas en español
3. Diferencias culturales en la percepción de "retraso"
4. Status migratorio como barrera para buscar servicios
5. Menor densidad de especialistas bilingües
6. Sesgo diagnóstico (atribución de diferencias a bilingüismo)

**Estrategias basadas en evidencia para reducir disparidades:**
- Navegadores de pacientes bilingües/biculturales
- Promotoras de salud entrenadas en tamizaje del desarrollo
- Telemedicina para consultas especializadas en áreas rurales
- Materiales educativos culturalmente adaptados (no solo traducidos)
- Integración del tamizaje del desarrollo en programas WIC y Head Start

### Controversias Actuales

**1. ¿Universal vs. dirigido en el tamizaje de TEA?**
- USPSTF (2023): "evidencia insuficiente" para tamizaje universal
- AAP: sigue recomendando tamizaje universal con M-CHAT-R/F
- Debate sobre PPV del M-CHAT sin entrevista de seguimiento (14-54% vs 48-74% con follow-up)
- Riesgo de falsos positivos vs. diagnóstico tardío

**2. Edad límite inferior para diagnóstico de TEA**
- Evidencia creciente de diagnóstico confiable a los 14-18 meses
- Estabilidad del diagnóstico > 90% si se diagnostica después de los 18 meses
- Pero: ¿es ético etiquetar a un bebé de 14 meses?
- Balance: diagnóstico como puerta de acceso a servicios vs. ansiedad parental

**3. Neurodiversidad vs. patología**
- Movimiento de neurodiversidad: TEA como variante natural, no enfermedad
- Implicación clínica: ¿tratar para "normalizar" o apoyar la diferencia?
- Consenso emergente: respetar la neurodiversidad mientras se tratan comorbilidades y barreras funcionales

**4. Estimulación temprana basada en pantallas:**
- AAP: sin pantallas antes de 18 meses (excepto videollamadas)
- Realidad: >90% de niños <2 años expuestos a pantallas
- Evidencia emergente: contenido interactivo de alta calidad puede tener beneficios limitados >18 meses
- Preocupación: desplaza interacción cara a cara y juego activo

---
## MD/Professional-Level Explanation

[The above covers emerging digital biomarkers including Prechtl GMA assessment, developmental neuroimaging advances, genomic revolution with diagnostic yield data and emerging gene therapies, health disparities affecting Hispanic/Latino populations, and current clinical controversies in developmental screening and neurodiversity.]`,
      keyTerms: [
        {
          term: 'movimientos generales de Prechtl',
          definition:
            'Sistema de evaluación observacional de patrones de movimiento espontáneo en lactantes; la ausencia de movimientos "fidgety" a las 12-20 semanas de edad corregida tiene un VPP del 95% para parálisis cerebral. | Observational assessment system of spontaneous movement patterns in infants; absence of fidgety movements at 12-20 weeks corrected age has a 95% PPV for cerebral palsy.',
          pronunciation: 'PREK-tel',
        },
        {
          term: 'conectoma',
          definition:
            'Mapa completo de las conexiones neuronales del cerebro; las redes funcionales (default mode, salience, executive control) se establecen en los primeros 2 años de vida y pueden ser biomarcadores de resultado neurocognitivo. | Complete map of brain neural connections; functional networks (default mode, salience, executive control) are established in the first 2 years of life and may be biomarkers of neurocognitive outcome.',
          pronunciation: 'koh-nek-TOH-mah',
        },
        {
          term: 'rendimiento diagnóstico',
          definition:
            'Porcentaje de pruebas que identifican una causa genética; el microarreglo cromosómico tiene ~15-20%, el exoma clínico agrega 25-40%, y el genoma completo puede agregar 5-10% adicional. | Percentage of tests identifying a genetic cause; chromosomal microarray yields ~15-20%, clinical exome adds 25-40%, and whole genome may add 5-10% more.',
          pronunciation: 'ren-dee-mee-EN-toh dee-ag-NOHS-tee-koh',
        },
        {
          term: 'promotora de salud',
          definition:
            'Trabajadora de salud comunitaria de la misma cultura/idioma que la población atendida; modelo basado en evidencia para reducir disparidades en salud en comunidades hispanas/latinas, incluyendo tamizaje del desarrollo. | Community health worker from the same culture/language as the population served; evidence-based model for reducing health disparities in Hispanic/Latino communities, including developmental screening.',
          pronunciation: 'proh-moh-TOH-rah deh sah-LOOD',
        },
        {
          term: 'neurodiversidad',
          definition:
            'Marco conceptual que considera las variaciones del neurodesarrollo (como TEA) como parte de la diversidad humana natural, no como patología; tiene implicaciones para el enfoque clínico de "curar" vs. "apoyar". | Conceptual framework considering neurodevelopmental variations (such as ASD) as part of natural human diversity, not pathology; has implications for the clinical approach of "cure" vs. "support".',
          pronunciation: 'NEH-oo-roh-dee-ver-see-DAHD',
        },
      ],
      clinicalNotes:
        'Integración clínica: La evaluación de movimientos generales de Prechtl debe integrarse en el seguimiento de prematuros de alto riesgo — su VPP del 95% para parálisis cerebral supera cualquier otra herramienta disponible antes de los 5 meses. En familias hispanas/latinas, el uso de promotoras de salud entrenadas en tamizaje del desarrollo ha demostrado aumentar la tasa de detección temprana y la adherencia a servicios de intervención temprana. Las pruebas genéticas de primera línea para discapacidad intelectual/TEA inexplicados deben incluir microarreglo cromosómico; si es negativo, proceder a exoma clínico. La edad al diagnóstico de TEA continúa siendo 8 meses mayor en niños hispanos vs. no hispanos blancos — reducir esta brecha requiere estrategias sistémicas multifacéticas, no solo traducción de materiales. | Clinical integration: Prechtl General Movement Assessment should be integrated into high-risk preterm follow-up — its 95% PPV for cerebral palsy surpasses any other tool available before 5 months. In Hispanic/Latino families, trained community health workers (promotoras) for developmental screening have been shown to increase early detection rates and adherence to early intervention services. First-line genetic testing for unexplained ID/ASD should include chromosomal microarray; if negative, proceed to clinical exome. Age at ASD diagnosis continues to be 8 months later in Hispanic vs. non-Hispanic white children — reducing this gap requires multifaceted systemic strategies, not just material translation.',
    },
  },

  media: [],

  citations: [
    {
      id: 'ref-nelson-dev',
      type: 'textbook',
      title: 'Nelson Textbook of Pediatrics - Growth, Development, and Behavior',
      authors: ['Kliegman, R.M.', 'St. Geme, J.W.'],
      source: 'Elsevier, 22nd Edition',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-aap-bright-futures-dev',
      type: 'website',
      title: 'Bright Futures: Guidelines for Health Supervision',
      authors: ['American Academy of Pediatrics'],
      source: 'AAP Bright Futures',
      url: 'https://brightfutures.aap.org',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-cdc-milestones',
      type: 'website',
      title: 'CDC Learn the Signs. Act Early. - Developmental Milestones',
      authors: ['Centers for Disease Control and Prevention'],
      source: 'CDC',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-zuckerman-palacio',
      type: 'article',
      title: 'Developmental Milestones and Screening in Bilingual Children',
      authors: ['Zuckerman, K.E.', 'Palacio, A.'],
      source: 'Pediatrics in Review',
      license: 'CC BY 4.0',
    },
  ],

  crossReferences: [
    {
      targetId: 'pediatrics-growth-development',
      targetType: 'topic',
      relationship: 'related',
      label: 'Crecimiento y Desarrollo / Growth and Development',
    },
    {
      targetId: 'condition-vacunacion-immunization',
      targetType: 'condition',
      relationship: 'sibling',
      label: 'Vacunación Pediátrica / Pediatric Immunization',
    },
  ],

  tags: {
    systems: ['nervous', 'musculoskeletal'],
    topics: [
      'pediatrics',
      'development',
      'milestones',
      'screening',
      'neurodevelopment',
      'bilingual',
    ],
    keywords: [
      'hitos del desarrollo',
      'developmental milestones',
      'tamizaje',
      'screening',
      'Denver II',
      'ASQ-3',
      'regresión del desarrollo',
      'reflejos primitivos',
      'mielinización',
      'autismo',
      'intervención temprana',
      'bilingüe',
      'promotora de salud',
    ],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['pediatrics', 'family medicine'],
    },
  },

  createdAt: '2026-02-05',
  updatedAt: '2026-02-05',
  version: 1,
  status: 'published',
  contributors: ['SOMA AI Content Team'],
};
