/**
 * Urologic Conditions Database
 *
 * Comprehensive reference of 6 urologic conditions with clinical summaries,
 * diagnostic workup, treatment guidance, and bilingual patient education.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type UrologicCategory =
  | 'prostatic'
  | 'functional'
  | 'sexual-health'
  | 'testicular'
  | 'inflammatory';

export interface UrologicConditionEntry {
  id: string;
  name: string;
  nameEs: string;
  category: UrologicCategory;
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
// Compact helper
// ---------------------------------------------------------------------------

function uro(
  id: string, name: string, nameEs: string,
  category: UrologicCategory, icd11: string,
  description: string, descriptionEs: string,
  riskFactors: string[], pathophysiology: string, pathophysiologyEs: string,
  symptoms: string[],
  diagnostics: { tests: string[]; imaging: string[]; criteria: string[] },
  treatment: { medications: string[]; procedures: string[]; lifestyle: string[] },
  emergencySigns: string[], patientExplanation: string, patientExplanationEs: string,
): UrologicConditionEntry {
  return {
    id, name, nameEs, category, icd11, description, descriptionEs,
    riskFactors, pathophysiology, pathophysiologyEs, symptoms,
    diagnostics, treatment, emergencySigns, patientExplanation, patientExplanationEs,
  };
}

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const UROLOGIC_CONDITIONS: Record<string, UrologicConditionEntry> = {

  'bph': uro(
    'bph', 'Benign Prostatic Hyperplasia (BPH)', 'Hiperplasia prostatica benigna (HPB)',
    'prostatic', 'GA90.0',
    'Non-malignant enlargement of the prostate gland causing lower urinary tract symptoms. Progressive condition affecting most men over 50, resulting from stromal and epithelial proliferation in the transition zone.',
    'Agrandamiento no maligno de la prostata que causa sintomas urinarios bajos. Condicion progresiva que afecta a la mayoria de hombres mayores de 50 anos, resultado de proliferacion estromal y epitelial en la zona de transicion.',
    ['Age >50 years', 'Family history of BPH', 'Metabolic syndrome', 'Obesity', 'Physical inactivity', 'Western diet'],
    'Dihydrotestosterone (DHT) stimulates prostatic stromal and epithelial cell proliferation in the transition zone. Enlargement compresses the urethra, increasing bladder outlet resistance and causing obstructive symptoms.',
    'La dihidrotestosterona (DHT) estimula la proliferacion de celulas estromales y epiteliales prostaticas en la zona de transicion. El agrandamiento comprime la uretra, aumentando la resistencia de salida vesical y causando sintomas obstructivos.',
    ['Weak or intermittent urinary stream', 'Urinary frequency and nocturia', 'Hesitancy and straining to void', 'Sensation of incomplete bladder emptying', 'Urgency'],
    {
      tests: ['International Prostate Symptom Score (IPSS)', 'Digital rectal examination', 'Serum PSA', 'Urinalysis', 'Post-void residual measurement'],
      imaging: ['Transrectal ultrasound for prostate volume', 'Renal ultrasound if elevated creatinine or hematuria'],
      criteria: ['IPSS score: mild <8, moderate 8-19, severe >19', 'Prostate volume >30 mL suggests significant enlargement', 'Post-void residual >200 mL indicates significant retention'],
    },
    {
      medications: ['Alpha-blockers: tamsulosin, silodosin, alfuzosin', '5-alpha-reductase inhibitors: finasteride, dutasteride for large prostates', 'Combination therapy for severe symptoms', 'PDE5 inhibitors: tadalafil for combined LUTS and erectile dysfunction'],
      procedures: ['TURP (transurethral resection of prostate)', 'HoLEP (holmium laser enucleation)', 'UroLift (prostatic urethral lift)', 'Rezum water vapor therapy', 'Simple prostatectomy for very large glands >80 mL'],
      lifestyle: ['Avoid caffeine and alcohol before bedtime', 'Timed voiding schedules', 'Reduce fluid intake in evening', 'Avoid decongestants and antihistamines', 'Regular exercise and weight management'],
    },
    ['Acute urinary retention (complete inability to void)', 'Severe abdominal pain with distended bladder', 'Gross hematuria that does not clear', 'Signs of renal failure (elevated creatinine, edema)', 'Recurrent urinary tract infections'],
    'BPH means your prostate gland has enlarged and is pressing on the tube that carries urine from your bladder. This is not cancer and does not increase your cancer risk. Medications can relax the prostate or shrink it over time, improving flow. If medications do not work well enough, minimally invasive procedures can open the channel without major surgery. Most men find significant relief with treatment.',
    'La HPB significa que su prostata se ha agrandado y esta presionando el tubo que lleva la orina desde su vejiga. Esto no es cancer y no aumenta su riesgo de cancer. Los medicamentos pueden relajar la prostata o reducirla con el tiempo, mejorando el flujo. Si los medicamentos no funcionan lo suficiente, procedimientos minimamente invasivos pueden abrir el canal sin cirugia mayor. La mayoria de los hombres encuentran alivio significativo con tratamiento.',
  ),

  'prostatitis': uro(
    'prostatitis', 'Prostatitis', 'Prostatitis',
    'inflammatory', 'GC01',
    'Inflammation of the prostate classified as acute bacterial, chronic bacterial, chronic pelvic pain syndrome, or asymptomatic. Most common form is chronic pelvic pain syndrome without clear bacterial infection.',
    'Inflamacion de la prostata clasificada como bacteriana aguda, bacteriana cronica, sindrome de dolor pelvico cronico, o asintomatica. La forma mas comun es el sindrome de dolor pelvico cronico sin infeccion bacteriana clara.',
    ['Prior urinary tract infection', 'Urethral catheterization or instrumentation', 'Anal intercourse', 'Pelvic trauma', 'Stress and psychological factors (CPPS)', 'Autoimmune conditions'],
    'Acute bacterial prostatitis results from ascending urethral infection or reflux of infected urine. Chronic pelvic pain syndrome involves neuromuscular dysfunction, pelvic floor hypertonicity, and possibly inflammatory mediators without clear bacterial etiology.',
    'La prostatitis bacteriana aguda resulta de infeccion uretral ascendente o reflujo de orina infectada. El sindrome de dolor pelvico cronico involucra disfuncion neuromuscular, hipertonia del piso pelvico, y posiblemente mediadores inflamatorios sin etiologia bacteriana clara.',
    ['Perineal, pelvic, or lower back pain', 'Dysuria and urinary frequency', 'Obstructive voiding symptoms', 'Post-ejaculatory pain', 'Fever and chills (acute bacterial)', 'Tender prostate on digital rectal exam'],
    {
      tests: ['Urinalysis and urine culture', 'Pre- and post-prostatic massage urine test (Meares-Stamey)', 'PSA (often elevated but not diagnostic)', 'CBC if systemic infection suspected'],
      imaging: ['Transrectal ultrasound if abscess suspected', 'CT pelvis for complicated acute prostatitis'],
      criteria: ['Acute bacterial: fever, tender prostate, positive urine culture', 'Chronic bacterial: recurrent UTIs with same organism', 'CPPS: pelvic pain >3 months without infection'],
    },
    {
      medications: ['Acute bacterial: fluoroquinolone or TMP-SMX for 4-6 weeks', 'Chronic bacterial: prolonged antibiotics 6-12 weeks', 'CPPS: alpha-blockers, NSAIDs, pregabalin for neuropathic pain', 'Phytotherapy: quercetin, saw palmetto'],
      procedures: ['Prostatic massage for chronic forms', 'Transurethral drainage if abscess present', 'Pelvic floor physical therapy for CPPS'],
      lifestyle: ['Avoid prolonged sitting', 'Regular ejaculation may help drainage', 'Stress reduction techniques', 'Warm sitz baths', 'Avoid caffeine, alcohol, and spicy foods'],
    },
    ['High fever with inability to void (acute retention)', 'Severe systemic sepsis symptoms', 'Gross hematuria', 'Inability to pass urine despite urge'],
    'Prostatitis is inflammation of your prostate gland. Acute bacterial prostatitis is a serious infection requiring antibiotics. Chronic pelvic pain syndrome is more common but harder to treat, as it involves muscle tension and nerve sensitivity in the pelvic area. Treatment combines medications, physical therapy for pelvic floor muscles, and lifestyle changes. Many men see improvement with multimodal therapy.',
    'La prostatitis es inflamacion de su glandula prostatica. La prostatitis bacteriana aguda es una infeccion seria que requiere antibioticos. El sindrome de dolor pelvico cronico es mas comun pero mas dificil de tratar, ya que involucra tension muscular y sensibilidad nerviosa en el area pelvica. El tratamiento combina medicamentos, fisioterapia para musculos del piso pelvico, y cambios en el estilo de vida. Muchos hombres ven mejoria con terapia multimodal.',
  ),

  'erectile-dysfunction': uro(
    'erectile-dysfunction', 'Erectile Dysfunction', 'Disfuncion erectil',
    'sexual-health', 'HA00',
    'Persistent inability to achieve or maintain an erection sufficient for satisfactory sexual performance. Affects approximately 50% of men aged 40-70 and often serves as early marker of cardiovascular disease.',
    'Incapacidad persistente de lograr o mantener una ereccion suficiente para desempeno sexual satisfactorio. Afecta aproximadamente al 50% de hombres de 40-70 anos y frecuentemente sirve como marcador temprano de enfermedad cardiovascular.',
    ['Diabetes mellitus', 'Hypertension', 'Hyperlipidemia', 'Cardiovascular disease', 'Obesity', 'Smoking', 'Sedentary lifestyle', 'Depression and anxiety', 'Medications (beta-blockers, SSRIs)', 'Pelvic surgery or radiation'],
    'Impaired nitric oxide production and endothelial dysfunction reduce arterial inflow. Venous leak, hormonal imbalances (low testosterone), neurogenic factors, and psychological components contribute. ED shares risk factors with atherosclerosis.',
    'Produccion deteriorada de oxido nitrico y disfuncion endotelial reducen el flujo arterial de entrada. Fuga venosa, desequilibrios hormonales (testosterona baja), factores neurogenicos, y componentes psicologicos contribuyen. La DE comparte factores de riesgo con aterosclerosis.',
    ['Inability to achieve erection adequate for penetration', 'Inability to maintain erection during intercourse', 'Reduced rigidity', 'Decreased libido (if testosterone deficient)', 'Gradual onset suggests organic cause', 'Preserved morning erections suggest psychogenic etiology'],
    {
      tests: ['Sexual Health Inventory for Men (SHIM/IIEF-5)', 'Fasting glucose and HbA1c', 'Lipid panel', 'Morning serum total testosterone', 'TSH', 'Prolactin if low libido'],
      imaging: ['Penile duplex Doppler ultrasound for vascular assessment', 'Nocturnal penile tumescence testing if etiology uncertain'],
      criteria: ['IIEF-5 score: severe ED <8, moderate 8-11, mild-moderate 12-16', 'Testosterone <300 ng/dL suggests hypogonadism', 'Consider cardiovascular risk assessment'],
    },
    {
      medications: ['PDE5 inhibitors: sildenafil, tadalafil, vardenafil, avanafil (first-line)', 'Testosterone replacement if hypogonadal (with cardiology clearance)', 'Intracavernosal injections: alprostadil, trimix (second-line)', 'Intraurethral alprostadil suppository'],
      procedures: ['Vacuum erection device', 'Penile prosthesis implantation (inflatable or malleable)', 'Low-intensity shockwave therapy (investigational)'],
      lifestyle: ['Regular aerobic exercise 150 min/week', 'Weight loss if BMI >25', 'Smoking cessation', 'Limit alcohol to 1-2 drinks/day', 'Manage diabetes and hypertension aggressively', 'Stress reduction and couples counseling'],
    },
    ['Sudden complete loss of erectile function (may indicate stroke or cardiovascular event)', 'Priapism (erection lasting >4 hours after medication use)', 'Chest pain during sexual activity'],
    'Erectile dysfunction is very common and treatable. It often signals early blood vessel disease since the small arteries in the penis are affected before larger arteries. Oral medications like sildenafil work well for most men by improving blood flow. Lifestyle changes—exercise, weight loss, quitting smoking—can significantly improve function naturally. If pills do not work, injections or devices provide excellent alternatives. Treating ED improves quality of life and may protect your heart.',
    'La disfuncion erectil es muy comun y tratable. Frecuentemente senala enfermedad vascular temprana ya que las arterias pequenas del pene se afectan antes que arterias mas grandes. Medicamentos orales como sildenafil funcionan bien para la mayoria de hombres mejorando el flujo sanguineo. Cambios en estilo de vida—ejercicio, perdida de peso, dejar de fumar—pueden mejorar significativamente la funcion naturalmente. Si las pastillas no funcionan, inyecciones o dispositivos proveen excelentes alternativas. Tratar la DE mejora la calidad de vida y puede proteger su corazon.',
  ),

  'urinary-incontinence': uro(
    'urinary-incontinence', 'Urinary Incontinence', 'Incontinencia urinaria',
    'functional', 'MF50',
    'Involuntary urine leakage including stress incontinence (with physical activity), urge incontinence (with sudden urge), and overflow incontinence (with retention). Significantly impacts quality of life but highly treatable.',
    'Fuga involuntaria de orina incluyendo incontinencia de estres (con actividad fisica), incontinencia de urgencia (con urgencia subita), e incontinencia por rebosamiento (con retencion). Impacta significativamente la calidad de vida pero es altamente tratable.',
    ['Female sex (stress incontinence)', 'Vaginal childbirth and pelvic trauma', 'Age >65 years', 'Obesity', 'Prostate surgery (men)', 'Neurological disease (stroke, MS, Parkinsons)', 'Chronic cough', 'Diabetes', 'Medications (diuretics, alpha-blockers)'],
    'Stress incontinence: urethral hypermobility or intrinsic sphincter deficiency allows leakage with increased abdominal pressure. Urge incontinence: detrusor overactivity causes involuntary bladder contractions. Overflow: impaired emptying from obstruction or acontractile bladder.',
    'Incontinencia de estres: hipermovilidad uretral o deficiencia esfinterica intrinseca permite fuga con presion abdominal aumentada. Incontinencia de urgencia: sobreactividad del detrusor causa contracciones vesicales involuntarias. Rebosamiento: vaciado deteriorado por obstruccion o vejiga acontractil.',
    ['Stress: leakage with cough, sneeze, laugh, exercise', 'Urge: sudden compelling urge followed by leakage', 'Frequency (>8 voids/day) and nocturia (>1 void/night)', 'Continuous dribbling (overflow)', 'Mixed symptoms common'],
    {
      tests: ['3-day voiding diary', 'Urinalysis to exclude infection', 'Post-void residual measurement', 'Cough stress test', 'Urodynamic studies if surgery planned or diagnosis uncertain'],
      imaging: ['Renal ultrasound if elevated creatinine', 'Cystoscopy if hematuria or prior pelvic surgery'],
      criteria: ['PVR >200 mL suggests overflow', 'Urodynamics: detrusor overactivity confirms urge incontinence', 'Positive cough stress test confirms stress incontinence'],
    },
    {
      medications: ['Urge: anticholinergics (oxybutynin, tolterodine, solifenacin), beta-3 agonist (mirabegron, vibegron)', 'Overflow: alpha-blockers if obstruction, bethanechol rarely effective', 'Topical vaginal estrogen for postmenopausal women'],
      procedures: ['Stress (women): midurethral sling (TVT/TOT), Burch colposuspension, bulking agents', 'Stress (men): artificial urinary sphincter, male sling', 'Urge: onabotulinumtoxinA bladder injection, sacral neuromodulation, percutaneous tibial nerve stimulation', 'Overflow: clean intermittent catheterization, indwelling catheter'],
      lifestyle: ['Pelvic floor muscle training (Kegel exercises)', 'Bladder training and timed voiding', 'Weight loss if BMI >25', 'Fluid management (avoid excessive or restricted intake)', 'Avoid bladder irritants (caffeine, alcohol, artificial sweeteners)'],
    },
    ['Acute urinary retention with severe pain', 'Signs of urinary tract infection with fever', 'New neurological symptoms (leg weakness, saddle anesthesia)', 'Hematuria that does not clear'],
    'Urinary incontinence is leakage of urine that you cannot control. It is very common, especially in women who have had children and older adults. Stress incontinence happens when pressure on your bladder (from coughing, sneezing, or exercise) overwhelms a weak valve. Urge incontinence happens when your bladder squeezes without warning. Pelvic floor exercises help strengthen the muscles, medications can calm an overactive bladder, and procedures have high success rates. Most people see major improvement with treatment.',
    'La incontinencia urinaria es fuga de orina que no puede controlar. Es muy comun, especialmente en mujeres que han tenido hijos y adultos mayores. La incontinencia de estres ocurre cuando presion en su vejiga (de toser, estornudar, o ejercicio) sobrepasa una valvula debil. La incontinencia de urgencia ocurre cuando su vejiga se contrae sin aviso. Ejercicios del piso pelvico ayudan a fortalecer los musculos, medicamentos pueden calmar una vejiga hiperactiva, y procedimientos tienen tasas altas de exito. La mayoria de personas ven mejoria importante con tratamiento.',
  ),

  'overactive-bladder': uro(
    'overactive-bladder', 'Overactive Bladder', 'Vejiga hiperactiva',
    'functional', 'MF51',
    'Syndrome characterized by urinary urgency with or without urge incontinence, usually accompanied by frequency and nocturia. Results from involuntary detrusor contractions during bladder filling.',
    'Sindrome caracterizado por urgencia urinaria con o sin incontinencia de urgencia, usualmente acompanado de frecuencia y nicturia. Resulta de contracciones involuntarias del detrusor durante el llenado vesical.',
    ['Age >65 years', 'Female sex', 'Obesity', 'Neurological conditions (stroke, MS, Parkinsons)', 'Diabetes mellitus', 'Prior pelvic surgery', 'Bladder outlet obstruction', 'Idiopathic (most common)'],
    'Detrusor overactivity from neurogenic causes (stroke, spinal cord injury) or non-neurogenic myogenic changes in bladder smooth muscle. Altered sensory input, central nervous system processing abnormalities, and urothelial dysfunction contribute to urgency sensation.',
    'Sobreactividad del detrusor por causas neurogenicas (derrame, lesion medular) o cambios miogenicos no neurogenicos en musculo liso vesical. Entrada sensorial alterada, anormalidades de procesamiento del sistema nervioso central, y disfuncion urotelial contribuyen a la sensacion de urgencia.',
    ['Sudden compelling urge to urinate', 'Urinary frequency (>8 voids/24 hours)', 'Nocturia (>1 void/night)', 'Urge urinary incontinence', 'Urgency triggered by running water, cold, key-in-lock'],
    {
      tests: ['3-day voiding diary (critical for diagnosis)', 'Urinalysis and urine culture to exclude infection', 'Post-void residual to exclude retention', 'Urodynamic studies if refractory to treatment'],
      imaging: ['Generally not required', 'Renal ultrasound if abnormal renal function'],
      criteria: ['Urgency at least several times per week', 'Frequency >8 voids/day or nocturia >1/night', 'Exclusion of UTI and other pathology'],
    },
    {
      medications: ['Anticholinergics: oxybutynin (immediate or extended-release), tolterodine, solifenacin, darifenacin, fesoterodine', 'Beta-3 adrenergic agonist: mirabegron 25-50 mg daily, vibegron 75 mg daily', 'Combination anticholinergic + mirabegron for refractory cases'],
      procedures: ['OnabotulinumtoxinA (Botox) 100 units intradetrusor injection', 'Sacral neuromodulation (InterStim)', 'Percutaneous tibial nerve stimulation (PTNS)'],
      lifestyle: ['Bladder retraining: gradually increase voiding intervals', 'Timed voiding schedules', 'Fluid management: 1.5-2 L/day spread throughout day', 'Avoid bladder irritants: caffeine, alcohol, citrus, carbonated beverages', 'Weight loss if obese', 'Pelvic floor exercises'],
    },
    ['Acute urinary retention', 'New neurological deficits (consider spinal cord compression)', 'Severe hematuria', 'Recurrent urinary tract infections'],
    'Overactive bladder means your bladder muscle contracts without warning, giving you a sudden strong urge to urinate. This is not a normal part of aging, even though it becomes more common with age. Behavioral strategies like bladder retraining can help you regain control. Medications relax the bladder muscle, reducing urgency and frequency. If medications do not work well enough, Botox injections into the bladder or nerve stimulation devices provide excellent relief. Most patients can return to normal activities.',
    'Vejiga hiperactiva significa que su musculo vesical se contrae sin aviso, dandole una urgencia fuerte y subita de orinar. Esto no es parte normal del envejecimiento, aunque se vuelve mas comun con la edad. Estrategias de comportamiento como reentrenamiento vesical pueden ayudarle a recuperar control. Medicamentos relajan el musculo vesical, reduciendo urgencia y frecuencia. Si los medicamentos no funcionan suficientemente bien, inyecciones de Botox en la vejiga o dispositivos de estimulacion nerviosa proveen excelente alivio. La mayoria de pacientes pueden retornar a actividades normales.',
  ),

  'testicular-torsion': uro(
    'testicular-torsion', 'Testicular Torsion', 'Torsion testicular',
    'testicular', 'GC50',
    'Urologic emergency caused by twisting of spermatic cord cutting off testicular blood supply. Salvage depends on duration—testis viability drops significantly after 6 hours. Most common in adolescents 12-18 years.',
    'Emergencia urologica causada por torsion del cordon espermatico que corta el suministro sanguineo testicular. El salvamento depende de la duracion—la viabilidad testicular disminuye significativamente despues de 6 horas. Mas comun en adolescentes de 12-18 anos.',
    ['Adolescent age 12-18 years (peak incidence)', 'Neonatal period (perinatal torsion)', 'Bell-clapper deformity (horizontal testicular lie)', 'Prior episode of testicular pain that resolved', 'Torsion often occurs at night or after physical activity'],
    'Inadequate fixation of testis to tunica vaginalis (bell-clapper deformity) allows rotation around the spermatic cord axis. Twisting obstructs venous outflow first, then arterial inflow, leading to testicular ischemia and necrosis if not promptly detorsed.',
    'Fijacion inadecuada del testiculo a la tunica vaginal (deformidad en badajo de campana) permite rotacion alrededor del eje del cordon espermatico. La torsion obstruye el flujo venoso primero, luego el flujo arterial, llevando a isquemia y necrosis testicular si no se destorsiona prontamente.',
    ['Sudden severe unilateral scrotal pain', 'Nausea and vomiting', 'High-riding testis with horizontal lie', 'Absent cremasteric reflex (most sensitive physical finding)', 'Scrotal erythema and edema', 'No relief with elevation (negative Prehn sign)'],
    {
      tests: ['Clinical diagnosis—do not delay surgery for testing', 'Urinalysis (typically normal, helps exclude epididymitis)', 'TWIST score (Testicular Workup for Ischemia and Suspected Torsion)'],
      imaging: ['Color Doppler ultrasound: absent or decreased testicular blood flow', 'Do not delay surgery if high clinical suspicion', 'Imaging useful for equivocal cases only'],
      criteria: ['TWIST score ≥5 warrants emergent surgery', 'Absent cremasteric reflex highly suggestive', 'Symptom duration critical: <6 hours best salvage'],
    },
    {
      medications: ['Analgesia for pain control pre-operatively', 'Antibiotics NOT indicated (not infectious)'],
      procedures: ['Emergent scrotal exploration and detorsion within 6 hours', 'Bilateral orchiopexy (fix both testes to prevent future torsion)', 'Orchiectomy if testis non-viable', 'Manual detorsion in ED as temporizing measure (rotate outward "open the book")'],
      lifestyle: ['After orchiopexy: avoid contact sports for 2-4 weeks', 'Awareness that contralateral testis also at risk without fixation', 'Regular testicular self-examination'],
    },
    ['This IS the emergency—any sudden severe testicular pain requires immediate evaluation', 'Fever suggests epididymitis but does not exclude torsion', 'Do not wait—testicular loss common after 6-12 hours'],
    'Testicular torsion is when your testicle twists on its cord, cutting off blood supply. This is a surgical emergency—the testicle will die without blood flow. If you have sudden severe testicular pain, go to the emergency room immediately. Surgery must happen within 6 hours for the best chance of saving the testicle. During surgery, the doctor will untwist the testicle and sew both testicles in place so this cannot happen again. Do not wait or try to treat this at home.',
    'Torsion testicular es cuando su testiculo se tuerce en su cordon, cortando el suministro sanguineo. Esto es una emergencia quirurgica—el testiculo morira sin flujo sanguineo. Si tiene dolor testicular severo subito, vaya a la sala de emergencias inmediatamente. La cirugia debe ocurrir dentro de 6 horas para la mejor oportunidad de salvar el testiculo. Durante la cirugia, el medico destorsionara el testiculo y cosera ambos testiculos en su lugar para que esto no pueda pasar otra vez. No espere ni intente tratar esto en casa.',
  ),

};

// ---------------------------------------------------------------------------
// Utility functions
// ---------------------------------------------------------------------------

/** Search urologic conditions by query string (case-insensitive). */
export function searchUrologicConditions(query: string): UrologicConditionEntry[] {
  const q = query.toLowerCase();
  return Object.values(UROLOGIC_CONDITIONS).filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.nameEs.toLowerCase().includes(q) ||
    c.description.toLowerCase().includes(q) ||
    c.descriptionEs.toLowerCase().includes(q) ||
    c.category.toLowerCase().includes(q) ||
    c.symptoms.some(s => s.toLowerCase().includes(q)) ||
    c.patientExplanation.toLowerCase().includes(q),
  );
}

/** Get urologic condition by ID. */
export function getUrologicConditionById(id: string): UrologicConditionEntry | undefined {
  return UROLOGIC_CONDITIONS[id];
}

/** Get all urologic conditions as array. */
export function getAllUrologicConditions(): UrologicConditionEntry[] {
  return Object.values(UROLOGIC_CONDITIONS);
}

/** Filter urologic conditions by category. */
export function getUrologicConditionsByCategory(category: UrologicCategory): UrologicConditionEntry[] {
  return Object.values(UROLOGIC_CONDITIONS).filter(c => c.category === category);
}

/** Get total count of urologic conditions. */
export function getUrologicConditionCount(): number {
  return Object.keys(UROLOGIC_CONDITIONS).length;
}
