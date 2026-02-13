/**
 * Renal Conditions Database
 *
 * Comprehensive reference of renal/kidney conditions with
 * clinical summaries, diagnostics, treatment, and patient education.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type RenalCategory =
  | 'chronic'
  | 'acute'
  | 'glomerular'
  | 'structural'
  | 'congenital';

export interface RenalConditionEntry {
  id: string;
  name: string;
  nameEs: string;
  category: RenalCategory;
  icd11: string;
  description: string;
  descriptionEs: string;
  riskFactors: string[];
  pathophysiology: string;
  pathophysiologyEs: string;
  symptoms: string[];
  diagnostics: {
    tests: string[];
    imaging: string[];
    criteria: string[];
  };
  treatment: {
    medications: string[];
    procedures: string[];
    lifestyle: string[];
  };
  emergencySigns: string[];
  patientExplanation: string;
  patientExplanationEs: string;
}

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const RENAL_CONDITIONS: Record<string, RenalConditionEntry> = {
  'chronic-kidney-disease': {
    id: 'chronic-kidney-disease',
    name: 'Chronic Kidney Disease (CKD)',
    nameEs: 'Enfermedad Renal Crónica (ERC)',
    category: 'chronic',
    icd11: 'GB61',
    description: 'Progressive loss of kidney function over months to years, classified by GFR stages. CKD is defined as kidney damage or GFR <60 mL/min/1.73m² for ≥3 months. Often asymptomatic until advanced stages.',
    descriptionEs: 'Pérdida progresiva de la función renal durante meses a años, clasificada por etapas de TFG. La ERC se define como daño renal o TFG <60 mL/min/1.73m² por ≥3 meses. A menudo asintomática hasta etapas avanzadas.',
    riskFactors: ['Diabetes mellitus', 'Hypertension', 'Age >60', 'Family history of CKD', 'Obesity', 'Cardiovascular disease', 'African American or Hispanic ethnicity', 'Smoking', 'Recurrent UTIs'],
    pathophysiology: 'Glomerular hyperfiltration and intraglomerular hypertension lead to nephron loss and progressive fibrosis. Remaining nephrons undergo adaptive hyperfiltration but eventually fail. Decline in GFR causes accumulation of metabolic waste, electrolyte imbalances, and hormonal dysregulation (EPO, vitamin D, PTH).',
    pathophysiologyEs: 'La hiperfiltración glomerular y la hipertensión intraglomerular conducen a la pérdida de nefronas y fibrosis progresiva. Las nefronas restantes experimentan hiperfiltración adaptativa pero eventualmente fallan. La disminución de la TFG causa acumulación de desechos metabólicos, desequilibrios electrolíticos y desregulación hormonal (EPO, vitamina D, PTH).',
    symptoms: ['Often asymptomatic in early stages', 'Fatigue and weakness', 'Decreased urine output or foamy urine', 'Swelling in legs, ankles, or around eyes', 'Nausea and loss of appetite', 'Difficulty concentrating', 'Shortness of breath', 'Metallic taste in mouth'],
    diagnostics: {
      tests: ['Serum creatinine and eGFR', 'Urinalysis with urine albumin-to-creatinine ratio (UACR)', 'Complete metabolic panel (electrolytes, BUN, calcium, phosphate)', 'CBC (anemia screening)', 'Lipid panel', 'HbA1c if diabetic', 'PTH and vitamin D levels in advanced CKD'],
      imaging: ['Renal ultrasound (kidney size, obstruction, cysts)', 'CT or MRI if structural abnormalities suspected', 'Doppler ultrasound for renal artery stenosis'],
      criteria: ['GFR <60 mL/min/1.73m² for ≥3 months (Stage 3-5)', 'Persistent albuminuria (≥30 mg/g) for ≥3 months', 'Structural kidney damage on imaging'],
    },
    treatment: {
      medications: ['ACE inhibitors or ARBs (slow progression, reduce proteinuria)', 'SGLT2 inhibitors (cardio-renal protection)', 'Statins for cardiovascular risk', 'Diuretics for fluid overload', 'Phosphate binders if hyperphosphatemia', 'Erythropoiesis-stimulating agents (ESA) for anemia', 'Vitamin D supplementation', 'Sodium bicarbonate for metabolic acidosis'],
      procedures: ['Hemodialysis (3x/week, 4 hours/session)', 'Peritoneal dialysis (home-based)', 'Kidney transplantation (definitive treatment for ESRD)', 'AV fistula or graft creation for dialysis access'],
      lifestyle: ['Low-sodium diet (<2g/day)', 'Protein restriction (0.6-0.8 g/kg/day in Stage 4-5)', 'Potassium and phosphorus restriction', 'Fluid management', 'Regular exercise', 'Smoking cessation', 'Tight glucose and BP control', 'Avoid nephrotoxins (NSAIDs, contrast dye)'],
    },
    emergencySigns: ['Severe shortness of breath or chest pain', 'Altered mental status or confusion', 'Uncontrolled hypertension', 'Severe hyperkalemia (>6.5 mEq/L)', 'Uremic symptoms (pericarditis, seizures)', 'Anuria or severe oliguria'],
    patientExplanation: 'Chronic kidney disease means your kidneys are gradually losing their ability to filter waste and excess fluid from your blood. Think of your kidneys as filters that clean your blood—when they are damaged, waste builds up. Early stages have no symptoms, so regular testing is crucial. Medications and lifestyle changes can slow progression, but advanced CKD may require dialysis or a kidney transplant.',
    patientExplanationEs: 'La enfermedad renal crónica significa que sus riñones están perdiendo gradualmente su capacidad de filtrar desechos y líquido excesivo de su sangre. Piense en sus riñones como filtros que limpian su sangre: cuando están dañados, los desechos se acumulan. Las etapas tempranas no tienen síntomas, por lo que las pruebas regulares son cruciales. Los medicamentos y cambios en el estilo de vida pueden ralentizar la progresión, pero la ERC avanzada puede requerir diálisis o un trasplante de riñón.',
  },

  'acute-kidney-injury': {
    id: 'acute-kidney-injury',
    name: 'Acute Kidney Injury (AKI)',
    nameEs: 'Lesión Renal Aguda (LRA)',
    category: 'acute',
    icd11: 'GB40',
    description: 'Sudden decline in kidney function over hours to days, characterized by elevated creatinine and/or reduced urine output. Categorized as prerenal, intrinsic, or postrenal based on etiology.',
    descriptionEs: 'Disminución repentina de la función renal en horas a días, caracterizada por creatinina elevada y/o disminución del gasto urinario. Categorizada como prerrenal, intrínseca o posrenal según la etiología.',
    riskFactors: ['Sepsis or severe infection', 'Major surgery or trauma', 'Hypovolemia or dehydration', 'Nephrotoxic medications (NSAIDs, aminoglycosides, contrast dye)', 'Chronic kidney disease', 'Heart failure', 'Liver disease', 'Advanced age', 'Diabetes'],
    pathophysiology: 'Prerenal AKI results from decreased renal perfusion (hypovolemia, hypotension). Intrinsic AKI involves direct kidney damage (acute tubular necrosis, glomerulonephritis, interstitial nephritis). Postrenal AKI is caused by urinary tract obstruction. All lead to impaired GFR, accumulation of nitrogenous waste, and electrolyte imbalances.',
    pathophysiologyEs: 'La LRA prerrenal resulta de la disminución de la perfusión renal (hipovolemia, hipotensión). La LRA intrínseca involucra daño renal directo (necrosis tubular aguda, glomerulonefritis, nefritis intersticial). La LRA posrenal es causada por obstrucción del tracto urinario. Todas conducen a deterioro de la TFG, acumulación de desechos nitrogenados y desequilibrios electrolíticos.',
    symptoms: ['Decreased urine output (oliguria or anuria)', 'Fluid retention and swelling', 'Confusion or altered mental status', 'Fatigue and weakness', 'Nausea and vomiting', 'Shortness of breath', 'Chest pain or pressure (if fluid overload)'],
    diagnostics: {
      tests: ['Serum creatinine (≥0.3 mg/dL increase within 48h or ≥1.5x baseline within 7 days)', 'BUN and electrolytes', 'Urinalysis and urine microscopy', 'Urine sodium and FENa (fractional excretion of sodium)', 'Complete blood count', 'Urine output monitoring (<0.5 mL/kg/h for 6h)'],
      imaging: ['Renal ultrasound (rule out obstruction, assess kidney size)', 'CT abdomen/pelvis if obstruction suspected', 'Bladder scan for post-void residual'],
      criteria: ['KDIGO Criteria: Serum Cr ≥0.3 mg/dL increase in 48h, or Cr ≥1.5x baseline in 7 days, or urine output <0.5 mL/kg/h for 6h', 'Stage 1 (Cr 1.5-1.9x baseline), Stage 2 (2-2.9x), Stage 3 (≥3x or requiring RRT)'],
    },
    treatment: {
      medications: ['Fluid resuscitation (isotonic saline for prerenal AKI)', 'Diuretics (furosemide) for fluid overload', 'Treat underlying cause (antibiotics for sepsis, stop nephrotoxins)', 'Avoid nephrotoxic drugs', 'Adjust medication doses for reduced GFR'],
      procedures: ['Renal replacement therapy (hemodialysis or CRRT) if severe', 'Urinary catheterization or nephrostomy for obstruction', 'Central venous catheter for dialysis access if needed'],
      lifestyle: ['Fluid restriction if oliguric', 'Low-potassium, low-phosphorus diet', 'Monitor daily weights and ins/outs', 'Avoid NSAIDs and contrast exposure'],
    },
    emergencySigns: ['Severe hyperkalemia (≥6.5 mEq/L) with ECG changes', 'Pulmonary edema or severe fluid overload', 'Uremic encephalopathy or seizures', 'Severe metabolic acidosis (pH <7.1)', 'Anuria (no urine output)'],
    patientExplanation: 'Acute kidney injury means your kidneys have suddenly stopped working properly, often due to dehydration, infection, or medications. Unlike chronic kidney disease, AKI can be reversible if caught and treated early. Your kidneys may recover full function with treatment, but close monitoring is essential to prevent complications like dangerous potassium levels or fluid buildup in the lungs.',
    patientExplanationEs: 'La lesión renal aguda significa que sus riñones han dejado de funcionar correctamente repentinamente, a menudo debido a deshidratación, infección o medicamentos. A diferencia de la enfermedad renal crónica, la LRA puede ser reversible si se detecta y trata temprano. Sus riñones pueden recuperar la función completa con tratamiento, pero el monitoreo cercano es esencial para prevenir complicaciones como niveles peligrosos de potasio o acumulación de líquido en los pulmones.',
  },

  'nephrotic-syndrome': {
    id: 'nephrotic-syndrome',
    name: 'Nephrotic Syndrome',
    nameEs: 'Síndrome Nefrótico',
    category: 'glomerular',
    icd11: 'GB50.0',
    description: 'Glomerular disorder characterized by massive proteinuria (>3.5 g/day), hypoalbuminemia, edema, and hyperlipidemia. Results from increased glomerular permeability to plasma proteins.',
    descriptionEs: 'Trastorno glomerular caracterizado por proteinuria masiva (>3.5 g/día), hipoalbuminemia, edema e hiperlipidemia. Resulta del aumento de la permeabilidad glomerular a las proteínas plasmáticas.',
    riskFactors: ['Diabetes mellitus (most common cause in adults)', 'Minimal change disease (children)', 'Membranous nephropathy', 'Focal segmental glomerulosclerosis (FSGS)', 'Systemic lupus erythematosus', 'Amyloidosis', 'HIV or hepatitis B/C infection', 'Medications (NSAIDs, gold therapy)'],
    pathophysiology: 'Damage to the glomerular filtration barrier (podocytes, basement membrane) leads to massive urinary protein loss. Hypoalbuminemia decreases oncotic pressure, causing fluid shift into interstitium (edema). Liver compensatory synthesis increases lipoproteins (hyperlipidemia). Urinary loss of antithrombin III increases thrombosis risk.',
    pathophysiologyEs: 'El daño a la barrera de filtración glomerular (podocitos, membrana basal) conduce a pérdida masiva de proteínas en la orina. La hipoalbuminemia disminuye la presión oncótica, causando desplazamiento de líquido hacia el intersticio (edema). La síntesis hepática compensatoria aumenta las lipoproteínas (hiperlipidemia). La pérdida urinaria de antitrombina III aumenta el riesgo de trombosis.',
    symptoms: ['Severe peripheral edema (legs, ankles, feet)', 'Periorbital edema (puffy eyes, especially morning)', 'Foamy or frothy urine', 'Weight gain from fluid retention', 'Fatigue', 'Loss of appetite', 'Ascites or pleural effusion (if severe)'],
    diagnostics: {
      tests: ['24-hour urine protein (>3.5 g/day or spot UPCR >3 g/g)', 'Serum albumin (<3 g/dL)', 'Lipid panel (elevated cholesterol and triglycerides)', 'Complete metabolic panel', 'Urinalysis (proteinuria, fatty casts, oval fat bodies)', 'Complement levels (C3, C4)', 'ANA, anti-dsDNA (for lupus)', 'Hepatitis B/C, HIV serology'],
      imaging: ['Renal ultrasound (kidney size, rule out obstruction)', 'Doppler ultrasound for renal vein thrombosis if suspected'],
      criteria: ['Proteinuria >3.5 g/24h or UPCR >3 g/g', 'Serum albumin <3 g/dL', 'Edema', 'Hyperlipidemia (cholesterol >200 mg/dL)'],
    },
    treatment: {
      medications: ['Corticosteroids (prednisone) - first-line for minimal change disease', 'ACE inhibitors or ARBs (reduce proteinuria)', 'Diuretics (furosemide) for edema', 'Statins for hyperlipidemia', 'Anticoagulation (if albumin <2 g/dL or thrombosis)', 'Immunosuppressants (cyclosporine, mycophenolate) if steroid-resistant or FSGS/membranous nephropathy'],
      procedures: ['Renal biopsy (definitive diagnosis, guide treatment)', 'Albumin infusion (if severe hypoalbuminemia)', 'Dialysis (if renal failure develops)'],
      lifestyle: ['Low-sodium diet (<2 g/day)', 'Moderate protein intake (0.8-1 g/kg/day)', 'Fluid restriction if severe edema', 'Pneumococcal and influenza vaccination', 'Avoid nephrotoxins'],
    },
    emergencySigns: ['Sudden severe shortness of breath (pulmonary embolism)', 'Chest pain or leg swelling (deep vein thrombosis)', 'Severe abdominal pain (renal vein thrombosis)', 'Signs of infection (increased risk due to urinary immunoglobulin loss)', 'Acute kidney injury'],
    patientExplanation: 'Nephrotic syndrome occurs when tiny filters in your kidneys (glomeruli) become damaged and leak too much protein into your urine. This protein loss causes swelling, high cholesterol, and increases your risk of blood clots and infections. Treatment depends on the underlying cause—some cases respond well to steroids, while others require immune-suppressing medications. Many patients improve with treatment, but close monitoring is essential.',
    patientExplanationEs: 'El síndrome nefrótico ocurre cuando los filtros diminutos en sus riñones (glomérulos) se dañan y filtran demasiada proteína en la orina. Esta pérdida de proteína causa hinchazón, colesterol alto y aumenta el riesgo de coágulos sanguíneos e infecciones. El tratamiento depende de la causa subyacente: algunos casos responden bien a los esteroides, mientras que otros requieren medicamentos inmunosupresores. Muchos pacientes mejoran con el tratamiento, pero el monitoreo cercano es esencial.',
  },

  'nephrolithiasis': {
    id: 'nephrolithiasis',
    name: 'Nephrolithiasis (Kidney Stones)',
    nameEs: 'Nefrolitiasis (Cálculos Renales)',
    category: 'structural',
    icd11: 'GC01',
    description: 'Formation of solid crystals in the urinary tract, most commonly calcium oxalate stones. Can cause severe pain when stones obstruct the ureter or pass through the urinary tract.',
    descriptionEs: 'Formación de cristales sólidos en el tracto urinario, más comúnmente cálculos de oxalato de calcio. Puede causar dolor severo cuando los cálculos obstruyen el uréter o pasan por el tracto urinario.',
    riskFactors: ['Dehydration', 'High-sodium diet', 'High-protein diet', 'Obesity', 'Family or personal history of stones', 'Hypercalciuria or hyperoxaluria', 'Gout or hyperuricemia', 'Chronic diarrhea or inflammatory bowel disease', 'Primary hyperparathyroidism', 'Certain medications (topiramate, loop diuretics)'],
    pathophysiology: 'Supersaturation of urine with stone-forming substances (calcium, oxalate, uric acid, cystine) leads to crystallization. Inadequate inhibitors (citrate, magnesium) or promoters (low urine volume, acidic/alkaline pH) facilitate stone growth. Stones can obstruct urinary flow, causing hydronephrosis, infection, or acute kidney injury.',
    pathophysiologyEs: 'La supersaturación de la orina con sustancias formadoras de cálculos (calcio, oxalato, ácido úrico, cistina) conduce a la cristalización. Inhibidores inadecuados (citrato, magnesio) o promotores (bajo volumen de orina, pH ácido/alcalino) facilitan el crecimiento de cálculos. Los cálculos pueden obstruir el flujo urinario, causando hidronefrosis, infección o lesión renal aguda.',
    symptoms: ['Severe, colicky flank pain radiating to groin', 'Hematuria (visible or microscopic)', 'Nausea and vomiting', 'Urinary urgency or frequency', 'Dysuria (painful urination)', 'Fever and chills (if infection present)', 'Inability to find comfortable position'],
    diagnostics: {
      tests: ['Urinalysis (hematuria, crystals, pH)', 'Urine culture if infection suspected', 'Complete metabolic panel (calcium, creatinine)', 'Uric acid level', '24-hour urine collection (calcium, oxalate, citrate, uric acid, volume) for recurrent stones', 'Stone analysis after passage'],
      imaging: ['Non-contrast CT abdomen/pelvis (gold standard, detects all stone types)', 'Renal ultrasound (detect hydronephrosis, stones >5mm)', 'KUB X-ray (calcium stones only, not uric acid/cystine)'],
      criteria: ['Visualization of stone on imaging', 'Clinical presentation of renal colic with hematuria', 'Stone passage or retrieval with analysis'],
    },
    treatment: {
      medications: ['NSAIDs (ketorolac, ibuprofen) for pain', 'Alpha-blockers (tamsulosin) for medical expulsive therapy (<10mm stones)', 'Antiemetics (ondansetron) for nausea', 'Antibiotics if infection present', 'Potassium citrate (prevent recurrence, increase urine pH)', 'Thiazide diuretics (reduce calcium excretion)', 'Allopurinol (for uric acid stones)'],
      procedures: ['Extracorporeal shock wave lithotripsy (ESWL) for <2cm stones', 'Ureteroscopy with laser lithotripsy', 'Percutaneous nephrolithotomy (PCNL) for large/staghorn stones', 'Ureteral stent placement if obstruction', 'Emergency decompression (nephrostomy) if infected obstructed kidney'],
      lifestyle: ['Hydration (2.5-3 L fluid/day, urine output >2L/day)', 'Low-sodium diet (<2 g/day)', 'Normal calcium intake (1000-1200 mg/day)', 'Limit animal protein', 'Reduce oxalate-rich foods (spinach, nuts, chocolate) if calcium oxalate stones', 'Limit sugary drinks', 'Weight loss if obese'],
    },
    emergencySigns: ['Fever >38.5°C with flank pain (obstructive pyelonephritis)', 'Anuria or complete obstruction', 'Solitary kidney with obstructing stone', 'Uncontrolled pain despite medications', 'Severe nausea/vomiting with dehydration', 'Acute kidney injury'],
    patientExplanation: 'Kidney stones are hard mineral deposits that form in your kidneys and can cause excruciating pain when they travel through the urinary tract. Most stones pass on their own with pain medication and plenty of fluids, but larger stones may need procedures to break them up. Prevention is key—drinking lots of water, reducing salt, and dietary changes based on your stone type can prevent future episodes.',
    patientExplanationEs: 'Los cálculos renales son depósitos minerales duros que se forman en sus riñones y pueden causar dolor insoportable cuando viajan por el tracto urinario. La mayoría de los cálculos pasan solos con medicamentos para el dolor y muchos líquidos, pero los cálculos más grandes pueden necesitar procedimientos para romperlos. La prevención es clave: beber mucha agua, reducir la sal y cambios dietéticos basados en su tipo de cálculo pueden prevenir episodios futuros.',
  },

  'glomerulonephritis': {
    id: 'glomerulonephritis',
    name: 'Glomerulonephritis',
    nameEs: 'Glomerulonefritis',
    category: 'glomerular',
    icd11: 'GB50',
    description: 'Inflammation of the glomeruli causing hematuria, proteinuria, and impaired renal function. Can be acute or chronic, primary or secondary to systemic disease.',
    descriptionEs: 'Inflamación de los glomérulos que causa hematuria, proteinuria y función renal deteriorada. Puede ser aguda o crónica, primaria o secundaria a enfermedad sistémica.',
    riskFactors: ['Recent streptococcal infection (post-streptococcal GN)', 'Systemic lupus erythematosus', 'Vasculitis (ANCA-associated, anti-GBM disease)', 'IgA nephropathy', 'Hepatitis B or C infection', 'HIV', 'Endocarditis', 'Family history of kidney disease', 'Certain medications (NSAIDs, penicillamine)'],
    pathophysiology: 'Immune complex deposition or in situ antibody formation triggers glomerular inflammation. Complement activation and inflammatory cell infiltration damage the glomerular filtration barrier. Results in hematuria (RBC leak), proteinuria (barrier dysfunction), and reduced GFR (nephron loss). Crescentic forms can rapidly progress to renal failure.',
    pathophysiologyEs: 'La deposición de complejos inmunes o la formación de anticuerpos in situ desencadena inflamación glomerular. La activación del complemento y la infiltración de células inflamatorias dañan la barrera de filtración glomerular. Resulta en hematuria (fuga de glóbulos rojos), proteinuria (disfunción de barrera) y TFG reducida (pérdida de nefronas). Las formas crescénticas pueden progresar rápidamente a insuficiencia renal.',
    symptoms: ['Hematuria (cola-colored, tea-colored, or pink urine)', 'Proteinuria (foamy urine)', 'Edema (periorbital, lower extremities)', 'Hypertension (new-onset or worsening)', 'Oliguria (decreased urine output)', 'Fatigue and malaise', 'Flank pain (rare)'],
    diagnostics: {
      tests: ['Urinalysis (dysmorphic RBCs, RBC casts, proteinuria)', '24-hour urine protein or UPCR', 'Serum creatinine and eGFR', 'Complement levels (C3, C4)', 'ANA, anti-dsDNA (for lupus)', 'ANCA (for vasculitis)', 'Anti-GBM antibodies', 'ASO titer (post-streptococcal GN)', 'Hepatitis and HIV serology', 'Serum and urine protein electrophoresis'],
      imaging: ['Renal ultrasound (kidney size, echogenicity)', 'Chest X-ray if pulmonary-renal syndrome suspected'],
      criteria: ['Renal biopsy is gold standard for diagnosis and classification', 'Light microscopy, immunofluorescence, electron microscopy patterns guide treatment'],
    },
    treatment: {
      medications: ['Corticosteroids (prednisone) for immune-mediated GN', 'Immunosuppressants (cyclophosphamide, rituximab, mycophenolate) for severe/crescentic GN', 'ACE inhibitors or ARBs (reduce proteinuria, BP control)', 'Diuretics for edema and hypertension', 'Plasmapheresis for anti-GBM disease or severe ANCA vasculitis', 'Antibiotics if post-infectious GN'],
      procedures: ['Renal biopsy (diagnostic, prognostic)', 'Dialysis if severe acute kidney injury', 'Kidney transplantation if ESRD develops'],
      lifestyle: ['Low-sodium diet', 'Fluid restriction if edematous', 'Protein intake per nephrologist recommendation', 'Avoid nephrotoxins (NSAIDs)', 'Treat underlying conditions (strep throat, lupus)'],
    },
    emergencySigns: ['Rapidly progressive kidney failure (creatinine doubling in days-weeks)', 'Pulmonary hemorrhage (coughing up blood)', 'Severe hypertension or hypertensive emergency', 'Oliguria or anuria', 'Altered mental status (uremic encephalopathy)', 'Severe edema or pulmonary edema'],
    patientExplanation: 'Glomerulonephritis is inflammation of the tiny filters in your kidneys, often triggered by an infection or autoimmune disease. This inflammation allows blood and protein to leak into your urine and can impair kidney function. Some forms resolve on their own, while others require aggressive treatment with steroids or immune-suppressing drugs to prevent permanent kidney damage. A kidney biopsy is often needed to determine the specific type and best treatment.',
    patientExplanationEs: 'La glomerulonefritis es inflamación de los filtros diminutos en sus riñones, a menudo desencadenada por una infección o enfermedad autoinmune. Esta inflamación permite que la sangre y la proteína se filtren en la orina y puede deteriorar la función renal. Algunas formas se resuelven por sí solas, mientras que otras requieren tratamiento agresivo con esteroides o medicamentos inmunosupresores para prevenir daño renal permanente. A menudo se necesita una biopsia renal para determinar el tipo específico y el mejor tratamiento.',
  },

  'polycystic-kidney-disease': {
    id: 'polycystic-kidney-disease',
    name: 'Polycystic Kidney Disease (PKD)',
    nameEs: 'Enfermedad Renal Poliquística (ERP)',
    category: 'congenital',
    icd11: 'GB61.0',
    description: 'Genetic disorder characterized by bilateral renal cysts that progressively enlarge and destroy normal kidney tissue. Autosomal dominant PKD (ADPKD) is most common, presenting in adulthood.',
    descriptionEs: 'Trastorno genético caracterizado por quistes renales bilaterales que se agrandan progresivamente y destruyen el tejido renal normal. La ERP autosómica dominante (ERPQD) es la más común, presentándose en la edad adulta.',
    riskFactors: ['Family history of PKD (autosomal dominant inheritance)', 'PKD1 or PKD2 gene mutation', 'Hypertension', 'Male gender (faster progression)', 'African American ethnicity', 'Early-onset hypertension', 'Larger kidney volume at young age'],
    pathophysiology: 'Mutations in PKD1 (chromosome 16) or PKD2 (chromosome 4) genes cause abnormal cilia function in renal tubular cells. This leads to cyst formation from tubular segments, progressive cyst enlargement, and compression/destruction of normal parenchyma. Results in declining GFR, hypertension, pain, and eventual ESRD (typically age 50-70 for PKD1, later for PKD2).',
    pathophysiologyEs: 'Las mutaciones en los genes PKD1 (cromosoma 16) o PKD2 (cromosoma 4) causan función ciliar anormal en las células tubulares renales. Esto conduce a la formación de quistes a partir de segmentos tubulares, agrandamiento progresivo de quistes y compresión/destrucción del parénquima normal. Resulta en disminución de la TFG, hipertensión, dolor y eventual ERCT (típicamente edad 50-70 para PKD1, más tarde para PKD2).',
    symptoms: ['Flank or abdominal pain (from cyst enlargement or rupture)', 'Hematuria (from cyst rupture or stone)', 'Hypertension (early-onset, often first symptom)', 'Recurrent urinary tract infections', 'Kidney stones', 'Enlarged, palpable kidneys', 'Headaches (from hypertension or aneurysms)', 'Hernias (increased abdominal pressure)'],
    diagnostics: {
      tests: ['Serum creatinine and eGFR (monitor kidney function)', 'Urinalysis (hematuria, proteinuria)', 'Complete metabolic panel', 'Genetic testing (PKD1, PKD2 mutations) if diagnosis uncertain'],
      imaging: ['Renal ultrasound (initial screening, detect cysts)', 'MRI abdomen (gold standard for volume measurement, surgical planning)', 'CT abdomen (detect complications: hemorrhage, stones, infection)', 'MR angiography brain (screen for cerebral aneurysms in high-risk patients)'],
      criteria: ['Unified ultrasound criteria: Age <40: ≥3 cysts (unilateral or bilateral); Age 40-59: ≥2 cysts in each kidney; Age ≥60: ≥4 cysts in each kidney', 'Family history of ADPKD supports diagnosis', 'Genetic testing confirms if imaging inconclusive'],
    },
    treatment: {
      medications: ['ACE inhibitors or ARBs (BP control, slow progression)', 'Tolvaptan (vasopressin V2 receptor antagonist, slows cyst growth and GFR decline in high-risk patients)', 'Pain management (acetaminophen preferred, avoid NSAIDs)', 'Antibiotics for cyst infections (fluoroquinolones or TMP-SMX penetrate cysts)', 'Statins for cardiovascular risk'],
      procedures: ['Cyst aspiration or sclerotherapy for symptomatic cysts', 'Nephrectomy (unilateral or bilateral) if severe pain, recurrent infections, or pre-transplant', 'Dialysis when ESRD develops', 'Kidney transplantation (definitive treatment for ESRD)', 'Cerebral aneurysm coiling/clipping if detected'],
      lifestyle: ['Blood pressure control (target <110/75 mmHg)', 'Low-sodium diet', 'Adequate hydration (avoid dehydration-induced ADH release)', 'Avoid contact sports (cyst rupture risk)', 'Caffeine reduction (stimulates cyst growth)', 'Regular exercise', 'Genetic counseling for family planning'],
    },
    emergencySigns: ['Sudden severe headache (possible aneurysm rupture)', 'Severe flank pain with fever (cyst infection)', 'Gross hematuria with clots causing obstruction', 'Severe hypertension or hypertensive emergency', 'Acute abdominal pain (cyst rupture, hemorrhage)', 'Altered mental status'],
    patientExplanation: 'Polycystic kidney disease is an inherited condition where fluid-filled cysts grow in your kidneys over time, gradually replacing healthy tissue. These cysts can cause pain, high blood pressure, and eventually kidney failure. While there is no cure, medications can slow the disease, and blood pressure control is crucial. Most people maintain kidney function for decades, but some eventually need dialysis or transplant. Screening family members and managing complications early improves outcomes.',
    patientExplanationEs: 'La enfermedad renal poliquística es una condición hereditaria donde quistes llenos de líquido crecen en sus riñones con el tiempo, reemplazando gradualmente el tejido sano. Estos quistes pueden causar dolor, presión arterial alta y eventualmente insuficiencia renal. Aunque no hay cura, los medicamentos pueden ralentizar la enfermedad y el control de la presión arterial es crucial. La mayoría de las personas mantienen la función renal durante décadas, pero algunos eventualmente necesitan diálisis o trasplante. La detección de familiares y el manejo temprano de complicaciones mejora los resultados.',
  },
};

// ---------------------------------------------------------------------------
// Helper functions
// ---------------------------------------------------------------------------

/** Search renal conditions by query string. */
export function searchRenalConditions(query: string): RenalConditionEntry[] {
  const q = query.toLowerCase();
  return Object.values(RENAL_CONDITIONS).filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.nameEs.toLowerCase().includes(q) ||
    c.category.toLowerCase().includes(q) ||
    c.description.toLowerCase().includes(q) ||
    c.pathophysiology.toLowerCase().includes(q) ||
    c.patientExplanation.toLowerCase().includes(q),
  );
}

/** Get a renal condition by its unique ID. */
export function getRenalConditionById(id: string): RenalConditionEntry | undefined {
  return RENAL_CONDITIONS[id];
}

/** Filter conditions by category. */
export function getRenalByCategory(category: RenalCategory): RenalConditionEntry[] {
  return Object.values(RENAL_CONDITIONS).filter(c => c.category === category);
}

/** Get all renal condition IDs. */
export function getAllRenalConditionIds(): string[] {
  return Object.keys(RENAL_CONDITIONS);
}
