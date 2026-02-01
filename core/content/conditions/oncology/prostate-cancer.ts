/**
 * Prostate Cancer - Comprehensive Educational Content
 *
 * Covers diagnosis, staging, and management of prostate adenocarcinoma.
 */

import { EducationalContent } from '../../types';

export const prostateCancer: EducationalContent = {
  id: 'condition-prostate-cancer',
  type: 'condition',
  name: 'Prostate Cancer',
  nameEs: 'Cáncer de Próstata',
  alternateNames: ['Prostate Adenocarcinoma', 'Prostatic Carcinoma', 'CaP'],
  hpoId: 'HP:0012125',

  levels: {
    1: {
      level: 1,
      summary: 'Prostate cancer is a common cancer in men that starts in the prostate gland, which is below the bladder and produces fluid for semen.',
      explanation: `Prostate cancer is cancer that starts in the prostate, a small walnut-sized gland in men that produces fluid that nourishes sperm. It is one of the most common cancers in men.

**About the prostate:**
- Located below the bladder and in front of the rectum
- Produces fluid that makes up part of semen
- Surrounds the urethra (tube that carries urine out)
- Grows larger with age

**Who gets prostate cancer:**
- Most common in older men (rare before age 40)
- African American men at higher risk
- Family history increases risk
- Most cases grow slowly

**Symptoms (often none early):**
- Difficulty urinating
- Weak urine stream
- Blood in urine or semen
- Erectile dysfunction
- Bone pain (if spread)

**Screening:**
- PSA blood test (prostate-specific antigen)
- Digital rectal exam
- Controversial - discuss with doctor

**Treatment options:**
- Active surveillance (watching slow-growing cancer)
- Surgery to remove prostate
- Radiation therapy
- Hormone therapy
- Chemotherapy (for advanced disease)

**Prognosis:**
- Often slow-growing
- Many men die with it, not from it
- Early detection has high cure rate`,
      keyTerms: [
        { term: 'prostate', definition: 'Gland in men that produces fluid for semen' },
        { term: 'PSA', definition: 'Prostate-specific antigen; protein measured in blood for screening' },
        { term: 'adenocarcinoma', definition: 'Cancer that starts in gland cells' },
        { term: 'testosterone', definition: 'Male hormone that can fuel prostate cancer growth' },
      ],
      analogies: [
        'The prostate is like a walnut-shaped pillow that surrounds the urethra below the bladder.',
        'Prostate cancer often grows slowly like a tortoise compared to other cancers that may spread like rabbits.',
      ],
      examples: [
        'A 65-year-old man with elevated PSA found on routine screening may have early prostate cancer.',
        'A man with bone pain and urinary symptoms may have advanced prostate cancer.',
      ],
    },
    2: {
      level: 2,
      summary: 'Prostate cancer is an adenocarcinoma arising from glandular epithelium, commonly multifocal, with variable natural history from indolent to aggressive, diagnosed by PSA screening and biopsy, stratified by grade and stage.',
      explanation: `## Epidemiology

**Statistics:**
- Most common non-skin cancer in American men
- Second leading cause of cancer death in men
- Lifetime risk: 1 in 8 men
- Median age at diagnosis: 66 years
- African American men have 70% higher incidence

**Risk factors:**
- Age (risk increases with age)
- African American race
- Family history (first-degree relative)
- Inherited genetic mutations (BRCA1/2, Lynch syndrome)
- Obesity may increase aggressive disease risk

**Protective factors:**
- 5-alpha reductase inhibitors (finasteride, dutasteride)
- Lycopene, selenium (limited evidence)
- Physical activity

## Pathology

**Adenocarcinoma (95%+):**
- Arises from prostatic acini
- Multifocal in 80%
- Posterior peripheral zone most common

**Gleason grading:**
- Pattern 1-5 based on architectural patterns
- Primary + secondary pattern = Gleason score
- Score 6-10 (3+3=6 is lowest, 5+5=10 highest)
- ISUP Grade Groups 1-5 (Gleason 6=GG1, 7=GG2-3, 8-10=GG4-5)

**Other types:**
- Neuroendocrine/small cell (rare, aggressive)
- Ductal adenocarcinoma
- Transitional cell carcinoma

## Clinical Presentation

**Localized disease (most common):**
- Usually asymptomatic
- Found by elevated PSA or abnormal DRE
- Urinary symptoms uncommon unless large

**Locally advanced:**
- Urinary obstruction
- Erectile dysfunction
- Hematuria

**Metastatic:**
- Bone pain (osteoblastic lesions)
- Weight loss, fatigue
- Anemia
- Spinal cord compression (emergency)

## Screening and Diagnosis

**PSA screening:**
- Controversial (USPSTF: individual decision for 55-69)
- PSA <4 ng/mL traditionally normal
- PSA velocity, density, free/total ratio
- Age-specific ranges

**Biopsy:**
- Transrectal ultrasound (TRUS)-guided
- 12-core systematic sampling
- MRI-targeted fusion biopsy

**Staging workup:**
- MRI for local staging (PI-RADS)
- Bone scan for high-risk
- CT for high-risk/nodal involvement
- PSMA PET for biochemical recurrence`,
      keyTerms: [
        { term: 'Gleason score', definition: 'Grading system for prostate cancer based on architectural patterns' },
        { term: 'PSA', definition: 'Prostate-specific antigen; kallikrein enzyme produced by prostate epithelium' },
        { term: 'androgen', definition: 'Male hormones including testosterone that drive prostate cancer' },
        { term: 'peripheral zone', definition: 'Outer region of prostate where 70% of cancers arise' },
      ],
      analogies: [
        'PSA screening is like a security camera - it can detect problems early but sometimes gives false alarms.',
        'The Gleason score is like a report card for cancer aggression - lower scores mean better behavior.',
      ],
    },
    3: {
      level: 3,
      summary: 'Prostate cancer risk stratification uses PSA, grade, and clinical stage to guide treatment decisions between active surveillance and definitive therapy, with understanding of androgen signaling biology essential for managing advanced disease.',
      explanation: `## Risk Stratification (NCCN)

**Very low risk:**
- T1c, Gleason <=6, PSA <10, <3 cores, <=50% each, PSA density <0.15
- Active surveillance recommended

**Low risk:**
- T1-T2a, Gleason 6, PSA <10
- Active surveillance or definitive therapy

**Intermediate risk:**
- T2b-T2c OR Gleason 7 OR PSA 10-20
- Favorable: Gleason 3+4, PSA <10, <50% positive cores
- Unfavorable: Gleason 4+3 or other features

**High risk:**
- T3a OR Gleason 8-10 OR PSA >20
- Definitive therapy plus possible systemic

**Very high risk:**
- T3b-T4 or primary Gleason pattern 5
- Multimodal therapy

## Androgen Biology

**Androgen receptor (AR) signaling:**
- Testosterone converted to DHT in prostate
- DHT binds AR -> nuclear translocation
- Transcription of growth-promoting genes
- Prostate cancer is initially androgen-dependent

**Androgen deprivation:**
- Medical or surgical castration
- LHRH agonists/antagonists
- CYP17 inhibitors (abiraterone)
- AR antagonists (enzalutamide, apalutamide, darolutamide)

## Treatment by Stage

### Localized Disease
**Active surveillance:**
- For low-risk, limited life expectancy
- PSA every 6 months
- DRE annually
- Repeat biopsy in 1 year, then periodically
- Trigger for treatment: grade progression, volume increase

**Radical prostatectomy:**
- Open, laparoscopic, or robotic
- Nerve-sparing when possible (preserves erectile function)
- Pelvic lymph node dissection for intermediate/high risk

**Radiation therapy:**
- External beam (IMRT, proton)
- Brachytherapy (seed implants)
- Combination for higher risk

**Focal therapy:**
- Cryotherapy, HIFU
- For select patients
- Long-term outcomes uncertain

### Locally Advanced
- Surgery plus adjuvant/salvage RT
- RT plus ADT (2-3 years)
- ADT duration based on risk

### Metastatic
- Androgen deprivation therapy (ADT)
- Chemotherapy (docetaxel) for high-volume
- Abiraterone or enzalutamide for high-risk
- Bone-protective agents
- Palliative RT for bone pain

## Complications of Treatment

**Surgery:**
- Urinary incontinence (5-20% at 1 year)
- Erectile dysfunction (30-70% depending on sparing)
- Urethral stricture

**Radiation:**
- Urinary frequency, urgency
- Procititis, diarrhea
- Erectile dysfunction (progressive)
- Secondary cancers (rare)

**ADT:**
- Hot flashes, fatigue
- Loss of libido, erectile dysfunction
- Osteoporosis, metabolic syndrome
- Cardiovascular risk
- Cognitive effects`,
      keyTerms: [
        { term: 'active surveillance', definition: 'Monitoring low-risk cancer with treatment only if progression' },
        { term: 'androgen deprivation therapy', definition: 'Treatment to reduce male hormones that fuel cancer' },
        { term: 'PSMA', definition: 'Prostate-specific membrane antigen; imaging target for advanced disease' },
        { term: 'biochemical recurrence', definition: 'Rising PSA after definitive treatment' },
      ],
      clinicalNotes: 'Active surveillance appropriate for many low-risk patients to avoid overtreatment. ADT initially effective but resistance develops. Nerve-sparing surgery when oncologically appropriate. Discuss quality of life impacts when choosing treatment.',
    },
    4: {
      level: 4,
      summary: 'Advanced prostate cancer management requires understanding castration-resistant progression mechanisms, use of novel agents targeting AR signaling and bone metastases, and management of treatment resistance through PARP inhibitors and immunotherapy in selected patients.',
      explanation: `## Castration-Resistant Prostate Cancer (CRPC)

**Definition:**
- Disease progression despite castrate testosterone (<50 ng/dL)
- Rising PSA or radiographic progression

**Mechanisms of resistance:**
- AR amplification/overexpression
- AR mutations ( promiscuous ligand binding)
- AR splice variants (constitutively active)
- Intratumoral androgen synthesis
- Alternative pathways bypassing AR
- Neuroendocrine transdifferentiation

**Non-metastatic CRPC (nmCRPC):**
- Rising PSA, no visible metastases
- SPARTAN/PROSPER trials: apalutamide, enzalutamide, darolutamide improve MFS

**Metastatic CRPC (mCRPC):**
- Multiple approved agents
- Sequencing based on symptoms, prior therapy, genomic profile

### Systemic Agents for mCRPC

**Androgen pathway inhibitors:**
- Abiraterone + prednisone (CYP17 inhibitor)
- Enzalutamide (AR antagonist, inhibits nuclear translocation)
- Apalutamide, darolutamide

**Chemotherapy:**
- Docetaxel (first-line)
- Cabazitaxel (post-docetaxel)

**Immunotherapy:**
- Sipuleucel-T (autologous cellular immunotherapy)
- Pembrolizumab (MSI-H/dMMR)
- PARP inhibitors (HRR-mutated)

**Bone-targeted agents:**
- Zoledronic acid, denosumab (prevent SREs)
- Radium-223 (alpha-emitter for bone mets)

**PSMA-targeted therapy:**
- Lutetium-177 PSMA-617 (VISION trial)
- For PSMA-positive, ARPI-resistant disease

## Genomic Medicine

**HRR mutations (15-20% mCRPC):**
- BRCA1, BRCA2 (most common)
- ATM, CHEK2, PALB2
- Predict response to PARP inhibitors (olaparib, rucaparib)

**Mismatch repair deficiency (3-5%):**
- MSI-H/dMMR
- High tumor mutational burden
- Respond to checkpoint inhibitors

**Tumor genotyping:**
- Germline and somatic testing recommended
- FoundationOne, Guardant360
- Guides clinical trial selection

## Biochemical Recurrence

**Definition:**
- PSA rise after radical prostatectomy (>0.2 ng/mL)
- PSA rise 2+ above nadir after RT

**Evaluation:**
- PSA doubling time
- PSMA PET/CT or fluciclovine PET
- MRI pelvis

**Management:**
- Early vs delayed ADT
- Salvage RT for post-prostatectomy recurrence
- ADT plus abiraterone/enzalutamide for high-risk
- Metastasis-directed therapy for oligometastatic

## Oligometastatic Disease

**Concept:**
- Limited metastatic burden
- May benefit from aggressive local therapy

**Management:**
- ADT + RT to primary (STAMPEDE)
- Metastasis-directed ablative RT or surgery
- Ongoing trials (ORIOLE, SABR-COMET)

## Special Situations

### Neuroendocrine Prostate Cancer
- Treatment-emergent small cell carcinoma
- Aggressive, AR-independent
- Platinum-based chemotherapy
- Poor prognosis

### Recurrent Disease After Novel Hormonal Agents
- Sequencing strategies
- Chemotherapy indication
- Clinical trials
- PARP inhibitors if HRR-mutated

### Bone Health
- Bone metastases common (osteoblastic)
- Zoledronic acid or denosumab
- Calcium and vitamin D supplementation
- Dental evaluation before zoledronic acid`,
      keyTerms: [
        { term: 'CRPC', definition: 'Castration-resistant prostate cancer; progresses despite low testosterone' },
        { term: 'PARP inhibitor', definition: 'Targets DNA repair defects in HRR-mutated cancers' },
        { term: 'SRE', definition: 'Skeletal-related event; fracture, surgery, radiation to bone' },
        { term: 'PSMA-PET', definition: 'PET imaging using prostate-specific membrane antigen targeting' },
      ],
      clinicalNotes: 'All mCRPC patients should have tumor and germline testing for HRR mutations. PARP inhibitors approved for BRCA-mutated disease. PSMA-PET more sensitive for detecting recurrence. Lutetium-177 PSMA-617 approved for metastatic CRPC after ARPIs and taxane.',
    },
    5: {
      level: 5,
      summary: 'Precision oncology in prostate cancer involves biomarker-driven therapy selection, novel imaging agents, theranostics combining diagnosis and therapy, and immunotherapy strategies while addressing overtreatment of low-risk disease and health disparities in outcomes.',
      explanation: `## Precision Oncology

### Biomarker-Driven Treatment
**Homologous recombination deficiency:**
- BRCA1/2, ATM, CDK12
- Olaparib, rucaparib approved
- Talazoparib in trials
- Platinum sensitivity

**Microsatellite instability:**
- Pembrolizumab (tumor-agnostic approval)
- Dostarlimab, nivolumab
- Durable responses in subset

**Androgen receptor alterations:**
- AR-V7 splice variant predicts ARPI resistance
- Liquid biopsy detection
- Guides chemotherapy selection

**PSMA expression:**
- Imaging selection for Lu-177 therapy
- Heterogeneity consideration
- Quantitative imaging biomarkers

## Advanced Imaging

### PSMA-PET/CT
**Agents:**
- 68Ga-PSMA-11 (FDA approved)
- 18F-DCFPyl, 18F-rhPSMA

**Applications:**
- Staging high-risk localized
- Biochemical recurrence
- Treatment response assessment
- Metastatic disease detection
- Superior to conventional imaging

**Limitations:**
- PSMA-negative disease
- Small lymph nodes
- Cost and availability

### Theranostics
**Concept:**
- Pair diagnostic and therapeutic agents targeting same molecule
- PSMA imaging + Lu-177 PSMA therapy

**Lu-177 PSMA-617:**
- Beta-emitter
- VISION trial: improved OS and PFS
- Approved for PSMA-positive mCRPC
- After ARPI and taxane

**Future:**
- Alpha-emitters (Ac-225 PSMA)
- Higher LET, shorter path length
- Early clinical trials

## Immunotherapy Landscape

### Checkpoint Inhibitors
**Current status:**
- Limited activity in unselected patients
- Approved for MSI-H/dMMR
- Combination strategies in trials

### Combination approaches:
- ADT + immunotherapy
- Radiation + immunotherapy (abscopal effect)
- Novel vaccines
- CAR-T cell therapy (early trials)

### Sipuleucel-T
- Autologous cellular immunotherapy
- Modest survival benefit
- Few side effects
- Logistically complex

## Overtreatment and Active Surveillance

### Overtreatment concerns
- Many low-risk cancers would never cause symptoms
- Side effects impact quality of life
- Economic costs

### Active surveillance refinement
- MRI for risk stratification
- Genomic classifiers (Oncotype, Decipher)
- Molecular markers of progression
- Extended follow-up data supporting safety

### Selective treatment intensification
- Focal therapy for intermediate risk
- Risk-adapted approaches
- Patient preference incorporation

## Health Disparities

### African American men
- Higher incidence and mortality
- More aggressive disease at presentation
- Lower rates of active surveillance
- Genetic and environmental factors
- Systemic healthcare disparities

### Addressing disparities
- Community outreach
- Screening access
- Shared decision-making
- Clinical trial inclusion

## Future Directions

### Novel Targets
- AKT/PI3K pathway (ipatasertib)
- WNT signaling
- Immune checkpoints beyond PD-1
- STING agonists

### Treatment Sequencing
- Optimal order of ARPIs, chemotherapy, PARP inhibitors
- Biomarker-driven sequences
- Resistance mechanisms

### Artificial Intelligence
- MRI interpretation
- Risk prediction
- Pathology analysis
- Treatment response prediction

### Prevention
- 5-ARI use and cancer prevention
- Lifestyle interventions
- Chemoprevention trials

### Liquid Biopsy
- ctDNA for monitoring
- Resistance detection
- Minimal residual disease
- Real-time genotyping`,
      keyTerms: [
        { term: 'theranostics', definition: 'Combined diagnostic and therapeutic targeting same molecule' },
        { term: 'Lu-177 PSMA-617', definition: 'Lutetium-177 labeled PSMA-targeted radioligand therapy' },
        { term: 'liquid biopsy', definition: 'Blood-based detection of circulating tumor DNA or cells' },
        { term: 'genomic classifier', definition: 'Gene expression test predicting cancer aggressiveness' },
      ],
      clinicalNotes: 'PSMA theranostics represents a paradigm shift in advanced prostate cancer. Liquid biopsy enables real-time genotyping. Addressing disparities is essential for equitable outcomes. Active surveillance is safe for appropriately selected low-risk patients with proper monitoring.',
    },
  },

  media: [
    {
      id: 'prostate-anatomy',
      type: 'diagram',
      filename: 'prostate-anatomy.svg',
      title: 'Prostate Anatomy',
      description: 'Location and zones of the prostate gland',
    },
  ],

  citations: [
    {
      id: 'nccn-prostate-2024',
      type: 'article',
      title: 'NCCN Clinical Practice Guidelines in Oncology: Prostate Cancer',
      source: 'National Comprehensive Cancer Network',
    },
  ],

  crossReferences: [
    { targetId: 'condition-bph', targetType: 'condition', relationship: 'related', label: 'Benign Prostatic Hyperplasia' },
  ],

  tags: {
    systems: ['reproductive', 'urinary'],
    topics: ['oncology', 'urology'],
    keywords: ['prostate cancer', 'PSA', 'Gleason', 'androgen', 'castration-resistant'],
    clinicalRelevance: 'high',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default prostateCancer;
