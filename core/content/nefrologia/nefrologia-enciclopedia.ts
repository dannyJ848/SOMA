// =============================================================================
// SOMA Nefrologia Enciclopedia — Spanish-First Bilingual
// Detailed Nephrology Patient Education Content
// =============================================================================
// ARCHITECTURE: JSON.parse() wrapper prevents TS2590 "expression too complex"
// =============================================================================

export interface NefrologiaEntry {
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

export const NEFROLOGIA_ENTRIES: NefrologiaEntry[] = JSON.parse(`[
  {
    "id": "enfermedad-renal-cronica",
    "nombreEs": "Enfermedad Renal Cronica",
    "nombreEn": "Chronic Kidney Disease",
    "descripcionEs": "La enfermedad renal cronica (ERC) es una condicion progresiva en la que los rinones pierden gradualmente su capacidad de filtrar desechos y exceso de liquidos de la sangre. Se define como una tasa de filtracion glomerular (TFG) menor a 60 mL/min/1.73m2 o la presencia de marcadores de dano renal durante al menos tres meses. La ERC se clasifica en cinco estadios segun la TFG, siendo el estadio 5 la insuficiencia renal terminal que requiere dialisis o trasplante. Es una enfermedad silenciosa que frecuentemente no presenta sintomas hasta estadios avanzados, lo que subraya la importancia del tamizaje en poblaciones de riesgo como diabeticos e hipertensos.",
    "descripcionEn": "Chronic kidney disease (CKD) is a progressive condition in which the kidneys gradually lose their ability to filter waste and excess fluids from the blood. It is defined as a glomerular filtration rate (GFR) less than 60 mL/min/1.73m2 or the presence of kidney damage markers for at least three months. CKD is classified into five stages based on GFR, with stage 5 being end-stage renal disease requiring dialysis or transplant. It is a silent disease that frequently presents no symptoms until advanced stages, underscoring the importance of screening in at-risk populations such as diabetics and hypertensives.",
    "categoriaEs": "cronica",
    "categoriaEn": "chronic",
    "sintomasEs": [
      "Fatiga y debilidad persistente por anemia y acumulacion de toxinas",
      "Hinchazon de piernas, tobillos y pies (edema periferico)",
      "Nauseas, vomitos y perdida del apetito",
      "Cambios en la frecuencia urinaria (aumento o disminucion)",
      "Orina espumosa por presencia de proteinas (proteinuria)",
      "Calambres musculares especialmente nocturnos",
      "Piel seca y con prurito intenso (prurito uremico)",
      "Dificultad para concentrarse y confusion mental",
      "Presion arterial elevada dificil de controlar",
      "Sabor metalico en la boca y aliento uremico"
    ],
    "sintomasEn": [
      "Persistent fatigue and weakness from anemia and toxin buildup",
      "Swelling of legs, ankles, and feet (peripheral edema)",
      "Nausea, vomiting, and loss of appetite",
      "Changes in urinary frequency (increase or decrease)",
      "Foamy urine from protein presence (proteinuria)",
      "Muscle cramps especially at night",
      "Dry skin with intense itching (uremic pruritus)",
      "Difficulty concentrating and mental confusion",
      "Hard-to-control elevated blood pressure",
      "Metallic taste in mouth and uremic breath"
    ],
    "causasEs": "Las causas principales son la diabetes mellitus (responsable del 40-50% de los casos) y la hipertension arterial (25-30%). Otras causas incluyen glomerulonefritis cronica, enfermedad poliquistica renal, nefropatia por reflujo, obstruccion prolongada del tracto urinario, lupus eritematoso sistemico, uso cronico de antiinflamatorios no esteroideos (AINEs) y nefrotoxicos, y causas congenitas. La obesidad, el tabaquismo, la edad avanzada y los antecedentes familiares de enfermedad renal son factores de riesgo adicionales significativos.",
    "causasEn": "The main causes are diabetes mellitus (responsible for 40-50% of cases) and hypertension (25-30%). Other causes include chronic glomerulonephritis, polycystic kidney disease, reflux nephropathy, prolonged urinary tract obstruction, systemic lupus erythematosus, chronic use of nonsteroidal anti-inflammatory drugs (NSAIDs) and nephrotoxins, and congenital causes. Obesity, smoking, advanced age, and family history of kidney disease are additional significant risk factors.",
    "diagnosticoEs": "El diagnostico se basa en la determinacion de la tasa de filtracion glomerular estimada (TFGe) mediante creatinina serica y la ecuacion CKD-EPI. Se complementa con analisis de orina para detectar proteinuria (relacion albumina/creatinina en orina > 30 mg/g). Se realizan ecografia renal para evaluar tamano y estructura de los rinones, panel metabolico completo incluyendo BUN, creatinina, electrolitos, calcio, fosforo y acido urico. En casos seleccionados se requiere biopsia renal para determinar la etiologia especifica. El estadiaje combina TFGe y grado de albuminuria para estratificar el riesgo de progresion.",
    "diagnosticoEn": "Diagnosis is based on determining the estimated glomerular filtration rate (eGFR) using serum creatinine and the CKD-EPI equation. It is complemented with urinalysis to detect proteinuria (urine albumin-to-creatinine ratio > 30 mg/g). Renal ultrasound is performed to evaluate kidney size and structure, along with a complete metabolic panel including BUN, creatinine, electrolytes, calcium, phosphorus, and uric acid. In selected cases, renal biopsy is required to determine specific etiology. Staging combines eGFR and degree of albuminuria to stratify progression risk.",
    "tratamientoEs": "El tratamiento se centra en frenar la progresion y manejar complicaciones. Control estricto de presion arterial con meta < 130/80 mmHg usando IECAs o ARA II como primera linea por su efecto nefroprotector. Control glucemico optimo en diabeticos (HbA1c < 7%). Los inhibidores de SGLT2 (dapagliflozina, empagliflozina) han demostrado beneficio renal independiente de la diabetes. Restriccion de sodio (< 2g/dia) y proteinas (0.8 g/kg/dia en estadios 3-5). Tratamiento de anemia con eritropoyetina y hierro. Manejo de alteraciones del metabolismo mineral-oseo con quelantes de fosforo y vitamina D. En estadio 5, preparacion para terapia de reemplazo renal: hemodialisis, dialisis peritoneal o trasplante renal. Finerenona (antagonista no esteroideo del receptor mineralocorticoide) es una nueva opcion en nefropatia diabetica.",
    "tratamientoEn": "Treatment focuses on slowing progression and managing complications. Strict blood pressure control with a target < 130/80 mmHg using ACE inhibitors or ARBs as first line for their nephroprotective effect. Optimal glycemic control in diabetics (HbA1c < 7%). SGLT2 inhibitors (dapagliflozin, empagliflozin) have shown renal benefit independent of diabetes. Sodium restriction (< 2g/day) and protein restriction (0.8 g/kg/day in stages 3-5). Anemia treatment with erythropoietin and iron. Management of mineral-bone metabolism disorders with phosphate binders and vitamin D. In stage 5, preparation for renal replacement therapy: hemodialysis, peritoneal dialysis, or kidney transplant. Finerenone (nonsteroidal mineralocorticoid receptor antagonist) is a new option in diabetic nephropathy.",
    "prevencionEs": "La prevencion primaria incluye control adecuado de diabetes e hipertension, que son las causas principales. Mantener un peso saludable, ejercicio regular (150 minutos semanales de actividad moderada), dieta baja en sodio y rica en frutas y verduras. Evitar el uso cronico de AINEs y otros nefrotoxicos. No fumar, ya que el tabaquismo acelera la progresion renal. Hidratacion adecuada pero sin exceso. Tamizaje anual con creatinina serica y analisis de orina en personas con factores de riesgo. Deteccion y tratamiento temprano de infecciones urinarias y obstrucciones del tracto urinario.",
    "prevencionEn": "Primary prevention includes adequate control of diabetes and hypertension, which are the main causes. Maintaining a healthy weight, regular exercise (150 minutes per week of moderate activity), low-sodium diet rich in fruits and vegetables. Avoiding chronic use of NSAIDs and other nephrotoxins. Not smoking, as tobacco accelerates renal progression. Adequate but not excessive hydration. Annual screening with serum creatinine and urinalysis in people with risk factors. Early detection and treatment of urinary tract infections and urinary tract obstructions.",
    "complicacionesEs": [
      "Anemia por deficit de eritropoyetina",
      "Hipertension arterial resistente al tratamiento",
      "Enfermedad cardiovascular acelerada (principal causa de muerte en ERC)",
      "Alteraciones del metabolismo mineral-oseo (osteodistrofia renal)",
      "Hiperpotasemia con riesgo de arritmias cardiacas",
      "Acidosis metabolica",
      "Desnutricion y desgaste proteico-energetico",
      "Neuropatia uremica periferica",
      "Insuficiencia renal terminal requiriendo dialisis o trasplante",
      "Mayor susceptibilidad a infecciones"
    ],
    "complicacionesEn": [
      "Anemia from erythropoietin deficiency",
      "Treatment-resistant hypertension",
      "Accelerated cardiovascular disease (leading cause of death in CKD)",
      "Mineral-bone metabolism disorders (renal osteodystrophy)",
      "Hyperkalemia with risk of cardiac arrhythmias",
      "Metabolic acidosis",
      "Malnutrition and protein-energy wasting",
      "Uremic peripheral neuropathy",
      "End-stage renal disease requiring dialysis or transplant",
      "Increased susceptibility to infections"
    ],
    "cuandoConsultarEs": "Consulte inmediatamente si presenta hinchazon subita y severa de piernas o cara, dificultad para respirar, orina con sangre o muy oscura, dolor intenso en la espalda baja o flancos, confusion mental, nauseas o vomitos persistentes, o si no puede orinar. Si tiene diabetes o hipertension, realice controles renales anuales incluso sin sintomas. Busque atencion urgente si presenta palpitaciones o debilidad muscular severa, ya que pueden indicar hiperpotasemia peligrosa.",
    "cuandoConsultarEn": "Consult immediately if you experience sudden and severe swelling of legs or face, difficulty breathing, blood in urine or very dark urine, intense pain in the lower back or flanks, mental confusion, persistent nausea or vomiting, or inability to urinate. If you have diabetes or hypertension, get annual kidney checkups even without symptoms. Seek urgent care if you experience palpitations or severe muscle weakness, as they may indicate dangerous hyperkalemia."
  },
  {
    "id": "sindrome-nefrotico",
    "nombreEs": "Sindrome Nefrotico",
    "nombreEn": "Nephrotic Syndrome",
    "descripcionEs": "El sindrome nefrotico es un trastorno glomerular caracterizado por proteinuria masiva (> 3.5 g/dia en adultos), hipoalbuminemia (< 3 g/dL), edema generalizado e hiperlipidemia. Resulta de un dano en la barrera de filtracion glomerular que permite la fuga excesiva de proteinas hacia la orina. En ninos, la causa mas comun es la enfermedad de cambios minimos, mientras que en adultos predominan la nefropatia membranosa, la glomeruloesclerosis focal y segmentaria (GEFS) y la nefropatia diabetica. El sindrome nefrotico aumenta significativamente el riesgo de trombosis venosa, infecciones y enfermedad cardiovascular.",
    "descripcionEn": "Nephrotic syndrome is a glomerular disorder characterized by massive proteinuria (> 3.5 g/day in adults), hypoalbuminemia (< 3 g/dL), generalized edema, and hyperlipidemia. It results from damage to the glomerular filtration barrier that allows excessive protein leakage into the urine. In children, the most common cause is minimal change disease, while in adults, membranous nephropathy, focal segmental glomerulosclerosis (FSGS), and diabetic nephropathy predominate. Nephrotic syndrome significantly increases the risk of venous thrombosis, infections, and cardiovascular disease.",
    "categoriaEs": "glomerular",
    "categoriaEn": "glomerular",
    "sintomasEs": [
      "Edema generalizado especialmente periorbitario (alrededor de los ojos) al despertar",
      "Hinchazon severa de piernas, tobillos y pies que deja marca al presionar (edema con fovea)",
      "Orina espumosa debido a proteinuria abundante",
      "Aumento de peso rapido por retencion de liquidos",
      "Fatiga y malestar general",
      "Perdida del apetito y nauseas",
      "Ascitis (acumulacion de liquido en el abdomen)",
      "Derrame pleural (liquido alrededor de los pulmones)",
      "Piel palida y estirada por el edema",
      "En ninos: irritabilidad y dolor abdominal"
    ],
    "sintomasEn": [
      "Generalized edema especially periorbital (around the eyes) upon waking",
      "Severe swelling of legs, ankles, and feet that leaves a mark when pressed (pitting edema)",
      "Foamy urine due to abundant proteinuria",
      "Rapid weight gain from fluid retention",
      "Fatigue and general malaise",
      "Loss of appetite and nausea",
      "Ascites (fluid accumulation in the abdomen)",
      "Pleural effusion (fluid around the lungs)",
      "Pale and stretched skin from edema",
      "In children: irritability and abdominal pain"
    ],
    "causasEs": "Las causas se dividen en primarias (originadas en el rinon) y secundarias. Primarias: enfermedad de cambios minimos (causa mas comun en ninos), nefropatia membranosa (causa primaria mas comun en adultos), glomeruloesclerosis focal y segmentaria (GEFS), y nefropatia por IgA. Secundarias: diabetes mellitus (causa secundaria mas frecuente), lupus eritematoso sistemico, amiloidosis, infecciones (VIH, hepatitis B y C, malaria), farmacos (AINEs, penicilamina, sales de oro), neoplasias (linfoma, carcinomas) y preeclampsia. En muchos casos adultos se requiere biopsia renal para determinar la causa exacta.",
    "causasEn": "Causes are divided into primary (originating in the kidney) and secondary. Primary: minimal change disease (most common cause in children), membranous nephropathy (most common primary cause in adults), focal segmental glomerulosclerosis (FSGS), and IgA nephropathy. Secondary: diabetes mellitus (most common secondary cause), systemic lupus erythematosus, amyloidosis, infections (HIV, hepatitis B and C, malaria), drugs (NSAIDs, penicillamine, gold salts), neoplasms (lymphoma, carcinomas), and preeclampsia. In many adult cases, renal biopsy is required to determine the exact cause.",
    "diagnosticoEs": "El diagnostico se confirma con proteinuria de 24 horas > 3.5 g/dia o relacion proteina/creatinina en orina > 3.5 g/g. Albumina serica < 3 g/dL. Perfil lipidico mostrando hiperlipidemia marcada (colesterol total frecuentemente > 300 mg/dL). Analisis de orina con lipiduria (cuerpos ovales grasos, cilindros grasos). Funcion renal con creatinina serica y TFGe. Panel inmunologico: complemento C3/C4, ANA, anti-dsDNA, ANCA segun sospecha clinica. Serologias para VIH, hepatitis B y C. Ecografia renal. Biopsia renal percutanea guiada por ecografia es esencial en adultos para guiar el tratamiento especifico segun la histopatologia.",
    "diagnosticoEn": "Diagnosis is confirmed with 24-hour proteinuria > 3.5 g/day or urine protein-to-creatinine ratio > 3.5 g/g. Serum albumin < 3 g/dL. Lipid profile showing marked hyperlipidemia (total cholesterol frequently > 300 mg/dL). Urinalysis with lipiduria (oval fat bodies, fatty casts). Kidney function with serum creatinine and eGFR. Immunologic panel: complement C3/C4, ANA, anti-dsDNA, ANCA based on clinical suspicion. Serologies for HIV, hepatitis B and C. Renal ultrasound. Percutaneous ultrasound-guided renal biopsy is essential in adults to guide specific treatment based on histopathology.",
    "tratamientoEs": "El tratamiento depende de la causa subyacente. Medidas generales: restriccion de sodio (< 2 g/dia), diureticos de asa (furosemida) para el edema, IECAs o ARA II para reducir proteinuria, estatinas para hiperlipidemia, y anticoagulacion profilactica si albumina < 2 g/dL por alto riesgo de trombosis. Para enfermedad de cambios minimos: prednisona 1 mg/kg/dia por 8-16 semanas con respuesta excelente (> 90% remision). Para nefropatia membranosa: rituximab como primera linea, o ciclofosfamida con corticoides (esquema de Ponticelli). Para GEFS: corticoides como primera linea; tacrolimus o ciclosporina en resistentes a esteroides. Se debe tratar la causa secundaria cuando se identifique (control diabetico, tratamiento de lupus, etc.).",
    "tratamientoEn": "Treatment depends on the underlying cause. General measures: sodium restriction (< 2 g/day), loop diuretics (furosemide) for edema, ACE inhibitors or ARBs to reduce proteinuria, statins for hyperlipidemia, and prophylactic anticoagulation if albumin < 2 g/dL due to high thrombosis risk. For minimal change disease: prednisone 1 mg/kg/day for 8-16 weeks with excellent response (> 90% remission). For membranous nephropathy: rituximab as first line, or cyclophosphamide with corticosteroids (Ponticelli regimen). For FSGS: corticosteroids as first line; tacrolimus or cyclosporine in steroid-resistant cases. The secondary cause should be treated when identified (diabetic control, lupus treatment, etc.).",
    "prevencionEs": "No existe una prevencion primaria especifica para las causas glomerulares primarias del sindrome nefrotico. La prevencion secundaria se centra en el control adecuado de enfermedades que pueden causarlo: manejo optimo de la diabetes, tratamiento del lupus, evitar nefrotoxicos. Es importante la vacunacion contra neumococo e influenza dado el estado de inmunosupresion. Evitar AINEs que pueden empeorar la proteinuria. Seguimiento regular con analisis de orina y funcion renal en pacientes con enfermedades sistemicas. Mantener hidratacion adecuada y actividad fisica para reducir riesgo de trombosis.",
    "prevencionEn": "There is no specific primary prevention for primary glomerular causes of nephrotic syndrome. Secondary prevention focuses on adequate control of diseases that can cause it: optimal diabetes management, lupus treatment, avoiding nephrotoxins. Vaccination against pneumococcus and influenza is important given the immunosuppressed state. Avoid NSAIDs that can worsen proteinuria. Regular follow-up with urinalysis and kidney function in patients with systemic diseases. Maintain adequate hydration and physical activity to reduce thrombosis risk.",
    "complicacionesEs": [
      "Trombosis venosa profunda y tromboembolismo pulmonar (riesgo 5-8 veces mayor)",
      "Trombosis de la vena renal (especialmente en nefropatia membranosa)",
      "Infecciones graves por perdida urinaria de inmunoglobulinas (peritonitis espontanea, celulitis, sepsis)",
      "Insuficiencia renal aguda (necrosis tubular o trombosis de vena renal)",
      "Enfermedad cardiovascular acelerada por hiperlipidemia cronica",
      "Desnutricion proteica por perdida urinaria masiva de proteinas",
      "Hipotiroidismo por perdida de proteinas transportadoras de tiroxina",
      "Anemia por perdida de transferrina y eritropoyetina",
      "Progresion a enfermedad renal cronica terminal"
    ],
    "complicacionesEn": [
      "Deep vein thrombosis and pulmonary embolism (5-8 times greater risk)",
      "Renal vein thrombosis (especially in membranous nephropathy)",
      "Serious infections from urinary loss of immunoglobulins (spontaneous peritonitis, cellulitis, sepsis)",
      "Acute kidney injury (tubular necrosis or renal vein thrombosis)",
      "Accelerated cardiovascular disease from chronic hyperlipidemia",
      "Protein malnutrition from massive urinary protein loss",
      "Hypothyroidism from loss of thyroxine-binding proteins",
      "Anemia from loss of transferrin and erythropoietin",
      "Progression to end-stage kidney disease"
    ],
    "cuandoConsultarEs": "Consulte de inmediato si presenta hinchazon rapida y severa de piernas, cara o abdomen, dificultad para respirar (puede indicar derrame pleural o tromboembolismo pulmonar), dolor e hinchazon subita de una pierna (posible trombosis venosa profunda), fiebre con dolor abdominal (posible peritonitis), orina muy espumosa o disminucion marcada de la cantidad de orina. Los ninos con edema facial al despertar que no mejora durante el dia deben ser evaluados urgentemente. Cualquier recaida en pacientes previamente tratados requiere atencion medica pronta.",
    "cuandoConsultarEn": "Consult immediately if you experience rapid and severe swelling of legs, face, or abdomen, difficulty breathing (may indicate pleural effusion or pulmonary embolism), sudden pain and swelling of one leg (possible deep vein thrombosis), fever with abdominal pain (possible peritonitis), very foamy urine or marked decrease in urine output. Children with facial edema upon waking that does not improve during the day should be urgently evaluated. Any relapse in previously treated patients requires prompt medical attention."
  },
  {
    "id": "insuficiencia-renal-aguda",
    "nombreEs": "Insuficiencia Renal Aguda (Lesion Renal Aguda)",
    "nombreEn": "Acute Kidney Injury",
    "descripcionEs": "La insuficiencia renal aguda (IRA) o lesion renal aguda (LRA) es un deterioro rapido de la funcion renal que ocurre en horas a dias, manifestado por aumento de creatinina serica y/o disminucion del gasto urinario. Se clasifica segun los criterios KDIGO en tres estadios de gravedad. Puede ser prerrenal (60-70% de casos, por hipoperfusion), intrinseca (25-30%, dano directo al parenquima renal) o postrenal (5-10%, obstruccion). Es una condicion frecuente en pacientes hospitalizados, afectando al 10-15% de los ingresos hospitalarios y hasta el 50% de pacientes en unidades de cuidados intensivos. La deteccion y tratamiento tempranos son criticos para la recuperacion.",
    "descripcionEn": "Acute kidney injury (AKI) is a rapid deterioration of kidney function occurring over hours to days, manifested by increased serum creatinine and/or decreased urine output. It is classified according to KDIGO criteria into three severity stages. It can be prerenal (60-70% of cases, from hypoperfusion), intrinsic (25-30%, direct parenchymal damage), or postrenal (5-10%, obstruction). It is a common condition in hospitalized patients, affecting 10-15% of hospital admissions and up to 50% of intensive care unit patients. Early detection and treatment are critical for recovery.",
    "categoriaEs": "aguda",
    "categoriaEn": "acute",
    "sintomasEs": [
      "Disminucion marcada de la produccion de orina (oliguria < 400 mL/dia) o ausencia total (anuria)",
      "Hinchazon de piernas, tobillos y alrededor de los ojos",
      "Fatiga severa y somnolencia",
      "Nauseas, vomitos y perdida del apetito",
      "Confusion mental y desorientacion",
      "Dificultad para respirar por acumulacion de liquidos en pulmones",
      "Dolor en la parte baja de la espalda o flancos",
      "Sabor metalico y aliento con olor a amoniaco",
      "Calambres musculares y debilidad",
      "En casos severos: convulsiones o coma"
    ],
    "sintomasEn": [
      "Marked decrease in urine production (oliguria < 400 mL/day) or complete absence (anuria)",
      "Swelling of legs, ankles, and around the eyes",
      "Severe fatigue and drowsiness",
      "Nausea, vomiting, and loss of appetite",
      "Mental confusion and disorientation",
      "Difficulty breathing from fluid accumulation in lungs",
      "Pain in the lower back or flanks",
      "Metallic taste and ammonia-smelling breath",
      "Muscle cramps and weakness",
      "In severe cases: seizures or coma"
    ],
    "causasEs": "Prerrenal: deshidratacion severa, hemorragia, sepsis, insuficiencia cardiaca descompensada, uso de IECAs/ARA II con diureticos en pacientes vulnerables, cirugia mayor con hipotension. Intrinseca: necrosis tubular aguda (causa intrinseca mas comun, por isquemia prolongada o nefrotoxicos como aminoglucosidos, contrastes yodados, cisplatino), glomerulonefritis rapidamente progresiva, nefritis intersticial aguda (por farmacos como AINEs, antibioticos), rabdomiolisis con liberacion de mioglobina. Postrenal: obstruccion bilateral de ureteres (tumores, calculos), obstruccion de uretra (hipertrofia prostatica, estenosis), vejiga neurogenica.",
    "causasEn": "Prerenal: severe dehydration, hemorrhage, sepsis, decompensated heart failure, use of ACE inhibitors/ARBs with diuretics in vulnerable patients, major surgery with hypotension. Intrinsic: acute tubular necrosis (most common intrinsic cause, from prolonged ischemia or nephrotoxins such as aminoglycosides, iodinated contrast, cisplatin), rapidly progressive glomerulonephritis, acute interstitial nephritis (from drugs such as NSAIDs, antibiotics), rhabdomyolysis with myoglobin release. Postrenal: bilateral ureteral obstruction (tumors, stones), urethral obstruction (prostatic hypertrophy, stricture), neurogenic bladder.",
    "diagnosticoEs": "Se diagnostica con aumento de creatinina serica >= 0.3 mg/dL en 48 horas o >= 1.5 veces el valor basal en 7 dias, o gasto urinario < 0.5 mL/kg/h por 6 horas (criterios KDIGO). Analisis de orina con microscopia: cilindros granulosos marrones (necrosis tubular aguda), eosinofiluria (nefritis intersticial), cilindros eritrocitarios (glomerulonefritis). Indices urinarios: fraccion excretada de sodio (FENa) < 1% sugiere prerrenal, > 2% sugiere intrinseca. Ecografia renal urgente para descartar obstruccion (hidronefrosis). Laboratorios: electrolitos (potasio critico), gasometria arterial, CPK si sospecha rabdomiolisis, complemento y autoanticuerpos si sospecha glomerulonefritis. Biopsia renal en casos seleccionados cuando la causa no es clara.",
    "diagnosticoEn": "Diagnosed with serum creatinine increase >= 0.3 mg/dL in 48 hours or >= 1.5 times baseline within 7 days, or urine output < 0.5 mL/kg/h for 6 hours (KDIGO criteria). Urinalysis with microscopy: muddy brown granular casts (acute tubular necrosis), eosinophiluria (interstitial nephritis), red blood cell casts (glomerulonephritis). Urinary indices: fractional excretion of sodium (FENa) < 1% suggests prerenal, > 2% suggests intrinsic. Urgent renal ultrasound to rule out obstruction (hydronephrosis). Labs: electrolytes (critical potassium), arterial blood gas, CPK if rhabdomyolysis suspected, complement and autoantibodies if glomerulonephritis suspected. Renal biopsy in selected cases when cause is unclear.",
    "tratamientoEs": "El tratamiento depende de la causa. Prerrenal: reposicion agresiva de volumen con cristaloides isotonicos, correccion de la causa hemodinamica, suspension de farmacos que reducen perfusion renal. Intrinseca: suspension inmediata del agente nefrototoxico, hidratacion agresiva en rabdomiolisis para alcanzar gasto urinario > 200-300 mL/h, inmunosupresion urgente en glomerulonefritis rapidamente progresiva (pulsos de metilprednisolona y ciclofosfamida). Postrenal: desobstruccion urgente con sonda vesical, nefrostomia percutanea o colocacion de cateter doble J. Medidas generales: correccion de hiperpotasemia (gluconato de calcio, insulina con glucosa, resinas de intercambio, dialisis si refractaria), manejo de sobrecarga de volumen con diureticos o ultrafiltracion, ajuste de dosis de medicamentos a funcion renal, soporte nutricional. Dialisis de urgencia: hiperpotasemia refractaria, sobrecarga de volumen con edema pulmonar, acidosis metabolica severa, uremia sintomatica (pericarditis, encefalopatia), intoxicaciones.",
    "tratamientoEn": "Treatment depends on the cause. Prerenal: aggressive volume resuscitation with isotonic crystalloids, correction of hemodynamic cause, discontinuation of drugs reducing renal perfusion. Intrinsic: immediate discontinuation of nephrotoxic agent, aggressive hydration in rhabdomyolysis to achieve urine output > 200-300 mL/h, urgent immunosuppression in rapidly progressive glomerulonephritis (methylprednisolone pulses and cyclophosphamide). Postrenal: urgent deobstruction with bladder catheter, percutaneous nephrostomy, or double-J catheter placement. General measures: correction of hyperkalemia (calcium gluconate, insulin with glucose, exchange resins, dialysis if refractory), volume overload management with diuretics or ultrafiltration, medication dose adjustment to kidney function, nutritional support. Emergency dialysis: refractory hyperkalemia, volume overload with pulmonary edema, severe metabolic acidosis, symptomatic uremia (pericarditis, encephalopathy), poisonings.",
    "prevencionEs": "Mantener hidratacion adecuada especialmente en situaciones de riesgo (cirugia, ejercicio intenso, clima caluroso). Evitar combinaciones nefrotoxicas: IECAs + ARA II + diureticos + AINEs (la triple amenaza). Hidratacion profilactica con solucion salina antes de contraste yodado en pacientes de riesgo. Monitoreo estrecho de funcion renal con aminoglucosidos y otros nefrotoxicos. Prevencion de rabdomiolisis con hidratacion adecuada en ejercicio extremo. Ajuste de dosis de medicamentos en pacientes con funcion renal basal reducida. En hospitalizados: evitar hipotension prolongada, monitoreo estricto de balance hidrico, uso juicioso de nefrotoxicos.",
    "prevencionEn": "Maintain adequate hydration especially in risk situations (surgery, intense exercise, hot weather). Avoid nephrotoxic combinations: ACE inhibitors + ARBs + diuretics + NSAIDs (the triple whammy). Prophylactic hydration with saline before iodinated contrast in at-risk patients. Close monitoring of kidney function with aminoglycosides and other nephrotoxins. Prevention of rhabdomyolysis with adequate hydration in extreme exercise. Medication dose adjustment in patients with reduced baseline kidney function. In hospitalized patients: avoid prolonged hypotension, strict fluid balance monitoring, judicious use of nephrotoxins.",
    "complicacionesEs": [
      "Hiperpotasemia con riesgo de paro cardiaco",
      "Edema pulmonar agudo por sobrecarga de volumen",
      "Acidosis metabolica severa",
      "Uremia con pericarditis o encefalopatia uremica",
      "Sangrado por disfuncion plaquetaria uremica",
      "Infecciones nosocomiales (principal causa de muerte en IRA)",
      "Progresion a enfermedad renal cronica (20-50% de los sobrevivientes)",
      "Necesidad de dialisis temporal o permanente",
      "Sindrome de desequilibrio post-dialisis"
    ],
    "complicacionesEn": [
      "Hyperkalemia with risk of cardiac arrest",
      "Acute pulmonary edema from volume overload",
      "Severe metabolic acidosis",
      "Uremia with pericarditis or uremic encephalopathy",
      "Bleeding from uremic platelet dysfunction",
      "Nosocomial infections (leading cause of death in AKI)",
      "Progression to chronic kidney disease (20-50% of survivors)",
      "Need for temporary or permanent dialysis",
      "Post-dialysis disequilibrium syndrome"
    ],
    "cuandoConsultarEs": "La insuficiencia renal aguda es una emergencia medica. Acuda a urgencias inmediatamente si nota que ha dejado de orinar o la cantidad de orina ha disminuido drasticamente, si presenta hinchazon rapida y severa, dificultad para respirar, confusion o somnolencia excesiva, nauseas y vomitos persistentes. Si toma medicamentos nefrotoxicos y desarrolla cualquier cambio en la orina o malestar general, contacte a su medico de inmediato. En pacientes hospitalizados, el personal medico debe monitorear estrechamente el gasto urinario y la creatinina para deteccion temprana.",
    "cuandoConsultarEn": "Acute kidney injury is a medical emergency. Go to the emergency room immediately if you notice you have stopped urinating or urine output has drastically decreased, if you develop rapid and severe swelling, difficulty breathing, confusion or excessive drowsiness, persistent nausea and vomiting. If you take nephrotoxic medications and develop any change in urine or general malaise, contact your doctor immediately. In hospitalized patients, medical staff should closely monitor urine output and creatinine for early detection."
  },
  {
    "id": "glomerulonefritis",
    "nombreEs": "Glomerulonefritis",
    "nombreEn": "Glomerulonephritis",
    "descripcionEs": "La glomerulonefritis es un grupo de enfermedades que causan inflamacion de los glomerulos, las unidades de filtracion del rinon. Puede presentarse de forma aguda (en dias a semanas) o cronica (meses a anos), y puede manifestarse como sindrome nefritico (hematuria, hipertension, oliguria), sindrome nefrotico (proteinuria masiva, edema), o una combinacion de ambos. Las causas incluyen procesos autoinmunes, infecciones, y enfermedades geneticas. La glomerulonefritis es una de las principales causas de enfermedad renal cronica terminal a nivel mundial, y su diagnostico definitivo frecuentemente requiere biopsia renal con microscopia optica, inmunofluorescencia y microscopia electronica.",
    "descripcionEn": "Glomerulonephritis is a group of diseases that cause inflammation of the glomeruli, the kidney's filtration units. It can present acutely (over days to weeks) or chronically (months to years), and may manifest as nephritic syndrome (hematuria, hypertension, oliguria), nephrotic syndrome (massive proteinuria, edema), or a combination of both. Causes include autoimmune processes, infections, and genetic diseases. Glomerulonephritis is one of the leading causes of end-stage kidney disease worldwide, and its definitive diagnosis frequently requires renal biopsy with light microscopy, immunofluorescence, and electron microscopy.",
    "categoriaEs": "glomerular",
    "categoriaEn": "glomerular",
    "sintomasEs": [
      "Orina de color rojo, rosado o marron oscuro (hematuria macroscopica)",
      "Orina espumosa por proteinuria",
      "Hinchazon facial especialmente alrededor de los ojos al despertar",
      "Edema de piernas y tobillos",
      "Presion arterial elevada de inicio reciente",
      "Disminucion de la produccion de orina",
      "Fatiga y debilidad",
      "Dolor en flancos o espalda baja",
      "En glomerulonefritis rapidamente progresiva: deterioro rapido en dias a semanas",
      "Puede ser asintomatica detectada solo por analisis de orina de rutina"
    ],
    "sintomasEn": [
      "Red, pink, or dark brown urine (gross hematuria)",
      "Foamy urine from proteinuria",
      "Facial swelling especially around the eyes upon waking",
      "Leg and ankle edema",
      "New-onset elevated blood pressure",
      "Decreased urine output",
      "Fatigue and weakness",
      "Flank or lower back pain",
      "In rapidly progressive glomerulonephritis: rapid deterioration over days to weeks",
      "Can be asymptomatic detected only by routine urinalysis"
    ],
    "causasEs": "Glomerulonefritis postinfecciosa: clasicamente postestreptococica (2-3 semanas tras faringitis o impetigo), la mas comun en ninos. Nefropatia por IgA (enfermedad de Berger): forma mas comun en adultos a nivel mundial, con hematuria macroscopica episodica. Nefritis lupica: afecta al 50% de pacientes con lupus, clasificada en 6 clases histologicas. Vasculitis asociada a ANCA: granulomatosis con poliangiitis y poliangiitis microscopica, que causan glomerulonefritis rapidamente progresiva. Enfermedad anti-membrana basal glomerular (Goodpasture): rara pero agresiva, con hemorragia pulmonar y glomerulonefritis. Glomerulonefritis membranoproliferativa. Causas secundarias: hepatitis B y C, VIH, endocarditis infecciosa, crioglobulinemia.",
    "causasEn": "Post-infectious glomerulonephritis: classically post-streptococcal (2-3 weeks after pharyngitis or impetigo), the most common in children. IgA nephropathy (Berger's disease): most common form in adults worldwide, with episodic gross hematuria. Lupus nephritis: affects 50% of lupus patients, classified into 6 histologic classes. ANCA-associated vasculitis: granulomatosis with polyangiitis and microscopic polyangiitis, causing rapidly progressive glomerulonephritis. Anti-glomerular basement membrane disease (Goodpasture): rare but aggressive, with pulmonary hemorrhage and glomerulonephritis. Membranoproliferative glomerulonephritis. Secondary causes: hepatitis B and C, HIV, infective endocarditis, cryoglobulinemia.",
    "diagnosticoEs": "Analisis de orina: hematuria con eritrocitos dismorficos y cilindros eritrocitarios (patognomonicos de origen glomerular), proteinuria variable. Funcion renal: creatinina serica y TFGe. Complemento serico: C3 bajo en postinfecciosa, lupica, membranoproliferativa y crioglobulinemia; normal en nefropatia por IgA y vasculitis ANCA. Autoanticuerpos: ANA y anti-dsDNA (lupus), ANCA (vasculitis), anti-MBG (Goodpasture), antiestreptolisina O y anti-DNAsa B (postestreptococica). Serologias virales. Biopsia renal percutanea con microscopia optica, inmunofluorescencia y microscopia electronica es el estandar de oro para clasificacion histologica y guia del tratamiento. Ecografia renal para evaluar tamano y ecogenicidad.",
    "diagnosticoEn": "Urinalysis: hematuria with dysmorphic red blood cells and red blood cell casts (pathognomonic of glomerular origin), variable proteinuria. Kidney function: serum creatinine and eGFR. Serum complement: low C3 in post-infectious, lupus, membranoproliferative, and cryoglobulinemia; normal in IgA nephropathy and ANCA vasculitis. Autoantibodies: ANA and anti-dsDNA (lupus), ANCA (vasculitis), anti-GBM (Goodpasture), antistreptolysin O and anti-DNase B (post-streptococcal). Viral serologies. Percutaneous renal biopsy with light microscopy, immunofluorescence, and electron microscopy is the gold standard for histologic classification and treatment guidance. Renal ultrasound to evaluate size and echogenicity.",
    "tratamientoEs": "El tratamiento varia segun el tipo histologico y la severidad. Postestreptococica: tratamiento de soporte (control de hipertension, diureticos para edema, restriccion de sodio); generalmente autolimitada con buen pronostico en ninos. Nefropatia por IgA: IECAs o ARA II como base; en casos de alto riesgo, corticoides o inmunosupresores. Nefritis lupica: induccion con micofenolato mofetil o ciclofosfamida IV mas corticoides, seguido de mantenimiento con micofenolato. Vasculitis ANCA: induccion con rituximab o ciclofosfamida mas corticoides; plasmaferesis si enfermedad anti-MBG o hemorragia pulmonar severa; mantenimiento con rituximab o azatioprina. Medidas generales en todas: control de presion arterial con meta < 130/80 mmHg, reduccion de proteinuria con bloqueo del sistema renina-angiotensina, restriccion de sodio, estatinas si hiperlipidemia.",
    "tratamientoEn": "Treatment varies according to histologic type and severity. Post-streptococcal: supportive treatment (blood pressure control, diuretics for edema, sodium restriction); generally self-limited with good prognosis in children. IgA nephropathy: ACE inhibitors or ARBs as baseline; in high-risk cases, corticosteroids or immunosuppressants. Lupus nephritis: induction with mycophenolate mofetil or IV cyclophosphamide plus corticosteroids, followed by maintenance with mycophenolate. ANCA vasculitis: induction with rituximab or cyclophosphamide plus corticosteroids; plasmapheresis if anti-GBM disease or severe pulmonary hemorrhage; maintenance with rituximab or azathioprine. General measures for all: blood pressure control with target < 130/80 mmHg, proteinuria reduction with renin-angiotensin system blockade, sodium restriction, statins if hyperlipidemia.",
    "prevencionEs": "Tratamiento temprano y completo de infecciones estreptococicas para prevenir glomerulonefritis postestreptococica. Control adecuado de enfermedades autoinmunes como lupus para prevenir brotes de nefritis lupica. Vacunacion apropiada. Evitar exposiciones nefrotoxicas. No existe prevencion primaria para la mayoria de las glomerulonefritis primarias, pero la deteccion temprana mediante analisis de orina periodicos en poblaciones de riesgo permite un tratamiento oportuno. En pacientes con nefropatia por IgA: evitar episodios de deshidratacion y tratar infecciones respiratorias prontamente.",
    "prevencionEn": "Early and complete treatment of streptococcal infections to prevent post-streptococcal glomerulonephritis. Adequate control of autoimmune diseases like lupus to prevent lupus nephritis flares. Appropriate vaccination. Avoid nephrotoxic exposures. There is no primary prevention for most primary glomerulonephritis types, but early detection through periodic urinalysis in at-risk populations allows timely treatment. In patients with IgA nephropathy: avoid dehydration episodes and treat respiratory infections promptly.",
    "complicacionesEs": [
      "Insuficiencia renal aguda con necesidad de dialisis",
      "Progresion a enfermedad renal cronica terminal",
      "Hipertension arterial cronica",
      "Sindrome nefrotico con sus complicaciones (trombosis, infecciones)",
      "Edema pulmonar por sobrecarga de volumen",
      "Hemorragia alveolar difusa (en Goodpasture y vasculitis)",
      "Efectos adversos del tratamiento inmunosupresor (infecciones oportunistas, toxicidad de farmacos)",
      "Recurrencia post-trasplante (especialmente nefropatia por IgA y GEFS)",
      "Encefalopatia hipertensiva"
    ],
    "complicacionesEn": [
      "Acute kidney failure requiring dialysis",
      "Progression to end-stage kidney disease",
      "Chronic hypertension",
      "Nephrotic syndrome with its complications (thrombosis, infections)",
      "Pulmonary edema from volume overload",
      "Diffuse alveolar hemorrhage (in Goodpasture and vasculitis)",
      "Adverse effects of immunosuppressive treatment (opportunistic infections, drug toxicity)",
      "Post-transplant recurrence (especially IgA nephropathy and FSGS)",
      "Hypertensive encephalopathy"
    ],
    "cuandoConsultarEs": "Busque atencion medica urgente si su orina cambia a color rojo, rosado o color te oscuro, especialmente si se acompana de hinchazon facial, disminucion de la produccion de orina, o dificultad para respirar. Si tiene lupus u otra enfermedad autoinmune y nota cambios en la orina o aumento de hinchazon, consulte de inmediato. La glomerulonefritis rapidamente progresiva es una emergencia nefrologica donde el retraso en el tratamiento puede resultar en perdida irreversible de la funcion renal. Cualquier hemoptisis (tos con sangre) junto con cambios urinarios requiere evaluacion de emergencia.",
    "cuandoConsultarEn": "Seek urgent medical attention if your urine changes to red, pink, or dark tea color, especially if accompanied by facial swelling, decreased urine output, or difficulty breathing. If you have lupus or another autoimmune disease and notice changes in urine or increased swelling, consult immediately. Rapidly progressive glomerulonephritis is a nephrologic emergency where treatment delay can result in irreversible loss of kidney function. Any hemoptysis (coughing up blood) along with urinary changes requires emergency evaluation."
  },
  {
    "id": "nefropatia-diabetica",
    "nombreEs": "Nefropatia Diabetica",
    "nombreEn": "Diabetic Nephropathy",
    "descripcionEs": "La nefropatia diabetica es la causa mas comun de enfermedad renal cronica terminal en el mundo, afectando aproximadamente al 30-40% de los pacientes con diabetes tipo 1 y tipo 2. Se desarrolla por dano microangiopatico cronico a los glomerulos causado por hiperglucemia sostenida, resultando en engrosamiento de la membrana basal glomerular, expansion mesangial y glomeruloesclerosis nodular (lesion de Kimmelstiel-Wilson). La progresion tipica va desde hiperfiltacion glomerular asintomatica, a microalbuminuria, macroalbuminuria, y finalmente insuficiencia renal terminal. La nefropatia diabetica frecuentemente coexiste con otras complicaciones microvasculares como retinopatia y neuropatia diabetica, formando la triada de microangiopatia diabetica.",
    "descripcionEn": "Diabetic nephropathy is the most common cause of end-stage kidney disease worldwide, affecting approximately 30-40% of patients with type 1 and type 2 diabetes. It develops from chronic microangiopathic damage to the glomeruli caused by sustained hyperglycemia, resulting in glomerular basement membrane thickening, mesangial expansion, and nodular glomerulosclerosis (Kimmelstiel-Wilson lesion). Typical progression goes from asymptomatic glomerular hyperfiltration, to microalbuminuria, macroalbuminuria, and finally end-stage renal failure. Diabetic nephropathy frequently coexists with other microvascular complications such as retinopathy and diabetic neuropathy, forming the triad of diabetic microangiopathy.",
    "categoriaEs": "cronica",
    "categoriaEn": "chronic",
    "sintomasEs": [
      "Asintomatica en estadios tempranos (solo detectable por laboratorio)",
      "Orina espumosa por albuminuria progresiva",
      "Hinchazon de piernas, tobillos y pies que empeora gradualmente",
      "Presion arterial elevada o empeoramiento de hipertension preexistente",
      "Fatiga progresiva y debilidad",
      "Nauseas y perdida del apetito en estadios avanzados",
      "Prurito generalizado (piel con comezon)",
      "Calambres musculares frecuentes",
      "Dificultad para controlar la glucosa (necesidad de reducir dosis de insulina por menor aclaramiento renal)",
      "Vision borrosa (frecuentemente asociada a retinopatia diabetica coexistente)"
    ],
    "sintomasEn": [
      "Asymptomatic in early stages (only detectable by laboratory)",
      "Foamy urine from progressive albuminuria",
      "Swelling of legs, ankles, and feet that gradually worsens",
      "Elevated blood pressure or worsening of preexisting hypertension",
      "Progressive fatigue and weakness",
      "Nausea and loss of appetite in advanced stages",
      "Generalized pruritus (itchy skin)",
      "Frequent muscle cramps",
      "Difficulty controlling glucose (need to reduce insulin doses due to decreased renal clearance)",
      "Blurred vision (frequently associated with coexisting diabetic retinopathy)"
    ],
    "causasEs": "La causa fundamental es la hiperglucemia cronica sostenida que desencadena multiples vias patogenicas: acumulacion de productos de glucosilacion avanzada (AGEs) que danan la estructura glomerular, activacion de la via de los polioles, activacion de la proteina quinasa C, estres oxidativo aumentado, y activacion del sistema renina-angiotensina-aldosterona intrarenal. La hipertension arterial acelera significativamente la progresion. Factores de riesgo adicionales incluyen predisposicion genetica (mayor frecuencia en afroamericanos, hispanos y nativos americanos), tabaquismo, dislipidemia, obesidad, dieta alta en proteinas y sodio, y duracion prolongada de la diabetes (generalmente > 10 anos para diabetes tipo 1).",
    "causasEn": "The fundamental cause is sustained chronic hyperglycemia that triggers multiple pathogenic pathways: accumulation of advanced glycation end-products (AGEs) that damage glomerular structure, polyol pathway activation, protein kinase C activation, increased oxidative stress, and activation of the intrarenal renin-angiotensin-aldosterone system. Hypertension significantly accelerates progression. Additional risk factors include genetic predisposition (higher frequency in African Americans, Hispanics, and Native Americans), smoking, dyslipidemia, obesity, high-protein and high-sodium diet, and prolonged diabetes duration (generally > 10 years for type 1 diabetes).",
    "diagnosticoEs": "Tamizaje anual obligatorio en todo paciente con diabetes: relacion albumina/creatinina en orina (ACR) y TFGe. Microalbuminuria: ACR 30-300 mg/g (estadio temprano, potencialmente reversible). Macroalbuminuria: ACR > 300 mg/g (dano establecido). Confirmar con dos de tres muestras positivas en 3-6 meses (excluir falsos positivos por ejercicio, infeccion urinaria, menstruacion). Evaluacion complementaria: fondo de ojo (la presencia de retinopatia diabetica apoya fuertemente el diagnostico de nefropatia diabetica), perfil lipidico, hemoglobina glucosilada (HbA1c), ecografia renal (rinones de tamano normal o aumentado en estadios tempranos, reducidos en avanzados). Generalmente NO se requiere biopsia renal si la presentacion es tipica (diabetes de larga evolucion con retinopatia y proteinuria progresiva). Se indica biopsia si: inicio rapido de proteinuria, hematuria activa, ausencia de retinopatia, o sospecha de etiologia no diabetica.",
    "diagnosticoEn": "Mandatory annual screening in all diabetes patients: urine albumin-to-creatinine ratio (ACR) and eGFR. Microalbuminuria: ACR 30-300 mg/g (early stage, potentially reversible). Macroalbuminuria: ACR > 300 mg/g (established damage). Confirm with two of three positive samples over 3-6 months (exclude false positives from exercise, urinary infection, menstruation). Complementary evaluation: fundoscopy (presence of diabetic retinopathy strongly supports diabetic nephropathy diagnosis), lipid profile, glycated hemoglobin (HbA1c), renal ultrasound (normal or increased kidney size in early stages, reduced in advanced). Renal biopsy is generally NOT required if presentation is typical (long-standing diabetes with retinopathy and progressive proteinuria). Biopsy is indicated if: rapid onset of proteinuria, active hematuria, absence of retinopathy, or suspicion of non-diabetic etiology.",
    "tratamientoEs": "Pilar 1 — Control glucemico: HbA1c meta < 7% (individualizar en ancianos o comorbidos). Inhibidores de SGLT2 (dapagliflozina, empagliflozina, canagliflozina) son primera linea en diabeticos con ERC por beneficio renal y cardiovascular demostrado (reducen progresion a dialisis en 30-40%). Agonistas de GLP-1 (semaglutida, liraglutida) como segunda linea con beneficio cardiovascular y renal. Pilar 2 — Control de presion arterial: meta < 130/80 mmHg, IECAs o ARA II obligatorios por efecto nefroprotector (reducen presion intraglomerular y proteinuria). Pilar 3 — Finerenona: antagonista no esteroideo del receptor mineralocorticoide, aprobado especificamente para nefropatia diabetica, reduce progresion renal y eventos cardiovasculares. Pilar 4 — Control de factores de riesgo: estatinas de alta intensidad, cesacion tabaquica, control de peso. Dieta: restriccion de sodio < 2 g/dia, proteinas 0.8 g/kg/dia en estadios avanzados. En estadio 5: preparacion para dialisis o trasplante renal (trasplante simultaneo de rinon-pancreas en diabetes tipo 1).",
    "tratamientoEn": "Pillar 1 — Glycemic control: HbA1c target < 7% (individualize in elderly or those with comorbidities). SGLT2 inhibitors (dapagliflozin, empagliflozin, canagliflozin) are first line in diabetics with CKD for demonstrated renal and cardiovascular benefit (reduce progression to dialysis by 30-40%). GLP-1 agonists (semaglutide, liraglutide) as second line with cardiovascular and renal benefit. Pillar 2 — Blood pressure control: target < 130/80 mmHg, ACE inhibitors or ARBs mandatory for nephroprotective effect (reduce intraglomerular pressure and proteinuria). Pillar 3 — Finerenone: nonsteroidal mineralocorticoid receptor antagonist, specifically approved for diabetic nephropathy, reduces renal progression and cardiovascular events. Pillar 4 — Risk factor control: high-intensity statins, smoking cessation, weight control. Diet: sodium restriction < 2 g/day, protein 0.8 g/kg/day in advanced stages. In stage 5: preparation for dialysis or kidney transplant (simultaneous kidney-pancreas transplant in type 1 diabetes).",
    "prevencionEs": "Control glucemico estricto desde el diagnostico de diabetes es la medida preventiva mas importante (estudios DCCT y UKPDS demostraron reduccion de 50-60% en el riesgo de nefropatia). Control de presion arterial con meta < 130/80 mmHg. Inicio temprano de IECAs o ARA II al detectar microalbuminuria, incluso en normotensos. Inicio de inhibidores de SGLT2 tempranamente en diabeticos con factores de riesgo renal. Tamizaje anual de microalbuminuria y TFGe: en diabetes tipo 1 a partir de 5 anos del diagnostico, en diabetes tipo 2 desde el diagnostico. Cesacion tabaquica. Dieta equilibrada con control de peso. Evitar nefrotoxicos (AINEs, aminoglucosidos). Ejercicio regular.",
    "prevencionEn": "Strict glycemic control from diabetes diagnosis is the most important preventive measure (DCCT and UKPDS studies demonstrated 50-60% reduction in nephropathy risk). Blood pressure control with target < 130/80 mmHg. Early initiation of ACE inhibitors or ARBs upon detecting microalbuminuria, even in normotensive patients. Early initiation of SGLT2 inhibitors in diabetics with renal risk factors. Annual screening for microalbuminuria and eGFR: in type 1 diabetes starting 5 years after diagnosis, in type 2 diabetes from diagnosis. Smoking cessation. Balanced diet with weight control. Avoid nephrotoxins (NSAIDs, aminoglycosides). Regular exercise.",
    "complicacionesEs": [
      "Progresion a enfermedad renal cronica terminal requiriendo dialisis o trasplante",
      "Enfermedad cardiovascular acelerada (infarto, ACV, insuficiencia cardiaca — principal causa de muerte)",
      "Retinopatia diabetica progresiva (frecuentemente paralela a la nefropatia)",
      "Neuropatia periferica y autonomica avanzada",
      "Hipoglucemia severa por acumulacion de insulina en insuficiencia renal",
      "Hiperpotasemia, especialmente con IECAs/ARA II y finerenona",
      "Calcificacion vascular acelerada",
      "Pie diabetico con mayor riesgo de amputacion",
      "Anemia resistente a eritropoyetina"
    ],
    "complicacionesEn": [
      "Progression to end-stage kidney disease requiring dialysis or transplant",
      "Accelerated cardiovascular disease (heart attack, stroke, heart failure — leading cause of death)",
      "Progressive diabetic retinopathy (frequently parallels nephropathy)",
      "Advanced peripheral and autonomic neuropathy",
      "Severe hypoglycemia from insulin accumulation in renal failure",
      "Hyperkalemia, especially with ACE inhibitors/ARBs and finerenone",
      "Accelerated vascular calcification",
      "Diabetic foot with increased amputation risk",
      "Erythropoietin-resistant anemia"
    ],
    "cuandoConsultarEs": "Todo paciente con diabetes debe realizarse tamizaje renal anual (no esperar sintomas). Consulte a nefrologia si: microalbuminuria persistente a pesar de tratamiento optimizado, TFGe < 30 mL/min (estadio 4), caida rapida de TFGe (> 5 mL/min/ano), potasio persistentemente elevado, proteinuria nefrotica, o si hay incertidumbre diagnostica (ausencia de retinopatia, hematuria, inicio atipico). Acuda a urgencias si presenta hinchazon severa subita, dificultad para respirar, confusion, o si no puede orinar. El control multidisciplinario con endocrinologia y nefrologia mejora los desenlaces significativamente.",
    "cuandoConsultarEn": "Every diabetes patient should have annual kidney screening (do not wait for symptoms). Consult nephrology if: persistent microalbuminuria despite optimized treatment, eGFR < 30 mL/min (stage 4), rapid eGFR decline (> 5 mL/min/year), persistently elevated potassium, nephrotic-range proteinuria, or diagnostic uncertainty (absence of retinopathy, hematuria, atypical onset). Go to the emergency room if you experience sudden severe swelling, difficulty breathing, confusion, or inability to urinate. Multidisciplinary management with endocrinology and nephrology significantly improves outcomes."
  },
  {
    "id": "pielonefritis",
    "nombreEs": "Pielonefritis",
    "nombreEn": "Pyelonephritis",
    "descripcionEs": "La pielonefritis es una infeccion bacteriana del parenquima renal y el sistema colector que representa la forma mas grave de infeccion del tracto urinario. Puede ser aguda (infeccion ascendente desde la vejiga) o cronica (resultado de infecciones recurrentes o anomalias anatomicas). La pielonefritis aguda no complicada es mas comun en mujeres jovenes, mientras que la complicada ocurre en presencia de factores como obstruccion urinaria, diabetes, embarazo, inmunosupresion o anomalias del tracto urinario. Sin tratamiento adecuado, puede progresar a absceso renal, sepsis urinaria (urosepsis) o dano renal permanente. Escherichia coli es el agente causal en mas del 80% de los casos no complicados.",
    "descripcionEn": "Pyelonephritis is a bacterial infection of the renal parenchyma and collecting system representing the most severe form of urinary tract infection. It can be acute (ascending infection from the bladder) or chronic (resulting from recurrent infections or anatomical abnormalities). Uncomplicated acute pyelonephritis is more common in young women, while complicated pyelonephritis occurs in the presence of factors such as urinary obstruction, diabetes, pregnancy, immunosuppression, or urinary tract abnormalities. Without adequate treatment, it can progress to renal abscess, urinary sepsis (urosepsis), or permanent kidney damage. Escherichia coli is the causative agent in more than 80% of uncomplicated cases.",
    "categoriaEs": "infecciosa",
    "categoriaEn": "infectious",
    "sintomasEs": [
      "Fiebre alta (> 38.5 C) con escalofrios y sudoracion",
      "Dolor intenso en flanco o espalda baja (puno percusion renal positiva)",
      "Nauseas y vomitos",
      "Sintomas urinarios bajos: ardor al orinar (disuria), urgencia urinaria, frecuencia aumentada",
      "Orina turbia con mal olor",
      "Orina con sangre (hematuria)",
      "Malestar general y fatiga intensa",
      "Dolor abdominal difuso o localizado",
      "Taquicardia",
      "En ancianos: confusion mental, caidas, sin fiebre (presentacion atipica)"
    ],
    "sintomasEn": [
      "High fever (> 38.5 C) with chills and sweating",
      "Intense flank or lower back pain (positive costovertebral angle tenderness)",
      "Nausea and vomiting",
      "Lower urinary symptoms: burning on urination (dysuria), urinary urgency, increased frequency",
      "Cloudy urine with foul odor",
      "Blood in urine (hematuria)",
      "General malaise and intense fatigue",
      "Diffuse or localized abdominal pain",
      "Tachycardia",
      "In elderly: mental confusion, falls, without fever (atypical presentation)"
    ],
    "causasEs": "La causa mas comun es la infeccion ascendente desde la vejiga (cistitis que progresa). Escherichia coli uropatogenica (UPEC) causa > 80% de casos no complicados. Otros patogenos: Klebsiella pneumoniae, Proteus mirabilis (asociado a calculos de estruvita), Enterococcus, Staphylococcus saprophyticus. Factores predisponentes: sexo femenino (uretra corta), actividad sexual, uso de diafragmas o espermicidas, obstruccion urinaria (calculos, hiperplasia prostatica, tumores), reflujo vesicoureteral (especialmente en ninos), diabetes mellitus, embarazo (compresion de ureteres y estasis urinaria), cateterismo urinario, inmunosupresion, y anomalias congenitas del tracto urinario. La via hematogena es rara pero puede ocurrir en Staphylococcus aureus bacteremico.",
    "causasEn": "The most common cause is ascending infection from the bladder (progressing cystitis). Uropathogenic Escherichia coli (UPEC) causes > 80% of uncomplicated cases. Other pathogens: Klebsiella pneumoniae, Proteus mirabilis (associated with struvite stones), Enterococcus, Staphylococcus saprophyticus. Predisposing factors: female sex (short urethra), sexual activity, use of diaphragms or spermicides, urinary obstruction (stones, prostatic hyperplasia, tumors), vesicoureteral reflux (especially in children), diabetes mellitus, pregnancy (ureteral compression and urinary stasis), urinary catheterization, immunosuppression, and congenital urinary tract abnormalities. Hematogenous route is rare but can occur in Staphylococcus aureus bacteremia.",
    "diagnosticoEs": "Diagnostico clinico basado en fiebre, dolor en flanco y sintomas urinarios. Analisis de orina: leucocituria (> 10 leucocitos/campo), bacteriuria, nitritos positivos, posible hematuria. Urocultivo con antibiograma (obligatorio): confirma el agente y guia el tratamiento; se considera positivo con >= 10,000 UFC/mL en sintomaticos. Hemocultivos si fiebre alta, signos de sepsis o pielonefritis complicada. Laboratorios: hemograma con leucocitosis y desviacion izquierda, PCR y procalcitonina elevadas, funcion renal. Ecografia renal urgente si: no mejoria en 48-72 horas con antibioticos, sospecha de obstruccion, absceso renal, o pielonefritis complicada. TAC con contraste es el estudio de imagen mas sensible para abscesos, gas perirrenal y complicaciones. En ninos con primera infeccion: cistouretrografia miccional para descartar reflujo vesicoureteral.",
    "diagnosticoEn": "Clinical diagnosis based on fever, flank pain, and urinary symptoms. Urinalysis: leukocyturia (> 10 WBC/field), bacteriuria, positive nitrites, possible hematuria. Urine culture with antibiogram (mandatory): confirms the agent and guides treatment; considered positive with >= 10,000 CFU/mL in symptomatic patients. Blood cultures if high fever, signs of sepsis, or complicated pyelonephritis. Labs: CBC with leukocytosis and left shift, elevated CRP and procalcitonin, kidney function. Urgent renal ultrasound if: no improvement in 48-72 hours with antibiotics, suspicion of obstruction, renal abscess, or complicated pyelonephritis. Contrast CT is the most sensitive imaging study for abscesses, perirenal gas, and complications. In children with first infection: voiding cystourethrography to rule out vesicoureteral reflux.",
    "tratamientoEs": "Pielonefritis no complicada ambulatoria: fluoroquinolonas (ciprofloxacino 500 mg cada 12h por 7 dias, o levofloxacino 750 mg diarios por 5 dias) como primera linea si susceptibilidad local permite; alternativas: trimetoprim-sulfametoxazol por 14 dias (si sensibilidad confirmada), o cefalosporinas orales. Pielonefritis complicada u hospitalizada: antibioticos intravenosos (ceftriaxona 1-2 g/dia, piperacilina-tazobactam, o carbapenems en resistentes) con transicion a oral al mejorar (48-72 h afebriles). Duracion total: 10-14 dias. Pielonefritis obstructiva: desobstruccion urgente (nefrostomia percutanea o cateter doble J) ademas de antibioticos. Absceso renal > 5 cm: drenaje percutaneo guiado por imagen. Medidas de soporte: hidratacion IV adecuada, analgesicos (paracetamol, AINEs si no hay contraindicacion renal), antiemeticos. En embarazadas: hospitalizacion con cefalosporinas IV (ceftriaxona); nunca fluoroquinolonas ni trimetoprim-sulfa.",
    "tratamientoEn": "Uncomplicated outpatient pyelonephritis: fluoroquinolones (ciprofloxacin 500 mg every 12h for 7 days, or levofloxacin 750 mg daily for 5 days) as first line if local susceptibility permits; alternatives: trimethoprim-sulfamethoxazole for 14 days (if confirmed sensitivity), or oral cephalosporins. Complicated or hospitalized pyelonephritis: intravenous antibiotics (ceftriaxone 1-2 g/day, piperacillin-tazobactam, or carbapenems in resistant cases) with transition to oral upon improvement (48-72 h afebrile). Total duration: 10-14 days. Obstructive pyelonephritis: urgent deobstruction (percutaneous nephrostomy or double-J catheter) plus antibiotics. Renal abscess > 5 cm: image-guided percutaneous drainage. Supportive measures: adequate IV hydration, analgesics (acetaminophen, NSAIDs if no renal contraindication), antiemetics. In pregnant women: hospitalization with IV cephalosporins (ceftriaxone); never fluoroquinolones or trimethoprim-sulfa.",
    "prevencionEs": "Hidratacion abundante (al menos 2 litros de agua al dia). Orinar frecuentemente y no retener la orina. Orinar despues de las relaciones sexuales. Higiene genital de adelante hacia atras (mujeres). Evitar uso de espermicidas y diafragmas si hay infecciones recurrentes. Tratamiento completo de cistitis para evitar ascenso de la infeccion. Profilaxis antibiotica en mujeres con infecciones urinarias recurrentes (> 3/ano): nitrofurantoina o trimetoprim-sulfa en dosis baja nocturna, o profilaxis postcoital. En ninos con reflujo vesicoureteral: profilaxis antibiotica y seguimiento urologico. En pacientes con sonda vesical: retirar lo antes posible, tecnica aseptica de insercion.",
    "prevencionEn": "Abundant hydration (at least 2 liters of water per day). Urinate frequently and do not retain urine. Urinate after sexual intercourse. Front-to-back genital hygiene (women). Avoid spermicides and diaphragms if recurrent infections occur. Complete treatment of cystitis to prevent ascending infection. Antibiotic prophylaxis in women with recurrent urinary infections (> 3/year): low-dose nightly nitrofurantoin or trimethoprim-sulfa, or post-coital prophylaxis. In children with vesicoureteral reflux: antibiotic prophylaxis and urologic follow-up. In patients with urinary catheters: remove as soon as possible, aseptic insertion technique.",
    "complicacionesEs": [
      "Absceso renal o perinefrico",
      "Urosepsis y choque septico (potencialmente mortal)",
      "Pielonefritis enfisematosa (gas en parenquima renal — emergencia, mas comun en diabeticos)",
      "Necrosis papilar renal (especialmente en diabeticos y usuarios de AINEs)",
      "Pionefrosis (pus en sistema colector obstruido — emergencia quirurgica)",
      "Dano renal permanente con cicatrices (especialmente en ninos con reflujo)",
      "Pielonefritis cronica con atrofia renal",
      "Parto prematuro y bajo peso al nacer (en embarazadas)"
    ],
    "complicacionesEn": [
      "Renal or perinephric abscess",
      "Urosepsis and septic shock (potentially fatal)",
      "Emphysematous pyelonephritis (gas in renal parenchyma — emergency, more common in diabetics)",
      "Renal papillary necrosis (especially in diabetics and NSAID users)",
      "Pyonephrosis (pus in obstructed collecting system — surgical emergency)",
      "Permanent kidney damage with scarring (especially in children with reflux)",
      "Chronic pyelonephritis with renal atrophy",
      "Premature birth and low birth weight (in pregnant women)"
    ],
    "cuandoConsultarEs": "Acuda a urgencias si presenta fiebre alta con dolor en el flanco o espalda baja, escalofrios intensos, nauseas y vomitos que impiden tomar medicamentos orales, sangre en la orina, o si los sintomas empeoran a pesar de estar tomando antibioticos por 48-72 horas. Las embarazadas con sospecha de pielonefritis deben ser hospitalizadas siempre. Los pacientes diabeticos, inmunosuprimidos, con rinon unico, o con antecedente de obstruccion urinaria deben buscar atencion inmediata ante cualquier sintoma urinario con fiebre. La confusion mental en ancianos con sintomas urinarios puede ser la unica manifestacion de pielonefritis.",
    "cuandoConsultarEn": "Go to the emergency room if you have high fever with flank or lower back pain, intense chills, nausea and vomiting preventing oral medication intake, blood in urine, or if symptoms worsen despite taking antibiotics for 48-72 hours. Pregnant women with suspected pyelonephritis should always be hospitalized. Diabetic patients, immunosuppressed individuals, those with a single kidney, or with history of urinary obstruction should seek immediate care for any urinary symptoms with fever. Mental confusion in elderly patients with urinary symptoms may be the only manifestation of pyelonephritis."
  },
  {
    "id": "enfermedad-poliquistica-renal",
    "nombreEs": "Enfermedad Poliquistica Renal",
    "nombreEn": "Polycystic Kidney Disease",
    "descripcionEs": "La enfermedad poliquistica renal (EPR) es un trastorno genetico caracterizado por el desarrollo progresivo de multiples quistes llenos de liquido en ambos rinones, que gradualmente reemplazan el tejido renal normal y conducen a insuficiencia renal. Existen dos formas principales: la autosomica dominante (EPRAD), causada por mutaciones en PKD1 (85%) o PKD2 (15%), que es la enfermedad renal hereditaria mas comun afectando a 1 de cada 400-1000 personas; y la autosomica recesiva (EPRAR), mucho mas rara, que se manifiesta en la infancia. La EPRAD es una enfermedad sistemica que no solo afecta los rinones sino tambien el higado (quistes hepaticos en 80%), el sistema cardiovascular (aneurismas intracraneales en 5-10%) y otros organos. Es la cuarta causa de insuficiencia renal terminal, representando el 5-10% de pacientes en dialisis.",
    "descripcionEn": "Polycystic kidney disease (PKD) is a genetic disorder characterized by the progressive development of multiple fluid-filled cysts in both kidneys that gradually replace normal kidney tissue and lead to kidney failure. There are two main forms: autosomal dominant (ADPKD), caused by mutations in PKD1 (85%) or PKD2 (15%), which is the most common hereditary kidney disease affecting 1 in 400-1000 people; and autosomal recessive (ARPKD), much rarer, manifesting in childhood. ADPKD is a systemic disease affecting not only the kidneys but also the liver (hepatic cysts in 80%), the cardiovascular system (intracranial aneurysms in 5-10%), and other organs. It is the fourth leading cause of end-stage renal failure, representing 5-10% of patients on dialysis.",
    "categoriaEs": "genetica",
    "categoriaEn": "genetic",
    "sintomasEs": [
      "Dolor cronico en flancos o espalda por crecimiento de quistes y aumento del tamano renal",
      "Hematuria macroscopica (sangre visible en orina) por ruptura de quistes",
      "Presion arterial elevada (frecuentemente el primer signo, presente en 60% antes de los 30 anos)",
      "Masa abdominal palpable por rinones aumentados de tamano",
      "Dolor abdominal agudo por ruptura, infeccion o sangrado de quiste",
      "Infecciones urinarias y de quistes recurrentes",
      "Calculos renales (en 20-30% de pacientes)",
      "Sensacion de plenitud abdominal temprana (por hepatomegalia quistica)",
      "Dolor de cabeza severo subito (posible aneurisma intracraneal roto — emergencia)",
      "Proteinuria generalmente leve"
    ],
    "sintomasEn": [
      "Chronic flank or back pain from cyst growth and increased kidney size",
      "Gross hematuria (visible blood in urine) from cyst rupture",
      "Elevated blood pressure (frequently the first sign, present in 60% before age 30)",
      "Palpable abdominal mass from enlarged kidneys",
      "Acute abdominal pain from cyst rupture, infection, or hemorrhage",
      "Recurrent urinary tract and cyst infections",
      "Kidney stones (in 20-30% of patients)",
      "Early abdominal fullness sensation (from cystic hepatomegaly)",
      "Sudden severe headache (possible ruptured intracranial aneurysm — emergency)",
      "Generally mild proteinuria"
    ],
    "causasEs": "EPRAD: mutaciones en los genes PKD1 (cromosoma 16, 85% de casos, fenotipo mas severo con insuficiencia renal terminal promedio a los 54 anos) o PKD2 (cromosoma 4, 15% de casos, progresion mas lenta con insuficiencia renal terminal promedio a los 74 anos). Las proteinas codificadas, policistina-1 y policistina-2, forman un complejo en los cilios primarios de las celulas epiteliales tubulares que regula la proliferacion celular y la secrecion de liquidos. Herencia autosomica dominante: 50% de probabilidad de heredar la mutacion; penetrancia virtualmente del 100% pero expresividad variable. Hasta el 10% de casos son mutaciones de novo (sin antecedentes familiares). EPRAR: mutaciones en el gen PKHD1 que codifica fibrocistina; herencia autosomica recesiva. La enfermedad hepatica (fibrosis hepatica congenita) es prominente en EPRAR.",
    "causasEn": "ADPKD: mutations in PKD1 (chromosome 16, 85% of cases, more severe phenotype with average end-stage renal failure at age 54) or PKD2 (chromosome 4, 15% of cases, slower progression with average end-stage renal failure at age 74). The encoded proteins, polycystin-1 and polycystin-2, form a complex in primary cilia of tubular epithelial cells that regulates cell proliferation and fluid secretion. Autosomal dominant inheritance: 50% chance of inheriting the mutation; virtually 100% penetrance but variable expressivity. Up to 10% of cases are de novo mutations (no family history). ARPKD: mutations in the PKHD1 gene encoding fibrocystin; autosomal recessive inheritance. Liver disease (congenital hepatic fibrosis) is prominent in ARPKD.",
    "diagnosticoEs": "Ecografia renal es el estudio inicial de eleccion: criterios ecograficos de Ravine basados en edad y numero de quistes (por ejemplo, >= 3 quistes bilaterales en personas de 15-39 anos con antecedente familiar). Resonancia magnetica (RM) es mas sensible y permite medir el volumen renal total (VRT), que es el mejor predictor de progresion (la clasificacion de la Clinica Mayo usa el VRT ajustado a talla y edad). TAC se usa en situaciones agudas (hemorragia, infeccion). Estudio genetico: prueba definitiva cuando la imagen es ambigua, para diagnostico presintomatico en familiares, o para donantes vivos potenciales; analisis de PKD1 y PKD2 por secuenciacion. Evaluacion complementaria: funcion renal, analisis de orina, presion arterial, ecografia hepatica. Cribado de aneurismas intracraneales con angioresonancia (ARM) en pacientes con antecedentes familiares de aneurisma o hemorragia subaracnoidea, y considerado en todos antes de cirugia mayor.",
    "diagnosticoEn": "Renal ultrasound is the initial study of choice: Ravine ultrasound criteria based on age and number of cysts (for example, >= 3 bilateral cysts in persons aged 15-39 with family history). Magnetic resonance imaging (MRI) is more sensitive and allows measurement of total kidney volume (TKV), which is the best predictor of progression (Mayo Clinic classification uses height- and age-adjusted TKV). CT is used in acute situations (hemorrhage, infection). Genetic testing: definitive test when imaging is ambiguous, for presymptomatic diagnosis in family members, or for potential living donors; PKD1 and PKD2 analysis by sequencing. Complementary evaluation: kidney function, urinalysis, blood pressure, liver ultrasound. Intracranial aneurysm screening with MR angiography (MRA) in patients with family history of aneurysm or subarachnoid hemorrhage, and considered in all before major surgery.",
    "tratamientoEs": "Tolvaptan: antagonista del receptor de vasopresina V2, unico farmaco aprobado especificamente para EPRAD que ha demostrado reducir el crecimiento de quistes y la caida de TFGe en pacientes con enfermedad de progresion rapida (clasificacion Mayo 1C-1E). Requiere monitoreo hepatico estricto por riesgo de hepatotoxicidad. Control agresivo de presion arterial: meta < 110/75 mmHg en jovenes (estudio HALT-PKD), IECAs o ARA II como primera linea. Hidratacion abundante (> 3 litros/dia) para suprimir vasopresina endogena y el crecimiento quistico. Manejo del dolor: evitar AINEs (nefrotoxicos); paracetamol como primera linea, bloqueos nerviosos, y en casos severos descompresion quirurgica o aspiracion de quistes. Infeccion de quistes: fluoroquinolonas (ciprofloxacino, levofloxacino) por su buena penetracion en quistes; drenaje percutaneo si absceso grande. Calculos renales: tratamiento segun composicion. En insuficiencia renal terminal: trasplante renal (tratamiento de eleccion con excelentes resultados); nefrectomia pretrasplante si rinones muy voluminosos; hemodialisis o dialisis peritoneal como puente.",
    "tratamientoEn": "Tolvaptan: V2 vasopressin receptor antagonist, the only drug specifically approved for ADPKD that has been shown to reduce cyst growth and eGFR decline in patients with rapidly progressing disease (Mayo classification 1C-1E). Requires strict hepatic monitoring due to hepatotoxicity risk. Aggressive blood pressure control: target < 110/75 mmHg in young patients (HALT-PKD study), ACE inhibitors or ARBs as first line. Abundant hydration (> 3 liters/day) to suppress endogenous vasopressin and cystic growth. Pain management: avoid NSAIDs (nephrotoxic); acetaminophen as first line, nerve blocks, and in severe cases surgical decompression or cyst aspiration. Cyst infection: fluoroquinolones (ciprofloxacin, levofloxacin) for their good cyst penetration; percutaneous drainage if large abscess. Kidney stones: treatment according to composition. In end-stage renal failure: kidney transplant (treatment of choice with excellent results); pretransplant nephrectomy if very large kidneys; hemodialysis or peritoneal dialysis as bridge.",
    "prevencionEs": "No se puede prevenir la enfermedad en si, ya que es genetica, pero se pueden tomar medidas para retrasar la progresion. Control estricto de presion arterial desde edades tempranas. Hidratacion abundante y evitar cafeina (estimula crecimiento quistico via AMPc). Dieta baja en sodio. Evitar AINEs y otros nefrotoxicos. Actividad fisica regular evitando deportes de contacto que puedan traumatizar rinones agrandados. Consejeria genetica para familias afectadas: informacion sobre riesgo de transmision (50% por embarazo), opciones de diagnostico prenatal y preimplantacional. Tamizaje ecografico en familiares de primer grado. El diagnostico presintomatico permite intervencion temprana con tolvaptan en pacientes de alto riesgo de progresion rapida.",
    "prevencionEn": "The disease itself cannot be prevented as it is genetic, but measures can be taken to delay progression. Strict blood pressure control from early ages. Abundant hydration and avoiding caffeine (stimulates cystic growth via cAMP). Low-sodium diet. Avoid NSAIDs and other nephrotoxins. Regular physical activity avoiding contact sports that could traumatize enlarged kidneys. Genetic counseling for affected families: information about transmission risk (50% per pregnancy), prenatal and preimplantation diagnostic options. Ultrasound screening in first-degree relatives. Presymptomatic diagnosis allows early intervention with tolvaptan in patients at high risk of rapid progression.",
    "complicacionesEs": [
      "Insuficiencia renal cronica terminal (50% de pacientes con PKD1 a los 60 anos)",
      "Aneurismas intracraneales con riesgo de hemorragia subaracnoidea (5-10%)",
      "Quistes hepaticos masivos con hepatomegalia sintomatica (mas severos en mujeres)",
      "Infecciones recurrentes de quistes renales y hepaticos",
      "Hematuria masiva por ruptura de quistes",
      "Calculos renales de acido urico y oxalato de calcio",
      "Prolapso de valvula mitral y otras anomalias valvulares cardiacas",
      "Diverticulosis colonica con mayor riesgo de perforacion",
      "Hernias inguinales y de pared abdominal",
      "Dolor cronico debilitante"
    ],
    "complicacionesEn": [
      "End-stage kidney disease (50% of PKD1 patients by age 60)",
      "Intracranial aneurysms with risk of subarachnoid hemorrhage (5-10%)",
      "Massive hepatic cysts with symptomatic hepatomegaly (more severe in women)",
      "Recurrent infections of renal and hepatic cysts",
      "Massive hematuria from cyst rupture",
      "Uric acid and calcium oxalate kidney stones",
      "Mitral valve prolapse and other cardiac valve abnormalities",
      "Colonic diverticulosis with increased perforation risk",
      "Inguinal and abdominal wall hernias",
      "Debilitating chronic pain"
    ],
    "cuandoConsultarEs": "Consulte a nefrologia si tiene antecedentes familiares de enfermedad poliquistica renal para tamizaje y seguimiento apropiado. Acuda a urgencias ante: dolor de cabeza severo y subito (posible ruptura de aneurisma intracraneal, la complicacion mas peligrosa), hematuria profusa, fiebre con dolor en flanco (infeccion de quiste), dolor abdominal agudo severo, o dificultad para respirar. Consulte si nota aumento progresivo del tamano abdominal, presion arterial dificil de controlar, o cambios en la orina. Las mujeres que planean embarazo deben discutir riesgos y consejeria genetica previamente. El seguimiento regular con nefrologia permite optimizar el momento de inicio de tolvaptan y preparacion para terapia de reemplazo renal.",
    "cuandoConsultarEn": "Consult nephrology if you have a family history of polycystic kidney disease for appropriate screening and follow-up. Go to the emergency room for: sudden severe headache (possible ruptured intracranial aneurysm, the most dangerous complication), profuse hematuria, fever with flank pain (cyst infection), severe acute abdominal pain, or difficulty breathing. Consult if you notice progressive increase in abdominal size, hard-to-control blood pressure, or changes in urine. Women planning pregnancy should discuss risks and genetic counseling beforehand. Regular nephrology follow-up allows optimizing the timing of tolvaptan initiation and preparation for renal replacement therapy."
  }
]`);

// ── Helper functions ────────────────────────────────────────────────

export function buscarNefrologia(termino: string): NefrologiaEntry[] {
  const t = termino.toLowerCase();
  return NEFROLOGIA_ENTRIES.filter(
    (e) =>
      e.nombreEs.toLowerCase().includes(t) ||
      e.nombreEn.toLowerCase().includes(t) ||
      e.descripcionEs.toLowerCase().includes(t) ||
      e.descripcionEn.toLowerCase().includes(t)
  );
}

export function getNefrologiaById(id: string): NefrologiaEntry | undefined {
  return NEFROLOGIA_ENTRIES.find((e) => e.id === id);
}

export function getNefrologiaPorCategoria(categoria: string): NefrologiaEntry[] {
  const c = categoria.toLowerCase();
  return NEFROLOGIA_ENTRIES.filter(
    (e) =>
      e.categoriaEs.toLowerCase().includes(c) ||
      e.categoriaEn.toLowerCase().includes(c)
  );
}
