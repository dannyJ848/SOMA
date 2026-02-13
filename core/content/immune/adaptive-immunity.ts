/**
 * Adaptive Immunity Overview
 *
 * T cells, B cells, and the adaptive immune response
 */

import { EducationalContent } from '../types';

export const adaptiveImmunityContent: EducationalContent = {
  id: 'adaptive-immunity-overview',
  type: 'concept',
  name: 'Adaptive Immunity Overview',
  alternateNames: ['Acquired Immunity', 'Specific Immunity', 'Lymphocyte-Mediated Immunity'],

  levels: {
    1: {
      level: 1,
      summary: 'Adaptive immunity is your body\'s specialized defense system that learns to recognize specific germs and remembers them for faster future protection, using T cells and B cells.',
      explanation: `## Your Body's Learning Defense System

While your innate immunity attacks all germs the same way, your **adaptive immunity** learns about specific germs and creates targeted defenses. It's like having a smart security system that remembers every intruder!

### Key Features of Adaptive Immunity

**Specific**
- Recognizes specific germs
- Targets exactly what is causing the problem
- Different response for each type of germ

**Memory**
- Remembers germs it has fought before
- Responds faster and stronger the second time
- Provides long-lasting protection

**Diverse**
- Can recognize millions of different germs
- Creates unique defenses for each threat
- Constantly adapts to new challenges

### The Two Main Cell Types

**T Cells (T Lymphocytes)**
- Made in bone marrow, mature in thymus
- Coordinate immune responses
- Kill infected cells directly
- Help B cells make antibodies

**Types of T Cells:**
- **Helper T cells**: Help other immune cells work better
- **Killer T cells**: Destroy infected body cells
- **Regulatory T cells**: Keep immune system from overreacting

**B Cells (B Lymphocytes)**
- Made and mature in bone marrow
- Make antibodies (special proteins)
- Antibodies stick to germs and mark them for destruction
- Become memory cells for future protection

### How It Works

1. **Recognition**: T and B cells detect specific germs
2. **Activation**: Cells multiply and prepare to fight
3. **Attack**: Antibodies and killer cells attack the germ
4. **Memory**: Some cells stay behind to remember the germ

### Real-World Example: Vaccines

Vaccines teach your adaptive immunity about germs without making you sick:
- Vaccine shows your immune system a piece of the germ
- T and B cells learn to recognize it
- Memory cells form
- If real germ appears later, your body fights it fast!

## Why Adaptive Immunity Matters

- **Long-term protection**: Some immunity lasts a lifetime
- **Specific targeting**: Does not harm healthy cells
- **Memory**: You rarely get the same disease twice
- **Vaccines work**: Because of adaptive immunity memory`,
      keyTerms: [
        { term: 'adaptive immunity', definition: 'The immune system that learns and remembers specific germs', pronunciation: 'uh-DAP-tiv ih-MYOO-nih-tee' },
        { term: 'T cell', definition: 'A type of white blood cell that coordinates immune responses and kills infected cells', pronunciation: 'T sel' },
        { term: 'B cell', definition: 'A type of white blood cell that makes antibodies', pronunciation: 'B sel' },
        { term: 'antibody', definition: 'A protein made by B cells that sticks to specific germs', pronunciation: 'AN-tih-bod-ee' },
        { term: 'memory cell', definition: 'A long-lived immune cell that remembers a specific germ', pronunciation: 'MEM-oh-ree sel' },
        { term: 'vaccine', definition: 'A preparation that teaches the immune system to fight a specific disease', pronunciation: 'vak-SEEN' },
      ],
      analogies: [
        'Adaptive immunity is like a library - it keeps records of every germ it encounters.',
        'T cells are like generals - they coordinate the immune army.',
        'B cells are like weapons factories - they produce specific weapons (antibodies) for each enemy.',
        'Memory cells are like veterans - they remember past battles and respond faster next time.',
      ],
      examples: [
        'Once you have had chickenpox, memory cells protect you from getting it again.',
        'The measles vaccine teaches your B cells to make antibodies against measles virus.',
        'Helper T cells help B cells make better antibodies during an infection.',
        'Killer T cells destroy cells infected with viruses like influenza.',
      ],
      patientCounselingPoints: [
        'Vaccines are safe ways to build adaptive immunity without getting sick.',
        'Childhood vaccines protect for many years, sometimes for life.',
        'Some vaccines need boosters to remind your immune system.',
        'A healthy lifestyle supports your adaptive immune system.',
        'Report unusual infections to your doctor.',
      ],
    },
    2: {
      level: 2,
      summary: 'Adaptive immunity provides antigen-specific responses mediated by T lymphocytes (cell-mediated immunity) and B lymphocytes (humoral immunity), characterized by specificity, diversity, memory, and self-limitation.',
      explanation: `## Characteristics of Adaptive Immunity

### Four Key Attributes

**Specificity:**
- Lymphocytes recognize specific epitopes
- Distinct receptors for each antigen
- TCR and BCR diversity through V(D)J recombination
- MHC restriction for T cells

**Diversity:**
- ~10^11 different TCR specificities
- ~10^9 different BCR specificities
- Generated during lymphocyte development
- Somatic recombination creates repertoire

**Memory:**
- Long-lived memory T and B cells
- Rapid secondary response
- Higher affinity antibodies
- Lifelong protection possible

**Self-Limited:**
- Response declines after antigen elimination
- Regulatory mechanisms prevent overreaction
- Apoptosis of effector cells
- Return to homeostasis

## Lymphocyte Development

### T Cell Development

**Thymic Selection:**
- Progenitors enter thymus from bone marrow
- Double-negative (CD4-CD8-)
- Double-positive (CD4+CD8+)
- Positive selection (MHC recognition)
- Negative selection (self-tolerance)
- Single-positive (CD4+ or CD8+)

**Selection Processes:**
- **Positive selection**: Cortical thymic epithelium
  - Tests if TCR can bind self-MHC
  - Weak binding = survival signal
  - No binding = death by neglect

- **Negative selection**: Medullary thymic epithelium, DCs
  - Tests if TCR binds self-peptide-MHC too strongly
  - Strong binding = deletion (apoptosis)
  - Prevents autoimmunity

**T Cell Subsets:**
- **CD4+ T cells**: Helper T cells (MHC II restricted)
- **CD8+ T cells**: Cytotoxic T cells (MHC I restricted)
- **Tregs**: Regulatory T cells (CD4+CD25+Foxp3+)

### B Cell Development

**Bone Marrow Stages:**
- Pro-B cell: DH-JH rearrangement
- Pre-B cell: VH-DJH rearrangement, μ chain expression
- Immature B cell: Light chain rearrangement, IgM surface expression
- Transitional B cell: Exit to periphery
- Mature B cell: IgM and IgD expression

**Selection:**
- **Positive selection**: Functional BCR required
- **Negative selection**: Self-reactive B cells deleted or anergized
- **Receptor editing**: Secondary light chain rearrangement

**Peripheral Maturation:**
- Follicular B cells (conventional)
- Marginal zone B cells
- B-1 cells (innate-like)

## Antigen Recognition

### T Cell Receptor (TCR)

**Structure:**
- Heterodimer: αβ chains (majority) or γδ chains
- Ig-like V and C domains
- CDR3 for peptide recognition
- Associated with CD3 complex
- ζ chains for signaling

**Recognition:**
- TCR recognizes peptide-MHC complex
- CD4 binds MHC II
- CD8 binds MHC I
- Co-receptor enhances sensitivity

### B Cell Receptor (BCR)

**Structure:**
- Membrane-bound immunoglobulin
- IgM and IgD on naive B cells
- Associated with Igα/Igβ (CD79a/b)
- ITAM signaling motifs

**Recognition:**
- BCR recognizes native antigen
- No MHC restriction
- Can bind conformational epitopes
- Internalization for antigen presentation

## Activation Requirements

### T Cell Activation (Three Signals)

**Signal 1: TCR Recognition**
- TCR binds peptide-MHC
- CD4 or CD8 co-receptor engagement
- Required but not sufficient

**Signal 2: Co-stimulation**
- CD28 binds CD80/CD86 (B7.1/B7.2)
- Prevents anergy
- APC must be activated
- Alternative: ICOS, CD40L

**Signal 3: Cytokines**
- IL-2 for proliferation
- IL-12 for Th1 differentiation
- IL-4 for Th2 differentiation
- TGF-β for Treg differentiation

### B Cell Activation

**T-Dependent Responses:**
- BCR binds antigen (Signal 1)
- Internalization and presentation
- T cell help required (CD40L-CD40)
- Cytokines from T cells
- Germinal center reaction
- High-affinity antibodies, memory

**T-Independent Responses:**
- T cell help not required
- Type 1: Polyclonal activators (LPS)
- Type 2: Repetitive epitopes (polysaccharides)
- IgM predominant
- Limited memory

## Effector Functions

### Cell-Mediated Immunity (T Cells)

**CD4+ Helper T Cells:**
- **Th1**: IFN-γ, TNF-α; macrophage activation
- **Th2**: IL-4, IL-5, IL-13; B cell help, eosinophils
- **Th17**: IL-17, IL-22; neutrophils, epithelial defense
- **Tfh**: IL-21; germinal center help

**CD8+ Cytotoxic T Cells:**
- Perforin/granzyme killing
- Fas-FasL pathway
- Target virus-infected cells, tumors
- MHC I restricted

### Humoral Immunity (B Cells/Antibodies)

**Antibody Functions:**
- **Neutralization**: Block pathogen entry
- **Opsonization**: Enhance phagocytosis
- **Complement activation**: Classical pathway
- **ADCC**: Antibody-dependent cellular cytotoxicity
- **Mast cell degranulation**: Type I hypersensitivity

**Antibody Classes:**
- **IgM**: Primary response, complement
- **IgG**: Secondary response, opsonization
- **IgA**: Mucosal immunity
- **IgE**: Allergies, parasites
- **IgD**: B cell receptor

## Immunological Memory

### Primary vs Secondary Response

**Primary Response:**
- Lag phase: 4-7 days
- IgM first, then IgG
- Low affinity antibodies
- Peak at 7-14 days
- Small memory pool generated

**Secondary Response:**
- Immediate (1-3 days)
- IgG predominant
- High affinity antibodies
- Higher magnitude
- Memory B and T cells activated

### Memory Cell Types

**Memory B Cells:**
- Long-lived (years to lifetime)
- High affinity BCR
- Class-switched (usually IgG)
- Rapid differentiation to plasma cells

**Memory T Cells:**
- **Central memory (TCM)**: CCR7+, circulate lymphoid tissues
- **Effector memory (TEM)**: CCR7-, patrol periphery
- **Tissue-resident memory (TRM)**: Stay in tissues
- Rapid effector function upon rechallenge

## Clinical Correlations

**Immunodeficiencies:**
- T cell defects: Viral susceptibility
- B cell defects: Bacterial susceptibility
- Combined defects: Severe infections

**Autoimmunity:**
- Failure of self-tolerance
- Self-reactive T and B cells
- Treg dysfunction

**Vaccination:**
- Mimics natural infection
- Generates memory without disease
- Herd immunity protection
- Booster doses maintain memory`,
      keyTerms: [
        { term: 'epitope', definition: 'The specific part of an antigen recognized by an antibody or TCR', pronunciation: 'EP-ih-tohp' },
        { term: 'MHC', definition: 'Major histocompatibility complex; presents antigens to T cells', pronunciation: 'em-aych-see' },
        { term: 'positive selection', definition: 'Thymic process selecting T cells that can recognize self-MHC', pronunciation: 'POZ-ih-tiv seh-LEK-shun' },
        { term: 'negative selection', definition: 'Thymic process deleting T cells that react strongly to self-antigens', pronunciation: 'NEG-ah-tiv seh-LEK-shun' },
        { term: 'co-stimulation', definition: 'Second signal required for full T cell activation', pronunciation: 'koh-stim-yoo-LAY-shun' },
        { term: 'germinal center', definition: 'Site in lymph node where B cells proliferate and mutate', pronunciation: 'jer-MIN-al SEN-ter' },
        { term: 'affinity maturation', definition: 'Process increasing antibody affinity during immune response', pronunciation: 'ah-FIN-ih-tee mach-ur-AY-shun' },
        { term: 'class switching', definition: 'Change in antibody isotype while maintaining specificity', pronunciation: 'klas SWICH-ing' },
      ],
      analogies: [
        'The thymus is like a boot camp - only the best T cells graduate.',
        'MHC molecules are like presentation trays - they display antigens for T cells to inspect.',
        'Co-stimulation is like a two-key system - both signals needed for activation prevents accidental triggering.',
        'Germinal centers are like antibody engineering workshops - B cells improve their product through mutation and selection.',
      ],
      examples: [
        'DiGeorge syndrome (thymic aplasia) causes T cell deficiency and susceptibility to viral infections.',
        'X-linked agammaglobulinemia (Bruton disease) is a B cell defect causing recurrent bacterial infections.',
        'The smallpox vaccine provided lifelong immunity through memory T and B cells.',
        'Tetanus boosters are needed every 10 years because memory wanes for this antigen.',
      ],
    },
    3: {
      level: 3,
      summary: 'Adaptive immunity involves antigen-specific lymphocytes (T and B cells) with diverse antigen receptors generated through V(D)J recombination. Activation requires multiple signals, leading to clonal expansion, differentiation into effector and memory cells, and generation of high-affinity, class-switched antibodies.',
      explanation: `## V(D)J Recombination

### Mechanism of Receptor Diversity

**Gene Segments:**
- **V (Variable)**: Multiple copies (Vα: ~50, Vβ: ~50)
- **D (Diversity)**: Only heavy/β chains (Dβ: ~2)
- **J (Joining)**: Multiple copies (Jα: ~70, Jβ: ~13)

**Recombination Process:**
1. RAG1/RAG2 recognize recombination signal sequences (RSS)
2. 12/23 rule: One-turn RSS joins two-turn RSS
3. DNA cleavage creates hairpin and blunt ends
4. Artemis opens hairpins
5. TdT adds N-nucleotides (junctional diversity)
6. DNA-PK, XRCC4, ligase IV repair

**Diversity Calculation:**
- Combinatorial: V × D × J
- Junctional: N-region addition, P-nucleotides
- Total: ~10^11 TCR specificities
- Similar for BCR

### Central Tolerance

**Thymic Selection Mechanisms:**

**Positive Selection:**
- Occurs in cortex
- DP thymocytes test TCR against self-peptide-MHC
- Weak recognition → survival signal (TCR signaling)
- No recognition → death by neglect
- Determines MHC restriction

**Negative Selection:**
- Occurs in medulla
- mTECs express AIRE (autoimmune regulator)
- AIRE drives expression of tissue-specific antigens
- DCs also present self-antigens
- Strong TCR recognition → apoptosis
- Prevents autoimmunity

**Treg Development:**
- Some self-reactive cells become Tregs
- Foxp3 expression
- Suppressive function
- Alternative to deletion

### Antigen Processing and Presentation

**MHC Class I Pathway:**
1. Intracellular proteins degraded by proteasome
2. TAP transports peptides to ER
3. Peptides loaded onto MHC I
4. Stable complex exported to surface
5. Presented to CD8+ T cells

**MHC Class II Pathway:**
1. Extracellular proteins endocytosed
2. Proteolysis in endosomes
3. MHC II synthesized in ER with invariant chain
4. MHC II-invariant chain complex transported
5. Invariant chain degraded, leaving CLIP
6. HLA-DM exchanges CLIP for antigenic peptide
7. Presented to CD4+ T cells

**Cross-Presentation:**
- Exogenous antigens presented on MHC I
- Specialized DC subset (cDC1)
- Critical for antiviral and antitumor immunity
- Two pathways: cytosolic and vacuolar

### T Cell Activation and Differentiation

**Signal Transduction:**
1. TCR engagement → Lck activation
2. CD3 ITAM phosphorylation
3. ZAP-70 recruitment and activation
4. LAT/SLP-76 phosphorylation
5. PLCγ activation → IP3/DAG
6. Calcium influx → NFAT activation
7. PKC-θ activation → NF-κB activation
8. Ras-MAPK pathway → AP-1 activation

**Transcription Factors:**
- **NFAT**: IL-2 transcription
- **NF-κB**: Survival, proliferation
- **AP-1**: Cell cycle progression
- **FOXP3**: Treg differentiation
- **T-bet**: Th1 differentiation
- **GATA3**: Th2 differentiation
- **RORγt**: Th17 differentiation
- **Bcl-6**: Tfh differentiation

**Clonal Expansion:**
- IL-2 drives proliferation
- 100-1000 fold increase in cell numbers
- Effector differentiation
- Acquisition of effector functions
- Migration to peripheral tissues

### B Cell Activation and Antibody Responses

**Germinal Center Reaction:**

**Dark Zone:**
- Proliferating B cells (centroblasts)
- Somatic hypermutation
- AID (activation-induced cytidine deaminase)
- Mutation of V region genes
- 10^-3 mutations per base per division

**Light Zone:**
- Non-dividing B cells (centrocytes)
- Antigen capture from FDCs
- Tfh cell help required
- Selection for high-affinity B cells
- Differentiation to plasma cells or memory

**Affinity Maturation:**
- Repeated cycles of mutation and selection
- B cells with higher affinity BCR selected
- Antibody affinity increases over time
- 10-100 fold increase typical

**Class Switch Recombination:**
- AID initiates DNA breaks in switch regions
- Recombination between Sμ and downstream S regions
- Constant region changed, variable region preserved
- Cytokines direct switch: IL-4 (IgE), IFN-γ (IgG), TGF-β (IgA)

## Memory Lymphocyte Biology

### Memory B Cell Subsets

**IgM Memory B Cells:**
- T-independent responses
- Marginal zone B cells
- Rapid response to polysaccharide antigens
- Limited somatic hypermutation

**Class-Switched Memory B Cells:**
- T-dependent responses
- High affinity BCR
- Germinal center origin
- Long-lived

**Memory B Cell Maintenance:**
- Survival signals from environment
- BAFF and APRIL cytokines
- Possible periodic reactivation
- Long-lived plasma cells in bone marrow

### Memory T Cell Subsets

**Central Memory T Cells (TCM):**
- CCR7+, CD62L+
- Reside in lymph nodes
- High proliferative capacity
- IL-2 production
- Rapid response upon rechallenge

**Effector Memory T Cells (TEM):**
- CCR7-, CD62L-
- Circulate in blood, peripheral tissues
- Immediate effector function
- Cytokine production, cytotoxicity
- Lower proliferative capacity

**Tissue-Resident Memory T Cells (TRM):**
- CD69+, CD103+ (epithelial)
- Permanently reside in tissues
- Do not recirculate
- Rapid local protection
- CD8+ and CD4+ subsets

**Memory Maintenance:**
- IL-7 and IL-15 (survival cytokines)
- Homeostatic proliferation
- Long-lived quiescent state
- Epigenetic modifications
- Metabolic adaptations`,
      keyTerms: [
        { term: 'RAG', definition: 'Recombination-activating gene; enzyme complex for V(D)J recombination', pronunciation: 'rag' },
        { term: 'AIRE', definition: 'Autoimmune regulator; transcription factor driving expression of tissue-specific antigens in thymus', pronunciation: 'AIR' },
        { term: 'ZAP-70', definition: 'Zeta-chain-associated protein kinase 70; critical for TCR signaling', pronunciation: 'ZAP-seventy' },
        { term: 'AID', definition: 'Activation-induced cytidine deaminase; enzyme for somatic hypermutation and class switching', pronunciation: 'ay-ee-dee' },
        { term: 'centroblast', definition: 'Proliferating B cell in germinal center dark zone', pronunciation: 'SEN-troh-blast' },
        { term: 'centrocyte', definition: 'Non-proliferating B cell in germinal center light zone', pronunciation: 'SEN-troh-site' },
        { term: 'Tfh', definition: 'T follicular helper cell; helps B cells in germinal centers', pronunciation: 'T-F-H' },
        { term: 'TRM', definition: 'Tissue-resident memory T cell; permanently resides in peripheral tissues', pronunciation: 'T-R-M' },
      ],
      analogies: [
        'V(D)J recombination is like shuffling a deck of cards - different combinations create unique receptors.',
        'AIRE is like a teacher showing examples of all body tissues in the thymus - T cells learn what to avoid attacking.',
        'Somatic hypermutation is like random mutations in a factory - most are useless, but occasionally you get a better product.',
        'Memory T cells are like sleeper agents - they stay hidden in tissues, ready to activate when the enemy returns.',
      ],
      examples: [
        'Omenn syndrome is caused by hypomorphic RAG mutations, leading to limited TCR diversity and severe immunodeficiency.',
        'APECED (autoimmune polyendocrinopathy) is caused by AIRE mutations, causing multi-organ autoimmune attacks.',
        'ZAP-70 deficiency causes selective CD8+ T cell deficiency despite normal numbers.',
        'Hyper-IgM syndrome results from defects in CD40L or CD40, preventing class switching and germinal center reactions.',
      ],
      clinicalNotes: 'Checkpoint inhibitors (anti-PD-1, anti-CTLA-4) enhance T cell responses by blocking inhibitory signals. They have revolutionized cancer treatment but can cause immune-related adverse events by unleashing autoreactive T cells.',
    },
    4: {
      level: 4,
      summary: 'Adaptive immunity involves complex molecular mechanisms including V(D)J recombination, thymic selection, antigen processing and presentation, multi-signal activation, clonal expansion, and differentiation into diverse effector and memory populations with distinct functions and tissue distributions.',
      explanation: `## Molecular Mechanisms of Lymphocyte Development

### V(D)J Recombination in Detail

**Recombination Signal Sequences (RSS):**
- Conserved heptamer (CACAGTG)
- Spacer (12 or 23 bp)
- Conserved nonamer (ACAAAAACC)
- 12/23 rule ensures proper joining

**RAG Complex Function:**
- RAG1: Catalytic activity, RSS recognition
- RAG2: Enhances specificity, cell cycle regulated
- RAG binding to 12-RSS
- Capture of 23-RSS
- Synaptic complex formation
- DNA cleavage: Hairpin at coding end, blunt at signal end

**DNA Repair:**
- **Artemis**: Opens hairpins (generates P-nucleotides)
- **TdT**: Adds N-nucleotides (junctional diversity)
- **DNA-PKcs**: DNA-dependent protein kinase
- **Ku70/80**: End binding
- **XRCC4/Ligase IV**: Ligation
- **ATM**: Checkpoint control

**Defects Causing Disease:**
- RAG1/2 deficiency: SCID (no T or B cells)
- Artemis deficiency: Radiation-sensitive SCID
- DNA-PKcs deficiency: SCID
- Ligase IV deficiency: SCID with developmental defects
- Cernunnos/XLF deficiency: SCID

### Thymic Microenvironment

**Cortical Thymic Epithelial Cells (cTECs):**
- Express MHC I and II
- Present self-peptides
- Mediate positive selection
- Express unique proteasome subunit (β5t)
- Produce thymic selection peptides

**Medullary Thymic Epithelial Cells (mTECs):**
- Express AIRE
- Express tissue-specific antigens (TSAs)
- Promiscuous gene expression
- Mediate negative selection
- Also express MHC I and II

**Dendritic Cells in Thymus:**
- mTEC-derived or peripheral
- Present blood-borne antigens
- Contribute to negative selection
- Can induce Treg development

**AIRE Mechanism:**
- Transcription factor
- Binds to promoters of tissue-specific genes
- Epigenetic modifications
- Promotes gene expression
- Self-tolerance to peripheral antigens

### TCR Signaling Networks

**Proximal Signaling:**
- TCR engagement → conformational change
- CD4/CD8 co-receptor brings Lck
- Lck phosphorylates CD3 ITAMs
- ZAP-70 recruited to phosphorylated ITAMs
- ZAP-70 autophosphorylation and activation
- LAT and SLP-76 phosphorylation
- Scaffolding function recruits signaling proteins

**Downstream Pathways:**

**Calcium-NFAT Pathway:**
- PLCγ cleaves PIP2 → IP3 + DAG
- IP3 binds IP3R on ER
- ER calcium release
- STIM1 senses ER calcium depletion
- STIM1 activates ORAI1 (CRAC channel)
- Calcium influx
- Calcineurin activation
- NFAT dephosphorylation
- NFAT nuclear translocation

**PKC-NF-κB Pathway:**
- DAG activates PKC-θ
- PKC-θ phosphorylates CARMA1
- CARMA1-BCL10-MALT1 complex
- IKK activation
- IκB phosphorylation and degradation
- NF-κB release and nuclear translocation

**Ras-MAPK Pathway:**
- RASGRP1 activated by DAG
- Ras activation
- Raf-MEK-ERK cascade
- AP-1 transcription factor activation
- Cell cycle progression

**PI3K-AKT Pathway:**
- PI3K activated by CD28
- PIP3 production
- AKT recruitment and activation
- mTOR activation
- Cell survival and metabolism

### Germinal Center Dynamics

**B Cell Migration:**
- CXCR4-CXCL12: Retention in dark zone
- CXCR5-CXCL13: Migration to light zone
- S1PR2: Retention in germinal center
- EBI2: Positioning at follicular edge

**Follicular Dendritic Cells (FDCs):**
- Non-hematopoietic origin
- Retain antigen as immune complexes
- Express complement receptors (CD21, CD35)
- Present intact antigen to B cells
- Do not internalize or process antigen

**T Follicular Helper Cells (Tfh):**
- Bcl-6 transcription factor
- CXCR5 expression
- Migrate to B cell follicles
- Provide help via CD40L and IL-21
- Essential for germinal center B cells
- PD-1 expression (inhibitory)

**Selection Mechanisms:**
- B cells compete for antigen on FDCs
- Higher affinity BCR captures more antigen
- More antigen presentation to Tfh cells
- Tfh help proportional to antigen presented
- Positive selection of high-affinity B cells
- Apoptosis of low-affinity B cells

### Memory Cell Formation

**B Cell Memory:**
- Transcriptional reprogramming
- Bcl-2 upregulation (survival)
- CD80/CD86 expression
- High affinity BCR
- Class-switched isotype
- Long-lived plasma cells separate population

**T Cell Memory:**
- IL-7Rα (CD127) high expression
- KLRG1 low expression
- Enhanced survival gene expression
- Metabolic switch to OXPHOS
- Epigenetic modifications
- Chromatin accessibility changes

**Tissue-Resident Memory:**
- CD69 (blocks S1P1, prevents egress)
- CD103 (binds E-cadherin on epithelium)
- αEβ7 integrin
- Local survival factors
- No recirculation
- Rapid effector function

## Clinical Applications

**Vaccine Design:**
- T-dependent antigens for memory
- Adjuvants for co-stimulation
- Delivery systems for antigen presentation
- Prime-boost strategies
- Mucosal delivery for TRM

**Cancer Immunotherapy:**
- Checkpoint inhibitors (anti-PD-1, anti-CTLA-4)
- CAR-T cells
- Tumor-infiltrating lymphocytes
- Cancer vaccines
- Combination therapies

**Autoimmune Therapy:**
- B cell depletion (rituximab)
- Co-stimulation blockade (abatacept)
- Cytokine blockade
- Treg enhancement
- Tolerance induction`,
      keyTerms: [
        { term: 'RSS', definition: 'Recombination signal sequence; recognized by RAG for V(D)J recombination', pronunciation: 'R-S-S' },
        { term: 'P-nucleotide', definition: 'Palindromic nucleotides created by Artemis opening of hairpins', pronunciation: 'P-NOO-klee-oh-tide' },
        { term: 'N-nucleotide', definition: 'Non-templated nucleotides added by TdT', pronunciation: 'N-NOO-klee-oh-tide' },
        { term: 'STIM1', definition: 'Stromal interaction molecule 1; ER calcium sensor', pronunciation: 'STIM-one' },
        { term: 'ORAI1', definition: 'Calcium release-activated calcium channel', pronunciation: 'oh-RYE-one' },
        { term: 'CARMA1', definition: 'CARD-containing MAGUK protein 1; scaffold in NF-κB pathway', pronunciation: 'KAR-mah-one' },
        { term: 'Bcl-6', definition: 'B cell lymphoma 6; transcription factor for Tfh and GC B cells', pronunciation: 'B-C-L-six' },
        { term: 'AID', definition: 'Activation-induced cytidine deaminase; deaminates cytosine to uracil', pronunciation: 'ay-ee-dee' },
      ],
      analogies: [
        'The 12/23 rule in V(D)J recombination is like only allowing puzzle pieces with matching edges to join.',
        'AIRE is like a yearbook - it shows T cells examples of every tissue in the body so they recognize them as "self."',
        'Calcium signaling in T cells is like a fire alarm - when triggered, it sets off multiple emergency responses.',
        'Germinal center selection is like American Idol - many contestants (B cells) compete, but only the best (highest affinity) survive.',
      ],
      examples: [
        'Defects in NHEJ factors (DNA-PKcs, Artemis) cause radiation-sensitive SCID because V(D)J recombination and DNA repair both require these proteins.',
        'Autoimmune regulator (AIRE) mutations cause APECED, where T cells attack multiple endocrine organs because they never learned to recognize them as self.',
        'ORAI1 deficiency causes severe combined immunodeficiency with defects in T cell activation due to impaired calcium signaling.',
        'Patients with CD40L deficiency (hyper-IgM syndrome type 1) cannot form germinal centers and have impaired memory responses.',
      ],
      clinicalNotes: 'CAR-T cell therapy involves engineering patient T cells to express chimeric antigen receptors targeting tumor antigens. Highly effective in B cell malignancies but associated with cytokine release syndrome and neurotoxicity.',
    },
    5: {
      level: 5,
      summary: 'Contemporary understanding of adaptive immunity integrates structural biology of antigen receptors, systems-level analysis of lymphocyte development and activation, epigenetic regulation of memory formation, and translational applications in vaccines, cancer immunotherapy, and treatment of immune-mediated diseases.',
      explanation: `## Structural Biology of Antigen Recognition

### TCR-pMHC Complex

**Cryo-EM Structures:**
- TCR docked on peptide-MHC
- CDR3 loops contact peptide
- CDR1/CDR2 contact MHC helices
- Diagonal docking orientation
- MHC restriction explained structurally

**TCR Triggering:**
- Monomeric TCR not sufficient
- Receptor clustering required
- CD3 conformational change
- Mechanical force enhances signaling
- Kinetic proofreading model

**Neoantigen Recognition:**
- Tumor-specific mutations
- High-affinity TCRs
- Predicted by algorithms
- Personalized cancer vaccines
- TCR-T cell therapies

### BCR Structure and Signaling

**Membrane Ig Organization:**
- BCR oligomers in resting state
- Inhibited by constant region interactions
- Antigen binding disrupts inhibition
- Igα/Igβ ITAMs exposed
- Syk kinase recruitment

**BCR Affinity Thresholds:**
- Low affinity: T-independent responses
- High affinity: Germinal center entry
- Affinity discrimination
- Antigen valency matters
- Membrane-bound vs soluble antigen

**Co-receptor Role:**
- CD19 amplifies signaling
- CD21 binds complement C3d
- Co-ligation reduces threshold
- Enhances B cell activation
- Part of B cell co-receptor complex

## Single-Cell Analysis of Adaptive Immunity

### T Cell Repertoire Analysis

**TCR Sequencing:**
- Bulk and single-cell approaches
- CDR3 as unique identifier
- Clonotype tracking
- Public vs private clonotypes
- Repertoire diversity metrics

**Antigen-Specific T Cells:**
- pMHC tetramers
- Activation-induced markers
- Single-cell RNA-seq
- TCR-phenotype correlation
- Clonal expansion patterns

**Tumor-Infiltrating Lymphocytes:**
- Exhaustion signatures
- Clonal expansion
- Neoantigen-specific T cells
- Predict response to checkpoint inhibitors
- Guide personalized therapy

### B Cell Repertoire Analysis

**BCR Sequencing:**
- Heavy and light chain pairing
- Somatic hypermutation tracking
- Lineage reconstruction
- Affinity maturation analysis
- Vaccine response monitoring

**Single B Cell Analysis:**
- Antigen-specific B cells
- Monoclonal antibody discovery
- HIV broadly neutralizing antibodies
- Influenza stem antibodies
- SARS-CoV-2 antibodies

**Germinal Center Dynamics:**
- Light zone vs dark zone signatures
- Proliferation rates
- Selection pressures
- Phylogenetic analysis
- Real-time imaging

## Epigenetic Regulation

### T Cell Differentiation

**Lineage-Specific Epigenetics:**
- Th1: T-bet binding, IFNG locus accessibility
- Th2: GATA3 binding, IL4/5/13 loci accessibility
- Th17: RORγt binding, IL17 locus
- Treg: Foxp3 binding, demethylation of CpG islands
- Tfh: Bcl-6 binding, CXCR5 accessibility

**Chromatin Remodeling:**
- H3K4me3: Active promoters
- H3K27ac: Active enhancers
- H3K27me3: Repressed regions
- DNA demethylation: Gene activation
- CTCF: Insulator function

**Super-Enhancers:**
- Clusters of enhancers
- Lineage-defining genes
- Master transcription factors
- Cell identity maintenance
- Therapeutic targets

### Memory Cell Epigenetics

**Epigenetic Memory:**
- Primed enhancers (H3K4me1)
- Bivalent domains
- Rapid gene expression upon rechallenge
- Stable through cell division
- Metabolic gene regulation

**Trained Immunity:**
- Innate immune memory
- Epigenetic reprogramming
- H3K4me3 at cytokine genes
- Metabolic changes
- β-glucan, BCG effects

## Cancer Immunotherapy

### Checkpoint Inhibitors

**CTLA-4 Blockade:**
- Ipilimumab
- Blocks inhibitory signal in priming
- Enhances T cell activation
- Toxicity: Colitis, hypophysitis
- Effective in melanoma

**PD-1/PD-L1 Blockade:**
- Pembrolizumab, nivolumab, atezolizumab
- Blocks inhibitory signal in periphery
- Reactivates exhausted T cells
- Predictive biomarkers: PD-L1, TMB, MSI-H
- Broad efficacy across tumor types

**Mechanisms of Resistance:**
- Lack of T cell infiltration (cold tumors)
- Loss of antigen presentation
- Alternative checkpoint upregulation
- Immunosuppressive microenvironment
- Tumor heterogeneity

### CAR-T Cell Therapy

**CAR Structure:**
- ScFv (single-chain variable fragment)
- Hinge region
- Transmembrane domain
- Costimulatory domain (CD28 or 4-1BB)
- CD3ζ signaling domain

**Generations:**
- 1st: CD3ζ only (limited persistence)
- 2nd: One costimulatory domain
- 3rd: Two costimulatory domains
- 4th: Cytokine production (armored CARs)
- 5th: Universal CARs

**Clinical Applications:**
- CD19 CAR-T: B-ALL, DLBCL
- BCMA CAR-T: Multiple myeloma
- Toxicities: CRS, ICANS
- Manufacturing challenges
- Allogeneic CAR-T development

### TCR-T Therapy

**Advantages:**
- Targets intracellular antigens
- MHC-restricted
- Natural TCR signaling
- Lower cytokine release

**Challenges:**
- MHC restriction
- Tumor antigen selection
- Off-target toxicity
- Manufacturing complexity

## Vaccinology

### Next-Generation Vaccines

**mRNA Vaccines:**
- SARS-CoV-2 success
- Rapid development
- Strong T and B cell responses
- Lipid nanoparticle delivery
- Cold chain requirements

**Viral Vector Vaccines:**
- Adenovirus vectors
- Strong immunogenicity
- Pre-existing immunity issues
- Single-dose potential
- Ebola, COVID-19 applications

**Nanoparticle Vaccines:**
- Self-assembling protein nanoparticles
- Multivalent antigen display
- Built-in adjuvanticity
- RSV, influenza candidates
- SARS-CoV-2 (NVX-CoV2373)

**T Cell Vaccines:**
- Target conserved epitopes
- Universal influenza
- HIV cure strategies
- Cancer vaccines
- Treg induction for autoimmunity

### Vaccine Adjuvants

**TLR Agonists:**
- MPL (TLR4): Cervarix, Cervarix
- CpG (TLR9): Heplisav-B
- Imiquimod (TLR7): Topical

**STING Agonists:**
- Cyclic dinucleotides
- Cancer vaccines
- Intratumoral delivery
- Combination with checkpoint inhibitors

**Saponins:**
- QS-21
- AS01 (Shingrix)
- Strong cellular responses
- Part of liposomal formulations

**Emulsions:**
- MF59 (Fluad)
- AS03 (Pandemrix)
- Enhanced antibody responses
- Recruitment of APCs

## Future Directions

**Unanswered Questions:**
- How is memory maintained for decades?
- What determines T cell fate decisions?
- How can we enhance vaccine efficacy?
- How to overcome immunotherapy resistance?
- How to induce tolerance in autoimmunity?

**Emerging Technologies:**
- CRISPR engineering of lymphocytes
- Organoid models of immunity
- Spatial transcriptomics
- Real-time intravital imaging
- AI/ML for epitope prediction

**Therapeutic Opportunities:**
- Personalized cancer vaccines
- Universal T cell therapies
- Treg therapies for autoimmunity
- Tissue-specific targeting
- Combination immunotherapies`,
      keyTerms: [
        { term: 'pMHC', definition: 'Peptide-MHC complex; recognized by TCR', pronunciation: 'P-M-H-C' },
        { term: 'scFv', definition: 'Single-chain variable fragment; antibody V regions linked by peptide', pronunciation: 'ess-cee-vee' },
        { term: 'CRS', definition: 'Cytokine release syndrome; toxicity from CAR-T therapy', pronunciation: 'C-R-S' },
        { term: 'ICANS', definition: 'Immune effector cell-associated neurotoxicity syndrome', pronunciation: 'I-CANS' },
        { term: 'TMB', definition: 'Tumor mutational burden; predictive biomarker for checkpoint inhibitors', pronunciation: 'T-M-B' },
        { term: 'MSI-H', definition: 'Microsatellite instability-high; predictive biomarker', pronunciation: 'em-ess-eye-aitch' },
        { term: 'super-enhancer', definition: 'Cluster of enhancers driving high expression of cell identity genes', pronunciation: 'SOO-per en-HAN-ser' },
        { term: 'trained immunity', definition: 'Long-term functional reprogramming of innate immune cells', pronunciation: 'traynd ih-MYOO-nih-tee' },
      ],
      clinicalNotes: `Evidence-Based Practice:

1. **Checkpoint inhibitors**: Pembrolizumab approved for MSI-H/dMMR tumors regardless of site (tumor-agnostic indication). PD-L1 expression predicts response in some but not all tumor types.

2. **CAR-T therapy**: Axicabtagene ciloleucel and tisagenlecleucel approved for DLBCL. Complete response rates ~50%. CRS manageable with tocilizumab.

3. **mRNA vaccines**: COVID-19 vaccines (Pfizer/BioNTech, Moderna) demonstrate ~95% efficacy. Strong CD8+ T cell responses generated.

4. **Neoantigen vaccines**: Personalized vaccines in melanoma show promise. NCT03897881 and similar trials ongoing.

5. **Treg therapy**: Low-dose IL-2 trials for autoimmunity. CAR-Treg development for transplant tolerance.`,
      patientCounselingPoints: [
        'Vaccines are one of the most effective medical interventions in history.',
        'Adaptive immunity provides long-term protection against many diseases.',
        'New cancer treatments harness your adaptive immune system.',
        'Report any unusual infections or autoimmune symptoms.',
        'Maintain vaccination records and stay up to date.',
        'Discuss any concerns about vaccines with your healthcare provider.',
      ],
    },
  },

  media: [
    {
      id: 'tcr-structure',
      type: 'diagram',
      filename: 'tcr-pmhc-structure.svg',
      title: 'TCR-pMHC Structure',
      description: 'T cell receptor recognition of peptide-MHC complex',
    },
    {
      id: 'vdj-recombination',
      type: 'animation',
      filename: 'vdj-recombination.mp4',
      title: 'V(D)J Recombination',
      description: 'Mechanism of antigen receptor gene rearrangement',
    },
    {
      id: 'germinal-center',
      type: 'diagram',
      filename: 'germinal-center-reaction.svg',
      title: 'Germinal Center Reaction',
      description: 'B cell proliferation, mutation, and selection',
    },
    {
      id: 'car-t-structure',
      type: 'diagram',
      filename: 'car-t-cell-structure.svg',
      title: 'CAR-T Cell Structure',
      description: 'Chimeric antigen receptor design',
    },
  ],

  citations: [
    {
      id: 'janeway-immunobiology',
      type: 'textbook',
      title: 'Janeway Immunobiology',
      authors: ['Murphy K', 'Weaver C'],
      source: 'W.W. Norton & Company',
      chapter: '8-12',
    },
    {
      id: 'abbas-cellular',
      type: 'textbook',
      title: 'Cellular and Molecular Immunology',
      authors: ['Abbas AK', 'Lichtman AH', 'Pillai S'],
      source: 'Elsevier',
      chapter: '8-11',
    },
    {
      id: 'sharma-checkpoint',
      type: 'article',
      title: 'The Future of Immune Checkpoint Therapy',
      authors: ['Sharma P', 'Allison JP'],
      source: 'Science',
    },
    {
      id: 'june-car-t',
      type: 'article',
      title: 'CAR-T Cell Immunotherapy for Human Cancer',
      authors: ['June CH', 'Sadelain M'],
      source: 'Science',
    },
    {
      id: 'pardi-mrna',
      type: 'article',
      title: 'mRNA vaccines - a new era in vaccinology',
      authors: ['Pardi N', 'Hogan MJ', 'Porter FW', 'Weissman D'],
      source: 'Nature Reviews Drug Discovery',
    },
  ],

  crossReferences: [
    { targetId: 'innate-immunity-barriers', targetType: 'concept', relationship: 'related', label: 'Innate Immunity' },
    { targetId: 't-cell-development', targetType: 'concept', relationship: 'child', label: 'T Cell Development' },
    { targetId: 'b-cell-development', targetType: 'concept', relationship: 'child', label: 'B Cell Development' },
    { targetId: 'antibodies', targetType: 'concept', relationship: 'child', label: 'Antibodies' },
    { targetId: 'mhc', targetType: 'concept', relationship: 'related', label: 'MHC' },
  ],

  tags: {
    systems: ['immune', 'lymphatic'],
    topics: ['immunology', 'adaptive immunity', 'lymphocytes', 'vaccines'],
    keywords: ['T cells', 'B cells', 'antibodies', 'memory', 'vaccines', 'cancer immunotherapy', 'CAR-T'],
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

export default adaptiveImmunityContent;
