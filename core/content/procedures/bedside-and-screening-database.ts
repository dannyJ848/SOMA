/**
 * Biological Self - Bedside Procedures & Screening Procedures Database
 * Patient education focus with 5 complexity levels and Spanish translations
 *
 * Part 1: Bedside procedures (wound care, lines, tubes, punctures)
 * Part 2: Screening procedures (colonoscopy, mammography, DEXA, etc.)
 */

// --- Types ---

export type ProcedureCategory = 'bedside' | 'screening';

export type ComplexityLevel = 'minimal' | 'low' | 'moderate' | 'high' | 'very-high';

export type AnesthesiaType = 'none' | 'local' | 'topical' | 'regional' | 'sedation' | 'general' | 'spinal' | 'epidural';

export type SettingType =
  | 'outpatient-clinic' | 'outpatient-surgery-center' | 'hospital-outpatient'
  | 'hospital-inpatient' | 'emergency-department' | 'operating-room'
  | 'cardiac-cath-lab' | 'interventional-radiology' | 'endoscopy-suite'
  | 'bedside' | 'laboratory' | 'imaging-center' | 'home';

export interface BedsideScreeningEntry {
  procedureId: string;
  name: string;
  spanishName: string;
  category: ProcedureCategory;
  description: string;
  spanishDescription: string;
  specialties: string[];
  bodyRegions: string[];
  complexity: ComplexityLevel;
  setting: SettingType[];
  anesthesia: AnesthesiaType[];

  // Patient education
  patientExplanation: string;
  spanishPatientExplanation: string;

  // Preparation
  preparation: string;
  spanishPreparation: string;

  // What to expect
  whatToExpect: string;
  spanishWhatToExpect: string;

  // Risks
  risks: string;
  spanishRisks: string;

  // Follow-up
  followUp: string;
  spanishFollowUp: string;
}

// --- Database ---

export const BEDSIDE_AND_SCREENING_PROCEDURES: BedsideScreeningEntry[] = [

  // ============================================================
  // PART 1: BEDSIDE PROCEDURES (Patient Education Focus)
  // ============================================================

  // --- Wound Care and Dressing Changes ---
  {
    procedureId: 'bed-wound-care', name: 'Wound Care and Dressing Changes', spanishName: 'Cuidado de heridas y cambio de apósitos',
    category: 'bedside',
    description: 'Cleaning, treating, and applying fresh dressings to wounds to promote healing and prevent infection.',
    spanishDescription: 'Limpieza, tratamiento y aplicación de apósitos nuevos en heridas para promover la cicatrización y prevenir infecciones.',
    specialties: ['nursing', 'wound-care', 'surgery', 'primary-care'], bodyRegions: ['skin', 'soft-tissue'],
    complexity: 'minimal', setting: ['bedside', 'outpatient-clinic', 'home', 'emergency-department'], anesthesia: ['none', 'topical'],
    patientExplanation: 'Wound care involves gently cleaning your wound, removing old bandages, inspecting for signs of infection, and applying a fresh sterile dressing. Keeping the wound clean and properly covered helps it heal faster and prevents bacteria from entering.',
    spanishPatientExplanation: 'El cuidado de heridas consiste en limpiar suavemente su herida, retirar los vendajes antiguos, inspeccionar en busca de signos de infección y aplicar un apósito estéril nuevo. Mantener la herida limpia y correctamente cubierta ayuda a que cicatrice más rápido y evita la entrada de bacterias.',
    preparation: 'No special preparation is usually required. Gather clean supplies, wash your hands thoroughly, and have fresh dressings and saline or prescribed wound cleanser ready. Pain medication may be taken 30 minutes before if changes are uncomfortable.',
    spanishPreparation: 'Generalmente no se requiere preparación especial. Reúna suministros limpios, lávese bien las manos y tenga listos apósitos nuevos y solución salina o el limpiador de heridas recetado. Se puede tomar medicación para el dolor 30 minutos antes si los cambios son incómodos.',
    whatToExpect: 'The old dressing is carefully removed, the wound is gently cleaned with saline or antiseptic, the area is inspected for redness, drainage, or odor, and a fresh dressing is applied. The process takes 10-30 minutes depending on wound size. You may feel mild stinging during cleaning.',
    spanishWhatToExpect: 'Se retira cuidadosamente el apósito viejo, se limpia la herida suavemente con solución salina o antiséptico, se inspecciona el área en busca de enrojecimiento, secreción u olor, y se aplica un apósito nuevo. El proceso dura de 10 a 30 minutos según el tamaño de la herida. Puede sentir un leve ardor durante la limpieza.',
    risks: 'Risks include infection if sterile technique is not maintained, delayed healing, skin irritation from adhesives or solutions, minor bleeding during cleaning, and pain or discomfort during dressing removal. Contact your provider if you notice increasing redness, swelling, warmth, foul odor, or fever.',
    spanishRisks: 'Los riesgos incluyen infección si no se mantiene la técnica estéril, cicatrización retrasada, irritación de la piel por adhesivos o soluciones, sangrado menor durante la limpieza y dolor o molestia al retirar el apósito. Contacte a su proveedor si nota aumento de enrojecimiento, hinchazón, calor, mal olor o fiebre.',
    followUp: 'Dressing changes are typically done every 1-3 days or as directed. Monitor for signs of infection at each change. Follow up with your care team if healing stalls, drainage increases, or new symptoms develop. Sutures or staples may need removal in 7-14 days.',
    spanishFollowUp: 'Los cambios de apósito generalmente se realizan cada 1 a 3 días o según las indicaciones. Vigile signos de infección en cada cambio. Haga seguimiento con su equipo de atención si la cicatrización se detiene, aumenta la secreción o aparecen nuevos síntomas. Las suturas o grapas pueden necesitar retirarse en 7 a 14 días.',
  },

  // --- Central Line Care ---
  {
    procedureId: 'bed-central-line-care', name: 'Central Line Care', spanishName: 'Cuidado de línea central',
    category: 'bedside',
    description: 'Maintenance and dressing changes for a central venous catheter to prevent infection and ensure function.',
    spanishDescription: 'Mantenimiento y cambio de apósitos de un catéter venoso central para prevenir infecciones y asegurar su funcionamiento.',
    specialties: ['nursing', 'critical-care', 'oncology', 'internal-medicine'], bodyRegions: ['chest', 'neck', 'upper-extremity', 'blood-vessels'],
    complexity: 'moderate', setting: ['bedside', 'hospital-inpatient', 'outpatient-clinic', 'home'], anesthesia: ['none'],
    patientExplanation: 'A central line is a special IV catheter placed in a large vein near your heart. Central line care means cleaning the area around the catheter site, changing the dressing using sterile technique, flushing the line to keep it open, and checking for signs of infection. This careful maintenance helps prevent serious bloodstream infections.',
    spanishPatientExplanation: 'Una línea central es un catéter intravenoso especial colocado en una vena grande cerca del corazón. El cuidado de la línea central significa limpiar el área alrededor del sitio del catéter, cambiar el apósito con técnica estéril, irrigar la línea para mantenerla abierta y verificar signos de infección. Este mantenimiento cuidadoso ayuda a prevenir infecciones graves del torrente sanguíneo.',
    preparation: 'Use strict sterile technique. Prepare a clean workspace with a sterile dressing kit, chlorhexidine swabs, new transparent dressing, and clean gloves plus sterile gloves. The patient should turn their head away from the catheter site and wear a mask if possible.',
    spanishPreparation: 'Utilice técnica estéril estricta. Prepare un espacio de trabajo limpio con un kit de apósito estéril, hisopos de clorhexidina, apósito transparente nuevo y guantes limpios más guantes estériles. El paciente debe girar la cabeza en dirección opuesta al sitio del catéter y usar mascarilla si es posible.',
    whatToExpect: 'The old dressing is peeled off carefully. The insertion site is inspected for redness, swelling, or discharge. The area is cleaned with chlorhexidine in a back-and-forth scrubbing motion and allowed to dry. A new sterile transparent dressing is applied. The line may be flushed with saline or heparin. The process takes 15-30 minutes.',
    spanishWhatToExpect: 'El apósito viejo se retira cuidadosamente. Se inspecciona el sitio de inserción en busca de enrojecimiento, hinchazón o secreción. El área se limpia con clorhexidina con movimientos de frotación y se deja secar. Se aplica un nuevo apósito transparente estéril. La línea puede irrigarse con solución salina o heparina. El proceso dura de 15 a 30 minutos.',
    risks: 'Central line-associated bloodstream infection (CLABSI) is the most serious risk. Other risks include air embolism if the line is left open, catheter dislodgement, skin irritation or breakdown at the insertion site, and catheter occlusion. Report fever, chills, redness, swelling, or drainage at the site immediately.',
    spanishRisks: 'La infección del torrente sanguíneo asociada a línea central (CLABSI) es el riesgo más grave. Otros riesgos incluyen embolia aérea si la línea queda abierta, desplazamiento del catéter, irritación o deterioro de la piel en el sitio de inserción y oclusión del catéter. Reporte fiebre, escalofríos, enrojecimiento, hinchazón o secreción en el sitio de inmediato.',
    followUp: 'Dressings are changed every 7 days for transparent dressings, every 2 days for gauze dressings, or whenever the dressing becomes damp, loose, or soiled. Caps and tubing are changed per hospital protocol (typically every 96 hours). The line is removed as soon as it is no longer needed.',
    spanishFollowUp: 'Los apósitos se cambian cada 7 días para apósitos transparentes, cada 2 días para apósitos de gasa, o cuando el apósito se humedezca, afloje o ensucie. Las tapas y tubos se cambian según el protocolo hospitalario (generalmente cada 96 horas). La línea se retira tan pronto como ya no sea necesaria.',
  },

  // --- Foley Catheter Care ---
  {
    procedureId: 'bed-foley-care', name: 'Foley Catheter Care', spanishName: 'Cuidado de sonda Foley',
    category: 'bedside',
    description: 'Routine care of an indwelling urinary catheter to prevent infection and maintain urine drainage.',
    spanishDescription: 'Cuidado rutinario de una sonda urinaria permanente para prevenir infecciones y mantener el drenaje de orina.',
    specialties: ['nursing', 'urology', 'primary-care'], bodyRegions: ['urinary', 'pelvis'],
    complexity: 'low', setting: ['bedside', 'hospital-inpatient', 'home'], anesthesia: ['none'],
    patientExplanation: 'A Foley catheter is a flexible tube placed through the urethra into the bladder to drain urine. Catheter care involves keeping the area around the catheter clean, securing the tubing to prevent pulling, and ensuring proper drainage. Good catheter care reduces the risk of urinary tract infections.',
    spanishPatientExplanation: 'Una sonda Foley es un tubo flexible que se coloca a través de la uretra hasta la vejiga para drenar la orina. El cuidado del catéter implica mantener limpia el área alrededor de la sonda, asegurar el tubo para evitar tirones y garantizar un drenaje adecuado. El buen cuidado del catéter reduce el riesgo de infecciones urinarias.',
    preparation: 'Wash your hands thoroughly with soap and water. Gather clean washcloths, mild soap, and water. Ensure the drainage bag is positioned below the level of the bladder. No special fasting or medication changes are needed.',
    spanishPreparation: 'Lávese bien las manos con agua y jabón. Reúna paños limpios, jabón suave y agua. Asegúrese de que la bolsa de drenaje esté posicionada por debajo del nivel de la vejiga. No se necesita ayuno especial ni cambios de medicación.',
    whatToExpect: 'The perineal area around the catheter insertion site is cleaned with soap and water at least twice daily. The catheter tubing is inspected and secured to the thigh to prevent tension. The drainage bag is emptied when two-thirds full or at least every 8 hours. The color, clarity, and amount of urine are monitored.',
    spanishWhatToExpect: 'El área perineal alrededor del sitio de inserción del catéter se limpia con agua y jabón al menos dos veces al día. El tubo del catéter se inspecciona y se asegura al muslo para evitar tensión. La bolsa de drenaje se vacía cuando está dos tercios llena o al menos cada 8 horas. Se monitorea el color, la claridad y la cantidad de orina.',
    risks: 'Catheter-associated urinary tract infection (CAUTI) is the primary risk, occurring in up to 25% of catheterized patients. Other risks include bladder spasms, urethral trauma, blockage from sediment or blood clots, and accidental removal. Notify your care team if you develop fever, cloudy or foul-smelling urine, blood in urine, or pain.',
    spanishRisks: 'La infección urinaria asociada a catéter (CAUTI) es el riesgo principal, que ocurre en hasta el 25% de los pacientes cateterizados. Otros riesgos incluyen espasmos vesicales, trauma uretral, obstrucción por sedimento o coágulos, y retiro accidental. Notifique a su equipo de atención si desarrolla fiebre, orina turbia o con mal olor, sangre en la orina o dolor.',
    followUp: 'The catheter should be removed as soon as clinically possible. While in place, daily assessment is performed to determine if the catheter is still needed. After removal, monitor for ability to urinate independently, urinary retention, and signs of infection. Some patients experience temporary burning or frequency after removal.',
    spanishFollowUp: 'La sonda debe retirarse tan pronto como sea clínicamente posible. Mientras está colocada, se realiza una evaluación diaria para determinar si la sonda sigue siendo necesaria. Después de la extracción, se monitorea la capacidad de orinar de forma independiente, la retención urinaria y los signos de infección. Algunos pacientes experimentan ardor o frecuencia temporal después de la extracción.',
  },

  // --- NG Tube Placement ---
  {
    procedureId: 'bed-ng-tube', name: 'Nasogastric (NG) Tube Placement', spanishName: 'Colocación de sonda nasogástrica',
    category: 'bedside',
    description: 'Insertion of a flexible tube through the nose into the stomach for decompression, feeding, or medication administration.',
    spanishDescription: 'Inserción de un tubo flexible a través de la nariz hasta el estómago para descompresión, alimentación o administración de medicamentos.',
    specialties: ['nursing', 'surgery', 'gastroenterology', 'emergency-medicine', 'critical-care'], bodyRegions: ['nose', 'esophagus', 'stomach'],
    complexity: 'moderate', setting: ['bedside', 'hospital-inpatient', 'emergency-department'], anesthesia: ['none', 'topical'],
    patientExplanation: 'A nasogastric tube is a thin, flexible tube that goes through your nose, down your throat, and into your stomach. It can be used to drain stomach contents, deliver food or medicine directly to your stomach, or relieve bloating and nausea after surgery. The insertion is uncomfortable but takes only a few minutes.',
    spanishPatientExplanation: 'Una sonda nasogástrica es un tubo delgado y flexible que pasa a través de la nariz, baja por la garganta y llega al estómago. Puede usarse para drenar el contenido estomacal, entregar alimentos o medicamentos directamente al estómago, o aliviar la distensión y las náuseas después de una cirugía. La inserción es incómoda pero solo toma unos minutos.',
    preparation: 'A topical anesthetic spray may be applied to the nostril and throat to reduce discomfort. You will be positioned sitting upright or with the head elevated. The nurse will measure the tube from nose to ear to stomach to estimate the insertion length. You may be given a cup of water with a straw to sip during insertion.',
    spanishPreparation: 'Se puede aplicar un spray anestésico tópico en la fosa nasal y la garganta para reducir las molestias. Se le colocará sentado o con la cabeza elevada. La enfermera medirá el tubo desde la nariz hasta la oreja y luego al estómago para estimar la longitud de inserción. Se le puede dar un vaso de agua con popote para sorber durante la inserción.',
    whatToExpect: 'The lubricated tube is gently inserted through one nostril. As it reaches the back of the throat, you will be asked to swallow sips of water to help guide the tube down. You may gag briefly. Once placed, the tube is secured with tape to your nose. Placement is confirmed with an X-ray or by testing aspirated contents. The entire process takes 5-10 minutes.',
    spanishWhatToExpect: 'El tubo lubricado se inserta suavemente por una fosa nasal. Cuando llega a la parte posterior de la garganta, se le pedirá que trague sorbos de agua para ayudar a guiar el tubo. Puede tener arcadas brevemente. Una vez colocado, el tubo se asegura con cinta en la nariz. La colocación se confirma con una radiografía o probando el contenido aspirado. Todo el proceso dura de 5 a 10 minutos.',
    risks: 'Risks include nasal discomfort and irritation, sore throat, gagging or vomiting during insertion, nosebleed, sinusitis, aspiration if the tube is misplaced in the lungs, and erosion of nasal tissue with prolonged use. Rarely, the tube may coil in the esophagus or perforate the esophagus. Alert staff immediately if you have difficulty breathing.',
    spanishRisks: 'Los riesgos incluyen molestia e irritación nasal, dolor de garganta, arcadas o vómitos durante la inserción, sangrado nasal, sinusitis, aspiración si el tubo se coloca mal en los pulmones, y erosión del tejido nasal con uso prolongado. Raramente, el tubo puede enrollarse en el esófago o perforarlo. Alerte al personal de inmediato si tiene dificultad para respirar.',
    followUp: 'The tube position is verified regularly. Nasal skin is assessed for breakdown. The tube is flushed with water to maintain patency. Removal is done quickly by withdrawing the tube in one smooth motion while the patient holds their breath. After removal, monitor for sore throat, nasal irritation, or difficulty swallowing.',
    spanishFollowUp: 'La posición del tubo se verifica regularmente. Se evalúa la piel nasal en busca de deterioro. El tubo se irriga con agua para mantener su permeabilidad. La extracción se realiza rápidamente retirando el tubo con un movimiento suave mientras el paciente contiene la respiración. Después de la extracción, vigile dolor de garganta, irritación nasal o dificultad para tragar.',
  },

  // --- Blood Draw / Venipuncture ---
  {
    procedureId: 'bed-venipuncture', name: 'Blood Draw / Venipuncture', spanishName: 'Extracción de sangre / Venopunción',
    category: 'bedside',
    description: 'Collection of a blood sample from a vein using a needle for laboratory testing.',
    spanishDescription: 'Recolección de una muestra de sangre de una vena usando una aguja para pruebas de laboratorio.',
    specialties: ['nursing', 'phlebotomy', 'laboratory-medicine', 'primary-care'], bodyRegions: ['upper-extremity', 'blood-vessels', 'blood'],
    complexity: 'minimal', setting: ['bedside', 'outpatient-clinic', 'laboratory', 'hospital-inpatient', 'emergency-department'], anesthesia: ['none'],
    patientExplanation: 'A blood draw is the process of taking a small sample of blood from a vein in your arm. A healthcare worker wraps a tourniquet around your upper arm, cleans the skin, inserts a small needle, and collects blood into one or more tubes. The blood is then sent to a lab for testing. The process is quick, taking just a few minutes.',
    spanishPatientExplanation: 'Una extracción de sangre es el proceso de tomar una pequeña muestra de sangre de una vena en su brazo. Un profesional de salud coloca un torniquete en la parte superior del brazo, limpia la piel, inserta una aguja pequeña y recolecta sangre en uno o más tubos. La sangre se envía a un laboratorio para análisis. El proceso es rápido, tomando solo unos minutos.',
    preparation: 'Some blood tests require fasting for 8-12 hours (water is usually allowed). Wear short sleeves or a top with loose sleeves that can be pushed up. Stay well hydrated to make veins easier to find. Inform the phlebotomist if you have a history of fainting, difficult veins, or are taking blood thinners.',
    spanishPreparation: 'Algunas pruebas de sangre requieren ayuno de 8 a 12 horas (generalmente se permite agua). Use mangas cortas o una prenda con mangas sueltas que se puedan subir. Manténgase bien hidratado para que las venas sean más fáciles de encontrar. Informe al flebotomista si tiene antecedentes de desmayos, venas difíciles o si toma anticoagulantes.',
    whatToExpect: 'A tourniquet is placed on your upper arm and you may be asked to make a fist. The skin is cleaned with alcohol. A needle is inserted into a vein, which feels like a quick pinch or sting. Blood fills one or more collection tubes. The needle is removed, and pressure is applied with gauze for 1-2 minutes. A bandage is placed over the site. The whole process takes 3-5 minutes.',
    spanishWhatToExpect: 'Se coloca un torniquete en la parte superior del brazo y se le puede pedir que haga un puño. La piel se limpia con alcohol. Se inserta una aguja en una vena, lo cual se siente como un pellizco o pinchazo rápido. La sangre llena uno o más tubos de recolección. Se retira la aguja y se aplica presión con gasa durante 1 a 2 minutos. Se coloca un vendaje sobre el sitio. Todo el proceso toma de 3 a 5 minutos.',
    risks: 'Risks are minimal: temporary bruising at the needle site, slight soreness, and rarely, infection. Some people may feel lightheaded or faint. Excessive bleeding is uncommon but more likely if you take blood thinners. A small hard lump (hematoma) can form if blood leaks under the skin. Nerve injury is extremely rare.',
    spanishRisks: 'Los riesgos son mínimos: moretones temporales en el sitio de la aguja, leve dolor y, raramente, infección. Algunas personas pueden sentir mareo o desmayarse. El sangrado excesivo es poco común pero más probable si toma anticoagulantes. Un pequeño bulto duro (hematoma) puede formarse si la sangre se filtra bajo la piel. La lesión nerviosa es extremadamente rara.',
    followUp: 'Keep the bandage on for at least 15-30 minutes. Avoid heavy lifting with that arm for several hours. Results are typically available within hours to a few days depending on the test. Your healthcare provider will review the results and contact you if any action is needed.',
    spanishFollowUp: 'Mantenga el vendaje puesto durante al menos 15 a 30 minutos. Evite levantar objetos pesados con ese brazo durante varias horas. Los resultados generalmente están disponibles en horas a unos días según la prueba. Su proveedor de salud revisará los resultados y lo contactará si se necesita alguna acción.',
  },

  // --- IV Insertion ---
  {
    procedureId: 'bed-iv-insertion', name: 'IV Insertion (Peripheral Intravenous Access)', spanishName: 'Inserción de vía intravenosa periférica',
    category: 'bedside',
    description: 'Placement of a small catheter into a peripheral vein for fluid, medication, or blood product administration.',
    spanishDescription: 'Colocación de un pequeño catéter en una vena periférica para administración de líquidos, medicamentos o productos sanguíneos.',
    specialties: ['nursing', 'emergency-medicine', 'anesthesiology'], bodyRegions: ['upper-extremity', 'blood-vessels'],
    complexity: 'low', setting: ['bedside', 'hospital-inpatient', 'emergency-department', 'outpatient-clinic', 'outpatient-surgery-center'], anesthesia: ['none', 'topical'],
    patientExplanation: 'An IV (intravenous) line is a small flexible plastic tube inserted into a vein in your hand or arm. It allows your medical team to give you fluids, medications, or blood products directly into your bloodstream. A small needle is used to guide the plastic tube into the vein, then the needle is removed, leaving only the soft tube in place.',
    spanishPatientExplanation: 'Una vía intravenosa (IV) es un pequeño tubo de plástico flexible que se inserta en una vena de la mano o el brazo. Permite que su equipo médico le administre líquidos, medicamentos o productos sanguíneos directamente en el torrente sanguíneo. Se usa una aguja pequeña para guiar el tubo de plástico hacia la vena, luego se retira la aguja dejando solo el tubo suave en su lugar.',
    preparation: 'No special preparation is needed. The site is selected based on vein accessibility and treatment needs. For children or anxious patients, a topical numbing cream may be applied 30-60 minutes before. Stay hydrated and keep your arms warm to make veins more visible.',
    spanishPreparation: 'No se necesita preparación especial. El sitio se selecciona según la accesibilidad de la vena y las necesidades del tratamiento. Para niños o pacientes ansiosos, se puede aplicar una crema anestésica tópica 30 a 60 minutos antes. Manténgase hidratado y mantenga los brazos calientes para que las venas sean más visibles.',
    whatToExpect: 'A tourniquet is applied and a vein is selected. The skin is cleaned with antiseptic. You will feel a quick pinch as the needle enters the vein. The plastic catheter is advanced and the needle is withdrawn. The catheter is secured with tape and a transparent dressing. IV tubing is connected. The process takes 2-5 minutes.',
    spanishWhatToExpect: 'Se aplica un torniquete y se selecciona una vena. La piel se limpia con antiséptico. Sentirá un pellizco rápido cuando la aguja entre en la vena. El catéter de plástico se avanza y se retira la aguja. El catéter se asegura con cinta y un apósito transparente. Se conecta el tubo de infusión. El proceso toma de 2 a 5 minutos.',
    risks: 'Common risks include bruising, mild pain at the site, and phlebitis (vein inflammation causing redness and tenderness along the vein). Infiltration can occur if the catheter slips out of the vein, causing swelling. Infection at the site is possible but uncommon with proper care. Alert staff if you notice pain, swelling, redness, or leaking at the IV site.',
    spanishRisks: 'Los riesgos comunes incluyen moretones, dolor leve en el sitio y flebitis (inflamación de la vena que causa enrojecimiento y sensibilidad a lo largo de la vena). La infiltración puede ocurrir si el catéter se sale de la vena, causando hinchazón. La infección en el sitio es posible pero poco común con el cuidado adecuado. Alerte al personal si nota dolor, hinchazón, enrojecimiento o fugas en el sitio de la IV.',
    followUp: 'Peripheral IVs are typically replaced every 72-96 hours or if complications develop. The site is assessed regularly for signs of infection, infiltration, or phlebitis. When no longer needed, the catheter is gently removed and pressure is applied for a few minutes. A small bandage is placed over the site.',
    spanishFollowUp: 'Las vías IV periféricas generalmente se reemplazan cada 72 a 96 horas o si se desarrollan complicaciones. El sitio se evalúa regularmente en busca de signos de infección, infiltración o flebitis. Cuando ya no es necesario, el catéter se retira suavemente y se aplica presión durante unos minutos. Se coloca un pequeño vendaje sobre el sitio.',
  },

  // --- Wound Suturing/Stapling ---
  {
    procedureId: 'bed-suturing', name: 'Wound Suturing and Stapling', spanishName: 'Sutura y grapado de heridas',
    category: 'bedside',
    description: 'Closure of wounds using sutures (stitches) or staples to promote healing and minimize scarring.',
    spanishDescription: 'Cierre de heridas usando suturas (puntos) o grapas para promover la cicatrización y minimizar las cicatrices.',
    specialties: ['emergency-medicine', 'surgery', 'primary-care', 'dermatology'], bodyRegions: ['skin', 'soft-tissue'],
    complexity: 'low', setting: ['emergency-department', 'outpatient-clinic', 'bedside', 'operating-room'], anesthesia: ['local', 'topical'],
    patientExplanation: 'Suturing uses a medical needle and thread to close a wound, while stapling uses a special device to place small metal staples across the wound edges. Both methods hold the wound edges together so your body can heal properly. Local anesthesia numbs the area first so you should not feel pain during the procedure, only pressure or tugging.',
    spanishPatientExplanation: 'La sutura utiliza una aguja médica e hilo para cerrar una herida, mientras que el grapado usa un dispositivo especial para colocar pequeñas grapas metálicas a través de los bordes de la herida. Ambos métodos mantienen los bordes de la herida juntos para que su cuerpo pueda sanar adecuadamente. La anestesia local adormece el área primero, así que no debería sentir dolor durante el procedimiento, solo presión o tirón.',
    preparation: 'The wound is examined to assess depth and check for damage to deeper structures (nerves, tendons, blood vessels). The area is thoroughly cleaned and irrigated with saline. Foreign bodies (dirt, debris) are removed. Local anesthetic is injected around the wound. Tetanus vaccination status is confirmed.',
    spanishPreparation: 'Se examina la herida para evaluar su profundidad y verificar daño a estructuras más profundas (nervios, tendones, vasos sanguíneos). El área se limpia e irriga completamente con solución salina. Se retiran cuerpos extraños (tierra, escombros). Se inyecta anestésico local alrededor de la herida. Se confirma el estado de vacunación contra el tétanos.',
    whatToExpect: 'After numbing, the wound edges are aligned. For sutures, the provider uses a needle holder to pass the thread through the skin in an evenly spaced pattern. For staples, a stapling device is positioned over the wound and staples are applied with clicks. You will feel pressure but not sharp pain. The area is cleaned and a sterile dressing is applied. The process takes 15-45 minutes.',
    spanishWhatToExpect: 'Después de adormecer, se alinean los bordes de la herida. Para suturas, el proveedor usa un portaagujas para pasar el hilo a través de la piel en un patrón uniformemente espaciado. Para grapas, se posiciona un dispositivo de grapado sobre la herida y se aplican las grapas con clics. Sentirá presión pero no dolor agudo. Se limpia el área y se aplica un apósito estéril. El proceso toma de 15 a 45 minutos.',
    risks: 'Risks include infection, wound reopening (dehiscence), bleeding, allergic reaction to suture material, scarring, and nerve or tissue damage. Staples may cause more visible scarring than sutures on cosmetically sensitive areas. Seek medical attention if you notice increasing redness, swelling, pus, fever, or if the wound opens.',
    spanishRisks: 'Los riesgos incluyen infección, reapertura de la herida (dehiscencia), sangrado, reacción alérgica al material de sutura, cicatrices y daño a nervios o tejidos. Las grapas pueden causar cicatrices más visibles que las suturas en áreas cosméticamente sensibles. Busque atención médica si nota aumento de enrojecimiento, hinchazón, pus, fiebre o si la herida se abre.',
    followUp: 'Keep the wound clean and dry for the first 24-48 hours. After that, gentle washing is usually permitted. Sutures on the face are typically removed in 5-7 days; on the body in 7-10 days; on joints or extremities in 10-14 days. Staples are usually removed in 7-14 days using a special staple remover. Apply antibiotic ointment if directed.',
    spanishFollowUp: 'Mantenga la herida limpia y seca durante las primeras 24 a 48 horas. Después de eso, generalmente se permite el lavado suave. Las suturas en la cara se retiran típicamente en 5 a 7 días; en el cuerpo en 7 a 10 días; en articulaciones o extremidades en 10 a 14 días. Las grapas generalmente se retiran en 7 a 14 días usando un removedor de grapas especial. Aplique ungüento antibiótico si se lo indican.',
  },

  // --- Lumbar Puncture ---
  {
    procedureId: 'bed-lumbar-puncture', name: 'Lumbar Puncture (Spinal Tap)', spanishName: 'Punción lumbar',
    category: 'bedside',
    description: 'Insertion of a needle into the lower spinal canal to collect cerebrospinal fluid (CSF) for diagnostic testing or therapeutic drainage.',
    spanishDescription: 'Inserción de una aguja en el canal espinal inferior para recolectar líquido cefalorraquídeo (LCR) para pruebas diagnósticas o drenaje terapéutico.',
    specialties: ['neurology', 'emergency-medicine', 'anesthesiology', 'oncology'], bodyRegions: ['spine', 'nervous-system'],
    complexity: 'high', setting: ['bedside', 'hospital-inpatient', 'emergency-department', 'outpatient-clinic'], anesthesia: ['local'],
    patientExplanation: 'A lumbar puncture collects a small amount of the fluid that surrounds your brain and spinal cord. You will curl up on your side or sit hunched forward. After numbing the skin on your lower back, the doctor inserts a thin needle between the bones of your lower spine into the fluid-filled space. A small amount of fluid is collected for testing. The needle does not touch the spinal cord, which ends above this level.',
    spanishPatientExplanation: 'Una punción lumbar recolecta una pequeña cantidad del líquido que rodea su cerebro y médula espinal. Se acurrucará de lado o se sentará inclinado hacia adelante. Después de adormecer la piel de su espalda baja, el médico inserta una aguja delgada entre los huesos de la columna inferior hasta el espacio lleno de líquido. Se recolecta una pequeña cantidad de líquido para análisis. La aguja no toca la médula espinal, que termina por encima de este nivel.',
    preparation: 'Blood tests may be done beforehand to check clotting function. You may need to stop blood thinners (as directed by your doctor). An informed consent form is signed. You will be positioned either lying on your side with knees pulled to your chest, or sitting up and leaning forward over a table. The lower back is cleaned with antiseptic.',
    spanishPreparation: 'Se pueden realizar análisis de sangre previos para verificar la función de coagulación. Es posible que necesite suspender los anticoagulantes (según las indicaciones de su médico). Se firma un formulario de consentimiento informado. Se le posicionará acostado de lado con las rodillas hacia el pecho, o sentado e inclinado hacia adelante sobre una mesa. La espalda baja se limpia con antiséptico.',
    whatToExpect: 'The skin is numbed with local anesthetic, which stings briefly. The spinal needle is slowly advanced; you may feel pressure or a brief sharp sensation. Opening pressure is measured. Several small tubes of clear cerebrospinal fluid are collected. The needle is removed, the site is bandaged, and you lie flat for 30-60 minutes. The procedure takes 20-45 minutes.',
    spanishWhatToExpect: 'La piel se adormece con anestesia local, que arde brevemente. La aguja espinal se avanza lentamente; puede sentir presión o una sensación aguda breve. Se mide la presión de apertura. Se recolectan varios tubos pequeños de líquido cefalorraquídeo transparente. Se retira la aguja, se venda el sitio y se acuesta boca arriba durante 30 a 60 minutos. El procedimiento toma de 20 a 45 minutos.',
    risks: 'The most common side effect is a post-lumbar-puncture headache (10-30% of patients), typically worse when upright and relieved by lying flat. Other risks include back pain at the needle site, bleeding, infection (meningitis is extremely rare), nerve irritation causing brief leg tingling, and rarely, brain herniation in patients with elevated intracranial pressure.',
    spanishRisks: 'El efecto secundario más común es el dolor de cabeza post-punción lumbar (10-30% de los pacientes), generalmente peor al estar de pie y aliviado al acostarse. Otros riesgos incluyen dolor de espalda en el sitio de la aguja, sangrado, infección (la meningitis es extremadamente rara), irritación nerviosa que causa hormigueo breve en las piernas y, raramente, herniación cerebral en pacientes con presión intracraneal elevada.',
    followUp: 'Lie flat for 1-2 hours after the procedure. Drink plenty of fluids and caffeine. Avoid strenuous activity for 24 hours. A post-procedure headache usually resolves within 24-48 hours. If a severe headache persists beyond 24 hours, a blood patch procedure may be offered. CSF results are typically available within hours to a few days.',
    spanishFollowUp: 'Permanezca acostado durante 1 a 2 horas después del procedimiento. Beba abundantes líquidos y cafeína. Evite actividad extenuante durante 24 horas. El dolor de cabeza post-procedimiento generalmente se resuelve en 24 a 48 horas. Si un dolor de cabeza severo persiste más de 24 horas, se puede ofrecer un parche de sangre. Los resultados del LCR generalmente están disponibles en horas a unos días.',
  },

  // --- Paracentesis ---
  {
    procedureId: 'bed-paracentesis', name: 'Paracentesis', spanishName: 'Paracentesis',
    category: 'bedside',
    description: 'Removal of fluid from the abdominal cavity using a needle and catheter, performed for diagnosis or symptom relief.',
    spanishDescription: 'Extracción de líquido de la cavidad abdominal usando una aguja y catéter, realizada para diagnóstico o alivio de síntomas.',
    specialties: ['gastroenterology', 'hepatology', 'internal-medicine', 'emergency-medicine'], bodyRegions: ['abdomen'],
    complexity: 'high', setting: ['bedside', 'hospital-inpatient', 'emergency-department', 'outpatient-clinic'], anesthesia: ['local'],
    patientExplanation: 'Paracentesis is a procedure to remove excess fluid that has built up in your abdomen (called ascites). Fluid buildup can cause bloating, difficulty breathing, and discomfort. After numbing the skin, a thin needle or catheter is inserted into the abdomen to drain the fluid. This can be done to test a small amount of fluid (diagnostic) or to drain a large volume for symptom relief (therapeutic).',
    spanishPatientExplanation: 'La paracentesis es un procedimiento para extraer el exceso de líquido que se ha acumulado en su abdomen (llamado ascitis). La acumulación de líquido puede causar distensión, dificultad para respirar y malestar. Después de adormecer la piel, se inserta una aguja delgada o catéter en el abdomen para drenar el líquido. Esto puede hacerse para analizar una pequeña cantidad de líquido (diagnóstica) o para drenar un gran volumen para alivio de síntomas (terapéutica).',
    preparation: 'Empty your bladder before the procedure to reduce the risk of bladder puncture. Blood tests may be done to check clotting function. An ultrasound may be used to identify the best needle insertion site and locate fluid pockets. You will lie on your back or slightly on your side. Informed consent is obtained.',
    spanishPreparation: 'Vacíe su vejiga antes del procedimiento para reducir el riesgo de punción vesical. Se pueden realizar análisis de sangre para verificar la función de coagulación. Se puede usar ultrasonido para identificar el mejor sitio de inserción de la aguja y localizar bolsas de líquido. Se acostará boca arriba o ligeramente de lado. Se obtiene el consentimiento informado.',
    whatToExpect: 'The skin is cleaned and numbed with local anesthetic. A needle is inserted into the abdominal cavity under ultrasound guidance. For diagnostic taps, 50-100 mL of fluid is collected. For therapeutic drainage, several liters may be removed over 30-60 minutes through a drainage catheter. You may feel pressure but should not feel sharp pain. IV albumin may be given if large volumes are removed.',
    spanishWhatToExpect: 'La piel se limpia y se adormece con anestesia local. Se inserta una aguja en la cavidad abdominal bajo guía ecográfica. Para tomas diagnósticas, se recolectan 50-100 mL de líquido. Para drenaje terapéutico, se pueden extraer varios litros durante 30 a 60 minutos a través de un catéter de drenaje. Puede sentir presión pero no debería sentir dolor agudo. Se puede administrar albúmina IV si se extraen grandes volúmenes.',
    risks: 'Risks include pain at the insertion site, bleeding, infection (peritonitis), persistent fluid leak from the puncture site, bowel or bladder perforation (rare with ultrasound guidance), hypotension from large volume removal, and kidney dysfunction. Notify staff immediately if you develop fever, increasing abdominal pain, or dizziness.',
    spanishRisks: 'Los riesgos incluyen dolor en el sitio de inserción, sangrado, infección (peritonitis), fuga persistente de líquido del sitio de punción, perforación intestinal o vesical (rara con guía ecográfica), hipotensión por extracción de gran volumen y disfunción renal. Notifique al personal de inmediato si desarrolla fiebre, aumento del dolor abdominal o mareos.',
    followUp: 'The puncture site is covered with a small bandage. Vital signs and abdominal circumference may be monitored. Lab results from the fluid analysis are usually available within hours. If fluid reaccumulates, repeat paracentesis may be needed. Patients with recurrent ascites may benefit from a long-term drain or a procedure called TIPS.',
    spanishFollowUp: 'El sitio de punción se cubre con un vendaje pequeño. Los signos vitales y la circunferencia abdominal pueden monitorearse. Los resultados del análisis del líquido generalmente están disponibles en horas. Si el líquido se reacumula, puede necesitarse otra paracentesis. Los pacientes con ascitis recurrente pueden beneficiarse de un drenaje a largo plazo o un procedimiento llamado TIPS.',
  },

  // --- Thoracentesis ---
  {
    procedureId: 'bed-thoracentesis', name: 'Thoracentesis', spanishName: 'Toracentesis',
    category: 'bedside',
    description: 'Removal of fluid from the pleural space around the lungs using a needle, performed for diagnosis or symptom relief.',
    spanishDescription: 'Extracción de líquido del espacio pleural alrededor de los pulmones usando una aguja, realizada para diagnóstico o alivio de síntomas.',
    specialties: ['pulmonology', 'internal-medicine', 'emergency-medicine', 'critical-care'], bodyRegions: ['chest', 'lungs'],
    complexity: 'high', setting: ['bedside', 'hospital-inpatient', 'emergency-department', 'outpatient-clinic'], anesthesia: ['local'],
    patientExplanation: 'Thoracentesis removes fluid that has collected between your lungs and chest wall (called a pleural effusion). This fluid can make it hard to breathe. You sit up and lean forward over a table while the doctor numbs an area on your back, then inserts a needle to drain the fluid. The procedure helps you breathe more easily and provides fluid samples for testing.',
    spanishPatientExplanation: 'La toracentesis extrae el líquido que se ha acumulado entre los pulmones y la pared torácica (llamado derrame pleural). Este líquido puede dificultar la respiración. Se sienta y se inclina hacia adelante sobre una mesa mientras el médico adormece un área de su espalda, luego inserta una aguja para drenar el líquido. El procedimiento le ayuda a respirar más fácilmente y proporciona muestras de líquido para análisis.',
    preparation: 'An ultrasound is typically performed to locate the fluid and select the safest insertion point. Blood tests for clotting function may be done. You will sit upright on the edge of the bed, leaning forward with arms resting on a bedside table. Informed consent is obtained. You should report any blood thinner use to your doctor.',
    spanishPreparation: 'Generalmente se realiza una ecografía para localizar el líquido y seleccionar el punto de inserción más seguro. Se pueden realizar análisis de coagulación. Se sentará erguido en el borde de la cama, inclinado hacia adelante con los brazos apoyados en una mesa. Se obtiene el consentimiento informado. Debe informar a su médico sobre cualquier uso de anticoagulantes.',
    whatToExpect: 'The skin on your back is cleaned and numbed with local anesthetic. A needle is inserted through the chest wall into the pleural space under ultrasound guidance. You may feel pressure or a brief sharp sensation. Fluid is drained into collection bottles. For diagnostic taps, about 50-100 mL is removed. For therapeutic taps, 1-1.5 liters may be removed. You must remain still and avoid coughing during the procedure. It takes 15-30 minutes.',
    spanishWhatToExpect: 'La piel de su espalda se limpia y se adormece con anestesia local. Se inserta una aguja a través de la pared torácica en el espacio pleural bajo guía ecográfica. Puede sentir presión o una sensación aguda breve. El líquido se drena en frascos de recolección. Para tomas diagnósticas, se retiran unos 50-100 mL. Para tomas terapéuticas, se pueden retirar 1 a 1.5 litros. Debe permanecer quieto y evitar toser durante el procedimiento. Toma de 15 a 30 minutos.',
    risks: 'Risks include pneumothorax (air leak causing partial lung collapse, occurring in 5-10% of cases), bleeding, infection, pain at the insertion site, re-expansion pulmonary edema if too much fluid is removed too quickly, and organ injury (spleen, liver, diaphragm). A chest X-ray is often done after the procedure to check for pneumothorax.',
    spanishRisks: 'Los riesgos incluyen neumotórax (fuga de aire que causa colapso parcial del pulmón, ocurre en 5-10% de los casos), sangrado, infección, dolor en el sitio de inserción, edema pulmonar por reexpansión si se retira demasiado líquido rápidamente, y lesión de órganos (bazo, hígado, diafragma). Frecuentemente se realiza una radiografía de tórax después del procedimiento para verificar neumotórax.',
    followUp: 'A chest X-ray is typically obtained 1-2 hours after the procedure to rule out pneumothorax. Vital signs and oxygen levels are monitored. Fluid analysis results are usually available within hours. Seek immediate attention if you develop sudden shortness of breath, chest pain, or cough after the procedure. Recurrent effusions may need a pleural drain or pleurodesis.',
    spanishFollowUp: 'Generalmente se obtiene una radiografía de tórax 1 a 2 horas después del procedimiento para descartar neumotórax. Se monitorean signos vitales y niveles de oxígeno. Los resultados del análisis del líquido generalmente están disponibles en horas. Busque atención inmediata si desarrolla dificultad respiratoria repentina, dolor torácico o tos después del procedimiento. Los derrames recurrentes pueden necesitar un drenaje pleural o pleurodesis.',
  },

  // --- Joint Aspiration (Arthrocentesis) ---
  {
    procedureId: 'bed-arthrocentesis', name: 'Joint Aspiration (Arthrocentesis)', spanishName: 'Aspiración articular (Artrocentesis)',
    category: 'bedside',
    description: 'Removal of fluid from a joint using a needle for diagnosis or relief of pressure and pain.',
    spanishDescription: 'Extracción de líquido de una articulación usando una aguja para diagnóstico o alivio de presión y dolor.',
    specialties: ['rheumatology', 'orthopedics', 'emergency-medicine', 'primary-care', 'sports-medicine'], bodyRegions: ['joints', 'musculoskeletal'],
    complexity: 'moderate', setting: ['outpatient-clinic', 'emergency-department', 'bedside', 'hospital-inpatient'], anesthesia: ['local', 'topical'],
    patientExplanation: 'Joint aspiration involves using a needle to remove fluid from a swollen or painful joint such as the knee, shoulder, or ankle. The fluid is examined under a microscope to help diagnose the cause of swelling, such as infection, gout, or arthritis. Removing the fluid also relieves pressure and pain. Sometimes medication (like a steroid) is injected into the joint afterward to reduce inflammation.',
    spanishPatientExplanation: 'La aspiración articular consiste en usar una aguja para extraer líquido de una articulación hinchada o dolorosa como la rodilla, hombro o tobillo. El líquido se examina bajo microscopio para ayudar a diagnosticar la causa de la hinchazón, como infección, gota o artritis. La extracción del líquido también alivia la presión y el dolor. A veces se inyecta medicamento (como un esteroide) en la articulación después para reducir la inflamación.',
    preparation: 'The joint area is cleaned with antiseptic. No fasting is required. Inform your doctor if you take blood thinners or have any skin infections near the joint. A local anesthetic may be applied to the skin or injected around the joint. Ultrasound guidance may be used for deeper or smaller joints.',
    spanishPreparation: 'El área articular se limpia con antiséptico. No se requiere ayuno. Informe a su médico si toma anticoagulantes o tiene alguna infección cutánea cerca de la articulación. Se puede aplicar anestésico local en la piel o inyectarse alrededor de la articulación. Se puede usar guía ecográfica para articulaciones más profundas o pequeñas.',
    whatToExpect: 'After cleaning and numbing the area, a needle is inserted into the joint space. You may feel pressure as the needle enters. Fluid is withdrawn into a syringe. The fluid may be clear, cloudy, or bloody depending on the underlying condition. If medication is to be injected, it is done through the same needle before removal. A bandage is applied. The procedure takes 5-15 minutes.',
    spanishWhatToExpect: 'Después de limpiar y adormecer el área, se inserta una aguja en el espacio articular. Puede sentir presión cuando la aguja entra. El líquido se extrae con una jeringa. El líquido puede ser claro, turbio o sanguinolento según la condición subyacente. Si se va a inyectar medicamento, se hace a través de la misma aguja antes de retirarla. Se aplica un vendaje. El procedimiento toma de 5 a 15 minutos.',
    risks: 'Risks include temporary pain or soreness at the puncture site, bleeding, infection in the joint (septic arthritis, rare but serious), damage to cartilage or other joint structures, and allergic reaction to injected medications. If the joint becomes increasingly swollen, red, hot, or painful after the procedure, or if you develop fever, seek immediate medical attention.',
    spanishRisks: 'Los riesgos incluyen dolor temporal o sensibilidad en el sitio de punción, sangrado, infección en la articulación (artritis séptica, rara pero grave), daño al cartílago u otras estructuras articulares y reacción alérgica a los medicamentos inyectados. Si la articulación se hincha, enrojece, calienta o duele más después del procedimiento, o si desarrolla fiebre, busque atención médica inmediata.',
    followUp: 'Rest the joint for 24-48 hours after the procedure. Apply ice for 15-20 minutes several times daily to reduce swelling. Fluid analysis results are usually available within 24-48 hours (crystal analysis is often immediate). If a steroid was injected, maximum benefit is felt in 2-7 days. Avoid strenuous activity involving the joint for several days.',
    spanishFollowUp: 'Descanse la articulación durante 24 a 48 horas después del procedimiento. Aplique hielo durante 15 a 20 minutos varias veces al día para reducir la hinchazón. Los resultados del análisis del líquido generalmente están disponibles en 24 a 48 horas (el análisis de cristales a menudo es inmediato). Si se inyectó un esteroide, el beneficio máximo se siente en 2 a 7 días. Evite actividad extenuante que involucre la articulación durante varios días.',
  },

  // ============================================================
  // PART 2: SCREENING PROCEDURES
  // ============================================================

  // --- Colonoscopy ---
  {
    procedureId: 'scr-colonoscopy', name: 'Colonoscopy', spanishName: 'Colonoscopia',
    category: 'screening',
    description: 'Examination of the entire colon using a flexible camera to screen for colorectal cancer and polyps.',
    spanishDescription: 'Examen de todo el colon usando una cámara flexible para detectar cáncer colorrectal y pólipos.',
    specialties: ['gastroenterology', 'colorectal-surgery', 'primary-care'], bodyRegions: ['colon', 'rectum', 'gastrointestinal'],
    complexity: 'moderate', setting: ['endoscopy-suite', 'hospital-outpatient', 'outpatient-surgery-center'], anesthesia: ['sedation'],
    patientExplanation: 'A colonoscopy allows the doctor to look at the entire lining of your large intestine using a long, flexible tube with a camera on the end. It is the gold standard screening test for colorectal cancer. If polyps (small growths) are found, they can be removed during the same procedure before they become cancerous. The procedure is done under sedation so you will be comfortable and likely will not remember it.',
    spanishPatientExplanation: 'Una colonoscopia permite al médico examinar todo el revestimiento de su intestino grueso usando un tubo largo y flexible con una cámara en el extremo. Es la prueba de detección estándar de oro para el cáncer colorrectal. Si se encuentran pólipos (pequeños crecimientos), se pueden extirpar durante el mismo procedimiento antes de que se vuelvan cancerosos. El procedimiento se realiza bajo sedación para que esté cómodo y probablemente no lo recuerde.',
    preparation: 'Preparation begins 1-3 days before. Switch to a clear liquid diet the day before. The evening before (and sometimes the morning of), drink a prescribed bowel preparation solution that causes diarrhea to empty the colon. Stop certain medications (blood thinners, iron, certain diabetes medications) as directed. Arrange transportation home because sedation is used. Do not eat or drink anything after midnight.',
    spanishPreparation: 'La preparación comienza 1 a 3 días antes. Cambie a una dieta de líquidos claros el día anterior. La noche anterior (y a veces la mañana del procedimiento), beba una solución de preparación intestinal recetada que causa diarrea para vaciar el colon. Suspenda ciertos medicamentos (anticoagulantes, hierro, ciertos medicamentos para diabetes) según las indicaciones. Organice transporte a casa porque se usa sedación. No coma ni beba nada después de la medianoche.',
    whatToExpect: 'You change into a hospital gown and an IV is started. Sedation makes you sleepy and relaxed. You lie on your left side. The colonoscope is gently inserted through the rectum and advanced through the colon. Air or carbon dioxide is used to inflate the colon for better visibility. The doctor examines the lining and removes any polyps found. The procedure takes 20-45 minutes. You recover in a monitored area for 30-60 minutes. Mild bloating and gas are common afterward.',
    spanishWhatToExpect: 'Se cambia a una bata de hospital y se inicia una IV. La sedación lo hace sentir somnoliento y relajado. Se acuesta del lado izquierdo. El colonoscopio se inserta suavemente a través del recto y se avanza por el colon. Se usa aire o dióxido de carbono para inflar el colon y mejorar la visibilidad. El médico examina el revestimiento y extirpa cualquier pólipo encontrado. El procedimiento toma de 20 a 45 minutos. Se recupera en un área monitoreada durante 30 a 60 minutos. La distensión leve y los gases son comunes después.',
    risks: 'Risks include bleeding (especially after polyp removal, 1-2%), perforation (hole in the colon wall, less than 0.1%), adverse reaction to sedation, post-polypectomy syndrome (abdominal pain and fever), and rarely, missed lesions. Significant bleeding or perforation may require hospitalization or surgery. Call your doctor immediately if you experience severe abdominal pain, heavy rectal bleeding, fever, or persistent vomiting.',
    spanishRisks: 'Los riesgos incluyen sangrado (especialmente después de la extirpación de pólipos, 1-2%), perforación (agujero en la pared del colon, menos del 0.1%), reacción adversa a la sedación, síndrome post-polipectomía (dolor abdominal y fiebre) y, raramente, lesiones no detectadas. El sangrado significativo o la perforación pueden requerir hospitalización o cirugía. Llame a su médico de inmediato si experimenta dolor abdominal severo, sangrado rectal abundante, fiebre o vómitos persistentes.',
    followUp: 'Do not drive or make important decisions for 24 hours after sedation. Resume your normal diet as tolerated. If polyps were removed, biopsy results take 1-2 weeks. Screening intervals depend on findings: if normal, repeat in 10 years; if polyps found, repeat in 3-5 years. Average-risk screening begins at age 45.',
    spanishFollowUp: 'No conduzca ni tome decisiones importantes durante 24 horas después de la sedación. Reanude su dieta normal según la tolere. Si se extirparon pólipos, los resultados de la biopsia tardan 1 a 2 semanas. Los intervalos de detección dependen de los hallazgos: si es normal, repita en 10 años; si se encontraron pólipos, repita en 3 a 5 años. La detección de riesgo promedio comienza a los 45 años.',
  },

  // --- Mammography ---
  {
    procedureId: 'scr-mammography', name: 'Mammography', spanishName: 'Mamografía',
    category: 'screening',
    description: 'Low-dose X-ray imaging of the breast to screen for and detect breast cancer at an early stage.',
    spanishDescription: 'Imagen de rayos X de baja dosis de la mama para detectar cáncer de mama en una etapa temprana.',
    specialties: ['radiology', 'breast-surgery', 'oncology', 'primary-care'], bodyRegions: ['breast'],
    complexity: 'minimal', setting: ['imaging-center', 'outpatient-clinic', 'hospital-outpatient'], anesthesia: ['none'],
    patientExplanation: 'A mammogram is a special X-ray of your breasts that can find cancers too small to feel during a physical exam. Each breast is gently compressed between two flat plates while X-ray images are taken from different angles. While the compression can be uncomfortable, it lasts only a few seconds and is necessary to get clear images. Mammography is one of the best tools for early detection of breast cancer.',
    spanishPatientExplanation: 'Una mamografía es una radiografía especial de sus senos que puede encontrar cánceres demasiado pequeños para detectarlos durante un examen físico. Cada seno se comprime suavemente entre dos placas planas mientras se toman imágenes de rayos X desde diferentes ángulos. Aunque la compresión puede ser incómoda, dura solo unos segundos y es necesaria para obtener imágenes claras. La mamografía es una de las mejores herramientas para la detección temprana del cáncer de mama.',
    preparation: 'Schedule your mammogram for 1-2 weeks after your period when breasts are least tender. Do not wear deodorant, antiperspirant, powder, or lotion under your arms or on your breasts the day of the exam (these can appear as white spots on the image). Wear a two-piece outfit for easy undressing from the waist up. Bring prior mammogram images if done at a different facility.',
    spanishPreparation: 'Programe su mamografía para 1 a 2 semanas después de su período cuando los senos están menos sensibles. No use desodorante, antitranspirante, talco o loción debajo de los brazos o en los senos el día del examen (estos pueden aparecer como manchas blancas en la imagen). Use un conjunto de dos piezas para desvestirse fácilmente de la cintura hacia arriba. Traiga imágenes de mamografías anteriores si se realizaron en otro centro.',
    whatToExpect: 'You undress from the waist up and put on a gown. A technologist positions one breast at a time on the X-ray plate. A clear plastic plate gently presses down to compress and flatten the breast. Two views are taken of each breast (top-down and side). Compression lasts about 10-15 seconds per view. The entire appointment takes 15-30 minutes. Results are mailed or available online, usually within 1-2 weeks.',
    spanishWhatToExpect: 'Se desviste de la cintura hacia arriba y se pone una bata. Una tecnóloga posiciona un seno a la vez en la placa de rayos X. Una placa de plástico transparente presiona suavemente para comprimir y aplanar el seno. Se toman dos vistas de cada seno (de arriba hacia abajo y lateral). La compresión dura aproximadamente 10 a 15 segundos por vista. Toda la cita toma de 15 a 30 minutos. Los resultados se envían por correo o están disponibles en línea, generalmente en 1 a 2 semanas.',
    risks: 'Mammography involves very low radiation exposure (equivalent to about 7 weeks of natural background radiation). Risks include brief discomfort from compression, false positives (being called back for additional images that turn out normal), false negatives (a small cancer may be missed especially in dense breast tissue), and the anxiety associated with abnormal results. The benefits of early cancer detection far outweigh these risks.',
    spanishRisks: 'La mamografía involucra una exposición a radiación muy baja (equivalente a unas 7 semanas de radiación natural de fondo). Los riesgos incluyen molestia breve por la compresión, falsos positivos (ser llamada para imágenes adicionales que resultan normales), falsos negativos (un cáncer pequeño puede no detectarse especialmente en tejido mamario denso) y la ansiedad asociada con resultados anormales. Los beneficios de la detección temprana del cáncer superan con creces estos riesgos.',
    followUp: 'Results are reported using the BI-RADS scale (0-6). BI-RADS 1-2 is normal or benign; you continue routine screening. BI-RADS 0 or 3 means additional imaging (ultrasound or follow-up mammogram) is recommended. BI-RADS 4-5 is suspicious and biopsy is recommended. Average-risk women should have mammograms every 1-2 years starting at age 40-50, depending on guidelines followed. Women at high risk may start earlier and add breast MRI.',
    spanishFollowUp: 'Los resultados se reportan usando la escala BI-RADS (0-6). BI-RADS 1-2 es normal o benigno; continúe la detección rutinaria. BI-RADS 0 o 3 significa que se recomienda imágenes adicionales (ecografía o mamografía de seguimiento). BI-RADS 4-5 es sospechoso y se recomienda biopsia. Las mujeres de riesgo promedio deben hacerse mamografías cada 1 a 2 años comenzando entre los 40 y 50 años, según las guías seguidas. Las mujeres de alto riesgo pueden comenzar antes y agregar resonancia magnética mamaria.',
  },

  // --- DEXA Scan ---
  {
    procedureId: 'scr-dexa', name: 'DEXA Scan (Bone Density Test)', spanishName: 'Densitometría ósea DEXA',
    category: 'screening',
    description: 'Low-dose X-ray scan measuring bone mineral density to screen for osteoporosis and fracture risk.',
    spanishDescription: 'Escaneo de rayos X de baja dosis que mide la densidad mineral ósea para detectar osteoporosis y riesgo de fracturas.',
    specialties: ['endocrinology', 'rheumatology', 'primary-care', 'radiology'], bodyRegions: ['spine', 'hip', 'bone'],
    complexity: 'minimal', setting: ['imaging-center', 'outpatient-clinic', 'hospital-outpatient'], anesthesia: ['none'],
    patientExplanation: 'A DEXA scan (Dual-Energy X-ray Absorptiometry) measures how strong and dense your bones are. It is the gold standard test for diagnosing osteoporosis (thinning of the bones). You lie on a padded table while a scanning arm passes over your body, typically focusing on the hip and spine. The test uses a very small amount of radiation, much less than a standard X-ray, and is completely painless.',
    spanishPatientExplanation: 'Un escaneo DEXA (Absorciometría de Rayos X de Doble Energía) mide qué tan fuertes y densas son sus huesos. Es la prueba estándar de oro para diagnosticar osteoporosis (adelgazamiento de los huesos). Se acuesta en una mesa acolchada mientras un brazo de escaneo pasa sobre su cuerpo, generalmente enfocándose en la cadera y la columna. La prueba usa una cantidad muy pequeña de radiación, mucho menos que una radiografía estándar, y es completamente indolora.',
    preparation: 'No special preparation is required. Wear comfortable clothing without metal zippers, buttons, or snaps (you may be given a gown). Do not take calcium supplements for 24 hours before the test. Inform the technologist if you have had a barium study, contrast CT, or nuclear medicine scan recently, as residual contrast material can affect results. Inform if you could be pregnant.',
    spanishPreparation: 'No se requiere preparación especial. Use ropa cómoda sin cierres metálicos, botones o broches (se le puede dar una bata). No tome suplementos de calcio durante 24 horas antes de la prueba. Informe al tecnólogo si ha tenido un estudio con bario, una tomografía con contraste o una gammagrafía recientemente, ya que el material de contraste residual puede afectar los resultados. Informe si pudiera estar embarazada.',
    whatToExpect: 'You lie flat on your back on an open, padded table. For the spine scan, your legs may be elevated on a padded block. For the hip scan, your foot is placed in a brace that rotates the hip inward. The scanning arm passes slowly above you without touching you. You must lie still for 10-20 minutes total. There are no injections, no enclosed spaces, and no discomfort.',
    spanishWhatToExpect: 'Se acuesta boca arriba en una mesa abierta y acolchada. Para el escaneo de la columna, sus piernas pueden elevarse sobre un bloque acolchado. Para el escaneo de cadera, su pie se coloca en un soporte que rota la cadera hacia adentro. El brazo de escaneo pasa lentamente sobre usted sin tocarlo. Debe permanecer quieto durante 10 a 20 minutos en total. No hay inyecciones, no hay espacios cerrados y no hay molestias.',
    risks: 'DEXA scans are extremely safe. Radiation exposure is minimal (about one-tenth of a chest X-ray). The main limitation is that results can be affected by spinal arthritis, prior fractures, or previous spinal surgery, which may falsely elevate bone density readings at those sites. There is no risk of claustrophobia as the scanner is open.',
    spanishRisks: 'Los escaneos DEXA son extremadamente seguros. La exposición a radiación es mínima (aproximadamente una décima parte de una radiografía de tórax). La principal limitación es que los resultados pueden verse afectados por artritis espinal, fracturas previas o cirugía espinal previa, lo que puede elevar falsamente las lecturas de densidad ósea en esos sitios. No hay riesgo de claustrofobia ya que el escáner es abierto.',
    followUp: 'Results are reported as a T-score: above -1.0 is normal; -1.0 to -2.5 indicates osteopenia (low bone mass); below -2.5 indicates osteoporosis. Your doctor may start or adjust medications based on results. Lifestyle recommendations include weight-bearing exercise, adequate calcium and vitamin D intake, and fall prevention strategies. Follow-up scans are typically done every 1-2 years to monitor changes.',
    spanishFollowUp: 'Los resultados se reportan como un T-score: por encima de -1.0 es normal; -1.0 a -2.5 indica osteopenia (baja masa ósea); por debajo de -2.5 indica osteoporosis. Su médico puede iniciar o ajustar medicamentos según los resultados. Las recomendaciones de estilo de vida incluyen ejercicio con soporte de peso, ingesta adecuada de calcio y vitamina D, y estrategias de prevención de caídas. Los escaneos de seguimiento generalmente se realizan cada 1 a 2 años para monitorear cambios.',
  },

  // --- Pap Smear / Cervical Screening ---
  {
    procedureId: 'scr-pap-smear', name: 'Pap Smear / Cervical Screening', spanishName: 'Papanicolaou / Detección cervical',
    category: 'screening',
    description: 'Collection of cells from the cervix to screen for cervical cancer and precancerous changes, often combined with HPV testing.',
    spanishDescription: 'Recolección de células del cuello uterino para detectar cáncer cervical y cambios precancerosos, frecuentemente combinada con prueba de VPH.',
    specialties: ['obstetrics-gynecology', 'primary-care'], bodyRegions: ['cervix', 'reproductive'],
    complexity: 'minimal', setting: ['outpatient-clinic'], anesthesia: ['none'],
    patientExplanation: 'A Pap smear is a screening test for cervical cancer. During a pelvic exam, the doctor gently collects a small sample of cells from your cervix (the lower part of the uterus). These cells are examined under a microscope for abnormalities that could lead to cervical cancer. The test can also be combined with HPV (human papillomavirus) testing, as HPV is the primary cause of cervical cancer. The test is quick, taking just a few minutes.',
    spanishPatientExplanation: 'Un Papanicolaou es una prueba de detección de cáncer cervical. Durante un examen pélvico, el médico recolecta suavemente una pequeña muestra de células de su cuello uterino (la parte inferior del útero). Estas células se examinan bajo microscopio en busca de anormalidades que podrían conducir a cáncer cervical. La prueba también puede combinarse con la prueba de VPH (virus del papiloma humano), ya que el VPH es la causa principal del cáncer cervical. La prueba es rápida, tomando solo unos minutos.',
    preparation: 'Schedule the test when you are not on your period (mid-cycle is ideal). Avoid vaginal intercourse, douching, or using vaginal medications, creams, or tampons for 2 days before the test, as these can wash away or obscure abnormal cells. No fasting is required. Empty your bladder before the exam for comfort.',
    spanishPreparation: 'Programe la prueba cuando no esté en su período (la mitad del ciclo es ideal). Evite relaciones sexuales vaginales, duchas vaginales o usar medicamentos vaginales, cremas o tampones durante 2 días antes de la prueba, ya que estos pueden eliminar u ocultar células anormales. No se requiere ayuno. Vacíe su vejiga antes del examen para mayor comodidad.',
    whatToExpect: 'You lie on an exam table with your feet in stirrups. The doctor inserts a speculum into the vagina to visualize the cervix. A small brush or spatula is used to gently scrape cells from the surface and inside the cervical canal. You may feel mild pressure or a brief cramping sensation. The cells are placed in a liquid vial and sent to a lab. The entire exam takes 5-10 minutes.',
    spanishWhatToExpect: 'Se acuesta en una mesa de examen con los pies en estribos. El médico inserta un espéculo en la vagina para visualizar el cuello uterino. Se usa un pequeño cepillo o espátula para raspar suavemente las células de la superficie y del interior del canal cervical. Puede sentir presión leve o una breve sensación de calambre. Las células se colocan en un frasco con líquido y se envían al laboratorio. Todo el examen toma de 5 a 10 minutos.',
    risks: 'Risks are extremely minimal. You may experience light spotting (a small amount of bleeding) for a day or two after the test. Mild cramping is possible but usually brief. False negatives (missing an abnormality) can occur but are reduced with regular screening. False positives may lead to unnecessary follow-up procedures. There is no significant health risk from the test itself.',
    spanishRisks: 'Los riesgos son extremadamente mínimos. Puede experimentar manchado leve (una pequeña cantidad de sangrado) durante uno o dos días después de la prueba. Los calambres leves son posibles pero generalmente breves. Los falsos negativos (no detectar una anormalidad) pueden ocurrir pero se reducen con la detección regular. Los falsos positivos pueden llevar a procedimientos de seguimiento innecesarios. No hay riesgo significativo para la salud por la prueba en sí.',
    followUp: 'Results typically take 1-3 weeks. Normal results (negative) mean routine screening continues. Current guidelines recommend Pap smears every 3 years for ages 21-29, and co-testing (Pap + HPV) every 5 years or Pap alone every 3 years for ages 30-65. Abnormal results may require colposcopy (closer examination of the cervix) or repeat testing. HPV vaccination significantly reduces cervical cancer risk.',
    spanishFollowUp: 'Los resultados generalmente tardan de 1 a 3 semanas. Los resultados normales (negativos) significan que continúa la detección rutinaria. Las guías actuales recomiendan Papanicolaou cada 3 años para edades de 21 a 29, y co-prueba (Papanicolaou + VPH) cada 5 años o Papanicolaou solo cada 3 años para edades de 30 a 65. Los resultados anormales pueden requerir colposcopia (examen más detallado del cuello uterino) o repetición de la prueba. La vacunación contra el VPH reduce significativamente el riesgo de cáncer cervical.',
  },

  // --- Low-dose CT Lung Cancer Screening ---
  {
    procedureId: 'scr-ldct-lung', name: 'Low-Dose CT Lung Cancer Screening', spanishName: 'Detección de cáncer de pulmón con TC de baja dosis',
    category: 'screening',
    description: 'Low-dose computed tomography of the chest to screen for lung cancer in high-risk individuals with significant smoking history.',
    spanishDescription: 'Tomografía computarizada de baja dosis del tórax para detectar cáncer de pulmón en individuos de alto riesgo con historial significativo de tabaquismo.',
    specialties: ['pulmonology', 'radiology', 'oncology', 'primary-care'], bodyRegions: ['chest', 'lungs'],
    complexity: 'low', setting: ['imaging-center', 'hospital-outpatient'], anesthesia: ['none'],
    patientExplanation: 'A low-dose CT (LDCT) lung cancer screening is a quick, painless scan that takes detailed pictures of your lungs using a reduced amount of radiation compared to a regular CT scan. It is recommended for people at high risk of lung cancer due to their smoking history. Early detection of lung cancer with LDCT can significantly improve survival rates because cancers found at an early stage are more treatable.',
    spanishPatientExplanation: 'Una detección de cáncer de pulmón con TC de baja dosis (LDCT) es un escaneo rápido e indoloro que toma imágenes detalladas de sus pulmones usando una cantidad reducida de radiación comparada con una TC regular. Se recomienda para personas con alto riesgo de cáncer de pulmón debido a su historial de tabaquismo. La detección temprana del cáncer de pulmón con LDCT puede mejorar significativamente las tasas de supervivencia porque los cánceres encontrados en etapa temprana son más tratables.',
    preparation: 'No fasting or special preparation is needed. Wear comfortable clothing without metal above the waist. No IV contrast is used. You should be eligible based on current guidelines: ages 50-80, with a 20+ pack-year smoking history, and currently smoking or having quit within the past 15 years. Inform the technologist if you could be pregnant.',
    spanishPreparation: 'No se necesita ayuno ni preparación especial. Use ropa cómoda sin metal por encima de la cintura. No se usa contraste IV. Debe ser elegible según las guías actuales: entre 50 y 80 años, con un historial de tabaquismo de 20+ paquetes-año, y que actualmente fume o haya dejado de fumar en los últimos 15 años. Informe al tecnólogo si pudiera estar embarazada.',
    whatToExpect: 'You lie on your back on the CT table. The table slides into the doughnut-shaped scanner. You are asked to hold your breath for about 6 seconds while the scan is taken. No dye or contrast is injected. The entire scan takes less than 1 minute. The appointment including check-in takes about 15-30 minutes total. Results are reviewed by a radiologist and sent to your doctor.',
    spanishWhatToExpect: 'Se acuesta boca arriba en la mesa del tomógrafo. La mesa se desliza dentro del escáner en forma de dona. Se le pide que contenga la respiración durante unos 6 segundos mientras se realiza el escaneo. No se inyecta tinte ni contraste. Todo el escaneo toma menos de 1 minuto. La cita, incluyendo el registro, toma aproximadamente 15 a 30 minutos en total. Los resultados son revisados por un radiólogo y enviados a su médico.',
    risks: 'LDCT uses about 5 times less radiation than a standard chest CT, but still more than a chest X-ray. Risks include false positives (abnormal findings that turn out not to be cancer, occurring in about 12-15% of scans), which may lead to additional imaging, biopsies, or unnecessary anxiety. Overdiagnosis of slow-growing cancers is possible. Incidental findings unrelated to lung cancer may require follow-up. Annual screening in eligible patients reduces lung cancer mortality by 20%.',
    spanishRisks: 'La LDCT usa aproximadamente 5 veces menos radiación que una TC de tórax estándar, pero aún más que una radiografía de tórax. Los riesgos incluyen falsos positivos (hallazgos anormales que resultan no ser cáncer, ocurren en aproximadamente el 12-15% de los escaneos), lo que puede llevar a imágenes adicionales, biopsias o ansiedad innecesaria. Es posible el sobrediagnóstico de cánceres de crecimiento lento. Los hallazgos incidentales no relacionados con el cáncer de pulmón pueden requerir seguimiento. La detección anual en pacientes elegibles reduce la mortalidad por cáncer de pulmón en un 20%.',
    followUp: 'Results are reported using the Lung-RADS system. Lung-RADS 1-2 is negative or benign; continue annual screening. Lung-RADS 3 is probably benign; a short-term follow-up CT in 6 months is recommended. Lung-RADS 4 is suspicious; further evaluation (PET scan, biopsy) is recommended. If you are still smoking, discuss smoking cessation resources with your doctor. Screening continues annually as long as you remain eligible.',
    spanishFollowUp: 'Los resultados se reportan usando el sistema Lung-RADS. Lung-RADS 1-2 es negativo o benigno; continúe la detección anual. Lung-RADS 3 es probablemente benigno; se recomienda una TC de seguimiento en 6 meses. Lung-RADS 4 es sospechoso; se recomienda evaluación adicional (PET, biopsia). Si aún fuma, discuta recursos para dejar de fumar con su médico. La detección continúa anualmente mientras siga siendo elegible.',
  },

  // --- PSA Screening ---
  {
    procedureId: 'scr-psa', name: 'PSA Screening (Prostate Cancer)', spanishName: 'Detección de PSA (Cáncer de próstata)',
    category: 'screening',
    description: 'Blood test measuring prostate-specific antigen levels to screen for prostate cancer, typically combined with shared decision-making.',
    spanishDescription: 'Análisis de sangre que mide los niveles de antígeno prostático específico para detectar cáncer de próstata, generalmente combinado con toma de decisiones compartida.',
    specialties: ['urology', 'primary-care'], bodyRegions: ['prostate', 'blood'],
    complexity: 'minimal', setting: ['outpatient-clinic', 'laboratory'], anesthesia: ['none'],
    patientExplanation: 'PSA screening is a blood test that measures the level of prostate-specific antigen, a protein produced by the prostate gland. Elevated PSA levels may suggest prostate cancer, but they can also be raised by non-cancerous conditions like an enlarged prostate (BPH) or prostatitis. Because PSA screening can lead to both benefits (early cancer detection) and harms (unnecessary biopsies for false positives), the decision to be screened should involve a discussion between you and your doctor about your individual risk factors.',
    spanishPatientExplanation: 'La detección de PSA es un análisis de sangre que mide el nivel de antígeno prostático específico, una proteína producida por la glándula prostática. Los niveles elevados de PSA pueden sugerir cáncer de próstata, pero también pueden estar elevados por condiciones no cancerosas como próstata agrandada (HPB) o prostatitis. Como la detección de PSA puede llevar tanto a beneficios (detección temprana del cáncer) como a daños (biopsias innecesarias por falsos positivos), la decisión de hacerse la prueba debe involucrar una conversación entre usted y su médico sobre sus factores de riesgo individuales.',
    preparation: 'No special preparation is required for the blood draw. However, PSA levels can be temporarily elevated by ejaculation (avoid for 2-3 days before), vigorous exercise like cycling (avoid for 48 hours), urinary tract infection, or recent prostate procedures. Inform your doctor of these factors. The discussion about whether to screen should occur before the test is ordered.',
    spanishPreparation: 'No se requiere preparación especial para la extracción de sangre. Sin embargo, los niveles de PSA pueden estar temporalmente elevados por la eyaculación (evite durante 2 a 3 días antes), ejercicio vigoroso como ciclismo (evite durante 48 horas), infección urinaria o procedimientos prostáticos recientes. Informe a su médico de estos factores. La conversación sobre si hacerse la prueba debe ocurrir antes de que se ordene.',
    whatToExpect: 'A standard blood draw from a vein in your arm. The sample is sent to a laboratory. Results are typically available in 1-3 days. Your doctor will discuss the results in the context of your age, family history, race, and overall health. A digital rectal exam (DRE) may also be performed as part of the screening evaluation.',
    spanishWhatToExpect: 'Una extracción de sangre estándar de una vena en su brazo. La muestra se envía a un laboratorio. Los resultados generalmente están disponibles en 1 a 3 días. Su médico discutirá los resultados en el contexto de su edad, historial familiar, raza y salud general. Un examen digital rectal (EDR) también puede realizarse como parte de la evaluación de detección.',
    risks: 'The blood draw itself has minimal risks (bruising, soreness). The main concern with PSA screening is overdiagnosis and overtreatment: detecting slow-growing cancers that would never cause harm, leading to biopsies (which carry infection and bleeding risks) and treatments (surgery, radiation) with side effects including incontinence and erectile dysfunction. False positives cause anxiety. Current guidelines emphasize shared decision-making rather than universal screening.',
    spanishRisks: 'La extracción de sangre en sí tiene riesgos mínimos (moretones, sensibilidad). La principal preocupación con la detección de PSA es el sobrediagnóstico y el sobretratamiento: detectar cánceres de crecimiento lento que nunca causarían daño, lo que lleva a biopsias (que conllevan riesgos de infección y sangrado) y tratamientos (cirugía, radiación) con efectos secundarios que incluyen incontinencia y disfunción eréctil. Los falsos positivos causan ansiedad. Las guías actuales enfatizan la toma de decisiones compartida en lugar de la detección universal.',
    followUp: 'A PSA level below 4 ng/mL is generally considered normal, though there is no absolute cutoff. Levels between 4-10 ng/mL are in the gray zone; further evaluation may include a repeat PSA, free PSA ratio, PSA density, or MRI. Levels above 10 ng/mL typically prompt a biopsy. If screening is initiated, it is generally repeated every 1-2 years. Men at higher risk (African American men, family history) should discuss starting screening at age 40-45; others at age 50-55.',
    spanishFollowUp: 'Un nivel de PSA por debajo de 4 ng/mL generalmente se considera normal, aunque no hay un punto de corte absoluto. Los niveles entre 4-10 ng/mL están en la zona gris; la evaluación adicional puede incluir una repetición de PSA, relación de PSA libre, densidad de PSA o resonancia magnética. Los niveles superiores a 10 ng/mL generalmente ameritan una biopsia. Si se inicia la detección, generalmente se repite cada 1 a 2 años. Los hombres con mayor riesgo (afroamericanos, historial familiar) deben discutir comenzar la detección a los 40-45 años; otros a los 50-55 años.',
  },

  // --- Skin Cancer Screening ---
  {
    procedureId: 'scr-skin-cancer', name: 'Skin Cancer Screening', spanishName: 'Detección de cáncer de piel',
    category: 'screening',
    description: 'Visual examination of the entire body skin surface by a dermatologist to identify suspicious moles, lesions, or skin changes that may indicate skin cancer.',
    spanishDescription: 'Examen visual de toda la superficie de la piel del cuerpo por un dermatólogo para identificar lunares sospechosos, lesiones o cambios cutáneos que puedan indicar cáncer de piel.',
    specialties: ['dermatology', 'primary-care'], bodyRegions: ['skin'],
    complexity: 'minimal', setting: ['outpatient-clinic'], anesthesia: ['none'],
    patientExplanation: 'A skin cancer screening is a thorough visual examination of your skin from head to toe by a dermatologist or trained healthcare provider. The doctor looks at all moles, freckles, birthmarks, and other spots on your skin to check for signs of skin cancer such as melanoma, basal cell carcinoma, or squamous cell carcinoma. Using the ABCDE rule (Asymmetry, Border irregularity, Color variation, Diameter, Evolving), suspicious lesions are identified for further evaluation.',
    spanishPatientExplanation: 'Una detección de cáncer de piel es un examen visual completo de su piel de la cabeza a los pies por un dermatólogo o proveedor de salud capacitado. El médico examina todos los lunares, pecas, marcas de nacimiento y otras manchas en su piel para verificar signos de cáncer de piel como melanoma, carcinoma basocelular o carcinoma de células escamosas. Usando la regla ABCDE (Asimetría, Borde irregular, Color variado, Diámetro, Evolución), se identifican las lesiones sospechosas para evaluación adicional.',
    preparation: 'Remove nail polish from fingers and toes (skin cancer can occur under nails). Come without makeup if possible. Note any moles or spots that have changed, grown, or are new. Bring a list of any skin concerns. You will undress and put on a gown. It is helpful to have someone check your back beforehand and note any spots of concern.',
    spanishPreparation: 'Retire el esmalte de uñas de manos y pies (el cáncer de piel puede ocurrir debajo de las uñas). Venga sin maquillaje si es posible. Note cualquier lunar o mancha que haya cambiado, crecido o sea nuevo. Traiga una lista de cualquier preocupación cutánea. Se desvestirá y se pondrá una bata. Es útil que alguien revise su espalda de antemano y note cualquier mancha preocupante.',
    whatToExpect: 'The doctor systematically examines your skin from scalp to soles of feet, including between fingers and toes, behind the ears, and under the arms. A dermatoscope (a handheld magnifying tool with a light) may be used for closer examination of specific lesions. The exam takes 10-15 minutes. If a suspicious lesion is found, a biopsy (small skin sample) may be taken at the same visit or scheduled for follow-up.',
    spanishWhatToExpect: 'El médico examina sistemáticamente su piel desde el cuero cabelludo hasta las plantas de los pies, incluyendo entre los dedos, detrás de las orejas y debajo de los brazos. Se puede usar un dermatoscopio (herramienta de aumento manual con luz) para examinar más de cerca lesiones específicas. El examen toma de 10 a 15 minutos. Si se encuentra una lesión sospechosa, se puede tomar una biopsia (pequeña muestra de piel) en la misma visita o programarla para seguimiento.',
    risks: 'A skin cancer screening itself has no physical risks. The main concern is false positives leading to unnecessary biopsies (which involve minor cutting, potential scarring, and a small infection risk). False negatives can also occur, as some skin cancers may be missed. Anxiety from suspicious findings is possible. Regular self-examinations between screenings are recommended.',
    spanishRisks: 'Una detección de cáncer de piel en sí no tiene riesgos físicos. La principal preocupación son los falsos positivos que llevan a biopsias innecesarias (que implican un pequeño corte, posible cicatriz y un pequeño riesgo de infección). También pueden ocurrir falsos negativos, ya que algunos cánceres de piel pueden no detectarse. Es posible la ansiedad por hallazgos sospechosos. Se recomiendan autoexámenes regulares entre las detecciones.',
    followUp: 'If the screening is normal, annual screenings are recommended for higher-risk individuals (fair skin, history of sunburns, family history, many moles, prior skin cancer). Biopsy results take 1-2 weeks. Practice monthly self-skin exams between visits. Use daily sunscreen (SPF 30+), wear protective clothing, and avoid tanning beds. Report any new or changing lesions promptly.',
    spanishFollowUp: 'Si la detección es normal, se recomiendan detecciones anuales para individuos de mayor riesgo (piel clara, historial de quemaduras solares, historial familiar, muchos lunares, cáncer de piel previo). Los resultados de la biopsia tardan 1 a 2 semanas. Practique autoexámenes mensuales de la piel entre visitas. Use protector solar diario (FPS 30+), use ropa protectora y evite las camas de bronceado. Reporte cualquier lesión nueva o que cambie prontamente.',
  },

  // --- Abdominal Aortic Aneurysm Ultrasound Screening ---
  {
    procedureId: 'scr-aaa-ultrasound', name: 'Abdominal Aortic Aneurysm (AAA) Ultrasound Screening', spanishName: 'Detección por ultrasonido de aneurisma de aorta abdominal',
    category: 'screening',
    description: 'One-time ultrasound screening of the abdominal aorta to detect aneurysms (abnormal enlargement) before rupture.',
    spanishDescription: 'Detección por ultrasonido única de la aorta abdominal para detectar aneurismas (agrandamiento anormal) antes de la ruptura.',
    specialties: ['vascular-surgery', 'radiology', 'primary-care'], bodyRegions: ['abdomen', 'blood-vessels'],
    complexity: 'minimal', setting: ['outpatient-clinic', 'imaging-center', 'hospital-outpatient'], anesthesia: ['none'],
    patientExplanation: 'An abdominal aortic aneurysm (AAA) screening is a painless ultrasound test that checks whether the largest blood vessel in your body (the aorta) has become enlarged in the abdominal area. An aneurysm is a balloon-like bulge that can grow over time and may rupture if it gets too large, which is life-threatening. This one-time screening is recommended for men ages 65-75 who have ever smoked. Early detection allows monitoring and treatment before a rupture occurs.',
    spanishPatientExplanation: 'Una detección de aneurisma de aorta abdominal (AAA) es una prueba de ultrasonido indolora que verifica si el vaso sanguíneo más grande de su cuerpo (la aorta) se ha agrandado en el área abdominal. Un aneurisma es una protuberancia como un globo que puede crecer con el tiempo y romperse si se hace demasiado grande, lo cual es potencialmente mortal. Esta detección única se recomienda para hombres de 65 a 75 años que alguna vez hayan fumado. La detección temprana permite el monitoreo y tratamiento antes de que ocurra una ruptura.',
    preparation: 'You may be asked to fast for 8-12 hours before the test to reduce gas in the intestines, which can obscure the view of the aorta. Drink water as needed. Wear comfortable, loose-fitting clothing. The test requires no medications, no injections, and no contrast dye.',
    spanishPreparation: 'Se le puede pedir que ayune durante 8 a 12 horas antes de la prueba para reducir los gases intestinales, que pueden oscurecer la vista de la aorta. Beba agua según sea necesario. Use ropa cómoda y holgada. La prueba no requiere medicamentos, inyecciones ni medio de contraste.',
    whatToExpect: 'You lie on your back on an exam table. Warm gel is applied to your abdomen. A technologist moves an ultrasound probe (transducer) across your abdomen to visualize the aorta. You may feel mild pressure but no pain. The technologist measures the diameter of the aorta at several points. The exam takes 15-20 minutes. Results are usually available within a few days.',
    spanishWhatToExpect: 'Se acuesta boca arriba en una mesa de examen. Se aplica gel tibio en su abdomen. Un tecnólogo mueve una sonda de ultrasonido (transductor) a través de su abdomen para visualizar la aorta. Puede sentir presión leve pero sin dolor. El tecnólogo mide el diámetro de la aorta en varios puntos. El examen toma de 15 a 20 minutos. Los resultados generalmente están disponibles en unos días.',
    risks: 'AAA ultrasound screening has no physical risks. It uses sound waves (no radiation). The main concern is false positives leading to anxiety and potentially unnecessary follow-up tests or even surgery. Conversely, small aneurysms may be detected that require years of monitoring, causing ongoing worry. Overdiagnosis is possible for aneurysms that would never have ruptured. The benefit of detecting a large, treatable aneurysm before rupture outweighs these concerns.',
    spanishRisks: 'La detección por ultrasonido de AAA no tiene riesgos físicos. Usa ondas sonoras (sin radiación). La principal preocupación son los falsos positivos que llevan a ansiedad y potencialmente pruebas de seguimiento innecesarias o incluso cirugía. Por el contrario, se pueden detectar aneurismas pequeños que requieren años de monitoreo, causando preocupación continua. El sobrediagnóstico es posible para aneurismas que nunca se habrían roto. El beneficio de detectar un aneurisma grande y tratable antes de la ruptura supera estas preocupaciones.',
    followUp: 'Normal aortic diameter is less than 3 cm; no further screening is needed. A small aneurysm (3-4.4 cm) is monitored with ultrasound every 6-12 months. A medium aneurysm (4.5-5.4 cm) is monitored every 3-6 months. A large aneurysm (5.5 cm or larger) is typically referred for surgical repair (open surgery or endovascular stent graft). Controlling blood pressure, quitting smoking, and managing cholesterol are essential regardless of findings.',
    spanishFollowUp: 'El diámetro normal de la aorta es menor de 3 cm; no se necesita más detección. Un aneurisma pequeño (3-4.4 cm) se monitorea con ultrasonido cada 6 a 12 meses. Un aneurisma mediano (4.5-5.4 cm) se monitorea cada 3 a 6 meses. Un aneurisma grande (5.5 cm o más) generalmente se refiere para reparación quirúrgica (cirugía abierta o injerto de stent endovascular). Controlar la presión arterial, dejar de fumar y manejar el colesterol son esenciales independientemente de los hallazgos.',
  },

  // --- Hearing and Vision Screening ---
  {
    procedureId: 'scr-hearing-vision', name: 'Hearing and Vision Screening', spanishName: 'Detección de audición y visión',
    category: 'screening',
    description: 'Basic tests to assess hearing acuity and visual acuity, used for early detection of hearing loss and vision problems.',
    spanishDescription: 'Pruebas básicas para evaluar la agudeza auditiva y visual, utilizadas para la detección temprana de pérdida auditiva y problemas de visión.',
    specialties: ['audiology', 'ophthalmology', 'optometry', 'primary-care', 'pediatrics'], bodyRegions: ['ears', 'eyes'],
    complexity: 'minimal', setting: ['outpatient-clinic', 'outpatient-surgery-center'], anesthesia: ['none'],
    patientExplanation: 'Hearing and vision screenings are quick tests to check how well you hear and see. A hearing screening typically involves listening for tones at different volumes and pitches through headphones and indicating when you hear them. A vision screening involves reading letters or symbols on an eye chart at a set distance, and may include tests for color vision and peripheral vision. These screenings can detect problems early so treatment can begin before they significantly affect your quality of life.',
    spanishPatientExplanation: 'Las detecciones de audición y visión son pruebas rápidas para verificar qué tan bien escucha y ve. Una detección auditiva generalmente implica escuchar tonos a diferentes volúmenes y frecuencias a través de auriculares e indicar cuándo los escucha. Una detección visual implica leer letras o símbolos en una tabla optométrica a una distancia establecida, y puede incluir pruebas de visión de colores y visión periférica. Estas detecciones pueden detectar problemas tempranamente para que el tratamiento pueda comenzar antes de que afecten significativamente su calidad de vida.',
    preparation: 'No special preparation is needed. For hearing: avoid loud noise exposure for 24 hours before the test if possible; remove hearing aids. For vision: bring your current glasses or contact lenses; bring a list of current medications (some can affect vision). If dilating eye drops will be used for a comprehensive eye exam, arrange transportation home as your vision will be blurry for several hours.',
    spanishPreparation: 'No se necesita preparación especial. Para audición: evite la exposición a ruido fuerte durante 24 horas antes de la prueba si es posible; retire los audífonos. Para visión: traiga sus gafas o lentes de contacto actuales; traiga una lista de medicamentos actuales (algunos pueden afectar la visión). Si se usarán gotas para dilatar los ojos en un examen ocular completo, organice transporte a casa ya que su visión estará borrosa durante varias horas.',
    whatToExpect: 'Hearing screening: You sit in a quiet room or sound booth wearing headphones. Tones are played at various frequencies and volumes. You raise your hand or press a button when you hear a tone. An audiogram records the results. Takes 10-15 minutes. Vision screening: You stand 20 feet from an eye chart and read the smallest line of letters you can see, first with each eye separately, then both together. Additional tests may check peripheral vision, depth perception, and eye pressure. Takes 15-30 minutes.',
    spanishWhatToExpect: 'Detección auditiva: Se sienta en una habitación silenciosa o cabina de sonido usando auriculares. Se reproducen tonos a varias frecuencias y volúmenes. Levanta la mano o presiona un botón cuando escucha un tono. Un audiograma registra los resultados. Toma 10 a 15 minutos. Detección visual: Se para a 20 pies de una tabla optométrica y lee la línea más pequeña de letras que pueda ver, primero con cada ojo por separado, luego con ambos juntos. Pruebas adicionales pueden verificar la visión periférica, percepción de profundidad y presión ocular. Toma de 15 a 30 minutos.',
    risks: 'These screenings have no physical risks. The main limitations are false negatives (missing mild or early-stage problems) and false positives (indicating a problem when further testing shows normal function). A screening is not a comprehensive diagnostic evaluation; abnormal results should be followed up with a full audiological or ophthalmological exam.',
    spanishRisks: 'Estas detecciones no tienen riesgos físicos. Las principales limitaciones son los falsos negativos (no detectar problemas leves o en etapa temprana) y falsos positivos (indicar un problema cuando pruebas adicionales muestran función normal). Una detección no es una evaluación diagnóstica completa; los resultados anormales deben ser seguidos con un examen audiológico u oftalmológico completo.',
    followUp: 'Hearing: If screening is abnormal, a comprehensive audiological evaluation is done. Hearing aids, cochlear implants, or other interventions may be recommended. Adults should have hearing screened every 10 years through age 50, then every 3 years. Vision: If screening is abnormal, a comprehensive eye exam by an optometrist or ophthalmologist is needed. Adults should have a comprehensive eye exam at age 40, then as recommended by their eye doctor (typically every 1-2 years after age 65). Children should be screened at regular intervals starting at birth.',
    spanishFollowUp: 'Audición: Si la detección es anormal, se realiza una evaluación audiológica completa. Se pueden recomendar audífonos, implantes cocleares u otras intervenciones. Los adultos deben hacerse una detección auditiva cada 10 años hasta los 50, luego cada 3 años. Visión: Si la detección es anormal, se necesita un examen ocular completo por un optometrista u oftalmólogo. Los adultos deben hacerse un examen ocular completo a los 40 años, luego según lo recomiende su oftalmólogo (generalmente cada 1 a 2 años después de los 65). Los niños deben ser examinados a intervalos regulares comenzando desde el nacimiento.',
  },
];

// --- Helper Functions ---

/**
 * Look up a bedside/screening procedure by its ID.
 */
export function getBedsideScreeningById(procedureId: string): BedsideScreeningEntry | undefined {
  return BEDSIDE_AND_SCREENING_PROCEDURES.find(p => p.procedureId === procedureId);
}

/**
 * Get all procedures in a given category (bedside or screening).
 */
export function getBedsideScreeningByCategory(category: ProcedureCategory): BedsideScreeningEntry[] {
  return BEDSIDE_AND_SCREENING_PROCEDURES.filter(p => p.category === category);
}

/**
 * Get all procedures matching a given complexity level.
 */
export function getBedsideScreeningByComplexity(complexity: ComplexityLevel): BedsideScreeningEntry[] {
  return BEDSIDE_AND_SCREENING_PROCEDURES.filter(p => p.complexity === complexity);
}

/**
 * Get all procedures associated with a given specialty.
 */
export function getBedsideScreeningBySpecialty(specialty: string): BedsideScreeningEntry[] {
  const s = specialty.toLowerCase();
  return BEDSIDE_AND_SCREENING_PROCEDURES.filter(p =>
    p.specialties.some(sp => sp.toLowerCase() === s)
  );
}

/**
 * Search procedures by name or description keyword.
 */
export function searchBedsideScreening(keyword: string): BedsideScreeningEntry[] {
  const kw = keyword.toLowerCase();
  return BEDSIDE_AND_SCREENING_PROCEDURES.filter(p =>
    p.name.toLowerCase().includes(kw) ||
    p.description.toLowerCase().includes(kw) ||
    p.spanishName.toLowerCase().includes(kw)
  );
}
