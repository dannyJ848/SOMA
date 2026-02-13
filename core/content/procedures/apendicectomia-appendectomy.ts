import { EducationalContent } from '../types';

export const apendicectomiaAppendectomyContent: EducationalContent = {
  id: 'apendicectomia-appendectomy',
  type: 'process',
  name: 'Apendicectomía | Appendectomy',
  nameEs: 'Apendicectomía',
  alternateNames: [
    'Apendectomía | Appendectomy',
    'Extirpación del apéndice | Appendix removal',
    'Apendicectomía abierta | Open appendectomy',
    'Apendicectomía laparoscópica | Laparoscopic appendectomy',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'La apendicectomía es una cirugía para quitar el apéndice, un pequeño órgano en forma de tubo que está unido al intestino grueso. Se hace de emergencia cuando el apéndice se inflama (apendicitis). | An appendectomy is a surgery to remove the appendix, a small tube-shaped organ attached to the large intestine. It is done as an emergency when the appendix becomes inflamed (appendicitis).',
      explanation: `## ¿Qué es una apendicectomía? | What Is an Appendectomy?

La apendicectomía es una operación para quitar el apéndice. El apéndice es un pequeño saco con forma de dedo que sale del intestino grueso, en el lado derecho inferior del abdomen. | An appendectomy is an operation to remove the appendix. The appendix is a small finger-shaped pouch that comes off the large intestine, on the lower right side of the belly.

### ¿Por qué se necesita esta cirugía? | Why Is This Surgery Needed?

Cuando el apéndice se inflama e infecta, se llama **apendicitis**. Si no se trata, el apéndice puede reventarse y causar una infección grave en el abdomen. La cirugía es la forma más segura de tratar la apendicitis. | When the appendix becomes inflamed and infected, it is called **appendicitis**. If not treated, the appendix can burst and cause a serious infection in the belly. Surgery is the safest way to treat appendicitis.

### Señales de apendicitis | Signs of Appendicitis

- Dolor que empieza cerca del ombligo y se mueve al lado derecho inferior | Pain that starts near the belly button and moves to the lower right side
- Náuseas o vómito | Nausea or vomiting
- Falta de apetito | Loss of appetite
- Fiebre leve | Low-grade fever
- El dolor empeora al caminar o toser | Pain gets worse when walking or coughing

### ¿Cómo es la cirugía? | What Is the Surgery Like?

Hay dos formas de hacer la operación: | There are two ways to do the operation:

1. **Cirugía por pequeños cortes (laparoscópica)**: Se hacen 3 cortecitos pequeños. Se usa una cámara para ver adentro. Es la más común hoy en día. | **Surgery through small cuts (laparoscopic)**: Three small cuts are made. A camera is used to see inside. This is the most common today.
2. **Cirugía abierta**: Se hace un corte más grande en el lado derecho del abdomen. Se usa cuando el apéndice ya se reventó. | **Open surgery**: A larger cut is made on the right side of the belly. Used when the appendix has already burst.

### Preparación para la cirugía | Preparing for Surgery

- No coma ni beba nada antes de la cirugía | Do not eat or drink anything before surgery
- Avise a su doctor de todos los medicamentos que toma | Tell your doctor about all medications you take
- Alguien debe llevarlo a casa después | Someone must drive you home afterward

### Recuperación | Recovery

- La mayoría de las personas van a casa el mismo día o al día siguiente | Most people go home the same day or the next day
- Se puede volver a actividades normales en 1 a 2 semanas | You can return to normal activities in 1 to 2 weeks
- No levante cosas pesadas por 2 a 4 semanas | Do not lift heavy things for 2 to 4 weeks
- Puede vivir una vida completamente normal sin el apéndice | You can live a completely normal life without the appendix

### ¿Cuándo llamar al doctor? | When to Call the Doctor?

Llame al doctor si tiene: | Call the doctor if you have:
- Fiebre mayor de 38.3°C (101°F) | Fever above 38.3°C (101°F)
- Dolor que empeora | Pain that gets worse
- Enrojecimiento o pus en las heridas | Redness or pus at the wounds
- Vómito que no para | Vomiting that does not stop`,
      keyTerms: [
        {
          term: 'Apéndice | Appendix',
          definition:
            'Pequeño saco en forma de dedo unido al intestino grueso | Small finger-shaped pouch attached to the large intestine',
        },
        {
          term: 'Apendicitis | Appendicitis',
          definition:
            'Inflamación e infección del apéndice | Inflammation and infection of the appendix',
        },
        {
          term: 'Laparoscópica | Laparoscopic',
          definition:
            'Cirugía con cortecitos pequeños y una cámara | Surgery using small cuts and a camera',
        },
        {
          term: 'Cirugía abierta | Open surgery',
          definition:
            'Cirugía con un corte más grande para ver directamente | Surgery with a larger cut to see directly',
        },
      ],
      analogies: [
        'El apéndice es como una bolsita pequeña pegada al intestino que a veces se tapa y se infecta, como cuando una tubería se tapa y necesita reparación urgente. | The appendix is like a small pouch attached to the intestine that sometimes gets blocked and infected, like when a pipe gets clogged and needs urgent repair.',
      ],
      examples: [
        'María llegó a urgencias con dolor en el lado derecho del abdomen. El doctor le hizo estudios y confirmó apendicitis. La operaron con cirugía laparoscópica y al día siguiente ya estaba en casa. | María arrived at the ER with pain on the right side of her abdomen. The doctor ran tests and confirmed appendicitis. She had laparoscopic surgery and was home the next day.',
      ],
      patientCounselingPoints: [
        'La apendicectomía es el único tratamiento efectivo para la apendicitis | Appendectomy is the only effective treatment for appendicitis',
        'La cirugía es muy segura y muy común | The surgery is very safe and very common',
        'La mayoría de personas se va a casa al día siguiente | Most people go home the next day',
        'No necesitará dieta especial después de recuperarse | You will not need a special diet after recovery',
      ],
    },
    2: {
      level: 2,
      summary:
        'La apendicitis ocurre cuando el apéndice se bloquea por un fecalito, tejido linfático o cuerpo extraño, causando inflamación bacteriana progresiva. Se diagnostica con examen físico, laboratorios e imagen, y se trata con cirugía urgente. | Appendicitis occurs when the appendix is blocked by a fecalith, lymphoid tissue, or foreign body, causing progressive bacterial inflammation. It is diagnosed with physical exam, labs, and imaging, and treated with urgent surgery.',
      explanation: `## Fisiopatología y diagnóstico de la apendicitis | Pathophysiology and Diagnosis of Appendicitis

### Causas del bloqueo | Causes of Blockage

La apendicitis comienza cuando la luz (el interior) del apéndice se obstruye. Las causas más comunes son: | Appendicitis begins when the lumen (the inside) of the appendix becomes obstructed. The most common causes are:

- **Fecalito (apendicolito)**: Pieza endurecida de heces, la causa más frecuente | **Fecalith (appendicolith)**: Hardened piece of stool, the most frequent cause
- **Hiperplasia linfoide**: Agrandamiento del tejido inmune en la pared del apéndice, más común en jóvenes | **Lymphoid hyperplasia**: Enlargement of immune tissue in the appendix wall, more common in young people
- **Cuerpos extraños, parásitos o tumores** (raro) | **Foreign bodies, parasites, or tumors** (rare)

### Progresión de la enfermedad | Disease Progression

1. **Obstrucción**: Se bloquea la salida del apéndice | **Obstruction**: The outflow of the appendix is blocked
2. **Distensión**: Se acumula moco y proliferan bacterias | **Distension**: Mucus accumulates and bacteria proliferate
3. **Inflamación**: La pared se inflama y hay dolor | **Inflammation**: The wall becomes inflamed and pain develops
4. **Isquemia**: Se compromete la circulación sanguínea de la pared | **Ischemia**: Blood supply to the wall is compromised
5. **Perforación**: Si no se trata, la pared se rompe | **Perforation**: If untreated, the wall ruptures
6. **Peritonitis o absceso**: Infección se disemina o se encapsula | **Peritonitis or abscess**: Infection spreads or becomes walled off

### Diagnóstico | Diagnosis

**Examen físico | Physical Examination**
- Signo de McBurney: dolor máximo en el punto de McBurney (tercio lateral de la línea del ombligo a la espina ilíaca) | McBurney sign: maximum pain at McBurney's point (lateral third of the line from navel to iliac spine)
- Signo de Rovsing: dolor en el lado derecho al presionar el lado izquierdo | Rovsing sign: pain on the right side when pressing on the left side
- Signo del psoas: dolor al extender la cadera derecha | Psoas sign: pain when extending the right hip
- Signo del obturador: dolor al rotar internamente la cadera flexionada | Obturator sign: pain with internal rotation of the flexed hip

**Laboratorios | Labs**
- Leucocitosis (glóbulos blancos elevados, generalmente >10,000/μL) | Leukocytosis (elevated white blood cells, generally >10,000/μL)
- PCR elevada | Elevated CRP
- Urianálisis para descartar causas urinarias | Urinalysis to rule out urinary causes

**Imagen | Imaging**
- **Tomografía computarizada (TC)**: estudio de elección en adultos, sensibilidad >95% | **CT scan**: study of choice in adults, sensitivity >95%
- **Ultrasonido**: preferido en niños y embarazadas, operador-dependiente | **Ultrasound**: preferred in children and pregnant women, operator-dependent
- **Resonancia magnética**: alternativa en embarazadas | **MRI**: alternative in pregnant women

### Escala de Alvarado | Alvarado Score

Sistema de puntuación para estimar la probabilidad de apendicitis (máximo 10 puntos): | Scoring system to estimate the likelihood of appendicitis (maximum 10 points):
- Migración del dolor: 1 punto | Pain migration: 1 point
- Anorexia: 1 punto | Anorexia: 1 point
- Náusea/vómito: 1 punto | Nausea/vomiting: 1 point
- Dolor en cuadrante inferior derecho: 2 puntos | Right lower quadrant tenderness: 2 points
- Rebote positivo: 1 punto | Rebound tenderness: 1 point
- Temperatura >37.3°C: 1 punto | Temperature >37.3°C: 1 point
- Leucocitosis: 2 puntos | Leukocytosis: 2 points
- Desviación a la izquierda: 1 punto | Left shift: 1 point

Puntaje ≥7: alta probabilidad, cirugía indicada | Score ≥7: high probability, surgery indicated`,
      keyTerms: [
        {
          term: 'Fecalito (apendicolito) | Fecalith (appendicolith)',
          definition:
            'Pieza endurecida de heces que obstruye el apéndice | Hardened piece of stool that obstructs the appendix',
        },
        {
          term: 'Hiperplasia linfoide | Lymphoid hyperplasia',
          definition:
            'Agrandamiento del tejido inmune en la pared del apéndice | Enlargement of immune tissue in the appendix wall',
        },
        {
          term: 'Signo de McBurney | McBurney sign',
          definition:
            'Dolor máximo en el punto de McBurney, indicativo de apendicitis | Maximum pain at McBurney\'s point, indicative of appendicitis',
        },
        {
          term: 'Peritonitis | Peritonitis',
          definition:
            'Infección de la membrana que recubre la cavidad abdominal | Infection of the membrane lining the abdominal cavity',
        },
        {
          term: 'Escala de Alvarado | Alvarado Score',
          definition:
            'Sistema de puntuación clínica para evaluar la probabilidad de apendicitis | Clinical scoring system to assess the likelihood of appendicitis',
        },
      ],
      analogies: [
        'La obstrucción del apéndice es como tapar la salida de un globo lleno de agua: la presión aumenta hasta que se revienta. | The obstruction of the appendix is like blocking the exit of a water-filled balloon: the pressure builds until it bursts.',
      ],
      examples: [
        'Un joven de 18 años llega con dolor periumbilical que migró al cuadrante inferior derecho, fiebre de 38°C, y leucocitosis de 14,000. Su escala de Alvarado es 8. Se confirma con TC y se programa cirugía urgente. | An 18-year-old arrives with periumbilical pain that migrated to the right lower quadrant, fever of 38°C, and leukocytosis of 14,000. His Alvarado score is 8. CT confirms and urgent surgery is scheduled.',
      ],
    },
    3: {
      level: 3,
      summary:
        'La apendicectomía se realiza por vía laparoscópica (estándar actual) o abierta. La técnica laparoscópica utiliza 3 puertos, neumoperitoneo con CO2, identificación del mesoapéndice, ligadura de la arteria apendicular y sección de la base con endoGIA o endoloops. La conversión a cirugía abierta se realiza cuando las condiciones intraoperatorias lo requieren. | Appendectomy is performed laparoscopically (current standard) or open. The laparoscopic technique uses 3 ports, CO2 pneumoperitoneum, identification of the mesoappendix, ligation of the appendicular artery, and division of the base with endoGIA or endoloops. Conversion to open surgery is done when intraoperative conditions require it.',
      explanation: `## Técnica quirúrgica de la apendicectomía | Surgical Technique of Appendectomy

### Apendicectomía laparoscópica | Laparoscopic Appendectomy

#### Preparación | Preparation
- Anestesia general con intubación endotraqueal | General anesthesia with endotracheal intubation
- Antibiótico profiláctico: cefazolina 2g IV o cefoxitina 2g IV dentro de los 60 minutos antes de la incisión | Prophylactic antibiotic: cefazolin 2g IV or cefoxitin 2g IV within 60 minutes before incision
- Posición supina con el brazo izquierdo en abducción | Supine position with left arm abducted
- Vaciamiento vesical con sonda Foley si es necesario | Bladder emptying with Foley catheter if needed
- Preparación y campos estériles del abdomen | Sterile prep and draping of the abdomen

#### Colocación de puertos | Port Placement
- **Puerto umbilical (12 mm)**: Para la cámara, técnica de Hasson (abierta) o aguja de Veress | **Umbilical port (12 mm)**: For the camera, Hasson (open) technique or Veress needle
- **Puerto suprapúbico (5 mm)**: Mano izquierda del cirujano | **Suprapubic port (5 mm)**: Surgeon's left hand
- **Puerto en fosa ilíaca izquierda (5 mm)**: Mano derecha del cirujano | **Left iliac fossa port (5 mm)**: Surgeon's right hand
- Neumoperitoneo con CO2 a 12-15 mmHg | Pneumoperitoneum with CO2 at 12-15 mmHg
- Posición de Trendelenburg y lateralización izquierda | Trendelenburg position and left lateral tilt

#### Pasos de la cirugía | Steps of Surgery

1. **Exploración de la cavidad**: Inspeccionar el apéndice, evaluar grado de inflamación, presencia de líquido libre o adherencias | **Cavity exploration**: Inspect the appendix, assess degree of inflammation, presence of free fluid or adhesions
2. **Identificación del apéndice**: Seguir la tenia anterior del ciego hasta la base del apéndice | **Appendix identification**: Follow the anterior taenia of the cecum to the base of the appendix
3. **Creación de ventana en el mesoapéndice**: Disección roma o con energía cerca de la base | **Creating window in the mesoappendix**: Blunt or energy dissection near the base
4. **Ligadura de la arteria apendicular**: Con clips, energía bipolar, bisturí armónico, o LigaSure | **Ligation of the appendicular artery**: With clips, bipolar energy, harmonic scalpel, or LigaSure
5. **División del mesoapéndice**: Sección progresiva desde la base hasta la punta | **Division of the mesoappendix**: Progressive division from base to tip
6. **Sección de la base apendicular**: | **Division of the appendicular base**:
   - EndoGIA (engrapadora lineal): Método preferido, sella y corta en un solo paso | EndoGIA (linear stapler): Preferred method, seals and cuts in one step
   - Endoloops (lazos preformados): Se colocan dos lazos proximales y uno distal, se corta entre ellos | Endoloops (preformed loops): Two proximal and one distal loop are placed, cut between them
   - Ligadura con sutura: Se liga la base con sutura absorbible y se corta | Suture ligation: The base is ligated with absorbable suture and cut
7. **Extracción del espécimen**: En bolsa de especímenes a través del puerto umbilical | **Specimen extraction**: In a specimen bag through the umbilical port
8. **Irrigación y aspiración**: Si hay contaminación, lavar con solución salina tibia | **Irrigation and suction**: If contamination is present, wash with warm saline
9. **Hemostasia y cierre**: Verificar hemostasia, desuflar, cerrar fascia del puerto de 12 mm, cierre de piel | **Hemostasis and closure**: Verify hemostasis, deflate, close fascia of 12 mm port, skin closure

### Apendicectomía abierta | Open Appendectomy

#### Indicaciones para cirugía abierta | Indications for Open Surgery
- Perforación con peritonitis difusa | Perforation with diffuse peritonitis
- Plastrón apendicular grande | Large appendicular phlegmon
- Adherencias abdominales extensas por cirugías previas | Extensive abdominal adhesions from previous surgeries
- Incapacidad para tolerar neumoperitoneo | Inability to tolerate pneumoperitoneum

#### Técnica | Technique
- **Incisión de McBurney** (oblicua) o **Rocky-Davis** (transversa) en el punto de McBurney | **McBurney incision** (oblique) or **Rocky-Davis** (transverse) at McBurney's point
- División por planos: piel, Scarpa, aponeurosis del oblicuo externo, fibras del oblicuo interno y transverso, peritoneo | Layer-by-layer division: skin, Scarpa's fascia, external oblique aponeurosis, internal oblique and transversus fibers, peritoneum
- Identificación del ciego y localización del apéndice siguiendo las tenias | Identification of cecum and locating appendix by following the taeniae
- Ligadura del mesoapéndice con suturas | Ligation of mesoappendix with sutures
- Ligadura de la base con sutura absorbible, ± inversión del muñón con bolsa de tabaco | Ligation of base with absorbable suture, ± stump inversion with purse-string suture
- Cierre por planos | Layered closure

### Conversión de laparoscópica a abierta | Conversion from Laparoscopic to Open
Tasa de conversión: 5-10%. Indicaciones: sangrado no controlable laparoscópicamente, anatomía no clara, adherencias densas, apéndice retrocecal de difícil acceso. | Conversion rate: 5-10%. Indications: bleeding not controllable laparoscopically, unclear anatomy, dense adhesions, retrocecal appendix with difficult access.`,
      keyTerms: [
        {
          term: 'Neumoperitoneo | Pneumoperitoneum',
          definition:
            'Insuflación del abdomen con CO2 para crear espacio de trabajo en laparoscopia | Insufflation of the abdomen with CO2 to create a working space in laparoscopy',
        },
        {
          term: 'Técnica de Hasson | Hasson technique',
          definition:
            'Inserción abierta del primer trocar bajo visión directa | Open insertion of the first trocar under direct vision',
        },
        {
          term: 'EndoGIA | EndoGIA',
          definition:
            'Engrapadora lineal endoscópica que sella y corta tejido simultáneamente | Endoscopic linear stapler that seals and cuts tissue simultaneously',
        },
        {
          term: 'Endoloop | Endoloop',
          definition:
            'Lazo de sutura preformado para ligar la base del apéndice laparoscópicamente | Preformed suture loop to ligate the appendix base laparoscopically',
        },
        {
          term: 'Mesoapéndice | Mesoappendix',
          definition:
            'Pliegue de peritoneo que contiene la arteria apendicular y conecta el apéndice al mesenterio del íleon | Fold of peritoneum containing the appendicular artery and connecting the appendix to the mesentery of the ileum',
        },
        {
          term: 'Incisión de McBurney | McBurney incision',
          definition:
            'Incisión oblicua sobre el punto de McBurney para apendicectomía abierta | Oblique incision over McBurney\'s point for open appendectomy',
        },
      ],
      analogies: [
        'Los puertos laparoscópicos son como las entradas de un mando a distancia que permiten controlar instrumentos dentro de un espacio cerrado sin necesidad de abrirlo completamente. | Laparoscopic ports are like the inputs of a remote control that allow you to operate instruments inside a closed space without needing to open it completely.',
      ],
      examples: [
        'Paciente de 28 años con apendicitis no complicada. Se realiza apendicectomía laparoscópica con 3 puertos, disección del mesoapéndice con bisturí armónico, sección de la base con endoGIA, y extracción en bolsa. Tiempo quirúrgico: 35 minutos. Alta al día siguiente. | 28-year-old patient with uncomplicated appendicitis. Laparoscopic appendectomy performed with 3 ports, mesoappendix dissection with harmonic scalpel, base division with endoGIA, and extraction in a bag. Surgical time: 35 minutes. Discharged the next day.',
      ],
    },
    4: {
      level: 4,
      summary:
        'El manejo de la apendicitis incluye consideraciones sobre apendicitis complicada vs. no complicada, manejo del plastrón apendicular, apendicectomía de intervalo, uso de antibióticos, y abordaje del apéndice en posiciones anatómicas variantes (retrocecal, pélvico, subhepático). Las complicaciones postoperatorias incluyen infección de sitio quirúrgico, absceso intraabdominal, sangrado del muñón e íleo postoperatorio. | Management of appendicitis includes considerations for complicated vs. uncomplicated appendicitis, management of the appendicular phlegmon, interval appendectomy, antibiotic use, and approach to the appendix in variant anatomical positions (retrocecal, pelvic, subhepatic). Postoperative complications include surgical site infection, intraabdominal abscess, stump bleeding, and postoperative ileus.',
      explanation: `## Manejo avanzado y complicaciones de la apendicectomía | Advanced Management and Complications of Appendectomy

### Clasificación de la apendicitis | Classification of Appendicitis

**Apendicitis no complicada (simple) | Uncomplicated (simple) appendicitis**
- Apéndice inflamado sin perforación, gangrena o absceso | Inflamed appendix without perforation, gangrene, or abscess
- Tratamiento: apendicectomía laparoscópica urgente (dentro de 24 horas) | Treatment: urgent laparoscopic appendectomy (within 24 hours)
- Antibióticos profilácticos de dosis única | Single-dose prophylactic antibiotics

**Apendicitis complicada | Complicated appendicitis**
- Incluye: perforación, gangrena, absceso periapendicular, peritonitis | Includes: perforation, gangrene, periappendiceal abscess, peritonitis
- Requiere antibióticos terapéuticos de amplio espectro por 3-5 días mínimo | Requires broad-spectrum therapeutic antibiotics for at least 3-5 days
- Esquemas comunes: piperacilina/tazobactam, o ceftriaxona + metronidazol | Common regimens: piperacillin/tazobactam, or ceftriaxone + metronidazole

### Manejo del plastrón apendicular | Management of Appendicular Phlegmon

Cuando la apendicitis se presenta tardíamente (>5 días de síntomas), puede formarse un plastrón (masa inflamatoria que envuelve al apéndice): | When appendicitis presents late (>5 days of symptoms), a phlegmon (inflammatory mass enveloping the appendix) may form:

1. **Manejo conservador inicial**: Antibióticos IV, reposo intestinal, hidratación, monitoreo con imagen | **Initial conservative management**: IV antibiotics, bowel rest, hydration, imaging monitoring
2. **Drenaje percutáneo**: Si hay absceso >3-4 cm, drenaje guiado por imagen | **Percutaneous drainage**: If abscess >3-4 cm, image-guided drainage
3. **Apendicectomía de intervalo**: Cirugía electiva 6-8 semanas después de la resolución del cuadro agudo | **Interval appendectomy**: Elective surgery 6-8 weeks after resolution of the acute episode
4. **Controversia actual**: Algunos centros cuestionan la necesidad de la apendicectomía de intervalo si los síntomas resuelven completamente | **Current controversy**: Some centers question the need for interval appendectomy if symptoms resolve completely

### Variantes anatómicas y su impacto quirúrgico | Anatomical Variants and Their Surgical Impact

La posición del apéndice varía y afecta tanto la presentación clínica como el abordaje quirúrgico: | The position of the appendix varies and affects both clinical presentation and surgical approach:

| Posición | Frecuencia | Presentación | Consideración quirúrgica |
|----------|-----------|--------------|-------------------------|
| Retrocecal | 65% | Dolor lumbar, signo del psoas | Movilización del ciego necesaria |
| Pélvica | 30% | Dolor suprapúbico, síntomas urinarios | Trendelenburg profundo, disección pélvica |
| Subhepática | 2% | Dolor en hipocondrio derecho (simula colecistitis) | Puede requerir puerto adicional |
| Pre/postileal | 3% | Puede simular obstrucción intestinal | Cuidado con asas ileales |

### Complicaciones postoperatorias | Postoperative Complications

**Tempranas (0-30 días) | Early (0-30 days)**
- **Infección de sitio quirúrgico (ISQ)**: 3-5% en apendicitis no complicada, hasta 15-20% en complicada. Manejo: apertura de herida, antibióticos, curaciones | **Surgical site infection (SSI)**: 3-5% in uncomplicated, up to 15-20% in complicated. Management: wound opening, antibiotics, dressings
- **Absceso intraabdominal**: 2-6%. Se presenta con fiebre persistente, leucocitosis. Diagnóstico por TC. Tratamiento: drenaje percutáneo + antibióticos | **Intraabdominal abscess**: 2-6%. Presents with persistent fever, leukocytosis. Diagnosed by CT. Treatment: percutaneous drainage + antibiotics
- **Sangrado del muñón apendicular**: Raro pero grave. Puede requerir reintervención | **Appendicular stump bleeding**: Rare but serious. May require reoperation
- **Íleo postoperatorio**: Disminución de la motilidad intestinal. Manejo: deambulación temprana, dieta progresiva | **Postoperative ileus**: Decreased bowel motility. Management: early ambulation, progressive diet
- **Fuga del muñón**: Muy rara (<1%). Se presenta como peritonitis postoperatoria | **Stump leak**: Very rare (<1%). Presents as postoperative peritonitis

**Tardías | Late**
- **Apendicitis del muñón**: Inflamación del remanente apendicular si se dejó muñón largo (>5 mm) | **Stump appendicitis**: Inflammation of the appendicular remnant if a long stump (>5 mm) was left
- **Obstrucción intestinal por adherencias**: Riesgo a largo plazo, menor con laparoscopia | **Small bowel obstruction from adhesions**: Long-term risk, lower with laparoscopy
- **Hernia en sitio de puerto**: Especialmente en puerto de 12 mm sin cierre fascial | **Port-site hernia**: Especially at 12 mm port without fascial closure

### Antibioticoterapia | Antibiotic Therapy

| Escenario | Régimen | Duración |
|-----------|---------|----------|
| No complicada | Cefazolina 2g IV preop | Dosis única |
| Gangrenosa sin perforación | Cefoxitina 2g IV o pip/tazo | 24-48 horas |
| Perforada sin absceso | Pip/tazo 3.375g IV c/6h | 3-5 días |
| Perforada con absceso | Pip/tazo + drenaje | 5-7 días, según respuesta |

### Apendicectomía en poblaciones especiales | Appendectomy in Special Populations

- **Embarazadas**: Laparoscopia es segura en cualquier trimestre. Presiones de neumoperitoneo más bajas (10-12 mmHg). Monitoreo fetal pre y postoperatorio | **Pregnant patients**: Laparoscopy is safe in any trimester. Lower pneumoperitoneum pressures (10-12 mmHg). Pre- and postoperative fetal monitoring
- **Pediátrica**: Mayor tasa de perforación por diagnóstico tardío. Laparoscopia es estándar | **Pediatric**: Higher perforation rate due to delayed diagnosis. Laparoscopy is standard
- **Adultos mayores**: Mayor morbilidad. Considerar neoplasia del apéndice (enviar siempre a patología) | **Elderly**: Higher morbidity. Consider appendiceal neoplasm (always send to pathology)`,
      keyTerms: [
        {
          term: 'Plastrón apendicular | Appendicular phlegmon',
          definition:
            'Masa inflamatoria formada por el apéndice, omento y asas intestinales adyacentes que se desarrolla en apendicitis tardía | Inflammatory mass formed by the appendix, omentum, and adjacent bowel loops that develops in late appendicitis',
        },
        {
          term: 'Apendicectomía de intervalo | Interval appendectomy',
          definition:
            'Apendicectomía electiva realizada 6-8 semanas después de la resolución de un plastrón o absceso apendicular | Elective appendectomy performed 6-8 weeks after resolution of an appendicular phlegmon or abscess',
        },
        {
          term: 'Infección de sitio quirúrgico (ISQ) | Surgical site infection (SSI)',
          definition:
            'Infección que ocurre en el área de la incisión dentro de los 30 días posteriores a la cirugía | Infection occurring at the incision area within 30 days after surgery',
        },
        {
          term: 'Apendicitis del muñón | Stump appendicitis',
          definition:
            'Inflamación del remanente apendicular cuando se deja un muñón largo después de la apendicectomía | Inflammation of the appendicular remnant when a long stump is left after appendectomy',
        },
        {
          term: 'Fuga del muñón | Stump leak',
          definition:
            'Escape del contenido intestinal por la línea de cierre de la base apendicular | Leakage of intestinal content from the closure line of the appendicular base',
        },
      ],
      clinicalNotes:
        'La apendicitis es la emergencia quirúrgica abdominal más común. La TC con contraste IV tiene sensibilidad >95% y especificidad >95%. El retraso en la cirugía >24 horas aumenta el riesgo de perforación. Los antibióticos solos como alternativa a la cirugía en apendicitis no complicada muestran tasas de recurrencia de 25-40% a 5 años (ensayo CODA, NEJM 2020). | Appendicitis is the most common abdominal surgical emergency. CT with IV contrast has sensitivity >95% and specificity >95%. Delay in surgery >24 hours increases perforation risk. Antibiotics alone as alternative to surgery in uncomplicated appendicitis show 25-40% recurrence rates at 5 years (CODA trial, NEJM 2020).',
      examples: [
        'Paciente de 45 años con 7 días de dolor en fosa ilíaca derecha. TC muestra plastrón apendicular con absceso de 5 cm. Se realiza drenaje percutáneo guiado por TC + antibióticos IV. Mejoría clínica en 72 horas. Se programa apendicectomía de intervalo en 8 semanas. | 45-year-old patient with 7 days of right iliac fossa pain. CT shows appendicular phlegmon with 5 cm abscess. CT-guided percutaneous drainage + IV antibiotics performed. Clinical improvement in 72 hours. Interval appendectomy scheduled in 8 weeks.',
      ],
    },
    5: {
      level: 5,
      summary:
        'La evidencia contemporánea en apendicectomía abarca el debate antibióticos vs. cirugía (ensayo CODA), el manejo del hallazgo incidental de neoplasias apendiculares (incluidos tumores neuroendocrinos y pseudomixoma peritoneal), técnicas de cierre del muñón (endoloops vs. endoGIA vs. clips), cirugía de incisión única (SILS) y natural orifice transluminal endoscopic surgery (NOTES), y programas de recuperación mejorada (ERAS) en cirugía de urgencia. | Contemporary evidence in appendectomy encompasses the antibiotics vs. surgery debate (CODA trial), management of incidentally found appendiceal neoplasms (including neuroendocrine tumors and pseudomyxoma peritonei), stump closure techniques (endoloops vs. endoGIA vs. clips), single-incision laparoscopic surgery (SILS) and natural orifice transluminal endoscopic surgery (NOTES), and enhanced recovery after surgery (ERAS) programs in emergency surgery.',
      explanation: `## Evidencia avanzada y protocolos en apendicectomía | Advanced Evidence and Protocols in Appendectomy

### Antibióticos vs. cirugía: El debate actual | Antibiotics vs. Surgery: The Current Debate

**Ensayo CODA (Comparison of Outcomes of Antibiotic Drugs and Appendectomy, NEJM 2020) | CODA Trial (NEJM 2020)**
- Ensayo multicéntrico aleatorizado, 1,552 pacientes con apendicitis no complicada | Multicenter randomized trial, 1,552 patients with uncomplicated appendicitis
- Comparó antibióticos (10 días) vs. apendicectomía laparoscópica | Compared antibiotics (10 days) vs. laparoscopic appendectomy
- **Resultados a 90 días**: Los antibióticos no fueron inferiores respecto a la calidad de vida (EQ-5D). 29% de los pacientes del grupo de antibióticos requirieron apendicectomía dentro de los 90 días | **90-day results**: Antibiotics were noninferior regarding quality of life (EQ-5D). 29% of antibiotic group patients required appendectomy within 90 days
- **Resultados a 4 años**: Tasa de recurrencia/cirugía del 39% en el grupo de antibióticos | **4-year results**: 39% recurrence/surgery rate in antibiotic group
- **Hallazgo importante**: El 13% de los pacientes con apendicolito en el grupo de antibióticos tuvieron complicaciones vs. 3.7% sin apendicolito | **Important finding**: 13% of patients with appendicolith in antibiotic group had complications vs. 3.7% without appendicolith
- **Conclusión actual**: La apendicectomía sigue siendo el estándar. Los antibióticos son una alternativa razonable en pacientes seleccionados sin apendicolito que deseen evitar la cirugía | **Current conclusion**: Appendectomy remains the standard. Antibiotics are a reasonable alternative in selected patients without appendicolith who wish to avoid surgery

**Ensayo APPAC III (2022) | APPAC III Trial (2022)**
- Evaluó antibióticos IV seguidos de orales vs. solo orales desde el inicio | Evaluated IV antibiotics followed by oral vs. oral-only from the start
- Resultados: Los antibióticos solo orales fueron no inferiores | Results: Oral-only antibiotics were noninferior
- Implicaciones: Si se elige la vía de antibióticos, el tratamiento ambulatorio es factible | Implications: If the antibiotic pathway is chosen, outpatient treatment is feasible

### Neoplasias apendiculares: Hallazgos incidentales | Appendiceal Neoplasms: Incidental Findings

El 1-2% de las apendicectomías revelan una neoplasia en la patología. El manejo depende del tipo: | 1-2% of appendectomies reveal a neoplasm on pathology. Management depends on the type:

**Tumor neuroendocrino (carcinoide) del apéndice | Appendiceal neuroendocrine tumor (carcinoid)**
- Más frecuente (hasta 50% de neoplasias apendiculares) | Most frequent (up to 50% of appendiceal neoplasms)
- **<1 cm, base libre, bajo grado**: Apendicectomía es suficiente | **<1 cm, clear base, low grade**: Appendectomy is sufficient
- **1-2 cm**: Individualizar. Factores de riesgo: invasión del mesoapéndice >3 mm, invasión linfovascular, Ki-67 alto | **1-2 cm**: Individualize. Risk factors: mesoappendix invasion >3 mm, lymphovascular invasion, high Ki-67
- **>2 cm o margen positivo**: Hemicolectomía derecha | **>2 cm or positive margin**: Right hemicolectomy

**Adenocarcinoma del apéndice | Appendiceal adenocarcinoma**
- Raro. Requiere hemicolectomía derecha con linfadenectomía | Rare. Requires right hemicolectomy with lymphadenectomy
- Considerar quimioterapia adyuvante según estadificación | Consider adjuvant chemotherapy based on staging

**Neoplasia mucinosa del apéndice y pseudomixoma peritoneal | Appendiceal mucinous neoplasm and pseudomyxoma peritonei**
- Neoplasia mucinosa de bajo grado (LAMN): Si la base está libre y no hay mucina extra-apendicular, la apendicectomía puede ser suficiente con seguimiento estrecho | Low-grade appendiceal mucinous neoplasm (LAMN): If base is clear and no extra-appendiceal mucin, appendectomy may suffice with close follow-up
- Si hay mucina peritoneal (pseudomixoma): Citorreducción + HIPEC (quimioterapia intraperitoneal hipertérmica) | If peritoneal mucin (pseudomyxoma): Cytoreduction + HIPEC (hyperthermic intraperitoneal chemotherapy)

### Técnicas de cierre del muñón: Revisión de evidencia | Stump Closure Techniques: Evidence Review

| Técnica | Ventajas | Desventajas | Evidencia |
|---------|----------|-------------|-----------|
| EndoGIA | Cierre seguro, rápido, menor fuga | Costo elevado, mayor calibre de trocar | Gold standard en muchos centros |
| Endoloops | Menor costo, trocares pequeños | Más tiempo, curva de aprendizaje | Seguro en apéndice no necrótica |
| Clips (Hem-o-lok) | Bajo costo, rápida aplicación | No recomendado si base edematosa | Evidencia creciente a favor |
| Invaginación del muñón | Cobertura peritoneal | Más tiempo, no laparoscópica fácil | Sin beneficio demostrado en abierta |

**Meta-análisis (Cochrane 2023)**: No hay diferencia significativa en complicaciones entre endoloops y endoGIA. Los endoloops son más costo-efectivos. | **Meta-analysis (Cochrane 2023)**: No significant difference in complications between endoloops and endoGIA. Endoloops are more cost-effective.

### Cirugía de mínima invasión avanzada | Advanced Minimally Invasive Surgery

**SILS (Single-Incision Laparoscopic Surgery) | Cirugía laparoscópica de puerto único**
- Todos los instrumentos a través de un solo puerto umbilical especial | All instruments through a single special umbilical port
- Ventaja: cosmética (cicatriz oculta en ombligo) | Advantage: cosmetic (scar hidden in navel)
- Desventajas: pérdida de triangulación, curva de aprendizaje, mayor dolor en puerto | Disadvantages: loss of triangulation, learning curve, more pain at port
- Meta-análisis: Resultados comparables a laparoscopia convencional, pero mayor tiempo quirúrgico | Meta-analysis: Comparable outcomes to conventional laparoscopy, but longer operative time

**NOTES (Natural Orifice Transluminal Endoscopic Surgery)**
- Apendicectomía transgástrica o transvaginal | Transgastric or transvaginal appendectomy
- Aún experimental, sin adopción clínica generalizada | Still experimental, no widespread clinical adoption

### Protocolos ERAS en apendicectomía de urgencia | ERAS Protocols in Emergency Appendectomy

Adaptación de los protocolos de Recuperación Mejorada Después de Cirugía (ERAS) a la cirugía de urgencia: | Adaptation of Enhanced Recovery After Surgery (ERAS) protocols to emergency surgery:

**Preoperatorio | Preoperative**
- Carga de carbohidratos cuando sea posible (si <2 horas a cirugía: 200 mL de líquido claro con carbohidratos) | Carbohydrate loading when possible (if <2 hours to surgery: 200 mL clear fluid with carbohydrates)
- Analgesia multimodal preemptiva: paracetamol IV + AINE (si no hay contraindicación) | Preemptive multimodal analgesia: IV acetaminophen + NSAID (if no contraindication)
- Profilaxis antiemética: dexametasona 4-8 mg + ondansetrón 4 mg | Antiemetic prophylaxis: dexamethasone 4-8 mg + ondansetron 4 mg

**Intraoperatorio | Intraoperative**
- Fluidoterapia restrictiva guiada por objetivos | Goal-directed restrictive fluid therapy
- Normotermia (calentador de fluidos, manta térmica) | Normothermia (fluid warmer, warming blanket)
- Bloqueo del plano del transverso del abdomen (TAP block) ecoguiado | Ultrasound-guided transversus abdominis plane (TAP) block
- Infiltración de herida con anestésico local (bupivacaína/ropivacaína) | Wound infiltration with local anesthetic (bupivacaine/ropivacaine)

**Postoperatorio | Postoperative**
- Deambulación dentro de las 6 horas | Ambulation within 6 hours
- Dieta líquida a las 4-6 horas, avance a sólidos según tolerancia | Liquid diet at 4-6 hours, advance to solids as tolerated
- Analgesia multimodal libre de opioides cuando sea posible: paracetamol + AINE ± gabapentinoide | Opioid-free multimodal analgesia when possible: acetaminophen + NSAID ± gabapentinoid
- Criterios de alta: tolerancia a dieta, dolor controlado con analgesia oral, afebrile, deambulando | Discharge criteria: diet tolerance, pain controlled with oral analgesia, afebrile, ambulating

**Evidencia**: La implementación de ERAS en apendicectomía de urgencia reduce la estancia hospitalaria en 0.5-1 día y disminuye el consumo de opioides sin aumentar complicaciones ni readmisiones (meta-análisis, Annals of Surgery 2023). | **Evidence**: Implementation of ERAS in emergency appendectomy reduces hospital stay by 0.5-1 day and decreases opioid consumption without increasing complications or readmissions (meta-analysis, Annals of Surgery 2023).

### Aprendizaje automático y predicción | Machine Learning and Prediction

- Modelos de IA para predicción de apendicitis complicada basados en marcadores inflamatorios y hallazgos de imagen tienen AUC de 0.85-0.92 | AI models for prediction of complicated appendicitis based on inflammatory markers and imaging findings have AUC of 0.85-0.92
- Herramientas de apoyo a la decisión clínica incorporando redes neuronales están en desarrollo para guiar la elección entre antibióticos y cirugía | Clinical decision support tools incorporating neural networks are in development to guide the choice between antibiotics and surgery`,
      keyTerms: [
        {
          term: 'Ensayo CODA | CODA Trial',
          definition:
            'Ensayo multicéntrico aleatorizado que comparó antibióticos vs. apendicectomía para apendicitis no complicada, demostrando que los antibióticos son una alternativa viable pero con alta tasa de recurrencia | Multicenter randomized trial comparing antibiotics vs. appendectomy for uncomplicated appendicitis, showing antibiotics are a viable alternative but with high recurrence rate',
        },
        {
          term: 'Pseudomixoma peritoneal | Pseudomyxoma peritonei',
          definition:
            'Acumulación de mucina gelatinosa en la cavidad peritoneal, frecuentemente originada de neoplasias mucinosas del apéndice | Accumulation of gelatinous mucin in the peritoneal cavity, frequently originating from appendiceal mucinous neoplasms',
        },
        {
          term: 'HIPEC | HIPEC',
          definition:
            'Quimioterapia intraperitoneal hipertérmica, utilizada tras citorreducción en pseudomixoma peritoneal y carcinomatosis | Hyperthermic intraperitoneal chemotherapy, used after cytoreduction in pseudomyxoma peritonei and carcinomatosis',
        },
        {
          term: 'SILS | SILS',
          definition:
            'Cirugía laparoscópica de incisión única, donde todos los instrumentos se insertan a través de un solo puerto umbilical | Single-incision laparoscopic surgery, where all instruments are inserted through a single umbilical port',
        },
        {
          term: 'ERAS | ERAS',
          definition:
            'Recuperación Mejorada Después de Cirugía: protocolo multimodal basado en evidencia para optimizar la recuperación perioperatoria | Enhanced Recovery After Surgery: evidence-based multimodal protocol to optimize perioperative recovery',
        },
        {
          term: 'Bloqueo TAP | TAP block',
          definition:
            'Bloqueo del plano del transverso del abdomen: técnica de anestesia regional que bloquea los nervios de la pared abdominal | Transversus abdominis plane block: regional anesthesia technique that blocks the abdominal wall nerves',
        },
      ],
      clinicalNotes:
        'La decisión entre antibióticos y cirugía debe individualizarse. La presencia de apendicolito es un factor clave que favorece la cirugía sobre los antibióticos. Toda pieza de apendicectomía debe enviarse a patología para descartar neoplasia, especialmente en pacientes >40 años. La implementación de protocolos ERAS en urgencias reduce la morbilidad y la estancia hospitalaria. El cierre del muñón con endoloops es seguro y más costo-efectivo que el endoGIA en casos no complicados. | The decision between antibiotics and surgery must be individualized. The presence of an appendicolith is a key factor favoring surgery over antibiotics. All appendectomy specimens must be sent to pathology to rule out neoplasm, especially in patients >40 years. Implementation of ERAS protocols in emergencies reduces morbidity and hospital stay. Stump closure with endoloops is safe and more cost-effective than endoGIA in uncomplicated cases.',
      examples: [
        'Paciente de 55 años sometida a apendicectomía laparoscópica por apendicitis aguda. Patología revela tumor neuroendocrino de 1.8 cm con invasión del mesoapéndice de 4 mm e invasión linfovascular. Se discute en comité multidisciplinario y se programa hemicolectomía derecha laparoscópica. Estadificación postoperatoria: T3N0M0. Seguimiento con cromogranina A y 5-HIAA cada 6 meses. | 55-year-old patient who underwent laparoscopic appendectomy for acute appendicitis. Pathology reveals a 1.8 cm neuroendocrine tumor with 4 mm mesoappendix invasion and lymphovascular invasion. Discussed at multidisciplinary committee and laparoscopic right hemicolectomy is scheduled. Postoperative staging: T3N0M0. Follow-up with chromogranin A and 5-HIAA every 6 months.',
      ],
    },
  },

  media: [],
  citations: [
    {
      id: 'coda-trial-2020',
      type: 'journal',
      title: 'A Randomized Trial Comparing Antibiotics with Appendectomy for Appendicitis',
      authors: ['CODA Collaborative'],
      source: 'New England Journal of Medicine',
      chapter: '383',
      page: '1907-1919',
      url: 'https://doi.org/10.1056/NEJMoa2014320',
      accessedDate: '2025-01-15',
    },
    {
      id: 'cochrane-stump-closure-2023',
      type: 'journal',
      title: 'Stump closure techniques during laparoscopic appendectomy',
      authors: ['Defined by Cochrane Collaboration'],
      source: 'Cochrane Database of Systematic Reviews',
      url: 'https://www.cochranelibrary.com/',
      accessedDate: '2025-01-15',
    },
    {
      id: 'sages-guidelines-appendectomy',
      type: 'guideline',
      title: 'SAGES Guidelines for Laparoscopic Appendectomy',
      authors: ['Society of American Gastrointestinal and Endoscopic Surgeons'],
      source: 'SAGES',
      url: 'https://www.sages.org/publications/guidelines/',
      accessedDate: '2025-01-15',
    },
    {
      id: 'schwartz-principles-surgery',
      type: 'textbook',
      title: 'Schwartz\'s Principles of Surgery',
      authors: ['Brunicardi, F.C.'],
      source: 'McGraw-Hill Education',
      chapter: 'The Appendix',
      page: '1241-1262',
    },
    {
      id: 'eras-emergency-2023',
      type: 'journal',
      title: 'Enhanced Recovery After Emergency Surgery: A Systematic Review and Meta-Analysis',
      source: 'Annals of Surgery',
      accessedDate: '2025-01-15',
    },
  ],
  crossReferences: [
    {
      targetId: 'appendectomy',
      targetType: 'topic',
      relationship: 'related',
      label: 'Appendectomy (English version) | Apendicectomía (versión en inglés)',
    },
    {
      targetId: 'colecistectomia-cholecystectomy',
      targetType: 'process',
      relationship: 'sibling',
      label: 'Colecistectomía | Cholecystectomy',
    },
    {
      targetId: 'digestive-system',
      targetType: 'system',
      relationship: 'parent',
      label: 'Sistema digestivo | Digestive system',
    },
    {
      targetId: 'peritonitis',
      targetType: 'condition',
      relationship: 'related',
      label: 'Peritonitis | Peritonitis',
    },
  ],
  tags: {
    systems: ['digestivo | digestive', 'gastrointestinal'],
    topics: ['cirugía | surgery', 'urgencias | emergency', 'laparoscopia | laparoscopy', 'apendicitis | appendicitis'],
    keywords: [
      'apendicectomía', 'appendectomy', 'apendicitis', 'appendicitis',
      'laparoscopia', 'laparoscopy', 'cirugía abdominal', 'abdominal surgery',
      'plastrón apendicular', 'appendicular phlegmon', 'ERAS', 'CODA trial',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery'],
    },
  },

  createdAt: '2025-06-01T00:00:00.000Z',
  updatedAt: '2025-06-01T00:00:00.000Z',
  version: 1,
  status: 'published',
};
