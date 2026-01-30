/**
 * Biological Self — Urology Specialty Database
 * ~30 entries covering prostate, bladder, kidney-stone, male-reproductive,
 * urinary-tract, oncologic, pediatric-uro, and functional disorders.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type UrologyCategory =
  | 'prostate' | 'bladder' | 'kidney-stone' | 'male-reproductive'
  | 'urinary-tract' | 'oncologic' | 'pediatric-uro' | 'functional';

export interface UrologyEntry {
  id: string;
  name: string;
  nameEs: string;
  category: UrologyCategory;
  icd11: string;
  description: string;
  pathophysiology: string;
  clinicalFeatures: string[];
  diagnostics: string[];
  treatment: string[];
  complications: string[];
  patientExplanation: string;
  emergencySigns: string[];
}

// ---------------------------------------------------------------------------
// Compact helper
// ---------------------------------------------------------------------------

const uro = (
  id: string, name: string, nameEs: string, category: UrologyCategory,
  icd11: string, description: string, pathophysiology: string,
  clinicalFeatures: string[], diagnostics: string[], treatment: string[],
  complications: string[], patientExplanation: string, emergencySigns: string[],
): UrologyEntry => ({
  id, name, nameEs, category, icd11, description, pathophysiology,
  clinicalFeatures, diagnostics, treatment, complications, patientExplanation,
  emergencySigns,
});

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const UROLOGY_ENTRIES: Record<string, UrologyEntry> = {

  // ===== PROSTATE (4) ======================================================

  'bph': uro(
    'bph', 'Benign Prostatic Hyperplasia', 'Hiperplasia prostática benigna', 'prostate',
    'GA90.0',
    'Non-malignant enlargement of the prostate gland causing lower urinary tract symptoms (LUTS) in aging men.',
    'Dihydrotestosterone (DHT)-driven stromal and epithelial proliferation in the periurethral transition zone compresses the urethra. Increased smooth-muscle tone (alpha-1 adrenergic) adds a dynamic component. Detrusor hypertrophy compensates initially, then decompensates with chronic obstruction.',
    ['Urinary frequency and nocturia', 'Weak or intermittent urinary stream', 'Hesitancy and straining to void', 'Sensation of incomplete emptying', 'Post-void dribbling'],
    ['International Prostate Symptom Score (IPSS)', 'Digital rectal exam (smooth, enlarged prostate)', 'PSA (to rule out malignancy)', 'Uroflowmetry (Qmax <10 mL/s suggests obstruction)', 'Post-void residual ultrasound'],
    ['Watchful waiting for mild symptoms (IPSS <8)', 'Alpha-blockers (tamsulosin, alfuzosin) for dynamic component', '5-alpha reductase inhibitors (finasteride, dutasteride) for large prostates >30 g', 'Combination therapy for moderate-severe (alpha-blocker + 5-ARI)', 'Surgical: TURP, HoLEP, UroLift, Rezum for refractory or complicated BPH'],
    ['Acute urinary retention', 'Recurrent UTIs', 'Bladder stones', 'Chronic kidney disease from bilateral hydronephrosis', 'Detrusor decompensation and overflow incontinence'],
    'Your prostate gland has grown larger with age, squeezing the urine tube. Medications relax and shrink it; procedures can open the channel if medicines are not enough.',
    ['Complete inability to urinate (acute retention)', 'Fever with urinary symptoms (prostatitis/urosepsis)', 'Visible blood in urine', 'Flank pain with decreased urine output'],
  ),

  'acute-prostatitis': uro(
    'acute-prostatitis', 'Acute Bacterial Prostatitis', 'Prostatitis bacteriana aguda', 'prostate',
    'GA07.0',
    'Acute bacterial infection of the prostate gland; urological emergency if complicated by abscess or sepsis.',
    'Ascending urethral bacteria (E. coli, Klebsiella, Proteus, Enterococcus) or reflux of infected urine into prostatic ducts. Inflammation causes glandular edema and neutrophilic infiltration. Risk factors include catheterization, prostatic biopsy, urinary retention, and STIs.',
    ['High fever, chills, and malaise', 'Severe perineal and suprapubic pain', 'Dysuria, frequency, and urgency', 'Obstructive voiding symptoms or acute retention', 'Exquisitely tender, boggy prostate on DRE'],
    ['Urinalysis and urine culture (pyuria, bacteriuria)', 'Blood cultures if septic', 'CBC (leukocytosis with left shift)', 'PSA (elevated but not diagnostically useful)', 'Transrectal ultrasound if abscess suspected (avoid vigorous prostatic massage)'],
    ['Empiric antibiotics: fluoroquinolone or TMP-SMX for 4-6 weeks', 'IV antibiotics if septic (ampicillin + gentamicin or carbapenem)', 'Alpha-blockers for voiding symptoms', 'Suprapubic catheter if retention (avoid transurethral catheter)', 'CT-guided or transrectal drainage of prostatic abscess'],
    ['Prostatic abscess', 'Urosepsis and bacteremia', 'Chronic bacterial prostatitis', 'Urinary retention', 'Epididymitis from local extension'],
    'Your prostate has a bacterial infection causing fever and severe pain. Antibiotics for several weeks clear the infection; sometimes a catheter is needed temporarily.',
    ['High fever >38.5C with inability to urinate', 'Signs of sepsis (confusion, rapid heart rate, low blood pressure)', 'Severe worsening pain despite antibiotics', 'New flank pain suggesting ascending infection'],
  ),

  'chronic-prostatitis': uro(
    'chronic-prostatitis', 'Chronic Prostatitis / Chronic Pelvic Pain Syndrome', 'Prostatitis crónica / Síndrome de dolor pélvico crónico', 'prostate',
    'GA07.1',
    'Chronic pelvic pain in men lasting >3 months with or without voiding symptoms; NIH categories II-IV.',
    'Category II (chronic bacterial): persistent prostatic bacterial colonization despite antibiotics. Category III (CP/CPPS): multifactorial — pelvic floor myofascial dysfunction, neurogenic inflammation, central sensitization, and psychosocial factors. No clear infectious etiology in >90% of cases. Autoimmune and neuroplastic mechanisms proposed.',
    ['Perineal, suprapubic, or penile pain', 'Pain with ejaculation', 'Urinary frequency and urgency', 'Erectile dysfunction', 'Depression and reduced quality of life'],
    ['NIH Chronic Prostatitis Symptom Index (NIH-CPSI)', 'Pre- and post-massage urine test (Meares-Stamey 4-glass or simplified 2-glass)', 'Urinalysis and urine culture', 'Uroflowmetry', 'Pelvic floor assessment; MRI if structural pathology suspected'],
    ['Category II: prolonged antibiotics (fluoroquinolone 6-12 weeks)', 'Category III: multimodal approach — alpha-blockers, NSAIDs, pelvic floor physical therapy', 'Phytotherapy (quercetin, bee pollen extract)', 'Cognitive behavioral therapy and stress management', 'Neuromodulators (amitriptyline, gabapentin) for neuropathic component'],
    ['Chronic pain and disability', 'Sexual dysfunction', 'Anxiety and depression', 'Medication side effects', 'Recurrent episodes in category II'],
    'Chronic pelvic pain in men is common and frustrating. It usually is not an infection. A combination of physical therapy, medications, and stress management works best.',
    ['Sudden high fever (suggests acute flare or abscess)', 'Inability to urinate', 'Severe unrelenting pain unresponsive to analgesics'],
  ),

  'prostate-cancer': uro(
    'prostate-cancer', 'Prostate Cancer', 'Cáncer de próstata', 'prostate',
    '2C82',
    'Most common non-skin cancer in men; adenocarcinoma of the prostate with highly variable clinical behavior from indolent to aggressive.',
    'Androgen-driven malignant transformation of prostatic epithelium, predominantly in the peripheral zone. Progression involves PI3K/AKT, TMPRSS2-ERG fusions, and loss of PTEN. Gleason grading (Grade Groups 1-5) reflects differentiation. Metastasizes to bone (osteoblastic), lymph nodes, and rarely viscera.',
    ['Often asymptomatic (screen-detected)', 'Obstructive voiding symptoms (advanced local disease)', 'Hematuria or hematospermia', 'Bone pain (metastatic disease)', 'Weight loss and fatigue (advanced)'],
    ['PSA level and PSA density/velocity', 'Digital rectal exam (hard nodule, asymmetry)', 'Multiparametric MRI (PI-RADS scoring)', 'Transrectal or transperineal prostate biopsy with Gleason scoring', 'Staging: CT/bone scan or PSMA-PET/CT'],
    ['Active surveillance for low-risk (Grade Group 1, PSA <10)', 'Radical prostatectomy (robotic-assisted preferred)', 'External beam radiation therapy or brachytherapy', 'Androgen deprivation therapy (ADT) for advanced/metastatic', 'Novel agents: enzalutamide, abiraterone, PARP inhibitors (BRCA+), lutetium-177-PSMA'],
    ['Erectile dysfunction (post-surgery or radiation)', 'Urinary incontinence (post-prostatectomy)', 'ADT side effects: osteoporosis, metabolic syndrome, cardiovascular risk', 'Castration-resistant progression', 'Pathologic fractures from bone metastases'],
    'Prostate cancer is very common but often grows slowly. Many men are safely monitored without treatment. When needed, surgery, radiation, or hormone therapy offer excellent outcomes.',
    ['New severe bone pain (metastatic fracture risk)', 'Inability to urinate', 'Leg weakness or numbness (spinal cord compression)', 'Blood in urine not stopping'],
  ),

  // ===== BLADDER (4) =======================================================

  'overactive-bladder': uro(
    'overactive-bladder', 'Overactive Bladder', 'Vejiga hiperactiva', 'bladder',
    'GC01.0',
    'Syndrome of urinary urgency with or without urgency incontinence, usually with frequency and nocturia, in the absence of infection or other pathology.',
    'Detrusor overactivity from neurogenic (MS, stroke, spinal cord injury) or idiopathic causes. Proposed mechanisms: myogenic (altered smooth-muscle gap junctions), neurogenic (increased afferent signaling), and urothelial dysfunction (abnormal sensory transduction via ATP and acetylcholine release).',
    ['Sudden compelling urge to void', 'Urgency urinary incontinence', 'Frequency (>8 voids per day)', 'Nocturia (>1 void per night)', 'Disrupted sleep and social embarrassment'],
    ['Bladder diary (3-day voiding log)', 'Urinalysis to exclude UTI and hematuria', 'Post-void residual volume', 'Urodynamics if diagnosis uncertain or refractory', 'Cystoscopy if hematuria or suspected structural pathology'],
    ['Behavioral: bladder training, timed voiding, pelvic floor exercises', 'First-line medications: antimuscarinics (oxybutynin, solifenacin, tolterodine)', 'Beta-3 agonist (mirabegron, vibegron)', 'Third-line: onabotulinumtoxinA intravesical injection', 'Neuromodulation: sacral nerve stimulation or percutaneous tibial nerve stimulation'],
    ['Recurrent UTIs', 'Skin breakdown from incontinence', 'Falls (rushing to bathroom, especially elderly)', 'Depression and social isolation', 'Anticholinergic cognitive burden in elderly'],
    'Your bladder muscle contracts when it should not, creating sudden strong urges. Bladder training and medications calm it down. Botox injections work for resistant cases.',
    ['New onset with neurological symptoms (weakness, numbness)', 'Visible blood in urine', 'Fever with urinary symptoms'],
  ),

  'interstitial-cystitis': uro(
    'interstitial-cystitis', 'Interstitial Cystitis / Bladder Pain Syndrome', 'Cistitis intersticial / Síndrome de vejiga dolorosa', 'bladder',
    'GC00.2',
    'Chronic bladder pain, pressure, or discomfort with urinary frequency in the absence of identifiable causes; predominantly affects women.',
    'Multifactorial etiology involving deficient glycosaminoglycan (GAG) bladder lining, mast cell activation, neurogenic inflammation, and central sensitization. Potassium leakage through damaged urothelium activates submucosal nerves. Hunner lesions (ulcerative subtype) found in ~10% with distinct inflammatory pattern.',
    ['Suprapubic pain worsening with bladder filling, relieved by voiding', 'Urinary frequency (up to 60 times daily in severe cases)', 'Urgency without incontinence', 'Dyspareunia', 'Symptom flares triggered by diet, stress, or menstruation'],
    ['Clinical diagnosis by exclusion (AUA criteria)', 'Urinalysis and urine culture (negative)', 'Bladder diary', 'Cystoscopy with hydrodistention under anesthesia (glomerulations, Hunner lesions)', 'Potassium sensitivity test (historical, less commonly used)'],
    ['Patient education and dietary modification (avoid caffeine, alcohol, citrus, spicy foods)', 'Oral: amitriptyline, hydroxyzine, or pentosan polysulfate (PPS)', 'Intravesical: DMSO, heparin/lidocaine cocktail, hyaluronic acid', 'Fulguration or triamcinolone injection of Hunner lesions', 'Sacral neuromodulation or cyclosporine for refractory cases'],
    ['Chronic pain and disability', 'Depression and anxiety', 'Sexual dysfunction', 'Sleep deprivation', 'Reduced bladder capacity (end-stage IC)'],
    'Your bladder lining is irritated, causing pain and frequent urination without infection. Diet changes and specific treatments soothe the lining and calm the nerves.',
    ['Sudden severe flank pain (rule out kidney stone)', 'Fever (suggests superimposed infection)', 'Inability to urinate', 'Blood in urine (warrants further evaluation)'],
  ),

  'bladder-cancer': uro(
    'bladder-cancer', 'Bladder Cancer', 'Cáncer de vejiga', 'bladder',
    '2C94',
    'Most common malignancy of the urinary tract; predominantly urothelial (transitional cell) carcinoma, strongly linked to smoking.',
    'Urothelial carcinoma arises from bladder epithelium exposed to carcinogens concentrated in urine. Smoking is the single greatest risk factor (50% of cases). Occupational exposures (aromatic amines, benzidine). Two pathways: papillary (FGFR3 mutation, low-grade) and flat/CIS (p53/RB loss, high-grade, muscle-invasive).',
    ['Painless gross hematuria (most common presentation)', 'Irritative voiding symptoms (frequency, urgency, dysuria)', 'Pelvic pain (advanced)', 'Flank pain from ureteral obstruction', 'Weight loss and bone pain (metastatic)'],
    ['Urinalysis (microscopic or gross hematuria)', 'Urine cytology (high sensitivity for high-grade)', 'Cystoscopy with biopsy (gold standard)', 'CT urogram (upper tract evaluation)', 'Bimanual exam under anesthesia for staging; PET/CT for metastatic workup'],
    ['Non-muscle-invasive: TURBT + intravesical BCG (high-grade) or chemotherapy (low-grade)', 'Muscle-invasive: neoadjuvant cisplatin-based chemotherapy + radical cystectomy with urinary diversion', 'Bladder preservation: trimodal therapy (maximal TURBT + chemoradiation)', 'Metastatic: cisplatin-gemcitabine, immune checkpoint inhibitors (pembrolizumab, avelumab maintenance)', 'Erdafitinib for FGFR-altered tumors; enfortumab vedotin + pembrolizumab for advanced'],
    ['Recurrence (50-70% in non-muscle-invasive)', 'Progression to muscle-invasive disease', 'Upper tract recurrence', 'Complications of cystectomy (stoma issues, metabolic acidosis from ileal conduit)', 'Metastatic disease (median survival ~15 months)'],
    'Bladder cancer usually shows up as blood in the urine. Caught early, it is very treatable with scope removal and immune therapy into the bladder. Advanced cases may require bladder removal.',
    ['Persistent or heavy blood in urine', 'Inability to urinate', 'New flank pain (ureteral obstruction)', 'Unexplained weight loss with bone pain'],
  ),

  'neurogenic-bladder': uro(
    'neurogenic-bladder', 'Neurogenic Bladder', 'Vejiga neurogénica', 'bladder',
    'GC01.1',
    'Bladder dysfunction caused by neurological disease affecting storage and/or emptying; can be upper motor neuron (spastic) or lower motor neuron (flaccid) type.',
    'Suprasacral lesions (stroke, MS, spinal cord injury above S2) cause detrusor overactivity with sphincter dyssynergia (UMN type, high-pressure bladder). Sacral/infrasacral lesions (cauda equina, diabetic neuropathy, pelvic surgery) cause detrusor areflexia (LMN type, overflow incontinence). High-pressure bladders threaten the upper tracts.',
    ['UMN: urgency, incontinence, small-volume frequent voids', 'LMN: overflow incontinence, poor stream, large residuals', 'Recurrent UTIs', 'Autonomic dysreflexia (SCI above T6)', 'Hydronephrosis (asymptomatic upper tract damage)'],
    ['Detailed neurological history and exam', 'Bladder diary and post-void residual', 'Urodynamics (video-urodynamics preferred): detrusor pressure, compliance, capacity', 'Renal ultrasound (hydronephrosis screening)', 'Serum creatinine and eGFR'],
    ['Clean intermittent catheterization (CIC) — gold standard for emptying', 'Antimuscarinics or beta-3 agonists for overactivity', 'OnabotulinumtoxinA injections for refractory detrusor overactivity', 'Alpha-blockers for sphincter relaxation', 'Surgical: augmentation cystoplasty, continent catheterizable channels (Mitrofanoff), suprapubic catheter'],
    ['Upper urinary tract deterioration (hydronephrosis, renal failure)', 'Recurrent UTIs and urosepsis', 'Bladder stones', 'Autonomic dysreflexia (hypertensive crisis)', 'Squamous cell carcinoma (chronic indwelling catheter)'],
    'Nerve damage from your condition affects how your bladder stores and empties urine. Regular self-catheterization and medications protect your kidneys and keep you dry.',
    ['Autonomic dysreflexia: severe headache, flushing, high blood pressure in SCI patients', 'Fever with chills and flank pain (urosepsis)', 'Sudden inability to catheterize', 'New leg weakness or saddle anesthesia (cauda equina)'],
  ),

  // ===== KIDNEY STONE (4) ==================================================

  'calcium-stones': uro(
    'calcium-stones', 'Calcium Nephrolithiasis', 'Nefrolitiasis cálcica', 'kidney-stone',
    'GB70.0',
    'Most common kidney stones (80%); calcium oxalate (most frequent) or calcium phosphate. Recurrence rate ~50% within 5 years.',
    'Supersaturation of urine with calcium and oxalate or phosphate leads to crystal nucleation, growth, and aggregation at the papillary tip (Randall plaques). Hypercalciuria (absorptive, renal-leak, or resorptive), hyperoxaluria (dietary, enteric, or primary), hypocitraturia, and low urine volume are major risk factors.',
    ['Acute severe flank pain radiating to groin (renal colic)', 'Hematuria (gross or microscopic)', 'Nausea and vomiting', 'Restlessness (cannot find comfortable position)', 'Urinary frequency if stone near bladder'],
    ['Non-contrast CT abdomen/pelvis (gold standard, >95% sensitivity)', 'Urinalysis (hematuria, pH, crystals)', 'BMP (calcium, creatinine, uric acid)', 'Strain urine for stone analysis', '24-hour urine metabolic panel (calcium, oxalate, citrate, volume, sodium, pH)'],
    ['Acute: hydration, NSAIDs (ketorolac), opioids for refractory pain', 'Medical expulsive therapy: tamsulosin for distal ureteral stones <10 mm', 'SWL (extracorporeal shock wave lithotripsy) for stones <2 cm', 'Ureteroscopy with laser lithotripsy for ureteral or renal stones', 'Prevention: high fluid intake (>2.5 L/day), thiazide diuretics, potassium citrate, low-sodium diet, moderate calcium intake'],
    ['Ureteral obstruction and hydronephrosis', 'Obstructive pyelonephritis (urological emergency)', 'Acute kidney injury (bilateral obstruction or solitary kidney)', 'Chronic kidney disease from recurrent stones', 'Ureteral stricture from stone impaction or surgery'],
    'Calcium-based crystals form stones in the kidney that cause intense pain when passing. Drinking plenty of water and dietary changes cut the recurrence risk in half.',
    ['Fever with flank pain (infected obstructed kidney — emergency)', 'Inability to tolerate oral fluids from persistent vomiting', 'Anuria or minimal urine output', 'Severe uncontrolled pain'],
  ),

  'uric-acid-stones': uro(
    'uric-acid-stones', 'Uric Acid Nephrolithiasis', 'Nefrolitiasis por ácido úrico', 'kidney-stone',
    'GB70.1',
    'Radiolucent stones (10% of all stones) formed in persistently acidic urine; associated with gout, metabolic syndrome, and chronic diarrhea.',
    'Uric acid crystallizes when urine pH falls below 5.5 (pKa of uric acid = 5.35). Metabolic syndrome and insulin resistance reduce renal ammoniagenesis, lowering urine pH. Hyperuricosuria from purine-rich diet or myeloproliferative disorders contributes. Uniquely amenable to medical dissolution.',
    ['Renal colic (indistinguishable from calcium stones)', 'Hematuria', 'History of gout or metabolic syndrome', 'Recurrent stone formation', 'Bilateral staghorn calculi (rare but described)'],
    ['Non-contrast CT (low-attenuation stones, HU <500)', 'Urinalysis: persistently acidic urine pH <5.5', 'Serum uric acid (may be normal)', '24-hour urine: uric acid, pH, volume', 'Dual-energy CT can differentiate uric acid from calcium stones'],
    ['Medical dissolution: potassium citrate to raise urine pH to 6.5-7.0', 'Hydration (>2.5 L urine output/day)', 'Low-purine diet (limit red meat, organ meats, shellfish)', 'Allopurinol for hyperuricosuria or recurrence despite alkalization', 'Ureteroscopy or PCNL for large or obstructing stones'],
    ['Obstructive uropathy', 'Uric acid nephropathy (acute crystallization in tubules, tumor lysis)', 'Chronic kidney disease', 'Concurrent calcium stone formation', 'Staghorn calculus formation'],
    'Your stones form from uric acid in acidic urine. The good news: these stones can often be dissolved with medication that makes urine less acidic, without surgery.',
    ['Fever with flank pain', 'Anuria (suggests bilateral obstruction)', 'Severe nausea/vomiting with dehydration', 'Known tumor lysis risk with rising uric acid'],
  ),

  'struvite-stones': uro(
    'struvite-stones', 'Struvite (Infection) Stones', 'Cálculos de estruvita', 'kidney-stone',
    'GB70.2',
    'Magnesium-ammonium-phosphate stones caused by urease-producing bacterial infections; can form large staghorn calculi.',
    'Urease-producing organisms (Proteus mirabilis most common, also Klebsiella, Pseudomonas, Staphylococcus saprophyticus) hydrolyze urea into ammonia and CO2, raising urine pH >7.0. Alkaline urine supersaturates with magnesium-ammonium-phosphate and carbonate-apatite, forming rapidly growing stones.',
    ['May be asymptomatic despite large stone burden', 'Recurrent UTIs with same organism', 'Flank pain', 'Foul-smelling or cloudy urine', 'Staghorn calculus found incidentally on imaging'],
    ['CT abdomen/pelvis (staghorn or branching calculus)', 'Urine culture (urease-producing organism)', 'Urinalysis: alkaline pH >7.0, crystals ("coffin-lid" shape)', 'Stone analysis (magnesium-ammonium-phosphate)', 'Metabolic workup to exclude concurrent metabolic stones'],
    ['Complete surgical stone removal is essential (PCNL preferred for staghorn)', 'Culture-specific antibiotics before, during, and after surgery', 'Acetohydroxamic acid (AHA) — urease inhibitor for recurrent struvite (limited by side effects)', 'Acidification of urine is not reliably effective', 'Long-term antibiotic suppression in select patients with recurrent infections'],
    ['Urosepsis (life-threatening)', 'Xanthogranulomatous pyelonephritis', 'Loss of renal function (destroyed kidney)', 'Rapid stone recurrence if fragments remain', 'Perinephric abscess'],
    'These stones grow from persistent kidney infections and can become very large. Complete removal plus treating the infection is critical to prevent them from returning.',
    ['High fever, chills, and flank pain (urosepsis)', 'Confusion or low blood pressure with UTI symptoms', 'Persistent high fever despite oral antibiotics'],
  ),

  'ureteral-obstruction': uro(
    'ureteral-obstruction', 'Ureteral Obstruction', 'Obstrucción ureteral', 'kidney-stone',
    'GB90',
    'Blockage of urinary flow at any point along the ureter; stones are the most common cause in adults, while congenital anomalies predominate in children.',
    'Obstruction raises intraluminal pressure, dilating the collecting system (hydronephrosis). Initially GFR is maintained by prostaglandin-mediated afferent arteriolar dilation. Prolonged obstruction causes ischemic tubular injury, interstitial fibrosis, and irreversible nephron loss. Complete obstruction >2 weeks risks permanent damage.',
    ['Acute: severe colicky flank pain radiating to groin', 'Nausea and vomiting', 'Hematuria', 'Chronic: may be painless with progressive hydronephrosis', 'Anuria if bilateral or solitary kidney'],
    ['Non-contrast CT (stone visualization, hydronephrosis)', 'Renal ultrasound (hydronephrosis screening, safe in pregnancy)', 'BMP and CBC', 'Urinalysis', 'MAG3 renal scan for functional obstruction assessment'],
    ['Stone passage: hydration, analgesia, medical expulsive therapy', 'Emergent decompression (ureteral stent or nephrostomy) if infected or solitary kidney', 'Ureteroscopy with lithotripsy for persistent ureteral stones', 'SWL for proximal ureteral stones <1 cm', 'Surgical repair for strictures or extrinsic compression (ureteral reimplant, balloon dilation)'],
    ['Obstructive pyelonephritis and urosepsis', 'Forniceal rupture (urinoma)', 'Chronic kidney disease or renal atrophy', 'Post-obstructive diuresis after relief', 'Ureteral stricture'],
    'Something is blocking the tube between your kidney and bladder. Relieving the blockage quickly protects kidney function. Stents or procedures can open the pathway.',
    ['Fever with obstruction (infected hydronephrosis — surgical emergency)', 'Anuria', 'Worsening kidney function on labs', 'Uncontrolled pain with vomiting'],
  ),

  // ===== MALE REPRODUCTIVE (4) =============================================

  'erectile-dysfunction': uro(
    'erectile-dysfunction', 'Erectile Dysfunction', 'Disfunción eréctil', 'male-reproductive',
    'HA01',
    'Consistent inability to achieve or maintain an erection sufficient for satisfactory sexual performance; affects >50% of men aged 40-70.',
    'Erection requires coordinated neurovascular events: parasympathetic stimulation releases nitric oxide (NO) from cavernosal nerves and endothelium, activating cGMP-mediated smooth-muscle relaxation and sinusoidal filling. PDE5 degrades cGMP. Causes: vascular (atherosclerosis, most common), neurogenic, hormonal, psychogenic, or medication-induced.',
    ['Inability to achieve or maintain erection', 'Reduced rigidity', 'Decreased libido (if hormonal)', 'Relationship distress', 'May indicate underlying cardiovascular disease'],
    ['Validated questionnaire (IIEF-5/SHIM)', 'Fasting glucose, lipid panel, HbA1c (vascular risk)', 'Morning testosterone level', 'Cardiovascular risk assessment', 'Penile duplex Doppler ultrasound (if vascular etiology suspected)'],
    ['Lifestyle modification: exercise, weight loss, smoking cessation', 'First-line: PDE5 inhibitors (sildenafil, tadalafil, vardenafil)', 'Second-line: intracavernosal injection (alprostadil, trimix), vacuum erection device', 'Testosterone replacement if hypogonadal', 'Third-line: penile prosthesis implantation (inflatable or malleable)'],
    ['Cardiovascular disease (ED as early marker)', 'Depression and relationship breakdown', 'Complications of injections (priapism, fibrosis)', 'Prosthesis infection or malfunction', 'Medication side effects (headache, visual changes, priapism with injections)'],
    'Difficulty with erections is very common and treatable. It can be an early warning sign for heart disease. Pills work for most men, with other options available if needed.',
    ['Erection lasting >4 hours (priapism — emergency)', 'Chest pain after taking ED medication', 'Sudden vision or hearing loss after PDE5 inhibitor'],
  ),

  'male-infertility': uro(
    'male-infertility', 'Male Infertility', 'Infertilidad masculina', 'male-reproductive',
    'GA30',
    'Male factor contributes to ~50% of infertile couples; defined as failure to conceive after 12 months of unprotected intercourse.',
    'Normal spermatogenesis requires intact hypothalamic-pituitary-gonadal axis, functional seminiferous tubules, and patent reproductive tract. Causes: pretesticular (hormonal, 2%), testicular (spermatogenic failure, 30-40%), and post-testicular (obstructive, ejaculatory, 10-20%). Idiopathic in 30-40%. Varicocele is the most common correctable cause.',
    ['Inability to conceive', 'History of cryptorchidism, varicocele, or testicular trauma', 'Low ejaculate volume', 'Gynecomastia or decreased body hair (hormonal)', 'Small, soft testes on exam'],
    ['Semen analysis (2 specimens, 2-4 weeks apart): volume, count, motility, morphology', 'Hormonal: FSH, LH, testosterone, prolactin', 'Scrotal ultrasound (varicocele, testicular mass)', 'Genetic testing: karyotype, Y-chromosome microdeletion, CFTR (if CBAVD)', 'Post-ejaculate urinalysis (retrograde ejaculation)'],
    ['Varicocele repair (microsurgical varicocelectomy)', 'Hormonal therapy: clomiphene citrate, hCG, FSH for hypogonadotropic hypogonadism', 'Surgical sperm retrieval (micro-TESE) for non-obstructive azoospermia', 'Vasectomy reversal (vasovasostomy or vasoepididymostomy)', 'Assisted reproduction: IUI, IVF, ICSI'],
    ['Psychological stress and relationship strain', 'Surgical complications (testicular atrophy post-varicocelectomy, rare)', 'OHSS in female partner from IVF', 'Genetic transmission of infertility-related conditions', 'Financial burden of ART'],
    'Male infertility is common and often treatable. A semen analysis is the key first test. Varicocele repair, hormones, or assisted reproduction help many couples conceive.',
    ['Testicular torsion symptoms (sudden severe pain — emergency)', 'New testicular mass found during evaluation'],
  ),

  'testicular-torsion': uro(
    'testicular-torsion', 'Testicular Torsion', 'Torsión testicular', 'male-reproductive',
    'GA05.0',
    'Surgical emergency from twisting of the spermatic cord compromising testicular blood supply; peak incidence in adolescents.',
    'Intravaginal torsion (most common): "bell clapper" deformity allows the testis to rotate freely within the tunica vaginalis. Rotation >360 degrees occludes arterial and venous flow. Testis salvage rates: >90% if detorsed within 6 hours, <10% after 24 hours. Extravaginal torsion occurs in neonates.',
    ['Sudden onset severe unilateral scrotal pain', 'Nausea and vomiting', 'High-riding, horizontally oriented testis', 'Absent cremasteric reflex', 'Negative Prehn sign (elevation does not relieve pain)'],
    ['Clinical diagnosis — do not delay for imaging', 'Color Doppler ultrasound if diagnosis uncertain (reduced or absent flow)', 'CBC and urinalysis (usually normal, helps exclude epididymitis)', 'Physical exam: cremasteric reflex absent, testis horizontal', 'Immediate surgical exploration if high clinical suspicion regardless of imaging'],
    ['Emergency scrotal exploration and detorsion', 'Bilateral orchidopexy (fix both testes to prevent recurrence)', 'Orchiectomy if non-viable testis', 'Manual detorsion ("open the book": lateral rotation) as temporizing measure', 'Time is critical: <6 hours for best salvage'],
    ['Testicular loss (orchiectomy)', 'Testicular atrophy even after successful detorsion', 'Subfertility (anti-sperm antibodies, damage to contralateral testis)', 'Recurrence if orchidopexy not performed', 'Infection of non-viable testis if not removed'],
    'The testicle twists on its blood supply, cutting off flow. This is a surgical emergency — the faster it is untwisted (ideally within 6 hours), the better the chance of saving it.',
    ['Sudden severe scrotal pain — always assume torsion until proven otherwise', 'Nausea and vomiting with scrotal pain in an adolescent', 'Swollen, high-riding testicle'],
  ),

  'varicocele': uro(
    'varicocele', 'Varicocele', 'Varicocele', 'male-reproductive',
    'GA10.0',
    'Abnormal dilation of the pampiniform venous plexus in the scrotum; present in 15% of adult males and 40% of infertile men.',
    'Incompetent valves in the internal spermatic vein (left side 90%, due to perpendicular drainage into left renal vein) cause retrograde venous flow and venous engorgement. Elevated scrotal temperature, oxidative stress, reflux of adrenal metabolites, and impaired countercurrent heat exchange damage spermatogenesis.',
    ['Usually asymptomatic', 'Scrotal heaviness or dull ache worsening with standing', '"Bag of worms" on palpation with Valsalva', 'Left-sided predominance', 'Testicular atrophy in adolescents'],
    ['Physical exam: grade I (palpable with Valsalva), II (palpable at rest), III (visible)', 'Scrotal ultrasound with Doppler: vein diameter >3 mm with reflux', 'Semen analysis (if fertility concern)', 'Hormonal panel if hypogonadal symptoms', 'Renal imaging if new right-sided or non-reducible varicocele (rule out mass)'],
    ['Observation if asymptomatic with normal fertility', 'Microsurgical subinguinal varicocelectomy (gold standard)', 'Laparoscopic varicocelectomy', 'Percutaneous embolization (interventional radiology)', 'Adolescent repair if testicular size discrepancy >20% or abnormal semen'],
    ['Recurrence (5-15% depending on technique)', 'Hydrocele formation (most common surgical complication)', 'Testicular atrophy (rare, arterial injury)', 'Persistent infertility despite repair', 'Wound infection'],
    'Enlarged veins in the scrotum can overheat the testicle and affect sperm production. If causing infertility or pain, a minor surgical repair improves outcomes for many men.',
    ['Sudden onset of new right-sided varicocele (may indicate renal mass)', 'Acute severe scrotal pain (rule out torsion)', 'Varicocele that does not decompress when lying down'],
  ),

  // ===== URINARY TRACT (4) =================================================

  'lower-uti': uro(
    'lower-uti', 'Lower Urinary Tract Infection (Cystitis)', 'Infección urinaria baja (cistitis)', 'urinary-tract',
    'GC08.0',
    'Bacterial infection of the bladder; most common bacterial infection in women. E. coli accounts for 75-95% of uncomplicated cases.',
    'Uropathogenic E. coli (UPEC) ascend from the periurethral area through the urethra to the bladder. Type 1 pili (FimH adhesin) bind uroplakin on bladder epithelium, facilitating invasion and biofilm formation. Shorter female urethra, sexual intercourse, and altered vaginal flora (spermicide, antibiotics) increase risk.',
    ['Dysuria (burning with urination)', 'Urinary frequency and urgency', 'Suprapubic pain or pressure', 'Cloudy or malodorous urine', 'Hematuria (gross or microscopic)'],
    ['Urinalysis: pyuria (>10 WBC/hpf), leukocyte esterase, nitrites', 'Urine culture (>10^5 CFU/mL for clean-catch; >10^2 for catheter specimen)', 'Uncomplicated cystitis: empiric treatment without culture is acceptable', 'Culture recommended for recurrent, complicated, or treatment failure', 'Imaging only if structural abnormality suspected'],
    ['Uncomplicated: nitrofurantoin 5 days, TMP-SMX 3 days, or fosfomycin single dose', 'Complicated: fluoroquinolone or parenteral antibiotics based on culture', 'Phenazopyridine for symptomatic relief (2-3 days only)', 'Recurrent: prophylactic antibiotics, post-coital prophylaxis, vaginal estrogen (postmenopausal)', 'Non-antibiotic prevention: D-mannose, cranberry products, adequate hydration'],
    ['Pyelonephritis (ascending infection)', 'Recurrent infections', 'Bacteremia (rare in uncomplicated)', 'Antibiotic resistance from repeated courses', 'Clostridioides difficile colitis from antibiotics'],
    'A bladder infection causes burning and frequent urination. A short course of antibiotics clears it. Drinking plenty of water and urinating after sex help prevent recurrence.',
    ['Fever >38C (suggests kidney involvement)', 'Severe flank pain', 'Persistent vomiting', 'Symptoms in pregnancy (risk of pyelonephritis)'],
  ),

  'pyelonephritis': uro(
    'pyelonephritis', 'Acute Pyelonephritis', 'Pielonefritis aguda', 'urinary-tract',
    'GB60.0',
    'Bacterial infection of the renal parenchyma and collecting system; a potentially serious upper urinary tract infection.',
    'Ascending bacteria from the bladder reach the kidney via the ureters. Vesicoureteral reflux, obstruction, and pregnancy facilitate ascension. Infection triggers neutrophilic infiltration and abscess microformation in the renal parenchyma. E. coli (80%), Klebsiella, and Proteus are most common pathogens.',
    ['Fever, chills, and rigors', 'Flank pain and costovertebral angle tenderness', 'Nausea and vomiting', 'Lower urinary tract symptoms (dysuria, frequency)', 'Tachycardia and ill appearance'],
    ['Urinalysis: pyuria, WBC casts (pathognomonic for upper tract), bacteriuria', 'Urine culture with sensitivities (mandatory)', 'Blood cultures if hospitalized or septic', 'CBC (leukocytosis), BMP (creatinine)', 'CT with contrast if no improvement in 48-72h (rule out abscess, obstruction)'],
    ['Outpatient (uncomplicated, mild): fluoroquinolone 7 days or TMP-SMX 14 days', 'Inpatient (severe, vomiting, sepsis): IV ceftriaxone, fluoroquinolone, or piperacillin-tazobactam', 'De-escalate to oral antibiotics once afebrile and improving', 'Drain any abscess (percutaneous or surgical)', 'Relieve obstruction emergently if infected hydronephrosis'],
    ['Renal abscess or perinephric abscess', 'Urosepsis and septic shock', 'Emphysematous pyelonephritis (gas-forming, diabetics)', 'Chronic pyelonephritis and renal scarring', 'Papillary necrosis (sickle cell, diabetes, NSAID use)'],
    'A kidney infection causes high fever and back pain. Antibiotics for 1-2 weeks cure it. If severe, hospital treatment with IV antibiotics is needed.',
    ['Fever persisting >72h on antibiotics', 'Signs of sepsis (confusion, low blood pressure, fast breathing)', 'Known obstruction with fever', 'Immunocompromised with UTI symptoms'],
  ),

  'urethral-stricture': uro(
    'urethral-stricture', 'Urethral Stricture', 'Estenosis uretral', 'urinary-tract',
    'GC04.0',
    'Narrowing of the urethral lumen from scar tissue (spongiofibrosis); predominantly affects males due to longer urethra.',
    'Injury to urethral epithelium and corpus spongiosum triggers fibrosis and scar contraction. Causes: iatrogenic (catheterization, instrumentation, hypospadias repair — most common), post-inflammatory (gonococcal urethritis, lichen sclerosus), traumatic (straddle injury, pelvic fracture), and idiopathic. Bulbar urethra most commonly affected.',
    ['Weak or spraying urinary stream', 'Straining to void', 'Urinary tract infections', 'Urinary retention (acute or chronic)', 'Post-void dribbling and incomplete emptying'],
    ['Uroflowmetry (flattened, prolonged flow pattern)', 'Retrograde urethrogram (RUG) — gold standard for location and length', 'Voiding cystourethrogram (VCUG)', 'Cystourethroscopy', 'Urethral ultrasound (emerging, assesses spongiofibrosis depth)'],
    ['Urethral dilation (temporizing, high recurrence)', 'Direct vision internal urethrotomy (DVIU) for short bulbar strictures <2 cm', 'Urethroplasty: excision and primary anastomosis (EPA) for short strictures', 'Buccal mucosal graft urethroplasty for longer strictures', 'Perineal urethrostomy for salvage or patient preference'],
    ['Stricture recurrence (50-70% after dilation/DVIU)', 'Urinary retention', 'Urinary tract infections', 'Periurethral abscess', 'Urethral fistula'],
    'Scar tissue narrows the urine tube, making it hard to empty your bladder. Minor procedures can open it, but the best long-term results come from surgical reconstruction.',
    ['Complete inability to urinate', 'Fever with urinary symptoms', 'Perineal swelling and pain (abscess)', 'Urinary retention with overflow incontinence'],
  ),

  'vesicoureteral-reflux': uro(
    'vesicoureteral-reflux', 'Vesicoureteral Reflux', 'Reflujo vesicoureteral', 'urinary-tract',
    'LB10',
    'Retrograde flow of urine from bladder to ureter and kidney; most common urological anomaly in children, present in 30-50% of children with UTIs.',
    'Primary VUR: congenital short intramural ureteral tunnel with deficient detrusor backing allows reflux. Normally the 5:1 tunnel length-to-diameter ratio creates a valve mechanism. Secondary VUR: from bladder outlet obstruction, neurogenic bladder, or bladder dysfunction. Reflux delivers infected urine to the kidneys, causing pyelonephritis and renal scarring.',
    ['Recurrent febrile UTIs (most common presentation)', 'Prenatal hydronephrosis (detected on screening)', 'Failure to thrive (in severe cases)', 'Flank pain with voiding', 'Often asymptomatic between infections'],
    ['Voiding cystourethrogram (VCUG) — gold standard for diagnosis and grading (I-V)', 'DMSA renal scan (renal scarring assessment)', 'Renal/bladder ultrasound', 'Urinalysis and urine culture', 'Urodynamics if bladder dysfunction suspected'],
    ['Grades I-III: observation with antibiotic prophylaxis, spontaneous resolution in 80%', 'Bladder/bowel management (treat constipation and dysfunctional voiding)', 'Endoscopic injection: dextranomer/hyaluronic acid (Deflux) — outpatient', 'Ureteral reimplantation (open or robotic) for high-grade or breakthrough infections', 'Monitor renal growth and scarring with serial imaging'],
    ['Recurrent pyelonephritis', 'Renal scarring and reflux nephropathy', 'Hypertension', 'Chronic kidney disease or ESRD (severe bilateral scarring)', 'Contralateral reflux after unilateral repair'],
    'Your child\'s urine flows backward toward the kidneys, increasing infection risk. Many outgrow this, and low-dose antibiotics prevent infections while waiting. Surgery fixes persistent cases.',
    ['Fever in a child with known VUR (pyelonephritis)', 'New onset hypertension in a child', 'Poor growth or failure to thrive with recurrent UTIs'],
  ),

  // ===== ONCOLOGIC (4) =====================================================

  'renal-cell-carcinoma': uro(
    'renal-cell-carcinoma', 'Renal Cell Carcinoma', 'Carcinoma de células renales', 'oncologic',
    '2C90',
    'Most common renal malignancy in adults; clear cell subtype (70-80%). Often diagnosed incidentally; classic triad present in <10%.',
    'Clear cell RCC arises from proximal tubular epithelium, driven by VHL gene loss (chromosome 3p) causing HIF accumulation and upregulation of VEGF, PDGF, and other angiogenic pathways. Other subtypes: papillary (MET pathway), chromophobe (less aggressive). Paraneoplastic syndromes (EPO, PTHrP, renin) in 10-20%.',
    ['Often incidentally discovered on imaging', 'Classic triad (rare): hematuria, flank pain, palpable mass', 'Weight loss, fever, and night sweats', 'Paraneoplastic: polycythemia, hypercalcemia, hypertension', 'Left varicocele (left renal vein invasion)'],
    ['CT abdomen/pelvis with and without contrast (enhancing renal mass)', 'MRI for indeterminate lesions or IVC thrombus delineation', 'Chest CT for staging', 'Biopsy for small masses if observation considered', 'Labs: CBC (polycythemia or anemia), BMP, LDH, calcium'],
    ['Localized: partial nephrectomy (nephron-sparing, preferred for T1)', 'Radical nephrectomy for large or central tumors', 'Active surveillance for small renal masses (<2 cm) in elderly/comorbid', 'Metastatic: immune checkpoint combinations (nivolumab + ipilimumab, pembrolizumab + axitinib)', 'TKIs (cabozantinib, sunitinib), mTOR inhibitors for subsequent lines'],
    ['Metastatic disease (30% present with metastases)', 'Local recurrence after partial nephrectomy', 'CKD after nephrectomy', 'IVC tumor thrombus extension', 'Paraneoplastic syndrome persistence'],
    'Kidney cancer is often found by accident on scans. Caught early, partial removal of the kidney is usually curative. Advanced cases respond to modern immunotherapy combinations.',
    ['Sudden severe flank pain with gross hematuria', 'New unexplained leg swelling (IVC thrombus)', 'Bone pain (metastatic)', 'Unexplained weight loss with flank mass'],
  ),

  'testicular-cancer': uro(
    'testicular-cancer', 'Testicular Cancer', 'Cáncer testicular', 'oncologic',
    '2C80',
    'Most common solid malignancy in men aged 15-35; highly curable. Germ cell tumors (95%): seminoma and non-seminoma.',
    'Germ cell tumors arise from intratubular germ cell neoplasia in situ (GCNIS). Seminoma: uniform cells, slow-growing, radiosensitive. Non-seminoma (embryonal carcinoma, yolk sac, choriocarcinoma, teratoma): more aggressive, hematogenous spread. Risk factors: cryptorchidism (3-8x), prior testicular cancer, family history, Klinefelter syndrome.',
    ['Painless testicular mass (most common)', 'Dull scrotal heaviness or ache', 'Gynecomastia (hCG-producing tumors)', 'Back pain (retroperitoneal lymphadenopathy)', 'Dyspnea (pulmonary metastases)'],
    ['Scrotal ultrasound (intratesticular hypoechoic mass)', 'Serum tumor markers: AFP, beta-hCG, LDH (pre- and post-orchiectomy)', 'CT chest/abdomen/pelvis for staging', 'Radical inguinal orchiectomy (diagnostic and therapeutic — never transscrotal)', 'Histopathology: seminoma vs non-seminoma classification'],
    ['Stage I seminoma: surveillance, single-agent carboplatin, or radiation', 'Stage I non-seminoma: surveillance or nerve-sparing RPLND', 'Advanced: BEP chemotherapy (bleomycin, etoposide, cisplatin) — curative in >90%', 'Salvage: high-dose chemotherapy + autologous stem cell transplant', 'Sperm banking before treatment'],
    ['Infertility from chemotherapy or surgery', 'Ejaculatory dysfunction post-RPLND', 'Bleomycin pulmonary toxicity', 'Secondary malignancies (leukemia from etoposide)', 'Cardiovascular disease (long-term post-cisplatin)'],
    'Testicular cancer is the most curable solid cancer. A painless lump in the testicle should be checked promptly. Even advanced cases have >90% cure rates with chemotherapy.',
    ['Rapidly enlarging testicular mass', 'Severe back pain with testicular mass', 'Shortness of breath (possible metastases)', 'Sudden scrotal pain (hemorrhage into tumor or concurrent torsion)'],
  ),

  'penile-cancer': uro(
    'penile-cancer', 'Penile Cancer', 'Cáncer de pene', 'oncologic',
    '2C81',
    'Rare squamous cell carcinoma of the penis; strongly associated with HPV infection and phimosis.',
    'Chronic inflammation from phimosis, poor hygiene, and smegma accumulation creates a carcinogenic environment. HPV types 16 and 18 are found in ~50% of cases; E6/E7 oncoproteins degrade p53 and Rb. Lichen sclerosus (balanitis xerotica obliterans) is a premalignant condition. Circumcision in infancy is protective.',
    ['Painless penile lesion or mass (glans or prepuce)', 'Non-healing ulcer or papule', 'Phimosis with bloody or malodorous discharge', 'Inguinal lymphadenopathy', 'Often delayed presentation (embarrassment, denial)'],
    ['Biopsy of penile lesion (incisional or excisional)', 'Physical exam: palpate inguinal nodes bilaterally', 'MRI of penis for depth of invasion', 'CT or PET/CT for nodal and metastatic staging', 'HPV testing on tissue'],
    ['Tis/Ta: topical (5-FU, imiquimod), laser ablation, or glans resurfacing', 'T1-T2: partial penectomy with 2 cm margin (or glans-sparing if possible)', 'T3-T4: total penectomy with perineal urethrostomy', 'Inguinal lymphadenectomy (modified or radical based on risk)', 'Systemic: cisplatin-based chemotherapy for advanced; pembrolizumab for PD-L1+ tumors'],
    ['Lymphedema from lymphadenectomy', 'Urethral stenosis', 'Psychological impact and sexual dysfunction', 'Local recurrence', 'Distant metastatic disease (poor prognosis)'],
    'Penile cancer is rare but serious. HPV vaccination and good hygiene help prevent it. Early lesions are treated with minor procedures; advanced cases may need more extensive surgery.',
    ['Rapidly growing penile mass', 'Bleeding from penile lesion', 'Hard, fixed inguinal lymph nodes', 'Urinary obstruction from tumor'],
  ),

  'adrenal-mass-urology': uro(
    'adrenal-mass-urology', 'Adrenal Mass (Urological Perspective)', 'Masa suprarrenal (perspectiva urológica)', 'oncologic',
    '2D11',
    'Adrenal lesions encountered during urological workup; urologists manage surgical excision when indicated.',
    'Incidentalomas found in 4-5% of abdominal CTs. Differential: non-functioning adenoma (most common), cortisol-secreting adenoma, pheochromocytoma, aldosteronoma, adrenocortical carcinoma, or metastasis. Hormonal workup determines functional status. Size >4 cm, imaging characteristics (irregular, heterogeneous, high HU), and growth raise malignancy concern.',
    ['Most are asymptomatic incidentalomas', 'Hypertension (pheochromocytoma, aldosteronoma)', 'Cushing features (cortisol excess)', 'Flank or abdominal pain (large masses)', 'Weight loss and virilization (adrenocortical carcinoma)'],
    ['Dedicated adrenal CT: unenhanced HU (<10 = lipid-rich adenoma), washout characteristics', 'Biochemical workup: overnight dexamethasone suppression test, plasma metanephrines, aldosterone/renin ratio (if hypertensive)', 'MRI with chemical shift imaging for indeterminate lesions', 'PET/CT if metastasis suspected', 'Biopsy only if metastasis suspected and primary known (never biopsy pheochromocytoma)'],
    ['Functional tumors: adrenalectomy (laparoscopic preferred)', 'Non-functional >4 cm or suspicious imaging: adrenalectomy', 'Non-functional <4 cm, benign imaging: surveillance CT at 6-12 months', 'Adrenocortical carcinoma: open adrenalectomy + mitotane', 'Alpha-blockade before pheochromocytoma resection (phenoxybenzamine 10-14 days pre-op)'],
    ['Adrenal crisis post-adrenalectomy (cortisol-producing tumors)', 'Hypertensive crisis during pheochromocytoma resection', 'Recurrence or metastatic adrenocortical carcinoma', 'Hemorrhage from large mass', 'Contralateral adrenal insufficiency (rare, bilateral disease)'],
    'An adrenal gland mass was found during imaging. Most are harmless, but hormone tests and size determine if removal is needed. Laparoscopic surgery is standard if indicated.',
    ['Episodic severe headaches, sweating, rapid heartbeat (pheochromocytoma crisis)', 'Rapid growth on follow-up imaging', 'Signs of adrenal crisis (severe weakness, low blood pressure, confusion)'],
  ),

  // ===== PEDIATRIC UROLOGY (3) =============================================

  'cryptorchidism': uro(
    'cryptorchidism', 'Cryptorchidism (Undescended Testis)', 'Criptorquidia (testículo no descendido)', 'pediatric-uro',
    'LB13.0',
    'Failure of testicular descent into the scrotum; most common congenital genital anomaly in boys (2-5% of full-term, 30% of preterm).',
    'Testicular descent occurs in two phases: transabdominal (insulin-like factor 3, INSL3) and inguinoscrotal (androgens and CGRP via genitofemoral nerve). Undescended testes have impaired spermatogenesis from elevated temperature and may contain dysgenetic germ cells. Risk of testicular cancer is 4-8x higher, persisting even after orchidopexy.',
    ['Empty hemiscrotum on exam', 'Testis palpable in inguinal canal (most common) or non-palpable', 'May be retractile (normal variant — active cremasteric reflex)', 'Bilateral non-palpable testes with hypospadias raises DSD concern', 'Often discovered at newborn or well-child exam'],
    ['Physical exam in warm room with relaxed child (key diagnostic tool)', 'Ultrasound (limited sensitivity for non-palpable testes)', 'MRI or laparoscopy for non-palpable testes', 'Karyotype and hormonal workup if bilateral non-palpable with ambiguous genitalia', 'hCG stimulation test (assess Leydig cell function if bilateral)'],
    ['Observation until 6 months (spontaneous descent possible)', 'Orchidopexy at 6-12 months of age (AUA/EAU guideline)', 'Palpable: inguinal orchidopexy', 'Non-palpable: diagnostic laparoscopy followed by single-stage or staged Fowler-Stephens orchidopexy', 'Orchiectomy if intra-abdominal and post-pubertal (high cancer risk)'],
    ['Infertility (bilateral: 50-70% impaired; unilateral: 10-20%)', 'Testicular cancer (seminoma most common; 4-8x risk)', 'Testicular torsion', 'Inguinal hernia (concurrent patent processus vaginalis)', 'Psychological impact'],
    'Your child\'s testicle has not descended into the scrotum. A minor surgery before age 1 places it correctly, improving future fertility and making it easier to check for problems.',
    ['Sudden scrotal or inguinal pain (torsion of undescended testis)', 'New mass in the inguinal area or abdomen in an older child/adolescent with history'],
  ),

  'hypospadias': uro(
    'hypospadias', 'Hypospadias', 'Hipospadias', 'pediatric-uro',
    'LB11.0',
    'Congenital ventral displacement of the urethral meatus; one of the most common congenital penile anomalies (1 in 200-300 male births).',
    'Incomplete fusion of the urethral folds during weeks 8-14 of gestation due to insufficient dihydrotestosterone (DHT) action. Endocrine disruptors (environmental estrogens) are implicated. Severity classified by meatal location: distal (glanular, coronal — 70%), midshaft (15%), or proximal (penoscrotal, perineal — 15%). Chordee (ventral curvature) often accompanies proximal forms.',
    ['Ventrally displaced urethral meatus', 'Ventral curvature (chordee)', 'Hooded foreskin (dorsal only)', 'Spraying urinary stream', 'Difficulty with future sexual function (proximal forms)'],
    ['Physical exam at birth (meatal location, chordee, associated anomalies)', 'Do NOT circumcise (foreskin used for repair)', 'Renal/bladder ultrasound if proximal or associated anomalies', 'Karyotype and endocrine workup for severe proximal with bilateral cryptorchidism', 'Rule out disorders of sex development if ambiguous'],
    ['Distal without chordee: may not require surgery (cosmetic/functional assessment)', 'Surgical repair (urethroplasty) at 6-18 months of age', 'TIP (tubularized incised plate) repair — Snodgrass procedure for distal/mid', 'Two-stage repair for severe proximal with significant chordee', 'Pre-operative testosterone or DHT cream to increase penile size (proximal cases)'],
    ['Urethrocutaneous fistula (most common complication, 5-15%)', 'Meatal stenosis', 'Urethral stricture', 'Persistent chordee', 'Diverticulum formation'],
    'Your child\'s urine opening is on the underside of the penis instead of the tip. A common surgery during infancy corrects this, allowing normal urination and future sexual function.',
    ['Inability to urinate after repair (may indicate swelling or complication)', 'Signs of wound infection (redness, swelling, pus)'],
  ),

  'posterior-urethral-valves': uro(
    'posterior-urethral-valves', 'Posterior Urethral Valves', 'Válvulas de uretra posterior', 'pediatric-uro',
    'LB10.4',
    'Congenital membranous folds in the posterior urethra causing bladder outlet obstruction; most common cause of severe obstructive uropathy in male neonates.',
    'Abnormal congenital mucosal folds (Type I most common — originating from the verumontanum) obstruct urinary flow. Back-pressure causes bladder wall thickening and trabeculation, bilateral hydroureteronephrosis, and renal dysplasia if severe. Can present prenatally with oligohydramnios leading to pulmonary hypoplasia (Potter sequence).',
    ['Prenatal: bilateral hydronephrosis, distended bladder, oligohydramnios', 'Neonate: poor urinary stream, palpable bladder, respiratory distress', 'Infant: failure to thrive, UTI, urosepsis', 'Older child: voiding dysfunction, incontinence', 'Renal insufficiency at presentation in ~30%'],
    ['Prenatal ultrasound: bilateral hydronephrosis, thick-walled bladder ("keyhole sign")', 'VCUG (gold standard): posterior urethral dilation, thick bladder wall, VUR', 'Renal ultrasound (hydronephrosis severity, cortical thinning)', 'Serum creatinine and electrolytes', 'DMSA scan for differential renal function'],
    ['Initial: bladder drainage (urethral catheter or suprapubic)', 'Definitive: endoscopic valve ablation (primary treatment)', 'Vesicostomy if urethra too small for endoscope (premature infant)', 'Upper tract diversion (pyelostomy, ureterostomy) rarely needed', 'Long-term: management of bladder dysfunction (CIC, anticholinergics), CKD monitoring'],
    ['Chronic kidney disease and ESRD (30-50% long-term)', 'Valve bladder syndrome (persistent dysfunction despite valve ablation)', 'VUR and recurrent UTIs', 'Urinary incontinence (into adolescence)', 'Pulmonary hypoplasia and neonatal death (severe prenatal presentation)'],
    'Your baby boy has membranes blocking urine outflow, causing pressure on the kidneys. An endoscopic procedure removes the blockage. Lifelong kidney and bladder monitoring is essential.',
    ['Neonate not urinating within 24 hours of birth', 'Respiratory distress at birth (suggests lung underdevelopment from severe obstruction)', 'UTI with fever in an infant with known PUV', 'Rising creatinine after valve ablation'],
  ),

  // ===== FUNCTIONAL (3) ====================================================

  'stress-incontinence': uro(
    'stress-incontinence', 'Stress Urinary Incontinence', 'Incontinencia urinaria de esfuerzo', 'functional',
    'GC01.2',
    'Involuntary urine leakage with increased abdominal pressure (cough, sneeze, exercise); most common type in women.',
    'Two mechanisms: urethral hypermobility (loss of suburethral support from pelvic floor weakness, vaginal delivery, aging) and intrinsic sphincter deficiency (ISD, from prior surgery, radiation, or neurologic injury). Loss of the hammock-like pubourethral ligament and vaginal wall support allows descent during stress. In men, mainly post-prostatectomy sphincter damage.',
    ['Urine leakage with coughing, sneezing, laughing, lifting, or exercise', 'No leakage at rest or during sleep', 'Positive cough stress test on exam', 'Frequency of pad use', 'Impact on physical activity and quality of life'],
    ['Cough stress test (with comfortably full bladder)', 'Bladder diary', 'Urinalysis (rule out UTI)', 'Post-void residual', 'Urodynamics with Valsalva leak-point pressure (VLPP) for surgical planning; cystoscopy if concurrent pathology suspected'],
    ['Pelvic floor muscle training (Kegel exercises) — first-line', 'Pessary (continence ring or dish)', 'Duloxetine (off-label, used in some countries)', 'Midurethral sling (TVT or TOT) — gold standard surgical treatment for women', 'Male SUI: male sling or artificial urinary sphincter (AUS) post-prostatectomy'],
    ['Sling erosion or exposure', 'Urinary retention or voiding difficulty post-surgery', 'Recurrent UTIs', 'De novo urgency', 'Chronic pelvic pain (mesh complications)'],
    'Urine leaks when you cough, sneeze, or exercise because the pelvic floor muscles are weakened. Exercises strengthen them; a small supportive sling procedure provides lasting improvement.',
    ['Complete inability to urinate after procedure', 'Fever after sling surgery', 'Vaginal or urethral mesh exposure'],
  ),

  'urge-incontinence': uro(
    'urge-incontinence', 'Urge Urinary Incontinence', 'Incontinencia urinaria de urgencia', 'functional',
    'GC01.3',
    'Involuntary urine loss associated with a sudden compelling desire to void; the wet component of overactive bladder.',
    'Involuntary detrusor contractions during the filling phase. Neurogenic causes: suprapontine (stroke, Parkinson — loss of inhibition) or spinal (MS, SCI — detrusor-sphincter dyssynergia). Non-neurogenic: idiopathic detrusor overactivity — proposed mechanisms include myogenic changes (denervation supersensitivity, altered gap junctions) and urothelial dysfunction.',
    ['Sudden strong urge followed by involuntary leakage', 'Large-volume leakage episodes', 'Frequency and nocturia', 'Trigger activities: running water, cold exposure, key-in-lock', 'Significant impact on quality of life'],
    ['Bladder diary (documenting urgency episodes and incontinence)', 'Urinalysis and post-void residual', 'Urodynamics: involuntary detrusor contractions during filling', 'Neurological assessment if neurogenic cause suspected', 'Cystoscopy to exclude structural pathology'],
    ['Behavioral: bladder training, timed voiding, urge suppression techniques', 'Antimuscarinics: oxybutynin, tolterodine, solifenacin, fesoterodine', 'Beta-3 agonist: mirabegron, vibegron (fewer anticholinergic side effects)', 'OnabotulinumtoxinA injection (200 units if neurogenic, 100 units if idiopathic)', 'Sacral neuromodulation (InterStim) or percutaneous tibial nerve stimulation'],
    ['Skin breakdown and dermatitis', 'Social isolation and depression', 'Falls (rushing to bathroom)', 'Cognitive decline from long-term anticholinergics in elderly', 'Urinary retention after Botox injection'],
    'You lose urine because the bladder muscle squeezes unexpectedly. Bladder retraining and medications calm the muscle. Botox injections or nerve stimulation help resistant cases.',
    ['New incontinence with neurological symptoms (weakness, numbness, vision changes)', 'Urinary retention after treatment', 'Fever with incontinence'],
  ),

  'pelvic-organ-prolapse': uro(
    'pelvic-organ-prolapse', 'Pelvic Organ Prolapse', 'Prolapso de órganos pélvicos', 'functional',
    'GC40',
    'Descent of pelvic organs (bladder, uterus, rectum) through the vaginal canal due to pelvic floor support failure; affects up to 50% of parous women.',
    'Levator ani muscle injury (during vaginal delivery), connective tissue weakening (collagen changes with aging and estrogen loss), and chronic increased abdominal pressure (obesity, chronic cough, constipation) lead to loss of structural support. Cystocele (anterior), uterine/vaginal vault prolapse (apical), and rectocele (posterior) may coexist.',
    ['Vaginal bulge sensation ("something falling out")', 'Pelvic pressure or heaviness worsening with standing', 'Voiding dysfunction (incomplete emptying, positional voiding)', 'Need to splint (digitally reduce prolapse to void or defecate)', 'Urinary incontinence (may be masked by kinking — occult SUI)'],
    ['POP-Q examination (standardized staging system, stages 0-IV)', 'Pelvic exam with and without Valsalva', 'Post-void residual', 'Urodynamics (assess occult stress incontinence before surgery)', 'Renal ultrasound if advanced prolapse with voiding difficulty'],
    ['Conservative: pelvic floor exercises, vaginal pessary (ring, Gellhorn)', 'Vaginal estrogen (improves tissue quality)', 'Anterior: anterior colporrhaphy or paravaginal repair', 'Apical: sacrocolpopexy (abdominal/robotic — gold standard) or sacrospinous fixation (vaginal)', 'Posterior: posterior colporrhaphy; obliterative colpocleisis for non-sexually active elderly'],
    ['Prolapse recurrence (30% after native tissue repair)', 'Mesh erosion (vaginal mesh largely abandoned; abdominal mesh still used)', 'De novo stress incontinence after prolapse repair', 'Dyspareunia', 'Voiding dysfunction'],
    'Weakened pelvic floor muscles let organs bulge into the vagina. A pessary supports them without surgery. When needed, procedures restore normal anatomy and function.',
    ['Complete inability to urinate (severe prolapse causing urethral kinking)', 'Prolapse that cannot be manually reduced (incarcerated)', 'New bleeding from ulcerated prolapse'],
  ),
};

// ---------------------------------------------------------------------------
// Utility functions
// ---------------------------------------------------------------------------

/** Retrieve a single entry by its ID. */
export function getUrologyEntry(id: string): UrologyEntry | undefined {
  return UROLOGY_ENTRIES[id];
}

/** Full-text search across name, description, clinical features, diagnostics, and more. */
export function searchUrology(query: string): UrologyEntry[] {
  const q = query.toLowerCase();
  return Object.values(UROLOGY_ENTRIES).filter(e =>
    e.name.toLowerCase().includes(q) ||
    e.nameEs.toLowerCase().includes(q) ||
    e.description.toLowerCase().includes(q) ||
    e.category.includes(q) ||
    e.icd11.toLowerCase().includes(q) ||
    e.clinicalFeatures.some(f => f.toLowerCase().includes(q)) ||
    e.diagnostics.some(d => d.toLowerCase().includes(q)) ||
    e.treatment.some(t => t.toLowerCase().includes(q)) ||
    e.emergencySigns.some(s => s.toLowerCase().includes(q)),
  );
}

/** Filter all entries belonging to a given category. */
export function getUrologyByCategory(cat: UrologyCategory): UrologyEntry[] {
  return Object.values(UROLOGY_ENTRIES).filter(e => e.category === cat);
}

/** Return the total number of entries in the database. */
export function getUrologyCount(): number {
  return Object.keys(UROLOGY_ENTRIES).length;
}

/** Return all unique categories present in the database. */
export function getUrologyCategories(): UrologyCategory[] {
  return [...new Set(Object.values(UROLOGY_ENTRIES).map(e => e.category))];
}
