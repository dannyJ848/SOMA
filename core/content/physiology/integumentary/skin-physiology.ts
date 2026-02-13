/**
 * Skin and Integumentary Physiology - Comprehensive Educational Content
 *
 * Covers skin structure, keratinization, melanogenesis, thermoregulation,
 * wound healing, cutaneous sensation, vitamin D synthesis, hair follicle
 * cycling, and sebaceous gland function.
 */

import { EducationalContent } from '../../types';

export const skinPhysiology: EducationalContent = {
  id: 'physiology-integumentary-system',
  type: 'process',
  name: 'Skin and Integumentary Physiology',
  nameEs: 'Fisiologia del Sistema Tegumentario',
  alternateNames: ['Integumentary System', 'Cutaneous Physiology', 'Dermatophysiology'],

  levels: {
    1: {
      level: 1,
      summary: 'Your skin is the largest organ of your body. It protects you from germs and injury, helps control your temperature, lets you feel things, and even makes a vitamin from sunlight.',
      explanation: `## Your Amazing Skin

### Skin Is Like Armor

Your skin is like a suit of armor that covers your entire body. It is your largest organ and does many important jobs:

**Three Layers:**
1. **Epidermis** (top layer): The tough outer shield you can see and touch
2. **Dermis** (middle layer): Contains blood vessels, nerves, and hair roots
3. **Hypodermis** (bottom layer): A cushion of fat that keeps you warm and absorbs bumps

### How Skin Protects You

**Keeping germs out**: Your skin is a wall that stops bacteria and viruses from getting inside your body. Oils on your skin even help kill some germs.

**Waterproofing**: Without skin, water inside your body would dry up. Skin keeps your insides moist and stops water from soaking in when you swim.

### Temperature Control

Your skin works like a thermostat:
- **When you are hot**: Blood vessels near the surface open up and you sweat. As sweat dries, it cools you down.
- **When you are cold**: Blood vessels shrink to keep warm blood deep inside, and tiny muscles make your hair stand up (goosebumps).

### Feeling the World

Your skin has millions of tiny sensors that let you feel:
- Touch and pressure
- Hot and cold
- Pain (which warns you of danger)

### Skin Makes Vitamin D

When sunlight hits your skin, it helps make **vitamin D**, which your body needs for strong bones.

### Healing Cuts

When you get a cut, your skin repairs itself:
1. Blood clots to stop bleeding
2. The area gets red and swollen (your body fighting germs)
3. New skin grows to close the wound
4. The skin gets stronger over time

### Hair and Oil

**Hair** grows from tiny pockets in your skin called follicles. **Oil glands** near each hair keep your skin and hair soft and help repel water.`,
      keyTerms: [
        { term: 'epidermis', definition: 'The tough outer layer of skin that you can see and touch' },
        { term: 'dermis', definition: 'The middle layer of skin that contains blood vessels, nerves, and hair roots' },
        { term: 'hypodermis', definition: 'The deepest layer under the skin made of fat that cushions and insulates your body' },
        { term: 'follicle', definition: 'A tiny pocket in your skin where a hair grows from' },
      ],
      analogies: [
        'Your skin is like a suit of armor that protects everything inside while still letting you feel the world around you.',
        'Sweating is like your body\'s air conditioning system - the evaporating water carries heat away from your body.',
        'A scab on a cut is like a temporary patch on a tire, protecting the area while a permanent repair is made underneath.',
        'Oil glands are like a built-in moisturizer, keeping your skin from drying out and cracking.',
      ],
      patientCounselingPoints: [
        'Wear sunscreen to protect your skin from sunburn and damage.',
        'Keep cuts clean and covered to help your skin heal properly.',
        'Drink water to help keep your skin healthy.',
      ],
    },
    2: {
      level: 2,
      summary: 'The integumentary system comprises the epidermis (stratified squamous epithelium with five layers), dermis (connective tissue with vasculature and appendages), and hypodermis. It performs barrier protection, thermoregulation, sensation, immune defense, and vitamin D synthesis.',
      explanation: `## Skin Structure and Function

### Epidermal Layers (Superficial to Deep)

| Layer | Key Feature |
|-------|-------------|
| Stratum corneum | 15-30 layers of dead, flattened, keratin-filled cells |
| Stratum lucidum | Thin, clear layer (thick skin only - palms, soles) |
| Stratum granulosum | Cells release lipids forming waterproof barrier |
| Stratum spinosum | Cells connected by desmosomes; Langerhans cells present |
| Stratum basale | Single row of stem cells that divide to produce new keratinocytes |

**Turnover time**: A keratinocyte takes about 28-40 days to travel from the basal layer to the surface and be shed.

### Important Skin Cells

- **Keratinocytes** (90%): Produce keratin protein for strength and waterproofing
- **Melanocytes** (8%): Produce melanin pigment that absorbs UV radiation
- **Langerhans cells**: Immune cells that detect foreign substances
- **Merkel cells**: Touch receptors in the basal layer

### Dermis

**Papillary dermis** (upper): Loose connective tissue with capillary loops; creates fingerprints
**Reticular dermis** (lower): Dense irregular connective tissue with collagen and elastin for strength and stretch

### Thermoregulation

**Heat loss mechanisms:**
- **Vasodilation**: Arterioles near the surface widen, increasing blood flow and heat radiation
- **Eccrine sweat glands**: Produce watery sweat; evaporation removes ~580 kcal per liter

**Heat conservation:**
- **Vasoconstriction**: Arterioles narrow, reducing surface blood flow
- **Arteriovenous anastomoses** (AVAs): Shunt blood away from the skin surface

### Wound Healing Phases

1. **Hemostasis** (seconds-minutes): Platelet plug and fibrin clot stop bleeding
2. **Inflammation** (hours-days): Neutrophils and macrophages clean the wound
3. **Proliferation** (days-weeks): Fibroblasts lay down collagen; new blood vessels form; epithelial cells migrate across
4. **Remodeling** (weeks-months): Collagen is reorganized; scar strengthens (reaches ~80% of original strength)

### Vitamin D Synthesis

1. UV-B light converts 7-dehydrocholesterol in keratinocytes to **pre-vitamin D3**
2. Pre-vitamin D3 is converted to **vitamin D3** (cholecalciferol)
3. Liver converts it to 25-hydroxyvitamin D (calcidiol)
4. Kidneys convert it to active 1,25-dihydroxyvitamin D (calcitriol)

### Hair Follicle Cycle

| Phase | Duration | What Happens |
|-------|----------|--------------|
| Anagen | 2-7 years | Active growth; matrix cells rapidly divide |
| Catagen | 2-3 weeks | Growth stops; follicle shrinks |
| Telogen | 2-4 months | Resting phase; old hair falls out |

Normally 85-90% of scalp hairs are in anagen at any time.

### Sebaceous Glands

- Connected to hair follicles (pilosebaceous unit)
- Produce **sebum**: mixture of triglycerides, wax esters, squalene, and cholesterol
- Sebum lubricates skin and hair, has mild antimicrobial properties
- Activity increases at puberty (androgens stimulate glands)`,
      keyTerms: [
        { term: 'keratinocyte', definition: 'The most common skin cell; produces keratin protein and migrates from the basal layer to the surface over 28-40 days', pronunciation: 'keh-RAT-in-oh-site' },
        { term: 'melanocyte', definition: 'Pigment-producing cell in the basal layer that transfers melanin to surrounding keratinocytes for UV protection', pronunciation: 'MEL-an-oh-site' },
        { term: 'stratum corneum', definition: 'The outermost layer of the epidermis made of dead keratinocytes filled with keratin; the primary physical barrier', pronunciation: 'STRAT-um KOR-nee-um' },
        { term: 'eccrine gland', definition: 'Sweat gland found all over the body that produces watery sweat for thermoregulation', pronunciation: 'EK-rin' },
        { term: 'sebum', definition: 'Oily substance produced by sebaceous glands that lubricates and waterproofs the skin and hair' },
        { term: 'anagen', definition: 'Active growth phase of the hair follicle cycle lasting 2-7 years on the scalp', pronunciation: 'AN-ah-jen' },
      ],
      analogies: [
        'The epidermis is like a brick wall: keratinocytes are the bricks and the lipids between them are the mortar that keeps water from leaking through.',
        'Melanin acts like a tiny umbrella over the cell nucleus, shielding DNA from UV radiation damage.',
      ],
    },
    3: {
      level: 3,
      summary: 'The integumentary system involves complex cellular processes including keratinocyte differentiation with programmed cornification, melanin synthesis via the tyrosinase pathway, thermoregulation through hypothalamic feedback loops, and orchestrated wound healing involving growth factors, extracellular matrix remodeling, and coordinated immune-stromal interactions.',
      explanation: `## Keratinocyte Differentiation and Cornification

### Keratinization Program

As keratinocytes migrate from stratum basale to stratum corneum, they undergo terminal differentiation:

**Basal layer**: Express keratins K5 and K14; attached to basement membrane by hemidesmosomes (integrin alpha-6/beta-4)

**Spinous layer**: Switch to keratins K1 and K10; desmosomes link cells; Notch signaling promotes differentiation

**Granular layer**: Produce:
- **Keratohyalin granules**: Contain profilaggrin (aggregates keratins) and loricrin (envelope protein)
- **Lamellar bodies**: Secrete lipids (ceramides, cholesterol, fatty acids) into intercellular space forming the lipid barrier

**Cornified envelope formation**:
1. Transglutaminase crosslinks involucrin, loricrin, and small proline-rich proteins
2. Creates a rigid protein scaffold replacing the cell membrane
3. Lipids covalently attach to the outer surface
4. Result: "Brick and mortar" architecture (corneocytes = bricks, lipid lamellae = mortar)

### Melanogenesis

**Melanocyte biology:**
- Neural crest-derived cells in the basal layer (1 melanocyte per 10-15 basal keratinocytes)
- Form an **epidermal melanin unit**: one melanocyte transfers melanin to ~36 keratinocytes via dendrites

**Melanin synthesis pathway:**
1. Tyrosine -> DOPA (by **tyrosinase**, rate-limiting enzyme)
2. DOPA -> Dopaquinone
3. Dopaquinone branches:
   - **Eumelanin** pathway (brown/black): via dopachrome -> DHI/DHICA
   - **Pheomelanin** pathway (red/yellow): cysteine conjugation -> benzothiazine

**Melanosome maturation (Stages I-IV):**
- Stage I: Amorphous matrix
- Stage II: Fibrillar matrix (PMEL17 protein forms scaffold)
- Stage III: Melanin deposition on fibrils
- Stage IV: Fully melanized; transferred to keratinocytes

### Thermoregulation Circuitry

**Hypothalamic integration:**
- **Preoptic area** (POA) acts as thermostat (set point ~37 C)
- Receives input from peripheral thermoreceptors (TRPV1 for heat, TRPM8 for cold) and central thermosensors

**Heat dissipation:**
- Sympathetic cholinergic fibers activate eccrine glands (acetylcholine on muscarinic M3 receptors)
- Active vasodilation: Co-release of vasoactive intestinal peptide (VIP) and nitric oxide
- Eccrine sweat: Hypotonic fluid (primary secretion is isotonic; Na+ and Cl- reabsorbed in duct via ENaC and CFTR)

**Heat conservation:**
- Sympathetic adrenergic vasoconstriction (norepinephrine on alpha-1 receptors)
- AVA closure in acral skin (fingers, toes, ears)
- Non-shivering thermogenesis: Brown adipose tissue (UCP1 uncouples oxidative phosphorylation)

### Wound Healing: Cellular and Molecular Details

**Phase 1 - Hemostasis:**
- Exposed collagen activates platelets via glycoprotein VI
- Platelet degranulation releases PDGF, TGF-beta, VEGF
- Coagulation cascade generates fibrin mesh (scaffold for repair)

**Phase 2 - Inflammation:**
- Neutrophils arrive within hours (IL-8/CXCL8 chemotaxis)
- Macrophages (M1 phenotype) phagocytose debris, release TNF-alpha, IL-1
- Transition: M1 macrophages polarize to M2 (anti-inflammatory, pro-repair)

**Phase 3 - Proliferation:**
- Fibroblasts migrate into wound (PDGF, FGF-2 driven)
- Deposit collagen III (granulation tissue)
- Angiogenesis: VEGF drives new vessel sprouting
- Re-epithelialization: Keratinocytes at wound edge lose hemidesmosomes, migrate via integrin shuffling (leapfrog pattern)
- Myofibroblasts (alpha-SMA positive) contract wound edges

**Phase 4 - Remodeling:**
- Collagen III replaced by collagen I (MMP-mediated turnover)
- Crosslinking increases tensile strength
- Maximum ~80% of unwounded skin strength
- Duration: Months to years

### Cutaneous Sensation

**Mechanoreceptors:**
| Receptor | Location | Adaptation | Sensation |
|----------|----------|------------|-----------|
| Meissner corpuscle | Dermal papillae | Rapid | Light touch, texture |
| Merkel disc | Basal epidermis | Slow | Sustained pressure, form |
| Pacinian corpuscle | Deep dermis/hypodermis | Rapid | Vibration, deep pressure |
| Ruffini ending | Dermis | Slow | Skin stretch |

**Thermoreceptors:**
- Warm: TRPV3, TRPV4 channels (activated >33 C)
- Cool: TRPM8 channel (activated <28 C, also by menthol)
- Noxious heat: TRPV1 (>43 C, also activated by capsaicin)
- Noxious cold: TRPA1 (<17 C)

**Nociceptors:**
- Free nerve endings (A-delta for sharp pain, C fibers for dull/burning)
- Polymodal: Respond to mechanical, thermal, and chemical stimuli
- Sensitization: Bradykinin, prostaglandins, substance P lower threshold (inflammatory pain)

### Vitamin D Metabolism in Skin

- UVB (290-315 nm) photolysis of 7-dehydrocholesterol (7-DHC) in stratum basale and spinosum
- Photoequilibrium limits production (prevents toxicity)
- Melanin competes for UVB absorption (darker skin requires more sun exposure)
- Latitude, season, sunscreen (SPF 30 blocks ~97% UVB) all affect synthesis`,
      keyTerms: [
        { term: 'cornified envelope', definition: 'Rigid crosslinked protein structure that replaces the keratinocyte cell membrane during terminal differentiation; formed by transglutaminase activity' },
        { term: 'tyrosinase', definition: 'Rate-limiting enzyme in melanin synthesis that converts tyrosine to DOPA and DOPA to dopaquinone' },
        { term: 'eumelanin', definition: 'Brown-black melanin pigment that provides greater UV protection than pheomelanin' },
        { term: 'pheomelanin', definition: 'Red-yellow melanin pigment produced when cysteine reacts with dopaquinone; less UV-protective' },
        { term: 'TRPV1', definition: 'Transient receptor potential vanilloid 1; ion channel activated by noxious heat (>43 C) and capsaicin' },
        { term: 'myofibroblast', definition: 'Specialized fibroblast expressing alpha-smooth muscle actin that contracts wound edges during healing' },
      ],
      analogies: [
        'Melanosome transfer is like a delivery truck (the melanocyte dendrite) dropping off packages of sunscreen (melanin) to neighboring houses (keratinocytes).',
      ],
      clinicalNotes: 'Defects in filaggrin (FLG gene mutations) impair the epidermal barrier and are the strongest genetic risk factor for atopic dermatitis and ichthyosis vulgaris. Loss of barrier function leads to transepidermal water loss and allergen penetration, driving the "atopic march" from eczema to asthma and allergic rhinitis.',
    },
    4: {
      level: 4,
      summary: 'Integumentary physiology is governed by intricate signaling networks: Wnt/beta-catenin and BMP pathways regulate hair cycling, the melanocortin-1 receptor (MC1R) pathway controls pigment switching, TGF-beta/Smad signaling drives fibrosis in wound healing, and hedgehog signaling maintains epidermal homeostasis, with dysregulation underlying dermatologic disease.',
      explanation: `## Molecular Regulation of Skin Physiology

### Epidermal Homeostasis: Signaling Networks

**Stem cell maintenance:**
- Interfollicular epidermal stem cells in stratum basale express high levels of beta-1 integrin and p63
- Asymmetric division: One daughter remains basal (stem), one commits to differentiation
- Notch signaling: Cell-cell contact activates Notch -> cleaves NICD -> translocates to nucleus -> activates Hes/Hey genes -> promotes suprabasal differentiation
- Wnt inhibition (via Dkk1, sFRP) maintains interfollicular fate; Wnt activation drives follicular fate

**Calcium gradient:**
- Epidermis has a calcium gradient: Low in basal layer, highest in granular layer
- Rising Ca2+ activates:
  - Protein kinase C -> involucrin expression
  - Transglutaminase-1 -> cornified envelope assembly
  - Calcium-sensing receptor (CaSR) -> differentiation gene program

### Hair Follicle Cycle: Molecular Control

**The hair follicle bulge** contains multipotent stem cells (Lgr5+, CD34+, K15+).

**Anagen initiation:**
- Wnt/beta-catenin signaling is the master switch
- Dermal papilla (DP) cells secrete Wnt ligands -> activate beta-catenin in bulge stem cells
- Beta-catenin translocates to nucleus -> LEF1/TCF transcription -> proliferation and downward growth
- BMP inhibitors (Noggin, Gremlin from DP) relieve BMP4/BMP2 suppression of growth
- Sonic hedgehog (Shh) from matrix cells maintains DP signaling

**Catagen:**
- TGF-beta1 and TGF-beta2 from inner root sheath trigger apoptosis
- FGF5 promotes catagen entry (FGF5 loss-of-function -> angora/long hair phenotype)
- BMP signaling increases, suppressing Wnt

**Telogen:**
- BMP2/BMP4 from adipose tissue and dermal sheath maintain quiescence
- Hair germ (secondary germ) retains telogen-competent progenitors
- Transition to new anagen requires overcoming BMP threshold (Wnt vs. BMP balance)

**Hair follicle cycling clock:**
- Oscillation between activators (Wnt, Shh, Noggin) and inhibitors (BMP, TGF-beta)
- Coupled oscillator model: Adjacent follicles synchronize via paracrine signaling

### Melanocortin Pathway and Pigment Switching

**MC1R signaling:**
- Alpha-MSH (from POMC cleavage) binds MC1R on melanocytes
- MC1R (Gs-coupled GPCR) -> adenylyl cyclase -> cAMP increase
- cAMP -> PKA -> phosphorylates CREB -> activates MITF transcription
- MITF (microphthalmia-associated transcription factor): Master regulator of melanocyte biology
- MITF targets: Tyrosinase, TRP-1, TRP-2, PMEL17, Rab27a

**Pigment switching:**
- High MC1R activity -> eumelanin (brown/black)
- Low MC1R activity or ASIP (agouti signaling protein) antagonism -> pheomelanin (red/yellow)
- MC1R loss-of-function variants: Red hair, fair skin, poor tanning, increased melanoma risk

**UV response:**
- UV damages DNA -> p53 activation in keratinocytes
- p53 upregulates POMC -> increased alpha-MSH secretion
- Alpha-MSH -> MC1R -> MITF -> tanning response
- This is the molecular basis of delayed tanning (peaks 72 hours post-UV)

### TGF-beta Signaling in Wound Healing and Scarring

**Canonical pathway:**
- TGF-beta binds TGF-beta-RII -> recruits and phosphorylates TGF-beta-RI (ALK5)
- ALK5 phosphorylates Smad2/Smad3
- Smad2/3 complex with Smad4 -> nuclear translocation
- Activates genes for: Collagen I/III, fibronectin, alpha-SMA, CTGF, PAI-1

**Isoform specificity:**
| Isoform | Role in Wound Healing |
|---------|----------------------|
| TGF-beta1 | Pro-fibrotic; increases collagen deposition and myofibroblast differentiation |
| TGF-beta2 | Pro-fibrotic; synergistic with TGF-beta1 |
| TGF-beta3 | Anti-scarring; promotes regenerative healing |

**Scarring vs. Regeneration:**
- Fetal wounds heal without scarring (high TGF-beta3:TGF-beta1 ratio)
- Adult scarring involves excessive collagen I deposition and myofibroblast persistence
- Keloids: Persistent TGF-beta/Smad3 signaling, reduced Smad7 (inhibitory Smad)

### Skin Barrier: Molecular Architecture

**Lipid barrier (stratum corneum):**
- Ceramides (50%), cholesterol (25%), free fatty acids (15%)
- Arranged in lamellar bilayers with orthorhombic lateral packing
- Ceramide synthesis: Serine palmitoyltransferase -> sphinganine -> dihydroceramide -> ceramide
- ABCA12 transporter loads lipids into lamellar bodies

**Tight junctions:**
- Located in stratum granulosum (claudin-1, occludin, ZO-1)
- Form secondary paracellular barrier
- Claudin-1 knockout: Lethal transepidermal water loss

**Antimicrobial defense:**
- Cathelicidin (LL-37): Broad-spectrum antimicrobial peptide
- Beta-defensins (hBD-1, hBD-2, hBD-3): Induced by bacterial products and IL-17
- Dermcidin: Constitutively secreted in sweat
- Acidic pH (4.5-5.5) of stratum corneum inhibits pathogenic bacteria

### Sensory Transduction Mechanisms

**Mechanotransduction:**
- Piezo2 channel: Principal mechanotransducer in Merkel cells and Meissner corpuscles
- Generates receptor potential -> activates afferent nerve via synaptic transmission (Merkel) or direct coupling
- Piezo2 mutations: Loss of proprioception and discriminative touch

**Itch (pruritus) pathways:**
- Histamine-dependent: H1 receptors on C fibers -> TRPV1 activation
- Histamine-independent: IL-31 (via IL-31RA), thymic stromal lymphopoietin (TSLP), bile acids (TGR5)
- Central pathway: Gastrin-releasing peptide receptor (GRPR) neurons in dorsal horn
- Cross-talk with pain: Opioid-induced itch via mu-receptor disinhibition of GRPR neurons`,
      keyTerms: [
        { term: 'MITF', definition: 'Microphthalmia-associated transcription factor; master regulator of melanocyte development, survival, and pigmentation gene expression', pronunciation: 'M-I-T-F' },
        { term: 'MC1R', definition: 'Melanocortin-1 receptor; Gs-coupled GPCR on melanocytes that promotes eumelanin synthesis when activated by alpha-MSH' },
        { term: 'Wnt/beta-catenin', definition: 'Signaling pathway that is the master switch for anagen initiation in the hair follicle cycle and stem cell activation in the bulge' },
        { term: 'Smad2/3', definition: 'Intracellular signal transducers of TGF-beta signaling; their activation promotes collagen production and fibrosis in wound healing' },
        { term: 'Piezo2', definition: 'Mechanically-activated ion channel essential for touch sensation in Merkel cells and Meissner corpuscles' },
        { term: 'ceramide', definition: 'Sphingolipid that is the major lipid component of the stratum corneum barrier; deficiency underlies atopic dermatitis barrier dysfunction' },
      ],
      clinicalNotes: `Key molecular-clinical correlations:

1. **MC1R variants** (R151C, R160W, D294H): Loss-of-function shifts melanogenesis toward pheomelanin; associated with 2-4x increased melanoma risk independent of skin color.

2. **Hedgehog pathway mutations**: PTCH1 loss-of-function causes Gorlin syndrome (multiple basal cell carcinomas); constitutive Hh activation underlies most sporadic BCCs.

3. **Keloid pathophysiology**: Sustained TGF-beta1/Smad3 signaling with reduced Smad7 feedback causes excessive ECM deposition; TGF-beta-targeting therapies under investigation.

4. **Piezo2 channelopathy**: Biallelic loss-of-function causes distal arthrogryposis with impaired proprioception and loss of discriminative touch; identified 2014 as a novel mechanosensory disorder.`,
    },
    5: {
      level: 5,
      summary: 'Contemporary dermatologic science integrates molecular pathway understanding with targeted therapeutics, skin microbiome modulation, organoid and skin-on-chip models, and precision approaches to wound healing, pigmentary disorders, and skin cancer, informed by single-cell transcriptomics and spatial biology.',
      explanation: `## Precision Dermatology and Translational Science

### Targeted Therapeutics in Dermatology

**Key biologics:** Dupilumab (IL-4Ralpha, AD), tralokinumab (IL-13, AD), secukinumab (IL-17A, psoriasis), bimekizumab (IL-17A/F, psoriasis), guselkumab (IL-23p19, psoriasis), nemolizumab (IL-31RA, prurigo nodularis).

**JAK inhibitors:** Baricitinib (JAK1/2, alopecia areata/AD), abrocitinib (JAK1, AD).

**Hedgehog pathway inhibitors:**
- Vismodegib, sonidegib: SMO antagonists for advanced BCC
- Target: Constitutively active Hh signaling from PTCH1 loss
- Resistance: SMO mutations (D473H), pathway switching to PI3K/RAS

### Skin Microbiome

**Topographic diversity:** Sebaceous sites (C. acnes dominant), moist sites (Staphylococcus/Corynebacterium), dry sites (mixed, most diverse).

**Host interactions:** S. epidermidis produces antimicrobial peptides and activates TLR2; C. acnes maintains acidic pH via sebum lipase. AD flares correlate with S. aureus dominance (>90%).

**Therapeutics:** Topical bacteriotherapy (R. mucosa for AD), phage therapy, postbiotics.

### Advanced Wound Healing Science

**Single-cell transcriptomics of wound healing:**
- Distinct fibroblast subpopulations: Reticular (ECM scaffolding), papillary (Wnt-expressing, epithelial support), pro-fibrotic (ADAM12+, EN1+, scar-forming)
- Targeting EN1-lineage fibroblasts may enable scarless healing

**Mechanotransduction in scarring:**
- Wound tension activates YAP/TAZ via FAK -> ERK -> fibrotic gene expression
- Integrin alpha-v/beta-6 activates latent TGF-beta at wound edge
- Verteporfin (YAP inhibitor) promotes regenerative healing in preclinical models; FAK inhibitors entering clinical trials

### Melanoma Biology: From Molecular Pathogenesis to Immunotherapy

**Driver mutations and targeted therapy:**
- BRAF V600E (~50% cutaneous): Encorafenib + binimetinib
- KIT mutations (~15-20% acral/mucosal): Imatinib
- GNAQ/GNA11 (~85% uveal): Tebentafusp (gp100-directed bispecific TCR)

**Immune checkpoint therapy:**
- Anti-PD-1 monotherapy: 40-45% ORR; combo with anti-CTLA-4: ~60% ORR
- Neoadjuvant ipi/nivo: ~25% pathCR (NADINA trial)
- LAG-3 (relatlimab) + nivolumab: Improved PFS over anti-PD-1 alone

### Emerging Models and Research Frontiers

**Skin-on-chip and organoids:**
- Microfluidic devices with vascularized epidermal/dermal compartments for drug permeation and inflammation modeling
- iPSC-derived skin organoids recapitulate folliculogenesis; enable patient-specific disease modeling with CRISPR gene correction

**Spatial transcriptomics (Visium, MERFISH):**
- Maps dermal-epidermal communication zones and perifollicular immune niches at single-cell resolution

**Circadian skin biology:**
- BMAL1/CLOCK drives nocturnal keratinocyte proliferation; XPA/XPC repair peaks in afternoon
- UV is more carcinogenic in morning (low repair capacity); implications for phototherapy timing

**Neuroimmune axis:**
- TRPV1+ nociceptors release substance P and CGRP, modulating Langerhans cell activation
- Cutaneous CRH stress signaling exacerbates psoriasis and AD flares`,
      keyTerms: [
        { term: 'dupilumab', definition: 'Monoclonal antibody blocking IL-4 receptor alpha, inhibiting both IL-4 and IL-13 signaling; first biologic approved for moderate-to-severe atopic dermatitis' },
        { term: 'EN1-lineage fibroblasts', definition: 'Engrailed-1 positive fibroblast lineage identified as the primary scar-forming cell population; potential target for scarless healing strategies' },
        { term: 'tebentafusp', definition: 'Bispecific gp100-directed T-cell receptor therapy for uveal melanoma; first TCR therapeutic approved for a solid tumor' },
        { term: 'skin-on-chip', definition: 'Microfluidic device containing living skin cells in compartmentalized layers that mimics skin physiology for drug testing and disease modeling' },
        { term: 'MERFISH', definition: 'Multiplexed error-robust fluorescence in situ hybridization; spatial transcriptomics platform enabling single-cell resolution gene expression mapping in skin tissue' },
        { term: 'neoadjuvant immunotherapy', definition: 'Checkpoint inhibitor therapy given before surgical resection of melanoma; high pathologic response rates suggest improved long-term outcomes' },
      ],
      clinicalNotes: `Key practice-changing developments:

1. **JAK inhibitors**: Baricitinib/ritlecitinib for alopecia areata; abrocitinib/upadacitinib for AD. Monitor VTE, MACE, infection per boxed warning.

2. **Microbiome therapy**: Topical R. mucosa bacteriotherapy shows efficacy in pediatric AD trials; paradigm shift toward ecological skin restoration.

3. **Scarless healing**: Verteporfin (YAP inhibitor) and FAK inhibitors in trials for hypertrophic scarring; EN1-lineage fibroblast targeting is mechanistically defined.

4. **Melanoma**: Neoadjuvant ipi/nivo ~25% pathCR (NADINA); relatlimab+nivo improves PFS. Grade 3+ irAEs in ~30% with combination.

5. **Circadian dermatology**: BMAL1-driven DNA repair cycles affect UV carcinogenesis risk; implications for phototherapy scheduling.`,
    },
  },

  media: [
    {
      id: 'skin-layers-diagram',
      type: 'diagram',
      filename: 'skin-layers.svg',
      title: 'Skin Layers',
      description: 'Cross-section showing epidermis, dermis, and hypodermis with key structures',
    },
    {
      id: 'melanogenesis-pathway',
      type: 'diagram',
      filename: 'melanogenesis-pathway.svg',
      title: 'Melanogenesis Pathway',
      description: 'Tyrosinase-mediated melanin synthesis showing eumelanin and pheomelanin branches',
    },
    {
      id: 'wound-healing-phases',
      type: 'diagram',
      filename: 'wound-healing-phases.svg',
      title: 'Wound Healing Phases',
      description: 'Timeline showing hemostasis, inflammation, proliferation, and remodeling phases',
    },
    {
      id: 'hair-follicle-cycle',
      type: 'diagram',
      filename: 'hair-follicle-cycle.svg',
      title: 'Hair Follicle Cycle',
      description: 'Anagen, catagen, and telogen phases with molecular regulators',
    },
  ],

  citations: [
    {
      id: 'burns-breathnach-dermatology',
      type: 'textbook',
      title: 'Rook\'s Textbook of Dermatology',
      authors: ['Griffiths CEM', 'Barker J', 'Bleiker T', 'Chalmers R', 'Creamer D'],
      source: 'Wiley-Blackwell',
      chapter: '1-7',
    },
    {
      id: 'bolognia-dermatology',
      type: 'textbook',
      title: 'Dermatology',
      authors: ['Bolognia JL', 'Schaffer JV', 'Cerroni L'],
      source: 'Elsevier',
      chapter: '1-4, 56',
    },
    {
      id: 'openstax-anatomy',
      type: 'textbook',
      title: 'Anatomy and Physiology 2e',
      source: 'OpenStax',
      chapter: '5',
      license: 'CC BY 4.0',
    },
  ],

  crossReferences: [
    { targetId: 'physiology-immune-innate', targetType: 'process', relationship: 'related', label: 'Innate Immunity (Skin Barrier)' },
    { targetId: 'physiology-endocrine-vitamin-d', targetType: 'process', relationship: 'related', label: 'Vitamin D Metabolism' },
    { targetId: 'physiology-thermoregulation', targetType: 'process', relationship: 'sibling', label: 'Thermoregulation' },
    { targetId: 'condition-atopic-dermatitis', targetType: 'condition', relationship: 'see-also', label: 'Atopic Dermatitis' },
    { targetId: 'condition-melanoma', targetType: 'condition', relationship: 'see-also', label: 'Melanoma' },
  ],

  tags: {
    systems: ['integumentary'],
    topics: ['physiology', 'dermatology', 'wound healing', 'immunology'],
    keywords: [
      'skin', 'epidermis', 'dermis', 'keratinocyte', 'melanocyte', 'melanin',
      'thermoregulation', 'wound healing', 'hair follicle', 'sebaceous gland',
      'vitamin D', 'skin barrier', 'mechanoreceptor', 'integumentary',
    ],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'dermatology'],
    },
  },

  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default skinPhysiology;
