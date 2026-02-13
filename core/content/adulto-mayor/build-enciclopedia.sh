#!/bin/bash
# Build script for adulto-mayor-enciclopedia.ts
# This assembles the file from heredocs to avoid token limits

TARGET="/Users/dannygomez/SOMA Builds/SOMA-Combined Build/core/content/adulto-mayor/adulto-mayor-enciclopedia.ts"

cat > "$TARGET" << 'PART1'
/**
 * Enciclopedia del Adulto Mayor - SOMA App
 * Guía integral de salud geriátrica / Comprehensive Geriatric Health Guide
 *
 * Contenido educativo bilingüe (español primero) para pacientes mayores y cuidadores.
 * Bilingual educational content (Spanish first) for elderly patients and caregivers.
 */

// ---------------------------------------------------------------------------
// Interfaces
// ---------------------------------------------------------------------------

export interface AdultoMayorEntry {
  id: string;
  nombreEs: string;
  nombreEn: string;
  categoriaEs: string;
  categoriaEn: string;
  descripcionEs: string;
  descripcionEn: string;
  sintomasEs: string[];
  sintomasEn: string[];
  factoresRiesgoEs: string[];
  factoresRiesgoEn: string[];
  prevencionEs: string[];
  prevencionEn: string[];
  tratamientoEs: string[];
  tratamientoEn: string[];
  consejosParaCuidadoresEs: string[];
  consejosParaCuidadoresEn: string[];
  adaptacionesHogarEs: string[];
  adaptacionesHogarEn: string[];
  recursosEs: string[];
  recursosEn: string[];
  medicamentosComunes?: string[];
  senalesAlertaEs: string[];
  senalesAlertaEn: string[];
}

export interface PrevencionCaidasEntry {
  id: string;
  temaEs: string;
  temaEn: string;
  descripcionEs: string;
  descripcionEn: string;
  consejosEs: string[];
  consejosEn: string[];
  ejerciciosEs: string[];
  ejerciciosEn: string[];
}

export interface PolifarmaciaEntry {
  id: string;
  temaEs: string;
  temaEn: string;
  descripcionEs: string;
  descripcionEn: string;
  riesgosEs: string[];
  riesgosEn: string[];
  consejosEs: string[];
  consejosEn: string[];
  preguntasParaMedicoEs: string[];
  preguntasParaMedicoEn: string[];
}

// ---------------------------------------------------------------------------
// Data - Condiciones del Adulto Mayor (30+)
// ---------------------------------------------------------------------------

const adultoMayorData: AdultoMayorEntry[] = JSON.parse(`[
PART1

# Now append conditions 1-6
cat >> "$TARGET" << 'COND1'
  {
    "id": "demencia-alzheimer",
    "nombreEs": "Demencia y Enfermedad de Alzheimer",
    "nombreEn": "Dementia and Alzheimer's Disease",
    "categoriaEs": "Trastornos Cognitivos",
    "categoriaEn": "Cognitive Disorders",
    "descripcionEs": "La demencia es un síndrome caracterizado por deterioro progresivo de la memoria, el pensamiento y la capacidad para realizar actividades diarias. El Alzheimer es la causa más común, representando el 60-70% de los casos. Afecta principalmente a personas mayores de 65 años y su progresión es gradual.",
    "descripcionEn": "Dementia is a syndrome characterized by progressive deterioration of memory, thinking, and the ability to perform daily activities. Alzheimer's is the most common cause, accounting for 60-70% of cases. It mainly affects people over 65 and progresses gradually.",
    "sintomasEs": ["Pérdida de memoria reciente que afecta la vida diaria", "Dificultad para planificar o resolver problemas", "Confusión con el tiempo o el lugar", "Problemas con el lenguaje hablado o escrito", "Extraviar objetos y no poder recorrer los pasos", "Cambios en el juicio o la toma de decisiones", "Retraimiento social", "Cambios de humor y personalidad", "Dificultad para completar tareas familiares", "Problemas con imágenes visuales y relaciones espaciales"],
    "sintomasEn": ["Recent memory loss affecting daily life", "Difficulty planning or solving problems", "Confusion with time or place", "Problems with spoken or written language", "Misplacing objects and inability to retrace steps", "Changes in judgment or decision-making", "Social withdrawal", "Mood and personality changes", "Difficulty completing familiar tasks", "Problems with visual images and spatial relationships"],
    "factoresRiesgoEs": ["Edad avanzada (mayor de 65 años)", "Antecedentes familiares de demencia", "Genética (gen APOE-e4)", "Traumatismo craneoencefálico previo", "Enfermedades cardiovasculares", "Diabetes no controlada", "Aislamiento social", "Bajo nivel educativo", "Depresión no tratada", "Pérdida auditiva no corregida"],
    "factoresRiesgoEn": ["Advanced age (over 65)", "Family history of dementia", "Genetics (APOE-e4 gene)", "Previous head trauma", "Cardiovascular diseases", "Uncontrolled diabetes", "Social isolation", "Low educational level", "Untreated depression", "Uncorrected hearing loss"],
    "prevencionEs": ["Mantener actividad física regular (caminar 30 minutos diarios)", "Estimulación cognitiva (lectura, crucigramas, juegos de mesa)", "Mantener vida social activa", "Controlar presión arterial, diabetes y colesterol", "Seguir dieta mediterránea", "Dormir 7-8 horas", "Corregir pérdida auditiva con audífonos", "Evitar consumo excesivo de alcohol", "No fumar", "Tratar la depresión oportunamente"],
    "prevencionEn": ["Maintain regular physical activity (walk 30 minutes daily)", "Cognitive stimulation (reading, crosswords, board games)", "Maintain active social life", "Control blood pressure, diabetes, and cholesterol", "Follow Mediterranean diet", "Sleep 7-8 hours", "Correct hearing loss with hearing aids", "Avoid excessive alcohol consumption", "Do not smoke", "Treat depression promptly"],
    "tratamientoEs": ["Inhibidores de colinesterasa (donepezilo, rivastigmina, galantamina)", "Memantina para etapas moderadas a severas", "Terapia de estimulación cognitiva", "Terapia ocupacional para mantener independencia", "Musicoterapia y arteterapia", "Manejo de síntomas conductuales sin medicamentos primero", "Adaptación del entorno para seguridad", "Apoyo y educación al cuidador", "Grupos de apoyo para paciente y familia", "Planificación anticipada de cuidados"],
    "tratamientoEn": ["Cholinesterase inhibitors (donepezil, rivastigmine, galantamine)", "Memantine for moderate to severe stages", "Cognitive stimulation therapy", "Occupational therapy to maintain independence", "Music therapy and art therapy", "Manage behavioral symptoms without medications first", "Environmental adaptation for safety", "Caregiver support and education", "Support groups for patient and family", "Advance care planning"],
    "consejosParaCuidadoresEs": ["Establezca rutinas diarias consistentes", "Use un tono de voz calmado y oraciones cortas", "No discuta ni corrija constantemente", "Ofrezca opciones simples (dos alternativas)", "Mantenga fotos y objetos familiares visibles", "Cuide su propia salud física y emocional", "Busque grupos de apoyo para cuidadores", "Solicite ayuda cuando la necesite, no espere al agotamiento", "Planifique actividades significativas y agradables", "Aprenda sobre las etapas de la enfermedad"],
    "consejosParaCuidadoresEn": ["Establish consistent daily routines", "Use a calm tone of voice and short sentences", "Do not argue or constantly correct", "Offer simple choices (two alternatives)", "Keep photos and familiar objects visible", "Take care of your own physical and emotional health", "Seek caregiver support groups", "Ask for help when needed, don't wait until exhaustion", "Plan meaningful and enjoyable activities", "Learn about the stages of the disease"],
    "adaptacionesHogarEs": ["Instalar cerraduras de seguridad en puertas exteriores", "Retirar objetos peligrosos (cuchillos, productos químicos)", "Colocar etiquetas con imágenes en cajones y puertas", "Mantener iluminación adecuada día y noche", "Instalar detectores de gas y humo", "Usar relojes y calendarios grandes y visibles", "Colocar barandales en pasillos y escaleras", "Eliminar espejos si causan confusión", "Simplificar la decoración del hogar"],
    "adaptacionesHogarEn": ["Install safety locks on exterior doors", "Remove dangerous objects (knives, chemicals)", "Place picture labels on drawers and doors", "Maintain adequate lighting day and night", "Install gas and smoke detectors", "Use large, visible clocks and calendars", "Place handrails in hallways and stairs", "Remove mirrors if they cause confusion", "Simplify home decoration"],
    "recursosEs": ["Asociación de Alzheimer de su país", "Línea de ayuda para cuidadores", "Centros de día especializados en demencia", "Servicios de respiro para cuidadores", "Guías de planificación legal y financiera"],
    "recursosEn": ["Alzheimer's Association in your country", "Caregiver helpline", "Day centers specialized in dementia", "Respite services for caregivers", "Legal and financial planning guides"],
    "medicamentosComunes": ["Donepezilo (Aricept)", "Rivastigmina (Exelon)", "Galantamina (Razadyne)", "Memantina (Namenda)", "Lecanemab (Leqembi) - etapas iniciales"],
    "senalesAlertaEs": ["Deambulación nocturna o intento de salir de casa", "Agresividad o agitación severa e inusual", "Dejar de comer o beber por más de 24 horas", "Caída con golpe en la cabeza", "Fiebre alta con confusión aumentada", "Incapacidad repentina para caminar o hablar"],
    "senalesAlertaEn": ["Nighttime wandering or attempting to leave home", "Severe and unusual aggression or agitation", "Stopping eating or drinking for more than 24 hours", "Fall with head injury", "High fever with increased confusion", "Sudden inability to walk or speak"]
  },
  {
    "id": "parkinson",
    "nombreEs": "Enfermedad de Parkinson",
    "nombreEn": "Parkinson's Disease",
    "categoriaEs": "Trastornos Neurológicos",
    "categoriaEn": "Neurological Disorders",
    "descripcionEs": "Enfermedad neurodegenerativa progresiva que afecta el movimiento. Se produce por la pérdida de neuronas productoras de dopamina en el cerebro. Afecta principalmente a personas mayores de 60 años y es más común en hombres.",
    "descripcionEn": "Progressive neurodegenerative disease affecting movement. It results from the loss of dopamine-producing neurons in the brain. It mainly affects people over 60 and is more common in men.",
    "sintomasEs": ["Temblor en reposo (generalmente comienza en una mano)", "Rigidez muscular", "Lentitud de movimientos (bradicinesia)", "Problemas de equilibrio y postura encorvada", "Letra pequeña (micrografía)", "Voz baja y monótona", "Estreñimiento", "Pérdida del olfato", "Trastornos del sueño", "Expresión facial reducida (cara de máscara)"],
    "sintomasEn": ["Resting tremor (usually starts in one hand)", "Muscle rigidity", "Slowness of movement (bradykinesia)", "Balance problems and stooped posture", "Small handwriting (micrographia)", "Low, monotone voice", "Constipation", "Loss of smell", "Sleep disorders", "Reduced facial expression (mask face)"],
    "factoresRiesgoEs": ["Edad avanzada (mayores de 60)", "Sexo masculino", "Antecedentes familiares", "Exposición a pesticidas y herbicidas", "Traumatismo craneal previo", "Exposición a metales pesados", "Vivir en zonas rurales con uso de agroquímicos"],
    "factoresRiesgoEn": ["Advanced age (over 60)", "Male sex", "Family history", "Exposure to pesticides and herbicides", "Previous head trauma", "Exposure to heavy metals", "Living in rural areas with agrochemical use"],
    "prevencionEs": ["Ejercicio aeróbico regular (puede retrasar la progresión)", "Consumo de cafeína con moderación (posible efecto protector)", "Dieta rica en antioxidantes", "Evitar exposición a pesticidas", "Mantener actividad física y mental", "Consultar ante primeros síntomas para diagnóstico temprano"],
    "prevencionEn": ["Regular aerobic exercise (may delay progression)", "Moderate caffeine consumption (possible protective effect)", "Diet rich in antioxidants", "Avoid pesticide exposure", "Maintain physical and mental activity", "Consult at first symptoms for early diagnosis"],
    "tratamientoEs": ["Levodopa/carbidopa (tratamiento principal)", "Agonistas dopaminérgicos (pramipexol, ropinirol)", "Inhibidores de MAO-B (selegilina, rasagilina)", "Fisioterapia especializada", "Terapia del habla para problemas de voz y deglución", "Terapia ocupacional", "Ejercicio regular (tai chi, natación, caminata)", "Estimulación cerebral profunda en casos avanzados", "Manejo de síntomas no motores", "Apoyo psicológico"],
    "tratamientoEn": ["Levodopa/carbidopa (main treatment)", "Dopamine agonists (pramipexole, ropinirole)", "MAO-B inhibitors (selegiline, rasagiline)", "Specialized physical therapy", "Speech therapy for voice and swallowing problems", "Occupational therapy", "Regular exercise (tai chi, swimming, walking)", "Deep brain stimulation in advanced cases", "Non-motor symptom management", "Psychological support"],
    "consejosParaCuidadoresEs": ["Sea paciente con la lentitud de movimientos", "Permita que hagan las cosas por sí mismos aunque tomen más tiempo", "Ayude con ejercicios diarios de estiramiento", "Supervise la toma de medicamentos en los horarios exactos", "Adapte la dieta para facilitar la deglución", "Acompañe a las citas médicas y lleve un diario de síntomas", "Esté atento a signos de depresión", "Fomente la socialización", "Aprenda técnicas de transferencia segura", "Cuide su propia salud emocional"],
    "consejosParaCuidadoresEn": ["Be patient with slowness of movement", "Allow them to do things on their own even if it takes longer", "Help with daily stretching exercises", "Supervise medication intake at exact times", "Adapt diet to facilitate swallowing", "Accompany to medical appointments and keep a symptom diary", "Watch for signs of depression", "Encourage socialization", "Learn safe transfer techniques", "Take care of your own emotional health"],
    "adaptacionesHogarEs": ["Retirar tapetes sueltos y cables del piso", "Instalar barandales en ambos lados de escaleras", "Colocar barras de apoyo en baño y regadera", "Usar sillas con brazos firmes para facilitar levantarse", "Elevar el asiento del inodoro", "Usar platos con borde alto y cubiertos con mango grueso", "Colocar cinta antiderrapante en escalones", "Mantener pisos secos y sin obstáculos", "Instalar buena iluminación en todas las áreas"],
    "adaptacionesHogarEn": ["Remove loose rugs and floor cables", "Install handrails on both sides of stairs", "Place grab bars in bathroom and shower", "Use chairs with firm arms for easier standing", "Raise toilet seat", "Use plates with high edges and thick-handled utensils", "Place non-slip tape on steps", "Keep floors dry and obstacle-free", "Install good lighting in all areas"],
    "recursosEs": ["Fundación de Parkinson de su país", "Grupos de ejercicio especializados", "Terapia de voz Lee Silverman (LSVT)", "Asociaciones de pacientes con Parkinson", "Programas de danza para Parkinson"],
    "recursosEn": ["Parkinson's Foundation in your country", "Specialized exercise groups", "Lee Silverman Voice Treatment (LSVT)", "Parkinson's patient associations", "Dance programs for Parkinson's"],
    "medicamentosComunes": ["Levodopa/Carbidopa (Sinemet)", "Pramipexol (Mirapex)", "Ropinirol (Requip)", "Rasagilina (Azilect)", "Amantadina"],
    "senalesAlertaEs": ["Caídas frecuentes o repentinas", "Dificultad severa para tragar o atragantamiento", "Alucinaciones o delirios", "Confusión aguda o cambio mental súbito", "Fiebre con rigidez severa (posible síndrome neuroléptico maligno)", "Incapacidad para moverse (episodios de congelamiento prolongados)"],
    "senalesAlertaEn": ["Frequent or sudden falls", "Severe swallowing difficulty or choking", "Hallucinations or delusions", "Acute confusion or sudden mental change", "Fever with severe rigidity (possible neuroleptic malignant syndrome)", "Inability to move (prolonged freezing episodes)"]
  },
COND1

cat >> "$TARGET" << 'COND2'
  {
    "id": "caidas-fracturas",
    "nombreEs": "Caídas y Fracturas",
    "nombreEn": "Falls and Fractures",
    "categoriaEs": "Síndromes Geriátricos",
    "categoriaEn": "Geriatric Syndromes",
    "descripcionEs": "Las caídas son la principal causa de lesiones en adultos mayores. Una de cada tres personas mayores de 65 años sufre al menos una caída al año. Las fracturas de cadera, muñeca y columna vertebral son las más frecuentes y pueden tener consecuencias devastadoras para la independencia y calidad de vida.",
    "descripcionEn": "Falls are the leading cause of injuries in older adults. One in three people over 65 suffers at least one fall per year. Hip, wrist, and spine fractures are most common and can have devastating consequences for independence and quality of life.",
    "sintomasEs": ["Dolor intenso después de una caída", "Incapacidad para soportar peso en la extremidad afectada", "Hinchazón y moretones", "Deformidad visible en caso de fractura", "Miedo a caer que limita la actividad", "Inestabilidad al caminar", "Mareo al ponerse de pie", "Tropiezos frecuentes"],
    "sintomasEn": ["Severe pain after a fall", "Inability to bear weight on affected limb", "Swelling and bruising", "Visible deformity in case of fracture", "Fear of falling that limits activity", "Instability when walking", "Dizziness when standing up", "Frequent tripping"],
    "factoresRiesgoEs": ["Debilidad muscular en piernas", "Problemas de equilibrio", "Uso de múltiples medicamentos", "Problemas de visión", "Peligros en el hogar (tapetes, cables, poca luz)", "Calzado inadecuado", "Hipotensión ortostática", "Artritis o dolor en articulaciones", "Historia previa de caídas", "Consumo de alcohol"],
    "factoresRiesgoEn": ["Leg muscle weakness", "Balance problems", "Use of multiple medications", "Vision problems", "Home hazards (rugs, cables, poor lighting)", "Inadequate footwear", "Orthostatic hypotension", "Arthritis or joint pain", "Previous history of falls", "Alcohol consumption"],
    "prevencionEs": ["Realizar ejercicios de equilibrio y fortalecimiento", "Revisar medicamentos con el médico regularmente", "Examen de visión anual", "Hacer el hogar seguro (quitar tapetes, mejorar iluminación)", "Usar calzado con suela antiderrapante", "Levantarse lentamente de la cama o silla", "Usar dispositivos de asistencia si los necesita", "Mantener huesos fuertes con calcio y vitamina D", "Limitar consumo de alcohol", "Hacer evaluación de riesgo de caídas con su médico"],
    "prevencionEn": ["Perform balance and strengthening exercises", "Review medications with doctor regularly", "Annual vision exam", "Make home safe (remove rugs, improve lighting)", "Wear shoes with non-slip soles", "Stand up slowly from bed or chair", "Use assistive devices if needed", "Keep bones strong with calcium and vitamin D", "Limit alcohol consumption", "Have fall risk assessment with your doctor"],
    "tratamientoEs": ["Evaluación médica inmediata después de una caída", "Tratamiento de fractura (inmovilización, cirugía si necesario)", "Rehabilitación física después de fractura", "Programa de ejercicios de equilibrio supervisado", "Revisión y ajuste de medicamentos", "Tratamiento de osteoporosis si está presente", "Terapia ocupacional para recuperar independencia", "Suplementos de calcio y vitamina D", "Corrección de problemas de visión", "Programa de prevención de caídas personalizado"],
    "tratamientoEn": ["Immediate medical evaluation after a fall", "Fracture treatment (immobilization, surgery if needed)", "Physical rehabilitation after fracture", "Supervised balance exercise program", "Medication review and adjustment", "Osteoporosis treatment if present", "Occupational therapy to regain independence", "Calcium and vitamin D supplements", "Correction of vision problems", "Personalized fall prevention program"],
    "consejosParaCuidadoresEs": ["Acompañe a caminar si hay inestabilidad", "Revise el hogar en busca de peligros cada mes", "No apresure a la persona mayor", "Asegure buena iluminación nocturna (luces de noche)", "Mantenga un teléfono accesible en cada habitación", "Considere un sistema de alerta médica personal", "Fomente ejercicios diarios incluso sentado", "Supervise el uso correcto de bastón o andadera", "Aprenda primeros auxilios para caídas", "No culpe ni regañe después de una caída"],
    "consejosParaCuidadoresEn": ["Accompany walking if there is instability", "Check home for hazards monthly", "Do not rush the elderly person", "Ensure good nighttime lighting (night lights)", "Keep a phone accessible in every room", "Consider a personal medical alert system", "Encourage daily exercises even while seated", "Supervise correct use of cane or walker", "Learn first aid for falls", "Do not blame or scold after a fall"],
    "adaptacionesHogarEs": ["Instalar barras de apoyo en el baño junto al inodoro y regadera", "Colocar tapetes antiderrapantes en baño y cocina", "Retirar todos los tapetes sueltos", "Mejorar iluminación en escaleras, pasillos y entradas", "Instalar pasamanos en ambos lados de escaleras", "Fijar cables eléctricos a la pared", "Mantener objetos de uso frecuente a altura accesible", "Colocar silla en la regadera", "Instalar luces con sensor de movimiento", "Asegurar que las escaleras tengan cinta antiderrapante"],
    "adaptacionesHogarEn": ["Install grab bars in bathroom by toilet and shower", "Place non-slip mats in bathroom and kitchen", "Remove all loose rugs", "Improve lighting on stairs, hallways, and entrances", "Install handrails on both sides of stairs", "Secure electrical cords to wall", "Keep frequently used items at accessible height", "Place chair in shower", "Install motion-sensor lights", "Ensure stairs have non-slip tape"],
    "recursosEs": ["Programas de prevención de caídas en su comunidad", "Evaluación de seguridad del hogar por terapeutas", "Programas de ejercicio grupal para mayores", "Clínicas de equilibrio y marcha", "Servicios de adaptación del hogar"],
    "recursosEn": ["Fall prevention programs in your community", "Home safety assessment by therapists", "Group exercise programs for seniors", "Balance and gait clinics", "Home adaptation services"],
    "medicamentosComunes": ["Calcio + Vitamina D", "Alendronato (Fosamax) si osteoporosis", "Denosumab (Prolia) si osteoporosis", "Revisión de medicamentos que causan mareo"],
    "senalesAlertaEs": ["Dolor severo en cadera o pierna después de caída", "Incapacidad para ponerse de pie", "Deformidad visible en extremidad", "Dolor de cabeza severo después de golpe", "Confusión o somnolencia después de caída", "Sangrado que no se detiene"],
    "senalesAlertaEn": ["Severe hip or leg pain after fall", "Inability to stand up", "Visible limb deformity", "Severe headache after impact", "Confusion or drowsiness after fall", "Bleeding that does not stop"]
  },
  {
    "id": "osteoporosis",
    "nombreEs": "Osteoporosis",
    "nombreEn": "Osteoporosis",
    "categoriaEs": "Enfermedades Óseas",
    "categoriaEn": "Bone Diseases",
    "descripcionEs": "Enfermedad que debilita los huesos haciéndolos frágiles y propensos a fracturas. Se le llama la 'enfermedad silenciosa' porque no presenta síntomas hasta que ocurre una fractura. Es más común en mujeres después de la menopausia, pero también afecta a hombres mayores.",
    "descripcionEn": "Disease that weakens bones making them fragile and prone to fractures. It is called the 'silent disease' because it shows no symptoms until a fracture occurs. It is more common in women after menopause but also affects older men.",
    "sintomasEs": ["Generalmente sin síntomas hasta que hay fractura", "Pérdida de estatura con el tiempo", "Postura encorvada (cifosis)", "Dolor de espalda por fractura vertebral", "Fractura con traumatismo mínimo", "Dolor óseo generalizado en etapas avanzadas"],
    "sintomasEn": ["Generally no symptoms until fracture occurs", "Loss of height over time", "Stooped posture (kyphosis)", "Back pain from vertebral fracture", "Fracture with minimal trauma", "Generalized bone pain in advanced stages"],
    "factoresRiesgoEs": ["Ser mujer posmenopáusica", "Edad avanzada", "Bajo peso corporal", "Antecedentes familiares de osteoporosis", "Tabaquismo", "Consumo excesivo de alcohol", "Sedentarismo", "Baja ingesta de calcio", "Deficiencia de vitamina D", "Uso prolongado de corticosteroides"],
    "factoresRiesgoEn": ["Being postmenopausal woman", "Advanced age", "Low body weight", "Family history of osteoporosis", "Smoking", "Excessive alcohol consumption", "Sedentary lifestyle", "Low calcium intake", "Vitamin D deficiency", "Prolonged corticosteroid use"],
    "prevencionEs": ["Consumir alimentos ricos en calcio (lácteos, brócoli, sardinas)", "Tomar suplemento de vitamina D si hay deficiencia", "Hacer ejercicios con peso (caminar, bailar, subir escaleras)", "No fumar", "Limitar alcohol a una bebida al día", "Hacerse densitometría ósea después de los 65 años", "Mantener peso saludable", "Hacer ejercicios de fortalecimiento muscular"],
    "prevencionEn": ["Eat calcium-rich foods (dairy, broccoli, sardines)", "Take vitamin D supplement if deficient", "Do weight-bearing exercises (walking, dancing, climbing stairs)", "Do not smoke", "Limit alcohol to one drink per day", "Get bone density test after age 65", "Maintain healthy weight", "Do muscle-strengthening exercises"],
    "tratamientoEs": ["Bifosfonatos (alendronato, risedronato)", "Denosumab (inyección semestral)", "Teriparatida (para osteoporosis severa)", "Suplementos de calcio (1200 mg/día) y vitamina D (800-1000 UI/día)", "Ejercicios de fortalecimiento y equilibrio", "Prevención de caídas", "Terapia hormonal en casos seleccionados", "Romosozumab para riesgo muy alto de fractura"],
    "tratamientoEn": ["Bisphosphonates (alendronate, risedronate)", "Denosumab (biannual injection)", "Teriparatide (for severe osteoporosis)", "Calcium supplements (1200 mg/day) and vitamin D (800-1000 IU/day)", "Strengthening and balance exercises", "Fall prevention", "Hormone therapy in selected cases", "Romosozumab for very high fracture risk"],
    "consejosParaCuidadoresEs": ["Asegure que tome los medicamentos correctamente", "Prepare alimentos ricos en calcio", "Acompañe a realizar ejercicios seguros", "Prevenga caídas en el hogar", "Recuerde las citas de densitometría", "No permita movimientos bruscos de torsión o flexión"],
    "consejosParaCuidadoresEn": ["Ensure medications are taken correctly", "Prepare calcium-rich foods", "Accompany for safe exercises", "Prevent falls at home", "Remember bone density appointments", "Do not allow sudden twisting or bending movements"],
    "adaptacionesHogarEs": ["Eliminar riesgos de tropiezo", "Instalar barras de apoyo", "Buena iluminación en toda la casa", "Mantener objetos pesados a la altura de la cintura", "Evitar escaleras innecesarias", "Silla firme con brazos para sentarse y levantarse"],
    "adaptacionesHogarEn": ["Eliminate tripping hazards", "Install grab bars", "Good lighting throughout the house", "Keep heavy objects at waist height", "Avoid unnecessary stairs", "Firm chair with arms for sitting and standing"],
    "recursosEs": ["Fundación Nacional de Osteoporosis", "Calculadora FRAX de riesgo de fractura", "Programas de ejercicio para huesos fuertes", "Nutricionista especializado en salud ósea"],
    "recursosEn": ["National Osteoporosis Foundation", "FRAX fracture risk calculator", "Exercise programs for strong bones", "Nutritionist specialized in bone health"],
    "medicamentosComunes": ["Alendronato (Fosamax)", "Risedronato (Actonel)", "Denosumab (Prolia)", "Teriparatida (Forteo)", "Calcio + Vitamina D"],
    "senalesAlertaEs": ["Dolor de espalda intenso y repentino", "Pérdida notable de estatura", "Fractura por caída menor o sin causa aparente", "Dolor en la mandíbula después de procedimiento dental (raro con bifosfonatos)"],
    "senalesAlertaEn": ["Intense and sudden back pain", "Notable loss of height", "Fracture from minor fall or without apparent cause", "Jaw pain after dental procedure (rare with bisphosphonates)"]
  },
COND2

cat >> "$TARGET" << 'COND3'
  {
    "id": "sarcopenia",
    "nombreEs": "Sarcopenia",
    "nombreEn": "Sarcopenia",
    "categoriaEs": "Síndromes Geriátricos",
    "categoriaEn": "Geriatric Syndromes",
    "descripcionEs": "Pérdida progresiva de masa muscular, fuerza y función física asociada con el envejecimiento. Después de los 30 años se pierde entre 3-8% de masa muscular por década, y este proceso se acelera después de los 60. Afecta la movilidad, independencia y aumenta el riesgo de caídas.",
    "descripcionEn": "Progressive loss of muscle mass, strength, and physical function associated with aging. After age 30, 3-8% of muscle mass is lost per decade, and this process accelerates after 60. It affects mobility, independence, and increases fall risk.",
    "sintomasEs": ["Debilidad muscular progresiva", "Dificultad para levantarse de una silla", "Caminar más lento", "Dificultad para subir escaleras", "Pérdida de peso involuntaria", "Fatiga con actividades habituales", "Dificultad para cargar objetos", "Caídas frecuentes"],
    "sintomasEn": ["Progressive muscle weakness", "Difficulty rising from a chair", "Slower walking", "Difficulty climbing stairs", "Involuntary weight loss", "Fatigue with usual activities", "Difficulty carrying objects", "Frequent falls"],
    "factoresRiesgoEs": ["Edad avanzada", "Sedentarismo", "Mala nutrición (baja en proteínas)", "Enfermedades crónicas", "Hospitalización prolongada", "Inflamación crónica", "Cambios hormonales", "Deficiencia de vitamina D"],
    "factoresRiesgoEn": ["Advanced age", "Sedentary lifestyle", "Poor nutrition (low protein)", "Chronic diseases", "Prolonged hospitalization", "Chronic inflammation", "Hormonal changes", "Vitamin D deficiency"],
    "prevencionEs": ["Ejercicios de resistencia 2-3 veces por semana", "Consumir proteína suficiente (1.0-1.2 g/kg/día)", "Distribuir proteína en todas las comidas", "Mantener niveles adecuados de vitamina D", "Caminar al menos 30 minutos diarios", "Evitar reposo prolongado en cama", "Mantenerse activo físicamente", "Alimentación balanceada y suficiente"],
    "prevencionEn": ["Resistance exercises 2-3 times per week", "Consume sufficient protein (1.0-1.2 g/kg/day)", "Distribute protein across all meals", "Maintain adequate vitamin D levels", "Walk at least 30 minutes daily", "Avoid prolonged bed rest", "Stay physically active", "Balanced and sufficient nutrition"],
    "tratamientoEs": ["Programa de ejercicios de resistencia progresiva", "Suplementación nutricional con proteína", "Vitamina D si hay deficiencia", "Leucina o HMB como suplemento", "Ejercicios funcionales (sentarse-pararse, subir escalones)", "Terapia física supervisada", "Tratamiento de enfermedades subyacentes", "Evaluación y mejora de la dieta con nutricionista"],
    "tratamientoEn": ["Progressive resistance exercise program", "Nutritional protein supplementation", "Vitamin D if deficient", "Leucine or HMB as supplement", "Functional exercises (sit-to-stand, step-ups)", "Supervised physical therapy", "Treatment of underlying diseases", "Diet evaluation and improvement with nutritionist"],
    "consejosParaCuidadoresEs": ["Anime a hacer ejercicio diariamente", "Prepare comidas ricas en proteína", "No haga todo por ellos, fomente la independencia", "Celebre los pequeños logros físicos", "Acompañe a caminar regularmente", "Asegure que la dieta incluya suficientes calorías"],
    "consejosParaCuidadoresEn": ["Encourage daily exercise", "Prepare protein-rich meals", "Do not do everything for them, encourage independence", "Celebrate small physical achievements", "Accompany for regular walks", "Ensure diet includes sufficient calories"],
    "adaptacionesHogarEs": ["Colocar sillas firmes con brazos", "Instalar barras de apoyo donde sea necesario", "Tener pesas livianas o bandas de resistencia accesibles", "Mantener área despejada para ejercicio", "Usar utensilios con mangos ergonómicos"],
    "adaptacionesHogarEn": ["Place firm chairs with arms", "Install grab bars where needed", "Keep light weights or resistance bands accessible", "Maintain clear area for exercise", "Use utensils with ergonomic handles"],
    "recursosEs": ["Programas de ejercicio para adultos mayores", "Nutricionista geriátrico", "Centros de rehabilitación", "Grupos de ejercicio comunitario"],
    "recursosEn": ["Exercise programs for older adults", "Geriatric nutritionist", "Rehabilitation centers", "Community exercise groups"],
    "medicamentosComunes": ["Vitamina D", "Suplementos de proteína", "HMB (hidroximetilbutirato)"],
    "senalesAlertaEs": ["Caídas repetidas", "Pérdida de peso rápida no explicada", "Incapacidad para levantarse del piso", "Dificultad para alimentarse solo"],
    "senalesAlertaEn": ["Repeated falls", "Unexplained rapid weight loss", "Inability to get up from the floor", "Difficulty feeding oneself"]
  },
  {
    "id": "fragilidad",
    "nombreEs": "Síndrome de Fragilidad",
    "nombreEn": "Frailty Syndrome",
    "categoriaEs": "Síndromes Geriátricos",
    "categoriaEn": "Geriatric Syndromes",
    "descripcionEs": "Estado de vulnerabilidad aumentada donde el cuerpo pierde su capacidad de resistir enfermedades o estrés. Se caracteriza por debilidad, lentitud, baja actividad, pérdida de peso y agotamiento. Las personas frágiles tienen mayor riesgo de caídas, hospitalización y muerte.",
    "descripcionEn": "State of increased vulnerability where the body loses its ability to resist illness or stress. Characterized by weakness, slowness, low activity, weight loss, and exhaustion. Frail people have higher risk of falls, hospitalization, and death.",
    "sintomasEs": ["Pérdida de peso involuntaria (más de 4.5 kg en un año)", "Agotamiento referido por el paciente", "Debilidad (baja fuerza de agarre)", "Velocidad lenta al caminar", "Baja actividad física", "Recuperación lenta de enfermedades", "Fatiga extrema con actividades mínimas"],
    "sintomasEn": ["Involuntary weight loss (more than 10 lbs in a year)", "Self-reported exhaustion", "Weakness (low grip strength)", "Slow walking speed", "Low physical activity", "Slow recovery from illnesses", "Extreme fatigue with minimal activities"],
    "factoresRiesgoEs": ["Edad muy avanzada (mayores de 80)", "Múltiples enfermedades crónicas", "Sarcopenia", "Mala nutrición", "Aislamiento social", "Depresión", "Deterioro cognitivo", "Polifarmacia"],
    "factoresRiesgoEn": ["Very advanced age (over 80)", "Multiple chronic diseases", "Sarcopenia", "Poor nutrition", "Social isolation", "Depression", "Cognitive impairment", "Polypharmacy"],
    "prevencionEs": ["Ejercicio multicomponente (fuerza, equilibrio, flexibilidad)", "Nutrición adecuada con suficiente proteína", "Mantener conexiones sociales", "Tratar depresión y deterioro cognitivo", "Revisión regular de medicamentos", "Vacunación al día", "Control de enfermedades crónicas", "Mantener peso saludable"],
    "prevencionEn": ["Multicomponent exercise (strength, balance, flexibility)", "Adequate nutrition with sufficient protein", "Maintain social connections", "Treat depression and cognitive impairment", "Regular medication review", "Up-to-date vaccinations", "Chronic disease management", "Maintain healthy weight"],
    "tratamientoEs": ["Programa de ejercicio multicomponente supervisado", "Suplementación nutricional", "Revisión y reducción de medicamentos innecesarios", "Tratamiento de enfermedades subyacentes", "Apoyo social y emocional", "Valoración geriátrica integral", "Vitamina D y proteína", "Intervención temprana ante deterioro funcional"],
    "tratamientoEn": ["Supervised multicomponent exercise program", "Nutritional supplementation", "Review and reduction of unnecessary medications", "Treatment of underlying diseases", "Social and emotional support", "Comprehensive geriatric assessment", "Vitamin D and protein", "Early intervention for functional decline"],
    "consejosParaCuidadoresEs": ["Observe cambios sutiles en la capacidad funcional", "Fomente movimiento aunque sea poco", "Asegure alimentación nutritiva y suficiente", "Mantenga al adulto mayor conectado socialmente", "Vigile signos de depresión o aislamiento", "Acompañe a todas las citas médicas", "Lleve un registro del peso semanal"],
    "consejosParaCuidadoresEn": ["Observe subtle changes in functional capacity", "Encourage movement even if minimal", "Ensure nutritious and sufficient food intake", "Keep the elderly person socially connected", "Watch for signs of depression or isolation", "Accompany to all medical appointments", "Keep a weekly weight log"],
    "adaptacionesHogarEs": ["Minimizar distancias a recorrer dentro de casa", "Colocar todo lo necesario al alcance", "Silla o banco en la regadera", "Cama a altura adecuada", "Timbre o campana para pedir ayuda", "Teléfono siempre accesible"],
    "adaptacionesHogarEn": ["Minimize distances to walk inside the house", "Place everything needed within reach", "Chair or bench in the shower", "Bed at adequate height", "Bell or buzzer to call for help", "Phone always accessible"],
    "recursosEs": ["Valoración geriátrica integral en hospital", "Programas de nutrición para adultos mayores", "Servicios de atención domiciliaria", "Centros de día para adultos mayores"],
    "recursosEn": ["Comprehensive geriatric assessment at hospital", "Nutrition programs for older adults", "Home care services", "Adult day care centers"],
    "senalesAlertaEs": ["Pérdida de peso rápida sin causa clara", "Incapacidad para salir de la cama", "No come ni bebe por más de 24 horas", "Deterioro funcional rápido", "Confusión o desorientación nueva", "Fiebre en persona frágil"],
    "senalesAlertaEn": ["Rapid weight loss without clear cause", "Inability to get out of bed", "Not eating or drinking for more than 24 hours", "Rapid functional decline", "New confusion or disorientation", "Fever in frail person"]
  },
COND3

echo "Parts 1-3 written successfully"
