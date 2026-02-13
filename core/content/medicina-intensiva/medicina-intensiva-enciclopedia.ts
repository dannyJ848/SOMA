// =============================================================================
// SOMA Medicina Intensiva Enciclopedia — Spanish-First Bilingual
// Intensive / Critical Care Patient Education Content
// =============================================================================
// ARCHITECTURE: JSON.parse() wrapper prevents TS2590 "expression too complex"
// =============================================================================

export interface MedicinaIntensivaEntry {
  id: string;
  nombreEs: string;
  nombreEn: string;
  descripcionEs: string;
  descripcionEn: string;
  categoriaEs: string;
  categoriaEn: string;
  sintomasEs: string[];
  sintomasEn: string[];
  causasEs: string;
  causasEn: string;
  diagnosticoEs: string;
  diagnosticoEn: string;
  tratamientoEs: string;
  tratamientoEn: string;
  monitorizacionEs: string;
  monitorizacionEn: string;
  complicacionesEs: string[];
  complicacionesEn: string[];
  informacionFamiliaEs: string;
  informacionFamiliaEn: string;
}

export const MEDICINA_INTENSIVA_ENTRIES: MedicinaIntensivaEntry[] = JSON.parse(`[
  {
    "id": "sepsis",
    "nombreEs": "Sepsis y Shock Septico",
    "nombreEn": "Sepsis and Septic Shock",
    "descripcionEs": "La sepsis es una respuesta inflamatoria sistemica desregulada del organismo ante una infeccion, que puede progresar rapidamente a shock septico con hipotension refractaria y falla organica. Es una de las principales causas de muerte en unidades de cuidados intensivos a nivel mundial, con una mortalidad que oscila entre el 25% y el 40% segun la gravedad. El reconocimiento temprano mediante la escala qSOFA (frecuencia respiratoria elevada, alteracion del estado mental y presion arterial sistolica baja) y la implementacion inmediata de paquetes de reanimacion (bundles) dentro de la primera hora son determinantes para la supervivencia del paciente. La fisiopatologia involucra una cascada de mediadores proinflamatorios, activacion del complemento y coagulacion intravascular diseminada que danan el endotelio vascular y comprometen la perfusion tisular.",
    "descripcionEn": "Sepsis is a life-threatening dysregulated systemic inflammatory response to infection that can rapidly progress to septic shock with refractory hypotension and organ failure. It is one of the leading causes of death in intensive care units worldwide, with mortality ranging from 25% to 40% depending on severity. Early recognition using the qSOFA score (elevated respiratory rate, altered mental status, and low systolic blood pressure) and immediate implementation of resuscitation bundles within the first hour are critical determinants of patient survival. The pathophysiology involves a cascade of proinflammatory mediators, complement activation, and disseminated intravascular coagulation that damage the vascular endothelium and compromise tissue perfusion.",
    "categoriaEs": "Infecciosa",
    "categoriaEn": "Infectious",
    "sintomasEs": [
      "Fiebre alta (>38.3C) o hipotermia (<36C)",
      "Taquicardia persistente (frecuencia cardiaca >90 latidos/min)",
      "Taquipnea (frecuencia respiratoria >22 respiraciones/min)",
      "Alteracion del estado mental: confusion, somnolencia o agitacion",
      "Hipotension arterial (presion sistolica <90 mmHg o caida >40 mmHg)",
      "Piel moteada, fria o con llenado capilar prolongado",
      "Oliguria (diuresis <0.5 mL/kg/h durante mas de 2 horas)",
      "Lactato serico elevado (>2 mmol/L)"
    ],
    "sintomasEn": [
      "High fever (>38.3C) or hypothermia (<36C)",
      "Persistent tachycardia (heart rate >90 beats/min)",
      "Tachypnea (respiratory rate >22 breaths/min)",
      "Altered mental status: confusion, drowsiness, or agitation",
      "Arterial hypotension (systolic BP <90 mmHg or drop >40 mmHg)",
      "Mottled, cold skin or prolonged capillary refill",
      "Oliguria (urine output <0.5 mL/kg/h for more than 2 hours)",
      "Elevated serum lactate (>2 mmol/L)"
    ],
    "causasEs": "Las causas mas frecuentes incluyen infecciones pulmonares (neumonia), infecciones abdominales (peritonitis, abscesos), infecciones urinarias complicadas (pielonefritis, urosepsis), infecciones de piel y tejidos blandos (celulitis necrotizante, fascitis), bacteriemias asociadas a cateteres intravasculares e infecciones posquirurgicas. Los patogenos pueden ser bacterias grampositivas (Staphylococcus aureus, Streptococcus pneumoniae), gramnegativas (Escherichia coli, Klebsiella, Pseudomonas aeruginosa), hongos (Candida spp.) o virus en pacientes inmunocomprometidos. Los factores de riesgo incluyen edad avanzada, diabetes, inmunosupresion, cirugia reciente, dispositivos invasivos y hospitalizacion prolongada.",
    "causasEn": "The most frequent causes include pulmonary infections (pneumonia), abdominal infections (peritonitis, abscesses), complicated urinary tract infections (pyelonephritis, urosepsis), skin and soft tissue infections (necrotizing cellulitis, fasciitis), intravascular catheter-associated bloodstream infections, and postsurgical infections. Pathogens may be gram-positive bacteria (Staphylococcus aureus, Streptococcus pneumoniae), gram-negative bacteria (Escherichia coli, Klebsiella, Pseudomonas aeruginosa), fungi (Candida spp.), or viruses in immunocompromised patients. Risk factors include advanced age, diabetes, immunosuppression, recent surgery, invasive devices, and prolonged hospitalization.",
    "diagnosticoEs": "El diagnostico se basa en la sospecha clinica junto con criterios SOFA (Sequential Organ Failure Assessment) que evaluan la disfuncion de seis sistemas organicos. Se deben obtener al menos dos sets de hemocultivos (aerobio y anaerobio) antes de iniciar antibioticos, asi como cultivos del foco sospechado (urocultivo, cultivo de esputo, liquido peritoneal). Laboratorios esenciales incluyen biometria hematica completa, procalcitonina, proteina C reactiva, lactato serico, gasometria arterial, funcion renal, hepatica y coagulacion. La imagenologia dirigida (radiografia de torax, tomografia, ecografia) ayuda a identificar el foco infeccioso. El qSOFA (>=2 puntos) en urgencias identifica pacientes con alto riesgo de mala evolucion.",
    "diagnosticoEn": "Diagnosis is based on clinical suspicion together with SOFA (Sequential Organ Failure Assessment) criteria evaluating dysfunction in six organ systems. At least two sets of blood cultures (aerobic and anaerobic) should be obtained before starting antibiotics, along with cultures from the suspected source (urine, sputum, peritoneal fluid). Essential laboratory tests include complete blood count, procalcitonin, C-reactive protein, serum lactate, arterial blood gas, renal function, liver function, and coagulation studies. Directed imaging (chest X-ray, CT scan, ultrasound) helps identify the infectious source. The qSOFA score (>=2 points) in the emergency department identifies patients at high risk of poor outcome.",
    "tratamientoEs": "El tratamiento sigue los paquetes de la Surviving Sepsis Campaign. Dentro de la primera hora se debe: (1) obtener hemocultivos, (2) iniciar antibioticos empiricos de amplio espectro intravenosos (por ejemplo, piperacilina-tazobactam o meropenem segun el patron de resistencia local), (3) administrar cristaloides a 30 mL/kg si hay hipotension o lactato >=4 mmol/L. Si persiste la hipotension tras la reanimacion con liquidos, se inician vasopresores: norepinefrina como primera linea (titular para MAP >=65 mmHg), agregando vasopresina (0.03 U/min) como segundo vasopresor. Se debe obtener control del foco infeccioso (drenaje de abscesos, retiro de dispositivos infectados, cirugia). Corticosteroides en dosis de estres (hidrocortisona 200 mg/dia) se consideran en shock refractario. La desescalacion antibiotica se realiza segun cultivos y evolucion clinica.",
    "tratamientoEn": "Treatment follows the Surviving Sepsis Campaign bundles. Within the first hour: (1) obtain blood cultures, (2) start broad-spectrum empiric IV antibiotics (e.g., piperacillin-tazobactam or meropenem based on local resistance patterns), (3) administer crystalloids at 30 mL/kg if hypotension or lactate >=4 mmol/L. If hypotension persists after fluid resuscitation, start vasopressors: norepinephrine as first line (titrate for MAP >=65 mmHg), adding vasopressin (0.03 U/min) as a second vasopressor. Source control must be achieved (drainage of abscesses, removal of infected devices, surgery). Stress-dose corticosteroids (hydrocortisone 200 mg/day) are considered in refractory shock. Antibiotic de-escalation is guided by culture results and clinical progress.",
    "monitorizacionEs": "Monitorizacion continua de signos vitales: presion arterial invasiva (linea arterial), frecuencia cardiaca, saturacion de oxigeno y frecuencia respiratoria. Se debe medir el lactato serico cada 2-4 horas hasta su normalizacion como marcador de perfusion tisular. Gasto urinario horario con sonda vesical (objetivo >=0.5 mL/kg/h). Valoracion neurologica frecuente con escala de Glasgow. Laboratorios seriados cada 6-12 horas: gasometria, funcion renal, hepatica, coagulacion y procalcitonina para evaluar respuesta al tratamiento. La ecocardiografia a pie de cama permite valorar la funcion cardiaca y la respuesta a liquidos. En pacientes con shock persistente se puede utilizar monitorizacion hemodinamica avanzada (cateter de arteria pulmonar, PICCO o monitorizacion de gasto cardiaco no invasiva).",
    "monitorizacionEn": "Continuous monitoring of vital signs: invasive arterial blood pressure (arterial line), heart rate, oxygen saturation, and respiratory rate. Serum lactate should be measured every 2-4 hours until normalization as a tissue perfusion marker. Hourly urine output via bladder catheter (target >=0.5 mL/kg/h). Frequent neurological assessment using the Glasgow Coma Scale. Serial laboratory tests every 6-12 hours: blood gas, renal function, liver function, coagulation, and procalcitonin to evaluate treatment response. Bedside echocardiography assesses cardiac function and fluid responsiveness. In patients with persistent shock, advanced hemodynamic monitoring (pulmonary artery catheter, PiCCO, or noninvasive cardiac output monitoring) may be used.",
    "complicacionesEs": [
      "Shock septico con necesidad de vasopresores multiples",
      "Coagulacion intravascular diseminada (CID)",
      "Sindrome de dificultad respiratoria aguda (SDRA)",
      "Lesion renal aguda que requiere terapia de reemplazo renal",
      "Insuficiencia hepatica aguda",
      "Miopatia y polineuropatia del paciente critico",
      "Sindrome post-UCI: deterioro cognitivo, debilidad muscular y trastorno de estres postraumatico"
    ],
    "complicacionesEn": [
      "Septic shock requiring multiple vasopressors",
      "Disseminated intravascular coagulation (DIC)",
      "Acute respiratory distress syndrome (ARDS)",
      "Acute kidney injury requiring renal replacement therapy",
      "Acute liver failure",
      "ICU-acquired myopathy and polyneuropathy",
      "Post-ICU syndrome: cognitive impairment, muscle weakness, and post-traumatic stress disorder"
    ],
    "informacionFamiliaEs": "La sepsis es una emergencia medica que requiere tratamiento inmediato e intensivo. Su familiar esta recibiendo antibioticos potentes por via intravenosa para combatir la infeccion, liquidos para mantener la presion arterial y posiblemente medicamentos vasopresores para sostener la circulacion. El equipo medico esta monitorizando continuamente sus signos vitales y funcion de organos. La evolucion puede ser impredecible: algunos pacientes mejoran rapidamente con tratamiento adecuado, mientras otros pueden empeorar a pesar de los esfuerzos. Es importante que el equipo les mantenga informados sobre los cambios. Despues de la UCI, la recuperacion puede tomar semanas o meses e incluir rehabilitacion fisica y apoyo psicologico.",
    "informacionFamiliaEn": "Sepsis is a medical emergency that requires immediate, intensive treatment. Your family member is receiving powerful intravenous antibiotics to fight the infection, fluids to maintain blood pressure, and possibly vasopressor medications to support circulation. The medical team is continuously monitoring vital signs and organ function. The course can be unpredictable: some patients improve quickly with appropriate treatment, while others may worsen despite best efforts. It is important that the team keeps you informed about changes. After the ICU, recovery may take weeks or months and may include physical rehabilitation and psychological support."
  },
  {
    "id": "sindrome-dificultad-respiratoria",
    "nombreEs": "Sindrome de Dificultad Respiratoria Aguda (SDRA)",
    "nombreEn": "Acute Respiratory Distress Syndrome (ARDS)",
    "descripcionEs": "El sindrome de dificultad respiratoria aguda (SDRA) es una forma grave de insuficiencia respiratoria caracterizada por inflamacion pulmonar difusa, edema alveolar no cardiogenico y deterioro severo del intercambio gaseoso. Se presenta con hipoxemia refractaria de inicio agudo (dentro de una semana de un evento desencadenante conocido) y opacidades bilaterales en la radiografia de torax que no se explican completamente por insuficiencia cardiaca o sobrecarga de liquidos. La clasificacion de Berlin define tres grados de gravedad segun la relacion PaO2/FiO2: leve (200-300), moderado (100-200) y grave (<100). La mortalidad global oscila entre el 35% y el 46% en las formas graves, y los sobrevivientes frecuentemente presentan secuelas pulmonares y cognitivas a largo plazo.",
    "descripcionEn": "Acute respiratory distress syndrome (ARDS) is a severe form of respiratory failure characterized by diffuse pulmonary inflammation, noncardiogenic alveolar edema, and severe gas exchange impairment. It presents with refractory hypoxemia of acute onset (within one week of a known triggering event) and bilateral opacities on chest radiograph not fully explained by heart failure or fluid overload. The Berlin classification defines three severity grades based on the PaO2/FiO2 ratio: mild (200-300), moderate (100-200), and severe (<100). Overall mortality ranges from 35% to 46% in severe forms, and survivors frequently have long-term pulmonary and cognitive sequelae.",
    "categoriaEs": "Respiratoria",
    "categoriaEn": "Respiratory",
    "sintomasEs": [
      "Disnea severa de inicio rapido (horas a dias)",
      "Taquipnea marcada (frecuencia respiratoria >30/min)",
      "Hipoxemia refractaria a oxigeno suplementario convencional",
      "Uso de musculos accesorios de la respiracion",
      "Cianosis central (labios y lechos ungueales azulados)",
      "Creptitantes bilaterales difusos a la auscultacion pulmonar",
      "Agitacion, confusion o somnolencia por hipoxia cerebral",
      "Taquicardia compensatoria"
    ],
    "sintomasEn": [
      "Severe dyspnea of rapid onset (hours to days)",
      "Marked tachypnea (respiratory rate >30/min)",
      "Refractory hypoxemia unresponsive to conventional supplemental oxygen",
      "Use of accessory respiratory muscles",
      "Central cyanosis (bluish lips and nail beds)",
      "Diffuse bilateral crackles on lung auscultation",
      "Agitation, confusion, or drowsiness from cerebral hypoxia",
      "Compensatory tachycardia"
    ],
    "causasEs": "Las causas se dividen en pulmonares (directas) y extrapulmonares (indirectas). Las causas pulmonares incluyen neumonia (la mas frecuente, tanto bacteriana como viral incluyendo COVID-19 e influenza), aspiracion de contenido gastrico, contusion pulmonar por trauma, inhalacion de toxicos y ahogamiento. Las causas extrapulmonares incluyen sepsis (la causa extrapulmonar mas comun), pancreatitis aguda grave, politraumatismo, quemaduras extensas, transfusion masiva de hemoderivados (TRALI), embolia grasa y cirugia cardiotoracica. En todos los casos, la lesion del endotelio capilar pulmonar y el epitelio alveolar permite la extravasacion de liquido rico en proteinas al espacio alveolar, colapsando los alveolos e impidiendo el intercambio gaseoso.",
    "causasEn": "Causes are divided into pulmonary (direct) and extrapulmonary (indirect). Pulmonary causes include pneumonia (the most frequent, both bacterial and viral including COVID-19 and influenza), aspiration of gastric contents, pulmonary contusion from trauma, toxic inhalation, and drowning. Extrapulmonary causes include sepsis (the most common extrapulmonary cause), severe acute pancreatitis, polytrauma, extensive burns, massive blood product transfusion (TRALI), fat embolism, and cardiothoracic surgery. In all cases, injury to the pulmonary capillary endothelium and alveolar epithelium allows protein-rich fluid to extravasate into the alveolar space, collapsing alveoli and preventing gas exchange.",
    "diagnosticoEs": "El diagnostico se establece mediante los criterios de Berlin: (1) inicio agudo dentro de una semana del insulto clinico, (2) opacidades bilaterales en radiografia o tomografia de torax no explicadas completamente por derrames, atelectasias o nodulos, (3) insuficiencia respiratoria no explicada completamente por insuficiencia cardiaca o sobrecarga hidrica (puede requerir ecocardiografia para excluirlas), y (4) hipoxemia con PaO2/FiO2 <=300 con PEEP >=5 cmH2O. La gasometria arterial es fundamental para clasificar la gravedad. La tomografia de torax muestra opacidades en vidrio esmerilado y consolidaciones dependientes de la gravedad. La ecografia pulmonar a pie de cama revela lineas B coalescentes bilaterales y consolidaciones subpleurales.",
    "diagnosticoEn": "Diagnosis is established using the Berlin criteria: (1) acute onset within one week of the clinical insult, (2) bilateral opacities on chest radiograph or CT not fully explained by effusions, atelectasis, or nodules, (3) respiratory failure not fully explained by heart failure or fluid overload (echocardiography may be required to exclude these), and (4) hypoxemia with PaO2/FiO2 <=300 on PEEP >=5 cmH2O. Arterial blood gas is essential for severity classification. Chest CT shows ground-glass opacities and gravity-dependent consolidations. Bedside lung ultrasound reveals bilateral coalescent B-lines and subpleural consolidations.",
    "tratamientoEs": "El pilar del tratamiento es la ventilacion mecanica protectora: volumen corriente bajo de 6 mL/kg de peso corporal predicho, presion meseta <=30 cmH2O y PEEP adecuada segun tablas PEEP/FiO2. En SDRA moderado a severo (PaO2/FiO2 <150), la posicion prono durante al menos 16 horas al dia ha demostrado reducir la mortalidad significativamente. El manejo conservador de liquidos (balance negativo) mejora los dias libres de ventilador. El bloqueo neuromuscular con cisatracurio puede considerarse en las primeras 48 horas del SDRA severo. Para hipoxemia refractaria, las opciones de rescate incluyen oxido nitrico inhalado, maniobras de reclutamiento alveolar, ECMO venovenosa y ventilacion de alta frecuencia oscilatoria. El tratamiento de la causa subyacente (antibioticos para neumonia, control quirurgico del foco en sepsis abdominal) es igualmente esencial.",
    "tratamientoEn": "The cornerstone of treatment is protective mechanical ventilation: low tidal volume of 6 mL/kg predicted body weight, plateau pressure <=30 cmH2O, and appropriate PEEP using PEEP/FiO2 tables. In moderate-to-severe ARDS (PaO2/FiO2 <150), prone positioning for at least 16 hours per day has been shown to significantly reduce mortality. Conservative fluid management (negative balance) improves ventilator-free days. Neuromuscular blockade with cisatracurium may be considered during the first 48 hours of severe ARDS. For refractory hypoxemia, rescue options include inhaled nitric oxide, alveolar recruitment maneuvers, venovenous ECMO, and high-frequency oscillatory ventilation. Treatment of the underlying cause (antibiotics for pneumonia, surgical source control in abdominal sepsis) is equally essential.",
    "monitorizacionEs": "Monitorizacion respiratoria continua: saturacion de oxigeno por pulsioximetria, gasometrias arteriales seriadas cada 4-6 horas para evaluar PaO2, PaCO2 y pH, mecanica ventilatoria (presion meseta, presion de conduccion o driving pressure, distensibilidad estatica). Radiografia de torax diaria para evaluar progresion o mejoria. Balance hidrico estricto con objetivo de balance neutro o negativo. Monitorizacion hemodinamica si hay inestabilidad asociada. Evaluacion diaria de la posibilidad de realizar prueba de ventilacion espontanea para valorar destete del ventilador. En pacientes pronados, verificacion frecuente de puntos de presion, seguridad de tubo endotraqueal y accesos vasculares, y monitorizacion de presion intraabdominal.",
    "monitorizacionEn": "Continuous respiratory monitoring: oxygen saturation by pulse oximetry, serial arterial blood gases every 4-6 hours to evaluate PaO2, PaCO2, and pH, ventilatory mechanics (plateau pressure, driving pressure, static compliance). Daily chest radiograph to assess progression or improvement. Strict fluid balance with a target of neutral or negative balance. Hemodynamic monitoring if associated instability is present. Daily assessment of readiness for spontaneous breathing trial to evaluate ventilator weaning. In proned patients, frequent verification of pressure points, endotracheal tube and vascular access security, and monitoring of intra-abdominal pressure.",
    "complicacionesEs": [
      "Barotrauma (neumotorax, neumomediastino, enfisema subcutaneo)",
      "Neumonia asociada al ventilador (NAV)",
      "Fibrosis pulmonar como secuela a largo plazo",
      "Debilidad adquirida en UCI (miopatia y neuropatia)",
      "Delirium y deterioro cognitivo",
      "Estenosis traqueal post-intubacion prolongada",
      "Tromboembolismo venoso por inmovilizacion prolongada"
    ],
    "complicacionesEn": [
      "Barotrauma (pneumothorax, pneumomediastinum, subcutaneous emphysema)",
      "Ventilator-associated pneumonia (VAP)",
      "Pulmonary fibrosis as a long-term sequela",
      "ICU-acquired weakness (myopathy and neuropathy)",
      "Delirium and cognitive impairment",
      "Tracheal stenosis from prolonged intubation",
      "Venous thromboembolism from prolonged immobilization"
    ],
    "informacionFamiliaEs": "Su familiar tiene una inflamacion severa en ambos pulmones que le impide respirar adecuadamente por si mismo. Esta conectado a un ventilador mecanico que le ayuda a respirar mientras los pulmones se recuperan. Es posible que lo coloquemos boca abajo (posicion prono) durante varias horas al dia, ya que esto ha demostrado mejorar la oxigenacion y la supervivencia. El proceso de recuperacion suele ser lento, generalmente semanas, y el destete del ventilador se hace gradualmente. Cuando sea posible, reduciremos la sedacion para evaluar su estado neurologico. La recuperacion completa puede tomar meses tras el alta, y algunos pacientes pueden tener cambios en su capacidad pulmonar o memoria. El equipo de rehabilitacion comenzara ejercicios tempranos en cuanto sea seguro.",
    "informacionFamiliaEn": "Your family member has severe inflammation in both lungs that prevents adequate breathing on their own. They are connected to a mechanical ventilator that helps them breathe while the lungs recover. We may place them face-down (prone position) for several hours each day, as this has been shown to improve oxygenation and survival. The recovery process is usually slow, typically weeks, and ventilator weaning is done gradually. When possible, we will reduce sedation to evaluate neurological status. Full recovery may take months after discharge, and some patients may have changes in their lung capacity or memory. The rehabilitation team will begin early exercises as soon as it is safe."
  },
  {
    "id": "ventilacion-mecanica",
    "nombreEs": "Ventilacion Mecanica Invasiva",
    "nombreEn": "Invasive Mechanical Ventilation",
    "descripcionEs": "La ventilacion mecanica invasiva es un soporte vital que consiste en la administracion de respiraciones a traves de un tubo endotraqueal o canula de traqueostomia conectado a un ventilador mecanico. Es la intervencion mas frecuente en las unidades de cuidados intensivos y se utiliza cuando el paciente no puede mantener una ventilacion y oxigenacion adecuadas por si mismo. Los modos ventilatorios principales incluyen ventilacion controlada por volumen (VCV), ventilacion controlada por presion (PCV) y ventilacion con presion de soporte (PSV). La estrategia actual enfatiza la ventilacion protectora con volumenes corrientes bajos para evitar la lesion pulmonar inducida por el ventilador (VILI), que es un concepto central en el manejo del paciente critico ventilado.",
    "descripcionEn": "Invasive mechanical ventilation is a life-support intervention that delivers breaths through an endotracheal tube or tracheostomy cannula connected to a mechanical ventilator. It is the most common intervention in intensive care units and is used when the patient cannot maintain adequate ventilation and oxygenation on their own. The main ventilatory modes include volume-controlled ventilation (VCV), pressure-controlled ventilation (PCV), and pressure support ventilation (PSV). Current strategy emphasizes protective ventilation with low tidal volumes to prevent ventilator-induced lung injury (VILI), which is a central concept in managing the critically ill ventilated patient.",
    "categoriaEs": "Soporte vital",
    "categoriaEn": "Life support",
    "sintomasEs": [
      "Insuficiencia respiratoria aguda con disnea severa",
      "Hipoxemia refractaria (SpO2 <90% a pesar de oxigeno a alto flujo)",
      "Hipercapnia con acidosis respiratoria (pH <7.25, PaCO2 >60 mmHg)",
      "Trabajo respiratorio excesivo con fatiga muscular respiratoria",
      "Incapacidad para proteger la via aerea (Glasgow <=8)",
      "Apnea o patron respiratorio irregular",
      "Shock con necesidad de proteger la via aerea para procedimientos"
    ],
    "sintomasEn": [
      "Acute respiratory failure with severe dyspnea",
      "Refractory hypoxemia (SpO2 <90% despite high-flow oxygen)",
      "Hypercapnia with respiratory acidosis (pH <7.25, PaCO2 >60 mmHg)",
      "Excessive work of breathing with respiratory muscle fatigue",
      "Inability to protect the airway (Glasgow <=8)",
      "Apnea or irregular breathing pattern",
      "Shock requiring airway protection for procedures"
    ],
    "causasEs": "Las indicaciones para ventilacion mecanica incluyen insuficiencia respiratoria hipoxemica (SDRA, neumonia severa, edema pulmonar, embolia pulmonar masiva), insuficiencia respiratoria hipercapnica (exacerbacion de EPOC, crisis asmatica severa, enfermedades neuromusculares como Guillain-Barre o miastenia gravis), falla en la ventilacion no invasiva, alteracion del nivel de conciencia con incapacidad para proteger la via aerea (traumatismo craneoencefalico, intoxicaciones, estado postictal prolongado, coma de cualquier etiologia), necesidad de proteccion de via aerea durante cirugia y estados de shock que requieren soporte avanzado. La decision de intubar se basa en la evaluacion clinica global del paciente, no en un parametro aislado.",
    "causasEn": "Indications for mechanical ventilation include hypoxemic respiratory failure (ARDS, severe pneumonia, pulmonary edema, massive pulmonary embolism), hypercapnic respiratory failure (COPD exacerbation, severe asthma attack, neuromuscular diseases such as Guillain-Barre or myasthenia gravis), noninvasive ventilation failure, altered level of consciousness with inability to protect the airway (traumatic brain injury, intoxications, prolonged postictal state, coma of any etiology), need for airway protection during surgery, and shock states requiring advanced support. The decision to intubate is based on the overall clinical assessment of the patient, not on a single isolated parameter.",
    "diagnosticoEs": "La evaluacion previa a la intubacion incluye gasometria arterial para cuantificar el grado de hipoxemia e hipercapnia, radiografia de torax para evaluar patologia pulmonar subyacente, evaluacion de la via aerea (clasificacion de Mallampati, distancia tiromentoniana, apertura oral, movilidad cervical) para anticipar intubacion dificil, y valoracion hemodinamica ya que la ventilacion con presion positiva puede causar hipotension. Durante la ventilacion mecanica, se monitoriza continuamente la mecanica respiratoria: presion pico, presion meseta, presion de conduccion (driving pressure), distensibilidad estatica y dinamica, y resistencia de la via aerea. La capnografia (EtCO2) confirma la correcta colocacion del tubo y permite monitorizar la ventilacion.",
    "diagnosticoEn": "Pre-intubation evaluation includes arterial blood gas to quantify the degree of hypoxemia and hypercapnia, chest radiograph to assess underlying pulmonary pathology, airway assessment (Mallampati classification, thyromental distance, mouth opening, cervical mobility) to anticipate difficult intubation, and hemodynamic assessment since positive-pressure ventilation can cause hypotension. During mechanical ventilation, respiratory mechanics are continuously monitored: peak pressure, plateau pressure, driving pressure, static and dynamic compliance, and airway resistance. Capnography (EtCO2) confirms correct tube placement and allows ventilation monitoring.",
    "tratamientoEs": "La configuracion inicial del ventilador depende de la indicacion: en SDRA se utiliza ventilacion protectora con volumen corriente de 6 mL/kg de peso predicho, PEEP segun tablas ARDSnet, presion meseta <=30 cmH2O y driving pressure <=15 cmH2O. En EPOC se utiliza volumen corriente de 6-8 mL/kg con PEEP extrinseca para contrarrestar el auto-PEEP, y flujos espiratorios prolongados. La sedacion se maneja con protocolos de sedacion minima (RASS 0 a -2) utilizando propofol o dexmedetomidina, con vacaciones diarias de sedacion cuando sea apropiado. La analgesia (fentanilo, remifentanilo) se prioriza sobre la sedacion (concepto de analgosedacion). El destete ventilatorio se inicia diariamente cuando el paciente cumple criterios: mejoria de la causa subyacente, FiO2 <=40%, PEEP <=8 cmH2O, hemodinamicamente estable. La prueba de ventilacion espontanea (tubo en T o presion de soporte baja) durante 30-120 minutos determina si el paciente puede ser extubado.",
    "tratamientoEn": "Initial ventilator settings depend on the indication: in ARDS, protective ventilation is used with tidal volume of 6 mL/kg predicted body weight, PEEP per ARDSnet tables, plateau pressure <=30 cmH2O, and driving pressure <=15 cmH2O. In COPD, tidal volume of 6-8 mL/kg with extrinsic PEEP to counteract auto-PEEP and prolonged expiratory flows are used. Sedation is managed with minimal sedation protocols (RASS 0 to -2) using propofol or dexmedetomidine, with daily sedation vacations when appropriate. Analgesia (fentanyl, remifentanil) is prioritized over sedation (analgosedation concept). Ventilator weaning is initiated daily when the patient meets criteria: improvement of the underlying cause, FiO2 <=40%, PEEP <=8 cmH2O, hemodynamically stable. A spontaneous breathing trial (T-piece or low pressure support) for 30-120 minutes determines whether the patient can be extubated.",
    "monitorizacionEs": "Monitorizacion continua de parametros ventilatorios: volumen corriente entregado, presion pico, presion meseta, PEEP total (incluyendo auto-PEEP), FiO2, frecuencia respiratoria del paciente y del ventilador, y relacion I:E. Gasometria arterial cada 4-8 horas o tras cambios en los parametros ventilatorios. Capnografia continua (EtCO2). Radiografia de torax diaria en los primeros dias para verificar posicion del tubo y evaluar patologia pulmonar. Evaluacion diaria de la capacidad de destete con protocolos estandarizados. Monitorizacion del balon del tubo endotraqueal (presion 20-30 cmH2O). Evaluacion de sedacion cada 4 horas con escala RASS y evaluacion de delirium con CAM-ICU. Prevencion de neumonia asociada al ventilador: cabecera a 30-45 grados, higiene oral con clorhexidina, profilaxis de ulcera de estres y profilaxis de trombosis.",
    "monitorizacionEn": "Continuous monitoring of ventilatory parameters: delivered tidal volume, peak pressure, plateau pressure, total PEEP (including auto-PEEP), FiO2, patient and ventilator respiratory rate, and I:E ratio. Arterial blood gas every 4-8 hours or after ventilator parameter changes. Continuous capnography (EtCO2). Daily chest radiograph in the first days to verify tube position and assess pulmonary pathology. Daily weaning readiness assessment with standardized protocols. Endotracheal tube cuff pressure monitoring (20-30 cmH2O). Sedation assessment every 4 hours with the RASS scale and delirium assessment with CAM-ICU. Ventilator-associated pneumonia prevention: head of bed at 30-45 degrees, oral hygiene with chlorhexidine, stress ulcer prophylaxis, and thrombosis prophylaxis.",
    "complicacionesEs": [
      "Neumonia asociada al ventilador (NAV) — incidencia 10-25%",
      "Lesion pulmonar inducida por el ventilador (barotrauma, volutrauma, atelectrauma, biotrauma)",
      "Neumotorax a tension",
      "Estenosis traqueal o traqueomalacia post-extubacion",
      "Debilidad muscular adquirida en UCI (miopatia y neuropatia critica)",
      "Delirium asociado a sedacion prolongada",
      "Fallo en la extubacion y necesidad de reintubacion (incidencia 10-20%)",
      "Dependencia ventilatoria prolongada que requiere traqueostomia"
    ],
    "complicacionesEn": [
      "Ventilator-associated pneumonia (VAP) — incidence 10-25%",
      "Ventilator-induced lung injury (barotrauma, volutrauma, atelectrauma, biotrauma)",
      "Tension pneumothorax",
      "Post-extubation tracheal stenosis or tracheomalacia",
      "ICU-acquired muscle weakness (critical illness myopathy and neuropathy)",
      "Delirium associated with prolonged sedation",
      "Extubation failure requiring reintubation (incidence 10-20%)",
      "Prolonged ventilator dependence requiring tracheostomy"
    ],
    "informacionFamiliaEs": "Su familiar necesita ayuda de una maquina para respirar porque sus pulmones o su cuerpo no pueden hacerlo adecuadamente en este momento. El tubo que tiene en la boca (o en el cuello si tiene traqueostomia) esta conectado a un ventilador que le entrega aire con oxigeno. Mientras esta en el ventilador, su familiar no podra hablar, pero puede estar consciente y escucharlos; hablenle con calma y den le animo. Le damos medicamentos para que este comodo y sin dolor. Cada dia evaluamos si esta listo para respirar por si mismo; cuando sea posible, iremos reduciendo la ayuda de la maquina gradualmente. Algunas personas salen del ventilador en pocos dias, otras necesitan mas tiempo. Si se prolonga, podemos considerar una traqueostomia, que es mas comoda y facilita la recuperacion. Estamos haciendo todo lo posible por su bienestar.",
    "informacionFamiliaEn": "Your family member needs help from a machine to breathe because their lungs or body cannot do so adequately right now. The tube in their mouth (or neck if they have a tracheostomy) is connected to a ventilator that delivers air with oxygen. While on the ventilator, your family member will not be able to speak, but they may be conscious and able to hear you; speak to them calmly and offer encouragement. We give medications to keep them comfortable and pain-free. Every day we assess whether they are ready to breathe on their own; when possible, we will gradually reduce the machine's support. Some people come off the ventilator in a few days, others need more time. If it is prolonged, we may consider a tracheostomy, which is more comfortable and facilitates recovery. We are doing everything possible for their well-being."
  },
  {
    "id": "shock-cardiogenico",
    "nombreEs": "Shock Cardiogenico",
    "nombreEn": "Cardiogenic Shock",
    "descripcionEs": "El shock cardiogenico es un estado de hipoperfusion tisular critica causado por la incapacidad del corazon para bombear suficiente sangre para satisfacer las demandas metabolicas del organismo. Es la principal causa de muerte en pacientes con infarto agudo de miocardio, presentandose en aproximadamente el 5-8% de los infartos con elevacion del ST (IAMCEST). La mortalidad hospitalaria sigue siendo elevada, entre el 40% y el 60%, a pesar de los avances en revascularizacion y soporte mecanico circulatorio. El reconocimiento temprano y la intervencion rapida con cateterismo cardiaco y revascularizacion coronaria (cuando la causa es isquemica) son fundamentales para mejorar el pronostico. La fisiopatologia implica un circulo vicioso de disminucion del gasto cardiaco, hipotension, hipoperfusion coronaria y mayor dano miocardico.",
    "descripcionEn": "Cardiogenic shock is a state of critical tissue hypoperfusion caused by the heart's inability to pump enough blood to meet the body's metabolic demands. It is the leading cause of death in patients with acute myocardial infarction, occurring in approximately 5-8% of ST-elevation myocardial infarctions (STEMI). Hospital mortality remains high, between 40% and 60%, despite advances in revascularization and mechanical circulatory support. Early recognition and rapid intervention with cardiac catheterization and coronary revascularization (when the cause is ischemic) are essential for improving prognosis. The pathophysiology involves a vicious cycle of decreased cardiac output, hypotension, coronary hypoperfusion, and further myocardial damage.",
    "categoriaEs": "Cardiovascular",
    "categoriaEn": "Cardiovascular",
    "sintomasEs": [
      "Hipotension arterial severa (sistolica <90 mmHg por mas de 30 minutos)",
      "Taquicardia o bradicardia (segun la etiologia)",
      "Piel fria, palida, moteada y diaforetica",
      "Oliguria o anuria (disminucion marcada de la orina)",
      "Alteracion del estado mental (confusion, letargia, obnubilacion)",
      "Disnea y ortopnea con estertores pulmonares bilaterales (edema pulmonar)",
      "Ingurgitacion yugular (presion venosa central elevada)",
      "Pulso filiforme y debil"
    ],
    "sintomasEn": [
      "Severe arterial hypotension (systolic <90 mmHg for more than 30 minutes)",
      "Tachycardia or bradycardia (depending on etiology)",
      "Cold, pale, mottled, and diaphoretic skin",
      "Oliguria or anuria (marked decrease in urine output)",
      "Altered mental status (confusion, lethargy, obtundation)",
      "Dyspnea and orthopnea with bilateral pulmonary rales (pulmonary edema)",
      "Jugular venous distension (elevated central venous pressure)",
      "Thready, weak pulse"
    ],
    "causasEs": "La causa mas frecuente es el infarto agudo de miocardio extenso (particularmente de la pared anterior) con perdida de mas del 40% de la masa miocardica funcional. Otras causas incluyen complicaciones mecanicas del infarto (rotura del septum interventricular, insuficiencia mitral aguda por rotura de musculo papilar, rotura de pared libre), miocarditis fulminante, miocardiopatia de Takotsubo, descompensacion aguda de insuficiencia cardiaca cronica, valvulopatias agudas (endocarditis con destruccion valvular, trombosis de protesis), taponamiento cardiaco, embolia pulmonar masiva con fallo del ventriculo derecho, y arritmias sostenidas (taquicardia ventricular, fibrilacion ventricular, bloqueo AV completo). La cardiomiopatia periparto y la tormenta tiroidea son causas menos frecuentes pero importantes.",
    "causasEn": "The most frequent cause is extensive acute myocardial infarction (particularly anterior wall) with loss of more than 40% of functional myocardial mass. Other causes include mechanical complications of infarction (ventricular septal rupture, acute mitral regurgitation from papillary muscle rupture, free wall rupture), fulminant myocarditis, Takotsubo cardiomyopathy, acute decompensation of chronic heart failure, acute valvular disease (endocarditis with valve destruction, prosthetic valve thrombosis), cardiac tamponade, massive pulmonary embolism with right ventricular failure, and sustained arrhythmias (ventricular tachycardia, ventricular fibrillation, complete AV block). Peripartum cardiomyopathy and thyroid storm are less frequent but important causes.",
    "diagnosticoEs": "El diagnostico clinico se basa en la triada de hipotension persistente, signos de hipoperfusion tisular y evidencia de congestion pulmonar. El electrocardiograma puede mostrar cambios isquemicos, arritmias o bloqueos. La ecocardiografia es la herramienta diagnostica clave: permite evaluar la funcion ventricular (fraccion de eyeccion severamente deprimida), detectar complicaciones mecanicas (rotura septal, insuficiencia mitral), evaluar el tamano de las camaras y el pericardio, y guiar el manejo. Los marcadores bioquimicos incluyen troponina elevada, BNP/NT-proBNP elevado, lactato serico elevado, y signos de hipoperfusion organica (creatinina elevada, transaminasas elevadas). El cateterismo de arteria pulmonar (Swan-Ganz) puede confirmar el patron hemodinamico: indice cardiaco <2.2 L/min/m2, presion de enclavamiento >15 mmHg, y resistencias vasculares sistemicas elevadas.",
    "diagnosticoEn": "Clinical diagnosis is based on the triad of persistent hypotension, signs of tissue hypoperfusion, and evidence of pulmonary congestion. The electrocardiogram may show ischemic changes, arrhythmias, or conduction blocks. Echocardiography is the key diagnostic tool: it allows assessment of ventricular function (severely depressed ejection fraction), detection of mechanical complications (septal rupture, mitral regurgitation), evaluation of chamber size and pericardium, and management guidance. Biochemical markers include elevated troponin, elevated BNP/NT-proBNP, elevated serum lactate, and signs of organ hypoperfusion (elevated creatinine, elevated transaminases). Pulmonary artery catheterization (Swan-Ganz) can confirm the hemodynamic pattern: cardiac index <2.2 L/min/m2, wedge pressure >15 mmHg, and elevated systemic vascular resistance.",
    "tratamientoEs": "El tratamiento requiere un abordaje multimodal urgente. Si la causa es infarto de miocardio, la revascularizacion urgente mediante angioplastia primaria o cirugia de bypass es prioritaria (el estudio SHOCK demostro beneficio en supervivencia). Soporte farmacologico: norepinefrina como vasopresor de primera linea para mantener MAP >=65 mmHg, dobutamina o milrinona como inotropico para mejorar la contractilidad y el gasto cardiaco, con precaucion por su efecto vasodilatador. Soporte mecanico circulatorio: balon de contrapulsacion intraaortico (IABP) como primera linea de soporte temporal, dispositivos de asistencia ventricular percutaneos (Impella) para soporte mas robusto, y ECMO venoarterial (VA-ECMO) como rescate en shock refractario. El manejo de la congestion pulmonar incluye diureticos intravenosos (furosemida) con precaucion para no empeorar la hipotension. La ventilacion no invasiva o invasiva puede ser necesaria para el edema pulmonar asociado.",
    "tratamientoEn": "Treatment requires an urgent multimodal approach. If the cause is myocardial infarction, urgent revascularization via primary angioplasty or bypass surgery is the priority (the SHOCK trial demonstrated survival benefit). Pharmacological support: norepinephrine as first-line vasopressor to maintain MAP >=65 mmHg, dobutamine or milrinone as inotropes to improve contractility and cardiac output, with caution due to their vasodilatory effects. Mechanical circulatory support: intra-aortic balloon pump (IABP) as first-line temporary support, percutaneous ventricular assist devices (Impella) for more robust support, and venoarterial ECMO (VA-ECMO) as rescue in refractory shock. Management of pulmonary congestion includes intravenous diuretics (furosemide) with caution to avoid worsening hypotension. Noninvasive or invasive ventilation may be needed for associated pulmonary edema.",
    "monitorizacionEs": "Monitorizacion hemodinamica intensiva: presion arterial invasiva continua, presion venosa central, monitorizacion de gasto cardiaco (ecocardiografia seriada, cateter de arteria pulmonar o sistemas PICCO). Gasto urinario horario como marcador de perfusion renal. Lactato serico seriado cada 2-4 horas (el aclaramiento de lactato >10% en 6 horas se asocia a mejor pronostico). Electrocardiograma continuo para deteccion de arritmias. Ecocardiografia de seguimiento para evaluar respuesta al tratamiento y detectar complicaciones mecanicas nuevas. Monitorizacion de funcion organica: creatinina, transaminasas, bilirrubina, gasometria. Si hay soporte mecanico circulatorio, monitorizacion especifica del dispositivo (posicion, flujos, hemolisis). Valoracion diaria de la necesidad de escalamiento o desescalamiento del soporte.",
    "monitorizacionEn": "Intensive hemodynamic monitoring: continuous invasive arterial pressure, central venous pressure, cardiac output monitoring (serial echocardiography, pulmonary artery catheter, or PiCCO systems). Hourly urine output as a renal perfusion marker. Serial serum lactate every 2-4 hours (lactate clearance >10% at 6 hours is associated with better prognosis). Continuous electrocardiogram for arrhythmia detection. Follow-up echocardiography to assess treatment response and detect new mechanical complications. Organ function monitoring: creatinine, transaminases, bilirubin, blood gas. If mechanical circulatory support is in place, device-specific monitoring (position, flows, hemolysis). Daily assessment of the need for support escalation or de-escalation.",
    "complicacionesEs": [
      "Falla multiorganica por hipoperfusion prolongada",
      "Arritmias ventriculares malignas (taquicardia ventricular, fibrilacion ventricular)",
      "Lesion renal aguda que requiere dialisis",
      "Isquemia mesenterica por bajo gasto",
      "Encefalopatia hipoxica-isquemica",
      "Complicaciones del soporte mecanico: hemolisis, trombosis, sangrado, isquemia de extremidades",
      "Infeccion nosocomial por multiples dispositivos invasivos"
    ],
    "complicacionesEn": [
      "Multi-organ failure from prolonged hypoperfusion",
      "Malignant ventricular arrhythmias (ventricular tachycardia, ventricular fibrillation)",
      "Acute kidney injury requiring dialysis",
      "Mesenteric ischemia from low cardiac output",
      "Hypoxic-ischemic encephalopathy",
      "Complications of mechanical support: hemolysis, thrombosis, bleeding, limb ischemia",
      "Nosocomial infection from multiple invasive devices"
    ],
    "informacionFamiliaEs": "El corazon de su familiar no esta bombeando con la fuerza suficiente para enviar sangre a todo el cuerpo. Esto es una situacion muy grave que requiere tratamiento inmediato e intensivo. Estamos utilizando medicamentos potentes para ayudar al corazon a contraerse mejor y mantener la presion arterial. Si la causa es un infarto, es posible que necesite un cateterismo cardiaco urgente para abrir la arteria bloqueada. En algunos casos, necesitamos dispositivos mecanicos que ayudan al corazon a bombear sangre mientras se recupera. La evolucion depende en gran medida de la causa y de la rapidez con que se inicie el tratamiento. El equipo medico les mantendra informados sobre cada paso. Es una condicion seria, pero con tratamiento agresivo y oportuno, muchos pacientes logran recuperarse.",
    "informacionFamiliaEn": "Your family member's heart is not pumping with enough force to send blood throughout the body. This is a very serious situation that requires immediate, intensive treatment. We are using powerful medications to help the heart contract better and maintain blood pressure. If the cause is a heart attack, they may need urgent cardiac catheterization to open the blocked artery. In some cases, we need mechanical devices that help the heart pump blood while it recovers. The outcome depends largely on the cause and how quickly treatment is started. The medical team will keep you informed about each step. It is a serious condition, but with aggressive and timely treatment, many patients are able to recover."
  },
  {
    "id": "insuficiencia-multiorganica",
    "nombreEs": "Insuficiencia Multiorganica (Falla Organica Multiple)",
    "nombreEn": "Multi-Organ Failure (Multiple Organ Dysfunction Syndrome)",
    "descripcionEs": "La insuficiencia multiorganica, tambien conocida como sindrome de disfuncion organica multiple (MODS), es la disfuncion progresiva y potencialmente irreversible de dos o mas sistemas organicos en un paciente gravemente enfermo, que no puede mantener la homeostasis sin intervencion medica. Representa la via final comun de muchas enfermedades criticas y es la principal causa de muerte en las unidades de cuidados intensivos. La mortalidad aumenta proporcionalmente con el numero de organos afectados: la falla de dos organos tiene una mortalidad del 30-40%, tres organos del 50-60%, y cuatro o mas organos supera el 80%. La escala SOFA (Sequential Organ Failure Assessment) es el instrumento estandar para cuantificar el grado de disfuncion organica, evaluando seis sistemas: respiratorio, coagulacion, hepatico, cardiovascular, neurologico y renal.",
    "descripcionEn": "Multi-organ failure, also known as multiple organ dysfunction syndrome (MODS), is the progressive and potentially irreversible dysfunction of two or more organ systems in a critically ill patient who cannot maintain homeostasis without medical intervention. It represents the final common pathway of many critical illnesses and is the leading cause of death in intensive care units. Mortality increases proportionally with the number of organs affected: two-organ failure has a mortality of 30-40%, three organs 50-60%, and four or more organs exceeds 80%. The SOFA (Sequential Organ Failure Assessment) score is the standard instrument for quantifying the degree of organ dysfunction, evaluating six systems: respiratory, coagulation, hepatic, cardiovascular, neurological, and renal.",
    "categoriaEs": "Sistemica",
    "categoriaEn": "Systemic",
    "sintomasEs": [
      "Hipotension refractaria que requiere vasopresores (fallo cardiovascular)",
      "Hipoxemia severa con necesidad de ventilacion mecanica (fallo respiratorio)",
      "Oliguria o anuria con elevacion de creatinina y urea (fallo renal)",
      "Ictericia con elevacion de bilirrubina y transaminasas (fallo hepatico)",
      "Trombocitopenia y coagulopatia con sangrado (fallo hematologico)",
      "Alteracion del nivel de conciencia, delirium o coma (fallo neurologico)",
      "Ileo paralitico e intolerancia a la nutricion enteral (fallo gastrointestinal)",
      "Hiperglucemia de estres o hipoglucemia (fallo metabolico-endocrino)"
    ],
    "sintomasEn": [
      "Refractory hypotension requiring vasopressors (cardiovascular failure)",
      "Severe hypoxemia requiring mechanical ventilation (respiratory failure)",
      "Oliguria or anuria with elevated creatinine and urea (renal failure)",
      "Jaundice with elevated bilirubin and transaminases (liver failure)",
      "Thrombocytopenia and coagulopathy with bleeding (hematologic failure)",
      "Altered consciousness, delirium, or coma (neurological failure)",
      "Paralytic ileus and intolerance to enteral nutrition (gastrointestinal failure)",
      "Stress hyperglycemia or hypoglycemia (metabolic-endocrine failure)"
    ],
    "causasEs": "La causa mas comun es la sepsis y el shock septico, responsables de mas del 50% de los casos de falla multiorganica. Otras causas incluyen politraumatismo grave, pancreatitis aguda severa, quemaduras extensas, cirugias complejas prolongadas (especialmente cardiacas y abdominales), hemorragia masiva con shock hipovolemico, isquemia-reperfusion tras parada cardiaca, reacciones transfusionales graves, y complicaciones obstetrias como la eclampsia y el sindrome HELLP. La fisiopatologia involucra una respuesta inflamatoria sistemica descontrolada (SIRS) que activa cascadas de citocinas, complemento, coagulacion y radicales libres de oxigeno, causando dano endotelial difuso, alteracion de la microcirculacion, hipoxia tisular y muerte celular progresiva en multiples organos simultaneamente.",
    "causasEn": "The most common cause is sepsis and septic shock, responsible for more than 50% of multi-organ failure cases. Other causes include severe polytrauma, severe acute pancreatitis, extensive burns, prolonged complex surgeries (especially cardiac and abdominal), massive hemorrhage with hypovolemic shock, ischemia-reperfusion after cardiac arrest, severe transfusion reactions, and obstetric complications such as eclampsia and HELLP syndrome. The pathophysiology involves an uncontrolled systemic inflammatory response (SIRS) that activates cytokine cascades, complement, coagulation, and oxygen free radicals, causing diffuse endothelial damage, microcirculatory alteration, tissue hypoxia, and progressive cell death in multiple organs simultaneously.",
    "diagnosticoEs": "El diagnostico se realiza mediante la evaluacion sistematica de la funcion de cada organo utilizando la escala SOFA. Sistema respiratorio: relacion PaO2/FiO2 (SDRA si <=300). Coagulacion: recuento plaquetario (<150,000 indica disfuncion). Hepatico: bilirrubina serica (>1.2 mg/dL). Cardiovascular: necesidad de vasopresores y dosis. Neurologico: escala de Glasgow (<15). Renal: creatinina serica (>1.2 mg/dL) o gasto urinario (<500 mL/dia). Un cambio agudo de >=2 puntos en la SOFA total respecto al basal se asocia a mortalidad hospitalaria >10%. Ademas, se solicitan estudios complementarios: gasometria arterial seriada, panel metabolico completo, perfil de coagulacion (TP, INR, fibrinogeno, dimero D), procalcitonina, lactato serico, hemocultivos y cultivos dirigidos, imagenologia para buscar focos infecciosos o isquemicos tratables.",
    "diagnosticoEn": "Diagnosis is made through systematic evaluation of each organ's function using the SOFA score. Respiratory system: PaO2/FiO2 ratio (ARDS if <=300). Coagulation: platelet count (<150,000 indicates dysfunction). Hepatic: serum bilirubin (>1.2 mg/dL). Cardiovascular: vasopressor requirement and dose. Neurological: Glasgow Coma Scale (<15). Renal: serum creatinine (>1.2 mg/dL) or urine output (<500 mL/day). An acute change of >=2 points in total SOFA from baseline is associated with hospital mortality >10%. Additionally, complementary studies are ordered: serial arterial blood gas, comprehensive metabolic panel, coagulation profile (PT, INR, fibrinogen, D-dimer), procalcitonin, serum lactate, blood cultures and directed cultures, and imaging to identify treatable infectious or ischemic foci.",
    "tratamientoEs": "No existe un tratamiento especifico para la falla multiorganica; el manejo se basa en el soporte de cada organo afectado y el tratamiento agresivo de la causa subyacente. Soporte cardiovascular: vasopresores (norepinefrina, vasopresina) e inotropicos (dobutamina) para mantener perfusion tisular adecuada. Soporte respiratorio: ventilacion mecanica protectora, posicion prono en SDRA severo. Soporte renal: terapia de reemplazo renal continua (TRRC) o hemodialisis intermitente segun estabilidad hemodinamica. Soporte hepatico: manejo de la coagulopatia con plasma fresco y crioprecipitados, control de la encefalopatia hepatica. Soporte hematologico: transfusion de plaquetas si <10,000 o sangrado activo, plasma fresco congelado si INR elevado con sangrado. Nutricion enteral temprana (dentro de 24-48 horas) preferida sobre parenteral. Control glucemico (objetivo 140-180 mg/dL). Profilaxis de trombosis venosa y ulceras de estres. Movilizacion temprana cuando sea hemodinamicamente factible.",
    "tratamientoEn": "There is no specific treatment for multi-organ failure; management is based on supporting each affected organ and aggressively treating the underlying cause. Cardiovascular support: vasopressors (norepinephrine, vasopressin) and inotropes (dobutamine) to maintain adequate tissue perfusion. Respiratory support: protective mechanical ventilation, prone positioning in severe ARDS. Renal support: continuous renal replacement therapy (CRRT) or intermittent hemodialysis depending on hemodynamic stability. Hepatic support: management of coagulopathy with fresh frozen plasma and cryoprecipitate, hepatic encephalopathy control. Hematologic support: platelet transfusion if <10,000 or active bleeding, fresh frozen plasma if elevated INR with bleeding. Early enteral nutrition (within 24-48 hours) preferred over parenteral. Glycemic control (target 140-180 mg/dL). Venous thrombosis and stress ulcer prophylaxis. Early mobilization when hemodynamically feasible.",
    "monitorizacionEs": "Monitorizacion multiparametrica continua en UCI: presion arterial invasiva, presion venosa central, saturacion venosa central de oxigeno (SvO2), gasto cardiaco, pulsioximetria, capnografia, electrocardiograma. Gasto urinario horario. Score SOFA diario para evaluar la trayectoria de la disfuncion organica (mejoria o empeoramiento). Laboratorios seriados cada 6-12 horas: gasometria arterial, lactato, biometria hematica, coagulacion, funcion renal, funcion hepatica, electrolitos, glucosa. Balance hidrico estricto cada 6 horas. Evaluacion de sedacion (RASS) y delirium (CAM-ICU) cada 4-8 horas. Evaluacion nutricional con medicion de residuo gastrico si hay nutricion enteral. Revision diaria de todos los dispositivos invasivos (cateteres, sondas, drenes) para valorar su necesidad y prevenir infecciones. Conferencia multidisciplinaria diaria para definir metas de tratamiento y discutir pronostico.",
    "monitorizacionEn": "Continuous multiparametric ICU monitoring: invasive arterial pressure, central venous pressure, central venous oxygen saturation (SvO2), cardiac output, pulse oximetry, capnography, electrocardiogram. Hourly urine output. Daily SOFA score to assess organ dysfunction trajectory (improvement or worsening). Serial laboratory tests every 6-12 hours: arterial blood gas, lactate, complete blood count, coagulation, renal function, liver function, electrolytes, glucose. Strict fluid balance every 6 hours. Sedation (RASS) and delirium (CAM-ICU) assessment every 4-8 hours. Nutritional assessment with gastric residual measurement if on enteral nutrition. Daily review of all invasive devices (catheters, tubes, drains) to evaluate their necessity and prevent infections. Daily multidisciplinary conference to define treatment goals and discuss prognosis.",
    "complicacionesEs": [
      "Mortalidad elevada proporcional al numero de organos en falla",
      "Coagulacion intravascular diseminada (CID) con sangrado y trombosis",
      "Infecciones nosocomiales multirresistentes por estancia prolongada y multiples dispositivos",
      "Sindrome de desacondicionamiento severo post-UCI",
      "Deterioro cognitivo persistente (sindrome post-cuidados intensivos)",
      "Dependencia de dialisis a largo plazo si el dano renal es irreversible",
      "Fibrosis pulmonar si hubo SDRA prolongado",
      "Trastorno de estres postraumatico en el paciente y la familia"
    ],
    "complicacionesEn": [
      "High mortality proportional to the number of failing organs",
      "Disseminated intravascular coagulation (DIC) with bleeding and thrombosis",
      "Multidrug-resistant nosocomial infections from prolonged stay and multiple devices",
      "Severe post-ICU deconditioning syndrome",
      "Persistent cognitive impairment (post-intensive care syndrome)",
      "Long-term dialysis dependence if renal damage is irreversible",
      "Pulmonary fibrosis if ARDS was prolonged",
      "Post-traumatic stress disorder in the patient and family"
    ],
    "informacionFamiliaEs": "Su familiar esta experimentando una falla simultanea de varios organos vitales, lo cual es una situacion extremadamente grave. Cada organo afectado esta recibiendo soporte especializado: maquinas para ayudar a respirar, medicamentos para mantener la presion arterial, posiblemente dialisis para apoyar los rinones, y transfusiones si es necesario. El equipo medico esta trabajando para identificar y tratar la causa raiz del problema mientras mantiene funcionando cada organo. La evolucion depende de muchos factores, incluyendo la causa subyacente, la edad, el estado de salud previo y la respuesta al tratamiento. Les pedimos paciencia, ya que la recuperacion, cuando ocurre, suele ser lenta y gradual. Es importante que nos compartan informacion sobre los deseos previos de su familiar respecto a su atencion medica. Estamos aqui para responder todas sus preguntas y apoyarles en este momento dificil.",
    "informacionFamiliaEn": "Your family member is experiencing simultaneous failure of several vital organs, which is an extremely serious situation. Each affected organ is receiving specialized support: machines to help breathing, medications to maintain blood pressure, possibly dialysis to support the kidneys, and transfusions if needed. The medical team is working to identify and treat the root cause while keeping each organ functioning. The outcome depends on many factors, including the underlying cause, age, prior health status, and response to treatment. We ask for your patience, as recovery, when it occurs, is usually slow and gradual. It is important that you share information about your family member's prior wishes regarding their medical care. We are here to answer all your questions and support you during this difficult time."
  },
  {
    "id": "coma",
    "nombreEs": "Coma y Alteracion del Estado de Conciencia",
    "nombreEn": "Coma and Altered Consciousness",
    "descripcionEs": "El coma es un estado de inconsciencia profunda en el que el paciente no puede ser despertado por estimulos externos, no abre los ojos, no emite palabras comprensibles y no obedece ordenes. Representa la forma mas severa dentro del espectro de alteraciones del nivel de conciencia que incluye la somnolencia, el estupor y el coma propiamente dicho. La conciencia depende del correcto funcionamiento del sistema reticular activador ascendente (SRAA) en el tronco encefalico y su proyeccion a ambos hemisferios cerebrales. El coma puede resultar de lesiones estructurales (que danan fisicamente estas estructuras) o de causas metabolicas y toxicas (que alteran su funcion quimica). La evaluacion sistematica, incluyendo la escala de coma de Glasgow, el examen de reflejos del tronco encefalico y la neuroimagen urgente, son fundamentales para determinar la causa, guiar el tratamiento y establecer el pronostico.",
    "descripcionEn": "Coma is a state of profound unconsciousness in which the patient cannot be awakened by external stimuli, does not open their eyes, does not utter comprehensible words, and does not obey commands. It represents the most severe form within the spectrum of altered consciousness that includes drowsiness, stupor, and coma itself. Consciousness depends on the proper functioning of the ascending reticular activating system (ARAS) in the brainstem and its projection to both cerebral hemispheres. Coma can result from structural lesions (that physically damage these structures) or from metabolic and toxic causes (that alter their chemical function). Systematic evaluation, including the Glasgow Coma Scale, brainstem reflex examination, and urgent neuroimaging, are essential to determine the cause, guide treatment, and establish prognosis.",
    "categoriaEs": "Neurologica",
    "categoriaEn": "Neurological",
    "sintomasEs": [
      "Ausencia de apertura ocular espontanea o ante estimulos",
      "No emite palabras comprensibles ni sonidos orientados",
      "No obedece ordenes motoras (puede tener respuestas reflejas)",
      "Puntuacion en la escala de Glasgow <=8",
      "Posibles posturas patologicas: decorticacion (flexion) o descerebraccion (extension)",
      "Alteraciones pupilares (midriasis fija, anisocoria, pupilas puntiformes)",
      "Ausencia o alteracion de reflejos del tronco encefalico (corneal, oculocefalico, nauseoso)",
      "Patron respiratorio anormal (Cheyne-Stokes, hiperventilacion central, ataxica, apneustica)"
    ],
    "sintomasEn": [
      "Absence of spontaneous eye opening or in response to stimuli",
      "No comprehensible words or oriented sounds",
      "Does not obey motor commands (may have reflex responses)",
      "Glasgow Coma Scale score <=8",
      "Possible pathological posturing: decortication (flexion) or decerebration (extension)",
      "Pupillary abnormalities (fixed mydriasis, anisocoria, pinpoint pupils)",
      "Absent or altered brainstem reflexes (corneal, oculocephalic, gag)",
      "Abnormal respiratory pattern (Cheyne-Stokes, central hyperventilation, ataxic, apneustic)"
    ],
    "causasEs": "Las causas estructurales incluyen accidente cerebrovascular isquemico extenso (especialmente de arteria basilar o infartos hemisfericos bilaterales), hemorragia intracerebral masiva, hemorragia subaracnoidea con vasoespasmo, traumatismo craneoencefalico severo con hematomas epidurales o subdurales, tumores cerebrales con herniacion, hidrocefalia aguda e infecciones del sistema nervioso central (meningitis, encefalitis, abscesos cerebrales). Las causas metabolicas y toxicas incluyen hipoglucemia severa, cetoacidosis diabetica, estado hiperosmolar, encefalopatia hepatica, encefalopatia uremica, encefalopatia hipoxico-isquemica post-paro cardiaco, intoxicaciones (opiaceos, benzodiacepinas, alcohol, monoxido de carbono, barbituricos), hipotermia severa, crisis tiroidea o mixedema, alteraciones electroliticas severas (hiponatremia, hipercalcemia), y estado epileptico no convulsivo.",
    "causasEn": "Structural causes include extensive ischemic stroke (especially basilar artery or bilateral hemispheric infarcts), massive intracerebral hemorrhage, subarachnoid hemorrhage with vasospasm, severe traumatic brain injury with epidural or subdural hematomas, brain tumors with herniation, acute hydrocephalus, and central nervous system infections (meningitis, encephalitis, brain abscesses). Metabolic and toxic causes include severe hypoglycemia, diabetic ketoacidosis, hyperosmolar state, hepatic encephalopathy, uremic encephalopathy, hypoxic-ischemic encephalopathy after cardiac arrest, intoxications (opioids, benzodiazepines, alcohol, carbon monoxide, barbiturates), severe hypothermia, thyroid storm or myxedema, severe electrolyte abnormalities (hyponatremia, hypercalcemia), and nonconvulsive status epilepticus.",
    "diagnosticoEs": "La evaluacion sistematica del coma incluye: (1) Estabilizacion inicial (ABC: via aerea, respiracion, circulacion). (2) Escala de Glasgow detallada (apertura ocular, respuesta verbal, respuesta motora). (3) Examen pupilar: pupilas simetricas reactivas sugieren causa metabolica; anisocoria con pupila dilatada fija sugiere herniacion uncal; pupilas puntiformes sugieren lesion pontina u opiaceos; pupilas dilatadas fijas bilateralmente sugieren dano cerebral severo. (4) Reflejos del tronco encefalico: corneal, oculocefalico (ojos de muneca), oculovestibular (prueba calorica), nauseoso y tusigeno. (5) Patron respiratorio para localizar el nivel de la lesion. (6) Neuroimagen urgente: TAC de craneo sin contraste como primera linea (descarta hemorragia, herniacion, hidrocefalia, grandes infartos); resonancia magnetica cuando la TAC es normal y se sospecha encefalitis, isquemia del tronco o lesiones de sustancia blanca. (7) Laboratorios: glucosa capilar inmediata, gasometria, electrolitos, funcion renal, hepatica, amoniaco, tiroide, toxicologico, niveles de farmacos. (8) Electroencefalograma para descartar estado epileptico no convulsivo. (9) Puncion lumbar si se sospecha infeccion del SNC (tras descartar contraindicaciones con imagen).",
    "diagnosticoEn": "Systematic coma evaluation includes: (1) Initial stabilization (ABC: airway, breathing, circulation). (2) Detailed Glasgow Coma Scale (eye opening, verbal response, motor response). (3) Pupillary examination: symmetric reactive pupils suggest metabolic cause; anisocoria with fixed dilated pupil suggests uncal herniation; pinpoint pupils suggest pontine lesion or opioids; bilateral fixed dilated pupils suggest severe brain damage. (4) Brainstem reflexes: corneal, oculocephalic (doll's eyes), oculovestibular (caloric testing), gag, and cough. (5) Respiratory pattern to localize the level of the lesion. (6) Urgent neuroimaging: noncontrast head CT as first line (rules out hemorrhage, herniation, hydrocephalus, large infarcts); MRI when CT is normal and encephalitis, brainstem ischemia, or white matter lesions are suspected. (7) Laboratory tests: immediate capillary glucose, blood gas, electrolytes, renal function, liver function, ammonia, thyroid, toxicology screen, drug levels. (8) Electroencephalogram to rule out nonconvulsive status epilepticus. (9) Lumbar puncture if CNS infection is suspected (after ruling out contraindications with imaging).",
    "tratamientoEs": "El tratamiento depende de la causa identificada. Medidas inmediatas universales: asegurar via aerea (intubacion si Glasgow <=8), administrar tiamina 100 mg IV (para prevenir encefalopatia de Wernicke), glucosa IV si hay hipoglucemia documentada o sospechada, y naloxona IV si se sospecha intoxicacion por opiaceos. Para causas estructurales: evacuacion quirurgica urgente de hematomas epidurales/subdurales, drenaje ventricular externo en hidrocefalia aguda, craniectomia descompresiva en infartos malignos, clipaje o embolizacion de aneurismas rotos. Para causas metabolicas: correccion de la alteracion metabolica especifica (glucosa para hipoglucemia, solucion salina hipertonica para hiponatremia severa, dialisis para encefalopatia uremica, lactulosa y rifaximina para encefalopatia hepatica, levotiroxina para mixedema). Para estado epileptico: benzodiacepinas IV (lorazepam, midazolam), seguidas de fenitoina o levetiracetam IV. Manejo de la presion intracraneal elevada: cabecera a 30 grados, manitol o solucion salina hipertonica, hiperventilacion controlada temporal, sedacion con propofol, y potencialmente cirugia descompresiva.",
    "tratamientoEn": "Treatment depends on the identified cause. Universal immediate measures: secure the airway (intubation if Glasgow <=8), administer thiamine 100 mg IV (to prevent Wernicke encephalopathy), IV glucose if hypoglycemia is documented or suspected, and IV naloxone if opioid intoxication is suspected. For structural causes: urgent surgical evacuation of epidural/subdural hematomas, external ventricular drain for acute hydrocephalus, decompressive craniectomy for malignant infarcts, clipping or embolization of ruptured aneurysms. For metabolic causes: correction of the specific metabolic derangement (glucose for hypoglycemia, hypertonic saline for severe hyponatremia, dialysis for uremic encephalopathy, lactulose and rifaximin for hepatic encephalopathy, levothyroxine for myxedema). For status epilepticus: IV benzodiazepines (lorazepam, midazolam), followed by phenytoin or levetiracetam IV. Management of elevated intracranial pressure: head of bed at 30 degrees, mannitol or hypertonic saline, temporary controlled hyperventilation, sedation with propofol, and potentially decompressive surgery.",
    "monitorizacionEs": "Evaluacion neurologica frecuente (cada 1-2 horas): escala de Glasgow, tamano y reactividad pupilar, reflejos del tronco encefalico, patron respiratorio y respuestas motoras. Monitorizacion de presion intracraneal (PIC) invasiva si hay sospecha de hipertension intracraneal (objetivo PIC <22 mmHg y presion de perfusion cerebral 60-70 mmHg). Electroencefalograma continuo si hay sospecha de crisis epilepticas no convulsivas. Neuroimagen de seguimiento (TAC o RM) segun evolucion clinica. Monitorizacion de parametros metabolicos: glucosa capilar cada 4-6 horas, electrolitos seriados, gasometria, funcion renal y hepatica. Control de temperatura (evitar hipertermia, considerar normotermia terapeutica post-paro cardiaco). Monitorizacion de la profundidad de sedacion si se estan usando farmacos sedantes. Evaluacion pronostica a las 72 horas post-lesion utilizando criterios multimodales: examen clinico, potenciales evocados somatosensoriales, EEG, biomarcadores (enolasa neuronal especifica) y neuroimagen.",
    "monitorizacionEn": "Frequent neurological assessment (every 1-2 hours): Glasgow Coma Scale, pupil size and reactivity, brainstem reflexes, respiratory pattern, and motor responses. Invasive intracranial pressure (ICP) monitoring if intracranial hypertension is suspected (target ICP <22 mmHg and cerebral perfusion pressure 60-70 mmHg). Continuous electroencephalogram if nonconvulsive seizures are suspected. Follow-up neuroimaging (CT or MRI) based on clinical evolution. Metabolic parameter monitoring: capillary glucose every 4-6 hours, serial electrolytes, blood gas, renal and liver function. Temperature control (avoid hyperthermia, consider therapeutic normothermia post-cardiac arrest). Sedation depth monitoring if sedative drugs are being used. Prognostic evaluation at 72 hours post-injury using multimodal criteria: clinical examination, somatosensory evoked potentials, EEG, biomarkers (neuron-specific enolase), and neuroimaging.",
    "complicacionesEs": [
      "Herniacion cerebral (uncal, central, amigdalina) potencialmente mortal",
      "Estado vegetativo persistente si no hay recuperacion de la conciencia",
      "Neumonia por aspiracion y neumonia nosocomial",
      "Ulceras por presion por inmovilidad prolongada",
      "Trombosis venosa profunda y embolia pulmonar",
      "Contracturas articulares y atrofia muscular severa",
      "Crisis epilepticas sintomaticas agudas o epilepsia postraumatica",
      "Dano cerebral secundario por hipertension intracraneal, hipoxia o hipotension"
    ],
    "complicacionesEn": [
      "Brain herniation (uncal, central, tonsillar) — potentially fatal",
      "Persistent vegetative state if consciousness is not recovered",
      "Aspiration pneumonia and nosocomial pneumonia",
      "Pressure ulcers from prolonged immobility",
      "Deep vein thrombosis and pulmonary embolism",
      "Joint contractures and severe muscle atrophy",
      "Acute symptomatic seizures or post-traumatic epilepsy",
      "Secondary brain damage from intracranial hypertension, hypoxia, or hypotension"
    ],
    "informacionFamiliaEs": "Su familiar se encuentra en un estado de inconsciencia profunda llamado coma, lo que significa que no puede responder al entorno ni comunicarse en este momento. El equipo medico esta realizando multiples estudios para determinar la causa exacta y aplicar el tratamiento mas adecuado. Estamos protegiendo su via aerea con un tubo de respiracion, monitorizando su cerebro de cerca y manteniendo su cuerpo en las mejores condiciones posibles para favorecer la recuperacion. El pronostico depende de la causa del coma, su severidad y la respuesta al tratamiento. En muchos casos, necesitamos esperar al menos 72 horas para tener una mejor idea de la evolucion probable. Les recomendamos que hablen con su familiar, tomen su mano y esten presentes: aunque no pueda responder, algunos pacientes recuerdan haber escuchado voces de sus seres queridos. El equipo medico les mantendra informados diariamente y respondera todas sus preguntas con honestidad.",
    "informacionFamiliaEn": "Your family member is in a state of profound unconsciousness called coma, meaning they cannot respond to the environment or communicate at this time. The medical team is performing multiple tests to determine the exact cause and apply the most appropriate treatment. We are protecting their airway with a breathing tube, closely monitoring their brain, and maintaining their body in the best possible condition to promote recovery. The prognosis depends on the cause of the coma, its severity, and the response to treatment. In many cases, we need to wait at least 72 hours to have a better idea of the likely outcome. We encourage you to talk to your family member, hold their hand, and be present: even though they may not respond, some patients remember hearing their loved ones' voices. The medical team will keep you informed daily and answer all your questions honestly."
  },
  {
    "id": "cetoacidosis-diabetica",
    "nombreEs": "Cetoacidosis Diabetica (CAD)",
    "nombreEn": "Diabetic Ketoacidosis (DKA)",
    "descripcionEs": "La cetoacidosis diabetica es una complicacion aguda grave de la diabetes mellitus, mas frecuente en diabetes tipo 1 pero que tambien puede ocurrir en diabetes tipo 2 bajo estres fisiologico extremo. Se caracteriza por la triada de hiperglucemia (generalmente >250 mg/dL), acidosis metabolica con brecha anionica elevada (pH <7.30, bicarbonato <18 mEq/L) y cetonemia o cetonuria significativas. Resulta de una deficiencia absoluta o relativa de insulina que impide la utilizacion de glucosa por las celulas, obligando al organismo a utilizar acidos grasos como fuente de energia, lo que genera cuerpos cetonicos (acetoacetato, beta-hidroxibutirato, acetona) que se acumulan en la sangre causando acidosis. Sin tratamiento oportuno, la CAD puede progresar a coma, edema cerebral (especialmente en ninos), arritmias cardiacas y muerte. La mortalidad con tratamiento adecuado es menor al 1% en adultos, pero aumenta significativamente si hay retraso diagnostico o comorbilidades graves.",
    "descripcionEn": "Diabetic ketoacidosis is a serious acute complication of diabetes mellitus, more common in type 1 diabetes but which can also occur in type 2 diabetes under extreme physiological stress. It is characterized by the triad of hyperglycemia (generally >250 mg/dL), metabolic acidosis with elevated anion gap (pH <7.30, bicarbonate <18 mEq/L), and significant ketonemia or ketonuria. It results from an absolute or relative insulin deficiency that prevents glucose utilization by cells, forcing the body to use fatty acids as an energy source, which generates ketone bodies (acetoacetate, beta-hydroxybutyrate, acetone) that accumulate in the blood causing acidosis. Without timely treatment, DKA can progress to coma, cerebral edema (especially in children), cardiac arrhythmias, and death. Mortality with adequate treatment is less than 1% in adults but increases significantly if there is diagnostic delay or severe comorbidities.",
    "categoriaEs": "Metabolica",
    "categoriaEn": "Metabolic",
    "sintomasEs": [
      "Poliuria intensa (orinar excesivamente) y polidipsia (sed excesiva)",
      "Nauseas, vomitos y dolor abdominal difuso (puede simular abdomen agudo)",
      "Respiracion de Kussmaul: rapida y profunda (compensacion respiratoria de la acidosis)",
      "Aliento con olor afrutado o a acetona",
      "Deshidratacion severa: piel seca, mucosas secas, turgencia cutanea disminuida, taquicardia",
      "Debilidad generalizada, fatiga y malestar progresivo",
      "Alteracion del nivel de conciencia: desde confusion hasta coma en casos graves",
      "Vision borrosa por cambios osmoticos en el cristalino"
    ],
    "sintomasEn": [
      "Intense polyuria (excessive urination) and polydipsia (excessive thirst)",
      "Nausea, vomiting, and diffuse abdominal pain (may mimic acute abdomen)",
      "Kussmaul breathing: rapid and deep (respiratory compensation for acidosis)",
      "Fruity or acetone-smelling breath",
      "Severe dehydration: dry skin, dry mucous membranes, decreased skin turgor, tachycardia",
      "Generalized weakness, fatigue, and progressive malaise",
      "Altered level of consciousness: from confusion to coma in severe cases",
      "Blurred vision from osmotic changes in the lens"
    ],
    "causasEs": "Los factores desencadenantes mas frecuentes incluyen: infecciones (neumonia, infeccion urinaria, gastroenteritis, celulitis — responsables del 30-40% de los episodios), omision o dosis inadecuada de insulina (20-25% de los casos), debut de diabetes tipo 1 (primera manifestacion en pacientes no diagnosticados previamente), estres fisiologico (infarto de miocardio, accidente cerebrovascular, cirugia, trauma), medicamentos (corticosteroides, tiazidas, antipsicoticos atipicos, inhibidores SGLT2), consumo excesivo de alcohol, uso de drogas recreativas (cocaina), pancreatitis aguda, embarazo, y situaciones de estres emocional severo. En hasta el 20% de los casos no se identifica un factor desencadenante claro. La cetoacidosis euglicemica (glucosa <250 mg/dL) puede ocurrir con inhibidores SGLT2, embarazo o ayuno prolongado.",
    "causasEn": "The most frequent triggering factors include: infections (pneumonia, urinary tract infection, gastroenteritis, cellulitis — responsible for 30-40% of episodes), omission or inadequate insulin dosing (20-25% of cases), new-onset type 1 diabetes (first manifestation in previously undiagnosed patients), physiological stress (myocardial infarction, stroke, surgery, trauma), medications (corticosteroids, thiazides, atypical antipsychotics, SGLT2 inhibitors), excessive alcohol consumption, recreational drug use (cocaine), acute pancreatitis, pregnancy, and severe emotional stress situations. In up to 20% of cases, no clear triggering factor is identified. Euglycemic ketoacidosis (glucose <250 mg/dL) can occur with SGLT2 inhibitors, pregnancy, or prolonged fasting.",
    "diagnosticoEs": "El diagnostico se confirma con la triada bioquimica: (1) Hiperglucemia: glucosa plasmatica >250 mg/dL (excepto en cetoacidosis euglicemica). (2) Acidosis metabolica: pH arterial <7.30, bicarbonato serico <18 mEq/L, brecha anionica elevada (>12 mEq/L). (3) Cetonemia: beta-hidroxibutirato serico >3 mmol/L o cetonuria fuertemente positiva. La gravedad se clasifica en leve (pH 7.25-7.30, bicarbonato 15-18), moderada (pH 7.00-7.24, bicarbonato 10-14.9) y severa (pH <7.00, bicarbonato <10, alteracion de conciencia). Laboratorios complementarios esenciales: panel metabolico completo (sodio, potasio, cloro, calcio, fosforo, magnesio — el sodio corregido se calcula sumando 1.6 mEq/L por cada 100 mg/dL de glucosa sobre 100), osmolaridad serica, gasometria arterial, biometria hematica, funcion renal, hemocultivos y urocultivo si se sospecha infeccion, electrocardiograma (para evaluar efectos del potasio), y radiografia de torax.",
    "diagnosticoEn": "Diagnosis is confirmed with the biochemical triad: (1) Hyperglycemia: plasma glucose >250 mg/dL (except in euglycemic ketoacidosis). (2) Metabolic acidosis: arterial pH <7.30, serum bicarbonate <18 mEq/L, elevated anion gap (>12 mEq/L). (3) Ketonemia: serum beta-hydroxybutyrate >3 mmol/L or strongly positive ketonuria. Severity is classified as mild (pH 7.25-7.30, bicarbonate 15-18), moderate (pH 7.00-7.24, bicarbonate 10-14.9), and severe (pH <7.00, bicarbonate <10, altered consciousness). Essential complementary labs: comprehensive metabolic panel (sodium, potassium, chloride, calcium, phosphorus, magnesium — corrected sodium is calculated by adding 1.6 mEq/L for each 100 mg/dL of glucose above 100), serum osmolality, arterial blood gas, complete blood count, renal function, blood and urine cultures if infection is suspected, electrocardiogram (to evaluate potassium effects), and chest radiograph.",
    "tratamientoEs": "El tratamiento sigue un protocolo estandarizado con cuatro pilares: (1) Reposicion de liquidos: solucion salina normal (NaCl 0.9%) a 15-20 mL/kg/h (1-1.5 L) en la primera hora, luego 250-500 mL/h segun estado de hidratacion y sodio corregido (cambiar a solucion salina al 0.45% si el sodio corregido es alto); cuando la glucosa baja a 200 mg/dL, agregar dextrosa al 5% para permitir continuar la insulina y evitar hipoglucemia. (2) Insulina: infusion intravenosa continua de insulina regular a 0.1-0.14 U/kg/h (o bolo de 0.1 U/kg seguido de 0.1 U/kg/h); la glucosa debe descender 50-75 mg/dL por hora; no suspender la infusion hasta que se resuelva la cetoacidosis (pH >7.30, bicarbonato >18, brecha anionica normal, beta-hidroxibutirato <1 mmol/L). (3) Reposicion de potasio: si K+ <3.3 mEq/L, reponer potasio ANTES de iniciar insulina (riesgo de arritmia letal); si K+ 3.3-5.3, agregar 20-30 mEq de KCl por litro de liquidos; si K+ >5.3, no agregar potasio pero monitorizar cada 2 horas. (4) Bicarbonato: solo si pH <6.9 (100 mEq de bicarbonato de sodio en 400 mL de agua con 20 mEq KCl en 2 horas). Buscar y tratar el factor desencadenante (antibioticos si hay infeccion). Transicion a insulina subcutanea cuando el paciente tolere la via oral y la cetoacidosis este resuelta, superponiendo la insulina subcutanea con la infusion durante 1-2 horas.",
    "tratamientoEn": "Treatment follows a standardized protocol with four pillars: (1) Fluid replacement: normal saline (NaCl 0.9%) at 15-20 mL/kg/h (1-1.5 L) in the first hour, then 250-500 mL/h based on hydration status and corrected sodium (switch to 0.45% saline if corrected sodium is high); when glucose drops to 200 mg/dL, add 5% dextrose to allow continued insulin and prevent hypoglycemia. (2) Insulin: continuous IV regular insulin infusion at 0.1-0.14 U/kg/h (or 0.1 U/kg bolus followed by 0.1 U/kg/h); glucose should decrease 50-75 mg/dL per hour; do not discontinue infusion until ketoacidosis resolves (pH >7.30, bicarbonate >18, normal anion gap, beta-hydroxybutyrate <1 mmol/L). (3) Potassium replacement: if K+ <3.3 mEq/L, replace potassium BEFORE starting insulin (risk of lethal arrhythmia); if K+ 3.3-5.3, add 20-30 mEq KCl per liter of fluids; if K+ >5.3, do not add potassium but monitor every 2 hours. (4) Bicarbonate: only if pH <6.9 (100 mEq sodium bicarbonate in 400 mL water with 20 mEq KCl over 2 hours). Identify and treat the triggering factor (antibiotics if infection). Transition to subcutaneous insulin when the patient tolerates oral intake and ketoacidosis has resolved, overlapping subcutaneous insulin with the infusion for 1-2 hours.",
    "monitorizacionEs": "Monitorizacion intensiva durante las primeras 24-48 horas: glucosa capilar cada hora durante la infusion de insulina. Gasometria venosa y electrolitos (sodio, potasio, cloro, bicarbonato, brecha anionica) cada 2-4 horas hasta resolucion de la acidosis. Beta-hidroxibutirato serico cada 4-6 horas si esta disponible (marcador mas fiable de resolucion que las cetonas urinarias). Balance hidrico estricto con medicion de ingresos y egresos horarios. Gasto urinario horario (objetivo >0.5 mL/kg/h). Electrocardiograma continuo para monitorizar efectos de las alteraciones del potasio (ondas T picudas en hiperpotasemia, aplanamiento de T y ondas U en hipopotasemia). Nivel de conciencia cada 2-4 horas (especialmente en ninos, por el riesgo de edema cerebral: vigilar cefalea, bradicardia, hipertension, deterioro neurologico). Signos vitales cada 1-2 horas. Fosforo y magnesio serico cada 6-12 horas (pueden descender significativamente con el tratamiento). Evaluacion de resolucion: pH >7.30, bicarbonato >18 mEq/L, brecha anionica <=12, glucosa <200 mg/dL, paciente tolerando via oral.",
    "monitorizacionEn": "Intensive monitoring during the first 24-48 hours: capillary glucose every hour during insulin infusion. Venous blood gas and electrolytes (sodium, potassium, chloride, bicarbonate, anion gap) every 2-4 hours until acidosis resolution. Serum beta-hydroxybutyrate every 4-6 hours if available (more reliable resolution marker than urine ketones). Strict fluid balance with hourly intake and output measurement. Hourly urine output (target >0.5 mL/kg/h). Continuous electrocardiogram to monitor effects of potassium abnormalities (peaked T waves in hyperkalemia, T-wave flattening and U waves in hypokalemia). Level of consciousness every 2-4 hours (especially in children, due to cerebral edema risk: watch for headache, bradycardia, hypertension, neurological deterioration). Vital signs every 1-2 hours. Serum phosphorus and magnesium every 6-12 hours (may decrease significantly with treatment). Resolution criteria: pH >7.30, bicarbonate >18 mEq/L, anion gap <=12, glucose <200 mg/dL, patient tolerating oral intake.",
    "complicacionesEs": [
      "Hipoglucemia por exceso de insulina (la complicacion iatrogena mas frecuente)",
      "Hipopotasemia severa con arritmias cardiacas potencialmente mortales",
      "Edema cerebral (principalmente en ninos y adolescentes, mortalidad 20-40%)",
      "Sindrome de dificultad respiratoria aguda por sobrecarga hidrica",
      "Trombosis venosa o arterial por deshidratacion y hemoconcentracion",
      "Rabdomiolisis por deshidratacion severa e hipofosfatemia",
      "Acidosis metabolica hiperclormica durante la recuperacion (por exceso de solucion salina)",
      "Recurrencia de cetoacidosis por suspension prematura de insulina intravenosa"
    ],
    "complicacionesEn": [
      "Hypoglycemia from excess insulin (the most common iatrogenic complication)",
      "Severe hypokalemia with potentially fatal cardiac arrhythmias",
      "Cerebral edema (primarily in children and adolescents, 20-40% mortality)",
      "Acute respiratory distress syndrome from fluid overload",
      "Venous or arterial thrombosis from dehydration and hemoconcentration",
      "Rhabdomyolysis from severe dehydration and hypophosphatemia",
      "Hyperchloremic metabolic acidosis during recovery (from excess saline)",
      "Recurrent ketoacidosis from premature discontinuation of intravenous insulin"
    ],
    "informacionFamiliaEs": "Su familiar tiene una complicacion seria de la diabetes en la que el cuerpo, al no poder usar la glucosa correctamente por falta de insulina, comienza a usar las grasas como energia, produciendo sustancias acidas (cetonas) que se acumulan en la sangre y la vuelven demasiado acida. Esto causa deshidratacion severa, nauseas, vomitos y, en casos graves, puede afectar el nivel de conciencia. El tratamiento consiste en administrar insulina por via intravenosa, reponer los liquidos perdidos y corregir los desequilibrios de minerales como el potasio. Los primeros dias requieren monitorizacion muy frecuente con analisis de sangre cada pocas horas. La mayoria de los pacientes mejoran significativamente dentro de las primeras 24-48 horas con tratamiento adecuado. Es fundamental identificar que provoco este episodio (una infeccion, olvido de la insulina, etc.) para prevenirlo en el futuro. Antes del alta, el equipo de diabetes le ensenara a su familiar como reconocer los signos de alerta temprana y cuando buscar ayuda medica urgente.",
    "informacionFamiliaEn": "Your family member has a serious diabetes complication in which the body, unable to use glucose properly due to lack of insulin, begins using fats for energy, producing acidic substances (ketones) that accumulate in the blood and make it too acidic. This causes severe dehydration, nausea, vomiting, and in severe cases can affect the level of consciousness. Treatment consists of administering insulin intravenously, replacing lost fluids, and correcting mineral imbalances such as potassium. The first days require very frequent monitoring with blood tests every few hours. Most patients improve significantly within the first 24-48 hours with adequate treatment. It is essential to identify what triggered this episode (an infection, missed insulin, etc.) to prevent it in the future. Before discharge, the diabetes team will teach your family member how to recognize early warning signs and when to seek urgent medical help."
  }
]`);

// ---------------------------------------------------------------------------
// Helper functions
// ---------------------------------------------------------------------------

export function buscarMedicinaIntensiva(termino: string): MedicinaIntensivaEntry[] {
  const t = termino.toLowerCase();
  return MEDICINA_INTENSIVA_ENTRIES.filter(
    (e) =>
      e.nombreEs.toLowerCase().includes(t) ||
      e.nombreEn.toLowerCase().includes(t) ||
      e.descripcionEs.toLowerCase().includes(t) ||
      e.descripcionEn.toLowerCase().includes(t)
  );
}

export function getMedicinaIntensivaById(
  id: string
): MedicinaIntensivaEntry | undefined {
  return MEDICINA_INTENSIVA_ENTRIES.find((e) => e.id === id);
}

export function getMedicinaIntensivaPorCategoria(
  categoria: string
): MedicinaIntensivaEntry[] {
  const c = categoria.toLowerCase();
  return MEDICINA_INTENSIVA_ENTRIES.filter(
    (e) =>
      e.categoriaEs.toLowerCase().includes(c) ||
      e.categoriaEn.toLowerCase().includes(c)
  );
}
