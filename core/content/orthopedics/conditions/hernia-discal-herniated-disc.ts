import { EducationalContent } from '../../types';

export const herniaDiscalContent: EducationalContent = {
  id: 'condition-hernia-discal-herniated-disc',
  type: 'condition',
  name: 'Herniated Disc',
  nameEs: 'Hernia Discal',
  alternateNames: [
    'Disco herniado',
    'Hernia de disco',
    'Protrusión discal',
    'Prolapso discal',
    'Slipped disc',
    'Ruptured disc',
    'Disc protrusion',
    'Disc prolapse',
    'HNP (herniated nucleus pulposus)',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Una hernia discal ocurre cuando el centro blando de un disco de la columna vertebral se sale de su lugar y presiona un nervio, causando dolor, adormecimiento o debilidad en la espalda, pierna o brazo. La mayoría mejoran sin cirugía. | A herniated disc occurs when the soft center of a spinal disc pushes out of place and presses on a nerve, causing pain, numbness, or weakness in the back, leg, or arm. Most improve without surgery.',
      explanation: `## Explicación

Para entender una hernia discal, primero hay que saber cómo funciona la columna vertebral.

**¿Qué es la columna vertebral?**
La columna vertebral es una torre de huesos llamados vértebras que protegen la médula espinal. Entre cada vértebra hay un **disco intervertebral** — una especie de "cojín" que amortigua los movimientos.

**¿Cómo es un disco?**
Piense en un disco como una dona rellena de jalea:
- **Anillo fibroso:** La parte exterior dura (como la dona)
- **Núcleo pulposo:** El centro blando y gelatinoso (como la jalea)

**¿Qué pasa en una hernia discal?**
Cuando el anillo exterior se debilita o se rompe, el centro blando se sale de su lugar. Si esa "jalea" presiona un nervio cercano, causa dolor y otros síntomas.

**¿Dónde ocurre más frecuentemente?**
- **Espalda baja (lumbar):** Lo más común — causa dolor en pierna (ciática)
- **Cuello (cervical):** Causa dolor en brazo y mano
- **Espalda media (torácica):** Menos frecuente

**Síntomas:**

*Hernia lumbar (espalda baja):*
- Dolor en espalda baja que baja a la nalga y pierna (ciática)
- Adormecimiento u hormigueo en pierna o pie
- Debilidad en pierna o pie
- El dolor empeora al sentarse, toser o estornudar

*Hernia cervical (cuello):*
- Dolor en cuello que baja al hombro y brazo
- Adormecimiento u hormigueo en brazo o mano
- Debilidad en brazo o mano

**¿Cuándo ir al médico de URGENCIA?**
- Pérdida de control de orina o de evacuaciones
- Adormecimiento en la zona genital (anestesia en "silla de montar")
- Debilidad progresiva severa en piernas
- Estos síntomas indican **síndrome de cauda equina** — ¡emergencia quirúrgica!

**Tratamiento:**
- La mayoría mejoran en 6-12 semanas sin cirugía
- **Reposo relativo:** Evitar actividades que empeoren el dolor, pero no reposo total en cama
- **Medicamentos:** Antiinflamatorios, relajantes musculares, analgésicos
- **Terapia física:** Ejercicios de fortalecimiento y estiramiento
- **Inyecciones epidurales:** Corticosteroides para reducir inflamación
- **Cirugía:** Solo cuando no mejora con tratamiento conservador o hay déficit neurológico

---
## Explanation

To understand a herniated disc, you first need to know how the spine works.

**What is the spine?**
The spine is a tower of bones called vertebrae that protect the spinal cord. Between each vertebra there is an **intervertebral disc** — a kind of "cushion" that absorbs movement.

**What does a disc look like?**
Think of a disc like a jelly-filled donut:
- **Annulus fibrosus:** The tough outer part (like the donut)
- **Nucleus pulposus:** The soft, jelly-like center (like the jelly)

**What happens in a herniated disc?**
When the outer ring weakens or tears, the soft center pushes out. If that "jelly" presses on a nearby nerve, it causes pain and other symptoms.

**Where does it happen most often?**
- **Lower back (lumbar):** Most common — causes leg pain (sciatica)
- **Neck (cervical):** Causes arm and hand pain
- **Mid-back (thoracic):** Less frequent

**Symptoms:**

*Lumbar herniation (lower back):*
- Lower back pain radiating to buttock and leg (sciatica)
- Numbness or tingling in the leg or foot
- Weakness in the leg or foot
- Pain worsens when sitting, coughing, or sneezing

*Cervical herniation (neck):*
- Neck pain radiating to shoulder and arm
- Numbness or tingling in the arm or hand
- Weakness in the arm or hand

**When to seek URGENT medical care:**
- Loss of bladder or bowel control
- Numbness in the genital area ("saddle anesthesia")
- Progressive severe leg weakness
- These symptoms indicate **cauda equina syndrome** — a surgical emergency!

**Treatment:**
- Most improve in 6-12 weeks without surgery
- **Relative rest:** Avoid activities that worsen pain, but no total bed rest
- **Medications:** Anti-inflammatories, muscle relaxants, pain relievers
- **Physical therapy:** Strengthening and stretching exercises
- **Epidural injections:** Corticosteroids to reduce inflammation
- **Surgery:** Only when conservative treatment fails or there is neurological deficit`,
      keyTerms: [
        {
          term: 'hernia discal',
          definition:
            'Cuando el centro blando de un disco vertebral se sale de su lugar y puede presionar un nervio | When the soft center of a spinal disc pushes out of place and may press on a nerve',
        },
        {
          term: 'disco intervertebral',
          definition:
            'El "cojín" entre las vértebras que amortigua los movimientos | The "cushion" between vertebrae that absorbs movement',
        },
        {
          term: 'ciática',
          definition:
            'Dolor que viaja desde la espalda baja hacia la pierna siguiendo el nervio ciático | Pain that travels from the lower back down the leg following the sciatic nerve',
        },
        {
          term: 'vértebra',
          definition:
            'Cada uno de los huesos que forman la columna vertebral | Each of the bones that make up the spine',
        },
        {
          term: 'médula espinal',
          definition:
            'El cordón de nervios dentro de la columna que conecta el cerebro con el cuerpo | The cord of nerves inside the spine connecting the brain to the body',
        },
      ],
      analogies: [
        'Un disco intervertebral es como una dona rellena de jalea: cuando se aprieta demasiado, la jalea se puede salir por un lado. | An intervertebral disc is like a jelly-filled donut — when squeezed too much, the jelly can ooze out one side.',
        'Un nervio pinchado por un disco herniado es como una manguera pisada: la señal no pasa bien, causando dolor, adormecimiento o debilidad. | A nerve pinched by a herniated disc is like a stepped-on hose — the signal does not pass well, causing pain, numbness, or weakness.',
        'La columna vertebral es como una torre de bloques con amortiguadores entre cada bloque. Si un amortiguador falla, toda la estructura se afecta. | The spine is like a tower of blocks with shock absorbers between each block. If one absorber fails, the whole structure is affected.',
      ],
      examples: [
        'Un hombre de 35 años levanta una caja pesada y siente un dolor agudo en la espalda baja que baja a la pierna izquierda. | A 35-year-old man lifts a heavy box and feels sharp pain in his lower back radiating down his left leg.',
        'Una mujer de 45 años nota dolor en el cuello que baja al brazo derecho y le adormece los dedos al trabajar en la computadora. | A 45-year-old woman notices neck pain radiating to her right arm with finger numbness while working at the computer.',
        'Un estudiante de 28 años que pasa muchas horas sentado desarrolla dolor de espalda baja que empeora al estornudar. | A 28-year-old student who sits for many hours develops lower back pain that worsens when sneezing.',
      ],
      patientCounselingPoints: [
        'La buena noticia es que la mayoría de las hernias discales mejoran sin cirugía en 6 a 12 semanas. | The good news is that most herniated discs improve without surgery in 6 to 12 weeks.',
        'El reposo total en cama NO se recomienda. Mantenerse activo con moderación es mejor para la recuperación. | Total bed rest is NOT recommended. Staying moderately active is better for recovery.',
        'Si pierde el control de la orina o las evacuaciones, o siente adormecimiento en la zona genital, busque atención médica de emergencia inmediatamente. | If you lose control of urine or bowels, or feel numbness in the genital area, seek emergency medical care immediately.',
        'Los ejercicios que su fisioterapeuta le enseñe son fundamentales para prevenir que el problema regrese. | The exercises your physical therapist teaches you are essential to prevent the problem from returning.',
        'Mantener un peso saludable y buena postura reduce la presión sobre los discos. | Maintaining a healthy weight and good posture reduces pressure on the discs.',
      ],
    },

    2: {
      level: 2,
      summary:
        'La hernia discal resulta de la degeneración del anillo fibroso con protrusión del núcleo pulposo. La localización del dolor sigue patrones dermatomales según la raíz nerviosa comprimida. El diagnóstico es clínico y la resonancia magnética confirma. | Herniated disc results from annulus fibrosus degeneration with nucleus pulposus protrusion. Pain location follows dermatomal patterns based on the compressed nerve root. Diagnosis is clinical and MRI confirms.',
      explanation: `## Explicación

La hernia discal es uno de los diagnósticos más comunes en la consulta de ortopedia y neurocirugía. Comprender su anatomía y presentación clínica es fundamental.

**Anatomía del disco intervertebral:**
- **Anillo fibroso:** Capas concéntricas de fibrocartílago (como las capas de una cebolla). Resiste fuerzas de tensión y torsión.
- **Núcleo pulposo:** Gel proteoglicano con alto contenido de agua (80% en jóvenes). Soporta cargas de compresión.
- **Placas terminales cartilaginosas:** Interfaces entre el disco y las vértebras. Principal vía de nutrición del disco (difusión).
- El disco es avascular en su interior — depende de difusión para su nutrición

**Tipos de patología discal (clasificación por protrusión):**
1. **Abombamiento (bulging):** El disco se expande simétricamente más allá del borde vertebral (no es hernia propiamente)
2. **Protrusión:** La base de la hernia es más ancha que el cuello de salida
3. **Extrusión:** El material herniado tiene un cuello más estrecho que la base
4. **Secuestro:** Un fragmento libre se separa del disco de origen
5. **Migración:** El material herniado se desplaza hacia arriba o abajo del nivel de origen

**Dirección de la hernia:**
- **Posterolateral** (más común): Comprime la raíz nerviosa que sale por el foramen del nivel inferior
- **Foraminal:** Comprime la raíz nerviosa que sale al nivel de la hernia
- **Central:** Puede comprimir el saco tecal y múltiples raíces
- **Anterior:** Rara, generalmente asintomática

**Patrones dermatomales por nivel (columna lumbar):**

| Nivel | Raíz | Dolor/Adormecimiento | Debilidad | Reflejo |
|-------|-------|---------------------|-----------|---------|
| L3-L4 | L4 | Muslo anterior, rodilla | Extensión de rodilla (cuádriceps) | Patelar |
| L4-L5 | L5 | Pierna lateral, dorso del pie, dedo gordo | Dorsiflexión del pie y dedo gordo | — |
| L5-S1 | S1 | Pantorrilla posterior, planta del pie | Flexión plantar del pie | Aquíleo |

**Patrones dermatomales (columna cervical):**

| Nivel | Raíz | Dolor/Adormecimiento | Debilidad |
|-------|-------|---------------------|-----------|
| C4-C5 | C5 | Hombro, deltoides | Abducción del hombro, flexión del codo |
| C5-C6 | C6 | Antebrazo lateral, pulgar | Flexión del codo, extensión de muñeca |
| C6-C7 | C7 | Dedo medio | Extensión del codo, flexión de muñeca |
| C7-T1 | C8 | Dedos anular y meñique | Agarre fino, interóseos |

**Exploración física clave:**
- **Lasègue / Elevación de pierna recta (SLR):** Positivo si reproduce ciática entre 30-70°
- **Lasègue cruzado:** Elevación de pierna sana reproduce dolor en pierna afectada — muy específico
- **Prueba de Spurling (cervical):** Compresión axial con extensión y rotación reproduce radiculopatía
- **Examen motor, sensitivo y reflejos** según nivel sospechado
- **Marcha en talones (L5)** y **marcha en puntas (S1)** para valorar fuerza

**Estudios de imagen:**
- Radiografías simples: No muestran el disco directamente; útiles para excluir otras patologías
- **Resonancia magnética (RM):** Estudio de elección. Muestra disco, nervios, y tejidos blandos
- TAC: Alternativa si RM contraindicada
- Electromiografía (EMG): Útil para radiculopatía crónica o diagnóstico incierto

**Historia natural:**
- 80-90% de pacientes con hernia discal mejoran con tratamiento conservador
- La reabsorción espontánea del material herniado es frecuente (especialmente en extrusiones y secuestros)
- El dolor radicular mejora antes que el dolor de espalda baja

---
## Explanation

Herniated disc is one of the most common diagnoses in orthopedic and neurosurgical practice. Understanding its anatomy and clinical presentation is fundamental.

**Intervertebral disc anatomy:**
- **Annulus fibrosus:** Concentric layers of fibrocartilage (like the layers of an onion). Resists tensile and torsional forces.
- **Nucleus pulposus:** Proteoglycan gel with high water content (80% in young adults). Supports compressive loads.
- **Cartilaginous endplates:** Interfaces between disc and vertebrae. Main pathway for disc nutrition (diffusion).
- The disc interior is avascular — depends on diffusion for nutrition

**Types of disc pathology (protrusion classification):**
1. **Bulging:** The disc expands symmetrically beyond the vertebral margin (not a true herniation)
2. **Protrusion:** The base of the herniation is wider than the neck
3. **Extrusion:** The herniated material has a narrower neck than the base
4. **Sequestration:** A free fragment separates from the parent disc
5. **Migration:** The herniated material displaces above or below the level of origin

**Herniation direction:**
- **Posterolateral** (most common): Compresses the nerve root exiting at the level below
- **Foraminal:** Compresses the nerve root exiting at the herniation level
- **Central:** May compress the thecal sac and multiple roots
- **Anterior:** Rare, generally asymptomatic

**Dermatomal patterns by level (lumbar spine):**

| Level | Root | Pain/Numbness | Weakness | Reflex |
|-------|------|--------------|----------|--------|
| L3-L4 | L4 | Anterior thigh, knee | Knee extension (quadriceps) | Patellar |
| L4-L5 | L5 | Lateral leg, dorsum of foot, great toe | Foot and great toe dorsiflexion | — |
| L5-S1 | S1 | Posterior calf, sole of foot | Foot plantar flexion | Achilles |

**Dermatomal patterns (cervical spine):**

| Level | Root | Pain/Numbness | Weakness |
|-------|------|--------------|----------|
| C4-C5 | C5 | Shoulder, deltoid | Shoulder abduction, elbow flexion |
| C5-C6 | C6 | Lateral forearm, thumb | Elbow flexion, wrist extension |
| C6-C7 | C7 | Middle finger | Elbow extension, wrist flexion |
| C7-T1 | C8 | Ring and little fingers | Fine grip, interossei |

**Key physical examination:**
- **Lasegue / Straight leg raise (SLR):** Positive if reproduces sciatica between 30-70 degrees
- **Crossed Lasegue:** Raising healthy leg reproduces pain in affected leg — very specific
- **Spurling's test (cervical):** Axial compression with extension and rotation reproduces radiculopathy
- **Motor, sensory, and reflex examination** per suspected level
- **Heel walking (L5)** and **toe walking (S1)** to assess strength

**Imaging studies:**
- Plain radiographs: Do not directly show the disc; useful to exclude other pathologies
- **MRI:** Study of choice. Shows disc, nerves, and soft tissues
- CT: Alternative if MRI contraindicated
- Electromyography (EMG): Useful for chronic radiculopathy or uncertain diagnosis

**Natural history:**
- 80-90% of patients with herniated discs improve with conservative treatment
- Spontaneous resorption of herniated material is frequent (especially extrusions and sequestrations)
- Radicular pain improves before low back pain`,
      keyTerms: [
        {
          term: 'anillo fibroso',
          definition:
            'Capa externa dura del disco intervertebral formada por capas concéntricas de fibrocartílago | Tough outer layer of the intervertebral disc formed by concentric layers of fibrocartilage',
        },
        {
          term: 'núcleo pulposo',
          definition:
            'Centro gelatinoso del disco intervertebral con alto contenido de agua | Jelly-like center of the intervertebral disc with high water content',
        },
        {
          term: 'dermatoma',
          definition:
            'Área de piel inervada por una raíz nerviosa específica; permite localizar el nivel de la hernia | Area of skin innervated by a specific nerve root; allows localization of the herniation level',
        },
        {
          term: 'radiculopatía',
          definition:
            'Compromiso de una raíz nerviosa que causa dolor, adormecimiento o debilidad en el territorio de esa raíz | Nerve root compromise causing pain, numbness, or weakness in that root\'s territory',
        },
        {
          term: 'Lasègue (SLR)',
          definition:
            'Prueba diagnóstica: elevar la pierna recta reproduce el dolor ciático; indica irritación de raíz nerviosa | Diagnostic test: raising the straight leg reproduces sciatic pain; indicates nerve root irritation',
        },
        {
          term: 'extrusión discal',
          definition:
            'Hernia donde el material del núcleo sale a través del anillo con cuello más estrecho que la base | Herniation where nucleus material exits through the annulus with a neck narrower than the base',
        },
      ],
      analogies: [
        'Los niveles de hernia discal son como pisos de un edificio: cada piso controla un área diferente del cuerpo, y el daño en un piso afecta solo lo que está conectado a ese piso. | Disc herniation levels are like floors of a building — each floor controls a different area of the body, and damage on one floor affects only what is connected to that floor.',
        'Una extrusión discal es como pasta de dientes saliendo del tubo: una vez que sale, es difícil regresarla, pero el cuerpo puede reabsorberla con el tiempo. | A disc extrusion is like toothpaste coming out of a tube — once it comes out, it is hard to put back, but the body can reabsorb it over time.',
      ],
    },

    3: {
      level: 3,
      summary:
        'El manejo de la hernia discal combina historia natural favorable con tratamiento conservador estructurado. La cirugía está reservada para fracaso conservador o emergencia neurológica. Comprender la diferencia entre dolor discogénico y radicular es clave para las decisiones terapéuticas. | Herniated disc management combines favorable natural history with structured conservative treatment. Surgery is reserved for conservative failure or neurological emergency. Understanding the difference between discogenic and radicular pain is key to therapeutic decisions.',
      explanation: `## Explicación

El manejo clínico de la hernia discal requiere una comprensión integral de la fisiopatología del dolor y los algoritmos de tratamiento.

**Mecanismos del dolor en hernia discal:**

*Dolor radicular (radiculopatía):*
- Compresión mecánica directa de la raíz nerviosa
- Inflamación química: El núcleo pulposo contiene sustancias proinflamatorias (fosfolipasa A2, TNF-α, IL-1, IL-6)
- Isquemia de la raíz nerviosa por compromiso vascular
- Sensibilización del ganglio de la raíz dorsal
- La inflamación contribuye tanto o más que la compresión mecánica

*Dolor discogénico:*
- Dolor axial generado por el disco mismo (sin radiculopatía)
- Inervación del tercio externo del anillo fibroso (nervio sinuvertebral)
- Desgarros anulares con neovascularización y neoinnervación
- Más difícil de tratar que el dolor radicular
- No mejora con cirugía descompresiva

**Algoritmo de manejo conservador:**

*Fase aguda (0-6 semanas):*
- Educación del paciente: naturaleza autolimitada de la condición
- Actividad modificada (NO reposo en cama prolongado)
- AINEs: Primera línea farmacológica (ibuprofeno, naproxeno, celecoxib)
- Relajantes musculares: Uso corto para espasmo muscular
- Analgésicos: Paracetamol como adyuvante
- Opioides: Solo para dolor severo, uso mínimo y a corto plazo
- Gabapentinoides (pregabalina, gabapentina): Para dolor neuropático
- Terapia física temprana: McKenzie, estabilización lumbar

*Fase subaguda (6-12 semanas):*
- Terapia física intensiva: Fortalecimiento del core, flexibilidad
- Inyección epidural de corticosteroides: Vía interlaminar o transforaminal
- Puede repetirse hasta 3 veces en un año
- La inyección transforaminal es más dirigida y posiblemente más efectiva para dolor radicular
- Considerar referencia a especialista si no hay mejoría

*Fase crónica (>12 semanas):*
- Reevaluación diagnóstica (repetir imagen si hay cambio clínico)
- Programa multidisciplinario de dolor
- Duloxetina para dolor crónico
- Considerar cirugía si hay déficit neurológico progresivo o dolor refractario

**Inyecciones epidurales — detalle:**
- **Interlaminar:** Aguja entre láminas vertebrales, efecto más difuso
- **Transforaminal:** Aguja guiada al foramen, más selectiva
- **Caudal:** A través del hiato sacro, menos precisa pero más segura
- Todas bajo guía fluoroscópica o ultrasonido
- Eficacia: Alivio temporal del dolor radicular (semanas a meses), no modifica historia natural
- Riesgo: Infección, sangrado, punción dural, daño nervioso (raro)

**Indicaciones quirúrgicas:**

*Emergencia (cirugía en 24-48 horas):*
- Síndrome de cauda equina: Disfunción de esfínteres, anestesia en silla de montar, debilidad bilateral
- Déficit neurológico motor progresivo severo

*Relativa (cirugía electiva):*
- Fracaso de tratamiento conservador adecuado (>6-12 semanas)
- Dolor radicular incapacitante que no responde a tratamiento
- Déficit motor significativo persistente
- Correlación clínico-radiológica concordante

**Opciones quirúrgicas:**

*Microdiscectomía lumbar:*
- Estándar de oro para hernia discal lumbar
- Remoción del fragmento herniado con técnica mínimamente invasiva
- Excelentes resultados: 80-90% de alivio del dolor radicular
- Complicaciones: Recurrencia 5-10%, infección, fuga de LCR, daño nervioso
- Recuperación: 2-6 semanas

*Discectomía cervical anterior con fusión (ACDF):*
- Estándar para hernia discal cervical sintomática
- Remoción del disco completo y fusión del nivel
- Excelentes resultados para radiculopatía cervical
- Alternativa: Artroplastia cervical (disco artificial) — preserva movimiento

*Procedimientos endoscópicos:*
- Discectomía endoscópica transforaminal
- Menor invasión tisular
- Recuperación más rápida
- Curva de aprendizaje significativa

---
## Explanation

Clinical management of herniated disc requires comprehensive understanding of pain pathophysiology and treatment algorithms.

**Pain mechanisms in herniated disc:**

*Radicular pain (radiculopathy):*
- Direct mechanical compression of the nerve root
- Chemical inflammation: The nucleus pulposus contains pro-inflammatory substances (phospholipase A2, TNF-α, IL-1, IL-6)
- Nerve root ischemia from vascular compromise
- Dorsal root ganglion sensitization
- Inflammation contributes as much or more than mechanical compression

*Discogenic pain:*
- Axial pain generated by the disc itself (without radiculopathy)
- Innervation of the outer third of the annulus fibrosus (sinuvertebral nerve)
- Annular tears with neovascularization and neoinnervation
- More difficult to treat than radicular pain
- Does not improve with decompressive surgery

**Conservative management algorithm:**

*Acute phase (0-6 weeks):*
- Patient education: self-limited nature of the condition
- Modified activity (NOT prolonged bed rest)
- NSAIDs: First-line pharmacotherapy (ibuprofen, naproxen, celecoxib)
- Muscle relaxants: Short-term use for muscle spasm
- Analgesics: Acetaminophen as adjunct
- Opioids: Only for severe pain, minimal and short-term use
- Gabapentinoids (pregabalin, gabapentin): For neuropathic pain
- Early physical therapy: McKenzie, lumbar stabilization

*Subacute phase (6-12 weeks):*
- Intensive physical therapy: Core strengthening, flexibility
- Epidural corticosteroid injection: Interlaminar or transforaminal
- May be repeated up to 3 times per year
- Transforaminal injection is more targeted and possibly more effective for radicular pain
- Consider specialist referral if no improvement

*Chronic phase (>12 weeks):*
- Diagnostic reassessment (repeat imaging if clinical change)
- Multidisciplinary pain program
- Duloxetine for chronic pain
- Consider surgery if progressive neurological deficit or refractory pain

**Epidural injections — detail:**
- **Interlaminar:** Needle between vertebral laminae, more diffuse effect
- **Transforaminal:** Image-guided needle to foramen, more selective
- **Caudal:** Through sacral hiatus, less precise but safer
- All under fluoroscopic or ultrasound guidance
- Efficacy: Temporary radicular pain relief (weeks to months), does not modify natural history
- Risk: Infection, bleeding, dural puncture, nerve damage (rare)

**Surgical indications:**

*Emergency (surgery within 24-48 hours):*
- Cauda equina syndrome: Sphincter dysfunction, saddle anesthesia, bilateral weakness
- Progressive severe motor neurological deficit

*Relative (elective surgery):*
- Failure of adequate conservative treatment (>6-12 weeks)
- Incapacitating radicular pain not responding to treatment
- Significant persistent motor deficit
- Concordant clinical-radiological correlation

**Surgical options:**

*Lumbar microdiscectomy:*
- Gold standard for lumbar disc herniation
- Removal of herniated fragment with minimally invasive technique
- Excellent results: 80-90% radicular pain relief
- Complications: Recurrence 5-10%, infection, CSF leak, nerve damage
- Recovery: 2-6 weeks

*Anterior cervical discectomy and fusion (ACDF):*
- Standard for symptomatic cervical disc herniation
- Complete disc removal and level fusion
- Excellent results for cervical radiculopathy
- Alternative: Cervical arthroplasty (artificial disc) — preserves motion

*Endoscopic procedures:*
- Transforaminal endoscopic discectomy
- Less tissue invasion
- Faster recovery
- Significant learning curve`,
      keyTerms: [
        {
          term: 'dolor discogénico',
          definition:
            'Dolor axial generado por el disco mismo sin compresión radicular; causado por desgarros anulares con neoinnervación | Axial pain generated by the disc itself without radicular compression; caused by annular tears with neoinnervation',
        },
        {
          term: 'inyección epidural transforaminal',
          definition:
            'Inyección de corticosteroide dirigida al foramen neural bajo guía de imagen; más selectiva que la interlaminar | Targeted corticosteroid injection to the neural foramen under image guidance; more selective than interlaminar',
        },
        {
          term: 'microdiscectomía',
          definition:
            'Cirugía mínimamente invasiva que remueve el fragmento de disco herniado que comprime el nervio; estándar de oro para hernia lumbar | Minimally invasive surgery removing the herniated disc fragment compressing the nerve; gold standard for lumbar herniation',
        },
        {
          term: 'síndrome de cauda equina',
          definition:
            'Emergencia quirúrgica por compresión de las raíces nerviosas de la cauda equina; causa disfunción vesical, anestesia en silla de montar y debilidad bilateral | Surgical emergency from compression of cauda equina nerve roots; causes bladder dysfunction, saddle anesthesia, and bilateral weakness',
        },
        {
          term: 'McKenzie',
          definition:
            'Método de evaluación y tratamiento fisioterapéutico basado en movimientos direccionales para centralizar y reducir el dolor espinal | Physical therapy assessment and treatment method based on directional movements to centralize and reduce spinal pain',
        },
        {
          term: 'ACDF',
          definition:
            'Discectomía cervical anterior con fusión; cirugía estándar para hernia discal cervical que remueve el disco y fusiona las vértebras adyacentes | Anterior cervical discectomy and fusion; standard surgery for cervical disc herniation that removes the disc and fuses adjacent vertebrae',
        },
      ],
      clinicalNotes:
        'El síndrome de cauda equina es la emergencia quirúrgica espinal más importante. Descompresión dentro de 48 horas mejora el pronóstico de recuperación neurológica. Preguntar SIEMPRE sobre función vesical/intestinal y anestesia en silla de montar en todo paciente con dolor lumbar radicular. La RM de urgencia es mandatoria ante sospecha. | Cauda equina syndrome is the most important spinal surgical emergency. Decompression within 48 hours improves neurological recovery prognosis. ALWAYS ask about bladder/bowel function and saddle anesthesia in every patient with lumbar radicular pain. Urgent MRI is mandatory when suspected.',
    },

    4: {
      level: 4,
      summary:
        'La patología discal involucra procesos degenerativos complejos influenciados por factores genéticos, mecánicos y bioquímicos. Las técnicas quirúrgicas avanzadas, la preservación de movimiento y las terapias biológicas están redefiniendo el tratamiento. | Disc pathology involves complex degenerative processes influenced by genetic, mechanical, and biochemical factors. Advanced surgical techniques, motion preservation, and biological therapies are redefining treatment.',
      explanation: `## Explicación

La comprensión avanzada de la patología discal integra biología molecular, biomecánica espinal y tecnología quirúrgica.

**Degeneración discal — mecanismos moleculares:**

*Cambios bioquímicos:*
- Disminución de proteoglicanos (especialmente agrecano) → pérdida de hidratación
- Cambio de colágeno tipo II a tipo I en el núcleo → pérdida de elasticidad
- Aumento de enzimas degradativas: MMPs (1, 3, 7, 13), ADAMTS (4, 5)
- Acumulación de productos de glicación avanzada (AGEs)
- Disminución de factores de crecimiento anabólicos (TGF-β, IGF-1)

*Cambios celulares:*
- Disminución de densidad celular (especialmente en el núcleo)
- Senescencia celular y apoptosis de condrocitos tipo II del núcleo
- Cambio fenotípico: condrocitos → fibroblastos
- Penetración de vasos sanguíneos y nervios en el disco degenerado
- Células inflamatorias infiltrantes producen citoquinas

*Factores genéticos:*
- Genes de colágeno (COL9A2, COL9A3, COL11A1): Variantes asociadas con degeneración
- ADAMTS5: Polimorfismos asociados con susceptibilidad
- GDF5, SMAD3: Relacionados con artrosis y degeneración discal
- VDR (receptor de vitamina D): Asociado con degeneración discal
- Heredabilidad estimada de 47-74% para degeneración discal lumbar

**Biomecánica espinal y la hernia:**

*Segmento funcional espinal:*
- Dos vértebras adyacentes, el disco, las articulaciones facetarias y los ligamentos forman un "segmento funcional"
- La degeneración de un componente afecta a todos los demás
- El disco soporta 80% de la carga axial en posición neutra
- La presión intradiscal aumenta: sentado > de pie > acostado

*Cascada degenerativa de Kirkaldy-Willis:*
1. **Disfunción:** Desgarros anulares, sinovitis facetaria, inestabilidad segmentaria
2. **Inestabilidad:** Subluxación facetaria, espondilolistesis degenerativa
3. **Estabilización:** Osteofitos, estenosis, anquilosis

*Concepto de enfermedad del segmento adyacente:*
- La fusión espinal altera la biomecánica de los niveles vecinos
- Niveles adyacentes soportan más carga y movimiento
- Degeneración acelerada: 2-4% por año requiere cirugía adicional
- Debate: ¿Progresión natural vs. consecuencia iatrogénica?

**Técnicas quirúrgicas avanzadas:**

*Preservación de movimiento lumbar:*
- Artroplastia de disco lumbar (ProDisc, Activ-L): Preserva movimiento segmentario
- Indicaciones restringidas: Hernia o degeneración de un nivel, sin inestabilidad, sin artropatía facetaria significativa
- Resultados a 5-10 años: No inferioridad respecto a fusión
- Estabilización dinámica posterior (dispositivos no rígidos): Resultados inconsistentes

*Preservación de movimiento cervical:*
- Artroplastia cervical (Mobi-C, Prestige): Alternativa establecida a ACDF
- Reduce enfermedad del segmento adyacente (evidencia a 10 años)
- Contraindicaciones: Inestabilidad, artropatía facetaria, osteoporosis
- Aprobada para uno y dos niveles

*Técnicas mínimamente invasivas:*
- Discectomía endoscópica completa (uniportal, biportal)
- Discectomía tubular microendoscópica (METRx)
- Ablación con láser (discectomía láser percutánea): Indicaciones limitadas
- Nucleoplastia/coblation: Resultados modestos para protrusiones contenidas

*Fusión espinal mínimamente invasiva:*
- TLIF: Fusión intersomática transforaminal lumbar
- LLIF/XLIF: Fusión intersomática lateral
- OLIF: Fusión intersomática oblicua
- Fijación percutánea con tornillos pediculares
- Navegación y robótica para colocación de tornillos

**Diagnóstico avanzado:**

*RM cuantitativa:*
- T2 mapping: Evalúa contenido de agua del disco
- Pfirrmann grading: Clasificación visual de degeneración discal en RM (grados I-V)
- Modic changes: Cambios en la placa terminal y médula ósea
  - Tipo 1: Edema (inflamatorio, más sintomático)
  - Tipo 2: Grasa (degenerativo)
  - Tipo 3: Esclerosis

*Discografía provocativa:*
- Reproducción del dolor concordante al inyectar el disco sospechoso
- Altamente controversial: Valor diagnóstico vs. aceleración de degeneración
- Uso disminuyendo en favor de RM y bloqueos diagnósticos

---
## Explanation

Advanced understanding of disc pathology integrates molecular biology, spinal biomechanics, and surgical technology.

**Disc degeneration — molecular mechanisms:**

*Biochemical changes:*
- Decreased proteoglycans (especially aggrecan) → loss of hydration
- Shift from type II to type I collagen in the nucleus → loss of elasticity
- Increased degradative enzymes: MMPs (1, 3, 7, 13), ADAMTS (4, 5)
- Accumulation of advanced glycation end products (AGEs)
- Decreased anabolic growth factors (TGF-β, IGF-1)

*Cellular changes:*
- Decreased cell density (especially in the nucleus)
- Cellular senescence and apoptosis of nucleus type II chondrocytes
- Phenotypic shift: chondrocytes → fibroblasts
- Penetration of blood vessels and nerves into the degenerated disc
- Infiltrating inflammatory cells produce cytokines

*Genetic factors:*
- Collagen genes (COL9A2, COL9A3, COL11A1): Variants associated with degeneration
- ADAMTS5: Polymorphisms associated with susceptibility
- GDF5, SMAD3: Related to osteoarthritis and disc degeneration
- VDR (vitamin D receptor): Associated with disc degeneration
- Estimated heritability of 47-74% for lumbar disc degeneration

**Spinal biomechanics and herniation:**

*Functional spinal segment:*
- Two adjacent vertebrae, the disc, facet joints, and ligaments form a "functional segment"
- Degeneration of one component affects all others
- The disc bears 80% of axial load in neutral position
- Intradiscal pressure increases: sitting > standing > supine

*Kirkaldy-Willis degenerative cascade:*
1. **Dysfunction:** Annular tears, facet synovitis, segmental instability
2. **Instability:** Facet subluxation, degenerative spondylolisthesis
3. **Stabilization:** Osteophytes, stenosis, ankylosis

*Adjacent segment disease concept:*
- Spinal fusion alters biomechanics of neighboring levels
- Adjacent levels bear more load and motion
- Accelerated degeneration: 2-4% per year requires additional surgery
- Debate: Natural progression vs. iatrogenic consequence?

**Advanced surgical techniques:**

*Lumbar motion preservation:*
- Lumbar disc arthroplasty (ProDisc, Activ-L): Preserves segmental motion
- Restricted indications: Single-level herniation or degeneration, no instability, no significant facet arthropathy
- 5-10 year results: Non-inferiority compared to fusion
- Dynamic posterior stabilization (non-rigid devices): Inconsistent results

*Cervical motion preservation:*
- Cervical arthroplasty (Mobi-C, Prestige): Established alternative to ACDF
- Reduces adjacent segment disease (10-year evidence)
- Contraindications: Instability, facet arthropathy, osteoporosis
- Approved for one and two levels

*Minimally invasive techniques:*
- Full endoscopic discectomy (uniportal, biportal)
- Microendoscopic tubular discectomy (METRx)
- Laser ablation (percutaneous laser discectomy): Limited indications
- Nucleoplasty/coblation: Modest results for contained protrusions

*Minimally invasive spinal fusion:*
- TLIF: Transforaminal lumbar interbody fusion
- LLIF/XLIF: Lateral lumbar interbody fusion
- OLIF: Oblique lumbar interbody fusion
- Percutaneous pedicle screw fixation
- Navigation and robotics for screw placement

**Advanced diagnostics:**

*Quantitative MRI:*
- T2 mapping: Evaluates disc water content
- Pfirrmann grading: Visual classification of disc degeneration on MRI (grades I-V)
- Modic changes: Endplate and bone marrow changes
  - Type 1: Edema (inflammatory, more symptomatic)
  - Type 2: Fat (degenerative)
  - Type 3: Sclerosis

*Provocative discography:*
- Reproduction of concordant pain when injecting the suspected disc
- Highly controversial: Diagnostic value vs. acceleration of degeneration
- Decreasing use in favor of MRI and diagnostic blocks`,
      keyTerms: [
        {
          term: 'cascada degenerativa de Kirkaldy-Willis',
          definition:
            'Modelo de tres fases de degeneración espinal: disfunción → inestabilidad → estabilización | Three-phase model of spinal degeneration: dysfunction → instability → stabilization',
        },
        {
          term: 'enfermedad del segmento adyacente',
          definition:
            'Degeneración acelerada de niveles espinales vecinos a una fusión; 2-4% anual requiere cirugía adicional | Accelerated degeneration of spinal levels adjacent to a fusion; 2-4% annually requires additional surgery',
        },
        {
          term: 'cambios de Modic',
          definition:
            'Cambios de señal de RM en placas terminales vertebrales; Tipo 1 (edema/inflamatorio), Tipo 2 (grasa), Tipo 3 (esclerosis) | MRI signal changes in vertebral endplates; Type 1 (edema/inflammatory), Type 2 (fatty), Type 3 (sclerotic)',
        },
        {
          term: 'artroplastia cervical',
          definition:
            'Disco artificial cervical que reemplaza el disco herniado preservando el movimiento segmentario | Cervical artificial disc replacing the herniated disc while preserving segmental motion',
        },
        {
          term: 'Pfirrmann',
          definition:
            'Clasificación de degeneración discal en RM de grado I (normal) a V (disco colapsado, sin señal); guía decisiones terapéuticas | MRI disc degeneration classification from grade I (normal) to V (collapsed disc, no signal); guides therapeutic decisions',
        },
        {
          term: 'TLIF',
          definition:
            'Fusión intersomática transforaminal lumbar; técnica de fusión que accede al espacio discal a través del foramen neural | Transforaminal lumbar interbody fusion; fusion technique accessing the disc space through the neural foramen',
        },
      ],
      clinicalNotes:
        'Los cambios de Modic tipo 1 se asocian con mayor dolor lumbar y pueden predecir respuesta a fusión espinal. La artroplastia cervical tiene evidencia nivel 1 de no inferioridad y posible superioridad respecto a ACDF a 10 años, particularmente en reducción de reoperaciones del segmento adyacente. La navegación robótica mejora la precisión de colocación de tornillos pediculares pero aún no demuestra beneficio clínico consistente en resultados a largo plazo. | Modic type 1 changes are associated with greater low back pain and may predict response to spinal fusion. Cervical arthroplasty has level 1 evidence of non-inferiority and possible superiority over ACDF at 10 years, particularly in reducing adjacent segment reoperations. Robotic navigation improves pedicle screw placement accuracy but has not yet demonstrated consistent clinical benefit in long-term outcomes.',
    },

    5: {
      level: 5,
      summary:
        'La investigación contemporánea en patología discal se centra en terapia regenerativa del disco, medicina de precisión espinal, biomarcadores moleculares de dolor, y estrategias de prevención basadas en comprensión del mecanobioma. La inteligencia artificial está transformando el diagnóstico y la planificación quirúrgica. | Contemporary research in disc pathology focuses on disc regenerative therapy, spinal precision medicine, molecular pain biomarkers, and prevention strategies based on mechanobiome understanding. Artificial intelligence is transforming diagnosis and surgical planning.',
      explanation: `## Explicación

Las fronteras de investigación en patología discal están convergiendo desde múltiples disciplinas hacia terapias regenerativas y medicina personalizada.

**Terapia regenerativa del disco intervertebral:**

*Terapia celular:*
- Inyección intradiscal de MSCs: Ensayos fase 2/3 muestran mejoras en dolor y señal de disco en RM
- Condrocitos del núcleo pulposo (NP cells): Expandidos in vitro y reimplantados
- Células madre pluripotentes inducidas (iPSCs): Diferenciación dirigida a fenotipo de NP
- Desafío: Ambiente intradiscal hostil (hipoxia, pH bajo, alta presión osmótica, deficiencia nutricional) limita supervivencia celular
- Preacondicionamiento celular: Cultura en hipoxia y baja glucosa para mejorar adaptación

*Ingeniería de tejidos del disco:*
- Hidrogeles biomiméticos para reemplazo del núcleo pulposo (HA-colágeno, PEG-based)
- Andamios de anillo fibroso (electrospinning de nanofibras orientadas)
- Disco de ingeniería tisular completo (núcleo + anillo): Investigación avanzada en modelos animales grandes
- Bioimpresión 3D del disco: Deposición espacialmente controlada de células y materiales
- Matrisonas: Vesículas extracelulares que transportan componentes de matriz como señales de reparación

*Terapia génica intradiscal:*
- Vectores adenoasociados (AAV) para entrega de TGF-β, GDF-5, SOX-9
- Silenciamiento de genes catabólicos (siRNA contra MMP-13, ADAMTS-5)
- Terapia con microRNA para modular fenotipo celular
- CRISPR/Cas9 para edición genética de condrocitos discales: Preclínico
- Desafío: Entrega sostenida sin inmunogenicidad

**Biología molecular del dolor discogénico:**

*Neurotrofinas y nociceptores discales:*
- NGF (factor de crecimiento nervioso): Clave en dolor discogénico, promueve crecimiento axonal en disco degenerado
- BDNF: Sensibiliza nociceptores periféricos en anillo fibroso
- Canales TRP (TRPV1, TRPA1): Transducen señales mecánicas y químicas de dolor
- Sustancia P y CGRP: Marcadores de inervación nociceptiva en discos degenerados
- Prostaglandina E2 (PGE2): Principal mediador inflamatorio intradiscal

*Sensibilización central:*
- Dolor crónico discal induce cambios en procesamiento central
- Reorganización cortical en dolor lumbar crónico (atrofia de corteza prefrontal)
- Glía activada en médula espinal amplifica señales de dolor
- Implicaciones terapéuticas: Necesidad de abordar componente central, no solo periférico

**Biomarcadores para decisiones clínicas:**
- CTX-II, COMP: Degradación de cartílago/disco
- Citoquinas en líquido sinovial facetario: Predicen respuesta a bloqueos
- Marcadores genéticos de susceptibilidad a degeneración
- Perfil de micro-RNA sérico como biomarcador de dolor discogénico
- Metabolómica del disco: Identificación de fenotipos degenerativos distintos

**Inteligencia artificial en patología espinal:**

*Diagnóstico automatizado:*
- Detección automática de hernias y clasificación de Pfirrmann en RM (redes neuronales convolucionales)
- Predicción de progresión radiográfica
- Correlación automatizada imagen-síntomas para mejorar concordancia clínico-radiológica
- Precisión diagnóstica >90% en estudios de validación

*Planificación quirúrgica:*
- Predicción de resultados quirúrgicos personalizados basados en datos del paciente
- Modelos de elementos finitos paciente-específicos para selección de implantes
- Navegación intraoperatoria con realidad aumentada
- Algoritmos de decisión cirugía vs. conservador basados en machine learning

*Rehabilitación:*
- Wearables con sensores de movimiento para monitorizar recuperación
- Programas de rehabilitación adaptativos basados en datos en tiempo real
- Telemedicina y telerrehabilitación espinal

**Microbioma y patología discal (concepto emergente):**
- Infección de bajo grado por Cutibacterium acnes (antes Propionibacterium)
- Se encuentra en hasta 40% de discos herniados quirúrgicamente removidos
- Cambios de Modic tipo 1 pueden representar infección subclínica
- MAST trial: Antibióticos (amoxicilina/clavulánico) mejoraron dolor lumbar con Modic tipo 1
- Resultados controvertidos: Necesidad de replicación independiente
- Hipótesis: El disco herniado se contamina durante la extrusión vs. infección primaria

**Controversias actuales en columna:**
- Cirugía temprana vs. conservadora para hernia discal: El estudio SPORT mostró que ambos convergen a 4-8 años, pero la cirugía ofrece alivio más rápido
- Fusión vs. tratamiento multidisciplinario para dolor discogénico crónico: Resultados similares a largo plazo
- Inyecciones epidurales de esteroides: ¿Modifican el curso natural o solo retrasan la cirugía?
- Opioides para dolor lumbar crónico: Evidencia clara de daño > beneficio en uso prolongado
- Papel de la cirugía bariátrica como tratamiento de dolor lumbar en obesos mórbidos
- Enfermedad del segmento adyacente: ¿Prevención con artroplastia o consecuencia inevitable?

**Direcciones futuras:**
- Disco intervertebral completamente bio-artificial implantable
- Terapia génica combinada con ingeniería tisular
- Detección temprana pre-sintomática con biomarcadores séricos
- Prevención primaria basada en perfil genético
- Integración de datos ómicos para medicina espinal de precisión

---
## Explanation

Research frontiers in disc pathology are converging from multiple disciplines toward regenerative therapies and personalized medicine.

**Intervertebral disc regenerative therapy:**

*Cell therapy:*
- Intradiscal MSC injection: Phase 2/3 trials show improvements in pain and disc signal on MRI
- Nucleus pulposus (NP) cells: Expanded in vitro and reimplanted
- Induced pluripotent stem cells (iPSCs): Directed differentiation to NP phenotype
- Challenge: Hostile intradiscal environment (hypoxia, low pH, high osmotic pressure, nutritional deficiency) limits cell survival
- Cell preconditioning: Culture in hypoxia and low glucose to improve adaptation

*Disc tissue engineering:*
- Biomimetic hydrogels for nucleus pulposus replacement (HA-collagen, PEG-based)
- Annulus fibrosus scaffolds (electrospinning of oriented nanofibers)
- Complete tissue-engineered disc (nucleus + annulus): Advanced research in large animal models
- 3D bioprinting of the disc: Spatially controlled deposition of cells and materials
- Matrisomes: Extracellular vesicles carrying matrix components as repair signals

*Intradiscal gene therapy:*
- Adeno-associated virus (AAV) vectors for TGF-β, GDF-5, SOX-9 delivery
- Catabolic gene silencing (siRNA against MMP-13, ADAMTS-5)
- MicroRNA therapy to modulate cell phenotype
- CRISPR/Cas9 for disc chondrocyte genetic editing: Preclinical
- Challenge: Sustained delivery without immunogenicity

**Molecular biology of discogenic pain:**

*Neurotrophins and disc nociceptors:*
- NGF: Key in discogenic pain, promotes axonal growth into degenerated disc
- BDNF: Sensitizes peripheral nociceptors in annulus fibrosus
- TRP channels (TRPV1, TRPA1): Transduce mechanical and chemical pain signals
- Substance P and CGRP: Markers of nociceptive innervation in degenerated discs
- Prostaglandin E2 (PGE2): Main intradiscal inflammatory mediator

*Central sensitization:*
- Chronic disc pain induces central processing changes
- Cortical reorganization in chronic low back pain (prefrontal cortex atrophy)
- Activated glia in spinal cord amplifies pain signals
- Therapeutic implications: Need to address central component, not just peripheral

**Biomarkers for clinical decisions:**
- CTX-II, COMP: Cartilage/disc degradation
- Cytokines in facet synovial fluid: Predict response to blocks
- Genetic markers of degeneration susceptibility
- Serum micro-RNA profile as discogenic pain biomarker
- Disc metabolomics: Identification of distinct degenerative phenotypes

**Artificial intelligence in spinal pathology:**

*Automated diagnosis:*
- Automatic herniation detection and Pfirrmann classification on MRI (convolutional neural networks)
- Radiographic progression prediction
- Automated image-symptom correlation to improve clinical-radiological concordance
- Diagnostic accuracy >90% in validation studies

*Surgical planning:*
- Personalized surgical outcome prediction based on patient data
- Patient-specific finite element models for implant selection
- Intraoperative augmented reality navigation
- Surgery vs. conservative decision algorithms based on machine learning

*Rehabilitation:*
- Wearables with motion sensors for recovery monitoring
- Adaptive rehabilitation programs based on real-time data
- Telemedicine and spinal telerehabilitation

**Microbiome and disc pathology (emerging concept):**
- Low-grade infection by Cutibacterium acnes (formerly Propionibacterium)
- Found in up to 40% of surgically removed herniated discs
- Modic type 1 changes may represent subclinical infection
- MAST trial: Antibiotics (amoxicillin/clavulanic acid) improved low back pain with Modic type 1
- Controversial results: Need for independent replication
- Hypothesis: Herniated disc becomes contaminated during extrusion vs. primary infection

**Current controversies in spine:**
- Early surgery vs. conservative for disc herniation: SPORT study showed both converge at 4-8 years, but surgery provides faster relief
- Fusion vs. multidisciplinary treatment for chronic discogenic pain: Similar long-term outcomes
- Epidural steroid injections: Do they modify natural course or only delay surgery?
- Opioids for chronic low back pain: Clear evidence of harm > benefit with prolonged use
- Role of bariatric surgery as treatment for low back pain in morbidly obese
- Adjacent segment disease: Prevention with arthroplasty or inevitable consequence?

**Future directions:**
- Fully bio-artificial implantable intervertebral disc
- Gene therapy combined with tissue engineering
- Early pre-symptomatic detection with serum biomarkers
- Primary prevention based on genetic profile
- Integration of omics data for precision spinal medicine`,
      keyTerms: [
        {
          term: 'Cutibacterium acnes',
          definition:
            'Bacteria anaerobia de baja virulencia encontrada en discos herniados; posible papel en dolor discogénico y cambios de Modic tipo 1 | Low-virulence anaerobic bacterium found in herniated discs; possible role in discogenic pain and Modic type 1 changes',
        },
        {
          term: 'células madre pluripotentes inducidas (iPSCs)',
          definition:
            'Células reprogramadas a estado pluripotente que pueden diferenciarse en células del núcleo pulposo para regeneración discal | Cells reprogrammed to pluripotent state that can differentiate into nucleus pulposus cells for disc regeneration',
        },
        {
          term: 'hidrogel biomimético',
          definition:
            'Material sintético que imita las propiedades mecánicas e hidratación del núcleo pulposo nativo | Synthetic material mimicking the mechanical properties and hydration of native nucleus pulposus',
        },
        {
          term: 'electrospinning',
          definition:
            'Técnica de fabricación de nanofibras orientadas para crear andamios que imitan la estructura laminar del anillo fibroso | Oriented nanofiber fabrication technique to create scaffolds mimicking the lamellar structure of the annulus fibrosus',
        },
        {
          term: 'SPORT (Spine Patient Outcomes Research Trial)',
          definition:
            'Ensayo multicéntrico de referencia que comparó cirugía vs. tratamiento conservador para hernia discal, estenosis y espondilolistesis | Landmark multicenter trial comparing surgery vs. conservative treatment for disc herniation, stenosis, and spondylolisthesis',
        },
        {
          term: 'modelo de elementos finitos',
          definition:
            'Simulación computacional que modela el comportamiento mecánico de la columna para predecir efectos de implantes y cirugía | Computational simulation modeling spinal mechanical behavior to predict effects of implants and surgery',
        },
      ],
      clinicalNotes:
        'El campo de la regeneración discal está en transición de investigación básica a ensayos clínicos tempranos. Para el clínico actual, las decisiones deben basarse en la historia natural favorable (80-90% mejoran sin cirugía), la evidencia del SPORT trial (cirugía ofrece alivio más rápido pero los resultados convergen a largo plazo), y la importancia de identificar banderas rojas (cauda equina). La RM cuantitativa con Modic y Pfirrmann grading puede ayudar a estratificar pacientes. Los opioides deben evitarse para dolor lumbar crónico no oncológico — la evidencia de daño es clara. | The disc regeneration field is transitioning from basic research to early clinical trials. For the current clinician, decisions should be based on favorable natural history (80-90% improve without surgery), SPORT trial evidence (surgery provides faster relief but outcomes converge long-term), and the importance of identifying red flags (cauda equina). Quantitative MRI with Modic and Pfirrmann grading can help stratify patients. Opioids should be avoided for chronic non-cancer low back pain — evidence of harm is clear.',
    },
  },

  media: [],
  citations: [
    {
      id: 'ref-hernia-1',
      type: 'textbook',
      title: 'Rothman-Simeone The Spine',
      authors: ['Herkowitz, H.N.', 'Garfin, S.R.', 'Eismont, F.J.'],
      source: 'Elsevier',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-hernia-2',
      type: 'article',
      title: 'Surgical vs Nonoperative Treatment for Lumbar Disk Herniation: The Spine Patient Outcomes Research Trial (SPORT)',
      authors: ['Weinstein, J.N.', 'Tosteson, T.D.', 'Lurie, J.D.'],
      source: 'JAMA',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-hernia-3',
      type: 'article',
      title: 'Diagnosis and treatment of lumbar disc herniation with radiculopathy',
      authors: ['Kreiner, D.S.', 'Hwang, S.W.', 'Easa, J.E.'],
      source: 'North American Spine Society Evidence-Based Clinical Guidelines',
      license: 'CC BY 4.0',
    },
  ],
  crossReferences: [
    {
      targetId: 'ortho-patient-back-pain',
      targetType: 'condition',
      relationship: 'related',
      label: 'Dolor de Espalda / Back Pain',
    },
    {
      targetId: 'ortho-patient-sciatica',
      targetType: 'condition',
      relationship: 'related',
      label: 'Ciática / Sciatica',
    },
    {
      targetId: 'ortho-patient-spinal-stenosis',
      targetType: 'condition',
      relationship: 'related',
      label: 'Estenosis Espinal / Spinal Stenosis',
    },
    {
      targetId: 'ortho-patient-spine-surgery-decision',
      targetType: 'concept',
      relationship: 'related',
      label: 'Decisión de Cirugía Espinal / Spine Surgery Decision',
    },
  ],
  tags: {
    systems: ['musculoskeletal', 'nervous'],
    topics: ['orthopedics', 'spine', 'neurosurgery', 'pain management'],
    keywords: [
      'hernia discal',
      'disco herniado',
      'ciática',
      'radiculopatía',
      'columna vertebral',
      'microdiscectomía',
      'herniated disc',
      'slipped disc',
      'sciatica',
      'radiculopathy',
      'spine',
      'microdiscectomy',
    ],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-02-05',
  updatedAt: '2026-02-05',
  version: 1,
  status: 'published',
  contributors: ['SOMA AI Content Team'],
};

export default herniaDiscalContent;
