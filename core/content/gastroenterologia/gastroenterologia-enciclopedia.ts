// =============================================================================
// SOMA Gastroenterologia Enciclopedia — Spanish-First Bilingual
// Detailed Gastroenterology Patient Education Content
// =============================================================================
// ARCHITECTURE: JSON.parse() wrapper prevents TS2590 "expression too complex"
// =============================================================================

export interface GastroenterologiaEntry {
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
  complicacionesEs: string[];
  complicacionesEn: string[];
  cuandoConsultarEs: string;
  cuandoConsultarEn: string;
}

export const GASTROENTEROLOGIA_ENTRIES: GastroenterologiaEntry[] = JSON.parse(`[
  {
    "id": "enfermedad-reflujo",
    "nombreEs": "Enfermedad por Reflujo Gastroesofagico (ERGE)",
    "nombreEn": "Gastroesophageal Reflux Disease (GERD)",
    "categoriaEs": "Esofagica",
    "categoriaEn": "Esophageal",
    "descripcionEs": "La enfermedad por reflujo gastroesofagico es una condicion cronica en la cual el acido del estomago fluye repetidamente hacia el esofago, irritando su revestimiento mucoso. El esfinter esofagico inferior, una banda muscular en la union del esofago y el estomago, no se cierra adecuadamente, permitiendo el retorno del contenido gastrico acido. Cuando este reflujo ocurre mas de dos veces por semana y causa sintomas molestos o complicaciones, se diagnostica como ERGE. Esta enfermedad afecta aproximadamente al 20% de la poblacion adulta en paises occidentales y puede deteriorar significativamente la calidad de vida si no se trata adecuadamente. La exposicion cronica del esofago al acido puede conducir a complicaciones graves como esofagitis erosiva, estenosis esofagica y esofago de Barrett, que es una condicion premaligna.",
    "descripcionEn": "Gastroesophageal reflux disease is a chronic condition in which stomach acid repeatedly flows back into the esophagus, irritating its mucosal lining. The lower esophageal sphincter, a muscular band at the junction of the esophagus and stomach, does not close properly, allowing the return of acidic gastric contents. When this reflux occurs more than twice a week and causes bothersome symptoms or complications, it is diagnosed as GERD. This disease affects approximately 20% of the adult population in Western countries and can significantly deteriorate quality of life if not adequately treated. Chronic esophageal exposure to acid can lead to serious complications such as erosive esophagitis, esophageal stricture, and Barrett's esophagus, which is a premalignant condition.",
    "sintomasEs": [
      "Acidez o ardor en el pecho (pirosis) que empeora despues de comer o al acostarse",
      "Regurgitacion de alimentos o liquidos acidos hacia la boca",
      "Dificultad para tragar (disfagia) con sensacion de obstruccion",
      "Dolor toracico no cardiaco que puede confundirse con un infarto",
      "Tos cronica seca especialmente nocturna",
      "Ronquera o cambios en la voz por irritacion laringea",
      "Sensacion de nudo en la garganta (globo faringeo)",
      "Erosion del esmalte dental por exposicion al acido",
      "Mal aliento persistente (halitosis)",
      "Nauseas despues de las comidas"
    ],
    "sintomasEn": [
      "Heartburn or chest burning (pyrosis) that worsens after eating or lying down",
      "Regurgitation of food or acidic liquids into the mouth",
      "Difficulty swallowing (dysphagia) with sensation of obstruction",
      "Non-cardiac chest pain that can be confused with a heart attack",
      "Chronic dry cough especially at night",
      "Hoarseness or voice changes from laryngeal irritation",
      "Sensation of a lump in the throat (globus pharyngeus)",
      "Dental enamel erosion from acid exposure",
      "Persistent bad breath (halitosis)",
      "Nausea after meals"
    ],
    "causasEs": "La ERGE es causada principalmente por la debilidad o relajacion inapropiada del esfinter esofagico inferior. Los factores contribuyentes incluyen hernia hiatal (desplazamiento del estomago hacia el torax a traves del diafragma), obesidad que aumenta la presion intraabdominal, embarazo, tabaquismo que debilita el esfinter, consumo de ciertos alimentos (grasas, chocolate, cafe, menta, citricos, alimentos picantes), medicamentos como antiinflamatorios no esteroideos, bloqueadores de canales de calcio y sedantes, asi como comidas abundantes especialmente antes de acostarse. El vaciamiento gastrico retardado (gastroparesia) y los trastornos del tejido conectivo como la esclerodermia tambien predisponen al reflujo.",
    "causasEn": "GERD is primarily caused by weakness or inappropriate relaxation of the lower esophageal sphincter. Contributing factors include hiatal hernia (displacement of the stomach into the chest through the diaphragm), obesity which increases intra-abdominal pressure, pregnancy, smoking which weakens the sphincter, consumption of certain foods (fats, chocolate, coffee, mint, citrus, spicy foods), medications such as nonsteroidal anti-inflammatory drugs, calcium channel blockers and sedatives, as well as large meals especially before bedtime. Delayed gastric emptying (gastroparesis) and connective tissue disorders such as scleroderma also predispose to reflux.",
    "diagnosticoEs": "El diagnostico se basa inicialmente en la historia clinica y la respuesta a una prueba terapeutica con inhibidores de bomba de protones (IBP) durante 4-8 semanas. Si los sintomas persisten o hay signos de alarma, se realiza endoscopia digestiva alta para visualizar la mucosa esofagica y descartar complicaciones como esofagitis, estenosis o esofago de Barrett. La pHmetria ambulatoria de 24 horas mide la exposicion acida del esofago y es el estandar de oro para confirmar reflujo patologico. La manometria esofagica evalua la funcion motora del esofago y el esfinter antes de considerar cirugia antirreflujo. La impedancia esofagica combinada con pH detecta tanto reflujo acido como no acido.",
    "diagnosticoEn": "Diagnosis is initially based on clinical history and response to a therapeutic trial with proton pump inhibitors (PPIs) for 4-8 weeks. If symptoms persist or alarm signs are present, upper digestive endoscopy is performed to visualize the esophageal mucosa and rule out complications such as esophagitis, stricture, or Barrett's esophagus. Ambulatory 24-hour pH monitoring measures esophageal acid exposure and is the gold standard for confirming pathological reflux. Esophageal manometry evaluates esophageal motor function and the sphincter before considering antireflux surgery. Combined esophageal impedance with pH detects both acid and non-acid reflux.",
    "tratamientoEs": "El tratamiento escalonado comienza con modificaciones del estilo de vida: elevar la cabecera de la cama 15-20 cm, evitar comer 2-3 horas antes de acostarse, perder peso si hay sobrepeso, evitar alimentos desencadenantes y dejar de fumar. Los farmacos de primera linea son los inhibidores de bomba de protones (omeprazol, esomeprazol, pantoprazol) durante 4-8 semanas, que son los mas efectivos para controlar el acido. Los antagonistas de receptores H2 (famotidina, ranitidina) son alternativas para sintomas leves. Los antiacidos proporcionan alivio rapido pero temporal. En casos refractarios o con hernia hiatal grande, la funduplicatura de Nissen laparoscopica envuelve el fondo gastrico alrededor del esofago para reforzar el esfinter. Los dispositivos magneticos (LINX) son una alternativa quirurgica mas nueva.",
    "tratamientoEn": "Stepwise treatment begins with lifestyle modifications: elevating the head of the bed 15-20 cm, avoiding eating 2-3 hours before bedtime, losing weight if overweight, avoiding trigger foods, and quitting smoking. First-line drugs are proton pump inhibitors (omeprazole, esomeprazole, pantoprazole) for 4-8 weeks, which are the most effective for acid control. H2 receptor antagonists (famotidine, ranitidine) are alternatives for mild symptoms. Antacids provide rapid but temporary relief. In refractory cases or with large hiatal hernia, laparoscopic Nissen fundoplication wraps the gastric fundus around the esophagus to reinforce the sphincter. Magnetic devices (LINX) are a newer surgical alternative.",
    "prevencionEs": "La prevencion incluye mantener un peso corporal saludable ya que la obesidad es el factor de riesgo modificable mas importante, evitar comidas abundantes y grasosas especialmente en la noche, no acostarse inmediatamente despues de comer, elevar la cabecera de la cama, dejar de fumar, limitar el consumo de alcohol, cafe y bebidas carbonatadas, usar ropa holgada que no comprima el abdomen, y manejar el estres adecuadamente. Las comidas pequenas y frecuentes son preferibles a comidas copiosas.",
    "prevencionEn": "Prevention includes maintaining a healthy body weight since obesity is the most important modifiable risk factor, avoiding large and fatty meals especially at night, not lying down immediately after eating, elevating the head of the bed, quitting smoking, limiting consumption of alcohol, coffee, and carbonated beverages, wearing loose clothing that does not compress the abdomen, and managing stress adequately. Small and frequent meals are preferable to large ones.",
    "complicacionesEs": [
      "Esofagitis erosiva con ulceraciones y sangrado",
      "Estenosis esofagica (estrechamiento cicatricial) que dificulta la deglucion",
      "Esofago de Barrett (metaplasia intestinal) con riesgo de adenocarcinoma esofagico",
      "Adenocarcinoma de esofago (cancer esofagico)",
      "Asma por reflujo y enfermedad pulmonar cronica",
      "Erosion dental severa y caries",
      "Laringitis cronica y dano de las cuerdas vocales"
    ],
    "complicacionesEn": [
      "Erosive esophagitis with ulcerations and bleeding",
      "Esophageal stricture (scar narrowing) that makes swallowing difficult",
      "Barrett's esophagus (intestinal metaplasia) with risk of esophageal adenocarcinoma",
      "Esophageal adenocarcinoma (esophageal cancer)",
      "Reflux-related asthma and chronic pulmonary disease",
      "Severe dental erosion and cavities",
      "Chronic laryngitis and vocal cord damage"
    ],
    "cuandoConsultarEs": "Consulte al medico si la acidez ocurre mas de dos veces por semana, si los sintomas persisten a pesar del uso de antiacidos, si tiene dificultad para tragar o dolor al tragar, si experimenta perdida de peso inexplicable, si presenta vomitos con sangre o heces negras alquitranadas, si tiene dolor toracico (primero descarte causa cardiaca), o si necesita medicamentos antireflujo de forma continua por mas de dos semanas.",
    "cuandoConsultarEn": "See a doctor if heartburn occurs more than twice a week, if symptoms persist despite antacid use, if you have difficulty swallowing or pain when swallowing, if you experience unexplained weight loss, if you have bloody vomit or black tarry stools, if you have chest pain (first rule out cardiac cause), or if you need antireflux medication continuously for more than two weeks."
  },
  {
    "id": "enfermedad-crohn",
    "nombreEs": "Enfermedad de Crohn",
    "nombreEn": "Crohn's Disease",
    "categoriaEs": "Inflamatoria intestinal",
    "categoriaEn": "Inflammatory bowel disease",
    "descripcionEs": "La enfermedad de Crohn es una enfermedad inflamatoria intestinal cronica que puede afectar cualquier parte del tracto gastrointestinal desde la boca hasta el ano, aunque afecta mas frecuentemente el ileon terminal y el colon. A diferencia de la colitis ulcerosa, la inflamacion en Crohn es transmural (afecta todas las capas de la pared intestinal) y se presenta de forma discontinua con areas de intestino normal intercaladas entre segmentos inflamados (lesiones en salto). Esta enfermedad cursa con periodos de actividad (brotes) y remision, y su curso es impredecible. Afecta aproximadamente a 3 de cada 1000 personas en paises desarrollados, con picos de incidencia entre los 15-35 anos y un segundo pico menor entre los 55-70 anos. La enfermedad de Crohn puede causar complicaciones serias como fistulas, abscesos y obstruccion intestinal.",
    "descripcionEn": "Crohn's disease is a chronic inflammatory bowel disease that can affect any part of the gastrointestinal tract from mouth to anus, though it most frequently affects the terminal ileum and colon. Unlike ulcerative colitis, inflammation in Crohn's is transmural (affects all layers of the intestinal wall) and presents discontinuously with areas of normal bowel interspersed between inflamed segments (skip lesions). This disease follows a course of activity periods (flares) and remission, and its course is unpredictable. It affects approximately 3 per 1000 people in developed countries, with incidence peaks between ages 15-35 and a second smaller peak between ages 55-70. Crohn's disease can cause serious complications such as fistulas, abscesses, and intestinal obstruction.",
    "sintomasEs": [
      "Diarrea cronica (a menudo no sanguinolenta, a diferencia de la colitis ulcerosa)",
      "Dolor abdominal tipo colico, especialmente en el cuadrante inferior derecho",
      "Perdida de peso involuntaria por malabsorcion y disminucion del apetito",
      "Fatiga cronica que afecta las actividades diarias",
      "Fiebre intermitente durante los brotes",
      "Fistulas perianales (comunicaciones anormales entre el intestino y la piel)",
      "Ulceras orales (aftas) recurrentes",
      "Nauseas y vomitos si hay obstruccion parcial",
      "Manifestaciones extraintestinales: artritis, uveitis, eritema nodoso",
      "Retraso del crecimiento en ninos y adolescentes"
    ],
    "sintomasEn": [
      "Chronic diarrhea (often non-bloody, unlike ulcerative colitis)",
      "Crampy abdominal pain, especially in the right lower quadrant",
      "Unintentional weight loss from malabsorption and decreased appetite",
      "Chronic fatigue affecting daily activities",
      "Intermittent fever during flares",
      "Perianal fistulas (abnormal connections between intestine and skin)",
      "Recurrent oral ulcers (aphthae)",
      "Nausea and vomiting if partial obstruction present",
      "Extraintestinal manifestations: arthritis, uveitis, erythema nodosum",
      "Growth retardation in children and adolescents"
    ],
    "causasEs": "La causa exacta es desconocida, pero se cree que resulta de una interaccion compleja entre susceptibilidad genetica (mas de 200 genes asociados, siendo NOD2/CARD15 el mas importante), factores ambientales y una respuesta inmune desregulada contra la microbiota intestinal. El sistema inmunologico ataca erroneamente las bacterias beneficas del intestino, causando inflamacion cronica. Factores de riesgo incluyen historia familiar de EII (15-20% tienen un pariente afectado), tabaquismo (que duplica el riesgo y empeora el curso), uso de antiinflamatorios no esteroideos, dieta occidental alta en grasas y procesados, y vivir en paises industrializados. La disbiosis intestinal (alteracion de la flora bacteriana) juega un papel importante en la patogenesis.",
    "causasEn": "The exact cause is unknown, but it is believed to result from a complex interaction between genetic susceptibility (more than 200 associated genes, NOD2/CARD15 being the most important), environmental factors, and a dysregulated immune response against intestinal microbiota. The immune system mistakenly attacks beneficial gut bacteria, causing chronic inflammation. Risk factors include family history of IBD (15-20% have an affected relative), smoking (which doubles the risk and worsens the course), use of nonsteroidal anti-inflammatory drugs, Western diet high in fats and processed foods, and living in industrialized countries. Intestinal dysbiosis (alteration of bacterial flora) plays an important role in pathogenesis.",
    "diagnosticoEs": "El diagnostico requiere una combinacion de hallazgos clinicos, endoscopicos, histologicos y radiologicos. La ileocolonoscopia con biopsias multiples es fundamental y muestra ulceras aftosas, ulceras lineales profundas, aspecto en empedrado y lesiones en salto. La capsula endoscopica permite evaluar el intestino delgado no accesible al endoscopio. La enterografia por resonancia magnetica (entero-RM) o tomografia (entero-TC) evalua la extension, actividad y complicaciones como estenosis, fistulas y abscesos. Los marcadores inflamatorios (PCR, velocidad de sedimentacion) y la calprotectina fecal ayudan a monitorear la actividad de la enfermedad. El hemograma puede mostrar anemia y leucocitosis.",
    "diagnosticoEn": "Diagnosis requires a combination of clinical, endoscopic, histological, and radiological findings. Ileocolonoscopy with multiple biopsies is fundamental and shows aphthous ulcers, deep linear ulcers, cobblestone appearance, and skip lesions. Capsule endoscopy allows evaluation of the small bowel not accessible to the endoscope. MR enterography (MRE) or CT enterography evaluates extent, activity, and complications such as strictures, fistulas, and abscesses. Inflammatory markers (CRP, sedimentation rate) and fecal calprotectin help monitor disease activity. Complete blood count may show anemia and leukocytosis.",
    "tratamientoEs": "El tratamiento busca inducir y mantener la remision, prevenir complicaciones y mejorar la calidad de vida. Para brotes leves a moderados se usan aminosalicilatos (mesalazina) y budesonida oral. Los corticosteroides sistemicos (prednisona) se reservan para brotes moderados a severos pero no se usan como mantenimiento. Los inmunomoduladores (azatioprina, metotrexato) mantienen la remision. La terapia biologica ha revolucionado el tratamiento: anti-TNF (infliximab, adalimumab), anti-integrinas (vedolizumab) y anti-IL-12/23 (ustekinumab) se usan en enfermedad moderada a severa o refractaria. Las moleculas pequenas como los inhibidores de JAK (tofacitinib, upadacitinib) son opciones mas nuevas. La cirugia se necesita en 70-80% de pacientes en algun momento de su vida para tratar complicaciones como estenosis, fistulas o abscesos, pero no es curativa.",
    "tratamientoEn": "Treatment aims to induce and maintain remission, prevent complications, and improve quality of life. For mild to moderate flares, aminosalicylates (mesalazine) and oral budesonide are used. Systemic corticosteroids (prednisone) are reserved for moderate to severe flares but are not used for maintenance. Immunomodulators (azathioprine, methotrexate) maintain remission. Biologic therapy has revolutionized treatment: anti-TNF (infliximab, adalimumab), anti-integrins (vedolizumab), and anti-IL-12/23 (ustekinumab) are used in moderate to severe or refractory disease. Small molecules such as JAK inhibitors (tofacitinib, upadacitinib) are newer options. Surgery is needed in 70-80% of patients at some point in their lives to treat complications such as strictures, fistulas, or abscesses, but it is not curative.",
    "prevencionEs": "No existe una prevencion conocida para la enfermedad de Crohn, pero se pueden reducir los brotes y complicaciones con medidas como dejar de fumar (el factor modificable mas importante), adherirse estrictamente al tratamiento de mantenimiento prescrito, evitar el uso de antiinflamatorios no esteroideos (ibuprofeno, naproxeno), mantener una dieta equilibrada evitando alimentos que empeoren los sintomas individuales, manejar el estres con tecnicas de relajacion, mantener seguimiento regular con el gastroenterologo, y realizar colonoscopias de vigilancia para cancer colorrectal segun las guias.",
    "prevencionEn": "There is no known prevention for Crohn's disease, but flares and complications can be reduced with measures such as quitting smoking (the most important modifiable factor), strictly adhering to prescribed maintenance treatment, avoiding nonsteroidal anti-inflammatory drugs (ibuprofen, naproxen), maintaining a balanced diet avoiding foods that worsen individual symptoms, managing stress with relaxation techniques, maintaining regular follow-up with the gastroenterologist, and performing surveillance colonoscopies for colorectal cancer according to guidelines.",
    "complicacionesEs": [
      "Fistulas (conexiones anormales entre el intestino y otros organos, piel o vejiga)",
      "Abscesos intraabdominales y perianales",
      "Estenosis intestinal con obstruccion parcial o completa",
      "Perforacion intestinal",
      "Malnutricion y deficiencias vitaminicas (B12, hierro, vitamina D)",
      "Cancer colorrectal (riesgo aumentado despues de 8-10 anos de enfermedad colicada)",
      "Osteoporosis por malabsorcion y uso cronico de corticosteroides",
      "Calculos renales y biliares",
      "Tromboembolismo venoso"
    ],
    "complicacionesEn": [
      "Fistulas (abnormal connections between intestine and other organs, skin, or bladder)",
      "Intra-abdominal and perianal abscesses",
      "Intestinal stricture with partial or complete obstruction",
      "Intestinal perforation",
      "Malnutrition and vitamin deficiencies (B12, iron, vitamin D)",
      "Colorectal cancer (increased risk after 8-10 years of colonic disease)",
      "Osteoporosis from malabsorption and chronic corticosteroid use",
      "Kidney and gallstones",
      "Venous thromboembolism"
    ],
    "cuandoConsultarEs": "Consulte al medico si presenta diarrea persistente por mas de cuatro semanas, dolor abdominal recurrente especialmente en el lado derecho, perdida de peso sin causa aparente, fiebre inexplicable, sangre en las heces, fistulas o abscesos perianales, sintomas articulares o cutaneos asociados a problemas digestivos, o si ya tiene diagnostico de Crohn y experimenta un empeoramiento de los sintomas a pesar del tratamiento.",
    "cuandoConsultarEn": "See a doctor if you have persistent diarrhea for more than four weeks, recurrent abdominal pain especially on the right side, unexplained weight loss, unexplained fever, blood in stools, perianal fistulas or abscesses, joint or skin symptoms associated with digestive problems, or if you already have a Crohn's diagnosis and experience worsening symptoms despite treatment."
  },
  {
    "id": "colitis-ulcerosa",
    "nombreEs": "Colitis Ulcerosa",
    "nombreEn": "Ulcerative Colitis",
    "categoriaEs": "Inflamatoria intestinal",
    "categoriaEn": "Inflammatory bowel disease",
    "descripcionEs": "La colitis ulcerosa es una enfermedad inflamatoria intestinal cronica que causa inflamacion y ulceracion de la mucosa del colon y el recto de forma continua, comenzando siempre desde el recto y extendiendose proximalmente en grado variable. A diferencia de la enfermedad de Crohn, la inflamacion se limita a la capa mucosa superficial y nunca afecta el intestino delgado (excepto la ileitis por reflujo). Se clasifica segun su extension en proctitis (solo recto), colitis izquierda (hasta el angulo esplenico) o pancolitis (todo el colon). La enfermedad cursa con brotes de actividad y periodos de remision. Afecta a aproximadamente 5 millones de personas mundialmente, con mayor incidencia en paises industrializados y en personas de ascendencia judia ashkenazi.",
    "descripcionEn": "Ulcerative colitis is a chronic inflammatory bowel disease that causes continuous inflammation and ulceration of the colonic and rectal mucosa, always beginning from the rectum and extending proximally to a variable degree. Unlike Crohn's disease, inflammation is limited to the superficial mucosal layer and never affects the small intestine (except for backwash ileitis). It is classified by extent as proctitis (rectum only), left-sided colitis (up to the splenic flexure), or pancolitis (entire colon). The disease follows a course of activity flares and remission periods. It affects approximately 5 million people worldwide, with higher incidence in industrialized countries and in people of Ashkenazi Jewish descent.",
    "sintomasEs": [
      "Diarrea sanguinolenta con moco (sintoma cardinal)",
      "Urgencia rectal y tenesmo (sensacion de evacuacion incompleta)",
      "Dolor abdominal tipo colico, generalmente en el lado izquierdo",
      "Frecuencia aumentada de evacuaciones (puede llegar a 10-20 al dia en brotes severos)",
      "Sangrado rectal que puede variar de leve a hemorragia masiva",
      "Perdida de peso y disminucion del apetito",
      "Fatiga cronica y malestar general",
      "Fiebre durante los brotes severos",
      "Manifestaciones extraintestinales: artritis, pioderma gangrenoso, colangitis esclerosante primaria",
      "Anemia por perdida cronica de sangre"
    ],
    "sintomasEn": [
      "Bloody diarrhea with mucus (cardinal symptom)",
      "Rectal urgency and tenesmus (sensation of incomplete evacuation)",
      "Crampy abdominal pain, usually on the left side",
      "Increased frequency of bowel movements (can reach 10-20 daily in severe flares)",
      "Rectal bleeding ranging from mild to massive hemorrhage",
      "Weight loss and decreased appetite",
      "Chronic fatigue and general malaise",
      "Fever during severe flares",
      "Extraintestinal manifestations: arthritis, pyoderma gangrenosum, primary sclerosing cholangitis",
      "Anemia from chronic blood loss"
    ],
    "causasEs": "Al igual que la enfermedad de Crohn, la colitis ulcerosa resulta de una interaccion entre predisposicion genetica, factores ambientales y respuesta inmune aberrante contra la microbiota intestinal. Se han identificado mas de 200 loci geneticos de susceptibilidad. Curiosamente, el tabaquismo tiene un efecto protector (a diferencia de Crohn) y los exfumadores tienen mayor riesgo. La apendicectomia previa puede ser protectora. Otros factores incluyen el uso de antibioticos que alteran la flora intestinal, el estres psicologico como factor exacerbante, la dieta occidental, y los antiinflamatorios no esteroideos que pueden desencadenar brotes. La lactancia materna parece ser protectora.",
    "causasEn": "Like Crohn's disease, ulcerative colitis results from an interaction between genetic predisposition, environmental factors, and aberrant immune response against intestinal microbiota. More than 200 genetic susceptibility loci have been identified. Interestingly, smoking has a protective effect (unlike Crohn's) and former smokers have a higher risk. Prior appendectomy may be protective. Other factors include antibiotic use that alters intestinal flora, psychological stress as an exacerbating factor, Western diet, and nonsteroidal anti-inflammatory drugs that can trigger flares. Breastfeeding appears to be protective.",
    "diagnosticoEs": "La colonoscopia con biopsias multiples es el estandar de oro y muestra mucosa eritematosa, friable, con perdida del patron vascular, ulceraciones y pseudopolipos en enfermedad cronica. Las biopsias revelan inflamacion limitada a la mucosa con distorsion de criptas y deplecion de celulas caliciformes. La calprotectina fecal es un marcador no invasivo excelente para diferenciar enfermedad inflamatoria de funcional y para monitorear la actividad. Los analisis de sangre muestran marcadores inflamatorios elevados (PCR, VSG), anemia y p-ANCA positivos en el 60-70% de pacientes. La radiografia simple de abdomen es importante en brotes severos para descartar megacolon toxico.",
    "diagnosticoEn": "Colonoscopy with multiple biopsies is the gold standard and shows erythematous, friable mucosa with loss of vascular pattern, ulcerations, and pseudopolyps in chronic disease. Biopsies reveal inflammation limited to the mucosa with crypt distortion and goblet cell depletion. Fecal calprotectin is an excellent non-invasive marker to differentiate inflammatory from functional disease and to monitor activity. Blood tests show elevated inflammatory markers (CRP, ESR), anemia, and positive p-ANCA in 60-70% of patients. Plain abdominal X-ray is important in severe flares to rule out toxic megacolon.",
    "tratamientoEs": "El tratamiento depende de la extension y severidad. Para proctitis y colitis izquierda leve-moderada, los aminosalicilatos topicos (supositorios o enemas de mesalazina) combinados con mesalazina oral son primera linea. Los corticosteroides orales o intravenosos se usan para brotes moderados a severos. Los inmunomoduladores (azatioprina, 6-mercaptopurina) mantienen la remision. Los biologicos anti-TNF (infliximab, adalimumab, golimumab), anti-integrinas (vedolizumab) y anti-IL-12/23 (ustekinumab) se usan en enfermedad moderada a severa. Los inhibidores de JAK (tofacitinib) y moduladores de S1P (ozanimod) son opciones orales mas nuevas. La colectomia total con reservorio ileoanal (bolsa en J) es curativa y se indica en colitis refractaria, megacolon toxico o cancer.",
    "tratamientoEn": "Treatment depends on extent and severity. For mild-moderate proctitis and left-sided colitis, topical aminosalicylates (mesalazine suppositories or enemas) combined with oral mesalazine are first line. Oral or intravenous corticosteroids are used for moderate to severe flares. Immunomodulators (azathioprine, 6-mercaptopurine) maintain remission. Anti-TNF biologics (infliximab, adalimumab, golimumab), anti-integrins (vedolizumab), and anti-IL-12/23 (ustekinumab) are used in moderate to severe disease. JAK inhibitors (tofacitinib) and S1P modulators (ozanimod) are newer oral options. Total colectomy with ileal pouch-anal anastomosis (J-pouch) is curative and indicated for refractory colitis, toxic megacolon, or cancer.",
    "prevencionEs": "No existe prevencion primaria conocida, pero se puede reducir el riesgo de brotes mediante la adherencia estricta al tratamiento de mantenimiento con aminosalicilatos o inmunosupresores, evitando antiinflamatorios no esteroideos, manejando el estres, manteniendo una dieta equilibrada, y realizando colonoscopias de vigilancia para displasia y cancer colorrectal comenzando 8 anos despues del diagnostico en colitis extensa. La quimioprevencion con mesalazina puede reducir el riesgo de cancer colorrectal asociado a colitis.",
    "prevencionEn": "No known primary prevention exists, but flare risk can be reduced through strict adherence to maintenance treatment with aminosalicylates or immunosuppressants, avoiding nonsteroidal anti-inflammatory drugs, managing stress, maintaining a balanced diet, and performing surveillance colonoscopies for dysplasia and colorectal cancer starting 8 years after diagnosis in extensive colitis. Chemoprevention with mesalazine may reduce the risk of colitis-associated colorectal cancer.",
    "complicacionesEs": [
      "Megacolon toxico (dilatacion colonica peligrosa que puede perforarse)",
      "Hemorragia masiva que requiere transfusion o cirugia de emergencia",
      "Perforacion colonica",
      "Cancer colorrectal (riesgo aumenta significativamente despues de 8-10 anos de pancolitis)",
      "Colangitis esclerosante primaria (inflamacion de los conductos biliares)",
      "Tromboembolismo venoso (riesgo 2-3 veces mayor que la poblacion general)",
      "Estenosis colonica (requiere biopsia para descartar malignidad)",
      "Dependencia de corticosteroides con efectos adversos asociados"
    ],
    "complicacionesEn": [
      "Toxic megacolon (dangerous colonic dilation that can perforate)",
      "Massive hemorrhage requiring transfusion or emergency surgery",
      "Colonic perforation",
      "Colorectal cancer (risk increases significantly after 8-10 years of pancolitis)",
      "Primary sclerosing cholangitis (bile duct inflammation)",
      "Venous thromboembolism (2-3 times higher risk than general population)",
      "Colonic stricture (requires biopsy to rule out malignancy)",
      "Corticosteroid dependence with associated adverse effects"
    ],
    "cuandoConsultarEs": "Consulte al medico si presenta diarrea con sangre o moco por mas de una semana, dolor abdominal que no mejora, mas de seis deposiciones sanguinolentas al dia, fiebre con sintomas intestinales, perdida de peso significativa, signos de deshidratacion, o si ya tiene colitis ulcerosa y experimenta un brote que no responde al tratamiento habitual. Acuda a urgencias si tiene distension abdominal severa con fiebre (posible megacolon toxico) o hemorragia masiva.",
    "cuandoConsultarEn": "See a doctor if you have bloody or mucoid diarrhea for more than one week, abdominal pain that does not improve, more than six bloody stools per day, fever with intestinal symptoms, significant weight loss, signs of dehydration, or if you already have ulcerative colitis and experience a flare that does not respond to usual treatment. Go to the emergency room if you have severe abdominal distension with fever (possible toxic megacolon) or massive hemorrhage."
  },
  {
    "id": "sindrome-intestino-irritable",
    "nombreEs": "Sindrome del Intestino Irritable (SII)",
    "nombreEn": "Irritable Bowel Syndrome (IBS)",
    "categoriaEs": "Funcional",
    "categoriaEn": "Functional",
    "descripcionEs": "El sindrome del intestino irritable es el trastorno funcional gastrointestinal mas comun, caracterizado por dolor abdominal recurrente asociado a cambios en los habitos intestinales sin una causa organica identificable. No causa dano estructural ni inflamacion visible en el intestino, pero sus sintomas pueden ser debilitantes y afectar significativamente la calidad de vida. Se clasifica en cuatro subtipos: SII con predominio de diarrea (SII-D), con predominio de estrenimiento (SII-E), mixto (SII-M) y no clasificable. Afecta al 10-15% de la poblacion mundial, es mas comun en mujeres y frecuentemente coexiste con otros trastornos funcionales como dispepsia funcional, fibromialgia y sindrome de fatiga cronica. El eje cerebro-intestino juega un papel central en su fisiopatologia.",
    "descripcionEn": "Irritable bowel syndrome is the most common functional gastrointestinal disorder, characterized by recurrent abdominal pain associated with changes in bowel habits without an identifiable organic cause. It does not cause structural damage or visible intestinal inflammation, but its symptoms can be debilitating and significantly affect quality of life. It is classified into four subtypes: IBS with predominant diarrhea (IBS-D), predominant constipation (IBS-C), mixed (IBS-M), and unclassifiable. It affects 10-15% of the world population, is more common in women, and frequently coexists with other functional disorders such as functional dyspepsia, fibromyalgia, and chronic fatigue syndrome. The brain-gut axis plays a central role in its pathophysiology.",
    "sintomasEs": [
      "Dolor abdominal recurrente relacionado con la defecacion (al menos 1 dia por semana en los ultimos 3 meses)",
      "Cambio en la frecuencia de las evacuaciones (diarrea, estrenimiento o alternancia)",
      "Cambio en la forma o consistencia de las heces (segun escala de Bristol)",
      "Hinchazon y distension abdominal marcada",
      "Flatulencia excesiva",
      "Urgencia fecal (en SII-D) o esfuerzo excesivo al evacuar (en SII-E)",
      "Sensacion de evacuacion incompleta",
      "Moco en las heces",
      "Empeoramiento de sintomas con el estres emocional",
      "Sintomas que empeoran despues de comer ciertos alimentos"
    ],
    "sintomasEn": [
      "Recurrent abdominal pain related to defecation (at least 1 day per week in the last 3 months)",
      "Change in stool frequency (diarrhea, constipation, or alternating)",
      "Change in stool form or consistency (according to Bristol scale)",
      "Marked bloating and abdominal distension",
      "Excessive flatulence",
      "Fecal urgency (in IBS-D) or excessive straining (in IBS-C)",
      "Sensation of incomplete evacuation",
      "Mucus in stools",
      "Worsening of symptoms with emotional stress",
      "Symptoms that worsen after eating certain foods"
    ],
    "causasEs": "La causa es multifactorial e involucra alteraciones en el eje cerebro-intestino. Los mecanismos incluyen hipersensibilidad visceral (el intestino es mas sensible al dolor y distension), alteraciones de la motilidad intestinal (contracciones demasiado rapidas o lentas), aumento de la permeabilidad intestinal, disbiosis del microbioma intestinal, inflamacion de bajo grado de la mucosa, y procesamiento alterado del dolor en el sistema nervioso central. Los factores precipitantes incluyen gastroenteritis infecciosa previa (SII post-infeccioso en 10-15% de casos), estres cronico, ansiedad y depresion, intolerancia a alimentos fermentables (FODMAPs), cambios hormonales (empeoramiento perimenstrual), y uso de antibioticos.",
    "causasEn": "The cause is multifactorial and involves alterations in the brain-gut axis. Mechanisms include visceral hypersensitivity (the intestine is more sensitive to pain and distension), altered intestinal motility (contractions too fast or slow), increased intestinal permeability, gut microbiome dysbiosis, low-grade mucosal inflammation, and altered pain processing in the central nervous system. Precipitating factors include prior infectious gastroenteritis (post-infectious IBS in 10-15% of cases), chronic stress, anxiety and depression, intolerance to fermentable foods (FODMAPs), hormonal changes (perimenstrual worsening), and antibiotic use.",
    "diagnosticoEs": "El SII se diagnostica clinicamente usando los criterios de Roma IV: dolor abdominal recurrente al menos 1 dia por semana en los ultimos 3 meses, asociado a dos o mas de los siguientes: relacionado con la defecacion, asociado a cambio en la frecuencia de heces, o cambio en la forma de las heces. Es un diagnostico de exclusion que requiere descartar signos de alarma (sangrado rectal, perdida de peso, anemia, fiebre, inicio despues de los 50 anos, historia familiar de cancer colorrectal o EII). Las pruebas basicas incluyen hemograma, PCR, anticuerpos anti-transglutaminasa (para descartar celiaca), calprotectina fecal (para descartar EII) y funcion tiroidea. La colonoscopia se realiza si hay signos de alarma o falta de respuesta al tratamiento.",
    "diagnosticoEn": "IBS is diagnosed clinically using Rome IV criteria: recurrent abdominal pain at least 1 day per week in the last 3 months, associated with two or more of the following: related to defecation, associated with change in stool frequency, or change in stool form. It is a diagnosis of exclusion requiring ruling out alarm signs (rectal bleeding, weight loss, anemia, fever, onset after age 50, family history of colorectal cancer or IBD). Basic tests include complete blood count, CRP, anti-transglutaminase antibodies (to rule out celiac), fecal calprotectin (to rule out IBD), and thyroid function. Colonoscopy is performed if alarm signs are present or there is lack of treatment response.",
    "tratamientoEs": "El enfoque terapeutico es multimodal y personalizado segun el subtipo. La dieta baja en FODMAPs (oligosacaridos, disacaridos, monosacaridos y polioles fermentables) es efectiva en 50-80% de pacientes y debe realizarse con guia de nutriologo. Los antiespasmódicos (hioscina, mebeverina, aceite de menta) alivian el dolor y los calambres. Para SII-D: loperamida, rifaximina (antibiotico no absorbible), eluxadolina, y colestiramina. Para SII-E: laxantes osmoticos (polietilenglicol), linaclotida, lubiprostone, plecanatida. Los antidepresivos en dosis bajas son moduladores del dolor visceral: triciclicos (amitriptilina) para SII-D y ISRS para SII-E. La terapia cognitivo-conductual y la hipnoterapia dirigida al intestino tienen evidencia solida. Los probioticos especificos pueden mejorar los sintomas globales.",
    "tratamientoEn": "The therapeutic approach is multimodal and personalized by subtype. A low-FODMAP diet (fermentable oligosaccharides, disaccharides, monosaccharides, and polyols) is effective in 50-80% of patients and should be done with dietitian guidance. Antispasmodics (hyoscine, mebeverine, peppermint oil) relieve pain and cramps. For IBS-D: loperamide, rifaximin (non-absorbable antibiotic), eluxadoline, and cholestyramine. For IBS-C: osmotic laxatives (polyethylene glycol), linaclotide, lubiprostone, plecanatide. Low-dose antidepressants are visceral pain modulators: tricyclics (amitriptyline) for IBS-D and SSRIs for IBS-C. Cognitive behavioral therapy and gut-directed hypnotherapy have solid evidence. Specific probiotics may improve global symptoms.",
    "prevencionEs": "Aunque el SII no se puede prevenir completamente, se puede reducir la frecuencia y severidad de los sintomas manteniendo una alimentacion regular y equilibrada evitando alimentos desencadenantes identificados, practicando ejercicio fisico regular que mejora la motilidad y reduce el estres, durmiendo adecuadamente (7-8 horas), manejando el estres con tecnicas de relajacion como meditacion y yoga, evitando el uso innecesario de antibioticos, hidratandose adecuadamente, y no saltando comidas. Despues de una gastroenteritis infecciosa, el uso temprano de probioticos puede reducir el riesgo de SII post-infeccioso.",
    "prevencionEn": "Although IBS cannot be completely prevented, symptom frequency and severity can be reduced by maintaining a regular and balanced diet avoiding identified trigger foods, practicing regular physical exercise that improves motility and reduces stress, sleeping adequately (7-8 hours), managing stress with relaxation techniques such as meditation and yoga, avoiding unnecessary antibiotic use, staying adequately hydrated, and not skipping meals. After infectious gastroenteritis, early probiotic use may reduce the risk of post-infectious IBS.",
    "complicacionesEs": [
      "Deterioro significativo de la calidad de vida y funcionamiento social",
      "Ansiedad y depresion asociadas (presentes en 40-60% de pacientes)",
      "Ausentismo laboral y disminucion de la productividad",
      "Desnutricion por dietas excesivamente restrictivas sin guia profesional",
      "Dependencia de laxantes en SII-E",
      "Uso excesivo de recursos de salud y procedimientos diagnosticos innecesarios",
      "Aislamiento social por miedo a los sintomas"
    ],
    "complicacionesEn": [
      "Significant deterioration of quality of life and social functioning",
      "Associated anxiety and depression (present in 40-60% of patients)",
      "Work absenteeism and decreased productivity",
      "Malnutrition from excessively restrictive diets without professional guidance",
      "Laxative dependence in IBS-C",
      "Excessive use of healthcare resources and unnecessary diagnostic procedures",
      "Social isolation from fear of symptoms"
    ],
    "cuandoConsultarEs": "Consulte al medico si tiene dolor abdominal persistente que interfiere con sus actividades diarias, cambios en los habitos intestinales que duran mas de tres meses, hinchazon severa, o si sus sintomas no mejoran con cambios dieteticos. Acuda de inmediato si presenta sangre en las heces, perdida de peso involuntaria, dolor abdominal que despierta del sueno nocturno, fiebre persistente, o si los sintomas comenzaron despues de los 50 anos, ya que estos son signos de alarma que requieren evaluacion urgente.",
    "cuandoConsultarEn": "See a doctor if you have persistent abdominal pain that interferes with daily activities, changes in bowel habits lasting more than three months, severe bloating, or if symptoms do not improve with dietary changes. Seek immediate care if you have blood in stools, unintentional weight loss, abdominal pain that awakens you from sleep, persistent fever, or if symptoms started after age 50, as these are alarm signs requiring urgent evaluation."
  },
  {
    "id": "hepatitis-b",
    "nombreEs": "Hepatitis B",
    "nombreEn": "Hepatitis B",
    "categoriaEs": "Hepatica",
    "categoriaEn": "Hepatic",
    "descripcionEs": "La hepatitis B es una infeccion viral del higado causada por el virus de la hepatitis B (VHB), un virus ADN de la familia Hepadnaviridae. Puede presentarse como infeccion aguda autolimitada o progresar a infeccion cronica, dependiendo de la edad de adquisicion. En adultos inmunocompetentes, mas del 95% se recuperan espontaneamente; sin embargo, cuando se adquiere en la infancia o periodo perinatal, el 90% progresa a cronicidad. La hepatitis B cronica afecta a aproximadamente 296 millones de personas mundialmente y es responsable de casi 900,000 muertes anuales por cirrosis y carcinoma hepatocelular. Es una causa principal de cancer de higado a nivel global y una de las enfermedades infecciosas mas prevenibles gracias a una vacuna altamente efectiva disponible desde 1982.",
    "descripcionEn": "Hepatitis B is a viral liver infection caused by the hepatitis B virus (HBV), a DNA virus of the Hepadnaviridae family. It can present as a self-limited acute infection or progress to chronic infection, depending on the age of acquisition. In immunocompetent adults, more than 95% recover spontaneously; however, when acquired in childhood or the perinatal period, 90% progress to chronicity. Chronic hepatitis B affects approximately 296 million people worldwide and is responsible for nearly 900,000 annual deaths from cirrhosis and hepatocellular carcinoma. It is a leading cause of liver cancer globally and one of the most preventable infectious diseases thanks to a highly effective vaccine available since 1982.",
    "sintomasEs": [
      "Fatiga profunda y malestar general que puede durar semanas",
      "Ictericia (coloracion amarilla de piel y ojos) en la fase aguda",
      "Orina oscura color cola y heces palidas o acolicas",
      "Dolor en el cuadrante superior derecho del abdomen",
      "Nauseas, vomitos y perdida del apetito",
      "Fiebre leve",
      "Dolor articular y muscular",
      "La infeccion cronica es frecuentemente asintomatica durante anos hasta que aparecen complicaciones",
      "Hepatomegalia (agrandamiento del higado) palpable",
      "Prurito generalizado"
    ],
    "sintomasEn": [
      "Profound fatigue and general malaise that can last weeks",
      "Jaundice (yellowing of skin and eyes) in the acute phase",
      "Dark cola-colored urine and pale or acholic stools",
      "Right upper quadrant abdominal pain",
      "Nausea, vomiting, and loss of appetite",
      "Low-grade fever",
      "Joint and muscle pain",
      "Chronic infection is frequently asymptomatic for years until complications develop",
      "Palpable hepatomegaly (liver enlargement)",
      "Generalized pruritus"
    ],
    "causasEs": "El virus de la hepatitis B se transmite a traves de contacto con sangre o fluidos corporales infectados. Las principales vias de transmision son: perinatal (de madre a hijo durante el parto, la via mas comun mundialmente), contacto sexual sin proteccion con persona infectada, uso compartido de agujas o jeringas contaminadas, exposicion ocupacional a sangre (profesionales de salud), transfusiones con sangre no tamizada (raro en paises con sistemas de tamizaje), y contacto con heridas abiertas. El virus es 50-100 veces mas infeccioso que el VIH y puede sobrevivir fuera del cuerpo por al menos 7 dias. No se transmite por alimentos, agua, lactancia (si el recien nacido recibe vacuna e inmunoglobulina), abrazos, besos o compartir utensilios.",
    "causasEn": "The hepatitis B virus is transmitted through contact with infected blood or body fluids. The main routes of transmission are: perinatal (from mother to child during birth, the most common route worldwide), unprotected sexual contact with an infected person, sharing contaminated needles or syringes, occupational blood exposure (healthcare workers), transfusions with unscreened blood (rare in countries with screening systems), and contact with open wounds. The virus is 50-100 times more infectious than HIV and can survive outside the body for at least 7 days. It is not transmitted by food, water, breastfeeding (if the newborn receives vaccine and immunoglobulin), hugs, kisses, or sharing utensils.",
    "diagnosticoEs": "El diagnostico se basa en marcadores serologicos especificos. El HBsAg (antigeno de superficie) indica infeccion activa; si persiste mas de 6 meses, confirma hepatitis B cronica. El anti-HBs (anticuerpo de superficie) indica inmunidad por vacunacion o infeccion resuelta. El anti-HBc (anticuerpo contra el core) indica exposicion previa. El HBeAg refleja alta replicacion viral. La carga viral de ADN del VHB cuantifica la replicacion activa y guia el tratamiento. Las pruebas de funcion hepatica (ALT, AST) evaluan el dano hepatico. La elastografia hepatica (FibroScan) o el indice FIB-4 estiman el grado de fibrosis sin necesidad de biopsia. La ecografia hepatica semestral con alfa-fetoproteina se realiza como vigilancia de carcinoma hepatocelular en pacientes cronicos.",
    "diagnosticoEn": "Diagnosis is based on specific serological markers. HBsAg (surface antigen) indicates active infection; if it persists more than 6 months, it confirms chronic hepatitis B. Anti-HBs (surface antibody) indicates immunity from vaccination or resolved infection. Anti-HBc (core antibody) indicates prior exposure. HBeAg reflects high viral replication. HBV DNA viral load quantifies active replication and guides treatment. Liver function tests (ALT, AST) evaluate hepatic damage. Hepatic elastography (FibroScan) or FIB-4 index estimate the degree of fibrosis without biopsy. Semiannual hepatic ultrasound with alpha-fetoprotein is performed as hepatocellular carcinoma surveillance in chronic patients.",
    "tratamientoEs": "La hepatitis B aguda generalmente no requiere tratamiento antiviral especifico, solo cuidados de soporte (hidratacion, reposo, evitar hepatotoxicos como alcohol y paracetamol en exceso). La hepatitis B cronica se trata cuando hay evidencia de dano hepatico significativo o alta replicacion viral. Los antivirales de primera linea son los analogos de nucleos(t)idos: entecavir y tenofovir (disoproxil fumarato o alafenamida), que son altamente efectivos, bien tolerados y tienen alta barrera a la resistencia. Estos se toman de forma indefinida ya que la suspension puede causar reactivacion. El interferon pegilado alfa-2a es una alternativa de duracion finita (48 semanas) pero con mas efectos secundarios. La cura funcional (perdida de HBsAg) se logra en menos del 10% con los tratamientos actuales. Todos los pacientes requieren vigilancia periodica para cancer hepatico.",
    "tratamientoEn": "Acute hepatitis B generally does not require specific antiviral treatment, only supportive care (hydration, rest, avoiding hepatotoxins such as alcohol and excessive acetaminophen). Chronic hepatitis B is treated when there is evidence of significant liver damage or high viral replication. First-line antivirals are nucleos(t)ide analogues: entecavir and tenofovir (disoproxil fumarate or alafenamide), which are highly effective, well tolerated, and have a high barrier to resistance. These are taken indefinitely as discontinuation can cause reactivation. Pegylated interferon alfa-2a is a finite-duration alternative (48 weeks) but with more side effects. Functional cure (HBsAg loss) is achieved in less than 10% with current treatments. All patients require periodic surveillance for liver cancer.",
    "prevencionEs": "La vacunacion es la medida preventiva mas efectiva y se administra universalmente a todos los recien nacidos como parte del esquema de vacunacion infantil, asi como a adultos en grupos de riesgo. La inmunoglobulina contra hepatitis B (HBIG) junto con la vacuna se administra a recien nacidos de madres HBsAg positivas dentro de las primeras 12 horas de vida. Otras medidas incluyen el uso de condones en relaciones sexuales, no compartir agujas ni objetos cortopunzantes, tamizaje universal de donantes de sangre, uso de equipo de proteccion personal por trabajadores de salud, y tamizaje prenatal obligatorio de todas las embarazadas.",
    "prevencionEn": "Vaccination is the most effective preventive measure and is universally administered to all newborns as part of the childhood immunization schedule, as well as to adults in risk groups. Hepatitis B immunoglobulin (HBIG) along with the vaccine is given to newborns of HBsAg-positive mothers within the first 12 hours of life. Other measures include condom use during sexual intercourse, not sharing needles or sharps, universal blood donor screening, use of personal protective equipment by healthcare workers, and mandatory prenatal screening of all pregnant women.",
    "complicacionesEs": [
      "Cirrosis hepatica (desarrolla en 15-40% de pacientes con hepatitis B cronica no tratada)",
      "Carcinoma hepatocelular (cancer de higado — puede desarrollarse incluso sin cirrosis)",
      "Insuficiencia hepatica aguda (hepatitis fulminante en menos del 1% de casos agudos)",
      "Glomerulonefritis membranosa (dano renal por deposito de complejos inmunes)",
      "Poliarteritis nodosa (vasculitis asociada al VHB)",
      "Reactivacion viral en pacientes inmunosuprimidos",
      "Coinfeccion con hepatitis D (delta) que empeora el pronostico",
      "Hipertension portal con varices esofagicas y ascitis"
    ],
    "complicacionesEn": [
      "Liver cirrhosis (develops in 15-40% of untreated chronic hepatitis B patients)",
      "Hepatocellular carcinoma (liver cancer — can develop even without cirrhosis)",
      "Acute liver failure (fulminant hepatitis in less than 1% of acute cases)",
      "Membranous glomerulonephritis (kidney damage from immune complex deposition)",
      "Polyarteritis nodosa (HBV-associated vasculitis)",
      "Viral reactivation in immunosuppressed patients",
      "Hepatitis D (delta) coinfection that worsens prognosis",
      "Portal hypertension with esophageal varices and ascites"
    ],
    "cuandoConsultarEs": "Consulte al medico si desarrolla coloracion amarilla de piel u ojos, orina muy oscura, fatiga extrema sin causa aparente, dolor persistente en el abdomen superior derecho, nauseas prolongadas, o si tuvo exposicion conocida al virus (contacto sexual sin proteccion, pinchazo con aguja). Si tiene hepatitis B cronica, mantenga seguimiento regular cada 6-12 meses con analisis de sangre y ecografia hepatica. Acuda a urgencias si presenta confusion mental, sangrado incontrolable, vomitos con sangre, o distension abdominal severa.",
    "cuandoConsultarEn": "See a doctor if you develop yellowing of skin or eyes, very dark urine, extreme fatigue without apparent cause, persistent right upper abdominal pain, prolonged nausea, or if you had known virus exposure (unprotected sexual contact, needle stick). If you have chronic hepatitis B, maintain regular follow-up every 6-12 months with blood tests and liver ultrasound. Go to the emergency room if you experience mental confusion, uncontrollable bleeding, bloody vomiting, or severe abdominal distension."
  },
  {
    "id": "cirrosis-hepatica",
    "nombreEs": "Cirrosis Hepatica",
    "nombreEn": "Liver Cirrhosis",
    "categoriaEs": "Hepatica",
    "categoriaEn": "Hepatic",
    "descripcionEs": "La cirrosis hepatica es la etapa final de la fibrosis hepatica progresiva, en la cual el tejido hepatico normal es reemplazado por tejido cicatricial (fibrosis) y nodulos de regeneracion, lo que distorsiona la arquitectura hepatica y compromete la funcion del higado. Es el resultado comun de multiples enfermedades hepaticas cronicas no tratadas o mal controladas. La cirrosis es inicialmente compensada (el higado aun funciona aceptablemente) pero puede descompensarse con el desarrollo de ascitis, encefalopatia hepatica, hemorragia variceal o ictericia. La cirrosis descompensada tiene una supervivencia media de 2 anos sin trasplante. Afecta a mas de 1.5 millones de personas en Europa y es la undecima causa de muerte a nivel mundial. El unico tratamiento definitivo para la cirrosis avanzada es el trasplante hepatico.",
    "descripcionEn": "Liver cirrhosis is the final stage of progressive hepatic fibrosis, in which normal liver tissue is replaced by scar tissue (fibrosis) and regenerative nodules, distorting hepatic architecture and compromising liver function. It is the common outcome of multiple untreated or poorly controlled chronic liver diseases. Cirrhosis is initially compensated (the liver still functions acceptably) but can decompensate with the development of ascites, hepatic encephalopathy, variceal hemorrhage, or jaundice. Decompensated cirrhosis has a median survival of 2 years without transplant. It affects more than 1.5 million people in Europe and is the eleventh leading cause of death worldwide. The only definitive treatment for advanced cirrhosis is liver transplantation.",
    "sintomasEs": [
      "Fatiga cronica y debilidad progresiva",
      "Ictericia (piel y ojos amarillos) que indica disfuncion hepatica avanzada",
      "Ascitis (acumulacion de liquido en el abdomen que causa distension)",
      "Edema de miembros inferiores",
      "Hematomas y sangrados faciles por deficit de factores de coagulacion",
      "Encefalopatia hepatica (confusion, somnolencia, asterixis, coma)",
      "Eritema palmar (enrojecimiento de las palmas)",
      "Aranas vasculares (angiomas aracniformes en torso y cara)",
      "Ginecomastia e impotencia sexual en hombres",
      "Prurito intenso por acumulacion de sales biliares",
      "Perdida muscular (sarcopenia) y desnutricion"
    ],
    "sintomasEn": [
      "Chronic fatigue and progressive weakness",
      "Jaundice (yellow skin and eyes) indicating advanced liver dysfunction",
      "Ascites (fluid accumulation in the abdomen causing distension)",
      "Lower extremity edema",
      "Easy bruising and bleeding from coagulation factor deficiency",
      "Hepatic encephalopathy (confusion, drowsiness, asterixis, coma)",
      "Palmar erythema (reddening of palms)",
      "Spider angiomata (spider nevi on torso and face)",
      "Gynecomastia and sexual impotence in men",
      "Intense pruritus from bile salt accumulation",
      "Muscle wasting (sarcopenia) and malnutrition"
    ],
    "causasEs": "Las causas mas comunes de cirrosis varian geograficamente. En paises occidentales, la enfermedad hepatica asociada al alcohol (consumo cronico excesivo por mas de 10-20 anos) y la esteatohepatitis no alcoholica (EHNA/NASH, asociada a obesidad, diabetes y sindrome metabolico) son las causas principales. La hepatitis viral cronica (hepatitis B y C) es la causa principal en Asia y Africa. Otras causas incluyen hepatitis autoinmune, colangitis biliar primaria, colangitis esclerosante primaria, hemocromatosis hereditaria, enfermedad de Wilson, deficit de alfa-1 antitripsina, cirrosis cardiaca por insuficiencia cardiaca derecha cronica, y toxicidad por farmacos o suplementos hepatotoxicos.",
    "causasEn": "The most common causes of cirrhosis vary geographically. In Western countries, alcohol-associated liver disease (chronic excessive consumption for more than 10-20 years) and non-alcoholic steatohepatitis (NASH, associated with obesity, diabetes, and metabolic syndrome) are the leading causes. Chronic viral hepatitis (hepatitis B and C) is the leading cause in Asia and Africa. Other causes include autoimmune hepatitis, primary biliary cholangitis, primary sclerosing cholangitis, hereditary hemochromatosis, Wilson's disease, alpha-1 antitrypsin deficiency, cardiac cirrhosis from chronic right heart failure, and toxicity from hepatotoxic drugs or supplements.",
    "diagnosticoEs": "El diagnostico combina hallazgos clinicos, de laboratorio e imagenologicos. Las pruebas de laboratorio muestran transaminasas elevadas, hipoalbuminemia, tiempo de protrombina prolongado (INR elevado), bilirrubina elevada, y trombocitopenia. Las escalas Child-Pugh y MELD estratifican la gravedad y determinan la prioridad para trasplante. La elastografia hepatica (FibroScan) mide la rigidez del higado de forma no invasiva y es excelente para diagnosticar fibrosis avanzada y cirrosis. La ecografia muestra higado nodular, heterogeneo, con signos de hipertension portal (esplenomegalia, ascitis, flujo portal invertido). La endoscopia digestiva alta detecta varices esofagicas que requieren profilaxis de sangrado. La biopsia hepatica rara vez es necesaria actualmente pero sigue siendo el estandar de oro histologico.",
    "diagnosticoEn": "Diagnosis combines clinical, laboratory, and imaging findings. Laboratory tests show elevated transaminases, hypoalbuminemia, prolonged prothrombin time (elevated INR), elevated bilirubin, and thrombocytopenia. Child-Pugh and MELD scores stratify severity and determine transplant priority. Hepatic elastography (FibroScan) non-invasively measures liver stiffness and is excellent for diagnosing advanced fibrosis and cirrhosis. Ultrasound shows a nodular, heterogeneous liver with portal hypertension signs (splenomegaly, ascites, reversed portal flow). Upper digestive endoscopy detects esophageal varices requiring bleeding prophylaxis. Liver biopsy is rarely needed currently but remains the histological gold standard.",
    "tratamientoEs": "El tratamiento se centra en tratar la causa subyacente, prevenir la descompensacion y manejar las complicaciones. Para cirrosis alcoholica: abstinencia completa y permanente del alcohol. Para NASH: perdida de peso, ejercicio, control de diabetes y dislipidemias. Para hepatitis viral: antivirales. La ascitis se trata con restriccion de sodio y diureticos (espironolactona y furosemida); la ascitis refractaria requiere paracentesis terapeuticas o TIPS (derivacion portosistema intrahepática transyugular). La encefalopatia hepatica se trata con lactulosa y rifaximina. Las varices esofagicas requieren profilaxis con betabloqueadores no selectivos (propranolol, carvedilol) o ligadura endoscopica. El carcinoma hepatocelular se vigila con ecografia y alfa-fetoproteina cada 6 meses. El trasplante hepatico es el unico tratamiento curativo para cirrosis descompensada.",
    "tratamientoEn": "Treatment focuses on treating the underlying cause, preventing decompensation, and managing complications. For alcoholic cirrhosis: complete and permanent alcohol abstinence. For NASH: weight loss, exercise, diabetes and dyslipidemia control. For viral hepatitis: antivirals. Ascites is treated with sodium restriction and diuretics (spironolactone and furosemide); refractory ascites requires therapeutic paracentesis or TIPS (transjugular intrahepatic portosystemic shunt). Hepatic encephalopathy is treated with lactulose and rifaximin. Esophageal varices require prophylaxis with non-selective beta-blockers (propranolol, carvedilol) or endoscopic banding. Hepatocellular carcinoma is monitored with ultrasound and alpha-fetoprotein every 6 months. Liver transplantation is the only curative treatment for decompensated cirrhosis.",
    "prevencionEs": "La prevencion implica abordar las causas subyacentes antes de que progresen a cirrosis. Limitar el consumo de alcohol (no mas de 1 bebida al dia en mujeres y 2 en hombres, o idealmente abstinencia), vacunarse contra hepatitis B, tamizarse y tratarse la hepatitis C (que ahora es curable en >95% con antivirales de accion directa), mantener un peso saludable y controlar el sindrome metabolico para prevenir NASH, evitar medicamentos hepatotoxicos y suplementos no regulados, no compartir agujas, y realizarse chequeos hepaticos periodicos si se tienen factores de riesgo.",
    "prevencionEn": "Prevention involves addressing underlying causes before they progress to cirrhosis. Limit alcohol consumption (no more than 1 drink per day for women and 2 for men, or ideally abstinence), vaccinate against hepatitis B, screen for and treat hepatitis C (which is now curable in >95% with direct-acting antivirals), maintain a healthy weight and control metabolic syndrome to prevent NASH, avoid hepatotoxic medications and unregulated supplements, do not share needles, and have periodic liver checkups if risk factors are present.",
    "complicacionesEs": [
      "Hipertension portal con varices esofagicas y sangrado potencialmente mortal",
      "Ascitis y peritonitis bacteriana espontanea",
      "Encefalopatia hepatica (desde confusion leve hasta coma)",
      "Sindrome hepatorrenal (insuficiencia renal por disfuncion hepatica)",
      "Carcinoma hepatocelular (cancer de higado primario)",
      "Sindrome hepatopulmonar e hipertension portopulmonar",
      "Coagulopatia con riesgo de sangrado y trombosis",
      "Desnutricion severa y sarcopenia",
      "Infecciones recurrentes por inmunodeficiencia"
    ],
    "complicacionesEn": [
      "Portal hypertension with esophageal varices and potentially fatal bleeding",
      "Ascites and spontaneous bacterial peritonitis",
      "Hepatic encephalopathy (from mild confusion to coma)",
      "Hepatorenal syndrome (kidney failure from liver dysfunction)",
      "Hepatocellular carcinoma (primary liver cancer)",
      "Hepatopulmonary syndrome and portopulmonary hypertension",
      "Coagulopathy with risk of bleeding and thrombosis",
      "Severe malnutrition and sarcopenia",
      "Recurrent infections from immunodeficiency"
    ],
    "cuandoConsultarEs": "Consulte al medico si presenta fatiga persistente, coloracion amarilla de piel u ojos, hinchazon abdominal progresiva, sangrado facil o espontaneo, confusion o cambios en el comportamiento, orina oscura persistente, o si tiene factores de riesgo (consumo cronico de alcohol, hepatitis viral, obesidad con diabetes). Acuda a urgencias si tiene vomito con sangre o heces negras (posible sangrado variceal), confusion severa o somnolencia excesiva (encefalopatia), fiebre con ascitis (posible peritonitis), o dolor abdominal agudo.",
    "cuandoConsultarEn": "See a doctor if you have persistent fatigue, yellowing of skin or eyes, progressive abdominal swelling, easy or spontaneous bleeding, confusion or behavioral changes, persistent dark urine, or if you have risk factors (chronic alcohol consumption, viral hepatitis, obesity with diabetes). Go to the emergency room if you have bloody vomit or black stools (possible variceal bleeding), severe confusion or excessive drowsiness (encephalopathy), fever with ascites (possible peritonitis), or acute abdominal pain."
  },
  {
    "id": "ulcera-peptica",
    "nombreEs": "Ulcera Peptica",
    "nombreEn": "Peptic Ulcer Disease",
    "categoriaEs": "Gastroduodenal",
    "categoriaEn": "Gastroduodenal",
    "descripcionEs": "La ulcera peptica es una erosion profunda que penetra la capa muscular de la mucosa del estomago (ulcera gastrica) o del duodeno (ulcera duodenal), siendo las ulceras duodenales cuatro veces mas frecuentes. Se produce cuando los factores agresivos (acido gastrico, pepsina) superan los mecanismos protectores de la mucosa (moco, bicarbonato, flujo sanguineo mucoso). Las dos causas principales son la infeccion por Helicobacter pylori (responsable del 60-70% de ulceras gastricas y 70-90% de ulceras duodenales) y el uso de antiinflamatorios no esteroideos (AINEs). La prevalencia global es del 5-10% y ha disminuido significativamente gracias a la erradicacion de H. pylori y al uso de inhibidores de bomba de protones. Las complicaciones como sangrado, perforacion y obstruccion pueden ser potencialmente mortales.",
    "descripcionEn": "Peptic ulcer disease is a deep erosion that penetrates the muscularis mucosae of the stomach (gastric ulcer) or duodenum (duodenal ulcer), with duodenal ulcers being four times more frequent. It occurs when aggressive factors (gastric acid, pepsin) overcome mucosal protective mechanisms (mucus, bicarbonate, mucosal blood flow). The two main causes are Helicobacter pylori infection (responsible for 60-70% of gastric ulcers and 70-90% of duodenal ulcers) and nonsteroidal anti-inflammatory drug (NSAID) use. Global prevalence is 5-10% and has decreased significantly thanks to H. pylori eradication and proton pump inhibitor use. Complications such as bleeding, perforation, and obstruction can be life-threatening.",
    "sintomasEs": [
      "Dolor epigastrico quemante o ardoroso (sintoma mas comun)",
      "Dolor que mejora con alimentos en ulcera duodenal (dolor de hambre)",
      "Dolor que empeora con alimentos en ulcera gastrica",
      "Dolor nocturno que despierta al paciente (tipico de ulcera duodenal)",
      "Sensacion de saciedad temprana",
      "Nauseas y vomitos",
      "Eructos y acidez estomacal",
      "Perdida de peso (mas comun en ulcera gastrica)",
      "Hematemesis (vomito con sangre) o melena (heces negras) si hay sangrado",
      "Puede ser asintomatica, especialmente en adultos mayores que usan AINEs"
    ],
    "sintomasEn": [
      "Burning or gnawing epigastric pain (most common symptom)",
      "Pain that improves with food in duodenal ulcer (hunger pain)",
      "Pain that worsens with food in gastric ulcer",
      "Nighttime pain that awakens the patient (typical of duodenal ulcer)",
      "Early satiety sensation",
      "Nausea and vomiting",
      "Belching and heartburn",
      "Weight loss (more common in gastric ulcer)",
      "Hematemesis (bloody vomit) or melena (black stools) if bleeding",
      "Can be asymptomatic, especially in elderly patients using NSAIDs"
    ],
    "causasEs": "Las dos causas principales son la infeccion por Helicobacter pylori (una bacteria gram-negativa que coloniza la mucosa gastrica y altera los mecanismos de defensa) y el uso de antiinflamatorios no esteroideos (ibuprofeno, naproxeno, aspirina) que inhiben la sintesis de prostaglandinas protectoras de la mucosa. Factores de riesgo adicionales incluyen el tabaquismo (que retrasa la cicatrizacion y aumenta la secrecion acida), el consumo excesivo de alcohol, el estres fisiologico severo (pacientes en unidad de cuidados intensivos — ulceras de estres), la edad avanzada, los corticosteroides (especialmente combinados con AINEs), el sindrome de Zollinger-Ellison (tumor productor de gastrina), y la enfermedad hepatica cronica.",
    "causasEn": "The two main causes are Helicobacter pylori infection (a gram-negative bacterium that colonizes the gastric mucosa and disrupts defense mechanisms) and nonsteroidal anti-inflammatory drug use (ibuprofen, naproxen, aspirin) which inhibit synthesis of mucosal protective prostaglandins. Additional risk factors include smoking (which delays healing and increases acid secretion), excessive alcohol consumption, severe physiological stress (intensive care unit patients — stress ulcers), advanced age, corticosteroids (especially combined with NSAIDs), Zollinger-Ellison syndrome (gastrin-producing tumor), and chronic liver disease.",
    "diagnosticoEs": "La endoscopia digestiva alta es el metodo diagnostico de eleccion ya que permite visualizar directamente la ulcera, tomar biopsias (obligatorio en ulceras gastricas para descartar malignidad) y realizar hemostasia si hay sangrado activo. La prueba de ureasa rapida en biopsia gastrica detecta H. pylori con alta sensibilidad. Las pruebas no invasivas para H. pylori incluyen la prueba de aliento con urea marcada con carbono-13 (la mas precisa no invasiva), el antigeno de H. pylori en heces, y la serologia (menos util ya que no distingue infeccion activa de pasada). Los niveles de gastrina en sangre se miden si se sospecha sindrome de Zollinger-Ellison. El hemograma puede mostrar anemia por deficiencia de hierro en sangrado cronico.",
    "diagnosticoEn": "Upper digestive endoscopy is the diagnostic method of choice as it allows direct ulcer visualization, biopsy collection (mandatory in gastric ulcers to rule out malignancy), and hemostasis if active bleeding is present. Rapid urease test on gastric biopsy detects H. pylori with high sensitivity. Non-invasive H. pylori tests include the carbon-13 labeled urea breath test (most accurate non-invasive), H. pylori stool antigen, and serology (less useful as it does not distinguish active from past infection). Blood gastrin levels are measured if Zollinger-Ellison syndrome is suspected. Complete blood count may show iron deficiency anemia in chronic bleeding.",
    "tratamientoEs": "El tratamiento depende de la causa. Para ulceras por H. pylori, se realiza terapia de erradicacion: la terapia cuadruple con bismuto (IBP + bismuto + metronidazol + tetraciclina por 14 dias) o la terapia concomitante (IBP + amoxicilina + claritromicina + metronidazol por 14 dias) son los esquemas preferidos actualmente. Se confirma la erradicacion con prueba de aliento o antigeno fecal 4 semanas despues de terminar el tratamiento. Los IBP (omeprazol, pantoprazol, esomeprazol) se mantienen 4-8 semanas para permitir la cicatrizacion. Para ulceras por AINEs: suspender el AINE si es posible y tratar con IBP por 8 semanas. Si el AINE es indispensable, coprescribir IBP como proteccion gastrica o cambiar a un inhibidor COX-2 selectivo. Las ulceras con sangrado activo se tratan endoscopicamente con inyeccion de epinefrina, clips hemostaticos o coagulacion termica.",
    "tratamientoEn": "Treatment depends on the cause. For H. pylori ulcers, eradication therapy is performed: bismuth quadruple therapy (PPI + bismuth + metronidazole + tetracycline for 14 days) or concomitant therapy (PPI + amoxicillin + clarithromycin + metronidazole for 14 days) are currently preferred regimens. Eradication is confirmed with breath test or fecal antigen 4 weeks after completing treatment. PPIs (omeprazole, pantoprazole, esomeprazole) are maintained for 4-8 weeks to allow healing. For NSAID ulcers: discontinue the NSAID if possible and treat with PPI for 8 weeks. If the NSAID is indispensable, co-prescribe a PPI as gastric protection or switch to a selective COX-2 inhibitor. Ulcers with active bleeding are treated endoscopically with epinephrine injection, hemostatic clips, or thermal coagulation.",
    "prevencionEs": "La prevencion incluye detectar y erradicar H. pylori en pacientes con antecedente de ulcera peptica, evitar o minimizar el uso de AINEs (usar la dosis mas baja por el menor tiempo posible), proteger el estomago con un IBP cuando los AINEs son necesarios especialmente en mayores de 65 anos o con antecedente ulceroso, dejar de fumar, limitar el consumo de alcohol, evitar el uso cronico de aspirina sin indicacion medica clara, y considerar inhibidores COX-2 selectivos en lugar de AINEs tradicionales en pacientes de alto riesgo gastrointestinal.",
    "prevencionEn": "Prevention includes detecting and eradicating H. pylori in patients with peptic ulcer history, avoiding or minimizing NSAID use (use the lowest dose for the shortest time possible), protecting the stomach with a PPI when NSAIDs are necessary especially in those over 65 or with ulcer history, quitting smoking, limiting alcohol consumption, avoiding chronic aspirin use without clear medical indication, and considering selective COX-2 inhibitors instead of traditional NSAIDs in patients at high gastrointestinal risk.",
    "complicacionesEs": [
      "Hemorragia digestiva alta (la complicacion mas comun, ocurre en 15-20% de ulceras)",
      "Perforacion de la pared gastrica o duodenal (emergencia quirurgica con peritonitis)",
      "Obstruccion de la salida gastrica por edema o cicatrizacion del piloro",
      "Penetracion hacia organos adyacentes (pancreas, higado)",
      "Anemia por deficiencia de hierro por sangrado cronico oculto",
      "Cancer gastrico (raro, pero las ulceras gastricas requieren biopsias para descartarlo)",
      "Recurrencia si no se erradica H. pylori o si se continuan los AINEs"
    ],
    "complicacionesEn": [
      "Upper gastrointestinal hemorrhage (most common complication, occurs in 15-20% of ulcers)",
      "Gastric or duodenal wall perforation (surgical emergency with peritonitis)",
      "Gastric outlet obstruction from pyloric edema or scarring",
      "Penetration into adjacent organs (pancreas, liver)",
      "Iron deficiency anemia from chronic occult bleeding",
      "Gastric cancer (rare, but gastric ulcers require biopsies to rule it out)",
      "Recurrence if H. pylori is not eradicated or NSAIDs are continued"
    ],
    "cuandoConsultarEs": "Consulte al medico si tiene dolor epigastrico persistente o recurrente por mas de dos semanas, si toma AINEs regularmente y desarrolla dolor de estomago, si tiene antecedente de ulcera y los sintomas regresan, o si tiene mas de 55 anos con dispepsia de nueva aparicion. Acuda a urgencias inmediatamente si presenta vomito con sangre roja o en poso de cafe, heces negras alquitranadas (melena), dolor abdominal subito e intenso (posible perforacion), desmayo o mareo con signos de sangrado, o dolor abdominal rigido con defensa muscular.",
    "cuandoConsultarEn": "See a doctor if you have persistent or recurrent epigastric pain for more than two weeks, if you regularly take NSAIDs and develop stomach pain, if you have a history of ulcer and symptoms return, or if you are over 55 with new-onset dyspepsia. Go to the emergency room immediately if you have red blood or coffee-ground vomiting, black tarry stools (melena), sudden severe abdominal pain (possible perforation), fainting or dizziness with signs of bleeding, or rigid abdominal pain with guarding."
  },
  {
    "id": "pancreatitis-aguda",
    "nombreEs": "Pancreatitis Aguda",
    "nombreEn": "Acute Pancreatitis",
    "categoriaEs": "Pancreatica",
    "categoriaEn": "Pancreatic",
    "descripcionEs": "La pancreatitis aguda es una inflamacion subita del pancreas que ocurre cuando las enzimas digestivas pancreaticas se activan prematuramente dentro del propio pancreas en lugar de en el intestino delgado, causando autodigestion y dano tisular. Es una de las causas mas comunes de hospitalizacion por enfermedad gastrointestinal, con una incidencia creciente mundialmente. La severidad varia desde una forma leve edematosa e intersticial (80% de casos) que se resuelve en pocos dias, hasta una forma severa necrotizante (20%) que puede causar fallo organico multiple y tiene una mortalidad del 15-30%. Las dos causas mas comunes son los calculos biliares (40%) y el consumo excesivo de alcohol (30%). El diagnostico temprano y la estratificacion de severidad son fundamentales para el manejo apropiado.",
    "descripcionEn": "Acute pancreatitis is a sudden inflammation of the pancreas that occurs when pancreatic digestive enzymes are prematurely activated within the pancreas itself instead of the small intestine, causing autodigestion and tissue damage. It is one of the most common causes of hospitalization for gastrointestinal disease, with an increasing incidence worldwide. Severity ranges from a mild edematous and interstitial form (80% of cases) that resolves in a few days, to a severe necrotizing form (20%) that can cause multiple organ failure and has a mortality rate of 15-30%. The two most common causes are gallstones (40%) and excessive alcohol consumption (30%). Early diagnosis and severity stratification are fundamental for appropriate management.",
    "sintomasEs": [
      "Dolor abdominal epigastrico severo de inicio subito que irradia a la espalda (en banda o en cinturon)",
      "Dolor que empeora despues de comer, especialmente alimentos grasos",
      "Dolor que mejora parcialmente al inclinarse hacia adelante o adoptar posicion fetal",
      "Nauseas y vomitos persistentes que no alivian el dolor",
      "Distension abdominal con disminucion de los ruidos intestinales",
      "Fiebre y taquicardia",
      "Sensibilidad abdominal intensa a la palpacion con defensa muscular",
      "Equimosis periumbilical (signo de Cullen) en casos severos",
      "Equimosis en flancos (signo de Grey Turner) en casos severos",
      "Deshidratacion por tercer espacio y vomitos"
    ],
    "sintomasEn": [
      "Severe sudden-onset epigastric abdominal pain radiating to the back (band-like or belt-like)",
      "Pain that worsens after eating, especially fatty foods",
      "Pain that partially improves when leaning forward or assuming fetal position",
      "Persistent nausea and vomiting that do not relieve the pain",
      "Abdominal distension with decreased bowel sounds",
      "Fever and tachycardia",
      "Intense abdominal tenderness on palpation with guarding",
      "Periumbilical ecchymosis (Cullen's sign) in severe cases",
      "Flank ecchymosis (Grey Turner's sign) in severe cases",
      "Dehydration from third-spacing and vomiting"
    ],
    "causasEs": "Los calculos biliares son la causa mas comun (40%), ocurriendo cuando un calculo migra y obstruye la ampolla de Vater, bloqueando el drenaje pancreatico. El alcohol es la segunda causa (30%), generalmente despues de consumo prolongado y excesivo, aunque puede ocurrir con un episodio de consumo intenso. Otras causas incluyen hipertrigliceridemia severa (>1000 mg/dL), procedimientos endoscopicos (pancreatitis post-CPRE), medicamentos (azatioprina, valproato, diureticos tiazidicos, estrogenos), traumatismo abdominal, tumores pancreaticos o periampulares, anomalias anatomicas (pancreas divisum), hipercalcemia, infecciones (paperas, VIH), enfermedades autoinmunes (pancreatitis autoinmune), y causas geneticas (mutaciones en PRSS1, SPINK1, CFTR). En 10-20% de casos la causa no se identifica (idiopatica).",
    "causasEn": "Gallstones are the most common cause (40%), occurring when a stone migrates and obstructs the ampulla of Vater, blocking pancreatic drainage. Alcohol is the second cause (30%), generally after prolonged excessive consumption, though it can occur with a single binge episode. Other causes include severe hypertriglyceridemia (>1000 mg/dL), endoscopic procedures (post-ERCP pancreatitis), medications (azathioprine, valproate, thiazide diuretics, estrogens), abdominal trauma, pancreatic or periampullary tumors, anatomical anomalies (pancreas divisum), hypercalcemia, infections (mumps, HIV), autoimmune diseases (autoimmune pancreatitis), and genetic causes (mutations in PRSS1, SPINK1, CFTR). In 10-20% of cases the cause is not identified (idiopathic).",
    "diagnosticoEs": "El diagnostico requiere al menos 2 de 3 criterios: dolor abdominal tipico (epigastrico, severo, irradiado a espalda), elevacion de lipasa o amilasa serica mas de 3 veces el limite superior normal (la lipasa es mas especifica y permanece elevada mas tiempo), y hallazgos caracteristicos en estudios de imagen. La tomografia computarizada con contraste (TC) es el estandar de imagen y se realiza 72 horas despues del inicio para evaluar necrosis pancreatica; no es necesaria al inicio si el diagnostico es clinicamente claro. La ecografia abdominal debe realizarse en todos los pacientes para evaluar la vesicula biliar como causa. La resonancia magnetica con colangiopancreatografia (CPRM) es superior para detectar coledocolitiasis y anomalias del conducto pancreatico. Los scores de severidad (APACHE II, Ranson, BISAP) y la PCR a las 48 horas ayudan a predecir el curso.",
    "diagnosticoEn": "Diagnosis requires at least 2 of 3 criteria: typical abdominal pain (epigastric, severe, radiating to back), serum lipase or amylase elevation more than 3 times the upper normal limit (lipase is more specific and remains elevated longer), and characteristic imaging findings. Contrast-enhanced computed tomography (CT) is the imaging standard and is performed 72 hours after onset to evaluate pancreatic necrosis; it is not necessary initially if the diagnosis is clinically clear. Abdominal ultrasound should be performed in all patients to evaluate the gallbladder as a cause. Magnetic resonance cholangiopancreatography (MRCP) is superior for detecting choledocholithiasis and pancreatic duct anomalies. Severity scores (APACHE II, Ranson, BISAP) and CRP at 48 hours help predict the course.",
    "tratamientoEs": "El tratamiento es principalmente de soporte. La resucitacion agresiva con liquidos intravenosos (solucion de Ringer lactato a 5-10 mL/kg/hora las primeras 24 horas) es el pilar fundamental para mantener la perfusion pancreatica y prevenir necrosis. El control del dolor se realiza con analgesicos intravenosos (paracetamol, AINEs como ketorolaco, opioides si es necesario). La nutricion enteral temprana (dentro de las primeras 24-48 horas) es preferible al ayuno prolongado, idealmente por via oral si se tolera; la nutricion nasoyeyunal se usa si no se tolera la via oral. Para pancreatitis biliar: la colangiopancreatografia retrograda endoscopica (CPRE) urgente si hay colangitis o obstruccion biliar persistente, seguida de colecistectomia durante la misma hospitalizacion para prevenir recurrencia. Las colecciones infectadas o necrosis infectada se tratan con antibioticos y drenaje minimo invasivo (step-up approach) preferiblemente sobre la cirugia.",
    "tratamientoEn": "Treatment is primarily supportive. Aggressive intravenous fluid resuscitation (lactated Ringer's solution at 5-10 mL/kg/hour for the first 24 hours) is the fundamental cornerstone to maintain pancreatic perfusion and prevent necrosis. Pain control is achieved with intravenous analgesics (acetaminophen, NSAIDs such as ketorolac, opioids if necessary). Early enteral nutrition (within the first 24-48 hours) is preferable to prolonged fasting, ideally oral if tolerated; nasojejunal nutrition is used if oral is not tolerated. For biliary pancreatitis: urgent endoscopic retrograde cholangiopancreatography (ERCP) if cholangitis or persistent biliary obstruction, followed by cholecystectomy during the same hospitalization to prevent recurrence. Infected collections or infected necrosis are treated with antibiotics and minimally invasive drainage (step-up approach) preferably over surgery.",
    "prevencionEs": "La prevencion depende de la causa subyacente. Para pancreatitis biliar: la colecistectomia (extirpacion de la vesicula biliar) previene la recurrencia y debe realizarse durante la misma hospitalizacion en pancreatitis leve o dentro de 6 semanas en pancreatitis severa. Para pancreatitis alcoholica: abstinencia completa y permanente del alcohol, con apoyo de programas de rehabilitacion si es necesario. Controlar los trigliceridos con dieta baja en grasas, fibratos y estatinas si hay hipertrigliceridemia. Suspender medicamentos potencialmente causantes. Evitar el tabaquismo que aumenta el riesgo de progresion a pancreatitis cronica. Los suplementos de enzimas pancreaticas pueden reducir el dolor recurrente en algunos pacientes.",
    "prevencionEn": "Prevention depends on the underlying cause. For biliary pancreatitis: cholecystectomy (gallbladder removal) prevents recurrence and should be performed during the same hospitalization for mild pancreatitis or within 6 weeks for severe pancreatitis. For alcoholic pancreatitis: complete and permanent alcohol abstinence, with rehabilitation program support if needed. Control triglycerides with low-fat diet, fibrates, and statins if hypertriglyceridemia is present. Discontinue potentially causative medications. Avoid smoking which increases the risk of progression to chronic pancreatitis. Pancreatic enzyme supplements may reduce recurrent pain in some patients.",
    "complicacionesEs": [
      "Necrosis pancreatica (esteril o infectada — la infectada tiene alta mortalidad)",
      "Pseudoquiste pancreatico (coleccion encapsulada que puede requerir drenaje)",
      "Fallo organico transitorio o persistente (pulmonar, renal, cardiovascular)",
      "Sindrome de respuesta inflamatoria sistemica (SIRS) y sepsis",
      "Colecciones peripancreaticas y abscesos",
      "Trombosis de la vena esplenica o porta",
      "Pseudoaneurisma arterial con riesgo de hemorragia masiva",
      "Insuficiencia pancreatica exocrina cronica (diabetes tipo 3c y maldigestion)",
      "Progresion a pancreatitis cronica con episodios recurrentes"
    ],
    "complicacionesEn": [
      "Pancreatic necrosis (sterile or infected — infected has high mortality)",
      "Pancreatic pseudocyst (encapsulated collection that may require drainage)",
      "Transient or persistent organ failure (pulmonary, renal, cardiovascular)",
      "Systemic inflammatory response syndrome (SIRS) and sepsis",
      "Peripancreatic collections and abscesses",
      "Splenic or portal vein thrombosis",
      "Arterial pseudoaneurysm with risk of massive hemorrhage",
      "Chronic exocrine pancreatic insufficiency (type 3c diabetes and maldigestion)",
      "Progression to chronic pancreatitis with recurrent episodes"
    ],
    "cuandoConsultarEs": "La pancreatitis aguda es una emergencia medica que siempre requiere hospitalizacion. Acuda a urgencias si presenta dolor abdominal severo de inicio subito que irradia a la espalda, especialmente despues de una comida copiosa o consumo de alcohol, nauseas y vomitos que no ceden, fiebre con dolor abdominal intenso, abdomen rigido y muy doloroso al tacto, signos de deshidratacion (boca seca, mareo, taquicardia), o coloracion amarilla de la piel. Si ya tuvo un episodio de pancreatitis, consulte a su gastroenterologo sobre la prevencion de recurrencias.",
    "cuandoConsultarEn": "Acute pancreatitis is a medical emergency that always requires hospitalization. Go to the emergency room if you have sudden-onset severe abdominal pain radiating to the back, especially after a large meal or alcohol consumption, nausea and vomiting that do not subside, fever with intense abdominal pain, rigid and very tender abdomen, signs of dehydration (dry mouth, dizziness, tachycardia), or yellowing of the skin. If you have already had a pancreatitis episode, consult your gastroenterologist about recurrence prevention."
  }
]`);

// -- Helper functions --------------------------------------------------------

export function buscarGastroenterologia(termino: string): GastroenterologiaEntry[] {
  const t = termino.toLowerCase();
  return GASTROENTEROLOGIA_ENTRIES.filter(
    (e) =>
      e.nombreEs.toLowerCase().includes(t) ||
      e.nombreEn.toLowerCase().includes(t) ||
      e.descripcionEs.toLowerCase().includes(t) ||
      e.descripcionEn.toLowerCase().includes(t)
  );
}

export function getGastroenterologiaById(id: string): GastroenterologiaEntry | undefined {
  return GASTROENTEROLOGIA_ENTRIES.find((e) => e.id === id);
}

export function getGastroenterologiaPorCategoria(categoria: string): GastroenterologiaEntry[] {
  const c = categoria.toLowerCase();
  return GASTROENTEROLOGIA_ENTRIES.filter(
    (e) =>
      e.categoriaEs.toLowerCase().includes(c) ||
      e.categoriaEn.toLowerCase().includes(c)
  );
}
