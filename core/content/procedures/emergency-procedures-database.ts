/**
 * Biological Self - Emergency Procedures Database
 * Critical emergency procedures with detailed protocols, complications, and patient education
 */

import type {
  ProcedureCategory,
  ComplexityLevel,
  AnesthesiaType,
  SettingType,
} from './procedure-database';

export interface EmergencyProcedureEntry {
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

  // Indications
  indications: string[];
  spanishIndications: string[];

  // Patient education
  whatToExpect: string;
  spanishWhatToExpect: string;
  patientExplanation: string;
  spanishPatientExplanation: string;

  // Extended fields
  preparation: string;
  spanishPreparation: string;
  procedure: string;
  spanishProcedure: string;
  postProcedure: string;
  spanishPostProcedure: string;
  complications: string[];
  spanishComplications: string[];
  contraindications: string[];
  spanishContraindications: string[];
  recovery: string;
  spanishRecovery: string;
}

export const EMERGENCY_PROCEDURES: EmergencyProcedureEntry[] = [

  // ============================================================
  // AIRWAY MANAGEMENT
  // ============================================================
  {
    procedureId: 'emerg-intubation',
    name: 'Endotracheal Intubation',
    spanishName: 'Intubación endotraqueal',
    category: 'therapeutic',
    description: 'Insertion of an endotracheal tube through the mouth or nose into the trachea to secure airway and enable mechanical ventilation.',
    spanishDescription: 'Inserción de un tubo endotraqueal a través de la boca o nariz hacia la tráquea para asegurar la vía aérea y permitir ventilación mecánica.',
    specialties: ['emergency-medicine', 'anesthesiology', 'critical-care', 'pulmonology'],
    bodyRegions: ['airway', 'trachea'],
    complexity: 'high',
    setting: ['emergency-department', 'operating-room', 'hospital-inpatient', 'bedside'],
    anesthesia: ['sedation'],
    icd10pcs: '0BH',
    cptCodes: ['31500'],
    indications: [
      'Respiratory failure',
      'Airway protection (altered mental status, aspiration risk)',
      'Cardiac arrest',
      'Severe metabolic acidosis',
      'Airway obstruction',
      'Need for mechanical ventilation'
    ],
    spanishIndications: [
      'Insuficiencia respiratoria',
      'Protección de vía aérea (estado mental alterado, riesgo de aspiración)',
      'Paro cardíaco',
      'Acidosis metabólica severa',
      'Obstrucción de vía aérea',
      'Necesidad de ventilación mecánica'
    ],
    whatToExpect: 'You will be sedated and paralyzed with medications. The doctor uses a laryngoscope to visualize your vocal cords and passes a breathing tube through your mouth into your windpipe. A balloon is inflated to seal the airway. The tube is connected to a ventilator.',
    spanishWhatToExpect: 'Será sedado y paralizado con medicamentos. El médico usa un laringoscopio para visualizar sus cuerdas vocales y pasa un tubo de respiración a través de su boca hacia su tráquea. Se infla un globo para sellar la vía aérea. El tubo se conecta a un ventilador.',
    patientExplanation: 'Intubation places a breathing tube into your windpipe when you cannot breathe adequately on your own. It protects your lungs from stomach contents and connects you to a breathing machine. You will be deeply sedated and will not feel or remember the procedure.',
    spanishPatientExplanation: 'La intubación coloca un tubo de respiración en su tráquea cuando no puede respirar adecuadamente por sí mismo. Protege sus pulmones del contenido estomacal y lo conecta a una máquina de respirar. Estará profundamente sedado y no sentirá ni recordará el procedimiento.',
    preparation: 'Position supine with head elevated. Suction ready. Oxygen preoxygenation. Monitoring (ECG, BP, SpO2, capnography). IV access. Bag-valve-mask available. Difficult airway assessment.',
    spanishPreparation: 'Posición boca arriba con cabeza elevada. Succión lista. Preoxigenación con oxígeno. Monitoreo (ECG, PA, SpO2, capnografía). Acceso IV. Bolsa-válvula-máscara disponible. Evaluación de vía aérea difícil.',
    procedure: 'Preoxygenation. Induction medications (sedative + paralytic). Laryngoscopy with blade to visualize vocal cords. Endotracheal tube passed through cords. Cuff inflated. Tube position confirmed with capnography and auscultation. Secured with tape or holder.',
    spanishProcedure: 'Preoxigenación. Medicamentos de inducción (sedante + paralizante). Laringoscopia con hoja para visualizar cuerdas vocales. Tubo endotraqueal pasado a través de cuerdas. Manguito inflado. Posición del tubo confirmada con capnografía y auscultación. Asegurado con cinta o sujetador.',
    postProcedure: 'Continued sedation. Mechanical ventilation initiated. Chest X-ray to confirm tube position (tip 3-5cm above carina). Sedation protocol. Oral care. DVT prophylaxis.',
    spanishPostProcedure: 'Sedación continuada. Ventilación mecánica iniciada. Radiografía de tórax para confirmar posición del tubo (punta 3-5cm sobre carina). Protocolo de sedación. Cuidado oral. Profilaxis de TVP.',
    complications: [
      'Hypoxemia during intubation',
      'Esophageal intubation',
      'Aspiration',
      'Dental or lip trauma',
      'Laryngospasm',
      'Bradycardia',
      'Failed intubation requiring surgical airway',
      'Barotrauma',
      'Ventilator-associated pneumonia'
    ],
    spanishComplications: [
      'Hipoxemia durante intubación',
      'Intubación esofágica',
      'Aspiración',
      'Trauma dental o labial',
      'Laringoespasmo',
      'Bradicardia',
      'Intubación fallida requiriendo vía aérea quirúrgica',
      'Barotrauma',
      'Neumonía asociada a ventilador'
    ],
    contraindications: [
      'Awake patient refusing (relative)',
      'Known difficult airway with no backup plan',
      'Severe facial trauma distorting anatomy'
    ],
    spanishContraindications: [
      'Paciente despierto que se niega (relativo)',
      'Vía aérea difícil conocida sin plan de respaldo',
      'Trauma facial severo distorsionando anatomía'
    ],
    recovery: 'Extubation when underlying condition resolved and patient meets criteria (adequate oxygenation, ventilation, airway reflexes, mental status). Weaning trials before extubation.',
    spanishRecovery: 'Extubación cuando la condición subyacente se resuelve y el paciente cumple criterios (oxigenación adecuada, ventilación, reflejos de vía aérea, estado mental). Pruebas de destete antes de extubación.'
  },

  {
    procedureId: 'emerg-cricothyrotomy',
    name: 'Emergency Cricothyrotomy',
    spanishName: 'Cricotirotomía de emergencia',
    category: 'therapeutic',
    description: 'Emergency surgical airway created by incising the cricothyroid membrane when endotracheal intubation fails or is impossible.',
    spanishDescription: 'Vía aérea quirúrgica de emergencia creada al incidir la membrana cricotiroidea cuando la intubación endotraqueal falla o es imposible.',
    specialties: ['emergency-medicine', 'trauma-surgery', 'anesthesiology', 'otolaryngology'],
    bodyRegions: ['neck', 'airway'],
    complexity: 'very-high',
    setting: ['emergency-department', 'hospital-inpatient', 'operating-room'],
    anesthesia: ['local'],
    icd10pcs: '0B1',
    cptCodes: ['31603', '31605'],
    indications: [
      'Cannot intubate, cannot ventilate scenario',
      'Severe facial trauma precluding oral/nasal intubation',
      'Upper airway obstruction',
      'Angioedema',
      'Massive facial bleeding',
      'Cervical spine instability with failed intubation'
    ],
    spanishIndications: [
      'Escenario de no puedo intubar, no puedo ventilar',
      'Trauma facial severo que impide intubación oral/nasal',
      'Obstrucción de vía aérea superior',
      'Angioedema',
      'Sangrado facial masivo',
      'Inestabilidad de columna cervical con intubación fallida'
    ],
    whatToExpect: 'This is an emergency procedure performed when you cannot breathe and a breathing tube cannot be placed through the mouth. A small cut is made in the front of the neck through the cricothyroid membrane, and a tube is inserted directly into the windpipe.',
    spanishWhatToExpect: 'Este es un procedimiento de emergencia realizado cuando no puede respirar y un tubo de respiración no puede colocarse por la boca. Se hace un pequeño corte en el frente del cuello a través de la membrana cricotiroidea, y se inserta un tubo directamente en la tráquea.',
    patientExplanation: 'Cricothyrotomy is an emergency surgery to create a direct airway through the neck when standard breathing tubes cannot be placed. A small tube is inserted through the cricothyroid membrane below the Adam apple to provide oxygen when the upper airway is blocked.',
    spanishPatientExplanation: 'La cricotirotomía es una cirugía de emergencia para crear una vía aérea directa a través del cuello cuando los tubos de respiración estándar no pueden colocarse. Un tubo pequeño se inserta a través de la membrana cricotiroidea debajo de la nuez de Adán para proporcionar oxígeno cuando la vía aérea superior está bloqueada.',
    preparation: 'Position supine with neck extended if safe. Prep neck rapidly if time. Identify landmarks: thyroid cartilage, cricothyroid membrane, sternal notch. Equipment: scalpel, tracheal hook, Trousseau dilator, 6.0 cuffed ET tube or tracheostomy tube.',
    spanishPreparation: 'Posición boca arriba con cuello extendido si es seguro. Preparar cuello rápidamente si hay tiempo. Identificar puntos de referencia: cartílago tiroides, membrana cricotiroidea, muesca esternal. Equipo: bisturí, gancho traqueal, dilatador de Trousseau, tubo ET con manguito 6.0 o tubo de traqueotomía.',
    procedure: 'Palpate cricothyroid membrane. Stab incision through skin and membrane. Insert tracheal hook to stabilize. Dilate opening. Insert tube. Inflate cuff. Confirm position with capnography. Secure tube. Ventilate. Convert to formal tracheostomy within 24-72 hours.',
    spanishProcedure: 'Palpar membrana cricotiroidea. Incisión de puñalada a través de piel y membrana. Insertar gancho traqueal para estabilizar. Dilatar abertura. Insertar tubo. Inflar manguito. Confirmar posición con capnografía. Asegurar tubo. Ventilar. Convertir a traqueotomía formal dentro de 24-72 horas.',
    postProcedure: 'Secure airway. Oxygenation/ventilation. Control bleeding. CXR to confirm position. Consult ENT for conversion to tracheostomy. Antibiotics. Wound care.',
    spanishPostProcedure: 'Vía aérea asegurada. Oxigenación/ventilación. Control de sangrado. Radiografía de tórax para confirmar posición. Consultar otorrinolaringología para conversión a traqueotomía. Antibióticos. Cuidado de herida.',
    complications: [
      'Hemorrhage',
      'Esophageal perforation',
      'Subglottic stenosis',
      'Vocal cord injury',
      'Thyroid injury',
      'Posterior tracheal wall perforation',
      'Pneumothorax',
      'Infection',
      'Conversion failure'
    ],
    spanishComplications: [
      'Hemorragia',
      'Perforación esofágica',
      'Estenosis subglótica',
      'Lesión de cuerdas vocales',
      'Lesión tiroidea',
      'Perforación de pared traqueal posterior',
      'Neumotórax',
      'Infección',
      'Falla de conversión'
    ],
    contraindications: [
      'None absolute in true cannot intubate/cannot ventilate',
      'Tracheal transection',
      'Inability to identify landmarks (massive trauma)'
    ],
    spanishContraindications: [
      'Ninguna absoluta en verdadero no puedo intubar/no puedo ventilar',
      'Sección traqueal',
      'Incapacidad para identificar puntos de referencia (trauma masivo)'
    ],
    recovery: 'Conversion to formal tracheostomy usually within 24-72 hours. Decannulation when underlying condition resolves. Voice rehabilitation. Possible need for airway dilation if stenosis develops.',
    spanishRecovery: 'Conversión a traqueotomía formal usualmente dentro de 24-72 horas. Descanulación cuando la condición subyacente se resuelve. Rehabilitación de voz. Posible necesidad de dilatación de vía aérea si se desarrolla estenosis.'
  },

  {
    procedureId: 'emerg-tracheostomy',
    name: 'Emergency/ Percutaneous Tracheostomy',
    spanishName: 'Traqueotomía de emergencia/percutánea',
    category: 'therapeutic',
    description: 'Creation of an opening in the anterior neck into the trachea for prolonged airway management or upper airway obstruction.',
    spanishDescription: 'Creación de una abertura en el cuello anterior hacia la tráquea para manejo prolongado de vía aérea o obstrucción de vía aérea superior.',
    specialties: ['surgery', 'otolaryngology', 'critical-care', 'pulmonology'],
    bodyRegions: ['neck', 'trachea'],
    complexity: 'high',
    setting: ['operating-room', 'bedside', 'hospital-inpatient'],
    anesthesia: ['local', 'general'],
    icd10pcs: '0B1',
    cptCodes: ['31600', '31601'],
    indications: [
      'Prolonged mechanical ventilation (>14 days)',
      'Upper airway obstruction',
      'Severe facial trauma',
      'Need for pulmonary toilet',
      'Airway protection with difficult extubation'
    ],
    spanishIndications: [
      'Ventilación mecánica prolongada (>14 días)',
      'Obstrucción de vía aérea superior',
      'Trauma facial severo',
      'Necesidad de aseo pulmonar',
      'Protección de vía aérea con extubación difícil'
    ],
    whatToExpect: 'A small incision is made in the lower front of your neck. The trachea is opened, and a tube is inserted to create a new airway. This allows you to breathe without a tube in your mouth and may be more comfortable for long-term breathing support.',
    spanishWhatToExpect: 'Se hace una pequeña incisión en la parte frontal inferior de su cuello. La tráquea se abre y se inserta un tubo para crear una nueva vía aérea. Esto le permite respirar sin un tubo en su boca y puede ser más cómodo para soporte respiratorio a largo plazo.',
    patientExplanation: 'Tracheostomy creates a direct opening into your windpipe through the neck. A tube is placed through this opening to provide airflow to your lungs. It is used when you need breathing support for an extended time or when your upper airway is blocked.',
    spanishPatientExplanation: 'La traqueotomía crea una abertura directa en su tráquea a través del cuello. Se coloca un tubo a través de esta abertura para proporcionar flujo de aire a sus pulmones. Se usa cuando necesita soporte respiratorio por tiempo extendido o cuando su vía aérea superior está bloqueada.',
    preparation: 'Patient on ventilator with ETT positioned. Head extended. Prep and drape. Coagulation studies reviewed. Consent. Equipment: tracheostomy kit with dilators, trach tube (usually #6-8), bronchoscope if available.',
    spanishPreparation: 'Paciente en ventilador con tubo endotraqueal posicionado. Cabeza extendida. Preparación y cubrimiento. Estudios de coagulación revisados. Consentimiento. Equipo: kit de traqueotomía con dilatadores, tubo de traqueotomía (usualmente #6-8), broncoscopio si está disponible.',
    procedure: 'Vertical or horizontal neck incision. Dissection through pretracheal fascia. Cricoid hook placed. Vertical tracheal incision (second-third rings). Hemostasis. Tube inserted. Cuff inflated. Confirm position with CO2. Secure with sutures and trach ties.',
    spanishProcedure: 'Incisión vertical u horizontal en cuello. Disección a través de fascia pretraqueal. Gancho cricoides colocado. Incisión traqueal vertical (anillos segundo-tercero). Hemostasia. Tubo insertado. Manguito inflado. Confirmar posición con CO2. Asegurar con suturas y lazos de traqueotomía.',
    postProcedure: 'Chest X-ray for tube position and pneumothorax. Suctioning protocol. Wound care. Speech evaluation when cuff deflated. Swallowing assessment. Decannulation planning.',
    spanishPostProcedure: 'Radiografía de tórax para posición del tubo y neumotórax. Protocolo de succión. Cuidado de herida. Evaluación de habla cuando el manguito se desinfla. Evaluación de deglución. Planificación de descanulación.',
    complications: [
      'Hemorrhage',
      'Pneumothorax',
      'Tube displacement/obstruction',
      'Subcutaneous emphysema',
      'Infection',
      'Tracheal stenosis',
      'Tracheoesophageal fistula',
      'Aspiration',
      'Scarring'
    ],
    spanishComplications: [
      'Hemorragia',
      'Neumotórax',
      'Desplazamiento/obstrucción del tubo',
      'Enfisema subcutáneo',
      'Infección',
      'Estenosis traqueal',
      'Fístula traqueoesofágica',
      'Aspiración',
      'Cicatrización'
    ],
    contraindications: [
      'Children under 12 (usually)',
      'Uncorrectable coagulopathy',
      'High innominate artery (risk erosion)',
      'Positive end-expiratory pressure >15',
      'High FiO2 requirements',
      'Unstable cervical spine'
    ],
    spanishContraindications: [
      'Niños menores de 12 (usualmente)',
      'Coagulopatía incorregible',
      'Arteria innominada alta (riesgo erosión)',
      'Presión positiva al final de la espiración >15',
      'Requerimientos altos de FiO2',
      'Columna cervical inestable'
    ],
    recovery: 'Tube typically removed when underlying condition resolved, patient can protect airway, and ventilation weaned. Stoma closes spontaneously or surgically. Voice therapy may be needed.',
    spanishRecovery: 'El tubo típicamente se remueve cuando la condición subyacente se resuelve, el paciente puede proteger la vía aérea y la ventilación se desteta. El estoma cierra espontáneamente o quirúrgicamente. Terapia de voz puede ser necesaria.'
  },

  // ============================================================
  // VASCULAR ACCESS
  // ============================================================
  {
    procedureId: 'emerg-central-line',
    name: 'Central Venous Catheterization',
    spanishName: 'Cateterización venosa central',
    category: 'therapeutic',
    description: 'Insertion of a large-bore catheter into a central vein for hemodynamic monitoring, medication administration, or dialysis access.',
    spanishDescription: 'Inserción de un catéter de gran calibre en una vena central para monitoreo hemodinámico, administración de medicamentos o acceso para diálisis.',
    specialties: ['emergency-medicine', 'critical-care', 'anesthesiology', 'surgery'],
    bodyRegions: ['neck', 'chest', 'groin', 'vasculature'],
    complexity: 'moderate',
    setting: ['emergency-department', 'hospital-inpatient', 'operating-room', 'bedside'],
    anesthesia: ['local', 'sedation'],
    icd10pcs: '02V',
    cptCodes: ['36555', '36556', '36557'],
    indications: [
      'Hemodynamic monitoring (CVP, PA catheter)',
      'Central access for medications (vasopressors, chemotherapy)',
      'Total parenteral nutrition',
      'Hemodialysis access',
      'Rapid fluid resuscitation',
      'Difficult peripheral access'
    ],
    spanishIndications: [
      'Monitoreo hemodinámico (PVC, catéter de arteria pulmonar)',
      'Acceso central para medicamentos (vasopresores, quimioterapia)',
      'Nutrición parenteral total',
      'Acceso para hemodiálisis',
      'Reanimación con líquidos rápida',
      'Acceso periférico difícil'
    ],
    whatToExpect: 'The skin over the chosen vein (usually neck, below collarbone, or groin) is numbed with local anesthetic. Using ultrasound guidance, a needle is placed into the vein, and the catheter is threaded in. You may feel pressure but should not feel sharp pain.',
    spanishWhatToExpect: 'La piel sobre la vena elegida (generalmente cuello, debajo de clavícula o ingle) se adormece con anestésico local. Usando guía por ultrasonido, se coloca una aguja en la vena y se pasa el catéter. Puede sentir presión pero no debería sentir dolor agudo.',
    patientExplanation: 'A central line is a special IV placed in a large vein near your heart. It allows doctors to give strong medications, monitor heart pressures, or provide dialysis. The procedure is done with sterile technique and ultrasound guidance for safety.',
    spanishPatientExplanation: 'Una línea central es una vía intravenosa especial colocada en una vena grande cerca de su corazón. Permite a los médicos administrar medicamentos fuertes, monitorear presiones cardíacas o proporcionar diálisis. El procedimiento se realiza con técnica estéril y guía por ultrasonido para seguridad.',
    preparation: 'Sterile field setup. Ultrasound machine. Probes and covers. Local anesthetic. Central line kit. Cap, mask, sterile gown and gloves. Patient positioning (Trendelenburg for IJ, reverse Trendelenburg for subclavian, leg abduction for femoral).',
    spanishPreparation: 'Configuración de campo estéril. Máquina de ultrasonido. Sondas y cubiertas. Anestésico local. Kit de línea central. Gorro, mascarilla, bata estéril y guantes. Posicionamiento del paciente (Trendelenburg para YI, Trendelenburg inverso para subclavia, abducción de pierna para femoral).',
    procedure: 'Ultrasound identification of vein. Local anesthetic infiltration. Needle entry with ultrasound guidance. Guidewire advancement. Dilation of tract. Catheter insertion. Confirmation with ultrasound or manometry. Secure with sutures. Dressing. CXR for IJ/subclavian to rule out pneumothorax.',
    spanishProcedure: 'Identificación por ultrasonido de vena. Infiltración de anestésico local. Entrada de aguja con guía por ultrasonido. Avance de guía. Dilatación de trayecto. Inserción de catéter. Confirmación con ultrasonido o manometría. Asegurar con suturas. Apósito. Radiografía de tórax para YI/subclavia para descartar neumotórax.',
    postProcedure: 'Continuous monitoring of insertion site. Daily dressing changes. Line necessity assessment daily. Remove when no longer needed. Blood culture if fever.',
    spanishPostProcedure: 'Monitoreo continuo del sitio de inserción. Cambios diarios de apósito. Evaluación diaria de necesidad de línea. Retirar cuando ya no sea necesario. Hemocultivo si fiebre.',
    complications: [
      'Pneumothorax (IJ/subclavian, 1-5%)',
      'Arterial puncture',
      'Hematoma',
      'Air embolism',
      'Infection: local or CLABSI',
      'Thrombosis',
      'Cardiac arrhythmia',
      'Malposition',
      'Hemothorax'
    ],
    spanishComplications: [
      'Neumotórax (YI/subclavia, 1-5%)',
      'Punción arterial',
      'Hematoma',
      'Embolia aérea',
      'Infección: local o CLABSI',
      'Trombosis',
      'Arritmia cardíaca',
      'Mala posición',
      'Hemotórax'
    ],
    contraindications: [
      'Infection at insertion site',
      'Thrombosis of target vein',
      'Coagulopathy (relative)',
      'Distorted anatomy from trauma or surgery'
    ],
    spanishContraindications: [
      'Infección en sitio de inserción',
      'Trombosis de vena objetivo',
      'Coagulopatía (relativo)',
      'Anatomía distorsionada por trauma o cirugía'
    ],
    recovery: 'Catheter removal when no longer clinically indicated. Site heals spontaneously. Monitor for delayed complications.',
    spanishRecovery: 'Remoción del catéter cuando ya no está indicado clínicamente. El sitio sana espontáneamente. Monitorear complicaciones tardías.'
  },

  {
    procedureId: 'emerg-io-access',
    name: 'Intraosseous Access',
    spanishName: 'Acceso intraóseo',
    category: 'therapeutic',
    description: 'Insertion of a needle into the bone marrow cavity for emergency vascular access when peripheral and central access fail.',
    spanishDescription: 'Inserción de una aguja en la cavidad de médula ósea para acceso vascular de emergencia cuando fallan accesos periférico y central.',
    specialties: ['emergency-medicine', 'critical-care', 'pediatrics', 'trauma-surgery'],
    bodyRegions: ['bone', 'tibia', 'humerus'],
    complexity: 'low',
    setting: ['emergency-department', 'hospital-inpatient', 'bedside', 'operating-room'],
    anesthesia: ['local', 'none'],
    icd10pcs: '3E0',
    cptCodes: ['36680'],
    indications: [
      'Cardiac arrest',
      'Shock with failed peripheral access',
      'Difficult vascular access in critical patient',
      'Massive trauma',
      'Burns precluding peripheral access',
      'Pediatric emergencies'
    ],
    spanishIndications: [
      'Paro cardíaco',
      'Shock con acceso periférico fallido',
      'Acceso vascular difícil en paciente crítico',
      'Trauma masivo',
      'Quemaduras que impiden acceso periférico',
      'Emergencias pediátricas'
    ],
    whatToExpect: 'When IV access cannot be obtained quickly in an emergency, a special needle is drilled or pushed through the skin into the bone marrow, usually in the shin or upper arm. Fluids and medications can then be given through this route.',
    spanishWhatToExpect: 'Cuando el acceso IV no puede obtenerse rápidamente en una emergencia, una aguja especial es taladrada o empujada a través de la piel hacia la médula ósea, usualmente en la espinilla o brazo superior. Líquidos y medicamentos pueden administrarse a través de esta ruta.',
    patientExplanation: 'Intraosseous access provides emergency medication and fluid delivery through the bone marrow when regular IVs cannot be started. It works as fast as an IV and can be life-saving in emergencies when every second counts.',
    spanishPatientExplanation: 'El acceso intraóseo proporciona administración de emergencia de medicamentos y líquidos a través de la médula ósea cuando las vías intravenosas regulares no pueden iniciarse. Funciona tan rápido como una vía IV y puede salvar vidas en emergencias cuando cada segundo cuenta.',
    preparation: 'IO device (EZ-IO, manual needle). Site selection (proximal tibia, distal tibia, proximal humerus). Prep site with antiseptic. Local anesthetic if patient conscious.',
    spanishPreparation: 'Dispositivo IO (EZ-IO, aguja manual). Selección de sitio (tibia proximal, tibia distal, húmero proximal). Preparar sitio con antiséptico. Anestésico local si paciente consciente.',
    procedure: 'Position limb. Identify landmarks. Insert IO needle perpendicular to bone with twisting motion or powered driver. Advance through cortex. Stop when decreased resistance felt. Remove stylet. Confirm position: aspirate marrow, flush easily, stable needle, no extravasation. Secure. Connect IV tubing.',
    spanishProcedure: 'Posicionar extremidad. Identificar puntos de referencia. Insertar aguja IO perpendicular al hueso con movimiento de torsión o taladro motorizado. Avanzar a través de corteza. Detener cuando se siente disminución de resistencia. Remover estilete. Confirmar posición: aspirar médula, irrigar fácilmente, aguja estable, sin extravasación. Asegurar. Conectar tubo IV.',
    postProcedure: 'All medications/fluids deliverable via IO. Monitor site for extravasation, infection, compartment syndrome. Replace with IV when access obtained. Remove IO within 24 hours.',
    spanishPostProcedure: 'Todos los medicamentos/líquidos pueden administrarse vía IO. Monitorear sitio para extravasación, infección, síndrome compartimental. Reemplazar con IV cuando se obtenga acceso. Remover IO dentro de 24 horas.',
    complications: [
      'Extravasation of fluids',
      'Compartment syndrome',
      'Osteomyelitis (rare)',
      'Fracture',
      'Through-and-through penetration',
      'Growth plate injury (children)',
      'Local infection',
      'Pain (in conscious patients)'
    ],
    spanishComplications: [
      'Extravasación de líquidos',
      'Síndrome compartimental',
      'Osteomielitis (rara)',
      'Fractura',
      'Penetración de lado a lado',
      'Lesión de placa de crecimiento (niños)',
      'Infección local',
      'Dolor (en pacientes conscientes)'
    ],
    contraindications: [
      'Fracture at insertion site',
      'Previous IO attempt in same bone',
      'Infection at site',
      'Burn over site',
      'Prosthetic joint near site',
      'Osteogenesis imperfecta'
    ],
    spanishContraindications: [
      'Fractura en sitio de inserción',
      'Intento IO previo en mismo hueso',
      'Infección en sitio',
      'Quemadura sobre sitio',
      'Articulación protésica cerca del sitio',
      'Osteogénesis imperfecta'
    ],
    recovery: 'IO removed when peripheral or central access obtained. Site heals spontaneously. Monitor for infection or compartment syndrome.',
    spanishRecovery: 'IO removido cuando se obtiene acceso periférico o central. El sitio sana espontáneamente. Monitorear infección o síndrome compartimental.'
  },

  // ============================================================
  // TRAUMA PROCEDURES
  // ============================================================
  {
    procedureId: 'emerg-chest-tube',
    name: 'Chest Tube Thoracostomy',
    spanishName: 'Toracostomía con tubo torácico',
    category: 'therapeutic',
    description: 'Insertion of a tube through the chest wall into the pleural space to drain air, blood, or fluid.',
    spanishDescription: 'Inserción de un tubo a través de la pared torácica hacia el espacio pleural para drenar aire, sangre o líquido.',
    specialties: ['emergency-medicine', 'trauma-surgery', 'thoracic-surgery', 'pulmonology'],
    bodyRegions: ['chest', 'pleural-space'],
    complexity: 'moderate',
    setting: ['emergency-department', 'hospital-inpatient', 'bedside', 'operating-room'],
    anesthesia: ['local', 'sedation'],
    icd10pcs: '0W9',
    cptCodes: ['32551', '32554', '32555'],
    indications: [
      'Pneumothorax',
      'Hemothorax',
      'Hemopneumothorax',
      'Empyema',
      'Chylothorax',
      'Pleural effusion',
      'Post-operative drainage'
    ],
    spanishIndications: [
      'Neumotórax',
      'Hemotórax',
      'Hemoneumotórax',
      'Empiema',
      'Quilotórax',
      'Derrame pleural',
      'Drenaje post-operatorio'
    ],
    whatToExpect: 'You will lie on your side or back. The area between your ribs is numbed with local anesthetic. A small incision is made, and a tube is guided into the space around your lung. The tube connects to a drainage system to remove air or fluid and allow your lung to re-expand.',
    spanishWhatToExpect: 'Se acostará de lado o boca arriba. El área entre sus costillas se adormece con anestésico local. Se hace una pequeña incisión y se guía un tubo hacia el espacio alrededor de su pulmón. El tubo se conecta a un sistema de drenaje para remover aire o líquido y permitir que su pulmón se reexpanda.',
    patientExplanation: 'A chest tube is placed through your chest wall into the space between your lung and ribcage to drain air or fluid that has collected there. This helps your lung fully expand so you can breathe normally again. The tube stays in place until the problem resolves.',
    spanishPatientExplanation: 'Un tubo torácico se coloca a través de su pared torácica hacia el espacio entre su pulmón y caja torácica para drenar aire o líquido que se ha acumulado allí. Esto ayuda a que su pulmón se expanda completamente para que pueda respirar normalmente de nuevo. El tubo permanece en su lugar hasta que el problema se resuelve.',
    preparation: 'Position: supine or lateral with arm raised. Ultrasound if available. Prep and drape. Local anesthetic. Sedation if needed. Equipment: chest tube (28-36 Fr), Kelly clamp, scalpel, suture, drainage system with water seal.',
    spanishPreparation: 'Posición: boca arriba o lateral con brazo levantado. Ultrasonido si está disponible. Preparación y cubrimiento. Anestésico local. Sedación si es necesario. Equipo: tubo torácico (28-36 Fr), pinza Kelly, bisturí, sutura, sistema de drenaje con sello de agua.',
    procedure: 'Identify rib space (usually 4th-5th intercostal space, midaxillary line or triangle of safety). Anesthetize skin, subcutaneous tissue, periosteum. Incision parallel to rib. Blunt dissection over top of rib into pleural space. Finger sweep to clear adhesions. Clamped chest tube advanced into pleural space. Connect to drainage. Suture in place. Dressing. CXR to confirm position.',
    spanishProcedure: 'Identificar espacio intercostal (generalmente 4to-5to espacio intercostal, línea medioaxilar o triángulo de seguridad). Anestesiar piel, tejido subcutáneo, periostio. Incisión paralela a costilla. Disección roma sobre parte superior de costilla hacia espacio pleural. Exploración con dedo para limpiar adherencias. Tubo torácico con pinza avanzado hacia espacio pleural. Conectar a drenaje. Suturar en lugar. Apósito. Radiografía de tórax para confirmar posición.',
    postProcedure: 'Monitor vital signs and oxygenation. Assess for air leak (bubbling in water seal). Keep drainage system below chest level. Ensure tube not kinked. Daily CXR. Pain control. Incentive spirometry. Remove when drainage minimal and no air leak.',
    spanishPostProcedure: 'Monitorear signos vitales y oxigenación. Evaluar fuga de aire (burbujeo en sello de agua). Mantener sistema de drenaje debajo del nivel del pecho. Asegurar que el tubo no esté doblado. Radiografía de tórax diaria. Control de dolor. Espirometría incentivada. Retirar cuando el drenaje sea mínimo y no haya fuga de aire.',
    complications: [
      'Infection',
      'Bleeding',
      'Intercostal artery laceration',
      'Lung laceration',
      'Subcutaneous emphysema',
      'Malposition',
      'Tube occlusion',
      'Re-expansion pulmonary edema',
      'Intra-abdominal placement',
      'Nerve injury'
    ],
    spanishComplications: [
      'Infección',
      'Sangrado',
      'Laceración de arteria intercostal',
      'Laceración pulmonar',
      'Enfisema subcutáneo',
      'Mala posición',
      'Oclusión del tubo',
      'Edema pulmonar por reexpansión',
      'Colocación intraabdominal',
      'Lesión nerviosa'
    ],
    contraindications: [
      'None absolute in life-threatening pneumothorax',
      'Coagulopathy (relative)',
      'Loculated effusion (may need CT guidance)',
      'Thoracotomy planned (relative)'
    ],
    spanishContraindications: [
      'Ninguna absoluta en neumotórax que amenaza la vida',
      'Coagulopatía (relativo)',
      'Derrame loculado (puede necesitar guía por TC)',
      'Toracotomía planificada (relativo)'
    ],
    recovery: 'Tube removed when air leak resolved and drainage <150-200ml/day. Occlusive dressing placed. CXR post-removal. Monitor for recurrent pneumothorax. Wound heals in 1-2 weeks.',
    spanishRecovery: 'Tubo removido cuando la fuga de aire se resuelve y drenaje <150-200ml/día. Apósito oclusivo colocado. Radiografía de tórax post-remoción. Monitorear neumotórax recurrente. Herida sana en 1-2 semanas.'
  },

  {
    procedureId: 'emerg-thoracotomy',
    name: 'Emergency Thoracotomy',
    spanishName: 'Toracotomía de emergencia',
    category: 'surgical',
    description: 'Emergency surgical opening of the chest to control hemorrhage, repair cardiac injury, or perform open cardiac massage.',
    spanishDescription: 'Apertura quirúrgica de emergencia del tórax para controlar hemorragia, reparar lesión cardíaca o realizar masaje cardíaco abierto.',
    specialties: ['trauma-surgery', 'thoracic-surgery', 'cardiothoracic-surgery', 'emergency-medicine'],
    bodyRegions: ['chest', 'heart', 'lungs'],
    complexity: 'very-high',
    setting: ['emergency-department', 'operating-room'],
    anesthesia: ['general'],
    icd10pcs: '0W9',
    cptCodes: ['32110'],
    indications: [
      'Cardiac tamponade with hemodynamic collapse',
      'Penetrating chest trauma with loss of vital signs',
      'Massive intrathoracic hemorrhage',
      'Thoracic vascular injury',
      'Cardiac arrest with recent witnessed trauma'
    ],
    spanishIndications: [
      'Taponamiento cardíaco con colapso hemodinámico',
      'Trauma torácico penetrante con pérdida de signos vitales',
      'Hemorragia intratorácica masiva',
      'Lesión vascular torácica',
      'Paro cardíaco con trauma presenciado reciente'
    ],
    whatToExpect: 'This is an emergency life-saving surgery performed when you have suffered severe chest injury and are dying. The chest is opened rapidly to find and stop bleeding, repair the heart if injured, or directly massage the heart to maintain circulation.',
    spanishWhatToExpect: 'Esta es una cirugía de emergencia que salva vidas realizada cuando ha sufrido una lesión torácica severa y está muriendo. El tórax se abre rápidamente para encontrar y detener el sangrado, reparar el corazón si está lesionado, o masajear directamente el corazón para mantener la circulación.',
    patientExplanation: 'Emergency thoracotomy is performed when someone has life-threatening chest trauma and is near death. The chest is opened in the emergency room or operating room to stop bleeding, relieve pressure around the heart, or directly massage the heart. Survival rates are low but this is the only hope in these dire situations.',
    spanishPatientExplanation: 'La toracotomía de emergencia se realiza cuando alguien tiene trauma torácico que amenaza la vida y está cerca de la muerte. El tórax se abre en la sala de emergencias o quirófano para detener el sangrado, aliviar la presión alrededor del corazón o masajear directamente el corazón. Las tasas de supervivencia son bajas pero esta es la única esperanza en estas situaciones graves.',
    preparation: 'Rapid positioning. Left arm abducted. Prep if time permits. Large incision blade. Rib spreader. Blood products if available. Cardiac stapler.',
    spanishPreparation: 'Posicionamiento rápido. Brazo izquierdo abducido. Preparación si el tiempo lo permite. Hoja de incisión grande. Separador de costillas. Productos sanguíneos si están disponibles. Grapadora cardíaca.',
    procedure: 'Left anterolateral thoracotomy incision (4th-5th intercostal space). Extend to right if needed (clamshell). Enter pleural space. Evacuate blood/clots. Cross-clamp aorta if needed. Open pericardium. Direct cardiac massage if needed. Control cardiac wounds. Control vascular injuries.',
    spanishProcedure: 'Incisión de toracotomía anterolateral izquierda (4to-5to espacio intercostal). Extender a derecha si es necesario (concha). Entrar espacio pleural. Evacuar sangre/coágulos. Clampar aorta cruzada si es necesario. Abrir pericardio. Masaje cardíaco directo si es necesario. Controlar heridas cardíacas. Controlar lesiones vasculares.',
    postProcedure: 'If ROSC (return of spontaneous circulation), proceed to OR for definitive repair. Massive transfusion. Rewarming. ICU care if survived.',
    spanishPostProcedure: 'Si RCEV (retorno de circulación espontánea), proceder a quirófano para reparación definitiva. Transfusión masiva. Recalentamiento. Cuidados en UCI si sobrevive.',
    complications: [
      'Death (high mortality, especially blunt trauma)',
      'Infection',
      'Cardiac injury during procedure',
      'Coronary artery ligation',
      'Phrenic nerve injury',
      'Hypothermia',
      'Coagulopathy',
      'Multi-organ failure'
    ],
    spanishComplications: [
      'Muerte (alta mortalidad, especialmente trauma contuso)',
      'Infección',
      'Lesión cardíaca durante procedimiento',
      'Ligadura de arteria coronaria',
      'Lesión del nervio frénico',
      'Hipotermia',
      'Coagulopatía',
      'Fallo multiorgánico'
    ],
    contraindications: [
      'No signs of life at scene (penetrating)',
      'No signs of life en route to hospital',
      'Asystole without pericardial tamponade',
      'Blunt trauma with no vital signs (very poor prognosis)'
    ],
    spanishContraindications: [
      'Sin signos de vida en escena (penetrante)',
      'Sin signos de vida en camino al hospital',
      'Asistolia sin taponamiento pericárdico',
      'Trauma contuso sin signos vitales (muy mal pronóstico)'
    ],
    recovery: 'Survival varies: 10-30% for penetrating trauma with signs of life, <5% for blunt trauma. Survivors require ICU, often reoperation, rehabilitation.',
    spanishRecovery: 'La supervivencia varía: 10-30% para trauma penetrante con signos de vida, <5% para trauma contuso. Los sobrevivientes requieren UCI, frecuentemente reoperación, rehabilitación.'
  },

  {
    procedureId: 'emerg-dpl',
    name: 'Diagnostic Peritoneal Lavage (DPL)',
    spanishName: 'Lavado peritoneal diagnóstico (LPD)',
    category: 'diagnostic',
    description: 'Invasive procedure to detect intra-abdominal bleeding or bowel injury in trauma patients when FAST and CT unavailable or contraindicated.',
    spanishDescription: 'Procedimiento invasivo para detectar sangrado intraabdominal o lesión intestinal en pacientes de trauma cuando FAST y TC no están disponibles o están contraindicados.',
    specialties: ['trauma-surgery', 'emergency-medicine', 'general-surgery'],
    bodyRegions: ['abdomen'],
    complexity: 'moderate',
    setting: ['emergency-department', 'operating-room'],
    anesthesia: ['local'],
    icd10pcs: '0W9G',
    cptCodes: ['49020'],
    indications: [
      'Unexplained hypotension in trauma patient',
      'Unevaluable abdomen (altered mental status, spinal injury)',
      'When FAST unavailable or equivocal',
      'When CT contraindicated (unstable, no scanner)',
      'Before non-trauma surgery in unstable patient'
    ],
    spanishIndications: [
      'Hipotensión inexplicada en paciente de trauma',
      'Abdomen no evaluable (estado mental alterado, lesión espinal)',
      'Cuando FAST no disponible o equívoco',
      'Cuando TC contraindicado (inestable, no hay escáner)',
      'Antes de cirugía no de trauma en paciente inestable'
    ],
    whatToExpect: 'A small incision is made below your belly button. A catheter is inserted into your abdominal cavity. Fluid is instilled then drained back. The fluid is checked for blood or bowel contents indicating internal injury requiring surgery.',
    spanishWhatToExpect: 'Se hace una pequeña incisión debajo de su ombligo. Se inserta un catéter en su cavidad abdominal. Se instila líquido y luego se drena de vuelta. El líquido se revisa por sangre o contenido intestinal indicando lesión interna que requiere cirugía.',
    patientExplanation: 'DPL is a procedure to detect internal bleeding or organ damage inside your abdomen after trauma. Fluid is placed in your belly through a small tube, then drained out and examined. If blood is found, emergency surgery is needed to find and fix the injury.',
    spanishPatientExplanation: 'El LPD es un procedimiento para detectar sangrado interno o daño a órganos dentro de su abdomen después de trauma. Se coloca líquido en su vientre a través de un tubo pequeño, luego se drena y se examina. Si se encuentra sangre, se necesita cirugía de emergencia para encontrar y reparar la lesión.',
    preparation: 'Foley catheter (empty bladder). NG tube (decompress stomach). Prep abdomen. Local anesthetic. Equipment: DPL catheter set or peritoneal dialysis catheter.',
    spanishPreparation: 'Sonda Foley (vaciar vejiga). Sonda nasogástrica (descomprimir estómago). Preparar abdomen. Anestésico local. Equipo: set de catéter de LPD o catéter de diálisis peritoneal.',
    procedure: 'Infraumbilical incision (open technique) or percutaneous (Seldinger). Fascial incision. Peritoneal entry. Catheter insertion. Aspirate: if >10ml blood, positive. If negative, instill 1L warm saline (adults). Drain by gravity. Send fluid for RBC count, WBC, amylase, bilirubin.',
    spanishProcedure: 'Incisión infraumbilical (técnica abierta) o percutánea (Seldinger). Incisión fascial. Entrada peritoneal. Inserción de catéter. Aspirar: si >10ml sangre, positivo. Si negativo, instilar 1L solución salina tibia (adultos). Drenar por gravedad. Enviar líquido para recuento de GR, GB, amilasa, bilirrubina.',
    postProcedure: 'If positive: proceed to OR for exploratory laparotomy. If negative: continue observation, repeat exam. Wound closed.',
    spanishPostProcedure: 'Si positivo: proceder a quirófano para laparotomía exploratoria. Si negativo: continuar observación, repetir examen. Herida cerrada.',
    complications: [
      'Bowel perforation',
      'Bladder perforation',
      'Vascular injury',
      'Wound infection',
      'False positive (pre-existing bleeding)',
      'False negative (diaphragm injury, retroperitoneal)',
      'Delayed recognition of injury'
    ],
    spanishComplications: [
      'Perforación intestinal',
      'Perforación vesical',
      'Lesión vascular',
      'Infección de herida',
      'Falso positivo (sangrado preexistente)',
      'Falso negativo (lesión diafragmática, retroperitoneal)',
      'Reconocimiento tardío de lesión'
    ],
    contraindications: [
      'Multiple prior abdominal surgeries (relative)',
      'Obesity (relative)',
      'Coagulopathy (relative)',
      'Pregnancy (use open supraumbilical)',
      'Pelvic fracture with hematoma'
    ],
    spanishContraindications: [
      'Múltiples cirugías abdominales previas (relativo)',
      'Obesidad (relativo)',
      'Coagulopatía (relativo)',
      'Embarazo (usar supraumbilical abierta)',
      'Fractura pélvica con hematoma'
    ],
    recovery: 'If negative, wound care, short observation. If positive, proceeds to laparotomy with associated recovery.',
    spanishRecovery: 'Si negativo, cuidado de herida, observación corta. Si positivo, procede a laparotomía con recuperación asociada.'
  },

  // ============================================================
  // RESUSCITATION PROCEDURES
  // ============================================================
  {
    procedureId: 'emerg-cpr',
    name: 'Cardiopulmonary Resuscitation (CPR)',
    spanishName: 'Resucitación cardiopulmonar (RCP)',
    category: 'therapeutic',
    description: 'Emergency procedure to manually preserve brain function until spontaneous circulation is restored through chest compressions and artificial ventilation.',
    spanishDescription: 'Procedimiento de emergencia para preservar manualmente la función cerebral hasta que se restaure la circulación espontánea a través de compresiones torácicas y ventilación artificial.',
    specialties: ['emergency-medicine', 'critical-care', 'cardiology', 'anesthesiology'],
    bodyRegions: ['chest', 'heart'],
    complexity: 'moderate',
    setting: ['emergency-department', 'hospital-inpatient', 'bedside'],
    anesthesia: ['none'],
    icd10pcs: '5A1',
    cptCodes: ['92950'],
    indications: [
      'Cardiac arrest (asystole, VF/VT, PEA)',
      'Respiratory arrest',
      'Unresponsive with absent breathing or gasping'
    ],
    spanishIndications: [
      'Paro cardíaco (asistolia, FV/TV, AEP)',
      'Paro respiratorio',
      'Inconsciente sin respiración o jadeando'
    ],
    whatToExpect: 'If your heart stops, medical personnel will push hard and fast on your chest to circulate blood to your brain and heart. They may also use a breathing mask or tube and deliver electric shocks if needed to restart your heart.',
    spanishWhatToExpect: 'Si su corazón se detiene, el personal médico empujará fuerte y rápido sobre su pecho para circular sangre a su cerebro y corazón. También pueden usar una máscara de respiración o tubo y administrar descargas eléctricas si es necesario para reiniciar su corazón.',
    patientExplanation: 'CPR is performed when your heart stops beating. Chest compressions manually pump blood to keep your brain alive. Rescue breaths provide oxygen. Defibrillation shocks can restart a heart in certain rhythms. It gives you a chance of survival until the underlying problem is treated.',
    spanishPatientExplanation: 'La RCP se realiza cuando su corazón deja de latir. Las compresiones torácicas bombean manualmente sangre para mantener su cerebro vivo. Los alientos de rescate proporcionan oxígeno. Las descargas de desfibrilación pueden reiniciar un corazón en ciertos ritmos. Le da una oportunidad de supervivencia hasta que el problema subyacente sea tratado.',
    preparation: 'Check responsiveness. Call for help/defibrillator. Position supine on hard surface. Expose chest. Remove clothing. Ensure safety.',
    spanishPreparation: 'Verificar respuesta. Llamar ayuda/desfibrilador. Posición boca arriba en superficie dura. Exponer pecho. Remover ropa. Asegurar seguridad.',
    procedure: '30 chest compressions: lower half sternum, depth 2 inches, rate 100-120/min, full recoil. 2 rescue breaths (if trained). Continue cycles. AED/defibrillator attach as available. Analyze rhythm. Shock if VF/VT. Continue CPR until ROSC or termination.',
    spanishProcedure: '30 compresiones torácicas: mitad inferior del esternón, profundidad 2 pulgadas, frecuencia 100-120/min, recoil completo. 2 respiraciones de rescate (si entrenado). Continuar ciclos. Conectar DEA/desfibrilador cuando esté disponible. Analizar ritmo. Descargar si FV/TV. Continuar RCP hasta RCEV o terminación.',
    postProcedure: 'If ROSC: post-cardiac arrest care, targeted temperature management, coronary angiography if indicated, ICU admission. If no ROSC: consider termination after appropriate duration and reversible causes addressed.',
    spanishPostProcedure: 'Si RCEV: cuidados post-paro cardíaco, manejo de temperatura dirigido, angiografía coronaria si está indicada, ingreso a UCI. Si no RCEV: considerar terminación después de duración apropiada y causas reversibles abordadas.',
    complications: [
      'Rib fractures',
      'Sternal fracture',
      'Lung contusion',
      'Liver/spleen laceration',
      'Aspiration',
      'Failure to resuscitate',
      'Anoxic brain injury if delayed',
      'Psychological trauma to family'
    ],
    spanishComplications: [
      'Fracturas de costillas',
      'Fractura de esternón',
      'Contusión pulmonar',
      'Laceración hepática/esplénica',
      'Aspiración',
      'Falla de resucitación',
      'Lesión cerebral anóxica si demorada',
      'Trauma psicológico a familia'
    ],
    contraindications: [
      'Valid DNR order',
      'Signs of irreversible death (rigor mortis, dependent lividity, decapitation)',
      'Do not start if unsafe scene'
    ],
    spanishContraindications: [
      'Orden válida de no reanimar',
      'Signos de muerte irreversible (rigidez cadavérica, livideces dependientes, decapitación)',
      'No iniciar si escena insegura'
    ],
    recovery: 'Variable. If ROSC and good neurologic function, gradual recovery over days-weeks. Hypothermia protocol often used. Rehabilitation. Many survivors have neurological deficits.',
    spanishRecovery: 'Variable. Si RCEV y buena función neurológica, recuperación gradual durante días-semanas. Protocolo de hipotermia frecuentemente usado. Rehabilitación. Muchos sobrevivientes tienen déficits neurológicos.'
  },

  {
    procedureId: 'emerg-defibrillation',
    name: 'Defibrillation/Cardioversion',
    spanishName: 'Desfibrilación/Cardioversión',
    category: 'therapeutic',
    description: 'Delivery of electrical current through the chest to terminate life-threatening cardiac arrhythmias.',
    spanishDescription: 'Administración de corriente eléctrica a través del pecho para terminar arritmias cardíacas que amenazan la vida.',
    specialties: ['emergency-medicine', 'critical-care', 'cardiology'],
    bodyRegions: ['heart', 'chest'],
    complexity: 'moderate',
    setting: ['emergency-department', 'hospital-inpatient', 'bedside'],
    anesthesia: ['sedation'],
    icd10pcs: '5A2',
    cptCodes: ['92960', '92961'],
    indications: [
      'Ventricular fibrillation',
      'Pulseless ventricular tachycardia',
      'Unstable ventricular tachycardia with pulse',
      'Unstable supraventricular tachycardia',
      'Unstable atrial fibrillation/flutter',
      'Other unstable tachyarrhythmias'
    ],
    spanishIndications: [
      'Fibrilación ventricular',
      'Taquicardia ventricular sin pulso',
      'Taquicardia ventricular inestable con pulso',
      'Taquicardia supraventricular inestable',
      'Fibrilación/aleteo auricular inestable',
      'Otras taquiarritmias inestables'
    ],
    whatToExpect: 'Sticky pads are placed on your chest and back. For cardioversion (when you have a pulse), you will receive sedation first. A controlled electrical shock is delivered to reset your heart rhythm. For defibrillation in cardiac arrest, the shock is given immediately without sedation.',
    spanishWhatToExpect: 'Se colocan almohadillas adhesivas en su pecho y espalda. Para cardioversión (cuando tiene pulso), recibirá sedación primero. Se administra una descarga eléctrica controlada para reiniciar su ritmo cardíaco. Para desfibrilación en paro cardíaco, la descarga se da inmediatamente sin sedación.',
    patientExplanation: 'Defibrillation delivers an electric shock to stop a chaotic heart rhythm (ventricular fibrillation) so the heart can restart normally. Cardioversion is a planned, sedated procedure to convert an abnormal fast rhythm back to normal using a timed electrical shock.',
    spanishPatientExplanation: 'La desfibrilación administra una descarga eléctrica para detener un ritmo cardíaco caótico (fibrilación ventricular) para que el corazón pueda reiniciar normalmente. La cardioversión es un procedimiento planificado y sedado para convertir un ritmo rápido anormal de vuelta a normal usando una descarga eléctrica sincronizada.',
    preparation: 'ECG monitoring. Verify rhythm. Ensure all personnel clear patient. Remove oxygen source during shock. Sedation if indicated. Defibrillator charged. Pads positioned.',
    spanishPreparation: 'Monitoreo de ECG. Verificar ritmo. Asegurar que todo personal despeje paciente. Remover fuente de oxígeno durante descarga. Sedación si está indicada. Desfibrilador cargado. Almohadillas posicionadas.',
    procedure: 'Defibrillation (VF/pulseless VT): Charge to 200J (biphasic), clear, shock, resume CPR immediately. Cardioversion (with pulse): Sedate, synchronize to R-wave, charge appropriate energy, clear, deliver shock, assess rhythm.',
    spanishProcedure: 'Desfibrilación (FV/TV sin pulso): Cargar a 200J (bifásico), despejar, descargar, reanudar RCP inmediatamente. Cardioversión (con pulso): Sedación, sincronizar a onda R, cargar energía apropiada, despejar, administrar descarga, evaluar ritmo.',
    postProcedure: 'Assess rhythm and pulse. Resume CPR if no pulse. Post-cardioversion monitoring. Assess for burns. Check device function. Treat underlying cause of arrhythmia.',
    spanishPostProcedure: 'Evaluar ritmo y pulso. Reanudar RCP si no hay pulso. Monitoreo post-cardioversión. Evaluar quemaduras. Verificar función del dispositivo. Tratar causa subyacente de arritmia.',
    complications: [
      'Skin burns',
      'Myocardial injury (rare)',
      'Arrhythmia induction',
      'Asystole',
      'Bradycardia',
      'Hypotension',
      'Pulmonary edema',
      'Embolic events (cardioversion)',
      'Sedation complications'
    ],
    spanishComplications: [
      'Quemaduras de piel',
      'Lesión miocárdica (rara)',
      'Inducción de arritmia',
      'Asistolia',
      'Bradicardia',
      'Hipotensión',
      'Edema pulmonar',
      'Eventos embólicos (cardioversión)',
      'Complicaciones de sedación'
    ],
    contraindications: [
      'Digitalis toxicity (relative)',
      'Severe electrolyte abnormalities (relative)',
      'Hypothermia (rewarm first)',
      'Trivial arrhythmia'
    ],
    spanishContraindications: [
      'Toxicidad por digital (relativo)',
      'Anomalías electrolíticas severas (relativo)',
      'Hipotermia (recalentar primero)',
      'Arritmia trivial'
    ],
    recovery: 'Immediate if successful. Continuous monitoring. Anticoagulation if atrial fibrillation cardioverted. Long-term antiarrhythmic therapy often needed.',
    spanishRecovery: 'Inmediata si exitosa. Monitoreo continuo. Anticoagulación si fibrilación auricular cardiovertida. Terapia antiarrítmica a largo plazo frecuentemente necesaria.'
  },

  {
    procedureId: 'emerg-pericardiocentesis',
    name: 'Pericardiocentesis',
    spanishName: 'Pericardiocentesis',
    category: 'therapeutic',
    description: 'Aspiration of fluid from the pericardial space to relieve cardiac tamponade.',
    spanishDescription: 'Aspiración de líquido del espacio pericárdico para aliviar taponamiento cardíaco.',
    specialties: ['emergency-medicine', 'cardiology', 'cardiothoracic-surgery', 'critical-care'],
    bodyRegions: ['heart', 'pericardium', 'chest'],
    complexity: 'high',
    setting: ['emergency-department', 'hospital-inpatient', 'bedside'],
    anesthesia: ['local', 'sedation'],
    icd10pcs: '0W9',
    cptCodes: ['33010', '33011'],
    indications: [
      'Cardiac tamponade',
      'Hemodynamic compromise from pericardial effusion',
      'Pericardial effusion with impending tamponade',
      'Large pericardial effusion with diagnostic uncertainty'
    ],
    spanishIndications: [
      'Taponamiento cardíaco',
      'Compromiso hemodinámico por derrame pericárdico',
      'Derrame pericárdico con taponamiento inminente',
      'Derrame pericárdico grande con incertidumbre diagnóstica'
    ],
    whatToExpect: 'You will lie at a 30-45 degree angle. Ultrasound guides placement of a needle below your breastbone or between ribs to drain fluid from around your heart. The fluid is removed with a syringe and catheter to relieve pressure on your heart.',
    spanishWhatToExpect: 'Se acostará en un ángulo de 30-45 grados. El ultrasonido guía la colocación de una aguja debajo de su esternón o entre costillas para drenar líquido alrededor de su corazón. El líquido se remueve con una jeringa y catéter para aliviar presión sobre su corazón.',
    patientExplanation: 'Pericardiocentesis drains fluid that has collected around your heart, compressing it and preventing normal beating. A needle is guided by ultrasound or ECG to safely enter the pericardial sac and remove the fluid, which immediately improves heart function.',
    spanishPatientExplanation: 'La pericardiocentesis drena líquido que se ha acumulado alrededor de su corazón, comprimiéndolo y previniendo el latido normal. Una aguja es guiada por ultrasonido o ECG para entrar de manera segura en el saco pericárdico y remover el líquido, lo cual mejora inmediatamente la función cardíaca.',
    preparation: 'Position head elevated 30-45 degrees. Monitor ECG, BP, pulse oximetry. Type and cross blood. Ultrasound machine. Pericardiocentesis kit with spinal needle, syringe, alligator clip for ECG monitoring. Prep and drape. Local anesthetic.',
    spanishPreparation: 'Posición cabeza elevada 30-45 grados. Monitorear ECG, PA, oximetría de pulso. Tipo y cruce de sangre. Máquina de ultrasonido. Kit de pericardiocentesis con aguja espinal, jeringa, clip de cocodrilo para monitoreo ECG. Preparación y cubrimiento. Anestésico local.',
    procedure: 'Echo-guided approach preferred (apical or subxiphoid). Skin wheal. Advance needle while aspirating until fluid returns. ECG monitoring (ST elevation if myocardial contact). Insert guidewire. Dilate. Insert pigtail catheter. Drain fluid. Send for analysis.',
    spanishProcedure: 'Abordaje guiado por eco preferido (apical o subxifoides). Burbuja dérmica. Avanzar aguja mientras se aspira hasta que retorne líquido. Monitoreo ECG (elevación ST si contacto miocárdico). Insertar guía. Dilatar. Insertar catéter pigtail. Drenar líquido. Enviar para análisis.',
    postProcedure: 'Monitor hemodynamics. Repeat echo to assess reaccumulation. Continuous ECG monitoring. CXR to rule pneumothorax. Pericardial catheter may remain for 24-48 hours.',
    spanishPostProcedure: 'Monitorear hemodinámica. Repetir eco para evaluar reacumulación. Monitoreo ECG continuo. Radiografía de tórax para descartar neumotórax. Catéter pericárdico puede permanecer 24-48 horas.',
    complications: [
      'Ventricular or coronary artery laceration',
      'Arrhythmias',
      'Pneumothorax',
      'Pericardial infection',
      'Air embolism',
      'Myocardial infarction',
      'Vasovagal reaction',
      'Reaccumulation of fluid'
    ],
    spanishComplications: [
      'Laceración ventricular o de arteria coronaria',
      'Arritmias',
      'Neumotórax',
      'Infección pericárdica',
      'Embolia aérea',
      'Infarto de miocardio',
      'Reacción vasovagal',
      'Reacumulación de líquido'
    ],
    contraindications: [
      'None absolute in tamponade',
      'Aortic dissection (risk of rupture)',
      'Uncorrected coagulopathy (relative)',
      'Loculated posterior effusion (pericardial window better)'
    ],
    spanishContraindications: [
      'Ninguna absoluta en taponamiento',
      'Disección aórtica (riesgo de ruptura)',
      'Coagulopatía no corregida (relativo)',
      'Derrame posterior loculado (ventana pericárdica mejor)'
    ],
    recovery: 'Immediate hemodynamic improvement if successful. Treat underlying cause of effusion. Pericardial window or pericardiectomy if recurrent.',
    spanishRecovery: 'Mejoría hemodinámica inmediata si exitoso. Tratar causa subyacente del derrame. Ventana pericárdica o pericardiectomía si recurrente.'
  },

  {
    procedureId: 'emerg-dc-cardioversion',
    name: 'DC Cardioversion',
    spanishName: 'Cardioversión con corriente directa',
    category: 'therapeutic',
    description: 'Synchronized electrical shock delivered to restore normal sinus rhythm in hemodynamically unstable patients with tachyarrhythmias.',
    spanishDescription: 'Descarga eléctrica sincronizada administrada para restaurar ritmo sinusal normal en pacientes hemodinámicamente inestables con taquiarritmias.',
    specialties: ['emergency-medicine', 'cardiology', 'critical-care'],
    bodyRegions: ['heart'],
    complexity: 'moderate',
    setting: ['emergency-department', 'hospital-inpatient', 'bedside'],
    anesthesia: ['sedation', 'general'],
    icd10pcs: '5A2',
    cptCodes: ['92960'],
    indications: [
      'Unstable atrial fibrillation',
      'Unstable atrial flutter',
      'Unstable supraventricular tachycardia',
      'Unstable ventricular tachycardia with pulse',
      'Any tachyarrhythmia with hemodynamic compromise'
    ],
    spanishIndications: [
      'Fibrilación auricular inestable',
      'Aleteo auricular inestable',
      'Taquicardia supraventricular inestable',
      'Taquicardia ventricular inestable con pulso',
      'Cualquier taquiarritmia con compromiso hemodinámico'
    ],
    whatToExpect: 'You will receive medication through an IV to put you into a brief sleep. Paddles or pads on your chest deliver a precisely timed electrical shock synchronized with your heartbeat to restore normal rhythm. The procedure takes only minutes.',
    spanishWhatToExpect: 'Recibirá medicamento a través de una vía IV para ponerlo en un breve sueño. Paletas o almohadillas en su pecho entregan una descarga eléctrica precisamente sincronizada con su latido cardíaco para restaurar ritmo normal. El procedimiento toma solo minutos.',
    patientExplanation: 'DC cardioversion uses a controlled electric shock delivered at exactly the right moment in your heartbeat to reset your heart back to normal rhythm. It is used when a fast heart rhythm is causing dangerous low blood pressure, chest pain, or heart failure.',
    spanishPatientExplanation: 'La cardioversión con corriente directa usa una descarga eléctrica controlada administrada exactamente en el momento correcto de su latido cardíaco para reiniciar su corazón a ritmo normal. Se usa cuando un ritmo cardíaco rápido está causando presión arterial peligrosamente baja, dolor de pecho o insuficiencia cardíaca.',
    preparation: 'IV access. Continuous monitoring (ECG, BP, SpO2). Airway equipment available. Verify NPO status. Anticoagulation status checked (for atrial fibrillation). Sedation plan. Defibrillator with sync capability.',
    spanishPreparation: 'Acceso IV. Monitoreo continuo (ECG, PA, SpO2). Equipo de vía aérea disponible. Verificar estado de NPO. Estado de anticoagulación verificado (para fibrilación auricular). Plan de sedación. Desfibrilador con capacidad de sincronización.',
    procedure: 'Pre-oxygenate. Sedate with short-acting agent. Apply conductive gel or pads. Select energy (50-200J biphasic). Enable sync mode. Charge. Verify synchronization to R-wave. Clear all personnel. Deliver shock. Assess rhythm. Repeat if needed with higher energy.',
    spanishProcedure: 'Preoxigenar. Sedación con agente de acción corta. Aplicar gel conductor o almohadillas. Seleccionar energía (50-200J bifásico). Habilitar modo sinc. Cargar. Verificar sincronización a onda R. Despejar todo personal. Administrar descarga. Evaluar ritmo. Repetir si es necesario con energía mayor.',
    postProcedure: 'Recovery from sedation. Continuous monitoring. Assess for recurrence of arrhythmia. Anticoagulation management. Treat underlying cause.',
    spanishPostProcedure: 'Recuperación de sedación. Monitoreo continuo. Evaluar recurrencia de arritmia. Manejo de anticoagulación. Tratar causa subyacente.',
    complications: [
      'Embolic events (stroke)',
      'Bradycardia',
      'Hypotension',
      'Skin burns',
      'Sedation-related respiratory depression',
      'Aspiration',
      'Failure to convert rhythm',
      'Induction of ventricular fibrillation'
    ],
    spanishComplications: [
      'Eventos embólicos (accidente cerebrovascular)',
      'Bradicardia',
      'Hipotensión',
      'Quemaduras de piel',
      'Depresión respiratoria relacionada con sedación',
      'Aspiración',
      'Falla para convertir ritmo',
      'Inducción de fibrilación ventricular'
    ],
    contraindications: [
      'Atrial fibrillation >48 hours without anticoagulation (TEE-guided may be alternative)',
      'Digitalis toxicity',
      'Severe electrolyte abnormalities',
      'Trivial arrhythmia',
      'Patient refusal'
    ],
    spanishContraindications: [
      'Fibrilación auricular >48 horas sin anticoagulación (TEE-guiada puede ser alternativa)',
      'Toxicidad por digital',
      'Anomalías electrolíticas severas',
      'Arritmia trivial',
      'Negativa del paciente'
    ],
    recovery: 'Brief observation until sedation clears. May need antiarrhythmic medications. Continue anticoagulation if indicated. Outpatient follow-up for recurrent rhythm management.',
    spanishRecovery: 'Observación breve hasta que la sedación pase. Puede necesitar medicamentos antiarrítmicos. Continuar anticoagulación si está indicada. Seguimiento ambulatorio para manejo de ritmo recurrente.'
  }
];

// --- Utility Functions ---

export function findEmergencyProcedure(id: string): EmergencyProcedureEntry | undefined {
  return EMERGENCY_PROCEDURES.find(p => p.procedureId === id);
}

export function getEmergencyProceduresByComplexity(level: ComplexityLevel): EmergencyProcedureEntry[] {
  return EMERGENCY_PROCEDURES.filter(p => p.complexity === level);
}

export function getEmergencyProceduresByCategory(category: 'airway' | 'vascular' | 'trauma' | 'resuscitation'): EmergencyProcedureEntry[] {
  const categoryMap: Record<string, string[]> = {
    'airway': ['intubation', 'cricothyrotomy', 'tracheostomy'],
    'vascular': ['central-line', 'io-access'],
    'trauma': ['chest-tube', 'thoracotomy', 'dpl'],
    'resuscitation': ['cpr', 'defibrillation', 'pericardiocentesis', 'cardioversion']
  };
  return EMERGENCY_PROCEDURES.filter(p => 
    categoryMap[category]?.some(keyword => p.procedureId.includes(keyword))
  );
}

export function getEmergencyProceduresBySpecialty(specialty: string): EmergencyProcedureEntry[] {
  return EMERGENCY_PROCEDURES.filter(p => 
    p.specialties.some(s => s.toLowerCase().includes(specialty.toLowerCase()))
  );
}

export function searchEmergencyProcedures(query: string): EmergencyProcedureEntry[] {
  const lowerQuery = query.toLowerCase();
  return EMERGENCY_PROCEDURES.filter(p =>
    p.name.toLowerCase().includes(lowerQuery) ||
    p.spanishName.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery) ||
    p.specialties.some(s => s.toLowerCase().includes(lowerQuery))
  );
}
