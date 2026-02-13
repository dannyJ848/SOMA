/**
 * Innate Immunity - Cellular Components
 *
 * Phagocytes, NK cells, mast cells, and other innate immune cells
 */

import { EducationalContent } from '../types';

export const innateCellsContent: EducationalContent = {
  id: 'innate-immunity-cells',
  type: 'concept',
  name: 'Innate Immunity: Cellular Components',
  alternateNames: ['Innate Immune Cells', 'Myeloid Cells', 'First Responders'],

  levels: {
    1: {
      level: 1,
      summary: 'Your body has special cells that patrol for germs and attack them immediately without needing prior exposure. These include phagocytes that eat germs, NK cells that kill infected cells, and mast cells that trigger inflammation.',
      explanation: `## Your Body's Cellular Defenders

Besides physical barriers, your body has special cells that find and destroy germs. These cells work immediately - they do not need to learn about a germ first like other immune cells do.

### Phagocytes: The Eaters

These cells surround and swallow germs whole, like Pac-Man!

**Neutrophils**
- Most common white blood cell (60-70%)
- First to arrive at infection site (within minutes)
- Live only 1-2 days
- Release chemicals that call other immune cells

**Macrophages**
- "Big eaters" - larger than neutrophils
- Live for months in tissues
- Patrol organs looking for invaders
- Also help clean up dead cells and debris

**Dendritic Cells**
- Bridge between innate and adaptive immunity
- Capture germs and show them to other immune cells
- Like scouts that report back to headquarters

### Natural Killer (NK) Cells

- Kill your own cells if they become infected or cancerous
- Do not need prior exposure to recognize threats
- Release chemicals that make infected cells die
- Important for fighting viruses and cancer

### Mast Cells

- Found in skin, lungs, and gut
- Full of granules containing histamine
- Release chemicals when they detect injury or infection
- Cause redness, swelling, and itching (inflammation)
- Also trigger allergic reactions

### Eosinophils

- Fight parasites (worms)
- Involved in allergic reactions
- Release toxic proteins onto large invaders
- Work with mast cells in allergies

### Basophils

- Rare white blood cells
- Release histamine like mast cells
- Help with allergic responses
- Not fully understood yet

## How These Cells Work Together

1. **Mast cells** detect injury and release signals
2. **Neutrophils** rush to the site and start eating germs
3. **Macrophages** arrive later and clean up
4. **NK cells** kill any infected body cells
5. **Dendritic cells** gather information and alert the adaptive immune system

## When Things Go Wrong

- **Too few neutrophils**: Increased infection risk
- **Too many mast cells**: Severe allergies
- **Weak NK cells**: Trouble fighting viruses and cancer
- **Overactive phagocytes**: Can damage healthy tissue`,
      keyTerms: [
        { term: 'phagocyte', definition: 'A cell that eats and destroys germs and debris', pronunciation: 'FAG-oh-site' },
        { term: 'neutrophil', definition: 'The most common white blood cell that quickly responds to infection', pronunciation: 'NOO-troh-fil' },
        { term: 'macrophage', definition: 'A large cell that eats germs and dead cells; lives in tissues', pronunciation: 'MAK-roh-fayj' },
        { term: 'natural killer cell', definition: 'An immune cell that kills infected or cancerous body cells', pronunciation: 'NACH-ur-al KIL-er sel' },
        { term: 'mast cell', definition: 'A cell that releases chemicals causing inflammation and allergies', pronunciation: 'mast sel' },
        { term: 'eosinophil', definition: 'A white blood cell that fights parasites and causes allergies', pronunciation: 'ee-oh-SIN-oh-fil' },
        { term: 'dendritic cell', definition: 'A cell that captures germs and shows them to other immune cells', pronunciation: 'den-DRI-tik sel' },
        { term: 'histamine', definition: 'A chemical released during allergic reactions that causes itching and swelling', pronunciation: 'HISS-tah-meen' },
      ],
      analogies: [
        'Neutrophils are like first responders at an accident - they arrive quickly and start working immediately.',
        'Macrophages are like cleanup crews - they arrive after the initial emergency and thoroughly clean the area.',
        'NK cells are like security guards that can spot trouble without being told what to look for.',
        'Dendritic cells are like detectives that gather evidence and report to headquarters.',
      ],
      examples: [
        'When you get a splinter, neutrophils rush to the area within minutes to eat any bacteria that entered.',
        'Macrophages in your lungs (alveolar macrophages) constantly patrol for inhaled germs and particles.',
        'NK cells are important for controlling viral infections like influenza and herpes.',
        'People with low neutrophil counts (neutropenia) are at high risk for bacterial infections.',
      ],
      patientCounselingPoints: [
        'Fever often means your neutrophils are working hard to fight infection.',
        'Chronic allergies may involve overactive mast cells and eosinophils.',
        'A healthy diet supports your innate immune cells.',
        'Sleep is important for optimal immune cell function.',
        'Contact your doctor if you have frequent or unusual infections.',
      ],
    },
    2: {
      level: 2,
      summary: 'Innate immune cells include phagocytes (neutrophils, macrophages, dendritic cells) that engulf pathogens, NK cells that kill infected cells, and granulocytes (mast cells, eosinophils, basophils) that mediate inflammation and allergic responses.',
      explanation: `## Phagocytes: Professional Eaters

### Neutrophils (Polymorphonuclear Leukocytes)

**Characteristics:**
- 50-70% of circulating leukocytes
- Multilobed nucleus (3-5 lobes)
- Granules containing antimicrobial proteins
- Short lifespan (6-48 hours in circulation)

**Functions:**
1. **Chemotaxis**: Follow chemical gradients to infection sites
2. **Phagocytosis**: Engulf and destroy bacteria
3. **Degranulation**: Release antimicrobial contents
4. **NET formation**: Release DNA webs to trap pathogens

**Mechanisms of Killing:**
- **Oxygen-dependent**: Respiratory burst produces ROS
- **Oxygen-independent**: Lysozyme, defensins, lactoferrin
- **Nitric oxide**: Potent antimicrobial

### Macrophages

**Origin and Distribution:**
- Derived from blood monocytes
- Tissue-resident populations:
  - Kupffer cells (liver)
  - Alveolar macrophages (lungs)
  - Microglia (CNS)
  - Osteoclasts (bone)

**Activation States:**
- **M1 (classically activated)**: Pro-inflammatory, antimicrobial
- **M2 (alternatively activated)**: Anti-inflammatory, tissue repair

**Functions:**
1. Phagocytosis of pathogens and apoptotic cells
2. Antigen presentation (express MHC II)
3. Cytokine production (IL-1, IL-6, TNF-α)
4. Tissue remodeling and repair

### Dendritic Cells

**Types:**
- **Conventional DCs (cDC1, cDC2)**: Cross-presentation, T cell activation
- **Plasmacytoid DCs**: Produce type I interferons

**Maturation:**
- Immature DCs in tissues capture antigens
- Maturation triggered by PAMPs, cytokines
- Migrate to lymph nodes
- Present antigens to naive T cells

## Natural Killer Cells

**Characteristics:**
- 5-15% of peripheral blood lymphocytes
- Large granular lymphocytes
- Part of innate lymphoid cell (ILC) family

**Recognition Mechanisms:**
- **Missing-self**: Detect loss of MHC I (stressed/infected cells)
- **Induced-self**: Recognize stress-induced ligands (MICA, MICB)
- **Antibody-dependent cellular cytotoxicity (ADCC)**: Via CD16 (FcγRIII)

**Killing Mechanisms:**
1. **Perforin/granzyme**: Create pores, induce apoptosis
2. **Fas ligand**: Death receptor pathway
3. **Cytokine production**: IFN-γ, TNF-α

**Regulation:**
- Activating receptors: NKG2D, NKp30, NKp46
- Inhibitory receptors: KIRs, CD94/NKG2A
- Balance determines NK cell activation

## Granulocytes

### Mast Cells

**Tissue Distribution:**
- Skin, mucosal surfaces
- Near blood vessels and nerves
- Perivascular locations

**Granule Contents:**
- **Preformed**: Histamine, heparin, proteases (tryptase, chymase)
- **Newly synthesized**: Leukotrienes, prostaglandins, cytokines

**Activation:**
- **IgE-mediated**: Allergen cross-links FcεRI-bound IgE
- **Non-IgE**: Complement, PAMPs, drugs, toxins

**Functions:**
- Allergic reactions
- Antiparasitic immunity
- Wound healing
- Regulation of vascular permeability

### Eosinophils

**Characteristics:**
- 1-3% of circulating leukocytes
- Bilobed nucleus
- Large eosinophilic granules

**Granule Contents:**
- Major basic protein (MBP)
- Eosinophil cationic protein (ECP)
- Eosinophil peroxidase (EPO)
- Eosinophil-derived neurotoxin (EDN)

**Functions:**
- Parasite killing (especially helminths)
- Allergic inflammation
- Tissue remodeling
- Antiviral activity

**Recruitment:**
- Eotaxins (CCL11, CCL24, CCL26)
- IL-5 promotes development and survival

### Basophils

**Characteristics:**
- <1% of circulating leukocytes
- S-lobed nucleus (often obscured by granules)
- Similar granule contents to mast cells

**Functions:**
- Allergic responses (IgE-mediated)
- Parasite immunity
- Regulation of Th2 responses
- Produce IL-4, IL-13

## Clinical Correlations

**Neutropenia:**
- <1500/μL (mild), <1000/μL (moderate), <500/μL (severe)
- Causes: Chemotherapy, aplastic anemia, autoimmune
- Risk: Bacterial and fungal infections

**Chronic Granulomatous Disease (CGD):**
- Defective NADPH oxidase
- Cannot produce respiratory burst
- Recurrent catalase-positive infections

**Mastocytosis:**
- Excessive mast cell accumulation
- Symptoms: Flushing, itching, anaphylaxis
- Associated with c-KIT mutations

**Eosinophilic Disorders:**
- Hypereosinophilic syndrome
- Eosinophilic esophagitis
- Allergic bronchopulmonary aspergillosis`,
      keyTerms: [
        { term: 'chemotaxis', definition: 'Movement of cells toward chemical gradients', pronunciation: 'kee-moh-TAK-sis' },
        { term: 'phagocytosis', definition: 'Cellular engulfment and digestion of particles', pronunciation: 'fag-oh-sy-TOH-sis' },
        { term: 'respiratory burst', definition: 'Rapid release of ROS by phagocytes', pronunciation: 'res-PY-rah-tor-ee burst' },
        { term: 'NETs', definition: 'Neutrophil extracellular traps; DNA webs that capture pathogens', pronunciation: 'nets' },
        { term: 'M1 macrophage', definition: 'Pro-inflammatory macrophage activated by IFN-γ and LPS', pronunciation: 'M-one MAK-roh-fayj' },
        { term: 'M2 macrophage', definition: 'Anti-inflammatory macrophage involved in tissue repair', pronunciation: 'M-two MAK-roh-fayj' },
        { term: 'cross-presentation', definition: 'Presentation of exogenous antigens on MHC I', pronunciation: 'kross preh-zen-TAY-shun' },
        { term: 'KIR', definition: 'Killer cell immunoglobulin-like receptor; regulates NK cells', pronunciation: 'K-I-R' },
        { term: 'FcεRI', definition: 'High-affinity IgE receptor on mast cells and basophils', pronunciation: 'F-C-epsilon-R-one' },
        { term: 'major basic protein', definition: 'Toxic protein in eosinophil granules', pronunciation: 'MAY-jer BAY-sik PRO-teen' },
      ],
      analogies: [
        'Neutrophils are like soldiers with suicide vests - they often die killing invaders.',
        'Macrophages are like adaptable workers - they can be aggressive fighters or peaceful repairmen depending on signals.',
        'NK cells use a license to kill based on missing ID - if a cell lacks normal MHC I, NK cells attack.',
        'Mast cells are like alarm systems - they trigger widespread alerts when activated.',
      ],
      examples: [
        'Patients with chronic granulomatous disease get recurrent infections with Staphylococcus and Aspergillus because their neutrophils cannot make ROS.',
        'Hereditary angioedema involves uncontrolled mast cell activation causing severe swelling.',
        'Eosinophilic esophagitis is an allergic condition where eosinophils accumulate in the esophagus.',
        'NK cell deficiency leads to severe herpesvirus infections and cancer susceptibility.',
      ],
    },
    3: {
      level: 3,
      summary: 'Innate immune cells comprise myeloid phagocytes (neutrophils, macrophages, dendritic cells) with specialized antimicrobial mechanisms, lymphoid NK cells with complex receptor regulation, and granulocytes (mast cells, eosinophils, basophils) mediating inflammation and allergic responses through degranulation.',
      explanation: `## Neutrophil Biology

### Development and Kinetics

**Granulopoiesis:**
- Occurs in bone marrow (10^11 cells/day)
- Stimulated by G-CSF, GM-CSF
- Stages: Myeloblast → Promyelocyte → Myelocyte → Metamyelocyte → Band → Segmented
- Storage pools: Mitotic, maturation, marginal, circulating

**Regulation:**
- CXCL8 (IL-8) recruits neutrophils
- L-selectin mediates rolling
- β2 integrins (CD11a/CD18, CD11b/CD18) firm adhesion
- Diapedesis through endothelium

### Antimicrobial Mechanisms

**Phagosome Maturation:**
1. Phagocytosis → phagosome formation
2. Early phagosome (Rab5, EEA1)
3. Late phagosome (Rab7, LAMP)
4. Phagolysosome fusion
5. Degradation and killing

**Oxidative Killing:**
- NADPH oxidase: 2O2 + NADPH → 2O2•− + NADP+ + H+
- Superoxide dismutase: 2O2•− + 2H+ → H2O2 + O2
- Myeloperoxidase: H2O2 + Cl− → HOCl + H2O
- Hypochlorous acid (bleach) kills microbes

**Nitrosative Killing:**
- iNOS produces NO•
- NO• + O2•− → ONOO− (peroxynitrite)
- Highly toxic to pathogens

**NETosis:**
- Suicidal NET release
- Histone citrullination by PAD4
- DNA decondensation
- Granule protein association
- Traps and kills extracellular bacteria

## Macrophage Polarization

### M1/M2 Spectrum

**M1 (Classical):**
- Induced by: IFN-γ, LPS, TNF-α
- Markers: iNOS, CD86, CD80, MHC IIhigh
- Cytokines: IL-12, IL-23, TNF-α, IL-1β
- Functions: Microbial killing, Th1 promotion

**M2 (Alternative):**
- Induced by: IL-4, IL-13, IL-10, glucocorticoids
- Subtypes:
  - M2a: IL-4/IL-13 (Th2, allergy)
  - M2b: Immune complexes (Th2, regulation)
  - M2c: IL-10, glucocorticoids (tissue repair)
  - M2d: Adenosine, IL-6 (angiogenesis, tumor)
- Markers: Arg1, CD206, CD163, IL-10, TGF-β
- Functions: Tissue repair, fibrosis, immunosuppression

**Plasticity:**
- Macrophages can switch phenotypes
- Microenvironment determines polarization
- Important in chronic inflammation and cancer

## Dendritic Cell Subsets

### Conventional DCs

**cDC1 (Cross-presenting):**
- Markers: CD8α (lymphoid), CD103 (peripheral), XCR1, Clec9A
- Function: Cross-presentation to CD8+ T cells
- TLR expression: TLR3
- Cytokines: IL-12, type I IFNs
- Critical for antiviral and antitumor immunity

**cDC2:**
- Markers: CD11b+, CD172a+, Clec12A
- Function: Presentation to CD4+ T cells
- TLR expression: TLR2, TLR4, TLR5, TLR7
- Cytokines: IL-12, IL-23
- Promote Th1, Th2, Th17 responses

### Plasmacytoid DCs

**Characteristics:**
- Morphology resembles plasma cells
- Express B220, Siglec-H, BDCA-2
- High TLR7, TLR9 expression
- Produce 100-1000x more type I IFN than other cells

**Function:**
- Antiviral defense (IFN-α/β production)
- Link innate and adaptive immunity
- Implicated in autoimmune diseases (SLE)

## NK Cell Receptor Repertoire

### Killer Immunoglobulin-like Receptors (KIRs)

**Structure:**
- 2 or 3 Ig-like domains (2D, 3D)
- Long (L) or short (S) cytoplasmic tails
- KIR2DL, KIR3DL: Inhibitory (ITIM)
- KIR2DS, KIR3DS: Activating (ITAM via DAP12)

**Specificity:**
- Recognize HLA-A, B, C alleles
- Educated by self-MHC during development
- Missing-self recognition when MHC downregulated

### C-type Lectin Receptors

**NKG2 Family:**
- NKG2A (inhibitory, binds HLA-E)
- NKG2C (activating, binds HLA-E)
- NKG2D (activating, stress ligands)

**NKG2D Ligands:**
- MICA, MICB (MHC class I chain-related)
- ULBP1-6 (UL16-binding proteins)
- Induced by cellular stress, infection, transformation

### Natural Cytotoxicity Receptors

**NCRs:**
- NKp30, NKp44, NKp46
- Activate NK cytotoxicity
- Ligands include B7-H6, viral hemagglutinins

## Granulocyte Activation Pathways

### Mast Cell Signaling

**FcεRI Structure:**
- α chain: IgE binding
- β chain: Signal amplification
- γ chains (2): ITAM signaling

**Activation Cascade:**
1. Multivalent allergen cross-links IgE-FcεRI
2. Lyn kinase phosphorylates ITAMs
3. Syk kinase recruited and activated
4. LAT/SLP-76 complex formation
5. PLCγ activation → IP3/DAG
6. Calcium influx, PKC activation
7. Degranulation and cytokine production

**Mediators:**
- **Immediate**: Histamine, tryptase, heparin
- **Delayed**: Leukotrienes (LTC4, LTD4), PGD2
- **Cytokines**: TNF-α, IL-4, IL-5, IL-6, IL-13

### Eosinophil Recruitment

**Eotaxin Signaling:**
- CCR3 is primary eosinophil chemokine receptor
- Eotaxin-1 (CCL11), Eotaxin-2 (CCL24), Eotaxin-3 (CCL26)
- IL-5 promotes eosinophilopoiesis and survival

**Activation:**
- IL-5, GM-CSF, eotaxins prime eosinophils
- IgG, IgA, complement receptors mediate activation
- Degranulation releases toxic proteins

## Clinical Applications

**G-CSF Therapy:**
- Recombinant G-CSF (filgrastim) for neutropenia
- Mobilizes stem cells for transplantation
- Side effects: Bone pain, splenic rupture

**Anti-IgE (Omalizumab):**
- Binds free IgE, prevents FcεRI binding
- Used in severe allergic asthma
- Reduces mast cell and basophil activation

**Anti-IL-5 (Mepolizumab, Reslizumab):**
- Depletes eosinophils
- Used in severe eosinophilic asthma
- Also in hypereosinophilic syndrome

**JAK Inhibitors:**
- Block cytokine signaling in mast cells
- Emerging therapy for mastocytosis`,
      keyTerms: [
        { term: 'granulopoiesis', definition: 'Production of granulocytes in bone marrow', pronunciation: 'gran-yoo-loh-POY-ee-sis' },
        { term: 'diapedesis', definition: 'Migration of blood cells through blood vessel walls', pronunciation: 'dy-ah-peh-DEE-sis' },
        { term: 'myeloperoxidase', definition: 'Enzyme producing hypochlorous acid in neutrophils', pronunciation: 'my-eh-loh-per-OX-ih-days' },
        { term: 'citrullination', definition: 'Conversion of arginine to citrulline by PAD enzymes', pronunciation: 'sih-trul-ih-NAY-shun' },
        { term: 'arginase 1', definition: 'M2 macrophage marker; metabolizes arginine to ornithine', pronunciation: 'AR-jih-nays one' },
        { term: 'cross-presentation', definition: 'Presentation of exogenous antigens on MHC class I', pronunciation: 'kross preh-zen-TAY-shun' },
        { term: 'ITIM', definition: 'Immunoreceptor tyrosine-based inhibition motif', pronunciation: 'I-tim' },
        { term: 'ITAM', definition: 'Immunoreceptor tyrosine-based activation motif', pronunciation: 'I-tam' },
        { term: 'Syk', definition: 'Spleen tyrosine kinase; critical for Fc receptor signaling', pronunciation: 'sik' },
        { term: 'eotaxin', definition: 'CC chemokine specifically recruiting eosinophils', pronunciation: 'ee-oh-TAK-sin' },
      ],
      analogies: [
        'Neutrophil NET formation is like throwing a net over criminals - it traps them but the officer (neutrophil) dies in the process.',
        'Macrophage polarization is like a dimmer switch - they can be anywhere from fully pro-inflammatory to fully anti-inflammatory.',
        'NK cell education is like training security guards to recognize normal employees - they learn not to attack cells with proper ID.',
        'Mast cell degranulation is like a grenade exploding - pre-loaded contents release instantly upon activation.',
      ],
      examples: [
        'In sepsis, NETs can cause collateral damage to host tissues and contribute to organ failure.',
        'Tumor-associated macrophages (TAMs) are often M2-polarized and promote tumor growth and metastasis.',
        'pDCs in SLE produce IFN-α in response to self-DNA-containing immune complexes, driving autoimmunity.',
        'NK cell "education" or "licensing" ensures they do not attack normal cells while remaining responsive to threats.',
      ],
      clinicalNotes: 'Neutrophil-to-lymphocyte ratio (NLR) is an emerging prognostic marker in cancer and cardiovascular disease. Elevated NLR suggests systemic inflammation and is associated with worse outcomes in many conditions.',
    },
    4: {
      level: 4,
      summary: 'Innate immune cells exhibit sophisticated developmental programs, activation mechanisms, and functional plasticity. Understanding these processes at molecular level enables targeted therapeutic interventions in inflammatory diseases, infections, and cancer.',
      explanation: `## Advanced Neutrophil Biology

### Transcriptional Regulation

**PU.1 and C/EBPα:**
- Master regulators of myeloid development
- Coordinate granulocyte gene expression
- Mutations cause myeloid leukemias

**Emergency Granulopoiesis:**
- Triggered by infection, G-CSF
- Bypasses normal cell cycle checkpoints
- Requires C/EBPβ, STAT3
- Produces immature neutrophils (bands)

**Neutrophil Heterogeneity:**
- Low-density neutrophils (LDNs) in inflammation
- Neutrophil-myeloid-derived suppressor cells (MDSCs)
- Granulocytic vs monocytic MDSCs
- Suppress T cell responses in cancer

### Neutrophil Extracellular Traps (NETs)

**Mechanisms of NETosis:**

**Suicidal NETosis:**
- PAD4 citrullinates histones (H3Cit)
- Chromatin decondenses
- Nuclear envelope breaks down
- Cell membrane ruptures
- Releases DNA-protein complexes
- Takes 2-4 hours

**Vital NETosis:**
- Rapid release (minutes)
- Vesicular release of DNA
- Cell remains alive
- Anuclear neutrophils continue phagocytosis

**NET Components:**
- DNA backbone
- Histones (H1, H2A, H2B, H3, H4)
- Granule proteins: MPO, elastase, cathepsin G
- Cytosolic proteins: calprotectin

**Pathological Roles:**
- Autoimmunity: NETs are autoantigen sources (SLE, RA)
- Thrombosis: Scaffold for clot formation
- Sepsis: Contribute to organ damage
- Cancer: Promote metastasis

**Therapeutic Targeting:**
- DNase I (digests NETs)
- PAD4 inhibitors (prevent NETosis)
- MPO inhibitors
- Clinical trials ongoing

## Macrophage Ontogeny and Function

### Tissue-Resident Macrophage Origins

**Yolk Sac Derivation:**
- Microglia, Kupffer cells, Langerhans cells
- Self-renewing, independent of monocytes
- Maintained by IL-34, CSF1

**Fetal Liver Derivation:**
- Alveolar macrophages
- Some populations require monocyte input

**Adult Bone Marrow:**
- Most tissue macrophages in steady state
- Monocyte-derived during inflammation

### Metabolic Programming

**M1 Metabolism:**
- Aerobic glycolysis (Warburg effect)
- PPP for NADPH production
- TCA cycle breaks at succinate
- Succinate stabilizes HIF-1α
- iNOS consumes arginine

**M2 Metabolism:**
- OXPHOS with fatty acid oxidation
- Complete TCA cycle
- Arginase 1 consumes arginine
- Polyamine and proline synthesis
- Supports collagen production

### Macrophage-Tumor Interactions

**Tumor-Associated Macrophages (TAMs):**
- Often M2-like phenotype
- Promote angiogenesis (VEGF)
- Enhance invasion (MMPs)
- Suppress T cell responses (PD-L1, IL-10)
- Correlate with poor prognosis

**Therapeutic Strategies:**
- CSF1R inhibitors (pexidartinib)
- CD40 agonists (reprogram TAMs)
- TLR agonists (activate TAMs)
- Combination with checkpoint inhibitors

## Dendritic Cell Biology

### Antigen Processing Pathways

**MHC Class II Presentation:**
1. Endocytosis of antigen
2. Early endosome (pH 6.0-6.5)
3. Late endosome/lysosome (pH 4.5-5.0)
4. Proteolysis by cathepsins
5. MHC II synthesized in ER
6. Invariant chain (Ii) blocks peptide binding
7. Ii degraded, leaving CLIP
8. HLA-DM exchanges CLIP for antigenic peptide
9. Transport to surface

**Cross-Presentation (MHC I):**
- Specialized cDC1 population
- Two pathways:
  - Cytosolic: Escape from phagosome, proteasome processing, TAP transport
  - Vacuolar: Direct loading in phagosome
- Critical for CD8+ T cell responses to exogenous antigens

### DC Migration and Maturation

**Steady State:**
- Immature DCs patrol tissues
- High endocytic capacity
- Low T cell stimulatory capacity
- Maintain peripheral tolerance

**Maturation Triggers:**
- PAMPs via TLRs
- DAMPs (HMGB1, ATP, uric acid)
- Inflammatory cytokines
- CD40L from activated T cells

**Maturation Changes:**
- Downregulate antigen uptake
- Upregulate MHC and costimulatory molecules
- Change chemokine receptor expression
- Migrate to lymph nodes
- CCR7 mediates migration to CCL19/CCL21

## NK Cell Education and Tolerance

### Licensing Model

**Process:**
- NK cells express inhibitory receptors for self-MHC
- Engagement during development "licenses" NK cells
- Licensed NK cells become functional
- Unlicensed NK cells remain hyporesponsive

**Missing-Self Recognition:**
- Viral infection or transformation downregulates MHC I
- Loss of inhibitory signals
- Activating signals dominate
- Target cell killed

### NK Cell Memory

**Characteristics:**
- Antigen-specific expansion
- Long-lived memory population
- Enhanced secondary response
- Similar to adaptive immunity

**Examples:**
- CMV-specific NK cells (NKG2C+)
- Cytokine-induced memory
- Liver-resident NK cell memory

## Mast Cell Heterogeneity

### Phenotypic Subsets

**MCT (Tryptase-only):**
- Mucosal locations
- Tryptase+, chymase-
- IL-4, IL-5, IL-13 production
- Associated with Th2 responses

**MCTC (Tryptase and Chymase):**
- Connective tissue
- Tryptase+, chymase+, carboxypeptidase A3+
- TNF-α, IL-4 production
- Associated with fibrosis

### Mast Cell Activation Syndrome (MCAS)

**Diagnostic Criteria:**
1. Typical clinical symptoms
2. Response to mast cell-targeted therapy
3. Elevated mast cell mediators
4. No mastocytosis (normal mast cell numbers)

**Presentation:**
- Flushing, pruritus
- Gastrointestinal symptoms
- Cardiovascular symptoms
- Neurological symptoms
- Often misdiagnosed as anxiety, IBS

## Clinical Syndromes

**Hemophagocytic Lymphohistiocytosis (HLH):**
- Macrophage activation syndrome
- Uncontrolled immune activation
- Cytokine storm
- Genetic (perforin, MUNC13-4) or acquired

**Blastic Plasmacytoid Dendritic Cell Neoplasm:**
- Rare hematologic malignancy
- Malignant pDC proliferation
- Poor prognosis
- CD4+, CD56+, CD123+

**Hypereosinophilic Syndromes:**
- >1.5 × 10^9/L eosinophils for >6 months
- End-organ damage
- FIP1L1-PDGFRA fusion (responsive to imatinib)
- IL-5 producing clones

**Chronic Eosinophilic Leukemia:**
- Clonal eosinophil proliferation
- PDGFRA, PDGFRB, FGFR1 rearrangements
- Targeted therapy with TKIs`,
      keyTerms: [
        { term: 'myeloid-derived suppressor cell', definition: 'Immature myeloid cells that suppress T cell responses', pronunciation: 'MY-eh-loyd deh-RYV-ed suh-PRES-or sel' },
        { term: 'calprotectin', definition: 'S100A8/A9 heterodimer; antimicrobial and inflammatory protein', pronunciation: 'kal-pro-TEK-tin' },
        { term: 'HLA-DM', definition: 'MHC-like molecule that facilitates peptide loading on MHC II', pronunciation: 'H-L-A-D-M' },
        { term: 'CLIP', definition: 'Class II-associated invariant chain peptide; temporary peptide on MHC II', pronunciation: 'klip' },
        { term: 'CLIP', definition: 'Class II-associated invariant chain peptide; placeholder on MHC II', pronunciation: 'klip' },
        { term: 'NKG2C', definition: 'Activating NK receptor recognizing HLA-E; expands in CMV infection', pronunciation: 'N-K-G-two-C' },
        { term: 'carboxypeptidase A3', definition: 'Mast cell-specific protease; marker for MCTC subset', pronunciation: 'kar-bok-see-PEP-tih-days A-three' },
        { term: 'FIP1L1-PDGFRA', definition: 'Fusion oncogene causing hypereosinophilic syndrome', pronunciation: 'F-I-P-one-L-one P-D-G-F-R-A' },
        { term: 'MUNC13-4', definition: 'Protein required for cytotoxic granule exocytosis; mutated in HLH', pronunciation: 'MUNK-thirteen-four' },
      ],
      analogies: [
        'Neutrophil heterogeneity is like having different police units - patrol officers, SWAT teams, and undercover agents all with different roles.',
        'Macrophage metabolism reprogramming is like switching from electric to gas power - different fuel sources for different tasks.',
        'DC cross-presentation is like a translator - it takes external information and presents it in a format CD8 T cells understand.',
        'NK cell licensing is like giving security guards permission to use force only after they have verified normal ID badges.',
      ],
      examples: [
        'In COVID-19, neutrophilia and NET formation contribute to acute respiratory distress syndrome (ARDS).',
        'Gaucher disease macrophages (Gaucher cells) accumulate glucocerebroside and cause organomegaly.',
        'Langerhans cell histiocytosis involves clonal proliferation of epidermal DCs with BRAF V600E mutations.',
        'Anti-CD123 (tagraxofusp) targets pDCs in blastic plasmacytoid dendritic cell neoplasm.',
      ],
      clinicalNotes: 'In sepsis, immature neutrophil forms (bands, metamyelocytes) appear in peripheral blood, indicating emergency granulopoiesis. This "left shift" is a marker of severe infection.',
    },
    5: {
      level: 5,
      summary: 'Contemporary research reveals remarkable complexity in innate immune cell biology including neutrophil heterogeneity and NETosis, macrophage ontogeny and metabolic programming, DC subset specialization, NK cell education and memory, and novel therapeutic targets in inflammatory and neoplastic diseases.',
      explanation: `## Single-Cell Analysis of Innate Immunity

### Neutrophil Heterogeneity

**scRNA-seq Findings:**
- Multiple transcriptional states
- Age-related changes
- Tissue-specific adaptations
- Disease-associated signatures

**Neutrophil Subsets:**
- **Normal-density neutrophils (NDNs)**: Mature, circulating
- **Low-density neutrophils (LDNs)**: Immature, suppressive
- **Granulocytic MDSCs**: Immunosuppressive
- **Hypersegmented neutrophils**: Vitamin B12/folate deficiency

**Neutrophil Trajectories:**
- Developmental trajectory in bone marrow
- Aging trajectory in circulation
- Activation trajectory in tissues
- Predictable gene expression changes

### Macrophage Atlas

**Tissue-Resident Macrophage Diversity:**
- Each tissue has unique macrophage populations
- Distinct gene expression signatures
- Specialized functions adapted to tissue needs
- Microglia: Synaptic pruning, CNS homeostasis
- Kupffer cells: Iron recycling, immune tolerance
- Alveolar macrophs: Surfactant clearance

**Developmental Trajectories:**
- Yolk sac → fetal liver → adult
- Transcription factor requirements
- CSF1R signaling essential
- IL-34 for microglia, CSF1 for others

## NET Biology: Recent Advances

### NETosis Mechanisms

**PAD4-Dependent NETosis:**
- Histone citrullination essential
- Chromatin decondensation
- Nuclear envelope rupture
- Therapeutic target

**PAD4-Independent NETosis:**
- Neutrophil elastase-mediated
- Proteinase 3 involvement
- Alternative pathway

**Vital NETosis:**
- Rapid, minutes
- Vesicular DNA release
- Cell survival
- Anuclear neutrophils functional

### NET-Associated Pathologies

**Autoimmunity:**
- **SLE**: NETs are source of DNA autoantigens
- **RA**: Anti-citrullinated protein antibodies (ACPA) target NET components
- **ANCA vasculitis**: MPO and PR3 on NETs

**Thrombosis:**
- NETs scaffold platelet adhesion
- Activate coagulation cascade
- Resist fibrinolysis
- Venous and arterial thrombosis

**Cancer:**
- Promote metastasis
- Wake dormant cancer cells
- Suppress T cell responses
- Correlate with poor prognosis

**Sepsis:**
- Contribute to ARDS
- Cause endothelial damage
- Drive cytokine storm
- Target for therapy

### Therapeutic Targeting

**Current Approaches:**
- DNase I: Digests NET scaffold
- PAD4 inhibitors: Prevent citrullination
- MPO inhibitors: Reduce NET toxicity
- Neutrophil elastase inhibitors

**Clinical Trials:**
- DNase for COVID-19 (ARDS)
- PAD4 inhibitors for thrombosis
- NET-targeting in autoimmunity

## Macrophage Metabolism and Function

### Metabolic Reprogramming

**Itaconate:**
- Produced by Irg1 in M1 macrophages
- Antimicrobial (inhibits bacterial isocitrate lyase)
- Anti-inflammatory (inhibits SDH, limits ROS)
- Electrophilic properties modify proteins

**Succinate:**
- Accumulates in M1 macrophages
- Stabilizes HIF-1α
- Promotes IL-1β production
- Links metabolism to inflammation

**Acetyl-CoA and Histone Acetylation:**
- Metabolite availability affects epigenetics
- Acetyl-CoA for histone acetyltransferases
- Links nutrition to gene expression
- α-ketoglutarate for demethylases

### Trained Immunity

**Concept:**
- Innate immune memory
- Enhanced response to secondary challenge
- Different from classical memory
- Epigenetic reprogramming

**Inducers:**
- β-glucan (fungal cell wall)
- BCG vaccine
- OxLDL
- Western diet

**Mechanisms:**
- Metabolic reprogramming (Aerobic glycolysis)
- Histone modifications (H3K4me3)
- Cytokine production (IL-1β, TNF-α)
- Lasts weeks to months

**Clinical Implications:**
- BCG vaccine non-specific protection
- Trained immunity in atherosclerosis
- Metabolic diseases
- Cancer immunotherapy

## Dendritic Cell Subset Specialization

### cDC1 and Cross-Presentation

**Molecular Machinery:**
- WDFY4 required for cross-presentation
- Sec22b regulates phagosome-ER fusion
- Syntaxin 4 for antigen export
- TAP1/2 for peptide transport

**Batf3 Transcription Factor:**
- Essential for cDC1 development
- IRF8-dependent
- Mutations cause immunodeficiency
- Required for antitumor immunity

**Therapeutic Exploitation:**
- FLT3L expands DCs
- CD40 agonists activate DCs
- TLR agonists license DCs
- STING agonists enhance cross-presentation

### pDCs in Disease

**Autoimmunity:**
- SLE: pDCs produce IFN-α
- Type I IFN signature
- TLR7/9 activation by immune complexes
- Target with BDCA2 antibodies

**Viral Infections:**
- HIV: pDC dysfunction
- Chronic activation leads to exhaustion
- Impaired IFN response

**Cancer:**
- pDCs often tolerogenic in tumors
- Impaired IFN production
- Express IDO, PD-L1
- Target for immunotherapy

## NK Cell Receptor Genetics

### KIR Diversity

**Gene Complex:**
- Chromosome 19q13.4
- 15-20 genes per haplotype
- Highly polymorphic
- Haplotypes: A (mostly inhibitory), B (activating)

**Education Models:**
- Licensing: Self-MHC recognition required
- Disarming: Chronic stimulation without activation
- Tuning: Graduated response based on input

**Clinical Relevance:**
- KIR-HLA combinations affect disease
- NK cell alloreactivity in transplantation
- KIR B haplotype protective in pregnancy
- Cancer susceptibility

### NKG2D and Stress Recognition

**Ligand Regulation:**
- DNA damage response
- Heat shock response
- Viral infection
- Cellular transformation

**Immune Evasion:**
- Viral proteins block NKG2D ligands
- Tumors shed ligands (sMICA, sMICB)
- Chronic stimulation leads to exhaustion

**Therapeutic Targeting:**
- NKG2D-CAR T cells
- Bispecific antibodies
- Prevent ligand shedding
- Enhance NKG2D signaling

## Mast Cell and Eosinophil Advances

### Mast Cell Clonality

**KIT D816V:**
- Found in most systemic mastocytosis
- Constitutive activation
- Resistant to imatinib
- Target with midostaurin, avapritinib

**Indolent vs Aggressive:**
- Indolent: Good prognosis, symptom control
- Smoldering: Intermediate
- Aggressive: Organ dysfunction
- Mast cell leukemia: Poor prognosis

### Eosinophil Lineage

**Eosinophilopoiesis:**
- IL-5, GM-CSF, IL-3
- Eotaxins for tissue homing
- Siglec-8 regulates survival

**Tissue Eosinophils:**
- Long-lived (days to weeks)
- Distinct from blood eosinophils
- Tissue-specific functions
- Homeostatic roles

**Eosinophil Depletion Strategies:**
- Anti-IL-5/IL-5R
- Anti-Siglec-8 (lirentelimab)
- Targeted depletion in disease

## Emerging Therapeutics

**Neutrophil-Targeted:**
- CXCR2 antagonists (inflammation)
- Anti-IL-17 (psoriasis, AS)
- Colchicine (gout, cardiovascular)

**Macrophage-Targeted:**
- CSF1R inhibitors (cancer, TGCT)
- CD40 agonists (cancer)
- PI3Kγ inhibitors (tumor reprogramming)

**DC-Targeted:**
- FLT3L (expansion)
- CDX-301 (clinical)
- TLR agonists (adjuvants)

**NK Cell Therapy:**
- CAR-NK cells
- iPSC-derived NK cells
- Cytokine-induced memory
- Combination with checkpoint inhibitors

**Mast Cell-Targeted:**
- KIT inhibitors
- IgE-targeted therapies
- MRGPRX2 antagonists
- Mast cell stabilizers

**Eosinophil-Targeted:**
- Anti-IL-5 biologics
- Anti-Siglec-8
- CCR3 antagonists
- Eosinophil peroxidase inhibitors`,
      keyTerms: [
        { term: 'itaconate', definition: 'Metabolite with antimicrobial and anti-inflammatory properties produced by M1 macrophages', pronunciation: 'eye-TAK-oh-nate' },
        { term: 'trained immunity', definition: 'Long-term functional reprogramming of innate immune cells', pronunciation: 'traynd ih-MYOO-nih-tee' },
        { term: 'WDFY4', definition: 'Protein required for cross-presentation by cDC1', pronunciation: 'W-D-F-Y-four' },
        { term: 'BDCA2', definition: 'Blood dendritic cell antigen 2; pDC-specific receptor', pronunciation: 'B-D-C-A-two' },
        { term: 'siglec', definition: 'Sialic acid-binding immunoglobulin-like lectin', pronunciation: 'SIG-lek' },
        { term: 'TGCT', definition: 'Tenosynovial giant cell tumor; treated with CSF1R inhibitors', pronunciation: 'T-G-C-T' },
        { term: 'midostaurin', definition: 'Multi-kinase inhibitor including KIT; for mastocytosis', pronunciation: 'mih-doh-STAW-rin' },
        { term: 'lirentelimab', definition: 'Anti-Siglec-8 antibody depleting eosinophils', pronunciation: 'lir-EN-teh-lim-ab' },
      ],
      clinicalNotes: `Evidence-Based Practice:

1. **NETs in thrombosis**: Clinical trials of DNase I for COVID-19 ARDS and thrombosis are ongoing. PAD4 inhibitors show promise in preclinical models.

2. **Trained immunity**: BCG vaccination provides non-specific protection against respiratory infections. Metabolic interventions (statins, metformin) may modulate trained immunity.

3. **Macrophage targeting**: Pexidartinib (CSF1R inhibitor) approved for TGCT. CD40 agonists in combination with checkpoint inhibitors show early promise in pancreatic cancer.

4. **NK cell therapy**: CAR-NK cells (CD19-targeted) show activity in lymphoma with less toxicity than CAR-T. Off-the-shelf potential.

5. **Mastocytosis**: Avapritinib (KIT D816V inhibitor) approved for advanced systemic mastocytosis. Highly selective with good responses.`,
      patientCounselingPoints: [
        'Innate immune cells are your first line of defense against infection.',
        'Fever and inflammation are signs your innate immune system is working.',
        'Chronic inflammatory conditions may involve dysregulated innate immunity.',
        'New biologic therapies target specific innate immune cells.',
        'Maintain overall health to support optimal innate immune function.',
        'Report unusual or recurrent infections to your healthcare provider.',
      ],
    },
  },

  media: [
    {
      id: 'neutrophil-phagocytosis',
      type: 'animation',
      filename: 'neutrophil-phagocytosis.mp4',
      title: 'Neutrophil Phagocytosis',
      description: 'Time-lapse of neutrophil engulfing bacteria',
    },
    {
      id: 'macrophage-polarization',
      type: 'diagram',
      filename: 'macrophage-m1-m2.svg',
      title: 'Macrophage Polarization',
      description: 'M1 and M2 macrophage phenotypes and markers',
    },
    {
      id: 'nk-cell-receptors',
      type: 'diagram',
      filename: 'nk-cell-activating-inhibitory.svg',
      title: 'NK Cell Receptors',
      description: 'Balance of activating and inhibitory signals',
    },
    {
      id: 'mast-cell-degranulation',
      type: 'animation',
      filename: 'mast-cell-degranulation.mp4',
      title: 'Mast Cell Degranulation',
      description: 'IgE-mediated mast cell activation and mediator release',
    },
  ],

  citations: [
    {
      id: 'janeway-immunobiology',
      type: 'textbook',
      title: 'Janeway Immunobiology',
      authors: ['Murphy K', 'Weaver C'],
      source: 'W.W. Norton & Company',
      chapter: '3',
    },
    {
      id: 'rosales-macrophages',
      type: 'article',
      title: 'Macrophage Diversity and Polarization',
      authors: ['Rosales C'],
      source: 'Frontiers in Physiology',
    },
    {
      id: 'vivier-nk-cells',
      type: 'article',
      title: 'Innate Lymphoid Cells: 10 Years On',
      authors: ['Vivier E', 'et al.'],
      source: 'Cell',
    },
    {
      id: 'netosis-review',
      type: 'article',
      title: 'Neutrophil Extracellular Traps in Immunity and Disease',
      authors: ['Papayannopoulos V'],
      source: 'Nature Reviews Immunology',
    },
    {
      id: 'statpearls-neutrophils',
      type: 'website',
      title: 'Neutrophils',
      authors: ['Khan HA', 'et al.'],
      source: 'StatPearls Publishing',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK538504/',
    },
  ],

  crossReferences: [
    { targetId: 'innate-immunity-barriers', targetType: 'concept', relationship: 'sibling', label: 'Physical and Chemical Barriers' },
    { targetId: 'pattern-recognition-receptors', targetType: 'concept', relationship: 'sibling', label: 'Pattern Recognition Receptors' },
    { targetId: 'inflammation', targetType: 'process', relationship: 'related', label: 'Inflammation' },
    { targetId: 'hypersensitivity-type-i', targetType: 'concept', relationship: 'related', label: 'Type I Hypersensitivity' },
  ],

  tags: {
    systems: ['immune', 'hematologic'],
    topics: ['immunology', 'innate immunity', 'inflammation', 'phagocytosis'],
    keywords: ['neutrophils', 'macrophages', 'dendritic cells', 'NK cells', 'mast cells', 'eosinophils', 'phagocytosis', 'NETs'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pediatrics', 'pathology'],
    },
  },

  createdAt: '2026-01-31T00:00:00.000Z',
  updatedAt: '2026-01-31T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default innateCellsContent;
