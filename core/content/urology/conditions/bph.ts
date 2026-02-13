/**
 * Benign Prostatic Hyperplasia - Educational Content
 */

import { EducationalContent } from '../../types';

export const benignProstaticHyperplasia: EducationalContent = {
  id: 'condition-bph',
  type: 'condition',
  name: 'Benign Prostatic Hyperplasia',
  alternateNames: ['BPH', 'Enlarged Prostate', 'Prostate Enlargement'],

  levels: {
    1: {
      level: 1,
      summary: 'BPH is a non-cancerous enlargement of the prostate gland that can make it harder to urinate as men get older.',
      explanation: `The prostate is a gland about the size of a walnut that sits below the bladder in men. The urethra (the tube that carries urine) passes through the middle of the prostate.

**What Happens in BPH:**
- As men age, the prostate slowly grows larger
- This is NOT cancer
- The enlarged prostate can squeeze the urethra
- This makes it harder for urine to flow

**Common Symptoms:**
- Weak urine stream
- Needing to urinate frequently, especially at night
- Feeling like your bladder isn't empty after urinating
- Trouble starting to urinate

**Who Gets It:**
- Very common in men over 50
- By age 80, about 90% of men have some enlargement

**Treatment Options:**
- Medications to relax the prostate or shrink it
- Surgery for severe cases
- Lifestyle changes like limiting fluids at night`,
      keyTerms: [
        { term: 'prostate', definition: 'A gland in men that surrounds the urethra below the bladder' },
        { term: 'BPH', definition: 'Benign prostatic hyperplasia - non-cancerous prostate enlargement' },
        { term: 'benign', definition: 'Not cancer; not harmful' },
      ],
      analogies: [
        'The prostate growing around the urethra is like a donut getting thicker - the hole in the middle gets smaller.',
      ],
      examples: [
        'Getting up multiple times at night to urinate is called nocturia and is a common BPH symptom.',
      ],
    },
    2: {
      level: 2,
      summary: 'BPH is a histologic condition of prostatic stromal and epithelial hyperplasia causing lower urinary tract symptoms (LUTS) through static and dynamic obstruction.',
      explanation: `## Pathophysiology

**Static Component:**
- Stromal and glandular growth
- Physical compression of urethra
- Transitional zone enlargement

**Dynamic Component:**
- Smooth muscle contraction
- Alpha-1 adrenergic receptors
- Prostatic capsule tension

## Clinical Presentation (LUTS)

**Storage Symptoms (Irritative):**
- Frequency
- Urgency
- Nocturia
- Urge incontinence

**Voiding Symptoms (Obstructive):**
- Weak stream
- Hesitancy
- Straining
- Intermittent stream
- Incomplete emptying
- Terminal dribbling

## Assessment

**IPSS Score:**
- International Prostate Symptom Score
- 7 questions, 0-35 scale
- Mild (0-7), Moderate (8-19), Severe (20-35)

**Digital Rectal Exam:**
- Prostate size estimation
- Symmetry, nodules (cancer concern)
- Tone of anal sphincter

**Baseline Testing:**
- Urinalysis
- PSA (if life expectancy >10 years)
- Creatinine (if renal impairment suspected)

## Treatment Overview

**Watchful Waiting:**
- Mild symptoms
- Not significantly bothersome

**Medical Therapy:**
- Alpha-blockers: Tamsulosin, alfuzosin
- 5-alpha reductase inhibitors: Finasteride, dutasteride
- Combination therapy for larger prostates

**Surgical Options:**
- TURP (transurethral resection)
- Laser procedures
- Minimally invasive options`,
      keyTerms: [
        { term: 'LUTS', definition: 'Lower urinary tract symptoms - collective term for BPH symptoms' },
        { term: 'IPSS', definition: 'International Prostate Symptom Score - questionnaire to assess severity' },
        { term: 'alpha-blocker', definition: 'Medication that relaxes prostate smooth muscle' },
        { term: 'TURP', definition: 'Transurethral resection of prostate - gold standard surgery' },
      ],
      analogies: [
        'Alpha-blockers work like opening a fist that was squeezing a garden hose.',
        '5ARIs work like slowly shrinking the donut over months.',
      ],
    },
    3: {
      level: 3,
      summary: 'BPH involves hormonal-dependent stromal-epithelial interactions, autonomic regulation, and progressive bladder dysfunction requiring individualized treatment based on symptom severity and prostate size.',
      explanation: `## Hormonal Mechanisms

**DHT Role:**
- Testosterone converted to DHT by 5-alpha reductase
- Type 2 isoenzyme predominant in prostate
- DHT 5x more potent than testosterone
- Essential for prostate growth

**Androgen Receptor:**
- Nuclear receptor
- Activates growth factors
- IGF, FGF, EGF pathways

## Bladder Response to Obstruction

**Compensated Phase:**
- Detrusor hypertrophy
- Increased collagen deposition
- Maintained emptying

**Decompensated Phase:**
- Detrusor failure
- Increased residual
- Overflow incontinence
- Risk of retention

## Medical Therapy Details

**Alpha-1 Blockers:**
| Drug | Selectivity | Dose |
|------|-------------|------|
| Tamsulosin | A1A | 0.4mg daily |
| Alfuzosin | A1A | 10mg daily |
| Silodosin | A1A | 8mg daily |
| Doxazosin | Non-selective | 1-8mg daily |

*Common side effects:* Dizziness, retrograde ejaculation (tamsulosin), intraoperative floppy iris syndrome

**5-Alpha Reductase Inhibitors:**
- Finasteride: Type 2 only, reduces PSA 50%
- Dutasteride: Type 1 and 2
- Take 6 months for effect
- Reduce prostate 25%, risk of retention/surgery

**Combination Therapy:**
- MTOPS trial: Superior to monotherapy
- Best for large prostates (>30-40g)
- Reduces progression

## When to Refer for Surgery

- Failed medical therapy
- Recurrent UTI
- Recurrent retention
- Bladder stones
- Renal insufficiency
- Recurrent gross hematuria`,
      keyTerms: [
        { term: 'DHT', definition: 'Dihydrotestosterone - the active androgen in prostate tissue' },
        { term: '5-alpha reductase', definition: 'Enzyme converting testosterone to DHT in prostate' },
        { term: 'detrusor hypertrophy', definition: 'Thickening of bladder muscle in response to obstruction' },
      ],
      clinicalNotes: 'Always check PSA before starting 5ARI as it reduces PSA by 50% - double the value after 6 months on therapy for accurate interpretation.',
    },
    4: {
      level: 4,
      summary: 'Advanced BPH management includes surgical technique selection, emerging minimally invasive procedures, and management of refractory symptoms.',
      explanation: `## Surgical Options Comparison

**TURP (Gold Standard):**
- Symptom improvement: 70-90%
- Complications: Bleeding, TUR syndrome, retrograde ejaculation (75%)
- Best for 30-80g prostates

**Holmium Laser Enucleation (HoLEP):**
- Equivalent efficacy to TURP
- Less bleeding
- Any prostate size
- Steep learning curve

**Photoselective Vaporization (GreenLight):**
- KTP or LBO laser
- Outpatient possible
- Good for anticoagulation
- May need repeat treatment

**Open Simple Prostatectomy:**
- Prostates >80-100g
- Concurrent bladder stones/diverticula
- Robotic approach available

## Minimally Invasive Treatments

**UroLift:**
- Prostatic urethral lift
- No tissue removal
- Preserves ejaculatory function
- Best for lateral lobe enlargement

**Rezum:**
- Water vapor thermal therapy
- Outpatient procedure
- Preserved ejaculation (>90%)
- May treat median lobe

**Aquablation:**
- Robotic, water-jet ablation
- Ultrasound guided
- Automated technique

## Managing Complications

**Retention:**
- Clean intermittent catheterization
- Trial of void after alpha-blocker
- Suprapubic catheter if prolonged

**Hematuria:**
- Usually self-limited
- Continuous irrigation if severe
- Cystoscopy to rule out other causes

**Post-operative:**
- Bladder neck contracture: 2-5%
- Urethral stricture: 3-7%
- Incontinence: <2%
- ED: 5-10%

## Sexual Function Considerations

**Ejaculatory Dysfunction:**
- TURP: 65-80% retrograde
- GreenLight: 45-55%
- UroLift: <5%
- Rezum: <10%

**Erectile Function:**
- Most procedures do not affect
- PDE5 inhibitors beneficial for LUTS and ED`,
      keyTerms: [
        { term: 'HoLEP', definition: 'Holmium laser enucleation of prostate - removes entire transition zone' },
        { term: 'UroLift', definition: 'Minimally invasive procedure using implants to hold prostate open' },
        { term: 'TUR syndrome', definition: 'Hyponatremia from absorption of irrigation fluid during TURP' },
      ],
      clinicalNotes: 'Patient selection is critical for minimally invasive procedures. UroLift and Rezum best for prostates <80g without significant median lobe. Counsel about ejaculatory dysfunction risk with all treatments.',
    },
    5: {
      level: 5,
      summary: 'Expert-level BPH management encompasses molecular targets, novel therapeutics, combination approaches, and long-term outcomes optimization.',
      explanation: `## Molecular Pathophysiology

**Stromal-Epithelial Interactions:**
- Paracrine signaling
- FGF-7 (KGF) from stroma
- FGF-2 autocrine in stroma
- TGF-beta role in fibrosis

**Inflammation in BPH:**
- Inflammatory infiltrates common
- IL-6, IL-8 elevated
- Potential therapeutic target

**Stem Cell Hypothesis:**
- Androgen-independent stem cells
- Aberrant proliferation
- May explain recurrence

## Emerging Therapies

**PDE5 Inhibitors:**
- Tadalafil 5mg FDA approved
- Mechanism: Smooth muscle relaxation
- Beneficial for concurrent ED
- May combine with alpha-blocker

**Beta-3 Agonists:**
- Mirabegron for OAB component
- May combine with alpha-blocker
- Mechanism: Relaxes detrusor

**Novel Targets:**
- Botulinum toxin injection
- Fexapotide triflutate
- NX-1207

## Long-Term Outcomes

**Medical Therapy:**
- 10-year progression rate: 31% (placebo) vs 12% (combo)
- REDUCE trial: Long-term finasteride
- Dropout rate important consideration

**Surgical Durability:**
| Procedure | Re-treatment Rate |
|-----------|-------------------|
| TURP | 5-10% at 10 years |
| HoLEP | 1-5% at 10 years |
| GreenLight | 10-15% at 5 years |
| UroLift | 13% at 5 years |

## Special Populations

**Urinary Retention:**
- Alpha-blocker x 3 days before trial of void
- TWOC success: 50-70%
- Finasteride improves TWOC success

**Chronic Kidney Disease:**
- May improve with treatment
- Post-obstructive diuresis
- Monitor electrolytes

**Anticoagulation:**
- GreenLight preferred
- UroLift, Rezum options
- TURP: Hold anticoagulation

## Quality Metrics

**Surgical Outcomes:**
- Stone-free rate after TURP with stones
- Transfusion rate
- Readmission rate
- Sexual function preservation

**Patient-Reported Outcomes:**
- IPSS change
- Quality of life improvement
- Sexual function instruments`,
      keyTerms: [
        { term: 'fexapotide triflutate', definition: 'Injectable proapoptotic agent under investigation for BPH' },
        { term: 'TWOC', definition: 'Trial without catheter - assessing ability to void after acute retention' },
        { term: 'post-obstructive diuresis', definition: 'Excessive urine output after relief of chronic urinary obstruction' },
      ],
      clinicalNotes: 'Long-term finasteride use associated with small increased risk of high-grade prostate cancer in REDUCE trial. The clinical significance remains debated. Counsel patients appropriately.',
    },
  },

  media: [],
  citations: [
    {
      id: 'aua-bph-guidelines',
      type: 'article',
      title: 'Surgical Management of Benign Prostatic Hyperplasia',
      source: 'AUA Guideline',
    },
  ],
  crossReferences: [
    { targetId: 'procedure-turp', targetType: 'topic', relationship: 'related', label: 'TURP' },
  ],
  tags: {
    systems: ['urinary', 'male reproductive'],
    topics: ['prostate', 'urology'],
    clinicalRelevance: 'high',
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default benignProstaticHyperplasia;
