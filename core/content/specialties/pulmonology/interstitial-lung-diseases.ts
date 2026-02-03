/**
 * Interstitial Lung Diseases - Comprehensive Educational Content
 *
 * Covers the spectrum of interstitial lung diseases including idiopathic
 * pulmonary fibrosis, hypersensitivity pneumonitis, sarcoidosis, and
 * connective tissue disease-associated ILD.
 */

import { EducationalContent } from '../../types';

export const interstitialLungDiseases: EducationalContent = {
  id: 'condition-interstitial-lung-diseases',
  type: 'condition',
  name: 'Interstitial Lung Diseases',
  alternateNames: ['ILD', 'Diffuse Parenchymal Lung Disease', 'DPLD'],

  levels: {
    1: {
      level: 1,
      summary: 'Interstitial lung diseases are conditions where the tissue around the air sacs in your lungs gets damaged and scarred, making it harder to breathe.',
      explanation: `Imagine your lungs are like a sponge with millions of tiny air bubbles. The walls between these bubbles are called the "interstitium" (in-ter-STISH-um). In interstitial lung disease, these walls get thick and stiff.

**What happens in ILD?**

Think of it like this: normally, oxygen passes easily through thin, flexible walls into your blood - like water soaking through a thin paper towel. But in ILD, the walls become thick and scarred - like trying to soak water through cardboard. This makes it:
- Harder for oxygen to get into your blood
- Harder to take deep breaths
- Difficult to exercise or climb stairs

**What causes it?**

Many things can cause ILD:
- **Breathing in harmful things**: Dust, mold, chemicals, or certain bird droppings over a long time
- **Certain medicines**: Some medications can affect the lungs
- **Autoimmune diseases**: When your body's defense system attacks your own lungs
- **Unknown causes**: Sometimes doctors can't find the reason

**Common symptoms:**
- Feeling short of breath, especially when exercising
- A dry cough that won't go away
- Feeling very tired
- Losing weight without trying

**How is it treated?**
- Avoiding things that cause lung damage
- Medications to reduce swelling and scarring
- Oxygen therapy to help breathing
- Special exercises to keep lungs working as well as possible`,
      keyTerms: [
        { term: 'interstitium', definition: 'The tissue between the tiny air sacs in your lungs', pronunciation: 'in-ter-STISH-um' },
        { term: 'fibrosis', definition: 'Scarring or thickening of tissue', pronunciation: 'fy-BRO-sis' },
        { term: 'air sacs', definition: 'Tiny balloon-like structures in your lungs where oxygen enters your blood (also called alveoli)' },
        { term: 'oxygen therapy', definition: 'Breathing extra oxygen through a mask or tubes to help your body get enough oxygen' },
      ],
      analogies: [
        'Normal lung tissue is like a thin, stretchy balloon that easily expands. In ILD, it becomes more like a stiff paper bag that is hard to inflate.',
        'The interstitium getting thick is like trying to breathe through a wet blanket instead of a thin sheet.',
      ],
      examples: [
        'A farmer who breathes in moldy hay for many years might develop ILD from the mold particles.',
        'A person taking certain heart medications might need lung checkups because some medicines can affect lung tissue.',
      ],
    },
    2: {
      level: 2,
      summary: 'Interstitial lung diseases (ILD) are a group of disorders causing inflammation and/or fibrosis of the lung interstitium, leading to impaired gas exchange and restrictive lung physiology.',
      explanation: `## What is Interstitial Lung Disease?

Interstitial lung disease (ILD) refers to over 200 different conditions that affect the lung interstitium - the tissue framework surrounding the alveoli (air sacs). The disease process typically involves:

1. **Inflammation**: Immune cells infiltrate the interstitium
2. **Fibrosis**: Scar tissue replaces normal lung tissue
3. **Architectural distortion**: Normal lung structure is disrupted

### Types of ILD

**Idiopathic (Unknown Cause):**
- Idiopathic pulmonary fibrosis (IPF) - most common and serious
- Nonspecific interstitial pneumonia (NSIP)
- Cryptogenic organizing pneumonia (COP)

**Known Causes:**
- *Occupational/Environmental*: Asbestosis, silicosis, coal worker's pneumoconiosis
- *Hypersensitivity pneumonitis*: Reaction to inhaled organic particles (mold, bird proteins)
- *Drug-induced*: Amiodarone, methotrexate, bleomycin
- *Radiation-induced*: After chest radiation therapy

**Connective Tissue Disease-Associated:**
- Rheumatoid arthritis-ILD
- Systemic sclerosis (scleroderma)-ILD
- Dermatomyositis/polymyositis-ILD

**Granulomatous:**
- Sarcoidosis
- Hypersensitivity pneumonitis (can be granulomatous)

### Symptoms

- **Progressive dyspnea** (shortness of breath): Starts with exercise, worsens over time
- **Dry cough**: Non-productive, persistent
- **Fatigue**: Often severe
- **Clubbing**: Fingertips become rounded (in some types)
- **Velcro crackles**: Fine crackling sounds heard with a stethoscope

### Diagnosis

1. **Medical history**: Exposures, medications, family history, connective tissue symptoms
2. **Physical exam**: Crackles, clubbing, signs of connective tissue disease
3. **Pulmonary function tests (PFTs)**: Show restrictive pattern
4. **High-resolution CT (HRCT)**: Shows patterns of disease
5. **Blood tests**: Autoantibodies, inflammatory markers
6. **Bronchoscopy with bronchoalveolar lavage (BAL)**: Examines cells from airways
7. **Lung biopsy**: Sometimes needed for definitive diagnosis

### Treatment Principles

- **Remove the cause** (if known): Stop medications, avoid exposures
- **Anti-inflammatory therapy**: Corticosteroids for inflammatory ILDs
- **Antifibrotic drugs**: Pirfenidone or nintedanib for IPF
- **Immunosuppression**: For connective tissue disease-associated ILD
- **Supportive care**: Oxygen, pulmonary rehabilitation
- **Lung transplant**: For end-stage disease`,
      keyTerms: [
        { term: 'restrictive lung disease', definition: 'A condition where the lungs cannot fully expand, reducing the total amount of air they can hold' },
        { term: 'HRCT', definition: 'High-resolution computed tomography; detailed CT scan that shows lung tissue in great detail', pronunciation: 'H-R-C-T' },
        { term: 'pulmonary fibrosis', definition: 'Scarring of lung tissue that makes it stiff and impairs breathing', pronunciation: 'PULL-muh-nair-ee fy-BRO-sis' },
        { term: 'bronchoalveolar lavage', definition: 'A procedure that washes fluid through the airways to collect cells for analysis', pronunciation: 'BRON-ko-al-VEE-oh-lar lah-VAZH' },
        { term: 'clubbing', definition: 'Bulging and rounding of the fingertips and nails, often seen in chronic lung or heart disease' },
      ],
      analogies: [
        'A PFT in ILD shows a restrictive pattern - like trying to fill a smaller cup with air instead of a larger one, though the air flows normally.',
      ],
    },
    3: {
      level: 3,
      summary: 'ILDs comprise a heterogeneous group of parenchymal lung disorders characterized by varying degrees of inflammation and fibrosis affecting the alveolar walls, with distinct radiological patterns (UIP, NSIP, OP) guiding diagnosis and management.',
      explanation: `## Pathophysiology

### Fibrotic Pathway

The development of pulmonary fibrosis follows a general sequence:

1. **Epithelial injury**: Alveolar epithelial cells damaged by various insults
2. **Abnormal wound healing**: Dysregulated repair response
3. **Fibroblast activation**: Fibroblasts differentiate into myofibroblasts
4. **ECM deposition**: Excessive collagen and extracellular matrix accumulation
5. **Architectural destruction**: Loss of normal alveolar structure

### Key Molecular Players

- **TGF-β**: Master regulator of fibrosis
- **PDGF**: Promotes fibroblast proliferation
- **CTGF**: Mediates TGF-β fibrotic effects
- **VEGF**: Altered angiogenesis
- **MMPs/TIMPs**: Imbalanced matrix remodeling

## Classification by HRCT Pattern

### Usual Interstitial Pneumonia (UIP)

**Radiological features:**
- Basal and peripheral predominance
- Honeycombing (clusters of cysts)
- Traction bronchiectasis
- Minimal ground-glass opacity
- Heterogeneous (areas of normal lung)

**Differential:**
- Idiopathic pulmonary fibrosis (most common)
- Chronic hypersensitivity pneumonitis
- Connective tissue disease-ILD
- Asbestosis

### Nonspecific Interstitial Pneumonia (NSIP)

**Radiological features:**
- Basal predominance
- Ground-glass opacity (dominant)
- Reticular pattern
- No or minimal honeycombing
- Relative subpleural sparing

**Differential:**
- Connective tissue disease-ILD
- Drug-induced
- Idiopathic NSIP
- Hypersensitivity pneumonitis

### Organizing Pneumonia (OP)

**Radiological features:**
- Patchy consolidations
- Peribronchovascular distribution
- May be migratory
- Reverse halo sign (atoll sign)

**Differential:**
- Cryptogenic organizing pneumonia
- Secondary OP (infection, drug, CTD)

## Idiopathic Pulmonary Fibrosis (IPF)

### Diagnostic Criteria (ATS/ERS 2022)

1. Exclusion of other known causes
2. UIP pattern on HRCT or surgical lung biopsy
3. Specific combinations of HRCT and histopathology patterns

**HRCT-only diagnosis possible with:**
- Definite UIP pattern AND
- No identifiable cause

### Risk Factors

- Age >60 years
- Male sex
- Smoking history
- Genetic factors (MUC5B, TERT, TERC mutations)
- GERD (controversial)
- Occupational exposures

### Treatment

**Antifibrotic Therapy:**
- **Pirfenidone**: TGF-β inhibitor; reduces FVC decline by ~50%
- **Nintedanib**: Tyrosine kinase inhibitor (PDGF, VEGF, FGF); similar efficacy

Both slow progression but do not reverse fibrosis.

**Supportive Care:**
- Supplemental oxygen for hypoxemia
- Pulmonary rehabilitation
- Vaccination (influenza, pneumococcal)
- Treatment of comorbidities (GERD, OSA, PHT)

**Acute Exacerbations:**
- Rapid deterioration without identifiable cause
- High mortality (>50%)
- Treatment: High-dose corticosteroids (limited evidence)

## Hypersensitivity Pneumonitis (HP)

### Etiology

| Exposure | Disease Name |
|----------|--------------|
| Bird proteins | Bird fancier's lung |
| Moldy hay | Farmer's lung |
| Hot tub mold | Hot tub lung |
| Contaminated humidifiers | Humidifier lung |

### Classification

- **Acute HP**: Symptoms 4-8 hours post-exposure, resolves with removal
- **Chronic HP**: Insidious, may progress to fibrosis even after exposure removal

### Diagnosis

- History of exposure
- Compatible HRCT (centrilobular nodules, ground-glass, mosaic attenuation, fibrosis in chronic)
- BAL lymphocytosis (>20-30%)
- Serum precipitins (sensitized IgG) - supportive but not diagnostic

## Sarcoidosis

### Pathophysiology

- Granulomatous disease of unknown etiology
- Non-caseating granulomas with multinucleated giant cells
- CD4+ Th1 predominant inflammation

### Staging (Chest X-ray)

| Stage | Findings | Spontaneous Remission |
|-------|----------|----------------------|
| 0 | Normal | - |
| I | Hilar lymphadenopathy only | 55-90% |
| II | Hilar lymphadenopathy + parenchymal infiltrates | 40-70% |
| III | Parenchymal infiltrates only | 10-20% |
| IV | Fibrosis | 0% |

### Treatment Indications

- Symptomatic pulmonary disease
- Declining lung function
- Extrapulmonary involvement (cardiac, neurologic, ocular)

**First-line:** Corticosteroids (prednisone 20-40 mg/day)
**Steroid-sparing:** Methotrexate, azathioprine
**Refractory:** Infliximab, adalimumab`,
      keyTerms: [
        { term: 'UIP', definition: 'Usual interstitial pneumonia; a histological and radiological pattern characterized by temporal and spatial heterogeneity with honeycombing' },
        { term: 'honeycombing', definition: 'Clustered cystic airspaces with thick, fibrous walls representing end-stage fibrosis' },
        { term: 'traction bronchiectasis', definition: 'Dilation of bronchi due to surrounding fibrosis pulling on airway walls' },
        { term: 'ground-glass opacity', definition: 'Hazy increased lung density on CT that does not obscure underlying vessels; indicates inflammation or early fibrosis' },
        { term: 'non-caseating granuloma', definition: 'Organized collection of immune cells (epithelioid histiocytes) without central necrosis; characteristic of sarcoidosis' },
        { term: 'MUC5B', definition: 'A mucin gene; common variant associated with increased IPF risk', pronunciation: 'myook-five-bee' },
      ],
      clinicalNotes: 'The distinction between UIP and NSIP patterns on HRCT is crucial - UIP pattern with no identifiable cause likely represents IPF with poor prognosis. NSIP is often treatable and has better outcomes. Multidisciplinary discussion (pulmonologist, radiologist, pathologist) is standard of care for ILD diagnosis.',
    },
    4: {
      level: 4,
      summary: 'Interstitial lung diseases represent a complex spectrum of disorders requiring multidisciplinary evaluation integrating clinical, radiological, and histopathological features, with emerging molecular phenotyping guiding precision antifibrotic and immunomodulatory therapy.',
      explanation: `## Advanced Pathophysiology

### Epithelial-Mesenchymal Crosstalk in Fibrosis

**Alveolar Epithelial Cell (AEC) Dysfunction:**
- Type II AEC injury is the initiating event in IPF
- ER stress, senescence, and telomere dysfunction
- Impaired progenitor cell function prevents normal repair
- Aberrant signaling promotes fibroblast activation

**Fibroblast Foci:**
- Aggregates of myofibroblasts at the fibrotic front
- Represent active sites of disease progression
- Number correlates with mortality
- Express α-smooth muscle actin (α-SMA)

**Myofibroblast Origins:**
- Resident fibroblast activation
- Epithelial-mesenchymal transition (EMT)
- Endothelial-mesenchymal transition
- Circulating fibrocyte recruitment
- Pericyte differentiation

### Molecular Pathways

**TGF-β Signaling:**
- Canonical: Smad2/3 phosphorylation → nuclear translocation
- Non-canonical: MAPK, PI3K/Akt, Rho GTPase pathways
- Drives ECM production, myofibroblast differentiation, EMT

**WNT/β-catenin:**
- Reactivated in IPF (normally embryonic pathway)
- Promotes fibroblast proliferation and ECM synthesis
- Therapeutic target under investigation

**Senescence:**
- Accumulation of senescent cells in IPF lungs
- Senescence-associated secretory phenotype (SASP)
- Pro-fibrotic paracrine signaling
- Senolytics (dasatinib + quercetin) in clinical trials

## Diagnostic Algorithm

### Multidisciplinary Discussion (MDD)

The diagnostic gold standard integrates:

1. **Clinical context**: Age, sex, exposures, medications, CTD symptoms
2. **Physiologic assessment**: PFTs, 6MWT, gas exchange
3. **Serologic workup**: ANA, RF, anti-CCP, myositis panel, hypersensitivity panel
4. **Radiologic pattern**: HRCT features
5. **Histopathology**: When indicated (surgical lung biopsy or cryobiopsy)

### HRCT Pattern Recognition

**Confident UIP Pattern (IPF without biopsy):**
- Basal, peripheral, subpleural distribution
- Honeycombing ± traction bronchiectasis
- Absent features inconsistent with UIP

**Probable UIP:**
- UIP distribution but no honeycombing
- Traction bronchiectasis in reticulation

**Indeterminate for UIP:**
- Basal/peripheral but with features suggesting alternative
- Or does not fit UIP or alternative diagnosis

**Alternative Diagnosis:**
- Features suggesting HP, NSIP, sarcoidosis, etc.

### Transbronchial Lung Cryobiopsy (TBLC)

- Alternative to surgical lung biopsy
- Larger specimens than transbronchial forceps
- Lower morbidity than surgical biopsy
- Diagnostic yield 70-80% in MDD context
- Pneumothorax 10%, bleeding 1-2%

## Disease-Specific Management

### IPF: Antifibrotic Therapy Details

**Pirfenidone:**
- Mechanism: TGF-β inhibition, antioxidant, anti-inflammatory
- Dosing: Titrate to 801 mg TID over 2 weeks
- Side effects: GI (nausea, anorexia), photosensitivity, rash
- Monitoring: LFTs at baseline, monthly x6 months, then q3 months

**Nintedanib:**
- Mechanism: Multi-tyrosine kinase inhibitor (PDGFR, VEGFR, FGFR)
- Dosing: 150 mg BID
- Side effects: Diarrhea (>60%), LFT elevation, bleeding risk
- Monitoring: LFTs monthly x3 months, then periodically
- Contraindications: Severe hepatic impairment

**Evidence:**
- ASCEND (pirfenidone): 47% reduction in FVC decline rate
- INPULSIS (nintedanib): 52% reduction in FVC decline rate
- Neither improves survival conclusively (underpowered for mortality)

### Progressive Fibrosing ILD

INBUILD trial established nintedanib efficacy for:
- Chronic HP with progressive fibrosis
- CTD-ILD with progressive fibrosis
- Idiopathic NSIP with progressive fibrosis
- Unclassifiable ILD with progressive fibrosis

**Progressive criteria:** Within prior 24 months despite treatment:
- Relative FVC decline ≥10%
- Relative FVC decline 5-10% + worsening symptoms or HRCT

### Connective Tissue Disease-ILD

**Rheumatoid Arthritis-ILD:**
- UIP pattern common (poor prognosis)
- Methotrexate controversial (minimal lung toxicity risk)
- Nintedanib reduces FVC decline regardless of background therapy

**Systemic Sclerosis-ILD (SSc-ILD):**
- Most common cause of SSc mortality
- SENSCIS trial: Nintedanib reduced FVC decline
- SLS II: Mycophenolate non-inferior to cyclophosphamide
- Tocilizumab: Stabilizes lung function (IL-6 receptor blockade)

**Inflammatory Myopathy-ILD:**
- Anti-MDA5: Rapidly progressive, amyopathic dermatomyositis
- Anti-Jo-1/synthetase: OP pattern, often steroid-responsive
- Combined immunosuppression often required

## Lung Transplantation

### Indications

- Progressive disease despite medical therapy
- FVC <70-80% predicted or DLCO <40%
- 6MWD decline
- Hospitalization for respiratory worsening
- Oxygen requirement

### IPF-Specific Considerations

- Single vs. bilateral: Bilateral offers survival advantage
- Median survival post-transplant: ~5 years
- Primary graft dysfunction risk
- Gastroesophageal reflux management critical

### Prognostic Models

**GAP Index (IPF):**
- Gender, Age, Physiology (FVC, DLCO)
- Stages I, II, III predict 1-year mortality: 6%, 16%, 39%

**ILD-GAP:**
- Extends to non-IPF ILD
- Includes diagnosis as additional variable`,
      keyTerms: [
        { term: 'fibroblast focus', definition: 'Aggregate of myofibroblasts at the leading edge of fibrosis in UIP; correlates with disease progression' },
        { term: 'epithelial-mesenchymal transition', definition: 'Process by which epithelial cells acquire mesenchymal (fibroblast-like) properties; contributes to fibrosis', pronunciation: 'ep-ih-THEE-lee-al mez-EN-ki-mal' },
        { term: 'cryobiopsy', definition: 'Bronchoscopic technique using a cryoprobe to obtain larger lung tissue samples than forceps biopsy' },
        { term: 'SASP', definition: 'Senescence-associated secretory phenotype; pro-inflammatory and pro-fibrotic factors secreted by senescent cells' },
        { term: 'GAP index', definition: 'Prognostic scoring system using Gender, Age, and Physiology (FVC, DLCO) to predict mortality in IPF' },
        { term: 'anti-MDA5', definition: 'Antibody associated with rapidly progressive ILD in dermatomyositis, often with minimal muscle involvement' },
      ],
      clinicalNotes: 'Key clinical pearls: 1) Always screen for connective tissue disease in ILD - 10-20% have occult CTD. 2) Drug-induced ILD is underdiagnosed - review all medications including supplements. 3) Acute exacerbation of IPF carries >50% in-hospital mortality - prevention through vaccination and GERD treatment is crucial. 4) Antifibrotics slow but do not stop FVC decline - address patient expectations.',
    },
    5: {
      level: 5,
      summary: 'Contemporary ILD management integrates molecular phenotyping, biomarker-guided prognostication, precision immunomodulation based on disease endotype, and individualized antifibrotic therapy with emerging senolytic and regenerative approaches on the horizon.',
      explanation: `## Molecular Pathogenesis and Therapeutic Targets

### Telomere Biology in IPF

**Genetic Evidence:**
- Short telomeres found in 25-30% of familial IPF
- TERT/TERC mutations: Telomerase dysfunction
- RTEL1, PARN: Telomere maintenance genes
- Short telomeres predict worse outcomes independent of genotype

**Cellular Consequences:**
- AEC senescence and exhaustion
- Impaired regenerative capacity
- Activation of DNA damage response (DDR)
- p53/p21 pathway activation

**Therapeutic Implications:**
- Telomerase activators under investigation
- Danazol increases telomere length (small studies)
- Senolytics target senescent cell accumulation

### Surfactant Protein Mutations

**SFTPC (Surfactant Protein C):**
- Dominant mutations cause familial pulmonary fibrosis
- ER stress, misfolded protein accumulation
- Presents in children and adults
- Heterogeneous phenotype

**SFTPA1/SFTPA2:**
- Associated with familial fibrosis and lung adenocarcinoma
- Protein misfolding, ER stress

**ABCA3:**
- Recessive mutations
- Neonatal respiratory failure or childhood ILD
- Lamellar body abnormalities

### Epigenetic Dysregulation

**DNA Methylation:**
- Global hypomethylation in IPF lungs
- Specific gene promoter hypermethylation (THY1, CDKN2A)
- Potential biomarkers and therapeutic targets

**Histone Modifications:**
- Increased HDAC activity in IPF fibroblasts
- HDAC inhibitors show antifibrotic effects preclinically

**MicroRNAs:**
| miRNA | Direction in IPF | Function |
|-------|-----------------|----------|
| miR-21 | ↑ | Pro-fibrotic, TGF-β mediator |
| miR-29 | ↓ | Anti-fibrotic, ECM regulator |
| miR-200 | ↓ | Anti-EMT |
| let-7d | ↓ | Anti-fibrotic |

### Mechanotransduction

- Stiff matrix activates fibroblasts via YAP/TAZ
- Positive feedback: Fibrosis → stiffness → more fibrosis
- Mechanosensitive TRP channels
- Targeting tissue mechanics as therapy

## Biomarkers for Prognostication and Treatment Response

### Blood Biomarkers

**KL-6 (Krebs von den Lungen-6):**
- Mucin-like glycoprotein from type II AECs
- Elevated in ILD, correlates with disease severity
- Serial changes predict progression
- Widely used in Japan; less established in US/Europe

**SP-D (Surfactant Protein D):**
- Elevated in alveolar epithelial injury
- Prognostic value in IPF

**MMP-7:**
- Matrix metalloproteinase-7
- Peripheral blood levels predict mortality
- Potential response biomarker

**CCL18:**
- Produced by alveolar macrophages
- Elevated levels predict mortality

### Composite Biomarker Scores

**Emerging Panels:**
- Multi-marker panels improve prognostication
- Commercial tests entering clinical practice
- Integration with clinical/physiologic parameters

### Functional Biomarkers

**FVC Trajectory:**
- Serial FVC decline is strongest predictor
- Decline ≥5% over 6 months: Poor prognosis
- Absolute decline more predictive than relative

**DLCO:**
- Reflects gas exchange impairment
- May decline before FVC
- <40% predicted: Consider transplant evaluation

**6-Minute Walk Test:**
- Desaturation to <88%: Poor prognosis
- Decline in distance over time
- Reflects functional capacity

## Emerging Therapeutics

### Novel Antifibrotic Targets

**Anti-IL-11:**
- IL-11 downstream of TGF-β
- Promotes fibroblast activation
- Monoclonal antibodies in development

**LPA1 Receptor Antagonists:**
- Lysophosphatidic acid promotes fibrosis
- BMS-986020 showed efficacy (development paused)

**αvβ6 Integrin Inhibitors:**
- Activates latent TGF-β
- Bexotegrast in Phase 2 trials

**Pentraxin-2 (PTX-2/PRM-151):**
- Recombinant human pentraxin-2
- Promotes macrophage phagocytosis
- Phase 2: Slowed FVC decline
- Phase 3 ongoing

### Senolytic Therapy

**Dasatinib + Quercetin:**
- Clear senescent cells
- Open-label study showed improved physical function
- Randomized trials in progress

**Fisetin:**
- Flavonoid with senolytic properties
- Clinical trials ongoing

### Regenerative Approaches

**Cell-Based Therapies:**
- Mesenchymal stem cells (MSCs): Immunomodulatory, anti-fibrotic
- Multiple trials, mixed results
- Optimal cell source, dose, route unclear

**Type II AEC Regeneration:**
- Induced pluripotent stem cell approaches
- Alveolar organoid models for drug screening

## ILD in the Era of Precision Medicine

### Molecular Phenotyping

**Transcriptomic Signatures:**
- Gene expression profiles distinguish IPF from HP
- Identify rapid progressors
- Guide therapy selection

**Proteomic Approaches:**
- Protein biomarker panels
- Drug response prediction

### Machine Learning in ILD

**HRCT Quantification:**
- Automated fibrosis quantification
- Disease progression prediction
- Clinical trial endpoints

**Integrated Algorithms:**
- Combine clinical, imaging, molecular data
- Personalized prognostication
- Treatment optimization

### Progressive Pulmonary Fibrosis (PPF)

**Conceptual Framework:**
- Recognizes common fibrotic behavior across etiologies
- Treatment based on progressive phenotype, not just diagnosis
- Antifibrotic therapy for all progressive fibrosis

**Criteria (INBUILD-derived):**
Despite standard management, ≥2 of 3 within prior 12 months:
1. Worsening symptoms
2. Physiologic progression (FVC ≥5% absolute, DLCO ≥10%)
3. Radiologic progression

## Clinical Practice Pearls

### Immunosuppression in Fibrotic ILD

**PANTHER-IPF Lesson:**
- Prednisone + azathioprine + NAC increased mortality in IPF
- Immunosuppression harmful in pure fibrotic phenotype
- Reserve for inflammatory endotypes

**When to Immunosuppress:**
- CTD-ILD (especially inflammatory patterns)
- Hypersensitivity pneumonitis with active inflammation
- Sarcoidosis
- Drug-induced ILD (remove drug + steroids if severe)

### Palliative Care Integration

- Early palliative care improves quality of life
- Symptom management (dyspnea, cough, anxiety)
- Advance care planning essential
- Hospice referral when appropriate

### Clinical Trial Considerations

- Progressive disease: Consider trials
- Many novel agents in development
- Discuss with ILD specialist
- ClinicalTrials.gov monitoring`,
      keyTerms: [
        { term: 'telomere', definition: 'Protective caps on chromosome ends that shorten with cell division; dysfunction leads to cellular senescence and is implicated in familial pulmonary fibrosis' },
        { term: 'senolytic', definition: 'Drug that selectively eliminates senescent cells; emerging therapy for fibrotic diseases', pronunciation: 'sen-oh-LIT-ik' },
        { term: 'KL-6', definition: 'Krebs von den Lungen-6; a mucin-like glycoprotein blood biomarker for ILD severity and progression' },
        { term: 'PPF', definition: 'Progressive pulmonary fibrosis; a phenotype-based approach recognizing progressive fibrosis across ILD etiologies requiring antifibrotic therapy' },
        { term: 'mechanotransduction', definition: 'Process by which cells sense and respond to mechanical forces; stiff fibrotic matrix activates profibrotic pathways' },
        { term: 'PANTHER-IPF', definition: 'Landmark trial demonstrating harm of immunosuppression (prednisone/azathioprine/NAC) in IPF' },
      ],
      clinicalNotes: `Practice recommendations:

1. **Molecular testing**: Consider genetic testing in early-onset, familial, or atypical presentations. Telomere length testing can guide prognosis and transplant timing.

2. **Antifibrotic selection**: Pirfenidone and nintedanib have similar efficacy. Choose based on side effect profile (GI issues: consider pirfenidone; photosensitivity concerns: consider nintedanib).

3. **Progressive fibrosis management**: Don't wait for IPF diagnosis to consider antifibrotics. Any progressive fibrotic ILD benefits from nintedanib.

4. **Biomarker monitoring**: Serial KL-6 or SP-D (where available) can complement FVC monitoring for disease activity.

5. **Transplant timing**: Refer early (DLCO <40%, FVC declining despite treatment). Wait-list mortality is high.

6. **Clinical trials**: Encourage participation - multiple novel targets under investigation with potential for disease modification beyond current therapies.`,
    },
  },

  media: [
    {
      id: 'ild-hrct-patterns',
      type: 'diagram',
      filename: 'ild-hrct-patterns.svg',
      title: 'HRCT Patterns in ILD',
      description: 'Visual comparison of UIP, NSIP, HP, and sarcoidosis patterns on HRCT',
    },
    {
      id: 'ild-classification-algorithm',
      type: 'diagram',
      filename: 'ild-classification-algorithm.svg',
      title: 'ILD Classification Algorithm',
      description: 'Diagnostic approach to interstitial lung disease',
    },
    {
      id: 'fibrosis-pathophysiology',
      type: 'diagram',
      filename: 'fibrosis-pathophysiology.svg',
      title: 'Pulmonary Fibrosis Pathophysiology',
      description: 'Molecular pathways leading to fibrosis including TGF-beta signaling',
    },
  ],

  citations: [
    {
      id: 'ats-ers-ipf-2022',
      type: 'article',
      title: 'Idiopathic Pulmonary Fibrosis: Diagnosis and Treatment',
      authors: ['Raghu G', 'Remy-Jardin M', 'Richeldi L', 'et al.'],
      source: 'American Journal of Respiratory and Critical Care Medicine',
      url: 'https://doi.org/10.1164/rccm.202202-0399ST',
    },
    {
      id: 'lancet-ild-2021',
      type: 'article',
      title: 'Interstitial lung disease',
      authors: ['Wijsenbeek M', 'Cottin V'],
      source: 'Lancet',
      url: 'https://doi.org/10.1016/S0140-6736(21)00442-5',
    },
    {
      id: 'inbuild-trial',
      type: 'article',
      title: 'Nintedanib in Progressive Fibrosing Interstitial Lung Diseases',
      authors: ['Flaherty KR', 'Wells AU', 'Cottin V', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1908681',
    },
  ],

  crossReferences: [
    { targetId: 'topic-pulmonary-function-tests', targetType: 'topic', relationship: 'related', label: 'Pulmonary Function Tests' },
    { targetId: 'condition-asthma', targetType: 'condition', relationship: 'related', label: 'Asthma' },
    { targetId: 'condition-copd', targetType: 'condition', relationship: 'related', label: 'COPD' },
    { targetId: 'topic-respiratory-medications', targetType: 'topic', relationship: 'related', label: 'Respiratory Medications' },
  ],

  tags: {
    systems: ['respiratory', 'immune'],
    topics: ['pulmonology', 'fibrosis', 'autoimmune', 'chronic disease'],
    keywords: ['ILD', 'pulmonary fibrosis', 'IPF', 'sarcoidosis', 'hypersensitivity pneumonitis', 'NSIP', 'antifibrotic', 'nintedanib', 'pirfenidone'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pulmonology'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default interstitialLungDiseases;
