/**
 * Immune Response - Comprehensive Educational Content
 *
 * Covers: innate immunity overview (barriers, phagocytes, complement, inflammation),
 * adaptive immunity (T cells, B cells, antibodies), MHC/antigen presentation,
 * immunological memory, hypersensitivity reactions (Types I-IV), and autoimmunity basics.
 *
 * nameEs: Respuesta Inmunitaria
 */

import { EducationalContent } from '../../types';

export const immuneResponseContent: EducationalContent = {
  id: 'physiology-immune-response',
  type: 'process',
  name: 'Immune Response',
  alternateNames: [
    'Respuesta Inmunitaria',       // nameEs
    'Host Defense Response',
    'Immunological Response',
    'Immune Defense Mechanisms',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Your immune system is like a team of defenders that protects your body from germs using two main strategies: fast general defenses you are born with and slower, smarter defenses that learn and remember specific enemies.',
      explanation: `## How Your Body Fights Germs

### The Two Teams of Your Immune System

Your body has two teams of defenders:

**Team 1: The Fast Responders (Innate Immunity)**

These defenders are ready from the day you are born:

- **Skin and mucus** act like walls and sticky traps keeping germs out
- **Fever** raises your body temperature to make it harder for germs to survive
- **Inflammation** (redness, swelling) brings extra fighters to the injured area
- **Germ-eating cells** (phagocytes) swallow and destroy invaders
- **Complement proteins** punch holes in germs or tag them for destruction

**Team 2: The Smart Fighters (Adaptive Immunity)**

These defenders need time to study the enemy, but they never forget:

- **T cells** command the attack or directly kill infected cells
- **B cells** make **antibodies** -- Y-shaped proteins that stick to germs and mark them
- **Memory cells** remember germs so your body can fight them much faster next time

### How Cells "Show" What Is Inside Them (Antigen Presentation)

Every cell in your body has a little "display shelf" called **MHC** on its surface. Cells place tiny pieces of whatever is inside them on this shelf. If a cell is infected, immune cells can see the germ pieces and know to destroy that cell.

### Why You Usually Only Get Chicken Pox Once (Immunological Memory)

After fighting a germ, your body keeps some memory cells. If the same germ returns, these memory cells recognize it instantly and destroy it before you feel sick.

### When the Immune System Overreacts (Hypersensitivity)

Sometimes your immune system reacts too strongly:
- **Allergies**: Your body overreacts to harmless things like pollen or peanuts
- **Severe allergic reaction (anaphylaxis)**: A dangerous whole-body response that needs emergency treatment

### When the Immune System Attacks Itself (Autoimmunity)

Rarely, the immune system gets confused and attacks your own body. This causes autoimmune diseases like type 1 diabetes or lupus.`,
      keyTerms: [
        { term: 'immune system', definition: 'Your body\'s defense network that finds and destroys germs' },
        { term: 'antibody', definition: 'A Y-shaped protein made by B cells that sticks to a specific germ' },
        { term: 'antigen', definition: 'Anything foreign that triggers your immune system to respond', pronunciation: 'AN-tih-jen' },
        { term: 'MHC', definition: 'A display shelf on cells that shows pieces of what is inside them so immune cells can check' },
        { term: 'allergy', definition: 'When your immune system overreacts to something harmless' },
        { term: 'autoimmunity', definition: 'When your immune system mistakenly attacks your own body' },
      ],
      analogies: [
        'Innate immunity is like the walls and guards of a castle -- always on duty. Adaptive immunity is like detectives who study the criminal and never forget their face.',
        'MHC is like a shop window -- cells display what is inside so immune police can check for anything suspicious.',
        'Memory cells are like a photo album of criminals -- next time they show up, they are caught immediately.',
      ],
      examples: [
        'A bee sting causes redness and swelling because your innate immune system sends fighters to the area.',
        'After getting a vaccine, your body makes memory cells so you are protected without getting sick.',
        'Hay fever happens because your immune system treats pollen like a dangerous invader.',
      ],
      patientCounselingPoints: [
        'Fever and swelling are signs your immune system is working, not just signs of sickness.',
        'Vaccines train your immune system safely so it is ready to fight real infections.',
        'Allergies mean your immune system is overreacting -- treatments help calm it down.',
      ],
    },

    2: {
      level: 2,
      summary: 'The immune response integrates innate defenses (barriers, phagocytes, complement, inflammation) with adaptive mechanisms (T cells, B cells, antibodies) coordinated through antigen presentation on MHC molecules, producing immunological memory and, when dysregulated, hypersensitivity or autoimmunity.',
      explanation: `## Overview of the Immune Response

### Innate Immunity: Immediate Defense

**Physical and Chemical Barriers:**
- Skin: Keratinized epithelium prevents entry
- Mucous membranes: Trap pathogens in respiratory, GI, and urogenital tracts
- Stomach acid, lysozyme in tears, defensins in skin secretions

**Phagocytic Cells:**
- **Neutrophils**: First responders, engulf bacteria, short-lived
- **Macrophages**: Engulf pathogens, present antigens, release cytokines
- **Dendritic cells**: Capture antigens in tissues, migrate to lymph nodes to activate T cells

**Complement System:**
- ~30 plasma proteins that activate in a cascade
- Functions: opsonization (tagging), chemotaxis (attracting immune cells), membrane attack complex (punching holes in pathogens)

**Inflammation:**
- Cardinal signs: redness, heat, swelling, pain, loss of function
- Vasodilation increases blood flow; vascular permeability allows immune cell entry
- Cytokines (chemical messengers) coordinate the response

### Adaptive Immunity: Targeted Defense

**T Cells (Cell-Mediated Immunity):**

| Type | Marker | Role |
|------|--------|------|
| Helper T (Th) | CD4 | Activate B cells and macrophages via cytokines |
| Cytotoxic T (CTL) | CD8 | Kill virus-infected and tumor cells |
| Regulatory T (Treg) | CD4/CD25/FoxP3 | Suppress overactive immune responses |

**B Cells and Antibodies (Humoral Immunity):**

| Antibody | Location | Key Function |
|----------|----------|--------------|
| IgM | Blood | First produced; activates complement |
| IgG | Blood/tissues | Most abundant; crosses placenta |
| IgA | Mucosa/secretions | Protects mucosal surfaces |
| IgE | Bound to mast cells | Allergies and parasite defense |
| IgD | B cell surface | Helps activate B cells |

### MHC and Antigen Presentation

- **MHC Class I**: Found on all nucleated cells; displays intracellular peptides to CD8+ T cells
- **MHC Class II**: Found on antigen-presenting cells (APCs); displays extracellular peptides to CD4+ T cells

### Immunological Memory

| Feature | Primary Response | Secondary Response |
|---------|-----------------|-------------------|
| Speed | Days to weeks | Hours to days |
| Magnitude | Lower | Much higher |
| Antibody type | Mostly IgM | Mostly IgG |
| Affinity | Lower | Higher |

### Hypersensitivity Reactions

| Type | Name | Mechanism | Example |
|------|------|-----------|---------|
| I | Immediate | IgE + mast cell degranulation | Anaphylaxis, allergies |
| II | Cytotoxic | IgG/IgM against cell surface antigens | Hemolytic disease of newborn |
| III | Immune complex | Antigen-antibody complex deposition | Serum sickness, lupus nephritis |
| IV | Delayed | T cell-mediated | Contact dermatitis, TB skin test |

### Autoimmunity Basics

- Loss of **self-tolerance** (the immune system normally ignores its own tissues)
- Can be organ-specific (e.g., type 1 diabetes targets pancreas) or systemic (e.g., lupus affects many organs)
- Involves genetic predisposition + environmental triggers`,
      keyTerms: [
        { term: 'phagocyte', definition: 'A cell that engulfs and destroys pathogens and debris', pronunciation: 'FAG-oh-site' },
        { term: 'complement', definition: 'A cascade of blood proteins that enhance immune defense through opsonization, inflammation, and direct lysis' },
        { term: 'MHC', definition: 'Major Histocompatibility Complex; surface proteins that present antigens to T cells', pronunciation: 'M-H-C' },
        { term: 'cytokine', definition: 'A signaling molecule released by immune cells to coordinate the immune response', pronunciation: 'SY-toh-kine' },
        { term: 'hypersensitivity', definition: 'An exaggerated or inappropriate immune response causing tissue damage' },
        { term: 'self-tolerance', definition: 'The immune system\'s ability to avoid attacking the body\'s own tissues' },
      ],
      analogies: [
        'MHC Class I is like a security badge every cell must wear -- it shows what is inside. If a cell displays something foreign, killer T cells destroy it.',
        'Complement proteins are like a fire alarm system: once triggered, they recruit firefighters, spray water, and punch holes in the threat.',
        'Autoimmunity is like a guard dog that attacks its own family -- the defense system turns against the body it should protect.',
      ],
    },

    3: {
      level: 3,
      summary: 'The integrated immune response involves innate pattern recognition triggering inflammation and antigen presentation via MHC molecules, which activates clonally selected T and B lymphocytes that differentiate into effector and memory cells; dysregulation produces four types of hypersensitivity and can lead to autoimmune disease through loss of central or peripheral tolerance.',
      explanation: `## Integrated Immune Response

### Innate Immunity -- Molecular Mechanisms

**Pattern Recognition:**
- PAMPs (pathogen-associated molecular patterns) on microbes are recognized by PRRs (pattern recognition receptors)
- Key PRRs: Toll-like receptors (TLRs), NOD-like receptors (NLRs), RIG-I-like receptors (RLRs)
- TLR4 recognizes LPS (gram-negative bacteria); TLR3 recognizes dsRNA (viruses)

**Phagocytosis:**
1. Recognition and attachment via PRRs or opsonin receptors
2. Engulfment into phagosome
3. Phagolysosome fusion
4. Killing via reactive oxygen species (oxidative burst), nitric oxide, enzymes

**Complement Pathways:**
- Classical: Initiated by antibody-antigen complexes (C1q binding)
- Lectin: Mannose-binding lectin recognizes pathogen sugars
- Alternative: Spontaneous C3 hydrolysis on pathogen surfaces
- All converge at C3 convertase; downstream: opsonization (C3b), anaphylatoxins (C3a, C5a), MAC (C5b-9)

**Inflammatory Cascade:**
- Mast cells release histamine (vasodilation, permeability)
- Macrophages release TNF-alpha, IL-1, IL-6 (fever, acute-phase response)
- Neutrophil recruitment via selectins, integrins, and chemokines (IL-8)

### MHC and Antigen Presentation

**MHC Class I Pathway (Endogenous):**
1. Cytosolic proteins degraded by proteasome
2. Peptides transported into ER via TAP (Transporter Associated with antigen Processing)
3. Peptides (8-10 amino acids) loaded onto MHC I with beta-2 microglobulin
4. Complex transported to cell surface
5. Recognized by CD8+ T cells

**MHC Class II Pathway (Exogenous):**
1. Extracellular antigens endocytosed by APCs
2. Degraded in endosomes/lysosomes
3. MHC II synthesized in ER with invariant chain (Ii, CD74)
4. Ii cleaved in endosome, leaving CLIP in peptide groove
5. HLA-DM catalyzes CLIP removal and peptide (13-25 aa) loading
6. Complex transported to cell surface
7. Recognized by CD4+ T cells

**Cross-Presentation:**
- Dendritic cells present exogenous antigens on MHC I
- Critical for activating CD8+ responses against tumors and viruses not infecting APCs

### Adaptive Immunity -- T Cell Activation

**Three-Signal Model:**
1. Signal 1: TCR recognizes peptide-MHC complex
2. Signal 2: Co-stimulation (CD28 on T cell binds B7/CD80/CD86 on APC)
3. Signal 3: Cytokine environment directs differentiation

**CD4+ T Helper Subsets:**

| Subset | Inducing Cytokines | Transcription Factor | Effector Cytokines | Target |
|--------|-------------------|---------------------|-------------------|--------|
| Th1 | IL-12, IFN-gamma | T-bet | IFN-gamma | Intracellular pathogens |
| Th2 | IL-4 | GATA3 | IL-4, IL-5, IL-13 | Helminths, allergies |
| Th17 | IL-6, TGF-beta | RORgammat | IL-17, IL-22 | Extracellular bacteria, fungi |
| Treg | TGF-beta, IL-2 | FoxP3 | IL-10, TGF-beta | Immune suppression |
| Tfh | IL-6, IL-21 | Bcl-6 | IL-21 | B cell help in germinal centers |

### B Cell Activation and Antibody Production

**T-Dependent Activation:**
1. BCR binds antigen and internalizes it
2. B cell presents processed peptide on MHC II
3. Tfh cell recognizes peptide-MHC II and provides CD40L + IL-21
4. B cell enters germinal center reaction
5. Somatic hypermutation + affinity maturation
6. Class switch recombination (IgM to IgG/IgA/IgE)
7. Differentiation into plasma cells and memory B cells

### Immunological Memory

**Memory T Cells:**
- Central memory (TCM): CD62L+CCR7+, reside in lymph nodes, high proliferative capacity
- Effector memory (TEM): CD62L-CCR7-, patrol tissues, rapid effector function
- Tissue-resident memory (TRM): Remain in barrier tissues, non-circulating

**Memory B Cells:**
- Persist in lymphoid organs; lower activation threshold
- Rapid differentiation to plasma cells on re-exposure
- Already class-switched (IgG/IgA)

### Hypersensitivity Reactions

**Type I (Immediate / IgE-Mediated):**
- Sensitization: First exposure induces IgE production; IgE binds FcepsilonRI on mast cells
- Re-exposure: Antigen cross-links IgE, mast cell degranulation
- Early phase (minutes): Histamine, prostaglandins -- vasodilation, bronchoconstriction
- Late phase (4-8 hours): Eosinophil/Th2 recruitment, chronic inflammation
- Examples: Anaphylaxis, allergic rhinitis, asthma, food allergies

**Type II (Cytotoxic / Antibody-Mediated):**
- IgG or IgM binds antigens on cell surfaces
- Mechanisms: Complement-mediated lysis, ADCC, opsonization
- Examples: Hemolytic disease of newborn (anti-Rh), autoimmune hemolytic anemia, Goodpasture syndrome

**Type III (Immune Complex):**
- Antigen-antibody complexes deposit in tissues
- Activate complement, recruit neutrophils
- Tissue damage at deposition sites
- Examples: Serum sickness, lupus nephritis, post-streptococcal glomerulonephritis

**Type IV (Delayed / T Cell-Mediated):**
- T cell activation takes 24-72 hours
- Type IVa: Th1/macrophage activation (granulomas in TB)
- Type IVb: Th2/eosinophil (chronic asthma)
- Type IVc: CTL-mediated (contact dermatitis, Stevens-Johnson syndrome)
- Examples: TB skin test (Mantoux), contact dermatitis, graft rejection

### Autoimmunity

**Central Tolerance:**
- Thymus: Negative selection eliminates self-reactive T cells; AIRE expresses tissue-specific antigens
- Bone marrow: Self-reactive B cells undergo receptor editing or deletion

**Peripheral Tolerance:**
- Tregs suppress self-reactive cells
- Anergy: T cell activation without co-stimulation leads to unresponsiveness
- Activation-induced cell death (AICD): Fas/FasL pathway

**Autoimmune Disease Mechanisms:**
- Molecular mimicry: Pathogen antigens resemble self-antigens (e.g., rheumatic fever)
- Epitope spreading: Initial tissue damage exposes new self-antigens
- Bystander activation: Inflammation activates self-reactive clones
- Superantigens: Nonspecific T cell activation`,
      keyTerms: [
        { term: 'TAP', definition: 'Transporter Associated with antigen Processing; shuttles cytosolic peptides into the ER for MHC I loading' },
        { term: 'cross-presentation', definition: 'Process by which dendritic cells present exogenous antigens on MHC I to activate CD8+ T cells' },
        { term: 'somatic hypermutation', definition: 'Introduction of point mutations in immunoglobulin variable regions during the germinal center reaction to improve antigen binding' },
        { term: 'class switch recombination', definition: 'DNA recombination event changing the antibody constant region (e.g., IgM to IgG) while keeping the same antigen specificity' },
        { term: 'anaphylaxis', definition: 'Severe systemic type I hypersensitivity reaction with vasodilation, bronchoconstriction, and potential cardiovascular collapse', pronunciation: 'an-uh-fil-AK-sis' },
        { term: 'molecular mimicry', definition: 'Mechanism of autoimmunity where pathogen antigens structurally resemble self-antigens, causing cross-reactive immune responses' },
      ],
      clinicalNotes: 'Type I hypersensitivity: Epinephrine is first-line for anaphylaxis; tryptase levels confirm mast cell degranulation. Type II: Direct Coombs test detects antibodies on RBCs. Type III: Low complement (C3, C4) in active immune complex disease. Type IV: Patch testing for contact dermatitis. AIRE mutations cause APS-1 (autoimmune polyendocrinopathy-candidiasis-ectodermal dystrophy).',
    },

    4: {
      level: 4,
      summary: 'The immune response integrates innate pattern recognition, complement activation, and inflammatory signaling with adaptive lymphocyte activation through MHC-restricted antigen presentation, generating clonally expanded effector populations and durable immunological memory; its dysregulation encompasses Gell-Coombs hypersensitivity types I-IV and autoimmune pathology arising from failures in central and peripheral tolerance checkpoints.',
      explanation: `## Advanced Immune Response Mechanisms

### Innate-Adaptive Interface

**Dendritic Cell Maturation:**
- Immature DCs: High endocytosis, low MHC II/B7; PRR activation triggers maturation
- Mature DCs: Upregulate MHC II, CD80/86, migrate to lymph nodes via CCR7
- DC subsets: cDC1 (cross-present to CD8+), cDC2 (present to CD4+), pDC (type I IFN)
- Inflammasome products (IL-1beta, IL-18) bridge to Th17 and Th1 differentiation

### MHC Biology in Depth

**HLA Polymorphism and Disease:**
- Most polymorphic human genes; codominant expression (6 Class I, up to 12 Class II per cell)
- Key associations: HLA-B27/ankylosing spondylitis (~100x RR), DQ2-DQ8/celiac (~7x), DR4/RA (~4x), DR3-DR4/T1DM (~25x heterozygote)
- TAP deficiency (bare lymphocyte syndrome type I): Low MHC I, respiratory infections
- MHC II deficiency (type II): CIITA/RFX5 mutations; CD4 lymphopenia

### T Cell Signaling and Differentiation

**Proximal TCR Signaling:** Lck phosphorylates ITAMs, ZAP-70 recruited, LAT/SLP-76 scaffold, PLCgamma1 generates IP3 (Ca2+/NFAT) + DAG (NF-kB, MAPK/AP-1)

**Metabolic Reprogramming:** Naive (OXPHOS) to effector (glycolysis/mTOR) to memory (FAO/AMPK)

**T Cell Exhaustion:** Chronic stimulation leads to progressive dysfunction, PD-1/LAG-3/TIM-3 upregulation, TOX-driven epigenetic remodeling; partially reversible by checkpoint blockade

### Immunological Memory Mechanisms

- IL-7/IL-15 support memory T cell survival; T-bet (effector) vs TCF-1/Bcl-6 (memory)
- Long-lived plasma cells (LLPCs): Bone marrow niches, CXCL12 retention, APRIL/BAFF/IL-6 survival; secrete antibodies for decades; CD20-negative (resistant to rituximab)

### Hypersensitivity -- Molecular Mechanisms

**Type I -- IgE Pathway:**
- Sensitization: Allergen-specific Th2 response, IL-4 drives B cell IgE class switch
- IgE binds FcepsilonRI (high-affinity) on mast cells/basophils
- Re-exposure: Multivalent allergen cross-links IgE-FcepsilonRI
- Degranulation: Preformed mediators (histamine, tryptase, heparin)
- Lipid mediators: PGD2, LTC4/D4/E4 (slow-reacting substance of anaphylaxis)
- Late phase: IL-5 recruits eosinophils; IL-13 drives mucus, remodeling

**Type II -- Mechanisms:**
- Complement-dependent cytotoxicity (CDC): Classical pathway via C1q
- ADCC: FcgammaRIII (CD16) on NK cells
- Opsonization: FcgammaRI on macrophages
- Anti-receptor antibodies: Stimulating (Graves, anti-TSH-R) or blocking (myasthenia gravis, anti-AChR)

**Type III -- Immune Complex Clearance:**
- Normal: Complement-opsonized complexes cleared by erythrocyte CR1 and hepatic Kupffer cells
- Pathology: Excess antigen, complement consumption, deposition in vessels/glomeruli/joints
- Arthus reaction: Localized type III (intradermal injection)
- Serum sickness: Systemic type III (7-14 days after antigen exposure)

**Type IV -- Subtypes (Revised Classification):**

| Subtype | Effector Cell | Mediator | Example |
|---------|---------------|----------|---------|
| IVa | Th1 | IFN-gamma (macrophage activation) | Tuberculin reaction, granulomas |
| IVb | Th2 | IL-4, IL-5 (eosinophils) | Chronic allergic asthma |
| IVc | CTL | Perforin/granzyme | Contact dermatitis, SJS/TEN |
| IVd | T cells | IL-8 (neutrophils) | AGEP, Behcet |

### Autoimmunity -- Detailed Pathogenesis

**Genetic Susceptibility:**
- HLA associations (strongest genetic risk)
- Non-HLA genes: PTPN22 (phosphatase affecting TCR signaling), CTLA-4 polymorphisms, IL-2RA
- Polygenic threshold model

**Environmental Triggers:**
- Infections: Molecular mimicry, bystander activation, epitope spreading
- Gut microbiome dysbiosis: Reduced regulatory signaling
- Hormones: Female predominance in many autoimmune diseases (estrogen effects on B cells)
- Epigenetics: DNA methylation changes (SLE: hypomethylation)

**Effector Mechanisms by Disease:**
- Organ-specific: Type 1 diabetes (CD8+ CTL destroy beta cells), Hashimoto thyroiditis (Th1 + anti-thyroid antibodies)
- Systemic: SLE (immune complexes, anti-dsDNA), RA (Th17, anti-CCP, pannus formation)`,
      keyTerms: [
        { term: 'HLA', definition: 'Human Leukocyte Antigen; human MHC genes encoding antigen-presenting molecules, the most polymorphic loci in the genome' },
        { term: 'cross-presentation', definition: 'Ability of cDC1 dendritic cells to load exogenous antigens onto MHC I, enabling CD8+ T cell priming against non-APC-infecting pathogens' },
        { term: 'T cell exhaustion', definition: 'Progressive dysfunction of T cells under chronic antigen stimulation, marked by inhibitory receptor expression and epigenetic remodeling' },
        { term: 'FcepsilonRI', definition: 'High-affinity IgE receptor on mast cells and basophils; cross-linking triggers degranulation in type I hypersensitivity' },
        { term: 'Arthus reaction', definition: 'Localized type III hypersensitivity reaction at the site of antigen injection, involving immune complex deposition and complement activation' },
        { term: 'PTPN22', definition: 'Protein tyrosine phosphatase non-receptor type 22; risk allele R620W associated with multiple autoimmune diseases via altered TCR signaling threshold' },
      ],
      clinicalNotes: 'TAP deficiency and MHC II deficiency (bare lymphocyte syndromes) present with recurrent infections and are diagnosed by flow cytometry for surface HLA expression. Anti-IgE therapy (omalizumab) reduces free IgE in severe allergic asthma. Desensitization protocols gradually increase allergen exposure to shift from Th2/IgE to Treg/IgG4 responses. In SJS/TEN, HLA screening (e.g., HLA-B*5701 before abacavir, HLA-B*1502 before carbamazepine in certain populations) prevents severe type IVc reactions.',
    },

    5: {
      level: 5,
      summary: 'The immune response constitutes a dynamically regulated continuum from innate pattern recognition through inflammasome and complement activation to MHC-restricted adaptive lymphocyte priming, clonal expansion, and memory differentiation, with dysregulation manifesting as Gell-Coombs hypersensitivity types I-IV or autoimmune pathology driven by genetic susceptibility, tolerance checkpoint failures, and environmental triggers -- all now targetable by precision immunotherapies.',
      explanation: `## Advanced and Clinical Immune Response

### Innate Sensing -- Advanced Concepts

**Trained Immunity vs Tolerance:**
- Trained immunity: Epigenetic reprogramming (H3K4me3) of monocytes after beta-glucan/BCG; metabolic shift to glycolysis
- Endotoxin tolerance: Chromatin remodeling at inflammatory loci; clinical: sepsis-associated immunosuppression
- Complement at innate-adaptive interface: C3d lowers B cell activation ~1000-fold (CD21/CD19); C1q clears apoptotic cells (C1q deficiency: >90% SLE)

### MHC -- Molecular and Population Genetics

**Structure-Function:**
- Class I: alpha1/alpha2 groove + beta-2m; closed-ended (8-10 mer); peptide editing by tapasin
- Class II: alpha1/beta1 groove; open-ended (13-25 mer); editing by HLA-DM
- Non-classical: HLA-E (NK inhibition), HLA-G (maternal-fetal tolerance), CD1 (lipid antigens to NKT), MR1 (riboflavin metabolites to MAIT)

**HLA in Transplantation:**
- Allorecognition: Direct (donor APCs), indirect (recipient APCs present donor peptides), semi-direct
- DSA: Pre-formed or de novo; virtual crossmatch via single-antigen bead assays

### T Cell Biology -- Current Concepts

- Kinetic proofreading model: Sustained TCR-pMHC dwell time for full ITAM phosphorylation
- T cell fate: Asymmetric division; T-bet/Blimp-1 (effector) vs TCF-1/BACH2 (memory/stemness)
- TRM biology: TGF-beta induces CD103; CD69 blocks S1PR1 egress; rapid IFN-gamma alarm; mucosal vaccine target

### Hypersensitivity -- Translational Immunology

**Type I Therapeutics:** Omalizumab (anti-IgE), dupilumab (anti-IL-4Ralpha), mepolizumab (anti-IL-5), allergen immunotherapy (IgE-to-IgG4 shift, Treg induction)

**Type II Receptor Subtypes:** Cytotoxic (AIHA, ITP, Goodpasture), stimulatory (Graves), inhibitory (MG, anti-NMDA-R encephalitis), non-lytic (membranous nephropathy/anti-PLA2R)

**Type III Diagnostics:** Low C3/C4 = active disease; granular IF deposits (vs linear in type II); plasmapheresis for severe cases

**Type IV Pharmacogenomics:** B*57:01/abacavir, B*15:02/carbamazepine-SJS (Southeast Asian), B*58:01/allopurinol; p-i concept (drug-immune receptor interaction without hapten processing)

### Autoimmunity -- Precision Medicine

**Tolerance Failures:** Central (AIRE/APS-1) and peripheral (CTLA-4 haploinsufficiency, LRBA deficiency, IPEX/FoxP3, ALPS/Fas)

**Biomarkers and Targeted Therapies:**
- RA: Anti-CCP; abatacept, rituximab, JAK inhibitors
- SLE: Anti-dsDNA; belimumab (anti-BAFF), anifrolumab (anti-IFNAR)
- T1DM: Anti-GAD65; teplizumab (anti-CD3, delays onset)
- MS: Oligoclonal bands; ocrelizumab (anti-CD20), natalizumab
- MG: Anti-AChR; efgartigimod (FcRn blocker), complement inhibition

**irAEs from Checkpoint Inhibitors:** CTLA-4 blockade causes more colitis; PD-1 causes more thyroiditis/pneumonitis; manage with graded steroids and organ-specific biologics`,
      keyTerms: [
        { term: 'trained immunity', definition: 'Epigenetic and metabolic reprogramming of innate cells conferring enhanced responses to secondary heterologous stimuli, mediated by histone modifications and metabolic shifts' },
        { term: 'MAIT cell', definition: 'Mucosal-associated invariant T cell; innate-like T cell recognizing microbial riboflavin metabolites via MR1, abundant in human blood and mucosal tissues' },
        { term: 'kinetic proofreading', definition: 'TCR signaling model requiring sustained pMHC engagement to achieve full ITAM phosphorylation and T cell activation' },
        { term: 'p-i concept', definition: 'Pharmacological interaction model of drug hypersensitivity where drugs bind non-covalently to MHC or TCR, activating T cells without hapten processing' },
        { term: 'anifrolumab', definition: 'Anti-type I interferon receptor (IFNAR) monoclonal antibody approved for moderate-to-severe SLE' },
        { term: 'teplizumab', definition: 'Anti-CD3 monoclonal antibody that delays clinical onset of type 1 diabetes in at-risk individuals by modulating T cell responses' },
      ],
      clinicalNotes: `**Board-Relevant and Practice Points:**
- C1q deficiency has the strongest single-gene association with SLE (~93% penetrance)
- TAP deficiency: Bare lymphocyte syndrome type I with bronchiectasis, not severe early infections like MHC II deficiency
- MHC II deficiency: Severe combined immunodeficiency phenotype with CD4 lymphopenia
- HLA-B*57:01 screening before abacavir is standard of care (100% NPV for hypersensitivity)
- Tryptase: Draw within 1-2 hours of suspected anaphylaxis; elevated baseline suggests mastocytosis
- Type III: Serum sickness classically 7-14 days after exposure; accelerated (2-4 days) on re-exposure
- ALPS diagnostic criteria: Required -- chronic nonmalignant lymphadenopathy/splenomegaly + elevated DNT cells (CD3+TCRab+CD4-CD8-) >1.5% of lymphocytes
- irAE management: Do NOT discontinue checkpoint inhibitor for grade 1 endocrinopathy (replace hormone); grade 3+ other organ toxicity requires holding therapy
- Teplizumab (anti-CD3): First FDA-approved drug to delay type 1 diabetes onset in stage 2 (presymptomatic) disease`,
    },
  },

  media: [
    {
      id: 'immune-response-overview',
      type: 'diagram',
      filename: 'immune-response-overview.svg',
      title: 'Integrated Immune Response Overview',
      description: 'Diagram showing innate and adaptive arms of immunity with key cell types and interactions',
    },
    {
      id: 'mhc-antigen-presentation',
      type: 'diagram',
      filename: 'mhc-antigen-presentation.svg',
      title: 'MHC Class I and Class II Antigen Presentation Pathways',
      description: 'Endogenous (MHC I) and exogenous (MHC II) antigen processing and presentation steps',
    },
    {
      id: 'hypersensitivity-types',
      type: 'diagram',
      filename: 'hypersensitivity-types-i-iv.svg',
      title: 'Gell-Coombs Hypersensitivity Reactions Types I-IV',
      description: 'Mechanisms, timelines, and clinical examples of all four hypersensitivity types',
    },
    {
      id: 'autoimmunity-mechanisms',
      type: 'diagram',
      filename: 'autoimmunity-tolerance-mechanisms.svg',
      title: 'Central and Peripheral Tolerance Checkpoints',
      description: 'Diagram of tolerance mechanisms and points of failure leading to autoimmune disease',
    },
  ],
  citations: [
    {
      id: 'janeway-immunobiology',
      type: 'textbook',
      title: 'Janeway\'s Immunobiology',
      authors: ['Murphy K', 'Weaver C'],
      source: 'Janeway\'s Immunobiology, 10th Edition',
      chapter: '1-15',
    },
    {
      id: 'abbas-cellular-molecular',
      type: 'textbook',
      title: 'Cellular and Molecular Immunology',
      authors: ['Abbas AK', 'Lichtman AH', 'Pillai S'],
      source: 'Cellular and Molecular Immunology, 10th Edition',
    },
    {
      id: 'gell-coombs-classification',
      type: 'article',
      title: 'Classification of allergic reactions responsible for clinical hypersensitivity and disease',
      authors: ['Gell PGH', 'Coombs RRA'],
      source: 'Clinical Aspects of Immunology',
    },
    {
      id: 'netea-trained-immunity-2020',
      type: 'article',
      title: 'Trained Immunity: a Tool for Reducing Susceptibility to and the Severity of SARS-CoV-2 Infection',
      authors: ['Netea MG', 'Giamarellos-Bourboulis EJ', 'Dominguez-Andres J'],
      source: 'Cell',
      url: 'https://doi.org/10.1016/j.cell.2020.04.042',
    },
  ],
  crossReferences: [
    { targetId: 'physiology-immune-innate-immunity', targetType: 'concept', relationship: 'related', label: 'Innate Immunity (Detailed)' },
    { targetId: 'physiology-immune-adaptive-immunity', targetType: 'concept', relationship: 'related', label: 'Adaptive Immunity (Detailed)' },
    { targetId: 'physiology-immune-vaccination-science', targetType: 'concept', relationship: 'related', label: 'Vaccination Science' },
    { targetId: 'structure-thymus', targetType: 'structure', relationship: 'related', label: 'Thymus' },
    { targetId: 'structure-spleen', targetType: 'structure', relationship: 'related', label: 'Spleen' },
    { targetId: 'structure-bone-marrow', targetType: 'structure', relationship: 'related', label: 'Bone Marrow' },
  ],
  tags: {
    systems: ['immune', 'lymphatic'],
    topics: ['immunology', 'physiology', 'pathology'],
    keywords: [
      'immune response', 'innate immunity', 'adaptive immunity', 'MHC', 'antigen presentation',
      'T cells', 'B cells', 'antibodies', 'complement', 'inflammation', 'hypersensitivity',
      'autoimmunity', 'immunological memory', 'HLA', 'tolerance',
    ],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'pathology', 'pediatrics', 'surgery'] },
  },

  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default immuneResponseContent;
