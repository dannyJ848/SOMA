/**
 * SOMA - Enciclopedia de Anatomia para Pacientes
 * Spanish-first bilingual anatomy encyclopedia
 * 50+ organs and body structures across all 12 body systems
 *
 * Uses JSON.parse() for data arrays to avoid TS2590 TypeScript error.
 */

// ---------------------------------------------------------------------------
// Interface
// ---------------------------------------------------------------------------

export interface AnatomiaEntry {
  id: string;
  nombreEs: string;
  nombreEn: string;
  sistemaEs: string;
  sistemaEn: string;
  descripcionEs: string;
  descripcionEn: string;
  funcionEs: string;
  funcionEn: string;
  ubicacionEs: string;
  ubicacionEn: string;
  estructuraEs: string;
  estructuraEn: string;
  datosInteresantesEs: string[];
  datosInteresantesEn: string[];
  problemasComunes: string[];
  relacionadoCon: string[];
  tamanoAproximado?: string;
}

// ---------------------------------------------------------------------------
// Data — wrapped in JSON.parse() to prevent TS2590
// ---------------------------------------------------------------------------

export const anatomiaEnciclopedia: AnatomiaEntry[] = JSON.parse(`[
  {
    "id": "corazon",
    "nombreEs": "Corazon",
    "nombreEn": "Heart",
    "sistemaEs": "Cardiovascular",
    "sistemaEn": "Cardiovascular",
    "descripcionEs": "Organo muscular hueco que bombea sangre a todo el cuerpo mediante contracciones ritmicas continuas.",
    "descripcionEn": "Hollow muscular organ that pumps blood throughout the body via continuous rhythmic contractions.",
    "funcionEs": "Bombear sangre oxigenada al cuerpo y sangre desoxigenada a los pulmones para su reoxigenacion.",
    "funcionEn": "Pump oxygenated blood to the body and deoxygenated blood to the lungs for reoxygenation.",
    "ubicacionEs": "Centro del pecho, ligeramente inclinado hacia la izquierda, entre los pulmones.",
    "ubicacionEn": "Center of the chest, slightly tilted to the left, between the lungs.",
    "estructuraEs": "Cuatro camaras: dos auriculas superiores y dos ventriculos inferiores, separadas por valvulas y el tabique.",
    "estructuraEn": "Four chambers: two upper atria and two lower ventricles, separated by valves and the septum.",
    "datosInteresantesEs": ["Late unas 100,000 veces al dia", "Bombea aproximadamente 7,500 litros de sangre diariamente", "El corazon de una mujer late mas rapido que el de un hombre en promedio"],
    "datosInteresantesEn": ["Beats about 100,000 times per day", "Pumps approximately 2,000 gallons of blood daily", "A woman's heart beats faster than a man's on average"],
    "problemasComunes": ["Infarto de miocardio", "Insuficiencia cardiaca", "Arritmias", "Valvulopatias"],
    "relacionadoCon": ["arterias", "venas", "pulmones", "sangre"],
    "tamanoAproximado": "Tamano de un puno cerrado; 250-350 g"
  },
  {
    "id": "arterias",
    "nombreEs": "Arterias",
    "nombreEn": "Arteries",
    "sistemaEs": "Cardiovascular",
    "sistemaEn": "Cardiovascular",
    "descripcionEs": "Vasos sanguineos de paredes gruesas y elasticas que transportan sangre desde el corazon hacia los tejidos del cuerpo.",
    "descripcionEn": "Thick-walled elastic blood vessels that carry blood from the heart to the body's tissues.",
    "funcionEs": "Transportar sangre rica en oxigeno y nutrientes desde el corazon a todos los organos y tejidos.",
    "funcionEn": "Transport oxygen- and nutrient-rich blood from the heart to all organs and tissues.",
    "ubicacionEs": "Se ramifican por todo el cuerpo partiendo desde la aorta, la arteria mas grande.",
    "ubicacionEn": "Branch throughout the body starting from the aorta, the largest artery.",
    "estructuraEs": "Tres capas: intima (interna), media (muscular) y adventicia (externa). Paredes gruesas y elasticas.",
    "estructuraEn": "Three layers: intima (inner), media (muscular), and adventitia (outer). Thick, elastic walls.",
    "datosInteresantesEs": ["La aorta tiene aproximadamente 2.5 cm de diametro", "Si se conectaran todas las arterias medirian mas de 100,000 km", "Las arterias pulmonares son las unicas que llevan sangre desoxigenada"],
    "datosInteresantesEn": ["The aorta is approximately 1 inch in diameter", "If connected, all arteries would stretch over 60,000 miles", "Pulmonary arteries are the only ones carrying deoxygenated blood"],
    "problemasComunes": ["Aterosclerosis", "Aneurisma", "Hipertension arterial", "Enfermedad arterial periferica"],
    "relacionadoCon": ["corazon", "capilares", "sangre", "venas"]
  },
  {
    "id": "venas",
    "nombreEs": "Venas",
    "nombreEn": "Veins",
    "sistemaEs": "Cardiovascular",
    "sistemaEn": "Cardiovascular",
    "descripcionEs": "Vasos sanguineos de paredes mas delgadas que devuelven la sangre desde los tejidos hacia el corazon.",
    "descripcionEn": "Thinner-walled blood vessels that return blood from the tissues back to the heart.",
    "funcionEs": "Devolver la sangre desoxigenada al corazon para que sea enviada a los pulmones y reoxigenada.",
    "funcionEn": "Return deoxygenated blood to the heart so it can be sent to the lungs for reoxygenation.",
    "ubicacionEs": "Distribuidas por todo el cuerpo, generalmente mas superficiales que las arterias.",
    "ubicacionEn": "Distributed throughout the body, generally more superficial than arteries.",
    "estructuraEs": "Paredes mas delgadas que las arterias. Muchas poseen valvulas unidireccionales que impiden el retroceso de la sangre.",
    "estructuraEn": "Thinner walls than arteries. Many have one-way valves that prevent blood from flowing backward.",
    "datosInteresantesEs": ["Contienen aproximadamente el 70% del volumen total de sangre", "Las venas pulmonares llevan sangre oxigenada", "La vena cava es la vena mas grande del cuerpo"],
    "datosInteresantesEn": ["Contain approximately 70% of total blood volume", "Pulmonary veins carry oxygenated blood", "The vena cava is the largest vein in the body"],
    "problemasComunes": ["Varices", "Trombosis venosa profunda", "Insuficiencia venosa cronica", "Flebitis"],
    "relacionadoCon": ["corazon", "capilares", "sangre", "arterias"]
  },
  {
    "id": "capilares",
    "nombreEs": "Capilares",
    "nombreEn": "Capillaries",
    "sistemaEs": "Cardiovascular",
    "sistemaEn": "Cardiovascular",
    "descripcionEs": "Los vasos sanguineos mas pequenos y delgados del cuerpo, donde ocurre el intercambio de sustancias con los tejidos.",
    "descripcionEn": "The smallest and thinnest blood vessels in the body, where substance exchange with tissues occurs.",
    "funcionEs": "Permitir el intercambio de oxigeno, nutrientes, dioxido de carbono y desechos entre la sangre y las celulas.",
    "funcionEn": "Allow the exchange of oxygen, nutrients, carbon dioxide, and waste between blood and cells.",
    "ubicacionEs": "Forman redes microscopicas en todos los tejidos del cuerpo, conectando arteriolas con venulas.",
    "ubicacionEn": "Form microscopic networks in all body tissues, connecting arterioles to venules.",
    "estructuraEs": "Paredes de una sola capa de celulas endoteliales, lo que facilita la difusion de sustancias.",
    "estructuraEn": "Walls of a single layer of endothelial cells, facilitating substance diffusion.",
    "datosInteresantesEs": ["Son tan delgados que los globulos rojos pasan en fila de uno", "Si se alinearan todos los capilares del cuerpo recorrerian mas de 96,000 km", "Su diametro es de unos 5-10 micrometros"],
    "datosInteresantesEn": ["So thin that red blood cells pass through in single file", "If lined up, all capillaries would stretch over 60,000 miles", "Their diameter is about 5-10 micrometers"],
    "problemasComunes": ["Fragilidad capilar", "Microangiopatia diabetica", "Telangiectasias"],
    "relacionadoCon": ["arterias", "venas", "sangre", "globulos-rojos"],
    "tamanoAproximado": "5-10 micrometros de diametro"
  },
  {
    "id": "sangre",
    "nombreEs": "Sangre",
    "nombreEn": "Blood",
    "sistemaEs": "Cardiovascular",
    "sistemaEn": "Cardiovascular",
    "descripcionEs": "Tejido conectivo liquido que circula por el sistema cardiovascular transportando sustancias vitales.",
    "descripcionEn": "Liquid connective tissue that circulates through the cardiovascular system transporting vital substances.",
    "funcionEs": "Transportar oxigeno, nutrientes, hormonas y desechos; defender contra infecciones; regular la temperatura corporal.",
    "funcionEn": "Transport oxygen, nutrients, hormones, and waste; defend against infections; regulate body temperature.",
    "ubicacionEs": "Circula dentro de los vasos sanguineos y el corazon por todo el cuerpo.",
    "ubicacionEn": "Circulates inside blood vessels and the heart throughout the body.",
    "estructuraEs": "Compuesta por plasma (55%), globulos rojos, globulos blancos y plaquetas.",
    "estructuraEn": "Composed of plasma (55%), red blood cells, white blood cells, and platelets.",
    "datosInteresantesEs": ["Un adulto tiene entre 4.5 y 5.5 litros de sangre", "La sangre completa un circuito por el cuerpo en unos 60 segundos", "Existen 8 tipos sanguineos principales en el sistema ABO/Rh"],
    "datosInteresantesEn": ["An adult has between 4.5 and 5.5 liters of blood", "Blood completes a circuit through the body in about 60 seconds", "There are 8 main blood types in the ABO/Rh system"],
    "problemasComunes": ["Anemia", "Leucemia", "Trastornos de coagulacion", "Septicemia"],
    "relacionadoCon": ["corazon", "globulos-rojos", "globulos-blancos", "plaquetas", "medula-osea"],
    "tamanoAproximado": "4.5-5.5 litros en adultos"
  },
  {
    "id": "pulmones",
    "nombreEs": "Pulmones",
    "nombreEn": "Lungs",
    "sistemaEs": "Respiratorio",
    "sistemaEn": "Respiratory",
    "descripcionEs": "Par de organos esponjosos y elasticos encargados del intercambio gaseoso entre el aire y la sangre.",
    "descripcionEn": "Pair of spongy, elastic organs responsible for gas exchange between air and blood.",
    "funcionEs": "Incorporar oxigeno al organismo y eliminar dioxido de carbono mediante la respiracion.",
    "funcionEn": "Bring oxygen into the body and remove carbon dioxide through breathing.",
    "ubicacionEs": "Dentro de la caja toracica, a ambos lados del corazon, protegidos por las costillas.",
    "ubicacionEn": "Inside the thoracic cage, on both sides of the heart, protected by the ribs.",
    "estructuraEs": "El pulmon derecho tiene tres lobulos y el izquierdo dos. Contienen millones de alveolos donde ocurre el intercambio gaseoso.",
    "estructuraEn": "The right lung has three lobes and the left has two. They contain millions of alveoli where gas exchange occurs.",
    "datosInteresantesEs": ["Si se extendieran todos los alveolos cubriran una cancha de tenis", "Respiramos unas 20,000 veces al dia", "El pulmon izquierdo es ligeramente mas pequeno para dejar espacio al corazon"],
    "datosInteresantesEn": ["If all alveoli were spread out they would cover a tennis court", "We breathe about 20,000 times a day", "The left lung is slightly smaller to make room for the heart"],
    "problemasComunes": ["Asma", "EPOC", "Neumonia", "Cancer de pulmon", "Embolia pulmonar"],
    "relacionadoCon": ["bronquios", "traquea", "diafragma", "alveolos", "corazon"]
  },
  {
    "id": "bronquios",
    "nombreEs": "Bronquios",
    "nombreEn": "Bronchi",
    "sistemaEs": "Respiratorio",
    "sistemaEn": "Respiratory",
    "descripcionEs": "Conductos que se ramifican desde la traquea hacia cada pulmon, dividendose en ramas cada vez mas pequenas.",
    "descripcionEn": "Airways that branch from the trachea into each lung, dividing into progressively smaller branches.",
    "funcionEs": "Conducir el aire desde la traquea hasta los alveolos, filtrando y calentando el aire en el proceso.",
    "funcionEn": "Conduct air from the trachea to the alveoli, filtering and warming the air in the process.",
    "ubicacionEs": "Desde la bifurcacion de la traquea hacia el interior de cada pulmon.",
    "ubicacionEn": "From the tracheal bifurcation into the interior of each lung.",
    "estructuraEs": "Tubos reforzados con anillos de cartilago, revestidos de mucosa ciliada que atrapa particulas.",
    "estructuraEn": "Tubes reinforced with cartilage rings, lined with ciliated mucosa that traps particles.",
    "datosInteresantesEs": ["Se dividen hasta 23 veces antes de llegar a los alveolos", "El bronquio derecho es mas ancho y corto que el izquierdo", "Los cilios mueven el moco hacia arriba para expulsar particulas"],
    "datosInteresantesEn": ["They divide up to 23 times before reaching the alveoli", "The right bronchus is wider and shorter than the left", "Cilia move mucus upward to expel particles"],
    "problemasComunes": ["Bronquitis", "Bronquiectasias", "Broncoespasmo", "Cuerpos extranos"],
    "relacionadoCon": ["pulmones", "traquea", "alveolos"]
  },
  {
    "id": "traquea",
    "nombreEs": "Traquea",
    "nombreEn": "Trachea",
    "sistemaEs": "Respiratorio",
    "sistemaEn": "Respiratory",
    "descripcionEs": "Tubo semirigido que conecta la laringe con los bronquios, sirviendo como via principal de paso del aire.",
    "descripcionEn": "Semi-rigid tube connecting the larynx to the bronchi, serving as the main airway passage.",
    "funcionEs": "Permitir el paso del aire entre la laringe y los bronquios, manteniendose abierta gracias a sus anillos cartilaginosos.",
    "funcionEn": "Allow air passage between the larynx and bronchi, staying open thanks to its cartilage rings.",
    "ubicacionEs": "Delante del esofago, desde la laringe en el cuello hasta la bifurcacion bronquial en el pecho.",
    "ubicacionEn": "In front of the esophagus, from the larynx in the neck to the bronchial bifurcation in the chest.",
    "estructuraEs": "Tubo de 10-12 cm con 16-20 anillos de cartilago en forma de C y revestimiento mucoso ciliado.",
    "estructuraEn": "10-12 cm tube with 16-20 C-shaped cartilage rings and ciliated mucous lining.",
    "datosInteresantesEs": ["Los anillos en forma de C permiten que el esofago se expanda al tragar", "La epiglotis la protege durante la deglucion", "Mide entre 10 y 12 cm de largo"],
    "datosInteresantesEn": ["C-shaped rings allow the esophagus to expand when swallowing", "The epiglottis protects it during swallowing", "It measures between 10 and 12 cm long"],
    "problemasComunes": ["Traqueitis", "Estenosis traqueal", "Traqueomalacia"],
    "relacionadoCon": ["bronquios", "pulmones", "esofago"],
    "tamanoAproximado": "10-12 cm de largo, 2-2.5 cm de diametro"
  },
  {
    "id": "diafragma",
    "nombreEs": "Diafragma",
    "nombreEn": "Diaphragm",
    "sistemaEs": "Respiratorio",
    "sistemaEn": "Respiratory",
    "descripcionEs": "Musculo grande en forma de cupula que separa la cavidad toracica de la abdominal y es el principal motor de la respiracion.",
    "descripcionEn": "Large dome-shaped muscle separating the thoracic and abdominal cavities, the primary driver of breathing.",
    "funcionEs": "Contraerse y aplanarse para crear presion negativa que permite la entrada de aire a los pulmones durante la inspiracion.",
    "funcionEn": "Contract and flatten to create negative pressure that allows air into the lungs during inspiration.",
    "ubicacionEs": "Base de la caja toracica, separando el torax del abdomen.",
    "ubicacionEn": "Base of the rib cage, separating the thorax from the abdomen.",
    "estructuraEs": "Musculo estriado en forma de cupula con un tendon central. Inervado por el nervio frenico.",
    "estructuraEn": "Dome-shaped striated muscle with a central tendon. Innervated by the phrenic nerve.",
    "datosInteresantesEs": ["Es responsable del 70-80% de la inspiracion en reposo", "El hipo es una contraccion involuntaria del diafragma", "Funciona de forma automatica pero tambien puede controlarse voluntariamente"],
    "datosInteresantesEn": ["Responsible for 70-80% of resting inspiration", "Hiccups are involuntary diaphragm contractions", "It works automatically but can also be controlled voluntarily"],
    "problemasComunes": ["Hernia de hiato", "Paralisis diafragmatica", "Hipo persistente", "Espasmo diafragmatico"],
    "relacionadoCon": ["pulmones", "musculos", "esofago"]
  },
  {
    "id": "alveolos",
    "nombreEs": "Alveolos pulmonares",
    "nombreEn": "Pulmonary Alveoli",
    "sistemaEs": "Respiratorio",
    "sistemaEn": "Respiratory",
    "descripcionEs": "Sacos microscopicos de aire en los pulmones donde se produce el intercambio de oxigeno y dioxido de carbono con la sangre.",
    "descripcionEn": "Microscopic air sacs in the lungs where oxygen and carbon dioxide exchange with blood occurs.",
    "funcionEs": "Realizar el intercambio gaseoso: transferir oxigeno a la sangre y recoger dioxido de carbono para su exhalacion.",
    "funcionEn": "Perform gas exchange: transfer oxygen to the blood and collect carbon dioxide for exhalation.",
    "ubicacionEs": "En los extremos de los bronquiolos mas pequenos, dentro de los pulmones.",
    "ubicacionEn": "At the ends of the smallest bronchioles, inside the lungs.",
    "estructuraEs": "Sacos diminutos con paredes de una sola capa celular, rodeados de capilares sanguineos.",
    "estructuraEn": "Tiny sacs with single-cell-layer walls, surrounded by blood capillaries.",
    "datosInteresantesEs": ["Hay aproximadamente 480 millones de alveolos en ambos pulmones", "Su superficie combinada es de unos 70 metros cuadrados", "Producen surfactante para evitar que se colapsen"],
    "datosInteresantesEn": ["There are approximately 480 million alveoli in both lungs", "Their combined surface area is about 70 square meters", "They produce surfactant to prevent collapse"],
    "problemasComunes": ["Enfisema", "Sindrome de dificultad respiratoria", "Edema pulmonar", "Atelectasia"],
    "relacionadoCon": ["pulmones", "bronquios", "capilares"],
    "tamanoAproximado": "0.2-0.3 mm de diametro cada uno"
  },
  {
    "id": "estomago",
    "nombreEs": "Estomago",
    "nombreEn": "Stomach",
    "sistemaEs": "Digestivo",
    "sistemaEn": "Digestive",
    "descripcionEs": "Organo muscular en forma de saco que recibe los alimentos del esofago y los descompone mecanica y quimicamente.",
    "descripcionEn": "Sac-shaped muscular organ that receives food from the esophagus and breaks it down mechanically and chemically.",
    "funcionEs": "Almacenar alimentos temporalmente, mezclarlos con acido y enzimas para iniciar la digestion de proteinas, y enviarlo al intestino.",
    "funcionEn": "Temporarily store food, mix it with acid and enzymes to begin protein digestion, and send it to the intestine.",
    "ubicacionEs": "Parte superior izquierda del abdomen, debajo del diafragma.",
    "ubicacionEn": "Upper left part of the abdomen, below the diaphragm.",
    "estructuraEs": "Organo hueco con cuatro regiones: cardias, fundus, cuerpo y piloro. Revestido de mucosa protectora.",
    "estructuraEn": "Hollow organ with four regions: cardia, fundus, body, and pylorus. Lined with protective mucosa.",
    "datosInteresantesEs": ["Puede expandirse para contener hasta 1.5 litros de alimento", "Produce acido clorhidrico tan fuerte que podria disolver metal", "Su revestimiento se renueva cada 3-4 dias"],
    "datosInteresantesEn": ["Can expand to hold up to 1.5 liters of food", "Produces hydrochloric acid strong enough to dissolve metal", "Its lining is renewed every 3-4 days"],
    "problemasComunes": ["Gastritis", "Ulcera peptica", "Reflujo gastroesofagico", "Cancer gastrico"],
    "relacionadoCon": ["esofago", "intestino-delgado", "pancreas", "higado"],
    "tamanoAproximado": "25 cm de largo; capacidad de 1-1.5 L"
  },
  {
    "id": "intestino-delgado",
    "nombreEs": "Intestino delgado",
    "nombreEn": "Small Intestine",
    "sistemaEs": "Digestivo",
    "sistemaEn": "Digestive",
    "descripcionEs": "Tubo largo y enrollado donde ocurre la mayor parte de la digestion quimica y la absorcion de nutrientes.",
    "descripcionEn": "Long coiled tube where most chemical digestion and nutrient absorption occur.",
    "funcionEs": "Completar la digestion de los alimentos y absorber nutrientes, vitaminas y minerales hacia la sangre.",
    "funcionEn": "Complete food digestion and absorb nutrients, vitamins, and minerals into the blood.",
    "ubicacionEs": "Ocupa la parte central del abdomen, entre el estomago y el intestino grueso.",
    "ubicacionEn": "Occupies the central part of the abdomen, between the stomach and the large intestine.",
    "estructuraEs": "Tres secciones: duodeno, yeyuno e ileon. Revestido de vellosidades que aumentan la superficie de absorcion.",
    "estructuraEn": "Three sections: duodenum, jejunum, and ileum. Lined with villi that increase absorption surface area.",
    "datosInteresantesEs": ["Mide entre 6 y 7 metros de largo", "Su superficie interna con vellosidades equivale a una cancha de tenis", "Absorbe el 90% de los nutrientes de los alimentos"],
    "datosInteresantesEn": ["Measures between 6 and 7 meters long", "Its inner surface with villi equals a tennis court", "Absorbs 90% of nutrients from food"],
    "problemasComunes": ["Enfermedad celiaca", "Enfermedad de Crohn", "Obstruccion intestinal", "Sindrome de intestino irritable"],
    "relacionadoCon": ["estomago", "intestino-grueso", "pancreas", "higado", "vesicula-biliar"],
    "tamanoAproximado": "6-7 metros de largo, 2.5 cm de diametro"
  },
  {
    "id": "intestino-grueso",
    "nombreEs": "Intestino grueso",
    "nombreEn": "Large Intestine",
    "sistemaEs": "Digestivo",
    "sistemaEn": "Digestive",
    "descripcionEs": "Ultima porcion del tracto digestivo, encargada de absorber agua y electrolitos y formar las heces.",
    "descripcionEn": "Last portion of the digestive tract, responsible for absorbing water and electrolytes and forming feces.",
    "funcionEs": "Absorber agua y electrolitos del material no digerido, albergar bacterias beneficas y compactar los desechos en heces.",
    "funcionEn": "Absorb water and electrolytes from undigested material, host beneficial bacteria, and compact waste into feces.",
    "ubicacionEs": "Rodea al intestino delgado formando un marco en la cavidad abdominal.",
    "ubicacionEn": "Surrounds the small intestine forming a frame in the abdominal cavity.",
    "estructuraEs": "Incluye ciego, apendice, colon ascendente, transverso, descendente, sigmoide y recto. Aproximadamente 1.5 m.",
    "estructuraEn": "Includes cecum, appendix, ascending, transverse, descending, sigmoid colon, and rectum. Approximately 1.5 m.",
    "datosInteresantesEs": ["Alberga trillones de bacterias beneficas (microbiota)", "Puede absorber hasta 1.5 litros de agua al dia", "Los alimentos tardan entre 12 y 36 horas en recorrerlo"],
    "datosInteresantesEn": ["Hosts trillions of beneficial bacteria (microbiota)", "Can absorb up to 1.5 liters of water per day", "Food takes between 12 and 36 hours to pass through it"],
    "problemasComunes": ["Colitis ulcerosa", "Cancer colorrectal", "Polipos", "Diverticulitis", "Sindrome de intestino irritable"],
    "relacionadoCon": ["intestino-delgado", "estomago"],
    "tamanoAproximado": "1.5 metros de largo, 6-7 cm de diametro"
  },
  {
    "id": "higado",
    "nombreEs": "Higado",
    "nombreEn": "Liver",
    "sistemaEs": "Digestivo",
    "sistemaEn": "Digestive",
    "descripcionEs": "El organo interno mas grande del cuerpo. Realiza cientos de funciones metabolicas esenciales para la vida.",
    "descripcionEn": "The largest internal organ in the body. Performs hundreds of metabolic functions essential for life.",
    "funcionEs": "Filtrar la sangre, producir bilis, metabolizar nutrientes y medicamentos, almacenar glucogeno y desintoxicar sustancias nocivas.",
    "funcionEn": "Filter blood, produce bile, metabolize nutrients and medications, store glycogen, and detoxify harmful substances.",
    "ubicacionEs": "Cuadrante superior derecho del abdomen, debajo del diafragma y protegido por las costillas.",
    "ubicacionEn": "Upper right quadrant of the abdomen, below the diaphragm and protected by the ribs.",
    "estructuraEs": "Dividido en dos lobulos principales (derecho e izquierdo). Recibe sangre de la arteria hepatica y la vena porta.",
    "estructuraEn": "Divided into two main lobes (right and left). Receives blood from the hepatic artery and portal vein.",
    "datosInteresantesEs": ["Es el unico organo que puede regenerarse a partir de solo el 25% de su tejido", "Realiza mas de 500 funciones distintas", "Pesa aproximadamente 1.5 kg"],
    "datosInteresantesEn": ["It is the only organ that can regenerate from just 25% of its tissue", "Performs more than 500 distinct functions", "Weighs approximately 1.5 kg"],
    "problemasComunes": ["Hepatitis", "Cirrosis", "Higado graso", "Cancer hepatico", "Insuficiencia hepatica"],
    "relacionadoCon": ["vesicula-biliar", "pancreas", "intestino-delgado", "sangre"],
    "tamanoAproximado": "Aproximadamente 1.5 kg; mayor organo solido"
  },
  {
    "id": "pancreas",
    "nombreEs": "Pancreas",
    "nombreEn": "Pancreas",
    "sistemaEs": "Digestivo",
    "sistemaEn": "Digestive",
    "descripcionEs": "Glandula mixta con funciones tanto digestivas (exocrina) como hormonales (endocrina).",
    "descripcionEn": "Mixed gland with both digestive (exocrine) and hormonal (endocrine) functions.",
    "funcionEs": "Producir enzimas digestivas para descomponer alimentos y secretar insulina y glucagon para regular la glucosa en sangre.",
    "funcionEn": "Produce digestive enzymes to break down food and secrete insulin and glucagon to regulate blood glucose.",
    "ubicacionEs": "Detras del estomago, en la parte superior del abdomen, cruzando de derecha a izquierda.",
    "ubicacionEn": "Behind the stomach, in the upper abdomen, crossing from right to left.",
    "estructuraEs": "Glandula alargada con cabeza, cuerpo y cola. Los islotes de Langerhans producen hormonas; los acinos producen enzimas.",
    "estructuraEn": "Elongated gland with head, body, and tail. Islets of Langerhans produce hormones; acini produce enzymes.",
    "datosInteresantesEs": ["Produce aproximadamente 1.5 litros de jugo pancreatico al dia", "Contiene alrededor de un millon de islotes de Langerhans", "Funciona tanto como glandula exocrina como endocrina"],
    "datosInteresantesEn": ["Produces approximately 1.5 liters of pancreatic juice per day", "Contains about one million islets of Langerhans", "Functions as both exocrine and endocrine gland"],
    "problemasComunes": ["Diabetes mellitus", "Pancreatitis", "Cancer de pancreas", "Insuficiencia pancreatica"],
    "relacionadoCon": ["estomago", "intestino-delgado", "higado", "pancreas-endocrino"],
    "tamanoAproximado": "15-20 cm de largo; 70-100 g"
  },
  {
    "id": "vesicula-biliar",
    "nombreEs": "Vesicula biliar",
    "nombreEn": "Gallbladder",
    "sistemaEs": "Digestivo",
    "sistemaEn": "Digestive",
    "descripcionEs": "Pequeno organo en forma de pera que almacena y concentra la bilis producida por el higado.",
    "descripcionEn": "Small pear-shaped organ that stores and concentrates bile produced by the liver.",
    "funcionEs": "Almacenar bilis y liberarla al intestino delgado cuando se ingieren grasas para ayudar en su digestion.",
    "funcionEn": "Store bile and release it into the small intestine when fats are ingested to aid in their digestion.",
    "ubicacionEs": "Debajo del lobulo derecho del higado, en el cuadrante superior derecho del abdomen.",
    "ubicacionEn": "Below the right lobe of the liver, in the upper right quadrant of the abdomen.",
    "estructuraEs": "Saco muscular en forma de pera con capacidad de 30-50 ml. Conectada al intestino por el conducto biliar comun.",
    "estructuraEn": "Pear-shaped muscular sac with 30-50 ml capacity. Connected to the intestine by the common bile duct.",
    "datosInteresantesEs": ["Puede almacenar entre 30 y 50 ml de bilis concentrada", "No es un organo esencial y se puede vivir sin ella", "Los calculos biliares afectan al 10-15% de los adultos"],
    "datosInteresantesEn": ["Can store between 30 and 50 ml of concentrated bile", "It is not an essential organ and one can live without it", "Gallstones affect 10-15% of adults"],
    "problemasComunes": ["Calculos biliares (colelitiasis)", "Colecistitis", "Polipos vesiculares"],
    "relacionadoCon": ["higado", "intestino-delgado", "pancreas"],
    "tamanoAproximado": "7-10 cm de largo; 30-50 ml de capacidad"
  },
  {
    "id": "esofago",
    "nombreEs": "Esofago",
    "nombreEn": "Esophagus",
    "sistemaEs": "Digestivo",
    "sistemaEn": "Digestive",
    "descripcionEs": "Tubo muscular que conecta la garganta con el estomago, transportando alimentos mediante movimientos peristalticos.",
    "descripcionEn": "Muscular tube connecting the throat to the stomach, transporting food through peristaltic movements.",
    "funcionEs": "Transportar los alimentos y liquidos de la boca al estomago mediante contracciones musculares coordinadas (peristalsis).",
    "funcionEn": "Transport food and liquids from the mouth to the stomach through coordinated muscle contractions (peristalsis).",
    "ubicacionEs": "Desde la faringe en el cuello, a traves del torax, hasta el estomago, pasando por el diafragma.",
    "ubicacionEn": "From the pharynx in the neck, through the thorax, to the stomach, passing through the diaphragm.",
    "estructuraEs": "Tubo muscular de unos 25 cm con dos esfinteres: superior e inferior. Cuatro capas tisulares.",
    "estructuraEn": "Muscular tube of about 25 cm with two sphincters: upper and lower. Four tissue layers.",
    "datosInteresantesEs": ["Los alimentos tardan unos 8 segundos en llegar al estomago", "La peristalsis funciona incluso de cabeza", "Mide aproximadamente 25 cm en adultos"],
    "datosInteresantesEn": ["Food takes about 8 seconds to reach the stomach", "Peristalsis works even upside down", "It measures approximately 25 cm in adults"],
    "problemasComunes": ["Enfermedad por reflujo gastroesofagico (ERGE)", "Esofagitis", "Esofago de Barrett", "Cancer de esofago"],
    "relacionadoCon": ["estomago", "traquea", "diafragma"],
    "tamanoAproximado": "25 cm de largo; 2 cm de diametro"
  },
  {
    "id": "cerebro",
    "nombreEs": "Cerebro",
    "nombreEn": "Brain",
    "sistemaEs": "Nervioso",
    "sistemaEn": "Nervous",
    "descripcionEs": "Centro de control del cuerpo que procesa informacion, controla movimientos, genera pensamientos y emociones.",
    "descripcionEn": "Control center of the body that processes information, controls movements, generates thoughts and emotions.",
    "funcionEs": "Procesar informacion sensorial, controlar funciones corporales voluntarias e involuntarias, almacenar memorias y generar pensamiento.",
    "funcionEn": "Process sensory information, control voluntary and involuntary body functions, store memories, and generate thought.",
    "ubicacionEs": "Dentro del craneo, protegido por los huesos craneales y las meninges.",
    "ubicacionEn": "Inside the skull, protected by cranial bones and the meninges.",
    "estructuraEs": "Tres partes principales: cerebro (hemisferios), cerebelo y tronco encefalico. Contiene unos 86 mil millones de neuronas.",
    "estructuraEn": "Three main parts: cerebrum (hemispheres), cerebellum, and brainstem. Contains about 86 billion neurons.",
    "datosInteresantesEs": ["Consume el 20% de la energia total del cuerpo pese a representar solo el 2% del peso", "Contiene aproximadamente 86 mil millones de neuronas", "Genera suficiente electricidad para encender una bombilla pequena"],
    "datosInteresantesEn": ["Consumes 20% of total body energy despite being only 2% of body weight", "Contains approximately 86 billion neurons", "Generates enough electricity to power a small light bulb"],
    "problemasComunes": ["Accidente cerebrovascular", "Tumor cerebral", "Epilepsia", "Alzheimer", "Parkinson", "Migranas"],
    "relacionadoCon": ["medula-espinal", "nervios-perifericos", "cerebelo"],
    "tamanoAproximado": "Aproximadamente 1.3-1.4 kg"
  },
  {
    "id": "medula-espinal",
    "nombreEs": "Medula espinal",
    "nombreEn": "Spinal Cord",
    "sistemaEs": "Nervioso",
    "sistemaEn": "Nervous",
    "descripcionEs": "Cordon nervioso alargado que transmite senales entre el cerebro y el resto del cuerpo, y coordina reflejos.",
    "descripcionEn": "Elongated nerve cord that transmits signals between the brain and the rest of the body, and coordinates reflexes.",
    "funcionEs": "Transmitir impulsos nerviosos entre el cerebro y el cuerpo, y coordinar los arcos reflejos sin intervencion cerebral.",
    "funcionEn": "Transmit nerve impulses between the brain and the body, and coordinate reflex arcs without brain intervention.",
    "ubicacionEs": "Dentro del canal vertebral de la columna, desde el tronco encefalico hasta la primera o segunda vertebra lumbar.",
    "ubicacionEn": "Inside the vertebral canal of the spine, from the brainstem to the first or second lumbar vertebra.",
    "estructuraEs": "Cordon de tejido nervioso con sustancia gris central y sustancia blanca periferica, protegida por meninges y liquido cefalorraquideo.",
    "estructuraEn": "Cord of nerve tissue with central gray matter and peripheral white matter, protected by meninges and cerebrospinal fluid.",
    "datosInteresantesEs": ["Mide entre 43 y 45 cm de largo en adultos", "Los reflejos espinales ocurren sin que el cerebro participe", "Esta compuesta por 31 pares de nervios espinales"],
    "datosInteresantesEn": ["Measures between 43 and 45 cm long in adults", "Spinal reflexes occur without brain participation", "Composed of 31 pairs of spinal nerves"],
    "problemasComunes": ["Lesion medular", "Hernia discal", "Mielitis", "Estenosis espinal", "Esclerosis multiple"],
    "relacionadoCon": ["cerebro", "columna-vertebral", "nervios-perifericos"],
    "tamanoAproximado": "43-45 cm de largo; 1-1.5 cm de diametro"
  },
  {
    "id": "nervios-perifericos",
    "nombreEs": "Nervios perifericos",
    "nombreEn": "Peripheral Nerves",
    "sistemaEs": "Nervioso",
    "sistemaEn": "Nervous",
    "descripcionEs": "Red de nervios que se extiende desde el cerebro y la medula espinal hacia todas las partes del cuerpo.",
    "descripcionEn": "Network of nerves extending from the brain and spinal cord to all parts of the body.",
    "funcionEs": "Transmitir senales sensoriales al sistema nervioso central y llevar ordenes motoras a musculos y glandulas.",
    "funcionEn": "Transmit sensory signals to the central nervous system and carry motor commands to muscles and glands.",
    "ubicacionEs": "Se ramifican desde la medula espinal y el tronco encefalico hacia todo el cuerpo.",
    "ubicacionEn": "Branch from the spinal cord and brainstem to the entire body.",
    "estructuraEs": "Haces de axones envueltos en vainas de mielina, agrupados en fasciculos y recubiertos de tejido conectivo.",
    "estructuraEn": "Bundles of axons wrapped in myelin sheaths, grouped into fascicles and covered with connective tissue.",
    "datosInteresantesEs": ["Los impulsos nerviosos pueden viajar a 120 m/s", "El nervio ciatico es el mas largo y grueso del cuerpo", "Hay 12 pares de nervios craneales y 31 pares de nervios espinales"],
    "datosInteresantesEn": ["Nerve impulses can travel at 120 m/s", "The sciatic nerve is the longest and thickest in the body", "There are 12 pairs of cranial nerves and 31 pairs of spinal nerves"],
    "problemasComunes": ["Neuropatia periferica", "Sindrome del tunel carpiano", "Ciatica", "Neuralgia"],
    "relacionadoCon": ["cerebro", "medula-espinal", "musculos"]
  },
  {
    "id": "cerebelo",
    "nombreEs": "Cerebelo",
    "nombreEn": "Cerebellum",
    "sistemaEs": "Nervioso",
    "sistemaEn": "Nervous",
    "descripcionEs": "Estructura ubicada en la parte posterior e inferior del cerebro que coordina el movimiento, equilibrio y postura.",
    "descripcionEn": "Structure located at the posterior and inferior part of the brain that coordinates movement, balance, and posture.",
    "funcionEs": "Coordinar movimientos musculares finos, mantener el equilibrio, la postura y contribuir al aprendizaje motor.",
    "funcionEn": "Coordinate fine muscle movements, maintain balance and posture, and contribute to motor learning.",
    "ubicacionEs": "Parte posterior e inferior del craneo, debajo de los hemisferios cerebrales y detras del tronco encefalico.",
    "ubicacionEn": "Posterior and inferior part of the skull, below the cerebral hemispheres and behind the brainstem.",
    "estructuraEs": "Dos hemisferios cerebelosos y un vermis central. Corteza de sustancia gris plegada sobre sustancia blanca.",
    "estructuraEn": "Two cerebellar hemispheres and a central vermis. Gray matter cortex folded over white matter.",
    "datosInteresantesEs": ["Contiene mas de la mitad de todas las neuronas del cerebro", "Representa solo el 10% del volumen cerebral pero tiene el 50% de las neuronas", "Es esencial para aprender nuevas habilidades motoras"],
    "datosInteresantesEn": ["Contains more than half of all neurons in the brain", "Represents only 10% of brain volume but has 50% of neurons", "Essential for learning new motor skills"],
    "problemasComunes": ["Ataxia", "Vertigo cerebeloso", "Tumores cerebelosos", "Degeneracion cerebelosa"],
    "relacionadoCon": ["cerebro", "medula-espinal", "oidos"],
    "tamanoAproximado": "Aproximadamente 150 g"
  },
  {
    "id": "huesos",
    "nombreEs": "Huesos (Esqueleto)",
    "nombreEn": "Bones (Skeleton)",
    "sistemaEs": "Musculoesqueletico",
    "sistemaEn": "Musculoskeletal",
    "descripcionEs": "Tejido conectivo rigido que forma el armazon del cuerpo, protege organos internos y permite el movimiento.",
    "descripcionEn": "Rigid connective tissue forming the body's framework, protecting internal organs and enabling movement.",
    "funcionEs": "Dar soporte estructural, proteger organos vitales, permitir movimiento, almacenar minerales y producir celulas sanguineas.",
    "funcionEn": "Provide structural support, protect vital organs, enable movement, store minerals, and produce blood cells.",
    "ubicacionEs": "Forman el esqueleto en todo el cuerpo.",
    "ubicacionEn": "Form the skeleton throughout the body.",
    "estructuraEs": "Tejido oseo compacto y esponjoso. El adulto tiene 206 huesos clasificados en largos, cortos, planos e irregulares.",
    "estructuraEn": "Compact and spongy bone tissue. Adults have 206 bones classified as long, short, flat, and irregular.",
    "datosInteresantesEs": ["Los bebes nacen con unos 270 huesos que se fusionan hasta quedar 206", "El femur es el hueso mas largo y fuerte", "Los huesos se renuevan completamente cada 7-10 anos"],
    "datosInteresantesEn": ["Babies are born with about 270 bones that fuse into 206", "The femur is the longest and strongest bone", "Bones are completely renewed every 7-10 years"],
    "problemasComunes": ["Osteoporosis", "Fracturas", "Osteomielitis", "Cancer oseo", "Artritis"],
    "relacionadoCon": ["musculos", "articulaciones", "cartilago", "medula-osea", "tendones", "ligamentos"]
  },
  {
    "id": "musculos",
    "nombreEs": "Musculos",
    "nombreEn": "Muscles",
    "sistemaEs": "Musculoesqueletico",
    "sistemaEn": "Musculoskeletal",
    "descripcionEs": "Tejidos contractiles que producen movimiento, mantienen la postura y generan calor corporal.",
    "descripcionEn": "Contractile tissues that produce movement, maintain posture, and generate body heat.",
    "funcionEs": "Generar movimiento voluntario e involuntario, mantener la postura, estabilizar articulaciones y producir calor.",
    "funcionEn": "Generate voluntary and involuntary movement, maintain posture, stabilize joints, and produce heat.",
    "ubicacionEs": "En todo el cuerpo, unidos a los huesos por tendones o formando paredes de organos.",
    "ubicacionEn": "Throughout the body, attached to bones by tendons or forming organ walls.",
    "estructuraEs": "Tres tipos: esqueletico (voluntario, estriado), liso (involuntario, organos) y cardiaco (corazon). Mas de 600 musculos.",
    "estructuraEn": "Three types: skeletal (voluntary, striated), smooth (involuntary, organs), and cardiac (heart). Over 600 muscles.",
    "datosInteresantesEs": ["El cuerpo tiene mas de 600 musculos esqueleticos", "Los musculos representan entre el 35-40% del peso corporal", "El gluteo mayor es el musculo mas grande del cuerpo"],
    "datosInteresantesEn": ["The body has more than 600 skeletal muscles", "Muscles represent 35-40% of body weight", "The gluteus maximus is the largest muscle in the body"],
    "problemasComunes": ["Desgarros musculares", "Miopatias", "Distrofia muscular", "Calambres", "Fibromialgia"],
    "relacionadoCon": ["huesos", "tendones", "articulaciones", "nervios-perifericos"]
  },
  {
    "id": "articulaciones",
    "nombreEs": "Articulaciones",
    "nombreEn": "Joints",
    "sistemaEs": "Musculoesqueletico",
    "sistemaEn": "Musculoskeletal",
    "descripcionEs": "Puntos de union entre dos o mas huesos que permiten el movimiento y la flexibilidad del esqueleto.",
    "descripcionEn": "Junction points between two or more bones that allow movement and flexibility of the skeleton.",
    "funcionEs": "Permitir el movimiento entre huesos, absorber impactos y proporcionar estabilidad estructural.",
    "funcionEn": "Allow movement between bones, absorb impacts, and provide structural stability.",
    "ubicacionEs": "En todos los puntos de union entre huesos del esqueleto.",
    "ubicacionEn": "At all junction points between bones of the skeleton.",
    "estructuraEs": "Tipos: sinoviales (moviles, con liquido sinovial), cartilaginosas (semirigidas) y fibrosas (inmoviles).",
    "estructuraEn": "Types: synovial (movable, with synovial fluid), cartilaginous (semi-rigid), and fibrous (immovable).",
    "datosInteresantesEs": ["El cuerpo tiene entre 250 y 350 articulaciones", "La rodilla es la articulacion mas grande del cuerpo", "El liquido sinovial reduce la friccion como un lubricante"],
    "datosInteresantesEn": ["The body has between 250 and 350 joints", "The knee is the largest joint in the body", "Synovial fluid reduces friction like a lubricant"],
    "problemasComunes": ["Artritis reumatoide", "Osteoartritis", "Luxaciones", "Bursitis", "Gota"],
    "relacionadoCon": ["huesos", "cartilago", "ligamentos", "musculos", "tendones"]
  },
  {
    "id": "columna-vertebral",
    "nombreEs": "Columna vertebral",
    "nombreEn": "Spine / Vertebral Column",
    "sistemaEs": "Musculoesqueletico",
    "sistemaEn": "Musculoskeletal",
    "descripcionEs": "Estructura osea central del cuerpo compuesta por vertebras apiladas que protege la medula espinal y soporta el tronco.",
    "descripcionEn": "Central bony structure of the body composed of stacked vertebrae that protects the spinal cord and supports the trunk.",
    "funcionEs": "Sostener el cuerpo erguido, proteger la medula espinal, permitir la flexibilidad del tronco y absorber impactos.",
    "funcionEn": "Keep the body upright, protect the spinal cord, allow trunk flexibility, and absorb impacts.",
    "ubicacionEs": "Desde la base del craneo hasta el coxis, en la parte posterior del tronco.",
    "ubicacionEn": "From the base of the skull to the coccyx, along the back of the trunk.",
    "estructuraEs": "33 vertebras: 7 cervicales, 12 toracicas, 5 lumbares, 5 sacras (fusionadas) y 4 coccigeas (fusionadas). Discos intervertebrales entre ellas.",
    "estructuraEn": "33 vertebrae: 7 cervical, 12 thoracic, 5 lumbar, 5 sacral (fused), and 4 coccygeal (fused). Intervertebral discs between them.",
    "datosInteresantesEs": ["Las jirafas tienen el mismo numero de vertebras cervicales que los humanos: siete", "Los discos intervertebrales actuan como amortiguadores", "Somos mas altos por la manana porque los discos se expanden durante la noche"],
    "datosInteresantesEn": ["Giraffes have the same number of cervical vertebrae as humans: seven", "Intervertebral discs act as shock absorbers", "We are taller in the morning because discs expand overnight"],
    "problemasComunes": ["Hernia discal", "Escoliosis", "Estenosis espinal", "Dolor lumbar cronico", "Cifosis"],
    "relacionadoCon": ["medula-espinal", "huesos", "musculos", "cartilago"],
    "tamanoAproximado": "70 cm en adultos en promedio"
  },
  {
    "id": "cartilago",
    "nombreEs": "Cartilago",
    "nombreEn": "Cartilage",
    "sistemaEs": "Musculoesqueletico",
    "sistemaEn": "Musculoskeletal",
    "descripcionEs": "Tejido conectivo firme pero flexible que proporciona soporte y reduce la friccion entre los huesos en las articulaciones.",
    "descripcionEn": "Firm but flexible connective tissue that provides support and reduces friction between bones at joints.",
    "funcionEs": "Amortiguar impactos, reducir la friccion articular, dar forma flexible a estructuras como la nariz y las orejas.",
    "funcionEn": "Cushion impacts, reduce joint friction, give flexible shape to structures like the nose and ears.",
    "ubicacionEs": "En articulaciones, nariz, orejas, traquea, discos intervertebrales y costillas.",
    "ubicacionEn": "In joints, nose, ears, trachea, intervertebral discs, and ribs.",
    "estructuraEs": "Tres tipos: hialino (articulaciones, nariz), elastico (orejas) y fibrocartilago (discos, meniscos). Carece de vasos sanguineos.",
    "estructuraEn": "Three types: hyaline (joints, nose), elastic (ears), and fibrocartilage (discs, menisci). Lacks blood vessels.",
    "datosInteresantesEs": ["No tiene vasos sanguineos y se nutre por difusion", "La nariz y las orejas parecen crecer con la edad por el efecto de la gravedad sobre el cartilago", "Se repara muy lentamente debido a su falta de irrigacion"],
    "datosInteresantesEn": ["Has no blood vessels and is nourished by diffusion", "The nose and ears seem to grow with age due to gravity's effect on cartilage", "Repairs very slowly due to lack of blood supply"],
    "problemasComunes": ["Desgaste articular (condromalacia)", "Lesiones de menisco", "Costocondritis", "Artrosis"],
    "relacionadoCon": ["huesos", "articulaciones", "columna-vertebral", "nariz", "oidos"]
  },
  {
    "id": "tendones",
    "nombreEs": "Tendones",
    "nombreEn": "Tendons",
    "sistemaEs": "Musculoesqueletico",
    "sistemaEn": "Musculoskeletal",
    "descripcionEs": "Bandas fibrosas resistentes de tejido conectivo que unen los musculos a los huesos, transmitiendo la fuerza muscular.",
    "descripcionEn": "Tough fibrous bands of connective tissue that attach muscles to bones, transmitting muscular force.",
    "funcionEs": "Transmitir la fuerza generada por los musculos hacia los huesos para producir movimiento.",
    "funcionEn": "Transmit the force generated by muscles to bones to produce movement.",
    "ubicacionEs": "En las uniones entre musculos y huesos, especialmente en manos, pies, codos, rodillas y hombros.",
    "ubicacionEn": "At the junctions between muscles and bones, especially in hands, feet, elbows, knees, and shoulders.",
    "estructuraEs": "Fibras densas de colageno tipo I organizadas en haces paralelos, con poca vascularizacion.",
    "estructuraEn": "Dense type I collagen fibers organized in parallel bundles, with limited blood supply.",
    "datosInteresantesEs": ["El tendon de Aquiles es el mas grande y fuerte del cuerpo", "Los tendones pueden soportar fuerzas de hasta 12,400 N", "Se curan lentamente debido a su pobre irrigacion sanguinea"],
    "datosInteresantesEn": ["The Achilles tendon is the largest and strongest in the body", "Tendons can withstand forces up to 12,400 N", "They heal slowly due to poor blood supply"],
    "problemasComunes": ["Tendinitis", "Ruptura del tendon de Aquiles", "Tenosinovitis", "Epicondilitis (codo de tenista)"],
    "relacionadoCon": ["musculos", "huesos", "articulaciones", "ligamentos"]
  },
  {
    "id": "ligamentos",
    "nombreEs": "Ligamentos",
    "nombreEn": "Ligaments",
    "sistemaEs": "Musculoesqueletico",
    "sistemaEn": "Musculoskeletal",
    "descripcionEs": "Bandas fibrosas de tejido conectivo que unen huesos entre si y estabilizan las articulaciones.",
    "descripcionEn": "Fibrous bands of connective tissue that connect bones to each other and stabilize joints.",
    "funcionEs": "Estabilizar las articulaciones, limitar el rango de movimiento excesivo y prevenir la dislocacion de los huesos.",
    "funcionEn": "Stabilize joints, limit excessive range of motion, and prevent bone dislocation.",
    "ubicacionEs": "Alrededor de todas las articulaciones sinoviales del cuerpo.",
    "ubicacionEn": "Around all synovial joints in the body.",
    "estructuraEs": "Fibras densas de colageno con algo de elastina, organizadas en haces densos pero ligeramente entrecruzados.",
    "estructuraEn": "Dense collagen fibers with some elastin, organized in dense but slightly interwoven bundles.",
    "datosInteresantesEs": ["A diferencia de los tendones, conectan hueso con hueso", "Los ligamentos cruzados de la rodilla son los mas conocidos", "Contienen receptores que informan al cerebro sobre la posicion de la articulacion"],
    "datosInteresantesEn": ["Unlike tendons, they connect bone to bone", "The cruciate ligaments of the knee are the best known", "They contain receptors that inform the brain about joint position"],
    "problemasComunes": ["Esguinces", "Ruptura de ligamento cruzado anterior", "Laxitud articular", "Esguince de tobillo"],
    "relacionadoCon": ["huesos", "articulaciones", "tendones", "musculos"]
  },
  {
    "id": "tiroides",
    "nombreEs": "Tiroides",
    "nombreEn": "Thyroid Gland",
    "sistemaEs": "Endocrino",
    "sistemaEn": "Endocrine",
    "descripcionEs": "Glandula en forma de mariposa que produce hormonas que regulan el metabolismo, crecimiento y desarrollo.",
    "descripcionEn": "Butterfly-shaped gland that produces hormones regulating metabolism, growth, and development.",
    "funcionEs": "Producir hormonas tiroideas (T3 y T4) que regulan el metabolismo, la temperatura corporal, la frecuencia cardiaca y el crecimiento.",
    "funcionEn": "Produce thyroid hormones (T3 and T4) that regulate metabolism, body temperature, heart rate, and growth.",
    "ubicacionEs": "En la parte anterior del cuello, delante de la traquea, justo debajo de la manzana de Adan.",
    "ubicacionEn": "At the front of the neck, in front of the trachea, just below the Adam's apple.",
    "estructuraEs": "Dos lobulos laterales conectados por un istmo. Contiene foliculos tiroideos que producen y almacenan hormonas.",
    "estructuraEn": "Two lateral lobes connected by an isthmus. Contains thyroid follicles that produce and store hormones.",
    "datosInteresantesEs": ["La tiroides necesita yodo de la dieta para producir hormonas", "Las enfermedades tiroideas son mas comunes en mujeres", "Pesa solo unos 15-20 gramos"],
    "datosInteresantesEn": ["The thyroid needs dietary iodine to produce hormones", "Thyroid diseases are more common in women", "Weighs only about 15-20 grams"],
    "problemasComunes": ["Hipotiroidismo", "Hipertiroidismo", "Nodulos tiroideos", "Cancer de tiroides", "Tiroiditis de Hashimoto"],
    "relacionadoCon": ["hipofisis", "suprarrenales"],
    "tamanoAproximado": "5 cm de alto por lobulo; 15-20 g"
  },
  {
    "id": "suprarrenales",
    "nombreEs": "Glandulas suprarrenales",
    "nombreEn": "Adrenal Glands",
    "sistemaEs": "Endocrino",
    "sistemaEn": "Endocrine",
    "descripcionEs": "Par de glandulas ubicadas sobre los rinones que producen hormonas esenciales para la respuesta al estres y el metabolismo.",
    "descripcionEn": "Pair of glands located atop the kidneys that produce hormones essential for stress response and metabolism.",
    "funcionEs": "Producir cortisol, aldosterona y adrenalina para manejar el estres, regular la presion arterial y el metabolismo.",
    "funcionEn": "Produce cortisol, aldosterone, and adrenaline to manage stress, regulate blood pressure and metabolism.",
    "ubicacionEs": "Sobre cada rinon, en la parte superior posterior del abdomen.",
    "ubicacionEn": "On top of each kidney, in the upper posterior abdomen.",
    "estructuraEs": "Cada glandula tiene dos zonas: corteza (produce cortisol y aldosterona) y medula (produce adrenalina y noradrenalina).",
    "estructuraEn": "Each gland has two zones: cortex (produces cortisol and aldosterone) and medulla (produces adrenaline and noradrenaline).",
    "datosInteresantesEs": ["La adrenalina puede preparar el cuerpo para la accion en segundos", "El cortisol se llama la hormona del estres", "Son pequenas pero producen mas de 50 hormonas diferentes"],
    "datosInteresantesEn": ["Adrenaline can prepare the body for action in seconds", "Cortisol is called the stress hormone", "They are small but produce more than 50 different hormones"],
    "problemasComunes": ["Enfermedad de Addison", "Sindrome de Cushing", "Feocromocitoma", "Insuficiencia suprarrenal"],
    "relacionadoCon": ["rinones", "hipofisis", "tiroides"],
    "tamanoAproximado": "3-5 cm; 7-10 g cada una"
  },
  {
    "id": "hipofisis",
    "nombreEs": "Hipofisis (Glandula pituitaria)",
    "nombreEn": "Pituitary Gland",
    "sistemaEs": "Endocrino",
    "sistemaEn": "Endocrine",
    "descripcionEs": "Pequena glandula maestra del sistema endocrino que controla la funcion de muchas otras glandulas.",
    "descripcionEn": "Small master gland of the endocrine system that controls the function of many other glands.",
    "funcionEs": "Producir hormonas que regulan el crecimiento, la reproduccion, el metabolismo y la funcion de otras glandulas endocrinas.",
    "funcionEn": "Produce hormones that regulate growth, reproduction, metabolism, and the function of other endocrine glands.",
    "ubicacionEs": "En la silla turca del hueso esfenoides, en la base del cerebro, debajo del hipotalamo.",
    "ubicacionEn": "In the sella turcica of the sphenoid bone, at the base of the brain, below the hypothalamus.",
    "estructuraEs": "Dos lobulos: adenohipofisis (anterior) y neurohipofisis (posterior). Tamano de un guisante.",
    "estructuraEn": "Two lobes: adenohypophysis (anterior) and neurohypophysis (posterior). Size of a pea.",
    "datosInteresantesEs": ["Se le llama glandula maestra porque controla a otras glandulas", "Es del tamano de un guisante (0.5-1 g)", "Produce al menos 9 hormonas diferentes"],
    "datosInteresantesEn": ["Called the master gland because it controls other glands", "Is the size of a pea (0.5-1 g)", "Produces at least 9 different hormones"],
    "problemasComunes": ["Adenoma hipofisario", "Hipopituitarismo", "Acromegalia", "Diabetes insipida"],
    "relacionadoCon": ["cerebro", "tiroides", "suprarrenales"],
    "tamanoAproximado": "Tamano de un guisante; 0.5-1 g"
  },
  {
    "id": "pancreas-endocrino",
    "nombreEs": "Pancreas endocrino (Islotes de Langerhans)",
    "nombreEn": "Endocrine Pancreas (Islets of Langerhans)",
    "sistemaEs": "Endocrino",
    "sistemaEn": "Endocrine",
    "descripcionEs": "Agrupaciones de celulas especializadas dentro del pancreas que producen hormonas para regular los niveles de glucosa en sangre.",
    "descripcionEn": "Clusters of specialized cells within the pancreas that produce hormones to regulate blood glucose levels.",
    "funcionEs": "Secretar insulina (baja la glucosa) y glucagon (sube la glucosa) para mantener niveles estables de azucar en la sangre.",
    "funcionEn": "Secrete insulin (lowers glucose) and glucagon (raises glucose) to maintain stable blood sugar levels.",
    "ubicacionEs": "Distribuidos por todo el pancreas, especialmente en la cola.",
    "ubicacionEn": "Distributed throughout the pancreas, especially in the tail.",
    "estructuraEs": "Aproximadamente 1-2 millones de islotes con celulas alfa (glucagon), beta (insulina) y delta (somatostatina).",
    "estructuraEn": "Approximately 1-2 million islets with alpha cells (glucagon), beta cells (insulin), and delta cells (somatostatin).",
    "datosInteresantesEs": ["Los islotes representan solo el 1-2% del tejido pancreatico", "Las celulas beta producen cerca de 1 millon de moleculas de insulina por segundo", "La destruccion autoinmune de celulas beta causa diabetes tipo 1"],
    "datosInteresantesEn": ["Islets represent only 1-2% of pancreatic tissue", "Beta cells produce about 1 million insulin molecules per second", "Autoimmune destruction of beta cells causes type 1 diabetes"],
    "problemasComunes": ["Diabetes tipo 1", "Diabetes tipo 2", "Insulinoma", "Hipoglucemia"],
    "relacionadoCon": ["pancreas", "higado", "sangre", "suprarrenales"]
  },
  {
    "id": "rinones",
    "nombreEs": "Rinones",
    "nombreEn": "Kidneys",
    "sistemaEs": "Urinario",
    "sistemaEn": "Urinary",
    "descripcionEs": "Par de organos en forma de frijol que filtran la sangre, eliminan desechos y regulan el equilibrio de liquidos y electrolitos.",
    "descripcionEn": "Pair of bean-shaped organs that filter blood, remove waste, and regulate fluid and electrolyte balance.",
    "funcionEs": "Filtrar la sangre para eliminar desechos en forma de orina, regular la presion arterial, equilibrar electrolitos y producir eritropoyetina.",
    "funcionEn": "Filter blood to remove waste as urine, regulate blood pressure, balance electrolytes, and produce erythropoietin.",
    "ubicacionEs": "En la parte posterior del abdomen, a ambos lados de la columna vertebral, detras del peritoneo.",
    "ubicacionEn": "In the posterior abdomen, on both sides of the spine, behind the peritoneum.",
    "estructuraEs": "Corteza externa y medula interna con nefronas (unidades funcionales). Cada rinon contiene cerca de un millon de nefronas.",
    "estructuraEn": "Outer cortex and inner medulla with nephrons (functional units). Each kidney contains about one million nephrons.",
    "datosInteresantesEs": ["Filtran unos 180 litros de sangre al dia pero producen solo 1-2 litros de orina", "Cada rinon tiene cerca de un millon de nefronas", "Se puede vivir con un solo rinon funcional"],
    "datosInteresantesEn": ["Filter about 180 liters of blood daily but produce only 1-2 liters of urine", "Each kidney has about one million nephrons", "You can live with just one functioning kidney"],
    "problemasComunes": ["Insuficiencia renal", "Calculos renales", "Infeccion urinaria (pielonefritis)", "Enfermedad renal cronica", "Nefritis"],
    "relacionadoCon": ["vejiga", "ureteres", "suprarrenales", "sangre"],
    "tamanoAproximado": "10-12 cm de largo; 150 g cada uno"
  },
  {
    "id": "vejiga",
    "nombreEs": "Vejiga urinaria",
    "nombreEn": "Urinary Bladder",
    "sistemaEs": "Urinario",
    "sistemaEn": "Urinary",
    "descripcionEs": "Organo muscular hueco que almacena la orina hasta que se excreta voluntariamente.",
    "descripcionEn": "Hollow muscular organ that stores urine until it is voluntarily excreted.",
    "funcionEs": "Almacenar orina producida por los rinones y vaciarla de forma controlada durante la miccion.",
    "funcionEn": "Store urine produced by the kidneys and empty it in a controlled manner during urination.",
    "ubicacionEs": "En la pelvis, detras del pubis. En mujeres, delante del utero; en hombres, delante del recto.",
    "ubicacionEn": "In the pelvis, behind the pubic bone. In women, in front of the uterus; in men, in front of the rectum.",
    "estructuraEs": "Saco muscular distensible con tres capas de musculo liso (detrusor) y revestimiento de urotelio.",
    "estructuraEn": "Distensible muscular sac with three layers of smooth muscle (detrusor) and urothelial lining.",
    "datosInteresantesEs": ["Puede almacenar entre 400 y 600 ml de orina", "La sensacion de necesitar orinar aparece a los 200-300 ml", "El musculo detrusor se contrae para vaciar la vejiga"],
    "datosInteresantesEn": ["Can store between 400 and 600 ml of urine", "The urge to urinate appears at 200-300 ml", "The detrusor muscle contracts to empty the bladder"],
    "problemasComunes": ["Infeccion urinaria (cistitis)", "Incontinencia urinaria", "Vejiga hiperactiva", "Cancer de vejiga"],
    "relacionadoCon": ["rinones", "ureteres", "uretra", "prostata"],
    "tamanoAproximado": "Capacidad de 400-600 ml"
  },
  {
    "id": "ureteres",
    "nombreEs": "Ureteres",
    "nombreEn": "Ureters",
    "sistemaEs": "Urinario",
    "sistemaEn": "Urinary",
    "descripcionEs": "Par de tubos musculares que transportan la orina desde los rinones hasta la vejiga mediante movimientos peristalticos.",
    "descripcionEn": "Pair of muscular tubes that transport urine from the kidneys to the bladder through peristaltic movements.",
    "funcionEs": "Conducir la orina desde la pelvis renal hasta la vejiga urinaria de forma unidireccional.",
    "funcionEn": "Conduct urine from the renal pelvis to the urinary bladder in a unidirectional manner.",
    "ubicacionEs": "Desde la pelvis de cada rinon, descienden por detras del peritoneo hasta la vejiga.",
    "ubicacionEn": "From the pelvis of each kidney, descending behind the peritoneum to the bladder.",
    "estructuraEs": "Tubos de 25-30 cm con tres capas: mucosa, muscular y adventicia. Producen contracciones peristalticas.",
    "estructuraEn": "Tubes of 25-30 cm with three layers: mucosa, muscular, and adventitia. Produce peristaltic contractions.",
    "datosInteresantesEs": ["La orina se mueve por peristalsis, no por gravedad", "Miden entre 25 y 30 cm de largo", "Tienen tres puntos de estrechamiento donde pueden atascarse los calculos"],
    "datosInteresantesEn": ["Urine moves by peristalsis, not gravity", "Measure between 25 and 30 cm long", "Have three narrowing points where stones can get stuck"],
    "problemasComunes": ["Calculos ureterales", "Obstruccion ureteral", "Reflujo vesicoureteral"],
    "relacionadoCon": ["rinones", "vejiga"],
    "tamanoAproximado": "25-30 cm de largo; 3-4 mm de diametro"
  },
  {
    "id": "uretra",
    "nombreEs": "Uretra",
    "nombreEn": "Urethra",
    "sistemaEs": "Urinario",
    "sistemaEn": "Urinary",
    "descripcionEs": "Conducto que transporta la orina desde la vejiga al exterior del cuerpo durante la miccion.",
    "descripcionEn": "Canal that transports urine from the bladder to the outside of the body during urination.",
    "funcionEs": "Permitir la salida de la orina desde la vejiga al exterior. En hombres, tambien sirve como via para el semen.",
    "funcionEn": "Allow urine to exit from the bladder. In men, it also serves as a pathway for semen.",
    "ubicacionEs": "Desde el cuello de la vejiga hasta el meato urinario externo.",
    "ubicacionEn": "From the neck of the bladder to the external urinary meatus.",
    "estructuraEs": "Tubo con esfinter interno (involuntario) y externo (voluntario). En mujeres mide 3-5 cm y en hombres 18-20 cm.",
    "estructuraEn": "Tube with internal (involuntary) and external (voluntary) sphincters. In women 3-5 cm and in men 18-20 cm.",
    "datosInteresantesEs": ["La uretra femenina es mucho mas corta, lo que aumenta el riesgo de infecciones", "En el hombre pasa por la prostata", "El esfinter externo permite control voluntario de la miccion"],
    "datosInteresantesEn": ["The female urethra is much shorter, increasing infection risk", "In men it passes through the prostate", "The external sphincter allows voluntary urination control"],
    "problemasComunes": ["Uretritis", "Estenosis uretral", "Infeccion urinaria"],
    "relacionadoCon": ["vejiga", "prostata", "rinones"]
  },
  {
    "id": "utero",
    "nombreEs": "Utero",
    "nombreEn": "Uterus",
    "sistemaEs": "Reproductivo",
    "sistemaEn": "Reproductive",
    "descripcionEs": "Organo muscular hueco donde se implanta y desarrolla el embrion durante el embarazo.",
    "descripcionEn": "Hollow muscular organ where the embryo implants and develops during pregnancy.",
    "funcionEs": "Albergar y nutrir al feto durante el embarazo, y contraerse durante el parto para expulsar al bebe.",
    "funcionEn": "House and nourish the fetus during pregnancy, and contract during labor to deliver the baby.",
    "ubicacionEs": "En la pelvis femenina, entre la vejiga y el recto.",
    "ubicacionEn": "In the female pelvis, between the bladder and the rectum.",
    "estructuraEs": "Tres capas: perimetrio (externa), miometrio (muscular) y endometrio (interna, se renueva cada ciclo menstrual).",
    "estructuraEn": "Three layers: perimetrium (outer), myometrium (muscular), and endometrium (inner, renewed each menstrual cycle).",
    "datosInteresantesEs": ["El endometrio se renueva aproximadamente cada 28 dias", "Durante el embarazo se expande hasta 500 veces su tamano normal", "El miometrio es uno de los musculos mas fuertes del cuerpo"],
    "datosInteresantesEn": ["The endometrium renews approximately every 28 days", "During pregnancy it expands up to 500 times its normal size", "The myometrium is one of the strongest muscles in the body"],
    "problemasComunes": ["Fibromas uterinos", "Endometriosis", "Cancer uterino", "Prolapso uterino"],
    "relacionadoCon": ["ovarios", "vejiga"],
    "tamanoAproximado": "7-8 cm de largo; 50-70 g (no embarazada)"
  },
  {
    "id": "ovarios",
    "nombreEs": "Ovarios",
    "nombreEn": "Ovaries",
    "sistemaEs": "Reproductivo",
    "sistemaEn": "Reproductive",
    "descripcionEs": "Par de glandulas femeninas que producen ovulos y hormonas sexuales como estrogeno y progesterona.",
    "descripcionEn": "Pair of female glands that produce eggs and sex hormones such as estrogen and progesterone.",
    "funcionEs": "Producir y liberar ovulos para la reproduccion y secretar estrogeno y progesterona para el ciclo menstrual.",
    "funcionEn": "Produce and release eggs for reproduction and secrete estrogen and progesterone for the menstrual cycle.",
    "ubicacionEs": "A ambos lados del utero en la pelvis femenina, sostenidos por ligamentos.",
    "ubicacionEn": "On both sides of the uterus in the female pelvis, held by ligaments.",
    "estructuraEs": "Organos ovalados con corteza (foliculos con ovulos) y medula (vasos sanguineos y nervios).",
    "estructuraEn": "Oval organs with cortex (follicles with eggs) and medulla (blood vessels and nerves).",
    "datosInteresantesEs": ["Una mujer nace con aproximadamente 1-2 millones de ovulos", "Solo unos 400-500 ovulos seran liberados durante la vida fertil", "Son del tamano de una almendra"],
    "datosInteresantesEn": ["A woman is born with approximately 1-2 million eggs", "Only about 400-500 eggs will be released during fertile years", "They are the size of an almond"],
    "problemasComunes": ["Sindrome de ovario poliquistico", "Quistes ovaricos", "Cancer de ovario", "Insuficiencia ovarica prematura"],
    "relacionadoCon": ["utero", "hipofisis"],
    "tamanoAproximado": "3-5 cm de largo; 6-8 g cada uno"
  },
  {
    "id": "testiculos",
    "nombreEs": "Testiculos",
    "nombreEn": "Testes",
    "sistemaEs": "Reproductivo",
    "sistemaEn": "Reproductive",
    "descripcionEs": "Par de glandulas masculinas que producen espermatozoides y testosterona.",
    "descripcionEn": "Pair of male glands that produce sperm and testosterone.",
    "funcionEs": "Producir espermatozoides para la reproduccion y secretar testosterona, la principal hormona sexual masculina.",
    "funcionEn": "Produce sperm for reproduction and secrete testosterone, the primary male sex hormone.",
    "ubicacionEs": "Dentro del escroto, fuera de la cavidad abdominal, para mantener una temperatura menor a la corporal.",
    "ubicacionEn": "Inside the scrotum, outside the abdominal cavity, to maintain a temperature lower than body temperature.",
    "estructuraEs": "Cada testiculo contiene tubulos seminiferos (produccion de esperma) y celulas de Leydig (produccion de testosterona).",
    "estructuraEn": "Each testis contains seminiferous tubules (sperm production) and Leydig cells (testosterone production).",
    "datosInteresantesEs": ["Producen alrededor de 1,500 espermatozoides por segundo", "Necesitan una temperatura 2-3 grados menor que la corporal", "El testiculo izquierdo suele estar ligeramente mas bajo que el derecho"],
    "datosInteresantesEn": ["Produce about 1,500 sperm per second", "Need a temperature 2-3 degrees lower than body temperature", "The left testicle usually hangs slightly lower than the right"],
    "problemasComunes": ["Cancer testicular", "Varicocele", "Torsion testicular", "Criptorquidia"],
    "relacionadoCon": ["prostata", "hipofisis"],
    "tamanoAproximado": "4-5 cm de largo; 10-15 g cada uno"
  },
  {
    "id": "prostata",
    "nombreEs": "Prostata",
    "nombreEn": "Prostate",
    "sistemaEs": "Reproductivo",
    "sistemaEn": "Reproductive",
    "descripcionEs": "Glandula del tamano de una nuez que produce parte del liquido seminal en los hombres.",
    "descripcionEn": "Walnut-sized gland that produces part of the seminal fluid in men.",
    "funcionEs": "Producir liquido prostatico que nutre y protege a los espermatozoides, contribuyendo al semen.",
    "funcionEn": "Produce prostatic fluid that nourishes and protects sperm, contributing to semen.",
    "ubicacionEs": "Debajo de la vejiga y delante del recto, rodeando la uretra masculina.",
    "ubicacionEn": "Below the bladder and in front of the rectum, surrounding the male urethra.",
    "estructuraEs": "Glandula del tamano de una nuez compuesta por tejido glandular y muscular, dividida en zonas.",
    "estructuraEn": "Walnut-sized gland composed of glandular and muscular tissue, divided into zones.",
    "datosInteresantesEs": ["Crece lentamente a lo largo de la vida del hombre", "Produce el 30% del volumen del semen", "Los problemas de prostata son muy comunes despues de los 50 anos"],
    "datosInteresantesEn": ["Grows slowly throughout a man's life", "Produces 30% of semen volume", "Prostate problems are very common after age 50"],
    "problemasComunes": ["Hiperplasia prostatica benigna", "Prostatitis", "Cancer de prostata"],
    "relacionadoCon": ["testiculos", "vejiga", "uretra"],
    "tamanoAproximado": "Tamano de una nuez; 20-25 g"
  },
  {
    "id": "ganglios-linfaticos",
    "nombreEs": "Ganglios linfaticos",
    "nombreEn": "Lymph Nodes",
    "sistemaEs": "Linfatico/Inmune",
    "sistemaEn": "Lymphatic/Immune",
    "descripcionEs": "Pequenos organos en forma de frijol que filtran la linfa y albergan celulas inmunitarias para combatir infecciones.",
    "descripcionEn": "Small bean-shaped organs that filter lymph and house immune cells to fight infections.",
    "funcionEs": "Filtrar la linfa, atrapar patogenos y celulas anomalas, y activar la respuesta inmunitaria.",
    "funcionEn": "Filter lymph, trap pathogens and abnormal cells, and activate the immune response.",
    "ubicacionEs": "Distribuidos por todo el cuerpo, concentrados en cuello, axilas, ingle, abdomen y pecho.",
    "ubicacionEn": "Distributed throughout the body, concentrated in neck, armpits, groin, abdomen, and chest.",
    "estructuraEs": "Capsulas de tejido linfoide con corteza (linfocitos B) y medula (linfocitos T y macrofagos). Conectados por vasos linfaticos.",
    "estructuraEn": "Lymphoid tissue capsules with cortex (B lymphocytes) and medulla (T lymphocytes and macrophages). Connected by lymphatic vessels.",
    "datosInteresantesEs": ["El cuerpo tiene entre 500 y 700 ganglios linfaticos", "Se inflaman cuando el cuerpo esta combatiendo una infeccion", "Son una de las primeras lineas de defensa del cuerpo"],
    "datosInteresantesEn": ["The body has between 500 and 700 lymph nodes", "They swell when the body is fighting an infection", "They are one of the body's first lines of defense"],
    "problemasComunes": ["Linfadenopatia", "Linfoma", "Linfadenitis", "Metastasis ganglionar"],
    "relacionadoCon": ["bazo", "timo", "amigdalas", "globulos-blancos"],
    "tamanoAproximado": "0.5-2 cm cada uno normalmente"
  },
  {
    "id": "bazo",
    "nombreEs": "Bazo",
    "nombreEn": "Spleen",
    "sistemaEs": "Linfatico/Inmune",
    "sistemaEn": "Lymphatic/Immune",
    "descripcionEs": "Organo linfoide que filtra la sangre, recicla globulos rojos viejos y participa en la respuesta inmunitaria.",
    "descripcionEn": "Lymphoid organ that filters blood, recycles old red blood cells, and participates in the immune response.",
    "funcionEs": "Filtrar sangre eliminando celulas danadas, almacenar plaquetas y globulos blancos, y producir anticuerpos.",
    "funcionEn": "Filter blood removing damaged cells, store platelets and white blood cells, and produce antibodies.",
    "ubicacionEs": "En el cuadrante superior izquierdo del abdomen, detras del estomago y debajo del diafragma.",
    "ubicacionEn": "In the upper left quadrant of the abdomen, behind the stomach and below the diaphragm.",
    "estructuraEs": "Pulpa roja (filtra sangre y recicla hierro) y pulpa blanca (tejido linfoide para inmunidad).",
    "estructuraEn": "Red pulp (filters blood and recycles iron) and white pulp (lymphoid tissue for immunity).",
    "datosInteresantesEs": ["Almacena aproximadamente un tercio de las plaquetas del cuerpo", "Se puede vivir sin el, pero aumenta el riesgo de infecciones", "Es el organo linfoide mas grande del cuerpo"],
    "datosInteresantesEn": ["Stores approximately one-third of the body's platelets", "You can live without it, but infection risk increases", "It is the largest lymphoid organ in the body"],
    "problemasComunes": ["Esplenomegalia", "Ruptura esplenica", "Hiperesplenismo", "Infarto esplenico"],
    "relacionadoCon": ["ganglios-linfaticos", "sangre", "globulos-rojos", "plaquetas"],
    "tamanoAproximado": "12 cm de largo; 150-200 g"
  },
  {
    "id": "timo",
    "nombreEs": "Timo",
    "nombreEn": "Thymus",
    "sistemaEs": "Linfatico/Inmune",
    "sistemaEn": "Lymphatic/Immune",
    "descripcionEs": "Organo linfoide donde maduran los linfocitos T, esenciales para la inmunidad adaptativa.",
    "descripcionEn": "Lymphoid organ where T lymphocytes mature, essential for adaptive immunity.",
    "funcionEs": "Educar y madurar los linfocitos T para que puedan distinguir entre celulas propias y patogenos extranas.",
    "funcionEn": "Educate and mature T lymphocytes so they can distinguish between self-cells and foreign pathogens.",
    "ubicacionEs": "En la parte superior del pecho (mediastino anterior), detras del esternon y delante del corazon.",
    "ubicacionEn": "In the upper chest (anterior mediastinum), behind the sternum and in front of the heart.",
    "estructuraEs": "Organo bilobulado con corteza (donde maduran las celulas T) y medula. Mas grande en la infancia.",
    "estructuraEn": "Bilobed organ with cortex (where T cells mature) and medulla. Largest during childhood.",
    "datosInteresantesEs": ["Es mas grande en la infancia y se encoge con la edad", "Es fundamental para desarrollar el sistema inmunitario en los primeros anos", "A los 65 anos se ha reemplazado mayormente por tejido graso"],
    "datosInteresantesEn": ["Is largest in childhood and shrinks with age", "Is fundamental for developing the immune system in early years", "By age 65 it has mostly been replaced by fatty tissue"],
    "problemasComunes": ["Timoma", "Miastenia gravis (asociada al timo)", "Hiperplasia timica"],
    "relacionadoCon": ["ganglios-linfaticos", "globulos-blancos", "bazo"],
    "tamanoAproximado": "Maximo ~40 g en pubertad; se reduce con la edad"
  },
  {
    "id": "amigdalas",
    "nombreEs": "Amigdalas",
    "nombreEn": "Tonsils",
    "sistemaEs": "Linfatico/Inmune",
    "sistemaEn": "Lymphatic/Immune",
    "descripcionEs": "Masas de tejido linfoide en la garganta que actuan como primera defensa contra patogenos inhalados e ingeridos.",
    "descripcionEn": "Masses of lymphoid tissue in the throat acting as the first defense against inhaled and ingested pathogens.",
    "funcionEs": "Detectar y combatir patogenos que entran por la boca y la nariz, iniciando la respuesta inmunitaria.",
    "funcionEn": "Detect and fight pathogens entering through the mouth and nose, initiating the immune response.",
    "ubicacionEs": "En la parte posterior de la garganta (amigdalas palatinas), base de la lengua y nasofaringe.",
    "ubicacionEn": "At the back of the throat (palatine tonsils), base of the tongue, and nasopharynx.",
    "estructuraEs": "Tejido linfoide con criptas que atrapan particulas. Forman el anillo de Waldeyer junto con la adenoide.",
    "estructuraEn": "Lymphoid tissue with crypts that trap particles. Form Waldeyer's ring along with the adenoid.",
    "datosInteresantesEs": ["Son mas grandes en la infancia y se reducen despues de la pubertad", "Forman parte del anillo de Waldeyer, un circulo de defensa en la garganta", "Se pueden extraer sin afectar significativamente la inmunidad a largo plazo"],
    "datosInteresantesEn": ["Are larger in childhood and shrink after puberty", "Form part of Waldeyer's ring, a defense circle in the throat", "Can be removed without significantly affecting long-term immunity"],
    "problemasComunes": ["Amigdalitis", "Absceso periamigdalino", "Hipertrofia amigdalina"],
    "relacionadoCon": ["ganglios-linfaticos", "globulos-blancos"]
  },
  {
    "id": "piel",
    "nombreEs": "Piel",
    "nombreEn": "Skin",
    "sistemaEs": "Tegumentario",
    "sistemaEn": "Integumentary",
    "descripcionEs": "El organo mas grande del cuerpo, que actua como barrera protectora entre el organismo y el medio ambiente.",
    "descripcionEn": "The largest organ in the body, acting as a protective barrier between the body and the environment.",
    "funcionEs": "Proteger contra patogenos y radiacion UV, regular la temperatura, percibir sensaciones tactiles y sintetizar vitamina D.",
    "funcionEn": "Protect against pathogens and UV radiation, regulate temperature, perceive touch sensations, and synthesize vitamin D.",
    "ubicacionEs": "Cubre toda la superficie exterior del cuerpo.",
    "ubicacionEn": "Covers the entire outer surface of the body.",
    "estructuraEs": "Tres capas: epidermis (externa), dermis (media, con nervios y vasos) e hipodermis (grasa subcutanea).",
    "estructuraEn": "Three layers: epidermis (outer), dermis (middle, with nerves and vessels), and hypodermis (subcutaneous fat).",
    "datosInteresantesEs": ["Tiene una superficie de aproximadamente 1.7-2 metros cuadrados", "Se renueva completamente cada 2-4 semanas", "Pesa entre 3.5 y 10 kg, dependiendo de la persona"],
    "datosInteresantesEn": ["Has a surface area of approximately 1.7-2 square meters", "Completely renews itself every 2-4 weeks", "Weighs between 3.5 and 10 kg, depending on the person"],
    "problemasComunes": ["Dermatitis", "Psoriasis", "Cancer de piel", "Acne", "Eczema", "Infecciones cutaneas"],
    "relacionadoCon": ["cabello", "unas", "nervios-perifericos"],
    "tamanoAproximado": "1.7-2 m2 de superficie; 3.5-10 kg"
  },
  {
    "id": "cabello",
    "nombreEs": "Cabello (Pelo)",
    "nombreEn": "Hair",
    "sistemaEs": "Tegumentario",
    "sistemaEn": "Integumentary",
    "descripcionEs": "Filamentos de queratina que crecen de foliculos en la piel, con funciones protectoras y sensoriales.",
    "descripcionEn": "Keratin filaments growing from follicles in the skin, with protective and sensory functions.",
    "funcionEs": "Proteger el cuero cabelludo de la radiacion solar, ayudar a regular la temperatura y mejorar la percepcion sensorial.",
    "funcionEn": "Protect the scalp from solar radiation, help regulate temperature, and enhance sensory perception.",
    "ubicacionEs": "Cubre la mayor parte del cuerpo excepto las palmas, plantas de los pies y labios.",
    "ubicacionEn": "Covers most of the body except palms, soles of feet, and lips.",
    "estructuraEs": "Compuesto por queratina. Cada cabello tiene raiz (foliculo), tallo y se nutre de la papila dermica.",
    "estructuraEn": "Composed of keratin. Each hair has a root (follicle), shaft, and is nourished by the dermal papilla.",
    "datosInteresantesEs": ["La cabeza tiene entre 80,000 y 120,000 cabellos", "Cada cabello crece unos 15 cm por ano", "El cabello es el segundo tejido de mas rapido crecimiento del cuerpo"],
    "datosInteresantesEn": ["The head has between 80,000 and 120,000 hairs", "Each hair grows about 15 cm per year", "Hair is the second fastest-growing tissue in the body"],
    "problemasComunes": ["Alopecia", "Calvicie de patron masculino/femenino", "Caspa", "Foliculitis"],
    "relacionadoCon": ["piel", "unas"]
  },
  {
    "id": "unas",
    "nombreEs": "Unas",
    "nombreEn": "Nails",
    "sistemaEs": "Tegumentario",
    "sistemaEn": "Integumentary",
    "descripcionEs": "Placas duras de queratina que protegen las puntas de los dedos de las manos y los pies.",
    "descripcionEn": "Hard keratin plates that protect the tips of the fingers and toes.",
    "funcionEs": "Proteger las puntas de los dedos, mejorar la precision del agarre y servir como herramientas para rascar y manipular objetos.",
    "funcionEn": "Protect fingertips, improve grip precision, and serve as tools for scratching and manipulating objects.",
    "ubicacionEs": "En la parte dorsal (superior) de los extremos de los dedos de manos y pies.",
    "ubicacionEn": "On the dorsal (upper) part of the tips of the fingers and toes.",
    "estructuraEs": "Placa ungueal (queratina dura), lecho ungueal (debajo), matriz (zona de crecimiento), cuticula y lunula.",
    "estructuraEn": "Nail plate (hard keratin), nail bed (underneath), matrix (growth zone), cuticle, and lunula.",
    "datosInteresantesEs": ["Las unas de las manos crecen 3-4 mm al mes, mas rapido que las de los pies", "Las unas estan hechas de la misma proteina que el cabello: queratina", "Pueden indicar problemas de salud segun su color y textura"],
    "datosInteresantesEn": ["Fingernails grow 3-4 mm per month, faster than toenails", "Nails are made of the same protein as hair: keratin", "They can indicate health problems based on their color and texture"],
    "problemasComunes": ["Onicomicosis (hongos)", "Unas encarnadas", "Psoriasis ungueal", "Paroniquia"],
    "relacionadoCon": ["piel", "cabello"]
  },
  {
    "id": "ojos",
    "nombreEs": "Ojos",
    "nombreEn": "Eyes",
    "sistemaEs": "Sensorial",
    "sistemaEn": "Sensory",
    "descripcionEs": "Organos de la vision que captan la luz y la convierten en impulsos electricos que el cerebro interpreta como imagenes.",
    "descripcionEn": "Organs of vision that capture light and convert it into electrical impulses the brain interprets as images.",
    "funcionEs": "Captar la luz, enfocarla en la retina y convertirla en senales nerviosas para que el cerebro procese las imagenes.",
    "funcionEn": "Capture light, focus it on the retina, and convert it into nerve signals for the brain to process images.",
    "ubicacionEs": "En las orbitas del craneo, protegidos por los parpados, cejas y huesos orbitarios.",
    "ubicacionEn": "In the orbits of the skull, protected by eyelids, eyebrows, and orbital bones.",
    "estructuraEs": "Tres capas: esclerotica/cornea (externa), uvea (media, incluye iris), y retina (interna, con fotorreceptores).",
    "estructuraEn": "Three layers: sclera/cornea (outer), uvea (middle, includes iris), and retina (inner, with photoreceptors).",
    "datosInteresantesEs": ["El ojo puede distinguir aproximadamente 10 millones de colores", "Parpadeas unas 15-20 veces por minuto", "La retina contiene unos 120 millones de bastones y 6 millones de conos"],
    "datosInteresantesEn": ["The eye can distinguish approximately 10 million colors", "You blink about 15-20 times per minute", "The retina contains about 120 million rods and 6 million cones"],
    "problemasComunes": ["Miopia", "Hipermetropia", "Astigmatismo", "Glaucoma", "Cataratas", "Degeneracion macular"],
    "relacionadoCon": ["cerebro", "nervios-perifericos"],
    "tamanoAproximado": "2.5 cm de diametro; 7-8 g"
  },
  {
    "id": "oidos",
    "nombreEs": "Oidos",
    "nombreEn": "Ears",
    "sistemaEs": "Sensorial",
    "sistemaEn": "Sensory",
    "descripcionEs": "Organos de la audicion y el equilibrio que captan ondas sonoras y detectan la posicion de la cabeza.",
    "descripcionEn": "Organs of hearing and balance that capture sound waves and detect head position.",
    "funcionEs": "Captar ondas sonoras y convertirlas en impulsos nerviosos (audicion) y detectar la posicion y movimiento de la cabeza (equilibrio).",
    "funcionEn": "Capture sound waves and convert them into nerve impulses (hearing) and detect head position and movement (balance).",
    "ubicacionEs": "A ambos lados de la cabeza, con la parte interna alojada en el hueso temporal.",
    "ubicacionEn": "On both sides of the head, with the inner part housed in the temporal bone.",
    "estructuraEs": "Tres secciones: oido externo (pabellon y canal), oido medio (timpano y huesecillos) y oido interno (coclea y vestibulo).",
    "estructuraEn": "Three sections: outer ear (pinna and canal), middle ear (eardrum and ossicles), and inner ear (cochlea and vestibule).",
    "datosInteresantesEs": ["Los tres huesecillos del oido medio son los huesos mas pequenos del cuerpo", "La coclea tiene forma de caracol", "Los humanos pueden oirfrecuencias entre 20 y 20,000 Hz"],
    "datosInteresantesEn": ["The three middle ear ossicles are the smallest bones in the body", "The cochlea is snail-shaped", "Humans can hear frequencies between 20 and 20,000 Hz"],
    "problemasComunes": ["Otitis media", "Perdida auditiva", "Tinitus (zumbido)", "Vertigo", "Enfermedad de Meniere"],
    "relacionadoCon": ["cerebro", "cerebelo", "nervios-perifericos"]
  },
  {
    "id": "nariz",
    "nombreEs": "Nariz",
    "nombreEn": "Nose",
    "sistemaEs": "Sensorial",
    "sistemaEn": "Sensory",
    "descripcionEs": "Organo del olfato y principal via de entrada de aire al sistema respiratorio.",
    "descripcionEn": "Organ of smell and primary air entry point for the respiratory system.",
    "funcionEs": "Detectar olores, filtrar, calentar y humidificar el aire inspirado antes de que llegue a los pulmones.",
    "funcionEn": "Detect odors, filter, warm, and humidify inspired air before it reaches the lungs.",
    "ubicacionEs": "En el centro de la cara, sobre la boca y entre los ojos.",
    "ubicacionEn": "In the center of the face, above the mouth and between the eyes.",
    "estructuraEs": "Formada por hueso y cartilago. Contiene cornetes nasales, mucosa ciliada y el epitelio olfatorio en la parte superior.",
    "estructuraEn": "Formed by bone and cartilage. Contains nasal turbinates, ciliated mucosa, and olfactory epithelium at the top.",
    "datosInteresantesEs": ["Puede detectar hasta un billon de olores diferentes", "El moco nasal atrapa particulas y patogenos", "La nariz calienta el aire a temperatura corporal antes de que llegue a los pulmones"],
    "datosInteresantesEn": ["Can detect up to one trillion different scents", "Nasal mucus traps particles and pathogens", "The nose warms air to body temperature before it reaches the lungs"],
    "problemasComunes": ["Rinitis alergica", "Sinusitis", "Polipos nasales", "Desviacion del tabique"],
    "relacionadoCon": ["pulmones", "cerebro", "traquea", "amigdalas"]
  },
  {
    "id": "lengua",
    "nombreEs": "Lengua",
    "nombreEn": "Tongue",
    "sistemaEs": "Sensorial",
    "sistemaEn": "Sensory",
    "descripcionEs": "Organo muscular en la boca responsable del gusto, la deglucion, la articulacion del habla y la manipulacion de alimentos.",
    "descripcionEn": "Muscular organ in the mouth responsible for taste, swallowing, speech articulation, and food manipulation.",
    "funcionEs": "Percibir los cinco sabores basicos, manipular los alimentos durante la masticacion, ayudar a tragar y articular el habla.",
    "funcionEn": "Perceive the five basic tastes, manipulate food during chewing, help swallowing, and articulate speech.",
    "ubicacionEs": "En la cavidad oral, anclada por su base a la mandibula y el hueso hioides.",
    "ubicacionEn": "In the oral cavity, anchored at its base to the mandible and the hyoid bone.",
    "estructuraEs": "Compuesta por 8 musculos. Superficie cubierta por papilas gustativas (fungiformes, caliciformes, filiformes y foliadas).",
    "estructuraEn": "Composed of 8 muscles. Surface covered by taste papillae (fungiform, circumvallate, filiform, and foliate).",
    "datosInteresantesEs": ["Tiene entre 2,000 y 8,000 papilas gustativas", "Detecta cinco sabores: dulce, salado, acido, amargo y umami", "Es el unico musculo del cuerpo unido solo por un extremo"],
    "datosInteresantesEn": ["Has between 2,000 and 8,000 taste buds", "Detects five flavors: sweet, salty, sour, bitter, and umami", "It is the only muscle attached at only one end"],
    "problemasComunes": ["Glositis", "Aftas", "Lengua geografica", "Cancer oral"],
    "relacionadoCon": ["cerebro", "esofago", "nariz"]
  },
  {
    "id": "medula-osea",
    "nombreEs": "Medula osea",
    "nombreEn": "Bone Marrow",
    "sistemaEs": "Hematologico",
    "sistemaEn": "Hematologic",
    "descripcionEs": "Tejido blando que se encuentra dentro de los huesos y es responsable de la produccion de todas las celulas sanguineas.",
    "descripcionEn": "Soft tissue found inside bones responsible for the production of all blood cells.",
    "funcionEs": "Producir globulos rojos, globulos blancos y plaquetas a traves del proceso de hematopoyesis.",
    "funcionEn": "Produce red blood cells, white blood cells, and platelets through the process of hematopoiesis.",
    "ubicacionEs": "Dentro de los huesos, especialmente en los huesos largos, la pelvis, el esternon y las vertebras.",
    "ubicacionEn": "Inside bones, especially in long bones, pelvis, sternum, and vertebrae.",
    "estructuraEs": "Dos tipos: medula roja (hematopoyetica, produce celulas sanguineas) y medula amarilla (grasa, reserva energetica).",
    "estructuraEn": "Two types: red marrow (hematopoietic, produces blood cells) and yellow marrow (fat, energy reserve).",
    "datosInteresantesEs": ["Produce aproximadamente 500 mil millones de celulas sanguineas al dia", "En los adultos, la medula roja se concentra en huesos planos", "Representa aproximadamente el 4% del peso corporal"],
    "datosInteresantesEn": ["Produces approximately 500 billion blood cells per day", "In adults, red marrow is concentrated in flat bones", "Represents approximately 4% of body weight"],
    "problemasComunes": ["Leucemia", "Aplasia medular", "Mieloma multiple", "Sindrome mielodisplasico"],
    "relacionadoCon": ["huesos", "globulos-rojos", "globulos-blancos", "plaquetas", "sangre"]
  },
  {
    "id": "plaquetas",
    "nombreEs": "Plaquetas (Trombocitos)",
    "nombreEn": "Platelets (Thrombocytes)",
    "sistemaEs": "Hematologico",
    "sistemaEn": "Hematologic",
    "descripcionEs": "Fragmentos celulares pequenos en la sangre esenciales para la coagulacion y la reparacion de vasos sanguineos danados.",
    "descripcionEn": "Small cell fragments in the blood essential for clotting and repairing damaged blood vessels.",
    "funcionEs": "Formar tapones en los sitios de lesion vascular para detener el sangrado e iniciar el proceso de reparacion tisular.",
    "funcionEn": "Form plugs at vascular injury sites to stop bleeding and initiate tissue repair.",
    "ubicacionEs": "Circulan en la sangre por todo el cuerpo; se producen en la medula osea.",
    "ubicacionEn": "Circulate in the blood throughout the body; produced in the bone marrow.",
    "estructuraEs": "Fragmentos de megacariocitos de la medula osea. Carecen de nucleo. Contienen granulos con factores de coagulacion.",
    "estructuraEn": "Fragments of megakaryocytes from bone marrow. Lack a nucleus. Contain granules with clotting factors.",
    "datosInteresantesEs": ["Normalmente hay entre 150,000 y 400,000 por microlitro de sangre", "Viven solo entre 8 y 10 dias", "Son las celulas sanguineas mas pequenas, de 2-3 micrometros"],
    "datosInteresantesEn": ["Normally there are between 150,000 and 400,000 per microliter of blood", "They live only 8 to 10 days", "They are the smallest blood cells, at 2-3 micrometers"],
    "problemasComunes": ["Trombocitopenia", "Trombocitosis", "Purpura trombocitopenica", "Trastornos de coagulacion"],
    "relacionadoCon": ["medula-osea", "sangre", "bazo"],
    "tamanoAproximado": "2-3 micrometros de diametro"
  },
  {
    "id": "globulos-rojos",
    "nombreEs": "Globulos rojos (Eritrocitos)",
    "nombreEn": "Red Blood Cells (Erythrocytes)",
    "sistemaEs": "Hematologico",
    "sistemaEn": "Hematologic",
    "descripcionEs": "Celulas sanguineas mas abundantes, encargadas de transportar oxigeno desde los pulmones a los tejidos.",
    "descripcionEn": "Most abundant blood cells, responsible for transporting oxygen from the lungs to tissues.",
    "funcionEs": "Transportar oxigeno unido a la hemoglobina desde los pulmones a todas las celulas del cuerpo, y llevar CO2 de vuelta.",
    "funcionEn": "Transport oxygen bound to hemoglobin from the lungs to all body cells, and carry CO2 back.",
    "ubicacionEs": "Circulan en la sangre por todo el cuerpo; se producen en la medula osea roja.",
    "ubicacionEn": "Circulate in the blood throughout the body; produced in the red bone marrow.",
    "estructuraEs": "Celulas biconcavas sin nucleo, llenas de hemoglobina. Su forma aumenta la superficie para el intercambio gaseoso.",
    "estructuraEn": "Biconcave cells without a nucleus, filled with hemoglobin. Their shape increases surface area for gas exchange.",
    "datosInteresantesEs": ["Hay aproximadamente 25 billones de globulos rojos en el cuerpo", "Cada globulo rojo contiene 270 millones de moleculas de hemoglobina", "Viven aproximadamente 120 dias antes de ser reciclados por el bazo"],
    "datosInteresantesEn": ["There are approximately 25 trillion red blood cells in the body", "Each red blood cell contains 270 million hemoglobin molecules", "They live approximately 120 days before being recycled by the spleen"],
    "problemasComunes": ["Anemia ferropenica", "Anemia falciforme", "Talasemia", "Policitemia"],
    "relacionadoCon": ["medula-osea", "sangre", "pulmones", "bazo"],
    "tamanoAproximado": "6-8 micrometros de diametro"
  },
  {
    "id": "globulos-blancos",
    "nombreEs": "Globulos blancos (Leucocitos)",
    "nombreEn": "White Blood Cells (Leukocytes)",
    "sistemaEs": "Hematologico",
    "sistemaEn": "Hematologic",
    "descripcionEs": "Celulas del sistema inmunitario que circulan en la sangre y defienden al cuerpo contra infecciones y enfermedades.",
    "descripcionEn": "Immune system cells that circulate in the blood and defend the body against infections and diseases.",
    "funcionEs": "Identificar, atacar y destruir patogenos como bacterias, virus y parasitos, y eliminar celulas anomalas.",
    "funcionEn": "Identify, attack, and destroy pathogens such as bacteria, viruses, and parasites, and eliminate abnormal cells.",
    "ubicacionEs": "Circulan en la sangre y migran a los tejidos donde se necesitan; se producen en la medula osea.",
    "ubicacionEn": "Circulate in the blood and migrate to tissues where needed; produced in the bone marrow.",
    "estructuraEs": "Cinco tipos principales: neutrofilos, linfocitos, monocitos, eosinofilos y basofilos. Cada tipo tiene funciones especificas.",
    "estructuraEn": "Five main types: neutrophils, lymphocytes, monocytes, eosinophils, and basophils. Each type has specific functions.",
    "datosInteresantesEs": ["Normalmente hay entre 4,000 y 11,000 por microlitro de sangre", "Los neutrofilos son los mas abundantes (60-70%)", "Algunos linfocitos T pueden vivir decadas como celulas de memoria"],
    "datosInteresantesEn": ["Normally there are between 4,000 and 11,000 per microliter of blood", "Neutrophils are the most abundant (60-70%)", "Some T lymphocytes can live for decades as memory cells"],
    "problemasComunes": ["Leucocitosis", "Leucopenia", "Leucemia", "Linfoma", "Inmunodeficiencias"],
    "relacionadoCon": ["medula-osea", "sangre", "ganglios-linfaticos", "timo", "bazo"]
  }
]`);

// ---------------------------------------------------------------------------
// Search & Filter Functions
// ---------------------------------------------------------------------------

/**
 * Busca entradas de anatomia por texto libre en nombres, descripciones o
 * sistemas (en espanol o ingles). Devuelve resultados ordenados por
 * relevancia simple (nombre > sistema > descripcion).
 */
export function buscarAnatomia(termino: string): AnatomiaEntry[] {
  if (!termino || typeof termino !== 'string') return [];

  const t = termino.toLowerCase().trim();
  if (t.length === 0) return [];

  // Simple relevance scoring
  const scored: { entry: AnatomiaEntry; score: number }[] = [];

  for (const entry of anatomiaEnciclopedia) {
    let score = 0;

    // Exact ID match — highest
    if (entry.id === t) {
      score += 100;
    }

    // Name matches (Spanish / English)
    if (entry.nombreEs.toLowerCase().includes(t)) score += 50;
    if (entry.nombreEn.toLowerCase().includes(t)) score += 45;

    // System matches
    if (entry.sistemaEs.toLowerCase().includes(t)) score += 30;
    if (entry.sistemaEn.toLowerCase().includes(t)) score += 25;

    // Description matches
    if (entry.descripcionEs.toLowerCase().includes(t)) score += 15;
    if (entry.descripcionEn.toLowerCase().includes(t)) score += 10;

    // Function matches
    if (entry.funcionEs.toLowerCase().includes(t)) score += 10;
    if (entry.funcionEn.toLowerCase().includes(t)) score += 8;

    // Location matches
    if (entry.ubicacionEs.toLowerCase().includes(t)) score += 8;
    if (entry.ubicacionEn.toLowerCase().includes(t)) score += 6;

    // Common problems
    if (entry.problemasComunes.some((p) => p.toLowerCase().includes(t))) {
      score += 20;
    }

    // Related entries
    if (entry.relacionadoCon.some((r) => r.toLowerCase().includes(t))) {
      score += 5;
    }

    if (score > 0) {
      scored.push({ entry, score });
    }
  }

  // Sort descending by score
  scored.sort((a, b) => b.score - a.score);

  return scored.map((s) => s.entry);
}

/**
 * Obtiene una entrada de anatomia por su identificador unico.
 * Retorna undefined si no se encuentra.
 */
export function getAnatomiaById(id: string): AnatomiaEntry | undefined {
  if (!id || typeof id !== 'string') return undefined;
  return anatomiaEnciclopedia.find((e) => e.id === id.toLowerCase().trim());
}

/**
 * Filtra las entradas de anatomia por sistema corporal.
 * Acepta el nombre del sistema en espanol o ingles (case-insensitive).
 */
export function getAnatomiaPorSistema(sistema: string): AnatomiaEntry[] {
  if (!sistema || typeof sistema !== 'string') return [];

  const s = sistema.toLowerCase().trim();

  return anatomiaEnciclopedia.filter(
    (e) =>
      e.sistemaEs.toLowerCase().includes(s) ||
      e.sistemaEn.toLowerCase().includes(s),
  );
}
