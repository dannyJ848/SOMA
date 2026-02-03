/**
 * Prostate Conditions - Educational Content
 */

import { EducationalContent } from '../../types';

export const prostateConditions: EducationalContent = {
  id: 'topic-prostate-conditions',
  type: 'topic',
  name: 'Prostate Conditions',
  alternateNames: ['Prostate Problems', 'Prostate Disease', 'Prostatitis'],

  levels: {
    1: {
      level: 1,
      summary: 'The prostate is a small gland in men that can cause problems with urination as men age or become infected or inflamed.',
      explanation: `The prostate is a walnut-sized gland that sits below the bladder in men. Common prostate problems include:

**Enlarged Prostate (BPH):**
- Very common after age 50
- Makes it harder to urinate
- NOT cancer
- Treatable with medication or surgery

**Prostatitis (Prostate Infection/Inflammation):**
- Can happen at any age
- Causes pain in the pelvic area
- May cause fever and urinary symptoms
- Treated with antibiotics if bacterial

**Prostate Cancer:**
- Common in older men
- Often grows slowly
- Regular screening recommended
- Many treatment options available

**Warning Signs to See a Doctor:**
- Difficulty urinating
- Frequent urination, especially at night
- Pain in pelvis, back, or with urination
- Blood in urine or semen`,
      keyTerms: [
        { term: 'prostate', definition: 'A gland below the bladder that produces fluid for semen' },
        { term: 'BPH', definition: 'Benign prostatic hyperplasia - non-cancerous prostate growth' },
        { term: 'prostatitis', definition: 'Inflammation or infection of the prostate' },
      ],
      analogies: [
        'The prostate surrounds the urethra like a donut around a straw.',
      ],
      examples: [
        'Getting up several times at night to urinate is a common sign of prostate problems.',
      ],
    },
    2: {
      level: 2,
      summary: 'Prostate conditions include BPH (hyperplasia), prostatitis (acute/chronic bacterial and non-bacterial), and malignancy, each with distinct presentation and management.',
      explanation: `## Benign Prostatic Hyperplasia (BPH)

**Epidemiology:**
- 50% of men by age 50
- 90% by age 80

**Symptoms (LUTS):**
- Storage: Frequency, urgency, nocturia
- Voiding: Weak stream, hesitancy, straining

**Evaluation:**
- IPSS score
- DRE
- PSA
- Post-void residual

## Prostatitis Classification (NIH)

**Category I: Acute Bacterial**
- Fever, chills, malaise
- Dysuria, perineal pain
- Tender, boggy prostate
- E. coli most common

**Category II: Chronic Bacterial**
- Recurrent UTIs
- Same organism
- Positive prostatic cultures

**Category III: CP/CPPS**
- IIIA: Inflammatory (WBCs in secretions)
- IIIB: Non-inflammatory
- No proven infection
- Most common form

**Category IV: Asymptomatic Inflammatory**
- Incidental finding
- WBCs in semen or biopsy
- No treatment usually

## Basic Prostate Cancer Overview

**Risk Factors:**
- Age >50
- African American race
- Family history
- BRCA2 mutations

**Screening:**
- PSA blood test
- Digital rectal exam
- Shared decision-making`,
      keyTerms: [
        { term: 'CP/CPPS', definition: 'Chronic prostatitis/chronic pelvic pain syndrome' },
        { term: 'PSA', definition: 'Prostate-specific antigen - blood test for prostate conditions' },
        { term: 'LUTS', definition: 'Lower urinary tract symptoms' },
      ],
      analogies: [
        'Think of prostatitis categories like a spectrum from clearly infected to mysteriously painful.',
      ],
    },
    3: {
      level: 3,
      summary: 'Prostate conditions pathophysiology involves hormonal, infectious, inflammatory, and neoplastic mechanisms requiring tailored diagnostic and therapeutic approaches.',
      explanation: `## BPH Pathophysiology

**Hormonal Factors:**
- DHT drives growth
- Stromal-epithelial interactions
- Age-related hormone changes

**Components:**
- Static: Tissue enlargement
- Dynamic: Smooth muscle tone
- Alpha-1 receptors in stroma

## Prostatitis Mechanisms

**Acute Bacterial:**
- Ascending infection
- Intraprostatic reflux
- Prostatic ductal colonization

**Chronic Bacterial:**
- Biofilm formation
- Prostatic calculi as nidus
- Poor antibiotic penetration

**CP/CPPS:**
- Neuroinflammation
- Pelvic floor dysfunction
- Central sensitization
- Autoimmune component (possible)

## Diagnostic Workup

**BPH Evaluation:**
- IPSS questionnaire
- Uroflowmetry
- Post-void residual
- Pressure-flow studies (complex cases)

**Prostatitis Workup:**
| Test | Purpose |
|------|---------|
| Urinalysis | Infection screen |
| Urine culture | Organism identification |
| 2-glass or 4-glass test | Localize infection |
| Semen analysis | Evaluate EPS |

**Cancer Evaluation:**
- PSA, free/total ratio
- PHI, 4Kscore
- MRI with PI-RADS
- Targeted biopsy

## Treatment Approaches

**Acute Prostatitis:**
- Fluoroquinolone 4-6 weeks
- OR TMP-SMX 4-6 weeks
- Supportive care
- May need hospitalization

**Chronic Bacterial:**
- Prolonged antibiotics (6-12 weeks)
- Alpha-blocker adjunct
- Consider prostatic massage

**CP/CPPS:**
- Multimodal approach
- Alpha-blockers
- Anti-inflammatories
- Pelvic floor PT
- Neuromodulators (amitriptyline)`,
      keyTerms: [
        { term: 'biofilm', definition: 'Bacterial community protected by matrix, resistant to antibiotics' },
        { term: '4-glass test', definition: 'Meares-Stamey test localizing infection to urethra, bladder, or prostate' },
        { term: 'PI-RADS', definition: 'Prostate Imaging Reporting and Data System for MRI interpretation' },
      ],
      clinicalNotes: 'Avoid vigorous prostatic massage in acute prostatitis due to risk of bacteremia. CP/CPPS often requires months of multimodal therapy.',
    },
    4: {
      level: 4,
      summary: 'Advanced prostate condition management includes phenotyping chronic prostatitis, managing refractory BPH, and integrating multiparametric MRI in cancer evaluation.',
      explanation: `## UPOINT Phenotyping for CP/CPPS

**Domains:**
- U: Urinary symptoms
- P: Psychosocial (depression, catastrophizing)
- O: Organ-specific (prostate tenderness)
- I: Infection (history)
- N: Neurologic/systemic
- T: Tenderness (pelvic floor)

**Treatment Targeting:**
- Address each positive domain
- Multimodal approach
- Individualized therapy

## Refractory BPH

**Complications Indicating Surgery:**
- Recurrent retention
- Recurrent UTI
- Bladder stones
- Renal insufficiency
- Recurrent gross hematuria

**Surgical Options:**
- TURP (gold standard)
- HoLEP (large prostates)
- PVP (GreenLight laser)
- Simple prostatectomy (>80-100g)
- Minimally invasive (UroLift, Rezum)

## Multiparametric MRI

**Sequences:**
- T2-weighted
- DWI (diffusion-weighted)
- DCE (dynamic contrast-enhanced)

**PI-RADS v2.1:**
- 1-2: Very low/low suspicion
- 3: Intermediate
- 4-5: High/very high suspicion

**Fusion Biopsy:**
- MRI-ultrasound fusion
- Targeted sampling
- Improved cancer detection
- Reduced over-diagnosis of low-grade

## Chronic Prostatitis Management

**Antibiotic Strategy:**
- Lipophilic agents penetrate better
- Fluoroquinolones preferred
- Consider macrolides
- 6-12 weeks for chronic

**Non-Antibiotic Options:**
- Alpha-blockers (6 months trial)
- Phytotherapy (quercetin, pollen extract)
- Amitriptyline (neuropathic pain)
- Pelvic floor physiotherapy
- Acupuncture (some evidence)

**Refractory Cases:**
- Pain clinic referral
- Neuromodulation
- Psychological support
- TURP (rarely, controversial)`,
      keyTerms: [
        { term: 'multiparametric MRI', definition: 'Prostate MRI combining T2, DWI, and DCE sequences for lesion detection' },
        { term: 'fusion biopsy', definition: 'Combining MRI and ultrasound images to target suspicious lesions' },
        { term: 'UPOINT', definition: 'Phenotyping system for chronic pelvic pain guiding treatment' },
      ],
      clinicalNotes: 'MRI before biopsy is now standard in many practices. PI-RADS 4-5 lesions have 50-80% likelihood of clinically significant cancer.',
    },
    5: {
      level: 5,
      summary: 'Expert prostate care encompasses molecular diagnostics, novel therapeutics, and personalized treatment strategies for complex conditions.',
      explanation: `## Molecular Diagnostics

**Biomarkers for Cancer:**
- PHI (Prostate Health Index)
- 4Kscore
- PCA3 urine test
- SelectMDx
- ExoDx Prostate

**Genetic Testing:**
- BRCA1/2
- Lynch syndrome genes
- Guides screening intensity
- Treatment implications (PARP inhibitors)

## Novel Prostatitis Research

**Microbiome Studies:**
- Prostatic microbiome exists
- Dysbiosis in prostatitis
- Therapeutic implications unclear

**Immune Dysregulation:**
- Th1/Th17 imbalance
- Autoantibodies
- Targeted immunotherapy (future)

**Neuromodulation:**
- PTNS for CP/CPPS
- Sacral neuromodulation
- Limited evidence currently

## Advanced BPH Therapies

**Prostatic Artery Embolization:**
- Interventional radiology procedure
- Reduces prostate blood flow
- Alternative to surgery
- Emerging evidence

**Aquablation:**
- Robotic waterjet ablation
- Ultrasound guided
- Preserves ejaculatory function

**TIND/iTind:**
- Temporary implanted nitinol device
- Reshapes prostatic urethra
- Removes after 5 days

## Personalized Medicine

**Treatment Selection:**
- Genetic markers
- Symptom phenotyping
- Patient preferences
- Sexual function priority

**Outcomes Prediction:**
- Nomograms
- Machine learning models
- Shared decision aids

## Quality and Research

**Registries:**
- BPH surgical outcomes
- Cancer surveillance cohorts
- CP/CPPS research networks

**Clinical Trials:**
- Novel drug targets
- Device innovations
- Combination therapies

**Guidelines Integration:**
- AUA/CUA/SUFU for LUTS
- NIH consensus on prostatitis
- NCCN for cancer`,
      keyTerms: [
        { term: 'PHI', definition: 'Prostate Health Index - blood test combining PSA forms for cancer risk' },
        { term: 'prostatic artery embolization', definition: 'Catheter-based procedure blocking blood supply to shrink prostate' },
        { term: 'iTind', definition: 'Temporary implantable nitinol device for BPH treatment' },
      ],
      clinicalNotes: 'Prostatic artery embolization is gaining acceptance for men who are poor surgical candidates or prefer to avoid surgery. Long-term comparative data with TURP still maturing.',
    },
  },

  media: [],
  citations: [
    {
      id: 'aua-bph-guidelines',
      type: 'article',
      title: 'Management of Benign Prostatic Hyperplasia',
      source: 'AUA Guidelines',
    },
  ],
  crossReferences: [
    { targetId: 'condition-bph', targetType: 'condition', relationship: 'child', label: 'BPH' },
    { targetId: 'cancer-prostate-cancer', targetType: 'topic', relationship: 'related', label: 'Prostate Cancer' },
  ],
  tags: {
    systems: ['urinary', 'male reproductive'],
    topics: ['prostate', 'male health'],
    clinicalRelevance: 'high',
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default prostateConditions;
