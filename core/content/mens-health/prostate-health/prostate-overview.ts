/**
 * Prostate Health Overview
 *
 * Comprehensive educational content covering prostate anatomy, BPH,
 * prostatitis, prostate cancer, PSA testing, DRE, prostate biopsy,
 * and treatment options including watchful waiting, medications, and surgery.
 */

import { EducationalContent } from '../../types';

export const prostateOverviewContent: EducationalContent = {
  id: 'mens-health-prostate-overview',
  type: 'topic',
  name: 'Prostate Health Overview',
  alternateNames: ['Prostate Gland Health', 'Prostate Conditions', 'Prostate Care'],

  levels: {
    1: {
      level: 1,
      summary: 'The prostate is a small gland in men that helps make fluid for sperm. It can cause problems as men get older, but many treatments are available.',
      explanation: `## What Is the Prostate?

The prostate is a small gland about the size of a walnut. Only men have one. It sits just below the bladder and wraps around the tube (urethra) that carries urine out of the body. The prostate makes some of the fluid that mixes with sperm.

## Common Prostate Problems

**Enlarged Prostate (BPH)**
As men get older, the prostate often grows bigger. This is called BPH (benign prostatic hyperplasia). "Benign" means it is not cancer. When the prostate gets bigger, it can squeeze the urine tube and make it harder to pee. Signs include:
- Needing to pee more often, especially at night
- Weak urine stream
- Feeling like your bladder is not empty after peeing
- Trouble starting to pee

**Prostate Infection (Prostatitis)**
Sometimes the prostate gets swollen or infected, causing pain, trouble peeing, and flu-like symptoms. It can happen at any age.

**Prostate Cancer**
Prostate cancer is one of the most common cancers in men. It usually grows very slowly. Finding it early gives the best chance for treatment.

## How Doctors Check the Prostate

**PSA Blood Test**
A simple blood test that measures a protein made by the prostate. Higher levels can be a sign of a problem, but high PSA does not always mean cancer.

**Digital Rectal Exam (DRE)**
The doctor uses a gloved finger to feel the prostate through the rectum to check for lumps or hard areas.

**Biopsy**
If tests suggest a problem, the doctor may take tiny samples of prostate tissue to look at under a microscope.

## Treatment Options

- **Watchful Waiting:** The doctor may just monitor you with regular check-ups.
- **Medications:** Pills can shrink the prostate or relax muscles to make peeing easier.
- **Surgery:** If other treatments do not work, surgery can remove part or all of the prostate.`,
      keyTerms: [
        { term: 'prostate', definition: 'A small gland in men below the bladder that helps make fluid for sperm' },
        { term: 'BPH', definition: 'Benign prostatic hyperplasia -- a non-cancerous enlarged prostate' },
        { term: 'PSA test', definition: 'A blood test that checks for a protein made by the prostate' },
        { term: 'biopsy', definition: 'Taking a tiny piece of tissue to look at under a microscope' },
      ],
      analogies: [
        'The prostate is like a donut wrapped around a straw. If the donut swells, the straw gets squeezed and it is harder for liquid to flow through.',
        'A PSA test is like a smoke detector -- it warns you something might be wrong, but it does not always mean there is a fire.',
      ],
      examples: [
        'A 65-year-old man notices he gets up three times a night to use the bathroom -- this could be BPH.',
        'A man gets a routine PSA blood test at his yearly check-up to screen for prostate problems.',
      ],
      patientCounselingPoints: [
        'Talk to your doctor about prostate screening starting around age 50 (or 40-45 if you have a family history).',
        'An enlarged prostate is very common and usually not cancer.',
        'Many prostate problems are treatable, especially when found early.',
      ],
    },
    2: {
      level: 2,
      summary: 'The prostate gland contributes to seminal fluid production and commonly develops BPH, prostatitis, or cancer with age. Screening involves PSA blood tests and DRE, with treatments ranging from observation to surgery.',
      explanation: `## Prostate Anatomy and Function

The prostate gland is a walnut-sized organ (~20g in young men) located inferior to the urinary bladder and anterior to the rectum. It surrounds the prostatic urethra and produces about 30% of seminal fluid, which contains enzymes, zinc, and PSA (prostate-specific antigen) that help liquefy semen.

## Benign Prostatic Hyperplasia (BPH)

BPH is non-cancerous growth of the prostate that affects most men over 50. The enlarged gland compresses the urethra, causing lower urinary tract symptoms (LUTS):
- **Obstructive symptoms:** Weak stream, hesitancy, incomplete emptying, straining
- **Irritative symptoms:** Frequency, urgency, nocturia (nighttime urination)
- BPH does not increase cancer risk

## Prostatitis

Prostatitis is inflammation of the prostate that can be:
- **Acute bacterial:** Sudden infection with fever, pain, and urinary symptoms
- **Chronic bacterial:** Recurring infections over months
- **Chronic pelvic pain syndrome:** Most common type; pain without clear infection
- **Asymptomatic inflammatory:** Found incidentally on biopsy

## Prostate Cancer

- Most common non-skin cancer in men
- Risk factors: age (>50), family history, African American descent
- Usually slow-growing; many men die with prostate cancer rather than from it
- Gleason score grades the aggressiveness (2-10 scale)
- Staging (TNM system) determines how far cancer has spread

## Screening Methods

**PSA (Prostate-Specific Antigen)**
- Normal range: generally <4.0 ng/mL
- Elevated PSA can indicate BPH, prostatitis, or cancer
- PSA density and velocity can improve diagnostic accuracy

**Digital Rectal Exam (DRE)**
- Physician palpates the posterior surface of the prostate
- Checks for nodules, asymmetry, or induration
- Can detect cancers missed by PSA

**Prostate Biopsy**
- Transrectal ultrasound (TRUS)-guided biopsy with 12+ cores
- MRI-fusion biopsy increasingly used for targeted sampling
- Risks include infection, bleeding, and pain

## Treatment Options

| Approach | Used For | Details |
|----------|----------|---------|
| Watchful waiting | Low-risk conditions | Regular monitoring without immediate treatment |
| Alpha-blockers | BPH | Relax smooth muscle (tamsulosin, alfuzosin) |
| 5-alpha reductase inhibitors | BPH | Shrink prostate (finasteride, dutasteride) |
| Antibiotics | Bacterial prostatitis | Fluoroquinolones, trimethoprim-sulfamethoxazole |
| Surgery (TURP) | Severe BPH | Removal of prostate tissue through urethra |
| Radical prostatectomy | Prostate cancer | Complete removal of the prostate gland |
| Radiation therapy | Prostate cancer | External beam or brachytherapy (seed implants) |`,
      keyTerms: [
        { term: 'BPH', definition: 'Benign prostatic hyperplasia; non-cancerous enlargement of the prostate gland', pronunciation: 'bee-pee-aych' },
        { term: 'PSA', definition: 'Prostate-specific antigen; a protein produced by the prostate measured via blood test', pronunciation: 'pee-ess-ay' },
        { term: 'DRE', definition: 'Digital rectal exam; physical examination of the prostate through the rectum' },
        { term: 'Gleason score', definition: 'Grading system for prostate cancer aggressiveness based on tissue appearance' },
        { term: 'TURP', definition: 'Transurethral resection of the prostate; surgical procedure for BPH' },
        { term: 'prostatitis', definition: 'Inflammation or infection of the prostate gland' },
      ],
      analogies: [
        'BPH is like a garden hose being pinched -- the water (urine) still flows, but the stream is weaker.',
        'PSA is like a general alarm system; it tells you something is happening in the prostate, but not exactly what.',
        'The Gleason score is like a weather severity scale -- higher numbers mean a more aggressive cancer.',
      ],
      examples: [
        'A 55-year-old man with nocturia and weak stream is diagnosed with BPH and started on tamsulosin.',
        'A 60-year-old with PSA of 6.2 ng/mL undergoes an MRI-fusion biopsy to evaluate for cancer.',
      ],
    },
    3: {
      level: 3,
      summary: 'The prostate gland, a fibromuscular and glandular organ, is clinically significant for BPH, prostatitis syndromes, and adenocarcinoma. Diagnostic evaluation uses serum PSA kinetics, DRE, multiparametric MRI, and systematic/targeted biopsy. Management spans active surveillance to radical prostatectomy.',
      explanation: `## Prostate Anatomy

The prostate is divided into distinct zones (McNeal classification):
- **Peripheral zone (70%):** Most prostate cancers originate here; palpable on DRE
- **Transition zone (5-10%):** Site of BPH nodular development
- **Central zone (25%):** Surrounds ejaculatory ducts; rarely develops cancer
- **Anterior fibromuscular stroma:** Non-glandular tissue

Blood supply: inferior vesical artery. Venous drainage via prostatic/Batson plexus to vertebral venous plexus (explains vertebral metastases).

## Benign Prostatic Hyperplasia (BPH)

BPH involves stromal and epithelial hyperplasia in the transition zone. Pathophysiology:
- Dihydrotestosterone (DHT) drives prostatic growth via 5-alpha reductase conversion from testosterone
- Static component: physical obstruction from enlarged tissue
- Dynamic component: increased smooth muscle tone mediated by alpha-1 adrenergic receptors

**Evaluation:** International Prostate Symptom Score (IPSS), uroflowmetry, post-void residual volume, and transrectal ultrasound for prostate volume.

**Pharmacotherapy:**
- Alpha-1 blockers (tamsulosin, silodosin): relax prostatic smooth muscle; rapid onset
- 5-alpha reductase inhibitors (finasteride, dutasteride): reduce DHT; require 6+ months for effect; reduce prostate volume ~25%
- Combination therapy (alpha-blocker + 5-ARI): superior for prostates >40g
- PDE5 inhibitors (tadalafil 5mg daily): approved for BPH with or without erectile dysfunction

**Surgical options:** TURP (gold standard), laser enucleation (HoLEP), prostatic urethral lift (UroLift), water vapor thermal therapy (Rezum), and simple prostatectomy for very large glands (>80-100g).

## Prostatitis Classification (NIH)

| Category | Type | Features |
|----------|------|----------|
| I | Acute bacterial | Gram-negative organisms; systemic symptoms; treat with fluoroquinolones 4-6 weeks |
| II | Chronic bacterial | Recurrent UTIs with same organism; prolonged antibiotics |
| IIIA | Chronic pelvic pain (inflammatory) | WBCs in prostatic secretions; no bacteria |
| IIIB | Chronic pelvic pain (non-inflammatory) | No WBCs or bacteria; most common presentation |
| IV | Asymptomatic inflammatory | Incidental finding; no treatment required |

## Prostate Cancer

**Epidemiology:** Lifetime risk ~11%; median age at diagnosis 66 years. Incidence highest in African American men.

**Pathology:** >95% are adenocarcinoma arising from the peripheral zone. Graded using the Gleason system (now Grade Groups 1-5 based on ISUP 2014):
- Grade Group 1 (Gleason 3+3=6): Low risk
- Grade Group 2 (Gleason 3+4=7): Favorable intermediate
- Grade Group 3 (Gleason 4+3=7): Unfavorable intermediate
- Grade Group 4 (Gleason 8): High risk
- Grade Group 5 (Gleason 9-10): Very high risk

**Screening:** Shared decision-making recommended by AUA/USPSTF:
- PSA screening discussed at age 55-69 (age 40-45 for high-risk groups)
- PSA >4 ng/mL triggers further evaluation; some use age-adjusted cutoffs
- Free-to-total PSA ratio: <10% suggests cancer; >25% suggests BPH
- PSA velocity >0.75 ng/mL/year raises concern
- 4Kscore and PHI (Prostate Health Index) refine risk stratification

**Multiparametric MRI (mpMRI):** T2-weighted, diffusion-weighted, and dynamic contrast-enhanced imaging. PI-RADS scoring (1-5) guides biopsy decisions.

**Treatment by risk:**
- Low risk: Active surveillance (preferred) with serial PSA, DRE, and repeat biopsy
- Intermediate risk: Radical prostatectomy or radiation therapy
- High risk: Multimodal therapy (radiation + androgen deprivation therapy)
- Metastatic: ADT (chemical castration with GnRH agonists/antagonists), novel antiandrogens (enzalutamide, abiraterone), chemotherapy (docetaxel)`,
      keyTerms: [
        { term: 'peripheral zone', definition: 'Outer region of the prostate where most carcinomas arise; palpable on DRE', relatedTerms: ['transition zone', 'central zone'] },
        { term: 'DHT', definition: 'Dihydrotestosterone; the active androgen metabolite driving prostatic growth', pronunciation: 'dee-aych-tee' },
        { term: 'IPSS', definition: 'International Prostate Symptom Score; 7-question validated tool (0-35) assessing LUTS severity' },
        { term: 'Gleason score', definition: 'Histologic grading system summing the two most prevalent tumor patterns (each 1-5)', relatedTerms: ['Grade Group', 'ISUP'] },
        { term: 'PI-RADS', definition: 'Prostate Imaging Reporting and Data System; MRI-based scoring (1-5) for cancer likelihood' },
        { term: 'active surveillance', definition: 'Monitoring strategy for low-risk prostate cancer with serial PSA, DRE, and periodic biopsy' },
        { term: 'ADT', definition: 'Androgen deprivation therapy; hormonal treatment to reduce testosterone and slow cancer growth' },
      ],
      examples: [
        'A 62-year-old with PSA 5.8 and PI-RADS 4 lesion on mpMRI undergoes MRI-fusion biopsy revealing Gleason 3+4=7 (Grade Group 2).',
        'A man with moderate LUTS (IPSS 18) and 55g prostate is started on combination tamsulosin/dutasteride therapy.',
      ],
    },
    4: {
      level: 4,
      summary: 'Prostate pathology encompasses BPH driven by DHT-mediated stromal-epithelial interactions in the transition zone, infectious and non-infectious prostatitis syndromes, and adenocarcinoma primarily of the peripheral zone. Advanced diagnostics include mpMRI with PI-RADS classification, genomic biomarkers, and risk-stratified management from active surveillance to multimodal therapy.',
      explanation: `## Developmental and Zonal Anatomy

The prostate develops from urogenital sinus epithelium under the influence of fetal androgens (primarily DHT). McNeal's zonal anatomy defines four regions with distinct embryologic origins:
- **Peripheral zone:** Endodermal origin; 70% of glandular tissue; site of 70-80% of carcinomas
- **Transition zone:** Endodermal; 5-10% of tissue; exclusive site of BPH nodule formation
- **Central zone:** Wolffian duct origin; 25%; resistant to both carcinoma and BPH
- **Anterior fibromuscular stroma:** Mesodermal; continuous with detrusor and external sphincter

Neurovascular bundles run posterolateral to the prostate (Walsh bundles), critical for nerve-sparing radical prostatectomy to preserve erectile function and continence.

## BPH Pathophysiology

BPH involves stromal and glandular hyperplasia in the transition zone driven by:
1. **Androgen-estrogen imbalance:** aging increases estrogen-to-androgen ratio, sensitizing tissue to DHT
2. **Stromal-epithelial crosstalk:** FGF, TGF-beta, IGF signaling drives proliferation
3. **Reduced apoptosis:** Bcl-2 overexpression
4. **Inflammatory milieu:** chronic inflammation (~40% of BPH tissue) with COX-2/cytokine upregulation

Static (tissue bulk) vs. dynamic (alpha-1A-mediated smooth muscle tone) obstruction explains superiority of combination therapy (MTOPS, CombAT trials). Surgical advances: HoLEP (size-independent, lowest retreatment), aquablation (robotic waterjet), PAE (interventional radiology for high-risk patients).

## Prostatitis: CPPS Pathophysiology

Category III (CPPS) accounts for 90-95% of cases. Proposed mechanisms: intraprostatic urine reflux, pelvic floor myofascial dysfunction, neurogenic inflammation (TRPV1/substance P), autoimmune response, and biofilm-associated occult infection. UPOINT phenotyping guides multimodal therapy (alpha-blockers, phytotherapy, pelvic floor PT, CBT).

## Prostate Cancer: Molecular Landscape

Key genomic alterations: TMPRSS2-ERG fusion (50%), PTEN loss (PI3K/AKT activation), SPOP mutations (~10%), BRCA1/2 and ATM (DNA repair deficiency; PARP inhibitor sensitivity), dMMR (~3-5%; pembrolizumab responsive).

**Advanced biomarkers:** PHI, 4Kscore, PCA3 urine test, SelectMDx, ConfirmMDx (epigenetic), tissue-based genomic classifiers (Decipher, Prolaris, Oncotype DX Prostate).

**Treatment advances:** Focal therapy (HIFU, cryotherapy, IRE) for unilateral low/intermediate-risk disease; SBRT hypofractionation; PSMA-PET/CT for staging; 177Lu-PSMA-617 radioligand therapy for mCRPC.`,
      keyTerms: [
        { term: 'TMPRSS2-ERG fusion', definition: 'Most common genomic rearrangement in prostate cancer; ERG oncogene under androgen-driven promoter' },
        { term: 'PTEN', definition: 'Tumor suppressor frequently lost in aggressive prostate cancer; activates PI3K/AKT pathway' },
        { term: 'CPPS', definition: 'Chronic pelvic pain syndrome (Category III prostatitis); most common prostatitis presentation' },
        { term: 'PSMA', definition: 'Prostate-specific membrane antigen; target for PET imaging and radioligand therapy' },
        { term: 'mCRPC', definition: 'Metastatic castration-resistant prostate cancer; progression despite ADT' },
        { term: 'HoLEP', definition: 'Holmium laser enucleation of the prostate; size-independent BPH surgery' },
        { term: 'UPOINT', definition: 'Clinical phenotyping system for CPPS guiding multimodal therapy' },
      ],
      clinicalNotes: `Active surveillance: confirmatory biopsy within 6-12 months, PSA q6 months, DRE annually, repeat biopsy q2-4 years. ~30% require intervention within 10 years. Genomic classifiers refine AS candidacy. mCRPC sequencing (antiandrogens, taxanes, PARP inhibitors, radioligand therapy) requires multidisciplinary tumor board.`,
    },
    5: {
      level: 5,
      summary: 'Prostate pathology integrates zonal anatomy, androgen-dependent stromal-epithelial signaling, genomic alterations (TMPRSS2-ERG, PTEN loss, DNA repair defects), advanced imaging (mpMRI, PSMA-PET), and precision medicine approaches including genomic classifiers, PARP inhibitors, radioligand therapy, and immunotherapy for molecularly defined subsets.',
      explanation: `## Advanced Prostate Pathophysiology and Precision Oncology

### AR Signaling and Resistance in CRPC

The androgen receptor (AR) axis is central to prostate biology. CRPC resistance mechanisms include:
- **AR amplification/overexpression** (~30% of CRPC): activation at castrate testosterone levels
- **AR point mutations** (L702H, T878A, W742C): broadened ligand specificity (antiandrogen withdrawal syndrome)
- **AR-V7 splice variant:** constitutively active (lacking LBD); predicts enzalutamide/abiraterone resistance, taxane sensitivity
- **Intratumoral steroidogenesis:** upregulated CYP17A1 (rationale for abiraterone)
- **GR bypass:** glucocorticoid receptor substitutes for AR-driven transcription

### Neuroendocrine Differentiation (t-NEPC)

Occurs in ~15-20% of mCRPC under prolonged AR inhibition. Features: loss of AR/PSA expression, RB1/TP53 co-loss, N-MYC amplification, EZH2 overexpression. Treated with platinum-based chemotherapy (cisplatin/etoposide).

### Genomic Biomarkers and Therapeutic Implications

| Alteration | Prevalence | Therapeutic Implication |
|-----------|-----------|----------------------|
| BRCA2 | 12-15% | PARP inhibitor; platinum sensitivity |
| ATM | 5-8% | PARP inhibitor (variable) |
| CDK12 biallelic loss | 5-7% | Neoantigen burden; immunotherapy potential |
| dMMR/MSI-H | 3-5% | Pembrolizumab |
| PTEN loss | 40-50% | AKT inhibitors (trial) |
| RB1/TP53 co-loss | 15-20% | Screen for NEPC; platinum chemotherapy |

### PSMA-PET/CT Imaging

68Ga-PSMA-11 and 18F-DCFPyL detect disease at PSA <0.5 ng/mL (sensitivity 70-90% vs ~30% conventional). PSMA-avid oligometastatic disease benefits from metastasis-directed SBRT (ORIOLE, STOMP). PSMA-negative disease suggests neuroendocrine differentiation.

### mCRPC Treatment Sequencing

1. **mHSPC:** ADT + docetaxel or novel antiandrogen; triplet therapy (ADT + docetaxel + darolutamide per ARASENS)
2. **mCRPC first-line:** Novel antiandrogen or taxane; genomic testing for actionable alterations
3. **HRD-positive:** PARP inhibitor (PROfound, TRITON3, TALAPRO-2)
4. **dMMR/MSI-H:** Pembrolizumab
5. **Radioligand:** 177Lu-PSMA-617 post-docetaxel/antiandrogen (VISION trial)
6. **Bone-targeted:** Radium-223 for symptomatic bone-predominant disease

### Screening: USPSTF Grade C (Ages 55-69)

ProtecT 15-year: low mortality across arms but higher metastasis with monitoring. ERSPC 16-year: 20% relative mortality reduction (NNS=570). Overdiagnosis 20-50%; mitigated by PCPT 2.0, mpMRI triage, and genomic biomarkers.`,
      keyTerms: [
        { term: 'AR-V7', definition: 'Constitutively active AR splice variant lacking LBD; predicts enzalutamide/abiraterone resistance' },
        { term: 't-NEPC', definition: 'Treatment-emergent neuroendocrine prostate cancer; AR-independent variant with RB1/TP53 co-loss' },
        { term: '177Lu-PSMA-617', definition: 'PSMA-targeted radioligand therapy (Pluvicto) for mCRPC (VISION trial)' },
        { term: 'HRD', definition: 'Homologous recombination deficiency (BRCA1/2, ATM); PARP inhibitor and platinum sensitivity' },
        { term: 'Decipher', definition: '22-gene genomic classifier predicting metastatic risk; guides adjuvant decisions' },
      ],
      clinicalNotes: `NCCN recommends germline/somatic genomic testing for all mCRPC and high-risk localized disease. BRCA2 carriers (~8.6-fold risk) should screen at age 40. PSMA-PET/CT is first-line imaging for biochemical recurrence. EMBARK trial supports enzalutamide + ADT for high-risk biochemical recurrence. Multidisciplinary tumor boards are essential for mCRPC sequencing.`,
    },
  },

  media: [
    { id: 'prostate-zonal-anatomy-diagram', type: 'diagram', filename: 'prostate-zonal-anatomy.svg', title: 'Prostate Zonal Anatomy (McNeal Classification)', description: 'Peripheral, transition, central zones and anterior fibromuscular stroma.' },
    { id: 'bph-urinary-obstruction-diagram', type: 'diagram', filename: 'bph-obstruction.svg', title: 'BPH and Urinary Obstruction', description: 'Normal prostate vs. BPH showing urethral compression.' },
    { id: 'gleason-grading-illustration', type: 'image', filename: 'gleason-grade-groups.png', title: 'Gleason Grade Groups (ISUP 2014)', description: 'Histological patterns for Gleason grades 1-5.' },
  ],

  citations: [
    {
      id: 'campbell-walsh-urology',
      type: 'textbook',
      title: 'Campbell-Walsh-Wein Urology, 12th Edition',
      source: 'Elsevier',
      chapter: 'Chapters 105-115: Prostate',
    },
    {
      id: 'nccn-prostate-guidelines',
      type: 'website',
      title: 'NCCN Guidelines: Prostate Cancer',
      source: 'National Comprehensive Cancer Network',
      url: 'https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1459',
    },
    {
      id: 'aua-bph-guidelines',
      type: 'website',
      title: 'AUA Guideline: Management of BPH',
      source: 'American Urological Association',
      url: 'https://www.auanet.org/guidelines-and-quality/guidelines/benign-prostatic-hyperplasia-(bph)-guideline',
    },
    {
      id: 'uspstf-psa-screening',
      type: 'article',
      title: 'Screening for Prostate Cancer: USPSTF Recommendation Statement',
      source: 'JAMA. 2018;319(18):1901-1913',
    },
  ],

  crossReferences: [
    { targetId: 'mens-health-screening-men', targetType: 'topic', relationship: 'related', label: 'Preventive Screening for Men' },
    { targetId: 'mens-health-well-male-exam', targetType: 'topic', relationship: 'related', label: 'Well Male Exam' },
  ],
  tags: {
    systems: ['urogenital', 'reproductive'],
    structures: ['prostate gland', 'prostatic urethra', 'seminal vesicles'],
    topics: ['anatomy', 'pathology', 'oncology', 'urology', 'screening'],
    keywords: ['prostate', 'BPH', 'prostatitis', 'prostate cancer', 'PSA', 'DRE', 'biopsy', 'TURP', 'active surveillance', 'radical prostatectomy', 'PSMA', 'Gleason'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['surgery', 'medicine'] },
  },
  createdAt: '2026-01-30',
  updatedAt: '2026-01-30',
  version: 1,
  status: 'published',
  contributors: ['Claude Opus 4.5'],
};
