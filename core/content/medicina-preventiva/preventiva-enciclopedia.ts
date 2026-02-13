/**
 * Enciclopedia de Medicina Preventiva / Preventive Medicine Encyclopedia
 *
 * Guia completa de tamizajes, vacunas y habitos saludables.
 * Comprehensive guide to screenings, vaccines, and healthy habits.
 * SPANISH FIRST / ESPANOL PRIMERO - English secondary.
 *
 * 25+ tamizajes, 20+ vacunas, 15+ habitos saludables.
 * 25+ screenings, 20+ vaccines, 15+ healthy habits.
 */

// ============================================================
// INTERFACES
// ============================================================

export interface TamizajeEntry {
  id: string;
  nombreEs: string;
  nombreEn: string;
  descripcionEs: string;
  descripcionEn: string;
  paraQueEs: string;
  paraQueEn: string;
  edadRecomendada: string;
  frecuencia: string;
  preparacion: string;
  genero: 'todos' | 'mujeres' | 'hombres';
  importanciaEs: string;
  importanciaEn: string;
}

export interface VacunaEntry {
  id: string;
  nombreEs: string;
  nombreEn: string;
  descripcionEs: string;
  descripcionEn: string;
  previene: string[];
  esquemaEs: string;
  esquemaEn: string;
  edadRecomendada: string;
  efectosSecundariosEs: string[];
  efectosSecundariosEn: string[];
  contraindicacionesEs: string[];
  contraindicacionesEn: string[];
  obligatoria: boolean;
}

export interface HabitoSaludableEntry {
  id: string;
  nombreEs: string;
  nombreEn: string;
  categoriaEs: string;
  categoriaEn: string;
  descripcionEs: string;
  descripcionEn: string;
  beneficiosEs: string[];
  beneficiosEn: string[];
  consejosEs: string[];
  consejosEn: string[];
  evidenciaEs: string;
  evidenciaEn: string;
}

// ============================================================
// TAMIZAJES DATA - Using JSON.parse to avoid TS2590
// ============================================================

export const tamizajesData: TamizajeEntry[] = JSON.parse(`[
{
  "id": "presion-arterial",
  "nombreEs": "Medicion de presion arterial",
  "nombreEn": "Blood pressure screening",
  "descripcionEs": "Se coloca un manguito inflable en el brazo para medir la fuerza de la sangre contra las paredes arteriales. Es rapido e indoloro.",
  "descripcionEn": "An inflatable cuff is placed on the arm to measure the force of blood against arterial walls. It is quick and painless.",
  "paraQueEs": "Detectar hipertension arterial, principal factor de riesgo para infarto, derrame cerebral y enfermedad renal.",
  "paraQueEn": "Detect high blood pressure, the leading risk factor for heart attack, stroke, and kidney disease.",
  "edadRecomendada": "18+",
  "frecuencia": "Al menos cada 2 anios; anualmente si hay factores de riesgo",
  "preparacion": "Evitar cafeina y ejercicio 30 minutos antes. Sentarse tranquilo 5 minutos antes de la medicion.",
  "genero": "todos",
  "importanciaEs": "La hipertension es el 'asesino silencioso' porque no da sintomas. Detectarla temprano previene complicaciones graves.",
  "importanciaEn": "Hypertension is the 'silent killer' because it has no symptoms. Early detection prevents serious complications."
},
{
  "id": "colesterol",
  "nombreEs": "Perfil de lipidos (colesterol)",
  "nombreEn": "Lipid panel (cholesterol screening)",
  "descripcionEs": "Analisis de sangre que mide colesterol total, LDL (malo), HDL (bueno) y trigliceridos.",
  "descripcionEn": "Blood test measuring total cholesterol, LDL (bad), HDL (good), and triglycerides.",
  "paraQueEs": "Evaluar el riesgo de enfermedad cardiovascular y determinar si se necesita tratamiento.",
  "paraQueEn": "Assess cardiovascular disease risk and determine if treatment is needed.",
  "edadRecomendada": "20+ (hombres desde 35, mujeres desde 45 si bajo riesgo)",
  "frecuencia": "Cada 4-6 anios en adultos sanos; mas frecuente con factores de riesgo",
  "preparacion": "Ayuno de 9-12 horas antes de la prueba. Se permite agua.",
  "genero": "todos",
  "importanciaEs": "El colesterol alto no produce sintomas pero obstruye arterias lentamente. El tratamiento temprano reduce dramaticamente el riesgo cardiaco.",
  "importanciaEn": "High cholesterol produces no symptoms but slowly clogs arteries. Early treatment dramatically reduces cardiac risk."
},
{
  "id": "glucosa-diabetes",
  "nombreEs": "Prueba de glucosa / diabetes",
  "nombreEn": "Blood glucose / diabetes screening",
  "descripcionEs": "Analisis de sangre que mide el nivel de azucar. Incluye glucosa en ayunas, hemoglobina A1c o prueba de tolerancia oral a glucosa.",
  "descripcionEn": "Blood test measuring sugar levels. Includes fasting glucose, hemoglobin A1c, or oral glucose tolerance test.",
  "paraQueEs": "Detectar diabetes tipo 2 y prediabetes antes de que causen dano a organos.",
  "paraQueEn": "Detect type 2 diabetes and prediabetes before organ damage occurs.",
  "edadRecomendada": "35+ (antes si hay sobrepeso o factores de riesgo)",
  "frecuencia": "Cada 3 anios si es normal; anualmente si hay prediabetes",
  "preparacion": "Ayuno de 8 horas para glucosa en ayunas. No se requiere ayuno para A1c.",
  "genero": "todos",
  "importanciaEs": "La diabetes no controlada dana ojos, rinones, nervios y corazon. La deteccion temprana permite revertir la prediabetes con cambios de estilo de vida.",
  "importanciaEn": "Uncontrolled diabetes damages eyes, kidneys, nerves, and heart. Early detection allows reversing prediabetes with lifestyle changes."
},
{
  "id": "cancer-mama",
  "nombreEs": "Mamografia (cancer de mama)",
  "nombreEn": "Mammogram (breast cancer screening)",
  "descripcionEs": "Radiografia especial del seno que detecta tumores pequenos antes de que se puedan sentir. Se comprime brevemente el seno entre dos placas.",
  "descripcionEn": "Special breast X-ray that detects small tumors before they can be felt. The breast is briefly compressed between two plates.",
  "paraQueEs": "Detectar cancer de mama en etapa temprana, cuando el tratamiento es mas efectivo y la supervivencia es mayor al 90%.",
  "paraQueEn": "Detect breast cancer at an early stage when treatment is most effective and survival exceeds 90%.",
  "edadRecomendada": "40-74 (algunas guias recomiendan desde 50)",
  "frecuencia": "Cada 1-2 anios segun la guia y factores de riesgo",
  "preparacion": "No usar desodorante, talco ni crema en axilas el dia del estudio. Programar despues de la menstruacion.",
  "genero": "mujeres",
  "importanciaEs": "El cancer de mama detectado temprano tiene excelente pronostico. La mamografia reduce la mortalidad en un 20-40%.",
  "importanciaEn": "Early-detected breast cancer has excellent prognosis. Mammography reduces mortality by 20-40%."
},
{
  "id": "cancer-cervical",
  "nombreEs": "Papanicolaou y prueba de VPH (cancer cervical)",
  "nombreEn": "Pap smear and HPV test (cervical cancer screening)",
  "descripcionEs": "Se toma una muestra de celulas del cuello uterino para buscar cambios anormales. Se puede combinar con la prueba de VPH.",
  "descripcionEn": "A sample of cells from the cervix is collected to look for abnormal changes. Can be combined with HPV testing.",
  "paraQueEs": "Detectar celulas precancerosas y cancer cervical temprano, que es altamente curable cuando se detecta a tiempo.",
  "paraQueEn": "Detect precancerous cells and early cervical cancer, which is highly curable when caught early.",
  "edadRecomendada": "21-65",
  "frecuencia": "Cada 3 anios (Pap solo) o cada 5 anios (Pap + VPH) desde los 30",
  "preparacion": "No tener relaciones sexuales, duchas vaginales ni usar productos vaginales 2 dias antes.",
  "genero": "mujeres",
  "importanciaEs": "El cancer cervical es casi 100% prevenible con tamizaje regular. El Pap ha reducido la mortalidad en mas del 70%.",
  "importanciaEn": "Cervical cancer is nearly 100% preventable with regular screening. The Pap has reduced mortality by over 70%."
},
{
  "id": "cancer-colon",
  "nombreEs": "Colonoscopia / pruebas de cancer colorrectal",
  "nombreEn": "Colonoscopy / colorectal cancer screening",
  "descripcionEs": "La colonoscopia usa una camara flexible para examinar el colon. Alternativas incluyen prueba de sangre oculta en heces y colonografia por CT.",
  "descripcionEn": "Colonoscopy uses a flexible camera to examine the colon. Alternatives include fecal occult blood test and CT colonography.",
  "paraQueEs": "Detectar y remover polipos antes de que se conviertan en cancer colorrectal.",
  "paraQueEn": "Detect and remove polyps before they become colorectal cancer.",
  "edadRecomendada": "45-75",
  "frecuencia": "Colonoscopia cada 10 anios; sangre oculta en heces anualmente; otras pruebas varian",
  "preparacion": "Colonoscopia: dieta liquida clara el dia anterior y solucion de limpieza intestinal. Sangre oculta: evitar ciertos alimentos 3 dias antes.",
  "genero": "todos",
  "importanciaEs": "El cancer colorrectal es el tercero mas comun pero altamente prevenible. Remover polipos previene el 90% de los casos.",
  "importanciaEn": "Colorectal cancer is the third most common but highly preventable. Removing polyps prevents 90% of cases."
},
{
  "id": "cancer-pulmon",
  "nombreEs": "Tomografia de baja dosis (cancer de pulmon)",
  "nombreEn": "Low-dose CT scan (lung cancer screening)",
  "descripcionEs": "Tomografia computarizada del torax con baja radiacion que detecta nodulos pulmonares sospechosos.",
  "descripcionEn": "Low-radiation chest CT scan that detects suspicious lung nodules.",
  "paraQueEs": "Detectar cancer de pulmon en fumadores o exfumadores, cuando aun es operable.",
  "paraQueEn": "Detect lung cancer in smokers or former smokers when it is still operable.",
  "edadRecomendada": "50-80 (fumadores de 20+ paquetes-anio)",
  "frecuencia": "Anualmente mientras cumpla criterios de riesgo",
  "preparacion": "No se requiere preparacion especial. El estudio dura menos de 1 minuto.",
  "genero": "todos",
  "importanciaEs": "El cancer de pulmon es la causa numero uno de muerte por cancer. La deteccion temprana con CT reduce la mortalidad en un 20%.",
  "importanciaEn": "Lung cancer is the number one cause of cancer death. Early detection with CT reduces mortality by 20%."
},
{
  "id": "cancer-prostata",
  "nombreEs": "PSA y tacto rectal (cancer de prostata)",
  "nombreEn": "PSA and digital rectal exam (prostate cancer screening)",
  "descripcionEs": "Analisis de sangre que mide el antigeno prostatico especifico (PSA). Puede complementarse con examen fisico de la prostata.",
  "descripcionEn": "Blood test measuring prostate-specific antigen (PSA). May be complemented with physical prostate exam.",
  "paraQueEs": "Detectar cancer de prostata. La decision de tamizaje debe ser compartida entre medico y paciente por los riesgos de sobrediagnostico.",
  "paraQueEn": "Detect prostate cancer. The screening decision should be shared between doctor and patient due to overdiagnosis risks.",
  "edadRecomendada": "50-70 (45 si alto riesgo: afroamericano o historia familiar)",
  "frecuencia": "Cada 1-2 anios si se decide hacer tamizaje",
  "preparacion": "Evitar eyaculacion y ejercicio intenso 48 horas antes. Evitar bicicleta el dia anterior.",
  "genero": "hombres",
  "importanciaEs": "El cancer de prostata es el mas comun en hombres. La decision informada permite personalizar el tamizaje segun riesgo individual.",
  "importanciaEn": "Prostate cancer is the most common cancer in men. Informed decision-making allows personalizing screening based on individual risk."
},
{
  "id": "cancer-piel",
  "nombreEs": "Examen de piel (cancer de piel)",
  "nombreEn": "Skin exam (skin cancer screening)",
  "descripcionEs": "Examen visual completo de la piel realizado por un dermatologo para buscar lunares o lesiones sospechosas.",
  "descripcionEn": "Complete visual skin exam by a dermatologist looking for suspicious moles or lesions.",
  "paraQueEs": "Detectar melanoma y otros canceres de piel en etapa temprana, cuando son curables.",
  "paraQueEn": "Detect melanoma and other skin cancers early when they are curable.",
  "edadRecomendada": "Adultos con factores de riesgo (piel clara, quemaduras solares, historia familiar)",
  "frecuencia": "Anualmente para personas con riesgo elevado; autoexamen mensual para todos",
  "preparacion": "Quitar esmalte de unas. No usar maquillaje. Llevar el cabello suelto para examinar el cuero cabelludo.",
  "genero": "todos",
  "importanciaEs": "El melanoma detectado temprano tiene supervivencia mayor al 95%. El autoexamen ABCDE (Asimetria, Bordes, Color, Diametro, Evolucion) salva vidas.",
  "importanciaEn": "Early melanoma has over 95% survival. ABCDE self-exam (Asymmetry, Borders, Color, Diameter, Evolution) saves lives."
},
{
  "id": "glaucoma",
  "nombreEs": "Examen de glaucoma (presion ocular)",
  "nombreEn": "Glaucoma screening (eye pressure)",
  "descripcionEs": "Medicion de la presion intraocular y examen del nervio optico. Incluye tonometria y fondo de ojo.",
  "descripcionEn": "Measurement of intraocular pressure and optic nerve exam. Includes tonometry and fundoscopy.",
  "paraQueEs": "Detectar glaucoma antes de que cause perdida irreversible de vision periferica.",
  "paraQueEn": "Detect glaucoma before it causes irreversible peripheral vision loss.",
  "edadRecomendada": "40+ (antes si hay historia familiar o es afrodescendiente)",
  "frecuencia": "Cada 2-4 anios de 40-54; cada 1-3 anios de 55-64; cada 1-2 anios 65+",
  "preparacion": "No se requiere preparacion especial. Si dilatan las pupilas, traer lentes de sol.",
  "genero": "todos",
  "importanciaEs": "El glaucoma roba la vision silenciosamente. El dano es irreversible pero detectable y tratable si se encuentra a tiempo.",
  "importanciaEn": "Glaucoma silently steals vision. Damage is irreversible but detectable and treatable if found early."
},
{
  "id": "osteoporosis",
  "nombreEs": "Densitometria osea (osteoporosis)",
  "nombreEn": "Bone density scan (osteoporosis screening)",
  "descripcionEs": "Escaneo DEXA que mide la densidad mineral del hueso, generalmente en cadera y columna.",
  "descripcionEn": "DEXA scan measuring bone mineral density, usually at the hip and spine.",
  "paraQueEs": "Detectar osteoporosis y riesgo de fracturas antes de que ocurra la primera fractura.",
  "paraQueEn": "Detect osteoporosis and fracture risk before the first fracture occurs.",
  "edadRecomendada": "Mujeres 65+; hombres 70+; antes si hay factores de riesgo",
  "frecuencia": "Cada 2 anios si hay osteopenia; cada 5 anios si es normal",
  "preparacion": "No tomar suplementos de calcio 24 horas antes. Usar ropa sin botones ni cierres metalicos.",
  "genero": "todos",
  "importanciaEs": "Una de cada dos mujeres y uno de cada cuatro hombres mayores de 50 tendra una fractura osteoporotica. El tratamiento temprano la previene.",
  "importanciaEn": "One in two women and one in four men over 50 will have an osteoporotic fracture. Early treatment prevents it."
},
{
  "id": "hepatitis-b",
  "nombreEs": "Prueba de hepatitis B",
  "nombreEn": "Hepatitis B screening",
  "descripcionEs": "Analisis de sangre que detecta el antigeno de superficie de hepatitis B (HBsAg) y anticuerpos.",
  "descripcionEn": "Blood test detecting hepatitis B surface antigen (HBsAg) and antibodies.",
  "paraQueEs": "Detectar infeccion cronica por hepatitis B que puede causar cirrosis y cancer de higado.",
  "paraQueEn": "Detect chronic hepatitis B infection that can cause cirrhosis and liver cancer.",
  "edadRecomendada": "Todos los adultos al menos una vez; embarazadas en cada embarazo",
  "frecuencia": "Al menos una vez; periodicamente si hay factores de riesgo continuo",
  "preparacion": "No se requiere preparacion especial.",
  "genero": "todos",
  "importanciaEs": "Dos tercios de las personas con hepatitis B cronica no saben que la tienen. El tratamiento previene dano hepatico y transmision.",
  "importanciaEn": "Two-thirds of people with chronic hepatitis B don't know they have it. Treatment prevents liver damage and transmission."
},
{
  "id": "hepatitis-c",
  "nombreEs": "Prueba de hepatitis C",
  "nombreEn": "Hepatitis C screening",
  "descripcionEs": "Analisis de sangre que detecta anticuerpos contra hepatitis C, seguido de prueba confirmatoria de ARN viral.",
  "descripcionEn": "Blood test detecting hepatitis C antibodies, followed by confirmatory viral RNA test.",
  "paraQueEs": "Detectar hepatitis C cronica, que ahora es curable con antivirales de accion directa en mas del 95% de casos.",
  "paraQueEn": "Detect chronic hepatitis C, now curable with direct-acting antivirals in over 95% of cases.",
  "edadRecomendada": "Todos los adultos 18-79 al menos una vez",
  "frecuencia": "Una vez para la mayoria; periodicamente si hay riesgo continuo",
  "preparacion": "No se requiere preparacion especial.",
  "genero": "todos",
  "importanciaEs": "La hepatitis C es ahora curable. Un simple analisis de sangre puede llevar a una cura completa y prevenir cirrosis y cancer.",
  "importanciaEn": "Hepatitis C is now curable. A simple blood test can lead to complete cure and prevent cirrhosis and cancer."
},
{
  "id": "vih",
  "nombreEs": "Prueba de VIH",
  "nombreEn": "HIV screening",
  "descripcionEs": "Analisis de sangre o prueba rapida oral que detecta anticuerpos o antigenos del VIH.",
  "descripcionEn": "Blood test or rapid oral test detecting HIV antibodies or antigens.",
  "paraQueEs": "Detectar infeccion por VIH tempranamente para iniciar tratamiento y prevenir transmision.",
  "paraQueEn": "Detect HIV infection early to start treatment and prevent transmission.",
  "edadRecomendada": "15-65 al menos una vez; embarazadas en cada embarazo",
  "frecuencia": "Al menos una vez; anualmente si hay factores de riesgo",
  "preparacion": "No se requiere preparacion especial. Resultados de prueba rapida en 20 minutos.",
  "genero": "todos",
  "importanciaEs": "Con tratamiento temprano, las personas con VIH tienen esperanza de vida casi normal. Indetectable = intransmisible.",
  "importanciaEn": "With early treatment, people with HIV have near-normal life expectancy. Undetectable = untransmittable."
},
{
  "id": "ets",
  "nombreEs": "Pruebas de enfermedades de transmision sexual",
  "nombreEn": "Sexually transmitted infection screening",
  "descripcionEs": "Incluye pruebas de clamidia, gonorrea, sifilis y otras ITS mediante muestras de orina, sangre o hisopos.",
  "descripcionEn": "Includes tests for chlamydia, gonorrhea, syphilis, and other STIs via urine, blood, or swab samples.",
  "paraQueEs": "Detectar infecciones asintomaticas para tratar y prevenir complicaciones como infertilidad y transmision.",
  "paraQueEn": "Detect asymptomatic infections to treat and prevent complications like infertility and transmission.",
  "edadRecomendada": "Personas sexualmente activas; mujeres menores de 25 anualmente para clamidia/gonorrea",
  "frecuencia": "Anualmente para personas con factores de riesgo; al cambio de pareja",
  "preparacion": "No orinar 1-2 horas antes si es muestra de orina. Informar al medico sobre contactos de riesgo.",
  "genero": "todos",
  "importanciaEs": "La mayoria de las ITS son asintomaticas pero tratables. Sin tratamiento pueden causar infertilidad, dano a organos y transmision a bebes.",
  "importanciaEn": "Most STIs are asymptomatic but treatable. Without treatment, they can cause infertility, organ damage, and transmission to babies."
},
{
  "id": "depresion",
  "nombreEs": "Tamizaje de depresion (PHQ-9)",
  "nombreEn": "Depression screening (PHQ-9)",
  "descripcionEs": "Cuestionario estandarizado de 9 preguntas que evalua sintomas de depresion en las ultimas 2 semanas.",
  "descripcionEn": "Standardized 9-question survey assessing depression symptoms over the past 2 weeks.",
  "paraQueEs": "Identificar depresion para iniciar tratamiento oportuno con terapia, medicacion o ambas.",
  "paraQueEn": "Identify depression to begin timely treatment with therapy, medication, or both.",
  "edadRecomendada": "12+ (todos los adultos; adolescentes 12-18)",
  "frecuencia": "Anualmente en visitas de rutina; mas frecuente en poblaciones de riesgo",
  "preparacion": "Responder honestamente. La informacion es confidencial y no tiene respuestas correctas o incorrectas.",
  "genero": "todos",
  "importanciaEs": "La depresion es tratable pero solo la mitad de las personas afectadas recibe tratamiento. El tamizaje reduce el estigma y abre la puerta al tratamiento.",
  "importanciaEn": "Depression is treatable but only half of affected people receive treatment. Screening reduces stigma and opens the door to treatment."
},
{
  "id": "obesidad-imc",
  "nombreEs": "Medicion de IMC y circunferencia de cintura",
  "nombreEn": "BMI and waist circumference measurement",
  "descripcionEs": "Calculo del indice de masa corporal (peso/talla) y medicion de la cintura para evaluar grasa abdominal.",
  "descripcionEn": "Body mass index calculation (weight/height) and waist measurement to assess abdominal fat.",
  "paraQueEs": "Identificar sobrepeso y obesidad para intervenir con plan nutricional y de actividad fisica.",
  "paraQueEn": "Identify overweight and obesity to intervene with nutrition and physical activity plan.",
  "edadRecomendada": "Todos los adultos y ninos mayores de 6 anios",
  "frecuencia": "En cada visita medica de rutina",
  "preparacion": "Usar ropa ligera. Medirse en la manana antes de comer si es posible.",
  "genero": "todos",
  "importanciaEs": "La obesidad aumenta el riesgo de diabetes, enfermedades cardiacas, cancer y otras 200+ condiciones. Perder 5-10% del peso mejora la salud significativamente.",
  "importanciaEn": "Obesity increases risk of diabetes, heart disease, cancer, and 200+ other conditions. Losing 5-10% of weight significantly improves health."
},
{
  "id": "aneurisma-aortico",
  "nombreEs": "Ecografia de aorta abdominal (aneurisma)",
  "nombreEn": "Abdominal aortic ultrasound (aneurysm screening)",
  "descripcionEs": "Ultrasonido del abdomen que mide el diametro de la aorta abdominal para detectar ensanchamiento peligroso.",
  "descripcionEn": "Abdominal ultrasound measuring the abdominal aortic diameter to detect dangerous widening.",
  "paraQueEs": "Detectar aneurisma de aorta abdominal antes de que se rompa, lo cual es frecuentemente fatal.",
  "paraQueEn": "Detect abdominal aortic aneurysm before rupture, which is frequently fatal.",
  "edadRecomendada": "Hombres 65-75 que hayan fumado alguna vez",
  "frecuencia": "Una sola vez si cumple criterios",
  "preparacion": "Ayuno de 8 horas para mejor visualizacion. El estudio es indoloro y dura 15-20 minutos.",
  "genero": "hombres",
  "importanciaEs": "La ruptura de aneurisma aortico tiene mortalidad mayor al 80%. La deteccion y cirugia programada reducen la mortalidad dramaticamente.",
  "importanciaEn": "Aortic aneurysm rupture has over 80% mortality. Detection and elective surgery dramatically reduce mortality."
},
{
  "id": "diabetes-gestacional",
  "nombreEs": "Prueba de diabetes gestacional",
  "nombreEn": "Gestational diabetes screening",
  "descripcionEs": "Prueba de tolerancia a la glucosa con bebida azucarada de 50g o 75g y medicion de glucosa a intervalos.",
  "descripcionEn": "Glucose tolerance test with 50g or 75g sugar drink and glucose measurement at intervals.",
  "paraQueEs": "Detectar diabetes del embarazo para prevenir complicaciones en la madre y el bebe.",
  "paraQueEn": "Detect pregnancy diabetes to prevent complications for mother and baby.",
  "edadRecomendada": "Todas las embarazadas entre semanas 24-28",
  "frecuencia": "Una vez por embarazo (antes si hay alto riesgo)",
  "preparacion": "Prueba de 50g: no requiere ayuno. Prueba de 75g: ayuno de 8 horas.",
  "genero": "mujeres",
  "importanciaEs": "La diabetes gestacional afecta al 6-9% de embarazos. El control previene bebe grande, parto prematuro y complicaciones.",
  "importanciaEn": "Gestational diabetes affects 6-9% of pregnancies. Control prevents large baby, premature birth, and complications."
},
{
  "id": "tiroides",
  "nombreEs": "Prueba de funcion tiroidea (TSH)",
  "nombreEn": "Thyroid function test (TSH)",
  "descripcionEs": "Analisis de sangre que mide la hormona estimulante de tiroides para evaluar funcion tiroidea.",
  "descripcionEn": "Blood test measuring thyroid stimulating hormone to evaluate thyroid function.",
  "paraQueEs": "Detectar hipotiroidismo o hipertiroidismo que afectan metabolismo, energia y peso.",
  "paraQueEn": "Detect hypothyroidism or hyperthyroidism affecting metabolism, energy, and weight.",
  "edadRecomendada": "Mujeres 35+; antes si hay sintomas o historia familiar",
  "frecuencia": "Cada 5 anios despues de los 35; anualmente si hay enfermedad tiroidea",
  "preparacion": "No se requiere ayuno. Tomar la muestra en la manana para mayor precision.",
  "genero": "todos",
  "importanciaEs": "Las enfermedades tiroideas son comunes (especialmente en mujeres) y facilmente tratables una vez diagnosticadas.",
  "importanciaEn": "Thyroid diseases are common (especially in women) and easily treatable once diagnosed."
},
{
  "id": "vision",
  "nombreEs": "Examen de agudeza visual",
  "nombreEn": "Visual acuity exam",
  "descripcionEs": "Evaluacion de la capacidad visual leyendo letras de diferentes tamanos, mas pruebas de refraccion y salud ocular.",
  "descripcionEn": "Evaluation of visual ability by reading letters of different sizes, plus refraction and eye health tests.",
  "paraQueEs": "Detectar problemas de vision como miopia, hipermetropia, astigmatismo y enfermedades oculares.",
  "paraQueEn": "Detect vision problems like nearsightedness, farsightedness, astigmatism, and eye diseases.",
  "edadRecomendada": "Ninos: 3-5 anios y en edad escolar; adultos: cada 2 anios; 65+: anualmente",
  "frecuencia": "Cada 1-2 anios segun edad y factores de riesgo",
  "preparacion": "Llevar lentes actuales si los usa. Informar sobre medicamentos que toma.",
  "genero": "todos",
  "importanciaEs": "Los problemas de vision no detectados afectan el aprendizaje en ninos y la calidad de vida en adultos. Muchos son facilmente corregibles.",
  "importanciaEn": "Undetected vision problems affect learning in children and quality of life in adults. Many are easily correctable."
},
{
  "id": "auditivo",
  "nombreEs": "Examen de audicion (audiometria)",
  "nombreEn": "Hearing test (audiometry)",
  "descripcionEs": "Prueba que evalua la capacidad de escuchar sonidos a diferentes frecuencias y volumenes usando audifonos especiales.",
  "descripcionEn": "Test evaluating the ability to hear sounds at different frequencies and volumes using special headphones.",
  "paraQueEs": "Detectar perdida auditiva temprana para intervenir antes de que afecte la comunicacion y calidad de vida.",
  "paraQueEn": "Detect early hearing loss to intervene before it affects communication and quality of life.",
  "edadRecomendada": "Recien nacidos; adultos 50+; antes si hay exposicion a ruido",
  "frecuencia": "Recien nacidos: al nacer; adultos: cada 3 anios despues de 50; cada anio si usa audifonos",
  "preparacion": "Evitar exposicion a ruido fuerte 24 horas antes. Limpiar oidos de cera excesiva.",
  "genero": "todos",
  "importanciaEs": "La perdida auditiva no tratada se asocia con aislamiento social, depresion y deterioro cognitivo. Los audifonos modernos son discretos y efectivos.",
  "importanciaEn": "Untreated hearing loss is associated with social isolation, depression, and cognitive decline. Modern hearing aids are discreet and effective."
},
{
  "id": "dental",
  "nombreEs": "Revision dental y limpieza",
  "nombreEn": "Dental checkup and cleaning",
  "descripcionEs": "Examen dental completo con limpieza profesional, evaluacion de encias y radiografias periodicas.",
  "descripcionEn": "Complete dental exam with professional cleaning, gum evaluation, and periodic X-rays.",
  "paraQueEs": "Prevenir caries, enfermedad de encias y detectar cancer oral tempranamente.",
  "paraQueEn": "Prevent cavities, gum disease, and detect oral cancer early.",
  "edadRecomendada": "Desde la erupcion del primer diente; todos los adultos",
  "frecuencia": "Cada 6 meses para la mayoria; cada 3-4 meses si hay enfermedad periodontal",
  "preparacion": "Cepillarse y usar hilo dental antes de la cita. Informar sobre medicamentos y condiciones de salud.",
  "genero": "todos",
  "importanciaEs": "La salud dental esta ligada a la salud del corazon. La enfermedad periodontal aumenta el riesgo cardiovascular y de diabetes.",
  "importanciaEn": "Dental health is linked to heart health. Periodontal disease increases cardiovascular and diabetes risk."
},
{
  "id": "funcion-renal",
  "nombreEs": "Pruebas de funcion renal",
  "nombreEn": "Kidney function tests",
  "descripcionEs": "Analisis de sangre (creatinina, BUN, tasa de filtracion glomerular) y orina (albumina) para evaluar los rinones.",
  "descripcionEn": "Blood tests (creatinine, BUN, glomerular filtration rate) and urine (albumin) to evaluate kidneys.",
  "paraQueEs": "Detectar enfermedad renal cronica antes de que progrese a falla renal que requiera dialisis.",
  "paraQueEn": "Detect chronic kidney disease before it progresses to kidney failure requiring dialysis.",
  "edadRecomendada": "Pacientes con diabetes, hipertension o historia familiar de enfermedad renal",
  "frecuencia": "Anualmente si tiene diabetes o hipertension; segun indicacion medica para otros",
  "preparacion": "Recolectar primera orina de la manana si se pide muestra de orina. Ayuno puede ser requerido para sangre.",
  "genero": "todos",
  "importanciaEs": "El 90% de personas con enfermedad renal no lo saben. La deteccion temprana permite ralentizar la progresion significativamente.",
  "importanciaEn": "90% of people with kidney disease don't know it. Early detection allows significantly slowing progression."
},
{
  "id": "anemia",
  "nombreEs": "Hemograma completo (anemia)",
  "nombreEn": "Complete blood count (anemia screening)",
  "descripcionEs": "Analisis de sangre que cuenta globulos rojos, blancos, plaquetas y mide hemoglobina.",
  "descripcionEn": "Blood test counting red cells, white cells, platelets, and measuring hemoglobin.",
  "paraQueEs": "Detectar anemia, infecciones, trastornos de coagulacion y otras condiciones sanguineas.",
  "paraQueEn": "Detect anemia, infections, clotting disorders, and other blood conditions.",
  "edadRecomendada": "Embarazadas; mujeres con menstruacion abundante; personas con fatiga inexplicada",
  "frecuencia": "Anualmente en visitas de rutina; mas frecuente en embarazo",
  "preparacion": "Generalmente no requiere ayuno. Informar si toma suplementos de hierro.",
  "genero": "todos",
  "importanciaEs": "La anemia por deficiencia de hierro es la deficiencia nutricional mas comun del mundo. Es facilmente tratable con suplementos.",
  "importanciaEn": "Iron deficiency anemia is the world's most common nutritional deficiency. It is easily treatable with supplements."
},
{
  "id": "vitamina-d",
  "nombreEs": "Nivel de vitamina D",
  "nombreEn": "Vitamin D level",
  "descripcionEs": "Analisis de sangre que mide el nivel de 25-hidroxivitamina D.",
  "descripcionEn": "Blood test measuring 25-hydroxyvitamin D level.",
  "paraQueEs": "Detectar deficiencia de vitamina D que afecta huesos, sistema inmune y estado de animo.",
  "paraQueEn": "Detect vitamin D deficiency affecting bones, immune system, and mood.",
  "edadRecomendada": "Adultos mayores 65+; personas con piel oscura; baja exposicion solar; osteoporosis",
  "frecuencia": "Anualmente si hay factores de riesgo; repetir 3 meses despues de iniciar suplementacion",
  "preparacion": "No se requiere ayuno.",
  "genero": "todos",
  "importanciaEs": "Se estima que el 40% de la poblacion mundial tiene deficiencia de vitamina D. La suplementacion es segura y economica.",
  "importanciaEn": "An estimated 40% of the world population has vitamin D deficiency. Supplementation is safe and affordable."
}
]`);

// ============================================================
// VACUNAS DATA - Using JSON.parse to avoid TS2590
// ============================================================

export const vacunasData: VacunaEntry[] = JSON.parse(`[
{
  "id": "influenza",
  "nombreEs": "Vacuna contra la influenza (gripe)",
  "nombreEn": "Influenza (flu) vaccine",
  "descripcionEs": "Vacuna anual que protege contra las cepas de influenza circulantes de la temporada. Disponible en inyeccion y spray nasal.",
  "descripcionEn": "Annual vaccine protecting against the season's circulating influenza strains. Available as injection and nasal spray.",
  "previene": ["Influenza A", "Influenza B"],
  "esquemaEs": "Una dosis anual. Ninos de 6 meses a 8 anios pueden necesitar 2 dosis la primera vez.",
  "esquemaEn": "One dose annually. Children 6 months to 8 years may need 2 doses the first time.",
  "edadRecomendada": "6 meses en adelante, anualmente",
  "efectosSecundariosEs": ["Dolor en sitio de inyeccion", "Febricula", "Dolor muscular leve", "Fatiga por 1-2 dias"],
  "efectosSecundariosEn": ["Pain at injection site", "Low-grade fever", "Mild muscle aches", "Fatigue for 1-2 days"],
  "contraindicacionesEs": ["Alergia severa a componentes de la vacuna", "Sindrome de Guillain-Barre previo dentro de 6 semanas de vacunacion"],
  "contraindicacionesEn": ["Severe allergy to vaccine components", "Previous Guillain-Barre syndrome within 6 weeks of vaccination"],
  "obligatoria": false
},
{
  "id": "covid-19",
  "nombreEs": "Vacuna contra COVID-19",
  "nombreEn": "COVID-19 vaccine",
  "descripcionEs": "Vacuna que protege contra enfermedad grave, hospitalizacion y muerte por SARS-CoV-2. Se actualiza segun variantes circulantes.",
  "descripcionEn": "Vaccine protecting against severe illness, hospitalization, and death from SARS-CoV-2. Updated based on circulating variants.",
  "previene": ["COVID-19 grave", "Hospitalizacion por COVID", "COVID prolongado"],
  "esquemaEs": "Serie primaria mas refuerzos anuales actualizados. Consulte las guias vigentes para el esquema actual.",
  "esquemaEn": "Primary series plus updated annual boosters. Check current guidelines for the current schedule.",
  "edadRecomendada": "6 meses en adelante",
  "efectosSecundariosEs": ["Dolor en brazo", "Fatiga", "Dolor de cabeza", "Dolor muscular", "Escalofrios", "Fiebre leve 1-2 dias"],
  "efectosSecundariosEn": ["Arm pain", "Fatigue", "Headache", "Muscle pain", "Chills", "Mild fever 1-2 days"],
  "contraindicacionesEs": ["Reaccion alergica severa a dosis previa", "Alergia conocida a componentes"],
  "contraindicacionesEn": ["Severe allergic reaction to previous dose", "Known allergy to components"],
  "obligatoria": false
},
{
  "id": "neumococo",
  "nombreEs": "Vacuna antineumococica",
  "nombreEn": "Pneumococcal vaccine",
  "descripcionEs": "Protege contra infecciones por Streptococcus pneumoniae. Hay dos tipos: conjugada (PCV) y polisacarida (PPSV23).",
  "descripcionEn": "Protects against Streptococcus pneumoniae infections. Two types: conjugate (PCV) and polysaccharide (PPSV23).",
  "previene": ["Neumonia", "Meningitis", "Bacteriemia", "Otitis media"],
  "esquemaEs": "PCV: serie en la infancia (2, 4, 6 y 12-15 meses). Adultos 65+: PCV20 una dosis o PCV15 seguido de PPSV23.",
  "esquemaEn": "PCV: childhood series (2, 4, 6, and 12-15 months). Adults 65+: PCV20 one dose or PCV15 followed by PPSV23.",
  "edadRecomendada": "Ninos: 2 meses; adultos: 65+; cualquier edad con factores de riesgo",
  "efectosSecundariosEs": ["Dolor e hinchazon en sitio de inyeccion", "Fiebre leve", "Irritabilidad en bebes", "Fatiga"],
  "efectosSecundariosEn": ["Pain and swelling at injection site", "Low-grade fever", "Irritability in infants", "Fatigue"],
  "contraindicacionesEs": ["Alergia severa a dosis previa o componentes"],
  "contraindicacionesEn": ["Severe allergy to previous dose or components"],
  "obligatoria": true
},
{
  "id": "tetanos-difteria-pertussis",
  "nombreEs": "Vacuna contra tetanos, difteria y tosferina (Tdap/Td)",
  "nombreEn": "Tetanus, diphtheria, and pertussis vaccine (Tdap/Td)",
  "descripcionEs": "DTaP para ninos, Tdap para adolescentes y adultos. Protege contra tres enfermedades bacterianas graves.",
  "descripcionEn": "DTaP for children, Tdap for adolescents and adults. Protects against three serious bacterial diseases.",
  "previene": ["Tetanos", "Difteria", "Tosferina (pertussis)"],
  "esquemaEs": "DTaP: 5 dosis en ninos (2, 4, 6, 15-18 meses, 4-6 anios). Tdap: una dosis a los 11-12 anios. Td: refuerzo cada 10 anios. Embarazadas: Tdap en cada embarazo (semana 27-36).",
  "esquemaEn": "DTaP: 5 doses in children (2, 4, 6, 15-18 months, 4-6 years). Tdap: one dose at 11-12 years. Td: booster every 10 years. Pregnant: Tdap each pregnancy (week 27-36).",
  "edadRecomendada": "2 meses en adelante; refuerzos de por vida",
  "efectosSecundariosEs": ["Dolor e hinchazon en brazo", "Fiebre leve", "Dolor de cabeza", "Fatiga"],
  "efectosSecundariosEn": ["Pain and swelling in arm", "Low-grade fever", "Headache", "Fatigue"],
  "contraindicacionesEs": ["Reaccion alergica severa a dosis previa", "Encefalopatia dentro de 7 dias de dosis previa (para pertussis)"],
  "contraindicacionesEn": ["Severe allergic reaction to previous dose", "Encephalopathy within 7 days of previous dose (for pertussis)"],
  "obligatoria": true
},
{
  "id": "vph",
  "nombreEs": "Vacuna contra el virus del papiloma humano (VPH)",
  "nombreEn": "Human papillomavirus (HPV) vaccine",
  "descripcionEs": "Protege contra los tipos de VPH que causan cancer cervical, anal, de garganta y verrugas genitales.",
  "descripcionEn": "Protects against HPV types that cause cervical, anal, throat cancer, and genital warts.",
  "previene": ["Cancer cervical", "Cancer anal", "Cancer orofaringeo", "Verrugas genitales"],
  "esquemaEs": "2 dosis si se inicia antes de los 15 anios (0 y 6-12 meses). 3 dosis si se inicia a los 15+ (0, 2 y 6 meses).",
  "esquemaEn": "2 doses if started before age 15 (0 and 6-12 months). 3 doses if started at 15+ (0, 2, and 6 months).",
  "edadRecomendada": "11-12 anios (puede iniciar a los 9); hasta 26 anios; 27-45 decision compartida",
  "efectosSecundariosEs": ["Dolor en sitio de inyeccion", "Hinchazon", "Enrojecimiento", "Dolor de cabeza", "Mareo temporal"],
  "efectosSecundariosEn": ["Pain at injection site", "Swelling", "Redness", "Headache", "Temporary dizziness"],
  "contraindicacionesEs": ["Alergia severa a dosis previa o componentes (incluyendo levadura)", "Embarazo (posponer)"],
  "contraindicacionesEn": ["Severe allergy to previous dose or components (including yeast)", "Pregnancy (postpone)"],
  "obligatoria": false
},
{
  "id": "hepatitis-a-vac",
  "nombreEs": "Vacuna contra hepatitis A",
  "nombreEn": "Hepatitis A vaccine",
  "descripcionEs": "Vacuna inactivada que protege contra la infeccion del higado por virus de hepatitis A, transmitido por alimentos y agua contaminados.",
  "descripcionEn": "Inactivated vaccine protecting against hepatitis A liver infection, transmitted by contaminated food and water.",
  "previene": ["Hepatitis A"],
  "esquemaEs": "2 dosis separadas por 6 meses. Ninos: primera dosis al anio de edad.",
  "esquemaEn": "2 doses separated by 6 months. Children: first dose at 1 year of age.",
  "edadRecomendada": "12 meses; adultos que viajan a zonas endemicas o con factores de riesgo",
  "efectosSecundariosEs": ["Dolor en sitio de inyeccion", "Dolor de cabeza", "Fatiga", "Fiebre leve"],
  "efectosSecundariosEn": ["Pain at injection site", "Headache", "Fatigue", "Low-grade fever"],
  "contraindicacionesEs": ["Alergia severa a dosis previa o componentes"],
  "contraindicacionesEn": ["Severe allergy to previous dose or components"],
  "obligatoria": true
},
{
  "id": "hepatitis-b-vac",
  "nombreEs": "Vacuna contra hepatitis B",
  "nombreEn": "Hepatitis B vaccine",
  "descripcionEs": "Vacuna recombinante que protege contra hepatitis B, virus que puede causar infeccion cronica del higado, cirrosis y cancer.",
  "descripcionEn": "Recombinant vaccine protecting against hepatitis B, a virus that can cause chronic liver infection, cirrhosis, and cancer.",
  "previene": ["Hepatitis B cronica", "Cirrosis hepatica", "Cancer de higado"],
  "esquemaEs": "3 dosis: al nacer, 1 mes y 6 meses. Adultos no vacunados: 3 dosis (0, 1, 6 meses) o 2 dosis de Heplisav-B (0, 1 mes).",
  "esquemaEn": "3 doses: at birth, 1 month, and 6 months. Unvaccinated adults: 3 doses (0, 1, 6 months) or 2 doses of Heplisav-B (0, 1 month).",
  "edadRecomendada": "Al nacer; adultos 19-59; 60+ con factores de riesgo",
  "efectosSecundariosEs": ["Dolor en sitio de inyeccion", "Fiebre leve", "Fatiga"],
  "efectosSecundariosEn": ["Pain at injection site", "Low-grade fever", "Fatigue"],
  "contraindicacionesEs": ["Alergia severa a levadura o componentes de la vacuna"],
  "contraindicacionesEn": ["Severe allergy to yeast or vaccine components"],
  "obligatoria": true
},
{
  "id": "varicela",
  "nombreEs": "Vacuna contra la varicela",
  "nombreEn": "Varicella (chickenpox) vaccine",
  "descripcionEs": "Vacuna de virus vivo atenuado que protege contra la varicela y reduce el riesgo futuro de herpes zoster.",
  "descripcionEn": "Live attenuated virus vaccine protecting against chickenpox and reducing future shingles risk.",
  "previene": ["Varicela", "Complicaciones de varicela (neumonia, encefalitis)"],
  "esquemaEs": "2 dosis: primera a los 12-15 meses, segunda a los 4-6 anios. Adultos no inmunes: 2 dosis separadas por 4-8 semanas.",
  "esquemaEn": "2 doses: first at 12-15 months, second at 4-6 years. Non-immune adults: 2 doses 4-8 weeks apart.",
  "edadRecomendada": "12 meses; adultos sin evidencia de inmunidad",
  "efectosSecundariosEs": ["Dolor en sitio de inyeccion", "Fiebre leve", "Erupcion leve (pocas lesiones)", "Fatiga"],
  "efectosSecundariosEn": ["Pain at injection site", "Low-grade fever", "Mild rash (few lesions)", "Fatigue"],
  "contraindicacionesEs": ["Embarazo", "Inmunosupresion severa", "Alergia a gelatina o neomicina"],
  "contraindicacionesEn": ["Pregnancy", "Severe immunosuppression", "Allergy to gelatin or neomycin"],
  "obligatoria": true
},
{
  "id": "mmr",
  "nombreEs": "Vacuna triple viral (sarampion, rubeola, paperas - SRP/MMR)",
  "nombreEn": "MMR vaccine (measles, mumps, rubella)",
  "descripcionEs": "Vacuna de virus vivos atenuados que protege contra tres enfermedades virales altamente contagiosas.",
  "descripcionEn": "Live attenuated virus vaccine protecting against three highly contagious viral diseases.",
  "previene": ["Sarampion", "Paperas (parotiditis)", "Rubeola"],
  "esquemaEs": "2 dosis: primera a los 12-15 meses, segunda a los 4-6 anios.",
  "esquemaEn": "2 doses: first at 12-15 months, second at 4-6 years.",
  "edadRecomendada": "12 meses; adultos nacidos despues de 1957 sin evidencia de inmunidad",
  "efectosSecundariosEs": ["Fiebre", "Erupcion leve", "Hinchazon de glandulas", "Dolor articular temporal (mas en adultos)"],
  "efectosSecundariosEn": ["Fever", "Mild rash", "Swollen glands", "Temporary joint pain (more in adults)"],
  "contraindicacionesEs": ["Embarazo", "Inmunosupresion severa", "Alergia a neomicina o gelatina"],
  "contraindicacionesEn": ["Pregnancy", "Severe immunosuppression", "Allergy to neomycin or gelatin"],
  "obligatoria": true
},
{
  "id": "meningococo",
  "nombreEs": "Vacuna antimeningococica",
  "nombreEn": "Meningococcal vaccine",
  "descripcionEs": "Protege contra Neisseria meningitidis, bacteria que causa meningitis y sepsis fulminante. Hay vacunas conjugadas (ACWY) y del serogrupo B.",
  "descripcionEn": "Protects against Neisseria meningitidis causing meningitis and fulminant sepsis. Conjugate (ACWY) and serogroup B vaccines available.",
  "previene": ["Meningitis meningococica", "Sepsis meningococica"],
  "esquemaEs": "MenACWY: una dosis a los 11-12 anios, refuerzo a los 16. MenB: 2-3 dosis entre 16-23 anios (decision compartida).",
  "esquemaEn": "MenACWY: one dose at 11-12 years, booster at 16. MenB: 2-3 doses between 16-23 years (shared decision).",
  "edadRecomendada": "11-12 anios con refuerzo a los 16; adultos con riesgo (asplenia, deficiencia de complemento, viajeros)",
  "efectosSecundariosEs": ["Dolor en sitio de inyeccion", "Enrojecimiento", "Fatiga", "Dolor de cabeza", "Dolor muscular"],
  "efectosSecundariosEn": ["Pain at injection site", "Redness", "Fatigue", "Headache", "Muscle pain"],
  "contraindicacionesEs": ["Alergia severa a dosis previa o componentes"],
  "contraindicacionesEn": ["Severe allergy to previous dose or components"],
  "obligatoria": false
},
{
  "id": "fiebre-amarilla",
  "nombreEs": "Vacuna contra la fiebre amarilla",
  "nombreEn": "Yellow fever vaccine",
  "descripcionEs": "Vacuna de virus vivo atenuado requerida para viajeros a zonas endemicas de Africa y America del Sur.",
  "descripcionEn": "Live attenuated virus vaccine required for travelers to endemic areas of Africa and South America.",
  "previene": ["Fiebre amarilla"],
  "esquemaEs": "Una sola dosis proporciona proteccion de por vida para la mayoria de personas.",
  "esquemaEn": "A single dose provides lifelong protection for most people.",
  "edadRecomendada": "9 meses en adelante para viajeros a zonas endemicas",
  "efectosSecundariosEs": ["Dolor en sitio de inyeccion", "Fiebre leve", "Dolor muscular", "Dolor de cabeza"],
  "efectosSecundariosEn": ["Pain at injection site", "Low-grade fever", "Muscle pain", "Headache"],
  "contraindicacionesEs": ["Menores de 6 meses", "Alergia severa al huevo", "Inmunosupresion", "Enfermedad del timo", "Mayores de 60 (riesgo aumentado, evaluar)"],
  "contraindicacionesEn": ["Under 6 months", "Severe egg allergy", "Immunosuppression", "Thymus disease", "Over 60 (increased risk, evaluate)"],
  "obligatoria": false
},
{
  "id": "rabia",
  "nombreEs": "Vacuna antirrabica",
  "nombreEn": "Rabies vaccine",
  "descripcionEs": "Vacuna inactivada para prevencion antes o despues de exposicion a animales potencialmente rabicos.",
  "descripcionEn": "Inactivated vaccine for prevention before or after exposure to potentially rabid animals.",
  "previene": ["Rabia"],
  "esquemaEs": "Pre-exposicion: 3 dosis (dias 0, 7, 21-28). Post-exposicion: 4 dosis (dias 0, 3, 7, 14) mas inmunoglobulina si no hay vacunacion previa.",
  "esquemaEn": "Pre-exposure: 3 doses (days 0, 7, 21-28). Post-exposure: 4 doses (days 0, 3, 7, 14) plus immunoglobulin if no prior vaccination.",
  "edadRecomendada": "Cualquier edad si hay riesgo (veterinarios, viajeros, mordeduras de animales)",
  "efectosSecundariosEs": ["Dolor en sitio de inyeccion", "Dolor de cabeza", "Nauseas", "Dolor muscular", "Mareo"],
  "efectosSecundariosEn": ["Pain at injection site", "Headache", "Nausea", "Muscle pain", "Dizziness"],
  "contraindicacionesEs": ["Ninguna contraindicacion absoluta post-exposicion (la rabia es mortal)", "Pre-exposicion: enfermedad aguda moderada-severa"],
  "contraindicacionesEn": ["No absolute contraindication post-exposure (rabies is fatal)", "Pre-exposure: moderate-severe acute illness"],
  "obligatoria": false
},
{
  "id": "rotavirus",
  "nombreEs": "Vacuna contra rotavirus",
  "nombreEn": "Rotavirus vaccine",
  "descripcionEs": "Vacuna oral de virus vivo atenuado que protege contra la principal causa de diarrea severa en bebes y ninos pequenos.",
  "descripcionEn": "Oral live attenuated virus vaccine protecting against the leading cause of severe diarrhea in infants and young children.",
  "previene": ["Gastroenteritis severa por rotavirus", "Deshidratacion severa en lactantes"],
  "esquemaEs": "RotaTeq: 3 dosis a los 2, 4 y 6 meses. Rotarix: 2 dosis a los 2 y 4 meses. Debe completarse antes de los 8 meses.",
  "esquemaEn": "RotaTeq: 3 doses at 2, 4, and 6 months. Rotarix: 2 doses at 2 and 4 months. Must be completed before 8 months.",
  "edadRecomendada": "2-8 meses (primera dosis antes de 15 semanas)",
  "efectosSecundariosEs": ["Irritabilidad leve", "Diarrea leve", "Vomito leve"],
  "efectosSecundariosEn": ["Mild irritability", "Mild diarrhea", "Mild vomiting"],
  "contraindicacionesEs": ["Inmunodeficiencia combinada severa", "Historia de intususcepcion", "Alergia a componentes"],
  "contraindicacionesEn": ["Severe combined immunodeficiency", "History of intussusception", "Allergy to components"],
  "obligatoria": true
},
{
  "id": "bcg",
  "nombreEs": "Vacuna BCG (tuberculosis)",
  "nombreEn": "BCG vaccine (tuberculosis)",
  "descripcionEs": "Vacuna de bacteria viva atenuada (Mycobacterium bovis) que protege contra formas graves de tuberculosis en ninos.",
  "descripcionEn": "Live attenuated bacterial vaccine (Mycobacterium bovis) protecting against severe forms of tuberculosis in children.",
  "previene": ["Tuberculosis miliar", "Meningitis tuberculosa"],
  "esquemaEs": "Una dosis al nacer o lo antes posible en paises endemicos.",
  "esquemaEn": "One dose at birth or as soon as possible in endemic countries.",
  "edadRecomendada": "Al nacer en paises con alta incidencia de tuberculosis",
  "efectosSecundariosEs": ["Ulcera pequena en sitio de inyeccion", "Cicatriz permanente", "Inflamacion de ganglios locales (raro)"],
  "efectosSecundariosEn": ["Small ulcer at injection site", "Permanent scar", "Local lymph node inflammation (rare)"],
  "contraindicacionesEs": ["Inmunosupresion (incluyendo VIH sintomatico)", "Embarazo", "Tuberculosis activa"],
  "contraindicacionesEn": ["Immunosuppression (including symptomatic HIV)", "Pregnancy", "Active tuberculosis"],
  "obligatoria": true
},
{
  "id": "herpes-zoster",
  "nombreEs": "Vacuna contra el herpes zoster (culebrilla)",
  "nombreEn": "Shingles (herpes zoster) vaccine",
  "descripcionEs": "Vacuna recombinante (Shingrix) que previene la reactivacion del virus varicela-zoster y la neuralgia postherpetica.",
  "descripcionEn": "Recombinant vaccine (Shingrix) preventing varicella-zoster virus reactivation and postherpetic neuralgia.",
  "previene": ["Herpes zoster (culebrilla)", "Neuralgia postherpetica"],
  "esquemaEs": "2 dosis separadas por 2-6 meses. Mas del 90% de efectividad.",
  "esquemaEn": "2 doses 2-6 months apart. Over 90% effectiveness.",
  "edadRecomendada": "50 anios en adelante; 19+ si esta inmunocomprometido",
  "efectosSecundariosEs": ["Dolor en sitio de inyeccion (comun)", "Fatiga", "Dolor muscular", "Dolor de cabeza", "Escalofrios", "Fiebre"],
  "efectosSecundariosEn": ["Pain at injection site (common)", "Fatigue", "Muscle pain", "Headache", "Chills", "Fever"],
  "contraindicacionesEs": ["Alergia severa a componentes", "Herpes zoster activo (esperar a que resuelva)"],
  "contraindicacionesEn": ["Severe allergy to components", "Active shingles (wait until resolved)"],
  "obligatoria": false
},
{
  "id": "poliomielitis",
  "nombreEs": "Vacuna contra la poliomielitis (IPV)",
  "nombreEn": "Polio vaccine (IPV)",
  "descripcionEs": "Vacuna inactivada que protege contra el poliovirus, causante de paralisis permanente.",
  "descripcionEn": "Inactivated vaccine protecting against poliovirus, which causes permanent paralysis.",
  "previene": ["Poliomielitis", "Paralisis flacida aguda"],
  "esquemaEs": "4 dosis: a los 2, 4, 6-18 meses y 4-6 anios.",
  "esquemaEn": "4 doses: at 2, 4, 6-18 months, and 4-6 years.",
  "edadRecomendada": "2 meses; adultos no vacunados que viajan a zonas endemicas",
  "efectosSecundariosEs": ["Dolor en sitio de inyeccion", "Enrojecimiento leve"],
  "efectosSecundariosEn": ["Pain at injection site", "Mild redness"],
  "contraindicacionesEs": ["Alergia severa a neomicina, estreptomicina o polimixina B"],
  "contraindicacionesEn": ["Severe allergy to neomycin, streptomycin, or polymyxin B"],
  "obligatoria": true
},
{
  "id": "haemophilus-b",
  "nombreEs": "Vacuna contra Haemophilus influenzae tipo b (Hib)",
  "nombreEn": "Haemophilus influenzae type b (Hib) vaccine",
  "descripcionEs": "Vacuna conjugada que protege contra infecciones invasivas por Hib, particularmente meningitis en ninos.",
  "descripcionEn": "Conjugate vaccine protecting against invasive Hib infections, particularly meningitis in children.",
  "previene": ["Meningitis por Hib", "Epiglotitis", "Neumonia por Hib"],
  "esquemaEs": "3-4 dosis segun la marca: 2, 4, 6 (si aplica) y 12-15 meses.",
  "esquemaEn": "3-4 doses depending on brand: 2, 4, 6 (if applicable), and 12-15 months.",
  "edadRecomendada": "2 meses a 5 anios; adultos con asplenia o trasplante de celulas madre",
  "efectosSecundariosEs": ["Dolor en sitio de inyeccion", "Fiebre leve", "Irritabilidad"],
  "efectosSecundariosEn": ["Pain at injection site", "Low-grade fever", "Irritability"],
  "contraindicacionesEs": ["Menores de 6 semanas", "Alergia severa a dosis previa"],
  "contraindicacionesEn": ["Under 6 weeks old", "Severe allergy to previous dose"],
  "obligatoria": true
},
{
  "id": "virus-respiratorio-sincitial",
  "nombreEs": "Vacuna contra virus respiratorio sincitial (VRS)",
  "nombreEn": "Respiratory syncytial virus (RSV) vaccine",
  "descripcionEs": "Vacuna para proteger contra enfermedad severa de vias respiratorias bajas por VRS en adultos mayores y bebes (via anticuerpos maternos).",
  "descripcionEn": "Vaccine to protect against severe lower respiratory illness from RSV in older adults and infants (via maternal antibodies).",
  "previene": ["Bronquiolitis severa", "Neumonia por VRS"],
  "esquemaEs": "Adultos 60+: una dosis (decision compartida). Embarazadas: una dosis en semanas 32-36 para proteger al recien nacido.",
  "esquemaEn": "Adults 60+: one dose (shared decision). Pregnant: one dose at weeks 32-36 to protect the newborn.",
  "edadRecomendada": "Adultos 60+; embarazadas 32-36 semanas",
  "efectosSecundariosEs": ["Dolor en sitio de inyeccion", "Fatiga", "Dolor muscular", "Dolor de cabeza"],
  "efectosSecundariosEn": ["Pain at injection site", "Fatigue", "Muscle pain", "Headache"],
  "contraindicacionesEs": ["Alergia severa a componentes"],
  "contraindicacionesEn": ["Severe allergy to components"],
  "obligatoria": false
},
{
  "id": "mpox",
  "nombreEs": "Vacuna contra mpox (viruela del mono)",
  "nombreEn": "Mpox (monkeypox) vaccine",
  "descripcionEs": "Vacuna de virus vivo atenuado no replicante (JYNNEOS/MVA-BN) para personas con riesgo de exposicion a mpox.",
  "descripcionEn": "Non-replicating live attenuated virus vaccine (JYNNEOS/MVA-BN) for people at risk of mpox exposure.",
  "previene": ["Mpox (viruela del mono)"],
  "esquemaEs": "2 dosis separadas por 4 semanas. Puede darse post-exposicion dentro de 4 dias.",
  "esquemaEn": "2 doses 4 weeks apart. Can be given post-exposure within 4 days.",
  "edadRecomendada": "18+ con factores de riesgo de exposicion",
  "efectosSecundariosEs": ["Dolor en sitio de inyeccion", "Enrojecimiento", "Hinchazon", "Fatiga", "Dolor muscular"],
  "efectosSecundariosEn": ["Pain at injection site", "Redness", "Swelling", "Fatigue", "Muscle pain"],
  "contraindicacionesEs": ["Alergia severa a componentes (incluyendo proteinas de pollo o huevo, gentamicina, ciprofloxacino)"],
  "contraindicacionesEn": ["Severe allergy to components (including chicken or egg proteins, gentamicin, ciprofloxacin)"],
  "obligatoria": false
},
{
  "id": "dengue",
  "nombreEs": "Vacuna contra el dengue",
  "nombreEn": "Dengue vaccine",
  "descripcionEs": "Vacuna para personas con infeccion previa confirmada por dengue en areas endemicas. Reduce el riesgo de dengue grave.",
  "descripcionEn": "Vaccine for people with confirmed prior dengue infection in endemic areas. Reduces risk of severe dengue.",
  "previene": ["Dengue grave", "Dengue hemorragico"],
  "esquemaEs": "3 dosis a los 0, 6 y 12 meses. Solo para personas seropositivas (infeccion previa confirmada).",
  "esquemaEn": "3 doses at 0, 6, and 12 months. Only for seropositive individuals (confirmed prior infection).",
  "edadRecomendada": "9-16 anios con infeccion previa confirmada en areas endemicas",
  "efectosSecundariosEs": ["Dolor en sitio de inyeccion", "Dolor de cabeza", "Malestar general", "Fiebre leve"],
  "efectosSecundariosEn": ["Pain at injection site", "Headache", "Malaise", "Low-grade fever"],
  "contraindicacionesEs": ["Personas sin infeccion previa por dengue (riesgo de dengue severo)", "Inmunosupresion", "Embarazo"],
  "contraindicacionesEn": ["People without prior dengue infection (risk of severe dengue)", "Immunosuppression", "Pregnancy"],
  "obligatoria": false
}
]`);

// ============================================================
// HABITOS SALUDABLES DATA - Using JSON.parse to avoid TS2590
// ============================================================

export const habitosSaludablesData: HabitoSaludableEntry[] = JSON.parse(`[
{
  "id": "ejercicio-fisico",
  "nombreEs": "Ejercicio fisico regular",
  "nombreEn": "Regular physical exercise",
  "categoriaEs": "Actividad fisica",
  "categoriaEn": "Physical activity",
  "descripcionEs": "Realizar al menos 150 minutos semanales de actividad aerobica moderada o 75 minutos de actividad vigorosa, mas ejercicios de fortalecimiento muscular 2 dias por semana.",
  "descripcionEn": "Perform at least 150 minutes per week of moderate aerobic activity or 75 minutes of vigorous activity, plus muscle-strengthening exercises 2 days per week.",
  "beneficiosEs": ["Reduce riesgo cardiovascular en 30-40%", "Mejora control de azucar en sangre", "Fortalece huesos y musculos", "Reduce ansiedad y depresion", "Mejora calidad del sueno", "Ayuda a mantener peso saludable"],
  "beneficiosEn": ["Reduces cardiovascular risk by 30-40%", "Improves blood sugar control", "Strengthens bones and muscles", "Reduces anxiety and depression", "Improves sleep quality", "Helps maintain healthy weight"],
  "consejosEs": ["Empiece con 10 minutos diarios y aumente gradualmente", "Caminar es un excelente ejercicio accesible", "Busque actividades que disfrute para mantener constancia", "Use escaleras en vez de elevador", "Estacione lejos para caminar mas"],
  "consejosEn": ["Start with 10 minutes daily and increase gradually", "Walking is an excellent accessible exercise", "Find activities you enjoy for consistency", "Use stairs instead of elevator", "Park far away to walk more"],
  "evidenciaEs": "La inactividad fisica causa el 6% de las muertes globales. El ejercicio regular extiende la esperanza de vida 3-7 anios.",
  "evidenciaEn": "Physical inactivity causes 6% of global deaths. Regular exercise extends life expectancy by 3-7 years."
},
{
  "id": "nutricion-balanceada",
  "nombreEs": "Nutricion balanceada",
  "nombreEn": "Balanced nutrition",
  "categoriaEs": "Alimentacion",
  "categoriaEn": "Nutrition",
  "descripcionEs": "Dieta rica en frutas, verduras, granos integrales, proteinas magras y grasas saludables. Limitar azucares agregados, sodio y grasas saturadas.",
  "descripcionEn": "Diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats. Limit added sugars, sodium, and saturated fats.",
  "beneficiosEs": ["Reduce riesgo de enfermedad cardiaca", "Previene diabetes tipo 2", "Reduce riesgo de varios canceres", "Mejora funcion cerebral", "Fortalece sistema inmune", "Mantiene peso saludable"],
  "beneficiosEn": ["Reduces heart disease risk", "Prevents type 2 diabetes", "Reduces risk of several cancers", "Improves brain function", "Strengthens immune system", "Maintains healthy weight"],
  "consejosEs": ["Llene la mitad de su plato con frutas y verduras", "Elija granos integrales sobre refinados", "Limite alimentos ultraprocesados", "Cocine en casa con mas frecuencia", "Lea las etiquetas nutricionales"],
  "consejosEn": ["Fill half your plate with fruits and vegetables", "Choose whole grains over refined", "Limit ultra-processed foods", "Cook at home more often", "Read nutrition labels"],
  "evidenciaEs": "La mala alimentacion es responsable de mas muertes globalmente que el tabaco. La dieta mediterranea reduce mortalidad cardiovascular en 30%.",
  "evidenciaEn": "Poor diet causes more deaths globally than tobacco. The Mediterranean diet reduces cardiovascular mortality by 30%."
},
{
  "id": "sueno-saludable",
  "nombreEs": "Sueno saludable (higiene del sueno)",
  "nombreEn": "Healthy sleep (sleep hygiene)",
  "categoriaEs": "Descanso",
  "categoriaEn": "Rest",
  "descripcionEs": "Dormir 7-9 horas por noche para adultos, manteniendo horarios regulares y un ambiente propicio para el descanso.",
  "descripcionEn": "Sleep 7-9 hours per night for adults, maintaining regular schedules and a sleep-friendly environment.",
  "beneficiosEs": ["Fortalece el sistema inmune", "Mejora memoria y concentracion", "Regula hormonas del apetito", "Reduce riesgo de enfermedades cronicas", "Mejora estado de animo", "Favorece la reparacion celular"],
  "beneficiosEn": ["Strengthens immune system", "Improves memory and concentration", "Regulates appetite hormones", "Reduces chronic disease risk", "Improves mood", "Promotes cell repair"],
  "consejosEs": ["Acuestese y levantese a la misma hora cada dia", "Evite pantallas 1 hora antes de dormir", "Mantenga la habitacion oscura, fresca y silenciosa", "Evite cafeina despues de las 2 pm", "Establezca una rutina relajante antes de dormir"],
  "consejosEn": ["Go to bed and wake up at the same time daily", "Avoid screens 1 hour before bed", "Keep bedroom dark, cool, and quiet", "Avoid caffeine after 2 pm", "Establish a relaxing pre-sleep routine"],
  "evidenciaEs": "Dormir menos de 6 horas aumenta el riesgo de muerte prematura en 12%. El sueno insuficiente cronico equivale a los efectos del alcoholismo en la funcion cognitiva.",
  "evidenciaEn": "Sleeping less than 6 hours increases premature death risk by 12%. Chronic insufficient sleep equals alcoholism's effects on cognitive function."
},
{
  "id": "higiene-dental",
  "nombreEs": "Higiene dental diaria",
  "nombreEn": "Daily dental hygiene",
  "categoriaEs": "Higiene",
  "categoriaEn": "Hygiene",
  "descripcionEs": "Cepillarse los dientes al menos dos veces al dia con pasta dental con fluor, usar hilo dental diariamente y visitar al dentista regularmente.",
  "descripcionEn": "Brush teeth at least twice daily with fluoride toothpaste, floss daily, and visit the dentist regularly.",
  "beneficiosEs": ["Previene caries dental", "Reduce enfermedad de encias", "Previene perdida de dientes", "Reduce riesgo cardiovascular asociado", "Previene infecciones orales", "Mejora la autoestima"],
  "beneficiosEn": ["Prevents tooth decay", "Reduces gum disease", "Prevents tooth loss", "Reduces associated cardiovascular risk", "Prevents oral infections", "Improves self-esteem"],
  "consejosEs": ["Cepille por 2 minutos con movimientos suaves", "Cambie el cepillo cada 3-4 meses", "Use hilo dental antes de cepillarse", "No enjuague inmediatamente despues del cepillado (deje actuar el fluor)", "Limite alimentos azucarados entre comidas"],
  "consejosEn": ["Brush for 2 minutes with gentle strokes", "Change toothbrush every 3-4 months", "Floss before brushing", "Don't rinse immediately after brushing (let fluoride work)", "Limit sugary snacks between meals"],
  "evidenciaEs": "La enfermedad periodontal se asocia con un 25% mas de riesgo de enfermedad cardiaca. La caries dental es la enfermedad cronica mas comun del mundo.",
  "evidenciaEn": "Periodontal disease is associated with 25% higher heart disease risk. Tooth decay is the world's most common chronic disease."
},
{
  "id": "salud-mental",
  "nombreEs": "Cuidado de la salud mental",
  "nombreEn": "Mental health care",
  "categoriaEs": "Bienestar emocional",
  "categoriaEn": "Emotional wellness",
  "descripcionEs": "Practicar tecnicas de manejo del estres, mantener conexiones sociales, buscar ayuda profesional cuando sea necesario y dedicar tiempo al autocuidado.",
  "descripcionEn": "Practice stress management techniques, maintain social connections, seek professional help when needed, and dedicate time to self-care.",
  "beneficiosEs": ["Reduce riesgo de depresion y ansiedad", "Mejora relaciones interpersonales", "Aumenta productividad", "Fortalece el sistema inmune", "Reduce dolor cronico", "Mejora la toma de decisiones"],
  "beneficiosEn": ["Reduces depression and anxiety risk", "Improves interpersonal relationships", "Increases productivity", "Strengthens immune system", "Reduces chronic pain", "Improves decision-making"],
  "consejosEs": ["Practique mindfulness o meditacion 10 minutos diarios", "Mantenga contacto regular con seres queridos", "Ponga limites saludables al trabajo", "Busque ayuda profesional sin verguenza", "Reduzca tiempo en redes sociales"],
  "consejosEn": ["Practice mindfulness or meditation 10 minutes daily", "Stay in regular contact with loved ones", "Set healthy work boundaries", "Seek professional help without shame", "Reduce social media time"],
  "evidenciaEs": "Una de cada cuatro personas tendra un trastorno mental en su vida. La intervencion temprana mejora los resultados en un 60-80%.",
  "evidenciaEn": "One in four people will have a mental disorder in their lifetime. Early intervention improves outcomes by 60-80%."
},
{
  "id": "hidratacion",
  "nombreEs": "Hidratacion adecuada",
  "nombreEn": "Adequate hydration",
  "categoriaEs": "Alimentacion",
  "categoriaEn": "Nutrition",
  "descripcionEs": "Consumir suficiente agua diariamente (aproximadamente 2-3 litros para adultos), ajustando segun clima, actividad fisica y condiciones de salud.",
  "descripcionEn": "Consume enough water daily (approximately 2-3 liters for adults), adjusting for climate, physical activity, and health conditions.",
  "beneficiosEs": ["Mantiene funcion renal optima", "Mejora digestion y prevencion de estrenimiento", "Regula temperatura corporal", "Mejora concentracion y energia", "Mantiene piel saludable", "Reduce riesgo de calculos renales"],
  "beneficiosEn": ["Maintains optimal kidney function", "Improves digestion and prevents constipation", "Regulates body temperature", "Improves concentration and energy", "Maintains healthy skin", "Reduces kidney stone risk"],
  "consejosEs": ["Lleve una botella de agua reutilizable", "Beba un vaso de agua al despertar", "Coma frutas y verduras con alto contenido de agua", "No espere a tener sed para beber", "Limite bebidas azucaradas y con cafeina excesiva"],
  "consejosEn": ["Carry a reusable water bottle", "Drink a glass of water upon waking", "Eat fruits and vegetables with high water content", "Don't wait until thirsty to drink", "Limit sugary and excessive caffeine drinks"],
  "evidenciaEs": "Incluso una deshidratacion leve (1-2%) afecta negativamente la funcion cognitiva y el rendimiento fisico.",
  "evidenciaEn": "Even mild dehydration (1-2%) negatively affects cognitive function and physical performance."
},
{
  "id": "proteccion-solar",
  "nombreEs": "Proteccion solar",
  "nombreEn": "Sun protection",
  "categoriaEs": "Prevencion",
  "categoriaEn": "Prevention",
  "descripcionEs": "Proteger la piel de la radiacion ultravioleta usando protector solar SPF 30+, ropa protectora, sombra y evitando el sol del mediodia.",
  "descripcionEn": "Protect skin from ultraviolet radiation using SPF 30+ sunscreen, protective clothing, shade, and avoiding midday sun.",
  "beneficiosEs": ["Previene cancer de piel (incluido melanoma)", "Retrasa el envejecimiento de la piel", "Previene quemaduras solares", "Reduce riesgo de cataratas", "Previene manchas y dano solar"],
  "beneficiosEn": ["Prevents skin cancer (including melanoma)", "Delays skin aging", "Prevents sunburns", "Reduces cataract risk", "Prevents spots and sun damage"],
  "consejosEs": ["Aplique protector solar 15 minutos antes de salir", "Reaplique cada 2 horas y despues de nadar o sudar", "Use sombrero de ala ancha y lentes con proteccion UV", "Evite el sol directo entre 10 am y 4 pm", "Revise su piel mensualmente buscando cambios en lunares"],
  "consejosEn": ["Apply sunscreen 15 minutes before going out", "Reapply every 2 hours and after swimming or sweating", "Wear wide-brimmed hat and UV-protective sunglasses", "Avoid direct sun between 10 am and 4 pm", "Check your skin monthly for mole changes"],
  "evidenciaEs": "El uso regular de protector solar reduce el riesgo de melanoma en un 50% y el de cancer no melanoma en un 40%.",
  "evidenciaEn": "Regular sunscreen use reduces melanoma risk by 50% and non-melanoma skin cancer by 40%."
},
{
  "id": "no-fumar",
  "nombreEs": "No fumar / dejar de fumar",
  "nombreEn": "Not smoking / smoking cessation",
  "categoriaEs": "Prevencion",
  "categoriaEn": "Prevention",
  "descripcionEs": "Evitar el tabaco en todas sus formas. Si fuma, buscar ayuda para dejar de fumar con terapia conductual y/o medicamentos aprobados.",
  "descripcionEn": "Avoid tobacco in all forms. If smoking, seek help to quit with behavioral therapy and/or approved medications.",
  "beneficiosEs": ["Reduce riesgo de cancer de pulmon en 50% despues de 10 anios", "Reduce riesgo cardiovascular significativamente en 1 anio", "Mejora funcion pulmonar en semanas", "Ahorra dinero significativamente", "Protege a familiares del humo de segunda mano"],
  "beneficiosEn": ["Reduces lung cancer risk by 50% after 10 years", "Significantly reduces cardiovascular risk in 1 year", "Improves lung function within weeks", "Saves significant money", "Protects family from secondhand smoke"],
  "consejosEs": ["Fije una fecha para dejar de fumar", "Consulte sobre medicamentos que ayudan (parches, vareniclina)", "Identifique y evite situaciones que lo hacen fumar", "Busque apoyo de amigos, familia o grupos de apoyo", "No se desanime si recae, la mayoria necesita varios intentos"],
  "consejosEn": ["Set a quit date", "Ask about medications that help (patches, varenicline)", "Identify and avoid triggers", "Seek support from friends, family, or support groups", "Don't get discouraged by relapses, most people need several attempts"],
  "evidenciaEs": "El tabaco mata a 8 millones de personas al anio. Dejar de fumar a cualquier edad aumenta la esperanza de vida.",
  "evidenciaEn": "Tobacco kills 8 million people per year. Quitting smoking at any age increases life expectancy."
},
{
  "id": "consumo-alcohol",
  "nombreEs": "Consumo moderado de alcohol",
  "nombreEn": "Moderate alcohol consumption",
  "categoriaEs": "Prevencion",
  "categoriaEn": "Prevention",
  "descripcionEs": "Limitar el consumo de alcohol a no mas de 1 bebida diaria para mujeres y 2 para hombres, o idealmente no beber.",
  "descripcionEn": "Limit alcohol to no more than 1 drink daily for women and 2 for men, or ideally abstain.",
  "beneficiosEs": ["Reduce riesgo de enfermedad hepatica", "Reduce riesgo de multiples canceres", "Mejora salud mental", "Mejora calidad del sueno", "Reduce riesgo de accidentes", "Mejora relaciones personales"],
  "beneficiosEn": ["Reduces liver disease risk", "Reduces risk of multiple cancers", "Improves mental health", "Improves sleep quality", "Reduces accident risk", "Improves personal relationships"],
  "consejosEs": ["Establezca dias sin alcohol cada semana", "Alterne bebidas alcoholicas con agua", "No beba con el estomago vacio", "Busque ayuda si no puede controlar el consumo", "Evite beber para manejar el estres"],
  "consejosEn": ["Set alcohol-free days each week", "Alternate alcoholic drinks with water", "Don't drink on an empty stomach", "Seek help if you can't control consumption", "Avoid drinking to manage stress"],
  "evidenciaEs": "No existe un nivel seguro de consumo de alcohol segun la OMS. El alcohol contribuye a mas de 200 enfermedades y lesiones.",
  "evidenciaEn": "There is no safe level of alcohol consumption according to the WHO. Alcohol contributes to over 200 diseases and injuries."
},
{
  "id": "lavado-manos",
  "nombreEs": "Lavado de manos frecuente",
  "nombreEn": "Frequent hand washing",
  "categoriaEs": "Higiene",
  "categoriaEn": "Hygiene",
  "descripcionEs": "Lavarse las manos con agua y jabon por al menos 20 segundos, especialmente antes de comer, despues del bano y al llegar a casa.",
  "descripcionEn": "Wash hands with soap and water for at least 20 seconds, especially before eating, after using the bathroom, and upon arriving home.",
  "beneficiosEs": ["Reduce infecciones respiratorias en 20%", "Reduce diarrea en 30%", "Previene transmision de influenza y COVID", "Reduce ausentismo escolar y laboral", "Protege a personas vulnerables"],
  "beneficiosEn": ["Reduces respiratory infections by 20%", "Reduces diarrhea by 30%", "Prevents influenza and COVID transmission", "Reduces school and work absenteeism", "Protects vulnerable people"],
  "consejosEs": ["Moje, enjabone, frote 20 segundos, enjuague, seque", "Cubra todas las superficies incluyendo entre dedos y unas", "Use gel antibacterial cuando no haya agua disponible", "Ensenele a los ninos con canciones que duren 20 segundos", "Lave siempre antes de preparar alimentos"],
  "consejosEn": ["Wet, lather, scrub 20 seconds, rinse, dry", "Cover all surfaces including between fingers and nails", "Use hand sanitizer when water is unavailable", "Teach children with songs lasting 20 seconds", "Always wash before preparing food"],
  "evidenciaEs": "El lavado de manos es la intervencion de salud publica mas costo-efectiva. Previene hasta el 50% de infecciones adquiridas en hospitales.",
  "evidenciaEn": "Hand washing is the most cost-effective public health intervention. It prevents up to 50% of hospital-acquired infections."
},
{
  "id": "manejo-estres",
  "nombreEs": "Manejo del estres",
  "nombreEn": "Stress management",
  "categoriaEs": "Bienestar emocional",
  "categoriaEn": "Emotional wellness",
  "descripcionEs": "Desarrollar estrategias saludables para manejar el estres diario, incluyendo tecnicas de relajacion, organizacion del tiempo y limites saludables.",
  "descripcionEn": "Develop healthy strategies to manage daily stress, including relaxation techniques, time management, and healthy boundaries.",
  "beneficiosEs": ["Reduce riesgo de enfermedad cardiaca", "Mejora funcion inmune", "Previene ansiedad y depresion", "Mejora concentracion y productividad", "Mejora relaciones interpersonales", "Reduce dolor cronico"],
  "beneficiosEn": ["Reduces heart disease risk", "Improves immune function", "Prevents anxiety and depression", "Improves concentration and productivity", "Improves interpersonal relationships", "Reduces chronic pain"],
  "consejosEs": ["Practique respiracion profunda: inhale 4 segundos, sostenga 4, exhale 6", "Haga ejercicio regularmente como valvula de escape", "Identifique sus principales fuentes de estres", "Aprenda a decir no sin culpa", "Dedique tiempo diario a actividades placenteras"],
  "consejosEn": ["Practice deep breathing: inhale 4 seconds, hold 4, exhale 6", "Exercise regularly as an outlet", "Identify your main stress sources", "Learn to say no without guilt", "Dedicate daily time to pleasurable activities"],
  "evidenciaEs": "El estres cronico aumenta la inflamacion sistemica y se asocia con 75-90% de las visitas medicas. La meditacion reduce el cortisol en un 25%.",
  "evidenciaEn": "Chronic stress increases systemic inflammation and is associated with 75-90% of doctor visits. Meditation reduces cortisol by 25%."
},
{
  "id": "peso-saludable",
  "nombreEs": "Mantenimiento de peso saludable",
  "nombreEn": "Healthy weight maintenance",
  "categoriaEs": "Alimentacion",
  "categoriaEn": "Nutrition",
  "descripcionEs": "Mantener un peso corporal dentro del rango saludable (IMC 18.5-24.9) mediante balance entre alimentacion y actividad fisica.",
  "descripcionEn": "Maintain body weight within healthy range (BMI 18.5-24.9) through balance between nutrition and physical activity.",
  "beneficiosEs": ["Reduce riesgo de diabetes tipo 2 en 58%", "Reduce riesgo de enfermedad cardiaca", "Reduce riesgo de 13 tipos de cancer", "Mejora movilidad y calidad de vida", "Reduce dolor articular", "Mejora autoestima"],
  "beneficiosEn": ["Reduces type 2 diabetes risk by 58%", "Reduces heart disease risk", "Reduces risk of 13 types of cancer", "Improves mobility and quality of life", "Reduces joint pain", "Improves self-esteem"],
  "consejosEs": ["No haga dietas extremas, busque cambios sostenibles", "Coma porciones adecuadas, use platos mas pequenos", "Pese se regularmente pero no obsesivamente", "Combine dieta saludable con ejercicio", "Consulte a un nutriologo si necesita guia personalizada"],
  "consejosEn": ["Avoid extreme diets, seek sustainable changes", "Eat appropriate portions, use smaller plates", "Weigh yourself regularly but not obsessively", "Combine healthy diet with exercise", "Consult a nutritionist for personalized guidance"],
  "evidenciaEs": "Perder solo 5-7% del peso corporal reduce el riesgo de diabetes en prediabetes en un 58%. La obesidad es factor de riesgo para mas de 200 enfermedades.",
  "evidenciaEn": "Losing just 5-7% of body weight reduces diabetes risk in prediabetes by 58%. Obesity is a risk factor for over 200 diseases."
},
{
  "id": "chequeo-medico",
  "nombreEs": "Chequeo medico anual",
  "nombreEn": "Annual medical checkup",
  "categoriaEs": "Prevencion",
  "categoriaEn": "Prevention",
  "descripcionEs": "Visitar al medico al menos una vez al anio para revision general, actualizacion de tamizajes y vacunas, y evaluacion de factores de riesgo.",
  "descripcionEn": "Visit the doctor at least once a year for general checkup, screening and vaccine updates, and risk factor assessment.",
  "beneficiosEs": ["Deteccion temprana de enfermedades", "Actualizacion de vacunas", "Revision de medicamentos", "Evaluacion personalizada de riesgos", "Establecimiento de relacion medico-paciente", "Prevencion proactiva"],
  "beneficiosEn": ["Early disease detection", "Vaccine updates", "Medication review", "Personalized risk assessment", "Doctor-patient relationship building", "Proactive prevention"],
  "consejosEs": ["Prepare una lista de preguntas antes de la cita", "Lleve una lista actualizada de sus medicamentos", "Informe sobre antecedentes familiares de enfermedades", "Sea honesto sobre habitos como alcohol, tabaco y drogas", "Pregunte que tamizajes le corresponden segun su edad y sexo"],
  "consejosEn": ["Prepare a list of questions before the appointment", "Bring an updated medication list", "Report family history of diseases", "Be honest about habits like alcohol, tobacco, and drugs", "Ask which screenings are due based on your age and sex"],
  "evidenciaEs": "Las visitas preventivas regulares reducen hospitalizaciones en un 10-20% y permiten identificar problemas cuando aun son manejables.",
  "evidenciaEn": "Regular preventive visits reduce hospitalizations by 10-20% and allow identifying problems when still manageable."
},
{
  "id": "relaciones-sociales",
  "nombreEs": "Relaciones sociales saludables",
  "nombreEn": "Healthy social relationships",
  "categoriaEs": "Bienestar emocional",
  "categoriaEn": "Emotional wellness",
  "descripcionEs": "Cultivar y mantener relaciones significativas con familia, amigos y comunidad. La conexion social es una necesidad biologica fundamental.",
  "descripcionEn": "Cultivate and maintain meaningful relationships with family, friends, and community. Social connection is a fundamental biological need.",
  "beneficiosEs": ["Aumenta esperanza de vida en 50%", "Reduce riesgo de demencia", "Mejora recuperacion de enfermedades", "Reduce estres y depresion", "Fortalece sistema inmune", "Mejora salud cardiovascular"],
  "beneficiosEn": ["Increases life expectancy by 50%", "Reduces dementia risk", "Improves disease recovery", "Reduces stress and depression", "Strengthens immune system", "Improves cardiovascular health"],
  "consejosEs": ["Programe tiempo regular con personas importantes", "Participe en actividades comunitarias o voluntariado", "Limite el aislamiento por redes sociales", "Pida y ofrezca ayuda cuando sea necesario", "Cultive al menos 3-5 relaciones cercanas"],
  "consejosEn": ["Schedule regular time with important people", "Participate in community activities or volunteering", "Limit isolation from social media", "Ask for and offer help when needed", "Cultivate at least 3-5 close relationships"],
  "evidenciaEs": "La soledad tiene el mismo impacto en mortalidad que fumar 15 cigarrillos al dia. Las personas con relaciones fuertes viven en promedio 7 anios mas.",
  "evidenciaEn": "Loneliness has the same mortality impact as smoking 15 cigarettes a day. People with strong relationships live on average 7 years longer."
},
{
  "id": "postura-ergonomia",
  "nombreEs": "Buena postura y ergonomia",
  "nombreEn": "Good posture and ergonomics",
  "categoriaEs": "Actividad fisica",
  "categoriaEn": "Physical activity",
  "descripcionEs": "Mantener una postura correcta al sentarse, pararse y dormir. Configurar el espacio de trabajo para minimizar tension en el cuerpo.",
  "descripcionEn": "Maintain correct posture when sitting, standing, and sleeping. Set up workspace to minimize body strain.",
  "beneficiosEs": ["Previene dolor de espalda y cuello", "Reduce dolor de cabeza por tension", "Mejora respiracion y digestion", "Previene lesiones por esfuerzo repetitivo", "Mejora la energia y concentracion"],
  "beneficiosEn": ["Prevents back and neck pain", "Reduces tension headaches", "Improves breathing and digestion", "Prevents repetitive strain injuries", "Improves energy and concentration"],
  "consejosEs": ["Ajuste la pantalla al nivel de los ojos", "Levantese y estire cada 30-60 minutos", "Use una silla con buen soporte lumbar", "Mantenga los pies planos en el piso al sentarse", "Duerma con almohada que mantenga alineacion de columna"],
  "consejosEn": ["Adjust screen to eye level", "Stand and stretch every 30-60 minutes", "Use a chair with good lumbar support", "Keep feet flat on floor when sitting", "Sleep with a pillow that maintains spinal alignment"],
  "evidenciaEs": "El dolor de espalda es la principal causa de discapacidad en el mundo. La ergonomia adecuada reduce las lesiones laborales en un 60%.",
  "evidenciaEn": "Back pain is the leading cause of disability worldwide. Proper ergonomics reduces workplace injuries by 60%."
},
{
  "id": "seguridad-vial",
  "nombreEs": "Seguridad vial y prevencion de accidentes",
  "nombreEn": "Road safety and accident prevention",
  "categoriaEs": "Seguridad",
  "categoriaEn": "Safety",
  "descripcionEs": "Usar cinturon de seguridad, no conducir bajo efectos de alcohol o drogas, respetar limites de velocidad y usar asientos de seguridad para ninos.",
  "descripcionEn": "Wear seatbelts, don't drive under the influence of alcohol or drugs, respect speed limits, and use car seats for children.",
  "beneficiosEs": ["Reduce mortalidad en accidentes en 45%", "Previene lesiones cerebrales traumaticas", "Protege a pasajeros vulnerables", "Reduce costos medicos por lesiones", "Da ejemplo a los ninos"],
  "beneficiosEn": ["Reduces accident mortality by 45%", "Prevents traumatic brain injuries", "Protects vulnerable passengers", "Reduces medical costs from injuries", "Sets example for children"],
  "consejosEs": ["Siempre use cinturon, incluso en asiento trasero", "No use el celular mientras conduce", "Respete los limites de velocidad", "Use casco en bicicleta y motocicleta", "Verifique que sillas infantiles esten correctamente instaladas"],
  "consejosEn": ["Always wear seatbelt, even in back seat", "Don't use phone while driving", "Respect speed limits", "Wear helmet on bicycle and motorcycle", "Verify child car seats are correctly installed"],
  "evidenciaEs": "Los accidentes de transito son la principal causa de muerte en personas de 5-29 anios. El cinturon de seguridad reduce la mortalidad en un 45%.",
  "evidenciaEn": "Traffic accidents are the leading cause of death in people aged 5-29. Seatbelts reduce mortality by 45%."
}
]`);

// ============================================================
// SEARCH AND FILTER FUNCTIONS
// ============================================================

/**
 * Buscar tamizajes por texto / Search screenings by text
 * Busca en nombre, descripcion y preparacion en ambos idiomas.
 */
export function buscarTamizaje(query: string): TamizajeEntry[] {
  const q = query.toLowerCase().trim();
  if (!q) return tamizajesData;
  return tamizajesData.filter((t) => {
    const searchable = [
      t.id, t.nombreEs, t.nombreEn,
      t.descripcionEs, t.descripcionEn,
      t.paraQueEs, t.paraQueEn,
      t.edadRecomendada, t.preparacion,
      t.importanciaEs, t.importanciaEn,
    ].join(' ').toLowerCase();
    return searchable.includes(q);
  });
}

/**
 * Buscar vacunas por texto / Search vaccines by text
 * Busca en nombre, descripcion, prevencion y esquema en ambos idiomas.
 */
export function buscarVacuna(query: string): VacunaEntry[] {
  const q = query.toLowerCase().trim();
  if (!q) return vacunasData;
  return vacunasData.filter((v) => {
    const searchable = [
      v.id, v.nombreEs, v.nombreEn,
      v.descripcionEs, v.descripcionEn,
      ...v.previene,
      v.esquemaEs, v.esquemaEn,
      v.edadRecomendada,
    ].join(' ').toLowerCase();
    return searchable.includes(q);
  });
}

/**
 * Buscar habitos saludables por texto / Search healthy habits by text
 * Busca en nombre, categoria, descripcion y evidencia en ambos idiomas.
 */
export function buscarHabito(query: string): HabitoSaludableEntry[] {
  const q = query.toLowerCase().trim();
  if (!q) return habitosSaludablesData;
  return habitosSaludablesData.filter((h) => {
    const searchable = [
      h.id, h.nombreEs, h.nombreEn,
      h.categoriaEs, h.categoriaEn,
      h.descripcionEs, h.descripcionEn,
      ...h.beneficiosEs, ...h.beneficiosEn,
      h.evidenciaEs, h.evidenciaEn,
    ].join(' ').toLowerCase();
    return searchable.includes(q);
  });
}

/**
 * Obtener tamizajes recomendados por edad / Get recommended screenings by age
 * Interpreta el campo edadRecomendada para filtrar por una edad numerica.
 */
export function getTamizajesPorEdad(edad: number): TamizajeEntry[] {
  return tamizajesData.filter((t) => {
    const campo = t.edadRecomendada.toLowerCase();
    // Match patterns like "18+", "40-74", "45-75", "50-80"
    const rangoMatch = campo.match(/(\d+)\s*[-–]\s*(\d+)/);
    if (rangoMatch) {
      const min = parseInt(rangoMatch[1], 10);
      const max = parseInt(rangoMatch[2], 10);
      if (edad >= min && edad <= max) return true;
    }
    const masMatch = campo.match(/(\d+)\s*\+/);
    if (masMatch) {
      const min = parseInt(masMatch[1], 10);
      if (edad >= min) return true;
    }
    // If "todos" or no clear age pattern, include for adults
    if (campo.includes('todos') && edad >= 18) return true;
    // Specific keywords
    if (campo.includes('embarazada') || campo.includes('factores de riesgo')) return false;
    // Fallback: include if no numeric range found and person is adult
    if (!rangoMatch && !masMatch && edad >= 18) return true;
    return false;
  });
}

/**
 * Obtener vacunas recomendadas por edad / Get recommended vaccines by age
 * Interpreta el campo edadRecomendada para filtrar por una edad en anios.
 */
export function getVacunasPorEdad(edad: number): VacunaEntry[] {
  return vacunasData.filter((v) => {
    const campo = v.edadRecomendada.toLowerCase();
    // Match "X meses" for infants (convert to years)
    const mesesMatch = campo.match(/(\d+)\s*meses/);
    if (mesesMatch && edad < 2) return true;
    // Match "al nacer"
    if (campo.includes('al nacer') && edad < 1) return true;
    // Match "X anios" or "X+" or "X-Y anios"
    const rangoAniosMatch = campo.match(/(\d+)\s*[-–]\s*(\d+)\s*a[nñ]/);
    if (rangoAniosMatch) {
      const min = parseInt(rangoAniosMatch[1], 10);
      const max = parseInt(rangoAniosMatch[2], 10);
      if (edad >= min && edad <= max) return true;
    }
    const masAniosMatch = campo.match(/(\d+)\s*(?:a[nñ]os?\s+en\s+adelante|a[nñ]os?\s*\+|\+)/);
    if (masAniosMatch) {
      const min = parseInt(masAniosMatch[1], 10);
      if (edad >= min) return true;
    }
    // Match range like "X-Y" without "anios"
    const rangoSimple = campo.match(/(\d+)\s*[-–]\s*(\d+)/);
    if (rangoSimple) {
      const min = parseInt(rangoSimple[1], 10);
      const max = parseInt(rangoSimple[2], 10);
      // Only if values look like years (>= 1)
      if (min >= 1 && edad >= min && edad <= max) return true;
    }
    // "cualquier edad"
    if (campo.includes('cualquier edad')) return true;
    // Annually for everyone (influenza, covid)
    if (campo.includes('en adelante') && edad >= 1) {
      const adelanteMatch = campo.match(/(\d+)\s*(?:meses|a[nñ]os?)\s+en\s+adelante/);
      if (adelanteMatch) {
        const min = parseInt(adelanteMatch[1], 10);
        const isMonths = campo.includes('meses');
        const minYears = isMonths ? min / 12 : min;
        if (edad >= minYears) return true;
      }
    }
    return false;
  });
}
