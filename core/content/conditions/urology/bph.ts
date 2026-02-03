/**
 * Benign Prostatic Hyperplasia (BPH) - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const bph: EducationalContent = {
  id: 'condition-bph',
  type: 'condition',
  name: 'Benign Prostatic Hyperplasia',
  alternateNames: ['BPH', 'Benign Prostatic Enlargement', 'Prostate Enlargement', 'LUTS'],
  hpoId: 'HP:0000012',

  levels: {
    1: {
      level: 1,
      summary: 'Benign prostatic hyperplasia is an enlarged prostate gland that can cause urinary problems in men as they age, making it difficult to empty the bladder completely.',
      explanation: `The prostate is a small gland that surrounds the tube that carries urine out of the body. As men get older, the prostate often grows larger and can squeeze this tube.

**Symptoms:**
- Needing to urinate often, especially at night
- Trouble starting to urinate
- Weak urine stream
- Stopping and starting while urinating
- Feeling like your bladder isn't empty after urinating
- Dribbling after urination

**What You Can Do:**
- Limit fluids in the evening
- Avoid caffeine and alcohol
- Double void (urinate, wait, then try again)
- Stay active and exercise

**Treatment Options:**
- Medications to shrink the prostate or relax muscles
- Procedures to remove extra prostate tissue

**When to See a Doctor:**
- Cannot urinate at all (medical emergency)
- Blood in your urine
- Pain or burning during urination
- Frequent urinary tract infections`,
      keyTerms: [
        { term: 'prostate', definition: 'A walnut-sized gland in men that produces fluid for semen and surrounds the urethra' },
        { term: 'urethra', definition: 'The tube that carries urine from the bladder out of the body' },
        { term: 'bladder', definition: 'The organ that stores urine before it leaves the body' },
        { term: 'frequency', definition: 'Needing to urinate more often than usual' },
        { term: 'nocturia', definition: 'Waking up at night to urinate' },
      ],
      analogies: [
        'The prostate growing larger is like a doughnut swelling in the middle—the hole gets smaller, making it harder for anything to pass through.',
        'Think of your urethra like a garden hose and the prostate like a clamp. When the prostate enlarges, it\'s like tightening the clamp, slowing the flow.'
      ],
      examples: [
        'A 65-year-old man wakes up 3-4 times each night to urinate and has to strain to start his stream. This is typical of BPH.',
        'A man notices his urine stream has become weaker over the past year, and he feels like he always has some urine left in his bladder after finishing.'
      ],
      patientCounselingPoints: [
        'BPH is not cancer and does not increase your risk of prostate cancer',
        'Take your time when urinating and try to relax your pelvic muscles',
        'Avoid medications that can worsen symptoms like decongestants and antihistamines',
        'See a doctor immediately if you cannot urinate at all'
      ],
    },
    2: {
      level: 2,
      summary: 'BPH is a non-cancerous enlargement of the prostate gland that causes lower urinary tract symptoms through both static (obstruction) and dynamic (smooth muscle tone) components.',
      explanation: `## Anatomy and Pathophysiology

The prostate has two main tissue types affecting urinary flow:

**Static Component:**
- Physical enlargement of prostate tissue
- Direct compression of the urethra
- Glandular epithelial and stromal hyperplasia

**Dynamic Component:**
- Alpha-1 adrenergic receptors in prostate smooth muscle
- Increased tone contributes to obstruction
- Target of alpha-blocker medications

## The Transition Zone

BPH primarily arises in the transition zone of the prostate (surrounding the urethra), unlike prostate cancer which typically starts in the peripheral zone.

## Lower Urinary Tract Symptoms (LUTS)

**Voiding (Obstructive) Symptoms:**
- Hesitancy (delay in starting urination)
- Weak stream
- Intermittent stream (stop and start)
- Straining to urinate
- Dribbling at end
- Incomplete emptying

**Storage (Irritative) Symptoms:**
- Frequency (daytime)
- Nocturia (nighttime)
- Urgency
- Urge incontinence

## Assessment

**International Prostate Symptom Score (IPSS):**
- Mild: 0-7
- Moderate: 8-19
- Severe: 20-35

**Physical Exam:**
- Digital rectal exam (DRE) to assess prostate size
- Assess for nodules (suspicious for cancer)

**Laboratory:**
- PSA to screen for prostate cancer
- Creatinine (kidney function)

**Urinalysis:**
- Check for blood, infection, or diabetes`,
      keyTerms: [
        { term: 'LUTS', definition: 'Lower urinary tract symptoms; urinary symptoms from bladder outlet obstruction' },
        { term: 'hesitancy', definition: 'Difficulty initiating urination; delay between trying to urinate and flow starting' },
        { term: 'IPSS', definition: 'International Prostate Symptom Score; standardized questionnaire to assess BPH severity' },
        { term: 'PSA', definition: 'Prostate-specific antigen; blood test used to screen for prostate cancer' },
        { term: 'DRE', definition: 'Digital rectal exam; physical examination of the prostate through the rectum' },
        { term: 'detrusor', definition: 'The bladder muscle; can become hypertrophied from chronic obstruction' },
      ],
      analogies: [
        'The bladder muscle is like a heart pumping against high blood pressure—over time, it thickens (hypertrophy) from working against the obstruction.'
      ],
      examples: [
        'A patient with IPSS of 15 has moderate symptoms and may benefit from medication.',
        'A man with a PSA of 0.8 ng/mL and smooth, enlarged prostate likely has BPH rather than cancer.'
      ],
      patientCounselingPoints: [
        'BPH symptoms are common in men over 50 but are not a normal part of aging that must be tolerated—treatments are available',
        'IPSS questionnaire helps track symptom progression and treatment response',
        'Erectile dysfunction medications (PDE5 inhibitors) can also help BPH symptoms',
        'Regular screening with PSA and DRE helps distinguish BPH from prostate cancer'
      ],
    },
    3: {
      level: 3,
      summary: 'BPH management involves a stepwise approach from watchful waiting to medical therapy with alpha-blockers and 5-alpha-reductase inhibitors, with surgical options for refractory cases or complications.',
      explanation: `## Diagnostic Evaluation

**Initial Assessment:**
- Detailed symptom assessment (IPSS)
- Physical examination (DRE)
- Urinalysis
- Serum creatinine (optional)
- PSA (if life expectancy >10 years)

**Optional Testing:**
- Post-void residual (PVR) measurement
- Urine flow rate (uroflowmetry)
- Cystoscopy (if hematuria, history of stricture, or prior surgery)
- Upper tract imaging (if hematuria, stones, or elevated creatinine)

## Medical Management

**Alpha-Blockers (Rapid Symptom Relief):**
- **Mechanism:** Relax prostatic smooth muscle (dynamic component)
- **Onset:** Improvement within days to weeks
- **Agents:**
  - Tamsulosin 0.4 mg daily
  - Alfuzosin 10 mg daily
  - Silodosin 8 mg daily
  - Doxazosin 1-8 mg daily
  - Terazosin 1-10 mg daily
- **Side effects:** Orthostatic hypotension, dizziness, rhinitis, abnormal ejaculation
- **Considerations:** Selective agents (tamsulosin, silodosin) have less hypotension

**5-Alpha-Reductase Inhibitors (Prostate Shrinkage):**
- **Mechanism:** Block conversion of testosterone to DHT
- **Onset:** 3-6 months for effect
- **Agents:**
  - Finasteride 5 mg daily
  - Dutasteride 0.5 mg daily
- **Effects:** Reduce prostate volume by 20-30%, decrease risk of urinary retention
- **Side effects:** Decreased libido, erectile dysfunction, gynecomastia
- **Indications:** Prostate > 30-40 grams or elevated PSA

**Combination Therapy:**
- Alpha-blocker + 5-ARI
- Superior to monotherapy for prostate > 40 grams or PSA > 1.5 ng/mL
- MTOPS and CombAT trials demonstrate long-term benefits
- Reduces risk of BPH progression

**PDE5 Inhibitors:**
- Tadalafil 5 mg daily
- Approved for BPH with or without erectile dysfunction
- Mechanism: Smooth muscle relaxation in prostate and bladder
- Helpful for men with both LUTS and ED

**Anticholinergics (for storage symptoms):**
- Oxybutynin, tolterodine, solifenacin
- For persistent urgency/frequency after adequate alpha-blockade
- Caution: May worsen retention—assess PVR first
- Beta-3 agonist (mirabegron) is alternative

## Surgical Indications

**Absolute Indications:**
- Urinary retention (inability to urinate)
- Recurrent UTIs
- Recurrent gross hematuria from BPH
- Bladder stones
- Renal insufficiency from BPH
- Bladder diverticula

**Relative Indications:**
- Inadequate symptom relief with medical therapy
- Patient preference
- Medication side effects
- Poor compliance with medications

## Surgical Options

**Transurethral Resection of Prostate (TURP):**
- Gold standard for prostate 30-80 grams
- Electrocautery removal of prostate tissue
- Hospital stay: 1-2 days
- Catheter: 1-3 days

**Simple Prostatectomy:**
- For prostate > 80-100 grams
- Open or robotic approach
- Removal of adenoma (enucleation)

**Minimally Invasive Treatments:**
- **Prostatic Urethral Lift (PUL/UroLift):** Implants compress prostate lobes
- **Water Vapor Thermal Therapy (Rezūm):** Steam ablation of prostate tissue
- **Transurethral Microwave Thermotherapy (TUMT):** Microwave energy
- **Photoselective Vaporization of Prostate (PVP):** GreenLight laser

## Complications

**Urinary Retention:**
- Acute: Sudden inability to urinate (requires catheterization)
- Chronic: PVR > 300 mL with overflow incontinence

**Bladder Changes:**
- Detrusor hypertrophy (thickened bladder muscle)
- Bladder diverticula (outpouchings)
- Detrusor overactivity (urgency, frequency)
- Detrusor underactivity (late stage—poor recovery even after treatment)

**Kidney Issues:**
- Hydronephrosis from obstruction
- Renal insufficiency`,
      keyTerms: [
        { term: 'PVR', definition: 'Post-void residual; urine remaining in bladder after urination' },
        { term: 'detrusor hypertrophy', definition: 'Thickening of bladder muscle from working against obstruction' },
        { term: 'DHT', definition: 'Dihydrotestosterone; potent androgen that stimulates prostate growth' },
        { term: 'TURP', definition: 'Transurethral resection of prostate; surgical removal of prostate tissue using a resectoscope' },
        { term: 'uroflowmetry', definition: 'Measurement of urine flow rate; low flow suggests obstruction' },
        { term: 'hydroureter', definition: 'Swelling of the ureter from backup of urine due to obstruction' },
        { term: 'hydronephrosis', definition: 'Swelling of the kidney from backup of urine due to obstruction' },
      ],
      clinicalNotes: 'Finasteride and dutasteride reduce PSA by about 50%. For men on these medications, PSA should be doubled when interpreting prostate cancer risk. Combination therapy is most effective for large prostates (>40g) or high PSA (>1.5 ng/mL).',
    },
    4: {
      level: 4,
      summary: 'Complex BPH management addresses refractory LUTS, comorbidities, post-surgical complications, and distinguishing BPH from prostate cancer, bladder dysfunction, and urethral stricture.',
      explanation: `## Differential Diagnosis of LUTS

**Other Causes Must Be Ruled Out:**

| Condition | Distinguishing Features |
|-----------|------------------------|
| Prostate cancer | Hard/nodular prostate, elevated PSA for age |
| Urethral stricture | Diminished force throughout stream, history of STD/catheter |
| Bladder cancer | Hematuria predominant, irritative voiding |
| Overactive bladder | No hesitancy/weak stream, predominantly urgency |
| Urinary retention | Distended bladder, overflow incontinence |
| Neurogenic bladder | Neurologic history, abnormal detrusor function |
| UTI | Dysuria, pyuria, positive culture |

**Evaluation Considerations:**
- Urodynamics for complex cases (prior surgery, neurologic disease)
- Cystoscopy for hematuria, prior urethral surgery, suspected stricture
- Prostate MRI if cancer suspected despite negative biopsy

## Complex Medical Management

**Refractory LUTS:**
- Review medication adherence
- Confirm diagnosis (uroflow, PVR)
- Consider anticholinergic or beta-3 agonist for storage symptoms
- PDE5 inhibitor alternative for ED/LUTS

**Comorbid Conditions:**
- **Hypertension:** Avoid alpha-blockers if possible; use other antihypertensives
- **Erectile dysfunction:** PDE5 inhibitor beneficial for both
- **Anticoagulation:** Increased bleeding risk with surgery

**BPH in Special Populations:**

**Elderly Patients:**
- Conservative management often appropriate
- Minimally invasive therapies lower risk
- Consider life expectancy and treatment goals

**Patients on Anticoagulation:**
- Prostatic urethral lift (UroLift) and Rezūm have minimal bleeding risk
- TURP requires bridging anticoagulation in some cases

**After Prostate Cancer Treatment:**
- Radiation causes stricture risk
- Radical prostatectomy patients shouldn't develop BPH (prostate removed)
- Post-radiation LUTS may benefit from alpha-blockers

## Surgical Approaches

**Transurethral Resection of Prostate (TURP):**

**Complications:**
- TURP syndrome (hyponatremia from glycine irrigation)
- Bleeding requiring transfusion
- Urinary tract infection
- Ejaculatory dysfunction (retrograde ejaculation)
- Erectile dysfunction (< 5%)
- Urinary incontinence (1-3%)
- Urethral stricture (2-4%)

**TURP Syndrome:**
- Caused by absorption of irrigation fluid
- Symptoms: nausea, confusion, visual changes, seizures, coma
- Prevention: Limit resection time, use saline irrigation
- Treatment: Stop procedure, give hypertonic saline

**Holmium Laser Enucleation of Prostate (HoLEP):**
- Suitable for very large prostates (>100 grams)
- Enucleation of entire adenoma
- Morcellation of tissue
- Less bleeding than TURP
- No TURP syndrome (saline irrigation)
- Steep learning curve

**Simple Prostatectomy:**
- Indicated for prostate > 80-100 grams
- Approaches:
  - Retropubic (open)
  - Suprapubic (open)
  - Robotic-assisted laparoscopic
- Removes adenoma en bloc
- Higher morbidity than TURP but effective for very large glands

**Minimally Invasive Surgical Therapies (MIST):**

**Prostatic Urethral Lift (UroLift):**
- Permanent implants compress prostate lobes
- Office-based procedure under local anesthesia
- Preserves sexual function
- Rapid recovery
- Limitation: Not effective for median lobe or very large prostates

**Rezūm Water Vapor Therapy:**
- Steam ablation causes cell death
- Office-based procedure
- Minimal sexual side effects
- Good for median lobe
- May need catheter for several days post-procedure

**GreenLight Laser (PVP):**
- Photoselective vaporization
- Immediate tissue removal
- Less bleeding than TURP
- No TURP syndrome
- Can treat large prostates

## Post-Treatment Issues

**Persistent LUTS after Treatment:**
- Evaluate PVR and flow rate
- Cystoscopy to assess urethra/bladder
- Urodynamics to assess bladder function
- Consider detrusor underactivity

**Recurrent Obstruction:**
- Tissue regrowth (after TURP/PVP)
- Scar tissue/stricture
- Incomplete resection

**Ejaculatory Dysfunction:**
- Retrograde ejaculation common after TURP/HoLEP
- UroLift and Rezūm preserve ejaculation

**Erectile Dysfunction:**
- Rare complication of surgery
- Treat with PDE5 inhibitors if needed

## Failed Medical Therapy

**Algorithm:**
1. Confirm adherence and adequate trial duration
2. Re-evaluate for other causes of LUTS
3. Consider combination therapy if not already tried
4. Offer surgical options
5. Consider bladder dysfunction if poor surgical outcome

## Bladder Dysfunction in BPH

**Detrusor Overactivity:**
- Irritative symptoms from obstruction
- May persist after relief of obstruction
- Treated with anticholinergics or beta-3 agonists

**Detrusor Underactivity:**
- End-stage decompensation
- Poor bladder contractility
- May require intermittent catheterization
- Poor outcomes with prostate surgery alone

**Acontractile Detrusor:**
- Bladder unable to contract
- Chronic urinary retention
- Requires clean intermittent catheterization (CIC) or indwelling catheter`,
      keyTerms: [
        { term: 'TURP syndrome', definition: 'Hyponatremia and fluid overload from absorption of irrigation fluid during TURP' },
        { term: 'retrograde ejaculation', definition: 'Semen going backward into bladder instead of out the urethra during orgasm' },
        { term: 'enucleation', definition: 'Removing the entire prostate adenoma intact; used in HoLEP and simple prostatectomy' },
        { term: 'morcellation', definition: 'Breaking up tissue into small pieces for removal through the urethra' },
        { term: 'urodynamics', definition: 'Testing of bladder function including pressure, flow, and capacity' },
        { term: 'stricture', definition: 'Narrowing of the urethra from scar tissue' },
        { term: 'median lobe', definition: 'Prostate tissue that projects into the bladder neck; can cause obstruction even with small lateral lobes' },
      ],
      clinicalNotes: 'TURP syndrome is rare with modern saline irrigation techniques but remains a concern. Men on 5-ARI need to have PSA doubled when interpreting for prostate cancer risk. Urodynamics should be considered for men with prior pelvic surgery, neurologic disease, or prior failed BPH treatment.',
    },
    5: {
      level: 5,
      summary: 'Contemporary BPH management emphasizes personalized therapy, emerging surgical technologies, prostate-artery embolization, and understanding of the relationship between BPH, metabolic syndrome, and prostate cancer risk.',
      explanation: `## Precision Medicine in BPH

**Prostate Imaging and Characterization:**

**Multiparametric MRI:**
- Identifies prostate cancer vs. BPH
- Defines prostate zonal anatomy
- Median lobe assessment
- Surgical planning assistance
- PI-RADS scoring for cancer detection

**Novel Biomarkers:**
- PCA3, SelectMDx, 4Kscore for cancer differentiation
- PHI (Prostate Health Index)
- Exosome-based biomarkers
- MicroRNA signatures

**Genetic Considerations:**
- SRD5A polymorphisms (affect 5-ARI response)
- Androgen receptor variants
- Inflammatory pathway genes
- Pharmacogenomic approaches

## Metabolic Syndrome and BPH

**Epidemiologic Link:**
- Metabolic syndrome increases BPH risk
- Components: obesity, hypertension, insulin resistance, dyslipidemia
- Possible mechanisms: chronic inflammation, altered hormone levels

**Clinical Implications:**
- Lifestyle modification as prevention/treatment
- Weight loss improves LUTS
- Exercise reduces BPH progression risk
- Dietary factors: decreased red meat, increased vegetables

**Inflammatory Hypothesis:**
- Prostatic inflammation drives BPH progression
- Cytokines promote growth
- Anti-inflammatory approaches under investigation

## Emerging Therapies

**Pharmacologic Innovation:**
- **Novel alpha-blockers:** More selective agents with fewer side effects
- **Combination 5-ARIs:** Finasteride/dutasteride combinations
- **Cyclooxygenase-2 inhibitors:** Target inflammation
- **Phosphodiesterase inhibitors:** Tadalafil, other PDE5s
- **Vitamin D receptor agonists:** Antiproliferative effects
- **Botulinum toxin:** Intraprostatic injection

**Prostate Artery Embolization (PAE):**
- Minimally invasive alternative to surgery
- Embolizes prostate arterial supply
- Decreases prostate volume by 30-40%
- Advantages: No general anesthesia, preserves sexual function
- Limitations: Requires skilled interventional radiologist
- Evidence: Good intermediate-term outcomes
- Ideal for high surgical risk patients

**Histotripsy:**
- Focused ultrasound to liquefy prostate tissue
- Non-thermal ablation
- Early clinical trials

**Aquablation Therapy:**
- Robot-assisted water jet ablation
- Image-guided resection
- Handles large prostates and median lobes
- Less sexual dysfunction than TURP
- WOLF study data

**Temporary Implantable Nitinol Device (TIND):**
- Nitinol device compresses prostate tissue
- Removed after 5-7 days
- Preserves ejaculation

## Surgical Innovation

**Robotic-Assisted Simple Prostatectomy:**
- Enucleation for very large prostates
- Less blood loss than open
- Faster recovery
- Growing adoption

**Laser Advances:**
- **Thulium laser:** Precise vaporization
- **Diode laser:** Efficient tissue ablation
- **GreenLight 180W XPS:** High-power system

**Laser Enucleation Techniques:**
- **HoLEP:** Gold standard for large glands
- **ThuLEP:** Thulium laser enucleation
- **DiLEP:** Diode laser enucleation
- Learning curve but excellent outcomes

## Understanding BPH and Prostate Cancer Relationship

**Controversies:**
- Does BPH increase prostate cancer risk?
- Shared risk factors (age, hormones)
- Inflammation as common pathway
- 5-ARIs reduce prostate cancer risk (PCPT trial)
- 5-ARIs may increase high-grade cancer detection (bias?)

**Active Surveillance with BPH:**
- BPH symptoms don't exclude active surveillance
- TURP does not compromise cancer treatment
- MRI fusion biopsy can target cancer while avoiding BPH areas

## Outcomes and Quality

**Patient-Reported Outcome Measures (PROMs):**
- IPSS change score
- Quality of life (QoL) improvement
- Sexual health inventory (SHIM)
- Pad use for incontinence

**Quality Metrics:**
- Readmission rates
- Reoperation rates
- Catheterization duration
- Symptom improvement durability
- Complication rates

## Future Directions

**Regenerative Medicine:**
- Stem cell therapies for prostate regeneration
- Tissue engineering approaches
- Targeting inflammatory pathways

**Personalized Treatment Selection:**
- MRI-based prostate volume and zonal anatomy
- Genetic profiling for treatment response
- Biomarker-guided therapy
- Artificial intelligence for surgical planning

**Prevention Strategies:**
- Lifestyle modification
- Dietary interventions
- Chemoprevention studies
- Treatment of metabolic syndrome

**Telemedicine and Remote Monitoring:**
- Virtual IPSS assessment
- Home uroflowmetry
- Remote PVR monitoring
- Digital therapeutic apps

**Guideline Updates:**
- AUA Guidelines continually updated
- EAU Guidelines
- International consensus on surgical standards
- Value-based care approaches`,
      keyTerms: [
        { term: 'PAE', definition: 'Prostate artery embolization; minimally invasive procedure to shrink prostate by blocking its blood supply' },
        { term: 'PI-RADS', definition: 'Prostate Imaging Reporting and Data System; standardized scoring system for prostate MRI' },
        { term: 'PHI', definition: 'Prostate Health Index; blood test combining total PSA, free PSA, and [-2]proPSA' },
        { term: 'histotripsy', definition: 'Focused ultrasound technique that liquefies tissue without heat' },
        { term: 'aquablation', definition: 'Water jet ablation of prostate tissue using robotic image guidance' },
        { term: 'TIND', definition: 'Temporary implantable nitinol device; temporary mechanical compression of prostate' },
        { term: 'WOLF study', definition: 'Waterjet Ablation Therapy for the Prostate; clinical trial of aquablation' },
      ],
      clinicalNotes: 'Prostate artery embolization is an emerging option for high surgical risk patients or those wishing to avoid prostate surgery and preserve sexual function. MRI is increasingly used to characterize prostate anatomy and exclude cancer before BPH treatment. The relationship between 5-ARI use and high-grade prostate cancer remains controversial but may reflect detection bias.',
    },
  },

  media: [],
  citations: [
    { id: 'aua-bph-2022', type: 'article', title: 'AUA Guideline on Management of Benign Prostatic Hyperplasia', source: 'Journal of Urology', authors: ['McVary KT', 'Roehrborn CG'] },
    { id: 'eau-bph-2023', type: 'article', title: 'EAU Guidelines on Management of Non-Neurogenic Male LUTS', source: 'European Association of Urology' },
  ],
  crossReferences: [
    { targetId: 'condition-prostate-cancer', targetType: 'condition', relationship: 'related', label: 'Prostate Cancer' },
    { targetId: 'condition-urinary-incontinence', targetType: 'condition', relationship: 'related', label: 'Urinary Incontinence' },
    { targetId: 'condition-uti', targetType: 'condition', relationship: 'related', label: 'Urinary Tract Infection' },
  ],
  tags: { systems: ['urinary', 'reproductive'], topics: ['urology', 'men\'s health'], keywords: ['BPH', 'prostate enlargement', 'LUTS', 'nocturia', 'hesitancy', 'retention'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['surgery', 'family medicine'] } },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default bph;
