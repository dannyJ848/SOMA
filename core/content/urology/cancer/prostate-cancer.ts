/**
 * Prostate Cancer - Educational Content
 */

import { EducationalContent } from '../../types';

export const prostateCancer: EducationalContent = {
  id: 'cancer-prostate-cancer',
  type: 'condition',
  name: 'Prostate Cancer',
  alternateNames: ['Prostatic Adenocarcinoma', 'Prostate Adenocarcinoma'],

  levels: {
    1: {
      level: 1,
      summary: 'Prostate cancer is the most common cancer in men, but many prostate cancers grow slowly and may not need immediate treatment.',
      explanation: `Prostate cancer affects the prostate gland, which makes fluid for semen.

**Key Facts:**
- Most common cancer in men (after skin cancer)
- Usually grows slowly
- Most men diagnosed won't die from it
- Screening and early detection are important

**Risk Factors:**
- Age (rare before 40, common after 65)
- African American men (higher risk)
- Family history
- BRCA gene mutations

**Screening:**
- PSA blood test
- Digital rectal exam
- Shared decision with doctor
- Not all men need screening

**Treatment Options:**
- Active surveillance (watching carefully)
- Surgery to remove prostate
- Radiation therapy
- Hormone therapy for advanced cases

**The Good News:**
- 5-year survival rate is very high for local disease
- Many treatment options available
- Quality of life can be maintained`,
      keyTerms: [
        { term: 'prostate cancer', definition: 'Cancer in the prostate gland, located below the bladder' },
        { term: 'PSA', definition: 'Prostate-specific antigen - blood test for prostate conditions' },
        { term: 'active surveillance', definition: 'Carefully monitoring cancer without immediate treatment' },
      ],
      analogies: [
        'Active surveillance is like watching a slow-moving storm - monitoring carefully but not evacuating unless it intensifies.',
      ],
      examples: [
        'A man diagnosed with low-grade prostate cancer may be monitored for years without needing treatment.',
      ],
    },
    2: {
      level: 2,
      summary: 'Prostate cancer is risk-stratified by PSA, Gleason score, and clinical stage to guide treatment from active surveillance to radical therapy.',
      explanation: `## Risk Stratification

**Low Risk:**
- PSA <10, Gleason 6 (Grade Group 1), T1-T2a
- Options: Active surveillance, radical treatment

**Intermediate Risk:**
- PSA 10-20, OR Gleason 7, OR T2b-T2c
- Favorable vs unfavorable intermediate

**High Risk:**
- PSA >20, OR Gleason 8-10, OR T3

**Metastatic:**
- Lymph nodes or distant spread

## Gleason Grading

**Grade Group 1:** Gleason 6 (3+3)
**Grade Group 2:** Gleason 7 (3+4)
**Grade Group 3:** Gleason 7 (4+3)
**Grade Group 4:** Gleason 8
**Grade Group 5:** Gleason 9-10

## Diagnostic Workup

**Initial:**
- PSA
- Digital rectal exam
- MRI (increasingly standard)
- Biopsy (systematic +/- targeted)

**Staging (High-Risk):**
- PSMA PET or bone scan
- CT or MRI for nodes

## Treatment by Risk

**Low Risk:**
- Active surveillance preferred
- Radical prostatectomy
- Radiation therapy

**Intermediate Risk:**
- Prostatectomy or radiation
- May add androgen deprivation

**High Risk:**
- Radiation + ADT (2-3 years)
- Prostatectomy + adjuvant therapy
- Multimodal approach

**Metastatic:**
- ADT backbone
- Add docetaxel or novel hormonal agents
- Radiation to primary (oligometastatic)`,
      keyTerms: [
        { term: 'Gleason score', definition: 'Grading system for prostate cancer aggressiveness' },
        { term: 'ADT', definition: 'Androgen deprivation therapy - lowering testosterone' },
        { term: 'PSMA PET', definition: 'Imaging using prostate-specific membrane antigen' },
      ],
      analogies: [
        'Gleason grading looks at how abnormal cells look - like comparing organized marching bands to chaotic crowds.',
      ],
    },
    3: {
      level: 3,
      summary: 'Prostate cancer management integrates MRI-guided biopsy, genomic testing, and multimodal treatment with attention to quality of life outcomes.',
      explanation: `## MRI and Biopsy

**Multiparametric MRI (mpMRI):**
- T2-weighted, DWI, DCE sequences
- PI-RADS scoring (1-5)
- Guides biopsy targeting

**Biopsy Approach:**
- Systematic 12-core
- MRI-fusion targeted
- Combined approach often

**Transperineal vs Transrectal:**
- Transperineal: Lower infection risk
- Transrectal: Traditional approach
- Trend toward transperineal

## Genomic Testing

**Tissue-Based:**
- Decipher: Metastasis risk
- Oncotype DX: Adverse pathology
- Prolaris: Disease progression

**Uses:**
- Active surveillance selection
- Adjuvant treatment decisions
- Post-prostatectomy management

## Active Surveillance

**Selection:**
- Low-risk (Grade Group 1)
- Select favorable intermediate
- Life expectancy considerations

**Protocol:**
- PSA every 3-6 months
- DRE every 12 months
- MRI every 1-2 years
- Confirmatory biopsy at 1-2 years
- Repeat biopsy every 2-4 years

**Triggers for Treatment:**
- Grade progression
- Volume progression
- PSA kinetics changes
- Patient preference

## Surgical Considerations

**Radical Prostatectomy:**
- Open, laparoscopic, or robotic
- Nerve-sparing when appropriate
- Pelvic lymph node dissection

**Functional Outcomes:**
- Continence recovery (variable timeline)
- Erectile function (nerve-sparing dependent)
- Quality of life priorities`,
      keyTerms: [
        { term: 'PI-RADS', definition: 'Scoring system for prostate MRI lesion suspicion' },
        { term: 'MRI-fusion biopsy', definition: 'Targeting suspicious MRI lesions during biopsy' },
        { term: 'Decipher', definition: 'Genomic test predicting metastatic risk' },
      ],
      clinicalNotes: 'MRI before biopsy is now standard practice. PI-RADS 4-5 lesions warrant targeted biopsy. PI-RADS 1-2 may avoid biopsy in appropriate patients.',
    },
    4: {
      level: 4,
      summary: 'Advanced prostate cancer care includes PSMA theranostics, precision oncology, and optimizing treatment intensification strategies.',
      explanation: `## PSMA Theranostics

**PSMA PET Imaging:**
- Superior to conventional imaging
- Detects oligometastatic disease
- Changes management in 20-30%

**PSMA-Targeted Therapy:**
- Lutetium-177 PSMA (Pluvicto)
- For mCRPC after taxane and novel hormonal agent
- Significant survival benefit

## Castration-Resistant Prostate Cancer

**Definition:**
- Progression despite castrate testosterone (<50 ng/dL)
- Rising PSA or imaging progression

**Treatment Options:**
- Novel hormonal: Abiraterone, enzalutamide, apalutamide, darolutamide
- Chemotherapy: Docetaxel, cabazitaxel
- PSMA therapy: Lutetium-177
- PARP inhibitors: For BRCA-mutated
- Immunotherapy: Pembrolizumab (MSI-high)

## Treatment Intensification

**Metastatic Hormone-Sensitive:**
- ADT + novel hormonal agent
- ADT + docetaxel
- ADT + both (triplet therapy)
- Radiation to primary

**Oligometastatic:**
- Metastasis-directed therapy
- SABR to metastases
- Ongoing trials

## Genetic Testing

**Who to Test:**
- Metastatic disease
- Family history (breast, ovarian, pancreatic)
- Ashkenazi Jewish heritage
- Intraductal histology

**Implications:**
- BRCA1/2: PARP inhibitor eligibility, family cascade testing
- MSI-high: Pembrolizumab
- CDK12: Immunotherapy consideration

## Bone Health

**Bone-Targeted Therapy:**
- Denosumab or zoledronic acid
- For bone metastases
- Prevent skeletal events

**Monitoring:**
- DEXA for osteoporosis
- Calcium and vitamin D supplementation`,
      keyTerms: [
        { term: 'mCRPC', definition: 'Metastatic castration-resistant prostate cancer' },
        { term: 'Lutetium-177 PSMA', definition: 'Radioligand therapy targeting PSMA on cancer cells' },
        { term: 'PARP inhibitor', definition: 'Targeted therapy for BRCA-mutated cancers' },
      ],
      clinicalNotes: 'Treatment intensification in metastatic hormone-sensitive prostate cancer improves survival. Combine ADT with at least one additional agent.',
    },
    5: {
      level: 5,
      summary: 'Expert prostate cancer management encompasses trial integration, AI diagnostics, and personalized survivorship care.',
      explanation: `## AI and Diagnostics

**Pathology AI:**
- Automated Gleason grading
- Quality assurance
- Prognostic refinement

**MRI AI:**
- Lesion detection
- PI-RADS assistance
- Workflow efficiency

**Predictive Models:**
- Treatment response prediction
- Survival modeling
- Trial eligibility

## Clinical Trial Landscape

**Key Questions:**
- Optimal intensification combinations
- Oligometastatic treatment paradigm
- Biomarker-driven selection
- Focal therapy role

**Novel Approaches:**
- CAR-T cell therapy
- Cancer vaccines
- Bispecific antibodies
- Novel androgen pathway agents

## Focal Therapy

**Modalities:**
- HIFU (high-intensity focused ultrasound)
- Cryotherapy
- Laser ablation
- Irreversible electroporation

**Patient Selection:**
- Unilateral disease
- Low to intermediate risk
- Functional preservation priority

**Outcomes:**
- Reduced side effects
- Salvage options preserved
- Long-term data emerging

## Survivorship

**Long-Term Monitoring:**
- PSA kinetics
- Testosterone recovery (if applicable)
- Bone health

**Quality of Life:**
- Sexual rehabilitation
- Continence optimization
- Psychosocial support

**Second Cancers:**
- Bladder, rectal (post-radiation)
- Surveillance considerations

## Multidisciplinary Care

**Tumor Board:**
- Complex cases
- Recurrence management
- Trial matching

**Integrated Team:**
- Urology
- Radiation oncology
- Medical oncology
- Genetics
- Palliative care

## Research Priorities

**Precision Medicine:**
- Molecular subtyping
- ctDNA monitoring
- Treatment response prediction

**Imaging Evolution:**
- PSMA PET refinement
- Whole-body MRI
- AI integration`,
      keyTerms: [
        { term: 'focal therapy', definition: 'Treating only the cancer focus while preserving remaining prostate' },
        { term: 'HIFU', definition: 'High-intensity focused ultrasound for prostate ablation' },
        { term: 'CAR-T', definition: 'Chimeric antigen receptor T-cell therapy' },
      ],
      clinicalNotes: 'PSMA PET is changing the staging paradigm for prostate cancer. Oligometastatic disease detected by PSMA PET may benefit from metastasis-directed therapy.',
    },
  },

  media: [],
  citations: [
    {
      id: 'aua-prostate-cancer',
      type: 'article',
      title: 'Prostate Cancer',
      source: 'AUA/SUO Guidelines',
    },
  ],
  crossReferences: [
    { targetId: 'topic-prostate-conditions', targetType: 'topic', relationship: 'related', label: 'Prostate Conditions' },
  ],
  tags: {
    systems: ['urinary', 'male reproductive'],
    topics: ['cancer', 'oncology'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default prostateCancer;
