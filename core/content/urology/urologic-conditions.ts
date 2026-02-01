/**
 * Comprehensive Urologic Conditions - Educational Content
 *
 * Covers BPH, kidney stones, UTI, prostate cancer, and bladder cancer
 * with all 5 complexity levels from patient-friendly to expert-level.
 */

import { EducationalContent } from '../types';

// ─────────────────────────────────────────────
// BPH (Benign Prostatic Hyperplasia)
// ─────────────────────────────────────────────

export const bphComprehensive: EducationalContent = {
  id: 'urologic-condition-bph',
  type: 'condition',
  name: 'Benign Prostatic Hyperplasia (BPH)',
  nameEs: 'Hiperplasia Prostática Benigna (HPB)',
  alternateNames: ['BPH', 'Enlarged Prostate', 'Prostate Enlargement'],

  levels: {
    1: {
      level: 1,
      summary: 'Problems with your waterworks: The prostate is a small gland in men that can grow bigger with age, making it harder to pee.',
      explanation: `**What is BPH?**
The prostate is a walnut-sized gland that sits just below the bladder in men. The tube that carries urine (urethra) runs right through the middle of it. As men get older, the prostate slowly grows bigger. This is NOT cancer.

**Why Does It Matter?**
When the prostate grows, it squeezes the urethra like a hand squeezing a garden hose. This makes it harder for urine to flow out.

**Common Signs:**
- Weak or slow urine stream
- Getting up at night to pee (sometimes several times)
- Feeling like your bladder is not fully empty
- Having trouble starting to pee
- Dribbling after you finish

**Who Gets It?**
- Very common in men over 50
- About half of men in their 60s have some symptoms
- By age 80, roughly 90% of men are affected

**What Can Be Done?**
- Medicines that help relax the prostate or shrink it
- Lifestyle changes like limiting drinks before bedtime
- Procedures or surgery for severe cases`,
      keyTerms: [
        { term: 'prostate', definition: 'A small gland in men located below the bladder that helps make fluid for semen' },
        { term: 'urethra', definition: 'The tube that carries urine from the bladder out of the body' },
        { term: 'BPH', definition: 'Benign prostatic hyperplasia — a non-cancerous enlargement of the prostate gland' },
      ],
      analogies: [
        'Think of the prostate like a donut around a straw. As the donut gets thicker with age, the hole in the middle gets smaller, making it harder for liquid to pass through.',
      ],
      examples: [
        'A 65-year-old man notices he gets up 3 times a night to urinate and his stream is weaker than it used to be — these are classic BPH symptoms.',
      ],
      patientCounselingPoints: [
        'BPH is very common and is NOT cancer.',
        'Simple lifestyle changes can help — limit caffeine and alcohol, especially before bed.',
        'If symptoms bother you, talk to your doctor about medications that can help.',
      ],
    },
    2: {
      level: 2,
      summary: 'BPH causes lower urinary tract symptoms (LUTS) through static and dynamic obstruction. The IPSS score helps quantify severity, guiding watchful waiting, medical therapy, or surgical referral.',
      explanation: `## Pathophysiology Overview

**Static Component:**
- Stromal and glandular hyperplasia in the transitional zone
- Physical compression of the prostatic urethra

**Dynamic Component:**
- Smooth muscle contraction mediated by alpha-1 adrenergic receptors
- Prostatic capsule tension contributing to obstruction

## Lower Urinary Tract Symptoms (LUTS)

**Storage (Irritative) Symptoms:**
- Frequency, urgency, nocturia, urge incontinence

**Voiding (Obstructive) Symptoms:**
- Weak stream, hesitancy, straining, intermittency, incomplete emptying, terminal dribbling

## Clinical Assessment

**IPSS (International Prostate Symptom Score):**
- 7 questions scored 0-5 each (total 0-35)
- Mild: 0-7 | Moderate: 8-19 | Severe: 20-35
- Plus quality-of-life question

**Digital Rectal Exam (DRE):**
- Estimate prostate size, check for nodules (cancer concern), assess symmetry

**Baseline Labs:**
- Urinalysis (rule out infection/hematuria)
- PSA (if life expectancy > 10 years)
- Creatinine if renal impairment suspected

## Treatment Ladder

1. **Watchful Waiting:** Mild symptoms, not bothersome
2. **Alpha-blockers:** Tamsulosin, alfuzosin — relax smooth muscle
3. **5-Alpha Reductase Inhibitors (5ARIs):** Finasteride, dutasteride — shrink prostate over months
4. **Combination therapy:** Alpha-blocker + 5ARI for larger prostates
5. **Surgery:** TURP, laser procedures, or minimally invasive options`,
      keyTerms: [
        { term: 'LUTS', definition: 'Lower urinary tract symptoms — the collective symptoms caused by BPH' },
        { term: 'IPSS', definition: 'International Prostate Symptom Score — a validated questionnaire to quantify BPH severity' },
        { term: 'PSA', definition: 'Prostate-specific antigen — a blood test used to screen for prostate conditions' },
        { term: 'alpha-blocker', definition: 'Medication that relaxes smooth muscle in the prostate and bladder neck' },
      ],
      analogies: [
        'Alpha-blockers work like opening a clenched fist around a garden hose — they relax the muscle so flow improves.',
        '5ARIs work like slowly deflating a balloon over 6 months — they shrink the gland itself.',
      ],
    },
    3: {
      level: 3,
      summary: 'BPH involves DHT-dependent stromal-epithelial interactions in the transitional zone, autonomic dysregulation, and progressive detrusor remodeling. Treatment is guided by prostate size, symptom severity, and sexual function priorities.',
      explanation: `## Prostate Anatomy — Zonal Architecture

**McNeal Zones:**
- **Transitional zone:** Origin of BPH (5% of gland volume normally, enlarges to >95% in severe BPH)
- **Peripheral zone:** 70% of gland, origin of most prostate cancers
- **Central zone:** 25% of gland, surrounds ejaculatory ducts
- **Anterior fibromuscular stroma:** Non-glandular

## Hormonal Mechanisms

**DHT Pathway:**
- Testosterone converted to DHT by 5-alpha reductase (Type 2 predominant in prostate)
- DHT is 5x more potent than testosterone at the androgen receptor
- Activates growth factors: IGF, FGF, EGF
- Drives stromal and epithelial proliferation

## Bladder Response to Chronic Obstruction

**Compensated Phase:**
- Detrusor hypertrophy (muscle thickening)
- Increased collagen deposition
- Maintained emptying but at higher pressures

**Decompensated Phase:**
- Detrusor failure with rising post-void residual
- Trabeculation and diverticula formation
- Risk of overflow incontinence and urinary retention

## Pharmacotherapy Details

**Alpha-1 Blockers:**
| Drug | Receptor Selectivity | Typical Dose | Key Side Effects |
|------|---------------------|--------------|------------------|
| Tamsulosin | Alpha-1A selective | 0.4 mg daily | Retrograde ejaculation, IFIS |
| Alfuzosin | Alpha-1A selective | 10 mg daily | Dizziness |
| Silodosin | Alpha-1A selective | 8 mg daily | Retrograde ejaculation (28%) |
| Doxazosin | Non-selective | 1-8 mg daily | Orthostatic hypotension |

**5-Alpha Reductase Inhibitors:**
- Finasteride: Type 2 only; reduces PSA by ~50%
- Dutasteride: Types 1 and 2; dual inhibition
- Onset: 6 months for clinical effect; reduce prostate volume ~25%

**Combination Therapy (MTOPS/CombAT trials):**
- Superior to monotherapy for prostates > 30-40 g
- Reduces risk of acute urinary retention and need for surgery

## Indications for Surgical Referral

- Failed medical therapy
- Recurrent urinary retention
- Recurrent UTIs attributable to BPH
- Bladder stones
- Renal insufficiency from obstruction
- Recurrent gross hematuria`,
      keyTerms: [
        { term: 'transitional zone', definition: 'The inner zone of the prostate where BPH originates' },
        { term: 'DHT', definition: 'Dihydrotestosterone — the active androgen driving prostate growth' },
        { term: '5-alpha reductase', definition: 'Enzyme that converts testosterone to DHT in prostate tissue' },
        { term: 'detrusor', definition: 'The smooth muscle wall of the bladder responsible for contraction during urination' },
        { term: 'IFIS', definition: 'Intraoperative floppy iris syndrome — complication of alpha-blockers during cataract surgery' },
      ],
      clinicalNotes: 'Always check PSA before initiating 5ARI therapy, as these drugs reduce PSA by approximately 50%. After 6 months on therapy, double the measured PSA for accurate interpretation. Inform ophthalmology of alpha-blocker use before cataract surgery.',
    },
    4: {
      level: 4,
      summary: 'Advanced BPH management involves alpha-blocker pharmacodynamics, 5ARI hormonal mechanisms, surgical technique selection based on prostate size and morphology, and emerging minimally invasive therapies that preserve sexual function.',
      explanation: `## Alpha-Blocker Mechanism — Detailed

- Alpha-1A receptors predominate in prostatic stroma, capsule, and bladder neck
- Alpha-1D receptors in detrusor contribute to storage symptoms
- Uroselective agents (tamsulosin, silodosin) minimize vascular side effects
- Onset of action: days to weeks (faster than 5ARIs)

## 5ARI Mechanisms — Detailed

- Type 2 5-alpha reductase: Predominant in prostate (finasteride target)
- Type 1 5-alpha reductase: Skin, liver (dutasteride additionally blocks this)
- Reduces intraprostatic DHT by 80-90%
- Histologic effect: Epithelial atrophy, reduced glandular volume
- Sexual side effects: Decreased libido (3-5%), ED (5-7%), reduced ejaculate volume

## Surgical Options by Prostate Size

**Small-Medium (20-80 g):**
- TURP: Gold standard; 70-90% symptom improvement; retrograde ejaculation 65-80%
- GreenLight PVP (photoselective vaporization): Safe on anticoagulants; outpatient possible
- Bipolar TURP: Reduces TUR syndrome risk (uses saline irrigation)

**Large (>80-100 g):**
- HoLEP (Holmium laser enucleation): Size-independent; equivalent to TURP; steep learning curve
- Open/robotic simple prostatectomy: For very large glands; concurrent bladder stone removal

## Minimally Invasive — Preserving Ejaculatory Function

**UroLift (Prostatic Urethral Lift):**
- Implants compress lateral lobes, opening the urethra
- No tissue removal; preserves ejaculation in >95%
- Best for lateral lobe enlargement, prostates 30-80 g
- Limitation: Cannot treat significant median lobe

**Rezum (Water Vapor Thermal Therapy):**
- Convective water vapor ablates targeted tissue
- Preserves ejaculation in >90%
- Can treat median lobe
- Requires catheter 3-7 days; symptom improvement by 3 months

**Aquablation (Robotic Water-Jet Ablation):**
- Ultrasound-guided, robotically controlled water jet
- Automated ablation reduces surgeon-dependent variability
- Suitable for 30-150 g prostates
- WATER and WATER II trials demonstrate efficacy

## Post-Operative Complications

- Bladder neck contracture: 2-5%
- Urethral stricture: 3-7%
- Stress urinary incontinence: <2%
- Erectile dysfunction: 5-10% (procedure-dependent)
- TUR syndrome (monopolar TURP): Dilutional hyponatremia from glycine irrigation absorption`,
      keyTerms: [
        { term: 'UroLift', definition: 'Minimally invasive prostatic urethral lift using permanent implants to hold lobes apart' },
        { term: 'Rezum', definition: 'Water vapor thermal therapy that ablates prostate tissue while preserving ejaculation' },
        { term: 'Aquablation', definition: 'Robotic waterjet ablation of prostate tissue guided by real-time ultrasound' },
        { term: 'HoLEP', definition: 'Holmium laser enucleation of the prostate — removes entire transition zone' },
        { term: 'TUR syndrome', definition: 'Dilutional hyponatremia from absorption of hypotonic irrigation fluid during monopolar TURP' },
      ],
      clinicalNotes: 'Patient selection is critical for minimally invasive procedures. UroLift best for lateral lobe enlargement <80 g without significant median lobe. Rezum can address median lobe. Aquablation shows promise for larger glands. Counsel all patients about ejaculatory dysfunction risk relative to each procedure.',
    },
    5: {
      level: 5,
      summary: 'Expert-level BPH encompasses molecular targets (FGF, TGF-beta, inflammatory mediators), novel therapeutics (PDE5i for LUTS, beta-3 agonists), long-term durability data from landmark trials, and advanced techniques including UroLift, Rezum, and aquablation with their respective evidence bases.',
      explanation: `## Molecular Pathophysiology

**Stromal-Epithelial Cross-Talk:**
- FGF-7 (KGF) from stroma drives epithelial proliferation (paracrine)
- FGF-2 autocrine loop maintains stromal growth
- TGF-beta: Dual role — antiproliferative in epithelium, pro-fibrotic in stroma

**Inflammatory Hypothesis:**
- Chronic inflammatory infiltrates found in >40% of BPH specimens
- IL-6, IL-8, IL-17 elevated in BPH tissue
- COX-2 upregulation
- Inflammation-driven remodeling as therapeutic target

**Stem Cell Hypothesis:**
- Basal cell compartment contains androgen-independent stem cells
- Aberrant self-renewal may drive BPH recurrence after surgery
- Explains why BPH can recur even after TURP

## Novel and Emerging Therapies

**PDE5 Inhibitors for LUTS:**
- Tadalafil 5 mg daily: FDA-approved for BPH/LUTS
- Mechanism: NO/cGMP-mediated smooth muscle relaxation in prostate, bladder, and vasculature
- Dual benefit for concurrent ED and LUTS

**Beta-3 Agonists (Mirabegron/Vibegron):**
- Target storage symptoms (OAB component of BPH)
- Relax detrusor via beta-3 adrenergic receptors
- Can combine with alpha-blocker for mixed LUTS

**Investigational Agents:**
- Fexapotide triflutate: Intraprostatic injection inducing targeted apoptosis
- CX-6258: Novel kinase inhibitors targeting prostatic growth
- Anti-inflammatory approaches under study

## Long-Term Outcome Data

**MTOPS Trial (15 years):**
- Combination therapy (finasteride + doxazosin) > monotherapy
- 66% reduction in clinical progression vs placebo

**CombAT Trial:**
- Dutasteride + tamsulosin: 70% relative risk reduction for AUR and surgery

**Surgical Durability:**
| Procedure | Re-treatment Rate | Key Trial |
|-----------|-------------------|-----------|
| TURP | 5-10% at 10 years | Multiple RCTs |
| HoLEP | 1-5% at 10 years | Gilling et al. |
| GreenLight | 10-15% at 5 years | GOLIATH |
| UroLift | 13.6% at 5 years | L.I.F.T. study |
| Rezum | ~4.4% at 5 years | Rezum II |
| Aquablation | Low at 3 years | WATER/WATER II |

## Shock Wave Lithotripsy Physics (Cross-Reference)

While primarily a stone treatment, extracorporeal shock wave technology has been explored for BPH-adjacent applications. The piezoelectric or electromagnetic generators produce focused acoustic waves that create mechanical stress at the focal zone — this principle underpins both ESWL for stones and investigational low-intensity shockwave therapy for prostatic conditions.

## Special Populations

**Chronic Kidney Disease from BPH:**
- Post-obstructive diuresis after catheterization can cause significant electrolyte shifts
- Monitor K+, Na+, creatinine closely for 48-72 hours
- Gradual bladder decompression recommended

**Anticoagulated Patients:**
- GreenLight PVP or UroLift preferred (lower bleeding risk)
- TURP: Must hold anticoagulation
- Aquablation may require hemostatic catheter`,
      keyTerms: [
        { term: 'FGF-7 (KGF)', definition: 'Keratinocyte growth factor — paracrine signal from stroma driving epithelial growth in BPH' },
        { term: 'TGF-beta', definition: 'Transforming growth factor beta — multifunctional cytokine involved in fibrosis and remodeling in BPH' },
        { term: 'fexapotide triflutate', definition: 'Investigational intraprostatic injectable that induces targeted apoptosis in BPH tissue' },
        { term: 'post-obstructive diuresis', definition: 'Excessive urine output after relief of chronic urinary obstruction, risking electrolyte imbalance' },
      ],
      clinicalNotes: 'The REDUCE trial showed long-term dutasteride use was associated with a small increased detection of high-grade prostate cancer (Gleason 8-10), though overall cancer incidence was reduced. The clinical significance remains debated. Counsel patients about this nuance when prescribing long-term 5ARI therapy.',
    },
  },

  media: [],
  citations: [
    { id: 'aua-bph-2023', type: 'article', title: 'AUA/SUFU Guideline: Management of Lower Urinary Tract Symptoms Attributed to BPH', source: 'American Urological Association' },
    { id: 'mtops-trial', type: 'article', title: 'Medical Therapy of Prostatic Symptoms (MTOPS) Trial', source: 'New England Journal of Medicine' },
    { id: 'combat-trial', type: 'article', title: 'CombAT Study: Combination of Avodart and Tamsulosin', source: 'European Urology' },
  ],
  crossReferences: [
    { targetId: 'procedure-turp', targetType: 'topic', relationship: 'related', label: 'TURP Procedure' },
    { targetId: 'condition-prostate-cancer', targetType: 'condition', relationship: 'related', label: 'Prostate Cancer' },
  ],
  tags: {
    systems: ['urinary', 'male reproductive'],
    topics: ['urology', 'prostate', 'LUTS'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, shelf: ['surgery'] },
  },
  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

// ─────────────────────────────────────────────
// Kidney Stones (Nephrolithiasis)
// ─────────────────────────────────────────────

export const kidneyStoneComprehensive: EducationalContent = {
  id: 'urologic-condition-kidney-stones',
  type: 'condition',
  name: 'Kidney Stones (Nephrolithiasis)',
  nameEs: 'Cálculos Renales (Nefrolitiasis)',
  alternateNames: ['Renal Calculi', 'Urolithiasis', 'Nephrolithiasis'],

  levels: {
    1: {
      level: 1,
      summary: 'Kidney stones are hard mineral deposits that form inside your kidneys and can cause severe pain when they move through your urinary tract.',
      explanation: `**What Are Kidney Stones?**
Your kidneys filter your blood and make urine. Sometimes, minerals and salts in your urine stick together and form hard crystals — these are kidney stones. They can be as small as a grain of sand or as large as a golf ball.

**Why Do They Hurt?**
When a stone moves from the kidney into the narrow tube (ureter) leading to the bladder, it can get stuck. This causes sudden, severe pain — often called one of the worst pains imaginable.

**Common Symptoms:**
- Sharp, cramping pain in the back or side (can move to the groin)
- Pain that comes in waves
- Blood in the urine (pink, red, or brown)
- Nausea and vomiting
- Frequent urge to urinate

**How to Prevent Them:**
- Drink plenty of water (aim for 2-3 liters per day)
- Reduce salt intake
- Eat moderate amounts of protein
- Limit foods high in oxalate (spinach, nuts, chocolate) if advised

**Treatment:**
- Small stones often pass on their own with fluids and pain medicine
- Larger stones may need procedures to break them up or remove them`,
      keyTerms: [
        { term: 'kidney stone', definition: 'A hard deposit of minerals and salts that forms inside the kidney' },
        { term: 'ureter', definition: 'The tube connecting each kidney to the bladder' },
      ],
      analogies: [
        'Imagine trying to push a pebble through a drinking straw — that is what happens when a kidney stone moves through the ureter, causing intense pain.',
      ],
      patientCounselingPoints: [
        'Staying well-hydrated is the single most important thing you can do to prevent stones.',
        'If you pass a stone, save it in a strainer so your doctor can analyze what it is made of.',
      ],
    },
    2: {
      level: 2,
      summary: 'Kidney stones are classified by composition — calcium oxalate (most common), calcium phosphate, uric acid, struvite, and cystine. Diagnosis relies on CT scan, and management depends on stone size, location, and composition.',
      explanation: `## Stone Types

| Type | Frequency | Key Feature |
|------|-----------|-------------|
| Calcium oxalate | ~70-80% | Most common; visible on X-ray |
| Calcium phosphate | ~10-15% | Associated with RTA, hyperparathyroidism |
| Uric acid | ~5-10% | Radiolucent on X-ray; acidic urine (pH <5.5) |
| Struvite | ~5-10% | "Infection stones"; urease-producing organisms |
| Cystine | ~1% | Genetic disorder (cystinuria); hexagonal crystals |

## Diagnosis

**Non-Contrast CT (Gold Standard):**
- Sensitivity >95% for all stone types
- Shows stone size, location, hydronephrosis

**Additional Studies:**
- Urinalysis: Hematuria, crystals, pH, infection
- BMP: Creatinine, calcium
- Uric acid level if uric acid stone suspected

## Management by Size

**<5 mm:** ~90% pass spontaneously
- Hydration, NSAIDs, alpha-blocker (tamsulosin) for medical expulsive therapy (MET)

**5-10 mm:** ~50% pass spontaneously
- Trial of MET for 4-6 weeks if tolerable
- Intervention if persistent

**>10 mm or >2 cm:** Unlikely to pass; intervention needed

## PSA Screening (Cross-Reference)
PSA is a separate topic from stones but is a key urologic screening test. Elevated PSA (>4 ng/mL) warrants further evaluation for prostate conditions.`,
      keyTerms: [
        { term: 'calcium oxalate', definition: 'The most common type of kidney stone, formed from calcium and oxalate' },
        { term: 'struvite stone', definition: 'Infection stone made of magnesium ammonium phosphate, associated with urease-producing bacteria' },
        { term: 'uric acid stone', definition: 'Radiolucent stone that forms in acidic urine (pH <5.5)' },
        { term: 'MET', definition: 'Medical expulsive therapy — using alpha-blockers to help pass small stones' },
      ],
    },
    3: {
      level: 3,
      summary: 'Stone composition reflects underlying metabolic derangements. Calcium oxalate stones involve hypercalciuria, hyperoxaluria, or hypocitraturia. Uric acid stones result from low urine pH. Struvite stones indicate urease-producing uropathogen infection.',
      explanation: `## Stone Composition — Detailed

**Calcium Oxalate (CaOx):**
- Monohydrate (whewellite): Harder, denser
- Dihydrate (weddellite): More irregular, easier to fragment
- Risk factors: Hypercalciuria, hyperoxaluria, hypocitraturia, low urine volume

**Calcium Phosphate (CaP):**
- Brushite or hydroxyapatite
- Favored by alkaline urine (pH >6.5)
- Associated with: Renal tubular acidosis (Type 1), primary hyperparathyroidism

**Uric Acid:**
- Forms when urine pH <5.5 (undissociated uric acid is insoluble)
- Risk factors: Gout, metabolic syndrome, chronic diarrhea, myeloproliferative disorders
- Unique: Can dissolve with urine alkalinization (target pH 6.0-6.5)

**Struvite (MgNH4PO4):**
- Urease-producing organisms: Proteus, Klebsiella, Pseudomonas, Ureaplasma
- Urease splits urea into ammonia and CO2, alkalinizing urine
- Can form large "staghorn" calculi filling the renal pelvis
- Treatment: Complete stone removal + antibiotics

**Cystine:**
- Autosomal recessive defect in dibasic amino acid transport (SLC3A1, SLC7A9)
- Hexagonal crystals on urinalysis
- Requires aggressive hydration (>3 L/day) and urine alkalinization

## Uropathogen Virulence Factors (UTI/Stone Intersection)

- **Type 1 fimbriae (FimH):** Bind uroplakins on bladder epithelium
- **P fimbriae (PapG):** Bind globoseries glycolipids on kidney epithelium
- **Urease production:** Proteus mirabilis — splits urea, forms struvite stones
- **Biofilm formation:** Protects bacteria within stone matrix

## Metabolic Workup Indications

First-time formers with uncomplicated calcium stone may not need full workup. Indications for 24-hour urine collection:
- Recurrent stones
- Bilateral or multiple stones
- Family history
- Non-calcium stones
- Pediatric patients
- Solitary kidney

## Gleason Grading (Cross-Reference — Prostate Cancer)

The Gleason system grades prostate cancer by glandular architecture:
- Pattern 3: Well-formed individual glands
- Pattern 4: Fused, cribriform, or poorly formed glands
- Pattern 5: No glandular formation (sheets, cords, single cells)
- Gleason Score = Primary pattern + Secondary pattern (e.g., 3+4=7)
- Grade Groups 1-5 now used for clearer prognostic stratification`,
      keyTerms: [
        { term: 'hypercalciuria', definition: 'Elevated urinary calcium (>250 mg/day in women, >300 mg/day in men)' },
        { term: 'hyperoxaluria', definition: 'Elevated urinary oxalate, often from dietary intake or enteric malabsorption' },
        { term: 'hypocitraturia', definition: 'Low urinary citrate, an important stone inhibitor' },
        { term: 'urease', definition: 'Bacterial enzyme that splits urea into ammonia and CO2, alkalinizing urine and promoting struvite formation' },
        { term: 'Gleason score', definition: 'Grading system for prostate cancer based on glandular architecture (2-10 scale)' },
      ],
      clinicalNotes: 'Type 1 RTA presents with calcium phosphate stones, hypokalemia, non-anion gap metabolic acidosis, and alkaline urine. Always check serum calcium — primary hyperparathyroidism is a surgically curable cause of recurrent calcium stones.',
    },
    4: {
      level: 4,
      summary: 'Advanced stone management includes 24-hour urine metabolic workup interpretation, targeted dietary and pharmacologic prevention, surgical planning (URS, PCNL, ESWL), and understanding of prostate cancer molecular subtypes and robotic prostatectomy techniques.',
      explanation: `## 24-Hour Urine Metabolic Workup

**Parameters Measured:**
| Parameter | Normal Range | Significance |
|-----------|-------------|--------------|
| Volume | >2 L/day | Low volume = concentrated urine |
| Calcium | <250 mg (F), <300 mg (M) | Hypercalciuria = most common abnormality |
| Oxalate | <40 mg/day | Dietary or enteric hyperoxaluria |
| Citrate | >320 mg (F), >450 mg (M) | Citrate inhibits crystallization |
| Uric acid | <750 mg (F), <800 mg (M) | Promotes both UA and CaOx stones |
| Sodium | <150 mEq/day (target) | Drives calciuria |
| pH | 5.8-6.2 | Low pH: uric acid; High pH: CaP |
| Supersaturation ratios | Vendor-specific | CaOx SS, CaP SS, UA SS |

**Targeted Pharmacologic Prevention:**
- Hypercalciuria → Thiazide diuretics (chlorthalidone 25 mg daily)
- Hyperoxaluria → Calcium supplementation WITH meals (binds dietary oxalate)
- Hypocitraturia → Potassium citrate (20-30 mEq BID-TID)
- Uric acid stones → Potassium citrate for alkalinization (target pH 6.0-6.5)
- Cystine stones → Tiopronin or D-penicillamine + aggressive hydration + alkalinization

## Surgical Interventions

**ESWL (Extracorporeal Shock Wave Lithotripsy):**
- Non-invasive; acoustic shock waves fragment stones
- Best for: Renal stones <2 cm, upper ureteral stones
- Contraindications: Pregnancy, bleeding disorders, AAA, obstruction distal to stone
- Success rate: 70-90% for appropriate candidates

**Ureteroscopy (URS) with Laser Lithotripsy:**
- Flexible/rigid scope with Holmium:YAG or Thulium fiber laser
- Best for: Ureteral stones, renal stones <2 cm
- Higher stone-free rate than ESWL for most locations
- Requires ureteral stent placement post-procedure

**Percutaneous Nephrolithotomy (PCNL):**
- Direct renal access through flank for large/complex stones
- Best for: Stones >2 cm, staghorn calculi, ESWL failures
- Higher complication rate but best clearance for large stones

## Prostate Cancer — Molecular Subtypes

**Genomic Classifiers:**
- ERG fusion (TMPRSS2-ERG): ~50% of prostate cancers
- SPOP mutations: ~10%
- FOXA1 mutations
- IDH1 mutations
- BRCA2/ATM (DNA repair deficiency): Implications for PARP inhibitor sensitivity

**Risk Stratification:**
- NCCN risk groups: Very low, Low, Favorable intermediate, Unfavorable intermediate, High, Very high
- Multiparametric MRI (PI-RADS) for targeted biopsy

## Robotic Prostatectomy

**RARP (Robot-Assisted Radical Prostatectomy):**
- Da Vinci platform; 5-6 ports
- Nerve-sparing technique for potency preservation
- Continence recovery: 90-95% at 12 months
- Positive surgical margin rate: 10-15%
- Advantages: Magnified 3D vision, wristed instruments, reduced blood loss`,
      keyTerms: [
        { term: '24-hour urine', definition: 'Complete urine collection over 24 hours to measure stone-forming metabolites and inhibitors' },
        { term: 'supersaturation', definition: 'The concentration of stone-forming salts relative to their solubility — higher values favor crystallization' },
        { term: 'ESWL', definition: 'Extracorporeal shock wave lithotripsy — non-invasive stone fragmentation using focused acoustic waves' },
        { term: 'PCNL', definition: 'Percutaneous nephrolithotomy — direct renal access for removal of large or complex stones' },
        { term: 'RARP', definition: 'Robot-assisted radical prostatectomy using the da Vinci surgical system' },
      ],
      clinicalNotes: 'For the 24-hour urine, two collections are recommended (at least 4 weeks apart) given day-to-day variability. Thiazides lose efficacy without concurrent sodium restriction. Potassium citrate is the cornerstone of medical stone prevention across multiple stone types.',
    },
    5: {
      level: 5,
      summary: 'Expert stone management encompasses ESWL physics (electrohydraulic, piezoelectric, electromagnetic generators), advanced metabolic interventions, FMT for recurrent UTI in stone formers, PSMA-PET for prostate cancer staging, focal therapy, and genomic classifiers (Decipher, Oncotype DX GPS).',
      explanation: `## Shock Wave Lithotripsy — Physics

**Wave Generation:**
- **Electrohydraulic:** Spark-gap discharge in water creates expanding plasma bubble; original Dornier technology
- **Electromagnetic:** Current through coil induces magnetic field → membrane displacement → acoustic pulse
- **Piezoelectric:** Voltage applied to piezoceramic elements causes expansion → focused wave front

**Wave Characteristics:**
- Positive pressure phase: 30-110 MPa (compressive stress)
- Negative pressure phase: -5 to -15 MPa (tensile stress, cavitation)
- Focal zone: 2-6 mm width, 15-40 mm length
- Stone fragmentation mechanisms: Spallation (tensile failure), cavitation bubble collapse, shear stress, fatigue

**Optimization Strategies:**
- Slow rate (60-80 shocks/min) > fast rate (120/min) for fragmentation
- Ramping protocol: Start low energy, incrementally increase
- Coupling gel: Minimize air pockets at skin interface
- Fluoroscopic or ultrasound targeting

## FMT for Recurrent UTI

**Rationale:**
- Disrupted urogenital microbiome contributes to recurrent UTI
- Fecal microbiota transplantation (FMT) restores gut microbiome diversity
- Reduces intestinal reservoir of uropathogens (E. coli ST131)
- Clinical trials show 70-80% reduction in UTI recurrence in select populations
- Mechanism: Colonization resistance restores competitive exclusion of uropathogens

**Current Status:**
- Investigational; not yet standard of care for UTI
- Most evidence from case series and small RCTs
- FDA regulatory pathway evolving (SER-109 approved for C. difficile)

## PSMA-PET Imaging for Prostate Cancer

**68Ga-PSMA-11 and 18F-DCFPyL PET/CT:**
- PSMA (prostate-specific membrane antigen) overexpressed in prostate cancer
- Superior sensitivity vs conventional imaging (bone scan, CT) for:
  - Biochemical recurrence (PSA >0.2 ng/mL post-prostatectomy)
  - Initial staging of high-risk disease
  - Detection of oligometastatic disease
- CONDOR trial: 84% correct localization rate at PSA 0.2-2.0 ng/mL
- FDA-approved: 68Ga-PSMA-11, 18F-DCFPyL (Pylarify)

## Focal Therapy for Prostate Cancer

**Concept:** Treat the index lesion while preserving uninvolved prostate tissue

**Modalities:**
- HIFU (high-intensity focused ultrasound)
- Cryotherapy (focal)
- Irreversible electroporation (NanoKnife)
- Photodynamic therapy (padeliporfin/TOOKAD)
- Focal laser ablation

**Patient Selection:**
- Low to favorable intermediate risk
- Unilateral, MRI-visible lesion
- Confirmed by MRI-targeted biopsy
- Systematic biopsy negative on contralateral side

**Outcomes:**
- Functional preservation (continence, potency) superior to radical treatment
- Oncologic outcomes: 5-year recurrence-free ~85-90% in selected patients
- Salvage options preserved

## Genomic Classifiers

**Decipher (GenomeDx):**
- 22-gene RNA expression classifier
- Predicts metastatic potential after radical prostatectomy
- Low, intermediate, high risk scores
- Validated for post-prostatectomy adjuvant vs salvage RT decisions

**Oncotype DX Genomic Prostate Score (GPS):**
- 17-gene assay on biopsy tissue
- Predicts adverse pathology at prostatectomy
- Helps active surveillance candidacy decisions
- Score 0-100; validated in low and favorable intermediate risk

**Prolaris:**
- 46-gene cell cycle progression score
- Predicts 10-year prostate cancer mortality
- Biopsy or prostatectomy tissue

**ProMark:**
- 8-protein immunofluorescence assay
- Predicts non-organ-confined disease

## Complicated UTI Management in Stone Patients

**Infected Stone Protocol:**
- Obstructing infected stone = urologic emergency
- Decompress (ureteral stent or nephrostomy) FIRST
- IV antibiotics (piperacillin-tazobactam or carbapenem)
- Definitive stone removal after infection controlled
- Complete stone removal essential (residual fragments harbor bacteria)
- Antibiotic-impregnated ureteral stents under investigation`,
      keyTerms: [
        { term: 'spallation', definition: 'Stone fragmentation by tensile stress when compressive shock wave reflects off the distal surface' },
        { term: 'PSMA-PET', definition: 'Prostate-specific membrane antigen PET scan — highly sensitive imaging for prostate cancer staging and recurrence detection' },
        { term: 'Decipher', definition: '22-gene genomic classifier predicting metastatic potential of prostate cancer after surgery' },
        { term: 'Oncotype DX GPS', definition: '17-gene Genomic Prostate Score predicting adverse pathology from biopsy tissue' },
        { term: 'focal therapy', definition: 'Targeted treatment of prostate cancer index lesion while preserving surrounding tissue and function' },
        { term: 'FMT', definition: 'Fecal microbiota transplantation — restoring gut microbiome diversity to reduce recurrent UTI' },
      ],
      clinicalNotes: 'PSMA-PET has changed prostate cancer staging paradigms. The proPSMA trial demonstrated superior accuracy vs conventional imaging for initial staging. Genomic classifiers (Decipher, Oncotype DX GPS) are increasingly integrated into shared decision-making for active surveillance vs treatment. Focal therapy remains investigational at most centers but is rapidly evolving.',
    },
  },

  media: [],
  citations: [
    { id: 'aua-stones-2022', type: 'article', title: 'AUA/Endourology Society Guideline: Surgical Management of Stones', source: 'American Urological Association' },
    { id: 'eau-urolithiasis-2023', type: 'article', title: 'EAU Guidelines on Urolithiasis', source: 'European Association of Urology' },
    { id: 'condor-trial', type: 'article', title: 'CONDOR Trial: 18F-DCFPyL PET/CT for Biochemical Recurrence', source: 'Journal of Clinical Oncology' },
  ],
  crossReferences: [
    { targetId: 'procedure-lithotripsy', targetType: 'topic', relationship: 'related', label: 'Lithotripsy' },
    { targetId: 'condition-uti', targetType: 'condition', relationship: 'related', label: 'Urinary Tract Infections' },
    { targetId: 'condition-prostate-cancer', targetType: 'condition', relationship: 'related', label: 'Prostate Cancer' },
  ],
  tags: {
    systems: ['urinary', 'renal'],
    topics: ['urology', 'nephrology', 'stones'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, shelf: ['surgery', 'medicine'] },
  },
  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

// ─────────────────────────────────────────────
// Urinary Tract Infections (UTI)
// ─────────────────────────────────────────────

export const utiComprehensive: EducationalContent = {
  id: 'urologic-condition-uti',
  type: 'condition',
  name: 'Urinary Tract Infections (UTI)',
  nameEs: 'Infecciones del Tracto Urinario (ITU)',
  alternateNames: ['UTI', 'Bladder Infection', 'Cystitis', 'Pyelonephritis'],

  levels: {
    1: {
      level: 1,
      summary: 'A urinary tract infection (UTI) happens when germs get into your bladder or kidneys, causing pain, burning, and frequent urination.',
      explanation: `**What Is a UTI?**
Your urinary tract includes your kidneys, ureters, bladder, and urethra. A UTI is an infection anywhere in this system. Most UTIs affect the bladder (called cystitis).

**Common Symptoms:**
- Burning or pain when you pee
- Needing to pee often, but only a little comes out
- Cloudy, dark, or strong-smelling urine
- Pain or pressure in your lower belly
- Blood in urine (pink or red)

**Kidney Infection Symptoms (More Serious):**
- Fever and chills
- Back pain or side pain
- Nausea and vomiting

**Who Gets UTIs?**
- Women get them much more often than men (shorter urethra)
- Sexual activity can increase risk
- Menopause increases risk
- People with catheters

**Prevention:**
- Drink plenty of water
- Urinate after sexual activity
- Wipe front to back
- Avoid holding urine for long periods`,
      keyTerms: [
        { term: 'UTI', definition: 'Urinary tract infection — an infection in any part of the urinary system' },
        { term: 'cystitis', definition: 'A bladder infection — the most common type of UTI' },
      ],
      analogies: [
        'The urinary tract is like a plumbing system. When bacteria get in and multiply, it is like a pipe getting clogged and inflamed.',
      ],
      patientCounselingPoints: [
        'Most UTIs are easily treated with a short course of antibiotics.',
        'Drink plenty of fluids to help flush out bacteria.',
        'If you get frequent UTIs, talk to your doctor about prevention strategies.',
      ],
    },
    2: {
      level: 2,
      summary: 'UTIs are classified as uncomplicated (healthy, non-pregnant women) or complicated (structural/functional abnormalities, male, catheter-associated). E. coli accounts for 75-95% of uncomplicated cases. Treatment is guided by classification and local antibiograms.',
      explanation: `## Classification

**Uncomplicated UTI:**
- Otherwise healthy, non-pregnant, premenopausal woman
- No structural or neurological urinary tract abnormality
- Lower tract (cystitis) or upper tract (pyelonephritis)

**Complicated UTI:**
- Male UTI (always considered complicated)
- Structural abnormality (stones, strictures, stents)
- Functional abnormality (neurogenic bladder, retention)
- Catheter-associated (CAUTI)
- Pregnancy
- Immunocompromised
- Recent instrumentation

## Common Pathogens

| Organism | Frequency | Notes |
|----------|-----------|-------|
| E. coli | 75-95% (uncomplicated) | Most common |
| Klebsiella | 5-10% | More common in complicated UTI |
| Proteus mirabilis | 3-5% | Alkaline urine, struvite stones |
| Staphylococcus saprophyticus | 5-10% | Young sexually active women |
| Enterococcus | 3-5% | Complicated UTI |

## Treatment — Uncomplicated Cystitis

**First-line:**
- Nitrofurantoin 100 mg BID x 5 days
- TMP-SMX 160/800 mg BID x 3 days (if local resistance <20%)
- Fosfomycin 3 g single dose

**Avoid as first-line:**
- Fluoroquinolones (reserve for complicated/upper tract)

## Treatment — Acute Pyelonephritis

**Outpatient (mild):**
- Ciprofloxacin 500 mg BID x 7 days, or
- TMP-SMX 160/800 mg BID x 14 days (if susceptible)

**Inpatient (severe):**
- IV ceftriaxone, fluoroquinolone, or piperacillin-tazobactam
- Step down to oral when clinically improved

## PSA Screening Context
UTI can transiently elevate PSA levels. Defer PSA testing for 6-8 weeks after UTI resolution.`,
      keyTerms: [
        { term: 'complicated UTI', definition: 'UTI in the presence of structural, functional, or host factors that increase infection risk or treatment failure' },
        { term: 'CAUTI', definition: 'Catheter-associated urinary tract infection — the most common healthcare-associated infection' },
        { term: 'antibiogram', definition: 'Hospital-specific report of antimicrobial susceptibility patterns for common pathogens' },
      ],
    },
    3: {
      level: 3,
      summary: 'UTI pathogenesis involves uropathogenic E. coli (UPEC) virulence factors including type 1 fimbriae, P fimbriae, siderophores, and biofilm formation. Host defense depends on urothelial barrier function, Tamm-Horsfall protein, and innate immune response.',
      explanation: `## Uropathogen Virulence Factors

**UPEC (Uropathogenic E. coli):**
- **Type 1 fimbriae (FimH):** Bind mannose residues on uroplakin receptors → bladder colonization
- **P fimbriae (PapG):** Bind Gal-alpha(1-4)-Gal on kidney epithelium → pyelonephritis
- **Alpha-hemolysin (HlyA):** Cytotoxin that damages urothelium
- **Siderophores (Aerobactin, Enterobactin):** Iron acquisition systems for survival in iron-limited urine
- **Lipopolysaccharide (LPS):** Triggers innate immune activation via TLR4
- **Intracellular bacterial communities (IBCs):** UPEC invade urothelial cells, form biofilm-like pods, evade antibiotics and immune surveillance

**Biofilm Formation:**
- Catheter biofilms: Mixed organisms embedded in extracellular matrix
- Proteus mirabilis: Crystalline biofilm (struvite encrustation)
- Biofilm bacteria are 100-1000x more resistant to antibiotics

## Host Defense Mechanisms

- **Urothelial barrier:** Uroplakin plaques, GAG layer
- **Tamm-Horsfall protein (uromodulin):** Binds type 1 fimbriae, preventing adherence
- **Exfoliation response:** Infected superficial cells shed into urine
- **Antimicrobial peptides:** Defensins, cathelicidin (LL-37)
- **Innate immune response:** TLR4/TLR5 → NF-kB → cytokines (IL-6, IL-8) → neutrophil recruitment

## Complicated UTI Management

**Catheter-Associated (CAUTI):**
- Remove or replace catheter before collecting culture
- Treat only symptomatic infections (not asymptomatic bacteriuria with catheter)
- Duration: 7-14 days depending on response

**Urologic Obstruction + Infection:**
- Emergency decompression (nephrostomy tube or ureteral stent)
- IV antibiotics: Piperacillin-tazobactam, meropenem (ESBL coverage if risk factors)
- Definitive treatment after infection controlled

**Prostatitis:**
- Acute bacterial prostatitis: Fluoroquinolone or TMP-SMX for 4-6 weeks
- Chronic bacterial prostatitis: Prolonged antibiotic course (6-12 weeks)
- Prostatic tissue penetration critical for drug selection

## Recurrent UTI (>=3/year or >=2 in 6 months)

**Prevention Strategies:**
- Post-coital prophylaxis (TMP-SMX or nitrofurantoin)
- Continuous low-dose prophylaxis
- Vaginal estrogen (postmenopausal women) — restores Lactobacillus
- Cranberry products (modest evidence)
- D-mannose (binds FimH, blocking adhesion)
- Methenamine hippurate (urinary antiseptic)`,
      keyTerms: [
        { term: 'UPEC', definition: 'Uropathogenic E. coli — E. coli strains with specific virulence factors enabling urinary tract colonization' },
        { term: 'FimH', definition: 'Tip adhesin of type 1 fimbriae that binds mannose on bladder epithelium' },
        { term: 'intracellular bacterial communities', definition: 'Biofilm-like UPEC pods within bladder epithelial cells that evade host defenses and antibiotics' },
        { term: 'Tamm-Horsfall protein', definition: 'Most abundant urinary protein; binds type 1 fimbriae as innate defense mechanism' },
      ],
      clinicalNotes: 'Do NOT treat asymptomatic bacteriuria except in pregnancy and before urologic procedures. Fluoroquinolone resistance is increasing; use guided by local antibiogram. Vaginal estrogen is underutilized for recurrent UTI prevention in postmenopausal women.',
    },
    4: {
      level: 4,
      summary: 'Advanced UTI management addresses multidrug-resistant organisms (ESBL, CRE), catheter management bundles, antibiotic stewardship, complicated pyelonephritis with abscess, and emerging approaches including vaccines and immunomodulators.',
      explanation: `## Multidrug-Resistant UTI

**Extended-Spectrum Beta-Lactamase (ESBL) producers:**
- E. coli and Klebsiella most common
- Resistant to penicillins, cephalosporins, aztreonam
- Treatment: Carbapenems (meropenem, ertapenem), nitrofurantoin (for cystitis), fosfomycin (limited)

**Carbapenem-Resistant Enterobacterales (CRE):**
- KPC, NDM, OXA-48 mechanisms
- Limited options: Ceftazidime-avibactam, meropenem-vaborbactam, cefiderocol
- ID consultation recommended

**Antimicrobial Stewardship:**
- Culture before empiric therapy
- Narrow-spectrum when possible
- Shortest effective duration
- Avoid fluoroquinolones for uncomplicated cystitis

## Complicated Pyelonephritis

**Perinephric/Renal Abscess:**
- CT with contrast for diagnosis
- Drainage if >3-5 cm or no improvement with antibiotics
- Common in diabetics and obstruction
- Prolonged antibiotic course (2-4 weeks)

**Emphysematous Pyelonephritis:**
- Gas-forming infection; life-threatening
- Primarily diabetic patients
- CT diagnosis
- Emergency: Drainage + IV antibiotics ± nephrectomy
- Mortality: 20-40% historically

**Xanthogranulomatous Pyelonephritis:**
- Chronic destructive granulomatous process
- Often associated with staghorn calculus + obstruction
- Mimics renal malignancy on imaging
- Treatment: Nephrectomy

## CAUTI Prevention Bundle

- Avoid catheter insertion when not indicated
- Nurse-driven removal protocols
- Daily assessment of catheter necessity
- Aseptic insertion technique
- Maintain closed drainage system
- Anchoring to prevent traction
- Remove as soon as possible (goal: minimize catheter days)

## Emerging Therapies

**Vaccines:**
- ExPEC4V/Uro-Vaxom: Bacterial lysate immunostimulant
- FimCH vaccine: Targets FimH adhesin
- Under development; promising phase II data

**Immunomodulators:**
- Intravesical hyaluronic acid: Restores GAG layer
- Sublingual immunotherapy with bacterial extracts`,
      keyTerms: [
        { term: 'ESBL', definition: 'Extended-spectrum beta-lactamase — enzyme conferring resistance to most beta-lactam antibiotics' },
        { term: 'CRE', definition: 'Carbapenem-resistant Enterobacterales — highly resistant organisms with limited treatment options' },
        { term: 'emphysematous pyelonephritis', definition: 'Life-threatening gas-forming kidney infection, primarily in diabetic patients' },
        { term: 'GAG layer', definition: 'Glycosaminoglycan layer on bladder surface that prevents bacterial adhesion' },
      ],
      clinicalNotes: 'Emphysematous pyelonephritis requires emergent CT and urologic consultation. Classify by Huang-Tseng system (Class 1-4). ESBL coverage should be considered empirically in patients with recent healthcare exposure, prior ESBL infection, or recent antibiotic use.',
    },
    5: {
      level: 5,
      summary: 'Expert UTI management integrates FMT for recurrent infections, next-generation diagnostics (rapid AST, metagenomic sequencing), urinary microbiome science, novel anti-biofilm strategies, and phage therapy for multidrug-resistant uropathogens.',
      explanation: `## Fecal Microbiota Transplantation (FMT) for Recurrent UTI

**Scientific Basis:**
- The "gut-bladder axis": Intestinal reservoir of UPEC (especially ST131 lineage) seeds recurrent UTI
- FMT decolonizes the gut of uropathogenic strains via colonization resistance
- Donor microbiota restores competitive exclusion and short-chain fatty acid production

**Clinical Evidence:**
- Case series: 70-80% reduction in UTI recurrence at 6-12 months
- Mechanism parallels FMT success in recurrent C. difficile (restoring microbial diversity)
- Ongoing RCTs (NCT numbers pending results)
- SER-109 (purified Firmicutes spores): FDA-approved for C. diff, potential UTI applications

**Practical Considerations:**
- Donor screening for multi-drug resistant organisms critical
- Route: Oral capsules vs colonoscopic delivery
- Safety: Generally well-tolerated; rare serious adverse events
- Regulatory: Investigational for UTI indication

## Urinary Microbiome

- Traditional dogma of "sterile urine" disproven
- Expanded quantitative urine culture (EQUC) reveals Lactobacillus, Gardnerella, Streptococcus
- Lactobacillus dominance associated with urinary health
- Dysbiosis may predispose to infection and OAB symptoms
- Vaginal estrogen restores Lactobacillus in urogenital microbiome

## Advanced Diagnostics

**Rapid AST (Antimicrobial Susceptibility Testing):**
- Accelerate ID (Pheno): 6-7 hours from positive blood culture
- QMAC-dRAST: Direct from urine in hours vs days
- MALDI-TOF: Species identification in minutes from colony
- PCR panels: Multiplex detection of resistance genes (KPC, NDM, OXA-48)

**Metagenomic Sequencing:**
- Shotgun sequencing of urine identifies unculturable organisms
- Resistance gene profiling without culture
- Research tool evolving toward clinical utility

## Anti-Biofilm Strategies

- N-acetylcysteine (NAC): Disrupts biofilm matrix
- EDTA-ethanol lock solutions for catheter biofilm
- Quorum-sensing inhibitors: Block bacterial communication
- Surface-modified catheters: Silver alloy, nitric oxide-releasing, antimicrobial-impregnated
- Enzymatic dispersal agents: DNase I, dispersin B

## Bacteriophage Therapy

- Phage therapy for MDR UTI: Compassionate use and clinical trials
- Personalized phage cocktails targeting specific patient isolates
- Advantages: Narrow spectrum, self-amplifying, biofilm penetration
- Challenges: Resistance development, regulatory framework, manufacturing
- Phage-antibiotic synergy (PAS): Sub-MIC antibiotics enhance phage efficacy

## Global AMR Considerations

- UTI is the most common outpatient antibiotic indication
- Fluoroquinolone resistance in E. coli exceeds 30% in many regions
- ESBL prevalence increasing in community-onset UTI
- Carbapenem-sparing strategies essential to preserve last-line agents
- Point-of-care susceptibility testing could transform empiric prescribing`,
      keyTerms: [
        { term: 'gut-bladder axis', definition: 'Concept that intestinal E. coli reservoir seeds recurrent UTIs, targetable by FMT' },
        { term: 'EQUC', definition: 'Expanded quantitative urine culture — enhanced technique revealing diverse urinary microbiome' },
        { term: 'bacteriophage therapy', definition: 'Use of viruses that specifically infect bacteria to treat MDR infections' },
        { term: 'quorum sensing', definition: 'Bacterial cell-to-cell communication system regulating virulence and biofilm — a novel therapeutic target' },
        { term: 'colonization resistance', definition: 'Ability of healthy gut microbiota to prevent colonization by pathogens' },
      ],
      clinicalNotes: 'FMT for recurrent UTI is an emerging paradigm shift. It addresses the root cause (gut reservoir) rather than repeatedly treating each episode with antibiotics. Phage therapy is available through compassionate use at select centers (e.g., IPATH at UC San Diego). The urinary microbiome field is rapidly evolving and may redefine our approach to UTI and OAB.',
    },
  },

  media: [],
  citations: [
    { id: 'idsa-uti-2011', type: 'article', title: 'IDSA/ESCMID Guidelines for Uncomplicated UTI', source: 'Clinical Infectious Diseases' },
    { id: 'aua-recurrent-uti-2022', type: 'article', title: 'AUA/CUA/SUFU Guideline: Recurrent UTI in Women', source: 'American Urological Association' },
  ],
  crossReferences: [
    { targetId: 'urologic-condition-kidney-stones', targetType: 'condition', relationship: 'related', label: 'Kidney Stones' },
    { targetId: 'prevention-uti', targetType: 'topic', relationship: 'related', label: 'UTI Prevention' },
  ],
  tags: {
    systems: ['urinary', 'infectious disease'],
    topics: ['urology', 'infectious disease', 'antibiotic stewardship'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, shelf: ['medicine', 'surgery'] },
  },
  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

// ─────────────────────────────────────────────
// Prostate Cancer
// ─────────────────────────────────────────────

export const prostateCancerComprehensive: EducationalContent = {
  id: 'urologic-condition-prostate-cancer',
  type: 'condition',
  name: 'Prostate Cancer',
  nameEs: 'Cáncer de Próstata',
  alternateNames: ['Prostatic Adenocarcinoma', 'Prostate Carcinoma'],

  levels: {
    1: {
      level: 1,
      summary: 'Prostate cancer is the most common cancer in men. It usually grows slowly and, when found early, is very treatable.',
      explanation: `**What Is Prostate Cancer?**
The prostate is a small gland in men that makes some of the fluid in semen. Prostate cancer happens when cells in the prostate start growing out of control.

**Key Facts:**
- Most common cancer in men (excluding skin cancer)
- Usually grows very slowly
- Many men live for decades with prostate cancer without problems
- When found early, it is highly curable

**Symptoms (Often None Early On):**
- Trouble urinating or weak stream
- Blood in urine or semen
- Bone pain (if cancer has spread)
- Many men have NO symptoms — that is why screening matters

**Screening:**
- PSA blood test: Measures a protein made by the prostate
- Elevated PSA does NOT always mean cancer (BPH and infection can raise it too)
- Talk to your doctor about whether screening is right for you starting at age 50 (or 40-45 if higher risk)

**Treatment Options:**
- Active surveillance (monitoring without immediate treatment)
- Surgery to remove the prostate
- Radiation therapy
- Hormone therapy`,
      keyTerms: [
        { term: 'PSA', definition: 'Prostate-specific antigen — a blood test that can help detect prostate problems' },
        { term: 'active surveillance', definition: 'Closely monitoring prostate cancer rather than treating immediately' },
      ],
      patientCounselingPoints: [
        'Not all prostate cancers need immediate treatment — many are slow-growing.',
        'PSA screening should involve shared decision-making with your doctor.',
        'If you are African American or have a family history, discuss earlier screening.',
      ],
    },
    2: {
      level: 2,
      summary: 'Prostate cancer is diagnosed via PSA screening and biopsy. Gleason grading and staging guide management from active surveillance to radical treatment.',
      explanation: `## Epidemiology
- Lifetime risk: ~12% (1 in 8 men)
- Median age at diagnosis: 66 years
- Risk factors: Age, African ancestry, family history, BRCA2 mutations

## PSA Screening

**PSA Interpretation:**
- Normal: Generally <4 ng/mL (age-adjusted ranges exist)
- PSA density, velocity, and free/total ratio improve specificity
- Elevated PSA is NOT diagnostic — biopsy required

**Screening Recommendations:**
- Shared decision-making starting at age 50 (general), 40-45 (high risk)
- USPSTF: Individualized decision for men 55-69
- AUA: Shared decision-making 55-69

## Diagnosis

**Transrectal Ultrasound-Guided (TRUS) Biopsy:**
- Systematic 12-core biopsy
- MRI-targeted biopsy increasingly used (PI-RADS scoring)

## Gleason Grading

| Grade Group | Gleason Score | Risk |
|-------------|---------------|------|
| 1 | 3+3=6 | Low |
| 2 | 3+4=7 | Favorable Intermediate |
| 3 | 4+3=7 | Unfavorable Intermediate |
| 4 | 4+4=8 | High |
| 5 | 9-10 | Very High |

## Treatment by Risk

**Low Risk (Grade Group 1, PSA <10, T1-T2a):**
- Active surveillance preferred
- Monitoring: PSA every 6 months, repeat biopsy at 1 year, then per protocol

**Intermediate Risk:**
- Radical prostatectomy or radiation therapy
- Consider active surveillance for favorable intermediate

**High Risk:**
- Radical prostatectomy + pelvic lymph node dissection
- Radiation + androgen deprivation therapy (ADT) for 18-36 months`,
      keyTerms: [
        { term: 'Gleason score', definition: 'Grading system for prostate cancer severity based on microscopic appearance (2-10 scale)' },
        { term: 'Grade Group', definition: 'Modern 1-5 classification replacing Gleason score for clearer risk communication' },
        { term: 'PI-RADS', definition: 'Prostate Imaging Reporting and Data System — MRI scoring system (1-5) for prostate lesion suspicion' },
        { term: 'ADT', definition: 'Androgen deprivation therapy — reduces testosterone to slow prostate cancer growth' },
      ],
    },
    3: {
      level: 3,
      summary: 'Prostate cancer arises predominantly in the peripheral zone. Gleason grading reflects glandular architecture disruption. Staging (TNM) and risk stratification (NCCN) guide treatment from active surveillance through multimodal therapy.',
      explanation: `## Prostate Anatomy and Cancer Origin

**Zonal Origin:**
- 70% arise in the peripheral zone (palpable on DRE)
- 20% in the transitional zone (incidental finding in BPH surgery)
- 10% in the central zone

## Gleason Grading — Detailed

**Pattern Descriptions:**
- **Pattern 3:** Discrete, well-formed individual glands (infiltrating between benign glands)
- **Pattern 4:** Fused glands, poorly formed glands, cribriform architecture, glomeruloid features
- **Pattern 5:** Sheets, cords, single cells, comedonecrosis — no glandular differentiation

**Reporting:**
- Gleason Score = Most predominant pattern + Second most common pattern
- If only one pattern: Score = pattern + pattern (e.g., 3+3=6)
- Grade Group system (ISUP 2014) simplifies communication

## TNM Staging

**T Stage:**
- T1: Clinically inapparent (incidental or PSA-detected)
- T2: Confined to prostate (T2a: ≤half of one lobe; T2b: >half of one lobe; T2c: both lobes)
- T3: Extraprostatic extension (T3a) or seminal vesicle invasion (T3b)
- T4: Invades adjacent structures (bladder neck, rectum, pelvic wall)

**N Stage:** Regional lymph node involvement
**M Stage:** M1a (non-regional nodes), M1b (bone), M1c (other sites)

## NCCN Risk Groups

- Very Low: T1c, Grade Group 1, PSA <10, <3 positive cores, ≤50% any core
- Low: T1-T2a, Grade Group 1, PSA <10
- Favorable Intermediate: 1 intermediate factor, Grade Group 1-2
- Unfavorable Intermediate: Grade Group 3, or ≥2 intermediate factors
- High: T3a, Grade Group 4-5, or PSA >20
- Very High: T3b-T4, primary Gleason 5, or >4 cores with Grade Group 4-5

## Androgen Deprivation Therapy

**Mechanisms:**
- GnRH agonists (leuprolide): Initial LH/FSH surge then suppression
- GnRH antagonists (degarelix, relugolix): Immediate suppression without flare
- Target: Testosterone <50 ng/dL (ideally <20 ng/dL)

**Side Effects:**
- Hot flashes, sexual dysfunction, bone density loss
- Metabolic syndrome, increased cardiovascular risk
- Cognitive effects, depression
- Monitoring: DEXA, metabolic labs`,
      keyTerms: [
        { term: 'peripheral zone', definition: 'Outer region of prostate where 70% of cancers originate, accessible by DRE' },
        { term: 'cribriform architecture', definition: 'Sieve-like glandular pattern in Gleason pattern 4, associated with aggressive behavior' },
        { term: 'GnRH agonist', definition: 'Drug that suppresses testosterone by downregulating pituitary GnRH receptors after initial flare' },
        { term: 'extraprostatic extension', definition: 'Cancer growing through the prostate capsule (T3a), indicating locally advanced disease' },
      ],
      clinicalNotes: 'Cribriform pattern (within Gleason 4) has been associated with worse outcomes compared to non-cribriform pattern 4. Intraductal carcinoma of the prostate (IDC-P) is an aggressive morphology that should be reported separately. GnRH antagonists avoid testosterone flare, important in patients with impending spinal cord compression.',
    },
    4: {
      level: 4,
      summary: 'Advanced prostate cancer management includes robotic prostatectomy technique, radiation modalities, novel hormonal agents (abiraterone, enzalutamide), molecular subtyping, and PSMA-PET staging.',
      explanation: `## Robot-Assisted Radical Prostatectomy (RARP)

**Technique:**
- da Vinci platform with 5-6 trocar ports
- Transperitoneal or Retzius-sparing approach
- Steps: Bladder neck dissection, seminal vesicle mobilization, posterior dissection, lateral pedicle control, apical dissection, urethrovesical anastomosis
- Pelvic lymph node dissection if intermediate/high risk

**Nerve-Sparing:**
- Neurovascular bundles course posterolateral to prostate
- Intrafascial (maximal preservation) vs interfascial vs wide resection
- Intraoperative frozen section of margins may guide nerve preservation
- Potency recovery: 40-70% at 12-24 months (depends on baseline, age, nerve-sparing extent)

**Outcomes:**
- Continence: 90-95% pad-free at 12 months
- Positive surgical margins: 10-15% (pT2), 30-40% (pT3)
- Biochemical recurrence: 15-30% at 5 years (risk-dependent)

## Radiation Therapy Options

**External Beam (EBRT):**
- IMRT/VMAT: Intensity-modulated delivery
- Hypofractionated: Fewer treatments at higher dose (SBRT: 5 fractions)
- Combined with ADT for intermediate and high risk

**Brachytherapy:**
- LDR (low-dose rate): Permanent seed implants (I-125, Pd-103)
- HDR (high-dose rate): Temporary afterloading catheter
- Monotherapy for low/favorable intermediate; boost for higher risk

## Molecular Subtypes and Targeted Therapy

**Genomic Alterations:**
- TMPRSS2-ERG fusion: ~50% of cancers; androgen-regulated
- PTEN loss: ~40%; PI3K pathway activation
- SPOP mutations: ~10%
- DNA repair deficiency (BRCA2, ATM, CDK12): ~20% mCRPC

**Targeted Agents:**
- PARP inhibitors (olaparib, rucaparib): For BRCA2/ATM-mutated mCRPC
- Pembrolizumab: MSI-high/dMMR tumors
- Lu-177-PSMA-617 (Pluvicto): For PSMA-positive mCRPC (VISION trial)

## Novel Hormonal Agents (mCRPC)

| Agent | Mechanism | Key Trial |
|-------|-----------|-----------|
| Abiraterone | CYP17A1 inhibitor (blocks androgen synthesis) | COU-AA-301/302 |
| Enzalutamide | AR antagonist + signaling inhibitor | PREVAIL, PROSPER |
| Apalutamide | AR antagonist | SPARTAN, TITAN |
| Darolutamide | AR antagonist (low CNS penetration) | ARAMIS, ARASENS |`,
      keyTerms: [
        { term: 'RARP', definition: 'Robot-assisted radical prostatectomy — standard minimally invasive surgical approach' },
        { term: 'PSMA-PET', definition: 'Prostate-specific membrane antigen PET — highly sensitive imaging for prostate cancer detection' },
        { term: 'PARP inhibitor', definition: 'Drug targeting DNA repair, effective in BRCA/ATM-mutated prostate cancer' },
        { term: 'Lu-177-PSMA-617', definition: 'Radioligand therapy delivering targeted radiation to PSMA-expressing cancer cells' },
        { term: 'mCRPC', definition: 'Metastatic castration-resistant prostate cancer — progressing despite testosterone suppression' },
      ],
      clinicalNotes: 'All patients with metastatic prostate cancer should undergo germline and somatic testing for DNA repair gene mutations (BRCA2, ATM, PALB2, etc.) to identify PARP inhibitor candidates. PSMA-PET is now preferred for staging high-risk disease and biochemical recurrence.',
    },
    5: {
      level: 5,
      summary: 'Expert prostate cancer management encompasses PSMA-PET staging paradigms, focal therapy for select patients, genomic classifiers (Decipher, Oncotype DX GPS, Prolaris), theranostics (Lu-177-PSMA), bipolar androgen therapy, and the evolving treatment-intensification landscape.',
      explanation: `## PSMA-PET — Changing Paradigms

**68Ga-PSMA-11 and 18F-DCFPyL (Pylarify):**
- Detects disease at PSA levels undetectable by conventional imaging
- proPSMA trial: 27% greater accuracy vs CT/bone scan for staging
- CONDOR: 84% correct localization at PSA 0.2-2.0 (biochemical recurrence)
- Implications: Earlier detection of oligometastatic disease → metastasis-directed therapy

**PSMA Theranostics:**
- Same target for imaging (68Ga-PSMA) and therapy (177Lu-PSMA-617)
- VISION trial: Improved rPFS and OS in mCRPC after prior ARPI and docetaxel
- TheraP trial: Superior response vs cabazitaxel in PSMA-avid mCRPC
- Emerging: Actinium-225-PSMA (alpha emitter), PSMA-targeted antibody-drug conjugates

## Focal Therapy — Select Candidates

**Rationale:**
- Index lesion hypothesis: Dominant lesion drives metastatic potential
- Treating only the index lesion preserves surrounding tissue and function

**Modalities:**
- HIFU: Focused ultrasound thermal ablation
- Cryotherapy: Focal freeze-thaw cycles
- Irreversible electroporation (NanoKnife): Non-thermal cell death
- Photodynamic therapy (padeliporfin/TOOKAD): Phase III (PCM301) showed reduced progression

**Patient Selection:**
- Low to favorable intermediate risk (Grade Group 1-2)
- Unilateral, MRI-visible lesion (PI-RADS 4-5)
- Confirmed with MRI-targeted + systematic biopsy (contralateral negative)
- 5-year failure-free survival: ~85-90% in highly selected patients

## Genomic Classifiers — Clinical Application

**Decipher (GenomeDx):**
- 22-gene RNA classifier on prostatectomy or biopsy specimen
- Predicts 5-year metastasis probability
- Clinical utility: Adjuvant vs early salvage RT after prostatectomy
  - Low Decipher + positive margins → observation reasonable
  - High Decipher → early adjuvant RT and intensified ADT
- PREDICT-RT validation: Identifies men who benefit most from RT

**Oncotype DX Genomic Prostate Score (GPS):**
- 17-gene assay from biopsy tissue
- Predicts adverse pathology (GG ≥4+3, pT3, or both)
- Score 0-100: Integrated into active surveillance candidacy
- Most useful for Grade Group 1 and favorable intermediate risk

**Prolaris (Myriad):**
- 46-gene cell cycle progression (CCP) score
- Predicts 10-year prostate cancer-specific mortality
- Biopsy or prostatectomy tissue

## Treatment Intensification Paradigm

**Metastatic Hormone-Sensitive Prostate Cancer (mHSPC):**
- Standard: ADT alone is no longer sufficient
- CHAARTED/STAMPEDE: Docetaxel added for high-volume disease
- LATITUDE/STAMPEDE: Abiraterone + prednisone added to ADT
- ENZAMET/ARCHES: Enzalutamide added to ADT
- PEACE-1: ADT + docetaxel + abiraterone (triplet) for de novo metastatic
- ARASENS: ADT + docetaxel + darolutamide (triplet)

**Non-Metastatic CRPC (nmCRPC):**
- PROSPER (enzalutamide), SPARTAN (apalutamide), ARAMIS (darolutamide)
- All showed improved metastasis-free survival
- PSA doubling time <10 months guides initiation

## Bipolar Androgen Therapy (BAT)

- Supraphysiologic testosterone (400 mg IM q28 days) alternating with ADT
- Exploits AR adaptations in CRPC
- TRANSFORMER trial: Non-inferior to enzalutamide in post-abiraterone setting
- Improves quality of life (fatigue, sexual function, body composition)
- Investigational, best in AR-amplified mCRPC`,
      keyTerms: [
        { term: 'theranostics', definition: 'Combined diagnostic imaging and targeted radionuclide therapy using the same molecular target (e.g., PSMA)' },
        { term: 'Decipher', definition: '22-gene RNA genomic classifier predicting metastatic potential and guiding adjuvant vs salvage RT decisions' },
        { term: 'Oncotype DX GPS', definition: '17-gene Genomic Prostate Score from biopsy tissue predicting adverse pathology at prostatectomy' },
        { term: 'bipolar androgen therapy', definition: 'Alternating supraphysiologic testosterone and ADT to exploit AR vulnerabilities in CRPC' },
        { term: 'treatment intensification', definition: 'Adding novel agents (ARPI, docetaxel) upfront in metastatic hormone-sensitive disease for improved survival' },
      ],
      clinicalNotes: 'The treatment landscape has shifted to upfront intensification in mHSPC. Triplet therapy (ADT + ARPI + docetaxel) is emerging as standard for fit patients with high-volume de novo metastatic disease. Genomic classifiers are endorsed by NCCN to help guide active surveillance, adjuvant, and salvage treatment decisions. Every patient with metastatic prostate cancer should be offered germline genetic testing.',
    },
  },

  media: [],
  citations: [
    { id: 'nccn-prostate-2024', type: 'article', title: 'NCCN Guidelines: Prostate Cancer', source: 'National Comprehensive Cancer Network' },
    { id: 'vision-trial', type: 'article', title: 'VISION Trial: Lu-177-PSMA-617 in mCRPC', source: 'New England Journal of Medicine' },
    { id: 'propsma-trial', type: 'article', title: 'proPSMA Trial: PSMA-PET vs Conventional Imaging', source: 'The Lancet' },
  ],
  crossReferences: [
    { targetId: 'urologic-condition-bph', targetType: 'condition', relationship: 'related', label: 'BPH' },
    { targetId: 'procedure-robotic-prostatectomy', targetType: 'topic', relationship: 'related', label: 'Robotic Prostatectomy' },
  ],
  tags: {
    systems: ['male reproductive', 'urinary'],
    topics: ['urology', 'oncology', 'prostate cancer'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, shelf: ['surgery', 'medicine'] },
  },
  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

// ─────────────────────────────────────────────
// Bladder Cancer
// ─────────────────────────────────────────────

export const bladderCancerComprehensive: EducationalContent = {
  id: 'urologic-condition-bladder-cancer',
  type: 'condition',
  name: 'Bladder Cancer',
  nameEs: 'Cáncer de Vejiga',
  alternateNames: ['Urothelial Carcinoma', 'Transitional Cell Carcinoma', 'TCC'],

  levels: {
    1: {
      level: 1,
      summary: 'Bladder cancer is a common cancer of the urinary system. The most important warning sign is blood in the urine. Smoking is the biggest risk factor.',
      explanation: `**What Is Bladder Cancer?**
The bladder is a hollow organ that stores urine. Cancer can develop in the lining of the bladder. It is the 6th most common cancer overall and 4th most common in men.

**Warning Signs:**
- Blood in the urine (may be visible or found on a test) — most common sign
- Pain or burning when urinating
- Needing to urinate often
- Feeling like you need to go but cannot

**Risk Factors:**
- **Smoking** — the biggest risk factor (3x higher risk)
- Workplace exposure to chemicals (dyes, rubber, paint)
- Age over 55
- Being male (3-4x more common than in women)
- Previous bladder infections or radiation

**Treatment:**
- Depends on how deep the cancer has grown
- Early cancer: Removed through a scope (no incision needed)
- Advanced cancer: May need bladder removal and/or chemotherapy`,
      keyTerms: [
        { term: 'bladder', definition: 'The organ that stores urine before it leaves the body' },
        { term: 'hematuria', definition: 'Blood in the urine — the most common sign of bladder cancer' },
      ],
      patientCounselingPoints: [
        'Any blood in the urine should be evaluated by a doctor — it does not always mean cancer, but it needs to be checked.',
        'If you smoke, quitting is the single most important thing you can do to reduce your risk.',
      ],
    },
    2: {
      level: 2,
      summary: 'Bladder cancer is predominantly urothelial carcinoma (90%). It is classified as non-muscle-invasive (NMIBC, 75%) or muscle-invasive (MIBC, 25%). TURBT is both diagnostic and therapeutic for NMIBC.',
      explanation: `## Classification

**Histologic Types:**
- Urothelial (transitional cell) carcinoma: ~90%
- Squamous cell carcinoma: ~5% (associated with Schistosoma, chronic irritation)
- Adenocarcinoma: ~2%
- Small cell: <1%

**Stage-Based Classification:**
- NMIBC (Non-Muscle-Invasive): Ta, T1, CIS — 75% at diagnosis
- MIBC (Muscle-Invasive): T2-T4 — 25% at diagnosis

## Diagnosis

**Workup for Hematuria:**
- Urinalysis + urine cytology
- CT urogram (upper tract evaluation)
- Cystoscopy (gold standard for bladder visualization)

**TURBT (Transurethral Resection of Bladder Tumor):**
- Diagnostic AND therapeutic for NMIBC
- Must include detrusor muscle in specimen (adequate staging)
- Repeat TURBT at 2-6 weeks for high-grade T1 or incomplete resection

## NMIBC Management

**Risk Stratification:**
- Low risk (Ta low-grade, solitary, <3 cm): Single intravesical chemo post-TURBT
- Intermediate risk: TURBT + intravesical chemo (mitomycin C) or BCG
- High risk (T1HG, CIS, recurrent HG): TURBT + BCG induction + maintenance

**BCG (Bacillus Calmette-Guerin):**
- Live attenuated Mycobacterium bovis
- Induces local immune response against tumor cells
- Induction: Weekly x 6 weeks
- Maintenance: Monthly x 3, then every 3-6 months (SWOG schedule)

## MIBC Management
- Neoadjuvant cisplatin-based chemotherapy (MVAC or GC)
- Radical cystectomy with pelvic lymph node dissection
- Urinary diversion: Ileal conduit or neobladder`,
      keyTerms: [
        { term: 'TURBT', definition: 'Transurethral resection of bladder tumor — endoscopic removal and staging procedure' },
        { term: 'NMIBC', definition: 'Non-muscle-invasive bladder cancer — confined to mucosa or lamina propria' },
        { term: 'BCG', definition: 'Bacillus Calmette-Guerin — live bacterial immunotherapy instilled into the bladder' },
        { term: 'radical cystectomy', definition: 'Surgical removal of the bladder for muscle-invasive cancer' },
      ],
    },
    3: {
      level: 3,
      summary: 'Bladder cancer staging uses the TNM system with critical distinction between Ta (papillary, non-invasive), T1 (lamina propria invasion), CIS (flat high-grade), and T2+ (muscle invasion). BCG immunotherapy induces TH1-mediated anti-tumor response.',
      explanation: `## TNM Staging — Detailed

| Stage | Description | 5-Year Survival |
|-------|-------------|-----------------|
| Ta | Papillary, confined to urothelium | ~95% |
| CIS | Flat, high-grade, confined to urothelium | 80-90% (with BCG) |
| T1 | Invades lamina propria | 70-85% |
| T2a | Invades inner muscle (detrusor) | 60-70% |
| T2b | Invades outer muscle | 50-60% |
| T3 | Invades perivesical tissue | 30-50% |
| T4 | Invades adjacent organs | 10-30% |

## BCG Mechanism of Action

**Immunologic Cascade:**
1. BCG attaches to fibronectin on urothelium
2. Internalized by urothelial cells and antigen-presenting cells
3. TLR2/TLR4 activation → cytokine release (IL-2, IL-12, TNF-alpha, IFN-gamma)
4. TH1 immune response → CD4+ and CD8+ T cells, NK cells
5. Direct and immune-mediated tumor cell killing
6. TRAIL-mediated apoptosis of tumor cells

**BCG Failure Definitions:**
- BCG-refractory: Persistent or recurrent HG disease within 6 months of adequate BCG
- BCG-relapsing: Recurrence after disease-free interval following adequate BCG
- BCG-intolerant: Unable to complete induction due to side effects
- BCG-unresponsive: Inadequate response to adequate BCG (refractory + relapsing within 12 months)

## Molecular Subtypes

**TCGA Classification:**
- Luminal-papillary (~35%): FGFR3 mutations, good prognosis
- Luminal-infiltrated (~19%): Stromal infiltration, PD-L1 expression
- Luminal (~6%): Low mutation burden
- Basal/squamous (~35%): TP53 mutations, CK5/6+, aggressive
- Neuronal (~5%): Worst prognosis, may benefit from neuroendocrine-directed therapy

## Upper Tract Urothelial Carcinoma

- 5-10% of urothelial cancers arise in renal pelvis or ureter
- Lynch syndrome association (MSH2 mutations)
- CT urogram for diagnosis
- Standard: Radical nephroureterectomy with bladder cuff excision
- Kidney-sparing approaches for select low-risk cases`,
      keyTerms: [
        { term: 'CIS (carcinoma in situ)', definition: 'Flat, high-grade urothelial cancer confined to the mucosal surface — aggressive biology despite non-invasive stage' },
        { term: 'lamina propria', definition: 'Connective tissue layer beneath the urothelium — T1 invasion' },
        { term: 'FGFR3', definition: 'Fibroblast growth factor receptor 3 — commonly mutated in luminal-papillary bladder cancer, targetable' },
        { term: 'BCG-unresponsive', definition: 'Persistent or early-recurrent high-grade disease after adequate BCG therapy' },
      ],
      clinicalNotes: 'CIS has aggressive biology despite being non-invasive. Without treatment, ~50% progress to muscle invasion. BCG is the standard treatment. All patients with high-grade NMIBC need surveillance cystoscopy every 3 months initially, then extending if no recurrence.',
    },
    4: {
      level: 4,
      summary: 'Advanced bladder cancer management includes neoadjuvant chemotherapy paradigms, radical cystectomy techniques, urinary diversion options, checkpoint immunotherapy, FGFR-targeted therapy, and emerging perioperative strategies.',
      explanation: `## Neoadjuvant Chemotherapy

**Rationale:**
- Level 1 evidence for cisplatin-based NAC before radical cystectomy
- 5% absolute overall survival benefit
- Pathologic downstaging (pT0) in 25-40%
- Regimens: dose-dense MVAC or gemcitabine/cisplatin

**Cisplatin Eligibility:**
- GFR ≥60 mL/min (some use ≥50)
- ECOG PS 0-1
- No significant hearing loss, neuropathy, or heart failure
- Cisplatin-ineligible patients: Consider upfront cystectomy + adjuvant checkpoint inhibitor

## Radical Cystectomy

**Procedure:**
- Male: Cystoprostatectomy + bilateral pelvic lymph node dissection
- Female: Anterior pelvic exenteration (bladder, uterus, anterior vaginal wall)
- Extended lymph node template improves staging and outcomes
- Robotic-assisted approach: RAZOR trial (non-inferior to open)

**Urinary Diversion:**
- **Ileal conduit:** Most common; segment of ileum brings urine to skin stoma
- **Orthotopic neobladder:** Ileal reservoir connected to urethra; patient voids per urethra
- **Continent cutaneous diversion (Indiana pouch):** Self-catheterization through stoma

## Immunotherapy

**Checkpoint Inhibitors:**
- Pembrolizumab: BCG-unresponsive NMIBC (KEYNOTE-057)
- Atezolizumab, pembrolizumab, nivolumab: Metastatic post-platinum
- Avelumab: Maintenance after platinum-based first-line (JAVELIN Bladder 100)

**Adjuvant Nivolumab:**
- CheckMate-274: Improved DFS after radical cystectomy in high-risk patients

## Targeted Therapy

**FGFR Inhibitors:**
- Erdafitinib: FDA-approved for FGFR2/3-altered metastatic UC
- FGFR alterations in ~20% of bladder cancers (especially luminal-papillary)

**Antibody-Drug Conjugates:**
- Enfortumab vedotin (Nectin-4 targeted): EV-301 showed OS benefit in metastatic UC
- Sacituzumab govitecan (Trop-2 targeted): Emerging data

## Bladder Preservation

**Trimodal Therapy (TMT):**
- Maximal TURBT + concurrent chemoradiation
- Suitable for select MIBC patients (complete TURBT, unifocal, no CIS, no hydronephrosis)
- 5-year overall survival: ~50-60%, with intact bladder in ~75%`,
      keyTerms: [
        { term: 'neoadjuvant chemotherapy', definition: 'Chemotherapy given BEFORE surgery to shrink tumor and improve outcomes' },
        { term: 'ileal conduit', definition: 'Most common urinary diversion using a segment of small bowel to create a urine outlet to the skin' },
        { term: 'neobladder', definition: 'Surgically created urinary reservoir from bowel, connected to the urethra for natural voiding' },
        { term: 'enfortumab vedotin', definition: 'Antibody-drug conjugate targeting Nectin-4 on bladder cancer cells' },
        { term: 'trimodal therapy', definition: 'Bladder-preserving approach combining TURBT + chemoradiation for select MIBC patients' },
      ],
      clinicalNotes: 'Avelumab maintenance (JAVELIN Bladder 100) is standard of care after stable/responding first-line platinum chemotherapy in metastatic UC. Enfortumab vedotin + pembrolizumab is emerging as first-line for cisplatin-ineligible patients. FGFR testing is mandatory in metastatic UC.',
    },
    5: {
      level: 5,
      summary: 'Expert bladder cancer management integrates molecular subtyping for treatment selection, novel immunotherapy-chemotherapy combinations (EV-302, CheckMate-901), circulating tumor DNA for MRD, FGFR-directed precision medicine, and perioperative checkpoint inhibitor strategies.',
      explanation: `## Molecular Subtyping — Clinical Impact

**Consensus Classification (2020):**
- 6 subtypes with distinct biology and treatment sensitivity
- Basal/squamous: May benefit more from NAC (high cisplatin sensitivity)
- Luminal-infiltrated: Immune-rich, may benefit from checkpoint inhibitors
- Luminal-papillary: FGFR3 alterations → FGFR inhibitor candidates
- Neuronal: Cisplatin/etoposide-sensitive (neuroendocrine-directed)
- Stroma-rich: Potential TGF-beta inhibitor targets

**Clinical Utility:**
- Not yet standard for treatment selection (under investigation)
- FGFR testing IS standard in metastatic UC
- PD-L1 testing guides first-line immunotherapy in cisplatin-ineligible

## Landmark Trials Reshaping Standard of Care

**EV-302/KEYNOTE-A39:**
- Enfortumab vedotin + pembrolizumab vs platinum-chemo in first-line metastatic UC
- Unprecedented OS improvement → new standard of care
- Applicable regardless of cisplatin eligibility

**CheckMate-901:**
- Nivolumab + gemcitabine/cisplatin vs gemcitabine/cisplatin in first-line
- Improved overall survival

**NIAGARA:**
- Perioperative durvalumab + NAC for MIBC
- Improved event-free survival

## Circulating Tumor DNA (ctDNA)

**Applications:**
- Minimal residual disease (MRD) detection after cystectomy
- ctDNA-positive post-surgery predicts relapse with high specificity
- IMvigor011: ctDNA-guided adjuvant atezolizumab (investigational)
- Potential to spare ctDNA-negative patients from adjuvant therapy toxicity

**Technology:**
- Tumor-informed assays (Signatera, RaDaR): Custom panels based on tumor mutations
- Tumor-naive assays: Broader panels, slightly lower sensitivity
- Serial monitoring enables dynamic risk assessment

## Precision Medicine in Practice

**FGFR Pathway:**
- Erdafitinib: Phase III THOR demonstrated superiority vs chemotherapy
- Futibatinib, infigratinib: Under investigation
- FGFR alterations: Activating mutations (S249C most common) or fusions

**Perioperative Innovation:**
- Neoadjuvant pembrolizumab alone for cisplatin-ineligible (PURE-01, ABACUS)
- Combined NAC + immunotherapy under investigation
- Pathologic complete response as surrogate endpoint for bladder-sparing

## Gene Expression Classifiers for Bladder Cancer

- UROMOL2021: Classifies NMIBC into transcriptomic subtypes
- Class 2a (genomically unstable): Higher progression risk → more aggressive treatment
- Class 1/3: Lower risk; may safely reduce surveillance burden

## Urinary Biomarkers

- Urine cytology: High specificity, low sensitivity for low-grade
- UroVysion FISH: Detects aneuploidy (chromosomes 3, 7, 17, 9p21)
- Cxbladder: Genomic urine test aiding hematuria triage
- Bladder EpiCheck: DNA methylation-based surveillance tool`,
      keyTerms: [
        { term: 'ctDNA', definition: 'Circulating tumor DNA — tumor-derived DNA fragments in blood used for MRD detection and monitoring' },
        { term: 'EV-302', definition: 'Landmark trial establishing enfortumab vedotin + pembrolizumab as new first-line standard in metastatic UC' },
        { term: 'molecular subtyping', definition: 'Classification of bladder cancer into transcriptomic subtypes with distinct biology and treatment sensitivity' },
        { term: 'Signatera', definition: 'Tumor-informed ctDNA assay for MRD detection using personalized panels' },
      ],
      clinicalNotes: 'The bladder cancer treatment landscape is evolving rapidly. EV-302 (enfortumab vedotin + pembrolizumab) has fundamentally changed first-line metastatic treatment. ctDNA-guided adjuvant therapy is under active investigation and may soon allow precision escalation or de-escalation of perioperative treatment. All metastatic UC patients should undergo FGFR testing.',
    },
  },

  media: [],
  citations: [
    { id: 'nccn-bladder-2024', type: 'article', title: 'NCCN Guidelines: Bladder Cancer', source: 'National Comprehensive Cancer Network' },
    { id: 'ev302-keynote', type: 'article', title: 'EV-302/KEYNOTE-A39: Enfortumab Vedotin + Pembrolizumab in Advanced UC', source: 'New England Journal of Medicine' },
    { id: 'javelin-bladder-100', type: 'article', title: 'JAVELIN Bladder 100: Avelumab Maintenance', source: 'New England Journal of Medicine' },
  ],
  crossReferences: [
    { targetId: 'urologic-condition-uti', targetType: 'condition', relationship: 'related', label: 'UTI' },
    { targetId: 'procedure-cystoscopy', targetType: 'topic', relationship: 'related', label: 'Cystoscopy' },
  ],
  tags: {
    systems: ['urinary'],
    topics: ['urology', 'oncology', 'bladder cancer'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, shelf: ['surgery', 'medicine'] },
  },
  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

// ─────────────────────────────────────────────
// Module Exports
// ─────────────────────────────────────────────

export const urologicConditions = {
  bph: bphComprehensive,
  kidneyStones: kidneyStoneComprehensive,
  uti: utiComprehensive,
  prostateCancer: prostateCancerComprehensive,
  bladderCancer: bladderCancerComprehensive,
};

export default urologicConditions;
