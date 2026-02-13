/**
 * Tomografia Computarizada / CT Scan - Principles and Common Findings
 *
 * Comprehensive educational content covering CT scan physics,
 * acquisition techniques, contrast protocols, common pathological
 * findings, and clinical decision-making.
 *
 * Spanish-first with English translations.
 */

import { EducationalContent } from '../types';

export const tomografiaComputarizadaCtScan: EducationalContent = {
  id: 'topic-ct-scan-principles',
  type: 'topic',
  name: 'Tomografia Computarizada - Principios y Hallazgos Comunes | CT Scan - Principles and Common Findings',
  nameEs: 'Tomografia Computarizada',
  alternateNames: [
    'CT Scan',
    'TC',
    'TAC',
    'Tomografia Axial Computarizada',
    'Computed Tomography',
    'CAT Scan',
    'Escaner',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Una tomografia computarizada (TC o escaner) es una prueba que usa rayos X y computadoras para crear imagenes detalladas del interior de su cuerpo, como rebanadas de pan. | A CT scan is a test that uses X-rays and computers to create detailed images of the inside of your body, like slices of bread.',
      explanation: `## Que es una tomografia computarizada? | What is a CT scan?

Una tomografia computarizada, tambien llamada TC, TAC o escaner, es una prueba de imagen mas detallada que una radiografia normal. La maquina toma muchas fotos desde diferentes angulos y una computadora las junta para crear imagenes muy claras del interior de su cuerpo. | A CT scan, also called a CAT scan, is an imaging test more detailed than a regular X-ray. The machine takes many photos from different angles and a computer puts them together to create very clear images of the inside of your body.

### Como es la maquina? | What does the machine look like?

- Es como una dona grande (un anillo grueso) | It looks like a large donut (a thick ring)
- Usted se acuesta en una camilla que se desliza a traves del agujero | You lie on a table that slides through the hole
- La maquina no lo toca y el agujero es amplio | The machine does not touch you and the hole is wide
- Hace un ruido suave mientras trabaja | It makes a soft noise while working

### Como se hace la prueba? | How is the test done?

1. **Se acuesta en la camilla | You lie down on the table**
2. **Le pueden poner una via intravenosa (IV) para el contraste | They may place an IV for contrast dye**
3. **La camilla se mueve lentamente a traves del anillo | The table moves slowly through the ring**
4. **Le piden que aguante la respiracion por unos segundos | They ask you to hold your breath for a few seconds**
5. **La prueba dura entre 5 y 30 minutos | The test lasts between 5 and 30 minutes**

### Que es el contraste? | What is contrast dye?

A veces necesitan inyectar un liquido especial llamado "contraste" por la vena: | Sometimes they need to inject a special liquid called "contrast" through your vein:
- Ayuda a que los organos y vasos sanguineos se vean mejor | It helps organs and blood vessels show up better
- Puede sentir una sensacion de calor momentanea | You may feel a momentary warm sensation
- Es importante informar si tiene alergias o problemas de rinon | It is important to tell them about allergies or kidney problems

### Para que se usa? | What is it used for?

- Buscar tumores o cancer | Look for tumors or cancer
- Revisar despues de un accidente o golpe fuerte | Check after an accident or serious injury
- Ver si hay piedras en los rinones | Check for kidney stones
- Evaluar dolores de cabeza severos | Evaluate severe headaches
- Revisar los pulmones cuando la radiografia no es suficiente | Check the lungs when an X-ray is not enough
- Guiar procedimientos como biopsias | Guide procedures like biopsies

### Es seguro? | Is it safe?

La TC usa mas radiacion que una radiografia simple, pero los doctores solo la ordenan cuando es necesaria. Los beneficios de encontrar un problema importante son mucho mayores que los riesgos pequenos de la radiacion. | CT uses more radiation than a plain X-ray, but doctors only order it when necessary. The benefits of finding an important problem are much greater than the small risks of radiation.

### Consejos importantes | Important tips

- Digale al doctor si esta embarazada o podria estarlo | Tell your doctor if you are pregnant or might be
- Si le dan contraste, tome mucha agua despues para ayudar a sus rinones | If you receive contrast, drink plenty of water afterward to help your kidneys
- Si tiene miedo a los espacios cerrados, digaselo al equipo medico | If you are afraid of enclosed spaces, tell the medical team`,
      keyTerms: [
        {
          term: 'tomografia computarizada (TC) | CT scan',
          definition: 'Una prueba medica que toma muchas radiografias desde diferentes angulos para crear imagenes detalladas en forma de rebanadas del interior del cuerpo. | A medical test that takes many X-rays from different angles to create detailed slice-shaped images of the inside of the body.',
        },
        {
          term: 'contraste | contrast dye',
          definition: 'Un liquido especial que se inyecta en la vena para que los organos y vasos sanguineos se vean mas claros en las imagenes. | A special liquid injected into the vein to make organs and blood vessels appear clearer on the images.',
        },
        {
          term: 'escaner | scanner',
          definition: 'La maquina de TC que parece una dona grande. Gira alrededor del paciente para tomar imagenes. | The CT machine that looks like a large donut. It rotates around the patient to take images.',
        },
        {
          term: 'radiacion | radiation',
          definition: 'Energia invisible utilizada para tomar las imagenes. La TC usa una cantidad mayor que una radiografia simple pero es controlada y segura. | Invisible energy used to take the images. CT uses a larger amount than a plain X-ray but it is controlled and safe.',
        },
      ],
      analogies: [
        'Una TC es como cortar una barra de pan en rebanadas finas: cada rebanada le permite ver lo que hay adentro. Sin la TC, solo podria ver el exterior del pan. | A CT scan is like cutting a loaf of bread into thin slices: each slice lets you see what is inside. Without CT, you could only see the outside of the bread.',
        'El contraste es como poner tinta en agua transparente: hace que las cosas que antes eran invisibles se puedan ver claramente. | Contrast dye is like putting ink in clear water: it makes things that were previously invisible clearly visible.',
      ],
      examples: [
        'Una persona llega a urgencias con dolor abdominal severo. Le hacen una TC y descubren que tiene apendicitis. | A person arrives at the ER with severe abdominal pain. They do a CT scan and discover they have appendicitis.',
        'Despues de un accidente de auto, le hacen una TC de la cabeza para asegurarse de que no haya sangrado en el cerebro. | After a car accident, they do a head CT to make sure there is no bleeding in the brain.',
      ],
    },
    2: {
      level: 2,
      summary: 'La tomografia computarizada utiliza un tubo de rayos X rotatorio y detectores para generar imagenes transversales del cuerpo con excelente resolucion espacial, permitiendo evaluar traumatismo, cancer, patologia vascular y muchas otras condiciones. | CT uses a rotating X-ray tube and detectors to generate cross-sectional body images with excellent spatial resolution, allowing evaluation of trauma, cancer, vascular pathology, and many other conditions.',
      explanation: `## Principios Basicos de la TC | Basic CT Principles

### Como funciona | How it works

La TC funciona de manera similar a una radiografia, pero con importantes diferencias: | CT works similarly to an X-ray, but with important differences:

1. **El tubo de rayos X rota alrededor del paciente | The X-ray tube rotates around the patient**
2. **Detectores del lado opuesto capturan la radiacion transmitida | Detectors on the opposite side capture transmitted radiation**
3. **La computadora reconstruye las imagenes en cortes transversales | The computer reconstructs images as cross-sectional slices**
4. **Se pueden crear imagenes en cualquier plano (axial, coronal, sagital) | Images can be created in any plane (axial, coronal, sagittal)**

### Unidades Hounsfield (UH) | Hounsfield Units (HU)

Cada tejido tiene un valor numerico de densidad: | Each tissue has a numerical density value:

| Tejido | Valor (UH) |
|--------|-----------|
| Aire | -1000 |
| Grasa | -100 a -50 | Fat | -100 to -50 |
| Agua | 0 |
| Tejido blando / Musculo | 40-60 | Soft tissue / Muscle | 40-60 |
| Sangre aguda | 50-70 | Acute blood | 50-70 |
| Hueso esponjoso | 100-300 | Cancellous bone | 100-300 |
| Hueso cortical | 1000+ | Cortical bone | 1000+ |

### Ventanas de Visualizacion | Viewing Windows

Las imagenes de TC se pueden ver en diferentes "ventanas" que optimizan la visualizacion de estructuras especificas: | CT images can be viewed in different "windows" that optimize visualization of specific structures:

- **Ventana de pulmon | Lung window:** Optimiza el contraste entre aire y tejido pulmonar | Optimizes contrast between air and lung tissue
- **Ventana de mediastino / tejido blando | Mediastinal / soft tissue window:** Mejor para organos, vasos, ganglios | Best for organs, vessels, lymph nodes
- **Ventana de hueso | Bone window:** Detalle de fracturas y lesiones oseas | Detail of fractures and bone lesions
- **Ventana de cerebro | Brain window:** Distingue sustancia gris, blanca, y sangre | Distinguishes gray matter, white matter, and blood

### Tipos de TC Comunes | Common CT Types

**TC sin contraste | Non-contrast CT:**
- Piedras renales (urolito) | Kidney stones (urolithiasis)
- Sangrado cerebral agudo (ictus hemorragico) | Acute brain bleed (hemorrhagic stroke)
- Fracturas | Fractures

**TC con contraste IV | IV contrast CT:**
- Tumores y masas | Tumors and masses
- Infecciones (abscesos) | Infections (abscesses)
- Patologia vascular | Vascular pathology

**Angiografia por TC (angioTC) | CT Angiography (CTA):**
- Embolia pulmonar | Pulmonary embolism
- Diseccion aortica | Aortic dissection
- Accidente cerebrovascular | Stroke

**TC multifasica | Multiphasic CT:**
- Lesiones hepaticas | Liver lesions
- Lesiones renales | Kidney lesions
- Fases: sin contraste, arterial, venosa, tardio | Phases: non-contrast, arterial, venous, delayed

### Hallazgos Comunes por Region | Common Findings by Region

**Cabeza | Head:**
- Hemorragia: Hiperdensa (blanca) en fase aguda | Hemorrhage: Hyperdense (white) in acute phase
- Infarto: Hipodenso (oscuro) despues de 6-12 horas | Infarct: Hypodense (dark) after 6-12 hours
- Efecto de masa: Desviacion de la linea media | Mass effect: Midline shift
- Hidrocefalia: Ventriculos dilatados | Hydrocephalus: Dilated ventricles

**Torax | Chest:**
- Embolia pulmonar: Defecto de llenado en arteria pulmonar | PE: Filling defect in pulmonary artery
- Nodulo pulmonar: Lesion redondeada <3 cm | Pulmonary nodule: Round lesion <3 cm
- Derrame pleural: Liquido dependiente | Pleural effusion: Dependent fluid
- Linfadenopatia: Ganglios >1 cm en eje corto | Lymphadenopathy: Nodes >1 cm short axis

**Abdomen y Pelvis | Abdomen and Pelvis:**
- Apendicitis: Apendice dilatado >6 mm con inflamacion periapendicular | Appendicitis: Dilated appendix >6 mm with periappendiceal inflammation
- Obstruccion intestinal: Asas dilatadas con punto de transicion | Bowel obstruction: Dilated loops with transition point
- Piedras renales: Calculo hiperdenso en via urinaria | Kidney stones: Hyperdense calculus in urinary tract
- Aneurisma aortico: Dilatacion aortica >3 cm | Aortic aneurysm: Aortic dilation >3 cm`,
      keyTerms: [
        {
          term: 'unidades Hounsfield (UH) | Hounsfield units (HU)',
          definition: 'Escala numerica que mide la densidad de los tejidos en la TC. El agua es 0, el aire es -1000, el hueso es +1000. | Numerical scale measuring tissue density on CT. Water is 0, air is -1000, bone is +1000.',
          pronunciation: 'HAUNS-field',
        },
        {
          term: 'ventana | window',
          definition: 'Ajuste de la visualizacion de la imagen de TC para optimizar el contraste entre diferentes tejidos. Diferentes ventanas muestran mejor diferentes estructuras. | CT image display setting to optimize contrast between different tissues. Different windows better display different structures.',
        },
        {
          term: 'angioTC (angiografia por TC) | CTA (CT angiography)',
          definition: 'TC con contraste sincronizado para visualizar los vasos sanguineos, usada para detectar embolias pulmonares, disecciones aorticas, y accidentes cerebrovasculares. | Contrast-timed CT to visualize blood vessels, used to detect pulmonary embolism, aortic dissection, and stroke.',
        },
        {
          term: 'efecto de masa | mass effect',
          definition: 'Desplazamiento de estructuras normales por una lesion (tumor, hemorragia, edema). En el cerebro, puede causar herniacion. | Displacement of normal structures by a lesion (tumor, hemorrhage, edema). In the brain, may cause herniation.',
        },
        {
          term: 'hiperdenso / hipodenso | hyperdense / hypodense',
          definition: 'Hiperdenso: mas blanco de lo normal (sangre aguda, calcificacion). Hipodenso: mas oscuro de lo normal (liquido, aire, infarto). | Hyperdense: whiter than normal (acute blood, calcification). Hypodense: darker than normal (fluid, air, infarct).',
        },
      ],
      analogies: [
        'Las unidades Hounsfield son como la escala de dureza de los minerales: cada tejido tiene su propio numero que le dice al doctor lo que es. | Hounsfield units are like the mineral hardness scale: each tissue has its own number that tells the doctor what it is.',
        'Las ventanas de TC son como las gafas de sol con diferentes lentes: con lentes oscuras ve el cielo mejor, con lentes claras ve las sombras mejor. Cada ventana revela diferentes detalles. | CT windows are like sunglasses with different lenses: dark lenses help you see the sky better, light lenses help you see shadows better. Each window reveals different details.',
      ],
    },
    3: {
      level: 3,
      summary: 'La TC multicorte moderna utiliza adquisicion helicoidal con multiples filas de detectores, reconstruccion iterativa, y protocolos optimizados de contraste para lograr alta resolucion con dosis reducida, permitiendo diagnostico preciso de patologia traumatica, vascular, oncologica y abdominal aguda. | Modern multislice CT uses helical acquisition with multiple detector rows, iterative reconstruction, and optimized contrast protocols to achieve high resolution with reduced dose, enabling accurate diagnosis of traumatic, vascular, oncological, and acute abdominal pathology.',
      explanation: `## Tecnologia de la TC Moderna | Modern CT Technology

### Adquisicion Helicoidal Multicorte | Multislice Helical Acquisition

**Evolucion tecnologica | Technological evolution:**
- TC de primera generacion: Un detector, rotacion lenta | First-generation CT: Single detector, slow rotation
- TC helicoidal: Adquisicion continua durante movimiento de la mesa | Helical CT: Continuous acquisition during table movement
- TC multicorte (MDCT): 16, 64, 128, 256, 320 filas de detectores | MDCT: 16, 64, 128, 256, 320 detector rows
- TC de doble energia (DECT): Dos tubos o conmutacion rapida de kV | Dual-energy CT (DECT): Two tubes or rapid kV switching

**Parametros de adquisicion: | Acquisition parameters:**
- **Pitch:** Relacion entre movimiento de mesa y colimacion del detector. Pitch alto = mas rapido, menos dosis. | Table movement to detector collimation ratio. High pitch = faster, lower dose.
- **Colimacion:** Grosor de la seccion adquirida (submilimetrica en TC modernos). | Slice thickness acquired (submillimeter in modern CT).
- **Tiempo de rotacion:** 0.25-0.5 segundos en equipos modernos. | Rotation time: 0.25-0.5 seconds in modern equipment.

### Reconstruccion de Imagen | Image Reconstruction

**Retroproyeccion filtrada (FBP) | Filtered back projection:**
- Metodo clasico, rapido pero ruidoso | Classic method, fast but noisy

**Reconstruccion iterativa (IR) | Iterative reconstruction:**
- Reduce ruido un 30-60% manteniendo la resolucion | Reduces noise 30-60% while maintaining resolution
- Permite reduccion de dosis del 20-50% | Enables 20-50% dose reduction
- Tipos: ASIR, SAFIRE, iDose, ADMIRE (segun fabricante) | Types: ASIR, SAFIRE, iDose, ADMIRE (by manufacturer)

**Reconstruccion basada en deep learning | Deep learning reconstruction:**
- Ultima generacion: redes neuronales entrenadas | Latest generation: trained neural networks
- Mayor reduccion de dosis sin perder calidad diagnostica | Greater dose reduction without losing diagnostic quality

### Protocolos de Contraste | Contrast Protocols

**Contraste yodado intravenoso | IV iodinated contrast:**

| Parametro | Protocolo tipico |
|-----------|----------------|
| Concentracion | 300-370 mg I/mL | Concentration |
| Volumen | 80-150 mL (ajustado al peso) | Volume | 80-150 mL (weight-adjusted) |
| Velocidad de inyeccion | 2-5 mL/s (segun estudio) | Injection rate | 2-5 mL/s (study-dependent) |
| Salino flush | 30-50 mL a la misma velocidad | Saline flush |

**Fases de captacion | Enhancement phases:**

| Fase | Tiempo post-inyeccion | Indicaciones |
|------|---------------------|-------------|
| Arterial | 25-35 s | Hemorragia activa, tumores hipervasculares, CTA | Arterial | 25-35 s | Active bleeding, hypervascular tumors, CTA |
| Venosa portal | 60-70 s | Evaluacion general de organos, metastasis hepaticas | Portal venous | 60-70 s | General organ evaluation, liver metastases |
| Nefrografica | 90-100 s | Patologia renal | Nephrographic | 90-100 s | Renal pathology |
| Tardio / Excretora | 5-15 min | Via urinaria, colangiocarcinoma | Delayed / Excretory | 5-15 min | Urinary tract, cholangiocarcinoma |

**Bolus tracking vs test bolus: | Bolus tracking vs test bolus:**
- Bolus tracking: ROI en vaso objetivo, disparo automatico al alcanzar umbral UH | ROI in target vessel, automatic trigger when HU threshold reached
- Test bolus: Pequena inyeccion previa para determinar tiempo de transito | Small pre-injection to determine transit time

## Protocolos Clinicos Principales | Main Clinical Protocols

### TC de Cabeza | Head CT

**Sin contraste (emergencia): | Non-contrast (emergency):**
- Descarte de hemorragia intracraneal | Rule out intracranial hemorrhage
- Sangre aguda: 50-70 UH (hiperdensa) | Acute blood: 50-70 HU (hyperdense)
- Infarto: Hipodenso despues de 6h; signo de la arteria cerebral media hiperdensa (trombo) | Infarct: Hypodense after 6h; hyperdense MCA sign (thrombus)
- Puntaje ASPECTS para infarto en territorio de ACM | ASPECTS score for MCA territory infarct

**CTA cerebral: | Brain CTA:**
- Deteccion de oclusion de grandes vasos en ictus agudo | Large vessel occlusion detection in acute stroke
- Evaluacion de aneurismas intracraneales | Intracranial aneurysm evaluation

### TC de Torax | Chest CT

**Angiografia pulmonar (CTPA): | Pulmonary angiography (CTPA):**
- Defecto de llenado intraluminal en arteria pulmonar = TEP | Intraluminal filling defect in pulmonary artery = PE
- Signo de dilatacion del VD (VD/VI >1.0): TEP severa | RV dilation sign (RV/LV >1.0): Severe PE
- Indice de obstruccion vascular | Vascular obstruction index

**TC de alta resolucion (TCAR) | High-resolution CT (HRCT):**
- Cortes finos (1-1.25 mm), algoritmo de alta resolucion | Thin sections (1-1.25 mm), high-resolution algorithm
- Patron de enfermedad intersticial difusa | Diffuse interstitial lung disease pattern
- Patron UIP: Panal de abeja subpleural basal + bronquiectasias por traccion | UIP pattern: Basal subpleural honeycombing + traction bronchiectasis

### TC Abdominal y Pelvica | Abdominal and Pelvic CT

**Abdomen agudo: | Acute abdomen:**
- Apendicitis: Apendice >6 mm, grasa periapendicular estriada, apendicolito | Appendicitis: Appendix >6 mm, periappendiceal fat stranding, appendicolith
- Obstruccion intestinal: Asas dilatadas >3 cm (delgado) o >6 cm (colon), punto de transicion | Bowel obstruction: Dilated loops >3 cm (small) or >6 cm (colon), transition point
- Diverticulitis: Engrosamiento parietal, grasa peridiverticular estriada, diverticulos | Diverticulitis: Wall thickening, peridiverticular fat stranding, diverticula
- Pancreatitis: Escala de Balthazar/CTSI, necrosis peripancreatica | Pancreatitis: Balthazar/CTSI score, peripancreatic necrosis

**TC trifasica hepatica: | Triphasic liver CT:**
- Arterial: Hepatocarcinoma (captacion arterial intensa) | Arterial: HCC (intense arterial enhancement)
- Portal: Metastasis hipodensas (la mayoria) | Portal: Hypodense metastases (most)
- Tardio: Colangiocarcinoma (captacion tardio) | Delayed: Cholangiocarcinoma (delayed enhancement)
- Patron LI-RADS para lesiones hepaticas en higado cirrotico | LI-RADS classification for liver lesions in cirrhotic liver

### TC en Trauma | Trauma CT

**Protocolo "pan-scan" (TC de cuerpo completo): | "Pan-scan" protocol (whole-body CT):**
- Cabeza sin contraste + cuello/torax/abdomen/pelvis con contraste | Non-contrast head + contrast neck/chest/abdomen/pelvis
- Deteccion de lesiones que amenazan la vida en minutos | Life-threatening injury detection in minutes
- Sangrado activo: Extravasacion de contraste (blush) | Active bleeding: Contrast extravasation (blush)
- Lesion de organo solido: Escalas AAST para bazo, higado, rinon | Solid organ injury: AAST grades for spleen, liver, kidney`,
      keyTerms: [
        {
          term: 'pitch',
          definition: 'Relacion entre el desplazamiento de la mesa por rotacion y la colimacion total del detector. Pitch >1 permite adquisicion mas rapida; pitch <1 aumenta la superposicion y resolucion longitudinal. | Ratio of table displacement per rotation to total detector collimation. Pitch >1 allows faster acquisition; pitch <1 increases overlap and longitudinal resolution.',
        },
        {
          term: 'reconstruccion iterativa | iterative reconstruction',
          definition: 'Algoritmo computacional avanzado que reduce el ruido de imagen mediante multiples ciclos de refinamiento, permitiendo adquisiciones a menor dosis de radiacion. | Advanced computational algorithm reducing image noise through multiple refinement cycles, enabling lower radiation dose acquisitions.',
        },
        {
          term: 'bolus tracking',
          definition: 'Tecnica para sincronizar la adquisicion de TC con la llegada del contraste al vaso objetivo, utilizando una region de interes con umbral de densidad automatico. | Technique to synchronize CT acquisition with contrast arrival at the target vessel, using a region of interest with automatic density threshold.',
        },
        {
          term: 'ASPECTS',
          definition: 'Alberta Stroke Program Early CT Score: Sistema de puntuacion de 10 puntos para cuantificar la extension del infarto isquemico agudo en el territorio de la arteria cerebral media. | Alberta Stroke Program Early CT Score: 10-point scoring system to quantify acute ischemic infarct extent in the MCA territory.',
        },
        {
          term: 'patron UIP | UIP pattern',
          definition: 'Patron de neumonia intersticial usual en TCAR: panal de abeja subpleural, predominio basal, bronquiectasias por traccion. Altamente especifico de fibrosis pulmonar idiopatica. | Usual interstitial pneumonia pattern on HRCT: subpleural honeycombing, basal predominance, traction bronchiectasis. Highly specific for idiopathic pulmonary fibrosis.',
        },
        {
          term: 'LI-RADS',
          definition: 'Liver Imaging Reporting and Data System: Sistema estandarizado del ACR para clasificar lesiones hepaticas detectadas en higados cirroticos, de LR-1 (definitivamente benigno) a LR-5 (definitivamente hepatocarcinoma). | ACR standardized system for classifying liver lesions in cirrhotic livers, from LR-1 (definitely benign) to LR-5 (definitely HCC).',
        },
      ],
      clinicalNotes: 'El uso de contraste yodado requiere evaluacion de funcion renal (TFGe) y antecedentes alergicos. La nefropatia inducida por contraste es rara pero debe considerarse en pacientes con TFGe <30 mL/min. La premedicacion con corticoides se recomienda en pacientes con alergia previa leve-moderada. Evaluar el riesgo-beneficio de la TC frente a alternativas sin radiacion (ecografia, RM) es esencial, especialmente en pacientes pediatricos y embarazadas. | IV iodinated contrast use requires renal function evaluation (eGFR) and allergy history. Contrast-induced nephropathy is rare but should be considered in patients with eGFR <30 mL/min. Corticosteroid premedication is recommended for patients with prior mild-moderate allergy. Evaluating risk-benefit of CT versus non-radiation alternatives (US, MRI) is essential, especially in pediatric and pregnant patients.',
    },
    4: {
      level: 4,
      summary: 'La TC avanzada integra tecnologias como la doble energia, la perfusion, y la reconstruccion espectral para proporcionar informacion funcional y de composicion tisular mas alla de la morfologia, guiando decisiones terapeuticas complejas en oncologia, patologia vascular aguda y enfermedades difusas. | Advanced CT integrates technologies such as dual-energy, perfusion, and spectral reconstruction to provide functional and tissue composition information beyond morphology, guiding complex therapeutic decisions in oncology, acute vascular pathology, and diffuse diseases.',
      explanation: `## TC de Doble Energia (DECT) | Dual-Energy CT (DECT)

### Principios | Principles

La DECT adquiere datos simultaneamente a dos niveles de energia (tipicamente 80/140 kVp), explotando las diferencias en la atenuacion de materiales a diferentes energias. | DECT acquires data simultaneously at two energy levels (typically 80/140 kVp), exploiting differences in material attenuation at different energies.

**Implementaciones tecnicas | Technical implementations:**
- Doble fuente (dual-source): Dos tubos y detectores a 90 grados | Dual-source: Two tubes and detectors at 90 degrees
- Conmutacion rapida de kV (kV-switching): Un tubo alternando energia | Rapid kV switching: Single tube alternating energy
- Detector de doble capa (dual-layer): Un tubo, detector estratificado | Dual-layer detector: Single tube, layered detector
- TC espectral por conteo de fotones (photon-counting): Ultima generacion | Spectral photon-counting CT: Latest generation

### Aplicaciones Clinicas | Clinical Applications

**Descomposicion de materiales | Material decomposition:**
- Mapas de yodo: Cuantificar la perfusion tisular, detectar TEP subsegmentaria | Iodine maps: Quantify tissue perfusion, detect subsegmental PE
- Mapas de agua virtual (VNC): Simula imagen sin contraste, elimina una fase | Virtual non-contrast (VNC) maps: Simulates non-contrast image, eliminates one phase
- Cristales de urato: Deteccion de gota en articulaciones | Urate crystals: Gout detection in joints
- Calcio virtual no-calcio: Caracterizacion de lesiones oseas | Virtual non-calcium: Bone lesion characterization

**Mapas de Z-efectivo y numeros atomicos | Z-effective maps and atomic numbers:**
- Diferenciacion de litiasis renal (acido urico vs calcio) | Renal stone differentiation (uric acid vs calcium)
- Caracterizacion de nodulos adrenales (adenoma lipido-pobre) | Adrenal nodule characterization (lipid-poor adenoma)
- Reduccion de artefactos metalicos | Metal artifact reduction

## TC de Perfusion | CT Perfusion

### Perfusion Cerebral | Brain Perfusion

**Parametros funcionales: | Functional parameters:**
- **CBF (flujo sanguineo cerebral):** mL/100g/min | CBF (cerebral blood flow): mL/100g/min
- **CBV (volumen sanguineo cerebral):** mL/100g | CBV (cerebral blood volume): mL/100g
- **MTT (tiempo de transito medio):** Segundos | MTT (mean transit time): Seconds
- **Tmax:** Tiempo al maximo de la funcion residuo | Time to maximum of the residue function

**Interpretacion en ictus isquemico agudo | Acute ischemic stroke interpretation:**

| Patron | Significado |
|--------|-----------|
| CBF bajo, CBV bajo | Core infartado (irreversible) | Low CBF, low CBV | Infarcted core (irreversible) |
| CBF bajo, CBV normal/alto | Penumbra isquemica (rescatable) | Low CBF, normal/high CBV | Ischemic penumbra (salvageable) |
| Mismatch core-penumbra >1.8 | Candidato a trombectomia mecanica (hasta 24h en seleccionados) | Core-penumbra mismatch >1.8 | Candidate for mechanical thrombectomy (up to 24h in selected) |

**Ensayos clinicos que respaldan: | Supporting clinical trials:**
- DAWN: Trombectomia 6-24h basada en mismatch clinico-imagen | DAWN: Thrombectomy 6-24h based on clinical-imaging mismatch
- DEFUSE-3: Trombectomia 6-16h basada en mismatch por perfusion | DEFUSE-3: Thrombectomy 6-16h based on perfusion mismatch

### Perfusion Miocardica | Myocardial Perfusion

- Evaluacion de isquemia miocardica | Myocardial ischemia assessment
- Defectos de perfusion en estres y reposo | Stress and rest perfusion defects
- Complementa la angiografia coronaria por TC | Complements coronary CT angiography

## Protocolos Avanzados por Organo | Advanced Organ-Specific Protocols

### TC Coronaria | Coronary CT

**Angiografia coronaria por TC (CCTA): | Coronary CT angiography (CCTA):**
- Requiere frecuencia cardiaca <65 bpm (betabloqueante previo) | Requires heart rate <65 bpm (prior beta-blocker)
- Gating retrospectivo o prospectivo (menor dosis) | Retrospective or prospective gating (lower dose)
- Evaluacion de estenosis, placas, anomalias congenitas | Stenosis, plaque, and congenital anomaly evaluation
- Score de calcio coronario (Agatston): Sin contraste, predictor de riesgo cardiovascular | Coronary calcium score (Agatston): Non-contrast, CV risk predictor

**CAD-RADS (clasificacion): | CAD-RADS (classification):**

| CAD-RADS | Estenosis maxima | Manejo |
|----------|-----------------|--------|
| 0 | 0% | No estenosis, manejo preventivo | No stenosis, preventive management |
| 1 | 1-24% | Estenosis minima | Minimal stenosis |
| 2 | 25-49% | Estenosis leve | Mild stenosis |
| 3 | 50-69% | Estenosis moderada, prueba funcional | Moderate stenosis, functional testing |
| 4A | 70-99% | Estenosis severa, considerar cateterismo | Severe stenosis, consider catheterization |
| 4B | Tronco coronario izquierdo >50% o 3 vasos >70% | Considerar revascularizacion | Left main >50% or 3-vessel >70% | Consider revascularization |
| 5 | Oclusion total | Total occlusion |

### TC Enterografia | CT Enterography

- Contraste oral neutro (agua, sorbitol) para distender asas | Neutral oral contrast (water, sorbitol) for bowel distension
- Evaluacion de enfermedad de Crohn: engrosamiento mural, estratificacion, fistulas | Crohn's disease evaluation: wall thickening, stratification, fistulas
- Complicaciones: estenosis, abscesos, perforacion contenida | Complications: strictures, abscesses, contained perforation

### Colonoscopia Virtual (Colonografia por TC) | Virtual Colonoscopy (CT Colonography)

- Preparacion intestinal completa + insuflacion de CO2 | Complete bowel preparation + CO2 insufflation
- Software de navegacion endoluminal virtual | Virtual endoluminal navigation software
- Deteccion de polipos >=6 mm comparable a colonoscopia optica | Polyp detection >=6 mm comparable to optical colonoscopy
- Limitacion: No permite biopsia ni polipectomia | Limitation: Cannot biopsy or perform polypectomy

## Estrategias de Reduccion de Dosis | Dose Reduction Strategies

### Principio ALARA | ALARA Principle

"As Low As Reasonably Achievable" - tan baja como sea razonablemente alcanzable: | As Low As Reasonably Achievable:

| Estrategia | Reduccion de dosis |
|-----------|-------------------|
| Reconstruccion iterativa | 20-50% | Iterative reconstruction |
| Modulacion automatica de corriente (mA) | 20-40% | Automatic tube current modulation |
| Ajuste de kVp segun indicacion y habito | Variable | kVp adjustment by indication and body habitus |
| Escudo de bismuto para tiroides/mamas | 20-40% superficial | Bismuth shield for thyroid/breast |
| Gating prospectivo (TC coronaria) | 60-80% vs retrospectivo | Prospective gating (coronary CT) |
| Reduccion del rango de exploracion | Proporcional | Scan range reduction | Proportional |

### Metricas de Dosis | Dose Metrics

- **CTDIvol (mGy):** Dosis absorbida promedio en el volumen del escaner | Average absorbed dose in the scanner volume
- **DLP (mGy-cm):** Producto dosis-longitud, refleja dosis total al paciente | Dose-length product, reflects total patient dose
- **Dosis efectiva (mSv):** DLP x factor de conversion (k); permite comparacion entre estudios | Effective dose (mSv): DLP x conversion factor (k); enables comparison between studies

| Estudio | Dosis efectiva tipica (mSv) |
|---------|---------------------------|
| TC cabeza | 2 | Head CT | 2 |
| TC torax | 5-7 | Chest CT | 5-7 |
| TC abdomen/pelvis | 8-14 | Abdomen/pelvis CT | 8-14 |
| TC coronaria (prospectivo) | 1-5 | Coronary CT (prospective) | 1-5 |
| TC coronaria (retrospectivo) | 10-20 | Coronary CT (retrospective) | 10-20 |
| TC cuerpo completo trauma | 15-25 | Whole-body trauma CT | 15-25 |`,
      keyTerms: [
        {
          term: 'DECT (TC de doble energia) | DECT (dual-energy CT)',
          definition: 'Tecnologia de TC que adquiere datos a dos niveles de energia para permitir descomposicion de materiales, mapas de yodo, diferenciacion de litiasis, y reduccion de artefactos metalicos. | CT technology acquiring data at two energy levels to enable material decomposition, iodine maps, stone differentiation, and metal artifact reduction.',
        },
        {
          term: 'CBF / CBV / MTT / Tmax',
          definition: 'Parametros de perfusion cerebral: CBF (flujo sanguineo), CBV (volumen sanguineo), MTT (tiempo de transito medio), Tmax (tiempo al maximo residuo). Permiten diferenciar core infartado de penumbra rescatable. | Brain perfusion parameters: CBF (blood flow), CBV (blood volume), MTT (mean transit time), Tmax (time to residue maximum). Allow differentiating infarcted core from salvageable penumbra.',
        },
        {
          term: 'CAD-RADS',
          definition: 'Coronary Artery Disease Reporting and Data System: Clasificacion estandarizada para la estenosis coronaria detectada por angioTC, de 0 (sin estenosis) a 5 (oclusion total). | Standardized classification for coronary stenosis detected by CTA, from 0 (no stenosis) to 5 (total occlusion).',
        },
        {
          term: 'CTDIvol / DLP',
          definition: 'CTDIvol: Dosis absorbida promedio en el volumen escaneado (mGy). DLP: Producto dosis-longitud (mGy-cm), proporcional a la dosis total del paciente. Metricas estandar de dosis en TC. | CTDIvol: Average absorbed dose in scanned volume (mGy). DLP: Dose-length product (mGy-cm), proportional to total patient dose. Standard CT dose metrics.',
        },
        {
          term: 'ALARA',
          definition: 'Principio de proteccion radiologica: reducir la dosis de radiacion "tan baja como sea razonablemente alcanzable" sin comprometer la calidad diagnostica. | Radiation protection principle: reduce radiation dose "as low as reasonably achievable" without compromising diagnostic quality.',
        },
      ],
      clinicalNotes: 'La seleccion del protocolo de TC debe basarse en la pregunta clinica, no en un abordaje unico. La TC de doble energia anade valor significativo en: diferenciacion de litiasis renal, deteccion de gota, mapas de yodo para TEP subsegmentaria, y reduccion de artefactos metalicos. La perfusion cerebral por TC ha transformado el manejo del ictus isquemico, expandiendo la ventana de trombectomia hasta 24 horas en pacientes seleccionados (DAWN, DEFUSE-3). | CT protocol selection should be based on the clinical question, not a one-size-fits-all approach. DECT adds significant value in: renal stone differentiation, gout detection, iodine maps for subsegmental PE, and metal artifact reduction. CT perfusion has transformed ischemic stroke management, expanding the thrombectomy window to 24 hours in selected patients (DAWN, DEFUSE-3).',
    },
    5: {
      level: 5,
      summary: 'La TC de vanguardia incorpora conteo de fotones, radiómica, inteligencia artificial para deteccion y cuantificacion automatizada, y protocolos de investigacion translacional que transforman la TC de una herramienta puramente diagnostica a un biomarcador de imagen integrado en la toma de decisiones terapeuticas personalizadas. | Cutting-edge CT incorporates photon counting, radiomics, artificial intelligence for automated detection and quantification, and translational research protocols that transform CT from a purely diagnostic tool into an imaging biomarker integrated into personalized therapeutic decision-making.',
      explanation: `## TC por Conteo de Fotones (Photon-Counting CT) | Photon-Counting CT

### Tecnologia de Detectores | Detector Technology

**Detectores convencionales (integradores de energia): | Conventional detectors (energy-integrating):**
- Convierten rayos X a luz (centelleo) y luego a senal electrica | Convert X-rays to light (scintillation) then to electrical signal
- Integran toda la energia de los fotones | Integrate all photon energy
- Limitaciones: Ruido electronico, retrodispersion, tamano de pixel fijo | Limitations: Electronic noise, cross-talk, fixed pixel size

**Detectores de conteo de fotones: | Photon-counting detectors:**
- Material semiconductor (CdTe, CdZnTe) convierte rayos X directamente a senal electrica | Semiconductor material (CdTe, CdZnTe) converts X-rays directly to electrical signal
- Cuenta cada foton individualmente y mide su energia | Counts each photon individually and measures its energy
- Multiples umbrales de energia simultaneos (4-8 bins) | Multiple simultaneous energy thresholds (4-8 bins)

**Ventajas clinicas | Clinical advantages:**
- Resolucion espacial superior (pixeles mas pequenos, <0.2 mm) | Superior spatial resolution (smaller pixels, <0.2 mm)
- Eliminacion de ruido electronico | Electronic noise elimination
- Espectral intrinseco: Descomposicion multimateria sin dosis adicional | Intrinsic spectral: Multi-material decomposition without additional dose
- Mejor CNR a dosis equivalente o igual CNR a dosis reducida | Better CNR at equivalent dose or same CNR at reduced dose
- Imagenes UHR (ultra-alta resolucion) para hueso temporal, coronarias, pulmon | UHR images for temporal bone, coronary, lung

### Aplicaciones Emergentes | Emerging Applications

**Imagen espectral multienergia: | Multi-energy spectral imaging:**
- Cuantificacion simultanea de yodo, calcio, gadolinio, agentes K-edge | Simultaneous quantification of iodine, calcium, gadolinium, K-edge agents
- Mapas de concentracion de yodo para evaluacion de perfusion tumoral | Iodine concentration maps for tumor perfusion evaluation
- Deteccion de agentes de contraste de siguiente generacion (nanoparticulas con bismuto, tungsteno) | Next-generation contrast agent detection (bismuth, tungsten nanoparticles)

## Radiomica e Inteligencia Artificial | Radiomics and Artificial Intelligence

### Radiomica | Radiomics

**Definicion | Definition:**
La radiomica extrae caracteristicas cuantitativas de alto rendimiento de imagenes medicas que no son apreciables al ojo humano, creando firmas de imagen que pueden correlacionarse con genomica, pronostico y respuesta al tratamiento. | Radiomics extracts high-throughput quantitative features from medical images not appreciable to the human eye, creating image signatures that can correlate with genomics, prognosis, and treatment response.

**Pipeline radiomico: | Radiomics pipeline:**
1. Segmentacion del volumen de interes (manual, semi-automatica, AI) | Volume of interest segmentation (manual, semi-automatic, AI)
2. Extraccion de caracteristicas: forma, textura (GLCM, GLRLM, GLSZM), primer orden | Feature extraction: shape, texture (GLCM, GLRLM, GLSZM), first-order
3. Seleccion de caracteristicas y reduccion de dimensionalidad | Feature selection and dimensionality reduction
4. Modelado predictivo (machine learning, deep learning) | Predictive modeling (machine learning, deep learning)
5. Validacion y reproducibilidad | Validation and reproducibility

**Aplicaciones clinicas activas: | Active clinical applications:**
- Prediccion de respuesta a inmunoterapia en cancer de pulmon (radiogenomica) | Immunotherapy response prediction in lung cancer (radiogenomics)
- Diferenciacion de nodulos pulmonares benignos vs malignos | Benign vs malignant lung nodule differentiation
- Prediccion de patron molecular en gliomas (IDH, MGMT, 1p/19q) | Molecular pattern prediction in gliomas (IDH, MGMT, 1p/19q)
- Evaluacion de respuesta tumoral mas alla de RECIST (volumen, textura) | Tumor response assessment beyond RECIST (volume, texture)

### IA en TC: Estado del Arte | AI in CT: State of the Art

**Deteccion automatizada | Automated detection:**
- Embolia pulmonar: Algoritmos aprobados FDA para triaje (sensibilidad >90%) | PE: FDA-cleared algorithms for triage (sensitivity >90%)
- Hemorragia intracraneal: Priorizacion de worklist (disminuye tiempo a diagnostico) | Intracranial hemorrhage: Worklist prioritization (decreases time to diagnosis)
- Fracturas vertebrales: Deteccion incidental en TC de torax/abdomen | Vertebral fractures: Incidental detection on chest/abdominal CT
- Nodulos pulmonares: Deteccion CAD, volumetria automatizada, clasificacion Lung-RADS | Pulmonary nodules: CAD detection, automated volumetry, Lung-RADS classification

**Cuantificacion automatizada | Automated quantification:**
- Composicion corporal: Musculo esqueletico, grasa visceral, grasa subcutanea (sarcopenia) | Body composition: Skeletal muscle, visceral fat, subcutaneous fat (sarcopenia)
- Densidad osea oportunista: Cuantificacion de osteoporosis en TC abdominal de rutina | Opportunistic bone density: Osteoporosis quantification on routine abdominal CT
- Volumen y densidad hepatica: Planificacion pre-hepatectomia | Liver volume and density: Pre-hepatectomy planning
- Cuantificacion de coronarias: Calcio, estenosis, grasa perivascular | Coronary quantification: Calcium, stenosis, perivascular fat

**Deep learning para reconstruccion | Deep learning for reconstruction:**
- Redes neuronales reemplazan reconstruccion iterativa convencional | Neural networks replace conventional iterative reconstruction
- Mejor supresion de ruido preservando textura diagnostica | Better noise suppression preserving diagnostic texture
- Habilitacion de protocolos ultra-low-dose en screening | Enabling ultra-low-dose screening protocols
- Implementacion clinica activa en multiples fabricantes | Active clinical implementation across multiple vendors

## Protocolos de Investigacion Translacional | Translational Research Protocols

### TC en Screening de Cancer de Pulmon | CT in Lung Cancer Screening

**Evidencia y guias | Evidence and guidelines:**
- NLST: TC de baja dosis reduce mortalidad por cancer de pulmon 20% vs radiografia | NLST: Low-dose CT reduces lung cancer mortality 20% vs CXR
- NELSON: Confirmacion europea; reduccion de mortalidad 24% a 10 anos | NELSON: European confirmation; 24% mortality reduction at 10 years
- USPSTF 2021: Screening anual para 50-80 anos con >=20 paquetes-ano, fumador actual o ex-fumador <15 anos | USPSTF 2021: Annual screening for 50-80 years with >=20 pack-years, current or former smoker <15 years

**Lung-RADS (clasificacion de hallazgos): | Lung-RADS (findings classification):**

| Lung-RADS | Hallazgo | Manejo |
|-----------|---------|--------|
| 1 | Negativo / Hallazgos benignos | TC anual | Negative / Benign findings | Annual CT |
| 2 | Hallazgos benignos (nodulo <6 mm) | TC anual | Benign findings (nodule <6 mm) | Annual CT |
| 3 | Probablemente benigno (6-8 mm nuevo) | TC 6 meses | Probably benign (6-8 mm new) | CT 6 months |
| 4A | Sospechoso (>8 mm nuevo, crecimiento lento) | TC 3 meses o PET | Suspicious (>8 mm new, slow growth) | CT 3 months or PET |
| 4B | Muy sospechoso (>15 mm nuevo, crecimiento rapido) | Biopsia, PET, TC 1 mes | Very suspicious (>15 mm new, rapid growth) | Biopsy, PET, CT 1 month |
| 4X | Hallazgo con sospecha adicional | Manejo segun hallazgo | Finding with additional suspicion | Management per finding |

### TC Funcional y Biomarcadores de Imagen | Functional CT and Imaging Biomarkers

**Biomarcadores cuantitativos emergentes | Emerging quantitative biomarkers:**
- Grasa pericoronaria atenuada (FAI): Inflamacion vascular y riesgo cardiovascular | Pericoronary fat attenuation (FAI): Vascular inflammation and cardiovascular risk
- Analisis parametrico de enfisema (PRM): Cuantificacion funcional del atrapamiento aereo | Parametric response mapping (PRM): Functional air trapping quantification
- Sarcopenia por TC: Predictor independiente de mortalidad quirurgica | CT sarcopenia: Independent predictor of surgical mortality
- Hepatoesteatosis cuantitativa: Densidad hepatica en UH como biomarcador metabolico | Quantitative hepatic steatosis: Liver density in HU as metabolic biomarker

### Retos y Futuro | Challenges and Future

**Estandarizacion | Standardization:**
- Variabilidad entre fabricantes en algoritmos de reconstruccion | Inter-vendor variability in reconstruction algorithms
- Necesidad de phantoms estandar para radiomica | Need for standard phantoms for radiomics
- Armonizacion de protocolos multicéntricos | Multicenter protocol harmonization

**Integracion clinica de AI | AI clinical integration:**
- Regulacion FDA/CE para herramientas autonomas vs asistenciales | FDA/CE regulation for autonomous vs assistive tools
- Responsabilidad medico-legal | Medico-legal liability
- Explicabilidad de modelos (XAI) | Model explainability (XAI)
- Sesgo en datos de entrenamiento y equidad en salud | Training data bias and health equity

**Agentes de contraste de nueva generacion | Next-generation contrast agents:**
- Nanoparticulas con K-edge optimizado para conteo de fotones | Nanoparticles with K-edge optimized for photon counting
- Agentes teranosticos: Diagnostico + terapia dirigida | Theranostic agents: Diagnostics + targeted therapy
- Contraste hepatobiliar combinado con espectral | Hepatobiliary contrast combined with spectral`,
      keyTerms: [
        {
          term: 'conteo de fotones | photon counting',
          definition: 'Tecnologia de detectores de TC que cuenta cada foton de rayos X individualmente y mide su energia, permitiendo imagen espectral intrinseca, mayor resolucion espacial, y eliminacion de ruido electronico. | CT detector technology counting each X-ray photon individually and measuring its energy, enabling intrinsic spectral imaging, higher spatial resolution, and electronic noise elimination.',
        },
        {
          term: 'radiomica | radiomics',
          definition: 'Campo de la imagen medica que extrae caracteristicas cuantitativas de alto rendimiento (forma, textura, heterogeneidad) de imagenes para crear firmas predictivas correlacionadas con biologia tumoral, pronostico y respuesta terapeutica. | Medical imaging field extracting high-throughput quantitative features (shape, texture, heterogeneity) from images to create predictive signatures correlated with tumor biology, prognosis, and therapeutic response.',
        },
        {
          term: 'Lung-RADS',
          definition: 'Sistema de reporte estandarizado del ACR para clasificar hallazgos en TC de screening de cancer pulmonar, desde categoria 1 (negativo) hasta 4X (hallazgo altamente sospechoso con sospecha adicional). | ACR standardized reporting system for classifying findings on lung cancer screening CT, from category 1 (negative) to 4X (highly suspicious finding with additional suspicion).',
        },
        {
          term: 'FAI (indice de atenuacion de grasa pericoronaria) | FAI (pericoronary fat attenuation index)',
          definition: 'Biomarcador cuantitativo derivado de la TC coronaria que mide la inflamacion perivascular como predictor de riesgo cardiovascular, independiente de la estenosis. | Quantitative biomarker derived from coronary CT measuring perivascular inflammation as a cardiovascular risk predictor, independent of stenosis.',
        },
        {
          term: 'radiogenomica | radiogenomics',
          definition: 'Integracion de caracteristicas de imagen (radiomica) con datos genomicos y moleculares para predecir el comportamiento tumoral y la respuesta terapeutica de forma no invasiva. | Integration of image features (radiomics) with genomic and molecular data to non-invasively predict tumor behavior and therapeutic response.',
        },
        {
          term: 'XAI (inteligencia artificial explicable) | XAI (explainable AI)',
          definition: 'Aproximacion a la IA que busca hacer transparentes y comprensibles las decisiones algoritmicas, critica para la adopcion clinica y la responsabilidad medico-legal. | AI approach seeking to make algorithmic decisions transparent and understandable, critical for clinical adoption and medico-legal accountability.',
        },
      ],
      clinicalNotes: 'La TC por conteo de fotones representa el mayor avance en hardware de TC en 20 anos. Sus primeras indicaciones clinicas validadas incluyen: coronarias (resolucion superior), oido interno (detalle oseo submilimetrico), pulmon (evaluacion de enfisema), y ortopedia (reduccion de artefactos metalicos). La radiomica esta transformando la oncologia pero su adopcion clinica requiere estandarizacion y validacion prospectiva. El screening de cancer de pulmon por TC de baja dosis debe implementarse con infraestructura adecuada: radiologos certificados, conferencias multidisciplinarias, y seguimiento estructurado con Lung-RADS. | Photon-counting CT represents the biggest CT hardware advancement in 20 years. Its first validated clinical indications include: coronary (superior resolution), inner ear (submillimeter bone detail), lung (emphysema evaluation), and orthopedics (metal artifact reduction). Radiomics is transforming oncology but clinical adoption requires standardization and prospective validation. Low-dose CT lung cancer screening should be implemented with adequate infrastructure: certified radiologists, multidisciplinary conferences, and structured follow-up with Lung-RADS.',
    },
  },

  media: [],

  citations: [
    {
      id: 'bushberg-physics',
      type: 'textbook',
      title: 'The Essential Physics of Medical Imaging',
      authors: ['Bushberg JT', 'Seibert JA', 'Leidholdt EM', 'Boone JM'],
      source: 'Lippincott Williams & Wilkins',
      chapter: 'Computed Tomography',
    },
    {
      id: 'nlst-trial',
      type: 'article',
      title: 'Reduced Lung-Cancer Mortality with Low-Dose Computed Tomographic Screening',
      authors: ['National Lung Screening Trial Research Team'],
      source: 'N Engl J Med',
      url: 'https://doi.org/10.1056/NEJMoa1102873',
    },
    {
      id: 'dawn-trial',
      type: 'article',
      title: 'Thrombectomy 6 to 24 Hours after Stroke with a Mismatch between Deficit and Infarct',
      authors: ['Nogueira RG', 'Jadhav AP', 'Haussen DC', 'et al.'],
      source: 'N Engl J Med',
      url: 'https://doi.org/10.1056/NEJMoa1706442',
    },
    {
      id: 'acr-manual-contrast',
      type: 'guideline',
      title: 'ACR Manual on Contrast Media',
      authors: ['American College of Radiology Committee on Drugs and Contrast Media'],
      source: 'ACR',
      url: 'https://www.acr.org/Clinical-Resources/Contrast-Manual',
    },
    {
      id: 'flohr-photon-counting',
      type: 'article',
      title: 'Photon-counting CT review',
      authors: ['Flohr T', 'Petersilka M', 'Henning A', 'et al.'],
      source: 'Phys Med',
      url: 'https://doi.org/10.1016/j.ejmp.2020.02.010',
    },
  ],

  crossReferences: [
    { targetId: 'topic-chest-xray-interpretation', targetType: 'topic', relationship: 'sibling', label: 'Radiografia de Torax | Chest X-Ray' },
    { targetId: 'topic-mri-principles', targetType: 'topic', relationship: 'sibling', label: 'Resonancia Magnetica | MRI' },
    { targetId: 'topic-radiation-safety', targetType: 'topic', relationship: 'related', label: 'Seguridad Radiologica | Radiation Safety' },
    { targetId: 'condition-pneumonia', targetType: 'condition', relationship: 'related', label: 'Neumonia | Pneumonia' },
    { targetId: 'topic-basic-ultrasound', targetType: 'topic', relationship: 'sibling', label: 'Ecografia Basica | Basic Ultrasound' },
    { targetId: 'condition-pulmonary-embolism', targetType: 'condition', relationship: 'related', label: 'Embolia Pulmonar | Pulmonary Embolism' },
  ],

  tags: {
    systems: ['respiratory', 'cardiovascular', 'nervous', 'digestive'],
    topics: ['radiology', 'imaging', 'diagnostics', 'oncology', 'emergency medicine', 'neurology'],
    keywords: [
      'tomografia computarizada', 'CT scan', 'TAC', 'Hounsfield',
      'contraste yodado', 'doble energia', 'DECT', 'perfusion cerebral',
      'angiografia', 'CTA', 'conteo de fotones', 'radiomica',
      'cancer de pulmon screening', 'Lung-RADS', 'ALARA',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'neurology', 'emergency medicine', 'radiology'],
    },
  },

  createdAt: '2026-02-05T00:00:00.000Z',
  updatedAt: '2026-02-05T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default tomografiaComputarizadaCtScan;
