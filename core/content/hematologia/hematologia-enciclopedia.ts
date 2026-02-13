// =============================================================================
// SOMA Hematologia Enciclopedia — Spanish-First Bilingual
// Detailed Hematology Patient Education Content
// =============================================================================
// ARCHITECTURE: JSON.parse() wrapper prevents TS2590 "expression too complex"
// =============================================================================

export interface HematologiaEntry {
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

export const HEMATOLOGIA_ENTRIES: HematologiaEntry[] = JSON.parse(`[
  {
    "id": "anemia-ferropenica",
    "nombreEs": "Anemia Ferropenica",
    "nombreEn": "Iron Deficiency Anemia",
    "descripcionEs": "La anemia ferropenica es la forma mas comun de anemia a nivel mundial, causada por una deficiencia de hierro que impide la produccion adecuada de hemoglobina en los globulos rojos. Sin suficiente hemoglobina, los tejidos del cuerpo no reciben el oxigeno necesario para funcionar correctamente, lo que produce fatiga cronica y debilidad progresiva. Afecta desproporcionadamente a mujeres en edad reproductiva, ninos pequenos, embarazadas y personas con enfermedades cronicas gastrointestinales. La condicion puede desarrollarse gradualmente y pasar desapercibida durante meses hasta que los niveles de hemoglobina descienden significativamente.",
    "descripcionEn": "Iron deficiency anemia is the most common form of anemia worldwide, caused by a deficiency of iron that prevents adequate production of hemoglobin in red blood cells. Without enough hemoglobin, the body's tissues do not receive the oxygen needed to function properly, producing chronic fatigue and progressive weakness. It disproportionately affects women of reproductive age, young children, pregnant women, and people with chronic gastrointestinal diseases. The condition can develop gradually and go unnoticed for months until hemoglobin levels drop significantly.",
    "categoriaEs": "Anemia",
    "categoriaEn": "Anemia",
    "sintomasEs": [
      "Fatiga persistente y debilidad generalizada",
      "Palidez de piel, encias y conjuntivas",
      "Dificultad para respirar con esfuerzo minimo",
      "Mareos y aturdimiento frecuentes",
      "Manos y pies frios",
      "Unas quebradizas y en forma de cuchara (coiloniquia)",
      "Antojos inusuales de sustancias no alimenticias como hielo o tierra (pica)",
      "Dolor de cabeza frecuente",
      "Taquicardia o latidos cardiacos irregulares",
      "Lengua inflamada o dolorida (glositis)",
      "Sindrome de piernas inquietas",
      "Dificultad para concentrarse y problemas de memoria"
    ],
    "sintomasEn": [
      "Persistent fatigue and generalized weakness",
      "Paleness of skin, gums, and conjunctivae",
      "Shortness of breath with minimal effort",
      "Frequent dizziness and lightheadedness",
      "Cold hands and feet",
      "Brittle and spoon-shaped nails (koilonychia)",
      "Unusual cravings for non-food substances like ice or dirt (pica)",
      "Frequent headaches",
      "Tachycardia or irregular heartbeats",
      "Swollen or sore tongue (glossitis)",
      "Restless legs syndrome",
      "Difficulty concentrating and memory problems"
    ],
    "causasEs": "Las causas principales incluyen perdida cronica de sangre (menstruacion abundante, sangrado gastrointestinal por ulceras, polipos o cancer colorrectal), ingesta dietetica insuficiente de hierro, malabsorcion de hierro por enfermedad celiaca o cirugia gastrica, y aumento de las necesidades de hierro durante el embarazo, lactancia o periodos de crecimiento rapido en la infancia. Ciertos medicamentos como los antiinflamatorios no esteroideos (AINEs) y anticoagulantes pueden contribuir al sangrado cronico. Las infecciones parasitarias intestinales son una causa importante en paises en desarrollo.",
    "causasEn": "The main causes include chronic blood loss (heavy menstruation, gastrointestinal bleeding from ulcers, polyps, or colorectal cancer), insufficient dietary iron intake, iron malabsorption from celiac disease or gastric surgery, and increased iron requirements during pregnancy, breastfeeding, or periods of rapid growth in childhood. Certain medications such as nonsteroidal anti-inflammatory drugs (NSAIDs) and anticoagulants can contribute to chronic bleeding. Intestinal parasitic infections are an important cause in developing countries.",
    "diagnosticoEs": "El diagnostico se basa en una biometria hematica completa que muestra hemoglobina baja, volumen corpuscular medio (VCM) disminuido (anemia microcitica), y amplitud de distribucion eritrocitaria (ADE/RDW) elevada. Los estudios de hierro revelan ferritina serica baja (marcador mas sensible), hierro serico bajo, capacidad total de fijacion de hierro (TIBC) elevada, y saturacion de transferrina disminuida. En casos de sangrado gastrointestinal sospechado, se realizan endoscopia y colonoscopia. Un frotis de sangre periferico puede mostrar eritrocitos hipocromicos y microciticos con anisocitosis.",
    "diagnosticoEn": "Diagnosis is based on a complete blood count showing low hemoglobin, decreased mean corpuscular volume (MCV) (microcytic anemia), and elevated red cell distribution width (RDW). Iron studies reveal low serum ferritin (most sensitive marker), low serum iron, elevated total iron-binding capacity (TIBC), and decreased transferrin saturation. In cases of suspected gastrointestinal bleeding, endoscopy and colonoscopy are performed. A peripheral blood smear may show hypochromic and microcytic erythrocytes with anisocytosis.",
    "tratamientoEs": "El tratamiento de primera linea es la suplementacion oral de hierro (sulfato ferroso 325 mg dos a tres veces al dia con el estomago vacio, idealmente con vitamina C para mejorar la absorcion). Si la suplementacion oral no es tolerada o es ineficaz, se administra hierro intravenoso (carboximaltosa ferrica o hierro sacarosa). Es fundamental identificar y tratar la causa subyacente del deficit: corregir la menorragia, tratar la enfermedad celiaca, erradicar infecciones parasitarias, o investigar y tratar fuentes de sangrado gastrointestinal. En anemia severa con inestabilidad hemodinamica puede requerirse transfusion de concentrados eritrocitarios. Se debe monitorizar la respuesta al tratamiento con reticulocitos a las 1-2 semanas y hemoglobina mensual.",
    "tratamientoEn": "First-line treatment is oral iron supplementation (ferrous sulfate 325 mg two to three times daily on an empty stomach, ideally with vitamin C to improve absorption). If oral supplementation is not tolerated or is ineffective, intravenous iron is administered (ferric carboxymaltose or iron sucrose). It is essential to identify and treat the underlying cause of the deficit: correct menorrhagia, treat celiac disease, eradicate parasitic infections, or investigate and treat sources of gastrointestinal bleeding. In severe anemia with hemodynamic instability, packed red blood cell transfusion may be required. Treatment response should be monitored with reticulocyte count at 1-2 weeks and monthly hemoglobin.",
    "prevencionEs": "Mantener una dieta rica en hierro que incluya carnes rojas magras, higado, mariscos, legumbres, espinacas, y cereales fortificados. Consumir alimentos ricos en vitamina C junto con fuentes de hierro para mejorar la absorcion. Evitar consumir te, cafe o lacteos junto con las comidas ricas en hierro ya que inhiben su absorcion. Las mujeres con menstruaciones abundantes deben consultar con su medico. Durante el embarazo se recomienda suplementacion de hierro profilactica. El tamizaje periodico con biometria hematica es recomendable en poblaciones de riesgo.",
    "prevencionEn": "Maintain a diet rich in iron including lean red meats, liver, shellfish, legumes, spinach, and fortified cereals. Consume vitamin C-rich foods alongside iron sources to improve absorption. Avoid consuming tea, coffee, or dairy with iron-rich meals as they inhibit absorption. Women with heavy menstruation should consult their doctor. During pregnancy, prophylactic iron supplementation is recommended. Periodic screening with complete blood count is advisable in at-risk populations.",
    "complicacionesEs": [
      "Insuficiencia cardiaca por sobrecarga compensatoria del corazon",
      "Retraso del desarrollo cognitivo y motor en ninos",
      "Complicaciones del embarazo: parto prematuro, bajo peso al nacer",
      "Mayor susceptibilidad a infecciones",
      "Sindrome de piernas inquietas cronico",
      "Depresion y deterioro de la calidad de vida"
    ],
    "complicacionesEn": [
      "Heart failure from compensatory cardiac overload",
      "Cognitive and motor developmental delay in children",
      "Pregnancy complications: premature birth, low birth weight",
      "Increased susceptibility to infections",
      "Chronic restless legs syndrome",
      "Depression and deterioration of quality of life"
    ],
    "cuandoConsultarEs": "Consulte a un medico si presenta fatiga persistente sin explicacion, palidez marcada, dificultad para respirar con actividades habituales, antojos de sustancias no alimenticias, o si tiene menstruaciones muy abundantes. Acuda a urgencias si experimenta dolor toracico, taquicardia intensa, mareo severo o desmayo, ya que la anemia grave puede poner en riesgo la vida.",
    "cuandoConsultarEn": "See a doctor if you experience persistent unexplained fatigue, marked pallor, shortness of breath with usual activities, cravings for non-food substances, or if you have very heavy menstrual periods. Go to the emergency room if you experience chest pain, severe tachycardia, severe dizziness, or fainting, as severe anemia can be life-threatening."
  },
  {
    "id": "leucemia-linfocitica-aguda",
    "nombreEs": "Leucemia Linfocitica Aguda",
    "nombreEn": "Acute Lymphocytic Leukemia",
    "descripcionEs": "La leucemia linfocitica aguda (LLA) es un cancer de la sangre y la medula osea que se caracteriza por la produccion excesiva de linfocitos inmaduros (linfoblastos) que desplazan a las celulas sanguineas normales. Es el cancer mas comun en ninos, con un pico de incidencia entre los 2 y 5 anos de edad, aunque tambien afecta a adultos mayores de 50 anos. La proliferacion descontrolada de linfoblastos interfiere con la produccion normal de globulos rojos, blancos y plaquetas, provocando anemia, infecciones recurrentes y sangrado. Con los protocolos modernos de quimioterapia, la tasa de curacion en ninos supera el 90%, mientras que en adultos oscila entre el 40-50%.",
    "descripcionEn": "Acute lymphocytic leukemia (ALL) is a cancer of the blood and bone marrow characterized by the excessive production of immature lymphocytes (lymphoblasts) that crowd out normal blood cells. It is the most common cancer in children, with a peak incidence between ages 2 and 5, although it also affects adults over 50. The uncontrolled proliferation of lymphoblasts interferes with normal production of red blood cells, white blood cells, and platelets, causing anemia, recurrent infections, and bleeding. With modern chemotherapy protocols, the cure rate in children exceeds 90%, while in adults it ranges from 40-50%.",
    "categoriaEs": "Oncologica",
    "categoriaEn": "Oncological",
    "sintomasEs": [
      "Fatiga extrema y debilidad progresiva",
      "Fiebre persistente o recurrente sin causa infecciosa clara",
      "Infecciones frecuentes y graves",
      "Sangrado facil: hematomas espontaneos, petequias, sangrado de encias",
      "Dolor oseo y articular (especialmente en ninos)",
      "Inflamacion de ganglios linfaticos (cuello, axilas, ingles)",
      "Hepatomegalia y esplenomegalia (abdomen distendido)",
      "Palidez marcada",
      "Perdida de peso involuntaria y perdida de apetito",
      "Sudoracion nocturna profusa",
      "Dificultad para respirar",
      "Dolor de cabeza y vision borrosa si hay afectacion del sistema nervioso central"
    ],
    "sintomasEn": [
      "Extreme fatigue and progressive weakness",
      "Persistent or recurrent fever without clear infectious cause",
      "Frequent and severe infections",
      "Easy bleeding: spontaneous bruising, petechiae, gum bleeding",
      "Bone and joint pain (especially in children)",
      "Swollen lymph nodes (neck, armpits, groin)",
      "Hepatomegaly and splenomegaly (distended abdomen)",
      "Marked pallor",
      "Involuntary weight loss and loss of appetite",
      "Profuse night sweats",
      "Shortness of breath",
      "Headache and blurred vision if central nervous system is involved"
    ],
    "causasEs": "La causa exacta de la LLA no se conoce completamente, pero se han identificado varios factores de riesgo. Las anomalias cromosomicas como la traslocacion t(12;21) en ninos o el cromosoma Filadelfia t(9;22) en adultos juegan un papel importante. La exposicion a radiacion ionizante, ciertos agentes quimicos como el benceno, y quimioterapia previa aumentan el riesgo. Algunos sindromes geneticos como el sindrome de Down, la neurofibromatosis tipo 1 y la ataxia-telangiectasia predisponen a la LLA. La inmunodeficiencia congenita o adquirida tambien es un factor de riesgo reconocido.",
    "causasEn": "The exact cause of ALL is not fully known, but several risk factors have been identified. Chromosomal abnormalities such as translocation t(12;21) in children or the Philadelphia chromosome t(9;22) in adults play an important role. Exposure to ionizing radiation, certain chemicals such as benzene, and prior chemotherapy increase risk. Some genetic syndromes such as Down syndrome, neurofibromatosis type 1, and ataxia-telangiectasia predispose to ALL. Congenital or acquired immunodeficiency is also a recognized risk factor.",
    "diagnosticoEs": "El diagnostico requiere una biometria hematica completa que tipicamente muestra leucocitos elevados con linfoblastos circulantes, anemia y trombocitopenia. El aspirado y biopsia de medula osea son esenciales y muestran infiltracion por mas del 20% de linfoblastos. La citometria de flujo determina el inmunofenotipo (LLA de celulas B o T). Los estudios citogeneticos y moleculares identifican anomalias cromosomicas pronosticas como el cromosoma Filadelfia. Se realiza puncion lumbar para evaluar la afectacion del sistema nervioso central. Las pruebas de imagen (TAC, radiografia de torax) evaluan afectacion extramedular.",
    "diagnosticoEn": "Diagnosis requires a complete blood count that typically shows elevated white blood cells with circulating lymphoblasts, anemia, and thrombocytopenia. Bone marrow aspiration and biopsy are essential and show infiltration by more than 20% lymphoblasts. Flow cytometry determines the immunophenotype (B-cell or T-cell ALL). Cytogenetic and molecular studies identify prognostic chromosomal abnormalities such as the Philadelphia chromosome. Lumbar puncture is performed to evaluate central nervous system involvement. Imaging studies (CT, chest X-ray) evaluate extramedullary involvement.",
    "tratamientoEs": "El tratamiento de la LLA se divide en varias fases. La induccion a la remision dura 4-6 semanas e incluye quimioterapia combinada con vincristina, prednisona, daunorrubicina y L-asparaginasa, con el objetivo de eliminar mas del 99% de las celulas leucemicas. La consolidacion intensifica el tratamiento con altas dosis de metotrexato y citarabina. El mantenimiento dura 2-3 anos con mercaptopurina diaria y metotrexato semanal. Se administra profilaxis del sistema nervioso central con quimioterapia intratecal. En pacientes con cromosoma Filadelfia positivo se anaden inhibidores de tirosina quinasa (imatinib, dasatinib). El trasplante alogeneico de celulas madre hematopoyeticas se considera en LLA de alto riesgo o recaida. Las terapias innovadoras incluyen blinatumomab (anticuerpo biespecifico) y terapia con celulas CAR-T para enfermedad refractaria o en recaida.",
    "tratamientoEn": "ALL treatment is divided into several phases. Remission induction lasts 4-6 weeks and includes combination chemotherapy with vincristine, prednisone, daunorubicin, and L-asparaginase, aiming to eliminate more than 99% of leukemia cells. Consolidation intensifies treatment with high-dose methotrexate and cytarabine. Maintenance lasts 2-3 years with daily mercaptopurine and weekly methotrexate. Central nervous system prophylaxis is administered with intrathecal chemotherapy. In Philadelphia chromosome-positive patients, tyrosine kinase inhibitors (imatinib, dasatinib) are added. Allogeneic hematopoietic stem cell transplant is considered in high-risk or relapsed ALL. Innovative therapies include blinatumomab (bispecific antibody) and CAR-T cell therapy for refractory or relapsed disease.",
    "prevencionEs": "No existe una forma comprobada de prevenir la leucemia linfocitica aguda. Sin embargo, se recomienda evitar la exposicion innecesaria a radiacion ionizante y a productos quimicos como el benceno. Mantener un estilo de vida saludable puede fortalecer el sistema inmunologico en general. El diagnostico temprano es crucial para mejorar el pronostico, por lo que se debe estar atento a sintomas persistentes como fatiga, fiebre inexplicable, sangrado anormal y dolor oseo, especialmente en ninos. El asesoramiento genetico puede ser util en familias con sindromes de predisposicion conocidos.",
    "prevencionEn": "There is no proven way to prevent acute lymphocytic leukemia. However, avoiding unnecessary exposure to ionizing radiation and chemicals such as benzene is recommended. Maintaining a healthy lifestyle can strengthen the immune system in general. Early diagnosis is crucial for improving prognosis, so one should be alert to persistent symptoms such as fatigue, unexplained fever, abnormal bleeding, and bone pain, especially in children. Genetic counseling may be useful in families with known predisposition syndromes.",
    "complicacionesEs": [
      "Neutropenia febril y sepsis potencialmente mortal",
      "Hemorragia grave por trombocitopenia severa",
      "Infiltracion leucemica del sistema nervioso central (meningitis leucemica)",
      "Sindrome de lisis tumoral al iniciar quimioterapia",
      "Infecciones oportunistas por inmunosupresion del tratamiento",
      "Efectos secundarios a largo plazo: cardiotoxicidad, infertilidad, canceres secundarios",
      "Enfermedad injerto contra huesped post-trasplante",
      "Recaida de la enfermedad"
    ],
    "complicacionesEn": [
      "Febrile neutropenia and potentially fatal sepsis",
      "Severe hemorrhage from severe thrombocytopenia",
      "Leukemic infiltration of the central nervous system (leukemic meningitis)",
      "Tumor lysis syndrome when starting chemotherapy",
      "Opportunistic infections from treatment immunosuppression",
      "Long-term side effects: cardiotoxicity, infertility, secondary cancers",
      "Graft-versus-host disease post-transplant",
      "Disease relapse"
    ],
    "cuandoConsultarEs": "Consulte inmediatamente si su hijo o usted presenta fatiga severa persistente, fiebre que no cede, hematomas que aparecen sin golpes, sangrado por encias o nariz sin causa, dolor oseo que despierta por la noche, ganglios inflamados en multiples areas, o palidez marcada. Acuda a urgencias si hay fiebre alta con escalofrios durante el tratamiento (neutropenia febril), sangrado que no para, confusion, dificultad para respirar severa, o dolor de cabeza intenso con rigidez de cuello.",
    "cuandoConsultarEn": "Consult immediately if your child or you experience severe persistent fatigue, fever that does not subside, bruises appearing without trauma, gum or nose bleeding without cause, bone pain that wakes at night, swollen lymph nodes in multiple areas, or marked pallor. Go to the emergency room if there is high fever with chills during treatment (febrile neutropenia), uncontrollable bleeding, confusion, severe difficulty breathing, or intense headache with neck stiffness."
  },
  {
    "id": "linfoma-hodgkin",
    "nombreEs": "Linfoma de Hodgkin",
    "nombreEn": "Hodgkin Lymphoma",
    "descripcionEs": "El linfoma de Hodgkin es un cancer del sistema linfatico que se origina en los linfocitos B y se distingue por la presencia de celulas de Reed-Sternberg, celulas gigantes multinucleadas que son el sello diagnostico de esta enfermedad. Representa aproximadamente el 10% de todos los linfomas y tiene una distribucion bimodal por edad, con picos entre los 15-35 anos y despues de los 55 anos. Es uno de los canceres mas curables, con tasas de supervivencia a 5 anos superiores al 85% gracias a los avances en quimioterapia y radioterapia. La enfermedad tipicamente se presenta con adenopatias cervicales indoloras y progresa de forma predecible a traves de grupos contiguos de ganglios linfaticos.",
    "descripcionEn": "Hodgkin lymphoma is a cancer of the lymphatic system that originates in B lymphocytes and is distinguished by the presence of Reed-Sternberg cells, giant multinucleated cells that are the diagnostic hallmark of this disease. It represents approximately 10% of all lymphomas and has a bimodal age distribution, with peaks between ages 15-35 and after 55. It is one of the most curable cancers, with 5-year survival rates exceeding 85% thanks to advances in chemotherapy and radiation therapy. The disease typically presents with painless cervical lymphadenopathy and progresses predictably through contiguous groups of lymph nodes.",
    "categoriaEs": "Oncologica",
    "categoriaEn": "Oncological",
    "sintomasEs": [
      "Inflamacion indolora de ganglios linfaticos, generalmente en cuello, axila o ingle",
      "Fiebre persistente de causa desconocida",
      "Sudoracion nocturna empapante",
      "Perdida de peso inexplicable mayor al 10% del peso corporal en 6 meses (sintoma B)",
      "Fatiga intensa y persistente",
      "Prurito generalizado sin erupcion cutanea visible",
      "Dolor ganglionar inducido por consumo de alcohol (signo de Hoster)",
      "Tos persistente o dificultad para respirar si hay afectacion mediastinica",
      "Dolor toracico o sensacion de presion",
      "Hepatomegalia o esplenomegalia"
    ],
    "sintomasEn": [
      "Painless swelling of lymph nodes, usually in neck, armpit, or groin",
      "Persistent fever of unknown cause",
      "Drenching night sweats",
      "Unexplained weight loss greater than 10% of body weight in 6 months (B symptom)",
      "Intense and persistent fatigue",
      "Generalized itching without visible skin rash",
      "Lymph node pain induced by alcohol consumption (Hoster sign)",
      "Persistent cough or difficulty breathing if mediastinal involvement",
      "Chest pain or pressure sensation",
      "Hepatomegaly or splenomegaly"
    ],
    "causasEs": "La causa exacta del linfoma de Hodgkin no esta completamente establecida, pero se ha asociado fuertemente con la infeccion por el virus de Epstein-Barr (VEB), que se detecta en aproximadamente el 40% de los casos. La inmunosupresion, incluyendo la infeccion por VIH, aumenta significativamente el riesgo. Existe una susceptibilidad genetica, ya que hermanos de pacientes con linfoma de Hodgkin tienen un riesgo 3-7 veces mayor. La autoinmunidad y ciertas variantes del sistema HLA (antigenos leucocitarios humanos) tambien se han implicado como factores predisponentes.",
    "causasEn": "The exact cause of Hodgkin lymphoma is not fully established, but it has been strongly associated with Epstein-Barr virus (EBV) infection, which is detected in approximately 40% of cases. Immunosuppression, including HIV infection, significantly increases risk. There is genetic susceptibility, as siblings of Hodgkin lymphoma patients have a 3-7 times higher risk. Autoimmunity and certain HLA (human leukocyte antigen) system variants have also been implicated as predisposing factors.",
    "diagnosticoEs": "El diagnostico definitivo requiere biopsia excisional de ganglio linfatico que demuestre celulas de Reed-Sternberg en el contexto histologico adecuado. La inmunohistoquimica muestra positividad para CD15 y CD30. La estadificacion se realiza mediante PET-TAC de cuerpo completo (estandar actual), que es superior al TAC solo para detectar enfermedad metabolicamente activa. Se clasifica segun el sistema de Ann Arbor modificado (estadios I-IV) con designaciones A (sin sintomas) o B (con sintomas constitucionales). Los laboratorios incluyen biometria hematica, velocidad de sedimentacion globular (VSG), albumina, funcion hepatica y funcion renal. La biopsia de medula osea ha sido en gran parte reemplazada por la PET-TAC.",
    "diagnosticoEn": "Definitive diagnosis requires excisional lymph node biopsy demonstrating Reed-Sternberg cells in the appropriate histological context. Immunohistochemistry shows positivity for CD15 and CD30. Staging is performed with whole-body PET-CT (current standard), which is superior to CT alone for detecting metabolically active disease. It is classified according to the modified Ann Arbor system (stages I-IV) with A (no symptoms) or B (with constitutional symptoms) designations. Labs include complete blood count, erythrocyte sedimentation rate (ESR), albumin, liver function, and kidney function. Bone marrow biopsy has been largely replaced by PET-CT.",
    "tratamientoEs": "El tratamiento depende del estadio y los factores pronosticos. Para estadios tempranos favorables (I-IIA sin factores adversos), el regimen estandar es ABVD (doxorrubicina, bleomicina, vinblastina, dacarbazina) por 2-4 ciclos seguido de radioterapia de campo involucrado. Para estadios avanzados (III-IV), se utilizan 6 ciclos de ABVD o el regimen escalado de BEACOPP (bleomicina, etopesido, doxorrubicina, ciclofosfamida, vincristina, procarbazina, prednisona) en casos de alto riesgo. La PET interina despues de 2 ciclos guia la decision de escalar o desescalar el tratamiento. Para enfermedad recidivante o refractaria, se emplea quimioterapia de rescate seguida de trasplante autologo de celulas madre. Las terapias mas recientes incluyen brentuximab vedotin (anticuerpo anti-CD30) y los inhibidores de punto de control inmunologico (nivolumab, pembrolizumab).",
    "tratamientoEn": "Treatment depends on stage and prognostic factors. For favorable early stages (I-IIA without adverse factors), the standard regimen is ABVD (doxorubicin, bleomycin, vinblastine, dacarbazine) for 2-4 cycles followed by involved-field radiation therapy. For advanced stages (III-IV), 6 cycles of ABVD or escalated BEACOPP (bleomycin, etoposide, doxorubicin, cyclophosphamide, vincristine, procarbazine, prednisone) is used in high-risk cases. Interim PET after 2 cycles guides the decision to escalate or de-escalate treatment. For relapsed or refractory disease, salvage chemotherapy followed by autologous stem cell transplant is employed. More recent therapies include brentuximab vedotin (anti-CD30 antibody) and immune checkpoint inhibitors (nivolumab, pembrolizumab).",
    "prevencionEs": "No existen medidas especificas para prevenir el linfoma de Hodgkin. Mantener un sistema inmunologico saludable mediante una buena nutricion, ejercicio regular y manejo adecuado del estres puede ser beneficioso en general. Las personas con infeccion por VIH deben mantener un tratamiento antirretroviral optimo para reducir el riesgo. Se recomienda atencion medica temprana ante la aparicion de ganglios linfaticos persistentemente inflamados, fiebre inexplicable, sudoracion nocturna o perdida de peso sin causa aparente. La deteccion temprana mejora significativamente el pronostico.",
    "prevencionEn": "There are no specific measures to prevent Hodgkin lymphoma. Maintaining a healthy immune system through good nutrition, regular exercise, and adequate stress management may be generally beneficial. People with HIV infection should maintain optimal antiretroviral treatment to reduce risk. Early medical attention is recommended for persistent swollen lymph nodes, unexplained fever, night sweats, or unexplained weight loss. Early detection significantly improves prognosis.",
    "complicacionesEs": [
      "Efectos tardios de la radioterapia: hipotiroidismo, enfermedad cardiaca, canceres secundarios de mama o pulmon",
      "Infertilidad por quimioterapia (se recomienda criopreservacion antes del tratamiento)",
      "Toxicidad pulmonar por bleomicina",
      "Neuropatia periferica por vincristina",
      "Canceres secundarios: leucemia mieloide aguda, sindrome mielodisplasico",
      "Inmunosupresion prolongada con mayor riesgo de infecciones",
      "Fatiga cronica post-tratamiento",
      "Riesgo cardiovascular aumentado a largo plazo"
    ],
    "complicacionesEn": [
      "Late effects of radiation therapy: hypothyroidism, heart disease, secondary breast or lung cancers",
      "Infertility from chemotherapy (cryopreservation recommended before treatment)",
      "Pulmonary toxicity from bleomycin",
      "Peripheral neuropathy from vincristine",
      "Secondary cancers: acute myeloid leukemia, myelodysplastic syndrome",
      "Prolonged immunosuppression with increased infection risk",
      "Post-treatment chronic fatigue",
      "Increased long-term cardiovascular risk"
    ],
    "cuandoConsultarEs": "Consulte a un medico si nota ganglios linfaticos agrandados que persisten por mas de 2-3 semanas sin causa infecciosa aparente, especialmente si son indoloros y firmes. Busque atencion urgente si tiene fiebre persistente inexplicable, sudoracion nocturna que empapa la ropa de cama, perdida de peso significativa sin cambios en la dieta, prurito severo generalizado, o si experimenta dificultad para respirar progresiva. Durante el tratamiento, acuda a urgencias ante fiebre con neutropenia o cualquier signo de infeccion.",
    "cuandoConsultarEn": "See a doctor if you notice enlarged lymph nodes persisting for more than 2-3 weeks without apparent infectious cause, especially if they are painless and firm. Seek urgent care if you have persistent unexplained fever, night sweats that soak bedclothes, significant weight loss without dietary changes, severe generalized itching, or if you experience progressive difficulty breathing. During treatment, go to the emergency room for fever with neutropenia or any sign of infection."
  },
  {
    "id": "trombocitopenia",
    "nombreEs": "Trombocitopenia",
    "nombreEn": "Thrombocytopenia",
    "descripcionEs": "La trombocitopenia es una condicion hematologica caracterizada por un recuento de plaquetas inferior a 150,000/microlitro de sangre. Las plaquetas son esenciales para la coagulacion y la hemostasia, por lo que su deficiencia incrementa el riesgo de sangrado. Las causas son multiples e incluyen destruccion inmunologica acelerada, produccion disminuida en la medula osea, o secuestro esplenico. La gravedad clinica varia ampliamente: una trombocitopenia leve puede ser asintomatica, mientras que recuentos menores de 10,000-20,000/microlitro pueden provocar hemorragias espontaneas potencialmente mortales, incluyendo hemorragia intracraneal.",
    "descripcionEn": "Thrombocytopenia is a hematological condition characterized by a platelet count below 150,000/microliter of blood. Platelets are essential for coagulation and hemostasis, so their deficiency increases the risk of bleeding. The causes are multiple and include accelerated immune destruction, decreased bone marrow production, or splenic sequestration. Clinical severity varies widely: mild thrombocytopenia may be asymptomatic, while counts below 10,000-20,000/microliter can cause potentially fatal spontaneous hemorrhages, including intracranial hemorrhage.",
    "categoriaEs": "Plaquetaria",
    "categoriaEn": "Platelet disorder",
    "sintomasEs": [
      "Petequias: puntos rojos pequenos en la piel que no desaparecen con la presion",
      "Purpura: manchas violaceas mas grandes en la piel",
      "Hematomas espontaneos o desproporcionados al trauma",
      "Sangrado prolongado de cortes menores",
      "Sangrado de encias al cepillarse los dientes",
      "Epistaxis (sangrado nasal) frecuente o prolongado",
      "Menstruacion excesivamente abundante (menorragia)",
      "Sangre en la orina (hematuria) o en las heces (melena, hematoquecia)",
      "Sangrado excesivo durante procedimientos dentales o quirurgicos",
      "En casos severos: hemorragia retiniana, hemorragia intracraneal"
    ],
    "sintomasEn": [
      "Petechiae: small red dots on skin that do not disappear with pressure",
      "Purpura: larger purplish spots on the skin",
      "Spontaneous or disproportionate bruising from minor trauma",
      "Prolonged bleeding from minor cuts",
      "Gum bleeding when brushing teeth",
      "Epistaxis (nosebleeds) frequent or prolonged",
      "Excessively heavy menstruation (menorrhagia)",
      "Blood in urine (hematuria) or stool (melena, hematochezia)",
      "Excessive bleeding during dental or surgical procedures",
      "In severe cases: retinal hemorrhage, intracranial hemorrhage"
    ],
    "causasEs": "Las causas de trombocitopenia se clasifican en tres mecanismos principales. La destruccion aumentada incluye la purpura trombocitopenica inmune (PTI), purpura trombotica trombocitopenica (PTT), sindrome hemolitico uremico (SHU), coagulacion intravascular diseminada (CID), trombocitopenia inducida por heparina (TIH), y trombocitopenia asociada a medicamentos (quinina, sulfamidas, anticonvulsivantes). La produccion disminuida se debe a enfermedades de la medula osea como leucemias, sindromes mielodisplasicos, anemia aplasica, deficiencia de B12 o folato, infecciones virales (VIH, hepatitis C), quimioterapia, y radioterapia. El secuestro esplenico ocurre en la esplenomegalia por cirrosis hepatica, enfermedades de almacenamiento, o sarcoidosis.",
    "causasEn": "Causes of thrombocytopenia are classified into three main mechanisms. Increased destruction includes immune thrombocytopenic purpura (ITP), thrombotic thrombocytopenic purpura (TTP), hemolytic uremic syndrome (HUS), disseminated intravascular coagulation (DIC), heparin-induced thrombocytopenia (HIT), and drug-associated thrombocytopenia (quinine, sulfonamides, anticonvulsants). Decreased production is due to bone marrow diseases such as leukemias, myelodysplastic syndromes, aplastic anemia, B12 or folate deficiency, viral infections (HIV, hepatitis C), chemotherapy, and radiation therapy. Splenic sequestration occurs in splenomegaly from hepatic cirrhosis, storage diseases, or sarcoidosis.",
    "diagnosticoEs": "La evaluacion comienza con una biometria hematica completa con revision del frotis de sangre periferico para confirmar la trombocitopenia verdadera y descartar pseudotrombocitopenia por agregacion plaquetaria con EDTA. Se solicitan estudios de coagulacion (TP, TTPa, fibrinogeno, dimero D), funcion hepatica, funcion renal, VIH, hepatitis B y C, niveles de B12 y folato, y prueba directa de antiglobulina (Coombs). En sospecha de PTT se mide la actividad de ADAMTS13. Si la causa no es evidente, se realiza aspirado y biopsia de medula osea para evaluar la produccion de megacariocitos. La ecografia abdominal evalua el tamano del bazo.",
    "diagnosticoEn": "Evaluation begins with a complete blood count with peripheral blood smear review to confirm true thrombocytopenia and rule out pseudothrombocytopenia from EDTA-induced platelet aggregation. Coagulation studies (PT, aPTT, fibrinogen, D-dimer), liver function, kidney function, HIV, hepatitis B and C, B12 and folate levels, and direct antiglobulin test (Coombs) are ordered. In suspected TTP, ADAMTS13 activity is measured. If the cause is not evident, bone marrow aspiration and biopsy are performed to evaluate megakaryocyte production. Abdominal ultrasound evaluates spleen size.",
    "tratamientoEs": "El tratamiento depende de la causa subyacente y la severidad. En la PTI, la primera linea incluye corticosteroides (prednisona 1 mg/kg/dia) e inmunoglobulina intravenosa (IgIV) para casos que requieren elevacion rapida de plaquetas. Los agonistas del receptor de trombopoyetina (eltrombopag, romiplostim) estimulan la produccion de plaquetas. El rituximab (anti-CD20) se usa como segunda linea. La esplenectomia se reserva para casos refractarios. En la trombocitopenia inducida por medicamentos, la suspension del farmaco causante suele ser suficiente. La PTT requiere plasmaferesis urgente y caplacizumab. La transfusion de plaquetas se reserva para sangrado activo grave o recuentos menores de 10,000/microlitro, y esta contraindicada en PTT y TIH. En trombocitopenia por quimioterapia, se puede usar oprelvekin o transfusion profilactica.",
    "tratamientoEn": "Treatment depends on the underlying cause and severity. In ITP, first-line treatment includes corticosteroids (prednisone 1 mg/kg/day) and intravenous immunoglobulin (IVIG) for cases requiring rapid platelet elevation. Thrombopoietin receptor agonists (eltrombopag, romiplostim) stimulate platelet production. Rituximab (anti-CD20) is used as second line. Splenectomy is reserved for refractory cases. In drug-induced thrombocytopenia, discontinuation of the causative drug is usually sufficient. TTP requires urgent plasmapheresis and caplacizumab. Platelet transfusion is reserved for active severe bleeding or counts below 10,000/microliter, and is contraindicated in TTP and HIT. In chemotherapy-induced thrombocytopenia, oprelvekin or prophylactic transfusion may be used.",
    "prevencionEs": "La prevencion especifica depende de la causa. Se debe evitar el uso innecesario de medicamentos conocidos por causar trombocitopenia. Los pacientes que reciben heparina deben tener monitoreo regular de plaquetas para detectar TIH tempranamente. Limitar el consumo excesivo de alcohol previene la trombocitopenia asociada a hepatopatia. Mantener una nutricion adecuada con suficiente B12 y acido folico previene la trombocitopenia por deficit nutricional. La vacunacion y medidas de higiene previenen infecciones virales que pueden causar trombocitopenia. Los pacientes con trombocitopenia cronica deben evitar deportes de contacto y medicamentos que afecten la funcion plaquetaria como aspirina e ibuprofeno.",
    "prevencionEn": "Specific prevention depends on the cause. Unnecessary use of medications known to cause thrombocytopenia should be avoided. Patients receiving heparin should have regular platelet monitoring to detect HIT early. Limiting excessive alcohol consumption prevents thrombocytopenia associated with liver disease. Maintaining adequate nutrition with sufficient B12 and folic acid prevents thrombocytopenia from nutritional deficiency. Vaccination and hygiene measures prevent viral infections that can cause thrombocytopenia. Patients with chronic thrombocytopenia should avoid contact sports and medications that affect platelet function such as aspirin and ibuprofen.",
    "complicacionesEs": [
      "Hemorragia intracraneal (complicacion mas temida, potencialmente mortal)",
      "Hemorragia gastrointestinal masiva",
      "Anemia secundaria por sangrado cronico",
      "Sangrado postquirurgico excesivo",
      "Hemartrosis (sangrado articular)",
      "Hemorragia retiniana con perdida visual",
      "Complicaciones del tratamiento: efectos secundarios de esteroides, riesgo de infeccion post-esplenectomia"
    ],
    "complicacionesEn": [
      "Intracranial hemorrhage (most feared complication, potentially fatal)",
      "Massive gastrointestinal hemorrhage",
      "Secondary anemia from chronic bleeding",
      "Excessive postoperative bleeding",
      "Hemarthrosis (joint bleeding)",
      "Retinal hemorrhage with visual loss",
      "Treatment complications: steroid side effects, post-splenectomy infection risk"
    ],
    "cuandoConsultarEs": "Consulte a un medico si nota petequias o hematomas inexplicables, sangrado de encias persistente, epistaxis recurrente, o menstruacion inusualmente abundante. Acuda a urgencias inmediatamente si presenta sangrado que no se detiene con presion, sangre en orina o heces, vomito con sangre, dolor de cabeza severo e inusual (posible hemorragia intracraneal), vision borrosa subita, confusion, debilidad de un lado del cuerpo, o si tiene un recuento de plaquetas conocido menor a 20,000/microlitro.",
    "cuandoConsultarEn": "See a doctor if you notice unexplained petechiae or bruises, persistent gum bleeding, recurrent nosebleeds, or unusually heavy menstruation. Go to the emergency room immediately if you have bleeding that does not stop with pressure, blood in urine or stool, bloody vomit, severe and unusual headache (possible intracranial hemorrhage), sudden blurred vision, confusion, weakness on one side of the body, or if you have a known platelet count below 20,000/microliter."
  },
  {
    "id": "hemofilia-detallada",
    "nombreEs": "Hemofilia",
    "nombreEn": "Hemophilia",
    "descripcionEs": "La hemofilia es un trastorno hemorragico hereditario ligado al cromosoma X causado por la deficiencia o disfuncion de factores de coagulacion especificos. La hemofilia A (deficiencia de factor VIII) representa aproximadamente el 80% de los casos, mientras que la hemofilia B (deficiencia de factor IX, tambien conocida como enfermedad de Christmas) constituye el 20% restante. Afecta predominantemente a varones, con una incidencia de aproximadamente 1 en 5,000 nacimientos masculinos para hemofilia A y 1 en 25,000 para hemofilia B. Las mujeres portadoras son generalmente asintomaticas pero pueden tener niveles reducidos de factor. La severidad se clasifica segun el nivel de actividad del factor: severa (<1%), moderada (1-5%) y leve (5-40%).",
    "descripcionEn": "Hemophilia is an inherited bleeding disorder linked to the X chromosome caused by deficiency or dysfunction of specific coagulation factors. Hemophilia A (factor VIII deficiency) represents approximately 80% of cases, while hemophilia B (factor IX deficiency, also known as Christmas disease) constitutes the remaining 20%. It predominantly affects males, with an incidence of approximately 1 in 5,000 male births for hemophilia A and 1 in 25,000 for hemophilia B. Female carriers are generally asymptomatic but may have reduced factor levels. Severity is classified according to factor activity level: severe (<1%), moderate (1-5%), and mild (5-40%).",
    "categoriaEs": "Coagulacion",
    "categoriaEn": "Coagulation",
    "sintomasEs": [
      "Hemartrosis: sangrado articular recurrente (rodillas, codos, tobillos) con dolor, hinchazon y rigidez",
      "Hematomas musculares profundos que pueden comprimir nervios o vasos",
      "Sangrado prolongado despues de cortes, cirugia o procedimientos dentales",
      "Sangrado despues de circuncision (puede ser la primera presentacion en neonatos)",
      "Epistaxis frecuente y dificil de controlar",
      "Hematuria espontanea",
      "Sangrado intracraneal espontaneo o postraumatico (emergencia)",
      "Sangrado gastrointestinal",
      "Equimosis extensas con traumatismos menores",
      "En hemofilia severa: sangrado espontaneo sin trauma aparente",
      "Pseudotumores hemofilicos (hematomas encapsulados cronicos)"
    ],
    "sintomasEn": [
      "Hemarthrosis: recurrent joint bleeding (knees, elbows, ankles) with pain, swelling, and stiffness",
      "Deep muscle hematomas that can compress nerves or vessels",
      "Prolonged bleeding after cuts, surgery, or dental procedures",
      "Bleeding after circumcision (may be first presentation in neonates)",
      "Frequent and difficult to control epistaxis",
      "Spontaneous hematuria",
      "Spontaneous or post-traumatic intracranial bleeding (emergency)",
      "Gastrointestinal bleeding",
      "Extensive ecchymosis with minor trauma",
      "In severe hemophilia: spontaneous bleeding without apparent trauma",
      "Hemophilic pseudotumors (chronic encapsulated hematomas)"
    ],
    "causasEs": "La hemofilia es un trastorno genetico causado por mutaciones en los genes F8 (hemofilia A) o F9 (hemofilia B), ambos localizados en el cromosoma X. La herencia es recesiva ligada al X: las madres portadoras transmiten el gen defectuoso al 50% de sus hijos varones. Aproximadamente un tercio de los casos surgen de mutaciones de novo sin historia familiar previa. Las mutaciones incluyen inversiones del intron 22 (la mas comun en hemofilia A severa), mutaciones puntuales, deleciones e inserciones. La hemofilia adquirida es rara y ocurre por autoanticuerpos contra el factor VIII, asociada a enfermedades autoinmunes, cancer, embarazo o medicamentos.",
    "causasEn": "Hemophilia is a genetic disorder caused by mutations in the F8 gene (hemophilia A) or F9 gene (hemophilia B), both located on the X chromosome. Inheritance is X-linked recessive: carrier mothers pass the defective gene to 50% of their male offspring. Approximately one-third of cases arise from de novo mutations without prior family history. Mutations include intron 22 inversions (the most common in severe hemophilia A), point mutations, deletions, and insertions. Acquired hemophilia is rare and occurs due to autoantibodies against factor VIII, associated with autoimmune diseases, cancer, pregnancy, or medications.",
    "diagnosticoEs": "El diagnostico se sospecha ante sangrado desproporcionado o hemartrosis en varones. Los estudios de coagulacion muestran TTPa prolongado con TP normal y recuento de plaquetas normal. El diagnostico definitivo se establece midiendo los niveles especificos de actividad de factor VIII (hemofilia A) o factor IX (hemofilia B). El nivel de actividad determina la severidad. La prueba de mezcla diferencia la deficiencia de factor de la presencia de inhibidores (anticuerpos contra el factor). El titulo de inhibidores se mide en unidades Bethesda. El diagnostico prenatal es posible mediante analisis genetico, y las pruebas de portadoras identifican a mujeres en riesgo. Los estudios geneticos moleculares confirman la mutacion especifica.",
    "diagnosticoEn": "Diagnosis is suspected with disproportionate bleeding or hemarthrosis in males. Coagulation studies show prolonged aPTT with normal PT and normal platelet count. Definitive diagnosis is established by measuring specific factor VIII activity levels (hemophilia A) or factor IX (hemophilia B). The activity level determines severity. Mixing studies differentiate factor deficiency from the presence of inhibitors (antibodies against the factor). Inhibitor titers are measured in Bethesda units. Prenatal diagnosis is possible through genetic analysis, and carrier testing identifies at-risk women. Molecular genetic studies confirm the specific mutation.",
    "tratamientoEs": "El pilar del tratamiento es la reposicion del factor deficiente. En hemofilia A se administra factor VIII recombinante o derivado del plasma, y en hemofilia B factor IX recombinante. El tratamiento puede ser a demanda (ante episodios de sangrado) o profilactico (infusiones regulares 2-3 veces por semana para prevenir sangrado, estandar en hemofilia severa). Emicizumab es un anticuerpo biespecifico aprobado para profilaxis de hemofilia A que imita la funcion del factor VIII y se administra subcutaneamente cada 1-4 semanas. La terapia genica con valoctocogene roxaparvovec (para hemofilia A) y etranacogene dezaparvovec (para hemofilia B) representa un avance revolucionario que puede lograr niveles sostenidos de factor con una sola infusion. El manejo de inhibidores incluye terapia de tolerancia inmune, agentes de bypass (FEIBA, factor VIIa recombinante) y emicizumab. La desmopresina (DDAVP) puede ser util en hemofilia A leve para liberar factor VIII almacenado. Los antifibrinoliticos (acido tranexamico, acido aminocaproico) son adyuvantes utiles en sangrado mucocutaneo.",
    "tratamientoEn": "The cornerstone of treatment is replacement of the deficient factor. In hemophilia A, recombinant or plasma-derived factor VIII is administered, and in hemophilia B, recombinant factor IX. Treatment can be on-demand (during bleeding episodes) or prophylactic (regular infusions 2-3 times weekly to prevent bleeding, standard in severe hemophilia). Emicizumab is a bispecific antibody approved for hemophilia A prophylaxis that mimics factor VIII function and is administered subcutaneously every 1-4 weeks. Gene therapy with valoctocogene roxaparvovec (for hemophilia A) and etranacogene dezaparvovec (for hemophilia B) represents a revolutionary advance that can achieve sustained factor levels with a single infusion. Inhibitor management includes immune tolerance therapy, bypassing agents (FEIBA, recombinant factor VIIa), and emicizumab. Desmopressin (DDAVP) may be useful in mild hemophilia A to release stored factor VIII. Antifibrinolytics (tranexamic acid, aminocaproic acid) are useful adjuncts for mucocutaneous bleeding.",
    "prevencionEs": "La hemofilia es genetica y no puede prevenirse, pero se pueden prevenir sus complicaciones. El asesoramiento genetico es fundamental para familias afectadas, permitiendo decisiones reproductivas informadas y diagnostico prenatal. La profilaxis con factor o emicizumab desde edad temprana previene la artropatia hemofilica. Los pacientes deben evitar medicamentos que interfieran con la coagulacion (aspirina, AINEs, anticoagulantes) y deportes de alto contacto. Se recomienda ejercicio regular de bajo impacto como natacion. El uso de brazaletes de identificacion medica y tener un plan de emergencia son esenciales. La vacunacion hepatitis A y B es importante ya que estos pacientes pueden recibir productos sanguineos. La educacion del paciente y la familia sobre reconocimiento temprano de sangrado es crucial.",
    "prevencionEn": "Hemophilia is genetic and cannot be prevented, but its complications can be prevented. Genetic counseling is fundamental for affected families, enabling informed reproductive decisions and prenatal diagnosis. Prophylaxis with factor or emicizumab from an early age prevents hemophilic arthropathy. Patients should avoid medications that interfere with coagulation (aspirin, NSAIDs, anticoagulants) and high-contact sports. Regular low-impact exercise such as swimming is recommended. Medical identification bracelets and having an emergency plan are essential. Hepatitis A and B vaccination is important since these patients may receive blood products. Patient and family education on early recognition of bleeding is crucial.",
    "complicacionesEs": [
      "Artropatia hemofilica: dano articular cronico por sangrados repetidos, principal causa de discapacidad",
      "Desarrollo de inhibidores (anticuerpos neutralizantes contra el factor, ocurre en 20-30% de hemofilia A severa)",
      "Hemorragia intracraneal (principal causa de muerte relacionada con hemofilia)",
      "Sindrome compartimental por hematomas musculares",
      "Pseudotumores hemofilicos",
      "Infecciones transmitidas por transfusion (historicamente VIH, hepatitis C; actualmente muy raro con productos recombinantes)",
      "Impacto psicosocial: ansiedad, depresion, limitaciones de actividad",
      "Artritis cronica con necesidad de reemplazo articular"
    ],
    "complicacionesEn": [
      "Hemophilic arthropathy: chronic joint damage from repeated bleeds, leading cause of disability",
      "Development of inhibitors (neutralizing antibodies against factor, occurs in 20-30% of severe hemophilia A)",
      "Intracranial hemorrhage (leading cause of hemophilia-related death)",
      "Compartment syndrome from muscle hematomas",
      "Hemophilic pseudotumors",
      "Transfusion-transmitted infections (historically HIV, hepatitis C; currently very rare with recombinant products)",
      "Psychosocial impact: anxiety, depression, activity limitations",
      "Chronic arthritis requiring joint replacement"
    ],
    "cuandoConsultarEs": "Los pacientes con hemofilia deben tener seguimiento regular en un centro especializado de hemofilia. Consulte inmediatamente ante cualquier sangrado articular (dolor, hinchazon, calor en la articulacion), sangrado muscular, o sangrado que no se detiene con medidas locales. Acuda a urgencias de inmediato ante traumatismo craneal (incluso menor), dolor de cabeza severo inusual, vision doble, vomito persistente, dolor abdominal agudo, sangrado abundante, dificultad para respirar, o cualquier signo de hemorragia interna. Siempre informe a cualquier medico o dentista sobre su condicion antes de cualquier procedimiento.",
    "cuandoConsultarEn": "Patients with hemophilia should have regular follow-up at a specialized hemophilia center. Consult immediately for any joint bleeding (pain, swelling, warmth in the joint), muscle bleeding, or bleeding that does not stop with local measures. Go to the emergency room immediately for head trauma (even minor), severe unusual headache, double vision, persistent vomiting, acute abdominal pain, heavy bleeding, difficulty breathing, or any sign of internal hemorrhage. Always inform any doctor or dentist about your condition before any procedure."
  },
  {
    "id": "trombosis-venosa-profunda",
    "nombreEs": "Trombosis Venosa Profunda",
    "nombreEn": "Deep Vein Thrombosis",
    "descripcionEs": "La trombosis venosa profunda (TVP) es la formacion de un coagulo de sangre (trombo) en una vena profunda, mas frecuentemente en las extremidades inferiores (venas femorales, popliteas e iliacas). Es una condicion potencialmente mortal porque el trombo puede desprenderse y viajar a los pulmones causando una embolia pulmonar (EP), que es fatal en hasta el 30% de los casos no tratados. La TVP y la EP juntas constituyen la enfermedad tromboembolica venosa (ETV), que es la tercera causa de muerte cardiovascular despues del infarto y el accidente cerebrovascular. Afecta aproximadamente a 1-2 personas por cada 1,000 habitantes al ano, con incidencia que aumenta significativamente con la edad.",
    "descripcionEn": "Deep vein thrombosis (DVT) is the formation of a blood clot (thrombus) in a deep vein, most frequently in the lower extremities (femoral, popliteal, and iliac veins). It is a potentially fatal condition because the thrombus can break loose and travel to the lungs causing a pulmonary embolism (PE), which is fatal in up to 30% of untreated cases. DVT and PE together constitute venous thromboembolic disease (VTE), which is the third leading cause of cardiovascular death after heart attack and stroke. It affects approximately 1-2 people per 1,000 inhabitants per year, with incidence increasing significantly with age.",
    "categoriaEs": "Trombotica",
    "categoriaEn": "Thrombotic",
    "sintomasEs": [
      "Hinchazon unilateral de la pierna afectada (asimetria con la otra pierna)",
      "Dolor en la pantorrilla o el muslo que empeora al caminar o al flexionar el pie (signo de Homans)",
      "Enrojecimiento o decoloracion de la piel de la pierna",
      "Aumento de la temperatura local (pierna caliente al tacto)",
      "Sensacion de pesadez o tension en la extremidad",
      "Dilatacion de venas superficiales colaterales",
      "En TVP masiva (flegmasia cerulea dolens): pierna muy hinchada, azulada y extremadamente dolorosa",
      "Aproximadamente el 50% de las TVP son asintomaticas",
      "Sintomas de embolia pulmonar: dolor toracico agudo, dificultad para respirar subita, tos con sangre, taquicardia"
    ],
    "sintomasEn": [
      "Unilateral swelling of the affected leg (asymmetry with the other leg)",
      "Pain in the calf or thigh that worsens with walking or foot flexion (Homans sign)",
      "Redness or skin discoloration of the leg",
      "Increased local temperature (leg warm to touch)",
      "Feeling of heaviness or tightness in the extremity",
      "Dilation of superficial collateral veins",
      "In massive DVT (phlegmasia cerulea dolens): very swollen, bluish, and extremely painful leg",
      "Approximately 50% of DVTs are asymptomatic",
      "Pulmonary embolism symptoms: acute chest pain, sudden shortness of breath, coughing up blood, tachycardia"
    ],
    "causasEs": "La formacion de TVP se explica por la triada de Virchow: estasis venosa, dano endotelial e hipercoagulabilidad. Los factores de riesgo incluyen inmovilizacion prolongada (viajes largos, hospitalizacion, cirugia mayor especialmente ortopedica), cancer activo (uno de los factores mas potentes), uso de anticonceptivos orales o terapia hormonal, embarazo y posparto, trombofilias hereditarias (factor V Leiden, mutacion de protrombina G20210A, deficiencia de proteina C, S o antitrombina), obesidad, edad avanzada, insuficiencia cardiaca, sindrome nefrotico, y antecedente personal de TVP previa. Los cateteres venosos centrales son causa frecuente de TVP de miembros superiores.",
    "causasEn": "DVT formation is explained by Virchow's triad: venous stasis, endothelial damage, and hypercoagulability. Risk factors include prolonged immobilization (long trips, hospitalization, major surgery especially orthopedic), active cancer (one of the most potent factors), use of oral contraceptives or hormone therapy, pregnancy and postpartum period, hereditary thrombophilias (Factor V Leiden, prothrombin G20210A mutation, protein C, S, or antithrombin deficiency), obesity, advanced age, heart failure, nephrotic syndrome, and personal history of prior DVT. Central venous catheters are a frequent cause of upper extremity DVT.",
    "diagnosticoEs": "La evaluacion comienza con la valoracion de probabilidad clinica usando el score de Wells para TVP. Si la probabilidad es baja, se solicita el dimero D: un resultado negativo descarta TVP con alto valor predictivo negativo. Si el dimero D es positivo o la probabilidad clinica es intermedia-alta, se realiza ultrasonido duplex venoso de compresion, que es el estudio de imagen de primera linea con sensibilidad y especificidad superiores al 95% para TVP proximal. La falta de compresibilidad de la vena es el hallazgo diagnostico clave. La venografia con contraste (estandar de oro historico) se usa rara vez actualmente. La angiotomografia se emplea cuando se sospecha embolia pulmonar concomitante. En pacientes jovenes con TVP no provocada se realizan estudios de trombofilia y tamizaje de malignidad oculta.",
    "diagnosticoEn": "Evaluation begins with clinical probability assessment using the Wells score for DVT. If probability is low, D-dimer is ordered: a negative result rules out DVT with high negative predictive value. If D-dimer is positive or clinical probability is intermediate-high, venous compression duplex ultrasound is performed, which is the first-line imaging study with sensitivity and specificity above 95% for proximal DVT. Non-compressibility of the vein is the key diagnostic finding. Contrast venography (historical gold standard) is rarely used currently. CT angiography is used when concomitant pulmonary embolism is suspected. In young patients with unprovoked DVT, thrombophilia studies and occult malignancy screening are performed.",
    "tratamientoEs": "El tratamiento estandar es la anticoagulacion. Los anticoagulantes orales directos (ACODs) como rivaroxaban y apixaban son actualmente la primera linea por su eficacia, conveniencia y menor riesgo de sangrado comparado con warfarina. La alternativa es heparina de bajo peso molecular (enoxaparina) seguida de transicion a warfarina (objetivo INR 2-3) o un ACOD. La duracion del tratamiento es de 3 meses para TVP provocada por factor de riesgo transitorio, 6-12 meses o indefinida para TVP no provocada o con factores de riesgo persistentes, e indefinida para TVP recurrente. La trombolisis dirigida por cateter se reserva para TVP iliofemoral masiva con compromiso del miembro (flegmasia). Los filtros de vena cava inferior se colocan cuando la anticoagulacion esta contraindicada o falla. Las medias de compresion graduada ayudan a aliviar los sintomas y pueden prevenir el sindrome postrombico. La deambulacion temprana se recomienda una vez iniciada la anticoagulacion.",
    "tratamientoEn": "Standard treatment is anticoagulation. Direct oral anticoagulants (DOACs) such as rivaroxaban and apixaban are currently first-line due to their efficacy, convenience, and lower bleeding risk compared to warfarin. The alternative is low-molecular-weight heparin (enoxaparin) followed by transition to warfarin (target INR 2-3) or a DOAC. Treatment duration is 3 months for DVT provoked by a transient risk factor, 6-12 months or indefinite for unprovoked DVT or persistent risk factors, and indefinite for recurrent DVT. Catheter-directed thrombolysis is reserved for massive iliofemoral DVT with limb compromise (phlegmasia). Inferior vena cava filters are placed when anticoagulation is contraindicated or fails. Graduated compression stockings help relieve symptoms and may prevent post-thrombotic syndrome. Early ambulation is recommended once anticoagulation is initiated.",
    "prevencionEs": "La prevencion es fundamental, especialmente en situaciones de alto riesgo. Los pacientes hospitalizados deben recibir tromboprofilaxis farmacologica (heparina de bajo peso molecular o heparina no fraccionada) segun protocolos institucionales basados en el riesgo individual. La compresion neumatica intermitente se usa en pacientes con contraindicacion para anticoagulacion. Para viajes largos (mas de 4 horas), se recomienda levantarse y caminar regularmente, realizar ejercicios de flexion del tobillo, mantenerse hidratado, y considerar medias de compresion. La actividad fisica regular reduce el riesgo general. La suspension oportuna de anticonceptivos orales antes de cirugias mayores es importante. Los pacientes con cancer deben recibir tromboprofilaxis durante hospitalizaciones y considerar anticoagulacion ambulatoria en tumores de alto riesgo.",
    "prevencionEn": "Prevention is fundamental, especially in high-risk situations. Hospitalized patients should receive pharmacological thromboprophylaxis (low-molecular-weight heparin or unfractionated heparin) according to institutional protocols based on individual risk. Intermittent pneumatic compression is used in patients with contraindications to anticoagulation. For long trips (more than 4 hours), it is recommended to stand and walk regularly, perform ankle flexion exercises, stay hydrated, and consider compression stockings. Regular physical activity reduces overall risk. Timely discontinuation of oral contraceptives before major surgeries is important. Cancer patients should receive thromboprophylaxis during hospitalizations and consider outpatient anticoagulation for high-risk tumors.",
    "complicacionesEs": [
      "Embolia pulmonar: complicacion mas grave, potencialmente mortal",
      "Sindrome postrombico: dolor cronico, hinchazon, cambios cutaneos y ulceras venosas en la pierna afectada (afecta al 20-50% de pacientes)",
      "Hipertension pulmonar tromboembólica cronica",
      "TVP recurrente (riesgo de 30% a 10 anos si no se anticoagula indefinidamente en TVP no provocada)",
      "Flegmasia cerulea dolens con riesgo de gangrena venosa",
      "Sangrado mayor como complicacion de la anticoagulacion",
      "Trombocitopenia inducida por heparina si se usa heparina"
    ],
    "complicacionesEn": [
      "Pulmonary embolism: most serious complication, potentially fatal",
      "Post-thrombotic syndrome: chronic pain, swelling, skin changes, and venous ulcers in the affected leg (affects 20-50% of patients)",
      "Chronic thromboembolic pulmonary hypertension",
      "Recurrent DVT (30% risk at 10 years if not indefinitely anticoagulated in unprovoked DVT)",
      "Phlegmasia cerulea dolens with risk of venous gangrene",
      "Major bleeding as a complication of anticoagulation",
      "Heparin-induced thrombocytopenia if heparin is used"
    ],
    "cuandoConsultarEs": "Consulte a un medico de manera urgente si presenta hinchazon, dolor o enrojecimiento unilateral de una pierna, especialmente si tiene factores de riesgo como cirugia reciente, inmovilizacion, viaje largo, cancer o uso de anticonceptivos. Acuda a urgencias inmediatamente si presenta dolor toracico agudo con dificultad para respirar, tos con sangre, taquicardia, o sensacion de desmayo, ya que estos son signos de embolia pulmonar que puede ser mortal. Tambien acuda si una pierna se pone extremadamente hinchada, azulada y muy dolorosa, lo que puede indicar flegmasia que requiere tratamiento urgente.",
    "cuandoConsultarEn": "See a doctor urgently if you have swelling, pain, or redness in one leg, especially if you have risk factors such as recent surgery, immobilization, long travel, cancer, or contraceptive use. Go to the emergency room immediately if you experience acute chest pain with difficulty breathing, coughing up blood, tachycardia, or feeling of fainting, as these are signs of pulmonary embolism that can be fatal. Also seek emergency care if a leg becomes extremely swollen, bluish, and very painful, which may indicate phlegmasia requiring urgent treatment."
  },
  {
    "id": "mieloma-multiple",
    "nombreEs": "Mieloma Multiple",
    "nombreEn": "Multiple Myeloma",
    "descripcionEs": "El mieloma multiple es un cancer hematologico que se origina en las celulas plasmaticas de la medula osea, las cuales son linfocitos B diferenciados responsables de producir anticuerpos. En el mieloma, un clon de celulas plasmaticas malignas prolifera de manera descontrolada y produce grandes cantidades de una inmunoglobulina monoclonal anormal (proteina M o paraproteina) que se acumula en la sangre y la orina. Esta proliferacion destruye el hueso, suprime la produccion normal de celulas sanguineas y puede danar los rinones. Representa aproximadamente el 10% de las neoplasias hematologicas y la edad media al diagnostico es de 70 anos. Es mas comun en varones y en personas de ascendencia africana.",
    "descripcionEn": "Multiple myeloma is a hematological cancer that originates in the plasma cells of the bone marrow, which are differentiated B lymphocytes responsible for producing antibodies. In myeloma, a clone of malignant plasma cells proliferates uncontrollably and produces large amounts of an abnormal monoclonal immunoglobulin (M protein or paraprotein) that accumulates in blood and urine. This proliferation destroys bone, suppresses normal blood cell production, and can damage the kidneys. It represents approximately 10% of hematological neoplasms and the median age at diagnosis is 70 years. It is more common in males and in people of African descent.",
    "categoriaEs": "Oncologica",
    "categoriaEn": "Oncological",
    "sintomasEs": [
      "Dolor oseo, especialmente en columna, costillas, pelvis y craneo (sintoma mas comun, presente en 70% de pacientes)",
      "Fracturas patologicas con traumatismos minimos o espontaneas",
      "Fatiga severa por anemia",
      "Infecciones recurrentes por inmunodeficiencia (las celulas plasmaticas normales son desplazadas)",
      "Insuficiencia renal: aumento de creatinina, disminucion del gasto urinario",
      "Hipercalcemia: sed excesiva, nausea, confusion, estrenimiento, arritmias cardiacas",
      "Perdida de peso y anorexia",
      "Neuropatia periferica: hormigueo o entumecimiento en manos y pies",
      "Sindrome de hiperviscosidad: vision borrosa, sangrado de mucosas, confusion (raro, mas comun en macroglobulinemia)",
      "Compresion medular por plasmocitoma vertebral (urgencia oncologica)"
    ],
    "sintomasEn": [
      "Bone pain, especially in spine, ribs, pelvis, and skull (most common symptom, present in 70% of patients)",
      "Pathological fractures with minimal trauma or spontaneous",
      "Severe fatigue from anemia",
      "Recurrent infections from immunodeficiency (normal plasma cells are displaced)",
      "Renal insufficiency: elevated creatinine, decreased urine output",
      "Hypercalcemia: excessive thirst, nausea, confusion, constipation, cardiac arrhythmias",
      "Weight loss and anorexia",
      "Peripheral neuropathy: tingling or numbness in hands and feet",
      "Hyperviscosity syndrome: blurred vision, mucosal bleeding, confusion (rare, more common in macroglobulinemia)",
      "Spinal cord compression from vertebral plasmacytoma (oncological emergency)"
    ],
    "causasEs": "La causa exacta del mieloma multiple no se conoce. Se cree que la enfermedad evoluciona a traves de un proceso de multiples pasos, comenzando con la gammapatia monoclonal de significado incierto (GMSI), que progresa a mieloma latente y finalmente a mieloma sintomatico. La GMSI esta presente en el 3-4% de personas mayores de 50 anos y progresa a mieloma a una tasa del 1% anual. Los factores de riesgo incluyen edad avanzada, sexo masculino, raza afroamericana (incidencia 2-3 veces mayor), historia familiar de mieloma o GMSI, obesidad, y exposicion a radiacion, pesticidas o solventes. Las anomalias citogeneticas recurrentes incluyen traslocaciones del gen IgH (cromosoma 14), deleciones del cromosoma 17p y ganancias del cromosoma 1q.",
    "causasEn": "The exact cause of multiple myeloma is not known. The disease is believed to evolve through a multi-step process, starting with monoclonal gammopathy of undetermined significance (MGUS), which progresses to smoldering myeloma and finally to symptomatic myeloma. MGUS is present in 3-4% of people over 50 and progresses to myeloma at a rate of 1% per year. Risk factors include advanced age, male sex, African American race (2-3 times higher incidence), family history of myeloma or MGUS, obesity, and exposure to radiation, pesticides, or solvents. Recurrent cytogenetic abnormalities include IgH gene translocations (chromosome 14), chromosome 17p deletions, and chromosome 1q gains.",
    "diagnosticoEs": "El diagnostico requiere la presencia de celulas plasmaticas clonales en medula osea >=10% o un plasmocitoma confirmado por biopsia, mas evidencia de dano de organo blanco (criterios CRAB: Calcio elevado, insuficiencia Renal, Anemia, lesiones oseas liBticas [Bone]) o biomarcadores de malignidad (celulas plasmaticas >=60%, ratio de cadenas ligeras libres >=100, mas de una lesion focal en RM >=5mm). Se realizan electroforesis de proteinas sericas y urinarias con inmunofijacion para identificar la proteina M. Las cadenas ligeras libres en suero (kappa y lambda) y su ratio son esenciales. La serie osea metastasica se ha reemplazado por PET-TAC o TAC de baja dosis de cuerpo completo para detectar lesiones liticas. La biopsia de medula osea con citogenetica y FISH es obligatoria para la estratificacion de riesgo.",
    "diagnosticoEn": "Diagnosis requires the presence of clonal plasma cells in bone marrow >=10% or a biopsy-confirmed plasmacytoma, plus evidence of end-organ damage (CRAB criteria: elevated Calcium, Renal insufficiency, Anemia, lytic Bone lesions) or malignancy biomarkers (plasma cells >=60%, free light chain ratio >=100, more than one focal lesion on MRI >=5mm). Serum and urine protein electrophoresis with immunofixation are performed to identify the M protein. Serum free light chains (kappa and lambda) and their ratio are essential. Metastatic bone survey has been replaced by PET-CT or low-dose whole-body CT for detecting lytic lesions. Bone marrow biopsy with cytogenetics and FISH is mandatory for risk stratification.",
    "tratamientoEs": "El tratamiento del mieloma multiple ha avanzado enormemente en las ultimas dos decadas. Los pacientes elegibles para trasplante (generalmente menores de 70 anos con buen estado funcional) reciben induccion con un triplete basado en bortezomib, lenalidomida y dexametasona (VRd) por 4-6 ciclos, seguido de trasplante autologo de celulas madre y mantenimiento con lenalidomida. Para pacientes no candidatos a trasplante, se utiliza VRd en dosis reducidas o daratumumab-lenalidomida-dexametasona (DRd). Daratumumab (anti-CD38) ha revolucionado el tratamiento y se incorpora cada vez mas en primera linea. Otros agentes incluyen carfilzomib e ixazomib (inhibidores de proteasoma), pomalidomida (inmunomodulador), elotuzumab e isatuximab (anticuerpos monoclonales), y selinexor (inhibidor de exportina). La terapia con celulas CAR-T (idecabtagene vicleucel, ciltacabtagene autoleucel) esta aprobada para mieloma recidivante/refractario. Los bisfosfonatos (zoledronato) o denosumab previenen eventos esqueleticos. La radioterapia se usa para lesiones oseas dolorosas o compresion medular. La insuficiencia renal y la hipercalcemia requieren manejo urgente.",
    "tratamientoEn": "Treatment of multiple myeloma has advanced enormously over the past two decades. Transplant-eligible patients (generally under 70 with good functional status) receive induction with a bortezomib, lenalidomide, and dexamethasone-based triplet (VRd) for 4-6 cycles, followed by autologous stem cell transplant and lenalidomide maintenance. For transplant-ineligible patients, reduced-dose VRd or daratumumab-lenalidomide-dexamethasone (DRd) is used. Daratumumab (anti-CD38) has revolutionized treatment and is increasingly incorporated in first-line therapy. Other agents include carfilzomib and ixazomib (proteasome inhibitors), pomalidomide (immunomodulatory), elotuzumab and isatuximab (monoclonal antibodies), and selinexor (exportin inhibitor). CAR-T cell therapy (idecabtagene vicleucel, ciltacabtagene autoleucel) is approved for relapsed/refractory myeloma. Bisphosphonates (zoledronate) or denosumab prevent skeletal events. Radiation therapy is used for painful bone lesions or spinal cord compression. Renal insufficiency and hypercalcemia require urgent management.",
    "prevencionEs": "No existe una forma comprobada de prevenir el mieloma multiple. El mantenimiento de un peso saludable puede reducir ligeramente el riesgo, ya que la obesidad se ha asociado con mayor incidencia. Las personas con diagnostico de gammapatia monoclonal de significado incierto (GMSI) deben tener seguimiento medico regular (cada 6-12 meses) con electroforesis de proteinas y biometria hematica para detectar progresion temprana. Evitar la exposicion a radiacion innecesaria y quimicos industriales es una medida prudente. El diagnostico precoz en fase asintomatica (mieloma latente de alto riesgo) puede permitir intervencion temprana que mejore los resultados a largo plazo.",
    "prevencionEn": "There is no proven way to prevent multiple myeloma. Maintaining a healthy weight may slightly reduce risk, as obesity has been associated with higher incidence. People diagnosed with monoclonal gammopathy of undetermined significance (MGUS) should have regular medical follow-up (every 6-12 months) with protein electrophoresis and complete blood count to detect early progression. Avoiding unnecessary radiation exposure and industrial chemicals is a prudent measure. Early diagnosis in the asymptomatic phase (high-risk smoldering myeloma) may allow early intervention that improves long-term outcomes.",
    "complicacionesEs": [
      "Fracturas patologicas vertebrales con colapso y posible compresion medular",
      "Insuficiencia renal cronica o aguda por nefropatia por cadenas ligeras (rinon de mieloma)",
      "Hipercalcemia severa que puede causar arritmias cardiacas y coma",
      "Infecciones graves recurrentes por inmunoparesia (la causa mas comun de muerte temprana)",
      "Amiloidosis AL si las cadenas ligeras se depositan en organos",
      "Sindrome de hiperviscosidad",
      "Neuropatia periferica (por la enfermedad o el tratamiento)",
      "Trombosis venosa profunda y embolia pulmonar (mayor riesgo con inmunomoduladores)",
      "Canceres secundarios asociados al tratamiento prolongado"
    ],
    "complicacionesEn": [
      "Pathological vertebral fractures with collapse and possible spinal cord compression",
      "Chronic or acute renal failure from light chain nephropathy (myeloma kidney)",
      "Severe hypercalcemia that can cause cardiac arrhythmias and coma",
      "Severe recurrent infections from immunoparesis (most common cause of early death)",
      "AL amyloidosis if light chains deposit in organs",
      "Hyperviscosity syndrome",
      "Peripheral neuropathy (from the disease or treatment)",
      "Deep vein thrombosis and pulmonary embolism (increased risk with immunomodulators)",
      "Treatment-associated secondary cancers"
    ],
    "cuandoConsultarEs": "Consulte a su medico si presenta dolor oseo persistente e inexplicable (especialmente en la espalda), fatiga extrema, infecciones recurrentes, perdida de peso involuntaria, o si le detectan anemia o proteinas anormales en la sangre u orina. Acuda a urgencias inmediatamente si experimenta debilidad o entumecimiento de las piernas con dificultad para caminar o para controlar los esfinteres (posible compresion medular, urgencia que requiere intervencion en horas), confusion severa, sed extrema con nausea y estrenimiento (posible hipercalcemia), fiebre alta durante el tratamiento, o disminucion marcada de la produccion de orina.",
    "cuandoConsultarEn": "See your doctor if you have persistent and unexplained bone pain (especially in the back), extreme fatigue, recurrent infections, involuntary weight loss, or if anemia or abnormal proteins are detected in your blood or urine. Go to the emergency room immediately if you experience weakness or numbness in the legs with difficulty walking or controlling sphincters (possible spinal cord compression, an emergency requiring intervention within hours), severe confusion, extreme thirst with nausea and constipation (possible hypercalcemia), high fever during treatment, or marked decrease in urine production."
  }
]`);

// -- Helper functions --------------------------------------------------------

export function buscarHematologia(termino: string): HematologiaEntry[] {
  const t = termino.toLowerCase();
  return HEMATOLOGIA_ENTRIES.filter(
    (e) =>
      e.nombreEs.toLowerCase().includes(t) ||
      e.nombreEn.toLowerCase().includes(t) ||
      e.descripcionEs.toLowerCase().includes(t) ||
      e.descripcionEn.toLowerCase().includes(t)
  );
}

export function getHematologiaById(id: string): HematologiaEntry | undefined {
  return HEMATOLOGIA_ENTRIES.find((e) => e.id === id);
}

export function getHematologiaPorCategoria(
  categoria: string
): HematologiaEntry[] {
  const c = categoria.toLowerCase();
  return HEMATOLOGIA_ENTRIES.filter(
    (e) =>
      e.categoriaEs.toLowerCase().includes(c) ||
      e.categoriaEn.toLowerCase().includes(c)
  );
}
