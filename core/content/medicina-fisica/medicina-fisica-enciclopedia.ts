// medicina-fisica-enciclopedia.ts
// Physical Medicine & Rehabilitation Bilingual Encyclopedia — Spanish-first
// Pattern: JSON.parse() to avoid TS2590 on large literal arrays

export interface MedicinaFisicaEntry {
  id: string;
  nombreEs: string;
  nombreEn: string;
  descripcionEs: string;
  descripcionEn: string;
  categoriaEs: string;
  categoriaEn: string;
  indicacionesEs: string[];
  indicacionesEn: string[];
  tecnicasEs: string;
  tecnicasEn: string;
  beneficiosEs: string[];
  beneficiosEn: string[];
  duracionEs: string;
  duracionEn: string;
  contraindicacionesEs: string[];
  contraindicacionesEn: string[];
  resultadosEsperadosEs: string;
  resultadosEsperadosEn: string;
  cuandoConsultarEs: string;
  cuandoConsultarEn: string;
}

export const MEDICINA_FISICA_ENTRIES: MedicinaFisicaEntry[] = JSON.parse(`[
  {
    "id": "rehabilitacion-acv",
    "nombreEs": "Rehabilitación del Accidente Cerebrovascular",
    "nombreEn": "Stroke Rehabilitation",
    "descripcionEs": "La rehabilitación del accidente cerebrovascular (ACV) es un programa interdisciplinario integral diseñado para ayudar a los pacientes que han sufrido un ictus a recuperar la mayor funcionalidad posible y reintegrarse a sus actividades cotidianas. Este proceso abarca la recuperación motora, cognitiva, del lenguaje y de las habilidades de autocuidado, y se fundamenta en los principios de neuroplasticidad cerebral, que permiten al cerebro reorganizar sus circuitos neuronales y compensar las áreas dañadas mediante el entrenamiento repetitivo e intensivo. La rehabilitación post-ACV debe iniciarse de forma precoz, idealmente dentro de las primeras 24-48 horas tras la estabilización médica del paciente, ya que la evidencia demuestra que la intervención temprana se asocia con mejores resultados funcionales a largo plazo. El equipo rehabilitador incluye fisiatras, fisioterapeutas, terapeutas ocupacionales, logopedas, neuropsicólogos, enfermeros especializados y trabajadores sociales, quienes trabajan de forma coordinada para abordar todas las dimensiones de la discapacidad. La duración y la intensidad del programa se adaptan a la gravedad del déficit neurológico, la edad del paciente, las comorbilidades y los objetivos individuales establecidos.",
    "descripcionEn": "Stroke rehabilitation is a comprehensive interdisciplinary program designed to help patients who have suffered a cerebrovascular accident (CVA) recover the greatest possible functionality and reintegrate into their daily activities. This process encompasses motor, cognitive, language, and self-care skill recovery, and is grounded in the principles of cerebral neuroplasticity, which allow the brain to reorganize its neural circuits and compensate for damaged areas through repetitive and intensive training. Post-stroke rehabilitation should be initiated early, ideally within the first 24-48 hours after the patient's medical stabilization, as evidence demonstrates that early intervention is associated with better long-term functional outcomes. The rehabilitation team includes physiatrists, physical therapists, occupational therapists, speech-language pathologists, neuropsychologists, specialized nurses, and social workers, who work in a coordinated manner to address all dimensions of disability. The duration and intensity of the program are tailored to the severity of the neurological deficit, the patient's age, comorbidities, and individually established goals.",
    "categoriaEs": "Neurorrehabilitación",
    "categoriaEn": "Neurorehabilitation",
    "indicacionesEs": [
      "Hemiparesia o hemiplejía secundaria a ACV isquémico o hemorrágico",
      "Déficit del equilibrio y la coordinación con riesgo de caídas recurrentes",
      "Afasia motora (Broca), sensorial (Wernicke) o global tras ictus del hemisferio dominante",
      "Disfagia orofaríngea con riesgo de aspiración y neumonía por broncoaspiración",
      "Espasticidad severa del hemicuerpo afectado que limita la movilidad funcional",
      "Deterioro cognitivo post-ictus incluyendo déficit atencional, de memoria y funciones ejecutivas",
      "Negligencia espacial unilateral (heminegligencia) asociada a lesiones del hemisferio no dominante",
      "Síndrome de dolor central post-ictus o dolor del hombro hemipléjico",
      "Depresión post-ACV y trastornos del estado de ánimo que interfieren con la rehabilitación",
      "Limitación en actividades básicas e instrumentales de la vida diaria"
    ],
    "indicacionesEn": [
      "Hemiparesis or hemiplegia secondary to ischemic or hemorrhagic stroke",
      "Balance and coordination deficits with risk of recurrent falls",
      "Motor aphasia (Broca's), sensory aphasia (Wernicke's), or global aphasia after dominant hemisphere stroke",
      "Oropharyngeal dysphagia with risk of aspiration and aspiration pneumonia",
      "Severe spasticity of the affected hemibody limiting functional mobility",
      "Post-stroke cognitive impairment including attentional, memory, and executive function deficits",
      "Unilateral spatial neglect (hemineglect) associated with non-dominant hemisphere lesions",
      "Central post-stroke pain syndrome or hemiplegic shoulder pain",
      "Post-stroke depression and mood disorders interfering with rehabilitation",
      "Limitation in basic and instrumental activities of daily living"
    ],
    "tecnicasEs": "Las técnicas de rehabilitación post-ACV incluyen el enfoque de Bobath o neurodesarrollo (NDT), que facilita patrones de movimiento normales mediante la inhibición de patrones anormales de tono y movimiento. La terapia de movimiento inducido por restricción (CIMT) obliga al uso del miembro afectado mediante la inmovilización del miembro sano durante el 90% de las horas de vigilia, con entrenamiento intensivo de 6 horas diarias durante 2 semanas. La estimulación eléctrica funcional (FES) se aplica sobre músculos paréticos para facilitar la contracción durante tareas funcionales como la marcha o la prensión. El entrenamiento robótico asistido utiliza exoesqueletos y dispositivos mecatrónicos para proporcionar asistencia o resistencia durante movimientos repetitivos de alta intensidad. La realidad virtual y los videojuegos terapéuticos ofrecen retroalimentación visual inmediata y aumentan la motivación del paciente durante las sesiones de rehabilitación. El entrenamiento en cinta rodante con soporte parcial de peso corporal permite la práctica precoz de la marcha en pacientes con debilidad severa. La terapia del espejo y la imaginería motora activan circuitos corticales motores bilaterales para facilitar la recuperación del miembro afectado. La estimulación magnética transcraneal (TMS) y la estimulación transcraneal por corriente directa (tDCS) son técnicas de neuromodulación no invasiva que modulan la excitabilidad cortical para potenciar la neuroplasticidad.",
    "tecnicasEn": "Post-stroke rehabilitation techniques include the Bobath or neurodevelopmental treatment (NDT) approach, which facilitates normal movement patterns by inhibiting abnormal tone and movement patterns. Constraint-induced movement therapy (CIMT) forces use of the affected limb by immobilizing the unaffected limb for 90% of waking hours, with intensive training of 6 hours daily for 2 weeks. Functional electrical stimulation (FES) is applied to paretic muscles to facilitate contraction during functional tasks such as gait or grasp. Robot-assisted training uses exoskeletons and mechatronic devices to provide assistance or resistance during high-intensity repetitive movements. Virtual reality and therapeutic video games offer immediate visual feedback and increase patient motivation during rehabilitation sessions. Body-weight-supported treadmill training allows early gait practice in patients with severe weakness. Mirror therapy and motor imagery activate bilateral motor cortical circuits to facilitate recovery of the affected limb. Transcranial magnetic stimulation (TMS) and transcranial direct current stimulation (tDCS) are non-invasive neuromodulation techniques that modulate cortical excitability to enhance neuroplasticity.",
    "beneficiosEs": [
      "Recuperación significativa de la función motora del hemicuerpo afectado con mejora de la fuerza y coordinación",
      "Restauración de la marcha independiente o con mínima asistencia en un alto porcentaje de pacientes",
      "Mejora de la capacidad de comunicación verbal y no verbal en pacientes con afasia",
      "Reducción del riesgo de complicaciones secundarias como contracturas, trombosis venosa y úlceras por presión",
      "Disminución de la espasticidad y del dolor asociado mediante técnicas específicas",
      "Recuperación de la independencia en actividades de la vida diaria como alimentación, vestido e higiene",
      "Mejora del estado emocional y reducción de la incidencia de depresión post-ictus",
      "Promoción de la neuroplasticidad y reorganización cortical para compensar las áreas dañadas"
    ],
    "beneficiosEn": [
      "Significant recovery of motor function in the affected hemibody with improved strength and coordination",
      "Restoration of independent or minimally assisted gait in a high percentage of patients",
      "Improvement in verbal and non-verbal communication ability in patients with aphasia",
      "Reduction of risk of secondary complications such as contractures, venous thrombosis, and pressure ulcers",
      "Decrease in spasticity and associated pain through specific techniques",
      "Recovery of independence in activities of daily living such as feeding, dressing, and hygiene",
      "Improvement in emotional state and reduction in the incidence of post-stroke depression",
      "Promotion of neuroplasticity and cortical reorganization to compensate for damaged areas"
    ],
    "duracionEs": "La rehabilitación post-ACV se estructura en fases. La fase aguda (primeros 7-14 días) se realiza en el hospital con movilización precoz y prevención de complicaciones. La fase subaguda (2 semanas a 3-6 meses) es el período de mayor recuperación neurológica, con rehabilitación intensiva en régimen de hospitalización o ambulatorio de 3-5 horas diarias, 5-6 días por semana. La fase crónica (más de 6 meses) incluye programas de mantenimiento y adaptación a largo plazo. La mayor parte de la recuperación funcional ocurre en los primeros 3-6 meses, aunque puede continuar hasta 12-18 meses o más. Los programas de ejercicio comunitarios y domiciliarios deben mantenerse de forma indefinida para preservar las ganancias funcionales.",
    "duracionEn": "Post-stroke rehabilitation is structured in phases. The acute phase (first 7-14 days) is carried out in the hospital with early mobilization and complication prevention. The subacute phase (2 weeks to 3-6 months) is the period of greatest neurological recovery, with intensive rehabilitation on an inpatient or outpatient basis for 3-5 hours daily, 5-6 days per week. The chronic phase (more than 6 months) includes long-term maintenance and adaptation programs. Most functional recovery occurs within the first 3-6 months, although it may continue for 12-18 months or longer. Community and home exercise programs should be maintained indefinitely to preserve functional gains.",
    "contraindicacionesEs": [
      "Inestabilidad médica aguda con signos vitales no controlados o deterioro neurológico progresivo",
      "Infarto cerebral masivo con edema cerebral extenso y riesgo de herniación",
      "Hemorragia intracraneal activa no controlada o transformación hemorrágica del infarto",
      "Insuficiencia cardíaca descompensada o arritmias potencialmente letales",
      "Trombosis venosa profunda aguda con riesgo de embolismo pulmonar (contraindicación relativa para movilización)",
      "Estado de conciencia severamente deprimido (Glasgow < 8) sin capacidad de participación activa"
    ],
    "contraindicacionesEn": [
      "Acute medical instability with uncontrolled vital signs or progressive neurological deterioration",
      "Massive cerebral infarction with extensive cerebral edema and risk of herniation",
      "Active uncontrolled intracranial hemorrhage or hemorrhagic transformation of infarction",
      "Decompensated heart failure or potentially lethal arrhythmias",
      "Acute deep vein thrombosis with risk of pulmonary embolism (relative contraindication for mobilization)",
      "Severely depressed level of consciousness (Glasgow < 8) without capacity for active participation"
    ],
    "resultadosEsperadosEs": "Con rehabilitación intensiva y precoz, aproximadamente el 60-70% de los pacientes con ACV logran recuperar la marcha independiente o con dispositivos de asistencia dentro de los primeros 6 meses. Alrededor del 50-70% recuperan independencia funcional en actividades básicas de la vida diaria. La recuperación del miembro superior es generalmente más limitada, con un 30-40% de los pacientes logrando una función útil de la mano afectada. Los pacientes con afasia muestran mejora en la comunicación en el 60-75% de los casos con terapia logopédica intensiva. Los factores pronósticos favorables incluyen edad joven, ACV de extensión limitada, preservación de la función cognitiva, ausencia de comorbilidades graves y alta motivación del paciente y soporte familiar adecuado.",
    "resultadosEsperadosEn": "With intensive and early rehabilitation, approximately 60-70% of stroke patients achieve independent or device-assisted gait within the first 6 months. About 50-70% recover functional independence in basic activities of daily living. Upper extremity recovery is generally more limited, with 30-40% of patients achieving useful function of the affected hand. Patients with aphasia show improvement in communication in 60-75% of cases with intensive speech-language therapy. Favorable prognostic factors include young age, limited stroke extent, preserved cognitive function, absence of serious comorbidities, and high patient motivation with adequate family support.",
    "cuandoConsultarEs": "Consulte a un fisiatra o especialista en medicina de rehabilitación inmediatamente después del diagnóstico de ACV para iniciar la planificación rehabilitadora. Busque atención urgente si aparece deterioro neurológico nuevo o empeoramiento de los déficits existentes, ya que puede indicar un nuevo evento vascular. Consulte si el paciente desarrolla espasticidad severa que interfiere con la función o causa dolor, si presenta disfagia persistente con episodios de tos o atragantamiento durante las comidas, si muestra signos de depresión como pérdida de interés en la rehabilitación, insomnio o ideación suicida, o si las caídas se vuelven frecuentes a pesar del entrenamiento del equilibrio.",
    "cuandoConsultarEn": "Consult a physiatrist or rehabilitation medicine specialist immediately after stroke diagnosis to begin rehabilitation planning. Seek urgent attention if new neurological deterioration or worsening of existing deficits appears, as this may indicate a new vascular event. Consult if the patient develops severe spasticity interfering with function or causing pain, if persistent dysphagia with coughing or choking episodes during meals occurs, if signs of depression such as loss of interest in rehabilitation, insomnia, or suicidal ideation appear, or if falls become frequent despite balance training."
  },
  {
    "id": "rehabilitacion-lesion-medular",
    "nombreEs": "Rehabilitación de la Lesión Medular",
    "nombreEn": "Spinal Cord Injury Rehabilitation",
    "descripcionEs": "La rehabilitación de la lesión medular es un programa comprehensivo y prolongado destinado a maximizar la independencia funcional y la calidad de vida de las personas que han sufrido un daño en la médula espinal, ya sea de origen traumático (accidentes de tráfico, caídas, lesiones deportivas, violencia) o no traumático (tumores, infecciones, enfermedades vasculares, desmielinizantes o degenerativas). La lesión medular se clasifica según la escala de la American Spinal Injury Association (ASIA) en cinco grados, desde ASIA A (lesión completa sin función motora ni sensitiva por debajo del nivel de lesión) hasta ASIA E (función neurológica normal). El nivel neurológico de la lesión determina fundamentalmente el pronóstico funcional: las lesiones cervicales altas (C1-C4) causan tetraplejía con dependencia de ventilación mecánica, mientras que las lesiones lumbares bajas permiten la deambulación con dispositivos ortopédicos. La rehabilitación aborda no solo los déficits motores y sensitivos, sino también las complicaciones médicas frecuentes como la disreflexia autonómica, la vejiga e intestino neurogénicos, las úlceras por presión, el dolor neuropático, la osteoporosis y los trastornos psicológicos asociados.",
    "descripcionEn": "Spinal cord injury (SCI) rehabilitation is a comprehensive and prolonged program aimed at maximizing functional independence and quality of life for individuals who have sustained spinal cord damage, whether of traumatic origin (motor vehicle accidents, falls, sports injuries, violence) or non-traumatic origin (tumors, infections, vascular diseases, demyelinating or degenerative conditions). SCI is classified according to the American Spinal Injury Association (ASIA) scale into five grades, from ASIA A (complete injury with no motor or sensory function below the injury level) to ASIA E (normal neurological function). The neurological level of injury fundamentally determines functional prognosis: high cervical injuries (C1-C4) cause tetraplegia with mechanical ventilation dependence, while low lumbar injuries allow ambulation with orthotic devices. Rehabilitation addresses not only motor and sensory deficits but also frequent medical complications such as autonomic dysreflexia, neurogenic bladder and bowel, pressure ulcers, neuropathic pain, osteoporosis, and associated psychological disorders.",
    "categoriaEs": "Neurorrehabilitación",
    "categoriaEn": "Neurorehabilitation",
    "indicacionesEs": [
      "Paraplejía o tetraplejía de cualquier etiología con déficit motor por debajo del nivel de lesión",
      "Vejiga neurogénica con retención urinaria, incontinencia o infecciones urinarias de repetición",
      "Intestino neurogénico con estreñimiento crónico, incontinencia fecal o impactación",
      "Espasticidad severa que interfiere con la postura, las transferencias o el sueño",
      "Dolor neuropático crónico por debajo del nivel de lesión que afecta la calidad de vida",
      "Úlceras por presión recurrentes que requieren educación en prevención y manejo postural",
      "Disreflexia autonómica en lesiones por encima de T6 que requiere manejo preventivo",
      "Necesidad de entrenamiento en movilidad en silla de ruedas y transferencias",
      "Disfunción sexual y reproductiva que requiere consejería y manejo especializado",
      "Trastorno depresivo o de adaptación secundario a la lesión medular"
    ],
    "indicacionesEn": [
      "Paraplegia or tetraplegia of any etiology with motor deficit below the injury level",
      "Neurogenic bladder with urinary retention, incontinence, or recurrent urinary tract infections",
      "Neurogenic bowel with chronic constipation, fecal incontinence, or impaction",
      "Severe spasticity interfering with posture, transfers, or sleep",
      "Chronic neuropathic pain below the injury level affecting quality of life",
      "Recurrent pressure ulcers requiring education in prevention and postural management",
      "Autonomic dysreflexia in injuries above T6 requiring preventive management",
      "Need for wheelchair mobility and transfer training",
      "Sexual and reproductive dysfunction requiring specialized counseling and management",
      "Depressive or adjustment disorder secondary to spinal cord injury"
    ],
    "tecnicasEs": "La rehabilitación de la lesión medular emplea un abordaje multidisciplinario adaptado al nivel y la completitud de la lesión. El entrenamiento de la fuerza muscular se centra en los grupos musculares preservados, utilizando ejercicios de resistencia progresiva para maximizar la función de los músculos inervados por encima de la lesión. El entrenamiento locomotor incluye la marcha sobre cinta rodante con soporte parcial de peso corporal, exoesqueletos robóticos (como Ekso, ReWalk o Indego) y estimulación eléctrica funcional (FES) para activar los músculos paralizados durante la bipedestación y la marcha. Las transferencias (cama-silla, silla-inodoro, silla-automóvil) se practican sistemáticamente según el nivel de lesión, utilizando tablas de transferencia, barras de agarre y técnicas específicas. El manejo de la vejiga neurogénica incluye cateterismo intermitente limpio, programas de vaciamiento vesical temporizado y entrenamiento en el autosondaje. El programa intestinal establece horarios regulares de evacuación con estimulación digital, supositorios y ajustes dietéticos. La terapia ocupacional entrena las actividades de la vida diaria con adaptaciones y tecnología asistiva (cubiertos adaptados, férulas de prensión, control ambiental por voz). El manejo postural y la prescripción de la silla de ruedas adecuada (manual ultraligera o motorizada) son fundamentales para la movilidad y la prevención de complicaciones.",
    "tecnicasEn": "SCI rehabilitation employs a multidisciplinary approach tailored to the level and completeness of the injury. Muscle strengthening training focuses on preserved muscle groups, using progressive resistance exercises to maximize function of muscles innervated above the injury. Locomotor training includes body-weight-supported treadmill walking, robotic exoskeletons (such as Ekso, ReWalk, or Indego), and functional electrical stimulation (FES) to activate paralyzed muscles during standing and gait. Transfers (bed-to-wheelchair, wheelchair-to-toilet, wheelchair-to-car) are systematically practiced according to injury level, using transfer boards, grab bars, and specific techniques. Neurogenic bladder management includes clean intermittent catheterization, timed voiding programs, and self-catheterization training. The bowel program establishes regular evacuation schedules with digital stimulation, suppositories, and dietary adjustments. Occupational therapy trains activities of daily living with adaptations and assistive technology (adapted utensils, grasp splints, voice-activated environmental control). Postural management and prescription of an appropriate wheelchair (ultralight manual or power) are fundamental for mobility and complication prevention.",
    "beneficiosEs": [
      "Maximización de la independencia funcional según el nivel neurológico de lesión",
      "Prevención de complicaciones médicas secundarias como úlceras por presión, trombosis y contracturas",
      "Mejora de la capacidad cardiovascular y respiratoria mediante ejercicio adaptado",
      "Manejo efectivo de la vejiga e intestino neurogénicos reduciendo infecciones y complicaciones",
      "Reintegración social, laboral y comunitaria con adaptaciones y tecnología asistiva",
      "Mejora de la salud psicológica y reducción de la depresión y ansiedad post-lesión",
      "Entrenamiento de los cuidadores familiares para el manejo seguro en el domicilio",
      "Preservación de la integridad musculoesquelética y prevención del deterioro funcional progresivo"
    ],
    "beneficiosEn": [
      "Maximization of functional independence according to the neurological injury level",
      "Prevention of secondary medical complications such as pressure ulcers, thrombosis, and contractures",
      "Improvement of cardiovascular and respiratory capacity through adapted exercise",
      "Effective management of neurogenic bladder and bowel reducing infections and complications",
      "Social, vocational, and community reintegration with adaptations and assistive technology",
      "Improvement of psychological health and reduction of post-injury depression and anxiety",
      "Training of family caregivers for safe management at home",
      "Preservation of musculoskeletal integrity and prevention of progressive functional deterioration"
    ],
    "duracionEs": "La fase aguda de rehabilitación en una unidad especializada de lesión medular dura típicamente de 2 a 6 meses, dependiendo del nivel y la completitud de la lesión y las complicaciones médicas asociadas. Los pacientes con tetraplejía completa requieren estancias más prolongadas (4-6 meses o más) que los pacientes con paraplejía (2-4 meses). Tras el alta, la rehabilitación ambulatoria continúa durante 6-12 meses adicionales con sesiones de 2-3 veces por semana. Los programas de mantenimiento físico y revisiones médicas periódicas deben continuarse de por vida para prevenir complicaciones y preservar la función. La adaptación psicológica y la reintegración social pueden requerir años de apoyo continuo.",
    "duracionEn": "The acute rehabilitation phase in a specialized spinal cord injury unit typically lasts 2 to 6 months, depending on the level and completeness of injury and associated medical complications. Patients with complete tetraplegia require longer stays (4-6 months or more) than patients with paraplegia (2-4 months). After discharge, outpatient rehabilitation continues for an additional 6-12 months with sessions 2-3 times per week. Physical maintenance programs and periodic medical reviews should continue lifelong to prevent complications and preserve function. Psychological adaptation and social reintegration may require years of ongoing support.",
    "contraindicacionesEs": [
      "Inestabilidad de la columna vertebral no estabilizada quirúrgicamente con riesgo de lesión medular adicional",
      "Shock medular activo con arreflexia completa (fase inicial, contraindicación relativa para movilización agresiva)",
      "Disreflexia autonómica aguda no resuelta con cifras de tensión arterial peligrosamente elevadas",
      "Tromboembolismo pulmonar agudo o trombosis venosa profunda no anticoagulada",
      "Úlceras por presión profundas grado III-IV sobre superficies de apoyo que impiden la sedestación",
      "Infección sistémica activa o sepsis con inestabilidad hemodinámica"
    ],
    "contraindicacionesEn": [
      "Spinal instability not surgically stabilized with risk of additional spinal cord injury",
      "Active spinal shock with complete areflexia (initial phase, relative contraindication for aggressive mobilization)",
      "Unresolved acute autonomic dysreflexia with dangerously elevated blood pressure",
      "Acute pulmonary thromboembolism or non-anticoagulated deep vein thrombosis",
      "Deep grade III-IV pressure ulcers on weight-bearing surfaces preventing sitting",
      "Active systemic infection or sepsis with hemodynamic instability"
    ],
    "resultadosEsperadosEs": "Los resultados funcionales dependen fundamentalmente del nivel neurológico de la lesión. Los pacientes con lesión C5 pueden lograr independencia en alimentación con adaptaciones y conducir vehículos adaptados. Con lesión C6-C7, la mayoría logra independencia en transferencias, autocuidado y movilidad en silla de ruedas manual. Los pacientes con paraplejía torácica baja (T10-L1) pueden lograr marcha comunitaria con ortesis y bastones. Más del 80% de los pacientes con lesión medular incompleta (ASIA C-D) logran algún grado de deambulación. El retorno laboral se logra en aproximadamente el 30-50% de los pacientes con programas de rehabilitación vocacional. La esperanza de vida, aunque reducida respecto a la población general, ha mejorado significativamente con los avances en el manejo de complicaciones urológicas, respiratorias y cardiovasculares.",
    "resultadosEsperadosEn": "Functional outcomes depend fundamentally on the neurological level of injury. Patients with C5 injury can achieve independence in feeding with adaptations and drive adapted vehicles. With C6-C7 injury, most achieve independence in transfers, self-care, and manual wheelchair mobility. Patients with low thoracic paraplegia (T10-L1) can achieve community ambulation with orthoses and crutches. Over 80% of patients with incomplete SCI (ASIA C-D) achieve some degree of ambulation. Return to work is achieved in approximately 30-50% of patients with vocational rehabilitation programs. Life expectancy, although reduced compared to the general population, has significantly improved with advances in management of urological, respiratory, and cardiovascular complications.",
    "cuandoConsultarEs": "Busque atención especializada de urgencia ante signos de disreflexia autonómica como cefalea intensa, hipertensión paroxística, sudoración por encima del nivel de lesión y bradicardia, ya que esta complicación puede poner en riesgo la vida si no se identifica y resuelve el estímulo desencadenante (impactación fecal, distensión vesical, lesión cutánea). Consulte ante fiebre inexplicada que puede indicar infección urinaria o úlcera infectada, ante empeoramiento de la función motora o sensitiva que podría sugerir siringomielia post-traumática, ante espasticidad de inicio nuevo o significativamente aumentada, o ante signos de depresión severa o ideación suicida.",
    "cuandoConsultarEn": "Seek urgent specialized attention for signs of autonomic dysreflexia such as severe headache, paroxysmal hypertension, sweating above the injury level, and bradycardia, as this complication can be life-threatening if the triggering stimulus (fecal impaction, bladder distension, skin injury) is not identified and resolved. Consult for unexplained fever that may indicate urinary tract infection or infected ulcer, for worsening motor or sensory function that could suggest post-traumatic syringomyelia, for new-onset or significantly increased spasticity, or for signs of severe depression or suicidal ideation."
  },
  {
    "id": "protesis-amputacion",
    "nombreEs": "Prótesis y Rehabilitación de la Amputación",
    "nombreEn": "Prosthetics and Amputation Rehabilitation",
    "descripcionEs": "La rehabilitación protésica es un proceso integral que abarca desde la preparación preoperatoria hasta la reintegración funcional completa de las personas que han sufrido una amputación de miembros, ya sea de origen vascular (enfermedad arterial periférica, diabetes mellitus), traumático (accidentes laborales, de tráfico o bélicos), oncológico (tumores óseos o de tejidos blandos) o congénito (agenesia de extremidades). El objetivo principal es restaurar la máxima funcionalidad posible mediante la prescripción, el ajuste y el entrenamiento con dispositivos protésicos apropiados, así como fortalecer los mecanismos de adaptación psicológica del paciente. La amputación de miembro inferior es la más frecuente, representando más del 80% de todas las amputaciones, con la amputación transtibial (por debajo de la rodilla) y la transfemoral (por encima de la rodilla) como los niveles más comunes. Los avances tecnológicos en prótesis han revolucionado el campo, desde los componentes mecánicos simples hasta las prótesis biónicas microprocesadas que permiten una marcha casi natural y las prótesis mioeléctricas para miembro superior que responden a señales electromiográficas del muñón.",
    "descripcionEn": "Prosthetic rehabilitation is a comprehensive process that spans from preoperative preparation to full functional reintegration of individuals who have undergone limb amputation, whether of vascular origin (peripheral arterial disease, diabetes mellitus), traumatic (work, traffic, or war accidents), oncological (bone or soft tissue tumors), or congenital (limb agenesis). The primary objective is to restore maximum possible functionality through the prescription, fitting, and training with appropriate prosthetic devices, as well as strengthening the patient's psychological adaptation mechanisms. Lower limb amputation is the most frequent, representing over 80% of all amputations, with transtibial (below-knee) and transfemoral (above-knee) as the most common levels. Technological advances in prosthetics have revolutionized the field, from simple mechanical components to microprocessor-controlled bionic prostheses that allow near-natural gait and myoelectric upper-limb prostheses that respond to electromyographic signals from the residual limb.",
    "categoriaEs": "Ortopédica",
    "categoriaEn": "Orthopedic",
    "indicacionesEs": [
      "Amputación transtibial o transfemoral por enfermedad vascular periférica o diabetes con muñón estable y cicatrizado",
      "Amputación traumática con muñón viable para adaptación protésica",
      "Amputación oncológica tras resección tumoral con márgenes libres y pronóstico favorable para rehabilitación",
      "Desarticulación de rodilla o cadera que requiere componentes protésicos especializados",
      "Amputación transradial o transhumeral de miembro superior con necesidad de restauración de prensión",
      "Dolor del miembro fantasma persistente que puede beneficiarse de terapia del espejo y desensibilización",
      "Contractura articular proximal al nivel de amputación que requiere prevención y manejo",
      "Necesidad de actualización protésica por cambios en el volumen del muñón o deterioro del dispositivo",
      "Amputación bilateral que requiere entrenamiento especializado en equilibrio y movilidad",
      "Paciente pediátrico con deficiencia congénita de extremidades que requiere adaptación protésica evolutiva"
    ],
    "indicacionesEn": [
      "Transtibial or transfemoral amputation due to peripheral vascular disease or diabetes with stable and healed residual limb",
      "Traumatic amputation with viable residual limb for prosthetic fitting",
      "Oncological amputation after tumor resection with clear margins and favorable prognosis for rehabilitation",
      "Knee or hip disarticulation requiring specialized prosthetic components",
      "Transradial or transhumeral upper limb amputation with need for grasp restoration",
      "Persistent phantom limb pain that may benefit from mirror therapy and desensitization",
      "Joint contracture proximal to amputation level requiring prevention and management",
      "Need for prosthetic upgrade due to changes in residual limb volume or device deterioration",
      "Bilateral amputation requiring specialized balance and mobility training",
      "Pediatric patient with congenital limb deficiency requiring developmental prosthetic adaptation"
    ],
    "tecnicasEs": "La rehabilitación protésica se divide en fases claramente definidas. La fase preprotésica incluye el acondicionamiento del muñón mediante vendaje compresivo elástico o encamisado rígido removible para conformar una forma cónica óptima, ejercicios de rango de movimiento para prevenir contracturas en flexión de cadera o rodilla, fortalecimiento muscular del muñón y las extremidades preservadas, y entrenamiento del equilibrio y la transferencia de peso. El manejo del dolor incluye desensibilización del muñón mediante golpeteo, masaje y texturas progresivas, terapia del espejo para el dolor del miembro fantasma y farmacoterapia con gabapentinoides, antidepresivos tricíclicos o duloxetina. La fase protésica comienza con la selección del socket (cuenca) apropiado, que es la interfaz crítica entre el muñón y la prótesis, y la prescripción de componentes según el nivel de actividad funcional del paciente clasificado por el sistema K-level (K0 a K4). El entrenamiento protésico para miembro inferior incluye colocación y retiro del dispositivo, bipedestación estática con carga simétrica, marcha entre barras paralelas con progresión a andador, bastones y marcha independiente, entrenamiento en terrenos irregulares, rampas y escaleras, y práctica de caídas controladas y levantamiento del suelo. Para miembro superior, el entrenamiento incluye control terminal del dispositivo (gancho o mano protésica), coordinación bimanual y entrenamiento en actividades funcionales específicas.",
    "tecnicasEn": "Prosthetic rehabilitation is divided into clearly defined phases. The pre-prosthetic phase includes residual limb conditioning through elastic compressive wrapping or rigid removable dressing to shape an optimal conical form, range of motion exercises to prevent hip or knee flexion contractures, muscle strengthening of the residual limb and preserved extremities, and balance and weight-shifting training. Pain management includes residual limb desensitization through tapping, massage, and progressive textures, mirror therapy for phantom limb pain, and pharmacotherapy with gabapentinoids, tricyclic antidepressants, or duloxetine. The prosthetic phase begins with selection of the appropriate socket, which is the critical interface between the residual limb and prosthesis, and prescription of components according to the patient's functional activity level classified by the K-level system (K0 to K4). Lower limb prosthetic training includes donning and doffing the device, static standing with symmetrical weight-bearing, gait between parallel bars progressing to walker, canes, and independent gait, training on uneven terrain, ramps, and stairs, and practice of controlled falls and floor-to-standing transfers. For upper limb, training includes terminal device control (hook or prosthetic hand), bimanual coordination, and training in specific functional activities.",
    "beneficiosEs": [
      "Restauración de la movilidad independiente y la capacidad de marcha con patrón biomecánico funcional",
      "Recuperación de la imagen corporal y mejora de la autoestima y bienestar psicológico",
      "Retorno a actividades laborales, recreativas y deportivas con adaptaciones protésicas especializadas",
      "Prevención de complicaciones musculoesqueléticas como escoliosis compensatoria, artrosis y dolor lumbar",
      "Mejora de la capacidad cardiovascular mediante la actividad física regular con prótesis",
      "Independencia en actividades de la vida diaria incluyendo higiene, vestido y alimentación",
      "Reducción del dolor del miembro fantasma mediante el uso regular de la prótesis y terapia específica",
      "Mejora de la distribución de cargas y prevención de la sobrecarga del miembro contralateral"
    ],
    "beneficiosEn": [
      "Restoration of independent mobility and gait capacity with functional biomechanical pattern",
      "Recovery of body image and improvement of self-esteem and psychological well-being",
      "Return to work, recreational, and sports activities with specialized prosthetic adaptations",
      "Prevention of musculoskeletal complications such as compensatory scoliosis, osteoarthritis, and low back pain",
      "Improvement of cardiovascular capacity through regular physical activity with prosthesis",
      "Independence in activities of daily living including hygiene, dressing, and feeding",
      "Reduction of phantom limb pain through regular prosthesis use and specific therapy",
      "Improvement of load distribution and prevention of overload on the contralateral limb"
    ],
    "duracionEs": "La fase preprotésica dura típicamente de 2 a 8 semanas, dependiendo de la cicatrización del muñón, el control de edema y las comorbilidades del paciente. El molde y la fabricación de la primera prótesis provisional requieren 1-2 semanas adicionales. El entrenamiento protésico intensivo dura de 4 a 12 semanas para amputaciones transtibiales y de 8 a 16 semanas para transfemoral, con sesiones de 1-2 horas, 3-5 veces por semana. La prótesis definitiva se prescribe generalmente a los 6-12 meses, cuando el volumen del muñón se ha estabilizado. Se requieren revisiones periódicas cada 3-6 meses durante el primer año y anuales posteriormente para ajustar el socket y evaluar los componentes. Las prótesis tienen una vida útil media de 3-5 años y requieren reemplazo periódico.",
    "duracionEn": "The pre-prosthetic phase typically lasts 2 to 8 weeks, depending on residual limb healing, edema control, and patient comorbidities. Casting and fabrication of the first provisional prosthesis require an additional 1-2 weeks. Intensive prosthetic training lasts 4 to 12 weeks for transtibial amputations and 8 to 16 weeks for transfemoral, with sessions of 1-2 hours, 3-5 times per week. The definitive prosthesis is generally prescribed at 6-12 months when residual limb volume has stabilized. Periodic reviews every 3-6 months during the first year and annually thereafter are required to adjust the socket and evaluate components. Prostheses have an average lifespan of 3-5 years and require periodic replacement.",
    "contraindicacionesEs": [
      "Muñón no cicatrizado con herida abierta, infección activa o necrosis tisular",
      "Isquemia crítica del muñón con insuficiencia vascular que impide la cicatrización",
      "Contractura severa en flexión de la articulación proximal (>30° en cadera o >15° en rodilla) no corregible",
      "Enfermedad oncológica avanzada con metástasis y pronóstico de vida muy limitado",
      "Deterioro cognitivo severo que impide el aprendizaje del uso del dispositivo protésico",
      "Insuficiencia cardíaca clase IV o enfermedad pulmonar severa que limita la tolerancia al ejercicio"
    ],
    "contraindicacionesEn": [
      "Unhealed residual limb with open wound, active infection, or tissue necrosis",
      "Critical ischemia of the residual limb with vascular insufficiency preventing healing",
      "Severe flexion contracture of the proximal joint (>30° at hip or >15° at knee) not correctable",
      "Advanced oncological disease with metastases and very limited life prognosis",
      "Severe cognitive impairment preventing learning of prosthetic device use",
      "Class IV heart failure or severe pulmonary disease limiting exercise tolerance"
    ],
    "resultadosEsperadosEs": "Los resultados protésicos varían según el nivel de amputación, la etiología y las comorbilidades. Aproximadamente el 80-90% de los amputados transtibiales unilaterales logran una marcha funcional con prótesis, frente al 50-70% de los amputados transfemorales. Los pacientes de etiología traumática generalmente logran mayores niveles funcionales que los de etiología vascular debido a la menor edad y la ausencia de comorbilidades sistémicas. Las prótesis con microprocesador (como la C-Leg o Genium) mejoran significativamente la seguridad y eficiencia de la marcha en amputados transfemorales en comparación con las rodillas mecánicas convencionales. El retorno al trabajo se logra en el 60-80% de los amputados traumáticos y el 20-40% de los amputados vasculares. Las prótesis deportivas especializadas (como las láminas de carbono) permiten la participación en actividades deportivas de alto rendimiento.",
    "resultadosEsperadosEn": "Prosthetic outcomes vary according to amputation level, etiology, and comorbidities. Approximately 80-90% of unilateral transtibial amputees achieve functional gait with prosthesis, compared to 50-70% of transfemoral amputees. Patients with traumatic etiology generally achieve higher functional levels than those with vascular etiology due to younger age and absence of systemic comorbidities. Microprocessor prostheses (such as C-Leg or Genium) significantly improve gait safety and efficiency in transfemoral amputees compared to conventional mechanical knees. Return to work is achieved in 60-80% of traumatic amputees and 20-40% of vascular amputees. Specialized sports prostheses (such as carbon-fiber running blades) enable participation in high-performance sporting activities.",
    "cuandoConsultarEs": "Consulte al equipo de rehabilitación protésica si experimenta dolor persistente en el muñón o aumento del dolor del miembro fantasma, cambios significativos en el volumen del muñón que afectan el ajuste del socket, lesiones cutáneas recurrentes como ampollas, abrasiones o quistes epidermoides relacionadas con el uso de la prótesis, dificultad progresiva para la marcha o deterioro del patrón de marcha previamente adquirido, ruidos anormales, aflojamiento o desgaste visible de los componentes protésicos, o si desea explorar opciones protésicas más avanzadas para actividades específicas.",
    "cuandoConsultarEn": "Consult the prosthetic rehabilitation team if you experience persistent residual limb pain or increased phantom limb pain, significant changes in residual limb volume affecting socket fit, recurrent skin lesions such as blisters, abrasions, or epidermoid cysts related to prosthesis use, progressive gait difficulty or deterioration of previously acquired gait pattern, abnormal noises, loosening, or visible wear of prosthetic components, or if you wish to explore more advanced prosthetic options for specific activities."
  },
  {
    "id": "rehabilitacion-cardiaca",
    "nombreEs": "Rehabilitación Cardíaca",
    "nombreEn": "Cardiac Rehabilitation",
    "descripcionEs": "La rehabilitación cardíaca es un programa supervisado y estructurado de ejercicio físico, educación para la salud cardiovascular y modificación de factores de riesgo, diseñado para pacientes que han sufrido eventos cardíacos agudos o han sido sometidos a procedimientos cardíacos. Es una intervención con evidencia de clase IA que ha demostrado reducir la mortalidad cardiovascular en un 20-30%, disminuir las hospitalizaciones recurrentes y mejorar significativamente la calidad de vida. El programa aborda integralmente los componentes del riesgo cardiovascular incluyendo el ejercicio supervisado, la cesación tabáquica, el control nutricional, el manejo del estrés, la adherencia farmacológica y el soporte psicosocial. Los beneficios fisiológicos del ejercicio estructurado incluyen la mejora de la función endotelial, el aumento de la capacidad oxidativa del músculo esquelético, la mejora de la regulación autonómica cardíaca con aumento del tono vagal y reducción de la activación simpática, la reducción de la inflamación sistémica y la mejora del perfil lipídico. La rehabilitación cardíaca se desarrolla clásicamente en tres fases, desde la movilización hospitalaria precoz hasta el programa comunitario de mantenimiento a largo plazo.",
    "descripcionEn": "Cardiac rehabilitation is a supervised and structured program of physical exercise, cardiovascular health education, and risk factor modification designed for patients who have suffered acute cardiac events or undergone cardiac procedures. It is a class IA evidence-based intervention that has been shown to reduce cardiovascular mortality by 20-30%, decrease recurrent hospitalizations, and significantly improve quality of life. The program comprehensively addresses cardiovascular risk components including supervised exercise, smoking cessation, nutritional management, stress management, pharmacological adherence, and psychosocial support. The physiological benefits of structured exercise include improved endothelial function, increased oxidative capacity of skeletal muscle, improved cardiac autonomic regulation with increased vagal tone and reduced sympathetic activation, reduction of systemic inflammation, and improvement of lipid profile. Cardiac rehabilitation classically develops in three phases, from early hospital mobilization to a long-term community maintenance program.",
    "categoriaEs": "Cardiopulmonar",
    "categoriaEn": "Cardiopulmonary",
    "indicacionesEs": [
      "Infarto agudo de miocardio (STEMI o NSTEMI) estabilizado con o sin intervención percutánea",
      "Post-cirugía de revascularización coronaria (bypass aortocoronario) tras esternotomía",
      "Insuficiencia cardíaca crónica estable con fracción de eyección reducida (HFrEF) o preservada (HFpEF)",
      "Post-intervención coronaria percutánea (angioplastia con stent) electiva o de urgencia",
      "Post-cirugía valvular (reemplazo o reparación) mitral, aórtica o tricuspídea",
      "Angina de pecho estable con limitación funcional a pesar del tratamiento médico óptimo",
      "Post-trasplante cardíaco para optimizar la capacidad funcional y la tolerancia al ejercicio",
      "Enfermedad arterial periférica con claudicación intermitente que limita la marcha",
      "Post-implante de dispositivos cardíacos (marcapasos, desfibrilador, resincronizador)",
      "Cardiopatía congénita en adultos con limitación funcional"
    ],
    "indicacionesEn": [
      "Stabilized acute myocardial infarction (STEMI or NSTEMI) with or without percutaneous intervention",
      "Post-coronary artery bypass graft surgery after sternotomy",
      "Stable chronic heart failure with reduced ejection fraction (HFrEF) or preserved (HFpEF)",
      "Post-percutaneous coronary intervention (angioplasty with stent) elective or emergency",
      "Post-valvular surgery (replacement or repair) mitral, aortic, or tricuspid",
      "Stable angina pectoris with functional limitation despite optimal medical therapy",
      "Post-heart transplant to optimize functional capacity and exercise tolerance",
      "Peripheral arterial disease with intermittent claudication limiting walking",
      "Post-cardiac device implant (pacemaker, defibrillator, resynchronization)",
      "Adult congenital heart disease with functional limitation"
    ],
    "tecnicasEs": "La rehabilitación cardíaca se estructura en tres fases. La Fase I (intrahospitalaria) se inicia durante la hospitalización con movilización precoz progresiva desde la sedestación al borde de la cama hasta la deambulación por el pasillo, con monitorización electrocardiográfica continua y control de respuesta hemodinámica. La educación del paciente y la familia sobre la enfermedad, los medicamentos y los signos de alarma es fundamental en esta fase. La Fase II (ambulatoria supervisada, 4-12 semanas) constituye el núcleo del programa e incluye ejercicio aeróbico continuo o intervalado en cicloergómetro, cinta rodante y ergómetro de brazos, con una frecuencia de 3-5 sesiones semanales de 30-60 minutos, supervisadas con monitorización electrocardiográfica. La intensidad se prescribe individualmente basándose en la prueba de esfuerzo cardiopulmonar (CPET), utilizando la frecuencia cardíaca de reserva (método de Karvonen), la escala de esfuerzo percibido de Borg (12-14 en escala de 6-20) o el umbral ventilatorio. Se incorpora entrenamiento de fuerza muscular con cargas del 40-60% de 1RM, 2-3 series de 10-15 repeticiones para los principales grupos musculares. La Fase III (mantenimiento comunitario) es un programa autodirigido de ejercicio regular con revisiones periódicas, enfocado en mantener los hábitos de vida saludable a largo plazo. Se complementa con sesiones grupales de educación nutricional (dieta mediterránea, reducción de sodio y grasas saturadas), consejería para cesación tabáquica, técnicas de manejo del estrés (relajación progresiva, mindfulness) y apoyo psicológico.",
    "tecnicasEn": "Cardiac rehabilitation is structured in three phases. Phase I (inpatient) begins during hospitalization with early progressive mobilization from sitting at the edge of the bed to hallway ambulation, with continuous electrocardiographic monitoring and hemodynamic response control. Patient and family education about the disease, medications, and warning signs is fundamental in this phase. Phase II (supervised outpatient, 4-12 weeks) constitutes the core of the program and includes continuous or interval aerobic exercise on cycle ergometer, treadmill, and arm ergometer, with a frequency of 3-5 sessions per week of 30-60 minutes, supervised with electrocardiographic monitoring. Intensity is individually prescribed based on the cardiopulmonary exercise test (CPET), using heart rate reserve (Karvonen method), the Borg rating of perceived exertion scale (12-14 on the 6-20 scale), or ventilatory threshold. Muscular strength training is incorporated with loads of 40-60% of 1RM, 2-3 sets of 10-15 repetitions for major muscle groups. Phase III (community maintenance) is a self-directed program of regular exercise with periodic reviews, focused on maintaining long-term healthy lifestyle habits. It is complemented with group sessions on nutritional education (Mediterranean diet, sodium and saturated fat reduction), smoking cessation counseling, stress management techniques (progressive relaxation, mindfulness), and psychological support.",
    "beneficiosEs": [
      "Reducción del 20-30% en la mortalidad cardiovascular y del 25% en hospitalizaciones recurrentes",
      "Aumento de la capacidad funcional medida por consumo máximo de oxígeno (VO2max) en un 15-25%",
      "Mejora del control de factores de riesgo: presión arterial, perfil lipídico, glucemia y peso corporal",
      "Reducción significativa de la angina de pecho y mejora de la tolerancia al esfuerzo",
      "Mejora de la función endotelial y reducción de la inflamación vascular sistémica",
      "Disminución de la ansiedad y depresión post-evento cardíaco con mejora de la calidad de vida",
      "Aumento de la adherencia al tratamiento farmacológico y a los hábitos de vida saludable",
      "Retorno más rápido y seguro a las actividades laborales, recreativas y sexuales"
    ],
    "beneficiosEn": [
      "20-30% reduction in cardiovascular mortality and 25% reduction in recurrent hospitalizations",
      "Increase in functional capacity measured by maximal oxygen consumption (VO2max) by 15-25%",
      "Improvement in risk factor control: blood pressure, lipid profile, blood glucose, and body weight",
      "Significant reduction in angina pectoris and improvement in exercise tolerance",
      "Improvement of endothelial function and reduction of systemic vascular inflammation",
      "Decrease in anxiety and depression post-cardiac event with improved quality of life",
      "Increased adherence to pharmacological treatment and healthy lifestyle habits",
      "Faster and safer return to work, recreational, and sexual activities"
    ],
    "duracionEs": "La Fase I dura de 3 a 14 días durante la hospitalización. La Fase II comprende 36 sesiones supervisadas distribuidas en 12 semanas (3 sesiones por semana) como programa estándar, aunque algunos pacientes de alto riesgo pueden beneficiarse de programas extendidos de hasta 36 semanas. Cada sesión incluye 10 minutos de calentamiento, 30-45 minutos de ejercicio aeróbico, 15-20 minutos de fortalecimiento y 10 minutos de enfriamiento y estiramientos. La Fase III es un programa de mantenimiento de por vida con ejercicio regular de 150-300 minutos semanales de actividad aeróbica moderada o 75-150 minutos de intensidad vigorosa, más 2-3 sesiones de fortalecimiento muscular por semana. Las revisiones cardiológicas periódicas se realizan cada 3-6 meses durante el primer año y anualmente posteriormente.",
    "duracionEn": "Phase I lasts 3 to 14 days during hospitalization. Phase II comprises 36 supervised sessions distributed over 12 weeks (3 sessions per week) as a standard program, although some high-risk patients may benefit from extended programs of up to 36 weeks. Each session includes 10 minutes of warm-up, 30-45 minutes of aerobic exercise, 15-20 minutes of strengthening, and 10 minutes of cool-down and stretching. Phase III is a lifelong maintenance program with regular exercise of 150-300 minutes per week of moderate aerobic activity or 75-150 minutes of vigorous intensity, plus 2-3 muscle strengthening sessions per week. Periodic cardiological reviews are performed every 3-6 months during the first year and annually thereafter.",
    "contraindicacionesEs": [
      "Angina inestable no controlada o síndrome coronario agudo activo",
      "Insuficiencia cardíaca descompensada clase IV de la NYHA con disnea de reposo",
      "Arritmias ventriculares malignas no controladas (taquicardia ventricular sostenida, fibrilación ventricular)",
      "Estenosis aórtica severa sintomática no intervenida con gradiente medio >40 mmHg",
      "Miocarditis o pericarditis aguda activa con elevación de troponinas y cambios electrocardiográficos",
      "Tromboembolismo pulmonar agudo o trombosis venosa profunda reciente (menos de 3 meses)",
      "Hipertensión arterial no controlada (sistólica >180 mmHg o diastólica >110 mmHg en reposo)",
      "Disección aórtica aguda o aneurisma aórtico sintomático"
    ],
    "contraindicacionesEn": [
      "Uncontrolled unstable angina or active acute coronary syndrome",
      "Decompensated NYHA class IV heart failure with dyspnea at rest",
      "Uncontrolled malignant ventricular arrhythmias (sustained ventricular tachycardia, ventricular fibrillation)",
      "Symptomatic severe aortic stenosis not intervened with mean gradient >40 mmHg",
      "Active acute myocarditis or pericarditis with troponin elevation and electrocardiographic changes",
      "Acute pulmonary thromboembolism or recent deep vein thrombosis (less than 3 months)",
      "Uncontrolled arterial hypertension (systolic >180 mmHg or diastolic >110 mmHg at rest)",
      "Acute aortic dissection or symptomatic aortic aneurysm"
    ],
    "resultadosEsperadosEs": "Los pacientes que completan el programa de rehabilitación cardíaca experimentan una mejora promedio del 15-25% en la capacidad aeróbica (VO2max), lo que se traduce en mayor tolerancia al esfuerzo y mejor calidad de vida. La mortalidad cardiovascular se reduce en un 20-30% y la mortalidad por todas las causas en un 13-24% comparado con los pacientes que no participan en rehabilitación. Las hospitalizaciones recurrentes por causa cardíaca disminuyen en un 25-31%. Más del 80% de los pacientes que completan la Fase II retornan a sus actividades laborales previas dentro de los primeros 2-3 meses. La adherencia a las recomendaciones de estilo de vida saludable es significativamente mayor en los participantes de rehabilitación cardíaca. Los beneficios son máximos cuando se completa el programa completo y se mantiene el ejercicio regular a largo plazo en la Fase III.",
    "resultadosEsperadosEn": "Patients who complete the cardiac rehabilitation program experience an average improvement of 15-25% in aerobic capacity (VO2max), translating to greater exercise tolerance and better quality of life. Cardiovascular mortality is reduced by 20-30% and all-cause mortality by 13-24% compared to patients who do not participate in rehabilitation. Recurrent cardiac hospitalizations decrease by 25-31%. More than 80% of patients completing Phase II return to their previous work activities within the first 2-3 months. Adherence to healthy lifestyle recommendations is significantly higher in cardiac rehabilitation participants. Benefits are maximal when the full program is completed and regular exercise is maintained long-term in Phase III.",
    "cuandoConsultarEs": "Solicite valoración cardiológica urgente si durante el programa de ejercicio experimenta dolor torácico opresivo, disnea desproporcionada al esfuerzo, palpitaciones irregulares sostenidas, mareo o síncope, ya que estos síntomas pueden indicar isquemia miocárdica, arritmia o descompensación cardíaca. Consulte con su equipo de rehabilitación si nota disminución progresiva de la tolerancia al ejercicio en lugar de mejoría, si presenta edema de miembros inferiores nuevo o progresivo, aumento de peso inexplicado de más de 2 kg en una semana (que puede indicar retención de líquidos por insuficiencia cardíaca), o si experimenta efectos secundarios de los medicamentos que limitan su participación en el programa.",
    "cuandoConsultarEn": "Seek urgent cardiological evaluation if during the exercise program you experience oppressive chest pain, dyspnea disproportionate to exertion, sustained irregular palpitations, dizziness, or syncope, as these symptoms may indicate myocardial ischemia, arrhythmia, or cardiac decompensation. Consult your rehabilitation team if you notice progressive decrease in exercise tolerance instead of improvement, if you present new or progressive lower extremity edema, unexplained weight gain of more than 2 kg in one week (which may indicate fluid retention from heart failure), or if you experience medication side effects limiting your program participation."
  },
  {
    "id": "terapia-ocupacional",
    "nombreEs": "Terapia Ocupacional",
    "nombreEn": "Occupational Therapy",
    "descripcionEs": "La terapia ocupacional es una disciplina de las ciencias de la salud que se centra en promover la salud y el bienestar a través de la ocupación, entendida como todas las actividades significativas que las personas realizan en su vida cotidiana. El objetivo principal es capacitar a las personas para participar en las actividades de la vida diaria que desean y necesitan realizar, mediante la adaptación de la actividad, la modificación del entorno, el entrenamiento de habilidades compensatorias y la prescripción de tecnología asistiva. La terapia ocupacional abarca las actividades básicas de la vida diaria (ABVD) como alimentación, vestido, higiene y movilidad funcional, las actividades instrumentales de la vida diaria (AIVD) como cocinar, manejar finanzas, usar transporte y gestionar medicamentos, así como las actividades productivas (trabajo, educación) y de ocio. El terapeuta ocupacional utiliza un enfoque centrado en el cliente, realizando una evaluación funcional exhaustiva que incluye el análisis de las capacidades motoras, cognitivas, sensoriales y psicosociales del paciente, las demandas de las actividades que desea realizar y las características del entorno físico y social. Las intervenciones se basan en marcos teóricos como el Modelo de Ocupación Humana (MOHO), el Marco de Trabajo de la AOTA y el enfoque biomecánico o de rehabilitación.",
    "descripcionEn": "Occupational therapy is a health science discipline that focuses on promoting health and well-being through occupation, understood as all meaningful activities that people perform in their daily lives. The primary goal is to enable people to participate in the activities of daily living they want and need to perform, through activity adaptation, environmental modification, compensatory skill training, and assistive technology prescription. Occupational therapy encompasses basic activities of daily living (BADLs) such as feeding, dressing, hygiene, and functional mobility, instrumental activities of daily living (IADLs) such as cooking, managing finances, using transportation, and managing medications, as well as productive (work, education) and leisure activities. The occupational therapist uses a client-centered approach, performing a comprehensive functional assessment that includes analysis of the patient's motor, cognitive, sensory, and psychosocial capabilities, the demands of the activities they wish to perform, and the characteristics of the physical and social environment. Interventions are based on theoretical frameworks such as the Model of Human Occupation (MOHO), the AOTA Practice Framework, and the biomechanical or rehabilitation approach.",
    "categoriaEs": "Funcional",
    "categoriaEn": "Functional",
    "indicacionesEs": [
      "Déficit funcional tras accidente cerebrovascular con dificultad en actividades de autocuidado",
      "Lesiones traumáticas de mano y miembro superior que limitan la prensión y la manipulación fina",
      "Artritis reumatoide u osteoartritis con limitación funcional y dolor articular que impide las actividades cotidianas",
      "Lesión medular con necesidad de entrenamiento en actividades de la vida diaria adaptadas al nivel de lesión",
      "Trastornos del neurodesarrollo en niños (parálisis cerebral, trastorno del espectro autista, trastorno del procesamiento sensorial)",
      "Deterioro cognitivo leve a moderado o demencia con pérdida progresiva de autonomía funcional",
      "Trastornos de salud mental (depresión, esquizofrenia, trastorno bipolar) con disfunción ocupacional",
      "Quemaduras extensas con contracturas cicatriciales que limitan el rango de movimiento y la función",
      "Enfermedades neurodegenerativas (Parkinson, esclerosis múltiple, ELA) con declive funcional progresivo",
      "Necesidad de adaptación del hogar y prescripción de ayudas técnicas para personas con discapacidad o adultos mayores"
    ],
    "indicacionesEn": [
      "Functional deficit after stroke with difficulty in self-care activities",
      "Traumatic injuries of hand and upper extremity limiting grasp and fine manipulation",
      "Rheumatoid arthritis or osteoarthritis with functional limitation and joint pain preventing daily activities",
      "Spinal cord injury with need for activities of daily living training adapted to injury level",
      "Neurodevelopmental disorders in children (cerebral palsy, autism spectrum disorder, sensory processing disorder)",
      "Mild to moderate cognitive impairment or dementia with progressive loss of functional autonomy",
      "Mental health disorders (depression, schizophrenia, bipolar disorder) with occupational dysfunction",
      "Extensive burns with scar contractures limiting range of motion and function",
      "Neurodegenerative diseases (Parkinson's, multiple sclerosis, ALS) with progressive functional decline",
      "Need for home adaptation and assistive device prescription for persons with disabilities or older adults"
    ],
    "tecnicasEs": "La terapia ocupacional emplea una amplia variedad de técnicas adaptadas a las necesidades individuales del paciente. La evaluación funcional estandarizada utiliza instrumentos como la Medida de Independencia Funcional (FIM), el Índice de Barthel, la Evaluación Canadiense del Desempeño Ocupacional (COPM) y la evaluación de la función de la mano mediante dinamometría, pruebas de destreza (Nine-Hole Peg Test, Box and Blocks) y goniometría. Las técnicas de entrenamiento en actividades de la vida diaria incluyen la práctica directa de tareas con gradación de complejidad, el uso de estrategias compensatorias (técnica de vestido unilateral para hemipléjicos, uso de una sola mano para la alimentación) y el entrenamiento con ayudas técnicas adaptadas (cubiertos engrosados, tablas de transferencia, asientos elevados de inodoro, barras de apoyo). La rehabilitación de la mano incluye ejercicios de rango de movimiento activo y pasivo, fortalecimiento con masilla terapéutica y pinzas graduadas, desensibilización de cicatrices, confección de férulas estáticas y dinámicas, y entrenamiento de la coordinación fina. La modificación del entorno domiciliario incluye la evaluación de accesibilidad, la recomendación de adaptaciones arquitectónicas (rampas, ensanchamiento de puertas, duchas accesibles) y la instalación de tecnología domótica para personas con discapacidad severa. La terapia de integración sensorial se aplica en niños con trastornos del procesamiento sensorial mediante actividades que proporcionan estímulos vestibulares, propioceptivos y táctiles controlados. La rehabilitación cognitiva incluye entrenamiento en atención, memoria, planificación y resolución de problemas aplicado a contextos funcionales reales.",
    "tecnicasEn": "Occupational therapy employs a wide variety of techniques adapted to individual patient needs. Standardized functional assessment uses instruments such as the Functional Independence Measure (FIM), the Barthel Index, the Canadian Occupational Performance Measure (COPM), and hand function assessment through dynamometry, dexterity tests (Nine-Hole Peg Test, Box and Blocks), and goniometry. Activities of daily living training techniques include direct task practice with complexity grading, use of compensatory strategies (one-handed dressing technique for hemiplegics, single-hand feeding), and training with adapted assistive devices (built-up utensils, transfer boards, raised toilet seats, grab bars). Hand rehabilitation includes active and passive range of motion exercises, strengthening with therapeutic putty and graded pinch exercises, scar desensitization, static and dynamic splint fabrication, and fine coordination training. Home environment modification includes accessibility assessment, recommendation of architectural adaptations (ramps, door widening, accessible showers), and installation of smart home technology for persons with severe disability. Sensory integration therapy is applied in children with sensory processing disorders through activities providing controlled vestibular, proprioceptive, and tactile stimuli. Cognitive rehabilitation includes attention, memory, planning, and problem-solving training applied to real functional contexts.",
    "beneficiosEs": [
      "Restauración o mejora de la independencia en actividades básicas e instrumentales de la vida diaria",
      "Prevención de la pérdida funcional progresiva en enfermedades crónicas y neurodegenerativas",
      "Reducción de la necesidad de asistencia de terceros y la carga sobre los cuidadores familiares",
      "Mejora de la participación social, laboral y recreativa y de la calidad de vida percibida",
      "Adaptación efectiva del entorno domiciliario y laboral para facilitar la accesibilidad y seguridad",
      "Recuperación funcional de la mano y el miembro superior tras lesiones traumáticas o quirúrgicas",
      "Mejora del desarrollo motor, sensorial y cognitivo en niños con trastornos del neurodesarrollo",
      "Prevención de caídas en personas mayores mediante modificación ambiental y entrenamiento funcional"
    ],
    "beneficiosEn": [
      "Restoration or improvement of independence in basic and instrumental activities of daily living",
      "Prevention of progressive functional loss in chronic and neurodegenerative diseases",
      "Reduction of need for third-party assistance and burden on family caregivers",
      "Improvement of social, work, and recreational participation and perceived quality of life",
      "Effective adaptation of home and work environment to facilitate accessibility and safety",
      "Functional recovery of hand and upper extremity after traumatic or surgical injuries",
      "Improvement of motor, sensory, and cognitive development in children with neurodevelopmental disorders",
      "Fall prevention in older adults through environmental modification and functional training"
    ],
    "duracionEs": "La duración de la terapia ocupacional varía ampliamente según el diagnóstico y los objetivos funcionales. Para la rehabilitación post-ACV, las sesiones son de 45-60 minutos, 3-5 veces por semana durante 3-6 meses en la fase subaguda, continuando con sesiones de 1-2 veces por semana durante 6-12 meses adicionales. Para la rehabilitación de la mano tras cirugía, el tratamiento suele durar de 6 a 12 semanas con sesiones de 2-3 veces por semana. En niños con trastornos del neurodesarrollo, la terapia puede extenderse durante años con frecuencia de 1-3 sesiones semanales. Para la adaptación domiciliaria y prescripción de ayudas técnicas, se realizan típicamente 1-3 visitas de evaluación seguidas de sesiones de entrenamiento específicas. En pacientes con enfermedades neurodegenerativas, la terapia es continua con ajustes periódicos según la progresión de la enfermedad.",
    "duracionEn": "The duration of occupational therapy varies widely according to diagnosis and functional goals. For post-stroke rehabilitation, sessions are 45-60 minutes, 3-5 times per week for 3-6 months in the subacute phase, continuing with sessions 1-2 times per week for an additional 6-12 months. For hand rehabilitation after surgery, treatment usually lasts 6 to 12 weeks with sessions 2-3 times per week. In children with neurodevelopmental disorders, therapy may extend for years with a frequency of 1-3 sessions per week. For home adaptation and assistive device prescription, typically 1-3 evaluation visits are performed followed by specific training sessions. In patients with neurodegenerative diseases, therapy is continuous with periodic adjustments according to disease progression.",
    "contraindicacionesEs": [
      "Inestabilidad médica aguda que impide la participación en actividades terapéuticas",
      "Fracturas no estabilizadas o restricciones de carga de peso en las extremidades evaluadas",
      "Heridas quirúrgicas abiertas en la mano o miembro superior que requieren cicatrización antes de la movilización activa",
      "Infección activa en las articulaciones o tejidos blandos de las áreas a tratar",
      "Estado de conciencia alterado con incapacidad para seguir instrucciones básicas",
      "Rechazo voluntario e informado del paciente a participar en el programa terapéutico"
    ],
    "contraindicacionesEn": [
      "Acute medical instability preventing participation in therapeutic activities",
      "Non-stabilized fractures or weight-bearing restrictions on the evaluated extremities",
      "Open surgical wounds on the hand or upper extremity requiring healing before active mobilization",
      "Active infection in the joints or soft tissues of the areas to be treated",
      "Altered level of consciousness with inability to follow basic instructions",
      "Voluntary and informed patient refusal to participate in the therapeutic program"
    ],
    "resultadosEsperadosEs": "La evidencia demuestra que la terapia ocupacional mejora significativamente la independencia funcional en pacientes con diversas condiciones. Tras un ACV, los pacientes que reciben terapia ocupacional intensiva muestran una mejora del 20-30% en las puntuaciones del Índice de Barthel y la FIM en comparación con los controles. En la rehabilitación de la mano, más del 85% de los pacientes recuperan una función prensil funcional tras cirugía de reparación tendinosa con programa de rehabilitación supervisado. La adaptación domiciliaria reduce el riesgo de caídas en personas mayores en un 30-40% y retrasa la institucionalización. En niños con parálisis cerebral, la terapia ocupacional intensiva mejora las habilidades de autocuidado y manipulación fina medidas por la PEDI (Pediatric Evaluation of Disability Inventory). La satisfacción del paciente con la terapia ocupacional es consistentemente alta (>85%) en las encuestas de calidad.",
    "resultadosEsperadosEn": "Evidence demonstrates that occupational therapy significantly improves functional independence in patients with various conditions. After stroke, patients receiving intensive occupational therapy show a 20-30% improvement in Barthel Index and FIM scores compared to controls. In hand rehabilitation, more than 85% of patients recover functional grasp after tendon repair surgery with a supervised rehabilitation program. Home adaptation reduces the risk of falls in older adults by 30-40% and delays institutionalization. In children with cerebral palsy, intensive occupational therapy improves self-care and fine manipulation skills measured by the PEDI (Pediatric Evaluation of Disability Inventory). Patient satisfaction with occupational therapy is consistently high (>85%) in quality surveys.",
    "cuandoConsultarEs": "Consulte a un terapeuta ocupacional cuando observe dificultad para realizar actividades cotidianas como vestirse, bañarse, cocinar o manejar dinero, ya sea por causa neurológica, musculoesquelética o cognitiva. Solicite evaluación tras una lesión de mano o miembro superior que afecte la capacidad de prensión o manipulación. Consulte cuando un adulto mayor presente caídas frecuentes o dificultades crecientes para mantener su independencia en el domicilio. Busque evaluación para niños que muestren retrasos en el desarrollo motor fino, dificultades con la escritura, problemas de alimentación o respuestas inusuales a estímulos sensoriales. Solicite valoración para la adaptación del puesto de trabajo en caso de discapacidad que afecte el rendimiento laboral.",
    "cuandoConsultarEn": "Consult an occupational therapist when you observe difficulty performing daily activities such as dressing, bathing, cooking, or managing money, whether due to neurological, musculoskeletal, or cognitive causes. Request evaluation after a hand or upper extremity injury affecting grip or manipulation capacity. Consult when an older adult presents frequent falls or increasing difficulties maintaining independence at home. Seek evaluation for children showing delays in fine motor development, difficulties with writing, feeding problems, or unusual responses to sensory stimuli. Request evaluation for workplace adaptation in case of disability affecting work performance."
  },
  {
    "id": "electromiografia-biofeedback",
    "nombreEs": "Electromiografía y Biofeedback",
    "nombreEn": "Electromyography and Biofeedback",
    "descripcionEs": "La electromiografía (EMG) y el biofeedback electromiográfico constituyen herramientas fundamentales en la medicina física y rehabilitación, combinando funciones diagnósticas y terapéuticas. La EMG diagnóstica es una técnica neurofisiológica que registra la actividad eléctrica generada por los músculos esqueléticos mediante electrodos de aguja (EMG de aguja) o electrodos de superficie, proporcionando información crucial sobre la integridad del sistema neuromuscular. Los estudios de conducción nerviosa (ECN), frecuentemente realizados en conjunto con la EMG de aguja, miden la velocidad y amplitud de la conducción eléctrica a lo largo de los nervios periféricos, permitiendo localizar y caracterizar las lesiones nerviosas. El biofeedback electromiográfico, por su parte, es una técnica terapéutica que utiliza electrodos de superficie para captar la señal EMG y convertirla en una señal visual o auditiva en tiempo real que el paciente puede percibir, permitiéndole aprender a controlar voluntariamente la actividad muscular. Esta retroalimentación facilita tanto la activación de músculos debilitados o paralizados (biofeedback de facilitación) como la relajación de músculos espásticos o hipertónicos (biofeedback de inhibición). La combinación de la EMG diagnóstica para identificar las alteraciones neuromusculares y el biofeedback como herramienta de reentrenamiento motor representa un enfoque integral en el manejo de múltiples condiciones en rehabilitación.",
    "descripcionEn": "Electromyography (EMG) and electromyographic biofeedback constitute fundamental tools in physical medicine and rehabilitation, combining diagnostic and therapeutic functions. Diagnostic EMG is a neurophysiological technique that records the electrical activity generated by skeletal muscles using needle electrodes (needle EMG) or surface electrodes, providing crucial information about the integrity of the neuromuscular system. Nerve conduction studies (NCS), frequently performed in conjunction with needle EMG, measure the speed and amplitude of electrical conduction along peripheral nerves, allowing localization and characterization of nerve lesions. Electromyographic biofeedback, on the other hand, is a therapeutic technique that uses surface electrodes to capture the EMG signal and convert it into a real-time visual or auditory signal that the patient can perceive, allowing them to learn to voluntarily control muscle activity. This feedback facilitates both activation of weakened or paralyzed muscles (facilitation biofeedback) and relaxation of spastic or hypertonic muscles (inhibition biofeedback). The combination of diagnostic EMG to identify neuromuscular alterations and biofeedback as a motor retraining tool represents a comprehensive approach in the management of multiple rehabilitation conditions.",
    "categoriaEs": "Diagnóstico-terapéutico",
    "categoriaEn": "Diagnostic-therapeutic",
    "indicacionesEs": [
      "Diagnóstico y seguimiento del síndrome del túnel carpiano y otras neuropatías por atrapamiento",
      "Evaluación de radiculopatías cervicales y lumbares con correlación electrofisiológica",
      "Diagnóstico diferencial de enfermedades de motoneurona (ELA) frente a otras neuropatías",
      "Evaluación de polineuropatías diabéticas, alcohólicas, inflamatorias (Guillain-Barré, CIDP) y hereditarias",
      "Diagnóstico de miopatías inflamatorias (polimiositis, dermatomiositis) y distróficas",
      "Evaluación de lesiones del plexo braquial traumáticas o perinatales",
      "Biofeedback para la reeducación del suelo pélvico en incontinencia urinaria y fecal",
      "Biofeedback para la recuperación de la dorsiflexión del pie tras lesión del nervio peroneo",
      "Reentrenamiento muscular post-quirúrgico mediante biofeedback de facilitación del cuádriceps o glúteos",
      "Biofeedback de relajación para cefalea tensional, bruxismo y dolor miofascial cervical"
    ],
    "indicacionesEn": [
      "Diagnosis and follow-up of carpal tunnel syndrome and other entrapment neuropathies",
      "Evaluation of cervical and lumbar radiculopathies with electrophysiological correlation",
      "Differential diagnosis of motor neuron diseases (ALS) versus other neuropathies",
      "Evaluation of diabetic, alcoholic, inflammatory (Guillain-Barré, CIDP), and hereditary polyneuropathies",
      "Diagnosis of inflammatory myopathies (polymyositis, dermatomyositis) and dystrophic myopathies",
      "Evaluation of traumatic or perinatal brachial plexus injuries",
      "Biofeedback for pelvic floor reeducation in urinary and fecal incontinence",
      "Biofeedback for foot dorsiflexion recovery after peroneal nerve injury",
      "Post-surgical muscle retraining through facilitation biofeedback for quadriceps or gluteal muscles",
      "Relaxation biofeedback for tension headache, bruxism, and cervical myofascial pain"
    ],
    "tecnicasEs": "La EMG diagnóstica con aguja se realiza insertando un electrodo concéntrico de aguja fina directamente en el músculo para registrar la actividad eléctrica en reposo (buscando potenciales de fibrilación y ondas positivas agudas que indican denervación activa), durante la contracción mínima (analizando la morfología de los potenciales de unidad motora: duración, amplitud y polifasia) y durante la contracción máxima (evaluando el patrón de reclutamiento). Los estudios de conducción nerviosa motora se realizan estimulando el nervio en varios puntos a lo largo de su recorrido y registrando la respuesta muscular (potencial de acción muscular compuesto, CMAP), calculando la latencia distal, la velocidad de conducción y la amplitud. La conducción nerviosa sensitiva mide el potencial de acción nervioso sensitivo (SNAP) para evaluar las fibras aferentes. Las pruebas especiales incluyen las ondas F y el reflejo H para evaluar los segmentos proximales del nervio y las raíces. El biofeedback electromiográfico de superficie utiliza electrodos adhesivos colocados sobre el músculo objetivo para captar la señal EMG que se muestra al paciente en una pantalla como un gráfico de barras, una línea de tendencia o un juego interactivo. Para la facilitación muscular, se establece un umbral objetivo que el paciente debe superar, incrementándolo progresivamente a medida que la fuerza muscular mejora. Para la relajación muscular, el objetivo es reducir la actividad EMG por debajo de un umbral determinado. El biofeedback del suelo pélvico utiliza sondas intravaginales o intrarrectales con electrodos de superficie para el entrenamiento de los músculos elevadores del ano.",
    "tecnicasEn": "Diagnostic needle EMG is performed by inserting a fine concentric needle electrode directly into the muscle to record electrical activity at rest (searching for fibrillation potentials and positive sharp waves indicating active denervation), during minimal contraction (analyzing motor unit potential morphology: duration, amplitude, and polyphasia), and during maximal contraction (evaluating the recruitment pattern). Motor nerve conduction studies are performed by stimulating the nerve at various points along its course and recording the muscle response (compound muscle action potential, CMAP), calculating distal latency, conduction velocity, and amplitude. Sensory nerve conduction measures the sensory nerve action potential (SNAP) to assess afferent fibers. Special tests include F-waves and H-reflex to evaluate proximal nerve segments and roots. Surface electromyographic biofeedback uses adhesive electrodes placed over the target muscle to capture the EMG signal displayed to the patient on a screen as a bar graph, trend line, or interactive game. For muscle facilitation, a target threshold is set that the patient must exceed, progressively increasing it as muscle strength improves. For muscle relaxation, the goal is to reduce EMG activity below a set threshold. Pelvic floor biofeedback uses intravaginal or intrarectal probes with surface electrodes for levator ani muscle training.",
    "beneficiosEs": [
      "Diagnóstico preciso y localización topográfica de lesiones nerviosas periféricas y musculares",
      "Diferenciación electrodiagnóstica entre neuropatías axonales y desmielinizantes para guiar el tratamiento",
      "Determinación del pronóstico de recuperación en lesiones nerviosas basado en hallazgos de reinervación",
      "Retroalimentación visual o auditiva inmediata que acelera el aprendizaje motor en la rehabilitación",
      "Activación selectiva de músculos específicos evitando patrones de sustitución muscular compensatoria",
      "Mejora objetiva y cuantificable de la fuerza muscular y el control motor con registro documentado del progreso",
      "Reducción significativa de los síntomas de incontinencia urinaria mediante biofeedback del suelo pélvico",
      "Disminución del dolor y la tensión muscular en síndromes dolorosos crónicos mediante biofeedback de relajación"
    ],
    "beneficiosEn": [
      "Precise diagnosis and topographic localization of peripheral nerve and muscle lesions",
      "Electrodiagnostic differentiation between axonal and demyelinating neuropathies to guide treatment",
      "Determination of recovery prognosis in nerve injuries based on reinnervation findings",
      "Immediate visual or auditory feedback that accelerates motor learning in rehabilitation",
      "Selective activation of specific muscles avoiding compensatory muscle substitution patterns",
      "Objective and quantifiable improvement of muscle strength and motor control with documented progress",
      "Significant reduction of urinary incontinence symptoms through pelvic floor biofeedback",
      "Decrease in pain and muscle tension in chronic pain syndromes through relaxation biofeedback"
    ],
    "duracionEs": "El estudio de EMG diagnóstica y conducción nerviosa se realiza en una sesión única de 30-60 minutos dependiendo del número de nervios y músculos evaluados. Los resultados preliminares se comunican inmediatamente y el informe completo se elabora en 24-48 horas. Los programas de biofeedback terapéutico consisten típicamente en 8-16 sesiones de 30-45 minutos, realizadas 2-3 veces por semana durante 4-8 semanas. El biofeedback del suelo pélvico puede requerir 6-12 sesiones con práctica domiciliaria complementaria de ejercicios de Kegel. Se recomienda un seguimiento electromiográfico a las 4-8 semanas tras el estudio inicial en lesiones nerviosas agudas para evaluar signos de reinervación o degeneración progresiva. Los estudios de control se repiten cada 3-6 meses en neuropatías crónicas o progresivas.",
    "duracionEn": "The diagnostic EMG and nerve conduction study is performed in a single session of 30-60 minutes depending on the number of nerves and muscles evaluated. Preliminary results are communicated immediately and the complete report is prepared within 24-48 hours. Therapeutic biofeedback programs typically consist of 8-16 sessions of 30-45 minutes, performed 2-3 times per week for 4-8 weeks. Pelvic floor biofeedback may require 6-12 sessions with complementary home practice of Kegel exercises. Electromyographic follow-up at 4-8 weeks after the initial study is recommended in acute nerve injuries to evaluate signs of reinnervation or progressive degeneration. Follow-up studies are repeated every 3-6 months in chronic or progressive neuropathies.",
    "contraindicacionesEs": [
      "Anticoagulación con INR supraterapéutico (>3.0) para EMG de aguja por riesgo de hematoma muscular (contraindicación relativa)",
      "Linfedema severo de la extremidad a examinar que dificulta la inserción de la aguja y la obtención de señales fiables",
      "Infección cutánea activa en el sitio de inserción de los electrodos de aguja o superficie",
      "Presencia de marcapasos cardíaco o desfibrilador implantable (contraindicación relativa para estimulación eléctrica cercana al dispositivo)",
      "Hemofilia u otros trastornos severos de la coagulación sin cobertura de factor para EMG de aguja",
      "Fobia extrema a las agujas no controlable con medidas de confort estándar (para EMG de aguja)"
    ],
    "contraindicacionesEn": [
      "Anticoagulation with supratherapeutic INR (>3.0) for needle EMG due to risk of muscle hematoma (relative contraindication)",
      "Severe lymphedema of the extremity to be examined making needle insertion and reliable signal acquisition difficult",
      "Active skin infection at the needle or surface electrode insertion site",
      "Presence of cardiac pacemaker or implantable defibrillator (relative contraindication for electrical stimulation near the device)",
      "Hemophilia or other severe coagulation disorders without factor coverage for needle EMG",
      "Extreme needle phobia not manageable with standard comfort measures (for needle EMG)"
    ],
    "resultadosEsperadosEs": "La EMG diagnóstica tiene una sensibilidad del 85-90% y especificidad del 90-95% para el diagnóstico del síndrome del túnel carpiano, siendo el estándar de referencia electrodiagnóstico. En la evaluación de radiculopatías, la EMG de aguja tiene una sensibilidad del 50-70% pero alta especificidad (>90%) para confirmar la denervación activa. El biofeedback del suelo pélvico logra una mejora del 60-80% en los síntomas de incontinencia urinaria de esfuerzo, comparable a los resultados del entrenamiento supervisado del suelo pélvico. El biofeedback de facilitación muscular post-quirúrgico acelera la recuperación de la fuerza del cuádriceps en un 20-30% comparado con el ejercicio convencional solo. El biofeedback de relajación reduce la frecuencia e intensidad de la cefalea tensional en un 40-60% de los pacientes.",
    "resultadosEsperadosEn": "Diagnostic EMG has a sensitivity of 85-90% and specificity of 90-95% for carpal tunnel syndrome diagnosis, being the electrodiagnostic reference standard. In radiculopathy evaluation, needle EMG has a sensitivity of 50-70% but high specificity (>90%) for confirming active denervation. Pelvic floor biofeedback achieves a 60-80% improvement in stress urinary incontinence symptoms, comparable to supervised pelvic floor training results. Post-surgical muscle facilitation biofeedback accelerates quadriceps strength recovery by 20-30% compared to conventional exercise alone. Relaxation biofeedback reduces tension headache frequency and intensity in 40-60% of patients.",
    "cuandoConsultarEs": "Solicite un estudio electromiográfico cuando presente entumecimiento, hormigueo o debilidad persistente en las extremidades que sugiera neuropatía periférica o radiculopatía. Consulte ante debilidad muscular progresiva inexplicada que podría indicar una enfermedad de motoneurona o miopatía. Solicite evaluación si tiene síndrome del túnel carpiano clínico que no responde al tratamiento conservador para confirmar el diagnóstico y la severidad antes de considerar cirugía. Pregunte sobre biofeedback si presenta incontinencia urinaria de esfuerzo, si tiene dificultad para activar músculos específicos durante la rehabilitación post-quirúrgica, o si sufre dolor crónico muscular o cefalea tensional refractaria al tratamiento farmacológico.",
    "cuandoConsultarEn": "Request an electromyographic study when you experience persistent numbness, tingling, or weakness in the extremities suggesting peripheral neuropathy or radiculopathy. Consult for unexplained progressive muscle weakness that could indicate motor neuron disease or myopathy. Request evaluation if you have clinical carpal tunnel syndrome not responding to conservative treatment to confirm the diagnosis and severity before considering surgery. Ask about biofeedback if you have stress urinary incontinence, if you have difficulty activating specific muscles during post-surgical rehabilitation, or if you suffer from chronic muscle pain or tension headache refractory to pharmacological treatment."
  },
  {
    "id": "rehabilitacion-pulmonar",
    "nombreEs": "Rehabilitación Pulmonar",
    "nombreEn": "Pulmonary Rehabilitation",
    "descripcionEs": "La rehabilitación pulmonar es una intervención integral basada en la evidencia dirigida a pacientes con enfermedades respiratorias crónicas que presentan síntomas persistentes y limitación funcional a pesar del tratamiento farmacológico óptimo. Según la definición de la American Thoracic Society (ATS) y la European Respiratory Society (ERS), incluye ejercicio físico estructurado, educación del paciente, intervención nutricional, apoyo psicosocial y técnicas de autogestión de la enfermedad. La EPOC (enfermedad pulmonar obstructiva crónica) es la indicación más frecuente y estudiada, pero los beneficios se extienden a la fibrosis pulmonar, las bronquiectasias, el asma severa, la hipertensión pulmonar, la enfermedad pulmonar intersticial y la preparación y recuperación pre y post-trasplante pulmonar. Los mecanismos de beneficio del ejercicio en pacientes respiratorios son múltiples: mejora la eficiencia del músculo esquelético periférico (revirtiendo la miopatía por desuso y los efectos catabólicos de los corticosteroides sistémicos), aumenta la capacidad oxidativa mitocondrial, reduce la demanda ventilatoria para un nivel dado de trabajo, mejora la tolerancia a la disnea y reduce la ansiedad asociada a la sensación de falta de aire. La evidencia actual le otorga un nivel de recomendación 1A para la EPOC, siendo una de las intervenciones con mejor relación coste-efectividad en neumología.",
    "descripcionEn": "Pulmonary rehabilitation is a comprehensive evidence-based intervention directed at patients with chronic respiratory diseases who present persistent symptoms and functional limitation despite optimal pharmacological treatment. According to the American Thoracic Society (ATS) and European Respiratory Society (ERS) definition, it includes structured physical exercise, patient education, nutritional intervention, psychosocial support, and disease self-management techniques. COPD (chronic obstructive pulmonary disease) is the most frequent and studied indication, but benefits extend to pulmonary fibrosis, bronchiectasis, severe asthma, pulmonary hypertension, interstitial lung disease, and pre- and post-lung transplant preparation and recovery. The mechanisms of exercise benefit in respiratory patients are multiple: it improves peripheral skeletal muscle efficiency (reversing disuse myopathy and catabolic effects of systemic corticosteroids), increases mitochondrial oxidative capacity, reduces ventilatory demand for a given level of work, improves dyspnea tolerance, and reduces anxiety associated with the sensation of breathlessness. Current evidence assigns it a level 1A recommendation for COPD, being one of the most cost-effective interventions in pulmonology.",
    "categoriaEs": "Cardiopulmonar",
    "categoriaEn": "Cardiopulmonary",
    "indicacionesEs": [
      "EPOC estable (GOLD B, C o D) con disnea persistente y limitación funcional pese a tratamiento inhalatorio óptimo",
      "Fibrosis pulmonar idiopática u otras enfermedades pulmonares intersticiales con disnea de esfuerzo progresiva",
      "Bronquiectasias con producción crónica de esputo, infecciones recurrentes y limitación al ejercicio",
      "Asma severa con disnea crónica, descondicionamiento físico y exacerbaciones frecuentes",
      "Hipertensión pulmonar estable (grupo 1-4) con limitación funcional clase II-III de la OMS",
      "Pre y post-trasplante pulmonar para optimizar la condición física y la recuperación funcional",
      "Post-exacerbación aguda de EPOC para acelerar la recuperación y prevenir la rehospitalización",
      "Enfermedad neuromuscular con debilidad de los músculos respiratorios y tos ineficaz",
      "Cáncer de pulmón en estadios tempranos en preparación pre-quirúrgica (prehabilitación) o en recuperación post-resección",
      "Síndrome post-COVID con disnea persistente, fatiga y descondicionamiento físico"
    ],
    "indicacionesEn": [
      "Stable COPD (GOLD B, C, or D) with persistent dyspnea and functional limitation despite optimal inhaler therapy",
      "Idiopathic pulmonary fibrosis or other interstitial lung diseases with progressive exertional dyspnea",
      "Bronchiectasis with chronic sputum production, recurrent infections, and exercise limitation",
      "Severe asthma with chronic dyspnea, physical deconditioning, and frequent exacerbations",
      "Stable pulmonary hypertension (group 1-4) with WHO functional class II-III limitation",
      "Pre- and post-lung transplant to optimize physical condition and functional recovery",
      "Post-acute COPD exacerbation to accelerate recovery and prevent rehospitalization",
      "Neuromuscular disease with respiratory muscle weakness and ineffective cough",
      "Early-stage lung cancer in pre-surgical preparation (prehabilitation) or post-resection recovery",
      "Post-COVID syndrome with persistent dyspnea, fatigue, and physical deconditioning"
    ],
    "tecnicasEs": "El programa de rehabilitación pulmonar incluye múltiples componentes terapéuticos. El entrenamiento aeróbico constituye el pilar fundamental, realizándose en cinta rodante, cicloergómetro de piernas y brazos o marcha en terreno, con una intensidad del 60-80% de la carga máxima obtenida en la prueba de esfuerzo incremental, durante 20-40 minutos por sesión. El entrenamiento interválico de alta intensidad es una alternativa efectiva para pacientes que no toleran el ejercicio continuo debido a la disnea severa, alternando períodos de 1-2 minutos de alta intensidad con períodos de recuperación. El entrenamiento de fuerza muscular periférica utiliza pesas, máquinas o bandas elásticas para los principales grupos musculares de miembros superiores e inferiores (cuádriceps, glúteos, bíceps, tríceps, dorsales), con 2-3 series de 8-12 repeticiones al 60-70% de 1RM. El entrenamiento de los músculos inspiratorios (TMI) con dispositivos de carga umbral o resistiva se prescribe cuando la presión inspiratoria máxima (PIM) es inferior al 60% del valor predicho, iniciando al 30% de la PIM e incrementando progresivamente. Las técnicas de fisioterapia respiratoria incluyen: respiración con labios fruncidos para reducir la hiperinsuflación dinámica, respiración diafragmática, drenaje postural, ciclo activo de técnicas respiratorias (ACBT), dispositivos de presión espiratoria positiva (PEP) y oscilación de alta frecuencia (Flutter, Acapella) para la movilización de secreciones. La educación incluye manejo de inhaladores, planes de acción para exacerbaciones, conservación de energía, técnicas de control de la disnea y nutrición adaptada.",
    "tecnicasEn": "The pulmonary rehabilitation program includes multiple therapeutic components. Aerobic training constitutes the fundamental pillar, performed on treadmill, leg and arm cycle ergometer, or ground walking, at an intensity of 60-80% of the maximum load obtained on incremental exercise testing, for 20-40 minutes per session. High-intensity interval training is an effective alternative for patients who cannot tolerate continuous exercise due to severe dyspnea, alternating 1-2 minute high-intensity periods with recovery periods. Peripheral muscle strength training uses weights, machines, or resistance bands for major muscle groups of upper and lower extremities (quadriceps, gluteals, biceps, triceps, latissimus dorsi), with 2-3 sets of 8-12 repetitions at 60-70% of 1RM. Inspiratory muscle training (IMT) with threshold or resistive load devices is prescribed when maximum inspiratory pressure (MIP) is below 60% of predicted, starting at 30% of MIP and progressively increasing. Respiratory physiotherapy techniques include: pursed-lip breathing to reduce dynamic hyperinflation, diaphragmatic breathing, postural drainage, active cycle of breathing techniques (ACBT), positive expiratory pressure (PEP) devices, and high-frequency oscillation (Flutter, Acapella) for secretion mobilization. Education includes inhaler management, exacerbation action plans, energy conservation, dyspnea control techniques, and adapted nutrition.",
    "beneficiosEs": [
      "Mejora de la capacidad de ejercicio medida por la distancia en la prueba de marcha de 6 minutos (aumento promedio de 44-80 metros)",
      "Reducción clínicamente significativa de la disnea en actividades cotidianas medida por escalas validadas (mMRC, escala de Borg)",
      "Mejora de la calidad de vida relacionada con la salud medida por cuestionarios específicos (SGRQ, CRQ, CAT)",
      "Reducción del 20-30% en las hospitalizaciones por exacerbaciones de EPOC en el año siguiente al programa",
      "Disminución de la ansiedad y la depresión asociadas a la enfermedad respiratoria crónica",
      "Mejora de la fuerza muscular periférica y respiratoria con reducción de la fatiga",
      "Aumento de la autonomía en actividades de la vida diaria y la participación social",
      "Mejora de la eficiencia ventilatoria y reducción de la sensación de falta de aire durante el esfuerzo"
    ],
    "beneficiosEn": [
      "Improvement in exercise capacity measured by 6-minute walk test distance (average increase of 44-80 meters)",
      "Clinically significant reduction in dyspnea during daily activities measured by validated scales (mMRC, Borg scale)",
      "Improvement in health-related quality of life measured by specific questionnaires (SGRQ, CRQ, CAT)",
      "20-30% reduction in hospitalizations for COPD exacerbations in the year following the program",
      "Decrease in anxiety and depression associated with chronic respiratory disease",
      "Improvement of peripheral and respiratory muscle strength with reduced fatigue",
      "Increase in autonomy in activities of daily living and social participation",
      "Improvement of ventilatory efficiency and reduction of breathlessness sensation during exertion"
    ],
    "duracionEs": "El programa estándar de rehabilitación pulmonar ambulatoria comprende un mínimo de 8 semanas (aunque los programas de 12-16 semanas muestran mayores beneficios), con 2-3 sesiones supervisadas por semana de 60-90 minutos cada una. Cada sesión incluye 10 minutos de calentamiento, 20-40 minutos de ejercicio aeróbico, 15-20 minutos de fortalecimiento muscular, 10 minutos de técnicas respiratorias y 10 minutos de enfriamiento. Las sesiones educativas grupales de 30-45 minutos se intercalan 1-2 veces por semana. Tras completar el programa supervisado, se prescribe un programa de mantenimiento domiciliario con ejercicio regular de al menos 30 minutos, 5 días por semana, con revisiones periódicas cada 3-6 meses. Los beneficios comienzan a declinar a los 6-12 meses si no se mantiene la actividad física regular, por lo que los programas de mantenimiento son esenciales.",
    "duracionEn": "The standard outpatient pulmonary rehabilitation program comprises a minimum of 8 weeks (although 12-16 week programs show greater benefits), with 2-3 supervised sessions per week of 60-90 minutes each. Each session includes 10 minutes of warm-up, 20-40 minutes of aerobic exercise, 15-20 minutes of muscle strengthening, 10 minutes of respiratory techniques, and 10 minutes of cool-down. Group educational sessions of 30-45 minutes are interspersed 1-2 times per week. After completing the supervised program, a home maintenance program is prescribed with regular exercise of at least 30 minutes, 5 days per week, with periodic reviews every 3-6 months. Benefits begin to decline at 6-12 months if regular physical activity is not maintained, making maintenance programs essential.",
    "contraindicacionesEs": [
      "Exacerbación aguda de la enfermedad pulmonar con insuficiencia respiratoria que requiere oxigenoterapia de alto flujo o ventilación mecánica",
      "Neumotórax reciente no resuelto o bulla enfisematosa gigante con riesgo de ruptura",
      "Hemoptisis activa significativa de causa no filiada",
      "Angina inestable o infarto agudo de miocardio reciente (menos de 4 semanas)",
      "Hipertensión pulmonar severa con síncope de esfuerzo o insuficiencia cardíaca derecha descompensada",
      "Trastornos musculoesqueléticos severos que impiden la realización del ejercicio (artritis severa, fracturas no consolidadas)",
      "Desaturación severa durante el ejercicio (SpO2 < 80%) no corregible con oxígeno suplementario"
    ],
    "contraindicacionesEn": [
      "Acute exacerbation of pulmonary disease with respiratory failure requiring high-flow oxygen therapy or mechanical ventilation",
      "Recent unresolved pneumothorax or giant emphysematous bulla with risk of rupture",
      "Significant active hemoptysis of unidentified cause",
      "Unstable angina or recent acute myocardial infarction (less than 4 weeks)",
      "Severe pulmonary hypertension with exertional syncope or decompensated right heart failure",
      "Severe musculoskeletal disorders preventing exercise performance (severe arthritis, non-united fractures)",
      "Severe desaturation during exercise (SpO2 < 80%) not correctable with supplemental oxygen"
    ],
    "resultadosEsperadosEs": "Los pacientes que completan un programa de rehabilitación pulmonar experimentan una mejora promedio de 44-80 metros en la prueba de marcha de 6 minutos (la diferencia mínima clínicamente importante es de 30 metros). La disnea medida por la escala mMRC mejora en al menos 1 punto en más del 60% de los pacientes. La calidad de vida medida por el SGRQ mejora en más de 4 puntos (diferencia mínima clínicamente importante) en el 70-80% de los pacientes. Las hospitalizaciones por exacerbaciones de EPOC se reducen en un 20-30% en el año posterior al programa. El beneficio es mayor en pacientes con mayor limitación funcional inicial (GOLD D) y en aquellos que participan en programas de al menos 12 semanas. Aproximadamente el 70-80% de los pacientes que inician el programa lo completan con éxito. Los beneficios de la rehabilitación son complementarios y aditivos a los del tratamiento farmacológico óptimo.",
    "resultadosEsperadosEn": "Patients completing a pulmonary rehabilitation program experience an average improvement of 44-80 meters in the 6-minute walk test (the minimal clinically important difference is 30 meters). Dyspnea measured by the mMRC scale improves by at least 1 point in more than 60% of patients. Quality of life measured by the SGRQ improves by more than 4 points (minimal clinically important difference) in 70-80% of patients. Hospitalizations for COPD exacerbations are reduced by 20-30% in the year following the program. Benefit is greater in patients with greater initial functional limitation (GOLD D) and in those participating in programs of at least 12 weeks. Approximately 70-80% of patients who start the program complete it successfully. Rehabilitation benefits are complementary and additive to those of optimal pharmacological treatment.",
    "cuandoConsultarEs": "Consulte a su neumólogo o especialista en rehabilitación pulmonar si experimenta disnea que limita sus actividades cotidianas a pesar del uso correcto de los inhaladores prescritos. Solicite derivación al programa de rehabilitación después de una hospitalización por exacerbación de EPOC, ya que el inicio precoz (dentro de las 4 semanas posteriores al alta) reduce significativamente el riesgo de rehospitalización. Consulte si nota disminución progresiva de la tolerancia al esfuerzo, si tiene dificultad para subir escaleras o caminar distancias que antes toleraba, si presenta tos productiva crónica con dificultad para expectorar las secreciones, o si la ansiedad o depresión relacionadas con su enfermedad respiratoria están afectando su calidad de vida. También es importante consultar si ha sido diagnosticado con fibrosis pulmonar, bronquiectasias o hipertensión pulmonar y no ha sido referido aún a un programa de rehabilitación.",
    "cuandoConsultarEn": "Consult your pulmonologist or pulmonary rehabilitation specialist if you experience dyspnea that limits your daily activities despite correct use of prescribed inhalers. Request referral to the rehabilitation program after hospitalization for COPD exacerbation, as early initiation (within 4 weeks post-discharge) significantly reduces rehospitalization risk. Consult if you notice progressive decrease in exercise tolerance, if you have difficulty climbing stairs or walking distances you previously tolerated, if you have chronic productive cough with difficulty expectorating secretions, or if anxiety or depression related to your respiratory disease are affecting your quality of life. It is also important to consult if you have been diagnosed with pulmonary fibrosis, bronchiectasis, or pulmonary hypertension and have not yet been referred to a rehabilitation program."
  }
]`);

export function buscarMedicinaFisica(termino: string): MedicinaFisicaEntry[] {
  const t = termino.toLowerCase();
  return MEDICINA_FISICA_ENTRIES.filter(e =>
    e.nombreEs.toLowerCase().includes(t) ||
    e.nombreEn.toLowerCase().includes(t) ||
    e.descripcionEs.toLowerCase().includes(t) ||
    e.descripcionEn.toLowerCase().includes(t)
  );
}

export function getMedicinaFisicaById(id: string): MedicinaFisicaEntry | undefined {
  return MEDICINA_FISICA_ENTRIES.find(e => e.id === id);
}

export function getMedicinaFisicaPorCategoria(categoria: string): MedicinaFisicaEntry[] {
  const c = categoria.toLowerCase();
  return MEDICINA_FISICA_ENTRIES.filter(e =>
    e.categoriaEs.toLowerCase().includes(c) ||
    e.categoriaEn.toLowerCase().includes(c)
  );
}
