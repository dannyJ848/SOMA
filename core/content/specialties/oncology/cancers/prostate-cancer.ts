/**
 * Prostate Cancer Educational Content
 *
 * Comprehensive coverage of prostate cancer including:
 * - Screening and PSA testing
 * - Risk stratification (Gleason/ISUP grading)
 * - Active surveillance vs treatment
 * - Hormone therapy and advanced disease management
 */

import { EducationalContent } from '../../../types';

export const prostateCancerContent: EducationalContent = {
  id: 'oncology-prostate-cancer',
  type: 'condition',
  name: 'Prostate Cancer',
  alternateNames: ['Prostatic carcinoma', 'Prostatic adenocarcinoma', 'Prostate malignancy'],

  levels: {
    1: {
      level: 1,
      summary: 'Prostate cancer is a common cancer in men that starts in the prostate gland and usually grows slowly.',
      explanation: `The prostate is a small gland below the bladder in men. It makes fluid that is part of semen. Prostate cancer is one of the most common cancers in men.

**Key Facts:**
- Very common in older men (rare before age 40)
- Often grows slowly
- Many men with prostate cancer never need treatment
- When found early, it is very treatable

**Symptoms (may have none):**
- Trouble urinating or weak stream
- Need to urinate often, especially at night
- Blood in urine or semen
- Pain in back, hips, or pelvis (if spread)
- Many early prostate cancers cause NO symptoms

**Screening:**
- **PSA blood test**: Measures a protein made by the prostate
- **Digital rectal exam (DRE)**: Doctor feels the prostate
- Talk to your doctor about whether screening is right for you

**Diagnosis:**
- High PSA or abnormal exam leads to more testing
- Biopsy: Taking small pieces of prostate to check for cancer
- MRI: Can help find cancer and guide biopsy

**Treatment Options:**
- **Active surveillance**: Watch carefully, treat only if it grows
- **Surgery**: Remove the prostate
- **Radiation**: Kill cancer cells with high-energy rays
- **Hormone therapy**: Lower testosterone that feeds cancer
- Many men live long lives with or after prostate cancer`,
      keyTerms: [
        { term: 'prostate', definition: 'A small gland below the bladder that makes fluid for semen' },
        { term: 'PSA', definition: 'Prostate-specific antigen; a protein measured in blood tests' },
        { term: 'biopsy', definition: 'Taking small pieces of tissue to check for cancer' },
        { term: 'active surveillance', definition: 'Carefully watching cancer without treating right away' },
      ],
      analogies: [
        'The prostate is like a walnut-sized gland that wraps around the urinary tube like a donut.',
        'Active surveillance is like watching a pot that may never boil - treating only if things change.',
      ],
      examples: [
        'A 65-year-old man has a high PSA on routine blood work and gets a biopsy that shows low-risk prostate cancer. He chooses active surveillance.',
        'A man with more aggressive prostate cancer has surgery to remove his prostate and is cured.',
      ],
    },
    2: {
      level: 2,
      summary: 'Prostate cancer is stratified by PSA, Gleason score, and stage to determine if active surveillance, local treatment, or systemic therapy is appropriate.',
      explanation: `**Understanding Prostate Cancer:**

*Anatomy:*
- Prostate divided into zones (peripheral, transitional, central)
- Most cancers start in peripheral zone
- Located below bladder, in front of rectum

**Risk Factors:**
- Age (risk increases after 50)
- African American race (higher risk)
- Family history (especially BRCA2)
- High-fat diet may play a role

**Screening Controversy:**
- PSA testing can find cancer early
- But may find slow-growing cancers that never need treatment
- Shared decision-making recommended (ages 55-69)
- Consider earlier for high-risk men

**Diagnosis:**

*PSA Levels:*
- Normal usually <4 ng/mL
- Higher PSA = higher risk of cancer
- PSA can also be elevated from BPH, prostatitis, or recent ejaculation

*MRI:*
- Multiparametric MRI (mpMRI) before biopsy increasingly common
- PI-RADS scoring (1-5) indicates suspicion level
- Can guide targeted biopsy

*Biopsy:*
- Systematic (12-core) biopsy
- MRI-targeted biopsy for suspicious areas
- Transrectal or transperineal approach

**Gleason Score/Grade Group:**
- Pathologist assigns patterns (1-5) to two most common areas
- Gleason Score = sum of two patterns (e.g., 3+4=7)
- Grade Groups (1-5) simplify interpretation:
  - Group 1 (Gleason 6): Low risk
  - Group 2 (Gleason 3+4=7): Favorable intermediate
  - Group 3 (Gleason 4+3=7): Unfavorable intermediate
  - Group 4 (Gleason 8): High risk
  - Group 5 (Gleason 9-10): Very high risk

**Risk Stratification:**

*Low Risk:*
- PSA <10, Grade Group 1, Stage T1-T2a
- Active surveillance often appropriate

*Intermediate Risk:*
- PSA 10-20 or Grade Group 2-3 or Stage T2b-c
- Treatment usually recommended

*High Risk:*
- PSA >20 or Grade Group 4-5 or Stage T3+
- Aggressive treatment needed

**Treatment Options:**

*Active Surveillance:*
- For low-risk disease
- PSA every 6 months
- Repeat biopsy at intervals
- MRI monitoring
- Treat if progression

*Local Treatment:*
- Radical prostatectomy (robotic, open)
- Radiation therapy (external beam, brachytherapy)
- Side effects: Urinary incontinence, erectile dysfunction

*Hormone Therapy:*
- Lowers testosterone (medical or surgical castration)
- Used for advanced disease
- Combined with local therapy for high-risk`,
      keyTerms: [
        { term: 'Gleason score', definition: 'Grading system for prostate cancer based on how cancer cells look (range 6-10)' },
        { term: 'Grade Group', definition: 'Simplified prostate cancer grading (1-5) based on Gleason patterns' },
        { term: 'radical prostatectomy', definition: 'Surgery to remove the entire prostate gland' },
        { term: 'brachytherapy', definition: 'Radiation treatment using radioactive seeds placed in the prostate' },
        { term: 'PI-RADS', definition: 'Scoring system for prostate MRI findings (1-5 scale)' },
      ],
      analogies: [
        'Gleason grading is like grading how messy handwriting is - the more disorganized the cells look, the higher the grade.',
        'Active surveillance is like monitoring a mole - you keep an eye on it and remove it only if it starts changing.',
      ],
    },
    3: {
      level: 3,
      summary: 'Prostate cancer management requires integration of molecular markers, advanced imaging, and risk-adapted therapy ranging from active surveillance to multimodal treatment.',
      explanation: `**Molecular Pathology:**

*Genomic Classifiers:*
- Oncotype DX Prostate: 17-gene GPS score
- Decipher: 22-gene genomic classifier (metastatic risk)
- Prolaris: Cell cycle progression score
- Help distinguish aggressive from indolent disease

*Germline Testing:*
- BRCA2, BRCA1 (increased risk, more aggressive)
- Lynch syndrome genes (MLH1, MSH2, MSH6, PMS2)
- ATM, PALB2, CHEK2
- Informs treatment (PARP inhibitors) and family screening

**Advanced Imaging:**

*Multiparametric MRI:*
- T2, DWI, DCE sequences
- PI-RADS v2.1 scoring
- Sensitivity for clinically significant cancer

*PSMA PET:*
- Prostate-specific membrane antigen
- More sensitive than conventional imaging for staging
- Detects occult metastases in high-risk patients
- Changing staging and treatment approaches

**Active Surveillance Protocols:**

*Eligibility:*
- Grade Group 1 (some Grade Group 2 with low volume)
- PSA <10-20 ng/mL
- Limited tumor extent on biopsy
- No adverse pathology

*Monitoring:*
- PSA every 3-6 months
- DRE every 12 months
- Confirmatory biopsy at 6-12 months
- Surveillance biopsies every 1-2 years
- MRI at intervals

*Triggers for Treatment:*
- Grade progression (to Grade Group 3+)
- Significant PSA rise
- Increased tumor volume
- Patient preference

**Localized Disease Treatment:**

*Radical Prostatectomy:*
- Open, laparoscopic, robotic-assisted
- Nerve-sparing when appropriate
- Pelvic lymph node dissection for intermediate/high risk
- Pathologic staging informs adjuvant decisions

*Radiation Therapy:*
- EBRT: IMRT, VMAT, proton therapy
- Hypofractionation increasingly used
- Brachytherapy: LDR seeds or HDR boost
- Combined with ADT for intermediate/high risk

*Post-Treatment Monitoring:*
- PSA nadir after treatment
- Biochemical recurrence: PSA rise after treatment
  - Post-surgery: PSA ≥0.2 ng/mL
  - Post-radiation: PSA nadir + 2 ng/mL

**Hormone Therapy (ADT):**

*Indications:*
- With radiation for intermediate/high-risk
- Recurrent disease
- Metastatic disease

*Mechanisms:*
- GnRH agonists (leuprolide, goserelin)
- GnRH antagonists (degarelix, relugolix)
- Anti-androgens (bicalutamide)
- Surgical castration (orchiectomy)

*Side Effects:*
- Hot flashes, decreased libido
- Osteoporosis
- Metabolic syndrome
- Cardiovascular risk
- Cognitive effects`,
      keyTerms: [
        { term: 'Decipher', definition: '22-gene genomic classifier predicting metastatic risk in prostate cancer' },
        { term: 'PSMA PET', definition: 'Imaging scan using prostate-specific membrane antigen to detect prostate cancer' },
        { term: 'biochemical recurrence', definition: 'Rising PSA after treatment indicating possible cancer return' },
        { term: 'ADT', definition: 'Androgen deprivation therapy; hormone treatment that lowers testosterone' },
        { term: 'GnRH agonist', definition: 'Drug that suppresses testosterone production' },
      ],
      clinicalNotes: 'PSMA PET is changing initial staging for high-risk patients. Genomic classifiers increasingly used to guide AS eligibility and treatment intensity. NCCN guidelines provide risk-stratified treatment algorithms.',
    },
    4: {
      level: 4,
      summary: 'Advanced prostate cancer management requires understanding of castration-resistance mechanisms, intensified hormone therapy, and integration of novel agents including PARP inhibitors and targeted radiopharmaceuticals.',
      explanation: `**Castration-Resistant Prostate Cancer (CRPC):**

*Definition:*
- Rising PSA despite castrate testosterone (<50 ng/dL)
- Continued androgen receptor (AR) signaling despite low testosterone
- Disease can be non-metastatic (nmCRPC) or metastatic (mCRPC)

*Mechanisms of Resistance:*
- AR amplification/overexpression
- AR mutations (promiscuous ligand binding)
- AR splice variants (AR-V7: ligand-independent)
- Intratumoral androgen synthesis
- Bypass pathways (glucocorticoid receptor)
- Neuroendocrine differentiation

**Intensified Hormone Therapy:**

*Novel AR-Axis Agents:*
- Abiraterone: CYP17A1 inhibitor (blocks androgen synthesis)
- Enzalutamide: Potent AR inhibitor
- Apalutamide: AR inhibitor
- Darolutamide: AR inhibitor

*Setting of Use:*
- mCSPC (metastatic castration-sensitive): LATITUDE, STAMPEDE trials
- nmCRPC: SPARTAN, PROSPER, ARAMIS trials
- mCRPC: Multiple trials supporting use

*Triplet Therapy (mCSPC):*
- ADT + docetaxel + darolutamide (ARASENS)
- ADT + docetaxel + abiraterone (PEACE-1)
- Improved survival in high-volume disease

**Metastatic CRPC Treatment:**

*Sequencing Considerations:*
- Prior therapy in mCSPC affects mCRPC options
- AR-targeted agent → chemotherapy → second AR agent
- Cross-resistance between AR-axis agents

*Chemotherapy:*
- Docetaxel (first-line)
- Cabazitaxel (post-docetaxel)
- Mitoxantrone (limited use)

*PARP Inhibitors:*
- Olaparib: HRR gene mutations (BRCA1/2, ATM, etc.)
- Rucaparib: BRCA-mutated mCRPC
- Talazoparib + enzalutamide: HRR-mutated or unselected
- Niraparib + abiraterone: HRR-mutated mCRPC

*Theranostics (PSMA-Targeted):*
- 177Lu-PSMA-617 (Pluvicto)
- VISION trial: Survival benefit in mCRPC
- Requires PSMA-positive on PET
- Post-AR agent and post-taxane

*Immunotherapy:*
- Sipuleucel-T: Autologous cellular immunotherapy
- Limited efficacy of checkpoint inhibitors (unless MSI-high or high TMB)
- Pembrolizumab for MSI-high tumors

**Bone Health:**

*Skeletal-Related Events:*
- Bone metastases common
- Bisphosphonates (zoledronic acid)
- Denosumab (RANK-L inhibitor)
- Radium-223 (bone-targeted alpha emitter) for symptomatic bone mets

**Emerging Areas:**

*AR Degraders:*
- PROTACs (proteolysis-targeting chimeras)
- Overcoming AR-V7 resistance

*Combinations:*
- PARP inhibitor combinations
- Immunotherapy combinations with ADT
- CDK4/6 inhibitors

*Oligometastatic Disease:*
- Metastasis-directed therapy
- ORIOLE, STOMP trials
- Potential for delayed ADT`,
      keyTerms: [
        { term: 'CRPC', definition: 'Castration-resistant prostate cancer; cancer progressing despite castrate testosterone' },
        { term: 'AR-V7', definition: 'Androgen receptor splice variant conferring resistance to AR-targeted therapy' },
        { term: 'HRR mutations', definition: 'Homologous recombination repair gene mutations predicting PARP inhibitor sensitivity' },
        { term: '177Lu-PSMA-617', definition: 'Radioligand therapy targeting PSMA-expressing prostate cancer cells' },
        { term: 'triplet therapy', definition: 'ADT plus chemotherapy plus AR-axis agent for metastatic hormone-sensitive disease' },
      ],
      clinicalNotes: 'All mCRPC patients should undergo germline and somatic testing for HRR mutations. PSMA PET is required before 177Lu-PSMA-617. Treatment sequencing discussions should consider prior therapies and cross-resistance patterns.',
    },
    5: {
      level: 5,
      summary: 'Prostate cancer management continues to evolve with theranostic approaches, novel AR-targeting strategies, biomarker-driven therapy, and integration of precision medicine across disease states.',
      explanation: `**Theranostic Revolution:**

*PSMA-Targeted Therapy:*
- 177Lu-PSMA-617 (Pluvicto):
  - VISION: OS benefit in post-AR, post-taxane mCRPC
  - TheraP: Compared to cabazitaxel
  - PSMAfore: Earlier line vs ARPI change (positive)
- 225Ac-PSMA: Alpha-emitter, investigational
- Side effects: Myelosuppression, xerostomia, fatigue

*PSMA-Negative Disease:*
- Alternative targets under investigation
- FAPi-targeted approaches
- Understanding heterogeneity

**AR-Pathway Evolution:**

*Novel AR Degraders:*
- ARV-110, ARV-766: PROTACs in trials
- Targeting AR protein for degradation
- Potential AR-V7 activity

*AR Splice Variant Targeting:*
- Niclosamide combinations
- EPI compounds (N-terminus targeting)
- Ongoing clinical development

*Glucocorticoid Receptor:*
- Escape pathway in AR-targeting
- GR antagonists under investigation

**Biomarker-Driven Treatment:**

*Germline Testing (All Metastatic):*
- BRCA1/2, ATM, PALB2, CHEK2
- Lynch syndrome genes
- Implications: PARP inhibitors, platinum, family screening

*Somatic Testing:*
- HRR gene status from tumor
- AR amplification/mutations
- PTEN loss
- RB1 loss (neuroendocrine)
- TP53 aberrations

*AR-V7 Testing:*
- Circulating tumor cell detection
- Predicts taxane benefit over AR-targeting
- Utility debated but informative

*MSI/dMMR:*
- ~3% of mCRPC
- Pembrolizumab responsive

**Neuroendocrine Prostate Cancer:**

*Characteristics:*
- Low/absent AR expression
- PSA may not track disease
- Aggressive behavior
- RB1, TP53 alterations common

*Treatment:*
- Platinum-based chemotherapy
- Distinct from adenocarcinoma approach
- Emerging targets: DLL3, EZH2

**Oligometastatic Disease Paradigm:**

*Treatment Approaches:*
- Metastasis-directed therapy (SBRT)
- STOMP, ORIOLE, SABR-COMET trials
- Delayed systemic therapy potential
- Patient selection crucial

*Ongoing Studies:*
- Role of PSMA PET in identifying oligo-met
- Combination with systemic therapy
- Optimal timing of ADT intensification

**Clinical Trial Frontiers:**

*Key Trials:*
- PSMAfore: 177Lu-PSMA before taxane
- ENZA-p: Enzalutamide + 177Lu-PSMA
- SPLASH: Talazoparib + enzalutamide
- CONTACT-02: Cabozantinib + atezolizumab

*Emerging Strategies:*
- Bipolar androgen therapy
- CDK4/6 inhibitors
- AKT inhibitors (ipatasertib, capivasertib)
- Immunotherapy combinations (vaccines, BiTEs)

**Treatment Sequencing Considerations:**

*mCSPC to mCRPC Transition:*
- Prior docetaxel affects taxane sequencing
- Prior novel AR agent: Consider different mechanism
- Cross-resistance patterns important

*Optimal Sequencing Uncertain:*
- CARD trial: Cabazitaxel post-AR agents
- Individualized based on prior therapy, genomics

**Quality of Life and Supportive Care:**

*ADT Long-term Effects:*
- Bone health: DEXA monitoring, bisphosphonates/denosumab
- Cardiovascular: Metabolic monitoring
- Cognitive: Patient counseling, lifestyle
- Sexual health: PDE5 inhibitors, other interventions

*Intermittent ADT:*
- Considered in select patients
- Not for high-risk/high-volume

*Multidisciplinary Care:*
- Medical oncology, urology, radiation oncology
- Palliative care integration
- Genetic counseling
- Survivorship planning`,
      keyTerms: [
        { term: 'PROTAC', definition: 'Proteolysis targeting chimera; drug inducing target protein degradation' },
        { term: 'theranostics', definition: 'Combined diagnostic imaging and therapeutic targeting using same molecular target' },
        { term: 'neuroendocrine differentiation', definition: 'Transformation to aggressive AR-independent phenotype' },
        { term: 'PSMAfore', definition: 'Trial of 177Lu-PSMA in earlier treatment lines' },
        { term: 'oligometastatic', definition: 'Limited metastatic disease potentially amenable to local ablative therapy' },
      ],
      clinicalNotes: 'The prostate cancer treatment landscape has dramatically expanded. All metastatic patients should undergo comprehensive germline and somatic molecular testing. PSMA PET is increasingly integrated into staging and treatment selection. Clinical trial enrollment remains essential for advancing the field.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['genitourinary', 'reproductive'],
    topics: ['oncology', 'prostate cancer', 'hormone therapy', 'theranostics'],
    keywords: ['PSA', 'Gleason', 'CRPC', 'ADT', 'PSMA', 'PARP inhibitor'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};
