/**
 * Skin Aging - Comprehensive Educational Content
 *
 * Covers intrinsic and extrinsic aging, prevention, and treatment options.
 */

import { EducationalContent } from '../../types';

export const skinAgingContent: EducationalContent = {
  id: 'dermatology-skin-aging',
  type: 'topic',
  name: 'Skin Aging',
  alternateNames: ['Photoaging', 'Cutaneous Aging', 'Dermatoheliosis'],

  levels: {
    1: {
      level: 1,
      summary: 'Skin naturally changes as we age, but sun damage speeds up the process - protection and good habits can help keep skin healthier.',
      explanation: `As we get older, our skin changes. Some changes are natural, but many are caused by sun damage. Understanding what causes aging can help you take care of your skin.

**What Happens to Aging Skin:**
- Wrinkles and fine lines appear
- Skin becomes thinner and drier
- Age spots (brown spots) may develop
- Skin loses its firmness
- Healing takes longer

**Two Types of Aging:**

**Natural Aging (Intrinsic)**
- Happens to everyone
- Gradual and slow
- Skin becomes thinner
- Fine wrinkles appear

**Sun Damage Aging (Extrinsic/Photoaging)**
- Caused by UV rays
- Can be prevented
- Deeper wrinkles
- Brown spots and uneven color
- Leathery texture

**How to Keep Skin Healthy:**
- **Protect from sun**: Use sunscreen daily, wear hats, seek shade
- **Don't smoke**: Smoking speeds up aging
- **Eat well**: Fruits, vegetables, and healthy fats help skin
- **Stay hydrated**: Drink plenty of water
- **Gentle skincare**: Use moisturizer, avoid harsh products
- **Sleep well**: Skin repairs itself during sleep

**When to See a Dermatologist:**
- Concerning spots or moles
- Rapid changes in skin
- Questions about anti-aging treatments`,
      keyTerms: [
        { term: 'wrinkle', definition: 'A line or fold in the skin that develops with age' },
        { term: 'age spot', definition: 'A flat brown spot on the skin from sun damage, also called liver spot' },
        { term: 'collagen', definition: 'A protein that keeps skin firm and strong' },
        { term: 'moisturizer', definition: 'A cream or lotion that adds moisture to skin' },
      ],
      analogies: [
        'Collagen is like the scaffolding that holds up a building - as we age, it weakens and the building sags.',
        'Sun damage to skin is like leaving a piece of paper in the sun - it yellows, wrinkles, and becomes fragile.',
      ],
      examples: [
        'Compare the skin on your inner arm (protected from sun) to your face - the difference shows sun damage.',
        'A truck driver may have more wrinkles on the left side of their face from window sun exposure.',
      ],
    },
    2: {
      level: 2,
      summary: 'Skin aging results from intrinsic chronological processes and extrinsic photoaging, with prevention focusing on sun protection and treatment options ranging from topical retinoids to energy-based devices.',
      explanation: `Skin aging is multifactorial, involving both time-dependent (intrinsic) and environmental (extrinsic) factors. Photoaging from UV exposure is the primary modifiable contributor.

## Types of Skin Aging

### Intrinsic (Chronological) Aging
**Characteristics**:
- Fine wrinkles
- Thin, dry skin
- Loss of elasticity
- Reduced subcutaneous fat

**Mechanisms**:
- Decreased cell turnover
- Reduced collagen and elastin production
- Decreased sebum production
- Hormonal changes (especially menopause)

### Extrinsic (Photo) Aging
**Characteristics**:
- Deep wrinkles
- Coarse, leathery texture
- Dyspigmentation (lentigines, mottling)
- Telangiectasias
- Solar elastosis

**Mechanisms**:
- UV-induced DNA damage
- Matrix metalloproteinase (MMP) induction
- Reactive oxygen species generation
- Chronic inflammation

## Clinical Features by Severity

### Glogau Photoaging Classification
| Type | Age | Description | Features |
|------|-----|-------------|----------|
| I | 20-30s | Early | Mild pigmentation, no wrinkles |
| II | 30-40s | Moderate | Early lentigines, wrinkles with motion |
| III | 40-50s | Advanced | Dyspigmentation, wrinkles at rest |
| IV | 60+ | Severe | Yellow-gray color, heavy wrinkles |

## Prevention

### Sun Protection
- Daily broad-spectrum SPF 30+
- Protective clothing, hats
- Shade seeking
- Primary prevention strategy

### Lifestyle Factors
- **No smoking**: Smoking accelerates aging
- **Nutrition**: Antioxidants, omega-3s
- **Sleep**: Adequate rest for repair
- **Hydration**: Internal and external moisture

## Treatment Options

### Topical Treatments
**Retinoids** (Vitamin A derivatives):
- Gold standard for photoaging
- Increase collagen production
- Normalize cell turnover
- Reduce fine wrinkles and pigmentation
- Options: Tretinoin, retinol, adapalene

**Other Actives**:
- Vitamin C (ascorbic acid): Antioxidant, brightening
- Niacinamide: Anti-inflammatory, barrier support
- Peptides: Collagen stimulation
- Alpha hydroxy acids: Exfoliation, texture improvement
- Growth factors: Emerging evidence

### Professional Treatments
**Chemical Peels**:
- Superficial (glycolic, salicylic)
- Medium (TCA)
- Deep (phenol)

**Energy-Based Devices**:
- Lasers (ablative and non-ablative)
- Intense pulsed light (IPL)
- Radiofrequency
- Ultrasound (HIFU)

**Injectable Treatments**:
- Neuromodulators (botulinum toxin)
- Dermal fillers (hyaluronic acid, etc.)

**Combination Approaches**:
- Multi-modality treatments often most effective
- Maintenance programs`,
      keyTerms: [
        { term: 'photoaging', definition: 'Premature skin aging caused by chronic UV exposure' },
        { term: 'solar elastosis', definition: 'Accumulation of abnormal elastic fibers in dermis from sun damage' },
        { term: 'retinoid', definition: 'Vitamin A derivative used to treat aging and acne' },
        { term: 'lentigo', definition: 'Flat brown spot from sun damage (plural: lentigines)', pronunciation: 'len-TY-go' },
        { term: 'neuromodulator', definition: 'Injectable that relaxes muscles to reduce wrinkles (e.g., botulinum toxin)' },
      ],
      analogies: [
        'Retinoids are like a renovation crew for your skin - they help rebuild the structure from within.',
        'Chemical peels are like sanding old paint - removing damaged layers reveals fresher skin underneath.',
      ],
    },
    3: {
      level: 3,
      summary: 'Skin aging involves complex molecular mechanisms including collagen degradation, oxidative stress, and cellular senescence, with evidence-based treatments targeting specific pathways.',
      explanation: `## Molecular Mechanisms of Aging

### Intrinsic Aging Pathways

**Cellular Senescence**:
- Hayflick limit: Finite cell divisions
- Telomere shortening with each division
- Senescent cells accumulate
- Senescence-associated secretory phenotype (SASP)
- Pro-inflammatory cytokines release

**Collagen Changes**:
- Decreased fibroblast proliferation
- Reduced procollagen synthesis
- Collagen fiber fragmentation
- Cross-linking increases
- Decreased collagen I:III ratio

**Epidermal Changes**:
- Reduced keratinocyte proliferation
- Flattening of dermal-epidermal junction
- Decreased melanocyte numbers
- Langerhans cell reduction (immunosenescence)

### Photoaging Pathways

**UV-Induced MMP Activation**:
1. UV → Reactive oxygen species (ROS)
2. ROS → AP-1 transcription factor activation
3. AP-1 → MMP-1, MMP-3, MMP-9 induction
4. MMPs → Collagen/elastin degradation
5. Fragmented collagen → Reduced fibroblast function

**Oxidative Stress**:
- Lipid peroxidation
- Protein oxidation
- DNA damage (8-oxo-guanine)
- Mitochondrial dysfunction
- Antioxidant depletion

**Chronic Inflammation**:
- UV-induced cytokine release
- NFkB activation
- Inflammaging (chronic low-grade inflammation)
- Contributes to matrix degradation

### Solar Elastosis
- Accumulation of abnormal elastic fibers
- UV-induced elastin gene expression
- Disordered tropoelastin deposition
- "Basophilic degeneration" on histology
- Characteristic yellow, thickened appearance

## Histopathology of Aging Skin

### Epidermis
- Thinner (intrinsic) vs acanthosis (photoaging)
- Flattened rete ridges
- Disordered keratinocyte maturation
- Irregular pigmentation (photoaging)

### Dermis
- Decreased collagen density
- Fragmented collagen fibers
- Solar elastosis (photoaging)
- Reduced glycosaminoglycans
- Decreased vasculature

## Evidence-Based Topical Treatments

### Retinoids
**Mechanism**:
- RAR/RXR receptor activation
- Increased collagen I and III synthesis
- MMP inhibition
- Normalized keratinocyte differentiation
- Melanin dispersion

**Efficacy Data**:
- Reduce fine wrinkles (Level A evidence)
- Improve mottled pigmentation
- Increase epidermal thickness
- Effects seen at 3-6 months

**Practical Use**:
- Start low concentration
- Gradual increase in frequency
- Expect retinoid dermatitis (transient)
- Always combine with sun protection

### Vitamin C (L-Ascorbic Acid)
**Mechanism**:
- Essential cofactor for collagen hydroxylation
- ROS scavenging
- Tyrosinase inhibition (brightening)
- Photoprotection augmentation

**Formulation Challenges**:
- Oxidizes easily
- pH dependent absorption (<3.5)
- Stabilized formulations or derivatives

### Alpha Hydroxy Acids
- Glycolic, lactic acid
- Reduce corneocyte cohesion
- Stimulate dermal collagen
- Improve texture and pigmentation
- Concentration-dependent effects

## Professional Treatments

### Laser Resurfacing

**Ablative Lasers**:
- CO2 (10,600nm), Erbium:YAG (2,940nm)
- Remove epidermis and superficial dermis
- Significant downtime
- Dramatic results
- Risk: Scarring, dyspigmentation

**Non-Ablative Lasers**:
- Target dermis, spare epidermis
- Less downtime
- Multiple treatments needed
- Nd:YAG, diode lasers

**Fractional Technology**:
- Microscopic treatment zones
- Islands of untreated skin for rapid healing
- Ablative fractional (FRAXEL re:pair)
- Non-ablative fractional (FRAXEL re:store)
- Balance of efficacy and safety

### Intense Pulsed Light (IPL)
- Broad spectrum light
- Targets pigment and hemoglobin
- Improves dyspigmentation
- Reduces telangiectasias
- Multiple sessions needed

### Radiofrequency
- Dermal heating → collagen contraction
- Neocollagenesis over months
- Monopolar, bipolar, fractional variants
- Skin tightening effect

### Neuromodulators
**Botulinum Toxin**:
- Blocks acetylcholine release
- Relaxes dynamic wrinkles
- Forehead, crow's feet, glabellar lines
- Duration: 3-4 months
- Preventive use emerging

### Dermal Fillers
**Hyaluronic Acid**:
- Volume restoration
- Hydration effects
- Reversible (hyaluronidase)
- Most common filler type

**Other Fillers**:
- Calcium hydroxylapatite (stimulatory)
- Poly-L-lactic acid (collagen stimulator)
- Fat transfer (autologous)`,
      keyTerms: [
        { term: 'matrix metalloproteinases', definition: 'Enzymes that break down collagen and other matrix proteins (MMPs)' },
        { term: 'SASP', definition: 'Senescence-Associated Secretory Phenotype - inflammatory factors released by senescent cells' },
        { term: 'fractional laser', definition: 'Laser creating microscopic treatment zones with intervening normal tissue' },
        { term: 'AP-1', definition: 'Activator protein-1 - transcription factor activating MMP genes after UV exposure' },
        { term: 'hyaluronic acid', definition: 'Natural glycosaminoglycan used in fillers for volume and hydration' },
      ],
      clinicalNotes: 'Topical retinoids require 3-6 months for visible results - patient expectation management important. Combination of retinoid + vitamin C + sunscreen is evidence-based foundation. Fractional ablative lasers offer best efficacy:safety ratio for significant photoaging.',
    },
    4: {
      level: 4,
      summary: 'Advanced understanding of skin aging integrates cellular senescence biology, targeted molecular therapies, and precision approaches to anti-aging treatment.',
      explanation: `## Cellular Mechanisms of Aging

### Telomere Biology
**Structure and Function**:
- TTAGGG repeat sequences
- Protect chromosome ends
- Telomerase maintains length
- Fibroblasts: Limited telomerase activity

**Telomere Shortening**:
- Progressive with cell division
- Critical shortening → senescence
- DNA damage response activation
- p53/p21 pathway engagement

**UV and Telomeres**:
- Accelerated shortening
- Oxidative stress damage
- Contributing to photoaging

### Mitochondrial Dysfunction
**Age-Related Changes**:
- mtDNA mutations accumulate
- "Common deletion" (4977bp)
- Reduced oxidative phosphorylation
- Increased ROS generation
- Mitochondrial-nuclear signaling

**UV Effects**:
- Direct mtDNA damage
- Impaired biogenesis
- Mitochondrial dysfunction amplifies aging

### Extracellular Matrix Aging

**Collagen Degradation Cascade**:
1. UV → ROS → AP-1 activation
2. c-Jun induction (AP-1 component)
3. MMP-1 transcription
4. Collagen fragmentation
5. Fibroblast collapse (no tension)
6. Further reduced collagen synthesis
7. Positive feedback loop

**Elastin Pathology**:
- Normal: Organized elastic fibers
- Photoaged: Disorganized, clumped material
- Abnormal elastin gene expression
- Lysyl oxidase-like 1 (LOXL1) involvement

### Senescent Cell Accumulation
**SASP Components**:
- Pro-inflammatory: IL-1, IL-6, IL-8
- Matrix-degrading: MMPs
- Growth factors: VEGF, EGF
- Chemokines: CCL2, CXCL1

**Effects of SASP**:
- Paracrine senescence spread
- Chronic inflammation
- ECM degradation
- Impaired wound healing

## Molecular Targets for Therapy

### Retinoid Receptor Biology
**Receptors**:
- RARα, β, γ (retinoic acid receptors)
- RXRα, β, γ (retinoid X receptors)
- Heterodimerize for function

**Target Genes**:
- Procollagen I (increased)
- MMP-1 (decreased via AP-1 inhibition)
- TGF-β pathway activation
- Keratinocyte differentiation genes

**Receptor Agonist Development**:
- RAR-selective agonists
- Reduced irritation potential
- Improved efficacy profiles
- Tazarotene, adapalene, trifarotene

### Growth Factor Signaling
**TGF-β Pathway**:
- Key regulator of ECM synthesis
- Reduced with age
- Retinoids upregulate
- Potential direct augmentation

**EGF/FGF Pathways**:
- Keratinocyte proliferation
- Wound healing relevance
- Topical growth factors (limited penetration)

### Antioxidant Strategies
**Endogenous Systems**:
- Superoxide dismutase (SOD)
- Catalase
- Glutathione peroxidase
- Decline with age

**Exogenous Supplementation**:
- Vitamin C (critical for collagen)
- Vitamin E (lipid protection)
- Coenzyme Q10 (mitochondrial)
- Polyphenols (multiple mechanisms)

## Advanced Treatment Modalities

### Picosecond Lasers
**Mechanism**:
- Ultra-short pulses (10^-12 seconds)
- Laser-induced optical breakdown (LIOB)
- Photoacoustic effect
- Less thermal damage than nanosecond

**Applications**:
- Pigmentation (lentigines, melasma)
- Skin rejuvenation
- Acne scars
- Multiple wavelengths available

### Combination Energy Devices
- Sequential treatments
- Laser + radiofrequency
- Different tissue depths
- Synergistic collagen remodeling

### Microneedling + PRP
**Microneedling**:
- Controlled micro-injury
- Collagen induction therapy
- Delivery of topicals enhanced

**Platelet-Rich Plasma**:
- Concentrated growth factors
- Paracrine effects
- Combined with microneedling
- Variable evidence quality

### Poly-L-Lactic Acid
**Mechanism**:
- Biostimulator, not filler
- Induces controlled inflammation
- Neocollagenesis over months
- FDA approved for volume loss

**Clinical Use**:
- Global facial volume restoration
- Multiple treatment sessions
- Results at 1-3 months post-treatment
- Duration: 2+ years

## Emerging Interventions

### Senolytic Therapies
**Concept**:
- Selective elimination of senescent cells
- Improve tissue function
- Reduce inflammaging

**Agents Under Investigation**:
- Dasatinib + Quercetin
- Fisetin
- Navitoclax (BCL-2 family inhibitor)
- Topical applications research

### NAD+ Precursors
**Rationale**:
- NAD+ declines with age
- Critical for SIRT1 activation
- Mitochondrial function
- DNA repair (PARPs)

**Agents**:
- Nicotinamide (niacinamide)
- Nicotinamide riboside
- NMN (nicotinamide mononucleotide)
- Topical and oral formulations

### Stem Cell-Derived Products
- Conditioned media
- Exosomes/extracellular vesicles
- Growth factors
- Limited clinical evidence currently`,
      keyTerms: [
        { term: 'telomere', definition: 'Protective cap at chromosome ends that shortens with age and cell division' },
        { term: 'senolytic', definition: 'Drug that selectively eliminates senescent cells' },
        { term: 'LIOB', definition: 'Laser-induced optical breakdown - mechanism of picosecond lasers' },
        { term: 'biostimulator', definition: 'Injectable that stimulates natural collagen production (e.g., poly-L-lactic acid)' },
        { term: 'NAD+', definition: 'Nicotinamide adenine dinucleotide - coenzyme critical for energy metabolism and aging' },
      ],
      clinicalNotes: 'Poly-L-lactic acid provides gradual natural-appearing results but requires patience (weeks to months). Senolytic therapies are promising but not yet ready for clinical use. NAD+ precursors (topical niacinamide) have established benefits in skin aging.',
    },
    5: {
      level: 5,
      summary: 'Expert-level anti-aging dermatology integrates precision diagnostics, regenerative medicine, and emerging longevity science for personalized skin aging management.',
      explanation: `## Precision Aging Assessment

### Biomarkers of Skin Aging
**Molecular Markers**:
- Telomere length (cellular age)
- Senescence markers (p16, p21)
- DNA damage (8-oxo-dG)
- Collagen fragmentation products
- MMP/TIMP ratios

**Functional Markers**:
- Transepidermal water loss (TEWL)
- Sebum production
- Elasticity measurements
- Hydration status

**Imaging Biomarkers**:
- Ultrasound dermal thickness
- OCT collagen organization
- Multiphoton collagen/elastin
- AI-assisted image analysis

### Exposome Assessment
**Environmental Factors**:
- Lifetime UV exposure estimation
- Air pollution exposure
- Smoking history
- Diet and nutrition
- Sleep patterns

**Integration**:
- Comprehensive exposure history
- Genetic susceptibility factors
- Personalized risk profiles
- Targeted prevention strategies

## Advanced Therapeutics

### Epigenetic Modulation
**Concept**:
- DNA methylation changes with age
- Histone modifications
- Potentially reversible
- "Epigenetic clocks" (Horvath)

**Approaches**:
- HDAC inhibitors
- Sirtuin activators (resveratrol)
- DNA methyltransferase modulators
- Emerging topical applications

### Proteostasis Enhancement
**Protein Quality Control**:
- Autophagy activation
- Proteasome function
- Chaperone proteins
- Declines with age

**Therapeutic Strategies**:
- Rapamycin/mTOR inhibition (autophagy)
- Trehalose (autophagy inducer)
- HSP inducers
- Research stage primarily

### Regenerative Medicine

**Stem Cell Therapies**:
- Autologous adipose-derived
- Fibroblast injection
- Stem cell secretome
- Exosome delivery

**Tissue Engineering**:
- Bioengineered skin
- Scaffolds with growth factors
- 3D bioprinting
- Organoid models

### Gene Therapy Approaches
**Targets**:
- Telomerase activation
- Collagen gene delivery
- MMP inhibition
- Growth factor expression

**Delivery**:
- Viral vectors
- Nanoparticles
- mRNA therapeutics
- CRISPR applications (research)

## Complex Treatment Planning

### Comprehensive Rejuvenation Protocol
**Assessment Phase**:
1. Detailed history (exposome)
2. Clinical examination (Glogau, etc.)
3. Photography (standardized)
4. Imaging (as indicated)
5. Patient goals and expectations

**Foundation Phase (Months 1-3)**:
- Optimize sun protection
- Start retinoid (graded introduction)
- Antioxidant serum (vitamin C)
- Basic skincare optimization

**Active Treatment Phase (Months 3-12)**:
- Energy-based devices (laser, RF)
- Neuromodulators
- Fillers for volume loss
- Biostimulators

**Maintenance Phase (Ongoing)**:
- Continued topical program
- Periodic energy-based treatments
- Injectable maintenance
- Regular assessment and adjustment

### Treatment Selection by Concern

| Concern | First-Line | Second-Line | Third-Line |
|---------|------------|-------------|------------|
| Fine lines | Retinoid, botox | Non-ablative laser | Fractional ablative |
| Deep wrinkles | Fillers, botox | Fractional ablative | Surgical |
| Dyspigmentation | Retinoid, IPL | Laser | Chemical peel |
| Texture | AHA, retinoid | Microneedling | Fractional laser |
| Laxity | RF, HIFU | Laser | Thread lift, surgery |
| Volume loss | Fillers | Biostimulators | Fat transfer |

### Managing Complications
**Energy Device Complications**:
- Burns: Immediate cooling, wound care
- PIH: Prevention with pre-treatment, careful parameters
- Scarring: Early recognition, intervention
- Infection: Prophylaxis in high-risk

**Injectable Complications**:
- Vascular occlusion: Emergency (hyaluronidase)
- Granulomas: Intralesional steroid, excision
- Migration: Observation, hyaluronidase
- Infection: Antibiotics, possible drainage

## Longevity Science Integration

### Systemic Interventions Affecting Skin
**Caloric Restriction Mimetics**:
- Metformin (AMPK activation)
- Rapamycin (mTOR inhibition)
- Resveratrol (SIRT activation)
- Systemic vs topical effects

**NAD+ Pathway Modulation**:
- Nicotinamide riboside supplementation
- NMN (nicotinamide mononucleotide)
- CD38 inhibitors
- SIRT1 activation

### Cellular Reprogramming
**Yamanaka Factors**:
- Oct4, Sox2, Klf4, c-Myc
- Partial reprogramming concept
- Epigenetic rejuvenation
- Altos Labs, other companies pursuing

**Skin Applications**:
- Partial reprogramming research
- Fibroblast rejuvenation
- Stem cell function restoration
- Early stage research

### Microbiome and Aging
**Skin Microbiome**:
- Changes with age
- Diversity reduction
- Inflammation association
- Potential therapeutic target

**Interventions**:
- Prebiotic skincare
- Probiotic applications
- Postbiotics (bacterial products)
- Microbiome transplantation (research)

## Future Directions

### Personalized Anti-Aging
- Genetic profiling
- Biomarker monitoring
- AI-driven treatment selection
- Real-time outcome tracking

### Technology Integration
- Smart devices for monitoring
- Telemedicine optimization
- AI image analysis
- At-home treatment devices

### Regulatory Evolution
- Regenerative medicine frameworks
- Combination product pathways
- Personalized therapy regulations
- International harmonization`,
      keyTerms: [
        { term: 'epigenetic clock', definition: 'DNA methylation-based measurement of biological age' },
        { term: 'senotherapeutics', definition: 'Drugs targeting cellular senescence including senolytics and senomorphics' },
        { term: 'Yamanaka factors', definition: 'Four transcription factors capable of reprogramming cells to pluripotency' },
        { term: 'proteostasis', definition: 'Cellular protein homeostasis including synthesis, folding, and degradation' },
        { term: 'exposome', definition: 'Totality of environmental exposures affecting health and aging' },
      ],
      clinicalNotes: `Expert anti-aging management principles:
1. Foundation of retinoid + antioxidant + sunscreen is evidence-based
2. Multi-modality approach addresses different aspects of aging
3. Treatment timing matters - prevention easier than correction
4. Manage expectations - rejuvenation is improvement, not reversal
5. Longevity science offering new paradigms (senolytics, NAD+)
6. Personalized approach based on genetics, exposome, goals
7. Safety paramount - complication prevention and management essential`,
    },
  },

  media: [
    {
      id: 'aging-comparison',
      type: 'image',
      filename: 'intrinsic-vs-photoaging.jpg',
      title: 'Intrinsic vs Photoaging',
      description: 'Comparison of sun-protected vs sun-exposed skin aging',
    },
    {
      id: 'aging-mechanisms',
      type: 'diagram',
      filename: 'aging-molecular-pathways.svg',
      title: 'Molecular Mechanisms of Skin Aging',
      description: 'Diagram of key pathways in intrinsic and extrinsic aging',
    },
  ],

  citations: [
    {
      id: 'aging-review',
      type: 'article',
      title: 'Mechanisms of Skin Aging',
      source: 'Journal of Investigative Dermatology',
    },
    {
      id: 'photoaging-guidelines',
      type: 'article',
      title: 'Evidence-Based Treatment of Photoaging',
      source: 'Dermatologic Surgery',
    },
  ],

  crossReferences: [
    { targetId: 'dermatology-sun-protection', targetType: 'topic', relationship: 'related', label: 'Sun Protection' },
    { targetId: 'dermatology-skin-anatomy', targetType: 'structure', relationship: 'related', label: 'Skin Anatomy' },
    { targetId: 'dermatology-scar-management', targetType: 'topic', relationship: 'related', label: 'Scar Management' },
  ],

  tags: {
    systems: ['integumentary'],
    topics: ['dermatology', 'aging', 'cosmetic-dermatology'],
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

export default skinAgingContent;
