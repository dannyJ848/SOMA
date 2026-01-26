/**
 * Benign Prostatic Hyperplasia (BPH) - Comprehensive Educational Content
 *
 * Covers epidemiology, pathophysiology, clinical presentation,
 * evaluation, and management of BPH and lower urinary tract symptoms.
 */

import { EducationalContent } from '../../types';

export const benignProstaticHyperplasia: EducationalContent = {
  id: 'condition-benign-prostatic-hyperplasia',
  type: 'condition',
  name: 'Benign Prostatic Hyperplasia',
  alternateNames: ['BPH', 'Enlarged Prostate', 'Benign Prostatic Enlargement', 'Prostatic Hypertrophy', 'LUTS/BPH'],

  levels: {
    1: {
      level: 1,
      summary: 'Benign prostatic hyperplasia (BPH) is when the prostate gland grows larger as men age, which can cause difficulty urinating.',
      explanation: `The prostate is a small gland (about the size of a walnut) that sits below the bladder in men. It surrounds the urethra, the tube that carries urine from the bladder out of the body.

**What is BPH?**
As men get older, the prostate often grows larger. This is called benign prostatic hyperplasia (BPH):
- "Benign" means it is NOT cancer
- "Hyperplasia" means the cells are multiplying and the gland is growing

**Why is This a Problem?**
Because the prostate surrounds the urethra, when it grows, it can squeeze the urethra like pinching a straw. This makes it harder for urine to flow out.

**Common Symptoms:**
- Needing to urinate frequently, especially at night
- Difficulty starting to urinate
- Weak urine stream
- Feeling like you cannot fully empty your bladder
- Dribbling at the end of urination
- Suddenly needing to urinate urgently

**Who Gets BPH?**
- Very common in older men
- About 50% of men over 50 have some BPH
- About 90% of men over 80 have BPH
- Not all men with BPH have bothersome symptoms

**Treatment Options:**
- **Watchful waiting**: If symptoms are mild
- **Medications**: Pills that can shrink the prostate or relax the muscles
- **Surgery**: For severe symptoms that do not respond to medication

**Important Note:**
BPH is NOT prostate cancer and does NOT increase your risk of prostate cancer. However, you can have both conditions at the same time, so regular check-ups are still important.`,
      keyTerms: [
        { term: 'prostate', definition: 'A walnut-sized gland in men that sits below the bladder and produces fluid for semen' },
        { term: 'BPH', definition: 'Benign prostatic hyperplasia - non-cancerous growth of the prostate gland' },
        { term: 'urethra', definition: 'The tube that carries urine from the bladder out of the body' },
        { term: 'benign', definition: 'Not cancer; not dangerous to health in itself' },
      ],
      analogies: [
        'Imagine your prostate is like a donut surrounding a drinking straw (the urethra). When the donut grows bigger, it squeezes the straw, making it harder for liquid to flow through.',
        'BPH is like a traffic bottleneck - the road (urethra) gets narrower, so cars (urine) cannot flow through as easily.',
      ],
      examples: [
        'A 65-year-old man wakes up 3-4 times every night to urinate and notices his urine stream is weaker than it used to be - these are typical BPH symptoms.',
        'A man stands at the toilet for a long time before urine starts flowing - this "hesitancy" is another common BPH symptom.',
      ],
    },
    2: {
      level: 2,
      summary: 'BPH is a hormonally-driven proliferation of prostatic stromal and epithelial cells causing lower urinary tract symptoms (LUTS) through both static obstruction and dynamic smooth muscle contraction.',
      explanation: `## Epidemiology
- Histologic BPH present in 50% of men by age 50, 90% by age 80
- Symptomatic BPH in 25% of men in their 50s, 50% by their 80s
- Risk factors: Age, family history, obesity, metabolic syndrome

## Prostate Anatomy

**Zones of the Prostate:**
- **Peripheral zone** (70%): Where most cancers arise
- **Central zone** (25%): Surrounds ejaculatory ducts
- **Transition zone** (5%): Surrounds urethra - where BPH develops
- **Anterior fibromuscular stroma**: No glandular tissue

BPH specifically develops in the transition zone, which is why it causes urinary symptoms.

## Pathophysiology

**Two Components of Obstruction:**

1. **Static component**: Physical enlargement compresses urethra
2. **Dynamic component**: Smooth muscle contraction (alpha-1 receptors)

**Hormonal Factors:**
- Testosterone converted to DHT (dihydrotestosterone) by 5-alpha reductase
- DHT is the primary hormone driving prostatic growth
- Both stromal and epithelial cells proliferate

## Clinical Presentation: LUTS

**Storage Symptoms (Irritative):**
- Frequency (urinating more than every 2 hours)
- Urgency (sudden strong need to urinate)
- Nocturia (waking at night to urinate)
- Urge incontinence

**Voiding Symptoms (Obstructive):**
- Hesitancy (difficulty starting stream)
- Weak stream
- Straining to urinate
- Intermittency (stream starts and stops)
- Terminal dribbling
- Incomplete emptying

**Complications:**
- Urinary retention (cannot urinate at all)
- Urinary tract infections
- Bladder stones
- Kidney damage (hydronephrosis) - rare with modern management

## Evaluation

**History:**
- IPSS (International Prostate Symptom Score): 7-question validated questionnaire
- Score 0-7: Mild | 8-19: Moderate | 20-35: Severe

**Physical Exam:**
- Digital rectal exam (DRE): Size, texture, nodules
- BPH: Enlarged, smooth, firm, rubbery prostate
- Cancer: Hard, nodular, asymmetric

**Laboratory:**
- Urinalysis (rule out infection, hematuria)
- PSA (prostate-specific antigen): May be elevated with BPH
- Creatinine if concern for urinary retention

**Optional Studies:**
- Post-void residual (PVR): Ultrasound measurement after urination
- Uroflowmetry: Measures urine flow rate
- Cystoscopy: Visualize obstruction directly
- Urodynamics: Complex cases

## Management

**Based on Symptom Severity:**

| IPSS Score | Symptoms | Management |
|------------|----------|------------|
| 0-7 | Mild | Watchful waiting, lifestyle modifications |
| 8-19 | Moderate | Medical therapy |
| 20-35 | Severe | Medical therapy; consider surgery |

**Medical Therapy:**

1. **Alpha-blockers** (first-line for symptoms)
   - Tamsulosin, alfuzosin, silodosin
   - Relax smooth muscle in prostate and bladder neck
   - Work within days
   - Side effects: Dizziness, orthostatic hypotension, ejaculatory dysfunction

2. **5-Alpha Reductase Inhibitors** (for large prostates)
   - Finasteride, dutasteride
   - Block conversion of testosterone to DHT
   - Shrink prostate by 20-30% over 6-12 months
   - Reduce PSA by 50% (adjust when screening for cancer)
   - Side effects: Sexual dysfunction, gynecomastia

3. **Combination therapy**: Alpha-blocker + 5-ARI for larger prostates

**Surgical Options:**
- TURP (transurethral resection of prostate): Gold standard
- Laser procedures (HoLEP, PVP)
- Prostatic urethral lift (UroLift)
- Water vapor thermal therapy (Rezum)`,
      keyTerms: [
        { term: 'LUTS', definition: 'Lower urinary tract symptoms - the collective term for urinary symptoms from BPH', pronunciation: 'luts' },
        { term: 'DHT', definition: 'Dihydrotestosterone - the active hormone that causes prostate growth' },
        { term: 'IPSS', definition: 'International Prostate Symptom Score - a 7-question survey measuring symptom severity' },
        { term: 'post-void residual', definition: 'The amount of urine left in the bladder after urinating' },
        { term: 'alpha-blocker', definition: 'Medication that relaxes smooth muscle in the prostate to improve urine flow' },
      ],
      analogies: [
        'Alpha-blockers are like muscle relaxants for the prostate - they help the "donut" relax so urine can flow better.',
        '5-alpha reductase inhibitors are like turning down the thermostat on prostate growth - they slowly shrink the gland over months.',
      ],
    },
    3: {
      level: 3,
      summary: 'BPH represents a complex interplay of hormonal signaling, stromal-epithelial interactions, and inflammatory processes, with management guided by symptom severity, prostate volume, and risk of progression.',
      explanation: `## Molecular Pathophysiology

**Hormonal Regulation:**
- Testosterone (T) → 5α-reductase → Dihydrotestosterone (DHT)
- Two 5α-reductase isoenzymes:
  - Type 1: Skin, liver (inhibited by dutasteride)
  - Type 2: Prostate (inhibited by finasteride and dutasteride)
- DHT binds androgen receptor (AR) → nuclear translocation → gene transcription
- Estrogen may also play a role (estrogen:androgen ratio increases with age)

**Stromal-Epithelial Interactions:**
- Stromal cells produce growth factors (FGF, IGF, TGF-β)
- Paracrine signaling stimulates epithelial proliferation
- Prostatic inflammation contributes to tissue remodeling

**Role of Inflammation:**
- Chronic prostatic inflammation present in most BPH specimens
- IL-6, IL-8, and other cytokines elevated
- Inflammatory infiltrates correlate with symptom severity
- May explain partial response to NSAIDs in some patients

## Detailed Pharmacology

**Alpha-1 Adrenergic Blockers:**
| Drug | Selectivity | Half-life | Notes |
|------|-------------|-----------|-------|
| Tamsulosin | α1A selective | 10-13 hr | Most prostate-selective; floppy iris syndrome |
| Alfuzosin | α1 non-selective | 10 hr | Extended-release; less hypotension |
| Silodosin | α1A highly selective | 13 hr | Most uroselective; high ejaculatory dysfunction |
| Terazosin | α1 non-selective | 12 hr | Requires dose titration; hypotension |
| Doxazosin | α1 non-selective | 22 hr | Requires dose titration; hypotension |

- α1A: Predominant subtype in prostate and bladder neck
- α1B: Predominant in vasculature (hypotension side effect)

**5-Alpha Reductase Inhibitors:**
| Drug | Isoenzyme Inhibition | Notes |
|------|---------------------|-------|
| Finasteride | Type 2 only | 70% serum DHT reduction |
| Dutasteride | Type 1 and 2 | 90% serum DHT reduction |

- Reduce prostate volume 20-30% over 6-12 months
- Decrease PSA by approximately 50% (must double measured PSA)
- Most effective for prostates >40g
- Reduce risk of acute urinary retention and need for surgery

**Combination Therapy:**
- MTOPS trial: Combination (finasteride + doxazosin) superior to monotherapy for progression
- CombAT trial: Combination more effective for symptoms if prostate >30mL
- Consider for prostates >40g or PSA >1.5 ng/mL

**Other Medical Options:**
- PDE-5 inhibitors (tadalafil 5mg daily): FDA-approved for BPH; mechanism unclear
- Anticholinergics: Caution with high PVR; can worsen retention
- Beta-3 agonists (mirabegron): For storage symptoms

## Surgical Interventions

**Transurethral Resection of Prostate (TURP):**
- Gold standard for 30-80mL prostates
- Monopolar vs bipolar (bipolar safer, uses saline irrigation)
- Complications: TUR syndrome (hyponatremia with monopolar), bleeding, retrograde ejaculation (75%), incontinence (1-2%), stricture

**Laser Procedures:**
1. **HoLEP** (Holmium Laser Enucleation):
   - Enucleates entire adenoma
   - Size-independent; preferred for >80g
   - Steep learning curve
   - Durable outcomes matching open prostatectomy

2. **PVP** (Photoselective Vaporization):
   - GreenLight laser (532nm)
   - Vaporizes tissue
   - Less bleeding; safe on anticoagulation
   - May require retreatment

**Minimally Invasive Therapies:**
1. **Prostatic Urethral Lift (UroLift)**:
   - Mechanical retraction of lateral lobes
   - Preserves ejaculatory function
   - Best for 30-80g without middle lobe
   - Less durable than resection

2. **Water Vapor Thermal Therapy (Rezum)**:
   - Steam injection causing tissue necrosis
   - Office-based procedure
   - Preserves ejaculatory function
   - Effective for middle lobe

3. **Prostatic Artery Embolization (PAE)**:
   - Interventional radiology procedure
   - Selective embolization of prostatic arteries
   - Investigational; variable efficacy

**Open/Robotic Simple Prostatectomy:**
- For very large prostates (>80-100g)
- Enucleation of adenoma, leaving capsule
- Robotic approach increasingly common
- Highest durability for large glands

## Progression Risk Assessment

**Risk Factors for Progression:**
- Prostate volume >30mL
- PSA >1.5 ng/mL
- Age >62 years
- Moderate-to-severe symptoms
- Reduced maximum flow rate (<10 mL/s)
- Post-void residual >100mL

**Indications for Surgical Intervention:**
- Refractory urinary retention
- Recurrent UTIs due to BPH
- Recurrent gross hematuria
- Bladder stones
- Renal insufficiency from obstruction
- Large bladder diverticula`,
      keyTerms: [
        { term: '5-alpha reductase', definition: 'Enzyme converting testosterone to the more potent dihydrotestosterone (DHT)' },
        { term: 'TURP', definition: 'Transurethral resection of prostate - endoscopic surgical removal of obstructing tissue', pronunciation: 'turp' },
        { term: 'HoLEP', definition: 'Holmium laser enucleation of prostate - laser-assisted complete adenoma removal' },
        { term: 'TUR syndrome', definition: 'Dilutional hyponatremia from absorption of hypotonic irrigation during monopolar TURP' },
        { term: 'floppy iris syndrome', definition: 'Intraoperative iris billowing during cataract surgery associated with alpha-blocker use' },
      ],
      clinicalNotes: 'Counsel patients on tamsulosin before cataract surgery - floppy iris syndrome risk. 5-ARIs reduce PSA by 50% - double measured value when screening for cancer. Combination therapy most beneficial for prostates >40g. Refractory retention, recurrent UTI, hematuria, bladder stones are surgical indications.',
    },
    4: {
      level: 4,
      summary: 'BPH pathogenesis involves complex androgen-estrogen interactions, stromal-epithelial growth factor signaling, and chronic inflammation, with treatment selection based on symptom phenotype, prostate anatomy, sexual function priorities, and comorbidity profile.',
      explanation: `## Advanced Pathophysiology

**Molecular Mechanisms:**

1. **Androgen Signaling:**
   - DHT has 5× higher affinity for AR than testosterone
   - AR polymorphisms (CAG repeat length) may influence BPH risk
   - Intraprostatic DHT levels do not correlate perfectly with serum levels
   - Paracrine DHT signaling: Stromal cells produce DHT, affecting epithelial cells

2. **Growth Factor Networks:**
   - FGF-2, FGF-7 (KGF): Stromal-derived, stimulate epithelial growth
   - IGF-1: Mitogenic for both stromal and epithelial cells
   - TGF-β: Complex roles; may promote stromal proliferation
   - VEGF: Promotes angiogenesis in BPH tissue

3. **Inflammatory Pathways:**
   - T-cell infiltrates (CD4+, CD8+) common
   - IL-6, IL-8, IL-15 elevated
   - NF-κB activation
   - COX-2 overexpression
   - Chronic inflammation → tissue remodeling → nodule formation

4. **Stem Cell Hypothesis:**
   - BPH may arise from dysregulated prostatic stem cells
   - Stem cell markers (CD133, ABCG2) found in BPH tissue
   - May explain why BPH can recur after incomplete resection

**Estrogen's Role:**
- Estrogen receptors (ERα, ERβ) expressed in prostate
- Age-related increase in estrogen:testosterone ratio
- Estrogens may act synergistically with androgens
- Aromatase inhibitors under investigation

## Urodynamic Assessment

**Uroflowmetry:**
- Qmax (maximum flow rate): Normal >15 mL/s; obstructed <10 mL/s
- Voided volume should be >150mL for valid study
- Flow pattern: Plateau pattern suggests obstruction

**Pressure-Flow Studies:**
- Differentiates obstruction from detrusor underactivity
- Bladder outlet obstruction index (BOOI) = Pdet@Qmax - 2(Qmax)
- BOOI >40 = obstructed; <20 = unobstructed
- Detrusor contractility index (DCI) assesses muscle strength

**Indications for Urodynamics:**
- Suspected neurogenic bladder
- Prior bladder/prostate surgery
- Symptoms disproportionate to exam findings
- Considering invasive therapy in patient with comorbidities

## Phenotype-Based Treatment Selection

**Storage vs Voiding Symptom Predominance:**
- Voiding predominant: Alpha-blocker first-line
- Storage predominant: Consider adding anticholinergic or beta-3 agonist
- Mixed: Combination approach

**Sexual Function Considerations:**

| Treatment | Erectile Function | Ejaculatory Function |
|-----------|-------------------|---------------------|
| Alpha-blockers | Preserved | Reduced (silodosin > tamsulosin) |
| 5-ARIs | Reduced (1-2%) | Reduced volume |
| TURP | Usually preserved | Retrograde ejaculation (75%) |
| HoLEP | Usually preserved | Retrograde ejaculation (75%) |
| UroLift | Preserved | Preserved |
| Rezum | Preserved | Preserved |

**Anticoagulation Considerations:**
- GreenLight laser: Safest for patients on anticoagulation
- TURP: May need to hold anticoagulation
- HoLEP: Intermediate bleeding risk

## Emerging Therapies

**Aquablation (AquaBeam):**
- Robotic waterjet ablation with real-time ultrasound
- Automated, reproducible tissue removal
- Preserves ejaculatory function better than TURP
- FDA-approved for prostates 30-150g

**Temporary Implantable Nitinol Device (iTind):**
- Reshapes prostatic urethra over 5-7 days
- Removed after remodeling complete
- Preserves ejaculatory function
- No thermal tissue destruction

**Convective Water Vapor (Rezum) Extensions:**
- Middle lobe treatment
- Larger glands (up to 80g)
- Long-term durability data emerging

**Novel Pharmacologic Targets:**
- NX-1207: Intraprostatic injection causing apoptosis (Phase III trials)
- GNRH antagonists: Rapid testosterone suppression
- Selective ER modulators
- Intraprostatic botulinum toxin (mixed results)

## Chronic Urinary Retention Management

**High-Pressure vs Low-Pressure Retention:**
- High-pressure (elevated PdetQmax): Risk of upper tract deterioration
- Low-pressure (detrusor failure): May not benefit from outlet surgery

**Management of Retention:**
- Acute retention: Catheterization, trial of voiding after 2-7 days
- Chronic retention: Clean intermittent catheterization or indwelling catheter
- Surgery after stabilization of renal function
- Post-obstructive diuresis: Monitor closely, replace fluids as needed

**Trial Without Catheter (TWOC):**
- Alpha-blocker for 2-7 days before catheter removal
- 60-70% success if first episode, normal creatinine
- PVR >300mL at re-retention predicts failure
- Repeat TWOC can be attempted

## Complications of Untreated BPH

**Bladder Changes:**
- Detrusor hypertrophy initially
- Trabeculation
- Diverticula formation
- Eventually detrusor decompensation/failure

**Upper Tract:**
- Hydronephrosis from chronic retention
- Renal insufficiency (obstructive uropathy)
- Post-obstructive ATN after decompression

**Other:**
- Recurrent UTIs
- Bladder stones (stasis + infection)
- Overflow incontinence
- Gross hematuria from prostatic varices`,
      keyTerms: [
        { term: 'BOOI', definition: 'Bladder outlet obstruction index - urodynamic parameter quantifying obstruction severity' },
        { term: 'detrusor underactivity', definition: 'Weak bladder muscle contraction mimicking obstruction; poor surgical outcomes' },
        { term: 'Aquablation', definition: 'Robotic waterjet prostate ablation using ultrasound guidance' },
        { term: 'post-obstructive diuresis', definition: 'Excessive urine output after relieving urinary retention; requires fluid monitoring' },
        { term: 'intraprostatic injection', definition: 'Direct injection of agents into prostate tissue; emerging treatment approach' },
      ],
      clinicalNotes: 'Urodynamics indicated when neurogenic bladder suspected or prior surgery. Distinguish high-pressure (surgical) from low-pressure (detrusor failure) retention. Post-obstructive diuresis can cause dangerous dehydration - monitor urine output and replace appropriately. UroLift and Rezum preserve ejaculatory function better than TURP/HoLEP.',
    },
    5: {
      level: 5,
      summary: 'Contemporary BPH management integrates precision phenotyping, patient-centered outcome measures, and personalized treatment selection based on anatomic features, symptom profile, quality of life priorities, and an expanding armamentarium of minimally invasive surgical technologies.',
      explanation: `## Precision Phenotyping

**Imaging-Based Assessment:**
1. **MRI Prostate:**
   - Transition zone volume measurement
   - Middle lobe configuration
   - Intravesical prostatic protrusion (IPP)
   - Distinguish BPH nodules from cancer
   - Zonal anatomy for procedure planning

2. **Transrectal Ultrasound (TRUS):**
   - Volume calculation: π/6 × height × width × length
   - Prostatic urethral angle (PUA)
   - Intravesical prostatic protrusion measurement

**Intravesical Prostatic Protrusion (IPP):**
- Grade 1: <5mm
- Grade 2: 5-10mm
- Grade 3: >10mm
- Higher IPP correlates with failure of medical therapy
- Predicts need for surgical intervention

**Prostatic Urethral Angle:**
- Angle >35° associated with obstruction
- May predict response to alpha-blockers
- Emerging parameter in treatment selection

## Advanced Treatment Selection

**Middle Lobe Assessment:**
- Middle lobe enlargement affects procedure selection
- UroLift contraindicated for obstructing middle lobe
- Rezum can treat middle lobe
- HoLEP, TURP, Aquablation effective regardless

**Algorithm by Prostate Size:**
| Volume | First-line | Alternatives |
|--------|------------|--------------|
| <30g | Medical therapy, UroLift, Rezum | TURP |
| 30-80g | Medical → TURP, HoLEP, Aquablation | UroLift (no middle lobe), Rezum |
| 80-150g | HoLEP, Aquablation, Simple prostatectomy | TURP (staged) |
| >150g | Robotic simple prostatectomy, HoLEP | - |

## Outcomes Research

**Core Outcome Sets:**
- IPSS (symptoms)
- IPSS QoL question
- Qmax (objective flow)
- PVR
- Sexual function (IIEF, MSHQ-EjD)
- Patient satisfaction
- Retreatment rates

**Comparative Effectiveness:**
1. **GOLIATH Trial**: HoLEP vs TURP
   - Similar IPSS improvement
   - HoLEP: More tissue removed, longer procedure, shorter catheter time
   - HoLEP durable at long-term follow-up

2. **WATER Trial**: Aquablation vs TURP
   - Non-inferior symptom improvement
   - Superior ejaculatory function preservation
   - Similar safety profile

3. **BPH6 Trial**: Rezum vs Sham
   - Significant IPSS improvement
   - Preserved sexual function
   - Durable at 4-year follow-up

**Durability/Retreatment Rates:**
| Procedure | 5-Year Retreatment Rate |
|-----------|------------------------|
| TURP | 5-8% |
| HoLEP | 2-5% |
| GreenLight | 10-15% |
| UroLift | 13-20% |
| Rezum | 4-6% (emerging data) |

## Special Populations

**Neurological Disease:**
- Parkinson's, multiple sclerosis: Detrusor overactivity common
- Spinal cord injury: Detrusor-sphincter dyssynergia
- Urodynamics essential before intervention
- May require combination with anticholinergics or botox

**Diabetes Mellitus:**
- Higher risk of detrusor underactivity
- Autonomic neuropathy affects bladder function
- May have poor outcomes with outlet surgery alone

**Cardiac Patients:**
- Alpha-blockers: Monitor for orthostatic hypotension
- Avoid terazosin/doxazosin with PDE-5 inhibitors
- GreenLight preferred if on anticoagulation

**Post-Radiation:**
- Higher risk of incontinence after TURP
- Consider less invasive approaches
- HoLEP may have increased complications

## Biomarkers and Future Directions

**Serum Biomarkers:**
- PSA: Correlates with volume; free PSA, PSA density
- Prostate Health Index (PHI): Distinguishes BPH from cancer
- 4Kscore: Similar role

**Urinary Biomarkers (Investigational):**
- PCA3: Prostate-specific; elevated in BPH
- TMPRSS2:ERG: Cancer-specific
- microRNAs: Emerging field

**Genetic Risk Assessment:**
- HoxB13 G84E: Prostate cancer risk, not BPH-specific
- AR CAG repeat polymorphisms
- Genome-wide association studies ongoing

**Novel Therapeutic Targets:**
1. **FGF receptor inhibitors**: Target growth factor signaling
2. **Anti-inflammatory agents**: Target chronic inflammation
3. **Stem cell therapies**: Regenerative approaches
4. **Gene therapy**: Modify androgen signaling
5. **Immunotherapy**: Emerging concept

## Quality Improvement Metrics

**AUA Quality Indicators:**
1. IPSS documented at initial evaluation
2. DRE performed
3. Urinalysis obtained
4. PSA discussed/offered
5. Treatment options discussed including watchful waiting
6. Voiding diary for storage symptoms
7. Post-void residual if retention suspected

**Shared Decision-Making:**
- Patient Decision Aids for BPH
- Incorporate sexual function priorities
- Discuss retreatment risks with MISTs
- Balance symptom improvement vs procedural risk

## Global Perspective

**Resource-Limited Settings:**
- TURP remains gold standard (established, cost-effective)
- Monopolar equipment widely available
- Open prostatectomy for very large glands
- Medical therapy when surgery unavailable

**Healthcare Economics:**
- MISTs: Higher upfront cost, potential for retreatment
- HoLEP: Capital equipment cost, training investment
- Long-term cost-effectiveness analyses favor durable procedures
- Value-based care models evolving`,
      keyTerms: [
        { term: 'intravesical prostatic protrusion (IPP)', definition: 'Degree to which median lobe protrudes into bladder; predicts medical therapy failure' },
        { term: 'MIST', definition: 'Minimally invasive surgical therapy - office-based procedures like UroLift, Rezum' },
        { term: 'prostatic urethral angle', definition: 'MRI-measured angle predicting obstruction and alpha-blocker response' },
        { term: 'BPH6', definition: 'Core symptom domains for BPH trials: symptoms, QoL, Qmax, sexual function, continence, safety' },
        { term: 'shared decision-making', definition: 'Collaborative process incorporating patient values and preferences into treatment selection' },
      ],
      clinicalNotes: `**Board-Relevant Clinical Pearls:**
- IPP >10mm predicts medical therapy failure
- Middle lobe obstruction: UroLift contraindicated; Rezum, TURP, HoLEP effective
- 5-ARIs reduce PSA by 50% - double measured value when screening for cancer
- Post-radiation patients at higher incontinence risk after TURP
- HoLEP has lowest long-term retreatment rate regardless of gland size
- Aquablation preserves ejaculatory function better than TURP
- Urodynamics indicated before surgery if neurogenic bladder suspected
- GreenLight (PVP) preferred for patients on anticoagulation`,
    },
  },

  media: [
    {
      id: 'prostate-zones-anatomy',
      type: 'diagram',
      filename: 'prostate-zones-anatomy.svg',
      title: 'Prostate Zonal Anatomy',
      description: 'Peripheral, central, and transition zones with relationship to BPH',
    },
    {
      id: 'bph-obstruction-mechanism',
      type: 'diagram',
      filename: 'bph-obstruction-mechanism.svg',
      title: 'BPH Obstruction Mechanism',
      description: 'Static and dynamic components of prostatic obstruction',
    },
    {
      id: 'bph-treatment-algorithm',
      type: 'diagram',
      filename: 'bph-treatment-algorithm.svg',
      title: 'BPH Treatment Algorithm',
      description: 'Management pathway based on symptom severity and prostate size',
    },
  ],

  citations: [
    {
      id: 'aua-bph-guidelines',
      type: 'article',
      title: 'Surgical Management of Lower Urinary Tract Symptoms Attributed to Benign Prostatic Hyperplasia: AUA Guideline',
      authors: ['Foster HE', 'Barry MJ', 'Dahm P', 'et al.'],
      source: 'Journal of Urology',
      chapter: '200(3):612-619',
      url: 'https://doi.org/10.1016/j.juro.2018.05.048',
    },
    {
      id: 'campbell-walsh-bph',
      type: 'textbook',
      title: 'Benign Prostatic Hyperplasia: Etiology, Pathophysiology, Epidemiology, and Natural History',
      source: 'Campbell-Walsh-Wein Urology',
      chapter: '145-148',
      license: 'Elsevier',
    },
    {
      id: 'mtops-trial',
      type: 'article',
      title: 'The Long-Term Effect of Doxazosin, Finasteride, and Combination Therapy on the Clinical Progression of Benign Prostatic Hyperplasia',
      authors: ['McConnell JD', 'Roehrborn CG', 'Bautista OM', 'et al.'],
      source: 'New England Journal of Medicine',
      chapter: '349(25):2387-2398',
    },
  ],

  crossReferences: [
    { targetId: 'structure-urinary-tract-anatomy', targetType: 'structure', relationship: 'related', label: 'Urinary Tract Anatomy' },
    { targetId: 'concept-prostate-cancer-screening', targetType: 'topic', relationship: 'related', label: 'Prostate Cancer Screening' },
    { targetId: 'condition-urinary-tract-infections', targetType: 'condition', relationship: 'related', label: 'UTI' },
    { targetId: 'process-urological-procedures', targetType: 'topic', relationship: 'child', label: 'Urological Procedures' },
  ],

  tags: {
    systems: ['urinary', 'reproductive'],
    topics: ['urology', 'mens-health', 'surgery'],
    keywords: ['BPH', 'prostate', 'LUTS', 'alpha-blocker', 'TURP', 'finasteride'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'medicine', 'family-medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default benignProstaticHyperplasia;
