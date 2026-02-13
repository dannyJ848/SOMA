/**
 * Resonancia Magnetica / MRI - Principles, Sequences, and Clinical Uses
 *
 * Comprehensive educational content covering MRI physics, pulse sequences,
 * contrast agents, clinical indications by organ system, and advanced
 * applications including functional MRI and diffusion tensor imaging.
 *
 * Spanish-first with English translations.
 */

import { EducationalContent } from '../types';

export const resonanciaMagneticaMri: EducationalContent = {
  id: 'topic-mri-principles',
  type: 'topic',
  name: 'Resonancia Magnetica - Principios, Secuencias y Usos Clinicos | MRI - Principles, Sequences, and Clinical Uses',
  nameEs: 'Resonancia Magnetica',
  alternateNames: [
    'MRI',
    'RM',
    'RMN',
    'Resonancia Magnetica Nuclear',
    'Magnetic Resonance Imaging',
    'IRM',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'La resonancia magnetica (RM) es una prueba que usa imanes y ondas de radio para crear imagenes muy detalladas del interior del cuerpo, sin usar radiacion. | MRI is a test that uses magnets and radio waves to create very detailed images of the inside of the body, without using radiation.',
      explanation: `## Que es la resonancia magnetica? | What is MRI?

La resonancia magnetica, o RM, es una prueba de imagen que crea fotos muy detalladas de los organos, musculos, cerebro y otras partes blandas del cuerpo. Lo mejor de todo: no usa radiacion como los rayos X. | MRI is an imaging test that creates very detailed pictures of organs, muscles, brain, and other soft parts of the body. Best of all: it does not use radiation like X-rays.

### Como funciona (version simple)? | How does it work (simple version)?

Su cuerpo esta hecho principalmente de agua, y el agua tiene atomos de hidrogeno. | Your body is mostly made of water, and water has hydrogen atoms.

1. **La maquina tiene un iman muy poderoso | The machine has a very powerful magnet** - Alinea los atomos de hidrogeno de su cuerpo | It aligns the hydrogen atoms in your body
2. **Envia ondas de radio | It sends radio waves** - Estas ondas hacen que los atomos se muevan | These waves cause the atoms to move
3. **Los atomos responden | The atoms respond** - Cuando los atomos vuelven a su posicion, envian senales | When atoms return to their position, they send signals
4. **La computadora crea la imagen | The computer creates the image** - Usando las senales, crea fotos detalladas | Using the signals, it creates detailed pictures

### Como es la experiencia? | What is the experience like?

- **La maquina:** Es como un tunel largo. Usted se acuesta en una camilla que entra en el tunel. | It is like a long tunnel. You lie on a table that enters the tunnel.
- **El ruido:** La maquina hace golpes y zumbidos fuertes. Le daran tapones o audifonos con musica. | The machine makes loud banging and humming. They will give you earplugs or headphones with music.
- **Duracion:** De 30 a 90 minutos, dependiendo del estudio. | 30 to 90 minutes, depending on the study.
- **Debe estar quieto:** Es muy importante no moverse para que las fotos salgan claras. | It is very important to not move so the pictures come out clear.
- **No duele:** Solo puede sentir el ruido y, a veces, un poco de calor. | It does not hurt. You may only notice the noise and sometimes a little warmth.

### Contraste (gadolinio) | Contrast (gadolinium)

A veces necesitan inyectar un liquido especial llamado gadolinio: | Sometimes they need to inject a special liquid called gadolinium:
- Ayuda a ver mejor ciertos tejidos y tumores | It helps see certain tissues and tumors better
- Es diferente al contraste de la TC | It is different from CT contrast
- Informe si tiene problemas de rinon (esto es importante) | Tell them if you have kidney problems (this is important)

### Para que se usa? | What is it used for?

- **Cerebro:** Dolores de cabeza, convulsiones, problemas de memoria | Brain: Headaches, seizures, memory problems
- **Columna vertebral:** Dolor de espalda, hernias de disco | Spine: Back pain, disc herniation
- **Articulaciones:** Lesiones de rodilla, hombro, tobillo | Joints: Knee, shoulder, ankle injuries
- **Corazon:** Problemas cardiacos que necesitan imagenes detalladas | Heart: Heart problems needing detailed images
- **Abdomen:** Problemas de higado, pancreas, rinones | Abdomen: Liver, pancreas, kidney problems
- **Cancer:** Ver tumores con mucho detalle | Cancer: See tumors in great detail

### Cosas importantes que recordar | Important things to remember

- **Metales:** No puede entrar con objetos metalicos (joyas, piercings, implantes metalicos) porque el iman es muy fuerte | You cannot enter with metal objects (jewelry, piercings, metal implants) because the magnet is very strong
- **Marcapasos:** Informe si tiene marcapasos, valvulas metalicas, o clips quirurgicos | Tell them if you have a pacemaker, metal valves, or surgical clips
- **Embarazo:** Digale al doctor si esta embarazada | Tell the doctor if you are pregnant
- **Claustrofobia:** Si tiene miedo a espacios cerrados, hay opciones como maquinas abiertas o medicinas para relajarse | If you are afraid of enclosed spaces, there are options like open machines or relaxation medicine`,
      keyTerms: [
        {
          term: 'resonancia magnetica (RM) | MRI',
          definition: 'Una prueba que usa imanes y ondas de radio (no radiacion) para crear imagenes detalladas del interior del cuerpo. Es especialmente buena para ver tejidos blandos como el cerebro, musculos y articulaciones. | A test using magnets and radio waves (not radiation) to create detailed images of the inside of the body. Especially good for seeing soft tissues like the brain, muscles, and joints.',
        },
        {
          term: 'iman | magnet',
          definition: 'La parte mas importante de la maquina de RM. Es miles de veces mas fuerte que un iman de refrigerador. | The most important part of the MRI machine. It is thousands of times stronger than a refrigerator magnet.',
        },
        {
          term: 'gadolinio | gadolinium',
          definition: 'Un liquido especial que se inyecta en la vena para mejorar las imagenes de RM. Es diferente al contraste de la TC y generalmente es muy seguro. | A special liquid injected into the vein to improve MRI images. It is different from CT contrast and is generally very safe.',
        },
        {
          term: 'claustrofobia | claustrophobia',
          definition: 'Miedo a los espacios cerrados. Algunas personas sienten ansiedad dentro del tunel de la RM. Existen opciones para ayudar. | Fear of enclosed spaces. Some people feel anxious inside the MRI tunnel. Options exist to help.',
        },
      ],
      analogies: [
        'El iman de la RM es como un director de orquesta que pone a todos los musicos (atomos de hidrogeno) tocando en la misma direccion. Cuando deja de dirigir, cada musico vuelve a su ritmo diferente, y ese patron de ritmos crea la imagen. | The MRI magnet is like an orchestra conductor who gets all the musicians (hydrogen atoms) playing in the same direction. When the conductor stops, each musician returns to their own rhythm, and that pattern of rhythms creates the image.',
        'La RM es como poner su cabeza bajo el agua en la piscina: diferentes partes de su cuerpo hacen diferentes sonidos debajo del agua, y la maquina puede oir esas diferencias para saber que hay adentro. | MRI is like putting your head underwater in a pool: different parts of your body make different sounds underwater, and the machine can hear those differences to know what is inside.',
      ],
      examples: [
        'Un deportista con dolor de rodilla despues de un giro brusco necesita una RM para ver si se rompio un ligamento o menisco, porque la radiografia solo muestra los huesos. | An athlete with knee pain after a sudden twist needs an MRI to see if they tore a ligament or meniscus, because X-ray only shows bones.',
        'Una persona con dolores de cabeza frecuentes y cambios en la vision se hace una RM del cerebro para asegurarse de que no haya un tumor u otra causa. | A person with frequent headaches and vision changes gets a brain MRI to make sure there is no tumor or other cause.',
      ],
    },
    2: {
      level: 2,
      summary: 'La RM utiliza campos magneticos y pulsos de radiofrecuencia para generar imagenes de alto contraste en tejidos blandos, con secuencias principales T1, T2, FLAIR y difusion que proporcionan informacion complementaria para el diagnostico de patologia cerebral, musculoesqueletica, abdominal y cardiaca. | MRI uses magnetic fields and radiofrequency pulses to generate high soft-tissue contrast images, with main sequences T1, T2, FLAIR, and diffusion providing complementary information for diagnosing brain, musculoskeletal, abdominal, and cardiac pathology.',
      explanation: `## Fundamentos de la RM | MRI Fundamentals

### El Concepto Basico | The Basic Concept

Los protones de hidrogeno (H+) en el cuerpo se comportan como pequenos imanes. En la vida diaria estan orientados al azar. Cuando se colocan en el campo magnetico de la RM: | Hydrogen protons (H+) in the body behave like tiny magnets. In daily life they are randomly oriented. When placed in the MRI magnetic field:

1. Se alinean con el campo magnetico (como brujulas apuntando al norte) | They align with the magnetic field (like compasses pointing north)
2. Un pulso de radiofrecuencia (RF) los "empuja" fuera de alineacion | A radiofrequency (RF) pulse "pushes" them out of alignment
3. Al regresar a su alineacion original, emiten senales | As they return to their original alignment, they emit signals
4. La velocidad de regreso varia segun el tipo de tejido | The speed of return varies by tissue type
5. Estas diferencias crean el contraste en la imagen | These differences create the contrast in the image

### Secuencias Principales | Main Sequences

**T1 (tiempo de relajacion longitudinal) | T1 (longitudinal relaxation time):**
- **Grasa:** Brillante (hiperintensa) | Fat: Bright (hyperintense)
- **Agua/liquido:** Oscura (hipointensa) | Water/fluid: Dark (hypointense)
- **Mejor para:** Anatomia detallada, lesiones con gadolinio | Best for: Detailed anatomy, gadolinium-enhanced lesions
- Regla nemotecnica: T1 = "one" = anatomia (anatomy) | Mnemonic: T1 = "one" = anatomy

**T2 (tiempo de relajacion transversal) | T2 (transverse relaxation time):**
- **Agua/liquido:** Brillante (hiperintensa) | Water/fluid: Bright (hyperintense)
- **Grasa:** Intermedia a brillante | Fat: Intermediate to bright
- **Mejor para:** Detectar patologia (edema, inflamacion, tumores) | Best for: Detecting pathology (edema, inflammation, tumors)
- Regla nemotecnica: T2 = "two" = patologia (pathology) | Mnemonic: T2 = "two" = pathology

**FLAIR (Fluid Attenuated Inversion Recovery):**
- Como T2 pero el liquido cefalorraquideo (LCR) aparece oscuro | Like T2 but cerebrospinal fluid (CSF) appears dark
- Excelente para: Lesiones periventiculares, esclerosis multiple, infartos subagudos | Excellent for: Periventricular lesions, multiple sclerosis, subacute infarcts

**Difusion (DWI) | Diffusion (DWI):**
- Detecta el movimiento del agua a nivel molecular | Detects water movement at the molecular level
- **Difusion restringida** (brillante en DWI, oscura en ADC): Infarto agudo, absceso, tumor de alta celularidad | Restricted diffusion (bright on DWI, dark on ADC): Acute infarct, abscess, highly cellular tumor
- Uso critico en ictus agudo | Critical use in acute stroke

### Apariencia de Estructuras Comunes | Appearance of Common Structures

| Estructura | T1 | T2 |
|-----------|-----|-----|
| Grasa | Brillante | Intermedia-Brillante | Fat | Bright | Intermediate-Bright |
| Agua/LCR | Oscura | Brillante | Water/CSF | Dark | Bright |
| Musculo | Gris intermedio | Oscura | Muscle | Intermediate gray | Dark |
| Hueso cortical | Oscura | Oscura (sin senal) | Cortical bone | Dark | Dark (no signal) |
| Sangre aguda | Oscura | Oscura | Acute blood | Dark | Dark |
| Sangre subaguda precoz | Brillante | Oscura | Early subacute blood | Bright | Dark |
| Sangre subaguda tardia | Brillante | Brillante | Late subacute blood | Bright | Bright |

### Estudios Comunes de RM | Common MRI Studies

**RM Cerebral | Brain MRI:**
- Indicaciones: ACV, tumores, esclerosis multiple, epilepsia, demencia | Indications: Stroke, tumors, MS, epilepsy, dementia
- Secuencias: T1, T2, FLAIR, DWI, T1 con gadolinio | Sequences: T1, T2, FLAIR, DWI, T1 with gadolinium

**RM de Columna | Spine MRI:**
- Indicaciones: Hernia discal, estenosis, tumores, infeccion | Indications: Disc herniation, stenosis, tumors, infection
- El gold standard para evaluar compresion medular y radicular | Gold standard for evaluating cord and nerve root compression

**RM Musculoesqueletica | Musculoskeletal MRI:**
- Rodilla: Meniscos, ligamentos cruzados, cartilago | Knee: Menisci, cruciate ligaments, cartilage
- Hombro: Manguito rotador, labrum | Shoulder: Rotator cuff, labrum
- Tobillo: Tendones, ligamentos | Ankle: Tendons, ligaments

**RM Abdominal | Abdominal MRI:**
- Higado: Lesiones focales, cirrosis, hierro | Liver: Focal lesions, cirrhosis, iron
- Pancreas: Tumores, pancreatitis cronica | Pancreas: Tumors, chronic pancreatitis
- Colangiopancreatografia por RM (CPRM): Via biliar sin procedimiento invasivo | MRCP: Biliary system without invasive procedure`,
      keyTerms: [
        {
          term: 'T1 | T1-weighted',
          definition: 'Secuencia de RM donde la grasa se ve brillante y el agua se ve oscura. Es la mejor secuencia para ver la anatomia y evaluar realce con gadolinio. | MRI sequence where fat appears bright and water appears dark. Best sequence for anatomy and gadolinium enhancement evaluation.',
        },
        {
          term: 'T2 | T2-weighted',
          definition: 'Secuencia de RM donde el agua y los liquidos se ven brillantes. Excelente para detectar patologia como edema, inflamacion y tumores. | MRI sequence where water and fluids appear bright. Excellent for detecting pathology such as edema, inflammation, and tumors.',
        },
        {
          term: 'FLAIR',
          definition: 'Secuencia similar a T2 pero que suprime la senal del liquido cefalorraquideo, haciendolo oscuro. Ideal para ver lesiones cerebrales cerca de los ventriculos. | Sequence similar to T2 but suppressing cerebrospinal fluid signal, making it dark. Ideal for seeing brain lesions near the ventricles.',
          pronunciation: 'FLER',
        },
        {
          term: 'difusion (DWI) | diffusion (DWI)',
          definition: 'Secuencia que detecta el movimiento del agua a nivel celular. Los infartos cerebrales agudos y los abscesos restringen la difusion y se ven brillantes. | Sequence detecting water movement at the cellular level. Acute brain infarcts and abscesses restrict diffusion and appear bright.',
        },
        {
          term: 'gadolinio | gadolinium',
          definition: 'Agente de contraste para RM que se inyecta por via intravenosa. Las lesiones que captan gadolinio se ven brillantes en T1, indicando vascularidad aumentada o ruptura de la barrera hematoencefalica. | MRI contrast agent injected intravenously. Lesions enhancing with gadolinium appear bright on T1, indicating increased vascularity or blood-brain barrier breakdown.',
        },
      ],
      analogies: [
        'T1 y T2 son como ver la misma habitacion con dos tipos de lentes: con lentes T1, las cosas grasosas brillan; con lentes T2, las cosas acuosas brillan. Diferentes lentes revelan diferentes detalles. | T1 and T2 are like viewing the same room with two types of lenses: with T1 lenses, fatty things glow; with T2 lenses, watery things glow. Different lenses reveal different details.',
        'La difusion restringida en un infarto es como un embotellamiento de trafico: las moleculas de agua no pueden moverse libremente porque las celulas hinchadas bloquean el camino. | Restricted diffusion in an infarct is like a traffic jam: water molecules cannot move freely because swollen cells block the way.',
      ],
    },
    3: {
      level: 3,
      summary: 'La RM genera contraste intrinseco excepcional mediante la manipulacion de tiempos de relajacion T1 y T2 de los protones de hidrogeno, con secuencias especializadas (STIR, GRE, SWI, espectroscopia, perfusion) que proporcionan informacion tisular, funcional y metabolica para diagnostico diferencial avanzado. | MRI generates exceptional intrinsic contrast through manipulation of hydrogen proton T1 and T2 relaxation times, with specialized sequences (STIR, GRE, SWI, spectroscopy, perfusion) providing tissue, functional, and metabolic information for advanced differential diagnosis.',
      explanation: `## Fisica de la RM: Nivel Intermedio | MRI Physics: Intermediate Level

### Magnetismo Nuclear | Nuclear Magnetism

**Precesion y frecuencia de Larmor: | Precession and Larmor frequency:**
- Los protones precesan (giran como un trompo) alrededor del eje del campo magnetico B0 | Protons precess (spin like a top) around the axis of the B0 magnetic field
- Frecuencia de precesion = frecuencia de Larmor: omega = gamma x B0 | Precession frequency = Larmor frequency: omega = gamma x B0
- gamma (razon giromagnetica del hidrogeno) = 42.58 MHz/T | gamma (hydrogen gyromagnetic ratio) = 42.58 MHz/T
- A 1.5T: 63.87 MHz; a 3T: 127.74 MHz | At 1.5T: 63.87 MHz; at 3T: 127.74 MHz

**Magnetizacion neta: | Net magnetization:**
- Ligero exceso de protones alineados con B0 (estado de menor energia) | Slight excess of protons aligned with B0 (lower energy state)
- Solo ~3 por millon extra a 1.5T, pero suficientes para generar senal | Only ~3 per million extra at 1.5T, but enough to generate signal
- Mayor campo = mas protones alineados = mejor senal (razon para 3T y 7T) | Higher field = more aligned protons = better signal (reason for 3T and 7T)

### Relajacion | Relaxation

**T1 (relajacion longitudinal / spin-lattice): | T1 (longitudinal / spin-lattice relaxation):**
- Tiempo que tarda la magnetizacion longitudinal en recuperar el 63% de su valor de equilibrio | Time for longitudinal magnetization to recover 63% of its equilibrium value
- Depende de la interaccion del proton con su entorno molecular (lattice) | Depends on proton interaction with its molecular environment (lattice)
- Grasa: T1 corto (moleculas medianas, frecuencia cercana a Larmor) -> brillante | Fat: Short T1 (medium molecules, frequency near Larmor) -> bright
- Agua: T1 largo (moleculas pequenas, movimiento rapido) -> oscura | Water: Long T1 (small molecules, rapid motion) -> dark

**T2 (relajacion transversal / spin-spin): | T2 (transverse / spin-spin relaxation):**
- Tiempo que tarda la magnetizacion transversal en decaer al 37% de su valor maximo | Time for transverse magnetization to decay to 37% of its maximum value
- Depende de la interaccion entre protones vecinos | Depends on interaction between neighboring protons
- Agua: T2 largo -> senal persiste -> brillante | Water: Long T2 -> signal persists -> bright
- Solidos/proteinas: T2 muy corto -> senal decae rapido -> oscura | Solids/proteins: Very short T2 -> signal decays quickly -> dark

### Secuencias de Pulso Avanzadas | Advanced Pulse Sequences

**STIR (Short Tau Inversion Recovery):**
- Suprime la senal de grasa usando un pulso de inversion a TI = 0.69 x T1 de la grasa | Suppresses fat signal using inversion pulse at TI = 0.69 x T1 of fat
- TI ~150 ms a 1.5T | TI ~150 ms at 1.5T
- Uso: Edema oseo, patologia musculoesqueletica, lesiones con edema | Use: Bone edema, musculoskeletal pathology, edematous lesions

**GRE (Gradient Recalled Echo) | Eco de gradiente:**
- Usa gradientes en lugar de pulsos de refocalizacion de 180 grados | Uses gradients instead of 180-degree refocusing pulses
- Mas rapido que spin echo | Faster than spin echo
- Sensible a efectos de susceptibilidad magnetica (sangre, calcio, aire) | Sensitive to magnetic susceptibility effects (blood, calcium, air)
- Variantes: FLASH, FISP, TrueFISP, balanced SSFP | Variants: FLASH, FISP, TrueFISP, balanced SSFP

**SWI (Susceptibility Weighted Imaging) | Imagen ponderada en susceptibilidad:**
- Explota las diferencias de susceptibilidad magnetica entre tejidos | Exploits magnetic susceptibility differences between tissues
- Excelente para: Microhemorragias, malformaciones vasculares, calcificaciones | Excellent for: Microbleeds, vascular malformations, calcifications
- Mas sensible que GRE convencional para sangrado | More sensitive than conventional GRE for bleeding

**Espectroscopia por RM (MRS) | MR Spectroscopy:**
- Detecta metabolitos especificos en un volumen de tejido | Detects specific metabolites in a tissue volume
- Picos principales: NAA (neuronal), colina (membranas), creatina (energia), lactato | Main peaks: NAA (neuronal), choline (membranes), creatine (energy), lactate
- Tumor cerebral: Colina aumentada, NAA disminuido | Brain tumor: Increased choline, decreased NAA
- Diferenciacion: Tumor vs radionecrosis, grado tumoral | Differentiation: Tumor vs radionecrosis, tumor grading

## Contraste con Gadolinio: Detalle | Gadolinium Contrast: Detail

### Farmacologia | Pharmacology

**Agentes extracelulares (los mas usados): | Extracellular agents (most commonly used):**
- Gadopentetato (Magnevist), gadobutrol (Gadavist), gadoterato (Dotarem) | Gadopentetate (Magnevist), gadobutrol (Gadavist), gadoterate (Dotarem)
- Se distribuyen en espacio intravascular y extravascular extracelular | Distribute in intravascular and extravascular extracellular space
- Excrecion renal | Renal excretion

**Agentes hepatobiliares: | Hepatobiliary agents:**
- Acido gadoxetico (Primovist/Eovist): Captado por hepatocitos, excrecion biliar | Gadoxetic acid (Primovist/Eovist): Taken up by hepatocytes, biliary excretion
- Fase hepatobiliar (15-20 min): Parenquima hepatico brillante, lesiones no hepatocitarias oscuras | Hepatobiliary phase (15-20 min): Bright liver parenchyma, non-hepatocyte lesions dark
- Diferenciacion: Hiperplasia nodular focal (capta) vs adenoma (no capta) | Differentiation: Focal nodular hyperplasia (enhances) vs adenoma (does not enhance)

### Seguridad del Gadolinio | Gadolinium Safety

- **Fibrosis nefrogenica sistemica (FNS):** Rara, asociada con agentes lineales en IRC severa (TFGe <30) | Nephrogenic systemic fibrosis (NSF): Rare, associated with linear agents in severe CKD (eGFR <30)
- **Agentes macrociclicos preferidos:** Menor riesgo de deposito tisular | Macrocyclic agents preferred: Lower risk of tissue deposition
- **Deposito cerebral de gadolinio:** Descrito con agentes lineales; significado clinico incierto | Brain gadolinium deposition: Described with linear agents; clinical significance uncertain
- **Embarazo:** Evitar gadolinio; usar solo si beneficio supera riesgo | Pregnancy: Avoid gadolinium; use only if benefit outweighs risk

## Protocolos Clinicos por Organo | Clinical Protocols by Organ

### RM Cerebral Avanzada | Advanced Brain MRI

**Protocolo para esclerosis multiple (McDonald 2017): | Multiple sclerosis protocol (McDonald 2017):**
- T2/FLAIR: Lesiones hiperintensas periventriculares, yuxtacorticales, infratentoriales, medulares | T2/FLAIR: Periventricular, juxtacortical, infratentorial, spinal hyperintense lesions
- T1 con gadolinio: Lesiones activas (realce) vs inactivas | T1 with gadolinium: Active lesions (enhancing) vs inactive
- Criterios de diseminacion en espacio y tiempo | Dissemination in space and time criteria

**RM funcional (fMRI) | Functional MRI:**
- Basada en el efecto BOLD (Blood Oxygen Level Dependent) | Based on BOLD (Blood Oxygen Level Dependent) effect
- Mapea areas cerebrales activas durante tareas | Maps active brain areas during tasks
- Uso prequirurgico: Localizar areas elocuentes (lenguaje, motor) | Presurgical use: Localize eloquent areas (language, motor)

### RM Cardiaca | Cardiac MRI

- Evaluacion de funcion ventricular (fraccion de eyeccion precisa) | Ventricular function evaluation (precise ejection fraction)
- Realce tardio con gadolinio: Identifica fibrosis/cicatriz miocardica | Late gadolinium enhancement: Identifies myocardial fibrosis/scar
- Patron de realce: Isquemico (subendocardico) vs no isquemico (mesocardico, epicardico) | Enhancement pattern: Ischemic (subendocardial) vs non-ischemic (mesocardial, epicardial)
- Mapeo T1/T2: Cuantificacion de edema e infiltracion | T1/T2 mapping: Edema and infiltration quantification

### RM Hepatica | Liver MRI

- Secuencia en fase/fuera de fase: Deteccion de grasa intracelular (esteatosis, adenoma) | In-phase/out-of-phase: Intracellular fat detection (steatosis, adenoma)
- Dinamica con gadolinio: Caracterizacion de lesiones focales (LI-RADS) | Dynamic gadolinium: Focal lesion characterization (LI-RADS)
- Cuantificacion de hierro: Secuencias T2* | Iron quantification: T2* sequences
- Elastografia por RM: Cuantificacion de fibrosis hepatica | MR elastography: Liver fibrosis quantification`,
      keyTerms: [
        {
          term: 'frecuencia de Larmor | Larmor frequency',
          definition: 'La frecuencia a la que precesan los protones de hidrogeno en un campo magnetico dado. Es proporcional a la intensidad del campo (42.58 MHz/T). El pulso de RF debe emitirse a esta frecuencia para producir resonancia. | The frequency at which hydrogen protons precess in a given magnetic field. Proportional to field strength (42.58 MHz/T). The RF pulse must be emitted at this frequency to produce resonance.',
          pronunciation: 'lar-MOR',
        },
        {
          term: 'STIR (Short Tau Inversion Recovery)',
          definition: 'Secuencia de RM que suprime la senal de la grasa mediante un pulso de inversion, haciendo que los tejidos con edema resalten brillantemente sobre un fondo oscuro. | MRI sequence suppressing fat signal through an inversion pulse, making edematous tissues stand out brightly against a dark background.',
        },
        {
          term: 'SWI (imagen ponderada en susceptibilidad) | SWI (susceptibility weighted imaging)',
          definition: 'Secuencia de RM ultrasensible a diferencias de susceptibilidad magnetica, ideal para detectar microhemorragias cerebrales, calcificaciones, y malformaciones vasculares. | MRI sequence ultrasensitive to magnetic susceptibility differences, ideal for detecting cerebral microbleeds, calcifications, and vascular malformations.',
        },
        {
          term: 'espectroscopia por RM (MRS) | MR spectroscopy',
          definition: 'Tecnica de RM que analiza los metabolitos quimicos en un volumen de tejido. El perfil metabolico ayuda a diferenciar tumores de otras lesiones y a graduar malignidad. | MRI technique analyzing chemical metabolites in a tissue volume. The metabolic profile helps differentiate tumors from other lesions and grade malignancy.',
        },
        {
          term: 'fibrosis nefrogenica sistemica (FNS) | nephrogenic systemic fibrosis (NSF)',
          definition: 'Condicion rara pero grave de fibrosis cutanea y organica asociada con la exposicion a agentes de gadolinio lineales en pacientes con insuficiencia renal severa (TFGe <30 mL/min). | Rare but serious condition of cutaneous and organ fibrosis associated with exposure to linear gadolinium agents in patients with severe renal insufficiency (eGFR <30 mL/min).',
        },
        {
          term: 'realce tardio con gadolinio | late gadolinium enhancement (LGE)',
          definition: 'Tecnica de RM cardiaca que adquiere imagenes 10-15 minutos despues de inyectar gadolinio para detectar fibrosis y cicatriz miocardica, diferenciando patrones isquemicos de no isquemicos. | Cardiac MRI technique acquiring images 10-15 minutes after gadolinium injection to detect myocardial fibrosis and scar, differentiating ischemic from non-ischemic patterns.',
        },
      ],
      clinicalNotes: 'La seleccion de secuencias debe guiarse por la pregunta clinica. Para ictus agudo, DWI es la secuencia mas importante (detecta infarto en minutos). Para esclerosis multiple, FLAIR y T1 con gadolinio son esenciales (diseminacion en espacio y tiempo). Para lesiones hepaticas en higado cirrotico, el protocolo debe incluir fases dinamicas y secuencia hepatobiliar si se usa Eovist. La seguridad del gadolinio en insuficiencia renal ha mejorado con agentes macrociclicos, pero aun se requiere evaluacion de TFGe. | Sequence selection should be guided by the clinical question. For acute stroke, DWI is the most important sequence (detects infarct within minutes). For MS, FLAIR and T1 with gadolinium are essential (dissemination in space and time). For liver lesions in cirrhotic liver, the protocol should include dynamic phases and hepatobiliary sequence if using Eovist. Gadolinium safety in renal insufficiency has improved with macrocyclic agents, but eGFR assessment is still required.',
    },
    4: {
      level: 4,
      summary: 'Los protocolos avanzados de RM integran secuencias funcionales (perfusion, difusion tensorial, espectroscopia) con tecnicas de aceleracion (compresion sensada, imagen paralela) y campos ultra-altos (7T) para proporcionar informacion microestructural, metabolica y funcional que transforma el diagnostico diferencial y la planificacion terapeutica. | Advanced MRI protocols integrate functional sequences (perfusion, diffusion tensor, spectroscopy) with acceleration techniques (compressed sensing, parallel imaging) and ultra-high fields (7T) to provide microstructural, metabolic, and functional information transforming differential diagnosis and therapeutic planning.',
      explanation: `## Imagen de Difusion Avanzada | Advanced Diffusion Imaging

### Difusion Tensorial (DTI) | Diffusion Tensor Imaging

**Principio: | Principle:**
- La difusion del agua en la sustancia blanca es anisotropica (direccional a lo largo de los axones) | Water diffusion in white matter is anisotropic (directional along axons)
- DTI mide la difusion en multiples direcciones (minimo 6, tipicamente 30-64 gradientes) | DTI measures diffusion in multiple directions (minimum 6, typically 30-64 gradients)
- Genera mapas de anisotropia fraccional (FA) y tractografia | Generates fractional anisotropy (FA) maps and tractography

**Tractografia: | Tractography:**
- Reconstruccion 3D de tractos de sustancia blanca | 3D reconstruction of white matter tracts
- Planificacion prequirurgica: Relacion del tumor con fasciculos elocuentes (via corticoespinal, fasciculo arcuato) | Presurgical planning: Tumor relationship to eloquent tracts (corticospinal tract, arcuate fasciculus)
- Limitaciones: Artefactos en cruces de fibras, variabilidad algortimica | Limitations: Fiber crossing artifacts, algorithmic variability

**Aplicaciones clinicas: | Clinical applications:**
- Lesion axonal traumatica (disminucion de FA) | Traumatic axonal injury (decreased FA)
- Desmielinizacion (esclerosis multiple, leucodistrofias) | Demyelination (MS, leukodystrophies)
- Maduracion cerebral y neurociencia del desarrollo | Brain maturation and developmental neuroscience
- Conectividad cerebral funcional | Functional brain connectivity

### Modelos Multi-compartimento | Multi-Compartment Models

- **NODDI (Neurite Orientation Dispersion and Density Imaging):** Diferencia densidad de neuritas, orientacion e indice de compartimento libre | Differentiates neurite density, orientation, and free compartment index
- **DKI (Diffusion Kurtosis Imaging):** Cuantifica la no-gaussianidad de la difusion, sensible a microestructura compleja | Quantifies diffusion non-Gaussianity, sensitive to complex microstructure
- **IVIM (Intravoxel Incoherent Motion):** Separa difusion tisular de perfusion microvascular sin contraste | Separates tissue diffusion from microvascular perfusion without contrast

## Perfusion por RM | MR Perfusion

### DSC (Dynamic Susceptibility Contrast) | DSC Perfusion

**Tecnica: | Technique:**
- Bolo rapido de gadolinio, adquisicion T2*/T2 rapida | Rapid gadolinium bolus, fast T2*/T2 acquisition
- Senal cae transitoriamente al pasar el contraste (efecto de susceptibilidad) | Signal transiently drops as contrast passes (susceptibility effect)
- Parametros: CBV relativo (rCBV), CBF, MTT | Parameters: Relative CBV (rCBV), CBF, MTT

**Uso principal: Tumores cerebrales | Main use: Brain tumors:**
- Glioma de alto grado: rCBV elevado (neoangiogenesis) | High-grade glioma: Elevated rCBV (neoangiogenesis)
- Glioma de bajo grado: rCBV bajo | Low-grade glioma: Low rCBV
- Recurrencia tumoral vs radionecrosis: rCBV diferenciador clave | Tumor recurrence vs radionecrosis: rCBV key differentiator

### DCE (Dynamic Contrast Enhanced) | DCE Perfusion

- Adquisicion T1 rapida durante bolo de gadolinio | Rapid T1 acquisition during gadolinium bolus
- Modelado farmacocinetico: Ktrans (permeabilidad), Ve (espacio extravascular) | Pharmacokinetic modeling: Ktrans (permeability), Ve (extravascular space)
- Aplicaciones: Tumores de mama, prostata, cabeza y cuello | Applications: Breast, prostate, head and neck tumors

### ASL (Arterial Spin Labeling) | ASL Perfusion

- Perfusion SIN contraste: Marca magneticamente la sangre arterial | Perfusion WITHOUT contrast: Magnetically labels arterial blood
- Ideal para: Pediatria, enfermedad renal, seguimiento longitudinal, investigacion | Ideal for: Pediatrics, kidney disease, longitudinal follow-up, research
- Limitacion: SNR bajo, sensible a tiempo de transito | Limitation: Low SNR, sensitive to transit time

## Tecnicas de Aceleracion | Acceleration Techniques

### Imagen Paralela | Parallel Imaging

**GRAPPA / SENSE / mSENSE:**
- Usa multiples canales de la bobina receptora para submuestrear el espacio k | Uses multiple coil channels to undersample k-space
- Reduce tiempo de adquisicion por factor de 2-4 | Reduces acquisition time by factor of 2-4
- Coste: Disminucion de SNR proporcional a sqrt(factor de aceleracion) | Cost: SNR decrease proportional to sqrt(acceleration factor)

### Compresion Sensada (Compressed Sensing) | Compressed Sensing

- Submuestreo aleatorio del espacio k + reconstruccion iterativa | Random k-space undersampling + iterative reconstruction
- Factores de aceleracion de 4-10x | 4-10x acceleration factors
- Aplicaciones: RM cardiaca en tiempo real, angiografia 4D, RM fetal | Applications: Real-time cardiac MRI, 4D angiography, fetal MRI
- Cada vez mas integrado en protocolos clinicos de rutina | Increasingly integrated into routine clinical protocols

### Aprendizaje Profundo para Reconstruccion | Deep Learning for Reconstruction

- Redes neuronales entrenadas para reconstruir imagenes de datos submuestreados | Neural networks trained to reconstruct images from undersampled data
- Reduce tiempo de adquisicion manteniendo calidad diagnostica | Reduces acquisition time while maintaining diagnostic quality
- Implementacion activa: AUTOMAP, variational networks, unrolled algorithms | Active implementation: AUTOMAP, variational networks, unrolled algorithms

## RM a Campos Ultra-Altos | Ultra-High Field MRI

### 7 Tesla (7T) | 7 Tesla MRI

**Ventajas: | Advantages:**
- Resolucion espacial submilimetrica | Submillimeter spatial resolution
- Mayor sensibilidad a susceptibilidad: Mejor SWI | Greater susceptibility sensitivity: Better SWI
- Espectroscopia con mayor resolucion espectral | Spectroscopy with higher spectral resolution
- Deteccion de lesiones corticales en esclerosis multiple ("signo del vena central") | Cortical lesion detection in MS ("central vein sign")

**Desafios: | Challenges:**
- Inhomogeneidad de campo B1 (dielectrico) | B1 field inhomogeneity (dielectric)
- Mayor deposito de energia (SAR) | Higher energy deposition (SAR)
- Artefactos de susceptibilidad amplificados | Amplified susceptibility artifacts
- Compatibilidad limitada de implantes | Limited implant compatibility
- Costo elevado | High cost

**Indicaciones emergentes: | Emerging indications:**
- Epilepsia: Deteccion de displasias corticales focales no visibles a 3T | Epilepsy: Detection of focal cortical dysplasias not visible at 3T
- Esclerosis multiple: Signo de la vena central para diagnostico diferencial | MS: Central vein sign for differential diagnosis
- Enfermedad de Parkinson: Visualizacion de la neuromelanina en substantia nigra | Parkinson's: Neuromelanin visualization in substantia nigra
- Investigacion neurocientifica: Mapeo de capas corticales | Neuroscience research: Cortical layer mapping`,
      keyTerms: [
        {
          term: 'DTI (imagen de difusion tensorial) | DTI (diffusion tensor imaging)',
          definition: 'Secuencia de RM que mide la direccionalidad de la difusion del agua en la sustancia blanca para reconstruir tractos nerviosos (tractografia), esencial en planificacion neuroquirurgica y evaluacion de lesion axonal. | MRI sequence measuring water diffusion directionality in white matter to reconstruct nerve tracts (tractography), essential in neurosurgical planning and axonal injury evaluation.',
        },
        {
          term: 'rCBV (volumen sanguineo cerebral relativo) | rCBV (relative cerebral blood volume)',
          definition: 'Parametro de perfusion por RM que refleja la vascularidad tisular. Elevado en tumores de alto grado (neoangiogenesis) y bajo en gliomas de bajo grado; clave para diferenciar recurrencia de radionecrosis. | MRI perfusion parameter reflecting tissue vascularity. Elevated in high-grade tumors (neoangiogenesis) and low in low-grade gliomas; key for differentiating recurrence from radionecrosis.',
        },
        {
          term: 'ASL (marcaje de espines arteriales) | ASL (arterial spin labeling)',
          definition: 'Tecnica de perfusion por RM que marca magneticamente los protones de la sangre arterial como trazador endogeno, sin necesidad de contraste exogeno. | MRI perfusion technique magnetically labeling arterial blood protons as endogenous tracer, without need for exogenous contrast.',
        },
        {
          term: 'compresion sensada | compressed sensing',
          definition: 'Tecnica de aceleracion de RM que submuestrea el espacio k de forma aleatoria y usa reconstruccion iterativa, reduciendo el tiempo de adquisicion por factores de 4-10x sin perdida diagnostica significativa. | MRI acceleration technique randomly undersampling k-space and using iterative reconstruction, reducing acquisition time by 4-10x without significant diagnostic loss.',
        },
        {
          term: 'espacio k | k-space',
          definition: 'Representacion en dominio de frecuencia de los datos de RM. Cada punto del espacio k contribuye informacion de frecuencia espacial a la imagen final; el centro contiene contraste y la periferia contiene detalle. | Frequency domain representation of MRI data. Each k-space point contributes spatial frequency information to the final image; the center contains contrast and the periphery contains detail.',
        },
      ],
      clinicalNotes: 'La perfusion por RM con DSC es la herramienta de eleccion para el seguimiento de gliomas post-tratamiento: un rCBV elevado en una lesion con realce sugiere fuertemente recurrencia tumoral sobre radionecrosis. La DTI tractografia prequirurgica reduce el riesgo de deficit neurologico post-operatorio al mapear la relacion espacial entre tumor y tractos elocuentes. La RM a 7T esta expandiendo el diagnostico en epilepsia farmacorresistente, donde la deteccion de displasias corticales focales cambia el manejo quirurgico. Las tecnicas de aceleracion (compresion sensada, deep learning) estan reduciendo los tiempos de RM de 45-60 minutos a 15-20 minutos sin perdida de calidad, mejorando la aceptacion del paciente y la eficiencia del servicio. | DSC MR perfusion is the tool of choice for post-treatment glioma follow-up: elevated rCBV in an enhancing lesion strongly suggests tumor recurrence over radionecrosis. Presurgical DTI tractography reduces post-operative neurological deficit risk by mapping the spatial relationship between tumor and eloquent tracts. 7T MRI is expanding diagnosis in drug-resistant epilepsy, where focal cortical dysplasia detection changes surgical management. Acceleration techniques (compressed sensing, deep learning) are reducing MRI times from 45-60 minutes to 15-20 minutes without quality loss, improving patient acceptance and department efficiency.',
    },
    5: {
      level: 5,
      summary: 'La RM de vanguardia integra campos ultra-altos, hiperpolarlizacion, RM de sodio y potasio, fingerprinting cuantitativo, y redes neuronales profundas para imagen y reconstruccion, estableciendo la RM como plataforma multiparametrica cuantitativa para medicina de precision, terapia guiada por imagen, y neurociencia traslacional. | Cutting-edge MRI integrates ultra-high fields, hyperpolarization, sodium and potassium MRI, quantitative fingerprinting, and deep neural networks for imaging and reconstruction, establishing MRI as a quantitative multiparametric platform for precision medicine, image-guided therapy, and translational neuroscience.',
      explanation: `## RM Cuantitativa y Fingerprinting | Quantitative MRI and Fingerprinting

### MR Fingerprinting (MRF) | MR Fingerprinting

**Concepto: | Concept:**
- Adquisicion con parametros pseudo-aleatorios variables (TR, TE, flip angle) | Acquisition with variable pseudo-random parameters (TR, TE, flip angle)
- Cada tejido genera una "huella digital" unica basada en sus propiedades T1, T2, densidad protonica | Each tissue generates a unique "fingerprint" based on its T1, T2, proton density properties
- Reconocimiento de patron: Comparacion con diccionario simulado de Bloch | Pattern recognition: Comparison with simulated Bloch dictionary
- Resultado: Mapas cuantitativos simultaneos de T1, T2, PD en una sola adquisicion | Result: Simultaneous quantitative T1, T2, PD maps in a single acquisition

**Ventajas sobre RM cualitativa: | Advantages over qualitative MRI:**
- Valores absolutos reproducibles (no dependen de protocolo) | Reproducible absolute values (protocol-independent)
- Ideal para estudios longitudinales y multicentricos | Ideal for longitudinal and multicenter studies
- Deteccion de cambios sutiles previos a la aparicion morfologica | Detection of subtle changes prior to morphological appearance
- Potencial para biomarcadores cuantitativos de enfermedad | Potential for quantitative disease biomarkers

**Aplicaciones clinicas activas: | Active clinical applications:**
- Cuantificacion de fibrosis miocardica (T1 nativo elevado) | Myocardial fibrosis quantification (elevated native T1)
- Mapeo de hierro hepatico (R2*) | Hepatic iron mapping (R2*)
- Deteccion precoz de desmielinizacion sublinica en EM | Early detection of subclinical demyelination in MS
- Caracterizacion multiparametrica de tumores sin gadolinio | Multiparametric tumor characterization without gadolinium

### RM de Nucleos No-Protonicos | Non-Proton MRI

**Sodio-23 (23Na MRI): | Sodium-23 MRI:**
- Sensibilidad ~10,000x menor que 1H -> requiere campo ultra-alto (7T+) o bobinas dedicadas | Sensitivity ~10,000x lower than 1H -> requires ultra-high field (7T+) or dedicated coils
- Sodio intracelular refleja viabilidad celular | Intracellular sodium reflects cell viability
- Isquemia/infarto: Elevacion tardia del sodio (perdida de integridad de membrana) | Ischemia/infarct: Late sodium elevation (membrane integrity loss)
- Evaluacion del cartilago: Correlacion con contenido de proteoglicanos | Cartilage evaluation: Correlation with proteoglycan content

**RM de fosforo-31 (31P MRS): | Phosphorus-31 MRI:**
- Metabolismo energetico: ATP, fosfocreatina, fosfato inorganico | Energy metabolism: ATP, phosphocreatine, inorganic phosphate
- pH intracelular | Intracellular pH
- Aplicacion: Evaluacion metabolica muscular y cardiaca | Application: Muscle and cardiac metabolic evaluation

## Hiperpolarizacion | Hyperpolarization

### 13C Hiperpolarizado | Hyperpolarized 13C

**Concepto: | Concept:**
- Polarizacion nuclear dinamica (DNP): Aumenta la senal de 13C en >10,000x | Dynamic nuclear polarization (DNP): Increases 13C signal by >10,000x
- Permite imagen metabolica en tiempo real de moleculas marcadas con 13C | Enables real-time metabolic imaging of 13C-labeled molecules
- Principal substrato: [1-13C] piruvato | Main substrate: [1-13C] pyruvate

**Aplicaciones: | Applications:**
- Evaluacion del metabolismo tumoral in vivo: Conversion de piruvato a lactato (efecto Warburg) | In vivo tumor metabolism evaluation: Pyruvate to lactate conversion (Warburg effect)
- Diferenciacion: Tumor agresivo vs indolente, respuesta precoz a tratamiento | Differentiation: Aggressive vs indolent tumor, early treatment response
- Evaluacion cardiaca: Metabolismo energetico miocardico | Cardiac evaluation: Myocardial energy metabolism
- Primeros ensayos clinicos en cancer de prostata, cerebro, y rinon | First clinical trials in prostate, brain, and kidney cancer

### 129Xe Hiperpolarizado | Hyperpolarized 129Xe

- Ventilacion pulmonar funcional: Mapa de distribucion del gas inhalado | Functional pulmonary ventilation: Map of inhaled gas distribution
- Transferencia gas-sangre: Evaluacion de la membrana alveolar-capilar | Gas-blood transfer: Alveolar-capillary membrane evaluation
- Aplicaciones: EPOC, fibrosis pulmonar, asma, evaluacion post-COVID | Applications: COPD, pulmonary fibrosis, asthma, post-COVID evaluation
- FDA-cleared para uso clinico | FDA-cleared for clinical use

## RM Guiada para Terapia | MRI-Guided Therapy

### HIFU Guiado por RM (MRgHIFU) | MRI-guided HIFU

**Ultrasonido focalizado de alta intensidad: | High-Intensity Focused Ultrasound:**
- RM proporciona guia en tiempo real y termometria | MRI provides real-time guidance and thermometry
- Tratamiento no invasivo: Ablacion de tejido por calentamiento focal | Non-invasive treatment: Tissue ablation by focal heating
- Aprobado para: Fibromas uterinos, metastasis oseas dolorosas, temblor esencial (talamotomia) | Approved for: Uterine fibroids, painful bone metastases, essential tremor (thalamotomy)
- En investigacion: Tumores cerebrales, cancer de prostata, apertura de barrera hematoencefalica para entrega de farmacos | Under investigation: Brain tumors, prostate cancer, BBB opening for drug delivery

### Biopsia Guiada por RM | MRI-Guided Biopsy

- Mama: Lesiones vistas solo en RM (no ecografia, no mamografia) | Breast: Lesions seen only on MRI (not US, not mammography)
- Prostata: Biopsia dirigida por fusion RM-ecografia (PI-RADS) | Prostate: Targeted biopsy via MRI-US fusion (PI-RADS)
- Cerebro: Biopsia estereotactica con RM intraoperatoria | Brain: Stereotactic biopsy with intraoperative MRI

## Inteligencia Artificial en RM | AI in MRI

### Reconstruccion Acelerada por AI | AI-Accelerated Reconstruction

**fastMRI (Facebook AI Research + NYU): | fastMRI:**
- Reduccion de tiempo de adquisicion hasta 4x sin perdida clinica | Acquisition time reduction up to 4x without clinical loss
- Variational networks, U-Net, redes adversarias generativas | Variational networks, U-Net, generative adversarial networks
- Implementacion clinica activa en multiples centros | Active clinical implementation at multiple centers

**Aplicaciones especificas: | Specific applications:**
- RM de rodilla acelerada: De 10 a 5 minutos manteniendo sensibilidad para roturas de menisco | Accelerated knee MRI: From 10 to 5 minutes maintaining sensitivity for meniscal tears
- RM cardiaca: Cine en tiempo real sin apnea | Cardiac MRI: Real-time cine without breath-hold
- RM cerebral rapida en urgencias: Protocolo de 5 minutos para ictus | Rapid brain MRI in emergency: 5-minute protocol for stroke

### Segmentacion y Analisis Automatizado | Automated Segmentation and Analysis

- **FreeSurfer + Deep learning:** Volumetria cerebral automatizada, adelgazamiento cortical | Automated brain volumetry, cortical thinning
- **nnU-Net:** Segmentacion universal de tumores cerebrales, higado, rinon | Universal segmentation of brain tumors, liver, kidney
- **Biomarcadores de imagen automatizados:** Volumen hipocampal (demencia), grasa pancreatica, composicion corporal | Automated imaging biomarkers: Hippocampal volume (dementia), pancreatic fat, body composition

## Retos Actuales y Futuro | Current Challenges and Future

### Estandarizacion | Standardization

- Variabilidad de protocolos entre centros y fabricantes | Protocol variability between centers and vendors
- Necesidad de phantoms y datos de referencia cuantitativos | Need for phantoms and quantitative reference data
- RSNA QIBA: Perfiles de bioanalisis cuantitativa en imagen | RSNA QIBA: Quantitative imaging bioanalysis profiles

### Sostenibilidad | Sustainability

- RM sin helio: Imanes permanentes de bajo campo (0.55T) con AI para compensar SNR | Helium-free MRI: Low-field permanent magnets (0.55T) with AI to compensate SNR
- Acceso global: RM de bajo costo para paises de recursos limitados | Global access: Low-cost MRI for resource-limited countries
- Hyperfine Swoop: RM portatil de 0.064T para cabecera del paciente | Hyperfine Swoop: Portable 0.064T MRI for patient bedside

### Integracion Multimodal | Multimodal Integration

- PET/RM: Combinacion simultanea de informacion metabolica (PET) y anatomica/funcional (RM) | PET/MRI: Simultaneous combination of metabolic (PET) and anatomical/functional (MRI) information
- Radioterapia guiada por RM (MR-Linac): Tratamiento adaptativo en tiempo real | MRI-guided radiotherapy (MR-Linac): Real-time adaptive treatment
- Imagen molecular por RM: Agentes dirigidos a receptores especificos | Molecular MRI: Agents targeting specific receptors`,
      keyTerms: [
        {
          term: 'MR fingerprinting (MRF)',
          definition: 'Tecnica cuantitativa de RM que adquiere datos con parametros pseudo-aleatorios para generar mapas simultaneos de T1, T2 y densidad protonica absolutos, eliminando la dependencia del protocolo y permitiendo valores tisulares reproducibles. | Quantitative MRI technique acquiring data with pseudo-random parameters to generate simultaneous absolute T1, T2, and proton density maps, eliminating protocol dependency and enabling reproducible tissue values.',
        },
        {
          term: 'hiperpolarizacion 13C | 13C hyperpolarization',
          definition: 'Tecnica que aumenta la senal de carbono-13 mas de 10,000 veces mediante polarizacion nuclear dinamica, permitiendo la visualizacion del metabolismo celular en tiempo real in vivo (ej. conversion piruvato-lactato en tumores). | Technique increasing carbon-13 signal more than 10,000-fold via dynamic nuclear polarization, enabling real-time in vivo visualization of cellular metabolism (e.g., pyruvate-lactate conversion in tumors).',
        },
        {
          term: 'MRgHIFU (HIFU guiado por RM) | MRgHIFU (MRI-guided HIFU)',
          definition: 'Terapia no invasiva que usa ultrasonido focalizado de alta intensidad guiado por RM en tiempo real con termometria para ablacion tisular precisa, aprobada para fibromas uterinos, metastasis oseas, y temblor esencial. | Non-invasive therapy using high-intensity focused ultrasound guided by real-time MRI with thermometry for precise tissue ablation, approved for uterine fibroids, bone metastases, and essential tremor.',
        },
        {
          term: 'RM de bajo campo | low-field MRI',
          definition: 'Sistemas de RM a 0.55T o menos que ofrecen ventajas de sostenibilidad (sin helio criogenico), costo reducido, y menor artefacto de susceptibilidad, compensando la menor senal con algoritmos de AI avanzados. | MRI systems at 0.55T or less offering sustainability advantages (no cryogenic helium), reduced cost, and less susceptibility artifact, compensating lower signal with advanced AI algorithms.',
        },
        {
          term: 'PET/RM | PET/MRI',
          definition: 'Sistema hibrido que adquiere simultaneamente datos metabolicos (PET) y anatomicos/funcionales (RM), ofreciendo menor dosis de radiacion que PET/TC y superior caracterizacion tisular, especialmente en oncologia pediatrica, cerebral y pelvica. | Hybrid system simultaneously acquiring metabolic (PET) and anatomical/functional (MRI) data, offering lower radiation dose than PET/CT and superior tissue characterization, especially in pediatric, brain, and pelvic oncology.',
        },
        {
          term: 'MR-Linac',
          definition: 'Acelerador lineal de radioterapia integrado con RM, que permite visualizar el tumor en tiempo real durante el tratamiento, adaptando el plan de forma dinamica para maximizar la dosis tumoral y minimizar la irradiacion de tejido sano. | Linear radiotherapy accelerator integrated with MRI, enabling real-time tumor visualization during treatment, dynamically adapting the plan to maximize tumor dose and minimize healthy tissue irradiation.',
        },
      ],
      clinicalNotes: 'Las fronteras de la RM se expanden simultaneamente en dos direcciones: hacia campos ultra-altos (7T clinico, 11.7T investigacion) para resolucion y contraste sin precedentes, y hacia campos ultra-bajos (0.55T, 0.064T) para accesibilidad, sostenibilidad y aplicaciones point-of-care. La hiperpolarizacion de 13C ha pasado de investigacion preclínica a ensayos clinicos fase II en cancer de prostata y cerebral, con potencial para revolucionar la imagen metabolica. MR fingerprinting permite por primera vez obtener valores tisulares absolutos y reproducibles en un solo scan, allanando el camino para biomarcadores cuantitativos estandarizados. La convergencia de RM con terapia (MRgHIFU, MR-Linac) esta difuminando la linea entre diagnostico y tratamiento, creando un nuevo paradigma de "theranostics" por imagen. | MRI frontiers are expanding simultaneously in two directions: toward ultra-high fields (clinical 7T, research 11.7T) for unprecedented resolution and contrast, and toward ultra-low fields (0.55T, 0.064T) for accessibility, sustainability, and point-of-care applications. 13C hyperpolarization has moved from preclinical research to phase II clinical trials in prostate and brain cancer, with potential to revolutionize metabolic imaging. MR fingerprinting enables for the first time absolute and reproducible tissue values in a single scan, paving the way for standardized quantitative biomarkers. The convergence of MRI with therapy (MRgHIFU, MR-Linac) is blurring the line between diagnosis and treatment, creating a new "theranostics" imaging paradigm.',
    },
  },

  media: [],

  citations: [
    {
      id: 'mcrobbie-mri-physics',
      type: 'textbook',
      title: 'MRI from Picture to Proton',
      authors: ['McRobbie DW', 'Moore EA', 'Graves MJ', 'Prince MR'],
      source: 'Cambridge University Press',
      chapter: 'Relaxation and Contrast',
    },
    {
      id: 'acr-mri-safety',
      type: 'guideline',
      title: 'ACR Guidance Document on MR Safe Practices',
      authors: ['American College of Radiology'],
      source: 'Journal of Magnetic Resonance Imaging',
      url: 'https://doi.org/10.1002/jmri.26867',
    },
    {
      id: 'ma-mr-fingerprinting',
      type: 'article',
      title: 'Magnetic Resonance Fingerprinting',
      authors: ['Ma D', 'Gulani V', 'Seiberlich N', 'et al.'],
      source: 'Nature',
      url: 'https://doi.org/10.1038/nature11971',
    },
    {
      id: 'nelson-hyperpolarized',
      type: 'article',
      title: 'Metabolic Imaging of Patients with Prostate Cancer Using Hyperpolarized [1-13C]Pyruvate',
      authors: ['Nelson SJ', 'Kurhanewicz J', 'Vigneron DB', 'et al.'],
      source: 'Sci Transl Med',
      url: 'https://doi.org/10.1126/scitranslmed.3006070',
    },
    {
      id: 'knoll-fastmri',
      type: 'article',
      title: 'Advancing machine learning for MR image reconstruction with an open competition',
      authors: ['Knoll F', 'Murrell T', 'Sriram A', 'et al.'],
      source: 'J Am Coll Radiol',
      url: 'https://doi.org/10.1016/j.jacr.2020.03.010',
    },
  ],

  crossReferences: [
    { targetId: 'topic-ct-scan-principles', targetType: 'topic', relationship: 'sibling', label: 'Tomografia Computarizada | CT Scan' },
    { targetId: 'topic-chest-xray-interpretation', targetType: 'topic', relationship: 'sibling', label: 'Radiografia de Torax | Chest X-Ray' },
    { targetId: 'topic-basic-ultrasound', targetType: 'topic', relationship: 'sibling', label: 'Ecografia Basica | Basic Ultrasound' },
    { targetId: 'topic-radiation-safety', targetType: 'topic', relationship: 'related', label: 'Seguridad Radiologica | Radiation Safety' },
    { targetId: 'condition-heart-failure', targetType: 'condition', relationship: 'related', label: 'Insuficiencia Cardiaca | Heart Failure' },
  ],

  tags: {
    systems: ['nervous', 'musculoskeletal', 'cardiovascular', 'digestive'],
    topics: ['radiology', 'imaging', 'diagnostics', 'neurology', 'oncology', 'cardiology'],
    keywords: [
      'resonancia magnetica', 'MRI', 'RM', 'T1', 'T2', 'FLAIR',
      'difusion', 'DWI', 'gadolinio', 'secuencias de pulso',
      'espectroscopia', 'tractografia', 'DTI', 'perfusion',
      'MR fingerprinting', 'hiperpolarizacion', '7 Tesla',
      'compresion sensada', 'deep learning reconstruction',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'neurology', 'surgery', 'radiology', 'orthopedics'],
    },
  },

  createdAt: '2026-02-05T00:00:00.000Z',
  updatedAt: '2026-02-05T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default resonanciaMagneticaMri;
