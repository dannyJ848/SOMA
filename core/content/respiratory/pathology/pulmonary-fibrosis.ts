/**
 * Pulmonary Fibrosis Pathology - Respiratory Pathology
 *
 * Pathological features of interstitial lung diseases with fibrosis,
 * including usual interstitial pneumonia and other patterns.
 */

import { EducationalContent } from '../../types';

export const pulmonaryFibrosisPathologyContent: EducationalContent = {
  id: 'pathology-pulmonary-fibrosis',
  type: 'condition',
  name: 'Pulmonary Fibrosis Pathology',
  alternateNames: ['Interstitial Lung Disease Pathology', 'UIP Pattern', 'Lung Fibrosis'],

  levels: {
    1: {
      level: 1,
      summary: 'Pulmonary fibrosis is when lung tissue becomes scarred and stiff, making it hard to breathe. The normal spongy lung turns into stiff, scarred tissue.',
      explanation: `## What Is Pulmonary Fibrosis?

Pulmonary fibrosis means the lungs have become scarred. Over time, the thin, flexible walls of the air sacs become thick and stiff with scar tissue.

### What Happens to the Lungs?

**Normal Lungs:**
- Soft and spongy
- Full of tiny air sacs
- Easy to expand when breathing in
- Good at absorbing oxygen

**Fibrotic Lungs:**
- Stiff and heavy
- Scarred and thickened
- Hard to expand
- Cannot absorb oxygen well

### What Does Scar Tissue Look Like?

**Under the Microscope:**
- Thick, pink collagen fibers
- Disorganized structure
- No normal air spaces
- Honeycomb appearance in severe cases

**How It Develops:**
- Starts with injury to lung tissue
- Healing goes wrong
- Too much scar tissue forms
- Normal tissue is replaced

### Common Causes

**Idiopathic:**
- No known cause
- Called idiopathic pulmonary fibrosis (IPF)
- Most common type
- Worsens over time

**Known Causes:**
- Asbestos exposure
- Radiation treatment
- Certain medicines
- Rheumatoid arthritis
- Scleroderma

### What You See

**Early Stage:**
- Inflammation
- Some scarring beginning
- Still some normal lung

**Late Stage:**
- Extensive scarring
- Honeycomb changes
- Very stiff lungs
- Small shrunken lungs

### The Result
- Progressive shortness of breath
- Dry cough
- Need for oxygen
- Limited life expectancy in severe cases`,
      keyTerms: [
        { term: 'fibrosis', definition: 'Formation of scar tissue in an organ' },
        { term: 'interstitial', definition: 'The tissue and space around the air sacs' },
        { term: 'honeycombing', definition: 'Late-stage fibrosis with cystic spaces resembling honeycomb' },
        { term: 'idiopathic', definition: 'Of unknown cause' },
        { term: 'collagen', definition: 'Protein that makes up scar tissue' },
      ],
      analogies: [
        'Pulmonary fibrosis is like an old leather bag that gets stiff and cracked instead of soft and flexible.',
        'Normal lung tissue is like a soft sponge; fibrotic lung is like a hard, crusty sponge left to dry.',
        'The honeycomb appearance is like looking at the inside of an actual honeycomb - many small cystic spaces.',
      ],
      examples: [
        'In idiopathic pulmonary fibrosis, the lower lobes show more scarring with a subpleural and basal predominance.',
        'Asbestos exposure causes pleural plaques and interstitial fibrosis with characteristic asbestos bodies visible.',
      ],
    },
    2: {
      level: 2,
      summary: 'Pulmonary fibrosis shows patterns of interstitial scarring including usual interstitial pneumonia (UIP) with temporal and spatial heterogeneity, honeycomb change, and fibroblast foci.',
      explanation: `## Histological Patterns

### Usual Interstitial Pneumonia (UIP)

**Definition:**
Specific pattern of chronic fibrosing interstitial pneumonia characterized by patchy involvement with architectural distortion, temporal heterogeneity, and honeycomb change.

**Key Features:**
- Temporal heterogeneity (old + new fibrosis)
- Spatial heterogeneity (patchy distribution)
- Honeycomb remodeling
- Fibroblast foci at leading edge
- Subpleural and basal predominance

**Microscopic Appearance:**
- Dense collagen deposition
- Scarred alveolar walls
- Cystic honeycomb spaces
- Mucus-filled cysts
- Bronchiolar metaplasia

### Fibroblast Focus

**Definition:**
Cluster of proliferating fibroblasts and myofibroblasts within myxoid stroma at the front of fibrotic remodeling.

**Significance:**
- Hallmark of UIP
- Indicates active disease
- Associated with progression
- Multiple = worse prognosis

**Appearance:**
- Pink to pale staining
- Spindle cells
- Adjacent to scar
- "Leading edge" location

### Honeycomb Change

**Definition:**
Cystic spaces lined by bronchiolar epithelium in densely fibrotic lung.

**Features:**
- Dilated air spaces
- Mucus accumulation
- Bronchiolar metaplasia
- Surrounded by scar
- End-stage change

### Nonspecific Interstitial Pneumonia (NSIP)

**Features:**
- Uniform involvement
- Temporal homogeneity
- Inflammation or fibrosis
- Cellular or fibrotic subtype
- Better prognosis than UIP

**Types:**
- Cellular NSIP (inflammation)
- Fibrotic NSIP (scarring)
- Mixed pattern

### Organizing Pneumonia (OP)

**Previously BOOP:**
- Intraluminal plugs (Masson bodies)
- Fibroblastic tissue
- Patchy distribution
- Preserved architecture
- Steroid responsive

### Respiratory Bronchiolitis-Interstitial Lung Disease (RB-ILD)

**Features:**
- Smokers
- Pigmented macrophages
- Mild fibrosis
- Upper lobe
- Reversible if stop smoking

### Desquamative Interstitial Pneumonia (DIP)

**Features:**
- Alveolar macrophage accumulation
- Mild interstitial inflammation
- Smokers
- Better prognosis than UIP

### Hypersensitivity Pneumonitis (Chronic)

**Features:**
- Poorly formed granulomas
- Bronchiolocentric
- Interstitial fibrosis
- Bridging between bronchioles
- Mosaic attenuation on CT

### Connective Tissue Disease-Related

**Rheumatoid Arthritis:**
- UIP or NSIP pattern
- Pleural involvement
- Nodules possible
- Follicular bronchiolitis

**Scleroderma:**
- NSIP most common
- Ground glass on CT
- Honeycomb (late)
- Pulmonary hypertension

**Polymyositis/Dermatomyositis:**
- NSIP pattern
- Rapid progression
- Anti-synthetase syndrome
- Mechanic\'s hands

### Asbestos-Related Fibrosis

**Features:**
- Pleural plaques
- Interstitial fibrosis
- Asbestos bodies
- Lower lobe predominance
- Bilateral

### Radiation Pneumonitis/Fibrosis

**Acute (1-3 months):**
- Alveolar damage
- Hyaline membranes
- Fibrin deposition

**Organizing (3-9 months):**
- Type II cell hyperplasia
- Vascular changes
- Scar formation

**Chronic (>9 months):**
- Dense fibrosis
- Sharp demarcation
- Pleural thickening
- Volume loss`,
      keyTerms: [
        { term: 'UIP', definition: 'Usual interstitial pneumonia; pattern seen in idiopathic pulmonary fibrosis' },
        { term: 'fibroblast focus', definition: 'Cluster of proliferating fibroblasts at leading edge of fibrosis' },
        { term: 'honeycombing', definition: 'Cystic spaces lined by bronchiolar epithelium in end-stage fibrosis' },
        { term: 'NSIP', definition: 'Nonspecific interstitial pneumonia; more uniform pattern than UIP' },
        { term: 'temporal heterogeneity', definition: 'Presence of both old scar and active fibrosis in same biopsy' },
      ],
      analogies: [
        'UIP is like patches of old scars mixed with fresh wounds - different ages of injury in the same area.',
        'A fibroblast focus is like a construction zone at the edge of a developed area - active building happening.',
        'Honeycombing is like converting a house into a beehive - the structure becomes cystic and filled with mucus.',
      ],
      examples: [
        'UIP pattern shows patchy involvement with some areas of normal lung, some scarred, and some honeycomb - never uniform.',
        'Asbestos bodies are golden brown, beaded rods visible under microscopy with iron deposition (Prussian blue positive).',
      ],
    },
    3: {
      level: 3,
      summary: 'Pulmonary fibrosis pathology includes understanding myofibroblast biology, epithelial-mesenchymal transition, extracellular matrix deposition, vascular changes, and the differences between various fibrotic patterns.',
      explanation: `## Cellular and Molecular Mechanisms

### Myofibroblasts in Fibrosis

**Origin:**
- Resident fibroblasts
- Circulating fibrocytes
- Epithelial-mesenchymal transition
- Endothelial-mesenchymal transition

**Characteristics:**
- Alpha-SMA positive
- Contractile properties
- Matrix production
- Apoptosis resistant

**Regulation:**
- TGF-beta primary driver
- Mechanical stress
- Hypoxia
- Inflammatory mediators

### Epithelial-Mesenchymal Transition (EMT)

**Process:**
- Epithelial cells lose markers
- Acquire mesenchymal features
- Migrate and invade
- Produce matrix

**Markers:**
- Loss: E-cadherin, cytokeratins
- Gain: vimentin, alpha-SMA
- Transcription factors: Snail, Slug, Twist

**Controversy:**
- Extent in vivo debated
- Lineage tracing studies
- Reversible process
- Therapeutic target

### Extracellular Matrix

**Components:**
- Collagen types I and III
- Fibronectin
- Elastin
- Proteoglycans
- Hyaluronic acid

**Changes in Fibrosis:**
- Increased deposition
- Altered cross-linking
- Stiffness increased
- Degradation impaired

**Regulation:**
- MMPs (degrade)
- TIMPs (inhibit degradation)
- Lysyl oxidase (cross-link)
- Balance disrupted

### Vascular Changes

**Features:**
- Capillary loss
- Vascular remodeling
- Pulmonary hypertension
- Angiogenesis aberrant

**Mechanisms:**
- Endothelial apoptosis
- VEGF dysregulation
- Hypoxia signaling
- Thrombosis

### Inflammation vs Fibrosis

**Traditional View:**
- Inflammation precedes fibrosis
- Corticosteroids effective
- Anti-inflammatory therapy

**Current Understanding:**
- Fibrosis can occur with minimal inflammation
- IPF poorly responsive to steroids
- Distinct mechanisms
- Targeted therapy needed

### Honeycomb Pathogenesis

**Development:**
- Progressive alveolar destruction
- Bronchiolar metaplasia
- Cystic dilation
- Mucus accumulation
- Irreversible

**Composition:**
- Fibrotic wall
- Bronchiolar epithelium
- Mucus glands
- Inflammatory cells
- Bacterial colonization

### UIP vs NSIP Distinction

| Feature | UIP | NSIP |
|---------|-----|------|
| Pattern | Patchy | Uniform |
| Temporality | Heterogeneous | Homogeneous |
| Honeycomb | Present | Absent |
| Fibroblast foci | Numerous | Few |
| Inflammation | Minimal | Variable |
| Prognosis | Poor | Better |

### Acute Exacerbation

**Definition:**
Acute worsening of underlying fibrosis without identifiable cause.

**Pathology:**
- Diffuse alveolar damage (DAD)
- Hyaline membranes
- Organizing pneumonia
- Overlying fibrosis

**Prognosis:**
- High mortality
- Poor response to treatment
- Mechanical ventilation often futile

### Biomarkers in Tissue

**MMP-7:**
- Elevated in IPF
- Predicts progression
- Tissue expression

**KL-6:**
- Type II cell marker
- Elevated in serum
- Surfactant protein related

**SP-A and SP-D:**
- Surfactant proteins
- Elevated in IPF
- Prognostic value

### Genetics and Histology

**Telomere Syndromes:**
- Short telomeres
- Familial clustering
- Epithelial abnormalities
- Poor prognosis

**Surfactant Mutations:**
- SFTPC, SFTPA2
- Type II cell dysfunction
- Variable patterns
- Early onset possible

**MUC5B Promoter:**
- Common variant
- Increased risk
- Better survival paradox
- Mucus overproduction`,
      keyTerms: [
        { term: 'myofibroblast', definition: 'Cell with features of both fibroblasts and smooth muscle cells; key in fibrosis' },
        { term: 'EMT', definition: 'Epithelial-mesenchymal transition; process where epithelial cells acquire mesenchymal features' },
        { term: 'TGF-beta', definition: 'Transforming growth factor-beta; key cytokine driving fibrosis' },
        { term: 'MMPs', definition: 'Matrix metalloproteinases; enzymes that degrade extracellular matrix' },
        { term: 'telomere', definition: 'Protective DNA sequences at chromosome ends; shortened in some familial IPF' },
      ],
      clinicalNotes: 'The distinction between UIP and NSIP patterns is critical for prognosis and management. UIP pattern on biopsy or CT in the appropriate clinical context is diagnostic of IPF and indicates poor prognosis. NSIP pattern suggests a potentially treatable condition.',
    },
    4: {
      level: 4,
      summary: 'Advanced pulmonary fibrosis pathology covers differential diagnosis of fibrotic lung diseases, drug-induced fibrosis, environmental exposures, and the pathology of combined pulmonary fibrosis and emphysema (CPFE).',
      explanation: `## Differential Diagnosis

### Chronic Hypersensitivity Pneumonitis

**Features:**
- Poorly formed granulomas
- Bronchiolocentric
- Bridging fibrosis
- Mosaic attenuation
- Upper lobe predominance

** vs UIP:**
- Granulomas present
- More inflammation
- Bronchiolocentric
- Better prognosis
- Exposure history

### Connective Tissue Disease-ILD

**Differentiating Features:**
- Pleural involvement
- Nodules
- Vasculitis
- Germinal centers
- Clinical context crucial

**Specific Patterns:**
- RA: UIP/NSIP + nodules
- Scleroderma: NSIP predominant
- PM/DM: NSIP, rapid
- Sjogren: LIP, follicular bronchiolitis

### Drug-Induced Fibrosis

**Common Agents:**
- Bleomycin
- Amiodarone
- Methotrexate
- Nitrofurantoin
- Checkpoint inhibitors

**Patterns:**
- UIP-like
- NSIP
- Organizing pneumonia
- Hypersensitivity-like
- DAD (acute)

### Pneumoconiosis

**Asbestosis:**
- Pleural plaques
- Interstitial fibrosis
- Asbestos bodies
- Lower lobe

**Silicosis:**
- Upper lobe
- Nodules with confluence
- "Eggshell" nodes
- Progressive massive fibrosis

**Coal Worker\'s:**
- Coal macules
- Centrilobular emphysema
- PMF
- Dust deposition

**Berylliosis:**
- Non-caseating granulomas
- CBD (chronic beryllium disease)
- Sarcoid-like
- BeLPT testing

### Sarcoidosis vs Fibrosis

**True Sarcoid Fibrosis:**
- Well-formed granulomas
- Concentric fibrosis
- "Onion-skin" pattern
- Upper lobe
- Hilar nodes

** vs UIP:**
- Granulomas absent in UIP
- Different distribution
- Different prognosis
- Treatment responsive

### Combined Pulmonary Fibrosis and Emphysema (CPFE)

**Features:**
- Upper lobe emphysema
- Lower lobe fibrosis
- Preserved lung volumes
- Severe DLCO reduction
- Pulmonary hypertension common

**Pathology:**
- UIP pattern in lower lobes
- Centrilobular emphysema upper
- Smoking-related
- Worse prognosis than either alone

### Pleuroparenchymal Fibroelastosis (PPFE)

**Features:**
- Upper lobe
- Subpleural
- Dense elastosis
- Retraction
- Spontaneous pneumothorax

**Associations:**
- Bone marrow transplant
- Recurrent aspiration
- Idiopathic
- Poor prognosis

### Acute Fibrinous and Organizing Pneumonia (AFOP)

**Features:**
- Intra-alveolar fibrin
- Organizing pneumonia
- Patchy
- Acute presentation
- Variable prognosis

### Diffuse Alveolar Damage (DAD) with Fibrosis

**Causes:**
- Acute exacerbation IPF
- ARDS survivors
- Drug toxicity
- Infection

**Pattern:**
- Organizing phase DAD
- Progressive fibrosis
- Honeycomb transformation
- Poor outcome

### Histological Mimics

**Atypical UIP:**
- Triggers to consider alternative:
  - Young age
  - Upper lobe
  - Central/subpleural sparing
  - Extensive inflammation
  - Pleural involvement

**Biopsy Challenges:**
- Sampling error
- Small specimens
- Crush artifact
- Honeycomb only

### Special Techniques

**Elastic Stains:**
- Elastica van Gieson
- Verhoeff
- Pleuroparenchymal fibroelastosis
- Vascular changes

**Immunohistochemistry:**
- Alpha-SMA (myofibroblasts)
- Pro-SPC (Type II cells)
- AQP5 (Type I cells)
- TTF-1 (nuclear)
- CD68 (macrophages)

**Molecular Testing:**
- Tissue preservation
- RNA quality
- Mutation analysis
- Research applications`,
      keyTerms: [
        { term: 'CPFE', definition: 'Combined pulmonary fibrosis and emphysema; upper lobe emphysema with lower lobe fibrosis' },
        { term: 'PPFE', definition: 'Pleuroparenchymal fibroelastosis; upper lobe subpleural fibrosis' },
        { term: 'AFOP', definition: 'Acute fibrinous and organizing pneumonia; distinct pattern with fibrin balls' },
        { term: 'pneumoconiosis', definition: 'Lung disease caused by inhalation of inorganic dust' },
        { term: 'CBD', definition: 'Chronic beryllium disease; granulomatous disease from beryllium exposure' },
      ],
      clinicalNotes: 'CPFE is increasingly recognized, especially in smokers. The combination of emphysema and fibrosis leads to preserved lung volumes on PFTs but severely impaired gas exchange. These patients have high risk of pulmonary hypertension and worse outcomes than IPF alone.',
    },
    5: {
      level: 5,
      summary: 'Expert pulmonary fibrosis pathology integrates molecular classification, biomarker development, transcriptomic signatures, the role of senescence, and emerging therapeutic targets in fibrotic lung disease.',
      explanation: `## Molecular Classification

**Transcriptomic Signatures:**
- MUC5B high vs low
- Immune signatures
- Fibroproliferative genes
- Endothelial dysfunction

**Proteomic Analysis:**
- Matrix proteins
- Signaling molecules
- Biomarker discovery
- Tissue microarrays

### Cellular Senescence

**Role in Fibrosis:**
- Alveolar epithelial senescence
- Fibroblast senescence
- SASP factors
- Telomere dysfunction

**Markers:**
- p16 (CDKN2A)
- SA-beta-gal
- gamma-H2AX
- Telomere length

**Therapeutic Implications:**
- Senolytics
- Senomorphics
- Telomerase activators
- Emerging trials

### Biomarker Development

**Tissue Biomarkers:**
- MMP-7
- Osteopontin
- Periostin
- LOXL2

**Prognostic Signatures:**
- Gene expression
- Protein panels
- miRNA profiles
- Combined scores

**Pharmacodynamic:**
- Target engagement
- Response prediction
- Resistance markers
- Trial enrichment

### Single-Cell Analysis

**scRNA-seq Findings:**
- Alveolar epithelial subtypes
- Fibroblast heterogeneity
- Endothelial changes
- Immune cell populations

**Pathway Analysis:**
- TGF-beta signaling
- Wnt pathway
- Hypoxia response
- Matrix remodeling

**Spatial Transcriptomics:**
- Regional heterogeneity
- Fibroblast foci analysis
- Normal vs fibrotic
- Cell-cell communication

### Genetics and Pathology Correlation

**Telomere Biology:**
- TERT, TERC mutations
- Short telomeres
- Epithelial abnormalities
- Treatment implications

**Surfactant Pathway:**
- SFTPC, SFTPA2
- Type II dysfunction
- Protein misfolding
- ER stress

**MUC5B:**
- rs35705950 variant
- Overexpression
- Increased risk
- Paradoxical survival

### Mechanistic Pathways

**TGF-beta Signaling:**
- Canonical (Smad)
- Non-canonical (MAPK)
- Integrin activation
- Targeted therapy

**Wnt/beta-catenin:**
- Epithelial regulation
- Fibroblast activation
- Crosstalk with TGF-beta
- Therapeutic potential

**Integrins:**
- Mechanical signaling
- TGF-beta activation
- Cell-matrix interactions
- Antibody targets

### Emerging Therapies

**Antifibrotic Mechanisms:**
- TGF-beta inhibition
- LOX inhibition
- ROCK inhibition
- PDE4 inhibition

**Immunomodulation:**
- Rituximab (B cells)
- Abatacept (CTLA4)
- Anti-fibrotic antibodies
- Cell therapy

**Regenerative:**
- Stem cells
- Growth factors
- Wnt modulation
- Senolytics

### Interstitial Lung Disease of Unknown Cause

**Unclassifiable ILD:**
- Clinical-pathologic discordance
- Multidisciplinary approach
- Natural history unclear
- Treatment challenges

**Autoimmune Features:**
- Seronegative CTD
- Interstitial pneumonia with autoimmune features (IPAF)
- Histologic clues
- Management implications

### Quantitative Pathology

**Digital Analysis:**
- Whole slide imaging
- Automated quantification
- Pattern recognition
- AI-assisted diagnosis

**Morphometry:**
- Fibrosis extent
- Honeycomb quantification
- Fibroblast focus density
- Reproducibility

**CT-Pathology Correlation:**
- Radiomic signatures
- Machine learning
- Non-invasive biomarkers
- Longitudinal tracking

### Research Frontiers

**Organoid Models:**
- Alveolar organoids
- Fibrosis modeling
- Drug screening
- Personalized medicine

**Animal Models:**
- Bleomycin mouse
- TGF-beta overexpression
- Telomerase deficient
- Humanized models

**Precision Medicine:**
- Genotype-guided therapy
- Biomarker stratification
- Trial design
- Regulatory considerations

### Quality and Standards

**Biopsy Guidelines:**
- Adequate sample size
- Surgical preferred
- Transbronchial limited
- Cryobiopsy emerging

**Multidisciplinary Diagnosis:**
- Radiologist input
- Pathologist expertise
- Clinician correlation
- Consensus approach

**Standardized Reporting:**
- Pattern recognition
- Confidence levels
- Differential diagnosis
- Clinical recommendations`,
      keyTerms: [
        { term: 'senescence-associated secretory phenotype', definition: 'Inflammatory factors released by senescent cells' },
        { term: 'senolytic', definition: 'Drugs that selectively eliminate senescent cells' },
        { term: 'LOXL2', definition: 'Lysyl oxidase-like 2; enzyme involved in collagen cross-linking' },
        { term: 'cryobiopsy', definition: 'Transbronchial lung biopsy using cryoprobe for larger samples' },
        { term: 'IPAF', definition: 'Interstitial pneumonia with autoimmune features' },
      ],
      clinicalNotes: `Key insights in pulmonary fibrosis pathology:

1. **UIP diagnosis:** The UIP pattern is diagnostic of IPF when identified on HRCT or biopsy in the appropriate clinical setting. Biopsy may be avoided with confident radiologic UIP.

2. **Molecular stratification:** MUC5B genotype status is emerging as an important stratification factor - carriers have increased risk but paradoxically better survival once IPF develops.

3. **Senescence:** Cellular senescence of alveolar epithelial cells is increasingly recognized as a key driver of IPF pathogenesis, making senolytics promising therapeutic candidates.

4. **Transbronchial cryobiopsy:** This technique provides larger samples than forceps biopsy with less morbidity than surgical biopsy, changing the diagnostic approach to ILD.

5. **Honeycomb is end-stage:** The presence of honeycombing indicates irreversible architectural distortion. Therapies aim to slow progression before this stage develops.

6. **Acute exacerbation:** Pathologically characterized by DAD superimposed on fibrosis. High mortality and poor response to immunosuppression characterize these events.

7. **CPFE recognition:** Combined emphysema and fibrosis is common in smokers. The preserved lung volumes can be misleading; these patients have severe physiologic impairment.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'raghu-ipf-guidelines',
      type: 'article',
      title: 'Diagnosis of Idiopathic Pulmonary Fibrosis: An Official ATS/ERS/JRS/ALAT Clinical Practice Guideline',
      authors: ['Raghu G', 'Remy-Jardin M', 'Myers JL', 'et al.'],
      source: 'American Journal of Respiratory and Critical Care Medicine',
    },
    {
      id: 'katzenstein-uip',
      type: 'textbook',
      title: 'Surgical Pathology of Non-Neoplastic Lung Disease',
      authors: ['Katzenstein AL'],
      source: 'W.B. Saunders',
    },
  ],

  crossReferences: [
    { targetId: 'condition-pulmonary-fibrosis', targetType: 'condition', relationship: 'related', label: 'Pulmonary Fibrosis' },
    { targetId: 'pathology-copd-pathology', targetType: 'condition', relationship: 'related', label: 'COPD Pathology' },
    { targetId: 'histology-alveolar-structure', targetType: 'structure', relationship: 'related', label: 'Alveolar Structure' },
  ],

  tags: {
    systems: ['respiratory'],
    topics: ['pathology', 'pulmonology', 'interstitial-lung-disease'],
    keywords: ['pulmonary fibrosis', 'UIP', 'IPF', 'interstitial lung disease', 'honeycombing'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pathology'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default pulmonaryFibrosisPathologyContent;
