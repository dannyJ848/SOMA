/**
 * Benign Breast Conditions - Reproductive System
 *
 * Comprehensive content on non-cancerous breast conditions including
 * fibrocystic changes, fibroadenomas, mastitis, and proliferative lesions.
 */

import { EducationalContent } from '../../../types';

export const benignBreastConditions: EducationalContent = {
  id: 'reproductive-benign-breast-conditions',
  type: 'condition',
  name: 'Benign Breast Conditions',
  alternateNames: ['Benign Breast Disease', 'Non-Cancerous Breast Conditions'],

  levels: {
    1: {
      level: 1,
      summary: 'Benign breast conditions are non-cancerous changes in breast tissue. They include lumps, cysts, pain, and nipple discharge. Most breast problems are benign and not life-threatening.',
      explanation: `## What Are Benign Breast Conditions?

Benign means not cancerous. Benign breast conditions are changes in breast tissue that do not spread to other parts of the body and are not life-threatening.

### Common Benign Breast Changes

**1. Breast Pain (Mastalgia)**
- Very common, especially before periods
- Can affect one or both breasts
- Usually related to hormonal changes
- Not a sign of cancer

**2. Breast Lumps**
- Many types of non-cancerous lumps
- Most breast lumps in women under 40 are benign
- Should still be checked by a doctor

**3. Cysts**
- Fluid-filled sacs
- Feel like soft or firm grapes
- Common in women 35-50
- Can come and go with periods

**4. Fibrocystic Changes**
- Lumpy, tender breasts
- Worse before periods
- Very common
- Not cancer and does not cause cancer

**5. Fibroadenomas**
- Solid, round, rubbery lumps
- Most common in young women (15-35)
- Move easily under the skin
- Not cancer

**6. Nipple Discharge**
- Can be normal or abnormal
- Clear, milky, green, or brown discharge can be benign
- Bloody discharge needs evaluation

### When to See a Doctor

See a doctor if you notice:
- A new lump that does not go away
- Changes in breast size or shape
- Skin changes (dimpling, puckering)
- Nipple turning inward
- Bloody nipple discharge

### Important Facts

- Most breast changes are not cancer
- Having benign breast disease does not mean you will get cancer
- Some types of benign changes may slightly increase cancer risk
- Regular breast exams help find changes early`,
      keyTerms: [
        { term: 'benign', definition: 'Not cancerous; does not spread to other parts of the body' },
        { term: 'cyst', definition: 'A fluid-filled sac' },
        { term: 'fibroadenoma', definition: 'A common benign solid breast lump' },
        { term: 'mastalgia', definition: 'Breast pain' },
        { term: 'fibrocystic', definition: 'Having both fibrous tissue and cysts in the breast' },
      ],
      analogies: [
        'A cyst is like a water balloon - a fluid-filled sac that is separate from surrounding tissue.',
        'Fibrocystic changes are like having a lumpy pillow - normal tissue that feels uneven but is not harmful.',
      ],
      examples: [
        'About 50% of women experience fibrocystic breast changes',
        'Fibroadenomas are the most common breast tumors in women under 30',
        'Breast cysts are most common between ages 35 and 50',
      ],
      patientCounselingPoints: [
        'Most breast lumps are benign, but all new lumps should be evaluated',
        'Caffeine may worsen fibrocystic breast pain for some women',
        'Wearing a supportive bra can help with breast pain',
        'Monthly breast self-exams help you know what is normal for you',
      ],
    },
    2: {
      level: 2,
      summary: 'Benign breast conditions encompass a spectrum from physiologic changes to proliferative lesions. Fibrocystic changes, fibroadenomas, and breast cysts are common. Some proliferative lesions carry increased breast cancer risk requiring surveillance.',
      explanation: `## Classification of Benign Breast Conditions

### Non-Proliferative Lesions (No Increased Cancer Risk)

**Fibrocystic Changes:**

Components:
- Cysts (microscopic to several cm)
- Fibrosis (dense connective tissue)
- Adenosis (increased glandular tissue)
- Epithelial metaplasia

Clinical features:
- Bilateral, diffuse
- Cyclic pain and swelling
- Worse in luteal phase
- Multiple nodularities

Types of cysts:
- Simple cysts: Smooth, fluid-filled
- Complicated cysts: Debris present
- Complex cysts: Solid components

**Fibroadenomas:**

Characteristics:
- Benign biphasic tumor (stromal + epithelial)
- Well-circumscribed, rubbery
- Mobile ("breast mouse")
- 1-3 cm, usually solitary

Types:
- Simple: Common, typical appearance
- Complex: Cysts >3mm, sclerosing adenosis, papillary apocrine change
- Giant/Juvenile: >5cm or >500g, adolescent girls

**Other Non-Proliferative Lesions:**

Ductal ectasia:
- Duct dilation with inspissated secretions
- Periductal inflammation
- Nipple discharge (often green/brown)
- Common in perimenopausal women

Mild epithelial hyperplasia:
- Cell proliferation but no atypia
- No increased cancer risk

### Proliferative Lesions Without Atypia (Slightly Increased Risk)

**Moderate or Florid Hyperplasia:**

Features:
- Increased cell layers (>4)
- Fills duct lumen
- No cytologic atypia

Risk:
- 1.5-2x increased breast cancer risk
- Relative risk similar for both breasts

**Sclerosing Adenosis:**

Histology:
- Lobular proliferation
- Distorted glands in fibrous stroma
- Can mimic carcinoma on imaging

Clinical:
- Calcifications common
- 1.5-2x increased risk
- Can be extensive

**Radial Scar/Complex Sclerosing Lesion:**

Features:
- Central fibroelastic core
- Radiating ducts and lobules
- Epithelial distortion

Significance:
- Mimics carcinoma mammographically
- Associated with tubular carcinoma
- Excision recommended

**Intraductal Papilloma:**

Central (solitary):
- Large duct near nipple
- Often presents with discharge
- Benign, but excise

Peripheral (multiple):
- Terminal duct lobular units
- Associated with higher risk
- May need surveillance

### Proliferative Lesions With Atypia (Moderately Increased Risk)

**Atypical Ductal Hyperplasia (ADH):**

Features:
- Partial duct filling
- Uniform cells
- Architectural atypia
- Resembles low-grade DCIS

Risk:
- 3.5-5x increased breast cancer risk
- Risk applies to both breasts
- Management: Excision, surveillance

**Atypical Lobular Hyperplasia (ALH):**

Features:
- Distended acini
- Uniform cells with loss of cohesion
- <50% of acini in terminal duct lobular unit filled

Risk:
- 4-5x increased breast cancer risk
- Higher lifetime risk than ADH
- Often bilateral

### Risk Stratification

| Lesion Type | Relative Risk | Management |
|-------------|---------------|------------|
| Non-proliferative | 1.0 (no increase) | Routine screening |
| Proliferative without atypia | 1.5-2.0 | Annual screening |
| Atypical hyperplasia | 3.5-5.0 | Annual screening, consider chemoprevention |

### Clinical Evaluation

**Imaging:**

Mammography:
- Masses, calcifications
- Asymmetries, architectural distortion
- BI-RADS classification

Ultrasound:
- Cyst vs solid differentiation
- Characterization of masses
- Biopsy guidance

MRI:
- Problem-solving tool
- High-risk screening
- Extent of disease evaluation

**Biopsy:**

Indications:
- Suspicious imaging findings
- Complex cysts
- New or enlarging masses

Types:
- Fine needle aspiration (FNA)
- Core needle biopsy
- Vacuum-assisted biopsy
- Excisional biopsy`,
      keyTerms: [
        { term: 'hyperplasia', definition: 'Increase in the number of cells in a tissue' },
        { term: 'atypia', definition: 'Cells that look abnormal under the microscope' },
        { term: 'fibroadenoma', definition: 'Benign tumor composed of glandular and fibrous tissue' },
        { term: 'sclerosing adenosis', definition: 'Benign proliferation of small glands within fibrous stroma' },
        { term: 'radial scar', definition: 'Benign lesion with central scar and radiating ducts' },
      ],
      analogies: [
        'Atypical hyperplasia is like a warning light on your car dashboard - it does not mean there is definitely a problem, but it means you should pay closer attention.',
        'Fibrocystic changes are like having an irregular lawn - some parts are higher, some lower, but it is all still normal grass.',
      ],
      examples: [
        'Women with ADH have approximately 20-25% lifetime risk of breast cancer',
        'Complex fibroadenomas have slightly increased risk compared to simple fibroadenomas',
        'Radial scars are often found incidentally on mammography',
      ],
      patientCounselingPoints: [
        'Having a benign breast condition does not mean you will get breast cancer',
        'Some benign conditions slightly increase risk - talk to your doctor about screening',
        'Atypical hyperplasia significantly increases risk - chemoprevention may be considered',
        'Most fibroadenomas do not need removal unless growing or symptomatic',
      ],
    },
    3: {
      level: 3,
      summary: 'Benign breast disease requires accurate diagnosis through imaging and pathology. Fibrocystic changes are extremely common. Proliferative lesions, especially those with atypia, carry increased breast cancer risk requiring individualized surveillance and risk reduction strategies.',
      explanation: `## Detailed Benign Breast Pathology

### Fibrocystic Changes - Detailed Features

**Pathogenesis:**
- Hormonal influence on breast tissue
- Imbalance of estrogen and progesterone
- Terminal duct lobular unit enlargement

**Histologic Components:**

Cyst formation:
- Obstruction of lobular acini
- Fluid accumulation
- Can range from microscopic to palpable
- Lined by epithelium (often apocrine metaplasia)

Fibrosis:
- Dense collagen deposition
- Stromal sclerosis
- Firm texture on palpation

Adenosis:
- Increased number of acini per lobule
- Can be blunted or enlarged
- Sclerosing adenosis: most pronounced form

Metaplasia:
- Apocrine metaplasia (most common)
- Columnar cell change
- Usual ductal hyperplasia

**Clinical Management:**
- Supportive care for symptoms
- Cyst aspiration if symptomatic
- Dietary modifications (limited evidence)
- Vitamin E, evening primrose oil (variable benefit)

### Fibroadenoma - Pathology Details

**Gross Pathology:**
- Well-circumscribed, encapsulated
- Bulging, lobulated cut surface
- Gray-white, rubbery
- Resembles normal breast tissue

**Microscopic Features:**

Intracanalicular pattern:
- Stromal proliferation compresses glands
- Elongated, slit-like ducts

Pericanalicular pattern:
- Stroma surrounds glands
- Maintains round duct structure

Cellular components:
- Biphasic: epithelium + stroma
- Stroma is neoplastic component
- Epithelium reactive/secondary

**Complex Fibroadenoma:**
- Cysts >3mm
- Sclerosing adenosis
- Epithelial calcifications
- Papillary apocrine change
- Slightly increased risk (1.5-2x)

**Phyllodes Tumor - Differential:**
- Similar clinical presentation
- Leaf-like architecture
- Hypercellular stroma
- Can be benign, borderline, or malignant
- Wider excision required

### Proliferative Breast Disease

**Usual Ductal Hyperplasia:**

Features:
- Fills duct lumen
- Heterogeneous cell population
- Streaming pattern
- Irregular spaces
- No peripheral placement of nuclei

Immunophenotype:
- Mixed staining with CK5/6
- Variable ER expression

Distinction from ADH:
- ADH: Monomorphic, uniform, rigid patterns
- UDH: Heterogeneous, streaming, irregular

**Sclerosing Adenosis:**

Histology:
- Lobulocentric proliferation
- Compressed glands in fibrous stroma
- Myoepithelial layer preserved
- Can involve nerves

Imaging challenges:
- Mimics carcinoma
- Calcifications common
- Architectural distortion

Associated risk:
- 1.7x increased breast cancer risk
- Risk increases with extent
- May coexist with invasive cancer

**Radial Scar/Complex Sclerosing Lesion:**

Central core:
- Dense fibroelastic tissue
- Entrapped epithelial elements
- Elastosis

Radiating structures:
- Tubules and ducts
- Ductules and lobules
- Epithelial hyperplasia common

Clinical importance:
- Mimics carcinoma on mammography
- Associated with tubular carcinoma
- ADH or DCIS may be present
- Excisional biopsy recommended

### Atypical Hyperplasia - Management

**Risk Assessment:**

Gail model limitations:
- Does not include AH
- Underestimates risk

Tyrer-Cuzick (IBIS):
- Includes AH
- Better risk prediction

**Surveillance:**

Enhanced screening:
- Annual mammography
- Consider tomosynthesis
- Annual breast MRI
- Begin 8-10 years earlier than standard

**Risk Reduction:**

Chemoprevention:
- Tamoxifen (premenopausal)
- Raloxifene (postmenopausal)
- Exemestane (postmenopausal)
- 50-65% risk reduction

Risk-reducing surgery:
- Rarely indicated for AH alone
- Consider with strong family history

### Inflammatory Conditions

**Mastitis:**

Lactational (puerperal):
- Staphylococcus aureus most common
- Neutrophilic infiltrate
- May form abscess
- Duct obstruction predisposes

Periductal (duct ectasia):
- Non-lactational
- Smokers more common
- Plasma cell infiltrate
- Nipple retraction possible

Idiopathic granulomatous:
- Non-infectious
- Exclude systemic disease
- Corticosteroid responsive

Diabetic mastopathy:
- Type 1 diabetes
- Dense fibrous stroma
- Lymphocytic infiltrate
- Keloid-like fibrosis

**Fat Necrosis:**
- Trauma or surgery
- Foamy histiocytes
- Oil cysts
- Can mimic carcinoma`,
      keyTerms: [
        { term: 'phyllodes tumor', definition: 'Fibroepithelial tumor with leaf-like architecture; can be benign or malignant' },
        { term: 'columnar cell change', definition: 'Benign breast change with enlarged terminal ducts lined by columnar cells' },
        { term: 'usual ductal hyperplasia', definition: 'Benign proliferation of cells within ducts without atypia' },
        { term: 'periductal mastitis', definition: 'Inflammation around breast ducts, often in smokers' },
        { term: 'flat epithelial atypia', definition: 'Non-invasive lesion with atypical cells in dilated ducts' },
      ],
      clinicalNotes: 'When atypical hyperplasia is found on core needle biopsy, excisional biopsy is recommended as upgrade to malignancy (DCIS or invasive) occurs in 10-50% of cases. The upgrade rate is higher for ADH than ALH and depends on radiologic-pathologic concordance.',
    },
    4: {
      level: 4,
      summary: 'Advanced benign breast pathology requires accurate differentiation from malignancy. Flat epithelial atypia, papillary lesions, and columnar cell change represent challenging diagnostic categories. Management decisions integrate pathology, imaging, and clinical risk factors.',
      explanation: `## Specialized Benign Breast Pathology

### Flat Epithelial Atypia (FEA)

**Definition:**
- Dilated ductules lined by 1-2 cell layers
- Atypical cells (low-grade cytology)
- Flat architecture (no architectural atypia)
- Formerly called "columnar cell change with atypia"

**Histologic Features:**
- Dilated terminal duct lobular units
- Monotonous cell population
- Low-grade nuclear atypia
- Often associated with calcifications
- May coexist with ADH, ALH, LCIS, DCIS

**Clinical Significance:**
- Risk lesion, not precursor
- Associated with increased cancer risk
- Often found with other high-risk lesions
- Upgrade rate on excision: 10-20%

**Management:**
- Excision recommended if core needle biopsy diagnosis
- Consider chemoprevention if other risk factors
- Surveillance if no associated lesions

### Papillary Lesions

**Intraductal Papilloma:**

Central (solitary):
- Large lactiferous ducts
- Fibrovascular cores
- Bipolar epithelial layer
- Myoepithelial cells present
- Benign, but excise

Peripheral (multiple):
- Terminal duct lobular units
- Associated with increased risk
- ADH or DCIS may be present

**Papillary DCIS:**
- Papillary architecture
- No fibrovascular cores
- Malignant cells
- No invasion

**Encapsulated Papillary Carcinoma:**
- Circumscribed nodule
- Papillary pattern
- No myoepithelial layer within
- Myoepithelial layer at periphery
- Excellent prognosis

**Differential Diagnosis:**
- Fibrovascular cores present = benign
- No myoepithelial cells within lesion = malignant
- p63 or calponin stains identify myoepithelium

### Columnar Cell Lesions

**Spectrum:**

Columnar cell change (CCC):
- Dilated acini
- Columnar epithelium
- No atypia
- Low risk

Columnar cell hyperplasia (CCH):
- More than 2 cell layers
- No atypia
- Slightly increased risk

Flat epithelial atypia:
- Atypical cells
- Low-grade nuclei
- Moderately increased risk

**Architectural Features:**
- "Roman bridges" - incomplete bridges
- Apical snouts
- Pronounced intraepithelial lumens
- Psammomatous calcifications

**Clinical Importance:**
- Radiologic-pathologic correlation essential
- Calcifications common
- Associated with tubular carcinoma
- May represent cancerization of lobules

### Breast Cancer Risk Models

**Gail Model:**
- Age, age at menarche, age at first live birth
- Number of first-degree relatives with breast cancer
- Previous breast biopsies
- Race/ethnicity
- Does NOT include breast density or AH

**Tyrer-Cuzick (IBIS):**
- Includes more risk factors
- Family history more detailed
- Breast density
- AH included
- More accurate for high-risk women

**BRCAPRO:**
- Predicts BRCA mutation probability
- Family history-based

**Risk Management by Category:**

Average risk (<15% lifetime):
- Standard screening
- Annual mammography (age 40+)

Intermediate risk (15-20% lifetime):
- Annual mammography
- Consider supplemental imaging

High risk (>20% lifetime):
- Annual mammography
- Annual breast MRI
- Genetic counseling if indicated
- Consider chemoprevention

### Benign Breast Disease and Cancer Risk

**Risk Stratification:**

Non-proliferative disease:
- Relative risk: 1.0
- No change in screening

Proliferative disease without atypia:
- Relative risk: 1.5-2.0
- Annual screening
- Clinical breast exam

Atypical hyperplasia:
- Relative risk: 3.5-5.0
- Enhanced surveillance
- Consider chemoprevention
- Risk-reducing surgery if other factors

**Lobular Involvement:**
- ALH higher risk than ADH
- Bilateral risk for both
- LCIS (lobular carcinoma in situ) = 8-10x risk

### Special Clinical Scenarios

**Gynecomastia:**
- Male breast enlargement
- Ductal proliferation in male breast
- Usually physiologic or drug-related
- Rarely associated with cancer

**Juvenile Hypertrophy:**
- Massive breast enlargement at puberty
- Glandular and stromal proliferation
- Benign, but psychologically distressing
- Surgery may be needed

**Diabetic Mastopathy:**
- Insulin-dependent diabetes
- Dense fibrous stroma
- Lymphocytic infiltrate
- Can mimic carcinoma clinically
- Recurs after excision

**Silicone Lymphadenopathy:**
- History of breast implants
- Axillary lymphadenopathy
- Vacuolated histiocytes
- Recognize to avoid misdiagnosis`,
      keyTerms: [
        { term: 'myoepithelial cells', definition: 'Contractile cells surrounding ducts and lobules; present in benign lesions, lost in invasive cancer' },
        { term: 'psammoma bodies', definition: 'Concentrically laminated calcifications; seen in some papillary lesions' },
        { term: 'fibrovascular core', definition: 'Connective tissue with blood vessels at the center of papillary structures' },
        { term: 'encapsulated papillary carcinoma', definition: 'Well-circumscribed malignant papillary tumor with excellent prognosis' },
        { term: 'gynecomastia', definition: 'Benign enlargement of male breast tissue' },
      ],
      clinicalNotes: 'For patients with atypical hyperplasia, the 10-year risk of breast cancer is approximately 7%, and the lifetime risk is approximately 30%. Chemoprevention with tamoxifen, raloxifene, or exemestane reduces this risk by approximately 50%.',
    },
    5: {
      level: 5,
      summary: 'Expert-level benign breast pathology involves molecular characterization of risk lesions, management of high-risk cohorts, integration of MRI and molecular imaging, and understanding of breast density as an independent risk factor requiring supplemental screening strategies.',
      explanation: `## Expert Benign Breast Pathology

### Molecular Biology of Risk Lesions

**Genomic Alterations in Atypical Hyperplasia:**

Shared with cancer:
- Loss of heterozygosity (16q, 17p)
- Similar gene expression profiles
- Clonal relationship in some cases
- "Field effect" in breast tissue

Molecular progression model:
- Normal -> Hyperplasia -> Atypia -> CIS -> Invasion
- Accumulation of genetic alterations
- Not all AH progresses
- Cannot predict which lesions progress

**Columnar Cell Lesions Genomics:**
- Similar to low-grade DCIS
- 16q loss common
- Low-grade pathway lesion
- Precursor potential

### High-Risk Screening Protocols

**MRI Screening Indications:**

ACR guidelines for breast MRI screening:
- BRCA mutation carriers
- First-degree relative of BRCA carrier
- Lifetime risk >20-25%
- Prior chest radiation (age 10-30)
- Li-Fraumeni syndrome and other genetic syndromes

Surveillance for AH:
- Not standard indication for MRI
- Consider with additional risk factors
- Annual mammography + MRI optimal

**Abbreviated MRI Protocols:**
- Shorter scan time
- Reduced cost
- Screening application
- Emerging alternative to mammography

**Contrast-Enhanced Mammography:**
- Lower cost than MRI
- Better availability
- Screening potential
- Needs validation

### Breast Density

**Classification (BI-RADS):**

| Density | Description |
|---------|-------------|
| A | Almost entirely fatty |
| B | Scattered fibroglandular densities |
| C | Heterogeneously dense |
| D | Extremely dense |

**Density as Risk Factor:**
- Independent risk factor
- Relative risk 2-6x for dense breasts
- Masking effect reduces sensitivity
- 40-50% of women have dense breasts

**Supplemental Screening:**

Ultrasound:
- Whole breast screening
- Additional cancer detection
- High false positive rate
- Increased callbacks and biopsies

MRI:
- Most sensitive
- Highest cost
- Best for highest risk
- Not feasible for all dense breasts

Legislation:
- Dense breast notification laws
- 38+ US states require notification
- Inform patients of limitations and options

### Emerging Technologies

**Artificial Intelligence:**

Applications:
- Breast density assessment
- Risk stratification
- Lesion detection
- Workflow prioritization

Integration:
- Computer-aided detection (CAD)
- Standalone reading
- Reader augmentation

**Molecular Breast Imaging:**
- Nuclear medicine technique
- Gamma camera
- Tc-99m sestamibi
- Useful in dense breasts
- Radiation dose concerns

**Elastography:**
- Tissue stiffness assessment
- Differentiate benign from malignant
- Supplement to ultrasound
- Limited validation

### Risk Reduction Strategies

**Lifestyle Modifications:**

Weight management:
- Postmenopausal obesity increases risk
- Weight loss reduces risk
- Exercise protective

Alcohol:
- Dose-response relationship
- Limit consumption
- Risk reduction with cessation

Diet:
- Mediterranean diet pattern
- Limited red/processed meat
- Fruits and vegetables

**Chemoprevention Details:**

Tamoxifen:
- 20 mg daily x 5 years
- Premenopausal women
- 50% risk reduction
- Endometrial cancer risk, VTE risk

Raloxifene:
- 60 mg daily
- Postmenopausal only
- 50% risk reduction
- No endometrial stimulation

Exemestane:
- 25 mg daily
- Postmenopausal only
- 65% risk reduction
- Aromatase inhibitor side effects

**Risk-Reducing Surgery:**

Bilateral mastectomy:
- 90-95% risk reduction
- Consider with strong family history
- BRCA mutation carriers
- Rarely for AH alone

**Chemoprevention Uptake:**
- Low in eligible women (<10%)
- Side effect concerns
- Risk perception issues
- Shared decision-making important

### Research Frontiers

**Liquid Biopsy for Risk Assessment:**
- Circulating biomarkers
- Earlier detection potential
- Risk stratification
- Not yet validated

**Tissue-Based Risk Markers:**
- Ki-67 in AH
- Molecular signatures
- Progression predictors
- Investigational

**Prevention Trials:**
- Aspirin and metformin
- Omega-3 fatty acids
- Vitamin D
- Dietary interventions

### Multidisciplinary Care

**High-Risk Clinics:**
- Coordinated care
- Risk assessment
- Screening protocols
- Prevention counseling

**Genetic Counseling:**
- Mutation testing indications
- Cascade testing
- Family planning
- Risk management

**Shared Decision-Making:**
- Risk communication
- Preference-sensitive decisions
- Informed choices
- Patient-centered care`,
      keyTerms: [
        { term: 'masking effect', definition: 'Reduced sensitivity of mammography due to similar density of tumor and normal tissue' },
        { term: 'abbreviated MRI', definition: 'Shortened breast MRI protocol for screening applications' },
        { term: 'molecular breast imaging', definition: 'Nuclear medicine technique using gamma camera for breast imaging' },
        { term: 'field effect', definition: 'Concept that entire organ has increased cancer risk, not just identified lesion' },
        { term: 'chemoprevention', definition: 'Use of medication to reduce cancer risk in high-risk individuals' },
      ],
      clinicalNotes: `Key Clinical Pearls:

1. When atypical hyperplasia is diagnosed on core needle biopsy, excisional biopsy should be performed due to 10-50% upgrade rate to DCIS or invasive carcinoma.

2. Women with atypical hyperplasia have a 10-year breast cancer risk of approximately 7% and lifetime risk of approximately 30%. Chemoprevention can reduce this risk by 50%.

3. Breast density is an independent risk factor and reduces mammography sensitivity. Supplemental screening with MRI or ultrasound should be considered in dense breasts, especially with other risk factors.

4. Flat epithelial atypia is a risk lesion, not a direct precursor. Excision is recommended when found on core biopsy due to associated upgrade rate.

5. Papillary lesions diagnosed on core needle biopsy require excision, especially if atypia is present or the lesion is peripheral (vs central).`,
    },
  },

  media: [
    {
      id: 'fibroadenoma',
      type: 'image',
      filename: 'fibroadenoma.jpg',
      title: 'Fibroadenoma',
      description: 'Well-circumscribed benign breast mass',
    },
    {
      id: 'fibrocystic-changes',
      type: 'histology',
      filename: 'fibrocystic-changes.jpg',
      title: 'Fibrocystic Changes',
      description: 'Cysts, fibrosis, and adenosis',
    },
  ],

  citations: [
    {
      id: 'ah-risk-hartmann',
      type: 'article',
      title: 'Benign Breast Disease and the Risk of Breast Cancer',
      authors: ['Hartmann LC', 'Sellers TA', 'Frost MH', 'et al.'],
      source: 'New England Journal of Medicine',
    },
    {
      id: 'bcdr-acs',
      type: 'article',
      title: 'Breast Cancer Risk Assessment and Screening',
      authors: ['American Cancer Society'],
      source: 'CA: A Cancer Journal for Clinicians',
    },
  ],

  crossReferences: [
    { targetId: 'reproductive-breast-cancer-pathology', targetType: 'condition', relationship: 'sibling', label: 'Breast Cancer Pathology' },
  ],

  tags: {
    systems: ['reproductive'],
    topics: ['pathology', 'breast-disease', 'benign-conditions'],
    keywords: ['fibroadenoma', 'fibrocystic changes', 'atypical hyperplasia', 'breast cysts'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-28T00:00:00.000Z',
  updatedAt: '2026-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default benignBreastConditions;
