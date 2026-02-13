export interface NutricionClinicaEntry {
  id: string;
  nombreEs: string;
  nombreEn: string;
  descripcionEs: string;
  descripcionEn: string;
  categoriaEs: string;
  categoriaEn: string;
  indicacionesEs: string[];
  indicacionesEn: string[];
  principiosEs: string;
  principiosEn: string;
  implementacionEs: string;
  implementacionEn: string;
  monitorizacionEs: string;
  monitorizacionEn: string;
  complicacionesEs: string[];
  complicacionesEn: string[];
  contraindicacionesEs: string[];
  contraindicacionesEn: string[];
  cuandoConsultarEs: string;
  cuandoConsultarEn: string;
}

export const NUTRICION_CLINICA_ENTRIES: NutricionClinicaEntry[] = JSON.parse(`[
  {
    "id": "nutricion-parenteral",
    "nombreEs": "Nutricion Parenteral Total (NPT)",
    "nombreEn": "Total Parenteral Nutrition (TPN)",
    "categoriaEs": "Soporte Nutricional",
    "categoriaEn": "Nutritional Support",
    "descripcionEs": "La nutricion parenteral total es una forma de soporte nutricional que administra todos los macro y micronutrientes directamente al torrente sanguineo a traves de un acceso venoso central. Esta indicada cuando el tracto gastrointestinal no puede utilizarse de manera segura o funcional, ya sea por obstruccion intestinal, isquemia mesenterica, fistulas de alto gasto u otras condiciones que impidan la absorcion enterica adecuada. La formulacion incluye dextrosa como fuente de carbohidratos, aminoacidos esenciales y no esenciales, emulsiones lipidicas, electrolitos, vitaminas y oligoelementos, ajustados segun las necesidades metabolicas individuales del paciente. El manejo de la NPT requiere un equipo multidisciplinario que incluya medicos, nutriologos clinicos, farmaceuticos y enfermeria especializada para optimizar resultados y minimizar complicaciones.",
    "descripcionEn": "Total parenteral nutrition is a form of nutritional support that delivers all macro and micronutrients directly into the bloodstream through central venous access. It is indicated when the gastrointestinal tract cannot be used safely or functionally, whether due to intestinal obstruction, mesenteric ischemia, high-output fistulas, or other conditions preventing adequate enteric absorption. The formulation includes dextrose as a carbohydrate source, essential and non-essential amino acids, lipid emulsions, electrolytes, vitamins, and trace elements, adjusted according to the individual metabolic needs of the patient. TPN management requires a multidisciplinary team including physicians, clinical nutritionists, pharmacists, and specialized nursing staff to optimize outcomes and minimize complications.",
    "indicacionesEs": [
      "Obstruccion intestinal completa o suboclusiva no susceptible de resolucion inmediata",
      "Fistulas enterocutaneas de alto gasto (mayor a 500 mL/dia)",
      "Sindrome de intestino corto con insuficiencia intestinal severa",
      "Isquemia mesenterica aguda en fase de reposo intestinal",
      "Pancreatitis aguda severa con intolerancia a nutricion enteral",
      "Mucositis severa postquimioterapia que impide ingesta oral o enteral",
      "Ileo paralitico prolongado en el postoperatorio",
      "Enfermedad inflamatoria intestinal con afeccion extensa y complicaciones",
      "Pacientes criticos con contraindicacion absoluta para uso del tracto gastrointestinal"
    ],
    "indicacionesEn": [
      "Complete or subocclusive intestinal obstruction not amenable to immediate resolution",
      "High-output enterocutaneous fistulas (greater than 500 mL/day)",
      "Short bowel syndrome with severe intestinal insufficiency",
      "Acute mesenteric ischemia during intestinal rest phase",
      "Severe acute pancreatitis with intolerance to enteral nutrition",
      "Severe post-chemotherapy mucositis preventing oral or enteral intake",
      "Prolonged paralytic ileus in the postoperative period",
      "Inflammatory bowel disease with extensive involvement and complications",
      "Critically ill patients with absolute contraindication for gastrointestinal tract use"
    ],
    "principiosEs": "La NPT se basa en el principio de proporcionar calorias y nutrientes suficientes para cubrir el gasto energetico basal y las demandas metabolicas adicionales del paciente. Se calcula tipicamente a 25-30 kcal/kg/dia en la fase estable, con 1.2-2.0 g/kg/dia de proteinas segun el grado de estres metabolico. Los lipidos no deben exceder el 30-40% de las calorias no proteicas y se administran en emulsiones al 10% o 20%. La relacion calorias no proteicas a gramos de nitrogeno debe mantenerse entre 100:1 y 150:1 para optimizar la sintesis proteica. Se requiere suplementacion de tiamina antes de iniciar dextrosa para prevenir encefalopatia de Wernicke. El inicio debe ser gradual para evitar sindrome de realimentacion en pacientes desnutridos.",
    "principiosEn": "TPN is based on the principle of providing sufficient calories and nutrients to meet basal energy expenditure and additional metabolic demands of the patient. It is typically calculated at 25-30 kcal/kg/day in the stable phase, with 1.2-2.0 g/kg/day of protein depending on the degree of metabolic stress. Lipids should not exceed 30-40% of non-protein calories and are administered as 10% or 20% emulsions. The non-protein calorie to nitrogen gram ratio should be maintained between 100:1 and 150:1 to optimize protein synthesis. Thiamine supplementation is required before initiating dextrose to prevent Wernicke encephalopathy. Initiation should be gradual to avoid refeeding syndrome in malnourished patients.",
    "implementacionEs": "La implementacion de la NPT comienza con la colocacion de un cateter venoso central, preferiblemente en la vena subclavia o yugular interna, verificando su posicion mediante radiografia de torax. La formulacion se prepara en farmacia bajo condiciones esteriles en campana de flujo laminar. Se inicia al 50% del objetivo calorico el primer dia y se incrementa en 24-48 horas segun tolerancia metabolica. La glucosa serica debe monitorizarse cada 4-6 horas durante las primeras 48 horas, manteniendo niveles entre 140-180 mg/dL. Se requiere control estricto de la velocidad de infusion, evitando interrupciones abruptas que puedan causar hipoglucemia reactiva. El sitio de insercion del cateter debe evaluarse diariamente en busca de signos de infeccion, y los cambios de aposito deben realizarse cada 48-72 horas con tecnica aseptica. La transicion a nutricion enteral debe iniciarse tan pronto como sea posible, reduciendo la NPT de forma proporcional.",
    "implementacionEn": "TPN implementation begins with placement of a central venous catheter, preferably in the subclavian or internal jugular vein, verifying position by chest X-ray. The formulation is prepared in the pharmacy under sterile conditions in a laminar flow hood. It is initiated at 50% of the caloric goal on the first day and increased over 24-48 hours according to metabolic tolerance. Blood glucose should be monitored every 4-6 hours during the first 48 hours, maintaining levels between 140-180 mg/dL. Strict infusion rate control is required, avoiding abrupt interruptions that may cause reactive hypoglycemia. The catheter insertion site should be evaluated daily for signs of infection, and dressing changes should be performed every 48-72 hours with aseptic technique. Transition to enteral nutrition should be initiated as soon as possible, reducing TPN proportionally.",
    "monitorizacionEs": "La monitorizacion de la NPT incluye evaluacion diaria de balance hidrico, glucosa capilar cada 6 horas hasta estabilizacion, electrolitos sericos (sodio, potasio, cloro, fosforo, magnesio, calcio) cada 24-48 horas en la fase inicial y posteriormente dos veces por semana. Las pruebas de funcion hepatica y trigliceridos se miden semanalmente. La prealbumina serica se evalua cada 7-10 dias como marcador de respuesta nutricional aguda. Se realiza calorimetria indirecta cuando esta disponible para ajustar el aporte calorico al gasto energetico real. El balance nitrogenado se calcula semanalmente para evaluar la adecuacion proteica. Se debe vigilar la aparicion de colestasis hepatica asociada a NPT en uso prolongado.",
    "monitorizacionEn": "TPN monitoring includes daily fluid balance assessment, capillary glucose every 6 hours until stabilization, serum electrolytes (sodium, potassium, chloride, phosphorus, magnesium, calcium) every 24-48 hours in the initial phase and subsequently twice weekly. Liver function tests and triglycerides are measured weekly. Serum prealbumin is assessed every 7-10 days as a marker of acute nutritional response. Indirect calorimetry is performed when available to adjust caloric intake to actual energy expenditure. Nitrogen balance is calculated weekly to evaluate protein adequacy. Development of TPN-associated hepatic cholestasis should be monitored during prolonged use.",
    "complicacionesEs": [
      "Infecciones asociadas a cateter venoso central (bacteriemia por linea)",
      "Sindrome de realimentacion con hipofosfatemia, hipopotasemia e hipomagnesemia severas",
      "Hiperglucemia y resistencia a la insulina",
      "Colestasis hepatica y esteatosis por NPT prolongada",
      "Hipertrigliceridemia por exceso de emulsion lipidica",
      "Trombosis venosa asociada al cateter central",
      "Deficiencias de micronutrientes (zinc, cobre, selenio, manganeso)",
      "Atrofia de la mucosa intestinal por desuso prolongado",
      "Complicaciones mecanicas del cateter (neumotorax, hemotorax, malposicion)"
    ],
    "complicacionesEn": [
      "Central venous catheter-associated infections (line bacteremia)",
      "Refeeding syndrome with severe hypophosphatemia, hypokalemia, and hypomagnesemia",
      "Hyperglycemia and insulin resistance",
      "Hepatic cholestasis and steatosis from prolonged TPN",
      "Hypertriglyceridemia from excess lipid emulsion",
      "Venous thrombosis associated with central catheter",
      "Micronutrient deficiencies (zinc, copper, selenium, manganese)",
      "Intestinal mucosal atrophy from prolonged disuse",
      "Mechanical catheter complications (pneumothorax, hemothorax, malposition)"
    ],
    "contraindicacionesEs": [
      "Tracto gastrointestinal funcional y accesible para nutricion enteral",
      "Inestabilidad hemodinamica severa no resuelta",
      "Hipertrigliceridemia severa no controlada (mayor a 400 mg/dL)",
      "Pacientes con pronostico terminal en los que no se busca prolongar la vida",
      "Coagulopatia severa no corregida que impida acceso venoso central"
    ],
    "contraindicacionesEn": [
      "Functional and accessible gastrointestinal tract for enteral nutrition",
      "Unresolved severe hemodynamic instability",
      "Uncontrolled severe hypertriglyceridemia (greater than 400 mg/dL)",
      "Terminal patients in whom life prolongation is not sought",
      "Severe uncorrected coagulopathy preventing central venous access"
    ],
    "cuandoConsultarEs": "Consultar al equipo de soporte nutricional o nutricion clinica cuando el paciente no pueda alcanzar al menos el 60% de sus requerimientos caloricos por via enteral en un plazo de 5-7 dias, cuando se presenten complicaciones metabolicas repetidas, cuando se requiera NPT domiciliaria prolongada, o cuando haya deterioro del estado nutricional a pesar de la intervencion actual.",
    "cuandoConsultarEn": "Consult the nutritional support or clinical nutrition team when the patient cannot achieve at least 60% of caloric requirements by enteral route within 5-7 days, when repeated metabolic complications occur, when prolonged home TPN is required, or when nutritional status deteriorates despite current intervention."
  },
  {
    "id": "nutricion-enteral",
    "nombreEs": "Nutricion Enteral",
    "nombreEn": "Enteral Nutrition",
    "categoriaEs": "Soporte Nutricional",
    "categoriaEn": "Nutritional Support",
    "descripcionEs": "La nutricion enteral consiste en la administracion de nutrientes directamente al tracto gastrointestinal a traves de sondas o estomas cuando el paciente no puede cubrir sus requerimientos nutricionales por ingesta oral voluntaria. Es la via preferida de soporte nutricional siempre que el intestino sea funcional, dado que mantiene la integridad de la barrera intestinal, previene la translocacion bacteriana y es mas fisiologica y economica que la nutricion parenteral. Las formulas enterales varian en composicion, osmolaridad y contenido de fibra, permitiendo su adaptacion a distintas condiciones clinicas como insuficiencia renal, hepatica, diabetes o necesidades inmunomoduladoras. La seleccion del tipo de acceso (nasogastrico, nasoenteral, gastrostomia o yeyunostomia) depende de la duracion prevista del soporte y el riesgo de aspiracion.",
    "descripcionEn": "Enteral nutrition involves delivering nutrients directly to the gastrointestinal tract through tubes or stomas when the patient cannot meet nutritional requirements through voluntary oral intake. It is the preferred route for nutritional support whenever the intestine is functional, as it maintains intestinal barrier integrity, prevents bacterial translocation, and is more physiological and cost-effective than parenteral nutrition. Enteral formulas vary in composition, osmolarity, and fiber content, allowing adaptation to different clinical conditions such as renal insufficiency, hepatic failure, diabetes, or immunomodulatory needs. Selection of access type (nasogastric, nasoenteral, gastrostomy, or jejunostomy) depends on the anticipated duration of support and aspiration risk.",
    "indicacionesEs": [
      "Disfagia severa por patologia neurologica (ictus, ELA, Parkinson avanzado)",
      "Pacientes criticos con ventilacion mecanica y tracto GI funcional",
      "Desnutricion severa con ingesta oral insuficiente (menos del 50% de requerimientos)",
      "Quemaduras extensas con demandas metabolicas aumentadas",
      "Traumatismo craneoencefalico con alteracion del nivel de conciencia",
      "Cancer de cabeza y cuello que impide la deglucion",
      "Fistulas enterocutaneas de bajo gasto accesibles distalmente",
      "Enfermedad inflamatoria intestinal como terapia primaria (especialmente en pediatria)",
      "Preparacion nutricional prequirurgica en pacientes desnutridos"
    ],
    "indicacionesEn": [
      "Severe dysphagia due to neurological pathology (stroke, ALS, advanced Parkinson's)",
      "Critically ill patients on mechanical ventilation with functional GI tract",
      "Severe malnutrition with insufficient oral intake (less than 50% of requirements)",
      "Extensive burns with increased metabolic demands",
      "Traumatic brain injury with altered level of consciousness",
      "Head and neck cancer preventing swallowing",
      "Low-output enterocutaneous fistulas accessible distally",
      "Inflammatory bowel disease as primary therapy (especially in pediatrics)",
      "Preoperative nutritional preparation in malnourished patients"
    ],
    "principiosEs": "Los principios fundamentales de la nutricion enteral incluyen el inicio temprano (dentro de las primeras 24-48 horas de ingreso en UCI cuando sea posible), la progresion gradual del volumen para mejorar la tolerancia gastrointestinal, y la seleccion de la formula apropiada segun la condicion clinica. El aporte calorico objetivo es de 25-30 kcal/kg/dia con 1.2-2.0 g/kg/dia de proteinas en pacientes criticos. Se prefiere la alimentacion continua por bomba en pacientes criticos para mejorar la tolerancia, mientras que la alimentacion intermitente en bolos es mas fisiologica para pacientes estables. La posicion semisentada (30-45 grados) durante y despues de la alimentacion reduce el riesgo de broncoaspiracion.",
    "principiosEn": "Fundamental principles of enteral nutrition include early initiation (within the first 24-48 hours of ICU admission when possible), gradual volume progression to improve gastrointestinal tolerance, and selection of the appropriate formula based on clinical condition. Caloric target is 25-30 kcal/kg/day with 1.2-2.0 g/kg/day of protein in critically ill patients. Continuous pump feeding is preferred in critically ill patients to improve tolerance, while intermittent bolus feeding is more physiological for stable patients. Semi-upright positioning (30-45 degrees) during and after feeding reduces the risk of aspiration.",
    "implementacionEs": "La implementacion comienza con la evaluacion nutricional completa y la seleccion del tipo de acceso enteral. Para soporte a corto plazo (menos de 4-6 semanas), se utiliza sonda nasogastrica o nasoenteral; para soporte prolongado, se realiza gastrostomia endoscopica percutanea (PEG) o yeyunostomia quirurgica. La verificacion de la posicion de la sonda se confirma mediante radiografia. Se inicia con velocidad baja (10-20 mL/h en infusion continua o 50-100 mL por bolo) y se incrementa cada 4-8 horas segun tolerancia hasta alcanzar el objetivo calorico. El residuo gastrico se monitoriza cada 4-6 horas; volumenes superiores a 500 mL requieren suspender temporalmente la alimentacion. Se administra agua libre adicional para cubrir requerimientos hidricos. La formula se selecciona considerando polimerica estandar como primera opcion, o formulas especializadas (peptidica, renal, hepatica, diabetica) segun la patologia.",
    "implementacionEn": "Implementation begins with complete nutritional assessment and selection of enteral access type. For short-term support (less than 4-6 weeks), nasogastric or nasoenteral tube is used; for prolonged support, percutaneous endoscopic gastrostomy (PEG) or surgical jejunostomy is performed. Tube position verification is confirmed by radiography. Initiation starts at low rate (10-20 mL/h in continuous infusion or 50-100 mL per bolus) and increases every 4-8 hours as tolerated until caloric goal is reached. Gastric residual is monitored every 4-6 hours; volumes exceeding 500 mL require temporary feeding suspension. Additional free water is administered to cover hydration requirements. Formula selection considers standard polymeric as first choice, or specialized formulas (peptide-based, renal, hepatic, diabetic) based on pathology.",
    "monitorizacionEs": "La monitorizacion incluye evaluacion diaria de tolerancia gastrointestinal (distension abdominal, nausea, vomito, diarrea, estreñimiento), residuo gastrico en alimentacion gastrica, balance hidrico y control glucemico. Los electrolitos sericos se miden diariamente en la fase inicial y luego 2-3 veces por semana. El peso corporal se registra al menos dos veces por semana. La prealbumina o transferrina se evaluan semanalmente como indicadores de respuesta nutricional. Se monitoriza la funcion intestinal y las caracteristicas de las deposiciones. La evaluacion del sitio de la sonda o estoma se realiza diariamente para detectar erosion, infeccion local o desplazamiento.",
    "monitorizacionEn": "Monitoring includes daily assessment of gastrointestinal tolerance (abdominal distension, nausea, vomiting, diarrhea, constipation), gastric residual in gastric feeding, fluid balance, and glycemic control. Serum electrolytes are measured daily in the initial phase and then 2-3 times weekly. Body weight is recorded at least twice weekly. Prealbumin or transferrin is assessed weekly as nutritional response indicators. Intestinal function and stool characteristics are monitored. Tube or stoma site evaluation is performed daily to detect erosion, local infection, or displacement.",
    "complicacionesEs": [
      "Broncoaspiracion del contenido gastrico con neumonia aspirativa",
      "Diarrea osmotica o asociada a Clostridium difficile",
      "Obstruccion de la sonda por formulas espesas o medicamentos",
      "Erosion nasal o esofagica por sonda nasogastrica prolongada",
      "Infeccion del sitio de gastrostomia o yeyunostomia",
      "Sindrome de realimentacion en pacientes severamente desnutridos",
      "Distension abdominal e intolerancia gastrointestinal",
      "Hiperglucemia en pacientes con diabetes o estres metabolico",
      "Desplazamiento o migracion de la sonda"
    ],
    "complicacionesEn": [
      "Aspiration of gastric contents with aspiration pneumonia",
      "Osmotic diarrhea or Clostridium difficile-associated diarrhea",
      "Tube obstruction from thick formulas or medications",
      "Nasal or esophageal erosion from prolonged nasogastric tube",
      "Gastrostomy or jejunostomy site infection",
      "Refeeding syndrome in severely malnourished patients",
      "Abdominal distension and gastrointestinal intolerance",
      "Hyperglycemia in patients with diabetes or metabolic stress",
      "Tube displacement or migration"
    ],
    "contraindicacionesEs": [
      "Obstruccion intestinal mecanica completa",
      "Isquemia mesenterica aguda o sospecha de perforacion intestinal",
      "Hemorragia digestiva activa severa",
      "Ileo paralitico severo sin actividad intestinal",
      "Inestabilidad hemodinamica con requerimiento de vasopresores en dosis altas"
    ],
    "contraindicacionesEn": [
      "Complete mechanical intestinal obstruction",
      "Acute mesenteric ischemia or suspected intestinal perforation",
      "Severe active gastrointestinal hemorrhage",
      "Severe paralytic ileus without intestinal activity",
      "Hemodynamic instability requiring high-dose vasopressors"
    ],
    "cuandoConsultarEs": "Consultar al servicio de nutricion clinica cuando la ingesta oral sea inferior al 50% de los requerimientos por mas de 3-5 dias, cuando se requiera seleccion de formulas especializadas, cuando se presenten complicaciones como diarrea intratable o intolerancia persistente, o cuando se planifique la transicion a nutricion oral o el retiro del acceso enteral.",
    "cuandoConsultarEn": "Consult the clinical nutrition service when oral intake is less than 50% of requirements for more than 3-5 days, when specialized formula selection is needed, when complications such as intractable diarrhea or persistent intolerance occur, or when transition to oral nutrition or enteral access removal is planned."
  },
  {
    "id": "desnutricion-hospitalaria",
    "nombreEs": "Desnutricion Hospitalaria",
    "nombreEn": "Hospital Malnutrition",
    "categoriaEs": "Deficit Nutricional",
    "categoriaEn": "Nutritional Deficit",
    "descripcionEs": "La desnutricion hospitalaria es una condicion prevalente que afecta al 20-50% de los pacientes hospitalizados, asociandose a mayor morbimortalidad, estancias hospitalarias prolongadas, aumento de infecciones nosocomiales y mayores costos sanitarios. Se caracteriza por un desequilibrio entre la ingesta de nutrientes y los requerimientos del organismo, agravado por el estres metabolico de la enfermedad aguda, procedimientos quirurgicos o enfermedades cronicas subyacentes. El tamizaje nutricional sistematico al ingreso hospitalario es fundamental para la deteccion temprana, utilizando herramientas validadas como el NRS-2002, MUST o SGA. La intervencion nutricional oportuna mejora significativamente los desenlaces clinicos, reduce las readmisiones y acorta la recuperacion funcional del paciente.",
    "descripcionEn": "Hospital malnutrition is a prevalent condition affecting 20-50% of hospitalized patients, associated with increased morbidity and mortality, prolonged hospital stays, increased nosocomial infections, and higher healthcare costs. It is characterized by an imbalance between nutrient intake and body requirements, aggravated by the metabolic stress of acute illness, surgical procedures, or underlying chronic diseases. Systematic nutritional screening at hospital admission is essential for early detection, using validated tools such as NRS-2002, MUST, or SGA. Timely nutritional intervention significantly improves clinical outcomes, reduces readmissions, and shortens the patient's functional recovery.",
    "indicacionesEs": [
      "Pacientes con perdida de peso involuntaria mayor al 5% en un mes o 10% en seis meses",
      "Indice de masa corporal inferior a 18.5 kg/m2 en adultos",
      "Ingesta alimentaria reducida a menos del 50% de requerimientos por mas de 5 dias",
      "Pacientes con enfermedades cronicas catabolicas (cancer, EPOC, insuficiencia cardiaca)",
      "Adultos mayores hospitalizados con fragilidad o sarcopenia",
      "Pacientes en UCI con estres metabolico severo",
      "Perioperatorio de cirugias mayores abdominales o toracicas",
      "Pacientes con enfermedades gastrointestinales que afectan la absorcion"
    ],
    "indicacionesEn": [
      "Patients with involuntary weight loss greater than 5% in one month or 10% in six months",
      "Body mass index below 18.5 kg/m2 in adults",
      "Food intake reduced to less than 50% of requirements for more than 5 days",
      "Patients with chronic catabolic diseases (cancer, COPD, heart failure)",
      "Hospitalized elderly patients with frailty or sarcopenia",
      "ICU patients with severe metabolic stress",
      "Perioperative period of major abdominal or thoracic surgeries",
      "Patients with gastrointestinal diseases affecting absorption"
    ],
    "principiosEs": "El abordaje de la desnutricion hospitalaria se fundamenta en tres pilares: tamizaje universal al ingreso (dentro de las primeras 24-48 horas), evaluacion nutricional completa en pacientes de riesgo, e intervencion nutricional escalonada. La estrategia sigue un algoritmo progresivo: primero optimizar la dieta hospitalaria y la ingesta oral con enriquecimiento calorico-proteico, luego suplementos nutricionales orales (SNO), seguido de nutricion enteral si la via oral es insuficiente, y finalmente nutricion parenteral cuando el tracto GI no sea utilizable. Los requerimientos proteicos son criticos: 1.2-1.5 g/kg/dia en la mayoria de pacientes hospitalizados, pudiendo llegar a 2.0 g/kg/dia en pacientes criticos. La prevencion del sindrome de realimentacion es esencial en desnutricion severa.",
    "principiosEn": "The approach to hospital malnutrition is based on three pillars: universal screening at admission (within the first 24-48 hours), complete nutritional assessment in at-risk patients, and stepwise nutritional intervention. The strategy follows a progressive algorithm: first optimize hospital diet and oral intake with caloric-protein enrichment, then oral nutritional supplements (ONS), followed by enteral nutrition if oral route is insufficient, and finally parenteral nutrition when the GI tract is not usable. Protein requirements are critical: 1.2-1.5 g/kg/day in most hospitalized patients, potentially reaching 2.0 g/kg/day in critically ill patients. Prevention of refeeding syndrome is essential in severe malnutrition.",
    "implementacionEs": "La implementacion de un programa contra la desnutricion hospitalaria requiere establecer protocolos institucionales de tamizaje nutricional obligatorio al ingreso, utilizando herramientas como NRS-2002 (preferido en hospitalizados) o MUST. Los pacientes identificados en riesgo reciben evaluacion nutricional completa por nutriologo clinico, incluyendo antropometria, composicion corporal, valoracion bioquimica (albumina, prealbumina, proteina C reactiva) y evaluacion funcional (fuerza de prension). El plan nutricional individualizado incluye modificacion de la dieta hospitalaria (textura, enriquecimiento, fraccionamiento), prescripcion de SNO hipercaloricos e hiperproteicos (al menos 400 kcal y 30 g de proteina al dia), y educacion al paciente y familia. Se debe implementar un sistema de seguimiento durante la hospitalizacion con evaluaciones semanales y planificacion del soporte nutricional al alta.",
    "implementacionEn": "Implementation of a hospital malnutrition program requires establishing institutional protocols for mandatory nutritional screening at admission, using tools such as NRS-2002 (preferred for hospitalized patients) or MUST. Patients identified as at-risk receive complete nutritional assessment by a clinical nutritionist, including anthropometry, body composition, biochemical evaluation (albumin, prealbumin, C-reactive protein), and functional assessment (grip strength). The individualized nutritional plan includes hospital diet modification (texture, enrichment, fractionation), prescription of hypercaloric and hyperprotein ONS (at least 400 kcal and 30 g protein per day), and patient and family education. A monitoring system during hospitalization with weekly assessments and nutritional support planning at discharge should be implemented.",
    "monitorizacionEs": "El seguimiento incluye registro diario de ingesta alimentaria (porcentaje de bandeja consumida), peso corporal al menos dos veces por semana, evaluacion bioquimica semanal (prealbumina como marcador de respuesta a corto plazo, proteina C reactiva para contexto inflamatorio, balance nitrogenado en UCI), valoracion de la tolerancia a la via de alimentacion, y evaluacion funcional periodica. Se utilizan indicadores de calidad como el porcentaje de pacientes tamizados al ingreso, el tiempo hasta la intervencion nutricional, la adecuacion calorico-proteica alcanzada, y la prevalencia de desnutricion al egreso. La transicion al ambulatorio debe incluir plan nutricional escrito y seguimiento por consulta externa de nutricion.",
    "monitorizacionEn": "Monitoring includes daily food intake recording (percentage of tray consumed), body weight at least twice weekly, weekly biochemical assessment (prealbumin as a short-term response marker, C-reactive protein for inflammatory context, nitrogen balance in ICU), feeding route tolerance evaluation, and periodic functional assessment. Quality indicators are used such as percentage of patients screened at admission, time to nutritional intervention, caloric-protein adequacy achieved, and malnutrition prevalence at discharge. Outpatient transition should include a written nutritional plan and follow-up through nutrition outpatient clinic.",
    "complicacionesEs": [
      "Mayor incidencia de infecciones nosocomiales y dehiscencia de heridas",
      "Sarcopenia y deterioro funcional progresivo",
      "Ulceras por presion por perdida de masa muscular y tejido subcutaneo",
      "Sindrome de realimentacion al reiniciar nutricion en desnutricion severa",
      "Prolongacion de ventilacion mecanica por debilidad de musculatura respiratoria",
      "Inmunosupresion con mayor riesgo de sepsis",
      "Retraso en la cicatrizacion y consolidacion de fracturas",
      "Mayor tasa de readmisiones hospitalarias a 30 dias"
    ],
    "complicacionesEn": [
      "Higher incidence of nosocomial infections and wound dehiscence",
      "Sarcopenia and progressive functional deterioration",
      "Pressure ulcers from loss of muscle mass and subcutaneous tissue",
      "Refeeding syndrome when restarting nutrition in severe malnutrition",
      "Prolonged mechanical ventilation due to respiratory muscle weakness",
      "Immunosuppression with higher sepsis risk",
      "Delayed wound healing and fracture consolidation",
      "Higher 30-day hospital readmission rates"
    ],
    "contraindicacionesEs": [
      "No existen contraindicaciones para la evaluacion nutricional",
      "El soporte nutricional agresivo debe evitarse en pacientes terminales cuando no se alinee con objetivos de cuidado",
      "La realimentacion rapida esta contraindicada en desnutricion severa (riesgo de sindrome de realimentacion)",
      "Formulas hiperproteicas contraindicadas en encefalopatia hepatica aguda sin tratamiento",
      "Suplementos ricos en potasio contraindicados en hiperpotasemia no controlada"
    ],
    "contraindicacionesEn": [
      "There are no contraindications for nutritional assessment",
      "Aggressive nutritional support should be avoided in terminal patients when not aligned with care goals",
      "Rapid refeeding is contraindicated in severe malnutrition (refeeding syndrome risk)",
      "Hyperprotein formulas contraindicated in acute untreated hepatic encephalopathy",
      "Potassium-rich supplements contraindicated in uncontrolled hyperkalemia"
    ],
    "cuandoConsultarEs": "Solicitar valoracion nutricional especializada cuando el tamizaje identifique riesgo nutricional moderado o alto (NRS-2002 mayor o igual a 3), cuando el paciente presente perdida ponderal significativa, cuando la ingesta oral sea persistentemente baja a pesar de intervenciones dieteticas, cuando se requiera soporte enteral o parenteral, o cuando se planifique cirugia mayor en un paciente con sospecha de desnutricion.",
    "cuandoConsultarEn": "Request specialized nutritional assessment when screening identifies moderate or high nutritional risk (NRS-2002 score 3 or higher), when the patient presents significant weight loss, when oral intake remains persistently low despite dietary interventions, when enteral or parenteral support is required, or when major surgery is planned in a patient with suspected malnutrition."
  },
  {
    "id": "fenilcetonuria-dieta",
    "nombreEs": "Manejo Dietetico de la Fenilcetonuria (PKU)",
    "nombreEn": "Phenylketonuria (PKU) Diet Management",
    "categoriaEs": "Error Metabolico",
    "categoriaEn": "Metabolic Error",
    "descripcionEs": "La fenilcetonuria (PKU) es un error innato del metabolismo de herencia autosomica recesiva causado por la deficiencia de la enzima fenilalanina hidroxilasa, lo que resulta en la acumulacion toxica de fenilalanina (Phe) en sangre y tejidos, particularmente en el sistema nervioso central. Sin tratamiento dietetico desde el periodo neonatal, causa discapacidad intelectual severa e irreversible, convulsiones, trastornos del comportamiento y eczema. El pilar del tratamiento es una dieta restringida en fenilalanina de por vida, complementada con formulas metabolicas libres de fenilalanina que aportan aminoacidos esenciales, vitaminas y minerales. Los avances terapeuticos incluyen la sapropterina (BH4) como cofactor para formas respondedoras y la terapia de sustitucion enzimatica con pegvaliasa para adultos con PKU.",
    "descripcionEn": "Phenylketonuria (PKU) is an autosomal recessive inborn error of metabolism caused by deficiency of the enzyme phenylalanine hydroxylase, resulting in toxic accumulation of phenylalanine (Phe) in blood and tissues, particularly the central nervous system. Without dietary treatment from the neonatal period, it causes severe irreversible intellectual disability, seizures, behavioral disorders, and eczema. The treatment cornerstone is a lifelong phenylalanine-restricted diet supplemented with phenylalanine-free metabolic formulas providing essential amino acids, vitamins, and minerals. Therapeutic advances include sapropterin (BH4) as a cofactor for responsive forms and enzyme substitution therapy with pegvaliase for adults with PKU.",
    "indicacionesEs": [
      "Recien nacidos con tamizaje neonatal positivo para hiperfenilalaninemia",
      "Niveles de fenilalanina en sangre superiores a 6 mg/dL (360 micromol/L) en neonatos",
      "Pacientes con PKU clasica (Phe mayor a 20 mg/dL sin tratamiento)",
      "Pacientes con PKU moderada o leve que requieran restriccion dietetica",
      "Mujeres con PKU en edad fertil que planifiquen embarazo (PKU materna)",
      "Pacientes con PKU que inicien tratamiento con sapropterina (requieren ajuste dietetico)",
      "Adolescentes y adultos con PKU que hayan abandonado la dieta y presenten sintomas neurocognitivos"
    ],
    "indicacionesEn": [
      "Newborns with positive neonatal screening for hyperphenylalaninemia",
      "Blood phenylalanine levels above 6 mg/dL (360 micromol/L) in neonates",
      "Patients with classic PKU (Phe greater than 20 mg/dL untreated)",
      "Patients with moderate or mild PKU requiring dietary restriction",
      "Women with PKU of childbearing age planning pregnancy (maternal PKU)",
      "Patients with PKU starting sapropterin therapy (requiring dietary adjustment)",
      "Adolescents and adults with PKU who abandoned diet and present neurocognitive symptoms"
    ],
    "principiosEs": "El principio fundamental es mantener los niveles plasmaticos de fenilalanina dentro de rangos terapeuticos: 2-6 mg/dL (120-360 micromol/L) en niños menores de 12 años, y 2-10 mg/dL en adolescentes y adultos, siendo el rango mas estricto de 2-4 mg/dL durante el embarazo para prevenir el sindrome de PKU materna. La dieta se basa en la restriccion de alimentos ricos en proteinas naturales (carne, pescado, huevos, lacteos, legumbres, frutos secos) y el uso de formulas metabolicas libres de Phe que proporcionan el 75-85% del aporte proteico total. La tolerancia individual a la fenilalanina varia segun la actividad residual de la enzima. Se permiten frutas, verduras bajas en proteina y productos especiales bajos en Phe. La suplementacion con tirosina es necesaria ya que se convierte en aminoacido esencial en estos pacientes.",
    "principiosEn": "The fundamental principle is maintaining plasma phenylalanine levels within therapeutic ranges: 2-6 mg/dL (120-360 micromol/L) in children under 12 years, and 2-10 mg/dL in adolescents and adults, with the stricter range of 2-4 mg/dL during pregnancy to prevent maternal PKU syndrome. The diet is based on restricting foods rich in natural protein (meat, fish, eggs, dairy, legumes, nuts) and using Phe-free metabolic formulas providing 75-85% of total protein intake. Individual phenylalanine tolerance varies according to residual enzyme activity. Fruits, low-protein vegetables, and special low-Phe products are permitted. Tyrosine supplementation is necessary as it becomes an essential amino acid in these patients.",
    "implementacionEs": "La implementacion comienza con el diagnostico neonatal mediante tamizaje (idealmente antes de los 10 dias de vida) y la restriccion inmediata de fenilalanina en la alimentacion. En lactantes, se combina formula metabolica libre de Phe con leche materna o formula infantil en proporciones calculadas para mantener niveles adecuados. Conforme el niño crece, se introduce una dieta solida con alimentos naturales de bajo contenido en Phe y productos especiales (pan, pasta, harina bajos en proteina). Se asigna una cuota diaria de fenilalanina (en miligramos) distribuida en las comidas, generalmente 200-500 mg/dia en PKU clasica. La formula metabolica debe fraccionarse en 3-4 tomas diarias para optimizar la utilizacion de aminoacidos. Se requiere educacion nutricional continua al paciente y familia, incluyendo lectura de etiquetas nutricionales y calculo de intercambios de Phe. En la PKU materna, el control estricto debe iniciarse al menos 3 meses antes de la concepcion.",
    "implementacionEn": "Implementation begins with neonatal diagnosis through screening (ideally before 10 days of life) and immediate phenylalanine restriction in feeding. In infants, Phe-free metabolic formula is combined with breast milk or infant formula in calculated proportions to maintain adequate levels. As the child grows, a solid diet is introduced with natural low-Phe foods and special products (low-protein bread, pasta, flour). A daily phenylalanine quota (in milligrams) is assigned distributed across meals, generally 200-500 mg/day in classic PKU. Metabolic formula should be divided into 3-4 daily doses to optimize amino acid utilization. Continuous nutritional education for the patient and family is required, including reading nutritional labels and calculating Phe exchanges. In maternal PKU, strict control should begin at least 3 months before conception.",
    "monitorizacionEs": "Los niveles de fenilalanina en sangre se monitorizan semanalmente en neonatos y lactantes, quincenalmente en preescolares, y mensualmente en niños mayores, adolescentes y adultos con buen control. Durante el embarazo, se requieren niveles semanales o bisemanales. La monitorizacion incluye aminoacidos plasmaticos completos (especialmente tirosina), marcadores nutricionales (prealbumina, ferritina, vitamina B12, acido folico, vitamina D, zinc, selenio), evaluacion del crecimiento y desarrollo neuropsicologico periodico en pediatria, densitometria osea periodica, y evaluacion de adherencia dietetica mediante registros alimentarios de 3 dias. La evaluacion neurocognitiva se recomienda anualmente en edad escolar.",
    "monitorizacionEn": "Blood phenylalanine levels are monitored weekly in neonates and infants, biweekly in preschoolers, and monthly in older children, adolescents, and adults with good control. During pregnancy, weekly or biweekly levels are required. Monitoring includes complete plasma amino acids (especially tyrosine), nutritional markers (prealbumin, ferritin, vitamin B12, folic acid, vitamin D, zinc, selenium), growth and periodic neuropsychological development evaluation in pediatrics, periodic bone densitometry, and dietary adherence evaluation through 3-day food records. Neurocognitive evaluation is recommended annually during school age.",
    "complicacionesEs": [
      "Discapacidad intelectual si no se inicia tratamiento en periodo neonatal",
      "Deficiencias nutricionales por dieta restrictiva (hierro, zinc, vitamina B12, acidos grasos omega-3)",
      "Osteopenia y osteoporosis por restriccion de lacteos y calcio",
      "Trastornos del comportamiento y sintomas psiquiatricos con niveles elevados de Phe",
      "Sindrome de PKU materna: microcefalia, cardiopatia congenita y retraso del crecimiento fetal",
      "Dificultad de adherencia dietetica en adolescencia y edad adulta",
      "Deterioro neurocognitivo en adultos que abandonan la dieta",
      "Alteraciones en la sustancia blanca cerebral detectadas por resonancia magnetica"
    ],
    "complicacionesEn": [
      "Intellectual disability if treatment is not started in the neonatal period",
      "Nutritional deficiencies from restrictive diet (iron, zinc, vitamin B12, omega-3 fatty acids)",
      "Osteopenia and osteoporosis from dairy and calcium restriction",
      "Behavioral disorders and psychiatric symptoms with elevated Phe levels",
      "Maternal PKU syndrome: microcephaly, congenital heart disease, and fetal growth restriction",
      "Dietary adherence difficulty in adolescence and adulthood",
      "Neurocognitive deterioration in adults who abandon the diet",
      "White matter alterations in the brain detected by MRI"
    ],
    "contraindicacionesEs": [
      "No existe contraindicacion para la dieta restringida en Phe en pacientes con PKU confirmada",
      "La restriccion excesiva de Phe por debajo de 1 mg/dL puede causar catabolismo y deficiencia de crecimiento",
      "La sapropterina esta contraindicada en pacientes no respondedores a la prueba de carga de BH4",
      "Las formulas metabolicas hiperproteicas requieren ajuste en insuficiencia renal concomitante"
    ],
    "contraindicacionesEn": [
      "There is no contraindication for Phe-restricted diet in patients with confirmed PKU",
      "Excessive Phe restriction below 1 mg/dL can cause catabolism and growth deficiency",
      "Sapropterin is contraindicated in patients non-responsive to BH4 loading test",
      "Hyperprotein metabolic formulas require adjustment in concomitant renal insufficiency"
    ],
    "cuandoConsultarEs": "Consultar al equipo de metabolismo y nutricion especializada en errores innatos del metabolismo ante todo recien nacido con tamizaje positivo para PKU, cuando los niveles de fenilalanina esten persistentemente fuera de rango a pesar de adherencia dietetica, durante la planificacion preconcepcional en mujeres con PKU, cuando se considere iniciar terapia con sapropterina o pegvaliasa, o cuando existan signos de deterioro neurocognitivo en pacientes previamente estables.",
    "cuandoConsultarEn": "Consult the metabolism and specialized nutrition team for inborn errors of metabolism for any newborn with positive PKU screening, when phenylalanine levels are persistently out of range despite dietary adherence, during preconception planning in women with PKU, when starting sapropterin or pegvaliase therapy is considered, or when there are signs of neurocognitive deterioration in previously stable patients."
  },
  {
    "id": "enfermedad-celiaca-nutricion",
    "nombreEs": "Nutricion en Enfermedad Celiaca",
    "nombreEn": "Celiac Disease Nutrition",
    "categoriaEs": "Intolerancia",
    "categoriaEn": "Intolerance",
    "descripcionEs": "La enfermedad celiaca es una enteropatia autoinmune desencadenada por la ingestion de gluten (proteinas presentes en trigo, cebada y centeno) en individuos geneticamente predispuestos con HLA-DQ2 o HLA-DQ8. La exposicion al gluten causa inflamacion cronica de la mucosa del intestino delgado con atrofia de vellosidades, hiperplasia de criptas e infiltracion linfocitaria, resultando en malabsorcion de nutrientes. El unico tratamiento efectivo es una dieta estricta libre de gluten (DLG) de por vida, que permite la recuperacion histologica de la mucosa intestinal en la mayoria de los pacientes. La prevalencia global es del 1% de la poblacion, aunque se estima que hasta el 85% de los casos permanecen sin diagnosticar. El manejo nutricional no solo implica la eliminacion del gluten, sino tambien la correccion de deficiencias nutricionales frecuentes.",
    "descripcionEn": "Celiac disease is an autoimmune enteropathy triggered by ingestion of gluten (proteins found in wheat, barley, and rye) in genetically predisposed individuals with HLA-DQ2 or HLA-DQ8. Gluten exposure causes chronic inflammation of the small intestinal mucosa with villous atrophy, crypt hyperplasia, and lymphocytic infiltration, resulting in nutrient malabsorption. The only effective treatment is a strict lifelong gluten-free diet (GFD), which allows histological recovery of the intestinal mucosa in most patients. Global prevalence is 1% of the population, although it is estimated that up to 85% of cases remain undiagnosed. Nutritional management involves not only gluten elimination but also correction of frequent nutritional deficiencies.",
    "indicacionesEs": [
      "Pacientes con diagnostico confirmado de enfermedad celiaca (biopsia + serologia)",
      "Dermatitis herpetiforme confirmada (manifestacion cutanea de enfermedad celiaca)",
      "Ataxia por gluten documentada serologicamente",
      "Pacientes con sensibilidad al gluten no celiaca sintomatica",
      "Familiares de primer grado con serologia positiva y biopsia compatible",
      "Pacientes con deficit selectivo de IgA y anticuerpos IgG positivos con biopsia compatible",
      "Enfermedad celiaca potencial con serologia positiva y sintomas bajo supervision medica"
    ],
    "indicacionesEn": [
      "Patients with confirmed celiac disease diagnosis (biopsy + serology)",
      "Confirmed dermatitis herpetiformis (cutaneous manifestation of celiac disease)",
      "Serologically documented gluten ataxia",
      "Patients with symptomatic non-celiac gluten sensitivity",
      "First-degree relatives with positive serology and compatible biopsy",
      "Patients with selective IgA deficiency and positive IgG antibodies with compatible biopsy",
      "Potential celiac disease with positive serology and symptoms under medical supervision"
    ],
    "principiosEs": "El principio terapeutico central es la eliminacion completa y permanente del gluten de la dieta, manteniendo el umbral de seguridad por debajo de 20 partes por millon (ppm) segun el Codex Alimentarius. Los cereales permitidos incluyen arroz, maiz, quinoa, amaranto, mijo, trigo sarraceno y avena pura no contaminada. Es fundamental corregir las deficiencias nutricionales secundarias a la malabsorcion: hierro, calcio, vitamina D, acido folico, vitamina B12, zinc y en ocasiones cobre y vitaminas liposolubles. La dieta debe ser equilibrada, variada y nutricionalmente completa, evitando la trampa de reemplazar productos con gluten por alternativas ultraprocesadas ricas en azucares y grasas. La educacion sobre contaminacion cruzada y lectura de etiquetas es esencial para el exito terapeutico.",
    "principiosEn": "The central therapeutic principle is complete and permanent elimination of gluten from the diet, maintaining the safety threshold below 20 parts per million (ppm) according to the Codex Alimentarius. Permitted grains include rice, corn, quinoa, amaranth, millet, buckwheat, and pure uncontaminated oats. Correcting nutritional deficiencies secondary to malabsorption is fundamental: iron, calcium, vitamin D, folic acid, vitamin B12, zinc, and occasionally copper and fat-soluble vitamins. The diet must be balanced, varied, and nutritionally complete, avoiding the trap of replacing gluten-containing products with ultra-processed alternatives rich in sugars and fats. Education about cross-contamination and label reading is essential for therapeutic success.",
    "implementacionEs": "La implementacion comienza con educacion detallada al paciente y familia sobre la dieta libre de gluten inmediatamente tras el diagnostico. Se proporciona listado completo de alimentos permitidos, prohibidos y de riesgo. Los alimentos naturalmente libres de gluten son la base de la dieta: carnes, pescados, huevos, frutas, verduras, legumbres, arroz, maiz, papa y lacteos. Se enseña la identificacion de fuentes ocultas de gluten: salsas, aderezos, embutidos, medicamentos, suplementos y productos cosmeticos de uso oral. La prevencion de contaminacion cruzada en el hogar incluye utensilios separados, superficies dedicadas y almacenamiento independiente. Se suplementan las deficiencias detectadas: hierro oral (si ferritina baja), calcio 1000-1500 mg/dia con vitamina D 1000-2000 UI/dia, acido folico y vitamina B12 segun niveles. Se recomienda consulta con nutriologo especializado en enfermedad celiaca y conexion con asociaciones de pacientes.",
    "implementacionEn": "Implementation begins with detailed education to the patient and family about the gluten-free diet immediately after diagnosis. A complete list of allowed, prohibited, and at-risk foods is provided. Naturally gluten-free foods form the diet's foundation: meats, fish, eggs, fruits, vegetables, legumes, rice, corn, potato, and dairy. Identification of hidden gluten sources is taught: sauces, dressings, processed meats, medications, supplements, and oral-use cosmetic products. Cross-contamination prevention at home includes separate utensils, dedicated surfaces, and independent storage. Detected deficiencies are supplemented: oral iron (if ferritin is low), calcium 1000-1500 mg/day with vitamin D 1000-2000 IU/day, folic acid, and vitamin B12 as per levels. Consultation with a nutritionist specialized in celiac disease and connection with patient associations is recommended.",
    "monitorizacionEs": "El seguimiento incluye evaluacion clinica y serologica a los 6 y 12 meses del inicio de la DLG, y luego anualmente. Los anticuerpos antitransglutaminasa tisular IgA (anti-tTG) son el marcador de eleccion para monitorizar la adherencia; deben normalizarse en 6-12 meses con dieta estricta. Se realiza analitica nutricional completa: hemograma, perfil de hierro, calcio, vitamina D, vitamina B12, acido folico, albumina, pruebas hepaticas. La densitometria osea se recomienda al diagnostico en adultos y en seguimiento a los 1-2 años si existe osteoporosis. La biopsia duodenal de control se considera a los 12-24 meses en adultos para confirmar recuperacion histologica. Se evalua la calidad de vida, adherencia dietetica y estado psicologico del paciente. Los niños requieren seguimiento del crecimiento y desarrollo puberal.",
    "monitorizacionEn": "Follow-up includes clinical and serological evaluation at 6 and 12 months after GFD initiation, and then annually. Tissue transglutaminase IgA antibodies (anti-tTG) are the marker of choice for monitoring adherence; they should normalize within 6-12 months with strict diet. Complete nutritional laboratory work is performed: complete blood count, iron profile, calcium, vitamin D, vitamin B12, folic acid, albumin, liver function tests. Bone densitometry is recommended at diagnosis in adults and at 1-2 year follow-up if osteoporosis is present. Control duodenal biopsy is considered at 12-24 months in adults to confirm histological recovery. Quality of life, dietary adherence, and patient psychological status are evaluated. Children require growth and pubertal development monitoring.",
    "complicacionesEs": [
      "Osteoporosis y fracturas por malabsorcion cronica de calcio y vitamina D",
      "Anemia ferropenica refractaria a hierro oral por malabsorcion intestinal",
      "Linfoma intestinal de celulas T asociado a enteropatia (raro pero grave)",
      "Enfermedad celiaca refractaria que no responde a dieta libre de gluten",
      "Deficiencias multiples de vitaminas y minerales",
      "Mayor riesgo de otras enfermedades autoinmunes (diabetes tipo 1, tiroiditis)",
      "Infertilidad y complicaciones obstetricas si no se trata",
      "Depresion, ansiedad y deterioro de calidad de vida",
      "Hipoplasia del esmalte dental en niños"
    ],
    "complicacionesEn": [
      "Osteoporosis and fractures from chronic calcium and vitamin D malabsorption",
      "Iron deficiency anemia refractory to oral iron due to intestinal malabsorption",
      "Enteropathy-associated T-cell lymphoma (rare but serious)",
      "Refractory celiac disease not responding to gluten-free diet",
      "Multiple vitamin and mineral deficiencies",
      "Higher risk of other autoimmune diseases (type 1 diabetes, thyroiditis)",
      "Infertility and obstetric complications if untreated",
      "Depression, anxiety, and quality of life deterioration",
      "Dental enamel hypoplasia in children"
    ],
    "contraindicacionesEs": [
      "No iniciar dieta libre de gluten antes de completar el proceso diagnostico (serologia y biopsia)",
      "No se recomienda dieta libre de gluten como medida general de salud sin diagnostico confirmado",
      "Evitar productos sin gluten ultraprocesados como base de la alimentacion",
      "No restringir avena pura si se ha confirmado tolerancia individual",
      "No reintroducir gluten en pacientes diagnosticados para verificar el diagnostico sin supervision medica"
    ],
    "contraindicacionesEn": [
      "Do not start gluten-free diet before completing the diagnostic process (serology and biopsy)",
      "Gluten-free diet is not recommended as a general health measure without confirmed diagnosis",
      "Avoid ultra-processed gluten-free products as the dietary foundation",
      "Do not restrict pure oats if individual tolerance has been confirmed",
      "Do not reintroduce gluten in diagnosed patients to verify diagnosis without medical supervision"
    ],
    "cuandoConsultarEs": "Consultar al gastroenterologo y nutriologo especializado cuando los anticuerpos no disminuyan tras 6-12 meses de dieta, cuando persistan sintomas a pesar de adherencia aparentemente adecuada (considerar enfermedad celiaca refractaria o contaminacion inadvertida), cuando se detecte osteoporosis significativa, cuando haya sospecha de linfoma intestinal, o cuando el paciente presente dificultades psicologicas importantes relacionadas con la restriccion dietetica.",
    "cuandoConsultarEn": "Consult gastroenterologist and specialized nutritionist when antibodies do not decrease after 6-12 months of diet, when symptoms persist despite apparently adequate adherence (consider refractory celiac disease or inadvertent contamination), when significant osteoporosis is detected, when intestinal lymphoma is suspected, or when the patient presents significant psychological difficulties related to dietary restriction."
  },
  {
    "id": "nutricion-renal",
    "nombreEs": "Nutricion Renal (Dieta en Enfermedad Renal Cronica)",
    "nombreEn": "Renal Nutrition (Chronic Kidney Disease Diet)",
    "categoriaEs": "Nutricion Especializada",
    "categoriaEn": "Specialized Nutrition",
    "descripcionEs": "La nutricion renal es una disciplina especializada que adapta la alimentacion a las necesidades metabolicas alteradas por la enfermedad renal cronica (ERC), abarcando desde estadios tempranos con funcion residual hasta la terapia de reemplazo renal (hemodialisis, dialisis peritoneal) y el trasplante renal. A medida que la funcion renal declina, se acumulan productos de desecho nitrogenado y se alteran los equilibrios de electrolitos, liquidos, minerales oseos y estado acido-base. El manejo nutricional busca retrasar la progresion de la enfermedad renal, prevenir la uremia sintomatica, mantener un estado nutricional adecuado y manejar las complicaciones metabolicas. Las recomendaciones varían significativamente segun el estadio de la ERC y la modalidad de tratamiento, requiriendo individualizacion por un nutriologo renal especializado.",
    "descripcionEn": "Renal nutrition is a specialized discipline that adapts diet to the altered metabolic needs of chronic kidney disease (CKD), ranging from early stages with residual function to renal replacement therapy (hemodialysis, peritoneal dialysis) and renal transplantation. As kidney function declines, nitrogenous waste products accumulate and electrolyte, fluid, bone mineral, and acid-base balances are disrupted. Nutritional management aims to delay kidney disease progression, prevent symptomatic uremia, maintain adequate nutritional status, and manage metabolic complications. Recommendations vary significantly according to CKD stage and treatment modality, requiring individualization by a specialized renal nutritionist.",
    "indicacionesEs": [
      "Enfermedad renal cronica en cualquier estadio (ERC 1-5) con alteraciones metabolicas",
      "Pacientes en hemodialisis cronica (3 sesiones semanales o mas)",
      "Pacientes en dialisis peritoneal ambulatoria continua (DPAC) o automatizada",
      "Receptores de trasplante renal en todas las fases (pretrasplante, postrasplante inmediato y tardio)",
      "Sindrome nefrotico con proteinuria masiva e hipoalbuminemia",
      "Lesion renal aguda con necesidad de soporte nutricional",
      "Pacientes con ERC y diabetes mellitus concomitante",
      "Nefropatia diabetica con albuminuria progresiva"
    ],
    "indicacionesEn": [
      "Chronic kidney disease at any stage (CKD 1-5) with metabolic alterations",
      "Patients on chronic hemodialysis (3 or more weekly sessions)",
      "Patients on continuous ambulatory peritoneal dialysis (CAPD) or automated peritoneal dialysis",
      "Renal transplant recipients in all phases (pre-transplant, immediate and late post-transplant)",
      "Nephrotic syndrome with massive proteinuria and hypoalbuminemia",
      "Acute kidney injury requiring nutritional support",
      "Patients with CKD and concomitant diabetes mellitus",
      "Diabetic nephropathy with progressive albuminuria"
    ],
    "principiosEs": "Los principios de la nutricion renal se adaptan al estadio de la ERC. En estadios 1-3a, el enfasis esta en controlar las comorbilidades (diabetes, hipertension) con restriccion moderada de sodio a menos de 2 g/dia y proteinas normales (0.8 g/kg/dia). En estadios 3b-5 predialiticos, se restringe la proteina a 0.6-0.8 g/kg/dia de alto valor biologico para reducir la generacion de toxinas uremicas, se limita el fosforo a 800-1000 mg/dia, el potasio a 2000-3000 mg/dia segun niveles sericos, y los liquidos segun la diuresis residual. En hemodialisis, los requerimientos proteicos aumentan a 1.0-1.2 g/kg/dia debido a las perdidas durante la dialisis, se mantiene la restriccion de sodio, potasio y fosforo, y se controlan los liquidos para limitar la ganancia interdialitica a menos de 2-3 kg. En dialisis peritoneal, se permite mayor ingesta de potasio pero se requiere mayor aporte proteico (1.2-1.3 g/kg/dia) por las perdidas peritoneales.",
    "principiosEn": "Renal nutrition principles are adapted to CKD stage. In stages 1-3a, emphasis is on controlling comorbidities (diabetes, hypertension) with moderate sodium restriction to less than 2 g/day and normal protein (0.8 g/kg/day). In stages 3b-5 pre-dialysis, protein is restricted to 0.6-0.8 g/kg/day of high biological value to reduce uremic toxin generation, phosphorus is limited to 800-1000 mg/day, potassium to 2000-3000 mg/day based on serum levels, and fluids according to residual urine output. In hemodialysis, protein requirements increase to 1.0-1.2 g/kg/day due to dialysis losses, sodium, potassium, and phosphorus restrictions are maintained, and fluids are controlled to limit interdialytic weight gain to less than 2-3 kg. In peritoneal dialysis, higher potassium intake is permitted but greater protein intake (1.2-1.3 g/kg/day) is required due to peritoneal losses.",
    "implementacionEs": "La implementacion comienza con la evaluacion nutricional completa utilizando herramientas especificas para ERC como el SGA renal, antropometria incluyendo composicion corporal por bioimpedancia, y marcadores bioquimicos. Se elabora un plan alimentario personalizado que considere las restricciones necesarias segun el estadio, las preferencias culturales y la capacidad economica del paciente. Se proporciona educacion practica sobre conteccion de alimentos ricos en potasio (tecnica de remojo y doble coccion de verduras), identificacion de fosforo oculto en aditivos alimentarios (fosfatos de sodio, potasio y calcio en alimentos procesados), y metodos de coccion que reduzcan el sodio sin sacrificar sabor. Se ajustan los quelantes de fosforo (carbonato de calcio, sevelamero, carbonato de lantano) con las comidas segun el contenido de fosforo. Se monitoriza y trata el trastorno mineral oseo asociado a ERC con control de PTH, suplementacion de vitamina D activa y mantenimiento del calcio en rango. La educacion continua y el apoyo al paciente son fundamentales para la adherencia a largo plazo.",
    "implementacionEn": "Implementation begins with complete nutritional assessment using CKD-specific tools such as renal SGA, anthropometry including body composition by bioimpedance, and biochemical markers. A personalized dietary plan is developed considering necessary restrictions based on stage, cultural preferences, and the patient's economic capacity. Practical education is provided on managing potassium-rich foods (soaking and double-boiling technique for vegetables), identification of hidden phosphorus in food additives (sodium, potassium, and calcium phosphates in processed foods), and cooking methods that reduce sodium without sacrificing flavor. Phosphate binders (calcium carbonate, sevelamer, lanthanum carbonate) are adjusted with meals according to phosphorus content. CKD-associated mineral bone disorder is monitored and treated with PTH control, active vitamin D supplementation, and maintenance of calcium within range. Continuous education and patient support are fundamental for long-term adherence.",
    "monitorizacionEs": "La monitorizacion nutricional en ERC incluye evaluacion mensual del peso corporal y estado de hidratacion, control bioquimico mensual en dialisis (albumina, fosforo, potasio, calcio, PTH intacta, bicarbonato), evaluacion trimestral de marcadores nutricionales (prealbumina, colesterol, transferrina), calculo trimestral del nPNA (tasa de aparicion de nitrogeno proteico normalizada) como indicador de ingesta proteica, y valoracion semestral de composicion corporal. Se monitorizan los parametros de adecuacion dialitica (Kt/V) que impactan directamente el estado nutricional. Los niveles de 25-OH vitamina D se evaluan semestralmente. Se vigila la aparicion de sindrome de desgaste proteico-energetico (PEW), definido por criterios de la ISRNM que incluyen bioquimica, masa corporal, masa muscular e ingesta alimentaria reducida.",
    "monitorizacionEn": "Nutritional monitoring in CKD includes monthly body weight and hydration status assessment, monthly biochemical control in dialysis (albumin, phosphorus, potassium, calcium, intact PTH, bicarbonate), quarterly nutritional marker evaluation (prealbumin, cholesterol, transferrin), quarterly calculation of nPNA (normalized protein nitrogen appearance rate) as a protein intake indicator, and semiannual body composition assessment. Dialysis adequacy parameters (Kt/V) that directly impact nutritional status are monitored. 25-OH vitamin D levels are assessed semiannually. Development of protein-energy wasting (PEW) syndrome is monitored, defined by ISRNM criteria including biochemistry, body mass, muscle mass, and reduced dietary intake.",
    "complicacionesEs": [
      "Sindrome de desgaste proteico-energetico (desnutricion uremica)",
      "Hiperfosfatemia con calcificaciones vasculares y enfermedad osea",
      "Hiperpotasemia con riesgo de arritmias cardiacas",
      "Sobrecarga de volumen con edema pulmonar y hipertension",
      "Hiperparatiroidismo secundario con osteodistrofia renal",
      "Acidosis metabolica que promueve catabolismo muscular",
      "Deficiencia de vitaminas hidrosolubles perdidas en dialisis (vitamina C, B6, acido folico)",
      "Anemia por deficiencia de hierro y eritropoyetina",
      "Resistencia a la insulina e hiperglucemia en pacientes diabeticos"
    ],
    "complicacionesEn": [
      "Protein-energy wasting syndrome (uremic malnutrition)",
      "Hyperphosphatemia with vascular calcifications and bone disease",
      "Hyperkalemia with risk of cardiac arrhythmias",
      "Volume overload with pulmonary edema and hypertension",
      "Secondary hyperparathyroidism with renal osteodystrophy",
      "Metabolic acidosis promoting muscle catabolism",
      "Water-soluble vitamin deficiency lost in dialysis (vitamin C, B6, folic acid)",
      "Iron and erythropoietin deficiency anemia",
      "Insulin resistance and hyperglycemia in diabetic patients"
    ],
    "contraindicacionesEs": [
      "La restriccion proteica severa esta contraindicada en pacientes en hemodialisis (requieren mayor aporte)",
      "No restringir potasio sin documentar hiperpotasemia (riesgo de hipopotasemia)",
      "Dietas muy bajas en proteina no supervisadas pueden causar desnutricion",
      "Suplementos de potasio contraindicados en ERC avanzada con hiperpotasemia",
      "La suplementacion excesiva de calcio esta contraindicada con hiperfosfatemia no controlada (riesgo de calcificacion)"
    ],
    "contraindicacionesEn": [
      "Severe protein restriction is contraindicated in hemodialysis patients (they require higher intake)",
      "Do not restrict potassium without documenting hyperkalemia (risk of hypokalemia)",
      "Very low protein diets without supervision can cause malnutrition",
      "Potassium supplements are contraindicated in advanced CKD with hyperkalemia",
      "Excessive calcium supplementation is contraindicated with uncontrolled hyperphosphatemia (calcification risk)"
    ],
    "cuandoConsultarEs": "Referir al nutriologo renal cuando se diagnostique ERC estadio 3b o superior, al iniciar terapia de reemplazo renal, cuando la albumina serica sea inferior a 3.5 g/dL, cuando el potasio o fosforo sericos esten persistentemente fuera de rango, cuando haya perdida ponderal involuntaria mayor al 5% en 3 meses, cuando se diagnostique sindrome de desgaste proteico-energetico, o en la fase de preparacion para trasplante renal.",
    "cuandoConsultarEn": "Refer to renal nutritionist when CKD stage 3b or higher is diagnosed, when starting renal replacement therapy, when serum albumin is below 3.5 g/dL, when serum potassium or phosphorus are persistently out of range, when there is involuntary weight loss greater than 5% in 3 months, when protein-energy wasting syndrome is diagnosed, or during renal transplant preparation phase."
  },
  {
    "id": "nutricion-oncologica",
    "nombreEs": "Nutricion Oncologica",
    "nombreEn": "Oncology Nutrition",
    "categoriaEs": "Nutricion Especializada",
    "categoriaEn": "Specialized Nutrition",
    "descripcionEs": "La nutricion oncologica es el area de la nutricion clinica dedicada a optimizar el estado nutricional de pacientes con cancer, desde el diagnostico hasta la supervivencia o los cuidados al final de la vida. La desnutricion afecta al 40-80% de los pacientes oncologicos y es factor independiente de peor pronostico, mayor toxicidad al tratamiento, menor respuesta terapeutica y deterioro de la calidad de vida. La caquexia asociada al cancer es un sindrome metabolico complejo caracterizado por perdida progresiva e involuntaria de masa muscular esqueletica (con o sin perdida de grasa) que no es completamente reversible con soporte nutricional convencional y conduce a deterioro funcional progresivo. El abordaje nutricional debe ser proactivo, iniciandose desde el momento del diagnostico y adaptandose a cada fase del tratamiento oncologico: neoadyuvancia, cirugia, quimioterapia, radioterapia y seguimiento.",
    "descripcionEn": "Oncology nutrition is the area of clinical nutrition dedicated to optimizing the nutritional status of cancer patients, from diagnosis through survivorship or end-of-life care. Malnutrition affects 40-80% of oncology patients and is an independent factor for worse prognosis, greater treatment toxicity, lower therapeutic response, and quality of life deterioration. Cancer-associated cachexia is a complex metabolic syndrome characterized by progressive involuntary loss of skeletal muscle mass (with or without fat loss) that is not fully reversible with conventional nutritional support and leads to progressive functional deterioration. The nutritional approach should be proactive, initiated from the time of diagnosis and adapted to each phase of oncological treatment: neoadjuvant therapy, surgery, chemotherapy, radiation therapy, and follow-up.",
    "indicacionesEs": [
      "Todo paciente con diagnostico de cancer debe recibir tamizaje y evaluacion nutricional",
      "Canceres del tracto gastrointestinal superior (esofago, estomago, pancreas) con alto riesgo nutricional",
      "Canceres de cabeza y cuello que afectan la deglucion y la alimentacion oral",
      "Pacientes en tratamiento con quimioterapia que presenten toxicidad gastrointestinal",
      "Pacientes sometidos a radioterapia en abdomen, pelvis o cabeza y cuello",
      "Precaquexia o caquexia por cancer documentada",
      "Cirugias oncologicas mayores del aparato digestivo (esofagectomia, gastrectomia, pancreatectomia)",
      "Pacientes con perdida de peso mayor al 5% en los ultimos 3 meses",
      "Trasplante de progenitores hematopoyeticos con mucositis"
    ],
    "indicacionesEn": [
      "Every patient with cancer diagnosis should receive nutritional screening and assessment",
      "Upper gastrointestinal cancers (esophagus, stomach, pancreas) with high nutritional risk",
      "Head and neck cancers affecting swallowing and oral feeding",
      "Patients on chemotherapy presenting gastrointestinal toxicity",
      "Patients undergoing radiation therapy to abdomen, pelvis, or head and neck",
      "Documented cancer pre-cachexia or cachexia",
      "Major oncological surgeries of the digestive tract (esophagectomy, gastrectomy, pancreatectomy)",
      "Patients with weight loss greater than 5% in the last 3 months",
      "Hematopoietic stem cell transplant with mucositis"
    ],
    "principiosEs": "Los principios de la nutricion oncologica se basan en la intervencion temprana y la individualizacion del tratamiento. Los requerimientos energeticos son de 25-30 kcal/kg/dia, con aporte proteico elevado de 1.0-1.5 g/kg/dia para contrarrestar el catabolismo tumoral. Se prioriza la via oral con enriquecimiento calorico-proteico y suplementos nutricionales orales, progresando a nutricion enteral cuando la ingesta oral sea insuficiente y a nutricion parenteral solo cuando el tracto GI no sea funcional. Los acidos grasos omega-3 (EPA/DHA) tienen evidencia de beneficio antiinflamatorio y anticaquectico a dosis de al menos 2 g/dia de EPA. El ejercicio fisico adaptado es componente integral para preservar la masa muscular. La inmunonutricion perioperatoria con arginina, omega-3 y nucleotidos reduce complicaciones infecciosas en cirugia oncologica mayor. Se deben abordar las barreras a la alimentacion: nausea, mucositis, disgeusia, anorexia, disfagia y depresion.",
    "principiosEn": "Oncology nutrition principles are based on early intervention and treatment individualization. Energy requirements are 25-30 kcal/kg/day, with high protein intake of 1.0-1.5 g/kg/day to counteract tumor catabolism. Oral route is prioritized with caloric-protein enrichment and oral nutritional supplements, progressing to enteral nutrition when oral intake is insufficient and to parenteral nutrition only when the GI tract is not functional. Omega-3 fatty acids (EPA/DHA) have evidence of anti-inflammatory and anti-cachectic benefit at doses of at least 2 g/day of EPA. Adapted physical exercise is an integral component for preserving muscle mass. Perioperative immunonutrition with arginine, omega-3, and nucleotides reduces infectious complications in major oncological surgery. Barriers to eating must be addressed: nausea, mucositis, dysgeusia, anorexia, dysphagia, and depression.",
    "implementacionEs": "La implementacion comienza con el tamizaje nutricional utilizando herramientas validadas en oncologia como el MST (Malnutrition Screening Tool) o PG-SGA (Patient-Generated Subjective Global Assessment), que debe realizarse al diagnostico y repetirse regularmente durante el tratamiento. Se elabora un plan nutricional individualizado que incluya: modificacion de textura y consistencia segun la tolerancia (dieta blanda, triturada o liquida en mucositis o disfagia), enriquecimiento calorico de las comidas con aceite de oliva, aguacate, frutos secos, queso y suplementos modulares de proteinas, prescripcion de SNO hipercaloricos-hiperproteicos (al menos 400 kcal y 30 g proteina adicionales al dia), manejo farmacologico de sintomas que impiden la ingesta (antiemeticos, estimulantes del apetito como acetato de megestrol o corticosteroides a corto plazo, analgesia oral para mucositis). Se planifica la inmunonutricion 5-7 dias antes de la cirugia oncologica mayor. En pacientes con acceso enteral, se seleccionan formulas especializadas con omega-3 y alta densidad calorica. Se coordina con el equipo oncologico para anticipar los efectos secundarios nutricionales de cada ciclo de tratamiento.",
    "implementacionEn": "Implementation begins with nutritional screening using oncology-validated tools such as MST (Malnutrition Screening Tool) or PG-SGA (Patient-Generated Subjective Global Assessment), which should be performed at diagnosis and repeated regularly during treatment. An individualized nutritional plan is developed including: texture and consistency modification according to tolerance (soft, pureed, or liquid diet for mucositis or dysphagia), caloric enrichment of meals with olive oil, avocado, nuts, cheese, and modular protein supplements, prescription of hypercaloric-hyperprotein ONS (at least 400 kcal and 30 g additional protein per day), pharmacological management of symptoms preventing intake (antiemetics, appetite stimulants such as megestrol acetate or short-term corticosteroids, oral analgesia for mucositis). Immunonutrition is planned 5-7 days before major oncological surgery. For patients with enteral access, specialized formulas with omega-3 and high caloric density are selected. Coordination with the oncology team anticipates the nutritional side effects of each treatment cycle.",
    "monitorizacionEs": "La monitorizacion incluye evaluacion del peso corporal y composicion corporal (idealmente con BIA o TC a nivel de L3 para cuantificar masa muscular) al inicio, antes de cada ciclo de tratamiento y mensualmente. Se registra la ingesta alimentaria y la tolerancia a los alimentos en cada consulta. Los marcadores bioquimicos incluyen albumina, prealbumina, proteina C reactiva (para distinguir desnutricion inflamatoria), perfil de hierro, vitamina D, vitamina B12 y hemograma. Se evalua la fuerza muscular mediante dinamometria de mano como indicador funcional. El PG-SGA se repite en cada visita para detectar cambios en el estado nutricional. Se monitoriza la respuesta a la inmunonutricion perioperatoria mediante tasa de complicaciones infecciosas. En caquexia, se evaluan los marcadores inflamatorios (PCR, IL-6) y la masa muscular seriada. Se documenta la calidad de vida relacionada con la nutricion usando cuestionarios validados.",
    "monitorizacionEn": "Monitoring includes body weight and body composition evaluation (ideally with BIA or CT at L3 level to quantify muscle mass) at baseline, before each treatment cycle, and monthly. Food intake and food tolerance are recorded at each visit. Biochemical markers include albumin, prealbumin, C-reactive protein (to distinguish inflammatory malnutrition), iron profile, vitamin D, vitamin B12, and complete blood count. Muscle strength is evaluated by hand dynamometry as a functional indicator. PG-SGA is repeated at each visit to detect changes in nutritional status. Response to perioperative immunonutrition is monitored through infectious complication rates. In cachexia, inflammatory markers (CRP, IL-6) and serial muscle mass are evaluated. Nutrition-related quality of life is documented using validated questionnaires.",
    "complicacionesEs": [
      "Caquexia por cancer con perdida muscular progresiva e irreversible",
      "Sarcopenia que aumenta la toxicidad a quimioterapia y reduce la supervivencia",
      "Mucositis oral y gastrointestinal grados 3-4 que impide la alimentacion",
      "Sindrome de dumping despues de gastrectomia o esofagectomia",
      "Insuficiencia pancreatica exocrina tras pancreatectomia",
      "Malabsorcion por enteritis radica cronica",
      "Desnutricion severa que obliga a retrasar o suspender el tratamiento oncologico",
      "Sindrome de realimentacion al reiniciar nutricion en pacientes severamente desnutridos",
      "Deficiencias de micronutrientes que afectan la funcion inmune y la cicatrizacion"
    ],
    "complicacionesEn": [
      "Cancer cachexia with progressive and irreversible muscle loss",
      "Sarcopenia that increases chemotherapy toxicity and reduces survival",
      "Grade 3-4 oral and gastrointestinal mucositis preventing feeding",
      "Dumping syndrome after gastrectomy or esophagectomy",
      "Exocrine pancreatic insufficiency after pancreatectomy",
      "Malabsorption from chronic radiation enteritis",
      "Severe malnutrition forcing delay or suspension of oncological treatment",
      "Refeeding syndrome when restarting nutrition in severely malnourished patients",
      "Micronutrient deficiencies affecting immune function and wound healing"
    ],
    "contraindicacionesEs": [
      "No existe contraindicacion para la evaluacion y el consejo nutricional en ningun paciente oncologico",
      "La nutricion parenteral no esta indicada en pacientes con tracto GI funcional y adecuado",
      "Los estimulantes del apetito con corticosteroides estan contraindicados a largo plazo por efectos catabolicos",
      "La alimentacion forzada no esta indicada en pacientes en cuidados paliativos al final de la vida si no es su deseo",
      "Las megadosis de antioxidantes estan contraindicadas durante la quimioterapia y radioterapia por posible interferencia"
    ],
    "contraindicacionesEn": [
      "There is no contraindication for nutritional assessment and counseling in any oncology patient",
      "Parenteral nutrition is not indicated in patients with functional and adequate GI tract",
      "Appetite stimulants with corticosteroids are contraindicated long-term due to catabolic effects",
      "Forced feeding is not indicated in end-of-life palliative care patients if it is not their wish",
      "Megadoses of antioxidants are contraindicated during chemotherapy and radiation therapy due to possible interference"
    ],
    "cuandoConsultarEs": "Referir al servicio de nutricion oncologica al momento del diagnostico de cancer, especialmente en tumores de alto riesgo nutricional (cabeza y cuello, gastrointestinal, pancreas, pulmon). Consultar urgentemente cuando la perdida de peso exceda el 5% en un mes, cuando la ingesta oral sea menor al 50% de requerimientos por mas de una semana, cuando se planifique cirugia oncologica mayor para iniciar inmunonutricion preoperatoria, cuando se presente caquexia refractaria, o cuando se requiera soporte nutricional enteral o parenteral.",
    "cuandoConsultarEn": "Refer to oncology nutrition service at the time of cancer diagnosis, especially in tumors with high nutritional risk (head and neck, gastrointestinal, pancreatic, lung). Urgently consult when weight loss exceeds 5% in one month, when oral intake is less than 50% of requirements for more than one week, when major oncological surgery is planned to initiate preoperative immunonutrition, when refractory cachexia presents, or when enteral or parenteral nutritional support is required."
  }
]`);

export function buscarNutricionClinica(termino: string): NutricionClinicaEntry[] {
  const t = termino.toLowerCase();
  return NUTRICION_CLINICA_ENTRIES.filter(
    (e) =>
      e.nombreEs.toLowerCase().includes(t) ||
      e.nombreEn.toLowerCase().includes(t) ||
      e.descripcionEs.toLowerCase().includes(t) ||
      e.descripcionEn.toLowerCase().includes(t)
  );
}

export function getNutricionClinicaById(
  id: string
): NutricionClinicaEntry | undefined {
  return NUTRICION_CLINICA_ENTRIES.find((e) => e.id === id);
}

export function getNutricionClinicaPorCategoria(
  categoria: string
): NutricionClinicaEntry[] {
  const c = categoria.toLowerCase();
  return NUTRICION_CLINICA_ENTRIES.filter(
    (e) =>
      e.categoriaEs.toLowerCase().includes(c) ||
      e.categoriaEn.toLowerCase().includes(c)
  );
}
