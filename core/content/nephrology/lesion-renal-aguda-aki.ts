import { EducationalContent } from '../types';

export const lesionRenalAgudaAki: EducationalContent = {
  id: 'condition-lesion-renal-aguda-aki',
  type: 'condition',
  name: 'Acute Kidney Injury',
  nameEs: 'Lesión Renal Aguda',
  alternateNames: ['AKI', 'LRA', 'Insuficiencia Renal Aguda', 'Acute Renal Failure', 'ARF', 'Falla Renal Aguda'],
  levels: {
    1: {
      level: 1,
      summary: 'La lesión renal aguda (LRA) ocurre cuando los riñones dejan de funcionar correctamente de forma repentina, en horas o días. | Acute kidney injury (AKI) happens when the kidneys suddenly stop working properly, over hours or days.',
      explanation: `## Explicación

### ¿Qué es la lesión renal aguda?

La lesión renal aguda es cuando los riñones dejan de funcionar bien de manera **repentina**. A diferencia de la enfermedad renal crónica (que ocurre lentamente durante meses o años), la LRA sucede rápidamente, en **horas o días**.

Piensa en tus riñones como un filtro de café. Normalmente filtran los desechos de tu sangre y los envían como orina. En la LRA, algo daña el filtro o lo bloquea, por lo que los desechos se acumulan en tu cuerpo.

### ¿Por qué sucede?

Hay tres razones principales por las que los riñones pueden dejar de funcionar repentinamente:

#### 1. No llega suficiente sangre a los riñones (Pre-renal)
Es como una manguera de jardín con el agua muy baja. Puede pasar por:
- **Deshidratación**: No tomar suficiente agua, especialmente con vómitos o diarrea
- **Sangrado abundante**: Perder mucha sangre por una cirugía o accidente
- **Corazón débil**: El corazón no bombea suficiente sangre a los riñones
- **Presión arterial muy baja**: Por una infección grave (sepsis)

#### 2. El riñón mismo está dañado (Intrínseca)
El filtro se daña directamente. Puede pasar por:
- **Medicamentos dañinos**: Algunos antibióticos, analgésicos (como ibuprofeno), o medios de contraste de estudios médicos
- **Infecciones graves** que dañan directamente el tejido renal
- **Toxinas**: Sustancias que envenenan los riñones

#### 3. La salida de orina está bloqueada (Post-renal)
El drenaje está tapado. Puede pasar por:
- **Piedras en el riñón** que bloquean el flujo de orina
- **Próstata agrandada** en hombres mayores
- **Tumores** que comprimen los conductos de orina

### Señales de alarma
- Orinar mucho menos de lo normal
- Hinchazón en piernas, tobillos o alrededor de los ojos
- Sentirse muy cansado o confundido
- Náuseas y falta de apetito
- Falta de aire

### ¿Se pueden recuperar los riñones?

La buena noticia es que, en muchos casos, si la causa se encuentra y se trata rápidamente, **los riñones pueden recuperarse**. Por eso es tan importante buscar atención médica pronto.

---
## Explanation

### What is acute kidney injury?

Acute kidney injury is when the kidneys stop working well **suddenly**. Unlike chronic kidney disease (which happens slowly over months or years), AKI occurs quickly, over **hours or days**.

Think of your kidneys like a coffee filter. Normally they filter waste from your blood and send it out as urine. In AKI, something damages or blocks the filter, so waste builds up in your body.

### Why does it happen?

There are three main reasons the kidneys might suddenly stop working:

#### 1. Not enough blood reaching the kidneys (Pre-renal)
Like a garden hose with the water turned too low. This can happen from:
- **Dehydration**: Not drinking enough water, especially with vomiting or diarrhea
- **Heavy bleeding**: Losing a lot of blood from surgery or accident
- **Weak heart**: The heart is not pumping enough blood to the kidneys
- **Very low blood pressure**: From a severe infection (sepsis)

#### 2. The kidney itself is damaged (Intrinsic)
The filter gets damaged directly. This can happen from:
- **Harmful medications**: Some antibiotics, pain relievers (like ibuprofen), or contrast dyes from medical studies
- **Severe infections** that directly damage kidney tissue
- **Toxins**: Substances that poison the kidneys

#### 3. Urine outflow is blocked (Post-renal)
The drain is clogged. This can happen from:
- **Kidney stones** blocking urine flow
- **Enlarged prostate** in older men
- **Tumors** compressing the urinary ducts

### Warning signs
- Urinating much less than normal
- Swelling in legs, ankles, or around the eyes
- Feeling very tired or confused
- Nausea and loss of appetite
- Shortness of breath

### Can the kidneys recover?

The good news is that in many cases, if the cause is found and treated quickly, **the kidneys can recover**. That is why seeking medical attention early is so important.`,
      keyTerms: [
        { term: 'lesión renal aguda / acute kidney injury', definition: 'Cuando los riñones dejan de funcionar bien de forma repentina, en horas o días. | When the kidneys suddenly stop working well, over hours or days.' },
        { term: 'pre-renal', definition: 'Causa de LRA por falta de sangre llegando a los riñones (deshidratación, sangrado, corazón débil). | AKI cause from insufficient blood reaching the kidneys (dehydration, bleeding, weak heart).' },
        { term: 'intrínseca / intrinsic', definition: 'Causa de LRA por daño directo al tejido del riñón (medicamentos, toxinas, infecciones). | AKI cause from direct damage to kidney tissue (medications, toxins, infections).' },
        { term: 'post-renal', definition: 'Causa de LRA por bloqueo de la salida de orina (piedras, próstata, tumores). | AKI cause from blockage of urine outflow (stones, prostate, tumors).' },
        { term: 'deshidratación / dehydration', definition: 'No tener suficiente agua en el cuerpo, lo cual reduce el flujo de sangre a los riñones. | Not having enough water in the body, which reduces blood flow to the kidneys.' },
        { term: 'orina / urine', definition: 'El líquido de desecho que producen los riñones para eliminar toxinas del cuerpo. | The waste liquid that kidneys produce to eliminate toxins from the body.' },
      ],
      analogies: [
        'Los riñones funcionan como un filtro de café: la LRA es cuando el filtro de repente se tapa o se rompe. | The kidneys work like a coffee filter: AKI is when the filter suddenly gets clogged or breaks.',
        'Imagina un fregadero con tres problemas posibles: la llave apenas tiene agua (pre-renal), el drenaje está roto (intrínseca), o la tubería está tapada (post-renal). | Imagine a sink with three possible problems: the faucet barely runs (pre-renal), the drain is cracked (intrinsic), or the pipe is clogged (post-renal).',
      ],
      examples: [
        'Una persona con diarrea y vómitos severos durante días sin tomar suficiente agua puede desarrollar LRA por deshidratación. | A person with severe diarrhea and vomiting for days without drinking enough water may develop AKI from dehydration.',
        'Después de una cirugía mayor, un paciente puede desarrollar LRA porque su presión arterial bajó demasiado durante la operación. | After major surgery, a patient may develop AKI because blood pressure dropped too low during the operation.',
      ],
      patientCounselingPoints: [
        'Tome suficiente agua, especialmente cuando esté enfermo con vómitos o diarrea. | Drink plenty of water, especially when sick with vomiting or diarrhea.',
        'Informe a su doctor sobre todos los medicamentos que toma, incluyendo los analgésicos de venta libre como ibuprofeno. | Tell your doctor about all medicines you take, including over-the-counter pain relievers like ibuprofen.',
        'Si nota que está orinando mucho menos de lo normal, contacte a su doctor inmediatamente. | If you notice you are urinating much less than usual, contact your doctor immediately.',
        'No tome medicamentos antiinflamatorios (como ibuprofeno o naproxeno) sin consultar a su doctor, especialmente si tiene problemas renales. | Do not take anti-inflammatory medications (like ibuprofen or naproxen) without consulting your doctor, especially if you have kidney problems.',
        'Si tiene diabetes o presión alta, mantenga estas condiciones bien controladas para proteger sus riñones. | If you have diabetes or high blood pressure, keep these conditions well controlled to protect your kidneys.',
      ],
    },
    2: {
      level: 2,
      summary: 'La LRA se clasifica por aumento de creatinina o disminución del gasto urinario, con causas divididas en pre-renal, intrínseca renal y post-renal; el enfoque diagnóstico incluye análisis de orina, ecografía renal y electrolitos urinarios. | AKI is classified by rising creatinine or decreasing urine output, with causes divided into pre-renal, intrinsic renal, and post-renal; diagnostic workup includes urinalysis, renal ultrasound, and urine electrolytes.',
      explanation: `## Explicación

### Definición y Detección

La lesión renal aguda se define por una disminución rápida de la función renal en horas a días. Los doctores la detectan usando dos mediciones clave:

- **Creatinina sérica**: Un producto de desecho del metabolismo muscular normalmente eliminado por los riñones. Si la creatinina sube, significa que los riñones están filtrando menos.
- **Nitrógeno ureico en sangre (BUN)**: Otro marcador de función renal. La relación BUN/creatinina ayuda a distinguir causas pre-renales de intrínsecas (relación >20:1 sugiere pre-renal).
- **Gasto urinario**: Los riñones sanos producen al menos 0.5 mL/kg/hora. La oliguria (bajo gasto urinario) es una señal de alarma.

### Las Tres Categorías de Causas

#### Pre-renal (antes del riñón) - ~55-60% de los casos
Los riñones son estructuralmente normales pero reciben flujo sanguíneo inadecuado:
- Deshidratación, hemorragia, vómitos/diarrea severos
- Insuficiencia cardíaca (fallo de bomba)
- Sepsis (infección grave con caída de presión arterial)
- Medicamentos: AINEs (constriñen la arteriola aferente), inhibidores de la ECA (dilatan la arteriola eferente)
- Cirrosis hepática con síndrome hepatorrenal

#### Intrínseca renal (dentro del riñón) - ~35-40%
Daño directo a las estructuras renales:
- **Necrosis tubular aguda (NTA)**: La causa más común; por isquemia prolongada o nefrotóxicos
- **Nefritis intersticial aguda (NIA)**: Reacción alérgica a medicamentos (antibióticos, IBP, AINEs) -- tríada clásica: fiebre, exantema, eosinofilia
- **Glomerulonefritis**: Lesión glomerular inmunomediada
- **Vascular**: Trombosis de arteria renal, microangiopatía trombótica

#### Post-renal (después del riñón) - ~5-10%
Obstrucción del flujo de orina:
- Piedras renales, coágulos sanguíneos
- Hiperplasia prostática benigna (HPB)
- Tumores que comprimen los uréteres
- Se requiere obstrucción bilateral para causar LRA (a menos que haya un solo riñón funcionante)

### Enfoque Diagnóstico Básico

- **Análisis de orina**: Los cilindros granulares pardos (muddy brown casts) sugieren NTA; cilindros de leucocitos sugieren NIA; cilindros de eritrocitos sugieren glomerulonefritis
- **Ecografía renal**: Verifica obstrucción (hidronefrosis) y tamaño renal
- **Electrolitos urinarios**: Ayudan a diferenciar causas pre-renales de intrínsecas:
  - Sodio urinario <20 mEq/L: pre-renal (riñones reteniendo sodio ávidamente)
  - Sodio urinario >40 mEq/L: intrínseca (túbulos no pueden reabsorber sodio)

### Tratamiento General
- **Pre-renal**: Rehidratación con líquidos intravenosos; tratar la causa subyacente
- **Intrínseca**: Suspender el agente causante; tratamiento específico según la causa
- **Post-renal**: Desobstrucción urgente (sonda vesical, stent ureteral, nefrostomía)

---
## Explanation

### Definition and Detection

AKI is defined by a rapid decline in kidney function over hours to days. Doctors detect it using two key measurements:

- **Serum creatinine**: A muscle waste product normally cleared by kidneys. Rising creatinine indicates reduced filtering.
- **BUN**: Another kidney function marker. BUN-to-creatinine ratio >20:1 suggests pre-renal cause.
- **Urine output**: Healthy kidneys make at least 0.5 mL/kg/hour. Oliguria is a warning sign.

### Three Categories of Causes

#### Pre-renal (~55-60%)
Kidneys structurally normal but receive inadequate blood flow: dehydration, hemorrhage, heart failure, sepsis, NSAIDs, ACE inhibitors

#### Intrinsic renal (~35-40%)
Direct damage: ATN (most common), AIN (drug allergy), glomerulonephritis, vascular causes

#### Post-renal (~5-10%)
Urine outflow obstruction: kidney stones, BPH, tumors; requires bilateral obstruction

### Basic Workup
- Urinalysis: muddy brown casts (ATN), WBC casts (AIN), RBC casts (GN)
- Renal ultrasound: checks for hydronephrosis and kidney size
- Urine electrolytes: sodium <20 (pre-renal) vs >40 (intrinsic)

### General Treatment
- Pre-renal: IV fluid resuscitation
- Intrinsic: Remove causative agent; specific therapy
- Post-renal: Urgent decompression`,
      keyTerms: [
        { term: 'creatinina / creatinine', definition: 'Producto de desecho del músculo usado para medir la función renal; su aumento indica disminución del filtrado. | Muscle waste product used to measure kidney function; its rise indicates decreased filtration.' },
        { term: 'BUN / nitrógeno ureico', definition: 'Nitrógeno ureico en sangre; otro marcador de función renal. | Blood urea nitrogen; another kidney function marker.' },
        { term: 'oliguria', definition: 'Gasto urinario anormalmente bajo, típicamente <400 mL/día o <0.5 mL/kg/h. | Abnormally low urine output, typically <400 mL/day or <0.5 mL/kg/h.' },
        { term: 'necrosis tubular aguda / acute tubular necrosis', definition: 'Muerte de células tubulares por isquemia o tóxicos; la causa más común de LRA intrínseca. | Death of tubular cells from ischemia or toxins; most common cause of intrinsic AKI.' },
        { term: 'nefritis intersticial aguda / acute interstitial nephritis', definition: 'Reacción inflamatoria alérgica en el intersticio renal, generalmente por medicamentos. | Allergic inflammatory reaction in the renal interstitium, usually from medications.' },
        { term: 'hidronefrosis / hydronephrosis', definition: 'Hinchazón del riñón por acumulación de orina debido a obstrucción. | Kidney swelling from urine backup due to obstruction.' },
        { term: 'análisis de orina / urinalysis', definition: 'Prueba de laboratorio que examina el contenido y sedimento de la orina para diagnosticar la causa de LRA. | Laboratory test examining urine content and sediment to diagnose AKI cause.' },
        { term: 'cilindros / casts', definition: 'Estructuras tubulares encontradas en la orina que ayudan a diagnosticar el tipo de LRA. | Tubular structures found in urine that help diagnose the type of AKI.' },
        { term: 'sepsis', definition: 'Infección grave que causa inflamación en todo el cuerpo y puede producir caída peligrosa de la presión arterial. | Severe infection causing body-wide inflammation that can produce dangerous blood pressure drop.' },
      ],
      clinicalNotes: 'La LRA pre-renal es la forma más común (~55-60%). Una prueba de rehidratación con líquidos IV ayuda a confirmar la etiología pre-renal cuando la creatinina mejora. Siempre verificar análisis de orina y ecografía renal en el abordaje inicial. La relación BUN/creatinina >20:1 con osmolaridad urinaria >500 y sodio urinario <20 son clásicos de causa pre-renal. | Pre-renal AKI is the most common form (~55-60%). A trial of IV fluid resuscitation helps confirm pre-renal etiology when creatinine improves. Always check urinalysis and renal ultrasound in the initial workup. BUN/creatinine ratio >20:1 with urine osmolality >500 and urine sodium <20 are classic for pre-renal cause.',
    },
    3: {
      level: 3,
      summary: 'La clasificación KDIGO estratifica la severidad de la LRA; la fracción excretada de sodio (FENa) y estudios urinarios guían el diagnóstico diferencial; NTA, nefropatía por contraste y síndrome hepatorrenal son causas intrínsecas importantes. | KDIGO staging stratifies AKI severity; fractional excretion of sodium (FENa) and urine studies guide differential diagnosis; ATN, contrast nephropathy, and hepatorenal syndrome are important intrinsic causes.',
      explanation: `## Explicación

### Clasificación KDIGO (2012)

La clasificación de Kidney Disease: Improving Global Outcomes define la LRA y gradúa su severidad:

| Etapa | Criterio de Creatinina Sérica | Criterio de Gasto Urinario |
|-------|------------------------------|---------------------------|
| 1 | Aumento ≥0.3 mg/dL en 48h O 1.5-1.9x basal en 7 días | <0.5 mL/kg/h por 6-12h |
| 2 | 2.0-2.9x basal | <0.5 mL/kg/h por ≥12h |
| 3 | ≥3.0x basal O creatinina ≥4.0 mg/dL O inicio de TRR | <0.3 mL/kg/h por ≥24h O anuria ≥12h |

### Fracción Excretada de Sodio (FENa)

FENa = (Na urinario x Cr plasmática) / (Na plasmático x Cr urinaria) x 100

- **FENa <1%**: Pre-renal (riñones retienen sodio ávidamente)
- **FENa >2%**: Intrínseca renal (túbulos no pueden reabsorber sodio)
- **Advertencia**: Usar FEUrea en pacientes con diuréticos (FEUrea <35% sugiere pre-renal)

### Necrosis Tubular Aguda (NTA)

La causa más común de LRA intrínseca. Dos subtipos:

#### 1. NTA Isquémica
Estado pre-renal prolongado que lleva a muerte celular tubular. Fases:
- **Iniciación**: Ocurre la lesión
- **Extensión**: Lesión continua e inflamación
- **Mantenimiento**: TFG permanece baja (1-2 semanas); cilindros granulares pardos en análisis de orina
- **Recuperación**: Regeneración tubular, fase poliúrica (vigilar electrolitos durante la recuperación)

#### 2. NTA Nefrotóxica
Toxicidad tubular directa por:
- **Aminoglucósidos** (gentamicina, tobramicina): Dosis-dependiente; daño proximal tubular
- **Anfotericina B**: Lesión del túbulo distal
- **Cisplatino**: Lesión del túbulo proximal
- **Mioglobina** (rabdomiolisis): Nefropatía pigmentaria; CPK >5,000 U/L sugiere riesgo
- **Hemoglobina** (hemólisis): Mecanismo similar a rabdomiolisis
- **Vancomicina** (especialmente combinada con piperacilina-tazobactam)

### Nefropatía por Contraste (NPC)

LRA que se desarrolla dentro de 48-72 horas de la administración de contraste yodado:
- **Mecanismo**: Toxicidad tubular directa, vasoconstricción medular y estrés oxidativo
- **Factores de riesgo**: ERC preexistente (TFG <60), diabetes, depleción de volumen, alto volumen de contraste, nefrotóxicos concomitantes
- **Prevención**: Hidratación IV con solución salina normal pre-procedimiento, minimizar volumen de contraste, suspender metformina, evitar nefrotóxicos concomitantes
- **N-acetilcisteína (NAC)**: Beneficio controversial; ensayo PRESERVE no mostró beneficio

### Síndrome Hepatorrenal (SHR)

Falla renal funcional en enfermedad hepática avanzada por vasodilatación esplácnica y vasoconstricción renal:
- **SHR-LRA (antes Tipo 1)**: Deterioro rápido, duplicación de creatinina a >2.5 mg/dL en <2 semanas
- **SHR-ERC (antes Tipo 2)**: Gradual, asociado con ascitis refractaria
- **Diagnóstico**: Requiere exclusión de otras causas; no responde a repleción de volumen con albúmina (1g/kg x 2 días)
- **Tratamiento**: Albúmina + vasopresores (terlipresina preferida; o midodrina + octreotida)
- **Tratamiento definitivo**: Trasplante hepático

### Nefritis Intersticial Aguda (NIA)

- **Causas**: Medicamentos (70-75%): antibióticos betalactámicos, quinolonas, sulfonamidas, IBP, AINEs, alopurinol; infecciones; enfermedades autoinmunes
- **Tríada clásica** (presente en <10% de los casos): Fiebre, exantema, eosinofilia
- **Diagnóstico**: Eosinófilos en orina (baja sensibilidad), cilindros de leucocitos, escáner con galio positivo; diagnóstico definitivo: biopsia renal
- **Tratamiento**: Suspender el agente causal; corticosteroides si no hay mejoría en 5-7 días (prednisona 1mg/kg)

### Rabdomiolisis

- Destrucción del músculo esquelético con liberación de mioglobina
- **Causas**: Trauma, compresión prolongada, ejercicio extremo, golpe de calor, drogas (estatinas, cocaína), convulsiones prolongadas
- **Diagnóstico**: CPK >5,000 U/L (frecuentemente >10,000), hiperpotasemia, hiperfosfatemia, hipocalcemia, ácido úrico elevado, orina oscura con tira reactiva positiva para sangre pero sin eritrocitos
- **Tratamiento**: Hidratación agresiva IV (200-300 mL/h de solución salina), mantener gasto urinario >200-300 mL/h; bicarbonato IV controversial; monitorear y tratar hiperpotasemia

---
## Explanation

### KDIGO Staging (2012)

| Stage | Serum Creatinine Criteria | Urine Output Criteria |
|-------|--------------------------|----------------------|
| 1 | Rise ≥0.3 mg/dL within 48h OR 1.5-1.9x baseline within 7 days | <0.5 mL/kg/h for 6-12h |
| 2 | 2.0-2.9x baseline | <0.5 mL/kg/h for ≥12h |
| 3 | ≥3.0x baseline OR creatinine ≥4.0 mg/dL OR initiation of RRT | <0.3 mL/kg/h for ≥24h OR anuria ≥12h |

### FENa
- <1%: Pre-renal; >2%: Intrinsic; Use FEUrea with diuretics (<35% = pre-renal)

### ATN: Ischemic (phases: initiation, extension, maintenance, recovery) and Nephrotoxic (aminoglycosides, amphotericin B, cisplatin, myoglobin)

### Contrast-Induced Nephropathy: Prevention with IV saline; NAC benefit controversial (PRESERVE trial negative)

### Hepatorenal Syndrome: Functional renal failure in cirrhosis; terlipressin + albumin; definitive = liver transplant

### AIN: Drug-induced (beta-lactams, PPIs, NSAIDs); classic triad rare (<10%); steroids if no improvement at 5-7 days

### Rhabdomyolysis: CPK >5,000; aggressive IV hydration to maintain UO >200-300 mL/h`,
      keyTerms: [
        { term: 'KDIGO', definition: 'Kidney Disease: Improving Global Outcomes; organización que estandarizó la clasificación de LRA. | Organization that standardized AKI staging.' },
        { term: 'FENa / fracción excretada de sodio', definition: 'Diferencia pre-renal (<1%) de intrínseca (>2%); calcular con Na y Cr urinarios y plasmáticos. | Differentiates pre-renal (<1%) from intrinsic (>2%) AKI; calculate with urine and plasma Na and Cr.' },
        { term: 'FEUrea / fracción excretada de urea', definition: 'Útil cuando el paciente toma diuréticos; <35% sugiere pre-renal. | Useful when patient is on diuretics; <35% suggests pre-renal.' },
        { term: 'NTA / ATN', definition: 'Necrosis tubular aguda; muerte de células tubulares renales por isquemia o nefrotóxicos. | Acute tubular necrosis; death of renal tubular cells from ischemia or nephrotoxins.' },
        { term: 'cilindros granulares pardos / muddy brown casts', definition: 'Hallazgo característico en el sedimento urinario de NTA. | Characteristic urine sediment finding in ATN.' },
        { term: 'nefropatía por contraste / contrast-induced nephropathy', definition: 'LRA causada por agentes de contraste yodado, particularmente en pacientes con ERC. | AKI caused by iodinated contrast agents, particularly in patients with CKD.' },
        { term: 'síndrome hepatorrenal / hepatorenal syndrome', definition: 'Falla renal funcional en cirrosis hepática avanzada por cambios hemodinámicos. | Functional renal failure in advanced liver cirrhosis due to hemodynamic changes.' },
        { term: 'terlipresina / terlipressin', definition: 'Análogo de vasopresina usado para tratar el síndrome hepatorrenal. | Vasopressin analogue used to treat hepatorenal syndrome.' },
        { term: 'rabdomiolisis / rhabdomyolysis', definition: 'Destrucción del músculo esquelético que libera mioglobina, la cual es nefrotóxica. | Skeletal muscle breakdown releasing myoglobin, which is nephrotoxic.' },
        { term: 'NIA / AIN', definition: 'Nefritis intersticial aguda; reacción inflamatoria alérgica en el intersticio renal, usualmente por medicamentos. | Acute interstitial nephritis; allergic inflammatory reaction, usually drug-induced.' },
      ],
      clinicalNotes: 'La LRA KDIGO Etapa 3 que requiere TRR tiene 40-60% de mortalidad hospitalaria. La FENa no es confiable con diuréticos, contraste o glomerulonefritis aguda. El riesgo de nefropatía por contraste es mayor con TFG <30. La terlipresina fue aprobada por la FDA (2022) para SHR-LRA (ensayo CONFIRM). La rabdomiolisis requiere hidratación agresiva temprana; el retraso aumenta significativamente el riesgo de NTA. | KDIGO Stage 3 AKI requiring RRT carries 40-60% in-hospital mortality. FENa is unreliable with diuretics, contrast, or acute GN. Contrast nephropathy risk is highest with GFR <30. Terlipressin was FDA-approved (2022) for HRS-AKI (CONFIRM trial). Rhabdomyolysis requires early aggressive hydration; delay significantly increases ATN risk.',
    },
    4: {
      level: 4,
      summary: 'La LRA involucra mecanismos complejos de lesión y reparación tubular, biomarcadores novedosos más allá de la creatinina, mecanismos de transición LRA-a-ERC, y evidencia sobre el momento de inicio de TRR del ensayo STARRT-AKI. | AKI involves complex tubular injury and repair mechanisms, novel biomarkers beyond creatinine, AKI-to-CKD transition mechanisms, and evidence on RRT timing from the STARRT-AKI trial.',
      explanation: `## Explicación

### Mecanismos de Lesión y Reparación de Células Tubulares

La lesión isquémica o tóxica desencadena una cascada de eventos celulares en las células epiteliales del túbulo proximal:

#### Fase de Lesión
- **Depleción de ATP**: La isquemia interrumpe la fosforilación oxidativa, llevando a disfunción de Na/K-ATPasa, pérdida de polaridad celular y disrupción del citoesqueleto
- **Influjo de calcio**: La sobrecarga de calcio mitocondrial activa calpaínas y fosfolipasas
- **Especies reactivas de oxígeno (ERO)**: Generadas durante la reperfusión; causan peroxidación lipídica y daño al ADN
- **Vías de muerte celular**: La necrosis predomina en lesión severa; apoptosis vía caspasa-3 y caspasa-9 en lesión subletal; necrosis regulada (necroptosis vía RIPK1/RIPK3/MLKL, ferroptosis por depleción de GPX4) cada vez más reconocida
- **Desprendimiento**: Las células lesionadas pierden adhesión mediada por integrinas y se descaman hacia la luz tubular, formando cilindros y causando obstrucción tubular

#### Fase de Reparación
- Las células tubulares sobrevivientes se desdiferencian, expresan vimentina y PAX2, proliferan y se rediferencian
- Los macrófagos transicionan del fenotipo M1 (pro-inflamatorio, IL-6, TNF-alfa) a M2 (anti-inflamatorio, IL-10, TGF-beta), facilitando la reparación
- Las vías Wnt/beta-catenina y Notch promueven la regeneración tubular
- La reparación maladaptativa con desdiferenciación persistente lleva a arresto del ciclo celular en G2/M, señalización profibrótica (TGF-beta, CTGF) y transición a ERC

### Biomarcadores Novedosos de LRA

La creatinina sérica es un marcador tardío e insensible. Los biomarcadores novedosos permiten detección más temprana:

| Biomarcador | Fuente | Tiempo | Utilidad Clínica |
|------------|--------|--------|-----------------|
| **NGAL** (lipocalina asociada a gelatinasa de neutrófilos) | Túbulo proximal y distal | 2-4h post-lesión | Detección temprana; sube antes que la creatinina |
| **KIM-1** (molécula de lesión renal-1) | Túbulo proximal | 12-24h | Específica para lesión isquémica/nefrotóxica |
| **TIMP-2 x IGFBP7** (NephroCheck) | Túbulo distal/colector | 4-12h | Aprobada por FDA; marcadores de arresto del ciclo celular; predice LRA Etapa 2/3 |
| **L-FABP** (proteína de unión a ácidos grasos tipo hepático) | Túbulo proximal | 4h | Marcador de estrés tubular |
| **IL-18** | Túbulo proximal | 6-12h | Distingue NTA de pre-renal |

### Transición LRA-a-ERC

La LRA es ahora reconocida como factor de riesgo independiente para desarrollo de ERC:

- **Reparación maladaptativa**: Respuesta de lesión tubular persistente con arresto en G2/M activa vías profibróticas (TGF-beta/Smad3, Wnt/beta-catenina, Hedgehog)
- **Rarefacción capilar**: Pérdida de densidad de capilares peritubulares reduce el aporte de oxígeno, creando un microambiente hipóxico que perpetúa la lesión
- **Reprogramación epigenética**: Cambios en metilación del ADN y modificación de histonas persisten después de la LRA, alterando la expresión génica a largo plazo
- **Disfunción mitocondrial**: Mitocondrias fragmentadas con biogénesis deteriorada no logran satisfacer las demandas metabólicas de los túbulos en recuperación
- **Inflamación crónica**: Infiltración persistente de macrófagos y liberación de citoquinas (MCP-1, IL-1beta)

Factores de riesgo para transición LRA-a-ERC: severidad y duración de la LRA, episodios recurrentes, ERC preexistente, edad, diabetes, proteinuria, y fallo en recuperar la creatinina basal.

### Momento de Inicio de TRR: Ensayo STARRT-AKI

El ensayo STARRT-AKI (2020, NEJM) aleatorizó 2,927 pacientes críticamente enfermos con LRA KDIGO Etapa 2-3:
- **Estrategia acelerada**: TRR iniciada dentro de 12 horas de elegibilidad
- **Estrategia estándar**: TRR iniciada solo por indicaciones convencionales (hiperpotasemia, acidosis, sobrecarga de volumen, uremia)
- **Resultado**: Sin diferencia en mortalidad a 90 días (43.9% vs 43.7%)
- **Hallazgo clave**: La estrategia acelerada se asoció con mayor tasa de dependencia de TRR a 90 días y más eventos adversos
- **Implicación clínica**: La vigilancia expectante con inicio por indicaciones convencionales es apropiada para la mayoría

### Indicaciones Urgentes de TRR

Nemotecnia: **AEIOU**
- **A**cidosis: Acidosis metabólica severa (pH <7.1) refractaria a bicarbonato
- **E**lectrolitos: Hiperpotasemia refractaria (>6.5 mEq/L) con cambios en ECG
- **I**ngestiones: Alcoholes tóxicos (metanol, etilenglicol), litio, salicilatos
- **O**verload (Sobrecarga): Sobrecarga de volumen refractaria a diuréticos
- **U**remia: Encefalopatía urémica, pericarditis o sangrado

---
## Explanation

### Tubular Cell Injury and Repair Mechanisms

#### Injury Phase
- ATP depletion, calcium influx, ROS generation
- Cell death pathways: necrosis, apoptosis, necroptosis (RIPK1/RIPK3/MLKL), ferroptosis (GPX4 depletion)
- Cell detachment forming casts and causing tubular obstruction

#### Repair Phase
- Surviving cells dedifferentiate, proliferate, and redifferentiate
- M1 to M2 macrophage transition facilitates repair
- Maladaptive repair leads to G2/M arrest and fibrosis

### Novel AKI Biomarkers
- NGAL (2-4h), KIM-1 (12-24h), TIMP-2 x IGFBP7/NephroCheck (4-12h, FDA-approved)

### AKI-to-CKD Transition
- Maladaptive repair, capillary rarefaction, epigenetic reprogramming, mitochondrial dysfunction, chronic inflammation

### STARRT-AKI Trial
- No benefit of accelerated RRT; standard approach with conventional indications is appropriate
- Accelerated strategy associated with higher RRT dependence at 90 days

### Urgent RRT Indications: AEIOU
- Acidosis, Electrolytes, Ingestions, Overload, Uremia`,
      keyTerms: [
        { term: 'NGAL / lipocalina', definition: 'Lipocalina asociada a gelatinasa de neutrófilos; biomarcador temprano de lesión tubular que sube 2-4h después de la lesión. | Neutrophil gelatinase-associated lipocalin; early tubular injury biomarker rising 2-4h post-insult.' },
        { term: 'KIM-1', definition: 'Molécula de lesión renal-1; glucoproteína transmembrana específica para lesión isquémica/tóxica del túbulo proximal. | Kidney injury molecule-1; transmembrane glycoprotein specific for proximal tubular ischemic/toxic injury.' },
        { term: 'TIMP-2/IGFBP7 (NephroCheck)', definition: 'Marcadores de arresto del ciclo celular aprobados por FDA para predicción de riesgo de LRA moderada-severa. | FDA-approved cell cycle arrest biomarkers for moderate-severe AKI risk prediction.' },
        { term: 'necroptosis', definition: 'Necrosis regulada mediada por la vía RIPK1/RIPK3/MLKL; reconocida en la patogénesis de LRA. | Regulated necrosis mediated by RIPK1/RIPK3/MLKL pathway; recognized in AKI pathogenesis.' },
        { term: 'ferroptosis', definition: 'Muerte celular dependiente de hierro por peroxidación lipídica debido a depleción de GPX4. | Iron-dependent cell death from lipid peroxidation due to GPX4 depletion.' },
        { term: 'rarefacción capilar / capillary rarefaction', definition: 'Pérdida de densidad de capilares peritubulares después de LRA, promoviendo hipoxia y fibrosis. | Loss of peritubular capillary density after AKI, promoting hypoxia and fibrosis.' },
        { term: 'arresto G2/M / G2/M arrest', definition: 'Arresto del ciclo celular en células tubulares que lleva a un fenotipo secretor profibrótico. | Cell cycle arrest in tubular cells leading to profibrotic secretory phenotype.' },
        { term: 'STARRT-AKI', definition: 'Ensayo histórico que mostró que no hay beneficio del inicio acelerado de TRR en LRA severa. | Landmark trial showing no benefit of accelerated RRT initiation in severe AKI.' },
        { term: 'reparación maladaptativa / maladaptive repair', definition: 'Fallo en la recuperación tubular que lleva a fibrosis y transición a ERC. | Failed tubular recovery leading to fibrosis and CKD transition.' },
        { term: 'AEIOU', definition: 'Nemotecnia para indicaciones urgentes de diálisis: Acidosis, Electrolitos, Ingestiones, Overload (sobrecarga), Uremia. | Mnemonic for urgent dialysis indications: Acidosis, Electrolytes, Ingestions, Overload, Uremia.' },
      ],
      clinicalNotes: 'TIMP-2 x IGFBP7 (NephroCheck) >0.3 identifica pacientes en riesgo de LRA KDIGO 2-3 dentro de 12 horas. STARRT-AKI apoya un enfoque estándar para el momento de TRR: vigilancia expectante a menos que surjan indicaciones convencionales. Los inhibidores de ferroptosis y agentes dirigidos a mitocondrias se exploran como terapéuticos para LRA. La combinación piperacilina-tazobactam + vancomicina aumenta el riesgo de LRA vs cefepima + vancomicina (ensayo ACORN, 2023). | TIMP-2 x IGFBP7 (NephroCheck) >0.3 identifies patients at risk for KDIGO 2-3 AKI within 12 hours. STARRT-AKI supports standard approach to RRT timing. Ferroptosis inhibitors and mitochondrial-targeted agents are being explored as AKI therapeutics. Piperacillin-tazobactam + vancomycin increases AKI risk vs cefepime + vancomycin (ACORN trial, 2023).',
    },
    5: {
      level: 5,
      summary: 'La medicina de precisión en LRA involucra sub-fenotipos moleculares, modelos de predicción basados en IA, programas de administración de nefrotóxicos, y manejo de LRA en poblaciones complejas incluyendo cirrosis, post-cirugía cardíaca y onco-nefrología. | Precision AKI medicine involves molecular sub-phenotypes, AI-based prediction models, nephrotoxin stewardship programs, and AKI management in complex populations including cirrhosis, post-cardiac surgery, and onco-nephrology.',
      explanation: `## Explicación

### LRA de Precisión: Sub-Fenotipos Moleculares

La LRA se reconoce cada vez más como un síndrome con fisiopatología heterogénea. Las estrategias emergentes de sub-fenotipificación buscan identificar endotipos biológicos distintos:

#### Sub-fenotipos Basados en Biomarcadores
- **Sub-fenotipo 1** (baja inflamación/baja lesión): NGAL, KIM-1, IL-6 bajos; mejor pronóstico; puede no beneficiarse de intervención agresiva
- **Sub-fenotipo 2** (alta inflamación/alta lesión): Marcadores inflamatorios y de lesión tubular elevados; mayor mortalidad; puede responder a terapia antiinflamatoria dirigida
- Bhatraju et al. (2019, Kidney International): identificaron dos sub-fenotipos de LRA usando análisis de clases latentes de trayectorias de biomarcadores; sub-fenotipo 2 tuvo 2.3x mayor mortalidad a 7 días

#### Endotipos Moleculares
- La LRA asociada a sepsis (LRA-AS) tiene fisiopatología distinta: disfunción microcirculatoria, reprogramación metabólica, lesión mitocondrial y apoptosis tubular inflamatoria, frecuentemente con flujo sanguíneo renal preservado (desafía el paradigma tradicional de isquemia)
- Paneles de transcriptómica y proteómica urinaria en desarrollo para clasificar endotipos de LRA en tiempo real
- El estudio RUBY validó modelos clínico-biomarcadores para predicción de LRA severa persistente

### Predicción de LRA Basada en IA

#### Modelos de Aprendizaje Profundo
- Tomasev et al. (2019, Nature): DeepMind desarrolló una red neuronal recurrente prediciendo LRA hasta 48 horas antes usando registros electrónicos de hospitales VA. AUC de 0.921 para KDIGO 3, pero notable sesgo de sexo (entrenado predominantemente con datos masculinos)
- Modelos subsecuentes incorporan signos vitales continuos, registros de administración de medicamentos y tendencias de laboratorio
- Los enfoques de aprendizaje federado permiten entrenamiento multi-céntrico sin compartir datos de pacientes

#### Soporte de Decisión Clínica
- Los sistemas de alerta electrónica de LRA reducen el tiempo hasta el reconocimiento y mejoran los resultados cuando se acoplan con paquetes de cuidado estandarizados
- Las alertas de nefrotóxicos aumentadas por IA reducen la exposición innecesaria a nefrotóxicos en 25-35%
- Modelos de aprendizaje por refuerzo para manejo personalizado de líquidos y titulación de vasopresores en LRA están en investigación

### Programas de Administración de Nefrotóxicos

Enfoques sistemáticos para reducir la LRA asociada a medicamentos:

- **NINJA (Nephrotoxic Injury Negated by Just-in-Time Action)**: Programa pediátrico multicéntrico que reduce la LRA por nefrotóxicos en 24% mediante vigilancia automatizada y alertas en tiempo real
- Nefrotóxicos clave que requieren vigilancia: aminoglucósidos, vancomicina, AINEs, inhibidores de calcineurina, anfotericina B, contraste IV, combinación piperacilina-tazobactam + vancomicina
- La combinación "triple golpe" (IECA/ARA-II + diurético + AINE) aumenta el riesgo de LRA 31 veces
- La dosificación guiada por farmacocinética con modelos bayesianos para vancomicina (meta AUC/MIC 400-600) reduce la LRA comparado con dosificación basada en niveles valle

### LRA en Poblaciones Especiales

#### LRA en Cirrosis
- Criterios revisados ICA (International Club of Ascites): LRA definida como aumento de creatinina ≥0.3 mg/dL en 48h o ≥50% de la basal; basal = creatinina más baja en los 3 meses previos
- La baja masa muscular en cirrosis lleva a creatinina basal falsamente baja, enmascarando la severidad de la LRA
- Diagnóstico diferencial: pre-renal (responde a volumen), SHR-LRA (no responde a albúmina), NTA (frecuentemente superpuesta a SHR), post-renal (rara)
- Terlipresina aprobada por FDA (2022) para SHR-LRA: ensayo CONFIRM mostró 32% vs 17% de reversión del SHR vs placebo; requiere monitoreo por falla respiratoria (advertencia en recuadro)
- La cistatina C puede ser superior a la creatinina para estimación de TFG en cirrosis

#### LRA Asociada a Cirugía Cardíaca (LRA-CC)
- Incidencia: 20-30% de pacientes de cirugía cardíaca; LRA Etapa 3 en 2-5%
- Fisiopatología: hemodilución en derivación cardiopulmonar (DCP), flujo no pulsátil, lesión isquemia-reperfusión, hemólisis por cizallamiento mecánico, inflamación por activación del circuito, ateroembolia
- Scores de riesgo: Cleveland Clinic Score, calculador de riesgo STS
- Estrategias de prevención: perfusión dirigida por metas (PAM >65-70 en DCP), minimizar tiempo de DCP, mantener hematocrito >21%, evitar hiperglucemia
- El paquete de cuidado KDIGO en pacientes de alto riesgo reduce la incidencia de LRA

#### Onco-Nefrología
- Inhibidores de puntos de control inmunológico (anti-PD1/PDL1, anti-CTLA4) causan NIA en 2-5%; puede presentarse semanas a meses después del inicio; biopsia muestra infiltrado intersticial rico en células T
- Terapia CAR-T: LRA asociada al síndrome de liberación de citoquinas en 10-30%, frecuentemente concurrente con síndrome de lisis tumoral
- Síndrome de lisis tumoral: nefropatía por cristales de ácido úrico y fosfato de calcio; prevención con rasburicasa e hidratación agresiva

### Terapéuticas Emergentes
- **Teprasiran**: ARN pequeño de interferencia (siRNA) dirigido a p53 en células tubulares; ensayos fase 3 para prevención de LRA-CC (QPI-1002)
- **Fosfatasa alcalina recombinante**: Detoxifica LPS; ensayos fase 2 en LRA asociada a sepsis
- **Antioxidantes dirigidos a mitocondrias**: MitoQ, SS-31 (elamipretide) en estudios preclínicos/tempranos
- **Terapias con células madre**: Células estromales mesenquimales (CSM) mostrando renoprotección mediada por paracrinos en ensayos fase 1/2

---
## Explanation

### Precision AKI: Molecular Sub-Phenotypes
- Sub-phenotype 1 (low inflammation): better prognosis
- Sub-phenotype 2 (high inflammation): 2.3x higher 7-day mortality; may respond to targeted therapy
- Sepsis-associated AKI has distinct pathophysiology with often preserved renal blood flow

### AI-Based AKI Prediction
- DeepMind RNN: AUC 0.921 for KDIGO 3 prediction 48h in advance; sex bias limitations
- AKI e-alert systems + care bundles improve outcomes
- Federated learning enables multi-center training

### Nephrotoxin Stewardship
- NINJA program: 24% reduction in nephrotoxin-associated AKI
- Triple-whammy (ACEi/ARB + diuretic + NSAID): 31-fold AKI risk increase
- Bayesian vancomycin dosing (AUC/MIC 400-600) reduces AKI

### AKI in Special Populations
- Cirrhosis: Terlipressin FDA-approved for HRS-AKI; cystatin C superior to creatinine
- Cardiac surgery: 20-30% incidence; KDIGO care bundle reduces AKI
- Onco-nephrology: checkpoint inhibitor AIN, CAR-T CRS-AKI, tumor lysis syndrome

### Emerging Therapeutics
- Teprasiran (p53 siRNA), recombinant alkaline phosphatase, mitochondria-targeted antioxidants, MSC therapy`,
      keyTerms: [
        { term: 'sub-fenotipos de LRA / AKI sub-phenotypes', definition: 'Subtipos biológicos distintos de LRA identificados por patrones de biomarcadores y trayectorias clínicas. | Distinct biological subtypes of AKI identified by biomarker patterns and clinical trajectories.' },
        { term: 'NINJA', definition: 'Nephrotoxic Injury Negated by Just-in-Time Action; programa pediátrico de administración de nefrotóxicos que reduce LRA 24%. | Pediatric nephrotoxin stewardship program reducing AKI by 24%.' },
        { term: 'LRA asociada a sepsis / sepsis-associated AKI', definition: 'LRA en sepsis con fisiopatología distinta incluyendo disfunción microcirculatoria y reprogramación metabólica. | AKI in sepsis with distinct pathophysiology including microcirculatory dysfunction and metabolic reprogramming.' },
        { term: 'LRA-CC / CSA-AKI', definition: 'LRA asociada a cirugía cardíaca por insultos hemodinámicos e inflamatorios de la derivación cardiopulmonar. | Cardiac surgery-associated AKI from CPB-related hemodynamic and inflammatory insults.' },
        { term: 'terlipresina / terlipressin', definition: 'Agonista del receptor V1 de vasopresina aprobado por FDA para SHR-LRA (ensayo CONFIRM). | Vasopressin V1 receptor agonist FDA-approved for HRS-AKI (CONFIRM trial).' },
        { term: 'teprasiran', definition: 'siRNA dirigido a p53 en células tubulares en investigación para prevención de LRA-CC. | siRNA targeting p53 in tubular cells under investigation for CSA-AKI prevention.' },
        { term: 'triple golpe / triple-whammy', definition: 'Combinación de IECA/ARA-II + diurético + AINE que aumenta el riesgo de LRA 31 veces. | Combination of ACEi/ARB + diuretic + NSAID increasing AKI risk 31-fold.' },
        { term: 'preacondicionamiento isquémico remoto / remote ischemic preconditioning', definition: 'Ciclos breves de isquemia en extremidad antes de cirugía como estrategia de protección renal. | Brief limb ischemia cycles before surgery as kidney protection strategy.' },
        { term: 'aprendizaje federado / federated learning', definition: 'Enfoque de entrenamiento de IA entre instituciones sin compartir datos crudos de pacientes. | AI training approach across institutions without sharing raw patient data.' },
        { term: 'NephroCheck', definition: 'Prueba urinaria aprobada por FDA de TIMP-2 x IGFBP7 que predice LRA moderada-severa. | FDA-approved urinary TIMP-2 x IGFBP7 test predicting moderate-severe AKI.' },
      ],
      clinicalNotes: 'Los modelos de predicción de LRA basados en IA muestran promesa pero requieren validación externa y mitigación de sesgos. La terlipresina para SHR-LRA conlleva riesgo de falla respiratoria (advertencia del ensayo CONFIRM). La piperacilina-tazobactam + vancomicina aumenta el riesgo de LRA comparado con cefepima + vancomicina (ensayo ACORN, 2023). La administración de nefrotóxicos es una estrategia de mejora de calidad basada en evidencia que todos los hospitales deberían implementar. El ensayo RUBY validó la combinación de biomarcadores con datos clínicos para predicción de LRA severa persistente. | AI-based AKI prediction models show promise but require external validation and bias mitigation. Terlipressin for HRS-AKI carries respiratory failure risk (CONFIRM trial warning). Piperacillin-tazobactam + vancomycin increases AKI risk vs cefepime + vancomycin (ACORN trial, 2023). Nephrotoxin stewardship is an evidence-based quality improvement strategy all hospitals should implement. The RUBY study validated combined biomarker-clinical data models for persistent severe AKI prediction.',
    },
  },
  media: [],
  citations: [
    {
      id: 'ref-1',
      type: 'textbook',
      title: 'KDIGO Clinical Practice Guideline for Acute Kidney Injury',
      authors: ['Kidney Disease: Improving Global Outcomes (KDIGO) AKI Work Group'],
      source: 'Kidney International Supplements 2012; 2:1-138',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-2',
      type: 'article',
      title: 'Timing of Initiation of Renal-Replacement Therapy in Acute Kidney Injury (STARRT-AKI)',
      authors: ['STARRT-AKI Investigators'],
      source: 'New England Journal of Medicine 2020; 383:240-251',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-3',
      type: 'article',
      title: 'A clinically applicable approach to continuous prediction of future acute kidney injury',
      authors: ['Tomasev N', 'Glorot X', 'Rae JW', 'et al.'],
      source: 'Nature 2019; 572:116-119',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-4',
      type: 'article',
      title: 'Identification of Acute Kidney Injury Subphenotypes with Differing Molecular Signatures',
      authors: ['Bhatraju PK', 'Zelnick LR', 'Herting J', 'et al.'],
      source: 'Kidney International 2019; 95(6):1399-1408',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-5',
      type: 'textbook',
      title: 'Brenner and Rector\'s The Kidney, 11th Edition',
      authors: ['Yu ASL', 'Chertow GM', 'Luyckx VA', 'et al.'],
      source: 'Elsevier',
      license: 'CC BY 4.0',
    },
  ],
  crossReferences: [
    { targetId: 'condition-enfermedad-renal-cronica-ckd', targetType: 'condition', relationship: 'related', label: 'Transición LRA-a-ERC / AKI-to-CKD transition' },
    { targetId: 'condition-dialisis-dialysis', targetType: 'condition', relationship: 'related', label: 'Diálisis para LRA severa / Dialysis for severe AKI' },
    { targetId: 'condition-glomerulonefritis-glomerulonephritis', targetType: 'condition', relationship: 'related', label: 'Glomerulonefritis como causa de LRA intrínseca / GN as intrinsic AKI cause' },
  ],
  tags: {
    systems: ['renal'],
    topics: ['nephrology'],
    keywords: [
      'LRA', 'AKI', 'lesión renal aguda', 'acute kidney injury', 'creatinina', 'creatinine',
      'KDIGO', 'NTA', 'ATN', 'necrosis tubular aguda', 'síndrome hepatorrenal',
      'hepatorenal syndrome', 'nefropatía por contraste', 'contrast nephropathy',
      'nefrotóxicos', 'nephrotoxins', 'diálisis', 'dialysis', 'terapia de reemplazo renal',
      'renal replacement therapy', 'biomarcadores', 'biomarkers', 'NGAL', 'KIM-1',
      'FENa', 'rabdomiolisis', 'rhabdomyolysis',
    ],
    clinicalRelevance: 'high',
  },
  createdAt: '2026-02-05',
  updatedAt: '2026-02-05',
  version: 1,
  status: 'published',
  contributors: ['SOMA AI Content Team'],
};
