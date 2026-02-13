/**
 * Desarrollo Infantil / Child Development
 *
 * Contenido educativo bilingue (espanol primero) sobre los hitos del desarrollo
 * infantil incluyendo desarrollo motor grueso y fino, lenguaje, cognicion,
 * y desarrollo social-emocional organizados por edad.
 *
 * Bilingual educational content (Spanish-first) on childhood developmental
 * milestones including gross and fine motor, language, cognition,
 * and social-emotional development organized by age.
 */

import { EducationalContent } from '../types';

export const DESARROLLO_INFANTIL_CHILD_DEVELOPMENT: EducationalContent = {
  id: 'pediatrics-desarrollo-infantil-child-development',
  type: 'topic',
  name: 'Child Development | Desarrollo Infantil',
  nameEs: 'Desarrollo Infantil',
  alternateNames: [
    'Hitos del desarrollo',
    'Developmental milestones',
    'Crecimiento y desarrollo',
    'Growth and development',
    'Etapas del desarrollo infantil',
    'Child developmental stages',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Los hitos del desarrollo son habilidades que los ninos logran a ciertas edades, como sentarse, caminar, hablar y jugar con otros. Cada nino crece a su propio ritmo, pero hay edades en que la mayoria logra ciertas cosas. | Developmental milestones are skills children achieve by certain ages, like sitting, walking, talking, and playing with others. Each child grows at their own pace, but most achieve certain things by certain ages.',
      explanation: `## Explicacion Simple para Padres

Los **hitos del desarrollo** son como una guia de lo que su hijo va aprendiendo mientras crece. No todos los ninos aprenden al mismo tiempo, y eso esta bien. Pero conocer estas etapas le ayuda a saber si su hijo necesita ayuda extra.

### Como se mueve su hijo (habilidades del cuerpo)

**Movimientos grandes (motricidad gruesa):**
- **2-4 meses:** Sostiene la cabeza boca abajo
- **6 meses:** Se sienta solito
- **9 meses:** Gatea
- **12-15 meses:** Da sus primeros pasos
- **2 anos:** Corre y sube escaleras con ayuda
- **3 anos:** Pedalea un triciclo
- **4 anos:** Brinca en un pie
- **5 anos:** Salta la cuerda

**Movimientos pequenos (motricidad fina):**
- **4-6 meses:** Agarra juguetes
- **9 meses:** Pasa objetos de una mano a otra
- **12 meses:** Agarra cositas con dos dedos (como cereal)
- **18 meses:** Garabatea con un crayon
- **2 anos:** Apila 6 bloques
- **3 anos:** Copia un circulo
- **4-5 anos:** Usa tijeras, dibuja personas

### Como habla y entiende (lenguaje)

- **2 meses:** Hace sonidos suaves ("aaa", "ooo")
- **6 meses:** Balbucea "ba-ba-ba", "ma-ma-ma"
- **12 meses:** Dice 1-3 palabras con significado
- **18 meses:** Dice 10-25 palabras
- **2 anos:** Junta dos palabras ("mas leche", "mama ven")
- **3 anos:** Hace oraciones cortas, se le entiende la mayoria
- **4-5 anos:** Cuenta historias, se le entiende todo

### Como se lleva con otros (social-emocional)

- **2 meses:** Sonrisa social (le sonrie a usted)
- **6 meses:** Le gusta verse en el espejo
- **9 meses:** Llora cuando usted se va (ansiedad de separacion)
- **12 meses:** Dice adios con la mano
- **18 meses:** Juega al lado de otros ninos (no juntos todavia)
- **2-3 anos:** Empieza a compartir y tomar turnos
- **4-5 anos:** Tiene amigos, sigue reglas de juegos

### Cuando hablar con el doctor

Llame a su pediatra si:
- No sonrie para los 3 meses
- No balbucea para los 9 meses
- No dice palabras para los 18 meses
- No camina para los 18 meses
- Pierde habilidades que ya tenia (esto es urgente)
- Usted siente que algo no esta bien (confie en su instinto)

### Consejos para ayudar a su hijo

- **Lea** con su hijo todos los dias, aunque sea bebe
- **Hable** mucho con el: describale lo que ve, lo que hace
- **Juegue** en el piso con su hijo (es la mejor forma de aprender)
- **Limite las pantallas** antes de los 2 anos
- **Tiempo boca abajo** para bebes (tummy time) ayuda mucho
- **Cante** canciones y rimas: ayudan al lenguaje

---
## Simple Explanation for Parents

**Developmental milestones** are like a guide to what your child learns as they grow. Not all children learn at the same time, and that is okay. But knowing these stages helps you know if your child needs extra help.

[The above Spanish content covers gross motor, fine motor, language, and social-emotional milestones by age, red flags for when to call the doctor, and practical tips for parents to support development including reading, talking, playing, limiting screens, tummy time, and singing.]`,
      keyTerms: [
        {
          term: 'hito del desarrollo | developmental milestone',
          definition:
            'Una habilidad que la mayoria de los ninos logran a cierta edad, como sentarse, caminar o hablar. | A skill most children achieve by a certain age, like sitting, walking, or talking.',
          pronunciation: 'EE-toh del deh-sah-RROH-yoh',
        },
        {
          term: 'motricidad gruesa | gross motor skills',
          definition:
            'Movimientos grandes del cuerpo como caminar, correr, saltar y trepar. | Large body movements like walking, running, jumping, and climbing.',
          pronunciation: 'moh-tree-see-DAHD GROO-eh-sah',
        },
        {
          term: 'motricidad fina | fine motor skills',
          definition:
            'Movimientos pequenos y precisos como agarrar, dibujar y abotonarse la ropa. | Small, precise movements like grasping, drawing, and buttoning clothes.',
          pronunciation: 'moh-tree-see-DAHD FEE-nah',
        },
        {
          term: 'balbuceo | babbling',
          definition:
            'Sonidos repetitivos que hacen los bebes como "ba-ba" o "ma-ma" antes de hablar. Es una etapa normal e importante. | Repetitive sounds babies make like "ba-ba" or "ma-ma" before talking. It is a normal and important stage.',
          pronunciation: 'bal-boo-SEH-oh',
        },
        {
          term: 'ansiedad de separacion | separation anxiety',
          definition:
            'Cuando el bebe llora al separarse de mama o papa, generalmente alrededor de los 9 meses. Es normal y muestra que el bebe reconoce a sus cuidadores. | When the baby cries upon separating from mom or dad, usually around 9 months. It is normal and shows the baby recognizes their caregivers.',
          pronunciation: 'an-see-eh-DAHD deh seh-pah-rah-see-OHN',
        },
      ],
      analogies: [
        'Los hitos del desarrollo son como escalones en una escalera: cada nino sube a su ritmo, pero el orden general es parecido para todos. | Developmental milestones are like steps on a staircase: every child climbs at their own pace, but the general order is similar for everyone.',
        'El cerebro de un bebe es como una esponja que absorbe todo lo que ve, oye y toca. Cada experiencia ayuda a construir nuevas conexiones. | A baby\'s brain is like a sponge that absorbs everything it sees, hears, and touches. Each experience helps build new connections.',
      ],
      examples: [
        'Un bebe de 10 meses que no camina es completamente normal: la mayoria camina entre los 9 y 15 meses. | A 10-month-old who is not walking is completely normal: most walk between 9 and 15 months.',
        'Una nina de 2 anos que dice 50 palabras y junta dos palabras esta justo en camino con su desarrollo del lenguaje. | A 2-year-old girl who says 50 words and puts two words together is right on track with language development.',
        'Un nino bilingue que mezcla espanol e ingles no tiene retraso del lenguaje: es completamente normal. | A bilingual child who mixes Spanish and English does not have a language delay: it is completely normal.',
      ],
      patientCounselingPoints: [
        'Leale a su hijo todos los dias, incluso desde bebe: esto ayuda mucho al lenguaje. | Read to your child every day, even from infancy: this helps language greatly.',
        'El "tiempo boca abajo" (tummy time) ayuda a los bebes a desarrollar los musculos para gatear y caminar. | Tummy time helps babies develop the muscles needed to crawl and walk.',
        'Limite el tiempo de pantalla para ninos menores de 2 anos. | Limit screen time for children under 2 years old.',
        'Hable con su pediatra si tiene cualquier preocupacion: es mejor preguntar temprano. | Talk to your pediatrician if you have any concerns: it is better to ask early.',
        'Si su hijo crece con dos idiomas, cuente las palabras en AMBOS idiomas juntos para saber si va bien. | If your child is growing up with two languages, count the words in BOTH languages together to know if they are on track.',
      ],
    },

    2: {
      level: 2,
      summary:
        'El desarrollo infantil se evalua en cuatro dominios principales: motor grueso, motor fino, lenguaje (receptivo y expresivo), y social-emocional/cognitivo. Se utilizan herramientas de tamizaje estandarizadas como el Denver II, ASQ-3 y M-CHAT-R/F para la deteccion temprana de retrasos. | Child development is assessed across four main domains: gross motor, fine motor, language (receptive and expressive), and social-emotional/cognitive. Standardized screening tools such as the Denver II, ASQ-3, and M-CHAT-R/F are used for early detection of delays.',
      explanation: `## Explicacion Intermedia | Intermediate Explanation

El desarrollo infantil sigue patrones predecibles que los profesionales de salud evaluan usando tablas de hitos organizadas por edad y dominio. Entender estos patrones permite la deteccion temprana de retrasos.

### Dominio 1: Desarrollo Motor Grueso | Gross Motor Development

| Edad | Hito en espanol | Milestone in English |
|------|----------------|---------------------|
| 2 meses | Levanta la cabeza boca abajo | Lifts head when prone |
| 4 meses | Rueda de frente a espalda | Rolls front to back |
| 6 meses | Se sienta sin apoyo | Sits without support |
| 9 meses | Se para sosteniendose | Pulls to stand |
| 12 meses | Camina con apoyo o solo | Walks with support or independently |
| 15 meses | Camina solo con seguridad | Walks independently with confidence |
| 18 meses | Corre, patea una pelota | Runs, kicks a ball |
| 2 anos | Sube escaleras con ayuda, salta | Climbs stairs with help, jumps |
| 3 anos | Pedalea triciclo, sube escaleras alternando pies | Pedals tricycle, goes up stairs alternating feet |
| 4 anos | Brinca en un pie, lanza pelota por encima | Hops on one foot, throws ball overhead |
| 5 anos | Salta la cuerda, se equilibra en un pie 10 segundos | Skips, balances on one foot for 10 seconds |

### Dominio 2: Desarrollo Motor Fino | Fine Motor Development

| Edad | Hito en espanol | Milestone in English |
|------|----------------|---------------------|
| 3 meses | Manos abiertas, manotea objetos | Hands open, bats at objects |
| 6 meses | Prension palmar (agarre con toda la mano) | Palmar grasp (whole-hand grip) |
| 9 meses | Pinza inferior en desarrollo | Inferior pincer grasp developing |
| 12 meses | Pinza fina madura (pulgar-indice) | Mature pincer grasp (thumb-index) |
| 15 meses | Apila 2 bloques, garabatea | Stacks 2 blocks, scribbles |
| 2 anos | Apila 6 bloques, copia linea vertical | Stacks 6 blocks, copies vertical line |
| 3 anos | Copia circulo, usa tijeras | Copies circle, uses scissors |
| 4 anos | Copia cruz, dibuja persona con 3 partes | Copies cross, draws person with 3 parts |
| 5 anos | Copia cuadrado y triangulo, dibuja persona con 6+ partes | Copies square and triangle, draws person with 6+ parts |

### Dominio 3: Desarrollo del Lenguaje | Language Development

| Edad | Receptivo (comprension) | Expresivo (produccion) |
|------|------------------------|----------------------|
| 2 meses | Alerta a la voz / Alerts to voice | Arrullos, sonidos guturales / Cooing |
| 6 meses | Se gira hacia la voz / Turns to voice | Balbuceo "bababa" / Babbling |
| 9 meses | Entiende "no" / Understands "no" | "Mama/papa" inespecifico / Nonspecific "mama/dada" |
| 12 meses | Sigue orden de 1 paso / Follows 1-step command | 1-3 palabras especificas / 1-3 specific words |
| 18 meses | Senala partes del cuerpo / Points to body parts | 10-25 palabras / 10-25 words |
| 2 anos | Sigue ordenes de 2 pasos / Follows 2-step commands | 50+ palabras, frases de 2 palabras / 50+ words, 2-word phrases |
| 3 anos | Entiende preposiciones / Understands prepositions | Oraciones de 3 palabras, 75% inteligible / 3-word sentences, 75% intelligible |
| 4 anos | Sigue ordenes de 3 pasos / Follows 3-step commands | Oraciones completas, 100% inteligible / Complete sentences, 100% intelligible |
| 5 anos | Entiende conceptos de tiempo / Understands time concepts | Narra historias complejas / Tells complex stories |

### Dominio 4: Desarrollo Social-Emocional | Social-Emotional Development

| Edad | Hito en espanol | Milestone in English |
|------|----------------|---------------------|
| 2 meses | Sonrisa social | Social smile |
| 4 meses | Rie a carcajadas | Laughs out loud |
| 6 meses | Ansiedad ante extranos empieza | Stranger anxiety begins |
| 9 meses | Ansiedad de separacion, juega "peek-a-boo" | Separation anxiety, plays peek-a-boo |
| 12 meses | Dice adios con la mano, imita acciones | Waves bye-bye, imitates actions |
| 18 meses | Juego paralelo, empieza berrinches | Parallel play, tantrums begin |
| 2 anos | Imita adultos, juego simbolico simple | Imitates adults, simple pretend play |
| 3 anos | Toma turnos, conoce su genero, tiene amigo favorito | Takes turns, knows gender, has favorite friend |
| 4 anos | Juego cooperativo, inventa historias | Cooperative play, invents stories |
| 5 anos | Sigue reglas, entiende bien y mal, puede perder sin llorar | Follows rules, understands right/wrong, can lose gracefully |

### Herramientas de Tamizaje | Screening Tools

- **Denver II (DDST-II):** Tamiza ninos de 0-6 anos en 4 dominios. Administrada por proveedor. Herramienta de tamizaje, NO diagnostico.
- **ASQ-3 (Ages and Stages Questionnaire):** Cuestionario para padres, 1-66 meses. Tiene version validada en espanol.
- **M-CHAT-R/F (Modified Checklist for Autism in Toddlers):** Tamizaje especifico para autismo a los 18 y 24 meses.
- **PEDS (Parents' Evaluation of Developmental Status):** Basado en preocupaciones de los padres, 0-8 anos.

### Senales de Alarma (Banderas Rojas) | Red Flags

- No sonrisa social a los 3 meses
- No balbuceo a los 9 meses
- No senala ni dice palabras a los 18 meses
- No frases de 2 palabras a los 2 anos
- No camina a los 18 meses
- Perdida de habilidades ya adquiridas a cualquier edad (SIEMPRE urgente)
- No responde a su nombre despues de los 12 meses
- Ausencia de atencion conjunta (no mira adonde usted senala)

### Ninos Bilingues | Bilingual Children

Los ninos que crecen con dos idiomas pueden mezclar idiomas inicialmente (code-switching), pero esto es normal y no es retraso. El vocabulario total combinando ambos idiomas debe alcanzar los hitos esperados. Las herramientas de tamizaje deben aplicarse en el idioma dominante del nino.

---
## Intermediate Explanation

[The content above covers all four developmental domains with bilingual milestone tables, standardized screening tools (Denver II, ASQ-3, M-CHAT-R/F, PEDS), red flags requiring urgent evaluation, and special considerations for bilingual children including code-switching norms and combined vocabulary assessment.]`,
      keyTerms: [
        {
          term: 'tamizaje del desarrollo | developmental screening',
          definition:
            'Proceso de evaluacion rapida para identificar ninos en riesgo de retraso del desarrollo. No es un diagnostico, sino una deteccion temprana que indica si se necesita evaluacion mas profunda. | Quick evaluation process to identify children at risk for developmental delay. Not a diagnosis, but early detection indicating if deeper evaluation is needed.',
          pronunciation: 'tah-mee-SAH-heh del deh-sah-RROH-yoh',
        },
        {
          term: 'Denver II | Denver Developmental Screening Test',
          definition:
            'Prueba estandarizada que evalua el desarrollo de ninos de 0 a 6 anos en cuatro dominios: motor grueso, motor fino, lenguaje y personal-social. | Standardized test evaluating development in children 0-6 years across four domains: gross motor, fine motor, language, and personal-social.',
          pronunciation: 'DEN-ver dos',
        },
        {
          term: 'prension en pinza | pincer grasp',
          definition:
            'Habilidad de agarrar objetos pequenos entre el pulgar y el dedo indice, que se desarrolla alrededor de los 9-12 meses. Es un hito motor fino importante. | Ability to grasp small objects between the thumb and index finger, developing around 9-12 months. It is an important fine motor milestone.',
          pronunciation: 'pren-see-OHN en PEEN-sah',
        },
        {
          term: 'atencion conjunta | joint attention',
          definition:
            'Capacidad del nino de compartir la atencion con otra persona hacia un objeto o evento, como mirar adonde alguien senala. Su ausencia es una bandera roja para autismo. | Child\'s ability to share attention with another person toward an object or event, like looking where someone points. Its absence is a red flag for autism.',
          pronunciation: 'ah-ten-see-OHN kon-HOON-tah',
        },
        {
          term: 'juego paralelo | parallel play',
          definition:
            'Etapa del juego (~18 meses-2 anos) donde los ninos juegan al lado de otros pero no juntos. Es normal antes del juego cooperativo. | Play stage (~18 months-2 years) where children play alongside others but not together. It is normal before cooperative play.',
          pronunciation: 'HOO-eh-goh pah-rah-LEH-loh',
        },
      ],
      analogies: [
        'Las herramientas de tamizaje son como la luz de "revisar motor" en un carro: te avisan que algo podria necesitar atencion, pero no dicen exactamente que es. Se necesita una evaluacion mas completa para el "diagnostico". | Screening tools are like the "check engine" light in a car: they warn you something might need attention, but do not say exactly what it is. A more complete evaluation is needed for the "diagnosis".',
        'El desarrollo del lenguaje en ninos bilingues es como llenar dos cubetas a la vez: puede parecer que cada cubeta se llena mas lento, pero juntas tienen la misma cantidad de agua que una sola cubeta llena. | Language development in bilingual children is like filling two buckets at once: each bucket may seem to fill slower, but together they hold the same amount of water as one full bucket.',
      ],
      examples: [
        'Un nino de 15 meses que dice "mama", "papa", "agua" y "no" tiene 4 palabras, lo cual esta dentro de lo normal para su edad. | A 15-month-old who says "mama", "papa", "agua" and "no" has 4 words, which is within normal range for their age.',
        'Si un bebe de 14 meses no camina solo pero se para sostenido de los muebles, todavia esta dentro del rango normal. Si a los 18 meses sigue sin caminar, debe evaluarse. | If a 14-month-old is not walking alone but stands holding furniture, they are still within normal range. If at 18 months they are still not walking, they should be evaluated.',
      ],
    },

    3: {
      level: 3,
      summary:
        'La evaluacion del desarrollo integra el conocimiento de reflejos primitivos y su desaparicion, la secuencia de mielinizacion del SNC, las etapas de Piaget, herramientas diagnosticas formales como el Bayley-III, y el reconocimiento de la regresion del desarrollo como bandera roja urgente que requiere evaluacion neurologica inmediata. | Developmental assessment integrates knowledge of primitive reflexes and their disappearance, CNS myelination sequence, Piaget stages, formal diagnostic tools like the Bayley-III, and recognition of developmental regression as an urgent red flag requiring immediate neurological evaluation.',
      explanation: `## Explicacion Nivel Universitario | College-Level Explanation

### Reflejos Primitivos y su Significado Clinico | Primitive Reflexes

Los reflejos primitivos son respuestas automaticas mediadas por el tronco encefalico presentes al nacer. Su desaparicion refleja la maduracion del sistema corticoespinal. La persistencia mas alla de la edad esperada sugiere falla en la inhibicion cortical y patologia de neurona motora superior.

| Reflejo | Aparece | Desaparece | Si persiste... |
|---------|---------|------------|----------------|
| Moro (sobresalto) | Nacimiento | 4-6 meses | Lesion de neurona motora superior |
| Prension palmar | Nacimiento | 4-6 meses | Patologia del lobulo frontal |
| Tonico-cervical asimetrico (RTCA) | Nacimiento | 6 meses | Riesgo alto de paralisis cerebral |
| Babinski (plantar extensor) | Nacimiento | 12-24 meses | Lesion piramidal |
| Busqueda (rooting) | Nacimiento | 3-4 meses | Patologia cortical |
| Succion | Nacimiento | 3-4 meses | Usualmente normal si persiste |
| Paracaidas | 8-9 meses | Persiste toda la vida | Ausencia = preocupacion motora |
| Landau | 3 meses | 24 meses | Ausencia temprana = hipotonia |

**Regla clinica importante:** La desaparicion de reflejos primitivos y la aparicion simultanea de reflejos posturales (paracaidas, Landau) marca la transicion del control subcortical al cortical del movimiento.

### Mielinizacion del SNC y Correlacion con el Desarrollo | CNS Myelination

La secuencia de mielinizacion correlaciona directamente con la adquisicion de habilidades:

| Periodo | Area Mielinizandose | Funcion Adquirida |
|---------|--------------------|--------------------|
| Nacimiento-3 meses | Tronco encefalico, pedunculos cerebelosos | Reflejos primitivos, funciones vitales |
| 3-6 meses | Cerebelo, tractos vestibulares | Control postural, sedestacion |
| 6-12 meses | Tractos corticoespinales | Control motor voluntario, desaparicion de reflejos primitivos |
| 1-3 anos | Areas de asociacion cortical, radiaciones opticas | Lenguaje, pensamiento simbolico, vision madura |
| 3-7 anos | Cuerpo calloso | Coordinacion bimanual, integracion hemisferica |
| 7-12 anos | Areas de asociacion parietales | Razonamiento logico, habilidades espaciales |
| Adolescencia-25 anos | Corteza prefrontal | Funcion ejecutiva, control de impulsos, planificacion |

**Implicacion clinica en RMN:** La mielinizacion sigue un patron predecible visible en RMN (de posterior a anterior, de central a periferico). Retrasos en la mielinizacion son visibles y correlacionan con retrasos del desarrollo.

### Desarrollo Cognitivo segun Piaget | Piaget's Cognitive Development

| Etapa | Edad | Caracteristicas Clave | Ejemplo Clinico |
|-------|------|----------------------|-----------------|
| Sensoriomotora | 0-2 anos | Permanencia del objeto (8-12m), causa-efecto, exploracion sensorial | Busca juguete escondido |
| Preoperacional | 2-7 anos | Juego simbolico, egocentrismo, pensamiento magico, animismo | "La luna me sigue", tiene amigos imaginarios |
| Operacional concreta | 7-11 anos | Conservacion, clasificacion, razonamiento logico concreto | Entiende que verter agua en vaso diferente no cambia cantidad |
| Operacional formal | 11+ anos | Pensamiento abstracto, razonamiento hipotetico-deductivo | Puede entender algebra, piensa en el futuro |

### Herramientas Diagnosticas Formales vs. Tamizaje | Diagnostic vs. Screening Tools

| Herramienta | Tipo | Rango de Edad | Que Evalua |
|-------------|------|--------------|------------|
| ASQ-3 | Tamizaje (padres) | 1-66 meses | 5 dominios, cuestionario rapido |
| Denver II | Tamizaje (proveedor) | 0-6 anos | 4 dominios |
| M-CHAT-R/F | Tamizaje TEA | 16-30 meses | Riesgo de autismo |
| **Bayley-III** | **Diagnostico** | 1-42 meses | Cognitivo, motor, lenguaje (estandar de oro) |
| **ADOS-2** | **Diagnostico TEA** | 12 meses+ | Evaluacion diagnostica de autismo |
| **Vineland-3** | **Funcion adaptativa** | 0-90 anos | Comunicacion, vida diaria, socializacion, motor |
| WISC-V | Diagnostico CI | 6-16 anos | Inteligencia |
| WPPSI-IV | Diagnostico CI | 2.5-7 anos | Inteligencia en preescolares |

### Regresion del Desarrollo: Emergencia Neurologica | Developmental Regression

La regresion (perdida de habilidades previamente adquiridas) es SIEMPRE patologica y requiere evaluacion urgente.

| Patron de Regresion | Diagnosticos a Considerar |
|---------------------|--------------------------|
| Regresion del lenguaje 18-24 meses | Trastorno del espectro autista (TEA) |
| Regresion motora progresiva | Leucodistrofias (metacromatica, Krabbe) |
| Regresion global + convulsiones | Lipofuscinosis ceroidea neuronal, sindrome de Rett |
| Regresion tras enfermedad/estres | Enfermedad mitocondrial, crisis metabolica |
| Regresion escalonada/aguda | Enfermedad vascular, desmielinizante |
| Regresion + visceromegalia | Enfermedades de deposito (Gaucher, Niemann-Pick) |

**Evaluacion diagnostica de la regresion:**
1. RMN cerebral con espectroscopia por resonancia magnetica
2. EEG (electroencefalograma)
3. Estudios metabolicos: lactato, piruvato, aminoacidos plasmaticos, acidos organicos urinarios, amonio
4. Estudios geneticos: microarreglo cromosomico, panel de genes dirigido
5. Evaluacion oftalmologica (fondo de ojo) y audiologica
6. Liquido cefalorraquideo si se sospecha infeccion o enfermedad neurodegenerativa

### Desarrollo en Poblaciones Especiales | Special Populations

**Prematuros:** Usar EDAD CORREGIDA (no cronologica) para evaluar hitos hasta los 2 anos. Edad corregida = edad cronologica - semanas de prematurez.

**Ninos bilingues:** El vocabulario total debe contarse combinando ambos idiomas. Code-switching (mezclar idiomas) es normal y NO indica retraso. ASQ-3 tiene version validada en espanol.

**Sindrome de Down:** Trayectoria de desarrollo mas lenta pero predecible. Hitos motores retrasados ~2x. Intervencion temprana mejora significativamente los resultados.

---
## College-Level Explanation

[The above covers primitive reflexes with clinical significance, CNS myelination sequence and developmental correlation, Piaget cognitive stages with clinical examples, diagnostic vs. screening tools comparison, developmental regression as a neurological emergency with workup algorithm, and special population considerations including premature infants and bilingual children.]`,
      keyTerms: [
        {
          term: 'reflejo primitivo | primitive reflex',
          definition:
            'Respuesta motora automatica mediada por el tronco encefalico, presente al nacer y que desaparece con la maduracion cortical. Su persistencia mas alla de la edad esperada es patologica y sugiere lesion de neurona motora superior. | Automatic motor response mediated by the brainstem, present at birth and disappearing with cortical maturation. Persistence beyond expected age is pathological and suggests upper motor neuron injury.',
          pronunciation: 'reh-FLEH-hoh pree-mee-TEE-voh',
        },
        {
          term: 'mielinizacion | myelination',
          definition:
            'Proceso de formacion de la vaina de mielina alrededor de los axones nerviosos, esencial para la conduccion rapida de impulsos. Sigue un patron predecible de posterior a anterior, central a periferico. | Process of myelin sheath formation around nerve axons, essential for rapid impulse conduction. Follows a predictable pattern from posterior to anterior, central to peripheral.',
          pronunciation: 'mee-eh-lee-nee-sah-see-OHN',
        },
        {
          term: 'regresion del desarrollo | developmental regression',
          definition:
            'Perdida de habilidades previamente adquiridas. SIEMPRE es patologica y requiere evaluacion urgente con neuroimagen, EEG y estudios metabolicos. Puede indicar enfermedad neurodegenerativa, metabolica o TEA. | Loss of previously acquired skills. ALWAYS pathological and requires urgent evaluation with neuroimaging, EEG, and metabolic studies. May indicate neurodegenerative, metabolic disease, or ASD.',
          pronunciation: 'reh-greh-see-OHN del deh-sah-RROH-yoh',
        },
        {
          term: 'Bayley-III | Bayley Scales of Infant Development',
          definition:
            'Herramienta estandar de oro para evaluacion diagnostica formal del desarrollo en ninos de 1 a 42 meses, que evalua dominios cognitivo, motor y de lenguaje con puntajes estandarizados. | Gold standard tool for formal diagnostic developmental evaluation in children 1-42 months, assessing cognitive, motor, and language domains with standardized scores.',
          pronunciation: 'BAY-lee tres',
        },
        {
          term: 'permanencia del objeto | object permanence',
          definition:
            'Concepto piagetiano (etapa sensoriomotora) que se desarrolla a los 8-12 meses: el nino entiende que los objetos siguen existiendo aunque no los vea. Base de los juegos de esconder. | Piagetian concept (sensorimotor stage) developing at 8-12 months: the child understands that objects continue to exist even when not visible. Basis for hiding games.',
          pronunciation: 'per-mah-NEN-see-ah del ob-HEH-toh',
        },
        {
          term: 'edad corregida | corrected age',
          definition:
            'Edad del prematuro ajustada restando las semanas de prematurez de la edad cronologica. Se usa para evaluar hitos del desarrollo hasta los 2 anos. | Premature infant age adjusted by subtracting weeks of prematurity from chronological age. Used to evaluate developmental milestones until age 2.',
          pronunciation: 'eh-DAHD koh-rreh-HEE-dah',
        },
      ],
      clinicalNotes:
        'La persistencia del reflejo tonico-cervical asimetrico despues de los 6 meses tiene alta asociacion con paralisis cerebral y debe generar referencia a neurologia. Cualquier regresion del desarrollo es una emergencia neurologica que requiere referencia inmediata: no esperar. En familias bilingues, evaluar el vocabulario total combinando ambos idiomas; evaluar solo un idioma subestimara la capacidad del nino. La edad corregida para prematuros se usa hasta los 2 anos para motor grueso y lenguaje, pero NO para tamizaje de autismo (M-CHAT se aplica por edad cronologica). | Persistence of asymmetric tonic neck reflex after 6 months is highly associated with cerebral palsy and should prompt neurology referral. Any developmental regression is a neurological emergency requiring immediate referral: do not wait. In bilingual families, assess total vocabulary combining both languages; assessing only one language will underestimate the child\'s ability. Corrected age for premature infants is used until age 2 for gross motor and language, but NOT for autism screening (M-CHAT is applied by chronological age).',
    },

    4: {
      level: 4,
      summary:
        'La evaluacion avanzada del desarrollo integra neuroplasticidad dependiente de experiencia, periodos criticos vs. sensibles, bases geneticas y epigeneticas del neurodesarrollo, algoritmos de intervencion temprana basados en evidencia, y el impacto de experiencias adversas tempranas (ACEs) en la arquitectura cerebral y las trayectorias de desarrollo. | Advanced developmental assessment integrates experience-dependent neuroplasticity, critical vs. sensitive periods, genetic and epigenetic bases of neurodevelopment, evidence-based early intervention algorithms, and the impact of adverse childhood experiences (ACEs) on brain architecture and developmental trajectories.',
      explanation: `## Explicacion Avanzada (Nivel de Posgrado) | Graduate-Level Explanation

### Neuroplasticidad y Periodos Criticos | Neuroplasticity and Critical Periods

**Periodos criticos vs. periodos sensibles:**
- **Periodo critico:** Ventana temporal durante la cual la experiencia es absolutamente necesaria para el desarrollo normal de un circuito. Si se pierde, el deficit puede ser permanente. Ejemplo: vision binocular (primeros 2-3 anos).
- **Periodo sensible:** Ventana durante la cual el cerebro es particularmente receptivo pero el aprendizaje sigue siendo posible fuera de ella. Ejemplo: adquisicion del lenguaje (0-7 anos optimo, pero posible despues).

**Mecanismos moleculares de la plasticidad:**
- Sinaptogenesis explosiva: ~700 nuevas sinapsis por segundo en los primeros 2 anos
- Poda sinaptica dependiente de actividad: "use it or lose it" (apoptosis de conexiones no utilizadas)
- Regulacion por redes perineuronales (PNNs): su maduracion "cierra" los periodos criticos
- Cierre de periodos criticos involucra maduracion de interneuronas GABAergicas parvalbumina-positivas (PV+)
- Factores neurotroficos (BDNF, NGF) modulan la plasticidad

**Implicaciones clinicas:**
| Factor | Impacto en el Neurodesarrollo |
|--------|-------------------------------|
| Deprivacion sensorial temprana | Deficits permanentes si no se corrige durante el periodo critico |
| Estres toxico (ACEs multiples) | Alteracion del eje HPA, reduccion del volumen hipocampal, amigdala hiperactiva |
| Estimulacion enriquecida | Mayor arborizacion dendritica, mejor funcion ejecutiva |
| Bilinguismo temprano | Mayor densidad de materia gris en corteza prefrontal, mayor flexibilidad cognitiva |
| Prematurez | Alteracion de la conectividad de redes neuronales de reposo |
| Institucionalismo temprano | Deficit de sustancia blanca, trastornos de apego |

### Experiencias Adversas en la Infancia (ACEs) | Adverse Childhood Experiences

**Las 10 categorias originales de ACEs:**
1. Abuso fisico
2. Abuso emocional
3. Abuso sexual
4. Negligencia fisica
5. Negligencia emocional
6. Violencia domestica
7. Abuso de sustancias en el hogar
8. Enfermedad mental en el hogar
9. Separacion/divorcio de los padres
10. Encarcelamiento de un miembro del hogar

**Mecanismo biologico del estres toxico:**
\`\`\`
ACEs repetidos sin relacion protectora ("buffering")
        |
Activacion cronica del eje HPA + sistema nervioso simpatico
        |
Cortisol cronicamente elevado
        |
Neurotoxicidad: reduccion de arborizacion dendritica en hipocampo y corteza prefrontal
        |
Amigdala hipertrofiada + hipersensible
        |
Desregulacion emocional, deficit de atencion, problemas de conducta
        |
Mayor riesgo de: depresion, ansiedad, adiccion, enfermedades cronicas
\`\`\`

**Score ACE y riesgo:**
- ACE >= 4: riesgo 4-12x mayor de alcoholismo, depresion, intento de suicidio
- ACE >= 6: reduccion de 20 anos en esperanza de vida
- Factor protector mas importante: al menos UNA relacion estable y responsiva con un adulto

### Bases Geneticas del Neurodesarrollo | Genetic Basis of Neurodevelopment

**Trastornos monogenicos frecuentes:**
| Condicion | Gen/Mecanismo | Presentacion Clave |
|-----------|--------------|-------------------|
| Sindrome de X fragil | FMR1 (expansion CGG >200) | DI + rasgos autistas + macroorquidismo |
| Sindrome de Rett | MECP2 (ligado al X) | Regresion 6-18m, estereotipias manuales, ninas |
| Esclerosis tuberosa | TSC1/TSC2 (via mTOR) | Convulsiones + TEA + tuberosidades corticales |
| Sindrome de Angelman | UBE3A (imprinting materno) | Risa inapropiada + ataxia + DI severa |
| Sindrome de Williams | Delecion 7q11.23 | Hipersociabilidad + estenosis aortica supravalvular |
| Sindrome de Prader-Willi | Delecion 15q11 (imprinting paterno) | Hipotonia neonatal + hiperfagia + obesidad |

**Arquitectura genetica del TEA:**
- Heredabilidad: 80-90% (estudios de gemelos)
- >100 genes de riesgo identificados (SFARI Gene Database)
- Variantes de novo (CNVs, SNVs) en 10-20%
- Modelo: efecto poligenico de fondo + variantes raras de gran efecto

### Intervencion Temprana Basada en Evidencia | Evidence-Based Early Intervention

**Principios fundamentales (AAP):**
1. Tamizaje universal a los 9, 18 y 30 meses
2. Referencia inmediata sin esperar diagnostico formal
3. Intensidad: >= 25 horas/semana para TEA (EIBI)
4. Enfoque centrado en la familia: entrenamiento parental como componente central
5. Intervencion naturalista en contextos cotidianos

**Programas con mayor evidencia:**
| Programa | Poblacion | Base de Evidencia | Componentes |
|----------|-----------|-------------------|-------------|
| ESDM (Early Start Denver Model) | TEA 12-48m | RCTs positivos, cambios en conectividad cerebral | Naturalista, basado en desarrollo, mediado por padres |
| JASPER | TEA 12-60m | RCTs positivos | Atencion conjunta, juego simbolico |
| ABA/EIBI | TEA >2 anos | Base amplia, meta-analisis | Conductual, intensivo, individualizado |
| Hanen (It Takes Two to Talk) | Retraso lenguaje | RCTs | Mediado por padres |
| PCIT (Parent-Child Interaction Therapy) | Problemas conducta 2-7a | RCTs fuertes | Entrenamiento parental en vivo |

**IDEA Parte C (EE.UU.):**
- Elegibilidad: 0-3 anos con retraso documentado (>25% o 2 DE) o condicion de riesgo establecida
- IFSP (Plan de Servicio Familiar Individualizado) requerido en 45 dias
- Servicios en el ambiente natural (hogar, guarderia)
- Derecho a servicios y evaluacion en el idioma del hogar (fundamental para familias hispanas)
- Transicion a IDEA Parte B (preescolar, IEP) a los 3 anos

### El Examen Neurologico Pediatrico por Edad | Age-Specific Neurological Exam

**Recien nacido a 3 meses:**
- Tono: flexion fisiologica en las 4 extremidades, simetria
- Reflejos primitivos: Moro, prension palmar y plantar, succion, busqueda, tonico-cervical
- Traccion: grado de control cefalico (head lag)
- Suspension ventral: grado de extension (hipotonia = "bebe de trapo")

**6-12 meses:**
- Desaparicion de reflejos primitivos (Moro, prension)
- Aparicion de reflejos posturales (paracaidas lateral y anterior)
- Hitos motores: sedestacion, gateo, bipedestacion
- Transferencia de objetos, pinza
- Balbuceo diferenciado, respuesta al nombre

**1-3 anos:**
- Marcha: base, estabilidad, patron (puntillas = hipertonia)
- Lenguaje expresivo y receptivo
- Juego funcional vs. simbolico (funcional = autobuses; simbolico = el bloque "es" un avion)
- Atencion conjunta
- Capacidad de senalar (protodeclarativo vs. protoimperativo)

---
## Graduate-Level Explanation

[The above covers neuroplasticity mechanisms and critical/sensitive periods, ACEs and their biological impact, genetic architecture of neurodevelopmental disorders, evidence-based early intervention programs with RCT evidence, IDEA Part C eligibility and language rights, and the age-specific pediatric neurological examination.]`,
      keyTerms: [
        {
          term: 'periodo critico | critical period',
          definition:
            'Ventana temporal del desarrollo durante la cual la experiencia sensorial es absolutamente necesaria para la formacion normal de circuitos neuronales. Su cierre involucra la maduracion de interneuronas PV+ y redes perineuronales. | Developmental time window during which sensory experience is absolutely necessary for normal neural circuit formation. Closure involves PV+ interneuron maturation and perineuronal nets.',
          pronunciation: 'peh-REE-oh-doh KREE-tee-koh',
        },
        {
          term: 'poda sinaptica | synaptic pruning',
          definition:
            'Proceso dependiente de actividad donde las sinapsis no utilizadas son eliminadas, refinando los circuitos neuronales segun la experiencia. Mecanismo "use it or lose it" esencial para la especializacion cerebral. | Activity-dependent process where unused synapses are eliminated, refining neural circuits based on experience. Essential "use it or lose it" mechanism for brain specialization.',
          pronunciation: 'POH-dah see-NAHP-tee-kah',
        },
        {
          term: 'estres toxico | toxic stress',
          definition:
            'Activacion prolongada del eje HPA en ausencia de relaciones protectoras (buffering), causando alteraciones en la arquitectura cerebral incluyendo reduccion del volumen hipocampal e hipertrofia amigdalina. | Prolonged HPA axis activation in the absence of protective relationships (buffering), causing brain architecture alterations including reduced hippocampal volume and amygdalar hypertrophy.',
          pronunciation: 'es-TREHS TOHK-see-koh',
        },
        {
          term: 'IFSP | Individualized Family Service Plan',
          definition:
            'Plan de Servicio Familiar Individualizado bajo IDEA Parte C. Documento legal que define los servicios de intervencion temprana para ninos de 0-3 anos con retrasos del desarrollo. Las familias tienen derecho a servicios en su idioma natal. | Legal document under IDEA Part C defining early intervention services for children 0-3 years with developmental delays. Families have the right to services in their native language.',
          pronunciation: 'ee-efe-ese-peh',
        },
        {
          term: 'ACEs | Experiencias Adversas en la Infancia',
          definition:
            'Experiencias potencialmente traumaticas antes de los 18 anos (abuso, negligencia, disfuncion del hogar). Un score de ACE >= 4 multiplica por 4-12x el riesgo de depresion, adiccion y enfermedades cronicas. | Potentially traumatic experiences before age 18 (abuse, neglect, household dysfunction). An ACE score >= 4 multiplies the risk of depression, addiction, and chronic disease by 4-12x.',
          pronunciation: 'AY-ses',
        },
      ],
      clinicalNotes:
        'En la practica clinica, la evaluacion del desarrollo debe integrar la deteccion de ACEs. El factor protector mas poderoso contra el estres toxico es UNA relacion estable y responsiva con un adulto cuidador. En familias hispanas/latinas, el familismo (valor cultural de apoyo familiar extendido) puede ser un factor protector significativo. Las intervenciones tempranas como el ESDM para TEA han demostrado no solo mejoria clinica sino cambios objetivos en la conectividad cerebral medidos por EEG. La referencia a intervencion temprana bajo IDEA Parte C no debe retrasarse esperando diagnostico formal: el principio de "diagnosticar y tratar simultaneamente" es clave. Las familias tienen derecho legal a evaluacion y servicios en espanol. | In clinical practice, developmental assessment should integrate ACE screening. The most powerful protective factor against toxic stress is ONE stable, responsive relationship with a caring adult. In Hispanic/Latino families, familismo (cultural value of extended family support) can be a significant protective factor. Early interventions like ESDM for ASD have shown not only clinical improvement but objective brain connectivity changes measured by EEG. Referral to early intervention under IDEA Part C should not be delayed waiting for formal diagnosis: the "diagnose and treat simultaneously" principle is key. Families have the legal right to evaluation and services in Spanish.',
    },

    5: {
      level: 5,
      summary:
        'La frontera del neurodesarrollo pediatrico integra biomarcadores digitales emergentes para la deteccion ultra-temprana (eye-tracking, movimientos generales de Prechtl, IA aplicada a video), neuroimagen funcional del conectoma en desarrollo, la revolucion genomica con su rendimiento diagnostico creciente, terapias genicas emergentes, y las disparidades sistematicas en el acceso a servicios de intervencion temprana en poblaciones hispanas/latinas. | The frontier of pediatric neurodevelopment integrates emerging digital biomarkers for ultra-early detection (eye-tracking, Prechtl general movements, AI-applied video analysis), functional neuroimaging of the developing connectome, the genomic revolution with increasing diagnostic yield, emerging gene therapies, and systemic disparities in access to early intervention services in Hispanic/Latino populations.',
      explanation: `## Explicacion Profesional (Nivel MD) | MD/Professional-Level Explanation

### Biomarcadores Digitales para Deteccion Ultra-Temprana | Digital Biomarkers

**Tecnologias emergentes:**

| Tecnologia | Mecanismo | Etapa | Sensibilidad |
|------------|-----------|-------|-------------|
| Eye-tracking (EarliPoint) | Patrones de fijacion visual a estimulos sociales | FDA breakthrough designation | 71-98% para TEA |
| Movimientos generales de Prechtl (GMA) | Evaluacion de patrones de movimiento espontaneo | Validado clinicamente | 95-98% para paralisis cerebral |
| Analisis de video por IA | Machine learning sobre videos caseros | Desarrollo comercial | 80-90% en estudios piloto |
| EEG de alta densidad | Conectividad funcional alterada en reposo | Investigacion clinica | Variable segun edad |
| Fenotipado digital (apps) | Analisis conductual por smartphone | Ensayos clinicos tempranos | En evaluacion |
| Biomarcadores salivales (RNA/epigeneticos) | Firmas epigeneticas en saliva | Investigacion basica | Preliminar |

**Evaluacion de Movimientos Generales de Prechtl (GMA):**
- Mejor predictor temprano de paralisis cerebral disponible desde las 2 semanas de vida
- Movimientos "writhing" (0-8 semanas): patron caotico/ausente = alto riesgo
- Movimientos "fidgety" (9-20 semanas de edad corregida): ausencia = VPP 95% para PC
- Combinacion GMA + RMN neonatal alcanza sensibilidad >98% y especificidad >95%
- Implementacion creciente en unidades de seguimiento de prematuros de alto riesgo
- Puede evaluarse por video remoto con entrenamiento certificado (accesibilidad)

### Neuroimagen del Desarrollo | Developmental Neuroimaging

**RMN funcional y el conectoma en desarrollo:**
- Redes de reposo (default mode network, salience network, executive control network) se establecen en los primeros 2 anos
- Prematuros muestran conectividad reducida en redes frontoparietal y de atencion dorsal
- La conectividad talamocortical es un biomarcador prometedor de resultado neurocognitivo
- Baby Connectome Project: atlas normativo del desarrollo de la conectividad cerebral 0-5 anos
- Limitaciones: movimiento como artefacto, necesidad de sedacion en lactantes, costo

**Neuroimagen por difusion (DTI):**
- Mapeo de tractos de sustancia blanca y secuencia de mielinizacion in vivo
- Anisotropia fraccional (FA) como marcador de integridad axonal
- FA reducida en tractos corticoespinales de prematuros con lesion de sustancia blanca predice paralisis cerebral
- Tractografia de lenguaje (fasciculo arcuato) puede predecir trayectoria linguistica

### Revolucion Genomica en el Neurodesarrollo | Genomic Revolution

**Rendimiento diagnostico escalonado:**
| Prueba | Rendimiento Diagnostico | Cuando Solicitar |
|--------|------------------------|------------------|
| Microarreglo cromosomico (CMA) | 15-20% | Primera linea para DI/TEA inexplicado |
| Secuenciacion del exoma clinico (WES) | 25-40% adicional | Tras CMA negativo |
| Secuenciacion del genoma completo (WGS) | 5-10% adicional | Tras WES negativo |
| Panel genetico dirigido | Variable | Fenotipo especifico reconocible |
| Analisis de metilacion genomewide | Variable | Sospecha de sindrome de imprinting |
| Secuenciacion de RNA | Emergente | Variantes intronicas/regulatorias sospechadas |

**Genes de alto impacto en neurodesarrollo (SFARI Gene Top 10):**
1. CHD8 - remodelacion de cromatina: TEA + macrocefalia
2. SCN2A - canal de sodio: encefalopatia epileptica o TEA
3. SHANK3 (Phelan-McDermid) - sinapsis: TEA + DI
4. PTEN - via PI3K/AKT: macrocefalia + TEA
5. SYNGAP1 - sinapsis glutamatergica: DI + epilepsia
6. DYRK1A - fosforilacion: microcefalia + DI
7. ADNP (Helsmoortel-Van der Aa) - remodelacion cromatina: TEA + DI
8. FOXP1 - factor de transcripcion: DI + trastorno del lenguaje
9. KAT6A - acetilacion de histonas: DI + dismorfismo
10. ARID1B (Coffin-Siris) - remodelacion cromatina: DI + hirsutismo

**Terapias genicas emergentes:**
| Terapia | Condicion | Fase | Mecanismo |
|---------|-----------|------|-----------|
| Antisense oligonucleotides (ASOs) | Sindrome de Angelman | Fase 1/2 | Desrepresion del alelo paterno UBE3A |
| Gene replacement AAV9 | Sindrome de X fragil | Preclinico | Restauracion de FMRP |
| CRISPR base editing | Mutaciones puntuales | Investigacion | Correccion in situ |
| Rapamicina/everolimus | Esclerosis tuberosa | Aprobado para SEGA | Inhibicion de mTOR |
| Nusinersen (Spinraza) modelo | SMA | Aprobado | ASO para inclusion del exon 7 de SMN2 |

### Disparidades en Acceso a Servicios | Health Disparities

**Datos sobre la poblacion hispana/latina en EE.UU.:**
| Indicador | Poblacion Hispana | Promedio Nacional |
|-----------|-------------------|-------------------|
| Edad media al diagnostico de TEA | 4.7 anos | 4.0 anos |
| Uso de servicios de intervencion temprana | 30% menor | Referencia |
| Tamizaje del desarrollo completado | 67% | 75% |
| Acceso a especialista bilingue | <50% de familias que lo necesitan | N/A |
| Familias que reportan barreras idiomaticas | 45% | N/A |
| Probabilidad de recibir diagnostico de TEA (vs. DI inespecifica) | Menor | Referencia |

**Factores contribuyentes:**
1. Barreras idiomaticas en comunicacion con proveedores y documentacion
2. Falta de herramientas validadas culturalmente (no solo traducidas)
3. Diferencias culturales en la percepcion de "retraso" vs. variacion normal
4. Status migratorio como barrera para buscar servicios
5. Sesgo diagnostico: atribucion incorrecta de diferencias al bilinguismo
6. Menor densidad de especialistas bilingues en areas de alta concentracion hispana
7. Desconocimiento del programa IDEA y derechos de las familias

**Estrategias basadas en evidencia para reducir disparidades:**
- Promotoras de salud entrenadas en tamizaje del desarrollo (modelo validado)
- Navegadores de pacientes bilingues/biculturales
- Telemedicina para consultas especializadas en areas rurales con baja densidad de especialistas
- Materiales educativos culturalmente adaptados (no solo traducidos literalmente)
- Integracion del tamizaje del desarrollo en programas WIC, Head Start, y consulados
- Capacitacion en competencia cultural para proveedores pediatricos
- Universal vs. targeted approach: el tamizaje universal reduce sesgo de referencia

### Controversias Actuales en Neurodesarrollo | Current Controversies

**1. Tamizaje universal de TEA: USPSTF vs. AAP**
- USPSTF (2024): "evidencia insuficiente" para tamizaje universal en ninos sin signos
- AAP: sigue recomendando tamizaje universal con M-CHAT-R/F a los 18 y 24 meses
- PPV del M-CHAT sin follow-up interview: 14-54% (demasiados falsos positivos)
- PPV con follow-up interview: 48-74% (mucho mejor pero requiere mas tiempo)

**2. Diagnostico ultra-temprano de TEA (<18 meses)**
- Eye-tracking puede detectar riesgo desde los 6 meses
- Estabilidad del diagnostico >90% si se hace despues de los 18 meses
- Dilema etico: beneficio de intervencion temprana vs. ansiedad parental y etiquetado prematuro

**3. Neurodiversidad vs. modelo medico**
- El movimiento de neurodiversidad considera TEA como variante natural, no enfermedad
- Implicacion clinica: el objetivo es reducir barreras funcionales, no "normalizar"
- Consenso emergente: respetar neurodiversidad + tratar comorbilidades (epilepsia, ansiedad, GI)

**4. Pantallas y desarrollo:**
- AAP: cero pantallas <18 meses (excepto videollamadas)
- Realidad: >90% de ninos <2 anos tienen exposicion a pantallas
- Evidencia emergente: apps interactivas de alta calidad pueden tener beneficios limitados >18 meses
- Riesgo principal: desplazamiento de interaccion cara a cara y juego activo

---
## MD/Professional-Level Explanation

[The above covers digital biomarkers including Prechtl GMA with 95% PPV for cerebral palsy, developmental connectome imaging, the genomic revolution with diagnostic yield data and emerging gene therapies, systemic health disparities affecting Hispanic/Latino families with evidence-based strategies to reduce them, and current controversies in universal screening, ultra-early diagnosis, neurodiversity, and screen time.]`,
      keyTerms: [
        {
          term: 'movimientos generales de Prechtl | Prechtl General Movements',
          definition:
            'Sistema de evaluacion observacional de patrones de movimiento espontaneo en lactantes. La ausencia de movimientos "fidgety" a las 12-20 semanas de edad corregida tiene un VPP del 95% para paralisis cerebral, siendo el mejor predictor disponible antes de los 5 meses. | Observational assessment system of spontaneous movement patterns in infants. Absence of fidgety movements at 12-20 weeks corrected age has a 95% PPV for cerebral palsy, being the best available predictor before 5 months.',
          pronunciation: 'PREK-tel',
        },
        {
          term: 'conectoma | connectome',
          definition:
            'Mapa completo de las conexiones neuronales del cerebro. Las redes funcionales (default mode, salience, executive control) se establecen en los primeros 2 anos y pueden servir como biomarcadores de resultado neurocognitivo en prematuros y ninos de alto riesgo. | Complete map of brain neural connections. Functional networks (default mode, salience, executive control) are established in the first 2 years and may serve as neurocognitive outcome biomarkers in premature and high-risk infants.',
          pronunciation: 'koh-nek-TOH-mah',
        },
        {
          term: 'rendimiento diagnostico | diagnostic yield',
          definition:
            'Porcentaje de pruebas geneticas que identifican una causa. El microarreglo cromosomico rinde ~15-20%, el exoma clinico agrega 25-40%, y el genoma completo puede agregar 5-10% adicional. Rendimiento total escalonado: 45-70%. | Percentage of genetic tests identifying a cause. Chromosomal microarray yields ~15-20%, clinical exome adds 25-40%, and whole genome may add 5-10% more. Total stepwise yield: 45-70%.',
          pronunciation: 'ren-dee-mee-EN-toh dee-ag-NOHS-tee-koh',
        },
        {
          term: 'promotora de salud | community health worker',
          definition:
            'Trabajadora de salud comunitaria de la misma cultura e idioma que la poblacion atendida. Modelo validado para reducir disparidades en tamizaje del desarrollo y adherencia a servicios de intervencion temprana en comunidades hispanas/latinas. | Community health worker from the same culture and language as the population served. Validated model for reducing disparities in developmental screening and adherence to early intervention services in Hispanic/Latino communities.',
          pronunciation: 'proh-moh-TOH-rah deh sah-LOOD',
        },
        {
          term: 'neurodiversidad | neurodiversity',
          definition:
            'Marco conceptual que considera las variaciones del neurodesarrollo (TEA, TDAH, dislexia) como parte de la diversidad humana natural. Implicacion clinica: el objetivo terapeutico es reducir barreras funcionales y tratar comorbilidades, no "normalizar" la cognicion. | Conceptual framework considering neurodevelopmental variations (ASD, ADHD, dyslexia) as part of natural human diversity. Clinical implication: therapeutic goal is to reduce functional barriers and treat comorbidities, not to "normalize" cognition.',
          pronunciation: 'NEH-oo-roh-dee-ver-see-DAHD',
        },
      ],
      clinicalNotes:
        'Integracion clinica avanzada: La evaluacion de movimientos generales de Prechtl debe integrarse en el seguimiento de todo prematuro de alto riesgo (<32 semanas o <1500g). Su VPP del 95% para paralisis cerebral supera cualquier otra herramienta antes de los 5 meses. En el abordaje genomico, el microarreglo cromosomico es primera linea para DI/TEA inexplicado; si es negativo, proceder a exoma clinico. La secuenciacion de RNA esta emergiendo como complemento para variantes intronicas no detectadas por exoma. En familias hispanas/latinas, el uso de promotoras de salud entrenadas en tamizaje del desarrollo ha demostrado aumentar la tasa de deteccion temprana y la adherencia a servicios. La edad al diagnostico de TEA en ninos hispanos continua siendo 8 meses mayor que en ninos no hispanos blancos; reducir esta brecha requiere estrategias sistemicas multifaceticas que incluyan tamizaje universal, proveedores bilingues, navegacion de pacientes, y materiales culturalmente adaptados (no solo traducidos). | Advanced clinical integration: Prechtl General Movement Assessment should be integrated into follow-up of all high-risk premature infants (<32 weeks or <1500g). Its 95% PPV for cerebral palsy surpasses any other tool before 5 months. In the genomic approach, chromosomal microarray is first-line for unexplained ID/ASD; if negative, proceed to clinical exome. RNA sequencing is emerging as a complement for intronic variants not detected by exome. In Hispanic/Latino families, trained community health workers (promotoras) for developmental screening have been shown to increase early detection rates and service adherence. Age at ASD diagnosis in Hispanic children continues to be 8 months later than in non-Hispanic white children; reducing this gap requires multifaceted systemic strategies including universal screening, bilingual providers, patient navigation, and culturally adapted materials (not just translated).',
    },
  },

  media: [],

  citations: [
    {
      id: 'ref-nelson-child-dev',
      type: 'textbook',
      title: 'Nelson Textbook of Pediatrics - Growth, Development, and Behavior',
      authors: ['Kliegman, R.M.', 'St. Geme, J.W.'],
      source: 'Elsevier, 22nd Edition',
      chapter: 'Part II: Growth, Development, and Behavior',
    },
    {
      id: 'ref-aap-bright-futures',
      type: 'guideline',
      title: 'Bright Futures: Guidelines for Health Supervision of Infants, Children, and Adolescents',
      authors: ['American Academy of Pediatrics'],
      source: 'AAP',
      url: 'https://brightfutures.aap.org',
    },
    {
      id: 'ref-cdc-milestones-2025',
      type: 'website',
      title: 'CDC Learn the Signs. Act Early. - Developmental Milestones',
      authors: ['Centers for Disease Control and Prevention'],
      source: 'CDC',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/',
    },
    {
      id: 'ref-piaget-cognitive',
      type: 'textbook',
      title: 'The Psychology of the Child',
      authors: ['Piaget, J.', 'Inhelder, B.'],
      source: 'Basic Books',
    },
    {
      id: 'ref-shonkoff-neurons',
      type: 'textbook',
      title: 'From Neurons to Neighborhoods: The Science of Early Childhood Development',
      authors: ['Shonkoff, J.P.', 'Phillips, D.A.'],
      source: 'National Academies Press',
    },
    {
      id: 'ref-felitti-aces',
      type: 'journal',
      title: 'Relationship of childhood abuse and household dysfunction to many of the leading causes of death in adults',
      authors: ['Felitti, V.J.', 'Anda, R.F.'],
      source: 'American Journal of Preventive Medicine',
    },
  ],

  crossReferences: [
    {
      targetId: 'pediatrics-vacunacion-immunization-schedule',
      targetType: 'topic',
      relationship: 'sibling',
      label: 'Vacunacion Pediatrica | Pediatric Immunization',
    },
    {
      targetId: 'pediatrics-neonatologia-basica-neonatology',
      targetType: 'topic',
      relationship: 'related',
      label: 'Neonatologia Basica | Basic Neonatology',
    },
    {
      targetId: 'pediatrics-asma-pediatrico-asthma',
      targetType: 'topic',
      relationship: 'sibling',
      label: 'Asma Pediatrico | Pediatric Asthma',
    },
    {
      targetId: 'pediatrics-enfermedades-exantematicas-exanthems',
      targetType: 'topic',
      relationship: 'related',
      label: 'Enfermedades Exantematicas | Childhood Exanthems',
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
      'early intervention',
    ],
    keywords: [
      'hitos del desarrollo',
      'developmental milestones',
      'tamizaje',
      'screening',
      'Denver II',
      'ASQ-3',
      'Bayley-III',
      'reflejos primitivos',
      'mielinizacion',
      'regresion del desarrollo',
      'autismo',
      'TEA',
      'intervencion temprana',
      'IDEA',
      'ACEs',
      'neuroplasticidad',
      'promotora de salud',
      'bilingue',
    ],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['pediatrics', 'family medicine', 'psychiatry'],
    },
  },

  createdAt: '2026-02-05',
  updatedAt: '2026-02-05',
  version: 1,
  status: 'published',
  contributors: ['SOMA AI Content Team'],
};
