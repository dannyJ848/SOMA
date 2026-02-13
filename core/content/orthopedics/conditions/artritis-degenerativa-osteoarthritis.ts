import { EducationalContent } from '../../types';

export const artritisDegenerativaContent: EducationalContent = {
  id: 'condition-artritis-degenerativa-osteoarthritis',
  type: 'condition',
  name: 'Osteoarthritis',
  nameEs: 'Artrosis (Artritis Degenerativa)',
  alternateNames: [
    'Osteoartrosis',
    'Artritis por desgaste',
    'Enfermedad articular degenerativa',
    'Degenerative joint disease',
    'OA',
    'Wear-and-tear arthritis',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'La artrosis es el tipo más común de artritis. Ocurre cuando el cartílago que protege las articulaciones se desgasta con el tiempo, causando dolor, rigidez e hinchazón. | Osteoarthritis is the most common type of arthritis. It happens when the cartilage protecting the joints wears down over time, causing pain, stiffness, and swelling.',
      explanation: `## Explicación

La **artrosis** (también llamada osteoartritis o artritis degenerativa) es una enfermedad de las articulaciones que ocurre cuando el cartílago — el tejido suave y resbaloso que cubre los extremos de los huesos — se desgasta con el tiempo.

**¿Qué es el cartílago?**
El cartílago es como una almohadilla que permite que los huesos se deslicen suavemente uno sobre otro. Cuando se desgasta, los huesos rozan entre sí, causando dolor.

**¿A quién afecta?**
- Es muy común después de los 50 años
- Afecta a más de 500 millones de personas en el mundo
- Las mujeres la padecen más que los hombres
- El riesgo aumenta con la edad, el sobrepeso y lesiones previas

**Articulaciones más afectadas:**
- Rodillas
- Caderas
- Manos (especialmente los dedos)
- Columna vertebral (cuello y espalda baja)
- Hombros

**Síntomas principales:**
- **Dolor** que empeora con la actividad y mejora con el reposo
- **Rigidez** especialmente por la mañana o después de estar sentado mucho tiempo (generalmente menos de 30 minutos)
- **Hinchazón** de la articulación
- **Crujidos** o sensación de fricción al mover la articulación
- **Pérdida de movimiento** — la articulación no se mueve tan bien como antes
- **Debilidad** muscular alrededor de la articulación

**Tratamiento:**
- **Ejercicio:** Es el tratamiento más importante. Caminar, nadar y ejercicios de fortalecimiento ayudan mucho.
- **Control de peso:** Perder peso reduce la presión sobre las articulaciones
- **Medicamentos:** Analgésicos y antiinflamatorios para el dolor
- **Terapia física:** Ejercicios guiados para mejorar fuerza y movilidad
- **Ayudas:** Bastón, plantillas, rodilleras pueden ayudar
- **Cirugía:** Reemplazo articular cuando otros tratamientos no son suficientes

---
## Explanation

**Osteoarthritis** (also called degenerative arthritis or wear-and-tear arthritis) is a joint disease that occurs when cartilage — the smooth, slippery tissue covering the ends of bones — wears down over time.

**What is cartilage?**
Cartilage is like a cushion that allows bones to glide smoothly over each other. When it wears down, the bones rub against each other, causing pain.

**Who does it affect?**
- Very common after age 50
- Affects more than 500 million people worldwide
- Women are affected more than men
- Risk increases with age, excess weight, and prior injuries

**Most commonly affected joints:**
- Knees
- Hips
- Hands (especially the fingers)
- Spine (neck and lower back)
- Shoulders

**Main symptoms:**
- **Pain** that worsens with activity and improves with rest
- **Stiffness** especially in the morning or after prolonged sitting (usually less than 30 minutes)
- **Swelling** of the joint
- **Crepitus** or grinding sensation when moving the joint
- **Loss of motion** — the joint does not move as well as before
- **Muscle weakness** around the joint

**Treatment:**
- **Exercise:** The most important treatment. Walking, swimming, and strengthening exercises help a lot.
- **Weight management:** Losing weight reduces pressure on joints
- **Medications:** Pain relievers and anti-inflammatories
- **Physical therapy:** Guided exercises to improve strength and mobility
- **Assistive devices:** Cane, insoles, knee braces can help
- **Surgery:** Joint replacement when other treatments are not enough`,
      keyTerms: [
        {
          term: 'artrosis / osteoartritis',
          definition:
            'Enfermedad de las articulaciones donde el cartílago se desgasta, causando dolor y rigidez | Joint disease where cartilage wears down, causing pain and stiffness',
        },
        {
          term: 'cartílago',
          definition:
            'Tejido suave y resbaloso que cubre los extremos de los huesos en las articulaciones | Smooth, slippery tissue covering the ends of bones in joints',
        },
        {
          term: 'articulación',
          definition:
            'El punto donde dos huesos se unen y permiten el movimiento | The point where two bones meet and allow movement',
        },
        {
          term: 'rigidez articular',
          definition:
            'Dificultad para mover una articulación, especialmente después del reposo | Difficulty moving a joint, especially after rest',
        },
      ],
      analogies: [
        'El cartílago es como la suela de un zapato: con el uso se desgasta y ya no amortigua tan bien. | Cartilage is like the sole of a shoe — with use it wears down and no longer cushions as well.',
        'Una articulación con artrosis es como una bisagra oxidada: todavía se mueve, pero con más dificultad y ruido. | A joint with osteoarthritis is like a rusty hinge — it still moves, but with more difficulty and noise.',
        'El ejercicio para la artrosis es como aceitar una bisagra: el movimiento regular mantiene la articulación funcionando mejor. | Exercise for osteoarthritis is like oiling a hinge — regular movement keeps the joint working better.',
      ],
      examples: [
        'Una persona de 65 años nota que sus rodillas duelen al subir escaleras y están rígidas por la mañana. | A 65-year-old notices that their knees hurt when climbing stairs and are stiff in the morning.',
        'Un ex-deportista de 55 años tiene dolor en la rodilla donde tuvo una lesión de ligamento hace 20 años. | A 55-year-old former athlete has pain in the knee where they had a ligament injury 20 years ago.',
        'Una señora nota que los nudillos de sus dedos están hinchados y le cuesta abrir frascos. | A woman notices that her finger knuckles are swollen and she has difficulty opening jars.',
      ],
      patientCounselingPoints: [
        'El ejercicio regular es la mejor medicina para la artrosis. Aunque duela un poco al principio, mover la articulación la mantiene más sana. | Regular exercise is the best medicine for osteoarthritis. Even though it may hurt a little at first, moving the joint keeps it healthier.',
        'Mantener un peso saludable reduce mucho la presión sobre las articulaciones. Cada kilo de menos equivale a 4 kilos menos de presión en la rodilla. | Maintaining a healthy weight greatly reduces pressure on joints. Every pound lost equals 4 pounds less pressure on the knee.',
        'La artrosis no significa que deba dejar de moverse. El reposo excesivo empeora la rigidez y la debilidad. | Osteoarthritis does not mean you should stop moving. Excessive rest worsens stiffness and weakness.',
        'Los antiinflamatorios ayudan pero deben usarse con cuidado y bajo supervisión médica por sus efectos en el estómago y riñones. | Anti-inflammatories help but should be used carefully and under medical supervision due to their effects on the stomach and kidneys.',
      ],
    },

    2: {
      level: 2,
      summary:
        'La artrosis es una enfermedad articular degenerativa multifactorial que involucra la degradación progresiva del cartílago articular, cambios en el hueso subcondral y inflamación sinovial. El manejo combina medidas no farmacológicas, farmacológicas y quirúrgicas. | Osteoarthritis is a multifactorial degenerative joint disease involving progressive articular cartilage degradation, subchondral bone changes, and synovial inflammation. Management combines non-pharmacological, pharmacological, and surgical measures.',
      explanation: `## Explicación

La artrosis es mucho más que simple "desgaste" — es un proceso activo que afecta toda la articulación.

**Fisiopatología básica:**
- El cartílago articular pierde su capacidad de repararse
- Los condrocitos (células del cartílago) no pueden mantener el equilibrio entre formación y destrucción
- El hueso debajo del cartílago (subcondral) se engrosa y forma osteofitos (espolones óseos)
- La membrana sinovial se inflama produciendo derrame articular
- Los ligamentos y músculos periarticulares se debilitan
- Es un proceso de toda la articulación, no solo del cartílago

**Factores de riesgo:**
- **No modificables:** Edad, sexo femenino, genética, anatomía articular
- **Modificables:** Obesidad, lesiones articulares previas, sobrecarga repetitiva, debilidad muscular, mala alineación

**Clasificación radiográfica (Kellgren-Lawrence):**
- **Grado 0:** Normal
- **Grado 1:** Osteofitos dudosos
- **Grado 2:** Osteofitos definidos, espacio articular conservado
- **Grado 3:** Disminución moderada del espacio articular
- **Grado 4:** Pérdida severa del espacio articular, esclerosis subcondral

**Diagnóstico:**
- Principalmente clínico: dolor mecánico, rigidez <30 min, crepitación
- Radiografías: disminución del espacio articular, osteofitos, esclerosis subcondral
- No se necesitan análisis de sangre ni resonancia magnética para diagnóstico típico
- Diagnóstico diferencial: artritis reumatoide, gota, artritis séptica

**Tratamiento escalonado:**

*Nivel 1 — No farmacológico (base del tratamiento):*
- Educación del paciente y automanejo
- Ejercicio: aeróbico + fortalecimiento + flexibilidad
- Control de peso (objetivo: IMC <25)
- Terapia física
- Dispositivos de asistencia

*Nivel 2 — Farmacológico:*
- Paracetamol (acetaminofén) como primera línea
- AINEs tópicos (diclofenaco gel) para rodilla y mano
- AINEs orales con precaución (menor dosis, menor tiempo)
- Duloxetina para dolor crónico

*Nivel 3 — Inyecciones:*
- Corticosteroides intra-articulares: alivio temporal (semanas a meses)
- Ácido hialurónico: evidencia controvertida
- PRP: investigacional

*Nivel 4 — Cirugía:*
- Artroscopia: papel limitado en artrosis
- Osteotomía: para pacientes jóvenes con mala alineación
- Reemplazo articular parcial o total: cuando falla tratamiento conservador

---
## Explanation

Osteoarthritis is much more than simple "wear and tear" — it is an active process affecting the entire joint.

**Basic pathophysiology:**
- Articular cartilage loses its ability to self-repair
- Chondrocytes (cartilage cells) cannot maintain the balance between formation and destruction
- Subchondral bone thickens and forms osteophytes (bone spurs)
- The synovial membrane becomes inflamed producing joint effusion
- Periarticular ligaments and muscles weaken
- It is a whole-joint process, not just cartilage

**Risk factors:**
- **Non-modifiable:** Age, female sex, genetics, joint anatomy
- **Modifiable:** Obesity, prior joint injuries, repetitive overload, muscle weakness, malalignment

**Radiographic classification (Kellgren-Lawrence):**
- **Grade 0:** Normal
- **Grade 1:** Doubtful osteophytes
- **Grade 2:** Definite osteophytes, joint space preserved
- **Grade 3:** Moderate joint space narrowing
- **Grade 4:** Severe joint space loss, subchondral sclerosis

**Diagnosis:**
- Primarily clinical: mechanical pain, stiffness <30 min, crepitus
- X-rays: joint space narrowing, osteophytes, subchondral sclerosis
- Blood tests and MRI not needed for typical diagnosis
- Differential diagnosis: rheumatoid arthritis, gout, septic arthritis

**Stepwise treatment:**

*Level 1 — Non-pharmacological (foundation of treatment):*
- Patient education and self-management
- Exercise: aerobic + strengthening + flexibility
- Weight management (goal: BMI <25)
- Physical therapy
- Assistive devices

*Level 2 — Pharmacological:*
- Acetaminophen as first line
- Topical NSAIDs (diclofenac gel) for knee and hand
- Oral NSAIDs with caution (lowest dose, shortest time)
- Duloxetine for chronic pain

*Level 3 — Injections:*
- Intra-articular corticosteroids: temporary relief (weeks to months)
- Hyaluronic acid: controversial evidence
- PRP: investigational

*Level 4 — Surgery:*
- Arthroscopy: limited role in osteoarthritis
- Osteotomy: for young patients with malalignment
- Partial or total joint replacement: when conservative treatment fails`,
      keyTerms: [
        {
          term: 'condrocito',
          definition:
            'Célula del cartílago responsable de mantener la matriz cartilaginosa | Cartilage cell responsible for maintaining the cartilage matrix',
        },
        {
          term: 'osteofito',
          definition:
            'Espolón o crecimiento óseo anormal en el borde de una articulación con artrosis | Bone spur or abnormal bone growth at the edge of an osteoarthritic joint',
        },
        {
          term: 'hueso subcondral',
          definition:
            'Hueso que se encuentra directamente debajo del cartílago articular | Bone located directly beneath the articular cartilage',
        },
        {
          term: 'Kellgren-Lawrence',
          definition:
            'Sistema de clasificación radiográfica de la artrosis en 5 grados (0-4) | Radiographic classification system for osteoarthritis in 5 grades (0-4)',
        },
        {
          term: 'derrame articular',
          definition:
            'Acumulación anormal de líquido dentro de una articulación | Abnormal accumulation of fluid within a joint',
        },
        {
          term: 'crepitación',
          definition:
            'Sonido o sensación de crujido al mover una articulación | Crackling sound or sensation when moving a joint',
        },
      ],
      analogies: [
        'La artrosis es como un camino de tierra que se deteriora con el tráfico pesado y la lluvia: el desgaste es gradual pero progresivo. | Osteoarthritis is like a dirt road that deteriorates with heavy traffic and rain — the wear is gradual but progressive.',
        'Los osteofitos son como el moho que crece en los bordes de una ventana dañada: son la respuesta del cuerpo al daño, pero empeoran el problema. | Osteophytes are like mold growing on the edges of a damaged window — they are the body\'s response to damage, but they worsen the problem.',
      ],
    },

    3: {
      level: 3,
      summary:
        'La artrosis involucra una compleja interacción entre factores mecánicos, inflamatorios y metabólicos que llevan a la falla articular. La investigación actual reconoce diferentes fenotipos que pueden requerir tratamientos personalizados. | Osteoarthritis involves a complex interplay between mechanical, inflammatory, and metabolic factors leading to joint failure. Current research recognizes different phenotypes that may require personalized treatments.',
      explanation: `## Explicación

La comprensión moderna de la artrosis la reconoce como una enfermedad de órgano completo (la articulación) con múltiples fenotipos.

**Fisiopatología detallada:**

*Degradación del cartílago:*
- Desequilibrio entre metaloproteinasas de matriz (MMPs) y sus inhibidores (TIMPs)
- MMPs (especialmente MMP-13) degradan colágeno tipo II y agrecano
- ADAMTS-4 y ADAMTS-5 degradan proteoglicanos
- Pérdida de proteoglicanos → disminución de capacidad de retención de agua → cartílago menos resistente
- Apoptosis de condrocitos y formación de clústeres

*Cambios en hueso subcondral:*
- Esclerosis subcondral: aumento de densidad pero disminución de calidad ósea
- Formación de osteofitos: respuesta adaptativa que aumenta superficie articular
- Quistes subcondrales: áreas de osteonecrosis y reabsorción
- Aumento de vascularización y nervios (contribuye al dolor)

*Inflamación sinovial:*
- Sinovitis de bajo grado — diferente de artritis inflamatoria
- Producción de citoquinas proinflamatorias: IL-1β, TNF-α, IL-6
- Activación de macrófagos sinoviales
- Contribuye al dolor y progresión de la enfermedad

*Cambios periarticulares:*
- Debilidad y atrofia muscular (especialmente cuádriceps en OA de rodilla)
- Laxitud ligamentaria progresiva
- Formación de cuerpos libres intra-articulares
- Cambios en la mecánica de la marcha

**Fenotipos de artrosis (clasificación emergente):**
- **Biomecánico:** Predomina la mala alineación y sobrecarga
- **Inflamatorio:** Sinovitis predominante, responde a antiinflamatorios
- **Metabólico:** Asociado a síndrome metabólico y obesidad
- **Relacionado a dolor:** Sensibilización central prominente
- **Post-traumático:** Secundario a lesión articular previa
- **Genético:** Fuerte componente hereditario

**Artrosis por localización — consideraciones específicas:**

*Rodilla:*
- La más estudiada y frecuente
- Compartimentos: medial (más común), lateral, patelofemoral
- La alineación en varo o valgo afecta la progresión
- Debilidad del cuádriceps es factor de riesgo

*Cadera:*
- Puede presentarse como dolor inguinal, en muslo o referido a rodilla
- Considerar impingement femoroacetabular como causa
- Pérdida de rotación interna es signo temprano
- Afecta significativamente la marcha

*Mano:*
- Nódulos de Heberden (articulaciones interfalángicas distales)
- Nódulos de Bouchard (articulaciones interfalángicas proximales)
- Rizartrosis: artrosis de la base del pulgar (articulación CMC)
- Componente genético importante

*Columna:*
- Espondiloartrosis: afecta articulaciones facetarias
- Puede causar estenosis espinal
- Diferente de enfermedad discal degenerativa (aunque coexisten)

**Evaluación clínica estandarizada:**
- WOMAC: cuestionario estándar para rodilla y cadera (dolor, rigidez, función)
- Examen físico: rango de movimiento, alineación, estabilidad, marcha
- Radiografía con carga (standing/weight-bearing) obligatoria
- Resonancia magnética: no rutinaria, útil para diagnóstico diferencial y evaluación prequirúrgica

**Manejo basado en evidencia actual:**
- Guías OARSI, ACR, EULAR
- Ejercicio y control de peso son grado A de evidencia
- AINEs tópicos recomendados sobre orales para artrosis de rodilla y mano
- Corticosteroides intra-articulares: efecto a corto plazo, controversia sobre uso repetido
- Ácido hialurónico: evidencia inconsistente, no recomendado en algunas guías
- Glucosamina/condroitina: evidencia insuficiente en guías recientes

---
## Explanation

Modern understanding of osteoarthritis recognizes it as a whole-organ disease (the joint) with multiple phenotypes.

**Detailed pathophysiology:**

*Cartilage degradation:*
- Imbalance between matrix metalloproteinases (MMPs) and their inhibitors (TIMPs)
- MMPs (especially MMP-13) degrade type II collagen and aggrecan
- ADAMTS-4 and ADAMTS-5 degrade proteoglycans
- Loss of proteoglycans → decreased water retention capacity → less resilient cartilage
- Chondrocyte apoptosis and cluster formation

*Subchondral bone changes:*
- Subchondral sclerosis: increased density but decreased bone quality
- Osteophyte formation: adaptive response increasing joint surface area
- Subchondral cysts: areas of osteonecrosis and resorption
- Increased vascularization and nerve ingrowth (contributes to pain)

*Synovial inflammation:*
- Low-grade synovitis — different from inflammatory arthritis
- Production of pro-inflammatory cytokines: IL-1β, TNF-α, IL-6
- Synovial macrophage activation
- Contributes to pain and disease progression

*Periarticular changes:*
- Muscle weakness and atrophy (especially quadriceps in knee OA)
- Progressive ligamentous laxity
- Intra-articular loose body formation
- Gait mechanics changes

**Osteoarthritis phenotypes (emerging classification):**
- **Biomechanical:** Malalignment and overload predominate
- **Inflammatory:** Predominant synovitis, responds to anti-inflammatories
- **Metabolic:** Associated with metabolic syndrome and obesity
- **Pain-related:** Prominent central sensitization
- **Post-traumatic:** Secondary to prior joint injury
- **Genetic:** Strong hereditary component

**Osteoarthritis by location — specific considerations:**

*Knee:*
- Most studied and frequent
- Compartments: medial (most common), lateral, patellofemoral
- Varus or valgus alignment affects progression
- Quadriceps weakness is a risk factor

*Hip:*
- May present as groin, thigh, or referred knee pain
- Consider femoroacetabular impingement as a cause
- Loss of internal rotation is an early sign
- Significantly affects gait

*Hand:*
- Heberden's nodes (distal interphalangeal joints)
- Bouchard's nodes (proximal interphalangeal joints)
- Thumb base arthritis (CMC joint)
- Significant genetic component

*Spine:*
- Spondyloarthrosis: affects facet joints
- May cause spinal stenosis
- Different from degenerative disc disease (though they coexist)

**Standardized clinical assessment:**
- WOMAC: standard questionnaire for knee and hip (pain, stiffness, function)
- Physical exam: range of motion, alignment, stability, gait
- Weight-bearing radiographs mandatory
- MRI: not routine, useful for differential diagnosis and pre-surgical evaluation

**Evidence-based management:**
- OARSI, ACR, EULAR guidelines
- Exercise and weight control are grade A evidence
- Topical NSAIDs recommended over oral for knee and hand OA
- Intra-articular corticosteroids: short-term effect, controversy over repeated use
- Hyaluronic acid: inconsistent evidence, not recommended in some guidelines
- Glucosamine/chondroitin: insufficient evidence in recent guidelines`,
      keyTerms: [
        {
          term: 'metaloproteinasas de matriz (MMPs)',
          definition:
            'Enzimas que degradan los componentes de la matriz del cartílago; su sobreexpresión contribuye a la destrucción articular | Enzymes that degrade cartilage matrix components; their overexpression contributes to joint destruction',
        },
        {
          term: 'agrecano',
          definition:
            'Proteoglicano principal del cartílago articular, responsable de su capacidad de retener agua y resistir compresión | Major proteoglycan of articular cartilage, responsible for its water retention and compression resistance',
        },
        {
          term: 'sinovitis',
          definition:
            'Inflamación de la membrana sinovial que recubre la articulación | Inflammation of the synovial membrane lining the joint',
        },
        {
          term: 'sensibilización central',
          definition:
            'Amplificación del procesamiento del dolor en el sistema nervioso central; contribuye al dolor crónico en artrosis | Amplification of pain processing in the central nervous system; contributes to chronic pain in osteoarthritis',
        },
        {
          term: 'WOMAC',
          definition:
            'Western Ontario and McMaster Universities Osteoarthritis Index; cuestionario estandarizado para evaluar dolor, rigidez y función en artrosis de rodilla y cadera | Standardized questionnaire to assess pain, stiffness, and function in knee and hip OA',
        },
        {
          term: 'impingement femoroacetabular',
          definition:
            'Contacto anormal entre fémur y acetábulo que daña el cartílago y puede llevar a artrosis de cadera | Abnormal contact between femur and acetabulum that damages cartilage and may lead to hip OA',
        },
      ],
      clinicalNotes:
        'El dolor de artrosis de cadera se presenta frecuentemente como dolor inguinal, pero puede referirse a la rodilla ipsilateral. Siempre examinar la cadera en pacientes con dolor de rodilla sin hallazgos claros en la rodilla. La artrosis no correlaciona siempre con los hallazgos radiográficos — pacientes con cambios severos en imagen pueden tener mínimo dolor y viceversa. | Hip OA pain frequently presents as groin pain but can refer to the ipsilateral knee. Always examine the hip in patients with knee pain without clear knee findings. OA does not always correlate with radiographic findings — patients with severe imaging changes may have minimal pain and vice versa.',
    },

    4: {
      level: 4,
      summary:
        'El reemplazo articular total es uno de los procedimientos más exitosos en la medicina moderna. La selección del paciente, la planificación preoperatoria, la técnica quirúrgica y los protocolos de recuperación acelerada determinan los resultados a largo plazo. | Total joint replacement is one of the most successful procedures in modern medicine. Patient selection, preoperative planning, surgical technique, and enhanced recovery protocols determine long-term outcomes.',
      explanation: `## Explicación

El reemplazo articular total (artroplastia) representa la solución definitiva para la artrosis avanzada que no responde al manejo conservador.

**Indicaciones para reemplazo articular:**
- Dolor que limita actividades de la vida diaria a pesar de tratamiento conservador optimizado
- Hallazgos radiográficos concordantes (Kellgren-Lawrence 3-4)
- Fallo documentado de tratamiento no quirúrgico (mínimo 3-6 meses)
- Edad: no hay límite absoluto, pero se consideran expectativas de vida del implante

**Artroplastia total de rodilla (ATR):**

*Principios quirúrgicos:*
- Restaurar alineación mecánica (neutro o alineación cinética)
- Balancear ligamentos en flexión y extensión
- Resuperficiar los compartimentos afectados
- Preservar o sacrificar el ligamento cruzado posterior (LCP)

*Tipos de implante:*
- Conservador de cruzado (CR): mantiene LCP, más natural
- Estabilizado posterior (PS): sacrifica LCP, usa poste mecánico
- Prótesis con restricción varo/valgo: para inestabilidad
- Bisagra rotatoria: para deficiencia ligamentaria severa

*Controversias actuales:*
- Alineación mecánica vs. cinética vs. restringida
- Navegación por computadora y robótica
- Resuperficiación patelar: rutinaria vs. selectiva
- Fijación cementada vs. no cementada

**Artroplastia total de cadera (ATC):**

*Principios quirúrgicos:*
- Restaurar centro de rotación y offset femoral
- Restaurar longitud de pierna
- Lograr fijación estable del implante
- Minimizar riesgo de luxación

*Abordajes quirúrgicos:*
- Anterior directo (DAA): menor daño muscular, recuperación más rápida
- Posterolateral: el más utilizado, buena exposición
- Lateral directo (Hardinge): riesgo de debilidad de abductores
- Cada abordaje tiene ventajas y complicaciones específicas

*Superficies de contacto:*
- Metal-polietileno altamente entrecruzado: estándar actual
- Cerámica-polietileno: menos desgaste, para pacientes jóvenes
- Cerámica-cerámica: mínimo desgaste, riesgo de ruido
- Metal-metal: en desuso por reacciones adversas (metalosis)

*Fijación:*
- Cementada: fijación inmediata, ideal para hueso osteoporótico
- No cementada (press-fit): osteointegración, ideal para pacientes jóvenes activos
- Híbrida: vástago cementado + copa no cementada

**Protocolos de recuperación acelerada (Enhanced Recovery / ERAS):**
- Educación preoperatoria del paciente (expectativas realistas)
- Optimización médica preoperatoria (anemia, diabetes, nutrición)
- Analgesia multimodal sin opioides cuando sea posible
- Movilización el mismo día de la cirugía
- Fisioterapia protocolarizada desde día 0
- Alta temprana (1-3 días vs. 5-7 días tradicional)
- Seguimiento ambulatorio precoz

**Complicaciones del reemplazo articular:**
- Infección periprotésica: 1-2% incidencia. Aguda (<4 semanas) vs. crónica
- Luxación (cadera): 1-5%, más frecuente con abordaje posterior
- Tromboembolismo venoso: profilaxis obligatoria
- Aflojamiento aséptico: causa más común de revisión a largo plazo
- Fractura periprotésica
- Rigidez (rodilla): puede requerir manipulación bajo anestesia
- Desgaste y osteólisis

**Reemplazo articular parcial (unicompartimental de rodilla):**
- Indicaciones: artrosis unicompartimental con ligamentos intactos
- Ventajas: menos invasivo, recuperación más rápida, más natural
- Requisito: LCA intacto, deformidad corregible, IMC adecuado
- Tasa de revisión mayor que ATR a 15-20 años

---
## Explanation

Total joint replacement (arthroplasty) represents the definitive solution for advanced osteoarthritis that does not respond to conservative management.

**Indications for joint replacement:**
- Pain limiting activities of daily living despite optimized conservative treatment
- Concordant radiographic findings (Kellgren-Lawrence 3-4)
- Documented failure of non-surgical treatment (minimum 3-6 months)
- Age: no absolute limit, but implant life expectancy is considered

**Total knee arthroplasty (TKA):**

*Surgical principles:*
- Restore mechanical alignment (neutral or kinematic alignment)
- Balance ligaments in flexion and extension
- Resurface affected compartments
- Preserve or sacrifice posterior cruciate ligament (PCL)

*Implant types:*
- Cruciate retaining (CR): maintains PCL, more natural
- Posterior stabilized (PS): sacrifices PCL, uses mechanical post
- Varus/valgus constrained prosthesis: for instability
- Rotating hinge: for severe ligament deficiency

*Current controversies:*
- Mechanical vs. kinematic vs. restricted alignment
- Computer navigation and robotics
- Patellar resurfacing: routine vs. selective
- Cemented vs. uncemented fixation

**Total hip arthroplasty (THA):**

*Surgical principles:*
- Restore center of rotation and femoral offset
- Restore leg length
- Achieve stable implant fixation
- Minimize dislocation risk

*Surgical approaches:*
- Direct anterior (DAA): less muscle damage, faster recovery
- Posterolateral: most widely used, good exposure
- Direct lateral (Hardinge): risk of abductor weakness
- Each approach has specific advantages and complications

*Bearing surfaces:*
- Metal-highly crosslinked polyethylene: current standard
- Ceramic-polyethylene: less wear, for younger patients
- Ceramic-ceramic: minimal wear, risk of squeaking
- Metal-metal: falling out of use due to adverse reactions (metallosis)

*Fixation:*
- Cemented: immediate fixation, ideal for osteoporotic bone
- Uncemented (press-fit): osseointegration, ideal for young active patients
- Hybrid: cemented stem + uncemented cup

**Enhanced recovery protocols (ERAS):**
- Preoperative patient education (realistic expectations)
- Preoperative medical optimization (anemia, diabetes, nutrition)
- Multimodal opioid-sparing analgesia
- Same-day mobilization
- Protocolized physiotherapy from day 0
- Early discharge (1-3 days vs. traditional 5-7 days)
- Early outpatient follow-up

**Joint replacement complications:**
- Periprosthetic infection: 1-2% incidence. Acute (<4 weeks) vs. chronic
- Dislocation (hip): 1-5%, more frequent with posterior approach
- Venous thromboembolism: prophylaxis mandatory
- Aseptic loosening: most common cause of long-term revision
- Periprosthetic fracture
- Stiffness (knee): may require manipulation under anesthesia
- Wear and osteolysis

**Partial (unicompartmental) knee replacement:**
- Indications: unicompartmental OA with intact ligaments
- Advantages: less invasive, faster recovery, more natural feel
- Requirements: intact ACL, correctable deformity, adequate BMI
- Higher revision rate than TKA at 15-20 years`,
      keyTerms: [
        {
          term: 'artroplastia',
          definition:
            'Cirugía de reemplazo articular donde las superficies articulares dañadas se sustituyen con implantes metálicos y plásticos | Joint replacement surgery where damaged joint surfaces are replaced with metal and plastic implants',
        },
        {
          term: 'aflojamiento aséptico',
          definition:
            'Pérdida de fijación del implante sin infección; causa más común de revisión a largo plazo | Loss of implant fixation without infection; most common cause of long-term revision',
        },
        {
          term: 'osteólisis',
          definition:
            'Destrucción de hueso alrededor de un implante causada por partículas de desgaste | Bone destruction around an implant caused by wear particles',
        },
        {
          term: 'infección periprotésica',
          definition:
            'Infección alrededor de un implante articular; complicación devastadora que frecuentemente requiere cirugía de revisión | Infection around a joint implant; devastating complication frequently requiring revision surgery',
        },
        {
          term: 'osteointegración',
          definition:
            'Crecimiento directo de hueso sobre la superficie del implante no cementado | Direct bone growth onto the surface of an uncemented implant',
        },
        {
          term: 'ERAS (Enhanced Recovery After Surgery)',
          definition:
            'Protocolo multidisciplinario de recuperación acelerada que reduce estancia hospitalaria y mejora resultados | Multidisciplinary enhanced recovery protocol that reduces hospital stay and improves outcomes',
        },
      ],
      clinicalNotes:
        'La satisfacción del paciente tras artroplastia total de rodilla es de 80-85%, comparado con >95% para artroplastia total de cadera. El manejo de expectativas preoperatorias es crucial. La optimización preoperatoria (HbA1c <8%, IMC <40, cesación de tabaco, optimización nutricional) reduce significativamente las complicaciones. La infección periprotésica requiere alto índice de sospecha — VSG >30 y PCR >10 mg/L deben motivar artrocentesis. | Patient satisfaction after total knee arthroplasty is 80-85%, compared to >95% for total hip arthroplasty. Preoperative expectation management is crucial. Preoperative optimization (HbA1c <8%, BMI <40, smoking cessation, nutritional optimization) significantly reduces complications. Periprosthetic infection requires high index of suspicion — ESR >30 and CRP >10 mg/L should prompt arthrocentesis.',
    },

    5: {
      level: 5,
      summary:
        'Las fronteras de la investigación en artrosis incluyen terapias modificadoras de la enfermedad, medicina regenerativa, biomarcadores para diagnóstico temprano, y personalización del tratamiento basada en fenotipos moleculares. Las terapias biológicas y la inteligencia artificial están transformando el campo. | Research frontiers in osteoarthritis include disease-modifying therapies, regenerative medicine, biomarkers for early diagnosis, and treatment personalization based on molecular phenotypes. Biologic therapies and artificial intelligence are transforming the field.',
      explanation: `## Explicación

La investigación en artrosis está experimentando un cambio de paradigma, pasando de manejo sintomático a terapias modificadoras de la enfermedad (DMOADs).

**Terapias modificadoras de la enfermedad (DMOADs) — en investigación:**

*Biológicos dirigidos:*
- Anti-NGF (tanezumab, fasinumab): Bloquean factor de crecimiento nervioso. Reducen dolor significativamente pero preocupación por progresión acelerada de artrosis y osteonecrosis. FDA rechazó aprobación de tanezumab.
- Inhibidores de IL-1 (canakinumab, anakinra): Resultados modestos en artrosis, mejor en variante inflamatoria
- Anti-TNF: No efectivos en artrosis típica (diferente de artritis reumatoide)
- Inhibidores de WNT/β-catenina: Lorecivivint — inyección intra-articular, fase 3. Promueve condrogénesis.
- Inhibidores de MMP-13: En desarrollo preclínico, objetivo preservar colágeno tipo II

*Terapias condroprotectoras:*
- Esprifermin (FGF-18 recombinante): Estimula condrocitos, resultados de fase 2 muestran aumento de grosor cartilaginoso
- Inhibidores de aggrecanasa: En desarrollo temprano
- Moduladores de autofagia condrocitaria: Investigación básica prometedora

**Medicina regenerativa:**

*Terapia celular:*
- Células madre mesenquimales (MSCs): Autólogas (médula ósea, tejido adiposo) y alogénicas. Efecto predominantemente paracrino (inmunomodulador) más que regenerativo directo.
- Condrocitos autólogos expandidos: ACI (implantación de condrocitos autólogos) para defectos focales, no para artrosis generalizada
- Exosomas derivados de MSCs: Vesículas extracelulares con potencial antiinflamatorio y regenerativo — campo emergente

*Ingeniería de tejidos:*
- Andamios biocompatibles (hidrogeles, polímeros) sembrados con células
- Bioimpresión 3D de cartílago: Investigación avanzada, desafío de integración con hueso subcondral
- Cartílago descelularizado como andamio biológico

*Terapia génica:*
- Transferencia génica intra-articular de factores de crecimiento (TGF-β, IGF-1)
- CRISPR/Cas9 para modificar condrocitos (investigación básica)
- Vectores virales y no virales para entrega génica sostenida

**Biomarcadores y diagnóstico temprano:**
- Biomarcadores de degradación de cartílago: CTX-II, COMP, agrecano
- Biomarcadores óseos: CTX-I, osteocalcina
- Biomarcadores sinoviales: IL-6, MMP-3, HA de alto peso molecular
- Resonancia magnética cuantitativa: T2 mapping, dGEMRIC, T1-rho para evaluación de composición del cartílago
- Inteligencia artificial para análisis radiográfico: Detección temprana de cambios sutiles, predicción de progresión

**Personalización del tratamiento:**
- Estratificación por fenotipos moleculares usando biomarcadores
- Perfiles -ómicos (genómica, proteómica, metabolómica) para identificar subtipos
- Algoritmos de IA para predecir respuesta a tratamiento
- Medicina de precisión: el tratamiento correcto para el paciente correcto

**Registros de implantes y supervivencia:**
- Registros nacionales (Australia, Suecia, UK) reportan supervivencia de implantes
- ATR: supervivencia >95% a 15 años para implantes modernos
- ATC: supervivencia >95% a 20 años con superficies de contacto modernas
- Análisis de "big data" identifica factores de riesgo para revisión

**Cirugía asistida por tecnología:**
- Robótica (Mako, ROSA, CORI): Mejora precisión de alineación y cortes
- Navegación por computadora: Reduce outliers de alineación
- Implantes personalizados (patient-specific instruments, PSI)
- Realidad aumentada para planificación y ejecución quirúrgica
- Resultados a largo plazo: Evidencia creciente de beneficio en alineación pero beneficio clínico debatido

**Temas controversiales actuales:**
- ¿La artrosis es una enfermedad inevitable del envejecimiento o una condición prevenible?
- Papel de la microbiota intestinal en inflamación articular (eje intestino-articulación)
- Senolíticos: Eliminar células senescentes para retrasar artrosis
- Peso como enfermedad vs. factor de riesgo: Implicaciones para manejo integral
- Artrosis como enfermedad metabólica: El papel de la resistencia a insulina y dislipidemia en la degradación del cartílago
- Límites de la artroscopia: Evidencia clara de que el lavado y desbridamiento artroscópico no tiene beneficio sobre placebo en artrosis de rodilla

---
## Explanation

Research in osteoarthritis is undergoing a paradigm shift, moving from symptomatic management to disease-modifying osteoarthritis drugs (DMOADs).

**Disease-modifying therapies (DMOADs) — under investigation:**

*Targeted biologics:*
- Anti-NGF (tanezumab, fasinumab): Block nerve growth factor. Significantly reduce pain but concern about accelerated OA progression and osteonecrosis. FDA rejected tanezumab approval.
- IL-1 inhibitors (canakinumab, anakinra): Modest results in OA, better in inflammatory variant
- Anti-TNF: Not effective in typical OA (different from rheumatoid arthritis)
- WNT/β-catenin inhibitors: Lorecivivint — intra-articular injection, phase 3. Promotes chondrogenesis.
- MMP-13 inhibitors: In preclinical development, aim to preserve type II collagen

*Chondroprotective therapies:*
- Sprifermin (recombinant FGF-18): Stimulates chondrocytes, phase 2 results show cartilage thickness increase
- Aggrecanase inhibitors: In early development
- Chondrocyte autophagy modulators: Promising basic research

**Regenerative medicine:**

*Cell therapy:*
- Mesenchymal stem cells (MSCs): Autologous (bone marrow, adipose tissue) and allogeneic. Predominantly paracrine (immunomodulatory) effect rather than direct regeneration.
- Expanded autologous chondrocytes: ACI for focal defects, not for generalized OA
- MSC-derived exosomes: Extracellular vesicles with anti-inflammatory and regenerative potential — emerging field

*Tissue engineering:*
- Biocompatible scaffolds (hydrogels, polymers) seeded with cells
- 3D bioprinting of cartilage: Advanced research, challenge of subchondral bone integration
- Decellularized cartilage as biological scaffold

*Gene therapy:*
- Intra-articular gene transfer of growth factors (TGF-β, IGF-1)
- CRISPR/Cas9 for chondrocyte modification (basic research)
- Viral and non-viral vectors for sustained gene delivery

**Biomarkers and early diagnosis:**
- Cartilage degradation biomarkers: CTX-II, COMP, aggrecan
- Bone biomarkers: CTX-I, osteocalcin
- Synovial biomarkers: IL-6, MMP-3, high molecular weight HA
- Quantitative MRI: T2 mapping, dGEMRIC, T1-rho for cartilage composition assessment
- AI for radiographic analysis: Early detection of subtle changes, progression prediction

**Treatment personalization:**
- Stratification by molecular phenotypes using biomarkers
- -Omics profiling (genomics, proteomics, metabolomics) to identify subtypes
- AI algorithms to predict treatment response
- Precision medicine: the right treatment for the right patient

**Implant registries and survivorship:**
- National registries (Australia, Sweden, UK) report implant survivorship
- TKA: >95% survival at 15 years for modern implants
- THA: >95% survival at 20 years with modern bearing surfaces
- Big data analysis identifies risk factors for revision

**Technology-assisted surgery:**
- Robotics (Mako, ROSA, CORI): Improves alignment and cut precision
- Computer navigation: Reduces alignment outliers
- Patient-specific instruments (PSI) and custom implants
- Augmented reality for surgical planning and execution
- Long-term outcomes: Growing evidence of alignment benefit but clinical benefit debated

**Current controversial topics:**
- Is OA an inevitable disease of aging or a preventable condition?
- Role of gut microbiota in joint inflammation (gut-joint axis)
- Senolytics: Eliminating senescent cells to delay OA
- Weight as disease vs. risk factor: Implications for comprehensive management
- OA as metabolic disease: The role of insulin resistance and dyslipidemia in cartilage degradation
- Limits of arthroscopy: Clear evidence that arthroscopic lavage and debridement has no benefit over placebo in knee OA`,
      keyTerms: [
        {
          term: 'DMOADs',
          definition:
            'Fármacos modificadores de la enfermedad artrósica; terapias que buscan alterar la progresión natural de la artrosis, no solo los síntomas | Disease-modifying osteoarthritis drugs; therapies seeking to alter the natural progression of OA, not just symptoms',
        },
        {
          term: 'anti-NGF',
          definition:
            'Anticuerpos monoclonales que bloquean el factor de crecimiento nervioso para reducir el dolor en artrosis; preocupación por efectos adversos articulares | Monoclonal antibodies blocking nerve growth factor to reduce OA pain; concern about adverse joint effects',
        },
        {
          term: 'células madre mesenquimales (MSCs)',
          definition:
            'Células multipotentes capaces de diferenciarse en diversos tejidos; su efecto en artrosis es predominantemente paracrino/inmunomodulador | Multipotent cells capable of differentiating into various tissues; their effect in OA is predominantly paracrine/immunomodulatory',
        },
        {
          term: 'dGEMRIC',
          definition:
            'Delayed Gadolinium Enhanced MRI of Cartilage; técnica de resonancia magnética cuantitativa para evaluar el contenido de glucosaminoglicanos del cartílago | Quantitative MRI technique to assess cartilage glycosaminoglycan content',
        },
        {
          term: 'lorecivivint',
          definition:
            'Inhibidor de la vía WNT en fase 3 de investigación; inyección intra-articular que promueve condrogénesis y podría ser el primer DMOAD aprobado | WNT pathway inhibitor in phase 3 research; intra-articular injection promoting chondrogenesis that could be the first approved DMOAD',
        },
        {
          term: 'senolíticos',
          definition:
            'Fármacos que eliminan selectivamente células senescentes; investigados como potencial terapia modificadora de artrosis | Drugs that selectively eliminate senescent cells; investigated as potential OA-modifying therapy',
        },
      ],
      clinicalNotes:
        'El paradigma actual está cambiando de "tratar artrosis cuando es sintomática" a "detectar y intervenir tempranamente para prevenir progresión". Los biomarcadores moleculares y la RM cuantitativa pueden identificar cambios pre-radiográficos. La combinación de fenotipificación molecular y medicina de precisión promete revolucionar el manejo de la artrosis en la próxima década. Para el clínico actual: mantener ejercicio y control de peso como piedras angulares, optimizar farmacoterapia, y referir oportunamente para evaluación quirúrgica cuando hay fracaso conservador documentado. | The current paradigm is shifting from "treat OA when symptomatic" to "detect and intervene early to prevent progression." Molecular biomarkers and quantitative MRI can identify pre-radiographic changes. The combination of molecular phenotyping and precision medicine promises to revolutionize OA management in the next decade. For the current clinician: maintain exercise and weight control as cornerstones, optimize pharmacotherapy, and refer timely for surgical evaluation when documented conservative failure occurs.',
    },
  },

  media: [],
  citations: [
    {
      id: 'ref-artrosis-1',
      type: 'textbook',
      title: 'Kelley and Firestein\'s Textbook of Rheumatology',
      authors: ['Firestein, G.S.', 'Budd, R.C.', 'Gabriel, S.E.'],
      source: 'Elsevier',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-artrosis-2',
      type: 'article',
      title: '2019 American College of Rheumatology/Arthritis Foundation Guideline for the Management of Osteoarthritis of the Hand, Hip, and Knee',
      authors: ['Kolasinski, S.L.', 'Neogi, T.', 'Hochberg, M.C.'],
      source: 'Arthritis & Rheumatology',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-artrosis-3',
      type: 'article',
      title: 'OARSI guidelines for the non-surgical management of knee, hip, and polyarticular osteoarthritis',
      authors: ['Bannuru, R.R.', 'Osani, M.C.', 'Vaysbrot, E.E.'],
      source: 'Osteoarthritis and Cartilage',
      license: 'CC BY 4.0',
    },
  ],
  crossReferences: [
    {
      targetId: 'ortho-patient-joint-replacement',
      targetType: 'concept',
      relationship: 'related',
      label: 'Reemplazo Articular / Joint Replacement',
    },
    {
      targetId: 'ortho-patient-non-surgical-management',
      targetType: 'concept',
      relationship: 'related',
      label: 'Manejo No Quirúrgico / Non-Surgical Management',
    },
    {
      targetId: 'condition-fracturas-fractures',
      targetType: 'condition',
      relationship: 'related',
      label: 'Fracturas / Fractures',
    },
  ],
  tags: {
    systems: ['musculoskeletal'],
    topics: ['orthopedics', 'arthritis', 'rheumatology', 'joint replacement'],
    keywords: [
      'artrosis',
      'osteoartritis',
      'artritis degenerativa',
      'cartílago',
      'reemplazo articular',
      'rodilla',
      'cadera',
      'osteoarthritis',
      'degenerative joint disease',
      'cartilage',
      'joint replacement',
      'knee',
      'hip',
    ],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-02-05',
  updatedAt: '2026-02-05',
  version: 1,
  status: 'published',
  contributors: ['SOMA AI Content Team'],
};

export default artritisDegenerativaContent;
