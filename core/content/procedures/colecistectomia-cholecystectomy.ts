import { EducationalContent } from '../types';

export const colecistectomiaCholecystectomyContent: EducationalContent = {
  id: 'colecistectomia-cholecystectomy',
  type: 'process',
  name: 'Colecistectomía | Cholecystectomy',
  nameEs: 'Colecistectomía',
  alternateNames: [
    'Extirpación de la vesícula biliar | Gallbladder removal',
    'Colecistectomía laparoscópica | Laparoscopic cholecystectomy',
    'Colecistectomía abierta | Open cholecystectomy',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'La colecistectomía es una cirugía para quitar la vesícula biliar, un órgano pequeño debajo del hígado que guarda bilis. Se hace cuando hay cálculos (piedras) en la vesícula que causan dolor o infecciones. | A cholecystectomy is a surgery to remove the gallbladder, a small organ under the liver that stores bile. It is done when there are gallstones (stones) in the gallbladder causing pain or infections.',
      explanation: `## ¿Qué es una colecistectomía? | What Is a Cholecystectomy?

La colecistectomía es una operación para quitar la vesícula biliar. La vesícula es un órgano pequeño con forma de pera que está debajo del hígado. Guarda un líquido llamado bilis que ayuda a digerir las grasas. | A cholecystectomy is an operation to remove the gallbladder. The gallbladder is a small pear-shaped organ under the liver. It stores a fluid called bile that helps digest fats.

### ¿Por qué se necesita esta cirugía? | Why Is This Surgery Needed?

A veces se forman piedras (cálculos biliares) dentro de la vesícula. Estas piedras pueden causar: | Sometimes stones (gallstones) form inside the gallbladder. These stones can cause:

- **Dolor fuerte** en la parte superior derecha del abdomen, especialmente después de comer grasas | **Severe pain** in the upper right part of the belly, especially after eating fats
- **Infección de la vesícula** (colecistitis): fiebre, dolor constante, náuseas | **Gallbladder infection** (cholecystitis): fever, constant pain, nausea
- **Bloqueo de los conductos biliares**: puede causar piel amarilla (ictericia) o infección grave (colangitis) | **Blockage of bile ducts**: can cause yellow skin (jaundice) or serious infection (cholangitis)
- **Pancreatitis biliar**: inflamación del páncreas por una piedra que se atora | **Biliary pancreatitis**: inflammation of the pancreas from a stone getting stuck

### ¿Cómo se hace la cirugía? | How Is the Surgery Done?

La forma más común es la **cirugía laparoscópica** (por cortecitos pequeños): | The most common way is **laparoscopic surgery** (through small cuts):

1. Se hacen 4 cortecitos pequeños en el abdomen | 4 small cuts are made in the belly
2. Se infla el abdomen con gas para tener espacio | The belly is inflated with gas for space
3. Se usa una cámara para ver adentro | A camera is used to see inside
4. Se separa la vesícula del hígado y se saca por uno de los cortecitos | The gallbladder is separated from the liver and removed through one of the small cuts

### Preparación | Preparation

- No coma ni beba nada por lo menos 8 horas antes | Do not eat or drink for at least 8 hours before
- Avise a su doctor sobre todos sus medicamentos | Tell your doctor about all your medications
- Alguien debe acompañarle para llevarlo a casa | Someone must accompany you to drive you home

### Recuperación | Recovery

- La mayoría de personas van a casa el mismo día | Most people go home the same day
- Puede volver a actividades normales en 1 a 2 semanas | Can return to normal activities in 1 to 2 weeks
- Puede comer normalmente, aunque al principio es mejor evitar comidas muy grasosas | Can eat normally, though at first it is better to avoid very fatty foods
- Se puede vivir perfectamente bien sin la vesícula | You can live perfectly fine without the gallbladder

### ¿Cuándo llamar al doctor? | When to Call the Doctor?

- Fiebre mayor de 38.3°C (101°F) | Fever above 38.3°C (101°F)
- Dolor que empeora o no mejora | Pain that worsens or does not improve
- Piel u ojos amarillos | Yellow skin or eyes
- Heridas rojas, hinchadas, o con pus | Wounds that are red, swollen, or draining pus`,
      keyTerms: [
        {
          term: 'Vesícula biliar | Gallbladder',
          definition:
            'Órgano pequeño debajo del hígado que guarda bilis | Small organ under the liver that stores bile',
        },
        {
          term: 'Cálculos biliares | Gallstones',
          definition:
            'Piedras que se forman dentro de la vesícula biliar | Stones that form inside the gallbladder',
        },
        {
          term: 'Bilis | Bile',
          definition:
            'Líquido que ayuda a digerir las grasas | Fluid that helps digest fats',
        },
        {
          term: 'Colecistitis | Cholecystitis',
          definition:
            'Inflamación e infección de la vesícula biliar | Inflammation and infection of the gallbladder',
        },
      ],
      analogies: [
        'La vesícula biliar es como una bolsita que guarda jabón (bilis) para lavar las grasas de la comida. Cuando se forman piedras, es como si la bolsita se tapara y dejara de funcionar bien. | The gallbladder is like a small bag that stores soap (bile) to wash the fats from food. When stones form, it is as if the bag gets clogged and stops working well.',
      ],
      examples: [
        'Doña Carmen tenía dolor fuerte después de comer comidas grasosas. El doctor le encontró piedras en la vesícula con un ultrasonido. Le hicieron cirugía laparoscópica y al día siguiente ya estaba en casa sintiéndose mucho mejor. | Doña Carmen had severe pain after eating fatty meals. The doctor found stones in her gallbladder with an ultrasound. She had laparoscopic surgery and the next day she was home feeling much better.',
      ],
      patientCounselingPoints: [
        'La cirugía de vesícula es una de las más comunes y seguras | Gallbladder surgery is one of the most common and safe',
        'Puede vivir completamente normal sin la vesícula | You can live completely normally without the gallbladder',
        'Después de la cirugía, el hígado sigue produciendo bilis normalmente | After surgery, the liver continues to produce bile normally',
        'Algunas personas tienen heces más blandas por unas semanas, esto es normal | Some people have softer stools for a few weeks, this is normal',
      ],
    },
    2: {
      level: 2,
      summary:
        'Los cálculos biliares se forman por exceso de colesterol o bilirrubina en la bilis. Los factores de riesgo incluyen las "4 F" (female, forty, fat, fertile). El diagnóstico se confirma con ultrasonido y se evalúan complicaciones con laboratorios e imagen avanzada. La colecistectomía laparoscópica es el tratamiento de elección para colelitiasis sintomática. | Gallstones form from excess cholesterol or bilirubin in bile. Risk factors include the "4 Fs" (female, forty, fat, fertile). Diagnosis is confirmed with ultrasound and complications are assessed with labs and advanced imaging. Laparoscopic cholecystectomy is the treatment of choice for symptomatic cholelithiasis.',
      explanation: `## Colelitiasis: Fisiopatología, diagnóstico y decisión quirúrgica | Cholelithiasis: Pathophysiology, Diagnosis, and Surgical Decision

### Tipos de cálculos biliares | Types of Gallstones

- **Cálculos de colesterol (80%)**: Amarillos, formados cuando hay exceso de colesterol en la bilis | **Cholesterol stones (80%)**: Yellow, formed when there is excess cholesterol in bile
- **Cálculos de pigmento (20%)**: Negros o marrones, formados por exceso de bilirrubina | **Pigment stones (20%)**: Black or brown, formed by excess bilirubin
  - Negros: Asociados a hemólisis crónica y cirrosis | Black: Associated with chronic hemolysis and cirrhosis
  - Marrones: Asociados a infección de vía biliar y estasis | Brown: Associated with biliary infection and stasis

### Factores de riesgo | Risk Factors

Las clásicas "4 F" (nemotecnia en inglés): | The classic "4 Fs" (English mnemonic):
- **Female**: Mujeres (2-3 veces más riesgo por estrógenos) | **Female**: Women (2-3 times higher risk due to estrogens)
- **Forty**: Mayores de 40 años | **Forty**: Over 40 years old
- **Fat**: Obesidad (IMC >30) | **Fat**: Obesity (BMI >30)
- **Fertile**: Embarazo y multiparidad | **Fertile**: Pregnancy and multiparity

Otros factores: diabetes, pérdida rápida de peso, dieta alta en grasas, predisposición genética, algunos medicamentos (estrógenos, fibratos, octreótida). | Other factors: diabetes, rapid weight loss, high-fat diet, genetic predisposition, some medications (estrogens, fibrates, octreotide).

### Presentaciones clínicas | Clinical Presentations

| Condición | Síntomas | Urgencia |
|-----------|----------|----------|
| Cólico biliar | Dolor episódico postprandial en hipocondrio derecho, 30 min a 6 horas | Electivo |
| Colecistitis aguda | Dolor constante >6h, fiebre, Murphy positivo | Urgente (dentro de 72h) |
| Coledocolitiasis | Dolor + ictericia + elevación de enzimas hepáticas | Semi-urgente |
| Colangitis | Tríada de Charcot: fiebre, ictericia, dolor | Emergencia |
| Pancreatitis biliar | Dolor epigástrico intenso, lipasa elevada | Emergencia |

### Diagnóstico | Diagnosis

**Ultrasonido abdominal** (estudio inicial de elección): | **Abdominal ultrasound** (initial study of choice):
- Sensibilidad >95% para cálculos en la vesícula | Sensitivity >95% for gallstones in the gallbladder
- Evalúa: tamaño de la vesícula, grosor de la pared (>4 mm = inflamación), líquido perivesicular, dilatación del conducto colédoco | Evaluates: gallbladder size, wall thickness (>4 mm = inflammation), pericholecystic fluid, common bile duct dilation

**Laboratorios**: | **Labs**:
- Bilirrubina total y directa, fosfatasa alcalina, GGT, AST, ALT | Total and direct bilirubin, alkaline phosphatase, GGT, AST, ALT
- Lipasa (para descartar pancreatitis) | Lipase (to rule out pancreatitis)
- Biometría hemática (leucocitosis en colecistitis) | CBC (leukocytosis in cholecystitis)

**Imagen avanzada**: | **Advanced imaging**:
- **Colangiorresonancia magnética (CRMN)**: Para evaluar coledocolitiasis cuando hay sospecha clínica | **MRCP**: To evaluate choledocholithiasis when clinical suspicion exists
- **CPRE (colangiopancreatografía retrógrada endoscópica)**: Diagnóstica y terapéutica para extraer cálculos del colédoco | **ERCP**: Diagnostic and therapeutic for extracting common bile duct stones
- **Gammagrafía hepatobiliar (HIDA)**: Para confirmar colecistitis cuando el ultrasonido no es concluyente | **Hepatobiliary scintigraphy (HIDA)**: To confirm cholecystitis when ultrasound is inconclusive

### Indicaciones para colecistectomía | Indications for Cholecystectomy

- Colelitiasis sintomática (cólicos biliares recurrentes) | Symptomatic cholelithiasis (recurrent biliary colic)
- Colecistitis aguda | Acute cholecystitis
- Pancreatitis biliar (después de resolverse el episodio agudo) | Biliary pancreatitis (after the acute episode resolves)
- Vesícula en porcelana (riesgo de cáncer) | Porcelain gallbladder (cancer risk)
- Pólipos >1 cm o en crecimiento | Polyps >1 cm or growing`,
      keyTerms: [
        {
          term: 'Colelitiasis | Cholelithiasis',
          definition:
            'Presencia de cálculos (piedras) en la vesícula biliar | Presence of stones in the gallbladder',
        },
        {
          term: 'Coledocolitiasis | Choledocholithiasis',
          definition:
            'Presencia de cálculos en el conducto colédoco (vía biliar principal) | Presence of stones in the common bile duct (main bile duct)',
        },
        {
          term: 'Signo de Murphy | Murphy sign',
          definition:
            'Detención de la inspiración al palpar el área de la vesícula, indicativo de colecistitis | Arrest of inspiration when palpating the gallbladder area, indicative of cholecystitis',
        },
        {
          term: 'Tríada de Charcot | Charcot triad',
          definition:
            'Fiebre, ictericia y dolor en hipocondrio derecho: clásica de colangitis | Fever, jaundice, and right upper quadrant pain: classic for cholangitis',
        },
        {
          term: 'CPRE | ERCP',
          definition:
            'Procedimiento endoscópico para visualizar y tratar problemas de la vía biliar y pancreática | Endoscopic procedure to visualize and treat biliary and pancreatic duct problems',
        },
      ],
      analogies: [
        'Los cálculos biliares se forman como cristales de azúcar en un frasco de jarabe muy concentrado: cuando la bilis tiene demasiado colesterol, se cristaliza y forma piedras. | Gallstones form like sugar crystals in a jar of overly concentrated syrup: when bile has too much cholesterol, it crystallizes and forms stones.',
      ],
      examples: [
        'Una mujer de 42 años con obesidad presenta dolor en el lado derecho superior del abdomen después de comer pizza. El ultrasonido muestra múltiples cálculos en la vesícula y pared engrosada. Bilirrubinas y enzimas hepáticas normales. Se programa colecistectomía laparoscópica electiva. | A 42-year-old woman with obesity presents with pain in the upper right abdomen after eating pizza. Ultrasound shows multiple gallstones and thickened wall. Bilirubin and liver enzymes are normal. Elective laparoscopic cholecystectomy is scheduled.',
      ],
    },
    3: {
      level: 3,
      summary:
        'La colecistectomía laparoscópica estándar utiliza 4 puertos y sigue los principios de la "visión crítica de seguridad" (CVS) de Strasberg para identificar el conducto cístico y la arteria cística antes de la ligadura. La disección se realiza en el triángulo hepatocístico (de Calot). La colangiografía intraoperatoria o ecografía laparoscópica se utilizan para detectar coledocolitiasis o variantes anatómicas. | Standard laparoscopic cholecystectomy uses 4 ports and follows Strasberg\'s "critical view of safety" (CVS) principles to identify the cystic duct and cystic artery before ligation. Dissection is performed in the hepatocystic triangle (of Calot). Intraoperative cholangiography or laparoscopic ultrasound is used to detect choledocholithiasis or anatomical variants.',
      explanation: `## Técnica quirúrgica de la colecistectomía | Surgical Technique of Cholecystectomy

### Colecistectomía laparoscópica: Técnica estándar | Laparoscopic Cholecystectomy: Standard Technique

#### Preparación | Preparation
- Anestesia general con intubación endotraqueal | General anesthesia with endotracheal intubation
- Antibiótico profiláctico: cefazolina 2g IV (indicado en colecistitis aguda, no necesario de rutina en electiva según guías recientes) | Prophylactic antibiotic: cefazolin 2g IV (indicated in acute cholecystitis, not routinely needed in elective per recent guidelines)
- Posición supina con ambos brazos en abducción o "posición francesa" (cirujano entre las piernas) | Supine with both arms abducted or "French position" (surgeon between legs)
- Sonda orogástrica para descomprimir el estómago | Orogastric tube to decompress the stomach

#### Colocación de puertos (técnica americana) | Port Placement (American technique)
- **Puerto umbilical (10-12 mm)**: Cámara | **Umbilical port (10-12 mm)**: Camera
- **Puerto epigástrico (5-10 mm)**: Mano derecha del cirujano, instrumento principal de disección | **Epigastric port (5-10 mm)**: Surgeon's right hand, main dissection instrument
- **Puerto subcostal derecho anterior (5 mm)**: Retracción del infundíbulo | **Right anterior subcostal port (5 mm)**: Infundibulum retraction
- **Puerto subcostal derecho lateral (5 mm)**: Retracción del fondo vesicular cefálicamente | **Right lateral subcostal port (5 mm)**: Cephalad retraction of the gallbladder fundus

Neumoperitoneo con CO2 a 12-15 mmHg. Posición de Trendelenburg inverso y lateralización izquierda. | Pneumoperitoneum with CO2 at 12-15 mmHg. Reverse Trendelenburg and left lateral tilt.

#### Visión Crítica de Seguridad (CVS) de Strasberg | Strasberg's Critical View of Safety (CVS)

**Este es el paso más importante de toda la cirugía para prevenir lesión de vía biliar.** | **This is the most important step of the entire surgery to prevent bile duct injury.**

Los tres criterios de la CVS son: | The three criteria of the CVS are:

1. **El triángulo hepatocístico debe estar despejado** de grasa y tejido fibroso | **The hepatocystic triangle must be cleared** of fat and fibrous tissue
2. **La placa cística (tercio inferior de la fosa vesicular) debe estar expuesta** | **The cystic plate (lower third of the gallbladder fossa) must be exposed**
3. **Solo dos estructuras deben entrar en la vesícula**: el conducto cístico y la arteria cística | **Only two structures should enter the gallbladder**: the cystic duct and the cystic artery

Solo después de lograr la CVS se procede a clipar y cortar. | Only after achieving the CVS does one proceed to clip and cut.

#### Pasos de la cirugía | Steps of Surgery

1. **Retracción de la vesícula**: El ayudante retrae el fondo cefálicamente y el infundíbulo lateralmente | **Gallbladder retraction**: The assistant retracts the fundus cephalad and the infundibulum laterally
2. **Disección del triángulo hepatocístico**: Disección roma y con gancho/espátula del peritoneo en ambas caras (anterior y posterior) del triángulo | **Hepatocystic triangle dissection**: Blunt and hook/spatula dissection of the peritoneum on both sides (anterior and posterior) of the triangle
3. **Lograr la CVS**: Asegurar los tres criterios descritos arriba | **Achieve CVS**: Ensure the three criteria described above
4. **Clipaje del conducto cístico**: 2 clips proximales, 1 distal; cortar entre ellos | **Cystic duct clipping**: 2 proximal clips, 1 distal; cut between them
5. **Clipaje de la arteria cística**: 2 clips proximales, 1 distal; cortar entre ellos | **Cystic artery clipping**: 2 proximal clips, 1 distal; cut between them
6. **Disección de la vesícula del lecho hepático**: Con gancho de cauterio o espátula, en el plano entre la vesícula y el hígado | **Gallbladder dissection from liver bed**: With cautery hook or spatula, in the plane between gallbladder and liver
7. **Extracción de la vesícula**: En bolsa de especímenes a través del puerto umbilical o epigástrico | **Gallbladder extraction**: In a specimen bag through the umbilical or epigastric port
8. **Inspección final**: Verificar hemostasia del lecho hepático, ausencia de fuga biliar, integridad de clips | **Final inspection**: Verify liver bed hemostasis, absence of bile leak, clip integrity
9. **Cierre**: Desuflar, retirar puertos bajo visión, cierre de fascia en puertos ≥10 mm | **Closure**: Deflate, remove ports under vision, fascial closure at ports ≥10 mm

#### Colangiografía intraoperatoria (CIO) | Intraoperative Cholangiography (IOC)
- Se cateteriza el conducto cístico antes de cortarlo | The cystic duct is catheterized before cutting it
- Se inyecta contraste y se toma fluoroscopia | Contrast is injected and fluoroscopy is performed
- Indicaciones: sospecha de coledocolitiasis, anatomía no clara, elevación de enzimas hepáticas | Indications: suspicion of choledocholithiasis, unclear anatomy, elevated liver enzymes
- Algunos cirujanos la realizan de rutina; otros de manera selectiva | Some surgeons perform it routinely; others selectively

### Colecistectomía abierta | Open Cholecystectomy

#### Indicaciones | Indications
- Incapacidad para establecer la CVS por laparoscopia | Inability to establish CVS laparoscopically
- Sospecha de cáncer de vesícula | Suspicion of gallbladder cancer
- Cirrosis con hipertensión portal severa | Cirrhosis with severe portal hypertension
- Conversión por complicaciones intraoperatorias | Conversion due to intraoperative complications

#### Técnica | Technique
- Incisión subcostal derecha (Kocher) o línea media | Right subcostal (Kocher) or midline incision
- Puede ser anterógrada (desde el cístico) o retrógrada (desde el fondo) | Can be antegrade (from the cystic) or retrograde (from the fundus)
- La disección retrógrada (del fondo hacia abajo) es más segura en colecistitis severa | Retrograde dissection (fundus-down) is safer in severe cholecystitis

### Colecistectomía subtotal | Subtotal Cholecystectomy

Técnica de rescate cuando la disección es muy peligrosa (inflamación severa, fibrosis, síndrome de Mirizzi): | Bail-out technique when dissection is very dangerous (severe inflammation, fibrosis, Mirizzi syndrome):
- Se reseca la mayor parte de la vesícula dejando la pared posterior adherida al hígado | Most of the gallbladder is resected leaving the posterior wall attached to the liver
- El muñón se cierra con sutura o grapas | The remnant is closed with suture or staples
- Reduce significativamente el riesgo de lesión de vía biliar | Significantly reduces the risk of bile duct injury`,
      keyTerms: [
        {
          term: 'Visión Crítica de Seguridad (CVS) | Critical View of Safety (CVS)',
          definition:
            'Técnica de Strasberg que requiere visualizar claramente solo el conducto y la arteria cística entrando a la vesícula antes de clipar, previniendo lesión de vía biliar | Strasberg\'s technique requiring clear visualization of only the cystic duct and cystic artery entering the gallbladder before clipping, preventing bile duct injury',
        },
        {
          term: 'Triángulo hepatocístico (de Calot) | Hepatocystic triangle (of Calot)',
          definition:
            'Espacio triangular delimitado por el conducto cístico, el conducto hepático común y el borde inferior del hígado | Triangular space bounded by the cystic duct, common hepatic duct, and inferior edge of the liver',
        },
        {
          term: 'Colangiografía intraoperatoria | Intraoperative cholangiography',
          definition:
            'Estudio con contraste durante la cirugía para visualizar la anatomía de la vía biliar y detectar cálculos residuales | Contrast study during surgery to visualize bile duct anatomy and detect residual stones',
        },
        {
          term: 'Colecistectomía subtotal | Subtotal cholecystectomy',
          definition:
            'Técnica de rescate donde se deja la pared posterior de la vesícula adherida al hígado para evitar lesión de estructuras vitales | Bail-out technique where the posterior gallbladder wall is left attached to the liver to avoid injury to vital structures',
        },
        {
          term: 'Placa cística | Cystic plate',
          definition:
            'Porción de la cápsula de Glisson que separa la vesícula biliar del parénquima hepático | Portion of Glisson\'s capsule separating the gallbladder from the hepatic parenchyma',
        },
      ],
      analogies: [
        'La visión crítica de seguridad es como asegurarse de que solo hay dos cables conectados al aparato (vesícula) antes de cortarlos: no quieres cortar un cable que va a otra parte del sistema. | The critical view of safety is like making sure there are only two wires connected to the device (gallbladder) before cutting them: you do not want to cut a wire that goes to another part of the system.',
      ],
      examples: [
        'Paciente de 50 años con colecistitis aguda de 48 horas de evolución. Se realiza colecistectomía laparoscópica con 4 puertos. Se logra CVS con dificultad moderada por inflamación. Colangiografía intraoperatoria negativa para coledocolitiasis. Disección del lecho hepático con gancho de cauterio. Extracción en bolsa. Tiempo quirúrgico: 55 minutos. | 50-year-old patient with 48-hour acute cholecystitis. Laparoscopic cholecystectomy performed with 4 ports. CVS achieved with moderate difficulty due to inflammation. Intraoperative cholangiography negative for choledocholithiasis. Liver bed dissection with cautery hook. Extraction in bag. Surgical time: 55 minutes.',
      ],
    },
    4: {
      level: 4,
      summary:
        'El manejo avanzado de la colecistectomía incluye la prevención y reconocimiento de la lesión de vía biliar (clasificación de Strasberg), manejo de la colecistitis aguda severa con estrategias de "bail-out" (colecistectomía subtotal, colecistostomía), abordaje de la coledocolitiasis concomitante (CPRE pre/postoperatoria vs. exploración laparoscópica del colédoco), y manejo del cáncer vesicular incidental. | Advanced management of cholecystectomy includes prevention and recognition of bile duct injury (Strasberg classification), management of severe acute cholecystitis with bail-out strategies (subtotal cholecystectomy, cholecystostomy), approach to concomitant choledocholithiasis (pre/postoperative ERCP vs. laparoscopic common bile duct exploration), and management of incidental gallbladder cancer.',
      explanation: `## Complicaciones y manejo avanzado de la colecistectomía | Complications and Advanced Management of Cholecystectomy

### Lesión de vía biliar: La complicación más temida | Bile Duct Injury: The Most Feared Complication

La lesión de vía biliar (LVB) ocurre en 0.3-0.6% de las colecistectomías laparoscópicas. Es una complicación devastadora con morbimortalidad significativa a largo plazo. | Bile duct injury (BDI) occurs in 0.3-0.6% of laparoscopic cholecystectomies. It is a devastating complication with significant long-term morbimortality.

#### Clasificación de Strasberg | Strasberg Classification

| Tipo | Descripción | Manejo |
|------|-------------|--------|
| A | Fuga del conducto cístico o conducto menor del lecho hepático | CPRE + stent |
| B | Oclusión de un conducto hepático aberrante | Observación o reparación |
| C | Fuga de un conducto hepático aberrante seccionado | Reparación quirúrgica |
| D | Lesión lateral del conducto hepático común/colédoco | CPRE + stent o reparación |
| E1-E5 | Sección completa del colédoco a diferentes niveles (Bismuth) | Hepaticoyeyunostomía en Y de Roux |

#### Prevención de la LVB | Prevention of BDI
- **CVS obligatoria**: Nunca clipar sin CVS | **CVS mandatory**: Never clip without CVS
- **Regla del 30°**: Si hay duda, detenerse y reconsiderar | **30-degree rule**: If in doubt, stop and reconsider
- **Conversión temprana**: No es un fracaso, es una decisión sabia | **Early conversion**: Not a failure, it is a wise decision
- **Timeout quirúrgico de identificación**: Confirmar verbalmente las estructuras antes de clipar | **Identification surgical timeout**: Verbally confirm structures before clipping
- **Colangiografía intraoperatoria ante duda** | **Intraoperative cholangiography when in doubt**

#### Reconocimiento intraoperatorio de LVB | Intraoperative Recognition of BDI
Signos de alarma: | Warning signs:
- Estructura clipada parece "demasiado grande" para ser el conducto cístico | Clipped structure seems "too large" to be the cystic duct
- Tracción medial excesiva del infundíbulo (alineación del cístico con el colédoco) | Excessive medial traction on infundibulum (alignment of cystic with common bile duct)
- Bilis en el campo que no proviene de la vesícula | Bile in the field not coming from the gallbladder
- Doble estructura tubular cortada | Double tubular structure cut

### Estrategias de "bail-out" en colecistitis difícil | Bail-Out Strategies in Difficult Cholecystitis

Cuando la disección del triángulo hepatocístico es insegura: | When dissection of the hepatocystic triangle is unsafe:

1. **Colecistectomía subtotal reconstituyente**: Se corta alrededor del infundíbulo, se cierra con sutura | **Reconstituting subtotal cholecystectomy**: Cut around the infundibulum, close with suture
2. **Colecistectomía subtotal fenestrada**: Se deja el muñón abierto con drenaje | **Fenestrated subtotal cholecystectomy**: Remnant left open with drain
3. **Colecistostomía percutánea**: Drenaje percutáneo de la vesícula como puente a la cirugía (en pacientes de alto riesgo quirúrgico) | **Percutaneous cholecystostomy**: Percutaneous drainage of the gallbladder as a bridge to surgery (in high surgical risk patients)

**SAGES Safe Cholecystectomy Task Force** recomienda el enfoque de "cultura de seguridad": Si la CVS no puede lograrse, emplear una estrategia de bail-out en lugar de forzar la disección. | **SAGES Safe Cholecystectomy Task Force** recommends the "culture of safety" approach: If CVS cannot be achieved, employ a bail-out strategy rather than forcing dissection.

### Coledocolitiasis concomitante | Concomitant Choledocholithiasis

Presente en 10-15% de pacientes con colelitiasis sintomática. Opciones de manejo: | Present in 10-15% of patients with symptomatic cholelithiasis. Management options:

| Estrategia | Ventajas | Desventajas |
|------------|----------|-------------|
| CPRE preoperatoria + colecistectomía | Experiencia amplia, tratamiento del cálculo previo a la cirugía | Dos procedimientos, riesgo de pancreatitis post-CPRE |
| Colecistectomía + exploración laparoscópica del colédoco | Un solo procedimiento, resolución completa | Requiere experiencia y equipo especializado |
| Colecistectomía + CPRE postoperatoria | Si hallazgo incidental en CIO | Segundo procedimiento |

### Cáncer vesicular incidental | Incidental Gallbladder Cancer

Se encuentra en 0.2-0.8% de las colecistectomías. Manejo según profundidad de invasión: | Found in 0.2-0.8% of cholecystectomies. Management based on depth of invasion:

- **Tis/T1a** (mucosa/lámina propia): Colecistectomía simple es curativa | **Tis/T1a** (mucosa/lamina propria): Simple cholecystectomy is curative
- **T1b** (capa muscular): Colecistectomía radical (resección del lecho hepático + linfadenectomía del ligamento hepatoduodenal) | **T1b** (muscular layer): Radical cholecystectomy (liver bed resection + hepatoduodenal ligament lymphadenectomy)
- **T2 o mayor**: Colecistectomía radical ± resección hepática extendida ± resección del sitio de los puertos | **T2 or greater**: Radical cholecystectomy ± extended liver resection ± port-site resection

**Regla importante**: Nunca perforar la vesícula si hay sospecha de cáncer. Extraer siempre en bolsa. | **Important rule**: Never perforate the gallbladder if cancer is suspected. Always extract in a bag.

### Complicaciones postoperatorias | Postoperative Complications

- **Fuga biliar** (0.3-0.5%): Del muñón del cístico o del lecho hepático. Manejo: CPRE + stent | **Bile leak** (0.3-0.5%): From cystic stump or liver bed. Management: ERCP + stent
- **Coledocolitiasis retenida**: Manejo con CPRE postoperatoria | **Retained choledocholithiasis**: Management with postoperative ERCP
- **Colección subhepática/absceso**: TC + drenaje percutáneo | **Subhepatic collection/abscess**: CT + percutaneous drainage
- **Síndrome postcolecistectomía**: Dolor persistente o recurrente en 10-40% de pacientes. Causas: disfunción del esfínter de Oddi, coledocolitiasis residual, otras causas extrabiliares | **Postcholecystectomy syndrome**: Persistent or recurrent pain in 10-40% of patients. Causes: sphincter of Oddi dysfunction, residual choledocholithiasis, other extrabiliary causes
- **Sangrado del lecho hepático**: Raro. Puede requerir reintervención | **Liver bed bleeding**: Rare. May require reoperation`,
      keyTerms: [
        {
          term: 'Clasificación de Strasberg | Strasberg classification',
          definition:
            'Sistema de clasificación de las lesiones de vía biliar durante la colecistectomía, que va desde fugas menores (tipo A) hasta sección completa del colédoco (tipo E) | Classification system for bile duct injuries during cholecystectomy, ranging from minor leaks (type A) to complete common bile duct transection (type E)',
        },
        {
          term: 'Hepaticoyeyunostomía en Y de Roux | Roux-en-Y hepaticojejunostomy',
          definition:
            'Reconstrucción quirúrgica donde se conecta el conducto hepático directamente al intestino delgado, utilizada para reparar lesiones mayores de vía biliar | Surgical reconstruction connecting the hepatic duct directly to the small intestine, used to repair major bile duct injuries',
        },
        {
          term: 'Síndrome de Mirizzi | Mirizzi syndrome',
          definition:
            'Compresión del conducto hepático común por un cálculo impactado en el infundíbulo de la vesícula o en el conducto cístico | Compression of the common hepatic duct by a stone impacted in the gallbladder infundibulum or cystic duct',
        },
        {
          term: 'Síndrome postcolecistectomía | Postcholecystectomy syndrome',
          definition:
            'Persistencia o recurrencia de síntomas biliares después de la colecistectomía | Persistence or recurrence of biliary symptoms after cholecystectomy',
        },
        {
          term: 'Colecistostomía percutánea | Percutaneous cholecystostomy',
          definition:
            'Drenaje percutáneo de la vesícula biliar guiado por imagen, utilizado como puente o tratamiento definitivo en pacientes de alto riesgo | Image-guided percutaneous drainage of the gallbladder, used as a bridge or definitive treatment in high-risk patients',
        },
      ],
      clinicalNotes:
        'La lesión de vía biliar es la complicación más grave de la colecistectomía laparoscópica. La adherencia estricta a la CVS de Strasberg y el uso de estrategias de bail-out reducen significativamente su incidencia. La colecistectomía temprana (dentro de 72 horas) para colecistitis aguda es preferida sobre la diferida por menores complicaciones y costos. Todo espécimen de colecistectomía debe enviarse a patología. | Bile duct injury is the most serious complication of laparoscopic cholecystectomy. Strict adherence to Strasberg\'s CVS and use of bail-out strategies significantly reduce its incidence. Early cholecystectomy (within 72 hours) for acute cholecystitis is preferred over delayed due to fewer complications and costs. All cholecystectomy specimens must be sent to pathology.',
      examples: [
        'Paciente de 60 años con colecistitis aguda severa (72 horas de evolución, pared vesicular de 8 mm). Durante la laparoscopia, inflamación severa impide lograr la CVS. Se decide realizar colecistectomía subtotal fenestrada: se reseca el cuerpo y fondo, se deja la pared posterior, se coloca drenaje. Evolución satisfactoria. | 60-year-old patient with severe acute cholecystitis (72-hour duration, 8 mm gallbladder wall). During laparoscopy, severe inflammation prevents achieving CVS. Decision to perform fenestrated subtotal cholecystectomy: body and fundus resected, posterior wall left, drain placed. Satisfactory outcome.',
      ],
    },
    5: {
      level: 5,
      summary:
        'La evidencia contemporánea en colecistectomía incluye el programa Safe Cholecystectomy de SAGES, la fluorescencia con verde de indocianina (ICG) para identificación de vía biliar, el debate sobre el momento óptimo de la colecistectomía en colecistitis aguda (Tokyo Guidelines 2018/2024), la exploración laparoscópica del colédoco vs. CPRE, la colecistectomía ambulatoria como estándar, y la inteligencia artificial aplicada a la identificación de CVS. | Contemporary evidence in cholecystectomy includes SAGES Safe Cholecystectomy program, indocyanine green (ICG) fluorescence for bile duct identification, debate on optimal timing of cholecystectomy in acute cholecystitis (Tokyo Guidelines 2018/2024), laparoscopic common bile duct exploration vs. ERCP, ambulatory cholecystectomy as standard, and artificial intelligence applied to CVS identification.',
      explanation: `## Evidencia avanzada y protocolos en colecistectomía | Advanced Evidence and Protocols in Cholecystectomy

### Programa Safe Cholecystectomy de SAGES | SAGES Safe Cholecystectomy Program

SAGES publicó un marco integral de cultura de seguridad para la colecistectomía que incluye: | SAGES published a comprehensive safety culture framework for cholecystectomy that includes:

1. **CVS como estándar universal**: Documentación fotográfica o en video de la CVS lograda antes del clipaje | **CVS as universal standard**: Photographic or video documentation of CVS achieved before clipping
2. **Uso liberal de técnicas de ayuda**: CIO, ecografía laparoscópica, ICG | **Liberal use of adjunct techniques**: IOC, laparoscopic ultrasound, ICG
3. **Reconocimiento temprano de la cirugía difícil** y aplicación de bail-out | **Early recognition of difficult surgery** and application of bail-out
4. **"Go-no-go" decision point**: Pausa formal antes de clipar cualquier estructura tubular | **"Go-no-go" decision point**: Formal pause before clipping any tubular structure
5. **Reportar errores y casi-accidentes** para mejorar la seguridad del sistema | **Report errors and near-misses** to improve system safety

### Fluorescencia con verde de indocianina (ICG) | Indocyanine Green (ICG) Fluorescence

Tecnología que permite visualizar la vía biliar en tiempo real durante la cirugía: | Technology allowing real-time visualization of the bile duct during surgery:

- **Mecanismo**: ICG se administra IV (0.05 mg/kg) 30-60 minutos antes de la cirugía. Se excreta por la bilis y fluoresce con luz infrarroja cercana | **Mechanism**: ICG is given IV (0.05 mg/kg) 30-60 minutes before surgery. It is excreted in bile and fluoresces with near-infrared light
- **Beneficios**: Visualización del conducto cístico, colédoco y conductos hepáticos sin necesidad de CIO. Detección de variantes anatómicas | **Benefits**: Visualization of cystic duct, common bile duct, and hepatic ducts without IOC. Detection of anatomical variants
- **Evidencia**: Meta-análisis (2023): ICG mejora significativamente la tasa de identificación de estructuras biliares (OR 3.1, IC 95% 2.1-4.5) vs. luz blanca sola | **Evidence**: Meta-analysis (2023): ICG significantly improves biliary structure identification rate (OR 3.1, 95% CI 2.1-4.5) vs. white light alone
- **Limitación**: No ha demostrado reducción significativa en la tasa de LVB (los estudios carecen de poder estadístico suficiente por la baja incidencia de LVB) | **Limitation**: Has not demonstrated significant reduction in BDI rate (studies lack sufficient statistical power due to low BDI incidence)

### Tokyo Guidelines (TG18/TG24) para colecistitis aguda | Tokyo Guidelines (TG18/TG24) for Acute Cholecystitis

#### Clasificación de severidad | Severity Grading

| Grado | Criterios | Manejo recomendado |
|-------|-----------|-------------------|
| I (Leve) | Sin disfunción orgánica, inflamación moderada | Colecistectomía laparoscópica temprana |
| II (Moderada) | Leucocitosis >18,000, masa palpable, >72h evolución, inflamación local marcada | Colecistectomía temprana si experiencia; considerar drenaje + diferida si no |
| III (Severa) | Disfunción orgánica (cardiovascular, neurológica, respiratoria, renal, hepática, hematológica) | Drenaje biliar urgente (colecistostomía); cirugía diferida tras estabilización |

#### Momento óptimo de la cirugía | Optimal Timing of Surgery

- **Colecistectomía temprana (<72 horas del ingreso)**: Evidencia de nivel I apoya menor morbilidad, menor estancia hospitalaria, menores costos vs. diferida | **Early cholecystectomy (<72 hours of admission)**: Level I evidence supports lower morbidity, shorter hospital stay, lower costs vs. delayed
- **Ensayo ACDC (Lancet 2015)**: Colecistectomía dentro de 24 horas tuvo menor morbilidad que la diferida (11.8% vs. 34.4%) | **ACDC trial (Lancet 2015)**: Cholecystectomy within 24 hours had lower morbidity than delayed (11.8% vs. 34.4%)
- **Tendencia actual**: "The sooner the better" - colecistectomía lo más pronto posible tras el diagnóstico | **Current trend**: "The sooner the better" - cholecystectomy as soon as possible after diagnosis

### Exploración laparoscópica del colédoco vs. CPRE | Laparoscopic CBD Exploration vs. ERCP

**Meta-análisis y ensayos recientes**: | **Meta-analyses and recent trials**:

- Ambas estrategias tienen tasas de éxito de aclaramiento ductal similares (>90%) | Both strategies have similar ductal clearance success rates (>90%)
- La exploración laparoscópica tiene la ventaja del procedimiento único | Laparoscopic exploration has the advantage of a single procedure
- La CPRE tiene mayor riesgo de pancreatitis post-procedimiento (3-5%) | ERCP has higher risk of post-procedure pancreatitis (3-5%)
- La exploración laparoscópica requiere habilidades avanzadas y coledocoscopio flexible | Laparoscopic exploration requires advanced skills and flexible choledochoscope
- **Recomendación actual**: La elección depende de la experiencia local y disponibilidad de recursos | **Current recommendation**: The choice depends on local expertise and resource availability

### Colecistectomía ambulatoria | Ambulatory Cholecystectomy

- Cada vez más centros realizan colecistectomía laparoscópica electiva como procedimiento de cirugía ambulatoria (alta el mismo día) | Increasingly, centers perform elective laparoscopic cholecystectomy as an ambulatory surgery procedure (same-day discharge)
- **Criterios de elegibilidad**: ASA I-II, sin coledocolitiasis, apoyo social adecuado, vivir a <1 hora del hospital | **Eligibility criteria**: ASA I-II, no choledocholithiasis, adequate social support, live <1 hour from hospital
- **Tasas de alta el mismo día**: 60-85% en centros con experiencia | **Same-day discharge rates**: 60-85% in experienced centers
- **Protocolos ERAS**: Analgesia multimodal (paracetamol + AINE + bloqueo TAP), antieméticos profilácticos, movilización temprana | **ERAS protocols**: Multimodal analgesia (acetaminophen + NSAID + TAP block), prophylactic antiemetics, early mobilization

### Inteligencia artificial en colecistectomía | Artificial Intelligence in Cholecystectomy

- **Sistemas de visión por computadora** entrenados en miles de videos de colecistectomía pueden identificar la CVS con precisión de 85-92% | **Computer vision systems** trained on thousands of cholecystectomy videos can identify CVS with 85-92% accuracy
- **Herramientas de retroalimentación en tiempo real**: Alertan al cirujano cuando la CVS no se ha logrado antes del clipaje | **Real-time feedback tools**: Alert the surgeon when CVS has not been achieved before clipping
- **Predicción de dificultad quirúrgica**: Modelos basados en hallazgos preoperatorios (TC, laboratorios) predicen la dificultad de la colecistectomía con AUC de 0.80-0.88 | **Surgical difficulty prediction**: Models based on preoperative findings (CT, labs) predict cholecystectomy difficulty with AUC of 0.80-0.88

### Colecistectomía robótica | Robotic Cholecystectomy

- La plataforma robótica (da Vinci) ofrece visión 3D y articulación avanzada de instrumentos | The robotic platform (da Vinci) offers 3D vision and advanced instrument articulation
- **Evidencia actual**: No ha demostrado superioridad clínica sobre la laparoscopia convencional para colecistectomía estándar | **Current evidence**: Has not demonstrated clinical superiority over conventional laparoscopy for standard cholecystectomy
- **Posible rol**: En colecistectomía difícil, cuando la articulación robótica facilita la disección en anatomía compleja | **Possible role**: In difficult cholecystectomy, when robotic articulation facilitates dissection in complex anatomy
- **Limitación principal**: Costo significativamente mayor sin beneficio clínico demostrado | **Main limitation**: Significantly higher cost without demonstrated clinical benefit`,
      keyTerms: [
        {
          term: 'Verde de indocianina (ICG) | Indocyanine green (ICG)',
          definition:
            'Colorante fluorescente administrado IV que se excreta en la bilis y permite visualizar las estructuras biliares en tiempo real bajo luz infrarroja cercana | Fluorescent dye given IV that is excreted in bile and allows real-time visualization of biliary structures under near-infrared light',
        },
        {
          term: 'Tokyo Guidelines (TG18/TG24) | Tokyo Guidelines (TG18/TG24)',
          definition:
            'Guías internacionales basadas en evidencia para el diagnóstico y manejo de la colecistitis aguda, que clasifican la severidad y guían las decisiones terapéuticas | International evidence-based guidelines for diagnosis and management of acute cholecystitis, classifying severity and guiding therapeutic decisions',
        },
        {
          term: 'Exploración laparoscópica del colédoco | Laparoscopic common bile duct exploration',
          definition:
            'Procedimiento durante la colecistectomía donde se abre el colédoco y se extraen cálculos con coledocoscopio flexible, evitando la necesidad de CPRE | Procedure during cholecystectomy where the common bile duct is opened and stones are extracted with a flexible choledochoscope, avoiding the need for ERCP',
        },
        {
          term: 'Colecistectomía ambulatoria | Ambulatory cholecystectomy',
          definition:
            'Colecistectomía laparoscópica electiva con alta el mismo día de la cirugía | Elective laparoscopic cholecystectomy with same-day discharge',
        },
        {
          term: 'Visión por computadora en CVS | Computer vision in CVS',
          definition:
            'Sistemas de inteligencia artificial que analizan video quirúrgico en tiempo real para confirmar si se ha logrado la visión crítica de seguridad | AI systems that analyze surgical video in real-time to confirm whether the critical view of safety has been achieved',
        },
      ],
      clinicalNotes:
        'La colecistectomía laparoscópica es la cirugía electiva más realizada en el mundo. La CVS de Strasberg es el estándar de cuidado para la prevención de lesión de vía biliar. La fluorescencia con ICG es una herramienta prometedora pero aún no ha demostrado reducir la tasa de LVB en ensayos clínicos con poder suficiente. La colecistectomía temprana para colecistitis aguda es superior a la diferida en todos los outcomes estudiados. La IA tiene potencial para mejorar la seguridad quirúrgica pero requiere validación prospectiva. | Laparoscopic cholecystectomy is the most performed elective surgery in the world. Strasberg\'s CVS is the standard of care for bile duct injury prevention. ICG fluorescence is a promising tool but has not yet demonstrated BDI rate reduction in adequately powered trials. Early cholecystectomy for acute cholecystitis is superior to delayed in all studied outcomes. AI has potential to improve surgical safety but requires prospective validation.',
      examples: [
        'Centro académico implementa protocolo de ICG en todas las colecistectomías laparoscópicas. Se administra ICG 0.05 mg/kg IV 45 minutos antes de la cirugía. Durante la disección, se alterna entre luz blanca y fluorescencia infrarroja para identificar el conducto cístico y verificar la CVS. En un caso de síndrome de Mirizzi tipo I, la fluorescencia ayuda a identificar la compresión del conducto hepático común y guía la decisión de realizar colecistectomía subtotal con drenaje. | Academic center implements ICG protocol in all laparoscopic cholecystectomies. ICG 0.05 mg/kg is given IV 45 minutes before surgery. During dissection, white light and infrared fluorescence are alternated to identify the cystic duct and verify CVS. In a case of Mirizzi syndrome type I, fluorescence helps identify common hepatic duct compression and guides the decision to perform subtotal cholecystectomy with drainage.',
      ],
    },
  },

  media: [],
  citations: [
    {
      id: 'sages-safe-cholecystectomy',
      type: 'guideline',
      title: 'The SAGES Safe Cholecystectomy Program',
      authors: ['Society of American Gastrointestinal and Endoscopic Surgeons'],
      source: 'SAGES',
      url: 'https://www.sages.org/safe-cholecystectomy-program/',
      accessedDate: '2025-01-15',
    },
    {
      id: 'tokyo-guidelines-2018',
      type: 'guideline',
      title: 'Tokyo Guidelines 2018: diagnostic criteria and severity grading of acute cholecystitis',
      source: 'Journal of Hepato-Biliary-Pancreatic Sciences',
      url: 'https://doi.org/10.1002/jhbp.515',
      accessedDate: '2025-01-15',
    },
    {
      id: 'acdc-trial-2015',
      type: 'journal',
      title: 'Early versus delayed cholecystectomy for acute cholecystitis (ACDC study)',
      source: 'The Lancet',
      chapter: '386',
      page: '1261-1268',
      url: 'https://doi.org/10.1016/S0140-6736(15)00274-3',
      accessedDate: '2025-01-15',
    },
    {
      id: 'icg-meta-analysis-2023',
      type: 'journal',
      title: 'Indocyanine green fluorescence cholangiography during laparoscopic cholecystectomy: a systematic review and meta-analysis',
      source: 'Surgical Endoscopy',
      accessedDate: '2025-01-15',
    },
    {
      id: 'schwartz-surgery-cholecystectomy',
      type: 'textbook',
      title: 'Schwartz\'s Principles of Surgery',
      authors: ['Brunicardi, F.C.'],
      source: 'McGraw-Hill Education',
      chapter: 'Gallbladder and the Extrahepatic Biliary System',
    },
    {
      id: 'strasberg-avoidance-bdi',
      type: 'journal',
      title: 'An Analysis of the Problem of Biliary Injury During Laparoscopic Cholecystectomy',
      authors: ['Strasberg, S.M.'],
      source: 'Journal of the American College of Surgeons',
      accessedDate: '2025-01-15',
    },
  ],
  crossReferences: [
    {
      targetId: 'apendicectomia-appendectomy',
      targetType: 'process',
      relationship: 'sibling',
      label: 'Apendicectomía | Appendectomy',
    },
    {
      targetId: 'hernioplastia-hernia-repair',
      targetType: 'process',
      relationship: 'sibling',
      label: 'Hernioplastia | Hernia repair',
    },
    {
      targetId: 'digestive-system',
      targetType: 'system',
      relationship: 'parent',
      label: 'Sistema digestivo | Digestive system',
    },
    {
      targetId: 'hepatobiliary-system',
      targetType: 'system',
      relationship: 'related',
      label: 'Sistema hepatobiliar | Hepatobiliary system',
    },
    {
      targetId: 'pancreatitis',
      targetType: 'condition',
      relationship: 'related',
      label: 'Pancreatitis biliar | Biliary pancreatitis',
    },
  ],
  tags: {
    systems: ['digestivo | digestive', 'hepatobiliar | hepatobiliary'],
    topics: ['cirugía | surgery', 'laparoscopia | laparoscopy', 'colelitiasis | cholelithiasis', 'colecistitis | cholecystitis'],
    keywords: [
      'colecistectomía', 'cholecystectomy', 'vesícula biliar', 'gallbladder',
      'cálculos biliares', 'gallstones', 'visión crítica de seguridad', 'critical view of safety',
      'Strasberg', 'ICG', 'Tokyo Guidelines', 'CPRE', 'ERCP',
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
