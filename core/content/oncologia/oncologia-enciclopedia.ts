// =============================================================================
// SOMA Oncologia Enciclopedia — Spanish-First Bilingual
// Detailed Oncology Patient Education Content
// =============================================================================
// ARCHITECTURE: JSON.parse() wrapper prevents TS2590 "expression too complex"
// =============================================================================

export interface OncologiaEntry {
  id: string;
  nombreEs: string;
  nombreEn: string;
  descripcionEs: string;
  descripcionEn: string;
  categoriaEs: string;
  categoriaEn: string;
  sintomasEs: string[];
  sintomasEn: string[];
  factoresRiesgoEs: string[];
  factoresRiesgoEn: string[];
  diagnosticoEs: string;
  diagnosticoEn: string;
  tratamientoEs: string;
  tratamientoEn: string;
  prevencionEs: string;
  prevencionEn: string;
  estadificacionEs: string;
  estadificacionEn: string;
  cuandoConsultarEs: string;
  cuandoConsultarEn: string;
}

export const ONCOLOGIA_ENTRIES: OncologiaEntry[] = JSON.parse(`[
  {
    "id": "cancer-mama",
    "nombreEs": "Cancer de Mama",
    "nombreEn": "Breast Cancer",
    "categoriaEs": "mama",
    "categoriaEn": "breast",
    "descripcionEs": "El cancer de mama es el tumor maligno mas frecuente en mujeres a nivel mundial, originado en las celulas del tejido mamario, generalmente en los conductos lactiferos (carcinoma ductal) o en los lobulillos productores de leche (carcinoma lobulillar). Se estima que 1 de cada 8 mujeres desarrollara cancer de mama a lo largo de su vida, y la deteccion temprana mediante mamografia ha demostrado reducir la mortalidad en un 20-30%. Aunque es mucho menos frecuente, los hombres tambien pueden desarrollar cancer de mama, representando aproximadamente el 1% de todos los casos. Los avances en terapias dirigidas, inmunoterapia y medicina de precision han transformado significativamente el pronostico, logrando tasas de supervivencia a 5 anos superiores al 90% en estadios tempranos.",
    "descripcionEn": "Breast cancer is the most common malignant tumor in women worldwide, originating in breast tissue cells, usually in the milk ducts (ductal carcinoma) or in the milk-producing lobules (lobular carcinoma). It is estimated that 1 in 8 women will develop breast cancer in their lifetime, and early detection through mammography has been shown to reduce mortality by 20-30%. Although much less common, men can also develop breast cancer, accounting for approximately 1% of all cases. Advances in targeted therapies, immunotherapy, and precision medicine have significantly transformed the prognosis, achieving 5-year survival rates above 90% in early stages.",
    "sintomasEs": [
      "Masa o bulto palpable en la mama, generalmente indoloro y de bordes irregulares",
      "Cambios en el tamano, forma o contorno de la mama",
      "Retraccion o inversion del pezon de reciente aparicion",
      "Secrecion sanguinolenta o transparente por el pezon",
      "Cambios en la piel de la mama: enrojecimiento, descamacion, hoyuelos (piel de naranja)",
      "Engrosamiento o hinchazon de parte de la mama",
      "Ganglios linfaticos inflamados en la axila o cerca de la clavicula",
      "Dolor mamario persistente y localizado (menos comun como primer sintoma)"
    ],
    "sintomasEn": [
      "Palpable lump or mass in the breast, usually painless with irregular borders",
      "Changes in breast size, shape, or contour",
      "Recent onset nipple retraction or inversion",
      "Bloody or clear nipple discharge",
      "Breast skin changes: redness, scaling, dimpling (peau d'orange)",
      "Thickening or swelling of part of the breast",
      "Swollen lymph nodes in the armpit or near the collarbone",
      "Persistent localized breast pain (less common as first symptom)"
    ],
    "factoresRiesgoEs": [
      "Sexo femenino (principal factor de riesgo)",
      "Edad avanzada (riesgo aumenta significativamente despues de los 50 anos)",
      "Mutaciones geneticas BRCA1 y BRCA2 (riesgo del 45-72%)",
      "Historia familiar de cancer de mama en primer grado",
      "Antecedente personal de cancer de mama o lesiones premalignas",
      "Menarquia temprana (antes de los 12 anos) o menopausia tardia (despues de los 55)",
      "Nuliparidad o primer embarazo despues de los 30 anos",
      "Terapia hormonal sustitutiva prolongada (estrogeno + progesterona)",
      "Exposicion a radiacion toracica en edad joven",
      "Obesidad postmenopausica y consumo excesivo de alcohol",
      "Densidad mamaria elevada en la mamografia"
    ],
    "factoresRiesgoEn": [
      "Female sex (primary risk factor)",
      "Advanced age (risk increases significantly after age 50)",
      "BRCA1 and BRCA2 genetic mutations (45-72% risk)",
      "First-degree family history of breast cancer",
      "Personal history of breast cancer or premalignant lesions",
      "Early menarche (before age 12) or late menopause (after age 55)",
      "Nulliparity or first pregnancy after age 30",
      "Prolonged hormone replacement therapy (estrogen + progesterone)",
      "Chest radiation exposure at a young age",
      "Postmenopausal obesity and excessive alcohol consumption",
      "High mammographic breast density"
    ],
    "diagnosticoEs": "El diagnostico del cancer de mama comienza con la mamografia de deteccion (recomendada anualmente o bianualmente a partir de los 40-50 anos segun la guia). La ecografia mamaria complementa la mamografia, especialmente en mamas densas. La resonancia magnetica (RM) mamaria se reserva para pacientes de alto riesgo o para evaluacion de extension. Ante una lesion sospechosa, se realiza biopsia con aguja gruesa (core biopsy) guiada por imagen para confirmar el diagnostico histologico. El informe patologico debe incluir tipo histologico, grado (Nottingham), estado de receptores hormonales (estrogeno y progesterona), HER2, y Ki-67. Las pruebas genomicas como Oncotype DX o MammaPrint ayudan a determinar el beneficio de la quimioterapia en tumores con receptores hormonales positivos. La estadificacion completa incluye tomografia computarizada, gammagrafia osea y PET-CT segun el estadio clinico.",
    "diagnosticoEn": "Breast cancer diagnosis begins with screening mammography (recommended annually or biannually starting at age 40-50 depending on guidelines). Breast ultrasound complements mammography, especially in dense breasts. Breast MRI is reserved for high-risk patients or for extension evaluation. When a suspicious lesion is found, image-guided core needle biopsy is performed to confirm histological diagnosis. The pathology report must include histological type, grade (Nottingham), hormone receptor status (estrogen and progesterone), HER2, and Ki-67. Genomic tests such as Oncotype DX or MammaPrint help determine the benefit of chemotherapy in hormone receptor-positive tumors. Complete staging includes CT scan, bone scintigraphy, and PET-CT depending on clinical stage.",
    "tratamientoEs": "El tratamiento del cancer de mama es multimodal y personalizado. La cirugia es la piedra angular: puede ser conservadora (lumpectomia con radioterapia adyuvante) o mastectomia total, con biopsia de ganglio centinela o vaciamiento axilar segun la afectacion ganglionar. La quimioterapia neoadyuvante (antes de cirugia) se utiliza en tumores localmente avanzados o HER2+/triple negativo para reducir el tumor. La quimioterapia adyuvante (despues de cirugia) se basa en regimenes como AC-T (doxorrubicina, ciclofosfamida, seguido de taxanos). La terapia hormonal (tamoxifeno en premenopausicas, inhibidores de aromatasa en postmenopausicas) se administra durante 5-10 anos en tumores con receptores hormonales positivos. Trastuzumab (Herceptin) y pertuzumab son anticuerpos monoclonales esenciales para tumores HER2 positivos. La inmunoterapia con pembrolizumab se ha incorporado al tratamiento del cancer de mama triple negativo. La radioterapia postoperatoria reduce la recurrencia local. Los inhibidores de CDK4/6 (palbociclib, ribociclib) han revolucionado el tratamiento de la enfermedad metastasica con receptores hormonales positivos.",
    "tratamientoEn": "Breast cancer treatment is multimodal and personalized. Surgery is the cornerstone: it can be breast-conserving (lumpectomy with adjuvant radiotherapy) or total mastectomy, with sentinel node biopsy or axillary dissection depending on nodal involvement. Neoadjuvant chemotherapy (before surgery) is used in locally advanced or HER2+/triple-negative tumors to shrink the tumor. Adjuvant chemotherapy (after surgery) is based on regimens such as AC-T (doxorubicin, cyclophosphamide, followed by taxanes). Hormonal therapy (tamoxifen in premenopausal, aromatase inhibitors in postmenopausal women) is given for 5-10 years in hormone receptor-positive tumors. Trastuzumab (Herceptin) and pertuzumab are essential monoclonal antibodies for HER2-positive tumors. Immunotherapy with pembrolizumab has been incorporated into triple-negative breast cancer treatment. Postoperative radiotherapy reduces local recurrence. CDK4/6 inhibitors (palbociclib, ribociclib) have revolutionized the treatment of hormone receptor-positive metastatic disease.",
    "prevencionEs": "La prevencion primaria incluye mantener un peso saludable, realizar actividad fisica regular (al menos 150 minutos semanales de ejercicio moderado), limitar el consumo de alcohol a menos de una bebida diaria y evitar la terapia hormonal sustitutiva prolongada. La lactancia materna tiene un efecto protector. La quimioprevencion con tamoxifeno o raloxifeno se puede ofrecer a mujeres de alto riesgo. En portadoras de mutaciones BRCA1/BRCA2, la mastectomia profilactica bilateral reduce el riesgo en mas del 90% y la ooforectomia profilactica tambien reduce significativamente el riesgo. La prevencion secundaria mediante mamografia de deteccion regular es la estrategia mas efectiva para reducir la mortalidad, detectando tumores en estadios tempranos y curables.",
    "prevencionEn": "Primary prevention includes maintaining a healthy weight, regular physical activity (at least 150 minutes weekly of moderate exercise), limiting alcohol consumption to less than one drink per day, and avoiding prolonged hormone replacement therapy. Breastfeeding has a protective effect. Chemoprevention with tamoxifen or raloxifene can be offered to high-risk women. In BRCA1/BRCA2 mutation carriers, bilateral prophylactic mastectomy reduces risk by more than 90%, and prophylactic oophorectomy also significantly reduces risk. Secondary prevention through regular screening mammography is the most effective strategy for reducing mortality, detecting tumors at early and curable stages.",
    "estadificacionEs": "El cancer de mama se estadifica segun el sistema TNM (AJCC 8a edicion). Estadio 0: carcinoma in situ (DCIS o LCIS), no invasivo. Estadio I: tumor de hasta 2 cm sin afectacion ganglionar significativa (IA: sin ganglios; IB: micrometastasis en ganglios). Estadio II: tumor de 2-5 cm con o sin afectacion de 1-3 ganglios axilares (IIA y IIB). Estadio III (localmente avanzado): tumor mayor de 5 cm con ganglios positivos, afectacion de pared toracica o piel, o afectacion de 10 o mas ganglios (IIIA, IIIB, IIIC). Estadio IV: metastasis a distancia (hueso, pulmon, higado, cerebro). La estadificacion pronostica actual tambien incorpora grado tumoral, estado de receptores hormonales, HER2 y resultados genomicos. La supervivencia a 5 anos varia desde >99% en estadio I hasta aproximadamente 30% en estadio IV.",
    "estadificacionEn": "Breast cancer is staged according to the TNM system (AJCC 8th edition). Stage 0: carcinoma in situ (DCIS or LCIS), non-invasive. Stage I: tumor up to 2 cm without significant nodal involvement (IA: no nodes; IB: nodal micrometastases). Stage II: tumor 2-5 cm with or without involvement of 1-3 axillary nodes (IIA and IIB). Stage III (locally advanced): tumor larger than 5 cm with positive nodes, chest wall or skin involvement, or involvement of 10 or more nodes (IIIA, IIIB, IIIC). Stage IV: distant metastasis (bone, lung, liver, brain). Current prognostic staging also incorporates tumor grade, hormone receptor status, HER2, and genomic results. Five-year survival ranges from >99% in stage I to approximately 30% in stage IV.",
    "cuandoConsultarEs": "Consulte a un medico de inmediato si detecta un bulto o masa nueva en la mama, cambios en la forma o tamano de la mama, secrecion por el pezon (especialmente si es sanguinolenta), cambios en la piel mamaria como enrojecimiento o textura de naranja, retraccion del pezon de reciente aparicion, o ganglios inflamados en la axila. Es fundamental mantener las mamografias de deteccion programadas y no posponer la evaluacion de cualquier hallazgo sospechoso. Las mujeres con antecedentes familiares importantes deben consultar sobre pruebas geneticas y planes de vigilancia intensiva.",
    "cuandoConsultarEn": "See a doctor immediately if you detect a new lump or mass in the breast, changes in breast shape or size, nipple discharge (especially if bloody), breast skin changes such as redness or orange-peel texture, recent onset nipple retraction, or swollen lymph nodes in the armpit. It is essential to maintain scheduled screening mammograms and not postpone evaluation of any suspicious findings. Women with significant family history should inquire about genetic testing and intensive surveillance plans."
  },
  {
    "id": "cancer-colon",
    "nombreEs": "Cancer Colorrectal",
    "nombreEn": "Colorectal Cancer",
    "categoriaEs": "gastrointestinal",
    "categoriaEn": "gastrointestinal",
    "descripcionEs": "El cancer colorrectal es el tercer cancer mas frecuente a nivel mundial y la segunda causa de muerte por cancer. Se origina en el revestimiento interno del colon o del recto, generalmente a partir de polipos adenomatosos que progresan lentamente durante 10-15 anos a traves de la secuencia adenoma-carcinoma. La mayoria de los casos son esporadicos (75%), pero existe un componente hereditario importante en sindromes como Lynch (HNPCC) y poliposis adenomatosa familiar (PAF). La colonoscopia de deteccion ha demostrado ser altamente efectiva para prevenir el cancer colorrectal al permitir la deteccion y extirpacion de polipos preneoplasicos. Las tasas de supervivencia a 5 anos superan el 90% cuando se diagnostica en estadio localizado.",
    "descripcionEn": "Colorectal cancer is the third most common cancer worldwide and the second leading cause of cancer death. It originates in the inner lining of the colon or rectum, usually from adenomatous polyps that slowly progress over 10-15 years through the adenoma-carcinoma sequence. Most cases are sporadic (75%), but there is an important hereditary component in syndromes such as Lynch (HNPCC) and familial adenomatous polyposis (FAP). Screening colonoscopy has proven highly effective in preventing colorectal cancer by allowing detection and removal of preneoplastic polyps. Five-year survival rates exceed 90% when diagnosed at a localized stage.",
    "sintomasEs": [
      "Cambio persistente en los habitos intestinales (diarrea, estrenimiento o alternancia)",
      "Sangre en las heces (hematoquecia) o heces oscuras (melena)",
      "Sangrado rectal",
      "Dolor abdominal tipo colico persistente o malestar",
      "Sensacion de evacuacion incompleta (tenesmo)",
      "Perdida de peso involuntaria sin causa aparente",
      "Fatiga y debilidad por anemia cronica (especialmente tumores del lado derecho)",
      "Disminucion del calibre de las heces (heces acintadas)",
      "Distension abdominal y en casos avanzados, obstruccion intestinal"
    ],
    "sintomasEn": [
      "Persistent change in bowel habits (diarrhea, constipation, or alternating)",
      "Blood in stool (hematochezia) or dark stools (melena)",
      "Rectal bleeding",
      "Persistent crampy abdominal pain or discomfort",
      "Feeling of incomplete evacuation (tenesmus)",
      "Unexplained unintentional weight loss",
      "Fatigue and weakness from chronic anemia (especially right-sided tumors)",
      "Narrowing of stool caliber (ribbon-like stools)",
      "Abdominal distension and in advanced cases, bowel obstruction"
    ],
    "factoresRiesgoEs": [
      "Edad mayor de 45 anos (riesgo aumenta progresivamente)",
      "Historia personal de polipos adenomatosos o cancer colorrectal previo",
      "Enfermedad inflamatoria intestinal (colitis ulcerosa o enfermedad de Crohn de larga evolucion)",
      "Sindromes hereditarios: sindrome de Lynch (HNPCC), poliposis adenomatosa familiar (PAF)",
      "Historia familiar de cancer colorrectal en familiares de primer grado",
      "Dieta rica en carnes rojas y procesadas",
      "Bajo consumo de fibra, frutas y verduras",
      "Obesidad y sedentarismo",
      "Tabaquismo y consumo excesivo de alcohol",
      "Diabetes mellitus tipo 2"
    ],
    "factoresRiesgoEn": [
      "Age over 45 (risk progressively increases)",
      "Personal history of adenomatous polyps or prior colorectal cancer",
      "Inflammatory bowel disease (ulcerative colitis or long-standing Crohn's disease)",
      "Hereditary syndromes: Lynch syndrome (HNPCC), familial adenomatous polyposis (FAP)",
      "Family history of colorectal cancer in first-degree relatives",
      "Diet rich in red and processed meats",
      "Low fiber, fruit, and vegetable intake",
      "Obesity and sedentary lifestyle",
      "Smoking and excessive alcohol consumption",
      "Type 2 diabetes mellitus"
    ],
    "diagnosticoEs": "La colonoscopia es el estandar de oro para diagnostico y deteccion del cancer colorrectal, permitiendo visualizacion directa, biopsia y polipectomia. Las pruebas de deteccion no invasivas incluyen la prueba de sangre oculta en heces inmunoquimica (FIT) anual y la prueba de ADN en heces multidirigida (Cologuard) cada 3 anos. La colonografia por TC (colonoscopia virtual) es una alternativa de imagen. Tras el diagnostico histopatologico, la estadificacion requiere TC de torax, abdomen y pelvis con contraste. El PET-CT se utiliza en casos seleccionados. El antigeno carcinoembrionario (ACE/CEA) sirve como marcador de seguimiento, no de deteccion. El estudio de inestabilidad de microsatelites (MSI) y pruebas de mutaciones (KRAS, NRAS, BRAF) es esencial para guiar las terapias dirigidas. La ecografia endorrectal y la RM pelvica son fundamentales para la estadificacion local del cancer de recto.",
    "diagnosticoEn": "Colonoscopy is the gold standard for diagnosis and detection of colorectal cancer, allowing direct visualization, biopsy, and polypectomy. Non-invasive screening tests include annual immunochemical fecal occult blood test (FIT) and multi-target stool DNA test (Cologuard) every 3 years. CT colonography (virtual colonoscopy) is an imaging alternative. After histopathological diagnosis, staging requires contrast-enhanced CT of chest, abdomen, and pelvis. PET-CT is used in selected cases. Carcinoembryonic antigen (CEA) serves as a follow-up marker, not for screening. Microsatellite instability (MSI) testing and mutation analysis (KRAS, NRAS, BRAF) are essential for guiding targeted therapies. Endorectal ultrasound and pelvic MRI are fundamental for local staging of rectal cancer.",
    "tratamientoEs": "El tratamiento depende del estadio y la localizacion del tumor. En polipos con cancer in situ, la polipectomia endoscopica puede ser curativa. La cirugia (colectomia segmentaria con anastomosis y linfadenectomia regional con al menos 12 ganglios) es el tratamiento principal para enfermedad localizada e invasiva. La quimioterapia adyuvante con FOLFOX (5-fluorouracilo, leucovorina, oxaliplatino) durante 3-6 meses se recomienda en estadio III y en estadio II de alto riesgo. Para el cancer de recto localmente avanzado, la quimiorradioterapia neoadyuvante (5-FU o capecitabina con radioterapia) seguida de cirugia con escision mesorrectal total (EMT) es el estandar. La terapia neoadyuvante total (TNT) es un enfoque creciente para cancer rectal. En enfermedad metastasica, la quimioterapia con FOLFOX o FOLFIRI mas agentes biologicos (bevacizumab, cetuximab o panitumumab segun estado de RAS) es la base del tratamiento. La inmunoterapia con pembrolizumab es primera linea en tumores con alta inestabilidad de microsatelites (MSI-H).",
    "tratamientoEn": "Treatment depends on stage and tumor location. In polyps with carcinoma in situ, endoscopic polypectomy can be curative. Surgery (segmental colectomy with anastomosis and regional lymphadenectomy with at least 12 nodes) is the primary treatment for localized invasive disease. Adjuvant chemotherapy with FOLFOX (5-fluorouracil, leucovorin, oxaliplatin) for 3-6 months is recommended for stage III and high-risk stage II. For locally advanced rectal cancer, neoadjuvant chemoradiotherapy (5-FU or capecitabine with radiotherapy) followed by total mesorectal excision (TME) surgery is the standard. Total neoadjuvant therapy (TNT) is an emerging approach for rectal cancer. In metastatic disease, chemotherapy with FOLFOX or FOLFIRI plus biologic agents (bevacizumab, cetuximab, or panitumumab depending on RAS status) is the backbone of treatment. Immunotherapy with pembrolizumab is first line in tumors with high microsatellite instability (MSI-H).",
    "prevencionEs": "La prevencion del cancer colorrectal es altamente efectiva. La colonoscopia de deteccion a partir de los 45 anos (antes si hay factores de riesgo) con polipectomia de polipos adenomatosos es la medida mas eficaz. La dieta rica en fibra, frutas, verduras y cereales integrales reduce el riesgo. Se recomienda limitar el consumo de carnes rojas a menos de 500 gramos semanales y evitar las carnes procesadas. El ejercicio regular (30 minutos diarios), mantener un peso saludable y evitar el tabaco y el exceso de alcohol son fundamentales. El acido acetilsalicilico (aspirina) en dosis bajas puede tener efecto quimiopreventivo en personas de riesgo moderado. En sindromes hereditarios como PAF, la colectomia profilactica puede ser necesaria.",
    "prevencionEn": "Colorectal cancer prevention is highly effective. Screening colonoscopy starting at age 45 (earlier if risk factors are present) with adenomatous polyp polypectomy is the most effective measure. A diet rich in fiber, fruits, vegetables, and whole grains reduces risk. Limiting red meat consumption to less than 500 grams weekly and avoiding processed meats is recommended. Regular exercise (30 minutes daily), maintaining a healthy weight, and avoiding tobacco and excessive alcohol are fundamental. Low-dose aspirin may have a chemopreventive effect in moderate-risk individuals. In hereditary syndromes like FAP, prophylactic colectomy may be necessary.",
    "estadificacionEs": "El cancer colorrectal se estadifica segun el sistema TNM (AJCC 8a edicion). Estadio 0: carcinoma in situ limitado a la mucosa. Estadio I: invasion a submucosa (T1) o muscular propia (T2), sin ganglios. Estadio II: invasion a traves de la pared del colon — IIA (T3, serosa intacta), IIB (T4a, penetra serosa), IIC (T4b, invade organos adyacentes). Estadio III: metastasis a ganglios linfaticos regionales — IIIA (T1-T2 con 1-3 ganglios), IIIB (T3-T4a con 1-3 ganglios o T1-T2 con 4-6 ganglios), IIIC (T4b o 7+ ganglios). Estadio IV: metastasis a distancia — IVA (un organo a distancia), IVB (mas de un organo), IVC (peritoneo). La supervivencia a 5 anos: estadio I >92%, estadio II 63-87%, estadio III 53-69%, estadio IV aproximadamente 14%.",
    "estadificacionEn": "Colorectal cancer is staged according to the TNM system (AJCC 8th edition). Stage 0: carcinoma in situ limited to mucosa. Stage I: invasion to submucosa (T1) or muscularis propria (T2), no nodes. Stage II: invasion through colon wall — IIA (T3, serosa intact), IIB (T4a, penetrates serosa), IIC (T4b, invades adjacent organs). Stage III: regional lymph node metastasis — IIIA (T1-T2 with 1-3 nodes), IIIB (T3-T4a with 1-3 nodes or T1-T2 with 4-6 nodes), IIIC (T4b or 7+ nodes). Stage IV: distant metastasis — IVA (one distant organ), IVB (more than one organ), IVC (peritoneum). Five-year survival: stage I >92%, stage II 63-87%, stage III 53-69%, stage IV approximately 14%.",
    "cuandoConsultarEs": "Consulte a un medico si presenta sangre en las heces o sangrado rectal persistente, cambio en los habitos intestinales que dure mas de dos semanas, dolor abdominal persistente sin causa clara, perdida de peso involuntaria, fatiga inexplicable o si tiene antecedentes familiares de cancer colorrectal. No atribuya el sangrado rectal simplemente a hemorroides sin una evaluacion medica adecuada. Si tiene 45 anos o mas y no se ha realizado una colonoscopia de deteccion, programe una cita lo antes posible.",
    "cuandoConsultarEn": "See a doctor if you have blood in your stool or persistent rectal bleeding, a change in bowel habits lasting more than two weeks, persistent abdominal pain without clear cause, unintentional weight loss, unexplained fatigue, or if you have a family history of colorectal cancer. Do not attribute rectal bleeding simply to hemorrhoids without proper medical evaluation. If you are 45 or older and have not had a screening colonoscopy, schedule an appointment as soon as possible."
  },
  {
    "id": "cancer-prostata-onco",
    "nombreEs": "Cancer de Prostata (Oncologia)",
    "nombreEn": "Prostate Cancer (Oncology)",
    "categoriaEs": "genitourinario",
    "categoriaEn": "genitourinary",
    "descripcionEs": "El cancer de prostata es el cancer mas frecuente en hombres (excluyendo el cancer de piel no melanoma) y la segunda causa de muerte por cancer en varones. Se origina en las celulas glandulares de la prostata y se caracteriza por un espectro clinico muy amplio: desde tumores indolentes de bajo grado que pueden vigilarse activamente, hasta canceres agresivos de alto grado que metastatizan rapidamente, especialmente al hueso. El antigeno prostatico especifico (PSA) revoluciono la deteccion, aunque su uso como tamizaje universal es debatido por el riesgo de sobrediagnostico y sobretratamiento. La mayoria de los hombres diagnosticados en estadios tempranos tienen un pronostico excelente, con tasas de supervivencia a 5 anos cercanas al 100% para enfermedad localizada.",
    "descripcionEn": "Prostate cancer is the most common cancer in men (excluding non-melanoma skin cancer) and the second leading cause of cancer death in males. It originates in the glandular cells of the prostate and is characterized by a very broad clinical spectrum: from indolent low-grade tumors that can be actively monitored to aggressive high-grade cancers that rapidly metastasize, especially to bone. Prostate-specific antigen (PSA) revolutionized detection, although its use as universal screening is debated due to the risk of overdiagnosis and overtreatment. Most men diagnosed at early stages have an excellent prognosis, with 5-year survival rates approaching 100% for localized disease.",
    "sintomasEs": [
      "En estadios tempranos, generalmente asintomatico (detectado por PSA elevado)",
      "Dificultad para iniciar o mantener el chorro urinario",
      "Aumento de la frecuencia urinaria, especialmente nocturna (nicturia)",
      "Urgencia urinaria o sensacion de vaciamiento incompleto",
      "Hematuria (sangre en la orina)",
      "Disfuncion erectil de reciente aparicion",
      "Dolor oseo persistente (especialmente en columna lumbar, pelvis o caderas) en enfermedad avanzada",
      "Perdida de peso y fatiga en enfermedad metastasica"
    ],
    "sintomasEn": [
      "In early stages, usually asymptomatic (detected by elevated PSA)",
      "Difficulty starting or maintaining urine stream",
      "Increased urinary frequency, especially at night (nocturia)",
      "Urinary urgency or feeling of incomplete emptying",
      "Hematuria (blood in urine)",
      "Recent onset erectile dysfunction",
      "Persistent bone pain (especially in lumbar spine, pelvis, or hips) in advanced disease",
      "Weight loss and fatigue in metastatic disease"
    ],
    "factoresRiesgoEs": [
      "Edad avanzada (riesgo aumenta marcadamente despues de los 50 anos; raro antes de los 40)",
      "Raza afroamericana (mayor incidencia y mortalidad)",
      "Historia familiar: padre o hermano con cancer de prostata duplica el riesgo",
      "Mutaciones geneticas: BRCA2, HOXB13, genes de reparacion del ADN",
      "Dieta rica en grasas saturadas y carnes rojas",
      "Obesidad (asociada a canceres mas agresivos)",
      "Exposicion al agente naranja (veteranos)",
      "Niveles elevados de testosterona o uso de esteroides anabolicos"
    ],
    "factoresRiesgoEn": [
      "Advanced age (risk markedly increases after age 50; rare before age 40)",
      "African American race (higher incidence and mortality)",
      "Family history: father or brother with prostate cancer doubles risk",
      "Genetic mutations: BRCA2, HOXB13, DNA repair genes",
      "Diet rich in saturated fats and red meats",
      "Obesity (associated with more aggressive cancers)",
      "Agent Orange exposure (veterans)",
      "Elevated testosterone levels or anabolic steroid use"
    ],
    "diagnosticoEs": "El diagnostico comienza con el PSA serico y el tacto rectal (TR). Un PSA >4 ng/mL o un TR anormal justifican evaluacion adicional. La resonancia magnetica multiparametrica de prostata (mpMRI) con clasificacion PI-RADS es ahora recomendada antes de la biopsia para localizar lesiones sospechosas. La biopsia de prostata transrectal guiada por ecografia (TRUS) o la biopsia de fusion RM-ecografia (mas precisa) confirman el diagnostico. El puntaje de Gleason (ahora expresado como Grupo de Grado ISUP 1-5) determina la agresividad tumoral. Los estudios de extension incluyen gammagrafia osea (si PSA >20 o Gleason alto), TC o RM de pelvis, y en casos seleccionados PET-PSMA. Biomarcadores adicionales como el PHI, 4Kscore y PCA3 ayudan a refinar la decision de biopsia.",
    "diagnosticoEn": "Diagnosis begins with serum PSA and digital rectal exam (DRE). A PSA >4 ng/mL or abnormal DRE warrants further evaluation. Multiparametric prostate MRI (mpMRI) with PI-RADS classification is now recommended before biopsy to localize suspicious lesions. Transrectal ultrasound-guided prostate biopsy (TRUS) or MRI-ultrasound fusion biopsy (more precise) confirms the diagnosis. Gleason score (now expressed as ISUP Grade Group 1-5) determines tumor aggressiveness. Staging studies include bone scintigraphy (if PSA >20 or high Gleason), pelvic CT or MRI, and in selected cases PSMA-PET. Additional biomarkers such as PHI, 4Kscore, and PCA3 help refine the biopsy decision.",
    "tratamientoEs": "El tratamiento se individualiza segun el riesgo. Para cancer de bajo riesgo (Gleason 3+3, PSA <10, estadio T1-T2a), la vigilancia activa es el estandar, con PSA y biopsias periodicas, evitando sobretratamiento. Para riesgo intermedio y alto, la prostatectomia radical (abierta, laparoscopica o robotica) o la radioterapia (externa conformacional/IMRT con o sin braquiterapia) son opciones curativas. La terapia de deprivacion androgenica (TDA) con agonistas o antagonistas de GnRH se combina con radioterapia en riesgo alto durante 18-36 meses. En enfermedad metastasica hormonosensible, se combina TDA con nuevos agentes hormonales (abiraterona, enzalutamida, apalutamida) o docetaxel. En cancer de prostata resistente a castracion (CPRC), las opciones incluyen enzalutamida, abiraterona, docetaxel, cabazitaxel, inhibidores de PARP (olaparib en mutaciones BRCA), Radio-223 para metastasis oseas, y terapias con lutecio-177-PSMA.",
    "tratamientoEn": "Treatment is individualized based on risk. For low-risk cancer (Gleason 3+3, PSA <10, stage T1-T2a), active surveillance is the standard, with periodic PSA and biopsies, avoiding overtreatment. For intermediate and high risk, radical prostatectomy (open, laparoscopic, or robotic) or radiation therapy (external beam conformal/IMRT with or without brachytherapy) are curative options. Androgen deprivation therapy (ADT) with GnRH agonists or antagonists is combined with radiation for high-risk disease for 18-36 months. In metastatic hormone-sensitive disease, ADT is combined with novel hormonal agents (abiraterone, enzalutamide, apalutamide) or docetaxel. In castration-resistant prostate cancer (CRPC), options include enzalutamide, abiraterone, docetaxel, cabazitaxel, PARP inhibitors (olaparib for BRCA mutations), Radium-223 for bone metastases, and Lutetium-177-PSMA therapies.",
    "prevencionEs": "No existe una estrategia de prevencion primaria definitiva para el cancer de prostata. Se recomienda una dieta rica en frutas, verduras, tomate (licopeno) y baja en grasas saturadas. El ejercicio regular y mantener un peso saludable pueden reducir el riesgo de canceres agresivos. La decision de realizar tamizaje con PSA debe ser compartida entre medico y paciente, considerando beneficios (deteccion temprana) y riesgos (sobrediagnostico, biopsias innecesarias). Las guias actuales sugieren discutir el tamizaje a partir de los 50 anos en hombres de riesgo promedio, y a partir de los 40-45 anos en hombres de alto riesgo (afroamericanos o con historia familiar). La finasterida y dutasterida pueden reducir la incidencia, pero su uso preventivo no es ampliamente recomendado.",
    "prevencionEn": "There is no definitive primary prevention strategy for prostate cancer. A diet rich in fruits, vegetables, tomatoes (lycopene), and low in saturated fats is recommended. Regular exercise and maintaining a healthy weight may reduce the risk of aggressive cancers. The decision to perform PSA screening should be shared between physician and patient, weighing benefits (early detection) and risks (overdiagnosis, unnecessary biopsies). Current guidelines suggest discussing screening starting at age 50 for average-risk men, and at age 40-45 for high-risk men (African Americans or those with family history). Finasteride and dutasteride may reduce incidence, but their preventive use is not widely recommended.",
    "estadificacionEs": "El cancer de prostata se estadifica con el sistema TNM (AJCC 8a edicion). Estadio I: tumor no palpable o incidental, Gleason <=6, PSA <10 (T1-T2a, N0, M0). Estadio II: tumor confinado a la prostata — IIA (T1-T2, Gleason 3+4, PSA <20), IIB (T1-T2, Gleason 4+3, PSA <20), IIC (T1-T2, Gleason 4+4, PSA <20). Estadio III: extension extraprostatica — IIIA (PSA >=20), IIIB (T3-T4, extension a vesiculas seminales u organos adyacentes), IIIC (Gleason 9-10 cualquier T). Estadio IV: metastasis — IVA (ganglios pelvicos), IVB (metastasis a distancia, frecuentemente oseas). Supervivencia a 5 anos: estadios I-III practicamente 100%, estadio IV aproximadamente 32%.",
    "estadificacionEn": "Prostate cancer is staged with the TNM system (AJCC 8th edition). Stage I: non-palpable or incidental tumor, Gleason <=6, PSA <10 (T1-T2a, N0, M0). Stage II: organ-confined tumor — IIA (T1-T2, Gleason 3+4, PSA <20), IIB (T1-T2, Gleason 4+3, PSA <20), IIC (T1-T2, Gleason 4+4, PSA <20). Stage III: extraprostatic extension — IIIA (PSA >=20), IIIB (T3-T4, extension to seminal vesicles or adjacent organs), IIIC (Gleason 9-10 any T). Stage IV: metastasis — IVA (pelvic nodes), IVB (distant metastasis, frequently bone). Five-year survival: stages I-III virtually 100%, stage IV approximately 32%.",
    "cuandoConsultarEs": "Consulte a un medico si experimenta dificultad para orinar, aumento de la frecuencia urinaria especialmente de noche, sangre en la orina o el semen, dolor oseo persistente sin causa clara, o disfuncion erectil de reciente aparicion. Los hombres mayores de 50 anos (o de 40-45 si son afroamericanos o tienen historia familiar) deben discutir con su medico la conveniencia del tamizaje con PSA. Si ya ha sido diagnosticado, no falte a las citas de seguimiento y reporte inmediatamente cualquier dolor oseo nuevo o sintomas urinarios que empeoren.",
    "cuandoConsultarEn": "See a doctor if you experience difficulty urinating, increased urinary frequency especially at night, blood in urine or semen, persistent bone pain without clear cause, or recent onset erectile dysfunction. Men over 50 (or 40-45 if African American or with family history) should discuss the advisability of PSA screening with their physician. If already diagnosed, do not miss follow-up appointments and immediately report any new bone pain or worsening urinary symptoms."
  },
  {
    "id": "cancer-pulmon-onco",
    "nombreEs": "Cancer de Pulmon (Oncologia)",
    "nombreEn": "Lung Cancer (Oncology)",
    "categoriaEs": "toracico",
    "categoriaEn": "thoracic",
    "descripcionEs": "El cancer de pulmon es la principal causa de muerte por cancer en el mundo, tanto en hombres como en mujeres. Se clasifica en dos grandes grupos: cancer de pulmon de celulas no pequenas (CPCNP, 85% de los casos), que incluye adenocarcinoma, carcinoma escamoso y carcinoma de celulas grandes; y cancer de pulmon de celulas pequenas (CPCP, 15%), altamente agresivo y asociado casi exclusivamente al tabaquismo. El tabaco es responsable del 80-90% de todos los casos. La deteccion temprana mediante tomografia de baja dosis en poblaciones de alto riesgo ha demostrado reducir la mortalidad en un 20%. Los avances en terapias dirigidas (inhibidores de EGFR, ALK, ROS1) e inmunoterapia han transformado radicalmente el pronostico del cancer de pulmon avanzado en la ultima decada.",
    "descripcionEn": "Lung cancer is the leading cause of cancer death worldwide, in both men and women. It is classified into two major groups: non-small cell lung cancer (NSCLC, 85% of cases), which includes adenocarcinoma, squamous cell carcinoma, and large cell carcinoma; and small cell lung cancer (SCLC, 15%), which is highly aggressive and almost exclusively associated with smoking. Tobacco is responsible for 80-90% of all cases. Early detection through low-dose CT in high-risk populations has been shown to reduce mortality by 20%. Advances in targeted therapies (EGFR, ALK, ROS1 inhibitors) and immunotherapy have radically transformed the prognosis of advanced lung cancer in the last decade.",
    "sintomasEs": [
      "Tos persistente que empeora o cambia de caracter",
      "Hemoptisis (tos con sangre o esputo sanguinolento)",
      "Disnea (dificultad para respirar) progresiva",
      "Dolor toracico persistente que empeora con la respiracion profunda",
      "Ronquera persistente (por afectacion del nervio laringeo recurrente)",
      "Infecciones respiratorias recurrentes (neumonia, bronquitis)",
      "Perdida de peso involuntaria y falta de apetito",
      "Fatiga intensa y debilidad generalizada",
      "Sindrome de vena cava superior: hinchazon facial y de brazos",
      "Sindrome de Horner: ptosis, miosis y anhidrosis en tumores del apice (Pancoast)"
    ],
    "sintomasEn": [
      "Persistent cough that worsens or changes character",
      "Hemoptysis (coughing blood or bloody sputum)",
      "Progressive dyspnea (difficulty breathing)",
      "Persistent chest pain worsening with deep breathing",
      "Persistent hoarseness (from recurrent laryngeal nerve involvement)",
      "Recurrent respiratory infections (pneumonia, bronchitis)",
      "Unintentional weight loss and loss of appetite",
      "Severe fatigue and generalized weakness",
      "Superior vena cava syndrome: facial and arm swelling",
      "Horner syndrome: ptosis, miosis, and anhidrosis in apical tumors (Pancoast)"
    ],
    "factoresRiesgoEs": [
      "Tabaquismo activo (principal causa; riesgo proporcional a paquetes-ano)",
      "Exposicion al humo de tabaco ambiental (fumador pasivo)",
      "Exposicion al radon (segunda causa despues del tabaco)",
      "Exposicion ocupacional a asbesto, arsenico, cromo, niquel, berilio",
      "Antecedente de radioterapia toracica",
      "Contaminacion del aire ambiental",
      "Historia familiar de cancer de pulmon",
      "Enfermedad pulmonar preexistente (EPOC, fibrosis pulmonar)",
      "Mutaciones geneticas heredadas o adquiridas (EGFR, ALK en no fumadores)"
    ],
    "factoresRiesgoEn": [
      "Active smoking (main cause; risk proportional to pack-years)",
      "Environmental tobacco smoke exposure (passive smoking)",
      "Radon exposure (second cause after tobacco)",
      "Occupational exposure to asbestos, arsenic, chromium, nickel, beryllium",
      "History of thoracic radiation therapy",
      "Ambient air pollution",
      "Family history of lung cancer",
      "Pre-existing lung disease (COPD, pulmonary fibrosis)",
      "Inherited or acquired genetic mutations (EGFR, ALK in non-smokers)"
    ],
    "diagnosticoEs": "La sospecha clinica se inicia con radiografia de torax, pero la TC de torax con contraste es el estudio fundamental. La tomografia de baja dosis se utiliza como tamizaje anual en fumadores de alto riesgo (55-80 anos, >=20 paquetes-ano). El diagnostico histologico se obtiene mediante broncoscopia con biopsia, biopsia transbronquial con navegacion, biopsia percutanea guiada por TC, o mediastinoscopia. El PET-CT es esencial para la estadificacion. Las pruebas moleculares son obligatorias en adenocarcinoma avanzado: EGFR, ALK, ROS1, BRAF V600E, KRAS G12C, NTRK, MET, RET y expresion de PD-L1. La biopsia liquida (ADN tumoral circulante) es una alternativa cuando la biopsia tisular no es factible. La estadificacion mediastinica precisa (EBUS, mediastinoscopia) es critica para determinar la resecabilidad.",
    "diagnosticoEn": "Clinical suspicion starts with chest X-ray, but contrast-enhanced chest CT is the fundamental study. Low-dose CT is used for annual screening in high-risk smokers (55-80 years, >=20 pack-years). Histological diagnosis is obtained through bronchoscopy with biopsy, navigational transbronchial biopsy, CT-guided percutaneous biopsy, or mediastinoscopy. PET-CT is essential for staging. Molecular testing is mandatory in advanced adenocarcinoma: EGFR, ALK, ROS1, BRAF V600E, KRAS G12C, NTRK, MET, RET, and PD-L1 expression. Liquid biopsy (circulating tumor DNA) is an alternative when tissue biopsy is not feasible. Precise mediastinal staging (EBUS, mediastinoscopy) is critical for determining resectability.",
    "tratamientoEs": "En CPCNP estadios I-II, la cirugia (lobectomia preferida con linfadenectomia mediastinica) es el tratamiento curativo de eleccion. La quimioterapia adyuvante con cisplatino-base se recomienda en estadio II y algunos IB. El osimertinib adyuvante ha mostrado beneficio en tumores con mutacion EGFR resecados. En estadio III localmente avanzado irresecable, la quimiorradioterapia concurrente seguida de durvalumab (inmunoterapia de consolidacion) por 12 meses es el estandar. En estadio IV, el tratamiento depende del perfil molecular: inhibidores tirosina-quinasa para EGFR (osimertinib), ALK (alectinib, lorlatinib), ROS1 (crizotinib), KRAS G12C (sotorasib), entre otros. Sin mutacion tratable, la inmunoterapia (pembrolizumab solo o combinado con quimioterapia) es primera linea. En CPCP, la quimioterapia con cisplatino/carboplatino + etoposido mas inmunoterapia (atezolizumab o durvalumab) es el estandar. La radioterapia craneana profilactica se ofrece en CPCP con respuesta.",
    "tratamientoEn": "In NSCLC stages I-II, surgery (preferred lobectomy with mediastinal lymphadenectomy) is the curative treatment of choice. Adjuvant cisplatin-based chemotherapy is recommended for stage II and some IB. Adjuvant osimertinib has shown benefit in resected EGFR-mutant tumors. In stage III locally advanced unresectable disease, concurrent chemoradiotherapy followed by durvalumab (consolidation immunotherapy) for 12 months is the standard. In stage IV, treatment depends on molecular profile: tyrosine kinase inhibitors for EGFR (osimertinib), ALK (alectinib, lorlatinib), ROS1 (crizotinib), KRAS G12C (sotorasib), among others. Without a treatable mutation, immunotherapy (pembrolizumab alone or combined with chemotherapy) is first line. In SCLC, chemotherapy with cisplatin/carboplatin + etoposide plus immunotherapy (atezolizumab or durvalumab) is the standard. Prophylactic cranial irradiation is offered in SCLC with response.",
    "prevencionEs": "La prevencion primaria mas importante es no fumar y evitar la exposicion al humo de tabaco. La cesacion tabaquica a cualquier edad reduce significativamente el riesgo (despues de 10-15 anos de abstinencia, el riesgo disminuye 50-70%). La deteccion de radon en hogares y su mitigacion son medidas importantes. La proteccion ocupacional contra carcinogenos (asbesto, silice, metales pesados) con equipo adecuado es fundamental. El tamizaje con TC de baja dosis anual en fumadores de alto riesgo es la estrategia de prevencion secundaria mas efectiva, recomendada por las principales guias medicas. Una dieta rica en frutas y verduras puede tener un efecto protector modesto.",
    "prevencionEn": "The most important primary prevention is not smoking and avoiding tobacco smoke exposure. Smoking cessation at any age significantly reduces risk (after 10-15 years of abstinence, risk decreases 50-70%). Home radon detection and mitigation are important measures. Occupational protection against carcinogens (asbestos, silica, heavy metals) with proper equipment is fundamental. Annual low-dose CT screening in high-risk smokers is the most effective secondary prevention strategy, recommended by major medical guidelines. A diet rich in fruits and vegetables may have a modest protective effect.",
    "estadificacionEs": "El cancer de pulmon se estadifica con el sistema TNM (AJCC 8a edicion). Estadio IA: tumor <=3 cm sin invasion pleural ni bronquial principal (IA1 <=1cm, IA2 1-2cm, IA3 2-3cm). Estadio IB: tumor 3-4 cm. Estadio IIA: tumor 4-5 cm sin ganglios. Estadio IIB: tumor 5-7 cm o hasta 5 cm con ganglios peribronquiales/hiliares ipsilaterales. Estadio IIIA: tumor que invade estructuras mediastinicas o ganglios mediastinicos ipsilaterales. Estadio IIIB: ganglios mediastinicos contralaterales o supraclaviculares. Estadio IIIC: T3-T4 con ganglios N3. Estadio IVA: derrame pleural/pericardico maligno, nodulo pulmonar contralateral o metastasis unica a distancia. Estadio IVB: multiples metastasis a distancia. Supervivencia a 5 anos: IA 92%, IB 68%, II 53-60%, IIIA 36%, IIIB-C 13-26%, IV 0-10%.",
    "estadificacionEn": "Lung cancer is staged with the TNM system (AJCC 8th edition). Stage IA: tumor <=3 cm without pleural or main bronchial invasion (IA1 <=1cm, IA2 1-2cm, IA3 2-3cm). Stage IB: tumor 3-4 cm. Stage IIA: tumor 4-5 cm without nodes. Stage IIB: tumor 5-7 cm or up to 5 cm with ipsilateral peribronchial/hilar nodes. Stage IIIA: tumor invading mediastinal structures or ipsilateral mediastinal nodes. Stage IIIB: contralateral mediastinal or supraclavicular nodes. Stage IIIC: T3-T4 with N3 nodes. Stage IVA: malignant pleural/pericardial effusion, contralateral pulmonary nodule, or single distant metastasis. Stage IVB: multiple distant metastases. Five-year survival: IA 92%, IB 68%, II 53-60%, IIIA 36%, IIIB-C 13-26%, IV 0-10%.",
    "cuandoConsultarEs": "Consulte a un medico urgentemente si presenta tos persistente que no mejora en 2-3 semanas, tos con sangre (hemoptisis), dificultad para respirar progresiva, dolor toracico persistente, ronquera que no se resuelve, infecciones pulmonares repetitivas, o perdida de peso inexplicable. Los fumadores actuales o exfumadores con mas de 20 paquetes-ano entre 50 y 80 anos deben solicitar una TC de baja dosis de tamizaje. Busque atencion inmediata si tiene hinchazon subita de la cara y los brazos, o dolor oseo severo de nueva aparicion.",
    "cuandoConsultarEn": "See a doctor urgently if you have a persistent cough not improving in 2-3 weeks, coughing up blood (hemoptysis), progressive difficulty breathing, persistent chest pain, hoarseness that does not resolve, recurrent lung infections, or unexplained weight loss. Current smokers or former smokers with more than 20 pack-years between ages 50 and 80 should request a low-dose screening CT. Seek immediate attention if you have sudden facial and arm swelling or severe new-onset bone pain."
  },
  {
    "id": "cancer-cervicouterino",
    "nombreEs": "Cancer Cervicouterino",
    "nombreEn": "Cervical Cancer",
    "categoriaEs": "ginecologico",
    "categoriaEn": "gynecological",
    "descripcionEs": "El cancer cervicouterino se origina en las celulas del cuello uterino, en la zona de transformacion donde el epitelio escamoso se une al epitelio columnar. Esta causado casi exclusivamente por la infeccion persistente por el virus del papiloma humano (VPH), particularmente los genotipos de alto riesgo 16 y 18, responsables del 70% de los casos. Es el cuarto cancer mas frecuente en mujeres a nivel mundial y el cancer ginecologico mas comun en paises en desarrollo, donde la falta de programas de deteccion contribuye a un diagnostico tardio. Sin embargo, es uno de los canceres mas prevenibles: la vacunacion contra el VPH y la deteccion temprana mediante citologia (Papanicolaou) y pruebas de VPH han demostrado reducir drasticamente la incidencia y mortalidad. La OMS ha establecido la meta de eliminar el cancer cervicouterino como problema de salud publica.",
    "descripcionEn": "Cervical cancer originates in the cells of the cervix, at the transformation zone where squamous epithelium meets columnar epithelium. It is caused almost exclusively by persistent infection with human papillomavirus (HPV), particularly high-risk genotypes 16 and 18, responsible for 70% of cases. It is the fourth most common cancer in women worldwide and the most common gynecological cancer in developing countries, where lack of screening programs contributes to late diagnosis. However, it is one of the most preventable cancers: HPV vaccination and early detection through cytology (Pap smear) and HPV testing have been shown to drastically reduce incidence and mortality. The WHO has set the goal of eliminating cervical cancer as a public health problem.",
    "sintomasEs": [
      "Sangrado vaginal anormal: entre periodos, postcoital o postmenopausico",
      "Flujo vaginal acuoso, maloliente, a veces sanguinolento",
      "Dolor pelvico persistente no relacionado con la menstruacion",
      "Dolor durante las relaciones sexuales (dispareunia)",
      "En estadios avanzados: dolor lumbar o en piernas por compresion nerviosa",
      "Edema de una o ambas piernas (por obstruccion linfatica o venosa)",
      "Hematuria o sangrado rectal (por invasion a vejiga o recto)",
      "Perdida de peso y fatiga en enfermedad avanzada"
    ],
    "sintomasEn": [
      "Abnormal vaginal bleeding: between periods, postcoital, or postmenopausal",
      "Watery, foul-smelling vaginal discharge, sometimes bloody",
      "Persistent pelvic pain unrelated to menstruation",
      "Pain during sexual intercourse (dyspareunia)",
      "In advanced stages: lower back or leg pain from nerve compression",
      "Edema of one or both legs (from lymphatic or venous obstruction)",
      "Hematuria or rectal bleeding (from bladder or rectal invasion)",
      "Weight loss and fatigue in advanced disease"
    ],
    "factoresRiesgoEs": [
      "Infeccion persistente por VPH de alto riesgo (genotipos 16, 18, 31, 33, 45)",
      "Inicio temprano de relaciones sexuales (antes de los 18 anos)",
      "Multiples parejas sexuales (aumenta exposicion al VPH)",
      "Tabaquismo (carcinogenos del tabaco se concentran en el moco cervical)",
      "Inmunosupresion (VIH/SIDA, trasplante de organos)",
      "Uso prolongado de anticonceptivos orales (mas de 5 anos)",
      "Multiparidad (3 o mas embarazos a termino)",
      "No haberse realizado citologias de deteccion previas",
      "Coinfeccion con Chlamydia trachomatis o herpes genital"
    ],
    "factoresRiesgoEn": [
      "Persistent high-risk HPV infection (genotypes 16, 18, 31, 33, 45)",
      "Early onset of sexual activity (before age 18)",
      "Multiple sexual partners (increases HPV exposure)",
      "Smoking (tobacco carcinogens concentrate in cervical mucus)",
      "Immunosuppression (HIV/AIDS, organ transplant)",
      "Prolonged oral contraceptive use (more than 5 years)",
      "Multiparity (3 or more full-term pregnancies)",
      "Never having had screening cytology",
      "Coinfection with Chlamydia trachomatis or genital herpes"
    ],
    "diagnosticoEs": "La deteccion se realiza mediante citologia cervical (Papanicolaou) y/o prueba de VPH. Las guias actuales recomiendan co-testing (citologia + VPH) cada 5 anos o citologia sola cada 3 anos en mujeres de 25-65 anos, o prueba de VPH primaria cada 5 anos. Ante resultados anormales, se realiza colposcopia con biopsia dirigida. La biopsia confirma el diagnostico histologico: neoplasia intraepitelial cervical (NIC) grados I-III o carcinoma invasor. Para la estadificacion del cancer invasor, se utiliza el sistema FIGO (2018) que ahora permite estudios de imagen: RM pelvica (gold standard para evaluacion de extension local), TC de torax y abdomen, y PET-CT. La cistoscopia y rectoscopia se reservan para sospecha de invasion vesical o rectal. El carcinoma escamoso representa el 70% y el adenocarcinoma el 25% de los canceres cervicales invasores.",
    "diagnosticoEn": "Screening is performed through cervical cytology (Pap smear) and/or HPV testing. Current guidelines recommend co-testing (cytology + HPV) every 5 years or cytology alone every 3 years in women aged 25-65, or primary HPV testing every 5 years. With abnormal results, colposcopy with directed biopsy is performed. Biopsy confirms histological diagnosis: cervical intraepithelial neoplasia (CIN) grades I-III or invasive carcinoma. For invasive cancer staging, the FIGO system (2018) is used, now allowing imaging studies: pelvic MRI (gold standard for local extension evaluation), chest and abdominal CT, and PET-CT. Cystoscopy and rectoscopy are reserved for suspected bladder or rectal invasion. Squamous carcinoma represents 70% and adenocarcinoma 25% of invasive cervical cancers.",
    "tratamientoEs": "El tratamiento depende del estadio. Las lesiones preinvasoras (NIC 2-3) se tratan con procedimientos escisionales como el cono LEEP o conizacion con bisturi frio. En estadio IA1, la conizacion con margenes libres puede ser curativa en mujeres que desean preservar fertilidad. En estadios IA2-IB1 (tumores <=4 cm), la histerectomia radical con linfadenectomia pelvica es el tratamiento estandar; la traquelectomia radical es una opcion para preservar fertilidad en tumores pequenos. En estadios IB2-IVA (localmente avanzado), la quimiorradioterapia concurrente con cisplatino semanal (40 mg/m2) mas braquiterapia intracavitaria/intersticial es el estandar de tratamiento. Pembrolizumab asociado a quimiorradioterapia ha mostrado mejorar supervivencia en ensayos recientes (KEYNOTE-A18). En estadio IVB (metastasico), la quimioterapia paliativa con cisplatino/carboplatino + paclitaxel + bevacizumab es primera linea, y pembrolizumab se anade en tumores PD-L1 positivos o con alta carga mutacional.",
    "tratamientoEn": "Treatment depends on stage. Preinvasive lesions (CIN 2-3) are treated with excisional procedures such as LEEP cone or cold-knife conization. In stage IA1, conization with clear margins can be curative in women desiring fertility preservation. In stages IA2-IB1 (tumors <=4 cm), radical hysterectomy with pelvic lymphadenectomy is the standard treatment; radical trachelectomy is an option for fertility preservation in small tumors. In stages IB2-IVA (locally advanced), concurrent chemoradiotherapy with weekly cisplatin (40 mg/m2) plus intracavitary/interstitial brachytherapy is the treatment standard. Pembrolizumab combined with chemoradiotherapy has shown improved survival in recent trials (KEYNOTE-A18). In stage IVB (metastatic), palliative chemotherapy with cisplatin/carboplatin + paclitaxel + bevacizumab is first line, and pembrolizumab is added in PD-L1-positive tumors or those with high mutational burden.",
    "prevencionEs": "La vacunacion contra el VPH es la medida preventiva mas efectiva, recomendada para ninos y ninas de 9-14 anos (dos dosis), con vacunacion de recuperacion hasta los 26 anos y en algunos casos hasta los 45. Las vacunas disponibles (Gardasil 9) protegen contra los genotipos de VPH mas oncogenicos. El tamizaje regular con citologia y/o prueba de VPH a partir de los 25 anos es fundamental para detectar lesiones preinvasoras tratables. El uso consistente de preservativos reduce pero no elimina la transmision del VPH. Evitar el tabaco es importante ya que el tabaquismo aumenta el riesgo y reduce la capacidad del sistema inmune para eliminar la infeccion por VPH. La circuncision masculina reduce la transmision del VPH.",
    "prevencionEn": "HPV vaccination is the most effective preventive measure, recommended for boys and girls aged 9-14 (two doses), with catch-up vaccination up to age 26 and in some cases up to age 45. Available vaccines (Gardasil 9) protect against the most oncogenic HPV genotypes. Regular screening with cytology and/or HPV testing starting at age 25 is fundamental for detecting treatable preinvasive lesions. Consistent condom use reduces but does not eliminate HPV transmission. Avoiding tobacco is important as smoking increases risk and reduces the immune system's ability to clear HPV infection. Male circumcision reduces HPV transmission.",
    "estadificacionEs": "El cancer cervicouterino se estadifica con el sistema FIGO 2018. Estadio I: limitado al cuello uterino — IA (invasion microscopica: IA1 <3mm profundidad, IA2 3-5mm), IB (invasion clinica: IB1 <=2cm, IB2 2-4cm, IB3 >4cm). Estadio II: extension mas alla del cuello pero sin alcanzar pared pelvica ni tercio inferior de vagina — IIA (sin parametrios: IIA1 <=4cm, IIA2 >4cm), IIB (con invasion parametrial). Estadio III: extension a pared pelvica y/o tercio inferior vaginal y/o causa hidronefrosis y/o ganglios positivos — IIIA (tercio inferior vagina), IIIB (pared pelvica o hidronefrosis), IIIC (ganglios pelvicos IIIC1 o paraaorticos IIIC2). Estadio IV: invasion de vejiga/recto (IVA) o metastasis a distancia (IVB). Supervivencia a 5 anos: estadio I 80-93%, estadio II 58-63%, estadio III 32-35%, estadio IV <16%.",
    "estadificacionEn": "Cervical cancer is staged with the FIGO 2018 system. Stage I: limited to cervix — IA (microscopic invasion: IA1 <3mm depth, IA2 3-5mm), IB (clinical invasion: IB1 <=2cm, IB2 2-4cm, IB3 >4cm). Stage II: extends beyond cervix but not to pelvic wall or lower third of vagina — IIA (without parametria: IIA1 <=4cm, IIA2 >4cm), IIB (with parametrial invasion). Stage III: extends to pelvic wall and/or lower vaginal third and/or causes hydronephrosis and/or positive nodes — IIIA (lower third vagina), IIIB (pelvic wall or hydronephrosis), IIIC (pelvic nodes IIIC1 or para-aortic IIIC2). Stage IV: bladder/rectal invasion (IVA) or distant metastasis (IVB). Five-year survival: stage I 80-93%, stage II 58-63%, stage III 32-35%, stage IV <16%.",
    "cuandoConsultarEs": "Consulte a un medico si presenta sangrado vaginal entre periodos, despues de relaciones sexuales o despues de la menopausia, flujo vaginal inusual o maloliente, dolor pelvico persistente, o si nunca se ha realizado una prueba de Papanicolaou o prueba de VPH. Es fundamental completar el esquema de vacunacion contra VPH en la edad recomendada. Las mujeres con VIH o inmunosupresion deben tener tamizaje mas frecuente. No ignore los sangrados anormales pensando que son normales.",
    "cuandoConsultarEn": "See a doctor if you have vaginal bleeding between periods, after sexual intercourse, or after menopause, unusual or foul-smelling vaginal discharge, persistent pelvic pain, or if you have never had a Pap smear or HPV test. It is essential to complete the HPV vaccination schedule at the recommended age. Women with HIV or immunosuppression should have more frequent screening. Do not ignore abnormal bleeding assuming it is normal."
  },
  {
    "id": "melanoma-onco",
    "nombreEs": "Melanoma (Oncologia)",
    "nombreEn": "Melanoma (Oncology)",
    "categoriaEs": "piel",
    "categoriaEn": "skin",
    "descripcionEs": "El melanoma es el cancer de piel mas agresivo, originado en los melanocitos (celulas productoras de pigmento). Aunque representa solo el 5% de los canceres cutaneos, es responsable de la mayoria de las muertes por cancer de piel debido a su alta capacidad de metastasis. La incidencia ha aumentado drasticamente en las ultimas decadas, especialmente en poblaciones de piel clara. La exposicion a radiacion ultravioleta (UV) solar y de camas de bronceado es el principal factor de riesgo modificable. El diagnostico temprano es critico: el melanoma in situ o delgado (<1 mm) tiene tasas de curacion superiores al 95%, mientras que el melanoma metastasico tuvo historicamente un pronostico sombrio. Sin embargo, la revolucion de la inmunoterapia (anti-PD-1 y anti-CTLA-4) y las terapias dirigidas (inhibidores BRAF/MEK) han mejorado dramaticamente la supervivencia en enfermedad avanzada.",
    "descripcionEn": "Melanoma is the most aggressive skin cancer, originating in melanocytes (pigment-producing cells). Although it represents only 5% of skin cancers, it accounts for most skin cancer deaths due to its high metastatic potential. Incidence has increased dramatically in recent decades, especially in fair-skinned populations. Exposure to solar and tanning bed ultraviolet (UV) radiation is the main modifiable risk factor. Early diagnosis is critical: in situ or thin melanoma (<1 mm) has cure rates exceeding 95%, while metastatic melanoma historically had a dismal prognosis. However, the immunotherapy revolution (anti-PD-1 and anti-CTLA-4) and targeted therapies (BRAF/MEK inhibitors) have dramatically improved survival in advanced disease.",
    "sintomasEs": [
      "Lunar nuevo o existente que cambia de tamano, forma o color (regla ABCDE)",
      "Asimetria: una mitad del lunar es diferente de la otra",
      "Bordes irregulares, dentados o mal definidos",
      "Color no uniforme: combinacion de marron, negro, rojo, blanco o azul",
      "Diametro mayor de 6 mm (aunque melanomas pueden ser mas pequenos)",
      "Evolucion: cualquier cambio en tamano, forma, color o sintomas",
      "Picazon, sangrado o ulceracion de una lesion cutanea",
      "Lesion pigmentada que se ve diferente a los demas lunares (signo del patito feo)",
      "En melanoma subungueal: banda oscura longitudinal en la una"
    ],
    "sintomasEn": [
      "New or existing mole changing in size, shape, or color (ABCDE rule)",
      "Asymmetry: one half of the mole differs from the other",
      "Borders that are irregular, jagged, or poorly defined",
      "Color not uniform: combination of brown, black, red, white, or blue",
      "Diameter greater than 6 mm (though melanomas can be smaller)",
      "Evolution: any change in size, shape, color, or symptoms",
      "Itching, bleeding, or ulceration of a skin lesion",
      "Pigmented lesion that looks different from other moles (ugly duckling sign)",
      "In subungual melanoma: longitudinal dark band on the nail"
    ],
    "factoresRiesgoEs": [
      "Exposicion intensa e intermitente a radiacion UV (quemaduras solares, especialmente en la infancia)",
      "Uso de camas de bronceado (aumenta el riesgo 59% si se usa antes de los 35 anos)",
      "Piel clara, cabello rubio o pelirrojo, ojos claros (fototipos I-II)",
      "Gran numero de nevos (>50 lunares comunes o >5 nevos atipicos)",
      "Antecedente personal o familiar de melanoma",
      "Sindrome de nevo displasico familiar",
      "Mutaciones geneticas: CDKN2A (p16), CDK4, BAP1, MC1R",
      "Inmunosupresion (trasplante, VIH)",
      "Xeroderma pigmentoso (enfermedad genetica con defecto en reparacion del ADN)"
    ],
    "factoresRiesgoEn": [
      "Intense intermittent UV radiation exposure (sunburns, especially in childhood)",
      "Tanning bed use (increases risk 59% if used before age 35)",
      "Fair skin, blond or red hair, light eyes (phototypes I-II)",
      "Large number of nevi (>50 common moles or >5 atypical nevi)",
      "Personal or family history of melanoma",
      "Familial dysplastic nevus syndrome",
      "Genetic mutations: CDKN2A (p16), CDK4, BAP1, MC1R",
      "Immunosuppression (transplant, HIV)",
      "Xeroderma pigmentosum (genetic disease with DNA repair defect)"
    ],
    "diagnosticoEs": "El diagnostico se inicia con la evaluacion clinica mediante la regla ABCDE y la dermatoscopia (microscopio de superficie que mejora la precision diagnostica en un 20-30%). Toda lesion sospechosa requiere biopsia escisional con margenes de 1-3 mm (no biopsia por rasurado en lesiones sospechosas de melanoma). El informe patologico debe incluir: tipo histologico (extension superficial, nodular, lentiginoso, lentigo maligno), espesor de Breslow (mm), nivel de Clark, indice mitotico, presencia de ulceracion, invasion linfovascular, margenes y estado de satelitosis. La biopsia de ganglio centinela se recomienda para melanomas >0.8 mm de espesor o con ulceracion. La estadificacion incluye TC, PET-CT o RM cerebral segun el estadio. El analisis molecular debe incluir mutaciones BRAF V600E/K (presente en 40-50%), NRAS, KIT y carga mutacional tumoral.",
    "diagnosticoEn": "Diagnosis begins with clinical evaluation using the ABCDE rule and dermoscopy (surface microscope that improves diagnostic accuracy by 20-30%). Every suspicious lesion requires excisional biopsy with 1-3 mm margins (not shave biopsy in lesions suspicious for melanoma). The pathology report must include: histological type (superficial spreading, nodular, acral lentiginous, lentigo maligna), Breslow thickness (mm), Clark level, mitotic index, presence of ulceration, lymphovascular invasion, margins, and satellitosis status. Sentinel lymph node biopsy is recommended for melanomas >0.8 mm thick or with ulceration. Staging includes CT, PET-CT, or brain MRI depending on stage. Molecular analysis should include BRAF V600E/K mutations (present in 40-50%), NRAS, KIT, and tumor mutational burden.",
    "tratamientoEs": "En melanoma in situ, la escision amplia con margen de 5 mm es curativa. En melanoma invasor, los margenes quirurgicos dependen del espesor de Breslow: 1 cm para <=2 mm, 2 cm para >2 mm. La biopsia de ganglio centinela positiva puede llevar a observacion, diseccion ganglionar completa (ya menos recomendada) o terapia adyuvante. La terapia adyuvante con nivolumab o pembrolizumab (anti-PD-1) durante 12 meses se recomienda en estadio IIB-IV resecado con alto riesgo de recurrencia. Dabrafenib + trametinib (inhibidores BRAF/MEK) es alternativa adyuvante en tumores con mutacion BRAF. En enfermedad metastasica irresecable, la inmunoterapia combinada con nivolumab + ipilimumab (anti-PD-1 + anti-CTLA-4) logra respuestas duraderas en >50% de los pacientes, con supervivencia a 5 anos del 50%. La terapia dirigida con dabrafenib + trametinib es alternativa en melanomas BRAF mutados. La radioterapia se utiliza en metastasis cerebrales y como paliacion. Las terapias intralesionales (T-VEC) son opcion en enfermedad en transito.",
    "tratamientoEn": "In melanoma in situ, wide excision with 5 mm margin is curative. In invasive melanoma, surgical margins depend on Breslow thickness: 1 cm for <=2 mm, 2 cm for >2 mm. Positive sentinel node biopsy may lead to observation, complete lymph node dissection (now less recommended), or adjuvant therapy. Adjuvant therapy with nivolumab or pembrolizumab (anti-PD-1) for 12 months is recommended in resected stage IIB-IV with high recurrence risk. Dabrafenib + trametinib (BRAF/MEK inhibitors) is an adjuvant alternative in BRAF-mutant tumors. In unresectable metastatic disease, combined immunotherapy with nivolumab + ipilimumab (anti-PD-1 + anti-CTLA-4) achieves durable responses in >50% of patients, with 5-year survival of 50%. Targeted therapy with dabrafenib + trametinib is an alternative in BRAF-mutant melanomas. Radiotherapy is used for brain metastases and palliation. Intralesional therapies (T-VEC) are an option for in-transit disease.",
    "prevencionEs": "La prevencion primaria del melanoma se centra en la proteccion solar: evitar la exposicion al sol en horas pico (10 AM - 4 PM), usar protector solar de amplio espectro SPF 30+ con reaplicacion cada 2 horas, vestir ropa protectora con factor UPF, sombrero de ala ancha y gafas de sol. Nunca utilizar camas de bronceado. La autoexploracion cutanea mensual con la regla ABCDE y el reconocimiento del signo del patito feo son fundamentales. Los examenes dermatologicos anuales se recomiendan en personas de alto riesgo. La fotoproteccion en la infancia y adolescencia es particularmente importante, ya que las quemaduras solares severas a edad temprana aumentan significativamente el riesgo de melanoma en la vida adulta.",
    "prevencionEn": "Primary melanoma prevention focuses on sun protection: avoiding sun exposure during peak hours (10 AM - 4 PM), using broad-spectrum SPF 30+ sunscreen reapplied every 2 hours, wearing protective clothing with UPF rating, wide-brimmed hats, and sunglasses. Never use tanning beds. Monthly skin self-examination using the ABCDE rule and recognition of the ugly duckling sign are fundamental. Annual dermatological exams are recommended for high-risk individuals. Sun protection in childhood and adolescence is particularly important, as severe sunburns at a young age significantly increase the risk of melanoma in adult life.",
    "estadificacionEs": "El melanoma se estadifica con el sistema AJCC 8a edicion. Estadio 0: melanoma in situ. Estadio I: IA (Breslow <=0.8 mm sin ulceracion), IB (<=0.8 mm con ulceracion o 0.8-1.0 mm, o 1.0-2.0 mm sin ulceracion). Estadio II: IIA (1.0-2.0 mm con ulceracion o 2.0-4.0 mm sin ulceracion), IIB (2.0-4.0 mm con ulceracion o >4.0 mm sin ulceracion), IIC (>4.0 mm con ulceracion). Estadio III: metastasis en transito, satelitosis o ganglios regionales — clasificacion detallada IIIA-IIID segun numero de ganglios y presencia de ulceracion. Estadio IV: metastasis a distancia — M1a (piel, tejido subcutaneo o ganglios a distancia, LDH normal), M1b (pulmon, LDH normal), M1c (otras visceras, LDH normal), M1d (sistema nervioso central). Supervivencia a 5 anos: estadio I >95%, estadio II 53-82%, estadio III 32-93% (amplio rango), estadio IV 20-50% con inmunoterapia moderna.",
    "estadificacionEn": "Melanoma is staged with the AJCC 8th edition system. Stage 0: melanoma in situ. Stage I: IA (Breslow <=0.8 mm without ulceration), IB (<=0.8 mm with ulceration or 0.8-1.0 mm, or 1.0-2.0 mm without ulceration). Stage II: IIA (1.0-2.0 mm with ulceration or 2.0-4.0 mm without ulceration), IIB (2.0-4.0 mm with ulceration or >4.0 mm without ulceration), IIC (>4.0 mm with ulceration). Stage III: in-transit metastases, satellitosis, or regional nodes — detailed IIIA-IIID classification based on number of nodes and presence of ulceration. Stage IV: distant metastasis — M1a (skin, subcutaneous tissue, or distant nodes, normal LDH), M1b (lung, normal LDH), M1c (other viscera, normal LDH), M1d (central nervous system). Five-year survival: stage I >95%, stage II 53-82%, stage III 32-93% (wide range), stage IV 20-50% with modern immunotherapy.",
    "cuandoConsultarEs": "Consulte a un dermatologo si nota un lunar nuevo que crece rapidamente, un lunar existente que cambia de tamano, forma o color, una lesion cutanea que sangra, pica o se ulcera, una lesion pigmentada que se ve diferente a todas las demas, o una banda oscura nueva debajo de una una. Las personas con muchos lunares, antecedentes familiares de melanoma o piel muy clara deben realizarse examenes dermatologicos regulares. Busque atencion urgente ante cualquier lesion pigmentada que cambie rapidamente de tamano o que sangre espontaneamente.",
    "cuandoConsultarEn": "See a dermatologist if you notice a new mole that grows rapidly, an existing mole changing in size, shape, or color, a skin lesion that bleeds, itches, or ulcerates, a pigmented lesion that looks different from all others, or a new dark band under a nail. People with many moles, family history of melanoma, or very fair skin should have regular dermatological exams. Seek urgent attention for any pigmented lesion that rapidly changes in size or bleeds spontaneously."
  },
  {
    "id": "cancer-estomago",
    "nombreEs": "Cancer Gastrico (Cancer de Estomago)",
    "nombreEn": "Gastric Cancer (Stomach Cancer)",
    "categoriaEs": "gastrointestinal",
    "categoriaEn": "gastrointestinal",
    "descripcionEs": "El cancer gastrico es el quinto cancer mas frecuente a nivel mundial y la cuarta causa de muerte por cancer. Se origina en el revestimiento mucoso del estomago, siendo el adenocarcinoma el tipo histologico mas comun (95%). Tiene una marcada variacion geografica, con alta incidencia en Asia Oriental (Japon, Corea del Sur, China), America Latina y Europa del Este. La infeccion por Helicobacter pylori es el principal factor de riesgo y ha sido clasificada como carcinogeno del grupo 1 por la OMS. El cancer gastrico suele diagnosticarse en estadios avanzados en paises sin programas de tamizaje, lo que explica el pronostico generalmente desfavorable. Sin embargo, en paises con programas de deteccion temprana como Japon y Corea, la supervivencia a 5 anos para cancer gastrico temprano supera el 90%.",
    "descripcionEn": "Gastric cancer is the fifth most common cancer worldwide and the fourth leading cause of cancer death. It originates in the mucosal lining of the stomach, with adenocarcinoma being the most common histological type (95%). It has marked geographic variation, with high incidence in East Asia (Japan, South Korea, China), Latin America, and Eastern Europe. Helicobacter pylori infection is the main risk factor and has been classified as a group 1 carcinogen by the WHO. Gastric cancer is often diagnosed at advanced stages in countries without screening programs, explaining the generally unfavorable prognosis. However, in countries with early detection programs like Japan and Korea, 5-year survival for early gastric cancer exceeds 90%.",
    "sintomasEs": [
      "Dispepsia persistente y malestar epigastrico (frecuentemente ignorado al inicio)",
      "Saciedad precoz (sentirse lleno despues de comer pequenas cantidades)",
      "Perdida de peso involuntaria y significativa",
      "Nausea y vomito (puede ser con sangre en tumores ulcerados)",
      "Dolor abdominal superior persistente",
      "Disfagia (dificultad para tragar) si el tumor esta en la union gastroesofagica",
      "Anemia por sangrado cronico oculto (fatiga, palidez)",
      "Melena (heces negras y alquitranadas por sangrado digestivo)",
      "Ascitis y masa abdominal palpable en enfermedad avanzada",
      "Ganglio de Virchow (supraclavicular izquierdo) como signo de enfermedad diseminada"
    ],
    "sintomasEn": [
      "Persistent dyspepsia and epigastric discomfort (frequently ignored initially)",
      "Early satiety (feeling full after eating small amounts)",
      "Significant unintentional weight loss",
      "Nausea and vomiting (may be bloody in ulcerated tumors)",
      "Persistent upper abdominal pain",
      "Dysphagia (difficulty swallowing) if tumor is at gastroesophageal junction",
      "Anemia from chronic occult bleeding (fatigue, pallor)",
      "Melena (black tarry stools from digestive bleeding)",
      "Ascites and palpable abdominal mass in advanced disease",
      "Virchow node (left supraclavicular) as a sign of disseminated disease"
    ],
    "factoresRiesgoEs": [
      "Infeccion cronica por Helicobacter pylori (aumenta el riesgo 3-6 veces)",
      "Dieta rica en alimentos salados, ahumados y encurtidos",
      "Bajo consumo de frutas y verduras frescas",
      "Tabaquismo (aumenta el riesgo 1.5-2.5 veces)",
      "Antecedente familiar de cancer gastrico (primer grado)",
      "Gastritis atrofica cronica y metaplasia intestinal",
      "Anemia perniciosa (deficiencia de vitamina B12 autoinmune)",
      "Poliposis adenomatosa gastrica",
      "Gastrectomia parcial previa (munen de gastrectomia)",
      "Sindromes hereditarios: cancer gastrico difuso hereditario (mutacion CDH1), sindrome de Lynch",
      "Grupo sanguineo A (asociacion epidemiologica)"
    ],
    "factoresRiesgoEn": [
      "Chronic Helicobacter pylori infection (increases risk 3-6 fold)",
      "Diet rich in salty, smoked, and pickled foods",
      "Low consumption of fresh fruits and vegetables",
      "Smoking (increases risk 1.5-2.5 fold)",
      "Family history of gastric cancer (first degree)",
      "Chronic atrophic gastritis and intestinal metaplasia",
      "Pernicious anemia (autoimmune vitamin B12 deficiency)",
      "Gastric adenomatous polyposis",
      "Prior partial gastrectomy (gastric stump)",
      "Hereditary syndromes: hereditary diffuse gastric cancer (CDH1 mutation), Lynch syndrome",
      "Blood group A (epidemiological association)"
    ],
    "diagnosticoEs": "La endoscopia digestiva alta (esofagogastroduodenoscopia) con biopsia es el estandar de oro para el diagnostico. Se deben tomar multiples biopsias de la lesion sospechosa y de las areas circundantes. La clasificacion de Lauren distingue el tipo intestinal (mejor pronostico, asociado a H. pylori y metaplasia) del tipo difuso (peor pronostico, celulas en anillo de sello, asociado a mutacion CDH1). La estadificacion requiere TC toracoabdominopelvica con contraste, ecoendoscopia (evalua profundidad de invasion y ganglios perigastricos), y PET-CT en casos seleccionados. La laparoscopia diagnostica con lavado peritoneal citologico se recomienda antes de cirugia en estadios >=T3 para descartar carcinomatosis peritoneal oculta. Los biomarcadores incluyen estado de HER2 (obligatorio en enfermedad avanzada), PD-L1 (CPS), MSI y estado de Claudina 18.2.",
    "diagnosticoEn": "Upper gastrointestinal endoscopy (esophagogastroduodenoscopy) with biopsy is the gold standard for diagnosis. Multiple biopsies should be taken from the suspicious lesion and surrounding areas. Lauren classification distinguishes the intestinal type (better prognosis, associated with H. pylori and metaplasia) from the diffuse type (worse prognosis, signet ring cells, associated with CDH1 mutation). Staging requires contrast-enhanced thoraco-abdomino-pelvic CT, endoscopic ultrasound (evaluates invasion depth and perigastric nodes), and PET-CT in selected cases. Diagnostic laparoscopy with peritoneal lavage cytology is recommended before surgery in stages >=T3 to rule out occult peritoneal carcinomatosis. Biomarkers include HER2 status (mandatory in advanced disease), PD-L1 (CPS), MSI, and Claudin 18.2 status.",
    "tratamientoEs": "El tratamiento del cancer gastrico localizado se basa en la cirugia. El cancer gastrico temprano (limitado a mucosa/submucosa) puede tratarse con reseccion endoscopica submucosa (diseccion submucosa endoscopica, ESD) en casos seleccionados. Para enfermedad invasora, la gastrectomia (subtotal o total segun localizacion) con linfadenectomia D2 (al menos 15 ganglios) es el estandar quirurgico. La quimioterapia perioperatoria con FLOT (5-FU, leucovorina, oxaliplatino, docetaxel) es el estandar en enfermedad localmente avanzada resecable (4 ciclos pre y 4 post cirugia). La quimiorradioterapia postoperatoria es una alternativa en ciertos contextos. En enfermedad metastasica, la quimioterapia con fluoropirimidina + platino es primera linea. En tumores HER2+, se anade trastuzumab. La inmunoterapia con nivolumab + quimioterapia es ahora primera linea en tumores con PD-L1 CPS >=5. Zolbetuximab (anti-Claudina 18.2) es una nueva terapia dirigida aprobada para tumores Claudina 18.2+. Los inhibidores de checkpoint (pembrolizumab, nivolumab) son opciones en tumores MSI-H.",
    "tratamientoEn": "Treatment of localized gastric cancer is surgery-based. Early gastric cancer (limited to mucosa/submucosa) can be treated with endoscopic submucosal resection (endoscopic submucosal dissection, ESD) in selected cases. For invasive disease, gastrectomy (subtotal or total depending on location) with D2 lymphadenectomy (at least 15 nodes) is the surgical standard. Perioperative chemotherapy with FLOT (5-FU, leucovorin, oxaliplatin, docetaxel) is the standard for resectable locally advanced disease (4 cycles pre and 4 post surgery). Postoperative chemoradiotherapy is an alternative in certain settings. In metastatic disease, fluoropyrimidine + platinum chemotherapy is first line. Trastuzumab is added in HER2+ tumors. Immunotherapy with nivolumab + chemotherapy is now first line in tumors with PD-L1 CPS >=5. Zolbetuximab (anti-Claudin 18.2) is a newly approved targeted therapy for Claudin 18.2+ tumors. Checkpoint inhibitors (pembrolizumab, nivolumab) are options in MSI-H tumors.",
    "prevencionEs": "La erradicacion de Helicobacter pylori es la medida preventiva mas importante, recomendada en poblaciones de alta prevalencia y en familiares de primer grado de pacientes con cancer gastrico. Una dieta rica en frutas y verduras frescas, baja en sal y alimentos ahumados o encurtidos, reduce el riesgo. Evitar el tabaco es fundamental. En portadores de mutaciones CDH1 con riesgo hereditario de cancer gastrico difuso, la gastrectomia profilactica se recomienda entre los 18-40 anos dado el alto riesgo (>70%). En paises de alta incidencia (Japon, Corea del Sur), la endoscopia de tamizaje se realiza a partir de los 40-50 anos. La vigilancia endoscopica de lesiones premalignas (gastritis atrofica, metaplasia intestinal) permite la deteccion temprana.",
    "prevencionEn": "Helicobacter pylori eradication is the most important preventive measure, recommended in high-prevalence populations and in first-degree relatives of gastric cancer patients. A diet rich in fresh fruits and vegetables, low in salt and smoked or pickled foods, reduces risk. Avoiding tobacco is essential. In CDH1 mutation carriers with hereditary risk of diffuse gastric cancer, prophylactic gastrectomy is recommended between ages 18-40 given the high risk (>70%). In high-incidence countries (Japan, South Korea), screening endoscopy is performed starting at age 40-50. Endoscopic surveillance of premalignant lesions (atrophic gastritis, intestinal metaplasia) allows early detection.",
    "estadificacionEs": "El cancer gastrico se estadifica con el sistema TNM (AJCC 8a edicion). Estadio 0: carcinoma in situ (Tis). Estadio I: IA (T1 mucosa/submucosa, N0), IB (T1N1 o T2N0). Estadio II: IIA (T1N2, T2N1, T3N0), IIB (T1N3a, T2N2, T3N1, T4aN0). Estadio III: IIIA (T2N3a, T3N2, T4aN1-2, T4bN0), IIIB (T1-2N3b, T3N3a, T4aN3a, T4bN1-2), IIIC (T3N3b, T4aN3b, T4bN3). Estadio IV: cualquier T, cualquier N con metastasis a distancia (M1), incluyendo lavado peritoneal positivo. La profundidad de invasion (T): T1 submucosa, T2 muscular propia, T3 subserosa, T4a serosa, T4b estructuras adyacentes. Supervivencia a 5 anos: estadio IA >90%, IB 80%, II 50-60%, III 15-35%, IV <5%.",
    "estadificacionEn": "Gastric cancer is staged with the TNM system (AJCC 8th edition). Stage 0: carcinoma in situ (Tis). Stage I: IA (T1 mucosa/submucosa, N0), IB (T1N1 or T2N0). Stage II: IIA (T1N2, T2N1, T3N0), IIB (T1N3a, T2N2, T3N1, T4aN0). Stage III: IIIA (T2N3a, T3N2, T4aN1-2, T4bN0), IIIB (T1-2N3b, T3N3a, T4aN3a, T4bN1-2), IIIC (T3N3b, T4aN3b, T4bN3). Stage IV: any T, any N with distant metastasis (M1), including positive peritoneal lavage. Depth of invasion (T): T1 submucosa, T2 muscularis propria, T3 subserosa, T4a serosa, T4b adjacent structures. Five-year survival: stage IA >90%, IB 80%, II 50-60%, III 15-35%, IV <5%.",
    "cuandoConsultarEs": "Consulte a un medico si presenta dispepsia persistente que no mejora con tratamiento habitual, perdida de peso involuntaria, saciedad precoz, nausea o vomito persistente, dolor abdominal superior que no se resuelve, sangre en el vomito o heces negras y alquitranadas (melena), dificultad para tragar, o si tiene factores de riesgo como infeccion conocida por H. pylori no tratada o antecedentes familiares de cancer gastrico. Toda dispepsia nueva en mayores de 55 anos con signos de alarma debe investigarse con endoscopia.",
    "cuandoConsultarEn": "See a doctor if you have persistent dyspepsia not improving with usual treatment, unintentional weight loss, early satiety, persistent nausea or vomiting, upper abdominal pain that does not resolve, blood in vomit or black tarry stools (melena), difficulty swallowing, or if you have risk factors such as known untreated H. pylori infection or family history of gastric cancer. All new-onset dyspepsia in those over 55 with alarm signs should be investigated with endoscopy."
  },
  {
    "id": "leucemia-general",
    "nombreEs": "Leucemia (Vision General)",
    "nombreEn": "Leukemia (Overview)",
    "categoriaEs": "hematologico",
    "categoriaEn": "hematological",
    "descripcionEs": "Las leucemias son un grupo de canceres que se originan en la medula osea y afectan la produccion normal de celulas sanguineas, resultando en una proliferacion descontrolada de leucocitos (globulos blancos) anormales e inmaduros. Se clasifican segun su velocidad de progresion (aguda vs cronica) y el tipo de celula afectada (linfoide vs mieloide), dando lugar a cuatro tipos principales: leucemia linfoblastica aguda (LLA), leucemia mieloide aguda (LMA), leucemia linfocitica cronica (LLC) y leucemia mieloide cronica (LMC). Las leucemias agudas son emergencias medicas que requieren tratamiento inmediato, mientras que las cronicas pueden tener un curso mas indolente. La LLA es el cancer mas comun en la infancia, mientras que la LMA, LLC y LMC son mas frecuentes en adultos. Los avances en quimioterapia, terapias dirigidas (imatinib para LMC), inmunoterapia y terapia con celulas CAR-T han revolucionado el tratamiento y las tasas de curacion.",
    "descripcionEn": "Leukemias are a group of cancers originating in the bone marrow that affect normal blood cell production, resulting in uncontrolled proliferation of abnormal and immature white blood cells (leukocytes). They are classified by speed of progression (acute vs chronic) and affected cell type (lymphoid vs myeloid), giving rise to four main types: acute lymphoblastic leukemia (ALL), acute myeloid leukemia (AML), chronic lymphocytic leukemia (CLL), and chronic myelogenous leukemia (CML). Acute leukemias are medical emergencies requiring immediate treatment, while chronic ones may have a more indolent course. ALL is the most common childhood cancer, while AML, CLL, and CML are more common in adults. Advances in chemotherapy, targeted therapies (imatinib for CML), immunotherapy, and CAR-T cell therapy have revolutionized treatment and cure rates.",
    "sintomasEs": [
      "Fatiga intensa y debilidad persistente (por anemia, disminucion de globulos rojos)",
      "Infecciones frecuentes, severas o que no se resuelven (por neutropenia, falta de leucocitos funcionales)",
      "Sangrado y moretones faciles: hemorragias nasales, encias sangrantes, petequias (por trombocitopenia)",
      "Fiebre persistente o recurrente sin causa infecciosa clara",
      "Perdida de peso involuntaria y sudoracion nocturna profusa",
      "Dolor oseo o articular (por expansion de la medula osea)",
      "Hinchazon de ganglios linfaticos (adenopatias cervicales, axilares, inguinales)",
      "Esplenomegalia y/o hepatomegalia (hinchazon del bazo e higado)",
      "Palidez (por anemia)",
      "En LLA infantil: cojera o rechazo a caminar (dolor oseo)"
    ],
    "sintomasEn": [
      "Severe fatigue and persistent weakness (from anemia, decreased red blood cells)",
      "Frequent, severe, or non-resolving infections (from neutropenia, lack of functional white blood cells)",
      "Easy bleeding and bruising: nosebleeds, bleeding gums, petechiae (from thrombocytopenia)",
      "Persistent or recurrent fever without clear infectious cause",
      "Unintentional weight loss and profuse night sweats",
      "Bone or joint pain (from bone marrow expansion)",
      "Swollen lymph nodes (cervical, axillary, inguinal lymphadenopathy)",
      "Splenomegaly and/or hepatomegaly (spleen and liver enlargement)",
      "Pallor (from anemia)",
      "In childhood ALL: limping or refusal to walk (bone pain)"
    ],
    "factoresRiesgoEs": [
      "Exposicion a radiacion ionizante (bombas atomicas, radioterapia previa, exposicion accidental)",
      "Exposicion a benceno y otros quimicos industriales",
      "Quimioterapia previa, especialmente agentes alquilantes e inhibidores de topoisomerasa II",
      "Sindromes geneticos: sindrome de Down (riesgo 10-20 veces mayor de leucemia), sindrome de Bloom, anemia de Fanconi, ataxia-telangiectasia",
      "Historia familiar de leucemia (especialmente LLC)",
      "Tabaquismo (factor de riesgo especifico para LMA)",
      "Trastornos hematologicos preleucemicos: sindromes mielodisplasicos, neoplasias mieloproliferativas",
      "Virus: HTLV-1 (leucemia de celulas T del adulto), virus de Epstein-Barr (asociacion con algunos subtipos)",
      "Edad: LLA pico en 2-5 anos; LMA, LLC y LMC aumentan con la edad"
    ],
    "factoresRiesgoEn": [
      "Ionizing radiation exposure (atomic bombs, prior radiation therapy, accidental exposure)",
      "Benzene and other industrial chemical exposure",
      "Prior chemotherapy, especially alkylating agents and topoisomerase II inhibitors",
      "Genetic syndromes: Down syndrome (10-20 fold higher leukemia risk), Bloom syndrome, Fanconi anemia, ataxia-telangiectasia",
      "Family history of leukemia (especially CLL)",
      "Smoking (specific risk factor for AML)",
      "Preleukemic hematological disorders: myelodysplastic syndromes, myeloproliferative neoplasms",
      "Viruses: HTLV-1 (adult T-cell leukemia), Epstein-Barr virus (association with some subtypes)",
      "Age: ALL peak at ages 2-5; AML, CLL, and CML increase with age"
    ],
    "diagnosticoEs": "El diagnostico de leucemia se inicia con el hemograma completo (biometria hematica) que muestra citopenias (anemia, trombocitopenia) y/o leucocitosis con blastos en sangre periferica. El aspirado y la biopsia de medula osea son obligatorios y confirman el diagnostico al demostrar >=20% de blastos (en leucemias agudas). La citomorfologia, la citoquimica, la citometria de flujo (inmunofenotipo), la citogenetica (cariotipo) y los estudios moleculares (FISH, PCR, secuenciacion de nueva generacion) son esenciales para la clasificacion exacta segun la OMS. En LLA, se identifican subtipos como Philadelphia+ (BCR-ABL1), hiperdiploidia, reordenamientos de KMT2A. En LMA, las mutaciones FLT3, NPM1, CEBPA y IDH1/2 tienen implicaciones pronosticas y terapeuticas. En LMC, la deteccion del cromosoma Philadelphia (t(9;22)) y el gen de fusion BCR-ABL1 es diagnostica. En LLC, la citometria de flujo muestra un inmunofenotipo caracteristico (CD5+, CD19+, CD23+) y el estudio de IGHV, del(17p)/TP53, del(11q) son clave para el pronostico.",
    "diagnosticoEn": "Leukemia diagnosis begins with complete blood count (CBC) showing cytopenias (anemia, thrombocytopenia) and/or leukocytosis with blasts in peripheral blood. Bone marrow aspirate and biopsy are mandatory and confirm diagnosis by demonstrating >=20% blasts (in acute leukemias). Cytomorphology, cytochemistry, flow cytometry (immunophenotyping), cytogenetics (karyotype), and molecular studies (FISH, PCR, next-generation sequencing) are essential for exact WHO classification. In ALL, subtypes such as Philadelphia+ (BCR-ABL1), hyperdiploidy, and KMT2A rearrangements are identified. In AML, FLT3, NPM1, CEBPA, and IDH1/2 mutations have prognostic and therapeutic implications. In CML, Philadelphia chromosome detection (t(9;22)) and BCR-ABL1 fusion gene is diagnostic. In CLL, flow cytometry shows a characteristic immunophenotype (CD5+, CD19+, CD23+), and IGHV, del(17p)/TP53, del(11q) studies are key for prognosis.",
    "tratamientoEs": "El tratamiento varia segun el tipo de leucemia. En LLA, la quimioterapia intensiva en fases (induccion, consolidacion, mantenimiento) durante 2-3 anos es el estandar; la LLA Philadelphia+ requiere adicion de inhibidores de tirosina-quinasa (dasatinib, ponatinib). Las terapias con celulas CAR-T (tisagenlecleucel) han revolucionado el tratamiento de LLA refractaria o recidivante. El trasplante alogenico de celulas madre se considera en pacientes de alto riesgo. En LMA, la quimioterapia de induccion intensiva (7+3: citarabina + daunorrubicina) seguida de consolidacion con citarabina a altas dosis o trasplante alogenico es el estandar. Nuevas terapias dirigidas incluyen midostaurina (FLT3), enasidenib/ivosidenib (IDH), venetoclax + azacitidina (pacientes no aptos para quimioterapia intensiva). En LMC, los inhibidores de tirosina-quinasa (imatinib, dasatinib, nilotinib, bosutinib, ponatinib) que bloquean BCR-ABL1 han transformado una enfermedad mortal en una condicion cronica manejable, con supervivencia similar a la poblacion general. En LLC, el tratamiento se inicia solo cuando hay indicacion clinica; las opciones incluyen inhibidores de BTK (ibrutinib, acalabrutinib, zanubrutinib), venetoclax + obinutuzumab, y regimenes basados en fludarabina en pacientes jovenes sin del(17p).",
    "tratamientoEn": "Treatment varies by leukemia type. In ALL, intensive phased chemotherapy (induction, consolidation, maintenance) over 2-3 years is the standard; Philadelphia+ ALL requires addition of tyrosine kinase inhibitors (dasatinib, ponatinib). CAR-T cell therapies (tisagenlecleucel) have revolutionized treatment of refractory or relapsed ALL. Allogeneic stem cell transplant is considered for high-risk patients. In AML, intensive induction chemotherapy (7+3: cytarabine + daunorubicin) followed by consolidation with high-dose cytarabine or allogeneic transplant is the standard. New targeted therapies include midostaurin (FLT3), enasidenib/ivosidenib (IDH), venetoclax + azacitidine (patients unfit for intensive chemotherapy). In CML, tyrosine kinase inhibitors (imatinib, dasatinib, nilotinib, bosutinib, ponatinib) blocking BCR-ABL1 have transformed a fatal disease into a manageable chronic condition with survival similar to the general population. In CLL, treatment is initiated only when clinically indicated; options include BTK inhibitors (ibrutinib, acalabrutinib, zanubrutinib), venetoclax + obinutuzumab, and fludarabine-based regimens in young patients without del(17p).",
    "prevencionEs": "No existe una estrategia de prevencion primaria probada para la mayoria de las leucemias, ya que muchos factores de riesgo no son modificables. Las medidas generales incluyen evitar la exposicion innecesaria a radiacion ionizante, proteccion ocupacional contra benceno y solventes industriales, y no fumar (reduce el riesgo de LMA). La deteccion y tratamiento de sindromes mielodisplasicos puede prevenir la transformacion leucemica en algunos casos. La investigacion en curso sobre quimioprevencion y vigilancia de poblaciones de alto riesgo (sindromes geneticos) puede mejorar la deteccion precoz. La consulta genetica esta indicada en familias con multiples casos de leucemia. El seguimiento hematologico regular es importante en pacientes con antecedente de quimioterapia o radioterapia previa.",
    "prevencionEn": "There is no proven primary prevention strategy for most leukemias, as many risk factors are not modifiable. General measures include avoiding unnecessary ionizing radiation exposure, occupational protection against benzene and industrial solvents, and not smoking (reduces AML risk). Detection and treatment of myelodysplastic syndromes may prevent leukemic transformation in some cases. Ongoing research on chemoprevention and surveillance of high-risk populations (genetic syndromes) may improve early detection. Genetic counseling is indicated in families with multiple leukemia cases. Regular hematological follow-up is important in patients with prior chemotherapy or radiation therapy history.",
    "estadificacionEs": "A diferencia de los tumores solidos, las leucemias no se estadifican con el sistema TNM tradicional. En LLA, la estratificacion de riesgo se basa en edad, cuenta leucocitaria al diagnostico, anomalias citogeneticas y moleculares, respuesta temprana al tratamiento (enfermedad minima residual/EMR al dia 29) y afectacion del sistema nervioso central. En LMA, la clasificacion pronostica del European LeukemiaNet (ELN) divide en favorable (mutaciones NPM1, CEBPA bialeica, t(8;21), inv(16)), intermedio y adverso (cariotipo complejo, monosomia, TP53, FLT3-ITD alta ratio). En LMC, se utiliza la escala Sokal o EUTOS para el pronostico. En LLC, la estadificacion de Rai (0-IV) y Binet (A, B, C) se basan en la cuenta linfocitaria, organomegalias y citopenias. Los factores moleculares (IGHV no mutado, del(17p), TP53 mutado) identifican enfermedad de alto riesgo en LLC. La enfermedad minima residual (EMR) se ha convertido en un marcador pronostico clave en LLA, LMA y LLC.",
    "estadificacionEn": "Unlike solid tumors, leukemias are not staged with the traditional TNM system. In ALL, risk stratification is based on age, white blood cell count at diagnosis, cytogenetic and molecular abnormalities, early treatment response (minimal residual disease/MRD at day 29), and central nervous system involvement. In AML, the European LeukemiaNet (ELN) prognostic classification divides into favorable (NPM1 mutations, biallelic CEBPA, t(8;21), inv(16)), intermediate, and adverse (complex karyotype, monosomy, TP53, FLT3-ITD high ratio). In CML, Sokal or EUTOS scores are used for prognosis. In CLL, Rai (0-IV) and Binet (A, B, C) staging is based on lymphocyte count, organomegaly, and cytopenias. Molecular factors (unmutated IGHV, del(17p), TP53 mutation) identify high-risk CLL disease. Minimal residual disease (MRD) has become a key prognostic marker in ALL, AML, and CLL.",
    "cuandoConsultarEs": "Consulte a un medico urgentemente si presenta fatiga severa que no mejora con descanso, fiebre persistente sin causa aparente, sangrado inusual o moretones que aparecen sin causa, infecciones frecuentes o severas, dolor oseo persistente (especialmente en ninos), hinchazon de ganglios linfaticos, palidez marcada, o sudoracion nocturna profusa. Si un hemograma muestra anomalias como leucocitosis con blastos, anemia o trombocitopenia severa inexplicada, solicite evaluacion hematologica urgente. En ninos, la combinacion de fatiga, dolor oseo y moretones inexplicables debe evaluarse inmediatamente.",
    "cuandoConsultarEn": "See a doctor urgently if you have severe fatigue not improving with rest, persistent fever without apparent cause, unusual bleeding or bruising appearing without cause, frequent or severe infections, persistent bone pain (especially in children), swollen lymph nodes, marked pallor, or profuse night sweats. If a blood count shows abnormalities such as leukocytosis with blasts, anemia, or unexplained severe thrombocytopenia, request urgent hematological evaluation. In children, the combination of fatigue, bone pain, and unexplained bruising should be evaluated immediately."
  }
]`);

// -- Helper functions --------------------------------------------------------

export function buscarOncologia(termino: string): OncologiaEntry[] {
  const t = termino.toLowerCase();
  return ONCOLOGIA_ENTRIES.filter(
    (e) =>
      e.nombreEs.toLowerCase().includes(t) ||
      e.nombreEn.toLowerCase().includes(t) ||
      e.descripcionEs.toLowerCase().includes(t) ||
      e.descripcionEn.toLowerCase().includes(t)
  );
}

export function getOncologiaById(id: string): OncologiaEntry | undefined {
  return ONCOLOGIA_ENTRIES.find((e) => e.id === id);
}

export function getOncologiaPorCategoria(categoria: string): OncologiaEntry[] {
  const c = categoria.toLowerCase();
  return ONCOLOGIA_ENTRIES.filter(
    (e) =>
      e.categoriaEs.toLowerCase().includes(c) ||
      e.categoriaEn.toLowerCase().includes(c)
  );
}
