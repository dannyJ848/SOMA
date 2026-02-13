import { EducationalContent } from '../../../types';

export const prostateConditionsContent: EducationalContent = {
  id: 'reproductive-prostate-conditions',
  type: 'condition',
  name: 'Prostate Conditions',
  alternateNames: ['Prostate disease', 'BPH', 'Prostate cancer', 'Prostatitis'],
  levels: {
    1: {
      level: 1,
      summary: 'The prostate is a small gland in men that can cause problems as they age, including enlargement (BPH), infection (prostatitis), or cancer.',
      explanation: `The prostate is a walnut-sized gland that sits below the bladder in people with male anatomy. It surrounds the urethra (the tube that carries urine and semen out of the body).

**Common Prostate Problems:**

**Benign Prostatic Hyperplasia (BPH) - Enlarged Prostate**
- Very common in men over 50
- The prostate grows larger and can squeeze the urethra
- NOT cancer
- Symptoms: Trouble starting to urinate, weak stream, frequent urination, getting up at night to pee
- Treatments: Medications or surgery if needed

**Prostatitis - Prostate Infection/Inflammation**
- Can happen at any age
- May be caused by bacteria or other causes
- Symptoms: Pain with urination, pelvic pain, fever (if bacterial)
- Treatments: Antibiotics for bacterial type, other medications for chronic forms

**Prostate Cancer**
- One of the most common cancers in men
- Usually grows slowly
- Often found through PSA blood test or rectal exam
- Many men live long lives with or after prostate cancer treatment
- Treatments: Watchful waiting, surgery, radiation, hormone therapy

**When to See a Doctor:**
- Trouble urinating or changes in urination
- Blood in urine or semen
- Pain in the pelvis, back, or hips
- Painful ejaculation

**Screening:**
- PSA test (blood test) and rectal exam can help detect problems
- Talk to your doctor about whether screening is right for you (usually starts around age 50)`,
      keyTerms: [
        { term: 'Prostate', definition: 'A small gland below the bladder that produces fluid for semen' },
        { term: 'BPH', definition: 'Benign prostatic hyperplasia; non-cancerous enlargement of the prostate' },
        { term: 'PSA', definition: 'Prostate-specific antigen; a blood test that can help detect prostate problems' },
        { term: 'Urethra', definition: 'The tube that carries urine from the bladder out of the body' },
      ],
      analogies: [
        'The prostate surrounding the urethra is like a donut around a straw - if the donut grows, it squeezes the straw',
        'BPH is like a traffic jam - the road (urethra) gets narrower and flow slows down',
      ],
      patientCounselingPoints: [
        'Prostate problems are very common as men age',
        'BPH is not cancer and does not turn into cancer',
        'Many prostate conditions can be managed effectively',
        'Talk to your doctor about screening options',
      ],
    },
    2: {
      level: 2,
      summary: 'Prostate conditions include benign prostatic hyperplasia (BPH), prostatitis syndromes, and prostate cancer, each with distinct presentations, risk factors, and management approaches.',
      explanation: `The prostate gland can be affected by several conditions, with symptoms often overlapping.

**Benign Prostatic Hyperplasia (BPH):**

*Definition*: Non-malignant enlargement of the prostate due to proliferation of stromal and epithelial cells

*Risk Factors*
- Age (rare before 40; 50% by age 60; 90% by age 85)
- Family history
- Obesity, diabetes, metabolic syndrome

*Symptoms (Lower Urinary Tract Symptoms - LUTS)*
- Storage symptoms: Frequency, urgency, nocturia
- Voiding symptoms: Hesitancy, weak stream, straining, incomplete emptying
- Post-micturition: Dribbling

*Complications*
- Acute urinary retention
- Urinary tract infections
- Bladder stones
- Renal insufficiency (rare)

*Treatment*
- Watchful waiting (mild symptoms)
- Alpha-blockers (tamsulosin, alfuzosin): Relax smooth muscle
- 5-alpha reductase inhibitors (finasteride, dutasteride): Shrink prostate
- Combination therapy for larger glands
- Surgery: TURP, laser ablation, UroLift

**Prostatitis:**

| Type | Cause | Presentation | Treatment |
|------|-------|--------------|-----------|
| Acute bacterial | E. coli, others | Fever, dysuria, pelvic pain, tender prostate | IV then oral antibiotics |
| Chronic bacterial | Same organisms | Recurrent UTIs, chronic pelvic pain | Long-term antibiotics |
| Chronic pelvic pain syndrome | Unknown | Chronic pain without infection | Multimodal (alpha-blockers, NSAIDs, PT) |
| Asymptomatic inflammatory | Unknown | Found incidentally | Usually none needed |

**Prostate Cancer:**

*Epidemiology*
- Second most common cancer in men (after skin cancer)
- Risk increases with age, African ancestry, family history

*Screening Controversy*
- PSA testing: Sensitive but not specific
- Can detect cancers that may never cause symptoms (overdiagnosis)
- Shared decision-making recommended starting at age 50 (or 45 if high risk)

*Diagnosis*
- Elevated PSA and/or abnormal digital rectal exam
- Transrectal ultrasound-guided biopsy
- MRI increasingly used before biopsy

*Treatment (depends on stage and risk)*
- Active surveillance (low-risk)
- Radical prostatectomy
- Radiation (external beam or brachytherapy)
- Androgen deprivation therapy
- Chemotherapy (advanced disease)`,
      keyTerms: [
        { term: 'LUTS', definition: 'Lower urinary tract symptoms; bladder and urination symptoms common in BPH' },
        { term: 'Alpha-blockers', definition: 'Medications that relax prostate and bladder neck muscles to improve urine flow' },
        { term: '5-alpha reductase inhibitors', definition: 'Medications that shrink the prostate by blocking testosterone conversion to DHT' },
        { term: 'Active surveillance', definition: 'Closely monitoring low-risk prostate cancer instead of immediate treatment' },
        { term: 'TURP', definition: 'Transurethral resection of the prostate; surgery to remove prostate tissue blocking urine flow' },
      ],
      examples: [
        'A 65-year-old man with nocturia, hesitancy, and weak stream likely has BPH and may benefit from an alpha-blocker',
        'A 35-year-old man with fever, dysuria, and a tender prostate has acute bacterial prostatitis requiring antibiotics',
      ],
    },
    3: {
      level: 3,
      summary: 'Prostate pathology encompasses the hormonal and cellular mechanisms of BPH, the diagnostic classification of prostatitis syndromes, and the molecular pathogenesis and staging of prostate adenocarcinoma.',
      explanation: `**Benign Prostatic Hyperplasia:**

**Pathophysiology**
- Occurs in the transition zone (periurethral)
- True hyperplasia (increased cell number) not hypertrophy
- Both stromal and glandular proliferation
- DHT (dihydrotestosterone) is primary androgen driver
- Stromal-epithelial interactions important

**Hormonal Regulation**
- Testosterone → DHT via 5α-reductase (type 2)
- DHT binds androgen receptor in prostate cells
- Growth factors: FGF, EGF, TGF-β
- Estrogen may promote stromal growth with aging

**Histopathology**
- Nodular hyperplasia
- Glands vary from dilated to compressed
- Stromal component often predominant
- Corpora amylacea (protein concretions) common

**Symptom Pathophysiology**
- Static component: Mechanical obstruction from tissue mass
- Dynamic component: Smooth muscle tone (alpha-1 adrenergic mediated)
- Explains dual therapy approach

**Prostatitis Classification (NIH):**

| Category | Name | Features |
|----------|------|----------|
| I | Acute bacterial | Acute infection; positive cultures |
| II | Chronic bacterial | Recurrent infections; positive cultures |
| IIIA | Chronic pelvic pain syndrome - inflammatory | WBCs in semen/EPS, negative cultures |
| IIIB | Chronic pelvic pain syndrome - non-inflammatory | No WBCs, negative cultures |
| IV | Asymptomatic inflammatory | WBCs found incidentally; no symptoms |

**Acute Bacterial Prostatitis**
- Usually gram-negative (E. coli 80%)
- Ascending infection via urethra
- Can cause sepsis; avoid prostate massage
- Treatment: Fluoroquinolone or TMP-SMX × 4-6 weeks

**Prostate Cancer:**

**Risk Factors**
- Age (rare <50; median diagnosis 66)
- Race (highest in African Americans)
- Family history (2-3x risk with first-degree relative)
- BRCA1/2 mutations

**Molecular Pathogenesis**
- TMPRSS2-ERG fusion (50% of cases)
- PTEN loss
- TP53 mutations (advanced disease)
- AR amplification (castration-resistant)
- DNA repair defects (BRCA2, ATM)

**Histopathology**
- Adenocarcinoma (>95%)
- Acinar pattern most common
- Arises in peripheral zone (70%)
- Grading: Gleason system

**Gleason Grading**
- Pattern 1-5 based on glandular architecture
- Grade Group = primary + secondary pattern
- Grade Group 1: Gleason 3+3=6 (favorable)
- Grade Group 2: Gleason 3+4=7
- Grade Group 3: Gleason 4+3=7
- Grade Group 4: Gleason 8
- Grade Group 5: Gleason 9-10 (worst prognosis)

**Staging**
- T1: Not palpable, found on biopsy
- T2: Confined to prostate
- T3: Extends through capsule or into seminal vesicles
- T4: Invades adjacent structures
- N1: Regional lymph node involvement
- M1: Distant metastases (bone most common)

**Risk Stratification**
- Low: T1-T2a, Gleason ≤6, PSA <10
- Intermediate: T2b-T2c or Gleason 7 or PSA 10-20
- High: T3a or Gleason 8-10 or PSA >20
- Very high: T3b-T4 or primary Gleason 5`,
      keyTerms: [
        { term: 'TMPRSS2-ERG fusion', definition: 'Common chromosomal rearrangement in prostate cancer creating an androgen-regulated oncogene' },
        { term: 'Gleason score', definition: 'Grading system for prostate cancer based on glandular architecture; sum of two most common patterns' },
        { term: 'Transition zone', definition: 'Periurethral portion of prostate where BPH originates' },
        { term: 'Peripheral zone', definition: 'Outer portion of prostate where most cancers arise' },
        { term: 'EPS', definition: 'Expressed prostatic secretions; fluid obtained by prostate massage for analysis' },
      ],
      examples: [
        'A biopsy showing Gleason 4+3=7 (Grade Group 3) represents intermediate-risk cancer with moderately aggressive features',
        'TMPRSS2-ERG fusion places ERG oncogene under androgen regulation, explaining why prostate cancer is hormone-driven',
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced understanding of prostate conditions includes the molecular mechanisms of androgen signaling and resistance, genomic classification of prostate cancer, and the cellular mechanisms underlying chronic pelvic pain syndrome.',
      explanation: `**Androgen Receptor Signaling:**

**Normal Pathway**
- Testosterone enters cell
- 5α-reductase converts to DHT
- DHT binds AR with higher affinity
- AR translocates to nucleus
- Binds AREs (androgen response elements)
- Regulates gene transcription

**In BPH**
- AR signaling promotes growth
- Stromal-epithelial paracrine signaling (growth factors)
- Aging changes in androgen:estrogen ratio
- 5α-reductase inhibitors block DHT formation

**In Prostate Cancer**
- Initial hormone dependence
- Androgen deprivation therapy (ADT) effective initially
- Eventually develops castration resistance

**Castration-Resistant Prostate Cancer (CRPC):**

*Mechanisms of Resistance*
1. AR amplification or overexpression
2. AR mutations (altered ligand specificity)
3. AR splice variants (AR-V7: constitutively active, no ligand-binding domain)
4. Intratumoral androgen synthesis
5. Glucocorticoid receptor bypass
6. Neuroendocrine differentiation (AR-independent)

*AR-V7*
- Splice variant lacking ligand-binding domain
- Constitutively active
- Not inhibited by enzalutamide or abiraterone
- Predictive biomarker for treatment selection

**Prostate Cancer Genomics:**

**Molecular Subtypes**
- ERG fusion-positive (~50%)
- ETS fusion-positive, non-ERG (10%)
- SPOP mutant (10%)
- FOXA1 mutant (3-5%)
- IDH1 mutant (1%)
- Other/unknown

**DNA Repair Deficiency**
- BRCA2, ATM, CHEK2 mutations in 15-20% of metastatic PCa
- Associated with more aggressive disease
- Sensitive to PARP inhibitors and platinum chemotherapy
- Indication for germline testing

**PI3K/AKT Pathway**
- PTEN loss in ~40% of primary tumors, ~70% of metastatic
- Activates PI3K/AKT/mTOR signaling
- Reciprocal relationship with AR signaling
- Target for combination therapy

**Chronic Pelvic Pain Syndrome (CP/CPPS):**

**Pathophysiology**
- Not primarily infectious in most cases
- Neurogenic inflammation
- Central sensitization
- Pelvic floor muscle dysfunction
- Psychological factors (stress, anxiety)

**Proposed Mechanisms**
- Urine reflux into prostatic ducts
- Autoimmune response to prostatic antigens
- Neuroplastic changes in spinal cord
- Mast cell activation

**Phenotyping (UPOINT System)**
- U: Urinary symptoms
- P: Psychosocial dysfunction
- O: Organ-specific symptoms
- I: Infection
- N: Neurologic/systemic
- T: Tenderness (pelvic floor)

**Treatment by Phenotype**
- Alpha-blockers for urinary symptoms
- Cognitive behavioral therapy for psychosocial
- Antibiotics only if infection evidence
- Neuromodulators (amitriptyline, gabapentin)
- Pelvic floor physical therapy

**PSA Biology:**

**Production**
- Serine protease produced by prostatic epithelium
- Liquefies semen
- Normally minimal amounts enter bloodstream
- Disruption of basement membrane allows systemic release

**PSA Forms**
- Free PSA: Lower % in cancer
- Complexed PSA (bound to protease inhibitors)
- proPSA: Precursor form; elevated in cancer
- PHI (Prostate Health Index): Combines PSA, free PSA, [-2]proPSA

**PSA Kinetics**
- PSA velocity: Rate of change over time
- PSA doubling time: Time to double
- Both associated with cancer aggressiveness`,
      keyTerms: [
        { term: 'AR-V7', definition: 'Androgen receptor splice variant 7; constitutively active form lacking ligand-binding domain, associated with treatment resistance' },
        { term: 'CRPC', definition: 'Castration-resistant prostate cancer; progresses despite castrate testosterone levels' },
        { term: 'PTEN', definition: 'Phosphatase and tensin homolog; tumor suppressor commonly lost in prostate cancer' },
        { term: 'UPOINT', definition: 'Phenotyping system for chronic pelvic pain syndrome guiding targeted therapy' },
        { term: 'PHI', definition: 'Prostate Health Index; composite biomarker improving specificity for prostate cancer detection' },
      ],
      clinicalNotes: 'AR-V7 detection in circulating tumor cells predicts resistance to enzalutamide and abiraterone, favoring taxane chemotherapy. Germline testing for DNA repair genes is now recommended for all men with metastatic prostate cancer, as ~12% carry actionable mutations.',
    },
    5: {
      level: 5,
      summary: 'Contemporary prostate disease management integrates advanced imaging, genomic biomarkers, and precision medicine approaches, with evolving paradigms for screening, active surveillance, and treatment of advanced disease.',
      explanation: `**Prostate Cancer Detection:**

**PSA Screening Controversy**
- ERSPC: 20% mortality reduction at 16 years (NNS 570 to prevent 1 death)
- PLCO: No mortality benefit (but high contamination in control arm)
- USPSTF (2018): Shared decision-making for men 55-69

**Risk Calculators**
- PCPT Risk Calculator: Incorporates PSA, DRE, family history, prior biopsy
- Rotterdam/ERSPC Risk Calculator
- Improve specificity of PSA alone

**Biomarkers Beyond PSA**
| Test | Specimen | Use |
|------|----------|-----|
| PHI | Blood | Biopsy decision |
| 4Kscore | Blood | Biopsy decision |
| PCA3 | Urine | Repeat biopsy decision |
| SelectMDx | Urine | Biopsy decision |
| ConfirmMDx | Tissue | Repeat biopsy decision |
| Decipher | Tissue | Post-prostatectomy prognosis |
| Oncotype DX | Tissue | Active surveillance candidacy |
| Prolaris | Tissue | Risk stratification |

**Multiparametric MRI (mpMRI)**
- T2, DWI (ADC), DCE sequences
- PI-RADS scoring (1-5)
- Detects clinically significant cancer
- MRI-targeted biopsy improves yield
- Can reduce biopsies in PI-RADS 1-2

**Active Surveillance:**

**Eligibility (NCCN)**
- Very low risk: T1c, Gleason 6, PSA <10, <3 positive cores, <50% any core
- Low risk: T1-T2a, Gleason 6, PSA <10
- Favorable intermediate risk: May consider in select cases

**Protocol**
- PSA every 6 months
- DRE every 12 months
- Confirmatory biopsy within 12 months
- Repeat biopsy every 2-5 years
- mpMRI may inform timing

**Reclassification Triggers**
- Gleason grade group upgrade
- Increase in positive cores or percent involvement
- Clinical stage progression

**Advanced Prostate Cancer Treatment:**

**Metastatic Hormone-Sensitive (mHSPC)**
- ADT alone is no longer standard
- ADT + docetaxel (CHAARTED, STAMPEDE)
- ADT + abiraterone (LATITUDE, STAMPEDE)
- ADT + enzalutamide (ENZAMET, ARCHES)
- ADT + apalutamide (TITAN)
- Triplet therapy emerging (ADT + docetaxel + darolutamide)

**Castration-Resistant Prostate Cancer (CRPC)**

*Without Metastases (nmCRPC)*
- Rising PSA despite ADT, no mets on imaging
- Apalutamide, enzalutamide, or darolutamide
- Based on SPARTAN, PROSPER, ARAMIS trials

*Metastatic CRPC (mCRPC)*
- Taxanes: Docetaxel, cabazitaxel
- AR-targeting: Abiraterone, enzalutamide
- PARP inhibitors: Olaparib, rucaparib (DNA repair-deficient)
- Immunotherapy: Sipuleucel-T
- Radiopharmaceuticals: Radium-223 (bone mets), Lu-177 PSMA
- Pembrolizumab (MSI-H/dMMR tumors)

**PSMA-Targeted Therapy**
- Prostate-specific membrane antigen
- PSMA-PET: Superior staging
- Lu-177 PSMA-617: Theranostic
- VISION trial: OS benefit in mCRPC

**Germline/Somatic Testing**
- All metastatic PCa: Germline testing recommended
- Somatic tumor testing for actionable mutations
- DNA repair genes: BRCA1/2, ATM, CHEK2, PALB2, RAD51
- Microsatellite instability status
- Guides PARP inhibitor and platinum eligibility

**BPH Advanced Management:**

**Minimally Invasive Options**
| Procedure | Mechanism | Advantages | Considerations |
|-----------|-----------|------------|----------------|
| UroLift | Prostatic urethral lift | Preserves ejaculation | Small prostate only |
| Rezum | Steam ablation | Office-based | Temporary catheter |
| Aquablation | Robotic waterjet | Consistent results | Requires OR |
| PAE | Embolization | Preserves ejaculation | IR procedure |

**Combination Medical Therapy**
- Alpha-blocker + 5-ARI (MTOPS, CombAT trials)
- Reduces progression more than monotherapy
- Reserved for larger prostates (>30-40cc)`,
      keyTerms: [
        { term: 'mpMRI', definition: 'Multiparametric MRI; combines T2, diffusion, and contrast sequences to detect prostate cancer' },
        { term: 'PI-RADS', definition: 'Prostate Imaging Reporting and Data System; standardized scoring (1-5) for prostate MRI suspicion' },
        { term: 'Lu-177 PSMA', definition: 'Lutetium-177 PSMA-617; radioligand therapy targeting PSMA for metastatic CRPC' },
        { term: 'PARP inhibitors', definition: 'Drugs exploiting synthetic lethality in tumors with DNA repair defects; olaparib, rucaparib approved for PCa' },
        { term: 'mHSPC', definition: 'Metastatic hormone-sensitive prostate cancer; now treated with intensified therapy upfront' },
      ],
      clinicalNotes: 'The treatment landscape for prostate cancer has evolved dramatically. For metastatic hormone-sensitive disease, ADT alone is no longer adequate - combination with either docetaxel or a novel hormonal agent is standard. PSMA-PET imaging has superior sensitivity compared to conventional imaging and is changing staging practices. For mCRPC, sequencing of therapies remains challenging, but germline and somatic testing help identify patients who benefit from PARP inhibitors.',
    },
  },
  media: [],
  citations: [
    {
      id: 'ref-1',
      type: 'article',
      title: 'NCCN Clinical Practice Guidelines in Oncology: Prostate Cancer',
      source: 'National Comprehensive Cancer Network',
      url: 'https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1459',
    },
    {
      id: 'ref-2',
      type: 'article',
      title: 'AUA/ASTRO Guideline: Clinically Localized Prostate Cancer',
      source: 'Journal of Urology',
      authors: ['Eastham, J.A.', 'et al.'],
      url: 'https://www.auanet.org/guidelines',
    },
  ],
  crossReferences: [
    { targetId: 'reproductive-erectile-dysfunction', targetType: 'condition', relationship: 'related', label: 'Erectile Dysfunction' },
    { targetId: 'reproductive-male-infertility', targetType: 'condition', relationship: 'related', label: 'Male Infertility' },
  ],
  tags: {
    systems: ['reproductive', 'urinary'],
    topics: ['pathology', 'oncology', 'urology'],
    keywords: ['prostate', 'BPH', 'prostate cancer', 'PSA', 'prostatitis', 'CRPC'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'medicine'],
    },
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
