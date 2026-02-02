/**
 * Biological Self - Surgical Procedures Database by Specialty
 * Comprehensive surgical procedures with ICD-10-PCS, CPT codes, and patient education
 */

import type {
  ProcedureCategory,
  ComplexityLevel,
  AnesthesiaType,
  SettingType,
} from './procedure-database';

export interface SurgicalProcedureEntry {
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

export const SURGICAL_PROCEDURES: SurgicalProcedureEntry[] = [

  // ============================================================
  // CARDIAC SURGERY
  // ============================================================
  {
    procedureId: 'surg-cabg',
    name: 'Coronary Artery Bypass Grafting (CABG)',
    spanishName: 'Cirugía de revascularización coronaria (CABG)',
    category: 'surgical',
    description: 'Surgical procedure to restore blood flow to the heart by grafting vessels to bypass blocked coronary arteries.',
    spanishDescription: 'Procedimiento quirúrgico para restaurar el flujo sanguíneo al corazón injertando vasos para evitar las arterias coronarias bloqueadas.',
    specialties: ['cardiothoracic-surgery', 'cardiology'],
    bodyRegions: ['heart', 'chest'],
    complexity: 'very-high',
    setting: ['operating-room'],
    anesthesia: ['general'],
    icd10pcs: '0210093',
    cptCodes: ['33533', '33534', '33535', '33536'],
    whatToExpect: 'A 3-6 hour surgery through a chest incision. The heart may be stopped with a heart-lung machine taking over circulation, or performed beating-heart. Veins from the leg or arteries from the chest/arm are used as bypass grafts.',
    spanishWhatToExpect: 'Una cirugía de 3 a 6 horas a través de una incisión en el pecho. El corazón puede detenerse con una máquina corazón-pulmón tomando el control de la circulación, o realizarse a corazón latiente. Se usan venas de la pierna o arterias del pecho/brazo como injertos de bypass.',
    patientExplanation: 'CABG creates new routes for blood to flow around blocked heart arteries. Surgeons take healthy blood vessels from other parts of your body and attach them to your heart, bypassing the blockages. This improves blood flow and reduces chest pain and heart attack risk.',
    spanishPatientExplanation: 'El CABG crea nuevas rutas para que la sangre fluya alrededor de las arterias cardíacas bloqueadas. Los cirujanos toman vasos sanguíneos sanos de otras partes de su cuerpo y los unen a su corazón, evitando las obstrucciones. Esto mejora el flujo sanguíneo y reduce el dolor de pecho y el riesgo de ataque cardíaco.',
    preparation: 'Fasting 8-12 hours. Blood thinners stopped 5-7 days prior. Preoperative testing including cardiac catheterization, blood work, chest X-ray. Skin prep with antiseptic solution. Informed consent.',
    spanishPreparation: 'Ayuno de 8-12 horas. Anticoagulantes suspendidos 5-7 días antes. Pruebas preoperatorias incluyendo cateterismo cardíaco, análisis de sangre, radiografía de tórax. Preparación de piel con solución antiséptica. Consentimiento informado.',
    preProcedure: 'IV antibiotics within 1 hour of incision. Central line and arterial line placement. General anesthesia induction. Foley catheter insertion. Patient positioned supine.',
    spanishPreProcedure: 'Antibióticos IV dentro de 1 hora de la incisión. Colocación de línea central y línea arterial. Inducción de anestesia general. Inserción de sonda Foley. Paciente posicionado boca arriba.',
    postProcedure: 'ICU monitoring 24-48 hours. Chest tubes for drainage. Mechanical ventilation initially, then weaning. Pain management with epidural or IV medications. Early mobilization day 1-2.',
    spanishPostProcedure: 'Monitoreo en UCI 24-48 horas. Tubos torácicos para drenaje. Ventilación mecánica inicialmente, luego destete. Manejo del dolor con epidural o medicamentos IV. Movilización temprana día 1-2.',
    complications: [
      'Bleeding requiring transfusion (25-30%)',
      'Atrial fibrillation (20-30%)',
      'Stroke (1-3%)',
      'Infection: sternal wound, urinary, pneumonia',
      'Acute kidney injury (5-10%)',
      'Cognitive dysfunction (post-perfusion syndrome)',
      'Graft failure or occlusion',
      'Death (1-3%)'
    ],
    spanishComplications: [
      'Sangrado que requiere transfusión (25-30%)',
      'Fibrilación auricular (20-30%)',
      'Accidente cerebrovascular (1-3%)',
      'Infección: herida esternal, urinaria, neumonía',
      'Lesión renal aguda (5-10%)',
      'Disfunción cognitiva (síndrome post-perfusión)',
      'Fallo u oclusión del injerto',
      'Muerte (1-3%)'
    ],
    contraindications: [
      'Severe coagulopathy',
      'Active infection',
      'Terminal illness with poor prognosis',
      'Severe lung disease unable to tolerate surgery',
      'Advanced dementia'
    ],
    spanishContraindications: [
      'Coagulopatía severa',
      'Infección activa',
      'Enfermedad terminal con mal pronóstico',
      'Enfermedad pulmonar severa que no tolera cirugía',
      'Demencia avanzada'
    ],
    recovery: 'Hospital stay 3-7 days. Sternotomy heals in 6-8 weeks. Full recovery 2-3 months. Cardiac rehabilitation starts 2-6 weeks post-surgery. Lifestyle modifications essential.',
    spanishRecovery: 'Estancia hospitalaria 3-7 días. La esternotomía cicatriza en 6-8 semanas. Recuperación completa 2-3 meses. La rehabilitación cardíaca comienza 2-6 semanas post-cirugía. Modificaciones de estilo de vida esenciales.'
  },

  {
    procedureId: 'surg-valve-replacement',
    name: 'Heart Valve Replacement/Repair',
    spanishName: 'Reemplazo/Reparación de válvula cardíaca',
    category: 'surgical',
    description: 'Surgical replacement of a damaged heart valve with a prosthetic valve, or repair of the native valve.',
    spanishDescription: 'Reemplazo quirúrgico de una válvula cardíaca dañada con una válvula protésica, o reparación de la válvula nativa.',
    specialties: ['cardiothoracic-surgery', 'cardiology'],
    bodyRegions: ['heart', 'chest'],
    complexity: 'very-high',
    setting: ['operating-room'],
    anesthesia: ['general'],
    icd10pcs: '02R (aortic), 02Q (mitral)',
    cptCodes: ['33405', '33406', '33410', '33411'],
    whatToExpect: 'Open-heart surgery with cardiopulmonary bypass. For replacement, mechanical (long-lasting, requires blood thinners) or tissue valves (10-15 year lifespan) are used. Repair preserves the native valve when possible.',
    spanishWhatToExpect: 'Cirugía a corazón abierto con circulación extracorpórea. Para el reemplazo, se usan válvulas mecánicas (duraderas, requieren anticoagulantes) o de tejido (vida útil 10-15 años). La reparación preserva la válvula nativa cuando es posible.',
    patientExplanation: 'If one of your heart valves is damaged or diseased, it can be replaced with an artificial valve or repaired. Mechanical valves last a lifetime but require blood thinners. Tissue valves do not need blood thinners but wear out after 10-15 years.',
    spanishPatientExplanation: 'Si una de sus válvulas cardíacas está dañada o enferma, puede ser reemplazada por una válvula artificial o reparada. Las válvulas mecánicas duran toda la vida pero requieren anticoagulantes. Las válvulas de tejido no necesitan anticoagulantes pero se desgastan después de 10-15 años.',
    preparation: 'Similar to CABG. Dental clearance if indicated. Valve choice discussion with surgeon. Warfarin stopped 5 days before if on therapy.',
    spanishPreparation: 'Similar al CABG. Aprobación dental si está indicada. Discusión de elección de válvula con el cirujano. Suspensión de warfarina 5 días antes si está en terapia.',
    preProcedure: 'Standard cardiac surgery prep. Valve sizing confirmed. Blood products available. Antibiotic prophylaxis.',
    spanishPreProcedure: 'Preparación estándar de cirugía cardíaca. Tamaño de válvula confirmado. Productos sanguíneos disponibles. Profilaxis antibiótica.',
    postProcedure: 'ICU care. Anticoagulation initiated for mechanical valves. INR monitoring. Echo to assess valve function. Rhythm monitoring.',
    spanishPostProcedure: 'Cuidados en UCI. Inicio de anticoagulación para válvulas mecánicas. Monitoreo de INR. Ecocardiograma para evaluar función valvular. Monitoreo de ritmo.',
    complications: [
      'Valve dysfunction or failure',
      'Stroke or embolism',
      'Bleeding',
      'Infection (endocarditis)',
      'Heart block requiring pacemaker',
      'Valve dehiscence',
      'Hemolysis'
    ],
    spanishComplications: [
      'Disfunción o fallo valvular',
      'Accidente cerebrovascular o embolia',
      'Sangrado',
      'Infección (endocarditis)',
      'Bloqueo cardíaco que requiere marcapasos',
      'Dehiscencia valvular',
      'Hemólisis'
    ],
    contraindications: [
      'Active endocarditis',
      'Severe comorbidities precluding surgery',
      'Recent stroke',
      'Severe pulmonary hypertension'
    ],
    spanishContraindications: [
      'Endocarditis activa',
      'Comorbilidades severas que impiden cirugía',
      'Accidente cerebrovascular reciente',
      'Hipertensión pulmonar severa'
    ],
    recovery: 'Hospital stay 5-10 days. Gradual return to activity over 6-12 weeks. Lifelong anticoagulation for mechanical valves. Regular echo follow-up.',
    spanishRecovery: 'Estancia hospitalaria 5-10 días. Retorno gradual a la actividad en 6-12 semanas. Anticoagulación de por vida para válvulas mecánicas. Seguimiento ecocardiográfico regular.'
  },

  // ============================================================
  // NEUROSURGERY
  // ============================================================
  {
    procedureId: 'surg-craniotomy',
    name: 'Craniotomy',
    spanishName: 'Craneotomía',
    category: 'surgical',
    description: 'Surgical removal of part of the skull to access the brain for tumor removal, aneurysm clipping, hematoma evacuation, or other intracranial procedures.',
    spanishDescription: 'Remoción quirúrgica de parte del cráneo para acceder al cerebro para extirpación de tumores, clipaje de aneurismas, evacuación de hematomas u otros procedimientos intracraneales.',
    specialties: ['neurosurgery'],
    bodyRegions: ['brain', 'skull', 'head'],
    complexity: 'very-high',
    setting: ['operating-room'],
    anesthesia: ['general'],
    icd10pcs: '00B (various approaches)',
    cptCodes: ['61510', '61512', '61518', '62141'],
    whatToExpect: 'Hair shaved at surgical site. Craniotomy flap created. Brain surgery performed under microscope. Bone flap replaced or left out if brain swelling. 3-8 hours duration.',
    spanishWhatToExpect: 'Cabello afeitado en el sitio quirúrgico. Colgajo craneotomía creado. Cirugía cerebral realizada bajo microscopio. Colgajo óseo reemplazado o dejado fuera si hay hinchazón cerebral. Duración 3-8 horas.',
    patientExplanation: 'A craniotomy temporarily removes a piece of skull bone to access the brain. Surgeons use microscopes and specialized instruments to treat brain tumors, aneurysms, or bleeding. The bone is typically replaced with plates and screws after surgery.',
    spanishPatientExplanation: 'Una craneotomía remueve temporalmente un pedazo de hueso del cráneo para acceder al cerebro. Los cirujanos usan microscopios e instrumentos especializados para tratar tumores cerebrales, aneurismas o sangrado. El hueso típicamente se reemplaza con placas y tornillos después de la cirugía.',
    preparation: 'CT/MRI with navigation planning. Steroid loading for tumor surgery. Anticonvulsants. Blood products available. Corticosteroids and mannitol for brain relaxation.',
    spanishPreparation: 'TC/RM con planificación de navegación. Carga de esteroides para cirugía de tumor. Anticonvulsivos. Productos sanguíneos disponibles. Corticosteroides y manitol para relajación cerebral.',
    preProcedure: 'General anesthesia. Mayfield head fixation. Prophylactic antibiotics. Foley catheter. Positioning based on lesion location. Neuromonitoring in selected cases.',
    spanishPreProcedure: 'Anestesia general. Fijación de cabeza Mayfield. Antibióticos profilácticos. Sonda Foley. Posicionamiento basado en ubicación de la lesión. Neuromonitoreo en casos seleccionados.',
    postProcedure: 'ICU monitoring. Neurological checks every hour initially. Head CT to rule out bleeding. Pain control. Seizure prophylaxis. Steroid taper.',
    spanishPostProcedure: 'Monitoreo en UCI. Evaluaciones neurológicas cada hora inicialmente. TC de cabeza para descartar sangrado. Control de dolor. Profilaxis de convulsiones. Reducción de esteroides.',
    complications: [
      'Intracranial hemorrhage',
      'Cerebral edema',
      'Stroke',
      'Infection: meningitis, abscess',
      'Seizures',
      'Cerebrospinal fluid leak',
      'Neurological deficits',
      'Death (variable risk based on indication)'
    ],
    spanishComplications: [
      'Hemorragia intracraneal',
      'Edema cerebral',
      'Accidente cerebrovascular',
      'Infección: meningitis, absceso',
      'Convulsiones',
      'Fuga de líquido cefalorraquídeo',
      'Déficits neurológicos',
      'Muerte (riesgo variable basado en indicación)'
    ],
    contraindications: [
      'Severe uncorrected coagulopathy',
      'Active infection',
      'Medically unstable patient',
      'Brain death',
      'Severe cardiac/respiratory disease'
    ],
    spanishContraindications: [
      'Coagulopatía severa no corregida',
      'Infección activa',
      'Paciente médicamente inestable',
      'Muerte cerebral',
      'Enfermedad cardíaca/respiratoria severa'
    ],
    recovery: 'Hospital stay 3-10 days. Staples removed 10-14 days. No heavy lifting for 6-8 weeks. Driving restrictions 3-6 months. Return to work 2-6 months.',
    spanishRecovery: 'Estancia hospitalaria 3-10 días. Grapas retiradas 10-14 días. No levantar objetos pesados por 6-8 semanas. Restricciones de conducir 3-6 meses. Retorno al trabajo 2-6 meses.'
  },

  {
    procedureId: 'surg-laminectomy',
    name: 'Laminectomy/Discectomy',
    spanishName: 'Laminectomía/Discectomía',
    category: 'surgical',
    description: 'Removal of the lamina (back portion of vertebra) and/or herniated disc material to relieve pressure on spinal nerves or cord.',
    spanishDescription: 'Remoción de la lámina (porción posterior de la vértebra) y/o material de disco herniado para aliviar presión sobre nervios espinales o médula.',
    specialties: ['neurosurgery', 'orthopedic-spine-surgery'],
    bodyRegions: ['spine', 'back'],
    complexity: 'high',
    setting: ['operating-room'],
    anesthesia: ['general', 'spinal'],
    icd10pcs: '00N (laminectomy), 00S (spinal fusion)',
    cptCodes: ['63030', '63047', '63048'],
    whatToExpect: 'Incision over affected vertebra. Lamina removed to access spinal canal. Disc fragments removed if herniated. May include fusion with hardware. 1-4 hours.',
    spanishWhatToExpect: 'Incisión sobre vértebra afectada. Lámina removida para acceder al canal espinal. Fragmentos de disco removidos si están herniados. Puede incluir fusión con hardware. 1-4 horas.',
    patientExplanation: 'A laminectomy removes part of the bone covering your spinal canal to create more space for nerves. A discectomy removes herniated disc material pressing on nerves. These procedures relieve leg pain, numbness, and weakness caused by spinal compression.',
    spanishPatientExplanation: 'Una laminectomía remueve parte del hueso que cubre su canal espinal para crear más espacio para los nervios. Una discectomía remueve material de disco herniado que presiona los nervios. Estos procedimientos alivian dolor de pierna, entumecimiento y debilidad causados por compresión espinal.',
    preparation: 'MRI/CT imaging. Smoking cessation 4-6 weeks prior. Blood thinners stopped. Bowel prep if needed. Preoperative antibiotics.',
    spanishPreparation: 'Imágenes de RM/TC. Cese de tabaco 4-6 semanas antes. Anticoagulantes suspendidos. Preparación intestinal si es necesario. Antibióticos preoperatorios.',
    preProcedure: 'General anesthesia. Prone positioning with padding. Neuromonitoring often used. Localizing X-ray. Antibiotics within 1 hour.',
    spanishPreProcedure: 'Anestesia general. Posición boca abajo con acolchado. Neuromonitoreo frecuentemente usado. Radiografía de localización. Antibióticos dentro de 1 hora.',
    postProcedure: 'Pain control with multimodal approach. Early mobilization day 0-1. Physical therapy. Wound care. DVT prophylaxis.',
    spanishPostProcedure: 'Control de dolor con enfoque multimodal. Movilización temprana día 0-1. Terapia física. Cuidado de herida. Profilaxis de TVP.',
    complications: [
      'Nerve injury',
      'Dural tear with CSF leak',
      'Infection',
      'Hematoma',
      'Failed back surgery syndrome',
      'Spinal instability',
      'Adjacent segment disease'
    ],
    spanishComplications: [
      'Lesión nerviosa',
      'Desgarro dural con fuga de LCR',
      'Infección',
      'Hematoma',
      'Síndrome de fallo de cirugía de espalda',
      'Inestabilidad espinal',
      'Enfermedad de segmento adyacente'
    ],
    contraindications: [
      'Active infection',
      'Severe osteoporosis',
      'Uncorrected bleeding disorder',
      'Medical instability'
    ],
    spanishContraindications: [
      'Infección activa',
      'Osteoporosis severa',
      'Trastorno hemorrágico no corregido',
      'Inestabilidad médica'
    ],
    recovery: 'Hospital stay 1-3 days. Restricted bending/lifting/twisting for 6-12 weeks. Physical therapy. Return to work 4-12 weeks depending on occupation.',
    spanishRecovery: 'Estancia hospitalaria 1-3 días. Flexión/levantamiento/torsión restringidos por 6-12 semanas. Terapia física. Retorno al trabajo 4-12 semanas según ocupación.'
  },

  // ============================================================
  // ORTHOPEDIC SURGERY
  // ============================================================
  {
    procedureId: 'surg-hip-replacement',
    name: 'Total Hip Arthroplasty (THA)',
    spanishName: 'Artroplastia total de cadera (ATC)',
    category: 'surgical',
    description: 'Replacement of the hip joint with prosthetic components due to arthritis, fracture, or other conditions causing pain and dysfunction.',
    spanishDescription: 'Reemplazo de la articulación de la cadera con componentes protésicos debido a artritis, fractura u otras condiciones causando dolor y disfunción.',
    specialties: ['orthopedic-surgery'],
    bodyRegions: ['hip', 'pelvis'],
    complexity: 'high',
    setting: ['operating-room'],
    anesthesia: ['general', 'spinal', 'epidural'],
    icd10pcs: '0SR (various approaches)',
    cptCodes: ['27130'],
    whatToExpect: 'Incision over hip joint. Femoral head removed and replaced with metal stem and ball. Acetabulum reamed and lined with cup. Components cemented or press-fit. 1-2 hours.',
    spanishWhatToExpect: 'Incisión sobre articulación de cadera. Cabeza femoral removida y reemplazada con vástago metálico y bola. Acetábulo fresado y forrado con copa. Componentes cementados o a presión. 1-2 horas.',
    patientExplanation: 'Hip replacement removes damaged bone and cartilage and replaces them with metal, ceramic, or plastic parts. This eliminates pain and restores mobility. The new ball-and-socket joint allows smooth, pain-free movement.',
    spanishPatientExplanation: 'El reemplazo de cadera remueve hueso y cartílago dañados y los reemplaza con partes metálicas, cerámicas o plásticas. Esto elimina el dolor y restaura la movilidad. La nueva articulación bola-y-socket permite movimiento suave y sin dolor.',
    preparation: 'Medical optimization. Dental clearance. Weight loss if indicated. Smoking cessation. Blood conservation strategies. Thromboprophylaxis plan.',
    spanishPreparation: 'Optimización médica. Aprobación dental. Pérdida de peso si está indicada. Cese de tabaco. Estrategias de conservación sanguínea. Plan de tromboprofilaxis.',
    preProcedure: 'Antibiotics within 1 hour. Positioning (lateral or supine based on approach). Foley catheter. Sequential compression devices.',
    spanishPreProcedure: 'Antibióticos dentro de 1 hora. Posicionamiento (lateral o boca arriba según abordaje). Sonda Foley. Dispositivos de compresión secuencial.',
    postProcedure: 'Weight-bearing as tolerated (cemented) or protected (uncemented). Pain management. DVT prophylaxis. Physical therapy day 0-1. Hip precautions taught.',
    spanishPostProcedure: 'Carga de peso según tolerancia (cementado) o protegida (no cementado). Manejo del dolor. Profilaxis de TVP. Terapia física día 0-1. Precauciones de cadera enseñadas.',
    complications: [
      'Dislocation (2-4%)',
      'Infection (1-2%)',
      'Deep vein thrombosis/pulmonary embolism',
      'Leg length discrepancy',
      'Nerve injury (sciatic)',
      'Fracture',
      'Component loosening over time',
      'Heterotopic ossification'
    ],
    spanishComplications: [
      'Dislocación (2-4%)',
      'Infección (1-2%)',
      'Trombosis venosa profunda/embolia pulmonar',
      'Discrepancia de longitud de pierna',
      'Lesión nerviosa (ciático)',
      'Fractura',
      'Aflojamiento de componentes con el tiempo',
      'Osificación heterotópica'
    ],
    contraindications: [
      'Active infection',
      'Severe vascular disease',
      'Non-ambulatory status',
      'Severe cognitive impairment',
      'Morbid obesity (relative)'
    ],
    spanishContraindications: [
      'Infección activa',
      'Enfermedad vascular severa',
      'Estado no ambulatorio',
      'Deterioro cognitivo severo',
      'Obesidad mórbida (relativa)'
    ],
    recovery: 'Hospital stay 1-3 days. 6-12 weeks of restricted activities. Full recovery 3-6 months. Lifelong hip precautions for posterior approach.',
    spanishRecovery: 'Estancia hospitalaria 1-3 días. 6-12 semanas de actividades restringidas. Recuperación completa 3-6 meses. Precauciones de cadera de por vida para abordaje posterior.'
  },

  {
    procedureId: 'surg-knee-replacement',
    name: 'Total Knee Arthroplasty (TKA)',
    spanishName: 'Artroplastia total de rodilla (ATR)',
    category: 'surgical',
    description: 'Replacement of knee joint surfaces with metal and plastic components to relieve pain and restore function in severe arthritis.',
    spanishDescription: 'Reemplazo de superficies articulares de rodilla con componentes metálicos y plásticos para aliviar dolor y restaurar función en artritis severa.',
    specialties: ['orthopedic-surgery'],
    bodyRegions: ['knee'],
    complexity: 'high',
    setting: ['operating-room'],
    anesthesia: ['general', 'spinal', 'epidural'],
    icd10pcs: '0SRC',
    cptCodes: ['27447'],
    whatToExpect: 'Incision over front of knee. Damaged cartilage and bone removed. Metal implants attached to femur and tibia. Plastic spacer inserted. Patella may be resurfaced. 1-2 hours.',
    spanishWhatToExpect: 'Incisión sobre frente de rodilla. Cartílago y hueso dañados removidos. Implantes metálicos unidos a fémur y tibia. Espaciador plástico insertado. Rótula puede ser re-superficializada. 1-2 horas.',
    patientExplanation: 'Knee replacement resurfaces the damaged ends of your thigh and shin bones with smooth metal implants. A plastic spacer acts as cartilage between them. This creates a new, smooth gliding surface that eliminates pain from bone-on-bone arthritis.',
    spanishPatientExplanation: 'El reemplazo de rodilla re-superficializa los extremos dañados de sus huesos del muslo y espinilla con implantes metálicos suaves. Un espaciador plástico actúa como cartílago entre ellos. Esto crea una nueva superficie de deslizamiento suave que elimina el dolor de la artritis hueso-con-hueso.',
    preparation: 'Knee X-rays and alignment assessment. Medical clearance. Blood management. Prehabilitation exercises. Infection prevention bundle.',
    spanishPreparation: 'Radiografías de rodilla y evaluación de alineación. Aprobación médica. Manejo sanguíneo. Ejercicios de prehabilitación. Paquete de prevención de infección.',
    preProcedure: 'Antibiotics within 1 hour. Tourniquet application. Positioning with knee flexion. Optional tranexamic acid.',
    spanishPreProcedure: 'Antibióticos dentro de 1 hora. Aplicación de torniquete. Posicionamiento con flexión de rodilla. Ácido tranexámico opcional.',
    postProcedure: 'Continuous passive motion machine. Early mobilization day 0-1. Multimodal pain management. Physical therapy. Anticoagulation.',
    spanishPostProcedure: 'Máquina de movimiento pasivo continuo. Movilización temprana día 0-1. Manejo multimodal del dolor. Terapia física. Anticoagulación.',
    complications: [
      'Infection (1-2%)',
      'Blood clots',
      'Stiffness or reduced range of motion',
      'Instability',
      'Implant wear or loosening',
      'Periprosthetic fracture',
      'Nerve damage',
      'Persistent pain'
    ],
    spanishComplications: [
      'Infección (1-2%)',
      'Coágulos sanguíneos',
      'Rigidez o rango de movimiento reducido',
      'Inestabilidad',
      'Desgaste o aflojamiento del implante',
      'Fractura periprotésica',
      'Daño nervioso',
      'Dolor persistente'
    ],
    contraindications: [
      'Active infection',
      'Severe quadriceps weakness',
      'Non-functional extensor mechanism',
      'Severe peripheral vascular disease',
      'Neuropathic joint'
    ],
    spanishContraindications: [
      'Infección activa',
      'Debilidad severa del cuádriceps',
      'Mecanismo extensor no funcional',
      'Enfermedad vascular periférica severa',
      'Articulación neuropática'
    ],
    recovery: 'Hospital stay 1-3 days. Home PT or outpatient rehab for 4-12 weeks. Driving at 4-6 weeks. Full recovery 3-6 months.',
    spanishRecovery: 'Estancia hospitalaria 1-3 días. PT en casa o rehabilitación ambulatoria por 4-12 semanas. Conducir a las 4-6 semanas. Recuperación completa 3-6 meses.'
  },

  {
    procedureId: 'surg-shoulder-replacement',
    name: 'Shoulder Arthroplasty',
    spanishName: 'Artroplastia de hombro',
    category: 'surgical',
    description: 'Replacement of shoulder joint with prosthetic components, either anatomical (ball-and-socket) or reverse (ball on scapula, socket on humerus).',
    spanishDescription: 'Reemplazo de articulación de hombro con componentes protésicos, ya sea anatómico (bola-y-socket) o inverso (bola en escápula, socket en húmero).',
    specialties: ['orthopedic-surgery'],
    bodyRegions: ['shoulder'],
    complexity: 'high',
    setting: ['operating-room'],
    anesthesia: ['general', 'regional'],
    icd10pcs: '0RR',
    cptCodes: ['23470', '23472', '23473'],
    whatToExpect: 'Incision over front or top of shoulder. Damaged bone removed. Metal stem in humerus, cup on glenoid (anatomic) or reverse configuration. 2-3 hours.',
    spanishWhatToExpect: 'Incisión sobre frente o parte superior del hombro. Hueso dañado removido. Vástago metálico en húmero, copa en glenoide (anatómico) o configuración inversa. 2-3 horas.',
    patientExplanation: 'Shoulder replacement replaces damaged joint surfaces with metal and plastic parts. Anatomic replacement is for intact rotator cuff. Reverse replacement is for cuff-deficient shoulders or complex fractures, placing the ball on the shoulder blade and socket on the arm bone.',
    spanishPatientExplanation: 'El reemplazo de hombro reemplaza superficies articulares dañadas con partes metálicas y plásticas. El reemplazo anatómico es para manguito rotador intacto. El reemplazo inverso es para hombros con deficiencia de manguito o fracturas complejas, colocando la bola en la escápula y el socket en el hueso del brazo.',
    preparation: 'CT scan for planning. Rotator cuff assessment. Medical clearance. Preoperative shoulder exercises. Smoking cessation.',
    spanishPreparation: 'TC para planificación. Evaluación del manguito rotador. Aprobación médica. Ejercicios preoperatorios de hombro. Cese de tabaco.',
    preProcedure: 'Antibiotics. Beach chair or lateral position. Regional block often used. Tourniquet not used.',
    spanishPreProcedure: 'Antibióticos. Posición de silla de playa o lateral. Bloqueo regional frecuentemente usado. Torniquete no usado.',
    postProcedure: 'Sling immobilization 2-6 weeks. Pain control with nerve block initially. Gradual range of motion per protocol. PT at 2-6 weeks.',
    spanishPostProcedure: 'Inmovilización con cabestrillo 2-6 semanas. Control de dolor con bloqueo nervioso inicialmente. Rango de movimiento gradual según protocolo. TF a las 2-6 semanas.',
    complications: [
      'Infection',
      'Nerve injury (axillary)',
      'Dislocation',
      'Component loosening',
      'Rotator cuff tear (anatomic)',
      'Fracture',
      'Stiffness',
      'Complex regional pain syndrome'
    ],
    spanishComplications: [
      'Infección',
      'Lesión nerviosa (axilar)',
      'Dislocación',
      'Aflojamiento de componentes',
      'Desgarro del manguito rotador (anatómico)',
      'Fractura',
      'Rigidez',
      'Síndrome de dolor regional complejo'
    ],
    contraindications: [
      'Active infection',
      'Paralysis of deltoid or rotator cuff (anatomic)',
      'Severe osteoporosis',
      'Severe neuropathy'
    ],
    spanishContraindications: [
      'Infección activa',
      'Parálisis del deltoides o manguito rotador (anatómico)',
      'Osteoporosis severa',
      'Neuropatía severa'
    ],
    recovery: 'Hospital stay 1-2 days. Sling for 2-6 weeks. Restricted activities for 3 months. Full recovery 6-12 months.',
    spanishRecovery: 'Estancia hospitalaria 1-2 días. Cabestrillo por 2-6 semanas. Actividades restringidas por 3 meses. Recuperación completa 6-12 meses.'
  },

  // ============================================================
  // GENERAL SURGERY
  // ============================================================
  {
    procedureId: 'surg-cholecystectomy',
    name: 'Laparoscopic Cholecystectomy',
    spanishName: 'Colecistectomía laparoscópica',
    category: 'surgical',
    description: 'Minimally invasive removal of the gallbladder, typically for symptomatic gallstones or cholecystitis.',
    spanishDescription: 'Remoción mínimamente invasiva de la vesícula biliar, típicamente para cálculos biliares sintomáticos o colecistitis.',
    specialties: ['general-surgery'],
    bodyRegions: ['abdomen', 'gallbladder'],
    complexity: 'moderate',
    setting: ['operating-room'],
    anesthesia: ['general'],
    icd10pcs: '0FT44ZZ',
    cptCodes: ['47562'],
    whatToExpect: 'Four small incisions. Abdomen inflated with CO2. Camera and instruments inserted. Gallbladder dissected from liver bed and removed through umbilicus. 45-90 minutes.',
    spanishWhatToExpect: 'Cuatro pequeñas incisiones. Abdomen inflado con CO2. Cámara e instrumentos insertados. Vesícula biliar disecada del lecho hepático y removida a través del ombligo. 45-90 minutos.',
    patientExplanation: 'Your gallbladder stores bile for digestion. Gallstones can cause pain, infection, or block bile flow. Through small incisions, surgeons remove the gallbladder using a camera and special instruments. You can live normally without a gallbladder.',
    spanishPatientExplanation: 'Su vesícula biliar almacena bilis para la digestión. Los cálculos biliares pueden causar dolor, infección o bloquear el flujo de bilis. A través de pequeñas incisiones, los cirujanos remueven la vesícula biliar usando una cámara e instrumentos especiales. Puede vivir normalmente sin vesícula biliar.',
    preparation: 'Fasting 8 hours. Blood work. Review of prior imaging. Antibiotics for acute cases. Informed consent including conversion to open possibility.',
    spanishPreparation: 'Ayuno de 8 horas. Análisis de sangre. Revisión de imágenes previas. Antibióticos para casos agudos. Consentimiento informado incluyendo posibilidad de conversión a abierta.',
    preProcedure: 'General anesthesia. Foley catheter often omitted. Pneumoperitoneum with Veress needle or Hasson technique. Reverse Trendelenburg position.',
    spanishPreProcedure: 'Anestesia general. Sonda Foley frecuentemente omitida. Neumoperitoneo con aguja de Veress o técnica de Hasson. Posición de Trendelenburg inverso.',
    postProcedure: 'Pain control. Early oral intake same day. Discharge same day or next morning. Wound care instructions. Activity restrictions.',
    spanishPostProcedure: 'Control de dolor. Ingesta oral temprana mismo día. Alta mismo día o siguiente mañana. Instrucciones de cuidado de herida. Restricciones de actividad.',
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
      'Lesión del conducto biliar (0.3-0.5%)',
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
    recovery: 'Hospital stay 0-1 days. Light activities in 1 week. Full activities in 2-4 weeks. Return to work 1-2 weeks.',
    spanishRecovery: 'Estancia hospitalaria 0-1 días. Actividades ligeras en 1 semana. Actividades completas en 2-4 semanas. Retorno al trabajo 1-2 semanas.'
  },

  {
    procedureId: 'surg-appendectomy',
    name: 'Appendectomy',
    spanishName: 'Apendicectomía',
    category: 'surgical',
    description: 'Surgical removal of the appendix, typically for acute appendicitis.',
    spanishDescription: 'Remoción quirúrgica del apéndice, típicamente para apendicitis aguda.',
    specialties: ['general-surgery', 'emergency-medicine'],
    bodyRegions: ['abdomen', 'appendix'],
    complexity: 'moderate',
    setting: ['operating-room'],
    anesthesia: ['general'],
    icd10pcs: '0DTJ4ZZ',
    cptCodes: ['44970', '44960'],
    whatToExpect: 'Laparoscopic or open approach. Appendix dissected from mesoappendix, base ligated, appendix removed. Peritoneal cavity irrigated if perforated. 30-90 minutes.',
    spanishWhatToExpect: 'Abordaje laparoscópico o abierto. Apéndice disecado del mesoapéndice, base ligada, apéndice removido. Cavidad peritoneal irrigada si está perforado. 30-90 minutos.',
    patientExplanation: 'Appendicitis is inflammation of the appendix, a small pouch attached to your intestine. It can burst if not treated, causing serious infection. Surgery removes the appendix before or after rupture. Laparoscopic approach uses small incisions for faster recovery.',
    spanishPatientExplanation: 'La apendicitis es inflamación del apéndice, una pequeña bolsa unida a su intestino. Puede reventar si no se trata, causando infección grave. La cirugía remueve el apéndice antes o después de la ruptura. El abordaje laparoscópico usa pequeñas incisiones para recuperación más rápida.',
    preparation: 'IV fluids and antibiotics. CT scan if diagnosis uncertain. NPO status. Informed consent.',
    spanishPreparation: 'Líquidos IV y antibióticos. TC si el diagnóstico es incierto. Estado de NPO. Consentimiento informado.',
    preProcedure: 'General anesthesia. Laparoscopic approach preferred if non-perforated. Open if perforation with abscess or diffuse peritonitis.',
    spanishPreProcedure: 'Anestesia general. Abordaje laparoscópico preferido si no perforado. Abierto si perforación con absceso o peritonitis difusa.',
    postProcedure: 'Antibiotics if perforated. Early mobilization. Diet advancement as tolerated. Pain control.',
    spanishPostProcedure: 'Antibióticos si perforado. Movilización temprana. Avance de dieta según tolerancia. Control de dolor.',
    complications: [
      'Wound infection',
      'Intra-abdominal abscess',
      'Bleeding',
      'Ileus',
      'Injury to bowel or bladder',
      'Fistula formation',
      'Incisional hernia',
      'Stump appendicitis (rare)'
    ],
    spanishComplications: [
      'Infección de herida',
      'Absceso intraabdominal',
      'Sangrado',
      'Íleo',
      'Lesión intestinal o vesical',
      'Formación de fístula',
      'Hernia incisional',
      'Apendicitis del muñón (rara)'
    ],
    contraindications: [
      'Medical instability precluding surgery (treated with antibiotics)',
      'Abscess >3cm managed percutaneously first',
      'Late appendicitis (>5 days) managed non-operatively sometimes'
    ],
    spanishContraindications: [
      'Inestabilidad médica que impide cirugía (tratada con antibióticos)',
      'Absceso >3cm manejado percutáneamente primero',
      'Apendicitis tardía (>5 días) manejada no quirúrgicamente a veces'
    ],
    recovery: 'Uncomplicated: 0-1 days hospital. Return to normal in 1-2 weeks. Complicated (perforated): 3-7 days hospital. Recovery 4-6 weeks.',
    spanishRecovery: 'Sin complicaciones: 0-1 días hospital. Retorno a normal en 1-2 semanas. Complicado (perforado): 3-7 días hospital. Recuperación 4-6 semanas.'
  },

  {
    procedureId: 'surg-hernia-repair',
    name: 'Hernia Repair (Inguinal, Ventral, Umbilical)',
    spanishName: 'Reparación de hernia (inguinal, ventral, umbilical)',
    category: 'surgical',
    description: 'Surgical repair of hernias with mesh reinforcement to prevent recurrence.',
    spanishDescription: 'Reparación quirúrgica de hernias con refuerzo de malla para prevenir recurrencia.',
    specialties: ['general-surgery'],
    bodyRegions: ['abdomen', 'groin'],
    complexity: 'moderate',
    setting: ['operating-room', 'outpatient-surgery-center'],
    anesthesia: ['general', 'regional', 'local'],
    icd10pcs: '0WQ (various sites)',
    cptCodes: ['49505', '49560', '49585', '49650'],
    whatToExpect: 'Incision over hernia defect. Hernia sac reduced. Mesh placed to reinforce weakness. Open or laparoscopic approach. 30-90 minutes.',
    spanishWhatToExpect: 'Incisión sobre defecto de hernia. Saco de hernia reducido. Malla colocada para reforzar debilidad. Abordaje abierto o laparoscópico. 30-90 minutos.',
    patientExplanation: 'A hernia occurs when tissue pushes through a weak spot in muscle. Surgery pushes the tissue back and reinforces the weakness with surgical mesh. This can be done through one larger incision or several small ones using a camera.',
    spanishPatientExplanation: 'Una hernia ocurre cuando el tejido empuja a través de un punto débil en el músculo. La cirugía empuja el tejido de vuelta y refuerza la debilidad con malla quirúrgica. Esto puede hacerse a través de una incisión más grande o varias pequeñas usando una cámara.',
    preparation: 'Physical exam confirmation. Optimize comorbidities. Smoking cessation. Weight loss if indicated. Bowel prep for large ventral hernias.',
    spanishPreparation: 'Confirmación de examen físico. Optimización de comorbilidades. Cese de tabaco. Pérdida de peso si está indicada. Preparación intestinal para hernias ventrales grandes.',
    preProcedure: 'Antibiotics within 1 hour. Positioning based on site. Foley catheter for large cases. Local infiltration with long-acting anesthetic.',
    spanishPreProcedure: 'Antibióticos dentro de 1 hora. Posicionamiento basado en sitio. Sonda Foley para casos grandes. Infiltración local con anestésico de larga acción.',
    postProcedure: 'Pain control. Activity restrictions. Wound care. Monitor for recurrence. Gradual return to activity.',
    spanishPostProcedure: 'Control de dolor. Restricciones de actividad. Cuidado de herida. Monitoreo de recurrencia. Retorno gradual a actividad.',
    complications: [
      'Recurrence (1-10% depending on type)',
      'Chronic pain (10-15% for inguinal)',
      'Infection',
      'Seroma',
      'Mesh complications',
      'Nerve injury',
      'Bowel injury',
      'Urinary retention'
    ],
    spanishComplications: [
      'Recurrencia (1-10% según tipo)',
      'Dolor crónico (10-15% para inguinal)',
      'Infección',
      'Seroma',
      'Complicaciones de malla',
      'Lesión nerviosa',
      'Lesión intestinal',
      'Retención urinaria'
    ],
    contraindications: [
      'Active infection',
      'Uncontrolled ascites',
      'Severe cardiopulmonary disease',
      'Uncorrected coagulopathy'
    ],
    spanishContraindications: [
      'Infección activa',
      'Ascitis no controlada',
      'Enfermedad cardiopulmonar severa',
      'Coagulopatía no corregida'
    ],
    recovery: 'Inguinal: Outpatient. Light duty 1-2 weeks. Full activity 4-6 weeks. Ventral: 1-3 days hospital. Restricted activity 6-8 weeks.',
    spanishRecovery: 'Inguinal: Ambulatorio. Trabajo ligero 1-2 semanas. Actividad completa 4-6 semanas. Ventral: 1-3 días hospital. Actividad restringida 6-8 semanas.'
  },

  {
    procedureId: 'surg-colectomy',
    name: 'Colectomy (Partial/Total)',
    spanishName: 'Colecomía (parcial/total)',
    category: 'surgical',
    description: 'Surgical removal of part or all of the colon for cancer, diverticulitis, inflammatory bowel disease, or other conditions.',
    spanishDescription: 'Remoción quirúrgica de parte o todo el colon para cáncer, diverticulitis, enfermedad inflamatoria intestinal u otras condiciones.',
    specialties: ['general-surgery', 'colorectal-surgery'],
    bodyRegions: ['abdomen', 'colon'],
    complexity: 'high',
    setting: ['operating-room'],
    anesthesia: ['general'],
    icd10pcs: '0DT (various segments)',
    cptCodes: ['44140', '44150', '44160', '44204'],
    whatToExpect: 'Laparoscopic or open approach. Affected colon segment resected. Bowel continuity restored with anastomosis, or stoma created. 2-4 hours.',
    spanishWhatToExpect: 'Abordaje laparoscópico o abierto. Segmento de colon afectado resecado. Continuidad intestinal restaurada con anastomosis, o estoma creado. 2-4 horas.',
    patientExplanation: 'Colectomy removes diseased portions of your large intestine. Surgeons rejoin the healthy ends (anastomosis) so you can have normal bowel movements. Sometimes a temporary or permanent opening (stoma) is needed for waste to exit into a bag.',
    spanishPatientExplanation: 'La colectomía remueve porciones enfermas de su intestino grueso. Los cirujanos vuelven a unir los extremos sanos (anastomosis) para que pueda tener evacuaciones normales. A veces se necesita una abertura temporal o permanente (estoma) para que los desechos salgan a una bolsa.',
    preparation: 'Bowel prep with antibiotics. CT staging for cancer. Stoma marking if indicated. Medical optimization. Blood type and screen.',
    spanishPreparation: 'Preparación intestinal con antibióticos. Estadificación por TC para cáncer. Marcado de estoma si está indicado. Optimización médica. Tipo sanguíneo y screen.',
    preProcedure: 'General anesthesia. Prophylactic antibiotics. Foley catheter. Positioning (supine or lithotomy). DVT prophylaxis.',
    spanishPreProcedure: 'Anestesia general. Antibióticos profilácticos. Sonda Foley. Posicionamiento (boca arriba o litotomía). Profilaxis de TVP.',
    postProcedure: 'NG tube if extensive surgery. Early ambulation. Diet advancement. Pain management. Stoma care education if applicable.',
    spanishPostProcedure: 'Sonda NG si cirugía extensa. Deambulación temprana. Avance de dieta. Manejo del dolor. Educación de cuidado de estoma si aplica.',
    complications: [
      'Anastomotic leak (3-10%)',
      'Infection',
      'Bleeding',
      'Ileus',
      'Wound dehiscence',
      'Stoma complications',
      'Urinary retention',
      'DVT/PE'
    ],
    spanishComplications: [
      'Fuga anastomótica (3-10%)',
      'Infección',
      'Sangrado',
      'Íleo',
      'Dehiscencia de herida',
      'Complicaciones de estoma',
      'Retención urinaria',
      'TVP/EP'
    ],
    contraindications: [
      'Unresectable metastatic disease (for curative cancer surgery)',
      'Severe medical comorbidity',
      'Acute abdomen with sepsis (may need diversion first)'
    ],
    spanishContraindications: [
      'Enfermedad metastásica irresecable (para cirugía curativa de cáncer)',
      'Comorbilidad médica severa',
      'Abdomen agudo con sepsis (puede necesitar desvío primero)'
    ],
    recovery: 'Hospital stay 3-7 days. Return to work 4-8 weeks. Ostomy adaptation if applicable. Dietary modifications.',
    spanishRecovery: 'Estancia hospitalaria 3-7 días. Retorno al trabajo 4-8 semanas. Adaptación de ostomía si aplica. Modificaciones dietéticas.'
  },

  // ============================================================
  // PLASTIC/RECONSTRUCTIVE SURGERY
  // ============================================================
  {
    procedureId: 'surg-breast-reconstruction',
    name: 'Breast Reconstruction',
    spanishName: 'Reconstrucción mamaria',
    category: 'surgical',
    description: 'Restoration of breast shape after mastectomy using implants or autologous tissue (flap).',
    spanishDescription: 'Restauración de la forma mamaria después de mastectomía usando implantes o tejido autólogo (colgajo).',
    specialties: ['plastic-surgery', 'breast-surgery'],
    bodyRegions: ['breast', 'chest'],
    complexity: 'high',
    setting: ['operating-room'],
    anesthesia: ['general'],
    icd10pcs: '0H (various approaches)',
    cptCodes: ['19357', '19361', '19364', '19367'],
    whatToExpect: 'Immediate (at time of mastectomy) or delayed. Implant-based (tissue expander then implant) or autologous (DIEP, TRAM, latissimus flaps). 2-6 hours.',
    spanishWhatToExpect: 'Inmediata (al momento de mastectomía) o diferida. Basada en implante (expansor de tejido luego implante) o autóloga (colgajos DIEP, TRAM, dorsal ancho). 2-6 horas.',
    patientExplanation: 'Breast reconstruction rebuilds the breast after cancer surgery. Options include implants filled with saline or silicone, or using your own tissue from the abdomen or back. Reconstruction can start during mastectomy or months later.',
    spanishPatientExplanation: 'La reconstrucción mamaria reconstruye la mama después de cirugía de cáncer. Las opciones incluyen implantes llenos de solución salina o silicona, o usar su propio tejido del abdomen o espalda. La reconstrucción puede comenzar durante la mastectomía o meses después.',
    preparation: 'Multidisciplinary consultation. Smoking cessation. Weight optimization. Preoperative imaging. Psychological support.',
    spanishPreparation: 'Consulta multidisciplinaria. Cese de tabaco. Optimización de peso. Imágenes preoperatorias. Apoyo psicológico.',
    preProcedure: 'General anesthesia. Positioning (supine). Prophylactic antibiotics. DVT prophylaxis. Markings by surgeon.',
    spanishPreProcedure: 'Anestesia general. Posicionamiento (boca arriba). Antibióticos profilácticos. Profilaxis de TVP. Marcaciones por el cirujano.',
    postProcedure: 'Drains typically placed. Pain management. Activity restrictions. Wound monitoring. Expansion process for tissue expanders over weeks-months.',
    spanishPostProcedure: 'Drenajes típicamente colocados. Manejo del dolor. Restricciones de actividad. Monitoreo de herida. Proceso de expansión para expansores de tejido durante semanas-meses.',
    complications: [
      'Infection',
      'Seroma',
      'Implant failure or rupture',
      'Capsular contracture',
      'Flap failure',
      'Fat necrosis',
      'Asymmetry',
      'Need for revision surgery'
    ],
    spanishComplications: [
      'Infección',
      'Seroma',
      'Fallo o ruptura de implante',
      'Contractura capsular',
      'Fallo de colgajo',
      'Necrosis grasa',
      'Asimetría',
      'Necesidad de cirugía de revisión'
    ],
    contraindications: [
      'Active infection',
      'Poor surgical candidacy',
      'Active smoking (relative for flap)',
      'Severe radiation damage (relative)'
    ],
    spanishContraindications: [
      'Infección activa',
      'Mala candidatura quirúrgica',
      'Tabaquismo activo (relativo para colgajo)',
      'Daño por radiación severo (relativo)'
    ],
    recovery: 'Hospital stay 1-5 days. Drains 1-3 weeks. Activity restrictions 4-6 weeks. Final results at 6-12 months.',
    spanishRecovery: 'Estancia hospitalaria 1-5 días. Drenajes 1-3 semanas. Restricciones de actividad 4-6 semanas. Resultados finales a las 6-12 meses.'
  },

  {
    procedureId: 'surg-skin-graft',
    name: 'Skin Grafting',
    spanishName: 'Injerto de piel',
    category: 'surgical',
    description: 'Transplantation of skin from a donor site to a wound or defect that cannot heal on its own.',
    spanishDescription: 'Trasplante de piel de un sitio donante a una herida o defecto que no puede sanar por sí solo.',
    specialties: ['plastic-surgery', 'burn-surgery', 'general-surgery'],
    bodyRegions: ['skin'],
    complexity: 'moderate',
    setting: ['operating-room'],
    anesthesia: ['general', 'local', 'sedation'],
    icd10pcs: '0HR',
    cptCodes: ['15002', '15100', '15200'],
    whatToExpect: 'Split-thickness (shallow) or full-thickness (deep) grafts harvested from donor site. Graft placed on wound bed and secured. Bolster dressing applied. 1-3 hours.',
    spanishWhatToExpect: 'Injertos de espesor parcial (superficial) o espesor total (profundo) tomados del sitio donante. Injerto colocado en lecho de herida y asegurado. Vendaje de soporte aplicado. 1-3 horas.',
    patientExplanation: 'A skin graft takes healthy skin from one area of your body and moves it to cover a wound that is too large to heal by itself. The graft needs a good blood supply from the wound bed to survive and heal.',
    spanishPatientExplanation: 'Un injerto de piel toma piel sana de una área de su cuerpo y la mueve para cubrir una herida que es demasiado grande para sanar por sí sola. El injerto necesita un buen suministro de sangre del lecho de la herida para sobrevivir y sanar.',
    preparation: 'Wound preparation and bacterial control. Nutritional optimization. Smoking cessation. Donor site selection.',
    spanishPreparation: 'Preparación de herida y control bacteriano. Optimización nutricional. Cese de tabaco. Selección de sitio donante.',
    preProcedure: 'Anesthesia per extent. Positioning. Donor site preparation. Wound bed debridement if needed.',
    spanishPreProcedure: 'Anestesia según extensión. Posicionamiento. Preparación de sitio donante. Desbridamiento de lecho de herida si es necesario.',
    postProcedure: 'Immobilization of grafted area. Elevation. Pain control. Donor site care. Monitor graft take at 3-5 days.',
    spanishPostProcedure: 'Inmovilización de área injertada. Elevación. Control de dolor. Cuidado de sitio donante. Monitoreo de toma de injerto a los 3-5 días.',
    complications: [
      'Graft failure or partial take',
      'Infection',
      'Hypertrophic scarring',
      'Contracture',
      'Donor site complications',
      'Bleeding',
      'Seroma under graft',
      'Color mismatch'
    ],
    spanishComplications: [
      'Fallo de injerto o toma parcial',
      'Infección',
      'Cicatriz hipertrófica',
      'Contractura',
      'Complicaciones de sitio donante',
      'Sangrado',
      'Seroma bajo injerto',
      'Desajuste de color'
    ],
    contraindications: [
      'Inadequate wound bed (exposed bone/tendon without periosteum/paratenon)',
      'Active infection',
      'Uncorrected coagulopathy',
      'Poor nutritional status'
    ],
    spanishContraindications: [
      'Lecho de herida inadecuado (hueso/tendón expuesto sin periostio/paratenon)',
      'Infección activa',
      'Coagulopatía no corregida',
      'Mal estado nutricional'
    ],
    recovery: 'Split-thickness: Donor site heals 2-3 weeks. Graft matures over months. Full-thickness: Longer healing. Compression therapy for maturation.',
    spanishRecovery: 'Espesor parcial: Sitio donante sana 2-3 semanas. Injerto madura durante meses. Espesor total: Sanación más larga. Terapia de compresión para maduración.'
  },

  // ============================================================
  // VASCULAR SURGERY
  // ============================================================
  {
    procedureId: 'surg-carotid-endarterectomy',
    name: 'Carotid Endarterectomy (CEA)',
    spanishName: 'Endarterectomía carotídea',
    category: 'surgical',
    description: 'Surgical removal of plaque from the carotid artery to prevent stroke in patients with significant stenosis.',
    spanishDescription: 'Remoción quirúrgica de placa de la arteria carotídea para prevenir accidente cerebrovascular en pacientes con estenosis significativa.',
    specialties: ['vascular-surgery'],
    bodyRegions: ['neck', 'carotid-arteries'],
    complexity: 'high',
    setting: ['operating-room'],
    anesthesia: ['general', 'regional'],
    icd10pcs: '03CK',
    cptCodes: ['35301'],
    whatToExpect: 'Incision along anterior neck. Carotid artery clamped. Plaque removed from artery. Artery closed with or without patch. Shunt may be used. 1-2 hours.',
    spanishWhatToExpect: 'Incisión a lo largo del cuello anterior. Arteria carotídea clampada. Placa removida de arteria. Arteria cerrada con o sin parche. Derivación puede usarse. 1-2 horas.',
    patientExplanation: 'Plaque buildup in your neck arteries can break off and cause stroke. This surgery opens the artery and removes the plaque, reducing stroke risk. The artery is then sewn closed, sometimes with a patch to widen it.',
    spanishPatientExplanation: 'La acumulación de placa en sus arterias del cuello puede desprenderse y causar accidente cerebrovascular. Esta cirugía abre la arteria y remueve la placa, reduciendo el riesgo de accidente cerebrovascular. La arteria luego se cierra cosiendo, a veces con un parche para ensancharla.',
    preparation: 'Carotid duplex ultrasound. CTA or MRA imaging. Cardiac clearance. Antiplatelet therapy. Neurological baseline.',
    spanishPreparation: 'Ultrasonido carotídeo dúplex. Imágenes de ATC o ARM. Aprobación cardíaca. Terapia antiplaquetaria. Línea base neurológica.',
    preProcedure: 'General or local anesthesia with sedation. Positioning with head extension and rotation. EEG or stump pressure monitoring. Heparin anticoagulation.',
    spanishPreProcedure: 'Anestesia general o local con sedación. Posicionamiento con extensión y rotación de cabeza. Monitoreo de EEG o presión de muñón. Anticoagulación con heparina.',
    postProcedure: 'Neurological checks every 15 minutes initially. Blood pressure control to prevent hyperperfusion. Wound monitoring. Antiplatelet therapy continued.',
    spanishPostProcedure: 'Evaluaciones neurológicas cada 15 minutos inicialmente. Control de presión arterial para prevenir hiperperfusión. Monitoreo de herida. Terapia antiplaquetaria continuada.',
    complications: [
      'Stroke (2-5%)',
      'Cranial nerve injury (hypoglossal, recurrent laryngeal)',
      'Bleeding/hematoma (may compromise airway)',
      'Myocardial infarction',
      'Hyperperfusion syndrome',
      'Infection',
      'Restenosis',
      'Death (1-2%)'
    ],
    spanishComplications: [
      'Accidente cerebrovascular (2-5%)',
      'Lesión de nervio craneal (hipogloso, laríngeo recurrente)',
      'Sangrado/hematoma (puede comprometer vía aérea)',
      'Infarto de miocardio',
      'Síndrome de hiperperfusión',
      'Infección',
      'Reestenosis',
      'Muerte (1-2%)'
    ],
    contraindications: [
      'Severe medical comorbidity',
      'Recent stroke with large territory infarct',
      'Unstable coronary disease',
      'Anatomically high lesion near skull base',
      'Contralateral carotid occlusion (relative)'
    ],
    spanishContraindications: [
      'Comorbilidad médica severa',
      'Accidente cerebrovascular reciente con infarto de gran territorio',
      'Enfermedad coronaria inestable',
      'Lesión anatómicamente alta cerca de base de cráneo',
      'Oclusión carotídea contralateral (relativo)'
    ],
    recovery: 'Hospital stay 1-2 days. Return to normal activities in 2-4 weeks. Regular ultrasound surveillance.',
    spanishRecovery: 'Estancia hospitalaria 1-2 días. Retorno a actividades normales en 2-4 semanas. Vigilancia por ultrasonido regular.'
  },

  {
    procedureId: 'surg-aaa-repair',
    name: 'Abdominal Aortic Aneurysm (AAA) Repair',
    spanishName: 'Reparación de aneurisma de aorta abdominal',
    category: 'surgical',
    description: 'Open surgical repair or endovascular stent graft placement for abdominal aortic aneurysm to prevent rupture.',
    spanishDescription: 'Reparación quirúrgica abierta o colocación de endoprótesis endovascular para aneurisma de aorta abdominal para prevenir ruptura.',
    specialties: ['vascular-surgery'],
    bodyRegions: ['abdomen', 'aorta'],
    complexity: 'very-high',
    setting: ['operating-room'],
    anesthesia: ['general', 'epidural'],
    icd10pcs: '04V (endovascular), 04U (open)',
    cptCodes: ['34800', '34802', '35081', '35082'],
    whatToExpect: 'Open: Laparotomy, aortic clamping, aneurysm opened, graft sewn in, aneurysm wrapped around graft. EVAR: Percutaneous or cut-down femoral access, stent graft deployed under fluoroscopy.',
    spanishWhatToExpect: 'Abierta: Laparotomía, clampeo aórtico, aneurisma abierto, injerto cosido, aneurisma envuelto alrededor del injerto. EVAR: Acceso femoral percutáneo o por incisión, endoprótesis desplegada bajo fluoroscopía.',
    patientExplanation: 'An AAA is a bulging weak spot in your abdominal aorta that can rupture and cause fatal bleeding. Open repair sews in a fabric graft through an abdominal incision. EVAR uses small incisions in the groin to place a stent graft inside the artery without opening the abdomen.',
    spanishPatientExplanation: 'Un AAA es una protuberancia débil en su aorta abdominal que puede romperse y causar sangrado fatal. La reparación abierta cose un injerto de tela a través de una incisión abdominal. EVAR usa pequeñas incisiones en la ingle para colocar una endoprótesis dentro de la arteria sin abrir el abdomen.',
    preparation: 'CT angiography for planning. Cardiac risk stratification. Optimization of comorbidities. Blood products available.',
    spanishPreparation: 'Angiografía por TC para planificación. Estratificación de riesgo cardíaco. Optimización de comorbilidades. Productos sanguíneos disponibles.',
    preProcedure: 'General anesthesia. Foley catheter. Arterial line. Central line. Prophylactic antibiotics. Positioning (supine).',
    spanishPreProcedure: 'Anestesia general. Sonda Foley. Línea arterial. Línea central. Antibióticos profilácticos. Posicionamiento (boca arriba).',
    postProcedure: 'ICU monitoring. Blood pressure control. Pain management. Wound care. Surveillance imaging for EVAR.',
    spanishPostProcedure: 'Monitoreo en UCI. Control de presión arterial. Manejo del dolor. Cuidado de herida. Imágenes de vigilancia para EVAR.',
    complications: [
      'Death (1-5% open, 0.5-2% EVAR)',
      'Myocardial infarction',
      'Stroke',
      'Paralysis (spinal cord ischemia)',
      'Acute kidney injury',
      'Bowel ischemia',
      'Graft infection',
      'Endoleak (EVAR)',
      'Graft migration (EVAR)'
    ],
    spanishComplications: [
      'Muerte (1-5% abierta, 0.5-2% EVAR)',
      'Infarto de miocardio',
      'Accidente cerebrovascular',
      'Parálisis (isquemia de médula espinal)',
      'Lesión renal aguda',
      'Isquemia intestinal',
      'Infección de injerto',
      'Endofuga (EVAR)',
      'Migración de endoprótesis (EVAR)'
    ],
    contraindications: [
      'Severe medical comorbidity precluding repair',
      'Unfavorable anatomy for EVAR',
      'Active infection',
      'Life expectancy <2 years'
    ],
    spanishContraindications: [
      'Comorbilidad médica severa que impide reparación',
      'Anatomía desfavorable para EVAR',
      'Infección activa',
      'Expectativa de vida <2 años'
    ],
    recovery: 'Open: 7-10 days hospital, 6-12 weeks recovery. EVAR: 1-3 days hospital, 2-4 weeks recovery. Lifelong surveillance.',
    spanishRecovery: 'Abierta: 7-10 días hospital, 6-12 semanas recuperación. EVAR: 1-3 días hospital, 2-4 semanas recuperación. Vigilancia de por vida.'
  },

  {
    procedureId: 'surg-lower-extremity-bypass',
    name: 'Lower Extremity Bypass Grafting',
    spanishName: 'Injerto de bypass de extremidad inferior',
    category: 'surgical',
    description: 'Surgical bypass using vein or prosthetic graft to restore blood flow to the leg in peripheral artery disease.',
    spanishDescription: 'Bypass quirúrgico usando vena o injerto protésico para restaurar flujo sanguíneo a la pierna en enfermedad arterial periférica.',
    specialties: ['vascular-surgery'],
    bodyRegions: ['leg', 'vasculature'],
    complexity: 'high',
    setting: ['operating-room'],
    anesthesia: ['general', 'spinal', 'regional'],
    icd10pcs: '0410',
    cptCodes: ['35556', '35571', '35583', '35587'],
    whatToExpect: 'Incision at proximal and distal anastomosis sites. Graft tunneled between arteries. Anastomoses performed. Completion angiography. 2-5 hours.',
    spanishWhatToExpect: 'Incisión en sitios de anastomosis proximal y distal. Injerto tunelizado entre arterias. Anastomosis realizadas. Angiografía de completación. 2-5 horas.',
    patientExplanation: 'When leg arteries are blocked by plaque, blood cannot reach your feet. A bypass creates a detour around the blockage using a vein from your leg or a synthetic tube. This restores circulation and relieves pain, heals wounds, and saves the leg.',
    spanishPatientExplanation: 'Cuando las arterias de la pierna están bloqueadas por placa, la sangre no puede llegar a sus pies. Un bypass crea un desvío alrededor de la obstrucción usando una vena de su pierna o un tubo sintético. Esto restaura la circulación y alivia el dolor, sana heridas y salva la pierna.',
    preparation: 'CT angiography or MR angiography. Vein mapping for conduit. Cardiac clearance. Antiplatelet therapy. Wound care if present.',
    spanishPreparation: 'Angiografía por TC o RM. Mapeo venoso para conducto. Aprobación cardíaca. Terapia antiplaquetaria. Cuidado de herida si está presente.',
    preProcedure: 'Antibiotics. Positioning based on target vessels. Doppler marking of conduit vein. Preparation of alternative conduit if needed.',
    spanishPreProcedure: 'Antibióticos. Posicionamiento basado en vasos objetivo. Marcación Doppler de vena conducto. Preparación de conducto alternativo si es necesario.',
    postProcedure: 'Anticoagulation or antiplatelet therapy. DVT prophylaxis. Wound care. Compartment pressure monitoring if concern. Early ambulation.',
    spanishPostProcedure: 'Anticoagulación o terapia antiplaquetaria. Profilaxis de TVP. Cuidado de herida. Monitoreo de presión de compartimento si hay preocupación. Deambulación temprana.',
    complications: [
      'Graft failure/occlusion',
      'Infection',
      'Bleeding',
      'Wound complications',
      'Compartment syndrome',
      'Nerve injury',
      'Amputation despite bypass',
      'Cardiac events'
    ],
    spanishComplications: [
      'Fallo oclusión del injerto',
      'Infección',
      'Sangrado',
      'Complicaciones de herida',
      'Síndrome compartimental',
      'Lesión nerviosa',
      'Amputación a pesar del bypass',
      'Eventos cardíacos'
    ],
    contraindications: [
      'Non-viable limb (unsalvageable)',
      'Active infection at graft site',
      'Severe cardiac disease precluding surgery',
      'Inadequate conduit and target vessel'
    ],
    spanishContraindications: [
      'Extremidad no viable (insalvable)',
      'Infección activa en sitio de injerto',
      'Enfermedad cardíaca severa que impide cirugía',
      'Conducto y vaso objetivo inadecuados'
    ],
    recovery: 'Hospital stay 3-7 days. Wound healing 2-4 weeks. Activity restrictions 4-6 weeks. Surveillance every 3-6 months.',
    spanishRecovery: 'Estancia hospitalaria 3-7 días. Sanación de herida 2-4 semanas. Restricciones de actividad 4-6 semanas. Vigilancia cada 3-6 meses.'
  }
];

// --- Utility Functions ---

export function findSurgicalProcedure(id: string): SurgicalProcedureEntry | undefined {
  return SURGICAL_PROCEDURES.find(p => p.procedureId === id);
}

export function getSurgicalProceduresByComplexity(level: ComplexityLevel): SurgicalProcedureEntry[] {
  return SURGICAL_PROCEDURES.filter(p => p.complexity === level);
}

export function getSurgicalProceduresBySpecialty(specialty: string): SurgicalProcedureEntry[] {
  return SURGICAL_PROCEDURES.filter(p => 
    p.specialties.some(s => s.toLowerCase().includes(specialty.toLowerCase()))
  );
}

export function getSurgicalProceduresByBodyRegion(region: string): SurgicalProcedureEntry[] {
  return SURGICAL_PROCEDURES.filter(p => 
    p.bodyRegions.some(r => r.toLowerCase().includes(region.toLowerCase()))
  );
}

export function searchSurgicalProcedures(query: string): SurgicalProcedureEntry[] {
  const lowerQuery = query.toLowerCase();
  return SURGICAL_PROCEDURES.filter(p =>
    p.name.toLowerCase().includes(lowerQuery) ||
    p.spanishName.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery) ||
    p.specialties.some(s => s.toLowerCase().includes(lowerQuery))
  );
}
