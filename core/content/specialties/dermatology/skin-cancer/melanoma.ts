/**
 * Melanoma - Comprehensive Educational Content
 *
 * Covers pathophysiology, clinical presentation, staging, and management
 * of cutaneous melanoma.
 */

import { EducationalContent } from '../../../types';

export const melanomaContent: EducationalContent = {
  id: 'dermatology-melanoma',
  type: 'condition',
  name: 'Melanoma',
  alternateNames: ['Malignant Melanoma', 'Cutaneous Melanoma'],

  levels: {
    1: {
      level: 1,
      summary: 'Melanoma is a serious type of skin cancer that starts in the cells that give your skin its color.',
      explanation: `Melanoma is a type of skin cancer. While it is not the most common skin cancer, it is the most serious because it can spread to other parts of your body if not caught early.

**What Causes Melanoma?**
Melanoma starts in melanocytes - the cells that make melanin, the pigment that gives your skin its color. Too much sun exposure, especially sunburns, increases your risk.

**What to Look For (ABCDEs):**
- **A - Asymmetry**: One half does not match the other half
- **B - Border**: Edges are ragged, blurred, or irregular
- **C - Color**: Color is not the same throughout (different shades of brown, black, pink, red, white, or blue)
- **D - Diameter**: Larger than a pencil eraser (about 6mm)
- **E - Evolving**: The mole is changing in size, shape, or color

**Who Is at Risk?**
- People with fair skin, light hair, and light eyes
- People with many moles
- People who have had bad sunburns
- Family history of melanoma

**The Good News:**
When found early, melanoma can almost always be cured with surgery. That is why checking your skin regularly is so important!`,
      keyTerms: [
        { term: 'melanoma', definition: 'A serious type of skin cancer that starts in pigment-making cells' },
        { term: 'melanocyte', definition: 'A cell that makes melanin, the pigment that colors your skin' },
        { term: 'mole', definition: 'A spot on the skin, also called a nevus' },
        { term: 'biopsy', definition: 'Removing a small piece of skin to check for cancer' },
      ],
      analogies: [
        'Melanocytes are like tiny paint factories in your skin that make the color pigment.',
        'The ABCDEs are like a checklist to help spot a bad mole - like checking if an apple is rotten.',
      ],
      examples: [
        'A mole that used to be round and brown but now has uneven edges and multiple colors should be checked by a doctor.',
        'A new dark spot that appeared and keeps getting bigger needs to be examined.',
      ],
    },
    2: {
      level: 2,
      summary: 'Melanoma is an aggressive malignancy of melanocytes with potential for metastasis, requiring early detection and prompt surgical treatment for optimal outcomes.',
      explanation: `Melanoma accounts for about 1% of skin cancers but causes the majority of skin cancer deaths due to its propensity for metastasis.

## Epidemiology
- Incidence increasing worldwide
- Lifetime risk: ~2.5% (US)
- Median age at diagnosis: 65 years
- More common in fair-skinned populations

## Risk Factors
**Non-modifiable:**
- Fair skin (Fitzpatrick types I-II)
- Red or blonde hair
- Many nevi (>50 common moles)
- Dysplastic nevi
- Family history of melanoma
- Personal history of melanoma
- Immunosuppression

**Modifiable:**
- UV exposure (sun and tanning beds)
- History of sunburns (especially blistering)

## Clinical Types

### Superficial Spreading Melanoma (70%)
- Most common type
- Horizontal growth phase before vertical invasion
- Often arises in pre-existing nevus

### Nodular Melanoma (15-30%)
- Rapidly growing, often ulcerated nodule
- Vertical growth from onset
- Worse prognosis due to early invasion

### Lentigo Maligna Melanoma (10-15%)
- On chronically sun-damaged skin
- Elderly patients, head/neck
- Prolonged horizontal growth phase

### Acral Lentiginous Melanoma (5%)
- Palms, soles, nail beds
- Most common type in dark-skinned individuals
- Often diagnosed late

## ABCDE Criteria
- **Asymmetry**: Asymmetric shape
- **Border**: Irregular, scalloped, or poorly defined
- **Color**: Varied colors (tan, brown, black, red, white, blue)
- **Diameter**: >6mm (though melanomas can be smaller)
- **Evolution**: Change in size, shape, or symptoms`,
      keyTerms: [
        { term: 'dysplastic nevus', definition: 'An atypical mole with irregular features that may have increased melanoma risk', pronunciation: 'dis-PLAS-tik NEE-vus' },
        { term: 'Breslow thickness', definition: 'Measurement of melanoma depth from skin surface to deepest tumor cell' },
        { term: 'metastasis', definition: 'Spread of cancer from original site to other body parts', pronunciation: 'meh-TAS-tah-sis' },
        { term: 'sentinel lymph node', definition: 'The first lymph node to which cancer cells are likely to spread' },
      ],
      analogies: [
        'Breslow thickness is like measuring how deep a nail has been driven into wood - deeper means more damage.',
        'Sentinel lymph node biopsy is like checking the first drain in a pipe system to see if anything has flowed through.',
      ],
    },
    3: {
      level: 3,
      summary: 'Melanoma is a malignant neoplasm of neural crest-derived melanocytes characterized by complex genetics, immunogenic properties, and stage-dependent treatment approaches.',
      explanation: `## Molecular Pathogenesis

### Key Genetic Alterations
- **BRAF mutations**: 40-50% of melanomas (V600E most common)
- **NRAS mutations**: 15-20%
- **NF1 mutations**: 10-15%
- **KIT mutations/amplifications**: Acral and mucosal melanomas
- **CDKN2A loss**: Familial melanoma

### UV-Induced Damage
- UVB: Direct DNA damage (pyrimidine dimers)
- UVA: Indirect oxidative damage
- UV signature mutations: C>T transitions at dipyrimidine sites

## Histopathology

### Growth Phases
**Radial Growth Phase (RGP)**:
- Horizontal spread within epidermis
- Limited metastatic potential
- Microinvasion into papillary dermis possible

**Vertical Growth Phase (VGP)**:
- Downward invasion into dermis
- Tumorigenic - can form nodules
- Metastatic potential

### Histologic Features
- Pagetoid spread of melanocytes
- Cytologic atypia
- Mitotic figures
- Lack of maturation with depth
- Ulceration (poor prognostic sign)

## Staging (AJCC 8th Edition)

### T Classification (Breslow Thickness)
- T1: ≤1.0 mm (a: <0.8mm; b: 0.8-1.0mm or ulcerated)
- T2: >1.0-2.0 mm
- T3: >2.0-4.0 mm
- T4: >4.0 mm

### N Classification
- N1: 1 lymph node
- N2: 2-3 lymph nodes
- N3: ≥4 lymph nodes or in-transit/satellite metastases

### M Classification
- M1a: Distant skin, soft tissue, or nodal metastases
- M1b: Lung metastases
- M1c: Other visceral metastases
- M1d: CNS metastases

## Treatment Principles

### Surgical
- Wide local excision with margins based on thickness
- Sentinel lymph node biopsy for tumors >0.8mm

### Systemic Therapy
**Targeted Therapy** (BRAF-mutant):
- BRAF inhibitors (vemurafenib, dabrafenib)
- MEK inhibitors (trametinib, cobimetinib)

**Immunotherapy**:
- Anti-PD-1 (pembrolizumab, nivolumab)
- Anti-CTLA-4 (ipilimumab)
- Combination immunotherapy`,
      keyTerms: [
        { term: 'BRAF mutation', definition: 'Genetic alteration in the BRAF gene driving melanoma growth, targetable with specific inhibitors' },
        { term: 'pagetoid spread', definition: 'Upward migration of melanocytes through epidermis, characteristic of melanoma' },
        { term: 'radial growth phase', definition: 'Horizontal spread of melanoma within epidermis before vertical invasion' },
        { term: 'vertical growth phase', definition: 'Downward invasion of melanoma into dermis with metastatic potential' },
        { term: 'Clark level', definition: 'Anatomic depth of invasion (I-V), now superseded by Breslow thickness' },
      ],
      clinicalNotes: 'BRAF mutation status should be assessed in all stage III-IV patients. Sentinel lymph node biopsy is recommended for melanomas >0.8mm or with ulceration.',
    },
    4: {
      level: 4,
      summary: 'Melanoma pathogenesis involves UV-induced mutagenesis, oncogenic signaling through MAPK and PI3K pathways, immune evasion mechanisms, and a tumor microenvironment that influences therapeutic response.',
      explanation: `## Molecular Oncogenesis

### Signaling Pathways
**MAPK Pathway** (RAS-RAF-MEK-ERK):
- BRAF V600E: Constitutive kinase activation
- NRAS mutations: GTP-bound active state
- Results in proliferation, survival, invasion
- Feedback loops with PI3K pathway

**PI3K-AKT-mTOR Pathway**:
- PTEN loss in 30-50% of melanomas
- Cross-talk with MAPK pathway
- Promotes survival, metabolism, growth

**Cell Cycle Dysregulation**:
- CDKN2A locus: p16INK4a (CDK4/6 inhibitor), p14ARF (MDM2 inhibitor)
- CDK4 amplification/mutation
- Cyclin D1 amplification

### Melanoma Subtypes by Genomics
| Subtype | Key Alterations | Characteristics |
|---------|-----------------|-----------------|
| BRAF-mutant | BRAF V600E/K | Sun-exposed, younger |
| RAS-mutant | NRAS Q61 | Nodular, thicker |
| NF1-mutant | NF1 loss | Older, high mutation burden |
| Triple wild-type | KIT, GNAQ, GNA11 | Acral, mucosal, uveal |

## Tumor Microenvironment

### Immune Landscape
- Melanoma is highly immunogenic (high mutation burden)
- Tumor-infiltrating lymphocytes (TILs) predict prognosis
- PD-L1 expression on tumor cells
- Regulatory T cells (Tregs) suppress anti-tumor immunity
- Myeloid-derived suppressor cells (MDSCs)

### Immune Evasion Mechanisms
- PD-L1/PD-1 checkpoint engagement
- Loss of MHC class I expression
- Beta-2 microglobulin mutations
- Interferon-gamma signaling defects
- JAK1/2 mutations (acquired resistance)

## Immunotherapy Mechanisms

### Anti-PD-1 (Pembrolizumab, Nivolumab)
- Blocks PD-1 receptor on T cells
- Prevents exhaustion, restores cytotoxicity
- Response rate: 40-45% monotherapy
- Durable responses in responders

### Anti-CTLA-4 (Ipilimumab)
- Blocks inhibitory checkpoint on T cells
- Enhances T cell priming in lymph nodes
- More immune-related adverse events
- Synergistic with anti-PD-1

### Combination Therapy
- Nivolumab + Ipilimumab
- Higher response rates (~60%)
- Increased toxicity (grade 3-4: 55%)
- OS benefit over monotherapy

## Targeted Therapy

### BRAF + MEK Inhibition
**Rationale**: MEK inhibitor prevents resistance from feedback reactivation
- Dabrafenib + Trametinib
- Encorafenib + Binimetinib
- Response rates: 65-70%
- Median PFS: 11-14 months

### Resistance Mechanisms
**Primary**:
- Innate pathway alterations
- PTEN loss (PI3K activation)

**Acquired**:
- BRAF amplification
- MEK1/2 mutations
- RAS mutations
- Non-MAPK pathway activation

## Adjuvant Therapy
- Anti-PD-1: Approved for stage III resected melanoma
- BRAF/MEK: Alternative for BRAF-mutant tumors
- Significant relapse-free survival benefit`,
      keyTerms: [
        { term: 'tumor-infiltrating lymphocytes', definition: 'Immune cells within tumor that can recognize and attack cancer cells (TILs)' },
        { term: 'PD-L1', definition: 'Programmed death-ligand 1 - checkpoint molecule that suppresses T cell function' },
        { term: 'CDKN2A', definition: 'Gene encoding p16 and p14ARF tumor suppressors, frequently lost in melanoma' },
        { term: 'immune checkpoint inhibitor', definition: 'Antibody that blocks inhibitory receptors on T cells to enhance anti-tumor immunity' },
        { term: 'PTEN', definition: 'Tumor suppressor that inhibits PI3K pathway, often lost in melanoma' },
      ],
      clinicalNotes: 'Combination immunotherapy (nivo/ipi) shows superior OS in BRAF wild-type melanoma. For BRAF-mutant disease, sequencing of targeted vs immunotherapy remains debated. Baseline LDH is an independent prognostic factor.',
    },
    5: {
      level: 5,
      summary: 'Contemporary melanoma management integrates molecular profiling, precision medicine approaches, novel immunotherapy combinations, and understanding of resistance mechanisms to optimize patient outcomes.',
      explanation: `## Advanced Molecular Diagnostics

### Gene Expression Profiling
- **DecisionDx-Melanoma**: 31-gene signature for metastatic risk
- **Castle Biosciences**: Risk stratification beyond AJCC staging
- Impact on surveillance intensity and adjuvant therapy decisions

### Circulating Tumor DNA (ctDNA)
- BRAF V600E detection in plasma
- Monitoring for minimal residual disease
- Early detection of relapse
- Response assessment in metastatic disease

### Whole Exome/Genome Sequencing
- Tumor mutation burden (TMB) as immunotherapy biomarker
- Neoantigen prediction
- Identification of actionable alterations beyond BRAF

## Emerging Therapeutic Strategies

### Novel Immunotherapy Approaches
**LAG-3 Inhibition**:
- Relatlimab + nivolumab (Opdualag) approved 2022
- LAG-3: Third checkpoint, synergy with PD-1 blockade
- Improved PFS vs nivolumab monotherapy

**TIM-3, TIGIT Inhibitors**:
- Phase II/III trials ongoing
- Rational combinations with PD-1 blockade

**Intratumoral Therapies**:
- Talimogene laherparepvec (T-VEC): Oncolytic HSV-1
- TLR9 agonists (tilsotolimod)
- IL-2 variants

### Cellular Therapies
**Tumor-Infiltrating Lymphocyte (TIL) Therapy**:
- Lifileucel (Amtagvi) FDA approved 2024
- Ex vivo expansion of autologous TILs
- Response rates ~30% in checkpoint-refractory patients
- Durable complete responses observed

**CAR-T and TCR Therapies**:
- Targeting melanoma antigens (MART-1, gp100, NY-ESO-1)
- Early-phase clinical trials
- Toxicity and tumor specificity challenges

### Resistance Strategies
**Overcoming Anti-PD-1 Resistance**:
- Combination with novel checkpoints
- STING agonists for innate immune activation
- Fecal microbiota transplantation (FMT)
- Epigenetic modifiers (HDAC inhibitors)

**BRAF/MEK Resistance**:
- ERK inhibitors
- Pan-RAF inhibitors
- Triplet therapy (BRAF + MEK + CDK4/6 or PI3K)
- Intermittent dosing schedules

## Special Clinical Scenarios

### Mucosal Melanoma
- Poor prognosis, lower response to immunotherapy
- KIT mutations: Imatinib sensitivity
- Consider combination immunotherapy upfront

### Uveal Melanoma
- GNAQ/GNA11 mutations (not BRAF)
- Liver-tropic metastases
- Tebentafusp (bispecific gp100-CD3): OS benefit

### Brain Metastases
- Common in advanced melanoma (40-50%)
- Combination immunotherapy effective intracranially
- Stereotactic radiosurgery integration
- Improved survival with modern therapies

### Adjuvant and Neoadjuvant Therapy
**Neoadjuvant Immunotherapy**:
- Higher pathological response rates
- Potential to reduce surgical morbidity
- SWOG S1801: EFS benefit for neoadjuvant pembro

**Adjuvant Duration**:
- Standard: 1 year of anti-PD-1
- Ongoing trials of shorter duration
- Risk-adapted approaches

## Toxicity Management

### Immune-Related Adverse Events (irAEs)
- Colitis: Most common GI irAE, steroids first-line
- Pneumonitis: Hold therapy, high-dose steroids
- Hepatitis: Steroids, mycophenolate if refractory
- Endocrinopathies: Often permanent, hormone replacement
- Neurologic: Rare but serious, aggressive immunosuppression

### Long-term Survivorship
- Cardiovascular monitoring after immunotherapy
- Secondary malignancy surveillance
- Dermatologic screening (eruptive nevi, new primaries)
- Quality of life assessment`,
      keyTerms: [
        { term: 'tumor mutation burden', definition: 'Number of mutations per megabase of DNA, predictive of immunotherapy response (TMB)' },
        { term: 'TIL therapy', definition: 'Adoptive cell therapy using expanded tumor-infiltrating lymphocytes', pronunciation: 'TIL' },
        { term: 'ctDNA', definition: 'Circulating tumor DNA - cell-free DNA from tumor cells in blood' },
        { term: 'LAG-3', definition: 'Lymphocyte activation gene-3 - immune checkpoint receptor on T cells' },
        { term: 'neoadjuvant', definition: 'Treatment given before the main treatment (usually surgery) to improve outcomes' },
        { term: 'bispecific antibody', definition: 'Engineered antibody that binds two different targets simultaneously' },
      ],
      clinicalNotes: `Key clinical considerations:
1. ctDNA monitoring can detect molecular relapse before radiographic progression
2. TIL therapy offers new options for checkpoint-refractory patients
3. Neoadjuvant immunotherapy may become standard for resectable stage III disease
4. LAG-3 combinations expanding options for treatment-naive patients
5. Uveal melanoma requires distinct management due to different biology
6. Long-term irAE monitoring essential even after treatment completion`,
    },
  },

  media: [
    {
      id: 'melanoma-abcde',
      type: 'diagram',
      filename: 'melanoma-abcde.svg',
      title: 'ABCDE Criteria for Melanoma',
      description: 'Visual guide to the ABCDE warning signs of melanoma',
    },
    {
      id: 'melanoma-subtypes',
      type: 'image',
      filename: 'melanoma-subtypes.jpg',
      title: 'Melanoma Subtypes',
      description: 'Clinical appearance of superficial spreading, nodular, lentigo maligna, and acral melanoma',
    },
  ],

  citations: [
    {
      id: 'nccn-melanoma',
      type: 'website',
      title: 'NCCN Guidelines for Melanoma',
      source: 'National Comprehensive Cancer Network',
      url: 'https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1492',
    },
    {
      id: 'ajcc-staging',
      type: 'textbook',
      title: 'AJCC Cancer Staging Manual, 8th Edition',
      source: 'American Joint Committee on Cancer',
      chapter: 'Melanoma of the Skin',
    },
  ],

  crossReferences: [
    { targetId: 'dermatology-skin-anatomy', targetType: 'structure', relationship: 'related', label: 'Skin Anatomy' },
    { targetId: 'dermatology-skin-cancer-warning-signs', targetType: 'topic', relationship: 'related', label: 'Skin Cancer Warning Signs' },
    { targetId: 'dermatology-sun-protection', targetType: 'topic', relationship: 'related', label: 'Sun Protection' },
  ],

  tags: {
    systems: ['integumentary'],
    topics: ['oncology', 'dermatology', 'immunotherapy'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },

  createdAt: '2025-01-24T00:00:00Z',
  updatedAt: '2025-01-24T00:00:00Z',
  version: 1,
  status: 'published',
};

export default melanomaContent;
