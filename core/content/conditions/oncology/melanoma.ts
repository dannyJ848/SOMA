/**
 * Melanoma - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const melanoma: EducationalContent = {
  id: 'condition-melanoma',
  type: 'condition',
  name: 'Melanoma',
  alternateNames: ['Malignant Melanoma', 'Cutaneous Melanoma'],
  hpoId: 'HP:0002859',

  levels: {
    1: {
      level: 1,
      summary: 'Melanoma is a serious skin cancer that starts in pigment cells. Checking your skin for new or changing moles using the ABCDE rule can help find it early when it is most treatable.',
      explanation: `Melanoma is a type of skin cancer that begins in cells called melanocytes, which make the pigment that gives skin its color. While less common than other skin cancers, it can spread to other parts of the body if not found early.

**ABCDE Rule for Checking Moles:**
- **A**symmetry: One half doesn't match the other
- **B**order: Irregular, ragged edges
- **C**olor: Different colors or uneven color
- **D**iameter: Larger than a pencil eraser (6mm)
- **E**volving: Changing in size, shape, or color

**Risk Factors:**
- Lots of moles
- Fair skin that burns easily
- History of blistering sunburns
- Use of tanning beds
- Family history of melanoma

**Prevention:**
- Use sunscreen (SPF 30+)
- Avoid tanning beds
- Seek shade during peak sun hours
- Wear protective clothing

**Treatment:**
- Surgery to remove the melanoma
- Immunotherapy for advanced cases
- Targeted therapy
- Radiation in some cases`,
      keyTerms: [
        { term: 'melanoma', definition: 'A serious skin cancer that starts in pigment-producing cells' },
        { term: 'melanocytes', definition: 'Cells that produce pigment (color) in the skin' },
        { term: 'biopsy', definition: 'Removing a sample of tissue to check for cancer' },
      ],
      analogies: ['Melanoma is like a rebel pigment cell that stops following the rules and starts multiplying uncontrollably.'],
      examples: ['A patient notices a mole on their arm that has changed shape and color. They see a doctor, who performs a biopsy and diagnoses early melanoma.'],
    },
    2: {
      level: 2,
      summary: 'Melanoma staging (0-IV) based on Breslow thickness, ulceration, and metastases guides treatment, with surgery curative for early disease and systemic therapy for advanced disease.',
      explanation: `## Types of Melanoma
- Superficial spreading: Most common
- Nodular: More aggressive, grows rapidly
- Lentigo maligna: Sun-exposed areas of elderly
- Acral lentiginous: Palms, soles, nail beds
- Amelanotic: No pigment, often missed

## Prognostic Factors
**Primary Tumor:**
- Breslow thickness (most important)
- Ulceration
- Mitotic rate
- Anatomic site (trunk worse than extremity)

## Staging (AJCC 8th Edition)
- Stage 0: In situ (confined to epidermis)
- Stage I: Thin melanoma without ulceration (<1mm)
- Stage II: Thick or ulcerated (>1mm)
- Stage III: Positive lymph nodes or in-transit mets
- Stage IV: Distant metastases

## Sentinel Lymph Node Biopsy
- Recommended for tumors ≥0.8mm or with high-risk features
- Identifies microscopic nodal disease
- Guides staging and treatment decisions

## Treatment by Stage
- Stage 0-II: Wide local excision
- Stage III: Excision + lymph node dissection +/- adjuvant therapy
- Stage IV: Systemic therapy (immunotherapy, targeted therapy)`,
      keyTerms: [
        { term: 'Breslow thickness', definition: 'Measurement of melanoma depth from granular layer to deepest point' },
        { term: 'sentinel lymph node', definition: 'First lymph node draining a tumor; checked for cancer spread' },
        { term: 'ulceration', definition: 'Absence of intact epidermis over melanoma; poor prognostic sign' },
      ],
    },
    3: {
      level: 3,
      summary: 'Melanoma management incorporates wide excision margins, sentinel node biopsy, adjuvant immunotherapy or targeted therapy for high-risk disease, and molecular testing for BRAF mutation status.',
      explanation: `## Surgical Margins
- In situ: 0.5-1 cm margin
- ≤1 mm: 1 cm margin
- 1-2 mm: 1-2 cm margin
- >2 mm: 2 cm margin
- No need for >2 cm margins

## Molecular Testing
Test all advanced melanomas for:
- BRAF V600 mutations (V600E, V600K)
- NRAS mutations
- KIT mutations (in acral, mucosal, chronic sun-damaged)

## Adjuvant Therapy (Stage III, resected Stage IV)
**BRAF-mutant:**
- Dabrafenib + trametinib (BRAF + MEK inhibition)
- 1-year relapse-free survival benefit

**Regardless of BRAF status:**
- Pembrolizumab or nivolumab (PD-1 inhibitors)
- 1 year of treatment

## Metastatic Treatment
**First-Line Selection:**
- BRAF/MEK inhibitors if BRAF mutant and rapid response needed
- PD-1 inhibitor monotherapy or nivolumab + ipilimumab

**BRAF/MEK Inhibitors:**
- Dabrafenib + trametinib
- Vemurafenib + cobimetinib
- Encorafenib + binimetinib

## Immunotherapy
- Anti-PD-1: Nivolumab, pembrolizumab
- Anti-CTLA-4: Ipilimumab
- Combination: Nivolumab + ipilimumab (higher response, more toxicity)`,
      keyTerms: [
        { term: 'BRAF mutation', definition: 'Genetic change in melanoma targetable with BRAF/MEK inhibitors' },
        { term: 'PD-1 inhibitor', definition: 'Immunotherapy blocking programmed death-1 receptor' },
        { term: 'CTLA-4 inhibitor', definition: 'Immunotherapy blocking cytotoxic T-lymphocyte-associated protein 4' },
      ],
      clinicalNotes: 'BRAF/MEK inhibitors produce rapid responses but resistance develops. Immunotherapy can produce durable responses including long-term remissions but has lower initial response rates.',
    },
    4: {
      level: 4,
      summary: 'Advanced melanoma management addresses brain metastases, immunotherapy toxicity management, treatment sequencing, and novel approaches including T-VEC and adoptive cell therapy.',
      explanation: `## Brain Metastases
- Common site of spread (up to 50%)
- PD-1 inhibitors have CNS activity
- BRAF/MEK inhibitors penetrate CNS
- SRS for limited disease
- Consider WBRT for extensive disease

## Immunotherapy Toxicity
**Immune-Related Adverse Events:**
- Dermatitis, colitis, hepatitis
- Thyroiditis, hypophysitis
- Pneumonitis, nephritis
- Management: Corticosteroids, hold therapy

**Grading:**
- Grade 1: Continue therapy
- Grade 2: Hold, resume at ≤ grade 1
- Grade 3-4: Permanently discontinue

## Neoadjuvant Therapy
- Immunotherapy before surgery for resectable disease
- Pathologic complete response associated with excellent outcome
- OpACIN, NeoCombo, SWOG S1801 trials

## Novel Approaches
**T-VEC (Talimogene laherparepvec):**
- Modified herpes virus
- Injected into lesions
- Approved for injectable metastatic disease

**Adoptive Cell Therapy:**
- Tumor-infiltrating lymphocytes (TILs)
- High response rates in refractory disease
- Limited availability

## Treatment Sequencing
- BRAF/MEK first for rapidly progressive, symptomatic
- Immunotherapy first for less urgent, or contraindication to targeted
- Consider clinical trial for advanced disease`,
      keyTerms: [
        { term: 'irAE', definition: 'Immune-related adverse event; toxicity from checkpoint inhibitors' },
        { term: 'SRS', definition: 'Stereotactic radiosurgery; focused radiation for brain tumors' },
        { term: 'TIL', definition: 'Tumor-infiltrating lymphocyte; cell therapy using patient tumor immune cells' },
      ],
      clinicalNotes: 'Neoadjuvant immunotherapy is becoming standard for high-risk resectable melanoma. Monitor patients on immunotherapy for irAEs—they can occur anytime, even after stopping therapy.',
    },
    5: {
      level: 5,
      summary: 'Melanoma research explores biomarkers for immunotherapy response, combination strategies, novel targets (NTRK, KIT), adoptive cellular therapies, and understanding of primary and acquired resistance mechanisms.',
      explanation: `## Biomarker Development
**Predictors of Immunotherapy Response:**
- Tumor mutational burden
- PD-L1 expression (limited utility)
- Tumor-infiltrating lymphocytes
- Gene expression profiling
- Gut microbiome composition

**Emerging Biomarkers:**
- ctDNA for minimal residual disease
- Peripheral blood immune profiling
- Autoantibody signatures

## Novel Targets
- NTRK fusions: Larotrectinib, entrectinib
- KIT mutations: Imatinib (select patients)
- TEK mutations
- GNAQ/GNA11 (uveal melanoma)

## Combination Strategies
- Anti-PD-1 + LAG-3 inhibition (relatlimab)
- Anti-PD-1 + IDO inhibitors
- Triplet: Targeted + immunotherapy
- Oncolytic virus + checkpoint inhibitor

## Resistance Mechanisms
**Targeted Therapy:**
- Secondary BRAF mutations
- MEK mutations
- Alternative pathway activation (EGFR, PDGFR)
- Phenotype switching

**Immunotherapy:**
- JAK/STAT pathway mutations
- B2M loss
- MHC downregulation
- T-cell exhaustion

## Uveal Melanoma
- Distinct biology from cutaneous
- Poor response to immunotherapy
- Liver-directed therapies
- Tebentafusp (TCB) for HLA-A*02:01 positive
- Clinical trial preferred`,
      keyTerms: [
        { term: 'tumor mutational burden', definition: 'Number of mutations per megabase; higher predicts immunotherapy response' },
        { term: 'tebentafusp', definition: 'Bispecific protein targeting gp100 in uveal melanoma' },
        { term: 'phenotype switching', definition: 'Melanoma transformation from proliferative to invasive state' },
      ],
      clinicalNotes: 'Relatlimab + nivolumab is the first new checkpoint inhibitor class approved for melanoma. Uveal melanoma requires different approaches—tebentafusp and liver-directed therapies are key.',
    },
  },

  media: [],
  citations: [
    { id: 'nccn-melanoma-2024', type: 'website', title: 'NCCN Guidelines for Cutaneous Melanoma', source: 'National Comprehensive Cancer Network' },
    { id: 'asco-melanoma-2024', type: 'website', title: 'ASCO Guidelines for Melanoma', source: 'American Society of Clinical Oncology' },
  ],
  crossReferences: [
    { targetId: 'condition-basal-cell', targetType: 'condition', relationship: 'related', label: 'Basal Cell Carcinoma' },
    { targetId: 'condition-squamous-cell', targetType: 'condition', relationship: 'related', label: 'Squamous Cell Carcinoma' },
  ],
  tags: { systems: ['integumentary'], topics: ['oncology', 'dermatology'], keywords: ['melanoma', 'skin cancer', 'ABCDE', 'Breslow', 'BRAF', 'immunotherapy'], clinicalRelevance: 'critical', examRelevance: { usmle: true, nbme: true, shelf: ['dermatology', 'surgery'] } },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default melanoma;
