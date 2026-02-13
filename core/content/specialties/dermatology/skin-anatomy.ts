/**
 * Skin Anatomy and Function - Comprehensive Educational Content
 *
 * Covers the structure and function of the integumentary system including
 * epidermis, dermis, hypodermis, and skin appendages.
 */

import { EducationalContent } from '../../types';

export const skinAnatomyContent: EducationalContent = {
  id: 'dermatology-skin-anatomy',
  type: 'structure',
  name: 'Skin Anatomy and Function',
  alternateNames: ['Integumentary System', 'Cutaneous Structure', 'Dermal Anatomy'],

  levels: {
    1: {
      level: 1,
      summary: 'Your skin is the largest organ in your body, protecting you like a waterproof suit of armor.',
      explanation: `Your skin is amazing! It's the largest organ in your body - if you could spread it out flat, it would cover about 20 square feet (the size of a small blanket). Skin does so much more than just cover your body.

**What Does Skin Do?**
- **Protects you**: Like a shield, it keeps germs, water, and harmful things from getting inside your body
- **Feels things**: Special sensors in your skin let you feel touch, pressure, heat, cold, and pain
- **Controls temperature**: When you're hot, you sweat to cool down. When you're cold, tiny hairs stand up and you get goosebumps
- **Makes vitamin D**: Your skin uses sunlight to make vitamin D, which helps keep your bones strong

**The Three Layers of Skin**
1. **Epidermis** (top layer): The part you can see and touch. It's waterproof and constantly making new skin cells
2. **Dermis** (middle layer): Contains blood vessels, nerves, hair roots, and sweat glands
3. **Hypodermis** (bottom layer): Made of fat that cushions your body and keeps you warm

Your skin is always renewing itself. Every month, you get an almost entirely new outer layer of skin!`,
      keyTerms: [
        { term: 'skin', definition: 'The protective outer covering of your body' },
        { term: 'epidermis', definition: 'The thin, outer layer of skin you can see' },
        { term: 'dermis', definition: 'The thick middle layer with blood vessels and nerves' },
        { term: 'pore', definition: 'A tiny opening in your skin' },
        { term: 'sweat gland', definition: 'A part of your skin that makes sweat to cool you down' },
      ],
      analogies: [
        'Your skin is like a waterproof jacket that protects you from rain and germs.',
        'The layers of skin are like a sandwich - the epidermis is the top bread, the dermis is the filling, and the hypodermis is the bottom bread.',
        'Skin cells moving up and falling off is like an escalator constantly moving people up and out.',
      ],
      examples: [
        'When you get a small cut, the outer layer (epidermis) heals quickly because new skin cells are always being made.',
        'When you touch something hot and pull away quickly, that is your skin sending signals to your brain.',
      ],
    },
    2: {
      level: 2,
      summary: 'The skin consists of three distinct layers (epidermis, dermis, hypodermis) that work together to provide protection, sensation, temperature regulation, and immune defense.',
      explanation: `The integumentary system (skin and its appendages) is the body's largest organ system, comprising about 15% of body weight. It provides critical functions for survival.

## The Three Main Layers

### Epidermis (Outer Layer)
- Thickness: 0.05-1.5mm (thickest on palms and soles)
- Made of stratified squamous epithelium
- Contains no blood vessels (avascular)
- Constantly renewing - complete turnover every 28-30 days
- Key cell types:
  - **Keratinocytes**: Make keratin protein for waterproofing (90% of cells)
  - **Melanocytes**: Produce melanin pigment for UV protection
  - **Langerhans cells**: Immune cells that detect foreign invaders
  - **Merkel cells**: Touch receptors

### Dermis (Middle Layer)
- Thickness: 1-4mm
- Rich in blood vessels and nerves
- Contains:
  - Collagen and elastin fibers for strength and flexibility
  - Hair follicles
  - Sweat glands (eccrine and apocrine)
  - Sebaceous (oil) glands
  - Nerve endings for sensation

### Hypodermis (Subcutaneous Layer)
- Also called subcutaneous tissue
- Primarily adipose (fat) tissue
- Functions: Insulation, energy storage, shock absorption
- Attaches skin to underlying muscle and bone

## Skin Appendages
- **Hair**: Grows from follicles in the dermis
- **Nails**: Modified keratin plates protecting fingertips and toes
- **Glands**: Produce sweat, oil, and other secretions

## Key Functions
1. **Barrier protection**: Physical, chemical, and biological
2. **Thermoregulation**: Sweating and blood flow control
3. **Sensation**: Touch, pressure, temperature, pain
4. **Vitamin D synthesis**: UVB converts 7-dehydrocholesterol
5. **Immune surveillance**: Langerhans cells and dermal immune cells`,
      keyTerms: [
        { term: 'keratinocyte', definition: 'The main cell type in the epidermis that produces keratin protein', pronunciation: 'keh-RAT-in-oh-site' },
        { term: 'melanocyte', definition: 'Cell that produces melanin pigment, giving skin its color', pronunciation: 'MEL-an-oh-site' },
        { term: 'sebaceous gland', definition: 'Oil-producing gland usually connected to hair follicles', pronunciation: 'seh-BAY-shus' },
        { term: 'eccrine gland', definition: 'Sweat gland found throughout the body for temperature regulation', pronunciation: 'EK-rin' },
        { term: 'stratum corneum', definition: 'The outermost layer of dead skin cells providing the main barrier', pronunciation: 'STRA-tum KOR-nee-um' },
      ],
      analogies: [
        'The epidermis is like a brick wall - keratinocytes are the bricks and lipids are the mortar.',
        'The dermis is like the foundation of a house with all the plumbing (blood vessels) and electrical wiring (nerves).',
      ],
    },
    3: {
      level: 3,
      summary: 'The skin is a complex organ with distinct architectural zones, specialized cell populations, and intricate appendageal structures that maintain barrier function, immune surveillance, and homeostasis.',
      explanation: `## Epidermal Architecture

The epidermis consists of 4-5 layers (strata) representing keratinocyte differentiation stages:

### Epidermal Strata (Deep to Superficial)
1. **Stratum basale (germinativum)**:
   - Single layer of cuboidal/columnar cells on basement membrane
   - Mitotically active stem cells
   - Melanocytes (1:10 keratinocytes) with dendritic processes
   - Merkel cells (tactile receptors)
   - Hemidesmosomes attach to basement membrane

2. **Stratum spinosum (prickle cell layer)**:
   - 8-10 layers of polyhedral cells
   - "Spiny" appearance from desmosomes connecting cells
   - Langerhans cells (dendritic antigen-presenting cells)
   - Active protein synthesis

3. **Stratum granulosum**:
   - 3-5 layers of flattened cells
   - Keratohyalin granules (profilaggrin, loricrin)
   - Lamellar bodies releasing lipids for barrier
   - Transition zone - cells begin programmed death

4. **Stratum lucidum** (only in thick skin):
   - Clear layer of dead cells
   - Found in palms and soles

5. **Stratum corneum**:
   - 15-20 layers of anucleate corneocytes
   - Cornified envelope: Cross-linked proteins (involucrin, loricrin)
   - Lipid matrix: Ceramides, cholesterol, fatty acids
   - "Brick and mortar" model

### Dermal-Epidermal Junction (DEJ)
- Basement membrane zone
- Components: Hemidesmosomes, lamina lucida, lamina densa, anchoring fibrils
- Key proteins: BP180, BP230, laminin-332, type VII collagen
- Clinical: Target of autoimmune blistering diseases

## Dermal Structure

### Papillary Dermis
- Thin, superficial layer
- Loose connective tissue (areolar)
- Dermal papillae interdigitate with rete ridges
- Meissner corpuscles (fine touch)
- Capillary loops for epidermal nutrition

### Reticular Dermis
- Thick, deep layer (80% of dermis)
- Dense irregular connective tissue
- Collagen bundles (Type I predominant, Type III)
- Elastic fibers (2-4% of dermis)
- Pacinian corpuscles (deep pressure/vibration)
- Hair follicles, sweat glands, sebaceous glands

## Skin Appendages Detail

### Hair Follicle
- Components: Bulb, matrix, inner/outer root sheaths, arrector pili
- Growth phases: Anagen (growth), catagen (regression), telogen (rest)
- Stem cells in bulge region

### Eccrine Sweat Glands
- 2-4 million total, highest density on palms/soles
- Coiled secretory portion in deep dermis
- Produce hypotonic sweat (thermoregulation)

### Apocrine Sweat Glands
- Axillae, groin, areolae
- Open into hair follicles
- Activated at puberty; contribute to body odor

### Sebaceous Glands
- Holocrine secretion (sebum)
- Associated with hair follicles (pilosebaceous unit)
- Largest on face and scalp`,
      keyTerms: [
        { term: 'stratum basale', definition: 'The deepest epidermal layer containing stem cells and melanocytes', pronunciation: 'STRA-tum bah-SAY-lee' },
        { term: 'desmosome', definition: 'Cell-cell junction providing mechanical strength between keratinocytes', pronunciation: 'DEZ-moh-sohm' },
        { term: 'lamellar body', definition: 'Organelle in stratum granulosum that secretes barrier lipids', pronunciation: 'lah-MEL-ar' },
        { term: 'corneocyte', definition: 'Terminally differentiated, dead keratinocyte in stratum corneum' },
        { term: 'papillary dermis', definition: 'Superficial dermis forming finger-like projections into epidermis' },
        { term: 'reticular dermis', definition: 'Deep dermis with dense collagen bundles providing tensile strength' },
      ],
      clinicalNotes: 'The basement membrane zone is the target in bullous pemphigoid (anti-BP180/BP230) and epidermolysis bullosa. Langerhans cell dysfunction contributes to allergic contact dermatitis. The rete ridge pattern is lost in aging and photodamage.',
    },
    4: {
      level: 4,
      summary: 'Skin architecture reflects complex epithelial-mesenchymal interactions, stem cell dynamics, and molecular signaling pathways that regulate barrier function, immune responses, and tissue homeostasis.',
      explanation: `## Epidermal Differentiation Program

### Keratinocyte Terminal Differentiation
The epidermis undergoes continuous renewal through a tightly regulated differentiation program:

**Stem Cell Dynamics**:
- Epidermal stem cells in stratum basale and hair follicle bulge
- Asymmetric division produces transit-amplifying cells
- Transit-amplifying cells undergo 3-4 divisions before terminal differentiation
- Epidermal turnover time: 40-56 days (accelerated in psoriasis: 3-5 days)

**Molecular Regulation of Differentiation**:
- Notch signaling: Promotes differentiation, suppresses proliferation
- p63: Essential for epidermal stem cell maintenance
- C/EBP transcription factors: Regulate late differentiation
- Calcium gradient: Low in basale, high in granular layer
  - Calcium triggers: Desmosome assembly, lamellar body secretion

**Keratin Expression Patterns**:
| Layer | Keratins | Function |
|-------|----------|----------|
| Basal | K5, K14 | Structural, stem cell markers |
| Suprabasal | K1, K10 | Differentiation markers |
| Hyperproliferative | K6, K16 | Wound healing, psoriasis |
| Palmoplantar | K9 | Thick skin specific |

### Cornified Envelope Formation
- Cross-linking by transglutaminases (TGM1, TGM3, TGM5)
- Involucrin: Early scaffold protein
- Loricrin: Major component (70% of CE protein)
- SPRRs (small proline-rich proteins): Reinforce structure

### Lipid Barrier Formation
- Lamellar bodies contain: Glucosylceramides, sphingomyelin, phospholipids
- Secreted at stratum granulosum/corneum interface
- Enzymatic processing: Beta-glucocerebrosidase, sphingomyelinase
- Final lipids: Ceramides (50%), cholesterol (25%), free fatty acids (15%)

## Basement Membrane Zone Ultrastructure

**Hemidesmosomes**:
- Transmembrane: BP180 (collagen XVII), integrin alpha6beta4
- Intracellular plaque: BP230 (BPAG1), plectin
- Connect keratin intermediate filaments to basement membrane

**Lamina Lucida** (40-50nm):
- Laminin-332 (laminin-5)
- Connects hemidesmosomes to lamina densa

**Lamina Densa** (50nm):
- Type IV collagen network
- Nidogen, perlecan

**Anchoring Fibrils**:
- Type VII collagen
- Extend from lamina densa into papillary dermis
- Wrap around dermal collagen fibrils

## Cutaneous Immune System

### Innate Immunity
- Physical barrier: Stratum corneum, tight junctions
- Antimicrobial peptides:
  - Defensins (HBD-1, HBD-2, HBD-3)
  - Cathelicidin (LL-37)
  - Dermcidin (eccrine sweat)
- Pattern recognition receptors: TLRs on keratinocytes

### Adaptive Immunity
- Langerhans cells: Process antigens, migrate to lymph nodes
- Dermal dendritic cells: Multiple subsets
- Resident memory T cells (TRM): CD8+ and CD4+ populations
- Skin-associated lymphoid tissue (SALT) concept

## Sensory Innervation

**Mechanoreceptors**:
- Meissner corpuscles: Light touch, papillary dermis
- Pacinian corpuscles: Deep pressure/vibration, hypodermis
- Ruffini endings: Skin stretch
- Merkel cell-neurite complexes: Sustained touch

**Free Nerve Endings**:
- Temperature: TRPV1 (heat), TRPM8 (cold)
- Nociception: C-fibers, A-delta fibers
- Pruritus: Histamine-dependent and -independent pathways`,
      keyTerms: [
        { term: 'transit-amplifying cell', definition: 'Progeny of stem cells that divide several times before terminally differentiating' },
        { term: 'transglutaminase', definition: 'Enzyme that cross-links proteins in cornified envelope formation', pronunciation: 'trans-gloo-TAM-in-ase' },
        { term: 'laminin-332', definition: 'Key basement membrane protein linking hemidesmosomes to lamina densa' },
        { term: 'cathelicidin', definition: 'Antimicrobial peptide (LL-37) important in innate skin immunity', pronunciation: 'kath-eh-LIS-id-in' },
        { term: 'TRPV1', definition: 'Temperature-sensitive ion channel activated by heat and capsaicin' },
        { term: 'resident memory T cell', definition: 'Non-circulating T cells that provide local immune surveillance in skin' },
      ],
      clinicalNotes: 'Mutations in keratin genes cause epidermolysis bullosa simplex (K5/K14) and epidermolytic ichthyosis (K1/K10). Filaggrin mutations are the strongest genetic risk factor for atopic dermatitis. Type VII collagen mutations cause dystrophic epidermolysis bullosa. Cathelicidin deficiency contributes to atopic dermatitis skin infections.',
    },
    5: {
      level: 5,
      summary: 'Advanced understanding of cutaneous biology integrates molecular mechanisms, signaling networks, stem cell biology, and immunology essential for comprehending skin diseases and developing targeted therapies.',
      explanation: `## Advanced Epidermal Biology

### Epidermal Stem Cell Hierarchy

**Interfollicular Epidermal Stem Cells (IFE-SCs)**:
- Location: Basal layer, clustered distribution
- Markers: High alpha6-integrin, CD71-low, MCSP+
- Slow-cycling, label-retaining cells
- Clonogenic potential: Holoclones vs meroclones vs paraclones

**Hair Follicle Stem Cells**:
- Bulge region: CD34+, K15+, Lgr5-, quiescent
- Hair germ: Lgr5+, Lhx2+, actively cycling
- Contribute to follicle, sebaceous gland, and IFE regeneration
- Wnt signaling critical for activation

**Melanocyte Stem Cells**:
- Hair follicle bulge and sub-bulge
- Dct+, Kit-low (quiescent)
- Activated during anagen for hair pigmentation
- Graying: Stem cell exhaustion, loss of MITF expression

### Epidermal Signaling Networks

**Notch Pathway**:
- Notch1/2 in suprabasal layers
- Jagged1/2 ligands in basal layer
- Promotes differentiation, inhibits proliferation
- RBP-Jk-dependent transcription of Hes/Hey genes
- Clinical: Notch inhibition in psoriasis pathogenesis

**Wnt/Beta-catenin**:
- Active in basal stem cells and hair follicles
- Promotes proliferation and hair follicle fate
- Antagonized by DKK1 in IFE
- Dysregulated in pilomatricoma, trichoblastoma

**Hedgehog Pathway**:
- Critical for hair follicle development
- GLI transcription factors
- Constitutive activation: Basal cell carcinoma (PTCH1 mutations)

**EGFR Signaling**:
- Amphiregulin, TGF-alpha, HB-EGF ligands
- Promotes keratinocyte proliferation and migration
- Downregulated during terminal differentiation
- EGFR inhibitors cause acneiform eruptions, xerosis

### Filaggrin and Barrier Function

**Filaggrin Processing**:
- Pro-filaggrin (>400kDa) stored in keratohyalin granules
- Proteolytic cleavage releases filaggrin monomers
- Aggregates keratin filaments into dense matrix
- Degraded to natural moisturizing factor (NMF)

**NMF Components**:
- Amino acids, urocanic acid, pyrrolidone carboxylic acid
- Hygroscopic: Retain water in stratum corneum
- Urocanic acid: UV absorption

**Filaggrin Mutations (FLG)**:
- Loss-of-function mutations in 10% of Europeans
- Null mutations: 3-fold increased atopic dermatitis risk
- Associated with ichthyosis vulgaris
- Increase risk of allergic sensitization, asthma

## Advanced Immunodermatology

### Keratinocyte-Immune Crosstalk

**Keratinocyte Cytokine Production**:
- IL-1alpha (constitutive, membrane-bound "alarmin")
- IL-1beta, IL-18 (inflammasome-dependent)
- TNF-alpha, IL-6 (pro-inflammatory)
- TSLP (type 2 inflammation)
- IL-33 (alarmin, type 2 amplification)
- CCL20 (Th17 recruitment)

**Danger Signals**:
- ATP release: P2X7 receptor activation
- HMGB1: TLR4 activation
- S100 proteins: Amplify inflammation

### Tissue-Resident Memory T Cells

**CD8+ TRM**:
- CD69+, CD103+, CD49a+
- Long-lived, non-circulating
- Rapid effector function: IFN-gamma, perforin
- Key in: Psoriasis (epidermal), fixed drug eruption, vitiligo

**CD4+ TRM**:
- CD69+, variable CD103
- Th1, Th17, Th22 populations
- Dermal localization predominant

**TRM Maintenance**:
- IL-7, IL-15 survival signals
- Fatty acid oxidation metabolism
- Disease recurrence: TRM reactivation

### Type 2 Immunity in Atopic Dermatitis

**Initiation**:
- Barrier defects (FLG mutations)
- Allergen/irritant penetration
- Keratinocyte TSLP, IL-33, IL-25 release

**Amplification**:
- ILC2 activation: IL-5, IL-13 production
- Th2 differentiation and recruitment
- Eosinophil and mast cell involvement

**Therapeutic Targets**:
- Dupilumab: Anti-IL-4R-alpha (blocks IL-4/IL-13)
- Tralokinumab: Anti-IL-13
- Lebrikizumab: Anti-IL-13
- JAK inhibitors: Block multiple cytokine pathways

## Cutaneous Vasculature and Thermoregulation

**Vascular Organization**:
- Superficial plexus: Subpapillary
- Deep plexus: Dermal-subcutaneous junction
- Arteriovenous anastomoses (AVAs): Glabrous skin
- Venous lakes: Capacity vessels

**Thermoregulation**:
- Sympathetic control of cutaneous blood flow
- AVAs: Rapid heat dissipation
- Active vasodilation: Non-noradrenergic mechanism
- TRPV1, TRPM8 temperature sensing

**Lymphatic System**:
- Initial lymphatics: Blind-ended capillaries
- Pre-collecting and collecting vessels
- Express podoplanin, LYVE-1, VEGFR-3
- Role in inflammation resolution, edema clearance`,
      keyTerms: [
        { term: 'holoclone', definition: 'Colony formed by epidermal stem cell with highest proliferative potential' },
        { term: 'natural moisturizing factor', definition: 'Hygroscopic molecules from filaggrin degradation that maintain stratum corneum hydration' },
        { term: 'TSLP', definition: 'Thymic stromal lymphopoietin - keratinocyte-derived cytokine promoting type 2 inflammation', pronunciation: 'T-S-L-P' },
        { term: 'ILC2', definition: 'Group 2 innate lymphoid cells that produce type 2 cytokines (IL-5, IL-13)' },
        { term: 'dupilumab', definition: 'Monoclonal antibody blocking IL-4 receptor alpha, used for atopic dermatitis and other type 2 diseases' },
        { term: 'arteriovenous anastomosis', definition: 'Direct connection between arteriole and venule bypassing capillaries, important for thermoregulation' },
      ],
      clinicalNotes: `Key clinical applications:
1. Filaggrin mutations guide emollient therapy intensity and predict atopy progression
2. Understanding TRM biology explains recurrent fixed drug eruptions and psoriasis relapses
3. Type 2 cytokine blockade (dupilumab) revolutionized atopic dermatitis treatment
4. Hair follicle stem cell biology underlies wound healing and cancer development
5. Hedgehog pathway inhibitors (vismodegib, sonidegib) treat advanced basal cell carcinoma
6. EGFR inhibitor skin toxicity predicts tumor response
7. JAK inhibitors target multiple pathways in inflammatory skin disease`,
    },
  },

  media: [
    {
      id: 'skin-layers-diagram',
      type: 'diagram',
      filename: 'skin-layers.svg',
      title: 'Skin Layer Architecture',
      description: 'Cross-section showing epidermis, dermis, and hypodermis with appendages',
    },
    {
      id: 'epidermal-strata',
      type: 'histology',
      filename: 'epidermal-strata.svg',
      title: 'Epidermal Layers',
      description: 'Histological view of epidermal strata from basale to corneum',
    },
    {
      id: 'basement-membrane-zone',
      type: 'diagram',
      filename: 'bmz-structure.svg',
      title: 'Basement Membrane Zone',
      description: 'Ultrastructure of the dermal-epidermal junction',
    },
  ],

  citations: [
    {
      id: 'fitzpatrick-dermatology',
      type: 'textbook',
      title: 'Structure and Function of Skin',
      source: 'Fitzpatrick\'s Dermatology',
      chapter: '1',
    },
    {
      id: 'bolognia-structure',
      type: 'textbook',
      title: 'Basic Principles of Dermatology',
      source: 'Dermatology (Bolognia)',
      chapter: '1-3',
    },
  ],

  crossReferences: [
    { targetId: 'dermatology-acne', targetType: 'condition', relationship: 'related', label: 'Acne' },
    { targetId: 'dermatology-eczema', targetType: 'condition', relationship: 'related', label: 'Eczema' },
    { targetId: 'dermatology-psoriasis', targetType: 'condition', relationship: 'related', label: 'Psoriasis' },
  ],

  tags: {
    systems: ['integumentary'],
    topics: ['anatomy', 'physiology', 'dermatology'],
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

export default skinAnatomyContent;
