/**
 * Prostate Cancer - Reproductive System
 *
 * Comprehensive content on prostate cancer including risk factors,
 * screening, histology, grading, staging, and treatment.
 */

import { EducationalContent } from '../../../types';

export const prostateCancer: EducationalContent = {
  id: 'reproductive-prostate-cancer',
  type: 'condition',
  name: 'Prostate Cancer',
  alternateNames: ['Prostate Carcinoma', 'Adenocarcinoma of the Prostate'],

  levels: {
    1: {
      level: 1,
      summary: 'Prostate cancer is cancer that starts in the prostate gland. It is common in older men. Many cases grow slowly and may not need treatment. Screening with PSA blood tests can find it early.',
      explanation: `## What Is Prostate Cancer?

Prostate cancer starts in the prostate, a small gland that makes fluid for semen.

### The Prostate Gland

- Size of a walnut
- Located below the bladder
- Surrounds the urethra (tube for urine)
- Makes fluid that nourishes sperm
- Grows with age

### Who Gets Prostate Cancer?

- Most common cancer in men (except skin cancer)
- Usually in men over 50
- Average age at diagnosis is 66
- More common in African American men
- Family history increases risk

### Risk Factors

**Age:**
- Risk increases with age
- Rare before 40
- 60% of cases in men over 65

**Family History:**
- Father or brother with prostate cancer
- Risk doubles with one relative
- Higher with multiple relatives

**Race:**
- African American men have highest risk
- Asian men have lower risk

**Other Factors:**
- Obesity may increase risk
- Diet high in red meat may increase risk

### Screening

**PSA Test:**
- Blood test for prostate-specific antigen
- Higher levels may indicate cancer
- Also elevated with benign enlargement
- Controversial - discuss with doctor

**Digital Rectal Exam:**
- Doctor feels prostate through rectum
- Checks for lumps or hard areas

### Symptoms

Early prostate cancer usually has no symptoms. Later symptoms may include:
- Trouble urinating
- Weak urine flow
- Blood in urine or semen
- Pain with ejaculation
- Back, hip, or pelvis pain (if spread)

### Treatment Options

**Active Surveillance:**
- Monitor slow-growing cancers
- Treatment only if changes
- For low-risk disease

**Surgery:**
- Remove prostate (prostatectomy)
- Can be robotic or open

**Radiation:**
- External beam radiation
- Brachytherapy (seeds)

**Hormone Therapy:**
- Reduces testosterone
- Slows cancer growth`,
      keyTerms: [
        { term: 'prostate', definition: 'Gland that produces fluid for semen' },
        { term: 'PSA', definition: 'Prostate-Specific Antigen; protein measured in blood' },
        { term: 'active surveillance', definition: 'Monitoring cancer without immediate treatment' },
        { term: 'prostatectomy', definition: 'Surgical removal of the prostate' },
        { term: 'testosterone', definition: 'Male hormone that can promote prostate cancer growth' },
      ],
      analogies: [
        'The prostate is like a walnut-sized donut around the urine tube - when it grows, it squeezes the tube.',
        'Active surveillance is like watching a slow-growing tree - you only cut it down if it starts to cause problems.',
      ],
      examples: [
        'About 1 in 8 men will be diagnosed with prostate cancer during their lifetime',
        'African American men are 1.7 times more likely to develop prostate cancer',
        'Many prostate cancers grow so slowly they may never cause problems',
      ],
      patientCounselingPoints: [
        'Discuss PSA screening with your doctor starting at age 50 (earlier if high risk)',
        'Most men with prostate cancer do not die from it',
        'Treatment side effects include incontinence and erectile dysfunction',
        'Active surveillance is safe for many low-risk cases',
      ],
    },
    2: {
      level: 2,
      summary: 'Prostate cancer is primarily adenocarcinoma arising from glandular tissue. Gleason grading and PSA levels guide prognosis and treatment decisions. Screening with PSA remains controversial with shared decision-making recommended. Treatment ranges from active surveillance to radical prostatectomy or radiation depending on risk stratification.',
      explanation: `## Prostate Cancer Overview

### Epidemiology

**Statistics:**
- 288,000 new cases/year (US)
- 34,000 deaths/year
- Lifetime risk: 12.5% (1 in 8)
- Death risk: 2.6%

**Risk Factors:**

Age:
- Rare <40
- 60% cases >65 years

Family History:
- Relative risk 2-3x with one affected relative
- Higher with younger age at diagnosis
- BRCA2 mutation carriers: 20-25x risk

Race/Ethnicity:
- African American: Highest incidence and mortality
- Asian: Lower risk
- Hispanic: Intermediate

Genetic Factors:
- BRCA1/BRCA2
- HOXB13
- Lynch syndrome
- Family history of breast/ovarian cancer

### Pathology

**Histologic Types:**

Acinar adenocarcinoma (95%):
- Glandular pattern
- Peripheral zone location
- Multiple foci common

Other types:
- Ductal adenocarcinoma
- Neuroendocrine carcinoma
- Small cell carcinoma
- Urothelial carcinoma
- Squamous cell carcinoma

**Anatomy:**
- Peripheral zone (70% cancers)
- Central zone (5%)
- Transitional zone (20%, also BPH)
- Anterior fibromuscular stroma (5%)

### Gleason Grading System

**Pattern Recognition:**
- Pattern 1: Well-differentiated, separate glands
- Pattern 2: More abundant, less separate
- Pattern 3: Single glands, infiltrative
- Pattern 4: Fused glands, cribriform, irregular
- Pattern 5: Sheets, cords, no gland formation

**Gleason Score:**
- Primary pattern + Secondary pattern
- Range: 2-10
- 3+3=6: Low grade
- 3+4=7: Intermediate (favorable)
- 4+3=7: Intermediate (unfavorable)
- 4+4=8, 3+5=8, 5+3=8: High grade
- 9-10: Very high grade

**Gleason Grade Groups:**
- GG1: Gleason 6
- GG2: Gleason 3+4=7
- GG3: Gleason 4+3=7
- GG4: Gleason 8
- GG5: Gleason 9-10

### Staging (TNM)

**T Stage:**
- T1: Clinically inapparent
- T2: Confined to prostate
- T3: Extraprostatic extension
- T4: Invades adjacent structures

**N Stage:**
- N0: No node involvement
- N1: Regional nodes positive

**M Stage:**
- M0: No metastasis
- M1: Distant metastasis

### PSA Testing

**Considerations:**
- Normal: <4 ng/mL
- Elevated with cancer, BPH, prostatitis
- Age-specific ranges
- Velocity (rate of rise)
- Density (PSA/prostate volume)

**Controversy:**
- PLCO trial: No mortality benefit
- ERSPC trial: Modest benefit
- Overdiagnosis of indolent disease
- Shared decision-making recommended

**Guidelines:**
- Discuss at age 50 (45 if high risk)
- Individualized approach
- Consider 2-year intervals
- Stop when life expectancy <10 years

### Risk Stratification

**NCCN Risk Groups:**

Very Low:
- T1c, Gleason 6, PSA <10
- <3 cores, <50% each
- PSA density <0.15

Low:
- T1-T2a, Gleason 6, PSA <10

Intermediate:
- Favorable: T2b-T2c OR Gleason 3+4 OR PSA 10-20
- Unfavorable: Gleason 4+3 OR primary pattern 4

High:
- T3a OR Gleason 8 OR PSA >20

Very High:
- T3b-T4 OR Gleason 9-10 OR primary pattern 5

### Treatment Overview

**Active Surveillance:**
- Very low and low risk
- PSA every 3-6 months
- DRE annually
- Repeat biopsy 6-12 months, then periodically
- Treatment if progression

**Radical Prostatectomy:**
- Open, laparoscopic, or robotic
- Pelvic lymph node dissection (high risk)
- Nerve-sparing when appropriate
- Curative intent

**Radiation Therapy:**

External beam:
- IMRT, SBRT
- Daily fractions
- 6-8 weeks
- Androgen deprivation (intermediate/high)

Brachytherapy:
- Permanent seeds (LDR)
- Temporary implants (HDR)
- Monotherapy (low risk)
- Boost with EBRT (intermediate)

**Androgen Deprivation Therapy:**
- LHRH agonists (leuprolide, goserelin)
- LHRH antagonists (degarelix)
- Antiandrogens (bicalutamide)
- Orchiectomy`,
      keyTerms: [
        { term: 'Gleason score', definition: 'Grading system based on architectural patterns; sum of primary and secondary patterns' },
        { term: 'PSA density', definition: 'PSA level divided by prostate volume; helps distinguish BPH from cancer' },
        { term: 'extraprostatic extension', definition: 'Cancer extending beyond the prostate capsule' },
        { term: 'androgen deprivation therapy', definition: 'Treatment to reduce male hormone levels' },
        { term: 'brachytherapy', definition: 'Radiation using implanted radioactive sources' },
      ],
      analogies: [
        'The Gleason score is like rating how chaotic a classroom is - higher numbers mean more disorder and worse behavior.',
        'Active surveillance is like monitoring a volcano that is not active - you watch for signs of trouble but do not intervene unless necessary.',
      ],
      examples: [
        'Gleason 3+4=7 is the most common score at diagnosis',
        'BRCA2 carriers have up to 8-fold increased risk of prostate cancer',
        'Active surveillance is appropriate for about 40% of newly diagnosed cases',
      ],
      patientCounselingPoints: [
        'PSA screening decisions should be individualized after discussion with your doctor',
        'Gleason score 6 cancer is low risk and often managed with active surveillance',
        'Prostate cancer treatment can affect urinary and sexual function',
        'Many men die with, not from, prostate cancer',
      ],
    },
    3: {
      level: 3,
      summary: 'Prostate cancer management involves risk stratification to guide treatment decisions. Localized disease may be managed with active surveillance, surgery, or radiation. Advanced disease requires androgen deprivation with novel agents including abiraterone, enzalutamide, and PARP inhibitors for specific molecular subtypes.',
      explanation: `## Detailed Prostate Cancer Management

### Active Surveillance Protocols

**Selection Criteria:**
- Gleason 6 (some centers include 3+4)
- PSA <10
- T1c or T2a
- <3 cores positive
- <50% cancer in any core
- PSA density <0.15

**Monitoring Schedule:**
- PSA every 3-6 months
- DRE annually
- Repeat biopsy at 12 months
- Then every 2-3 years
- MRI if concern for progression

**Triggers for Treatment:**
- Grade progression (Gleason >=7)
- Volume progression
- PSA rise
- Patient preference

**Outcomes:**
- 30-50% switch to treatment within 10 years
- Cancer-specific survival >98%
- Avoids overtreatment

### Surgical Management

**Radical Prostatectomy:**

Approaches:
- Retropubic open
- Laparoscopic
- Robot-assisted (da Vinci)
- Perineal (less common)

Extent:
- Prostate + seminal vesicles
- Pelvic lymphadenectomy (if high risk)
- Nerve-sparing (bilateral or unilateral)

**Nerve-Sparing:**
- Preserves erectile function
- Requires preoperative function
- Not if extracapsular extension
- Athermal technique

**Complications:**
- Urinary incontinence (5-20% at 1 year)
- Erectile dysfunction (30-80%)
- Urethral stricture
- Lymphedema (if nodes removed)

### Radiation Therapy

**External Beam:**

IMRT/VMAT:
- 76-78 Gy in conventional fractionation
- 60-70 Gy in moderate hypofractionation
- 36.25-40 Gy in ultra-hypofractionation (SBRT)

Proton therapy:
- Similar efficacy to IMRT
- Cost higher
- Limited availability

**Brachytherapy:**

LDR (permanent seeds):
- I-125 or Pd-103
- Monotherapy for low risk
- Boost with EBRT intermediate
- Contraindicated with large prostate (>60g), significant BPH

HDR (temporary):
- Ir-192
- Few fractions
- Often combined with EBRT

**Androgen Deprivation with Radiation:**

Indications:
- Intermediate risk: 4-6 months
- High risk: 2-3 years
- Very high: 2-3 years minimum

Agents:
- LHRH agonists + antiandrogen
- Improves survival

### Biochemical Recurrence

**Definition:**
- PSA rise after definitive therapy
- Prostatectomy: >0.2 ng/mL
- Radiation: Nadir + 2 ng/mL (Phoenix)

**Workup:**
- PSA doubling time
- Imaging (bone scan, CT, MRI)
- PSMA PET (most sensitive)

**Management:**
- Observation (if low risk)
- Salvage radiation (after surgery)
- Androgen deprivation
- Clinical trials

### Metastatic Disease

**First-Line:**
- Androgen deprivation (ADT)
- Docetaxel (if high volume)
- Abiraterone or enzalutamide

**Castration-Resistant (mCRPC):**

First-line:
- Abiraterone + prednisone
- Enzalutamide
- Docetaxel
- Sipuleucel-T

Second-line:
- Radium-223 (bone mets)
- Cabazitaxel
- Lutetium-177 PSMA
- PARP inhibitors (HRR-mutated)

**Novel Agents:**

Abiraterone:
- CYP17 inhibitor
- Blocks androgen synthesis
- With prednisone

Enzalutamide:
- Androgen receptor inhibitor
- Blocks binding and translocation

Darolutamide, Apalutamide:
- Non-metastatic CRPC

Olaparib, Rucaparib:
- PARP inhibitors
- For HRR gene mutations
- BRCA1/2, ATM, etc.

### Molecular Subtypes

**Genetic Testing:**
- Germline testing for all metastatic
- HRR gene mutations
- MSI-H/dMMR
- Lynch syndrome

**Implications:**
- Family screening
- Treatment selection
- PARP inhibitor eligibility
- Immunotherapy (MSI-H)

### Imaging

**Staging:**
- Bone scan
- CT abdomen/pelvis
- PSMA PET (68Ga-PSMA-11, 18F-DCFPyl)
- MRI pelvis for local staging

**PSMA PET:**
- Highly sensitive for metastases
- Guides treatment
- Restaging
- Theranostic approach`,
      keyTerms: [
        { term: 'biochemical recurrence', definition: 'Rising PSA after definitive treatment without visible metastases' },
        { term: 'castration-resistant', definition: 'Cancer progressing despite low testosterone levels' },
        { term: 'PSMA', definition: 'Prostate-Specific Membrane Antigen; target for imaging and therapy' },
        { term: 'PARP inhibitor', definition: 'Drug blocking DNA repair; effective in cancers with HRR mutations' },
        { term: 'HRR', definition: 'Homologous Recombination Repair; DNA repair pathway' },
      ],
      clinicalNotes: 'The CAPRA score (Cancer of the Prostate Risk Assessment) combines PSA, Gleason score, age, percent positive cores, and clinical stage to predict outcomes. It is useful for counseling patients and comparing risk across different clinical parameters.',
    },
    4: {
      level: 4,
      summary: 'Advanced prostate cancer management involves precision medicine approaches including PSMA-targeted therapy, genetic testing for inherited mutations, and multidisciplinary care. Survivorship issues include managing long-term androgen deprivation effects and quality of life considerations.',
      explanation: `## Advanced Prostate Cancer Topics

### Genetic Testing

**Germline Testing Indications:**
- All metastatic prostate cancer
- High-risk localized (Gleason >=8)
- Intraductal/cribriform histology
- Family history of prostate/breast/ovarian/pancreatic cancer
- Ashkenazi Jewish ancestry

**Genes to Test:**
- BRCA1, BRCA2 (most important)
- ATM, CHEK2
- PALB2
- HOXB13
- Lynch syndrome genes (MLH1, MSH2, MSH6, PMS2)

**Implications:**
- PARP inhibitor therapy
- Family cascade testing
- Screening for other cancers
- Clinical trial eligibility

### Somatic Testing

**Tumor Genomic Profiling:**
- FoundationOne, Tempus
- AR amplification/mutations
- TP53 loss
- RB1 loss (neuroendocrine differentiation)
- PTEN loss

**Liquid Biopsy:**
- ctDNA for AR mutations
- Resistance monitoring
- Non-invasive testing

### PSMA Theranostics

**Diagnostic:**
- 68Ga-PSMA-11 PET
- 18F-DCFPyl PET
- FDA approved for staging
- Detects occult metastases

**Therapeutic:**

Lutetium-177 PSMA:
- VISION trial established efficacy
- For mCRPC post-taxane
- Improved overall survival
- Radioligand therapy
- FDA approved

Actinium-225 PSMA:
- Alpha emitter
- More potent
- Clinical trials

**Eligibility:**
- PSMA PET positive
- FDG PET not discordant
- Good performance status
- Adequate bone marrow/renal function

### Neuroendocrine Differentiation

**Features:**
- Treatment-resistant
- Aggressive
- Low PSA despite burden
- AR-independent

**Diagnosis:**
- Histology (small cell, large cell)
- Synaptophysin, chromogranin
- NSE elevated
- Placental alkaline phosphatase

**Treatment:**
- Platinum-based chemotherapy (etoposide + cisplatin)
- Not AR-targeted
- Poor prognosis

### Bone Health

**Osteoporosis Risk:**
- ADT-induced bone loss
- 2-5% per year
- Fracture risk increased

**Management:**
- Calcium + vitamin D
- DEXA scanning
- Bisphosphonates or denosumab
- Lifestyle modifications

**Bone Metastases:**
- Zoledronic acid or denosumab
- Prevent skeletal-related events
- Radium-223 for symptomatic bone mets
- Pain management

### Cardiovascular Risk

**ADT Effects:**
- Increased cardiovascular events
- Metabolic syndrome
- Diabetes risk

**Management:**
- Cardiologist involvement
- Risk factor modification
- Consider intermittent ADT
- Exercise programs

### Erectile Rehabilitation

**Post-Prostatectomy:**
- Phosphodiesterase-5 inhibitors
- Vacuum erection devices
- Intracavernosal injections
- Penile implants (salvage)

**Post-Radiation:**
- Delayed onset
- PDE5 inhibitors
- Similar options

### Urinary Incontinence

**Post-Prostatectomy:**
- Most improve within 1 year
- Pelvic floor physical therapy
- Continence pads
- Male slings
- Artificial urinary sphincter

**Post-Radiation:**
- Urgency, frequency
- Hematuria
- Urethral strictures
- Cystoscopy, dilation

### Survivorship

**Long-term Issues:**
- Fatigue
- Weight gain
- Hot flashes
- Cognitive effects
- Depression/anxiety

**Management:**
- Exercise programs
- Support groups
- Mental health care
- Nutrition counseling
- Primary care coordination

### Quality of Life

**Assessment:**
- EPIC questionnaire
- FACT-P
- Patient-reported outcomes

**Interventions:**
- Symptom management
- Rehabilitation
- Palliative care integration
- Advanced care planning`,
      keyTerms: [
        { term: 'theranostics', definition: 'Using same target for both diagnosis and therapy' },
        { term: 'liquid biopsy', definition: 'Blood test detecting tumor DNA or cells' },
        { term: 'castrate-sensitive', definition: 'Prostate cancer responding to testosterone suppression' },
        { term: 'skeletal-related event', definition: 'Pathologic fracture, spinal cord compression, or need for radiation to bone' },
        { term: 'intraductal carcinoma', definition: 'Aggressive histologic variant; associated with genetic mutations' },
      ],
      clinicalNotes: 'The VISION trial demonstrated that Lutetium-177 PSMA therapy improves overall survival in metastatic castration-resistant prostate cancer after progression on androgen receptor pathway inhibitors and taxane chemotherapy. PSMA PET is required to ensure adequate target expression.',
    },
    5: {
      level: 5,
      summary: 'Expert prostate cancer care involves precision medicine, clinical trial participation, addressing disparities, and research frontiers including novel immunotherapies, next-generation AR inhibitors, and artificial intelligence applications in diagnosis and prognosis.',
      explanation: `## Expert Prostate Cancer Topics

### Clinical Trials

**Current Research Areas:**

Localized disease:
- Focal therapy (HIFU, cryotherapy, IRE)
- SBRT ultra-hypofractionation
- MRI-guided adaptive radiation

Advanced disease:
- Novel AR inhibitors
- Combination immunotherapy
- CAR-T cell therapy
- Therapeutic vaccines
- New radiopharmaceuticals

Prevention:
- 5-alpha reductase inhibitors
- Statins
- Diet interventions

**Trial Design:**
- Biomarker-driven
- Adaptive designs
- Real-world evidence
- Patient-reported outcomes

### Focal Therapy

**Rationale:**
- Treat only cancer focus
- Preserve function
- Reduce morbidity

**Modalities:**
- HIFU (High-Intensity Focused Ultrasound)
- Cryotherapy
- IRE (Irreversible Electroporation)
- Photodynamic therapy
- Focal brachytherapy

**Selection:**
- Unifocal or unilateral
- Intermediate risk
- MRI-visible
- 10-year data needed

### Artificial Intelligence

**Applications:**

Diagnosis:
- MRI lesion detection
- Pathology grading
- Risk prediction

Prognosis:
- Outcome prediction
- Treatment response
- Recurrence risk

Treatment planning:
- Radiation planning
- Surgical guidance

### Health Disparities

**African American Men:**
- 70% higher incidence
- 2x mortality rate
- More aggressive disease
- Access to care issues

**Addressing Disparities:**
- Community outreach
- Screening programs
- Clinical trial enrollment
- Precision medicine access

**Rural Disparities:**
- Limited specialist access
- Transportation barriers
- Telemedicine potential

### Research Frontiers

**Immunotherapy:**
- Sipuleucel-T (approved but limited use)
- Checkpoint inhibitors (limited efficacy)
- Prostvac (investigational)
- Combination approaches

**Therapeutic Vaccines:**
- Prostate-specific antigens
- Personalized neoantigen vaccines
- Combination with checkpoint inhibitors

**CAR-T Cell Therapy:**
- PSMA-targeting
- Clinical trials
- Solid tumor challenges

**Next-Generation Hormonal:**
- AR degraders
- Selective AR degraders (SARDs)
- Overcome resistance mutations

**Radiopharmaceuticals:**
- Alpha emitters (Actinium-225)
- Beta emitters (Lutetium-177)
- Combination approaches
- Earlier use in disease course

**Biomarker Development:**
- Circulating tumor cells
- Exosomes
- Multi-parametric models
- Response prediction

### Global Health

**Challenges:**
- Rising incidence worldwide
- Resource limitations
- PSA testing access
- Treatment availability

**Solutions:**
- Task-shifting
- Telemedicine
- Simplified protocols
- Cost-effective strategies

### Education and Awareness

**Movember Movement:**
- Global awareness
- Funding for research
- Mental health focus

**Screening Awareness:**
- Shared decision-making
- Risk stratification
- Avoid overdiagnosis

**Survivorship Education:**
- Long-term effects
- Healthy lifestyle
- Support resources`,
      keyTerms: [
        { term: 'focal therapy', definition: 'Treatment targeting only the cancerous area, sparing surrounding tissue' },
        { term: 'CAR-T', definition: 'Chimeric antigen receptor T-cell therapy; engineered immune cells' },
        { term: 'neoantigen', definition: 'New antigens formed by tumor mutations; targets for immunotherapy' },
        { term: 'SARD', definition: 'Selective androgen receptor degrader; next-generation AR targeting' },
        { term: 'overdiagnosis', definition: 'Diagnosing disease that may never cause symptoms or death' },
      ],
      clinicalNotes: `Key Clinical Pearls:

1. Germline genetic testing should be offered to all men with metastatic prostate cancer, high-risk localized disease, or significant family history. BRCA2 carriers have up to 8-fold increased risk.

2. PSMA PET is the most sensitive imaging for detecting lymph node and bone metastases in prostate cancer and is now FDA-approved for initial staging and biochemical recurrence.

3. Lutetium-177 PSMA radioligand therapy improves survival in mCRPC after AR pathway inhibitors and taxane chemotherapy based on the VISION trial.

4. Active surveillance is appropriate for many men with low-risk prostate cancer (Gleason 6) and avoids overtreatment with excellent cancer-specific survival.

5. Cardiovascular risk assessment and management are important for men on ADT, as androgen suppression increases risk of cardiovascular events and metabolic syndrome.`,
    },
  },

  media: [
    {
      id: 'prostate-anatomy',
      type: 'diagram',
      filename: 'prostate-anatomy.svg',
      title: 'Prostate Anatomy and Zones',
      description: 'Zonal anatomy and cancer distribution',
    },
  ],

  citations: [
    {
      id: 'vision-trial',
      type: 'article',
      title: 'Lutetium-177-PSMA-617 for Metastatic Castration-Resistant Prostate Cancer',
      authors: ['Sartor O', 'de Bono J', 'Chi KN', 'et al.'],
      source: 'New England Journal of Medicine',
    },
    {
      id: 'nccp-guidelines',
      type: 'article',
      title: 'NCCN Clinical Practice Guidelines in Oncology: Prostate Cancer',
      authors: ['NCCN'],
      source: 'NCCN',
    },
  ],

  crossReferences: [
    { targetId: 'reproductive-testicular-cancer', targetType: 'condition', relationship: 'related', label: 'Testicular Cancer' },
    { targetId: 'reproductive-erectile-dysfunction', targetType: 'condition', relationship: 'related', label: 'Erectile Dysfunction' },
  ],

  tags: {
    systems: ['reproductive'],
    topics: ['pathology', 'oncology', 'urology'],
    keywords: ['prostate cancer', 'PSA', 'Gleason score', 'androgen deprivation', 'active surveillance'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-28T00:00:00.000Z',
  updatedAt: '2026-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default prostateCancer;
