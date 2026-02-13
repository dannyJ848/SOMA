/**
 * Radiografia de Torax / Chest X-Ray Interpretation
 *
 * Comprehensive educational content covering systematic chest X-ray
 * interpretation, normal anatomy, common pathological findings,
 * and clinical decision-making.
 *
 * Spanish-first with English translations.
 */

import { EducationalContent } from '../types';

export const radiografiaToraxChestXray: EducationalContent = {
  id: 'topic-chest-xray-interpretation',
  type: 'topic',
  name: 'Radiografia de Torax - Interpretacion Sistematica | Chest X-Ray - Systematic Interpretation',
  nameEs: 'Radiografia de Torax',
  alternateNames: [
    'CXR',
    'Chest Radiograph',
    'Rayos X de Torax',
    'Placa de Torax',
    'Rx de Torax',
    'PA and Lateral Chest',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Una radiografia de torax es una foto del interior de su pecho usando rayos X, que muestra los pulmones, el corazon y los huesos. | A chest X-ray is a picture of the inside of your chest using X-rays, showing the lungs, heart, and bones.',
      explanation: `## Que es una radiografia de torax? | What is a chest X-ray?

Una radiografia de torax es una de las pruebas medicas mas comunes. Usa una pequena cantidad de radiacion (rayos X) para tomar una foto del interior de su pecho. | A chest X-ray is one of the most common medical tests. It uses a small amount of radiation (X-rays) to take a picture of the inside of your chest.

### Que muestra? | What does it show?

- **Pulmones | Lungs:** Si hay infeccion (neumonia), liquido, o tumores | Whether there is infection (pneumonia), fluid, or tumors
- **Corazon | Heart:** Si el corazon esta agrandado o tiene forma anormal | Whether the heart is enlarged or abnormally shaped
- **Huesos | Bones:** Las costillas, la columna y los hombros | The ribs, spine, and shoulders
- **Tubos y cateteres | Tubes and lines:** Si estan colocados correctamente | Whether they are placed correctly

### Como se hace? | How is it done?

1. **Le piden pararse frente a la maquina | You are asked to stand in front of the machine**
2. **Coloca su pecho contra una placa | You place your chest against a plate**
3. **Respira profundo y aguanta la respiracion | You take a deep breath and hold it**
4. **La maquina toma la foto en menos de un segundo | The machine takes the picture in less than a second**
5. **No duele nada | It does not hurt at all**

### Preparacion | Preparation

- Quitese joyas metalicas y ropa con cierres | Remove metal jewelry and clothing with zippers
- Puede comer y beber normalmente | You can eat and drink normally
- Informe si esta embarazada o podria estarlo | Tell them if you are pregnant or might be

### Es seguro? | Is it safe?

Si. La cantidad de radiacion es muy pequena, similar a la que recibe del sol en unos pocos dias. | Yes. The amount of radiation is very small, similar to what you receive from the sun in a few days.

### Cuando se necesita? | When is it needed?

- Tos persistente | Persistent cough
- Dificultad para respirar | Difficulty breathing
- Dolor de pecho | Chest pain
- Fiebre con sospecha de neumonia | Fever with suspected pneumonia
- Revision antes de una cirugia | Check-up before surgery
- Seguimiento de condiciones conocidas | Follow-up of known conditions`,
      keyTerms: [
        {
          term: 'radiografia | X-ray',
          definition: 'Una foto del interior del cuerpo usando radiacion especial que puede pasar a traves de los tejidos blandos. | A picture of the inside of the body using special radiation that can pass through soft tissues.',
        },
        {
          term: 'rayos X | X-rays',
          definition: 'Un tipo de energia invisible que puede atravesar el cuerpo para crear imagenes de los huesos y organos internos. | A type of invisible energy that can pass through the body to create images of bones and internal organs.',
        },
        {
          term: 'pulmones | lungs',
          definition: 'Los dos organos grandes en el pecho que nos permiten respirar. | The two large organs in the chest that allow us to breathe.',
        },
        {
          term: 'radiacion | radiation',
          definition: 'Energia que viaja en ondas. Los rayos X usan una cantidad muy pequena y controlada. | Energy that travels in waves. X-rays use a very small, controlled amount.',
        },
      ],
      analogies: [
        'Una radiografia es como la sombra que hace su mano cuando la pone frente a una linterna: los huesos bloquean los rayos y aparecen blancos, mientras que el aire en los pulmones deja pasar los rayos y aparece negro. | An X-ray is like the shadow your hand makes when you hold it in front of a flashlight: bones block the rays and appear white, while air in the lungs lets the rays through and appears black.',
        'Piense en la radiografia como una foto con flash muy poderoso que puede ver a traves de la piel. | Think of an X-ray as a photo with a very powerful flash that can see through the skin.',
      ],
      examples: [
        'Una persona con tos y fiebre por una semana va al doctor y le toman una radiografia que muestra una mancha blanca en el pulmon derecho, indicando neumonia. | A person with a cough and fever for a week goes to the doctor and gets an X-ray that shows a white spot on the right lung, indicating pneumonia.',
        'Despues de una caida, le toman una radiografia de torax para verificar que no haya costillas rotas. | After a fall, a chest X-ray is taken to check for broken ribs.',
      ],
    },
    2: {
      level: 2,
      summary: 'La radiografia de torax es la modalidad de imagen mas frecuente, que requiere un enfoque sistematico para evaluar las estructuras del torax, incluyendo campos pulmonares, silueta cardiaca, mediastino y estructuras oseas. | The chest X-ray is the most frequently performed imaging modality, requiring a systematic approach to evaluate thoracic structures including lung fields, cardiac silhouette, mediastinum, and bony structures.',
      explanation: `## Fundamentos de la Radiografia de Torax | Chest X-Ray Fundamentals

### Tipos de proyecciones | Types of Views

**PA (Posteroanterior) | PA View:**
- El rayo entra por la espalda y sale por el frente | The beam enters from the back and exits through the front
- Es la vista estandar, paciente de pie | Standard view, patient standing
- Mejor evaluacion del tamano cardiaco | Best evaluation of heart size

**AP (Anteroposterior) | AP View:**
- El rayo entra por el frente | The beam enters from the front
- Se usa en pacientes en cama (portatil) | Used for bedridden patients (portable)
- El corazon se ve mas grande de lo que realmente es | The heart appears larger than it actually is

**Lateral | Lateral View:**
- Vista de perfil | Side view
- Ayuda a localizar lesiones en profundidad | Helps locate lesions in depth
- Evalua el espacio retroesternal y retrocardiaco | Evaluates retrosternal and retrocardiac space

### Enfoque Sistematico: ABCDE | Systematic Approach: ABCDE

Un metodo organizado para no olvidar nada: | An organized method to not miss anything:

**A - Airway (Via aerea):**
- Traquea centrada o desviada | Trachea centered or deviated
- Bronquios principales visibles | Main bronchi visible
- Carina en posicion normal | Carina in normal position

**B - Bones (Huesos):**
- Costillas: fracturas, lesiones liticas | Ribs: fractures, lytic lesions
- Clavicula: fracturas, articulaciones | Clavicle: fractures, joints
- Columna: alineacion, cuerpos vertebrales | Spine: alignment, vertebral bodies
- Escapulas y humeros | Scapulae and humeri

**C - Cardiac (Cardiaco):**
- Indice cardiotorACico (debe ser <50% en PA) | Cardiothoracic ratio (should be <50% on PA)
- Silueta cardiaca: forma y contornos | Cardiac silhouette: shape and contours
- Aorta: boton aortico, aorta descendente | Aorta: aortic knob, descending aorta

**D - Diaphragm (Diafragma):**
- Hemidiafragma derecho ligeramente mas alto | Right hemidiaphragm slightly higher
- Angulos costofrenicos agudos y claros | Costophrenic angles sharp and clear
- Aire libre subdiafragmatico (anormal) | Free air under diaphragm (abnormal)

**E - Everything else (Todo lo demas):**
- Campos pulmonares: opacidades, masas | Lung fields: opacities, masses
- Mediastino: ensanchamiento | Mediastinum: widening
- Tejidos blandos: enfisema subcutaneo | Soft tissues: subcutaneous emphysema
- Tubos, lineas y dispositivos | Tubes, lines, and devices

### Hallazgos Normales | Normal Findings

| Estructura | Normal | Anormal |
|-----------|--------|---------|
| Traquea | Central, ligeramente desviada a la derecha | Desviada significativamente |
| Corazon | <50% del ancho del torax en PA | >50% = cardiomegalia |
| Pulmones | Campos claros, marcas vasculares visibles | Opacidades, masas, consolidacion |
| Diafragma | Derecho ligeramente mas alto que izquierdo | Aplanado, elevado, aire libre debajo |
| Angulos costofrenicos | Agudos y claros | Borrados = derrame pleural |

### Hallazgos Comunes | Common Findings

- **Consolidacion | Consolidation:** Area blanca densa (neumonia) | Dense white area (pneumonia)
- **Derrame pleural | Pleural effusion:** Liquido que borra el angulo costofrenico | Fluid that blunts the costophrenic angle
- **Neumotorax | Pneumothorax:** Aire entre el pulmon y la pared toracica | Air between the lung and chest wall
- **Cardiomegalia | Cardiomegaly:** Corazon agrandado >50% | Enlarged heart >50%
- **Atelectasia | Atelectasis:** Colapso parcial del pulmon | Partial lung collapse`,
      keyTerms: [
        {
          term: 'PA (posteroanterior) | PA view',
          definition: 'Vista estandar donde los rayos X entran por la espalda. Proporciona la evaluacion mas precisa del tamano del corazon. | Standard view where X-rays enter from the back. Provides the most accurate heart size evaluation.',
          pronunciation: 'pos-teh-ro-an-teh-RIOR',
        },
        {
          term: 'indice cardiotorACico | cardiothoracic ratio',
          definition: 'La proporcion entre el ancho del corazon y el ancho del torax. Normal es menos del 50% en una radiografia PA. | The ratio of heart width to chest width. Normal is less than 50% on a PA film.',
        },
        {
          term: 'angulo costofrenico | costophrenic angle',
          definition: 'El angulo agudo donde el diafragma se encuentra con la pared toracica. Cuando se borra, sugiere derrame pleural. | The sharp angle where the diaphragm meets the chest wall. When blunted, it suggests pleural effusion.',
          pronunciation: 'cos-to-FREN-ico',
        },
        {
          term: 'consolidacion | consolidation',
          definition: 'Area del pulmon llena de liquido o pus en vez de aire, que aparece blanca en la radiografia. | Area of the lung filled with fluid or pus instead of air, appearing white on the X-ray.',
        },
        {
          term: 'neumotorax | pneumothorax',
          definition: 'Aire atrapado entre el pulmon y la pared del torax que causa colapso pulmonar parcial o completo. | Air trapped between the lung and chest wall causing partial or complete lung collapse.',
        },
      ],
      analogies: [
        'El enfoque ABCDE es como una lista de verificacion de un piloto antes de despegar: revisa cada sistema en orden para no olvidar nada importante. | The ABCDE approach is like a pilot\'s checklist before takeoff: checking each system in order so nothing important is missed.',
        'Un derrame pleural se ve como agua llenando el fondo de un vaso: el liquido se acumula en la parte mas baja por gravedad. | A pleural effusion looks like water filling the bottom of a glass: fluid accumulates at the lowest point due to gravity.',
      ],
    },
    3: {
      level: 3,
      summary: 'La interpretacion de la radiografia de torax integra conocimientos de fisica radiologica, anatomia topografica, y correlacion clinica para identificar patrones patologicos como opacidades alveolares, patrones intersticiales, masas, y anomalias mediastinicas. | Chest X-ray interpretation integrates knowledge of radiological physics, topographic anatomy, and clinical correlation to identify pathological patterns such as alveolar opacities, interstitial patterns, masses, and mediastinal abnormalities.',
      explanation: `## Fisica de la Radiografia | Radiograph Physics

### Produccion de Rayos X | X-Ray Production

Los rayos X se producen cuando electrones acelerados chocan contra un anodo de tungsteno. | X-rays are produced when accelerated electrons strike a tungsten anode.

- **Voltaje (kVp):** Controla la penetracion del rayo. Torax estandar: 110-120 kVp. | Controls beam penetration. Standard chest: 110-120 kVp.
- **Corriente (mAs):** Controla la cantidad de radiacion. | Controls the amount of radiation.
- **Distancia:** PA estandar a 180 cm (6 pies). AP portatil a ~100 cm. | Standard PA at 180 cm (6 feet). Portable AP at ~100 cm.

### Densidades Radiograficas | Radiographic Densities

Hay cinco densidades basicas, de mas blanco a mas negro: | There are five basic densities, from whitest to blackest:

| Densidad | Apariencia | Ejemplos |
|----------|-----------|----------|
| Metal | Blanco brillante | Protesis, clips quirurgicos | Metal | Bright white | Prostheses, surgical clips |
| Hueso/Calcio | Blanco | Costillas, calcificaciones | Bone/Calcium | White | Ribs, calcifications |
| Agua/Tejido blando | Gris | Corazon, higado, musculos | Water/Soft tissue | Gray | Heart, liver, muscles |
| Grasa | Gris oscuro | Grasa subcutanea, mediastinica | Fat | Dark gray | Subcutaneous, mediastinal fat |
| Aire/Gas | Negro | Pulmones, estomago | Air/Gas | Black | Lungs, stomach |

### Signos Radiologicos Fundamentales | Fundamental Radiological Signs

**Signo de la silueta | Silhouette sign:**
- Cuando dos estructuras de la misma densidad se tocan, su borde desaparece | When two structures of the same density touch, their border disappears
- Ejemplo: Opacidad que borra el borde cardiaco izquierdo = patologia en la lingula | Example: Opacity obscuring left heart border = lingula pathology
- Opacidad que borra el hemidiafragma derecho = patologia en el lobulo inferior derecho | Opacity obscuring right hemidiaphragm = right lower lobe pathology

**Broncograma aereo | Air bronchogram:**
- Bronquios llenos de aire visibles dentro de una opacidad pulmonar | Air-filled bronchi visible within a lung opacity
- Indica consolidacion alveolar (neumonia, edema) | Indicates alveolar consolidation (pneumonia, edema)

**Signo del menisco | Meniscus sign:**
- Curva concava del liquido pleural en la radiografia en bipedestacion | Concave curve of pleural fluid on upright radiograph
- Indica derrame pleural | Indicates pleural effusion

## Anatomia Radiografica Sistematica | Systematic Radiographic Anatomy

### Lobulos Pulmonares y Fisuras | Lung Lobes and Fissures

**Pulmon derecho (3 lobulos) | Right lung (3 lobes):**
- Lobulo superior derecho (LSD) | Right upper lobe (RUL)
- Lobulo medio derecho (LMD) | Right middle lobe (RML)
- Lobulo inferior derecho (LID) | Right lower lobe (RLL)
- Cisura mayor (oblicua) y cisura menor (horizontal) | Major (oblique) and minor (horizontal) fissure

**Pulmon izquierdo (2 lobulos) | Left lung (2 lobes):**
- Lobulo superior izquierdo (LSI) con lingula | Left upper lobe (LUL) with lingula
- Lobulo inferior izquierdo (LII) | Left lower lobe (LLL)
- Solo cisura mayor (oblicua) | Only major (oblique) fissure

### Patrones de Enfermedad Pulmonar | Patterns of Lung Disease

**Patron alveolar | Alveolar pattern:**
- Opacidades homogeneas, coalescentes | Homogeneous, coalescent opacities
- Broncograma aereo presente | Air bronchogram present
- Margenes mal definidos | Poorly defined margins
- Causas: Neumonia, edema, hemorragia | Causes: Pneumonia, edema, hemorrhage

**Patron intersticial | Interstitial pattern:**
- Lineas finas, patron reticular o reticulonodular | Fine lines, reticular or reticulonodular pattern
- Lineas de Kerley B (septales) | Kerley B lines (septal)
- Causas: Fibrosis pulmonar, edema intersticial, linfangitis | Causes: Pulmonary fibrosis, interstitial edema, lymphangitis

**Patron nodular | Nodular pattern:**
- Nodulos multiples de tamano variable | Multiple nodules of variable size
- Miliar (<3 mm): TB, fungica, metastasis | Miliary (<3 mm): TB, fungal, metastases
- Macronodular (>3 mm): Metastasis, infeccion, granulomas | Macronodular (>3 mm): Metastases, infection, granulomas

**Nodulo pulmonar solitario | Solitary pulmonary nodule:**
- <3 cm, rodeado de parenquima normal | <3 cm, surrounded by normal parenchyma
- Calcificacion benigna: Central, laminar, palomita de maiz | Benign calcification: Central, laminar, popcorn
- Sospecha de malignidad: Bordes espiculados, >3 cm, crecimiento | Malignancy suspicion: Spiculated borders, >3 cm, growth

## Mediastino | Mediastinum

### Compartimentos y Masas | Compartments and Masses

**Mediastino anterior | Anterior mediastinum:**
- "4 T": Timoma, Tiroides, Teratoma, Terrible linfoma | "4 T's": Thymoma, Thyroid, Teratoma, Terrible lymphoma

**Mediastino medio | Middle mediastinum:**
- Linfadenopatia, quistes broncogenicos, anomalias vasculares | Lymphadenopathy, bronchogenic cysts, vascular anomalies

**Mediastino posterior | Posterior mediastinum:**
- Tumores neurogenicos, anomalias esofagicas, lesiones vertebrales | Neurogenic tumors, esophageal anomalies, vertebral lesions

## Evaluacion de Dispositivos | Device Evaluation

| Dispositivo | Posicion Correcta |
|-------------|------------------|
| Tubo endotraqueal | 3-5 cm sobre la carina | Endotracheal tube | 3-5 cm above carina |
| Cateter venoso central | Punta en union cavo-atrial o VCS distal | Central line | Tip at cavoatrial junction or distal SVC |
| Balon de contrapulsacion | Punta justo distal al origen de la subclavia izquierda | IABP | Tip just distal to left subclavian origin |
| Sonda nasogastrica | Punta debajo del diafragma, en el estomago | NG tube | Tip below diaphragm, in stomach |
| Tubo de torax | Anterior y apical para neumotorax, posterior y basal para derrame | Chest tube | Anterior/apical for pneumothorax, posterior/basal for effusion |`,
      keyTerms: [
        {
          term: 'broncograma aereo | air bronchogram',
          definition: 'Visualizacion de bronquios llenos de aire dentro de una opacidad pulmonar, confirmando que la opacidad es alveolar (intreparenquimatosa). | Visualization of air-filled bronchi within a lung opacity, confirming the opacity is alveolar (intraparenchymal).',
          pronunciation: 'bron-co-GRA-ma AER-eh-o',
        },
        {
          term: 'signo de la silueta | silhouette sign',
          definition: 'Perdida del borde normal entre dos estructuras de densidad similar cuando se tocan, usado para localizar patologia. | Loss of the normal border between two structures of similar density when they touch, used to localize pathology.',
        },
        {
          term: 'lineas de Kerley B | Kerley B lines',
          definition: 'Lineas horizontales cortas (1-2 cm) en la periferia pulmonar que representan engrosamiento de los septos interlobulares, vistas en edema intersticial. | Short horizontal lines (1-2 cm) in the lung periphery representing thickened interlobular septa, seen in interstitial edema.',
        },
        {
          term: 'kVp (kilovoltaje pico) | kVp (peak kilovoltage)',
          definition: 'El voltaje maximo aplicado al tubo de rayos X, que controla la energia y penetracion del rayo. | The maximum voltage applied to the X-ray tube, controlling beam energy and penetration.',
        },
        {
          term: 'patron reticulonodular | reticulonodular pattern',
          definition: 'Patron radiografico combinando lineas finas (reticular) con nodulos pequenos, sugestivo de enfermedad intersticial. | Radiographic pattern combining fine lines (reticular) with small nodules, suggestive of interstitial disease.',
        },
        {
          term: 'cisura | fissure',
          definition: 'Pliegue de pleura visceral que separa los lobulos pulmonares, visible como una linea fina en la radiografia. | Fold of visceral pleura separating lung lobes, visible as a fine line on the radiograph.',
        },
      ],
      clinicalNotes: 'La radiografia PA es la proyeccion estandar y la unica que permite una medicion fiable del indice cardiotorACico. Las radiografias AP portatiles magnifican la silueta cardiaca y pueden simular cardiomegalia. Siempre correlacionar los hallazgos radiologicos con la clinica del paciente. | PA is the standard projection and the only one allowing reliable cardiothoracic ratio measurement. Portable AP films magnify the cardiac silhouette and may simulate cardiomegaly. Always correlate radiological findings with clinical presentation.',
    },
    4: {
      level: 4,
      summary: 'La interpretacion avanzada de la radiografia de torax requiere integracion de la fisiopatologia, reconocimiento de patrones complejos como la distribucion zonal de enfermedad, signos indirectos de patologia, y decision clinica sobre la necesidad de estudios complementarios. | Advanced chest X-ray interpretation requires integration of pathophysiology, recognition of complex patterns such as zonal disease distribution, indirect signs of pathology, and clinical decision-making regarding the need for further studies.',
      explanation: `## Patologia Avanzada por Regiones | Advanced Pathology by Region

### Opacidades Pulmonares: Diagnostico Diferencial Sistematico | Pulmonary Opacities: Systematic Differential Diagnosis

**Opacidad difusa bilateral | Diffuse bilateral opacity:**

| Distribucion | Diagnostico Diferencial |
|-------------|----------------------|
| Perihiliar (alas de mariposa) | Edema pulmonar cardiogenico | Perihilar (butterfly wings) | Cardiogenic pulmonary edema |
| Difusa homogenea | SDRA, hemorragia alveolar, neumonia atipica | Diffuse homogeneous | ARDS, alveolar hemorrhage, atypical pneumonia |
| Predominio apical | TB, silicosis, espondilitis anquilosante | Apical predominance | TB, silicosis, ankylosing spondylitis |
| Predominio basal | Fibrosis pulmonar idiopatica, asbestosis | Basal predominance | IPF, asbestosis |
| Periferico | Neumonia eosinofilica cronica (negativo fotografico del edema) | Peripheral | Chronic eosinophilic pneumonia (photographic negative of edema) |

**Cavitacion pulmonar | Pulmonary cavitation:**
- Pared gruesa (>4 mm): Cancer, absceso, granulomatosis con poliangiitis | Thick wall (>4 mm): Cancer, abscess, granulomatosis with polyangiitis
- Pared fina: Quiste, bulla, neumonia por Pneumocystis | Thin wall: Cyst, bulla, Pneumocystis pneumonia
- Con nivel hidroaereo: Absceso pulmonar | With air-fluid level: Lung abscess

### Patologia Pleural Avanzada | Advanced Pleural Pathology

**Cuantificacion del derrame pleural | Pleural effusion quantification:**
- Borramiento del angulo costofrenico: ~200-300 mL | Costophrenic blunting: ~200-300 mL
- Hasta la mitad del hemitorax: ~1000 mL | Up to half the hemithorax: ~1000 mL
- Opacificacion completa: >1500 mL | Complete opacification: >1500 mL

**Derrame subpulmonar | Subpulmonic effusion:**
- Simula un hemidiafragma elevado | Simulates an elevated hemidiaphragm
- Pista: El punto mas alto del "diafragma" esta lateralizado | Clue: The highest point of the "diaphragm" is lateralized
- Confirmar con radiografia en decubito lateral | Confirm with lateral decubitus film

**Neumotorax: Clasificacion y Manejo | Pneumothorax: Classification and Management:**
- Pequeno (<2 cm del apice): Observacion, oxigeno suplementario | Small (<2 cm from apex): Observation, supplemental oxygen
- Grande (>2 cm): Aspiracion o tubo de torax | Large (>2 cm): Aspiration or chest tube
- A tension: Emergencia, descompresion inmediata con aguja | Tension: Emergency, immediate needle decompression
- Signos de tension: Desviacion traqueal contralateral, aplanamiento diafragmatico ipsilateral, desplazamiento mediastinico | Tension signs: Contralateral tracheal deviation, ipsilateral diaphragm flattening, mediastinal shift

### Patologia Cardiaca en la Radiografia | Cardiac Pathology on Radiograph

**Signos de insuficiencia cardiaca | Signs of heart failure:**

| Grado | Hallazgos Radiograficos |
|-------|----------------------|
| Leve | Redistribucion vascular cefalica (cefalización del flujo) | Mild | Cephalization of flow (upper lobe pulmonary vein distension) |
| Moderada | Edema intersticial: lineas de Kerley B, manguito peribronquial | Moderate | Interstitial edema: Kerley B lines, peribronchial cuffing |
| Severa | Edema alveolar: opacidades en alas de mariposa, derrame bilateral | Severe | Alveolar edema: butterfly wing opacities, bilateral effusion |

**Configuraciones cardiacas especificas | Specific cardiac configurations:**
- Corazon en bota: Hipertrofia del ventriculo derecho (tetralogia de Fallot) | Boot-shaped heart: RV hypertrophy (Tetralogy of Fallot)
- Corazon en garrafa: Derrame pericardico | Water-bottle heart: Pericardial effusion
- Doble contorno auricular derecho: Dilatacion de la auricula izquierda | Double right heart border: Left atrial enlargement
- Signo del 3: Coartacion de la aorta | Figure 3 sign: Coarctation of the aorta

## Evaluacion de la Via Aerea | Airway Evaluation

### Patologia Traqueal y Bronquial | Tracheal and Bronchial Pathology

- **Desviacion traqueal | Tracheal deviation:**
  - Hacia la lesion: Atelectasia, fibrosis, neumonectomia | Toward lesion: Atelectasis, fibrosis, pneumonectomy
  - Lejos de la lesion: Derrame masivo, neumotorax a tension, masa | Away from lesion: Massive effusion, tension pneumothorax, mass

- **Ensanchamiento mediastinico | Mediastinal widening (>8 cm):**
  - Diseccion aortica (clinica urgente) | Aortic dissection (urgent clinical setting)
  - Linfadenopatia (sarcoidosis, linfoma) | Lymphadenopathy (sarcoidosis, lymphoma)
  - Masa mediastinica | Mediastinal mass
  - Hemorragia mediastinica traumatica | Traumatic mediastinal hemorrhage

## Radiografia en Contextos Clinicos Especificos | Radiographs in Specific Clinical Contexts

### Paciente Critico (UCI) | Critical Care Patient (ICU)

Evaluacion sistematica adicional: | Additional systematic evaluation:
1. **Dispositivos:** TET, CVC, Swan-Ganz, IABP, marcapasos, tubos de torax | Devices: ETT, CVC, Swan-Ganz, IABP, pacemaker, chest tubes
2. **Complicaciones de procedimientos:** Neumotorax yatrogeno, malposicion | Procedure complications: Iatrogenic pneumothorax, malposition
3. **SDRA:** Opacidades bilaterales no explicadas por derrame o atelectasia | ARDS: Bilateral opacities not explained by effusion or atelectasis
4. **Barotrauma:** Neumotorax, neumomediastino, enfisema subcutaneo | Barotrauma: Pneumothorax, pneumomediastinum, subcutaneous emphysema

### Trauma Toracico | Thoracic Trauma

**Hallazgos criticos en trauma: | Critical trauma findings:**
- Neumotorax (puede estar oculto en posicion supina) | Pneumothorax (may be occult in supine position)
- Hemotorax | Hemothorax
- Ensanchamiento mediastinico (lesion aortica) | Mediastinal widening (aortic injury)
- Fractura de primera o segunda costilla (alta energia) | First or second rib fracture (high energy)
- Torax inestable (flail chest): >3 costillas fracturadas en >2 sitios | Flail chest: >3 ribs fractured in >2 sites
- Contusion pulmonar | Pulmonary contusion

### Post-quirurgico | Post-surgical

- Evaluar expansion pulmonar post-cirugia toracica | Evaluate lung expansion after thoracic surgery
- Posicion de drenes y tubos | Drain and tube positioning
- Complicaciones: derrame, neumotorax, atelectasia | Complications: effusion, pneumothorax, atelectasis`,
      keyTerms: [
        {
          term: 'SDRA | ARDS',
          definition: 'Sindrome de dificultad respiratoria aguda: insuficiencia respiratoria severa con opacidades bilaterales difusas no explicadas completamente por fallo cardiaco. | Acute respiratory distress syndrome: severe respiratory failure with diffuse bilateral opacities not fully explained by cardiac failure.',
          pronunciation: 'ES-de-ere-AH',
        },
        {
          term: 'cefalizacion del flujo | cephalization of flow',
          definition: 'Redistribucion del flujo sanguineo pulmonar hacia los lobulos superiores, primer signo radiografico de insuficiencia cardiaca izquierda. | Redistribution of pulmonary blood flow toward upper lobes, first radiographic sign of left heart failure.',
        },
        {
          term: 'derrame subpulmonar | subpulmonic effusion',
          definition: 'Liquido pleural atrapado entre la base pulmonar y el diafragma que simula elevacion diafragmatica en la radiografia PA. | Pleural fluid trapped between the lung base and diaphragm simulating diaphragm elevation on PA film.',
        },
        {
          term: 'manguito peribronquial | peribronchial cuffing',
          definition: 'Engrosamiento de las paredes bronquiales visto como anillos blancos alrededor de los bronquios en corte transversal, signo de edema intersticial. | Bronchial wall thickening seen as white rings around bronchi on cross-section, a sign of interstitial edema.',
        },
        {
          term: 'torax inestable | flail chest',
          definition: 'Segmento de pared toracica con movimiento paradojico por fracturas multiples de costillas, causando compromiso ventilatorio severo. | Chest wall segment with paradoxical motion from multiple rib fractures, causing severe ventilatory compromise.',
        },
      ],
      clinicalNotes: 'En el paciente critico, la radiografia AP portatil es la norma. Debe interpretarse con precaucion: magnificacion cardiaca, menor contraste, rotacion frecuente. Un neumotorax en posicion supina puede no mostrar la linea pleural clasica sino el signo del surco profundo (deep sulcus sign). Siempre comparar con radiografias previas cuando esten disponibles. | In critically ill patients, portable AP films are standard. Interpret cautiously: cardiac magnification, lower contrast, frequent rotation. A supine pneumothorax may not show the classic pleural line but rather the deep sulcus sign. Always compare with prior films when available.',
    },
    5: {
      level: 5,
      summary: 'La interpretacion experta de la radiografia de torax integra conocimiento avanzado de fisica de imagen, analisis cuantitativo, inteligencia artificial como herramienta complementaria, y toma de decisiones basada en evidencia para optimizar el uso de recursos de imagen y mejorar los desenlaces clinicos. | Expert chest X-ray interpretation integrates advanced imaging physics knowledge, quantitative analysis, artificial intelligence as a complementary tool, and evidence-based decision-making to optimize imaging resource utilization and improve clinical outcomes.',
      explanation: `## Fisica Avanzada y Calidad de Imagen | Advanced Physics and Image Quality

### Optimizacion de Parametros Tecnicos | Technical Parameter Optimization

**Exposimetria automatica (AEC) | Automatic Exposure Control:**
- Camaras de ionizacion detectan la radiacion transmitida y terminan la exposicion | Ionization chambers detect transmitted radiation and terminate exposure
- Posicion de la camara critica: central para torax | Chamber position critical: central for chest
- Ajuste para biotipo (obeso, pediatrico, enfisematoso) | Adjustment for body habitus (obese, pediatric, emphysematous)

**Radiografia digital vs convencional | Digital vs conventional radiography:**
- DR (Digital Radiography) directa: detector de panel plano, adquisicion instantanea | Direct DR: flat panel detector, instant acquisition
- CR (Computed Radiography): cassette con fosforo fotoestimulable, lectura posterior | CR: photostimulable phosphor cassette, delayed readout
- Ventajas DR: Rango dinamico amplio, postprocesamiento, dosis reducida, PACS integrado | DR advantages: Wide dynamic range, post-processing, reduced dose, PACS integration
- Indices de exposicion (EI/DAP) para monitoreo de dosis | Exposure indices for dose monitoring

**Artefactos y Limitaciones Tecnicas | Artifacts and Technical Limitations:**
- Rotacion: Asimetria de espacios mediales claviculares; puede simular desviacion mediastinica | Rotation: Asymmetry of medial clavicular spaces; may simulate mediastinal shift
- Exposicion inadecuada: Subexposicion (granulada), sobreexposicion (sin contraste) | Inadequate exposure: Underexposure (grainy), overexposure (no contrast)
- Inspiracion insuficiente: <10 costillas posteriores visibles, pulmones hiperdensos, corazon aparentemente grande | Insufficient inspiration: <10 posterior ribs visible, hyperdense lungs, apparently large heart
- Artefactos de movimiento: Bordes borrosos, doble contorno cardiaco | Motion artifacts: Blurred edges, double cardiac contour

## Inteligencia Artificial en Interpretacion de CXR | AI in CXR Interpretation

### Estado Actual | Current State

**Algoritmos aprobados por la FDA | FDA-cleared algorithms:**
- Deteccion de neumotorax para priorizacion en lista de trabajo | Pneumothorax detection for worklist prioritization
- Deteccion de tuberculosis pulmonar (programas de tamizaje, OMS) | Pulmonary TB detection (screening programs, WHO)
- Identificacion de hallazgos criticos: neumotorax, derrame masivo, posicion de dispositivos | Critical finding identification: pneumothorax, massive effusion, device positioning
- Deteccion de nodulos pulmonares | Pulmonary nodule detection

**Rendimiento | Performance:**
- Sensibilidad para neumotorax: 90-95% (comparable a radiologos) | Pneumothorax sensitivity: 90-95% (comparable to radiologists)
- Especificidad variable segun la patologia y dataset de entrenamiento | Specificity variable depending on pathology and training dataset
- Mejor como herramienta de triaje y segunda lectura, no como reemplazo | Best as triage and second-read tool, not replacement
- Limitaciones: Sesgos en datasets de entrenamiento, generalizabilidad entre poblaciones | Limitations: Biases in training datasets, generalizability across populations

### Analisis Cuantitativo | Quantitative Analysis

**Mediciones cuantitativas en CXR: | Quantitative CXR measurements:**
- Indice cardiotorACico automatizado con precision submilimetrica | Automated CTR with submillimeter precision
- Volumetria estimada de derrames pleurales | Estimated pleural effusion volumetry
- Tracking longitudinal de nodulos | Longitudinal nodule tracking
- Cuantificacion de edema pulmonar (escala radiografica) | Pulmonary edema quantification (radiographic scale)

## Toma de Decisiones Clinicas Basada en Evidencia | Evidence-Based Clinical Decision-Making

### Indicaciones Apropiadas (Choosing Wisely) | Appropriate Indications (Choosing Wisely)

**Radiografias NO indicadas rutinariamente: | CXR NOT routinely indicated:**
- Radiografia de torax preoperatoria en pacientes jovenes asintomaticos (ASA I-II) | Preoperative CXR in young asymptomatic patients (ASA I-II)
- Radiografia diaria de rutina en UCI sin cambio clinico | Daily routine ICU CXR without clinical change
- Radiografia de seguimiento para neumonia no complicada en paciente que mejora | Follow-up CXR for uncomplicated pneumonia in improving patient
- Control rutinario post-procedimiento (CVC) si no hay sospecha de complicacion y se uso guia ecografica | Routine post-procedure (CVC) check if no complication suspected and US-guided

**Radiografias CON indicacion clara: | CXR WITH clear indication:**
- Disnea aguda de etiologia incierta | Acute dyspnea of uncertain etiology
- Sospecha de neumotorax post-procedimiento (sin guia ecografica) | Suspected post-procedure pneumothorax (without US guidance)
- Seguimiento de hallazgos previamente identificados | Follow-up of previously identified findings
- Evaluacion inicial de infeccion respiratoria con signos de gravedad | Initial evaluation of respiratory infection with severity signs

### Correlacion Clinico-Radiologica Avanzada | Advanced Clinico-Radiological Correlation

**Evaluacion temporal de patologia: | Temporal evaluation of pathology:**
- Edema pulmonar: Aparece radiograficamente 12-24h despues del evento, resuelve 24-48h despues del tratamiento | Pulmonary edema: Appears radiographically 12-24h after event, resolves 24-48h after treatment
- Neumonia: El infiltrado puede empeorar en las primeras 48-72h a pesar de tratamiento adecuado | Pneumonia: Infiltrate may worsen in first 48-72h despite adequate treatment
- SDRA: Opacidades bilaterales aparecen 12-48h despues del insulto | ARDS: Bilateral opacities appear 12-48h after insult
- Resolucion radiografica va detras de la mejoria clinica | Radiographic resolution lags behind clinical improvement

**Cuando avanzar a CT: | When to advance to CT:**
- Sospecha de embolia pulmonar (CXR puede ser normal) | Suspected PE (CXR may be normal)
- Nodulo pulmonar solitario que requiere caracterizacion | SPN requiring characterization
- Neumonia que no resuelve a las 6-8 semanas (descartar obstruccion) | Non-resolving pneumonia at 6-8 weeks (rule out obstruction)
- Mediastino ensanchado en trauma (CTA urgente) | Widened mediastinum in trauma (urgent CTA)
- Evaluacion de complicaciones: empiema tabicado, absceso pulmonar | Complication evaluation: loculated empyema, lung abscess
- Cancer: Estadificacion, evaluacion de respuesta | Cancer: Staging, response evaluation

## Informe Radiologico Estructurado | Structured Radiological Report

### Formato RADPEER/ACR | RADPEER/ACR Format

**Componentes del informe: | Report components:**
1. **Datos clinicos | Clinical information:** Indicacion, historia relevante | Indication, relevant history
2. **Tecnica | Technique:** PA/AP, digital, comparacion con previos | PA/AP, digital, comparison with priors
3. **Hallazgos | Findings:** Sistematico, describir cada estructura | Systematic, describe each structure
4. **Impresion | Impression:** Diagnosticos principales, recomendaciones | Main diagnoses, recommendations
5. **Comunicacion critica | Critical communication:** Hallazgos urgentes comunicados verbalmente | Urgent findings communicated verbally

**Lenguaje estandarizado | Standardized language:**
- Fleischner Society: Nomenclatura para hallazgos pulmonares | Fleischner Society: Nomenclature for pulmonary findings
- Grados ACR de comunicacion critica | ACR grades of critical communication
- Recomendaciones Fleischner para nodulos incidentales | Fleischner recommendations for incidental nodules

### Manejo de Nodulos Incidentales (Fleischner 2017) | Incidental Nodule Management (Fleischner 2017)

**Nodulo solido en paciente de bajo riesgo: | Solid nodule in low-risk patient:**

| Tamano | Recomendacion |
|--------|-------------|
| <6 mm | No seguimiento de rutina | No routine follow-up |
| 6-8 mm | TC a los 6-12 meses, considerar TC a los 18-24 meses | CT at 6-12 months, consider CT at 18-24 months |
| >8 mm | TC a los 3 meses, PET/TC, o biopsia | CT at 3 months, PET/CT, or biopsy |

**Nodulo subsOlido (vidrio esmerilado): | Subsolid nodule (ground glass):**

| Tamano | Recomendacion |
|--------|-------------|
| <6 mm | No seguimiento de rutina | No routine follow-up |
| >=6 mm | TC a los 6-12 meses para confirmar persistencia, luego cada 2 anos por 5 anos | CT at 6-12 months to confirm persistence, then every 2 years for 5 years |

## Consideraciones en Investigacion y Docencia | Research and Teaching Considerations

### Variabilidad Interobservador | Interobserver Variability

- Concordancia entre radiologos para hallazgos sutiles: kappa 0.4-0.6 (moderada) | Agreement between radiologists for subtle findings: kappa 0.4-0.6 (moderate)
- Mayor concordancia para hallazgos obvios: neumotorax grande, derrame masivo | Higher agreement for obvious findings: large pneumothorax, massive effusion
- Fatiga visual reduce la sensibilidad: estudios muestran caida despues de >50 lecturas continuas | Visual fatigue reduces sensitivity: studies show decline after >50 continuous reads
- Doble lectura y AI como complemento mejoran la deteccion | Double reading and AI as complement improve detection`,
      keyTerms: [
        {
          term: 'AEC (exposimetria automatica) | AEC (automatic exposure control)',
          definition: 'Sistema que termina automaticamente la exposicion radiografica cuando se alcanza la dosis optima en el detector, utilizando camaras de ionizacion. | System that automatically terminates radiographic exposure when optimal dose is reached at the detector, using ionization chambers.',
        },
        {
          term: 'DR (radiografia digital directa) | DR (direct digital radiography)',
          definition: 'Tecnologia que convierte los rayos X directamente en senal digital mediante detectores de panel plano, eliminando la necesidad de cassettes. | Technology converting X-rays directly to digital signal via flat panel detectors, eliminating the need for cassettes.',
        },
        {
          term: 'Fleischner Society',
          definition: 'Sociedad internacional que publica guias basadas en evidencia para el manejo de nodulos pulmonares incidentales y nomenclatura radiologica toracica estandarizada. | International society publishing evidence-based guidelines for incidental pulmonary nodule management and standardized thoracic radiology nomenclature.',
        },
        {
          term: 'indice de exposicion | exposure index',
          definition: 'Parametro numerico del sistema digital que indica la dosis recibida por el detector, usado para monitoreo de calidad y optimizacion de dosis. | Numerical parameter of the digital system indicating the dose received by the detector, used for quality monitoring and dose optimization.',
        },
        {
          term: 'Choosing Wisely',
          definition: 'Iniciativa medica internacional que identifica pruebas y procedimientos de bajo valor para reducir el uso innecesario de recursos, incluyendo radiografias no indicadas. | International medical initiative identifying low-value tests and procedures to reduce unnecessary resource use, including unindicated radiographs.',
        },
        {
          term: 'concordancia interobservador | interobserver agreement',
          definition: 'Grado de acuerdo entre diferentes lectores al interpretar la misma imagen, medido frecuentemente con el estadistico kappa de Cohen. | Degree of agreement between different readers interpreting the same image, frequently measured with Cohen kappa statistic.',
        },
      ],
      clinicalNotes: 'La radiografia de torax sigue siendo la modalidad de imagen mas solicitada a nivel mundial, con un estimado de >2 mil millones anuales. La integracion de AI no busca reemplazar al radiologo sino optimizar el flujo de trabajo: triaje de urgencias, segunda lectura, y control de calidad. El uso apropiado (Choosing Wisely) reduce costos y radiacion innecesaria. El conocimiento de las guias Fleischner para nodulos incidentales es esencial para todo medico que interprete CXR. | Chest X-ray remains the most ordered imaging modality worldwide, with an estimated >2 billion annually. AI integration does not seek to replace the radiologist but to optimize workflow: emergency triage, second reading, and quality control. Appropriate use (Choosing Wisely) reduces costs and unnecessary radiation. Knowledge of Fleischner guidelines for incidental nodules is essential for every physician interpreting CXR.',
    },
  },

  media: [],

  citations: [
    {
      id: 'felson-chest-roentgenology',
      type: 'textbook',
      title: 'Felson\'s Principles of Chest Roentgenology: A Programmed Text',
      authors: ['Goodman LR'],
      source: 'Elsevier',
      chapter: 'Systematic Approach to Chest X-ray Interpretation',
    },
    {
      id: 'acr-appropriateness-criteria',
      type: 'guideline',
      title: 'ACR Appropriateness Criteria: Routine Chest Radiography',
      authors: ['American College of Radiology'],
      source: 'ACR',
      url: 'https://acsearch.acr.org/list',
    },
    {
      id: 'fleischner-2017',
      type: 'article',
      title: 'Guidelines for Management of Incidental Pulmonary Nodules Detected on CT Images',
      authors: ['MacMahon H', 'Naidich DP', 'Goo JM', 'et al.'],
      source: 'Radiology',
      url: 'https://doi.org/10.1148/radiol.2017161659',
    },
    {
      id: 'fleischner-nomenclature',
      type: 'article',
      title: 'Fleischner Society: Glossary of Terms for Thoracic Imaging',
      authors: ['Hansell DM', 'Bankier AA', 'MacMahon H', 'et al.'],
      source: 'Radiology',
      url: 'https://doi.org/10.1148/radiol.2462070712',
    },
  ],

  crossReferences: [
    { targetId: 'topic-ct-scan-principles', targetType: 'topic', relationship: 'related', label: 'Tomografia Computarizada | CT Scan' },
    { targetId: 'condition-pneumonia', targetType: 'condition', relationship: 'related', label: 'Neumonia | Pneumonia' },
    { targetId: 'condition-heart-failure', targetType: 'condition', relationship: 'related', label: 'Insuficiencia Cardiaca | Heart Failure' },
    { targetId: 'topic-radiation-safety', targetType: 'topic', relationship: 'see-also', label: 'Seguridad Radiologica | Radiation Safety' },
    { targetId: 'topic-basic-ultrasound', targetType: 'topic', relationship: 'sibling', label: 'Ecografia Basica | Basic Ultrasound' },
    { targetId: 'condition-copd', targetType: 'condition', relationship: 'related', label: 'EPOC | COPD' },
  ],

  tags: {
    systems: ['respiratory', 'cardiovascular'],
    topics: ['radiology', 'imaging', 'diagnostics', 'emergency medicine'],
    keywords: [
      'radiografia', 'chest x-ray', 'CXR', 'rayos X', 'torax',
      'interpretacion sistematica', 'ABCDE approach', 'neumotorax',
      'derrame pleural', 'consolidacion', 'cardiomegalia',
      'nodulo pulmonar', 'Fleischner', 'AI radiology',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'family medicine', 'emergency medicine'],
    },
  },

  createdAt: '2026-02-05T00:00:00.000Z',
  updatedAt: '2026-02-05T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default radiografiaToraxChestXray;
