// =============================================================================
// SOMA Urologia Detallada Enciclopedia — Spanish-First Bilingual
// Detailed Urology Patient Education Content
// =============================================================================
// ARCHITECTURE: JSON.parse() wrapper prevents TS2590 "expression too complex"
// =============================================================================

export interface UrologiaEntry {
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
  prevencionEs: string;
  prevencionEn: string;
  factoresRiesgoEs: string[];
  factoresRiesgoEn: string[];
  cuandoConsultarEs: string;
  cuandoConsultarEn: string;
}

export const UROLOGIA_ENTRIES: UrologiaEntry[] = JSON.parse(`[
  {
    "id": "hiperplasia-prostatica",
    "nombreEs": "Hiperplasia Prostatica Benigna",
    "nombreEn": "Benign Prostatic Hyperplasia",
    "categoriaEs": "prostata",
    "categoriaEn": "prostate",
    "descripcionEs": "La hiperplasia prostatica benigna (HPB) es un agrandamiento no canceroso de la glandula prostatica que ocurre con frecuencia en hombres a medida que envejecen. La prostata rodea la uretra, el conducto que transporta la orina desde la vejiga hacia el exterior del cuerpo, por lo que su crecimiento puede comprimir la uretra y causar dificultades para orinar. Afecta a aproximadamente el 50% de los hombres entre 51 y 60 anos y hasta el 90% de los hombres mayores de 80 anos. Aunque no es una condicion maligna, los sintomas urinarios que provoca pueden afectar significativamente la calidad de vida del paciente, interfiriendo con el sueno, las actividades diarias y el bienestar emocional. La HPB es un proceso progresivo que puede complicarse con retencion urinaria aguda, infecciones urinarias recurrentes, calculos vesicales y, en casos severos, dano renal si no se trata adecuadamente.",
    "descripcionEn": "Benign prostatic hyperplasia (BPH) is a non-cancerous enlargement of the prostate gland that commonly occurs in men as they age. The prostate surrounds the urethra, the tube that carries urine from the bladder out of the body, so its growth can compress the urethra and cause difficulty urinating. It affects approximately 50% of men between ages 51 and 60 and up to 90% of men over 80 years of age. Although it is not a malignant condition, the urinary symptoms it causes can significantly impact the patient's quality of life, interfering with sleep, daily activities, and emotional well-being. BPH is a progressive process that can be complicated by acute urinary retention, recurrent urinary tract infections, bladder stones, and in severe cases, kidney damage if not properly treated.",
    "sintomasEs": [
      "Dificultad para iniciar la miccion (hesitacion urinaria)",
      "Chorro de orina debil o intermitente",
      "Necesidad frecuente de orinar, especialmente por la noche (nicturia)",
      "Sensacion de vaciado incompleto de la vejiga",
      "Goteo al final de la miccion",
      "Urgencia urinaria repentina e imperiosa",
      "Esfuerzo excesivo al orinar",
      "Necesidad de orinar nuevamente pocos minutos despues de haber terminado"
    ],
    "sintomasEn": [
      "Difficulty starting urination (urinary hesitancy)",
      "Weak or intermittent urine stream",
      "Frequent need to urinate, especially at night (nocturia)",
      "Feeling of incomplete bladder emptying",
      "Dribbling at the end of urination",
      "Sudden and compelling urinary urgency",
      "Excessive straining to urinate",
      "Need to urinate again shortly after finishing"
    ],
    "causasEs": "La causa exacta de la HPB no se comprende completamente, pero se relaciona con cambios hormonales asociados al envejecimiento. Con la edad, los niveles de testosterona disminuyen mientras que los niveles de estrogeno relativo aumentan, lo que puede estimular el crecimiento de las celulas prostaticas. La dihidrotestosterona (DHT), un metabolito activo de la testosterona, juega un papel clave al promover la proliferacion celular en la prostata. Factores geneticos tambien contribuyen, ya que los hombres con antecedentes familiares de HPB tienen mayor probabilidad de desarrollarla. Ademas, factores metabolicos como la obesidad, la diabetes tipo 2 y el sindrome metabolico se han asociado con un mayor riesgo de HPB.",
    "causasEn": "The exact cause of BPH is not fully understood, but it is related to hormonal changes associated with aging. With age, testosterone levels decrease while relative estrogen levels increase, which may stimulate the growth of prostate cells. Dihydrotestosterone (DHT), an active metabolite of testosterone, plays a key role by promoting cell proliferation in the prostate. Genetic factors also contribute, as men with a family history of BPH are more likely to develop it. Additionally, metabolic factors such as obesity, type 2 diabetes, and metabolic syndrome have been associated with an increased risk of BPH.",
    "diagnosticoEs": "El diagnostico de HPB comienza con una historia clinica detallada y la evaluacion de sintomas mediante el cuestionario IPSS (International Prostate Symptom Score), que califica la severidad de los sintomas urinarios de 0 a 35 puntos. El examen fisico incluye el tacto rectal para evaluar el tamano, la forma y la consistencia de la prostata. Los estudios de laboratorio incluyen el antigeno prostatico especifico (PSA), analisis de orina para descartar infeccion, y medicion de creatinina para evaluar la funcion renal. La uroflujometria mide la velocidad del flujo urinario, y el residuo postmiccional se evalua mediante ecografia para determinar si la vejiga se vacia adecuadamente. En casos complejos, puede realizarse una cistoscopia o estudios urodinamicos completos para evaluar la funcion vesical.",
    "diagnosticoEn": "The diagnosis of BPH begins with a detailed medical history and symptom evaluation using the IPSS (International Prostate Symptom Score) questionnaire, which rates the severity of urinary symptoms from 0 to 35 points. Physical examination includes a digital rectal exam to assess the size, shape, and consistency of the prostate. Laboratory studies include prostate-specific antigen (PSA), urinalysis to rule out infection, and creatinine measurement to evaluate kidney function. Uroflowmetry measures the speed of urinary flow, and post-void residual is assessed by ultrasound to determine if the bladder empties adequately. In complex cases, cystoscopy or complete urodynamic studies may be performed to evaluate bladder function.",
    "tratamientoEs": "El tratamiento de la HPB depende de la severidad de los sintomas y su impacto en la calidad de vida. Para sintomas leves (IPSS menor a 8), se recomienda vigilancia activa con modificaciones del estilo de vida como reducir el consumo de liquidos antes de dormir, evitar cafeina y alcohol, y realizar ejercicios del suelo pelvico. El tratamiento farmacologico de primera linea incluye bloqueadores alfa-adrenergicos como tamsulosina, alfuzosina o silodosina, que relajan el musculo liso de la prostata y el cuello vesical para mejorar el flujo urinario. Los inhibidores de la 5-alfa reductasa como finasterida y dutasterida reducen el tamano de la prostata al bloquear la conversion de testosterona a DHT, siendo mas efectivos en prostatas grandes. La terapia combinada con ambos tipos de medicamentos es mas efectiva que la monoterapia en hombres con prostatas significativamente agrandadas. Para casos refractarios al tratamiento medico, las opciones quirurgicas incluyen la reseccion transuretral de prostata (RTUP), el laser verde (fotovaporizacion), la enucleacion con laser de holmio (HoLEP), el UroLift (elevacion uretral prostatica) y la terapia con vapor de agua (Rezum). La RTUP sigue siendo el estandar de oro quirurgico para prostatas de tamano moderado.",
    "tratamientoEn": "Treatment for BPH depends on the severity of symptoms and their impact on quality of life. For mild symptoms (IPSS less than 8), active surveillance with lifestyle modifications is recommended, such as reducing fluid intake before bedtime, avoiding caffeine and alcohol, and performing pelvic floor exercises. First-line pharmacological treatment includes alpha-adrenergic blockers such as tamsulosin, alfuzosin, or silodosin, which relax the smooth muscle of the prostate and bladder neck to improve urinary flow. 5-alpha reductase inhibitors such as finasteride and dutasteride reduce prostate size by blocking the conversion of testosterone to DHT, being more effective in large prostates. Combination therapy with both types of medications is more effective than monotherapy in men with significantly enlarged prostates. For cases refractory to medical treatment, surgical options include transurethral resection of the prostate (TURP), green light laser (photovaporization), holmium laser enucleation (HoLEP), UroLift (prostatic urethral lift), and water vapor therapy (Rezum). TURP remains the surgical gold standard for moderate-sized prostates.",
    "prevencionEs": "No existe una forma garantizada de prevenir la HPB, pero ciertos habitos saludables pueden reducir el riesgo o retrasar su aparicion. Mantener un peso corporal saludable es fundamental, ya que la obesidad se asocia con prostatas mas grandes y sintomas mas severos. El ejercicio regular, al menos 150 minutos de actividad aerobica moderada por semana, ha demostrado reducir el riesgo de HPB sintomatica. Una dieta rica en frutas, verduras, grasas saludables y baja en carnes rojas procesadas puede ser beneficiosa. Limitar el consumo de cafeina y alcohol, especialmente antes de dormir, ayuda a controlar los sintomas urinarios. Los examenes prostaticos regulares a partir de los 50 anos (o 40 en hombres con factores de riesgo) permiten la deteccion temprana y el manejo oportuno.",
    "prevencionEn": "There is no guaranteed way to prevent BPH, but certain healthy habits can reduce the risk or delay its onset. Maintaining a healthy body weight is essential, as obesity is associated with larger prostates and more severe symptoms. Regular exercise, at least 150 minutes of moderate aerobic activity per week, has been shown to reduce the risk of symptomatic BPH. A diet rich in fruits, vegetables, healthy fats, and low in processed red meats may be beneficial. Limiting caffeine and alcohol consumption, especially before bedtime, helps control urinary symptoms. Regular prostate exams starting at age 50 (or 40 in men with risk factors) allow for early detection and timely management.",
    "factoresRiesgoEs": [
      "Edad mayor de 50 anos",
      "Antecedentes familiares de HPB",
      "Obesidad y sindrome metabolico",
      "Diabetes mellitus tipo 2",
      "Sedentarismo y falta de actividad fisica",
      "Dieta alta en grasas saturadas y carnes rojas",
      "Consumo excesivo de alcohol"
    ],
    "factoresRiesgoEn": [
      "Age over 50 years",
      "Family history of BPH",
      "Obesity and metabolic syndrome",
      "Type 2 diabetes mellitus",
      "Sedentary lifestyle and lack of physical activity",
      "Diet high in saturated fats and red meats",
      "Excessive alcohol consumption"
    ],
    "cuandoConsultarEs": "Consulte a un medico si experimenta dificultad para orinar, necesidad de orinar con frecuencia durante la noche (mas de dos veces), chorro de orina debil o interrumpido, urgencia urinaria que interfiere con sus actividades diarias, o si nota sangre en la orina. Busque atencion de urgencia si no puede orinar en absoluto (retencion urinaria aguda), tiene dolor intenso en la parte baja del abdomen, o presenta fiebre con sintomas urinarios, ya que esto puede indicar una infeccion o complicacion grave.",
    "cuandoConsultarEn": "See a doctor if you experience difficulty urinating, frequent need to urinate at night (more than twice), weak or interrupted urine stream, urinary urgency that interferes with daily activities, or if you notice blood in your urine. Seek emergency care if you cannot urinate at all (acute urinary retention), have severe lower abdominal pain, or develop fever with urinary symptoms, as this may indicate a serious infection or complication."
  },
  {
    "id": "litiasis-renal",
    "nombreEs": "Litiasis Renal",
    "nombreEn": "Kidney Stones (Nephrolithiasis)",
    "categoriaEs": "litiasis",
    "categoriaEn": "lithiasis",
    "descripcionEs": "La litiasis renal, tambien conocida como nefrolitiasis o calculos renales, es la formacion de depositos solidos de minerales y sales dentro de los rinones. Estos calculos pueden formarse cuando la orina se concentra excesivamente, permitiendo que los minerales cristalicen y se unan. Los calculos pueden variar en tamano desde granos de arena hasta piedras del tamano de una pelota de golf. El tipo mas comun es el calculo de oxalato de calcio, que representa aproximadamente el 80% de todos los casos, seguido por los calculos de acido urico, estruvita (asociados a infecciones) y cistina. La litiasis renal afecta a aproximadamente el 12% de la poblacion mundial a lo largo de su vida, con una tasa de recurrencia del 50% dentro de los primeros 5 anos si no se implementan medidas preventivas adecuadas. El dolor causado por un calculo renal en movimiento, conocido como colico renal, se considera uno de los dolores mas intensos en la medicina.",
    "descripcionEn": "Renal lithiasis, also known as nephrolithiasis or kidney stones, is the formation of solid mineral and salt deposits within the kidneys. These stones can form when urine becomes excessively concentrated, allowing minerals to crystallize and bind together. Stones can range in size from grains of sand to golf ball-sized stones. The most common type is calcium oxalate stone, accounting for approximately 80% of all cases, followed by uric acid stones, struvite stones (associated with infections), and cystine stones. Kidney stones affect approximately 12% of the world's population over their lifetime, with a recurrence rate of 50% within the first 5 years if adequate preventive measures are not implemented. The pain caused by a moving kidney stone, known as renal colic, is considered one of the most intense pains in medicine.",
    "sintomasEs": [
      "Dolor severo y subito en el costado o la espalda baja (colico renal)",
      "Dolor que irradia hacia la ingle y la parte baja del abdomen",
      "Dolor que se presenta en oleadas y fluctua en intensidad",
      "Sangre en la orina (hematuria), que puede ser visible o microscopica",
      "Nauseas y vomitos asociados al dolor intenso",
      "Necesidad urgente y frecuente de orinar",
      "Dolor o ardor al orinar (disuria)",
      "Orina turbia o con mal olor",
      "Fiebre y escalofrios si hay infeccion asociada",
      "Incapacidad para encontrar una posicion comoda"
    ],
    "sintomasEn": [
      "Severe and sudden pain in the flank or lower back (renal colic)",
      "Pain radiating to the groin and lower abdomen",
      "Pain that comes in waves and fluctuates in intensity",
      "Blood in the urine (hematuria), which may be visible or microscopic",
      "Nausea and vomiting associated with intense pain",
      "Urgent and frequent need to urinate",
      "Pain or burning when urinating (dysuria)",
      "Cloudy or foul-smelling urine",
      "Fever and chills if infection is present",
      "Inability to find a comfortable position"
    ],
    "causasEs": "Los calculos renales se forman cuando hay un desequilibrio entre las sustancias promotoras de cristalizacion (calcio, oxalato, acido urico, cistina) y las sustancias inhibidoras (citrato, magnesio) en la orina. La deshidratacion cronica es la causa mas comun, ya que produce orina concentrada que facilita la cristalizacion. La dieta juega un papel crucial: el consumo excesivo de sodio aumenta la excrecion de calcio urinario, las dietas altas en proteina animal incrementan el acido urico y disminuyen el citrato, y el consumo excesivo de oxalato (espinacas, ruibarbo, chocolate) contribuye a la formacion de calculos de oxalato de calcio. Condiciones metabolicas como la hipercalciuria, la hiperuricosuria, la hipocitraturia y el hiperparatiroidismo predisponen a la formacion de calculos. Las infecciones urinarias por bacterias productoras de ureasa pueden generar calculos de estruvita. La cistinuria, un trastorno genetico, causa calculos de cistina recurrentes.",
    "causasEn": "Kidney stones form when there is an imbalance between crystallization-promoting substances (calcium, oxalate, uric acid, cystine) and inhibiting substances (citrate, magnesium) in the urine. Chronic dehydration is the most common cause, as it produces concentrated urine that facilitates crystallization. Diet plays a crucial role: excessive sodium consumption increases urinary calcium excretion, high animal protein diets increase uric acid and decrease citrate, and excessive oxalate consumption (spinach, rhubarb, chocolate) contributes to calcium oxalate stone formation. Metabolic conditions such as hypercalciuria, hyperuricosuria, hypocitraturia, and hyperparathyroidism predispose to stone formation. Urinary tract infections with urease-producing bacteria can generate struvite stones. Cystinuria, a genetic disorder, causes recurrent cystine stones.",
    "diagnosticoEs": "El diagnostico de litiasis renal comienza con la evaluacion clinica del dolor caracteristico y el analisis de orina, que frecuentemente muestra hematuria microscopica. La tomografia computarizada sin contraste (TAC helicoidal) es el estudio de imagen estandar de oro, con una sensibilidad superior al 95% para detectar calculos de cualquier composicion y tamano. La ecografia renal es la primera opcion en mujeres embarazadas y ninos para evitar la radiacion. El analisis metabolico incluye recoleccion de orina de 24 horas para medir calcio, oxalato, acido urico, citrato, sodio y volumen urinario, lo cual es esencial para la prevencion de recurrencia. El analisis de composicion del calculo (cuando se recupera) guia la terapia preventiva especifica. Los estudios de laboratorio incluyen creatinina serica, calcio, fosforo, acido urico y hormona paratiroidea si se sospecha hiperparatiroidismo.",
    "diagnosticoEn": "The diagnosis of kidney stones begins with clinical evaluation of characteristic pain and urinalysis, which frequently shows microscopic hematuria. Non-contrast computed tomography (helical CT) is the gold standard imaging study, with sensitivity greater than 95% for detecting stones of any composition and size. Renal ultrasound is the first choice in pregnant women and children to avoid radiation. Metabolic analysis includes 24-hour urine collection to measure calcium, oxalate, uric acid, citrate, sodium, and urinary volume, which is essential for recurrence prevention. Stone composition analysis (when recovered) guides specific preventive therapy. Laboratory studies include serum creatinine, calcium, phosphorus, uric acid, and parathyroid hormone if hyperparathyroidism is suspected.",
    "tratamientoEs": "El tratamiento depende del tamano, la ubicacion y la composicion del calculo, asi como de la severidad de los sintomas. Los calculos menores de 5 mm generalmente se expulsan espontaneamente con terapia medica expulsiva, que incluye hidratacion abundante, analgesicos (antiinflamatorios no esteroideos como ketorolaco o diclofenaco), y bloqueadores alfa como tamsulosina para facilitar el paso del calculo. Para calculos de 5 a 10 mm, se puede intentar la terapia expulsiva durante 4 a 6 semanas. La litotricia extracorporea por ondas de choque (LEOC) fragmenta los calculos menores de 2 cm utilizando ondas de choque dirigidas desde el exterior del cuerpo. La ureteroscopia con laser de holmio es el procedimiento preferido para calculos ureterales y renales de tamano moderado, con tasas de exito superiores al 90%. La nefrolitotomia percutanea se reserva para calculos renales grandes (mayores de 2 cm) o calculos coraliformes. En situaciones de emergencia con obstruccion ureteral e infeccion (pionefrosis), se requiere descompresion urgente mediante cateter ureteral doble J o nefrostomia percutanea antes de cualquier tratamiento definitivo.",
    "tratamientoEn": "Treatment depends on the size, location, and composition of the stone, as well as symptom severity. Stones smaller than 5 mm generally pass spontaneously with medical expulsive therapy, which includes abundant hydration, analgesics (non-steroidal anti-inflammatory drugs such as ketorolac or diclofenac), and alpha-blockers such as tamsulosin to facilitate stone passage. For stones 5 to 10 mm, expulsive therapy can be attempted for 4 to 6 weeks. Extracorporeal shock wave lithotripsy (ESWL) fragments stones smaller than 2 cm using shock waves directed from outside the body. Ureteroscopy with holmium laser is the preferred procedure for moderate-sized ureteral and renal stones, with success rates exceeding 90%. Percutaneous nephrolithotomy is reserved for large renal stones (greater than 2 cm) or staghorn calculi. In emergency situations with ureteral obstruction and infection (pyonephrosis), urgent decompression via double-J ureteral stent or percutaneous nephrostomy is required before any definitive treatment.",
    "prevencionEs": "La medida preventiva mas importante es mantener una hidratacion adecuada, con el objetivo de producir al menos 2.5 litros de orina al dia. La dieta debe incluir un consumo moderado de calcio (1000-1200 mg/dia proveniente de alimentos, no suplementos), ya que paradojicamente el calcio dietetico reduce la absorcion intestinal de oxalato. Se recomienda limitar el sodio a menos de 2300 mg/dia, ya que el exceso de sodio aumenta la excrecion urinaria de calcio. Reducir la proteina animal a 0.8-1.0 g/kg/dia ayuda a disminuir la produccion de acido urico. Aumentar el consumo de citricos (limones, limas, naranjas) proporciona citrato natural que inhibe la formacion de calculos. Para pacientes con calculos de acido urico, la alcalinizacion de la orina con citrato de potasio hasta un pH de 6.5-7.0 puede disolver los calculos existentes y prevenir nuevos. El analisis metabolico con orina de 24 horas permite personalizar las recomendaciones preventivas.",
    "prevencionEn": "The most important preventive measure is maintaining adequate hydration, with the goal of producing at least 2.5 liters of urine per day. The diet should include moderate calcium intake (1000-1200 mg/day from food, not supplements), since paradoxically dietary calcium reduces intestinal oxalate absorption. Limiting sodium to less than 2300 mg/day is recommended, as excess sodium increases urinary calcium excretion. Reducing animal protein to 0.8-1.0 g/kg/day helps decrease uric acid production. Increasing citrus consumption (lemons, limes, oranges) provides natural citrate that inhibits stone formation. For patients with uric acid stones, urine alkalinization with potassium citrate to a pH of 6.5-7.0 can dissolve existing stones and prevent new ones. Metabolic analysis with 24-hour urine allows for personalized preventive recommendations.",
    "factoresRiesgoEs": [
      "Deshidratacion cronica e ingesta insuficiente de liquidos",
      "Antecedentes personales o familiares de calculos renales",
      "Dieta alta en sodio, proteina animal y oxalato",
      "Obesidad y diabetes mellitus tipo 2",
      "Clima calido y exposicion prolongada al calor",
      "Enfermedades digestivas que afectan la absorcion (enfermedad de Crohn, cirugia bariatrica)",
      "Hiperparatiroidismo primario",
      "Infecciones urinarias recurrentes",
      "Uso cronico de ciertos medicamentos (vitamina C en dosis altas, indinavir, topiramato)"
    ],
    "factoresRiesgoEn": [
      "Chronic dehydration and insufficient fluid intake",
      "Personal or family history of kidney stones",
      "Diet high in sodium, animal protein, and oxalate",
      "Obesity and type 2 diabetes mellitus",
      "Hot climate and prolonged heat exposure",
      "Digestive diseases affecting absorption (Crohn's disease, bariatric surgery)",
      "Primary hyperparathyroidism",
      "Recurrent urinary tract infections",
      "Chronic use of certain medications (high-dose vitamin C, indinavir, topiramate)"
    ],
    "cuandoConsultarEs": "Busque atencion medica inmediata si experimenta dolor severo en el costado o espalda que no se alivia con analgesicos, nauseas y vomitos persistentes que impiden la hidratacion oral, sangre visible en la orina, fiebre superior a 38 grados con dolor de costado (esto puede indicar una infeccion urinaria asociada que es una emergencia), o incapacidad total para orinar. Consulte a su medico si ha tenido calculos previos y experimenta sintomas recurrentes, ya que la evaluacion metabolica y las estrategias preventivas pueden reducir significativamente el riesgo de futuros episodios.",
    "cuandoConsultarEn": "Seek immediate medical attention if you experience severe flank or back pain not relieved by analgesics, persistent nausea and vomiting preventing oral hydration, visible blood in urine, fever above 38 degrees Celsius with flank pain (this may indicate an associated urinary infection which is an emergency), or complete inability to urinate. Consult your doctor if you have had previous stones and experience recurrent symptoms, as metabolic evaluation and preventive strategies can significantly reduce the risk of future episodes."
  },
  {
    "id": "infeccion-urinaria",
    "nombreEs": "Infeccion del Tracto Urinario",
    "nombreEn": "Urinary Tract Infection",
    "categoriaEs": "infecciosa",
    "categoriaEn": "infectious",
    "descripcionEs": "La infeccion del tracto urinario (ITU) es una infeccion causada por microorganismos, principalmente bacterias, que afecta cualquier parte del sistema urinario, incluyendo rinones, ureteres, vejiga y uretra. Las infecciones del tracto urinario inferior (cistitis y uretritis) son las mas comunes, mientras que las del tracto superior (pielonefritis) son mas graves y pueden requerir hospitalizacion. Escherichia coli es el agente causal en el 75-95% de los casos no complicados. Las ITU son mucho mas frecuentes en mujeres debido a la uretra mas corta y su proximidad anatomica con la region perianal, afectando a aproximadamente el 50-60% de las mujeres al menos una vez en su vida. En hombres, las ITU son menos comunes pero pueden indicar anomalias anatomicas, obstruccion prostatica o litiasis, y requieren una evaluacion mas exhaustiva. Las ITU recurrentes, definidas como tres o mas episodios en un ano o dos en seis meses, afectan al 20-30% de las mujeres que han tenido un primer episodio.",
    "descripcionEn": "Urinary tract infection (UTI) is an infection caused by microorganisms, primarily bacteria, affecting any part of the urinary system, including kidneys, ureters, bladder, and urethra. Lower urinary tract infections (cystitis and urethritis) are the most common, while upper tract infections (pyelonephritis) are more serious and may require hospitalization. Escherichia coli is the causative agent in 75-95% of uncomplicated cases. UTIs are much more common in women due to the shorter urethra and its anatomical proximity to the perianal region, affecting approximately 50-60% of women at least once in their lifetime. In men, UTIs are less common but may indicate anatomical abnormalities, prostatic obstruction, or lithiasis, requiring more thorough evaluation. Recurrent UTIs, defined as three or more episodes in one year or two in six months, affect 20-30% of women who have had a first episode.",
    "sintomasEs": [
      "Ardor o dolor al orinar (disuria)",
      "Necesidad frecuente y urgente de orinar con pequenas cantidades",
      "Orina turbia, oscura o con mal olor",
      "Sangre en la orina (hematuria)",
      "Dolor o presion en la parte baja del abdomen o la region suprapubica",
      "Sensacion de no poder vaciar completamente la vejiga",
      "Fiebre alta con escalofrios (indica pielonefritis)",
      "Dolor en la espalda baja o el costado (indica afectacion renal)",
      "Nauseas y vomitos (en pielonefritis)",
      "Malestar general y fatiga"
    ],
    "sintomasEn": [
      "Burning or pain when urinating (dysuria)",
      "Frequent and urgent need to urinate with small amounts",
      "Cloudy, dark, or foul-smelling urine",
      "Blood in the urine (hematuria)",
      "Pain or pressure in the lower abdomen or suprapubic region",
      "Feeling of inability to completely empty the bladder",
      "High fever with chills (indicates pyelonephritis)",
      "Lower back or flank pain (indicates kidney involvement)",
      "Nausea and vomiting (in pyelonephritis)",
      "General malaise and fatigue"
    ],
    "causasEs": "Las ITU ocurren cuando bacterias, principalmente del tracto gastrointestinal, ascienden por la uretra hasta la vejiga o los rinones. Escherichia coli es responsable de la gran mayoria de los casos comunitarios. Otros agentes incluyen Klebsiella pneumoniae, Proteus mirabilis, Staphylococcus saprophyticus (comun en mujeres jovenes) y Enterococcus faecalis. Las relaciones sexuales aumentan el riesgo en mujeres al facilitar la introduccion de bacterias en la uretra. El uso de espermicidas y diafragmas altera la flora vaginal protectora. En hombres, la obstruccion por hiperplasia prostatica predispone a la infeccion al impedir el vaciado completo de la vejiga. Los cateteres urinarios son una causa importante de ITU nosocomial, con un riesgo de infeccion del 3-7% por dia de cateterizacion. Condiciones como la diabetes, la inmunosupresion y las anomalias anatomicas del tracto urinario tambien aumentan la susceptibilidad.",
    "causasEn": "UTIs occur when bacteria, primarily from the gastrointestinal tract, ascend through the urethra to the bladder or kidneys. Escherichia coli is responsible for the vast majority of community-acquired cases. Other agents include Klebsiella pneumoniae, Proteus mirabilis, Staphylococcus saprophyticus (common in young women), and Enterococcus faecalis. Sexual intercourse increases risk in women by facilitating the introduction of bacteria into the urethra. Spermicide and diaphragm use alters protective vaginal flora. In men, obstruction from prostatic hyperplasia predisposes to infection by preventing complete bladder emptying. Urinary catheters are an important cause of nosocomial UTI, with an infection risk of 3-7% per day of catheterization. Conditions such as diabetes, immunosuppression, and anatomical abnormalities of the urinary tract also increase susceptibility.",
    "diagnosticoEs": "El diagnostico se basa en la sintomatologia clinica junto con el analisis de orina y el urocultivo. El analisis de orina con tira reactiva puede detectar esterasa leucocitaria (indica presencia de leucocitos) y nitritos (indica bacterias gram-negativas). El examen microscopico del sedimento urinario muestra leucocituria (mas de 10 leucocitos por campo) y posible bacteriuria. El urocultivo es el estandar de oro diagnostico, considerandose positivo con mas de 100,000 unidades formadoras de colonias por mililitro, aunque en mujeres sintomaticas se acepta desde 1,000 UFC/ml. El antibiograma es esencial para guiar el tratamiento, especialmente en ITU complicadas o recurrentes. En hombres, ITU recurrentes o ITU en ninos, se recomienda evaluacion con ecografia renal y vesical, y posiblemente cistoscopia o cistouretrografia miccional para descartar anomalias anatomicas.",
    "diagnosticoEn": "Diagnosis is based on clinical symptoms along with urinalysis and urine culture. Dipstick urinalysis can detect leukocyte esterase (indicating presence of white blood cells) and nitrites (indicating gram-negative bacteria). Microscopic examination of urine sediment shows leukocyturia (more than 10 white blood cells per field) and possible bacteriuria. Urine culture is the diagnostic gold standard, considered positive with more than 100,000 colony-forming units per milliliter, although in symptomatic women 1,000 CFU/ml is accepted. Antibiotic susceptibility testing is essential to guide treatment, especially in complicated or recurrent UTIs. In men, recurrent UTIs, or UTIs in children, evaluation with renal and bladder ultrasound is recommended, and possibly cystoscopy or voiding cystourethrography to rule out anatomical abnormalities.",
    "tratamientoEs": "El tratamiento de la cistitis no complicada en mujeres incluye antibioticos de primera linea: nitrofurantoina 100 mg dos veces al dia por 5 dias, trimetoprim-sulfametoxazol (si la resistencia local es menor al 20%) por 3 dias, o fosfomicina en dosis unica de 3 gramos. Las fluoroquinolonas (ciprofloxacino, levofloxacino) deben reservarse para casos complicados debido a sus efectos adversos y al aumento de resistencia bacteriana. La pielonefritis leve puede tratarse ambulatoriamente con fluoroquinolonas orales por 7-14 dias, mientras que la pielonefritis severa requiere hospitalizacion con antibioticos intravenosos como ceftriaxona, piperacilina-tazobactam o carbapenems. En ITU complicadas (asociadas a cateteres, anomalias anatomicas, embarazo o inmunosupresion), el tratamiento debe guiarse por el antibiograma y la duracion es tipicamente de 10-14 dias. Para ITU recurrentes en mujeres, las estrategias incluyen profilaxis antibiotica a dosis baja, profilaxis postcoital, terapia de autotratamiento con antibioticos a demanda y, en mujeres posmenopausicas, estrogenos vaginales topicos. El aumento de la ingesta de liquidos y el uso de productos con arandanos pueden tener un papel complementario.",
    "tratamientoEn": "Treatment of uncomplicated cystitis in women includes first-line antibiotics: nitrofurantoin 100 mg twice daily for 5 days, trimethoprim-sulfamethoxazole (if local resistance is less than 20%) for 3 days, or fosfomycin as a single 3-gram dose. Fluoroquinolones (ciprofloxacin, levofloxacin) should be reserved for complicated cases due to their adverse effects and increasing bacterial resistance. Mild pyelonephritis can be treated on an outpatient basis with oral fluoroquinolones for 7-14 days, while severe pyelonephritis requires hospitalization with intravenous antibiotics such as ceftriaxone, piperacillin-tazobactam, or carbapenems. In complicated UTIs (associated with catheters, anatomical abnormalities, pregnancy, or immunosuppression), treatment should be guided by antibiotic susceptibility testing and duration is typically 10-14 days. For recurrent UTIs in women, strategies include low-dose antibiotic prophylaxis, post-coital prophylaxis, self-treatment therapy with on-demand antibiotics, and in postmenopausal women, topical vaginal estrogens. Increased fluid intake and use of cranberry products may have a complementary role.",
    "prevencionEs": "La prevencion de ITU incluye medidas generales como mantener una hidratacion adecuada (beber al menos 1.5-2 litros de agua al dia), orinar frecuentemente sin reprimir la necesidad, y vaciar completamente la vejiga. Las mujeres deben limpiarse de adelante hacia atras despues de ir al bano para evitar la contaminacion de la uretra con bacterias fecales. Orinar antes y despues de las relaciones sexuales ayuda a eliminar bacterias que puedan haber ingresado a la uretra. Evitar productos de higiene intima irritantes, duchas vaginales y espermicidas es recomendable. El uso de probioticos con Lactobacillus puede ayudar a mantener una flora vaginal protectora. En mujeres posmenopausicas, los estrogenos vaginales topicos restauran la flora vaginal normal y reducen significativamente las ITU recurrentes. Para pacientes con cateteres, la retirada lo mas pronto posible y el mantenimiento de un sistema cerrado de drenaje son fundamentales.",
    "prevencionEn": "UTI prevention includes general measures such as maintaining adequate hydration (drinking at least 1.5-2 liters of water per day), urinating frequently without suppressing the urge, and completely emptying the bladder. Women should wipe from front to back after using the bathroom to avoid contaminating the urethra with fecal bacteria. Urinating before and after sexual intercourse helps eliminate bacteria that may have entered the urethra. Avoiding irritating intimate hygiene products, vaginal douches, and spermicides is recommended. Use of probiotics with Lactobacillus may help maintain protective vaginal flora. In postmenopausal women, topical vaginal estrogens restore normal vaginal flora and significantly reduce recurrent UTIs. For patients with catheters, removal as soon as possible and maintenance of a closed drainage system are essential.",
    "factoresRiesgoEs": [
      "Sexo femenino (uretra mas corta)",
      "Actividad sexual frecuente",
      "Uso de espermicidas o diafragmas",
      "Menopausia y deficiencia de estrogenos",
      "Antecedentes de ITU previas",
      "Diabetes mellitus",
      "Cateterizacion urinaria",
      "Obstruccion del tracto urinario (calculos, HPB)",
      "Inmunosupresion",
      "Embarazo"
    ],
    "factoresRiesgoEn": [
      "Female sex (shorter urethra)",
      "Frequent sexual activity",
      "Use of spermicides or diaphragms",
      "Menopause and estrogen deficiency",
      "History of previous UTIs",
      "Diabetes mellitus",
      "Urinary catheterization",
      "Urinary tract obstruction (stones, BPH)",
      "Immunosuppression",
      "Pregnancy"
    ],
    "cuandoConsultarEs": "Consulte a un medico si experimenta ardor al orinar, necesidad frecuente de orinar con pequenas cantidades, orina turbia o con sangre, o dolor suprapubico. Busque atencion urgente si presenta fiebre alta (mayor de 38.5 grados), dolor severo en el costado o la espalda baja, escalofrios, nauseas y vomitos, ya que estos sintomas pueden indicar pielonefritis que requiere tratamiento inmediato. Las mujeres embarazadas con cualquier sintoma urinario deben buscar atencion medica de inmediato, ya que las ITU no tratadas durante el embarazo pueden provocar parto prematuro y complicaciones graves.",
    "cuandoConsultarEn": "See a doctor if you experience burning when urinating, frequent need to urinate with small amounts, cloudy or bloody urine, or suprapubic pain. Seek urgent care if you have high fever (above 38.5 degrees Celsius), severe flank or lower back pain, chills, nausea and vomiting, as these symptoms may indicate pyelonephritis requiring immediate treatment. Pregnant women with any urinary symptoms should seek medical attention immediately, as untreated UTIs during pregnancy can cause premature labor and serious complications."
  },
  {
    "id": "cancer-prostata",
    "nombreEs": "Cancer de Prostata",
    "nombreEn": "Prostate Cancer",
    "categoriaEs": "oncologica",
    "categoriaEn": "oncological",
    "descripcionEs": "El cancer de prostata es el tumor maligno mas frecuente en hombres y la segunda causa de muerte por cancer en hombres en los paises occidentales. Se origina en las celulas glandulares de la prostata y generalmente es un adenocarcinoma. La mayoria de los canceres de prostata son de crecimiento lento e inicialmente confinados a la glandula prostatica, donde pueden no causar dano significativo. Sin embargo, algunos tipos son agresivos y pueden diseminarse rapidamente a huesos, ganglios linfaticos y otros organos. La deteccion temprana mediante el antigeno prostatico especifico (PSA) y el tacto rectal ha permitido diagnosticar la enfermedad en etapas tempranas en muchos casos. La escala de Gleason y el sistema de grupos de grado ayudan a clasificar la agresividad del tumor, lo cual es fundamental para decidir entre vigilancia activa, tratamiento curativo o terapia paliativa. El cancer de prostata afecta a aproximadamente 1 de cada 8 hombres a lo largo de su vida.",
    "descripcionEn": "Prostate cancer is the most common malignant tumor in men and the second leading cause of cancer death in men in Western countries. It originates in the glandular cells of the prostate and is usually an adenocarcinoma. Most prostate cancers are slow-growing and initially confined to the prostate gland, where they may not cause significant harm. However, some types are aggressive and can spread rapidly to bones, lymph nodes, and other organs. Early detection through prostate-specific antigen (PSA) and digital rectal exam has allowed diagnosis of the disease at early stages in many cases. The Gleason scale and grade group system help classify tumor aggressiveness, which is fundamental for deciding between active surveillance, curative treatment, or palliative therapy. Prostate cancer affects approximately 1 in 8 men over their lifetime.",
    "sintomasEs": [
      "Frecuentemente asintomatico en etapas tempranas",
      "Dificultad para orinar o chorro urinario debil",
      "Necesidad frecuente de orinar, especialmente por la noche",
      "Sangre en la orina (hematuria) o en el semen (hematospermia)",
      "Dolor o ardor al orinar",
      "Disfuncion erectil de inicio reciente",
      "Dolor oseo persistente, especialmente en espalda, caderas o pelvis (enfermedad avanzada)",
      "Perdida de peso inexplicable y fatiga (enfermedad avanzada)",
      "Debilidad en las piernas o incontinencia (compresion medular por metastasis)"
    ],
    "sintomasEn": [
      "Frequently asymptomatic in early stages",
      "Difficulty urinating or weak urinary stream",
      "Frequent need to urinate, especially at night",
      "Blood in urine (hematuria) or semen (hematospermia)",
      "Pain or burning when urinating",
      "Recent-onset erectile dysfunction",
      "Persistent bone pain, especially in back, hips, or pelvis (advanced disease)",
      "Unexplained weight loss and fatigue (advanced disease)",
      "Leg weakness or incontinence (spinal cord compression from metastasis)"
    ],
    "causasEs": "La causa exacta del cancer de prostata no se conoce completamente, pero involucra una combinacion de factores geneticos, hormonales y ambientales. La testosterona y la dihidrotestosterona estimulan el crecimiento de las celulas prostaticas, tanto normales como cancerosas. Las mutaciones geneticas acumulativas, especialmente en genes como BRCA1, BRCA2 y HOXB13, aumentan significativamente el riesgo. La predisposicion hereditaria se observa en el 5-10% de los casos, con un riesgo dos a tres veces mayor si un familiar de primer grado tiene la enfermedad. La inflamacion cronica de la prostata (prostatitis) puede crear un microambiente que favorezca la transformacion maligna. Factores dieteticos como el alto consumo de grasas saturadas, carnes rojas procesadas y productos lacteos en grandes cantidades se han asociado con mayor riesgo, aunque la evidencia no es concluyente.",
    "causasEn": "The exact cause of prostate cancer is not fully known, but it involves a combination of genetic, hormonal, and environmental factors. Testosterone and dihydrotestosterone stimulate the growth of prostate cells, both normal and cancerous. Cumulative genetic mutations, especially in genes such as BRCA1, BRCA2, and HOXB13, significantly increase risk. Hereditary predisposition is observed in 5-10% of cases, with a two to three times higher risk if a first-degree relative has the disease. Chronic prostate inflammation (prostatitis) may create a microenvironment that favors malignant transformation. Dietary factors such as high consumption of saturated fats, processed red meats, and large amounts of dairy products have been associated with increased risk, although the evidence is not conclusive.",
    "diagnosticoEs": "El tamizaje incluye la medicion del PSA en sangre y el tacto rectal. Un PSA mayor de 4 ng/ml o un tacto rectal anormal sugieren la necesidad de estudios adicionales. Sin embargo, el PSA puede estar elevado por causas benignas como la HPB y la prostatitis. El indice de PSA libre/total y la densidad de PSA mejoran la especificidad. La resonancia magnetica multiparametrica de prostata (RMmp) se ha convertido en una herramienta esencial para detectar lesiones sospechosas y guiar biopsias dirigidas. La biopsia de prostata transrectal o transperineal guiada por ecografia o fusion con RM, con al menos 12 cilindros, es necesaria para el diagnostico histologico. La clasificacion de Gleason (escala 6-10) y el grupo de grado ISUP (1-5) determinan la agresividad tumoral. Los estudios de extension incluyen gammagrafia osea, TAC o RM para evaluar metastasis. Biomarcadores como el PCA3 urinario, el indice de salud prostatica (PHI) y los tests genomicos (Oncotype DX, Decipher) ayudan en la toma de decisiones.",
    "diagnosticoEn": "Screening includes blood PSA measurement and digital rectal exam. A PSA greater than 4 ng/ml or an abnormal rectal exam suggests the need for additional studies. However, PSA can be elevated from benign causes such as BPH and prostatitis. The free/total PSA ratio and PSA density improve specificity. Multiparametric MRI of the prostate (mpMRI) has become an essential tool for detecting suspicious lesions and guiding targeted biopsies. Transrectal or transperineal prostate biopsy guided by ultrasound or MRI fusion, with at least 12 cores, is necessary for histological diagnosis. The Gleason classification (scale 6-10) and ISUP grade group (1-5) determine tumor aggressiveness. Staging studies include bone scan, CT, or MRI to evaluate metastasis. Biomarkers such as urinary PCA3, prostate health index (PHI), and genomic tests (Oncotype DX, Decipher) aid in decision-making.",
    "tratamientoEs": "El tratamiento depende del estadio, la agresividad del tumor, la edad y las comorbilidades del paciente. La vigilancia activa es apropiada para canceres de bajo riesgo (Gleason 6, PSA menor de 10, estadio T1-T2a), con seguimiento regular de PSA, tacto rectal y biopsias periodicas. La prostatectomia radical (abierta, laparoscopica o robotica asistida por Da Vinci) extirpa toda la prostata y las vesiculas seminales, siendo la opcion preferida para enfermedad localizada en hombres con expectativa de vida mayor a 10 anos. La radioterapia, ya sea externa (IMRT, SBRT) o braquiterapia (implantacion de semillas radioactivas), ofrece tasas de curacion similares a la cirugia. La terapia de deprivacion androgenica (TDA) con agonistas o antagonistas de GnRH es el pilar del tratamiento para enfermedad avanzada o metastasica, eliminando la estimulacion de testosterona sobre las celulas cancerosas. Para cancer metastasico resistente a la castracion, las opciones incluyen nuevos agentes hormonales (enzalutamida, abiraterona), quimioterapia con docetaxel o cabazitaxel, inmunoterapia (sipuleucel-T), radioterapia dirigida a hueso (radio-223) y terapias dirigidas basadas en mutaciones BRCA (inhibidores de PARP como olaparib).",
    "tratamientoEn": "Treatment depends on the stage, tumor aggressiveness, patient age, and comorbidities. Active surveillance is appropriate for low-risk cancers (Gleason 6, PSA less than 10, stage T1-T2a), with regular PSA follow-up, digital rectal exam, and periodic biopsies. Radical prostatectomy (open, laparoscopic, or Da Vinci robot-assisted) removes the entire prostate and seminal vesicles, being the preferred option for localized disease in men with life expectancy greater than 10 years. Radiation therapy, either external beam (IMRT, SBRT) or brachytherapy (radioactive seed implantation), offers cure rates similar to surgery. Androgen deprivation therapy (ADT) with GnRH agonists or antagonists is the cornerstone of treatment for advanced or metastatic disease, eliminating testosterone stimulation of cancer cells. For metastatic castration-resistant cancer, options include new hormonal agents (enzalutamide, abiraterone), chemotherapy with docetaxel or cabazitaxel, immunotherapy (sipuleucel-T), bone-targeted radiotherapy (radium-223), and targeted therapies based on BRCA mutations (PARP inhibitors such as olaparib).",
    "prevencionEs": "No existe una forma definitiva de prevenir el cancer de prostata, pero ciertas estrategias pueden reducir el riesgo. Una dieta rica en frutas, verduras, tomates (licopeno), cruciferas (brocoli, coliflor) y pescado rico en omega-3 puede ser protectora. Mantener un peso saludable es importante, ya que la obesidad se asocia con cancer de prostata mas agresivo. El ejercicio regular reduce el riesgo y mejora los resultados en pacientes diagnosticados. El tamizaje con PSA, recomendado como decision compartida entre paciente y medico a partir de los 50 anos (o 45 en hombres con factores de riesgo), permite la deteccion temprana cuando el tratamiento es mas efectivo. Los inhibidores de la 5-alfa reductasa (finasterida, dutasterida) han demostrado reducir la incidencia general de cancer de prostata en un 25%, aunque existe controversia sobre su efecto en tumores de alto grado.",
    "prevencionEn": "There is no definitive way to prevent prostate cancer, but certain strategies may reduce risk. A diet rich in fruits, vegetables, tomatoes (lycopene), cruciferous vegetables (broccoli, cauliflower), and omega-3 rich fish may be protective. Maintaining a healthy weight is important, as obesity is associated with more aggressive prostate cancer. Regular exercise reduces risk and improves outcomes in diagnosed patients. PSA screening, recommended as a shared decision between patient and physician starting at age 50 (or 45 in men with risk factors), allows early detection when treatment is most effective. 5-alpha reductase inhibitors (finasteride, dutasteride) have been shown to reduce overall prostate cancer incidence by 25%, although there is controversy regarding their effect on high-grade tumors.",
    "factoresRiesgoEs": [
      "Edad mayor de 50 anos (el riesgo aumenta significativamente con la edad)",
      "Raza afroamericana (mayor incidencia y mortalidad)",
      "Antecedentes familiares de cancer de prostata en primer grado",
      "Mutaciones geneticas hereditarias (BRCA1, BRCA2, HOXB13, sindrome de Lynch)",
      "Dieta alta en grasas saturadas y carnes rojas procesadas",
      "Obesidad, particularmente la adiposidad abdominal",
      "Exposicion al agente naranja (veteranos de Vietnam)"
    ],
    "factoresRiesgoEn": [
      "Age over 50 years (risk increases significantly with age)",
      "African American race (higher incidence and mortality)",
      "Family history of prostate cancer in first-degree relatives",
      "Hereditary genetic mutations (BRCA1, BRCA2, HOXB13, Lynch syndrome)",
      "Diet high in saturated fats and processed red meats",
      "Obesity, particularly abdominal adiposity",
      "Agent Orange exposure (Vietnam veterans)"
    ],
    "cuandoConsultarEs": "Consulte a un medico para discutir el tamizaje con PSA a partir de los 50 anos, o a los 45 si es afroamericano o tiene antecedentes familiares de cancer de prostata. Busque atencion medica si experimenta dificultad para orinar, sangre en la orina o el semen, dolor oseo persistente e inexplicable, o perdida de peso no intencionada. Si ya esta en vigilancia activa, mantenga estrictamente sus citas de seguimiento con PSA, tacto rectal y biopsias programadas, y consulte de inmediato si nota cambios en sus sintomas urinarios o aparicion de dolor nuevo.",
    "cuandoConsultarEn": "See a doctor to discuss PSA screening starting at age 50, or at 45 if you are African American or have a family history of prostate cancer. Seek medical attention if you experience difficulty urinating, blood in urine or semen, persistent unexplained bone pain, or unintentional weight loss. If you are already on active surveillance, strictly maintain your follow-up appointments for PSA, digital rectal exam, and scheduled biopsies, and consult immediately if you notice changes in your urinary symptoms or onset of new pain."
  },
  {
    "id": "incontinencia-urinaria",
    "nombreEs": "Incontinencia Urinaria",
    "nombreEn": "Urinary Incontinence",
    "categoriaEs": "funcional",
    "categoriaEn": "functional",
    "descripcionEs": "La incontinencia urinaria es la perdida involuntaria de orina que constituye un problema social e higienico significativo. Afecta a millones de personas en todo el mundo, siendo mucho mas prevalente en mujeres, donde alcanza tasas del 25-45% en adultas, aunque tambien afecta a un 5-15% de los hombres. Existen varios tipos principales: la incontinencia de esfuerzo, causada por debilidad del suelo pelvico y que se manifiesta con la tos, el estornudo o el ejercicio; la incontinencia de urgencia, asociada a contracciones involuntarias del musculo detrusor de la vejiga; la incontinencia mixta, que combina ambas; y la incontinencia por rebosamiento, donde la vejiga no se vacia completamente. A pesar de su alta prevalencia, la incontinencia urinaria esta subdiagnosticada porque muchos pacientes sienten verguenza y no consultan a su medico. El impacto en la calidad de vida es profundo, afectando el bienestar emocional, las relaciones sociales, la actividad sexual y la independencia funcional, y puede llevar a aislamiento social, depresion y caidas en adultos mayores.",
    "descripcionEn": "Urinary incontinence is the involuntary loss of urine that constitutes a significant social and hygienic problem. It affects millions of people worldwide, being much more prevalent in women, where it reaches rates of 25-45% in adult women, although it also affects 5-15% of men. There are several main types: stress incontinence, caused by pelvic floor weakness and manifested with coughing, sneezing, or exercise; urge incontinence, associated with involuntary contractions of the bladder detrusor muscle; mixed incontinence, which combines both; and overflow incontinence, where the bladder does not empty completely. Despite its high prevalence, urinary incontinence is underdiagnosed because many patients feel embarrassment and do not consult their physician. The impact on quality of life is profound, affecting emotional well-being, social relationships, sexual activity, and functional independence, and can lead to social isolation, depression, and falls in older adults.",
    "sintomasEs": [
      "Perdida de orina al toser, estornudar, reir o hacer ejercicio (incontinencia de esfuerzo)",
      "Urgencia subita e incontrolable de orinar seguida de perdida involuntaria (incontinencia de urgencia)",
      "Necesidad frecuente de ir al bano (mas de 8 veces al dia)",
      "Nicturia frecuente (despertar mas de dos veces por la noche para orinar)",
      "Goteo constante de orina o sensacion de vejiga siempre llena (incontinencia por rebosamiento)",
      "Incapacidad de llegar al bano a tiempo",
      "Necesidad de usar protectores o panales absorbentes",
      "Irritacion o infecciones cutaneas en la zona perineal por exposicion cronica a la humedad"
    ],
    "sintomasEn": [
      "Urine loss when coughing, sneezing, laughing, or exercising (stress incontinence)",
      "Sudden uncontrollable urge to urinate followed by involuntary loss (urge incontinence)",
      "Frequent need to go to the bathroom (more than 8 times per day)",
      "Frequent nocturia (waking more than twice at night to urinate)",
      "Constant urine dribbling or feeling of always-full bladder (overflow incontinence)",
      "Inability to reach the bathroom in time",
      "Need to use protective pads or absorbent diapers",
      "Skin irritation or infections in the perineal area from chronic moisture exposure"
    ],
    "causasEs": "Las causas varian segun el tipo de incontinencia. La incontinencia de esfuerzo es causada por el debilitamiento del suelo pelvico y el esfinter uretral, frecuentemente como consecuencia del embarazo y el parto vaginal, cirugia pelvica, menopausia (por disminucion de estrogenos que debilita los tejidos de soporte), obesidad y tos cronica. La incontinencia de urgencia se debe a hiperactividad del musculo detrusor, que puede ser idiopatica o secundaria a infecciones urinarias, calculos vesicales, tumores, enfermedades neurologicas (esclerosis multiple, enfermedad de Parkinson, accidente cerebrovascular, lesion medular) o diabetes. La incontinencia por rebosamiento resulta de la obstruccion del tracto de salida (hiperplasia prostatica en hombres) o de la hipoactividad del detrusor (neuropatia diabetica, lesion medular). En hombres, la incontinencia post-prostatectomia radical es una causa frecuente y generalmente mejora con el tiempo y la rehabilitacion del suelo pelvico.",
    "causasEn": "Causes vary by type of incontinence. Stress incontinence is caused by weakening of the pelvic floor and urethral sphincter, frequently as a consequence of pregnancy and vaginal delivery, pelvic surgery, menopause (from decreased estrogen that weakens supportive tissues), obesity, and chronic cough. Urge incontinence is due to detrusor muscle overactivity, which may be idiopathic or secondary to urinary infections, bladder stones, tumors, neurological diseases (multiple sclerosis, Parkinson's disease, stroke, spinal cord injury), or diabetes. Overflow incontinence results from outlet obstruction (prostatic hyperplasia in men) or detrusor underactivity (diabetic neuropathy, spinal cord injury). In men, post-radical prostatectomy incontinence is a common cause and generally improves with time and pelvic floor rehabilitation.",
    "diagnosticoEs": "La evaluacion comienza con una historia clinica detallada que incluya tipo, frecuencia y severidad de los episodios de incontinencia, uso de protectores, impacto en calidad de vida y medicamentos actuales. El diario miccional de 3 dias registra horarios, volumenes, episodios de incontinencia y eventos desencadenantes. El examen fisico incluye evaluacion del suelo pelvico, prueba de estres con tos, tacto rectal en hombres y evaluacion neurologica. El analisis de orina descarta infeccion y hematuria. La medicion del residuo postmiccional por ecografia identifica incontinencia por rebosamiento. Los cuestionarios validados como el ICIQ-SF cuantifican la severidad. Los estudios urodinamicos completos, incluyendo cistometria, perfilometria uretral y estudio presion-flujo, estan indicados cuando el diagnostico no esta claro, antes de cirugia, o cuando el tratamiento inicial ha fallado. La cistoscopia se reserva para hematuria, sospecha de patologia intravesical o evaluacion prequirurgica.",
    "diagnosticoEn": "Evaluation begins with a detailed medical history including type, frequency, and severity of incontinence episodes, pad usage, quality of life impact, and current medications. A 3-day voiding diary records times, volumes, incontinence episodes, and triggering events. Physical examination includes pelvic floor assessment, cough stress test, digital rectal exam in men, and neurological evaluation. Urinalysis rules out infection and hematuria. Post-void residual measurement by ultrasound identifies overflow incontinence. Validated questionnaires such as the ICIQ-SF quantify severity. Complete urodynamic studies, including cystometry, urethral profilometry, and pressure-flow study, are indicated when diagnosis is unclear, before surgery, or when initial treatment has failed. Cystoscopy is reserved for hematuria, suspected intravesical pathology, or presurgical evaluation.",
    "tratamientoEs": "El tratamiento es escalonado y comienza con medidas conservadoras. Los ejercicios de Kegel (fortalecimiento del suelo pelvico) son la primera linea para incontinencia de esfuerzo, con tasas de mejoria del 50-75% cuando se realizan correctamente bajo supervision de fisioterapia especializada. El entrenamiento vesical, que consiste en aumentar gradualmente los intervalos entre micciones, es efectivo para la incontinencia de urgencia. La perdida de peso en pacientes con sobrepeso puede reducir los episodios de incontinencia hasta en un 50%. Para la incontinencia de urgencia, los antimuscarinicos (oxibutinina, tolterodina, solifenacina, fesoterodina) y el agonista beta-3 adrenergico (mirabegron) son los farmacos de primera linea. Los estrogenos vaginales topicos son beneficiosos en mujeres posmenopausicas. Cuando el tratamiento conservador falla, las opciones quirurgicas para la incontinencia de esfuerzo en mujeres incluyen las cintas suburetrales (TVT, TOT), la inyeccion de agentes de abultamiento periuretral y la colposuspension de Burch. En hombres post-prostatectomia, las opciones incluyen el esfinter urinario artificial (AMS 800) y las cintas masculinas. La neuromodulacion sacra (InterStim) y la inyeccion intravesical de toxina botulinica (Botox) son opciones efectivas para la incontinencia de urgencia refractaria.",
    "tratamientoEn": "Treatment is stepwise and begins with conservative measures. Kegel exercises (pelvic floor strengthening) are first-line for stress incontinence, with improvement rates of 50-75% when performed correctly under specialized physiotherapy supervision. Bladder training, which consists of gradually increasing intervals between voidings, is effective for urge incontinence. Weight loss in overweight patients can reduce incontinence episodes by up to 50%. For urge incontinence, antimuscarinics (oxybutynin, tolterodine, solifenacin, fesoterodine) and the beta-3 adrenergic agonist (mirabegron) are first-line medications. Topical vaginal estrogens are beneficial in postmenopausal women. When conservative treatment fails, surgical options for stress incontinence in women include suburethral slings (TVT, TOT), periurethral bulking agent injection, and Burch colposuspension. In post-prostatectomy men, options include the artificial urinary sphincter (AMS 800) and male slings. Sacral neuromodulation (InterStim) and intravesical botulinum toxin injection (Botox) are effective options for refractory urge incontinence.",
    "prevencionEs": "La prevencion de la incontinencia urinaria incluye el fortalecimiento regular del suelo pelvico mediante ejercicios de Kegel, idealmente iniciados antes del embarazo y mantenidos de por vida. Durante el embarazo, la fisioterapia del suelo pelvico supervisada puede prevenir o reducir la incontinencia postparto. Mantener un peso corporal saludable reduce la presion sobre la vejiga y el suelo pelvico. Evitar el estrenimiento cronico mediante una dieta rica en fibra y la ingesta adecuada de liquidos previene el dano al suelo pelvico por esfuerzo excesivo. Limitar el consumo de cafeina, alcohol y bebidas carbonatadas puede reducir la irritabilidad vesical. No fumar es importante, ya que la tos cronica del fumador debilita el suelo pelvico. En mujeres perimenopausicas, la terapia con estrogenos vaginales puede prevenir la atrofia urogenital que contribuye a la incontinencia.",
    "prevencionEn": "Prevention of urinary incontinence includes regular pelvic floor strengthening through Kegel exercises, ideally started before pregnancy and maintained lifelong. During pregnancy, supervised pelvic floor physiotherapy can prevent or reduce postpartum incontinence. Maintaining a healthy body weight reduces pressure on the bladder and pelvic floor. Avoiding chronic constipation through a fiber-rich diet and adequate fluid intake prevents pelvic floor damage from excessive straining. Limiting caffeine, alcohol, and carbonated beverages can reduce bladder irritability. Not smoking is important, as the chronic smoker's cough weakens the pelvic floor. In perimenopausal women, vaginal estrogen therapy can prevent urogenital atrophy that contributes to incontinence.",
    "factoresRiesgoEs": [
      "Sexo femenino",
      "Embarazo y parto vaginal (especialmente partos instrumentados o con desgarros)",
      "Menopausia y deficiencia de estrogenos",
      "Obesidad e indice de masa corporal elevado",
      "Edad avanzada",
      "Cirugia pelvica previa (histerectomia, prostatectomia radical)",
      "Enfermedades neurologicas (Parkinson, esclerosis multiple, demencia)",
      "Diabetes mellitus",
      "Estrenimiento cronico",
      "Tabaquismo cronico"
    ],
    "factoresRiesgoEn": [
      "Female sex",
      "Pregnancy and vaginal delivery (especially instrumental deliveries or with tears)",
      "Menopause and estrogen deficiency",
      "Obesity and elevated body mass index",
      "Advanced age",
      "Prior pelvic surgery (hysterectomy, radical prostatectomy)",
      "Neurological diseases (Parkinson's, multiple sclerosis, dementia)",
      "Diabetes mellitus",
      "Chronic constipation",
      "Chronic smoking"
    ],
    "cuandoConsultarEs": "Consulte a un medico si la perdida involuntaria de orina afecta su calidad de vida, le impide realizar actividades que disfruta, causa problemas en la piel por irritacion, le obliga a limitar sus actividades sociales, o le genera ansiedad o depresion. No sienta verguenza: la incontinencia urinaria es una condicion medica tratable y muy comun. Busque atencion urgente si la incontinencia aparece de forma subita, se acompana de debilidad en las piernas o perdida de sensibilidad, lo que podria indicar un problema neurologico que requiere evaluacion inmediata.",
    "cuandoConsultarEn": "See a doctor if involuntary urine loss affects your quality of life, prevents you from performing activities you enjoy, causes skin irritation problems, forces you to limit your social activities, or generates anxiety or depression. Do not feel embarrassed: urinary incontinence is a treatable and very common medical condition. Seek urgent care if incontinence appears suddenly and is accompanied by leg weakness or loss of sensation, which could indicate a neurological problem requiring immediate evaluation."
  },
  {
    "id": "vejiga-hiperactiva",
    "nombreEs": "Vejiga Hiperactiva",
    "nombreEn": "Overactive Bladder",
    "categoriaEs": "funcional",
    "categoriaEn": "functional",
    "descripcionEs": "La vejiga hiperactiva (VH) es un sindrome clinico caracterizado por urgencia urinaria, usualmente acompanada de frecuencia urinaria aumentada y nicturia, con o sin incontinencia de urgencia, en ausencia de infeccion urinaria u otra patologia obvia. Es una de las condiciones urologicas mas comunes, afectando a aproximadamente el 16-17% de la poblacion adulta en ambos sexos, con prevalencia que aumenta con la edad. La VH se debe a contracciones involuntarias del musculo detrusor de la vejiga durante la fase de llenado, lo que genera la sensacion de urgencia. Aunque no pone en peligro la vida, su impacto en la calidad de vida es significativo, comparable al de la diabetes o la hipertension, afectando el sueno, la productividad laboral, las relaciones interpersonales y la salud mental. Muchos pacientes desarrollan comportamientos compensatorios como mapear banos en todos los lugares que visitan, limitar la ingesta de liquidos excesivamente, o evitar actividades sociales por miedo a un accidente.",
    "descripcionEn": "Overactive bladder (OAB) is a clinical syndrome characterized by urinary urgency, usually accompanied by increased urinary frequency and nocturia, with or without urge incontinence, in the absence of urinary infection or other obvious pathology. It is one of the most common urological conditions, affecting approximately 16-17% of the adult population in both sexes, with prevalence increasing with age. OAB is due to involuntary contractions of the bladder detrusor muscle during the filling phase, generating the sensation of urgency. Although it does not threaten life, its impact on quality of life is significant, comparable to that of diabetes or hypertension, affecting sleep, work productivity, interpersonal relationships, and mental health. Many patients develop compensatory behaviors such as mapping bathrooms in every place they visit, excessively limiting fluid intake, or avoiding social activities due to fear of an accident.",
    "sintomasEs": [
      "Urgencia urinaria: sensacion subita y apremiante de necesidad de orinar dificil de postergar",
      "Frecuencia urinaria aumentada (mas de 8 veces en 24 horas)",
      "Nicturia (despertar dos o mas veces por la noche para orinar)",
      "Incontinencia de urgencia (perdida involuntaria de orina asociada a la urgencia)",
      "Necesidad de interrumpir actividades para ir al bano inmediatamente",
      "Ansiedad relacionada con la proximidad de un bano",
      "Alteracion del sueno por la necesidad de orinar frecuentemente durante la noche"
    ],
    "sintomasEn": [
      "Urinary urgency: sudden compelling sensation of need to urinate that is difficult to defer",
      "Increased urinary frequency (more than 8 times in 24 hours)",
      "Nocturia (waking two or more times at night to urinate)",
      "Urge incontinence (involuntary urine loss associated with urgency)",
      "Need to interrupt activities to go to the bathroom immediately",
      "Anxiety related to bathroom proximity",
      "Sleep disturbance from the need to urinate frequently during the night"
    ],
    "causasEs": "La vejiga hiperactiva tiene multiples causas potenciales y frecuentemente es multifactorial. La hiperactividad del musculo detrusor puede ser neurogenica (asociada a enfermedades neurologicas como esclerosis multiple, enfermedad de Parkinson, accidente cerebrovascular, lesion medular o neuropatia diabetica) o idiopatica (sin causa neurologica identificable). Se han propuesto varios mecanismos, incluyendo alteraciones en las fibras aferentes sensoriales de la vejiga, cambios en la contractilidad del musculo liso detrusor, y disfuncion del urotelio que actua como sensor y libera mediadores que estimulan las terminaciones nerviosas. La obstruccion del tracto de salida (como en la HPB) puede causar hiperactividad detrusora secundaria. Factores contribuyentes incluyen la edad, la obesidad, el consumo excesivo de cafeina y alcohol, ciertos medicamentos (diureticos), infecciones urinarias recurrentes, y la deficiencia estrogenica en la menopausia.",
    "causasEn": "Overactive bladder has multiple potential causes and is frequently multifactorial. Detrusor muscle overactivity may be neurogenic (associated with neurological diseases such as multiple sclerosis, Parkinson's disease, stroke, spinal cord injury, or diabetic neuropathy) or idiopathic (without identifiable neurological cause). Several mechanisms have been proposed, including alterations in bladder sensory afferent fibers, changes in detrusor smooth muscle contractility, and urothelial dysfunction acting as a sensor releasing mediators that stimulate nerve endings. Outlet obstruction (as in BPH) can cause secondary detrusor overactivity. Contributing factors include age, obesity, excessive caffeine and alcohol consumption, certain medications (diuretics), recurrent urinary infections, and estrogenic deficiency in menopause.",
    "diagnosticoEs": "El diagnostico de vejiga hiperactiva es fundamentalmente clinico, basado en la presencia de urgencia urinaria como sintoma principal. El diario miccional de 3 dias es la herramienta diagnostica mas importante, registrando horarios de miccion, volumenes, episodios de urgencia e incontinencia, ingesta de liquidos y uso de protectores. El analisis de orina y urocultivo descartan infeccion urinaria como causa de los sintomas. La medicion del residuo postmiccional descarta obstruccion o hipoactividad del detrusor. Los cuestionarios de sintomas validados (OAB-q, ICIQ-OAB) ayudan a cuantificar la severidad y monitorear la respuesta al tratamiento. Los estudios urodinamicos no son necesarios rutinariamente para el diagnostico inicial, pero estan indicados cuando la presentacion es atipica, el tratamiento inicial fracasa, se planea intervencion invasiva, o se sospecha disfuncion neurogenica. La cistoscopia esta indicada si hay hematuria o sospecha de patologia intravesical.",
    "diagnosticoEn": "The diagnosis of overactive bladder is fundamentally clinical, based on the presence of urinary urgency as the main symptom. The 3-day voiding diary is the most important diagnostic tool, recording voiding times, volumes, urgency and incontinence episodes, fluid intake, and pad usage. Urinalysis and urine culture rule out urinary infection as a cause of symptoms. Post-void residual measurement rules out obstruction or detrusor underactivity. Validated symptom questionnaires (OAB-q, ICIQ-OAB) help quantify severity and monitor treatment response. Urodynamic studies are not routinely needed for initial diagnosis but are indicated when presentation is atypical, initial treatment fails, invasive intervention is planned, or neurogenic dysfunction is suspected. Cystoscopy is indicated if there is hematuria or suspected intravesical pathology.",
    "tratamientoEs": "El tratamiento de la vejiga hiperactiva sigue un enfoque escalonado. La primera linea incluye modificaciones conductuales: entrenamiento vesical (aumentar gradualmente el intervalo entre micciones de 15-30 minutos cada 1-2 semanas hasta alcanzar intervalos de 3-4 horas), tecnicas de supresion de urgencia (contracciones rapidas del suelo pelvico, distraccion mental), optimizacion de la ingesta de liquidos (reducir a 1.5-2 litros/dia, evitar cafeina y alcohol), y perdida de peso si hay sobrepeso. La segunda linea es la terapia farmacologica con antimuscarinicos (oxibutinina, tolterodina, solifenacina, darifenacina, fesoterodina) o el agonista beta-3 adrenergico mirabegron. La combinacion de antimuscarinico mas mirabegron puede ser util cuando la monoterapia es insuficiente. En adultos mayores, se prefieren los antimuscarinicos con menor penetracion cerebral (darifenacina, trospium) para minimizar efectos cognitivos. La tercera linea incluye la inyeccion intravesical de toxina botulinica tipo A (200 unidades), que inhibe la liberacion de acetilcolina y relaja el detrusor durante 6-9 meses, y la neuromodulacion sacra (estimulacion cronica de las raices nerviosas S3 mediante un dispositivo implantable). La estimulacion percutanea del nervio tibial posterior es otra opcion de tercera linea menos invasiva.",
    "tratamientoEn": "Treatment of overactive bladder follows a stepwise approach. First-line includes behavioral modifications: bladder training (gradually increasing the interval between voidings by 15-30 minutes every 1-2 weeks until achieving 3-4 hour intervals), urgency suppression techniques (quick pelvic floor contractions, mental distraction), fluid intake optimization (reduce to 1.5-2 liters/day, avoid caffeine and alcohol), and weight loss if overweight. Second-line is pharmacological therapy with antimuscarinics (oxybutynin, tolterodine, solifenacin, darifenacin, fesoterodine) or the beta-3 adrenergic agonist mirabegron. Combining an antimuscarinic with mirabegron may be useful when monotherapy is insufficient. In older adults, antimuscarinics with lower brain penetration (darifenacin, trospium) are preferred to minimize cognitive effects. Third-line includes intravesical botulinum toxin type A injection (200 units), which inhibits acetylcholine release and relaxes the detrusor for 6-9 months, and sacral neuromodulation (chronic stimulation of S3 nerve roots via an implantable device). Percutaneous posterior tibial nerve stimulation is another less invasive third-line option.",
    "prevencionEs": "Si bien no siempre se puede prevenir la vejiga hiperactiva, varias medidas pueden reducir el riesgo o la severidad de los sintomas. Mantener un peso saludable es fundamental, ya que el sobrepeso aumenta la presion intraabdominal sobre la vejiga. Fortalecer el suelo pelvico con ejercicios de Kegel regulares proporciona un mejor control sobre la urgencia urinaria. Moderar el consumo de cafeina (cafe, te, refrescos de cola), alcohol y edulcorantes artificiales, que son irritantes vesicales conocidos, puede prevenir la exacerbacion de los sintomas. Mantener una ingesta adecuada pero no excesiva de liquidos (evitar tanto la deshidratacion como la ingesta excesiva). Tratar oportunamente las infecciones urinarias, el estrenimiento y las condiciones neurologicas subyacentes. No fumar, ya que la tos cronica agrava la urgencia y la incontinencia. Mantener un buen control glucemico en pacientes con diabetes para prevenir la neuropatia que afecta la funcion vesical.",
    "prevencionEn": "While overactive bladder cannot always be prevented, several measures can reduce the risk or severity of symptoms. Maintaining a healthy weight is essential, as being overweight increases intra-abdominal pressure on the bladder. Strengthening the pelvic floor with regular Kegel exercises provides better control over urinary urgency. Moderating consumption of caffeine (coffee, tea, cola drinks), alcohol, and artificial sweeteners, which are known bladder irritants, can prevent symptom exacerbation. Maintaining adequate but not excessive fluid intake (avoiding both dehydration and excessive intake). Promptly treating urinary infections, constipation, and underlying neurological conditions. Not smoking, as chronic cough aggravates urgency and incontinence. Maintaining good glycemic control in diabetic patients to prevent neuropathy affecting bladder function.",
    "factoresRiesgoEs": [
      "Edad avanzada (prevalencia aumenta con la edad en ambos sexos)",
      "Sexo femenino (mayor prevalencia general)",
      "Obesidad e indice de masa corporal elevado",
      "Enfermedades neurologicas (Parkinson, esclerosis multiple, ACV, lesion medular)",
      "Diabetes mellitus (neuropatia autonomica)",
      "Obstruccion prostatica en hombres (HPB)",
      "Menopausia y deficiencia estrogenica",
      "Consumo excesivo de cafeina y alcohol",
      "Depresion y ansiedad (asociacion bidireccional)"
    ],
    "factoresRiesgoEn": [
      "Advanced age (prevalence increases with age in both sexes)",
      "Female sex (higher overall prevalence)",
      "Obesity and elevated body mass index",
      "Neurological diseases (Parkinson's, multiple sclerosis, stroke, spinal cord injury)",
      "Diabetes mellitus (autonomic neuropathy)",
      "Prostatic obstruction in men (BPH)",
      "Menopause and estrogenic deficiency",
      "Excessive caffeine and alcohol consumption",
      "Depression and anxiety (bidirectional association)"
    ],
    "cuandoConsultarEs": "Consulte a un medico si la urgencia urinaria, la frecuencia o la nicturia afectan su calidad de vida, su sueno o sus actividades diarias. Busque atencion medica si desarrolla incontinencia urinaria, si ha modificado sus habitos de vida para acomodar los sintomas urinarios (como evitar salidas, limitar liquidos excesivamente, o planificar siempre la ruta al bano mas cercano), o si los sintomas le causan ansiedad o depresion. Los sintomas de vejiga hiperactiva son altamente tratables y no debe aceptarlos como una parte inevitable del envejecimiento.",
    "cuandoConsultarEn": "See a doctor if urinary urgency, frequency, or nocturia affects your quality of life, sleep, or daily activities. Seek medical attention if you develop urinary incontinence, if you have modified your lifestyle habits to accommodate urinary symptoms (such as avoiding outings, excessively limiting fluids, or always planning the route to the nearest bathroom), or if symptoms cause you anxiety or depression. Overactive bladder symptoms are highly treatable and should not be accepted as an inevitable part of aging."
  },
  {
    "id": "prostatitis",
    "nombreEs": "Prostatitis",
    "nombreEn": "Prostatitis",
    "categoriaEs": "inflamatoria",
    "categoriaEn": "inflammatory",
    "descripcionEs": "La prostatitis es la inflamacion de la glandula prostatica y representa la causa mas comun de consulta urologica en hombres menores de 50 anos. Se clasifica en cuatro categorias segun el sistema del Instituto Nacional de Salud (NIH): Tipo I (prostatitis bacteriana aguda), una infeccion aguda grave; Tipo II (prostatitis bacteriana cronica), infecciones recurrentes; Tipo III (sindrome de dolor pelvico cronico o prostatitis cronica no bacteriana), la forma mas comun que representa el 90-95% de todos los casos y puede ser inflamatorio (IIIA) o no inflamatorio (IIIB); y Tipo IV (prostatitis inflamatoria asintomatica), hallazgo incidental sin sintomas. El sindrome de dolor pelvico cronico es particularmente desafiante porque su etiologia no esta completamente comprendida y se cree que involucra mecanismos neuroinmunologicos, tension muscular del suelo pelvico y sensibilizacion central del dolor. La prostatitis afecta significativamente la calidad de vida, con impacto comparable al del infarto de miocardio o la enfermedad de Crohn activa.",
    "descripcionEn": "Prostatitis is inflammation of the prostate gland and represents the most common cause of urological consultation in men under 50 years of age. It is classified into four categories according to the National Institutes of Health (NIH) system: Type I (acute bacterial prostatitis), a serious acute infection; Type II (chronic bacterial prostatitis), recurrent infections; Type III (chronic pelvic pain syndrome or chronic non-bacterial prostatitis), the most common form representing 90-95% of all cases, which can be inflammatory (IIIA) or non-inflammatory (IIIB); and Type IV (asymptomatic inflammatory prostatitis), an incidental finding without symptoms. Chronic pelvic pain syndrome is particularly challenging because its etiology is not fully understood and is believed to involve neuroimmunological mechanisms, pelvic floor muscle tension, and central pain sensitization. Prostatitis significantly affects quality of life, with impact comparable to that of myocardial infarction or active Crohn's disease.",
    "sintomasEs": [
      "Dolor o molestia en el perine (area entre el escroto y el ano)",
      "Dolor en la parte baja del abdomen, la ingle o la espalda baja",
      "Dolor o incomodidad durante o despues de la eyaculacion",
      "Disuria (ardor o dolor al orinar)",
      "Frecuencia urinaria aumentada y urgencia",
      "Chorro urinario debil o intermitente",
      "Fiebre alta con escalofrios (prostatitis bacteriana aguda)",
      "Malestar general severo y dolor muscular (prostatitis bacteriana aguda)",
      "Sintomas cronicos que fluctuan durante meses o anos (tipo III)",
      "Disfuncion sexual (dolor eyaculatorio, disfuncion erectil)"
    ],
    "sintomasEn": [
      "Pain or discomfort in the perineum (area between scrotum and anus)",
      "Pain in the lower abdomen, groin, or lower back",
      "Pain or discomfort during or after ejaculation",
      "Dysuria (burning or pain when urinating)",
      "Increased urinary frequency and urgency",
      "Weak or intermittent urinary stream",
      "High fever with chills (acute bacterial prostatitis)",
      "Severe general malaise and muscle pain (acute bacterial prostatitis)",
      "Chronic symptoms that fluctuate over months or years (type III)",
      "Sexual dysfunction (ejaculatory pain, erectile dysfunction)"
    ],
    "causasEs": "La prostatitis bacteriana aguda (Tipo I) es causada por infeccion bacteriana ascendente, siendo los agentes mas comunes Escherichia coli, Klebsiella, Proteus, Pseudomonas y Enterococcus. Puede ocurrir espontaneamente o como complicacion de cateterizacion uretral, biopsia de prostata o infeccion urinaria. La prostatitis bacteriana cronica (Tipo II) resulta de bacterias que persisten dentro de la prostata a pesar del tratamiento, formando biofilms que los antibioticos no pueden erradicar completamente. El sindrome de dolor pelvico cronico (Tipo III) tiene una etiologia multifactorial que incluye: inflamacion prostatica intraductal, disfuncion neuromuscular del suelo pelvico con puntos gatillo miofasciales, sensibilizacion central y periferica del dolor, factores psicologicos (estres, ansiedad, catastrofizacion), reflujo intraprostatico de orina, y posiblemente agentes infecciosos no identificados con las tecnicas diagnosticas convencionales. La interaccion de estos factores crea un ciclo de dolor-tension-ansiedad que perpetua la condicion.",
    "causasEn": "Acute bacterial prostatitis (Type I) is caused by ascending bacterial infection, with the most common agents being Escherichia coli, Klebsiella, Proteus, Pseudomonas, and Enterococcus. It can occur spontaneously or as a complication of urethral catheterization, prostate biopsy, or urinary tract infection. Chronic bacterial prostatitis (Type II) results from bacteria that persist within the prostate despite treatment, forming biofilms that antibiotics cannot completely eradicate. Chronic pelvic pain syndrome (Type III) has a multifactorial etiology including: intraductal prostatic inflammation, neuromuscular pelvic floor dysfunction with myofascial trigger points, central and peripheral pain sensitization, psychological factors (stress, anxiety, catastrophizing), intraprostatic urine reflux, and possibly infectious agents not identified by conventional diagnostic techniques. The interaction of these factors creates a pain-tension-anxiety cycle that perpetuates the condition.",
    "diagnosticoEs": "El diagnostico se basa en la historia clinica, el examen fisico con tacto rectal (la prostata puede estar extremadamente dolorosa y caliente en la prostatitis aguda) y pruebas de laboratorio. La prueba de los 4 vasos de Meares-Stamey (o la alternativa simplificada de 2 vasos pre y post-masaje prostatico) identifica bacterias prostaticas especificas comparando cultivos de orina antes y despues del masaje prostatico. IMPORTANTE: el masaje prostatico esta contraindicado en la prostatitis bacteriana aguda por riesgo de bacteremia. El analisis de orina, urocultivo y hemocultivos son esenciales en la prostatitis aguda. El PSA puede estar elevado durante los episodios agudos e inflamatorios y debe interpretarse con precaucion. La ecografia transrectal puede mostrar abscesos prostaticos en la prostatitis aguda. El cuestionario NIH-CPSI (Chronic Prostatitis Symptom Index) cuantifica el dolor, los sintomas urinarios y el impacto en la calidad de vida, siendo util para monitorear la respuesta al tratamiento. La uroflujometria y los estudios urodinamicos evaluan el componente obstructivo. La cistoscopia esta indicada si se sospecha estenosis uretral o patologia intravesical.",
    "diagnosticoEn": "Diagnosis is based on clinical history, physical examination with digital rectal exam (the prostate may be extremely tender and warm in acute prostatitis), and laboratory tests. The Meares-Stamey 4-glass test (or the simplified 2-glass pre and post-prostatic massage alternative) identifies prostate-specific bacteria by comparing urine cultures before and after prostatic massage. IMPORTANT: prostatic massage is contraindicated in acute bacterial prostatitis due to risk of bacteremia. Urinalysis, urine culture, and blood cultures are essential in acute prostatitis. PSA may be elevated during acute and inflammatory episodes and should be interpreted with caution. Transrectal ultrasound may show prostatic abscesses in acute prostatitis. The NIH-CPSI (Chronic Prostatitis Symptom Index) questionnaire quantifies pain, urinary symptoms, and quality of life impact, being useful for monitoring treatment response. Uroflowmetry and urodynamic studies evaluate the obstructive component. Cystoscopy is indicated if urethral stricture or intravesical pathology is suspected.",
    "tratamientoEs": "El tratamiento varia segun el tipo de prostatitis. La prostatitis bacteriana aguda (Tipo I) es una emergencia urologica que requiere antibioticos empiricos de amplio espectro intravenosos (ceftriaxona o fluoroquinolona mas aminoglucosido) hasta la mejoria clinica, seguidos de antibioticos orales (fluoroquinolonas o trimetoprim-sulfametoxazol) durante un total de 4-6 semanas. Los abscesos prostaticos mayores de 2 cm requieren drenaje. La prostatitis bacteriana cronica (Tipo II) se trata con fluoroquinolonas orales durante 4-6 semanas debido a su buena penetracion en el tejido prostatico. El sindrome de dolor pelvico cronico (Tipo III) requiere un enfoque multimodal usando el paradigma UPOINT (Urinario, Psicosocial, Organo-especifico, Infeccion, Neurologico, Tension muscular): bloqueadores alfa para sintomas urinarios obstructivos, fisioterapia del suelo pelvico especializada para puntos gatillo miofasciales, terapia cognitivo-conductual y tecnicas de relajacion para el componente psicologico, antiinflamatorios (ibuprofeno, celecoxib), fitoterapia (quercetina, polen de abeja), y neuromoduladores (amitriptilina, pregabalina, duloxetina) para el dolor neuropatico. El ejercicio aerobico regular ha demostrado beneficios significativos en la reduccion del dolor.",
    "tratamientoEn": "Treatment varies by prostatitis type. Acute bacterial prostatitis (Type I) is a urological emergency requiring empiric broad-spectrum intravenous antibiotics (ceftriaxone or fluoroquinolone plus aminoglycoside) until clinical improvement, followed by oral antibiotics (fluoroquinolones or trimethoprim-sulfamethoxazole) for a total of 4-6 weeks. Prostatic abscesses larger than 2 cm require drainage. Chronic bacterial prostatitis (Type II) is treated with oral fluoroquinolones for 4-6 weeks due to their good penetration into prostatic tissue. Chronic pelvic pain syndrome (Type III) requires a multimodal approach using the UPOINT paradigm (Urinary, Psychosocial, Organ-specific, Infection, Neurological, Tenderness): alpha-blockers for obstructive urinary symptoms, specialized pelvic floor physiotherapy for myofascial trigger points, cognitive-behavioral therapy and relaxation techniques for the psychological component, anti-inflammatories (ibuprofen, celecoxib), phytotherapy (quercetin, bee pollen), and neuromodulators (amitriptyline, pregabalin, duloxetine) for neuropathic pain. Regular aerobic exercise has shown significant benefits in pain reduction.",
    "prevencionEs": "La prevencion de la prostatitis bacteriana incluye mantener una buena hidratacion, tratar oportunamente las infecciones urinarias, mantener una higiene adecuada, y en el caso de procedimientos prostaticos (biopsia), administrar profilaxis antibiotica apropiada. Para el sindrome de dolor pelvico cronico, las estrategias preventivas incluyen el manejo efectivo del estres y la ansiedad, ya que son factores desencadenantes conocidos. Evitar periodos prolongados sentado o el ciclismo excesivo puede ser beneficioso, ya que la presion perineal prolongada puede agravar los sintomas. El ejercicio regular, especialmente el aerobico, tiene efectos protectores. Mantener una actividad sexual regular puede ser beneficioso al promover el drenaje prostatico. Evitar el consumo excesivo de alcohol, cafeina y alimentos picantes, que pueden irritar la prostata. Los ejercicios de estiramiento del suelo pelvico y las tecnicas de relajacion pueden prevenir la acumulacion de tension muscular que contribuye al dolor pelvico cronico.",
    "prevencionEn": "Prevention of bacterial prostatitis includes maintaining good hydration, promptly treating urinary infections, maintaining adequate hygiene, and in the case of prostatic procedures (biopsy), administering appropriate antibiotic prophylaxis. For chronic pelvic pain syndrome, preventive strategies include effective stress and anxiety management, as they are known triggering factors. Avoiding prolonged sitting or excessive cycling may be beneficial, as prolonged perineal pressure can aggravate symptoms. Regular exercise, especially aerobic, has protective effects. Maintaining regular sexual activity may be beneficial by promoting prostatic drainage. Avoiding excessive consumption of alcohol, caffeine, and spicy foods, which can irritate the prostate. Pelvic floor stretching exercises and relaxation techniques can prevent the accumulation of muscle tension that contributes to chronic pelvic pain.",
    "factoresRiesgoEs": [
      "Infecciones urinarias previas o recurrentes",
      "Cateterizacion uretral reciente o instrumentacion del tracto urinario",
      "Biopsia de prostata reciente",
      "Antecedentes de enfermedades de transmision sexual",
      "Hiperplasia prostatica benigna con obstruccion urinaria",
      "Estres psicologico cronico y trastornos de ansiedad",
      "Disfuncion del suelo pelvico y tension muscular cronica",
      "Periodos prolongados sentado o ciclismo frecuente",
      "Inmunosupresion"
    ],
    "factoresRiesgoEn": [
      "Previous or recurrent urinary tract infections",
      "Recent urethral catheterization or urinary tract instrumentation",
      "Recent prostate biopsy",
      "History of sexually transmitted diseases",
      "Benign prostatic hyperplasia with urinary obstruction",
      "Chronic psychological stress and anxiety disorders",
      "Pelvic floor dysfunction and chronic muscle tension",
      "Prolonged periods of sitting or frequent cycling",
      "Immunosuppression"
    ],
    "cuandoConsultarEs": "Busque atencion medica urgente si presenta fiebre alta con dificultad para orinar, dolor perineal o suprapubico severo, escalofrios o malestar general intenso, o si no puede orinar en absoluto (retencion urinaria), ya que la prostatitis bacteriana aguda es una emergencia que requiere tratamiento inmediato con antibioticos intravenosos. Consulte a un medico si tiene dolor pelvico cronico que persiste durante semanas, dolor con la eyaculacion, sintomas urinarios que no mejoran, o si los sintomas afectan significativamente su calidad de vida, su bienestar emocional o su funcion sexual. El tratamiento efectivo esta disponible para todos los tipos de prostatitis y la consulta temprana permite mejores resultados.",
    "cuandoConsultarEn": "Seek urgent medical attention if you have high fever with difficulty urinating, severe perineal or suprapubic pain, chills or intense general malaise, or if you cannot urinate at all (urinary retention), as acute bacterial prostatitis is an emergency requiring immediate treatment with intravenous antibiotics. See a doctor if you have chronic pelvic pain persisting for weeks, pain with ejaculation, urinary symptoms that do not improve, or if symptoms significantly affect your quality of life, emotional well-being, or sexual function. Effective treatment is available for all types of prostatitis and early consultation allows for better outcomes."
  }
]`);

// -- Helper functions --------------------------------------------------------

export function buscarUrologia(termino: string): UrologiaEntry[] {
  const t = termino.toLowerCase();
  return UROLOGIA_ENTRIES.filter(e =>
    e.nombreEs.toLowerCase().includes(t) ||
    e.nombreEn.toLowerCase().includes(t) ||
    e.descripcionEs.toLowerCase().includes(t) ||
    e.descripcionEn.toLowerCase().includes(t)
  );
}

export function getUrologiaById(id: string): UrologiaEntry | undefined {
  return UROLOGIA_ENTRIES.find(e => e.id === id);
}

export function getUrologiaPorCategoria(categoria: string): UrologiaEntry[] {
  const c = categoria.toLowerCase();
  return UROLOGIA_ENTRIES.filter(e =>
    e.categoriaEs.toLowerCase().includes(c) ||
    e.categoriaEn.toLowerCase().includes(c)
  );
}
