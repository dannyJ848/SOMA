/**
 * Acne Vulgaris - Comprehensive Educational Content
 *
 * Covers pathophysiology, classification, and evidence-based treatment ladder
 * for acne management.
 */

import { EducationalContent } from '../../types';

export const acneContent: EducationalContent = {
  id: 'dermatology-acne',
  type: 'condition',
  name: 'Acne Vulgaris',
  alternateNames: ['Acne', 'Pimples', 'Common Acne'],
  hpoId: 'HP:0001061',

  levels: {
    1: {
      level: 1,
      summary: 'Acne is a common skin condition that causes pimples, usually on the face, chest, and back.',
      explanation: `Acne happens when tiny holes in your skin (called pores) get clogged. Almost everyone gets acne at some point, especially during the teenage years.

**Why Does Acne Happen?**
Your skin has tiny oil glands that keep your skin soft. Sometimes these glands make too much oil. When oil, dead skin cells, and bacteria get trapped in a pore, you get a pimple.

**Types of Pimples:**
- **Blackheads**: Open clogged pores that look dark (the dark color is not dirt!)
- **Whiteheads**: Closed clogged pores that look like small white bumps
- **Papules**: Small red bumps that might be tender
- **Pustules**: Pimples with pus at the top (what people usually call "pimples")
- **Nodules**: Large, painful bumps deep under the skin
- **Cysts**: Deep, pus-filled lumps that can leave scars

**What Makes Acne Worse?**
- Hormones (especially during puberty, periods, or stress)
- Touching your face a lot
- Some makeup or hair products
- Not washing sweat off after exercise

**What Helps?**
- Washing your face twice a day with gentle cleanser
- Using acne products with benzoyl peroxide or salicylic acid
- Not picking or squeezing pimples (this can cause scars!)
- Seeing a doctor if over-the-counter products do not work`,
      keyTerms: [
        { term: 'pore', definition: 'A tiny opening in the skin where oil comes out' },
        { term: 'blackhead', definition: 'A clogged pore that is open and looks dark' },
        { term: 'whitehead', definition: 'A clogged pore that is closed and looks white' },
        { term: 'pustule', definition: 'A pimple filled with pus' },
        { term: 'benzoyl peroxide', definition: 'A medicine that kills bacteria and helps clear acne' },
      ],
      analogies: [
        'A pore getting clogged is like a drain getting blocked with hair and soap.',
        'Oil glands working too hard is like a faucet that will not turn off all the way.',
        'A blackhead looks dark because the oil turns dark when exposed to air, like how a cut apple turns brown.',
      ],
      examples: [
        'Many teenagers notice more pimples when they start puberty because of hormone changes.',
        'Football players might get acne on their forehead from sweaty helmets.',
      ],
    },
    2: {
      level: 2,
      summary: 'Acne is a chronic inflammatory disease of the pilosebaceous unit involving sebum overproduction, follicular hyperkeratinization, C. acnes colonization, and inflammation.',
      explanation: `Acne vulgaris is one of the most common skin conditions, affecting up to 85% of teenagers and often persisting into adulthood.

## Four Key Factors in Acne Development

1. **Excess Sebum Production**
   - Sebaceous glands produce more oil (sebum)
   - Triggered by androgens (testosterone and its metabolites)
   - Explains why acne often starts at puberty

2. **Follicular Hyperkeratinization**
   - Dead skin cells don't shed normally
   - They stick together and block the pore
   - Creates a "plug" (microcomedo - the precursor to all acne)

3. **Cutibacterium acnes (C. acnes)**
   - Bacteria that normally live on skin
   - Thrive in the oily, plugged environment
   - Trigger inflammation

4. **Inflammation**
   - Immune response to bacteria and sebum
   - Causes redness, swelling, and pain
   - Responsible for scarring

## Types of Acne Lesions

**Non-inflammatory (Comedones)**:
| Type | Description |
|------|-------------|
| Open comedone (blackhead) | Dilated pore with oxidized melanin/sebum |
| Closed comedone (whitehead) | Pore blocked by keratin plug |

**Inflammatory**:
| Type | Description |
|------|-------------|
| Papule | Red bump <5mm, no visible pus |
| Pustule | Papule with visible pus center |
| Nodule | Deep, painful lesion >5mm |
| Cyst | Deep, fluctuant, pus-filled lesion |

## Classification by Severity

- **Mild**: Comedones, few papules/pustules
- **Moderate**: More papules/pustules, few nodules
- **Severe**: Many inflammatory lesions, nodules, cysts
- **Nodulocystic**: Predominantly nodules and cysts

## Treatment Approach

**Mild Acne**:
- Topical benzoyl peroxide (kills bacteria)
- Topical retinoids (prevent comedones)
- Topical antibiotics (short-term)

**Moderate Acne**:
- Combination topical therapy
- Oral antibiotics (doxycycline, minocycline)

**Severe/Nodulocystic Acne**:
- Oral isotretinoin (Accutane)
- Hormonal therapy in females (oral contraceptives, spironolactone)

## Prevention of Scarring
- Early, aggressive treatment of inflammatory acne
- Avoid picking or squeezing lesions
- May need combination therapy`,
      keyTerms: [
        { term: 'pilosebaceous unit', definition: 'The hair follicle and its attached sebaceous (oil) gland', pronunciation: 'pie-lo-seh-BAY-shus' },
        { term: 'comedone', definition: 'A plugged hair follicle; the basic acne lesion', pronunciation: 'KOM-eh-dohn' },
        { term: 'Cutibacterium acnes', definition: 'Bacteria that live in hair follicles and contribute to acne inflammation', pronunciation: 'kyoo-tih-bak-TEER-ee-um AK-neez' },
        { term: 'retinoid', definition: 'Vitamin A derivative that normalizes skin cell shedding and reduces comedones' },
        { term: 'isotretinoin', definition: 'Powerful oral medication for severe acne that reduces sebum production', pronunciation: 'eye-so-TRET-ih-noin' },
      ],
      examples: [
        'A 15-year-old with mostly blackheads and whiteheads has mild comedonal acne.',
        'A patient with multiple painful nodules and cysts would likely need oral isotretinoin.',
      ],
    },
    3: {
      level: 3,
      summary: 'Acne pathogenesis involves complex interactions between hormones, the innate immune system, Cutibacterium acnes, and the pilosebaceous unit, with treatment targeting multiple pathways.',
      explanation: `## Detailed Pathophysiology

### Hormonal Regulation

**Androgen Effects**:
- Testosterone converted to DHT by 5-alpha reductase in sebaceous glands
- DHT binds androgen receptors, stimulating sebocyte proliferation and lipogenesis
- Increased sebum production
- Insulin-like growth factor 1 (IGF-1) enhances androgen effects

**Hormonal Acne Patterns**:
- Adult female acne: Lower face, jawline, neck
- Premenstrual flares: Hormonal fluctuations
- PCOS-associated acne: Hyperandrogenism

### Microbiome and Inflammation

**C. acnes Biology**:
- Gram-positive anaerobe
- Multiple phylotypes (IA1, IA2, IB, IC, II, III)
- Different strains associated with acne vs healthy skin
- Produces lipases, proteases, neuraminidase
- Activates innate immunity

**Innate Immune Activation**:
- C. acnes activates TLR2 on keratinocytes and monocytes
- Triggers IL-1beta, TNF-alpha, IL-8 production
- NLRP3 inflammasome activation
- Neutrophil chemotaxis
- Matrix metalloproteinase release

### Follicular Events

**Microcomedo Formation**:
- Hyperproliferation of follicular keratinocytes
- Abnormal desquamation (cells stick together)
- Lipid composition changes in sebum
- Decreased linoleic acid correlates with comedogenesis

**Lesion Progression**:
Microcomedo → Closed comedone → Open comedone → Inflammatory papule → Pustule → Nodule/Cyst

## Treatment Algorithm

### First-Line Treatments

**Topical Retinoids** (foundation of therapy):
- Tretinoin, adapalene, tazarotene, trifarotene
- Mechanisms:
  - Normalize follicular keratinization
  - Reduce microcomedo formation
  - Have anti-inflammatory effects
  - Enhance penetration of other topicals
- Adapalene 0.1% available OTC

**Benzoyl Peroxide**:
- Bactericidal (generates free radicals)
- No bacterial resistance
- Available 2.5%, 5%, 10% (higher not necessarily better)
- Can bleach fabrics

### Second-Line Treatments

**Topical Antibiotics**:
- Clindamycin, erythromycin
- Always combine with benzoyl peroxide (reduces resistance)
- Should not use as monotherapy

**Oral Antibiotics**:
- Doxycycline 50-100mg daily or minocycline
- Anti-inflammatory effects beyond antimicrobial
- Limit to 3-4 months when possible
- Combine with topical retinoid and BP

### Third-Line Treatments

**Oral Isotretinoin**:
- Only drug addressing all four pathogenic factors
- Reduces sebum production by 80%
- Induces apoptosis of sebocytes
- Normalizes keratinization
- Anti-inflammatory effects
- Typical dose: 0.5-1 mg/kg/day
- Cumulative dose: 120-150 mg/kg for lasting remission

**iPLEDGE Program** (US):
- Mandatory for isotretinoin due to teratogenicity
- Monthly pregnancy tests for females of childbearing potential
- Two forms of contraception

**Hormonal Therapy** (females):
- Combined oral contraceptives (esp. with anti-androgenic progestins)
- Spironolactone 50-200 mg/day
- Blocks androgen receptors, reduces sebum

## Monitoring and Side Effects

| Medication | Key Monitoring | Major Side Effects |
|------------|----------------|-------------------|
| Isotretinoin | LFTs, lipids, pregnancy | Teratogenicity, mucocutaneous dryness, mood changes |
| Doxycycline | None routine | Photosensitivity, esophagitis, rare pseudotumor cerebri |
| Spironolactone | K+ if indicated | Hyperkalemia, menstrual irregularities |`,
      keyTerms: [
        { term: 'microcomedo', definition: 'Microscopic follicular plug that precedes visible acne lesions', pronunciation: 'MY-kro-KOM-eh-doh' },
        { term: 'DHT', definition: 'Dihydrotestosterone - potent androgen driving sebum production' },
        { term: 'TLR2', definition: 'Toll-like receptor 2 - pattern recognition receptor activated by C. acnes' },
        { term: 'iPLEDGE', definition: 'FDA-mandated risk management program for isotretinoin' },
        { term: 'comedolytic', definition: 'Agent that breaks down or prevents comedone formation' },
        { term: 'sebocyte', definition: 'Cell of the sebaceous gland that produces sebum' },
      ],
      clinicalNotes: 'Start topical retinoids at low strength and titrate to reduce irritation. Benzoyl peroxide wash left on for 2-3 minutes before rinsing can reduce resistance. Doxycycline should be taken with food and plenty of water. Isotretinoin requires enrollment in iPLEDGE and baseline labs.',
    },
    4: {
      level: 4,
      summary: 'Advanced acne management requires understanding molecular mechanisms, evidence-based treatment optimization, and management of treatment-resistant cases and complications.',
      explanation: `## Molecular Pathogenesis

### Sebocyte Biology

**Lipogenesis Regulation**:
- Androgens activate androgen receptor (AR) → SREBP-1c
- SREBP-1c (sterol regulatory element-binding protein) → lipogenic gene transcription
- Peroxisome proliferator-activated receptors (PPARs) modulate sebum composition
- mTORC1 pathway integrates growth signals

**mTOR Pathway in Acne**:
- High glycemic diet → insulin/IGF-1 → mTORC1 activation
- mTORC1 promotes:
  - SREBP-1c nuclear translocation
  - Lipogenesis
  - Keratinocyte proliferation
- Provides rationale for dietary modification (low glycemic load)
- Isotretinoin inhibits mTORC1 signaling

### Inflammasome Activation

**NLRP3 Inflammasome**:
- C. acnes activates NLRP3 via TLR2/NOD2
- Inflammasome assembly → caspase-1 activation
- Pro-IL-1beta and pro-IL-18 cleavage
- IL-1beta drives inflammation and scarring

**IL-1 Family in Acne**:
- IL-1alpha: Upregulated in comedogenesis
- IL-1beta: Key inflammatory mediator
- IL-36: Promotes neutrophil recruitment
- Potential therapeutic target (IL-1 inhibitors under study)

### C. acnes Phylotype Differences

| Phylotype | Association | Virulence |
|-----------|-------------|-----------|
| IA1 | Acne-associated | High porphyrin, high lipase |
| IA2 | Acne-associated | Similar to IA1 |
| II | Healthy skin | Lower virulence |
| III | Healthy skin | Lowest virulence |

**Implications**:
- Strain-specific differences matter
- Future: Probiotic/prebiotic approaches
- Microbiome modulation potential

## Advanced Treatment Considerations

### Isotretinoin Optimization

**Dosing Strategies**:
- Traditional: 0.5-1 mg/kg/day until cumulative 120-150 mg/kg
- Low-dose: 0.25-0.4 mg/kg/day (fewer side effects, may need longer course)
- Intermittent: Reduce recurrence in maintenance

**Absorption**:
- Lipophilic - take with fatty meal
- Lidose formulation: Food-independent absorption

**Managing Initial Flare**:
- Consider prednisone 0.5-1 mg/kg/day for 2-4 weeks in severe nodulocystic acne
- Start isotretinoin at lower dose (0.5 mg/kg)

**Relapse Predictors**:
- Young age at treatment
- Truncal acne
- Hormonal factors (females)
- Higher sebum excretion
- Inadequate cumulative dose

### Antibiotic Stewardship

**Resistance Concerns**:
- C. acnes resistance to erythromycin: >50% in many regions
- Clindamycin resistance following erythromycin exposure
- Rising doxycycline resistance

**Best Practices**:
- Never use topical antibiotic monotherapy
- Always combine with benzoyl peroxide
- Limit oral antibiotic courses to 3-4 months
- Use sub-antimicrobial doxycycline (40mg modified-release) when possible
- Add retinoid for maintenance after antibiotic course

### Hormonal Therapy Nuances

**OCP Selection**:
- FDA-approved: Ortho Tri-Cyclen, Estrostep, Yaz, Beyaz
- Anti-androgenic progestins: Drospirenone, cyproterone acetate (not US)
- Avoid androgenic progestins (levonorgestrel, norgestrel)

**Spironolactone**:
- Androgen receptor blocker
- Inhibits 5-alpha reductase
- Reduces sebum production
- Onset: 3 months
- No routine potassium monitoring needed in healthy young women
- Contraindicated in pregnancy

## Special Populations

### Adult Female Acne

**Characteristics**:
- Lower face, jawline distribution
- Inflammatory predominant
- Premenstrual flares
- Often hormone-sensitive

**Approach**:
- Consider hormonal evaluation if signs of hyperandrogenism
- Spironolactone first-line adjunct
- OCPs if appropriate
- Topical and/or oral treatments as indicated

### Post-Inflammatory Hyperpigmentation

**Prevention**:
- Early treatment of inflammation
- Sun protection

**Treatment**:
- Topical retinoids
- Azelaic acid
- Hydroquinone (short courses)
- Chemical peels
- Time (months to years)

### Acne Scarring

**Types**:
- Ice pick (narrow, deep)
- Boxcar (wide, sharp edges)
- Rolling (broad, shallow)

**Treatment Options**:
- Chemical peels (superficial)
- Microneedling
- Fractional laser (ablative and non-ablative)
- Subcision
- Fillers
- Punch excision (ice pick)`,
      keyTerms: [
        { term: 'mTORC1', definition: 'Mechanistic target of rapamycin complex 1 - master regulator of cell growth linked to sebum production' },
        { term: 'SREBP-1c', definition: 'Transcription factor controlling lipogenic gene expression in sebocytes' },
        { term: 'NLRP3 inflammasome', definition: 'Multiprotein complex that activates IL-1beta in response to C. acnes' },
        { term: 'subcision', definition: 'Procedure using needle to release fibrous bands causing depressed scars' },
        { term: 'phylotype', definition: 'Genetic variant of a bacterial species with different clinical associations' },
        { term: 'iPLEDGE', definition: 'Mandatory isotretinoin risk management program preventing pregnancy exposure' },
      ],
      clinicalNotes: 'Low-dose isotretinoin protocols may reduce side effects while maintaining efficacy. Combine benzoyl peroxide with any topical antibiotic to prevent resistance. Sub-antimicrobial doxycycline has anti-inflammatory effects without antimicrobial pressure. For hormonal acne in women, spironolactone is often more effective than antibiotics.',
    },
    5: {
      level: 5,
      summary: 'Expert acne management integrates current research, novel therapeutics, personalized approaches, and advanced procedural interventions for comprehensive disease control.',
      explanation: `## Emerging Science and Therapeutics

### Novel Targets Under Investigation

**Sebaceous Gland Targeting**:
- Acetyl CoA carboxylase inhibitors (sebum synthesis)
- SREBP inhibitors
- SCD1 (stearoyl-CoA desaturase-1) inhibitors
- Direct sebocyte toxins (localized)

**Microbiome Modulation**:
- Phage therapy against pathogenic C. acnes strains
- Probiotic C. acnes strains (competitive exclusion)
- Antimicrobial peptide augmentation

**Inflammasome Targeting**:
- IL-1beta inhibitors (canakinumab, anakinra studied)
- NLRP3 inhibitors in development

**Androgen Pathway**:
- Topical 5-alpha reductase inhibitors
- Androgen receptor modulators (SARMs)
- Clascoterone (topical androgen receptor inhibitor, FDA approved 2020)

### Clascoterone (Winlevi)

**Mechanism**:
- First-in-class topical androgen receptor inhibitor
- Competes with DHT at sebocyte and keratinocyte AR
- Metabolized locally, minimal systemic absorption
- Does not affect systemic hormone levels

**Evidence**:
- Phase 3 trials: Superior to vehicle in IGA response
- Reduces inflammatory and non-inflammatory lesions
- Well-tolerated

**Clinical Use**:
- Once daily application
- Safe in males and females
- Can combine with other topical agents
- Role in hormonal acne, treatment-resistant cases

### Advanced Isotretinoin Pharmacology

**Mechanism Depth**:
- Binds RAR (retinoic acid receptors) - gamma predominant
- Transcriptional regulation of hundreds of genes
- Sebocyte apoptosis via TRAIL pathway
- Downregulates TLR2 expression
- Reduces IL-1beta, IL-8, TNF-alpha production
- Possible effects on C. acnes virulence factors

**Pharmacogenomics**:
- CYP450 polymorphisms affect metabolism
- Potential for personalized dosing
- Genetic predictors of response/relapse under study

**Post-Isotretinoin Effects**:
- Sebaceous gland size reduction persists
- Sebum excretion may normalize over months-years
- Some patients need maintenance low-dose therapy

### Treatment-Resistant Acne

**Definition**:
- Failure of standard treatments including isotretinoin
- Rapid relapse post-isotretinoin
- Severe scarring despite treatment

**Evaluation**:
- Confirm diagnosis (acne vs mimics)
- Exclude endocrinopathy (PCOS, CAH, tumor)
- Assess medication adherence
- Evaluate for resistant organisms

**Acne Mimics**:
- Gram-negative folliculitis (post-antibiotic)
- Demodex folliculitis
- Malassezia (Pityrosporum) folliculitis
- Drug-induced acneiform eruptions
- Rosacea

**Gram-Negative Folliculitis**:
- Klebsiella, E. coli, Proteus, Pseudomonas
- Pustules concentrated around nose
- Develops after prolonged oral antibiotic use
- Treatment: Ampicillin or isotretinoin

**Management Strategies**:
- Higher cumulative isotretinoin doses (up to 220 mg/kg)
- Repeat isotretinoin courses
- Maintenance low-dose isotretinoin
- Aggressive hormonal blockade (females)
- Combination systemic therapy

## Procedural Interventions

### Active Acne

**Corticosteroid Injection**:
- Triamcinolone acetonide 2.5-5 mg/mL
- Inject into nodules/cysts
- Rapid resolution (24-72 hours)
- Risk: Atrophy if too superficial or concentrated

**Light and Laser Therapy**:
- Blue light (415nm): Activates porphyrins in C. acnes
- PDT with ALA: Photodynamic therapy
  - Apply aminolevulinic acid → converts to protoporphyrin IX
  - Light activation → singlet oxygen → C. acnes death
  - Also damages sebaceous glands
- Diode laser (1450nm): Targets sebaceous glands

### Post-Acne Scarring

**Evidence-Based Algorithm**:

| Scar Type | First-line | Second-line |
|-----------|------------|-------------|
| Ice pick | TCA CROSS, punch excision | Fractional laser |
| Boxcar | Fractional ablative laser | Subcision, fillers |
| Rolling | Subcision | Fractional laser, microneedling |
| Atrophic diffuse | Microneedling, fractional laser | Resurfacing |

**TCA CROSS Technique**:
- Trichloroacetic acid (70-100%)
- Focused application to individual scars
- Induces collagen remodeling
- Multiple sessions needed

**Fractional Ablative Lasers**:
- CO2 (10,600nm) or Erbium:YAG (2940nm)
- Create microscopic treatment zones
- Stimulate collagen remodeling
- Downtime: 5-7 days typically
- Multiple sessions for optimal results

**Subcision**:
- Nokor or regular needle beneath scar
- Breaks fibrous bands tethering skin
- Often combined with filler or PRP

**Fillers for Depressed Scars**:
- Hyaluronic acid: Temporary (6-12 months)
- Poly-L-lactic acid: Stimulates collagen
- Bellafill (PMMA): FDA-approved for acne scars, long-lasting

## Guidelines and Quality Metrics

**American Academy of Dermatology Guidelines (2024 Update)**:
- Topical retinoid as foundation for almost all acne
- Limit oral antibiotics to 3 months when possible
- Consider hormonal therapy early in appropriate females
- Isotretinoin for severe, scarring, or treatment-resistant acne
- Evidence level and recommendation strength for all interventions

**Quality Measures**:
- Time to dermatology referral for moderate-severe acne
- Appropriate use of antibiotic stewardship
- Isotretinoin iPLEDGE compliance
- Scar prevention (early aggressive treatment)`,
      keyTerms: [
        { term: 'clascoterone', definition: 'First topical androgen receptor inhibitor approved for acne (Winlevi)', pronunciation: 'klas-KOH-ter-ohn' },
        { term: 'TCA CROSS', definition: 'Trichloroacetic acid chemical reconstruction of skin scars - focused acid application', pronunciation: 'T-C-A cross' },
        { term: 'PDT', definition: 'Photodynamic therapy using aminolevulinic acid and light to destroy sebaceous glands and bacteria' },
        { term: 'Gram-negative folliculitis', definition: 'Acne-like pustular eruption from resistant bacteria after prolonged antibiotic use' },
        { term: 'TRAIL', definition: 'TNF-related apoptosis-inducing ligand - pathway by which isotretinoin induces sebocyte death' },
        { term: 'subcision', definition: 'Needle technique to release tethered scars by severing fibrotic bands' },
      ],
      clinicalNotes: `Expert-level clinical pearls:
1. Clascoterone is a new option for hormonal acne in both males and females without systemic effects
2. Gram-negative folliculitis should be suspected in antibiotic-treated patients with new perinasal pustules
3. Consider isotretinoin cumulative doses up to 220 mg/kg in relapsing/resistant cases
4. TCA CROSS is highly effective for ice pick scars with minimal downtime
5. Combine modalities for scar treatment: subcision + filler + fractional laser
6. Low-dose maintenance isotretinoin (10-20mg 2-3x/week) can prevent relapse in selected patients
7. Always photograph before and after treatment for objective assessment`,
    },
  },

  media: [
    {
      id: 'acne-lesion-types',
      type: 'diagram',
      filename: 'acne-lesions.svg',
      title: 'Types of Acne Lesions',
      description: 'Visual guide to comedones, papules, pustules, nodules, and cysts',
    },
    {
      id: 'acne-treatment-algorithm',
      type: 'diagram',
      filename: 'acne-treatment-ladder.svg',
      title: 'Acne Treatment Algorithm',
      description: 'Step-wise approach to acne management based on severity',
    },
    {
      id: 'pilosebaceous-unit',
      type: 'diagram',
      filename: 'pilosebaceous-unit.svg',
      title: 'Pilosebaceous Unit Anatomy',
      description: 'Structure of hair follicle and sebaceous gland',
    },
  ],

  citations: [
    {
      id: 'aad-acne-guidelines',
      type: 'article',
      title: 'Guidelines of care for the management of acne vulgaris',
      authors: ['Zaenglein AL', 'et al.'],
      source: 'Journal of the American Academy of Dermatology',
    },
    {
      id: 'bolognia-acne',
      type: 'textbook',
      title: 'Acne Vulgaris',
      source: 'Dermatology (Bolognia)',
      chapter: '36',
    },
  ],

  crossReferences: [
    { targetId: 'dermatology-skin-anatomy', targetType: 'structure', relationship: 'related', label: 'Skin Anatomy' },
    { targetId: 'dermatology-scar-management', targetType: 'topic', relationship: 'related', label: 'Scar Management' },
  ],

  tags: {
    systems: ['integumentary'],
    topics: ['dermatology', 'acne', 'treatment'],
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

export default acneContent;
