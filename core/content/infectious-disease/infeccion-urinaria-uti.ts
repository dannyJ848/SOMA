import { EducationalContent } from '../types';

export const infeccionUrinariaUti: EducationalContent = {
  id: 'condition-infeccion-urinaria-uti',
  type: 'condition',
  name: 'Urinary Tract Infection (UTI)',
  nameEs: 'Infeccion del Tracto Urinario (ITU)',
  alternateNames: ['Infeccion urinaria', 'Cistitis', 'Pielonefritis', 'Cystitis', 'Pyelonephritis', 'Bladder infection', 'Kidney infection'],
  levels: {
    1: {
      level: 1,
      summary: 'Una infeccion urinaria ocurre cuando las bacterias entran al sistema urinario (vejiga, rinones, ureteres o uretra) y causan infeccion. Es muy comun, especialmente en mujeres, y generalmente se trata facilmente con antibioticos. | A urinary tract infection happens when bacteria enter the urinary system (bladder, kidneys, ureters, or urethra) and cause infection. It is very common, especially in women, and usually treated easily with antibiotics.',
      explanation: `## Explicacion

Una infeccion urinaria (ITU) ocurre cuando germenes, usualmente bacterias, entran al sistema que produce y elimina la orina. Tu sistema urinario incluye los rinones (que filtran la sangre y producen orina), los ureteres (tubos que llevan la orina al deposito), la vejiga (el deposito de orina) y la uretra (el tubo por donde sale la orina).

**Tipos de infeccion urinaria:**
- **Cistitis (infeccion de la vejiga):** La mas comun. Causa dolor al orinar, necesidad de ir al bano frecuentemente, y orina turbia o con mal olor.
- **Pielonefritis (infeccion del rinon):** Mas seria. Causa fiebre alta, dolor en la espalda baja y nauseas. Puede ser peligrosa si no se trata.
- **Uretritis (infeccion de la uretra):** Causa ardor al orinar.

**Por que son mas comunes en mujeres:**
Las mujeres tienen una uretra mas corta que los hombres, lo que hace mas facil que las bacterias lleguen a la vejiga. La bacteria mas comun que causa infecciones urinarias es E. coli, que normalmente vive en el intestino.

**Senales de una infeccion urinaria:**
- Ardor o dolor al orinar
- Necesidad urgente de ir al bano con frecuencia
- Orina turbia, oscura, o con olor fuerte
- Dolor en la parte baja del abdomen
- Sentirse cansado o tembloroso
- Fiebre y dolor de espalda (si llega al rinon)

**Tratamiento:**
- Antibioticos recetados por el medico
- Tomar mucha agua para ayudar a eliminar las bacterias
- No aguantar las ganas de ir al bano

**Prevencion:**
- Tomar suficiente agua durante el dia
- Orinar despues de tener relaciones sexuales
- Limpiarse de adelante hacia atras despues de ir al bano
- Evitar productos irritantes en el area genital
- No usar ropa interior muy ajustada

---
## Explanation

A urinary tract infection (UTI) happens when germs, usually bacteria, enter the system that produces and eliminates urine. Your urinary system includes the kidneys (which filter blood and produce urine), the ureters (tubes carrying urine to the reservoir), the bladder (urine reservoir), and the urethra (the tube through which urine exits).

**Types of urinary tract infection:**
- **Cystitis (bladder infection):** Most common. Causes pain when urinating, frequent need to go to the bathroom, and cloudy or foul-smelling urine.
- **Pyelonephritis (kidney infection):** More serious. Causes high fever, lower back pain, and nausea. Can be dangerous if not treated.
- **Urethritis (urethra infection):** Causes burning during urination.

**Why they are more common in women:**
Women have a shorter urethra than men, making it easier for bacteria to reach the bladder. The most common bacterium causing UTIs is E. coli, which normally lives in the intestine.

**Signs of a urinary tract infection:**
- Burning or pain when urinating
- Urgent and frequent need to use the bathroom
- Cloudy, dark, or strong-smelling urine
- Pain in the lower abdomen
- Feeling tired or shaky
- Fever and back pain (if it reaches the kidney)

**Treatment:**
- Antibiotics prescribed by the doctor
- Drink plenty of water to help flush out bacteria
- Do not hold in the urge to urinate

**Prevention:**
- Drink enough water throughout the day
- Urinate after sexual intercourse
- Wipe from front to back after using the bathroom
- Avoid irritating products in the genital area
- Do not wear overly tight underwear`,
      keyTerms: [
        { term: 'Infeccion urinaria (ITU) / Urinary Tract Infection (UTI)', definition: 'Infeccion causada por bacterias en cualquier parte del sistema urinario. | Infection caused by bacteria in any part of the urinary system.' },
        { term: 'Vejiga / Bladder', definition: 'El organo en forma de bolsa que almacena la orina. | The bag-shaped organ that stores urine.' },
        { term: 'Rinon / Kidney', definition: 'Organo que filtra la sangre y produce orina. Tienes dos rinones. | Organ that filters blood and produces urine. You have two kidneys.' },
        { term: 'Uretra / Urethra', definition: 'El tubo por donde la orina sale del cuerpo. | The tube through which urine leaves the body.' },
        { term: 'E. coli', definition: 'Bacteria que normalmente vive en el intestino pero puede causar infeccion si entra al tracto urinario. | Bacteria that normally lives in the intestine but can cause infection if it enters the urinary tract.' }
      ],
      analogies: [
        'Tu sistema urinario es como un sistema de plomeria. La infeccion urinaria es como cuando una tuberia se tapa con suciedad y necesita ser limpiada. | Your urinary system is like a plumbing system. A UTI is like when a pipe gets clogged with dirt and needs to be cleaned.',
        'Las bacterias que causan infecciones urinarias son como intrusos que entran por la puerta (la uretra). En las mujeres, la puerta esta mas cerca del jardin (el intestino), por eso es mas facil que entren. | Bacteria causing UTIs are like intruders entering through the door (urethra). In women, the door is closer to the garden (intestine), so it is easier for them to get in.'
      ],
      examples: [
        'Una mujer de 25 anos que siente ardor al orinar y va al bano cada 15 minutos pero solo sale un poquito de orina probablemente tiene una cistitis (infeccion de la vejiga). | A 25-year-old woman who feels burning when urinating and goes to the bathroom every 15 minutes but only a little urine comes out probably has cystitis (bladder infection).',
        'Un hombre de 70 anos con cateter urinario que desarrolla fiebre y orina turbia necesita evaluacion para infeccion urinaria. | A 70-year-old man with a urinary catheter who develops fever and cloudy urine needs evaluation for urinary tract infection.'
      ],
      patientCounselingPoints: [
        'Tome todos los antibioticos que le recetaron, incluso si se siente mejor antes de terminarlos. | Take all the antibiotics prescribed, even if you feel better before finishing them.',
        'Tome al menos 6-8 vasos de agua al dia para ayudar a eliminar las bacterias. | Drink at least 6-8 glasses of water a day to help flush out bacteria.',
        'Si tiene fiebre alta, dolor en la espalda, o vomito, vaya al doctor inmediatamente porque la infeccion puede haber llegado a los rinones. | If you have high fever, back pain, or vomiting, go to the doctor immediately because the infection may have reached the kidneys.',
        'Las mujeres deben orinar despues de tener relaciones sexuales para reducir el riesgo de infeccion. | Women should urinate after sexual intercourse to reduce the risk of infection.'
      ]
    },
    2: {
      level: 2,
      summary: 'Las infecciones del tracto urinario (ITU) se clasifican en cistitis no complicada, ITU complicada y pielonefritis. E. coli es el patogeno mas comun (75-90%). El diagnostico se basa en sintomas, urinalisis y urocultivo. El tratamiento depende de la localizacion y la complejidad. | Urinary tract infections (UTIs) are classified into uncomplicated cystitis, complicated UTI, and pyelonephritis. E. coli is the most common pathogen (75-90%). Diagnosis is based on symptoms, urinalysis, and urine culture. Treatment depends on location and complexity.',
      explanation: `## Explicacion

Las infecciones del tracto urinario son una de las infecciones bacterianas mas comunes, afectando a millones de personas cada ano. Aproximadamente 50-60% de las mujeres tendran al menos una ITU en su vida.

**Clasificacion:**

*ITU no complicada (cistitis aguda):*
- Infeccion limitada a la vejiga en mujeres premenopausicas, no embarazadas, sin anomalias del tracto urinario
- Sintomas: disuria, frecuencia, urgencia, dolor suprapubico
- Bajo riesgo de complicaciones

*ITU complicada:*
- Cualquier ITU en hombres
- ITU en embarazadas
- Pacientes con anomalias anatomicas o funcionales del tracto urinario
- Pacientes con sondas urinarias
- Pacientes inmunosuprimidos o con diabetes
- Infeccion por patogenos resistentes

*Pielonefritis aguda:*
- Infeccion del rinon (parenquima renal y pelvis renal)
- Sintomas: fiebre >= 38°C, dolor en flanco, nauseas/vomito
- Puede acompanarse de sintomas de cistitis
- Riesgo de bacteremia y sepsis

*Bacteriuria asintomatica:*
- Presencia de bacterias en orina sin sintomas
- Solo tratar en: embarazadas y antes de procedimientos urologicos invasivos
- NO tratar en ancianos, diabeticos o pacientes con sonda (excepciones limitadas)

**Patogenos:**
- Escherichia coli: 75-90% de ITU no complicadas, 50% de complicadas
- Klebsiella pneumoniae: 5-10%
- Proteus mirabilis: 5% (asociado a calculos de estruvita)
- Staphylococcus saprophyticus: 5-10% en mujeres jovenes
- Enterococcus spp.: mas comun en ITU complicada/nosocomial
- Pseudomonas aeruginosa: ITU asociada a cateter/nosocomial

**Diagnostico:**

*Urinalisis:*
- Esterasa leucocitaria: indica presencia de leucocitos (sensibilidad 75-95%)
- Nitritos: indica bacterias que reducen nitratos (Enterobacterias); falso negativo con Enterococcus, Pseudomonas, Staphylococcus
- Piuria: > 10 leucocitos/campo de alto poder
- Bacteriuria: presencia de bacterias en tincion

*Urocultivo:*
- Estandar de oro para diagnostico
- Positivo: >= 10^5 UFC/mL en muestra de chorro medio
- Puede ser significativo con > 10^2-10^3 UFC/mL en pacientes sintomaticos
- Obtener antes de antibioticos en: ITU complicada, pielonefritis, fallo terapeutico, recurrencias

**Tratamiento:**

*Cistitis no complicada (primera linea):*
- Nitrofurantoina 100 mg c/12h x 5 dias
- Trimetoprim-sulfametoxazol (TMP-SMX) 160/800 mg c/12h x 3 dias (si resistencia local < 20%)
- Fosfomicina 3g dosis unica

*Cistitis no complicada (segunda linea):*
- Fluoroquinolonas (ciprofloxacino, levofloxacino) — reservar por efectos adversos
- Beta-lactamicos (amoxicilina-clavulanato, cefalexina) — menos efectivos

*Pielonefritis ambulatoria:*
- Ciprofloxacino 500 mg c/12h x 7 dias
- TMP-SMX 160/800 mg c/12h x 14 dias (si susceptible)
- Ceftriaxona 1g IV dosis unica seguida de oral

*Pielonefritis hospitalizada:*
- Ceftriaxona 1-2g IV/dia
- Ciprofloxacino 400 mg IV c/12h
- Ampicilina + gentamicina (si sospecha de Enterococcus)
- Cambiar a via oral cuando afebril 48-72 horas

*ITU complicada:*
- Fluoroquinolonas o cefalosporinas de tercera generacion
- Ajustar segun urocultivo y antibiograma
- Duracion: 7-14 dias dependiendo de la fuente

**Prevencion de ITU recurrentes:**
- Profilaxis continua: nitrofurantoina 50-100 mg al acostarse
- Profilaxis postcoital: TMP-SMX o nitrofurantoina despues de relaciones
- Estrogenos vaginales topicos en mujeres posmenopausicas
- Arandano: evidencia mixta, posible beneficio modesto

---
## Explanation

Urinary tract infections are one of the most common bacterial infections, affecting millions of people each year. Approximately 50-60% of women will have at least one UTI in their lifetime.

**Classification:**

*Uncomplicated UTI (acute cystitis):*
- Infection limited to the bladder in premenopausal, non-pregnant women without urinary tract abnormalities
- Symptoms: dysuria, frequency, urgency, suprapubic pain
- Low risk of complications

*Complicated UTI:*
- Any UTI in men
- UTI in pregnant women
- Patients with anatomical or functional urinary tract abnormalities
- Patients with urinary catheters
- Immunosuppressed or diabetic patients
- Infection with resistant pathogens

*Acute pyelonephritis:*
- Kidney infection (renal parenchyma and renal pelvis)
- Symptoms: fever >= 38°C, flank pain, nausea/vomiting
- May be accompanied by cystitis symptoms
- Risk of bacteremia and sepsis

*Asymptomatic bacteriuria:*
- Presence of bacteria in urine without symptoms
- Only treat in: pregnant women and before invasive urological procedures
- DO NOT treat in elderly, diabetics, or catheterized patients (limited exceptions)

**Pathogens:**
- Escherichia coli: 75-90% of uncomplicated, 50% of complicated UTIs
- Klebsiella pneumoniae: 5-10%
- Proteus mirabilis: 5% (associated with struvite stones)
- Staphylococcus saprophyticus: 5-10% in young women
- Enterococcus spp.: more common in complicated/nosocomial UTI
- Pseudomonas aeruginosa: catheter-associated/nosocomial UTI

**Diagnosis:**

*Urinalysis:*
- Leukocyte esterase: indicates presence of leukocytes (sensitivity 75-95%)
- Nitrites: indicates bacteria that reduce nitrates (Enterobacteriaceae); false negative with Enterococcus, Pseudomonas, Staphylococcus
- Pyuria: > 10 WBC/high-power field
- Bacteriuria: presence of bacteria on stain

*Urine culture:*
- Gold standard for diagnosis
- Positive: >= 10^5 CFU/mL in midstream sample
- May be significant at > 10^2-10^3 CFU/mL in symptomatic patients
- Obtain before antibiotics in: complicated UTI, pyelonephritis, treatment failure, recurrences

**Treatment:**

*Uncomplicated cystitis (first line):*
- Nitrofurantoin 100 mg q12h x 5 days
- Trimethoprim-sulfamethoxazole (TMP-SMX) 160/800 mg q12h x 3 days (if local resistance < 20%)
- Fosfomycin 3g single dose

*Uncomplicated cystitis (second line):*
- Fluoroquinolones (ciprofloxacin, levofloxacin) — reserve due to adverse effects
- Beta-lactams (amoxicillin-clavulanate, cephalexin) — less effective

*Outpatient pyelonephritis:*
- Ciprofloxacin 500 mg q12h x 7 days
- TMP-SMX 160/800 mg q12h x 14 days (if susceptible)
- Ceftriaxone 1g IV single dose followed by oral

*Inpatient pyelonephritis:*
- Ceftriaxone 1-2g IV/day
- Ciprofloxacin 400 mg IV q12h
- Ampicillin + gentamicin (if Enterococcus suspected)
- Switch to oral when afebrile 48-72 hours

*Complicated UTI:*
- Fluoroquinolones or third-generation cephalosporins
- Adjust based on urine culture and sensitivity
- Duration: 7-14 days depending on source

**Prevention of recurrent UTIs:**
- Continuous prophylaxis: nitrofurantoin 50-100 mg at bedtime
- Postcoital prophylaxis: TMP-SMX or nitrofurantoin after intercourse
- Topical vaginal estrogens in postmenopausal women
- Cranberry: mixed evidence, possible modest benefit`,
      keyTerms: [
        { term: 'Cistitis / Cystitis', definition: 'Infeccion limitada a la vejiga; el tipo mas comun de ITU. | Infection limited to the bladder; the most common type of UTI.' },
        { term: 'Pielonefritis / Pyelonephritis', definition: 'Infeccion del rinon, mas seria que la cistitis; causa fiebre, dolor en flanco y puede complicarse con sepsis. | Kidney infection, more serious than cystitis; causes fever, flank pain, and can be complicated by sepsis.' },
        { term: 'Disuria / Dysuria', definition: 'Dolor o ardor al orinar; es el sintoma mas caracteristico de la cistitis. | Pain or burning during urination; the most characteristic cystitis symptom.' },
        { term: 'Bacteriuria asintomatica / Asymptomatic bacteriuria', definition: 'Bacterias en la orina sin sintomas; solo se trata en embarazadas y antes de cirugias urologicas. | Bacteria in urine without symptoms; only treated in pregnant women and before urological surgeries.' },
        { term: 'Urocultivo / Urine culture', definition: 'Examen de laboratorio que identifica la bacteria exacta causante de la infeccion y a que antibioticos es sensible. | Lab test identifying the exact bacteria causing the infection and which antibiotics it is sensitive to.' },
        { term: 'Nitrofurantoina / Nitrofurantoin', definition: 'Antibiotico de primera linea para cistitis no complicada; se concentra en la orina y tiene baja resistencia. | First-line antibiotic for uncomplicated cystitis; concentrates in urine and has low resistance.' },
        { term: 'Esterasa leucocitaria / Leukocyte esterase', definition: 'Enzima en la tira reactiva de orina que indica presencia de leucocitos (celulas de defensa), sugerente de infeccion. | Enzyme on urine dipstick indicating presence of leukocytes (defense cells), suggestive of infection.' }
      ],
      analogies: [
        'El urocultivo es como tomar la huella digital de la bacteria — te dice exactamente quien es y que armas (antibioticos) la pueden derrotar. | The urine culture is like taking the bacteria\'s fingerprint — it tells you exactly who it is and what weapons (antibiotics) can defeat it.',
        'Tratar la bacteriuria asintomatica es como llamar a los bomberos cuando no hay fuego — no solo es innecesario, sino que puede causar dano (resistencia a antibioticos). | Treating asymptomatic bacteriuria is like calling the fire department when there is no fire — not only unnecessary, but it can cause harm (antibiotic resistance).'
      ],
      examples: [
        'Una mujer de 28 anos con disuria y frecuencia urinaria sin fiebre puede tratarse empiricamente con nitrofurantoina por 5 dias sin necesidad de urocultivo. | A 28-year-old woman with dysuria and urinary frequency without fever can be treated empirically with nitrofurantoin for 5 days without needing a urine culture.',
        'Un hombre de 60 anos con disuria y fiebre de 38.5°C necesita urocultivo antes de iniciar antibioticos porque cualquier ITU en hombres se considera complicada. | A 60-year-old man with dysuria and fever of 38.5°C needs a urine culture before starting antibiotics because any UTI in men is considered complicated.'
      ],
      patientCounselingPoints: [
        'La nitrofurantoina puede oscurecer la orina a color marron; esto es normal y no debe preocuparle. Tomela con comida para reducir nauseas. | Nitrofurantoin may darken your urine to a brown color; this is normal and should not worry you. Take it with food to reduce nausea.',
        'Si tiene infecciones urinarias recurrentes (3 o mas al ano), hable con su medico sobre opciones de prevencion. | If you have recurrent urinary infections (3 or more per year), talk to your doctor about prevention options.'
      ]
    },
    3: {
      level: 3,
      summary: 'Las ITU involucran una interaccion entre factores de virulencia uropatogenos (especialmente E. coli uropatogenica), defensas del huesped y factores anatomicos/funcionales. El manejo basado en evidencia requiere clasificacion precisa, uso juicioso de estudios diagnosticos, seleccion antimicrobiana que considere patrones de resistencia local, y estrategias de prevencion individualizadas. | UTIs involve an interaction between uropathogenic virulence factors (especially uropathogenic E. coli), host defenses, and anatomical/functional factors. Evidence-based management requires precise classification, judicious use of diagnostic studies, antimicrobial selection considering local resistance patterns, and individualized prevention strategies.',
      explanation: `## Explicacion

**Patogenesis detallada:**

*Mecanismos de virulencia de E. coli uropatogenica (UPEC):*
- Fimbrias tipo 1 (adhesina FimH): se adhieren a uroplaquinas en el epitelio vesical
- Fimbrias P (PapG): se adhieren a receptores Gal-alfa(1-4)Gal en epitelio renal — asociadas con pielonefritis
- Alfa-hemolisina (HlyA): toxina que forma poros, causa lisis de celulas epiteliales y eritrocitos
- Factor necrotizante citotoxico (CNF1): modula el citoesqueleto de la celula huesped
- Sideroforos (aerobactina, enterobactina, yersiniabactina): captacion de hierro para crecimiento
- Lipopolisacarido (LPS): activa TLR-4 en celulas epiteliales, desencadenando respuesta inflamatoria
- Comunidades bacterianas intracelulares (IBCs): UPEC invade las celulas epiteliales vesicales, forma comunidades tipo biofilm intracelulares que evaden antibioticos y el sistema inmune — explica recurrencias

*Defensas del huesped:*
- Flujo urinario y vaciamiento vesical: efecto "lavado" mecanico
- Uroplaquinas: barrera epitelial vesical
- Proteina de Tamm-Horsfall (uromodulina): glicoproteina urinaria que se une a fimbrias tipo 1, previniendo adhesion
- Peptidos antimicrobianos: defensinas (HBD-1, HBD-2), catelicidina (LL-37)
- IgA secretoria urinaria
- pH acido de la orina y concentracion de urea
- Microbiota vaginal y uretral: Lactobacillus spp. mantienen pH acido

*Factores de riesgo por mecanismo:*
- Alteracion del flujo: obstruccion (HPB, calculos, estenosis), residuo postmiccional elevado
- Inoculacion: relaciones sexuales, instrumentacion (sondas, cistoscopia)
- Alteracion de la flora: antibioticos, espermicidas (noxynol-9 destruye Lactobacillus)
- Deficit inmune: diabetes, inmunosupresion, embarazo
- Anatomicos: uretra femenina corta, reflujo vesicoureteral

**Diagnostico avanzado:**

*Urinalisis microscópica:*
- Piuria: > 10 leucocitos/campo (alta potencia); indicador sensible de ITU
- Cilindros leucocitarios: patognomonicos de pielonefritis
- Bacteriuria: > 1 bacteria por campo de inmersion en aceite correlaciona con >= 10^5 UFC/mL
- Hematuria: comun en cistitis (microhematuria en 40-60%)

*Tira reactiva:*
- Esterasa leucocitaria: sensibilidad 75-96%, especificidad 94-98%
- Nitritos: sensibilidad 22-55% (muchos falsos negativos), especificidad 92-100%
- Combinacion de ambos: sensibilidad aumentada
- Limitaciones: falsos negativos de nitritos con Enterococcus, Pseudomonas, Staphylococcus, orina diluida, o si la orina estuvo < 4 horas en vejiga

*Urocultivo e interpretacion:*
- Estandar diagnostico: muestra de chorro medio, limpia
- Criterios de positividad:
  - Mujer sintomatica: >= 10^2-10^3 UFC/mL (umbral bajo aceptado)
  - Hombre sintomatico: >= 10^3 UFC/mL
  - Cateterizacion: >= 10^2 UFC/mL
  - Bacteriuria asintomatica: >= 10^5 UFC/mL en 2 muestras consecutivas
- Cultivo polimicrobiano: generalmente contaminacion (excepcion: pacientes con sonda cronica)

**ITU asociada a cateter (CAUTI):**
- Definicion: ITU en paciente con sonda vesical presente o retirada en las ultimas 48 horas
- Patogenesis: biofilm en la sonda sirve como reservorio bacteriano
- Patogenos: E. coli, Klebsiella, Proteus, Enterococcus, Candida, Pseudomonas
- Manejo:
  - Retirar o cambiar el cateter antes de iniciar antibioticos
  - Tratamiento 7 dias si resolucion rapida, 10-14 dias si respuesta lenta
  - El diagnostico requiere sintomas (no tratar bacteriuria asintomatica con sonda)

**ITU en el embarazo:**
- La bacteriuria asintomatica DEBE tratarse (riesgo de pielonefritis 20-30% si no se trata; asociada con parto prematuro y bajo peso al nacer)
- Cribado: urocultivo en primera visita prenatal
- Antibioticos seguros: nitrofurantoina (evitar en primer trimestre y cerca del termino), cefalexina, amoxicilina-clavulanato
- CONTRAINDICADOS: fluoroquinolonas, TMP-SMX (primer trimestre: teratogenicidad; tercer trimestre: kernicterus)

**ITU recurrente:**
- Definicion: >= 2 episodios en 6 meses o >= 3 en 12 meses
- Diferenciar reinfeccion (nueva cepa) de recaida (misma cepa, tratamiento inadecuado)
- Evaluacion: urografia por TC o cistoscopia solo si se sospecha anomalia anatomica, hematuria o patogenos inusuales
- Estrategias de prevencion:
  - Profilaxis continua a dosis baja: nitrofurantoina 50-100 mg/noche x 6-12 meses
  - Profilaxis postcoital: TMP-SMX 80/400 mg o nitrofurantoina 50-100 mg
  - Autotratamiento iniciado por paciente (3 dias de antibiotico al primer sintoma)
  - Estrogenos vaginales topicos en posmenopausicas (restaura Lactobacillus)
  - D-manosa: 2g/dia, puede prevenir adhesion de UPEC, evidencia prometedora pero limitada
  - Methenamine hippurate: alternativa no antibiotica, se convierte en formaldehido en orina acida

---
## Explanation

**Detailed pathogenesis:**

*Uropathogenic E. coli (UPEC) virulence mechanisms:*
- Type 1 fimbriae (FimH adhesin): adhere to uroplakins on bladder epithelium
- P fimbriae (PapG): adhere to Gal-alpha(1-4)Gal receptors on renal epithelium — associated with pyelonephritis
- Alpha-hemolysin (HlyA): pore-forming toxin, causes lysis of epithelial cells and erythrocytes
- Cytotoxic necrotizing factor (CNF1): modulates host cell cytoskeleton
- Siderophores (aerobactin, enterobactin, yersiniabactin): iron acquisition for growth
- Lipopolysaccharide (LPS): activates TLR-4 on epithelial cells, triggering inflammatory response
- Intracellular bacterial communities (IBCs): UPEC invades bladder epithelial cells, forms intracellular biofilm-like communities that evade antibiotics and immune system — explains recurrences

*Host defenses:*
- Urinary flow and bladder emptying: mechanical "washout" effect
- Uroplakins: bladder epithelial barrier
- Tamm-Horsfall protein (uromodulin): urinary glycoprotein binding type 1 fimbriae, preventing adhesion
- Antimicrobial peptides: defensins (HBD-1, HBD-2), cathelicidin (LL-37)
- Urinary secretory IgA
- Acidic urine pH and urea concentration
- Vaginal and urethral microbiota: Lactobacillus spp. maintain acidic pH

*Risk factors by mechanism:*
- Flow alteration: obstruction (BPH, stones, strictures), elevated post-void residual
- Inoculation: sexual intercourse, instrumentation (catheters, cystoscopy)
- Flora disruption: antibiotics, spermicides (nonoxynol-9 destroys Lactobacillus)
- Immune deficit: diabetes, immunosuppression, pregnancy
- Anatomical: short female urethra, vesicoureteral reflux

**Advanced diagnosis:**

*Microscopic urinalysis:*
- Pyuria: > 10 WBC/high-power field; sensitive UTI indicator
- WBC casts: pathognomonic of pyelonephritis
- Bacteriuria: > 1 bacterium per oil immersion field correlates with >= 10^5 CFU/mL
- Hematuria: common in cystitis (microhematuria in 40-60%)

*Dipstick:*
- Leukocyte esterase: sensitivity 75-96%, specificity 94-98%
- Nitrites: sensitivity 22-55% (many false negatives), specificity 92-100%
- Combination of both: increased sensitivity
- Limitations: nitrite false negatives with Enterococcus, Pseudomonas, Staphylococcus, dilute urine, or if urine was in bladder < 4 hours

*Urine culture and interpretation:*
- Diagnostic standard: clean-catch midstream sample
- Positivity criteria:
  - Symptomatic woman: >= 10^2-10^3 CFU/mL (low threshold accepted)
  - Symptomatic man: >= 10^3 CFU/mL
  - Catheterization: >= 10^2 CFU/mL
  - Asymptomatic bacteriuria: >= 10^5 CFU/mL in 2 consecutive samples
- Polymicrobial culture: generally contamination (exception: chronic catheter patients)

**Catheter-associated UTI (CAUTI):**
- Definition: UTI in patient with catheter present or removed within last 48 hours
- Pathogenesis: biofilm on catheter serves as bacterial reservoir
- Pathogens: E. coli, Klebsiella, Proteus, Enterococcus, Candida, Pseudomonas
- Management:
  - Remove or change catheter before starting antibiotics
  - Treatment 7 days if rapid resolution, 10-14 days if slow response
  - Diagnosis requires symptoms (do not treat catheter-associated asymptomatic bacteriuria)

**UTI in pregnancy:**
- Asymptomatic bacteriuria MUST be treated (20-30% risk of pyelonephritis if untreated; associated with preterm labor and low birth weight)
- Screening: urine culture at first prenatal visit
- Safe antibiotics: nitrofurantoin (avoid in first trimester and near term), cephalexin, amoxicillin-clavulanate
- CONTRAINDICATED: fluoroquinolones, TMP-SMX (first trimester: teratogenicity; third trimester: kernicterus)

**Recurrent UTI:**
- Definition: >= 2 episodes in 6 months or >= 3 in 12 months
- Differentiate reinfection (new strain) from relapse (same strain, inadequate treatment)
- Evaluation: CT urography or cystoscopy only if anatomic abnormality, hematuria, or unusual pathogens suspected
- Prevention strategies:
  - Low-dose continuous prophylaxis: nitrofurantoin 50-100 mg/night x 6-12 months
  - Postcoital prophylaxis: TMP-SMX 80/400 mg or nitrofurantoin 50-100 mg
  - Patient-initiated self-treatment (3 days of antibiotic at first symptom)
  - Topical vaginal estrogens in postmenopausal women (restores Lactobacillus)
  - D-mannose: 2g/day, may prevent UPEC adhesion, promising but limited evidence
  - Methenamine hippurate: non-antibiotic alternative, converts to formaldehyde in acidic urine`,
      keyTerms: [
        { term: 'UPEC / E. coli uropatogenica', definition: 'Cepas de E. coli con factores de virulencia especificos (fimbrias tipo 1, fimbrias P, hemolisinas) que les permiten colonizar e invadir el tracto urinario. | E. coli strains with specific virulence factors (type 1 fimbriae, P fimbriae, hemolysins) allowing them to colonize and invade the urinary tract.' },
        { term: 'Comunidades bacterianas intracelulares (IBCs)', definition: 'UPEC invade celulas epiteliales vesicales y forma comunidades tipo biofilm dentro de las celulas, evadiendo antibioticos y respuesta inmune; mecanismo clave de ITU recurrentes. | UPEC invades bladder epithelial cells and forms biofilm-like communities inside cells, evading antibiotics and immune response; key mechanism of recurrent UTIs.' },
        { term: 'Cilindros leucocitarios / WBC casts', definition: 'Aglomeraciones de leucocitos formadas en los tubulos renales; su presencia en orina es patognomonica de infeccion renal (pielonefritis). | White blood cell aggregates formed in renal tubules; their presence in urine is pathognomonic of kidney infection (pyelonephritis).' },
        { term: 'CAUTI / ITU asociada a cateter', definition: 'Infeccion urinaria en paciente con sonda vesical presente o recientemente retirada; el biofilm del cateter es el reservorio principal. | UTI in patient with urinary catheter present or recently removed; the catheter biofilm is the main reservoir.' },
        { term: 'Uromodulina / Tamm-Horsfall protein', definition: 'Glicoproteina urinaria producida en el asa de Henle que se une a fimbrias tipo 1 de UPEC, funcionando como trampa molecular contra la adhesion bacteriana. | Urinary glycoprotein produced in the loop of Henle that binds type 1 fimbriae of UPEC, functioning as a molecular trap against bacterial adhesion.' },
        { term: 'D-manosa / D-mannose', definition: 'Azucar simple que compite con uroplaquinas por la union a fimbrias tipo 1 de UPEC; estrategia preventiva no antibiotica para ITU recurrentes. | Simple sugar competing with uroplakins for binding to UPEC type 1 fimbriae; non-antibiotic preventive strategy for recurrent UTIs.' }
      ],
      clinicalNotes: `**Notas clinicas:**
- NO tratar bacteriuria asintomatica en ancianos: no reduce mortalidad ni complicaciones, y aumenta resistencia antimicrobiana y efectos adversos
- La presencia de orina turbia o con mal olor NO es indicacion de tratamiento antibiotico en pacientes asintomaticos
- En ITU recurrente, obtener urocultivo para confirmar diagnostico antes de cada episodio de tratamiento
- Nitrofurantoina NO debe usarse en pielonefritis (no alcanza concentraciones adecuadas en tejido renal) ni en pacientes con TFG < 30 mL/min
- La fosfomicina como dosis unica es menos efectiva que otros regimenes pero tiene la ventaja de una sola dosis y baja resistencia
- En hombres con ITU recurrente, descartar prostatitis cronica: tacto rectal, PSA, considerar secreciones prostaticas expresadas
- Fluoroquinolonas: la FDA recomienda reservar para cuando no hay alternativa debido a riesgo de tendinopatia, neuropatia periferica, diseccion aortica y efectos neuropsiquiatricos

**Clinical notes:**
- Do NOT treat asymptomatic bacteriuria in the elderly: does not reduce mortality or complications, and increases antimicrobial resistance and adverse effects
- Cloudy or foul-smelling urine is NOT an indication for antibiotic treatment in asymptomatic patients
- In recurrent UTI, obtain urine culture to confirm diagnosis before each treatment episode
- Nitrofurantoin should NOT be used for pyelonephritis (does not achieve adequate renal tissue concentrations) or in patients with GFR < 30 mL/min
- Fosfomycin as a single dose is less effective than other regimens but has the advantage of one dose and low resistance
- In men with recurrent UTI, rule out chronic prostatitis: digital rectal exam, PSA, consider expressed prostatic secretions
- Fluoroquinolones: FDA recommends reserving for when no alternative exists due to risk of tendinopathy, peripheral neuropathy, aortic dissection, and neuropsychiatric effects`
    },
    4: {
      level: 4,
      summary: 'Las ITU representan un paradigma de interaccion huesped-patogeno complejo donde los mecanismos de virulencia de UPEC (adhesion fimbrial, invasion celular, formacion de IBCs, captacion de hierro) se contraponen a defensas innatas del urotelio (peptidos antimicrobianos, uromodulina, exfoliacion epitelial), con implicaciones directas para estrategias de manejo antimicrobiano optimizado y terapias anti-virulencia emergentes. | UTIs represent a complex host-pathogen interaction paradigm where UPEC virulence mechanisms (fimbrial adhesion, cellular invasion, IBC formation, iron acquisition) are counterbalanced by innate urothelial defenses (antimicrobial peptides, uromodulin, epithelial exfoliation), with direct implications for optimized antimicrobial management strategies and emerging anti-virulence therapies.',
      explanation: `## Explicacion

**Biologia molecular avanzada de la patogenesis de ITU:**

*Ciclo patogenico de UPEC:*
1. Colonizacion periuretral desde el reservorio intestinal
2. Ascenso por la uretra (facilitado por flagelos y motilidad)
3. Adhesion al urotelio mediante fimbrias tipo 1 (FimH se une a uroplaquina Ia/Ib con manosa)
4. Invasion de celulas uroteliales superficiales (celulas paraguas)
5. Formacion de IBCs: colonias organizadas tipo biofilm dentro de vacuolas citoplasmicas
   - IBCs tempranas: bacterias cocoides empaquetadas densamente
   - IBCs maduras: bacterias filamentosas en matriz extracelular
6. Flujo de bacterias filamentosas hacia la superficie luminal
7. Reinvasion de celulas vecinas e inicio de nuevo ciclo
8. Colonizacion de capas uroteliales profundas: quiescent intracellular reservoirs (QIRs) — bacterias latentes en celulas de la capa basal, indetectables por cultivo estandar, explicando recurrencias tardias

*Respuesta inmune innata del urotelio:*
- TLR-4: reconoce LPS de E. coli, activa NF-kappaB, induce produccion de citoquinas (IL-6, IL-8) y peptidos antimicrobianos
- Exfoliacion epitelial: las celulas paraguas infectadas se descaman hacia la orina como mecanismo de eliminacion — expone capas basales vulnerables
- Autofagia: las celulas uroteliales pueden eliminar bacterias intracelulares mediante autofagia selectiva
- Inflamasoma NLRP3: activado por UPEC, media produccion de IL-1beta; regulacion excesiva contribuye a dano tisular

*Microbioma urinario (urobioma):*
- El tracto urinario NO es esteril: comunidad microbiana de baja biomasa
- Lactobacillus crispatus en el urobioma femenino se asocia con proteccion contra ITU
- Gardnerella vaginalis puede facilitar la emergencia de QIRs de UPEC
- Disbiosis vaginal (vaginosis bacteriana) aumenta el riesgo de ITU

**Resistencia antimicrobiana en ITU:**

*Epidemiologia de resistencia:*
- E. coli resistente a TMP-SMX: 20-40% globalmente (varia por region)
- E. coli resistente a fluoroquinolonas: 15-30% en muchos paises
- E. coli productora de BLEE (beta-lactamasas de espectro extendido): emergente, 10-30%
  - Resistente a cefalosporinas de tercera generacion
  - Carbapenemicos como opcion terapeutica principal
- Enterobacterales productores de carbapenemasas (CRE): amenaza critica
  - KPC (Klebsiella pneumoniae carbapenemasa): mas comun en Americas
  - NDM (New Delhi metallo-beta-lactamasa): prevalente en Asia
  - OXA-48: prevalente en Europa y Africa del Norte
- E. coli resistente a nitrofurantoina: < 5% globalmente (mantiene utilidad)
- Fosfomicina: resistencia baja pero emergente para E. coli

*Mecanismos de resistencia:*
- Beta-lactamasas tipo AmpC: cromosomica en Enterobacter, Citrobacter, Serratia
- BLEE (CTX-M, SHV, TEM): mediadas por plasmidos, transmisibles
- Metalo-beta-lactamasas (NDM, VIM, IMP): hidrolizan carbapenems
- Bombas de eflujo: contribuyen a resistencia a fluoroquinolonas y tetraciclinas
- Alteracion de porinas: disminucion de entrada de antibioticos en Gram-negativos

**Manejo avanzado de ITU por patogenos resistentes:**

*ITU por UPEC productora de BLEE:*
- Cistitis: fosfomicina 3g dosis unica (posible necesidad de dosis repetidas), nitrofurantoina (si susceptible), pivmecillinam
- Pielonefritis/ITU complicada: ertapenem 1g IV/dia o meropenem; considerar aminoglucosidos (gentamicina, amikacina) si susceptible
- Oral step-down: TMP-SMX o fluoroquinolona si susceptible en antibiograma

*ITU por Enterobacterales resistentes a carbapenems (CRE):*
- Opciones: ceftazidima-avibactam (KPC), meropenem-vaborbactam (KPC), cefiderocol (metalobeta-lactamasas), colistina/polimixina B (ultimo recurso)
- Terapia combinada en infecciones severas: carbapenems en dosis alta + polimixina o aminoglucosido
- Consulta con infectologia obligatoria

*ITU fungica (candidiasis urinaria):*
- Mas comun en pacientes con sonda, diabetes, antibioticoterapia prolongada
- Candiduria asintomatica: generalmente no tratar; retirar cateter si posible
- Candidiasis urinaria sintomatica: fluconazol 200-400 mg/dia x 14 dias
- Candida resistente a azoles: anfotericina B desoxicolato (irrigaciones vesicales en casos seleccionados)

**ITU en poblaciones especiales avanzadas:**

*ITU en paciente con lesion medular:*
- Vejiga neurogenica con cateterismo intermitente o sonda permanente
- Bacteriuria cronica esperada — NO tratar si asintomatica
- Sintomas atipicos: aumento de espasticidad, disreflexia autonomica, malestar general
- Patogenos frecuentemente polimicrobianos y resistentes

*ITU en paciente con trasplante renal:*
- Mayor riesgo en primeros 6 meses post-trasplante
- Inmunosupresion altera la presentacion clinica
- Profilaxis con TMP-SMX por 6-12 meses post-trasplante (tambien previene Pneumocystis)
- Riesgo de pielonefritis del injerto con perdida de funcion renal

---
## Explanation

**Advanced molecular biology of UTI pathogenesis:**

*UPEC pathogenic cycle:*
1. Periurethral colonization from intestinal reservoir
2. Urethral ascent (facilitated by flagella and motility)
3. Urothelial adhesion via type 1 fimbriae (FimH binds uroplakin Ia/Ib with mannose)
4. Invasion of superficial urothelial cells (umbrella cells)
5. IBC formation: organized biofilm-like colonies within cytoplasmic vacuoles
   - Early IBCs: densely packed coccoid bacteria
   - Mature IBCs: filamentous bacteria in extracellular matrix
6. Flux of filamentous bacteria to luminal surface
7. Reinvasion of neighboring cells and new cycle initiation
8. Deep urothelial layer colonization: quiescent intracellular reservoirs (QIRs) — dormant bacteria in basal layer cells, undetectable by standard culture, explaining late recurrences

*Urothelial innate immune response:*
- TLR-4: recognizes E. coli LPS, activates NF-kappaB, induces cytokine (IL-6, IL-8) and antimicrobial peptide production
- Epithelial exfoliation: infected umbrella cells shed into urine as elimination mechanism — exposes vulnerable basal layers
- Autophagy: urothelial cells can eliminate intracellular bacteria through selective autophagy
- NLRP3 inflammasome: activated by UPEC, mediates IL-1beta production; excessive activation contributes to tissue damage

*Urinary microbiome (urobiome):*
- The urinary tract is NOT sterile: low-biomass microbial community
- Lactobacillus crispatus in female urobiome is associated with UTI protection
- Gardnerella vaginalis can facilitate emergence of UPEC QIRs
- Vaginal dysbiosis (bacterial vaginosis) increases UTI risk

**Antimicrobial resistance in UTI:**

*Resistance epidemiology:*
- TMP-SMX-resistant E. coli: 20-40% globally (varies by region)
- Fluoroquinolone-resistant E. coli: 15-30% in many countries
- ESBL-producing E. coli (extended-spectrum beta-lactamases): emerging, 10-30%
  - Resistant to third-generation cephalosporins
  - Carbapenems as main therapeutic option
- Carbapenem-resistant Enterobacterales (CRE): critical threat
  - KPC (Klebsiella pneumoniae carbapenemase): most common in Americas
  - NDM (New Delhi metallo-beta-lactamase): prevalent in Asia
  - OXA-48: prevalent in Europe and North Africa
- Nitrofurantoin-resistant E. coli: < 5% globally (maintains utility)
- Fosfomycin: low but emerging resistance for E. coli

*Resistance mechanisms:*
- AmpC-type beta-lactamases: chromosomal in Enterobacter, Citrobacter, Serratia
- ESBLs (CTX-M, SHV, TEM): plasmid-mediated, transmissible
- Metallo-beta-lactamases (NDM, VIM, IMP): hydrolyze carbapenems
- Efflux pumps: contribute to fluoroquinolone and tetracycline resistance
- Porin alterations: decreased antibiotic entry in Gram-negatives

**Advanced management of resistant-pathogen UTI:**

*ESBL-producing UPEC UTI:*
- Cystitis: fosfomycin 3g single dose (may need repeated doses), nitrofurantoin (if susceptible), pivmecillinam
- Pyelonephritis/complicated UTI: ertapenem 1g IV/day or meropenem; consider aminoglycosides (gentamicin, amikacin) if susceptible
- Oral step-down: TMP-SMX or fluoroquinolone if susceptible on sensitivity

*CRE UTI:*
- Options: ceftazidime-avibactam (KPC), meropenem-vaborbactam (KPC), cefiderocol (metallo-beta-lactamases), colistin/polymyxin B (last resort)
- Combination therapy in severe infections: high-dose carbapenems + polymyxin or aminoglycoside
- Mandatory infectious disease consultation

*Fungal UTI (urinary candidiasis):*
- Most common in catheterized, diabetic patients, or prolonged antibiotic therapy
- Asymptomatic candiduria: generally do not treat; remove catheter if possible
- Symptomatic urinary candidiasis: fluconazole 200-400 mg/day x 14 days
- Azole-resistant Candida: amphotericin B deoxycholate (bladder irrigations in select cases)

**UTI in advanced special populations:**

*UTI in spinal cord injury patient:*
- Neurogenic bladder with intermittent catheterization or indwelling catheter
- Chronic bacteriuria expected — do NOT treat if asymptomatic
- Atypical symptoms: increased spasticity, autonomic dysreflexia, malaise
- Frequently polymicrobial and resistant pathogens

*UTI in renal transplant patient:*
- Highest risk in first 6 months post-transplant
- Immunosuppression alters clinical presentation
- Prophylaxis with TMP-SMX for 6-12 months post-transplant (also prevents Pneumocystis)
- Risk of graft pyelonephritis with renal function loss`,
      keyTerms: [
        { term: 'QIRs / Reservorios intracelulares quiescentes', definition: 'Bacterias latentes en celulas basales del urotelio que persisten por semanas a meses indetectables, reemergiendo para causar ITU recurrentes; representan un "nicho" intracelular protegido. | Dormant bacteria in basal urothelial cells persisting for weeks to months undetected, reemerging to cause recurrent UTIs; representing a protected intracellular niche.' },
        { term: 'BLEE / ESBL', definition: 'Beta-Lactamasas de Espectro Extendido: enzimas (CTX-M, SHV, TEM) que hidrolizan cefalosporinas de tercera generacion y aztreonam; mediadas por plasmidos y transmisibles entre bacterias. | Extended-Spectrum Beta-Lactamases: enzymes (CTX-M, SHV, TEM) hydrolyzing third-generation cephalosporins and aztreonam; plasmid-mediated and transmissible between bacteria.' },
        { term: 'CRE / Enterobacterales resistentes a carbapenems', definition: 'Bacterias que producen carbapenemasas (KPC, NDM, OXA-48) que inactivan antibioticos carbapenems; representan una amenaza critica de salud publica con opciones terapeuticas muy limitadas. | Bacteria producing carbapenemases (KPC, NDM, OXA-48) that inactivate carbapenem antibiotics; represent a critical public health threat with very limited therapeutic options.' },
        { term: 'Urobioma / Urobiome', definition: 'Comunidad microbiana de baja biomasa que habita el tracto urinario; su composicion (especialmente presencia de Lactobacillus) influye en la susceptibilidad a ITU. | Low-biomass microbial community inhabiting the urinary tract; its composition (especially Lactobacillus presence) influences UTI susceptibility.' },
        { term: 'Disreflexia autonomica / Autonomic dysreflexia', definition: 'Respuesta exagerada del sistema nervioso autonomo en pacientes con lesion medular alta (> T6) que puede ser provocada por ITU; se manifiesta como hipertension severa, bradicardia y cefalea. | Exaggerated autonomic nervous system response in patients with high spinal cord injury (> T6) that can be triggered by UTI; manifests as severe hypertension, bradycardia, and headache.' },
        { term: 'Pivmecillinam', definition: 'Prodroga oral de mecillinam, un beta-lactamico con alta afinidad por PBP2 de Gram-negativos; efectivo contra UPEC productora de BLEE; primera linea en paises nordicos. | Oral prodrug of mecillinam, a beta-lactam with high affinity for PBP2 of Gram-negatives; effective against ESBL-producing UPEC; first line in Nordic countries.' }
      ],
      clinicalNotes: `**Notas clinicas avanzadas:**
- El antibiograma local (antibiograma comunitario y hospitalario) es ESENCIAL para guiar la terapia empirica de ITU — si la resistencia local de E. coli a TMP-SMX supera 20%, no usar como empirico
- Nitrofurantoina es preferible a TMP-SMX como empirico de primera linea dado su perfil de resistencia mas favorable globalmente
- La cistitis enfisematosa (gas en la pared vesical) es una emergencia: mas comun en diabeticos, requiere antibioticos IV amplios + drenaje urgente
- La pielonefritis enfisematosa (gas en parenquima renal) tiene mortalidad significativa: TC urgente, antibioticos IV + drenaje percutaneo o nefrectomia segun clasificacion
- El absceso perinefrico debe sospecharse si la pielonefritis no mejora en 72 horas de antibioticos adecuados; TC con contraste para diagnostico
- En varones jovenes con ITU recurrente, descartar anomalias congenitas (reflujo vesicoureteral, valvulas uretrales posteriores)
- La piuria esteril (leucocitos en orina con cultivo negativo) sugiere tuberculosis renal, nefritis intersticial, litiasis, tumor, o uretritis por Chlamydia/gonococo

**Advanced clinical notes:**
- Local antibiogram (community and hospital) is ESSENTIAL to guide empiric UTI therapy — if local E. coli resistance to TMP-SMX exceeds 20%, do not use as empiric
- Nitrofurantoin is preferable to TMP-SMX as first-line empiric given its more favorable global resistance profile
- Emphysematous cystitis (gas in bladder wall) is an emergency: most common in diabetics, requires broad IV antibiotics + urgent drainage
- Emphysematous pyelonephritis (gas in renal parenchyma) has significant mortality: urgent CT, IV antibiotics + percutaneous drainage or nephrectomy based on classification
- Perinephric abscess should be suspected if pyelonephritis does not improve within 72 hours of appropriate antibiotics; contrast CT for diagnosis
- In young males with recurrent UTI, rule out congenital anomalies (vesicoureteral reflux, posterior urethral valves)
- Sterile pyuria (WBC in urine with negative culture) suggests renal tuberculosis, interstitial nephritis, stones, tumor, or Chlamydia/gonococcal urethritis`
    },
    5: {
      level: 5,
      summary: 'Las ITU son un modelo de enfermedad infecciosa donde la investigacion traslacional en genomica de UPEC, inmunidad innata del urotelio, biologia de biofilm intracelular, urobioma y resistencia antimicrobiana emergente esta transformando el abordaje terapeutico hacia intervenciones anti-virulencia, vacunas, inmunomodulacion y medicina de precision guiada por diagnosticos moleculares rapidos. | UTIs are a model infectious disease where translational research in UPEC genomics, urothelial innate immunity, intracellular biofilm biology, urobiome, and emerging antimicrobial resistance is transforming the therapeutic approach toward anti-virulence interventions, vaccines, immunomodulation, and precision medicine guided by rapid molecular diagnostics.',
      explanation: `## Explicacion

**Genomica y evolución de UPEC:**

*Diversidad filogenetica:*
- UPEC pertenece predominantemente a los filogrupos B2 y D de E. coli
- Las islas de patogenicidad (PAIs) contienen clusters de genes de virulencia adquiridos por transferencia horizontal
- Las cepas de ITU recurrente frecuentemente son clonalmente identicas al episodio previo (emergencia de QIRs)
- Secuenciacion genómica completa revela diversidad intranhuesped: microevolucion durante infeccion cronica

*Regulacion genica durante la infeccion:*
- Variacion de fase de fimbrias tipo 1 (regulador fimS): permite alternancia entre fenotipo adherente y no adherente
- Regulacion por quorum sensing (AI-2): coordinacion de expresion genica comunal
- Respuestas a estres: SOS response facilita mutagenesis y adquisicion de resistencia
- Competencia de hierro: un campo de batalla critico — el huesped secuestra hierro (lactoferrina, lipocalina-2), UPEC produce sideroforos para captarlo

**Terapias anti-virulencia — mas alla de los antibioticos:**

*Inhibidores de adhesion:*
- Manonosidos (derivados sinteticos de manosa): bloquean FimH con alta afinidad
  - Compuestos lider: manonosidos bifenilicos con actividad oral demostrada en modelos murinos
  - Ventaja: no ejercen presion selectiva para resistencia (no matan bacterias)
- Galactosidos: bloquean fimbrias P (previenen pielonefritis)
- D-manosa: bloqueo competitivo de FimH; ensayo MERIT demostro no inferioridad vs. nitrofurantoina para profilaxis de ITU recurrente (resultados pendientes de confirmacion)

*Vacunas contra ITU:*
- Uromune (OM-89 sublingual): extracto bacteriano polivalente de E. coli, Klebsiella, Proteus, Enterococcus
  - Ensayos observacionales muestran reduccion significativa de ITU recurrentes
  - Mecanismo: estimulacion de inmunidad mucosa
- FimCH (vacuna contra adhesina FimH): ensayo fase 2 en curso
  - Induce anticuerpos anti-FimH que bloquean adhesion
- ExPEC4V (bioconjugado de antigenos capsulares de E. coli extraintestinal): resultados mixtos
- Vacunas de vesiculas de membrana externa (OMVs): presentan multiples antigenos, en investigacion preclínica

*Terapia con bacteriofagos:*
- Fagos litícos especificos contra UPEC: uso compasivo en ITU por CRE
- Advantage: especificidad estrecha (preserva microbioma), autoamplificación in situ
- Desafios: regulacion, resistencia a fagos, necesidad de bancos de fagos personalizados
- Ensayos clinicos: PHAGBURN (heridas), ensayos de ITU en fase temprana

*Probioticos y transplante de microbiota:*
- Lactobacillus crispatus intravaginal (Lactin-V): ensayo demostro reduccion de 50% en ITU recurrentes
- Mecanismo: restauracion del microbioma vaginal, produccion de acido lactico, peroxido de hidrogeno, bacteriocinas
- Transplante de microbiota vaginal: concepto en investigacion

**Diagnosticos moleculares rapidos:**

*Plataformas point-of-care:*
- Accelerate Pheno: identificacion y antibiograma directo de orina en 7 horas
- GenMark ePlex: panel de identificacion por PCR multiplex + detección de genes de resistencia
- MALDI-TOF MS: identificacion rapida de colonias (minutos vs. 24 horas), aunque requiere cultivo previo

*Secuenciacion de nueva generacion aplicada a ITU:*
- Secuenciacion metagenómica: detecta todos los microorganismos presentes, incluyendo no cultivables
- Identificacion de genes de resistencia directamente de la muestra clinica
- Turnaround time: 24-48 horas (vs. 48-72 horas de cultivo convencional)
- Limitacion: costo elevado, necesidad de bioinformatica especializada

**Ensayos clinicos recientes y cambios de practica:**

*PIVMECILLINAM:*
- Ensayos nordicos y REDIRECT: pivmecillinam 400 mg c/8h x 3-5 dias es efectivo para cistitis no complicada
- Actividad contra BLEE-productoras (alta afinidad por PBP2)
- Aprobado en Europa, no disponible en EE.UU.

*GEPOTIDACIN:*
- Nuevo triazaacenaftileno (inhibidor de girasa tipo novedoso, no fluoroquinolona)
- Ensayo EAGLE-2 y EAGLE-3: no inferioridad vs. nitrofurantoina para cistitis no complicada
- Aprobado por FDA 2025 como primera clase nueva de antibiotico para ITU en decadas

*Sulopenem:*
- Penem oral con actividad contra E. coli productora de BLEE
- Ensayo fase 3 para ITU no complicada: resultados mixtos, no aprobado por FDA
- Concepto de carbapenem oral sigue en desarrollo

**Inteligencia artificial en ITU:**
- Modelos predictivos de resistencia antimicrobiana basados en datos demograficos, historia clinica y antibiograma previo
- Algoritmos de machine learning para predecir BLEE y CRE antes de resultados de cultivo
- Optimizacion de terapia empirica personalizada usando datos de resistencia local en tiempo real

---
## Explanation

**UPEC genomics and evolution:**

*Phylogenetic diversity:*
- UPEC predominantly belongs to E. coli phylogroups B2 and D
- Pathogenicity islands (PAIs) contain clusters of virulence genes acquired by horizontal transfer
- Recurrent UTI strains are frequently clonally identical to previous episodes (QIR emergence)
- Whole-genome sequencing reveals intrahost diversity: microevolution during chronic infection

*Gene regulation during infection:*
- Type 1 fimbriae phase variation (fimS regulator): enables switching between adherent and non-adherent phenotype
- Quorum sensing regulation (AI-2): coordination of communal gene expression
- Stress responses: SOS response facilitates mutagenesis and resistance acquisition
- Iron competition: a critical battlefield — host sequesters iron (lactoferrin, lipocalin-2), UPEC produces siderophores to capture it

**Anti-virulence therapies — beyond antibiotics:**

*Adhesion inhibitors:*
- Mannosides (synthetic mannose derivatives): block FimH with high affinity
  - Lead compounds: biphenyl mannosides with demonstrated oral activity in murine models
  - Advantage: do not exert selective pressure for resistance (do not kill bacteria)
- Galactosides: block P fimbriae (prevent pyelonephritis)
- D-mannose: competitive FimH blockade; MERIT trial demonstrated non-inferiority vs. nitrofurantoin for recurrent UTI prophylaxis (results pending confirmation)

*UTI vaccines:*
- Uromune (OM-89 sublingual): polyvalent bacterial extract of E. coli, Klebsiella, Proteus, Enterococcus
  - Observational trials show significant reduction of recurrent UTIs
  - Mechanism: mucosal immunity stimulation
- FimCH (FimH adhesin vaccine): phase 2 trial ongoing
  - Induces anti-FimH antibodies blocking adhesion
- ExPEC4V (extraintestinal E. coli capsular antigen bioconjugate): mixed results
- Outer membrane vesicle (OMV) vaccines: present multiple antigens, in preclinical research

*Bacteriophage therapy:*
- Lytic phages specific against UPEC: compassionate use in CRE UTI
- Advantage: narrow specificity (preserves microbiome), in situ self-amplification
- Challenges: regulation, phage resistance, need for personalized phage banks
- Clinical trials: PHAGBURN (wounds), early-phase UTI trials

*Probiotics and microbiota transplant:*
- Intravaginal Lactobacillus crispatus (Lactin-V): trial demonstrated 50% reduction in recurrent UTIs
- Mechanism: vaginal microbiome restoration, lactic acid production, hydrogen peroxide, bacteriocins
- Vaginal microbiota transplant: concept under investigation

**Rapid molecular diagnostics:**

*Point-of-care platforms:*
- Accelerate Pheno: identification and direct antibiogram from urine in 7 hours
- GenMark ePlex: multiplex PCR identification panel + resistance gene detection
- MALDI-TOF MS: rapid colony identification (minutes vs. 24 hours), though requires prior culture

*Next-generation sequencing applied to UTI:*
- Metagenomic sequencing: detects all microorganisms present, including non-cultivable
- Resistance gene identification directly from clinical sample
- Turnaround time: 24-48 hours (vs. 48-72 hours conventional culture)
- Limitation: high cost, need for specialized bioinformatics

**Recent clinical trials and practice changes:**

*PIVMECILLINAM:*
- Nordic and REDIRECT trials: pivmecillinam 400 mg q8h x 3-5 days is effective for uncomplicated cystitis
- Activity against ESBL producers (high PBP2 affinity)
- Approved in Europe, not available in US

*GEPOTIDACIN:*
- Novel triazaacenaphthylene (novel gyrase inhibitor type, not a fluoroquinolone)
- EAGLE-2 and EAGLE-3 trials: non-inferiority vs. nitrofurantoin for uncomplicated cystitis
- FDA approved 2025 as first new antibiotic class for UTI in decades

*Sulopenem:*
- Oral penem with activity against ESBL-producing E. coli
- Phase 3 trial for uncomplicated UTI: mixed results, not FDA approved
- Oral carbapenem concept continues in development

**Artificial intelligence in UTI:**
- Predictive antimicrobial resistance models based on demographics, clinical history, and prior antibiograms
- Machine learning algorithms to predict ESBL and CRE before culture results
- Personalized empiric therapy optimization using real-time local resistance data`,
      keyTerms: [
        { term: 'Manonosidos / Mannosides', definition: 'Compuestos sinteticos que imitan la manosa y bloquean la adhesina FimH de UPEC con alta afinidad; representan una estrategia anti-virulencia que no genera presion selectiva para resistencia. | Synthetic compounds mimicking mannose that block UPEC FimH adhesin with high affinity; representing an anti-virulence strategy that does not generate selective pressure for resistance.' },
        { term: 'Gepotidacin', definition: 'Primer antibiotico de una nueva clase (triazaacenaftileno, inhibidor novedoso de girasa) aprobado para cistitis no complicada; activo contra E. coli y no genera resistencia cruzada con fluoroquinolonas. | First antibiotic of a new class (triazaacenaphthylene, novel gyrase inhibitor) approved for uncomplicated cystitis; active against E. coli without cross-resistance with fluoroquinolones.' },
        { term: 'Lactin-V / Lactobacillus crispatus vaginal', definition: 'Probiotico intravaginal que restaura el microbioma vaginal protector, reduciendo recurrencias de ITU en 50% en ensayo clinico; mecanismo via produccion de acido lactico y bacteriocinas. | Intravaginal probiotic that restores the protective vaginal microbiome, reducing UTI recurrences by 50% in clinical trial; mechanism via lactic acid and bacteriocin production.' },
        { term: 'Variacion de fase de fimbrias / Fimbrial phase variation', definition: 'Mecanismo regulatorio epigenetico (inversion del promotor fimS) que permite a UPEC alternar entre expresion y no expresion de fimbrias tipo 1, facilitando adaptacion a diferentes nichos del tracto urinario. | Epigenetic regulatory mechanism (fimS promoter inversion) allowing UPEC to alternate between expression and non-expression of type 1 fimbriae, facilitating adaptation to different urinary tract niches.' },
        { term: 'Secuenciacion metagenomica / Metagenomic sequencing', definition: 'Tecnica de secuenciacion masivamente paralela que identifica todo el material genetico de una muestra clinica, detectando patogenos cultivables y no cultivables con sus genes de resistencia. | Massively parallel sequencing technique identifying all genetic material in a clinical sample, detecting cultivable and non-cultivable pathogens with their resistance genes.' },
        { term: 'MALDI-TOF MS', definition: 'Espectrometria de masas que identifica microorganismos por su perfil proteico en minutos; revoluciono la microbiologia clinica al reducir dramaticamente el tiempo de identificacion. | Mass spectrometry identifying microorganisms by their protein profile in minutes; revolutionized clinical microbiology by dramatically reducing identification time.' }
      ],
      clinicalNotes: `**Notas clinicas de nivel experto:**

*Controversias actuales:*
- Duracion de tratamiento de cistitis: tendencia a ciclos mas cortos (3 dias TMP-SMX, 5 dias nitrofurantoina, dosis unica fosfomicina) vs. 7 dias tradicionales
- La bacteriuria asintomatica antes de artroplastia total: guias de la AUA (2019) recomiendan NO cribado ni tratamiento — cambio de paradigma
- Methenamine hippurate como alternativa no antibiotica: ensayo ALTAR demostro no inferioridad vs. profilaxis antibiotica para ITU recurrente; opcion viable para reducir exposicion a antibioticos
- La clorhexidina para limpieza periuretral antes de cateterizacion NO ha demostrado reducir CAUTI comparada con agua esteril

*Perlas de practica clinica avanzada:*
- Staphylococcus aureus en urocultivo: generalmente indica bacteremia con siembra hematogena renal — obtener SIEMPRE hemocultivos y buscar foco metastatico
- S. agalactiae (Grupo B) en orina de embarazada: indica colonizacion vaginal — requiere profilaxis intraparto para prevencion de sepsis neonatal
- Proteus mirabilis y calculos de estruvita: la ureasa de Proteus alcaliniza la orina, causando precipitacion de fosfato de amonio y magnesio; el tratamiento de la ITU sola no resuelve los calculos
- ITU por Aerococcus urinae: patogeno emergente en ancianos, frecuentemente confundido con Enterococcus; tratar con amoxicilina o nitrofurantoina

*Horizonte futuro:*
- Terapia antimicrobiana guiada por aprendizaje automatico en tiempo real
- Vacunas conjugadas polivalentes contra UPEC en ensayos avanzados
- Sensores inteligentes en sondas urinarias para deteccion temprana de biofilm
- CRISPR-Cas como herramienta anti-bacteriana de precision

**Expert-level clinical notes:**

*Current controversies:*
- Cystitis treatment duration: trend toward shorter courses (3 days TMP-SMX, 5 days nitrofurantoin, single-dose fosfomycin) vs. traditional 7 days
- Asymptomatic bacteriuria before total joint arthroplasty: AUA guidelines (2019) recommend NO screening or treatment — paradigm shift
- Methenamine hippurate as non-antibiotic alternative: ALTAR trial demonstrated non-inferiority vs. antibiotic prophylaxis for recurrent UTI; viable option to reduce antibiotic exposure
- Chlorhexidine for periurethral cleaning before catheterization has NOT been shown to reduce CAUTI compared to sterile water

*Advanced clinical practice pearls:*
- Staphylococcus aureus in urine culture: generally indicates bacteremia with hematogenous renal seeding — ALWAYS obtain blood cultures and look for metastatic focus
- S. agalactiae (Group B) in pregnant urine: indicates vaginal colonization — requires intrapartum prophylaxis for neonatal sepsis prevention
- Proteus mirabilis and struvite stones: Proteus urease alkalinizes urine, causing ammonium magnesium phosphate precipitation; treating the UTI alone does not resolve stones
- Aerococcus urinae UTI: emerging pathogen in elderly, frequently confused with Enterococcus; treat with amoxicillin or nitrofurantoin

*Future horizon:*
- Real-time machine learning-guided antimicrobial therapy
- Polyvalent conjugate vaccines against UPEC in advanced trials
- Smart sensors in urinary catheters for early biofilm detection
- CRISPR-Cas as a precision anti-bacterial tool`
    }
  },
  media: [],
  citations: [
    { id: 'ref-1', type: 'article', title: 'International Clinical Practice Guidelines for the Treatment of Acute Uncomplicated Cystitis and Pyelonephritis in Women: A 2010 Update by IDSA and ESCMID', authors: ['Gupta K', 'Hooton TM', 'Naber KG', 'et al.'], source: 'Clinical Infectious Diseases. 2011;52(5):e103-e120', license: 'CC BY 4.0' },
    { id: 'ref-2', type: 'article', title: 'Recurrent Urinary Tract Infections in Women: AUA/CUA/SUFU Guideline', authors: ['Anger J', 'Lee U', 'Ackerman AL', 'et al.'], source: 'Journal of Urology. 2019;202(2):282-289', license: 'CC BY 4.0' },
    { id: 'ref-3', type: 'article', title: 'Intracellular Bacterial Communities: A Potential Etiology for Chronic Lower Urinary Tract Symptoms', authors: ['Rosen DA', 'Hooton TM', 'Stamm WE', 'et al.'], source: 'Urology. 2007;69(4 Suppl):53-59', license: 'CC BY 4.0' },
    { id: 'ref-4', type: 'textbook', title: 'Mandell, Douglas, and Bennett\'s Principles and Practice of Infectious Diseases, 9th Edition', authors: ['Bennett JE', 'Dolin R', 'Blaser MJ'], source: 'Elsevier', chapter: 'Urinary Tract Infections', license: 'CC BY 4.0' },
    { id: 'ref-5', type: 'article', title: 'Efficacy and Safety of Gepotidacin for Uncomplicated UTI (EAGLE-2 and EAGLE-3)', authors: ['Wagenlehner FM', 'Perry CR', 'Hooton TM', 'et al.'], source: 'New England Journal of Medicine. 2025', license: 'CC BY 4.0' }
  ],
  crossReferences: [
    { targetId: 'condition-sepsis-septicemia', targetType: 'condition', relationship: 'related', label: 'Sepsis - Complication of complicated UTI/pyelonephritis' },
    { targetId: 'condition-neumonia-pneumonia', targetType: 'condition', relationship: 'see-also', label: 'Pneumonia - Another common infectious disease' }
  ],
  tags: {
    systems: ['renal', 'immune', 'reproductive'],
    topics: ['infectious-disease', 'urology', 'nephrology'],
    keywords: ['infeccion urinaria', 'UTI', 'cistitis', 'cystitis', 'pielonefritis', 'pyelonephritis', 'E. coli', 'UPEC', 'bacteriuria', 'nitrofurantoina', 'resistencia antimicrobiana', 'CAUTI', 'ITU recurrente'],
    clinicalRelevance: 'critical'
  },
  createdAt: '2026-02-05',
  updatedAt: '2026-02-05',
  version: 1,
  status: 'published',
  contributors: ['SOMA AI Content Team']
};
