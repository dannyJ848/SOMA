/**
 * Wound Management - Comprehensive Educational Content
 *
 * Covers wound healing, acute and chronic wound care, and management principles.
 */

import { EducationalContent } from '../../types';

export const woundManagementContent: EducationalContent = {
  id: 'dermatology-wound-management',
  type: 'topic',
  name: 'Wound Management',
  alternateNames: ['Wound Care', 'Wound Healing', 'Wound Treatment'],

  levels: {
    1: {
      level: 1,
      summary: 'Wounds heal in stages, and proper care helps them heal faster and with less scarring.',
      explanation: `When you get a cut, scrape, or other injury to your skin, your body immediately starts working to heal it. Understanding how wounds heal helps you take better care of them.

**How Wounds Heal:**

**Stage 1: Stopping the Bleeding (Minutes)**
- Blood vessels tighten
- Blood clots form
- Bleeding stops

**Stage 2: Cleaning Up (Days 1-4)**
- Area becomes red and swollen
- White blood cells fight germs
- Dead tissue is removed

**Stage 3: Rebuilding (Days 4-21)**
- New skin grows from the edges
- New blood vessels form
- The wound fills in

**Stage 4: Strengthening (Weeks to Months)**
- Scar tissue forms
- Area gets stronger over time
- Redness fades

**Basic Wound Care:**
1. **Clean the wound**: Gently wash with clean water
2. **Stop bleeding**: Apply gentle pressure
3. **Cover it**: Use a clean bandage
4. **Keep it moist**: A little petroleum jelly helps healing
5. **Change dressings**: Keep the wound clean

**When to See a Doctor:**
- Deep cuts that won't stop bleeding
- Wounds with dirt that won't wash out
- Signs of infection (increasing redness, pus, fever)
- Animal or human bites
- Cuts on the face`,
      keyTerms: [
        { term: 'wound', definition: 'An injury that breaks the skin' },
        { term: 'infection', definition: 'When germs get into a wound and cause problems' },
        { term: 'scar', definition: 'The mark left behind after a wound heals' },
        { term: 'bandage', definition: 'A covering that protects a wound' },
      ],
      analogies: [
        'Wound healing is like repairing a road - first you block off the area, then clean up debris, then lay new pavement.',
        'A scab is like a temporary roof protecting construction underneath.',
      ],
      examples: [
        'A child scrapes their knee - clean it, apply antibiotic ointment, and cover with a bandage.',
        'A cooking cut on the finger - apply pressure, clean when bleeding stops, cover with a bandage.',
      ],
    },
    2: {
      level: 2,
      summary: 'Wound healing occurs through overlapping phases of hemostasis, inflammation, proliferation, and remodeling, with management guided by wound characteristics and healing goals.',
      explanation: `Wound healing is a complex, coordinated process involving multiple cell types, growth factors, and extracellular matrix components.

## Phases of Wound Healing

### 1. Hemostasis (Immediate)
- Vasoconstriction
- Platelet plug formation
- Fibrin clot (provisional matrix)
- Growth factor release from platelets

### 2. Inflammation (Days 1-4)
- Neutrophil infiltration (first 48 hours)
- Macrophage arrival (day 2-3)
- Bacterial killing and debris removal
- Cytokine and growth factor release

### 3. Proliferation (Days 4-21)
- Fibroblast migration and collagen synthesis
- Angiogenesis (new blood vessel formation)
- Granulation tissue formation
- Epithelialization (keratinocyte migration)
- Wound contraction (myofibroblasts)

### 4. Remodeling (Weeks to 1-2 years)
- Collagen reorganization (Type III → Type I)
- Tensile strength increases (max 80% of original)
- Scar maturation
- Vascular regression

## Wound Classification

### By Depth
- **Superficial**: Epidermis only
- **Partial thickness**: Into dermis (superficial or deep)
- **Full thickness**: Through dermis, may include fat/muscle

### By Healing Type
- **Primary intention**: Edges approximated (sutures, glue)
- **Secondary intention**: Left open to heal by granulation
- **Tertiary intention**: Delayed closure after initial open management

### By Duration
- **Acute wounds**: Recent, following normal healing trajectory
- **Chronic wounds**: >4-6 weeks without healing progress

## Wound Assessment
- Location and size (length, width, depth)
- Wound bed appearance (granulation, slough, necrosis)
- Exudate (amount, type)
- Wound edges (attached, rolled, undermining)
- Surrounding skin (maceration, erythema)
- Signs of infection

## Basic Management Principles

### Acute Wounds
1. Hemostasis
2. Cleansing (saline or water irrigation)
3. Debridement if needed
4. Closure (if appropriate)
5. Dressing selection
6. Tetanus prophylaxis

### Chronic Wounds
TIME Framework:
- **T**issue: Debride non-viable tissue
- **I**nfection: Manage bioburden
- **M**oisture: Maintain optimal balance
- **E**dge: Assess wound edge advancement

## Dressing Selection
| Wound Type | Dressing |
|------------|----------|
| Low exudate | Film, hydrocolloid |
| Moderate exudate | Foam, alginate |
| High exudate | Alginate, hydrofiber |
| Dry/necrotic | Hydrogel |
| Infected | Antimicrobial dressings |`,
      keyTerms: [
        { term: 'granulation tissue', definition: 'New connective tissue with blood vessels that fills wounds during healing' },
        { term: 'epithelialization', definition: 'Process of new skin cells covering a wound surface' },
        { term: 'debridement', definition: 'Removal of dead or contaminated tissue from a wound', pronunciation: 'dih-BREED-ment' },
        { term: 'primary intention', definition: 'Wound healing with edges brought together (e.g., sutures)' },
        { term: 'secondary intention', definition: 'Wound healing by granulation and contraction without closure' },
      ],
      analogies: [
        'Granulation tissue is like scaffolding that the body builds before laying the final bricks (epithelium).',
        'Wound dressings are like choosing the right container for leftover food - depends on what is inside.',
      ],
    },
    3: {
      level: 3,
      summary: 'Wound healing involves coordinated cellular and molecular events, with chronic wounds resulting from phase dysfunction requiring targeted interventions.',
      explanation: `## Molecular Biology of Wound Healing

### Growth Factors
| Factor | Source | Function |
|--------|--------|----------|
| PDGF | Platelets, macrophages | Fibroblast recruitment, collagen |
| TGF-β | Platelets, macrophages | Fibrosis, immunomodulation |
| VEGF | Keratinocytes, macrophages | Angiogenesis |
| EGF | Platelets, macrophages | Epithelialization |
| FGF | Macrophages, fibroblasts | Angiogenesis, fibroblast proliferation |

### Cellular Events

**Macrophage Phenotypes**:
- M1 (inflammatory): Days 1-3, pro-inflammatory
- M2 (repair): Days 3+, anti-inflammatory, pro-healing
- Phenotype switch essential for healing progression

**Fibroblast Activation**:
- Quiescent → Activated → Myofibroblast
- Alpha-smooth muscle actin expression
- Wound contraction
- Apoptosis after healing (failure → hypertrophic scar)

**Keratinocyte Migration**:
- Loss of contact inhibition
- Integrin expression changes
- Lamellipodial extension
- Migration over provisional matrix

### Extracellular Matrix Dynamics
- Provisional matrix (fibrin, fibronectin)
- Granulation tissue matrix (collagen III, hyaluronic acid)
- Mature scar (collagen I, organized)
- MMPs regulate matrix turnover

## Chronic Wound Pathophysiology

### Common Chronic Wound Types
**Diabetic Foot Ulcers (DFUs)**:
- Neuropathy + ischemia + trauma
- Impaired neutrophil function
- Glycated matrix impairs cell function
- Biofilm formation common

**Venous Leg Ulcers (VLUs)**:
- Venous hypertension
- Fibrin cuff theory
- Growth factor trapping
- Location: Medial lower leg (gaiter area)

**Pressure Injuries**:
- Sustained pressure → ischemia
- Tissue damage from deep to superficial
- Staging I-IV + Unstageable + DTPI

**Arterial Ulcers**:
- Peripheral arterial disease
- Distal location (toes, heel)
- Painful, punched-out appearance
- ABI assessment essential

### Molecular Defects in Chronic Wounds
- Elevated MMPs (matrix destruction)
- Reduced growth factor activity
- Senescent fibroblasts
- Persistent inflammation (M1 macrophages)
- Biofilm-forming bacteria

## Advanced Wound Assessment

### Wound Bed Preparation
- **Debridement methods**: Sharp, enzymatic, autolytic, mechanical, biological (maggots)
- **Biofilm management**: Debridement + antimicrobials
- **Moisture balance**: Appropriate dressing selection
- **Edge advancement**: Serial measurements, photos

### Vascular Assessment
**Arterial**:
- Ankle-brachial index (ABI)
- >0.9: Normal
- 0.5-0.9: Claudication
- <0.5: Critical limb ischemia (avoid compression)

**Venous**:
- Duplex ultrasound
- Venous reflux assessment
- Compression therapy cornerstone of treatment

## Evidence-Based Interventions

### Negative Pressure Wound Therapy (NPWT)
- Foam or gauze over wound
- Sealed with film, suction applied
- Removes exudate, promotes granulation
- Indications: Large, complex wounds

### Advanced Dressings
- Silver dressings: Antimicrobial, moderate exudate
- Honey dressings: Antimicrobial, autolytic debridement
- Collagen dressings: Promotes cell migration
- Cellular/acellular matrices: Provide scaffold

### Offloading (DFUs)
- Total contact casting (gold standard)
- Removable walking boot
- Custom footwear
- Non-removable devices improve adherence`,
      keyTerms: [
        { term: 'myofibroblast', definition: 'Specialized fibroblast with contractile properties that closes wounds' },
        { term: 'biofilm', definition: 'Organized bacterial community protected by matrix, resistant to antibiotics' },
        { term: 'ankle-brachial index', definition: 'Ratio of ankle to arm blood pressure, assesses arterial supply (ABI)' },
        { term: 'negative pressure wound therapy', definition: 'Treatment using suction to promote wound healing (NPWT)' },
        { term: 'total contact cast', definition: 'Gold standard offloading device for diabetic foot ulcers' },
      ],
      clinicalNotes: 'ABI <0.5 is a contraindication to compression therapy. Biofilm requires debridement plus antimicrobials - antibiotics alone are insufficient. NPWT contraindicated over exposed vessels, nerves, or in malignancy.',
    },
    4: {
      level: 4,
      summary: 'Advanced wound management integrates molecular understanding, bioengineered therapies, and precision approaches to address complex wound healing challenges.',
      explanation: `## Molecular Mechanisms of Impaired Healing

### Diabetic Wound Pathophysiology
**Hyperglycemia Effects**:
- Advanced glycation end products (AGEs)
- RAGE receptor activation → inflammation
- Impaired neutrophil chemotaxis and killing
- Reduced fibroblast proliferation
- Impaired angiogenesis (VEGF resistance)

**Neuropathy**:
- Loss of protective sensation
- Autonomic dysfunction (dry, cracked skin)
- Motor neuropathy → deformity → pressure points

**Microangiopathy**:
- Basement membrane thickening
- Impaired oxygen diffusion
- Poor delivery of nutrients and immune cells

### Venous Ulcer Pathophysiology
**White Cell Trapping Hypothesis**:
- Venous hypertension → capillary distension
- Leukocyte margination and activation
- Release of proteases, ROS
- Tissue damage

**Fibrin Cuff Theory**:
- Fibrinogen extravasation
- Pericapillary fibrin cuff
- Barrier to oxygen diffusion (debated)

**Trap Hypothesis**:
- Growth factors trapped in fibrin
- Unavailable for tissue repair
- Contributes to chronicity

### Biofilm Biology
- Polymicrobial communities
- Extracellular polymeric substance (EPS) matrix
- Metabolic dormancy (antibiotic resistance)
- Quorum sensing regulation
- Dispersal and wound spread

## Advanced Therapeutic Modalities

### Cellular Therapies
**Skin Substitutes**:
| Type | Example | Components |
|------|---------|------------|
| Acellular | Integra, AlloDerm | Dermal matrix scaffold |
| Cellular allograft | Apligraf | Fibroblasts + keratinocytes |
| Autologous | Split-thickness graft | Patient's own skin |

**Mechanism**:
- Scaffold for cell migration
- Growth factor delivery
- Temporary wound coverage
- Stimulate host healing response

### Growth Factor Therapies
**Becaplermin (PDGF-BB)**:
- FDA-approved for DFUs
- 0.01% gel, daily application
- Modest efficacy in trials
- Black box warning (malignancy concern)

**Emerging Factors**:
- EGF
- VEGF gene therapy
- Combination approaches

### Hyperbaric Oxygen Therapy (HBOT)
**Mechanism**:
- Increased dissolved oxygen
- Improved neutrophil killing
- Enhanced fibroblast function
- Angiogenesis stimulation

**Indications**:
- Diabetic wounds of lower extremity
- Compromised grafts/flaps
- Crush injuries
- Chronic refractory osteomyelitis

### Stem Cell Approaches
**Bone Marrow-Derived Cells**:
- Clinical trials ongoing
- Autologous vs allogeneic
- Paracrine effects predominate

**Adipose-Derived Stem Cells**:
- Easier harvest
- Similar paracrine profile
- Clinical evidence accumulating

## Surgical Management

### Debridement Techniques
**Sharp Surgical**:
- Most effective for removing biofilm
- Bleeding wound bed indicates viable tissue
- May require serial procedures

**Versajet (Hydrosurgery)**:
- High-pressure saline
- Selective tissue removal
- Controlled depth

### Reconstruction Ladder
1. Secondary intention
2. Primary closure
3. Skin graft (split or full thickness)
4. Local flap
5. Regional flap
6. Free flap
7. Tissue expansion

### Negative Pressure Wound Therapy Advanced
**Variants**:
- NPWT with instillation
- Closed incision NPWT (ciNPWt)
- Single-use disposable devices

**Instillation Solutions**:
- Saline
- Hypochlorous acid
- Antiseptics

## Complex Wound Populations

### Immunocompromised Patients
- Impaired inflammatory phase
- Increased infection risk
- Consider atypical organisms
- May need biopsy to rule out malignancy

### Oncologic Wounds
- Malignant fungating wounds
- Palliative management goals
- Odor control, bleeding management
- Quality of life focus

### Pediatric Considerations
- Faster healing
- Hypertrophic scarring risk
- Psychological impact
- Age-appropriate dressings`,
      keyTerms: [
        { term: 'advanced glycation end products', definition: 'Modified proteins/lipids from hyperglycemia that impair healing (AGEs)' },
        { term: 'becaplermin', definition: 'Recombinant PDGF-BB gel approved for diabetic foot ulcers' },
        { term: 'extracellular polymeric substance', definition: 'Matrix produced by bacteria in biofilms that provides protection (EPS)' },
        { term: 'hyperbaric oxygen therapy', definition: 'Treatment breathing 100% oxygen at increased atmospheric pressure (HBOT)' },
        { term: 'skin substitute', definition: 'Bioengineered product providing wound coverage and promoting healing' },
      ],
      clinicalNotes: 'HBOT for DFUs requires TcPO2 assessment to identify responders. Biofilm disruption requires combination of debridement plus anti-biofilm agents. Malignancy should be considered in chronic wounds that do not respond to treatment.',
    },
    5: {
      level: 5,
      summary: 'Expert-level wound management integrates precision diagnostics, novel therapeutics, multidisciplinary care, and emerging technologies for optimal outcomes.',
      explanation: `## Precision Wound Medicine

### Biomarkers for Wound Healing
**Predictive Biomarkers**:
- Wound fluid proteases (MMP-9, neutrophil elastase)
- Wound fluid growth factors
- Microbiome composition
- Host inflammatory markers

**Point-of-Care Diagnostics**:
- pH monitoring
- Protease activity assays
- Fluorescence imaging (bacteria)
- Tissue oxygenation monitors

### Wound Microbiome
**Composition**:
- Diverse bacterial communities
- Anaerobes often underestimated
- Fungi (especially in chronic wounds)
- Biofilm vs planktonic states

**Sequencing Approaches**:
- 16S rRNA sequencing
- Metagenomics
- Functional profiling
- Personalized treatment potential

### Transcriptomic Profiling
- Wound edge biopsy gene expression
- Healing vs non-healing signatures
- Therapeutic target identification
- Prognosis prediction

## Novel Therapeutic Strategies

### Bioelectric Medicine
**Electroceuticals**:
- Endogenous wound electric fields
- External electrical stimulation
- Cell migration guidance
- FDA-cleared devices available

### Photobiomodulation
- Low-level laser therapy
- LED therapy
- Mitochondrial effects
- Anti-inflammatory properties

### Extracellular Vesicles
- Exosomes from stem cells
- Growth factor and miRNA delivery
- Immunomodulation
- Cell-free therapy advantage

### Gene Therapy
**Approaches**:
- VEGF gene delivery
- PDGF gene therapy
- siRNA for MMP inhibition
- mRNA therapeutics

**Delivery Systems**:
- Viral vectors
- Nanoparticles
- Scaffolds with sustained release

### 3D Bioprinting
- Patient-specific wound coverage
- Cellular constructs
- Growth factor gradients
- Still largely research stage

## Complex Clinical Scenarios

### Calciphylaxis
- Calcification of vessels → ischemic necrosis
- End-stage renal disease association
- High mortality (50-80%)
- Management: Wound care, sodium thiosulfate, pain control, dialysis optimization

### Pyoderma Gangrenosum
- Inflammatory, ulcerating condition
- Pathergy (wound extension with trauma)
- Diagnosis of exclusion
- Immunosuppression cornerstone
- Avoid debridement during active phase

### Vasculitic Ulcers
- Associated with systemic vasculitis
- Biopsy for diagnosis
- Treat underlying disease
- May need immunosuppression

### Radiation Wounds
- Hypoxic, hypocellular, hypovascular (3H)
- Poor healing potential
- HBOT may help
- May require flap coverage

## Limb Preservation Approach

### Diabetic Foot
**Multidisciplinary Team**:
- Vascular surgery
- Podiatry
- Infectious disease
- Wound care
- Endocrinology
- Orthotics/Prosthetics

**Revascularization First**:
- ABI, toe pressures, TcPO2
- Angioplasty or bypass
- Wound healing impossible without perfusion

**Infection Management**:
- Bone biopsy for osteomyelitis
- Culture-directed antibiotics
- Surgical debridement

### Venous Leg Ulcers
**Compression Therapy Optimization**:
- Graduated compression
- Multilayer systems
- Adjustable wraps
- Compression stockings after healing

**Venous Intervention**:
- Ablation for superficial reflux
- Deep vein stenting (emerging)
- Combines with compression

## Quality and Outcomes

### Outcome Measures
- Wound healing rate (cm²/week)
- Time to healing
- Recurrence rate
- Quality of life (WOUND-Q)
- Amputation-free survival

### Quality Improvement
- Wound care certification
- Evidence-based protocols
- Outcome tracking
- Benchmarking

### Health Economics
- Cost of chronic wounds (>$50 billion/year US)
- Prevention strategies
- Early intervention
- Value-based care models

## Future Directions

### Artificial Intelligence
- Wound measurement automation
- Healing prediction
- Treatment optimization
- Remote monitoring

### Smart Dressings
- Integrated sensors
- Real-time monitoring
- Drug delivery on demand
- Closed-loop systems

### Regenerative Medicine
- Scarless healing research
- Fetal wound healing models
- Axolotl regeneration studies
- True regeneration goal`,
      keyTerms: [
        { term: 'wound microbiome', definition: 'Community of microorganisms inhabiting wound environment' },
        { term: 'electroceuticals', definition: 'Medical devices using electrical stimulation for therapeutic effect' },
        { term: 'exosome therapy', definition: 'Treatment using extracellular vesicles containing growth factors and RNA' },
        { term: 'calciphylaxis', definition: 'Vascular calcification causing ischemic skin necrosis in renal patients' },
        { term: 'pathergy', definition: 'Wound extension in response to trauma, seen in pyoderma gangrenosum' },
      ],
      clinicalNotes: `Expert wound care principles:
1. Precision diagnostics can identify healing vs non-healing wounds early
2. Wound microbiome analysis may guide antimicrobial selection
3. Multidisciplinary limb preservation teams improve outcomes
4. Pyoderma gangrenosum requires avoiding debridement during active phase
5. Novel therapies (exosomes, bioprinting) are emerging but still largely investigational
6. AI-assisted wound assessment is improving accuracy and efficiency
7. Prevention and early intervention are most cost-effective strategies`,
    },
  },

  media: [
    {
      id: 'wound-healing-phases',
      type: 'diagram',
      filename: 'wound-healing-phases.svg',
      title: 'Phases of Wound Healing',
      description: 'Timeline and key events in hemostasis, inflammation, proliferation, and remodeling',
    },
    {
      id: 'chronic-wound-types',
      type: 'image',
      filename: 'chronic-wound-types.jpg',
      title: 'Chronic Wound Types',
      description: 'Clinical appearance of diabetic, venous, pressure, and arterial ulcers',
    },
  ],

  citations: [
    {
      id: 'wound-healing-society',
      type: 'website',
      title: 'Wound Healing Society Guidelines',
      source: 'Wound Healing Society',
    },
    {
      id: 'iwgdf-guidelines',
      type: 'website',
      title: 'IWGDF Guidelines on the Prevention and Management of Diabetic Foot Disease',
      source: 'International Working Group on the Diabetic Foot',
    },
  ],

  crossReferences: [
    { targetId: 'dermatology-skin-anatomy', targetType: 'structure', relationship: 'related', label: 'Skin Anatomy' },
    { targetId: 'dermatology-scar-management', targetType: 'topic', relationship: 'related', label: 'Scar Management' },
  ],

  tags: {
    systems: ['integumentary'],
    topics: ['dermatology', 'surgery', 'wound-care'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00Z',
  updatedAt: '2025-01-24T00:00:00Z',
  version: 1,
  status: 'published',
};

export default woundManagementContent;
