/**
 * Prostate Cancer - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const prostateCancer: EducationalContent = {
  id: 'condition-prostate-cancer',
  type: 'condition',
  name: 'Prostate Cancer',
  alternateNames: ['Prostatic Adenocarcinoma', 'Prostatic Carcinoma', 'CaP'],
  hpoId: 'HP:0003002',

  levels: {
    1: {
      level: 1,
      summary: 'Prostate cancer is a common cancer in men that grows slowly in most cases. Screening tests can find it early, and many men with slow-growing tumors may not need immediate treatment.',
      explanation: `Prostate cancer develops in the prostate gland, which is part of the male reproductive system. It is one of the most common cancers in men but often grows very slowly.

**What is the prostate?**
- A walnut-sized gland below the bladder
- Produces fluid for semen
- surrounds the urethra (tube that carries urine)

**Screening tests:**
- PSA blood test (measures prostate-specific antigen)
- Digital rectal exam (DRE)

**Warning signs:**
- Trouble urinating
- Weak urine flow
- Blood in urine or semen
- Pain in back, hips, or pelvis

**Treatment options:**
- Active surveillance (monitoring, no immediate treatment)
- Surgery to remove prostate
- Radiation therapy
- Hormone therapy`,
      keyTerms: [
        { term: 'prostate', definition: 'A gland in men that produces fluid for semen' },
        { term: 'PSA', definition: 'Prostate-specific antigen; a blood test for prostate cancer screening' },
        { term: 'active surveillance', definition: 'Monitoring cancer closely without treating it right away' },
      ],
      analogies: ['Active surveillance is like keeping a watchful eye on a slow-growing weed in your garden—you only remove it if it starts growing fast.'],
      examples: ['A 65-year-old man has an elevated PSA. Biopsy shows slow-growing cancer, so he chooses active surveillance with regular PSA tests and biopsies.'],
    },
    2: {
      level: 2,
      summary: 'Prostate cancer risk stratification uses PSA, Gleason score, and clinical stage to guide management, with options ranging from active surveillance for low-risk disease to surgery, radiation, or androgen deprivation for higher risk.',
      explanation: `## Risk Stratification

**Low Risk:**
- PSA <10 ng/mL
- Gleason score 6 (3+3)
- Clinical stage T1-T2a

**Intermediate Risk:**
- PSA 10-20 OR Gleason 7 OR stage T2b

**High Risk:**
- PSA >20 OR Gleason 8-10 OR stage T2c-T4

## Diagnosis
- Elevated PSA leads to prostate biopsy
- 12-core systematic biopsy
- MRI fusion biopsy improves accuracy
- Gleason score predicts aggressiveness

## Management by Risk

**Low Risk:**
- Active surveillance preferred
- Monitor with PSA, repeat biopsies

**Intermediate Risk:**
- Discuss: Active surveillance vs definitive treatment
- Surgery or radiation

**High Risk:**
- Definitive treatment required
- Surgery + pelvic lymph node dissection OR
- Radiation + androgen deprivation therapy

## Treatment Modalities
- Radical prostatectomy (surgery)
- External beam radiation (EBRT)
- Brachytherapy (radioactive seeds)
- Androgen deprivation therapy (ADT)`,
      keyTerms: [
        { term: 'Gleason score', definition: 'Grading system for prostate cancer based on cell appearance (6-10)' },
        { term: 'ADT', definition: 'Androgen deprivation therapy; lowers testosterone to slow cancer growth' },
        { term: 'brachytherapy', definition: 'Internal radiation therapy using radioactive seeds placed in the prostate' },
      ],
    },
    3: {
      level: 3,
      summary: 'Prostate cancer management incorporates MRI staging, genomic classifiers, shared decision-making for localized disease, and systemic therapy for metastatic disease including androgen deprivation and chemotherapy.',
      explanation: `## MRI in Prostate Cancer
- PI-RADS scoring for lesion suspicion
- MRI-targeted biopsy + systematic biopsy
- Staging for extracapsular extension, seminal vesicle invasion
- Improves detection of clinically significant cancer

## Genomic Classifiers
- Decipher: Genomic classifier predicting metastasis
- Oncotype DX Prostate: Predicts adverse pathology
- Prolaris: Cell cycle progression score
- Helps guide surveillance vs treatment decisions

## Active Surveillance Criteria
- Epstein criteria: Very low risk
- PRIAS criteria: Low risk
- Monitoring: PSA every 6 months, biopsy every 1-2 years
- MRI for interval monitoring

## Metastatic Disease
**Hormone-Sensitive (HSPC):**
- ADT continuous vs intermittent
- ADT + docetaxel for high-volume
- ADT + abiraterone for high-volume

**Castration-Resistant (CRPC):**
- Continue ADT (maintain castrate testosterone)
- Add AR-directed therapy (abiraterone, enzalutamide)
- Chemotherapy (docetaxel, cabazitaxel)
- Radium-223 for bone metastases`,
      keyTerms: [
        { term: 'PI-RADS', definition: 'Prostate Imaging Reporting and Data System; scores prostate MRI lesions' },
        { term: 'CRPC', definition: 'Castration-resistant prostate cancer; progresses despite low testosterone' },
        { term: 'AR-directed therapy', definition: 'Androgen receptor targeted therapy; blocks androgen signaling' },
      ],
      clinicalNotes: 'Active surveillance is safe for properly selected low-risk patients. MRI has reduced overdiagnosis of insignificant cancer while improving detection of clinically significant disease.',
    },
    4: {
      level: 4,
      summary: 'Advanced prostate cancer treatment addresses mechanisms of androgen resistance, PARP inhibitors for homologous recombination repair mutations, PSMA-targeted therapies, and sequencing of multiple systemic agents.',
      explanation: `## CRPC Treatment Sequencing
**AR-Targeted Agents:**
- Abiraterone (CYP17 inhibitor) + prednisone
- Enzalutamide, apalutamide, darolutamide (AR antagonists)
- Do not combine two AR agents

**Chemotherapy:**
- Docetaxel first-line
- Cabazitaxel after docetaxel failure

**PARP Inhibitors:**
- Olaparib, rucaparib for HRR-mutated mCRPC
- BRCA1/2, ATM mutations
- Test for HRR mutations in all mCRPC

## PSMA-Targeted Therapy
- PSMA PET imaging for staging
- Lutetium-177-PSMA-617 (Pluvicto) for mCRPC
- After AR-targeted therapy and chemotherapy
- Requires PSMA-positive PET scan

## Bone-Targeted Therapy
- Denosumab or zoledronic acid
- Prevents skeletal-related events
- Monitor for osteonecrosis of jaw

## Oligometastatic Disease
- Metastasis-directed therapy (SBRT, surgery)
- Deferring systemic therapy in select cases
- TREND, ORIOLE, STOMP trials support approach`,
      keyTerms: [
        { term: 'HRR mutation', definition: 'Homologous recombination repair defect; predicts PARP inhibitor response' },
        { term: 'PSMA', definition: 'Prostate-specific membrane antigen; target for imaging and therapy' },
        { term: 'skeletal-related event', definition: 'Bone complication from metastases: fracture, cord compression, need for radiation' },
      ],
      clinicalNotes: 'Test all men with mCRPC for HRR mutations and microsatellite instability. PSMA-PET has superior sensitivity for detecting metastases compared to conventional imaging.',
    },
    5: {
      level: 5,
      summary: 'Cutting-edge prostate cancer research includes novel AR inhibitors, combination strategies, radioligand therapy expansion, biomarker-driven treatment selection, and understanding of neuroendocrine differentiation.',
      explanation: `## Emerging Therapies
**Novel AR Agents:**
- Bipolar androgen therapy
- PROTAC AR degraders
- Combination AR targeting

**Radioligand Therapy:**
- Actinium-225-PSMA (alpha emitter)
- Combination with PARP inhibitors
- Earlier line use exploration

## Aggressive Variant Prostate Cancer
- Treatment-emergent neuroendocrine prostate cancer
- Low PSA despite progression
- Platinum-based chemotherapy
- Checkpoint inhibitors (MSI-H subset)

## Biomarker Evolution
- Circulating tumor cell analysis
- Cell-free DNA for resistance mutations
- AR-V7 splice variant detection
- Predicting response to AR-targeted therapy

## Prevention and Early Detection
- 5-alpha reductase inhibitors for chemoprevention
- Refined screening strategies (age, race, family history)
- Risk-adapted screening intervals
- Genetic testing in high-risk families

## Combination Strategies
- PARP + AR inhibitors
- Immunotherapy + targeted therapy
- Multiple mechanisms to overcome resistance`,
      keyTerms: [
        { term: 'AR-V7', definition: 'Androgen receptor splice variant; predicts resistance to AR-directed therapy' },
        { term: 'neuroendocrine differentiation', definition: 'Transformation to aggressive variant with neuroendocrine features' },
        { term: 'radioligand therapy', definition: 'Targeted radiation using molecule that binds to tumor antigen' },
      ],
      clinicalNotes: 'AR-V7 detection in circulating tumor cells predicts lack of response to abiraterone/enzalutamide but potential response to chemotherapy. Treatment-emergent neuroendocrine prostate cancer has poor prognosis.',
    },
  },

  media: [],
  citations: [
    { id: 'nccn-prostate-2024', type: 'website', title: 'NCCN Guidelines for Prostate Cancer', source: 'National Comprehensive Cancer Network' },
    { id: 'eau-prostate-2024', type: 'website', title: 'EAU Guidelines on Prostate Cancer', source: 'European Association of Urology' },
  ],
  crossReferences: [
    { targetId: 'condition-bph', targetType: 'condition', relationship: 'related', label: 'Benign Prostatic Hyperplasia' },
  ],
  tags: { systems: ['reproductive', 'urinary'], topics: ['oncology', 'urology'], keywords: ['prostate cancer', 'PSA', 'Gleason score', 'ADT', 'prostatectomy'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] } },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default prostateCancer;
