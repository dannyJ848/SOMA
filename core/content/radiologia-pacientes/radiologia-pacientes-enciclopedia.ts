/**
 * Radiologia Pacientes - Enciclopedia Bilingue
 * Spanish-first bilingual radiology patient education encyclopedia.
 * Covers 7 major imaging modalities with detailed patient-oriented content.
 *
 * Pattern: JSON.parse() to avoid TS2590 on large literal arrays.
 */

// ---------------------------------------------------------------------------
// Interface
// ---------------------------------------------------------------------------

export interface RadiologiaEntry {
  id: string;
  nombreEs: string;
  nombreEn: string;
  descripcionEs: string;
  descripcionEn: string;
  categoriaEs: string;
  categoriaEn: string;
  indicacionesEs: string[];
  indicacionesEn: string[];
  preparacionEs: string;
  preparacionEn: string;
  procedimientoEs: string;
  procedimientoEn: string;
  duracionEs: string;
  duracionEn: string;
  riesgosEs: string[];
  riesgosEn: string[];
  contraindicacionesEs: string[];
  contraindicacionesEn: string[];
  resultadosEs: string;
  resultadosEn: string;
  preguntasFrecuentesEs: string;
  preguntasFrecuentesEn: string;
}

// ---------------------------------------------------------------------------
// Data — loaded via JSON.parse to stay under TS complexity limits
// ---------------------------------------------------------------------------

export const RADIOLOGIA_ENTRIES: RadiologiaEntry[] = JSON.parse(`[
  {
    "id": "radiografia-convencional",
    "nombreEs": "Radiografia Convencional (Rayos X)",
    "nombreEn": "Conventional Radiography (X-Ray)",
    "descripcionEs": "La radiografia convencional es el estudio de imagen mas antiguo y utilizado en medicina. Utiliza una pequena cantidad de radiacion ionizante (rayos X) para generar imagenes bidimensionales del interior del cuerpo, especialmente huesos, pulmones y ciertas estructuras de tejidos blandos. El haz de rayos X atraviesa el cuerpo y es captado por un detector digital o una pelicula fotografica, creando una imagen en tonos de gris donde los tejidos mas densos (como el hueso) aparecen blancos y los menos densos (como el aire en los pulmones) aparecen oscuros. Es una prueba rapida, accesible y economica que constituye el primer paso diagnostico en multiples condiciones clinicas, desde fracturas hasta neumonia.",
    "descripcionEn": "Conventional radiography is the oldest and most widely used imaging study in medicine. It uses a small amount of ionizing radiation (X-rays) to generate two-dimensional images of the body's interior, especially bones, lungs, and certain soft-tissue structures. The X-ray beam passes through the body and is captured by a digital detector or photographic film, creating a grayscale image where denser tissues (such as bone) appear white and less dense tissues (such as air in the lungs) appear dark. It is a fast, accessible, and affordable test that serves as the first diagnostic step in numerous clinical conditions, from fractures to pneumonia.",
    "categoriaEs": "rayos X",
    "categoriaEn": "X-rays",
    "indicacionesEs": [
      "Sospecha de fracturas o luxaciones oseas",
      "Evaluacion de enfermedades pulmonares como neumonia, tuberculosis o derrame pleural",
      "Deteccion de cuerpos extranos ingeridos o inhalados",
      "Valoracion de alineacion de columna vertebral y escoliosis",
      "Evaluacion de osteoartritis y cambios degenerativos articulares",
      "Control postoperatorio de protesis e implantes metalicos",
      "Estudio de obstruccion intestinal o aire libre intraabdominal",
      "Evaluacion del tamano y forma del corazon (silueta cardiaca)"
    ],
    "indicacionesEn": [
      "Suspected bone fractures or dislocations",
      "Evaluation of pulmonary diseases such as pneumonia, tuberculosis, or pleural effusion",
      "Detection of ingested or inhaled foreign bodies",
      "Assessment of spinal alignment and scoliosis",
      "Evaluation of osteoarthritis and degenerative joint changes",
      "Postoperative follow-up of prostheses and metallic implants",
      "Study of intestinal obstruction or free intra-abdominal air",
      "Evaluation of heart size and shape (cardiac silhouette)"
    ],
    "preparacionEs": "Generalmente no se requiere preparacion especial. El paciente debe retirar joyas, cinturones y objetos metalicos de la zona a estudiar, ya que pueden interferir con la imagen. Se le proporcionara una bata hospitalaria si es necesario. Las mujeres en edad fertil deben informar al tecnologo si existe posibilidad de embarazo, ya que la radiacion puede afectar al feto. En estudios abdominales se puede solicitar ayuno de unas horas. Se colocara un delantal de plomo sobre las zonas del cuerpo que no necesiten ser evaluadas para minimizar la exposicion a la radiacion.",
    "preparacionEn": "Generally no special preparation is required. The patient should remove jewelry, belts, and metallic objects from the area being studied, as they can interfere with the image. A hospital gown will be provided if needed. Women of childbearing age should inform the technologist if there is any possibility of pregnancy, since radiation can affect the fetus. For abdominal studies, fasting for a few hours may be requested. A lead apron will be placed over body areas that do not need to be evaluated to minimize radiation exposure.",
    "procedimientoEs": "El paciente se coloca frente al detector de rayos X en la posicion indicada por el tecnologo (de pie, acostado o sentado, segun la parte del cuerpo a estudiar). El tecnologo alinea el equipo y se asegura de que la zona de interes quede centrada. Se pide al paciente que permanezca inmovil y, en el caso de radiografias de torax, que contenga la respiracion durante unos segundos. El tecnologo se retira detras de una barrera protectora y activa el equipo. El haz de rayos X atraviesa el cuerpo en milisegundos. La imagen se captura digitalmente y aparece casi de inmediato en la pantalla del tecnologo. Pueden tomarse varias proyecciones (anteroposterior, lateral, oblicua) para obtener una vista completa de la estructura evaluada.",
    "procedimientoEn": "The patient is positioned in front of the X-ray detector as directed by the technologist (standing, lying down, or seated, depending on the body part being studied). The technologist aligns the equipment and ensures the area of interest is centered. The patient is asked to remain still and, in the case of chest X-rays, to hold their breath for a few seconds. The technologist steps behind a protective barrier and activates the equipment. The X-ray beam passes through the body in milliseconds. The image is captured digitally and appears almost immediately on the technologist's screen. Multiple projections (anteroposterior, lateral, oblique) may be taken to obtain a complete view of the structure being evaluated.",
    "duracionEs": "El procedimiento completo suele durar entre 5 y 15 minutos, incluyendo la preparacion y el posicionamiento. La exposicion real a la radiacion es de apenas milisegundos por cada toma.",
    "duracionEn": "The complete procedure usually takes between 5 and 15 minutes, including preparation and positioning. The actual radiation exposure is only milliseconds per shot.",
    "riesgosEs": [
      "Exposicion a una dosis baja de radiacion ionizante (equivalente aproximada a unos pocos dias de radiacion ambiental natural)",
      "Riesgo teorico minimo de cancer con exposiciones repetidas a lo largo de la vida",
      "Posible dano al feto en mujeres embarazadas si no se toman precauciones adecuadas",
      "Reacciones alergicas en estudios que requieren medio de contraste oral o intravenoso (poco frecuente en radiografia simple)"
    ],
    "riesgosEn": [
      "Exposure to a low dose of ionizing radiation (roughly equivalent to a few days of natural background radiation)",
      "Minimal theoretical risk of cancer with repeated exposures over a lifetime",
      "Possible harm to the fetus in pregnant women if adequate precautions are not taken",
      "Allergic reactions in studies requiring oral or intravenous contrast medium (uncommon in plain radiography)"
    ],
    "contraindicacionesEs": [
      "Embarazo confirmado o sospechado (contraindicacion relativa; se realiza solo si el beneficio supera el riesgo y se protege al feto con delantal de plomo)",
      "Exposicion reciente a altas dosis de radiacion (se valora riesgo acumulativo)",
      "Alergia conocida al medio de contraste yodado (en estudios contrastados)"
    ],
    "contraindicacionesEn": [
      "Confirmed or suspected pregnancy (relative contraindication; performed only if the benefit outweighs the risk, and the fetus is shielded with a lead apron)",
      "Recent exposure to high doses of radiation (cumulative risk is assessed)",
      "Known allergy to iodinated contrast medium (in contrast-enhanced studies)"
    ],
    "resultadosEs": "Las imagenes estan disponibles de forma casi inmediata gracias a la tecnologia digital. Un medico radiologo las interpreta y elabora un informe que generalmente esta listo en unas pocas horas o al dia siguiente. En situaciones de urgencia, los resultados preliminares pueden comunicarse al medico tratante en minutos. El informe describira hallazgos normales o anormales como fracturas, masas, infiltrados pulmonares, cardiomegalia u otras anomalias. Su medico le explicara los resultados y determinara si se necesitan estudios adicionales.",
    "resultadosEn": "Images are available almost immediately thanks to digital technology. A radiologist interprets them and prepares a report that is generally ready within a few hours or by the next day. In emergency situations, preliminary results can be communicated to the treating physician within minutes. The report will describe normal or abnormal findings such as fractures, masses, pulmonary infiltrates, cardiomegaly, or other abnormalities. Your doctor will explain the results and determine whether additional studies are needed.",
    "preguntasFrecuentesEs": "Pregunta: ¿La radiografia duele? Respuesta: No, la radiografia es completamente indolora. Solo sentira la superficie fria del detector. Pregunta: ¿Cuanta radiacion recibo? Respuesta: La dosis es muy baja; una radiografia de torax equivale aproximadamente a la radiacion natural que recibe en 2-3 dias. Pregunta: ¿Puedo hacerme una radiografia si estoy embarazada? Respuesta: Debe informar a su medico y al tecnologo. Si es absolutamente necesaria, se tomaran precauciones especiales con proteccion de plomo. Pregunta: ¿Necesito cita previa? Respuesta: En muchos centros las radiografias se realizan sin cita, pero en otros puede requerir una orden medica y programacion previa.",
    "preguntasFrecuentesEn": "Question: Does an X-ray hurt? Answer: No, an X-ray is completely painless. You will only feel the cool surface of the detector. Question: How much radiation do I receive? Answer: The dose is very low; a chest X-ray is roughly equivalent to the natural radiation you receive in 2-3 days. Question: Can I have an X-ray if I am pregnant? Answer: You must inform your doctor and the technologist. If it is absolutely necessary, special precautions will be taken with lead shielding. Question: Do I need an appointment? Answer: In many facilities X-rays are performed without an appointment, but in others you may need a medical order and prior scheduling."
  },
  {
    "id": "tomografia-computarizada",
    "nombreEs": "Tomografia Computarizada (TC / TAC)",
    "nombreEn": "Computed Tomography (CT Scan)",
    "descripcionEs": "La tomografia computarizada, conocida como TC o TAC, es una tecnica de imagen avanzada que combina multiples proyecciones de rayos X tomadas desde distintos angulos alrededor del cuerpo para crear imagenes transversales (cortes) detalladas. Una computadora procesa estas proyecciones y reconstruye imagenes bidimensionales y tridimensionales de alta resolucion de organos, huesos, vasos sanguineos y tejidos blandos. Es mucho mas detallada que una radiografia convencional y permite detectar lesiones pequenas, tumores, hemorragias internas, embolias pulmonares y una amplia variedad de patologias. La TC moderna es extremadamente rapida, pudiendo escanear el cuerpo completo en apenas segundos, lo que la hace indispensable en situaciones de emergencia como traumatismos y accidentes cerebrovasculares.",
    "descripcionEn": "Computed tomography, known as CT or CAT scan, is an advanced imaging technique that combines multiple X-ray projections taken from different angles around the body to create detailed cross-sectional (slice) images. A computer processes these projections and reconstructs high-resolution two-dimensional and three-dimensional images of organs, bones, blood vessels, and soft tissues. It is much more detailed than a conventional X-ray and can detect small lesions, tumors, internal hemorrhages, pulmonary embolisms, and a wide variety of pathologies. Modern CT is extremely fast, capable of scanning the entire body in just seconds, making it indispensable in emergency situations such as trauma and cerebrovascular events.",
    "categoriaEs": "rayos X",
    "categoriaEn": "X-rays",
    "indicacionesEs": [
      "Evaluacion de traumatismos craneoencefalicos y hemorragias cerebrales",
      "Deteccion y estadificacion de tumores en torax, abdomen y pelvis",
      "Diagnostico de embolia pulmonar y diseccion aortica",
      "Evaluacion de apendicitis, diverticulitis y obstruccion intestinal aguda",
      "Guia para biopsias percutaneas y procedimientos intervencionistas",
      "Estudio de fracturas complejas y lesiones de columna vertebral",
      "Angiografia por TC para evaluacion de vasos sanguineos (coronarios, cerebrales, perifericos)",
      "Evaluacion de calculos renales y patologia de vias urinarias"
    ],
    "indicacionesEn": [
      "Evaluation of head trauma and cerebral hemorrhages",
      "Detection and staging of tumors in the chest, abdomen, and pelvis",
      "Diagnosis of pulmonary embolism and aortic dissection",
      "Evaluation of appendicitis, diverticulitis, and acute intestinal obstruction",
      "Guidance for percutaneous biopsies and interventional procedures",
      "Study of complex fractures and spinal injuries",
      "CT angiography for evaluation of blood vessels (coronary, cerebral, peripheral)",
      "Evaluation of kidney stones and urinary tract pathology"
    ],
    "preparacionEs": "La preparacion depende del tipo de estudio. Para estudios sin contraste, generalmente no se requiere preparacion especial. Si se utilizara medio de contraste intravenoso, se solicita ayuno de 4 a 6 horas previas. El paciente debe informar sobre alergias, especialmente a medios de contraste yodados, asi como sobre enfermedades renales, diabetes o problemas de tiroides. Se realizara un analisis de creatinina para verificar la funcion renal antes de administrar contraste. Para estudios abdominales puede ser necesario beber un contraste oral (liquido con sabor) entre 1 y 2 horas antes del examen. Debe retirar objetos metalicos, joyas y ropa con cremalleras de la zona a estudiar. Informe si tiene marcapasos, implantes metalicos o claustrofobia.",
    "preparacionEn": "Preparation depends on the type of study. For non-contrast studies, no special preparation is generally required. If intravenous contrast will be used, fasting for 4 to 6 hours beforehand is requested. The patient should report allergies, especially to iodinated contrast media, as well as kidney disease, diabetes, or thyroid problems. A creatinine blood test will be performed to verify kidney function before administering contrast. For abdominal studies it may be necessary to drink an oral contrast agent (flavored liquid) 1 to 2 hours before the exam. Metallic objects, jewelry, and clothing with zippers should be removed from the area being studied. Inform staff if you have a pacemaker, metallic implants, or claustrophobia.",
    "procedimientoEs": "El paciente se acuesta boca arriba sobre una mesa motorizada que se desliza dentro de un anillo grande llamado gantry. El tecnologo posiciona al paciente y puede colocar almohadas o correas para mantener la posicion correcta. Si se requiere contraste intravenoso, se inserta una via venosa en el brazo. La mesa se mueve suavemente a traves del gantry mientras el tubo de rayos X gira alrededor del paciente, tomando cientos de imagenes en segundos. El paciente puede escuchar zumbidos y chasquidos del equipo. Se le pedira que permanezca quieto y que contenga la respiracion brevemente durante ciertas adquisiciones. Si se administra contraste, puede sentir una sensacion de calor transitorio en el cuerpo y un sabor metalico en la boca, lo cual es normal. Una vez completada la adquisicion, las imagenes se reconstruyen por computadora y se envian al radiologo para su interpretacion.",
    "procedimientoEn": "The patient lies on their back on a motorized table that slides into a large ring called the gantry. The technologist positions the patient and may place pillows or straps to maintain the correct position. If intravenous contrast is required, an IV line is inserted in the arm. The table moves smoothly through the gantry while the X-ray tube rotates around the patient, capturing hundreds of images in seconds. The patient may hear humming and clicking sounds from the equipment. They will be asked to remain still and briefly hold their breath during certain acquisitions. If contrast is administered, a transient warm sensation throughout the body and a metallic taste in the mouth may be felt, which is normal. Once the acquisition is complete, the images are reconstructed by computer and sent to the radiologist for interpretation.",
    "duracionEs": "El escaneo en si dura entre 10 y 30 segundos. El procedimiento completo, incluyendo preparacion, posicionamiento y, si aplica, la administracion de contraste, toma entre 15 y 45 minutos.",
    "duracionEn": "The scan itself lasts between 10 and 30 seconds. The complete procedure, including preparation, positioning, and contrast administration if applicable, takes between 15 and 45 minutes.",
    "riesgosEs": [
      "Exposicion a una dosis moderada de radiacion ionizante (mayor que una radiografia simple pero considerada segura para uso diagnostico)",
      "Reaccion alergica al medio de contraste yodado, que puede ir desde urticaria leve hasta anafilaxia (raro)",
      "Nefropatia inducida por contraste en pacientes con funcion renal comprometida",
      "Posible dano al feto en mujeres embarazadas",
      "Extravasacion del contraste intravenoso en el sitio de inyeccion (poco frecuente)"
    ],
    "riesgosEn": [
      "Exposure to a moderate dose of ionizing radiation (higher than a plain X-ray but considered safe for diagnostic use)",
      "Allergic reaction to iodinated contrast medium, ranging from mild hives to anaphylaxis (rare)",
      "Contrast-induced nephropathy in patients with compromised kidney function",
      "Possible harm to the fetus in pregnant women",
      "Extravasation of intravenous contrast at the injection site (uncommon)"
    ],
    "contraindicacionesEs": [
      "Embarazo (contraindicacion relativa; se realiza solo si es estrictamente necesario y no hay alternativa sin radiacion)",
      "Alergia grave documentada a medios de contraste yodados (se puede realizar sin contraste o con premedicacion antialergica)",
      "Insuficiencia renal severa (creatinina elevada) cuando se requiere contraste intravenoso",
      "Hipertiroidismo no controlado (el yodo del contraste puede desencadenar crisis tirotoxica)",
      "Mieloma multiple en combinacion con deshidratacion (mayor riesgo de nefropatia)"
    ],
    "contraindicacionesEn": [
      "Pregnancy (relative contraindication; performed only if strictly necessary and no radiation-free alternative exists)",
      "Documented severe allergy to iodinated contrast media (can be performed without contrast or with antiallergic premedication)",
      "Severe kidney failure (elevated creatinine) when intravenous contrast is required",
      "Uncontrolled hyperthyroidism (iodine in contrast can trigger thyrotoxic crisis)",
      "Multiple myeloma combined with dehydration (higher risk of nephropathy)"
    ],
    "resultadosEs": "El radiologo analiza las imagenes transversales y reconstrucciones tridimensionales. El informe suele estar disponible en pocas horas, o de forma inmediata en emergencias. Describira hallazgos como masas, hemorragias, fracturas, oclusiones vasculares, calculos o procesos inflamatorios. Las imagenes se almacenan digitalmente en el sistema PACS del hospital y pueden ser consultadas por otros especialistas. Su medico tratante le explicara los hallazgos, su significado clinico y los pasos a seguir, que pueden incluir tratamiento, seguimiento o estudios complementarios.",
    "resultadosEn": "The radiologist analyzes the cross-sectional images and three-dimensional reconstructions. The report is usually available within a few hours, or immediately in emergencies. It will describe findings such as masses, hemorrhages, fractures, vascular occlusions, stones, or inflammatory processes. The images are stored digitally in the hospital's PACS system and can be reviewed by other specialists. Your treating physician will explain the findings, their clinical significance, and the next steps, which may include treatment, follow-up, or complementary studies.",
    "preguntasFrecuentesEs": "Pregunta: ¿La TC es como un tunel cerrado? Respuesta: No, el gantry de la TC es un anillo abierto mucho mas corto y ancho que un resonador magnetico, por lo que la mayoria de pacientes no experimentan claustrofobia. Pregunta: ¿Sentire dolor? Respuesta: El escaneo es indoloro. Si recibe contraste intravenoso, sentira un pequeno pinchazo de la aguja y posiblemente calor momentaneo. Pregunta: ¿Cuanto tarda en llegar el resultado? Respuesta: En urgencias puede ser cuestion de minutos; en consultas programadas, generalmente entre 24 y 48 horas. Pregunta: ¿Puedo hacerme una TC si tengo implantes metalicos? Respuesta: Si, los implantes metalicos no contraindican la TC como ocurre con la resonancia magnetica, aunque pueden generar artefactos en la imagen.",
    "preguntasFrecuentesEn": "Question: Is a CT scan like a closed tunnel? Answer: No, the CT gantry is a short, wide open ring much less confining than an MRI scanner, so most patients do not experience claustrophobia. Question: Will I feel pain? Answer: The scan is painless. If you receive IV contrast, you will feel a small needle prick and possibly momentary warmth. Question: How long until I get my results? Answer: In the emergency department it may be a matter of minutes; for scheduled outpatient exams, generally 24 to 48 hours. Question: Can I have a CT scan if I have metallic implants? Answer: Yes, metallic implants do not contraindicate CT as they do with MRI, although they may create image artifacts."
  },
  {
    "id": "resonancia-magnetica",
    "nombreEs": "Resonancia Magnetica (RM / IRM)",
    "nombreEn": "Magnetic Resonance Imaging (MRI)",
    "descripcionEs": "La resonancia magnetica es una tecnica de imagen que utiliza un potente campo magnetico y ondas de radiofrecuencia para generar imagenes detalladas de los organos y tejidos del cuerpo, sin emplear radiacion ionizante. Los atomos de hidrogeno presentes en el agua corporal se alinean con el campo magnetico y emiten senales de radiofrecuencia que son captadas por antenas especiales y procesadas por una computadora para crear imagenes de extraordinaria resolucion. Es particularmente superior para visualizar tejidos blandos como el cerebro, la medula espinal, musculos, ligamentos, cartilago y organos abdominales. La RM permite obtener imagenes en multiples planos (axial, sagital, coronal) y con diferentes contrastes tisulares, lo que la convierte en una herramienta diagnostica insustituible en neurologia, oncologia, traumatologia y cardiologia, entre otras especialidades.",
    "descripcionEn": "Magnetic resonance imaging is a technique that uses a powerful magnetic field and radiofrequency waves to generate detailed images of the body's organs and tissues, without using ionizing radiation. Hydrogen atoms present in body water align with the magnetic field and emit radiofrequency signals that are captured by special antenna coils and processed by a computer to create images of extraordinary resolution. It is particularly superior for visualizing soft tissues such as the brain, spinal cord, muscles, ligaments, cartilage, and abdominal organs. MRI can produce images in multiple planes (axial, sagittal, coronal) with different tissue contrasts, making it an irreplaceable diagnostic tool in neurology, oncology, orthopedics, and cardiology, among other specialties.",
    "categoriaEs": "campo magnetico",
    "categoriaEn": "magnetic field",
    "indicacionesEs": [
      "Evaluacion de patologia cerebral: tumores, accidente cerebrovascular, esclerosis multiple, epilepsia",
      "Estudio de lesiones de medula espinal y hernias discales",
      "Evaluacion de lesiones de rodilla (meniscos, ligamentos cruzados) y hombro (manguito rotador)",
      "Deteccion y caracterizacion de tumores hepaticos, renales y pelvicos",
      "Estudio cardiaco: viabilidad miocardica, cardiomiopatias, valvulopatias",
      "Evaluacion de patologia mamaria como complemento a la mamografia",
      "Estudio de articulaciones y tejidos blandos en medicina deportiva",
      "Angiografia por resonancia magnetica para evaluacion vascular sin radiacion"
    ],
    "indicacionesEn": [
      "Evaluation of brain pathology: tumors, stroke, multiple sclerosis, epilepsy",
      "Study of spinal cord lesions and disc herniations",
      "Evaluation of knee injuries (menisci, cruciate ligaments) and shoulder injuries (rotator cuff)",
      "Detection and characterization of hepatic, renal, and pelvic tumors",
      "Cardiac study: myocardial viability, cardiomyopathies, valvular diseases",
      "Evaluation of breast pathology as a complement to mammography",
      "Study of joints and soft tissues in sports medicine",
      "Magnetic resonance angiography for vascular evaluation without radiation"
    ],
    "preparacionEs": "Antes del estudio, el paciente debe completar un cuestionario de seguridad detallado para descartar la presencia de dispositivos metalicos implantados incompatibles con el campo magnetico. Se deben retirar TODOS los objetos metalicos: joyas, relojes, tarjetas de credito, horquillas, piercings, dentaduras removibles con metal y cualquier dispositivo electronico. Para estudios con medio de contraste (gadolinio) se solicita ayuno de 4 horas y un analisis de funcion renal. Se debe informar sobre embarazo, claustrofobia, tatuajes (algunos contienen pigmentos metalicos), implantes cocleares, marcapasos, clips de aneurisma cerebral, valvulas cardiacas metalicas, estimuladores nerviosos o fragmentos metalicos en el cuerpo. Algunos pacientes con claustrofobia pueden necesitar sedacion leve.",
    "preparacionEn": "Before the study, the patient must complete a detailed safety questionnaire to rule out the presence of implanted metallic devices incompatible with the magnetic field. ALL metallic objects must be removed: jewelry, watches, credit cards, hairpins, piercings, removable dentures with metal, and any electronic devices. For studies with contrast agent (gadolinium), 4 hours of fasting and a kidney function blood test are required. The patient should inform staff about pregnancy, claustrophobia, tattoos (some contain metallic pigments), cochlear implants, pacemakers, cerebral aneurysm clips, metallic heart valves, nerve stimulators, or metallic fragments in the body. Some patients with claustrophobia may need mild sedation.",
    "procedimientoEs": "El paciente se acuesta sobre una mesa que se introduce lentamente en un tunel cilindrico largo y estrecho (el iman). Se colocan antenas (bobinas receptoras) sobre la zona del cuerpo a estudiar. Se proporcionan tapones para los oidos o audifonos con musica, ya que la maquina produce ruidos fuertes de golpeteo y zumbido durante la adquisicion de imagenes. El paciente debe permanecer lo mas inmovil posible durante todo el examen. Se le entregara un boton de emergencia que puede presionar en cualquier momento si necesita comunicarse con el tecnologo. El estudio consiste en multiples secuencias de imagenes, cada una con duracion de 2 a 8 minutos, durante las cuales escuchara diferentes patrones de ruido. Si se requiere contraste, se inyectara gadolinio por via intravenosa a mitad del estudio. El tecnologo supervisa todo el procedimiento desde una sala contigua y mantiene comunicacion por interfono.",
    "procedimientoEn": "The patient lies on a table that slowly enters a long, narrow cylindrical tunnel (the magnet). Antenna coils (receiver coils) are placed over the body area being studied. Earplugs or headphones with music are provided, as the machine produces loud knocking and humming sounds during image acquisition. The patient must remain as still as possible throughout the exam. An emergency button is given that can be pressed at any time to communicate with the technologist. The study consists of multiple image sequences, each lasting 2 to 8 minutes, during which different noise patterns will be heard. If contrast is needed, gadolinium will be injected intravenously midway through the study. The technologist monitors the entire procedure from an adjacent room and maintains communication via intercom.",
    "duracionEs": "El estudio completo suele durar entre 30 minutos y una hora, dependiendo de la region anatomica y el numero de secuencias necesarias. Estudios complejos como la resonancia cardiaca o estudios multiparametricos de prostata pueden extenderse hasta 90 minutos.",
    "duracionEn": "The complete study usually lasts between 30 minutes and one hour, depending on the anatomical region and the number of sequences needed. Complex studies such as cardiac MRI or multiparametric prostate studies may take up to 90 minutes.",
    "riesgosEs": [
      "No utiliza radiacion ionizante, por lo que no existe riesgo de exposicion a rayos X",
      "Riesgo de movimiento o atraccion de objetos metalicos ferromagneticos implantados (clips, proyectiles, fragmentos), lo que puede causar lesiones graves",
      "Quemaduras en la piel por lazos de cable, tatuajes con pigmentos metalicos o contacto con las bobinas en casos raros",
      "Fibrosis nefrogenica sistemica (FNS), una condicion rara pero grave, asociada al gadolinio en pacientes con insuficiencia renal avanzada",
      "Ansiedad y claustrofobia debido al espacio confinado y al ruido prolongado",
      "Riesgo de sedacion en pacientes que la requieren (depresion respiratoria)"
    ],
    "riesgosEn": [
      "Does not use ionizing radiation, so there is no risk of X-ray exposure",
      "Risk of movement or attraction of implanted ferromagnetic metallic objects (clips, projectiles, fragments), which can cause serious injury",
      "Skin burns from wire loops, tattoos with metallic pigments, or coil contact in rare cases",
      "Nephrogenic systemic fibrosis (NSF), a rare but serious condition associated with gadolinium in patients with advanced kidney failure",
      "Anxiety and claustrophobia due to the confined space and prolonged noise",
      "Sedation risk in patients who require it (respiratory depression)"
    ],
    "contraindicacionesEs": [
      "Marcapasos cardiacos o desfibriladores no compatibles con RM (existen modelos condicionales para RM que si pueden someterse con protocolos especificos)",
      "Implantes cocleares no compatibles con RM",
      "Clips de aneurisma cerebral ferromagneticos",
      "Fragmentos metalicos intraoculares o intracraneales",
      "Estimuladores nerviosos, bombas de infusion implantables o neuroestimuladores no compatibles",
      "Embarazo en el primer trimestre (contraindicacion relativa; se evita el gadolinio)",
      "Insuficiencia renal grave con TFG menor de 30 ml/min (contraindicacion para gadolinio)"
    ],
    "contraindicacionesEn": [
      "Non-MRI-compatible cardiac pacemakers or defibrillators (MRI-conditional models can undergo the study with specific protocols)",
      "Non-MRI-compatible cochlear implants",
      "Ferromagnetic cerebral aneurysm clips",
      "Intraocular or intracranial metallic fragments",
      "Non-compatible nerve stimulators, implantable infusion pumps, or neurostimulators",
      "Pregnancy in the first trimester (relative contraindication; gadolinium is avoided)",
      "Severe kidney failure with GFR less than 30 mL/min (contraindication for gadolinium)"
    ],
    "resultadosEs": "Las imagenes de RM son interpretadas por un radiologo subespecializado. El informe puede tardar entre 24 y 72 horas en estudios ambulatorios, y puede estar disponible en menos de una hora en situaciones urgentes. La RM proporciona informacion detallada sobre la anatomia, la presencia de lesiones, su tamano, localizacion, relacion con estructuras adyacentes y, en algunos casos, su naturaleza (benigna vs. maligna). Tecnicas avanzadas como la difusion, la perfusion y la espectroscopia aportan informacion funcional y metabolica adicional. Su medico tratante le explicara los hallazgos y planificara el tratamiento o seguimiento adecuado.",
    "resultadosEn": "MRI images are interpreted by a subspecialized radiologist. The report may take 24 to 72 hours for outpatient studies and may be available in less than an hour in urgent situations. MRI provides detailed information about anatomy, the presence of lesions, their size, location, relationship to adjacent structures, and in some cases their nature (benign vs. malignant). Advanced techniques such as diffusion, perfusion, and spectroscopy provide additional functional and metabolic information. Your treating physician will explain the findings and plan appropriate treatment or follow-up.",
    "preguntasFrecuentesEs": "Pregunta: ¿Es peligrosa la resonancia magnetica? Respuesta: No, la RM es muy segura siempre que se sigan las precauciones de seguridad respecto a objetos metalicos. No utiliza radiacion. Pregunta: ¿Que hago si tengo claustrofobia? Respuesta: Informe a su medico; puede recibir un medicamento para relajarse antes del estudio. Algunas instituciones cuentan con equipos abiertos o de diametro amplio. Pregunta: ¿Puedo moverme durante el estudio? Respuesta: Debe permanecer lo mas quieto posible; el movimiento causa imagenes borrosas que pueden requerir repetir secuencias. Pregunta: ¿Escuchare ruidos fuertes? Respuesta: Si, la maquina produce golpeteos ritmicos fuertes. Se le daran tapones o audifonos con musica para mayor comodidad.",
    "preguntasFrecuentesEn": "Question: Is MRI dangerous? Answer: No, MRI is very safe as long as safety precautions regarding metallic objects are followed. It does not use radiation. Question: What if I have claustrophobia? Answer: Inform your doctor; you may receive a relaxation medication before the study. Some institutions have open or wide-bore MRI scanners. Question: Can I move during the study? Answer: You must remain as still as possible; movement causes blurry images that may require repeating sequences. Question: Will I hear loud noises? Answer: Yes, the machine produces loud rhythmic knocking. Earplugs or headphones with music will be given for comfort."
  },
  {
    "id": "ecografia-ultrasonido",
    "nombreEs": "Ecografia (Ultrasonido)",
    "nombreEn": "Ultrasound (Sonography)",
    "descripcionEs": "La ecografia o ultrasonido es una tecnica de imagen que utiliza ondas sonoras de alta frecuencia para producir imagenes en tiempo real de las estructuras internas del cuerpo. Un dispositivo llamado transductor emite pulsos de ultrasonido que penetran los tejidos y rebotan al encontrar diferentes interfaces tisulares; estas senales reflejadas son procesadas por una computadora para crear imagenes dinamicas en la pantalla. Es una tecnica completamente segura, no invasiva y sin radiacion ionizante, lo que la hace ideal para su uso en embarazadas, ninos y para estudios repetidos. La ecografia permite evaluar organos abdominales (higado, vesicula biliar, rinones, pancreas, bazo), estructuras pelvicas (utero, ovarios, prostata), tiroides, mamas, vasos sanguineos, corazon (ecocardiografia) y el desarrollo fetal. La tecnologia Doppler incorporada permite ademas evaluar el flujo sanguineo en tiempo real.",
    "descripcionEn": "Ultrasound or sonography is an imaging technique that uses high-frequency sound waves to produce real-time images of the body's internal structures. A device called a transducer emits ultrasound pulses that penetrate tissues and bounce back when they encounter different tissue interfaces; these reflected signals are processed by a computer to create dynamic images on the screen. It is a completely safe, non-invasive technique without ionizing radiation, making it ideal for use in pregnant women, children, and for repeated studies. Ultrasound can evaluate abdominal organs (liver, gallbladder, kidneys, pancreas, spleen), pelvic structures (uterus, ovaries, prostate), thyroid, breasts, blood vessels, the heart (echocardiography), and fetal development. Incorporated Doppler technology also allows real-time evaluation of blood flow.",
    "categoriaEs": "ultrasonido",
    "categoriaEn": "ultrasound",
    "indicacionesEs": [
      "Seguimiento del embarazo y evaluacion del desarrollo fetal",
      "Evaluacion de dolor abdominal: calculos biliares, patologia hepatica, renal o pancreatica",
      "Estudio de masas o nodulos en tiroides, mamas y tejidos blandos",
      "Evaluacion de patologia pelvica: quistes ovaricos, miomas uterinos, patologia prostatica",
      "Ecocardiografia para evaluacion de la funcion cardiaca, valvulas y pericardio",
      "Doppler vascular para detectar trombosis venosa profunda o estenosis arterial",
      "Guia en tiempo real para biopsias, drenajes y procedimientos intervencionistas",
      "Evaluacion de displasia de cadera en recien nacidos y lactantes"
    ],
    "indicacionesEn": [
      "Pregnancy monitoring and fetal development assessment",
      "Evaluation of abdominal pain: gallstones, hepatic, renal, or pancreatic pathology",
      "Study of masses or nodules in thyroid, breast, and soft tissues",
      "Evaluation of pelvic pathology: ovarian cysts, uterine fibroids, prostatic pathology",
      "Echocardiography for evaluation of cardiac function, valves, and pericardium",
      "Vascular Doppler to detect deep vein thrombosis or arterial stenosis",
      "Real-time guidance for biopsies, drainages, and interventional procedures",
      "Evaluation of hip dysplasia in newborns and infants"
    ],
    "preparacionEs": "La preparacion varia segun el tipo de ecografia. Para ecografia abdominal se requiere ayuno de 6 a 8 horas para que la vesicula biliar este distendida y los gases intestinales sean minimos. Para ecografia pelvica transabdominal se solicita al paciente que beba entre 4 y 6 vasos de agua una hora antes del estudio y que no orine, ya que la vejiga llena sirve como ventana acustica para visualizar las estructuras pelvicas. Para ecografia transvaginal la vejiga debe estar vacia. Para ecografia de tiroides, mamas o musculoesqueletica generalmente no se necesita preparacion. Se recomienda usar ropa comoda y facil de retirar. No es necesario suspender medicamentos habituales.",
    "preparacionEn": "Preparation varies depending on the type of ultrasound. For abdominal ultrasound, 6 to 8 hours of fasting is required so that the gallbladder is distended and intestinal gas is minimal. For transabdominal pelvic ultrasound, the patient is asked to drink 4 to 6 glasses of water one hour before the study and not to urinate, as the full bladder serves as an acoustic window to visualize pelvic structures. For transvaginal ultrasound, the bladder should be empty. For thyroid, breast, or musculoskeletal ultrasound, no preparation is generally needed. Comfortable, easy-to-remove clothing is recommended. Regular medications do not need to be stopped.",
    "procedimientoEs": "El paciente se recuesta en una camilla y se expone la zona a examinar. El tecnologo o medico aplica un gel conductor a base de agua sobre la piel, que facilita la transmision de las ondas sonoras y elimina el aire entre el transductor y la piel. El transductor se desliza suavemente sobre la zona, aplicando presion leve a moderada. Las imagenes aparecen en tiempo real en la pantalla del equipo. El examinador captura imagenes estaticas y clips de video de las estructuras de interes. En ecografia Doppler, se evalua el flujo sanguineo que aparece en colores en la pantalla. En ecografia transvaginal, se introduce una sonda delgada protegida con funda esteril en la vagina. En ecografia transrectal (para prostata), se introduce una sonda similar en el recto. Al finalizar, se retira el gel con papel o toalla.",
    "procedimientoEn": "The patient lies on an examination table and the area to be examined is exposed. The technologist or physician applies a water-based conductive gel to the skin, which facilitates sound wave transmission and eliminates air between the transducer and skin. The transducer is gently glided over the area, applying light to moderate pressure. Images appear in real time on the equipment screen. The examiner captures still images and video clips of the structures of interest. In Doppler ultrasound, blood flow appears in colors on the screen. In transvaginal ultrasound, a thin probe protected with a sterile cover is inserted into the vagina. In transrectal ultrasound (for the prostate), a similar probe is inserted into the rectum. At the end, the gel is wiped off with paper or a towel.",
    "duracionEs": "Una ecografia estandar suele durar entre 20 y 40 minutos. Estudios mas complejos como la ecocardiografia completa o ecografias obstétricas detalladas pueden tomar de 45 a 60 minutos.",
    "duracionEn": "A standard ultrasound usually lasts between 20 and 40 minutes. More complex studies such as complete echocardiography or detailed obstetric ultrasounds may take 45 to 60 minutes.",
    "riesgosEs": [
      "No se conocen riesgos asociados a las ondas de ultrasonido diagnostico en las intensidades utilizadas en la practica clinica",
      "No utiliza radiacion ionizante ni campos magneticos intensos",
      "Molestia minima por la presion del transductor sobre zonas sensibles o doloridas",
      "Leve incomodidad con las sondas endocavitarias (transvaginal o transrectal)",
      "Posible ansiedad en pacientes por hallazgos inesperados durante el estudio en tiempo real"
    ],
    "riesgosEn": [
      "No known risks are associated with diagnostic ultrasound waves at the intensities used in clinical practice",
      "Does not use ionizing radiation or strong magnetic fields",
      "Minimal discomfort from transducer pressure on sensitive or sore areas",
      "Slight discomfort with endocavitary probes (transvaginal or transrectal)",
      "Possible patient anxiety from unexpected findings during the real-time study"
    ],
    "contraindicacionesEs": [
      "No existen contraindicaciones absolutas para la ecografia diagnostica",
      "Heridas abiertas o quemaduras extensas en la zona a evaluar pueden impedir colocar el transductor (contraindicacion relativa)",
      "Apositos, vendajes o yesos que cubran completamente la zona de interes",
      "Obesidad morbida puede limitar la calidad diagnostica por atenuacion del haz de ultrasonido"
    ],
    "contraindicacionesEn": [
      "There are no absolute contraindications for diagnostic ultrasound",
      "Open wounds or extensive burns in the area to be evaluated may prevent transducer placement (relative contraindication)",
      "Dressings, bandages, or casts completely covering the area of interest",
      "Morbid obesity may limit diagnostic quality due to ultrasound beam attenuation"
    ],
    "resultadosEs": "En muchos casos, el medico o tecnologo que realiza la ecografia puede dar resultados preliminares durante el estudio. El informe formal del radiologo suele estar disponible en 24 a 48 horas para estudios ambulatorios. En urgencias, los resultados se comunican de inmediato. La ecografia puede identificar calculos, quistes, tumores, colecciones liquidas, alteraciones del flujo sanguineo, anomalias fetales y muchas otras condiciones. Algunas limitaciones incluyen la dificultad para visualizar estructuras detras de hueso o aire (intestino), lo que puede requerir estudios complementarios como TC o RM.",
    "resultadosEn": "In many cases, the physician or technologist performing the ultrasound can give preliminary results during the study. The formal radiologist report is usually available within 24 to 48 hours for outpatient studies. In the emergency department, results are communicated immediately. Ultrasound can identify stones, cysts, tumors, fluid collections, blood flow abnormalities, fetal anomalies, and many other conditions. Some limitations include difficulty visualizing structures behind bone or air (bowel), which may require complementary studies such as CT or MRI.",
    "preguntasFrecuentesEs": "Pregunta: ¿La ecografia es segura durante el embarazo? Respuesta: Si, es el metodo de imagen de eleccion durante el embarazo porque no utiliza radiacion y no se han demostrado efectos daninos para la madre ni el feto. Pregunta: ¿Por que necesito tener la vejiga llena? Respuesta: La vejiga llena empuja el intestino hacia arriba y proporciona una ventana acustica clara para ver el utero, ovarios o prostata. Pregunta: ¿Que es el gel que aplican? Respuesta: Es un gel a base de agua, hipoalergenico y facil de limpiar, que ayuda a transmitir las ondas sonoras. Pregunta: ¿Puedo comer antes de una ecografia? Respuesta: Depende del tipo de estudio; para ecografia abdominal debe ayunar, pero para otros tipos generalmente puede comer normalmente.",
    "preguntasFrecuentesEn": "Question: Is ultrasound safe during pregnancy? Answer: Yes, it is the imaging method of choice during pregnancy because it does not use radiation and no harmful effects on the mother or fetus have been demonstrated. Question: Why do I need a full bladder? Answer: The full bladder pushes the intestine upward and provides a clear acoustic window to see the uterus, ovaries, or prostate. Question: What is the gel they apply? Answer: It is a water-based, hypoallergenic, easy-to-clean gel that helps transmit sound waves. Question: Can I eat before an ultrasound? Answer: It depends on the type of study; for abdominal ultrasound you should fast, but for other types you can generally eat normally."
  },
  {
    "id": "mamografia",
    "nombreEs": "Mamografia",
    "nombreEn": "Mammography",
    "descripcionEs": "La mamografia es un estudio de imagen especializado que utiliza rayos X de baja dosis para examinar el tejido mamario. Es el metodo de tamizaje mas importante para la deteccion temprana del cancer de mama, capaz de identificar tumores muy pequenos, microcalcificaciones y otras anomalias anos antes de que sean palpables. La mamografia digital moderna y la tomosintesis (mamografia 3D) han mejorado significativamente la capacidad de detectar lesiones en tejido mamario denso. La Sociedad Americana del Cancer y otras organizaciones recomiendan mamografias de tamizaje anuales o bianuales para mujeres a partir de los 40-50 anos, dependiendo de los factores de riesgo individuales. Ademas del tamizaje, la mamografia diagnostica se utiliza para evaluar sintomas como masas palpables, secrecion del pezon, dolor focal o cambios en la piel de la mama.",
    "descripcionEn": "Mammography is a specialized imaging study that uses low-dose X-rays to examine breast tissue. It is the most important screening method for early detection of breast cancer, capable of identifying very small tumors, microcalcifications, and other abnormalities years before they become palpable. Modern digital mammography and tomosynthesis (3D mammography) have significantly improved the ability to detect lesions in dense breast tissue. The American Cancer Society and other organizations recommend annual or biannual screening mammograms for women starting at age 40-50, depending on individual risk factors. In addition to screening, diagnostic mammography is used to evaluate symptoms such as palpable masses, nipple discharge, focal pain, or skin changes on the breast.",
    "categoriaEs": "rayos X",
    "categoriaEn": "X-rays",
    "indicacionesEs": [
      "Tamizaje periodico para deteccion temprana de cancer de mama en mujeres asintomaticas",
      "Evaluacion de una masa o bulto palpable en la mama",
      "Estudio de secrecion anormal del pezon, especialmente si es sanguinolenta o unilateral",
      "Evaluacion de cambios en la piel de la mama: retraccion, engrosamiento, eritema",
      "Seguimiento de pacientes con antecedentes personales de cancer de mama",
      "Evaluacion de mujeres con alto riesgo genetico (mutaciones BRCA1/BRCA2)",
      "Control postoperatorio tras cirugia mamaria conservadora o reconstruccion",
      "Guia para biopsias mamarias con aguja (estereotaxia)"
    ],
    "indicacionesEn": [
      "Periodic screening for early detection of breast cancer in asymptomatic women",
      "Evaluation of a palpable mass or lump in the breast",
      "Study of abnormal nipple discharge, especially if bloody or unilateral",
      "Evaluation of skin changes on the breast: retraction, thickening, erythema",
      "Follow-up of patients with a personal history of breast cancer",
      "Evaluation of women at high genetic risk (BRCA1/BRCA2 mutations)",
      "Postoperative follow-up after breast-conserving surgery or reconstruction",
      "Guidance for needle breast biopsies (stereotactic)"
    ],
    "preparacionEs": "Se recomienda programar la mamografia durante la primera o segunda semana despues de la menstruacion, cuando las mamas estan menos sensibles. No debe aplicar desodorante, talco, crema, locion ni perfume en las axilas o mamas el dia del estudio, ya que estos productos pueden crear artefactos que simulan microcalcificaciones en la imagen. Use ropa de dos piezas para facilitar el cambio. Lleve estudios mamograficos previos si se realizo en otra institucion, para que el radiologo pueda comparar. Informe al tecnologo si esta embarazada o lactando, si tiene implantes mamarios, si le han realizado biopsias mamarias previas, o si tiene algun sintoma especifico. No se requiere ayuno ni suspension de medicamentos.",
    "preparacionEn": "It is recommended to schedule the mammogram during the first or second week after menstruation, when the breasts are least tender. Do not apply deodorant, talcum powder, cream, lotion, or perfume to the underarms or breasts on the day of the study, as these products can create artifacts that mimic microcalcifications on the image. Wear two-piece clothing for easy changing. Bring previous mammographic studies if performed at another institution so the radiologist can compare. Inform the technologist if you are pregnant or breastfeeding, have breast implants, have had previous breast biopsies, or have any specific symptoms. No fasting or medication changes are required.",
    "procedimientoEs": "El paciente se coloca de pie frente al mamografo. El tecnologo posiciona una mama a la vez sobre una plataforma de soporte. Una paleta de compresion transparente desciende gradualmente para comprimir la mama de forma firme pero tolerable. Esta compresion es esencial: separa los tejidos para visualizarlos mejor, reduce la dosis de radiacion necesaria y disminuye el movimiento que causaria imagenes borrosas. Se toman al menos dos proyecciones de cada mama: craneocaudal (de arriba a abajo) y mediolateral oblicua (en angulo desde el centro hacia afuera). Cada compresion dura solo unos segundos mientras se adquiere la imagen. En la tomosintesis, el tubo de rayos X se mueve en un arco mientras toma multiples imagenes de baja dosis que se reconstruyen en cortes milimetricos. Si se detecta una anomalia, pueden tomarse vistas adicionales con compresion focalizada o magnificacion.",
    "procedimientoEn": "The patient stands in front of the mammography unit. The technologist positions one breast at a time on a support platform. A transparent compression paddle descends gradually to compress the breast firmly but tolerably. This compression is essential: it separates tissues for better visualization, reduces the required radiation dose, and decreases motion that would cause blurry images. At least two projections of each breast are taken: craniocaudal (top to bottom) and mediolateral oblique (angled from center outward). Each compression lasts only a few seconds while the image is acquired. In tomosynthesis, the X-ray tube moves in an arc while taking multiple low-dose images that are reconstructed into millimeter-thin slices. If an abnormality is detected, additional views with spot compression or magnification may be taken.",
    "duracionEs": "El procedimiento completo dura aproximadamente 20 a 30 minutos. La compresion de cada mama dura solo unos segundos por cada proyeccion. Si se requieren vistas adicionales diagnosticas, el tiempo puede extenderse ligeramente.",
    "duracionEn": "The complete procedure takes approximately 20 to 30 minutes. Compression of each breast lasts only a few seconds per projection. If additional diagnostic views are needed, the time may extend slightly.",
    "riesgosEs": [
      "Molestia o dolor durante la compresion mamaria (transitorio y generalmente tolerable)",
      "Exposicion a una dosis muy baja de radiacion ionizante (el beneficio del tamizaje supera ampliamente el riesgo minimo de radiacion)",
      "Posibilidad de resultados falsos positivos que generen ansiedad y requieran estudios adicionales",
      "Posibilidad de resultados falsos negativos (tumores no detectados, especialmente en mamas muy densas)",
      "Sobrediagnostico: deteccion de lesiones de crecimiento lento que podrian no haber causado problemas clinicos"
    ],
    "riesgosEn": [
      "Discomfort or pain during breast compression (temporary and generally tolerable)",
      "Exposure to a very low dose of ionizing radiation (the benefit of screening far outweighs the minimal radiation risk)",
      "Possibility of false-positive results causing anxiety and requiring additional studies",
      "Possibility of false-negative results (undetected tumors, especially in very dense breasts)",
      "Overdiagnosis: detection of slow-growing lesions that might not have caused clinical problems"
    ],
    "contraindicacionesEs": [
      "Embarazo confirmado (contraindicacion relativa; se realiza si el beneficio lo justifica, con proteccion abdominal)",
      "Implantes mamarios (no es contraindicacion pero requiere tecnica especial con desplazamiento del implante - maniobra de Eklund)",
      "Mastitis aguda o absceso mamario activo (puede causar dolor intenso con la compresion; se posterga hasta resolver la infeccion)",
      "Heridas abiertas o lesiones cutaneas extensas en la mama"
    ],
    "contraindicacionesEn": [
      "Confirmed pregnancy (relative contraindication; performed if benefit justifies it, with abdominal shielding)",
      "Breast implants (not a contraindication but requires special technique with implant displacement - Eklund maneuver)",
      "Acute mastitis or active breast abscess (compression may cause severe pain; postponed until infection resolves)",
      "Open wounds or extensive skin lesions on the breast"
    ],
    "resultadosEs": "Los resultados se clasifican segun el sistema BI-RADS (Breast Imaging Reporting and Data System) del 0 al 6: BI-RADS 0 indica estudio incompleto que requiere imagenes adicionales; BI-RADS 1 es negativo (normal); BI-RADS 2 indica hallazgos benignos; BI-RADS 3 sugiere hallazgo probablemente benigno con seguimiento a corto plazo; BI-RADS 4 indica hallazgo sospechoso que requiere biopsia; BI-RADS 5 indica hallazgo altamente sugestivo de malignidad; BI-RADS 6 se asigna a malignidad confirmada por biopsia. Los resultados del tamizaje generalmente se envian por correo o estan disponibles en el portal del paciente dentro de 1 a 2 semanas. Hallazgos urgentes se comunican directamente al medico tratante.",
    "resultadosEn": "Results are classified according to the BI-RADS (Breast Imaging Reporting and Data System) system from 0 to 6: BI-RADS 0 indicates an incomplete study requiring additional images; BI-RADS 1 is negative (normal); BI-RADS 2 indicates benign findings; BI-RADS 3 suggests a probably benign finding with short-term follow-up; BI-RADS 4 indicates a suspicious finding requiring biopsy; BI-RADS 5 indicates a finding highly suggestive of malignancy; BI-RADS 6 is assigned to biopsy-confirmed malignancy. Screening results are generally sent by mail or available on the patient portal within 1 to 2 weeks. Urgent findings are communicated directly to the treating physician.",
    "preguntasFrecuentesEs": "Pregunta: ¿Duele mucho la mamografia? Respuesta: La compresion puede causar molestia o dolor breve, pero dura solo unos segundos. Programar el estudio despues de la menstruacion reduce la sensibilidad. Pregunta: ¿A que edad debo empezar? Respuesta: Las guias varian, pero generalmente se recomienda entre los 40 y 50 anos para mujeres de riesgo promedio. Mujeres con alto riesgo pueden comenzar antes. Pregunta: ¿Puedo hacerme mamografia con implantes? Respuesta: Si, pero debe informar al tecnologo. Se utiliza una tecnica especial para desplazar el implante y visualizar el tejido mamario. Pregunta: ¿La mamografia detecta todos los canceres? Respuesta: No, puede haber falsos negativos, especialmente en mamas muy densas. Por eso algunas mujeres de alto riesgo complementan con ecografia o resonancia magnetica mamaria.",
    "preguntasFrecuentesEn": "Question: Does mammography hurt a lot? Answer: Compression may cause brief discomfort or pain, but it lasts only a few seconds. Scheduling the study after menstruation reduces tenderness. Question: At what age should I start? Answer: Guidelines vary, but screening is generally recommended between ages 40 and 50 for average-risk women. High-risk women may begin earlier. Question: Can I have a mammogram with implants? Answer: Yes, but you must inform the technologist. A special technique is used to displace the implant and visualize the breast tissue. Question: Does mammography detect all cancers? Answer: No, there can be false negatives, especially in very dense breasts. That is why some high-risk women supplement with breast ultrasound or breast MRI."
  },
  {
    "id": "pet-scan",
    "nombreEs": "Tomografia por Emision de Positrones (PET Scan)",
    "nombreEn": "Positron Emission Tomography (PET Scan)",
    "descripcionEs": "La tomografia por emision de positrones, o PET scan, es un estudio de medicina nuclear que permite evaluar la actividad metabolica de los tejidos del cuerpo. Se administra al paciente una pequena cantidad de un material radiactivo llamado radiotrazador, generalmente fluorodesoxiglucosa marcada con fluor-18 (FDG-18), que es un analogo de la glucosa. Las celulas con mayor actividad metabolica, como las celulas tumorales, absorben mas FDG, lo que las hace visibles en las imagenes PET como areas de captacion intensa. Actualmente, el PET se combina casi siempre con una TC (PET/TC) o una RM (PET/RM) para proporcionar imagenes fusionadas que muestran tanto la informacion metabolica como la anatomica con gran precision. Esta tecnologia es fundamental en oncologia para diagnostico, estadificacion, evaluacion de respuesta al tratamiento y deteccion de recurrencias tumorales. Tambien se utiliza en neurologia y cardiologia.",
    "descripcionEn": "Positron emission tomography, or PET scan, is a nuclear medicine study that evaluates the metabolic activity of body tissues. A small amount of radioactive material called a radiotracer, usually fluorine-18-labeled fluorodeoxyglucose (FDG-18), is administered to the patient. FDG is a glucose analog. Cells with higher metabolic activity, such as tumor cells, absorb more FDG, making them visible on PET images as areas of intense uptake. Currently, PET is almost always combined with a CT (PET/CT) or an MRI (PET/MRI) to provide fused images showing both metabolic and anatomical information with great precision. This technology is fundamental in oncology for diagnosis, staging, treatment response evaluation, and detection of tumor recurrence. It is also used in neurology and cardiology.",
    "categoriaEs": "medicina nuclear",
    "categoriaEn": "nuclear medicine",
    "indicacionesEs": [
      "Deteccion, estadificacion y reestadiaficacion de multiples tipos de cancer (pulmon, linfoma, melanoma, colon, mama, esofago, cabeza y cuello, entre otros)",
      "Evaluacion de la respuesta al tratamiento oncologico (quimioterapia, radioterapia, inmunoterapia)",
      "Diferenciacion entre tejido tumoral activo y cicatricial o necrotico post-tratamiento",
      "Busqueda de tumor primario desconocido en pacientes con metastasis",
      "Evaluacion de demencia y enfermedad de Alzheimer (PET cerebral con FDG o trazadores de amiloide)",
      "Estudio de viabilidad miocardica: identificacion de tejido cardiaco viable vs. infartado",
      "Evaluacion de infecciones e inflamaciones cronicas de localizacion incierta (vasculitis, fiebre de origen desconocido)",
      "Planificacion de radioterapia para delimitar el volumen tumoral metabolicamente activo"
    ],
    "indicacionesEn": [
      "Detection, staging, and restaging of multiple cancer types (lung, lymphoma, melanoma, colon, breast, esophageal, head and neck, among others)",
      "Evaluation of oncologic treatment response (chemotherapy, radiation therapy, immunotherapy)",
      "Differentiation between active tumor tissue and post-treatment scar or necrotic tissue",
      "Search for unknown primary tumor in patients with metastases",
      "Evaluation of dementia and Alzheimer's disease (brain PET with FDG or amyloid tracers)",
      "Myocardial viability study: identification of viable versus infarcted cardiac tissue",
      "Evaluation of infections and chronic inflammation of uncertain location (vasculitis, fever of unknown origin)",
      "Radiation therapy planning to delineate metabolically active tumor volume"
    ],
    "preparacionEs": "El paciente debe ayunar durante al menos 6 horas antes del estudio (solo puede beber agua). Los niveles de glucosa en sangre deben estar controlados, idealmente por debajo de 150-200 mg/dL, ya que la hiperglucemia compite con la captacion de FDG y degrada la calidad del estudio. Los pacientes diabeticos deben consultar con su medico sobre el manejo de insulina y medicamentos hipoglucemiantes previo al examen. Se debe evitar el ejercicio fisico intenso en las 24 horas previas, ya que los musculos activos captan FDG y pueden generar falsos positivos. Debe informar sobre todos los medicamentos que toma, especialmente metformina, esteroides, factores estimulantes de colonias (G-CSF) y quimioterapia reciente, ya que pueden afectar la interpretacion. Se recomienda usar ropa comoda sin cierres metalicos.",
    "preparacionEn": "The patient must fast for at least 6 hours before the study (only water may be consumed). Blood glucose levels should be controlled, ideally below 150-200 mg/dL, as hyperglycemia competes with FDG uptake and degrades study quality. Diabetic patients should consult their physician about insulin and hypoglycemic medication management before the exam. Intense physical exercise should be avoided for 24 hours prior, as active muscles take up FDG and can generate false positives. All medications being taken should be reported, especially metformin, steroids, colony-stimulating factors (G-CSF), and recent chemotherapy, as they may affect interpretation. Comfortable clothing without metallic closures is recommended.",
    "procedimientoEs": "Al llegar, se verifica que el paciente ha cumplido con el ayuno y se mide la glucosa en sangre. Se inserta una via intravenosa y se inyecta el radiotrazador FDG. A continuacion, el paciente reposa en una habitacion tranquila y con poca luz durante 60 a 90 minutos, periodo conocido como fase de captacion, durante el cual debe permanecer lo mas quieto posible, sin hablar, masticar chicle ni usar el telefono, para minimizar la captacion fisiologica en musculos y cerebro. Despues de la fase de captacion, el paciente se acuesta en la mesa del equipo PET/TC. El escaneo comienza con la adquisicion de la TC (que puede ser con o sin contraste) seguida del escaneo PET, que recorre el cuerpo desde la cabeza hasta los muslos. El paciente debe permanecer inmovil mientras la mesa se mueve lentamente a traves del equipo. Las imagenes de PET y TC se fusionan automaticamente por software especializado.",
    "procedimientoEn": "Upon arrival, fasting compliance is verified and blood glucose is measured. An intravenous line is inserted and the FDG radiotracer is injected. The patient then rests in a quiet, dimly lit room for 60 to 90 minutes, known as the uptake phase, during which they should remain as still as possible, without talking, chewing gum, or using a phone, to minimize physiological uptake in muscles and brain. After the uptake phase, the patient lies on the PET/CT table. Scanning begins with the CT acquisition (which may be with or without contrast) followed by the PET scan, which covers the body from the head to the thighs. The patient must remain still as the table moves slowly through the equipment. The PET and CT images are automatically fused by specialized software.",
    "duracionEs": "El procedimiento total dura aproximadamente 2 a 3 horas, de las cuales 60-90 minutos corresponden al periodo de reposo tras la inyeccion del radiotrazador y 20-30 minutos al escaneo en si. La estancia total en el departamento de medicina nuclear es generalmente de 3 a 4 horas.",
    "duracionEn": "The total procedure lasts approximately 2 to 3 hours, of which 60-90 minutes correspond to the rest period after radiotracer injection and 20-30 minutes to the scan itself. The total stay in the nuclear medicine department is generally 3 to 4 hours.",
    "riesgosEs": [
      "Exposicion a una pequena dosis de radiacion del radiotrazador y de la TC asociada (comparable a la radiacion natural de 2-3 anos; se considera segura para uso diagnostico)",
      "Reaccion alergica al radiotrazador (extremadamente rara con FDG)",
      "Molestia por el pinchazo de la via intravenosa",
      "Reaccion alergica al medio de contraste yodado si se realiza TC contrastada como parte del PET/TC",
      "Resultados falsos positivos por procesos inflamatorios o infecciosos que tambien captan FDG",
      "Resultados falsos negativos en tumores de baja actividad metabolica o muy pequenos (menores de 1 cm)"
    ],
    "riesgosEn": [
      "Exposure to a small radiation dose from the radiotracer and associated CT (comparable to 2-3 years of natural background radiation; considered safe for diagnostic use)",
      "Allergic reaction to the radiotracer (extremely rare with FDG)",
      "Discomfort from the IV needle stick",
      "Allergic reaction to iodinated contrast if a contrast-enhanced CT is performed as part of PET/CT",
      "False-positive results from inflammatory or infectious processes that also take up FDG",
      "False-negative results in tumors with low metabolic activity or very small tumors (less than 1 cm)"
    ],
    "contraindicacionesEs": [
      "Embarazo (contraindicacion absoluta por la radiacion al feto)",
      "Lactancia (se recomienda interrumpir la lactancia durante 12-24 horas despues de la inyeccion del radiotrazador)",
      "Hiperglucemia no controlada (glucosa >200 mg/dL) ya que compromete la calidad del estudio",
      "Alergia al contraste yodado (solo si se planea TC contrastada como parte del PET/TC; se puede realizar sin contraste)",
      "Insuficiencia renal severa (si se requiere contraste yodado para la TC)"
    ],
    "contraindicacionesEn": [
      "Pregnancy (absolute contraindication due to fetal radiation exposure)",
      "Breastfeeding (breastfeeding should be interrupted for 12-24 hours after radiotracer injection)",
      "Uncontrolled hyperglycemia (glucose >200 mg/dL) as it compromises study quality",
      "Allergy to iodinated contrast (only if contrast-enhanced CT is planned as part of PET/CT; can be performed without contrast)",
      "Severe kidney failure (if iodinated contrast is needed for the CT component)"
    ],
    "resultadosEs": "Las imagenes PET/TC son interpretadas por un medico nuclear o radiologo subespecializado. El informe describe las areas de captacion anormal del radiotrazador, su localizacion anatomica (correlacionada con la TC), su intensidad (medida como SUV - valor de captacion estandarizado) y su significado clinico. El informe suele estar disponible en 24 a 72 horas. En oncologia, se utiliza para determinar la extension de la enfermedad (estadificacion), evaluar si un tratamiento esta funcionando (respuesta metabolica) o detectar recurrencia. Su medico oncologico u otro especialista integrara los resultados del PET con la informacion clinica y otros estudios para tomar decisiones sobre su tratamiento.",
    "resultadosEn": "PET/CT images are interpreted by a nuclear medicine physician or subspecialized radiologist. The report describes areas of abnormal radiotracer uptake, their anatomical location (correlated with CT), their intensity (measured as SUV - standardized uptake value), and their clinical significance. The report is usually available within 24 to 72 hours. In oncology, it is used to determine disease extent (staging), assess whether treatment is working (metabolic response), or detect recurrence. Your oncologist or other specialist will integrate the PET results with clinical information and other studies to make treatment decisions.",
    "preguntasFrecuentesEs": "Pregunta: ¿Soy radiactivo despues del PET? Respuesta: Si, brevemente. La radiactividad del FDG-18 disminuye a la mitad cada 2 horas y practicamente desaparece en 10-12 horas. Se recomienda evitar contacto cercano prolongado con ninos pequenos y embarazadas durante unas horas despues del estudio. Pregunta: ¿Por que debo ayunar? Respuesta: El ayuno reduce los niveles de insulina y permite que el FDG sea captado preferentemente por los tejidos tumorales en lugar de ser distribuido a los musculos y tejido graso. Pregunta: ¿Es lo mismo que una TC? Respuesta: No, el PET muestra la actividad metabolica de las celulas, mientras que la TC muestra la anatomia. La combinacion PET/TC proporciona ambas informaciones de manera integrada. Pregunta: ¿Siento algo durante el escaneo? Respuesta: El escaneo es indoloro. Solo puede sentir el pinchazo de la via intravenosa y posiblemente frio o incomodidad por estar acostado inmovil durante el estudio.",
    "preguntasFrecuentesEn": "Question: Am I radioactive after a PET scan? Answer: Yes, briefly. The radioactivity of FDG-18 decreases by half every 2 hours and practically disappears in 10-12 hours. It is recommended to avoid prolonged close contact with small children and pregnant women for a few hours after the study. Question: Why do I need to fast? Answer: Fasting reduces insulin levels and allows FDG to be preferentially taken up by tumor tissues rather than distributed to muscles and fat tissue. Question: Is it the same as a CT scan? Answer: No, PET shows the metabolic activity of cells while CT shows anatomy. The PET/CT combination provides both types of information in an integrated manner. Question: Do I feel anything during the scan? Answer: The scan is painless. You may only feel the IV needle stick and possibly cold or discomfort from lying still during the study."
  },
  {
    "id": "angiografia",
    "nombreEs": "Angiografia",
    "nombreEn": "Angiography",
    "descripcionEs": "La angiografia es un procedimiento de imagen intervencionista que permite visualizar el interior de los vasos sanguineos (arterias y venas) mediante la inyeccion de un medio de contraste radiopaco y el uso de rayos X en tiempo real (fluoroscopia). Un medico radiologo intervencionista introduce un cateter delgado y flexible, generalmente a traves de la arteria femoral en la ingle o la arteria radial en la muneca, y lo guia con fluoroscopia hasta el vaso sanguineo de interes. Al inyectar el contraste, los vasos se hacen visibles en la pantalla, permitiendo detectar estrechamientos (estenosis), oclusiones, aneurismas, malformaciones vasculares, fugas y otras anomalias. Ademas de su funcion diagnostica, la angiografia permite realizar tratamientos simultaneos como angioplastia con balon, colocacion de stents, embolizacion de tumores o hemorragias, y trombolisis dirigida por cateter. La angiografia por sustraccion digital (DSA) es la tecnica de referencia, aunque muchos estudios diagnosticos iniciales se realizan ahora de forma no invasiva con angiografia por TC o RM.",
    "descripcionEn": "Angiography is an interventional imaging procedure that allows visualization of the interior of blood vessels (arteries and veins) through injection of a radiopaque contrast medium and real-time X-ray imaging (fluoroscopy). An interventional radiologist introduces a thin, flexible catheter, usually through the femoral artery in the groin or the radial artery in the wrist, and guides it with fluoroscopy to the blood vessel of interest. When contrast is injected, the vessels become visible on the screen, allowing detection of narrowing (stenosis), occlusions, aneurysms, vascular malformations, leaks, and other abnormalities. In addition to its diagnostic function, angiography allows simultaneous treatments such as balloon angioplasty, stent placement, embolization of tumors or hemorrhages, and catheter-directed thrombolysis. Digital subtraction angiography (DSA) is the reference technique, although many initial diagnostic studies are now performed non-invasively with CT or MR angiography.",
    "categoriaEs": "intervencionista",
    "categoriaEn": "interventional",
    "indicacionesEs": [
      "Evaluacion de enfermedad arterial periferica (claudicacion, isquemia critica de miembros inferiores)",
      "Estudio de estenosis de arterias carotidas previo a endarterectomia o stenting",
      "Diagnostico y tratamiento de aneurismas cerebrales y malformaciones arteriovenosas",
      "Evaluacion de estenosis de arterias renales como causa de hipertension renovascular",
      "Embolizacion de tumores hepaticos (quimioembolizacion transarterial - TACE)",
      "Control de hemorragias agudas (gastrointestinal, pelvica, traumatica) mediante embolizacion",
      "Evaluacion de la circulacion coronaria previa a cirugia cardiaca o intervencion percutanea",
      "Tratamiento de trombosis venosa profunda con trombolisis dirigida por cateter"
    ],
    "indicacionesEn": [
      "Evaluation of peripheral arterial disease (claudication, critical limb ischemia)",
      "Study of carotid artery stenosis prior to endarterectomy or stenting",
      "Diagnosis and treatment of cerebral aneurysms and arteriovenous malformations",
      "Evaluation of renal artery stenosis as a cause of renovascular hypertension",
      "Embolization of hepatic tumors (transarterial chemoembolization - TACE)",
      "Control of acute hemorrhages (gastrointestinal, pelvic, traumatic) through embolization",
      "Evaluation of coronary circulation prior to cardiac surgery or percutaneous intervention",
      "Treatment of deep vein thrombosis with catheter-directed thrombolysis"
    ],
    "preparacionEs": "El paciente generalmente debe ayunar durante 6 a 8 horas antes del procedimiento. Se realizan analisis de sangre previos que incluyen funcion renal (creatinina), coagulacion (TP, TTP, INR) y hemograma completo. Debe informar sobre todos los medicamentos que toma, especialmente anticoagulantes (warfarina, heparina, anticoagulantes orales directos) y antiplaquetarios (aspirina, clopidogrel), ya que algunos deben suspenderse o ajustarse dias antes del procedimiento segun las indicaciones del medico. Informe sobre alergias, especialmente a medios de contraste yodados, latex o anestesicos locales. En caso de alergia al contraste, se administrara premedicacion con corticoides y antihistaminicos. Se colocara una via intravenosa y se puede administrar sedacion consciente. El paciente firma un consentimiento informado despues de que el medico explique el procedimiento, sus beneficios, riesgos y alternativas.",
    "preparacionEn": "The patient must generally fast for 6 to 8 hours before the procedure. Prior blood tests are performed including kidney function (creatinine), coagulation (PT, PTT, INR), and complete blood count. All medications should be reported, especially anticoagulants (warfarin, heparin, direct oral anticoagulants) and antiplatelets (aspirin, clopidogrel), as some must be stopped or adjusted days before the procedure per the physician's instructions. Report allergies, especially to iodinated contrast media, latex, or local anesthetics. In case of contrast allergy, premedication with corticosteroids and antihistamines will be administered. An IV line will be placed and conscious sedation may be given. The patient signs an informed consent after the physician explains the procedure, its benefits, risks, and alternatives.",
    "procedimientoEs": "El procedimiento se realiza en una sala de angiografia o de cateterismo equipada con un arco de fluoroscopia. Despues de la preparacion y sedacion, se limpia y desinfecta la zona de acceso vascular (ingle o muneca). Se aplica anestesia local y se realiza una pequena puncion con aguja para acceder a la arteria, utilizando la tecnica de Seldinger. Se introduce un alambre guia seguido de un introductor vascular y luego el cateter, que se avanza bajo guia fluoroscopica hasta el vaso objetivo. Se inyecta medio de contraste a traves del cateter mientras se adquieren imagenes radiograficas rapidas. Las imagenes de sustraccion digital eliminan las estructuras oseas y de tejido blando, dejando visibles solo los vasos sanguineos con contraste. Si se identifica una lesion tratable, se puede realizar intervencion terapeutica en el mismo procedimiento: dilatacion con balon, colocacion de stent, inyeccion de agentes embolizantes, o administracion de farmacos directamente en el vaso afectado. Al finalizar, se retira el cateter y se aplica compresion manual o un dispositivo de cierre vascular en el sitio de puncion.",
    "procedimientoEn": "The procedure is performed in an angiography or catheterization suite equipped with a fluoroscopy C-arm. After preparation and sedation, the vascular access site (groin or wrist) is cleaned and disinfected. Local anesthesia is applied and a small needle puncture is made to access the artery using the Seldinger technique. A guidewire is introduced followed by a vascular sheath and then the catheter, which is advanced under fluoroscopic guidance to the target vessel. Contrast medium is injected through the catheter while rapid radiographic images are acquired. Digital subtraction images remove bone and soft tissue structures, leaving only the contrast-filled vessels visible. If a treatable lesion is identified, therapeutic intervention can be performed during the same procedure: balloon dilation, stent placement, injection of embolic agents, or administration of drugs directly into the affected vessel. Upon completion, the catheter is removed and manual compression or a vascular closure device is applied at the puncture site.",
    "duracionEs": "Un procedimiento diagnostico simple dura entre 30 y 60 minutos. Si se realizan intervenciones terapeuticas (angioplastia, stent, embolizacion), el tiempo puede extenderse a 1-3 horas o mas, dependiendo de la complejidad. Despues del procedimiento, el paciente debe permanecer en reposo con la extremidad inmovilizada durante 2 a 6 horas para observacion y prevencion de complicaciones en el sitio de puncion.",
    "duracionEn": "A simple diagnostic procedure lasts between 30 and 60 minutes. If therapeutic interventions are performed (angioplasty, stent, embolization), the time may extend to 1-3 hours or more depending on complexity. After the procedure, the patient must remain at rest with the limb immobilized for 2 to 6 hours for observation and prevention of complications at the puncture site.",
    "riesgosEs": [
      "Hematoma, sangrado o pseudoaneurisma en el sitio de puncion arterial",
      "Reaccion alergica al medio de contraste yodado (desde urticaria leve hasta anafilaxia)",
      "Nefropatia inducida por contraste, especialmente en pacientes con funcion renal comprometida",
      "Diseccion arterial, perforacion o ruptura del vaso por el cateter o alambre guia (poco frecuente)",
      "Trombosis o embolia que puede causar isquemia distal, accidente cerebrovascular o infarto",
      "Infeccion en el sitio de acceso vascular",
      "Espasmo arterial, especialmente en accesos por la arteria radial",
      "Exposicion a dosis moderada-alta de radiacion por fluoroscopia prolongada"
    ],
    "riesgosEn": [
      "Hematoma, bleeding, or pseudoaneurysm at the arterial puncture site",
      "Allergic reaction to iodinated contrast medium (from mild hives to anaphylaxis)",
      "Contrast-induced nephropathy, especially in patients with compromised kidney function",
      "Arterial dissection, perforation, or vessel rupture by the catheter or guidewire (uncommon)",
      "Thrombosis or embolism that can cause distal ischemia, stroke, or infarction",
      "Infection at the vascular access site",
      "Arterial spasm, especially with radial artery access",
      "Exposure to moderate-to-high radiation dose from prolonged fluoroscopy"
    ],
    "contraindicacionesEs": [
      "Alergia grave documentada al medio de contraste yodado sin posibilidad de premedicacion adecuada",
      "Coagulopatia severa no corregida (alto riesgo de sangrado incontrolable)",
      "Insuficiencia renal severa (contraindicacion relativa; se pueden usar medidas de nefroproteccion o contraste alternativo)",
      "Embarazo (contraindicacion relativa por la exposicion a radiacion; se realiza solo si el beneficio es claro y urgente)",
      "Infeccion activa en el sitio de puncion previsto",
      "Inestabilidad hemodinamica severa que no responde a reanimacion (contraindicacion relativa; puede ser indicacion terapeutica urgente)",
      "Aterosclerosis severa iliaca que impide el acceso femoral (se usa acceso radial o braquial alternativo)"
    ],
    "contraindicacionesEn": [
      "Documented severe allergy to iodinated contrast without possibility of adequate premedication",
      "Severe uncorrected coagulopathy (high risk of uncontrollable bleeding)",
      "Severe kidney failure (relative contraindication; nephroprotective measures or alternative contrast can be used)",
      "Pregnancy (relative contraindication due to radiation exposure; performed only if benefit is clear and urgent)",
      "Active infection at the planned puncture site",
      "Severe hemodynamic instability unresponsive to resuscitation (relative contraindication; may be an urgent therapeutic indication)",
      "Severe iliac atherosclerosis preventing femoral access (alternative radial or brachial access is used)"
    ],
    "resultadosEs": "El radiologo intervencionista puede comunicar resultados preliminares al medico tratante inmediatamente despues del procedimiento. El informe formal detallado, incluyendo las imagenes, hallazgos diagnosticos y cualquier intervencion realizada, suele estar disponible en 24 a 48 horas. Describira la anatomia vascular, el grado de estenosis u oclusion, la presencia de aneurismas o malformaciones, el exito de cualquier intervencion terapeutica y las recomendaciones de seguimiento. Las imagenes se almacenan en el sistema PACS. El paciente sera monitoreado durante varias horas despues del procedimiento para vigilar el sitio de puncion, los pulsos distales y la funcion renal.",
    "resultadosEn": "The interventional radiologist can communicate preliminary results to the treating physician immediately after the procedure. The formal detailed report, including images, diagnostic findings, and any intervention performed, is usually available within 24 to 48 hours. It will describe the vascular anatomy, degree of stenosis or occlusion, presence of aneurysms or malformations, success of any therapeutic intervention, and follow-up recommendations. Images are stored in the PACS system. The patient will be monitored for several hours after the procedure to check the puncture site, distal pulses, and kidney function.",
    "preguntasFrecuentesEs": "Pregunta: ¿La angiografia es una cirugia? Respuesta: No es una cirugia abierta, sino un procedimiento minimamente invasivo que se realiza a traves de una pequena puncion en la piel. Sin embargo, es mas invasivo que otros estudios de imagen y requiere estancia hospitalaria breve. Pregunta: ¿Estare dormido durante el procedimiento? Respuesta: Generalmente se utiliza sedacion consciente, lo que significa que estara relajado y somnoliento pero despierto. En casos complejos puede requerirse anestesia general. Pregunta: ¿Cuanto tiempo debo reposar despues? Respuesta: Generalmente entre 2 y 6 horas con la pierna extendida si el acceso fue femoral. Con acceso radial, el reposo es mas breve. Pregunta: ¿Puedo conducir despues del procedimiento? Respuesta: No, debe ser acompanado a casa debido a la sedacion y al reposo necesario. No debe conducir durante al menos 24 horas.",
    "preguntasFrecuentesEn": "Question: Is angiography surgery? Answer: It is not open surgery but a minimally invasive procedure performed through a small skin puncture. However, it is more invasive than other imaging studies and requires a brief hospital stay. Question: Will I be asleep during the procedure? Answer: Conscious sedation is generally used, meaning you will be relaxed and drowsy but awake. In complex cases, general anesthesia may be required. Question: How long must I rest afterward? Answer: Generally 2 to 6 hours with the leg extended if femoral access was used. With radial access, the rest period is shorter. Question: Can I drive after the procedure? Answer: No, you must be accompanied home due to sedation and required rest. You should not drive for at least 24 hours."
  }
]`);

// ---------------------------------------------------------------------------
// Helper functions
// ---------------------------------------------------------------------------

/**
 * Busca entradas de radiologia por termino libre en nombre o descripcion (ES/EN).
 */
export function buscarRadiologia(termino: string): RadiologiaEntry[] {
  const t = termino.toLowerCase();
  return RADIOLOGIA_ENTRIES.filter(
    (e) =>
      e.nombreEs.toLowerCase().includes(t) ||
      e.nombreEn.toLowerCase().includes(t) ||
      e.descripcionEs.toLowerCase().includes(t) ||
      e.descripcionEn.toLowerCase().includes(t),
  );
}

/**
 * Obtiene una entrada de radiologia por su ID unico.
 */
export function getRadiologiaById(id: string): RadiologiaEntry | undefined {
  return RADIOLOGIA_ENTRIES.find((e) => e.id === id);
}

/**
 * Filtra entradas por categoria (ES/EN).
 */
export function getRadiologiaPorCategoria(
  categoria: string,
): RadiologiaEntry[] {
  const c = categoria.toLowerCase();
  return RADIOLOGIA_ENTRIES.filter(
    (e) =>
      e.categoriaEs.toLowerCase().includes(c) ||
      e.categoriaEn.toLowerCase().includes(c),
  );
}

/**
 * Devuelve todas las categorias unicas disponibles (ES).
 */
export function getCategoriasDisponibles(): string[] {
  const categorias = new Set(RADIOLOGIA_ENTRIES.map((e) => e.categoriaEs));
  return Array.from(categorias).sort();
}

/**
 * Devuelve los IDs de todas las entradas.
 */
export function getRadiologiaIds(): string[] {
  return RADIOLOGIA_ENTRIES.map((e) => e.id);
}
