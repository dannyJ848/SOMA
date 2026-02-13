/**
 * Ecografia Basica / Basic Ultrasound - POCUS and FAST Exam
 *
 * Comprehensive educational content covering point-of-care ultrasound
 * principles, FAST exam, common applications, and clinical integration.
 *
 * Spanish-first with English translations.
 */

import { EducationalContent } from '../types';

export const ecografiaBasicaBasicUltrasound: EducationalContent = {
  id: 'topic-basic-ultrasound',
  type: 'topic',
  name: 'Ecografia Basica - POCUS y Examen FAST | Basic Ultrasound - POCUS and FAST Exam',
  nameEs: 'Ecografia Basica',
  alternateNames: [
    'Ultrasound',
    'US',
    'Sonography',
    'Ecografia',
    'Ultrasonido',
    'POCUS',
    'Point-of-Care Ultrasound',
    'Ecografia a Pie de Cama',
    'FAST Exam',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'La ecografia (ultrasonido) es una prueba que usa ondas de sonido para crear imagenes del interior del cuerpo en tiempo real, sin radiacion ni dolor. | Ultrasound is a test that uses sound waves to create real-time images of the inside of the body, without radiation or pain.',
      explanation: `## Que es la ecografia? | What is ultrasound?

La ecografia, tambien llamada ultrasonido o "eco", es una prueba que usa ondas de sonido de muy alta frecuencia (que no podemos oir) para crear imagenes del interior del cuerpo. Es la misma tecnologia que se usa para ver al bebe durante el embarazo. | Ultrasound, also called "echo" or "sono," is a test that uses very high-frequency sound waves (that we cannot hear) to create images of the inside of the body. It is the same technology used to see the baby during pregnancy.

### Como funciona? | How does it work?

1. **El doctor pone un gel en su piel | The doctor puts gel on your skin** - El gel ayuda a que las ondas de sonido viajen mejor | The gel helps sound waves travel better
2. **Usa una sonda (transductor) sobre su piel | Uses a probe (transducer) on your skin** - La sonda envia ondas de sonido y escucha los ecos que regresan | The probe sends sound waves and listens to the echoes that come back
3. **La computadora crea la imagen | The computer creates the image** - Los ecos se convierten en imagenes que el doctor ve en la pantalla | The echoes become images the doctor sees on the screen
4. **Se puede ver en tiempo real | You can see in real time** - El doctor ve las imagenes moverse mientras le examina | The doctor sees the images move while examining you

### Para que se usa? | What is it used for?

- **Embarazo | Pregnancy:** Ver al bebe, su tamano y posicion | See the baby, its size and position
- **Corazon | Heart:** Ver como se mueve y bombea el corazon | See how the heart moves and pumps
- **Abdomen | Abdomen:** Revisar el higado, rinones, vesicula biliar | Check the liver, kidneys, gallbladder
- **Tiroides | Thyroid:** Buscar nodulos en la glandula del cuello | Look for nodules in the neck gland
- **Vasos sanguineos | Blood vessels:** Ver si hay coagulos en las piernas | Check for blood clots in the legs
- **Urgencias | Emergencies:** Buscar sangrado interno despues de un accidente | Look for internal bleeding after an accident
- **Guia de procedimientos | Procedure guidance:** Ayudar a colocar agujas en el lugar correcto | Help place needles in the right location

### Ventajas de la ecografia | Advantages of ultrasound

- **Sin radiacion | No radiation:** Completamente segura, se puede repetir muchas veces | Completely safe, can be repeated many times
- **Sin dolor | No pain:** Solo siente el gel frio y la presion de la sonda | You only feel the cold gel and probe pressure
- **Rapida | Fast:** Generalmente dura de 15 a 30 minutos | Usually lasts 15 to 30 minutes
- **Portatil | Portable:** Se puede llevar a la cama del paciente | Can be brought to the patient's bedside
- **Tiempo real | Real time:** Se ve el movimiento al instante | Movement is seen instantly
- **Economica | Affordable:** Mas barata que la TC o la RM | Cheaper than CT or MRI

### FAST: Ecografia de Emergencia | FAST: Emergency Ultrasound

Despues de un accidente o golpe fuerte, los doctores usan una ecografia especial y rapida llamada FAST para buscar sangrado interno. Toma solo unos minutos y puede salvar vidas al encontrar problemas que necesitan cirugia inmediata. | After an accident or serious injury, doctors use a special, quick ultrasound called FAST to look for internal bleeding. It takes only a few minutes and can save lives by finding problems that need immediate surgery.

### Preparacion | Preparation

- Generalmente no necesita preparacion especial | Generally no special preparation needed
- Para ecografia abdominal: Puede que le pidan no comer por 6-8 horas (vesicula) | For abdominal ultrasound: You may be asked to not eat for 6-8 hours (gallbladder)
- Para ecografia pelvica: Puede que le pidan tener la vejiga llena | For pelvic ultrasound: You may be asked to have a full bladder`,
      keyTerms: [
        {
          term: 'ecografia / ultrasonido | ultrasound',
          definition: 'Una prueba que usa ondas de sonido (no radiacion) para crear imagenes del interior del cuerpo. Es segura, sin dolor, y puede hacerse muchas veces. | A test that uses sound waves (not radiation) to create images of the inside of the body. It is safe, painless, and can be done many times.',
        },
        {
          term: 'transductor / sonda | transducer / probe',
          definition: 'El dispositivo que el doctor coloca sobre su piel. Envia las ondas de sonido y recibe los ecos para crear las imagenes. | The device the doctor places on your skin. It sends sound waves and receives echoes to create the images.',
        },
        {
          term: 'gel de ultrasonido | ultrasound gel',
          definition: 'Un gel transparente que se pone en la piel para ayudar a que las ondas de sonido viajen mejor entre la sonda y su cuerpo. | A clear gel applied to the skin to help sound waves travel better between the probe and your body.',
        },
        {
          term: 'FAST',
          definition: 'Focused Assessment with Sonography for Trauma: Una ecografia rapida que hacen los doctores despues de un accidente para buscar sangrado interno en el abdomen y alrededor del corazon. | A quick ultrasound doctors do after an accident to look for internal bleeding in the abdomen and around the heart.',
        },
      ],
      analogies: [
        'La ecografia funciona como el sonar de un delfin o un submarino: envia ondas de sonido que rebotan en los objetos y regresan, permitiendo "ver" lo que hay adelante. | Ultrasound works like a dolphin or submarine sonar: it sends sound waves that bounce off objects and come back, allowing it to "see" what is ahead.',
        'El gel de la ecografia es como el agua en una piscina: sin el, las ondas de sonido no pueden viajar bien entre la sonda y su cuerpo, igual que usted no puede oir bien a alguien hablando fuera del agua cuando esta sumergido. | Ultrasound gel is like water in a pool: without it, sound waves cannot travel well between the probe and your body, just like you cannot hear well someone speaking outside the water when you are submerged.',
      ],
      examples: [
        'Una embarazada va a su consulta mensual y la doctora le hace una ecografia para ver como crece el bebe, escuchar su corazon, y saber si es nino o nina. | A pregnant woman goes to her monthly visit and the doctor does an ultrasound to see how the baby is growing, listen to its heart, and learn if it is a boy or girl.',
        'Una persona llega a urgencias con dolor en el lado derecho del abdomen. Le hacen una ecografia y ven que tiene piedras en la vesicula biliar. | A person arrives at the ER with pain on the right side of the abdomen. They do an ultrasound and see they have gallstones.',
      ],
    },
    2: {
      level: 2,
      summary: 'La ecografia utiliza ondas sonoras de alta frecuencia (2-15 MHz) para generar imagenes en tiempo real de estructuras anatomicas, con aplicaciones criticas en emergencias (FAST/eFAST), obstetricia, evaluacion cardiaca, y guia de procedimientos invasivos. | Ultrasound uses high-frequency sound waves (2-15 MHz) to generate real-time images of anatomical structures, with critical applications in emergencies (FAST/eFAST), obstetrics, cardiac evaluation, and invasive procedure guidance.',
      explanation: `## Principios Basicos de la Ecografia | Basic Ultrasound Principles

### Fisica del Ultrasonido | Ultrasound Physics

**Ondas sonoras: | Sound waves:**
- Frecuencia: 2-15 MHz (por encima del rango audible humano de 20 kHz) | Frequency: 2-15 MHz (above human audible range of 20 kHz)
- Frecuencia alta (7-15 MHz): Mejor resolucion, menor penetracion (estructuras superficiales) | High frequency (7-15 MHz): Better resolution, less penetration (superficial structures)
- Frecuencia baja (2-5 MHz): Menor resolucion, mayor penetracion (estructuras profundas) | Low frequency (2-5 MHz): Lower resolution, greater penetration (deep structures)

**Interaccion con los tejidos: | Tissue interaction:**
- **Reflexion:** Parte de la onda rebota en las interfaces entre tejidos | Part of the wave bounces at interfaces between tissues
- **Atenuacion:** La senal se debilita a mayor profundidad | The signal weakens at greater depth
- **Refraccion:** Cambio de direccion en interfaces | Direction change at interfaces
- **Sombra acustica:** Los objetos muy densos (calculos, hueso) bloquean el sonido | Acoustic shadow: Very dense objects (stones, bone) block sound

### Tipos de Transductores | Types of Transducers

| Transductor | Forma | Frecuencia | Usos |
|------------|-------|-----------|------|
| Convexo (curvo) | Abanico | 2-5 MHz | Abdomen, pelvis | Convex (curved) | Fan | 2-5 MHz | Abdomen, pelvis |
| Lineal | Rectangular | 7-15 MHz | Vascular, musculoesqueletico, superficial | Linear | Rectangular | 7-15 MHz | Vascular, MSK, superficial |
| Sectorial (fasico) | Triangular | 1-5 MHz | Corazon, entre costillas | Phased array | Triangular | 1-5 MHz | Heart, between ribs |
| Endocavitario | Curvo largo | 5-9 MHz | Transvaginal, transrectal | Endocavitary | Long curved | 5-9 MHz | Transvaginal, transrectal |

### Modos de Imagen | Imaging Modes

**Modo B (Brightness mode):**
- Imagen 2D en escala de grises | 2D grayscale image
- El modo mas utilizado | Most commonly used mode
- Ecogenicidad: Hiperecoico (blanco), isoecoico (gris), hipoecoico (oscuro), anecoico (negro) | Echogenicity: Hyperechoic (white), isoechoic (gray), hypoechoic (dark), anechoic (black)

**Modo M (Motion mode):**
- Linea de tiempo que muestra movimiento en una sola linea | Timeline showing motion along a single line
- Uso principal: Movimiento cardiaco (valvulas, paredes) | Main use: Cardiac motion (valves, walls)
- Neumotorax: Signo de la orilla del mar (normal) vs signo de la estratosfera (neumotorax) | Pneumothorax: Seashore sign (normal) vs stratosphere sign (pneumothorax)

**Doppler Color | Color Doppler:**
- Muestra la direccion y velocidad del flujo sanguineo en colores | Shows direction and speed of blood flow in colors
- Rojo: Flujo hacia el transductor | Red: Flow toward transducer
- Azul: Flujo alejandose del transductor | Blue: Flow away from transducer
- Uso: Evaluacion vascular, flujo en organos, insuficiencia valvular | Use: Vascular evaluation, organ flow, valve regurgitation

**Doppler Espectral (pulsado y continuo) | Spectral Doppler (pulsed and continuous):**
- Grafico de velocidad vs tiempo | Velocity vs time graph
- Mide velocidades de flujo especificas | Measures specific flow velocities
- Uso: Estenosis de vasos, flujo de arteria renal, evaluacion fetal | Use: Vessel stenosis, renal artery flow, fetal evaluation

## Examen FAST y eFAST | FAST and eFAST Exam

### FAST (Focused Assessment with Sonography for Trauma)

**4 ventanas estandar: | 4 standard windows:**

1. **Subxifoidea / Subcostal | Subxiphoid / Subcostal:**
   - Busca: Liquido pericardico (derrame, taponamiento cardiaco) | Looks for: Pericardial fluid (effusion, cardiac tamponade)
   - Signo positivo: Banda anecoica alrededor del corazon | Positive sign: Anechoic band around the heart

2. **Cuadrante superior derecho (Morrison) | Right upper quadrant (Morrison's pouch):**
   - Busca: Liquido libre entre higado y rinon derecho | Looks for: Free fluid between liver and right kidney
   - El espacio de Morrison es el sitio mas dependiente en posicion supina | Morrison's pouch is the most dependent space in supine position
   - Tambien evalua: Espacio hepatorrenal, receso subdiafragmatico derecho | Also evaluates: Hepatorenal space, right subdiaphragmatic recess

3. **Cuadrante superior izquierdo (esplenorrenal) | Left upper quadrant (splenorenal):**
   - Busca: Liquido entre bazo y rinon izquierdo | Looks for: Fluid between spleen and left kidney
   - Mas dificil de obtener (estomago con gas, bazo mas posterior) | More difficult to obtain (stomach gas, spleen more posterior)
   - Tambien evalua: Receso subdiafragmatico izquierdo | Also evaluates: Left subdiaphragmatic recess

4. **Suprapubica (pelvis) | Suprapubic (pelvis):**
   - Busca: Liquido libre en pelvis (fondo de saco de Douglas en mujeres, rectovesical en hombres) | Looks for: Free fluid in pelvis (pouch of Douglas in women, rectovesical in men)
   - Requiere vejiga llena como ventana acustica | Requires full bladder as acoustic window

### eFAST (Extended FAST)

Agrega 2 ventanas toracicas: | Adds 2 thoracic windows:

5-6. **Torax bilateral | Bilateral thorax:**
   - Busca: Neumotorax y hemotorax | Looks for: Pneumothorax and hemothorax
   - Neumotorax: Ausencia de deslizamiento pulmonar (lung sliding) | Pneumothorax: Absence of lung sliding
   - Hemotorax: Liquido anecoico en receso costodiafragmatico | Hemothorax: Anechoic fluid in costophrenic recess
   - Signo positivo de neumotorax: Punto pulmonar (lung point) donde se ve la transicion entre deslizamiento y no deslizamiento | Positive pneumothorax sign: Lung point where transition between sliding and no sliding is seen

### Interpretacion del FAST | FAST Interpretation

| Resultado | Significado | Accion |
|-----------|-----------|--------|
| FAST positivo + inestable | Liquido libre + shock | Laparotomia exploratoria urgente | Positive + unstable | Free fluid + shock | Urgent exploratory laparotomy |
| FAST positivo + estable | Liquido libre sin shock | TC para caracterizar lesion | Positive + stable | Free fluid without shock | CT to characterize injury |
| FAST negativo + inestable | Sin liquido visible pero en shock | Buscar otras causas de shock, repetir FAST | Negative + unstable | No visible fluid but in shock | Look for other causes of shock, repeat FAST |
| FAST negativo + estable | Sin liquido libre ni shock | Observacion clinica | Negative + stable | No free fluid or shock | Clinical observation |

## Otras Aplicaciones Comunes | Other Common Applications

### Ecografia Abdominal | Abdominal Ultrasound

- **Vesicula biliar:** Calculos (sombra acustica posterior), colecistitis (pared >3 mm, signo de Murphy ecografico) | Gallbladder: Stones (posterior acoustic shadow), cholecystitis (wall >3 mm, sonographic Murphy sign)
- **Higado:** Esteatosis, masas, cirrosis | Liver: Steatosis, masses, cirrhosis
- **Rinones:** Hidronefrosis, quistes, calculos | Kidneys: Hydronephrosis, cysts, stones
- **Aorta abdominal:** Aneurisma (>3 cm = aneurisma) | Abdominal aorta: Aneurysm (>3 cm = aneurysm)

### Ecografia Vascular | Vascular Ultrasound

- **Trombosis venosa profunda (TVP):** Compresion de venas con la sonda; si no se comprime = trombo | Deep vein thrombosis (DVT): Vein compression with probe; if non-compressible = thrombus
- **2-point compression:** Femoral comun + poplitea (sensibilidad >95% para TVP proximal) | Common femoral + popliteal (>95% sensitivity for proximal DVT)

### Guia de Procedimientos | Procedure Guidance

- Acceso venoso central | Central venous access
- Pericardiocentesis | Pericardiocentesis
- Toracocentesis | Thoracentesis
- Paracentesis | Paracentesis
- Artrocentesis | Arthrocentesis
- Bloqueo nervioso | Nerve block`,
      keyTerms: [
        {
          term: 'FAST (Focused Assessment with Sonography for Trauma)',
          definition: 'Protocolo ecografico estandarizado de 4 ventanas para detectar liquido libre en pacientes traumatizados: subxifoidea, cuadrante superior derecho (Morrison), cuadrante superior izquierdo (esplenorrenal), y suprapubica. | Standardized 4-window ultrasound protocol to detect free fluid in trauma patients: subxiphoid, right upper quadrant (Morrison), left upper quadrant (splenorenal), and suprapubic.',
        },
        {
          term: 'eFAST (Extended FAST)',
          definition: 'Extension del FAST que agrega evaluacion toracica bilateral para detectar neumotorax (ausencia de deslizamiento pulmonar) y hemotorax. | FAST extension adding bilateral thoracic evaluation to detect pneumothorax (absence of lung sliding) and hemothorax.',
        },
        {
          term: 'ecogenicidad | echogenicity',
          definition: 'Capacidad de un tejido de reflejar ondas de ultrasonido. Hiperecoico = brillante/blanco (calculos, hueso). Hipoecoico = oscuro (organos solidos). Anecoico = negro (liquido libre). | A tissue\'s ability to reflect ultrasound waves. Hyperechoic = bright/white (stones, bone). Hypoechoic = dark (solid organs). Anechoic = black (free fluid).',
        },
        {
          term: 'sombra acustica | acoustic shadow',
          definition: 'Area oscura detras de un objeto muy denso (calculo, hueso) que bloquea completamente las ondas de ultrasonido. Es una pista diagnostica importante para calculos biliares y renales. | Dark area behind a very dense object (stone, bone) that completely blocks ultrasound waves. Important diagnostic clue for gallstones and kidney stones.',
        },
        {
          term: 'espacio de Morrison | Morrison\'s pouch',
          definition: 'Espacio hepatorrenal entre el higado y el rinon derecho. Es el espacio peritoneal mas dependiente en posicion supina y el primer lugar donde se acumula el liquido libre en trauma. | Hepatorenal space between liver and right kidney. It is the most dependent peritoneal space in supine position and the first place where free fluid accumulates in trauma.',
        },
      ],
      analogies: [
        'La sombra acustica de un calculo biliar es como la sombra de un arbol en un dia soleado: el objeto solido bloquea las ondas (la luz del sol) y crea una sombra oscura detras de el. | The acoustic shadow of a gallstone is like a tree\'s shadow on a sunny day: the solid object blocks the waves (sunlight) and creates a dark shadow behind it.',
        'La compresion venosa para detectar TVP es como apretar una pajilla (popote): si esta vacia se aplasta facilmente, pero si tiene un coagulo adentro, no se puede comprimir. | Vein compression to detect DVT is like squeezing a straw: if it is empty it flattens easily, but if it has a clot inside, it cannot be compressed.',
      ],
    },
    3: {
      level: 3,
      summary: 'El POCUS integra principios de fisica acustica, optimizacion de imagen, y protocolos estandarizados (FAST, RUSH, BLUE) para proporcionar evaluacion diagnostica inmediata en emergencias, unidades de cuidados criticos, y consulta ambulatoria, complementando pero no reemplazando la ecografia formal del departamento de imagen. | POCUS integrates acoustic physics principles, image optimization, and standardized protocols (FAST, RUSH, BLUE) to provide immediate diagnostic evaluation in emergencies, critical care units, and ambulatory settings, complementing but not replacing formal imaging department ultrasound.',
      explanation: `## Fisica Acustica Avanzada | Advanced Acoustic Physics

### Principios de Formacion de Imagen | Image Formation Principles

**Ecuacion de velocidad del sonido: | Sound velocity equation:**
- v = f x lambda (velocidad = frecuencia x longitud de onda) | v = f x lambda (velocity = frequency x wavelength)
- Velocidad promedio en tejido blando: 1540 m/s | Average velocity in soft tissue: 1540 m/s
- Asumcion critica del equipo: Velocidad constante en todos los tejidos | Critical equipment assumption: Constant velocity in all tissues

**Impedancia acustica (Z): | Acoustic impedance (Z):**
- Z = densidad x velocidad del sonido | Z = density x velocity of sound
- La reflexion ocurre en interfaces con diferente Z | Reflection occurs at interfaces with different Z
- Mayor diferencia de Z = mayor reflexion (aire/tejido = reflexion casi total) | Greater Z difference = greater reflection (air/tissue = nearly total reflection)
- Por eso el aire en el intestino y los pulmones limita la ecografia | This is why air in bowel and lungs limits ultrasound

**Resolucion: | Resolution:**
- **Axial:** Distincion de dos puntos a lo largo del rayo. Depende de la frecuencia (mayor freq = mejor resolucion axial). | Axial: Distinguishing two points along the beam. Depends on frequency (higher freq = better axial resolution).
- **Lateral:** Distincion de dos puntos perpendiculares al rayo. Mejor en la zona focal. | Lateral: Distinguishing two points perpendicular to the beam. Best at the focal zone.
- **Temporal:** Capacidad de distinguir cambios en el tiempo. Depende de la tasa de cuadros (frame rate). | Temporal: Ability to distinguish changes over time. Depends on frame rate.

### Artefactos Ecograficos | Ultrasound Artifacts

**Artefactos utiles (diagnosticos): | Useful (diagnostic) artifacts:**
- **Sombra acustica posterior:** Posterior a calculos, hueso. Confirma la naturaleza solida/calcificada. | Posterior acoustic shadow: Behind stones, bone. Confirms solid/calcified nature.
- **Refuerzo acustico posterior:** Posterior a estructuras llenas de liquido (quistes). El tejido detras se ve mas brillante. | Posterior acoustic enhancement: Behind fluid-filled structures (cysts). Tissue behind appears brighter.
- **Lineas A (horizontales):** Reverberacion normal en pleura. Indican pulmón aireado normal. | A-lines (horizontal): Normal pleural reverberation. Indicate normal aerated lung.
- **Lineas B (verticales, "cola de cometa"):** Artefactos de reverberacion desde la pleura que se extienden hasta el fondo. Multiples B-lines = edema pulmonar. | B-lines (vertical, "comet tail"): Reverberation artifacts from pleura extending to screen bottom. Multiple B-lines = pulmonary edema.

**Artefactos que causan errores: | Error-causing artifacts:**
- **Reverberacion:** Ecos multiples entre dos interfaces reflectantes fuertes | Multiple echoes between two strong reflective interfaces
- **Espejo:** Estructuras duplicadas al otro lado de una interfaz reflectante fuerte (diafragma) | Mirror: Duplicated structures on other side of a strong reflective interface (diaphragm)
- **Lóbulo lateral:** Imagen fantasma lateral al verdadero origen del eco | Side lobe: Ghost image lateral to the true echo origin

## Protocolos Estandarizados de POCUS | Standardized POCUS Protocols

### Protocolo RUSH (Rapid Ultrasound for Shock and Hypotension)

**Evaluacion sistematica del paciente en shock: | Systematic evaluation of the patient in shock:**

**"The Pump" (Corazon) | "The Pump" (Heart):**
- Contractilidad global (eyection fraction visual) | Global contractility (visual ejection fraction)
- Tamano del VD (dilatado en TEP masiva) | RV size (dilated in massive PE)
- Derrame pericardico / taponamiento | Pericardial effusion / tamponade
- Actividad cardiaca (en reanimacion: organizada vs no organizada) | Cardiac activity (in resuscitation: organized vs unorganized)

**"The Tank" (Volemia) | "The Tank" (Volume status):**
- Vena cava inferior (VCI): Diametro y colapsabilidad | Inferior vena cava (IVC): Diameter and collapsibility
  - VCI <2.1 cm con colapso >50%: PVC ~0-5 mmHg (hipovolemia probable) | IVC <2.1 cm with >50% collapse: CVP ~0-5 mmHg (likely hypovolemia)
  - VCI >2.1 cm con colapso <50%: PVC ~10-20 mmHg (hipervolemia o fallo VD) | IVC >2.1 cm with <50% collapse: CVP ~10-20 mmHg (hypervolemia or RV failure)
- Pulmones: B-lines (sobrecarga de volumen) vs A-lines (pulmón seco) | Lungs: B-lines (volume overload) vs A-lines (dry lung)
- FAST: Liquido libre (hemorragia) | Free fluid (hemorrhage)

**"The Pipes" (Vasos) | "The Pipes" (Vessels):**
- Aorta abdominal: Aneurisma roto? | Abdominal aorta: Ruptured aneurysm?
- Venas femorales: TVP como causa de TEP? | Femoral veins: DVT as cause of PE?

### Protocolo BLUE (Bedside Lung Ultrasound in Emergency)

**Algoritmo para disnea aguda: | Algorithm for acute dyspnea:**

| Perfil | Hallazgo | Diagnostico mas probable |
|--------|---------|------------------------|
| Perfil A (A-lines + lung sliding) | Normal bilateral | Asma, EPOC, TEP | Profile A (A-lines + lung sliding) | Normal bilateral | Asthma, COPD, PE |
| Perfil A' (A-lines sin lung sliding) | Sin deslizamiento | Neumotorax | Profile A' (A-lines no lung sliding) | No sliding | Pneumothorax |
| Perfil B (B-lines bilaterales) | Multiples B-lines | Edema pulmonar | Profile B (bilateral B-lines) | Multiple B-lines | Pulmonary edema |
| Perfil B' (B-lines unilateral) | B-lines un lado | Neumonia | Profile B' (unilateral B-lines) | B-lines one side | Pneumonia |
| Perfil C (consolidacion) | Tejido hepatizado | Neumonia | Profile C (consolidation) | Hepatized tissue | Pneumonia |
| Perfil A + TVP positiva | A-lines + trombo en piernas | TEP | Profile A + positive DVT | A-lines + leg thrombus | PE |

## Ecocardiografia Focalizada (FoCUS) | Focused Cardiac Ultrasound

### Ventanas Estandar | Standard Windows

**Paraesternal eje largo (PLAX): | Parasternal long axis:**
- Evalua: VI, AI, valvula mitral, valvula aortica, raiz aortica, VD | Evaluates: LV, LA, mitral valve, aortic valve, aortic root, RV
- Derrame pericardico: Mejor ventana para detectar | Pericardial effusion: Best window to detect

**Paraesternal eje corto (PSAX): | Parasternal short axis:**
- VI en corte transversal "como una dona" | LV in cross-section "like a donut"
- Motilidad regional de pared (isquemia) | Regional wall motion (ischemia)
- "D-sign": VD dilatado aplana el septum (sobrecarga de presion del VD) | "D-sign": Dilated RV flattens septum (RV pressure overload)

**Apical 4 camaras (A4C): | Apical 4-chamber:**
- Ve las 4 camaras simultaneamente | Views all 4 chambers simultaneously
- Comparacion de tamano VD:VI (normal VD:VI < 0.6:1) | RV:LV size comparison (normal RV:LV < 0.6:1)
- Funcion sistolica visual | Visual systolic function
- TAPSE (excursion sistolica del anillo tricuspideo): Funcion sistolica del VD | TAPSE (tricuspid annular plane systolic excursion): RV systolic function

**Subcostal | Subcostal:**
- Derrame pericardico y tamponamiento | Pericardial effusion and tamponade
- VCI: Tamaño y colapsabilidad inspiratoria | IVC: Size and inspiratory collapsibility

## Guia Ecografica de Procedimientos | Ultrasound-Guided Procedures

### Acceso Venoso Central | Central Venous Access

- **Yugular interna:** Guia ecografica reduce complicaciones >50% (estandar de cuidado) | Internal jugular: US guidance reduces complications >50% (standard of care)
- Tecnica: En plano (in-plane) vs fuera de plano (out-of-plane) | Technique: In-plane vs out-of-plane
- Confirmar posicion de la aguja en tiempo real | Confirm needle position in real time

### Toracocentesis / Paracentesis | Thoracentesis / Paracentesis

- Marca el sitio de puncion y mide la profundidad del liquido | Mark puncture site and measure fluid depth
- Evita puncionar organos solidos o asas intestinales | Avoids puncturing solid organs or bowel loops
- Reduce complicaciones (neumotorax yatrogeno en toracocentesis) | Reduces complications (iatrogenic pneumothorax in thoracentesis)`,
      keyTerms: [
        {
          term: 'POCUS (Point-of-Care Ultrasound)',
          definition: 'Ecografia realizada e interpretada por el medico tratante a la cabecera del paciente, con preguntas clinicas especificas y binarias, complementando el examen fisico y guiando decisiones inmediatas. | Ultrasound performed and interpreted by the treating physician at the patient\'s bedside, with specific binary clinical questions, complementing the physical exam and guiding immediate decisions.',
        },
        {
          term: 'protocolo RUSH | RUSH protocol',
          definition: 'Rapid Ultrasound for Shock and Hypotension: Evaluacion sistematica ecografica del paciente en shock evaluando "la bomba" (corazon), "el tanque" (volemia/VCI), y "las tuberias" (vasos). | Systematic ultrasound evaluation of the shock patient assessing "the pump" (heart), "the tank" (volume/IVC), and "the pipes" (vessels).',
        },
        {
          term: 'lineas B (B-lines)',
          definition: 'Artefactos de reverberacion verticales que se originan en la linea pleural y se extienden hasta el fondo de la pantalla. 3 o mas B-lines por espacio intercostal indican edema intersticial pulmonar o sindrome alveolo-intersticial. | Vertical reverberation artifacts originating at the pleural line extending to the bottom of the screen. 3 or more B-lines per intercostal space indicate pulmonary interstitial edema or alveolar-interstitial syndrome.',
        },
        {
          term: 'VCI (vena cava inferior) | IVC (inferior vena cava)',
          definition: 'Vaso evaluado con ecografia subcostal para estimar presion venosa central y estado de volemia. VCI pequena y colapsable sugiere hipovolemia; VCI distendida y no colapsable sugiere hipervolemia o fallo del VD. | Vessel evaluated with subcostal ultrasound to estimate central venous pressure and volume status. Small, collapsible IVC suggests hypovolemia; distended, non-collapsible IVC suggests hypervolemia or RV failure.',
        },
        {
          term: 'TAPSE',
          definition: 'Tricuspid Annular Plane Systolic Excursion: Medida de la excursion longitudinal del anillo tricuspideo en modo M. TAPSE <16 mm indica disfuncion sistolica del ventriculo derecho. | Measurement of tricuspid annulus longitudinal excursion in M-mode. TAPSE <16 mm indicates right ventricular systolic dysfunction.',
        },
        {
          term: 'impedancia acustica | acoustic impedance',
          definition: 'Propiedad del tejido (densidad x velocidad del sonido) que determina cuanta energia de ultrasonido se refleja en una interfaz tisular. Interfaces con gran diferencia de impedancia (aire/tejido) generan reflexiones intensas. | Tissue property (density x sound velocity) determining how much ultrasound energy is reflected at a tissue interface. Interfaces with large impedance difference (air/tissue) generate intense reflections.',
        },
      ],
      clinicalNotes: 'El POCUS se ha convertido en una competencia core en medicina de emergencia, cuidados criticos, y medicina interna. La guia ecografica para acceso venoso central es ahora estandar de cuidado (evidencia nivel 1). El protocolo BLUE tiene una precision >90% para el diagnostico de disnea aguda. La evaluacion de B-lines es la forma mas rapida y sensible de detectar edema pulmonar a la cabecera del paciente, superior a la radiografia de torax portatil. El FAST tiene alta especificidad (>95%) pero sensibilidad moderada (~85%): un FAST negativo no descarta lesion de organo solido en trauma. | POCUS has become a core competency in emergency medicine, critical care, and internal medicine. US guidance for central venous access is now standard of care (level 1 evidence). The BLUE protocol has >90% accuracy for acute dyspnea diagnosis. B-line assessment is the fastest and most sensitive way to detect pulmonary edema at the bedside, superior to portable chest X-ray. FAST has high specificity (>95%) but moderate sensitivity (~85%): a negative FAST does not rule out solid organ injury in trauma.',
    },
    4: {
      level: 4,
      summary: 'La ecografia avanzada integra tecnicas Doppler cuantitativas, elastografia, contraste ecografico (CEUS), y protocolos especializados para evaluacion hemodinamica no invasiva, diagnostico de patologia vascular compleja, y caracterizacion tisular, transformando el ultrasonido de herramienta binaria a plataforma multiparametrica. | Advanced ultrasound integrates quantitative Doppler techniques, elastography, contrast-enhanced ultrasound (CEUS), and specialized protocols for non-invasive hemodynamic assessment, complex vascular pathology diagnosis, and tissue characterization, transforming ultrasound from a binary tool to a multiparametric platform.',
      explanation: `## Doppler Avanzado | Advanced Doppler

### Principios Fisicos del Doppler | Doppler Physical Principles

**Ecuacion Doppler: | Doppler equation:**
- delta_f = 2 x f0 x v x cos(theta) / c | delta_f = 2 x f0 x v x cos(theta) / c
- f0: frecuencia transmitida, v: velocidad del flujo, theta: angulo de incidencia, c: velocidad del sonido | f0: transmitted frequency, v: flow velocity, theta: angle of incidence, c: speed of sound
- Angulo critico: theta debe ser <60 grados para mediciones fiables | Critical angle: theta must be <60 degrees for reliable measurements
- Aliasing: Ocurre cuando la velocidad del flujo supera el limite de Nyquist (PRF/2) | Aliasing: Occurs when flow velocity exceeds the Nyquist limit (PRF/2)

### Aplicaciones Doppler Cuantitativas | Quantitative Doppler Applications

**Evaluacion hemodinamica no invasiva: | Non-invasive hemodynamic assessment:**

**Gasto cardiaco por Doppler: | Doppler cardiac output:**
- VTI (integral velocidad-tiempo) del tracto de salida del VI (LVOT) | VTI (velocity-time integral) of LV outflow tract (LVOT)
- Gasto cardiaco = VTI x area LVOT x FC | Cardiac output = VTI x LVOT area x HR
- LVOT VTI <18 cm sugiere bajo gasto cardiaco | LVOT VTI <18 cm suggests low cardiac output

**Presion sistolica de la arteria pulmonar (PSAP): | Pulmonary artery systolic pressure (PASP):**
- PSAP = 4 x (velocidad maxima de regurgitacion tricuspidea)^2 + PVC estimada | PASP = 4 x (peak tricuspid regurgitation velocity)^2 + estimated CVP
- PSAP >35 mmHg sugiere hipertension pulmonar | PASP >35 mmHg suggests pulmonary hypertension

**Evaluacion de estenosis carotidea: | Carotid stenosis evaluation:**

| Velocidad Pico Sistolica (VPS) | Grado de Estenosis |
|-------------------------------|-------------------|
| <125 cm/s | <50% |
| 125-230 cm/s | 50-69% |
| >230 cm/s | 70-99% |
| Sin flujo detectado | Oclusion | No detectable flow | Occlusion |

**Indice de resistividad (IR) renal: | Renal resistive index (RI):**
- IR = (velocidad sistolica pico - velocidad diastolica final) / velocidad sistolica pico | RI = (peak systolic velocity - end diastolic velocity) / peak systolic velocity
- IR >0.7: Sugiere patologia renal (nefropatia, rechazo de trasplante) | RI >0.7: Suggests renal pathology (nephropathy, transplant rejection)

## Elastografia | Elastography

### Principio | Principle

Mide la rigidez (elasticidad) de los tejidos. Los tejidos enfermos (fibrosis, tumores) tienden a ser mas rigidos que los tejidos normales. | Measures tissue stiffness (elasticity). Diseased tissues (fibrosis, tumors) tend to be stiffer than normal tissues.

### Tipos | Types

**Elastografia por compresion (strain elastography): | Compression (strain) elastography:**
- Compresion manual del transductor | Manual transducer compression
- Mapa de deformacion relativa (cualitativa) | Relative deformation map (qualitative)
- Uso: Nodulos tiroideos (TIRADS), masas mamarias | Use: Thyroid nodules (TIRADS), breast masses

**Elastografia por onda de corte (shear wave elastography - SWE): | Shear wave elastography (SWE):**
- Pulso acustico genera ondas de corte en el tejido | Acoustic pulse generates shear waves in tissue
- Mide velocidad de propagacion (cuantitativa, en kPa o m/s) | Measures propagation velocity (quantitative, in kPa or m/s)
- Resultado reproducible e independiente del operador | Reproducible, operator-independent result

**Aplicaciones clinicas validadas: | Validated clinical applications:**

| Aplicacion | Punto de corte | Significado |
|-----------|---------------|-----------|
| Fibrosis hepatica (Fibroscan) | >7.1 kPa = F2+, >12.5 kPa = F4 (cirrosis) | Liver fibrosis | >7.1 kPa = F2+, >12.5 kPa = F4 (cirrhosis) |
| Nodulo tiroideo | Rigido = mayor sospecha (TIRADS) | Thyroid nodule | Stiff = higher suspicion (TIRADS) |
| Masa mamaria | Rigida = mayor sospecha (BI-RADS) | Breast mass | Stiff = higher suspicion (BI-RADS) |

## Ecografia con Contraste (CEUS) | Contrast-Enhanced Ultrasound (CEUS)

### Agentes de Contraste Ecografico | Ultrasound Contrast Agents

**Microburbujas: | Microbubbles:**
- Gas encapsulado en una cubierta lipidica o de albumina | Gas encapsulated in a lipid or albumin shell
- Tamano: 1-10 micrometros (similar a los eritrocitos) | Size: 1-10 micrometers (similar to red blood cells)
- Son agentes PURAMENTE intravasculares (no extravasan como el yodo o gadolinio) | They are PURELY intravascular agents (they do not extravasate like iodine or gadolinium)
- Eliminacion pulmonar (no renal): Seguros en insuficiencia renal | Pulmonary elimination (not renal): Safe in renal failure
- Agentes: SonoVue (sulfur hexafluoride), Definity (octafluoropropane), Lumason | Agents: SonoVue (sulfur hexafluoride), Definity (octafluoropropane), Lumason

### Aplicaciones Clinicas del CEUS | CEUS Clinical Applications

**Caracterizacion de lesiones hepaticas: | Liver lesion characterization:**
- CEUS LI-RADS: Clasificacion paralela a CT/MRI LI-RADS en higado cirrotico | CEUS LI-RADS: Classification parallel to CT/MRI LI-RADS in cirrhotic liver
- Hepatocarcinoma: Captacion arterial intensa + lavado (washout) | HCC: Intense arterial enhancement + washout
- Hemangioma: Captacion nodular periferica con llenado centripeto | Hemangioma: Peripheral nodular enhancement with centripetal filling
- Hiperplasia nodular focal: Captacion en rueda de carro | FNH: Spoke-wheel enhancement

**Evaluacion de perfusion de organos: | Organ perfusion evaluation:**
- Trasplante renal: Perfusion cortical post-operatoria | Renal transplant: Post-operative cortical perfusion
- Trauma: Laceracion de organo solido sin CT (embarazo, pediatria, alergia al yodo) | Trauma: Solid organ laceration without CT (pregnancy, pediatrics, iodine allergy)
- Isquemia intestinal: Ausencia de captacion mural | Bowel ischemia: Absence of mural enhancement

## Ecografia Pulmonar Avanzada | Advanced Lung Ultrasound

### Score de Ecografia Pulmonar (LUS Score) | Lung Ultrasound Score

**Cuantificacion del edema pulmonar: | Pulmonary edema quantification:**
- 12 zonas (6 por hemitorax): anterior superior/inferior, lateral superior/inferior, posterior superior/inferior | 12 zones (6 per hemithorax): anterior upper/lower, lateral upper/lower, posterior upper/lower
- Puntuacion por zona: 0 (A-lines), 1 (B-lines separadas), 2 (B-lines coalescentes), 3 (consolidacion) | Score per zone: 0 (A-lines), 1 (separated B-lines), 2 (coalescent B-lines), 3 (consolidation)
- Total: 0-36 | Total: 0-36
- Correlacion con agua pulmonar extravascular (EVLW) | Correlation with extravascular lung water (EVLW)
- Guia titulacion de diureticos en ICC | Guides diuretic titration in CHF

### Ecografia Pulmonar en UCI y COVID-19 | ICU and COVID-19 Lung Ultrasound

- Evaluacion diaria sin necesidad de transporte al departamento de imagen | Daily evaluation without need for imaging department transport
- Monitoreo de respuesta a maniobras de reclutamiento | Monitoring response to recruitment maneuvers
- Prediccion de exito/fracaso de weaning ventilatorio (evaluacion diafragmatica) | Prediction of ventilatory weaning success/failure (diaphragmatic evaluation)
- COVID-19: Patron tipico de B-lines bilaterales con distribucion parcheada y linea pleural irregular | COVID-19: Typical pattern of bilateral B-lines with patchy distribution and irregular pleural line`,
      keyTerms: [
        {
          term: 'elastografia por onda de corte | shear wave elastography',
          definition: 'Tecnica cuantitativa que mide la rigidez tisular generando ondas de corte con un pulso acustico y midiendo su velocidad de propagacion. Clinicamente validada para estadificar fibrosis hepatica y caracterizar nodulos tiroideos y masas mamarias. | Quantitative technique measuring tissue stiffness by generating shear waves with an acoustic pulse and measuring their propagation velocity. Clinically validated for staging liver fibrosis and characterizing thyroid nodules and breast masses.',
        },
        {
          term: 'CEUS (ecografia con contraste) | CEUS (contrast-enhanced ultrasound)',
          definition: 'Tecnica de ecografia que utiliza microburbujas intravasculares como agente de contraste para evaluar la perfusion y vascularidad tisular en tiempo real, sin nefrotoxicidad ni radiacion. | Ultrasound technique using intravascular microbubbles as contrast agent to evaluate tissue perfusion and vascularity in real-time, without nephrotoxicity or radiation.',
        },
        {
          term: 'VTI (integral velocidad-tiempo) | VTI (velocity-time integral)',
          definition: 'Area bajo la curva del Doppler espectral del LVOT, que representa la distancia recorrida por la columna de sangre en cada latido. Multiplicada por el area del LVOT y la frecuencia cardiaca, calcula el gasto cardiaco. | Area under the spectral Doppler curve of the LVOT, representing the distance traveled by the blood column per beat. Multiplied by LVOT area and heart rate, it calculates cardiac output.',
        },
        {
          term: 'aliasing',
          definition: 'Artefacto Doppler que ocurre cuando la velocidad del flujo excede el limite de Nyquist (la mitad de la frecuencia de repeticion de pulso), causando que el flujo aparezca en la direccion opuesta. Se corrige aumentando el PRF o usando Doppler continuo. | Doppler artifact occurring when flow velocity exceeds the Nyquist limit (half the pulse repetition frequency), causing flow to appear in the opposite direction. Corrected by increasing PRF or using continuous wave Doppler.',
        },
        {
          term: 'LUS score',
          definition: 'Sistema de puntuacion semicuantitativo que evalua 12 zonas pulmonares (0-3 por zona, total 0-36) para cuantificar el edema pulmonar ecograficamente, correlacionado con el agua pulmonar extravascular. | Semi-quantitative scoring system evaluating 12 lung zones (0-3 per zone, total 0-36) to ecographically quantify pulmonary edema, correlated with extravascular lung water.',
        },
      ],
      clinicalNotes: 'La elastografia hepatica (FibroScan / SWE) ha reducido significativamente la necesidad de biopsia hepatica para estadificar fibrosis, con guidelines de AASLD/EASL que la recomiendan como primer paso. El CEUS ofrece una alternativa sin nefrotoxicidad para la caracterizacion de lesiones hepaticas en pacientes con insuficiencia renal o alergia al contraste. El VTI del LVOT es el parametro hemodinamico no invasivo mas util en el paciente critico, permitiendo estimar el gasto cardiaco y evaluar la respuesta a fluidos (elevacion pasiva de piernas + VTI). El LUS score esta emergiendo como herramienta estandar para guiar la desresucitacion con diureticos en la fase de recuperacion del shock septico. | Liver elastography (FibroScan/SWE) has significantly reduced the need for liver biopsy to stage fibrosis, with AASLD/EASL guidelines recommending it as a first step. CEUS offers a non-nephrotoxic alternative for liver lesion characterization in patients with renal failure or contrast allergy. LVOT VTI is the most useful non-invasive hemodynamic parameter in the critically ill patient, allowing cardiac output estimation and fluid responsiveness assessment (passive leg raise + VTI). LUS score is emerging as a standard tool to guide de-resuscitation with diuretics in the recovery phase of septic shock.',
    },
    5: {
      level: 5,
      summary: 'La ecografia de vanguardia incorpora ultrarapida (ultrafast imaging), imagen funcional, inteligencia artificial para interpretacion automatizada, y fusión multimodal, expandiendo las fronteras desde la herramienta diagnostica punto de cuidado hasta la plataforma terapéutica y de investigacion translacional. | Cutting-edge ultrasound incorporates ultrafast imaging, functional imaging, artificial intelligence for automated interpretation, and multimodal fusion, expanding boundaries from the point-of-care diagnostic tool to the therapeutic and translational research platform.',
      explanation: `## Ecografia Ultrarapida (Ultrafast Ultrasound) | Ultrafast Ultrasound

### Ondas Planas y Coherent Compounding | Plane Waves and Coherent Compounding

**Imagen convencional vs ultrarapida: | Conventional vs ultrafast imaging:**
- Convencional: Lineas de imagen secuenciales, frame rate ~30-60 fps | Conventional: Sequential image lines, frame rate ~30-60 fps
- Ultrarapida: Ondas planas (unfocused), frame rate >10,000 fps | Ultrafast: Plane waves (unfocused), frame rate >10,000 fps
- Coherent compounding: Multiples transmisiones anguladas sumadas coherentemente para mejorar SNR | Multiple angled transmissions coherently summed to improve SNR

### Aplicaciones de la Ultrafast Imaging | Ultrafast Imaging Applications

**Shear wave elastography en tiempo real: | Real-time shear wave elastography:**
- Generacion de ondas de corte con push acustico (ARFI) | Shear wave generation with acoustic push (ARFI)
- Mapa 2D de elasticidad en tiempo real (supersonic SWE) | Real-time 2D elasticity map (supersonic SWE)
- Cuantificacion precisa de rigidez tisular sin compresion manual | Precise tissue stiffness quantification without manual compression

**Ultrafast Doppler: | Ultrafast Doppler:**
- Deteccion de microflujo sanguineo sin contraste | Microvascular blood flow detection without contrast
- Flujo sanguineo cerebral neonatal a traves de la fontanela | Neonatal cerebral blood flow through the fontanelle
- Mapeo de la vascularidad tumoral con resolucion temporal sin precedentes | Tumor vascularity mapping with unprecedented temporal resolution

**Electromechanical wave imaging (EWI): | Electromechanical wave imaging:**
- Visualiza la propagacion de la contraccion miocardica a nivel milisegundo | Visualizes myocardial contraction propagation at millisecond level
- Mapa de la secuencia de activacion mecanica (reflejando la activacion electrica) | Map of mechanical activation sequence (reflecting electrical activation)
- Potencial: Deteccion no invasiva de arritmias, guia de ablacion | Potential: Non-invasive arrhythmia detection, ablation guidance

## Ecografia Terapeutica | Therapeutic Ultrasound

### HIFU (High-Intensity Focused Ultrasound) | HIFU

**Mecanismo: | Mechanism:**
- Focalizacion de energia acustica en un punto (como una lupa con sonido) | Focusing acoustic energy at a point (like a magnifying glass with sound)
- Calentamiento localizado >60 grados C -> necrosis coagulativa | Localized heating >60 degrees C -> coagulative necrosis
- Cavitacion mecanica en modo pulsado | Mechanical cavitation in pulsed mode

**Aplicaciones aprobadas: | Approved applications:**
- Fibromas uterinos | Uterine fibroids
- Cancer de prostata (focal therapy) | Prostate cancer (focal therapy)
- Tumores hepaticos (en desarrollo) | Liver tumors (in development)
- Temblor esencial: Talamotomia guiada por RM (MRgHIFU) | Essential tremor: MRI-guided thalamotomy (MRgHIFU)

### Sonoporacion y Drug Delivery | Sonoporation and Drug Delivery

**Concepto: | Concept:**
- Microburbujas + ultrasonido focalizado crean poros transitorios en membranas celulares | Microbubbles + focused ultrasound create transient pores in cell membranes
- Permite la entrega dirigida de farmacos a tejidos especificos | Enables targeted drug delivery to specific tissues
- Apertura transitoria de la barrera hematoencefalica para entrega de quimioterapia al cerebro | Transient opening of the blood-brain barrier for chemotherapy delivery to the brain
- Ensayos clinicos activos en glioblastoma y enfermedad de Alzheimer | Active clinical trials in glioblastoma and Alzheimer's disease

### Histotripsia | Histotripsy

- Destruccion mecanica no termica del tejido mediante cavitacion controlada | Non-thermal mechanical tissue destruction via controlled cavitation
- FDA-cleared para destruccion de tumores hepaticos | FDA-cleared for liver tumor destruction
- Ventaja: No depende del calor, menos efecto en estructuras adyacentes | Advantage: Not heat-dependent, less effect on adjacent structures

## Inteligencia Artificial en Ecografia | AI in Ultrasound

### Guia Automatizada de Adquisicion | Automated Acquisition Guidance

**AI para operadores novatos: | AI for novice operators:**
- Guia en tiempo real de posicion/orientacion del transductor | Real-time guidance of transducer position/orientation
- Deteccion automatica de ventanas estandar (apical 4 camaras, paraesternal, etc.) | Automatic detection of standard windows (apical 4-chamber, parasternal, etc.)
- Evaluacion de calidad de imagen en tiempo real | Real-time image quality assessment
- Potencial para democratizar el POCUS en entornos de recursos limitados | Potential to democratize POCUS in resource-limited settings

### Analisis Automatizado | Automated Analysis

**Ecocardiografia automatizada: | Automated echocardiography:**
- Segmentacion de camaras cardiacas con deep learning (EF automatizada, GLS) | Cardiac chamber segmentation with deep learning (automated EF, GLS)
- Deteccion automatica de patologia valvular | Automatic valve pathology detection
- AutoMeasure: Mediciones automatizadas con precision comparable a expertos | Automated measurements with expert-comparable precision
- Implementacion clinica activa (GE, Philips, Siemens) | Active clinical implementation (GE, Philips, Siemens)

**Evaluacion FAST automatizada: | Automated FAST assessment:**
- Deteccion de liquido libre peritoneal por deep learning | Free peritoneal fluid detection by deep learning
- Clasificacion automatica de perfiles pulmonares (A-lines, B-lines) | Automatic classification of lung profiles (A-lines, B-lines)
- Potencial para triaje automatizado en emergencias masivas | Potential for automated triage in mass casualty events

### Ecografia Cuantitativa (QUS) | Quantitative Ultrasound (QUS)

**Caracterizacion tisular por analisis de RF: | Tissue characterization by RF analysis:**
- Backscatter coefficient (BSC): Refleja la microestructura tisular | Reflects tissue microstructure
- Attenuation coefficient: Correlaciona con la composicion del tejido | Correlates with tissue composition
- Cuantificacion de esteatosis hepatica (parametro de atenuacion controlado, CAP) | Hepatic steatosis quantification (controlled attenuation parameter, CAP)
- Radiomica ecografica: Extraccion de features cuantitativos para prediccion diagnostica | Ultrasound radiomics: Quantitative feature extraction for diagnostic prediction

## Fusion de Imagen y Navegacion | Image Fusion and Navigation

### Fusion Ecografia-TC/RM | Ultrasound-CT/MRI Fusion

**Concepto: | Concept:**
- Registro espacial de imagenes ecograficas en tiempo real con volumenes de TC o RM previos | Spatial registration of real-time ultrasound images with prior CT or MRI volumes
- Permite localizar lesiones vistas en TC/RM pero no visibles en ecografia convencional | Enables localizing lesions seen on CT/MRI but not visible on conventional ultrasound
- GPS para la aguja: Navegacion guiada para biopsia de lesiones "invisibles" ecograficamente | GPS for the needle: Guided navigation for biopsy of sonographically "invisible" lesions

**Aplicaciones: | Applications:**
- Biopsia de prostata dirigida por fusion RM-ecografia (PI-RADS) | MRI-ultrasound fusion-targeted prostate biopsy (PI-RADS)
- Ablacion de tumores hepaticos guiada por fusion TC/RM-ecografia | CT/MRI-ultrasound fusion-guided liver tumor ablation
- Biopsia renal de lesiones complejas | Complex renal lesion biopsy

### Ecografia 3D/4D | 3D/4D Ultrasound

**Avances tecnologicos: | Technological advances:**
- Transductores matriciales (matrix array): Adquisicion volumetrica en tiempo real | Matrix array transducers: Real-time volumetric acquisition
- 4D = 3D en tiempo real | 4D = real-time 3D
- Ecocardiografia 3D: Evaluacion volumetrica precisa de camaras, cuantificacion de regurgitacion | 3D echocardiography: Precise chamber volumetric evaluation, regurgitation quantification
- Obstetricia 3D: Evaluacion anatomica fetal detallada | 3D obstetrics: Detailed fetal anatomical evaluation

## Fronteras y Futuro | Frontiers and Future

### Ecografia Portatil e Inteligente | Portable and Smart Ultrasound

- Dispositivos portatiles con AI integrada (Butterfly iQ, Clarius, Vscan) | Portable devices with integrated AI (Butterfly iQ, Clarius, Vscan)
- Chip-on-probe: Toda la electronica en el transductor, conectado al telefono | Chip-on-probe: All electronics in the transducer, connected to phone
- Costo <$2,000 vs $100,000+ para equipos de gama alta | Cost <$2,000 vs $100,000+ for high-end equipment
- Democratizacion global del ultrasonido diagnostico | Global democratization of diagnostic ultrasound

### Super-Resolucion Ecografica (ULM) | Ultrasound Super-Resolution (ULM)

- Ultrafast imaging + rastreo individual de microburbujas | Ultrafast imaging + individual microbubble tracking
- Resolucion muy por debajo del limite de difraccion (micrometros) | Resolution well below the diffraction limit (micrometers)
- Visualizacion de microvasculatura in vivo | In vivo microvasculature visualization
- Aplicaciones: Oncologia (angiogenesis tumoral), neurociencia, evaluacion renal | Applications: Oncology (tumor angiogenesis), neuroscience, renal evaluation`,
      keyTerms: [
        {
          term: 'ultrafast ultrasound (ecografia ultrarapida)',
          definition: 'Tecnologia de adquisicion con ondas planas a >10,000 fps que habilita aplicaciones imposibles con ecografia convencional: SWE en tiempo real, microflujo Doppler sin contraste, y imagen electromecánica cardiaca. | Acquisition technology with plane waves at >10,000 fps enabling applications impossible with conventional ultrasound: real-time SWE, contrast-free Doppler microflow, and cardiac electromechanical imaging.',
        },
        {
          term: 'histotripsia',
          definition: 'Tecnica terapeutica de ultrasonido que destruye tejido mecanicamente mediante cavitacion controlada (no termica), aprobada por la FDA para destruccion de tumores hepaticos, con menor dano colateral que las tecnicas termicas. | Therapeutic ultrasound technique mechanically destroying tissue via controlled cavitation (non-thermal), FDA-approved for liver tumor destruction, with less collateral damage than thermal techniques.',
        },
        {
          term: 'sonoporacion | sonoporation',
          definition: 'Creacion transitoria de poros en membranas celulares mediante la interaccion de microburbujas de contraste con ultrasonido focalizado, permitiendo la entrega dirigida de farmacos a traves de barreras como la barrera hematoencefalica. | Transient pore creation in cell membranes through the interaction of contrast microbubbles with focused ultrasound, enabling targeted drug delivery across barriers like the blood-brain barrier.',
        },
        {
          term: 'ULM (Ultrasound Localization Microscopy)',
          definition: 'Tecnica de super-resolucion que rastrea microburbujas individuales con ultrafast imaging para mapear microvasculatura in vivo a resolucion de micrometros, superando el limite de difraccion clasico del ultrasonido. | Super-resolution technique tracking individual microbubbles with ultrafast imaging to map in vivo microvasculature at micrometer resolution, overcoming the classic diffraction limit of ultrasound.',
        },
        {
          term: 'fusion de imagen | image fusion',
          definition: 'Tecnologia que co-registra ecografia en tiempo real con volumenes de TC/RM previos, permitiendo visualizar y biopsiar lesiones que no son visibles ecograficamente usando la localizacion anatomica de la otra modalidad como guia. | Technology co-registering real-time ultrasound with prior CT/MRI volumes, enabling visualization and biopsy of sonographically invisible lesions using the anatomical localization from the other modality as guidance.',
        },
        {
          term: 'chip-on-probe',
          definition: 'Arquitectura de dispositivo ecografico donde toda la electronica de formacion de imagen esta integrada en el transductor mismo, conectandose directamente a un smartphone o tablet, reduciendo el costo y tamano del equipo dramaticamente. | Ultrasound device architecture where all imaging electronics are integrated into the transducer itself, connecting directly to a smartphone or tablet, dramatically reducing equipment cost and size.',
        },
      ],
      clinicalNotes: 'La ecografia ultrarapida representa la mayor revolucion tecnologica en ultrasonido desde la imagen Doppler. El super-resolution imaging (ULM) tiene el potencial de visualizar microvasculatura in vivo a resoluciones previamente solo alcanzables con microscopia, abriendo nuevas fronteras en investigacion oncologica y neurovascular. La sonoporacion para apertura de barrera hematoencefalica tiene ensayos clinicos activos en glioblastoma (ExAblate, SonoCloud) con resultados preliminares prometedores. La histotripsia representa una alternativa mecanica a la ablacion termica con perfil de seguridad potencialmente superior. La convergencia de ecografia portatil + AI esta posicionando al ultrasonido como el "estetoscopio del siglo XXI", con potencial de screening a escala poblacional en regiones sin acceso a TC/RM. | Ultrafast ultrasound represents the greatest technological revolution in ultrasound since Doppler imaging. Super-resolution imaging (ULM) has the potential to visualize in vivo microvasculature at resolutions previously only achievable with microscopy, opening new frontiers in oncological and neurovascular research. Sonoporation for BBB opening has active clinical trials in glioblastoma (ExAblate, SonoCloud) with promising preliminary results. Histotripsy represents a mechanical alternative to thermal ablation with a potentially superior safety profile. The convergence of portable ultrasound + AI is positioning ultrasound as the "stethoscope of the 21st century," with potential for population-scale screening in regions without CT/MRI access.',
    },
  },

  media: [],

  citations: [
    {
      id: 'rumack-ultrasound',
      type: 'textbook',
      title: 'Diagnostic Ultrasound',
      authors: ['Rumack CM', 'Levine D'],
      source: 'Elsevier',
      chapter: 'Physics and Instrumentation',
    },
    {
      id: 'lichtenstein-blue',
      type: 'article',
      title: 'Relevance of Lung Ultrasound in the Diagnosis of Acute Respiratory Failure: The BLUE Protocol',
      authors: ['Lichtenstein DA', 'Meziere GA'],
      source: 'Chest',
      url: 'https://doi.org/10.1378/chest.07-2800',
    },
    {
      id: 'perera-rush',
      type: 'article',
      title: 'The RUSH Exam: Rapid Ultrasound in SHock in the Evaluation of the Critically Ill',
      authors: ['Perera P', 'Mailhot T', 'Riley D', 'Mandavia D'],
      source: 'Emerg Med Clin North Am',
      url: 'https://doi.org/10.1016/j.emc.2009.09.010',
    },
    {
      id: 'tanter-ultrafast',
      type: 'article',
      title: 'Ultrafast Ultrasound Imaging',
      authors: ['Tanter M', 'Fink M'],
      source: 'IEEE Trans Ultrason Ferroelectr Freq Control',
      url: 'https://doi.org/10.1109/TUFFC.2014.006461',
    },
    {
      id: 'acep-pocus-guidelines',
      type: 'guideline',
      title: 'Ultrasound Guidelines: Emergency, Point-of-Care, and Clinical Ultrasound Guidelines in Medicine',
      authors: ['American College of Emergency Physicians'],
      source: 'Ann Emerg Med',
      url: 'https://doi.org/10.1016/j.annemergmed.2016.08.457',
    },
  ],

  crossReferences: [
    { targetId: 'topic-chest-xray-interpretation', targetType: 'topic', relationship: 'sibling', label: 'Radiografia de Torax | Chest X-Ray' },
    { targetId: 'topic-ct-scan-principles', targetType: 'topic', relationship: 'sibling', label: 'Tomografia Computarizada | CT Scan' },
    { targetId: 'topic-mri-principles', targetType: 'topic', relationship: 'sibling', label: 'Resonancia Magnetica | MRI' },
    { targetId: 'topic-radiation-safety', targetType: 'topic', relationship: 'see-also', label: 'Seguridad Radiologica | Radiation Safety' },
    { targetId: 'condition-heart-failure', targetType: 'condition', relationship: 'related', label: 'Insuficiencia Cardiaca | Heart Failure' },
    { targetId: 'condition-deep-vein-thrombosis', targetType: 'condition', relationship: 'related', label: 'Trombosis Venosa Profunda | Deep Vein Thrombosis' },
  ],

  tags: {
    systems: ['cardiovascular', 'respiratory', 'digestive', 'musculoskeletal'],
    topics: ['radiology', 'imaging', 'diagnostics', 'emergency medicine', 'critical care'],
    keywords: [
      'ecografia', 'ultrasonido', 'ultrasound', 'POCUS', 'FAST', 'eFAST',
      'RUSH', 'BLUE protocol', 'Doppler', 'ecocardiografia', 'elastografia',
      'CEUS', 'lineas B', 'B-lines', 'VCI', 'IVC', 'guia ecografica',
      'sonoporacion', 'ultrafast', 'histotripsia', 'super-resolucion',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'emergency medicine', 'family medicine', 'ob-gyn'],
    },
  },

  createdAt: '2026-02-05T00:00:00.000Z',
  updatedAt: '2026-02-05T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default ecografiaBasicaBasicUltrasound;
