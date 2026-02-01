/**
 * Biological Self - Endoscopic and Minimally Invasive Procedures Database
 * Comprehensive endoscopy, laparoscopy, arthroscopy, and catheter-based procedures
 */

import type {
  ProcedureCategory,
  ComplexityLevel,
  AnesthesiaType,
  SettingType,
} from './procedure-database';

export interface EndoscopicProcedureEntry {
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

  // Coding
  icd10pcs?: string;
  cptCodes?: string[];

  // Patient education
  whatToExpect: string;
  spanishWhatToExpect: string;
  patientExplanation: string;
  spanishPatientExplanation: string;

  // Extended fields
  preparation: string;
  spanishPreparation: string;
  preProcedure: string;
  spanishPreProcedure: string;
  postProcedure: string;
  spanishPostProcedure: string;
  complications: string[];
  spanishComplications: string[];
  contraindications: string[];
  spanishContraindications: string[];
  recovery: string;
  spanishRecovery: string;
}

export const ENDOSCOPIC_PROCEDURES: EndoscopicProcedureEntry[] = [

  // ============================================================
  // GASTROINTESTINAL ENDOSCOPY
  // ============================================================
  {
    procedureId: 'endo-egd',
    name: 'Esophagogastroduodenoscopy (EGD/Upper Endoscopy)',
    spanishName: 'Esofagogastroduodenoscopia (EGD/Endoscopia digestiva alta)',
    category: 'diagnostic',
    description: 'Visual examination of the esophagus, stomach, and duodenum using a flexible endoscope for diagnosis, biopsy, and treatment.',
    spanishDescription: 'Examen visual del esófago, estómago y duodeno usando un endoscopio flexible para diagnóstico, biopsia y tratamiento.',
    specialties: ['gastroenterology'],
    bodyRegions: ['esophagus', 'stomach', 'duodenum'],
    complexity: 'moderate',
    setting: ['endoscopy-suite', 'outpatient-surgery-center'],
    anesthesia: ['sedation', 'topical'],
    icd10pcs: '0DJ',
    cptCodes: ['43235', '43239'],
    whatToExpect: 'You will lie on your left side. A mouth guard protects your teeth. Sedation is given through an IV. The flexible scope passes through your mouth into your esophagus, stomach, and first part of small intestine. Air inflates the organs for better visualization. The procedure takes 10-20 minutes.',
    spanishWhatToExpect: 'Se acostará sobre su lado izquierdo. Un protector bucal protege sus dientes. Se administra sedación a través de una vía IV. El endoscopio flexible pasa por su boca hacia el esófago, estómago y primera parte del intestino delgado. El aire infla los órganos para mejor visualización. El procedimiento toma 10-20 minutos.',
    patientExplanation: 'An upper endoscopy lets your doctor examine the lining of your upper digestive tract using a thin, flexible tube with a camera. It helps find ulcers, inflammation, tumors, bleeding, and other problems. Small tissue samples (biopsies) can be taken, and some treatments can be done during the procedure.',
    spanishPatientExplanation: 'Una endoscopia digestiva alta permite a su médico examinar el revestimiento de su tracto digestivo superior usando un tubo delgado y flexible con cámara. Ayuda a encontrar úlceras, inflamación, tumores, sangrado y otros problemas. Se pueden tomar pequeñas muestras de tejido (biopsias) y algunos tratamientos pueden realizarse durante el procedimiento.',
    preparation: 'Nothing to eat or drink for 6-8 hours before the procedure to ensure an empty stomach. Remove dentures, glasses, and jewelry. Arrange for someone to drive you home. Inform your doctor about blood thinners, allergies, and medical conditions.',
    spanishPreparation: 'Nada de comer o beber por 6-8 horas antes del procedimiento para asegurar un estómago vacío. Retire dentaduras postizas, lentes y joyería. Organice a alguien para que lo lleve a casa. Informe a su médico sobre anticoagulantes, alergias y condiciones médicas.',
    preProcedure: 'Vital signs checked. IV started. Consent reviewed. Throat sprayed with local anesthetic. Monitoring devices attached. Sedation administered by anesthesia provider.',
    spanishPreProcedure: 'Signos vitales verificados. Vía IV iniciada. Consentimiento revisado. Garganta rociada con anestésico local. Dispositivos de monitoreo conectados. Sedación administrada por proveedor de anestesia.',
    postProcedure: 'Recovery in observation area until sedation wears off (30-60 minutes). Throat may be sore. Bloating from air is common. Results discussed. Written instructions provided.',
    spanishPostProcedure: 'Recuperación en área de observación hasta que la sedación pase (30-60 minutos). La garganta puede estar adolorida. La distensión por aire es común. Resultados discutidos. Instrucciones escritas proporcionadas.',
    complications: [
      'Perforation (1 in 2,000-5,000)',
      'Bleeding from biopsy or therapy sites',
      'Aspiration pneumonia',
      'Reaction to sedation',
      'Cardiac events',
      'Infection',
      'Missed lesions'
    ],
    spanishComplications: [
      'Perforación (1 en 2,000-5,000)',
      'Sangrado de sitios de biopsia o terapia',
      'Neumonía por aspiración',
      'Reacción a la sedación',
      'Eventos cardíacos',
      'Infección',
      'Lesiones no detectadas'
    ],
    contraindications: [
      'Suspected perforation',
      'Recent myocardial infarction',
      'Unstable cardiopulmonary status',
      'Uncooperative patient without sedation option',
      'Failed previous attempt (relative)'
    ],
    spanishContraindications: [
      'Perforación sospechada',
      'Infarto de miocardio reciente',
      'Estado cardiopulmonar inestable',
      'Paciente no cooperativo sin opción de sedación',
      'Intento previo fallido (relativo)'
    ],
    recovery: 'Most patients resume normal activities the next day. No driving for 24 hours due to sedation. Diet resumes once throat numbness resolves. Follow-up for biopsy results in 1-2 weeks.',
    spanishRecovery: 'La mayoría de los pacientes reanudan actividades normales al día siguiente. No conducir por 24 horas debido a la sedación. La dieta se reanuda una vez que el adormecimiento de la garganta se resuelve. Seguimiento para resultados de biopsia en 1-2 semanas.'
  },

  {
    procedureId: 'endo-colonoscopy',
    name: 'Colonoscopy',
    spanishName: 'Colonoscopia',
    category: 'screening',
    description: 'Visual examination of the entire colon and rectum using a flexible colonoscope for cancer screening, polyp removal, and diagnosis.',
    spanishDescription: 'Examen visual de todo el colon y recto usando un colonoscopio flexible para detección de cáncer, remoción de pólipos y diagnóstico.',
    specialties: ['gastroenterology', 'colorectal-surgery'],
    bodyRegions: ['colon', 'rectum'],
    complexity: 'moderate',
    setting: ['endoscopy-suite', 'outpatient-surgery-center'],
    anesthesia: ['sedation'],
    icd10pcs: '0DJD',
    cptCodes: ['45378', '45380', '45385'],
    whatToExpect: 'You lie on your left side with knees bent. IV sedation keeps you comfortable and drowsy. The flexible scope enters through the rectum and advances to the cecum. Air inflates the colon. Polyps may be removed. Biopsies taken if needed. Takes 20-60 minutes.',
    spanishWhatToExpect: 'Se acuesta sobre su lado izquierdo con rodillas dobladas. La sedación IV lo mantiene cómodo y somnoliento. El endoscopio flexible entra a través del recto y avanza hasta el ciego. El aire infla el colon. Los pólipos pueden removerse. Biopsias tomadas si es necesario. Toma 20-60 minutos.',
    patientExplanation: 'A colonoscopy examines your entire large intestine using a flexible tube with a camera. It is the best test for finding and preventing colon cancer by removing polyps before they become cancerous. You will receive sedation so you are comfortable during the procedure.',
    spanishPatientExplanation: 'Una colonoscopia examina todo su intestino grueso usando un tubo flexible con cámara. Es la mejor prueba para encontrar y prevenir cáncer de colon removiendo pólipos antes de que se vuelvan cancerosos. Recibirá sedación para estar cómodo durante el procedimiento.',
    preparation: 'Complete bowel cleansing required. Clear liquid diet day before. Laxative solution (gallon or split-dose) evening before and morning of. Stop iron supplements 1 week prior. Arrange driver.',
    spanishPreparation: 'Limpieza intestinal completa requerida. Dieta de líquidos claros día anterior. Solución laxante (galón o dosis dividida) noche anterior y mañana del procedimiento. Suspender suplementos de hierro 1 semana antes. Organizar conductor.',
    preProcedure: 'Vital signs. IV access. Consent. Positioning. Sedation by anesthesia provider. Abdominal pressure may be applied by assistant.',
    spanishPreProcedure: 'Signos vitales. Acceso IV. Consentimiento. Posicionamiento. Sedación por proveedor de anestesia. Puede aplicarse presión abdominal por asistente.',
    postProcedure: 'Recovery until sedation clears (30-60 min). Gas and bloating common. Results discussed including polyp findings. Written report and photos provided.',
    spanishPostProcedure: 'Recuperación hasta que la sedación pase (30-60 min). Gases y distensión comunes. Resultados discutidos incluyendo hallazgos de pólipos. Informe escrito y fotos proporcionadas.',
    complications: [
      'Perforation (1 in 1,000-2,000)',
      'Bleeding (1-2% with polypectomy)',
      'Cardiopulmonary events from sedation',
      'Infection',
      'Post-polypectomy syndrome',
      'Incomplete examination',
      'Missed lesions'
    ],
    spanishComplications: [
      'Perforación (1 en 1,000-2,000)',
      'Sangrado (1-2% con polipectomía)',
      'Eventos cardiopulmonares por sedación',
      'Infección',
      'Síndrome post-polipectomía',
      'Examen incompleto',
      'Lesiones no detectadas'
    ],
    contraindications: [
      'Acute diverticulitis',
      'Acute severe colitis',
      'Suspected perforation',
      'Recent myocardial infarction',
      'Uncorrected coagulopathy for therapeutic procedures',
      'Toxic megacolon'
    ],
    spanishContraindications: [
      'Diverticulitis aguda',
      'Colitis aguda severa',
      'Perforación sospechada',
      'Infarto de miocardio reciente',
      'Coagulopatía no corregida para procedimientos terapéuticos',
      'Megacolon tóxico'
    ],
    recovery: 'Same-day discharge. No driving 24 hours. Light diet initially. Resume normal activities next day. Polyp pathology in 1-2 weeks. Next colonoscopy based on findings (3-10 years).',
    spanishRecovery: 'Alta el mismo día. No conducir 24 horas. Dieta ligera inicialmente. Reanudar actividades normales al día siguiente. Patología de pólipos en 1-2 semanas. Siguiente colonoscopia basada en hallazgos (3-10 años).'
  },

  {
    procedureId: 'endo-sigmoidoscopy',
    name: 'Flexible Sigmoidoscopy',
    spanishName: 'Sigmoidoscopia flexible',
    category: 'screening',
    description: 'Examination of the rectum and sigmoid colon using a flexible endoscope for screening and diagnosis of lower GI conditions.',
    spanishDescription: 'Examen del recto y colon sigmoides usando un endoscopio flexible para detección y diagnóstico de condiciones GI bajas.',
    specialties: ['gastroenterology'],
    bodyRegions: ['rectum', 'colon'],
    complexity: 'low',
    setting: ['outpatient-clinic', 'endoscopy-suite'],
    anesthesia: ['none', 'sedation'],
    icd10pcs: '0DJ',
    cptCodes: ['45330', '45331'],
    whatToExpect: 'You lie on your left side. Often no sedation is needed. The flexible scope enters the rectum and examines the lower 60cm of colon. Air is used for distension. Takes 10-20 minutes.',
    spanishWhatToExpect: 'Se acuesta sobre su lado izquierdo. Frecuentemente no se necesita sedación. El endoscopio flexible entra en el recto y examina los 60 cm inferiores del colon. Se usa aire para distensión. Toma 10-20 minutos.',
    patientExplanation: 'Flexible sigmoidoscopy examines the lower third of your colon using a thin, flexible tube. It is less extensive than a colonoscopy but useful for finding polyps, inflammation, and bleeding sources in the rectum and sigmoid colon.',
    spanishPatientExplanation: 'La sigmoidoscopia flexible examina el tercio inferior de su colon usando un tubo delgado y flexible. Es menos extensa que una colonoscopia pero útil para encontrar pólipos, inflamación y fuentes de sangrado en el recto y colon sigmoides.',
    preparation: 'One or two enemas 1-2 hours before the procedure. No other prep usually needed. May have light breakfast day of procedure.',
    spanishPreparation: 'Uno o dos enemas 1-2 horas antes del procedimiento. Generalmente no se necesita otra preparación. Puede desayunar ligero el día del procedimiento.',
    preProcedure: 'Positioning. Digital rectal exam. Scope insertion. Air insufflation. Examination to splenic flexure or 60cm.',
    spanishPreProcedure: 'Posicionamiento. Examen rectal digital. Inserción del endoscopio. Insuflación de aire. Examen hasta flexura esplénica o 60 cm.',
    postProcedure: 'Immediate recovery. May have gas and mild cramping. Results given same day. Resume normal activities immediately.',
    spanishPostProcedure: 'Recuperación inmediata. Puede tener gases y calambres leves. Resultados dados el mismo día. Reanudar actividades normales inmediatamente.',
    complications: [
      'Perforation (1 in 5,000-10,000)',
      'Bleeding',
      'Vasovagal reaction',
      'Discomfort'
    ],
    spanishComplications: [
      'Perforación (1 en 5,000-10,000)',
      'Sangrado',
      'Reacción vasovagal',
      'Molestias'
    ],
    contraindications: [
      'Acute diverticulitis',
      'Severe colitis',
      'Suspected perforation',
      'Recent colorectal surgery'
    ],
    spanishContraindications: [
      'Diverticulitis aguda',
      'Colitis severa',
      'Perforación sospechada',
      'Cirugía colorrectal reciente'
    ],
    recovery: 'Immediate. No restrictions. Normal diet. Return to work same day. Follow-up based on findings.',
    spanishRecovery: 'Inmediata. Sin restricciones. Dieta normal. Retorno al trabajo mismo día. Seguimiento basado en hallazgos.'
  },

  {
    procedureId: 'endo-ercp',
    name: 'ERCP (Endoscopic Retrograde Cholangiopancreatography)',
    spanishName: 'CPRE (Colangiopancreatografía retrógrada endoscópica)',
    category: 'therapeutic',
    description: 'Combined endoscopic and fluoroscopic procedure to diagnose and treat bile duct and pancreatic duct disorders.',
    spanishDescription: 'Procedimiento combinado endoscópico y fluoroscópico para diagnosticar y tratar trastornos del conducto biliar y pancreático.',
    specialties: ['gastroenterology', 'interventional-endoscopy'],
    bodyRegions: ['bile-ducts', 'pancreas', 'duodenum'],
    complexity: 'high',
    setting: ['endoscopy-suite', 'hospital-outpatient'],
    anesthesia: ['sedation', 'general'],
    icd10pcs: '0F9',
    cptCodes: ['43260', '43262', '43264', '43265'],
    whatToExpect: 'Similar to EGD with additional X-ray imaging. A side-viewing duodenoscope identifies the ampulla of Vater. Contrast injected into bile and pancreatic ducts. Stones removed or stents placed. Takes 30-90 minutes.',
    spanishWhatToExpect: 'Similar a EGD con imágenes de rayos X adicionales. Un duodenoscopio de visión lateral identifica la ampolla de Vater. Contraste inyectado en conductos biliares y pancreáticos. Cálculos removidos o stents colocados. Toma 30-90 minutos.',
    patientExplanation: 'ERCP diagnoses and treats problems in your bile and pancreatic ducts. A special endoscope reaches the opening where these ducts drain into your intestine. Dye is injected to see the ducts on X-ray, and stones can be removed or blocked ducts opened with stents.',
    spanishPatientExplanation: 'La CPRE diagnostica y trata problemas en sus conductos biliares y pancreáticos. Un endoscopio especial alcanza la abertura donde estos conductos drenan en su intestino. Se inyecta tinte para ver los conductos en rayos X, y los cálculos pueden removerse o los conductos bloqueados abrirse con stents.',
    preparation: 'NPO for 8 hours. Coagulation studies reviewed. Antibiotics for biliary obstruction. Informed consent including pancreatitis risk. Arrange driver.',
    spanishPreparation: 'NPO por 8 horas. Estudios de coagulación revisados. Antibióticos para obstrucción biliar. Consentimiento informado incluyendo riesgo de pancreatitis. Organizar conductor.',
    preProcedure: 'Vital signs. IV access. General anesthesia or deep sedation. Positioning prone or left lateral. Fluoroscopy equipment ready.',
    spanishPreProcedure: 'Signos vitales. Acceso IV. Anestesia general o sedación profunda. Posicionamiento boca abajo o lateral izquierdo. Equipo de fluoroscopía listo.',
    postProcedure: 'Observation for pancreatitis (abdominal pain, elevated amylase). Vital signs monitored. Diet resumed when alert. Results discussed.',
    spanishPostProcedure: 'Observación para pancreatitis (dolor abdominal, amilasa elevada). Signos vitales monitoreados. Dieta reanudada cuando esté alerta. Resultados discutidos.',
    complications: [
      'Pancreatitis (3-10%, most common)',
      'Perforation (1-2%)',
      'Bleeding (1-2%)',
      'Infection (cholangitis)',
      'Sedation-related events',
      'Contrast reactions'
    ],
    spanishComplications: [
      'Pancreatitis (3-10%, más común)',
      'Perforación (1-2%)',
      'Sangrado (1-2%)',
      'Infección (colangitis)',
      'Eventos relacionados con sedación',
      'Reacciones al contraste'
    ],
    contraindications: [
      'Recent myocardial infarction',
      'Severe cardiopulmonary disease',
      'Uncorrected coagulopathy for therapeutic ERCP',
      'Pharyngeal or esophageal obstruction',
      'Prior gastric bypass anatomy (relative)'
    ],
    spanishContraindications: [
      'Infarto de miocardio reciente',
      'Enfermedad cardiopulmonar severa',
      'Coagulopatía no corregida para CPRE terapéutica',
      'Obstrucción faríngea o esofágica',
      'Anatomía previa de bypass gástrico (relativo)'
    ],
    recovery: 'Observation 1-4 hours post-procedure. Some patients admitted overnight. No driving 24 hours. Watch for severe abdominal pain (possible pancreatitis). Follow-up imaging if stents placed.',
    spanishRecovery: 'Observación 1-4 horas post-procedimiento. Algunos pacientes ingresan toda la noche. No conducir 24 horas. Vigilar dolor abdominal severo (posible pancreatitis). Imágenes de seguimiento si se colocaron stents.'
  },

  {
    procedureId: 'endo-eus',
    name: 'Endoscopic Ultrasound (EUS)',
    spanishName: 'Ultrasonido endoscópico (EUS)',
    category: 'diagnostic',
    description: 'Combines endoscopy with high-frequency ultrasound to image GI tract walls and adjacent structures, with fine-needle aspiration capability.',
    spanishDescription: 'Combina endoscopia con ultrasonido de alta frecuencia para imaginar paredes del tracto GI y estructuras adyacentes, con capacidad de aspiración con aguja fina.',
    specialties: ['gastroenterology'],
    bodyRegions: ['esophagus', 'stomach', 'pancreas', 'bile-ducts'],
    complexity: 'high',
    setting: ['endoscopy-suite', 'hospital-outpatient'],
    anesthesia: ['sedation', 'general'],
    icd10pcs: '0DJ',
    cptCodes: ['43237', '43238', '43242', '43259'],
    whatToExpect: 'Similar to EGD preparation. Echoscope with ultrasound transducer at tip inserted. Organs imaged from GI tract lumen. Fine needle aspiration through scope wall if needed. Takes 30-60 minutes.',
    spanishWhatToExpect: 'Preparación similar a EGD. Ecoscopio con transductor de ultrasonido en punta insertado. Órganos imaginados desde lumen del tracto GI. Aspiración con aguja fina a través de pared del endoscopio si es necesario. Toma 30-60 minutos.',
    patientExplanation: 'EUS provides detailed images of your digestive tract and nearby organs like the pancreas and bile ducts using ultrasound from inside your body. A thin needle can pass through the scope to take samples of masses or lymph nodes for diagnosis.',
    spanishPatientExplanation: 'El EUS proporciona imágenes detalladas de su tracto digestivo y órganos cercanos como el páncreas y conductos biliares usando ultrasonido desde dentro de su cuerpo. Una aguja delgada puede pasar a través del endoscopio para tomar muestras de masas o ganglios linfáticos para diagnóstico.',
    preparation: 'NPO 6-8 hours. Coagulation studies if FNA planned. Antibiotics for cyst drainage. Review imaging. Driver arranged.',
    spanishPreparation: 'NPO 6-8 horas. Estudios de coagulación si AAF planificada. Antibióticos para drenaje de quiste. Revisar imágenes. Conductor organizado.',
    preProcedure: 'Vital signs. IV access. Deep sedation or general anesthesia. Position left lateral. Linear array echoendoscope selected.',
    spanishPreProcedure: 'Signos vitales. Acceso IV. Sedación profunda o anestesia general. Posición lateral izquierda. Eecoendoscopio de arreglo lineal seleccionado.',
    postProcedure: 'Recovery from sedation. Throat soreness. FNA site monitoring. Results preliminary; cytology takes 2-3 days.',
    spanishPostProcedure: 'Recuperación de sedación. Dolor de garganta. Monitoreo de sitio de AAF. Resultados preliminares; citología toma 2-3 días.',
    complications: [
      'Pancreatitis (FNA)',
      'Perforation',
      'Bleeding (FNA)',
      'Infection',
      'Sedation events',
      'Tumor seeding (rare)'
    ],
    spanishComplications: [
      'Pancreatitis (AAF)',
      'Perforación',
      'Sangrado (AAF)',
      'Infección',
      'Eventos de sedación',
      'Siembra tumoral (rara)'
    ],
    contraindications: [
      'Uncorrected coagulopathy for FNA',
      'Interposed vessels in needle path',
      'Cyst with communication to pancreatic duct (cyst drainage)',
      'Severe cardiopulmonary disease'
    ],
    spanishContraindications: [
      'Coagulopatía no corregida para AAF',
      'Vasos interpuestos en trayecto de aguja',
      'Quiste con comunicación a conducto pancreático (drenaje de quiste)',
      'Enfermedad cardiopulmonar severa'
    ],
    recovery: 'Same day discharge. No driving 24 hours. Results in 2-7 days. Further imaging or surgery based on findings.',
    spanishRecovery: 'Alta el mismo día. No conducir 24 horas. Resultados en 2-7 días. Más imágenes o cirugía basadas en hallazgos.'
  },

  {
    procedureId: 'endo-capsule',
    name: 'Capsule Endoscopy',
    spanishName: 'Endoscopia por cápsula',
    category: 'diagnostic',
    description: 'Wireless capsule with camera, light source, and transmitter that captures images of the small intestine during natural passage.',
    spanishDescription: 'Cápsula inalámbrica con cámara, fuente de luz y transmisor que captura imágenes del intestino delgado durante el paso natural.',
    specialties: ['gastroenterology'],
    bodyRegions: ['small-intestine'],
    complexity: 'low',
    setting: ['outpatient-clinic'],
    anesthesia: ['none'],
    icd10pcs: '0DJ',
    cptCodes: ['91110', '91111'],
    whatToExpect: 'You swallow a vitamin-sized capsule with water. Wear a recording belt for 8 hours. Normal activities allowed. Capsule passes naturally in stool. Images downloaded for review.',
    spanishWhatToExpect: 'Traga una cápsula del tamaño de una vitamina con agua. Use un cinturón de grabación por 8 horas. Actividades normales permitidas. La cápsula pasa naturalmente en heces. Imágenes descargadas para revisión.',
    patientExplanation: 'Capsule endoscopy uses a tiny camera in a pill that you swallow to take pictures of your small intestine. As it travels through your digestive system, it transmits thousands of images to a recorder you wear. The capsule passes naturally and is disposable.',
    spanishPatientExplanation: 'La endoscopía por cápsula usa una cámara diminuta en una píldora que traga para tomar fotos de su intestino delgado. A medida que viaja a través de su sistema digestivo, transmite miles de imágenes a un grabador que usa. La cápsula pasa naturalmente y es desechable.',
    preparation: 'Clear liquid diet day before. Fasting 8 hours before. Bowel prep sometimes used. No MRI until capsule passes. Patency capsule if obstruction suspected.',
    spanishPreparation: 'Dieta de líquidos claros día anterior. Ayuno 8 horas antes. Preparación intestinal a veces usada. No resonancia magnética hasta que la cápsula pase. Cápsula de patencia si se sospecha obstrucción.',
    preProcedure: 'Vital signs. Attach sensors to abdomen. Belt with data recorder fitted. Swallow capsule with water. Instructions given.',
    spanishPreProcedure: 'Signos vitales. Conectar sensores al abdomen. Cinturón con grabador de datos colocado. Tragar cápsula con agua. Instrucciones dadas.',
    postProcedure: 'Resume clear liquids 2 hours after swallowing capsule. Light meal 4 hours later. Return belt and sensors. Normal activities except MRI.',
    spanishPostProcedure: 'Reanudar líquidos claros 2 horas después de tragar cápsula. Comida ligera 4 horas después. Devolver cinturón y sensores. Actividades normales excepto resonancia magnética.',
    complications: [
      'Capsule retention (1-2% in normal patients, higher in Crohn disease)',
      'Incomplete examination (20-30%)',
      'Missed lesions',
      'Aspiration during swallowing',
      'Skin irritation from adhesive pads'
    ],
    spanishComplications: [
      'Retención de cápsula (1-2% en pacientes normales, mayor en enfermedad de Crohn)',
      'Examen incompleto (20-30%)',
      'Lesiones no detectadas',
      'Aspiración durante deglución',
      'Irritación de piel por almohadillas adhesivas'
    ],
    contraindications: [
      'Suspected or known stricture',
      'Swallowing disorders',
      'Pregnancy',
      'Pacemaker or defibrillator (relative)',
      'Gastroparesis'
    ],
    spanishContraindications: [
      'Estenosis sospechada o conocida',
      'Trastornos de deglución',
      'Embarazo',
      'Marcapasos o desfibrilador (relativo)',
      'Gastroparesia'
    ],
    recovery: 'Immediate return to normal activities. Capsule passes in 24-72 hours. Results in 1-2 weeks. Further testing if retention suspected.',
    spanishRecovery: 'Retorno inmediato a actividades normales. La cápsula pasa en 24-72 horas. Resultados en 1-2 semanas. Más pruebas si se sospecha retención.'
  },

  // ============================================================
  // PULMONARY ENDOSCOPY
  // ============================================================
  {
    procedureId: 'endo-bronchoscopy',
    name: 'Flexible Bronchoscopy',
    spanishName: 'Broncoscopia flexible',
    category: 'diagnostic',
    description: 'Visual examination of the tracheobronchial tree using a flexible bronchoscope for diagnosis and treatment of lung conditions.',
    spanishDescription: 'Examen visual del árbol traqueobronquial usando un broncoscopio flexible para diagnóstico y tratamiento de condiciones pulmonares.',
    specialties: ['pulmonology', 'thoracic-surgery'],
    bodyRegions: ['lungs', 'airways'],
    complexity: 'moderate',
    setting: ['endoscopy-suite', 'operating-room'],
    anesthesia: ['sedation', 'general', 'topical'],
    icd10pcs: '0BJ',
    cptCodes: ['31622', '31623', '31624', '31625'],
    whatToExpect: 'You lie supine. Numbing medication sprayed in throat and nose. Sedation given. Scope passes through nose or mouth, past vocal cords, into airways. Washing, brushing, biopsy performed. Takes 15-45 minutes.',
    spanishWhatToExpect: 'Se acuesta boca arriba. Medicamento anestésico rociado en garganta y nariz. Sedación administrada. El endoscopio pasa por nariz o boca, más allá de cuerdas vocales, hacia vías respiratorias. Lavado, cepillado, biopsia realizados. Toma 15-45 minutos.',
    patientExplanation: 'A bronchoscopy examines your airways and lungs using a thin, flexible tube with a camera. It helps find infections, tumors, bleeding, and blockages. Samples can be taken from lung tissue or washings for laboratory testing.',
    spanishPatientExplanation: 'Una broncoscopia examina sus vías respiratorias y pulmones usando un tubo delgado y flexible con cámara. Ayuda a encontrar infecciones, tumores, sangrado y obstrucciones. Se pueden tomar muestras de tejido pulmonar o lavados para análisis de laboratorio.',
    preparation: 'NPO 6-8 hours. Review medications (especially blood thinners). Arrange driver if sedation used. Chest X-ray reviewed. Informed consent.',
    spanishPreparation: 'NPO 6-8 horas. Revisar medicamentos (especialmente anticoagulantes). Organizar conductor si se usa sedación. Radiografía de tórax revisada. Consentimiento informado.',
    preProcedure: 'Vital signs. IV access. Topical anesthesia to oropharynx and nasopharynx. Sedation administered. Supplemental oxygen. Monitoring.',
    spanishPreProcedure: 'Signos vitales. Acceso IV. Anestesia tópica a orofaringe y nasofaringe. Sedación administrada. Oxígeno suplementario. Monitoreo.',
    postProcedure: 'Observation until gag reflex returns (1-2 hours). Throat numbness lasts 30-60 minutes - no eating/drinking until resolved. Chest X-ray if transbronchial biopsy.',
    spanishPostProcedure: 'Observación hasta que el reflejo nauseoso regrese (1-2 horas). Adormecimiento de garganta dura 30-60 minutos - no comer/beber hasta que se resuelva. Radiografía de tórax si biopsia transbronquial.',
    complications: [
      'Bleeding (1-5%)',
      'Pneumothorax (transbronchial biopsy, 1-5%)',
      'Hypoxia',
      'Laryngospasm/bronchospasm',
      'Cardiac arrhythmias',
      'Infection',
      'Aspiration'
    ],
    spanishComplications: [
      'Sangrado (1-5%)',
      'Neumotórax (biopsia transbronquial, 1-5%)',
      'Hipoxia',
      'Laringoespasmo/broncoespasmo',
      'Arritmias cardíacas',
      'Infección',
      'Aspiración'
    ],
    contraindications: [
      'Severe hypoxemia',
      'Uncooperative patient',
      'Recent myocardial infarction',
      'Severe bleeding disorder',
      'Increased intracranial pressure',
      'Unstable airway'
    ],
    spanishContraindications: [
      'Hipoxemia severa',
      'Paciente no cooperativo',
      'Infarto de miocardio reciente',
      'Trastorno hemorrágico severo',
      'Presión intracraneal aumentada',
      'Vía aérea inestable'
    ],
    recovery: 'Observation 1-4 hours. No driving 24 hours if sedation used. Sore throat 1-2 days. Biopsy results in 3-7 days. Watch for breathing difficulty or bleeding.',
    spanishRecovery: 'Observación 1-4 horas. No conducir 24 horas si se usó sedación. Dolor de garganta 1-2 días. Resultados de biopsia en 3-7 días. Vigilar dificultad respiratoria o sangrado.'
  },

  {
    procedureId: 'endo-navigational-bronchoscopy',
    name: 'Navigational/Electromagnetic Bronchoscopy',
    spanishName: 'Broncoscopia navegacional/electromagnética',
    category: 'diagnostic',
    description: 'Advanced bronchoscopy using electromagnetic guidance and CT mapping to reach peripheral lung lesions for biopsy.',
    spanishDescription: 'Broncoscopia avanzada usando guía electromagnética y mapeo por TC para alcanzar lesiones pulmonares periféricas para biopsia.',
    specialties: ['pulmonology', 'interventional-pulmonology'],
    bodyRegions: ['lungs'],
    complexity: 'high',
    setting: ['endoscopy-suite'],
    anesthesia: ['sedation', 'general'],
    icd10pcs: '0BJ',
    cptCodes: ['31654', '31626'],
    whatToExpect: 'CT images loaded into navigation system. Electromagnetic board placed under patient. Bronchoscope advanced to lesion using 3D guidance. Biopsy tools passed through working channel. Takes 30-60 minutes.',
    spanishWhatToExpect: 'Imágenes de TC cargadas en sistema de navegación. Tablero electromagnético colocado bajo paciente. Broncoscopio avanzado hacia lesión usando guía 3D. Herramientas de biopsia pasadas a través de canal de trabajo. Toma 30-60 minutos.',
    patientExplanation: 'This advanced bronchoscopy uses GPS-like technology to guide the scope to tiny spots deep in your lungs seen on CT scans. It improves the accuracy of biopsies for peripheral lung nodules that are hard to reach with standard bronchoscopy.',
    spanishPatientExplanation: 'Esta broncoscopia avanzada usa tecnología tipo GPS para guiar el endoscopio a pequeños puntos profundos en sus pulmones vistos en tomografías. Mejora la precisión de biopsias para nódulos pulmonares periféricos difíciles de alcanzar con broncoscopia estándar.',
    preparation: 'Same as standard bronchoscopy. CT imaging reviewed and loaded into system. Anticoagulation management.',
    spanishPreparation: 'Igual que broncoscopia estándar. Imágenes de TC revisadas y cargadas en sistema. Manejo de anticoagulación.',
    preProcedure: 'System calibration. Patient registration to CT coordinates. Electromagnetic field established. Positioning.',
    spanishPreProcedure: 'Calibración del sistema. Registro de paciente a coordenadas de TC. Campo electromagnético establecido. Posicionamiento.',
    postProcedure: 'Same as standard bronchoscopy. Higher diagnostic yield but pneumothorax risk remains.',
    spanishPostProcedure: 'Igual que broncoscopia estándar. Mayor rendimiento diagnóstico pero el riesgo de neumotórax permanece.',
    complications: [
      'Pneumothorax (2-5%)',
      'Bleeding',
      'Diagnostic failure',
      'Same as standard bronchoscopy'
    ],
    spanishComplications: [
      'Neumotórax (2-5%)',
      'Sangrado',
      'Falla diagnóstica',
      'Igual que broncoscopia estándar'
    ],
    contraindications: [
      'Same as standard bronchoscopy',
      'No visible bronchus sign on CT',
      'Lesion >5cm from pleura (relative)'
    ],
    spanishContraindications: [
      'Igual que broncoscopia estándar',
      'Sin signo de bronquio visible en TC',
      'Lesión >5cm de pleura (relativo)'
    ],
    recovery: 'Same as standard bronchoscopy. Results in 3-5 days. Further imaging or treatment based on findings.',
    spanishRecovery: 'Igual que broncoscopia estándar. Resultados en 3-5 días. Más imágenes o tratamiento basado en hallazgos.'
  },

  // ============================================================
  // UROLOGIC ENDOSCOPY
  // ============================================================
  {
    procedureId: 'endo-cystoscopy',
    name: 'Cystoscopy',
    spanishName: 'Cistoscopia',
    category: 'diagnostic',
    description: 'Visual examination of the urethra and bladder using a rigid or flexible cystoscope.',
    spanishDescription: 'Examen visual de la uretra y vejiga usando un cistoscopio rígido o flexible.',
    specialties: ['urology'],
    bodyRegions: ['bladder', 'urethra', 'urinary'],
    complexity: 'low',
    setting: ['outpatient-clinic', 'outpatient-surgery-center'],
    anesthesia: ['none', 'topical', 'local', 'sedation'],
    icd10pcs: '0TJB',
    cptCodes: ['52000', '52005'],
    whatToExpect: 'You lie on examination table. Anesthetic gel inserted into urethra. Flexible scope advanced through urethra into bladder. Bladder filled with sterile water. Examination performed. Takes 5-15 minutes.',
    spanishWhatToExpect: 'Se acuesta en mesa de examen. Gel anestésico insertado en uretra. Endoscopio flexible avanzado a través de uretra hacia vejiga. Vejiga llenada con agua estéril. Examen realizado. Toma 5-15 minutos.',
    patientExplanation: 'A cystoscopy examines the inside of your bladder and urethra using a thin tube with a camera. It helps find causes of blood in urine, recurrent infections, incontinence, and bladder tumors. The procedure is uncomfortable but quick.',
    spanishPatientExplanation: 'Una cistoscopia examina el interior de su vejiga y uretra usando un tubo delgado con cámara. Ayuda a encontrar causas de sangre en orina, infecciones recurrentes, incontinencia y tumores vesicales. El procedimiento es incómodo pero rápido.',
    preparation: 'Urinate before procedure. Antibiotics for some patients. UTI treated first if present. Informed consent.',
    spanishPreparation: 'Orinar antes del procedimiento. Antibióticos para algunos pacientes. Infección urinaria tratada primero si está presente. Consentimiento informado.',
    preProcedure: 'Position in lithotomy or supine. Perineal prep. Topical anesthetic to urethra. Light sedation optional.',
    spanishPreProcedure: 'Posición en litotomía o boca arriba. Preparación perineal. Anestésico tópico a uretra. Sedación ligera opcional.',
    postProcedure: 'May have burning with urination for 24-48 hours. Pink urine common. Drink fluids. Antibiotics if indicated.',
    spanishPostProcedure: 'Puede tener ardor al orinar por 24-48 horas. Orina rosada común. Beber líquidos. Antibióticos si está indicado.',
    complications: [
      'Urinary tract infection (5%)',
      'Bleeding',
      'Urethral stricture',
      'Perforation (rare)',
      'Pain'
    ],
    spanishComplications: [
      'Infección urinaria (5%)',
      'Sangrado',
      'Estenosis uretral',
      'Perforación (rara)',
      'Dolor'
    ],
    contraindications: [
      'Active UTI',
      'Urethral stricture preventing passage',
      'Uncooperative patient (rigid cystoscopy)',
      'Recent prostate surgery'
    ],
    spanishContraindications: [
      'Infección urinaria activa',
      'Estenosis uretral que impide paso',
      'Paciente no cooperativo (cistoscopia rígida)',
      'Cirugía prostática reciente'
    ],
    recovery: 'Immediate. Normal activities same day. Results discussed. Biopsy results in 1-2 weeks. Antibiotics complete if prescribed.',
    spanishRecovery: 'Inmediata. Actividades normales mismo día. Resultados discutidos. Resultados de biopsia en 1-2 semanas. Completar antibióticos si fueron recetados.'
  },

  {
    procedureId: 'endo-ureteroscopy',
    name: 'Ureteroscopy with Laser Lithotripsy',
    spanishName: 'Ureteroscopia con litotricia láser',
    category: 'therapeutic',
    description: 'Endoscopic treatment of kidney and ureteral stones using a scope and laser energy to fragment stones.',
    spanishDescription: 'Tratamiento endoscópico de cálculos renales y ureterales usando un endoscopio y energía láser para fragmentar cálculos.',
    specialties: ['urology'],
    bodyRegions: ['kidney', 'ureter', 'urinary'],
    complexity: 'high',
    setting: ['operating-room', 'outpatient-surgery-center'],
    anesthesia: ['general', 'spinal'],
    icd10pcs: '0TC',
    cptCodes: ['52353', '52356'],
    whatToExpect: 'Scope inserted through urethra, bladder, into ureter. Laser fiber fragments stone. Basket retrieves fragments. Stent often placed. Takes 30-90 minutes.',
    spanishWhatToExpect: 'Endoscopio insertado a través de uretra, vejiga, hacia uréter. Fibra láser fragmenta cálculo. Canasta recupera fragmentos. Stent frecuentemente colocado. Toma 30-90 minutos.',
    patientExplanation: 'This procedure treats kidney stones by passing a thin scope through your natural urinary tract to reach the stone. A laser breaks the stone into tiny pieces that can be removed or pass naturally. A temporary tube (stent) may be left to help drainage.',
    spanishPatientExplanation: 'Este procedimiento trata cálculos renales pasando un endoscopio delgado a través de su tracto urinario natural para alcanzar el cálculo. Un láser rompe el cálculo en pedazos pequeños que pueden removerse o pasar naturalmente. Un tubo temporal (stent) puede dejarse para ayudar al drenaje.',
    preparation: 'CT imaging to locate stones. Antibiotics. Stop blood thinners. Urine culture. Informed consent including stent placement.',
    spanishPreparation: 'Imágenes de TC para localizar cálculos. Antibióticos. Suspender anticoagulantes. Cultivo de orina. Consentimiento informado incluyendo colocación de stent.',
    preProcedure: 'General anesthesia. Position in lithotomy. C-arm fluoroscopy available. Safety equipment for laser.',
    spanishPreProcedure: 'Anestesia general. Posición en litotomía. Fluoroscopía con brazo en C disponible. Equipo de seguridad para láser.',
    postProcedure: 'Stent causes urinary frequency, urgency, and flank discomfort. Stent removal in 3-14 days. Strain urine for fragments. Hydration.',
    spanishPostProcedure: 'El stent causa frecuencia urinaria, urgencia y malestar en flanco. Retiro de stent en 3-14 días. Colar orina para fragmentos. Hidratación.',
    complications: [
      'Ureteral perforation (1-5%)',
      'Ureteral stricture',
      'Infection',
      'Bleeding',
      'Incomplete stone removal',
      'Stent symptoms',
      'Steinstrasse (fragment accumulation)'
    ],
    spanishComplications: [
      'Perforación ureteral (1-5%)',
      'Estenosis ureteral',
      'Infección',
      'Sangrado',
      'Remoción incompleta de cálculo',
      'Síntomas de stent',
      'Steinstrasse (acumulación de fragmentos)'
    ],
    contraindications: [
      'Untreated UTI',
      'Large stone burden (>2cm may need PCNL)',
      'Uncorrected bleeding disorder',
      'Pregnancy'
    ],
    spanishContraindications: [
      'Infección urinaria no tratada',
      'Gran carga de cálculos (>2cm pueden necesitar NLPC)',
      'Trastorno hemorrágico no corregido',
      'Embarazo'
    ],
    recovery: 'Same day or overnight stay. Stent removal in office 1-2 weeks later. Resume normal activities in 2-3 days. Follow-up imaging.',
    spanishRecovery: 'Estancia mismo día o toda la noche. Retiro de stent en consulta 1-2 semanas después. Reanudar actividades normales en 2-3 días. Imágenes de seguimiento.'
  },

  // ============================================================
  // LAPAROSCOPIC PROCEDURES
  // ============================================================
  {
    procedureId: 'lap-cholecystectomy',
    name: 'Laparoscopic Cholecystectomy',
    spanishName: 'Colecistectomía laparoscópica',
    category: 'surgical',
    description: 'Minimally invasive removal of the gallbladder using laparoscopic instruments and camera.',
    spanishDescription: 'Remoción mínimamente invasiva de la vesícula biliar usando instrumentos laparoscópicos y cámara.',
    specialties: ['general-surgery'],
    bodyRegions: ['abdomen', 'gallbladder'],
    complexity: 'moderate',
    setting: ['operating-room'],
    anesthesia: ['general'],
    icd10pcs: '0FT44ZZ',
    cptCodes: ['47562'],
    whatToExpect: 'Four small incisions (5-12mm). Carbon dioxide inflates abdomen. Camera and instruments inserted. Gallbladder dissected from liver. Cystic duct and artery clipped and divided. Gallbladder removed. Takes 45-90 minutes.',
    spanishWhatToExpect: 'Cuatro pequeñas incisiones (5-12mm). Dióxido de carbono infla abdomen. Cámara e instrumentos insertados. Vesícula biliar disecada del hígado. Conducto cístico y arteria clipados y divididos. Vesícula biliar removida. Toma 45-90 minutos.',
    patientExplanation: 'This minimally invasive surgery removes your gallbladder through small incisions using a camera and specialized tools. The gallbladder is separated from the liver and removed through one of the small holes. You can live normally without a gallbladder.',
    spanishPatientExplanation: 'Esta cirugía mínimamente invasiva remueve su vesícula biliar a través de pequeñas incisiones usando una cámara y herramientas especializadas. La vesícula biliar se separa del hígado y se remueve a través de uno de los pequeños agujeros. Puede vivir normalmente sin vesícula biliar.',
    preparation: 'NPO 8 hours. Blood work. Review imaging. Antibiotics for acute cholecystitis. Informed consent including conversion to open.',
    spanishPreparation: 'NPO 8 horas. Análisis de sangre. Revisar imágenes. Antibióticos para colecistitis aguda. Consentimiento informado incluyendo conversión a abierta.',
    preProcedure: 'General anesthesia. Foley catheter optional. Pneumoperitoneum with Veress or Hasson. Reverse Trendelenburg position.',
    spanishPreProcedure: 'Anestesia general. Sonda Foley opcional. Neumoperitoneo con Veress o Hasson. Posición de Trendelenburg inverso.',
    postProcedure: 'Pain control. Early oral intake. Discharge same day or next day. Wound care instructions. Activity restrictions.',
    spanishPostProcedure: 'Control de dolor. Ingesta oral temprana. Alta mismo día o siguiente. Instrucciones de cuidado de herida. Restricciones de actividad.',
    complications: [
      'Bile duct injury (0.3-0.5%)',
      'Bile leak',
      'Bleeding',
      'Infection',
      'Retained stones',
      'Conversion to open surgery (5-10%)',
      'Bowel or vascular injury',
      'Pulmonary complications'
    ],
    spanishComplications: [
      'Lesión de conducto biliar (0.3-0.5%)',
      'Fuga de bilis',
      'Sangrado',
      'Infección',
      'Cálculos retenidos',
      'Conversión a cirugía abierta (5-10%)',
      'Lesión intestinal o vascular',
      'Complicaciones pulmonares'
    ],
    contraindications: [
      'Severe cardiopulmonary disease',
      'Uncorrected coagulopathy',
      'Peritonitis with hemodynamic instability',
      'Cirrhosis with portal hypertension',
      'Severe pregnancy'
    ],
    spanishContraindications: [
      'Enfermedad cardiopulmonar severa',
      'Coagulopatía no corregida',
      'Peritonitis con inestabilidad hemodinámica',
      'Cirrosis con hipertensión portal',
      'Embarazo severo'
    ],
    recovery: 'Hospital 0-1 days. Light activities 1 week. Full activities 2-4 weeks. Return to work 1-2 weeks.',
    spanishRecovery: 'Hospital 0-1 días. Actividades ligeras 1 semana. Actividades completas 2-4 semanas. Retorno al trabajo 1-2 semanas.'
  },

  {
    procedureId: 'lap-nissen',
    name: 'Laparoscopic Nissen Fundoplication',
    spanishName: 'Funduplicatura de Nissen laparoscópica',
    category: 'surgical',
    description: 'Anti-reflux surgery wrapping the gastric fundus around the lower esophagus to prevent acid reflux.',
    spanishDescription: 'Cirugía anti-reflujo envolviendo el fundus gástrico alrededor del esófago inferior para prevenir reflujo ácido.',
    specialties: ['general-surgery', 'foregut-surgery'],
    bodyRegions: ['esophagus', 'stomach'],
    complexity: 'high',
    setting: ['operating-room'],
    anesthesia: ['general'],
    icd10pcs: '0DQ',
    cptCodes: ['43280'],
    whatToExpect: 'Five small incisions. Hiatal hernia repaired if present. Gastric fundus mobilized. Wrapped 360 degrees around esophagus. Crura approximated. Takes 2-3 hours.',
    spanishWhatToExpect: 'Cinco pequeñas incisiones. Hernia hiatal reparada si está presente. Fundus gástrico movilizado. Envuelto 360 grados alrededor del esófago. Cruros aproximados. Toma 2-3 horas.',
    patientExplanation: 'This surgery treats severe acid reflux by wrapping the top of your stomach around the bottom of your esophagus. This creates a one-way valve that prevents stomach acid from flowing back up. It provides lasting relief when medications are insufficient.',
    spanishPatientExplanation: 'Esta cirugía trata el reflujo ácido severo envolviendo la parte superior de su estómago alrededor de la parte inferior de su esófago. Esto crea una válvula de una vía que previene que el ácido estomacal fluya hacia arriba. Proporciona alivio duradero cuando los medicamentos son insuficientes.',
    preparation: 'Esophageal testing (pH monitoring, manometry). Upper endoscopy. Optimize comorbidities. NPO 8 hours.',
    spanishPreparation: 'Pruebas esofágicas (monitoreo de pH, manometría). Endoscopia digestiva alta. Optimizar comorbilidades. NPO 8 horas.',
    preProcedure: 'General anesthesia. Position reverse Trendelenburg with legs apart. Foley catheter. Antibiotics.',
    spanishPreProcedure: 'Anestesia general. Posición Trendelenburg inverso con piernas separadas. Sonda Foley. Antibióticos.',
    postProcedure: 'NG tube if extensive dissection. Early diet advancement. Anti-emetics important. Gas pain common.',
    spanishPostProcedure: 'Sonda NG si disección extensa. Avance temprano de dieta. Antieméticos importantes. Dolor por gases común.',
    complications: [
      'Dysphagia (difficulty swallowing)',
      'Gas-bloat syndrome',
      'Wrap disruption/herniation',
      'Inability to belch or vomit',
      'Perforation',
      'Pneumothorax',
      'Conversion to open',
      'Recurrent reflux (10-20%)'
    ],
    spanishComplications: [
      'Disfagia (dificultad para tragar)',
      'Síndrome de distensión por gases',
      'Disrupción/herniación del envoltorio',
      'Incapacidad para eructar o vomitar',
      'Perforación',
      'Neumotórax',
      'Conversión a abierta',
      'Reflujo recurrente (10-20%)'
    ],
    contraindications: [
      'Inadequate esophageal motility',
      'Short esophagus',
      'Scleroderma',
      'Morbid obesity (may need weight loss first)',
      'Untreated Barrett with dysplasia'
    ],
    spanishContraindications: [
      'Motilidad esofágica inadecuada',
      'Esófago corto',
      'Escleroderma',
      'Obesidad mórbida (puede necesitar pérdida de peso primero)',
      'Barrett no tratado con displasia'
    ],
    recovery: 'Hospital 1-2 days. Liquid diet progressing to soft foods. No lifting 4-6 weeks. Full recovery 4-6 weeks.',
    spanishRecovery: 'Hospital 1-2 días. Dieta líquida progresando a alimentos blandos. No levantar 4-6 semanas. Recuperación completa 4-6 semanas.'
  },

  {
    procedureId: 'lap-hernia-repair',
    name: 'Laparoscopic Inguinal Hernia Repair',
    spanishName: 'Reparación laparoscópica de hernia inguinal',
    category: 'surgical',
    description: 'Minimally invasive repair of inguinal hernia using mesh through laparoscopic approach.',
    spanishDescription: 'Reparación mínimamente invasiva de hernia inguinal usando malla a través de abordaje laparoscópico.',
    specialties: ['general-surgery'],
    bodyRegions: ['groin', 'abdomen'],
    complexity: 'moderate',
    setting: ['operating-room', 'outpatient-surgery-center'],
    anesthesia: ['general'],
    icd10pcs: '0WQ',
    cptCodes: ['49650', '49651'],
    whatToExpect: 'Three small incisions. Peritoneum entered. Hernia sac reduced. Mesh placed in preperitoneal space covering defects. Peritoneum closed over mesh. Takes 30-60 minutes.',
    spanishWhatToExpect: 'Tres pequeñas incisiones. Peritoneo entrado. Saco de hernia reducido. Malla colocada en espacio preperitoneal cubriendo defectos. Peritoneo cerrado sobre malla. Toma 30-60 minutos.',
    patientExplanation: 'This minimally invasive approach repairs groin hernias from inside your abdomen using a camera and mesh. The mesh reinforces the weak area from behind the abdominal muscles. It often allows faster recovery than open surgery.',
    spanishPatientExplanation: 'Este abordaje mínimamente invasivo repara hernias inguinales desde dentro de su abdomen usando una cámara y malla. La malla refuerza el área débil desde detrás de los músculos abdominales. Frecuentemente permite recuperación más rápida que cirugía abierta.',
    preparation: 'Optimize comorbidities. Smoking cessation. Urinary retention prevention. Informed consent.',
    spanishPreparation: 'Optimizar comorbilidades. Cese de tabaco. Prevención de retención urinaria. Consentimiento informado.',
    preProcedure: 'General anesthesia. Position supine. Foley catheter if bilateral or long case. Pneumoperitoneum.',
    spanishPreProcedure: 'Anestesia general. Posición boca arriba. Sonda Foley si bilateral o caso largo. Neumoperitoneo.',
    postProcedure: 'Pain control. Early ambulation. Voiding trial. Discharge same day usually. Activity restrictions.',
    spanishPostProcedure: 'Control de dolor. Deambulación temprana. Prueba de micción. Alta mismo día usualmente. Restricciones de actividad.',
    complications: [
      'Recurrence (1-3%)',
      'Chronic pain (5-10%)',
      'Infection',
      'Seroma',
      'Bladder or bowel injury',
      'Vascular injury',
      'Urinary retention'
    ],
    spanishComplications: [
      'Recurrencia (1-3%)',
      'Dolor crónico (5-10%)',
      'Infección',
      'Seroma',
      'Lesión vesical o intestinal',
      'Lesión vascular',
      'Retención urinaria'
    ],
    contraindications: [
      'Strangulated hernia',
      'Previous lower abdominal surgery (relative)',
      'Inability to tolerate general anesthesia',
      'Large scrotal hernia'
    ],
    spanishContraindications: [
      'Herna estrangulada',
      'Cirugía abdominal baja previa (relativo)',
      'Incapacidad para tolerar anestesia general',
      'Herna escrotal grande'
    ],
    recovery: 'Outpatient usually. Desk work in 3-5 days. No lifting >10 lbs for 2 weeks. Full activities in 4 weeks.',
    spanishRecovery: 'Ambulatorio usualmente. Trabajo de escritorio en 3-5 días. No levantar >10 lbs por 2 semanas. Actividades completas en 4 semanas.'
  },

  // ============================================================
  // ARTHROSCOPIC PROCEDURES
  // ============================================================
  {
    procedureId: 'arthro-knee',
    name: 'Knee Arthroscopy',
    spanishName: 'Artroscopia de rodilla',
    category: 'surgical',
    description: 'Minimally invasive examination and treatment of knee joint using arthroscope and instruments.',
    spanishDescription: 'Examen y tratamiento mínimamente invasivo de articulación de rodilla usando artroscopio e instrumentos.',
    specialties: ['orthopedic-surgery', 'sports-medicine'],
    bodyRegions: ['knee'],
    complexity: 'low',
    setting: ['operating-room', 'outpatient-surgery-center'],
    anesthesia: ['general', 'spinal', 'regional'],
    icd10pcs: '0SJC',
    cptCodes: ['29880', '29881', '29877'],
    whatToExpect: 'Two to four small incisions. Arthroscope inserted for visualization. Saline irrigation distends joint. Instruments for repair, debridement, or removal inserted through other portals. Takes 30-90 minutes.',
    spanishWhatToExpect: 'Dos a cuatro pequeñas incisiones. Artroscopio insertado para visualización. Irrigación salina distiende articulación. Instrumentos para reparación, desbridamiento o remoción insertados a través de otros portales. Toma 30-90 minutos.',
    patientExplanation: 'Knee arthroscopy uses a tiny camera to look inside your knee joint and treat problems through small incisions. Common procedures include repairing torn meniscus cartilage, smoothing rough cartilage, removing loose pieces, and reconstructing ligaments.',
    spanishPatientExplanation: 'La artroscopia de rodilla usa una cámara diminuta para ver dentro de su articulación de rodilla y tratar problemas a través de pequeñas incisiones. Procedimientos comunes incluyen reparar cartílago meniscal roto, alisar cartílago rugoso, remover piezas sueltas y reconstruir ligamentos.',
    preparation: 'MRI usually obtained. Optimize comorbidities. Blood thinners managed. Informed consent specific to procedure.',
    spanishPreparation: 'RM usualmente obtenida. Optimizar comorbilidades. Anticoagulantes manejados. Consentimiento informado específico al procedimiento.',
    preProcedure: 'Anesthesia per patient/surgeon preference. Position supine with leg holder. Tourniquet often used. Prep and drape.',
    spanishPreProcedure: 'Anestesia según preferencia de paciente/cirujano. Posición boca arriba con sujetador de pierna. Torniquete frecuentemente usado. Preparación y cubrimiento.',
    postProcedure: 'Bandages. Cryotherapy. Elevation. Pain control. Early range of motion. Weight-bearing per procedure.',
    spanishPostProcedure: 'Vendajes. Crioterapia. Elevación. Control de dolor. Rango de movimiento temprano. Carga de peso según procedimiento.',
    complications: [
      'Infection (0.5%)',
      'Deep vein thrombosis',
      'Persistent pain or stiffness',
      'Nerve injury',
      'Complex regional pain syndrome',
      'Incomplete relief of symptoms',
      'Equipment failure',
      'Compartment syndrome (rare)'
    ],
    spanishComplications: [
      'Infección (0.5%)',
      'Trombosis venosa profunda',
      'Dolor o rigidez persistente',
      'Lesión nerviosa',
      'Síndrome de dolor regional complejo',
      'Alivio incompleto de síntomas',
      'Falla de equipo',
      'Síndrome compartimental (raro)'
    ],
    contraindications: [
      'Active local infection',
      'Severe degenerative changes (relative)',
      'Uncorrected bleeding disorder',
      'Complex regional pain syndrome (relative)'
    ],
    spanishContraindications: [
      'Infección local activa',
      'Cambios degenerativos severos (relativo)',
      'Trastorno hemorrágico no corregido',
      'Síndrome de dolor regional complejo (relativo)'
    ],
    recovery: 'Outpatient usually. Crutches 1-7 days depending on procedure. PT often prescribed. Desk work 3-7 days. Sports 4-12 weeks.',
    spanishRecovery: 'Ambulatorio usualmente. Muletas 1-7 días según procedimiento. TF frecuentemente recetada. Trabajo de escritorio 3-7 días. Deportes 4-12 semanas.'
  },

  {
    procedureId: 'arthro-shoulder',
    name: 'Shoulder Arthroscopy',
    spanishName: 'Artroscopia de hombro',
    category: 'surgical',
    description: 'Minimally invasive examination and treatment of shoulder joint for rotator cuff tears, impingement, instability, and labral tears.',
    spanishDescription: 'Examen y tratamiento mínimamente invasivo de articulación de hombro para desgarros del manguito rotador, pinzamiento, inestabilidad y desgarros labrales.',
    specialties: ['orthopedic-surgery', 'sports-medicine'],
    bodyRegions: ['shoulder'],
    complexity: 'moderate',
    setting: ['operating-room', 'outpatient-surgery-center'],
    anesthesia: ['general', 'regional'],
    icd10pcs: '0RJC',
    cptCodes: ['29826', '29827', '29828'],
    whatToExpect: '4-6 small portals. Beach chair or lateral position. Scope examines joint. Repairs performed with suture anchors. Subacromial decompression if indicated. Takes 1-3 hours.',
    spanishWhatToExpect: '4-6 pequeños portales. Posición de silla de playa o lateral. El endoscopio examina la articulación. Reparaciones realizadas con anclajes de sutura. Descompresión subacromial si está indicada. Toma 1-3 horas.',
    patientExplanation: 'Shoulder arthroscopy treats shoulder problems through tiny incisions using a camera and instruments. It repairs torn tendons, removes bone spurs causing impingement, stabilizes dislocating shoulders, and fixes cartilage tears with faster recovery than open surgery.',
    spanishPatientExplanation: 'La artroscopia de hombro trata problemas de hombro a través de pequeñas incisiones usando una cámara e instrumentos. Repara tendones rotos, remueve espolones óseos causando pinzamiento, estabiliza hombros dislocados y repara desgarros de cartílago con recuperación más rápida que cirugía abierta.',
    preparation: 'MRI often obtained. Medical optimization. Smoking cessation. Home preparation with sling. Informed consent.',
    spanishPreparation: 'RM frecuentemente obtenida. Optimización médica. Cese de tabaco. Preparación en casa con cabestrillo. Consentimiento informado.',
    preProcedure: 'General plus regional block. Beach chair position. Arm holder. Prep and drape. Exam under anesthesia.',
    spanishPreProcedure: 'General más bloqueo regional. Posición de silla de playa. Sujetador de brazo. Preparación y cubrimiento. Examen bajo anestesia.',
    postProcedure: 'Sling immobilization. Regional block provides pain control 12-24 hours. Cryotherapy. Early pendulum exercises.',
    spanishPostProcedure: 'Inmovilización con cabestrillo. Bloqueo regional proporciona control de dolor 12-24 horas. Crioterapia. Ejercicios de péndulo tempranos.',
    complications: [
      'Infection',
      'Stiffness (frozen shoulder)',
      'Nerve injury',
      'Failure of repair',
      'Persistent pain',
      'Recurrent instability',
      'Chondrolysis (rare with thermal devices)',
      'DVT/PE'
    ],
    spanishComplications: [
      'Infección',
      'Rigidez (hombro congelado)',
      'Lesión nerviosa',
      'Fallo de reparación',
      'Dolor persistente',
      'Inestabilidad recurrente',
      'Condrólisis (raro con dispositivos térmicos)',
      'TVP/EP'
    ],
    contraindications: [
      'Active infection',
      'Severe osteoarthritis (may need replacement)',
      'Fixed rotator cuff tear arthropathy',
      'Neuropathic joint'
    ],
    spanishContraindications: [
      'Infección activa',
      'Osteoartritis severa (puede necesitar reemplazo)',
      'Artropatía por desgarro de manguito rotador fijo',
      'Articulación neuropática'
    ],
    recovery: 'Outpatient usually. Sling 4-6 weeks. PT essential. Desk work 1-2 weeks. Full recovery 4-6 months for rotator cuff repair.',
    spanishRecovery: 'Ambulatorio usualmente. Cabestrillo 4-6 semanas. TF esencial. Trabajo de escritorio 1-2 semanas. Recuperación completa 4-6 meses para reparación de manguito rotador.'
  },

  // ============================================================
  // CATHETER-BASED PROCEDURES
  // ============================================================
  {
    procedureId: 'cath-cardiac',
    name: 'Cardiac Catheterization',
    spanishName: 'Cateterismo cardíaco',
    category: 'diagnostic',
    description: 'Insertion of catheters into heart chambers and coronary arteries to assess cardiac function, pressures, and anatomy.',
    spanishDescription: 'Inserción de catéteres en cámaras cardíacas y arterias coronarias para evaluar función cardíaca, presiones y anatomía.',
    specialties: ['interventional-cardiology', 'cardiology'],
    bodyRegions: ['heart', 'coronary-arteries'],
    complexity: 'high',
    setting: ['cardiac-cath-lab'],
    anesthesia: ['local', 'sedation'],
    icd10pcs: '02A',
    cptCodes: ['93458', '93459', '93460'],
    whatToExpect: 'Small catheter inserted through groin or wrist artery. Advanced to heart under X-ray guidance. Contrast dye injected to visualize arteries. Pressures measured. Takes 30-60 minutes.',
    spanishWhatToExpect: 'Pequeño catéter insertado a través de arteria de ingle o muñeca. Avanzado hacia corazón bajo guía de rayos X. Medio de contraste inyectado para visualizar arterias. Presiones medidas. Toma 30-60 minutos.',
    patientExplanation: 'Cardiac catheterization examines your heart arteries and function using thin tubes inserted through blood vessels. Dye shows blockages on X-ray. Pressure measurements assess heart pumping. It diagnoses coronary artery disease and valve problems.',
    spanishPatientExplanation: 'El cateterismo cardíaco examina sus arterias cardíacas y función usando tubos delgados insertados a través de vasos sanguíneos. El contraste muestra obstrucciones en rayos X. Las mediciones de presión evalúan el bombeo del corazón. Diagnostica enfermedad arterial coronaria y problemas valvulares.',
    preparation: 'Fasting 6-8 hours. Kidney function checked. Allergies reviewed. Anticoagulation managed. Consent obtained.',
    spanishPreparation: 'Ayuno 6-8 horas. Función renal verificada. Alergias revisadas. Anticoagulación manejada. Consentimiento obtenido.',
    preProcedure: 'IV access. Sedation. Local anesthesia at access site. Sterile prep. Monitoring.',
    spanishPreProcedure: 'Acceso IV. Sedación. Anestesia local en sitio de acceso. Preparación estéril. Monitoreo.',
    postProcedure: 'Groin/wrist compression or closure device. Bed rest 2-6 hours (femoral) or immediate mobilization (radial). Hydration.',
    spanishPostProcedure: 'Compresión de ingle/muñeca o dispositivo de cierre. Reposo en cama 2-6 horas (femoral) o movilización inmediata (radial). Hidratación.',
    complications: [
      'Access site bleeding or hematoma',
      'Vascular injury',
      'Contrast nephropathy',
      'Arrhythmias',
      'Myocardial infarction',
      'Stroke',
      'Death (<0.1%)',
      'Radiation exposure'
    ],
    spanishComplications: [
      'Sangrado o hematoma en sitio de acceso',
      'Lesión vascular',
      'Nefropatía por contraste',
      'Arritmias',
      'Infarto de miocardio',
      'Accidente cerebrovascular',
      'Muerte (<0.1%)',
      'Exposición a radiación'
    ],
    contraindications: [
      'Severe renal failure (relative)',
      'Contrast allergy without premedication',
      'Acute stroke',
      'Severe anemia',
      'Uncontrolled heart failure'
    ],
    spanishContraindications: [
      'Insuficiencia renal severa (relativo)',
      'Alergia al contraste sin premedicación',
      'Accidente cerebrovascular agudo',
      'Anemia severa',
      'Insuficiencia cardíaca no controlada'
    ],
    recovery: 'Observation 4-6 hours. Discharge same day. No heavy lifting with access extremity for 3-5 days. Results discussed.',
    spanishRecovery: 'Observación 4-6 horas. Alta mismo día. No levantar objetos pesados con extremidad de acceso por 3-5 días. Resultados discutidos.'
  },

  {
    procedureId: 'cath-pci',
    name: 'Percutaneous Coronary Intervention (PCI/Angioplasty)',
    spanishName: 'Intervención coronaria percutánea (ICP/Angioplastia)',
    category: 'therapeutic',
    description: 'Catheter-based treatment of coronary artery stenosis with balloon angioplasty and stent placement.',
    spanishDescription: 'Tratamiento basado en catéter de estenosis arterial coronaria con angioplastia con balón y colocación de stent.',
    specialties: ['interventional-cardiology'],
    bodyRegions: ['coronary-arteries', 'heart'],
    complexity: 'high',
    setting: ['cardiac-cath-lab'],
    anesthesia: ['local', 'sedation'],
    icd10pcs: '0270',
    cptCodes: ['92928', '92929', '92933'],
    whatToExpect: 'Access obtained as in diagnostic cath. Guidewire crosses lesion. Balloon inflates to open artery. Stent deployed. Final angiography confirms result. Takes 30-90 minutes.',
    spanishWhatToExpect: 'Acceso obtenido como en cateterismo diagnóstico. Guía cruza lesión. Balón infla para abrir arteria. Stent desplegado. Angiografía final confirma resultado. Toma 30-90 minutos.',
    patientExplanation: 'PCI opens blocked heart arteries using a balloon and stent. A collapsed stent on a balloon is positioned at the blockage, inflated to expand the artery, and left permanently to keep it open. This restores blood flow without open-heart surgery.',
    spanishPatientExplanation: 'La ICP abre arterias cardíacas bloqueadas usando un balón y stent. Un stent colapsado en un balón se posiciona en la obstrucción, se infla para expandir la arteria y se deja permanentemente para mantenerla abierta. Esto restaura el flujo sanguíneo sin cirugía a corazón abierto.',
    preparation: 'Same as diagnostic cath. Loading dose of antiplatelet agents (aspirin, clopidogrel).',
    spanishPreparation: 'Igual que cateterismo diagnóstico. Dosis de carga de agentes antiplaquetarios (aspirina, clopidogrel).',
    preProcedure: 'Same as diagnostic cath. Intra-aortic balloon pump if cardiogenic shock.',
    spanishPreProcedure: 'Igual que cateterismo diagnóstico. Balón intraórtico si shock cardiogénico.',
    postProcedure: 'Same as diagnostic plus dual antiplatelet therapy. Overnight observation often. Monitoring for complications.',
    spanishPostProcedure: 'Igual que diagnóstico más terapia antiplaquetaria dual. Observación durante la noche frecuentemente. Monitoreo de complicaciones.',
    complications: [
      'Stent thrombosis (0.5-2%)',
      'In-stent restenosis (5-10% bare metal, 5-10% drug-eluting after 5 years)',
      'Access complications',
      'Coronary dissection or perforation',
      'Myocardial infarction',
      'Emergency bypass surgery (<1%)',
      'Bleeding',
      'Death (<1%)'
    ],
    spanishComplications: [
      'Trombosis del stent (0.5-2%)',
      'Reestenosis intra-stent (5-10% metálico, 5-10% farmacológico después de 5 años)',
      'Complicaciones de acceso',
      'Disección o perforación coronaria',
      'Infarto de miocardio',
      'Cirugía de bypass de emergencia (<1%)',
      'Sangrado',
      'Muerte (<1%)'
    ],
    contraindications: [
      'Active bleeding',
      'Severe uncorrected coagulopathy',
      'Severe contrast allergy',
      'Anatomy unsuitable for stenting',
      'Left main disease (usually surgical)'
    ],
    spanishContraindications: [
      'Sangrado activo',
      'Coagulopatía severa no corregida',
      'Alergia severa al contraste',
      'Anatomía no adecuada para stent',
      'Enfermedad del tronco (usualmente quirúrgica)'
    ],
    recovery: 'Overnight stay usually. Dual antiplatelet therapy for months to years. Cardiac rehabilitation. Risk factor modification essential.',
    spanishRecovery: 'Estancia durante la noche usualmente. Terapia antiplaquetaria dual por meses a años. Rehabilitación cardíaca. Modificación de factores de riesgo esencial.'
  }
];

// --- Utility Functions ---

export function findEndoscopicProcedure(id: string): EndoscopicProcedureEntry | undefined {
  return ENDOSCOPIC_PROCEDURES.find(p => p.procedureId === id);
}

export function getEndoscopicProceduresByComplexity(level: ComplexityLevel): EndoscopicProcedureEntry[] {
  return ENDOSCOPIC_PROCEDURES.filter(p => p.complexity === level);
}

export function getEndoscopicProceduresByType(type: 'diagnostic' | 'therapeutic' | 'surgical'): EndoscopicProcedureEntry[] {
  return ENDOSCOPIC_PROCEDURES.filter(p => p.category === type);
}

export function getEndoscopicProceduresBySpecialty(specialty: string): EndoscopicProcedureEntry[] {
  return ENDOSCOPIC_PROCEDURES.filter(p => 
    p.specialties.some(s => s.toLowerCase().includes(specialty.toLowerCase()))
  );
}

export function searchEndoscopicProcedures(query: string): EndoscopicProcedureEntry[] {
  const lowerQuery = query.toLowerCase();
  return ENDOSCOPIC_PROCEDURES.filter(p =>
    p.name.toLowerCase().includes(lowerQuery) ||
    p.spanishName.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery) ||
    p.specialties.some(s => s.toLowerCase().includes(lowerQuery))
  );
}
