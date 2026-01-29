/**
 * Pulmonary Fibrosis - Comprehensive Educational Content
 *
 * Covers interstitial lung disease, IPF pathophysiology, and management.
 */

import { EducationalContent } from '../../types';

export const pulmonaryFibrosis: EducationalContent = {
  id: 'condition-pulmonary-fibrosis',
  type: 'condition',
  name: 'Pulmonary Fibrosis',
  alternateNames: ['Idiopathic Pulmonary Fibrosis', 'IPF', 'Interstitial Lung Disease', 'ILD'],
  hpoId: 'HP:0002206',

  levels: {
    1: {
      level: 1,
      summary: 'Pulmonary fibrosis is a lung disease where tissue becomes thickened and scarred, making it hard to breathe.',
      explanation: `Pulmonary fibrosis is a condition where the lungs become scarred and stiff. Over time, this scarring makes it harder for oxygen to get into your blood.

**What happens in the lungs:**
- Lung tissue becomes thick and stiff
- Scar tissue replaces healthy tissue
- Lungs cannot expand fully
- Oxygen has trouble passing into the blood

**Common symptoms:**
- Shortness of breath, especially with activity
- Dry cough that does not go away
- Feeling tired
- Weight loss
- Clubbing of fingers (tips get wider and rounder)

**Possible causes:**
- Often unknown (called idiopathic)
- Exposure to certain chemicals or dust
- Radiation therapy
- Some medications
- Autoimmune diseases

**Treatment approaches:**
- Medicines to slow scarring
- Oxygen therapy
- Pulmonary rehabilitation
- Lung transplant in severe cases
- No cure, but treatment can help symptoms`,
      keyTerms: [
        { term: 'fibrosis', definition: 'Thickening and scarring of tissue' },
        { term: 'pulmonary', definition: 'Related to the lungs' },
        { term: 'scar tissue', definition: 'Tough tissue that forms after injury, replacing normal tissue' },
        { term: 'clubbing', definition: 'Changes in fingertips making them wider and rounder, often due to lung disease' },
      ],
      analogies: [
        'Healthy lungs are like soft sponges; fibrotic lungs become stiff like leather.',
        'Pulmonary fibrosis is like replacing a soft mesh screen with a solid piece of plastic - air cannot pass through easily.',
      ],
      examples: [
        'A former construction worker who develops shortness of breath years after silica dust exposure.',
        'An older adult who notices increasing breathlessness when climbing stairs.',
      ],
    },
    2: {
      level: 2,
      summary: 'Pulmonary fibrosis is a progressive interstitial lung disease characterized by irreversible scarring of lung tissue, leading to restrictive physiology and impaired gas exchange, most commonly idiopathic in origin.',
      explanation: `## Understanding Pulmonary Fibrosis

**Types of Pulmonary Fibrosis:**

**Idiopathic Pulmonary Fibrosis (IPF):**
- Most common type
- Cause unknown
- Usually affects older adults
- Progressive and irreversible

**Secondary Pulmonary Fibrosis:**
- Connective tissue diseases (rheumatoid arthritis, scleroderma)
- Occupational exposures (asbestos, silica, coal dust)
- Drug-induced (amiodarone, bleomycin, methotrexate)
- Radiation-induced
- Hypersensitivity pneumonitis

## Pathophysiology Basics

**Normal lung tissue:**
- Thin alveolar walls allow gas exchange
- Elastic tissue allows expansion and recoil

**In pulmonary fibrosis:**
- Chronic inflammation leads to fibroblast activation
- Excess collagen deposition
- Loss of elasticity
- Thickening of alveolar walls
- V/Q mismatch and hypoxemia

## Clinical Presentation

**Symptoms:**
- Progressive dyspnea on exertion
- Dry, nonproductive cough
- Constitutional symptoms (fatigue, weight loss)
- Digital clubbing (40-50% of IPF patients)
- Fine bibasilar crackles (Velcro rales)

**Physical exam findings:**
- Tachypnea
- Inspiratory crackles at lung bases
- Signs of right heart failure in advanced disease

## Diagnostic Approach

**Imaging:**
- **High-resolution CT (HRCT)** - Gold standard
  - Usual Interstitial Pneumonia (UIP) pattern:
    - Reticular opacities
    - Honeycombing
    - Traction bronchiectasis
    - Subpleural and basal predominance

**Pulmonary function tests:**
- Restrictive pattern
- Reduced DLCO (diffusing capacity)
- Normal or increased FEV1/FVC ratio`,
      keyTerms: [
        { term: 'interstitial lung disease', definition: 'Group of disorders affecting the tissue and space around the air sacs' },
        { term: 'UIP pattern', definition: 'Usual Interstitial Pneumonia pattern on CT, characteristic of IPF' },
        { term: 'honeycombing', definition: 'Cystic spaces on CT indicating end-stage fibrosis' },
        { term: 'DLCO', definition: 'Diffusing capacity of lung for carbon monoxide; measures gas exchange' },
      ],
      analogies: [
        'Pulmonary fibrosis turns lungs from elastic rubber bands into stiff, brittle plastic.',
        'The scarring is like patches of dried glue throughout a sponge - the sponge cannot expand or absorb properly.',
      ],
    },
    3: {
      level: 3,
      summary: 'Idiopathic pulmonary fibrosis involves aberrant wound healing with myofibroblast proliferation and extracellular matrix deposition in a usual interstitial pneumonia pattern, diagnosed by characteristic HRCT or biopsy, managed with antifibrotic agents and supportive care.',
      explanation: `## Pathophysiology

### Mechanism of Fibrosis
**Normal wound healing:**
- Injury -> Inflammation -> Tissue repair -> Resolution

**Aberrant healing in IPF:**
1. **Epithelial injury** - Repeated micro-injuries to alveolar epithelium
2. **Fibroblast activation** - Myofibroblast proliferation
3. **ECM deposition** - Collagen types I and III accumulation
4. **Failure of resolution** - Persistent fibrosis instead of repair

### Molecular Pathways
**Key mediators:**
- TGF-beta (transforming growth factor-beta) - primary driver
- PDGF (platelet-derived growth factor)
- CTGF (connective tissue growth factor)
- Endothelin-1
- IL-1, IL-6, TNF-alpha

**Genetic factors:**
- MUC5B promoter variant (strongest risk factor)
- TERT, TERC mutations (telomerase)
- Surfactant protein mutations

## Radiographic Patterns

**UIP Pattern (definite IPF):**
- Subpleural, basal predominant reticular abnormalities
- Honeycombing with traction bronchiectasis
- Absence of features inconsistent with UIP

**Possible UIP:**
- All UIP features except honeycombing

**Inconsistent with UIP:**
- Upper/mid-lung predominance
- Peribronchovascular predominance
- Extensive ground glass
- Consolidation, nodules, pleural effusion

## Pulmonary Function

**Restrictive pattern:**
- Reduced FVC (forced vital capacity)
- Reduced TLC (total lung capacity)
- Normal or increased FEV1/FVC
- Reduced DLCO (earliest abnormality)

**6-minute walk test:**
- Distance and desaturation predict mortality

## Management

**Antifibrotic medications:**
- **Nintedanib** (tyrosine kinase inhibitor)
  - Targets VEGF, FGF, PDGF receptors
  - Slows FVC decline by ~50%
  - GI side effects common

- **Pirfenidone**
  - Mechanism unclear; reduces fibroblast proliferation
  - Slows disease progression
  - Photosensitivity, GI effects

**Supportive care:**
- Oxygen therapy for hypoxemia
- Pulmonary rehabilitation
- Vaccinations (influenza, pneumococcal)
- Symptom management
- Lung transplant evaluation`,
      keyTerms: [
        { term: 'myofibroblast', definition: 'Cell type producing collagen; key driver of fibrosis' },
        { term: 'traction bronchiectasis', definition: 'Irregular bronchial dilation caused by fibrotic retraction' },
        { term: 'DLCO', definition: 'Diffusing capacity; measures efficiency of gas transfer across alveolar membrane' },
        { term: 'TGF-beta', definition: 'Transforming growth factor-beta; master regulator of fibrogenesis' },
      ],
      clinicalNotes: 'IPF has median survival of 3-5 years without treatment. Nintedanib and pirfenidone slow progression but do not reverse fibrosis. Acute exacerbations (AE-IPF) have high mortality (>50%). GERD management may be important as microaspiration may contribute to progression.',
    },
    4: {
      level: 4,
      summary: 'IPF represents a paradigm of aberrant wound healing in aging lungs with genetic susceptibility, characterized by histopathological temporal and spatial heterogeneity, requiring multidisciplinary diagnosis, antifibrotic therapy, and comprehensive management of comorbidities and complications including acute exacerbations.',
      explanation: `## Advanced Pathophysiology

### Epithelial-Mesenchymal Crosstalk
**Alveolar epithelial injury:**
- Type II pneumocyte dysfunction
- Loss of regenerative capacity
- Senescence-related secretory phenotype
- Release of pro-fibrotic mediators

**Fibroblast heterogeneity:**
- Multiple origins: resident, bone marrow-derived, epithelial-to-mesenchymal transition
- Myofibroblast differentiation
- Resistance to apoptosis (persist after injury resolved)

### Telomere Biology
- Short telomeres in 15-20% of familial IPF
- TERT/TERC mutations impair stem cell renewal
- Links aging and fibrosis

### Immunology
- Not primarily an inflammatory disease
- Innate immune activation
- Autoantibodies present but role unclear

## Histopathology

**UIP pattern (surgical lung biopsy):**
- Temporal heterogeneity (old and new fibrosis)
- Spatial heterogeneity (varied involvement)
- Fibroblast foci (leading edge of fibrosis)
- Honeycomb remodeling
- Scar emphysema

**Differential diagnosis:**
- Nonspecific interstitial pneumonia (NSIP)
- Chronic hypersensitivity pneumonitis
- Connective tissue disease-ILD

## Acute Exacerbations

**Definition:**
- Acute worsening within 30 days
- No identifiable cause (infection, heart failure, PE)
- New bilateral ground-glass or consolidation

**Risk factors:**
- Lower baseline FVC
- Prior exacerbation
- Bronchoalveolar lavage neutrophilia

**Management:**
- Supportive care
- Corticosteroids (uncertain benefit)
- Mechanical ventilation often futile
- High mortality (>50%)

## Comorbidities

**Common comorbid conditions:**
- Pulmonary hypertension (pre-capillary)
- Gastroesophageal reflux disease
- Obstructive sleep apnea
- Cardiovascular disease
- Depression/anxiety
- Lung cancer (increased risk)

**Pulmonary hypertension:**
- Portends poor prognosis
- PH-specific therapy controversial
- Best treatment is antifibrotics, oxygen, transplant

## Transplant Considerations

**Timing:**
- List when FVC <80% predicted or DLCO <40%
- Donor shortage a major limitation
- Bilateral lung transplant preferred

**Outcomes:**
- Better than medical therapy for appropriate candidates
- 5-year survival ~50-60%
- Age cutoff typically 65-70`,
      keyTerms: [
        { term: 'fibroblast foci', definition: 'Aggregates of fibroblasts and myofibroblasts; hallmark microscopic finding in UIP' },
        { term: 'temporal heterogeneity', definition: 'Varying ages of fibrotic lesions seen microscopically' },
        { term: 'AE-IPF', definition: 'Acute exacerbation of IPF; sudden deterioration of unknown cause' },
        { term: 'senescence-associated secretory phenotype', definition: 'Pro-inflammatory state of aging cells contributing to fibrosis' },
      ],
      clinicalNotes: 'Acute exacerbations are medical emergencies with limited therapeutic options. Consider early palliative care integration. GERD management with PPIs may reduce microaspiration risk. Screen for sleep apnea as it accelerates hypoxemia.',
    },
    5: {
      level: 5,
      summary: 'Contemporary IPF management incorporates genetic counseling for telomere disorders, evaluation of combined pulmonary fibrosis and emphysema, emerging therapies targeting senescence and mechanotransduction, and precision approaches to heterogeneous disease trajectories.',
      explanation: `## Genetics and Personalized Medicine

### Telomere Disorders
**TERT/TERC mutations:**
- Autosomal dominant inheritance
- Variable penetrance
- Associated with bone marrow failure, liver disease
- Genetic counseling recommended

**Short telomere syndrome:**
- Consider in familial cases
- May predict worse transplant outcomes
- Donor organ telomere length may matter

### Combined Pulmonary Fibrosis and Emphysema (CPFE)

**Characteristics:**
- Upper lobe emphysema + lower lobe fibrosis
- Preserved lung volumes (counteracting defects)
- Severely reduced DLCO
- High risk of pulmonary hypertension
- Often male smokers

**Management:**
- Treat both components
- Screen aggressively for PH
- Lung transplant often required

## Emerging Therapeutics

### Antifibrotic Pipeline
**Pamrevlumab:**
- Anti-CTGF antibody
- Phase 3 trials ongoing

**BMS-986278:**
- LPA1 antagonist
- Targeting lysophosphatidic acid pathway

### Senolytics and Senomorphics
**Rationale:**
- Clear senescent cells
- Reduce SASP-mediated fibrosis

**Agents under study:**
- Dasatinib + quercetin
- Fisetin

### Mechanotransduction Targets
- Integrin inhibitors
- LOXL2 inhibitors (simtuzumab failed, but concept remains)

### Stem Cell Therapy
- Mesenchymal stem cells
- Investigational; no proven efficacy yet

## Biomarkers

**Prognostic:**
- Baseline FVC and decline rate
- GAP score (Gender, Age, Physiology)
- KL-6 (glycoprotein elevated in IPF)
- CCL18 (chemokine)

**Transcriptomic signatures:**
- MUC5B genotype (protective but increases risk)
- TOLLIP genotype (predicts pirfenidone response)

## Clinical Trial Design

**Endpoints:**
- FVC decline (traditional)
- Time to disease progression
- Patient-reported outcomes
- Mortality (challenging due to slow disease)

**Challenges:**
- Disease heterogeneity
- Slow progression
- Need for surrogate endpoints

## Palliative and Supportive Care

**Early integration:**
- Advance care planning
- Symptom management
- Psychosocial support
- End-of-life planning

**Oxygen and dyspnea:**
- Ambulatory oxygen for exertional desaturation
- Opioids for refractory dyspnea
- Non-pharmacologic strategies

**Transplant alternatives:**
- Mechanical support limited
- Ex vivo lung perfusion expanding donor pool
- Living lobar donation rare`,
      keyTerms: [
        { term: 'senolytics', definition: 'Drugs that selectively eliminate senescent cells' },
        { term: 'mechanotransduction', definition: 'Cellular response to mechanical forces; implicated in fibrosis progression' },
        { term: 'CPFE', definition: 'Combined pulmonary fibrosis and emphysema; distinct clinical entity' },
        { term: 'SASP', definition: 'Senescence-associated secretory phenotype; pro-inflammatory factors from aging cells' },
      ],
      clinicalNotes: 'Consider genetic testing for TERT/TERC in familial cases or early-onset disease. CPFE patients need aggressive PH screening as it significantly impacts prognosis. Early palliative care referral improves quality of life and may extend survival.',
    },
  },

  media: [
    {
      id: 'ipf-honeycombing',
      type: 'image',
      filename: 'ipf-honeycombing-ct.jpg',
      title: 'HRCT showing honeycombing in IPF',
      description: 'Basal and subpleural predominant fibrosis with honeycombing',
    },
  ],

  citations: [
    {
      id: 'ats-ipf-2022',
      type: 'article',
      title: 'Idiopathic Pulmonary Fibrosis: An Update',
      authors: ['Raghu G', 'Remy-Jardin M'],
      source: 'American Journal of Respiratory and Critical Care Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'condition-copd', targetType: 'condition', relationship: 'related', label: 'COPD' },
  ],

  tags: {
    systems: ['respiratory'],
    topics: ['pulmonology', 'interstitial lung disease'],
    keywords: ['pulmonary fibrosis', 'IPF', 'interstitial lung disease', 'fibrosis', 'honeycombing'],
    clinicalRelevance: 'high',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default pulmonaryFibrosis;
