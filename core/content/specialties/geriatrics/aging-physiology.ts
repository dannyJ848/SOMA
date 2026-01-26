/**
 * Aging Physiology - Comprehensive Educational Content
 *
 * Covers the biology of aging, cellular senescence, organ system changes,
 * and theories of aging across multiple complexity levels.
 */

import { EducationalContent } from '../../types';

export const agingPhysiology: EducationalContent = {
  id: 'concept-aging-physiology',
  type: 'concept',
  name: 'Aging Physiology',
  alternateNames: ['Biology of Aging', 'Senescence', 'Gerontology Basics'],

  levels: {
    1: {
      level: 1,
      summary: 'Aging is the natural process where our bodies slowly change over time, affecting how well different parts work.',
      explanation: `As we get older, our bodies change - just like how a car that has been driven for many years might not run as smoothly as a new one. This is called aging, and it happens to everyone.

**What Changes as We Age?**

Think of your body like a house that has been lived in for many years:

**1. The Skin (The Outer Walls)**
- Gets thinner and less stretchy
- May get wrinkles and age spots
- Doesn't heal from cuts as quickly

**2. The Bones (The Frame)**
- Become less dense and more fragile
- This is why older adults need to be careful about falls

**3. The Heart (The Furnace)**
- Still works, but may not pump as efficiently
- Blood vessels become stiffer

**4. The Brain (The Control Center)**
- May process information a bit slower
- Wisdom and experience still grow!
- Memory might change, but serious memory problems are NOT a normal part of aging

**5. The Muscles (The Movers)**
- Get smaller and weaker if not used
- Exercise can keep them strong!

**6. The Eyes and Ears (The Windows)**
- Vision may become less sharp, especially for close-up reading
- Hearing might decrease, especially for high-pitched sounds

**Why Does Aging Happen?**
Scientists believe aging happens because:
- Our cells can only divide and repair themselves so many times
- Our body's repair systems slow down over time
- Damage builds up in our cells from everyday life

**The Good News**
- Staying active, eating well, and keeping your mind engaged can help you age well
- Many changes of aging can be slowed down with healthy habits
- Getting older brings wisdom, experience, and new perspectives on life`,
      keyTerms: [
        { term: 'aging', definition: 'The natural process of getting older and the changes that happen in our bodies over time' },
        { term: 'cells', definition: 'Tiny building blocks that make up every part of your body' },
        { term: 'organs', definition: 'Parts of your body that do specific jobs, like the heart pumping blood' },
        { term: 'exercise', definition: 'Physical activity that helps keep your body strong and healthy' },
      ],
      analogies: [
        'Aging is like a well-loved book - the pages may yellow and the binding may loosen, but the story inside remains valuable.',
        'Your body is like a garden - with proper care and attention, it can remain beautiful and productive for many years.',
        'Cells are like workers in a factory - over time, they may slow down, but the factory can still produce good work.',
      ],
      examples: [
        'A grandmother who needs reading glasses because her eyes have changed with age.',
        'A grandfather who stays healthy by walking every day and eating vegetables.',
        'An older adult whose hair has turned gray because the cells that make hair color have stopped working.',
      ],
    },
    2: {
      level: 2,
      summary: 'Aging involves progressive changes in cells and organs that reduce functional reserve, though the rate and extent vary significantly between individuals based on genetics, lifestyle, and environment.',
      explanation: `## Understanding the Aging Process

Aging is a complex biological process that affects all organ systems, though not equally or at the same rate. Two key concepts help us understand aging:

### Functional Reserve
This is the extra capacity our organs have beyond what we need for daily life. When we're young, we have lots of reserve - our heart can pump much harder during exercise, our kidneys can filter much more if needed. As we age, this reserve decreases.

### Homeostasis
This is our body's ability to maintain stable internal conditions. Aging makes it harder to maintain homeostasis, especially during stress (illness, surgery, extreme temperatures).

## Changes in Major Organ Systems

### Cardiovascular System
- **Heart**: Walls thicken, maximum heart rate decreases
- **Blood vessels**: Become stiffer (arteriosclerosis), blood pressure often increases
- **Functional impact**: Less exercise tolerance, takes longer to recover from exertion

### Respiratory System
- Lung tissue loses elasticity
- Chest wall becomes stiffer
- Maximum breathing capacity decreases by ~40% by age 80
- Cough reflex weakens, increasing infection risk

### Musculoskeletal System
- **Sarcopenia**: Loss of muscle mass (begins around age 30)
- **Osteoporosis**: Bone density decreases, fracture risk increases
- **Joints**: Cartilage wears down, stiffness increases
- **Height**: May decrease by 1-2 inches due to spinal disc compression

### Nervous System
- Brain volume decreases slightly
- Processing speed slows
- Sleep patterns change (less deep sleep)
- Reflexes slow
- Balance may be affected

### Sensory Changes
- **Vision**: Presbyopia (difficulty focusing close-up), cataracts, glaucoma risk
- **Hearing**: Presbycusis (high-frequency hearing loss)
- **Taste/Smell**: Both diminish, affecting appetite

### Immune System (Immunosenescence)
- Decreased response to vaccines
- Increased susceptibility to infections
- Increased inflammation (sometimes called "inflammaging")
- Higher risk of autoimmune conditions

### Renal System
- Kidney mass decreases
- GFR (filtration rate) decreases ~1 mL/min/year after age 40
- Affects drug clearance - medication doses often need adjustment

### Endocrine System
- Decreased hormone production (testosterone, estrogen, growth hormone)
- Increased insulin resistance
- Thyroid function may change

## Factors Affecting Aging Rate

**Accelerate Aging:**
- Smoking
- Excessive alcohol
- Poor nutrition
- Sedentary lifestyle
- Chronic stress
- Chronic diseases

**Slow Aging:**
- Regular exercise
- Balanced diet
- Social engagement
- Mental stimulation
- Adequate sleep
- Managing chronic conditions`,
      keyTerms: [
        { term: 'functional reserve', definition: 'The extra capacity organs have beyond baseline needs; decreases with age', pronunciation: 'FUNK-shun-al re-ZERV' },
        { term: 'homeostasis', definition: 'The body\'s ability to maintain stable internal conditions', pronunciation: 'ho-mee-oh-STAY-sis' },
        { term: 'sarcopenia', definition: 'Age-related loss of muscle mass and strength', pronunciation: 'sar-ko-PEE-nee-ah' },
        { term: 'osteoporosis', definition: 'Condition where bones become weak and brittle', pronunciation: 'os-tee-oh-puh-ROH-sis' },
        { term: 'presbyopia', definition: 'Age-related loss of ability to focus on near objects', pronunciation: 'prez-bee-OH-pee-ah' },
        { term: 'immunosenescence', definition: 'Age-related decline in immune system function', pronunciation: 'im-yoo-no-se-NES-ens' },
      ],
      analogies: [
        'Functional reserve is like a savings account - you may not need all of it daily, but it\'s there for emergencies. Aging depletes this account.',
        'Aging blood vessels are like old garden hoses - they become stiffer and less flexible over time.',
      ],
    },
    3: {
      level: 3,
      summary: 'Aging biology encompasses cellular senescence, telomere attrition, mitochondrial dysfunction, epigenetic alterations, and stem cell exhaustion, leading to decreased organ function and increased vulnerability to disease.',
      explanation: `## Hallmarks of Aging

Research has identified several interconnected molecular mechanisms that drive aging:

### 1. Genomic Instability
- Accumulation of DNA damage from endogenous and exogenous sources
- UV radiation, reactive oxygen species (ROS), replication errors
- DNA repair mechanisms become less efficient with age
- Results in mutations, chromosomal abnormalities

### 2. Telomere Attrition
- Telomeres: Protective caps on chromosome ends (TTAGGG repeats)
- Shorten with each cell division (end-replication problem)
- Hayflick limit: ~50-70 divisions before critical telomere length
- Short telomeres trigger cellular senescence or apoptosis
- Telomerase can extend telomeres but is suppressed in somatic cells

### 3. Epigenetic Alterations
- DNA methylation patterns change (global hypomethylation, promoter hypermethylation)
- Histone modifications alter chromatin structure
- "Epigenetic clock" (Horvath clock) accurately predicts biological age
- Alterations affect gene expression without changing DNA sequence

### 4. Loss of Proteostasis
- Protein homeostasis (proteostasis) declines
- Decreased chaperone function
- Impaired ubiquitin-proteasome and autophagy-lysosome systems
- Accumulation of misfolded/aggregated proteins
- Link to Alzheimer's (amyloid-β, tau), Parkinson's (α-synuclein)

### 5. Mitochondrial Dysfunction
- Decreased ATP production
- Increased ROS generation
- mtDNA mutations accumulate (lacks histones, repair mechanisms)
- Impaired mitochondrial dynamics (fusion/fission)
- Triggers SASP (senescence-associated secretory phenotype)

### 6. Cellular Senescence
- Permanent cell cycle arrest (G1/S checkpoint)
- Triggered by telomere shortening, DNA damage, oncogene activation
- Senescent cells secrete inflammatory cytokines (SASP):
  - IL-6, IL-8, TNF-α, MMPs, growth factors
- SASP contributes to chronic inflammation and tissue dysfunction
- Beneficial: Tumor suppression, wound healing
- Harmful: Accumulation drives aging phenotypes

### 7. Stem Cell Exhaustion
- Decreased regenerative capacity
- Hematopoietic stem cells show reduced function
- Satellite cells (muscle stem cells) decrease
- Intestinal stem cell turnover affected
- Contributes to impaired tissue repair

### 8. Altered Intercellular Communication
- "Inflammaging": Chronic low-grade inflammation
- Elevated CRP, IL-6, TNF-α in healthy elderly
- Neuroendocrine dysregulation
- Adipose tissue dysfunction
- Gut microbiome changes (dysbiosis)

## Organ System Pathophysiology

### Cardiovascular Aging
| Change | Mechanism | Clinical Impact |
|--------|-----------|-----------------|
| Arterial stiffness | Collagen ↑, elastin ↓, calcification | Systolic hypertension, increased afterload |
| LV hypertrophy | Response to afterload, fibrosis | Diastolic dysfunction, HFpEF risk |
| SA node fibrosis | Pacemaker cell loss | Decreased max HR, sick sinus syndrome |
| Endothelial dysfunction | Decreased NO, increased ROS | Atherosclerosis susceptibility |

Maximum heart rate ≈ 220 - age (rough estimate)

### Renal Aging
- Nephron number decreases (1M → 600K by age 80)
- GFR decline: ~0.75-1.0 mL/min/1.73m²/year after age 40
- Creatinine may appear normal (decreased muscle mass)
- Use CKD-EPI equation accounting for age
- Reduced concentrating ability
- Impaired sodium handling

### Pulmonary Aging
- FEV1 decreases 25-30 mL/year after age 25
- FVC decreases; FEV1/FVC ratio relatively preserved
- Closing volume increases (early airway closure)
- Decreased chest wall compliance
- Blunted response to hypoxia/hypercapnia
- Decreased mucociliary clearance

### Immune Aging (Immunosenescence)
**Innate Immunity:**
- Neutrophil chemotaxis and phagocytosis impaired
- NK cell cytotoxicity decreased
- Macrophage function reduced

**Adaptive Immunity:**
- Thymic involution (begins at puberty)
- Decreased naive T cells
- Accumulation of memory/effector T cells (CMV driven)
- CD4/CD8 ratio changes
- B cell repertoire narrowing
- Decreased response to novel antigens/vaccines`,
      keyTerms: [
        { term: 'telomere', definition: 'Protective DNA sequences (TTAGGG repeats) at chromosome ends that shorten with each cell division', pronunciation: 'TEL-oh-meer' },
        { term: 'cellular senescence', definition: 'Permanent cell cycle arrest with secretion of inflammatory factors (SASP)', pronunciation: 'se-NES-ens' },
        { term: 'SASP', definition: 'Senescence-Associated Secretory Phenotype; inflammatory cytokines secreted by senescent cells' },
        { term: 'proteostasis', definition: 'Protein homeostasis; maintenance of proper protein folding and degradation', pronunciation: 'pro-tee-oh-STAY-sis' },
        { term: 'Hayflick limit', definition: 'Maximum number of cell divisions (~50-70) before replicative senescence occurs' },
        { term: 'inflammaging', definition: 'Chronic low-grade inflammation associated with aging; elevated IL-6, CRP, TNF-α' },
        { term: 'epigenetic clock', definition: 'DNA methylation-based marker that accurately predicts biological age' },
      ],
      clinicalNotes: 'Understanding normal aging changes is essential to distinguish pathology from physiology. A 75-year-old\'s "normal" GFR may be 60-70 mL/min - this affects drug dosing but isn\'t necessarily disease. Vaccinate aggressively given immunosenescence; high-dose flu vaccines recommended for ≥65.',
    },
    4: {
      level: 4,
      summary: 'Advanced understanding of aging integrates cellular signaling pathways (mTOR, AMPK, sirtuins, insulin/IGF-1), interventional geroscience approaches, and the complex interplay between primary aging hallmarks and secondary systemic consequences.',
      explanation: `## Nutrient-Sensing Pathways in Aging

Four major nutrient-sensing pathways regulate aging across species:

### 1. Insulin/IGF-1 Signaling (IIS)
- Canonical pro-aging pathway when active
- Activates PI3K/AKT → inhibits FOXO transcription factors
- FOXO activation (when IIS low) promotes:
  - Autophagy
  - Stress resistance
  - DNA repair
  - Antioxidant defenses
- daf-2 mutations in C. elegans double lifespan
- Ames dwarf mice (GH/IGF-1 deficient): 50% lifespan extension
- Human centenarians: Enriched for IGF-1R variants

### 2. mTOR (Mechanistic Target of Rapamycin)
- mTORC1: Senses nutrients, promotes growth/anabolism
- Activated by amino acids, growth factors, high ATP
- Inhibits autophagy (via ULK1 phosphorylation)
- Promotes protein synthesis (via S6K, 4E-BP1)
- Rapamycin (mTOR inhibitor):
  - Extends lifespan in mice (~25%)
  - Late-life treatment still effective
  - Side effects limit human use (immunosuppression, diabetes)
- Rapalogs (everolimus) being studied in human aging trials

### 3. AMPK (AMP-Activated Protein Kinase)
- Master metabolic regulator; activated by low energy (high AMP/ATP)
- Promotes catabolic pathways, autophagy
- Inhibits mTORC1
- Activates FOXO, PGC-1α
- Metformin activates AMPK (indirectly)
- TAME trial: Testing metformin for healthy aging in humans

### 4. Sirtuins (SIRT1-7)
- NAD+-dependent deacetylases
- SIRT1: Nuclear; deacetylates FOXO, PGC-1α, p53
- SIRT3: Mitochondrial; regulates oxidative phosphorylation
- NAD+ declines with age; NMN and NR supplements being studied
- Resveratrol: Putative SIRT1 activator (controversial efficacy)

## Interventional Geroscience

### Caloric Restriction (CR)
- Most robust longevity intervention across species
- 20-40% reduction extends lifespan 30-50% in rodents
- CALERIE trial: CR in healthy humans showed:
  - Improved cardiometabolic markers
  - Decreased thyroid hormones
  - Lower oxidative damage markers
- Mechanism: Multiple pathways (↓IIS, ↓mTOR, ↑AMPK, ↑sirtuins)

### Senolytics
Target senescent cell accumulation:

| Agent | Target | Status |
|-------|--------|--------|
| Dasatinib + Quercetin (D+Q) | Tyrosine kinases + BCL-2 family | Phase 2 trials (IPF, diabetic kidney disease) |
| Navitoclax | BCL-2/BCL-xL | Thrombocytopenia limits use |
| Fisetin | Multiple | Phase 2 trials ongoing |
| UBX0101 | MDM2/p53 | Failed Phase 2 for OA |

Early trials show:
- Improved physical function in IPF
- Reduced senescent cell burden
- Decreased SASP markers

### Parabiosis and Young Blood Factors
- Heterochronic parabiosis: Shared circulation between young/old mice
- Old mice show: Improved muscle regeneration, neurogenesis, cardiac function
- GDF11: Initially proposed as rejuvenating factor (controversial)
- TIMP2: May mediate some cognitive benefits
- Young plasma transfusion trials: Early stage, mixed results

### Epigenetic Reprogramming
- Yamanaka factors (Oct4, Sox2, Klf4, c-Myc) can reverse cellular age
- Partial reprogramming in mice (cyclic OSKM):
  - Extends lifespan in progeria models
  - Improves regeneration in wild-type mice
  - Doesn't cause teratomas (unlike full reprogramming)
- In vivo reprogramming: Active research area
- Potential for tissue-specific rejuvenation

## Systems Biology of Aging

### Aging Clocks
| Clock Type | Basis | Accuracy (years) | Applications |
|------------|-------|------------------|--------------|
| Horvath DNA methylation | 353 CpG sites | ~3.6 | Research standard |
| GrimAge | Methylation + plasma proteins | ~2.0 | Mortality prediction |
| PhenoAge | Phenotypic markers | - | Clinical relevance |
| Telomere length | Telomere attrition | High variance | Limited |
| Transcriptomic | Gene expression | Tissue-specific | Research |

Epigenetic clocks predict:
- All-cause mortality
- Cancer incidence
- Cognitive decline
- Frailty

### Organ Crosstalk in Aging
- **Gut-Brain Axis**: Microbiome changes affect neuroinflammation, cognition
- **Adipose-Liver**: Senescent fat releases factors causing hepatic dysfunction
- **Bone-Muscle**: Myokines and osteokines bidirectional signaling
- **Immune-Tissue**: Inflammaging affects all organ systems

### Resilience and Allostatic Load
- Allostatic load: Cumulative physiological wear from stress
- Measured by composite of:
  - Cortisol, catecholamines
  - Inflammatory markers (CRP, IL-6)
  - Metabolic markers (HbA1c, waist-hip ratio)
  - Cardiovascular markers (BP, cholesterol)
- High allostatic load predicts:
  - Cognitive decline
  - Functional impairment
  - Mortality`,
      keyTerms: [
        { term: 'mTOR', definition: 'Mechanistic Target of Rapamycin; master regulator of cell growth whose inhibition extends lifespan', pronunciation: 'em-TOR' },
        { term: 'AMPK', definition: 'AMP-Activated Protein Kinase; energy sensor that promotes longevity pathways when activated', pronunciation: 'amp-K' },
        { term: 'sirtuins', definition: 'NAD+-dependent deacetylases (SIRT1-7) involved in stress resistance and longevity' },
        { term: 'senolytics', definition: 'Drugs that selectively eliminate senescent cells; emerging aging intervention', pronunciation: 'se-no-LIT-iks' },
        { term: 'heterochronic parabiosis', definition: 'Experimental technique sharing circulation between young and old animals', pronunciation: 'het-er-o-KRON-ik par-a-by-OH-sis' },
        { term: 'allostatic load', definition: 'Cumulative physiological burden from chronic stress; predicts health outcomes' },
        { term: 'Yamanaka factors', definition: 'Transcription factors (OSKM) that can reprogram cells and potentially reverse aging' },
      ],
      clinicalNotes: 'Metformin remains the most practical potential anti-aging intervention currently available. The TAME trial will provide key evidence. For now, optimizing metabolic health, maintaining muscle mass, and preventing chronic disease are evidence-based approaches. Senolytics are promising but not ready for clinical use outside trials.',
    },
    5: {
      level: 5,
      summary: 'Contemporary geroscience integrates multi-omic aging signatures, clinical translational pipelines for geroprotectors, and systems-level approaches to understand the heterogeneity of aging trajectories and develop precision interventions.',
      explanation: `## Multi-Omic Aging Signatures

### Integrated Aging Clocks
Second-generation clocks combine multiple data types:

**GrimAge 2.0:**
- DNA methylation-based surrogates for plasma proteins
- Proteins include: Cystatin C, GDF15, PAI-1, leptin, ADM, β2M, TIMP-1
- Outperforms first-generation clocks for mortality prediction
- Acceleration predicts: CHD, T2DM, cancer, lung function decline

**Proteomic Aging:**
- SomaScan: 4,000+ proteins
- Key aging proteins: GDF15, NT-proBNP, Cystatin C
- Organ-specific aging clocks possible (brain, liver, kidney)
- Blood-brain barrier permeability increases detectability of brain-derived proteins

**Metabolomic Signatures:**
- NAD+ metabolome declines (NAD+, NMN, NR)
- Acylcarnitines reflect mitochondrial dysfunction
- Branched-chain amino acids predict insulin resistance
- Kynurenine/tryptophan ratio reflects inflammation

**Transcriptomic:**
- Tissue-specific aging signatures
- Blood transcriptome: Immune cell composition shifts
- Single-cell RNA-seq reveals cell-type specific changes
- Tabula Muris Senis: Comprehensive mouse aging atlas

### Clonal Hematopoiesis of Indeterminate Potential (CHIP)
- Somatic mutations in hematopoietic stem cells
- Common mutations: DNMT3A, TET2, ASXL1, JAK2
- Prevalence: ~10% at age 70, >20% at age 80
- Associated with:
  - 2-4x increased cardiovascular mortality
  - Increased all-cause mortality
  - Risk of hematologic malignancy (~0.5-1%/year)
- TET2 mutations: Associated with worse atherosclerosis, inflammaging
- Potential therapeutic target: IL-1β inhibition (canakinumab in CANTOS)

## Clinical Translation of Geroprotectors

### TAME (Targeting Aging with Metformin) Trial
- Phase 3 trial in 3,000 adults aged 65-79
- Primary endpoint: Composite of CVD, cancer, dementia, mortality
- First trial using "aging" as indication
- Will establish regulatory pathway for aging interventions
- Results expected ~2026

### Current Evidence for Interventions

| Intervention | Evidence Level | Effect | Considerations |
|--------------|----------------|--------|----------------|
| Exercise | High (RCTs) | Strongest evidence for healthy aging | Aerobic + resistance optimal |
| CR/Time-restricted eating | Moderate | Metabolic benefits; lifespan effect unclear in humans | Adherence challenging |
| Metformin | Moderate (observational + mechanistic) | Decreased cancer, CVD, dementia in diabetics | TAME trial pending |
| Rapamycin/Rapalogs | Emerging | Immune function improvement (TORC1 inhibition) | Side effect profile limits use |
| Senolytics (D+Q) | Phase 2 | Proof-of-concept in IPF, DKD | Early stage; long-term safety unknown |
| NAD+ precursors (NR, NMN) | Phase 2 | NAD+ levels increase; clinical benefits unclear | Bioavailability issues |

### Precision Geroscience Framework

**Biological Age Stratification:**
1. Measure epigenetic age (GrimAge) + telomere length + CHIP
2. Identify accelerated aging phenotype
3. Target specific hallmarks:
   - High inflammatory burden → Anti-inflammatory interventions
   - Mitochondrial dysfunction → NAD+ precursors, exercise
   - Senescent cell accumulation → Senolytics (trials)
   - Metabolic dysregulation → Metformin, lifestyle

**Organ-Specific Aging:**
- Individuals age at different rates in different organs
- Brain age > chronological age: Cognitive decline risk
- Heart age > chronological age: CV event risk
- Discordance between organs common
- Implications for targeted intervention

## Special Considerations in Geriatric Care

### Physiologic Changes Affecting Drug Therapy

| Pharmacokinetic Parameter | Age Effect | Clinical Implication |
|---------------------------|------------|---------------------|
| GI absorption | Minimal change | Generally preserved |
| Body composition | ↑ fat, ↓ water, ↓ lean mass | ↑ Vd lipophilic drugs; ↓ Vd hydrophilic drugs |
| Hepatic metabolism | ↓ CYP activity (variable) | Phase I > Phase II affected |
| Renal clearance | ↓ GFR (~1 mL/min/year after 40) | Dose adjustment required |
| Protein binding | ↓ albumin | ↑ free fraction; clinical significance limited |

**Pharmacodynamic Changes:**
- Increased sensitivity to CNS-active drugs
- Impaired baroreceptor reflexes (orthostatic hypotension)
- Decreased β-receptor responsiveness
- Altered thermoregulation

### Geriatric Assessment Integration

**Comprehensive Geriatric Assessment (CGA):**
- Medical: Comorbidities, medications, nutrition
- Functional: ADLs, IADLs, mobility
- Psychological: Cognition, mood
- Social: Support systems, living situation
- Predicts outcomes better than chronological age

**Frailty Index as Aging Biomarker:**
- Deficit accumulation model (Rockwood)
- 30-70 deficits across domains
- FI >0.25: Frail (increased mortality, hospitalization)
- Biological age correlates with FI better than chronological age
- Can track response to interventions

## Future Directions

### Rejuvenation Biology
- In vivo reprogramming advancing to larger animal models
- Tissue-specific delivery of Yamanaka factors
- Small molecule alternatives to genetic reprogramming
- Partial reprogramming: Reset age without dedifferentiation

### Systems Pharmacology for Aging
- Network-based drug discovery
- Targeting multiple aging hallmarks simultaneously
- Drug combinations (geroprotector cocktails)
- AI/ML for identifying aging interventions

### Longevity Medicine Practice
- Emerging specialty combining:
  - Biological age measurement
  - Geroprotector prescription
  - Lifestyle optimization
  - Longitudinal tracking
- Ethical considerations: Access, equity, medicalization of aging`,
      keyTerms: [
        { term: 'GrimAge', definition: 'Second-generation epigenetic clock incorporating protein surrogates; strongest mortality predictor' },
        { term: 'CHIP', definition: 'Clonal Hematopoiesis of Indeterminate Potential; age-related somatic mutations linked to CV disease', pronunciation: 'chip' },
        { term: 'TAME trial', definition: 'Targeting Aging with Metformin; first FDA-approved trial using aging as an indication' },
        { term: 'geroprotector', definition: 'Agent that targets fundamental aging processes rather than specific diseases', pronunciation: 'JER-oh-pro-TEK-tor' },
        { term: 'deficit accumulation', definition: 'Model of aging where frailty results from accumulation of health deficits across multiple domains' },
        { term: 'organ-specific aging', definition: 'Concept that different organs age at different rates within an individual' },
        { term: 'longevity medicine', definition: 'Emerging specialty focused on extending healthspan through interventions targeting aging biology' },
      ],
      clinicalNotes: `Clinical integration of geroscience:

1. **Biological age assessment**: Consider GrimAge or similar for research/motivated patients; interpret cautiously
2. **CHIP screening**: Emerging role; if positive, aggressive CV risk management; avoid JAK inhibitors if JAK2+
3. **Geroprotector prescribing**: Metformin reasonable in prediabetes/metabolic syndrome with aging indication; rapamycin/senolytics remain investigational
4. **Exercise prescription**: Strongest evidence-based intervention; specific regimens (resistance training crucial for sarcopenia)
5. **Comprehensive geriatric assessment**: Gold standard for clinical aging assessment; use frailty index for risk stratification
6. **Polypharmacy**: Every aging patient needs medication reconciliation; deprescribing is a key intervention`,
    },
  },

  media: [
    {
      id: 'hallmarks-aging-diagram',
      type: 'diagram',
      filename: 'hallmarks-of-aging.svg',
      title: 'Hallmarks of Aging',
      description: 'Nine interconnected hallmarks of aging with primary, antagonistic, and integrative categories',
    },
    {
      id: 'nutrient-sensing-pathways',
      type: 'diagram',
      filename: 'nutrient-sensing-aging.svg',
      title: 'Nutrient Sensing Pathways in Aging',
      description: 'mTOR, AMPK, IIS, and sirtuin pathway interactions and their effects on longevity',
    },
  ],

  citations: [
    {
      id: 'lopez-otin-hallmarks',
      type: 'article',
      title: 'Hallmarks of Aging: An Expanding Universe',
      authors: ['López-Otín C', 'Blasco MA', 'Partridge L', 'Serrano M', 'Kroemer G'],
      source: 'Cell',
      url: 'https://doi.org/10.1016/j.cell.2022.11.001',
    },
    {
      id: 'kennedy-geroscience',
      type: 'article',
      title: 'Geroscience: Linking Aging to Chronic Disease',
      authors: ['Kennedy BK', 'Berger SL', 'Brunet A', 'et al.'],
      source: 'Cell',
    },
    {
      id: 'hazzards-geriatric',
      type: 'textbook',
      title: 'Hazzard\'s Geriatric Medicine and Gerontology',
      source: 'McGraw-Hill',
      chapter: 'Biology of Aging',
    },
  ],

  crossReferences: [
    { targetId: 'concept-frailty-sarcopenia', targetType: 'concept', relationship: 'related', label: 'Frailty and Sarcopenia' },
    { targetId: 'concept-geriatric-syndromes', targetType: 'concept', relationship: 'related', label: 'Geriatric Syndromes' },
    { targetId: 'topic-cellular-biology', targetType: 'topic', relationship: 'related', label: 'Cellular Biology' },
    { targetId: 'concept-polypharmacy', targetType: 'concept', relationship: 'related', label: 'Polypharmacy' },
  ],

  tags: {
    systems: ['multi-system', 'cellular'],
    topics: ['geriatrics', 'gerontology', 'physiology', 'aging biology'],
    keywords: ['aging', 'senescence', 'longevity', 'geroscience', 'healthspan', 'frailty'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default agingPhysiology;
