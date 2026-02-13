/**
 * Biological Self - Interventional Radiology Procedures Database
 * Compact reference of 15 core IR procedures with patient education,
 * preparation, risks, recovery, alternatives, and Spanish translations.
 */

import type {
  ProcedureCategory,
  ComplexityLevel,
  AnesthesiaType,
  SettingType,
} from './procedure-database';

// --- Extended IR Procedure Entry ---

export interface IRProcedureEntry {
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
  whatToExpect: string;
  spanishWhatToExpect: string;
  patientExplanation: string;
  spanishPatientExplanation: string;

  // Extended fields
  preparation: string;
  spanishPreparation: string;
  risks: string[];
  spanishRisks: string[];
  recovery: string;
  spanishRecovery: string;
  alternatives: string[];
  spanishAlternatives: string[];
}

// --- Interventional Radiology Procedure Database ---

export const IR_PROCEDURES: IRProcedureEntry[] = [

  // ============================================================
  // VASCULAR ACCESS
  // ============================================================
  {
    procedureId: 'ir-picc-line',
    name: 'PICC Line Placement',
    spanishName: 'Colocación de línea PICC',
    category: 'therapeutic',
    description: 'A peripherally inserted central catheter (PICC) is threaded from an arm vein to a large vein near the heart, providing long-term intravenous access for medications, nutrition, or blood draws.',
    spanishDescription: 'Un catéter central de inserción periférica (PICC) se introduce desde una vena del brazo hasta una vena grande cerca del corazón, proporcionando acceso intravenoso a largo plazo para medicamentos, nutrición o extracciones de sangre.',
    specialties: ['interventional-radiology', 'vascular-access'],
    bodyRegions: ['upper-extremity', 'chest', 'vasculature'],
    complexity: 'low',
    setting: ['interventional-radiology', 'bedside', 'hospital-inpatient'],
    anesthesia: ['local'],
    whatToExpect: 'Ultrasound guides a thin catheter through a vein in your upper arm to a large vein near your heart. The procedure takes 30-60 minutes. You will feel a pinch from the numbing injection and pressure as the catheter advances.',
    spanishWhatToExpect: 'Se usa ultrasonido para guiar un catéter delgado a través de una vena en la parte superior de su brazo hasta una vena grande cerca del corazón. El procedimiento toma 30-60 minutos. Sentirá un pinchazo por la inyección de anestesia y presión mientras avanza el catéter.',
    patientExplanation: 'A PICC line is a long, thin tube placed in your arm that reaches a large vein near your heart. It allows nurses to give you medications, fluids, or nutrition without repeatedly poking your veins. It can stay in for weeks to months.',
    spanishPatientExplanation: 'Una línea PICC es un tubo largo y delgado colocado en su brazo que llega a una vena grande cerca del corazón. Permite a las enfermeras administrar medicamentos, líquidos o nutrición sin pinchar sus venas repetidamente. Puede permanecer durante semanas o meses.',
    preparation: 'No special fasting required. Inform your doctor about blood thinners or allergies. The arm will be cleaned and draped in a sterile fashion. Blood tests may be checked beforehand to ensure safe clotting.',
    spanishPreparation: 'No se requiere ayuno especial. Informe a su médico sobre anticoagulantes o alergias. El brazo se limpiará y cubrirá de forma estéril. Se pueden verificar análisis de sangre previos para asegurar una coagulación adecuada.',
    risks: [
      'Infection at insertion site or bloodstream infection',
      'Blood clot (deep vein thrombosis)',
      'Catheter malposition or migration',
      'Air embolism (rare)',
      'Bleeding or bruising at insertion site',
      'Nerve irritation near insertion site',
    ],
    spanishRisks: [
      'Infección en el sitio de inserción o infección del torrente sanguíneo',
      'Coágulo de sangre (trombosis venosa profunda)',
      'Mala posición o migración del catéter',
      'Embolia gaseosa (rara)',
      'Sangrado o moretones en el sitio de inserción',
      'Irritación nerviosa cerca del sitio de inserción',
    ],
    recovery: 'You can use the PICC immediately after placement is confirmed by X-ray. Keep the site dry and covered. A nurse will flush the line regularly. Report redness, swelling, fever, or drainage at the site promptly.',
    spanishRecovery: 'Puede usar la línea PICC inmediatamente después de confirmar su posición con una radiografía. Mantenga el sitio seco y cubierto. Una enfermera lavará la línea regularmente. Reporte enrojecimiento, hinchazón, fiebre o drenaje en el sitio de inmediato.',
    alternatives: [
      'Peripheral IV (short-term access)',
      'Midline catheter (medium-term, does not reach central vein)',
      'Central venous catheter (internal jugular or subclavian)',
      'Implanted port (port-a-cath) for long-term needs',
    ],
    spanishAlternatives: [
      'IV periférica (acceso a corto plazo)',
      'Catéter de línea media (mediano plazo, no llega a la vena central)',
      'Catéter venoso central (yugular interna o subclavia)',
      'Puerto implantado (port-a-cath) para necesidades a largo plazo',
    ],
  },

  {
    procedureId: 'ir-port-a-cath',
    name: 'Port-a-Cath (Mediport) Placement',
    spanishName: 'Colocación de puerto implantable (Mediport)',
    category: 'therapeutic',
    description: 'An implantable port is a small device placed under the skin of the chest, connected to a catheter in a large vein, providing long-term vascular access for chemotherapy, blood draws, and infusions.',
    spanishDescription: 'Un puerto implantable es un dispositivo pequeño colocado debajo de la piel del pecho, conectado a un catéter en una vena grande, que proporciona acceso vascular a largo plazo para quimioterapia, extracciones de sangre e infusiones.',
    specialties: ['interventional-radiology', 'oncology', 'vascular-surgery'],
    bodyRegions: ['chest', 'vasculature'],
    complexity: 'moderate',
    setting: ['interventional-radiology', 'operating-room'],
    anesthesia: ['local', 'sedation'],
    whatToExpect: 'Two small incisions are made: one on the chest wall for the port and one near the collarbone for vein access. The port is placed in a pocket under the skin and connected to a catheter in a large vein. The procedure takes 45-60 minutes under sedation.',
    spanishWhatToExpect: 'Se realizan dos pequeñas incisiones: una en la pared torácica para el puerto y otra cerca de la clavícula para el acceso venoso. El puerto se coloca en un bolsillo debajo de la piel y se conecta a un catéter en una vena grande. El procedimiento toma 45-60 minutos con sedación.',
    patientExplanation: 'A port is a small disc-shaped device placed under the skin of your upper chest. It connects to a large vein and is accessed by a special needle through the skin. It is hidden under your skin and allows chemotherapy or other treatments without repeated needle sticks in your arms.',
    spanishPatientExplanation: 'Un puerto es un dispositivo pequeño en forma de disco colocado debajo de la piel de la parte superior del pecho. Se conecta a una vena grande y se accede con una aguja especial a través de la piel. Está oculto bajo su piel y permite quimioterapia u otros tratamientos sin pinchazos repetidos en los brazos.',
    preparation: 'Fasting for 6-8 hours before the procedure. Stop blood thinners as directed by your doctor. Blood work (CBC, coagulation studies) will be checked. Arrange a ride home. Wear loose, comfortable clothing.',
    spanishPreparation: 'Ayuno de 6-8 horas antes del procedimiento. Suspenda los anticoagulantes según las indicaciones de su médico. Se verificarán análisis de sangre (hemograma, estudios de coagulación). Organice transporte a casa. Use ropa holgada y cómoda.',
    risks: [
      'Infection (local or systemic)',
      'Pneumothorax (collapsed lung, uncommon)',
      'Catheter malposition',
      'Blood clot around the port or catheter',
      'Bleeding or hematoma',
      'Port malfunction or flipping',
      'Skin erosion over the port (rare)',
    ],
    spanishRisks: [
      'Infección (local o sistémica)',
      'Neumotórax (pulmón colapsado, poco común)',
      'Mala posición del catéter',
      'Coágulo de sangre alrededor del puerto o catéter',
      'Sangrado o hematoma',
      'Mal funcionamiento o volteo del puerto',
      'Erosión de la piel sobre el puerto (raro)',
    ],
    recovery: 'Mild soreness at the incision sites for several days, managed with over-the-counter pain medication. Avoid heavy lifting or vigorous arm movements for 1-2 weeks. Sutures or steri-strips are removed in 7-10 days. The port can be used within 24-48 hours after swelling subsides.',
    spanishRecovery: 'Dolor leve en los sitios de incisión durante varios días, controlado con analgésicos de venta libre. Evite levantar objetos pesados o movimientos vigorosos del brazo durante 1-2 semanas. Las suturas o cintas se retiran en 7-10 días. El puerto puede usarse dentro de 24-48 horas después de que la hinchazón disminuya.',
    alternatives: [
      'PICC line (less invasive, shorter duration)',
      'Tunneled central venous catheter (Hickman/Broviac)',
      'Peripheral IV with frequent restarts',
      'Midline catheter for medium-term access',
    ],
    spanishAlternatives: [
      'Línea PICC (menos invasiva, menor duración)',
      'Catéter venoso central tunelizado (Hickman/Broviac)',
      'IV periférica con reinicios frecuentes',
      'Catéter de línea media para acceso a mediano plazo',
    ],
  },

  {
    procedureId: 'ir-central-venous-catheter',
    name: 'Central Venous Catheter Placement',
    spanishName: 'Colocación de catéter venoso central',
    category: 'therapeutic',
    description: 'A large-bore catheter inserted into a central vein (internal jugular, subclavian, or femoral) under image guidance for medication delivery, hemodynamic monitoring, or dialysis.',
    spanishDescription: 'Un catéter de gran calibre insertado en una vena central (yugular interna, subclavia o femoral) bajo guía por imagen para administración de medicamentos, monitoreo hemodinámico o diálisis.',
    specialties: ['interventional-radiology', 'critical-care', 'anesthesiology'],
    bodyRegions: ['neck', 'chest', 'groin', 'vasculature'],
    complexity: 'moderate',
    setting: ['interventional-radiology', 'hospital-inpatient', 'operating-room'],
    anesthesia: ['local', 'sedation'],
    whatToExpect: 'The skin over the chosen vein (usually the neck or below the collarbone) is numbed. Using ultrasound guidance, a needle is placed into the vein and the catheter is threaded in. You will feel pressure but should not feel sharp pain. The procedure takes 20-40 minutes.',
    spanishWhatToExpect: 'La piel sobre la vena elegida (generalmente el cuello o debajo de la clavícula) se adormece. Usando guía por ultrasonido, se inserta una aguja en la vena y se pasa el catéter. Sentirá presión pero no dolor agudo. El procedimiento toma 20-40 minutos.',
    patientExplanation: 'A central line is a special IV placed in a large vein in your neck, chest, or groin. It allows doctors to give strong medications, monitor your heart pressures, or provide dialysis. It is typically used in the hospital when regular IVs are not sufficient.',
    spanishPatientExplanation: 'Una línea central es una vía intravenosa especial colocada en una vena grande del cuello, pecho o ingle. Permite a los médicos administrar medicamentos fuertes, monitorear las presiones del corazón o proporcionar diálisis. Se usa típicamente en el hospital cuando las vías intravenosas regulares no son suficientes.',
    preparation: 'No eating or drinking if sedation is planned. Blood work including coagulation studies. Inform your doctor about allergies, blood thinners, or pacemakers. The site will be shaved if needed and cleaned with antiseptic solution.',
    spanishPreparation: 'No comer ni beber si se planea sedación. Análisis de sangre incluyendo estudios de coagulación. Informe a su médico sobre alergias, anticoagulantes o marcapasos. El sitio se afeitará si es necesario y se limpiará con solución antiséptica.',
    risks: [
      'Pneumothorax (collapsed lung) with subclavian or jugular approach',
      'Arterial puncture',
      'Infection (catheter-related bloodstream infection)',
      'Air embolism',
      'Bleeding or hematoma',
      'Arrhythmia during catheter advancement',
      'Catheter malposition',
    ],
    spanishRisks: [
      'Neumotórax (pulmón colapsado) con abordaje subclavio o yugular',
      'Punción arterial',
      'Infección (infección del torrente sanguíneo relacionada con el catéter)',
      'Embolia gaseosa',
      'Sangrado o hematoma',
      'Arritmia durante el avance del catéter',
      'Mala posición del catéter',
    ],
    recovery: 'The catheter can be used immediately once position is confirmed by chest X-ray. Daily dressing changes with antiseptic technique. The catheter is removed when no longer needed. Report fever, redness, drainage, or swelling at the site.',
    spanishRecovery: 'El catéter puede usarse inmediatamente una vez que se confirme su posición con radiografía de tórax. Cambios de vendaje diarios con técnica antiséptica. El catéter se retira cuando ya no es necesario. Reporte fiebre, enrojecimiento, drenaje o hinchazón en el sitio.',
    alternatives: [
      'PICC line (arm vein approach)',
      'Peripheral IV for short-term, non-irritant medications',
      'Intraosseous access (emergency)',
      'Implanted port for long-term needs',
    ],
    spanishAlternatives: [
      'Línea PICC (abordaje por vena del brazo)',
      'IV periférica para medicamentos a corto plazo no irritantes',
      'Acceso intraóseo (emergencia)',
      'Puerto implantado para necesidades a largo plazo',
    ],
  },

  // ============================================================
  // IMAGE-GUIDED BIOPSY
  // ============================================================
  {
    procedureId: 'ir-image-guided-biopsy',
    name: 'Image-Guided Biopsy (CT, Ultrasound, MRI)',
    spanishName: 'Biopsia guiada por imagen (TC, ultrasonido, RM)',
    category: 'diagnostic',
    description: 'A tissue sample is obtained from a suspicious lesion using a needle guided by CT, ultrasound, or MRI to ensure precise targeting for pathologic diagnosis.',
    spanishDescription: 'Se obtiene una muestra de tejido de una lesión sospechosa usando una aguja guiada por TC, ultrasonido o RM para asegurar una localización precisa para diagnóstico patológico.',
    specialties: ['interventional-radiology', 'oncology', 'pathology'],
    bodyRegions: ['lung', 'liver', 'kidney', 'bone', 'soft-tissue', 'lymph-node', 'breast', 'thyroid'],
    complexity: 'moderate',
    setting: ['interventional-radiology', 'imaging-center'],
    anesthesia: ['local', 'sedation'],
    whatToExpect: 'You will lie on a table and the area will be numbed with local anesthetic. Using imaging (CT, ultrasound, or MRI), the doctor guides a thin needle to the abnormal area and takes small tissue samples. You may hear clicking from the biopsy device. The procedure takes 30-60 minutes depending on the target.',
    spanishWhatToExpect: 'Se acostará en una mesa y el área se adormecerá con anestesia local. Usando imágenes (TC, ultrasonido o RM), el médico guía una aguja delgada al área anormal y toma pequeñas muestras de tejido. Puede escuchar un clic del dispositivo de biopsia. El procedimiento toma 30-60 minutos dependiendo del objetivo.',
    patientExplanation: 'An image-guided biopsy uses special imaging technology to precisely guide a needle to an abnormal area in your body and take a small tissue sample. This sample is examined under a microscope to determine whether it is benign (not cancer) or malignant (cancer), and what type it is.',
    spanishPatientExplanation: 'Una biopsia guiada por imagen usa tecnología de imágenes especial para guiar con precisión una aguja a un área anormal en su cuerpo y tomar una pequeña muestra de tejido. Esta muestra se examina bajo microscopio para determinar si es benigna (no cáncer) o maligna (cáncer), y de qué tipo es.',
    preparation: 'Fasting for 4-6 hours if sedation is used. Stop blood thinners (aspirin, warfarin, etc.) as directed, typically 3-7 days before. Blood work to check clotting. Inform your doctor about allergies, implants, or pregnancy. Arrange a ride home.',
    spanishPreparation: 'Ayuno de 4-6 horas si se usa sedación. Suspenda los anticoagulantes (aspirina, warfarina, etc.) según las indicaciones, típicamente 3-7 días antes. Análisis de sangre para verificar la coagulación. Informe a su médico sobre alergias, implantes o embarazo. Organice transporte a casa.',
    risks: [
      'Bleeding at the biopsy site',
      'Infection',
      'Pneumothorax (for lung biopsies)',
      'Damage to nearby organs or structures',
      'Non-diagnostic sample (may need repeat)',
      'Pain or bruising at the site',
      'Tumor seeding along the needle tract (extremely rare)',
    ],
    spanishRisks: [
      'Sangrado en el sitio de biopsia',
      'Infección',
      'Neumotórax (para biopsias de pulmón)',
      'Daño a órganos o estructuras cercanas',
      'Muestra no diagnóstica (puede necesitar repetirse)',
      'Dolor o moretones en el sitio',
      'Siembra tumoral a lo largo del trayecto de la aguja (extremadamente raro)',
    ],
    recovery: 'Rest for several hours after the procedure. For lung biopsies, a follow-up chest X-ray checks for pneumothorax. Avoid strenuous activity for 24-48 hours. Mild soreness at the biopsy site is normal. Results typically take 3-7 business days.',
    spanishRecovery: 'Descanso durante varias horas después del procedimiento. Para biopsias de pulmón, una radiografía de tórax de seguimiento verifica si hay neumotórax. Evite actividades extenuantes durante 24-48 horas. Es normal tener dolor leve en el sitio de la biopsia. Los resultados tardan típicamente 3-7 días hábiles.',
    alternatives: [
      'Surgical (open or laparoscopic) biopsy',
      'Endoscopic biopsy (for GI, bronchial, or urologic targets)',
      'Liquid biopsy (blood-based tumor markers, limited scope)',
      'Observation with serial imaging (watchful waiting)',
    ],
    spanishAlternatives: [
      'Biopsia quirúrgica (abierta o laparoscópica)',
      'Biopsia endoscópica (para objetivos gastrointestinales, bronquiales o urológicos)',
      'Biopsia líquida (marcadores tumorales en sangre, alcance limitado)',
      'Observación con imágenes seriadas (vigilancia activa)',
    ],
  },

  // ============================================================
  // DRAINAGE
  // ============================================================
  {
    procedureId: 'ir-abscess-drainage',
    name: 'Percutaneous Abscess Drainage',
    spanishName: 'Drenaje percutáneo de absceso',
    category: 'therapeutic',
    description: 'Image-guided placement of a drainage catheter into an abscess (collection of infected fluid) to evacuate pus and allow healing, often avoiding surgery.',
    spanishDescription: 'Colocación guiada por imagen de un catéter de drenaje en un absceso (colección de líquido infectado) para evacuar pus y permitir la curación, frecuentemente evitando cirugía.',
    specialties: ['interventional-radiology', 'surgery', 'infectious-disease'],
    bodyRegions: ['abdomen', 'pelvis', 'chest', 'soft-tissue'],
    complexity: 'moderate',
    setting: ['interventional-radiology', 'hospital-inpatient'],
    anesthesia: ['local', 'sedation'],
    whatToExpect: 'The skin is cleaned and numbed. Using CT or ultrasound guidance, a needle is inserted into the abscess and fluid is drained. A small catheter is often left in place to continue draining. You will feel pressure but the local anesthetic minimizes pain. Takes 30-60 minutes.',
    spanishWhatToExpect: 'La piel se limpia y se adormece. Usando guía por TC o ultrasonido, se inserta una aguja en el absceso y se drena el líquido. Frecuentemente se deja un catéter pequeño para continuar drenando. Sentirá presión pero la anestesia local minimiza el dolor. Toma 30-60 minutos.',
    patientExplanation: 'An abscess is a pocket of infected fluid (pus) inside your body. Instead of surgery, the doctor uses imaging to guide a thin tube through your skin into the pocket and drain the infection. A small tube may be left in place for days until the infection clears.',
    spanishPatientExplanation: 'Un absceso es una bolsa de líquido infectado (pus) dentro de su cuerpo. En lugar de cirugía, el médico usa imágenes para guiar un tubo delgado a través de su piel hacia la bolsa y drenar la infección. Un tubo pequeño puede dejarse en su lugar durante días hasta que la infección se resuelva.',
    preparation: 'Blood work including CBC and coagulation studies. Antibiotics are typically started before the procedure. Fasting for 4-6 hours if sedation is planned. Stop blood thinners as directed. Inform your doctor of all allergies.',
    spanishPreparation: 'Análisis de sangre incluyendo hemograma y estudios de coagulación. Generalmente se inician antibióticos antes del procedimiento. Ayuno de 4-6 horas si se planea sedación. Suspenda los anticoagulantes según las indicaciones. Informe a su médico de todas sus alergias.',
    risks: [
      'Bleeding',
      'Spread of infection (bacteremia, sepsis)',
      'Injury to adjacent organs (bowel, blood vessels)',
      'Catheter dislodgement or malfunction',
      'Incomplete drainage requiring additional procedures',
      'Fistula formation (rare)',
    ],
    spanishRisks: [
      'Sangrado',
      'Propagación de la infección (bacteriemia, sepsis)',
      'Lesión a órganos adyacentes (intestino, vasos sanguíneos)',
      'Desplazamiento o mal funcionamiento del catéter',
      'Drenaje incompleto que requiere procedimientos adicionales',
      'Formación de fístula (raro)',
    ],
    recovery: 'The drainage catheter may remain in place for days to weeks. Output is monitored daily. Antibiotics are continued. Once drainage decreases and imaging confirms resolution, the catheter is removed. Most patients improve within 48-72 hours. Follow-up imaging is common.',
    spanishRecovery: 'El catéter de drenaje puede permanecer en su lugar durante días a semanas. El gasto se monitorea diariamente. Se continúan los antibióticos. Una vez que el drenaje disminuye y las imágenes confirman la resolución, se retira el catéter. La mayoría de los pacientes mejoran en 48-72 horas. Las imágenes de seguimiento son comunes.',
    alternatives: [
      'Surgical drainage (open or laparoscopic)',
      'Antibiotic therapy alone (for small abscesses)',
      'Endoscopic drainage (for pancreatic or pelvic collections)',
      'Observation if the abscess is small and the patient is stable',
    ],
    spanishAlternatives: [
      'Drenaje quirúrgico (abierto o laparoscópico)',
      'Terapia antibiótica sola (para abscesos pequeños)',
      'Drenaje endoscópico (para colecciones pancreáticas o pélvicas)',
      'Observación si el absceso es pequeño y el paciente está estable',
    ],
  },

  // ============================================================
  // VASCULAR INTERVENTIONS
  // ============================================================
  {
    procedureId: 'ir-angioplasty-stenting',
    name: 'Angioplasty and Stenting',
    spanishName: 'Angioplastia y colocación de stent',
    category: 'therapeutic',
    description: 'A balloon catheter is used to open narrowed or blocked blood vessels, and a metallic stent is deployed to keep the vessel open and restore blood flow.',
    spanishDescription: 'Se usa un catéter con balón para abrir vasos sanguíneos estrechos u obstruidos, y se despliega un stent metálico para mantener el vaso abierto y restaurar el flujo sanguíneo.',
    specialties: ['interventional-radiology', 'vascular-surgery', 'cardiology'],
    bodyRegions: ['vasculature', 'lower-extremity', 'renal', 'carotid', 'iliac'],
    complexity: 'high',
    setting: ['interventional-radiology', 'cardiac-cath-lab'],
    anesthesia: ['local', 'sedation'],
    whatToExpect: 'A catheter is inserted through a small puncture in the groin or wrist artery. Using X-ray guidance (fluoroscopy) and contrast dye, the catheter is navigated to the narrowed vessel. A balloon inflates to open the blockage, and a stent may be placed. You will feel pressure at the puncture site and warmth from the contrast dye. Takes 1-3 hours.',
    spanishWhatToExpect: 'Se inserta un catéter a través de una pequeña punción en la arteria de la ingle o muñeca. Usando guía por rayos X (fluoroscopía) y medio de contraste, el catéter se navega hacia el vaso estrecho. Un balón se infla para abrir la obstrucción y se puede colocar un stent. Sentirá presión en el sitio de punción y calor por el contraste. Toma 1-3 horas.',
    patientExplanation: 'Over time, fatty deposits can narrow your blood vessels and reduce blood flow, causing pain or organ damage. In this procedure, a doctor threads a tiny balloon through your blood vessels to the blocked area, inflates it to open the blockage, and often places a small metal tube (stent) to keep it open.',
    spanishPatientExplanation: 'Con el tiempo, los depósitos de grasa pueden estrechar sus vasos sanguíneos y reducir el flujo sanguíneo, causando dolor o daño a los órganos. En este procedimiento, el médico pasa un pequeño balón a través de sus vasos sanguíneos hasta el área bloqueada, lo infla para abrir la obstrucción y frecuentemente coloca un pequeño tubo metálico (stent) para mantenerlo abierto.',
    preparation: 'Fasting for 6-8 hours. Blood work including kidney function and coagulation. Stop certain blood thinners as directed (but aspirin is usually continued). Hydration before and after to protect kidneys from contrast dye. Report any allergy to contrast dye or iodine.',
    spanishPreparation: 'Ayuno de 6-8 horas. Análisis de sangre incluyendo función renal y coagulación. Suspenda ciertos anticoagulantes según las indicaciones (pero generalmente se continúa la aspirina). Hidratación antes y después para proteger los riñones del medio de contraste. Informe cualquier alergia al contraste o al yodo.',
    risks: [
      'Bleeding or hematoma at access site',
      'Vessel dissection, perforation, or rupture',
      'Stent thrombosis (clotting inside the stent)',
      'Restenosis (re-narrowing of the vessel)',
      'Contrast-induced nephropathy (kidney injury)',
      'Distal embolization (debris blocking downstream vessels)',
      'Allergic reaction to contrast dye',
      'Infection',
    ],
    spanishRisks: [
      'Sangrado o hematoma en el sitio de acceso',
      'Disección, perforación o ruptura del vaso',
      'Trombosis del stent (coagulación dentro del stent)',
      'Reestenosis (re-estrechamiento del vaso)',
      'Nefropatía inducida por contraste (lesión renal)',
      'Embolización distal (restos bloqueando vasos distales)',
      'Reacción alérgica al medio de contraste',
      'Infección',
    ],
    recovery: 'Bed rest for 2-6 hours with pressure on the access site. Typically 1-2 day hospital stay. Dual antiplatelet therapy (aspirin + clopidogrel) is usually required for weeks to months. Avoid heavy lifting for 1 week. Follow-up imaging and vascular checks are scheduled.',
    spanishRecovery: 'Reposo en cama durante 2-6 horas con presión en el sitio de acceso. Típicamente 1-2 días de hospitalización. Generalmente se requiere terapia antiplaquetaria doble (aspirina + clopidogrel) durante semanas a meses. Evite levantar objetos pesados durante 1 semana. Se programan imágenes de seguimiento y revisiones vasculares.',
    alternatives: [
      'Surgical bypass grafting',
      'Medical management (medications, exercise therapy)',
      'Atherectomy (plaque removal device)',
      'Thrombolysis (clot-dissolving medication)',
      'Amputation (last resort for critical limb ischemia)',
    ],
    spanishAlternatives: [
      'Injerto de derivación quirúrgica (bypass)',
      'Manejo médico (medicamentos, terapia con ejercicio)',
      'Aterectomía (dispositivo de remoción de placa)',
      'Trombólisis (medicamento para disolver coágulos)',
      'Amputación (último recurso para isquemia crítica de extremidades)',
    ],
  },

  {
    procedureId: 'ir-embolization',
    name: 'Embolization (Uterine Fibroid, AVM)',
    spanishName: 'Embolización (fibroma uterino, MAV)',
    category: 'therapeutic',
    description: 'Catheter-based delivery of particles, coils, or other agents to intentionally block blood vessels feeding fibroids, arteriovenous malformations (AVMs), tumors, or sites of active bleeding.',
    spanishDescription: 'Administración mediante catéter de partículas, coils u otros agentes para bloquear intencionalmente los vasos sanguíneos que alimentan fibromas, malformaciones arteriovenosas (MAV), tumores o sitios de sangrado activo.',
    specialties: ['interventional-radiology', 'gynecology', 'neurosurgery', 'vascular-surgery'],
    bodyRegions: ['uterus', 'brain', 'vasculature', 'liver', 'pelvis'],
    complexity: 'high',
    setting: ['interventional-radiology', 'hospital-inpatient'],
    anesthesia: ['local', 'sedation', 'general'],
    whatToExpect: 'A catheter is inserted through the groin artery and guided under fluoroscopy to the target vessels. Embolic material (tiny particles, coils, or glue) is injected to block blood flow to the abnormal area. You may feel warmth and cramping as the vessels are blocked. The procedure takes 1-3 hours.',
    spanishWhatToExpect: 'Se inserta un catéter a través de la arteria de la ingle y se guía bajo fluoroscopía hasta los vasos objetivo. Se inyecta material embólico (partículas diminutas, coils o pegamento) para bloquear el flujo sanguíneo al área anormal. Puede sentir calor y calambres mientras se bloquean los vasos. El procedimiento toma 1-3 horas.',
    patientExplanation: 'Embolization is a minimally invasive procedure where the doctor threads a thin tube through your blood vessels to reach an abnormal area and blocks the blood supply feeding it. For uterine fibroids, this shrinks the fibroids. For AVMs (abnormal tangles of blood vessels), this prevents dangerous bleeding.',
    spanishPatientExplanation: 'La embolización es un procedimiento mínimamente invasivo donde el médico pasa un tubo delgado a través de sus vasos sanguíneos hasta un área anormal y bloquea el suministro de sangre que la alimenta. Para fibromas uterinos, esto encoge los fibromas. Para MAV (madejas anormales de vasos sanguíneos), esto previene sangrados peligrosos.',
    preparation: 'Fasting for 6-8 hours. Blood work including kidney function. Pre-procedure MRI or angiography to map the target vessels. Stop blood thinners as directed. Inform your doctor about allergies to contrast dye. Pain medication plan is discussed before the procedure.',
    spanishPreparation: 'Ayuno de 6-8 horas. Análisis de sangre incluyendo función renal. RM o angiografía previa al procedimiento para mapear los vasos objetivo. Suspenda los anticoagulantes según las indicaciones. Informe a su médico sobre alergias al medio de contraste. El plan de manejo del dolor se discute antes del procedimiento.',
    risks: [
      'Post-embolization syndrome (pain, fever, nausea for days)',
      'Non-target embolization (blocking unintended vessels)',
      'Infection or abscess of embolized tissue',
      'Premature ovarian failure (uterine fibroid embolization)',
      'Vessel injury or dissection',
      'Contrast allergy or kidney injury',
      'Stroke (for brain AVM embolization)',
      'Incomplete treatment requiring additional procedures',
    ],
    spanishRisks: [
      'Síndrome post-embolización (dolor, fiebre, náuseas por días)',
      'Embolización no dirigida (bloqueo de vasos no intencionados)',
      'Infección o absceso del tejido embolizado',
      'Falla ovárica prematura (embolización de fibromas uterinos)',
      'Lesión o disección vascular',
      'Alergia al contraste o lesión renal',
      'Accidente cerebrovascular (para embolización de MAV cerebral)',
      'Tratamiento incompleto que requiere procedimientos adicionales',
    ],
    recovery: 'Overnight hospital stay is typical. Significant cramping and pain are common for 24-72 hours, managed with pain medication. For uterine fibroid embolization, return to normal activities in 1-2 weeks. Fibroids gradually shrink over 3-6 months. Follow-up imaging tracks treatment response.',
    spanishRecovery: 'Típicamente se requiere una noche de hospitalización. Los calambres y el dolor significativos son comunes durante 24-72 horas, controlados con medicación para el dolor. Para la embolización de fibromas uterinos, regreso a actividades normales en 1-2 semanas. Los fibromas se encogen gradualmente durante 3-6 meses. Las imágenes de seguimiento evalúan la respuesta al tratamiento.',
    alternatives: [
      'Surgical myomectomy (fibroid removal preserving uterus)',
      'Hysterectomy (for fibroids, definitive)',
      'Surgical resection of AVM',
      'Stereotactic radiosurgery (Gamma Knife for brain AVMs)',
      'Hormonal therapy (for fibroids)',
      'Observation (for asymptomatic fibroids or low-risk AVMs)',
    ],
    spanishAlternatives: [
      'Miomectomía quirúrgica (extirpación del fibroma preservando el útero)',
      'Histerectomía (para fibromas, definitiva)',
      'Resección quirúrgica de MAV',
      'Radiocirugía estereotáctica (Gamma Knife para MAV cerebrales)',
      'Terapia hormonal (para fibromas)',
      'Observación (para fibromas asintomáticos o MAV de bajo riesgo)',
    ],
  },

  {
    procedureId: 'ir-ivc-filter',
    name: 'IVC Filter Placement',
    spanishName: 'Colocación de filtro de vena cava inferior',
    category: 'therapeutic',
    description: 'A small metal filter is placed inside the inferior vena cava (IVC) to catch blood clots traveling from the legs toward the lungs, preventing pulmonary embolism.',
    spanishDescription: 'Se coloca un pequeño filtro metálico dentro de la vena cava inferior (VCI) para atrapar coágulos de sangre que viajan desde las piernas hacia los pulmones, previniendo embolia pulmonar.',
    specialties: ['interventional-radiology', 'vascular-surgery', 'hematology'],
    bodyRegions: ['vasculature', 'abdomen'],
    complexity: 'moderate',
    setting: ['interventional-radiology', 'hospital-inpatient'],
    anesthesia: ['local', 'sedation'],
    whatToExpect: 'A catheter is inserted through the groin or neck vein. Using fluoroscopy, the filter is deployed in the IVC below the kidney veins. You will feel pressure at the access site. The procedure takes 30-45 minutes. Most filters today are retrievable and can be removed when no longer needed.',
    spanishWhatToExpect: 'Se inserta un catéter a través de la vena de la ingle o del cuello. Usando fluoroscopía, el filtro se despliega en la VCI debajo de las venas renales. Sentirá presión en el sitio de acceso. El procedimiento toma 30-45 minutos. La mayoría de los filtros actuales son recuperables y pueden retirarse cuando ya no son necesarios.',
    patientExplanation: 'If you have blood clots in your legs and cannot take blood-thinning medication, a tiny umbrella-shaped filter can be placed in the large vein in your belly. It catches clots before they reach your lungs, which could be life-threatening. The filter can often be removed later when it is safe to take blood thinners.',
    spanishPatientExplanation: 'Si tiene coágulos de sangre en las piernas y no puede tomar anticoagulantes, se puede colocar un pequeño filtro en forma de paraguas en la vena grande de su abdomen. Atrapa los coágulos antes de que lleguen a sus pulmones, lo cual podría ser mortal. El filtro frecuentemente puede retirarse después cuando sea seguro tomar anticoagulantes.',
    preparation: 'Blood work including coagulation studies. Fasting for 4-6 hours. Inform your doctor about allergies to contrast dye. Review current blood clot history and anticoagulation status. The access site (groin or neck) is cleaned and prepped.',
    spanishPreparation: 'Análisis de sangre incluyendo estudios de coagulación. Ayuno de 4-6 horas. Informe a su médico sobre alergias al contraste. Revisión del historial actual de coágulos y estado de anticoagulación. El sitio de acceso (ingle o cuello) se limpia y prepara.',
    risks: [
      'Filter migration or tilting',
      'IVC perforation',
      'Filter fracture with fragment embolization',
      'IVC thrombosis (clotting of the entire vein)',
      'Access site bleeding or hematoma',
      'Difficulty retrieving the filter later',
      'Recurrent DVT or PE despite the filter',
    ],
    spanishRisks: [
      'Migración o inclinación del filtro',
      'Perforación de la VCI',
      'Fractura del filtro con embolización de fragmentos',
      'Trombosis de la VCI (coagulación de toda la vena)',
      'Sangrado o hematoma en el sitio de acceso',
      'Dificultad para recuperar el filtro posteriormente',
      'TVP o EP recurrente a pesar del filtro',
    ],
    recovery: 'Same-day discharge is common. Mild soreness at the access site for 1-2 days. Resume normal activities within 24 hours. A follow-up appointment is scheduled to discuss filter retrieval timing. Blood thinners are started when safe to do so.',
    spanishRecovery: 'El alta el mismo día es común. Dolor leve en el sitio de acceso durante 1-2 días. Reanude actividades normales en 24 horas. Se programa una cita de seguimiento para discutir el momento de la recuperación del filtro. Los anticoagulantes se inician cuando sea seguro hacerlo.',
    alternatives: [
      'Anticoagulation (blood thinners) as primary treatment',
      'Catheter-directed thrombolysis (dissolving the clot)',
      'Surgical thrombectomy (clot removal)',
      'Suprarenal IVC filter (if clot is above renal veins)',
    ],
    spanishAlternatives: [
      'Anticoagulación (anticoagulantes) como tratamiento primario',
      'Trombólisis dirigida por catéter (disolución del coágulo)',
      'Trombectomía quirúrgica (extracción del coágulo)',
      'Filtro de VCI suprarrenal (si el coágulo está por encima de las venas renales)',
    ],
  },

  // ============================================================
  // TUMOR ABLATION
  // ============================================================
  {
    procedureId: 'ir-radiofrequency-ablation',
    name: 'Radiofrequency Ablation (Liver, Kidney Tumors)',
    spanishName: 'Ablación por radiofrecuencia (tumores de hígado y riñón)',
    category: 'therapeutic',
    description: 'A needle electrode is inserted into a tumor under image guidance and delivers radiofrequency energy to heat and destroy cancer cells, used for small liver and kidney tumors.',
    spanishDescription: 'Se inserta un electrodo de aguja en un tumor bajo guía por imagen y administra energía de radiofrecuencia para calentar y destruir células cancerosas, utilizado para tumores pequeños de hígado y riñón.',
    specialties: ['interventional-radiology', 'oncology', 'hepatology', 'urology'],
    bodyRegions: ['liver', 'kidney', 'lung', 'bone'],
    complexity: 'high',
    setting: ['interventional-radiology', 'operating-room'],
    anesthesia: ['sedation', 'general'],
    whatToExpect: 'Under CT or ultrasound guidance, a thin needle is placed through the skin into the tumor. Radiofrequency energy heats the tumor tissue to high temperatures, destroying it. You may feel warmth and pressure. General anesthesia or deep sedation is used for comfort. The procedure takes 1-3 hours depending on tumor size and number.',
    spanishWhatToExpect: 'Bajo guía por TC o ultrasonido, se coloca una aguja delgada a través de la piel en el tumor. La energía de radiofrecuencia calienta el tejido tumoral a altas temperaturas, destruyéndolo. Puede sentir calor y presión. Se usa anestesia general o sedación profunda para comodidad. El procedimiento toma 1-3 horas dependiendo del tamaño y número de tumores.',
    patientExplanation: 'Radiofrequency ablation (RFA) is a way to destroy small tumors without surgery. A special needle is placed through your skin directly into the tumor using imaging guidance. The needle delivers heat energy that kills the tumor cells. It is a less invasive alternative to surgery for certain liver and kidney cancers.',
    spanishPatientExplanation: 'La ablación por radiofrecuencia (ARF) es una forma de destruir tumores pequeños sin cirugía. Se coloca una aguja especial a través de su piel directamente en el tumor usando guía por imagen. La aguja administra energía térmica que destruye las células tumorales. Es una alternativa menos invasiva a la cirugía para ciertos cánceres de hígado y riñón.',
    preparation: 'Fasting for 6-8 hours. Blood work including liver function, kidney function, and coagulation. Stop blood thinners 5-7 days before. Pre-procedure imaging (CT or MRI) to plan the approach. Arrange an overnight hospital stay.',
    spanishPreparation: 'Ayuno de 6-8 horas. Análisis de sangre incluyendo función hepática, función renal y coagulación. Suspenda los anticoagulantes 5-7 días antes. Imágenes previas al procedimiento (TC o RM) para planificar el abordaje. Organice una noche de hospitalización.',
    risks: [
      'Bleeding (liver or kidney hemorrhage)',
      'Thermal injury to adjacent organs (bowel, diaphragm, gallbladder)',
      'Infection or abscess at the ablation site',
      'Pneumothorax (for upper liver or lung tumors)',
      'Incomplete ablation requiring repeat treatment',
      'Post-ablation syndrome (fever, pain, malaise for days)',
      'Bile duct or ureter injury',
      'Tumor recurrence at the ablation margin',
    ],
    spanishRisks: [
      'Sangrado (hemorragia hepática o renal)',
      'Lesión térmica a órganos adyacentes (intestino, diafragma, vesícula biliar)',
      'Infección o absceso en el sitio de ablación',
      'Neumotórax (para tumores del hígado superior o pulmón)',
      'Ablación incompleta que requiere tratamiento repetido',
      'Síndrome post-ablación (fiebre, dolor, malestar por días)',
      'Lesión del conducto biliar o uréter',
      'Recurrencia tumoral en el margen de ablación',
    ],
    recovery: 'Overnight hospital observation. Moderate pain managed with medication for 3-5 days. Avoid strenuous activity for 1-2 weeks. Follow-up CT or MRI at 1 month, then every 3-6 months to monitor for recurrence. Most patients return to normal activities in 1 week.',
    spanishRecovery: 'Observación hospitalaria de una noche. Dolor moderado controlado con medicación durante 3-5 días. Evite actividades extenuantes durante 1-2 semanas. TC o RM de seguimiento al mes, luego cada 3-6 meses para monitorear recurrencia. La mayoría de los pacientes regresan a actividades normales en 1 semana.',
    alternatives: [
      'Surgical resection (partial hepatectomy or nephrectomy)',
      'Cryoablation (freezing instead of heating)',
      'Microwave ablation (alternative heat-based method)',
      'Stereotactic body radiation therapy (SBRT)',
      'Transarterial chemoembolization (TACE) for liver tumors',
      'Systemic chemotherapy or immunotherapy',
      'Active surveillance for very small tumors',
    ],
    spanishAlternatives: [
      'Resección quirúrgica (hepatectomía o nefrectomía parcial)',
      'Crioablación (congelación en lugar de calentamiento)',
      'Ablación por microondas (método alternativo basado en calor)',
      'Radioterapia corporal estereotáctica (SBRT)',
      'Quimioembolización transarterial (TACE) para tumores hepáticos',
      'Quimioterapia sistémica o inmunoterapia',
      'Vigilancia activa para tumores muy pequeños',
    ],
  },

  {
    procedureId: 'ir-cryoablation',
    name: 'Cryoablation',
    spanishName: 'Crioablación',
    category: 'therapeutic',
    description: 'Image-guided insertion of a probe that uses extreme cold (argon gas) to freeze and destroy tumor tissue, commonly used for kidney, lung, liver, and bone tumors.',
    spanishDescription: 'Inserción guiada por imagen de una sonda que utiliza frío extremo (gas argón) para congelar y destruir tejido tumoral, comúnmente utilizada para tumores de riñón, pulmón, hígado y hueso.',
    specialties: ['interventional-radiology', 'oncology', 'urology'],
    bodyRegions: ['kidney', 'lung', 'liver', 'bone', 'soft-tissue'],
    complexity: 'high',
    setting: ['interventional-radiology', 'operating-room'],
    anesthesia: ['sedation', 'general'],
    whatToExpect: 'One or more thin cryoprobes are placed through the skin into the tumor using CT guidance. Argon gas circulates through the probes, creating an ice ball that engulfs the tumor. The freeze-thaw cycle is repeated. You will be under sedation or general anesthesia. The ice ball is visible on CT to confirm coverage. Takes 1-3 hours.',
    spanishWhatToExpect: 'Una o más criosondas delgadas se colocan a través de la piel en el tumor usando guía por TC. Gas argón circula a través de las sondas, creando una bola de hielo que envuelve el tumor. El ciclo de congelación-descongelación se repite. Estará bajo sedación o anestesia general. La bola de hielo es visible en TC para confirmar la cobertura. Toma 1-3 horas.',
    patientExplanation: 'Cryoablation destroys tumors by freezing them. The doctor inserts thin needles through your skin into the tumor, then circulates extremely cold gas to form an ice ball that kills the cancer cells. The advantage of freezing is that the doctor can see the ice ball on the CT scan in real time to confirm the entire tumor is covered.',
    spanishPatientExplanation: 'La crioablación destruye tumores congelándolos. El médico inserta agujas delgadas a través de su piel en el tumor, luego circula gas extremadamente frío para formar una bola de hielo que mata las células cancerosas. La ventaja de la congelación es que el médico puede ver la bola de hielo en el TC en tiempo real para confirmar que todo el tumor está cubierto.',
    preparation: 'Fasting for 6-8 hours. Blood work including coagulation and kidney function. Stop blood thinners 5-7 days before. Pre-procedure CT or MRI for planning. Arrange overnight hospital stay. Discuss pain management plan.',
    spanishPreparation: 'Ayuno de 6-8 horas. Análisis de sangre incluyendo coagulación y función renal. Suspenda los anticoagulantes 5-7 días antes. TC o RM previa al procedimiento para planificación. Organice una noche de hospitalización. Discuta el plan de manejo del dolor.',
    risks: [
      'Bleeding or hemorrhage',
      'Damage to adjacent structures (ureter, bowel, nerve)',
      'Incomplete ablation or tumor recurrence',
      'Infection',
      'Pneumothorax (for lung or upper abdominal tumors)',
      'Cryoshock (rare systemic reaction to tissue destruction)',
      'Fracture (for bone cryoablation)',
      'Numbness or neuropathy if near nerves',
    ],
    spanishRisks: [
      'Sangrado o hemorragia',
      'Daño a estructuras adyacentes (uréter, intestino, nervio)',
      'Ablación incompleta o recurrencia tumoral',
      'Infección',
      'Neumotórax (para tumores pulmonares o abdominales superiores)',
      'Crioshock (reacción sistémica rara a la destrucción de tejido)',
      'Fractura (para crioablación ósea)',
      'Entumecimiento o neuropatía si está cerca de nervios',
    ],
    recovery: 'Overnight hospital observation. Pain at the ablation site for several days, managed with medication. Avoid strenuous activity for 1-2 weeks. Follow-up imaging at 1 month and then every 3-6 months. Most patients return to normal activities in about 1 week.',
    spanishRecovery: 'Observación hospitalaria de una noche. Dolor en el sitio de ablación durante varios días, controlado con medicación. Evite actividades extenuantes durante 1-2 semanas. Imágenes de seguimiento al mes y luego cada 3-6 meses. La mayoría de los pacientes regresan a actividades normales en aproximadamente 1 semana.',
    alternatives: [
      'Radiofrequency ablation (heat-based)',
      'Microwave ablation',
      'Surgical resection',
      'Stereotactic body radiation therapy (SBRT)',
      'Systemic therapy (chemotherapy, immunotherapy)',
      'Active surveillance',
    ],
    spanishAlternatives: [
      'Ablación por radiofrecuencia (basada en calor)',
      'Ablación por microondas',
      'Resección quirúrgica',
      'Radioterapia corporal estereotáctica (SBRT)',
      'Terapia sistémica (quimioterapia, inmunoterapia)',
      'Vigilancia activa',
    ],
  },

  // ============================================================
  // HEPATOBILIARY & PORTAL INTERVENTIONS
  // ============================================================
  {
    procedureId: 'ir-tips',
    name: 'TIPS Procedure (Transjugular Intrahepatic Portosystemic Shunt)',
    spanishName: 'Procedimiento TIPS (derivación portosistémica intrahepática transyugular)',
    category: 'therapeutic',
    description: 'A shunt is created within the liver connecting the portal vein to a hepatic vein, reducing portal hypertension and treating complications such as variceal bleeding and refractory ascites.',
    spanishDescription: 'Se crea una derivación dentro del hígado conectando la vena porta con una vena hepática, reduciendo la hipertensión portal y tratando complicaciones como sangrado por varices y ascitis refractaria.',
    specialties: ['interventional-radiology', 'hepatology', 'gastroenterology'],
    bodyRegions: ['liver', 'vasculature'],
    complexity: 'very-high',
    setting: ['interventional-radiology', 'hospital-inpatient'],
    anesthesia: ['general', 'sedation'],
    whatToExpect: 'A catheter is inserted through the jugular vein in the neck and guided into a liver vein. A needle is passed through the liver tissue to connect the hepatic vein to the portal vein. A stent is placed to keep this channel open. This is performed under general anesthesia or deep sedation. The procedure takes 2-4 hours.',
    spanishWhatToExpect: 'Se inserta un catéter a través de la vena yugular en el cuello y se guía hacia una vena hepática. Se pasa una aguja a través del tejido hepático para conectar la vena hepática con la vena porta. Se coloca un stent para mantener este canal abierto. Se realiza bajo anestesia general o sedación profunda. El procedimiento toma 2-4 horas.',
    patientExplanation: 'When liver disease causes high pressure in the veins around your liver (portal hypertension), it can lead to dangerous bleeding or fluid buildup in your belly. A TIPS procedure creates a new pathway inside your liver to reroute blood flow and relieve this pressure, helping stop or prevent bleeding and reduce fluid accumulation.',
    spanishPatientExplanation: 'Cuando la enfermedad hepática causa alta presión en las venas alrededor del hígado (hipertensión portal), puede provocar sangrado peligroso o acumulación de líquido en el abdomen. El procedimiento TIPS crea un nuevo camino dentro del hígado para redirigir el flujo sanguíneo y aliviar esta presión, ayudando a detener o prevenir sangrados y reducir la acumulación de líquido.',
    preparation: 'Fasting for 8 hours. Extensive blood work including liver function, coagulation (INR, platelets), and kidney function. Cross-matched blood is available. Echocardiogram to assess heart function. Paracentesis may be done first to drain ascites. Antibiotics given before the procedure.',
    spanishPreparation: 'Ayuno de 8 horas. Análisis de sangre extensos incluyendo función hepática, coagulación (INR, plaquetas) y función renal. Sangre cruzada disponible. Ecocardiograma para evaluar la función cardíaca. Se puede realizar paracentesis primero para drenar la ascitis. Antibióticos administrados antes del procedimiento.',
    risks: [
      'Hepatic encephalopathy (confusion from toxins bypassing liver)',
      'Bleeding (liver capsule perforation)',
      'Shunt stenosis or occlusion requiring revision',
      'Worsening liver failure',
      'Heart failure from increased blood return to heart',
      'Infection or sepsis',
      'Contrast-induced kidney injury',
      'Intra-abdominal hemorrhage',
      'Death (1-2% procedure-related mortality)',
    ],
    spanishRisks: [
      'Encefalopatía hepática (confusión por toxinas que evitan el hígado)',
      'Sangrado (perforación de la cápsula hepática)',
      'Estenosis u oclusión de la derivación que requiere revisión',
      'Empeoramiento de la insuficiencia hepática',
      'Insuficiencia cardíaca por aumento del retorno sanguíneo al corazón',
      'Infección o sepsis',
      'Lesión renal inducida por contraste',
      'Hemorragia intraabdominal',
      'Muerte (mortalidad relacionada con el procedimiento 1-2%)',
    ],
    recovery: 'ICU or monitored bed for 1-2 days. Hospital stay of 3-7 days. Lactulose is given to prevent hepatic encephalopathy. Low-protein diet may be recommended initially. Doppler ultrasound at 1 week, then every 3-6 months to check shunt patency. Lifelong follow-up with hepatology.',
    spanishRecovery: 'UCI o cama monitorizada durante 1-2 días. Hospitalización de 3-7 días. Se administra lactulosa para prevenir la encefalopatía hepática. Puede recomendarse una dieta baja en proteínas inicialmente. Ultrasonido Doppler a la semana, luego cada 3-6 meses para verificar la permeabilidad de la derivación. Seguimiento de por vida con hepatología.',
    alternatives: [
      'Endoscopic variceal band ligation (for bleeding varices)',
      'Large-volume paracentesis (for ascites)',
      'Balloon-occluded retrograde transvenous obliteration (BRTO)',
      'Surgical portosystemic shunt',
      'Liver transplantation (definitive)',
      'Medical management (diuretics, beta-blockers, lactulose)',
    ],
    spanishAlternatives: [
      'Ligadura endoscópica de varices (para varices sangrantes)',
      'Paracentesis de gran volumen (para ascitis)',
      'Obliteración transvenosa retrógrada con oclusión por balón (BRTO)',
      'Derivación portosistémica quirúrgica',
      'Trasplante hepático (definitivo)',
      'Manejo médico (diuréticos, beta-bloqueadores, lactulosa)',
    ],
  },

  {
    procedureId: 'ir-biliary-drain-stent',
    name: 'Biliary Drain / Stent Placement',
    spanishName: 'Drenaje biliar / Colocación de stent biliar',
    category: 'therapeutic',
    description: 'Percutaneous transhepatic access to the biliary system to place a drain or stent, relieving bile duct obstruction caused by tumors, stones, or strictures.',
    spanishDescription: 'Acceso transhepático percutáneo al sistema biliar para colocar un drenaje o stent, aliviando la obstrucción del conducto biliar causada por tumores, cálculos o estenosis.',
    specialties: ['interventional-radiology', 'gastroenterology', 'oncology', 'surgery'],
    bodyRegions: ['liver', 'biliary-system', 'abdomen'],
    complexity: 'high',
    setting: ['interventional-radiology', 'hospital-inpatient'],
    anesthesia: ['local', 'sedation'],
    whatToExpect: 'Under ultrasound and fluoroscopic guidance, a needle is inserted through the skin and liver into a bile duct. Contrast is injected to map the blockage. A guidewire is advanced past the obstruction, and a drain or stent is placed. You will feel pressure and discomfort. The procedure takes 1-2 hours.',
    spanishWhatToExpect: 'Bajo guía por ultrasonido y fluoroscopía, se inserta una aguja a través de la piel y el hígado hacia un conducto biliar. Se inyecta contraste para mapear la obstrucción. Se avanza un alambre guía más allá de la obstrucción y se coloca un drenaje o stent. Sentirá presión e incomodidad. El procedimiento toma 1-2 horas.',
    patientExplanation: 'When a bile duct is blocked (often by a tumor or stone), bile cannot drain from the liver, causing jaundice (yellow skin), itching, and infection risk. This procedure places a tube or expandable metal mesh through the blockage to restore bile flow, either draining into a bag outside the body or internally into the intestine.',
    spanishPatientExplanation: 'Cuando un conducto biliar está bloqueado (frecuentemente por un tumor o cálculo), la bilis no puede drenar del hígado, causando ictericia (piel amarilla), picazón y riesgo de infección. Este procedimiento coloca un tubo o malla metálica expandible a través de la obstrucción para restaurar el flujo de bilis, drenando hacia una bolsa fuera del cuerpo o internamente hacia el intestino.',
    preparation: 'Fasting for 6-8 hours. Blood work including liver function, bilirubin, coagulation (INR, platelets), and kidney function. Antibiotics before the procedure. Correct any severe coagulopathy. Stop blood thinners as directed. Pre-procedure imaging (CT or MRCP) to map the biliary anatomy.',
    spanishPreparation: 'Ayuno de 6-8 horas. Análisis de sangre incluyendo función hepática, bilirrubina, coagulación (INR, plaquetas) y función renal. Antibióticos antes del procedimiento. Corregir cualquier coagulopatía severa. Suspenda los anticoagulantes según las indicaciones. Imágenes previas al procedimiento (TC o CPRM) para mapear la anatomía biliar.',
    risks: [
      'Cholangitis (bile duct infection) or sepsis',
      'Bleeding (hepatic hemorrhage)',
      'Bile leak or biliary peritonitis',
      'Pneumothorax or pleural effusion',
      'Catheter dislodgement or occlusion',
      'Pancreatitis (if stent crosses the ampulla)',
      'Pain at the access site',
      'Stent migration',
    ],
    spanishRisks: [
      'Colangitis (infección del conducto biliar) o sepsis',
      'Sangrado (hemorragia hepática)',
      'Fuga biliar o peritonitis biliar',
      'Neumotórax o derrame pleural',
      'Desplazamiento u oclusión del catéter',
      'Pancreatitis (si el stent cruza la ampolla)',
      'Dolor en el sitio de acceso',
      'Migración del stent',
    ],
    recovery: 'Hospital stay of 2-5 days. External drains require daily flushing and bag emptying. Jaundice improves over days to weeks as bile flow is restored. Follow-up labs monitor bilirubin and liver enzymes. Drain exchange or stent revision may be needed every 3-6 months for long-term use.',
    spanishRecovery: 'Hospitalización de 2-5 días. Los drenajes externos requieren lavado diario y vaciado de bolsa. La ictericia mejora en días a semanas a medida que se restaura el flujo biliar. Análisis de seguimiento monitorean bilirrubina y enzimas hepáticas. Puede necesitarse cambio de drenaje o revisión del stent cada 3-6 meses para uso a largo plazo.',
    alternatives: [
      'ERCP with endoscopic stent placement',
      'Surgical biliary bypass (choledochojejunostomy)',
      'Surgical resection of the obstructing tumor',
      'EUS-guided biliary drainage',
      'Palliative care without intervention',
    ],
    spanishAlternatives: [
      'CPRE con colocación endoscópica de stent',
      'Derivación biliar quirúrgica (coledocoyeyunostomía)',
      'Resección quirúrgica del tumor obstructivo',
      'Drenaje biliar guiado por EUS',
      'Cuidados paliativos sin intervención',
    ],
  },

  // ============================================================
  // SPINE INTERVENTIONS
  // ============================================================
  {
    procedureId: 'ir-vertebroplasty-kyphoplasty',
    name: 'Vertebroplasty / Kyphoplasty',
    spanishName: 'Vertebroplastia / Cifoplastia',
    category: 'therapeutic',
    description: 'Percutaneous injection of bone cement into a collapsed vertebral body to stabilize fractures and relieve pain. Kyphoplasty uses a balloon to restore vertebral height before cement injection.',
    spanishDescription: 'Inyección percutánea de cemento óseo en un cuerpo vertebral colapsado para estabilizar fracturas y aliviar el dolor. La cifoplastia usa un balón para restaurar la altura vertebral antes de la inyección de cemento.',
    specialties: ['interventional-radiology', 'neurosurgery', 'orthopedics', 'pain-management'],
    bodyRegions: ['spine', 'thoracic', 'lumbar'],
    complexity: 'moderate',
    setting: ['interventional-radiology', 'operating-room'],
    anesthesia: ['local', 'sedation', 'general'],
    whatToExpect: 'Lying face down, the skin over your back is numbed. Under fluoroscopic guidance, a needle is placed through the skin into the fractured vertebra. For kyphoplasty, a balloon is inflated first to create space and restore height. Bone cement is injected and hardens within minutes. The procedure takes 30-60 minutes per vertebra.',
    spanishWhatToExpect: 'Acostado boca abajo, la piel sobre su espalda se adormece. Bajo guía fluoroscópica, se coloca una aguja a través de la piel hacia la vértebra fracturada. Para la cifoplastia, primero se infla un balón para crear espacio y restaurar la altura. Se inyecta cemento óseo que endurece en minutos. El procedimiento toma 30-60 minutos por vértebra.',
    patientExplanation: 'When a vertebra in your spine collapses from osteoporosis or a tumor, it can cause severe pain. This procedure stabilizes the broken bone by injecting medical-grade cement into the fracture. Kyphoplasty adds a step where a small balloon is inflated first to lift the collapsed bone back toward its normal height before the cement is injected.',
    spanishPatientExplanation: 'Cuando una vértebra de su columna colapsa por osteoporosis o un tumor, puede causar dolor severo. Este procedimiento estabiliza el hueso fracturado inyectando cemento de grado médico en la fractura. La cifoplastia agrega un paso donde primero se infla un pequeño balón para elevar el hueso colapsado hacia su altura normal antes de inyectar el cemento.',
    preparation: 'Fasting for 6-8 hours. Blood work including coagulation. Pre-procedure MRI to confirm the fracture is acute (not old and healed). Stop blood thinners as directed. Inform your doctor about allergies, especially to bone cement components. Antibiotics may be given.',
    spanishPreparation: 'Ayuno de 6-8 horas. Análisis de sangre incluyendo coagulación. RM previa al procedimiento para confirmar que la fractura es aguda (no antigua y cicatrizada). Suspenda los anticoagulantes según las indicaciones. Informe a su médico sobre alergias, especialmente a componentes del cemento óseo. Se pueden administrar antibióticos.',
    risks: [
      'Cement leakage into spinal canal or veins',
      'Nerve injury or spinal cord compression',
      'Infection (osteomyelitis, discitis)',
      'Pulmonary cement embolism (rare)',
      'Adjacent-level vertebral fracture',
      'Bleeding',
      'Allergic reaction to cement',
      'Worsening pain',
    ],
    spanishRisks: [
      'Fuga de cemento al canal espinal o venas',
      'Lesión nerviosa o compresión de la médula espinal',
      'Infección (osteomielitis, discitis)',
      'Embolia pulmonar por cemento (raro)',
      'Fractura vertebral del nivel adyacente',
      'Sangrado',
      'Reacción alérgica al cemento',
      'Empeoramiento del dolor',
    ],
    recovery: 'Many patients experience significant pain relief within 24-48 hours. Same-day or next-day discharge is common. Rest for 24 hours, then gradually increase activity. Avoid heavy lifting for 2 weeks. Osteoporosis treatment is essential to prevent future fractures. Follow up in 2-4 weeks.',
    spanishRecovery: 'Muchos pacientes experimentan un alivio significativo del dolor en 24-48 horas. El alta el mismo día o al día siguiente es común. Descanse 24 horas, luego aumente la actividad gradualmente. Evite levantar objetos pesados durante 2 semanas. El tratamiento de la osteoporosis es esencial para prevenir futuras fracturas. Seguimiento en 2-4 semanas.',
    alternatives: [
      'Conservative treatment (pain medication, bracing, physical therapy)',
      'Surgical spinal fusion or stabilization',
      'Radiation therapy (for tumor-related fractures)',
      'Nerve block or epidural steroid injection',
      'Bisphosphonate or denosumab therapy for osteoporosis',
    ],
    spanishAlternatives: [
      'Tratamiento conservador (medicamentos para el dolor, corsé, fisioterapia)',
      'Fusión espinal quirúrgica o estabilización',
      'Radioterapia (para fracturas relacionadas con tumores)',
      'Bloqueo nervioso o inyección epidural de esteroides',
      'Terapia con bisfosfonatos o denosumab para osteoporosis',
    ],
  },

  // ============================================================
  // DIALYSIS ACCESS
  // ============================================================
  {
    procedureId: 'ir-dialysis-access',
    name: 'Dialysis Access (AV Fistula Creation)',
    spanishName: 'Acceso para diálisis (creación de fístula arteriovenosa)',
    category: 'therapeutic',
    description: 'Surgical or endovascular creation of an arteriovenous fistula connecting an artery to a vein in the arm, creating a high-flow access point for hemodialysis.',
    spanishDescription: 'Creación quirúrgica o endovascular de una fístula arteriovenosa que conecta una arteria con una vena en el brazo, creando un punto de acceso de alto flujo para hemodiálisis.',
    specialties: ['interventional-radiology', 'vascular-surgery', 'nephrology'],
    bodyRegions: ['upper-extremity', 'vasculature'],
    complexity: 'moderate',
    setting: ['interventional-radiology', 'operating-room'],
    anesthesia: ['local', 'regional'],
    whatToExpect: 'An incision is made in the forearm or upper arm. An artery is connected directly to a nearby vein, creating a fistula. Alternatively, percutaneous endovascular techniques use catheter-based tools to create the connection. The fistula takes 6-12 weeks to mature before it can be used for dialysis. The procedure takes 1-2 hours.',
    spanishWhatToExpect: 'Se hace una incisión en el antebrazo o brazo superior. Se conecta una arteria directamente a una vena cercana, creando una fístula. Alternativamente, las técnicas endovasculares percutáneas usan herramientas basadas en catéter para crear la conexión. La fístula toma 6-12 semanas para madurar antes de poder usarse para diálisis. El procedimiento toma 1-2 horas.',
    patientExplanation: 'When kidneys fail and you need dialysis, a strong access point is needed to filter your blood. A fistula is made by connecting an artery to a vein in your arm. Over several weeks, the vein grows larger and stronger, creating a reliable site where dialysis needles can be placed three times a week.',
    spanishPatientExplanation: 'Cuando los riñones fallan y necesita diálisis, se necesita un punto de acceso fuerte para filtrar su sangre. Se hace una fístula conectando una arteria a una vena en su brazo. Durante varias semanas, la vena crece más grande y fuerte, creando un sitio confiable donde se pueden colocar las agujas de diálisis tres veces por semana.',
    preparation: 'Pre-operative vein mapping with ultrasound. Blood work including kidney function and coagulation. Preserve arm veins: avoid blood draws and IVs in the planned fistula arm before surgery. Stop blood thinners as directed. No eating 6-8 hours before if sedation is planned.',
    spanishPreparation: 'Mapeo preoperatorio de venas con ultrasonido. Análisis de sangre incluyendo función renal y coagulación. Preserve las venas del brazo: evite extracciones de sangre e IVs en el brazo planeado para la fístula antes de la cirugía. Suspenda los anticoagulantes según las indicaciones. No comer 6-8 horas antes si se planea sedación.',
    risks: [
      'Fistula failure to mature (does not develop adequate flow)',
      'Stenosis (narrowing) of the fistula or veins',
      'Thrombosis (clotting) of the fistula',
      'Steal syndrome (hand ischemia from redirected blood flow)',
      'Infection',
      'Bleeding or hematoma',
      'Aneurysm or pseudoaneurysm formation',
      'Arm swelling',
    ],
    spanishRisks: [
      'Fallo de maduración de la fístula (no desarrolla flujo adecuado)',
      'Estenosis (estrechamiento) de la fístula o venas',
      'Trombosis (coagulación) de la fístula',
      'Síndrome de robo (isquemia de la mano por flujo sanguíneo redirigido)',
      'Infección',
      'Sangrado o hematoma',
      'Formación de aneurisma o pseudoaneurisma',
      'Hinchazón del brazo',
    ],
    recovery: 'Mild soreness for a few days. Sutures removed in 10-14 days. Exercise the fistula arm by squeezing a ball to help maturation. Protect the fistula arm from injury, blood draws, or blood pressure cuffs. The fistula is checked with ultrasound at 4-6 weeks and typically ready for use at 8-12 weeks.',
    spanishRecovery: 'Dolor leve durante unos días. Suturas retiradas en 10-14 días. Ejercite el brazo de la fístula apretando una pelota para ayudar a la maduración. Proteja el brazo de la fístula de lesiones, extracciones de sangre o manguitos de presión. La fístula se verifica con ultrasonido a las 4-6 semanas y típicamente está lista para uso a las 8-12 semanas.',
    alternatives: [
      'AV graft (synthetic tube connecting artery to vein, matures faster)',
      'Tunneled dialysis catheter (temporary bridge to fistula maturation)',
      'Peritoneal dialysis (catheter in abdomen, no arm access needed)',
      'Kidney transplant (eliminates need for dialysis)',
    ],
    spanishAlternatives: [
      'Injerto AV (tubo sintético conectando arteria a vena, madura más rápido)',
      'Catéter de diálisis tunelizado (puente temporal a la maduración de la fístula)',
      'Diálisis peritoneal (catéter en abdomen, no se necesita acceso en el brazo)',
      'Trasplante renal (elimina la necesidad de diálisis)',
    ],
  },

  // ============================================================
  // URINARY INTERVENTIONS
  // ============================================================
  {
    procedureId: 'ir-nephrostomy-tube',
    name: 'Nephrostomy Tube Placement',
    spanishName: 'Colocación de tubo de nefrostomía',
    category: 'therapeutic',
    description: 'Image-guided placement of a drainage tube through the skin and into the kidney collecting system to relieve urinary obstruction when the normal pathway is blocked.',
    spanishDescription: 'Colocación guiada por imagen de un tubo de drenaje a través de la piel hacia el sistema colector renal para aliviar la obstrucción urinaria cuando la vía normal está bloqueada.',
    specialties: ['interventional-radiology', 'urology', 'oncology'],
    bodyRegions: ['kidney', 'urinary', 'flank'],
    complexity: 'moderate',
    setting: ['interventional-radiology', 'hospital-inpatient'],
    anesthesia: ['local', 'sedation'],
    whatToExpect: 'Lying on your stomach or side, the skin over your flank is numbed. Under ultrasound and fluoroscopic guidance, a needle is advanced into the kidney. Contrast confirms position within the collecting system, and a drainage catheter is placed. Urine drains into an external bag. The procedure takes 30-60 minutes.',
    spanishWhatToExpect: 'Acostado boca abajo o de lado, la piel sobre su costado se adormece. Bajo guía por ultrasonido y fluoroscopía, se avanza una aguja hacia el riñón. El contraste confirma la posición dentro del sistema colector y se coloca un catéter de drenaje. La orina drena hacia una bolsa externa. El procedimiento toma 30-60 minutos.',
    patientExplanation: 'When urine cannot drain from your kidney through the normal route (because of a stone, tumor, or swelling), pressure builds up and can damage the kidney. This procedure places a small tube through your back into the kidney to let urine drain into a bag, relieving pressure and protecting your kidney.',
    spanishPatientExplanation: 'Cuando la orina no puede drenar de su riñón por la ruta normal (debido a un cálculo, tumor o hinchazón), la presión se acumula y puede dañar el riñón. Este procedimiento coloca un tubo pequeño a través de su espalda hacia el riñón para permitir que la orina drene hacia una bolsa, aliviando la presión y protegiendo su riñón.',
    preparation: 'Blood work including kidney function, coagulation, and CBC. Antibiotics are given before the procedure to prevent infection. Fasting for 4-6 hours if sedation is planned. Stop blood thinners as directed. Urine culture may be obtained.',
    spanishPreparation: 'Análisis de sangre incluyendo función renal, coagulación y hemograma. Se administran antibióticos antes del procedimiento para prevenir infección. Ayuno de 4-6 horas si se planea sedación. Suspenda los anticoagulantes según las indicaciones. Se puede obtener un cultivo de orina.',
    risks: [
      'Bleeding (kidney is a very vascular organ)',
      'Infection (pyelonephritis, sepsis)',
      'Tube dislodgement',
      'Injury to adjacent organs (colon, pleura, spleen)',
      'Urine leak around the tube',
      'Loss of renal function if kidney is severely damaged',
      'Pain at the tube site',
    ],
    spanishRisks: [
      'Sangrado (el riñón es un órgano muy vascular)',
      'Infección (pielonefritis, sepsis)',
      'Desplazamiento del tubo',
      'Lesión a órganos adyacentes (colon, pleura, bazo)',
      'Fuga de orina alrededor del tubo',
      'Pérdida de función renal si el riñón está severamente dañado',
      'Dolor en el sitio del tubo',
    ],
    recovery: 'Hospital stay of 1-3 days. The drainage bag is emptied regularly. The tube is flushed periodically. It may be temporary (removed once the obstruction is treated) or long-term. Tube exchange is needed every 2-3 months for long-term use. Report fever, cloudy urine, or blood in the drainage bag.',
    spanishRecovery: 'Hospitalización de 1-3 días. La bolsa de drenaje se vacía regularmente. El tubo se lava periódicamente. Puede ser temporal (se retira una vez que se trata la obstrucción) o a largo plazo. Se necesita cambio de tubo cada 2-3 meses para uso a largo plazo. Reporte fiebre, orina turbia o sangre en la bolsa de drenaje.',
    alternatives: [
      'Ureteral stent (internal stent placed cystoscopically)',
      'Surgical relief of obstruction (stone removal, tumor resection)',
      'Urinary diversion surgery',
      'Conservative management with antibiotics (if infection is the primary concern)',
    ],
    spanishAlternatives: [
      'Stent ureteral (stent interno colocado por cistoscopía)',
      'Alivio quirúrgico de la obstrucción (extracción de cálculos, resección tumoral)',
      'Cirugía de derivación urinaria',
      'Manejo conservador con antibióticos (si la infección es la preocupación principal)',
    ],
  },
];

// --- Lookup Helpers ---

/** Find an IR procedure by its procedureId */
export function findIRProcedure(id: string): IRProcedureEntry | undefined {
  return IR_PROCEDURES.find(p => p.procedureId === id);
}

/** Get all IR procedures matching a given complexity level */
export function getIRProceduresByComplexity(level: ComplexityLevel): IRProcedureEntry[] {
  return IR_PROCEDURES.filter(p => p.complexity === level);
}

/** Get all IR procedures involving a given body region */
export function getIRProceduresByBodyRegion(region: string): IRProcedureEntry[] {
  return IR_PROCEDURES.filter(p => p.bodyRegions.includes(region));
}

/** Get all IR procedures by category */
export function getIRProceduresByCategory(category: ProcedureCategory): IRProcedureEntry[] {
  return IR_PROCEDURES.filter(p => p.category === category);
}
