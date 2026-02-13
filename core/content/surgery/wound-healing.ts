/**
 * Wound Healing
 *
 * Comprehensive content covering the physiology of wound healing,
 * stages of repair, factors affecting healing, and clinical considerations.
 */

import { EducationalContent } from '../types';

export const woundHealing: EducationalContent = {
  id: 'surgery-wound-healing',
  type: 'process',
  name: 'Wound Healing',
  alternateNames: ['Tissue Repair', 'Wound Repair', 'Healing Process'],

  levels: {
    1: {
      level: 1,
      summary: 'When you get a cut or have surgery, your body repairs itself through a process called wound healing that happens in stages.',
      explanation: `When your skin is cut or injured, your body has an amazing ability to fix itself. This process is called wound healing, and it happens in stages, like building a house.

**The Four Stages of Healing:**

1. **Stopping the Bleeding (Minutes to Hours)**
   - Blood vessels tighten to slow bleeding
   - Blood clots form like a natural bandage
   - This creates a scab to protect the wound

2. **Fighting Infection (Days 1-4)**
   - Your body sends special cells to clean the wound
   - The area may look red, warm, and swollen
   - This is your immune system working!

3. **Building New Tissue (Days 4-21)**
   - New skin starts growing from the edges
   - The wound slowly fills in with new tissue
   - New blood vessels bring nutrients for healing

4. **Getting Stronger (Weeks to Months)**
   - The scar tissue gets stronger over time
   - The redness fades
   - The scar may flatten and become less noticeable

**What Helps Wounds Heal:**
- Keeping the wound clean and covered
- Eating healthy foods with protein and vitamins
- Not smoking
- Getting enough sleep
- Following your doctor's instructions

**Warning Signs to Watch For:**
- Increasing pain or redness
- Pus or bad smell
- Fever
- Wound opening up

These might mean the wound is infected and you need to see a doctor.`,
      keyTerms: [
        { term: 'wound', definition: 'An injury to the skin or body tissues' },
        { term: 'healing', definition: 'The process of your body repairing an injury' },
        { term: 'scab', definition: 'The hard crust that forms over a wound to protect it' },
        { term: 'scar', definition: 'The mark left on the skin after a wound heals' },
      ],
      analogies: [
        'Wound healing is like road construction - first you stop traffic (bleeding), then clear the debris (clean the wound), build a new road (new tissue), and finally pave it smooth (scar formation).',
        'A blood clot is like a natural band-aid that your body makes from the inside.',
        'The redness and swelling around a healing wound is like calling in a cleanup crew to remove any germs.',
      ],
      examples: [
        'A small cut on your finger might heal in about a week, while a surgical incision might take several weeks.',
        'Scraping your knee creates a scab that protects the wound while new skin grows underneath.',
      ],
    },
    2: {
      level: 2,
      summary: 'Wound healing occurs through overlapping phases: hemostasis, inflammation, proliferation, and remodeling, each with specific cellular processes.',
      explanation: `## The Four Phases of Wound Healing

### Phase 1: Hemostasis (Immediate - Minutes)
**Goal:** Stop the bleeding

- Blood vessels constrict (vasoconstriction)
- Platelets stick to exposed collagen
- Clotting cascade forms a fibrin mesh
- Result: Blood clot seals the wound

### Phase 2: Inflammation (Days 1-4)
**Goal:** Clean the wound and fight infection

- Blood vessels dilate, bringing more blood flow
- White blood cells arrive:
  - Neutrophils (first responders, kill bacteria)
  - Macrophages (clean up debris, signal for repair)
- Signs: Redness, warmth, swelling, pain
- This is a normal and necessary part of healing

### Phase 3: Proliferation (Days 4-21)
**Goal:** Rebuild the tissue

**Key processes:**
- **Granulation**: New tissue fills the wound (looks pink and bumpy)
- **Angiogenesis**: New blood vessels grow
- **Epithelialization**: New skin cells cover the surface
- **Contraction**: Wound edges pull together

**Important cells:**
- Fibroblasts: Make collagen (the main building block)
- Keratinocytes: Form new skin surface
- Endothelial cells: Create blood vessels

### Phase 4: Remodeling (3 weeks - 1+ years)
**Goal:** Strengthen and reorganize

- Collagen reorganizes along stress lines
- Scar tissue matures
- Strength increases (reaches 80% of original at 3 months)
- Scar appearance improves over time

## Types of Wound Healing

| Type | Description | Example |
|------|-------------|---------|
| Primary Intention | Wound edges brought together | Surgical incision with stitches |
| Secondary Intention | Wound left open to heal from bottom | Pressure ulcer, abscess cavity |
| Tertiary Intention | Wound left open, then closed later | Infected wound cleaned first |

## Factors Affecting Healing

**Help Healing:**
- Good nutrition (protein, vitamin C, zinc)
- Adequate blood flow
- Moist wound environment
- Proper wound care

**Slow Healing:**
- Infection
- Diabetes
- Smoking
- Poor nutrition
- Certain medications (steroids)
- Older age`,
      keyTerms: [
        { term: 'hemostasis', definition: 'The process of stopping bleeding through clotting' },
        { term: 'inflammation', definition: 'The body\'s protective response involving redness, swelling, and warmth' },
        { term: 'proliferation', definition: 'The phase where new tissue and blood vessels grow' },
        { term: 'granulation tissue', definition: 'Pink, bumpy new tissue that fills a healing wound' },
        { term: 'fibroblasts', definition: 'Cells that make collagen, the main protein in healing tissue' },
      ],
      analogies: [
        'Granulation tissue is like scaffolding - it provides structure for new skin to grow on.',
        'Fibroblasts are like construction workers laying down collagen bricks to rebuild the wound.',
      ],
    },
    3: {
      level: 3,
      summary: 'Wound healing is a complex, highly regulated process involving coordinated cellular signaling, growth factors, and extracellular matrix remodeling through distinct but overlapping phases.',
      explanation: `## Cellular and Molecular Mechanisms

### Hemostasis (0-Minutes)

**Platelet Activation Cascade:**
1. Injury exposes subendothelial collagen
2. Platelets adhere via glycoprotein Ib/IX/V and vWF
3. Activation releases ADP, thromboxane A2
4. Platelet aggregation forms primary plug
5. Coagulation cascade generates fibrin mesh

**Key Mediators:**
- Thrombin: Converts fibrinogen to fibrin
- Factor XIII: Cross-links fibrin
- Platelet-derived growth factor (PDGF): Initiates healing

### Inflammation (Days 1-4)

**Early Phase (0-48h): Neutrophil-Dominant**
- Chemotaxis via IL-8, complement (C5a)
- Phagocytosis and oxidative burst
- NET formation (neutrophil extracellular traps)
- Apoptosis and clearance by macrophages

**Late Phase (48-96h): Macrophage-Dominant**
- Monocyte recruitment (MCP-1)
- Differentiation to M1 (pro-inflammatory) or M2 (pro-healing)
- Debridement of devitalized tissue
- Growth factor secretion (TGF-β, VEGF, FGF, PDGF)

**Resolution:**
- Lipoxins, resolvins dampen inflammation
- M1 to M2 macrophage phenotype switch
- Critical transition to proliferation

### Proliferation (Days 4-21)

**Granulation Tissue Formation:**
- Provisional matrix: Fibrin, fibronectin, hyaluronic acid
- Fibroblast migration and proliferation
- Collagen III deposition (later replaced by I)
- Ground substance production

**Angiogenesis:**
| Growth Factor | Source | Function |
|---------------|--------|----------|
| VEGF | Macrophages, keratinocytes | Primary angiogenic signal |
| FGF-2 | Macrophages | Endothelial proliferation |
| Angiopoietin | Endothelium | Vessel stabilization |

**Epithelialization:**
- Keratinocyte migration from wound edges and adnexa
- Contact inhibition stops migration upon wound closure
- Basement membrane regeneration
- Re-establishment of barrier function

**Wound Contraction:**
- Myofibroblasts (α-smooth muscle actin positive)
- TGF-β1 induced differentiation
- Reduces wound size by 20-30% in secondary intention

### Remodeling (3 weeks - 2 years)

**Collagen Maturation:**
- Type III collagen replaced by Type I
- Cross-linking increases tensile strength
- Matrix metalloproteinases (MMPs) reorganize ECM
- TIMPs (tissue inhibitors) balance MMP activity

**Strength Recovery:**
| Time | Tensile Strength |
|------|-----------------|
| 1 week | 3% |
| 3 weeks | 20% |
| 3 months | 80% |
| 1 year | Maximum (never 100%) |

## Wound Classification Systems

**By Depth:**
- Superficial: Epidermis only
- Partial-thickness: Epidermis + part of dermis
- Full-thickness: Through dermis

**By Contamination (Surgical):**
| Class | Description | Infection Rate |
|-------|-------------|----------------|
| Clean | No GI/GU/respiratory entry | 1-3% |
| Clean-contaminated | Controlled entry | 5-8% |
| Contaminated | Open fresh trauma, spillage | 10-15% |
| Dirty | Existing infection, perforation | 25-40% |

## Local and Systemic Factors

**Impaired Healing:**

| Factor | Mechanism |
|--------|-----------|
| Diabetes | Impaired neutrophil function, microangiopathy, neuropathy |
| Smoking | Vasoconstriction, hypoxia, impaired fibroblast function |
| Malnutrition | Lack of building blocks (protein, vitamin C, zinc) |
| Corticosteroids | Suppress inflammation and collagen synthesis |
| Radiation | Fibrosis, vascular damage |
| Venous insufficiency | Edema, poor oxygen delivery |`,
      keyTerms: [
        { term: 'angiogenesis', definition: 'Formation of new blood vessels from existing vessels; driven by VEGF' },
        { term: 'epithelialization', definition: 'Process of keratinocyte migration to cover the wound surface' },
        { term: 'myofibroblast', definition: 'Specialized fibroblast with contractile properties; drives wound contraction' },
        { term: 'MMP', definition: 'Matrix metalloproteinase - enzyme that breaks down extracellular matrix during remodeling', pronunciation: 'M-M-P' },
        { term: 'VEGF', definition: 'Vascular Endothelial Growth Factor - primary signal for new blood vessel formation', pronunciation: 'veg-F' },
      ],
      clinicalNotes: 'Chronic wounds often stall in the inflammatory phase with elevated MMPs and persistent M1 macrophage phenotype. Addressing underlying causes (diabetes control, offloading pressure, compression for venous ulcers) is essential before advanced therapies.',
    },
    4: {
      level: 4,
      summary: 'Advanced wound healing understanding integrates molecular signaling pathways, stem cell biology, and the wound microenvironment to inform evidence-based treatment strategies for complex wounds.',
      explanation: `## Molecular Signaling Networks

### Growth Factor Signaling Cascades

**TGF-β Superfamily:**
- TGF-β1: Fibroblast activation, collagen synthesis, wound contraction
- TGF-β3: Associated with scarless healing (fetal wound model)
- BMPs: Bone and cartilage formation in complex wounds

**Signaling Pathway:**
TGF-β → TGF-βR → SMAD2/3 phosphorylation → SMAD4 complex → Nuclear translocation → Gene transcription (collagen, α-SMA, fibronectin)

**VEGF/Angiogenesis Pathway:**
Hypoxia → HIF-1α stabilization → VEGF transcription → VEGFR2 activation → PI3K/Akt and MAPK pathways → Endothelial proliferation/migration

**PDGF in Fibroplasia:**
- PDGF-BB: Most potent fibroblast mitogen
- Receptor: PDGFRβ (tyrosine kinase)
- Clinical: Becaplermin (PDGF-BB) for diabetic foot ulcers

### Inflammation Resolution Mechanisms

**Pro-Resolving Mediators:**
| Mediator | Source | Function |
|----------|--------|----------|
| Lipoxin A4 | Platelets, leukocytes | Stop neutrophil influx |
| Resolvin D1 | Omega-3 fatty acids | Enhance macrophage phagocytosis |
| Protectin D1 | DHA metabolism | Reduce inflammatory cytokines |
| Maresin 1 | Macrophages | Promote M2 phenotype |

**Macrophage Polarization:**
- M1 (Classical): IFN-γ, LPS → IL-12, TNF-α, iNOS → Inflammation, pathogen killing
- M2 (Alternative): IL-4, IL-13 → IL-10, TGF-β, Arginase → Repair, fibrosis

Chronic wounds often show persistent M1 phenotype with failure to transition to M2.

### Stem Cells in Wound Healing

**Resident Stem Cells:**
- Hair follicle bulge: Multipotent epithelial stem cells
- Interfollicular epidermis: Transit-amplifying cells
- Dermal papilla: Mesenchymal progenitors

**Bone Marrow-Derived Cells:**
- MSCs (Mesenchymal Stem Cells): Differentiate to fibroblasts, secrete growth factors
- Fibrocytes: CD34+/collagen+ circulating cells
- EPCs (Endothelial Progenitor Cells): Contribute to angiogenesis

### Extracellular Matrix Dynamics

**Matrix Composition Changes:**
| Phase | Dominant Matrix |
|-------|-----------------|
| Hemostasis | Fibrin, fibronectin |
| Inflammation | Hyaluronan, tenascin |
| Proliferation | Collagen III, proteoglycans |
| Remodeling | Collagen I, elastin |

**MMP/TIMP Balance:**
- MMP-1, 8, 13: Collagenases
- MMP-2, 9: Gelatinases
- MMP-3: Stromelysin
- TIMPs 1-4: Inhibit specific MMPs

Chronic wounds: MMP:TIMP ratio elevated → Matrix degradation > synthesis

## Pathophysiology of Impaired Healing

### Diabetic Wound Healing

**Mechanisms:**
1. **Microangiopathy**: Basement membrane thickening, reduced perfusion
2. **Neuropathy**: Loss of protective sensation, pressure redistribution
3. **Immune dysfunction**: Impaired neutrophil chemotaxis, phagocytosis
4. **Growth factor deficiency**: Reduced PDGF, VEGF, TGF-β
5. **Matrix abnormalities**: Glycation of collagen (AGEs)
6. **Biofilm formation**: Bacterial persistence in chronic wounds

**Advanced Glycation End Products (AGEs):**
- Hyperglycemia → Non-enzymatic glycation of proteins
- AGE-RAGE signaling → NF-κB activation → Chronic inflammation
- Collagen cross-linking → Stiffness, impaired remodeling

### Venous Ulcer Pathophysiology

**Chronic Venous Hypertension:**
1. Valve incompetence → Reflux → Venous hypertension
2. Capillary distension → Fibrin cuff formation
3. Leukocyte trapping → Chronic inflammation
4. Pericapillary fibrosis → Oxygen diffusion barrier
5. Tissue hypoxia → Impaired healing

**Clinical Implications:**
- Compression therapy addresses root cause
- Without compression, 50% recurrence at 1 year

### Pressure Injury Pathophysiology

**Tissue Damage Mechanisms:**
1. **Ischemia**: Pressure > capillary closing pressure (~32 mmHg)
2. **Reperfusion injury**: ROS generation upon pressure release
3. **Lymphatic impairment**: Edema, metabolic waste accumulation
4. **Deformation**: Cell membrane damage from shear/friction

**Critical Pressure-Time Relationship:**
- High pressure + short time = Reversible ischemia
- Lower pressure + prolonged time = Irreversible damage
- Deep tissue injury may not be visible initially

## Evidence-Based Treatment Strategies

### Moist Wound Healing

**Winter's Paradigm (1962):**
- Moist environment enhances epithelialization
- Prevents desiccation and scab formation
- Autolytic debridement facilitated

**Optimal Moisture Balance:**
Too dry: Delayed epithelialization, cell death
Optimal: Enhanced migration, growth factor activity
Too wet: Maceration, bacterial proliferation

### Negative Pressure Wound Therapy (NPWT)

**Mechanisms:**
1. Macrodeformation: Wound contraction
2. Microdeformation: Cell stretch → Proliferation signals
3. Fluid removal: Decreases edema, removes MMPs
4. Perfusion: Increased blood flow at wound edges

**Evidence:**
- Effective for complex wounds, dehiscence, skin grafts
- Typical settings: -75 to -125 mmHg, continuous or intermittent
- Contraindicated: Malignancy, exposed vessels, untreated osteomyelitis`,
      keyTerms: [
        { term: 'HIF-1α', definition: 'Hypoxia-Inducible Factor 1-alpha - transcription factor stabilized in hypoxia; drives VEGF expression' },
        { term: 'AGEs', definition: 'Advanced Glycation End products - proteins modified by sugar in diabetes; impair healing' },
        { term: 'biofilm', definition: 'Structured bacterial community in protective matrix; resistant to antibiotics and immune clearance' },
        { term: 'fibrin cuff', definition: 'Pericapillary fibrin deposits in venous disease; creates diffusion barrier' },
        { term: 'NPWT', definition: 'Negative Pressure Wound Therapy - vacuum-assisted closure promoting wound healing' },
      ],
      clinicalNotes: 'Chronic wound assessment should include: vascular status (ABI for lower extremity), infection evaluation (clinical signs, not just culture), nutritional assessment, and glucose control. Address these systemic factors before expecting topical therapy to succeed.',
    },
    5: {
      level: 5,
      summary: 'Contemporary wound healing research integrates regenerative medicine approaches, precision diagnostics, and targeted molecular therapies within a systems biology framework to optimize outcomes in complex wound populations.',
      explanation: `## Regenerative Medicine Approaches

### Cell-Based Therapies

**Mesenchymal Stem Cells (MSCs):**

| Source | Advantages | Limitations |
|--------|-----------|-------------|
| Bone marrow | Well-characterized | Invasive harvest, age-related decline |
| Adipose | Abundant, accessible | Variable isolation protocols |
| Umbilical cord | Allogeneic, young cells | Regulatory complexity |
| Placental | No donor morbidity | Limited availability |

**Mechanisms of Action:**
1. **Paracrine effects**: Secrete VEGF, PDGF, TGF-β, HGF
2. **Immunomodulation**: Suppress T cells, promote M2 macrophages
3. **Differentiation**: Limited direct contribution to wound cells
4. **Extracellular vesicles**: Exosomes deliver miRNA, proteins

**Clinical Evidence:**
- Diabetic foot ulcers: Meta-analyses show improved healing rates
- Chronic wounds: Case series suggest benefit
- Limitations: Heterogeneous protocols, regulatory hurdles

### Bioengineered Skin Substitutes

**Classification:**

| Type | Example | Composition |
|------|---------|-------------|
| Cellular allogeneic | Apligraf, Dermagraft | Living human fibroblasts ± keratinocytes |
| Acellular dermal | AlloDerm, Integra | Dermal matrix scaffold |
| Synthetic | Biobrane | Silicone + nylon mesh |
| Autologous | ReCell | Spray-on keratinocyte suspension |

**Integra Dermal Regeneration Template:**
- Bovine collagen + chondroitin-6-sulfate matrix
- Silicone outer layer (temporary epidermis)
- Two-stage: Matrix vascularization (2-3 weeks) → STSG application
- Indications: Full-thickness burns, complex wounds

### Platelet-Rich Plasma (PRP)

**Composition:**
- Concentrated platelets (4-8x baseline)
- Growth factors: PDGF, TGF-β, VEGF, EGF, IGF-1
- Fibrin scaffold for sustained release

**Evidence:**
- Diabetic foot ulcers: Moderate evidence for improved healing (Cochrane 2022)
- Chronic wounds: Variable quality evidence
- Optimal preparation: Not standardized (leukocyte content, activation method)

## Molecular Diagnostics in Wound Care

### Biomarkers for Wound Assessment

**Predictive Markers:**
| Biomarker | Clinical Utility |
|-----------|------------------|
| MMP-9/TIMP-1 ratio | Healing trajectory prediction |
| IL-6, TNF-α | Infection, non-healing risk |
| Wound fluid pH | Infection indicator (pH < 7.0) |
| Bacterial load | Critical colonization threshold |

**Point-of-Care Testing:**
- Wound pH strips
- Bacterial fluorescence imaging (MolecuLight)
- Protease activity tests

### Genomics and Transcriptomics

**Wound Edge Biopsy Analysis:**
- Gene expression profiling identifies non-healing phenotypes
- Epigenetic markers (DNA methylation, histone modification)
- MicroRNA signatures: miR-21, miR-146a, miR-155 in wound healing

**Clinical Translation:**
- Research stage: Personalized wound therapy based on molecular phenotype
- Example: TGF-β pathway activation predicts fibrosis risk

## Advanced Therapeutic Strategies

### Targeted Growth Factor Delivery

**Becaplermin (Regranex):**
- rhPDGF-BB 0.01% gel
- FDA-approved for diabetic neuropathic ulcers
- Black box warning: Increased mortality in patients with 3+ tubes
- Evidence: Modest benefit, declining use

**Emerging Approaches:**
- Gene therapy: Plasmid VEGF for critical limb ischemia
- Modified growth factors: PEGylation for sustained release
- Biomaterial delivery: Hydrogels, nanoparticles

### Oxygen Therapies

**Hyperbaric Oxygen (HBO):**
| Indication | Evidence Level |
|------------|----------------|
| Diabetic foot ulcer | Moderate (selected patients) |
| Chronic refractory osteomyelitis | Low-moderate |
| Radiation tissue injury | Moderate |
| Necrotizing fasciitis | Adjunctive |

**Mechanisms:**
- Increased tissue oxygen tension (up to 2000 mmHg)
- Promotes angiogenesis, fibroblast function
- Enhances leukocyte oxidative killing
- Vasoconstriction reduces edema

**Topical Oxygen:**
- Continuous diffusion oxygen therapy
- Limited penetration depth
- Evidence: Conflicting results

### Bioelectric and Biophysical Therapies

**Electrical Stimulation:**
- Endogenous wound current disruption → impaired healing
- Applied fields: 50-300 μV/mm
- Mechanisms: Cell migration, angiogenesis, infection control
- Evidence: Moderate for chronic wounds

**Photobiomodulation (Low-Level Laser):**
- Red/near-infrared light (600-1000 nm)
- Mitochondrial cytochrome c oxidase absorption
- Enhanced ATP production, reduced inflammation
- Evidence: Variable quality, promising for diabetic wounds

## Systems Biology Approach

### Wound Microbiome

**Chronic Wound Microbiome Characteristics:**
- Polymicrobial communities
- Biofilm formation (60-90% of chronic wounds)
- Anaerobic bacteria underestimated by culture
- Functional dysbiosis vs. simple pathogen presence

**Clinical Implications:**
- Molecular methods (16S rRNA, metagenomics) reveal true diversity
- Debridement disrupts biofilm architecture
- Antimicrobial stewardship: Treat infection, not colonization

### Immunometabolism

**Macrophage Metabolic States:**
- M1: Glycolysis (Warburg effect), inflammatory
- M2: Oxidative phosphorylation, repair-oriented

**Therapeutic Targets:**
- Succinate accumulation → HIF-1α → Inflammation
- AMPK activation → M2 polarization
- Metformin: Potential wound healing benefits via AMPK

### Precision Wound Care Framework

**Assessment:**
1. Wound type and etiology
2. Host factors (diabetes, vascular, nutrition, immune)
3. Microbiome status
4. Molecular phenotype (when available)

**Intervention Matching:**
- Inflammatory phase stall: Address underlying cause, debride
- Proliferative phase deficiency: Growth factors, cells, matrices
- Remodeling abnormality: Pressure management, silicone

**Outcomes Monitoring:**
- Wound area trajectory (>50% reduction at 4 weeks predicts healing)
- Biomarker trends
- Quality of life metrics

## Emerging Technologies

### 3D Bioprinting
- Custom scaffolds matching wound geometry
- Cell-laden bioinks
- Research stage: Complex tissue reconstruction

### Nanotechnology
- Nanoparticle drug delivery
- Silver nanoparticles: Antimicrobial
- Smart dressings: Stimuli-responsive release

### Artificial Intelligence
- Wound measurement from photographs
- Healing prediction algorithms
- Treatment recommendation systems

### Organoids and Tissue Models
- Skin organoids for drug testing
- Patient-specific wound models
- Reduced animal testing`,
      keyTerms: [
        { term: 'exosomes', definition: 'Extracellular vesicles containing miRNA and proteins; mediate MSC paracrine effects' },
        { term: 'biofilm', definition: 'Structured polymicrobial communities in extracellular matrix; present in majority of chronic wounds' },
        { term: 'photobiomodulation', definition: 'Use of light (red/near-infrared) to stimulate cellular function via mitochondrial absorption' },
        { term: 'immunometabolism', definition: 'Study of metabolic processes controlling immune cell function; emerging wound healing target' },
        { term: 'precision wound care', definition: 'Framework matching treatment to wound molecular phenotype and host factors' },
      ],
      clinicalNotes: `Key Practice Points:
1. Chronic wounds require simultaneous treatment of underlying etiology and local wound factors
2. Debridement remains the cornerstone of chronic wound management
3. Advanced biologics show promise but require appropriate patient selection
4. Wound area reduction >50% at 4 weeks predicts healing by 12 weeks (Margolis criteria)
5. Biofilm-targeted strategies (debridement + antimicrobial dressings) improve outcomes
6. Cost-effectiveness analyses favor graduated care pathways over immediate advanced therapy
7. Patient-centered outcomes (pain, function, quality of life) increasingly important metrics`,
    },
  },

  media: [
    {
      id: 'wound-healing-phases',
      type: 'diagram',
      filename: 'wound-healing-phases.svg',
      title: 'Phases of Wound Healing',
      description: 'Timeline diagram showing overlapping phases of hemostasis, inflammation, proliferation, and remodeling',
    },
    {
      id: 'wound-healing-cellular',
      type: 'diagram',
      filename: 'wound-healing-cellular.svg',
      title: 'Cellular Events in Wound Healing',
      description: 'Illustration of key cells involved in each phase of wound repair',
    },
  ],

  citations: [
    {
      id: 'gurtner-2008',
      type: 'article',
      title: 'Wound repair and regeneration',
      authors: ['Gurtner, G.C.', 'Werner, S.', 'Barrandon, Y.', 'Longaker, M.T.'],
      source: 'Nature',
      url: 'https://doi.org/10.1038/nature06800',
    },
    {
      id: 'eming-2014',
      type: 'article',
      title: 'Wound repair and regeneration: mechanisms, signaling, and translation',
      authors: ['Eming, S.A.', 'Martin, P.', 'Tomic-Canic, M.'],
      source: 'Science Translational Medicine',
    },
    {
      id: 'schwartz-principles',
      type: 'textbook',
      title: 'Wound Healing',
      source: 'Schwartz\'s Principles of Surgery',
      chapter: '9',
    },
  ],

  crossReferences: [
    { targetId: 'surgery-sutures-and-wound-care', targetType: 'topic', relationship: 'related', label: 'Sutures and Wound Care' },
    { targetId: 'surgery-surgical-complications', targetType: 'topic', relationship: 'related', label: 'Surgical Complications' },
    { targetId: 'surgery-surgical-drains', targetType: 'topic', relationship: 'related', label: 'Surgical Drains' },
  ],

  tags: {
    systems: ['integumentary', 'surgical'],
    topics: ['wound healing', 'tissue repair', 'regeneration', 'chronic wounds'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      shelf: ['surgery'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default woundHealing;
