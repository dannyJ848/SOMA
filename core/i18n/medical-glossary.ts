/**
 * medical-glossary.ts
 *
 * Bilingual medical glossary mapping clinical jargon to plain language
 * in both English and Spanish. 550+ entries covering cardiology,
 * pulmonology, gastroenterology, neurology, orthopedics, oncology,
 * endocrinology, nephrology, hematology, dermatology, ophthalmology,
 * psychiatry, obstetrics, infectious disease, general medicine,
 * pharmacology, nutrition, pathophysiology, imaging, surgical,
 * laboratory, genetics, and pediatrics.
 */

export { MEDICAL_TERMS_ES, translateTerm } from './medical-translations-es';

export interface GlossaryEntry {
  term: string;
  plainEN: string;
  plainES: string;
}

export const MEDICAL_GLOSSARY: Array<GlossaryEntry> = [
  // ──────────────────────────────────────────────
  // Cardiology / Cardiovascular (30)
  // ──────────────────────────────────────────────
  { term: 'Myocardial infarction', plainEN: 'Heart attack - blocked blood flow to the heart', plainES: 'Ataque al corazón - flujo de sangre bloqueado al corazón' },
  { term: 'Angina pectoris', plainEN: 'Chest pain caused by reduced blood flow to the heart', plainES: 'Dolor de pecho causado por flujo sanguíneo reducido al corazón' },
  { term: 'Arrhythmia', plainEN: 'Irregular heartbeat', plainES: 'Latido irregular del corazón' },
  { term: 'Atrial fibrillation', plainEN: 'Rapid, irregular heartbeat in the upper chambers of the heart', plainES: 'Latido rápido e irregular en las cámaras superiores del corazón' },
  { term: 'Bradycardia', plainEN: 'Abnormally slow heart rate, below 60 beats per minute', plainES: 'Frecuencia cardíaca anormalmente lenta, por debajo de 60 latidos por minuto' },
  { term: 'Tachycardia', plainEN: 'Abnormally fast heart rate, above 100 beats per minute', plainES: 'Frecuencia cardíaca anormalmente rápida, por encima de 100 latidos por minuto' },
  { term: 'Congestive heart failure', plainEN: 'Heart cannot pump blood efficiently, causing fluid buildup', plainES: 'El corazón no puede bombear sangre eficientemente, causando acumulación de líquidos' },
  { term: 'Cardiomyopathy', plainEN: 'Disease of the heart muscle that makes it harder to pump blood', plainES: 'Enfermedad del músculo cardíaco que dificulta el bombeo de sangre' },
  { term: 'Endocarditis', plainEN: 'Infection of the inner lining of the heart chambers and valves', plainES: 'Infección del revestimiento interior de las cámaras y válvulas del corazón' },
  { term: 'Pericarditis', plainEN: 'Inflammation of the sac surrounding the heart', plainES: 'Inflamación del saco que rodea el corazón' },
  { term: 'Atherosclerosis', plainEN: 'Buildup of plaque inside the arteries, narrowing them', plainES: 'Acumulación de placa dentro de las arterias, estrechándolas' },
  { term: 'Coronary artery disease', plainEN: 'Narrowing of the arteries that supply blood to the heart', plainES: 'Estrechamiento de las arterias que suministran sangre al corazón' },
  { term: 'Deep vein thrombosis', plainEN: 'Blood clot in a deep vein, usually in the leg', plainES: 'Coágulo de sangre en una vena profunda, generalmente en la pierna' },
  { term: 'Pulmonary embolism', plainEN: 'Blood clot that travels to the lungs and blocks blood flow', plainES: 'Coágulo de sangre que viaja a los pulmones y bloquea el flujo sanguíneo' },
  { term: 'Aneurysm', plainEN: 'Bulging weak spot in an artery wall that could burst', plainES: 'Punto débil abultado en la pared de una arteria que podría romperse' },
  { term: 'Aortic dissection', plainEN: 'Tear in the wall of the main artery from the heart', plainES: 'Desgarro en la pared de la arteria principal del corazón' },
  { term: 'Peripheral artery disease', plainEN: 'Narrowed arteries reducing blood flow to the limbs', plainES: 'Arterias estrechadas que reducen el flujo sanguíneo a las extremidades' },
  { term: 'Mitral valve prolapse', plainEN: 'Heart valve does not close properly, allowing blood to leak backward', plainES: 'La válvula cardíaca no cierra correctamente, permitiendo que la sangre se filtre hacia atrás' },
  { term: 'Aortic stenosis', plainEN: 'Narrowing of the aortic valve, restricting blood flow from the heart', plainES: 'Estrechamiento de la válvula aórtica, restringiendo el flujo de sangre del corazón' },
  { term: 'Hypertension', plainEN: 'High blood pressure - force of blood against artery walls is too high', plainES: 'Presión arterial alta - la fuerza de la sangre contra las paredes arteriales es demasiado alta' },
  { term: 'Hypotension', plainEN: 'Low blood pressure - blood pressure is lower than normal', plainES: 'Presión arterial baja - la presión sanguínea es más baja de lo normal' },
  { term: 'Cardiac catheterization', plainEN: 'Thin tube inserted into the heart to diagnose or treat conditions', plainES: 'Tubo delgado insertado en el corazón para diagnosticar o tratar condiciones' },
  { term: 'Angioplasty', plainEN: 'Procedure to open blocked or narrowed arteries', plainES: 'Procedimiento para abrir arterias bloqueadas o estrechadas' },
  { term: 'Coronary bypass', plainEN: 'Surgery to reroute blood around a blocked artery in the heart', plainES: 'Cirugía para desviar la sangre alrededor de una arteria bloqueada en el corazón' },
  { term: 'Stent', plainEN: 'Small mesh tube placed in an artery to keep it open', plainES: 'Pequeño tubo de malla colocado en una arteria para mantenerla abierta' },
  { term: 'Echocardiogram', plainEN: 'Ultrasound image of the heart to check its structure and function', plainES: 'Imagen de ultrasonido del corazón para verificar su estructura y función' },
  { term: 'Electrocardiogram', plainEN: 'Test that records the electrical activity of the heart', plainES: 'Prueba que registra la actividad eléctrica del corazón' },
  { term: 'Cardiac arrest', plainEN: 'Heart suddenly stops beating', plainES: 'El corazón deja de latir repentinamente' },
  { term: 'Syncope', plainEN: 'Fainting - temporary loss of consciousness due to reduced blood flow to the brain', plainES: 'Desmayo - pérdida temporal de conciencia por reducción del flujo sanguíneo al cerebro' },
  { term: 'Varicose veins', plainEN: 'Swollen, twisted veins visible under the skin, usually in the legs', plainES: 'Venas hinchadas y retorcidas visibles bajo la piel, generalmente en las piernas' },

  // ──────────────────────────────────────────────
  // Pulmonology / Respiratory (25)
  // ──────────────────────────────────────────────
  { term: 'Pneumonia', plainEN: 'Infection that inflames the air sacs in the lungs', plainES: 'Infección que inflama los sacos de aire en los pulmones' },
  { term: 'Bronchitis', plainEN: 'Inflammation of the airways leading to the lungs', plainES: 'Inflamación de las vías respiratorias que conducen a los pulmones' },
  { term: 'Asthma', plainEN: 'Chronic condition where airways narrow and swell, making breathing difficult', plainES: 'Condición crónica donde las vías respiratorias se estrechan e inflaman, dificultando la respiración' },
  { term: 'COPD', plainEN: 'Chronic obstructive pulmonary disease - long-term lung disease that makes it hard to breathe', plainES: 'Enfermedad pulmonar obstructiva crónica - enfermedad pulmonar a largo plazo que dificulta la respiración' },
  { term: 'Emphysema', plainEN: 'Lung condition where the air sacs are damaged, causing shortness of breath', plainES: 'Condición pulmonar donde los sacos de aire están dañados, causando dificultad para respirar' },
  { term: 'Pleurisy', plainEN: 'Inflammation of the tissue lining the lungs and chest wall', plainES: 'Inflamación del tejido que recubre los pulmones y la pared torácica' },
  { term: 'Pleural effusion', plainEN: 'Buildup of fluid between the layers of tissue lining the lungs', plainES: 'Acumulación de líquido entre las capas de tejido que recubren los pulmones' },
  { term: 'Pneumothorax', plainEN: 'Collapsed lung - air leaks into the space between the lung and chest wall', plainES: 'Pulmón colapsado - el aire se filtra en el espacio entre el pulmón y la pared torácica' },
  { term: 'Pulmonary fibrosis', plainEN: 'Scarring of lung tissue that makes it hard to breathe', plainES: 'Cicatrización del tejido pulmonar que dificulta la respiración' },
  { term: 'Cystic fibrosis', plainEN: 'Genetic disease causing thick, sticky mucus in the lungs and digestive system', plainES: 'Enfermedad genética que causa mucosidad espesa y pegajosa en los pulmones y sistema digestivo' },
  { term: 'Tuberculosis', plainEN: 'Bacterial infection that mainly affects the lungs', plainES: 'Infección bacteriana que afecta principalmente a los pulmones' },
  { term: 'Sleep apnea', plainEN: 'Breathing repeatedly stops and starts during sleep', plainES: 'La respiración se detiene y comienza repetidamente durante el sueño' },
  { term: 'Dyspnea', plainEN: 'Shortness of breath or difficulty breathing', plainES: 'Falta de aire o dificultad para respirar' },
  { term: 'Hypoxia', plainEN: 'Low oxygen levels in the body tissues', plainES: 'Niveles bajos de oxígeno en los tejidos del cuerpo' },
  { term: 'Hypoxemia', plainEN: 'Low oxygen levels in the blood', plainES: 'Niveles bajos de oxígeno en la sangre' },
  { term: 'Atelectasis', plainEN: 'Partial or complete collapse of the lung', plainES: 'Colapso parcial o completo del pulmón' },
  { term: 'Bronchiectasis', plainEN: 'Permanent widening of the airways caused by damage', plainES: 'Ensanchamiento permanente de las vías respiratorias causado por daño' },
  { term: 'Pulmonary hypertension', plainEN: 'High blood pressure in the arteries of the lungs', plainES: 'Presión arterial alta en las arterias de los pulmones' },
  { term: 'Sarcoidosis', plainEN: 'Inflammatory disease causing small lumps of cells in organs, often the lungs', plainES: 'Enfermedad inflamatoria que causa pequeños grupos de células en los órganos, a menudo los pulmones' },
  { term: 'Spirometry', plainEN: 'Breathing test that measures how much air you can inhale and exhale', plainES: 'Prueba de respiración que mide cuánto aire puede inhalar y exhalar' },
  { term: 'Bronchoscopy', plainEN: 'Procedure using a thin tube with a camera to look inside the airways', plainES: 'Procedimiento que usa un tubo delgado con cámara para observar el interior de las vías respiratorias' },
  { term: 'Intubation', plainEN: 'Inserting a tube into the windpipe to help with breathing', plainES: 'Inserción de un tubo en la tráquea para ayudar con la respiración' },
  { term: 'Tracheostomy', plainEN: 'Surgical opening in the neck to place a tube into the windpipe', plainES: 'Apertura quirúrgica en el cuello para colocar un tubo en la tráquea' },
  { term: 'Mechanical ventilation', plainEN: 'Machine that helps a patient breathe when they cannot on their own', plainES: 'Máquina que ayuda al paciente a respirar cuando no puede hacerlo por sí mismo' },
  { term: 'Nebulizer', plainEN: 'Device that turns liquid medicine into a mist to be inhaled', plainES: 'Dispositivo que convierte medicamento líquido en una niebla para inhalar' },

  // ──────────────────────────────────────────────
  // Gastroenterology / Digestive (25)
  // ──────────────────────────────────────────────
  { term: 'Gastroesophageal reflux disease', plainEN: 'Stomach acid frequently flows back into the esophagus', plainES: 'El ácido estomacal fluye frecuentemente de regreso al esófago' },
  { term: 'Peptic ulcer', plainEN: 'Open sore on the lining of the stomach or small intestine', plainES: 'Llaga abierta en el revestimiento del estómago o intestino delgado' },
  { term: 'Gastritis', plainEN: 'Inflammation of the stomach lining', plainES: 'Inflamación del revestimiento del estómago' },
  { term: 'Hepatitis', plainEN: 'Inflammation of the liver, often caused by a virus', plainES: 'Inflamación del hígado, a menudo causada por un virus' },
  { term: 'Cirrhosis', plainEN: 'Severe scarring of the liver from long-term damage', plainES: 'Cicatrización severa del hígado por daño a largo plazo' },
  { term: 'Cholecystitis', plainEN: 'Inflammation of the gallbladder, usually from gallstones', plainES: 'Inflamación de la vesícula biliar, generalmente por cálculos biliares' },
  { term: 'Cholelithiasis', plainEN: 'Gallstones - hardened deposits in the gallbladder', plainES: 'Cálculos biliares - depósitos endurecidos en la vesícula biliar' },
  { term: 'Pancreatitis', plainEN: 'Inflammation of the pancreas', plainES: 'Inflamación del páncreas' },
  { term: 'Appendicitis', plainEN: 'Inflammation of the appendix, often requiring surgery', plainES: 'Inflamación del apéndice, a menudo requiere cirugía' },
  { term: 'Diverticulitis', plainEN: 'Inflammation of small pouches in the intestinal wall', plainES: 'Inflamación de pequeñas bolsas en la pared intestinal' },
  { term: 'Celiac disease', plainEN: 'Immune reaction to eating gluten that damages the small intestine', plainES: 'Reacción inmune al comer gluten que daña el intestino delgado' },
  { term: 'Irritable bowel syndrome', plainEN: 'Common disorder affecting the large intestine causing cramps and bloating', plainES: 'Trastorno común que afecta al intestino grueso causando calambres e hinchazón' },
  { term: 'Crohn\'s disease', plainEN: 'Chronic inflammatory bowel disease affecting the digestive tract lining', plainES: 'Enfermedad inflamatoria intestinal crónica que afecta el revestimiento del tracto digestivo' },
  { term: 'Ulcerative colitis', plainEN: 'Chronic inflammation and ulcers in the colon and rectum', plainES: 'Inflamación crónica y úlceras en el colon y recto' },
  { term: 'Dysphagia', plainEN: 'Difficulty swallowing food or liquids', plainES: 'Dificultad para tragar alimentos o líquidos' },
  { term: 'Ascites', plainEN: 'Buildup of fluid in the abdomen', plainES: 'Acumulación de líquido en el abdomen' },
  { term: 'Jaundice', plainEN: 'Yellowing of the skin and eyes from excess bilirubin', plainES: 'Coloración amarilla de la piel y los ojos por exceso de bilirrubina' },
  { term: 'Hemorrhoids', plainEN: 'Swollen veins in the lower rectum and anus', plainES: 'Venas hinchadas en la parte inferior del recto y el ano' },
  { term: 'Colostomy', plainEN: 'Surgery to create an opening in the abdomen for waste to leave the body', plainES: 'Cirugía para crear una abertura en el abdomen para que los desechos salgan del cuerpo' },
  { term: 'Colonoscopy', plainEN: 'Exam using a camera to look inside the colon', plainES: 'Examen con cámara para observar el interior del colon' },
  { term: 'Endoscopy', plainEN: 'Procedure using a flexible tube with a camera to examine the digestive tract', plainES: 'Procedimiento con tubo flexible con cámara para examinar el tracto digestivo' },
  { term: 'Barium swallow', plainEN: 'X-ray test using a special liquid to see the esophagus and stomach', plainES: 'Prueba de rayos X con un líquido especial para ver el esófago y estómago' },
  { term: 'Paracentesis', plainEN: 'Procedure to drain fluid from the abdomen', plainES: 'Procedimiento para drenar líquido del abdomen' },
  { term: 'Cholangitis', plainEN: 'Infection of the bile duct system', plainES: 'Infección del sistema de conductos biliares' },
  { term: 'Steatosis', plainEN: 'Fatty liver - excess fat buildup in liver cells', plainES: 'Hígado graso - acumulación excesiva de grasa en las células del hígado' },

  // ──────────────────────────────────────────────
  // Neurology (30)
  // ──────────────────────────────────────────────
  { term: 'Cerebrovascular accident', plainEN: 'Stroke - blocked or burst blood vessel in the brain', plainES: 'Accidente cerebrovascular - vaso sanguíneo bloqueado o roto en el cerebro' },
  { term: 'Transient ischemic attack', plainEN: 'Mini-stroke - temporary blockage of blood flow to the brain', plainES: 'Mini accidente cerebrovascular - bloqueo temporal del flujo sanguíneo al cerebro' },
  { term: 'Epilepsy', plainEN: 'Condition causing recurring seizures from abnormal brain activity', plainES: 'Condición que causa convulsiones recurrentes por actividad cerebral anormal' },
  { term: 'Multiple sclerosis', plainEN: 'Immune system attacks the protective covering of nerves', plainES: 'El sistema inmunológico ataca la cubierta protectora de los nervios' },
  { term: 'Parkinson\'s disease', plainEN: 'Brain disorder causing tremors, stiffness, and difficulty with movement', plainES: 'Trastorno cerebral que causa temblores, rigidez y dificultad de movimiento' },
  { term: 'Alzheimer\'s disease', plainEN: 'Progressive brain disease causing memory loss and confusion', plainES: 'Enfermedad cerebral progresiva que causa pérdida de memoria y confusión' },
  { term: 'Dementia', plainEN: 'Decline in mental function severe enough to interfere with daily life', plainES: 'Deterioro de la función mental lo suficientemente grave como para interferir con la vida diaria' },
  { term: 'Meningitis', plainEN: 'Infection causing inflammation of the membranes surrounding the brain and spinal cord', plainES: 'Infección que causa inflamación de las membranas que rodean el cerebro y la médula espinal' },
  { term: 'Encephalitis', plainEN: 'Inflammation of the brain, usually caused by a virus', plainES: 'Inflamación del cerebro, generalmente causada por un virus' },
  { term: 'Neuropathy', plainEN: 'Nerve damage causing weakness, numbness, and pain, usually in hands and feet', plainES: 'Daño nervioso que causa debilidad, entumecimiento y dolor, generalmente en manos y pies' },
  { term: 'Sciatica', plainEN: 'Pain along the sciatic nerve from the lower back down the leg', plainES: 'Dolor a lo largo del nervio ciático desde la parte baja de la espalda hasta la pierna' },
  { term: 'Carpal tunnel syndrome', plainEN: 'Numbness and tingling in the hand from a pinched nerve in the wrist', plainES: 'Entumecimiento y hormigueo en la mano por un nervio comprimido en la muñeca' },
  { term: 'Bell\'s palsy', plainEN: 'Sudden weakness or paralysis on one side of the face', plainES: 'Debilidad o parálisis repentina en un lado de la cara' },
  { term: 'Trigeminal neuralgia', plainEN: 'Intense facial pain from the trigeminal nerve', plainES: 'Dolor facial intenso proveniente del nervio trigémino' },
  { term: 'Hydrocephalus', plainEN: 'Buildup of fluid in the brain cavities', plainES: 'Acumulación de líquido en las cavidades del cerebro' },
  { term: 'Concussion', plainEN: 'Brain injury from a blow to the head affecting brain function', plainES: 'Lesión cerebral por un golpe en la cabeza que afecta la función cerebral' },
  { term: 'Cerebral palsy', plainEN: 'Group of movement disorders caused by brain damage before or during birth', plainES: 'Grupo de trastornos del movimiento causados por daño cerebral antes o durante el nacimiento' },
  { term: 'Amyotrophic lateral sclerosis', plainEN: 'ALS - progressive disease that destroys nerve cells controlling muscles', plainES: 'ELA - enfermedad progresiva que destruye las células nerviosas que controlan los músculos' },
  { term: 'Guillain-Barré syndrome', plainEN: 'Immune system attacks the nerves, causing weakness and paralysis', plainES: 'El sistema inmunológico ataca los nervios, causando debilidad y parálisis' },
  { term: 'Myasthenia gravis', plainEN: 'Weakness and rapid fatigue of voluntary muscles', plainES: 'Debilidad y fatiga rápida de los músculos voluntarios' },
  { term: 'Lumbar puncture', plainEN: 'Spinal tap - needle inserted into the lower spine to collect fluid', plainES: 'Punción lumbar - aguja insertada en la parte baja de la columna para recoger líquido' },
  { term: 'Electroencephalogram', plainEN: 'Test that records electrical activity in the brain', plainES: 'Prueba que registra la actividad eléctrica en el cerebro' },
  { term: 'Craniotomy', plainEN: 'Surgery to open part of the skull to access the brain', plainES: 'Cirugía para abrir parte del cráneo y acceder al cerebro' },
  { term: 'Hemiplegia', plainEN: 'Paralysis of one side of the body', plainES: 'Parálisis de un lado del cuerpo' },
  { term: 'Paraplegia', plainEN: 'Paralysis of the lower half of the body', plainES: 'Parálisis de la mitad inferior del cuerpo' },
  { term: 'Quadriplegia', plainEN: 'Paralysis of all four limbs', plainES: 'Parálisis de las cuatro extremidades' },
  { term: 'Aphasia', plainEN: 'Loss of ability to understand or express speech due to brain damage', plainES: 'Pérdida de la capacidad de entender o expresar el habla debido a daño cerebral' },
  { term: 'Dysarthria', plainEN: 'Difficulty speaking due to weak muscles used for speech', plainES: 'Dificultad para hablar debido a músculos débiles usados para el habla' },
  { term: 'Vertigo', plainEN: 'Sensation that you or your surroundings are spinning', plainES: 'Sensación de que usted o su entorno están girando' },
  { term: 'Neuralgia', plainEN: 'Sharp, shocking pain along a nerve pathway', plainES: 'Dolor agudo e impactante a lo largo de una vía nerviosa' },

  // ──────────────────────────────────────────────
  // Orthopedics / Musculoskeletal (25)
  // ──────────────────────────────────────────────
  { term: 'Osteoporosis', plainEN: 'Bones become weak and brittle, more likely to break', plainES: 'Los huesos se vuelven débiles y frágiles, más propensos a romperse' },
  { term: 'Osteoarthritis', plainEN: 'Wear-and-tear joint disease where cartilage breaks down', plainES: 'Enfermedad articular por desgaste donde el cartílago se deteriora' },
  { term: 'Rheumatoid arthritis', plainEN: 'Immune system mistakenly attacks the joints, causing swelling and pain', plainES: 'El sistema inmunológico ataca erróneamente las articulaciones, causando hinchazón y dolor' },
  { term: 'Scoliosis', plainEN: 'Abnormal sideways curve of the spine', plainES: 'Curvatura lateral anormal de la columna vertebral' },
  { term: 'Kyphosis', plainEN: 'Excessive outward curve of the upper back (hunchback)', plainES: 'Curvatura excesiva hacia afuera de la parte superior de la espalda (joroba)' },
  { term: 'Lordosis', plainEN: 'Excessive inward curve of the lower back (swayback)', plainES: 'Curvatura excesiva hacia adentro de la parte baja de la espalda' },
  { term: 'Herniated disc', plainEN: 'Spinal disc pushes out through a tear, pressing on nearby nerves', plainES: 'Un disco de la columna se sale a través de un desgarro, presionando nervios cercanos' },
  { term: 'Spinal stenosis', plainEN: 'Narrowing of the spaces in the spine, putting pressure on nerves', plainES: 'Estrechamiento de los espacios en la columna, ejerciendo presión sobre los nervios' },
  { term: 'Tendinitis', plainEN: 'Inflammation of a tendon, usually from overuse', plainES: 'Inflamación de un tendón, generalmente por uso excesivo' },
  { term: 'Bursitis', plainEN: 'Inflammation of the fluid-filled sacs that cushion joints', plainES: 'Inflamación de las bolsas llenas de líquido que amortiguan las articulaciones' },
  { term: 'Rotator cuff tear', plainEN: 'Tear in the group of muscles and tendons that stabilize the shoulder', plainES: 'Desgarro en el grupo de músculos y tendones que estabilizan el hombro' },
  { term: 'ACL tear', plainEN: 'Tear of the anterior cruciate ligament in the knee', plainES: 'Desgarro del ligamento cruzado anterior en la rodilla' },
  { term: 'Meniscus tear', plainEN: 'Tear in the cartilage that cushions the knee joint', plainES: 'Desgarro en el cartílago que amortigua la articulación de la rodilla' },
  { term: 'Plantar fasciitis', plainEN: 'Inflammation of the tissue on the bottom of the foot causing heel pain', plainES: 'Inflamación del tejido en la parte inferior del pie que causa dolor en el talón' },
  { term: 'Gout', plainEN: 'Form of arthritis caused by uric acid crystal buildup in joints', plainES: 'Forma de artritis causada por acumulación de cristales de ácido úrico en las articulaciones' },
  { term: 'Fibromyalgia', plainEN: 'Widespread muscle pain and tenderness with fatigue', plainES: 'Dolor muscular generalizado y sensibilidad con fatiga' },
  { term: 'Osteomyelitis', plainEN: 'Bone infection, usually caused by bacteria', plainES: 'Infección ósea, generalmente causada por bacterias' },
  { term: 'Stress fracture', plainEN: 'Small crack in a bone from repetitive force or overuse', plainES: 'Pequeña grieta en un hueso por fuerza repetitiva o uso excesivo' },
  { term: 'Compound fracture', plainEN: 'Broken bone that pierces through the skin', plainES: 'Hueso roto que perfora la piel' },
  { term: 'Arthroplasty', plainEN: 'Joint replacement surgery', plainES: 'Cirugía de reemplazo de articulación' },
  { term: 'Arthroscopy', plainEN: 'Minimally invasive surgery using a small camera inside a joint', plainES: 'Cirugía mínimamente invasiva usando una pequeña cámara dentro de una articulación' },
  { term: 'Laminectomy', plainEN: 'Surgery to remove part of a vertebra to relieve spinal pressure', plainES: 'Cirugía para remover parte de una vértebra para aliviar la presión espinal' },
  { term: 'Spinal fusion', plainEN: 'Surgery to permanently join two or more vertebrae', plainES: 'Cirugía para unir permanentemente dos o más vértebras' },
  { term: 'Subluxation', plainEN: 'Partial dislocation of a joint', plainES: 'Dislocación parcial de una articulación' },
  { term: 'Myalgia', plainEN: 'Muscle pain or aching', plainES: 'Dolor o molestia muscular' },

  // ──────────────────────────────────────────────
  // Oncology (20)
  // ──────────────────────────────────────────────
  { term: 'Neoplasm', plainEN: 'Abnormal growth of tissue, can be benign or malignant', plainES: 'Crecimiento anormal de tejido, puede ser benigno o maligno' },
  { term: 'Carcinoma', plainEN: 'Cancer that starts in the skin or tissue lining organs', plainES: 'Cáncer que comienza en la piel o el tejido que recubre los órganos' },
  { term: 'Sarcoma', plainEN: 'Cancer that starts in bone, muscle, fat, or connective tissue', plainES: 'Cáncer que comienza en hueso, músculo, grasa o tejido conectivo' },
  { term: 'Lymphoma', plainEN: 'Cancer of the lymphatic system', plainES: 'Cáncer del sistema linfático' },
  { term: 'Leukemia', plainEN: 'Cancer of the blood-forming tissues, including bone marrow', plainES: 'Cáncer de los tejidos formadores de sangre, incluida la médula ósea' },
  { term: 'Melanoma', plainEN: 'Serious form of skin cancer that develops in pigment-producing cells', plainES: 'Forma grave de cáncer de piel que se desarrolla en las células productoras de pigmento' },
  { term: 'Metastasis', plainEN: 'Cancer spreading from its original site to other parts of the body', plainES: 'Cáncer que se propaga desde su sitio original a otras partes del cuerpo' },
  { term: 'Biopsy', plainEN: 'Removing a small sample of tissue to test for disease', plainES: 'Extracción de una pequeña muestra de tejido para detectar enfermedades' },
  { term: 'Chemotherapy', plainEN: 'Treatment using drugs to kill cancer cells', plainES: 'Tratamiento con medicamentos para destruir células cancerosas' },
  { term: 'Radiation therapy', plainEN: 'Treatment using high-energy rays to kill cancer cells', plainES: 'Tratamiento con rayos de alta energía para destruir células cancerosas' },
  { term: 'Immunotherapy', plainEN: 'Treatment that helps your immune system fight cancer', plainES: 'Tratamiento que ayuda al sistema inmunológico a combatir el cáncer' },
  { term: 'Remission', plainEN: 'Decrease or disappearance of signs and symptoms of cancer', plainES: 'Disminución o desaparición de los signos y síntomas del cáncer' },
  { term: 'Malignant', plainEN: 'Cancerous - able to spread to other parts of the body', plainES: 'Canceroso - capaz de propagarse a otras partes del cuerpo' },
  { term: 'Benign', plainEN: 'Not cancerous - does not spread to other parts of the body', plainES: 'No canceroso - no se propaga a otras partes del cuerpo' },
  { term: 'Staging', plainEN: 'Determining the extent and spread of cancer in the body', plainES: 'Determinar la extensión y propagación del cáncer en el cuerpo' },
  { term: 'Tumor marker', plainEN: 'Substance in the blood that may indicate cancer', plainES: 'Sustancia en la sangre que puede indicar cáncer' },
  { term: 'Palliative care', plainEN: 'Care focused on comfort and quality of life for serious illness', plainES: 'Cuidado enfocado en la comodidad y calidad de vida para enfermedades graves' },
  { term: 'Oncologist', plainEN: 'Doctor who specializes in diagnosing and treating cancer', plainES: 'Médico especializado en diagnosticar y tratar el cáncer' },
  { term: 'Lumpectomy', plainEN: 'Surgery to remove a tumor and a small margin of surrounding tissue', plainES: 'Cirugía para remover un tumor y un pequeño margen de tejido circundante' },
  { term: 'Mastectomy', plainEN: 'Surgery to remove all or part of the breast', plainES: 'Cirugía para remover todo o parte del seno' },

  // ──────────────────────────────────────────────
  // Endocrinology (20)
  // ──────────────────────────────────────────────
  { term: 'Diabetes mellitus', plainEN: 'Condition where the body cannot properly process blood sugar', plainES: 'Condición en la que el cuerpo no puede procesar adecuadamente el azúcar en la sangre' },
  { term: 'Type 1 diabetes', plainEN: 'Body does not produce insulin, requiring daily injections', plainES: 'El cuerpo no produce insulina, requiriendo inyecciones diarias' },
  { term: 'Type 2 diabetes', plainEN: 'Body does not use insulin properly, often managed with lifestyle changes', plainES: 'El cuerpo no usa la insulina adecuadamente, a menudo se controla con cambios en el estilo de vida' },
  { term: 'Hypoglycemia', plainEN: 'Blood sugar drops too low', plainES: 'El azúcar en la sangre baja demasiado' },
  { term: 'Hyperglycemia', plainEN: 'Blood sugar is too high', plainES: 'El azúcar en la sangre está demasiado alto' },
  { term: 'Diabetic ketoacidosis', plainEN: 'Dangerous complication of diabetes with high blood sugar and acid buildup', plainES: 'Complicación peligrosa de la diabetes con alto nivel de azúcar y acumulación de ácido' },
  { term: 'Hypothyroidism', plainEN: 'Underactive thyroid - gland does not produce enough thyroid hormone', plainES: 'Tiroides hipoactiva - la glándula no produce suficiente hormona tiroidea' },
  { term: 'Hyperthyroidism', plainEN: 'Overactive thyroid - gland produces too much thyroid hormone', plainES: 'Tiroides hiperactiva - la glándula produce demasiada hormona tiroidea' },
  { term: 'Goiter', plainEN: 'Enlarged thyroid gland visible as swelling in the neck', plainES: 'Glándula tiroides agrandada visible como hinchazón en el cuello' },
  { term: 'Thyroid nodule', plainEN: 'Lump in the thyroid gland, usually not cancerous', plainES: 'Bulto en la glándula tiroides, generalmente no canceroso' },
  { term: 'Cushing\'s syndrome', plainEN: 'Condition from too much cortisol hormone in the body', plainES: 'Condición por exceso de hormona cortisol en el cuerpo' },
  { term: 'Addison\'s disease', plainEN: 'Adrenal glands do not produce enough hormones', plainES: 'Las glándulas suprarrenales no producen suficientes hormonas' },
  { term: 'Polycystic ovary syndrome', plainEN: 'Hormonal disorder causing enlarged ovaries with small cysts', plainES: 'Trastorno hormonal que causa ovarios agrandados con pequeños quistes' },
  { term: 'Metabolic syndrome', plainEN: 'Group of conditions that increase risk of heart disease and diabetes', plainES: 'Grupo de condiciones que aumentan el riesgo de enfermedades cardíacas y diabetes' },
  { term: 'Acromegaly', plainEN: 'Excess growth hormone causing enlarged hands, feet, and facial features', plainES: 'Exceso de hormona de crecimiento que causa agrandamiento de manos, pies y rasgos faciales' },
  { term: 'Pheochromocytoma', plainEN: 'Tumor of the adrenal gland causing high blood pressure episodes', plainES: 'Tumor de la glándula suprarrenal que causa episodios de presión arterial alta' },
  { term: 'Hyperparathyroidism', plainEN: 'Overactive parathyroid glands causing high calcium levels', plainES: 'Glándulas paratiroides hiperactivas que causan niveles altos de calcio' },
  { term: 'Hypoparathyroidism', plainEN: 'Underactive parathyroid glands causing low calcium levels', plainES: 'Glándulas paratiroides hipoactivas que causan niveles bajos de calcio' },
  { term: 'Insulin resistance', plainEN: 'Body cells do not respond well to insulin', plainES: 'Las células del cuerpo no responden bien a la insulina' },
  { term: 'HbA1c test', plainEN: 'Blood test showing average blood sugar levels over 2-3 months', plainES: 'Análisis de sangre que muestra los niveles promedio de azúcar en 2-3 meses' },

  // ──────────────────────────────────────────────
  // Nephrology / Urology (20)
  // ──────────────────────────────────────────────
  { term: 'Chronic kidney disease', plainEN: 'Gradual loss of kidney function over time', plainES: 'Pérdida gradual de la función renal con el tiempo' },
  { term: 'Acute kidney injury', plainEN: 'Sudden loss of kidney function', plainES: 'Pérdida repentina de la función renal' },
  { term: 'Nephrolithiasis', plainEN: 'Kidney stones - hard deposits of minerals in the kidneys', plainES: 'Cálculos renales - depósitos duros de minerales en los riñones' },
  { term: 'Glomerulonephritis', plainEN: 'Inflammation of the tiny filters in the kidneys', plainES: 'Inflamación de los pequeños filtros en los riñones' },
  { term: 'Nephrotic syndrome', plainEN: 'Kidney disorder causing too much protein in the urine', plainES: 'Trastorno renal que causa demasiada proteína en la orina' },
  { term: 'Pyelonephritis', plainEN: 'Kidney infection, usually from bacteria spreading from the bladder', plainES: 'Infección renal, generalmente por bacterias que se propagan desde la vejiga' },
  { term: 'Urinary tract infection', plainEN: 'Infection in any part of the urinary system', plainES: 'Infección en cualquier parte del sistema urinario' },
  { term: 'Cystitis', plainEN: 'Inflammation of the bladder, usually from infection', plainES: 'Inflamación de la vejiga, generalmente por infección' },
  { term: 'Benign prostatic hyperplasia', plainEN: 'Enlarged prostate gland that can cause urinary problems', plainES: 'Agrandamiento de la glándula prostática que puede causar problemas urinarios' },
  { term: 'Urinary incontinence', plainEN: 'Loss of bladder control', plainES: 'Pérdida del control de la vejiga' },
  { term: 'Hematuria', plainEN: 'Blood in the urine', plainES: 'Sangre en la orina' },
  { term: 'Proteinuria', plainEN: 'Excess protein in the urine, sign of kidney problems', plainES: 'Exceso de proteína en la orina, signo de problemas renales' },
  { term: 'Dialysis', plainEN: 'Machine filters waste from the blood when kidneys cannot', plainES: 'Máquina que filtra los desechos de la sangre cuando los riñones no pueden' },
  { term: 'Hemodialysis', plainEN: 'Blood is filtered outside the body through a machine', plainES: 'La sangre se filtra fuera del cuerpo a través de una máquina' },
  { term: 'Peritoneal dialysis', plainEN: 'Fluid is used to filter waste inside the abdomen', plainES: 'Se usa líquido para filtrar desechos dentro del abdomen' },
  { term: 'Kidney transplant', plainEN: 'Replacing a failing kidney with a healthy one from a donor', plainES: 'Reemplazar un riñón que falla con uno sano de un donante' },
  { term: 'Cystoscopy', plainEN: 'Procedure to look inside the bladder with a small camera', plainES: 'Procedimiento para observar el interior de la vejiga con una pequeña cámara' },
  { term: 'Lithotripsy', plainEN: 'Using shock waves to break up kidney stones', plainES: 'Uso de ondas de choque para romper cálculos renales' },
  { term: 'Ureteral stent', plainEN: 'Small tube placed in the ureter to keep it open', plainES: 'Pequeño tubo colocado en el uréter para mantenerlo abierto' },
  { term: 'Renal biopsy', plainEN: 'Taking a small piece of kidney tissue for testing', plainES: 'Tomar una pequeña pieza de tejido renal para análisis' },

  // ──────────────────────────────────────────────
  // Hematology (15)
  // ──────────────────────────────────────────────
  { term: 'Anemia', plainEN: 'Not enough healthy red blood cells to carry oxygen', plainES: 'No hay suficientes glóbulos rojos sanos para transportar oxígeno' },
  { term: 'Iron deficiency anemia', plainEN: 'Anemia caused by lack of iron in the body', plainES: 'Anemia causada por falta de hierro en el cuerpo' },
  { term: 'Sickle cell disease', plainEN: 'Inherited blood disorder where red blood cells are abnormally shaped', plainES: 'Trastorno sanguíneo hereditario donde los glóbulos rojos tienen forma anormal' },
  { term: 'Hemophilia', plainEN: 'Blood does not clot properly, causing excessive bleeding', plainES: 'La sangre no coagula correctamente, causando sangrado excesivo' },
  { term: 'Thrombocytopenia', plainEN: 'Low platelet count, increasing risk of bleeding', plainES: 'Recuento bajo de plaquetas, aumentando el riesgo de sangrado' },
  { term: 'Thrombocytosis', plainEN: 'Too many platelets, increasing risk of blood clots', plainES: 'Demasiadas plaquetas, aumentando el riesgo de coágulos de sangre' },
  { term: 'Polycythemia', plainEN: 'Too many red blood cells, making blood thicker', plainES: 'Demasiados glóbulos rojos, haciendo la sangre más espesa' },
  { term: 'Neutropenia', plainEN: 'Low white blood cell count, increasing infection risk', plainES: 'Recuento bajo de glóbulos blancos, aumentando el riesgo de infección' },
  { term: 'Coagulopathy', plainEN: 'Disorder affecting the blood\'s ability to clot', plainES: 'Trastorno que afecta la capacidad de la sangre para coagular' },
  { term: 'Disseminated intravascular coagulation', plainEN: 'Widespread blood clotting and bleeding occurring at the same time', plainES: 'Coagulación y sangrado generalizados que ocurren al mismo tiempo' },
  { term: 'Pancytopenia', plainEN: 'Reduction in all types of blood cells', plainES: 'Reducción en todos los tipos de células sanguíneas' },
  { term: 'Complete blood count', plainEN: 'Blood test measuring different types of blood cells', plainES: 'Análisis de sangre que mide diferentes tipos de células sanguíneas' },
  { term: 'Blood smear', plainEN: 'Examination of blood cells under a microscope', plainES: 'Examen de células sanguíneas bajo un microscopio' },
  { term: 'Bone marrow biopsy', plainEN: 'Taking a sample of bone marrow to check for blood disorders', plainES: 'Tomar una muestra de médula ósea para verificar trastornos sanguíneos' },
  { term: 'Transfusion reaction', plainEN: 'Adverse response to receiving donated blood', plainES: 'Respuesta adversa al recibir sangre donada' },

  // ──────────────────────────────────────────────
  // Dermatology (15)
  // ──────────────────────────────────────────────
  { term: 'Eczema', plainEN: 'Skin condition causing itchy, red, inflamed patches', plainES: 'Condición de la piel que causa parches con picazón, rojos e inflamados' },
  { term: 'Psoriasis', plainEN: 'Skin disease causing red, scaly patches that can be itchy', plainES: 'Enfermedad de la piel que causa parches rojos y escamosos que pueden causar picazón' },
  { term: 'Dermatitis', plainEN: 'General term for skin inflammation', plainES: 'Término general para la inflamación de la piel' },
  { term: 'Contact dermatitis', plainEN: 'Skin rash caused by touching something irritating or allergenic', plainES: 'Sarpullido causado por tocar algo irritante o alergénico' },
  { term: 'Urticaria', plainEN: 'Hives - itchy, raised welts on the skin from an allergic reaction', plainES: 'Urticaria - ronchas elevadas con picazón en la piel por una reacción alérgica' },
  { term: 'Cellulitis', plainEN: 'Bacterial skin infection causing redness, swelling, and pain', plainES: 'Infección bacteriana de la piel que causa enrojecimiento, hinchazón y dolor' },
  { term: 'Abscess', plainEN: 'Collection of pus under the skin from an infection', plainES: 'Acumulación de pus debajo de la piel por una infección' },
  { term: 'Herpes zoster', plainEN: 'Shingles - painful rash caused by reactivation of the chickenpox virus', plainES: 'Culebrilla - sarpullido doloroso causado por la reactivación del virus de la varicela' },
  { term: 'Tinea', plainEN: 'Fungal infection of the skin (ringworm, athlete\'s foot)', plainES: 'Infección por hongos de la piel (tiña, pie de atleta)' },
  { term: 'Alopecia', plainEN: 'Hair loss from any cause', plainES: 'Pérdida de cabello por cualquier causa' },
  { term: 'Acne vulgaris', plainEN: 'Common acne - clogged pores causing pimples', plainES: 'Acné común - poros obstruidos que causan granos' },
  { term: 'Rosacea', plainEN: 'Chronic skin condition causing redness and visible blood vessels on the face', plainES: 'Condición crónica de la piel que causa enrojecimiento y vasos sanguíneos visibles en la cara' },
  { term: 'Vitiligo', plainEN: 'Loss of skin color in patches', plainES: 'Pérdida del color de la piel en parches' },
  { term: 'Skin biopsy', plainEN: 'Removing a small piece of skin for testing', plainES: 'Extracción de un pequeño trozo de piel para análisis' },
  { term: 'Cryotherapy', plainEN: 'Freezing treatment to remove abnormal tissue', plainES: 'Tratamiento de congelación para eliminar tejido anormal' },

  // ──────────────────────────────────────────────
  // Ophthalmology (10)
  // ──────────────────────────────────────────────
  { term: 'Cataracts', plainEN: 'Clouding of the eye lens causing blurry vision', plainES: 'Opacidad del cristalino del ojo que causa visión borrosa' },
  { term: 'Glaucoma', plainEN: 'Eye condition with increased pressure that can damage the optic nerve', plainES: 'Condición del ojo con presión aumentada que puede dañar el nervio óptico' },
  { term: 'Macular degeneration', plainEN: 'Loss of central vision due to damage to the retina', plainES: 'Pérdida de la visión central debido a daño en la retina' },
  { term: 'Diabetic retinopathy', plainEN: 'Diabetes-related damage to blood vessels in the retina', plainES: 'Daño relacionado con la diabetes a los vasos sanguíneos de la retina' },
  { term: 'Conjunctivitis', plainEN: 'Pink eye - inflammation of the clear membrane over the white of the eye', plainES: 'Ojo rosado - inflamación de la membrana transparente sobre la parte blanca del ojo' },
  { term: 'Retinal detachment', plainEN: 'Retina pulls away from the back of the eye, a medical emergency', plainES: 'La retina se despega de la parte posterior del ojo, una emergencia médica' },
  { term: 'Strabismus', plainEN: 'Misalignment of the eyes (crossed eyes)', plainES: 'Desalineación de los ojos (ojos cruzados)' },
  { term: 'Amblyopia', plainEN: 'Lazy eye - reduced vision in one eye from abnormal development', plainES: 'Ojo perezoso - visión reducida en un ojo por desarrollo anormal' },
  { term: 'Keratitis', plainEN: 'Inflammation of the cornea', plainES: 'Inflamación de la córnea' },
  { term: 'Fundoscopy', plainEN: 'Examination of the back of the eye using a special light', plainES: 'Examen de la parte posterior del ojo usando una luz especial' },

  // ──────────────────────────────────────────────
  // Psychiatry / Mental Health (15)
  // ──────────────────────────────────────────────
  { term: 'Major depressive disorder', plainEN: 'Persistent sadness and loss of interest affecting daily life', plainES: 'Tristeza persistente y pérdida de interés que afecta la vida diaria' },
  { term: 'Generalized anxiety disorder', plainEN: 'Excessive, uncontrollable worry about everyday things', plainES: 'Preocupación excesiva e incontrolable sobre cosas cotidianas' },
  { term: 'Panic disorder', plainEN: 'Recurring unexpected panic attacks with intense fear', plainES: 'Ataques de pánico recurrentes e inesperados con miedo intenso' },
  { term: 'Bipolar disorder', plainEN: 'Mood disorder with episodes of extreme highs and lows', plainES: 'Trastorno del ánimo con episodios de altos y bajos extremos' },
  { term: 'Schizophrenia', plainEN: 'Severe mental disorder affecting thinking, feeling, and behavior', plainES: 'Trastorno mental severo que afecta el pensamiento, los sentimientos y el comportamiento' },
  { term: 'Post-traumatic stress disorder', plainEN: 'Mental health condition triggered by experiencing a terrifying event', plainES: 'Condición de salud mental desencadenada por experimentar un evento aterrador' },
  { term: 'Obsessive-compulsive disorder', plainEN: 'Unwanted repetitive thoughts and behaviors', plainES: 'Pensamientos y comportamientos repetitivos no deseados' },
  { term: 'Attention deficit hyperactivity disorder', plainEN: 'Difficulty paying attention, hyperactivity, and impulsive behavior', plainES: 'Dificultad para prestar atención, hiperactividad y comportamiento impulsivo' },
  { term: 'Anorexia nervosa', plainEN: 'Eating disorder with extreme food restriction and fear of gaining weight', plainES: 'Trastorno alimentario con restricción extrema de alimentos y miedo a ganar peso' },
  { term: 'Bulimia nervosa', plainEN: 'Eating disorder with binge eating followed by purging', plainES: 'Trastorno alimentario con atracones seguidos de purgas' },
  { term: 'Substance use disorder', plainEN: 'Harmful pattern of drug or alcohol use leading to significant problems', plainES: 'Patrón dañino de uso de drogas o alcohol que lleva a problemas significativos' },
  { term: 'Insomnia', plainEN: 'Difficulty falling asleep or staying asleep', plainES: 'Dificultad para conciliar el sueño o mantenerlo' },
  { term: 'Psychosis', plainEN: 'Loss of contact with reality, may include hallucinations or delusions', plainES: 'Pérdida de contacto con la realidad, puede incluir alucinaciones o delirios' },
  { term: 'Cognitive behavioral therapy', plainEN: 'Talk therapy that helps identify and change negative thought patterns', plainES: 'Terapia del habla que ayuda a identificar y cambiar patrones de pensamiento negativos' },
  { term: 'Electroconvulsive therapy', plainEN: 'Treatment using electrical stimulation of the brain for severe depression', plainES: 'Tratamiento con estimulación eléctrica del cerebro para depresión severa' },

  // ──────────────────────────────────────────────
  // Obstetrics / Gynecology (15)
  // ──────────────────────────────────────────────
  { term: 'Preeclampsia', plainEN: 'Dangerous high blood pressure during pregnancy', plainES: 'Presión arterial alta peligrosa durante el embarazo' },
  { term: 'Eclampsia', plainEN: 'Seizures during pregnancy from severe preeclampsia', plainES: 'Convulsiones durante el embarazo por preeclampsia severa' },
  { term: 'Ectopic pregnancy', plainEN: 'Fertilized egg implants outside the uterus, usually in a fallopian tube', plainES: 'El óvulo fecundado se implanta fuera del útero, generalmente en una trompa de Falopio' },
  { term: 'Placenta previa', plainEN: 'Placenta covers the cervix, which can cause bleeding', plainES: 'La placenta cubre el cuello uterino, lo que puede causar sangrado' },
  { term: 'Gestational diabetes', plainEN: 'Diabetes that develops during pregnancy', plainES: 'Diabetes que se desarrolla durante el embarazo' },
  { term: 'Cesarean section', plainEN: 'Surgical delivery of a baby through an incision in the abdomen', plainES: 'Parto quirúrgico de un bebé a través de una incisión en el abdomen' },
  { term: 'Episiotomy', plainEN: 'Surgical cut to widen the vaginal opening during childbirth', plainES: 'Corte quirúrgico para ampliar la abertura vaginal durante el parto' },
  { term: 'Amniocentesis', plainEN: 'Taking a sample of fluid from around the baby for testing', plainES: 'Tomar una muestra de líquido alrededor del bebé para análisis' },
  { term: 'Endometriosis', plainEN: 'Tissue similar to the uterus lining grows outside the uterus', plainES: 'Tejido similar al revestimiento del útero crece fuera del útero' },
  { term: 'Uterine fibroids', plainEN: 'Non-cancerous growths in the wall of the uterus', plainES: 'Crecimientos no cancerosos en la pared del útero' },
  { term: 'Ovarian cyst', plainEN: 'Fluid-filled sac on or inside an ovary', plainES: 'Saco lleno de líquido en o dentro de un ovario' },
  { term: 'Pap smear', plainEN: 'Test to check for abnormal cells on the cervix', plainES: 'Prueba para detectar células anormales en el cuello uterino' },
  { term: 'Hysterectomy', plainEN: 'Surgery to remove the uterus', plainES: 'Cirugía para remover el útero' },
  { term: 'Menorrhagia', plainEN: 'Abnormally heavy or prolonged menstrual bleeding', plainES: 'Sangrado menstrual anormalmente abundante o prolongado' },
  { term: 'Dysmenorrhea', plainEN: 'Painful menstrual periods with severe cramping', plainES: 'Períodos menstruales dolorosos con calambres severos' },

  // ──────────────────────────────────────────────
  // Infectious Disease (20)
  // ──────────────────────────────────────────────
  { term: 'Sepsis', plainEN: 'Life-threatening response to infection spreading through the body', plainES: 'Respuesta potencialmente mortal a una infección que se propaga por el cuerpo' },
  { term: 'Septic shock', plainEN: 'Severe drop in blood pressure caused by sepsis', plainES: 'Caída severa de la presión arterial causada por sepsis' },
  { term: 'Bacteremia', plainEN: 'Bacteria present in the bloodstream', plainES: 'Presencia de bacterias en el torrente sanguíneo' },
  { term: 'Abscess', plainEN: 'Pocket of pus caused by a bacterial infection', plainES: 'Bolsa de pus causada por una infección bacteriana' },
  { term: 'Cellulitis', plainEN: 'Spreading bacterial skin infection', plainES: 'Infección bacteriana de la piel que se propaga' },
  { term: 'Osteomyelitis', plainEN: 'Infection of the bone', plainES: 'Infección del hueso' },
  { term: 'Endocarditis', plainEN: 'Infection of the heart valves', plainES: 'Infección de las válvulas del corazón' },
  { term: 'HIV', plainEN: 'Virus that attacks the immune system', plainES: 'Virus que ataca el sistema inmunológico' },
  { term: 'AIDS', plainEN: 'Advanced stage of HIV infection with severely weakened immune system', plainES: 'Etapa avanzada de la infección por VIH con sistema inmunológico severamente debilitado' },
  { term: 'Influenza', plainEN: 'The flu - respiratory infection caused by influenza viruses', plainES: 'La gripe - infección respiratoria causada por virus de la influenza' },
  { term: 'COVID-19', plainEN: 'Respiratory illness caused by the SARS-CoV-2 coronavirus', plainES: 'Enfermedad respiratoria causada por el coronavirus SARS-CoV-2' },
  { term: 'Hepatitis B', plainEN: 'Viral infection attacking the liver, can become chronic', plainES: 'Infección viral que ataca el hígado, puede volverse crónica' },
  { term: 'Hepatitis C', plainEN: 'Viral infection of the liver spread through blood contact', plainES: 'Infección viral del hígado transmitida por contacto con sangre' },
  { term: 'MRSA', plainEN: 'Antibiotic-resistant staph infection', plainES: 'Infección por estafilococo resistente a los antibióticos' },
  { term: 'C. difficile', plainEN: 'Bacterial infection causing severe diarrhea, often after antibiotic use', plainES: 'Infección bacteriana que causa diarrea severa, a menudo después del uso de antibióticos' },
  { term: 'Malaria', plainEN: 'Mosquito-borne disease caused by parasites infecting red blood cells', plainES: 'Enfermedad transmitida por mosquitos causada por parásitos que infectan los glóbulos rojos' },
  { term: 'Dengue', plainEN: 'Mosquito-borne viral infection causing high fever and severe pain', plainES: 'Infección viral transmitida por mosquitos que causa fiebre alta y dolor severo' },
  { term: 'Prophylaxis', plainEN: 'Treatment given to prevent disease', plainES: 'Tratamiento dado para prevenir enfermedades' },
  { term: 'Quarantine', plainEN: 'Separating and restricting movement of people exposed to a contagious disease', plainES: 'Separar y restringir el movimiento de personas expuestas a una enfermedad contagiosa' },
  { term: 'Antimicrobial resistance', plainEN: 'Germs that no longer respond to the drugs designed to kill them', plainES: 'Gérmenes que ya no responden a los medicamentos diseñados para eliminarlos' },

  // ──────────────────────────────────────────────
  // General Medicine / Lab / Diagnostics (25)
  // ──────────────────────────────────────────────
  { term: 'Vital signs', plainEN: 'Basic body measurements: temperature, pulse, breathing rate, blood pressure', plainES: 'Mediciones corporales básicas: temperatura, pulso, frecuencia respiratoria, presión arterial' },
  { term: 'Triage', plainEN: 'Sorting patients by urgency to determine treatment priority', plainES: 'Clasificación de pacientes por urgencia para determinar prioridad de tratamiento' },
  { term: 'Prognosis', plainEN: 'Expected course and outcome of a disease', plainES: 'Curso esperado y resultado de una enfermedad' },
  { term: 'Differential diagnosis', plainEN: 'List of possible conditions that could explain a patient\'s symptoms', plainES: 'Lista de posibles condiciones que podrían explicar los síntomas del paciente' },
  { term: 'Etiology', plainEN: 'The cause or origin of a disease', plainES: 'La causa u origen de una enfermedad' },
  { term: 'Pathogenesis', plainEN: 'How a disease develops and progresses in the body', plainES: 'Cómo una enfermedad se desarrolla y progresa en el cuerpo' },
  { term: 'Comorbidity', plainEN: 'Having two or more diseases at the same time', plainES: 'Tener dos o más enfermedades al mismo tiempo' },
  { term: 'Contraindication', plainEN: 'Reason a treatment or procedure should not be used', plainES: 'Razón por la que un tratamiento o procedimiento no debe usarse' },
  { term: 'Iatrogenic', plainEN: 'Illness or complication caused by medical treatment', plainES: 'Enfermedad o complicación causada por tratamiento médico' },
  { term: 'Idiopathic', plainEN: 'Disease with no known cause', plainES: 'Enfermedad sin causa conocida' },
  { term: 'Prophylactic', plainEN: 'Preventive treatment to stop disease before it starts', plainES: 'Tratamiento preventivo para detener la enfermedad antes de que comience' },
  { term: 'Asymptomatic', plainEN: 'Having a disease but showing no symptoms', plainES: 'Tener una enfermedad pero no mostrar síntomas' },
  { term: 'Chronic', plainEN: 'Long-lasting condition, often lifelong', plainES: 'Condición de larga duración, a menudo de por vida' },
  { term: 'Acute', plainEN: 'Sudden onset, often severe but short-lived', plainES: 'Inicio repentino, a menudo severo pero de corta duración' },
  { term: 'Edema', plainEN: 'Swelling caused by excess fluid trapped in body tissues', plainES: 'Hinchazón causada por exceso de líquido atrapado en los tejidos del cuerpo' },
  { term: 'Inflammation', plainEN: 'Body\'s response to injury or infection causing redness, heat, and swelling', plainES: 'Respuesta del cuerpo a lesiones o infecciones que causa enrojecimiento, calor e hinchazón' },
  { term: 'Necrosis', plainEN: 'Death of body tissue', plainES: 'Muerte del tejido corporal' },
  { term: 'Ischemia', plainEN: 'Reduced blood flow to a part of the body', plainES: 'Flujo sanguíneo reducido a una parte del cuerpo' },
  { term: 'Embolism', plainEN: 'Blockage in a blood vessel caused by a blood clot or other material', plainES: 'Bloqueo en un vaso sanguíneo causado por un coágulo u otro material' },
  { term: 'Hemorrhage', plainEN: 'Excessive bleeding from a damaged blood vessel', plainES: 'Sangrado excesivo de un vaso sanguíneo dañado' },
  { term: 'Shock', plainEN: 'Life-threatening condition where blood flow is dangerously low', plainES: 'Condición potencialmente mortal donde el flujo sanguíneo es peligrosamente bajo' },
  { term: 'Anaphylaxis', plainEN: 'Severe, life-threatening allergic reaction', plainES: 'Reacción alérgica severa y potencialmente mortal' },
  { term: 'MRI', plainEN: 'Magnetic resonance imaging - scan using magnets to create detailed body images', plainES: 'Imagen por resonancia magnética - escaneo con imanes para crear imágenes detalladas del cuerpo' },
  { term: 'CT scan', plainEN: 'Computed tomography - X-ray images combined to create cross-sectional views', plainES: 'Tomografía computarizada - imágenes de rayos X combinadas para crear vistas transversales' },
  { term: 'PET scan', plainEN: 'Positron emission tomography - imaging test showing how organs function', plainES: 'Tomografía por emisión de positrones - prueba de imagen que muestra cómo funcionan los órganos' },

  // ──────────────────────────────────────────────
  // Pediatrics (10)
  // ──────────────────────────────────────────────
  { term: 'Neonatal jaundice', plainEN: 'Yellowing of a newborn\'s skin from excess bilirubin', plainES: 'Coloración amarilla de la piel del recién nacido por exceso de bilirrubina' },
  { term: 'Croup', plainEN: 'Childhood infection causing a barking cough and difficulty breathing', plainES: 'Infección infantil que causa tos perruna y dificultad para respirar' },
  { term: 'RSV', plainEN: 'Respiratory syncytial virus - common lung infection in young children', plainES: 'Virus respiratorio sincitial - infección pulmonar común en niños pequeños' },
  { term: 'Kawasaki disease', plainEN: 'Illness causing inflammation of blood vessels in children', plainES: 'Enfermedad que causa inflamación de los vasos sanguíneos en niños' },
  { term: 'Febrile seizure', plainEN: 'Convulsion in a child triggered by a high fever', plainES: 'Convulsión en un niño desencadenada por fiebre alta' },
  { term: 'Failure to thrive', plainEN: 'Child not growing or gaining weight as expected', plainES: 'Niño que no crece o gana peso como se espera' },
  { term: 'Pyloric stenosis', plainEN: 'Narrowing of the stomach outlet in infants, causing vomiting', plainES: 'Estrechamiento de la salida del estómago en bebés, causando vómitos' },
  { term: 'Intussusception', plainEN: 'Part of the intestine slides into an adjacent section, blocking it', plainES: 'Parte del intestino se desliza dentro de una sección adyacente, bloqueándola' },
  { term: 'Congenital heart defect', plainEN: 'Heart problem present at birth', plainES: 'Problema cardíaco presente al nacer' },
  { term: 'Apgar score', plainEN: 'Quick test at birth to check the baby\'s physical condition', plainES: 'Prueba rápida al nacer para verificar la condición física del bebé' },

  // ──────────────────────────────────────────────
  // ENT / Otolaryngology (10)
  // ──────────────────────────────────────────────
  { term: 'Otitis media', plainEN: 'Middle ear infection, common in children', plainES: 'Infección del oído medio, común en niños' },
  { term: 'Otitis externa', plainEN: 'Swimmer\'s ear - infection of the outer ear canal', plainES: 'Oído de nadador - infección del canal auditivo externo' },
  { term: 'Sinusitis', plainEN: 'Inflammation of the sinuses causing congestion and facial pain', plainES: 'Inflamación de los senos paranasales que causa congestión y dolor facial' },
  { term: 'Tonsillitis', plainEN: 'Inflammation of the tonsils, usually from infection', plainES: 'Inflamación de las amígdalas, generalmente por infección' },
  { term: 'Laryngitis', plainEN: 'Inflammation of the voice box causing hoarseness', plainES: 'Inflamación de la laringe que causa ronquera' },
  { term: 'Deviated septum', plainEN: 'Wall between the nostrils is crooked, making breathing difficult', plainES: 'La pared entre las fosas nasales está torcida, dificultando la respiración' },
  { term: 'Tinnitus', plainEN: 'Ringing or buzzing sound in the ears', plainES: 'Sonido de zumbido o pitido en los oídos' },
  { term: 'Vertigo', plainEN: 'Spinning sensation, often from an inner ear problem', plainES: 'Sensación de giro, a menudo por un problema del oído interno' },
  { term: 'Tympanoplasty', plainEN: 'Surgery to repair a hole in the eardrum', plainES: 'Cirugía para reparar un agujero en el tímpano' },
  { term: 'Adenoidectomy', plainEN: 'Surgery to remove the adenoids', plainES: 'Cirugía para remover las adenoides' },

  // ──────────────────────────────────────────────
  // Allergy / Immunology (10)
  // ──────────────────────────────────────────────
  { term: 'Allergic rhinitis', plainEN: 'Hay fever - sneezing and runny nose from allergens', plainES: 'Rinitis alérgica - estornudos y secreción nasal por alérgenos' },
  { term: 'Angioedema', plainEN: 'Deep swelling beneath the skin, often around the eyes and lips', plainES: 'Hinchazón profunda debajo de la piel, a menudo alrededor de los ojos y labios' },
  { term: 'Autoimmune disease', plainEN: 'Immune system mistakenly attacks the body\'s own tissues', plainES: 'El sistema inmunológico ataca erróneamente los propios tejidos del cuerpo' },
  { term: 'Immunodeficiency', plainEN: 'Weakened immune system that cannot fight infections well', plainES: 'Sistema inmunológico debilitado que no puede combatir bien las infecciones' },
  { term: 'Systemic lupus erythematosus', plainEN: 'Lupus - immune system attacks many different body systems', plainES: 'Lupus - el sistema inmunológico ataca muchos sistemas diferentes del cuerpo' },
  { term: 'Scleroderma', plainEN: 'Hardening and tightening of the skin and connective tissues', plainES: 'Endurecimiento y estiramiento de la piel y los tejidos conectivos' },
  { term: 'Sjögren\'s syndrome', plainEN: 'Immune disorder causing dry eyes and dry mouth', plainES: 'Trastorno inmunológico que causa ojos secos y boca seca' },
  { term: 'Vasculitis', plainEN: 'Inflammation of blood vessels', plainES: 'Inflamación de los vasos sanguíneos' },
  { term: 'Epinephrine auto-injector', plainEN: 'EpiPen - emergency device to treat severe allergic reactions', plainES: 'EpiPen - dispositivo de emergencia para tratar reacciones alérgicas severas' },
  { term: 'Desensitization', plainEN: 'Gradually exposing the body to an allergen to reduce the allergic response', plainES: 'Exponer gradualmente el cuerpo a un alérgeno para reducir la respuesta alérgica' },

  // ──────────────────────────────────────────────
  // Emergency / Critical Care (10)
  // ──────────────────────────────────────────────
  { term: 'Cardiopulmonary resuscitation', plainEN: 'CPR - emergency procedure to restore breathing and blood flow', plainES: 'RCP - procedimiento de emergencia para restaurar la respiración y el flujo sanguíneo' },
  { term: 'Defibrillation', plainEN: 'Electric shock to restore normal heart rhythm', plainES: 'Descarga eléctrica para restaurar el ritmo cardíaco normal' },
  { term: 'Advanced life support', plainEN: 'Advanced emergency treatments including medications and airway management', plainES: 'Tratamientos de emergencia avanzados incluyendo medicamentos y manejo de vías aéreas' },
  { term: 'Glasgow Coma Scale', plainEN: 'Scale used to assess consciousness level after brain injury', plainES: 'Escala utilizada para evaluar el nivel de conciencia después de una lesión cerebral' },
  { term: 'Trauma', plainEN: 'Serious injury to the body from an accident or violence', plainES: 'Lesión grave al cuerpo por un accidente o violencia' },
  { term: 'Hemorrhagic shock', plainEN: 'Life-threatening condition from severe blood loss', plainES: 'Condición potencialmente mortal por pérdida severa de sangre' },
  { term: 'Tension pneumothorax', plainEN: 'Life-threatening condition where air is trapped in the chest cavity', plainES: 'Condición potencialmente mortal donde el aire queda atrapado en la cavidad torácica' },
  { term: 'Status epilepticus', plainEN: 'Prolonged seizure lasting more than 5 minutes, a medical emergency', plainES: 'Convulsión prolongada que dura más de 5 minutos, una emergencia médica' },
  { term: 'Code blue', plainEN: 'Hospital emergency alert for cardiac or respiratory arrest', plainES: 'Alerta de emergencia hospitalaria por paro cardíaco o respiratorio' },
  { term: 'Do not resuscitate', plainEN: 'Legal order to not perform CPR if the heart or breathing stops', plainES: 'Orden legal de no realizar RCP si el corazón o la respiración se detienen' },

  // ──────────────────────────────────────────────
  // Pharmacology (30)
  // ──────────────────────────────────────────────
  { term: 'Bioavailability', plainEN: 'Percentage of a drug that reaches the bloodstream when taken', plainES: 'Porcentaje de un medicamento que llega al torrente sanguíneo al tomarlo' },
  { term: 'Half-life', plainEN: 'Time it takes for half of a drug to be eliminated from the body', plainES: 'Tiempo que tarda en eliminarse la mitad de un medicamento del cuerpo' },
  { term: 'First-pass metabolism', plainEN: 'Drug is partially broken down by the liver before reaching the bloodstream', plainES: 'El medicamento es parcialmente descompuesto por el hígado antes de llegar al torrente sanguíneo' },
  { term: 'Therapeutic index', plainEN: 'Range between the effective dose and the toxic dose of a drug', plainES: 'Rango entre la dosis eficaz y la dosis tóxica de un medicamento' },
  { term: 'Loading dose', plainEN: 'Higher initial dose of a drug to quickly reach effective levels', plainES: 'Dosis inicial más alta de un medicamento para alcanzar rápidamente niveles eficaces' },
  { term: 'Maintenance dose', plainEN: 'Regular dose given to keep the drug at a steady level in the body', plainES: 'Dosis regular administrada para mantener el medicamento a un nivel estable en el cuerpo' },
  { term: 'Pharmacokinetics', plainEN: 'How the body absorbs, distributes, breaks down, and removes a drug', plainES: 'Cómo el cuerpo absorbe, distribuye, descompone y elimina un medicamento' },
  { term: 'Pharmacodynamics', plainEN: 'How a drug affects the body and produces its effects', plainES: 'Cómo un medicamento afecta al cuerpo y produce sus efectos' },
  { term: 'Agonist', plainEN: 'Drug that activates a receptor to produce a biological response', plainES: 'Medicamento que activa un receptor para producir una respuesta biológica' },
  { term: 'Antagonist', plainEN: 'Drug that blocks a receptor and prevents its activation', plainES: 'Medicamento que bloquea un receptor e impide su activación' },
  { term: 'Adverse drug reaction', plainEN: 'Unwanted or harmful effect caused by a medication', plainES: 'Efecto no deseado o dañino causado por un medicamento' },
  { term: 'Drug interaction', plainEN: 'One drug affecting how another drug works in the body', plainES: 'Un medicamento que afecta cómo funciona otro medicamento en el cuerpo' },
  { term: 'Steady state', plainEN: 'Point where the amount of drug entering the body equals the amount leaving', plainES: 'Punto donde la cantidad de medicamento que entra al cuerpo iguala la que sale' },
  { term: 'Trough level', plainEN: 'Lowest concentration of a drug in the blood before the next dose', plainES: 'Concentración más baja de un medicamento en la sangre antes de la siguiente dosis' },
  { term: 'Peak level', plainEN: 'Highest concentration of a drug in the blood after a dose', plainES: 'Concentración más alta de un medicamento en la sangre después de una dosis' },
  { term: 'Titration', plainEN: 'Gradually adjusting the dose of a drug to find the right amount', plainES: 'Ajustar gradualmente la dosis de un medicamento para encontrar la cantidad correcta' },
  { term: 'Polypharmacy', plainEN: 'Taking multiple medications at the same time', plainES: 'Tomar múltiples medicamentos al mismo tiempo' },
  { term: 'Black box warning', plainEN: 'Most serious FDA warning about dangerous side effects of a drug', plainES: 'Advertencia más seria de la FDA sobre efectos secundarios peligrosos de un medicamento' },
  { term: 'Anticoagulant', plainEN: 'Blood thinner - drug that prevents blood clots from forming', plainES: 'Anticoagulante - medicamento que previene la formación de coágulos' },
  { term: 'Antiplatelet', plainEN: 'Drug that prevents blood cells called platelets from clumping together', plainES: 'Medicamento que evita que las células sanguíneas llamadas plaquetas se agrupen' },
  { term: 'Beta blocker', plainEN: 'Drug that slows the heart rate and lowers blood pressure', plainES: 'Medicamento que reduce la frecuencia cardíaca y baja la presión arterial' },
  { term: 'ACE inhibitor', plainEN: 'Drug that relaxes blood vessels to lower blood pressure', plainES: 'Medicamento que relaja los vasos sanguíneos para bajar la presión arterial' },
  { term: 'Statin', plainEN: 'Drug that lowers cholesterol levels in the blood', plainES: 'Medicamento que reduce los niveles de colesterol en la sangre' },
  { term: 'NSAID', plainEN: 'Non-steroidal anti-inflammatory drug for pain and inflammation', plainES: 'Medicamento antiinflamatorio no esteroideo para el dolor y la inflamación' },
  { term: 'Corticosteroid', plainEN: 'Drug that reduces inflammation by mimicking natural hormones', plainES: 'Medicamento que reduce la inflamación imitando hormonas naturales' },
  { term: 'Bronchodilator', plainEN: 'Drug that opens the airways in the lungs to ease breathing', plainES: 'Medicamento que abre las vías respiratorias en los pulmones para facilitar la respiración' },
  { term: 'Diuretic', plainEN: 'Water pill - drug that helps the body get rid of excess fluid', plainES: 'Diurético - medicamento que ayuda al cuerpo a eliminar el exceso de líquido' },
  { term: 'Proton pump inhibitor', plainEN: 'Drug that reduces stomach acid production', plainES: 'Medicamento que reduce la producción de ácido estomacal' },
  { term: 'SSRI', plainEN: 'Selective serotonin reuptake inhibitor - antidepressant that increases serotonin', plainES: 'Inhibidor selectivo de la recaptación de serotonina - antidepresivo que aumenta la serotonina' },
  { term: 'Opioid', plainEN: 'Strong pain medication that carries a risk of addiction', plainES: 'Medicamento fuerte para el dolor que conlleva riesgo de adicción' },

  // ──────────────────────────────────────────────
  // Nutrition (20)
  // ──────────────────────────────────────────────
  { term: 'Glycemic index', plainEN: 'Measure of how quickly a food raises blood sugar levels', plainES: 'Medida de la rapidez con que un alimento eleva los niveles de azúcar en la sangre' },
  { term: 'Micronutrient', plainEN: 'Vitamin or mineral needed in small amounts for proper body function', plainES: 'Vitamina o mineral necesario en pequeñas cantidades para el funcionamiento adecuado del cuerpo' },
  { term: 'Macronutrient', plainEN: 'Nutrient needed in large amounts: protein, carbohydrates, or fat', plainES: 'Nutriente necesario en grandes cantidades: proteína, carbohidratos o grasa' },
  { term: 'Antioxidant', plainEN: 'Substance that protects cells from damage caused by free radicals', plainES: 'Sustancia que protege las células del daño causado por los radicales libres' },
  { term: 'Biotin', plainEN: 'B vitamin important for hair, skin, nails, and metabolism', plainES: 'Vitamina B importante para el cabello, la piel, las uñas y el metabolismo' },
  { term: 'Omega-3 fatty acids', plainEN: 'Healthy fats found in fish and nuts that support heart and brain health', plainES: 'Grasas saludables encontradas en pescado y nueces que apoyan la salud del corazón y el cerebro' },
  { term: 'Electrolyte', plainEN: 'Mineral in the body that carries an electric charge and regulates body functions', plainES: 'Mineral en el cuerpo que porta carga eléctrica y regula funciones corporales' },
  { term: 'Malnutrition', plainEN: 'Lack of proper nutrition from not eating enough or not eating the right foods', plainES: 'Falta de nutrición adecuada por no comer suficiente o no comer los alimentos correctos' },
  { term: 'Body mass index', plainEN: 'BMI - number calculated from height and weight used to screen for weight categories', plainES: 'IMC - número calculado a partir de la altura y el peso para clasificar categorías de peso' },
  { term: 'Caloric deficit', plainEN: 'Consuming fewer calories than the body uses, leading to weight loss', plainES: 'Consumir menos calorías de las que el cuerpo usa, lo que lleva a la pérdida de peso' },
  { term: 'Total parenteral nutrition', plainEN: 'Feeding through an IV when eating by mouth is not possible', plainES: 'Alimentación por vía intravenosa cuando no es posible comer por boca' },
  { term: 'Enteral nutrition', plainEN: 'Feeding through a tube placed in the stomach or intestine', plainES: 'Alimentación a través de un tubo colocado en el estómago o intestino' },
  { term: 'Folate', plainEN: 'B vitamin essential for cell growth, especially important during pregnancy', plainES: 'Vitamina B esencial para el crecimiento celular, especialmente importante durante el embarazo' },
  { term: 'Iron supplementation', plainEN: 'Taking extra iron to treat or prevent iron deficiency', plainES: 'Tomar hierro adicional para tratar o prevenir la deficiencia de hierro' },
  { term: 'Vitamin D deficiency', plainEN: 'Not enough vitamin D, which is needed for bone health and immune function', plainES: 'Insuficiente vitamina D, necesaria para la salud ósea y la función inmunológica' },
  { term: 'Ketosis', plainEN: 'Body burns fat for energy instead of carbohydrates', plainES: 'El cuerpo quema grasa para obtener energía en lugar de carbohidratos' },
  { term: 'Dyslipidemia', plainEN: 'Abnormal levels of fats like cholesterol or triglycerides in the blood', plainES: 'Niveles anormales de grasas como colesterol o triglicéridos en la sangre' },
  { term: 'Hyperkalemia', plainEN: 'Dangerously high potassium levels in the blood', plainES: 'Niveles peligrosamente altos de potasio en la sangre' },
  { term: 'Hyponatremia', plainEN: 'Dangerously low sodium levels in the blood', plainES: 'Niveles peligrosamente bajos de sodio en la sangre' },
  { term: 'Cachexia', plainEN: 'Severe weight loss and muscle wasting from serious illness', plainES: 'Pérdida severa de peso y desgaste muscular por enfermedad grave' },

  // ──────────────────────────────────────────────
  // Pathophysiology (25)
  // ──────────────────────────────────────────────
  { term: 'Fibrosis', plainEN: 'Thickening and scarring of tissue, often from chronic damage', plainES: 'Engrosamiento y cicatrización de tejido, a menudo por daño crónico' },
  { term: 'Stenosis', plainEN: 'Abnormal narrowing of a body passage or opening', plainES: 'Estrechamiento anormal de un conducto o abertura del cuerpo' },
  { term: 'Thrombosis', plainEN: 'Formation of a blood clot inside a blood vessel', plainES: 'Formación de un coágulo de sangre dentro de un vaso sanguíneo' },
  { term: 'Infarction', plainEN: 'Tissue death caused by blocked blood supply', plainES: 'Muerte de tejido causada por suministro de sangre bloqueado' },
  { term: 'Atrophy', plainEN: 'Wasting away or decrease in size of a body part or tissue', plainES: 'Desgaste o disminución del tamaño de una parte del cuerpo o tejido' },
  { term: 'Hypertrophy', plainEN: 'Increase in the size of an organ or tissue from cell enlargement', plainES: 'Aumento del tamaño de un órgano o tejido por agrandamiento celular' },
  { term: 'Hyperplasia', plainEN: 'Increase in the number of cells in a tissue or organ', plainES: 'Aumento del número de células en un tejido u órgano' },
  { term: 'Dysplasia', plainEN: 'Abnormal development or growth of cells or tissue', plainES: 'Desarrollo o crecimiento anormal de células o tejido' },
  { term: 'Metaplasia', plainEN: 'One type of mature cell changes into another type', plainES: 'Un tipo de célula madura cambia a otro tipo' },
  { term: 'Apoptosis', plainEN: 'Programmed cell death - normal process to remove damaged cells', plainES: 'Muerte celular programada - proceso normal para eliminar células dañadas' },
  { term: 'Gangrene', plainEN: 'Death of body tissue from loss of blood supply or serious infection', plainES: 'Muerte de tejido corporal por pérdida de suministro de sangre o infección grave' },
  { term: 'Abscess formation', plainEN: 'Body creates a walled-off pocket of pus to contain an infection', plainES: 'El cuerpo crea una bolsa de pus aislada para contener una infección' },
  { term: 'Granuloma', plainEN: 'Small area of inflammation from the immune system walling off a foreign substance', plainES: 'Pequeña área de inflamación por el sistema inmunológico que aísla una sustancia extraña' },
  { term: 'Effusion', plainEN: 'Abnormal buildup of fluid in a body cavity', plainES: 'Acumulación anormal de líquido en una cavidad corporal' },
  { term: 'Calcification', plainEN: 'Abnormal deposit of calcium in body tissues', plainES: 'Depósito anormal de calcio en los tejidos del cuerpo' },
  { term: 'Adhesion', plainEN: 'Bands of scar tissue that form between organs or tissues', plainES: 'Bandas de tejido cicatricial que se forman entre órganos o tejidos' },
  { term: 'Perforation', plainEN: 'Hole that forms through the wall of an organ', plainES: 'Agujero que se forma a través de la pared de un órgano' },
  { term: 'Obstruction', plainEN: 'Blockage that prevents normal flow through a body passage', plainES: 'Bloqueo que impide el flujo normal a través de un conducto corporal' },
  { term: 'Herniation', plainEN: 'Organ or tissue pushes through a weak spot in surrounding muscle or tissue', plainES: 'Un órgano o tejido empuja a través de un punto débil en el músculo o tejido circundante' },
  { term: 'Ulceration', plainEN: 'Open sore on the skin or mucous membrane that is slow to heal', plainES: 'Llaga abierta en la piel o membrana mucosa que tarda en sanar' },
  { term: 'Fistula', plainEN: 'Abnormal connection between two body parts that should not be connected', plainES: 'Conexión anormal entre dos partes del cuerpo que no deberían estar conectadas' },
  { term: 'Stricture', plainEN: 'Abnormal narrowing of a body passage caused by scarring', plainES: 'Estrechamiento anormal de un conducto corporal causado por cicatrización' },
  { term: 'Vasoconstriction', plainEN: 'Narrowing of blood vessels that reduces blood flow', plainES: 'Estrechamiento de los vasos sanguíneos que reduce el flujo sanguíneo' },
  { term: 'Vasodilation', plainEN: 'Widening of blood vessels that increases blood flow', plainES: 'Ensanchamiento de los vasos sanguíneos que aumenta el flujo sanguíneo' },
  { term: 'Cytokine storm', plainEN: 'Dangerous overreaction of the immune system releasing too many inflammatory signals', plainES: 'Reacción exagerada peligrosa del sistema inmunológico que libera demasiadas señales inflamatorias' },

  // ──────────────────────────────────────────────
  // Imaging (15)
  // ──────────────────────────────────────────────
  { term: 'Contrast enhancement', plainEN: 'Using a special dye to make certain areas show up more clearly on imaging', plainES: 'Uso de un tinte especial para que ciertas áreas se muestren más claramente en las imágenes' },
  { term: 'Radiolucent', plainEN: 'Area that appears dark on X-ray because it lets radiation pass through', plainES: 'Área que aparece oscura en la radiografía porque deja pasar la radiación' },
  { term: 'Radiopaque', plainEN: 'Area that appears white on X-ray because it blocks radiation', plainES: 'Área que aparece blanca en la radiografía porque bloquea la radiación' },
  { term: 'Hounsfield units', plainEN: 'Scale used in CT scans to measure tissue density', plainES: 'Escala utilizada en tomografías para medir la densidad del tejido' },
  { term: 'T1-weighted MRI', plainEN: 'MRI setting that shows fat as bright and fluid as dark', plainES: 'Configuración de resonancia que muestra la grasa brillante y el líquido oscuro' },
  { term: 'T2-weighted MRI', plainEN: 'MRI setting that shows fluid as bright, useful for detecting swelling', plainES: 'Configuración de resonancia que muestra el líquido brillante, útil para detectar hinchazón' },
  { term: 'Fluoroscopy', plainEN: 'Real-time X-ray imaging to watch movement inside the body', plainES: 'Imagen de rayos X en tiempo real para observar movimiento dentro del cuerpo' },
  { term: 'Ultrasound', plainEN: 'Imaging using sound waves to create pictures of structures inside the body', plainES: 'Imagen que usa ondas de sonido para crear imágenes de estructuras dentro del cuerpo' },
  { term: 'Doppler ultrasound', plainEN: 'Ultrasound that measures blood flow through vessels', plainES: 'Ultrasonido que mide el flujo sanguíneo a través de los vasos' },
  { term: 'Mammography', plainEN: 'X-ray of the breast used to screen for breast cancer', plainES: 'Radiografía del seno utilizada para detectar cáncer de mama' },
  { term: 'Angiography', plainEN: 'Imaging test that uses dye to see blood vessels on X-ray', plainES: 'Prueba de imagen que usa tinte para ver los vasos sanguíneos en radiografías' },
  { term: 'Bone density scan', plainEN: 'DEXA scan - measures bone strength to check for osteoporosis', plainES: 'Escaneo DEXA - mide la fortaleza ósea para detectar osteoporosis' },
  { term: 'Nuclear medicine scan', plainEN: 'Imaging using small amounts of radioactive material to diagnose disease', plainES: 'Imagen que usa pequeñas cantidades de material radiactivo para diagnosticar enfermedades' },
  { term: 'Contrast allergy', plainEN: 'Allergic reaction to the dye used in imaging tests', plainES: 'Reacción alérgica al tinte utilizado en pruebas de imagen' },
  { term: 'Incidental finding', plainEN: 'Unexpected abnormality discovered on an imaging test done for another reason', plainES: 'Anomalía inesperada descubierta en una prueba de imagen realizada por otra razón' },

  // ──────────────────────────────────────────────
  // Surgical (20)
  // ──────────────────────────────────────────────
  { term: 'Laparoscopic surgery', plainEN: 'Minimally invasive surgery using small incisions and a camera', plainES: 'Cirugía mínimamente invasiva usando pequeñas incisiones y una cámara' },
  { term: 'Debridement', plainEN: 'Removing dead, damaged, or infected tissue to help healing', plainES: 'Eliminación de tejido muerto, dañado o infectado para ayudar a la curación' },
  { term: 'Anastomosis', plainEN: 'Surgical connection between two body structures, such as intestines or blood vessels', plainES: 'Conexión quirúrgica entre dos estructuras corporales, como intestinos o vasos sanguíneos' },
  { term: 'Resection', plainEN: 'Surgical removal of part or all of an organ or tissue', plainES: 'Extirpación quirúrgica de parte o todo un órgano o tejido' },
  { term: 'Ablation', plainEN: 'Destroying abnormal tissue using heat, cold, or other energy', plainES: 'Destrucción de tejido anormal usando calor, frío u otra energía' },
  { term: 'Excision', plainEN: 'Cutting out or removing tissue surgically', plainES: 'Cortar o remover tejido quirúrgicamente' },
  { term: 'Incision and drainage', plainEN: 'Cutting open and draining an abscess or fluid collection', plainES: 'Cortar y drenar un absceso o acumulación de líquido' },
  { term: 'Cauterization', plainEN: 'Burning tissue to stop bleeding or remove abnormal tissue', plainES: 'Quemar tejido para detener el sangrado o eliminar tejido anormal' },
  { term: 'Grafting', plainEN: 'Transplanting tissue from one area to another', plainES: 'Trasplantar tejido de un área a otra' },
  { term: 'Thoracotomy', plainEN: 'Surgery that opens the chest to access the lungs, heart, or other structures', plainES: 'Cirugía que abre el pecho para acceder a los pulmones, corazón u otras estructuras' },
  { term: 'Laparotomy', plainEN: 'Surgery that opens the abdomen to examine or treat organs inside', plainES: 'Cirugía que abre el abdomen para examinar o tratar los órganos internos' },
  { term: 'Cholecystectomy', plainEN: 'Surgery to remove the gallbladder', plainES: 'Cirugía para remover la vesícula biliar' },
  { term: 'Appendectomy', plainEN: 'Surgery to remove the appendix', plainES: 'Cirugía para remover el apéndice' },
  { term: 'Colectomy', plainEN: 'Surgery to remove all or part of the colon', plainES: 'Cirugía para remover todo o parte del colon' },
  { term: 'Nephrectomy', plainEN: 'Surgery to remove a kidney', plainES: 'Cirugía para remover un riñón' },
  { term: 'Thyroidectomy', plainEN: 'Surgery to remove all or part of the thyroid gland', plainES: 'Cirugía para remover toda o parte de la glándula tiroides' },
  { term: 'General anesthesia', plainEN: 'Medicine that puts you into a deep sleep for surgery', plainES: 'Medicamento que lo pone en un sueño profundo para la cirugía' },
  { term: 'Local anesthesia', plainEN: 'Medicine that numbs a small area of the body for a procedure', plainES: 'Medicamento que adormece una pequeña área del cuerpo para un procedimiento' },
  { term: 'Postoperative', plainEN: 'The period of care and recovery after surgery', plainES: 'El período de cuidado y recuperación después de la cirugía' },
  { term: 'Surgical margin', plainEN: 'Edge of tissue removed during surgery, checked for cancer cells', plainES: 'Borde del tejido removido durante la cirugía, revisado por células cancerosas' },

  // ──────────────────────────────────────────────
  // Laboratory (20)
  // ──────────────────────────────────────────────
  { term: 'Sensitivity', plainEN: 'How well a test detects a condition when it is truly present', plainES: 'Qué tan bien una prueba detecta una condición cuando realmente está presente' },
  { term: 'Specificity', plainEN: 'How well a test correctly identifies people who do not have a condition', plainES: 'Qué tan bien una prueba identifica correctamente a personas que no tienen una condición' },
  { term: 'Titer', plainEN: 'Measurement of the amount of antibodies in the blood', plainES: 'Medición de la cantidad de anticuerpos en la sangre' },
  { term: 'Assay', plainEN: 'Laboratory test to measure the presence or amount of a substance', plainES: 'Prueba de laboratorio para medir la presencia o cantidad de una sustancia' },
  { term: 'Culture and sensitivity', plainEN: 'Lab test that grows bacteria and tests which antibiotics kill them', plainES: 'Prueba de laboratorio que cultiva bacterias y analiza qué antibióticos las eliminan' },
  { term: 'Electrophoresis', plainEN: 'Lab technique that separates proteins or DNA by size and charge', plainES: 'Técnica de laboratorio que separa proteínas o ADN por tamaño y carga' },
  { term: 'Serology', plainEN: 'Blood test that looks for antibodies to detect infections or immune responses', plainES: 'Análisis de sangre que busca anticuerpos para detectar infecciones o respuestas inmunes' },
  { term: 'Urinalysis', plainEN: 'Test that examines the content of urine for signs of disease', plainES: 'Prueba que examina el contenido de la orina en busca de signos de enfermedad' },
  { term: 'Hemoglobin', plainEN: 'Protein in red blood cells that carries oxygen throughout the body', plainES: 'Proteína en los glóbulos rojos que transporta oxígeno por todo el cuerpo' },
  { term: 'Hematocrit', plainEN: 'Percentage of blood volume made up of red blood cells', plainES: 'Porcentaje del volumen sanguíneo compuesto por glóbulos rojos' },
  { term: 'Creatinine', plainEN: 'Waste product measured in blood to check how well the kidneys work', plainES: 'Producto de desecho medido en sangre para verificar qué tan bien funcionan los riñones' },
  { term: 'Blood urea nitrogen', plainEN: 'BUN - blood test measuring waste products to assess kidney function', plainES: 'BUN - análisis de sangre que mide productos de desecho para evaluar la función renal' },
  { term: 'Liver function tests', plainEN: 'Blood tests that check how well the liver is working', plainES: 'Análisis de sangre que verifican qué tan bien funciona el hígado' },
  { term: 'Lipid panel', plainEN: 'Blood test measuring cholesterol and triglyceride levels', plainES: 'Análisis de sangre que mide los niveles de colesterol y triglicéridos' },
  { term: 'Troponin', plainEN: 'Protein released into the blood when the heart muscle is damaged', plainES: 'Proteína liberada en la sangre cuando el músculo cardíaco está dañado' },
  { term: 'Prothrombin time', plainEN: 'Blood test measuring how long it takes blood to clot', plainES: 'Análisis de sangre que mide cuánto tarda la sangre en coagularse' },
  { term: 'INR', plainEN: 'International normalized ratio - standardized measure of blood clotting time', plainES: 'Razón normalizada internacional - medida estandarizada del tiempo de coagulación sanguínea' },
  { term: 'Blood gas analysis', plainEN: 'Test measuring oxygen, carbon dioxide, and acid levels in the blood', plainES: 'Prueba que mide niveles de oxígeno, dióxido de carbono y ácido en la sangre' },
  { term: 'Erythrocyte sedimentation rate', plainEN: 'ESR - blood test that detects inflammation in the body', plainES: 'VSG - análisis de sangre que detecta inflamación en el cuerpo' },
  { term: 'C-reactive protein', plainEN: 'CRP - blood marker that rises when there is inflammation in the body', plainES: 'PCR - marcador sanguíneo que se eleva cuando hay inflamación en el cuerpo' },

  // ──────────────────────────────────────────────
  // Genetics (15)
  // ──────────────────────────────────────────────
  { term: 'Allele', plainEN: 'One of two or more versions of a gene inherited from each parent', plainES: 'Una de dos o más versiones de un gen heredadas de cada padre' },
  { term: 'Phenotype', plainEN: 'Observable physical characteristics resulting from a person\'s genes', plainES: 'Características físicas observables resultantes de los genes de una persona' },
  { term: 'Genotype', plainEN: 'The genetic makeup of an individual for a particular trait', plainES: 'La composición genética de un individuo para un rasgo particular' },
  { term: 'Penetrance', plainEN: 'Likelihood that a gene mutation will actually cause the associated condition', plainES: 'Probabilidad de que una mutación genética cause realmente la condición asociada' },
  { term: 'Autosomal dominant', plainEN: 'Genetic trait that only needs one copy of the gene to be expressed', plainES: 'Rasgo genético que solo necesita una copia del gen para expresarse' },
  { term: 'Autosomal recessive', plainEN: 'Genetic trait that requires two copies of the gene to be expressed', plainES: 'Rasgo genético que requiere dos copias del gen para expresarse' },
  { term: 'X-linked', plainEN: 'Genetic condition caused by a mutation on the X chromosome', plainES: 'Condición genética causada por una mutación en el cromosoma X' },
  { term: 'Chromosomal abnormality', plainEN: 'Missing, extra, or irregular chromosomes causing genetic conditions', plainES: 'Cromosomas faltantes, extras o irregulares que causan condiciones genéticas' },
  { term: 'Carrier', plainEN: 'Person who has one copy of a gene mutation but does not show symptoms', plainES: 'Persona que tiene una copia de una mutación genética pero no muestra síntomas' },
  { term: 'Genetic counseling', plainEN: 'Professional guidance about inherited conditions and genetic testing', plainES: 'Orientación profesional sobre condiciones hereditarias y pruebas genéticas' },
  { term: 'Gene mutation', plainEN: 'Change in the DNA sequence of a gene that may affect how it works', plainES: 'Cambio en la secuencia de ADN de un gen que puede afectar cómo funciona' },
  { term: 'Pharmacogenomics', plainEN: 'Using genetic information to predict how a person will respond to drugs', plainES: 'Usar información genética para predecir cómo una persona responderá a los medicamentos' },
  { term: 'Trisomy', plainEN: 'Having three copies of a chromosome instead of the usual two', plainES: 'Tener tres copias de un cromosoma en lugar de las dos habituales' },
  { term: 'BRCA mutation', plainEN: 'Gene mutation that significantly increases risk of breast and ovarian cancer', plainES: 'Mutación genética que aumenta significativamente el riesgo de cáncer de mama y ovario' },
  { term: 'Epigenetics', plainEN: 'Changes in gene activity that do not alter the DNA sequence itself', plainES: 'Cambios en la actividad genética que no alteran la secuencia de ADN en sí' },

  // ──────────────────────────────────────────────
  // Infectious Disease - additional (15)
  // ──────────────────────────────────────────────
  { term: 'Viremia', plainEN: 'Presence of viruses in the bloodstream', plainES: 'Presencia de virus en el torrente sanguíneo' },
  { term: 'Nosocomial infection', plainEN: 'Infection acquired while staying in a hospital', plainES: 'Infección adquirida durante la estancia en un hospital' },
  { term: 'Empiric therapy', plainEN: 'Treatment started before the exact cause of infection is identified', plainES: 'Tratamiento iniciado antes de identificar la causa exacta de la infección' },
  { term: 'Minimum inhibitory concentration', plainEN: 'MIC - lowest amount of an antibiotic that stops bacteria from growing', plainES: 'CMI - cantidad más baja de un antibiótico que detiene el crecimiento de bacterias' },
  { term: 'Antibiogram', plainEN: 'Summary of bacteria resistance patterns to help choose the right antibiotic', plainES: 'Resumen de patrones de resistencia bacteriana para ayudar a elegir el antibiótico correcto' },
  { term: 'Broad-spectrum antibiotic', plainEN: 'Antibiotic that works against many different types of bacteria', plainES: 'Antibiótico que funciona contra muchos tipos diferentes de bacterias' },
  { term: 'Narrow-spectrum antibiotic', plainEN: 'Antibiotic that targets only specific types of bacteria', plainES: 'Antibiótico que solo ataca tipos específicos de bacterias' },
  { term: 'Superinfection', plainEN: 'New infection occurring during treatment for another infection', plainES: 'Nueva infección que ocurre durante el tratamiento de otra infección' },
  { term: 'Opportunistic infection', plainEN: 'Infection that occurs mainly in people with weakened immune systems', plainES: 'Infección que ocurre principalmente en personas con sistemas inmunológicos debilitados' },
  { term: 'Pandemic', plainEN: 'Disease outbreak that spreads across multiple countries or worldwide', plainES: 'Brote de enfermedad que se propaga por múltiples países o a nivel mundial' },
  { term: 'Endemic', plainEN: 'Disease regularly found in a particular region or population', plainES: 'Enfermedad que se encuentra regularmente en una región o población particular' },
  { term: 'Zoonotic', plainEN: 'Disease that can spread from animals to humans', plainES: 'Enfermedad que puede transmitirse de animales a humanos' },
  { term: 'Incubation period', plainEN: 'Time between exposure to a germ and the appearance of symptoms', plainES: 'Tiempo entre la exposición a un germen y la aparición de síntomas' },
  { term: 'Seroconversion', plainEN: 'Point when antibodies become detectable in the blood after infection', plainES: 'Punto en que los anticuerpos se hacen detectables en la sangre después de la infección' },
  { term: 'Viral load', plainEN: 'Amount of virus present in the blood', plainES: 'Cantidad de virus presente en la sangre' },

  // ──────────────────────────────────────────────
  // Pediatric - additional (10)
  // ──────────────────────────────────────────────
  { term: 'Growth percentile', plainEN: 'Ranking of a child\'s size compared to other children of the same age', plainES: 'Clasificación del tamaño de un niño comparado con otros niños de la misma edad' },
  { term: 'Fontanelle', plainEN: 'Soft spot on a baby\'s skull where the bones have not yet fused', plainES: 'Punto blando en el cráneo del bebé donde los huesos aún no se han fusionado' },
  { term: 'Meconium', plainEN: 'First stool passed by a newborn, dark and sticky', plainES: 'Primera deposición del recién nacido, oscura y pegajosa' },
  { term: 'Neonatal intensive care', plainEN: 'NICU - specialized hospital unit for newborns needing critical care', plainES: 'UCIN - unidad hospitalaria especializada para recién nacidos que necesitan cuidados críticos' },
  { term: 'Developmental milestone', plainEN: 'Skill or behavior most children can do by a certain age', plainES: 'Habilidad o comportamiento que la mayoría de los niños pueden hacer a cierta edad' },
  { term: 'Immunization schedule', plainEN: 'Recommended timeline for childhood vaccinations', plainES: 'Calendario recomendado para las vacunas infantiles' },
  { term: 'Jaundice in newborns', plainEN: 'Yellowing of a baby\'s skin from immature liver function', plainES: 'Coloración amarilla de la piel del bebé por función hepática inmadura' },
  { term: 'Cradle cap', plainEN: 'Crusty, scaly patches on a baby\'s scalp that are harmless', plainES: 'Parches costrosos y escamosos en el cuero cabelludo del bebé que son inofensivos' },
  { term: 'Pediatric dosing', plainEN: 'Drug doses calculated based on a child\'s weight or body surface area', plainES: 'Dosis de medicamentos calculadas según el peso o área de superficie corporal del niño' },
  { term: 'Neonatal screening', plainEN: 'Tests done on newborns to detect serious conditions early', plainES: 'Pruebas realizadas en recién nacidos para detectar condiciones graves tempranamente' },

  // ──────────────────────────────────────────────
  // Psychiatry - additional (15)
  // ──────────────────────────────────────────────
  { term: 'Affect', plainEN: 'Outward expression of emotion as observed by others', plainES: 'Expresión externa de la emoción observada por otros' },
  { term: 'Flat affect', plainEN: 'Showing little or no emotional expression', plainES: 'Mostrar poca o ninguna expresión emocional' },
  { term: 'Mania', plainEN: 'Period of abnormally elevated mood, energy, and activity', plainES: 'Período de estado de ánimo, energía y actividad anormalmente elevados' },
  { term: 'Anosognosia', plainEN: 'Inability to recognize that one has a mental illness', plainES: 'Incapacidad de reconocer que uno tiene una enfermedad mental' },
  { term: 'Anhedonia', plainEN: 'Inability to feel pleasure from activities normally enjoyed', plainES: 'Incapacidad de sentir placer de actividades que normalmente se disfrutan' },
  { term: 'Suicidal ideation', plainEN: 'Thinking about or planning suicide', plainES: 'Pensar en o planificar el suicidio' },
  { term: 'Delusion', plainEN: 'Firmly held false belief that does not change despite evidence', plainES: 'Creencia falsa firmemente sostenida que no cambia a pesar de la evidencia' },
  { term: 'Hallucination', plainEN: 'Seeing, hearing, or feeling things that are not really there', plainES: 'Ver, oír o sentir cosas que realmente no están ahí' },
  { term: 'Dissociation', plainEN: 'Feeling disconnected from your thoughts, feelings, or identity', plainES: 'Sentirse desconectado de sus pensamientos, sentimientos o identidad' },
  { term: 'Catatonia', plainEN: 'State of unresponsiveness with rigid posture or lack of movement', plainES: 'Estado de falta de respuesta con postura rígida o falta de movimiento' },
  { term: 'Dysthymia', plainEN: 'Persistent mild depression lasting two or more years', plainES: 'Depresión leve persistente que dura dos o más años' },
  { term: 'Akathisia', plainEN: 'Restlessness and inability to sit still, often a medication side effect', plainES: 'Inquietud e incapacidad de permanecer quieto, a menudo efecto secundario de un medicamento' },
  { term: 'Tardive dyskinesia', plainEN: 'Involuntary movements, especially of the face, from long-term medication use', plainES: 'Movimientos involuntarios, especialmente de la cara, por uso prolongado de medicamentos' },
  { term: 'Neuroleptic', plainEN: 'Antipsychotic medication used to treat severe mental illness', plainES: 'Medicamento antipsicótico utilizado para tratar enfermedades mentales graves' },
  { term: 'Therapeutic alliance', plainEN: 'Trust-based relationship between a patient and their mental health provider', plainES: 'Relación basada en la confianza entre un paciente y su proveedor de salud mental' },

  // ──────────────────────────────────────────────
  // General / Common Patient Terms (15)
  // ──────────────────────────────────────────────
  { term: 'Informed consent', plainEN: 'Patient agrees to treatment after understanding the risks and benefits', plainES: 'El paciente acepta el tratamiento después de entender los riesgos y beneficios' },
  { term: 'Second opinion', plainEN: 'Seeking advice from another doctor about a diagnosis or treatment plan', plainES: 'Buscar consejo de otro médico sobre un diagnóstico o plan de tratamiento' },
  { term: 'Advance directive', plainEN: 'Legal document stating your wishes for medical care if you cannot speak for yourself', plainES: 'Documento legal que establece sus deseos de atención médica si no puede hablar por sí mismo' },
  { term: 'Palliative', plainEN: 'Treatment focused on relieving symptoms rather than curing disease', plainES: 'Tratamiento enfocado en aliviar síntomas en lugar de curar la enfermedad' },
  { term: 'Hospice', plainEN: 'End-of-life care focused on comfort for patients with terminal illness', plainES: 'Cuidado al final de la vida enfocado en la comodidad de pacientes con enfermedad terminal' },
  { term: 'Outpatient', plainEN: 'Medical care that does not require an overnight hospital stay', plainES: 'Atención médica que no requiere una estancia hospitalaria nocturna' },
  { term: 'Inpatient', plainEN: 'Medical care requiring admission and overnight stay in a hospital', plainES: 'Atención médica que requiere ingreso y estancia nocturna en un hospital' },
  { term: 'Referral', plainEN: 'Being sent to a specialist doctor for further evaluation or treatment', plainES: 'Ser enviado a un médico especialista para evaluación o tratamiento adicional' },
  { term: 'Follow-up', plainEN: 'Return visit to check on progress after treatment or a procedure', plainES: 'Visita de retorno para verificar el progreso después de un tratamiento o procedimiento' },
  { term: 'Side effect', plainEN: 'Unwanted effect of a medication or treatment', plainES: 'Efecto no deseado de un medicamento o tratamiento' },
  { term: 'Generic drug', plainEN: 'Medication with the same active ingredient as a brand-name drug but usually cheaper', plainES: 'Medicamento con el mismo ingrediente activo que uno de marca pero generalmente más barato' },
  { term: 'Over-the-counter', plainEN: 'Medication you can buy without a prescription', plainES: 'Medicamento que puede comprar sin receta médica' },
  { term: 'Relapse', plainEN: 'Return of a disease or symptoms after a period of improvement', plainES: 'Regreso de una enfermedad o síntomas después de un período de mejora' },
  { term: 'Exacerbation', plainEN: 'Worsening or flare-up of symptoms of an existing condition', plainES: 'Empeoramiento o brote de síntomas de una condición existente' },
  { term: 'Baseline', plainEN: 'Initial measurements used for comparison during treatment', plainES: 'Mediciones iniciales utilizadas para comparación durante el tratamiento' },

  // ===== Healthcare Navigation =====
  { term: 'FQHC', plainEN: 'Federally Qualified Health Center - a community clinic that provides care regardless of ability to pay', plainES: 'Centro de Salud Calificado Federalmente - una clínica comunitaria que brinda atención sin importar la capacidad de pago' },
  { term: 'Sliding scale', plainEN: 'A payment system where costs are adjusted based on your income', plainES: 'Un sistema de pago donde los costos se ajustan según sus ingresos' },
  { term: 'Charity care', plainEN: 'Free or reduced-cost hospital care for patients who cannot afford to pay', plainES: 'Atención hospitalaria gratuita o de bajo costo para pacientes que no pueden pagar' },
  { term: 'Medicaid', plainEN: 'Government health insurance for people with limited income', plainES: 'Seguro de salud del gobierno para personas con ingresos limitados' },
  { term: 'CHIP', plainEN: 'Children\'s Health Insurance Program - low-cost coverage for children in families that earn too much for Medicaid', plainES: 'Programa de Seguro de Salud para Niños - cobertura de bajo costo para niños en familias que ganan demasiado para Medicaid' },
  { term: 'EMTALA', plainEN: 'Emergency Medical Treatment and Labor Act - law requiring emergency rooms to treat everyone regardless of ability to pay or immigration status', plainES: 'Ley de Tratamiento Médico de Emergencia - ley que requiere que las salas de emergencia traten a todos sin importar la capacidad de pago o estado migratorio' },
  { term: 'Medical interpreter', plainEN: 'A trained person who translates between languages during medical visits', plainES: 'Una persona capacitada que traduce entre idiomas durante visitas médicas' },
  { term: 'Prior authorization', plainEN: 'Approval from your insurance company before getting certain treatments or medications', plainES: 'Aprobación de su compañía de seguros antes de recibir ciertos tratamientos o medicamentos' },
  { term: 'Patient advocate', plainEN: 'A person who helps patients navigate the healthcare system and speak up for their needs', plainES: 'Una persona que ayuda a los pacientes a navegar el sistema de salud y hablar por sus necesidades' },

  // ===== Immigration Health =====
  { term: 'WIC', plainEN: 'Women, Infants, and Children program - provides food, nutrition education, and healthcare referrals', plainES: 'Programa de Mujeres, Bebés y Niños - proporciona alimentos, educación nutricional y referencias de atención médica' },
  { term: 'HIPAA', plainEN: 'Law that protects the privacy of your medical information', plainES: 'Ley que protege la privacidad de su información médica' },
  { term: 'Acculturative stress', plainEN: 'Stress from adapting to a new culture, language, and way of life', plainES: 'Estrés por adaptarse a una nueva cultura, idioma y forma de vida' },

  // ===== Environmental Health =====
  { term: 'Lead level', plainEN: 'Amount of lead found in the blood, measured in micrograms per deciliter', plainES: 'Cantidad de plomo encontrada en la sangre, medida en microgramos por decilitro' },
  { term: 'Azarcon', plainEN: 'A traditional Mexican remedy containing dangerous levels of lead', plainES: 'Un remedio tradicional mexicano que contiene niveles peligrosos de plomo' },
  { term: 'Greta', plainEN: 'A traditional remedy containing lead oxide, also known as azarcon', plainES: 'Un remedio tradicional que contiene óxido de plomo, también conocido como azarcón' },
  { term: 'Carbon monoxide', plainEN: 'An invisible, odorless gas that can cause serious illness or death', plainES: 'Un gas invisible e inodoro que puede causar enfermedad grave o muerte' },
  { term: 'Mold exposure', plainEN: 'Contact with mold spores that can cause breathing problems and allergies', plainES: 'Contacto con esporas de moho que pueden causar problemas respiratorios y alergias' },
  { term: 'AQI', plainEN: 'Air Quality Index - a number that tells you how clean or polluted the outdoor air is', plainES: 'Índice de Calidad del Aire - un número que indica qué tan limpio o contaminado está el aire exterior' },

  // ===== Traditional Medicine =====
  { term: 'Curanderismo', plainEN: 'Traditional healing practice in Latin American cultures using herbs, rituals, and spiritual methods', plainES: 'Práctica de sanación tradicional en culturas latinoamericanas usando hierbas, rituales y métodos espirituales' },
  { term: 'Drug interaction', plainEN: 'When one medicine or supplement affects how another medicine works', plainES: 'Cuando un medicamento o suplemento afecta cómo funciona otro medicamento' },
  { term: 'Herbal remedy', plainEN: 'Plant-based products used for health purposes', plainES: 'Productos a base de plantas utilizados con fines de salud' },

  // ===== Occupational Health =====
  { term: 'OSHA', plainEN: 'Occupational Safety and Health Administration - agency that protects workers\' safety', plainES: 'Administración de Seguridad y Salud Ocupacional - agencia que protege la seguridad de los trabajadores' },
  { term: 'Workers compensation', plainEN: 'Insurance that pays for medical care and lost wages when injured on the job', plainES: 'Seguro que paga la atención médica y salarios perdidos cuando se lesiona en el trabajo' },
  { term: 'Heat exhaustion', plainEN: 'Condition caused by the body overheating, with heavy sweating and weakness', plainES: 'Condición causada por el sobrecalentamiento del cuerpo, con sudoración excesiva y debilidad' },
  { term: 'Heat stroke', plainEN: 'A dangerous condition where body temperature rises above 104°F and the body can\'t cool down', plainES: 'Una condición peligrosa donde la temperatura del cuerpo sube por encima de 104°F y el cuerpo no puede enfriarse' },
  { term: 'Repetitive strain injury', plainEN: 'Pain from doing the same movement over and over, like typing or lifting', plainES: 'Dolor por hacer el mismo movimiento una y otra vez, como escribir o levantar' },

  // ===== Community Health Workers =====
  { term: 'Promotor de salud', plainEN: 'Community health worker who serves as a bridge between communities and healthcare services', plainES: 'Trabajador de salud comunitario que sirve como puente entre las comunidades y los servicios de salud' },
  { term: 'Motivational interviewing', plainEN: 'A counseling approach that helps people find their own motivation to make healthy changes', plainES: 'Un enfoque de consejería que ayuda a las personas a encontrar su propia motivación para hacer cambios saludables' },
  { term: 'Health screening', plainEN: 'Tests to check for diseases or conditions before symptoms appear', plainES: 'Pruebas para detectar enfermedades o condiciones antes de que aparezcan los síntomas' },
  { term: 'Cultural mediation', plainEN: 'Helping bridge cultural differences between patients and healthcare providers', plainES: 'Ayudar a cerrar las diferencias culturales entre pacientes y proveedores de salud' },

  // ===== Mental Health — Cultural =====
  { term: 'Stigma', plainEN: 'Negative attitudes and discrimination against people with certain conditions, especially mental health', plainES: 'Actitudes negativas y discriminación contra personas con ciertas condiciones, especialmente de salud mental' },
  { term: '988 Lifeline', plainEN: 'The national suicide and crisis hotline - call or text 988 for immediate help', plainES: 'La línea nacional de suicidio y crisis - llame o envíe un mensaje de texto al 988 para ayuda inmediata' },
  { term: 'Susto', plainEN: 'A cultural concept in Latin American communities describing illness caused by a frightening event', plainES: 'Un concepto cultural en comunidades latinoamericanas que describe una enfermedad causada por un evento aterrador' },
  { term: 'Nervios', plainEN: 'A cultural term in Latino communities for distress, anxiety, or emotional suffering', plainES: 'Un término cultural en comunidades latinas para angustia, ansiedad o sufrimiento emocional' },

  // ===== Nutrition =====
  { term: 'Food desert', plainEN: 'An area where it is hard to find affordable, healthy food nearby', plainES: 'Un área donde es difícil encontrar alimentos saludables y asequibles cerca' },
  { term: 'SNAP', plainEN: 'Supplemental Nutrition Assistance Program - government program that helps buy food (formerly food stamps)', plainES: 'Programa de Asistencia Nutricional Suplementaria - programa del gobierno que ayuda a comprar alimentos (antes estampillas de comida)' },
  { term: 'MyPlate', plainEN: 'USDA\'s guide showing how much of each food group to eat', plainES: 'Guía del USDA que muestra cuánto comer de cada grupo de alimentos (MiPlato)' },
  { term: 'Portion size', plainEN: 'The amount of food you actually eat at one time', plainES: 'La cantidad de comida que realmente come de una vez' },
];

/**
 * Look up the plain-language explanation for a medical term.
 * Returns explanations in both English and Spanish.
 * The search is case-insensitive.
 *
 * @param term - The medical term to look up
 * @returns The glossary entry, or undefined if not found
 */
export function getPlainLanguage(term: string): GlossaryEntry | undefined {
  const normalised = term.toLowerCase().trim();
  return MEDICAL_GLOSSARY.find(
    (entry) => entry.term.toLowerCase() === normalised,
  );
}
