/**
 * Pulmonary Fibrosis and ILD - Comprehensive Educational Content
 *
 * Covers pathophysiology, classification, diagnosis, and management of
 * pulmonary fibrosis and interstitial lung diseases.
 */

import { EducationalContent } from '../../types';

export const pulmonaryFibrosis: EducationalContent = {
  id: 'condition-pulmonary-fibrosis',
  type: 'condition',
  name: 'Pulmonary Fibrosis',
  alternateNames: ['Interstitial Lung Disease', 'ILD', 'Pulmonary Fibrosis', 'IPF', 'Scarring of the Lungs'],
  hpoId: 'HP:0002205',

  levels: {
    1: {
      level: 1,
      summary: 'Pulmonary fibrosis is a condition where scar tissue builds up in the lungs, making it hard to breathe and get enough oxygen into the blood.',
      explanation: `In pulmonary fibrosis, the tissue deep in your lungs becomes scarred and stiff. This scarring is called fibrosis. As the scar tissue builds up, it becomes harder for oxygen to pass from the lungs into the bloodstream.

**What happens in the lungs:**
- The tissue between the air sacs becomes thick and stiff
- The lungs can't expand as fully
- It takes more effort to breathe
- Less oxygen gets into the blood

**Common symptoms:**
- Shortness of breath, especially with activity
- Dry, hacking cough
- Feeling tired
- Weight loss
- Clubbing of fingers (widening and rounding of fingertips)

**Possible causes:**
- Often the cause is unknown (idiopathic)
- Long-term exposure to certain toxins (asbestos, silica, coal dust)
- Autoimmune diseases (rheumatoid arthritis, scleroderma)
- Radiation therapy
- Certain medications
- Smoking

**Diagnosis:**
- Chest X-ray or CT scan shows scarring
- Pulmonary function tests
- Sometimes lung biopsy

**Treatment:**
- Medications to slow down scarring
- Oxygen therapy
- Pulmonary rehabilitation
- Lung transplant in severe cases
- Treating the underlying cause if found

**Important:** Pulmonary fibrosis is usually progressive and cannot be completely cured, but treatments can help slow the disease and improve symptoms.`,
      keyTerms: [
        { term: 'fibrosis', definition: 'Formation of scar tissue in an organ or tissue' },
        { term: 'interstitial', definition: 'Relating to the spaces and tissues between the air sacs in the lungs' },
        { term: 'idiopathic', definition: 'Of unknown cause' },
        { term: 'clubbing', definition: 'Changes in the shape of fingers and fingernails associated with some lung diseases' },
      ],
      analogies: [
        'Healthy lung tissue is like a soft sponge that expands easily. Fibrotic lung is like a stiff, dried-out sponge that doesn\'t stretch.',
        'The lungs in pulmonary fibrosis are like honey that has crystallized - once the damage (crystals) form, it is hard to reverse.',
      ],
      examples: [
        'A construction worker exposed to asbestos for 30 years might develop pulmonary fibrosis.',
        'Someone with rheumatoid arthritis may develop lung scarring as part of their autoimmune disease.',
      ],
    },
    2: {
      level: 2,
      summary: 'Pulmonary fibrosis encompasses interstitial lung diseases (ILDs) characterized by inflammation and scarring of lung interstitium. IPF is the most common idiopathic form, occurring mostly in older males, with progressive decline in lung function.',
      explanation: `## Understanding Interstitial Lung Disease

**The Interstitium:**
- The tissue and space between the air sacs (alveoli)
- Contains blood vessels, connective tissue, and support structures
- Site of gas exchange between air and blood

## Classification of ILD

**Major Categories:**

**1. Idiopathic (Unknown Cause):**
- Idiopathic Pulmonary Fibrosis (IPF) - most common
- Nonspecific Interstitial Pneumonia (NSIP)
- Desquamative Interstitial Pneumonia (DIP)
- Cryptogenic Organizing Pneumonia (COP)

**2. Autoimmune-Associated:**
- Rheumatoid arthritis ILD
- Scleroderma (systemic sclerosis)
- Sjogren's syndrome
- Dermatomyositis/polymyositis
- Sarcoidosis

**3. Environmental/Exposure-Related:**
- Asbestosis (asbestos exposure)
- Silicosis (silica exposure)
- Coal worker's pneumoconiosis
- Hypersensitivity pneumonitis (bird fancier's, farmer's lung)
- Drug-induced

**4. Sarcoidosis:**
- Granulomatous inflammation
- Can affect many organs
- Often involves lymph nodes

## Idiopathic Pulmonary Fibrosis (IPF)

**Who gets IPF?**
- Usually ages 60-80
- More common in men
- Former or current smokers
- Family history in some cases

**Symptoms:**
- Gradual onset of dyspnea
- Dry, non-productive cough
- "Velcro-like" crackles on lung exam
- Clubbing in 25-50% of patients

**Diagnosis:**
- HRCT chest: Usual Interstitial Pneumonia (UIP) pattern
  - Basal and peripheral predominance
  - Honeycombing
  - Reticular opacities
- Pulmonary function tests:
  - Restrictive pattern (reduced lung volumes)
  - Decreased DLCO (gas exchange)
- Bronchoscopy with lavage (to exclude other causes)
- Surgical lung biopsy (sometimes needed)

**Treatment:**
- Antifibrotic medications (pirfenidone, nintedanib) slow decline
- Oxygen therapy
- Pulmonary rehabilitation
- Lung transplantation referral for eligible patients
- Clinical trial participation

**Prognosis:**
- Median survival 3-5 years from diagnosis
- Variable progression rate
- Acute exacerbations can cause sudden worsening`,
      keyTerms: [
        { term: 'ILD', definition: 'Interstitial lung disease; group of disorders causing lung scarring' },
        { term: 'IPF', definition: 'Idiopathic pulmonary fibrosis; progressive scarring of unknown cause' },
        { term: 'HRCT', definition: 'High-resolution computed tomography; detailed CT scan for lung patterns' },
        { term: 'UIP pattern', definition: 'Usual interstitial pneumonia; specific CT appearance of IPF' },
        { term: 'honeycombing', definition: 'Pattern of small cystic spaces in scarred lung tissue on imaging' },
        { term: 'DLCO', definition: 'Diffusing capacity of lung for carbon monoxide; measures gas exchange' },
      ],
      analogies: [
        'The UIP pattern on CT looks like a honeycomb - with a network of small holes where healthy lung used to be.',
        'Gas exchange in pulmonary fibrosis is like trying to breathe through a thick sweater instead of thin cloth.',
      ],
    },
    3: {
      level: 3,
      summary: 'ILD classification uses clinical-radiologic-pathologic diagnosis, with IPF defined by UIP pattern on HRCT in appropriate clinical context. Antifibrotics (pirfenidone, nintedanib) slow progression. Sarcoidosis and hypersensitivity pneumonitis require distinct management.',
      explanation: `## ILD Diagnostic Approach

### Stepwise Classification
**Clinical Assessment:**
- Detailed exposure history (birds, molds, dust, drugs)
- Occupational history
- Medication review
- Autoimmune symptoms and serologies

### HRCT Patterns

**Usual Interstitial Pneumonia (UIP):**
- Basal and peripheral predominance
- Reticular opacities
- Honeycombing with traction bronchiectasis
- Minimal ground glass

**Possible UIP:**
- UIP pattern but lacking one feature
- OR prominent ground glass

**Inconsistent with UIP:**
- Upper or mid-lung predominance
- Extensive ground glass
- Nodules, cysts, or mosaic pattern
- Findings suggesting alternative diagnosis

### Serologic Testing for CTD-ILD
- RF, anti-CCP (rheumatoid arthritis)
- ANA (screening)
- Anti-Scl70 (scleroderma)
- Anti-Jo1 (inflammatory myositis)
- Anti-Ro/La (Sjogren's)
- ACE (sarcoidosis - nonspecific)

### Multidisciplinary Discussion (MDD)
- Radiologist, pulmonologist, pathologist, rheumatologist
- Essential for accurate ILD classification
- Increases diagnostic confidence

## Specific ILD Entities

### Idiopathic Pulmonary Fibrosis (IPF)

**Diagnostic Criteria (ATS/ERS/JRS/ALAT 2018):**
1. Exclude other causes (ILD due to CTD, environmental, drug)
2. UIP pattern on HRCT (in appropriate clinical context)
   - If UIP present: Diagnosis without biopsy
   - If possible UIP: Consider biopsy
   - If inconsistent: Biopsy required

**Antifibrotic Therapy:**

| Agent | Mechanism | Effect | Key Side Effects |
|-------|-----------|--------|------------------|
| Pirfenidone | Multiple (anti-fibrotic, anti-inflammatory) | Slows FVC decline ~50% | Photosensitivity, GI, liver |
| Nintedanib | Tyrosine kinase inhibitor (VEGFR, FGFR, PDGFR) | Slows FVC decline ~50% | Diarrhea, liver, hypertension |

**When to Start:**
- Confirmed IPF
- FVC 50-90% predicted
- Not limited by comorbidities

### Hypersensitivity Pneumonitis (HP)
- Type III and IV hypersensitivity to inhaled antigen
- Acute, subacute, and chronic forms
- Common antigens: birds, mold, farmers lung, hot tub lung
- Diagnosis: Exposure history, HRCT, bronchoalveolar lavage (lymphocytosis), sometimes biopsy
- Treatment: Antigen avoidance, corticosteroids for acute/severe

### Sarcoidosis
- Non-caseating granulomas
- Hilar lymphadenopathy + pulmonary infiltrates
- Multi-system involvement (eyes, skin, liver, heart, calcium)
- Diagnosis: Clinical-radiologic + biopsy showing granulomas (exclude other causes)
- Treatment: Observation (mild), corticosteroids (moderate/severe), steroid-sparing agents (methotrexate, azathioprine)

### Connective Tissue Disease-Associated ILD
- RA-ILD: UIP pattern most common (similar to IPF but different behavior)
- Scleroderma: NSIP pattern most common
- Myositis: Anti-synthetase syndrome (anti-Jo1) with mechanic's hands
- Treatment: Immunosuppression, consider antifibrotics for progressive fibrotic phenotype

### Idiopathic NSIP
- Cellular vs fibrotic subtypes
- Better prognosis than IPF
- Responsive to corticosteroids +/- immunosuppressants

## Pulmonary Function in ILD
**Restrictive Pattern:**
- Decreased FVC, TLC, RV
- Normal or increased FEV1/FVC ratio
- Decreased DLCO (gas exchange impairment)

**Monitoring:**
- Serial FVC and DLCO every 3-6 months
- Decline of ≥10% FVC or ≥15% DLCO clinically significant`,
      keyTerms: [
        { term: 'UIP', definition: 'Usual interstitial pneumonia; pathologic and radiologic pattern of IPF' },
        { term: 'NSIP', definition: 'Nonspecific interstitial pneumonia; ILD with better prognosis than IPF' },
        { term: 'traction bronchiectasis', definition: 'Bronchial dilation from surrounding lung fibrosis pulling on airways' },
        { term: 'ground glass opacity', definition: 'Hazy increased lung attenuation on CT, obscuring vessels; may indicate inflammation' },
        { term: 'BAL lymphocytosis', definition: 'Increased lymphocytes in bronchoalveolar lavage fluid; suggests hypersensitivity pneumonitis' },
        { term: 'anti-synthetase syndrome', definition: 'Connective tissue disease with ILD, myositis, arthritis, fever, mechanic\'s hands, anti-Jo1 antibodies' },
      ],
      clinicalNotes: 'For IPF, both pirfenidone and nintedanib slow FVC decline by approximately 50%. Choice depends on side effect profile, drug interactions, and patient preference. Always obtain liver function tests before starting and monitor. Consider lung transplant referral early, not after treatment failure.',
    },
    4: {
      level: 4,
      summary: 'ILD management requires precise multidisciplinary classification, distinction of progressive fibrotic phenotypes, early antifibrotic therapy, recognition of treatable mimics, and integration of emerging biomarkers and targeted therapies.',
      explanation: `## Progressive Fibrosing ILD Phenotype

**Definition:**
- Decline in FVC ≥10% in 2 years despite appropriate management
- OR Decline in FVC ≥5% + worsening symptoms/imaging
- Applies to multiple ILDs beyond IPF

**Progressive Fibrosing ILDs:**
- IPF
- Fibrotic NSIP
- CTD-ILD with progressive fibrosis
- Chronic hypersensitivity pneumonitis
- Unclassifiable ILD

**INBUILD Trial (Nintedanib):**
- Showed benefit in progressive fibrosing ILDs (excluding IPF)
- Extended indication for nintedanib beyond IPF

## Diagnostic Challenges

### Fibrotic Hypersensitivity Pneumonitis vs IPF
**Differentiating Features:**

| Feature | fHP | IPF |
|---------|-----|-----|
| HRCT pattern | NSIP-like, possible centrilobular nodules | UIP |
| Distribution | Mid-lung or upper lung predominance possible | Basal predominance |
| Mosaic attenuation | Common | Rare |
| Exposures | Present (birds, mold) | None relevant |
| BAL | Lymphocytosis | Neutrophilia/eosinophilia |

**Diagnostic Approach:**
- Detailed exposure assessment
- Home inspection for hidden antigens
- Serum precipitins (limited utility)
- Surgical biopsy if uncertainty persists

### Unclassifiable ILD
- Inadequate clinical, radiologic, or pathologic data
- OR Conflicting findings
- OR Features of multiple ILDs
- Up to 10% of ILD referrals
- Management based on dominant phenotype

## Complications and Comorbidities

### Pulmonary Hypertension in ILD
- Prevalence 8-15% in IPF
- Associated with worse prognosis
- Diagnosis: Right heart catheterization (echocardiogram screening)
- Treatment: Oxygen, consider pulmonary hypertension therapies if Group 3 predominant with significant PH

### Acute Exacerbation of ILF
- Sudden, unexplained worsening
- Diagnosis of exclusion (infection, PE, heart failure)
- Mortality 50% or higher
- Treatment: High-dose corticosteroids (controversial), supportive care

### Lung Cancer
- Increased risk in IPF (lung cancer in 10-15%)
- Makes both management and screening challenging
- Screening not well-established

### Gastroesophageal Reflux
- Microaspiration may contribute to fibrosis
- Prevalence up to 90% in IPF
- Consider anti-reflux measures

## Antifibrotic Therapy: Advanced Considerations

### Pirfenidone
**Mechanism:**
- Multiple anti-fibrotic effects
- Reduces TGF-beta production
- Inhibits fibroblast proliferation

**Practical Use:**
- 2403 mg/day in divided doses
- Start at lower dose and titrate
- Avoid sun exposure (photosensitivity)
- Monitor LFTs

### Nintedanib
**Mechanism:**
- Tyrosine kinase inhibition
- Blocks VEGF, FGF, PDGF receptors
- Reduces fibroblast proliferation and matrix deposition

**Practical Use:**
- 150 mg BID
- Take with food to reduce GI effects
- Monitor LFTs
- Hold for surgery/high bleeding risk

### Choosing Between Them
| Factor | Pirfenidone | Nintedanib |
|--------|-------------|------------|
| Liver disease | May be preferred | Avoid |
| Anticoagulation | Preferred | Avoid |
| Cardiovascular disease | Preferred | Avoid |
| GI issues | Avoid | May be worse |
| Photosensitivity risk | Avoid | Preferred |

### Combination Therapy
- NOT recommended (increased toxicity without benefit)

## Emerging Therapies

### Pamrevlumab (FGF-2 inhibitor)
- Phase 3 trial ongoing
- Added to nintedanib or pirfenidone

### GLPG1690 (AUTOTAXIN inhibitor)
- Phase 3 halted (futility)

### LPA1 antagonist (BMS-986020)
- Targeting lysophosphatidic acid pathway
- Phase 2 showed signal

### SAR156597 (dual IL-4/IL-13)
- Anti-Th2 cytokine
- Phase 2 in IPF`,
      keyTerms: [
        { term: 'progressive fibrosing ILD', definition: 'Group of ILDs with continuing fibrosis despite appropriate management' },
        { term: 'acute exacerbation of IPF', definition: 'Sudden clinically significant respiratory deterioration without identifiable cause' },
        { term: 'unclassifiable ILD', definition: 'ILD that cannot be confidently classified after comprehensive evaluation' },
        { term: 'AUTOTAXIN', definition: 'Enzyme producing lysophosphatidic acid, mediator of fibrosis' },
      ],
      clinicalNotes: 'For progressive fibrosing ILD (not IPF), nintedanib is indicated based on INBUILD trial. For IPF, both antifibrotics have equivalent efficacy - choose based on comorbidities and side effect profile. Consider early lung transplant referral - waitlist mortality for IPF remains high. Acute exacerbations have >50% mortality - advanced care planning discussions essential.',
    },
    5: {
      level: 5,
      summary: 'Precision ILD care integrates genomic risk profiling, protein biomarker panels, deep learning radiomic analysis, novel antifibrotic targets, and personalized management incorporating comorbidity optimization, transplant timing, and emerging antifibrotic combinations.',
      explanation: `## Molecular Pathogenesis and Therapeutic Targets

### Fibrotic Cascade

**Epithelial Injury:**
- Environmental triggers (smoke, microaspiration, pollution)
- Telomere dysfunction (shortened telomeres in familial IPF)
- ER stress and cellular senescence

**Pro-Fibrotic Signaling:**
- TGF-beta: Master regulator of fibrosis
- PDGF, FGF: Fibroblast proliferation
- Wnt/beta-catenin: Epithelial-mesenchymal transition
- Lysophosphatidic acid (LPA): Fibroblast recruitment

**Extracellular Matrix Deposition:**
- Fibroblast to myofibroblast differentiation
- Excessive collagen production
- Impaired matrix degradation

### Genetic Risk Factors
**Common Variants (GWAS):**
- MUC5B promoter rs35705950: Strongest common risk factor
  - OR ~6-8 for IPF
  - Present in >30% of IPF patients
  - Also present in ~10% of general population
- Other loci: DSP, FAM13A, TERT, TERC

**Rare Variants:**
- Telomerase-related (TERT, TERC, RTEL1, PARN)
- Surfactant-related (SFTPC, SFTPA2, ABCA3)
- Telomere syndromes: Familial IPF, liver disease

**Clinical Implications:**
- Family history: 2-20% of IPF
- Genetic counseling for familial cases
- Consider telomere syndrome screening in younger patients
- May impact lung transplant candidacy

## Biomarker Development

### Protein Biomarkers (PERFUMES, PROFILE studies)
| Biomarker | Association | Clinical Utility |
|-----------|-------------|------------------|
| MMP7 | Elevated in IPF | Diagnosis, prognosis |
| KL-6 (MUC1) | Japanese populations | Disease activity |
| SP-D | Elevated in IPF | Diagnosis |
| CXCL13 | Mortality risk | Prognosis |
| YKL-40 | Fibrosis extent | Prognosis |

### Biomarker Panels
- Combined panels outperform single markers
- Risk stratification models
- May guide therapy intensity

### Circulating Fibrocytes
- Bone marrow-derived cells
- Correlate with disease progression
- Potential treatment target

### Blood Gene Expression
- 52-gene signature discriminating IPF from other ILDs
- Commercially available (Envisia Genomic Classifier)
- May reduce need for surgical biopsy

## Imaging: Beyond Pattern Recognition

### Radiomics and AI
**Deep Learning Applications:**
- Automated quantification of fibrosis extent
- Prediction of progression (FVC decline, mortality)
- Differentiation of ILD subtypes
- Detection of subtle change over time

### Parametric Response Mapping (PRM)
- Co-registered inspiratory/expiratory CT
- Quantifies functional lung impairment
- May detect progression earlier

### Micro-CT
- Research tool for evaluating microstructure
- May visualize early fibrosis

## Novel Therapeutic Targets and Agents

### Inhaled Therapies
**Rationale:**
- Direct lung delivery
- Lower systemic exposure
- Potential for antifibrotic effect

**Agents in Development:**
- Inhaled nintedanib
- Inhaled pirfenidone
- PBI-4050 (novel anti-fibrotic)

### Combination Antifibrotic Approaches
**Rationale:**
- Target multiple pathways
- Potential additive/synergistic effect
- Safety concerns limit enthusiasm

**Clinical Trials:**
- Nintedanib + pirfenidone: Increased toxicity without clear benefit (not recommended)
- Antifibrotic + novel agent: Ongoing

### Anti-Inflammatory/Anti-Autoimmune
**Rationale:**
- Some IPF has inflammatory component
- Lymphocyte aggregates present

**Trials:**
- Corticosteroids + azathioprine: PANTHER-IPF trial showed harm (mortality increased) - NOT recommended
- Methotrexate: Not beneficial
- Rituximab: Limited data

### Targeting Specific Pathways
**LOXL2 Inhibition (Simtuzumab):**
- Lysyl oxidase-like 2 involved in crosslinking collagen
- Phase 3 trials negative

**CTGF Inhibition (Pamrevlumab):**
- Connective tissue growth factor
- Phase 3 ongoing

**FGF-21 (Pegbelfermin):**
- Anti-fibrotic and metabolic effects
- Phase 2 in IPF completed

## Comorbidity Management: Evidence-Based

### Pulmonary Hypertension in ILD
**Treatment Considerations:**
- Group 3 PH: Limited evidence
- Pulmonary vasodilators may worsen V/Q mismatch
- INCREASE trial: Inhaled treprostinil improved exercise capacity in fibrotic ILD with PH
- Select patients with mPAP ≥25 mmHg, PAWP ≤15 mmHg, PVR >3 WU

### GERD and Microaspiration
**Pathophysiology:**
- GERD prevalence 80-90% in IPF
- Pepsin detected in BAL of IPF patients
- Animal models: Aspiration induces fibrosis

**Management:**
- High-dose PPI not shown to slow progression (WRAP-IPF trial)
- Consider anti-reflux surgery in selected patients
- Lifestyle modifications remain reasonable

### Sleep Disordered Breathing
- High prevalence in IPF (up to 70%)
- Nocturnal hypoxemia common
- CPAP improves oxygenation and quality of life

## Lung Transplantation in IPF

**Timing:**
- Median survival after listing: 3-4 months
- Listing threshold: FVC <50-60%, DLCO <30-40%, or clinical decline
- Don't wait for treatment failure to refer

**Allocation:**
- LAS (Lung Allocation Score) prioritizes sick patients
- IPF has higher LAS than COPD (higher urgency)

**Outcomes:**
- Median survival 5-7 years post-transplant
- Primary graft dysfunction risk higher in IPF
- Recurrence of fibrosis rare but reported

**Considerations:**
- Age limit varies by center (usually <65-70)
- Comorbidities affect candidacy
- Antifibrotics often continued until transplant

## Precision Medicine: Future Directions

### Molecular Endotyping
- IPF likely comprises multiple endotypes
- MUC5B high vs low expressers
- Telomere short vs normal
- May guide therapy selection

### Microbiome Modulation
- Altered lung microbiome in IPF
- Potential for probiotics or microbiome-based therapies

### Senolytics
- Senescent cell accumulation in fibrotic lung
- Dasatinib + quercetin being studied
- Early-stage clinical trials

### Regenerative Approaches
- Mesenchymal stem cells
- Lung progenitor cells
- Decellularized lung scaffolding`,
      keyTerms: [
        { term: 'MUC5B promoter variant', definition: 'Common genetic variant strongly associated with IPF risk; may affect mucus production' },
        { term: 'radiomics', definition: 'Extraction of quantitative features from medical imaging for predictive modeling' },
        { term: 'PERFUMES study', definition: 'Comprehensive biomarker study in IPF identifying multiple prognostic proteins' },
        { term: 'LAS', definition: 'Lung Allocation Score; system prioritizing donor lung allocation based on medical urgency and survival benefit' },
        { term: 'senolytics', definition: 'Drugs that selectively eliminate senescent cells to reduce chronic inflammation' },
      ],
      clinicalNotes: `Key clinical considerations for advanced ILD management:

1. **Antifibrotic timing**: Start as soon as IPF diagnosed, don't wait for decline. Both drugs slow progression but don't improve symptoms.

2. **Transplant referral**: Refer early (FVC <60%, DLCO <40%). Waitlist mortality high - don't wait for treatment failure.

3. **Comorbidity screening**: Screen for PH, GERD, OSA, CAD. Optimize comorbidities aggressively.

4. **Acute exacerbations**: Have treatment plan in place. Discuss ICU preferences while patient stable. Mortality >50%.

5. **Familial IPF**: Screen first-degree relatives with CT. Consider genetic testing and telomere length assessment.

6. **Palliative care**: Integrate early. Symptom burden high despite preserved lung function in some.

7. **Combination therapy**: Nintedanib + pirfenidone not recommended (increased toxicity). Monotherapy remains standard.

8. **Biomarkers**: Envisia genomic classifier may avoid biopsy in some cases. MUC5B genotype testing increasingly available.`,
    },
  },

  media: [
    {
      id: 'uip-pattern-ct',
      type: 'diagram',
      filename: 'uip-ct-pattern.svg',
      title: 'UIP Pattern on HRCT',
      description: 'Radiologic features of usual interstitial pneumonia including honeycombing and reticular opacities',
    },
    {
      id: 'ild-classification',
      type: 'diagram',
      filename: 'ild-classification-tree.svg',
      title: 'ILD Classification Algorithm',
      description: 'Diagnostic approach to interstitial lung diseases',
    },
  ],

  citations: [
    {
      id: 'ipf-guidelines-2018',
      type: 'article',
      title: 'Diagnosis and Management of Idiopathic Pulmonary Fibrosis: An Official ATS/ERS/JRS/ALAT Clinical Practice Guideline',
      authors: ['Raghu G', 'Remy-Jardin M', 'Ryerson CJ', 'et al.'],
      source: 'American Journal of Respiratory and Critical Care Medicine',
      url: 'https://doi.org/10.1164/rccm.201809-1640ST',
    },
    {
      id: 'inbuild-trial',
      type: 'article',
      title: 'Nintedanib for Progressive Fibrosing Interstitial Lung Diseases',
      authors: ['Cottin V', 'Cottin H', 'Berkowitz N', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1908681',
    },
  ],

  crossReferences: [
    { targetId: 'condition-rheumatoid-arthritis', targetType: 'condition', relationship: 'related', label: 'Rheumatoid Arthritis' },
    { targetId: 'condition-sarcoidosis', targetType: 'condition', relationship: 'related', label: 'Sarcoidosis' },
    { targetId: 'condition-pulmonary-hypertension', targetType: 'condition', relationship: 'related', label: 'Pulmonary Hypertension' },
    { targetId: 'condition-aspergillosis', targetType: 'condition', relationship: 'related', label: 'Aspergillosis' },
  ],

  tags: {
    systems: ['respiratory'],
    topics: ['pulmonology', 'rheumatology', 'radiology', 'pathology'],
    keywords: ['pulmonary fibrosis', 'ILD', 'IPF', 'sarcoidosis', 'hypersensitivity pneumonitis', 'antifibrotic'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'radiology'],
    },
  },

  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default pulmonaryFibrosis;
