import { EducationalContent } from '../../types';

export const fracturasContent: EducationalContent = {
  id: 'condition-fracturas-fractures',
  type: 'condition',
  name: 'Fractures',
  nameEs: 'Fracturas',
  alternateNames: [
    'Hueso roto',
    'Broken bone',
    'Fractura ósea',
    'Bone fracture',
    'Quebradura',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Una fractura es un hueso roto. Ocurre cuando el hueso recibe más fuerza de la que puede soportar. La mayoría de las fracturas sanan bien con el tratamiento adecuado. | A fracture is a broken bone. It happens when a bone receives more force than it can withstand. Most fractures heal well with proper treatment.',
      explanation: `## Explicación

Una **fractura** significa que un hueso se ha roto. Los huesos son muy fuertes, pero pueden romperse cuando reciben un golpe fuerte, se tuercen o se someten a esfuerzo repetido.

**Causas comunes:**
- Caídas (la causa más frecuente)
- Accidentes de auto o moto
- Lesiones deportivas
- Uso excesivo o repetitivo (fracturas por estrés)
- Huesos débiles por osteoporosis (especialmente en adultos mayores)

**Señales de que puede haber una fractura:**
- Dolor fuerte que empeora al mover la zona
- Hinchazón y moretones
- Deformidad (se ve torcido o fuera de lugar)
- No poder usar la parte lesionada
- Sensibilidad al tocar la zona
- A veces se escucha un "crack" al momento de la lesión

**Tipos principales de fracturas:**
- **Fractura cerrada (simple):** El hueso se rompe pero la piel no se abre
- **Fractura abierta (expuesta):** El hueso rompe la piel — ¡es una emergencia!
- **Fractura por estrés:** Grietas pequeñas por uso repetitivo
- **Fractura en tallo verde:** Común en niños, el hueso se dobla y se rompe parcialmente

**Tratamiento:**
- Inmovilización con yeso, férula o aparato ortopédico
- A veces cirugía con placas, tornillos o clavos
- Medicamentos para el dolor
- Terapia física durante la recuperación

**Tiempo de sanación:**
- La mayoría de las fracturas sanan en 6 a 8 semanas
- Algunas tardan más dependiendo de la ubicación y la gravedad

---
## Explanation

A **fracture** means a bone is broken. Bones are very strong, but they can break when they receive a hard blow, get twisted, or are subjected to repetitive stress.

**Common causes:**
- Falls (the most frequent cause)
- Car or motorcycle accidents
- Sports injuries
- Overuse or repetitive stress (stress fractures)
- Weak bones from osteoporosis (especially in older adults)

**Signs that there may be a fracture:**
- Severe pain that worsens with movement
- Swelling and bruising
- Deformity (looks crooked or out of place)
- Inability to use the injured part
- Tenderness when the area is touched
- Sometimes a "crack" is heard at the time of injury

**Main types of fractures:**
- **Closed (simple) fracture:** The bone breaks but the skin is intact
- **Open (compound) fracture:** The bone breaks through the skin — this is an emergency!
- **Stress fracture:** Small cracks from repetitive use
- **Greenstick fracture:** Common in children, the bone bends and partially breaks

**Treatment:**
- Immobilization with a cast, splint, or brace
- Sometimes surgery with plates, screws, or rods
- Pain medication
- Physical therapy during recovery

**Healing time:**
- Most fractures heal in 6 to 8 weeks
- Some take longer depending on location and severity`,
      keyTerms: [
        {
          term: 'fractura',
          definition:
            'Rotura total o parcial de un hueso | A complete or partial break in a bone',
        },
        {
          term: 'yeso',
          definition:
            'Cubierta dura que mantiene el hueso roto quieto mientras sana | A hard covering that keeps the broken bone still while it heals',
        },
        {
          term: 'fractura abierta',
          definition:
            'Rotura donde el hueso sale a través de la piel | A break where bone comes through the skin',
        },
        {
          term: 'férula',
          definition:
            'Soporte rígido que inmoviliza parcialmente una extremidad fracturada | A rigid support that partially immobilizes a fractured limb',
        },
        {
          term: 'fractura por estrés',
          definition:
            'Grietas pequeñas en el hueso causadas por uso repetitivo | Small cracks in bone caused by repetitive use',
        },
      ],
      analogies: [
        'Una fractura es como una grieta en la rama de un árbol: necesita tiempo y las condiciones adecuadas para sanar. | A fracture is like a crack in a tree branch — it needs time and the right conditions to heal.',
        'Un yeso es como un andamio alrededor de un edificio en reparación: sostiene todo en su lugar mientras se arregla. | A cast is like scaffolding around a building being repaired — it holds everything in place while it is fixed.',
        'Los huesos sanando son como el pegamento secándose: hay que mantenerlo quieto y darle tiempo. | Bones healing are like glue drying — you have to keep it still and give it time.',
      ],
      examples: [
        'Una fractura de muñeca a menudo ocurre cuando caes y te apoyas con la mano extendida. | A wrist fracture often happens when you fall and catch yourself with an outstretched hand.',
        'Las fracturas por estrés en el pie son comunes en corredores que aumentan su distancia demasiado rápido. | Stress fractures in the foot are common in runners who increase their mileage too quickly.',
        'Un adulto mayor con osteoporosis puede fracturarse la cadera con una simple caída. | An older adult with osteoporosis may fracture their hip from a simple fall.',
      ],
      patientCounselingPoints: [
        'Es muy importante no mover la parte lesionada hasta que un médico la revise. | It is very important not to move the injured part until a doctor examines it.',
        'Siga las instrucciones de su médico sobre cuánto peso puede poner en la parte lesionada. | Follow your doctor\'s instructions about how much weight you can put on the injured part.',
        'La hinchazón es normal los primeros días. Eleve la parte lesionada y aplique hielo envuelto en tela. | Swelling is normal the first few days. Elevate the injured part and apply ice wrapped in cloth.',
        'No se quite el yeso usted mismo. Solo un profesional de salud debe retirarlo. | Do not remove your cast yourself. Only a healthcare professional should remove it.',
        'Acuda a urgencias si nota adormecimiento, cambio de color o dolor que no mejora con medicamento. | Go to the emergency room if you notice numbness, color change, or pain that does not improve with medication.',
      ],
    },

    2: {
      level: 2,
      summary:
        'Las fracturas se clasifican según su patrón, desplazamiento y compromiso de tejidos blandos. El tratamiento depende de la estabilidad, alineación y factores del paciente. | Fractures are classified by pattern, displacement, and soft tissue involvement. Treatment depends on stability, alignment, and patient factors.',
      explanation: `## Explicación

Las fracturas ocurren cuando la fuerza aplicada al hueso supera su resistencia. La clasificación guía las decisiones de tratamiento.

**Patrones de fractura:**
- **Transversa:** Línea recta que cruza el hueso perpendicularmente
- **Oblicua:** Rotura en ángulo diagonal
- **Espiral:** Patrón de torsión, generalmente por lesión rotacional
- **Conminuta:** Múltiples fragmentos (tres o más)
- **Segmentaria:** Dos líneas de fractura que aíslan un segmento del hueso
- **Por compresión:** Hueso aplastado (frecuente en columna vertebral)
- **En tallo verde:** Fractura incompleta en niños (el hueso se dobla)
- **Avulsión:** Un fragmento de hueso es arrancado por un tendón o ligamento

**Términos descriptivos importantes:**
- **Desplazada vs. no desplazada:** Si los fragmentos se han movido de su posición
- **Abierta vs. cerrada:** Si el hueso ha roto la piel
- **Estable vs. inestable:** Si los fragmentos mantienen su posición
- **Intra-articular vs. extra-articular:** Si la fractura compromete una articulación

**Proceso de curación del hueso (4 fases):**
1. **Inflamación** (días 1-7): Se forma un hematoma, llegan células de reparación
2. **Callo blando** (semanas 2-3): Se forma tejido cartilaginoso como puente
3. **Callo duro** (semanas 4-12): El cartílago se convierte en hueso nuevo
4. **Remodelación** (meses a años): El hueso nuevo se reorganiza y fortalece

**Principios de tratamiento:**
- **Reducción:** Restaurar la alineación de los fragmentos
- **Inmovilización:** Mantener la posición mientras sana
- **Rehabilitación:** Recuperar la función

**Tratamiento no quirúrgico:**
- Yeso o férula
- Aparatos ortopédicos funcionales
- Cabestrillo y protección de carga

**Indicaciones para cirugía:**
- Fracturas inestables
- Fracturas intra-articulares desplazadas
- Fracturas abiertas
- Fracaso del tratamiento conservador

---
## Explanation

Fractures occur when the force applied to a bone exceeds its strength. Classification guides treatment decisions.

**Fracture patterns:**
- **Transverse:** Straight line across the bone perpendicularly
- **Oblique:** Angled diagonal break
- **Spiral:** Twisting pattern, usually from rotational injury
- **Comminuted:** Multiple fragments (three or more)
- **Segmental:** Two fracture lines isolating a bone segment
- **Compression:** Crushed bone (common in the spine)
- **Greenstick:** Incomplete fracture in children (the bone bends)
- **Avulsion:** A bone fragment is pulled away by a tendon or ligament

**Important descriptive terms:**
- **Displaced vs. non-displaced:** Whether fragments have moved from their position
- **Open vs. closed:** Whether the bone has broken through the skin
- **Stable vs. unstable:** Whether fragments maintain their position
- **Intra-articular vs. extra-articular:** Whether the fracture involves a joint

**Bone healing process (4 phases):**
1. **Inflammation** (days 1-7): A hematoma forms, repair cells arrive
2. **Soft callus** (weeks 2-3): Cartilaginous tissue forms as a bridge
3. **Hard callus** (weeks 4-12): Cartilage transforms into new bone
4. **Remodeling** (months to years): New bone reorganizes and strengthens

**Treatment principles:**
- **Reduction:** Restoring fragment alignment
- **Immobilization:** Maintaining position while healing
- **Rehabilitation:** Restoring function

**Non-surgical treatment:**
- Cast or splint
- Functional bracing
- Sling and protected weight-bearing

**Surgical indications:**
- Unstable fractures
- Displaced intra-articular fractures
- Open fractures
- Failed conservative management`,
      keyTerms: [
        {
          term: 'reducción',
          definition:
            'Reacomodar los fragmentos óseos a su posición normal | Realigning broken bone fragments to their normal position',
        },
        {
          term: 'callo óseo',
          definition:
            'Hueso nuevo que se forma durante la curación de una fractura | New bone that forms during fracture healing',
        },
        {
          term: 'intra-articular',
          definition:
            'Fractura que se extiende hacia la superficie de una articulación | Fracture extending into a joint surface',
        },
        {
          term: 'conminuta',
          definition:
            'Fractura con múltiples fragmentos óseos (tres o más) | Fracture with multiple bone fragments (three or more)',
          pronunciation: 'con-mi-NU-ta',
        },
        {
          term: 'desplazada',
          definition:
            'Fractura donde los fragmentos se han movido de su posición anatómica | Fracture where fragments have moved from their anatomical position',
        },
        {
          term: 'avulsión',
          definition:
            'Fractura donde un tendón o ligamento arranca un pedazo de hueso | Fracture where a tendon or ligament pulls off a piece of bone',
        },
      ],
      analogies: [
        'La curación de una fractura es como soldar: primero se hace una conexión rústica y luego se refina con el tiempo. | Fracture healing is like welding — first you get a rough connection, then it refines over time.',
        'La formación de callo es como rellenar un bache: primero se sobrellena y luego se alisa. | Callus formation is like filling a pothole — first it overfills, then it smooths out.',
      ],
    },

    3: {
      level: 3,
      summary:
        'El manejo de fracturas requiere comprender la biología de curación, los principios de estabilidad y el reconocimiento de complicaciones. El tratamiento equilibra la estabilidad mecánica con la preservación de tejidos blandos. | Fracture management requires understanding healing biology, stability principles, and complication recognition. Treatment balances mechanical stability with soft tissue preservation.',
      explanation: `## Explicación

El cuidado integral de fracturas requiere comprender factores biológicos y mecánicos.

**Biología de la curación ósea:**
- **Primaria (directa):** Fijación rígida, remodelación por conos de corte (osteones). Requiere contacto directo entre fragmentos y compresión absoluta. No hay formación de callo visible en radiografía.
- **Secundaria (indirecta):** Se permite cierto movimiento, formación de callo. Es el mecanismo más común. Pasa por las 4 fases clásicas: inflamación, callo blando, callo duro y remodelación.
- La mayoría de las fracturas sanan por curación secundaria

**Factores que afectan la curación:**

*Del paciente:*
- Edad (niños sanan más rápido), estado nutricional, tabaquismo
- Diabetes, enfermedad vascular periférica
- Medicamentos (los AINEs y corticoides pueden retrasar la curación)
- Estado inmunológico

*De la fractura:*
- Ubicación (metáfisis > diáfisis en velocidad de curación)
- Grado de interrupción del suministro sanguíneo
- Grado de lesión de tejidos blandos
- Grado de conminución
- Espacio entre fragmentos

*Del tratamiento:*
- Estabilidad de la fijación
- Calidad de la reducción
- Momento oportuno de la cirugía
- Preservación de periostio y tejidos blandos

**Conceptos de estabilidad:**
- **Estabilidad absoluta:** Placas de compresión, tornillos de tracción (lag). Para fracturas articulares simples.
- **Estabilidad relativa:** Placas puente, clavos intramedulares. Para fracturas conminutas y diafisarias.
- Se debe adecuar el tipo de estabilidad al patrón de fractura y su biología

**Manejo de fractura abierta:**
- Clasificación de Gustilo-Anderson (Tipo I, II, IIIA, IIIB, IIIC)
- Antibióticos dentro de la primera hora
- Profilaxis antitetánica
- Irrigación y desbridamiento quirúrgico
- Planificación de cobertura de tejidos blandos
- Tipo IIIC involucra lesión vascular — emergencia

**Complicaciones frecuentes:**
- **Pseudoartrosis (no unión):** Fracaso en la consolidación; generalmente definido como sin progreso a los 9 meses
- **Consolidación viciosa (malunión):** Sana en mala posición
- **Infección:** Especialmente en fracturas abiertas y con implantes
- **Síndrome compartimental:** Aumento de presión en compartimento muscular que compromete el flujo sanguíneo — emergencia quirúrgica
- **Fallo de material:** Rotura de placas, tornillos o clavos
- **Síndrome de dolor regional complejo (SDRC):** Dolor desproporcionado crónico
- **Trombosis venosa profunda (TVP):** Por inmovilización prolongada
- **Embolia grasa:** Especialmente en fracturas de huesos largos

**Principios de rehabilitación:**
- Movilización temprana cuando la fijación es estable
- Carga de peso progresiva
- Fortalecimiento de musculatura periarticular
- Prevención de rigidez articular

---
## Explanation

Comprehensive fracture care requires understanding biological and mechanical factors.

**Bone healing biology:**
- **Primary (direct):** Rigid fixation, cutting cone remodeling (osteons). Requires direct fragment contact and absolute compression. No visible callus on radiograph.
- **Secondary (indirect):** Some motion permitted, callus formation. Most common mechanism. Progresses through 4 classic phases: inflammation, soft callus, hard callus, and remodeling.
- Most fractures heal by secondary healing

**Factors affecting healing:**

*Patient factors:*
- Age (children heal faster), nutritional status, smoking
- Diabetes, peripheral vascular disease
- Medications (NSAIDs and corticosteroids can delay healing)
- Immune status

*Fracture factors:*
- Location (metaphysis > diaphysis in healing speed)
- Degree of blood supply disruption
- Degree of soft tissue injury
- Degree of comminution
- Gap between fragments

*Treatment factors:*
- Stability of fixation
- Quality of reduction
- Timing of surgery
- Preservation of periosteum and soft tissues

**Stability concepts:**
- **Absolute stability:** Compression plates, lag screws. For simple articular fractures.
- **Relative stability:** Bridging plates, intramedullary nails. For comminuted and diaphyseal fractures.
- Match stability type to fracture pattern and biology

**Open fracture management:**
- Gustilo-Anderson classification (Type I, II, IIIA, IIIB, IIIC)
- Antibiotics within the first hour
- Tetanus prophylaxis
- Surgical irrigation and debridement
- Soft tissue coverage planning
- Type IIIC involves vascular injury — emergency

**Common complications:**
- **Nonunion:** Failure to consolidate; typically defined as no progress at 9 months
- **Malunion:** Heals in poor position
- **Infection:** Especially in open fractures and with implants
- **Compartment syndrome:** Increased pressure in muscle compartment compromising blood flow — surgical emergency
- **Hardware failure:** Breakage of plates, screws, or nails
- **Complex regional pain syndrome (CRPS):** Disproportionate chronic pain
- **Deep vein thrombosis (DVT):** From prolonged immobilization
- **Fat embolism:** Especially in long bone fractures

**Rehabilitation principles:**
- Early mobilization when fixation is stable
- Progressive weight-bearing
- Periarticular muscle strengthening
- Prevention of joint stiffness`,
      keyTerms: [
        {
          term: 'pseudoartrosis',
          definition:
            'Fractura que no consolida; típicamente definida como ausencia de progreso a los 9 meses | Fracture that fails to heal; typically defined as no progress at 9 months',
        },
        {
          term: 'consolidación viciosa',
          definition:
            'Fractura que sana en posición inaceptable | Fracture that heals in unacceptable position',
        },
        {
          term: 'Gustilo-Anderson',
          definition:
            'Sistema de clasificación para fracturas abiertas basado en tamaño de herida y contaminación | Classification system for open fractures based on wound size and contamination',
        },
        {
          term: 'síndrome compartimental',
          definition:
            'Aumento de presión en un compartimento muscular que compromete el flujo sanguíneo | Increased pressure in a muscle compartment compromising blood flow',
        },
        {
          term: 'periostio',
          definition:
            'Membrana que recubre el hueso, crucial para su nutrición y reparación | Membrane covering the bone, crucial for its nutrition and repair',
        },
        {
          term: 'desbridamiento',
          definition:
            'Remoción quirúrgica de tejido muerto o contaminado | Surgical removal of dead or contaminated tissue',
        },
      ],
      clinicalNotes:
        'El síndrome compartimental es una emergencia quirúrgica. Las 6 P (dolor con estiramiento pasivo es el más sensible) indican necesidad de fasciotomía urgente. La presión compartimental >30 mmHg o dentro de 30 mmHg de la presión diastólica requiere intervención. | Compartment syndrome is a surgical emergency. The 6 Ps (pain with passive stretch is the most sensitive) indicate need for urgent fasciotomy. Compartment pressure >30 mmHg or within 30 mmHg of diastolic pressure requires intervention.',
    },

    4: {
      level: 4,
      summary:
        'La fijación de fracturas aplica principios mecánicos para lograr estabilidad preservando el suministro sanguíneo. Comprender la longitud de trabajo, la rigidez del constructo y la distribución de cargas guía la selección de implantes y la técnica. | Fracture fixation applies mechanical principles to achieve stability while preserving blood supply. Understanding working length, construct stiffness, and load sharing guides implant selection and technique.',
      explanation: `## Explicación

El manejo avanzado de fracturas integra biomecánica con técnica quirúrgica.

**Principios biomecánicos:**

*Constructos de fijación:*
- **Placas:** Neutralización, compresión, puente, contrafuerte (buttress). Cada función tiene indicaciones específicas.
- **Clavos intramedulares:** Comparten carga con el hueso, permiten movimiento controlado. Ideales para diáfisis de huesos largos.
- **Fijación externa:** Temporal o definitiva, preserva tejidos blandos. Indicada en fracturas abiertas graves, control de daño, y fijación temporal.

*Rigidez del constructo:*
- **Longitud de trabajo:** Distancia entre los puntos de fijación más cercanos a la fractura
- Menor longitud de trabajo = constructo más rígido
- Afecta la deformación (strain) en el sitio de fractura
- Se debe ajustar según el objetivo biológico de curación

*Teoría de deformación (Strain Theory de Perren):*
- Deformación = Desplazamiento / Espacio entre fragmentos
- El hueso tolera 2-10% de deformación para curación secundaria
- Demasiado movimiento → Pseudoartrosis
- Muy poco movimiento → Curación atrófica
- La interfase de curación se adapta al nivel de deformación

**Biomecánica de placas:**
- Relación longitud de placa: Mínimo 2-3 veces la longitud de la fractura
- Densidad de tornillos: Balance entre estabilidad y suministro sanguíneo (no más del 50% de orificios ocupados en zona de fractura)
- Tornillos de bloqueo (locking) vs. convencionales — los de bloqueo crean constructos de ángulo fijo
- La posición de la placa afecta la resistencia a la flexión
- Principio de placa puente: Rigidez axial baja con estabilidad rotacional

**Clavos intramedulares:**
- Fresado (reamed) vs. no fresado (unreamed) — fresado proporciona mayor estabilidad pero daña circulación endosteal
- Bloqueo estático vs. dinámico — dinámico permite compresión axial
- Diámetro del clavo y longitud de trabajo
- Punto de entrada afecta la alineación final
- Indicaciones: Fracturas diafisarias de fémur, tibia, húmero

**Fracturas articulares:**
- La reducción anatómica es crítica — escalón articular >2 mm aumenta riesgo de artrosis
- Técnica de tornillo de tracción (lag screw)
- Placa de contrafuerte para extensión metafisaria
- Planificación con TAC para fracturas complejas
- Artroscopia asistida para reducción en fracturas seleccionadas

**Consideraciones especiales:**
- **Fracturas patológicas:** Estabilización vs. curación, considerar origen tumoral
- **Fracturas periprotésicas:** Clasificación de Vancouver (tipo A, B1-B3, C)
- **Fracturas pediátricas:** Consideraciones de placa de crecimiento (clasificación Salter-Harris I-V)
- **Fracturas en paciente osteoporótico:** Implantes de bloqueo, cemento aumentado, tornillos canulados con cemento

---
## Explanation

Advanced fracture management integrates biomechanics with surgical technique.

**Biomechanical principles:**

*Fixation constructs:*
- **Plates:** Neutralization, compression, bridging, buttress. Each function has specific indications.
- **Intramedullary nails:** Share load with bone, allow controlled motion. Ideal for long bone diaphyses.
- **External fixation:** Temporary or definitive, preserves soft tissues. Indicated in severe open fractures, damage control, and temporary fixation.

*Construct stiffness:*
- **Working length:** Distance between the nearest fixation points to the fracture
- Shorter working length = stiffer construct
- Affects strain at the fracture site
- Must be adjusted based on the biological healing goal

*Strain Theory (Perren's Strain Theory):*
- Strain = Displacement / Gap between fragments
- Bone tolerates 2-10% strain for secondary healing
- Too much motion → Nonunion
- Too little motion → Atrophic healing
- The healing interface adapts to the strain level

**Plate biomechanics:**
- Plate length ratio: Minimum 2-3 times fracture length
- Screw density: Balance between stability and blood supply (no more than 50% of holes occupied in fracture zone)
- Locking vs. conventional screws — locking creates fixed-angle constructs
- Plate position affects bending strength
- Bridge plating principle: Low axial stiffness with rotational stability

**Intramedullary nailing:**
- Reamed vs. unreamed — reaming provides greater stability but damages endosteal circulation
- Static vs. dynamic locking — dynamic allows axial compression
- Nail diameter and working length
- Starting point affects final alignment
- Indications: Diaphyseal fractures of femur, tibia, humerus

**Articular fractures:**
- Anatomic reduction is critical — articular step-off >2 mm increases arthritis risk
- Lag screw technique
- Buttress plating for metaphyseal extension
- CT planning for complex fractures
- Arthroscopy-assisted reduction for selected fractures

**Special considerations:**
- **Pathologic fractures:** Stabilization vs. healing, consider tumor origin
- **Periprosthetic fractures:** Vancouver classification (type A, B1-B3, C)
- **Pediatric fractures:** Growth plate considerations (Salter-Harris classification I-V)
- **Fractures in osteoporotic patients:** Locking implants, cement augmentation, cannulated screws with cement`,
      keyTerms: [
        {
          term: 'longitud de trabajo',
          definition:
            'Distancia entre los puntos de fijación más cercanos a la fractura; determina la rigidez del constructo | Distance between nearest fixation points to fracture; determines construct stiffness',
        },
        {
          term: 'deformación (strain)',
          definition:
            'Desplazamiento relativo a la longitud original; afecta el tipo de curación | Deformation relative to original length; affects healing type',
        },
        {
          term: 'tornillo de tracción (lag screw)',
          definition:
            'Técnica de tornillo que comprime los fragmentos de fractura entre sí | Screw technique that compresses fracture fragments together',
        },
        {
          term: 'placa de bloqueo (locking plate)',
          definition:
            'Placa con orificios roscados que crea un constructo de ángulo fijo; funciona como fijador externo interno | Plate with threaded holes creating fixed-angle construct; functions as internal external fixator',
        },
        {
          term: 'Salter-Harris',
          definition:
            'Clasificación de fracturas que involucran la placa de crecimiento en niños (tipos I-V) | Classification of fractures involving the growth plate in children (types I-V)',
        },
        {
          term: 'Vancouver',
          definition:
            'Clasificación de fracturas periprotésicas según ubicación y estabilidad del implante | Classification of periprosthetic fractures by location and implant stability',
        },
      ],
      clinicalNotes:
        'Las placas puente con tornillos de bloqueo espaciados lejos de la fractura preservan la biología mientras proveen estabilidad. Las placas de bloqueo funcionan como fijadores externos internos. En fracturas osteoporóticas, considerar aumentación con cemento para mejorar la fijación de tornillos. | Long span bridging plates with spaced locking screws away from the fracture preserve biology while providing stability. Locking plates function as internal external fixators. In osteoporotic fractures, consider cement augmentation to improve screw purchase.',
    },

    5: {
      level: 5,
      summary:
        'El cuidado contemporáneo de fracturas integra protocolos basados en evidencia, estrategias de mejora biológica y rehabilitación enfocada en resultados. Los desafíos incluyen optimización del ambiente de curación y manejo de lesiones complejas. | Contemporary fracture care integrates evidence-based protocols, biological enhancement strategies, and outcome-focused rehabilitation. Challenges include optimization of healing environment and management of complex injuries.',
      explanation: `## Explicación

El manejo experto de fracturas requiere comprensión de la evidencia actual y las tecnologías emergentes.

**Protocolos basados en evidencia:**

*Momento de la cirugía:*
- Fracturas abiertas: Desbridamiento temprano (controversia sobre regla de las 6 horas — evidencia actual sugiere que dentro de 24h es aceptable para Gustilo I-II con antibióticos adecuados)
- Fracturas de fémur: Fijación temprana (<24h) reduce complicaciones pulmonares y mortalidad
- Politraumatismo: Ortopedia de control de daño (DCO) vs. cuidado total temprano (ETC). DCO indicado cuando: ISS >40, hipotermia, acidosis, coagulopatía
- Fracturas de cadera en ancianos: Cirugía dentro de 24-48h mejora resultados y reduce mortalidad

*Protocolos de antibióticos:*
- Gustilo I-II: Cefalosporina de primera generación (cefazolina)
- Gustilo III: Cefalosporina + aminoglucósido (gentamicina)
- Contaminación de granja/suelo: Agregar penicilina para cobertura de Clostridium
- Duración basada en grado y cobertura de tejidos blandos (24-72h post-cobertura)

**Mejora biológica:**

*Opciones de injerto óseo:*
- **Autoinjerto:** Estándar de oro (cresta iliaca), cantidad limitada, morbilidad del sitio donante. Provee osteogénesis, osteoinducción y osteoconducción.
- **Aloinjerto:** Sin morbilidad del donante, incorporación más lenta, riesgo teórico de transmisión. Solo osteoconducción.
- **Sintéticos:** Andamios osteoconductivos (fosfato tricálcico, hidroxiapatita). Solo osteoconducción.
- **Aspirado de médula ósea (BMA):** Fuente de células madre mesenquimales, puede combinarse con andamio

*Biológicos:*
- **BMP-2 (proteína morfogenética ósea):** Aprobada por FDA para fracturas tibiales abiertas y fusión espinal. Efectos adversos incluyen formación ósea heterotópica y edema.
- **BMP-7:** Aprobada para pseudoartrosis recalcitrante
- **PRP (plasma rico en plaquetas):** Evidencia variable, uso como adyuvante
- **Células madre mesenquimales:** Investigacional, resultados prometedores en pseudoartrosis

**Patrones de fractura complejos:**

*Fracturas periarticulares:*
- Meseta tibial: Clasificación de Schatzker (I-VI). TAC obligatorio. Abordaje según columnas (revisado por Luo).
- Fémur distal: Clavo retrógrado vs. placa. Considerar reducción mini-abierta con técnica MIPO.
- Radio distal: Placa volar es estándar actual. Fijación con tornillos de ángulo fijo para fragmentos articulares.
- Pilón tibial: Protocolo escalonado — fijador externo seguido de RAFI definitiva.

*Politraumatismo:*
- Principios DCO: Estabilización temporal con fijador externo
- Tratamiento escalonado: Segundo tiempo quirúrgico para fijación definitiva cuando el paciente está estabilizado
- Optimización de reanimación: Corregir la "tríada letal" (hipotermia, acidosis, coagulopatía)
- Monitoreo de embolia grasa: Especialmente con fijación intramedular de fracturas de huesos largos

**Medidas de resultado:**
- DASH, SMFA para función de extremidad superior e inferior
- SF-36 para calidad de vida
- Retorno al trabajo/deporte como indicador funcional
- VAS para dolor
- Escalas específicas: Harris Hip Score, Knee Society Score

**Manejo de complicaciones:**

*Pseudoartrosis:*
- **Hipertrófica:** Problema mecánico — necesita mayor estabilidad. "Pata de elefante" radiográfica.
- **Atrófica:** Problema biológico — necesita injerto óseo y/o biológicos. Radiografía muestra extremos atróficos.
- **Oligotrófica:** Reducción inadecuada con separación de fragmentos
- Tratamiento: Abordar la causa subyacente (mejorar mecánica y/o biología)

*Infección:*
- Tratamiento escalonado frecuentemente requerido
- Consideraciones de biopelícula (biofilm): Bacterias adheridas a implantes son resistentes a antibióticos sistémicos
- Espaciadores de cemento impregnados con antibiótico (PMMA con vancomicina/tobramicina)
- Masquelet: Técnica de membrana inducida para defectos óseos segmentarios infectados
- Supresión antibiótica prolongada en casos de implantes retenidos

**Conceptos emergentes:**
- Implantes impresos en 3D y planificación quirúrgica personalizada
- Navegación intraoperatoria y robótica
- Optimización de biológicos y terapia génica
- Programas de fractura por fragilidad (FLS) — reducen fractura secundaria 30-40%
- Osteointegración de implantes para amputaciones
- Membranas biorreabsorbibles y recubrimientos bioactivos
- Telemedicina para seguimiento de fracturas

---
## Explanation

Expert fracture management requires understanding of current evidence and emerging technologies.

**Evidence-based protocols:**

*Timing of surgery:*
- Open fractures: Early debridement (controversy about the 6-hour rule — current evidence suggests within 24h is acceptable for Gustilo I-II with adequate antibiotics)
- Femur fractures: Early fixation (<24h) reduces pulmonary complications and mortality
- Polytrauma: Damage control orthopedics (DCO) vs. early total care (ETC). DCO indicated when: ISS >40, hypothermia, acidosis, coagulopathy
- Hip fractures in elderly: Surgery within 24-48h improves outcomes and reduces mortality

*Antibiotic protocols:*
- Gustilo I-II: First-generation cephalosporin (cefazolin)
- Gustilo III: Cephalosporin + aminoglycoside (gentamicin)
- Farm/soil contamination: Add penicillin for Clostridium coverage
- Duration based on grade and soft tissue coverage (24-72h post-coverage)

**Biological enhancement:**

*Bone graft options:*
- **Autograft:** Gold standard (iliac crest), limited quantity, donor site morbidity. Provides osteogenesis, osteoinduction, and osteoconduction.
- **Allograft:** No donor morbidity, slower incorporation, theoretical transmission risk. Osteoconduction only.
- **Synthetics:** Osteoconductive scaffolds (tricalcium phosphate, hydroxyapatite). Osteoconduction only.
- **Bone marrow aspirate (BMA):** Source of mesenchymal stem cells, can be combined with scaffold

*Biologics:*
- **BMP-2:** FDA approved for open tibial fractures and spinal fusion. Adverse effects include heterotopic bone formation and edema.
- **BMP-7:** Approved for recalcitrant nonunion
- **PRP:** Variable evidence, used as adjunct
- **Mesenchymal stem cells:** Investigational, promising results in nonunion

**Complex fracture patterns:**

*Periarticular fractures:*
- Tibial plateau: Schatzker classification (I-VI). CT mandatory. Column-based approach (revised by Luo).
- Distal femur: Retrograde nail vs. plate. Consider mini-open reduction with MIPO technique.
- Distal radius: Volar plating is current standard. Fixed-angle screw fixation for articular fragments.
- Pilon: Staged protocol — external fixator followed by definitive ORIF.

*Polytrauma:*
- DCO principles: Temporary stabilization with external fixator
- Staged treatment: Second surgery for definitive fixation when patient is stabilized
- Resuscitation optimization: Correct the "lethal triad" (hypothermia, acidosis, coagulopathy)
- Fat embolism monitoring: Especially with intramedullary fixation of long bone fractures

**Outcome measures:**
- DASH, SMFA for upper and lower extremity function
- SF-36 for quality of life
- Return to work/sport as functional indicator
- VAS for pain
- Specific scales: Harris Hip Score, Knee Society Score

**Complications management:**

*Nonunion:*
- **Hypertrophic:** Mechanical problem — needs more stability. "Elephant foot" radiographic appearance.
- **Atrophic:** Biological problem — needs bone graft and/or biologics. Radiograph shows atrophic ends.
- **Oligotrophic:** Inadequate reduction with fragment separation
- Treatment: Address the underlying cause (improve mechanics and/or biology)

*Infection:*
- Staged treatment often required
- Biofilm considerations: Bacteria adhered to implants are resistant to systemic antibiotics
- Antibiotic-impregnated cement spacers (PMMA with vancomycin/tobramycin)
- Masquelet: Induced membrane technique for infected segmental bone defects
- Prolonged antibiotic suppression in cases of retained hardware

**Emerging concepts:**
- 3D-printed implants and personalized surgical planning
- Intraoperative navigation and robotics
- Biologics optimization and gene therapy
- Fragility fracture programs (FLS) — reduce secondary fractures by 30-40%
- Osseointegration of implants for amputations
- Bioresorbable membranes and bioactive coatings
- Telemedicine for fracture follow-up`,
      keyTerms: [
        {
          term: 'ortopedia de control de daño (DCO)',
          definition:
            'Tratamiento escalonado que prioriza la fisiología del paciente sobre la fijación definitiva de fracturas | Staged treatment prioritizing patient physiology over definitive fracture fixation',
        },
        {
          term: 'BMP-2',
          definition:
            'Proteína morfogenética ósea-2; agente biológico que promueve la formación de hueso | Bone morphogenetic protein-2; biologic agent promoting bone formation',
        },
        {
          term: 'biopelícula (biofilm)',
          definition:
            'Comunidad bacteriana sobre la superficie de un implante, resistente a antibióticos sistémicos | Bacterial community on implant surface resistant to systemic antibiotics',
        },
        {
          term: 'Masquelet',
          definition:
            'Técnica de membrana inducida para reconstrucción de defectos óseos segmentarios | Induced membrane technique for segmental bone defect reconstruction',
        },
        {
          term: 'MIPO',
          definition:
            'Osteosíntesis mínimamente invasiva con placa; técnica que preserva tejidos blandos | Minimally invasive plate osteosynthesis; technique that preserves soft tissues',
        },
        {
          term: 'Schatzker',
          definition:
            'Clasificación de fracturas de meseta tibial en 6 tipos según patrón y energía del trauma | Classification of tibial plateau fractures into 6 types based on pattern and energy of trauma',
        },
      ],
      clinicalNotes:
        'Una fractura por fragilidad después de los 50 años indica necesidad de evaluación de osteoporosis. Los servicios de enlace de fracturas (FLS) reducen el riesgo de fractura secundaria en un 30-40%. El momento de la cirugía de cadera (<24-48h) es un indicador de calidad hospitalaria en muchos sistemas de salud. | A fragility fracture after age 50 indicates need for osteoporosis workup. Fracture Liaison Services (FLS) reduce secondary fracture risk by 30-40%. Timing of hip surgery (<24-48h) is a hospital quality indicator in many healthcare systems.',
    },
  },

  media: [],
  citations: [
    {
      id: 'ref-fracturas-1',
      type: 'textbook',
      title: "Rockwood and Green's Fractures in Adults",
      authors: ['Tornetta, P.', 'Ricci, W.', 'Court-Brown, C.M.'],
      source: 'Wolters Kluwer',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-fracturas-2',
      type: 'textbook',
      title: 'AO Principles of Fracture Management',
      authors: ['Buckley, R.E.', 'Moran, C.G.', 'Apivatthakakul, T.'],
      source: 'AO Foundation / Thieme',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-fracturas-3',
      type: 'textbook',
      title: 'Campbell\'s Operative Orthopaedics',
      authors: ['Azar, F.M.', 'Beaty, J.H.', 'Canale, S.T.'],
      source: 'Elsevier',
      license: 'CC BY 4.0',
    },
  ],
  crossReferences: [
    {
      targetId: 'ortho-patient-fracture-fixation',
      targetType: 'concept',
      relationship: 'related',
      label: 'Fijación de Fracturas / Fracture Fixation',
    },
    {
      targetId: 'ortho-patient-recovery-timelines',
      targetType: 'concept',
      relationship: 'related',
      label: 'Tiempos de Recuperación / Recovery Timelines',
    },
    {
      targetId: 'condition-lesiones-ligamentos',
      targetType: 'condition',
      relationship: 'related',
      label: 'Lesiones de Ligamentos / Ligament Injuries',
    },
  ],
  tags: {
    systems: ['musculoskeletal'],
    topics: ['orthopedics', 'trauma', 'fractures'],
    keywords: [
      'fractura',
      'hueso roto',
      'yeso',
      'cirugía ortopédica',
      'callo óseo',
      'fijación interna',
      'fracture',
      'broken bone',
      'cast',
      'orthopedic surgery',
      'bone healing',
      'internal fixation',
    ],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-02-05',
  updatedAt: '2026-02-05',
  version: 1,
  status: 'published',
  contributors: ['SOMA AI Content Team'],
};

export default fracturasContent;
