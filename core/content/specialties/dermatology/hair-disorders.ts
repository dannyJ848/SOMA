/**
 * Hair Disorders - Comprehensive Educational Content
 *
 * Covers hair biology, alopecia, and other hair-related conditions.
 */

import { EducationalContent } from '../../types';

export const hairDisordersContent: EducationalContent = {
  id: 'dermatology-hair-disorders',
  type: 'condition',
  name: 'Hair Disorders',
  alternateNames: ['Alopecia', 'Hair Loss', 'Trichologic Disorders'],

  levels: {
    1: {
      level: 1,
      summary: 'Hair problems like hair loss can happen for many reasons, and most can be treated.',
      explanation: `Hair is an important part of how we look and feel. When something goes wrong with our hair, it can be upsetting, but there are usually ways to help.

**Normal Hair Growth:**
- Hair grows about half an inch per month
- Each hair grows for 2-6 years before falling out
- It is normal to lose 50-100 hairs per day

**Common Hair Problems:**

**Thinning Hair (Androgenetic Alopecia)**
- The most common cause of hair loss
- Runs in families
- In men: Receding hairline and bald spots
- In women: Thinning all over, especially on top

**Patchy Hair Loss (Alopecia Areata)**
- Round, smooth bald patches
- Caused by the immune system
- Hair often grows back

**Temporary Hair Loss (Telogen Effluvium)**
- Lots of hair falls out at once
- Happens after stress, illness, or having a baby
- Hair usually grows back in 6-12 months

**What Can Help:**
- Special shampoos and treatments
- Medications (minoxidil, finasteride)
- Addressing the underlying cause
- Time and patience

**When to See a Doctor:**
- Sudden or patchy hair loss
- Hair loss with itching, pain, or rash
- Hair loss with other symptoms`,
      keyTerms: [
        { term: 'alopecia', definition: 'The medical term for hair loss' },
        { term: 'hair follicle', definition: 'The tiny tube in skin where hair grows from' },
        { term: 'minoxidil', definition: 'A treatment applied to the scalp to help hair grow' },
      ],
      analogies: [
        'Hair follicles are like tiny factories that make hair strands.',
        'Hair growth cycles are like seasons - there is a time to grow, a time to rest, and a time to shed.',
      ],
      examples: [
        'A man in his 30s notices his hairline receding like his father - this is likely genetic hair loss.',
        'A woman finds a smooth, round bald patch on her scalp - this could be alopecia areata.',
      ],
    },
    2: {
      level: 2,
      summary: 'Hair disorders encompass a range of conditions affecting the hair follicle, including androgenetic alopecia, alopecia areata, telogen effluvium, and scarring alopecias.',
      explanation: `Hair disorders are among the most common dermatologic complaints, affecting quality of life and psychological well-being.

## Hair Biology Basics

### Hair Cycle
- **Anagen** (growth): 2-6 years, 85-90% of hair
- **Catagen** (regression): 2-3 weeks, 1%
- **Telogen** (rest): 3-4 months, 10-15%
- **Exogen** (shedding): Release of telogen hair

### Normal Hair Loss
- 50-100 hairs/day is normal
- Varies with hair density and cycle synchrony

## Non-Scarring Alopecias

### Androgenetic Alopecia (AGA)
**Male Pattern**:
- Hamilton-Norwood classification
- Bitemporal recession and vertex thinning
- DHT-mediated follicular miniaturization

**Female Pattern**:
- Ludwig classification
- Diffuse thinning, maintained frontal hairline
- Hormonal and genetic factors

**Treatment**:
- Minoxidil (topical)
- Finasteride/dutasteride (men)
- Spironolactone (women)
- Low-level laser therapy
- Hair transplantation

### Alopecia Areata
- Autoimmune attack on hair follicles
- Round, smooth patches of hair loss
- "Exclamation point" hairs at margins
- May progress to totalis (scalp) or universalis (body)

**Treatment**:
- Intralesional corticosteroids
- Topical immunotherapy
- JAK inhibitors (baricitinib, ritlecitinib)

### Telogen Effluvium
- Diffuse shedding 2-4 months after trigger
- Triggers: Childbirth, surgery, illness, stress, medications
- Self-limited, resolves when trigger removed
- Hair pull test positive (>6 hairs)

## Scarring Alopecias
- Permanent destruction of hair follicles
- Requires early diagnosis and treatment
- Types: Lichen planopilaris, frontal fibrosing alopecia, CCCA

## Diagnostic Approach
- History: Onset, pattern, triggers, family history
- Examination: Distribution, scalp condition, hair pull test
- Trichoscopy: Dermoscopic examination of scalp
- Labs: TSH, ferritin, vitamin D, hormones (as indicated)
- Biopsy: For scarring alopecia or unclear diagnosis`,
      keyTerms: [
        { term: 'androgenetic alopecia', definition: 'Genetic hair loss caused by sensitivity to androgens (hormones)', pronunciation: 'an-droh-jeh-NET-ik al-oh-PEE-sha' },
        { term: 'telogen effluvium', definition: 'Temporary hair shedding triggered by stress, illness, or hormonal changes', pronunciation: 'TEL-oh-jen ef-LOO-vee-um' },
        { term: 'follicular miniaturization', definition: 'Progressive shrinking of hair follicles leading to thinner, shorter hairs' },
        { term: 'trichoscopy', definition: 'Dermoscopic examination of scalp and hair' },
      ],
      analogies: [
        'Follicular miniaturization is like a factory gradually producing smaller and smaller products until it shuts down.',
        'Telogen effluvium is like a reset button - the body pushes hairs into resting phase during stress.',
      ],
    },
    3: {
      level: 3,
      summary: 'Hair disorders require understanding of hair follicle biology, immune-mediated pathology, and hormonal influences to guide targeted diagnosis and evidence-based treatment.',
      explanation: `## Hair Follicle Biology

### Follicle Structure
- **Infundibulum**: Upper portion, opens to skin surface
- **Isthmus**: Middle portion, sebaceous gland attachment
- **Inferior segment**: Bulb, matrix, dermal papilla
- **Bulge**: Stem cell niche at arrector pili attachment

### Cycle Regulation
**Anagen initiation**:
- Wnt/beta-catenin signaling
- Dermal papilla activation
- Stem cell proliferation

**Catagen transition**:
- TGF-beta, FGF5 signaling
- Matrix apoptosis
- Follicle regression

**Telogen maintenance**:
- BMP signaling
- Hair retained in follicle
- Waiting for next cycle trigger

### Hair Pigmentation
- Melanocyte stem cells in bulge
- Melanocyte activation during anagen
- Melanin transfer to hair cortex
- Graying: Stem cell exhaustion, oxidative stress

## Androgenetic Alopecia Pathophysiology

### DHT Mechanism
- Testosterone → DHT (5-alpha reductase)
- DHT binds androgen receptors in follicle
- Altered gene expression
- Shortened anagen, follicular miniaturization

### Genetic Factors
- Polygenic inheritance
- AR gene (androgen receptor) polymorphisms
- 5-alpha reductase gene variants
- Multiple other susceptibility loci

### Treatment Mechanisms
**Minoxidil**:
- Potassium channel opener
- Prolongs anagen phase
- Increases follicle size
- Direct and indirect vasodilation
- 2% and 5% topical solutions; oral off-label

**5-Alpha Reductase Inhibitors**:
- Finasteride: Type II inhibitor
- Dutasteride: Type I and II inhibitor
- Reduce DHT levels 60-70%
- Women: Contraindicated in pregnancy

## Alopecia Areata Immunopathogenesis

### Immune Privilege Collapse
- Hair follicle is immune privileged site
- MHC class I downregulation normally
- In AA: Collapse of privilege
- Interferon-gamma, CD8+ T cell infiltration

### Key Pathways
- JAK-STAT signaling crucial
- IFN-gamma → JAK1/2 → STAT1
- CD8+NKG2D+ T cells attack follicle
- IL-15 amplifies response

### JAK Inhibitors
- Block cytokine signaling
- Baricitinib (JAK1/2): FDA approved
- Ritlecitinib (JAK3/TEC): FDA approved
- 30-40% achieve significant regrowth
- Relapse common after discontinuation

## Scarring Alopecias

### Lichen Planopilaris (LPP)
- Lymphocytic scarring alopecia
- Perifollicular erythema, scale
- Loss of follicular ostia
- Associated with lichen planus

### Frontal Fibrosing Alopecia (FFA)
- LPP variant, predominantly women
- Frontal and temporal hairline recession
- Eyebrow, eyelash loss common
- Increasing incidence

### Central Centrifugal Cicatricial Alopecia (CCCA)
- Most common in African American women
- Starts at vertex, spreads outward
- Associated with hair care practices
- PADI3 gene mutations in some

### Treatment Principles
- Anti-inflammatory (steroids, hydroxychloroquine)
- Stop progression, cannot regrow scarred follicles
- Hair restoration surgery after stable

## Diagnostic Workup

### Trichoscopy Findings
| Condition | Features |
|-----------|----------|
| AGA | Hair diameter diversity, yellow dots, single-hair units |
| Alopecia areata | Yellow dots, black dots, exclamation point hairs |
| LPP | Perifollicular scale, blue-gray dots, hair tuft loss |
| Telogen effluvium | No specific features, normal pattern |

### Scalp Biopsy
- Two 4mm punch biopsies
- One for horizontal sections (follicle count)
- One for vertical sections (inflammatory pattern)
- Distinguishes scarring from non-scarring`,
      keyTerms: [
        { term: 'dermal papilla', definition: 'Mesenchymal structure at base of follicle that directs hair growth' },
        { term: 'immune privilege', definition: 'State where immune responses are suppressed, protecting the hair follicle' },
        { term: 'JAK inhibitor', definition: 'Drug blocking Janus kinase signaling, effective in alopecia areata' },
        { term: 'cicatricial alopecia', definition: 'Scarring hair loss with permanent destruction of follicles', pronunciation: 'sik-ah-TRISH-al' },
        { term: 'lichen planopilaris', definition: 'Inflammatory scarring alopecia related to lichen planus', pronunciation: 'LY-ken plan-oh-pill-AIR-is' },
      ],
      clinicalNotes: 'JAK inhibitors have transformed alopecia areata treatment but relapse is common after stopping. Scalp biopsy is essential for scarring alopecia diagnosis. Early treatment of scarring alopecias is crucial to prevent permanent hair loss.',
    },
    4: {
      level: 4,
      summary: 'Advanced understanding of hair disorders encompasses molecular signaling, stem cell biology, precision therapeutics, and emerging regenerative approaches.',
      explanation: `## Hair Follicle Stem Cell Biology

### Stem Cell Populations
**Bulge Stem Cells**:
- CD34+, K15+, Lgr5-
- Quiescent reservoir
- Multipotent: Follicle, sebaceous gland, epidermis
- Activated at each anagen initiation

**Hair Germ Progenitors**:
- Lgr5+, Lhx2+
- Actively cycling
- Direct hair formation
- Located at base of telogen follicle

**Dermal Papilla Cells**:
- Mesenchymal stem cell characteristics
- Instruct epithelial stem cell behavior
- Wnt secretion critical
- Can be cultured for research/therapy

### Stem Cell Niche Interactions
- DP-epithelial signaling (Wnt, BMPs)
- Arrector pili muscle as niche component
- Vasculature and innervation
- Adipocyte precursors influence cycling

## Molecular Mechanisms

### Wnt Signaling in Hair Cycling
- Wnt ligands activate beta-catenin
- Nuclear translocation of beta-catenin
- Target genes: Lef1, Lgr5, cyclins
- Essential for anagen initiation
- Wnt agonists as potential therapeutics

### BMP Signaling
- BMP2/4 maintain telogen
- BMP antagonists (Noggin) permit anagen
- Balance determines cycle timing
- Dermal papilla modulates BMP levels

### Notch Pathway
- Regulates follicle fate decisions
- Hair shaft vs inner root sheath
- Jagged1 in matrix cells
- Notch receptor in pre-cortex

## Advanced Therapeutics

### Low-Level Laser Therapy (LLLT)
- Photobiomodulation
- 650-900nm wavelength
- Mitochondrial cytochrome c oxidase activation
- FDA cleared devices
- Modest efficacy in AGA

### Platelet-Rich Plasma (PRP)
- Concentrated growth factors
- PDGF, VEGF, EGF, TGF-beta
- Injected into scalp
- Variable evidence, standardization issues

### Emerging Approaches
**JAK Inhibitors for AGA**:
- Topical formulations in development
- May promote growth through Wnt activation
- Less systemic exposure

**Prostaglandin Analogs**:
- Bimatoprost, latanoprost
- PGF2-alpha promotes anagen
- Limited evidence for scalp

**Hair Follicle Neogenesis**:
- Wnt pathway manipulation
- Stem cell transplantation
- Dermal papilla cell injection
- Research stage

### Anti-Androgen Strategies in Women
**Spironolactone**:
- Androgen receptor antagonist
- Inhibits 5-alpha reductase
- 100-200mg daily for AGA
- Monitor potassium

**Bicalutamide**:
- Non-steroidal anti-androgen
- Off-label use
- Hepatotoxicity monitoring
- More potent AR blockade

## Complex Cases

### Hair Loss in Systemic Disease
**Thyroid Disorders**:
- Both hypo- and hyperthyroidism cause diffuse loss
- Telogen effluvium pattern
- Reverses with treatment

**Iron Deficiency**:
- Ferritin <40 ng/mL associated with hair loss
- May trigger/exacerbate telogen effluvium
- Supplementation may help even without anemia

**Autoimmune Diseases**:
- Lupus: Scarring and non-scarring patterns
- Dermatomyositis: Scalp dermatitis
- Scleroderma: Scarring alopecia

### Drug-Induced Alopecia
**Anagen Effluvium**:
- Chemotherapy (immediate)
- Rapidly dividing matrix cells affected
- Usually reversible

**Telogen Effluvium**:
- Retinoids, anticoagulants, beta-blockers
- 2-4 months after starting drug
- Reversible with discontinuation

**Pattern Alopecia-like**:
- Testosterone, anabolic steroids
- May unmask genetic susceptibility

## Hair Transplantation

### Techniques
**Follicular Unit Transplantation (FUT)**:
- Strip excision from donor area
- Dissection into follicular units
- Linear scar

**Follicular Unit Extraction (FUE)**:
- Individual follicle extraction
- No linear scar
- More time-consuming
- Robotic assistance available

### Considerations
- Donor dominance principle
- Follicle survival and growth
- Multiple sessions may be needed
- Adjunctive medical therapy important`,
      keyTerms: [
        { term: 'bulge stem cells', definition: 'Hair follicle stem cells residing in the bulge region that regenerate the follicle' },
        { term: 'dermal papilla', definition: 'Mesenchymal cells at follicle base that direct hair growth and cycling' },
        { term: 'photobiomodulation', definition: 'Use of light energy to stimulate cellular function, basis of LLLT' },
        { term: 'platelet-rich plasma', definition: 'Autologous blood product with concentrated growth factors injected for hair growth (PRP)' },
        { term: 'follicular unit extraction', definition: 'Hair transplant technique harvesting individual follicular units (FUE)' },
      ],
      clinicalNotes: 'PRP evidence is variable - patient selection and preparation protocols matter. Ferritin levels should be optimized even without frank anemia. JAK inhibitors for AGA remain investigational but promising. Hair transplant success depends on adequate donor density and realistic expectations.',
    },
    5: {
      level: 5,
      summary: 'Expert-level management of hair disorders integrates precision diagnostics, novel therapeutics, regenerative medicine, and personalized treatment strategies.',
      explanation: `## Precision Diagnostics

### Advanced Trichoscopy
**Immersion vs Polarized**:
- Different features visible
- Vascular patterns better with immersion
- Pigment better with polarized

**AI-Assisted Analysis**:
- Automated hair counting
- Diameter measurement
- Pattern recognition
- Longitudinal monitoring

### Molecular Diagnostics
**Genetic Testing**:
- PADI3, LIPH (CCCA susceptibility)
- HR gene (atrichia with papules)
- Research panels for AGA prediction
- Pharmacogenomics for treatment selection

**Biomarkers**:
- Serum ferritin, vitamin D (optimization)
- Thyroid function
- Androgens (testosterone, DHEAS)
- Scalp cytokines (research)

### Histopathologic Nuances
- Horizontal sections critical
- Terminal:vellus hair ratio
- Inflammatory cell characterization
- Fibrosis assessment
- Direct immunofluorescence (scarring alopecias)

## Novel Therapeutics

### JAK Inhibitor Landscape
| Agent | Target | Indication | Notes |
|-------|--------|------------|-------|
| Baricitinib | JAK1/2 | AA (FDA approved) | Oral, systemic effects |
| Ritlecitinib | JAK3/TEC | AA (FDA approved) | More selective |
| Tofacitinib | Pan-JAK | Off-label AA | Variable efficacy |
| Topical JAK | Various | Development | Local delivery |

### Regenerative Approaches
**Stem Cell Therapies**:
- Autologous stem cell injection
- Dermal papilla cell culture and injection
- Adipose-derived stem cells
- Extracellular vesicles/exosomes

**Tissue Engineering**:
- 3D printed hair follicles
- Organoid culture systems
- Bioengineered dermal papilla
- Still early research

**Wnt Pathway Modulators**:
- Small molecule Wnt agonists
- GSK3 inhibitors
- Clinical trials ongoing
- Potential for follicle neogenesis

### Gene Therapy
- CRISPR editing of AR (research)
- AAV delivery systems
- Safety and delivery challenges
- Future potential for monogenic disorders

## Complex Clinical Scenarios

### Alopecia Areata Management
**Risk Stratification**:
- Duration <1 year: Better prognosis
- Age of onset <10: Higher risk of progression
- Nail involvement: Worse prognosis
- AT/AU: Lower response rates

**Treatment Algorithm**:
1. Limited disease: IL steroids, topical therapy
2. Extensive: Consider JAK inhibitors
3. Refractory: Combination approaches, clinical trials
4. Psychological support throughout

**Long-term JAK Management**:
- Monitoring: CBC, lipids, liver function
- Infection screening (TB, hepatitis)
- VTE risk discussion
- Relapse prevention strategies

### Scarring Alopecia Management
**Active Inflammation**:
- Potent topical/IL steroids
- Hydroxychloroquine
- Doxycycline (FFA)
- Oral steroids (severe flares)

**Combination Therapy**:
- HCQ + topical steroids
- HCQ + low-dose oral steroids
- Dual 5-AR inhibition (FFA)

**Refractory Cases**:
- Mycophenolate mofetil
- Ciclosporin
- Methotrexate
- Rituximab (case reports)

### Hair Loss in Cancer Treatment
**Prevention**:
- Scalp cooling/hypothermia
- Minoxidil (variable evidence)
- Timing of cooling critical

**Recovery**:
- Most regrowth within 6 months
- Texture/color changes common
- Persistent alopecia rare

## Psychosocial Considerations

### Impact Assessment
- Quality of life questionnaires
- Depression/anxiety screening
- Body image assessment
- Support group referral

### Counseling Approaches
- Realistic expectations
- Timeline for improvement
- Wigs and hairpieces
- Acceptance strategies

### Special Populations
**Pediatric**:
- Family counseling
- School accommodations
- Limited treatment options
- Psychological support priority

**Cultural Considerations**:
- Significance of hair varies culturally
- Hair care practices (CCCA risk)
- Treatment preferences
- Religious considerations

## Future Directions

### Bioengineered Hair
- Hair follicle organoids
- 3D bioprinting
- Scaffold-based regeneration
- Timeline: 10-20 years

### Precision Medicine
- Genetic risk scores
- Treatment response prediction
- Personalized regimens
- Biomarker-guided therapy

### Prevention Strategies
- Early intervention in high-risk
- Lifestyle modification evidence
- Pharmacoprevention
- Scalp microbiome modulation`,
      keyTerms: [
        { term: 'hair follicle organoid', definition: 'Miniature hair follicle structure grown in laboratory from stem cells' },
        { term: 'scalp cooling', definition: 'Hypothermia technique to reduce chemotherapy-induced alopecia' },
        { term: 'ritlecitinib', definition: 'JAK3/TEC inhibitor FDA approved for alopecia areata' },
        { term: 'pharmacogenomics', definition: 'Study of genetic factors affecting drug response, guiding personalized treatment' },
      ],
      clinicalNotes: `Expert management considerations:
1. JAK inhibitor selection should consider efficacy, safety profile, and cost
2. Scalp biopsy interpretation requires dermatopathology expertise
3. Scarring alopecias need aggressive early treatment to preserve follicles
4. Psychological support is essential component of hair disorder management
5. Hair transplant timing in scarring alopecia requires disease stability
6. Regenerative approaches remain investigational but rapidly evolving
7. Multimodal therapy often superior to single agents`,
    },
  },

  media: [
    {
      id: 'hair-cycle',
      type: 'diagram',
      filename: 'hair-growth-cycle.svg',
      title: 'Hair Growth Cycle',
      description: 'Diagram of anagen, catagen, and telogen phases',
    },
    {
      id: 'alopecia-patterns',
      type: 'diagram',
      filename: 'alopecia-classification.svg',
      title: 'Alopecia Classification',
      description: 'Hamilton-Norwood and Ludwig classification systems',
    },
  ],

  citations: [
    {
      id: 'jaad-alopecia',
      type: 'article',
      title: 'Guidelines of Care for the Management of Alopecia Areata',
      source: 'Journal of the American Academy of Dermatology',
    },
    {
      id: 'fitzpatrick-hair',
      type: 'textbook',
      title: 'Biology of Hair and Hair Disorders',
      source: 'Fitzpatrick\'s Dermatology',
    },
  ],

  crossReferences: [
    { targetId: 'dermatology-skin-anatomy', targetType: 'structure', relationship: 'related', label: 'Skin Anatomy' },
    { targetId: 'dermatology-nail-disorders', targetType: 'condition', relationship: 'related', label: 'Nail Disorders' },
  ],

  tags: {
    systems: ['integumentary'],
    topics: ['dermatology', 'endocrinology', 'autoimmunity'],
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

export default hairDisordersContent;
