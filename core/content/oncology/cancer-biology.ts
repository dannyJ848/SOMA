import { EducationalContent } from '../types';

/**
 * Cancer Biology - Cell Cycle, Mutations, Tumor Suppressors & Oncogenes
 *
 * Comprehensive educational content covering the fundamental biology of cancer,
 * from basic cell growth concepts to advanced molecular oncology topics including
 * liquid biopsy, single-cell genomics, and synthetic lethality.
 */

export const cellCycleAndCancer: EducationalContent = {
  id: 'cell-cycle-and-cancer',
  type: 'concept',
  name: 'Cell Cycle and Cancer',
  nameEs: 'Ciclo Celular y Cáncer',
  alternateNames: ['Cell Division and Cancer', 'Mitotic Cycle in Oncology'],
  levels: {
    1: {
      level: 1,
      summary: 'Cells that won\'t stop growing cause cancer.',
      explanation:
        'Think of your body like a city where old buildings get torn down and new ones are built on a schedule. ' +
        'Each cell in your body follows a growth plan: it grows, copies its instructions (DNA), and splits into two new cells. ' +
        'Normally, a cell knows when to stop growing — like a traffic light turning red. ' +
        'Cancer happens when the traffic lights break and cells keep going through every red light, growing and dividing without stopping. ' +
        'These out-of-control cells pile up and form lumps called tumors.',
      keyTerms: [
        { term: 'cell cycle', definition: 'The step-by-step process a cell follows to grow and divide into two cells' },
        { term: 'DNA', definition: 'The instruction manual inside every cell that tells it what to do' },
        { term: 'tumor', definition: 'A lump of cells that have grown out of control' },
        { term: 'division', definition: 'When one cell splits into two new cells' },
      ],
      analogies: [
        'The cell cycle is like a factory assembly line with quality-control checkpoints — cancer is what happens when the inspectors stop doing their job.',
        'Normal cells are like cars that obey traffic signals; cancer cells run every red light.',
      ],
      patientCounselingPoints: [
        'Cancer is not caused by something you did wrong — it starts with changes inside cells.',
        'Not all tumors are cancer. Some lumps are benign, meaning they do not spread.',
      ],
      clinicalNotes: '',
    },
    2: {
      level: 2,
      summary: 'Cancer results from loss of normal cell cycle regulation, allowing uncontrolled proliferation.',
      explanation:
        'The cell cycle has four main phases: G1 (growth), S (DNA synthesis), G2 (preparation), and M (mitosis). ' +
        'Between these phases are checkpoints where the cell decides whether to proceed. ' +
        'Key checkpoint proteins include cyclins and cyclin-dependent kinases (CDKs). ' +
        'Mutations can be caused by chemicals (carcinogens), radiation, viruses, or inherited genetic changes. ' +
        'When mutations disable checkpoints, cells divide uncontrollably. ' +
        'Benign tumors stay in one place and are usually not dangerous; malignant tumors (cancers) can invade nearby tissue and spread (metastasize) through blood or lymph.',
      keyTerms: [
        { term: 'G1 phase', definition: 'First growth phase where the cell increases in size' },
        { term: 'S phase', definition: 'Synthesis phase where DNA is copied' },
        { term: 'G2 phase', definition: 'Second growth phase preparing for division' },
        { term: 'M phase (mitosis)', definition: 'Phase where the cell physically divides into two' },
        { term: 'checkpoint', definition: 'A control point that verifies the cell is ready for the next phase' },
        { term: 'cyclin', definition: 'Protein that rises and falls during the cell cycle to drive progression' },
        { term: 'CDK', definition: 'Cyclin-dependent kinase — enzyme activated by cyclins to push the cycle forward' },
        { term: 'carcinogen', definition: 'A substance capable of causing cancer by damaging DNA' },
        { term: 'benign', definition: 'A tumor that does not invade or spread' },
        { term: 'malignant', definition: 'A tumor that can invade tissues and metastasize' },
        { term: 'metastasis', definition: 'The spread of cancer cells to distant parts of the body' },
      ],
      examples: [
        'UV light from the sun can cause DNA damage leading to skin cancer (melanoma).',
        'HPV (human papillomavirus) can cause cervical cancer by disrupting cell cycle regulators.',
      ],
      clinicalNotes:
        'Benign tumors are typically well-circumscribed, encapsulated, and slow-growing. Malignant tumors show invasion, irregular borders, and may present with weight loss, fatigue, or site-specific symptoms.',
    },
    3: {
      level: 3,
      summary: 'The hallmarks of cancer describe acquired capabilities enabling tumor growth, including sustained proliferative signaling, evasion of growth suppressors, and resistance to apoptosis.',
      explanation:
        'Hanahan and Weinberg (2000, updated 2011) defined the hallmarks of cancer:\n\n' +
        '1. **Sustaining proliferative signaling** — Oncogenes such as RAS, MYC, and HER2/neu drive constant growth signals.\n' +
        '2. **Evading growth suppressors** — Tumor suppressors like p53 (TP53), retinoblastoma (RB1), and BRCA1/2 normally halt the cycle; their loss removes brakes.\n' +
        '3. **Resisting cell death** — Overexpression of BCL-2 blocks apoptosis.\n' +
        '4. **Enabling replicative immortality** — Telomerase (hTERT) activation prevents telomere shortening.\n' +
        '5. **Inducing angiogenesis** — VEGF signaling recruits new blood vessels to feed the tumor.\n' +
        '6. **Activating invasion and metastasis** — Loss of E-cadherin and gain of matrix metalloproteinases (MMPs) enable spread.\n\n' +
        'Oncogenes act as gain-of-function (accelerator stuck on); tumor suppressors act as loss-of-function (brakes cut). ' +
        'The RAS-RAF-MEK-ERK pathway is one of the most commonly mutated signaling cascades in cancer. ' +
        'MYC amplification drives transcription of genes needed for rapid growth. ' +
        'p53 is the "guardian of the genome," inducing cell cycle arrest or apoptosis in response to DNA damage. ' +
        'RB controls the G1/S checkpoint by sequestering E2F transcription factors. ' +
        'BRCA1 and BRCA2 are essential for homologous recombination DNA repair.',
      keyTerms: [
        { term: 'hallmarks of cancer', definition: 'Six (later ten) biological capabilities acquired during tumor development, defined by Hanahan & Weinberg' },
        { term: 'RAS', definition: 'GTPase oncogene family (KRAS, NRAS, HRAS) mutated in ~30% of cancers' },
        { term: 'MYC', definition: 'Transcription factor oncogene driving proliferation, often amplified' },
        { term: 'HER2/neu (ERBB2)', definition: 'Receptor tyrosine kinase oncogene amplified in ~20% of breast cancers' },
        { term: 'p53 (TP53)', definition: 'Tumor suppressor — "guardian of the genome" — mutated in >50% of cancers' },
        { term: 'RB1', definition: 'Retinoblastoma protein controlling G1/S checkpoint' },
        { term: 'BRCA1/BRCA2', definition: 'Tumor suppressors essential for homologous recombination DNA repair' },
        { term: 'BCL-2', definition: 'Anti-apoptotic protein; overexpression blocks programmed cell death' },
        { term: 'telomerase', definition: 'Enzyme that maintains telomere length, active in ~90% of cancers' },
        { term: 'VEGF', definition: 'Vascular endothelial growth factor — drives angiogenesis' },
        { term: 'E-cadherin', definition: 'Cell adhesion molecule; loss promotes invasion' },
        { term: 'apoptosis', definition: 'Programmed cell death — an intrinsic tumor suppressor mechanism' },
      ],
      examples: [
        'KRAS G12D mutation in pancreatic cancer constitutively activates growth signaling.',
        'Loss of both RB1 alleles causes retinoblastoma — the "two-hit hypothesis" (Knudson).',
        'BCR-ABL fusion oncogene in chronic myelogenous leukemia is targeted by imatinib.',
      ],
      clinicalNotes:
        'HER2 amplification is tested by IHC and FISH; HER2+ breast cancer responds to trastuzumab. ' +
        'BRCA1/2 germline mutations increase lifetime breast cancer risk to 60–70% and ovarian cancer risk to 15–40%. ' +
        'KRAS mutations predict resistance to anti-EGFR monoclonal antibodies (cetuximab, panitumumab) in colorectal cancer.',
    },
    4: {
      level: 4,
      summary: 'Cancer is an evolutionary process shaped by epigenetics, the tumor microenvironment, immune evasion, angiogenesis, and cancer stem cell dynamics.',
      explanation:
        '**Epigenetic Dysregulation**\n' +
        'Beyond mutations, cancers acquire heritable changes in gene expression without altering DNA sequence. ' +
        'Promoter hypermethylation silences tumor suppressors (e.g., MLH1 in colorectal cancer, MGMT in glioblastoma). ' +
        'Histone modifications (acetylation, methylation) alter chromatin accessibility. ' +
        'EZH2 gain-of-function mutations increase H3K27 trimethylation, silencing differentiation genes in lymphoma.\n\n' +
        '**Tumor Microenvironment (TME)**\n' +
        'The TME includes cancer-associated fibroblasts (CAFs), tumor-associated macrophages (TAMs), ' +
        'regulatory T cells (Tregs), myeloid-derived suppressor cells (MDSCs), extracellular matrix, and vasculature. ' +
        'TAMs often adopt an M2-like immunosuppressive phenotype. CAFs secrete growth factors (HGF, TGF-β) and remodel the ECM.\n\n' +
        '**Immune Evasion**\n' +
        'Tumors escape immune surveillance through PD-L1 upregulation (binding PD-1 on T cells), ' +
        'MHC class I downregulation, secretion of immunosuppressive cytokines (IL-10, TGF-β), ' +
        'and recruitment of Tregs and MDSCs. The cancer-immunity cycle (Chen & Mellman) describes sequential steps from antigen release to T-cell killing.\n\n' +
        '**Angiogenesis**\n' +
        'VEGF-A binds VEGFR-2 to stimulate endothelial proliferation. HIF-1α accumulates under hypoxia and transcriptionally activates VEGF. ' +
        'Tumor vasculature is abnormal — leaky, tortuous, and poorly organized — contributing to hypoxia and drug delivery challenges.\n\n' +
        '**Cancer Stem Cells (CSCs)**\n' +
        'CSCs possess self-renewal capacity, express markers such as CD44+/CD24- (breast) or LGR5+ (colorectal), ' +
        'and are more resistant to chemotherapy and radiation. They may drive tumor initiation, recurrence, and metastasis.\n\n' +
        '**Clonal Evolution**\n' +
        'Tumors are polyclonal populations undergoing Darwinian selection. Therapy exerts selective pressure, ' +
        'enriching resistant subclones. Branched evolution (rather than linear) is the norm, ' +
        'as shown by multi-region sequencing studies (TRACERx).',
      keyTerms: [
        { term: 'epigenetics', definition: 'Heritable changes in gene expression not involving DNA sequence alterations (methylation, histone modification)' },
        { term: 'promoter hypermethylation', definition: 'Addition of methyl groups to CpG islands silencing gene expression' },
        { term: 'tumor microenvironment', definition: 'The complex ecosystem of non-cancer cells, ECM, and signaling molecules surrounding a tumor' },
        { term: 'cancer-associated fibroblasts (CAFs)', definition: 'Stromal cells that promote tumor growth and ECM remodeling' },
        { term: 'tumor-associated macrophages (TAMs)', definition: 'Macrophages in the TME, often immunosuppressive (M2-polarized)' },
        { term: 'PD-L1/PD-1 axis', definition: 'Immune checkpoint pathway; PD-L1 on tumor binds PD-1 on T cells to suppress anti-tumor immunity' },
        { term: 'HIF-1α', definition: 'Hypoxia-inducible factor driving VEGF expression under low oxygen' },
        { term: 'cancer stem cells', definition: 'Self-renewing subpopulation hypothesized to drive tumor initiation and resistance' },
        { term: 'clonal evolution', definition: 'Darwinian selection among genetically diverse tumor subclones' },
        { term: 'MDSCs', definition: 'Myeloid-derived suppressor cells that inhibit T-cell function in the TME' },
        { term: 'MGMT methylation', definition: 'Epigenetic silencing of DNA repair gene predicting temozolomide response in glioblastoma' },
        { term: 'EZH2', definition: 'Histone methyltransferase; gain-of-function mutations promote oncogenesis in lymphoma' },
      ],
      examples: [
        'MGMT promoter methylation in glioblastoma predicts benefit from temozolomide chemotherapy.',
        'Anti-VEGF therapy (bevacizumab) normalizes tumor vasculature but rarely cures as monotherapy.',
        'TRACERx study demonstrated branched clonal evolution in non-small cell lung cancer.',
      ],
      clinicalNotes:
        'TME composition influences immunotherapy response — "hot" tumors (T-cell infiltrated) respond better to checkpoint inhibitors. ' +
        'EZH2 inhibitor tazemetostat is FDA-approved for EZH2-mutant follicular lymphoma. ' +
        'Cancer stem cell–targeting strategies remain largely experimental but inform combination therapy rationale.',
    },
    5: {
      level: 5,
      summary: 'Cutting-edge oncology integrates liquid biopsy, ctDNA dynamics, single-cell genomics, synthetic lethality, CAR-T engineering, and bi-specific antibody platforms.',
      explanation:
        '**Liquid Biopsy & Circulating Tumor DNA (ctDNA)**\n' +
        'Cell-free DNA (cfDNA) shed by tumors into the bloodstream can be analyzed by next-generation sequencing (NGS). ' +
        'ctDNA fraction correlates with tumor burden and can detect minimal residual disease (MRD) post-surgery. ' +
        'Platforms include Guardant360, FoundationOne Liquid CDx, and Signatera (tumor-informed MRD). ' +
        'Methylation-based assays (GRAIL Galleri) enable multi-cancer early detection (MCED). ' +
        'Serial ctDNA monitoring detects molecular relapse months before imaging.\n\n' +
        '**Single-Cell Genomics**\n' +
        'scRNA-seq (10x Genomics Chromium) resolves intratumoral heterogeneity at single-cell resolution. ' +
        'Single-cell ATAC-seq reveals chromatin accessibility landscapes. ' +
        'Spatial transcriptomics (Visium, MERFISH, CosMx) maps gene expression in tissue context. ' +
        'These technologies have identified novel cell states including therapy-resistant persister cells and ' +
        'transitional cell phenotypes during epithelial-mesenchymal plasticity.\n\n' +
        '**Synthetic Lethality**\n' +
        'Two genes are synthetically lethal when loss of either alone is tolerable but simultaneous loss is lethal. ' +
        'PARP inhibitors (olaparib, niraparib, rucaparib, talazoparib) exploit synthetic lethality in BRCA1/2-deficient cancers — ' +
        'BRCA-deficient cells cannot perform homologous recombination; PARP inhibition blocks backup repair (base excision repair), causing replication fork collapse and cell death. ' +
        'PARP trapping (stabilizing PARP-DNA complexes) enhances cytotoxicity beyond catalytic inhibition. ' +
        'Beyond BRCA, HRD (homologous recombination deficiency) scores identify patients with "BRCAness." ' +
        'Emerging synthetic lethal targets: PRMT5 in MTAP-deleted cancers, WRN helicase in MSI-H cancers, POLQ in HR-deficient tumors.\n\n' +
        '**CAR-T Cell Engineering**\n' +
        'Chimeric antigen receptor T cells combine an extracellular scFv targeting domain, a hinge, transmembrane domain, ' +
        'costimulatory domain (CD28 or 4-1BB), and CD3ζ signaling domain. ' +
        'Second-generation CARs (single costimulatory) are standard; third-generation (dual costimulatory) and armored CARs (secreting cytokines) are in development. ' +
        'FDA-approved products: tisagenlecleucel (CD19, ALL/DLBCL), axicabtagene ciloleucel (CD19, DLBCL), ' +
        'lisocabtagene maraleucel (CD19, DLBCL), idecabtagene vicleucel (BCMA, myeloma), ciltacabtagene autoleucel (BCMA, myeloma). ' +
        'Key toxicities: cytokine release syndrome (CRS) and immune effector cell-associated neurotoxicity syndrome (ICANS). ' +
        'Solid tumor challenges: hostile TME, antigen heterogeneity, T-cell exhaustion, trafficking.\n\n' +
        '**Bi-Specific Antibodies**\n' +
        'Bi-specific T-cell engagers (BiTEs) simultaneously bind a tumor antigen and CD3 on T cells. ' +
        'Blinatumomab (CD19×CD3) is approved for B-ALL. ' +
        'Newer platforms include half-life-extended BiTEs, DuoBody, and CrossMab formats. ' +
        'Teclistamab (BCMA×CD3), mosunetuzumab (CD20×CD3), epcoritamab (CD20×CD3), glofitamab (CD20×CD3) represent expanding approvals. ' +
        'Bi-specifics targeting GPRC5D, FcRH5, and DLL3 are in advanced trials.',
      keyTerms: [
        { term: 'ctDNA', definition: 'Circulating tumor DNA — cell-free DNA fragments shed by tumor cells into the bloodstream' },
        { term: 'liquid biopsy', definition: 'Non-invasive blood-based test analyzing ctDNA, CTCs, or exosomes for tumor profiling' },
        { term: 'minimal residual disease (MRD)', definition: 'Small number of cancer cells remaining after treatment, detectable by sensitive molecular assays' },
        { term: 'scRNA-seq', definition: 'Single-cell RNA sequencing — transcriptomic profiling of individual cells' },
        { term: 'spatial transcriptomics', definition: 'Technology mapping gene expression to spatial location within tissue sections' },
        { term: 'synthetic lethality', definition: 'Genetic interaction where simultaneous loss of two genes is lethal while loss of either alone is viable' },
        { term: 'PARP inhibitors', definition: 'Drugs exploiting synthetic lethality in HR-deficient cancers by blocking base excision repair' },
        { term: 'PARP trapping', definition: 'Mechanism where PARP inhibitors stabilize PARP-DNA complexes, causing cytotoxic replication fork collapse' },
        { term: 'HRD score', definition: 'Homologous recombination deficiency score quantifying genomic scars indicating DNA repair defects' },
        { term: 'CAR-T cells', definition: 'Chimeric antigen receptor T cells — genetically engineered T cells targeting specific tumor antigens' },
        { term: 'CRS', definition: 'Cytokine release syndrome — systemic inflammatory response to CAR-T cell activation' },
        { term: 'ICANS', definition: 'Immune effector cell-associated neurotoxicity syndrome — neurologic toxicity of CAR-T therapy' },
        { term: 'BiTE', definition: 'Bi-specific T-cell engager — antibody construct bridging T cells to tumor cells' },
        { term: 'persister cells', definition: 'Drug-tolerant cancer cells surviving therapy through non-genetic mechanisms' },
      ],
      examples: [
        'Signatera ctDNA assay detects molecular relapse in colorectal cancer 8–12 months before CT imaging.',
        'Olaparib improved progression-free survival in BRCA-mutant ovarian cancer (SOLO-1 trial: 60% reduction in progression risk).',
        'Single-cell sequencing of melanoma revealed a neural crest–like state associated with resistance to BRAF inhibitors.',
      ],
      clinicalNotes:
        'ctDNA-guided adjuvant therapy trials (DYNAMIC in CRC, c-TRAK TN in TNBC) are changing the treatment paradigm from anatomy-based to molecular-based decision-making. ' +
        'PARP inhibitor maintenance is standard-of-care in BRCA-mutant ovarian, breast (olaparib — OlympiA), pancreatic (olaparib — POLO), and prostate (olaparib — PROfound) cancers. ' +
        'CAR-T therapy achieves 40–60% complete response rates in relapsed/refractory DLBCL but long-term durability remains ~30–40%. ' +
        'Secondary T-cell malignancies post-CAR-T are an emerging safety signal under FDA investigation.',
    },
  },
  media: [],
  citations: [
    {
      id: 'hanahan-weinberg-2000',
      type: 'article',
      title: 'The Hallmarks of Cancer',
      authors: ['Hanahan D', 'Weinberg RA'],
      source: 'Cell',
      page: '100(1):57-70',
      url: 'https://doi.org/10.1016/S0092-8674(00)81683-9',
    },
    {
      id: 'hanahan-weinberg-2011',
      type: 'article',
      title: 'Hallmarks of Cancer: The Next Generation',
      authors: ['Hanahan D', 'Weinberg RA'],
      source: 'Cell',
      page: '144(5):646-674',
      url: 'https://doi.org/10.1016/j.cell.2011.02.013',
    },
    {
      id: 'hanahan-2022',
      type: 'article',
      title: 'Hallmarks of Cancer: New Dimensions',
      authors: ['Hanahan D'],
      source: 'Cancer Discovery',
      page: '12(1):31-46',
      url: 'https://doi.org/10.1158/2159-8290.CD-21-1059',
    },
  ],
  crossReferences: [
    { targetId: 'cancer-treatment', targetType: 'topic', relationship: 'related', label: 'Cancer Treatment Modalities' },
    { targetId: 'cancer-screening', targetType: 'topic', relationship: 'related', label: 'Cancer Screening & Staging' },
    { targetId: 'what-is-cancer', targetType: 'concept', relationship: 'parent', label: 'What is Cancer' },
  ],
  tags: {
    systems: ['oncology', 'molecular-biology', 'genetics'],
    topics: ['cancer-biology', 'cell-cycle', 'oncogenes', 'tumor-suppressors', 'hallmarks-of-cancer'],
    keywords: ['RAS', 'MYC', 'HER2', 'p53', 'RB', 'BRCA', 'VEGF', 'PARP', 'CAR-T', 'liquid-biopsy', 'ctDNA'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
};

export const mutationsAndDNARepair: EducationalContent = {
  id: 'mutations-and-dna-repair',
  type: 'concept',
  name: 'Mutations and DNA Repair in Cancer',
  nameEs: 'Mutaciones y Reparación del ADN en el Cáncer',
  alternateNames: ['Genomic Instability', 'DNA Damage Response'],
  levels: {
    1: {
      level: 1,
      summary: 'Mistakes in DNA can cause cells to grow into cancer.',
      explanation:
        'Your DNA is like an instruction book with billions of letters. Every time a cell copies itself, the book gets recopied. ' +
        'Sometimes a spelling mistake (mutation) happens. Your body has built-in spell-checkers that find and fix most mistakes. ' +
        'But if the spell-checkers themselves break, mistakes pile up and can lead to cancer.',
      keyTerms: [
        { term: 'mutation', definition: 'A change or mistake in the DNA instructions' },
        { term: 'DNA repair', definition: 'The body\'s built-in system for fixing DNA mistakes' },
        { term: 'gene', definition: 'A section of DNA that contains instructions for one specific job' },
      ],
      analogies: [
        'DNA repair is like spell-check on your phone — when it stops working, errors pile up quickly.',
      ],
      patientCounselingPoints: [
        'Some mutations are inherited from parents; others happen during your lifetime.',
        'Most mutations are harmless — only specific changes in specific genes lead to cancer.',
      ],
      clinicalNotes: '',
    },
    2: {
      level: 2,
      summary: 'Mutations in DNA can be point mutations, insertions, deletions, or chromosomal rearrangements, and defective DNA repair accelerates cancer development.',
      explanation:
        'Types of mutations include:\n' +
        '- **Point mutations**: A single base change (e.g., A→T). Can be silent, missense, or nonsense.\n' +
        '- **Insertions/deletions (indels)**: Adding or removing bases, which may cause frameshifts.\n' +
        '- **Chromosomal rearrangements**: Translocations, inversions, amplifications, or deletions of large DNA segments.\n\n' +
        'DNA repair mechanisms include mismatch repair (MMR), base excision repair (BER), nucleotide excision repair (NER), and double-strand break repair. ' +
        'When these systems fail, the mutation rate increases dramatically (mutator phenotype). ' +
        'Mutations can be somatic (acquired in one cell during life) or germline (inherited and present in every cell).',
      keyTerms: [
        { term: 'point mutation', definition: 'Change of a single DNA base' },
        { term: 'frameshift mutation', definition: 'Insertion or deletion that shifts the reading frame of the gene' },
        { term: 'translocation', definition: 'A piece of one chromosome breaks off and attaches to another' },
        { term: 'mismatch repair (MMR)', definition: 'System that fixes base-pairing errors made during DNA replication' },
        { term: 'somatic mutation', definition: 'Mutation acquired in a body cell during a person\'s lifetime' },
        { term: 'germline mutation', definition: 'Mutation inherited from a parent, present in every cell' },
      ],
      examples: [
        'The Philadelphia chromosome (t(9;22) translocation) creates BCR-ABL and causes chronic myelogenous leukemia.',
        'Lynch syndrome is caused by inherited defects in mismatch repair genes (MLH1, MSH2, MSH6, PMS2).',
      ],
      clinicalNotes:
        'Family history of cancer at young ages or multiple cancer types suggests a germline mutation. Genetic counseling should be offered.',
    },
    3: {
      level: 3,
      summary: 'Driver mutations activate oncogenes or inactivate tumor suppressors through specific molecular mechanisms; genomic instability is a hallmark enabling feature.',
      explanation:
        'Cancer genomes harbor hundreds to thousands of mutations, but only a subset are **drivers** that confer selective growth advantage; the rest are **passengers**. ' +
        'Oncogene activation mechanisms include point mutation (BRAF V600E), gene amplification (HER2, MYC), and chromosomal translocation (BCR-ABL, EML4-ALK). ' +
        'Tumor suppressor inactivation follows Knudson\'s two-hit hypothesis: both alleles must be lost (mutation + loss of heterozygosity, or biallelic mutation). ' +
        'Genomic instability — either chromosomal instability (CIN) or microsatellite instability (MSI) — accelerates mutation accumulation.\n\n' +
        'Key DNA repair pathways in cancer:\n' +
        '- **Mismatch repair (MMR)**: Defects cause MSI-high phenotype (Lynch syndrome, sporadic CRC via MLH1 methylation).\n' +
        '- **Homologous recombination (HR)**: BRCA1/2 deficiency leads to HRD, targetable by PARP inhibitors.\n' +
        '- **Nucleotide excision repair (NER)**: Defects cause xeroderma pigmentosum, extreme UV sensitivity.\n' +
        '- **Base excision repair (BER)**: MUTYH biallelic mutations cause MUTYH-associated polyposis.',
      keyTerms: [
        { term: 'driver mutation', definition: 'Mutation conferring selective growth advantage to a cancer cell' },
        { term: 'passenger mutation', definition: 'Mutation present in cancer cells but not driving growth' },
        { term: 'two-hit hypothesis', definition: 'Knudson model — both alleles of a tumor suppressor must be inactivated for loss of function' },
        { term: 'loss of heterozygosity (LOH)', definition: 'Loss of the remaining normal allele of a tumor suppressor' },
        { term: 'microsatellite instability (MSI)', definition: 'Accumulation of errors in short repetitive DNA sequences due to defective MMR' },
        { term: 'chromosomal instability (CIN)', definition: 'Abnormal rates of chromosome gain or loss during cell division' },
        { term: 'homologous recombination', definition: 'Error-free DNA double-strand break repair using the sister chromatid as a template' },
        { term: 'BRAF V600E', definition: 'Activating point mutation in BRAF kinase — common in melanoma, CRC, thyroid, and hairy cell leukemia' },
      ],
      examples: [
        'MSI-high colorectal cancers respond well to pembrolizumab (anti-PD-1) due to high neoantigen load.',
        'BRAF V600E in melanoma is targeted by vemurafenib and dabrafenib.',
        'HER2 amplification in breast cancer is detected by FISH (fluorescence in situ hybridization).',
      ],
      clinicalNotes:
        'All metastatic colorectal cancers should be tested for MSI/MMR status and RAS/BRAF mutations. ' +
        'MSI-H/dMMR status is FDA-approved as a tissue-agnostic biomarker for pembrolizumab (KEYNOTE-158). ' +
        'Tumor mutational burden (TMB) ≥10 mut/Mb is an additional tissue-agnostic biomarker for immunotherapy.',
    },
    4: {
      level: 4,
      summary: 'Mutational signatures, chromothripsis, kataegis, and epigenomic alterations reveal the mechanisms of DNA damage and inform targeted therapeutic strategies.',
      explanation:
        '**Mutational Signatures**\n' +
        'The COSMIC database catalogs >100 single-base substitution (SBS) signatures reflecting mutational processes:\n' +
        '- SBS1: Deamination of methylcytosine (age-related, clock-like)\n' +
        '- SBS2/13: APOBEC cytidine deaminase activity\n' +
        '- SBS4: Tobacco carcinogens\n' +
        '- SBS6/15/20/26: Mismatch repair deficiency\n' +
        '- SBS3: Homologous recombination deficiency (BRCA)\n' +
        '- SBS7a/b: UV light exposure\n' +
        '- SBS22: Aristolochic acid\n\n' +
        '**Catastrophic Genome Events**\n' +
        'Chromothripsis involves shattering of a chromosome followed by random reassembly, generating multiple rearrangements in a single event. ' +
        'Kataegis is localized hypermutation driven by APOBEC enzymes. ' +
        'Chromoplexy involves chained translocations occurring simultaneously.\n\n' +
        '**Epigenomic Landscape**\n' +
        'CpG island methylator phenotype (CIMP) defines a subset of CRC with widespread promoter methylation. ' +
        'SWI/SNF chromatin remodeling complex mutations (SMARCB1, SMARCA4, ARID1A) occur in ~20% of cancers. ' +
        'IDH1/2 mutations produce 2-hydroxyglutarate (2-HG), an oncometabolite inhibiting TET enzymes and causing hypermethylation.\n\n' +
        '**DNA Damage Response (DDR) as Therapy**\n' +
        'ATR inhibitors target replication stress in ATM-deficient tumors. ' +
        'CHK1/2 inhibitors abrogate cell cycle checkpoints. ' +
        'WEE1 inhibitors force mitotic entry with unrepaired DNA.',
      keyTerms: [
        { term: 'mutational signature', definition: 'Pattern of mutations reflecting specific mutagenic processes' },
        { term: 'COSMIC', definition: 'Catalogue of Somatic Mutations in Cancer — database of cancer mutations and signatures' },
        { term: 'chromothripsis', definition: 'Catastrophic chromosome shattering and random reassembly in a single event' },
        { term: 'kataegis', definition: 'Localized clusters of hypermutation driven by APOBEC enzymes' },
        { term: 'APOBEC', definition: 'Family of cytidine deaminases causing C-to-T/G mutations' },
        { term: 'CIMP', definition: 'CpG island methylator phenotype — widespread promoter hypermethylation' },
        { term: 'IDH1/2 mutations', definition: 'Isocitrate dehydrogenase mutations producing oncometabolite 2-HG' },
        { term: 'SWI/SNF complex', definition: 'Chromatin remodeling complex frequently mutated in cancer (SMARCB1, ARID1A)' },
        { term: 'ATR', definition: 'Ataxia telangiectasia and Rad3-related kinase — replication stress sensor' },
        { term: 'replication stress', definition: 'Disruption of DNA replication fork progression, common in cancers with oncogene activation' },
      ],
      examples: [
        'IDH1-mutant gliomas respond to vorasidenib, which crosses the blood-brain barrier.',
        'ARID1A loss creates a vulnerability to EZH2 inhibitors through synthetic lethality.',
        'APOBEC mutational signatures correlate with immunotherapy response in bladder cancer.',
      ],
      clinicalNotes:
        'Mutational signatures can infer etiology even when the primary is unknown (cancer of unknown primary). ' +
        'IDH inhibitors (ivosidenib for IDH1, enasidenib for IDH2) are approved in AML. ' +
        'Vorasidenib is approved for IDH-mutant grade 2 gliomas. ' +
        'HRD testing (Myriad myChoice) combines BRCA status with genomic scar scores (LOH, TAI, LST) to identify PARP inhibitor–eligible patients.',
    },
    5: {
      level: 5,
      summary: 'Frontier research leverages whole-genome sequencing, mutational process modeling, CRISPR functional screens, and tumor evolution mapping to discover new therapeutic vulnerabilities.',
      explanation:
        '**Whole-Genome Sequencing in Oncology**\n' +
        'The PCAWG (Pan-Cancer Analysis of Whole Genomes) consortium analyzed >2,600 whole genomes across 38 cancer types. ' +
        'Key findings: non-coding driver mutations are rare but include TERT promoter mutations (most common non-coding driver), ' +
        'structural variants (SVs) create ~15% of driver events, and 5% of cancers have no identifiable driver ("dark matter").\n\n' +
        '**CRISPR Functional Genomics**\n' +
        'Genome-wide CRISPR-Cas9 knockout screens (Brunello, TKOv3 libraries) and CRISPRi/CRISPRa screens identify cancer dependencies at scale. ' +
        'Project Achilles / DepMap provides genome-wide dependency scores across >1,000 cancer cell lines. ' +
        'CRISPR screens in vivo identify immune evasion mechanisms and drug resistance determinants. ' +
        'Base editing and prime editing enable precise modeling of cancer mutations.\n\n' +
        '**Tumor Evolution & Therapy Resistance**\n' +
        'Longitudinal ctDNA analysis and single-cell sequencing map clonal dynamics during treatment. ' +
        'Adaptive therapy (based on evolutionary game theory) modulates drug dose to maintain drug-sensitive clones that compete with resistant clones. ' +
        'Persister cells survive targeted therapy through non-genetic mechanisms (epigenetic rewiring, metabolic adaptation) and may acquire permanent resistance mutations over time. ' +
        'Drug-tolerant persister (DTP) states can be reversed by targeting GPX4 (ferroptosis induction) or KDM5 histone demethylases.\n\n' +
        '**Emerging Concepts**\n' +
        'Extrachromosomal DNA (ecDNA) amplicons drive oncogene overexpression and therapeutic resistance through unequal segregation. ' +
        'Phase separation and biomolecular condensates organize transcription factor hubs (super-enhancers) in cancer. ' +
        'Circular RNA and RNA modifications (m6A) are emerging regulatory layers in oncogenesis.',
      keyTerms: [
        { term: 'PCAWG', definition: 'Pan-Cancer Analysis of Whole Genomes — international consortium analyzing >2,600 cancer whole genomes' },
        { term: 'TERT promoter mutations', definition: 'Most common non-coding driver mutations in cancer, activating telomerase expression' },
        { term: 'DepMap', definition: 'Cancer Dependency Map — database of gene dependencies across >1,000 cancer cell lines from CRISPR screens' },
        { term: 'CRISPR screen', definition: 'High-throughput functional genomics approach using CRISPR to systematically knock out genes and identify dependencies' },
        { term: 'adaptive therapy', definition: 'Evolutionary-informed strategy modulating drug dosing to maintain competitive drug-sensitive populations' },
        { term: 'drug-tolerant persister (DTP)', definition: 'Cancer cell state surviving therapy through reversible non-genetic mechanisms' },
        { term: 'extrachromosomal DNA (ecDNA)', definition: 'Circular DNA amplicons outside chromosomes driving oncogene amplification and heterogeneity' },
        { term: 'ferroptosis', definition: 'Iron-dependent form of regulated cell death involving lipid peroxidation' },
        { term: 'super-enhancer', definition: 'Large cluster of enhancers driving high-level expression of key oncogenes' },
        { term: 'phase separation', definition: 'Biomolecular condensate formation organizing transcription and signaling in cancer cells' },
      ],
      examples: [
        'ecDNA amplification of EGFR in glioblastoma drives treatment resistance through dynamic copy number changes.',
        'DepMap data identified WRN helicase as a synthetic lethal target in MSI-H cancers, now in clinical trials.',
        'Adaptive therapy in metastatic prostate cancer (Zhang et al., Nature Communications 2017) improved time to progression vs. continuous therapy.',
      ],
      clinicalNotes:
        'Whole-genome sequencing is increasingly used in clinical practice (NHS 100,000 Genomes Project, Hartwig Medical Foundation). ' +
        'DepMap-derived targets entering clinical trials include WRN (MSI-H), PRMT5 (MTAP-deleted), and USP1 (BRCA-mutant). ' +
        'ecDNA is detectable by optical genome mapping and may predict rapid resistance development. ' +
        'Ferroptosis inducers are in preclinical development as strategies to eliminate persister cells.',
    },
  },
  media: [],
  citations: [
    {
      id: 'pcawg-2020',
      type: 'article',
      title: 'Pan-cancer analysis of whole genomes',
      authors: ['ICGC/TCGA Pan-Cancer Analysis of Whole Genomes Consortium'],
      source: 'Nature',
      page: '578:82-93',
      url: 'https://doi.org/10.1038/s41586-020-1969-6',
    },
    {
      id: 'alexandrov-2020',
      type: 'article',
      title: 'The repertoire of mutational signatures in human cancer',
      authors: ['Alexandrov LB', 'et al.'],
      source: 'Nature',
      page: '578:94-101',
      url: 'https://doi.org/10.1038/s41586-020-1943-3',
    },
  ],
  crossReferences: [
    { targetId: 'cell-cycle-and-cancer', targetType: 'concept', relationship: 'sibling', label: 'Cell Cycle and Cancer' },
    { targetId: 'cancer-treatment', targetType: 'topic', relationship: 'related', label: 'Cancer Treatment' },
  ],
  tags: {
    systems: ['oncology', 'genetics', 'molecular-biology'],
    topics: ['mutations', 'dna-repair', 'genomic-instability', 'mutational-signatures'],
    keywords: ['BRCA', 'MMR', 'MSI', 'PARP', 'CRISPR', 'ctDNA', 'chromothripsis', 'ecDNA'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
};
