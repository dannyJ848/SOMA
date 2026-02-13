import { EducationalContent } from '../../types';

export const innateImmunityContent: EducationalContent = {
  id: 'physiology-immune-innate-immunity',
  type: 'concept',
  name: 'Innate Immunity',
  alternateNames: ['Non-specific Immunity', 'Natural Immunity', 'Native Immunity'],

  levels: {
    1: {
      level: 1,
      summary: 'Innate immunity is your body\'s first line of defense that you\'re born with, working immediately to stop germs before they can make you sick.',
      explanation: `Think of your body like a castle with many defenses. Innate immunity includes all the protections you were born with that work right away when germs try to invade.

**Your Body's Walls and Guards:**

1. **Skin - The Castle Wall**
   - Your skin is like a strong wall around your body
   - It keeps germs on the outside where they can't hurt you
   - Cuts and scrapes are like holes in the wall that let germs in

2. **Mucus - The Sticky Trap**
   - The wet, sticky stuff in your nose and throat traps germs
   - Tiny hairs called cilia sweep trapped germs out
   - When you blow your nose, you're getting rid of trapped germs!

3. **Tears and Saliva - The Germ Killers**
   - These contain special chemicals that kill germs
   - That's one reason why animals lick their wounds

4. **Stomach Acid - The Acid Bath**
   - The acid in your stomach kills most germs you swallow
   - This is why you can eat food without getting sick from most germs

**Special Germ-Fighting Cells:**

When germs get past these barriers, special cells jump into action:

- **Germ-Eating Cells** (phagocytes): These cells literally eat germs!
- **Natural Killer Cells**: They find and destroy cells that have been infected

**Inflammation - The Alarm System:**

When you get hurt or infected, your body sounds an alarm:
- The area gets red, warm, and swollen
- This brings more germ-fighting cells to the area
- It's uncomfortable, but it means your body is fighting back!`,
      keyTerms: [
        { term: 'innate immunity', definition: 'The protection against germs that you\'re born with' },
        { term: 'barrier', definition: 'Something that blocks or stops germs from getting in' },
        { term: 'inflammation', definition: 'When part of your body becomes red, warm, and swollen to fight germs' },
        { term: 'phagocyte', definition: 'A cell that eats germs', pronunciation: 'FAG-oh-site' },
      ],
      analogies: [
        'Your skin is like the walls of a castle, keeping invaders out.',
        'Mucus works like flypaper, trapping germs before they can get deeper into your body.',
        'Inflammation is like a fire alarm - it alerts your body that something\'s wrong and calls for help.',
      ],
      examples: [
        'When you get a splinter, the area gets red and swollen - that\'s inflammation bringing germ fighters to the area.',
        'Your nose runs when you have a cold because your body is making extra mucus to trap virus particles.',
      ],
    },
    2: {
      level: 2,
      summary: 'Innate immunity comprises physical barriers, chemical defenses, cellular responses, and inflammatory mechanisms that provide immediate, non-specific protection against pathogens.',
      explanation: `The innate immune system provides rapid, non-specific defense mechanisms that you're born with. Unlike adaptive immunity, it doesn't improve with repeated exposure and doesn't target specific pathogens.

**Physical Barriers:**

1. **Skin (Integumentary System)**
   - Multilayered epithelium with keratinized outer layer
   - Tight junctions between cells prevent pathogen entry
   - Constant shedding removes attached microbes
   - Commensal bacteria compete with pathogens

2. **Mucous Membranes**
   - Line respiratory, digestive, urinary, and reproductive tracts
   - Mucus traps pathogens
   - Cilia (respiratory tract) move mucus upward (mucociliary escalator)

**Chemical Barriers:**

| Location | Chemical Defense | Function |
|----------|-----------------|----------|
| Skin | Sebum, sweat | Acidic pH inhibits bacterial growth |
| Tears | Lysozyme | Breaks down bacterial cell walls |
| Stomach | Hydrochloric acid | Kills ingested pathogens |
| Saliva | Lactoferrin | Binds iron, starving bacteria |
| Vagina | Lactic acid | Maintains acidic pH |

**Cellular Defenses:**

1. **Neutrophils** - First responders (60-70% of WBCs)
   - Arrive within minutes to hours
   - Engulf and kill bacteria
   - Release antimicrobial chemicals
   - Short-lived (die within hours to days)

2. **Macrophages** - "Big eaters"
   - Engulf pathogens and dead cells
   - Present antigens to adaptive immune cells
   - Release cytokines to coordinate immune response

3. **Dendritic Cells** - "Messengers"
   - Capture antigens in tissues
   - Travel to lymph nodes
   - Activate T cells (bridge to adaptive immunity)

4. **Natural Killer (NK) Cells**
   - Kill virus-infected cells and tumor cells
   - Don't need prior exposure to recognize targets
   - Release perforin and granzymes

**The Complement System:**

A group of ~30 proteins that work together to:
- Tag pathogens for destruction (opsonization)
- Attract immune cells to infection sites
- Directly kill some pathogens (membrane attack complex)

**Inflammation:**

Cardinal signs: Redness, Heat, Swelling, Pain, Loss of function

Purpose:
- Increases blood flow to the area
- Makes blood vessels "leaky" so immune cells can enter tissue
- Recruits more immune cells
- Contains infection locally`,
      keyTerms: [
        { term: 'pathogen', definition: 'Any microorganism that can cause disease (bacteria, viruses, fungi, parasites)', pronunciation: 'PATH-oh-jen' },
        { term: 'lysozyme', definition: 'An enzyme in tears and saliva that breaks down bacterial cell walls', pronunciation: 'LY-so-zyme' },
        { term: 'neutrophil', definition: 'The most common white blood cell; first responder to infections', pronunciation: 'NOO-troh-fil' },
        { term: 'macrophage', definition: 'Large phagocytic cell that engulfs pathogens and presents antigens', pronunciation: 'MAK-roh-fayj' },
        { term: 'complement', definition: 'A system of proteins that enhance the ability to fight pathogens' },
        { term: 'opsonization', definition: 'Coating a pathogen with proteins to make it easier for phagocytes to engulf', pronunciation: 'OP-son-ih-ZAY-shun' },
      ],
      analogies: [
        'Neutrophils are like foot soldiers - first to arrive, fight hard, but don\'t live long.',
        'Macrophages are like tanks - slower but more powerful and long-lasting.',
        'The complement system is like a "paint" that marks enemies, making them easier targets.',
      ],
    },
    3: {
      level: 3,
      summary: 'Innate immunity utilizes pattern recognition receptors to detect conserved pathogen-associated molecular patterns, triggering immediate effector mechanisms including phagocytosis, inflammation, and complement activation.',
      explanation: `The innate immune system recognizes pathogens through germline-encoded pattern recognition receptors (PRRs) that detect conserved molecular structures.

**Pattern Recognition:**

**Pathogen-Associated Molecular Patterns (PAMPs):**
- Conserved structures essential for pathogen survival
- Not found in host cells
- Examples:
  - LPS (lipopolysaccharide): Gram-negative bacterial cell walls
  - Peptidoglycan: Bacterial cell walls
  - Flagellin: Bacterial flagella
  - dsRNA: Viral replication intermediate
  - CpG DNA: Unmethylated bacterial DNA

**Damage-Associated Molecular Patterns (DAMPs):**
- Released from damaged or dying host cells
- Alert immune system to tissue damage
- Examples: ATP, HMGB1, heat shock proteins, uric acid

**Pattern Recognition Receptors (PRRs):**

1. **Toll-Like Receptors (TLRs)** - 10 in humans
   - TLR1/2/6: Lipopeptides
   - TLR3: dsRNA
   - TLR4: LPS
   - TLR5: Flagellin
   - TLR7/8: ssRNA
   - TLR9: CpG DNA
   - Cell surface (TLR1,2,4,5,6) vs endosomal (TLR3,7,8,9)

2. **NOD-Like Receptors (NLRs)** - Cytoplasmic
   - NOD1: Detects gram-negative peptidoglycan
   - NOD2: Detects muramyl dipeptide (all bacteria)
   - NLRP3: Forms inflammasome

3. **RIG-I-Like Receptors (RLRs)** - Cytoplasmic
   - RIG-I and MDA5: Detect viral RNA
   - Trigger type I interferon response

4. **C-Type Lectin Receptors (CLRs)**
   - Dectin-1: Beta-glucans (fungi)
   - Mannose receptor: Mannose on pathogens

**Phagocytosis Process:**

1. Recognition and attachment (receptor-mediated)
2. Engulfment (pseudopod extension)
3. Phagosome formation
4. Phagolysosome fusion
5. Killing mechanisms:
   - Oxidative burst (ROS: superoxide, hydrogen peroxide)
   - Nitric oxide (NO)
   - Antimicrobial peptides (defensins)
   - Enzymes (lysozyme, proteases)
6. Antigen presentation (macrophages, dendritic cells)

**Complement System Pathways:**

| Pathway | Initiator | Key Components |
|---------|-----------|----------------|
| Classical | Antibody-antigen complexes | C1q, C4, C2 |
| Lectin | Mannose on pathogen surfaces | MBL, MASP, C4, C2 |
| Alternative | Spontaneous C3 hydrolysis | C3, Factor B, Factor D |

All pathways converge at C3 convertase formation, leading to:
- C3b opsonization
- C5a and C3a anaphylatoxins (inflammation)
- Membrane Attack Complex (MAC: C5b-9)

**Inflammatory Mediators:**

*Cytokines:*
- TNF-alpha: Fever, endothelial activation
- IL-1beta: Fever, acute phase response
- IL-6: Acute phase proteins, B cell differentiation
- IL-12: Th1 differentiation, NK activation

*Chemokines:*
- IL-8 (CXCL8): Neutrophil recruitment
- MCP-1 (CCL2): Monocyte recruitment

*Lipid Mediators:*
- Prostaglandins: Pain, fever
- Leukotrienes: Bronchoconstriction, vascular permeability`,
      keyTerms: [
        { term: 'PAMP', definition: 'Pathogen-associated molecular pattern; conserved microbial structures recognized by innate immunity' },
        { term: 'DAMP', definition: 'Damage-associated molecular pattern; molecules released from damaged cells that trigger inflammation' },
        { term: 'Toll-like receptor', definition: 'Pattern recognition receptor that detects PAMPs and initiates innate immune responses' },
        { term: 'inflammasome', definition: 'Multiprotein complex that activates caspase-1, leading to IL-1beta and IL-18 release', pronunciation: 'in-FLAM-a-some' },
        { term: 'oxidative burst', definition: 'Rapid release of reactive oxygen species by phagocytes to kill engulfed pathogens' },
        { term: 'MAC', definition: 'Membrane attack complex; complement proteins (C5b-9) that form pores in pathogen membranes' },
      ],
      clinicalNotes: 'TLR4 recognizes LPS, explaining the inflammatory response to gram-negative sepsis. NOD2 mutations are associated with Crohn\'s disease. Complement deficiencies predispose to specific infections: C3 deficiency leads to recurrent pyogenic infections; terminal complement deficiencies (C5-9) increase susceptibility to Neisseria infections.',
    },
    4: {
      level: 4,
      summary: 'Innate immunity employs an integrated network of germline-encoded receptors, signaling cascades, and effector mechanisms that provide immediate host defense while shaping subsequent adaptive immune responses through antigen presentation and cytokine production.',
      explanation: `The innate immune system functions through coordinated receptor activation, signal transduction, and effector responses that eliminate pathogens and establish the inflammatory milieu directing adaptive immunity.

**Pattern Recognition Receptor Signaling:**

**TLR Signaling Pathways:**

*MyD88-Dependent Pathway (most TLRs):*
1. TLR activation recruits MyD88 adapter
2. MyD88 activates IRAK kinases
3. TRAF6 activation
4. IKK complex activation
5. NF-kB nuclear translocation
6. Proinflammatory cytokine transcription (TNF-alpha, IL-1, IL-6)

*TRIF-Dependent Pathway (TLR3, TLR4):*
1. TRIF adapter recruitment
2. TBK1/IKKepsilon activation
3. IRF3 phosphorylation and nuclear translocation
4. Type I interferon (IFN-alpha/beta) production

**Inflammasome Biology:**

*NLRP3 Inflammasome Activation:*
- Two-signal model:
  1. Priming: NF-kB activation increases NLRP3 and pro-IL-1beta expression
  2. Activation: Multiple triggers (ATP, crystals, ROS, K+ efflux)
- Assembly: NLRP3 + ASC + pro-caspase-1
- Caspase-1 activation cleaves:
  - Pro-IL-1beta to IL-1beta
  - Pro-IL-18 to IL-18
  - Gasdermin D (pyroptosis)

*Other Inflammasomes:*
- AIM2: Cytoplasmic dsDNA
- NLRC4: Bacterial flagellin/T3SS proteins
- Pyrin: Bacterial toxin-induced Rho modifications

**Cytosolic DNA/RNA Sensing:**

*cGAS-STING Pathway:*
1. cGAS binds cytosolic dsDNA
2. Produces cyclic GMP-AMP (cGAMP)
3. cGAMP activates STING
4. TBK1/IRF3 activation
5. Type I interferon production

*RIG-I/MDA5 Pathway:*
- RIG-I: Short dsRNA with 5'-triphosphate
- MDA5: Long dsRNA
- Both signal through MAVS adapter
- Type I interferon and NF-kB activation

**Neutrophil Biology:**

*Recruitment (Rolling-Adhesion-Transmigration):*
1. Rolling: Selectins (E-, P-selectin) on endothelium bind PSGL-1
2. Activation: Chemokines (IL-8) activate integrins
3. Firm adhesion: LFA-1/Mac-1 bind ICAM-1
4. Transmigration: Diapedesis through endothelium (PECAM-1)

*Killing Mechanisms:*
- NADPH oxidase: Generates superoxide (O2-)
- Myeloperoxidase: Converts H2O2 to HOCl
- Neutrophil extracellular traps (NETs): Web of DNA/histones with antimicrobial proteins

**Complement Regulation:**

*Fluid-Phase Regulators:*
- Factor H: Accelerates C3 convertase decay
- Factor I: Cleaves C3b and C4b
- C1 inhibitor: Blocks C1r/C1s

*Membrane-Bound Regulators:*
- DAF (CD55): Accelerates convertase decay
- MCP (CD46): Cofactor for Factor I
- Protectin (CD59): Blocks MAC formation

**Natural Killer Cell Biology:**

*Activation Balance Model:*
- Activating receptors: NKG2D, NCRs (NKp30, NKp44, NKp46), CD16
- Inhibitory receptors: KIRs, CD94/NKG2A (recognize MHC I)
- "Missing self": Downregulated MHC I triggers killing

*Effector Functions:*
- Direct cytotoxicity: Perforin/granzyme pathway
- ADCC: CD16 (FcgammaRIIIA) binds antibody-coated targets
- Cytokine production: IFN-gamma, TNF-alpha

**Trained Immunity:**

- Epigenetic reprogramming of innate cells after primary stimulus
- Enhanced responses to secondary challenges
- Involves histone modifications and metabolic rewiring
- Examples: BCG vaccination effects, beta-glucan training`,
      keyTerms: [
        { term: 'MyD88', definition: 'Myeloid differentiation factor 88; key adapter protein in TLR signaling leading to NF-kB activation' },
        { term: 'TRIF', definition: 'TIR-domain-containing adapter-inducing interferon-beta; TLR adapter for type I interferon induction' },
        { term: 'cGAS-STING', definition: 'Cytosolic DNA sensing pathway triggering type I interferon production' },
        { term: 'NET', definition: 'Neutrophil extracellular trap; web of DNA and antimicrobial proteins released by neutrophils' },
        { term: 'KIR', definition: 'Killer immunoglobulin-like receptor; NK cell receptor recognizing MHC I molecules' },
        { term: 'trained immunity', definition: 'Functional reprogramming of innate immune cells conferring enhanced responses to secondary stimuli' },
      ],
      clinicalNotes: 'MyD88 deficiency causes severe bacterial infections. STING gain-of-function mutations cause SAVI (STING-associated vasculopathy with onset in infancy). Chronic granulomatous disease (CGD) results from NADPH oxidase mutations, causing recurrent infections with catalase-positive organisms. Paroxysmal nocturnal hemoglobinuria (PNH) involves loss of GPI-anchored complement regulators (CD55, CD59).',
    },
    5: {
      level: 5,
      summary: 'Innate immunity constitutes a sophisticated defense system integrating receptor signaling networks, transcriptional programs, metabolic adaptations, and epigenetic modifications that coordinate immediate pathogen elimination while calibrating adaptive immune responses through professional antigen presentation and cytokine instruction.',
      explanation: `The innate immune system represents an evolutionarily conserved defense mechanism that has been refined over hundreds of millions of years, now understood to involve intricate regulatory networks with profound implications for infectious, inflammatory, and autoimmune diseases.

**Advanced Signaling Networks:**

**TLR Signaling Complexity:**

*MyD88-Dependent Pathway Details:*
- MyD88 death domain interactions with IRAK family
- IRAK1/4 sequential phosphorylation and dissociation
- TRAF6 K63-linked polyubiquitination
- TAK1/TAB complex activation
- IKK complex (IKKalpha/beta/gamma) phosphorylation
- IkB degradation, NF-kB p65/p50 nuclear entry

*Negative Regulation:*
- A20: Deubiquitinase, edits K63 chains
- SIGIRR: Inhibits TLR4 and IL-1R
- IRAK-M: Inhibits IRAK1/4 in tolerant states
- Endotoxin tolerance: Hyporesponsiveness after LPS exposure

*Cross-Talk:*
- TLR-NLR synergy: Enhanced cytokine production
- TLR-complement: C5a primes TLR responses
- TLR-metabolism: mTOR activation links to effector functions

**Inflammasome Regulation:**

*NLRP3 Activation Mechanisms:*
1. K+ efflux model: Pannexin-1/P2X7 channels
2. Lysosomal rupture: Crystalline particles
3. Mitochondrial dysfunction: ROS, mtDNA, cardiolipin
4. Trans-Golgi disassembly: dTGN-dependent recruitment

*Post-Translational Regulation:*
- NLRP3 phosphorylation (Ser/Thr kinases, PKA, PKD)
- Ubiquitination (BRCC3 deubiquitinase promotes activation)
- SUMOylation (inhibitory)

*Pyroptosis:*
- Gasdermin D (GSDMD) N-terminal pore formation
- Plasma membrane rupture
- IL-1beta and IL-18 release
- Inflammatory cell death vs apoptosis

**Interferon System:**

*Type I IFN (IFN-alpha/beta):*
- Production: pDCs primary producers via TLR7/9
- Signaling: IFNAR receptor, JAK1/TYK2, STAT1/2
- ISG induction: MxA, OAS, PKR, ISG15, IFITM proteins
- Antiviral state: Translation block, RNA degradation, apoptosis

*Type III IFN (IFN-lambda):*
- Epithelial-restricted receptor expression
- Compartmentalized antiviral immunity
- Less inflammatory than type I IFN

*Type I IFN in Disease:*
- Beneficial: Viral infections, tumor surveillance
- Detrimental: SLE (IFN signature), COVID-19 (timing-dependent)
- Therapeutic: MS (IFN-beta), HBV/HCV (pegIFN-alpha)

**Innate Lymphoid Cells:**

*ILC Classification:*
- ILC1: T-bet+, IFN-gamma (intracellular pathogens)
- ILC2: GATA3+, IL-5/IL-13 (helminths, allergy)
- ILC3: RORgammat+, IL-22/IL-17 (mucosal defense)
- NK: Cytotoxic ILC1-like
- LTi: Lymphoid tissue development

*Tissue Residency:*
- Establish during development
- Long-lived tissue sentinels
- Rapid cytokine production without clonal expansion

**Complement in Health and Disease:**

*Activation Control Points:*
- C1-INH: Classical/lectin pathway regulation
- C4BP, Factor H: C3/C5 convertase decay
- CD59: MAC inhibition

*Disease Associations:*
- HAE: C1-INH deficiency
- aHUS: Factor H/I mutations, anti-FH antibodies
- PNH: GPI-anchor deficiency (CD55/CD59 loss)
- Age-related macular degeneration: CFH polymorphisms
- C3 glomerulopathy: Dysregulated AP

*Therapeutic Targeting:*
- Eculizumab: Anti-C5 (PNH, aHUS)
- C3 inhibitors: APL-2, pegcetacoplan
- Factor D inhibitors: Geographic atrophy

**Clinical Applications:**

**Pattern Recognition Deficiencies:**

| Gene | Receptor/Pathway | Clinical Phenotype |
|------|-----------------|-------------------|
| IRAK4 | TLR-MyD88 | Pyogenic bacteria, especially pneumococcus |
| MyD88 | TLR-MyD88 | Similar to IRAK4 deficiency |
| TLR3 | TLR3-TRIF | HSV encephalitis susceptibility |
| STAT1 | IFN signaling | Mycobacterial and viral infections |
| NEMO | NF-kB | Ectodermal dysplasia with immunodeficiency |

**Autoinflammatory Diseases:**

*Inflammasomopathies:*
- CAPS: NLRP3 gain-of-function (FCAS, MWS, NOMID)
- FMF: MEFV (pyrin) mutations
- PAPA syndrome: PSTPIP1 mutations

*Interferonopathies:*
- SAVI: STING gain-of-function
- AGS: TREX1, SAMHD1, RNASEH2 mutations
- CANDLE: Proteasome mutations

**Therapeutic Modulation:**

*Anti-Inflammatory:*
- IL-1 blockade: Anakinra, canakinumab (CAPS, gout)
- IL-6 blockade: Tocilizumab (RA, cytokine storm)
- JAK inhibitors: Baricitinib, tofacitinib

*Agonists:*
- TLR7/8 agonists: Imiquimod (skin cancer, warts)
- cGAS-STING agonists: Cancer immunotherapy trials
- BCG: Bladder cancer, trained immunity`,
      keyTerms: [
        { term: 'endotoxin tolerance', definition: 'State of hyporesponsiveness to LPS after prior exposure, involving epigenetic reprogramming' },
        { term: 'gasdermin D', definition: 'Pore-forming protein cleaved by caspase-1/4/5/11, mediating pyroptotic cell death' },
        { term: 'ILC', definition: 'Innate lymphoid cell; tissue-resident innate counterparts of T helper subsets' },
        { term: 'interferonopathy', definition: 'Monogenic disease caused by dysregulated type I interferon signaling' },
        { term: 'CAPS', definition: 'Cryopyrin-associated periodic syndrome; autoinflammatory disease from NLRP3 gain-of-function mutations' },
        { term: 'aHUS', definition: 'Atypical hemolytic uremic syndrome; thrombotic microangiopathy from complement dysregulation' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- IRAK4/MyD88 deficiency: Pyogenic infections improve with age (adaptive immunity compensates)
- TLR3 deficiency: Consider in recurrent HSV encephalitis
- CAPS spectrum: Cold urticaria (FCAS) < MWS < NOMID (severity)
- Anakinra diagnostic trial: Rapid response supports autoinflammatory diagnosis
- C1-INH deficiency: ACE inhibitors contraindicated (increase bradykinin)
- Complement testing: CH50 screens classical, AH50 screens alternative; both low suggests C3
- Eculizumab: Meningococcal vaccination required; breakthrough infections occur
- Type I IFN signature: Diagnostic utility in SLE, dermatomyositis, SAVI`,
    },
  },

  media: [
    {
      id: 'innate-immunity-overview',
      type: 'diagram',
      filename: 'innate-immunity-overview.svg',
      title: 'Overview of Innate Immune Defenses',
      description: 'Diagram showing physical barriers, cellular defenses, and complement system',
    },
    {
      id: 'tlr-signaling',
      type: 'diagram',
      filename: 'tlr-signaling-pathways.svg',
      title: 'TLR Signaling Pathways',
      description: 'MyD88-dependent and TRIF-dependent signaling cascades',
    },
    {
      id: 'complement-pathways',
      type: 'diagram',
      filename: 'complement-pathways.svg',
      title: 'Complement System Activation Pathways',
      description: 'Classical, lectin, and alternative pathways converging on C3',
    },
  ],
  citations: [
    {
      id: 'janeway-immunobiology-ch2',
      type: 'textbook',
      title: 'Innate Immunity: The First Lines of Defense',
      authors: ['Murphy K', 'Weaver C'],
      source: 'Janeway\'s Immunobiology',
      chapter: '2-3',
    },
    {
      id: 'medzhitov-nature-2008',
      type: 'article',
      title: 'Origin and physiological roles of inflammation',
      authors: ['Medzhitov R'],
      source: 'Nature',
      url: 'https://doi.org/10.1038/nature07201',
    },
  ],
  crossReferences: [
    { targetId: 'physiology-immune-adaptive-immunity', targetType: 'concept', relationship: 'related', label: 'Adaptive Immunity' },
    { targetId: 'physiology-immune-inflammation', targetType: 'concept', relationship: 'related', label: 'Inflammation' },
    { targetId: 'structure-bone-marrow', targetType: 'structure', relationship: 'related', label: 'Bone Marrow' },
  ],
  tags: {
    systems: ['immune', 'lymphatic'],
    topics: ['immunology', 'physiology', 'inflammation'],
    keywords: ['innate immunity', 'TLR', 'complement', 'phagocytosis', 'inflammation', 'pattern recognition'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'pathology'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default innateImmunityContent;
