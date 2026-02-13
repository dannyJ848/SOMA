/**
 * Squamous Cell Carcinoma - Comprehensive Educational Content
 *
 * Covers pathophysiology, clinical presentation, and management
 * of cutaneous squamous cell carcinoma.
 */

import { EducationalContent } from '../../../types';

export const squamousCellCarcinomaContent: EducationalContent = {
  id: 'dermatology-squamous-cell-carcinoma',
  type: 'condition',
  name: 'Squamous Cell Carcinoma',
  alternateNames: ['SCC', 'Cutaneous SCC', 'cSCC', 'Epidermoid Carcinoma'],

  levels: {
    1: {
      level: 1,
      summary: 'Squamous cell carcinoma is a common skin cancer caused mainly by sun damage that can spread if not treated.',
      explanation: `Squamous cell carcinoma (SCC) is the second most common type of skin cancer. Unlike basal cell carcinoma, SCC can sometimes spread to other parts of the body if not treated early.

**What Causes It?**
- Too much sun exposure (the main cause)
- Tanning beds
- Previous radiation treatment
- A weakened immune system
- Certain chemicals (like arsenic)
- Scars from burns or chronic wounds

**What Does It Look Like?**
- A firm, red bump
- A flat sore with a scaly crust
- A new sore or raised area on an old scar
- A rough, scaly patch on your lip
- A red sore or rough patch inside your mouth
- A wart-like growth

**Where Does It Usually Appear?**
- Face, ears, neck, lips, and back of hands
- Any area that gets a lot of sun
- Can also appear on scars, burns, or chronic sores

**Warning Signs:**
- A sore that does not heal
- A growth that keeps getting bigger
- Bleeding or crusting
- Pain or tenderness

**Treatment:**
Most SCCs can be cured with treatment, especially when found early. Treatment options include surgery, freezing, or radiation therapy.`,
      keyTerms: [
        { term: 'squamous cell carcinoma', definition: 'A type of skin cancer that starts in the flat cells on the outer layer of skin' },
        { term: 'metastasize', definition: 'When cancer spreads from where it started to other parts of the body' },
        { term: 'precancer', definition: 'Changes in skin cells that might become cancer if not treated' },
        { term: 'actinic keratosis', definition: 'A rough, scaly patch caused by sun damage that can turn into SCC' },
      ],
      analogies: [
        'Actinic keratoses are like warning signs on the road - they tell you to slow down and pay attention before reaching danger.',
        'SCC develops in the flat, scale-like cells of your skin, like tiles on a roof that have been damaged by the sun.',
      ],
      examples: [
        'A farmer notices a rough, scaly spot on his ear that has been there for months and is slowly getting bigger.',
        'A person who had organ transplant develops a sore on their hand that will not heal.',
      ],
    },
    2: {
      level: 2,
      summary: 'Cutaneous squamous cell carcinoma is a malignancy of epidermal keratinocytes with potential for local invasion and metastasis, strongly associated with cumulative UV exposure and immunosuppression.',
      explanation: `Cutaneous squamous cell carcinoma (cSCC) is the second most common skin cancer, with over 1 million cases diagnosed annually in the US.

## Epidemiology
- Second most common skin cancer (after BCC)
- Incidence increasing 50-200% over past decades
- Male > Female (2-3:1)
- Increases dramatically with age
- More common in fair-skinned individuals

## Risk Factors
**UV Exposure**:
- Cumulative lifetime exposure (main risk factor)
- Chronic occupational/recreational sun exposure
- Tanning bed use

**Host Factors**:
- Fair skin (Fitzpatrick types I-II)
- Immunosuppression (organ transplant recipients: 65-250x increased risk)
- Chronic inflammation/scarring (Marjolin's ulcer)
- HPV infection (especially in immunosuppressed)

**Precursor Lesions**:
- Actinic keratoses (AKs): 1-10% progress to SCC
- Bowen's disease (SCC in situ)
- Leukoplakia (oral)

## Clinical Presentation

### Classic Presentation
- Erythematous, scaly papule or plaque
- May have hyperkeratotic surface (cutaneous horn)
- Ulceration and bleeding common
- Tender or painful

### Anatomic Distribution
- Head and neck (most common)
- Dorsal hands
- Lower legs (women)
- Any sun-exposed area

### High-Risk Variants
- Arising in scars/chronic wounds (Marjolin's ulcer)
- Arising on lip, ear, temple
- Rapidly growing tumors
- Perineural involvement

## Staging (BWH System)
Risk factors counted:
- Diameter ≥2 cm
- Poorly differentiated
- Perineural invasion
- Invasion beyond subcutaneous fat

| Stage | Risk Factors | Metastatic Risk |
|-------|--------------|-----------------|
| T1 | 0 | 0-1% |
| T2a | 1 | 4% |
| T2b | 2-3 | 10% |
| T3 | 4 or bone invasion | 20%+ |

## Treatment
- Surgical excision with appropriate margins
- Mohs surgery for high-risk tumors/locations
- Radiation therapy for non-surgical candidates
- Systemic therapy for advanced disease`,
      keyTerms: [
        { term: 'actinic keratosis', definition: 'Precancerous skin lesion caused by UV damage that may progress to SCC', pronunciation: 'ak-TIN-ik ker-ah-TOH-sis' },
        { term: 'Bowen disease', definition: 'Squamous cell carcinoma in situ - cancer cells confined to epidermis', pronunciation: 'BOH-en' },
        { term: 'Marjolin ulcer', definition: 'SCC arising in a chronic wound, burn scar, or area of chronic inflammation' },
        { term: 'perineural invasion', definition: 'Cancer growth along or around nerves, indicates higher risk' },
        { term: 'cutaneous horn', definition: 'Horn-like projection of keratin, often overlying SCC or AK' },
      ],
      analogies: [
        'Actinic keratoses are like the tip of an iceberg - what you see on the surface may indicate more damage below.',
        'The progression from normal skin to AK to SCC is like a spectrum from yellow to orange to red light.',
      ],
    },
    3: {
      level: 3,
      summary: 'Cutaneous SCC pathogenesis involves UV-induced DNA damage, p53 mutations, and immune surveillance evasion, with treatment determined by risk stratification and potential for targeted therapy in advanced disease.',
      explanation: `## Molecular Pathogenesis

### UV-Induced Carcinogenesis
**Direct DNA Damage** (UVB):
- Cyclobutane pyrimidine dimers (CPDs)
- 6-4 photoproducts
- C→T transitions at dipyrimidine sites (UV signature)

**Indirect Damage** (UVA):
- Reactive oxygen species
- Oxidative DNA damage
- 8-oxoguanine formation

### Key Genetic Alterations
| Gene | Alteration | Function |
|------|------------|----------|
| TP53 | Inactivating mutations | Tumor suppressor (90%+) |
| CDKN2A | Loss/silencing | Cell cycle control |
| NOTCH1/2 | Inactivating mutations | Differentiation |
| EGFR | Overexpression | Growth signaling |
| RAS | Activating mutations | Growth signaling |
| PIK3CA | Activating mutations | Survival/growth |

### Field Cancerization
- UV damage affects entire sun-exposed area
- Multiple clones with mutations coexist
- Explains multiple SCCs and recurrence
- Entire field at risk, not just visible lesions

## Histopathology

### Well-Differentiated SCC
- Keratinization, keratin pearls
- Minimal cytologic atypia
- Low mitotic rate
- Low metastatic potential

### Moderately Differentiated SCC
- Some keratinization
- Moderate nuclear atypia
- Increased mitoses
- Intermediate risk

### Poorly Differentiated SCC
- Little/no keratinization
- Marked cytologic atypia
- High mitotic rate
- Higher metastatic potential

### Special Variants
- **Keratoacanthoma-type**: Crater with keratin plug, may regress
- **Spindle cell**: Sarcomatoid, aggressive
- **Adenosquamous**: Mixed features, aggressive
- **Desmoplastic**: Fibrotic stroma, high PNI risk

## Risk Stratification

### NCCN High-Risk Features
- Location: Lip, ear, temple, scalp, hands, feet, genitalia
- Size: ≥2cm (≥1cm in high-risk locations)
- Histology: Poorly differentiated, desmoplastic, adenosquamous
- Depth: Beyond subcutaneous fat, Clark level IV+
- Perineural invasion
- Recurrent tumor
- Immunosuppression

### Brigham and Women's Hospital (BWH) Staging
More prognostic than AJCC for cSCC:
- Counts high-risk factors (size, differentiation, PNI, depth)
- Better predicts nodal metastasis and death

## Treatment Approaches

### Standard Treatment
**Low-Risk SCC**:
- Standard excision (4-6mm margins)
- ED&C (selected cases)
- 5-year cure rate: >95%

**High-Risk SCC**:
- Mohs surgery (preferred for high-risk location)
- Wide excision with margin assessment
- Consider sentinel lymph node biopsy
- Adjuvant radiation if positive margins, PNI

### Advanced/Metastatic SCC
- Immunotherapy: Cemiplimab, pembrolizumab (anti-PD-1)
- ORR: 40-50%, durable responses
- Chemotherapy: Platinum-based (historical, less used now)
- EGFR inhibitors: Cetuximab (if PD-1 refractory)`,
      keyTerms: [
        { term: 'field cancerization', definition: 'Concept that sun damage affects entire area, creating a field of genetically abnormal cells' },
        { term: 'keratin pearl', definition: 'Whorl of keratinized cells in well-differentiated SCC, sign of squamous differentiation' },
        { term: 'desmoplastic SCC', definition: 'SCC variant with dense fibrous stroma and high risk of perineural invasion' },
        { term: 'keratoacanthoma', definition: 'Rapidly growing dome-shaped tumor with central keratin plug, may be SCC variant' },
        { term: 'cemiplimab', definition: 'Anti-PD-1 antibody FDA approved for advanced cutaneous SCC' },
      ],
      clinicalNotes: 'High-risk features mandate aggressive treatment and close follow-up. Transplant patients need frequent surveillance. SLNB should be considered for T2b/T3 tumors. Cemiplimab has transformed treatment of advanced SCC.',
    },
    4: {
      level: 4,
      summary: 'Advanced cSCC management requires understanding of molecular drivers, immunotherapy mechanisms, and complex clinical scenarios including transplant-associated and locally advanced disease.',
      explanation: `## Molecular Biology of cSCC

### Genetic Landscape
- One of highest mutation burdens of any cancer (~50 mutations/Mb)
- Predominantly UV signature (C→T, CC→TT)
- TP53 nearly universal (>90%)
- Overlapping alterations with normal sun-damaged skin

### Signaling Pathway Alterations

**RAS-MAPK Pathway**:
- HRAS mutations (3-20%)
- EGFR overexpression (>80%)
- Drives proliferation, survival
- Therapeutic target (cetuximab, erlotinib)

**PI3K-AKT-mTOR Pathway**:
- PIK3CA mutations (5-10%)
- PTEN loss
- mTOR activation
- Potential combination therapy target

**NOTCH Pathway**:
- NOTCH1/2 loss-of-function (75%)
- Normal function: Promotes differentiation
- Loss leads to undifferentiated state
- Tumor suppressor role in skin

### Immune Microenvironment
- High mutation burden = high neoantigen load
- Abundant tumor-infiltrating lymphocytes (TILs)
- PD-L1 expression common
- Explains immunotherapy responsiveness
- Immunosuppression dramatically increases risk

## Immunotherapy in cSCC

### Anti-PD-1 Antibodies
**Cemiplimab** (Libtayo):
- First FDA approval for advanced cSCC (2018)
- Phase II: ORR 47%, CR 16%
- Median DOR not reached (durable)
- Approved for locally advanced and metastatic

**Pembrolizumab** (Keytruda):
- FDA approved 2020 for advanced cSCC
- Phase II: ORR 34%, similar durability
- Alternative option

### Response Predictors
- Higher TMB associated with better response
- TIL density correlates with response
- PD-L1 expression less predictive than in other cancers
- Prior HPI use (in BCC→SCC) may reduce response

### Resistance Mechanisms
- Beta-2 microglobulin (B2M) loss → MHC class I loss
- JAK1/2 mutations → IFN-γ signaling defects
- Acquired resistance in ~20% of initial responders

## Organ Transplant Recipients

### Risk Magnitude
- 65-250x increased SCC risk
- SCC:BCC ratio reversed (more SCC than BCC)
- More aggressive behavior
- Higher metastatic rate
- Leading cause of cancer death in transplant patients

### Pathogenesis
- Chronic immunosuppression impairs immune surveillance
- HPV may play greater role
- More high-risk histologic features

### Management Strategies
**Primary Prevention**:
- Sun protection counseling
- Regular skin surveillance (dermatologist every 3-6 months)

**Immunosuppression Modification**:
- Reduction if feasible (coordinate with transplant team)
- Switch to mTOR inhibitor (sirolimus) - reduces SCC risk 50%
- Mycophenolate may be preferred over azathioprine

**Chemoprevention**:
- Acitretin (oral retinoid): Reduces new SCC formation
- Nicotinamide 500mg BID: Reduces SCC/BCC in high-risk patients
- Capecitabine: Reserved for extensive disease

**Surgical Management**:
- Aggressive treatment of precursors (AKs)
- Lower threshold for excision vs observation
- Consider more frequent Mohs when indicated

## Perineural Invasion (PNI)

### Classification
- Incidental PNI: Found on pathology, no symptoms
- Clinical PNI: Symptoms (pain, numbness, weakness)
- Large nerve involvement (≥0.1mm) worse prognosis

### Management
- Mohs surgery with nerve involvement protocols
- Adjuvant radiation therapy
- Consider imaging (MRI) to assess extent
- Named nerve involvement may require extensive surgery

### Prognosis
- 5-year recurrence: 20-35%
- 5-year metastasis: 15-30%
- Worse outcomes with large nerve/clinical involvement`,
      keyTerms: [
        { term: 'tumor mutation burden', definition: 'Number of mutations per megabase of tumor DNA, correlates with immunotherapy response in cSCC (TMB)' },
        { term: 'B2M', definition: 'Beta-2 microglobulin - component of MHC class I, loss causes immunotherapy resistance' },
        { term: 'mTOR inhibitor', definition: 'Immunosuppressant (sirolimus) that may reduce skin cancer risk compared to calcineurin inhibitors' },
        { term: 'acitretin', definition: 'Oral retinoid used for SCC chemoprevention in transplant recipients and high-risk patients' },
        { term: 'clinical PNI', definition: 'Perineural invasion with clinical symptoms (numbness, pain, weakness), worse prognosis than incidental PNI' },
      ],
      clinicalNotes: 'Transplant patients require collaborative management between dermatology and transplant medicine. mTOR inhibitor switch should be considered for patients with multiple SCCs. Anti-PD-1 therapy is generally contraindicated in transplant recipients due to rejection risk.',
    },
    5: {
      level: 5,
      summary: 'Expert management of cSCC integrates precision oncology approaches, novel therapeutic strategies, and multidisciplinary care for complex scenarios including immunotherapy in challenging populations.',
      explanation: `## Precision Medicine in cSCC

### Molecular Profiling
- Comprehensive genomic profiling identifies targetable alterations
- EGFR amplification/overexpression: EGFR inhibitor candidates
- PIK3CA mutations: PI3K inhibitor consideration
- High TMB confirmation supports immunotherapy

### Circulating Tumor DNA (ctDNA)
- Monitoring for minimal residual disease
- Early detection of recurrence
- Response assessment during systemic therapy
- Emerging role in risk stratification

### Gene Expression Profiling
- 40-gene expression profile (DecisionDx-SCC)
- Risk stratification beyond clinical/histologic features
- Guides surveillance intensity and adjuvant therapy discussions

## Novel Therapeutic Approaches

### Neoadjuvant Immunotherapy
- Rationale: Shrink tumor before surgery
- Ongoing clinical trials
- May convert unresectable to resectable
- Perioperative pembrolizumab showing promise

### Combination Strategies
**PD-1 + CTLA-4**:
- Ipilimumab + nivolumab combinations
- May overcome primary resistance
- Increased toxicity

**PD-1 + Targeted Therapy**:
- EGFR inhibitors + immunotherapy
- Rationale: Enhanced antigen presentation
- Clinical trials ongoing

**PD-1 + Radiation**:
- Abscopal effect potential
- Combination with definitive/adjuvant RT
- Sequencing and timing under investigation

### Emerging Targets
- **TIM-3 inhibitors**: Additional checkpoint blockade
- **LAG-3 inhibitors**: Combination checkpoint therapy
- **CD73/adenosine pathway**: Overcoming immunosuppressive microenvironment
- **HPV-specific approaches**: For HPV-driven cSCC (genital, periungual)

## Complex Clinical Scenarios

### Immunotherapy in Special Populations
**Autoimmune Disease**:
- Relative contraindication, not absolute
- Careful risk-benefit discussion
- May exacerbate underlying autoimmune condition (40-50%)
- More data accumulating for selected patients

**Transplant Recipients**:
- High rejection risk with PD-1 blockade (40-50%)
- Generally avoided except life-threatening disease
- Case reports of successful use with close monitoring
- Discuss with transplant team

**HIV/AIDS**:
- Can use immunotherapy if CD4 count adequate
- Monitor viral load closely
- Generally similar efficacy to immunocompetent patients

### Locally Advanced Unresectable cSCC
**Treatment Algorithm**:
1. First-line: Cemiplimab or pembrolizumab
2. If contraindicated: EGFR inhibitor (cetuximab)
3. Radiation as consolidation after response
4. If progression: Alternative checkpoint (if anti-PD-1 given)
5. EGFR inhibitors or clinical trial
6. Chemotherapy last line (platinum-based)

### Regional Nodal Disease
- Consider surgical resection if resectable
- Post-operative radiation for multiple nodes or ECE
- May use systemic therapy in neoadjuvant or adjuvant setting
- Surveillance with clinical exam and imaging

## Survivorship and Prevention

### Surveillance Protocols
**High-Risk cSCC** (per NCCN):
- Every 3-6 months for 2 years
- Every 6-12 months for 3 years
- Annual thereafter
- Full skin exam at each visit

**Regional Nodal Surveillance**:
- Clinical exam each visit
- Consider imaging (CT or ultrasound) for very high-risk

### Field-Directed Therapies
For patients with multiple AKs and field cancerization:
- Topical 5-FU (various regimens)
- Imiquimod 5% or 3.75%
- Ingenol mebutate (withdrawn in EU, limited availability)
- Photodynamic therapy
- Chemical peels (trichloroacetic acid)

### Chemoprevention Evidence
| Agent | Population | Benefit |
|-------|------------|---------|
| Nicotinamide 500mg BID | High-risk non-transplant | 30% reduction in AK/SCC |
| Acitretin 25mg daily | Transplant recipients | 40-50% reduction in SCC |
| Capecitabine | Extensive/aggressive disease | Case reports/small series |

### Patient Education
- Self-skin examination monthly
- Sun protection counseling (SPF 30+, protective clothing)
- Avoid tanning beds (absolute)
- Recognition of warning signs (non-healing lesion, rapid growth)

## Future Directions

### Biomarker Development
- Predictive markers for immunotherapy response
- Prognostic markers for metastatic potential
- Liquid biopsy integration into practice

### Therapeutic Advances
- Bispecific antibodies (PD-1 x LAG-3)
- Tumor vaccines (personalized neoantigen vaccines)
- Oncolytic viruses (talimogene laherparepvec and others)
- Novel small molecule inhibitors

### Prevention Research
- Topical DNA repair enzymes
- Nicotinamide mechanism optimization
- Microbiome modulation
- Immune checkpoint modulation for prevention`,
      keyTerms: [
        { term: 'abscopal effect', definition: 'Systemic anti-tumor response distant from irradiated site, potentially enhanced by immunotherapy' },
        { term: 'field-directed therapy', definition: 'Treatment targeting entire sun-damaged field, not just visible lesions (e.g., topical 5-FU)' },
        { term: 'extracapsular extension', definition: 'Tumor growth beyond lymph node capsule, indicates worse prognosis (ECE)' },
        { term: 'DecisionDx-SCC', definition: 'Gene expression profiling test for cSCC risk stratification' },
        { term: 'ingenol mebutate', definition: 'Topical agent for actinic keratoses (limited availability due to safety concerns)' },
      ],
      clinicalNotes: `Expert-level management pearls:
1. Neoadjuvant immunotherapy may improve resectability and outcomes - consider enrollment in trials
2. Immunotherapy in transplant patients requires multidisciplinary decision-making
3. Gene expression profiling can guide surveillance intensity and adjuvant therapy
4. Field-directed therapy critical for managing extensive actinic damage
5. Nicotinamide is underutilized for chemoprevention in high-risk patients
6. ctDNA monitoring may enable earlier detection of recurrence
7. Combination immunotherapy strategies offer hope for refractory disease`,
    },
  },

  media: [
    {
      id: 'scc-clinical-images',
      type: 'image',
      filename: 'scc-clinical-types.jpg',
      title: 'SCC Clinical Presentations',
      description: 'Various clinical presentations of cutaneous SCC',
    },
    {
      id: 'ak-scc-progression',
      type: 'diagram',
      filename: 'ak-scc-progression.svg',
      title: 'AK to SCC Progression',
      description: 'Molecular progression from normal skin to AK to invasive SCC',
    },
  ],

  citations: [
    {
      id: 'nccn-scc',
      type: 'website',
      title: 'NCCN Guidelines for Squamous Cell Skin Cancer',
      source: 'National Comprehensive Cancer Network',
      url: 'https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1465',
    },
    {
      id: 'bwh-staging',
      type: 'article',
      title: 'A Simple and More Accurate Staging System for Cutaneous SCC',
      source: 'Journal of Clinical Oncology',
      authors: ['Karia PS', 'Jambusaria-Pahlajani A', 'Harrington DP', 'Murphy GF', 'Qureshi AA', 'Schmults CD'],
    },
  ],

  crossReferences: [
    { targetId: 'dermatology-skin-anatomy', targetType: 'structure', relationship: 'related', label: 'Skin Anatomy' },
    { targetId: 'dermatology-basal-cell-carcinoma', targetType: 'condition', relationship: 'related', label: 'Basal Cell Carcinoma' },
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

export default squamousCellCarcinomaContent;
