import { EducationalContent } from '../types';

export const enfermedadRenalCronicaCkd: EducationalContent = {
  id: 'condition-enfermedad-renal-cronica-ckd',
  type: 'condition',
  name: 'Chronic Kidney Disease',
  nameEs: 'Enfermedad Renal Crónica',
  alternateNames: ['CKD', 'ERC', 'Insuficiencia Renal Crónica', 'Chronic Renal Failure', 'Chronic Renal Insufficiency', 'Nefropatía Crónica'],
  levels: {
    1: {
      level: 1,
      summary: 'La enfermedad renal crónica (ERC) significa que los riñones se están debilitando lentamente y no pueden limpiar la sangre tan bien como antes. | Chronic kidney disease (CKD) means the kidneys are slowly getting weaker and cannot clean the blood as well as before.',
      explanation: `## Explicación

La enfermedad renal crónica es cuando los riñones han estado dañados durante **tres meses o más** y van perdiendo poco a poco su capacidad de limpiar la sangre.

### ¿Qué hacen los riñones?

Los riñones son como filtros de agua en tu cuerpo. Cada día filtran toda tu sangre muchas veces para:
- **Eliminar los desechos** (sustancias que tu cuerpo no necesita)
- **Controlar los líquidos** (mantener el equilibrio de agua)
- **Regular la presión arterial**
- **Producir hormonas** que ayudan a tener huesos fuertes y sangre saludable

### ¿Qué causa la ERC?

Las dos causas más comunes son:
- **Diabetes**: Demasiada azúcar en la sangre daña los pequeños vasos sanguíneos dentro de los riñones
- **Presión arterial alta (hipertensión)**: Demasiada presión contra los vasos sanguíneos del riñón los daña con el tiempo

Otras causas incluyen enfermedades hereditarias, infecciones renales repetidas y algunos medicamentos.

### Las etapas de la ERC

Los doctores describen la ERC en etapas del 1 al 5:
- **Etapas 1-2**: Los riñones están levemente dañados pero todavía funcionan bastante bien. La mayoría de las personas se sienten bien.
- **Etapa 3**: Los riñones están moderadamente dañados. Los desechos pueden empezar a acumularse.
- **Etapa 4**: Los riñones están severamente dañados. Puedes sentirte cansado o enfermo.
- **Etapa 5**: Los riñones casi no funcionan. Esto se llama insuficiencia renal y se necesita diálisis o un trasplante.

### ¿Qué pasa sin tratamiento?

Cuando los riñones fallan, los productos de desecho se acumulan y causan problemas en todo el cuerpo: hinchazón, cansancio, náuseas, comezón y dificultad para respirar.

---
## Explanation

Chronic kidney disease means the kidneys have been damaged for **three months or more** and are gradually losing their ability to clean the blood.

### What do the kidneys do?

The kidneys act like water filters in your body. Every day they filter all your blood many times to:
- **Remove waste** (substances your body does not need)
- **Control fluids** (maintain water balance)
- **Regulate blood pressure**
- **Produce hormones** that help keep bones strong and blood healthy

### What causes CKD?

The two most common causes are:
- **Diabetes**: Too much sugar in the blood damages the tiny blood vessels inside the kidneys
- **High blood pressure (hypertension)**: Too much pressure pushing against the kidney blood vessels damages them over time

Other causes include inherited diseases, recurring kidney infections, and some medications.

### CKD Stages

Doctors describe CKD in stages from 1 to 5:
- **Stages 1-2**: Kidneys are mildly damaged but still work fairly well. Most people feel fine.
- **Stage 3**: Kidneys are moderately damaged. Waste may start building up.
- **Stage 4**: Kidneys are severely damaged. You may feel tired or sick.
- **Stage 5**: Kidneys barely work at all. This is called kidney failure, and dialysis or a transplant is needed.

### What happens without treatment?

When kidneys fail, waste products build up and cause problems throughout the body: swelling, tiredness, nausea, itching, and difficulty breathing.`,
      keyTerms: [
        { term: 'enfermedad renal crónica / chronic kidney disease', definition: 'Daño a los riñones que dura más de 3 meses y afecta su capacidad de filtrar la sangre. | Kidney damage lasting more than 3 months that affects their ability to filter blood.' },
        { term: 'diálisis / dialysis', definition: 'Tratamiento con una máquina que limpia la sangre cuando los riñones no pueden hacerlo. | Treatment using a machine that cleans the blood when the kidneys cannot.' },
        { term: 'trasplante / transplant', definition: 'Cirugía para dar a alguien un riñón sano de otra persona. | Surgery to give someone a healthy kidney from another person.' },
        { term: 'diabetes', definition: 'Enfermedad donde el azúcar en la sangre es demasiado alta, lo cual puede dañar los riñones. | A disease where blood sugar is too high, which can damage kidneys.' },
        { term: 'presión arterial alta / high blood pressure', definition: 'Cuando la fuerza de la sangre contra las paredes de las arterias es demasiado alta. | When the force of blood against the artery walls is too high.' },
        { term: 'filtración / filtration', definition: 'El proceso por el cual los riñones limpian la sangre, separando los desechos. | The process by which kidneys clean the blood, separating waste.' },
      ],
      analogies: [
        'La ERC es como un filtro de agua doméstico que se va desgastando poco a poco: todavía funciona un poco, pero deja pasar cada vez más impurezas. | CKD is like a home water filter slowly wearing out -- it still works a little, but lets through more and more impurities over time.',
        'Las etapas de la ERC son como las calificaciones de un examen para tus riñones: Etapa 1 es la mejor nota y Etapa 5 significa que están fallando. | CKD stages are like grades on a report card for your kidneys: Stage 1 is the best grade and Stage 5 means they are failing.',
      ],
      examples: [
        'Una persona con diabetes que no controla su azúcar por muchos años puede desarrollar ERC porque el exceso de azúcar daña los filtros de los riñones. | A person with uncontrolled diabetes for many years may develop CKD because excess sugar damages the kidney filters.',
        'Alguien con presión arterial alta sin tratar puede notar después de años que sus riñones ya no funcionan tan bien. | Someone with untreated high blood pressure may notice after years that their kidneys no longer work as well.',
      ],
      patientCounselingPoints: [
        'Mantenga su presión arterial y azúcar en la sangre bajo buen control para proteger sus riñones. | Keep blood pressure and blood sugar under good control to protect your kidneys.',
        'Tome sus medicamentos según las indicaciones; no omita dosis. | Take your medications as prescribed; do not skip doses.',
        'Coma menos sal y alimentos procesados para ayudar a sus riñones. | Eat less salt and processed food to help your kidneys.',
        'Manténgase activo y en un peso saludable. | Stay active and maintain a healthy weight.',
        'No tome demasiados analgésicos de venta libre como ibuprofeno, ya que pueden dañar los riñones. | Do not take too many over-the-counter pain medicines like ibuprofen, as they can damage kidneys.',
      ],
    },
    2: {
      level: 2,
      summary: 'La ERC se clasifica por la tasa de filtración glomerular (TFG) y la albuminuria; las complicaciones principales incluyen anemia, enfermedad ósea, enfermedad cardiovascular y desequilibrios electrolíticos. | CKD is staged by GFR and albuminuria; major complications include anemia, bone disease, cardiovascular disease, and electrolyte imbalances.',
      explanation: `## Explicación

### Definición y Detección

La ERC se define como anomalías de la estructura o función renal presentes durante **más de 3 meses** con implicaciones para la salud. Los marcadores clave son:
- **TFG (Tasa de Filtración Glomerular) <60 mL/min/1.73m²** durante más de 3 meses
- **Albuminuria** (relación albúmina-creatinina ≥ 30 mg/g)
- Sedimento urinario anormal, trastornos electrolíticos, anomalías estructurales o historial de trasplante

### Clasificación por TFG

| Etapa | TFG (mL/min/1.73m²) | Descripción |
|-------|---------------------|-------------|
| G1 | ≥ 90 | Normal o alta |
| G2 | 60-89 | Levemente disminuida |
| G3a | 45-59 | Leve a moderadamente disminuida |
| G3b | 30-44 | Moderada a severamente disminuida |
| G4 | 15-29 | Severamente disminuida |
| G5 | <15 | Falla renal |

### Clasificación por Albuminuria

| Categoría | RAC (mg/g) | Descripción |
|-----------|-----------|-------------|
| A1 | <30 | Normal a levemente aumentada |
| A2 | 30-300 | Moderadamente aumentada (microalbuminuria) |
| A3 | >300 | Severamente aumentada (macroalbuminuria) |

### Causas Comunes
- Nefropatía diabética (~40% de los casos de ERC)
- Nefroesclerosis hipertensiva (~25%)
- Glomerulonefritis (~10%)
- Enfermedad renal poliquística (~5%)
- Uropatía obstructiva, nefropatía por reflujo, otras

### Complicaciones Principales

#### Anemia
Los riñones producen eritropoyetina (EPO), que estimula la producción de glóbulos rojos. En la ERC, la producción de EPO disminuye, causando anemia normocítica. Tratamiento: agentes estimulantes de la eritropoyesis (AEE) y suplementos de hierro.

#### Enfermedad Mineral Ósea de la ERC (EMO-ERC)
Los riñones activan la vitamina D y excretan fósforo. En la ERC:
- El fósforo sube (hiperfosfatemia)
- La vitamina D activa (calcitriol) baja
- El calcio baja, estimulando la liberación de hormona paratiroidea (PTH)
- El hiperparatiroidismo secundario produce enfermedad ósea (osteodistrofia renal)

#### Enfermedad Cardiovascular
Los pacientes con ERC tienen un riesgo mucho mayor de enfermedad cardíaca, accidente cerebrovascular e insuficiencia cardíaca. Los factores de riesgo incluyen hipertensión, sobrecarga de líquidos, calcificación vascular y toxinas urémicas.

#### Acidosis Metabólica
Los riñones que fallan no pueden excretar ácido adecuadamente. La suplementación con bicarbonato ralentiza la progresión de la ERC.

#### Hiperpotasemia
La excreción reducida de potasio lleva a niveles peligrosamente altos, con riesgo de arritmias cardíacas.

---
## Explanation

### Definition and Detection

CKD is defined as abnormalities of kidney structure or function present for **>3 months** with health implications. Key markers:
- **GFR <60 mL/min/1.73m²** for 3+ months
- **Albuminuria** (albumin-to-creatinine ratio ≥ 30 mg/g)
- Abnormal urinary sediment, electrolyte disorders, structural abnormalities, or history of transplant

### GFR Staging

| Stage | GFR (mL/min/1.73m²) | Description |
|-------|---------------------|-------------|
| G1 | ≥ 90 | Normal or high |
| G2 | 60-89 | Mildly decreased |
| G3a | 45-59 | Mildly to moderately decreased |
| G3b | 30-44 | Moderately to severely decreased |
| G4 | 15-29 | Severely decreased |
| G5 | <15 | Kidney failure |

### Albuminuria Staging

| Category | ACR (mg/g) | Description |
|----------|-----------|-------------|
| A1 | <30 | Normal to mildly increased |
| A2 | 30-300 | Moderately increased (microalbuminuria) |
| A3 | >300 | Severely increased (macroalbuminuria) |

### Common Causes
- Diabetic kidney disease (~40% of CKD cases)
- Hypertensive nephrosclerosis (~25%)
- Glomerulonephritis (~10%)
- Polycystic kidney disease (~5%)
- Obstructive uropathy, reflux nephropathy, others

### Major Complications

#### Anemia
Kidneys produce erythropoietin (EPO), which stimulates red blood cell production. In CKD, EPO production falls, causing normocytic anemia. Treatment: erythropoiesis-stimulating agents (ESAs) and iron supplementation.

#### CKD-Mineral and Bone Disorder (CKD-MBD)
Kidneys activate vitamin D and excrete phosphorus. In CKD:
- Phosphorus rises (hyperphosphatemia)
- Active vitamin D (calcitriol) falls
- Calcium drops, stimulating parathyroid hormone (PTH) release
- Secondary hyperparathyroidism leads to bone disease (renal osteodystrophy)

#### Cardiovascular Disease
CKD patients have a much higher risk of heart disease, stroke, and heart failure. Risk factors include hypertension, fluid overload, vascular calcification, and uremic toxins.

#### Metabolic Acidosis
Failing kidneys cannot excrete acid properly. Bicarbonate supplementation slows CKD progression.

#### Hyperkalemia
Reduced potassium excretion leads to dangerously high levels, risking cardiac arrhythmias.`,
      keyTerms: [
        { term: 'TFG / GFR', definition: 'Tasa de filtración glomerular; la velocidad a la que los riñones filtran la sangre, medida en mL/min/1.73m². | Glomerular filtration rate; the rate kidneys filter blood, measured in mL/min/1.73m².' },
        { term: 'albuminuria', definition: 'Presencia anormal de la proteína albúmina en la orina, indicando daño renal. | Abnormal presence of albumin protein in urine, indicating kidney damage.' },
        { term: 'RAC / ACR', definition: 'Relación albúmina-creatinina; usada para cuantificar la albuminuria. | Albumin-to-creatinine ratio; used to quantify albuminuria.' },
        { term: 'eritropoyetina / erythropoietin', definition: 'Hormona producida por los riñones que estimula la producción de glóbulos rojos. | Kidney-produced hormone stimulating red blood cell production.' },
        { term: 'EMO-ERC / CKD-MBD', definition: 'Enfermedad mineral ósea de la ERC; complicaciones óseas y minerales de la ERC. | Chronic kidney disease-mineral and bone disorder; bone and mineral complications of CKD.' },
        { term: 'hiperparatiroidismo secundario / secondary hyperparathyroidism', definition: 'Glándulas paratiroides hiperactivas debido al bajo calcio y vitamina D en la ERC. | Overactive parathyroid glands due to low calcium and vitamin D in CKD.' },
        { term: 'acidosis metabólica / metabolic acidosis', definition: 'Exceso de ácido en la sangre cuando los riñones no pueden excretar suficiente ácido. | Excess acid in the blood when kidneys cannot excrete enough acid.' },
        { term: 'hiperpotasemia / hyperkalemia', definition: 'Nivel peligrosamente alto de potasio en la sangre. | Dangerously high blood potassium level.' },
      ],
      clinicalNotes: 'Tamizar para ERC en pacientes con diabetes e hipertensión con creatinina sérica anual y albúmina urinaria. Tanto la TFG como la albuminuria predicen independientemente los resultados renales y el riesgo cardiovascular. Referir a nefrología cuando TFG <30 o TFG en descenso rápido. | Screen for CKD in diabetes and hypertension patients with annual serum creatinine and urine albumin. Both GFR and albuminuria independently predict kidney outcomes and cardiovascular risk. Refer to nephrology at GFR <30 or rapidly declining GFR.',
    },
    3: {
      level: 3,
      summary: 'El manejo de la ERC involucra inhibición del SRAA, inhibidores SGLT2, metas de presión arterial y control glucémico, control de fósforo, AEE y preparación para terapia de reemplazo renal. | CKD management involves RAAS inhibition, SGLT2 inhibitors, blood pressure and glycemic targets, phosphorus control, ESAs, and preparation for renal replacement therapy.',
      explanation: `## Explicación

### Manejo Basado en Evidencia de la ERC

#### Frenar la Progresión

**Inhibición del SRAA (Sistema Renina-Angiotensina-Aldosterona):**
- Los inhibidores de la ECA o los ARA-II son de primera línea para ERC con albuminuria (A2-A3)
- Reducen la presión intraglomerular al dilatar la arteriola eferente
- Un aumento inicial de creatinina de hasta 30% es aceptable (monitorear en 1-2 semanas)
- Evitar el bloqueo dual del SRAA (ensayos ONTARGET, VA NEPHRON-D mostraron aumento de hiperpotasemia/LRA)

**Inhibidores SGLT2:**
- Dapagliflozina (DAPA-CKD) y empagliflozina (EMPA-KIDNEY): reducen la progresión de la ERC y eventos cardiovasculares en ERC diabética y no diabética
- Mecanismo: reducen la retroalimentación tubuloglomerular, disminuyen la hipertensión intraglomerular, reducen la albuminuria, efectos antiinflamatorios y antifibróticos
- Se pueden iniciar hasta una TFG de 20 mL/min
- La caída inicial de TFG (~5 mL/min) es hemodinámica y esperada; la trayectoria a largo plazo mejora

**ARM No Esteroideo (Finerenona):**
- Ensayos FIDELIO-DKD y FIGARO-DKD: reduce resultados renales y cardiovasculares en ERC diabética
- Mecanismo: bloquea la inflamación y fibrosis mediadas por mineralocorticoides
- Riesgo: hiperpotasemia; requiere monitoreo de potasio

**Metas de Presión Arterial:**
- KDIGO 2021: meta de sistólica <120 mmHg (medición estandarizada en consultorio) cuando se tolera
- El ensayo SPRINT apoya el control intensivo de PA para beneficio renal y cardiovascular

**Control Glucémico:**
- Meta de HbA1c ~7% en la mayoría de los pacientes; individualizar según riesgo de hipoglucemia
- Inhibidores SGLT2 como agente preferido; agonistas del receptor GLP-1 tienen beneficio aditivo
- Evitar metformina cuando TFG <30; reducir dosis cuando TFG 30-45

#### Manejo de Complicaciones

**Anemia:**
- Meta de hemoglobina 10-11.5 g/dL con AEE (epoetina alfa, darbepoetina alfa)
- Ensayos TREAT y CHOIR: metas de Hb más altas (>13) aumentan riesgo de ACV/cardiovascular
- Verificar reservas de hierro primero; meta de ferritina >100 (>200 en diálisis), IST >20%
- IFH-IPH (roxadustat, daprodustat): alternativas orales a los AEE inyectables

**EMO-ERC:**
- Restringir fósforo dietético; usar quelantes de fosfato con las comidas
- Quelantes basados en calcio (carbonato/acetato de calcio) o sin calcio (sevelamer, lantano)
- Análogos activos de vitamina D (calcitriol, paricalcitol) para hiperparatiroidismo secundario
- Cinacalcet (calcimimético) para hiperparatiroidismo refractario
- Meta: mantener fósforo 2.5-4.5, PTH 2-9x normal superior en diálisis

**Acidosis Metabólica:**
- Bicarbonato de sodio oral cuando bicarbonato sérico <22 mEq/L
- Ralentiza la progresión de la ERC y mejora el estado nutricional

**Hiperpotasemia:**
- Restricción de potasio en la dieta
- Quelantes de potasio: poliestireno sulfonato sódico (Kayexalate), patiromer (Veltassa), ciclosilicato de sodio y zirconio (Lokelma)
- Los nuevos quelantes permiten continuar la inhibición del SRAA

### Modalidades de Diálisis

#### Hemodiálisis (HD)
- La sangre se bombea a través de un circuito extracorpóreo con membrana semipermeable
- Típicamente 3-4 horas, 3 veces por semana en un centro
- Acceso: fístula AV (preferida), injerto AV o catéter venoso central
- Complicaciones: hipotensión, infecciones del acceso, desequilibrio por diálisis

#### Diálisis Peritoneal (DP)
- Usa la membrana peritoneal como filtro de diálisis
- DPCA: intercambios manuales 4x/día; DPA: cicladora automática durante la noche
- Ventajas: domiciliaria, mejor preservación de función renal residual, flexibilidad
- Complicaciones: peritonitis, infecciones del catéter, esclerosis peritoneal encapsulante

#### Cuándo Iniciar la Diálisis
- Ensayo IDEAL: no hay beneficio del inicio temprano (TFG 10-14) vs tardío (TFG 5-7)
- Iniciar basándose en síntomas: uremia, sobrecarga de líquidos refractaria, hiperpotasemia, acidosis, desnutrición
- TFG típica al inicio: 5-10 mL/min

### Trasplante Renal
- Supervivencia y calidad de vida superiores comparado con diálisis
- Donante vivo preferido (mejores resultados, menor tiempo de espera)
- Trasplante preventivo (antes de diálisis) tiene los mejores resultados
- Inmunosupresión: inducción (basiliximab o timoglobulina) + mantenimiento (tacrolimus + micofenolato + prednisona)

---
## Explanation

### Evidence-Based CKD Management

#### Slowing Progression

**RAAS Inhibition:**
- ACE inhibitors or ARBs are first-line for CKD with albuminuria (A2-A3)
- Reduce intraglomerular pressure by dilating efferent arteriole
- Up to 30% initial creatinine rise is acceptable (monitor within 1-2 weeks)
- Avoid dual RAAS blockade (ONTARGET, VA NEPHRON-D trials showed increased hyperkalemia/AKI)

**SGLT2 Inhibitors:**
- Dapagliflozin (DAPA-CKD) and empagliflozin (EMPA-KIDNEY): reduce CKD progression and cardiovascular events in diabetic and non-diabetic CKD
- Mechanism: reduce tubuloglomerular feedback, decrease intraglomerular hypertension, reduce albuminuria, anti-inflammatory and anti-fibrotic effects
- Can be initiated down to GFR 20 mL/min
- Initial GFR dip (~5 mL/min) is hemodynamic and expected; long-term trajectory improves

**Non-Steroidal MRA (Finerenone):**
- FIDELIO-DKD and FIGARO-DKD trials: reduces kidney and cardiovascular outcomes in diabetic CKD
- Mechanism: blocks mineralocorticoid-mediated inflammation and fibrosis
- Risk: hyperkalemia; requires potassium monitoring

**Blood Pressure Targets:**
- KDIGO 2021: target systolic <120 mmHg when tolerated
- SPRINT trial supports intensive BP control for kidney and cardiovascular benefit

**Glycemic Control:**
- Target HbA1c ~7% in most patients; individualize based on hypoglycemia risk
- SGLT2 inhibitors preferred agent; GLP-1 receptor agonists have additive benefit
- Avoid metformin when GFR <30; dose reduce when GFR 30-45

#### Managing Complications

**Anemia:**
- Target hemoglobin 10-11.5 g/dL with ESAs
- TREAT and CHOIR trials: higher Hb targets (>13) increase stroke/cardiovascular risk
- Check iron stores first; target ferritin >100 (>200 on dialysis), TSAT >20%

**CKD-MBD:**
- Restrict dietary phosphorus; use phosphate binders with meals
- Active vitamin D analogues for secondary hyperparathyroidism
- Cinacalcet for refractory hyperparathyroidism

**Metabolic Acidosis:**
- Oral sodium bicarbonate when serum bicarbonate <22 mEq/L

**Hyperkalemia:**
- Dietary potassium restriction
- Potassium binders: patiromer, sodium zirconium cyclosilicate

### Dialysis Modalities

#### Hemodialysis (HD)
- Blood pumped through extracorporeal circuit with semipermeable membrane
- Typically 3-4 hours, 3 times per week in-center
- Access: AV fistula (preferred), AV graft, or central venous catheter

#### Peritoneal Dialysis (PD)
- Uses peritoneal membrane as dialysis filter
- CAPD: manual exchanges 4x/day; APD: automated cycler overnight
- Advantages: home-based, better residual kidney function preservation

#### When to Start Dialysis
- IDEAL trial: no benefit to early start
- Initiate based on symptoms: uremia, refractory fluid overload, hyperkalemia, acidosis

### Kidney Transplantation
- Superior survival and quality of life compared to dialysis
- Living donor preferred; pre-emptive transplant has best outcomes`,
      keyTerms: [
        { term: 'inhibidor SGLT2 / SGLT2 inhibitor', definition: 'Inhibidor del cotransportador sodio-glucosa tipo 2; reduce la progresión de la ERC en ERC diabética y no diabética. | Sodium-glucose cotransporter-2 inhibitor; reduces CKD progression in diabetic and non-diabetic CKD.' },
        { term: 'finerenona / finerenone', definition: 'Antagonista no esteroideo del receptor de mineralocorticoides para ERC diabética. | Non-steroidal mineralocorticoid receptor antagonist for diabetic CKD.' },
        { term: 'AEE / ESA', definition: 'Agente estimulante de la eritropoyesis; trata la anemia de la ERC estimulando la producción de glóbulos rojos. | Erythropoiesis-stimulating agent; treats CKD anemia by stimulating red blood cell production.' },
        { term: 'IFH-IPH / HIF-PHI', definition: 'Inhibidor de la prolil hidroxilasa del factor inducible por hipoxia; agente oral para anemia de la ERC. | Hypoxia-inducible factor prolyl hydroxylase inhibitor; oral agent for CKD anemia.' },
        { term: 'quelante de fosfato / phosphate binder', definition: 'Medicamento tomado con las comidas para reducir la absorción de fósforo. | Medication taken with meals to reduce phosphorus absorption.' },
        { term: 'calcimimético / calcimimetic', definition: 'Fármaco que activa el receptor sensible al calcio para bajar la PTH (ej. cinacalcet). | Drug that activates calcium-sensing receptor to lower PTH (e.g., cinacalcet).' },
        { term: 'hemodiálisis / hemodialysis', definition: 'Diálisis usando un circuito sanguíneo extracorpóreo y membrana semipermeable. | Dialysis using an extracorporeal blood circuit and semipermeable membrane.' },
        { term: 'diálisis peritoneal / peritoneal dialysis', definition: 'Diálisis que usa la membrana peritoneal para el intercambio de líquidos y solutos. | Dialysis using the peritoneal membrane for fluid and solute exchange.' },
        { term: 'fístula AV / AV fistula', definition: 'Conexión creada quirúrgicamente entre arteria y vena para acceso de diálisis. | Surgically created connection between artery and vein for dialysis access.' },
        { term: 'trasplante preventivo / pre-emptive transplant', definition: 'Trasplante renal realizado antes de iniciar diálisis; mejores resultados. | Kidney transplant performed before starting dialysis; best outcomes.' },
      ],
      clinicalNotes: 'DAPA-CKD mostró 39% de reducción en descenso sostenido de TFG, ERCT o muerte renal independientemente del estado de diabetes. Iniciar inhibidor SGLT2 incluso con TFG 20-25; la caída inicial de TFG es hemodinámica. Planificar la creación de fístula AV cuando la TFG se acerque a 15-20 para permitir la maduración. | DAPA-CKD showed 39% reduction in sustained GFR decline, ESKD, or renal death regardless of diabetes status. Start SGLT2i even at GFR 20-25; the initial GFR dip is hemodynamic. Plan AV fistula creation when GFR approaches 15-20 to allow maturation.',
    },
    4: {
      level: 4,
      summary: 'La fisiopatología avanzada de la ERC involucra fibrosis túbulo-intersticial, biología de toxinas urémicas, mecanismos de calcificación vascular y enfoques de precisión para EMO-ERC y riesgo cardiovascular. | Advanced CKD pathophysiology involves tubulo-interstitial fibrosis, uremic toxin biology, vascular calcification mechanisms, and precision approaches to CKD-MBD and cardiovascular risk.',
      explanation: `## Explicación

### Fisiopatología de la Progresión de la ERC

#### La Vía Común Final: Fibrosis Túbulo-Intersticial

Independientemente de la lesión inicial, la progresión de la ERC converge en la fibrosis túbulo-intersticial:

1. **Pérdida de nefronas** lleva a hiperfiltración compensatoria en las nefronas restantes
2. **Hiperfiltración** aumenta la presión capilar glomerular, causando estrés podocitario, proteinuria y glomeruloesclerosis progresiva
3. **Proteinuria** en sí misma es nefrotóxica: la reabsorción tubular de proteínas filtradas activa NF-kB, MCP-1 y complemento, impulsando la inflamación intersticial
4. **Transición epitelio-mesenquimal (TEM)**: Las células tubulares lesionadas adquieren características mesenquimales y producen matriz extracelular
5. **Transición pericito-miofibroblasto**: Los pericitos perivasculares se desprenden y se convierten en miofibroblastos productores de colágeno, la fuente dominante de fibrosis
6. **Señalización profibrótica**: Las vías TGF-beta/Smad3, Wnt/beta-catenina, PDGF y CTGF impulsan el depósito de matriz
7. **Rarefacción capilar**: La pérdida de capilares peritubulares crea hipoxia crónica, estabilizando HIF-1alfa y perpetuando la fibrosis

### Biología de las Toxinas Urémicas

La ERC lleva a la retención de solutos urémicos clasificados por tamaño y unión a proteínas:

| Categoría | Ejemplos | Efectos Patológicos |
|-----------|---------|---------------------|
| Pequeñas hidrosolubles | Urea, creatinina, ADMA | La urea carbamila proteínas; ADMA inhibe NO sintasa |
| Moléculas medias | Beta-2-microglobulina, FGF-23, PTH | Amiloidosis, calcificación vascular, enfermedad ósea |
| Unidas a proteínas | Sulfato de indoxilo, sulfato de p-cresilo, TMAO | Disfunción endotelial, estrés oxidativo, ECV, fibrosis |

- **Sulfato de indoxilo (SI)**: Derivado del triptófano dietético por bacterias intestinales; activa AhR, NF-kB y TGF-beta; promueve disfunción endotelial y fibrosis cardíaca
- **Sulfato de p-cresilo (SpC)**: Del metabolismo de tirosina/fenilalanina; activa producción de ROS, activación leucocitaria y proliferación de células de músculo liso vascular
- **TMAO**: Derivado del microbioma intestinal; promueve aterosclerosis y trombosis; elevado en ERC
- Las toxinas unidas a proteínas son pobremente eliminadas por diálisis convencional

### FGF-23 y Fisiopatología de la EMO-ERC

FGF-23 es el biomarcador más temprano en elevarse en la EMO-ERC:

1. La retención de fósforo desencadena la liberación de FGF-23 de los osteocitos
2. FGF-23 (vía co-receptor Klotho) promueve la excreción renal de fósforo y suprime la 1-alfa-hidroxilasa, reduciendo la producción de calcitriol
3. A medida que la ERC progresa, la expresión de Klotho disminuye (la deficiencia de Klotho es en sí patogénica)
4. FGF-23 se acumula a niveles muy altos; causa directamente hipertrofia ventricular izquierda (vía FGFR4, independiente de Klotho), disfunción inmune y resistencia a eritropoyetina
5. La deficiencia de calcitriol lleva a malabsorción de calcio, estimulando PTH
6. La PTH inicialmente compensa movilizando calcio óseo, pero eventualmente produce enfermedad ósea de alto recambio (osteítis fibrosa quística)

### Calcificación Vascular

- En la ERC, las células de músculo liso vascular (CMLV) experimentan diferenciación osteocondrogénica, depositando activamente hidroxiapatita en las paredes vasculares
- Impulsada por: hiperfosfatemia, alto producto calcio-fósforo, toxinas urémicas, pérdida de inhibidores de calcificación (fetuina-A, proteína Gla de matriz, pirofosfato)
- La calcificación medial (Mönckeberg) predomina en la ERC, aumentando la rigidez arterial y la presión de pulso
- Calcifilaxis (arteriolopatía calcificante urémica): complicación devastadora con calcificación arteriolar, trombosis y necrosis cutánea; tratada con tiosulfato de sodio

---
## Explanation

### Pathophysiology of CKD Progression

#### The Final Common Pathway: Tubulo-Interstitial Fibrosis

Regardless of the initiating injury, CKD progression converges on tubulo-interstitial fibrosis:

1. **Nephron loss** leads to compensatory hyperfiltration in remaining nephrons
2. **Hyperfiltration** increases glomerular capillary pressure, causing podocyte stress, proteinuria, and progressive glomerulosclerosis
3. **Proteinuria** itself is nephrotoxic: tubular reabsorption of filtered proteins activates NF-kB, MCP-1, and complement
4. **Epithelial-mesenchymal transition (EMT)**: Injured tubular cells acquire mesenchymal features and produce extracellular matrix
5. **Pericyte-myofibroblast transition**: Perivascular pericytes become collagen-producing myofibroblasts
6. **Profibrotic signaling**: TGF-beta/Smad3, Wnt/beta-catenin, PDGF, CTGF pathways drive matrix deposition
7. **Capillary rarefaction**: Loss of peritubular capillaries creates chronic hypoxia, perpetuating fibrosis

### Uremic Toxin Biology

CKD leads to retention of uremic solutes classified by size and protein binding:

| Category | Examples | Pathological Effects |
|----------|---------|---------------------|
| Small water-soluble | Urea, creatinine, ADMA | Urea carbamylates proteins; ADMA inhibits NO synthase |
| Middle molecules | Beta-2-microglobulin, FGF-23, PTH | Amyloidosis, vascular calcification, bone disease |
| Protein-bound | Indoxyl sulfate, p-cresyl sulfate, TMAO | Endothelial dysfunction, oxidative stress, CVD, fibrosis |

### FGF-23 and CKD-MBD Pathophysiology

FGF-23 is the earliest biomarker to rise in CKD-MBD. It promotes renal phosphorus excretion and suppresses calcitriol production. As CKD progresses, Klotho expression declines. FGF-23 directly causes left ventricular hypertrophy, immune dysfunction, and EPO resistance.

### Vascular Calcification

In CKD, vascular smooth muscle cells undergo osteochondrogenic differentiation, actively depositing hydroxyapatite. Calciphylaxis is a devastating complication treated with sodium thiosulfate.`,
      keyTerms: [
        { term: 'fibrosis túbulo-intersticial / tubulo-interstitial fibrosis', definition: 'Vía común final de la ERC: cicatrización en los túbulos y el espacio intersticial. | Final common pathway of CKD: scarring in tubules and interstitial space.' },
        { term: 'TEM / EMT', definition: 'Transición epitelio-mesenquimal; proceso donde las células tubulares adquieren propiedades tipo fibroblasto. | Epithelial-mesenchymal transition; process where tubular cells acquire fibroblast-like properties.' },
        { term: 'FGF-23', definition: 'Factor de crecimiento fibroblástico-23; hormona fosfatúrica de osteocitos; marcador más temprano de EMO-ERC. | Fibroblast growth factor-23; phosphaturic hormone from osteocytes; earliest CKD-MBD marker.' },
        { term: 'Klotho', definition: 'Co-receptor para FGF-23; su deficiencia en la ERC contribuye al fenotipo de envejecimiento y calcificación. | Co-receptor for FGF-23; deficiency in CKD contributes to aging phenotype and calcification.' },
        { term: 'sulfato de indoxilo / indoxyl sulfate', definition: 'Toxina urémica unida a proteínas del metabolismo del triptófano; causa daño endotelial y cardíaco. | Protein-bound uremic toxin from tryptophan metabolism; causes endothelial and cardiac damage.' },
        { term: 'sulfato de p-cresilo / p-cresyl sulfate', definition: 'Toxina urémica unida a proteínas del metabolismo de tirosina; promueve enfermedad vascular. | Protein-bound uremic toxin from tyrosine metabolism; promotes vascular disease.' },
        { term: 'TMAO', definition: 'Óxido de trimetilamina N; toxina urémica derivada del microbioma intestinal que promueve aterosclerosis. | Trimethylamine N-oxide; gut microbiome-derived uremic toxin promoting atherosclerosis.' },
        { term: 'calcifilaxis / calciphylaxis', definition: 'Arteriolopatía calcificante urémica; calcificación arteriolar con necrosis cutánea en ERC avanzada. | Calcific uremic arteriolopathy; arteriolar calcification with skin necrosis in advanced CKD.' },
        { term: 'Kt/V', definition: 'Medida de adecuación de diálisis; K=depuración, t=tiempo, V=volumen de distribución. | Measure of dialysis adequacy; K=clearance, t=time, V=volume of distribution.' },
        { term: 'transición pericito-miofibroblasto', definition: 'Mecanismo clave de fibrosis renal donde células perivasculares se convierten en miofibroblastos productores de colágeno. | Key mechanism of renal fibrosis where perivascular cells become collagen-producing myofibroblasts.' },
      ],
      clinicalNotes: 'La elevación de FGF-23 precede al aumento de PTH y fósforo en la progresión de la EMO-ERC. FGF-23 elevado predice independientemente mortalidad en pacientes con ERC y en diálisis. Las toxinas urémicas unidas a proteínas son pobremente eliminadas por diálisis convencional. La calcifilaxis tiene >50% de mortalidad al año; tiosulfato de sodio, cuidado de heridas y evitar warfarina son pilares del tratamiento. | FGF-23 elevation precedes PTH rise and phosphorus elevation in CKD-MBD progression. High FGF-23 independently predicts mortality in CKD and dialysis patients. Protein-bound uremic toxins are poorly removed by conventional dialysis. Calciphylaxis has >50% 1-year mortality; sodium thiosulfate, wound care, and warfarin avoidance are treatment mainstays.',
    },
    5: {
      level: 5,
      summary: 'Temas expertos de ERC abarcan nefrología de precisión con pruebas genéticas, nuevas dianas terapéuticas, modulación del eje intestino-riñón, avances en xenotrasplante y equidad en salud en enfermedad renal. | Expert CKD topics encompass precision nephrology with genetic testing, novel therapeutic targets, gut-kidney axis modulation, xenotransplantation advances, and health equity in kidney disease.',
      explanation: `## Explicación

### Nefrología de Precisión y ERC Genética

#### Enfermedad Renal Asociada a APOL1
- Las variantes de riesgo APOL1 G1 y G2 (en individuos de ascendencia africana) confieren 7-10x mayor riesgo de GSFS, ERC atribuida a hipertensión y nefropatía asociada a VIH
- Los alelos de riesgo surgieron por selección positiva contra Trypanosoma brucei (enfermedad del sueño)
- Las variantes APOL1 causan lesión podocitaria a través de formación de canales catiónicos, disfunción mitocondrial, activación del inflamasoma y deterioro de la autofagia
- Inaxaplin (VX-147): Primer inhibidor de la función de poro APOL1; ensayos fase 2/3 mostraron 47.6% de reducción en proteinuria en GSFS mediada por APOL1 (ensayo AMPLITUDE)
- La genotipificación de APOL1 se usa cada vez más en la evaluación de donantes vivos

#### Diagnóstico de Enfermedad Renal Genética
- La secuenciación del exoma/genoma completo identifica causa monogénica en 10-20% de la ERC del adulto y hasta 30% de la ERC pediátrica
- Diagnósticos monogénicos comunes: COL4A3/4/5 (espectro Alport), PKD1/2 (ERPAD), UMOD (enfermedad renal por uromodulina), HNF1B, PAX2 (CAKUT)
- Impacto clínico: reclasifica el diagnóstico en ~25% de los casos, altera el manejo en ~20%, y permite tamizaje familiar y asesoramiento genético

### Nuevas Dianas Terapéuticas

#### Antagonistas del Receptor de Endotelina
- Atrasentan: Antagonista selectivo del receptor ETA; ensayo ALIGN mostró 35.4% de reducción en progresión de ERC en nefropatía por IgA
- Mecanismo: Reduce inflamación glomerular, fibrosis y lesión podocitaria
- Riesgo de retención de líquidos e insuficiencia cardíaca manejado por co-administración de inhibidor SGLT2

#### Agonistas del Receptor GLP-1 en ERC
- Ensayo FLOW (semaglutida): 24% de reducción en el resultado compuesto renal en diabetes tipo 2 con ERC; detenido tempranamente por eficacia
- Mecanismos más allá de la glucosa: antiinflamatorio, antifibrótico, reducción de peso, efectos natriuréticos
- Emergiendo como adición importante a los "cuatro pilares" de protección renal (bloqueo SRAA + iSGLT2 + finerenona + AR GLP-1)

#### Terapias Dirigidas al Complemento
- Iptacopan (inhibidor del factor B): Para glomerulopatía C3 y nefropatía por IgA
- Pegcetacoplan (inhibidor de C3): Ensayos en glomerulopatía C3
- Avacopan (inhibidor del receptor C5a): Aprobado para vasculitis ANCA; reduce exposición a glucocorticoides

#### Agentes Antifibróticos
- Pirfenidona y nintedanib (aprobados para fibrosis pulmonar) siendo evaluados en ERC
- Baricitinib (inhibidor JAK1/2): Efectos antiinflamatorios estudiados en nefritis lúpica y nefropatía diabética

### El Eje Intestino-Riñón
- La ERC altera la composición del microbioma intestinal (disbiosis): aumento de Enterobacteriaceae, disminución de Lactobacillaceae y Bifidobacteriaceae
- La uremia deteriora la barrera intestinal ("intestino permeable"), aumentando la translocación de endotoxina bacteriana y precursores de toxinas urémicas
- Intervenciones en investigación:
  - AST-120 (adsorbente oral de carbón): reduce sulfato de indoxilo
  - Probióticos/simbióticos dirigidos: modulan la flora intestinal
  - Fibra dietética: aumenta la producción de ácidos grasos de cadena corta
  - Inhibidores de triptófano hidroxilasa: reducen producción de toxinas derivadas de indol

### Avances en Trasplante

#### Xenotrasplante
- Riñones de cerdo con edición genética (knockout de 10 genes incluyendo alfa-Gal, CMAH, B4GALNT2 + transgenes humanos)
- Primeros xenotrasplantes clínicos cerdo-humano de riñón (2024-2025): demostraron hasta 2 meses de función
- Desafíos clave: rechazo tardío del xenoinjerto, riesgo de PERV, inmunosupresión óptima

#### Inducción de Tolerancia
- Protocolos de quimerismo mixto (trasplante combinado riñón-médula ósea): programas Stanford/MGH logrando retiro de inmunosupresión en pacientes seleccionados
- Terapia con células T reguladoras (Treg): Tregs expandidas ex-vivo para promover tolerancia al aloinjerto

### Equidad en Salud en Enfermedad Renal
- Ecuación CKD-EPI 2021: Eliminó la variable racial de la estimación de TFG
- La estimación de TFG basada en cistatina C reduce el sesgo racial
- Disparidades en acceso a trasplante: pacientes de raza negra esperan más tiempo, tienen menores tasas de trasplante preventivo y donante vivo
- Iniciativas políticas: eliminar el tiempo en diálisis como criterio de listado, incentivar la donación en vida

### Inteligencia Artificial en ERC
- KidneyIntelX: Panel de biomarcadores derivado de IA (TNFR1, TNFR2, KIM-1) que predice la progresión de la ERC en nefropatía diabética; designación de dispositivo innovador de la FDA
- Modelos de aprendizaje automático para predecir el momento de ERCT y optimizar prescripciones de diálisis
- Patología digital con morfometría glomerular asistida por IA y cuantificación de fibrosis intersticial

---
## Explanation

### Precision Nephrology and Genetic CKD

#### APOL1-Associated Kidney Disease
- APOL1 G1 and G2 risk variants confer 7-10x increased risk of FSGS, hypertension-attributed CKD, and HIV-associated nephropathy
- Inaxaplin (VX-147): First-in-class small molecule inhibitor of APOL1 pore function; AMPLITUDE trial showed 47.6% reduction in proteinuria

#### Genetic Kidney Disease Diagnosis
- Whole exome/genome sequencing identifies monogenic cause in 10-20% of adult CKD
- Common diagnoses: COL4A3/4/5 (Alport), PKD1/2 (ADPKD), UMOD, HNF1B, PAX2

### Novel Therapeutic Targets
- Atrasentan (ETA antagonist): ALIGN trial showed benefit in IgA nephropathy
- Semaglutide (GLP-1 RA): FLOW trial showed 24% reduction in kidney composite endpoint
- Complement-targeted therapies: iptacopan, pegcetacoplan, avacopan
- "Four pillars" of kidney protection: RAAS blockade + SGLT2i + finerenone + GLP-1 RA

### The Gut-Kidney Axis
- CKD alters gut microbiome causing dysbiosis and increased uremic toxin production
- Interventions: AST-120, targeted probiotics, dietary fiber

### Transplant Advances
- Xenotransplantation with gene-edited pig kidneys advancing rapidly
- Tolerance induction via mixed chimerism and Treg therapy

### Health Equity
- CKD-EPI 2021 race-free equation should be universally adopted
- Disparities in transplant access being addressed through policy initiatives

### AI in CKD
- KidneyIntelX for DKD progression prediction; digital pathology with AI-assisted morphometry`,
      keyTerms: [
        { term: 'APOL1', definition: 'Apolipoproteína L1; variantes de riesgo en poblaciones de ascendencia africana causan podocitopatía y ERC. | Apolipoprotein L1; risk variants in African-descent populations cause podocytopathy and CKD.' },
        { term: 'inaxaplin', definition: 'Primer inhibidor de molécula pequeña de la función de poro APOL1 para GSFS mediada por APOL1. | First small molecule inhibitor of APOL1 pore function for APOL1-mediated FSGS.' },
        { term: 'atrasentan', definition: 'Antagonista selectivo del receptor de endotelina A con beneficio en nefropatía IgA (ensayo ALIGN). | Selective endothelin A receptor antagonist showing benefit in IgA nephropathy (ALIGN trial).' },
        { term: 'xenotrasplante / xenotransplantation', definition: 'Trasplante de órganos entre especies, ej. riñones de cerdo con edición genética a humanos. | Transplantation of organs across species, e.g., gene-edited pig kidneys to humans.' },
        { term: 'eje intestino-riñón / gut-kidney axis', definition: 'Relación bidireccional entre el microbioma intestinal y la salud renal en la ERC. | Bidirectional relationship between gut microbiome and kidney health in CKD.' },
        { term: 'cuatro pilares / four pillars', definition: 'Bloqueo SRAA + iSGLT2 + finerenona + AR GLP-1 como estrategia integral de protección renal. | RAAS blockade + SGLT2i + finerenone + GLP-1 RA as comprehensive kidney protection strategy.' },
        { term: 'CKD-EPI 2021', definition: 'Ecuación de estimación de TFG sin variable racial que aborda el sesgo racial en la evaluación de función renal. | Race-free GFR estimation equation addressing racial bias in kidney function assessment.' },
        { term: 'KidneyIntelX', definition: 'Panel de biomarcadores pronósticos derivado de IA para la progresión de nefropatía diabética. | AI-derived prognostic biomarker panel for diabetic kidney disease progression.' },
        { term: 'quimerismo mixto / mixed chimerism', definition: 'Estrategia de inducción de tolerancia usando trasplante combinado riñón-médula ósea. | Tolerance induction strategy using combined kidney-bone marrow transplant.' },
        { term: 'ensayo FLOW / FLOW trial', definition: 'Ensayo histórico que demostró que semaglutida reduce la progresión de ERC en nefropatía diabética. | Landmark trial demonstrating semaglutide reduces CKD progression in diabetic kidney disease.' },
      ],
      clinicalNotes: 'Los "cuatro pilares" de protección renal (bloqueo SRAA + iSGLT2 + finerenona + AR GLP-1) representan un cambio de paradigma en el manejo de la ERC. Las pruebas de APOL1 deben ofrecerse en la evaluación de ERC de etiología desconocida en pacientes de ascendencia africana. La ecuación CKD-EPI 2021 sin variable racial debe adoptarse universalmente. El xenotrasplante avanza rápidamente pero sigue siendo experimental. Las pruebas genéticas reclasifican aproximadamente el 25% de los diagnósticos de ERC. | The "four pillars" of kidney protection represent a paradigm shift in CKD management. APOL1 testing should be offered in CKD of unknown etiology in patients of African descent. CKD-EPI 2021 race-free equation should be universally adopted. Xenotransplantation is rapidly advancing but remains experimental. Genetic testing reclassifies approximately 25% of CKD diagnoses.',
    },
  },
  media: [],
  citations: [
    {
      id: 'ref-1',
      type: 'textbook',
      title: 'KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of CKD',
      authors: ['Kidney Disease: Improving Global Outcomes (KDIGO) CKD Work Group'],
      source: 'Kidney International',
      url: 'https://kdigo.org/guidelines/ckd-evaluation-and-management/',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-2',
      type: 'article',
      title: 'Dapagliflozin in Patients with Chronic Kidney Disease (DAPA-CKD)',
      authors: ['Heerspink HJL', 'Stefansson BV', 'Correa-Rotter R', 'et al.'],
      source: 'New England Journal of Medicine 2020; 383:1436-1446',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-3',
      type: 'article',
      title: 'Semaglutide and Kidney Outcomes in Type 2 Diabetes and CKD (FLOW Trial)',
      authors: ['Perkovic V', 'Tuttle KR', 'Rossing P', 'et al.'],
      source: 'New England Journal of Medicine 2024',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-4',
      type: 'article',
      title: 'Finerenone in Patients with CKD and Type 2 Diabetes (FIDELIO-DKD)',
      authors: ['Bakris GL', 'Agarwal R', 'Anker SD', 'et al.'],
      source: 'New England Journal of Medicine 2020; 383:2219-2229',
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
    { targetId: 'condition-lesion-renal-aguda-aki', targetType: 'condition', relationship: 'related', label: 'LRA como factor de riesgo para ERC / AKI as risk factor for CKD' },
    { targetId: 'condition-dialisis-dialysis', targetType: 'condition', relationship: 'related', label: 'Diálisis para ERC etapa 5 / Dialysis for stage 5 CKD' },
    { targetId: 'condition-glomerulonefritis-glomerulonephritis', targetType: 'condition', relationship: 'related', label: 'Glomerulonefritis como causa de ERC / Glomerulonephritis as CKD cause' },
  ],
  tags: {
    systems: ['renal'],
    topics: ['nephrology'],
    keywords: [
      'ERC', 'CKD', 'enfermedad renal crónica', 'chronic kidney disease', 'TFG', 'GFR',
      'albuminuria', 'diálisis', 'dialysis', 'hemodiálisis', 'hemodialysis',
      'diálisis peritoneal', 'peritoneal dialysis', 'trasplante renal', 'kidney transplant',
      'inhibidor SGLT2', 'SGLT2 inhibitor', 'finerenona', 'finerenone', 'anemia',
      'EMO-ERC', 'CKD-MBD', 'hiperpotasemia', 'hyperkalemia', 'acidosis metabólica',
      'calcificación vascular', 'APOL1', 'toxinas urémicas', 'xenotrasplante',
    ],
    clinicalRelevance: 'high',
  },
  createdAt: '2026-02-05',
  updatedAt: '2026-02-05',
  version: 1,
  status: 'published',
  contributors: ['SOMA AI Content Team'],
};
