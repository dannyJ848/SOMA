/**
 * Psoriasis - Comprehensive Educational Content
 *
 * Covers pathophysiology, clinical variants, and evidence-based management
 * of psoriasis and psoriatic disease.
 */

import { EducationalContent } from '../../types';

export const psoriasisContent: EducationalContent = {
  id: 'dermatology-psoriasis',
  type: 'condition',
  name: 'Psoriasis',
  alternateNames: ['Psoriatic Disease', 'Plaque Psoriasis'],
  hpoId: 'HP:0003765',

  levels: {
    1: {
      level: 1,
      summary: 'Psoriasis is a condition that causes thick, red, scaly patches on the skin - it happens when skin cells grow too fast and pile up.',
      explanation: `Psoriasis is a long-lasting skin condition that causes patches of thick, red skin covered with silvery scales. It is not contagious - you cannot catch it from someone else.

**What Happens in Psoriasis?**
Normally, skin cells grow deep in the skin and slowly rise to the surface over about a month. With psoriasis, this process happens in just a few days. The cells pile up on the surface, forming the thick, scaly patches.

**What Does It Look Like?**
- Raised, red patches covered with silvery-white scales
- Dry skin that may crack and bleed
- Itching, burning, or soreness
- Thick, pitted fingernails
- Swollen and stiff joints (in some people)

**Where Does It Usually Appear?**
- Elbows and knees (most common)
- Scalp
- Lower back
- Fingernails and toenails
- Face and palms/soles (less common)

**What Causes Psoriasis?**
Psoriasis happens when the immune system gets confused and attacks healthy skin cells by mistake. Things that can trigger it include:
- Stress
- Skin injuries (cuts, scrapes, sunburns)
- Infections (like strep throat)
- Cold, dry weather
- Some medications

**Treatment Options:**
- Moisturizers to keep skin soft
- Medicated creams and ointments
- Light therapy (special UV light)
- Pills or shots for severe cases

**Important to Know:**
Psoriasis comes and goes - it may flare up and then get better. While there is no cure, many treatments can help control it and keep skin clearer.`,
      keyTerms: [
        { term: 'psoriasis', definition: 'A skin condition that causes thick, scaly patches' },
        { term: 'plaque', definition: 'A raised, flat patch on the skin' },
        { term: 'scales', definition: 'Dry, silvery-white flakes that form on psoriasis patches' },
        { term: 'flare', definition: 'When psoriasis suddenly gets worse' },
        { term: 'immune system', definition: 'The body\'s defense system that fights germs and disease' },
      ],
      analogies: [
        'In psoriasis, skin cells are like cars speeding through a traffic light - they pile up because they are moving too fast.',
        'The scales on psoriasis are like leaves piling up faster than you can rake them.',
        'The immune system in psoriasis is like a fire alarm that goes off when there is no fire.',
      ],
      examples: [
        'A person might notice thick, scaly patches on their elbows that get worse during winter.',
        'After having strep throat, a child might develop many small red spots on their body (guttate psoriasis).',
      ],
    },
    2: {
      level: 2,
      summary: 'Psoriasis is a chronic, immune-mediated inflammatory disease characterized by epidermal hyperproliferation and distinct clinical variants, often associated with systemic comorbidities including psoriatic arthritis.',
      explanation: `Psoriasis affects approximately 2-3% of the population worldwide and is recognized as a systemic inflammatory disease, not just a skin condition.

## Clinical Variants

**Plaque Psoriasis (Psoriasis Vulgaris)**:
- Most common type (80-90%)
- Well-demarcated, erythematous plaques with silvery scale
- Symmetrical distribution
- Predilection: Elbows, knees, scalp, lumbosacral area

**Guttate Psoriasis**:
- Small (0.5-1.5 cm), drop-like papules
- Sudden onset, often after streptococcal infection
- Common in children and young adults
- May resolve spontaneously or progress to plaque psoriasis

**Inverse (Flexural) Psoriasis**:
- Affects skin folds: Axillae, groin, intergluteal cleft, inframammary
- Minimal scale due to moisture
- Erythematous, shiny plaques

**Pustular Psoriasis**:
- Sterile pustules
- Localized (palmoplantar) or generalized (von Zumbusch)
- Generalized form is a medical emergency

**Erythrodermic Psoriasis**:
- Generalized erythema covering >90% BSA
- Medical emergency (hypothermia, infection risk, high-output cardiac failure)
- Often triggered by medication withdrawal

## Classic Clinical Signs

- **Auspitz sign**: Pinpoint bleeding when scale is removed
- **Koebner phenomenon**: Psoriasis appearing at sites of skin trauma
- **Woronoff ring**: Hypopigmented halo around clearing plaques
- **Nail changes**: Pitting, onycholysis, oil drop spots, subungual hyperkeratosis

## Psoriatic Arthritis (PsA)

Affects ~30% of psoriasis patients:
- May precede, accompany, or follow skin disease
- Patterns: Oligoarticular, polyarticular, distal interphalangeal, spondylitic, arthritis mutilans
- Screen with PEST questionnaire

## Pathophysiology Overview

**Key Immune Players**:
- Dendritic cells produce IL-12 and IL-23
- Th17 cells produce IL-17A, IL-17F, IL-22
- Th1 cells produce IFN-gamma, TNF-alpha

**Result**:
- Keratinocyte hyperproliferation
- Epidermal turnover: 3-5 days vs normal 28 days
- Angiogenesis and inflammation

## Treatment Approach

**Mild (Limited BSA <5%)**:
- Topical corticosteroids
- Topical vitamin D analogues (calcipotriene)
- Combination products

**Moderate-Severe**:
- Phototherapy (NB-UVB)
- Systemic agents: Methotrexate, cyclosporine, apremilast
- Biologics: TNF inhibitors, IL-17 inhibitors, IL-23 inhibitors

## Comorbidities

- Psoriatic arthritis
- Cardiovascular disease
- Metabolic syndrome
- Inflammatory bowel disease
- Depression/anxiety`,
      keyTerms: [
        { term: 'plaque psoriasis', definition: 'The most common form with thick, scaly patches', pronunciation: 'plak soh-RY-ah-sis' },
        { term: 'guttate', definition: 'Drop-shaped small lesions, often triggered by strep infection', pronunciation: 'GUH-tate' },
        { term: 'Auspitz sign', definition: 'Pinpoint bleeding when psoriasis scale is removed', pronunciation: 'OWS-pitz' },
        { term: 'Koebner phenomenon', definition: 'Development of psoriasis at sites of skin injury', pronunciation: 'KEB-ner' },
        { term: 'psoriatic arthritis', definition: 'Inflammatory joint disease occurring in ~30% of psoriasis patients' },
        { term: 'IL-17', definition: 'Key inflammatory cytokine driving psoriasis pathophysiology' },
      ],
      examples: [
        'A 25-year-old develops scattered small red spots 2 weeks after strep throat - guttate psoriasis.',
        'A patient notices their psoriasis flares wherever they scratch their skin - Koebner phenomenon.',
      ],
    },
    3: {
      level: 3,
      summary: 'Psoriasis pathogenesis involves IL-23/IL-17 axis activation, genetic susceptibility (HLA-Cw6), and environmental triggers, with treatment targeting specific cytokine pathways and addressing systemic inflammatory burden.',
      explanation: `## Immunopathogenesis

### The IL-23/IL-17 Axis

**Initiation Phase**:
- Trigger (trauma, infection) activates keratinocytes and dendritic cells
- Plasmacytoid DCs produce IFN-alpha
- Myeloid DCs produce IL-12 and IL-23
- LL-37 (cathelicidin) complexes with self-DNA/RNA, activating TLR7/9

**Amplification Phase**:
- IL-23 promotes Th17 differentiation and survival
- Th17 cells produce IL-17A, IL-17F, IL-22
- IL-17 acts on keratinocytes:
  - Induces chemokines (CXCL1, CXCL8) recruiting neutrophils
  - Stimulates antimicrobial peptide production
  - Promotes proliferation

**Keratinocyte Response**:
- Hyperproliferation (Ki67+ cells throughout epidermis)
- Abnormal differentiation (parakeratosis)
- Antimicrobial peptide overexpression (S100A7, S100A8/9, defensins)

### Histopathology

**Epidermal Changes**:
- Acanthosis with regular elongation of rete ridges
- Parakeratosis (nuclei retained in stratum corneum)
- Loss of granular layer
- Munro microabscesses (neutrophils in stratum corneum)
- Kogoj pustules (spongiform pustules in spinous layer)

**Dermal Changes**:
- Dilated, tortuous capillaries in dermal papillae
- Perivascular lymphocytic infiltrate
- Suprapapillary thinning

### Genetics

**HLA Associations**:
- HLA-Cw6 (PSORS1): Strongest association
  - 10x increased risk
  - Associated with early onset, guttate psoriasis
- HLA-B27: Associated with psoriatic arthritis

**Non-HLA Genes**:
- IL23R, IL12B: IL-23 pathway
- TNFAIP3, TNIP1: NF-kB regulation
- CARD14: Keratinocyte NF-kB signaling
- LCE genes: Late cornified envelope proteins

## Clinical Assessment

### Severity Scoring

**BSA (Body Surface Area)**:
- Patient's palm = 1% BSA
- <3%: Mild; 3-10%: Moderate; >10%: Severe

**PASI (Psoriasis Area and Severity Index)**:
- Assesses erythema, induration, scale in 4 body regions
- Weighted by area
- PASI 75 = 75% improvement (efficacy benchmark)

**DLQI (Dermatology Life Quality Index)**:
- 10-question patient-reported outcome
- >10: Severe impact on quality of life

### Treatment Goals

- PASI 75 or PASI 90 (increasingly the standard)
- BSA <3% or <1%
- DLQI <5 or 0/1

## Treatment Details

### Topical Therapy

**Corticosteroids**:
| Potency | Example | Use |
|---------|---------|-----|
| Super-high | Clobetasol | Thick plaques, palms/soles (short-term) |
| High | Betamethasone dipropionate | Body plaques |
| Medium | Triamcinolone | Maintenance, larger areas |
| Low | Hydrocortisone | Face, folds |

**Vitamin D Analogues**:
- Calcipotriene, calcitriol
- Reduce proliferation, promote differentiation
- Steroid-sparing

**Combination Products**:
- Calcipotriene/betamethasone (Enstilar foam, Taclonex)
- More effective than either alone

**Other Topicals**:
- Tazarotene (retinoid)
- Coal tar
- Anthralin
- Roflumilast (PDE4 inhibitor foam)
- Tapinarof (AhR agonist)

### Phototherapy

**NB-UVB (311-313 nm)**:
- First-line phototherapy
- 2-3x weekly
- Works via T-cell apoptosis, shift from Th1/Th17
- Safe in pregnancy

**PUVA**:
- Psoralen + UVA
- More effective but more carcinogenic
- Reserved for refractory cases

**Excimer Laser (308 nm)**:
- Targeted UVB for limited plaques

### Systemic Therapy

**Conventional Agents**:
| Agent | Mechanism | Key Monitoring |
|-------|-----------|----------------|
| Methotrexate | Antifolate, anti-inflammatory | LFTs, CBC, pregnancy test |
| Cyclosporine | Calcineurin inhibitor | BP, Cr, K+ |
| Acitretin | Retinoid | Lipids, LFTs, teratogenic for 3 years |
| Apremilast | PDE4 inhibitor | Weight, mood |

### Biologics

**TNF Inhibitors**:
- Etanercept, infliximab, adalimumab, certolizumab
- PASI 75 rates: 50-70%
- Risk: Infections, reactivate latent TB

**IL-17 Inhibitors**:
- Secukinumab, ixekizumab, brodalumab
- PASI 90 rates: 60-70%
- Brodalumab also blocks IL-17RA
- Risk: Candida infections, IBD exacerbation

**IL-23 Inhibitors**:
- Guselkumab, tildrakizumab, risankizumab
- Target p19 subunit (IL-23 specific)
- PASI 90 rates: 70%+
- Excellent safety profile
- Less frequent dosing (q8-12 weeks after loading)

**IL-12/23 Inhibitor**:
- Ustekinumab (anti-p40)
- Blocks both IL-12 and IL-23
- Dosed by weight`,
      keyTerms: [
        { term: 'IL-23/IL-17 axis', definition: 'Central immunologic pathway driving psoriasis pathogenesis' },
        { term: 'PSORS1', definition: 'Major psoriasis susceptibility locus containing HLA-Cw6' },
        { term: 'PASI', definition: 'Psoriasis Area and Severity Index - standard clinical measure' },
        { term: 'Munro microabscess', definition: 'Collection of neutrophils in stratum corneum, characteristic of psoriasis' },
        { term: 'NB-UVB', definition: 'Narrowband ultraviolet B (311-313nm) - first-line phototherapy' },
        { term: 'p19', definition: 'Specific subunit of IL-23 targeted by newer biologics (guselkumab, risankizumab)' },
      ],
      clinicalNotes: 'HLA-Cw6 positivity predicts better response to ustekinumab and is associated with guttate phenotype. IL-17 inhibitors can worsen IBD - avoid in patients with IBD history. IL-23 inhibitors have emerged as highly effective with excellent safety and convenient dosing. Screen all moderate-severe psoriasis patients for psoriatic arthritis using PEST or similar tool.',
    },
    4: {
      level: 4,
      summary: 'Advanced psoriasis management requires integration of precision medicine approaches, treatment optimization strategies, management of recalcitrant disease, and comprehensive cardiovascular risk reduction.',
      explanation: `## Advanced Pathophysiology

### Tissue-Resident Memory T Cells

**TRM in Psoriasis**:
- CD8+ CD103+ TRM cells persist in resolved plaques
- Produce IL-17A upon restimulation
- Explain recurrence at same locations
- Potential target for "true" remission

**Implications**:
- Complete clearance may not eliminate disease memory
- Long-term IL-23 blockade may deplete pathogenic TRM
- Emerging goal: Disease modification vs suppression

### Systemic Inflammation

**"Psoriatic March" Concept**:
- Chronic skin inflammation → systemic cytokine release
- TNF, IL-6, IL-1 promote:
  - Insulin resistance
  - Endothelial dysfunction
  - Atherosclerosis

**Vascular Inflammation**:
- 18F-FDG PET shows aortic inflammation
- Correlates with skin disease severity
- Improves with biologic therapy

### Genetic-Phenotype Correlations

| Genetic Factor | Phenotype Association |
|----------------|----------------------|
| HLA-Cw6+ | Early onset, guttate, better to ustekinumab |
| HLA-Cw6- | Late onset, may favor IL-17 inhibition |
| IL23R variants | Response to IL-23 inhibitors |
| CARD14 mutations | Generalized pustular psoriasis |
| IL36RN mutations | Generalized pustular psoriasis |

## Treatment Optimization

### Biologic Selection Algorithm

**First-Line Biologic Considerations**:
| Clinical Scenario | Preferred Agent |
|-------------------|-----------------|
| Psoriasis + PsA | TNF inhibitor or IL-17 inhibitor |
| Psoriasis + IBD | TNF inhibitor (not IL-17) |
| Psoriasis + MS | Not TNF inhibitor |
| Severe plaque, no comorbidities | IL-23 inhibitor (efficacy + safety) |
| Need rapid response | IL-17 inhibitor |

**Response Predictors**:
- Higher baseline PASI → Greater absolute improvement
- Obesity → Reduced response (consider weight-based dosing)
- Prior biologic failure → Reduced response to subsequent agents

### Managing Biologic Failure

**Primary Non-Response** (no improvement by week 12-16):
- Confirm diagnosis
- Assess adherence
- Check for neutralizing antibodies (if available)
- Switch mechanism of action

**Secondary Loss of Response**:
- Often due to anti-drug antibodies
- Options:
  - Increase dose/frequency
  - Add methotrexate (reduces immunogenicity)
  - Switch agents (within or outside class)

### Special Situations

**Generalized Pustular Psoriasis (GPP)**:
- Medical emergency
- Pathogenesis: IL-36 pathway (distinct from plaque)
- IL36RN mutations (DITRA)
- Treatment: Spesolimab (anti-IL-36R) approved for flares
- Cyclosporine, acitretin, infliximab for acute management

**Erythrodermic Psoriasis**:
- Hospitalize if unstable
- Fluid/electrolyte management
- Temperature regulation
- Cyclosporine often first-line
- Biologics (infliximab rapid onset)
- Avoid: Methotrexate (hepatotoxicity risk higher)

**Palmoplantar Psoriasis**:
- Disproportionate impact on function/QOL
- Often resistant to therapy
- Options: Potent topicals, PUVA, acitretin, biologics
- IL-23 inhibitors show good efficacy

**Scalp Psoriasis**:
- Challenging to treat
- Foam and solution vehicles preferred
- Clobetasol solution/foam
- Calcipotriene/betamethasone foam
- Biologics if extensive or refractory

## Psoriatic Arthritis Management

### Classification and Assessment

**CASPAR Criteria** (Classification):
- Inflammatory articular disease plus 3+ points from:
  - Psoriasis (current 2, history 1)
  - Nail changes (1)
  - Dactylitis (1)
  - Negative RF (1)
  - Juxta-articular bone formation on X-ray (1)

**Disease Domains**:
1. Peripheral arthritis
2. Axial disease
3. Enthesitis
4. Dactylitis
5. Skin disease
6. Nail disease

### Treatment by Domain

**Peripheral Arthritis**:
- NSAIDs (mild)
- DMARDs: Methotrexate, leflunomide (moderate)
- Biologics: TNF-i, IL-17i, IL-23i* (severe)

*IL-23 inhibitors less effective for axial disease

**Axial Disease**:
- NSAIDs first-line
- TNF inhibitors
- IL-17 inhibitors
- NOT methotrexate or IL-23 inhibitors

**Enthesitis/Dactylitis**:
- NSAIDs
- Local steroid injection
- IL-17 inhibitors particularly effective

## Cardiovascular Risk Management

### Evidence for Increased CV Risk

- Severe psoriasis: ~50% increased MI risk
- Psoriasis = independent CV risk factor
- Similar to diabetes in some risk models

### Management Approach

**Screening**:
- Lipids, glucose, BP, BMI
- Consider 10-year ASCVD risk calculation
- Psoriasis may warrant earlier/more aggressive treatment

**Lifestyle**:
- Smoking cessation critical
- Weight loss (improves psoriasis AND CV risk)
- Exercise

**Does Treating Psoriasis Reduce CV Risk?**:
- Observational data suggest biologics may reduce MI, stroke
- Prospective trials (VIP-S, CARIMA) show improved vascular biomarkers
- Definitively reducing CV events not yet proven`,
      keyTerms: [
        { term: 'tissue-resident memory T cell', definition: 'Non-circulating T cells that persist in skin and drive local disease recurrence' },
        { term: 'spesolimab', definition: 'Anti-IL-36 receptor antibody approved for generalized pustular psoriasis flares', pronunciation: 'speh-SOL-ih-mab' },
        { term: 'CASPAR criteria', definition: 'Classification criteria for psoriatic arthritis' },
        { term: 'psoriatic march', definition: 'Theory that chronic skin inflammation drives systemic comorbidities' },
        { term: 'anti-drug antibodies', definition: 'Immune response to biologic medications that can reduce efficacy' },
        { term: 'enthesitis', definition: 'Inflammation at tendon/ligament insertion sites, common in PsA' },
      ],
      clinicalNotes: 'IL-23 inhibitors are emerging as first-line for moderate-severe plaque psoriasis due to high efficacy and favorable safety. For PsA with axial involvement, use TNF or IL-17 inhibitors (not IL-23). GPP is now recognized as potentially distinct from plaque psoriasis with different genetics (IL-36 pathway) and treatment (spesolimab). CV risk reduction is a treatment goal - biologics may help beyond skin clearance.',
    },
    5: {
      level: 5,
      summary: 'Expert psoriasis management integrates translational immunology, precision medicine, emerging therapeutic strategies, and multidisciplinary care for comprehensive psoriatic disease control.',
      explanation: `## Translational Science

### IL-23/IL-17 Pathway Nuances

**IL-23 Biology**:
- Heterodimer: p19 + p40
- IL-23R on Th17 cells, ILC3, gamma-delta T cells
- Critical for Th17 survival and IL-17 production
- NOT required for initial Th17 differentiation (IL-6, TGF-beta do this)

**Why IL-23 Inhibitors Excel**:
- Block upstream of IL-17
- May allow Th17 to "reset" without survival signal
- Don't directly immunosuppress (IL-17 blockade does)
- Potential for disease modification

**IL-17 Family Complexity**:
- IL-17A: Primary psoriasis mediator
- IL-17F: Similar but less potent
- IL-17C: Keratinocyte-derived, autocrine loop
- IL-17E (IL-25): Different, Th2 pathway

### Tissue-Resident Memory and Disease Modification

**TRM Biology**:
- Persist in epidermis for years
- Express CD103 (binds E-cadherin)
- Maintained by IL-7, IL-15
- Disease memory explains relapse patterns

**Can We Eliminate TRM?**:
- Long-term IL-23 inhibition may deplete TRM over time
- Preliminary data: Sustained remission off therapy in some patients
- Goal: Drug-free remission (true disease modification)

### Genetic and Pharmacogenomic Advances

**Predicting Treatment Response**:
| Genetic Marker | Association |
|----------------|-------------|
| HLA-Cw6 | Better ustekinumab response |
| IL23R rs11209026 | Better IL-23 inhibitor response |
| TNFAIP3 variants | Variable TNF inhibitor response |

**Future Precision Medicine**:
- Transcriptomic response signatures
- Protein biomarkers (IL-17A, IL-22 levels)
- Machine learning prediction models

## Emerging Therapeutics

### Novel Small Molecules

**TYK2 Inhibitors**:
- Deucravacitinib: Oral, selective TYK2 inhibitor
- TYK2 mediates IL-23, IL-12, type I IFN signaling
- Oral, once daily
- Efficacy similar to biologics, fewer AE than JAK inhibitors
- No lab monitoring required

**Oral IL-17 Inhibitors**:
- In development
- Would provide oral alternative to injectable biologics

**RORgammaT Inhibitors**:
- Target Th17 master transcription factor
- Would block Th17 differentiation
- Several in development

### Next-Generation Biologics

**IL-17A/F Dual Blockade**:
- Bimekizumab: Blocks both IL-17A and IL-17F
- Higher PASI 100 rates than IL-17A alone
- Approved (FDA 2024)

**IL-17C Targeting**:
- Keratinocyte-derived IL-17 family member
- Autocrine amplification loop
- MOR106: In development

### Microbiome and Metabolism

**Gut-Skin Axis**:
- Altered gut microbiome in psoriasis
- Metabolites (SCFA) may influence inflammation
- Potential for probiotic/dietary interventions

**Metabolic Targeting**:
- Metformin: Anti-inflammatory effects, adjunctive potential
- GLP-1 agonists: Weight loss improves psoriasis
- Bariatric surgery: Can dramatically improve psoriasis

## Complex Management Scenarios

### Drug-Induced Psoriasis

**Triggers**:
- Beta-blockers
- Lithium
- Antimalarials
- Interferons
- Checkpoint inhibitors (PD-1, CTLA-4)

**Management**:
- Discontinue offending agent if possible
- Treat psoriasis as usual
- Checkpoint inhibitor-induced: Often need systemic therapy, may need to continue immunotherapy

### Psoriasis in Pregnancy

**Disease Behavior**:
- Improves in ~50%, worsens in ~25%
- Postpartum flares common

**Treatment Safety**:
| Category | Options |
|----------|---------|
| Preferred | Topical steroids, NB-UVB, certolizumab (minimal placental transfer) |
| Possibly safe | TNF inhibitors (stop in 3rd trimester if possible) |
| Avoid | Methotrexate (teratogenic), acitretin (teratogenic 3 years) |

### Paradoxical Psoriasis from Biologics

**TNF Inhibitor-Induced Psoriasis**:
- New psoriasis or psoriasiform eruption on TNF inhibitor
- Often palmoplantar or scalp
- Mechanism: Imbalance of TNF/IFN-alpha
- Management: Topical, switch biologic class

### HIV-Associated Psoriasis

- Psoriasis often severe in HIV
- Improves with HAART
- Avoid systemic immunosuppression when possible
- Acitretin may be preferred systemic agent
- Biologics: Used with caution, monitor CD4

## Health Systems and Quality

### Treat-to-Target Approach

**Targets**:
- PASI <=1 or IGA 0/1 (clear/almost clear)
- BSA <=1%
- DLQI <=1

**Timeline**:
- Week 12-16: Assess response
- If not at target, optimize/switch

### Cost-Effectiveness Considerations

**Biosimilars**:
- Available for etanercept, infliximab, adalimumab
- Significant cost savings
- FDA-approved as interchangeable for some

**Value-Based Contracting**:
- Payer-manufacturer agreements
- Payment tied to outcomes

### Multidisciplinary Care Models

**Comprehensive Psoriasis Centers**:
- Dermatology
- Rheumatology (PsA)
- Cardiology (CV risk)
- Psychology/psychiatry
- Nutrition/weight management

**Patient-Reported Outcomes**:
- DLQI, PSSD (Psoriasis Symptoms and Signs Diary)
- Important for holistic assessment
- FDA-recognized endpoints`,
      keyTerms: [
        { term: 'deucravacitinib', definition: 'Oral selective TYK2 inhibitor for psoriasis, favorable safety vs JAK inhibitors', pronunciation: 'doo-KRAV-ah-ti-nib' },
        { term: 'bimekizumab', definition: 'Biologic blocking both IL-17A and IL-17F, achieving higher complete clearance rates', pronunciation: 'bih-meh-KIZ-oo-mab' },
        { term: 'RORgammaT', definition: 'Master transcription factor for Th17 cells, emerging therapeutic target' },
        { term: 'paradoxical psoriasis', definition: 'New or worsened psoriasis occurring during TNF inhibitor therapy' },
        { term: 'treat-to-target', definition: 'Therapeutic approach adjusting treatment until predefined goals are achieved' },
        { term: 'TYK2', definition: 'Tyrosine kinase 2 - kinase mediating IL-23, IL-12, and type I IFN signaling' },
      ],
      clinicalNotes: `Expert clinical pearls:
1. IL-23 inhibitors may achieve true disease modification through TRM depletion - emerging evidence for sustained off-drug remission
2. Deucravacitinib (TYK2i) offers oral option with biologic-like efficacy and no lab monitoring requirement
3. Bimekizumab (IL-17A/F) achieves highest PASI 100 rates but more candida infections
4. For pregnancy, certolizumab has minimal placental transfer and is preferred biologic
5. Paradoxical psoriasis on TNF inhibitors requires recognition and class switch
6. CV risk is a treatment target - counsel patients and consider aggressive CV prevention
7. Biosimilars offer cost savings without efficacy/safety compromise
8. Treat-to-target: Aim for PASI <= 1 or IGA 0/1, reassess by week 16`,
    },
  },

  media: [
    {
      id: 'psoriasis-types',
      type: 'diagram',
      filename: 'psoriasis-variants.svg',
      title: 'Clinical Variants of Psoriasis',
      description: 'Visual guide to plaque, guttate, inverse, pustular, and erythrodermic psoriasis',
    },
    {
      id: 'il23-il17-pathway',
      type: 'diagram',
      filename: 'psoriasis-pathogenesis.svg',
      title: 'IL-23/IL-17 Axis in Psoriasis',
      description: 'Diagram showing key immune pathway in psoriasis pathogenesis',
    },
    {
      id: 'psoriasis-treatment-algorithm',
      type: 'diagram',
      filename: 'psoriasis-treatment.svg',
      title: 'Psoriasis Treatment Algorithm',
      description: 'Step-wise approach to psoriasis management by severity',
    },
  ],

  citations: [
    {
      id: 'aad-psoriasis-guidelines',
      type: 'article',
      title: 'Guidelines of care for the management and treatment of psoriasis',
      authors: ['Menter A', 'et al.'],
      source: 'Journal of the American Academy of Dermatology',
    },
    {
      id: 'bolognia-psoriasis',
      type: 'textbook',
      title: 'Psoriasis',
      source: 'Dermatology (Bolognia)',
      chapter: '8',
    },
  ],

  crossReferences: [
    { targetId: 'dermatology-skin-anatomy', targetType: 'structure', relationship: 'related', label: 'Skin Anatomy' },
    { targetId: 'dermatology-eczema', targetType: 'condition', relationship: 'related', label: 'Eczema' },
  ],

  tags: {
    systems: ['integumentary', 'immune', 'musculoskeletal'],
    topics: ['dermatology', 'psoriasis', 'immunology', 'rheumatology'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00Z',
  updatedAt: '2025-01-24T00:00:00Z',
  version: 1,
  status: 'published',
};

export default psoriasisContent;
