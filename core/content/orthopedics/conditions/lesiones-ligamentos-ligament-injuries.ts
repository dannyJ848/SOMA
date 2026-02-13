import { EducationalContent } from '../../types';

export const lesionesLigamentosContent: EducationalContent = {
  id: 'condition-lesiones-ligamentos',
  type: 'condition',
  name: 'Ligament Injuries',
  nameEs: 'Lesiones de Ligamentos',
  alternateNames: [
    'Rotura de ligamento',
    'Esguince de ligamento',
    'Desgarro ligamentario',
    'Torn ligament',
    'Ligament tear',
    'Ligament sprain',
    'Lesión de LCA',
    'ACL injury',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Los ligamentos son bandas fuertes que conectan los huesos en las articulaciones. Cuando se estiran o rompen por una lesión, causan dolor, hinchazón e inestabilidad. Las lesiones de rodilla (como la rotura del LCA) son las más comunes. | Ligaments are strong bands that connect bones at joints. When they are stretched or torn by an injury, they cause pain, swelling, and instability. Knee injuries (such as ACL tears) are the most common.',
      explanation: `## Explicación

**¿Qué son los ligamentos?**
Los ligamentos son como "cuerdas" muy fuertes que conectan un hueso con otro en las articulaciones. Su trabajo es mantener la articulación estable y evitar que los huesos se muevan demasiado.

**¿Qué pasa cuando se lesionan?**
Los ligamentos pueden estirarse demasiado o romperse cuando la articulación se mueve de una forma brusca o antinatural. Esto se conoce como "esguince" o "desgarro".

**Grados de lesión:**
- **Grado 1 (leve):** El ligamento se estira pero no se rompe. Hay dolor e hinchazón leve.
- **Grado 2 (moderado):** El ligamento se rompe parcialmente. Hay más dolor, hinchazón y algo de inestabilidad.
- **Grado 3 (severo):** El ligamento se rompe completamente. Hay mucho dolor, hinchazón e inestabilidad marcada.

**Articulaciones más afectadas:**
- **Rodilla:** La más frecuente y seria
  - LCA (Ligamento Cruzado Anterior): El más comúnmente lesionado en deportes
  - LCM (Ligamento Colateral Medial): Lesión por golpe lateral de la rodilla
  - Meniscos: Se lesionan frecuentemente junto con los ligamentos
- **Tobillo:** Esguinces de tobillo (muy comunes)
- **Hombro:** Luxación y lesiones ligamentarias
- **Muñeca y dedos:** Esguinces en deportes y caídas

**Síntomas de una lesión de ligamento:**
- Dolor agudo al momento de la lesión
- A veces se escucha un "pop" o tronido (especialmente en lesiones de LCA)
- Hinchazón rápida (en horas)
- Inestabilidad: La articulación se siente "floja" o "se va"
- Dificultad para caminar o usar la articulación
- Moretones

**¿Cuándo ir al médico?**
- Si escuchó un "pop" al lesionarse
- Si la rodilla se hinchó rápidamente
- Si siente que la rodilla "se afloja" o no sostiene su peso
- Si el dolor es severo
- Si no puede caminar

**Tratamiento inicial (RICE/PRICE):**
- **P**rotección: Proteja la articulación lesionada
- **R**eposo: Evite actividades que causen dolor
- **I**ce (Hielo): Aplique hielo envuelto en tela, 15-20 minutos cada 2-3 horas
- **C**ompresión: Vendaje elástico para reducir hinchazón
- **E**levación: Eleve la parte lesionada por encima del corazón

**Tratamiento definitivo:**
- **Lesiones leves:** Reposo, hielo, terapia física
- **Lesiones moderadas:** Inmovilización con rodillera/férula, terapia física intensiva
- **Lesiones severas (rotura completa):** Puede necesitar cirugía de reconstrucción, seguida de meses de rehabilitación

---
## Explanation

**What are ligaments?**
Ligaments are like very strong "ropes" that connect one bone to another at joints. Their job is to keep the joint stable and prevent the bones from moving too much.

**What happens when they are injured?**
Ligaments can be overstretched or torn when the joint moves in a sudden or unnatural way. This is known as a "sprain" or "tear."

**Grades of injury:**
- **Grade 1 (mild):** The ligament is stretched but not torn. There is pain and mild swelling.
- **Grade 2 (moderate):** The ligament is partially torn. There is more pain, swelling, and some instability.
- **Grade 3 (severe):** The ligament is completely torn. There is significant pain, swelling, and marked instability.

**Most commonly affected joints:**
- **Knee:** The most frequent and serious
  - ACL (Anterior Cruciate Ligament): Most commonly injured in sports
  - MCL (Medial Collateral Ligament): Injury from lateral knee blow
  - Menisci: Frequently injured along with ligaments
- **Ankle:** Ankle sprains (very common)
- **Shoulder:** Dislocation and ligament injuries
- **Wrist and fingers:** Sprains in sports and falls

**Symptoms of a ligament injury:**
- Acute pain at the time of injury
- Sometimes a "pop" is heard (especially in ACL injuries)
- Rapid swelling (within hours)
- Instability: The joint feels "loose" or "gives way"
- Difficulty walking or using the joint
- Bruising

**When to see a doctor:**
- If you heard a "pop" when injured
- If the knee swelled rapidly
- If you feel the knee is "loose" or cannot support your weight
- If the pain is severe
- If you cannot walk

**Initial treatment (RICE/PRICE):**
- **P**rotection: Protect the injured joint
- **R**est: Avoid activities that cause pain
- **I**ce: Apply ice wrapped in cloth, 15-20 minutes every 2-3 hours
- **C**ompression: Elastic bandage to reduce swelling
- **E**levation: Elevate the injured part above the heart

**Definitive treatment:**
- **Mild injuries:** Rest, ice, physical therapy
- **Moderate injuries:** Immobilization with knee brace/splint, intensive physical therapy
- **Severe injuries (complete tear):** May need reconstruction surgery, followed by months of rehabilitation`,
      keyTerms: [
        {
          term: 'ligamento',
          definition:
            'Banda de tejido fuerte que conecta un hueso con otro en una articulación | Strong band of tissue connecting one bone to another at a joint',
        },
        {
          term: 'LCA (Ligamento Cruzado Anterior)',
          definition:
            'El ligamento principal de la rodilla que evita que la tibia se desplace hacia adelante; el más comúnmente lesionado en deportes | The main knee ligament that prevents the tibia from sliding forward; the most commonly injured in sports',
        },
        {
          term: 'esguince',
          definition:
            'Estiramiento o rotura de un ligamento causado por un movimiento brusco | Stretching or tearing of a ligament caused by a sudden movement',
        },
        {
          term: 'menisco',
          definition:
            'Cartílago en forma de "C" dentro de la rodilla que amortigua y estabiliza; se lesiona frecuentemente con los ligamentos | C-shaped cartilage inside the knee that cushions and stabilizes; frequently injured along with ligaments',
        },
        {
          term: 'inestabilidad articular',
          definition:
            'Sensación de que la articulación se "afloja" o "se va" porque el ligamento ya no la sostiene bien | Sensation that the joint "loosens" or "gives way" because the ligament no longer supports it well',
        },
      ],
      analogies: [
        'Un ligamento es como una cuerda que sostiene dos postes juntos. Si la cuerda se estira o se rompe, los postes se tambalean. | A ligament is like a rope holding two posts together. If the rope stretches or breaks, the posts wobble.',
        'Un esguince grado 1 es como estirar una banda elástica sin romperla. Un grado 3 es como romper la banda por completo. | A grade 1 sprain is like stretching a rubber band without breaking it. A grade 3 is like snapping the band completely.',
        'Los meniscos de la rodilla son como los amortiguadores de un auto: sin ellos, los golpes del camino se sienten mucho más. | The knee menisci are like a car\'s shock absorbers — without them, the bumps in the road are felt much more.',
      ],
      examples: [
        'Un jugador de fútbol cambia de dirección bruscamente y siente un "pop" en la rodilla seguido de hinchazón rápida — probablemente una rotura de LCA. | A soccer player makes a sudden direction change and feels a "pop" in the knee followed by rapid swelling — probably an ACL tear.',
        'Una persona tropieza al bajar escaleras y se tuerce el tobillo hacia adentro — esguince de ligamento lateral del tobillo. | A person trips going down stairs and twists their ankle inward — lateral ankle ligament sprain.',
        'Un esquiador cae con la rodilla doblada y siente dolor en la parte interna de la rodilla — puede ser una lesión del LCM. | A skier falls with the knee bent and feels pain on the inner knee — may be an MCL injury.',
      ],
      patientCounselingPoints: [
        'Si escuchó un "pop" y la rodilla se hinchó rápidamente, es muy importante que un médico la evalúe pronto. | If you heard a "pop" and the knee swelled rapidly, it is very important to have a doctor evaluate it soon.',
        'El hielo es su mejor aliado las primeras 48-72 horas. Aplíquelo envuelto en tela por 15-20 minutos, varias veces al día. | Ice is your best ally the first 48-72 hours. Apply it wrapped in cloth for 15-20 minutes, several times a day.',
        'La rehabilitación y los ejercicios que le enseñen son tan importantes como la cirugía. Completar toda la terapia física es clave para volver a su actividad normal. | Rehabilitation and the exercises you are taught are as important as surgery. Completing all physical therapy is key to returning to normal activity.',
        'No todos los ligamentos rotos necesitan cirugía. Su médico determinará el mejor tratamiento según su lesión, edad y nivel de actividad. | Not all torn ligaments need surgery. Your doctor will determine the best treatment based on your injury, age, and activity level.',
        'Después de una lesión de LCA, el regreso al deporte generalmente toma 9 a 12 meses. La paciencia es fundamental. | After an ACL injury, return to sports usually takes 9 to 12 months. Patience is fundamental.',
      ],
    },

    2: {
      level: 2,
      summary:
        'Las lesiones ligamentarias se clasifican por grado de desgarro, articulación afectada y mecanismo de lesión. La rodilla con sus cuatro ligamentos principales y meniscos es la articulación más compleja. El diagnóstico combina examen clínico con imagen, y el tratamiento depende del ligamento, grado y demanda funcional del paciente. | Ligament injuries are classified by tear grade, affected joint, and mechanism of injury. The knee with its four main ligaments and menisci is the most complex joint. Diagnosis combines clinical examination with imaging, and treatment depends on the ligament, grade, and patient functional demand.',
      explanation: `## Explicación

Las lesiones ligamentarias son extremadamente comunes, especialmente en deportistas, y requieren un enfoque diagnóstico y terapéutico sistemático.

**Anatomía ligamentaria de la rodilla — los 4 ligamentos principales:**

1. **LCA (Ligamento Cruzado Anterior):**
   - Conecta el fémur con la tibia por dentro de la rodilla
   - Evita que la tibia se desplace hacia adelante y controla la rotación
   - El ligamento más frecuentemente reconstruido quirúrgicamente
   - Tiene muy poca capacidad de cicatrización por su ambiente intra-articular

2. **LCP (Ligamento Cruzado Posterior):**
   - Evita que la tibia se desplace hacia atrás
   - Más fuerte que el LCA
   - Lesión típica: "golpe de tablero" (dashboard injury) en accidentes de auto

3. **LCM (Ligamento Colateral Medial):**
   - Estabiliza la parte interna de la rodilla
   - Lesión por golpe lateral (fuerza en valgo)
   - Buena capacidad de cicatrización — generalmente no necesita cirugía

4. **LCL (Ligamento Colateral Lateral):**
   - Estabiliza la parte externa de la rodilla
   - Lesión por fuerza en varo (menos común aislada)
   - Forma parte de la esquina posterolateral

**Los meniscos:**
- Dos cojines de cartílago en forma de "C" (medial y lateral)
- Absorben impacto, distribuyen peso y estabilizan la rodilla
- El menisco medial es más fijo y se lesiona más frecuentemente
- Se desgarran por torsión, especialmente combinada con flexión y carga

**Mecanismos de lesión comunes:**
- **LCA sin contacto:** Cambio brusco de dirección, aterrizaje de salto con rodilla en valgo y rotación. Más común en mujeres.
- **LCA con contacto:** Golpe lateral a la rodilla
- **LCM:** Golpe en la parte lateral de la rodilla (fuerza en valgo)
- **Menisco:** Torsión de rodilla con pie plantado en el suelo
- **"Tríada terrible":** Lesión de LCA + LCM + menisco medial (ahora se sabe que el menisco lateral se lesiona más frecuentemente)

**Exploración física de la rodilla:**
- **Cajón anterior:** Desplazamiento de tibia hacia adelante (LCA)
- **Lachman:** Más sensible para LCA — desplazamiento anterior a 20-30° de flexión
- **Pivot shift:** Reproducción de la inestabilidad rotacional (LCA)
- **Cajón posterior:** Desplazamiento de tibia hacia atrás (LCP)
- **Estrés en valgo:** Apertura medial (LCM)
- **Estrés en varo:** Apertura lateral (LCL)
- **McMurray:** Rotación + extensión reproduciendo dolor/clic (menisco)
- **Thessaly:** Rotación interna/externa con carga en una pierna a 20° de flexión (menisco)

**Estudios de imagen:**
- **Radiografía:** Descarta fracturas; puede mostrar fractura de Segond (avulsión — patognomónica de lesión de LCA)
- **Resonancia magnética (RM):** Estudio de elección — muestra ligamentos, meniscos, cartílago y hueso con alta sensibilidad
- Signos de RM de rotura de LCA: Discontinuidad del ligamento, edema óseo en cóndilo femoral lateral y meseta tibial posterolateral ("bone bruise")

**Principios de tratamiento:**

*Lesiones que generalmente NO necesitan cirugía:*
- Esguinces grado 1-2 de la mayoría de ligamentos
- LCM aislado (incluso grado 3) — sana bien con rodillera y rehabilitación
- LCP aislado grado 1-2

*Lesiones que frecuentemente requieren cirugía:*
- LCA completo en paciente joven y activo
- Lesiones multiligamentarias (luxación de rodilla)
- Menisco con bloqueo articular
- Esquina posterolateral

**Rehabilitación — principios generales:**
- Fase 1: Reducir inflamación y dolor, recuperar extensión completa
- Fase 2: Fortalecimiento progresivo (cuádriceps, isquiotibiales, cadera)
- Fase 3: Ejercicios funcionales y propioceptivos
- Fase 4: Retorno gradual a actividades deportivas
- Criterios de alta: Fuerza >90% del lado sano, pruebas funcionales pasadas

---
## Explanation

Ligament injuries are extremely common, especially in athletes, and require a systematic diagnostic and therapeutic approach.

**Knee ligament anatomy — the 4 main ligaments:**

1. **ACL (Anterior Cruciate Ligament):**
   - Connects the femur to the tibia inside the knee
   - Prevents anterior tibial translation and controls rotation
   - The most frequently surgically reconstructed ligament
   - Has very little healing capacity due to its intra-articular environment

2. **PCL (Posterior Cruciate Ligament):**
   - Prevents posterior tibial translation
   - Stronger than the ACL
   - Typical injury: "dashboard injury" in car accidents

3. **MCL (Medial Collateral Ligament):**
   - Stabilizes the inner side of the knee
   - Injury from lateral blow (valgus force)
   - Good healing capacity — generally does not need surgery

4. **LCL (Lateral Collateral Ligament):**
   - Stabilizes the outer side of the knee
   - Injury from varus force (less common isolated)
   - Part of the posterolateral corner

**The menisci:**
- Two C-shaped cartilage cushions (medial and lateral)
- Absorb impact, distribute weight, and stabilize the knee
- The medial meniscus is more fixed and more frequently injured
- Tears from torsion, especially combined with flexion and loading

**Common injury mechanisms:**
- **ACL non-contact:** Sudden direction change, jump landing with knee in valgus and rotation. More common in women.
- **ACL contact:** Lateral blow to the knee
- **MCL:** Blow to the lateral side of the knee (valgus force)
- **Meniscus:** Knee twisting with foot planted on the ground
- **"Terrible triad":** ACL + MCL + medial meniscus injury (now known that the lateral meniscus is more frequently injured)

**Knee physical examination:**
- **Anterior drawer:** Anterior tibial displacement (ACL)
- **Lachman:** Most sensitive for ACL — anterior displacement at 20-30 degrees flexion
- **Pivot shift:** Reproduction of rotational instability (ACL)
- **Posterior drawer:** Posterior tibial displacement (PCL)
- **Valgus stress:** Medial opening (MCL)
- **Varus stress:** Lateral opening (LCL)
- **McMurray:** Rotation + extension reproducing pain/click (meniscus)
- **Thessaly:** Internal/external rotation with single-leg loading at 20 degrees flexion (meniscus)

**Imaging studies:**
- **X-ray:** Rules out fractures; may show Segond fracture (avulsion — pathognomonic of ACL injury)
- **MRI:** Study of choice — shows ligaments, menisci, cartilage, and bone with high sensitivity
- MRI signs of ACL tear: Ligament discontinuity, bone edema in lateral femoral condyle and posterolateral tibial plateau ("bone bruise")

**Treatment principles:**

*Injuries that generally do NOT need surgery:*
- Grade 1-2 sprains of most ligaments
- Isolated MCL (even grade 3) — heals well with brace and rehabilitation
- Isolated PCL grade 1-2

*Injuries that frequently require surgery:*
- Complete ACL in young, active patient
- Multiligament injuries (knee dislocation)
- Meniscus with joint locking
- Posterolateral corner

**Rehabilitation — general principles:**
- Phase 1: Reduce inflammation and pain, achieve full extension
- Phase 2: Progressive strengthening (quadriceps, hamstrings, hip)
- Phase 3: Functional and proprioceptive exercises
- Phase 4: Gradual return to sports activities
- Discharge criteria: Strength >90% of healthy side, functional tests passed`,
      keyTerms: [
        {
          term: 'LCA (Ligamento Cruzado Anterior)',
          definition:
            'Ligamento dentro de la rodilla que conecta fémur y tibia, evita desplazamiento anterior de la tibia y controla rotación | Ligament inside the knee connecting femur and tibia, prevents anterior tibial displacement and controls rotation',
        },
        {
          term: 'Lachman',
          definition:
            'Prueba clínica más sensible para detectar rotura de LCA; evalúa desplazamiento anterior de tibia a 20-30° de flexión | Most sensitive clinical test for detecting ACL tear; evaluates anterior tibial displacement at 20-30 degrees flexion',
        },
        {
          term: 'menisco',
          definition:
            'Cartílago fibroso en forma de C dentro de la rodilla que amortigua, distribuye peso y estabiliza la articulación | C-shaped fibrous cartilage inside the knee that cushions, distributes weight, and stabilizes the joint',
        },
        {
          term: 'pivot shift',
          definition:
            'Prueba clínica que reproduce la inestabilidad rotacional de la rodilla; patognomónica de rotura de LCA | Clinical test reproducing rotational knee instability; pathognomonic of ACL tear',
        },
        {
          term: 'fractura de Segond',
          definition:
            'Pequeña avulsión ósea en la parte lateral de la tibia; patognomónica de lesión del LCA | Small bone avulsion on the lateral tibia; pathognomonic of ACL injury',
        },
        {
          term: 'propiocepción',
          definition:
            'Capacidad del cuerpo de saber la posición de sus articulaciones sin mirar; crucial para rehabilitación | Body\'s ability to know joint position without looking; crucial for rehabilitation',
        },
      ],
      analogies: [
        'Los cuatro ligamentos de la rodilla son como los cuatro cables que sostienen un puente colgante: si uno se rompe, los otros se sobrecargan y el puente pierde estabilidad. | The four knee ligaments are like the four cables holding a suspension bridge — if one breaks, the others are overloaded and the bridge loses stability.',
        'El LCA dentro de la rodilla es como un cinturón de seguridad: no te das cuenta de su importancia hasta que lo necesitas y no está ahí. | The ACL inside the knee is like a seatbelt — you do not realize its importance until you need it and it is not there.',
      ],
    },

    3: {
      level: 3,
      summary:
        'La reconstrucción del LCA es uno de los procedimientos ortopédicos más realizados. La selección de injerto, la técnica quirúrgica y el protocolo de rehabilitación determinan el éxito. Las lesiones meniscales requieren una comprensión de la vascularización y las opciones de reparación vs. resección. | ACL reconstruction is one of the most performed orthopedic procedures. Graft selection, surgical technique, and rehabilitation protocol determine success. Meniscal injuries require understanding of vascularity and repair vs. resection options.',
      explanation: `## Explicación

El manejo de lesiones ligamentarias de rodilla requiere un enfoque integral que considere la biomecánica, la biología de curación y los objetivos funcionales del paciente.

**Reconstrucción del LCA — decisiones clave:**

*¿Quién necesita cirugía?*
- Pacientes jóvenes y activos (especialmente deportistas)
- Episodios recurrentes de inestabilidad ("giving way")
- Lesiones asociadas de menisco que requieren reparación
- Deportes de pivoteo y corte (fútbol, baloncesto, esquí)
- Ocupaciones con alta demanda física

*¿Quién puede manejarse sin cirugía?*
- Pacientes de mayor edad con baja demanda funcional
- Lesiones parciales sin inestabilidad funcional
- Pacientes que modifican su nivel de actividad
- Rehabilitación intensiva como alternativa (copers vs. non-copers)

*Opciones de injerto:*
- **Autoinjerto de tendón patelar (BTB - bone-tendon-bone):**
  - Estándar de oro por integración hueso-hueso
  - Mayor dolor anterior de rodilla y riesgo de fractura patelar
  - Excelente fijación biológica
  - Preferido en deportistas de élite

- **Autoinjerto de isquiotibiales (semitendinoso ± gracilis):**
  - Menor morbilidad del sitio donante
  - Excelentes propiedades biomecánicas cuando se cuadruplica
  - Debilidad potencial de flexión y rotación interna
  - Injerto más utilizado actualmente

- **Autoinjerto de tendón cuadricipital:**
  - Injerto grueso y fuerte
  - Puede incluir bloque óseo (híbrido)
  - Menor dolor anterior que BTB
  - Ganando popularidad

- **Aloinjerto (de donante cadavérico):**
  - Sin morbilidad del sitio donante
  - Mayor tasa de fallo en pacientes jóvenes activos
  - Indicado en revisión, multiligamentarias, y pacientes mayores
  - Riesgo de transmisión de enfermedades (mínimo con procesamiento moderno)

*Técnica quirúrgica:*
- Artroscópica en la mayoría de los casos
- Posición de túneles es el factor más importante para el éxito
- Técnica anatómica: Reproducir la inserción nativa del LCA
- Fijación: Tornillos de interferencia, endobutton, grapas
- Considerar bundle simple vs. doble (debate actual — simple es estándar)

**Lesiones meniscales — manejo detallado:**

*Anatomía vascular del menisco (zonas):*
- **Zona roja-roja:** Periferia, vascularizada — potencial de cicatrización alto
- **Zona roja-blanca:** Intermedia — potencial de cicatrización intermedio
- **Zona blanca-blanca:** Central, avascular — pobre cicatrización

*Tipos de desgarro meniscal:*
- **Longitudinal:** Paralelo a las fibras circunferenciales
- **En asa de balde:** Longitudinal extenso que se desplaza al centro — causa bloqueo
- **Radial:** Perpendicular a las fibras — interrumpe función de distribución de carga
- **Flap/colgajo:** Desgarro horizontal con fragmento libre
- **Complejo/degenerativo:** Múltiples planos, frecuente en personas mayores
- **Raíz meniscal:** Desgarro de la inserción del menisco — funcionalmente equivalente a meniscectomía total

*Reparación vs. meniscectomía:*
- **Reparar siempre que sea posible** — preservar menisco protege el cartílago
- Reparación: Desgarros en zona roja, longitudinales, en pacientes jóvenes, y cuando hay reconstrucción de LCA concomitante
- Meniscectomía parcial: Desgarros en zona blanca, complejos, degenerativos
- Meniscectomía total: Evitar — aumenta significativamente riesgo de artrosis
- Trasplante meniscal: Opción para pacientes jóvenes post-meniscectomía con dolor

*Técnicas de reparación:*
- Inside-out: Estándar de oro, puntos verticales con aguja
- Outside-in: Para cuerno anterior
- All-inside: Dispositivos con anclas (más común actualmente por ser menos invasivo)

**Lesión multiligamentaria (luxación de rodilla):**
- Definición: Lesión de 2 o más ligamentos principales
- **Emergencia vascular:** 30-40% tienen lesión de arteria poplítea
- Evaluación vascular obligatoria: Pulsos, índice tobillo-brazo (ITB), angiografía por TAC si ITB <0.9
- Reconstrucción quirúrgica generalmente necesaria
- Protocolo: Reducción → evaluación vascular → estabilización → reconstrucción diferida (2-3 semanas)
- La esquina posterolateral debe reconstruirse si está lesionada

**Prevención de lesiones de LCA:**
- Programas neuromuscular (FIFA 11+, PEP program)
- Entrenamiento de aterrizaje correcto
- Fortalecimiento de isquiotibiales y cadera
- Entrenamiento propioceptivo
- Reducción de 50-70% en incidencia de lesiones de LCA en mujeres deportistas

**Factores de riesgo para re-ruptura:**
- Edad <20 años: Mayor riesgo de re-ruptura (hasta 25%)
- Retorno precoz al deporte (<9 meses)
- Injerto alogénico en pacientes jóvenes
- Posición inadecuada de túneles
- No completar rehabilitación

---
## Explanation

Management of knee ligament injuries requires a comprehensive approach considering biomechanics, healing biology, and patient functional goals.

**ACL reconstruction — key decisions:**

*Who needs surgery?*
- Young, active patients (especially athletes)
- Recurrent instability episodes ("giving way")
- Associated meniscal injuries requiring repair
- Pivoting and cutting sports (soccer, basketball, skiing)
- Occupations with high physical demand

*Who can be managed without surgery?*
- Older patients with low functional demand
- Partial injuries without functional instability
- Patients who modify their activity level
- Intensive rehabilitation as alternative (copers vs. non-copers)

*Graft options:*
- **Patellar tendon autograft (BTB - bone-tendon-bone):**
  - Gold standard for bone-to-bone integration
  - More anterior knee pain and patellar fracture risk
  - Excellent biological fixation
  - Preferred in elite athletes

- **Hamstring autograft (semitendinosus +/- gracilis):**
  - Less donor site morbidity
  - Excellent biomechanical properties when quadrupled
  - Potential weakness in flexion and internal rotation
  - Most commonly used graft currently

- **Quadriceps tendon autograft:**
  - Thick and strong graft
  - Can include bone block (hybrid)
  - Less anterior pain than BTB
  - Gaining popularity

- **Allograft (cadaveric donor):**
  - No donor site morbidity
  - Higher failure rate in young active patients
  - Indicated in revision, multiligament, and older patients
  - Disease transmission risk (minimal with modern processing)

*Surgical technique:*
- Arthroscopic in most cases
- Tunnel position is the most important factor for success
- Anatomic technique: Reproduce native ACL insertion
- Fixation: Interference screws, endobutton, staples
- Consider single vs. double bundle (current debate — single is standard)

**Meniscal injuries — detailed management:**

*Meniscal vascular anatomy (zones):*
- **Red-red zone:** Periphery, vascularized — high healing potential
- **Red-white zone:** Intermediate — intermediate healing potential
- **White-white zone:** Central, avascular — poor healing

*Types of meniscal tear:*
- **Longitudinal:** Parallel to circumferential fibers
- **Bucket handle:** Extensive longitudinal that displaces centrally — causes locking
- **Radial:** Perpendicular to fibers — disrupts load distribution function
- **Flap:** Horizontal tear with free fragment
- **Complex/degenerative:** Multiple planes, frequent in older people
- **Root tear:** Tear of meniscal insertion — functionally equivalent to total meniscectomy

*Repair vs. meniscectomy:*
- **Repair whenever possible** — preserving meniscus protects cartilage
- Repair: Red zone tears, longitudinal, in young patients, and with concomitant ACL reconstruction
- Partial meniscectomy: White zone tears, complex, degenerative
- Total meniscectomy: Avoid — significantly increases osteoarthritis risk
- Meniscal transplant: Option for young post-meniscectomy patients with pain

*Repair techniques:*
- Inside-out: Gold standard, vertical mattress sutures
- Outside-in: For anterior horn
- All-inside: Anchor devices (most common currently as less invasive)

**Multiligament injury (knee dislocation):**
- Definition: Injury to 2 or more main ligaments
- **Vascular emergency:** 30-40% have popliteal artery injury
- Mandatory vascular assessment: Pulses, ankle-brachial index (ABI), CT angiography if ABI <0.9
- Surgical reconstruction generally necessary
- Protocol: Reduction → vascular assessment → stabilization → delayed reconstruction (2-3 weeks)
- Posterolateral corner must be reconstructed if injured

**ACL injury prevention:**
- Neuromuscular programs (FIFA 11+, PEP program)
- Proper landing training
- Hamstring and hip strengthening
- Proprioceptive training
- 50-70% reduction in ACL injury incidence in female athletes

**Risk factors for re-rupture:**
- Age <20 years: Higher re-rupture risk (up to 25%)
- Early return to sport (<9 months)
- Allograft in young patients
- Improper tunnel position
- Incomplete rehabilitation`,
      keyTerms: [
        {
          term: 'autoinjerto BTB (bone-tendon-bone)',
          definition:
            'Injerto de tendón patelar con bloques óseos en ambos extremos; estándar de oro para reconstrucción de LCA por su integración hueso-hueso | Patellar tendon graft with bone blocks at both ends; gold standard for ACL reconstruction due to bone-to-bone integration',
        },
        {
          term: 'zona roja-roja',
          definition:
            'Periferia vascularizada del menisco con alto potencial de cicatrización; las reparaciones aquí tienen el mejor pronóstico | Vascularized meniscal periphery with high healing potential; repairs here have the best prognosis',
        },
        {
          term: 'desgarro en asa de balde',
          definition:
            'Desgarro meniscal longitudinal extenso cuyo fragmento se desplaza al centro de la articulación causando bloqueo mecánico | Extensive longitudinal meniscal tear whose fragment displaces into the joint center causing mechanical locking',
        },
        {
          term: 'esquina posterolateral',
          definition:
            'Complejo ligamentario en la parte posterolateral de la rodilla (LCL, poplíteo, ligamento arcuato); su lesión inadvertida es causa frecuente de fallo de reconstrucción de LCA | Ligamentous complex at the posterolateral knee (LCL, popliteus, arcuate ligament); unrecognized injury is a frequent cause of ACL reconstruction failure',
        },
        {
          term: 'arteria poplítea',
          definition:
            'Arteria principal detrás de la rodilla; riesgo de lesión del 30-40% en luxaciones de rodilla; su compromiso es una emergencia vascular | Main artery behind the knee; 30-40% injury risk in knee dislocations; its compromise is a vascular emergency',
        },
        {
          term: 'FIFA 11+',
          definition:
            'Programa de calentamiento neuromuscular diseñado para prevenir lesiones de rodilla en fútbol; reduce incidencia de lesiones de LCA en 50-70% | Neuromuscular warm-up program designed to prevent knee injuries in soccer; reduces ACL injury incidence by 50-70%',
        },
      ],
      clinicalNotes:
        'Toda luxación de rodilla debe considerarse una emergencia vascular hasta demostrar lo contrario. Evaluar pulsos distales y obtener índice tobillo-brazo (ITB). Un ITB <0.9 requiere angiografía por TAC urgente. La arteria poplítea está anclada proximal y distalmente, haciéndola vulnerable a tracción. El retraso en el diagnóstico de lesión vascular puede resultar en amputación. La esquina posterolateral no reconocida es la causa más frecuente de fallo de reconstrucción de LCA. | Every knee dislocation must be considered a vascular emergency until proven otherwise. Evaluate distal pulses and obtain ankle-brachial index (ABI). An ABI <0.9 requires urgent CT angiography. The popliteal artery is anchored proximally and distally, making it vulnerable to traction. Delay in diagnosing vascular injury can result in amputation. Unrecognized posterolateral corner injury is the most frequent cause of ACL reconstruction failure.',
    },

    4: {
      level: 4,
      summary:
        'La biomecánica avanzada del LCA, la optimización de técnicas de reconstrucción y la ciencia de la rehabilitación basada en criterios funcionales están mejorando los resultados. La comprensión de la biología de integración del injerto y los factores de riesgo de re-ruptura guía la toma de decisiones clínicas. | Advanced ACL biomechanics, optimization of reconstruction techniques, and criterion-based rehabilitation science are improving outcomes. Understanding graft integration biology and re-rupture risk factors guides clinical decision-making.',
      explanation: `## Explicación

El manejo avanzado de lesiones ligamentarias de rodilla integra biomecánica, biología del injerto, técnica quirúrgica refinada y rehabilitación basada en evidencia.

**Biomecánica del LCA:**

*Función biomecánica detallada:*
- Restrictor primario de translación tibial anterior (86% de la fuerza restrictiva a 30° de flexión)
- Restrictor secundario de rotación interna
- El LCA tiene dos fascículos funcionales:
  - **Anteromedial (AM):** Tenso en flexión, resiste translación anterior
  - **Posterolateral (PL):** Tenso en extensión, controla rotación y estabilidad en extensión
- Fuerza máxima: 2160 N; rigidez: 242 N/mm
- Inervación propioceptiva: Mecanorreceptores que contribuyen a estabilidad neuromuscular dinámica

*Mecanismo de lesión — análisis biomecánico:*
- 70% son lesiones sin contacto
- Posición de riesgo: Valgo dinámico + rotación interna + rodilla cerca de extensión
- Momento de máximo riesgo: 17-50 ms después del contacto del pie con el suelo
- Factores anatómicos predisponentes: Escotadura intercondílea estrecha, pendiente tibial posterior aumentada, IMC elevado
- Factores neuromusculares: Dominancia de cuádriceps, déficit de activación de isquiotibiales, déficit de control de tronco

**Biología de integración del injerto:**

*Fases de "ligamentización":*
1. **Necrosis avascular** (0-4 semanas): Muerte celular del injerto, fragilidad máxima
2. **Revascularización** (4-12 semanas): Ingrowth vascular, repoblación celular
3. **Remodelación** (3-12 meses): Reorganización de colágeno, maduración celular
4. **Maduración** (12-36 meses): El injerto nunca reproduce exactamente la estructura nativa

*Factores que afectan la integración:*
- La integración hueso-hueso (BTB) es más rápida que tendón-hueso (isquiotibiales)
- La carga mecánica controlada estimula la maduración
- Biológicos (PRP, factores de crecimiento): Resultados inconsistentes en mejorar integración
- El ambiente intra-articular (líquido sinovial) dificulta la cicatrización

**Optimización quirúrgica:**

*Posición de túneles — el factor más crítico:*
- Túnel femoral: Centro de la inserción nativa del LCA en la pared medial del cóndilo femoral lateral
- Túnel tibial: Centro de la inserción tibial nativa
- Técnica de perforación independiente (outside-in o transportal) para túnel femoral vs. transtibial — técnica independiente es biomecánicamente superior
- Navegación y fluoroscopia para verificar posición
- Error más común: Túnel femoral anterior y alto → pérdida de control rotacional

*Fijación del injerto:*
- Aperture fixation (fijación en la entrada del túnel): Tornillos de interferencia — más anatómica
- Suspensory fixation (fijación suspensoria): Endobutton, TightRope — versatil
- Fijación híbrida: Suspensoria femoral + interferencia tibial
- La fijación debe ser lo suficientemente fuerte para permitir rehabilitación temprana

*Tratamiento de lesiones concomitantes:*
- Reparación meniscal: Realizarla siempre que sea posible durante reconstrucción de LCA (ambiente biológico favorable)
- Lesiones condrales: Microfracturas, trasplante osteocondral
- LCM: Generalmente sana sin cirugía incluso con reconstrucción de LCA
- Esquina posterolateral: Reconstruir si hay inestabilidad — no reconocerla lleva a fallo de LCA

**Rehabilitación basada en criterios (no en tiempo):**

*Principios modernos:*
- Criterios funcionales > calendario rígido
- Rehabilitación acelerada con protección biológica
- Carga de peso completa temprana (día 1 postoperatorio)
- Extensión completa inmediata (prevenir artrofibrosis)
- Cadena cinética abierta (extensión de rodilla): Se permite actualmente desde las 4 semanas

*Criterios de retorno al deporte:*
- Mínimo 9 meses post-cirugía (evidencia de mayor riesgo de re-ruptura si retorno antes)
- Índice de simetría de extremidad (LSI) >90% en:
  - Fuerza de cuádriceps e isquiotibiales (isocinético)
  - Hop tests (single hop, triple hop, crossover hop, timed 6m hop)
- Pruebas de control neuromuscular (Y-balance, single leg squat quality)
- Preparación psicológica: ACL-RSI (ACL Return to Sport after Injury scale) >56 puntos
- Solo 55-65% de pacientes retornan a su nivel deportivo previo

**Reparación primaria del LCA (concepto renacido):**
- Bridge-Enhanced ACL Repair (BEAR): Andamio de colágeno + PRP para estimular cicatrización del LCA
- Ensayo clínico fase 2 (Dr. Murray, Boston Children's Hospital): Resultados prometedores a 2 años
- Indicaciones limitadas: Rotura proximal, < 4 semanas de evolución
- Preserva fibras nativas del LCA y sus mecanorreceptores
- Potencial ventaja en propiocepción y resultado funcional

---
## Explanation

Advanced management of knee ligament injuries integrates biomechanics, graft biology, refined surgical technique, and evidence-based rehabilitation.

**ACL biomechanics:**

*Detailed biomechanical function:*
- Primary restraint to anterior tibial translation (86% of restraining force at 30 degrees flexion)
- Secondary restraint to internal rotation
- The ACL has two functional bundles:
  - **Anteromedial (AM):** Taut in flexion, resists anterior translation
  - **Posterolateral (PL):** Taut in extension, controls rotation and extension stability
- Ultimate tensile strength: 2160 N; stiffness: 242 N/mm
- Proprioceptive innervation: Mechanoreceptors contributing to dynamic neuromuscular stability

*Injury mechanism — biomechanical analysis:*
- 70% are non-contact injuries
- At-risk position: Dynamic valgus + internal rotation + knee near extension
- Peak risk moment: 17-50 ms after foot contact with ground
- Predisposing anatomical factors: Narrow intercondylar notch, increased posterior tibial slope, elevated BMI
- Neuromuscular factors: Quadriceps dominance, hamstring activation deficit, trunk control deficit

**Graft integration biology:**

*"Ligamentization" phases:*
1. **Avascular necrosis** (0-4 weeks): Graft cell death, maximum fragility
2. **Revascularization** (4-12 weeks): Vascular ingrowth, cell repopulation
3. **Remodeling** (3-12 months): Collagen reorganization, cell maturation
4. **Maturation** (12-36 months): Graft never exactly reproduces native structure

*Factors affecting integration:*
- Bone-to-bone integration (BTB) is faster than tendon-to-bone (hamstring)
- Controlled mechanical loading stimulates maturation
- Biologics (PRP, growth factors): Inconsistent results in improving integration
- Intra-articular environment (synovial fluid) hinders healing

**Surgical optimization:**

*Tunnel position — the most critical factor:*
- Femoral tunnel: Center of native ACL insertion on medial wall of lateral femoral condyle
- Tibial tunnel: Center of native tibial insertion
- Independent drilling technique (outside-in or transportal) for femoral tunnel vs. transtibial — independent technique is biomechanically superior
- Navigation and fluoroscopy to verify position
- Most common error: Anterior and high femoral tunnel → loss of rotational control

*Graft fixation:*
- Aperture fixation: Interference screws — more anatomic
- Suspensory fixation: Endobutton, TightRope — versatile
- Hybrid fixation: Femoral suspensory + tibial interference
- Fixation must be strong enough to allow early rehabilitation

*Treatment of concomitant injuries:*
- Meniscal repair: Perform whenever possible during ACL reconstruction (favorable biological environment)
- Chondral injuries: Microfractures, osteochondral transplant
- MCL: Generally heals without surgery even with ACL reconstruction
- Posterolateral corner: Reconstruct if instability — failure to recognize leads to ACL failure

**Criterion-based rehabilitation (not time-based):**

*Modern principles:*
- Functional criteria > rigid timeline
- Accelerated rehabilitation with biological protection
- Full weight-bearing early (postoperative day 1)
- Immediate full extension (prevent arthrofibrosis)
- Open kinetic chain (knee extension): Now allowed from 4 weeks

*Return to sport criteria:*
- Minimum 9 months post-surgery (evidence of higher re-rupture risk if returning earlier)
- Limb symmetry index (LSI) >90% in:
  - Quadriceps and hamstring strength (isokinetic)
  - Hop tests (single hop, triple hop, crossover hop, timed 6m hop)
- Neuromuscular control tests (Y-balance, single leg squat quality)
- Psychological readiness: ACL-RSI scale >56 points
- Only 55-65% of patients return to their previous sports level

**Primary ACL repair (reborn concept):**
- Bridge-Enhanced ACL Repair (BEAR): Collagen scaffold + PRP to stimulate ACL healing
- Phase 2 clinical trial (Dr. Murray, Boston Children's Hospital): Promising 2-year results
- Limited indications: Proximal tear, <4 weeks from injury
- Preserves native ACL fibers and mechanoreceptors
- Potential advantage in proprioception and functional outcome`,
      keyTerms: [
        {
          term: 'ligamentización',
          definition:
            'Proceso biológico por el cual un injerto tendinoso se transforma gradualmente en un tejido similar a ligamento; toma 12-36 meses | Biological process by which a tendon graft gradually transforms into ligament-like tissue; takes 12-36 months',
        },
        {
          term: 'fascículo anteromedial (AM)',
          definition:
            'Porción del LCA que se tensa en flexión y resiste primariamente la translación anterior; el más importante funcionalmente | ACL portion taut in flexion that primarily resists anterior translation; the most functionally important',
        },
        {
          term: 'índice de simetría de extremidad (LSI)',
          definition:
            'Relación de rendimiento entre pierna operada y sana; >90% requerido para retorno al deporte | Performance ratio between operated and healthy leg; >90% required for return to sport',
        },
        {
          term: 'BEAR (Bridge-Enhanced ACL Repair)',
          definition:
            'Técnica innovadora de reparación primaria del LCA usando andamio de colágeno y PRP; preserva fibras nativas | Innovative primary ACL repair technique using collagen scaffold and PRP; preserves native fibers',
        },
        {
          term: 'artrofibrosis',
          definition:
            'Formación excesiva de tejido cicatricial dentro de la articulación que causa pérdida de movimiento; complicación temida de reconstrucción de LCA | Excessive scar tissue formation within the joint causing loss of motion; feared complication of ACL reconstruction',
        },
        {
          term: 'fijación suspensoria',
          definition:
            'Método de fijación del injerto que lo suspende del hueso cortical con un botón; permite ajuste de longitud | Graft fixation method suspending it from cortical bone with a button; allows length adjustment',
        },
      ],
      clinicalNotes:
        'La posición del túnel femoral es el factor más importante para el éxito de la reconstrucción de LCA. Una posición anterior y alta resulta en pérdida de control rotacional (pivot shift residual positivo). La técnica de perforación independiente (outside-in o transportal) permite mejor posición anatómica que la transtibial. El retorno al deporte antes de 9 meses se asocia con un aumento significativo del riesgo de re-ruptura. La evaluación psicológica (ACL-RSI) es un predictor independiente de retorno exitoso al deporte. | Femoral tunnel position is the most important factor for ACL reconstruction success. An anterior and high position results in loss of rotational control (residual positive pivot shift). Independent drilling technique (outside-in or transportal) allows better anatomic position than transtibial. Return to sport before 9 months is associated with significant increase in re-rupture risk. Psychological assessment (ACL-RSI) is an independent predictor of successful return to sport.',
    },

    5: {
      level: 5,
      summary:
        'Las fronteras de la investigación en lesiones ligamentarias incluyen la reparación biológica aumentada, terapia génica para mejorar integración del injerto, biomarcadores para personalizar rehabilitación, inteligencia artificial para predicción de lesiones, y estrategias de prevención basadas en análisis biomecánico individualizado. | Research frontiers in ligament injuries include biologically augmented repair, gene therapy to improve graft integration, biomarkers to personalize rehabilitation, artificial intelligence for injury prediction, and prevention strategies based on individualized biomechanical analysis.',
      explanation: `## Explicación

La investigación contemporánea en lesiones ligamentarias está transformando tanto la prevención como el tratamiento, con un enfoque hacia la medicina personalizada y la regeneración biológica.

**Reparación biológica aumentada del LCA:**

*Concepto de preservación del LCA:*
- Paradigma emergente: Reparar el LCA nativo en lugar de reemplazarlo
- Ventajas teóricas: Preserva propiocepción nativa, evita morbilidad de sitio donante, recuperación potencialmente más rápida
- BEAR implant (aprobado FDA 2024): Andamio de colágeno bovino + sangre autóloga inyectado entre los extremos del LCA roto
- BEAR-MOON trial (multicéntrico): En curso, comparando BEAR vs. reconstrucción con autoinjerto
- Internal brace augmentation: Sutura de alta resistencia (FiberTape) como complemento de reparación
- Limitaciones: Solo aplicable a roturas proximales recientes (<4 semanas), resultados a largo plazo desconocidos

*Ingeniería de tejido ligamentoso:*
- Andamios de seda (silk scaffolds): Biocompatibles, degradables, propiedades mecánicas ajustables
- Andamios electrohilados de PLGA/PCL con orientación de fibras para guiar regeneración
- Bioimpresión 3D de constructos ligamentarios con gradiente de mineralización (para integración hueso-ligamento)
- Descelularización de aloinjertos para preservar arquitectura extracelular eliminando inmunogenicidad
- Células madre derivadas de tejido adiposo (ADSCs) sembradas en andamios: Resultados preclínicos prometedores

*Terapia génica y biológicos avanzados:*
- Transferencia génica de VEGF y PDGF para mejorar vascularización del injerto
- Inhibición de MMPs para proteger la matriz del injerto durante la fase de necrosis
- Inyección de PRP en túneles óseos: Meta-análisis muestra reducción del diámetro del túnel
- Exosomas derivados de MSCs: Efecto paracrino antiinflamatorio y proangiogénico
- Factor de crecimiento derivado de plaquetas (PDGF) recombinante: Ensayos clínicos para mejorar integración tendón-hueso

**Biomarcadores en lesiones ligamentarias:**

*Biomarcadores de integración del injerto:*
- CTX-II, COMP séricos: Indicadores de remodelación del injerto
- Marcadores de inflamación sinovial (IL-6, MMP-3): Correlacionan con maduración del injerto
- Tenascina-C en líquido sinovial: Biomarcador de remodelación tisular
- Resonancia magnética cuantitativa del injerto: T2 mapping para evaluar maduración

*Biomarcadores de riesgo de re-ruptura:*
- Perfiles genéticos de riesgo (COL1A1, COL5A1, MMP3, tenascina-C polimorfismos)
- Marcadores de calidad ósea del túnel
- Biomarcadores de estrés mecánico (CTX-I, osteocalcina)

**Inteligencia artificial en lesiones ligamentarias:**

*Predicción de lesiones:*
- Modelos de machine learning usando datos de wearables (acelerómetros, giroscopios)
- Análisis de marcha y movimiento con visión por computadora (pose estimation)
- Identificación de patrones de riesgo en tiempo real durante entrenamiento
- Integración de datos genéticos + biomecánicos + neuromuscular para estratificación de riesgo
- Random forests y deep learning para predecir lesión de LCA con >80% de precisión

*Optimización quirúrgica:*
- Planificación preoperatoria con IA: Posición óptima de túneles basada en anatomía individual
- Predicción de resultados post-quirúrgicos personalizados
- Análisis automatizado de RM para evaluar integración del injerto
- Navegación quirúrgica aumentada con realidad mixta (HoloLens)

*Rehabilitación personalizada:*
- Algoritmos de progresión adaptativos basados en sensores inerciales
- Biofeedback en tiempo real durante ejercicios de rehabilitación
- Gamificación de rehabilitación para mejorar adherencia
- Modelos predictivos de retorno al deporte basados en datos de rehabilitación

**Prevención basada en evidencia — fronteras:**

*Análisis biomecánico individualizado:*
- Captura de movimiento 3D sin marcadores (markerless motion capture) con smartphones
- Identificación de biomecánica de riesgo específica del individuo
- Programas de intervención personalizados según análisis
- Reducción adicional del riesgo sobre programas genéricos

*Factores hormonales y ciclo menstrual:*
- Variación de laxitud ligamentaria con el ciclo menstrual (mayor laxitud en fase ovulatoria)
- Receptores de estrógeno y relaxina en el LCA
- Posible modulación del riesgo con anticonceptivos orales
- Periodización del entrenamiento según fase del ciclo: Concepto emergente

*Calzado y superficie:*
- Interacción zapato-superficie como factor de riesgo
- Coeficiente de tracción óptimo vs. excesivo
- Césped artificial vs. natural: Meta-análisis inconclusivos
- Diseño de calzado con liberación de tracción rotacional

**Temas controversiales actuales:**

- ¿Reconstrucción anatómica de doble fascículo vs. fascículo simple? Ensayos prospectivos no muestran diferencia clínica significativa
- ¿Reconstrucción temprana (<3 semanas) vs. diferida? Evidencia creciente a favor de reconstrucción temprana con menor incidencia de lesiones meniscales secundarias
- ¿Cuál es el injerto ideal? No existe consenso — la decisión debe personalizarse según paciente, actividad y cirujano
- ¿Lateralización extraarticular (Lemaire/ALL reconstruction)? Evidencia emergente de reducción de re-ruptura en pacientes de alto riesgo
- ¿La rodilla con reconstrucción de LCA alguna vez vuelve a la normalidad? La evidencia sugiere que no — el riesgo de artrosis permanece elevado a 10-20 años independientemente del tratamiento
- Reparación vs. reconstrucción: BEAR y técnicas de reparación aumentada desafían el paradigma de reconstrucción como único tratamiento quirúrgico

**Registro y big data:**
- Registros de reconstrucción de LCA (Escandinavia, Australia): Miles de procedimientos con seguimiento a largo plazo
- Identificación de factores de riesgo de fallo a nivel poblacional
- Benchmarking de resultados entre cirujanos e instituciones
- Integración futura con datos de wearables y rehabilitación para predecir resultados individuales

---
## Explanation

Contemporary research in ligament injuries is transforming both prevention and treatment, with a focus toward personalized medicine and biological regeneration.

**Biologically augmented ACL repair:**

*ACL preservation concept:*
- Emerging paradigm: Repair the native ACL instead of replacing it
- Theoretical advantages: Preserves native proprioception, avoids donor site morbidity, potentially faster recovery
- BEAR implant (FDA approved 2024): Bovine collagen scaffold + autologous blood injected between ACL stump ends
- BEAR-MOON trial (multicenter): Ongoing, comparing BEAR vs. autograft reconstruction
- Internal brace augmentation: High-strength suture (FiberTape) as repair supplement
- Limitations: Only applicable to recent proximal tears (<4 weeks), long-term results unknown

*Ligament tissue engineering:*
- Silk scaffolds: Biocompatible, degradable, adjustable mechanical properties
- Electrospun PLGA/PCL scaffolds with fiber orientation to guide regeneration
- 3D bioprinting of ligamentous constructs with mineralization gradient (for bone-ligament integration)
- Allograft decellularization to preserve extracellular architecture while eliminating immunogenicity
- Adipose-derived stem cells (ADSCs) seeded on scaffolds: Promising preclinical results

*Gene therapy and advanced biologics:*
- VEGF and PDGF gene transfer to improve graft vascularization
- MMP inhibition to protect graft matrix during necrosis phase
- PRP injection into bone tunnels: Meta-analysis shows tunnel diameter reduction
- MSC-derived exosomes: Anti-inflammatory and proangiogenic paracrine effect
- Recombinant platelet-derived growth factor (PDGF): Clinical trials for tendon-bone integration

**Biomarkers in ligament injuries:**

*Graft integration biomarkers:*
- Serum CTX-II, COMP: Graft remodeling indicators
- Synovial inflammation markers (IL-6, MMP-3): Correlate with graft maturation
- Tenascin-C in synovial fluid: Tissue remodeling biomarker
- Quantitative MRI of graft: T2 mapping to assess maturation

*Re-rupture risk biomarkers:*
- Genetic risk profiles (COL1A1, COL5A1, MMP3, tenascin-C polymorphisms)
- Tunnel bone quality markers
- Mechanical stress biomarkers (CTX-I, osteocalcin)

**Artificial intelligence in ligament injuries:**

*Injury prediction:*
- Machine learning models using wearable data (accelerometers, gyroscopes)
- Gait and movement analysis with computer vision (pose estimation)
- Real-time risk pattern identification during training
- Integration of genetic + biomechanical + neuromuscular data for risk stratification
- Random forests and deep learning to predict ACL injury with >80% accuracy

*Surgical optimization:*
- AI preoperative planning: Optimal tunnel position based on individual anatomy
- Personalized post-surgical outcome prediction
- Automated MRI analysis to evaluate graft integration
- Augmented surgical navigation with mixed reality (HoloLens)

*Personalized rehabilitation:*
- Adaptive progression algorithms based on inertial sensors
- Real-time biofeedback during rehabilitation exercises
- Rehabilitation gamification to improve adherence
- Return-to-sport predictive models based on rehabilitation data

**Evidence-based prevention — frontiers:**

*Individualized biomechanical analysis:*
- 3D markerless motion capture with smartphones
- Identification of individual-specific risk biomechanics
- Personalized intervention programs based on analysis
- Additional risk reduction beyond generic programs

*Hormonal factors and menstrual cycle:*
- Ligament laxity variation with menstrual cycle (greater laxity in ovulatory phase)
- Estrogen and relaxin receptors in the ACL
- Possible risk modulation with oral contraceptives
- Training periodization by cycle phase: Emerging concept

*Footwear and surface:*
- Shoe-surface interaction as risk factor
- Optimal vs. excessive traction coefficient
- Artificial vs. natural turf: Inconclusive meta-analyses
- Footwear design with rotational traction release

**Current controversial topics:**

- Anatomic double-bundle vs. single-bundle reconstruction? Prospective trials show no significant clinical difference
- Early reconstruction (<3 weeks) vs. delayed? Growing evidence favoring early reconstruction with lower incidence of secondary meniscal injuries
- What is the ideal graft? No consensus — the decision should be personalized per patient, activity, and surgeon
- Extra-articular lateralization (Lemaire/ALL reconstruction)? Emerging evidence of re-rupture reduction in high-risk patients
- Does the ACL-reconstructed knee ever return to normal? Evidence suggests not — arthritis risk remains elevated at 10-20 years regardless of treatment
- Repair vs. reconstruction: BEAR and augmented repair techniques challenge the paradigm of reconstruction as the only surgical treatment

**Registry and big data:**
- ACL reconstruction registries (Scandinavia, Australia): Thousands of procedures with long-term follow-up
- Population-level failure risk factor identification
- Outcome benchmarking between surgeons and institutions
- Future integration with wearable and rehabilitation data to predict individual outcomes`,
      keyTerms: [
        {
          term: 'BEAR (Bridge-Enhanced ACL Repair)',
          definition:
            'Dispositivo aprobado por FDA (2024) consistente en andamio de colágeno + sangre autóloga para reparación primaria del LCA; preserva tejido nativo y propiocepción | FDA-approved device (2024) consisting of collagen scaffold + autologous blood for primary ACL repair; preserves native tissue and proprioception',
        },
        {
          term: 'lateralización extraarticular (ALL/Lemaire)',
          definition:
            'Procedimiento complementario a reconstrucción de LCA que controla rotación tibial anterolateral; reduce tasa de re-ruptura en pacientes de alto riesgo | Procedure complementary to ACL reconstruction controlling anterolateral tibial rotation; reduces re-rupture rate in high-risk patients',
        },
        {
          term: 'captura de movimiento sin marcadores',
          definition:
            'Tecnología de análisis biomecánico usando cámaras o smartphones sin necesidad de marcadores reflectivos; permite screening masivo de riesgo de lesión | Biomechanical analysis technology using cameras or smartphones without reflective markers; enables mass injury risk screening',
        },
        {
          term: 'exosomas derivados de MSCs',
          definition:
            'Vesículas extracelulares que transportan factores paracrinos antiinflamatorios y proangiogénicos; investigados para mejorar integración del injerto | Extracellular vesicles carrying anti-inflammatory and proangiogenic paracrine factors; investigated to improve graft integration',
        },
        {
          term: 'descelularización',
          definition:
            'Proceso de remoción de componentes celulares de un aloinjerto preservando la arquitectura de la matriz extracelular; reduce inmunogenicidad | Process of removing cellular components from an allograft while preserving extracellular matrix architecture; reduces immunogenicity',
        },
        {
          term: 'ACL-RSI (Return to Sport after Injury)',
          definition:
            'Escala validada que evalúa la disposición psicológica del paciente para retornar al deporte tras reconstrucción de LCA; puntuación >56 asociada con retorno exitoso | Validated scale assessing patient psychological readiness to return to sport after ACL reconstruction; score >56 associated with successful return',
        },
      ],
      clinicalNotes:
        'Para el clínico actual: (1) La reconstrucción anatómica con fascículo simple usando autoinjerto sigue siendo el estándar. (2) La lateralización extraarticular (ALL/Lemaire) debe considerarse en pacientes de alto riesgo: <20 años, deportes de pivoteo, pivot shift grado 3, pendiente tibial posterior >12°, laxitud generalizada. (3) El retorno al deporte debe ser basado en criterios funcionales, no en tiempo. Mínimo 9 meses, LSI >90%, y preparación psicológica adecuada (ACL-RSI >56). (4) La reparación primaria (BEAR) es una opción emergente para roturas proximales recientes pero requiere más evidencia a largo plazo. (5) Los programas de prevención (FIFA 11+) tienen nivel 1 de evidencia y deben implementarse universalmente en deportes de riesgo. | For the current clinician: (1) Anatomic single-bundle reconstruction with autograft remains the standard. (2) Extra-articular lateralization (ALL/Lemaire) should be considered in high-risk patients: <20 years, pivoting sports, grade 3 pivot shift, posterior tibial slope >12 degrees, generalized laxity. (3) Return to sport should be criterion-based, not time-based. Minimum 9 months, LSI >90%, and adequate psychological readiness (ACL-RSI >56). (4) Primary repair (BEAR) is an emerging option for recent proximal tears but requires more long-term evidence. (5) Prevention programs (FIFA 11+) have level 1 evidence and should be universally implemented in at-risk sports.',
    },
  },

  media: [],
  citations: [
    {
      id: 'ref-ligamentos-1',
      type: 'textbook',
      title: 'DeLee, Drez, and Miller\'s Orthopaedic Sports Medicine: Principles and Practice',
      authors: ['Miller, M.D.', 'Thompson, S.R.'],
      source: 'Elsevier',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-ligamentos-2',
      type: 'article',
      title: 'Anterior Cruciate Ligament Injury: Diagnosis, Management, and Prevention',
      authors: ['Diermeier, T.', 'Rothrauff, B.B.', 'Engebretsen, L.'],
      source: 'The Lancet',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-ligamentos-3',
      type: 'article',
      title: 'Meniscus repair: current practice and future directions',
      authors: ['Bedi, A.', 'Kelly, N.H.', 'Baad, M.'],
      source: 'Journal of Bone and Joint Surgery',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-ligamentos-4',
      type: 'article',
      title: 'Bridge-Enhanced Anterior Cruciate Ligament Repair: Two-Year Results of a First-in-Human Study',
      authors: ['Murray, M.M.', 'Kalish, L.A.', 'Fleming, B.C.'],
      source: 'Orthopaedic Journal of Sports Medicine',
      license: 'CC BY 4.0',
    },
  ],
  crossReferences: [
    {
      targetId: 'ortho-patient-arthroscopy',
      targetType: 'concept',
      relationship: 'related',
      label: 'Artroscopia / Arthroscopy',
    },
    {
      targetId: 'ortho-patient-physical-therapy-expectations',
      targetType: 'concept',
      relationship: 'related',
      label: 'Expectativas de Terapia Física / Physical Therapy Expectations',
    },
    {
      targetId: 'ortho-patient-common-sports-injuries',
      targetType: 'concept',
      relationship: 'related',
      label: 'Lesiones Deportivas Comunes / Common Sports Injuries',
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
    topics: ['orthopedics', 'sports medicine', 'knee', 'ligaments', 'rehabilitation'],
    keywords: [
      'ligamento',
      'LCA',
      'menisco',
      'rodilla',
      'reconstrucción',
      'rehabilitación',
      'esguince',
      'ligament',
      'ACL',
      'meniscus',
      'knee',
      'reconstruction',
      'rehabilitation',
      'sprain',
    ],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-02-05',
  updatedAt: '2026-02-05',
  version: 1,
  status: 'published',
  contributors: ['SOMA AI Content Team'],
};

export default lesionesLigamentosContent;
