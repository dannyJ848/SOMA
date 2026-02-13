/**
 * Gene Expression - Comprehensive Educational Content
 *
 * Covers transcription, translation, gene regulation,
 * and the central dogma of molecular biology.
 */

import { EducationalContent } from '../../types';

export const geneExpressionContent: EducationalContent = {
  id: 'concept-gene-expression',
  type: 'concept',
  name: 'Gene Expression',
  alternateNames: ['Transcription and Translation', 'Central Dogma', 'Protein Synthesis'],

  levels: {
    1: {
      level: 1,
      summary: 'Gene expression is how your cells read the instructions in your DNA to make the proteins your body needs.',
      explanation: `Gene expression is like following a recipe from a cookbook. Your DNA is the cookbook, filled with recipes (genes) for making different proteins. Proteins are the workers in your body - they do almost everything, from helping you digest food to fighting off germs.

Here's how it works:

1. **Copying the recipe (Transcription)**: First, the cell makes a copy of just the one recipe it needs. This copy is called messenger RNA (mRNA). It's like photocopying one page from the cookbook.

2. **Making the protein (Translation)**: The mRNA copy goes to a part of the cell called the ribosome, which is like a kitchen. The ribosome reads the mRNA instructions and builds the protein step by step, like following a recipe.

Not all genes are turned on all the time. Different cells use different recipes depending on their job. A muscle cell uses different genes than a skin cell, even though they have the same DNA cookbook.

This is why your eye cells know to make eye proteins and your heart cells know to make heart proteins - they're reading different pages of the same cookbook!`,
      keyTerms: [
        { term: 'gene expression', definition: 'The process of using information in a gene to make a protein' },
        { term: 'transcription', definition: 'Copying DNA instructions into mRNA' },
        { term: 'translation', definition: 'Using mRNA instructions to build a protein' },
        { term: 'mRNA', definition: 'Messenger RNA - the copy of a gene that carries instructions to make a protein' },
        { term: 'protein', definition: 'The worker molecules in your body made from gene instructions' },
      ],
      analogies: [
        'DNA is like a cookbook, genes are like recipes, and proteins are like the dishes you make.',
        'Transcription is like photocopying one recipe from a big cookbook.',
        'The ribosome is like a kitchen where the protein recipe is actually made.',
      ],
      examples: [
        'When you need to digest food, your stomach cells express genes for digestive proteins.',
        'When you get a cut, cells express genes to make proteins that help heal the wound.',
      ],
    },
    2: {
      level: 2,
      summary: 'Gene expression involves transcription of DNA into mRNA, followed by translation of mRNA into protein, with regulation occurring at multiple stages.',
      explanation: `Gene expression is the process by which information encoded in DNA is converted into functional products, primarily proteins. This follows the "central dogma" of molecular biology: DNA → RNA → Protein.

**Transcription (DNA → RNA)**

1. **Initiation**: RNA polymerase binds to a promoter region upstream of the gene
2. **Elongation**: RNA polymerase reads the DNA template strand and synthesizes a complementary mRNA strand (5' to 3')
3. **Termination**: RNA polymerase reaches a stop signal and releases the mRNA

**RNA Processing (in eukaryotes)**
- 5' cap added (protects mRNA, aids translation)
- 3' poly-A tail added (stability, export)
- Splicing removes introns, joins exons

**Translation (RNA → Protein)**

1. **Initiation**: Ribosome assembles on mRNA at the start codon (AUG)
2. **Elongation**: tRNA molecules bring amino acids matching each codon; ribosome links them together
3. **Termination**: Stop codon reached; protein released

**The Genetic Code**
- Codons: Three-nucleotide sequences in mRNA
- 64 possible codons code for 20 amino acids
- Code is degenerate (multiple codons per amino acid) but not ambiguous

**Gene Regulation**
Cells control which genes are expressed through:
- Transcription factors (proteins that turn genes on/off)
- Epigenetic modifications (changes that affect gene accessibility)
- Post-transcriptional regulation (mRNA stability, microRNAs)`,
      keyTerms: [
        { term: 'RNA polymerase', definition: 'Enzyme that synthesizes RNA from a DNA template', pronunciation: 'pah-LIM-er-ase' },
        { term: 'promoter', definition: 'DNA sequence where RNA polymerase binds to start transcription' },
        { term: 'codon', definition: 'Three-nucleotide sequence in mRNA that codes for one amino acid', pronunciation: 'KOH-don' },
        { term: 'ribosome', definition: 'Cellular machine that reads mRNA and assembles proteins', pronunciation: 'RY-boh-sohm' },
        { term: 'tRNA', definition: 'Transfer RNA - brings amino acids to the ribosome for protein building' },
        { term: 'intron', definition: 'Non-coding section of a gene that is spliced out of mRNA' },
        { term: 'exon', definition: 'Coding section of a gene that remains in mature mRNA' },
      ],
      analogies: [
        'Codons are like three-letter words; the ribosome reads these words to know which amino acid to add.',
        'Introns are like deleted scenes that get cut out of a movie before release.',
      ],
    },
    3: {
      level: 3,
      summary: 'Gene expression encompasses promoter-driven transcription initiation, co-transcriptional mRNA processing, ribosomal translation with aminoacyl-tRNA decoding, and multi-level regulatory mechanisms.',
      explanation: `## Transcription Machinery

### RNA Polymerase II (mRNA synthesis)

**Promoter Elements:**
- TATA box (-25 to -30): TBP binding
- Initiator (Inr): Defines transcription start site
- Downstream promoter element (DPE)
- CpG islands: Often near housekeeping genes

**General Transcription Factors:**
TFIID → TFIIA → TFIIB → RNA Pol II → TFIIF → TFIIE → TFIIH

**Transcription Elongation:**
- CTD phosphorylation (Ser5 then Ser2)
- Elongation factors (DSIF, P-TEFb)
- Chromatin remodeling during elongation

## mRNA Processing

### 5' Capping
- 7-methylguanosine cap
- Added co-transcriptionally
- Functions: Stability, nuclear export, translation initiation

### Splicing
**Spliceosome components:**
- snRNPs: U1, U2, U4, U5, U6
- Branch point, 5' splice site, 3' splice site

**Alternative splicing:**
- Exon skipping
- Alternative 5' or 3' splice sites
- Intron retention
- Expands proteome diversity

### 3' Processing
- Polyadenylation signal (AAUAAA)
- Cleavage and polyadenylation
- Poly-A tail length affects mRNA stability

## Translation

### Initiation (Cap-dependent)
1. 43S pre-initiation complex formation
2. mRNA recruitment (eIF4F complex)
3. Scanning to AUG start codon
4. 60S subunit joining → 80S ribosome

### Elongation Cycle
| Step | Factor | Function |
|------|--------|----------|
| Aminoacyl-tRNA delivery | eEF1A | Brings charged tRNA to A site |
| Peptide bond formation | Ribosome | Catalyzed by 23S rRNA |
| Translocation | eEF2 | Moves ribosome along mRNA |

### Genetic Code Features
- Start codon: AUG (methionine)
- Stop codons: UAA, UAG, UGA
- Wobble position: Third codon position allows flexibility

## Regulation Levels

| Level | Mechanisms | Timescale |
|-------|-----------|-----------|
| Chromatin | Histone modifications, DNA methylation | Hours-days |
| Transcription | Transcription factors, enhancers | Minutes-hours |
| Post-transcriptional | Splicing, mRNA stability, miRNAs | Minutes |
| Translation | Initiation factors, riboswitches | Seconds-minutes |
| Post-translational | Protein modifications, degradation | Seconds-minutes |

## Transcription Factors

**Structural Motifs:**
- Zinc finger
- Helix-turn-helix
- Leucine zipper
- bHLH (basic helix-loop-helix)

**Activation/Repression:**
- Activators recruit coactivators (HATs, SWI/SNF)
- Repressors recruit corepressors (HDACs)`,
      keyTerms: [
        { term: 'TATA box', definition: 'Promoter element where TBP binds to initiate transcription complex assembly' },
        { term: 'spliceosome', definition: 'Large ribonucleoprotein complex that performs pre-mRNA splicing', pronunciation: 'SPLY-soh-sohm' },
        { term: 'alternative splicing', definition: 'Process generating multiple mRNA isoforms from one gene' },
        { term: 'eIF4F', definition: 'Cap-binding complex essential for translation initiation' },
        { term: 'wobble pairing', definition: 'Non-Watson-Crick base pairing at third codon position' },
        { term: 'coactivator', definition: 'Protein complex recruited by transcription factors to enhance transcription' },
      ],
      clinicalNotes: 'Splicing mutations cause ~15% of genetic diseases. Many cancer-associated mutations affect transcription factors (p53, MYC). Aminoglycoside antibiotics work by targeting bacterial ribosomal function.',
    },
    4: {
      level: 4,
      summary: 'Gene expression integrates cis-regulatory element function, trans-factor combinatorics, RNA processing networks, translational control mechanisms, and temporal/spatial coordination within cellular context.',
      explanation: `## Advanced Transcriptional Regulation

### Enhancer-Promoter Communication

**Enhancer Properties:**
- Can be located kb to Mb from promoter
- Orientation independent
- Cell-type specific activity
- Cluster into super-enhancers for key identity genes

**Communication Mechanisms:**
- DNA looping (cohesin, CTCF)
- Phase separation (mediator condensates)
- Tracking/scanning models

### Chromatin State Regulation

**Histone Code:**
| Mark | Writers | Readers | Effect |
|------|---------|---------|--------|
| H3K4me3 | MLL/COMPASS | PHD fingers | Active promoters |
| H3K27me3 | PRC2 | Polycomb | Repressed |
| H3K9me3 | SUV39H | HP1 | Heterochromatin |
| H3K27ac | p300/CBP | BRD4 | Active enhancers |

**ATP-dependent Remodelers:**
- SWI/SNF (BAF): Eviction, sliding
- ISWI: Spacing
- CHD: NuRD complex, repression
- INO80: Variant histone exchange

### Transcription Dynamics

**Bursting:**
- Transcription occurs in stochastic bursts
- Burst frequency and size are regulated
- Contributes to cell-to-cell variability

**Pausing:**
- RNA Pol II pauses 30-60 bp downstream of TSS
- NELF and DSIF maintain paused state
- P-TEFb releases pause (CTD Ser2 phosphorylation)

## Post-Transcriptional Networks

### microRNA Regulation

**Biogenesis:**
Pri-miRNA → (Drosha) → Pre-miRNA → (Dicer) → Mature miRNA

**RISC Function:**
- Seed sequence (nt 2-8) guides target recognition
- Perfect match: mRNA cleavage
- Imperfect match: Translational repression, mRNA decay

**Regulatory Networks:**
- Single miRNA targets hundreds of genes
- Targets often in same pathway
- Feed-forward/feedback loops

### mRNA Decay

**Decay Pathways:**
- Deadenylation-dependent (CCR4-NOT complex)
- Decapping (DCP1/2)
- 5' to 3' decay (XRN1)
- 3' to 5' decay (exosome)

**Quality Control:**
- Nonsense-mediated decay (NMD): Premature stop codons
- No-go decay: Stalled ribosomes
- Non-stop decay: Missing stop codon

### RNA Modifications

| Modification | Function |
|--------------|----------|
| m6A | mRNA stability, translation, splicing |
| m5C | Stability, translation |
| Pseudouridine | Structure, function |
| A-to-I editing | Codon changes, splicing |

## Translational Control

### Global Regulation

**eIF2α Phosphorylation:**
- Kinases: GCN2 (amino acid starvation), PERK (ER stress), PKR (viral infection), HRI (heme deficiency)
- Effect: Global translation reduction
- Paradoxically increases ATF4 translation (uORF mechanism)

**mTOR Pathway:**
- mTORC1 phosphorylates 4E-BP, releases eIF4E
- S6K activation enhances ribosome biogenesis
- Nutrient and growth factor sensing

### mRNA-Specific Control

**5' UTR Elements:**
- Internal ribosome entry sites (IRES)
- Upstream open reading frames (uORFs)
- G-quadruplexes
- RNA structures affecting scanning

**3' UTR Elements:**
- AU-rich elements (AREs): Instability
- miRNA binding sites
- Cytoplasmic polyadenylation elements (CPE)`,
      keyTerms: [
        { term: 'super-enhancer', definition: 'Cluster of enhancers driving high-level expression of cell identity genes' },
        { term: 'phase separation', definition: 'Formation of membrane-less compartments through liquid-liquid demixing' },
        { term: 'promoter-proximal pausing', definition: 'Regulated halt of RNA Pol II shortly after transcription initiation' },
        { term: 'RISC', definition: 'RNA-induced silencing complex; executes miRNA-mediated regulation' },
        { term: 'nonsense-mediated decay', definition: 'mRNA surveillance pathway degrading transcripts with premature stop codons' },
        { term: 'm6A', definition: 'N6-methyladenosine; most abundant internal mRNA modification', pronunciation: 'em-six-A' },
      ],
      clinicalNotes: 'BRD4 inhibitors (JQ1, OTX015) show anti-cancer activity by disrupting super-enhancers. Aberrant splicing factor expression (SF3B1, SRSF2) is common in MDS and other cancers. ADAR editing defects linked to autoimmune disease.',
    },
    5: {
      level: 5,
      summary: 'Clinical applications of gene expression understanding span diagnostic transcriptomics, therapeutic targeting of expression machinery, RNA-based medicines, and precision oncology through expression profiling.',
      explanation: `## Clinical Gene Expression Profiling

### Diagnostic Applications

**Cancer Classification:**
- PAM50: Breast cancer intrinsic subtypes
- Oncotype DX: 21-gene recurrence score
- MammaPrint: 70-gene prognosis signature
- Decipher: Prostate cancer genomic classifier

**Single-Cell Transcriptomics:**
- Tumor microenvironment characterization
- Rare cell type identification
- Therapy resistance mechanisms
- Immune cell state mapping

### Prognostic Signatures

| Test | Cancer | Clinical Utility |
|------|--------|------------------|
| Oncotype DX | Breast (ER+) | Chemotherapy benefit prediction |
| ColoPrint | Colon | Stage II recurrence risk |
| Prolaris | Prostate | Disease-specific mortality |
| Prosigna | Breast | 10-year recurrence risk |

## Therapeutic Targeting

### Transcription Factor Inhibition

**Direct Targeting Challenges:**
- Lack of enzymatic activity
- Large protein-protein interfaces
- Intrinsically disordered regions

**Strategies:**
- Protein degraders (PROTACs): ARV-110 (AR), ARV-471 (ER)
- Disrupting DNA binding: Myc inhibitors
- Cofactor inhibition: Menin inhibitors (MLL-r leukemia)
- BET inhibitors: Disrupt BRD4-enhancer interaction

### Epigenetic Drugs

| Class | Examples | Approved Indications |
|-------|----------|---------------------|
| DNMT inhibitors | Azacitidine, decitabine | MDS, AML |
| HDAC inhibitors | Vorinostat, romidepsin | CTCL, MM |
| EZH2 inhibitors | Tazemetostat | Follicular lymphoma |
| IDH inhibitors | Ivosidenib, enasidenib | AML |

### Splicing Modulation

**Splicing-targeted therapies:**
- Nusinersen (Spinraza): ASO modifying SMN2 splicing
- Risdiplam (Evrysdi): Small molecule SMN2 splicing modifier
- SF3B1 inhibitors: Cancer applications

## RNA Therapeutics

### Antisense Oligonucleotides (ASOs)

**Mechanisms:**
- RNase H-mediated degradation
- Splicing modulation
- Translation blocking

**Approved ASOs:**
| Drug | Target | Indication |
|------|--------|------------|
| Nusinersen | SMN2 splicing | SMA |
| Eteplirsen | DMD exon skipping | DMD |
| Inotersen | TTR | hATTR |
| Patisiran | TTR (siRNA) | hATTR |

### mRNA Therapeutics

**COVID-19 Vaccines:**
- Modified nucleosides (m1Ψ) reduce immunogenicity
- LNP delivery
- Optimized 5' UTR, codon optimization

**Future Applications:**
- Protein replacement therapy
- Cancer immunotherapy
- In vivo gene editing component delivery

### Gene Therapy Vector Expression

**Promoter Selection:**
- Tissue-specific (e.g., liver: ApoE/HCR)
- Ubiquitous (CAG, EF1α)
- Regulatable (Tet-On/Off)

**Expression Considerations:**
- Immune responses to transgene product
- Expression level matching physiological range
- Long-term durability

## Precision Oncology

### Expression-Based Biomarkers

**PD-L1 Expression:**
- Predictive for checkpoint inhibitor response
- IHC scoring systems (TPS, CPS)
- Limitations in heterogeneous expression

**HER2 Expression:**
- Guides trastuzumab eligibility
- FISH confirmation for equivocal IHC

**Gene Expression in Liquid Biopsy:**
- circulating tumor RNA
- Exosomal RNA profiling
- Minimal residual disease monitoring

### Transcriptomic Drug Sensitivity Prediction

**Approaches:**
- GDSC/CCLE databases link expression to drug response
- Machine learning models predict sensitivity
- Integration with mutation and CNV data

**Emerging Applications:**
- Ex vivo patient-derived organoid expression profiling
- Real-time treatment response monitoring
- Combination therapy optimization`,
      keyTerms: [
        { term: 'Oncotype DX', definition: '21-gene expression assay predicting breast cancer recurrence and chemotherapy benefit' },
        { term: 'PROTAC', definition: 'Proteolysis-targeting chimera; induces degradation of target protein', pronunciation: 'PROH-tak' },
        { term: 'antisense oligonucleotide', definition: 'Short synthetic nucleic acid binding target RNA to modulate expression' },
        { term: 'nusinersen', definition: 'ASO therapy for SMA that modifies SMN2 splicing to include exon 7' },
        { term: 'PAM50', definition: '50-gene signature classifying breast cancer into intrinsic molecular subtypes' },
        { term: 'liquid biopsy', definition: 'Analysis of tumor-derived material (DNA, RNA, proteins) in blood' },
      ],
      clinicalNotes: `Key clinical considerations:
1. Expression profiling guides adjuvant chemotherapy decisions in early breast cancer
2. EZH2 inhibitors approved for follicular lymphoma with EZH2 mutations
3. Splicing modulators revolutionized SMA treatment - early treatment critical
4. mRNA vaccines demonstrate rapid development platform potential
5. Single-cell RNA-seq identifying drug resistance mechanisms in real-time
6. Expression biomarkers may be more dynamic than genomic alterations`,
    },
  },

  media: [
    {
      id: 'central-dogma',
      type: 'diagram',
      filename: 'central-dogma.svg',
      title: 'Central Dogma of Molecular Biology',
      description: 'DNA to RNA to Protein flow of genetic information',
    },
    {
      id: 'transcription-diagram',
      type: 'diagram',
      filename: 'transcription-process.svg',
      title: 'Transcription Process',
      description: 'RNA polymerase synthesizing mRNA from DNA template',
    },
    {
      id: 'translation-diagram',
      type: 'diagram',
      filename: 'translation-process.svg',
      title: 'Translation Process',
      description: 'Ribosome reading mRNA and assembling protein',
    },
  ],

  citations: [
    {
      id: 'alberts-gene-expression',
      type: 'textbook',
      title: 'From DNA to RNA / From RNA to Protein',
      authors: ['Alberts, B.', 'et al.'],
      source: 'Molecular Biology of the Cell',
      chapter: '6-7',
      license: 'Garland Science',
    },
    {
      id: 'lee-2013-transcription',
      type: 'article',
      title: 'Transcriptional Regulation and Its Misregulation in Disease',
      authors: ['Lee, T.I.', 'Young, R.A.'],
      source: 'Cell',
      chapter: '152',
      page: '1237-1251',
    },
  ],

  crossReferences: [
    { targetId: 'concept-dna-structure', targetType: 'concept', relationship: 'parent', label: 'DNA Structure' },
    { targetId: 'concept-mutations-variants', targetType: 'concept', relationship: 'related', label: 'Mutations and Variants' },
    { targetId: 'concept-epigenetics', targetType: 'concept', relationship: 'related', label: 'Epigenetics' },
  ],

  tags: {
    systems: ['genetics'],
    topics: ['molecular biology', 'genetics', 'transcription', 'translation'],
    keywords: ['gene expression', 'transcription', 'translation', 'mRNA', 'protein synthesis'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default geneExpressionContent;
