// =============================================================================
// SOMA Medicina Tropical Enciclopedia — Spanish-First Bilingual
// Tropical Medicine Patient Education Content
// =============================================================================
// ARCHITECTURE: JSON.parse() wrapper prevents TS2590 "expression too complex"
// =============================================================================

export interface MedicinaTropicalEntry {
  id: string;
  nombreEs: string;
  nombreEn: string;
  descripcionEs: string;
  descripcionEn: string;
  categoriaEs: string;
  categoriaEn: string;
  sintomasEs: string[];
  sintomasEn: string[];
  transmisionEs: string;
  transmisionEn: string;
  diagnosticoEs: string;
  diagnosticoEn: string;
  tratamientoEs: string;
  tratamientoEn: string;
  prevencionEs: string;
  prevencionEn: string;
  regionesEndemicasEs: string;
  regionesEndemicasEn: string;
  cuandoConsultarEs: string;
  cuandoConsultarEn: string;
}

export const MEDICINA_TROPICAL_ENTRIES: MedicinaTropicalEntry[] = JSON.parse(`[
  {
    "id": "enfermedad-chagas",
    "nombreEs": "Enfermedad de Chagas (Tripanosomiasis Americana)",
    "nombreEn": "Chagas Disease (American Trypanosomiasis)",
    "descripcionEs": "La enfermedad de Chagas es una infeccion parasitaria cronica causada por el protozoo Trypanosoma cruzi, transmitido principalmente por insectos triatominos conocidos como vinchucas o chinches besuconas. Es endemica en America Latina, donde afecta a entre 6 y 7 millones de personas. La enfermedad tiene dos fases: una fase aguda que puede ser leve o asintomatica, y una fase cronica que puede desarrollarse decadas despues con complicaciones cardiacas y digestivas graves. Es considerada una enfermedad tropical desatendida por la OMS, y sin tratamiento puede causar dano irreversible al corazon y al sistema digestivo.",
    "descripcionEn": "Chagas disease is a chronic parasitic infection caused by the protozoan Trypanosoma cruzi, transmitted primarily by triatomine insects known as kissing bugs. It is endemic in Latin America, where it affects between 6 and 7 million people. The disease has two phases: an acute phase that can be mild or asymptomatic, and a chronic phase that can develop decades later with severe cardiac and digestive complications. It is considered a neglected tropical disease by the WHO, and without treatment it can cause irreversible damage to the heart and digestive system.",
    "categoriaEs": "Parasitaria",
    "categoriaEn": "Parasitic",
    "sintomasEs": [
      "Fase aguda: fiebre prolongada, fatiga, dolor de cuerpo y dolor de cabeza",
      "Signo de Romana: hinchazon unilateral del parpado en el sitio de la picadura",
      "Chagoma: lesion cutanea inflamada en el punto de entrada del parasito",
      "Linfadenopatia generalizada y hepatoesplenomegalia",
      "Fase cronica cardiaca: palpitaciones, mareos, sincope, dolor toracico",
      "Fase cronica digestiva: dificultad para tragar (megaesofago), estrenimiento severo (megacolon)",
      "Insuficiencia cardiaca con disnea progresiva y edema de miembros inferiores",
      "Arritmias cardiacas incluyendo bloqueo de rama derecha del haz de His"
    ],
    "sintomasEn": [
      "Acute phase: prolonged fever, fatigue, body aches and headache",
      "Romana sign: unilateral eyelid swelling at the bite site",
      "Chagoma: inflamed skin lesion at the parasite entry point",
      "Generalized lymphadenopathy and hepatosplenomegaly",
      "Chronic cardiac phase: palpitations, dizziness, syncope, chest pain",
      "Chronic digestive phase: difficulty swallowing (megaesophagus), severe constipation (megacolon)",
      "Heart failure with progressive dyspnea and lower extremity edema",
      "Cardiac arrhythmias including right bundle branch block"
    ],
    "transmisionEs": "Se transmite principalmente por la picadura del insecto triatomino (vinchuca), que deposita heces infectadas con T. cruzi cerca de la herida mientras la persona duerme. El parasito entra al cuerpo cuando la persona se rasca y frota las heces en la herida o en membranas mucosas. Tambien puede transmitirse por transfusion de sangre contaminada, trasplante de organos, de madre a hijo durante el embarazo (congenita), por alimentos contaminados con heces del insecto, y por accidentes de laboratorio.",
    "transmisionEn": "Transmitted primarily through the bite of the triatomine insect (kissing bug), which deposits T. cruzi-infected feces near the wound while the person sleeps. The parasite enters the body when the person scratches and rubs the feces into the wound or mucous membranes. It can also be transmitted through contaminated blood transfusion, organ transplant, from mother to child during pregnancy (congenital), through food contaminated with insect feces, and through laboratory accidents.",
    "diagnosticoEs": "En la fase aguda se utiliza microscopio para visualizar el parasito directamente en sangre (frotis sanguineo o gota gruesa), pruebas de PCR para detectar ADN del parasito, y hemocultivo. En la fase cronica, el diagnostico se basa en pruebas serologicas como ELISA, inmunofluorescencia indirecta (IFI) y hemaglutinacion indirecta (HAI), requiriendo al menos dos pruebas positivas para confirmacion. Se recomienda electrocardiograma, ecocardiograma y estudios digestivos (esofagograma con bario, enema opaco) para evaluar el dano organico.",
    "diagnosticoEn": "In the acute phase, microscopy is used to visualize the parasite directly in blood (blood smear or thick drop), PCR tests to detect parasite DNA, and blood culture. In the chronic phase, diagnosis relies on serological tests such as ELISA, indirect immunofluorescence (IIF), and indirect hemagglutination (IHA), requiring at least two positive tests for confirmation. Electrocardiogram, echocardiogram, and digestive studies (barium esophagram, barium enema) are recommended to assess organ damage.",
    "tratamientoEs": "El tratamiento antiparasitario con benznidazol (primera linea) o nifurtimox debe iniciarse lo antes posible, especialmente en la fase aguda y en ninos, donde la tasa de curacion supera el 80%. En adultos con infeccion cronica sin dano organico severo, el tratamiento se recomienda hasta los 50 anos de edad. El benznidazol se administra por 60 dias y puede causar dermatitis, neuropatia periferica y trastornos gastrointestinales. Para complicaciones cardiacas se usan antiarritmicos, marcapasos, y en casos severos trasplante cardiaco. El megaesofago y megacolon pueden requerir cirugia correctiva. El seguimiento cardiologico regular es esencial para todos los pacientes con serologia positiva.",
    "tratamientoEn": "Antiparasitic treatment with benznidazole (first line) or nifurtimox should be started as soon as possible, especially in the acute phase and in children, where the cure rate exceeds 80%. In adults with chronic infection without severe organ damage, treatment is recommended up to age 50. Benznidazole is administered for 60 days and may cause dermatitis, peripheral neuropathy, and gastrointestinal disturbances. For cardiac complications, antiarrhythmics, pacemakers, and in severe cases heart transplant are used. Megaesophagus and megacolon may require corrective surgery. Regular cardiological follow-up is essential for all patients with positive serology.",
    "prevencionEs": "Mejorar las condiciones de vivienda para eliminar grietas donde anidan los triatominos, uso de insecticidas residuales en paredes y techos, mosquiteros tratados con insecticida, tamizaje de sangre donada y organos para trasplante, tamizaje en embarazadas para prevenir transmision congenita, educacion comunitaria sobre el insecto vector y limpieza del peridomicilio para reducir habitats del vector.",
    "prevencionEn": "Improve housing conditions to eliminate cracks where triatomines nest, use of residual insecticides on walls and ceilings, insecticide-treated bed nets, screening of donated blood and transplant organs, screening of pregnant women to prevent congenital transmission, community education about the vector insect, and peridomestic cleaning to reduce vector habitats.",
    "regionesEndemicasEs": "America Latina: Mexico, America Central (Guatemala, Honduras, El Salvador, Nicaragua), y America del Sur (Argentina, Bolivia, Brasil, Colombia, Ecuador, Paraguay, Peru, Venezuela). Bolivia tiene la prevalencia mas alta. Debido a la migracion, se encuentran casos en Estados Unidos, Espana, y otros paises no endemicos.",
    "regionesEndemicasEn": "Latin America: Mexico, Central America (Guatemala, Honduras, El Salvador, Nicaragua), and South America (Argentina, Bolivia, Brazil, Colombia, Ecuador, Paraguay, Peru, Venezuela). Bolivia has the highest prevalence. Due to migration, cases are found in the United States, Spain, and other non-endemic countries.",
    "cuandoConsultarEs": "Consulte a un medico si ha vivido o viajado a zonas endemicas de America Latina y presenta fiebre prolongada inexplicable, hinchazon de parpado, palpitaciones o dificultad para tragar. Si es originario de una zona endemica, solicite pruebas de deteccion aunque no tenga sintomas. Las mujeres embarazadas de zonas endemicas deben solicitar tamizaje prenatal.",
    "cuandoConsultarEn": "See a doctor if you have lived in or traveled to endemic areas of Latin America and experience unexplained prolonged fever, eyelid swelling, palpitations, or difficulty swallowing. If you are originally from an endemic area, request screening tests even without symptoms. Pregnant women from endemic areas should request prenatal screening."
  },
  {
    "id": "leishmaniasis",
    "nombreEs": "Leishmaniasis",
    "nombreEn": "Leishmaniasis",
    "descripcionEs": "La leishmaniasis es un grupo de enfermedades parasitarias causadas por protozoos del genero Leishmania, transmitidos por la picadura de mosquitos flebotomos (moscas de arena). Existen tres formas principales: cutanea (la mas comun, causa ulceras en la piel), mucocutanea (destruye membranas mucosas de nariz, boca y garganta), y visceral o kala-azar (la mas grave, afecta organos internos y es mortal sin tratamiento). Afecta a aproximadamente 12 millones de personas en 98 paises, con 700,000 a 1 millon de nuevos casos anuales. Es considerada una enfermedad tropical desatendida asociada a la pobreza, la desnutricion y las condiciones precarias de vivienda.",
    "descripcionEn": "Leishmaniasis is a group of parasitic diseases caused by protozoa of the genus Leishmania, transmitted through the bite of phlebotomine sandflies. There are three main forms: cutaneous (the most common, causing skin ulcers), mucocutaneous (destroying mucous membranes of nose, mouth, and throat), and visceral or kala-azar (the most severe, affecting internal organs and fatal without treatment). It affects approximately 12 million people in 98 countries, with 700,000 to 1 million new cases annually. It is considered a neglected tropical disease associated with poverty, malnutrition, and poor housing conditions.",
    "categoriaEs": "Parasitaria",
    "categoriaEn": "Parasitic",
    "sintomasEs": [
      "Cutanea: ulcera indolora en el sitio de la picadura que no cicatriza, con bordes elevados y fondo limpio",
      "Cutanea difusa: nodulos multiples diseminados por el cuerpo que no ulceran",
      "Mucocutanea: destruccion progresiva de la nariz, paladar, labios y faringe",
      "Visceral: fiebre prolongada ondulante e irregular",
      "Visceral: esplenomegalia marcada (bazo muy agrandado) y hepatomegalia",
      "Visceral: perdida de peso severa y desnutricion progresiva",
      "Visceral: pancitopenia con anemia, leucopenia y trombocitopenia",
      "Visceral: oscurecimiento de la piel (de ahi el nombre kala-azar, fiebre negra)",
      "Linfadenopatia generalizada"
    ],
    "sintomasEn": [
      "Cutaneous: painless non-healing ulcer at the bite site with raised edges and clean base",
      "Diffuse cutaneous: multiple disseminated nodules across the body that do not ulcerate",
      "Mucocutaneous: progressive destruction of nose, palate, lips, and pharynx",
      "Visceral: prolonged undulating and irregular fever",
      "Visceral: marked splenomegaly (greatly enlarged spleen) and hepatomegaly",
      "Visceral: severe weight loss and progressive malnutrition",
      "Visceral: pancytopenia with anemia, leukopenia, and thrombocytopenia",
      "Visceral: darkening of the skin (hence the name kala-azar, black fever)",
      "Generalized lymphadenopathy"
    ],
    "transmisionEs": "Se transmite por la picadura de flebotomos hembra infectados (moscas de arena del genero Phlebotomus en el Viejo Mundo y Lutzomyia en el Nuevo Mundo). Los flebotomos pican principalmente al atardecer y durante la noche. Reservorios animales incluyen perros, roedores y otros mamiferos. Puede transmitirse por transfusion sanguinea, uso de jeringas compartidas, y raramente de forma congenita. No se transmite directamente de persona a persona excepto en el caso de la leishmaniasis visceral en India (transmision antroponotica).",
    "transmisionEn": "Transmitted through the bite of infected female sandflies (Phlebotomus genus in the Old World and Lutzomyia in the New World). Sandflies bite mainly at dusk and during nighttime. Animal reservoirs include dogs, rodents, and other mammals. Can be transmitted through blood transfusion, shared needles, and rarely congenitally. Not directly transmitted person to person except in the case of visceral leishmaniasis in India (anthroponotic transmission).",
    "diagnosticoEs": "Cutanea: biopsia de la lesion con tincion de Giemsa para visualizar amastigotes, cultivo del parasito en medio NNN, y PCR. Visceral: aspirado de medula osea o bazo con visualizacion de amastigotes, prueba rapida rK39 (altamente sensible y especifica para leishmaniasis visceral), serologia (ELISA, IFI), PCR en sangre, y prueba de Montenegro (leishmanina) que es negativa en la forma visceral activa. Se deben realizar hemograma completo, pruebas hepaticas y funcion renal.",
    "diagnosticoEn": "Cutaneous: lesion biopsy with Giemsa stain to visualize amastigotes, parasite culture in NNN medium, and PCR. Visceral: bone marrow or splenic aspirate with amastigote visualization, rK39 rapid test (highly sensitive and specific for visceral leishmaniasis), serology (ELISA, IIF), blood PCR, and Montenegro test (leishmanin) which is negative in active visceral form. Complete blood count, liver tests, and renal function should be performed.",
    "tratamientoEs": "El tratamiento varia segun la forma clinica y la especie de Leishmania. Leishmaniasis visceral: anfotericina B liposomal (primera linea en la mayoria de regiones), miltefosina oral (primera linea en India y alternativa en otras regiones), antimoniales pentavalentes (estibogluconato de sodio o antimoniato de meglumina) donde no hay resistencia. Leishmaniasis cutanea: puede autolimitarse en algunas especies; se tratan con antimoniales locales o sistemicos, crioterapia, termoterapia, miltefosina o anfotericina B segun la especie. Leishmaniasis mucocutanea: requiere tratamiento sistemico agresivo con anfotericina B liposomal o antimoniales. El seguimiento debe ser prolongado para detectar recaidas.",
    "tratamientoEn": "Treatment varies according to clinical form and Leishmania species. Visceral leishmaniasis: liposomal amphotericin B (first line in most regions), oral miltefosine (first line in India and alternative in other regions), pentavalent antimonials (sodium stibogluconate or meglumine antimoniate) where resistance is absent. Cutaneous leishmaniasis: may self-limit in some species; treated with local or systemic antimonials, cryotherapy, thermotherapy, miltefosine, or amphotericin B depending on species. Mucocutaneous leishmaniasis: requires aggressive systemic treatment with liposomal amphotericin B or antimonials. Follow-up should be prolonged to detect relapses.",
    "prevencionEs": "Uso de repelentes de insectos al atardecer y por la noche, mosquiteros de malla fina tratados con insecticida (los flebotomos son muy pequenos), ropa protectora que cubra la piel expuesta, fumigacion intradomiciliaria, control de reservorios animales (especialmente perros infectados mediante collares con insecticida y tratamiento), reduccion de habitats de flebotomos eliminando materia organica y basura cerca de las viviendas, y deteccion temprana de casos para tratamiento oportuno.",
    "prevencionEn": "Use of insect repellents at dusk and nighttime, fine-mesh insecticide-treated bed nets (sandflies are very small), protective clothing covering exposed skin, indoor residual spraying, control of animal reservoirs (especially infected dogs through insecticide collars and treatment), reduction of sandfly habitats by eliminating organic matter and garbage near homes, and early case detection for timely treatment.",
    "regionesEndemicasEs": "Leishmaniasis visceral: India (Bihar), Bangladesh, Nepal, Sudan, Etiopia, Somalia, Brasil. Leishmaniasis cutanea del Viejo Mundo: Medio Oriente (Afganistan, Iran, Irak, Siria), norte de Africa, Asia Central. Leishmaniasis cutanea del Nuevo Mundo: America Central y del Sur (Brasil, Colombia, Peru, Bolivia). Leishmaniasis mucocutanea: Bolivia, Brasil, Peru.",
    "regionesEndemicasEn": "Visceral leishmaniasis: India (Bihar), Bangladesh, Nepal, Sudan, Ethiopia, Somalia, Brazil. Old World cutaneous leishmaniasis: Middle East (Afghanistan, Iran, Iraq, Syria), North Africa, Central Asia. New World cutaneous leishmaniasis: Central and South America (Brazil, Colombia, Peru, Bolivia). Mucocutaneous leishmaniasis: Bolivia, Brazil, Peru.",
    "cuandoConsultarEs": "Consulte inmediatamente si presenta una ulcera cutanea que no cicatriza despues de varias semanas, especialmente si viajo o vive en areas endemicas. Busque atencion urgente si tiene fiebre prolongada inexplicable con agrandamiento del abdomen, perdida de peso o sangrados. Las lesiones nasales progresivas o destructivas requieren evaluacion inmediata.",
    "cuandoConsultarEn": "Consult immediately if you have a skin ulcer that does not heal after several weeks, especially if you traveled to or live in endemic areas. Seek urgent care if you have unexplained prolonged fever with abdominal enlargement, weight loss, or bleeding. Progressive or destructive nasal lesions require immediate evaluation."
  },
  {
    "id": "esquistosomiasis",
    "nombreEs": "Esquistosomiasis (Bilharziasis)",
    "nombreEn": "Schistosomiasis (Bilharziasis)",
    "descripcionEs": "La esquistosomiasis es una enfermedad parasitaria cronica causada por trematodos del genero Schistosoma. Las especies principales son S. mansoni, S. haematobium y S. japonicum. Las larvas (cercarias) penetran la piel al contacto con agua dulce contaminada, migran por el cuerpo y los gusanos adultos se alojan en los vasos sanguineos del intestino o la vejiga. La respuesta inmune del huesped a los huevos del parasito causa inflamacion cronica y fibrosis en organos afectados. Afecta a mas de 200 millones de personas en el mundo, principalmente en Africa subsahariana, y es la segunda enfermedad parasitaria mas importante despues de la malaria en terminos de impacto socioeconomico.",
    "descripcionEn": "Schistosomiasis is a chronic parasitic disease caused by trematode flukes of the genus Schistosoma. The main species are S. mansoni, S. haematobium, and S. japonicum. Larvae (cercariae) penetrate the skin upon contact with contaminated freshwater, migrate through the body, and adult worms lodge in blood vessels of the intestine or bladder. The host immune response to parasite eggs causes chronic inflammation and fibrosis in affected organs. It affects more than 200 million people worldwide, mainly in sub-Saharan Africa, and is the second most important parasitic disease after malaria in terms of socioeconomic impact.",
    "categoriaEs": "Parasitaria",
    "categoriaEn": "Parasitic",
    "sintomasEs": [
      "Dermatitis del nadador: erupcion pruriginosa en la piel al contacto inicial con cercarias",
      "Sindrome de Katayama (fase aguda): fiebre, urticaria, tos, diarrea, eosinofilia marcada",
      "Intestinal (S. mansoni, S. japonicum): dolor abdominal, diarrea sanguinolenta, hepatoesplenomegalia",
      "Urinaria (S. haematobium): hematuria (sangre en la orina), disuria, dolor suprapubico",
      "Fibrosis hepatica periportal (pipestem fibrosis) con hipertension portal",
      "Anemia cronica y desnutricion, especialmente en ninos",
      "Fibrosis vesical con calcificacion y riesgo de cancer de vejiga",
      "Afectacion del sistema nervioso central (neurosquistosomiasis) con convulsiones o mielopatia"
    ],
    "sintomasEn": [
      "Swimmer's itch: pruritic skin rash upon initial contact with cercariae",
      "Katayama syndrome (acute phase): fever, urticaria, cough, diarrhea, marked eosinophilia",
      "Intestinal (S. mansoni, S. japonicum): abdominal pain, bloody diarrhea, hepatosplenomegaly",
      "Urinary (S. haematobium): hematuria (blood in urine), dysuria, suprapubic pain",
      "Periportal hepatic fibrosis (pipestem fibrosis) with portal hypertension",
      "Chronic anemia and malnutrition, especially in children",
      "Bladder fibrosis with calcification and risk of bladder cancer",
      "Central nervous system involvement (neuroschistosomiasis) with seizures or myelopathy"
    ],
    "transmisionEs": "Se transmite por contacto de la piel con agua dulce contaminada con cercarias liberadas por caracoles de agua dulce infectados (huespedes intermediarios del genero Biomphalaria para S. mansoni, Bulinus para S. haematobium, y Oncomelania para S. japonicum). Las actividades de riesgo incluyen nadar, banarse, lavar ropa, pescar, o caminar descalzo en rios, lagos o estanques de agua dulce en zonas endemicas. Los huevos se excretan en heces u orina del humano infectado, eclosionan en el agua y los miracidios infectan a los caracoles, completando el ciclo. No se transmite de persona a persona directamente.",
    "transmisionEn": "Transmitted through skin contact with freshwater contaminated with cercariae released by infected freshwater snails (intermediate hosts of genus Biomphalaria for S. mansoni, Bulinus for S. haematobium, and Oncomelania for S. japonicum). Risk activities include swimming, bathing, washing clothes, fishing, or walking barefoot in rivers, lakes, or freshwater ponds in endemic areas. Eggs are excreted in feces or urine of infected humans, hatch in water, and miracidia infect snails, completing the cycle. Not transmitted directly person to person.",
    "diagnosticoEs": "Examen parasitologico de heces (tecnica de Kato-Katz) para S. mansoni y S. japonicum, examen de orina (filtracion) para S. haematobium, biopsia rectal o vesical para visualizar huevos. Pruebas serologicas (ELISA para anticuerpos) utiles en viajeros y fase aguda. Deteccion de antigeno circulante en orina (POC-CCA) como prueba rapida de campo. Hemograma con eosinofilia, ecografia abdominal para evaluar fibrosis hepatica (clasificacion de Niamey), cistoscopia para lesiones vesicales, y PCR en centros especializados.",
    "diagnosticoEn": "Parasitological stool examination (Kato-Katz technique) for S. mansoni and S. japonicum, urine examination (filtration) for S. haematobium, rectal or bladder biopsy to visualize eggs. Serological tests (antibody ELISA) useful in travelers and acute phase. Circulating antigen detection in urine (POC-CCA) as a rapid field test. Complete blood count with eosinophilia, abdominal ultrasound to assess hepatic fibrosis (Niamey classification), cystoscopy for bladder lesions, and PCR in specialized centers.",
    "tratamientoEs": "El praziquantel es el tratamiento de eleccion para todas las formas de esquistosomiasis. La dosis es de 40 mg/kg en dosis unica para S. mansoni y S. haematobium, y 60 mg/kg dividido en tres dosis para S. japonicum. Es seguro, efectivo y de bajo costo. En el sindrome de Katayama agudo se administran corticosteroides para controlar la reaccion inmune antes del praziquantel. El tratamiento masivo periodico de comunidades endemicas (administracion masiva de medicamentos) es la estrategia principal de control. Para complicaciones como hipertension portal se pueden requerir procedimientos quirurgicos (derivacion portosistemica). El seguimiento con examenes de heces u orina se realiza 4-6 semanas despues del tratamiento.",
    "tratamientoEn": "Praziquantel is the treatment of choice for all forms of schistosomiasis. The dose is 40 mg/kg in a single dose for S. mansoni and S. haematobium, and 60 mg/kg divided into three doses for S. japonicum. It is safe, effective, and low cost. In acute Katayama syndrome, corticosteroids are given to control the immune reaction before praziquantel. Periodic mass treatment of endemic communities (mass drug administration) is the main control strategy. For complications such as portal hypertension, surgical procedures (portosystemic shunt) may be required. Follow-up with stool or urine examinations is done 4-6 weeks after treatment.",
    "prevencionEs": "Evitar contacto con agua dulce en zonas endemicas (no nadar, banarse o lavar ropa en rios o lagos), proveer agua potable segura y saneamiento adecuado, control de caracoles con molusquicidas, educacion sanitaria comunitaria, tratamiento masivo periodico con praziquantel en poblaciones escolares y comunidades de alta prevalencia, y mejoras en infraestructura de agua y saneamiento.",
    "prevencionEn": "Avoid contact with freshwater in endemic areas (do not swim, bathe, or wash clothes in rivers or lakes), provide safe drinking water and adequate sanitation, snail control with molluscicides, community health education, periodic mass treatment with praziquantel in school-age populations and high-prevalence communities, and improvements in water and sanitation infrastructure.",
    "regionesEndemicasEs": "Africa subsahariana (la region mas afectada, especialmente Nigeria, Tanzania, Mozambique, Ghana, Republica Democratica del Congo), Egipto, Medio Oriente (Yemen), America del Sur (Brasil, Venezuela, Surinam), el Caribe (algunas islas), y Asia (China, Filipinas, Indonesia). Mas del 90% de los casos se concentran en Africa.",
    "regionesEndemicasEn": "Sub-Saharan Africa (the most affected region, especially Nigeria, Tanzania, Mozambique, Ghana, Democratic Republic of Congo), Egypt, Middle East (Yemen), South America (Brazil, Venezuela, Suriname), the Caribbean (some islands), and Asia (China, Philippines, Indonesia). Over 90% of cases are concentrated in Africa.",
    "cuandoConsultarEs": "Consulte si presenta sangre en la orina o heces, dolor abdominal persistente, o fiebre despues de haber estado en contacto con agua dulce en zonas tropicales. Si viajo a Africa o America del Sur y nado en lagos o rios, solicite pruebas de deteccion aunque no presente sintomas. Los ninos con exposicion repetida y retraso del crecimiento deben ser evaluados.",
    "cuandoConsultarEn": "Consult if you have blood in urine or stool, persistent abdominal pain, or fever after contact with freshwater in tropical areas. If you traveled to Africa or South America and swam in lakes or rivers, request screening tests even without symptoms. Children with repeated exposure and growth delay should be evaluated."
  },
  {
    "id": "filariasis-linfatica",
    "nombreEs": "Filariasis Linfatica (Elefantiasis)",
    "nombreEn": "Lymphatic Filariasis (Elephantiasis)",
    "descripcionEs": "La filariasis linfatica es una enfermedad parasitaria cronica causada por nematodos filariales (Wuchereria bancrofti, Brugia malayi y Brugia timori) que se alojan en el sistema linfatico. Se transmite por la picadura de mosquitos infectados. Los parasitos adultos viven en los vasos linfaticos durante anos, causando dano progresivo al sistema linfatico que resulta en linfedema cronico y la desfigurante condicion conocida como elefantiasis. Afecta a aproximadamente 51 millones de personas en 72 paises, y mas de 860 millones estan en riesgo. Es una de las principales causas de discapacidad permanente en el mundo tropical y tiene un enorme impacto psicosocial y economico.",
    "descripcionEn": "Lymphatic filariasis is a chronic parasitic disease caused by filarial nematodes (Wuchereria bancrofti, Brugia malayi, and Brugia timori) that lodge in the lymphatic system. It is transmitted through the bite of infected mosquitoes. Adult parasites live in lymphatic vessels for years, causing progressive damage to the lymphatic system resulting in chronic lymphedema and the disfiguring condition known as elephantiasis. It affects approximately 51 million people in 72 countries, and more than 860 million are at risk. It is one of the leading causes of permanent disability in the tropical world and has enormous psychosocial and economic impact.",
    "categoriaEs": "Parasitaria",
    "categoriaEn": "Parasitic",
    "sintomasEs": [
      "Linfedema cronico progresivo de extremidades, especialmente piernas y pies",
      "Elefantiasis: engrosamiento masivo de la piel y tejido subcutaneo de las piernas",
      "Hidrocele: acumulacion de liquido en el escroto, causa agrandamiento testicular significativo",
      "Linfangitis aguda recurrente con fiebre, escalofrios y dolor intenso en extremidades",
      "Quiluria: presencia de linfa en la orina, dandole aspecto lechoso",
      "Adenopatia inguinal y axilar",
      "Eosinofilia pulmonar tropical: tos nocturna, sibilancias, infiltrados pulmonares",
      "Infecciones bacterianas secundarias de la piel afectada"
    ],
    "sintomasEn": [
      "Progressive chronic lymphedema of extremities, especially legs and feet",
      "Elephantiasis: massive thickening of skin and subcutaneous tissue of legs",
      "Hydrocele: fluid accumulation in the scrotum causing significant testicular enlargement",
      "Recurrent acute lymphangitis with fever, chills, and intense limb pain",
      "Chyluria: presence of lymph in urine giving it a milky appearance",
      "Inguinal and axillary lymphadenopathy",
      "Tropical pulmonary eosinophilia: nocturnal cough, wheezing, pulmonary infiltrates",
      "Secondary bacterial infections of affected skin"
    ],
    "transmisionEs": "Se transmite por la picadura de mosquitos infectados, principalmente Culex quinquefasciatus (transmision de W. bancrofti en areas urbanas), Anopheles (transmision en Africa rural), y Mansonia (transmision de Brugia en Asia). Los mosquitos ingieren microfilarias circulantes en la sangre al picar a una persona infectada. Las microfilarias se desarrollan en larvas infectivas dentro del mosquito en 10-14 dias, y se transmiten a un nuevo huesped durante la siguiente picadura. Las microfilarias tienen periodicidad nocturna, circulando en sangre periferica principalmente por la noche.",
    "transmisionEn": "Transmitted through the bite of infected mosquitoes, primarily Culex quinquefasciatus (W. bancrofti transmission in urban areas), Anopheles (transmission in rural Africa), and Mansonia (Brugia transmission in Asia). Mosquitoes ingest circulating microfilariae in blood when biting an infected person. Microfilariae develop into infective larvae within the mosquito in 10-14 days and are transmitted to a new host during the next bite. Microfilariae have nocturnal periodicity, circulating in peripheral blood mainly at night.",
    "diagnosticoEs": "Deteccion de microfilarias en sangre periferica nocturna (entre 10pm y 2am debido a la periodicidad nocturna) mediante gota gruesa o tecnica de filtracion por membrana. Prueba rapida de inmunocromatografia (ICT) para detectar antigeno circulante de W. bancrofti (puede realizarse en cualquier momento del dia). Ecografia con sonda de alta frecuencia para visualizar gusanos adultos vivos en vasos linfaticos (signo de la danza filarial). Serologia con deteccion de anticuerpos IgG4, PCR, y hemograma que muestra eosinofilia.",
    "diagnosticoEn": "Detection of microfilariae in nocturnal peripheral blood (between 10pm and 2am due to nocturnal periodicity) via thick smear or membrane filtration technique. Rapid immunochromatographic test (ICT) to detect circulating W. bancrofti antigen (can be performed at any time of day). Ultrasound with high-frequency probe to visualize live adult worms in lymphatic vessels (filarial dance sign). Serology with IgG4 antibody detection, PCR, and complete blood count showing eosinophilia.",
    "tratamientoEs": "El tratamiento antiparasitario utiliza dietilcarbamazina (DEC) como farmaco principal, administrada durante 12 dias para matar microfilarias y algunos gusanos adultos. La ivermectina se usa en combinacion con albendazol en areas co-endemicas con oncocercosis (donde DEC esta contraindicada). La triple terapia (IDA: ivermectina + DEC + albendazol) en dosis unica anual es la estrategia recomendada por la OMS para la eliminacion. Para el manejo del linfedema: higiene rigurosa diaria de las extremidades afectadas, elevacion de la extremidad, ejercicio, vendaje compresivo, tratamiento de infecciones secundarias con antibioticos, y en casos avanzados, cirugia reconstructiva. El hidrocele se trata con hidrocelectomia quirurgica.",
    "tratamientoEn": "Antiparasitic treatment uses diethylcarbamazine (DEC) as the main drug, administered for 12 days to kill microfilariae and some adult worms. Ivermectin is used in combination with albendazole in areas co-endemic with onchocerciasis (where DEC is contraindicated). Triple therapy (IDA: ivermectin + DEC + albendazole) as a single annual dose is the WHO-recommended strategy for elimination. For lymphedema management: rigorous daily hygiene of affected limbs, limb elevation, exercise, compression bandaging, treatment of secondary infections with antibiotics, and in advanced cases, reconstructive surgery. Hydrocele is treated with surgical hydrocelectomy.",
    "prevencionEs": "Administracion masiva de medicamentos antiparasitarios a toda la poblacion en riesgo (al menos 5 anos consecutivos), control de mosquitos vectores mediante mosquiteros tratados con insecticida, fumigacion intradomiciliaria residual, eliminacion de criaderos de mosquitos, educacion comunitaria sobre la enfermedad y sus consecuencias, y programas de manejo de morbilidad para personas ya afectadas por linfedema o hidrocele.",
    "prevencionEn": "Mass drug administration of antiparasitic medications to the entire at-risk population (at least 5 consecutive years), vector mosquito control through insecticide-treated bed nets, indoor residual spraying, elimination of mosquito breeding sites, community education about the disease and its consequences, and morbidity management programs for people already affected by lymphedema or hydrocele.",
    "regionesEndemicasEs": "Asia del Sur y Sureste (India, Indonesia, Myanmar, Bangladesh, Filipinas), Africa subsahariana (Nigeria, Republica Democratica del Congo, Tanzania, Madagascar), islas del Pacifico (Papua Nueva Guinea, Fiji), America (Haiti, Republica Dominicana, Guyana, Brasil). India concentra el 40% de la carga mundial de la enfermedad.",
    "regionesEndemicasEn": "South and Southeast Asia (India, Indonesia, Myanmar, Bangladesh, Philippines), sub-Saharan Africa (Nigeria, Democratic Republic of Congo, Tanzania, Madagascar), Pacific Islands (Papua New Guinea, Fiji), Americas (Haiti, Dominican Republic, Guyana, Brazil). India accounts for 40% of the global disease burden.",
    "cuandoConsultarEs": "Consulte si nota hinchazon progresiva de una pierna, brazo o zona genital, especialmente si vive o ha viajado a regiones tropicales. Busque atencion urgente si presenta episodios de fiebre con dolor e hinchazon aguda de una extremidad. Los hombres deben consultar si notan agrandamiento del escroto. La orina de aspecto lechoso tambien requiere evaluacion medica.",
    "cuandoConsultarEn": "Consult if you notice progressive swelling of a leg, arm, or genital area, especially if you live in or have traveled to tropical regions. Seek urgent care if you experience episodes of fever with acute pain and swelling of a limb. Men should consult if they notice scrotal enlargement. Milky-appearing urine also requires medical evaluation."
  },
  {
    "id": "chikungunya",
    "nombreEs": "Chikungunya",
    "nombreEn": "Chikungunya",
    "descripcionEs": "El chikungunya es una enfermedad viral aguda transmitida por mosquitos del genero Aedes (A. aegypti y A. albopictus), causada por el virus chikungunya (CHIKV), un alfavirus de la familia Togaviridae. Se caracteriza por fiebre alta de inicio subito y dolor articular intenso e incapacitante que puede persistir durante meses o incluso anos en una proporcion significativa de pacientes. El nombre proviene de una palabra en lengua makonde que significa 'aquel que se encorva', en referencia a la postura adoptada por los pacientes debido al dolor articular. Desde 2004, ha causado epidemias masivas en el Oceano Indico, Asia, Europa y las Americas, afectando a millones de personas.",
    "descripcionEn": "Chikungunya is an acute viral disease transmitted by Aedes mosquitoes (A. aegypti and A. albopictus), caused by the chikungunya virus (CHIKV), an alphavirus of the Togaviridae family. It is characterized by sudden onset high fever and intense, debilitating joint pain that can persist for months or even years in a significant proportion of patients. The name comes from a Makonde language word meaning 'that which bends up,' referring to the posture adopted by patients due to joint pain. Since 2004, it has caused massive epidemics in the Indian Ocean, Asia, Europe, and the Americas, affecting millions of people.",
    "categoriaEs": "Viral",
    "categoriaEn": "Viral",
    "sintomasEs": [
      "Fiebre alta de inicio subito (mayor de 39°C) que dura 2-7 dias",
      "Poliartralgias severas bilaterales y simetricas, especialmente en manos, munecas, tobillos y pies",
      "Erupcion maculopapular que aparece 2-5 dias despues del inicio de la fiebre",
      "Dolor de cabeza intenso",
      "Dolor muscular generalizado (mialgias)",
      "Fatiga pronunciada que puede durar semanas",
      "Conjuntivitis no purulenta",
      "Artritis cronica post-chikungunya que puede persistir meses a anos en 30-40% de pacientes"
    ],
    "sintomasEn": [
      "Sudden onset high fever (above 39°C) lasting 2-7 days",
      "Severe bilateral and symmetrical polyarthralgia, especially in hands, wrists, ankles, and feet",
      "Maculopapular rash appearing 2-5 days after fever onset",
      "Intense headache",
      "Generalized muscle pain (myalgias)",
      "Pronounced fatigue that can last weeks",
      "Non-purulent conjunctivitis",
      "Chronic post-chikungunya arthritis that can persist months to years in 30-40% of patients"
    ],
    "transmisionEs": "Se transmite por la picadura de mosquitos Aedes aegypti y Aedes albopictus infectados. Estos mosquitos pican principalmente durante el dia, con picos de actividad al amanecer y al atardecer. El periodo de incubacion es de 3-7 dias (rango 1-12 dias). La viremia dura aproximadamente 5-7 dias, durante los cuales el paciente puede infectar a los mosquitos. A. albopictus puede sobrevivir en climas templados, lo que facilita la expansion geografica de la enfermedad. No se transmite directamente de persona a persona. Raramente puede transmitirse de madre a hijo durante el parto.",
    "transmisionEn": "Transmitted through the bite of infected Aedes aegypti and Aedes albopictus mosquitoes. These mosquitoes bite primarily during daytime, with peak activity at dawn and dusk. The incubation period is 3-7 days (range 1-12 days). Viremia lasts approximately 5-7 days, during which the patient can infect mosquitoes. A. albopictus can survive in temperate climates, facilitating the geographic expansion of the disease. Not transmitted directly person to person. Rarely can be transmitted from mother to child during delivery.",
    "diagnosticoEs": "En los primeros 5 dias de sintomas se utiliza RT-PCR para detectar ARN viral en sangre (prueba mas sensible y especifica en fase aguda). A partir del dia 5-7 se realizan pruebas serologicas: deteccion de IgM anti-CHIKV (positiva desde el dia 5, persiste por semanas a meses) e IgG anti-CHIKV (indica infeccion pasada e inmunidad). Se debe diferenciar del dengue y zika por presentacion clinica similar. El hemograma puede mostrar linfopenia y trombocitopenia leve. Las pruebas hepaticas pueden estar levemente elevadas. En la fase cronica se realizan marcadores inflamatorios (PCR, VSG) y radiografias articulares.",
    "diagnosticoEn": "In the first 5 days of symptoms, RT-PCR is used to detect viral RNA in blood (most sensitive and specific test in acute phase). From day 5-7 onward, serological tests are performed: anti-CHIKV IgM detection (positive from day 5, persists for weeks to months) and anti-CHIKV IgG (indicates past infection and immunity). Must be differentiated from dengue and Zika due to similar clinical presentation. CBC may show lymphopenia and mild thrombocytopenia. Liver tests may be mildly elevated. In the chronic phase, inflammatory markers (CRP, ESR) and joint radiographs are performed.",
    "tratamientoEs": "No existe tratamiento antiviral especifico para chikungunya. El manejo es sintomatico: reposo durante la fase aguda, hidratacion abundante, acetaminofen (paracetamol) para fiebre y dolor (evitar aspirina y AINEs en la fase aguda por riesgo de sangrado si se confunde con dengue). Una vez descartado dengue, los AINEs como ibuprofeno o naproxeno son utiles para el dolor articular. En la fase cronica articular: fisioterapia, ejercicio gradual, AINEs a largo plazo, metotrexato o hidroxicloroquina en casos refractarios bajo supervision reumatologica. Los corticosteroides se reservan para artritis cronica severa que no responde a otros tratamientos.",
    "tratamientoEn": "There is no specific antiviral treatment for chikungunya. Management is symptomatic: rest during the acute phase, abundant hydration, acetaminophen (paracetamol) for fever and pain (avoid aspirin and NSAIDs in acute phase due to bleeding risk if confused with dengue). Once dengue is ruled out, NSAIDs such as ibuprofen or naproxen are useful for joint pain. In the chronic articular phase: physical therapy, gradual exercise, long-term NSAIDs, methotrexate or hydroxychloroquine in refractory cases under rheumatologic supervision. Corticosteroids are reserved for severe chronic arthritis not responding to other treatments.",
    "prevencionEs": "Proteccion personal contra picaduras de mosquito: uso de repelente DEET, picaridina o IR3535, ropa de manga larga y colores claros, mosquiteros en ventanas y camas. Eliminacion de criaderos de Aedes: vaciado de recipientes con agua estancada (llantas, macetas, cubetas, tanques abiertos), limpieza de canaletas. Fumigacion comunitaria durante brotes. Vacuna Ixchiq aprobada en 2023 para adultos en riesgo. Los pacientes infectados deben protegerse de picaduras de mosquitos durante la primera semana para evitar la propagacion.",
    "prevencionEn": "Personal protection against mosquito bites: use of DEET, picaridin, or IR3535 repellent, long-sleeved clothing in light colors, window and bed mosquito nets. Elimination of Aedes breeding sites: emptying containers with standing water (tires, flower pots, buckets, open tanks), cleaning rain gutters. Community fumigation during outbreaks. Ixchiq vaccine approved in 2023 for at-risk adults. Infected patients should protect themselves from mosquito bites during the first week to prevent spread.",
    "regionesEndemicasEs": "Africa (Este y Oeste), Asia del Sur y Sureste (India, Sri Lanka, Tailandia, Indonesia, Filipinas), islas del Oceano Indico (La Reunion, Mauricio), Americas (Caribe, America Central, America del Sur incluyendo Brasil, Colombia, Venezuela, Republica Dominicana). Brotes tambien han ocurrido en el sur de Europa (Italia, Francia) debido a la presencia de A. albopictus.",
    "regionesEndemicasEn": "Africa (East and West), South and Southeast Asia (India, Sri Lanka, Thailand, Indonesia, Philippines), Indian Ocean Islands (La Reunion, Mauritius), Americas (Caribbean, Central America, South America including Brazil, Colombia, Venezuela, Dominican Republic). Outbreaks have also occurred in southern Europe (Italy, France) due to the presence of A. albopictus.",
    "cuandoConsultarEs": "Consulte si desarrolla fiebre alta subita con dolor articular severo, especialmente si ha viajado a zonas tropicales. Busque atencion urgente si tiene signos de deshidratacion, dolor articular que le impide moverse, o sintomas neurologicos. Si el dolor articular persiste mas de 3 semanas despues de la infeccion aguda, solicite evaluacion reumatologica.",
    "cuandoConsultarEn": "Consult if you develop sudden high fever with severe joint pain, especially if you have traveled to tropical areas. Seek urgent care if you have signs of dehydration, joint pain that prevents movement, or neurological symptoms. If joint pain persists more than 3 weeks after acute infection, request rheumatologic evaluation."
  },
  {
    "id": "zika",
    "nombreEs": "Virus del Zika",
    "nombreEn": "Zika Virus",
    "descripcionEs": "El zika es una enfermedad viral transmitida principalmente por mosquitos Aedes, causada por el virus Zika (ZIKV), un flavivirus relacionado con el dengue y la fiebre amarilla. Aunque la infeccion en adultos suele ser leve o asintomatica (80% de los casos), su importancia radica en las complicaciones devastadoras durante el embarazo: la infeccion congenita puede causar microcefalia y otros defectos graves del neurodesarrollo fetal, conocidos como sindrome congenito por virus Zika. Tambien se ha asociado con el sindrome de Guillain-Barre en adultos. La epidemia de 2015-2016 en las Americas causo alarma mundial con miles de casos de microcefalia en Brasil.",
    "descripcionEn": "Zika is a viral disease primarily transmitted by Aedes mosquitoes, caused by the Zika virus (ZIKV), a flavivirus related to dengue and yellow fever. Although infection in adults is usually mild or asymptomatic (80% of cases), its importance lies in the devastating complications during pregnancy: congenital infection can cause microcephaly and other severe fetal neurodevelopmental defects, known as congenital Zika syndrome. It has also been associated with Guillain-Barre syndrome in adults. The 2015-2016 epidemic in the Americas caused worldwide alarm with thousands of microcephaly cases in Brazil.",
    "categoriaEs": "Viral",
    "categoriaEn": "Viral",
    "sintomasEs": [
      "Fiebre baja (menor de 38.5°C) de corta duracion",
      "Erupcion cutanea maculopapular pruriginosa difusa (a menudo el primer sintoma)",
      "Conjuntivitis no purulenta bilateral",
      "Artralgias leves a moderadas, principalmente en manos y pies",
      "Dolor de cabeza retro-orbital",
      "Mialgias",
      "Fatiga y malestar general",
      "Complicacion en embarazo: microcefalia y sindrome congenito por Zika en el feto",
      "Sindrome de Guillain-Barre: debilidad muscular ascendente"
    ],
    "sintomasEn": [
      "Low-grade fever (below 38.5°C) of short duration",
      "Diffuse pruritic maculopapular skin rash (often the first symptom)",
      "Bilateral non-purulent conjunctivitis",
      "Mild to moderate arthralgia, mainly in hands and feet",
      "Retro-orbital headache",
      "Myalgias",
      "Fatigue and general malaise",
      "Pregnancy complication: microcephaly and congenital Zika syndrome in the fetus",
      "Guillain-Barre syndrome: ascending muscle weakness"
    ],
    "transmisionEs": "Se transmite principalmente por la picadura de mosquitos Aedes aegypti y Aedes albopictus infectados. A diferencia de otros arbovirus, el zika tiene vias adicionales de transmision: sexual (el virus persiste en semen hasta 6 meses, en fluidos vaginales por semanas), vertical de madre a feto durante el embarazo (especialmente peligroso en el primer y segundo trimestre), por transfusion sanguinea, y posiblemente por lactancia materna (aunque no se ha confirmado transmision clinicamente significativa por esta via). El periodo de incubacion es de 3-14 dias.",
    "transmisionEn": "Transmitted primarily through the bite of infected Aedes aegypti and Aedes albopictus mosquitoes. Unlike other arboviruses, Zika has additional transmission routes: sexual (the virus persists in semen for up to 6 months, in vaginal fluids for weeks), vertical from mother to fetus during pregnancy (especially dangerous in the first and second trimester), through blood transfusion, and possibly through breastfeeding (although clinically significant transmission via this route has not been confirmed). The incubation period is 3-14 days.",
    "diagnosticoEs": "RT-PCR para detectar ARN viral en sangre (positivo los primeros 5-7 dias) y en orina (puede ser positivo hasta 14 dias despues del inicio de sintomas). Serologia IgM anti-Zika (positiva desde el dia 4-5, pero tiene reactividad cruzada con otros flavivirus como dengue). Prueba de neutralizacion por reduccion de placas (PRNT) para confirmar y diferenciar de dengue. En embarazadas con exposicion: ecografia prenatal seriada para detectar microcefalia y otras anomalias cerebrales, amniocentesis con PCR en liquido amniotico. Se recomienda pruebas de Zika en todo caso sospechoso en embarazadas.",
    "diagnosticoEn": "RT-PCR to detect viral RNA in blood (positive for the first 5-7 days) and in urine (can be positive up to 14 days after symptom onset). Anti-Zika IgM serology (positive from day 4-5, but has cross-reactivity with other flaviviruses like dengue). Plaque reduction neutralization test (PRNT) to confirm and differentiate from dengue. In pregnant women with exposure: serial prenatal ultrasound to detect microcephaly and other brain anomalies, amniocentesis with PCR on amniotic fluid. Zika testing is recommended in all suspected cases in pregnant women.",
    "tratamientoEs": "No existe tratamiento antiviral especifico ni vacuna aprobada para el virus Zika. El tratamiento es sintomatico: reposo, hidratacion adecuada, acetaminofen para fiebre y dolor. Se deben evitar aspirina y AINEs hasta descartar dengue por riesgo de hemorragia. En embarazadas infectadas: seguimiento ecografico fetal frecuente, evaluacion por medicina materno-fetal, y planificacion del parto en centro con capacidad de atencion neonatal especializada. El sindrome de Guillain-Barre se trata con inmunoglobulina intravenosa (IVIG) o plasmaferesis y soporte respiratorio si es necesario. Los ninos con sindrome congenito requieren atencion multidisciplinaria a largo plazo con neurologia, oftalmologia, audiologia y rehabilitacion.",
    "tratamientoEn": "There is no specific antiviral treatment or approved vaccine for Zika virus. Treatment is symptomatic: rest, adequate hydration, acetaminophen for fever and pain. Aspirin and NSAIDs should be avoided until dengue is ruled out due to hemorrhage risk. In infected pregnant women: frequent fetal ultrasound follow-up, maternal-fetal medicine evaluation, and delivery planning at a center with specialized neonatal care capability. Guillain-Barre syndrome is treated with intravenous immunoglobulin (IVIG) or plasmapheresis and respiratory support if needed. Children with congenital syndrome require long-term multidisciplinary care with neurology, ophthalmology, audiology, and rehabilitation.",
    "prevencionEs": "Proteccion contra mosquitos: repelente con DEET, picaridina o IR3535, ropa de manga larga, mosquiteros en ventanas y camas. Eliminacion de criaderos de mosquitos Aedes: vaciar recipientes con agua estancada. Prevencion de transmision sexual: uso de preservativo durante al menos 3 meses despues de la infeccion en hombres (6 meses si la pareja esta embarazada) y 2 meses en mujeres. Las mujeres embarazadas deben evitar viajar a zonas con transmision activa de Zika. Planificacion de embarazo: esperar al menos 2 meses despues de la exposicion antes de intentar concebir.",
    "prevencionEn": "Mosquito protection: repellent with DEET, picaridin, or IR3535, long-sleeved clothing, window and bed mosquito nets. Elimination of Aedes mosquito breeding sites: empty containers with standing water. Prevention of sexual transmission: condom use for at least 3 months after infection in men (6 months if partner is pregnant) and 2 months in women. Pregnant women should avoid traveling to areas with active Zika transmission. Pregnancy planning: wait at least 2 months after exposure before attempting to conceive.",
    "regionesEndemicasEs": "Americas: Brasil (epicentro de la epidemia 2015-2016), Caribe (Puerto Rico, Republica Dominicana, Jamaica, Cuba), America Central, Colombia, Venezuela. Asia del Sureste: Tailandia, Filipinas, Vietnam, Indonesia, India. Africa: Cabo Verde, Guinea-Bissau, Angola. Islas del Pacifico: Polinesia Francesa, Fiji, Samoa. La transmision activa varia estacionalmente; consulte las alertas de la OMS antes de viajar.",
    "regionesEndemicasEn": "Americas: Brazil (epicenter of the 2015-2016 epidemic), Caribbean (Puerto Rico, Dominican Republic, Jamaica, Cuba), Central America, Colombia, Venezuela. Southeast Asia: Thailand, Philippines, Vietnam, Indonesia, India. Africa: Cape Verde, Guinea-Bissau, Angola. Pacific Islands: French Polynesia, Fiji, Samoa. Active transmission varies seasonally; check WHO alerts before traveling.",
    "cuandoConsultarEs": "Las mujeres embarazadas o que planean un embarazo deben consultar inmediatamente si han viajado a zonas con transmision de Zika o si su pareja sexual ha viajado a dichas zonas. Consulte si desarrolla fiebre con erupcion cutanea y conjuntivitis despues de viajar a regiones tropicales. Busque atencion urgente si presenta debilidad muscular progresiva ascendente (posible Guillain-Barre).",
    "cuandoConsultarEn": "Pregnant women or those planning pregnancy should consult immediately if they have traveled to areas with Zika transmission or if their sexual partner has traveled to such areas. Consult if you develop fever with skin rash and conjunctivitis after traveling to tropical regions. Seek urgent care if you experience progressive ascending muscle weakness (possible Guillain-Barre)."
  },
  {
    "id": "leptospirosis",
    "nombreEs": "Leptospirosis",
    "nombreEn": "Leptospirosis",
    "descripcionEs": "La leptospirosis es una enfermedad infecciosa bacteriana zoonotica causada por espiroquetas del genero Leptospira. Es considerada la zoonosis mas distribuida a nivel mundial, afectando aproximadamente a 1 millon de personas al ano con casi 60,000 muertes. Se transmite por contacto con agua o suelo contaminados con orina de animales infectados (principalmente ratas y otros roedores). La enfermedad varia desde una forma leve febril autolimitada hasta la forma severa conocida como sindrome de Weil, que incluye falla hepatorrenal, hemorragias y alta mortalidad. Los brotes frecuentemente ocurren despues de inundaciones en zonas tropicales urbanas y rurales.",
    "descripcionEn": "Leptospirosis is a zoonotic bacterial infectious disease caused by spirochetes of the genus Leptospira. It is considered the most widely distributed zoonosis worldwide, affecting approximately 1 million people per year with nearly 60,000 deaths. It is transmitted through contact with water or soil contaminated with urine from infected animals (primarily rats and other rodents). The disease ranges from a mild self-limiting febrile form to the severe form known as Weil syndrome, which includes hepatorenal failure, hemorrhages, and high mortality. Outbreaks frequently occur after floods in tropical urban and rural areas.",
    "categoriaEs": "Bacteriana",
    "categoriaEn": "Bacterial",
    "sintomasEs": [
      "Fase septiquemica (primera semana): fiebre alta de inicio abrupto con escalofrios",
      "Cefalea intensa, especialmente frontal y retro-orbital",
      "Mialgias severas, particularmente en pantorrillas y region lumbar",
      "Sufusion conjuntival bilateral sin secrecion purulenta (signo muy sugestivo)",
      "Ictericia (coloracion amarilla de piel y ojos) en la forma severa",
      "Nausea, vomito, diarrea y dolor abdominal",
      "Hemorragias: petequias, epistaxis, hemoptisis, hemorragia pulmonar",
      "Oliguria o anuria por insuficiencia renal aguda",
      "Meningitis aseptica con cefalea y rigidez de nuca"
    ],
    "sintomasEn": [
      "Septicemic phase (first week): abrupt onset high fever with chills",
      "Intense headache, especially frontal and retro-orbital",
      "Severe myalgias, particularly in calves and lumbar region",
      "Bilateral conjunctival suffusion without purulent discharge (highly suggestive sign)",
      "Jaundice (yellowing of skin and eyes) in severe form",
      "Nausea, vomiting, diarrhea, and abdominal pain",
      "Hemorrhages: petechiae, epistaxis, hemoptysis, pulmonary hemorrhage",
      "Oliguria or anuria due to acute renal failure",
      "Aseptic meningitis with headache and neck stiffness"
    ],
    "transmisionEs": "Se transmite por contacto directo o indirecto con orina de animales infectados, principalmente roedores (ratas), perros, ganado, cerdos y animales silvestres. La bacteria Leptospira penetra a traves de piel lesionada, membranas mucosas (ojos, nariz, boca) o piel macerada por exposicion prolongada al agua. Las principales vias de exposicion son: aguas contaminadas de inundaciones, rios, lagos y alcantarillas; suelo humedo contaminado; contacto ocupacional con animales infectados (agricultores, veterinarios, trabajadores de alcantarillado, mineros); y actividades recreativas en agua dulce. La bacteria sobrevive semanas en agua y suelo humedo y calido.",
    "transmisionEn": "Transmitted through direct or indirect contact with urine from infected animals, mainly rodents (rats), dogs, cattle, pigs, and wild animals. Leptospira bacteria penetrate through broken skin, mucous membranes (eyes, nose, mouth), or skin macerated by prolonged water exposure. Main exposure routes include: contaminated floodwaters, rivers, lakes, and sewers; contaminated moist soil; occupational contact with infected animals (farmers, veterinarians, sewer workers, miners); and recreational activities in freshwater. The bacteria survive weeks in warm, moist water and soil.",
    "diagnosticoEs": "La prueba de aglutinacion microscopica (MAT) es el estandar oro: detecta anticuerpos contra serogrupos especificos de Leptospira, pero requiere muestras pareadas (aguda y convaleciente) con al menos 4 veces de aumento del titulo. Pruebas rapidas de IgM (ELISA) son utiles para diagnostico temprano. Hemocultivo en la primera semana y urocultivo a partir de la segunda semana en medios especializados (Fletcher, EMJH). PCR en sangre (primera semana) y orina (segunda semana en adelante). El hemograma muestra leucocitosis con neutrofilia, trombocitopenia, elevacion de bilirrubina directa, transaminasas moderadamente elevadas (generalmente menores de 200 U/L), creatinina elevada, y CPK elevada.",
    "diagnosticoEn": "The microscopic agglutination test (MAT) is the gold standard: it detects antibodies against specific Leptospira serogroups, but requires paired samples (acute and convalescent) with at least a 4-fold titer increase. Rapid IgM tests (ELISA) are useful for early diagnosis. Blood culture in the first week and urine culture from the second week in specialized media (Fletcher, EMJH). PCR in blood (first week) and urine (second week onward). CBC shows leukocytosis with neutrophilia, thrombocytopenia, elevated direct bilirubin, moderately elevated transaminases (usually less than 200 U/L), elevated creatinine, and elevated CPK.",
    "tratamientoEs": "Antibioticoterapia temprana es fundamental: para casos leves a moderados se utiliza doxiciclina 100 mg cada 12 horas por 7 dias, o amoxicilina como alternativa. Para casos severos (sindrome de Weil): penicilina G intravenosa 1.5 millones de unidades cada 6 horas por 7 dias, o ceftriaxona 1 g IV diario. El soporte intensivo incluye hidratacion intravenosa agresiva, correccion de trastornos electroliticos, hemodialisis o dialisis peritoneal para insuficiencia renal aguda, ventilacion mecanica para hemorragia pulmonar severa, transfusion de plaquetas y hemoderivados para hemorragias. La reaccion de Jarisch-Herxheimer puede ocurrir al inicio de antibioticos. La insuficiencia renal por leptospirosis es generalmente reversible con tratamiento adecuado.",
    "tratamientoEn": "Early antibiotic therapy is fundamental: for mild to moderate cases, doxycycline 100 mg every 12 hours for 7 days is used, or amoxicillin as an alternative. For severe cases (Weil syndrome): intravenous penicillin G 1.5 million units every 6 hours for 7 days, or ceftriaxone 1 g IV daily. Intensive support includes aggressive intravenous hydration, correction of electrolyte disturbances, hemodialysis or peritoneal dialysis for acute renal failure, mechanical ventilation for severe pulmonary hemorrhage, platelet and blood product transfusion for hemorrhages. The Jarisch-Herxheimer reaction may occur at antibiotic initiation. Renal failure from leptospirosis is generally reversible with adequate treatment.",
    "prevencionEs": "Control de roedores en ambientes urbanos y rurales (saneamiento, trampas, rodenticidas), evitar contacto con aguas de inundacion o potencialmente contaminadas, uso de botas y guantes protectores en ocupaciones de riesgo, drenaje adecuado de aguas estancadas, vacunacion de animales domesticos (perros, ganado), doxiciclina 200 mg semanal como quimioprofilaxis para personas con exposicion de alto riesgo (militares, trabajadores de rescate en inundaciones), educacion sobre riesgo despues de inundaciones, y no caminar descalzo en zonas humadas potencialmente contaminadas.",
    "prevencionEn": "Rodent control in urban and rural environments (sanitation, traps, rodenticides), avoid contact with floodwaters or potentially contaminated water, use of protective boots and gloves in at-risk occupations, adequate drainage of standing water, vaccination of domestic animals (dogs, cattle), doxycycline 200 mg weekly as chemoprophylaxis for people with high-risk exposure (military, flood rescue workers), education about risk after floods, and not walking barefoot in potentially contaminated wet areas.",
    "regionesEndemicasEs": "Distribucion mundial con mayor incidencia en tropicos. Sureste Asiatico (India, Sri Lanka, Tailandia, Filipinas), America Latina (Brasil, Peru, Nicaragua, Cuba, Colombia), Oceania, islas del Caribe, Africa subsahariana. Los brotes urbanos son especialmente comunes en areas con inundaciones frecuentes como favelas de Brasil e India. Casos esporadicos ocurren en paises templados asociados a recreacion acuatica y contacto con animales.",
    "regionesEndemicasEn": "Worldwide distribution with highest incidence in tropics. Southeast Asia (India, Sri Lanka, Thailand, Philippines), Latin America (Brazil, Peru, Nicaragua, Cuba, Colombia), Oceania, Caribbean Islands, sub-Saharan Africa. Urban outbreaks are especially common in areas with frequent flooding such as favelas in Brazil and India. Sporadic cases occur in temperate countries associated with aquatic recreation and animal contact.",
    "cuandoConsultarEs": "Consulte urgentemente si presenta fiebre alta con dolor muscular intenso, ictericia u ojos rojos sin secrecion, especialmente si estuvo en contacto con agua de inundaciones, aguas estancadas, o tiene contacto con animales. La combinacion de fiebre, ictericia e insuficiencia renal es una emergencia medica. Si trabajo en una inundacion y desarrolla fiebre dentro de las siguientes 4 semanas, mencione la exposicion al medico.",
    "cuandoConsultarEn": "Consult urgently if you have high fever with intense muscle pain, jaundice, or red eyes without discharge, especially if you had contact with floodwaters, standing water, or animal contact. The combination of fever, jaundice, and renal failure is a medical emergency. If you worked in a flood and develop fever within the next 4 weeks, mention the exposure to your doctor."
  },
  {
    "id": "fiebre-tifoidea",
    "nombreEs": "Fiebre Tifoidea",
    "nombreEn": "Typhoid Fever",
    "descripcionEs": "La fiebre tifoidea es una enfermedad bacteriana sistemica causada por Salmonella enterica serotipo Typhi, transmitida por via fecal-oral a traves de agua y alimentos contaminados. Es una enfermedad potencialmente mortal que afecta aproximadamente a 11-21 millones de personas al ano, con 128,000-161,000 muertes anuales. Se caracteriza por fiebre prolongada escalonada, dolor abdominal y bacteriemia sostenida. La fiebre paratifoidea, causada por S. Paratyphi A, B y C, produce un cuadro clinico similar pero generalmente menos severo. La aparicion de cepas extensamente resistentes a medicamentos (XDR) es una preocupacion creciente, especialmente en Asia del Sur.",
    "descripcionEn": "Typhoid fever is a systemic bacterial disease caused by Salmonella enterica serotype Typhi, transmitted through the fecal-oral route via contaminated water and food. It is a potentially fatal disease affecting approximately 11-21 million people per year, with 128,000-161,000 annual deaths. It is characterized by prolonged stepwise fever, abdominal pain, and sustained bacteremia. Paratyphoid fever, caused by S. Paratyphi A, B, and C, produces a similar but generally less severe clinical picture. The emergence of extensively drug-resistant (XDR) strains is a growing concern, especially in South Asia.",
    "categoriaEs": "Bacteriana",
    "categoriaEn": "Bacterial",
    "sintomasEs": [
      "Fiebre progresiva escalonada que aumenta dia a dia hasta alcanzar 39-40°C en la segunda semana",
      "Dolor de cabeza intenso y persistente",
      "Dolor abdominal difuso, especialmente en fosa iliaca derecha",
      "Estrenimiento en adultos (mas comun que diarrea en las primeras etapas)",
      "Diarrea en ninos (tipo sopa de guisantes en etapas posteriores)",
      "Roseolas tifoideas: maculas rosadas palidas de 2-4 mm en torax y abdomen",
      "Bradicardia relativa (frecuencia cardiaca baja para el grado de fiebre)",
      "Hepatoesplenomegalia",
      "Lengua saburral con bordes rojos",
      "Estado tifoideo: delirio, estupor y confusion en casos graves no tratados"
    ],
    "sintomasEn": [
      "Progressive stepwise fever increasing daily until reaching 39-40°C by the second week",
      "Intense and persistent headache",
      "Diffuse abdominal pain, especially in the right iliac fossa",
      "Constipation in adults (more common than diarrhea in early stages)",
      "Diarrhea in children (pea soup type in later stages)",
      "Rose spots: pale pink 2-4 mm macules on chest and abdomen",
      "Relative bradycardia (low heart rate for the degree of fever)",
      "Hepatosplenomegaly",
      "Coated tongue with red edges",
      "Typhoid state: delirium, stupor, and confusion in severe untreated cases"
    ],
    "transmisionEs": "Se transmite exclusivamente por via fecal-oral, a traves de la ingestion de agua o alimentos contaminados con heces u orina de personas infectadas o portadores cronicos. Las fuentes principales incluyen: agua no tratada o contaminada con aguas residuales, alimentos preparados por portadores asintomaticos con mala higiene de manos, mariscos crudos de aguas contaminadas, leche y productos lacteos no pasteurizados, frutas y verduras regadas con aguas residuales. Los portadores cronicos (1-5% de pacientes) albergan la bacteria en la vesicula biliar y excretan Salmonella Typhi en heces durante meses o anos sin presentar sintomas (la portadora mas famosa fue Maria Tifoidea).",
    "transmisionEn": "Transmitted exclusively through the fecal-oral route, via ingestion of water or food contaminated with feces or urine from infected persons or chronic carriers. Main sources include: untreated water or water contaminated with sewage, food prepared by asymptomatic carriers with poor hand hygiene, raw shellfish from contaminated waters, unpasteurized milk and dairy products, fruits and vegetables irrigated with sewage. Chronic carriers (1-5% of patients) harbor the bacteria in the gallbladder and excrete Salmonella Typhi in feces for months or years without symptoms (the most famous carrier was Typhoid Mary).",
    "diagnosticoEs": "Hemocultivo: prueba diagnostica mas importante, positivo en 60-80% de casos en la primera semana (antes de antibioticos). Mielocultivo: mayor sensibilidad (80-95%) y permanece positivo aun con uso previo de antibioticos. Coprocultivo: positivo a partir de la segunda-tercera semana. Prueba de Widal: detecta anticuerpos contra antigeno O y H; tiene limitaciones de sensibilidad y especificidad, pero sigue siendo util en entornos con recursos limitados. Pruebas rapidas de diagnostico (Typhidot, Tubex). Hemograma: leucopenia con aneosinofilia (ausencia de eosinofilos) es sugestiva. Pruebas de susceptibilidad antimicrobiana son esenciales dada la resistencia creciente. PCR es cada vez mas disponible en centros de referencia.",
    "diagnosticoEn": "Blood culture: most important diagnostic test, positive in 60-80% of cases in the first week (before antibiotics). Bone marrow culture: higher sensitivity (80-95%) and remains positive even with prior antibiotic use. Stool culture: positive from the second-third week. Widal test: detects antibodies against O and H antigens; has sensitivity and specificity limitations but remains useful in resource-limited settings. Rapid diagnostic tests (Typhidot, Tubex). CBC: leukopenia with aneosinophilia (absence of eosinophils) is suggestive. Antimicrobial susceptibility testing is essential given increasing resistance. PCR is increasingly available in reference centers.",
    "tratamientoEs": "El tratamiento antibiotico ha reducido la mortalidad del 20% a menos del 1%. Para cepas susceptibles: ciprofloxacino 500 mg oral cada 12 horas por 7-14 dias (primera linea historica), azitromicina 1 g el primer dia seguido de 500 mg diarios por 6 dias, o ceftriaxona 2 g IV diario por 10-14 dias para casos severos u hospitalizados. Para cepas XDR (resistentes a ciprofloxacino, ampicilina, cloranfenicol y trimetoprim-sulfametoxazol): carbapenemes (meropenem) IV o azitromicina oral si hay sensibilidad. Dexametasona 3 mg/kg IV seguida de 1 mg/kg cada 6 horas reduce la mortalidad en casos graves con shock o alteracion del estado de conciencia. Para portadores cronicos: ciprofloxacino prolongado o colecistectomia en casos refractarios. Soporte: hidratacion, reposo, dieta blanda, y monitoreo de complicaciones.",
    "tratamientoEn": "Antibiotic treatment has reduced mortality from 20% to less than 1%. For susceptible strains: ciprofloxacin 500 mg oral every 12 hours for 7-14 days (historical first line), azithromycin 1 g on day one followed by 500 mg daily for 6 days, or ceftriaxone 2 g IV daily for 10-14 days for severe or hospitalized cases. For XDR strains (resistant to ciprofloxacin, ampicillin, chloramphenicol, and trimethoprim-sulfamethoxazole): carbapenems (meropenem) IV or oral azithromycin if susceptible. Dexamethasone 3 mg/kg IV followed by 1 mg/kg every 6 hours reduces mortality in severe cases with shock or altered consciousness. For chronic carriers: prolonged ciprofloxacin or cholecystectomy in refractory cases. Support: hydration, rest, bland diet, and complication monitoring.",
    "prevencionEs": "Vacunacion: vacuna conjugada de polisacarido Vi (TCV) recomendada por la OMS para ninos desde los 6 meses en paises endemicos (proteccion duradera), vacuna oral Ty21a (cepa viva atenuada, 3-4 dosis en dias alternos, proteccion por 5 anos), vacuna inyectable Vi polisacarida (proteccion por 2-3 anos). Medidas sanitarias: agua potable segura (hervir, clorar o filtrar), lavado de manos con jabon antes de comer y despues de usar el bano, coccion adecuada de alimentos, evitar alimentos crudos o de vendedores ambulantes en zonas endemicas, saneamiento y tratamiento adecuado de aguas residuales, deteccion y tratamiento de portadores cronicos.",
    "prevencionEn": "Vaccination: Vi conjugate polysaccharide vaccine (TCV) recommended by WHO for children from 6 months in endemic countries (long-lasting protection), oral Ty21a vaccine (live attenuated strain, 3-4 doses on alternate days, protection for 5 years), injectable Vi polysaccharide vaccine (protection for 2-3 years). Sanitary measures: safe drinking water (boil, chlorinate, or filter), handwashing with soap before eating and after using the bathroom, adequate food cooking, avoid raw foods or street vendors in endemic areas, sanitation and adequate sewage treatment, detection and treatment of chronic carriers.",
    "regionesEndemicasEs": "Asia del Sur (India, Pakistan, Bangladesh y Nepal tienen la mayor carga), Sureste Asiatico (Indonesia, Vietnam, Myanmar), Africa subsahariana (Nigeria, Kenia, Congo), America Latina y el Caribe (Haiti, Peru, Mexico). Pakistan ha reportado brotes de cepas XDR. Las areas con acceso limitado a agua potable y saneamiento tienen la mayor incidencia. Viajeros a estas regiones tienen riesgo significativo.",
    "regionesEndemicasEn": "South Asia (India, Pakistan, Bangladesh, and Nepal have the highest burden), Southeast Asia (Indonesia, Vietnam, Myanmar), sub-Saharan Africa (Nigeria, Kenya, Congo), Latin America and Caribbean (Haiti, Peru, Mexico). Pakistan has reported XDR strain outbreaks. Areas with limited access to safe water and sanitation have the highest incidence. Travelers to these regions have significant risk.",
    "cuandoConsultarEs": "Consulte si presenta fiebre que aumenta progresivamente durante mas de 3-5 dias, especialmente con dolor abdominal, dolor de cabeza y estrenimiento, y si ha viajado recientemente a zonas endemicas o consumido alimentos o agua potencialmente contaminados. Busque atencion urgente si la fiebre es muy alta, hay confusion mental, dolor abdominal agudo (posible perforacion intestinal), o sangrado digestivo. Los viajeros a zonas de alto riesgo deben consultar sobre vacunacion antes del viaje.",
    "cuandoConsultarEn": "Consult if you have progressively increasing fever for more than 3-5 days, especially with abdominal pain, headache, and constipation, and if you have recently traveled to endemic areas or consumed potentially contaminated food or water. Seek urgent care if fever is very high, there is mental confusion, acute abdominal pain (possible intestinal perforation), or gastrointestinal bleeding. Travelers to high-risk areas should consult about vaccination before travel."
  }
]`);

// ── Helper functions ────────────────────────────────────────────────

export function buscarMedicinaTropical(termino: string): MedicinaTropicalEntry[] {
  const t = termino.toLowerCase();
  return MEDICINA_TROPICAL_ENTRIES.filter(
    (e) =>
      e.nombreEs.toLowerCase().includes(t) ||
      e.nombreEn.toLowerCase().includes(t) ||
      e.descripcionEs.toLowerCase().includes(t) ||
      e.descripcionEn.toLowerCase().includes(t)
  );
}

export function getMedicinaTropicalById(id: string): MedicinaTropicalEntry | undefined {
  return MEDICINA_TROPICAL_ENTRIES.find((e) => e.id === id);
}

export function getMedicinaTropicalPorCategoria(categoria: string): MedicinaTropicalEntry[] {
  const c = categoria.toLowerCase();
  return MEDICINA_TROPICAL_ENTRIES.filter(
    (e) =>
      e.categoriaEs.toLowerCase().includes(c) ||
      e.categoriaEn.toLowerCase().includes(c)
  );
}
