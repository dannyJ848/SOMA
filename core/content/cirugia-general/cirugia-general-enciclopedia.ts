/**
 * SOMA - Enciclopedia de Cirugía General
 * Guía completa de procedimientos de cirugía general para educación del paciente
 * ESPAÑOL PRIMERO / English secondary
 * 7 procedimientos quirúrgicos con información detallada bilingüe
 */

// --- Interface ---

export interface CirugiaGeneralEntry {
  id: string;
  nombreEs: string;
  nombreEn: string;
  descripcionEs: string;
  descripcionEn: string;
  categoriaEs: string;
  categoriaEn: string;
  indicacionesEs: string[];
  indicacionesEn: string[];
  procedimientoEs: string;
  procedimientoEn: string;
  preparacionEs: string;
  preparacionEn: string;
  recuperacionEs: string;
  recuperacionEn: string;
  riesgosEs: string[];
  riesgosEn: string[];
  cuidadosPostoperatoriosEs: string;
  cuidadosPostoperatoriosEn: string;
  cuandoConsultarEs: string;
  cuandoConsultarEn: string;
}

// --- Data (JSON.parse to avoid TS2590) ---

export const CIRUGIA_GENERAL_ENTRIES: CirugiaGeneralEntry[] = JSON.parse(`[
  {
    "id": "apendicectomia",
    "nombreEs": "Apendicectomía",
    "nombreEn": "Appendectomy",
    "descripcionEs": "La apendicectomía es la extirpación quirúrgica del apéndice vermiforme, un pequeño órgano tubular unido al ciego en la parte inferior derecha del abdomen. Es una de las cirugías de emergencia más frecuentes en todo el mundo y se realiza principalmente para tratar la apendicitis aguda, una inflamación del apéndice que puede progresar rápidamente a perforación y peritonitis si no se trata a tiempo. El procedimiento puede realizarse mediante técnica abierta convencional o por vía laparoscópica, siendo esta última la preferida en la mayoría de los centros quirúrgicos modernos debido a su menor dolor postoperatorio, recuperación más rápida y mejores resultados cosméticos. La apendicectomía laparoscópica generalmente requiere tres pequeñas incisiones abdominales de 5 a 12 milímetros, a través de las cuales se introducen la cámara y los instrumentos quirúrgicos.",
    "descripcionEn": "An appendectomy is the surgical removal of the vermiform appendix, a small tubular organ attached to the cecum in the lower right abdomen. It is one of the most common emergency surgeries worldwide and is primarily performed to treat acute appendicitis, an inflammation of the appendix that can rapidly progress to perforation and peritonitis if not treated promptly. The procedure can be performed using a conventional open technique or laparoscopically, with the latter being preferred at most modern surgical centers due to less postoperative pain, faster recovery, and better cosmetic results. Laparoscopic appendectomy typically requires three small abdominal incisions of 5 to 12 millimeters, through which the camera and surgical instruments are introduced.",
    "categoriaEs": "Cirugía abdominal",
    "categoriaEn": "Abdominal surgery",
    "indicacionesEs": [
      "Apendicitis aguda confirmada por examen clínico e imágenes diagnósticas",
      "Dolor abdominal en fosa ilíaca derecha con signos de irritación peritoneal",
      "Apendicitis complicada con perforación, absceso o peritonitis localizada",
      "Apendicitis recurrente o crónica con episodios repetidos de dolor en el cuadrante inferior derecho",
      "Hallazgo incidental de apéndice anormal durante otra cirugía abdominal",
      "Apendicolito (cálculo fecal en el apéndice) identificado en estudios de imagen con síntomas asociados",
      "Tumores apendiculares como carcinoides o mucoceles descubiertos en estudios preoperatorios"
    ],
    "indicacionesEn": [
      "Acute appendicitis confirmed by clinical examination and diagnostic imaging",
      "Right lower quadrant abdominal pain with signs of peritoneal irritation",
      "Complicated appendicitis with perforation, abscess, or localized peritonitis",
      "Recurrent or chronic appendicitis with repeated episodes of right lower quadrant pain",
      "Incidental finding of an abnormal appendix during another abdominal surgery",
      "Appendicolith (fecal stone in the appendix) identified on imaging with associated symptoms",
      "Appendiceal tumors such as carcinoids or mucoceles discovered on preoperative studies"
    ],
    "procedimientoEs": "El paciente recibe anestesia general y se coloca en posición supina. En la técnica laparoscópica, se realiza una incisión periumbilical para introducir el primer trocar y la cámara, seguida de la insuflación del abdomen con dióxido de carbono para crear espacio de trabajo. Se insertan dos trocares adicionales bajo visión directa. Se identifica el apéndice, se diseca su mesoapéndice con instrumento de energía o clips, y se liga la base del apéndice con endoloops o grapadora endoscópica. El apéndice se extrae dentro de una bolsa para evitar contaminación de la herida. Se inspecciona la cavidad abdominal para descartar otras patologías. En la técnica abierta, se realiza una incisión de McBurney o de Rocky-Davis en el cuadrante inferior derecho, se identifica y liga el mesoapéndice y la base apendicular, y se realiza la inversión del muñón o se deja abierto según la preferencia del cirujano.",
    "procedimientoEn": "The patient receives general anesthesia and is placed in the supine position. In the laparoscopic technique, a periumbilical incision is made to introduce the first trocar and camera, followed by insufflation of the abdomen with carbon dioxide to create a working space. Two additional trocars are inserted under direct vision. The appendix is identified, its mesoappendix is dissected with an energy device or clips, and the base of the appendix is ligated with endoloops or an endoscopic stapler. The appendix is extracted inside a retrieval bag to avoid wound contamination. The abdominal cavity is inspected to rule out other pathologies. In the open technique, a McBurney or Rocky-Davis incision is made in the right lower quadrant, the mesoappendix and appendiceal base are identified and ligated, and the stump is inverted or left open according to the surgeon's preference.",
    "preparacionEs": "La preparación para una apendicectomía varía según sea una cirugía de emergencia o electiva. En casos de emergencia, se inicia ayuno inmediato y se administran líquidos intravenosos para corregir la deshidratación. Se realizan análisis de sangre incluyendo hemograma completo, perfil metabólico y prueba de embarazo en mujeres en edad fértil. Se administran antibióticos intravenosos profilácticos de amplio espectro antes de la incisión. El paciente debe informar sobre alergias a medicamentos, anticoagulantes que tome y cirugías abdominales previas. Se puede solicitar tomografía computarizada o ecografía abdominal para confirmar el diagnóstico cuando hay dudas clínicas.",
    "preparacionEn": "Preparation for an appendectomy varies depending on whether it is an emergency or elective surgery. In emergency cases, immediate fasting is initiated and intravenous fluids are administered to correct dehydration. Blood tests are performed including a complete blood count, metabolic profile, and pregnancy test in women of childbearing age. Broad-spectrum prophylactic intravenous antibiotics are administered before the incision. The patient should report drug allergies, anticoagulants they are taking, and previous abdominal surgeries. A CT scan or abdominal ultrasound may be ordered to confirm the diagnosis when there is clinical doubt.",
    "recuperacionEs": "La recuperación tras una apendicectomía laparoscópica no complicada es generalmente rápida. La mayoría de los pacientes son dados de alta dentro de las 24 horas siguientes a la cirugía. El dolor postoperatorio se maneja con analgésicos orales como paracetamol y antiinflamatorios no esteroideos, reservando los opioides para casos de dolor severo. Se recomienda iniciar la deambulación temprana el mismo día de la cirugía para prevenir complicaciones tromboembólicas. La dieta se avanza progresivamente desde líquidos claros hasta dieta regular según la tolerancia del paciente. La mayoría de los pacientes pueden retomar actividades laborales sedentarias en una a dos semanas y actividades físicas intensas en cuatro a seis semanas. En casos de apendicitis complicada con perforación o absceso, la recuperación puede prolongarse y requerir tratamiento antibiótico extendido.",
    "recuperacionEn": "Recovery after an uncomplicated laparoscopic appendectomy is generally rapid. Most patients are discharged within 24 hours of surgery. Postoperative pain is managed with oral analgesics such as acetaminophen and nonsteroidal anti-inflammatory drugs, reserving opioids for severe pain. Early ambulation on the same day of surgery is recommended to prevent thromboembolic complications. The diet is advanced progressively from clear liquids to a regular diet based on patient tolerance. Most patients can resume sedentary work activities within one to two weeks and intense physical activities within four to six weeks. In cases of complicated appendicitis with perforation or abscess, recovery may be prolonged and require extended antibiotic treatment.",
    "riesgosEs": [
      "Infección del sitio quirúrgico superficial o profunda",
      "Formación de absceso intraabdominal postoperatorio",
      "Sangrado intraoperatorio o postoperatorio que requiera reintervención",
      "Lesión inadvertida a estructuras adyacentes como el intestino delgado, ciego o uréter",
      "Íleo postoperatorio prolongado con distensión abdominal y náuseas",
      "Hernia incisional en el sitio del trocar o de la incisión",
      "Reacción adversa a la anestesia general",
      "Trombosis venosa profunda o embolia pulmonar"
    ],
    "riesgosEn": [
      "Superficial or deep surgical site infection",
      "Postoperative intra-abdominal abscess formation",
      "Intraoperative or postoperative bleeding requiring reoperation",
      "Inadvertent injury to adjacent structures such as the small bowel, cecum, or ureter",
      "Prolonged postoperative ileus with abdominal distension and nausea",
      "Incisional hernia at the trocar or incision site",
      "Adverse reaction to general anesthesia",
      "Deep vein thrombosis or pulmonary embolism"
    ],
    "cuidadosPostoperatoriosEs": "Después de la cirugía, mantenga las incisiones limpias y secas durante las primeras 48 horas. Puede ducharse al tercer día evitando sumergir las heridas. Tome los analgésicos prescritos de forma regular durante los primeros días para controlar el dolor. Camine distancias cortas varias veces al día para favorecer la circulación y prevenir complicaciones. Aumente gradualmente su actividad física evitando levantar más de cinco kilogramos durante las primeras cuatro semanas. Consuma una dieta balanceada rica en fibra para prevenir el estreñimiento. Acuda a su cita de seguimiento con el cirujano en una a dos semanas para revisión de las heridas y resultados de patología.",
    "cuidadosPostoperatoriosEn": "After surgery, keep the incisions clean and dry for the first 48 hours. You may shower on the third day while avoiding submerging the wounds. Take prescribed pain medications regularly during the first few days to control pain. Walk short distances several times a day to promote circulation and prevent complications. Gradually increase your physical activity while avoiding lifting more than five kilograms during the first four weeks. Eat a balanced diet rich in fiber to prevent constipation. Attend your follow-up appointment with the surgeon in one to two weeks for wound review and pathology results.",
    "cuandoConsultarEs": "Busque atención médica inmediata si presenta fiebre superior a 38.5 grados centígrados, enrojecimiento creciente o secreción purulenta de las heridas, dolor abdominal severo que no cede con los analgésicos prescritos, distensión abdominal progresiva con incapacidad para tolerar alimentos, vómitos persistentes, o ausencia de gases y evacuaciones por más de tres días después de la cirugía.",
    "cuandoConsultarEn": "Seek immediate medical attention if you develop a fever above 38.5 degrees Celsius, increasing redness or purulent drainage from the wounds, severe abdominal pain not relieved by prescribed analgesics, progressive abdominal distension with inability to tolerate food, persistent vomiting, or absence of flatus and bowel movements for more than three days after surgery."
  },
  {
    "id": "colecistectomia",
    "nombreEs": "Colecistectomía",
    "nombreEn": "Cholecystectomy",
    "descripcionEs": "La colecistectomía es la extirpación quirúrgica de la vesícula biliar, un pequeño órgano piriforme situado debajo del hígado que almacena y concentra la bilis producida por el hígado. Es una de las cirugías abdominales más comúnmente realizadas en el mundo, con más de un millón de procedimientos anuales solo en los Estados Unidos. La causa más frecuente que lleva a esta intervención son los cálculos biliares (colelitiasis) que producen síntomas como dolor abdominal recurrente, colecistitis aguda o complicaciones como coledocolitiasis y pancreatitis biliar. La técnica laparoscópica es el estándar de oro actual, utilizando cuatro pequeños puertos abdominales para acceder a la vesícula y separarla del lecho hepático. Después de la extirpación, el cuerpo humano puede funcionar normalmente sin vesícula biliar, ya que la bilis fluye directamente del hígado al intestino.",
    "descripcionEn": "A cholecystectomy is the surgical removal of the gallbladder, a small pear-shaped organ located beneath the liver that stores and concentrates bile produced by the liver. It is one of the most commonly performed abdominal surgeries in the world, with over one million procedures annually in the United States alone. The most frequent cause leading to this intervention is gallstones (cholelithiasis) producing symptoms such as recurrent abdominal pain, acute cholecystitis, or complications like choledocholithiasis and biliary pancreatitis. The laparoscopic technique is the current gold standard, using four small abdominal ports to access the gallbladder and separate it from the hepatic bed. After removal, the human body can function normally without a gallbladder, as bile flows directly from the liver to the intestine.",
    "categoriaEs": "Cirugía abdominal",
    "categoriaEn": "Abdominal surgery",
    "indicacionesEs": [
      "Colelitiasis sintomática con episodios recurrentes de cólico biliar",
      "Colecistitis aguda con inflamación y dolor persistente en hipocondrio derecho",
      "Coledocolitiasis con cálculos migrados al conducto biliar común",
      "Pancreatitis biliar aguda causada por obstrucción del conducto pancreático por cálculos",
      "Vesícula en porcelana (calcificación de la pared vesicular) por riesgo elevado de cáncer",
      "Pólipos vesiculares mayores de un centímetro con riesgo de malignidad",
      "Discinesia biliar con fracción de eyección vesicular baja confirmada por gammagrafía"
    ],
    "indicacionesEn": [
      "Symptomatic cholelithiasis with recurrent episodes of biliary colic",
      "Acute cholecystitis with inflammation and persistent right upper quadrant pain",
      "Choledocholithiasis with stones migrated to the common bile duct",
      "Acute biliary pancreatitis caused by pancreatic duct obstruction from stones",
      "Porcelain gallbladder (calcification of the gallbladder wall) due to elevated cancer risk",
      "Gallbladder polyps larger than one centimeter with risk of malignancy",
      "Biliary dyskinesia with low gallbladder ejection fraction confirmed by scintigraphy"
    ],
    "procedimientoEs": "Bajo anestesia general, el paciente se coloca en posición supina con inclinación inversa de Trendelenburg y rotación hacia la izquierda para optimizar la exposición. Se establece el neumoperitoneo mediante la introducción de un trocar umbilical y la insuflación con dióxido de carbono a una presión de 12 a 15 milímetros de mercurio. Se insertan tres trocares adicionales en posiciones estándar. Se identifica el triángulo de Calot y se realiza la disección cuidadosa para obtener la visión crítica de seguridad, identificando claramente la arteria cística y el conducto cístico antes de su clipaje y sección. Se separa la vesícula del lecho hepático utilizando electrocauterio, controlando meticulosamente la hemostasia. La vesícula se extrae a través del puerto umbilical dentro de una bolsa de extracción. Se puede realizar colangiografía intraoperatoria si se sospecha coledocolitiasis residual.",
    "procedimientoEn": "Under general anesthesia, the patient is placed in the supine position with reverse Trendelenburg tilt and left rotation to optimize exposure. Pneumoperitoneum is established by introducing an umbilical trocar and insufflating with carbon dioxide at a pressure of 12 to 15 millimeters of mercury. Three additional trocars are inserted at standard positions. Calot's triangle is identified and careful dissection is performed to achieve the critical view of safety, clearly identifying the cystic artery and cystic duct before clipping and dividing them. The gallbladder is separated from the hepatic bed using electrocautery, meticulously controlling hemostasis. The gallbladder is extracted through the umbilical port inside a retrieval bag. Intraoperative cholangiography may be performed if residual choledocholithiasis is suspected.",
    "preparacionEs": "La preparación para una colecistectomía incluye ayuno desde la medianoche anterior al procedimiento. Se realizan estudios preoperatorios que incluyen hemograma completo, pruebas de función hepática, amilasa, lipasa, perfil de coagulación y ecografía abdominal. Los pacientes que toman anticoagulantes deben suspenderlos según las indicaciones del cirujano y el hematólogo, generalmente cinco a siete días antes para warfarina. Se administran antibióticos profilácticos intravenosos en el momento de la inducción anestésica. El paciente debe informar sobre cirugías abdominales previas que puedan dificultar el abordaje laparoscópico. Se recomienda suspender el tabaquismo al menos dos semanas antes de la cirugía para reducir el riesgo de complicaciones pulmonares.",
    "preparacionEn": "Preparation for a cholecystectomy includes fasting from midnight before the procedure. Preoperative studies are performed including a complete blood count, liver function tests, amylase, lipase, coagulation profile, and abdominal ultrasound. Patients taking anticoagulants should discontinue them per the surgeon's and hematologist's instructions, typically five to seven days before for warfarin. Prophylactic intravenous antibiotics are administered at the time of anesthetic induction. The patient should report previous abdominal surgeries that may complicate the laparoscopic approach. Smoking cessation is recommended at least two weeks before surgery to reduce the risk of pulmonary complications.",
    "recuperacionEs": "La mayoría de los pacientes sometidos a colecistectomía laparoscópica son dados de alta el mismo día o al día siguiente de la cirugía. El dolor postoperatorio es generalmente leve a moderado y se controla con analgésicos orales. Es común experimentar dolor referido en el hombro derecho durante los primeros días debido al gas residual de dióxido de carbono que irrita el diafragma. Se recomienda una dieta baja en grasas durante las primeras cuatro a seis semanas mientras el cuerpo se adapta a la ausencia de la vesícula biliar. Los pacientes pueden presentar deposiciones más frecuentes o blandas temporalmente, lo cual se normaliza en la mayoría de los casos. El retorno a actividades laborales sedentarias suele ocurrir en una semana, mientras que la actividad física intensa debe posponerse por tres a cuatro semanas.",
    "recuperacionEn": "Most patients undergoing laparoscopic cholecystectomy are discharged the same day or the day after surgery. Postoperative pain is generally mild to moderate and is controlled with oral analgesics. It is common to experience referred pain in the right shoulder during the first few days due to residual carbon dioxide gas irritating the diaphragm. A low-fat diet is recommended for the first four to six weeks while the body adapts to the absence of the gallbladder. Patients may experience more frequent or loose stools temporarily, which normalizes in most cases. Return to sedentary work activities usually occurs within one week, while intense physical activity should be postponed for three to four weeks.",
    "riesgosEs": [
      "Lesión del conducto biliar común, la complicación más temida que puede requerir reconstrucción quirúrgica compleja",
      "Fuga de bilis postoperatoria por el muñón del conducto cístico o del lecho hepático",
      "Sangrado intraoperatorio, particularmente de la arteria cística o del lecho hepático",
      "Retención de cálculos en el conducto biliar común no detectados durante la cirugía",
      "Lesión térmica a estructuras adyacentes por el uso de electrocauterio",
      "Conversión a cirugía abierta por adherencias densas, inflamación severa o anatomía distorsionada",
      "Infección del sitio quirúrgico o absceso intraabdominal",
      "Síndrome postcolecistecomía con dolor abdominal recurrente y diarrea crónica"
    ],
    "riesgosEn": [
      "Common bile duct injury, the most feared complication that may require complex surgical reconstruction",
      "Postoperative bile leak from the cystic duct stump or hepatic bed",
      "Intraoperative bleeding, particularly from the cystic artery or hepatic bed",
      "Retained stones in the common bile duct undetected during surgery",
      "Thermal injury to adjacent structures from electrocautery use",
      "Conversion to open surgery due to dense adhesions, severe inflammation, or distorted anatomy",
      "Surgical site infection or intra-abdominal abscess",
      "Postcholecystectomy syndrome with recurrent abdominal pain and chronic diarrhea"
    ],
    "cuidadosPostoperatoriosEs": "Mantenga las incisiones limpias y secas durante las primeras 48 horas. Puede ducharse al tercer día con jabón suave, secando las heridas con toques suaves. Siga una dieta baja en grasas durante las primeras semanas, evitando alimentos fritos, comidas grasosas, productos lácteos enteros y salsas pesadas. Introduzca estos alimentos gradualmente según la tolerancia. Tome los analgésicos y laxantes prescritos según las indicaciones. Camine regularmente desde el primer día para promover la recuperación y prevenir la formación de coágulos. Evite conducir mientras tome analgésicos opioides. No levante objetos de más de cinco kilogramos durante las primeras tres semanas. Acuda a la cita de seguimiento en una a dos semanas.",
    "cuidadosPostoperatoriosEn": "Keep the incisions clean and dry for the first 48 hours. You may shower on the third day with mild soap, patting the wounds dry gently. Follow a low-fat diet for the first few weeks, avoiding fried foods, greasy meals, whole dairy products, and heavy sauces. Introduce these foods gradually based on tolerance. Take prescribed pain medications and laxatives as directed. Walk regularly from the first day to promote recovery and prevent blood clot formation. Avoid driving while taking opioid pain medications. Do not lift objects heavier than five kilograms for the first three weeks. Attend your follow-up appointment in one to two weeks.",
    "cuandoConsultarEs": "Consulte de inmediato si presenta fiebre mayor de 38.5 grados centígrados, coloración amarillenta de la piel o los ojos (ictericia), dolor abdominal severo y progresivo que no responde a los analgésicos, náuseas y vómitos persistentes, orina oscura o heces de color arcilla, distensión abdominal marcada, o enrojecimiento, calor o secreción de mal olor en las heridas quirúrgicas.",
    "cuandoConsultarEn": "Consult immediately if you develop fever greater than 38.5 degrees Celsius, yellowing of the skin or eyes (jaundice), severe and progressive abdominal pain unresponsive to analgesics, persistent nausea and vomiting, dark urine or clay-colored stools, marked abdominal distension, or redness, warmth, or foul-smelling discharge from the surgical wounds."
  },
  {
    "id": "hernioplastia-inguinal",
    "nombreEs": "Hernioplastia Inguinal",
    "nombreEn": "Inguinal Hernia Repair",
    "descripcionEs": "La hernioplastia inguinal es la reparación quirúrgica de una hernia inguinal, una condición en la que el contenido abdominal (generalmente intestino delgado o grasa omental) protruye a través de un defecto en la pared muscular de la región inguinal (ingle). Las hernias inguinales son el tipo más común de hernia, representando aproximadamente el 75 por ciento de todas las hernias de la pared abdominal, y afectan predominantemente a hombres. Pueden ser indirectas (a través del anillo inguinal interno, congénitas) o directas (a través del piso del canal inguinal, adquiridas). El tratamiento quirúrgico es el único definitivo, ya que las hernias no se resuelven espontáneamente y tienden a aumentar de tamaño con el tiempo, con el riesgo potencial de incarceración y estrangulación. Las técnicas modernas incluyen la reparación abierta con malla (técnica de Lichtenstein) y las reparaciones laparoscópicas (TAPP y TEP).",
    "descripcionEn": "Inguinal hernia repair is the surgical correction of an inguinal hernia, a condition in which abdominal contents (usually small bowel or omental fat) protrude through a defect in the muscular wall of the inguinal region (groin). Inguinal hernias are the most common type of hernia, representing approximately 75 percent of all abdominal wall hernias, and predominantly affect men. They can be indirect (through the internal inguinal ring, congenital) or direct (through the floor of the inguinal canal, acquired). Surgical treatment is the only definitive option, as hernias do not resolve spontaneously and tend to increase in size over time, with the potential risk of incarceration and strangulation. Modern techniques include open mesh repair (Lichtenstein technique) and laparoscopic repairs (TAPP and TEP).",
    "categoriaEs": "Cirugía de pared abdominal",
    "categoriaEn": "Abdominal wall surgery",
    "indicacionesEs": [
      "Hernia inguinal sintomática con dolor, molestia o sensación de pesadez en la ingle",
      "Hernia inguinal con aumento progresivo de tamaño que dificulta las actividades diarias",
      "Hernia inguinal incarcerada que no se reduce manualmente y requiere intervención urgente",
      "Hernia inguinal estrangulada con compromiso vascular del contenido herniario, emergencia quirúrgica",
      "Hernia inguinal bilateral diagnosticada en evaluación clínica o imagenológica",
      "Hernia inguinal recurrente después de una reparación previa fallida",
      "Hernia inguinal asintomática en pacientes jóvenes activos por riesgo de complicaciones futuras"
    ],
    "indicacionesEn": [
      "Symptomatic inguinal hernia with pain, discomfort, or heaviness sensation in the groin",
      "Inguinal hernia with progressive size increase interfering with daily activities",
      "Incarcerated inguinal hernia that cannot be manually reduced, requiring urgent intervention",
      "Strangulated inguinal hernia with vascular compromise of herniated contents, a surgical emergency",
      "Bilateral inguinal hernia diagnosed on clinical or imaging evaluation",
      "Recurrent inguinal hernia after a previous failed repair",
      "Asymptomatic inguinal hernia in young active patients due to risk of future complications"
    ],
    "procedimientoEs": "En la reparación abierta con técnica de Lichtenstein, se realiza una incisión de aproximadamente seis centímetros sobre el canal inguinal. Se diseca el tejido subcutáneo y se abre la aponeurosis del oblicuo externo para exponer el canal inguinal. Se identifica el cordón espermático (en hombres) o el ligamento redondo (en mujeres) y se aísla cuidadosamente. Se identifica el saco herniario, se reduce su contenido al abdomen, y se coloca una malla de polipropileno que se fija con suturas permanentes al ligamento inguinal, al pubis y a los músculos circundantes para reforzar el piso del canal inguinal. En las técnicas laparoscópicas TAPP o TEP, se accede al espacio preperitoneal a través de trocares abdominales, se reduce la hernia y se coloca una malla amplia que cubre todos los posibles defectos inguinales sin necesidad de fijación con suturas en muchos casos.",
    "procedimientoEn": "In the open Lichtenstein technique repair, an incision of approximately six centimeters is made over the inguinal canal. Subcutaneous tissue is dissected and the external oblique aponeurosis is opened to expose the inguinal canal. The spermatic cord (in men) or round ligament (in women) is identified and carefully isolated. The hernia sac is identified, its contents are reduced into the abdomen, and a polypropylene mesh is placed and secured with permanent sutures to the inguinal ligament, pubis, and surrounding muscles to reinforce the inguinal canal floor. In laparoscopic TAPP or TEP techniques, the preperitoneal space is accessed through abdominal trocars, the hernia is reduced, and a large mesh is placed covering all possible inguinal defects without the need for suture fixation in many cases.",
    "preparacionEs": "La preparación para la hernioplastia inguinal incluye ayuno de al menos ocho horas antes del procedimiento. Se realizan estudios preoperatorios que incluyen hemograma, perfil de coagulación, electrocardiograma en mayores de 40 años y radiografía de tórax si está indicada. Los pacientes deben informar sobre el uso de anticoagulantes o antiplaquetarios, los cuales pueden necesitar suspenderse según el protocolo del cirujano. Se recomienda rasurar el área inguinal la mañana de la cirugía con rasuradora eléctrica, no con cuchilla, para reducir el riesgo de infección. Es importante tratar infecciones respiratorias o urinarias activas antes de la cirugía, ya que la tos y el esfuerzo al orinar pueden comprometer la reparación. Se aconseja dejar de fumar al menos cuatro semanas antes para mejorar la cicatrización.",
    "preparacionEn": "Preparation for inguinal hernia repair includes fasting for at least eight hours before the procedure. Preoperative studies are performed including a blood count, coagulation profile, electrocardiogram in patients over 40, and chest X-ray if indicated. Patients should report the use of anticoagulants or antiplatelet agents, which may need to be discontinued per the surgeon's protocol. Shaving the inguinal area on the morning of surgery with an electric clipper, not a razor blade, is recommended to reduce infection risk. It is important to treat active respiratory or urinary infections before surgery, as coughing and straining during urination can compromise the repair. Quitting smoking at least four weeks prior is advised to improve wound healing.",
    "recuperacionEs": "La recuperación tras una hernioplastia inguinal es generalmente favorable. Los pacientes sometidos a reparación abierta bajo anestesia local o regional pueden ser dados de alta el mismo día. El dolor postoperatorio es variable pero generalmente manejable con analgésicos orales. La mayoría de los pacientes pueden caminar y realizar actividades básicas de la vida diaria desde el primer día postoperatorio. Se recomienda evitar el levantamiento de objetos pesados (más de cinco kilogramos) y actividades físicas intensas durante cuatro a seis semanas para permitir la integración adecuada de la malla. La conducción puede reanudarse cuando el paciente pueda realizar una frenada de emergencia sin dolor, generalmente a la semana. El retorno al trabajo depende del tipo de ocupación: una a dos semanas para trabajos sedentarios y cuatro a seis semanas para trabajos que requieren esfuerzo físico.",
    "recuperacionEn": "Recovery after inguinal hernia repair is generally favorable. Patients undergoing open repair under local or regional anesthesia can be discharged the same day. Postoperative pain is variable but generally manageable with oral analgesics. Most patients can walk and perform basic activities of daily living from the first postoperative day. Avoiding heavy lifting (more than five kilograms) and intense physical activities for four to six weeks is recommended to allow proper mesh integration. Driving can be resumed when the patient can perform an emergency stop without pain, typically within one week. Return to work depends on the type of occupation: one to two weeks for sedentary jobs and four to six weeks for physically demanding jobs.",
    "riesgosEs": [
      "Dolor inguinal crónico postoperatorio, la complicación más frecuente a largo plazo, presente en hasta el 10 por ciento de los casos",
      "Infección de la malla que puede requerir su retiro quirúrgico",
      "Formación de seroma o hematoma en el sitio quirúrgico",
      "Recurrencia de la hernia, más frecuente en reparaciones sin malla",
      "Lesión del conducto deferente o de los vasos testiculares durante la disección",
      "Orquitis isquémica o atrofia testicular por compromiso del flujo sanguíneo al testículo",
      "Retención urinaria postoperatoria, especialmente con anestesia espinal",
      "Migración de la malla o formación de adherencias intestinales a la malla"
    ],
    "riesgosEn": [
      "Chronic postoperative inguinal pain, the most frequent long-term complication, present in up to 10 percent of cases",
      "Mesh infection that may require surgical removal",
      "Seroma or hematoma formation at the surgical site",
      "Hernia recurrence, more frequent in repairs without mesh",
      "Injury to the vas deferens or testicular vessels during dissection",
      "Ischemic orchitis or testicular atrophy from compromised blood flow to the testicle",
      "Postoperative urinary retention, especially with spinal anesthesia",
      "Mesh migration or formation of intestinal adhesions to the mesh"
    ],
    "cuidadosPostoperatoriosEs": "Aplique hielo en la zona inguinal durante 20 minutos cada dos a tres horas durante las primeras 48 horas para reducir la hinchazón y el dolor. Use ropa interior ajustada de soporte o un suspensorio para mayor comodidad. Mantenga la herida quirúrgica limpia y seca, y observe diariamente si hay signos de infección. Evite el estreñimiento tomando laxantes suaves y consumiendo una dieta rica en fibra y abundantes líquidos. No realice esfuerzos como levantar objetos pesados, empujar o jalar durante las primeras cuatro a seis semanas. Puede caminar y subir escaleras desde el primer día, aumentando gradualmente la distancia. Acuda a su consulta de seguimiento en una a dos semanas para evaluación de la herida y retiro de suturas si se utilizaron no absorbibles.",
    "cuidadosPostoperatoriosEn": "Apply ice to the inguinal area for 20 minutes every two to three hours during the first 48 hours to reduce swelling and pain. Wear snug supportive underwear or an athletic supporter for comfort. Keep the surgical wound clean and dry, and check daily for signs of infection. Avoid constipation by taking gentle laxatives and consuming a high-fiber diet with plenty of fluids. Do not perform strenuous activities such as lifting heavy objects, pushing, or pulling for the first four to six weeks. You may walk and climb stairs from the first day, gradually increasing the distance. Attend your follow-up appointment in one to two weeks for wound evaluation and suture removal if non-absorbable sutures were used.",
    "cuandoConsultarEs": "Consulte a su cirujano o acuda a urgencias si presenta fiebre mayor de 38 grados centígrados, hinchazón progresiva o enrojecimiento intenso en el área inguinal o escrotal, dolor severo que no mejora con los analgésicos prescritos, secreción purulenta o de mal olor de la herida, incapacidad para orinar por más de ocho horas, náuseas y vómitos persistentes, o si nota un nuevo bulto en la ingle que no estaba presente después de la cirugía.",
    "cuandoConsultarEn": "Contact your surgeon or go to the emergency room if you develop fever greater than 38 degrees Celsius, progressive swelling or intense redness in the inguinal or scrotal area, severe pain not improving with prescribed analgesics, purulent or foul-smelling wound discharge, inability to urinate for more than eight hours, persistent nausea and vomiting, or if you notice a new lump in the groin that was not present after surgery."
  },
  {
    "id": "tiroidectomia",
    "nombreEs": "Tiroidectomía",
    "nombreEn": "Thyroidectomy",
    "descripcionEs": "La tiroidectomía es la extirpación quirúrgica total o parcial de la glándula tiroides, un órgano endocrino en forma de mariposa situado en la parte anterior del cuello que produce las hormonas tiroideas (T3 y T4), esenciales para regular el metabolismo, la temperatura corporal, la frecuencia cardíaca y el crecimiento. Puede realizarse como tiroidectomía total (extirpación completa), tiroidectomía subtotal (se deja una pequeña porción de tejido), hemitiroidectomía o lobectomía (extirpación de un solo lóbulo), o istmectomía (extirpación del istmo). Es una cirugía que requiere precisión extrema debido a la proximidad de estructuras vitales como los nervios laríngeos recurrentes, que controlan las cuerdas vocales, y las glándulas paratiroides, que regulan el calcio sanguíneo. Los avances en la técnica quirúrgica y la monitorización nerviosa intraoperatoria han mejorado significativamente la seguridad del procedimiento.",
    "descripcionEn": "A thyroidectomy is the total or partial surgical removal of the thyroid gland, a butterfly-shaped endocrine organ located in the front of the neck that produces thyroid hormones (T3 and T4), essential for regulating metabolism, body temperature, heart rate, and growth. It can be performed as a total thyroidectomy (complete removal), subtotal thyroidectomy (a small portion of tissue is left), hemithyroidectomy or lobectomy (removal of a single lobe), or isthmectomy (removal of the isthmus). It is a surgery requiring extreme precision due to the proximity of vital structures such as the recurrent laryngeal nerves, which control the vocal cords, and the parathyroid glands, which regulate blood calcium. Advances in surgical technique and intraoperative nerve monitoring have significantly improved the safety of the procedure.",
    "categoriaEs": "Cirugía de cuello",
    "categoriaEn": "Neck surgery",
    "indicacionesEs": [
      "Cáncer de tiroides confirmado o altamente sospechoso por biopsia por aspiración con aguja fina",
      "Nódulo tiroideo indeterminado con características ecográficas sospechosas que requiere diagnóstico definitivo",
      "Bocio multinodular grande que causa síntomas compresivos como dificultad para tragar o respirar",
      "Hipertiroidismo refractario al tratamiento médico, incluyendo enfermedad de Graves no controlada",
      "Bocio retroesternal que se extiende al mediastino y causa compresión de la vía aérea",
      "Tiroiditis recurrente con episodios frecuentes de dolor y disfunción tiroidea",
      "Preferencia del paciente por tratamiento definitivo quirúrgico sobre el yodo radioactivo"
    ],
    "indicacionesEn": [
      "Confirmed or highly suspected thyroid cancer by fine needle aspiration biopsy",
      "Indeterminate thyroid nodule with suspicious ultrasound features requiring definitive diagnosis",
      "Large multinodular goiter causing compressive symptoms such as difficulty swallowing or breathing",
      "Hyperthyroidism refractory to medical treatment, including uncontrolled Graves' disease",
      "Retrosternal goiter extending into the mediastinum causing airway compression",
      "Recurrent thyroiditis with frequent episodes of pain and thyroid dysfunction",
      "Patient preference for definitive surgical treatment over radioactive iodine"
    ],
    "procedimientoEs": "El paciente se coloca en posición supina con extensión moderada del cuello sobre un rollo colocado debajo de los hombros. Se realiza una incisión cervical transversa de Kocher de cuatro a seis centímetros en un pliegue natural de la piel, aproximadamente dos centímetros por encima de la escotadura esternal. Se elevan los colgajos subplatismales y se separan los músculos infrahioideos en la línea media. Se identifica la glándula tiroides y se ligan los vasos tiroideos superiores e inferiores de manera individual y meticulosa. Se identifican y preservan los nervios laríngeos recurrentes bilateralmente utilizando monitorización nerviosa intraoperatoria continua. Se identifican y preservan las glándulas paratiroides, reimplantándolas en el músculo esternocleidomastoideo si se devascularizaron accidentalmente. Se extirpa el lóbulo o la glándula completa según la indicación, verificando la hemostasia meticulosamente. Se puede colocar un drenaje y se cierra la incisión por planos.",
    "procedimientoEn": "The patient is placed in the supine position with moderate neck extension over a roll placed beneath the shoulders. A transverse Kocher cervical incision of four to six centimeters is made in a natural skin crease, approximately two centimeters above the sternal notch. Subplatysmal flaps are elevated and the infrahyoid muscles are separated at the midline. The thyroid gland is identified and the superior and inferior thyroid vessels are individually and meticulously ligated. The recurrent laryngeal nerves are identified and preserved bilaterally using continuous intraoperative nerve monitoring. The parathyroid glands are identified and preserved, reimplanting them into the sternocleidomastoid muscle if accidentally devascularized. The lobe or entire gland is removed according to the indication, verifying hemostasis meticulously. A drain may be placed and the incision is closed in layers.",
    "preparacionEs": "La preparación incluye una evaluación preoperatoria completa con perfil tiroideo (TSH, T3 libre, T4 libre), niveles de calcio y vitamina D, ecografía tiroidea detallada y biopsia por aspiración con aguja fina de nódulos sospechosos. Se recomienda una laringoscopia preoperatoria para documentar la función de las cuerdas vocales. Los pacientes con hipertiroidismo deben lograr un estado eutiroideo con medicamentos antitiroideos antes de la cirugía para evitar una tormenta tiroidea. Se administra solución de Lugol en pacientes con enfermedad de Graves para reducir la vascularidad glandular. Se suspenden anticoagulantes según protocolo. El paciente debe informar sobre cualquier cambio de voz, dificultad para tragar o episodios de sangrado previos. Se recomienda ayuno de ocho horas.",
    "preparacionEn": "Preparation includes a complete preoperative evaluation with thyroid profile (TSH, free T3, free T4), calcium and vitamin D levels, detailed thyroid ultrasound, and fine needle aspiration biopsy of suspicious nodules. Preoperative laryngoscopy is recommended to document vocal cord function. Patients with hyperthyroidism should achieve a euthyroid state with antithyroid medications before surgery to prevent a thyroid storm. Lugol's solution is administered to patients with Graves' disease to reduce glandular vascularity. Anticoagulants are discontinued per protocol. The patient should report any voice changes, swallowing difficulties, or prior bleeding episodes. Fasting for eight hours is recommended.",
    "recuperacionEs": "Después de una tiroidectomía, la mayoría de los pacientes permanecen hospitalizados por uno a dos días para monitoreo. Se vigila estrechamente la función de las cuerdas vocales evaluando la voz del paciente y se miden los niveles de calcio sérico cada seis a doce horas durante las primeras 24 horas para detectar hipoparatiroidismo. Los pacientes sometidos a tiroidectomía total necesitarán terapia de reemplazo con levotiroxina de por vida, comenzando el día después de la cirugía. El dolor postoperatorio generalmente es leve y se controla con analgésicos simples. La cicatriz cervical se atenúa significativamente con el tiempo y suele quedar mínimamente visible al año. Se recomienda proteger la cicatriz del sol durante los primeros seis a doce meses. La voz puede presentar ronquera temporal que suele resolverse en semanas a meses. La actividad física normal puede reanudarse gradualmente en dos a tres semanas.",
    "recuperacionEn": "After a thyroidectomy, most patients remain hospitalized for one to two days for monitoring. Vocal cord function is closely monitored by evaluating the patient's voice, and serum calcium levels are measured every six to twelve hours during the first 24 hours to detect hypoparathyroidism. Patients undergoing total thyroidectomy will need lifelong levothyroxine replacement therapy, starting the day after surgery. Postoperative pain is generally mild and controlled with simple analgesics. The cervical scar fades significantly over time and is usually minimally visible at one year. Protecting the scar from sun exposure for the first six to twelve months is recommended. The voice may experience temporary hoarseness that usually resolves within weeks to months. Normal physical activity can be gradually resumed within two to three weeks.",
    "riesgosEs": [
      "Lesión del nervio laríngeo recurrente causando ronquera permanente o parálisis de cuerda vocal",
      "Hipoparatiroidismo transitorio o permanente con hipocalcemia sintomática",
      "Hematoma cervical postoperatorio que puede comprometer la vía aérea y requiere drenaje urgente",
      "Lesión del nervio laríngeo superior con pérdida del tono vocal agudo",
      "Infección de la herida quirúrgica",
      "Formación de cicatriz hipertrófica o queloide",
      "Seroma en el lecho quirúrgico",
      "Tormenta tiroidea si el hipertiroidismo no fue controlado preoperatoriamente"
    ],
    "riesgosEn": [
      "Recurrent laryngeal nerve injury causing permanent hoarseness or vocal cord paralysis",
      "Transient or permanent hypoparathyroidism with symptomatic hypocalcemia",
      "Postoperative cervical hematoma that may compromise the airway and requires urgent drainage",
      "Superior laryngeal nerve injury with loss of high-pitched vocal tone",
      "Surgical wound infection",
      "Hypertrophic or keloid scar formation",
      "Seroma in the surgical bed",
      "Thyroid storm if hyperthyroidism was not controlled preoperatively"
    ],
    "cuidadosPostoperatoriosEs": "Después de la cirugía, tome la levotiroxina prescrita cada mañana en ayunas, 30 a 60 minutos antes de desayunar, con un vaso de agua. Tome los suplementos de calcio y vitamina D según las indicaciones si se realizó una tiroidectomía total. Vigile síntomas de hipocalcemia como hormigueo en labios, manos o pies, espasmos musculares o calambres. Mantenga la herida limpia y seca, y aplique protector solar o cubra la cicatriz al exponerse al sol. Observe su voz y notifique cambios persistentes. Evite movimientos bruscos del cuello y actividades extenuantes durante las primeras dos semanas. Acuda a las citas de seguimiento para control de niveles hormonales y de calcio a las dos semanas, seis semanas y tres meses.",
    "cuidadosPostoperatoriosEn": "After surgery, take the prescribed levothyroxine every morning on an empty stomach, 30 to 60 minutes before breakfast, with a glass of water. Take calcium and vitamin D supplements as directed if a total thyroidectomy was performed. Watch for symptoms of hypocalcemia such as tingling in the lips, hands, or feet, muscle spasms, or cramps. Keep the wound clean and dry, and apply sunscreen or cover the scar when exposed to sunlight. Monitor your voice and report persistent changes. Avoid abrupt neck movements and strenuous activities for the first two weeks. Attend follow-up appointments for thyroid hormone and calcium level monitoring at two weeks, six weeks, and three months.",
    "cuandoConsultarEs": "Busque atención médica de emergencia si experimenta dificultad para respirar o sensación de presión en el cuello (posible hematoma compresivo), hormigueo intenso en las extremidades o la cara, espasmos musculares severos o rigidez (signos de hipocalcemia grave), hinchazón rápida del cuello, sangrado activo de la herida, fiebre superior a 38.5 grados centígrados, dificultad creciente para tragar, o cambios significativos en la voz como pérdida completa de la fonación.",
    "cuandoConsultarEn": "Seek emergency medical attention if you experience difficulty breathing or a sensation of pressure in the neck (possible compressive hematoma), intense tingling in the extremities or face, severe muscle spasms or rigidity (signs of severe hypocalcemia), rapid neck swelling, active bleeding from the wound, fever above 38.5 degrees Celsius, increasing difficulty swallowing, or significant voice changes such as complete loss of phonation."
  },
  {
    "id": "mastectomia",
    "nombreEs": "Mastectomía",
    "nombreEn": "Mastectomy",
    "descripcionEs": "La mastectomía es la extirpación quirúrgica de una o ambas mamas, realizada principalmente como tratamiento para el cáncer de mama o como medida profiláctica en mujeres con alto riesgo genético. Existen varios tipos: la mastectomía simple o total extirpa toda la mama incluyendo el pezón; la mastectomía radical modificada extirpa la mama y los ganglios linfáticos axilares; la mastectomía con conservación de piel preserva la mayor parte de la piel para facilitar la reconstrucción; y la mastectomía con conservación de pezón preserva tanto la piel como el complejo areola-pezón. La elección del tipo depende del estadio del cáncer, su localización, el tamaño de la mama, la presencia de mutaciones genéticas como BRCA1 y BRCA2, y las preferencias de la paciente. Los avances en las técnicas de reconstrucción mamaria inmediata permiten obtener resultados estéticos satisfactorios en la mayoría de los casos.",
    "descripcionEn": "A mastectomy is the surgical removal of one or both breasts, performed primarily as treatment for breast cancer or as a prophylactic measure in women at high genetic risk. Several types exist: a simple or total mastectomy removes the entire breast including the nipple; a modified radical mastectomy removes the breast and axillary lymph nodes; a skin-sparing mastectomy preserves most of the skin to facilitate reconstruction; and a nipple-sparing mastectomy preserves both the skin and the nipple-areola complex. The choice of type depends on the cancer stage, its location, breast size, the presence of genetic mutations such as BRCA1 and BRCA2, and the patient's preferences. Advances in immediate breast reconstruction techniques allow satisfactory aesthetic results in most cases.",
    "categoriaEs": "Cirugía de mama",
    "categoriaEn": "Breast surgery",
    "indicacionesEs": [
      "Cáncer de mama invasivo que no es candidato a cirugía conservadora por tamaño o multifocalidad",
      "Carcinoma ductal in situ extenso que afecta múltiples cuadrantes de la mama",
      "Cáncer de mama inflamatorio como parte del tratamiento multimodal",
      "Recurrencia local de cáncer de mama después de cirugía conservadora previa con radioterapia",
      "Profilaxis en portadoras de mutaciones BRCA1 o BRCA2 con alto riesgo de desarrollar cáncer",
      "Preferencia de la paciente por mastectomía sobre cirugía conservadora por tranquilidad psicológica",
      "Cáncer de mama bilateral sincrónico o metacrónico"
    ],
    "indicacionesEn": [
      "Invasive breast cancer not amenable to breast-conserving surgery due to size or multifocality",
      "Extensive ductal carcinoma in situ affecting multiple quadrants of the breast",
      "Inflammatory breast cancer as part of multimodal treatment",
      "Local breast cancer recurrence after prior breast-conserving surgery with radiation",
      "Prophylaxis in BRCA1 or BRCA2 mutation carriers at high risk of developing cancer",
      "Patient preference for mastectomy over breast-conserving surgery for psychological peace of mind",
      "Bilateral synchronous or metachronous breast cancer"
    ],
    "procedimientoEs": "El procedimiento se realiza bajo anestesia general. En una mastectomía simple, se realiza una incisión elíptica alrededor de la mama incluyendo el complejo areola-pezón. Se elevan colgajos de piel superiores e inferiores disecando entre la grasa subcutánea y el tejido mamario. Se extirpa todo el tejido mamario desde la clavícula superiormente, el esternón medialmente, el borde del músculo dorsal ancho lateralmente y la fascia del músculo recto abdominal inferiormente. En la mastectomía radical modificada, se realiza adicionalmente la disección de los ganglios linfáticos axilares niveles I y II. La biopsia del ganglio centinela se realiza frecuentemente para evaluar el estado ganglionar antes de decidir la disección axilar completa. Si se planifica reconstrucción inmediata, el cirujano plástico trabaja en conjunto colocando un expansor tisular o implante, o realizando reconstrucción con colgajo autólogo. Se colocan drenajes cerrados y se cierra la herida.",
    "procedimientoEn": "The procedure is performed under general anesthesia. In a simple mastectomy, an elliptical incision is made around the breast including the nipple-areola complex. Superior and inferior skin flaps are elevated by dissecting between the subcutaneous fat and breast tissue. All breast tissue is removed from the clavicle superiorly, the sternum medially, the latissimus dorsi muscle edge laterally, and the rectus abdominis muscle fascia inferiorly. In a modified radical mastectomy, axillary lymph node dissection of levels I and II is additionally performed. Sentinel lymph node biopsy is frequently performed to assess nodal status before deciding on complete axillary dissection. If immediate reconstruction is planned, the plastic surgeon works in conjunction, placing a tissue expander or implant, or performing autologous flap reconstruction. Closed drains are placed and the wound is closed.",
    "preparacionEs": "La preparación para una mastectomía requiere una evaluación oncológica completa que incluye mamografía bilateral, ecografía mamaria, resonancia magnética de mama en casos seleccionados, y biopsia con resultado histopatológico confirmado. Se completa el estadiaje con tomografía de tórax, abdomen y pelvis, y gammagrafía ósea cuando está indicado. Se realizan estudios preoperatorios estándar incluyendo análisis de sangre, electrocardiograma y evaluación preanestésica. Si se planifica reconstrucción inmediata, se coordina la consulta con el cirujano plástico. La paciente debe informar sobre todos los medicamentos que toma, especialmente anticoagulantes y suplementos herbales. Se recomienda dejar de fumar al menos cuatro semanas antes. Se aconseja la consulta con psicología o un grupo de apoyo para preparación emocional. Se proporciona un sostén quirúrgico o vendaje compresivo para el postoperatorio.",
    "preparacionEn": "Preparation for a mastectomy requires a complete oncological evaluation including bilateral mammography, breast ultrasound, breast MRI in selected cases, and biopsy with confirmed histopathological results. Staging is completed with chest, abdomen, and pelvis CT scans, and bone scintigraphy when indicated. Standard preoperative studies are performed including blood tests, electrocardiogram, and preanesthetic evaluation. If immediate reconstruction is planned, consultation with the plastic surgeon is coordinated. The patient should report all medications taken, especially anticoagulants and herbal supplements. Quitting smoking at least four weeks before is recommended. Consultation with psychology or a support group for emotional preparation is advised. A surgical bra or compressive dressing is provided for postoperative use.",
    "recuperacionEs": "La hospitalización después de una mastectomía suele durar de uno a tres días, dependiendo de si se realizó reconstrucción simultánea. Los drenajes quirúrgicos permanecen colocados por una a tres semanas y se retiran cuando el gasto diario es menor de 30 mililitros. El dolor postoperatorio es moderado y se controla con analgésicos orales, pudiendo incluir un bloqueo nervioso regional. La movilización del brazo del lado operado debe iniciarse tempranamente con ejercicios suaves para prevenir el hombro congelado y el linfedema. Se recomienda usar un sostén deportivo suave sin aros durante las primeras semanas. La recuperación completa para actividades normales toma de cuatro a seis semanas. Si se administrará quimioterapia adyuvante, generalmente se inicia de tres a seis semanas después de la cirugía. La reconstrucción puede completarse en etapas posteriores si no se realizó de forma inmediata.",
    "recuperacionEn": "Hospitalization after a mastectomy usually lasts one to three days, depending on whether simultaneous reconstruction was performed. Surgical drains remain in place for one to three weeks and are removed when daily output is less than 30 milliliters. Postoperative pain is moderate and controlled with oral analgesics, which may include a regional nerve block. Mobilization of the arm on the operated side should begin early with gentle exercises to prevent frozen shoulder and lymphedema. Wearing a soft sports bra without underwire during the first few weeks is recommended. Full recovery for normal activities takes four to six weeks. If adjuvant chemotherapy is to be administered, it generally begins three to six weeks after surgery. Reconstruction can be completed in later stages if not performed immediately.",
    "riesgosEs": [
      "Linfedema del brazo ipsilateral, especialmente después de disección axilar completa",
      "Seroma postoperatorio debajo de los colgajos de piel, muy frecuente",
      "Necrosis de los colgajos de piel o del complejo areola-pezón en mastectomías con conservación",
      "Infección de la herida o del implante de reconstrucción",
      "Hematoma postoperatorio que puede requerir drenaje quirúrgico",
      "Dolor crónico postmastectomía y síndrome de mama fantasma",
      "Limitación del rango de movimiento del hombro",
      "Impacto psicológico significativo en la imagen corporal y la autoestima"
    ],
    "riesgosEn": [
      "Ipsilateral arm lymphedema, especially after complete axillary dissection",
      "Postoperative seroma beneath the skin flaps, very common",
      "Skin flap or nipple-areola complex necrosis in skin-sparing mastectomies",
      "Wound or reconstruction implant infection",
      "Postoperative hematoma that may require surgical drainage",
      "Chronic post-mastectomy pain and phantom breast syndrome",
      "Limited shoulder range of motion",
      "Significant psychological impact on body image and self-esteem"
    ],
    "cuidadosPostoperatoriosEs": "Cuide los drenajes quirúrgicos según las instrucciones: vacíe y mida el contenido dos veces al día y registre la cantidad. Mantenga las heridas limpias y secas, evitando mojar el área de los drenajes al ducharse. Realice los ejercicios de brazo y hombro prescritos gradualmente, comenzando con movimientos suaves como apretar una pelota y progresando a movimientos de mayor rango. Use el sostén quirúrgico o vendaje compresivo según las indicaciones. Evite punciones venosas, toma de presión arterial o inyecciones en el brazo del lado operado para reducir el riesgo de linfedema. No levante objetos pesados con el brazo afectado durante las primeras seis semanas. Considere el apoyo psicológico y grupos de pacientes para el manejo emocional. Proteja la piel de la zona operada del sol durante el primer año.",
    "cuidadosPostoperatoriosEn": "Care for surgical drains as instructed: empty and measure contents twice daily and record the amount. Keep wounds clean and dry, avoiding wetting the drain area when showering. Perform prescribed arm and shoulder exercises gradually, starting with gentle movements like squeezing a ball and progressing to greater range of motion. Wear the surgical bra or compressive dressing as directed. Avoid venipuncture, blood pressure measurement, or injections in the arm on the operated side to reduce lymphedema risk. Do not lift heavy objects with the affected arm for the first six weeks. Consider psychological support and patient groups for emotional management. Protect the skin of the operated area from sun exposure during the first year.",
    "cuandoConsultarEs": "Contacte a su equipo médico si nota fiebre mayor de 38 grados centígrados, enrojecimiento progresivo o calor en la herida o el brazo del mismo lado, secreción purulenta o de mal olor de la herida o los sitios de drenaje, hinchazón significativa del brazo del lado operado, dolor severo o repentino en el pecho, dificultad para respirar, sangrado activo de la herida, o si un drenaje se sale accidentalmente. También consulte si experimenta sentimientos de depresión severa o ansiedad que afecten su funcionamiento diario.",
    "cuandoConsultarEn": "Contact your medical team if you notice fever greater than 38 degrees Celsius, progressive redness or warmth in the wound or arm on the same side, purulent or foul-smelling discharge from the wound or drain sites, significant swelling of the arm on the operated side, severe or sudden chest pain, difficulty breathing, active wound bleeding, or if a drain accidentally comes out. Also consult if you experience feelings of severe depression or anxiety affecting your daily functioning."
  },
  {
    "id": "colectomia",
    "nombreEs": "Colectomía",
    "nombreEn": "Colectomy",
    "descripcionEs": "La colectomía es la extirpación quirúrgica de una parte o la totalidad del colon (intestino grueso). Se clasifica según la extensión: colectomía derecha o hemicolectomía derecha (extirpación del colon ascendente y parte del transverso), colectomía izquierda o hemicolectomía izquierda (extirpación del colon descendente), sigmoidectomía (extirpación del colon sigmoide), colectomía transversa, colectomía subtotal (extirpación de la mayor parte del colon) o colectomía total (extirpación de todo el colon). Puede realizarse por vía laparoscópica, asistida por robot o mediante cirugía abierta convencional. Después de la resección, los extremos del intestino pueden reconectarse (anastomosis primaria) o puede crearse una ostomía temporal o permanente (colostomía o ileostomía) dependiendo de la indicación y la condición del paciente.",
    "descripcionEn": "A colectomy is the surgical removal of part or all of the colon (large intestine). It is classified according to extent: right colectomy or right hemicolectomy (removal of the ascending colon and part of the transverse), left colectomy or left hemicolectomy (removal of the descending colon), sigmoidectomy (removal of the sigmoid colon), transverse colectomy, subtotal colectomy (removal of most of the colon), or total colectomy (removal of the entire colon). It can be performed laparoscopically, robot-assisted, or through conventional open surgery. After resection, the ends of the intestine can be reconnected (primary anastomosis) or a temporary or permanent ostomy (colostomy or ileostomy) may be created depending on the indication and the patient's condition.",
    "categoriaEs": "Cirugía abdominal",
    "categoriaEn": "Abdominal surgery",
    "indicacionesEs": [
      "Cáncer de colon en cualquier estadio como tratamiento curativo o paliativo",
      "Enfermedad diverticular complicada con perforación, absceso recurrente o fístula",
      "Enfermedad inflamatoria intestinal refractaria al tratamiento médico, incluyendo colitis ulcerosa y enfermedad de Crohn",
      "Vólvulo del colon sigmoide o cecal con riesgo de isquemia intestinal",
      "Poliposis adenomatosa familiar como medida preventiva contra el cáncer colorrectal",
      "Obstrucción colónica por tumor que no puede ser tratada endoscópicamente",
      "Hemorragia digestiva baja masiva que no responde a tratamiento conservador ni endoscópico"
    ],
    "indicacionesEn": [
      "Colon cancer at any stage as curative or palliative treatment",
      "Complicated diverticular disease with perforation, recurrent abscess, or fistula",
      "Inflammatory bowel disease refractory to medical treatment, including ulcerative colitis and Crohn's disease",
      "Sigmoid or cecal colon volvulus with risk of intestinal ischemia",
      "Familial adenomatous polyposis as a preventive measure against colorectal cancer",
      "Colonic obstruction by tumor that cannot be treated endoscopically",
      "Massive lower gastrointestinal hemorrhage unresponsive to conservative or endoscopic treatment"
    ],
    "procedimientoEs": "Bajo anestesia general, se puede realizar el procedimiento por vía laparoscópica o abierta. En la técnica laparoscópica, se insertan cuatro a cinco trocares y se identifica el segmento de colon afectado. Se realiza la movilización medial a lateral liberando las adherencias retroperitoneales y ligando los vasos mesentéricos principales con clips o grapadora vascular. Se identifica y preserva el uréter del lado correspondiente. Se secciona el colon con grapadora endoscópica con márgenes adecuados, y se realiza la anastomosis intracorpórea o extracorpórea según la preferencia del cirujano. En cirugía por cáncer, se realiza una linfadenectomía regional extirpando al menos doce ganglios linfáticos para estadiaje adecuado. Se verifica la integridad de la anastomosis con prueba de fuga utilizando aire o azul de metileno. Si las condiciones no permiten una anastomosis segura, se crea una ostomía de derivación.",
    "procedimientoEn": "Under general anesthesia, the procedure can be performed laparoscopically or open. In the laparoscopic technique, four to five trocars are inserted and the affected colon segment is identified. Medial-to-lateral mobilization is performed, releasing retroperitoneal attachments and ligating the major mesenteric vessels with clips or a vascular stapler. The ureter on the corresponding side is identified and preserved. The colon is divided with an endoscopic stapler with adequate margins, and intracorporeal or extracorporeal anastomosis is performed per the surgeon's preference. In cancer surgery, regional lymphadenectomy is performed removing at least twelve lymph nodes for adequate staging. Anastomotic integrity is verified with a leak test using air or methylene blue. If conditions do not allow a safe anastomosis, a diversion ostomy is created.",
    "preparacionEs": "La preparación para una colectomía es exhaustiva e incluye una preparación intestinal mecánica con solución de polietilenglicol el día anterior a la cirugía para limpiar el colon en la mayoría de los protocolos. Se administran antibióticos orales no absorbibles (neomicina y metronidazol) combinados con antibióticos intravenosos profilácticos. Se completan estudios preoperatorios incluyendo colonoscopia con biopsia, tomografía computarizada de abdomen y pelvis con contraste, análisis de sangre con marcadores tumorales (CEA en caso de cáncer), evaluación nutricional y pruebas de función pulmonar si están indicadas. Los pacientes con anemia preoperatoria pueden requerir transfusión o suplementos de hierro intravenoso. Se marca el sitio potencial de la ostomía con un terapeuta enterostomal si hay posibilidad de necesitarla. Se implementa un protocolo de recuperación mejorada (ERAS) que incluye carga de carbohidratos y reducción del ayuno.",
    "preparacionEn": "Preparation for a colectomy is thorough and includes mechanical bowel preparation with polyethylene glycol solution the day before surgery to cleanse the colon in most protocols. Non-absorbable oral antibiotics (neomycin and metronidazole) are administered combined with prophylactic intravenous antibiotics. Preoperative studies are completed including colonoscopy with biopsy, contrast-enhanced CT scan of the abdomen and pelvis, blood tests with tumor markers (CEA in cancer cases), nutritional evaluation, and pulmonary function tests if indicated. Patients with preoperative anemia may require transfusion or intravenous iron supplements. The potential ostomy site is marked with an enterostomal therapist if there is a possibility of needing one. An enhanced recovery after surgery (ERAS) protocol is implemented including carbohydrate loading and reduced fasting.",
    "recuperacionEs": "La recuperación después de una colectomía varía según la extensión de la resección y la técnica utilizada. Con los protocolos de recuperación mejorada, los pacientes sometidos a colectomía laparoscópica pueden ser dados de alta en tres a cinco días. La función intestinal generalmente se reanuda en dos a cuatro días, evidenciada por la presencia de gases y movimientos intestinales. La dieta se avanza progresivamente desde líquidos claros hasta una dieta regular baja en residuo. Es normal experimentar cambios en los hábitos intestinales durante las primeras semanas a meses, incluyendo deposiciones más frecuentes o blandas. Los pacientes con ostomía reciben educación intensiva sobre su manejo antes del alta. Se recomienda caminar regularmente desde el primer día postoperatorio. La recuperación completa para actividades normales toma de seis a ocho semanas. Los pacientes operados por cáncer necesitarán seguimiento oncológico regular y posiblemente quimioterapia adyuvante.",
    "recuperacionEn": "Recovery after a colectomy varies depending on the extent of resection and technique used. With enhanced recovery protocols, patients undergoing laparoscopic colectomy can be discharged in three to five days. Bowel function generally resumes within two to four days, evidenced by the passage of gas and bowel movements. The diet is advanced progressively from clear liquids to a regular low-residue diet. It is normal to experience changes in bowel habits during the first weeks to months, including more frequent or loose stools. Patients with an ostomy receive intensive education on its management before discharge. Regular walking from the first postoperative day is recommended. Full recovery for normal activities takes six to eight weeks. Patients operated on for cancer will need regular oncological follow-up and possibly adjuvant chemotherapy.",
    "riesgosEs": [
      "Fuga anastomótica, la complicación más grave, con riesgo de peritonitis y sepsis",
      "Infección del sitio quirúrgico superficial o profunda incluyendo absceso intraabdominal",
      "Íleo postoperatorio prolongado con náuseas, distensión y ausencia de función intestinal",
      "Obstrucción intestinal por adherencias postoperatorias",
      "Sangrado intraoperatorio o postoperatorio que requiera transfusión o reintervención",
      "Lesión ureteral o vesical durante la disección pélvica",
      "Complicaciones de la ostomía incluyendo retracción, prolapso, hernia paraestomal o necrosis",
      "Tromboembolismo venoso incluyendo trombosis venosa profunda y embolia pulmonar"
    ],
    "riesgosEn": [
      "Anastomotic leak, the most serious complication, with risk of peritonitis and sepsis",
      "Superficial or deep surgical site infection including intra-abdominal abscess",
      "Prolonged postoperative ileus with nausea, distension, and absent bowel function",
      "Intestinal obstruction from postoperative adhesions",
      "Intraoperative or postoperative bleeding requiring transfusion or reoperation",
      "Ureteral or bladder injury during pelvic dissection",
      "Ostomy complications including retraction, prolapse, parastomal hernia, or necrosis",
      "Venous thromboembolism including deep vein thrombosis and pulmonary embolism"
    ],
    "cuidadosPostoperatoriosEs": "Camine regularmente varias veces al día desde el primer día postoperatorio para promover la recuperación intestinal y prevenir complicaciones tromboembólicas. Use las medias de compresión y la heparina profiláctica según las indicaciones. Avance la dieta gradualmente comenzando con líquidos claros y progresando a alimentos blandos y bajos en residuo. Evite alimentos que produzcan exceso de gas como legumbres, brócoli y bebidas carbonatadas durante las primeras semanas. Mantenga las heridas limpias y secas. Si tiene una ostomía, siga las instrucciones del terapeuta enterostomal para su manejo y cambio de bolsa. Controle su peso y nutrición, asegurando una ingesta adecuada de proteínas para la cicatrización. No levante objetos pesados durante seis a ocho semanas. Acuda a todas las citas de seguimiento para evaluación clínica y resultados de patología.",
    "cuidadosPostoperatoriosEn": "Walk regularly several times a day from the first postoperative day to promote intestinal recovery and prevent thromboembolic complications. Use compression stockings and prophylactic heparin as directed. Advance the diet gradually, starting with clear liquids and progressing to soft, low-residue foods. Avoid foods that produce excess gas such as legumes, broccoli, and carbonated beverages during the first few weeks. Keep wounds clean and dry. If you have an ostomy, follow the enterostomal therapist's instructions for its management and pouch changes. Monitor your weight and nutrition, ensuring adequate protein intake for healing. Do not lift heavy objects for six to eight weeks. Attend all follow-up appointments for clinical evaluation and pathology results.",
    "cuandoConsultarEs": "Busque atención médica urgente si presenta fiebre superior a 38.5 grados centígrados, dolor abdominal severo especialmente si es difuso o diferente del dolor postoperatorio esperado, distensión abdominal progresiva con ausencia de gases por más de tres días, vómitos persistentes o de contenido fecaloide, sangrado rectal abundante o coágulos, signos de deshidratación como mareo o disminución de la orina, enrojecimiento o secreción purulenta de las heridas, o problemas con la ostomía como ausencia de función, sangrado o cambio de color. También acuda si experimenta dolor o hinchazón en las pantorrillas o dificultad respiratoria súbita.",
    "cuandoConsultarEn": "Seek urgent medical attention if you develop fever above 38.5 degrees Celsius, severe abdominal pain especially if diffuse or different from expected postoperative pain, progressive abdominal distension with absence of flatus for more than three days, persistent or feculent vomiting, heavy rectal bleeding or clots, signs of dehydration such as dizziness or decreased urine output, redness or purulent discharge from wounds, or problems with the ostomy such as absent function, bleeding, or color change. Also seek care if you experience pain or swelling in the calves or sudden difficulty breathing."
  },
  {
    "id": "cirugia-bariatrica",
    "nombreEs": "Cirugía Bariátrica",
    "nombreEn": "Bariatric Surgery",
    "descripcionEs": "La cirugía bariátrica engloba un conjunto de procedimientos quirúrgicos diseñados para ayudar a los pacientes con obesidad severa a perder peso significativo y mejorar o resolver las comorbilidades asociadas como la diabetes tipo 2, la hipertensión arterial, la apnea obstructiva del sueño y la enfermedad del hígado graso. Los procedimientos más realizados actualmente son la gastrectomía en manga (manga gástrica), que reduce el estómago a un tubo estrecho eliminando aproximadamente el 80 por ciento de su volumen, y el bypass gástrico en Y de Roux, que crea un pequeño reservorio gástrico conectado directamente al intestino delgado medio, combinando restricción con malabsorción leve. Otras opciones incluyen la derivación biliopancreática con switch duodenal y el balón intragástrico. Estos procedimientos se realizan casi exclusivamente por vía laparoscópica y producen cambios metabólicos profundos que van más allá de la simple restricción calórica, incluyendo modificaciones en las hormonas intestinales, la microbiota y la sensibilidad a la insulina.",
    "descripcionEn": "Bariatric surgery encompasses a set of surgical procedures designed to help patients with severe obesity lose significant weight and improve or resolve associated comorbidities such as type 2 diabetes, hypertension, obstructive sleep apnea, and fatty liver disease. The most commonly performed procedures currently are sleeve gastrectomy (gastric sleeve), which reduces the stomach to a narrow tube by removing approximately 80 percent of its volume, and Roux-en-Y gastric bypass, which creates a small gastric pouch connected directly to the mid small intestine, combining restriction with mild malabsorption. Other options include biliopancreatic diversion with duodenal switch and intragastric balloon. These procedures are performed almost exclusively laparoscopically and produce profound metabolic changes that go beyond simple caloric restriction, including modifications in gut hormones, microbiota, and insulin sensitivity.",
    "categoriaEs": "Cirugía metabólica",
    "categoriaEn": "Metabolic surgery",
    "indicacionesEs": [
      "Índice de masa corporal de 40 o mayor sin comorbilidades asociadas (obesidad mórbida)",
      "Índice de masa corporal de 35 a 39.9 con al menos una comorbilidad severa como diabetes tipo 2, hipertensión o apnea del sueño",
      "Índice de masa corporal de 30 a 34.9 con diabetes tipo 2 no controlada según criterios de cirugía metabólica",
      "Fracaso documentado de intentos previos de pérdida de peso con dieta, ejercicio y tratamiento farmacológico",
      "Comprensión y aceptación de los cambios de estilo de vida permanentes necesarios después de la cirugía",
      "Ausencia de contraindicaciones psiquiátricas no tratadas como trastornos alimentarios activos o abuso de sustancias",
      "Capacidad de compromiso con el seguimiento nutricional y médico a largo plazo"
    ],
    "indicacionesEn": [
      "Body mass index of 40 or greater without associated comorbidities (morbid obesity)",
      "Body mass index of 35 to 39.9 with at least one severe comorbidity such as type 2 diabetes, hypertension, or sleep apnea",
      "Body mass index of 30 to 34.9 with uncontrolled type 2 diabetes per metabolic surgery criteria",
      "Documented failure of previous weight loss attempts with diet, exercise, and pharmacological treatment",
      "Understanding and acceptance of the permanent lifestyle changes needed after surgery",
      "Absence of untreated psychiatric contraindications such as active eating disorders or substance abuse",
      "Ability to commit to long-term nutritional and medical follow-up"
    ],
    "procedimientoEs": "Para la gastrectomía en manga, bajo anestesia general, se insertan cinco a seis trocares laparoscópicos. Se libera la curvatura mayor del estómago desde el píloro hasta el ángulo de His, ligando los vasos gástricos cortos. Se introduce una sonda de calibración de 36 a 40 French como guía, y se realiza la resección gástrica longitudinal con grapadoras endoscópicas, creando un tubo gástrico estrecho. Se refuerza la línea de grapas con sutura invaginante y se realiza prueba de fugas. El estómago resecado se extrae por uno de los puertos. Para el bypass gástrico en Y de Roux, se crea un reservorio gástrico pequeño de 30 mililitros separado del resto del estómago, se secciona el yeyuno a 50 centímetros del ligamento de Treitz creando el asa biliopancreática, y se realiza una gastroenteroanastomosis con el asa alimentaria, seguida de la yeyunoyeyunoanastomosis a 100 a 150 centímetros distalmente.",
    "procedimientoEn": "For sleeve gastrectomy, under general anesthesia, five to six laparoscopic trocars are inserted. The greater curvature of the stomach is freed from the pylorus to the angle of His, ligating the short gastric vessels. A 36 to 40 French calibration bougie is introduced as a guide, and longitudinal gastric resection is performed with endoscopic staplers, creating a narrow gastric tube. The staple line is reinforced with an imbricating suture and a leak test is performed. The resected stomach is extracted through one of the ports. For Roux-en-Y gastric bypass, a small 30-milliliter gastric pouch is created separated from the rest of the stomach, the jejunum is divided 50 centimeters from the ligament of Treitz creating the biliopancreatic limb, and a gastroenteroanastomosis is performed with the alimentary limb, followed by the jejunojejunal anastomosis at 100 to 150 centimeters distally.",
    "preparacionEs": "La preparación para cirugía bariátrica es un proceso multidisciplinario que abarca de tres a seis meses. Incluye evaluación por un equipo compuesto por cirujano bariátrico, nutricionista, psicólogo, endocrinólogo y, según el caso, neumólogo y cardiólogo. Se requiere una evaluación psicológica completa para detectar trastornos alimentarios, abuso de sustancias y capacidad de adherencia. Se realizan estudios preoperatorios exhaustivos incluyendo endoscopia digestiva alta, ecografía abdominal, polisomnografía, análisis de sangre completos con perfil metabólico y niveles de vitaminas. Se inicia una dieta preoperatoria baja en calorías dos a cuatro semanas antes de la cirugía para reducir el tamaño del hígado y facilitar el procedimiento laparoscópico. Se exige la suspensión del tabaquismo y se optimiza el control de diabetes e hipertensión. Se educa al paciente sobre la dieta postoperatoria por fases y los suplementos vitamínicos de por vida.",
    "preparacionEn": "Preparation for bariatric surgery is a multidisciplinary process spanning three to six months. It includes evaluation by a team composed of a bariatric surgeon, nutritionist, psychologist, endocrinologist, and depending on the case, pulmonologist and cardiologist. A complete psychological evaluation is required to screen for eating disorders, substance abuse, and adherence capability. Thorough preoperative studies are performed including upper gastrointestinal endoscopy, abdominal ultrasound, polysomnography, complete blood tests with metabolic profile and vitamin levels. A preoperative low-calorie diet is started two to four weeks before surgery to reduce liver size and facilitate the laparoscopic procedure. Smoking cessation is mandatory and diabetes and hypertension control is optimized. The patient is educated about the phased postoperative diet and lifelong vitamin supplements.",
    "recuperacionEs": "La recuperación después de cirugía bariátrica sigue un protocolo nutricional estricto por fases. Durante las primeras dos semanas se consumen solo líquidos claros y proteicos. En las semanas tres y cuatro se avanza a purés y alimentos licuados. En las semanas cinco a ocho se introducen alimentos blandos. A partir de la octava semana se progresa gradualmente a una dieta regular con porciones pequeñas. La hospitalización dura de uno a tres días. Los pacientes pueden retomar actividades laborales sedentarias en dos semanas y ejercicio progresivo en cuatro a seis semanas. La pérdida de peso es más rápida en los primeros seis a doce meses, esperándose la pérdida del 60 al 80 por ciento del exceso de peso con bypass gástrico y del 50 al 70 por ciento con manga gástrica en los primeros dos años. Es esencial tomar suplementos vitamínicos y minerales de por vida, incluyendo multivitamínico, calcio con vitamina D, hierro, vitamina B12 y ácido fólico. El seguimiento nutricional debe ser al menos trimestral el primer año.",
    "recuperacionEn": "Recovery after bariatric surgery follows a strict phased nutritional protocol. During the first two weeks, only clear and protein liquids are consumed. In weeks three and four, purees and blended foods are introduced. In weeks five through eight, soft foods are introduced. Starting from the eighth week, a regular diet with small portions is gradually adopted. Hospitalization lasts one to three days. Patients can resume sedentary work activities in two weeks and progressive exercise in four to six weeks. Weight loss is fastest in the first six to twelve months, with an expected loss of 60 to 80 percent of excess weight with gastric bypass and 50 to 70 percent with sleeve gastrectomy in the first two years. Lifelong vitamin and mineral supplementation is essential, including a multivitamin, calcium with vitamin D, iron, vitamin B12, and folic acid. Nutritional follow-up should be at least quarterly in the first year.",
    "riesgosEs": [
      "Fuga en la línea de grapas o en la anastomosis, complicación grave que requiere intervención urgente",
      "Estenosis de la manga gástrica o de la anastomosis gastroenterica que causa dificultad para comer",
      "Deficiencias nutricionales severas incluyendo anemia, osteoporosis y neuropatía si no se toman los suplementos",
      "Reflujo gastroesofágico nuevo o empeorado, especialmente con la manga gástrica",
      "Síndrome de dumping con bypass gástrico, causando náuseas, diaforesis y mareo después de comer azúcares",
      "Obstrucción intestinal por hernia interna a través de los defectos mesentéricos del bypass",
      "Colelitiasis acelerada por la pérdida rápida de peso que puede requerir colecistectomía",
      "Exceso de piel redundante que puede requerir cirugía de contorno corporal posterior"
    ],
    "riesgosEn": [
      "Staple line or anastomotic leak, a serious complication requiring urgent intervention",
      "Stenosis of the gastric sleeve or gastroenteric anastomosis causing difficulty eating",
      "Severe nutritional deficiencies including anemia, osteoporosis, and neuropathy if supplements are not taken",
      "New or worsened gastroesophageal reflux, especially with sleeve gastrectomy",
      "Dumping syndrome with gastric bypass, causing nausea, diaphoresis, and dizziness after eating sugars",
      "Intestinal obstruction from internal hernia through mesenteric defects of the bypass",
      "Accelerated cholelithiasis from rapid weight loss that may require cholecystectomy",
      "Excess redundant skin that may require subsequent body contouring surgery"
    ],
    "cuidadosPostoperatoriosEs": "Siga estrictamente el plan de alimentación por fases indicado por su nutricionista. Coma porciones muy pequeñas, mastique lentamente y no beba líquidos durante las comidas ni 30 minutos después para evitar llenar el reservorio gástrico reducido. Consuma al menos 60 a 80 gramos de proteína al día utilizando suplementos proteicos si es necesario. Tome todos los suplementos vitamínicos y minerales prescritos de por vida sin excepción: multivitamínico masticable o líquido, citrato de calcio con vitamina D, hierro con vitamina C, vitamina B12 sublingual o inyectable, y ácido fólico. Manténgase bien hidratado tomando al menos 1.5 litros de líquidos sin calorías al día en pequeños sorbos. Inicie actividad física progresiva comenzando con caminatas y avanzando a ejercicio cardiovascular y de resistencia. Asista a todas las citas de seguimiento con el equipo multidisciplinario incluyendo análisis de sangre trimestrales. Considere participar en un grupo de apoyo para pacientes bariátricos.",
    "cuidadosPostoperatoriosEn": "Strictly follow the phased eating plan prescribed by your nutritionist. Eat very small portions, chew slowly, and do not drink liquids during meals or for 30 minutes after to avoid filling the reduced gastric reservoir. Consume at least 60 to 80 grams of protein daily, using protein supplements if necessary. Take all prescribed vitamin and mineral supplements for life without exception: chewable or liquid multivitamin, calcium citrate with vitamin D, iron with vitamin C, sublingual or injectable vitamin B12, and folic acid. Stay well hydrated by drinking at least 1.5 liters of calorie-free fluids per day in small sips. Begin progressive physical activity starting with walks and advancing to cardiovascular and resistance exercise. Attend all follow-up appointments with the multidisciplinary team including quarterly blood tests. Consider participating in a bariatric patient support group.",
    "cuandoConsultarEs": "Busque atención médica inmediata si presenta dolor abdominal severo o en el hombro izquierdo (posible fuga), fiebre mayor de 38 grados centígrados, taquicardia persistente mayor de 120 latidos por minuto (signo temprano de fuga), vómitos persistentes o incapacidad total para tolerar líquidos, sangrado digestivo evidenciado por vómito con sangre o deposiciones oscuras, signos de deshidratación severa como mareo, confusión o ausencia de orina por más de ocho horas, dificultad para respirar o dolor torácico, o síntomas neurológicos como debilidad, hormigueo o alteraciones de la marcha que pueden indicar deficiencias vitamínicas graves.",
    "cuandoConsultarEn": "Seek immediate medical attention if you develop severe abdominal pain or left shoulder pain (possible leak), fever greater than 38 degrees Celsius, persistent tachycardia greater than 120 beats per minute (early sign of a leak), persistent vomiting or complete inability to tolerate liquids, digestive bleeding evidenced by bloody vomit or dark stools, signs of severe dehydration such as dizziness, confusion, or absence of urine for more than eight hours, difficulty breathing or chest pain, or neurological symptoms such as weakness, tingling, or gait disturbances that may indicate severe vitamin deficiencies."
  }
]`);

// --- Helper Functions ---

export function buscarCirugiaGeneral(termino: string): CirugiaGeneralEntry[] {
  const t = termino.toLowerCase();
  return CIRUGIA_GENERAL_ENTRIES.filter(
    (e) =>
      e.nombreEs.toLowerCase().includes(t) ||
      e.nombreEn.toLowerCase().includes(t) ||
      e.descripcionEs.toLowerCase().includes(t) ||
      e.descripcionEn.toLowerCase().includes(t)
  );
}

export function getCirugiaGeneralById(
  id: string
): CirugiaGeneralEntry | undefined {
  return CIRUGIA_GENERAL_ENTRIES.find((e) => e.id === id);
}

export function getCirugiaGeneralPorCategoria(
  categoria: string
): CirugiaGeneralEntry[] {
  const c = categoria.toLowerCase();
  return CIRUGIA_GENERAL_ENTRIES.filter(
    (e) =>
      e.categoriaEs.toLowerCase().includes(c) ||
      e.categoriaEn.toLowerCase().includes(c)
  );
}

export function listarCategoriasCirugiaGeneral(): string[] {
  const cats = new Set<string>();
  for (const e of CIRUGIA_GENERAL_ENTRIES) {
    cats.add(e.categoriaEs);
  }
  return Array.from(cats).sort();
}

export function listarIdsCirugiaGeneral(): string[] {
  return CIRUGIA_GENERAL_ENTRIES.map((e) => e.id);
}
