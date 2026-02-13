/**
 * Cancer Biology Educational Content
 *
 * Comprehensive coverage of fundamental cancer biology including:
 * - Cell cycle regulation and dysregulation
 * - Genetic mutations and carcinogenesis
 * - Metastasis mechanisms
 * - Tumor microenvironment
 */

import { EducationalContent } from '../../types';

export const cancerBiologyContent: EducationalContent = {
  id: 'oncology-cancer-biology-overview',
  type: 'concept',
  name: 'Cancer Biology Fundamentals',
  alternateNames: ['Oncology basics', 'Cancer pathophysiology', 'Carcinogenesis'],

  levels: {
    1: {
      level: 1,
      summary: 'Cancer happens when cells in your body grow out of control and don\'t follow the normal rules.',
      explanation: `Your body is made of trillions of tiny cells. Normally, cells grow, divide to make new cells, and die when they get old or damaged. This is a carefully controlled process.

**What goes wrong in cancer:**
- **Cells keep growing**: Instead of stopping when they should, cancer cells keep multiplying
- **Cells don't die**: Normal old cells die to make room for new ones, but cancer cells refuse to die
- **Cells spread**: Sometimes cancer cells break away and travel to other parts of the body

Think of it like this: your body is like a well-organized city where buildings (cells) are built, maintained, and eventually torn down according to strict rules. Cancer is like a construction crew that ignores all the rules, keeps building even when told to stop, and refuses to tear down old buildings.

**Why cancer is dangerous:**
- Cancer cells crowd out healthy cells
- They can spread to important organs
- They use up the body's energy and resources`,
      keyTerms: [
        { term: 'cancer', definition: 'A disease where cells grow out of control' },
        { term: 'tumor', definition: 'A lump or mass of abnormal cells' },
        { term: 'benign', definition: 'A growth that is NOT cancer and doesn\'t spread' },
        { term: 'malignant', definition: 'A growth that IS cancer and can spread to other parts of the body' },
      ],
      analogies: [
        'Cancer cells are like cars with broken brakes - they can\'t stop growing even when they\'re supposed to.',
        'Normal cells are like polite guests who leave when the party is over. Cancer cells are like guests who refuse to leave and invite more friends.',
      ],
      examples: [
        'A mole that grows, changes shape, or bleeds might be skin cancer cells growing out of control.',
        'A lump in the breast might be cancer cells that keep multiplying when they shouldn\'t.',
      ],
    },
    2: {
      level: 2,
      summary: 'Cancer develops when genetic mutations disrupt normal cell cycle control, leading to uncontrolled proliferation, resistance to cell death, and eventually the ability to spread.',
      explanation: `Cancer is fundamentally a disease of abnormal cell growth caused by genetic changes (mutations). Understanding cancer requires knowing how normal cells control their growth.

**Normal Cell Control:**
1. **Cell Cycle**: Cells go through phases (G1 → S → G2 → M) before dividing
2. **Checkpoints**: Quality control points that stop division if something is wrong
3. **Apoptosis**: Programmed cell death when cells are damaged or no longer needed
4. **Contact Inhibition**: Cells stop growing when they touch other cells

**How Cancer Develops:**
1. **Initiation**: First mutation occurs (often in DNA repair genes)
2. **Promotion**: Cell gains growth advantage, begins multiplying faster
3. **Progression**: Additional mutations accumulate, cells become more abnormal
4. **Metastasis**: Cells spread to distant sites

**Two Key Gene Types:**
- **Oncogenes**: Genes that promote cell growth. When mutated, they're stuck "ON" (like a gas pedal stuck down)
- **Tumor Suppressor Genes**: Genes that slow cell growth. When mutated, they're "OFF" (like losing your brakes)

**Hallmarks of Cancer (simplified):**
- Sustained growth signals
- Avoiding growth suppressors
- Resisting cell death
- Enabling immortality
- Inducing blood vessel growth (angiogenesis)
- Activating invasion and spread`,
      keyTerms: [
        { term: 'mutation', definition: 'A change in the DNA sequence that can alter how a gene works', pronunciation: 'myoo-TAY-shun' },
        { term: 'oncogene', definition: 'A gene that can cause cancer when mutated or overexpressed', pronunciation: 'ON-koh-jeen' },
        { term: 'tumor suppressor gene', definition: 'A gene that normally prevents cancer by controlling cell growth' },
        { term: 'apoptosis', definition: 'Programmed cell death; the cell\'s built-in self-destruct mechanism', pronunciation: 'ay-pop-TOE-sis' },
        { term: 'metastasis', definition: 'The spread of cancer from where it started to other parts of the body', pronunciation: 'meh-TAS-tuh-sis' },
      ],
      analogies: [
        'Oncogenes are like a gas pedal stuck down. Tumor suppressor genes are like brakes that have failed. Cancer needs both problems.',
        'Cancer development is like a car going downhill with a stuck accelerator and broken brakes - each mutation makes it harder to stop.',
      ],
    },
    3: {
      level: 3,
      summary: 'Carcinogenesis is a multistep process involving sequential mutations in oncogenes and tumor suppressor genes, leading to the acquisition of hallmark cancer capabilities.',
      explanation: `Cancer development (carcinogenesis) requires multiple genetic and epigenetic alterations that progressively transform normal cells into malignant cells.

**The Cell Cycle in Detail:**

*Phases:*
- **G1 (Gap 1)**: Cell grows, prepares for DNA synthesis
- **S (Synthesis)**: DNA replication
- **G2 (Gap 2)**: Preparation for mitosis
- **M (Mitosis)**: Cell division
- **G0**: Quiescent state (not dividing)

*Key Regulators:*
- **Cyclins**: Proteins that rise and fall during the cycle
- **Cyclin-Dependent Kinases (CDKs)**: Enzymes activated by cyclins
- **CDK Inhibitors**: p21, p27, p16 - put brakes on the cycle
- **Retinoblastoma protein (Rb)**: Master brake at G1/S checkpoint
- **p53**: "Guardian of the genome" - arrests cycle or triggers apoptosis

**Proto-oncogenes → Oncogenes:**
- Point mutations (RAS)
- Gene amplification (HER2, MYC)
- Chromosomal translocations (BCR-ABL, MYC)
- Insertional mutagenesis (viral)

**Tumor Suppressor Gene Inactivation:**
- Two-hit hypothesis (Knudson)
- LOH (loss of heterozygosity)
- Epigenetic silencing (methylation)
- Examples: TP53, RB1, APC, BRCA1/2

**Hallmarks of Cancer (Hanahan & Weinberg):**
1. Sustaining proliferative signaling
2. Evading growth suppressors
3. Resisting cell death
4. Enabling replicative immortality (telomerase)
5. Inducing angiogenesis (VEGF)
6. Activating invasion and metastasis
7. Deregulating cellular energetics (Warburg effect)
8. Avoiding immune destruction
9. Genome instability and mutation
10. Tumor-promoting inflammation`,
      keyTerms: [
        { term: 'cyclin-dependent kinase', definition: 'Enzymes that control cell cycle progression when bound to cyclins (CDKs)' },
        { term: 'p53', definition: 'Tumor suppressor protein that arrests cell cycle or induces apoptosis in response to DNA damage' },
        { term: 'two-hit hypothesis', definition: 'Both copies of a tumor suppressor gene must be inactivated for cancer to develop' },
        { term: 'angiogenesis', definition: 'Formation of new blood vessels; tumors induce this to obtain nutrients', pronunciation: 'an-jee-oh-JEN-eh-sis' },
        { term: 'Warburg effect', definition: 'Cancer cells preferentially use glycolysis even with oxygen present' },
      ],
      clinicalNotes: 'Understanding these mechanisms guides targeted therapy. For example, CDK4/6 inhibitors (palbociclib) are used in breast cancer. HER2 amplification is targeted with trastuzumab. BRCA mutations confer sensitivity to PARP inhibitors.',
    },
    4: {
      level: 4,
      summary: 'Cancer emerges through clonal evolution driven by genomic instability, with selection pressures from the tumor microenvironment shaping heterogeneous cell populations that acquire metastatic potential.',
      explanation: `**Genomic Instability:**

*Types:*
- Chromosomal instability (CIN): Aneuploidy, translocations
- Microsatellite instability (MSI): Defective mismatch repair
- CpG island methylator phenotype (CIMP)

*DNA Damage Response (DDR):*
- ATM/ATR kinases sense damage
- CHK1/CHK2 transmit signal
- p53 activates cell cycle arrest or apoptosis
- BRCA1/2 mediate homologous recombination repair
- DDR defects create vulnerability to PARP inhibitors (synthetic lethality)

**Signaling Pathway Alterations:**

*RAS-MAPK Pathway:*
- Growth factor → RTK → RAS → RAF → MEK → ERK
- RAS mutations: KRAS (colon, lung, pancreas), NRAS (melanoma)
- BRAF mutations: V600E in melanoma, colorectal

*PI3K-AKT-mTOR Pathway:*
- RTK → PI3K → PIP3 → AKT → mTOR
- PTEN loss (prostate, endometrial, glioblastoma)
- PIK3CA mutations (breast, endometrial)

*Wnt Pathway:*
- APC mutations initiate colorectal adenoma-carcinoma sequence
- Beta-catenin nuclear translocation

**Clonal Evolution:**
- Cancer as Darwinian evolution
- Driver vs passenger mutations
- Intratumor heterogeneity
- Subclonal architecture
- Therapy-induced selection

**Tumor Microenvironment:**
- Cancer-associated fibroblasts (CAFs)
- Tumor-associated macrophages (TAMs)
- Myeloid-derived suppressor cells (MDSCs)
- Regulatory T cells (Tregs)
- Extracellular matrix remodeling
- Hypoxia and acidosis

**Metastatic Cascade:**
1. Local invasion (EMT, matrix degradation)
2. Intravasation
3. Circulation (CTCs)
4. Extravasation
5. Micrometastasis formation
6. Colonization (rate-limiting step)

*Metastatic Tropism:*
- Seed and soil hypothesis (Paget)
- Chemokine gradients (CXCR4-CXCL12)
- Pre-metastatic niche formation`,
      keyTerms: [
        { term: 'clonal evolution', definition: 'Process by which cancer cells accumulate mutations and undergo selection, creating genetic diversity' },
        { term: 'synthetic lethality', definition: 'When deficiency in two genes is lethal but each alone is tolerated; basis for PARP inhibitor therapy' },
        { term: 'epithelial-mesenchymal transition', definition: 'Process where epithelial cells acquire mesenchymal properties, enabling invasion (EMT)' },
        { term: 'circulating tumor cells', definition: 'Cancer cells found in blood that have detached from primary tumor (CTCs)' },
        { term: 'tumor microenvironment', definition: 'Complex ecosystem of cells, vessels, matrix, and signals surrounding cancer cells' },
      ],
      clinicalNotes: 'Genomic profiling guides therapy: MSI-high tumors respond to immunotherapy; BRCA-mutant tumors to PARP inhibitors; HER2-amplified to anti-HER2 therapy. Liquid biopsy (ctDNA, CTCs) enables non-invasive monitoring of tumor evolution.',
    },
    5: {
      level: 5,
      summary: 'Cancer biology integrates genomics, epigenetics, metabolism, and immunology, with therapeutic implications for precision oncology, including biomarker-driven treatment selection and understanding resistance mechanisms.',
      explanation: `**Precision Oncology Framework:**

*Genomic Classification:*
- Tumor mutational burden (TMB)
- Microsatellite instability (MSI-H/dMMR)
- Homologous recombination deficiency (HRD)
- NTRK fusions (tissue-agnostic indication)
- Tumor-agnostic approvals: pembrolizumab for MSI-H, larotrectinib for NTRK

**Epigenetic Dysregulation:**
- DNA methylation: Hypermethylation of promoters, global hypomethylation
- Histone modifications: Writers, erasers, readers
- Chromatin remodeling: SWI/SNF complex mutations
- ncRNAs: miRNAs as oncogenes or tumor suppressors
- Epigenetic therapy: DNMT inhibitors, HDAC inhibitors

**Cancer Metabolism:**
- Warburg effect: Aerobic glycolysis
- Glutamine addiction
- Lipid synthesis upregulation
- One-carbon metabolism (folate)
- IDH mutations create oncometabolite 2-HG
- Metabolic vulnerabilities as therapeutic targets

**Cancer Immunology:**

*Immune Surveillance:*
- Cancer immunoediting: Elimination, equilibrium, escape
- Tumor antigens: TAAs, neoantigens, oncoviral antigens

*Immune Evasion Mechanisms:*
- PD-L1 upregulation
- MHC-I downregulation
- Immunosuppressive cytokines (TGF-beta, IL-10)
- Recruitment of Tregs, MDSCs
- Metabolic competition (arginine depletion)

**Resistance Mechanisms:**

*Primary Resistance:*
- Pre-existing resistance mutations
- Tumor heterogeneity
- Microenvironmental factors

*Acquired Resistance:*
- On-target mutations (EGFR T790M, C797S)
- Bypass signaling (MET amplification)
- Phenotypic plasticity (SCLC transformation)
- Lineage switching
- Drug efflux (MDR1/P-glycoprotein)

**Emerging Concepts:**

*Liquid Biopsy Applications:*
- ctDNA for detection, monitoring, resistance
- Minimal residual disease (MRD)
- Early cancer detection (MCED tests)

*Single-Cell Technologies:*
- Intratumor heterogeneity mapping
- Therapy-resistant subclones
- TME characterization

*Spatial Biology:*
- Spatial transcriptomics
- Multiplexed imaging
- Tertiary lymphoid structures

**Clinical Trial Design Evolution:**
- Basket trials (same mutation, different cancers)
- Umbrella trials (same cancer, different mutations)
- Platform trials (adaptive designs)
- N-of-1 studies`,
      keyTerms: [
        { term: 'tumor mutational burden', definition: 'Total number of mutations per megabase in tumor genome; predictor of immunotherapy response (TMB)' },
        { term: 'homologous recombination deficiency', definition: 'Inability to repair DNA double-strand breaks via HR; confers PARP inhibitor sensitivity (HRD)' },
        { term: 'ctDNA', definition: 'Cell-free tumor DNA in blood; enables non-invasive genomic profiling and monitoring' },
        { term: 'neoantigen', definition: 'Novel protein fragments arising from tumor mutations that can trigger immune response' },
        { term: 'minimal residual disease', definition: 'Small numbers of cancer cells remaining after treatment, detectable by sensitive assays (MRD)' },
      ],
      clinicalNotes: `**Board-Relevant Concepts:**
- MSI-H/dMMR: ~15% colorectal, Lynch syndrome. Responds to checkpoint inhibitors.
- TMB-H: Cutoff varies (≥10 mut/Mb for pembrolizumab). Correlates with neoantigen load.
- HRD: BRCA1/2, PALB2, RAD51 mutations. PARP inhibitor sensitive.
- Liquid biopsy: FDA-approved for EGFR mutations (lung), PIK3CA (breast), ESR1 monitoring.

**Resistance Management:**
- EGFR T790M: Osimertinib
- ALK resistance mutations: Next-gen ALK inhibitors
- Acquired ESR1 mutations: Switch to degraders (elacestrant)`,
    },
  },

  media: [
    {
      id: 'hallmarks-cancer-diagram',
      type: 'diagram',
      filename: 'hallmarks-of-cancer.svg',
      title: 'Hallmarks of Cancer',
      description: 'Visual representation of the 10 hallmarks of cancer',
    },
    {
      id: 'cell-cycle-diagram',
      type: 'diagram',
      filename: 'cell-cycle-regulation.svg',
      title: 'Cell Cycle and Checkpoints',
      description: 'Cell cycle phases with key regulatory proteins',
    },
  ],
  citations: [
    {
      id: 'hanahan-weinberg-2011',
      type: 'article',
      title: 'Hallmarks of Cancer: The Next Generation',
      authors: ['Hanahan D', 'Weinberg RA'],
      source: 'Cell',
      url: 'https://doi.org/10.1016/j.cell.2011.02.013',
    },
    {
      id: 'vogelstein-2013',
      type: 'article',
      title: 'Cancer Genome Landscapes',
      authors: ['Vogelstein B', 'Papadopoulos N', 'Velculescu VE', 'Zhou S', 'Diaz LA Jr', 'Kinzler KW'],
      source: 'Science',
      url: 'https://doi.org/10.1126/science.1235122',
    },
  ],
  crossReferences: [
    { targetId: 'oncology-cell-cycle', targetType: 'concept', relationship: 'child', label: 'Cell Cycle' },
    { targetId: 'oncology-mutations', targetType: 'concept', relationship: 'child', label: 'Cancer Mutations' },
    { targetId: 'oncology-metastasis', targetType: 'concept', relationship: 'child', label: 'Metastasis' },
    { targetId: 'oncology-immunotherapy', targetType: 'topic', relationship: 'related', label: 'Immunotherapy' },
  ],
  tags: {
    systems: ['oncology'],
    topics: ['cancer-biology', 'pathophysiology', 'genetics', 'molecular-biology'],
    keywords: ['carcinogenesis', 'oncogenes', 'tumor suppressors', 'hallmarks', 'mutations'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'pathology'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export const cellCycleContent: EducationalContent = {
  id: 'oncology-cell-cycle',
  type: 'concept',
  name: 'Cell Cycle Regulation in Cancer',
  alternateNames: ['Cell division cycle', 'Mitotic cycle'],

  levels: {
    1: {
      level: 1,
      summary: 'The cell cycle is like a recipe that cells follow to make copies of themselves, with built-in checkpoints to make sure everything is correct.',
      explanation: `Every cell in your body that needs to divide follows a special set of steps called the cell cycle. It's like a recipe with four main steps:

**The Four Main Stages:**
1. **G1 (First Gap)**: The cell grows bigger and gets ready
2. **S (Synthesis)**: The cell copies all its DNA (like making a photocopy)
3. **G2 (Second Gap)**: The cell checks everything and prepares to divide
4. **M (Mitosis)**: The cell actually splits into two new cells

**Checkpoints - Quality Control:**
At certain points, the cell stops and checks:
- "Is my DNA damaged?"
- "Am I big enough to divide?"
- "Did I copy my DNA correctly?"

If something is wrong, the cell can:
- Stop and fix the problem
- Or destroy itself to protect the body

**What goes wrong in cancer:**
Cancer cells ignore these checkpoints and keep dividing even when they shouldn't. It's like a factory that keeps making products without quality control - the results are often defective.`,
      keyTerms: [
        { term: 'cell cycle', definition: 'The series of steps a cell goes through to divide into two cells' },
        { term: 'DNA', definition: 'The instruction manual inside cells that tells them how to work' },
        { term: 'mitosis', definition: 'The final step where one cell divides into two identical cells' },
        { term: 'checkpoint', definition: 'A quality control point where the cell checks for problems' },
      ],
      analogies: [
        'The cell cycle is like a factory assembly line with quality control checkpoints. Cancer happens when the quality control stops working.',
        'Checkpoints are like traffic lights - they tell cells when to go and when to stop. Cancer cells run red lights.',
      ],
    },
    2: {
      level: 2,
      summary: 'The cell cycle is controlled by cyclins and cyclin-dependent kinases, with checkpoints regulated by tumor suppressors like p53 and Rb that are commonly mutated in cancer.',
      explanation: `The cell cycle is precisely controlled by proteins that act like on/off switches.

**Key Regulatory Proteins:**

*Cyclins and CDKs:*
- **Cyclins**: Proteins that rise and fall at specific times
- **CDKs**: Enzymes that are activated when cyclins bind to them
- Cyclin-CDK complexes push the cell through each phase

*Major Cyclin-CDK Pairs:*
- Cyclin D-CDK4/6: G1 progression
- Cyclin E-CDK2: G1/S transition
- Cyclin A-CDK2: S phase
- Cyclin B-CDK1: G2/M transition

**Checkpoints:**

*G1/S Checkpoint (Restriction Point):*
- Key regulator: Retinoblastoma protein (Rb)
- Rb normally blocks E2F transcription factors
- CDK4/6 phosphorylates Rb → releases E2F → S phase genes activated

*G2/M Checkpoint:*
- Checks for DNA damage before mitosis
- ATM/ATR kinases detect damage
- p53 can halt the cycle or trigger cell death

*Spindle Checkpoint:*
- Ensures chromosomes attach correctly before separation

**p53 - The Guardian of the Genome:**
- Activated by DNA damage
- Can pause cell cycle for repair
- Can trigger programmed cell death (apoptosis)
- Mutated in >50% of human cancers`,
      keyTerms: [
        { term: 'cyclin', definition: 'Proteins that regulate cell cycle by activating CDKs at specific times' },
        { term: 'CDK', definition: 'Cyclin-dependent kinases; enzymes that drive cell cycle when activated by cyclins' },
        { term: 'Retinoblastoma protein', definition: 'Tumor suppressor that blocks cell cycle progression (Rb)' },
        { term: 'E2F', definition: 'Transcription factors that activate genes needed for DNA replication' },
        { term: 'restriction point', definition: 'Point in late G1 after which cells are committed to divide' },
      ],
    },
    3: {
      level: 3,
      summary: 'Cell cycle progression is driven by sequential activation of cyclin-CDK complexes, regulated by CDK inhibitors (INK4, CIP/KIP families) and checkpoints involving p53, Rb, and DNA damage response pathways.',
      explanation: `**Cyclin-CDK Regulation:**

*Activation:*
- Cyclin binding (regulatory subunit)
- CAK phosphorylation (activating)
- CDC25 phosphatase (removes inhibitory phosphates)

*Inhibition:*
- INK4 family (p16, p15, p18, p19): Specifically inhibit CDK4/6
- CIP/KIP family (p21, p27, p57): Inhibit multiple CDK complexes
- Wee1 kinase: Inhibitory phosphorylation

**Rb Pathway:**
- Hypophosphorylated Rb binds and inhibits E2F
- Cyclin D-CDK4/6 initiates Rb phosphorylation
- Cyclin E-CDK2 completes hyperphosphorylation
- Hyperphosphorylated Rb releases E2F
- E2F activates S-phase genes (including Cyclin E - positive feedback)

**p53 Pathway:**
- MDM2 normally ubiquitinates p53 for degradation
- DNA damage activates ATM/ATR → CHK1/CHK2
- MDM2 is inhibited, p53 stabilizes
- p53 transcriptional targets:
  - p21 (CDK inhibitor) → Cell cycle arrest
  - BAX, PUMA, NOXA → Apoptosis
  - DNA repair genes

**Common Alterations in Cancer:**

*Rb Pathway:*
- RB1 loss (retinoblastoma, osteosarcoma, SCLC)
- Cyclin D1 amplification (breast, lymphoma)
- CDK4 amplification (liposarcoma, glioblastoma)
- p16/CDKN2A deletion (many cancers)

*p53 Pathway:*
- TP53 mutations (>50% of cancers)
- MDM2 amplification (sarcomas)
- ARF deletion (overlaps CDKN2A locus)

**Therapeutic Targeting:**
- CDK4/6 inhibitors: Palbociclib, ribociclib, abemaciclib
- MDM2 inhibitors: In development
- Wee1 inhibitors: In development
- CHK1/2 inhibitors: In combination trials`,
      keyTerms: [
        { term: 'INK4 family', definition: 'CDK inhibitors (p16, p15, p18, p19) that specifically block CDK4/6' },
        { term: 'CIP/KIP family', definition: 'CDK inhibitors (p21, p27, p57) that broadly inhibit cyclin-CDK complexes' },
        { term: 'MDM2', definition: 'E3 ubiquitin ligase that targets p53 for degradation' },
        { term: 'ATM/ATR', definition: 'Kinases that sense DNA damage and activate checkpoint responses' },
      ],
      clinicalNotes: 'CDK4/6 inhibitors (palbociclib, ribociclib, abemaciclib) are standard of care in HR+/HER2- metastatic breast cancer. They work by preventing Rb phosphorylation. Rb-deficient tumors (SCLC) are resistant.',
    },
    4: {
      level: 4,
      summary: 'The cell cycle integrates proliferative signals, nutrient sensing, and genome integrity surveillance, with cancer representing dysregulation at multiple nodes, creating therapeutic vulnerabilities.',
      explanation: `**Integration of Signaling Pathways:**

*Growth Factor Signaling → Cell Cycle:*
- RTK → RAS → MAPK → Cyclin D transcription
- RTK → PI3K → AKT → GSK3β inhibition → Cyclin D stabilization
- Myc transcription → Cyclin D, CDK4, E2F targets

*Nutrient Sensing:*
- mTORC1 promotes translation of cyclins
- AMPK activation (low energy) blocks mTORC1, promotes p53
- p53 target TIGAR reduces glycolysis

**Replication Stress:**
- Oncogene-induced replication stress
- ATR-CHK1 pathway activation
- Vulnerability to ATR/CHK1/Wee1 inhibitors
- Synthetic lethality with p53 loss

**Spindle Assembly Checkpoint (SAC):**
- MAD2, BUB1, BUBR1 monitor kinetochore attachment
- Unattached kinetochores → MCC inhibits APC/C
- All attached → APC/C activates → Securin/Cyclin B degradation
- SAC dysfunction → Chromosome missegregation, CIN

**Cell Cycle and Apoptosis:**
- E2F can activate both proliferation and apoptosis genes
- ARF (from CDKN2A) senses hyperproliferative signals
- ARF inhibits MDM2 → Stabilizes p53
- Oncogene-induced senescence (OIS)

**Therapeutic Implications:**

*CDK4/6 Inhibition:*
- Causes G1 arrest in Rb-intact cells
- Promotes tumor immunity (SASP, antigen presentation)
- Resistance: Rb loss, Cyclin E amplification, CDK2 activation

*Targeting Replication Stress:*
- PARP inhibitors: Synthetic lethality in HR-deficient
- ATR inhibitors: Synthetic lethality with ATM loss
- Wee1 inhibitors: Synergy with chemotherapy, p53-mutant tumors

*Mitotic Inhibitors:*
- Taxanes: Stabilize microtubules
- Vinca alkaloids: Destabilize microtubules
- KSP/Eg5 inhibitors: In development`,
      keyTerms: [
        { term: 'replication stress', definition: 'Condition where DNA replication is impaired, causing checkpoint activation and genomic instability' },
        { term: 'spindle assembly checkpoint', definition: 'Surveillance mechanism ensuring proper chromosome attachment before anaphase (SAC)' },
        { term: 'oncogene-induced senescence', definition: 'Cell cycle arrest triggered by oncogene hyperactivation as tumor suppressive mechanism (OIS)' },
        { term: 'CIN', definition: 'Chromosomal instability; ongoing chromosome missegregation causing aneuploidy' },
      ],
      clinicalNotes: 'CDK4/6 inhibitor resistance mechanisms being studied: ESR1 mutations, RB1 loss, CCNE1 amplification. Sequencing after CDK4/6i: Fulvestrant + alpelisib (if PIK3CA+), everolimus, or chemotherapy.',
    },
    5: {
      level: 5,
      summary: 'Cell cycle dysregulation in cancer creates therapeutic windows through synthetic lethality and context-dependent vulnerabilities, with ongoing drug development targeting multiple cell cycle regulators.',
      explanation: `**Advanced Cell Cycle Therapeutics:**

*CDK4/6 Inhibitors - State of the Art:*
- HR+/HER2- breast cancer: All three approved (palbo, ribo, abema)
- Triplet combinations with endocrine therapy + targeted agents
- Adjuvant trials: monarchE (abemaciclib + ET for high-risk HR+)
- Other indications under investigation: liposarcoma (CDK4 amplified)

*CDK2 as Resistance Mechanism:*
- CCNE1 amplification bypasses CDK4/6 inhibition
- CDK2 inhibitors in development
- Potential for sequential CDK4/6 → CDK2 inhibition

*CDK7 Inhibitors:*
- CDK7 phosphorylates activating sites on CDKs
- Also part of TFIIH (transcription)
- SY-1365, samuraciclib in trials
- May overcome CDK4/6i resistance

*CDK9 Inhibitors:*
- CDK9 regulates transcription elongation
- Targets MYC-dependent cancers
- Dinaciclib, flavopiridol (historical)

**Synthetic Lethality Approaches:**

*Replication Stress Exploitation:*
- ATR inhibitors (ceralasertib, berzosertib) + chemotherapy
- ATM loss predicts ATR inhibitor sensitivity
- CHK1 inhibitors (prexasertib) + PARP inhibitors
- Wee1 inhibitor (adavosertib) + gemcitabine in TP53-mutant cancers

*Targeting p53-Mutant Cancers:*
- MDM2 inhibitors in TP53-WT tumors
- p53 reactivators (APR-246/eprenetapopt)
- Exploiting checkpoint deficiency with Wee1/CHK1 inhibitors

**Cell Cycle Biomarkers:**

*Predictive:*
- Rb status for CDK4/6 inhibitors
- CCNE1 amplification (resistance)
- Ki-67 (proliferation marker)

*Pharmacodynamic:*
- Rb phosphorylation
- Cell cycle gene expression signatures
- ctDNA dynamics

**Emerging Concepts:**

*Cell Cycle and Immunity:*
- CDK4/6 inhibition enhances antitumor immunity
- Mechanisms: SASP, antigen presentation, reduce Tregs
- Combinations with checkpoint inhibitors

*Circadian Regulation:*
- Cell cycle regulated by circadian clock
- Chrono-chemotherapy timing
- BMAL1/CLOCK influence on drug sensitivity

*Single-Cell Dynamics:*
- Cell cycle heterogeneity within tumors
- Drug-tolerant persister cells in specific phases
- Fractional kill dynamics`,
      keyTerms: [
        { term: 'CDK7', definition: 'CDK-activating kinase; also part of general transcription machinery (TFIIH)' },
        { term: 'chrono-chemotherapy', definition: 'Timing drug administration according to circadian rhythms to optimize efficacy/toxicity' },
        { term: 'drug-tolerant persister', definition: 'Cells that survive drug treatment in quiescent state without genetic resistance' },
        { term: 'SASP', definition: 'Senescence-associated secretory phenotype; cytokines secreted by senescent cells' },
      ],
      clinicalNotes: `**Current Practice:**
- CDK4/6i + aromatase inhibitor: Standard first-line HR+/HER2- MBC
- monarchE: 2 years adjuvant abemaciclib for high-risk HR+ (node+, high Ki-67)
- Biomarker testing: ESR1, PIK3CA for subsequent therapy selection

**Trial Designs:**
- EMBER: CDK4/6i after prior CDK4/6i
- PACE: Palbociclib + fulvestrant + avelumab
- Various ATR/CHK1/Wee1 inhibitor combinations in solid tumors`,
    },
  },

  media: [
    {
      id: 'cell-cycle-phases',
      type: 'diagram',
      filename: 'cell-cycle-phases.svg',
      title: 'Cell Cycle Phases and Regulation',
      description: 'Detailed diagram of cell cycle with cyclin-CDK complexes',
    },
  ],
  citations: [
    {
      id: 'schiavon-2020',
      type: 'article',
      title: 'CDK4/6 Inhibitors in Breast Cancer',
      authors: ['Schiavon G', 'Turner NC'],
      source: 'The Oncologist',
    },
  ],
  crossReferences: [
    { targetId: 'oncology-cancer-biology-overview', targetType: 'concept', relationship: 'parent', label: 'Cancer Biology' },
    { targetId: 'oncology-chemotherapy', targetType: 'topic', relationship: 'related', label: 'Chemotherapy' },
  ],
  tags: {
    systems: ['oncology'],
    topics: ['cell-cycle', 'cancer-biology', 'molecular-biology'],
    keywords: ['CDK', 'cyclin', 'p53', 'Rb', 'checkpoint'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'pathology'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export const mutationsContent: EducationalContent = {
  id: 'oncology-mutations',
  type: 'concept',
  name: 'Cancer Mutations',
  alternateNames: ['Driver mutations', 'Oncogenic mutations', 'Somatic mutations'],

  levels: {
    1: {
      level: 1,
      summary: 'Cancer mutations are changes in a cell\'s DNA that cause the cell to grow out of control.',
      explanation: `DNA is like an instruction manual inside every cell. Mutations are like typos in this manual.

**Types of Mutations:**
- **Inherited**: You were born with it (from your parents)
- **Acquired**: Happened during your lifetime (from sun, smoking, or random errors)

**Not All Mutations Cause Cancer:**
Most mutations don't do anything harmful. It takes several specific mutations in important genes for cancer to develop.

**What Causes Mutations:**
- Sunlight (UV radiation) - skin cancer
- Cigarette smoke - lung cancer
- Certain viruses - liver and cervical cancer
- Random errors when cells copy their DNA
- Inherited from parents (rare)

**Important Cancer Genes:**
- Some genes are like gas pedals (oncogenes) - mutations make them stuck on
- Some genes are like brakes (tumor suppressors) - mutations break them`,
      keyTerms: [
        { term: 'mutation', definition: 'A change in the DNA sequence' },
        { term: 'gene', definition: 'A section of DNA that provides instructions for making a protein' },
        { term: 'inherited mutation', definition: 'A mutation you were born with, passed from a parent' },
        { term: 'acquired mutation', definition: 'A mutation that happened during your lifetime' },
      ],
      analogies: [
        'DNA is like a recipe book, and mutations are typos that can change the recipe.',
        'Some mutations are like changing a recipe slightly (no big deal), but some change it completely (problems).',
      ],
    },
    2: {
      level: 2,
      summary: 'Cancer develops through the accumulation of driver mutations in oncogenes and tumor suppressor genes, while most mutations are harmless passengers.',
      explanation: `**Types of Cancer Mutations:**

*Driver Mutations:*
- Actually cause cancer progression
- Give cells a growth advantage
- Found in "cancer genes"
- Examples: KRAS, TP53, BRCA1

*Passenger Mutations:*
- Happen along the way but don't contribute
- Most mutations in a tumor are passengers
- Don't give growth advantage

**Oncogene Mutations (Gain of Function):**
- Proto-oncogenes normally promote growth
- Mutation makes them overactive
- Only ONE copy needs to be mutated
- Examples:
  - KRAS (colon, lung, pancreas)
  - BRAF (melanoma, colorectal)
  - HER2 amplification (breast)
  - MYC amplification (many cancers)

**Tumor Suppressor Mutations (Loss of Function):**
- Normally prevent cancer
- Both copies usually need to be inactivated
- "Two-hit hypothesis"
- Examples:
  - TP53 (most common - 50%+ of cancers)
  - RB (retinoblastoma)
  - BRCA1/2 (breast, ovarian)
  - APC (colon cancer)

**Hereditary Cancer Syndromes:**
- Born with one "hit" already
- Higher lifetime cancer risk
- Lynch syndrome (colon cancer)
- BRCA1/2 (breast/ovarian)
- Li-Fraumeni (TP53 - many cancers)`,
      keyTerms: [
        { term: 'driver mutation', definition: 'A mutation that causes cancer to develop or progress' },
        { term: 'passenger mutation', definition: 'A mutation that doesn\'t contribute to cancer growth' },
        { term: 'gain of function', definition: 'A mutation that makes a protein overactive or always on' },
        { term: 'loss of function', definition: 'A mutation that makes a protein stop working' },
        { term: 'two-hit hypothesis', definition: 'The idea that both copies of a tumor suppressor gene must be lost for cancer to develop' },
      ],
    },
    3: {
      level: 3,
      summary: 'Driver mutations occur in specific functional domains and pathways, with characteristic mutation spectra reflecting underlying mutagenic processes.',
      explanation: `**Types of Genetic Alterations:**

*Point Mutations:*
- Missense: Changes amino acid (G12D in KRAS)
- Nonsense: Creates stop codon (truncation)
- Splice site: Disrupts RNA processing

*Copy Number Alterations:*
- Amplification (HER2, MYC, EGFR)
- Deletion (RB1, CDKN2A, PTEN)
- Loss of heterozygosity (LOH)

*Structural Variants:*
- Translocations: BCR-ABL (CML), EML4-ALK (lung)
- Inversions: EML4-ALK
- Fusions: Create novel oncogenic proteins

*Epigenetic Alterations:*
- Promoter methylation (silencing)
- Histone modifications
- Chromatin remodeling gene mutations

**Mutational Signatures:**
Each mutagen leaves characteristic patterns:
- UV light: C→T at dipyrimidines (signature 7)
- Smoking: C→A transversions (signature 4)
- APOBEC: C→T and C→G (signatures 2, 13)
- HRD: Large deletions, signature 3
- MSI: Insertions/deletions at microsatellites

**Pathway Alterations:**
Different genes, same pathway:
- RTK-RAS-MAPK: EGFR, KRAS, BRAF, NF1
- PI3K-AKT: PIK3CA, PTEN, AKT1
- Cell cycle: RB1, CDKN2A, CDK4, CCND1
- DNA damage: TP53, ATM, BRCA1/2

**Clonal Evolution:**
- Early mutations: Present in all cells (clonal)
- Late mutations: Present in subclones
- Trunk vs branch mutations
- Implications for therapy resistance`,
      keyTerms: [
        { term: 'mutational signature', definition: 'Characteristic pattern of mutations reflecting specific mutagenic processes' },
        { term: 'amplification', definition: 'Increased copies of a gene, often on extrachromosomal DNA (ecDNA)' },
        { term: 'fusion gene', definition: 'Hybrid gene created by joining of two different genes through rearrangement' },
        { term: 'loss of heterozygosity', definition: 'Loss of one allele in a region, exposing recessive mutations (LOH)' },
      ],
      clinicalNotes: 'Mutation testing guides therapy: EGFR mutations (TKIs), ALK fusions (ALK inhibitors), BRAF V600E (BRAF/MEK inhibitors), BRCA1/2 (PARP inhibitors), MSI-H (checkpoint inhibitors).',
    },
    4: {
      level: 4,
      summary: 'Comprehensive genomic profiling reveals the mutational landscape, enabling precision oncology through actionable alterations and molecular tumor boards.',
      explanation: `**Genomic Profiling Approaches:**

*Next-Generation Sequencing (NGS):*
- Targeted panels (100-500 genes)
- Whole exome sequencing (WES)
- Whole genome sequencing (WGS)
- RNA sequencing (fusions, expression)

*Tissue vs Liquid Biopsy:*
- Tissue: Gold standard, tumor heterogeneity limitation
- Liquid (ctDNA): Non-invasive, temporal monitoring, spatial heterogeneity
- Concordance ~85% for targetable alterations

**Actionable Mutations by Cancer:**

*Lung (NSCLC):*
- EGFR (15-40%): Erlotinib, osimertinib
- ALK fusions (5%): Alectinib, lorlatinib
- ROS1 fusions (1-2%): Crizotinib, entrectinib
- KRAS G12C (13%): Sotorasib, adagrasib
- BRAF V600E (2%): Dabrafenib + trametinib
- RET fusions (1-2%): Selpercatinib, pralsetinib
- MET exon 14 (3%): Capmatinib, tepotinib
- NTRK fusions (<1%): Larotrectinib, entrectinib

*Breast:*
- HER2 amplification (15-20%): Trastuzumab, T-DXd
- PIK3CA (40% HR+): Alpelisib
- ESR1 (acquired): Elacestrant
- BRCA1/2 (5%): Olaparib, talazoparib

*Colorectal:*
- KRAS/NRAS WT: Anti-EGFR therapy eligible
- BRAF V600E (10%): Encorafenib + cetuximab
- HER2 amplification (3-5%): Trastuzumab + pertuzumab
- MSI-H (15%): Pembrolizumab

**Tumor-Agnostic Approvals:**
- MSI-H/dMMR: Pembrolizumab
- TMB-H (≥10 mut/Mb): Pembrolizumab
- NTRK fusions: Larotrectinib, entrectinib
- BRAF V600E: Dabrafenib + trametinib
- RET fusions: Selpercatinib

**Variant Interpretation:**
- Somatic vs germline
- Variant allele frequency (VAF)
- Clonality assessment
- Pathogenicity classification
- Therapy association databases (OncoKB, CIViC)`,
      keyTerms: [
        { term: 'variant allele frequency', definition: 'Proportion of sequencing reads containing the variant (VAF)' },
        { term: 'tumor-agnostic', definition: 'FDA approval based on molecular marker regardless of cancer type' },
        { term: 'ctDNA', definition: 'Circulating tumor DNA shed into blood; basis for liquid biopsy' },
        { term: 'molecular tumor board', definition: 'Multidisciplinary team interpreting genomic results for treatment decisions' },
      ],
      clinicalNotes: 'NCCN recommends broad molecular profiling for advanced NSCLC, metastatic breast cancer, colorectal cancer. Consider clinical trials for alterations without approved therapies. Germline testing indicated if BRCA, Lynch syndrome pathways affected.',
    },
    5: {
      level: 5,
      summary: 'The mutation landscape of cancer continues to evolve with new therapeutic targets, resistance mechanisms, and liquid biopsy applications enabling dynamic disease monitoring.',
      explanation: `**Emerging Therapeutic Targets:**

*Previously "Undruggable" Targets:*
- KRAS G12C: Sotorasib, adagrasib (covalent inhibitors)
- KRAS G12D: MRTX1133 in development
- KRAS G12V, other mutations: Pan-KRAS inhibitors
- KRAS degraders (PROTACs)
- SHP2 inhibitors (upstream)
- SOS1 inhibitors

*TP53:*
- Y220C mutation: PC14586 (p53 reactivator)
- Wild-type reactivation in TP53 mutant
- APR-246/eprenetapopt (rescues mutant p53)
- MDM2 inhibitors for TP53 WT tumors

*MYC:*
- Transcription factor - historically undruggable
- OMOMYC (protein)
- Indirect approaches: CDK7, BET inhibitors

**Resistance Mechanisms:**

*On-Target Resistance:*
- EGFR: T790M → Osimertinib; C797S emerging
- ALK: Sequential mutations through generations
- ESR1: Ligand-binding domain mutations

*Bypass Mechanisms:*
- MET amplification in EGFR-resistant
- HER2 amplification in HR+ breast
- Pathway switching

*Phenotypic Resistance:*
- SCLC transformation (EGFR lung)
- Neuroendocrine transformation
- Lineage plasticity
- EMT

**Liquid Biopsy Applications:**

*Clinical Uses:*
- Genotyping when tissue insufficient
- Monitoring response (ctDNA dynamics)
- Early detection of resistance (ESR1, EGFR C797S)
- MRD detection post-treatment

*Emerging Applications:*
- Multi-cancer early detection (MCED)
- Fragmentomics, methylation patterns
- Circulating tumor cells (CTC) analysis
- Serial monitoring for clonal evolution

**Technical Advances:**

*Single-Cell Sequencing:*
- Intratumor heterogeneity mapping
- Drug-resistant subclone identification
- TME characterization

*Spatial Transcriptomics:*
- Tumor-immune interface
- Resistance niche identification

*Functional Genomics:*
- CRISPR screens for synthetic lethality
- Drug combination identification
- Biomarker discovery`,
      keyTerms: [
        { term: 'PROTAC', definition: 'Proteolysis targeting chimera; bifunctional molecules inducing protein degradation' },
        { term: 'lineage plasticity', definition: 'Ability of cancer cells to change cellular identity, often as resistance mechanism' },
        { term: 'MRD', definition: 'Minimal residual disease; small amounts of cancer detectable by sensitive assays' },
        { term: 'fragmentomics', definition: 'Analysis of cfDNA fragment size patterns for cancer detection' },
      ],
      clinicalNotes: `**Current Practice:**
- NGS testing standard for advanced NSCLC, breast, colorectal, melanoma
- Consider germline testing if somatic BRCA/Lynch pathway mutations found
- Liquid biopsy: FDA-approved for EGFR (lung), PIK3CA (breast), ESR1 (breast)
- ctDNA clearance correlating with outcomes in multiple studies

**Clinical Trial Matching:**
- NCI MATCH, TAPUR, MyPathway for off-label targeted therapy
- Basket trials for rare alterations
- Consider molecular profiling early in disease course`,
    },
  },

  media: [
    {
      id: 'mutation-types',
      type: 'diagram',
      filename: 'mutation-types.svg',
      title: 'Types of Cancer Mutations',
      description: 'Visual guide to point mutations, CNAs, and fusions',
    },
  ],
  citations: [
    {
      id: 'bailey-2018',
      type: 'article',
      title: 'Comprehensive Characterization of Cancer Driver Genes and Mutations',
      authors: ['Bailey MH', 'et al.'],
      source: 'Cell',
    },
  ],
  crossReferences: [
    { targetId: 'oncology-cancer-biology-overview', targetType: 'concept', relationship: 'parent', label: 'Cancer Biology' },
    { targetId: 'oncology-targeted-therapy', targetType: 'topic', relationship: 'related', label: 'Targeted Therapy' },
  ],
  tags: {
    systems: ['oncology'],
    topics: ['mutations', 'genomics', 'precision-oncology'],
    keywords: ['driver mutations', 'oncogenes', 'tumor suppressors', 'NGS', 'ctDNA'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'pathology'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export const metastasisContent: EducationalContent = {
  id: 'oncology-metastasis',
  type: 'concept',
  name: 'Cancer Metastasis',
  alternateNames: ['Metastatic disease', 'Secondary cancer', 'Cancer spread'],

  levels: {
    1: {
      level: 1,
      summary: 'Metastasis is when cancer cells break away from where they started and travel to other parts of the body.',
      explanation: `Cancer can spread from where it first started (the primary tumor) to other parts of the body. This is called metastasis.

**How Cancer Spreads:**
1. Cancer cells break away from the original tumor
2. They travel through blood vessels or lymph vessels
3. They land in a new organ
4. They start growing there

**Why This Matters:**
- Cancer that has spread is more serious
- It's harder to treat
- The cancer is named for where it started (breast cancer that spreads to the bone is still breast cancer, not bone cancer)

**Common Places Cancer Spreads:**
- Bones
- Liver
- Lungs
- Brain

**Signs of Metastasis:**
- Pain in new areas
- Lumps under the skin or in lymph nodes
- Symptoms in the organ affected (cough if lungs, headache if brain)`,
      keyTerms: [
        { term: 'metastasis', definition: 'Cancer that has spread from where it started to another part of the body' },
        { term: 'primary tumor', definition: 'The original cancer where it first started growing' },
        { term: 'secondary tumor', definition: 'A tumor that grew from cancer cells that traveled from somewhere else' },
        { term: 'lymph nodes', definition: 'Small bean-shaped organs that filter fluid and can be early stops for spreading cancer' },
      ],
      analogies: [
        'Cancer metastasis is like dandelion seeds blowing in the wind - they can land far away and start growing in a new place.',
        'The blood and lymph systems are like highways that cancer cells can use to travel to distant organs.',
      ],
    },
    2: {
      level: 2,
      summary: 'Metastasis is a multi-step process where cancer cells invade, enter circulation, survive transport, exit at distant sites, and colonize new organs.',
      explanation: `**The Metastatic Cascade:**

1. **Local Invasion**
   - Cancer cells break through basement membrane
   - They invade surrounding tissue
   - They break down barriers using enzymes (MMPs)

2. **Intravasation**
   - Cancer cells enter blood vessels or lymphatics
   - They may be helped by surrounding cells

3. **Circulation**
   - Only a tiny fraction of cells survive
   - Must avoid immune cells
   - May form clusters for protection

4. **Extravasation**
   - Cancer cells exit blood vessels
   - They enter new tissue

5. **Colonization**
   - The hardest step
   - Must adapt to new environment
   - May lie dormant for years before growing

**Routes of Spread:**
- *Hematogenous* (blood): Most common for solid tumors
- *Lymphatic*: Often early spread, detected in lymph nodes
- *Direct extension*: Growing into nearby structures
- *Transcoelomic*: Across body cavities (peritoneal, pleural)

**Organ-Specific Patterns:**
- Breast → Bone, lung, liver, brain
- Lung → Brain, bone, liver, adrenal
- Colorectal → Liver (via portal vein), lung
- Prostate → Bone (often blastic)
- Melanoma → Anywhere (brain, lung, liver, skin)`,
      keyTerms: [
        { term: 'intravasation', definition: 'Cancer cells entering blood or lymph vessels' },
        { term: 'extravasation', definition: 'Cancer cells exiting blood vessels into new tissue' },
        { term: 'colonization', definition: 'When cancer cells successfully grow in a new organ' },
        { term: 'hematogenous spread', definition: 'Cancer spreading through the bloodstream' },
        { term: 'micrometastasis', definition: 'Small clusters of cancer cells at distant sites not yet detectable by imaging' },
      ],
    },
    3: {
      level: 3,
      summary: 'Metastasis involves epithelial-mesenchymal transition, tumor-stromal interactions, pre-metastatic niche formation, and organ-specific colonization mechanisms.',
      explanation: `**Epithelial-Mesenchymal Transition (EMT):**
- Epithelial cells lose cell-cell adhesion
- Gain migratory, invasive properties
- Downregulate E-cadherin
- Upregulate N-cadherin, vimentin, fibronectin
- Transcription factors: Snail, Slug, Twist, ZEB1/2
- Signaling: TGF-β, Wnt, Notch, hypoxia

**Invasion and Matrix Remodeling:**
- Matrix metalloproteinases (MMPs): Degrade ECM
- uPA system: Plasminogen activation
- Invadopodia: Actin-rich membrane protrusions
- Podoplanin, integrins

**Circulating Tumor Cells (CTCs):**
- Extremely rare: ~1-100 per mL blood
- Most die (shear stress, anoikis, immune attack)
- Clusters may be 50x more metastatic
- Can be captured for analysis (CellSearch)

**Pre-Metastatic Niche:**
- Primary tumor prepares distant sites before cells arrive
- Secreted factors: VEGF, LOX, exosomes
- Bone marrow-derived cells recruited
- ECM remodeling
- Immune suppression

**Organ Tropism:**
*Seed and Soil Hypothesis (Paget):*
- Metastatic cells (seed) require compatible microenvironment (soil)
- Chemokine gradients: CXCR4-CXCL12 axis
- Adhesion molecules: Selectins, integrins
- Growth factors in target organ

*Organ-Specific Mechanisms:*
- Bone: RANKL/OPG, osteoclast activation, vicious cycle
- Liver: Kupffer cells, sinusoidal fenestrations
- Lung: Leaky capillaries, inflammation
- Brain: Blood-brain barrier crossing, astrocyte interactions

**Metastatic Dormancy:**
- DTCs (disseminated tumor cells) may remain quiescent for years
- Mechanisms: Immune control, angiogenic dormancy, cellular quiescence
- Awakening: Inflammation, immune changes, microenvironment shifts`,
      keyTerms: [
        { term: 'EMT', definition: 'Epithelial-mesenchymal transition; cells gain invasive properties by losing epithelial characteristics' },
        { term: 'pre-metastatic niche', definition: 'Preparation of distant sites by primary tumor before metastatic cells arrive' },
        { term: 'anoikis', definition: 'Apoptosis triggered by loss of cell-matrix attachment' },
        { term: 'DTC', definition: 'Disseminated tumor cells; cancer cells at distant sites, may be dormant' },
      ],
      clinicalNotes: 'Understanding metastatic patterns guides surveillance (e.g., brain MRI in melanoma/lung cancer) and treatment (e.g., bone-targeted agents in bone metastases). Oligometastatic disease may be treated with local therapy.',
    },
    4: {
      level: 4,
      summary: 'Metastasis involves complex tumor-microenvironment crosstalk, clonal selection, and plasticity, with therapeutic implications for targeting the metastatic cascade.',
      explanation: `**Molecular Drivers of Metastasis:**

*Metastasis Genes:*
- Metastasis promoters: MMP-9, VEGF, CXCR4, LOX
- Metastasis suppressors: NM23, KiSS1, BRMS1, CDH1
- Site-specific: Bone (CTGF, IL-11), Lung (ANGPTL4)

*Signaling Pathways:*
- TGF-β: Dual role (tumor suppressor → promoter switch)
- Wnt/β-catenin: EMT, stemness
- Notch: EMT, angiogenesis
- Hippo (YAP/TAZ): Invasion, colonization

**Clonal Evolution and Metastasis:**

*Parallel vs Linear Progression:*
- Linear: Metastases arise from advanced primary
- Parallel: Early dissemination, independent evolution
- Evidence supports both models depending on cancer

*Metastatic Seeding Patterns:*
- Primary-to-metastasis
- Metastasis-to-metastasis
- Metastasis-to-primary (self-seeding)
- Polyclonal seeding

**Tumor Microenvironment Interactions:**

*Stromal Support:*
- CAFs: ECM remodeling, growth factors
- TAMs: M2 polarization, immunosuppression
- Neutrophils: NET formation aids metastasis
- Platelets: Shield CTCs, promote extravasation

*Metabolic Adaptation:*
- Organ-specific nutrient utilization
- Lipid metabolism in lymph node metastasis
- Pyruvate in lung metastasis
- Glutamine in liver

**Therapeutic Targeting:**

*Approved Approaches:*
- Bone metastases: Denosumab (RANKL), bisphosphonates
- CNS: Blood-brain barrier penetrant TKIs

*Investigational Strategies:*
- EMT inhibitors
- Anti-angiogenics (adjuvant: mixed results)
- Integrin inhibitors
- MET inhibitors
- Immunotherapy (alter pre-metastatic niche)

**Oligometastatic Disease:**
- Limited number of metastases (typically ≤5)
- Potential for cure with local therapy
- SABR/SRS, metastasectomy
- Selection: Prolonged disease-free interval, controlled primary`,
      keyTerms: [
        { term: 'oligometastatic disease', definition: 'Limited metastatic spread, potentially curable with aggressive local treatment' },
        { term: 'metastasis suppressor gene', definition: 'Gene that specifically inhibits metastasis without affecting primary tumor growth' },
        { term: 'self-seeding', definition: 'Process by which CTCs return to and enhance the primary tumor' },
        { term: 'SABR', definition: 'Stereotactic ablative radiotherapy; high-dose focused radiation for limited metastases' },
      ],
      clinicalNotes: 'SABR-COMET trial showed survival benefit for oligometastatic disease. Consolidative local therapy being studied in multiple settings. Consider multidisciplinary discussion for oligometastatic presentation.',
    },
    5: {
      level: 5,
      summary: 'Advanced understanding of metastatic biology enables novel therapeutic strategies including dormancy modulation, niche targeting, and prevention of metastatic outgrowth.',
      explanation: `**Metastatic Dormancy and Recurrence:**

*Dormancy Mechanisms:*
- Cellular dormancy (quiescence): G0 arrest
- Angiogenic dormancy: Micrometastasis limited by blood supply
- Immune-mediated dormancy: T cell-mediated control

*Niche Factors:*
- Bone: Osteoblastic niche, similar to HSC niche
- Brain: Perivascular niche, astrocyte interactions
- TGF-β2, BMP7 induce quiescence

*Awakening Triggers:*
- Inflammation (surgery, infection)
- Age-related immune decline
- Microenvironment changes
- NET formation

**Emerging Therapeutic Concepts:**

*Targeting Dormancy:*
- Prevent awakening (anti-inflammatory)
- Maintain dormancy (bisphosphonates, TGF-β)
- Kill dormant cells (difficult - drug resistance)

*Pre-Metastatic Niche Disruption:*
- Exosome inhibition
- LOX inhibitors
- Anti-angiogenics in adjuvant setting

*Immune-Mediated Prevention:*
- Checkpoint inhibitors adjuvant/neoadjuvant
- Cancer vaccines
- NK cell enhancement

**Liquid Biopsy for Metastasis:**

*CTC Applications:*
- Prognostic (CellSearch)
- Real-time genotyping
- CTC clusters (worse prognosis)

*ctDNA for Detection:*
- MRD detection post-surgery
- Surveillance for recurrence
- Lead time of 6-12 months over imaging

**Organotropism Research:**

*Brain Metastasis:*
- BBB-penetrant therapies: Tucatinib, osimertinib
- Brain metastasis-specific adaptations
- Astrocyte-derived survival signals
- Serpins for BBB protection

*Bone Metastasis:*
- Osteolytic vs osteoblastic
- Vicious cycle: Tumor → osteoclast → growth factors → tumor
- RANKL as therapeutic target
- Radium-223 for prostate

**Clinical Implications:**

*Adjuvant Therapy Rationale:*
- Target micrometastases
- Prevent colonization
- Chemotherapy, endocrine, targeted, immune

*Metastatic Disease Management:*
- Systemic therapy mainstay
- Local therapy for symptoms or oligometastatic
- Maintenance strategies
- Serial biopsy/liquid biopsy for evolution`,
      keyTerms: [
        { term: 'tumor dormancy', definition: 'State where cancer cells persist but do not actively grow, potentially for years' },
        { term: 'vicious cycle', definition: 'Positive feedback loop in bone metastasis between tumor cells and osteoclasts' },
        { term: 'NET', definition: 'Neutrophil extracellular traps; web-like DNA structures that can promote metastasis' },
        { term: 'organotropism', definition: 'Preferential metastasis to specific organs' },
      ],
      clinicalNotes: `**Clinical Practice Points:**
- Stage IV treatment is typically palliative, but cure possible in oligometastatic
- Multimodality therapy for oligometastatic: SABR, surgery, systemic
- Brain metastases: Consider local therapy (SRS/surgery) + systemic
- Bone metastases: Bone-modifying agents reduce skeletal events
- ctDNA monitoring emerging for recurrence detection

**Active Research Areas:**
- SABR for multiple tumor types (NRG-LU002, etc.)
- Adjuvant immunotherapy to prevent metastasis
- Targeting dormancy
- Liquid biopsy for MRD`,
    },
  },

  media: [
    {
      id: 'metastatic-cascade',
      type: 'diagram',
      filename: 'metastatic-cascade.svg',
      title: 'The Metastatic Cascade',
      description: 'Steps from invasion to colonization',
    },
  ],
  citations: [
    {
      id: 'massague-2016',
      type: 'article',
      title: 'Metastasis, Metastatic Cells, and Metastasis-like States',
      authors: ['Massagué J', 'Obenauf AC'],
      source: 'Cancer Cell',
    },
  ],
  crossReferences: [
    { targetId: 'oncology-cancer-biology-overview', targetType: 'concept', relationship: 'parent', label: 'Cancer Biology' },
    { targetId: 'oncology-staging', targetType: 'topic', relationship: 'related', label: 'Cancer Staging' },
  ],
  tags: {
    systems: ['oncology'],
    topics: ['metastasis', 'cancer-biology', 'prognosis'],
    keywords: ['EMT', 'dormancy', 'CTC', 'invasion', 'colonization'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'pathology'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};
