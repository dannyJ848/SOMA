/**
 * Urology Conditions Database
 *
 * Comprehensive reference of 30+ urologic conditions with
 * clinical summaries, diagnostic workup, and treatment guidance.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type UrologyConditionCategory =
  | 'oncologic'
  | 'infectious'
  | 'stone-disease'
  | 'congenital'
  | 'functional'
  | 'trauma'
  | 'male-reproductive'
  | 'pediatric-urology';

export interface UrologyConditionEntry {
  id: string;
  name: string;
  category: UrologyConditionCategory;
  description: string;
  clinicalPresentation: string[];
  diagnosticWorkup: string[];
  treatment: string;
  prognosis: string;
  icdCode: string;
}

// ---------------------------------------------------------------------------
// Compact helper
// ---------------------------------------------------------------------------

function uro(
  id: string, name: string,
  category: UrologyConditionCategory, icdCode: string,
  description: string, clinicalPresentation: string[],
  diagnosticWorkup: string[], treatment: string, prognosis: string,
): UrologyConditionEntry {
  return {
    id, name, category, description,
    clinicalPresentation, diagnosticWorkup,
    treatment, prognosis, icdCode,
  };
}

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const UROLOGY_CONDITION_ENTRIES: Record<string, UrologyConditionEntry> = {

  // ---- Oncologic (5) ------------------------------------------------------

  'prostate-cancer': uro(
    'prostate-cancer', 'Prostate Cancer',
    'oncologic', 'C61',
    'Adenocarcinoma of the prostate gland; the most common non-cutaneous cancer in men. Ranges from indolent low-grade disease to aggressive metastatic carcinoma.',
    ['Often asymptomatic in early stages', 'Elevated PSA on screening', 'Obstructive voiding symptoms in locally advanced disease', 'Bone pain with metastases', 'Hematuria or hematospermia (rare)'],
    ['Serum PSA and digital rectal exam', 'Multiparametric prostate MRI (PI-RADS)', 'Transrectal or transperineal prostate biopsy with Gleason grading', 'Bone scan and CT abdomen/pelvis for staging', 'Genomic classifiers (Decipher, Oncotype DX Prostate)'],
    'Risk-stratified: active surveillance for low-risk (Gleason 3+3); radical prostatectomy or radiation therapy for intermediate/high-risk; androgen deprivation therapy (ADT) with or without docetaxel or novel hormonal agents for advanced/metastatic disease.',
    'Excellent for localized disease (>95% 10-year survival for low/intermediate risk). Metastatic castration-resistant disease median survival 2-3 years with modern therapies.',
  ),

  'bladder-cancer': uro(
    'bladder-cancer', 'Bladder Cancer',
    'oncologic', 'C67',
    'Urothelial (transitional cell) carcinoma of the bladder; strongly associated with smoking and occupational chemical exposure. Non-muscle-invasive (75%) vs muscle-invasive disease.',
    ['Painless gross hematuria (classic presentation)', 'Irritative voiding symptoms (frequency, urgency, dysuria)', 'Recurrent UTIs', 'Pelvic pain or flank pain in advanced disease', 'Weight loss and fatigue with metastases'],
    ['Urinalysis and urine cytology', 'Cystoscopy with biopsy', 'CT urogram for upper tract evaluation', 'Bimanual exam under anesthesia', 'PET-CT for staging of muscle-invasive disease'],
    'Non-muscle-invasive: transurethral resection (TURBT) followed by intravesical BCG or chemotherapy. Muscle-invasive: neoadjuvant cisplatin-based chemotherapy then radical cystectomy, or trimodal therapy (TURBT + chemoradiation). Metastatic: checkpoint immunotherapy (pembrolizumab), enfortumab vedotin, or erdafitinib.',
    'Non-muscle-invasive 5-year survival ~90% but high recurrence rate (50-70%); muscle-invasive ~50% 5-year survival; metastatic median survival ~15 months with modern regimens.',
  ),

  'renal-cell-carcinoma': uro(
    'renal-cell-carcinoma', 'Renal Cell Carcinoma',
    'oncologic', 'C64',
    'Primary malignancy of the renal parenchyma; clear cell subtype is most common (70-80%). Increasingly detected incidentally on cross-sectional imaging.',
    ['Classic triad (rare): flank pain, hematuria, palpable mass', 'Often incidentally discovered on imaging', 'Paraneoplastic syndromes (erythrocytosis, hypercalcemia, Stauffer syndrome)', 'Varicocele (especially left-sided, non-reducible when supine)', 'Constitutional symptoms with advanced disease'],
    ['Contrast-enhanced CT abdomen/pelvis (renal mass protocol)', 'MRI for characterization of indeterminate lesions', 'Chest CT for pulmonary metastasis evaluation', 'Renal mass biopsy if diagnosis uncertain', 'Bosniak classification for cystic lesions'],
    'Localized: partial nephrectomy (preferred for T1) or radical nephrectomy. Active surveillance for small renal masses in elderly/comorbid patients. Advanced: immune checkpoint combinations (nivolumab + ipilimumab, or pembrolizumab + axitinib); targeted TKIs (cabozantinib, sunitinib).',
    'Localized T1 disease >90% 5-year survival after surgery. Metastatic clear cell RCC median survival ~30 months with modern IO-TKI combinations. Non-clear cell subtypes generally have worse prognosis.',
  ),

  'testicular-cancer': uro(
    'testicular-cancer', 'Testicular Cancer',
    'oncologic', 'C62',
    'Germ cell tumors (seminoma and non-seminoma) accounting for >95% of testicular malignancies. Most common solid tumor in men aged 15-35. Highly curable even with metastatic disease.',
    ['Painless testicular mass or swelling (classic)', 'Dull ache or heaviness in scrotum', 'Gynecomastia (hCG-producing tumors)', 'Back pain from retroperitoneal lymphadenopathy', 'Dyspnea from pulmonary metastases'],
    ['Scrotal ultrasound (first-line imaging)', 'Serum tumor markers: AFP, beta-hCG, LDH', 'CT chest/abdomen/pelvis for staging', 'Radical inguinal orchiectomy (diagnostic and therapeutic)', 'Pathologic staging determines further management'],
    'Stage I: radical orchiectomy then surveillance, adjuvant chemotherapy, or retroperitoneal lymph node dissection depending on histology and risk. Advanced: BEP chemotherapy (bleomycin, etoposide, cisplatin) is standard; salvage regimens or high-dose chemotherapy with stem cell transplant for refractory cases.',
    'Overall cure rate >95%. Stage I seminoma >99% cure. Stage III non-seminoma with good-risk factors ~90% cure. Late relapse possible; long-term surveillance required.',
  ),

  'penile-cancer': uro(
    'penile-cancer', 'Penile Cancer',
    'oncologic', 'C60',
    'Squamous cell carcinoma of the penis; rare in developed countries. Strongly associated with HPV infection, phimosis, poor hygiene, and tobacco use.',
    ['Painless penile lesion or ulcer (glans or prepuce)', 'Palpable inguinal lymphadenopathy', 'Malodorous discharge', 'Phimosis masking the lesion', 'Urethral obstruction in advanced cases'],
    ['Biopsy of penile lesion', 'MRI of penis for local staging', 'CT or PET-CT for nodal and distant staging', 'Inguinal lymph node assessment (dynamic sentinel node biopsy)', 'HPV testing'],
    'Early: wide local excision, glansectomy, or Mohs surgery with organ preservation. Advanced: partial or total penectomy. Inguinal lymph node dissection for node-positive disease. Neoadjuvant or palliative chemotherapy (TIP regimen) for advanced stages.',
    'Early-stage (N0) 5-year survival >80%. Node-positive disease drops to ~30-50%. Distant metastases carry very poor prognosis.',
  ),

  // ---- Infectious (4) -----------------------------------------------------

  'uti-lower': uro(
    'uti-lower', 'Lower Urinary Tract Infection (Cystitis)',
    'infectious', 'N30.0',
    'Bacterial infection of the bladder, most commonly caused by E. coli. Much more prevalent in women due to shorter urethral length. Categorized as uncomplicated or complicated.',
    ['Dysuria (painful urination)', 'Urinary frequency and urgency', 'Suprapubic pain or pressure', 'Cloudy or malodorous urine', 'Hematuria (gross or microscopic)'],
    ['Urinalysis with microscopy (pyuria, bacteriuria, nitrites)', 'Urine culture and sensitivity (for complicated or recurrent cases)', 'Point-of-care urine dipstick', 'Imaging generally not needed for uncomplicated cystitis', 'CT urogram or renal ultrasound if complicated or recurrent'],
    'Uncomplicated cystitis: nitrofurantoin 5 days, TMP-SMX 3 days, or fosfomycin single dose. Complicated: fluoroquinolone or broader-spectrum antibiotics guided by culture. Recurrent: prophylactic strategies (post-coital prophylaxis, cranberry, vaginal estrogen in postmenopausal women).',
    'Excellent for uncomplicated cystitis; resolution within 2-3 days of treatment. Recurrence in ~25-30% of women within 6 months. Complicated UTIs carry higher risk of treatment failure.',
  ),

  'uti-upper': uro(
    'uti-upper', 'Upper Urinary Tract Infection (Pyelonephritis)',
    'infectious', 'N10',
    'Bacterial infection of the renal parenchyma, typically ascending from the lower urinary tract. Can progress to urosepsis if untreated. Complicated pyelonephritis associated with obstruction or anatomic abnormalities.',
    ['Flank pain and costovertebral angle tenderness', 'High fever and rigors', 'Nausea and vomiting', 'Lower urinary tract symptoms (dysuria, frequency)', 'Ill or toxic appearance in severe cases'],
    ['Urinalysis and urine culture with sensitivity', 'Blood cultures if sepsis suspected', 'CBC, BMP, lactate', 'CT abdomen/pelvis with contrast (to exclude obstruction or abscess)', 'Renal ultrasound as initial imaging in pregnancy'],
    'Outpatient: oral fluoroquinolone (ciprofloxacin or levofloxacin) for 7 days, or TMP-SMX 14 days if susceptible. Inpatient: IV ceftriaxone, fluoroquinolone, or piperacillin-tazobactam. Obstructive pyelonephritis: emergent ureteral stent or percutaneous nephrostomy tube drainage.',
    'Good with appropriate antibiotics; defervescence expected within 48-72 hours. Emphysematous pyelonephritis or perinephric abscess increases morbidity. Recurrent pyelonephritis warrants evaluation for anatomic abnormalities.',
  ),

  'epididymitis': uro(
    'epididymitis', 'Epididymitis',
    'infectious', 'N45.1',
    'Inflammation of the epididymis, usually infectious. In young men (<35) typically from STIs (Chlamydia, Gonorrhea); in older men from urinary pathogens (E. coli). Epididymo-orchitis if testis also involved.',
    ['Gradual onset of unilateral scrotal pain and swelling', 'Positive Prehn sign (relief with scrotal elevation)', 'Urethral discharge (if STI-related)', 'Fever and erythema of scrotal skin', 'Reactive hydrocele'],
    ['Scrotal ultrasound with Doppler (increased flow to epididymis)', 'Urinalysis and urine culture', 'Urethral swab or NAAT for Chlamydia and Gonorrhea', 'CBC with differential', 'Color-flow Doppler to differentiate from testicular torsion'],
    'STI-related: ceftriaxone 500 mg IM single dose + doxycycline 100 mg BID for 10 days. Enteric organisms: levofloxacin 500 mg daily for 10 days. Supportive: scrotal elevation, NSAIDs, ice. Abscess may require surgical drainage.',
    'Full resolution in 2-4 weeks with appropriate antibiotics. Chronic epididymitis if inadequately treated. Fertility may be affected in bilateral or severe cases.',
  ),

  'prostatitis': uro(
    'prostatitis', 'Prostatitis',
    'infectious', 'N41',
    'Inflammation of the prostate gland classified into acute bacterial (type I), chronic bacterial (type II), chronic pelvic pain syndrome (type III), and asymptomatic (type IV). Type III is the most common form.',
    ['Acute: fever, chills, severe perineal/pelvic pain, obstructive voiding symptoms', 'Chronic bacterial: recurrent UTIs, dull pelvic ache, post-ejaculatory pain', 'CPPS: chronic pelvic pain >3 months, voiding and sexual dysfunction', 'Painful ejaculation', 'Tender, boggy prostate on exam (acute)'],
    ['Urinalysis and urine culture', 'Meares-Stamey 4-glass test or 2-glass pre/post-massage test', 'PSA (often elevated in acute; use cautiously)', 'Transrectal ultrasound if abscess suspected', 'DO NOT perform vigorous prostate massage in acute prostatitis'],
    'Acute bacterial: fluoroquinolone or TMP-SMX for 4-6 weeks; IV antibiotics if septic. Chronic bacterial: prolonged oral antibiotics (6-12 weeks). CPPS: multimodal approach with alpha-blockers, NSAIDs, pelvic floor physical therapy, phytotherapy (quercetin), and cognitive behavioral therapy.',
    'Acute bacterial: generally curable with appropriate antibiotics. Chronic bacterial: relapsing course in ~50%. CPPS: chronic condition with waxing and waning symptoms; significant quality-of-life impact.',
  ),

  // ---- Stone Disease (4) --------------------------------------------------

  'calcium-oxalate-stones': uro(
    'calcium-oxalate-stones', 'Calcium Oxalate Kidney Stones',
    'stone-disease', 'N20.0',
    'Most common type of kidney stone (60-70% of all stones). Form from supersaturation of calcium and oxalate in urine. Associated with hypercalciuria, hyperoxaluria, hypocitraturia, and low urine volume.',
    ['Acute severe flank pain radiating to groin (renal colic)', 'Hematuria (gross or microscopic)', 'Nausea and vomiting', 'Restlessness and inability to find comfortable position', 'Urinary urgency if stone at ureterovesical junction'],
    ['Non-contrast CT abdomen/pelvis (gold standard)', 'Urinalysis (hematuria, pH)', 'BMP (creatinine, calcium)', 'Strain urine for stone analysis', '24-hour urine metabolic evaluation for recurrent stone formers'],
    'Acute: NSAIDs and/or opioid analgesia, IV fluids, tamsulosin for medical expulsive therapy (stones <10 mm). Stones >10 mm or refractory: shock wave lithotripsy (SWL), ureteroscopy with laser lithotripsy, or percutaneous nephrolithotomy (PCNL) for large stones. Prevention: high fluid intake (>2.5 L/day), low-sodium diet, moderate calcium intake, potassium citrate for hypocitraturia.',
    'Passage rate >90% for stones <5 mm. Recurrence rate ~50% within 5-10 years without preventive measures. Metabolic evaluation and dietary modification reduce recurrence by 50%.',
  ),

  'uric-acid-stones': uro(
    'uric-acid-stones', 'Uric Acid Kidney Stones',
    'stone-disease', 'N20.0',
    'Second most common stone type (~10-15%). Form in persistently acidic urine (pH <5.5). Associated with gout, metabolic syndrome, diabetes, and chronic diarrheal states. Radiolucent on plain radiograph.',
    ['Renal colic (flank-to-groin pain)', 'Hematuria', 'Nausea and vomiting', 'History of gout or metabolic syndrome', 'Radiolucent stone on KUB plain film'],
    ['Non-contrast CT abdomen/pelvis (shows low-attenuation stone)', 'Urinalysis (urine pH typically <5.5)', 'Serum uric acid level', '24-hour urine: uric acid, volume, pH', 'Dual-energy CT can distinguish uric acid from calcium stones'],
    'Unique among stones: amenable to dissolution therapy with urinary alkalinization (potassium citrate to target urine pH 6.0-6.5). Acute management same as calcium stones. Allopurinol for hyperuricosuria. Surgical intervention if dissolution fails or obstruction present.',
    'Good if urine pH maintained above 6.0-6.5. Dissolution therapy can eliminate existing stones. High recurrence without ongoing alkalinization and dietary modification.',
  ),

  'struvite-stones': uro(
    'struvite-stones', 'Struvite (Infection) Kidney Stones',
    'stone-disease', 'N20.0',
    'Magnesium ammonium phosphate stones caused by urease-producing bacteria (Proteus, Klebsiella, Pseudomonas). Can rapidly form large staghorn calculi filling the entire collecting system.',
    ['Recurrent UTIs with urease-producing organisms', 'Flank pain', 'Malodorous or cloudy urine', 'Fever if concurrent infection', 'May be asymptomatic despite large staghorn calculus'],
    ['Non-contrast CT showing large or staghorn calculus', 'Urine culture (urease-producing organisms)', 'Urinalysis (pH >7.0, struvite crystals - coffin-lid shaped)', 'Stone analysis after retrieval', 'Metabolic workup to exclude concurrent metabolic stones'],
    'Complete surgical removal essential (residual fragments seed regrowth). PCNL is primary approach for staghorn calculi, often staged. Culture-specific antibiotics before and after surgery. Acetohydroxamic acid (urease inhibitor) as adjunct for recurrence. Eradication of underlying infection is critical.',
    'High recurrence if fragments remain or infection not eradicated. Complete stone removal with infection clearance has good outcomes. Untreated staghorn calculi can lead to renal loss.',
  ),

  'cystine-stones': uro(
    'cystine-stones', 'Cystine Kidney Stones',
    'stone-disease', 'N20.0',
    'Caused by cystinuria, an autosomal recessive disorder of dibasic amino acid transport leading to excessive cystine excretion. Account for ~1-2% of adult stones but ~6-8% of pediatric stones.',
    ['Recurrent bilateral renal colic starting in childhood or adolescence', 'Hematuria', 'Family history of cystine stones', 'Staghorn calculi in severe cases', 'Hexagonal crystals on urinalysis'],
    ['Non-contrast CT (mildly radiopaque, ground-glass appearance)', 'Urinalysis (pathognomonic hexagonal crystals)', 'Qualitative cyanide-nitroprusside test (screening)', 'Quantitative 24-hour urine cystine', 'Genetic testing for SLC3A1/SLC7A9 mutations'],
    'High fluid intake (>3 L/day) to maintain urine output >2.5 L/day. Urinary alkalinization (potassium citrate) to pH 7.0-7.5. Thiol-binding agents (tiopronin preferred over D-penicillamine) if conservative measures fail. Surgical management same as other stones when needed.',
    'Lifelong management required. High recurrence rate without strict adherence to fluid and medical therapy. Progressive renal impairment possible with recurrent stones and procedures.',
  ),

  // ---- Functional (5) -----------------------------------------------------

  'bph': uro(
    'bph', 'Benign Prostatic Hyperplasia (BPH)',
    'functional', 'N40.0',
    'Non-malignant enlargement of the prostate gland causing lower urinary tract symptoms (LUTS). Affects most men over age 50, with prevalence increasing with age. Caused by stromal and epithelial proliferation in the transition zone.',
    ['Weak or intermittent urinary stream', 'Urinary frequency and nocturia', 'Hesitancy and straining to void', 'Sensation of incomplete emptying', 'Urgency and possible urge incontinence'],
    ['International Prostate Symptom Score (IPSS)', 'Digital rectal exam', 'Serum PSA', 'Urinalysis', 'Uroflowmetry and post-void residual', 'Transrectal ultrasound (prostate volume)'],
    'Mild (IPSS <8): watchful waiting and behavioral modifications. Moderate-severe: alpha-blockers (tamsulosin, silodosin), 5-alpha-reductase inhibitors (finasteride, dutasteride), or combination therapy. PDE5 inhibitors (tadalafil). Surgical: TURP, HoLEP, UroLift, Rezum water vapor therapy, Aquablation, or simple prostatectomy for very large glands.',
    'Progressive condition but manageable with medical therapy. ~30% of men on watchful waiting eventually require treatment. Surgical outcomes are durable with significant symptom improvement in >85%.',
  ),

  'stress-urinary-incontinence': uro(
    'stress-urinary-incontinence', 'Stress Urinary Incontinence',
    'functional', 'N39.3',
    'Involuntary urine leakage with increased abdominal pressure (coughing, sneezing, lifting, exercise). Most common type in women, caused by urethral hypermobility or intrinsic sphincter deficiency. In men, typically post-prostatectomy.',
    ['Urine leakage with cough, sneeze, laugh, or physical activity', 'No leakage at rest or during sleep', 'Predictable triggers', 'History of vaginal delivery, menopause, or prostate surgery', 'Worsened by obesity'],
    ['Focused history and voiding diary', 'Cough stress test', 'Urinalysis to exclude infection', 'Post-void residual measurement', 'Urodynamic studies if diagnosis uncertain or surgery planned', 'Cystoscopy to exclude other pathology'],
    'Conservative (first-line): pelvic floor muscle training (Kegel exercises), bladder training, weight loss. Devices: pessary (women), penile clamp (men). Surgical: midurethral sling (TVT/TOT) for women, artificial urinary sphincter or male sling for post-prostatectomy incontinence. Bulking agents for poor surgical candidates.',
    'Pelvic floor exercises improve symptoms in 60-70%. Midurethral sling success rate ~80-90% for women. Artificial urinary sphincter >80% success in men. Recurrence possible over years.',
  ),

  'urge-urinary-incontinence': uro(
    'urge-urinary-incontinence', 'Urge Urinary Incontinence (Overactive Bladder)',
    'functional', 'N39.41',
    'Involuntary urine loss associated with a sudden compelling desire to void. Component of overactive bladder syndrome (OAB). Caused by detrusor overactivity (involuntary bladder contractions). Common in both sexes, increasing with age.',
    ['Sudden intense urge to void followed by leakage', 'Urinary frequency (>8 voids/day)', 'Nocturia (>1 void per night)', 'Leakage may be large volume', 'Triggered by running water, cold, key-in-lock'],
    ['Voiding diary (3-day minimum)', 'Urinalysis to exclude infection', 'Post-void residual', 'Urodynamic studies if refractory or diagnosis uncertain', 'Cystoscopy if hematuria present'],
    'First-line: behavioral therapy (bladder training, timed voiding, fluid management), pelvic floor exercises. Second-line: anticholinergics (oxybutynin, solifenacin, tolterodine) or beta-3 agonist (mirabegron, vibegron). Third-line: onabotulinumtoxinA (Botox) bladder injection, sacral neuromodulation (InterStim), or percutaneous tibial nerve stimulation.',
    'Behavioral therapy improves symptoms in 50-80%. Medications provide additional 30-50% benefit. Botox injections effective in ~60-70% of refractory cases. Chronic condition requiring ongoing management.',
  ),

  'overflow-incontinence': uro(
    'overflow-incontinence', 'Overflow Urinary Incontinence',
    'functional', 'N39.490',
    'Continuous or frequent dribbling of urine due to impaired bladder emptying from either detrusor underactivity or bladder outlet obstruction. Leads to chronic urinary retention with overflow leakage.',
    ['Constant dribbling of small amounts of urine', 'Weak urinary stream', 'Sensation of incomplete emptying', 'Distended, palpable bladder', 'Straining to void'],
    ['Post-void residual volume (elevated >200-300 mL)', 'Urinalysis', 'BMP (creatinine for renal function)', 'Urodynamic studies (detrusor pressure/flow)', 'Upper tract imaging if chronic retention'],
    'Relieve obstruction if present (alpha-blockers, TURP for BPH; urethral dilation for stricture). Detrusor underactivity: clean intermittent catheterization (CIC) is primary treatment. Indwelling catheter or suprapubic catheter if CIC not feasible. Bethanechol rarely effective. Treat underlying cause (medication review, diabetic neuropathy management).',
    'Depends on underlying cause. Obstruction relief can restore normal voiding. Detrusor underactivity often requires long-term CIC. Without treatment, risk of recurrent UTI, hydronephrosis, and renal impairment.',
  ),

  'neurogenic-bladder': uro(
    'neurogenic-bladder', 'Neurogenic Bladder',
    'functional', 'N31.9',
    'Bladder dysfunction caused by neurological disease or injury affecting storage or emptying. Suprasacral lesions (spinal cord injury, MS) cause detrusor overactivity; sacral/peripheral lesions cause detrusor underactivity.',
    ['Urinary incontinence or retention depending on lesion level', 'Recurrent UTIs', 'Autonomic dysreflexia (in lesions above T6)', 'Hydronephrosis from high detrusor pressures', 'History of spinal cord injury, spina bifida, MS, stroke, or Parkinson disease'],
    ['Urodynamic studies (essential for characterization)', 'Renal ultrasound (hydronephrosis screening)', 'Serum creatinine and GFR', 'Voiding cystourethrogram (reflux evaluation)', 'Video-urodynamics for complex cases'],
    'Goals: protect upper tracts, achieve continence, prevent infection. Clean intermittent catheterization (cornerstone). Anticholinergics or beta-3 agonists for overactivity. OnabotulinumtoxinA for refractory detrusor overactivity. Augmentation cystoplasty or urinary diversion for refractory cases. Annual renal function monitoring.',
    'Upper tract deterioration is the primary long-term risk. Regular surveillance prevents most complications. Life expectancy and quality of life have improved significantly with CIC and modern management.',
  ),

  // ---- Male Reproductive (5) ----------------------------------------------

  'erectile-dysfunction': uro(
    'erectile-dysfunction', 'Erectile Dysfunction',
    'male-reproductive', 'N52.9',
    'Persistent inability to achieve or maintain an erection sufficient for satisfactory sexual performance. Affects ~50% of men aged 40-70. Often a harbinger of underlying cardiovascular disease (shares risk factors).',
    ['Inability to achieve erection', 'Inability to maintain erection during intercourse', 'Reduced rigidity', 'Gradual onset suggests organic cause; sudden onset suggests psychogenic', 'Preserved nocturnal/morning erections suggest psychogenic etiology'],
    ['Sexual health inventory for men (SHIM/IIEF questionnaire)', 'Cardiovascular risk assessment', 'Fasting glucose, HbA1c, lipid panel', 'Serum testosterone (morning)', 'Nocturnal penile tumescence testing if etiology unclear', 'Penile duplex Doppler ultrasound for vascular evaluation'],
    'First-line: PDE5 inhibitors (sildenafil, tadalafil, vardenafil, avanafil). Lifestyle modification: exercise, weight loss, smoking cessation, alcohol reduction. Second-line: intracavernosal injection therapy (alprostadil, trimix), vacuum erection device. Third-line: penile prosthesis implantation. Testosterone replacement if hypogonadal. Treat underlying conditions.',
    'PDE5 inhibitors effective in ~65-70% of men. Penile prosthesis has >90% satisfaction rate. Modifiable risk factor management (exercise, weight loss) can significantly improve function. Psychogenic ED has excellent prognosis with counseling.',
  ),

  'varicocele': uro(
    'varicocele', 'Varicocele',
    'male-reproductive', 'I86.1',
    'Abnormal dilatation of the pampiniform venous plexus in the spermatic cord. Present in ~15% of men and ~40% of infertile men. Left-sided in 90% due to left gonadal vein draining into left renal vein at a right angle.',
    ['Scrotal heaviness or dull ache, worse with standing or Valsalva', '"Bag of worms" palpable mass above testis', 'Often asymptomatic, found on infertility workup', 'Testicular atrophy on affected side', 'Symptoms improve when supine'],
    ['Physical exam (grading: I-III) in standing position with Valsalva', 'Scrotal ultrasound with Doppler (retrograde flow >3 mm veins)', 'Semen analysis if infertility concern', 'Hormonal evaluation (testosterone, FSH, LH) if indicated', 'Renal imaging if new right-sided or non-decompressing varicocele (rule out renal mass)'],
    'Observation if asymptomatic with normal fertility. Surgical repair (microsurgical subinguinal varicocelectomy preferred) for pain, infertility, or testicular atrophy. Percutaneous embolization as less invasive alternative. Adolescents: repair if significant testicular size discrepancy (>20%).',
    'Semen parameters improve in 60-70% after varicocelectomy. Spontaneous pregnancy rates improve by ~30-40% after repair. Recurrence rate <5% with microsurgical technique. Pain resolves in ~90%.',
  ),

  'hydrocele': uro(
    'hydrocele', 'Hydrocele',
    'male-reproductive', 'N43.3',
    'Fluid collection within the tunica vaginalis surrounding the testis. Communicating hydrocele (patent processus vaginalis) common in infants; non-communicating (reactive or idiopathic) more common in adults.',
    ['Painless scrotal swelling', 'Transillumination positive', 'Size fluctuates (communicating) or progressively enlarges (non-communicating)', 'Scrotal heaviness', 'Difficulty with genital examination due to fluid'],
    ['Physical exam with transillumination', 'Scrotal ultrasound (confirms fluid collection, evaluates testis)', 'Rule out underlying testicular pathology (tumor, torsion, infection)', 'Inguinal ultrasound if communicating hydrocele suspected'],
    'Infant communicating hydrocele: observation until age 12-24 months (most resolve spontaneously); surgical repair (inguinal approach) if persistent. Adult non-communicating: observation if asymptomatic. Hydrocelectomy (Lord plication or Jaboulay eversion) for symptomatic cases. Aspiration is temporary and risks infection.',
    'Excellent. Surgical cure rate >95%. Communicating hydroceles in infants resolve spontaneously in ~80% by age 2. Recurrence after surgery uncommon (<5%).',
  ),

  'peyronie-disease': uro(
    'peyronie-disease', 'Peyronie Disease',
    'male-reproductive', 'N48.6',
    'Fibrotic condition of the tunica albuginea causing penile plaque formation, curvature, and potential erectile dysfunction. Acute inflammatory phase (6-18 months) followed by stable chronic phase.',
    ['Penile curvature (dorsal most common)', 'Palpable penile plaque', 'Pain with erection (acute phase)', 'Erectile dysfunction', 'Shortening of penile length', 'Hourglass or hinge deformity'],
    ['Focused history and physical exam', 'Office or home penile curvature assessment (photographs during erection)', 'Penile duplex Doppler ultrasound (plaque characterization, vascular assessment)', 'IIEF questionnaire for erectile function', 'No biopsy needed'],
    'Acute phase: intralesional collagenase (Xiaflex/CCH) with modeling is FDA-approved. Oral pentoxifylline, traction therapy. Chronic/stable phase with >30 degrees curvature: surgical correction (plication, grafting procedures, or penile prosthesis if concurrent ED). Observation if minimal curvature and no functional impairment.',
    'Spontaneous resolution in ~5-15%. Most stabilize with some residual curvature. Collagenase reduces curvature by ~17 degrees on average. Surgical correction provides reliable straightening with high satisfaction.',
  ),

  'priapism': uro(
    'priapism', 'Priapism',
    'male-reproductive', 'N48.3',
    'Persistent erection lasting >4 hours unrelated to sexual stimulation. Ischemic (low-flow, venocclusive) is a urologic emergency. Non-ischemic (high-flow, arterial) is typically post-traumatic and non-emergent.',
    ['Prolonged rigid erection (ischemic: rigid corpora, soft glans)', 'Pain (ischemic) vs painless (non-ischemic)', 'History of sickle cell disease, PDE5 inhibitors, intracavernosal injections, or antipsychotics', 'Non-ischemic: often history of perineal trauma', 'Stuttering priapism: recurrent short episodes'],
    ['Corporal blood gas analysis (ischemic: dark blood, pO2 <40, pH <7.25; non-ischemic: bright red, arterial values)', 'Color Doppler ultrasound of penis', 'CBC with sickle cell screen', 'Toxicology screen if indicated', 'Pelvic angiography for non-ischemic (fistula localization)'],
    'Ischemic (emergency): corporal aspiration and irrigation with dilute phenylephrine (every 3-5 min), followed by surgical shunt (distal: Winter, Al-Ghorab; proximal: Quackels) if aspiration fails. >48 hours: immediate penile prosthesis placement may be considered. Non-ischemic: observation (many resolve), selective arterial embolization if persistent. Sickle cell: hydration, oxygen, exchange transfusion.',
    'Ischemic: erectile dysfunction risk increases with duration (>24 hours: ~90% ED risk). Prompt treatment within 4-6 hours has best outcomes. Non-ischemic: ED rate <20%, many resolve spontaneously.',
  ),

  // ---- Congenital (4) -----------------------------------------------------

  'cryptorchidism': uro(
    'cryptorchidism', 'Cryptorchidism (Undescended Testis)',
    'congenital', 'Q53',
    'Failure of one or both testes to descend into the scrotum. Present in ~3% of full-term male newborns, ~30% of preterm. Most descend spontaneously by 3-6 months. Associated with increased risk of infertility and testicular cancer.',
    ['Empty hemiscrotum on exam', 'Palpable inguinal testis or non-palpable (abdominal)', 'Retractile testis (distinguishable by manipulation into scrotum where it stays)', 'Bilateral non-palpable testes warrant evaluation for disorders of sex development', 'Often found on well-child exam'],
    ['Physical exam (palpable vs non-palpable)', 'Ultrasound (limited utility for abdominal testes)', 'Diagnostic laparoscopy (gold standard for non-palpable testis)', 'Karyotype and hormonal evaluation if bilateral non-palpable', 'hCG stimulation test or inhibin B/AMH for anorchia evaluation'],
    'Surgical orchiopexy by age 6-12 months (current guideline). Palpable: inguinal orchiopexy. Non-palpable: diagnostic laparoscopy followed by single or staged Fowler-Stephens orchiopexy (if viable) or orchiectomy (if atrophic). Hormonal therapy (hCG or GnRH) generally not recommended. No role for observation beyond 6 months.',
    'Early orchiopexy reduces but does not eliminate cancer risk (still 2-8x baseline). Fertility potential improves with early surgery. Unilateral: ~90% paternity rates. Bilateral: ~30-50% if surgery performed early.',
  ),

  'hypospadias': uro(
    'hypospadias', 'Hypospadias',
    'congenital', 'Q54',
    'Congenital anomaly where the urethral meatus opens on the ventral surface of the penis. Occurs in ~1 in 200-300 male births. Associated with ventral chordee (curvature) and hooded foreskin. Classified as distal (70%), midshaft (15%), or proximal (15%).',
    ['Ventral urethral meatus (glanular, coronal, shaft, penoscrotal, or perineal)', 'Ventral penile curvature (chordee)', 'Hooded/incomplete foreskin (dorsal hood)', 'Deflected urinary stream', 'Proximal forms may have bifid scrotum or associated DSD'],
    ['Physical exam (position of meatus, chordee assessment)', 'Avoid circumcision (foreskin used for repair)', 'Proximal hypospadias: karyotype and endocrine evaluation', 'Renal ultrasound if other genitourinary anomalies present', 'Uroflowmetry post-repair for assessment'],
    'Mild distal with no chordee: may not require repair. Surgical repair (urethroplasty) typically at age 6-18 months. Distal: TIP (tubularized incised plate/Snodgrass) repair preferred. Proximal: staged repair or single-stage using preputial flap. Goals: straight penis, meatus at tip, functional voiding, cosmetically acceptable result.',
    'Distal hypospadias repair success rate >90%. Proximal repairs have higher complication rates (urethrocutaneous fistula ~10-30%). Long-term voiding and sexual function generally excellent with successful repair.',
  ),

  'vesicoureteral-reflux': uro(
    'vesicoureteral-reflux', 'Vesicoureteral Reflux (VUR)',
    'congenital', 'N13.70',
    'Retrograde flow of urine from the bladder into the ureter and renal pelvis due to incompetent vesicoureteral junction. Most common urologic anomaly in children. Graded I-V. Primary VUR is congenital; secondary VUR from bladder dysfunction or obstruction.',
    ['Febrile UTI in young child (most common presentation)', 'Prenatal hydronephrosis detected on ultrasound', 'Recurrent UTIs', 'Failure to thrive (severe bilateral reflux)', 'Family history (30-50% of siblings affected)'],
    ['Voiding cystourethrogram (VCUG) - gold standard for diagnosis and grading', 'Renal-bladder ultrasound', 'DMSA renal scan (detect renal scarring)', 'Nuclear cystogram (follow-up, lower radiation)', 'Serum creatinine if bilateral high-grade'],
    'Low-grade (I-III): continuous antibiotic prophylaxis (TMP-SMX or nitrofurantoin) with observation; most resolve spontaneously. High-grade (IV-V) or breakthrough infections: surgical correction. Options: endoscopic injection (Deflux/dextranomer-hyaluronic acid), ureteral reimplantation (Cohen cross-trigonal, Lich-Gregoir). Treat bladder-bowel dysfunction if present.',
    'Spontaneous resolution: grade I-II ~80%, grade III ~50%, grade IV-V ~20% by age 5. Surgical reimplantation success >95%. Renal scarring risk increases with delayed treatment of febrile UTIs. Normal renal function long-term in most cases.',
  ),

  'phimosis': uro(
    'phimosis', 'Phimosis',
    'congenital', 'N47',
    'Inability to retract the foreskin over the glans penis. Physiologic phimosis is normal in children under 3 and resolves naturally. Pathologic phimosis (BXO/lichen sclerosus) shows scarring of the prepuce. Paraphimosis (trapped retracted foreskin) is a urologic emergency.',
    ['Inability to retract foreskin', 'Ballooning of foreskin during urination (physiologic)', 'Whitish scarred ring at preputial tip (pathologic/BXO)', 'Recurrent balanitis or posthitis', 'Paraphimosis: retracted foreskin trapped behind glans with edema'],
    ['Physical exam is diagnostic', 'Distinguish physiologic from pathologic', 'Assess for BXO (lichen sclerosus) features', 'Urinalysis if infection suspected', 'Biopsy of prepuce if lichen sclerosus suspected (usually at time of circumcision)'],
    'Physiologic: observation and gentle hygiene education; resolves in most boys by puberty. Topical corticosteroid cream (betamethasone 0.05%) applied to tight preputial ring BID for 4-8 weeks (70-80% success). Pathologic/BXO: circumcision is definitive treatment. Preputioplasty as foreskin-sparing alternative for non-BXO. Paraphimosis: emergent manual reduction (ice, compression, osmotic agents), dorsal slit, or circumcision.',
    'Physiologic phimosis resolves naturally in >90% by age 7. Topical steroid effective in 70-80%. Circumcision is curative. BXO requires ongoing surveillance for meatal stenosis and urethral involvement.',
  ),

  // ---- Pediatric Urology (1) -----------------------------------------------

  'posterior-urethral-valves': uro(
    'posterior-urethral-valves', 'Posterior Urethral Valves',
    'pediatric-urology', 'Q64.2',
    'Congenital obstructing membranous folds in the posterior urethra; the most common cause of severe obstructive uropathy in male neonates. Can cause bilateral hydronephrosis, renal dysplasia, and pulmonary hypoplasia if severe.',
    ['Prenatal: bilateral hydronephrosis, distended bladder, oligohydramnios', 'Neonate: poor urinary stream, palpable distended bladder, respiratory distress', 'Older child: voiding dysfunction, recurrent UTIs, failure to thrive', 'Elevated serum creatinine at birth', 'Urosepsis in severe cases'],
    ['Prenatal ultrasound (bilateral hydroureteronephrosis, keyhole sign bladder)', 'Postnatal renal-bladder ultrasound', 'Voiding cystourethrogram (dilated posterior urethra, reflux)', 'Serum creatinine (nadir creatinine is key prognostic indicator)', 'DMSA scan for differential renal function'],
    'Primary: endoscopic valve ablation (transurethral incision of valves). Temporizing: vesicostomy or upper tract diversion (cutaneous ureterostomy) if too small for endoscopic approach. Long-term: management of bladder dysfunction ("valve bladder"), CIC if needed, anticholinergics, overnight bladder drainage. Renal transplantation for end-stage renal disease (~30%).',
    'Nadir creatinine <1.0 mg/dL is best predictor of long-term renal function. ~30% progress to ESRD despite treatment. Bladder dysfunction persists in many patients lifelong. Pulmonary hypoplasia is main cause of neonatal mortality.',
  ),

  // ---- Trauma (1) ---------------------------------------------------------

  'testicular-torsion': uro(
    'testicular-torsion', 'Testicular Torsion',
    'trauma', 'N44.0',
    'Twisting of the spermatic cord causing ischemia of the testis. Urologic emergency with a 6-hour window for salvage. Peaks in neonates and adolescents (12-18 years). Bell-clapper deformity (horizontal lie) is the predisposing anatomic variant.',
    ['Sudden onset severe unilateral scrotal pain', 'Nausea and vomiting', 'High-riding testis with horizontal lie', 'Absent cremasteric reflex (most sensitive sign)', 'Scrotal erythema and edema'],
    ['Clinical diagnosis - do not delay surgery for imaging if high suspicion', 'Scrotal ultrasound with Doppler (absent or reduced testicular blood flow)', 'Urinalysis (typically normal, helps exclude epididymitis)', 'TWIST score for clinical risk stratification', 'No role for laboratory tests in acute management'],
    'Emergent surgical exploration and detorsion within 6 hours for best salvage. Bilateral orchiopexy (fixation) to prevent future torsion on both sides. Orchiectomy if testis is non-viable. Manual detorsion (outward/"open the book" technique) as temporizing measure in ED. Intermittent torsion: elective bilateral orchiopexy.',
    'Salvage rate: >90% if detorsed within 6 hours; ~50% at 12 hours; <10% at >24 hours. Contralateral testis at risk without fixation. Fertility generally preserved with unilateral loss. Delayed presentation is the most common cause of testicular loss.',
  ),

  // ---- Additional Oncologic (1) -------------------------------------------

  'upper-tract-urothelial-carcinoma': uro(
    'upper-tract-urothelial-carcinoma', 'Upper Tract Urothelial Carcinoma',
    'oncologic', 'C65',
    'Urothelial carcinoma arising from the renal pelvis or ureter. Accounts for ~5-10% of urothelial cancers. Associated with smoking, aristolochic acid exposure, and Lynch syndrome.',
    ['Gross hematuria (most common)', 'Flank pain from ureteral obstruction', 'Hydronephrosis on imaging', 'Weight loss and constitutional symptoms in advanced disease', 'History of bladder cancer'],
    ['CT urogram (filling defect in collecting system or ureter)', 'Ureteroscopy with biopsy', 'Urine cytology (voided and selective)', 'Diagnostic ureteroscopy with biopsy for tissue diagnosis', 'PET-CT for staging'],
    'Standard: radical nephroureterectomy with bladder cuff excision. Low-risk distal ureteral tumors: distal ureterectomy with reimplantation. Kidney-sparing (endoscopic ablation) for low-grade, small, unifocal tumors in solitary kidney or bilateral disease. Neoadjuvant or adjuvant cisplatin-based chemotherapy for muscle-invasive disease. Adjuvant nivolumab for high-risk.',
    'Organ-confined (pT1-2 N0) 5-year survival ~60-80%. Locally advanced (pT3-4 or N+) ~30%. Surveillance critical as bladder recurrence occurs in 30-50%.',
  ),

  // ---- Additional Functional (2) ------------------------------------------

  'interstitial-cystitis': uro(
    'interstitial-cystitis', 'Interstitial Cystitis / Bladder Pain Syndrome',
    'functional', 'N30.10',
    'Chronic bladder pain syndrome characterized by bladder pain, urinary urgency, and frequency in the absence of infection or other identifiable cause. Predominantly affects women. Hunner lesions present in a subset (10-15%).',
    ['Suprapubic pain or pressure related to bladder filling, relieved by voiding', 'Urinary frequency (often >20 voids/day)', 'Urgency without incontinence', 'Dyspareunia', 'Pain flares triggered by certain foods, stress, or menses'],
    ['Clinical diagnosis (AUA/SUFU guidelines: symptoms >6 weeks)', 'Urinalysis and urine culture (to exclude infection)', 'Voiding diary', 'Cystoscopy with hydrodistension (Hunner lesions, glomerulations)', 'Potassium sensitivity test (limited use)', 'Urodynamics only if diagnosis uncertain'],
    'Multimodal stepwise approach. First-line: patient education, dietary modification (IC diet: avoid citrus, caffeine, alcohol, spicy foods), stress management. Second-line: oral amitriptyline, hydroxyzine, or pentosan polysulfate; pelvic floor physical therapy. Third-line: intravesical instillations (DMSO, heparin/lidocaine cocktails), hydrodistension. Fourth-line: sacral neuromodulation, cyclosporine A. Hunner lesions: fulguration or triamcinolone injection.',
    'Chronic condition with waxing-waning course. ~50% have spontaneous remissions. No cure, but many patients achieve acceptable symptom control with multimodal therapy. Significant quality-of-life impact.',
  ),

  'urethral-stricture': uro(
    'urethral-stricture', 'Urethral Stricture',
    'functional', 'N35.9',
    'Narrowing of the urethral lumen from fibrosis (spongiofibrosis). Causes include iatrogenic (instrumentation, catheterization, TURP), inflammatory (STIs, lichen sclerosus), traumatic (straddle injury, pelvic fracture), and idiopathic. Much more common in men.',
    ['Weak or split urinary stream', 'Straining to void', 'Incomplete emptying and post-void dribbling', 'Recurrent UTIs', 'Urinary retention (acute or chronic)'],
    ['Uroflowmetry (plateau-shaped curve)', 'Post-void residual', 'Retrograde urethrogram (RUG) - gold standard for location and length', 'Voiding cystourethrogram (VCUG) for posterior strictures', 'Cystourethroscopy', 'Urethral ultrasound (stricture depth assessment)'],
    'Short strictures (<2 cm) in bulbar urethra: excision and primary anastomosis (EPA) with >90% success. Longer strictures: substitution urethroplasty using buccal mucosal graft (BMG). Penile strictures: staged Johanson urethroplasty or BMG graft. Endoscopic: direct vision internal urethrotomy (DVIU) or dilation for first-time short bulbar strictures. Lichen sclerosus strictures: avoid genital skin grafts.',
    'Urethroplasty success rates 85-95% depending on technique and stricture complexity. DVIU/dilation: ~50-60% long-term success for first stricture, decreasing with each repeat procedure. Recurrence more likely with longer strictures and lichen sclerosus etiology.',
  ),

  // ---- Additional entries to reach 30+ ------------------------------------

  'renal-artery-stenosis': uro(
    'renal-artery-stenosis', 'Renal Artery Stenosis',
    'functional', 'I70.1',
    'Narrowing of one or both renal arteries, most commonly from atherosclerosis (>90%) or fibromuscular dysplasia (FMD, younger women). Causes renovascular hypertension and ischemic nephropathy.',
    ['Resistant hypertension (uncontrolled on 3+ drugs)', 'Flash pulmonary edema (bilateral RAS)', 'Acute kidney injury after starting ACE inhibitor/ARB', 'Abdominal bruit', 'Asymmetric kidney size (>1.5 cm difference)'],
    ['Duplex renal ultrasound (peak systolic velocity, resistive index)', 'CT angiography of renal arteries', 'MR angiography (avoid gadolinium if GFR <30)', 'Captopril renal scintigraphy', 'Catheter-based angiography (gold standard, also therapeutic)'],
    'Atherosclerotic: optimal medical therapy first (ACE inhibitor/ARB, statin, antiplatelet, BP control). Revascularization (angioplasty with stenting) reserved for refractory hypertension, declining renal function, or flash pulmonary edema (CORAL trial showed no benefit for routine stenting). FMD: angioplasty (without stent) is first-line with excellent results.',
    'Atherosclerotic RAS: medical therapy controls BP in most. Stenting benefit limited to select cases. FMD: angioplasty curative in ~50%, improved BP in ~40%. Progressive ischemic nephropathy leads to ESRD in a minority.',
  ),

  'polycystic-kidney-disease': uro(
    'polycystic-kidney-disease', 'Autosomal Dominant Polycystic Kidney Disease (ADPKD)',
    'functional', 'Q61.2',
    'Inherited disorder (PKD1 or PKD2 mutations) causing progressive bilateral renal cyst formation, kidney enlargement, and eventual renal failure. Most common hereditary kidney disease. Extrarenal manifestations include hepatic cysts and cerebral aneurysms.',
    ['Flank or abdominal pain from cyst enlargement or hemorrhage', 'Hypertension (often early, before GFR decline)', 'Gross hematuria from cyst rupture', 'Palpable bilateral flank masses', 'Family history of PKD or ESRD'],
    ['Renal ultrasound (age-specific Ravine criteria)', 'MRI with total kidney volume (htTKV) for prognostication', 'Genetic testing (PKD1/PKD2) if diagnosis uncertain or family planning', 'MRA brain (screen for intracranial aneurysm if family history of SAH)', 'Serial renal function and BP monitoring'],
    'Tolvaptan (vasopressin V2 receptor antagonist) slows cyst growth and GFR decline in rapidly progressive disease (TEMPO/REPRISE trials). BP control (<130/80, ACE inhibitor/ARB preferred). High fluid intake (>3 L/day) to suppress vasopressin. Pain management (avoid nephrotoxic NSAIDs). Cyst aspiration/sclerotherapy or surgical decortication for symptomatic cysts. Renal replacement therapy (transplant preferred) for ESRD.',
    'PKD1: median age of ESRD ~54 years. PKD2: median age ~74 years. Tolvaptan delays progression but does not cure. Renal transplant outcomes excellent. Intracranial aneurysm rupture is most serious extrarenal complication (~8% prevalence).',
  ),

  'fournier-gangrene': uro(
    'fournier-gangrene', 'Fournier Gangrene',
    'infectious', 'N49.3',
    'Rapidly progressive necrotizing fasciitis of the perineum and external genitalia. Polymicrobial infection (aerobic and anaerobic organisms). Life-threatening surgical emergency with mortality of 20-40%. Risk factors: diabetes, immunosuppression, alcoholism, perianal disease.',
    ['Severe perineal or scrotal pain out of proportion to exam findings', 'Rapid onset scrotal/perineal swelling and erythema', 'Crepitus on palpation (subcutaneous gas)', 'Systemic sepsis (fever, tachycardia, hypotension)', 'Dusky or necrotic skin patches'],
    ['Clinical diagnosis - do not delay for imaging', 'CT pelvis (subcutaneous gas, extent of involvement) if stable', 'Laboratory Risk Indicator for Necrotizing Fasciitis (LRINEC) score', 'Blood cultures, CBC, BMP, lactate, coagulation studies', 'Wound cultures (aerobic and anaerobic) at debridement'],
    'Emergency wide surgical debridement of all necrotic tissue (repeat debridement every 24-48 hours until margins clear). Broad-spectrum IV antibiotics (vancomycin + piperacillin-tazobactam + clindamycin or carbapenem). ICU-level resuscitation. Wound VAC therapy after debridement. Reconstructive surgery (skin grafts, flaps) after source control. Fecal diversion (colostomy) if perianal involvement.',
    'Mortality 20-40% despite aggressive treatment. Early recognition and debridement are the strongest predictors of survival. Survivors often require extensive reconstruction. Diabetes and delay in treatment are associated with worst outcomes.',
  ),

  'bladder-outlet-obstruction': uro(
    'bladder-outlet-obstruction', 'Bladder Outlet Obstruction',
    'functional', 'N32.0',
    'Impedance to urine flow at the level of the bladder neck or urethra. In men, most commonly from BPH; in women, from pelvic organ prolapse or post-surgical obstruction. Causes detrusor hypertrophy, trabeculation, and eventually decompensation.',
    ['Weak urinary stream and straining', 'Hesitancy and intermittency', 'Incomplete emptying', 'Urinary retention (acute or chronic)', 'Overflow incontinence in advanced cases'],
    ['Uroflowmetry (Qmax <10 mL/s suggestive)', 'Post-void residual measurement', 'Pressure-flow urodynamic study (definitive diagnosis: high detrusor pressure with low flow)', 'Cystoscopy (trabeculation, prostatic obstruction, stricture)', 'Upper tract imaging if chronic retention or elevated creatinine'],
    'Treat underlying cause. BPH: alpha-blockers, 5-alpha-reductase inhibitors, surgical options (TURP, HoLEP). Urethral stricture: urethroplasty or endoscopic treatment. Female BOO: urethrolysis or pessary. Acute retention: catheterization followed by alpha-blocker trial of void. CIC for patients unable to void adequately.',
    'Good if obstruction identified and treated. Prolonged untreated obstruction leads to irreversible detrusor decompensation. Upper tract deterioration (hydronephrosis, renal failure) possible if not addressed.',
  ),

  'male-infertility': uro(
    'male-infertility', 'Male Infertility',
    'male-reproductive', 'N46',
    'Inability to conceive after 12 months of unprotected intercourse with a contributing male factor identified in ~50% of infertile couples. Causes include varicocele (most common correctable cause), hypogonadism, obstruction, genetic factors, and idiopathic.',
    ['Failure to conceive after 12 months', 'History of cryptorchidism, testicular trauma, or mumps orchitis', 'Low libido or erectile dysfunction suggesting hypogonadism', 'Small firm testes', 'Gynecomastia'],
    ['Semen analysis (at least 2, per WHO criteria)', 'Serum FSH, LH, total testosterone, estradiol, prolactin', 'Scrotal ultrasound (varicocele, epididymal abnormalities)', 'Transrectal ultrasound (ejaculatory duct obstruction)', 'Karyotype and Y-chromosome microdeletion (severe oligospermia or azoospermia)', 'Post-ejaculate urinalysis (retrograde ejaculation)'],
    'Varicocele: microsurgical varicocelectomy. Hypogonadotropic hypogonadism: hCG/FSH or pulsatile GnRH. STOP exogenous testosterone (suppresses spermatogenesis). Obstructive azoospermia: vasovasostomy or vasoepididymostomy; surgical sperm retrieval with IVF/ICSI. Non-obstructive azoospermia: micro-TESE with ICSI. Lifestyle optimization: weight loss, avoid heat exposure, reduce alcohol, stop tobacco.',
    'Varicocele repair improves semen in ~60-70% with ~40% spontaneous pregnancy rate. Vasectomy reversal success ~90% if <3 years. Micro-TESE retrieval rate ~50% in NOA. IVF/ICSI pregnancy rates ~40-50% per cycle with retrieved sperm.',
  ),
};

// ---------------------------------------------------------------------------
// Utility functions
// ---------------------------------------------------------------------------

/** Get a single condition by ID. */
export function getUrologyCondition(id: string): UrologyConditionEntry | undefined {
  return UROLOGY_CONDITION_ENTRIES[id];
}

/** Search conditions by name, category, or any text field (case-insensitive). */
export function searchUrologyConditions(query: string): UrologyConditionEntry[] {
  const q = query.toLowerCase();
  return Object.values(UROLOGY_CONDITION_ENTRIES).filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.category.toLowerCase().includes(q) ||
    c.description.toLowerCase().includes(q) ||
    c.treatment.toLowerCase().includes(q) ||
    c.prognosis.toLowerCase().includes(q),
  );
}

/** Filter conditions by category. */
export function getUrologyByCategory(category: UrologyConditionCategory): UrologyConditionEntry[] {
  return Object.values(UROLOGY_CONDITION_ENTRIES).filter(c => c.category === category);
}

/** Return the total number of urology conditions in the database. */
export function getUrologyConditionCount(): number {
  return Object.keys(UROLOGY_CONDITION_ENTRIES).length;
}

/** Get all condition IDs. */
export function getAllUrologyConditionIds(): string[] {
  return Object.keys(UROLOGY_CONDITION_ENTRIES);
}

/** Get conditions matching a specific clinical presentation keyword (case-insensitive). */
export function getUrologyByPresentation(keyword: string): UrologyConditionEntry[] {
  const k = keyword.toLowerCase();
  return Object.values(UROLOGY_CONDITION_ENTRIES).filter(c =>
    c.clinicalPresentation.some(p => p.toLowerCase().includes(k)),
  );
}
