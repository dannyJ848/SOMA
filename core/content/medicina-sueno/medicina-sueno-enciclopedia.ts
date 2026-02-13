export interface MedicinaSuenoEntry {
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
  higieneSuenoEs: string;
  higieneSuenoEn: string;
  complicacionesEs: string[];
  complicacionesEn: string[];
  cuandoConsultarEs: string;
  cuandoConsultarEn: string;
}

export const MEDICINA_SUENO_ENTRIES: MedicinaSuenoEntry[] = JSON.parse(`[
  {
    "id": "insomnio-cronico",
    "nombreEs": "Insomnio Crónico",
    "nombreEn": "Chronic Insomnia",
    "categoriaEs": "Trastorno Primario",
    "categoriaEn": "Primary Disorder",
    "descripcionEs": "El insomnio crónico es un trastorno del sueño caracterizado por la dificultad persistente para conciliar el sueño, mantenerlo o lograr un sueño reparador, presente al menos tres noches por semana durante un mínimo de tres meses. Esta condición afecta aproximadamente al 10-15% de la población adulta y es más frecuente en mujeres y personas mayores. El insomnio crónico genera un deterioro significativo en el funcionamiento diurno, incluyendo fatiga, alteraciones del ánimo, dificultades cognitivas y reducción del rendimiento laboral o académico. A diferencia del insomnio agudo, que suele ser transitorio y asociado a un factor estresante identificable, el insomnio crónico se perpetúa por factores conductuales y cognitivos que mantienen el estado de hiperactivación fisiológica y psicológica incluso después de que el desencadenante original haya desaparecido.",
    "descripcionEn": "Chronic insomnia is a sleep disorder characterized by persistent difficulty falling asleep, staying asleep, or achieving restorative sleep, occurring at least three nights per week for a minimum of three months. This condition affects approximately 10-15% of the adult population and is more common in women and older adults. Chronic insomnia causes significant impairment in daytime functioning, including fatigue, mood disturbances, cognitive difficulties, and reduced work or academic performance. Unlike acute insomnia, which is typically transient and associated with an identifiable stressor, chronic insomnia is perpetuated by behavioral and cognitive factors that maintain physiological and psychological hyperarousal even after the original trigger has resolved.",
    "sintomasEs": [
      "Dificultad para conciliar el sueño al acostarse, con latencia de sueño superior a 30 minutos",
      "Despertares nocturnos frecuentes con dificultad para volver a dormir",
      "Despertar precoz en la madrugada sin poder retomar el sueño",
      "Sueño no reparador a pesar de tiempo adecuado en cama",
      "Fatiga diurna persistente y somnolencia durante el día",
      "Irritabilidad, ansiedad o cambios de humor frecuentes",
      "Dificultad para concentrarse, problemas de memoria y reducción de la atención",
      "Preocupación excesiva y recurrente sobre el sueño y sus consecuencias",
      "Cefaleas tensionales matutinas",
      "Tensión muscular y malestar físico generalizado"
    ],
    "sintomasEn": [
      "Difficulty falling asleep at bedtime, with sleep onset latency exceeding 30 minutes",
      "Frequent nocturnal awakenings with difficulty returning to sleep",
      "Early morning awakening without being able to resume sleep",
      "Non-restorative sleep despite adequate time in bed",
      "Persistent daytime fatigue and sleepiness throughout the day",
      "Irritability, anxiety, or frequent mood changes",
      "Difficulty concentrating, memory problems, and reduced attention span",
      "Excessive and recurring worry about sleep and its consequences",
      "Morning tension headaches",
      "Muscle tension and generalized physical discomfort"
    ],
    "causasEs": "Las causas del insomnio crónico son multifactoriales e incluyen factores predisponentes, precipitantes y perpetuadores según el modelo de Spielman. Los factores predisponentes incluyen rasgos de personalidad como el neuroticismo y la tendencia a la rumiación, así como antecedentes familiares de insomnio y una mayor reactividad del sistema de estrés. Los factores precipitantes abarcan eventos vitales estresantes, cambios laborales o personales, enfermedades médicas o psiquiátricas agudas y el uso de sustancias. Los factores perpetuadores son los más importantes en el mantenimiento del trastorno e incluyen hábitos de sueño inadecuados como pasar excesivo tiempo en cama, horarios irregulares, uso de pantallas antes de dormir, consumo de cafeína o alcohol, creencias disfuncionales sobre el sueño y conductas compensatorias como siestas prolongadas. La hiperactivación del eje hipotálamo-hipófiso-suprarrenal con elevación del cortisol juega un papel central en la fisiopatología.",
    "causasEn": "The causes of chronic insomnia are multifactorial and include predisposing, precipitating, and perpetuating factors according to the Spielman model. Predisposing factors include personality traits such as neuroticism and tendency toward rumination, as well as family history of insomnia and heightened stress system reactivity. Precipitating factors encompass stressful life events, work or personal changes, acute medical or psychiatric illnesses, and substance use. Perpetuating factors are the most important in maintaining the disorder and include inadequate sleep habits such as excessive time in bed, irregular schedules, screen use before bedtime, caffeine or alcohol consumption, dysfunctional beliefs about sleep, and compensatory behaviors such as prolonged napping. Hyperactivation of the hypothalamic-pituitary-adrenal axis with elevated cortisol plays a central role in the pathophysiology.",
    "diagnosticoEs": "El diagnóstico del insomnio crónico es fundamentalmente clínico y se basa en una historia clínica detallada del sueño, incluyendo horarios, latencia, despertares, calidad subjetiva y funcionamiento diurno. Se utilizan diarios de sueño durante al menos dos semanas para documentar patrones y cuestionarios validados como el Índice de Severidad del Insomnio (ISI) y el Índice de Calidad de Sueño de Pittsburgh (PSQI). La actigrafía puede complementar la evaluación objetiva del patrón sueño-vigilia. La polisomnografía no está indicada de rutina para el insomnio, pero se solicita cuando se sospecha apnea del sueño, movimientos periódicos de las piernas u otros trastornos comórbidos. Es esencial descartar causas médicas como dolor crónico, reflujo gastroesofágico, hipertiroidismo, y trastornos psiquiátricos como depresión mayor y trastorno de ansiedad generalizada. Se deben revisar todos los medicamentos del paciente ya que muchos fármacos pueden alterar el sueño.",
    "diagnosticoEn": "The diagnosis of chronic insomnia is fundamentally clinical and is based on a detailed sleep history, including schedules, latency, awakenings, subjective quality, and daytime functioning. Sleep diaries are used for at least two weeks to document patterns, along with validated questionnaires such as the Insomnia Severity Index (ISI) and the Pittsburgh Sleep Quality Index (PSQI). Actigraphy can complement objective assessment of the sleep-wake pattern. Polysomnography is not routinely indicated for insomnia but is ordered when sleep apnea, periodic limb movements, or other comorbid disorders are suspected. It is essential to rule out medical causes such as chronic pain, gastroesophageal reflux, hyperthyroidism, and psychiatric disorders such as major depression and generalized anxiety disorder. All patient medications must be reviewed as many drugs can disrupt sleep.",
    "tratamientoEs": "El tratamiento de primera línea para el insomnio crónico es la Terapia Cognitivo-Conductual para el Insomnio (TCC-I), que ha demostrado eficacia superior a los medicamentos a largo plazo. La TCC-I incluye cinco componentes principales: restricción de tiempo en cama para consolidar el sueño, control de estímulos para fortalecer la asociación cama-sueño, higiene del sueño, reestructuración cognitiva para modificar creencias disfuncionales sobre el sueño, y técnicas de relajación como relajación muscular progresiva y respiración diafragmática. Cuando la TCC-I no es suficiente o está contraindicada, se pueden utilizar tratamientos farmacológicos como agonistas del receptor de benzodiazepinas (zolpidem, eszopiclona), antagonistas duales de receptores de orexina (suvorexant, lemborexant), agonistas del receptor de melatonina (ramelteon), o antidepresivos sedantes en dosis bajas (trazodona, doxepina). Los medicamentos deben usarse en la dosis mínima efectiva, por el menor tiempo posible, y siempre en combinación con estrategias conductuales.",
    "tratamientoEn": "The first-line treatment for chronic insomnia is Cognitive Behavioral Therapy for Insomnia (CBT-I), which has demonstrated superior efficacy to medications in the long term. CBT-I includes five main components: sleep restriction to consolidate sleep, stimulus control to strengthen the bed-sleep association, sleep hygiene, cognitive restructuring to modify dysfunctional beliefs about sleep, and relaxation techniques such as progressive muscle relaxation and diaphragmatic breathing. When CBT-I is insufficient or contraindicated, pharmacological treatments may be used including benzodiazepine receptor agonists (zolpidem, eszopiclone), dual orexin receptor antagonists (suvorexant, lemborexant), melatonin receptor agonists (ramelteon), or low-dose sedating antidepressants (trazodone, doxepin). Medications should be used at the minimum effective dose, for the shortest time possible, and always in combination with behavioral strategies.",
    "higieneSuenoEs": "La higiene del sueño incluye mantener horarios regulares de acostarse y levantarse incluso los fines de semana, crear un ambiente de dormitorio oscuro, fresco y silencioso con temperatura entre 18-22°C, evitar la cafeína al menos 6 horas antes de acostarse y el alcohol al menos 4 horas antes, limitar la exposición a pantallas con luz azul durante la hora previa al sueño, realizar ejercicio físico regular pero no intenso en las 3-4 horas antes de dormir, evitar comidas copiosas cerca de la hora de acostarse, reservar la cama exclusivamente para dormir y actividad sexual, y desarrollar una rutina de relajación pre-sueño consistente que incluya actividades calmantes como lectura, baño tibio o meditación.",
    "higieneSuenoEn": "Sleep hygiene includes maintaining regular bedtime and wake times even on weekends, creating a dark, cool, and quiet bedroom environment with temperature between 18-22°C, avoiding caffeine at least 6 hours before bedtime and alcohol at least 4 hours before, limiting blue light screen exposure during the hour before sleep, engaging in regular physical exercise but not intense activity within 3-4 hours of bedtime, avoiding large meals close to bedtime, reserving the bed exclusively for sleep and sexual activity, and developing a consistent pre-sleep relaxation routine that includes calming activities such as reading, warm baths, or meditation.",
    "complicacionesEs": [
      "Trastorno depresivo mayor y trastornos de ansiedad",
      "Mayor riesgo cardiovascular incluyendo hipertensión e infarto de miocardio",
      "Deterioro del sistema inmunológico y mayor susceptibilidad a infecciones",
      "Síndrome metabólico, resistencia a la insulina y ganancia de peso",
      "Deterioro cognitivo acelerado y mayor riesgo de demencia",
      "Accidentes laborales y de tránsito por somnolencia",
      "Abuso de sustancias hipnóticas y dependencia farmacológica",
      "Reducción significativa de la calidad de vida y productividad"
    ],
    "complicacionesEn": [
      "Major depressive disorder and anxiety disorders",
      "Increased cardiovascular risk including hypertension and myocardial infarction",
      "Impaired immune system and increased susceptibility to infections",
      "Metabolic syndrome, insulin resistance, and weight gain",
      "Accelerated cognitive decline and increased dementia risk",
      "Workplace and traffic accidents due to sleepiness",
      "Hypnotic substance abuse and pharmacological dependence",
      "Significant reduction in quality of life and productivity"
    ],
    "cuandoConsultarEs": "Consulte a un especialista en medicina del sueño si el insomnio persiste más de tres meses a pesar de medidas de higiene del sueño, si interfiere significativamente con su funcionamiento diario, trabajo o relaciones, si experimenta somnolencia diurna excesiva que pone en riesgo su seguridad, si sospecha otro trastorno del sueño asociado como apnea o piernas inquietas, si utiliza medicamentos para dormir regularmente sin supervisión médica, o si presenta síntomas de depresión o ansiedad severa junto con el insomnio.",
    "cuandoConsultarEn": "Consult a sleep medicine specialist if insomnia persists for more than three months despite sleep hygiene measures, if it significantly interferes with your daily functioning, work, or relationships, if you experience excessive daytime sleepiness that endangers your safety, if you suspect another associated sleep disorder such as apnea or restless legs, if you regularly use sleep medications without medical supervision, or if you have symptoms of depression or severe anxiety along with insomnia."
  },
  {
    "id": "apnea-obstructiva-sueno",
    "nombreEs": "Apnea Obstructiva del Sueño",
    "nombreEn": "Obstructive Sleep Apnea",
    "categoriaEs": "Respiratorio",
    "categoriaEn": "Respiratory",
    "descripcionEs": "La apnea obstructiva del sueño (AOS) es un trastorno respiratorio del sueño caracterizado por episodios repetitivos de obstrucción parcial (hipopnea) o completa (apnea) de la vía aérea superior durante el sueño, a pesar del esfuerzo respiratorio continuo. Estos eventos provocan desaturaciones de oxígeno recurrentes, fragmentación del sueño y activación simpática repetida. La AOS afecta aproximadamente al 15-30% de los hombres y al 10-15% de las mujeres adultas, con prevalencia creciente asociada a la epidemia global de obesidad. Es una causa importante de hipertensión arterial resistente, fibrilación auricular, accidente cerebrovascular, insuficiencia cardíaca y mortalidad cardiovascular. La somnolencia diurna excesiva resultante aumenta significativamente el riesgo de accidentes automovilísticos y laborales.",
    "descripcionEn": "Obstructive sleep apnea (OSA) is a sleep-related breathing disorder characterized by repetitive episodes of partial (hypopnea) or complete (apnea) upper airway obstruction during sleep, despite continuous respiratory effort. These events cause recurrent oxygen desaturations, sleep fragmentation, and repeated sympathetic activation. OSA affects approximately 15-30% of men and 10-15% of adult women, with increasing prevalence associated with the global obesity epidemic. It is a major cause of resistant arterial hypertension, atrial fibrillation, stroke, heart failure, and cardiovascular mortality. The resulting excessive daytime sleepiness significantly increases the risk of motor vehicle and workplace accidents.",
    "sintomasEs": [
      "Ronquidos fuertes y habituales, frecuentemente reportados por la pareja de cama",
      "Episodios de cese de la respiración observados durante el sueño",
      "Despertares con sensación de asfixia o ahogo nocturno",
      "Somnolencia diurna excesiva y fatiga persistente a pesar de horas suficientes de sueño",
      "Cefalea matutina recurrente, especialmente en región frontal",
      "Boca seca y dolor de garganta al despertar",
      "Nicturia con necesidad de orinar 2 o más veces durante la noche",
      "Dificultad para concentrarse, olvidos frecuentes y disminución del rendimiento cognitivo",
      "Irritabilidad, cambios de humor y síntomas depresivos",
      "Disminución de la libido y disfunción eréctil en hombres"
    ],
    "sintomasEn": [
      "Loud habitual snoring, frequently reported by bed partner",
      "Witnessed episodes of breathing cessation during sleep",
      "Awakenings with sensation of choking or gasping at night",
      "Excessive daytime sleepiness and persistent fatigue despite sufficient sleep hours",
      "Recurrent morning headache, especially in the frontal region",
      "Dry mouth and sore throat upon awakening",
      "Nocturia with need to urinate 2 or more times during the night",
      "Difficulty concentrating, frequent forgetfulness, and decreased cognitive performance",
      "Irritability, mood changes, and depressive symptoms",
      "Decreased libido and erectile dysfunction in men"
    ],
    "causasEs": "La AOS es causada por el colapso repetitivo de la vía aérea superior durante el sueño debido a una combinación de factores anatómicos y neuromusculares. Los factores anatómicos incluyen obesidad con depósito de grasa perifaríngea, retrognacia o micrognatia, hipertrofia amigdalina y adenoidea especialmente en niños, macroglosia, cuello grueso con circunferencia mayor de 43 cm en hombres y 38 cm en mujeres, y anomalías craneofaciales. La disminución del tono neuromuscular durante el sueño, especialmente en sueño REM, contribuye al colapso. Factores de riesgo importantes incluyen edad avanzada, sexo masculino, obesidad con IMC mayor de 30, consumo de alcohol o sedantes que relajan la musculatura faríngea, tabaquismo que causa inflamación de la vía aérea superior, posición supina durante el sueño, congestión nasal crónica, hipotiroidismo no tratado y acromegalia.",
    "causasEn": "OSA is caused by repetitive collapse of the upper airway during sleep due to a combination of anatomical and neuromuscular factors. Anatomical factors include obesity with peripharyngeal fat deposition, retrognathia or micrognathia, tonsillar and adenoid hypertrophy especially in children, macroglossia, thick neck with circumference greater than 43 cm in men and 38 cm in women, and craniofacial anomalies. Decreased neuromuscular tone during sleep, especially during REM sleep, contributes to collapse. Important risk factors include advanced age, male sex, obesity with BMI greater than 30, alcohol or sedative consumption that relaxes pharyngeal musculature, smoking causing upper airway inflammation, supine sleeping position, chronic nasal congestion, untreated hypothyroidism, and acromegaly.",
    "diagnosticoEs": "El diagnóstico estándar de la AOS se realiza mediante polisomnografía nocturna en laboratorio de sueño, que registra simultáneamente electroencefalograma, electrooculograma, electromiograma submentoniano, flujo aéreo nasal y oral, esfuerzo respiratorio torácico y abdominal, oximetría de pulso, posición corporal y electrocardiograma. El índice de apnea-hipopnea (IAH) cuantifica la severidad: leve (5-14 eventos/hora), moderada (15-29/hora) y severa (30 o más/hora). Las pruebas de apnea del sueño domiciliarias (HSAT) son una alternativa aceptable para pacientes con alta probabilidad pretest de AOS moderada a severa sin comorbilidades significativas. Cuestionarios de cribado como STOP-BANG, Epworth y Berlin ayudan a identificar pacientes de alto riesgo. Se debe evaluar la anatomía de la vía aérea con la clasificación de Mallampati y medir la circunferencia cervical.",
    "diagnosticoEn": "The standard diagnosis of OSA is made through nocturnal polysomnography in a sleep laboratory, which simultaneously records electroencephalogram, electrooculogram, submental electromyogram, nasal and oral airflow, thoracic and abdominal respiratory effort, pulse oximetry, body position, and electrocardiogram. The apnea-hypopnea index (AHI) quantifies severity: mild (5-14 events/hour), moderate (15-29/hour), and severe (30 or more/hour). Home sleep apnea tests (HSAT) are an acceptable alternative for patients with high pretest probability of moderate to severe OSA without significant comorbidities. Screening questionnaires such as STOP-BANG, Epworth, and Berlin help identify high-risk patients. Upper airway anatomy should be assessed using the Mallampati classification and neck circumference should be measured.",
    "tratamientoEs": "El tratamiento de primera línea para la AOS moderada a severa es la presión positiva continua en la vía aérea (CPAP), que actúa como una férula neumática manteniendo la vía aérea abierta durante el sueño. La titulación óptima de presión se realiza mediante polisomnografía o algoritmos de auto-ajuste (APAP). Para mejorar la adherencia al CPAP se utilizan interfaces confortables, humidificación calentada, educación del paciente y seguimiento regular con descarga de datos. Alternativas al CPAP incluyen dispositivos de avance mandibular (DAM) fabricados a medida para AOS leve a moderada o intolerancia al CPAP, terapia posicional para AOS posicional, y cirugía en casos seleccionados como uvulopalatofaringoplastia, avance maxilomandibular, estimulación del nervio hipogloso o cirugía bariátrica en obesidad mórbida. La pérdida de peso de al menos 10% puede reducir significativamente el IAH. Se deben evitar alcohol, sedantes y opioides. El tratamiento de la congestión nasal mejora la tolerancia al CPAP.",
    "tratamientoEn": "The first-line treatment for moderate to severe OSA is continuous positive airway pressure (CPAP), which acts as a pneumatic splint keeping the airway open during sleep. Optimal pressure titration is performed through polysomnography or auto-adjusting algorithms (APAP). To improve CPAP adherence, comfortable interfaces, heated humidification, patient education, and regular follow-up with data downloads are used. Alternatives to CPAP include custom-made mandibular advancement devices (MAD) for mild to moderate OSA or CPAP intolerance, positional therapy for positional OSA, and surgery in selected cases such as uvulopalatopharyngoplasty, maxillomandibular advancement, hypoglossal nerve stimulation, or bariatric surgery in morbid obesity. Weight loss of at least 10% can significantly reduce AHI. Alcohol, sedatives, and opioids should be avoided. Treatment of nasal congestion improves CPAP tolerance.",
    "higieneSuenoEs": "Para pacientes con AOS, la higiene del sueño incluye dormir en posición lateral en lugar de supina utilizando almohadas especiales o dispositivos posicionales, elevar la cabecera de la cama 30 grados si hay reflujo asociado, mantener un peso saludable ya que cada 10% de reducción de peso puede disminuir el IAH un 26%, evitar completamente el alcohol al menos 4-6 horas antes de dormir ya que relaja la musculatura faríngea, no usar sedantes ni antihistamínicos sedantes sin prescripción, mantener la nariz despejada con irrigación salina o tratamiento de alergias, mantener horarios regulares de sueño para optimizar la arquitectura del sueño, y usar el CPAP o dispositivo oral durante todas las horas de sueño incluyendo siestas.",
    "higieneSuenoEn": "For OSA patients, sleep hygiene includes sleeping in a lateral position instead of supine using special pillows or positional devices, elevating the head of the bed 30 degrees if associated reflux is present, maintaining a healthy weight as every 10% weight reduction can decrease AHI by 26%, completely avoiding alcohol at least 4-6 hours before sleep as it relaxes pharyngeal musculature, not using sedatives or sedating antihistamines without prescription, keeping the nose clear with saline irrigation or allergy treatment, maintaining regular sleep schedules to optimize sleep architecture, and using CPAP or oral device during all sleep hours including naps.",
    "complicacionesEs": [
      "Hipertensión arterial resistente al tratamiento farmacológico convencional",
      "Fibrilación auricular y arritmias cardíacas nocturnas",
      "Insuficiencia cardíaca congestiva y cor pulmonale",
      "Accidente cerebrovascular isquémico y hemorrágico",
      "Diabetes mellitus tipo 2 y resistencia a la insulina",
      "Hipertensión pulmonar y síndrome de hipoventilación por obesidad",
      "Accidentes automovilísticos por somnolencia al volante",
      "Deterioro cognitivo, depresión y disminución de calidad de vida",
      "Muerte súbita cardíaca durante el sueño en casos severos no tratados"
    ],
    "complicacionesEn": [
      "Arterial hypertension resistant to conventional pharmacological treatment",
      "Atrial fibrillation and nocturnal cardiac arrhythmias",
      "Congestive heart failure and cor pulmonale",
      "Ischemic and hemorrhagic stroke",
      "Type 2 diabetes mellitus and insulin resistance",
      "Pulmonary hypertension and obesity hypoventilation syndrome",
      "Motor vehicle accidents due to sleepiness while driving",
      "Cognitive decline, depression, and decreased quality of life",
      "Sudden cardiac death during sleep in severe untreated cases"
    ],
    "cuandoConsultarEs": "Consulte a un especialista en medicina del sueño si ronca fuerte y habitualmente, si su pareja de cama ha observado que deja de respirar durante el sueño, si se despierta con sensación de ahogo o asfixia, si tiene somnolencia diurna excesiva que afecta su capacidad para conducir o trabajar, si tiene hipertensión arterial de difícil control, si presenta fibrilación auricular u otras arritmias inexplicadas, si tiene sobrepeso u obesidad y ronca, si tiene cefaleas matutinas frecuentes, o si se siente cansado todo el día a pesar de dormir suficientes horas.",
    "cuandoConsultarEn": "Consult a sleep medicine specialist if you snore loudly and habitually, if your bed partner has observed you stop breathing during sleep, if you wake up with a sensation of choking or gasping, if you have excessive daytime sleepiness that affects your ability to drive or work, if you have hard-to-control high blood pressure, if you have atrial fibrillation or other unexplained arrhythmias, if you are overweight or obese and snore, if you have frequent morning headaches, or if you feel tired all day despite sleeping enough hours."
  },
  {
    "id": "narcolepsia",
    "nombreEs": "Narcolepsia",
    "nombreEn": "Narcolepsy",
    "categoriaEs": "Hipersomnia",
    "categoriaEn": "Hypersomnia",
    "descripcionEs": "La narcolepsia es un trastorno neurológico crónico del sueño causado por la incapacidad del cerebro para regular normalmente los ciclos de sueño-vigilia. Se clasifica en tipo 1 (con cataplejía, asociada a deficiencia de hipocretina/orexina) y tipo 2 (sin cataplejía, con niveles normales de hipocretina). La narcolepsia tipo 1 es causada por la destrucción autoinmune de las neuronas productoras de hipocretina en el hipotálamo lateral, con una prevalencia de aproximadamente 25-50 por 100,000 personas. Los síntomas típicamente comienzan en la adolescencia o adultez temprana y persisten toda la vida. La enfermedad causa somnolencia diurna excesiva incapacitante que interfiere gravemente con la educación, el trabajo y las relaciones sociales, representando un impacto significativo en la calidad de vida del paciente.",
    "descripcionEn": "Narcolepsy is a chronic neurological sleep disorder caused by the brain's inability to normally regulate sleep-wake cycles. It is classified into type 1 (with cataplexy, associated with hypocretin/orexin deficiency) and type 2 (without cataplexy, with normal hypocretin levels). Narcolepsy type 1 is caused by autoimmune destruction of hypocretin-producing neurons in the lateral hypothalamus, with a prevalence of approximately 25-50 per 100,000 people. Symptoms typically begin in adolescence or early adulthood and persist throughout life. The disease causes incapacitating excessive daytime sleepiness that severely interferes with education, work, and social relationships, representing a significant impact on the patient's quality of life.",
    "sintomasEs": [
      "Somnolencia diurna excesiva e irresistible con ataques de sueño involuntarios",
      "Cataplejía: pérdida súbita y breve del tono muscular desencadenada por emociones como risa, sorpresa o enojo (solo tipo 1)",
      "Parálisis del sueño: incapacidad temporal para moverse o hablar al quedarse dormido o al despertar",
      "Alucinaciones hipnagógicas (al dormirse) o hipnopómpicas (al despertar), frecuentemente vívidas y aterradoras",
      "Sueño nocturno fragmentado con múltiples despertares",
      "Comportamiento automático: realizar actividades rutinarias sin conciencia plena durante microsueños",
      "Dificultad para mantener la concentración y la atención sostenida",
      "Ganancia de peso, especialmente en narcolepsia tipo 1",
      "Sueños vívidos y contenido onírico intenso durante siestas cortas",
      "Fatiga crónica que no mejora con siestas prolongadas"
    ],
    "sintomasEn": [
      "Excessive and irresistible daytime sleepiness with involuntary sleep attacks",
      "Cataplexy: sudden brief loss of muscle tone triggered by emotions such as laughter, surprise, or anger (type 1 only)",
      "Sleep paralysis: temporary inability to move or speak while falling asleep or upon awakening",
      "Hypnagogic (falling asleep) or hypnopompic (upon waking) hallucinations, often vivid and frightening",
      "Fragmented nighttime sleep with multiple awakenings",
      "Automatic behavior: performing routine activities without full awareness during microsleeps",
      "Difficulty maintaining concentration and sustained attention",
      "Weight gain, especially in narcolepsy type 1",
      "Vivid dreams and intense dream content during short naps",
      "Chronic fatigue that does not improve with prolonged napping"
    ],
    "causasEs": "La narcolepsia tipo 1 es causada por la destrucción autoinmune selectiva de las aproximadamente 70,000 neuronas productoras de hipocretina (orexina) ubicadas en el hipotálamo lateral del cerebro. Esta destrucción resulta en niveles muy bajos o indetectables de hipocretina-1 en el líquido cefalorraquídeo (menos de 110 pg/mL). Existe una fuerte asociación con el alelo HLA-DQB1*06:02, presente en más del 98% de pacientes con tipo 1, lo que apoya el mecanismo autoinmune mediado por células T. Factores ambientales como infecciones por estreptococo, influenza H1N1 y la vacuna Pandemrix pueden desencadenar la respuesta autoinmune en individuos genéticamente susceptibles. La narcolepsia tipo 2 tiene un mecanismo menos claro, posiblemente involucrando una pérdida parcial de neuronas de hipocretina o disfunción de otros sistemas neurotransmisores reguladores del sueño. En raras ocasiones, lesiones hipotalámicas por tumores, sarcoidosis o esclerosis múltiple pueden causar narcolepsia secundaria.",
    "causasEn": "Narcolepsy type 1 is caused by selective autoimmune destruction of approximately 70,000 hypocretin (orexin)-producing neurons located in the lateral hypothalamus of the brain. This destruction results in very low or undetectable levels of hypocretin-1 in cerebrospinal fluid (less than 110 pg/mL). There is a strong association with the HLA-DQB1*06:02 allele, present in more than 98% of type 1 patients, supporting a T-cell-mediated autoimmune mechanism. Environmental factors such as streptococcal infections, H1N1 influenza, and the Pandemrix vaccine may trigger the autoimmune response in genetically susceptible individuals. Narcolepsy type 2 has a less clear mechanism, possibly involving partial loss of hypocretin neurons or dysfunction of other sleep-regulating neurotransmitter systems. Rarely, hypothalamic lesions from tumors, sarcoidosis, or multiple sclerosis can cause secondary narcolepsy.",
    "diagnosticoEs": "El diagnóstico de narcolepsia requiere una evaluación especializada que incluye polisomnografía nocturna seguida al día siguiente por la Prueba de Latencias Múltiples del Sueño (MSLT). En el MSLT, el paciente tiene 4-5 oportunidades de siesta de 20 minutos cada 2 horas; una latencia media de sueño menor o igual a 8 minutos con 2 o más períodos de inicio de sueño REM (SOREMP) es diagnóstica. Se debe suspender medicación que afecte el sueño REM al menos 2 semanas antes. La medición de hipocretina-1 en líquido cefalorraquídeo mediante punción lumbar es el estándar de oro para narcolepsia tipo 1, con valores menores de 110 pg/mL siendo diagnósticos. La tipificación HLA-DQB1*06:02 apoya el diagnóstico pero no es específica. Se deben excluir otros trastornos de hipersomnia como apnea del sueño, síndrome de sueño insuficiente, hipersomnia idiopática y causas médicas o farmacológicas de somnolencia.",
    "diagnosticoEn": "The diagnosis of narcolepsy requires a specialized evaluation including nocturnal polysomnography followed the next day by the Multiple Sleep Latency Test (MSLT). In the MSLT, the patient has 4-5 nap opportunities of 20 minutes every 2 hours; a mean sleep latency of 8 minutes or less with 2 or more sleep-onset REM periods (SOREMPs) is diagnostic. Medication affecting REM sleep must be discontinued at least 2 weeks prior. Measurement of hypocretin-1 in cerebrospinal fluid via lumbar puncture is the gold standard for narcolepsy type 1, with values less than 110 pg/mL being diagnostic. HLA-DQB1*06:02 typing supports the diagnosis but is not specific. Other hypersomnia disorders must be excluded such as sleep apnea, insufficient sleep syndrome, idiopathic hypersomnia, and medical or pharmacological causes of sleepiness.",
    "tratamientoEs": "El tratamiento de la narcolepsia es sintomático y de por vida, dirigido a los síntomas principales. Para la somnolencia diurna excesiva se utilizan agentes promotores de vigilia como modafinilo (200-400 mg/día) o armodafinilo como primera línea, estimulantes como metilfenidato o anfetaminas como segunda línea, y solriamfetol o pitolisant como opciones más recientes. El oxibato de sodio (gamma-hidroxibutirato) es el único tratamiento efectivo tanto para la somnolencia como para la cataplejía, administrado en dos dosis nocturnas. Para la cataplejía específicamente se usan antidepresivos como venlafaxina, fluoxetina o clomipramina que suprimen el sueño REM. Las siestas programadas breves de 15-20 minutos pueden ser muy refrescantes y son un complemento importante del tratamiento farmacológico. Se recomienda apoyo psicológico, adaptaciones académicas o laborales, y participación en grupos de apoyo de pacientes. Es fundamental educar al paciente sobre las precauciones de seguridad, especialmente respecto a la conducción.",
    "tratamientoEn": "Treatment of narcolepsy is symptomatic and lifelong, targeting the main symptoms. For excessive daytime sleepiness, wakefulness-promoting agents such as modafinil (200-400 mg/day) or armodafinil are used as first-line, stimulants such as methylphenidate or amphetamines as second-line, and solriamfetol or pitolisant as newer options. Sodium oxybate (gamma-hydroxybutyrate) is the only treatment effective for both sleepiness and cataplexy, administered in two nighttime doses. For cataplexy specifically, antidepressants such as venlafaxine, fluoxetine, or clomipramine that suppress REM sleep are used. Scheduled brief naps of 15-20 minutes can be very refreshing and are an important complement to pharmacological treatment. Psychological support, academic or workplace accommodations, and participation in patient support groups are recommended. It is essential to educate the patient about safety precautions, especially regarding driving.",
    "higieneSuenoEs": "La higiene del sueño en narcolepsia es crucial e incluye mantener un horario de sueño nocturno estrictamente regular con 7-9 horas de sueño, programar 1-3 siestas cortas estratégicas de 15-20 minutos durante el día preferiblemente en horarios fijos, evitar comidas pesadas ricas en carbohidratos que pueden empeorar la somnolencia postprandial, limitar el consumo de cafeína a las horas de la mañana para no interferir con el sueño nocturno, mantener un ambiente de dormitorio óptimo y consistente, evitar el alcohol que fragmenta el sueño y puede empeorar la cataplejía, realizar ejercicio físico regular moderado preferiblemente por la mañana, y comunicar abiertamente la condición a empleadores, profesores y familiares para obtener las adaptaciones necesarias.",
    "higieneSuenoEn": "Sleep hygiene in narcolepsy is crucial and includes maintaining a strictly regular nighttime sleep schedule of 7-9 hours of sleep, scheduling 1-3 strategic short naps of 15-20 minutes during the day preferably at fixed times, avoiding heavy carbohydrate-rich meals that can worsen postprandial sleepiness, limiting caffeine consumption to morning hours to avoid interfering with nighttime sleep, maintaining an optimal and consistent bedroom environment, avoiding alcohol which fragments sleep and can worsen cataplexy, engaging in regular moderate physical exercise preferably in the morning, and openly communicating the condition to employers, teachers, and family members to obtain necessary accommodations.",
    "complicacionesEs": [
      "Accidentes automovilísticos y laborales por ataques de sueño involuntarios",
      "Rendimiento académico deficiente y abandono escolar",
      "Dificultades laborales, desempleo y limitaciones profesionales",
      "Depresión, ansiedad y aislamiento social",
      "Obesidad y síndrome metabólico asociados a deficiencia de hipocretina",
      "Lesiones físicas por caídas durante episodios de cataplejía",
      "Estigma social y diagnóstico erróneo como pereza o trastorno psiquiátrico",
      "Deterioro significativo en relaciones interpersonales y vida familiar"
    ],
    "complicacionesEn": [
      "Motor vehicle and workplace accidents due to involuntary sleep attacks",
      "Poor academic performance and school dropout",
      "Work difficulties, unemployment, and professional limitations",
      "Depression, anxiety, and social isolation",
      "Obesity and metabolic syndrome associated with hypocretin deficiency",
      "Physical injuries from falls during cataplexy episodes",
      "Social stigma and misdiagnosis as laziness or psychiatric disorder",
      "Significant deterioration in interpersonal relationships and family life"
    ],
    "cuandoConsultarEs": "Consulte a un especialista en medicina del sueño o neurología si experimenta somnolencia diurna excesiva incapacitante que no mejora con sueño adecuado, si tiene episodios de debilidad muscular súbita desencadenados por emociones, si experimenta parálisis al dormirse o despertar, si tiene alucinaciones al inicio o final del sueño, si se queda dormido involuntariamente en situaciones inapropiadas como conduciendo o durante conversaciones, si ha tenido accidentes o casi accidentes por somnolencia, o si estos síntomas comenzaron en la adolescencia o adultez temprana y persisten.",
    "cuandoConsultarEn": "Consult a sleep medicine or neurology specialist if you experience incapacitating excessive daytime sleepiness that does not improve with adequate sleep, if you have episodes of sudden muscle weakness triggered by emotions, if you experience paralysis while falling asleep or waking up, if you have hallucinations at sleep onset or upon waking, if you involuntarily fall asleep in inappropriate situations such as while driving or during conversations, if you have had accidents or near-accidents due to sleepiness, or if these symptoms began in adolescence or early adulthood and persist."
  },
  {
    "id": "sindrome-piernas-inquietas",
    "nombreEs": "Síndrome de Piernas Inquietas",
    "nombreEn": "Restless Legs Syndrome",
    "categoriaEs": "Movimiento",
    "categoriaEn": "Movement",
    "descripcionEs": "El síndrome de piernas inquietas (SPI), también conocido como enfermedad de Willis-Ekbom, es un trastorno neurológico sensoriomotor caracterizado por una necesidad urgente e irresistible de mover las piernas, generalmente acompañada de sensaciones desagradables en las extremidades inferiores. Los síntomas empeoran durante períodos de reposo o inactividad, particularmente por la noche, y se alivian parcial o totalmente con el movimiento. El SPI afecta aproximadamente al 5-10% de la población adulta, es más común en mujeres y su prevalencia aumenta con la edad. Esta condición causa una interferencia significativa con el inicio del sueño y el descanso nocturno, resultando en insomnio de conciliación, privación crónica de sueño y deterioro marcado de la calidad de vida. Aproximadamente el 80% de los pacientes con SPI también presentan movimientos periódicos de las piernas durante el sueño.",
    "descripcionEn": "Restless legs syndrome (RLS), also known as Willis-Ekbom disease, is a sensorimotor neurological disorder characterized by an urgent and irresistible need to move the legs, usually accompanied by unpleasant sensations in the lower extremities. Symptoms worsen during periods of rest or inactivity, particularly at night, and are partially or completely relieved by movement. RLS affects approximately 5-10% of the adult population, is more common in women, and its prevalence increases with age. This condition causes significant interference with sleep onset and nighttime rest, resulting in sleep-onset insomnia, chronic sleep deprivation, and marked deterioration of quality of life. Approximately 80% of patients with RLS also have periodic limb movements during sleep.",
    "sintomasEs": [
      "Necesidad imperiosa e irresistible de mover las piernas, a menudo descrita como una urgencia incontrolable",
      "Sensaciones desagradables en las piernas descritas como hormigueo, ardor, tirantez, picazón interna o sensación de insectos reptando",
      "Síntomas que empeoran significativamente durante el reposo, especialmente al estar sentado o acostado",
      "Alivio parcial o completo de los síntomas con el movimiento como caminar, estirarse o sacudir las piernas",
      "Patrón circadiano con empeoramiento vespertino y nocturno de los síntomas",
      "Dificultad marcada para conciliar el sueño, con latencia de sueño prolongada",
      "Movimientos periódicos involuntarios de las piernas durante el sueño que causan microdespertares",
      "Fatiga diurna y somnolencia por privación crónica de sueño",
      "Incapacidad para permanecer sentado en viajes largos, cine, reuniones o consultas médicas",
      "Ansiedad anticipatoria al acercarse la hora de dormir"
    ],
    "sintomasEn": [
      "Imperative and irresistible need to move the legs, often described as an uncontrollable urge",
      "Unpleasant sensations in the legs described as tingling, burning, pulling, internal itching, or sensation of insects crawling",
      "Symptoms that significantly worsen during rest, especially when sitting or lying down",
      "Partial or complete relief of symptoms with movement such as walking, stretching, or shaking the legs",
      "Circadian pattern with evening and nighttime worsening of symptoms",
      "Marked difficulty falling asleep with prolonged sleep onset latency",
      "Involuntary periodic limb movements during sleep causing micro-arousals",
      "Daytime fatigue and sleepiness from chronic sleep deprivation",
      "Inability to remain seated during long trips, movies, meetings, or medical appointments",
      "Anticipatory anxiety as bedtime approaches"
    ],
    "causasEs": "El SPI puede ser primario (idiopático) o secundario. El SPI primario tiene un fuerte componente genético con patrón de herencia autosómico dominante y se han identificado variantes genéticas en los loci MEIS1, BTBD9, MAP2K5 y PTPRD entre otros. La fisiopatología central involucra disfunción dopaminérgica en el sistema nervioso central, particularmente en la vía diencefalina-espinal A11, y deficiencia de hierro cerebral que afecta la síntesis de dopamina ya que el hierro es cofactor de la tirosina hidroxilasa. Las causas secundarias más importantes incluyen deficiencia de hierro con ferritina sérica menor de 75 ng/mL, insuficiencia renal crónica especialmente en pacientes en diálisis, embarazo particularmente en el tercer trimestre, neuropatía periférica, deficiencia de vitamina B12 o folato, y medicamentos como antidepresivos ISRS, antipsicóticos, antihistamínicos sedantes, metoclopramida y litio que pueden inducir o agravar el SPI.",
    "causasEn": "RLS can be primary (idiopathic) or secondary. Primary RLS has a strong genetic component with autosomal dominant inheritance pattern, and genetic variants have been identified at the MEIS1, BTBD9, MAP2K5, and PTPRD loci among others. The central pathophysiology involves dopaminergic dysfunction in the central nervous system, particularly in the diencephalic-spinal A11 pathway, and brain iron deficiency affecting dopamine synthesis since iron is a cofactor of tyrosine hydroxylase. The most important secondary causes include iron deficiency with serum ferritin below 75 ng/mL, chronic kidney disease especially in dialysis patients, pregnancy particularly in the third trimester, peripheral neuropathy, vitamin B12 or folate deficiency, and medications such as SSRI antidepressants, antipsychotics, sedating antihistamines, metoclopramide, and lithium that can induce or worsen RLS.",
    "diagnosticoEs": "El diagnóstico del SPI es clínico y se basa en cinco criterios esenciales establecidos por el Grupo Internacional de Estudio del SPI (IRLSSG): (1) necesidad urgente de mover las piernas, usualmente acompañada de sensaciones desagradables; (2) los síntomas comienzan o empeoran durante el reposo o inactividad; (3) los síntomas se alivian parcial o totalmente con el movimiento; (4) los síntomas empeoran por la noche o tarde; y (5) no se explican mejor por otra condición médica o conductual. Se deben solicitar estudios de laboratorio incluyendo ferritina sérica (objetivo mayor de 75 ng/mL), saturación de transferrina, hierro sérico, función renal, vitamina B12, folato, glucosa, hemoglobina A1c y función tiroidea. La polisomnografía no es necesaria para el diagnóstico pero puede documentar movimientos periódicos de las piernas y evaluar el impacto en la arquitectura del sueño. Se debe hacer diagnóstico diferencial con calambres nocturnos, neuropatía periférica, insuficiencia venosa, acatisia por neurolépticos y artropatía.",
    "diagnosticoEn": "The diagnosis of RLS is clinical and based on five essential criteria established by the International RLS Study Group (IRLSSG): (1) urgent need to move the legs, usually accompanied by unpleasant sensations; (2) symptoms begin or worsen during rest or inactivity; (3) symptoms are partially or completely relieved by movement; (4) symptoms worsen in the evening or night; and (5) not better explained by another medical or behavioral condition. Laboratory studies should be ordered including serum ferritin (target above 75 ng/mL), transferrin saturation, serum iron, renal function, vitamin B12, folate, glucose, hemoglobin A1c, and thyroid function. Polysomnography is not necessary for diagnosis but can document periodic limb movements and evaluate the impact on sleep architecture. Differential diagnosis should include nocturnal cramps, peripheral neuropathy, venous insufficiency, neuroleptic akathisia, and arthropathy.",
    "tratamientoEs": "El tratamiento del SPI comienza con la corrección de causas reversibles: suplementación con hierro oral (sulfato ferroso 325 mg con vitamina C en ayunas) si la ferritina sérica es menor de 75 ng/mL, o hierro intravenoso (carboximaltosa férrica) si la absorción oral es inadecuada o la ferritina es muy baja. Se deben eliminar medicamentos que empeoran el SPI como ISRS, antipsicóticos y antihistamínicos. Para el tratamiento farmacológico, los ligandos alfa-2-delta del calcio como gabapentina enacarbil (300-600 mg) o pregabalina (75-300 mg) son ahora primera línea por menor riesgo de aumento de síntomas. Los agonistas dopaminérgicos como pramipexol (0.125-0.5 mg) o rotigotina transdérmica se usan con precaución por el riesgo de augmentación, fenómeno donde el tratamiento empeora paradójicamente los síntomas con el tiempo. Para casos severos refractarios se consideran opioides de baja potencia como codeína o tramadol, o en casos excepcionales oxicodona. El tratamiento no farmacológico incluye ejercicio moderado regular, masaje de piernas, baños calientes, compresión neumática y estimulación eléctrica transcutánea.",
    "tratamientoEn": "Treatment of RLS begins with correction of reversible causes: oral iron supplementation (ferrous sulfate 325 mg with vitamin C on an empty stomach) if serum ferritin is below 75 ng/mL, or intravenous iron (ferric carboxymaltose) if oral absorption is inadequate or ferritin is very low. Medications that worsen RLS such as SSRIs, antipsychotics, and antihistamines should be eliminated. For pharmacological treatment, alpha-2-delta calcium channel ligands such as gabapentin enacarbil (300-600 mg) or pregabalin (75-300 mg) are now first-line due to lower risk of symptom augmentation. Dopamine agonists such as pramipexole (0.125-0.5 mg) or transdermal rotigotine are used with caution due to the risk of augmentation, a phenomenon where treatment paradoxically worsens symptoms over time. For severe refractory cases, low-potency opioids such as codeine or tramadol are considered, or in exceptional cases oxycodone. Non-pharmacological treatment includes regular moderate exercise, leg massage, warm baths, pneumatic compression, and transcutaneous electrical stimulation.",
    "higieneSuenoEs": "La higiene del sueño para el SPI incluye mantener un horario regular de sueño, realizar ejercicio físico moderado temprano en el día pero evitar el ejercicio intenso por la noche ya que puede empeorar los síntomas, evitar la cafeína, el alcohol y el tabaco especialmente en horas vespertinas, practicar actividades mentalmente estimulantes como juegos de lógica o lectura durante los episodios para distraer la atención de los síntomas, realizar estiramientos suaves de pantorrillas y cuádriceps antes de acostarse, aplicar compresas frías o calientes alternantes en las piernas según preferencia, mantener las piernas en movimiento suave cuando esté en reposo prolongado, y considerar masaje de piernas o baño tibio como parte de la rutina pre-sueño.",
    "higieneSuenoEn": "Sleep hygiene for RLS includes maintaining a regular sleep schedule, engaging in moderate physical exercise early in the day but avoiding intense exercise at night as it can worsen symptoms, avoiding caffeine, alcohol, and tobacco especially in evening hours, practicing mentally stimulating activities such as logic games or reading during episodes to distract attention from symptoms, performing gentle calf and quadriceps stretches before bedtime, applying alternating cold or warm compresses to the legs as preferred, keeping the legs in gentle movement during prolonged rest, and considering leg massage or warm bath as part of the pre-sleep routine.",
    "complicacionesEs": [
      "Insomnio crónico severo de conciliación y mantenimiento",
      "Privación crónica de sueño con somnolencia diurna excesiva",
      "Depresión mayor y trastornos de ansiedad",
      "Deterioro significativo de la calidad de vida y funcionamiento social",
      "Augmentación por agonistas dopaminérgicos con empeoramiento paradójico de síntomas",
      "Mayor riesgo cardiovascular asociado a movimientos periódicos de las piernas",
      "Trastorno por déficit de atención secundario a privación de sueño",
      "Aislamiento social y limitaciones en actividades sedentarias como viajes"
    ],
    "complicacionesEn": [
      "Severe chronic sleep-onset and sleep-maintenance insomnia",
      "Chronic sleep deprivation with excessive daytime sleepiness",
      "Major depression and anxiety disorders",
      "Significant deterioration of quality of life and social functioning",
      "Augmentation from dopamine agonists with paradoxical symptom worsening",
      "Increased cardiovascular risk associated with periodic limb movements",
      "Attention deficit disorder secondary to sleep deprivation",
      "Social isolation and limitations in sedentary activities such as travel"
    ],
    "cuandoConsultarEs": "Consulte a un especialista en medicina del sueño o neurología si experimenta una necesidad irresistible de mover las piernas que empeora por la noche y en reposo, si los síntomas le impiden conciliar o mantener el sueño, si la privación de sueño está afectando su funcionamiento diario, si nota que los síntomas han empeorado con algún medicamento, si los síntomas se extienden a los brazos u otras partes del cuerpo, si los tratamientos actuales no son efectivos o causan efectos secundarios, si sospecha que tiene deficiencia de hierro, o si los síntomas comenzaron o empeoraron durante el embarazo.",
    "cuandoConsultarEn": "Consult a sleep medicine or neurology specialist if you experience an irresistible need to move your legs that worsens at night and at rest, if symptoms prevent you from falling or staying asleep, if sleep deprivation is affecting your daily functioning, if you notice symptoms have worsened with any medication, if symptoms extend to your arms or other body parts, if current treatments are not effective or cause side effects, if you suspect iron deficiency, or if symptoms began or worsened during pregnancy."
  },
  {
    "id": "parasomnia-sonambulismo",
    "nombreEs": "Parasomnia: Sonambulismo",
    "nombreEn": "Parasomnia: Sleepwalking (Somnambulism)",
    "categoriaEs": "Parasomnia",
    "categoriaEn": "Parasomnia",
    "descripcionEs": "El sonambulismo es una parasomnia del sueño NREM (no REM) que se caracteriza por episodios de comportamiento motor complejo, incluyendo caminar, que ocurren durante despertares incompletos del sueño de ondas lentas profundo, típicamente durante el primer tercio de la noche. Durante estos episodios, la persona se encuentra en un estado disociado con activación motora pero conciencia marcadamente reducida, ojos abiertos con mirada vidriosa y responsividad limitada al entorno. El sonambulismo es muy común en niños, con una prevalencia del 15-40% en la infancia, y generalmente se resuelve espontáneamente durante la adolescencia. En adultos, la prevalencia es de aproximadamente 1-4% y puede asociarse a condiciones médicas, estrés psicológico o uso de sustancias. Los episodios pueden variar desde comportamientos simples como sentarse en la cama hasta actividades complejas como cocinar, conducir o salir de la casa.",
    "descripcionEn": "Sleepwalking is a NREM (non-REM) sleep parasomnia characterized by episodes of complex motor behavior, including walking, that occur during incomplete arousals from deep slow-wave sleep, typically during the first third of the night. During these episodes, the person is in a dissociated state with motor activation but markedly reduced consciousness, open eyes with a glassy stare, and limited responsiveness to the environment. Sleepwalking is very common in children, with a prevalence of 15-40% in childhood, and generally resolves spontaneously during adolescence. In adults, the prevalence is approximately 1-4% and may be associated with medical conditions, psychological stress, or substance use. Episodes can range from simple behaviors like sitting up in bed to complex activities such as cooking, driving, or leaving the house.",
    "sintomasEs": [
      "Caminar o realizar actividades motoras complejas durante el sueño sin conciencia plena",
      "Ojos abiertos con mirada fija, vidriosa y expresión facial ausente durante los episodios",
      "Dificultad marcada para despertar al sonámbulo durante el episodio",
      "Confusión y desorientación al despertar del episodio, con período de confusión que dura minutos",
      "Amnesia total o parcial del evento al día siguiente",
      "Episodios que ocurren predominantemente en el primer tercio de la noche, durante sueño de ondas lentas",
      "Habla incoherente o murmullos durante los episodios",
      "Comportamientos potencialmente peligrosos como abrir puertas, subir escaleras o intentar salir de la casa",
      "Gritos o terrores nocturnos que pueden acompañar los episodios de sonambulismo",
      "Mayor frecuencia durante períodos de estrés, privación de sueño o enfermedad febril"
    ],
    "sintomasEn": [
      "Walking or performing complex motor activities during sleep without full consciousness",
      "Open eyes with fixed, glassy stare and absent facial expression during episodes",
      "Marked difficulty awakening the sleepwalker during the episode",
      "Confusion and disorientation upon awakening from the episode, with confusion period lasting minutes",
      "Total or partial amnesia of the event the next day",
      "Episodes occurring predominantly in the first third of the night, during slow-wave sleep",
      "Incoherent speech or mumbling during episodes",
      "Potentially dangerous behaviors such as opening doors, climbing stairs, or attempting to leave the house",
      "Screams or night terrors that may accompany sleepwalking episodes",
      "Increased frequency during periods of stress, sleep deprivation, or febrile illness"
    ],
    "causasEs": "El sonambulismo resulta de una disociación incompleta entre el sueño de ondas lentas y la vigilia, donde áreas motoras del cerebro se activan mientras las áreas de conciencia y memoria permanecen en estado de sueño. Existe una fuerte predisposición genética, con concordancia del 50% en gemelos monocigóticos y antecedentes familiares positivos en la mayoría de los casos. Se han identificado variantes en el gen HLA-DQB1 asociadas al sonambulismo. Los factores desencadenantes incluyen privación de sueño que aumenta la presión de sueño de ondas lentas, estrés emocional, fiebre, ejercicio extenuante, ruido ambiental o estímulos táctiles durante el sueño, distensión vesical, apnea obstructiva del sueño que causa fragmentación, síndrome de piernas inquietas, reflujo gastroesofágico, y medicamentos como zolpidem, litio, antihistamínicos, neurolépticos y ISRS. El consumo de alcohol puede precipitar o empeorar los episodios. En adultos, el inicio de sonambulismo de novo debe hacer sospechar una causa subyacente tratable.",
    "causasEn": "Sleepwalking results from an incomplete dissociation between slow-wave sleep and wakefulness, where motor areas of the brain become activated while consciousness and memory areas remain in a sleep state. There is a strong genetic predisposition, with 50% concordance in monozygotic twins and positive family history in most cases. Variants in the HLA-DQB1 gene have been identified associated with sleepwalking. Triggering factors include sleep deprivation which increases slow-wave sleep pressure, emotional stress, fever, strenuous exercise, environmental noise or tactile stimuli during sleep, bladder distension, obstructive sleep apnea causing fragmentation, restless legs syndrome, gastroesophageal reflux, and medications such as zolpidem, lithium, antihistamines, neuroleptics, and SSRIs. Alcohol consumption can precipitate or worsen episodes. In adults, the onset of de novo sleepwalking should raise suspicion of a treatable underlying cause.",
    "diagnosticoEs": "El diagnóstico del sonambulismo es fundamentalmente clínico, basado en la historia detallada del paciente y los testigos. Se debe documentar la edad de inicio, frecuencia, duración y complejidad de los episodios, horario predominante de ocurrencia, factores desencadenantes identificables, antecedentes familiares de parasomnias, y la presencia de comportamientos potencialmente peligrosos. La polisomnografía con video extendido está indicada cuando se sospecha otro trastorno del sueño asociado como apnea o movimientos periódicos, cuando los episodios son frecuentes o violentos, cuando el inicio es en la edad adulta sin historia previa, o cuando se requiere diagnóstico diferencial con epilepsia nocturna del lóbulo frontal o trastorno de conducta del sueño REM. El EEG durante un episodio típicamente muestra actividad de ondas lentas persistente mezclada con patrones de vigilia. Se debe descartar epilepsia nocturna mediante EEG prolongado si hay estereotipia de los movimientos, breve duración de los episodios o múltiples eventos por noche.",
    "diagnosticoEn": "The diagnosis of sleepwalking is fundamentally clinical, based on detailed history from the patient and witnesses. The age of onset, frequency, duration, and complexity of episodes, predominant time of occurrence, identifiable triggers, family history of parasomnias, and the presence of potentially dangerous behaviors should be documented. Polysomnography with extended video is indicated when another associated sleep disorder such as apnea or periodic movements is suspected, when episodes are frequent or violent, when onset is in adulthood without prior history, or when differential diagnosis with nocturnal frontal lobe epilepsy or REM sleep behavior disorder is required. The EEG during an episode typically shows persistent slow-wave activity mixed with wakefulness patterns. Nocturnal epilepsy should be ruled out with prolonged EEG if movements are stereotyped, episodes are brief, or there are multiple events per night.",
    "tratamientoEs": "El tratamiento del sonambulismo comienza con la educación del paciente y la familia sobre la naturaleza benigna del trastorno y las medidas de seguridad esenciales. Se deben identificar y tratar los factores desencadenantes como privación de sueño, apnea obstructiva, reflujo y medicamentos causales. Las medidas de seguridad incluyen cerrar con llave puertas y ventanas, instalar alarmas en puertas, retirar objetos peligrosos o cortantes del dormitorio, colocar el colchón en el suelo si hay riesgo de caídas, instalar puertas de seguridad en escaleras y cubrir ventanas con cerrojos. Los despertares programados anticipatorios consisten en despertar brevemente al paciente 15-30 minutos antes del horario habitual de los episodios durante 4 semanas. La terapia farmacológica se reserva para episodios frecuentes, peligrosos o que causan lesiones, e incluye clonazepam en dosis bajas (0.25-1 mg al acostarse) como primera línea, o alternativas como melatonina, trazodona o imipramina. La TCC para parasomnias con técnicas de relajación e hipnosis clínica puede ser efectiva. No se debe intentar despertar forzadamente al sonámbulo sino guiarlo gentilmente de regreso a la cama.",
    "tratamientoEn": "Treatment of sleepwalking begins with educating the patient and family about the benign nature of the disorder and essential safety measures. Triggering factors such as sleep deprivation, obstructive apnea, reflux, and causal medications should be identified and treated. Safety measures include locking doors and windows, installing alarms on doors, removing dangerous or sharp objects from the bedroom, placing the mattress on the floor if there is a fall risk, installing safety gates on stairs, and securing windows with locks. Scheduled anticipatory awakenings consist of briefly waking the patient 15-30 minutes before the usual time of episodes for 4 weeks. Pharmacological therapy is reserved for frequent, dangerous, or injury-causing episodes and includes low-dose clonazepam (0.25-1 mg at bedtime) as first-line, or alternatives such as melatonin, trazodone, or imipramine. CBT for parasomnias with relaxation techniques and clinical hypnosis can be effective. One should not attempt to forcibly awaken the sleepwalker but gently guide them back to bed.",
    "higieneSuenoEs": "La higiene del sueño es la piedra angular de la prevención del sonambulismo e incluye asegurar una duración de sueño adecuada de 7-9 horas para adultos y más para niños según la edad, ya que la privación de sueño es el desencadenante más común de episodios. Se debe mantener un horario regular de sueño con horas fijas de acostarse y levantarse, evitar la cafeína y el alcohol especialmente por la noche, manejar el estrés con técnicas de relajación antes de dormir, vaciar la vejiga completamente antes de acostarse, mantener el dormitorio seguro y libre de obstáculos, tratar cualquier trastorno del sueño comórbido como apnea o piernas inquietas, evitar medicamentos que puedan precipitar episodios, y establecer una rutina de sueño calmante y consistente que favorezca una transición suave al sueño.",
    "higieneSuenoEn": "Sleep hygiene is the cornerstone of sleepwalking prevention and includes ensuring adequate sleep duration of 7-9 hours for adults and more for children based on age, as sleep deprivation is the most common trigger for episodes. A regular sleep schedule with fixed bedtime and wake times should be maintained, caffeine and alcohol should be avoided especially at night, stress should be managed with relaxation techniques before bed, the bladder should be completely emptied before bedtime, the bedroom should be kept safe and free of obstacles, any comorbid sleep disorder such as apnea or restless legs should be treated, medications that may precipitate episodes should be avoided, and a calming and consistent sleep routine that promotes a smooth transition to sleep should be established.",
    "complicacionesEs": [
      "Lesiones físicas por caídas, tropiezos con objetos o choques con muebles durante episodios",
      "Riesgo de salir de la casa o acercarse a ventanas y escaleras",
      "Lesiones a terceros compartiendo la cama o el dormitorio",
      "Comportamientos inapropiados o embarazosos durante episodios",
      "Privación de sueño del paciente y de los convivientes",
      "Ansiedad y miedo a dormir en lugares desconocidos",
      "Estrés familiar y conflictos relacionados con los episodios nocturnos",
      "En casos raros, actividades potencialmente letales como conducir o manipular objetos peligrosos"
    ],
    "complicacionesEn": [
      "Physical injuries from falls, tripping over objects, or colliding with furniture during episodes",
      "Risk of leaving the house or approaching windows and stairs",
      "Injuries to others sharing the bed or bedroom",
      "Inappropriate or embarrassing behaviors during episodes",
      "Sleep deprivation for the patient and cohabitants",
      "Anxiety and fear of sleeping in unfamiliar places",
      "Family stress and conflicts related to nighttime episodes",
      "In rare cases, potentially lethal activities such as driving or handling dangerous objects"
    ],
    "cuandoConsultarEs": "Consulte a un especialista en medicina del sueño si los episodios de sonambulismo son frecuentes (más de una vez por semana), si han causado o casi causan lesiones al paciente o a otros, si comenzaron por primera vez en la edad adulta, si los episodios son cada vez más complejos o violentos, si hay sospecha de epilepsia nocturna o trastorno de conducta del sueño REM, si se sospecha apnea del sueño u otro trastorno subyacente, si el sonambulismo persiste más allá de la adolescencia, o si el paciente o la familia experimentan angustia significativa por los episodios.",
    "cuandoConsultarEn": "Consult a sleep medicine specialist if sleepwalking episodes are frequent (more than once per week), if they have caused or nearly caused injury to the patient or others, if they first began in adulthood, if episodes are becoming increasingly complex or violent, if nocturnal epilepsy or REM sleep behavior disorder is suspected, if sleep apnea or another underlying disorder is suspected, if sleepwalking persists beyond adolescence, or if the patient or family experience significant distress from the episodes."
  },
  {
    "id": "trastorno-ritmo-circadiano",
    "nombreEs": "Trastorno del Ritmo Circadiano",
    "nombreEn": "Circadian Rhythm Disorder",
    "categoriaEs": "Ritmo Circadiano",
    "categoriaEn": "Circadian Rhythm",
    "descripcionEs": "Los trastornos del ritmo circadiano del sueño-vigilia son un grupo de condiciones en las que el reloj biológico interno del individuo (marcapasos circadiano del núcleo supraquiasmático del hipotálamo) está desalineado con el horario de sueño-vigilia deseado o requerido socialmente. Esta desalineación resulta en insomnio cuando se intenta dormir y somnolencia excesiva cuando se necesita estar despierto. Los tipos más comunes incluyen el trastorno de fase retrasada del sueño, frecuente en adolescentes y adultos jóvenes que no pueden dormirse hasta altas horas de la madrugada; el trastorno de fase avanzada, más común en adultos mayores que se duermen y despiertan excesivamente temprano; el trastorno por trabajo en turnos que afecta a quienes trabajan en horarios nocturnos o rotativos; y el jet lag o desfase horario. Estos trastornos afectan significativamente el funcionamiento social, académico y laboral, y se asocian a mayor riesgo metabólico, cardiovascular y de trastornos del ánimo.",
    "descripcionEn": "Circadian rhythm sleep-wake disorders are a group of conditions in which the individual's internal biological clock (circadian pacemaker in the suprachiasmatic nucleus of the hypothalamus) is misaligned with the desired or socially required sleep-wake schedule. This misalignment results in insomnia when attempting to sleep and excessive sleepiness when wakefulness is needed. The most common types include delayed sleep phase disorder, frequent in adolescents and young adults who cannot fall asleep until the early morning hours; advanced sleep phase disorder, more common in older adults who fall asleep and wake up excessively early; shift work disorder affecting those who work night or rotating shifts; and jet lag. These disorders significantly affect social, academic, and occupational functioning and are associated with increased metabolic, cardiovascular, and mood disorder risk.",
    "sintomasEs": [
      "Incapacidad para dormirse a la hora deseada o socialmente convencional (fase retrasada)",
      "Despertar excesivamente temprano sin poder volver a dormirse (fase avanzada)",
      "Somnolencia excesiva durante las horas requeridas de vigilia",
      "Insomnio de conciliación o mantenimiento según el tipo de trastorno",
      "Fatiga crónica y sensación de no estar sincronizado con el entorno",
      "Dificultad para cumplir con horarios académicos, laborales o sociales",
      "Irritabilidad, dificultad de concentración y deterioro cognitivo",
      "Síntomas gastrointestinales como náusea y alteración del apetito por desalineación circadiana",
      "Aumento de errores y accidentes durante horarios de máxima desalineación circadiana",
      "Síntomas depresivos y aislamiento social progresivo"
    ],
    "sintomasEn": [
      "Inability to fall asleep at the desired or socially conventional time (delayed phase)",
      "Excessively early awakening without being able to return to sleep (advanced phase)",
      "Excessive sleepiness during required waking hours",
      "Sleep-onset or sleep-maintenance insomnia depending on the type of disorder",
      "Chronic fatigue and feeling of being out of sync with the environment",
      "Difficulty meeting academic, work, or social schedules",
      "Irritability, difficulty concentrating, and cognitive impairment",
      "Gastrointestinal symptoms such as nausea and appetite disturbance from circadian misalignment",
      "Increased errors and accidents during peak circadian misalignment hours",
      "Depressive symptoms and progressive social isolation"
    ],
    "causasEs": "Los trastornos del ritmo circadiano resultan de la desalineación entre el reloj biológico endógeno y los sincronizadores externos (zeitgebers), principalmente la luz ambiental. El trastorno de fase retrasada es frecuente en adolescentes debido al retraso fisiológico del reloj circadiano durante la pubertad, combinado con exposición nocturna a luz artificial de pantallas que suprime la secreción de melatonina, presión social para permanecer despierto hasta tarde, y posible predisposición genética con variantes en genes reloj como PER3, CRY1 y CK1. El trastorno de fase avanzada se asocia a envejecimiento con acortamiento del período circadiano endógeno y variantes genéticas como la mutación en CK1-delta. El trastorno por trabajo en turnos es causado por la imposición de horarios de trabajo que contradicen el ritmo circadiano natural, con exposición a luz brillante durante la noche biológica e intento de dormir durante el día biológico. El jet lag resulta del cruce rápido de zonas horarias que supera la capacidad de adaptación del reloj circadiano, que solo puede ajustarse aproximadamente 1-1.5 horas por día.",
    "causasEn": "Circadian rhythm disorders result from misalignment between the endogenous biological clock and external synchronizers (zeitgebers), primarily ambient light. Delayed sleep phase disorder is common in adolescents due to physiological delay of the circadian clock during puberty, combined with nighttime exposure to artificial screen light that suppresses melatonin secretion, social pressure to stay up late, and possible genetic predisposition with variants in clock genes such as PER3, CRY1, and CK1. Advanced sleep phase disorder is associated with aging with shortening of the endogenous circadian period and genetic variants such as the CK1-delta mutation. Shift work disorder is caused by the imposition of work schedules that contradict the natural circadian rhythm, with exposure to bright light during the biological night and attempting to sleep during the biological day. Jet lag results from rapid crossing of time zones that exceeds the circadian clock's adaptation capacity, which can only adjust approximately 1-1.5 hours per day.",
    "diagnosticoEs": "El diagnóstico de los trastornos del ritmo circadiano se basa en la historia clínica detallada del patrón de sueño-vigilia, complementada con diarios de sueño durante al menos 7-14 días y actigrafía de muñeca que registra objetivamente los patrones de actividad y reposo durante períodos prolongados. La actigrafía debe realizarse idealmente durante al menos 7 días, incluyendo días laborables y fines de semana, para documentar la diferencia entre el patrón de sueño libre (cuando el paciente puede dormir a su horario preferido) y el patrón impuesto. El perfil de melatonina salival con recolección seriada en condiciones de luz tenue (dim light melatonin onset o DLMO) es el marcador más preciso de la fase circadiana y puede confirmar el diagnóstico de fase retrasada o avanzada. Cuestionarios como el MEQ (Morningness-Eveningness Questionnaire) y el Munich Chronotype Questionnaire ayudan a categorizar el cronotipo. Se deben excluir otras causas de insomnio y somnolencia y evaluar comorbilidades psiquiátricas frecuentemente asociadas.",
    "diagnosticoEn": "Diagnosis of circadian rhythm disorders is based on detailed clinical history of the sleep-wake pattern, complemented by sleep diaries for at least 7-14 days and wrist actigraphy that objectively records activity and rest patterns over prolonged periods. Actigraphy should ideally be performed for at least 7 days, including weekdays and weekends, to document the difference between the free sleep pattern (when the patient can sleep at their preferred schedule) and the imposed pattern. The salivary melatonin profile with serial collection under dim light conditions (dim light melatonin onset or DLMO) is the most precise marker of circadian phase and can confirm the diagnosis of delayed or advanced phase. Questionnaires such as the MEQ (Morningness-Eveningness Questionnaire) and the Munich Chronotype Questionnaire help categorize chronotype. Other causes of insomnia and sleepiness should be excluded and frequently associated psychiatric comorbidities should be evaluated.",
    "tratamientoEs": "El tratamiento de los trastornos del ritmo circadiano se basa en la cronoterapia, la fototerapia y la melatonina exógena. Para el trastorno de fase retrasada, la fototerapia con luz brillante de 10,000 lux durante 30 minutos al despertar ayuda a avanzar el reloj circadiano, combinada con melatonina en dosis bajas de 0.5-3 mg administrada 5-7 horas antes del DLMO (típicamente a las 17:00-19:00). Se debe limitar estrictamente la exposición a luz brillante y pantallas con emisión de luz azul durante las 2-3 horas previas al sueño, usando gafas con filtro de luz azul si es necesario. Para el trastorno de fase avanzada, se utiliza fototerapia vespertina y melatonina matutina. Para el trastorno por trabajo en turnos, se recomienda uso estratégico de luz brillante al inicio del turno nocturno, gafas oscuras al regresar a casa por la mañana para bloquear la luz solar, melatonina antes de la hora de dormir diurna, ambiente de dormitorio completamente oscurecido con cortinas blackout, y siestas estratégicas antes del turno. El modafinilo está aprobado para la somnolencia excesiva en el trastorno por trabajo en turnos. Para el jet lag, se utilizan estrategias de ajuste gradual previo al viaje, exposición a luz según la dirección del viaje, y melatonina temporizada.",
    "tratamientoEn": "Treatment of circadian rhythm disorders is based on chronotherapy, phototherapy, and exogenous melatonin. For delayed sleep phase disorder, bright light therapy of 10,000 lux for 30 minutes upon waking helps advance the circadian clock, combined with low-dose melatonin of 0.5-3 mg administered 5-7 hours before DLMO (typically at 5:00-7:00 PM). Exposure to bright light and blue light-emitting screens should be strictly limited during the 2-3 hours before sleep, using blue light filtering glasses if necessary. For advanced sleep phase disorder, evening phototherapy and morning melatonin are used. For shift work disorder, strategic use of bright light at the beginning of the night shift, dark glasses when returning home in the morning to block sunlight, melatonin before daytime bedtime, a completely darkened bedroom environment with blackout curtains, and strategic naps before the shift are recommended. Modafinil is approved for excessive sleepiness in shift work disorder. For jet lag, gradual pre-travel adjustment strategies, light exposure based on travel direction, and timed melatonin are used.",
    "higieneSuenoEs": "La higiene del sueño para trastornos del ritmo circadiano enfatiza el control estricto de la exposición a la luz como principal sincronizador del reloj biológico. Se debe buscar exposición a luz solar natural brillante a primera hora de la mañana durante al menos 30 minutos, usar filtros de luz azul en dispositivos electrónicos a partir de las 20:00, mantener iluminación tenue en la casa durante las horas previas al sueño, usar cortinas opacas para dormir especialmente en trabajadores de turnos, mantener la máxima regularidad posible en horarios de sueño y vigilia incluyendo fines de semana, evitar la cafeína después del mediodía, realizar actividad física regular preferiblemente por la mañana para reforzar señales circadianas, comer a horarios regulares ya que las comidas son zeitgebers secundarios, y considerar el uso de un simulador de amanecer como alarma que emula la transición gradual de oscuridad a luz.",
    "higieneSuenoEn": "Sleep hygiene for circadian rhythm disorders emphasizes strict control of light exposure as the primary synchronizer of the biological clock. Exposure to bright natural sunlight should be sought first thing in the morning for at least 30 minutes, blue light filters should be used on electronic devices starting at 8:00 PM, dim lighting should be maintained in the home during pre-sleep hours, blackout curtains should be used for sleeping especially for shift workers, maximum regularity should be maintained in sleep and wake schedules including weekends, caffeine should be avoided after noon, regular physical activity should be performed preferably in the morning to reinforce circadian signals, eating at regular times as meals are secondary zeitgebers, and consider using a dawn simulator alarm that emulates the gradual transition from darkness to light.",
    "complicacionesEs": [
      "Rendimiento académico deficiente y ausentismo escolar en adolescentes con fase retrasada",
      "Depresión mayor, trastorno afectivo estacional y trastornos de ansiedad",
      "Mayor riesgo de síndrome metabólico, obesidad y diabetes tipo 2",
      "Riesgo cardiovascular aumentado especialmente en trabajadores de turnos",
      "Mayor incidencia de errores médicos y accidentes laborales en trabajo nocturno",
      "Aislamiento social y deterioro de relaciones familiares e interpersonales",
      "Mayor riesgo de ciertos tipos de cáncer en trabajadores de turnos crónicos",
      "Dependencia de sustancias estimulantes e hipnóticas para forzar el ciclo sueño-vigilia",
      "Trastornos gastrointestinales crónicos por desalineación de relojes periféricos"
    ],
    "complicacionesEn": [
      "Poor academic performance and school absenteeism in adolescents with delayed phase",
      "Major depression, seasonal affective disorder, and anxiety disorders",
      "Increased risk of metabolic syndrome, obesity, and type 2 diabetes",
      "Increased cardiovascular risk especially in shift workers",
      "Higher incidence of medical errors and workplace accidents in night work",
      "Social isolation and deterioration of family and interpersonal relationships",
      "Higher risk of certain types of cancer in chronic shift workers",
      "Dependence on stimulant and hypnotic substances to force the sleep-wake cycle",
      "Chronic gastrointestinal disorders from peripheral clock misalignment"
    ],
    "cuandoConsultarEs": "Consulte a un especialista en medicina del sueño si tiene dificultad persistente para dormirse o despertarse a los horarios deseados a pesar de intentar ajustar su rutina, si el desfase entre su horario preferido de sueño y el requerido socialmente le causa problemas significativos académicos, laborales o sociales, si trabaja en turnos nocturnos o rotativos y experimenta somnolencia excesiva o insomnio que afectan su rendimiento o seguridad, si la melatonina de venta libre no ha sido efectiva, si tiene síntomas de depresión o ansiedad asociados a sus problemas de sueño, o si necesita adaptaciones académicas o laborales para su trastorno del ritmo circadiano.",
    "cuandoConsultarEn": "Consult a sleep medicine specialist if you have persistent difficulty falling asleep or waking up at desired times despite trying to adjust your routine, if the mismatch between your preferred sleep schedule and the socially required one causes significant academic, work, or social problems, if you work night or rotating shifts and experience excessive sleepiness or insomnia affecting your performance or safety, if over-the-counter melatonin has not been effective, if you have symptoms of depression or anxiety associated with your sleep problems, or if you need academic or workplace accommodations for your circadian rhythm disorder."
  }
]`);

export function buscarMedicinaSueno(termino: string): MedicinaSuenoEntry[] {
  const t = termino.toLowerCase();
  return MEDICINA_SUENO_ENTRIES.filter(e =>
    e.nombreEs.toLowerCase().includes(t) ||
    e.nombreEn.toLowerCase().includes(t) ||
    e.descripcionEs.toLowerCase().includes(t) ||
    e.descripcionEn.toLowerCase().includes(t)
  );
}

export function getMedicinaSuenoById(id: string): MedicinaSuenoEntry | undefined {
  return MEDICINA_SUENO_ENTRIES.find(e => e.id === id);
}

export function getMedicinaSuenoPorCategoria(categoria: string): MedicinaSuenoEntry[] {
  const c = categoria.toLowerCase();
  return MEDICINA_SUENO_ENTRIES.filter(e =>
    e.categoriaEs.toLowerCase().includes(c) ||
    e.categoriaEn.toLowerCase().includes(c)
  );
}
