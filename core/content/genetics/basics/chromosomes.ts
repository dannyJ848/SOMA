/**
 * Chromosomes - Comprehensive Educational Content
 *
 * Covers chromosome structure, function, karyotype,
 * and the organization of genetic material.
 */

import { EducationalContent } from '../../types';

export const chromosomesContent: EducationalContent = {
  id: 'concept-chromosomes',
  type: 'concept',
  name: 'Chromosomes',
  alternateNames: ['Chromosome Structure', 'Karyotype', 'Chromatin Organization'],

  levels: {
    1: {
      level: 1,
      summary: 'Chromosomes are packages of DNA in your cells that carry all your genetic instructions.',
      explanation: `Chromosomes are like organized folders that hold your DNA. If DNA is a very long instruction manual, chromosomes are how the cell keeps those instructions organized and protected.

Humans have 46 chromosomes in most of our cells. They come in 23 pairs - you get one of each pair from your mom and one from your dad. So you have 23 from mom + 23 from dad = 46 total.

The first 22 pairs are called "autosomes" - they're numbered 1 through 22. The 23rd pair is special - these are your sex chromosomes that determine if you're male or female:
- Girls have two X chromosomes (XX)
- Boys have one X and one Y chromosome (XY)

Chromosomes are only visible under a microscope when a cell is dividing. The rest of the time, the DNA is spread out and hard to see. When the cell needs to divide, it packages the DNA tightly into the chromosome shape we recognize.

Scientists can take a picture of someone's chromosomes and arrange them by size. This is called a karyotype, and doctors use it to check if a baby has the right number of chromosomes.`,
      keyTerms: [
        { term: 'chromosome', definition: 'A package of DNA and proteins that carries genetic information' },
        { term: 'pair', definition: 'Chromosomes come in matching sets - one from mom, one from dad' },
        { term: 'autosome', definition: 'The 22 pairs of chromosomes that are not sex chromosomes' },
        { term: 'sex chromosome', definition: 'The X and Y chromosomes that determine biological sex' },
        { term: 'karyotype', definition: 'A picture of all your chromosomes arranged in order' },
      ],
      analogies: [
        'Chromosomes are like folders in a filing cabinet - they keep your genetic information organized.',
        'Getting 23 chromosomes from each parent is like getting half a deck of cards from mom and half from dad.',
        'A karyotype is like a class photo of all your chromosomes lined up by size.',
      ],
      examples: [
        'People with Down syndrome have 47 chromosomes instead of 46 - they have an extra copy of chromosome 21.',
        'The Y chromosome is much smaller than the X chromosome.',
      ],
    },
    2: {
      level: 2,
      summary: 'Chromosomes are organized structures of DNA and histone proteins that ensure accurate genetic inheritance during cell division.',
      explanation: `Chromosomes are the physical carriers of genes. Each chromosome is one long, continuous DNA molecule packaged with proteins called histones.

**Chromosome Structure**

When condensed (during cell division):
- **Centromere**: The pinched middle region where the two sister chromatids are held together
- **Sister chromatids**: Two identical copies of the chromosome joined at the centromere
- **Telomeres**: Protective caps at the ends of chromosomes
- **Short arm (p)**: The smaller arm ("p" for "petit" - French for small)
- **Long arm (q)**: The longer arm

**Human Chromosome Complement**

- 46 chromosomes = 23 pairs
- 22 pairs of autosomes (numbered by size, 1 being largest)
- 1 pair of sex chromosomes (XX female, XY male)
- Diploid (2n) = 46 in most cells
- Haploid (n) = 23 in egg and sperm cells

**Chromosome Organization**

| Level | Structure | Compaction |
|-------|-----------|------------|
| DNA double helix | 2 nm diameter | - |
| Nucleosome | DNA wrapped around histones | 6-fold |
| Chromatin fiber | 30 nm fiber | 40-fold |
| Loops | Attached to scaffold | 1,000-fold |
| Metaphase chromosome | Fully condensed | 10,000-fold |

**Karyotyping**

A karyotype displays chromosomes arranged by size and centromere position. It can detect:
- Aneuploidy (wrong number of chromosomes)
- Large deletions or duplications
- Translocations (pieces swapped between chromosomes)
- Some structural abnormalities`,
      keyTerms: [
        { term: 'centromere', definition: 'Region where sister chromatids are joined; attachment point for spindle fibers', pronunciation: 'SEN-troh-meer' },
        { term: 'sister chromatids', definition: 'Two identical copies of a replicated chromosome connected at the centromere' },
        { term: 'telomere', definition: 'Repetitive DNA sequences at chromosome ends that protect against degradation', pronunciation: 'TEL-oh-meer' },
        { term: 'diploid', definition: 'Having two complete sets of chromosomes (2n=46 in humans)', pronunciation: 'DIP-loyd' },
        { term: 'haploid', definition: 'Having one complete set of chromosomes (n=23 in human gametes)', pronunciation: 'HAP-loyd' },
        { term: 'aneuploidy', definition: 'Abnormal number of chromosomes', pronunciation: 'AN-yoo-ploy-dee' },
      ],
      analogies: [
        'Sister chromatids are like identical twins holding hands at their centromere.',
        'Telomeres are like the plastic tips on shoelaces - they prevent the ends from fraying.',
        'DNA wrapping around histones is like thread wrapped around spools.',
      ],
    },
    3: {
      level: 3,
      summary: 'Chromosomes exhibit hierarchical organization from nucleosomes to higher-order chromatin structures, with centromeric and telomeric specializations essential for genome stability.',
      explanation: `## Chromatin Organization

### Nucleosome Structure
- 147 bp DNA wrapped 1.7 times around histone octamer
- Octamer: 2 each of H2A, H2B, H3, H4
- Linker histone H1 binds at entry/exit points
- Linker DNA (20-80 bp) between nucleosomes

### Higher-Order Structure

**30 nm Fiber:**
- Folding of nucleosome array
- Models: Solenoid vs. zigzag
- May not exist in vivo in simple form

**Chromatin Loops:**
- 300-700 nm loops
- Anchored to nuclear scaffold/matrix
- Loop extrusion by cohesin

**Chromosome Territories:**
- Each chromosome occupies distinct nuclear region
- Gene-rich chromosomes often interior
- Gene-poor chromosomes often peripheral

## Centromere Biology

**Structure:**
- Alpha-satellite DNA (171 bp repeats)
- CENP-A nucleosomes (histone H3 variant)
- Kinetochore assembly site

**Kinetochore:**
- Inner kinetochore: CCAN proteins
- Outer kinetochore: KMN network
- Spindle attachment, checkpoint signaling

## Telomere Biology

**Sequence:**
- Human: TTAGGG repeats
- 5-15 kb at chromosome ends
- 3' single-strand overhang (150-200 nt)

**T-loop Structure:**
- Overhang invades double-stranded region
- Creates protective loop structure
- Shelterin complex (TRF1, TRF2, POT1, TIN2, TPP1, RAP1)

**End Replication Problem:**
- DNA polymerase cannot fully replicate 3' ends
- Telomeres shorten with each division
- Telomerase extends telomeres in germ cells, stem cells

## Chromosome Types by Centromere Position

| Type | Centromere Location | Arm Ratio |
|------|---------------------|-----------|
| Metacentric | Middle | p ≈ q |
| Submetacentric | Off-center | p < q |
| Acrocentric | Near end | p << q |
| Telocentric | At end | No p arm |

Human acrocentric: Chromosomes 13, 14, 15, 21, 22

## Karyotype Analysis

**G-banding Pattern:**
- Giemsa staining after trypsin treatment
- ~400-850 bands depending on resolution
- Each chromosome has unique pattern

**ISCN Nomenclature:**
- 46,XX: Normal female
- 47,XY,+21: Male with trisomy 21
- 46,XX,t(9;22)(q34;q11): Philadelphia translocation`,
      keyTerms: [
        { term: 'nucleosome', definition: 'DNA wrapped around histone octamer; fundamental unit of chromatin', pronunciation: 'NOO-klee-oh-sohm' },
        { term: 'CENP-A', definition: 'Centromere-specific histone H3 variant defining centromere location' },
        { term: 'kinetochore', definition: 'Protein complex at centromere that attaches to spindle microtubules', pronunciation: 'kin-EE-toh-kor' },
        { term: 'shelterin', definition: 'Six-protein complex protecting telomeres and regulating telomerase access' },
        { term: 'telomerase', definition: 'Enzyme that extends telomeres using RNA template', pronunciation: 'tel-OM-er-ase' },
        { term: 'G-banding', definition: 'Staining technique producing characteristic banding pattern for chromosome identification' },
      ],
      clinicalNotes: 'Telomere shortening linked to cellular aging. Telomerase reactivation in 85-90% of cancers. Centromere defects cause chromosome instability and aneuploidy in cancer.',
    },
    4: {
      level: 4,
      summary: 'Chromosome structure integrates nucleosome positioning, topologically associating domains, cohesin-mediated loop extrusion, and epigenetic compartmentalization governing gene regulation and genome stability.',
      explanation: `## 3D Genome Architecture

### Topologically Associating Domains (TADs)

**Characteristics:**
- Self-interacting genomic regions (~1 Mb)
- Relatively conserved across cell types
- Boundaries enriched for CTCF, cohesin
- Insulate enhancer-promoter interactions

**Loop Extrusion Model:**
1. Cohesin loads onto chromatin
2. Extrudes DNA forming progressively larger loops
3. Stops at convergent CTCF sites
4. Creates TAD boundaries

**TAD Boundary Elements:**
- CTCF sites (convergent orientation)
- Active promoters
- Housekeeping genes
- tRNA genes

### A/B Compartments

| Feature | A Compartment | B Compartment |
|---------|---------------|---------------|
| Gene density | High | Low |
| Transcription | Active | Inactive |
| GC content | High | Low |
| Replication timing | Early | Late |
| Histone marks | H3K4me3, H3K27ac | H3K9me3, H3K27me3 |
| Nuclear position | Interior | Peripheral/nucleolar |

### Lamina-Associated Domains (LADs)

- Contact nuclear lamina
- Gene-poor, late-replicating
- H3K9me2/3 enriched
- Variable (20-30% differ between cell types)

## Centromere Specification

### Epigenetic Determination

CENP-A is necessary and sufficient for centromere identity:
- No specific DNA sequence required
- Self-templating (epigenetic inheritance)
- HJURP chaperone deposits new CENP-A
- Loading occurs in G1 phase

### Centromere-Associated Proteins

**CCAN (Constitutive Centromere-Associated Network):**
- CENP-C: Links CENP-A to outer kinetochore
- CENP-N: CENP-A nucleosome recognition
- CENP-T/W/S/X: DNA binding

**Kinetochore-Microtubule Attachment:**
- KMN network (KNL1-MIS12-NDC80)
- NDC80 complex: Direct MT binding
- Error correction by Aurora B

### Spindle Assembly Checkpoint

- Monitors kinetochore-microtubule attachment
- MCC (mitotic checkpoint complex) inhibits APC/C
- Unattached kinetochores catalyze MCC formation
- Satisfied checkpoint allows anaphase entry

## Telomere Regulation

### Telomere Length Homeostasis

**Telomerase Regulation:**
- hTERT (catalytic) expression limiting
- Repressed in somatic cells
- Active in stem cells, germ cells
- Reactivated in cancer

**Alternative Lengthening of Telomeres (ALT):**
- 10-15% of cancers
- Recombination-based
- Associated with ATRX/DAXX loss
- Heterogeneous telomere length

### Telomere Dysfunction

**Uncapped Telomeres:**
- DNA damage response activation
- ATM/ATR signaling
- p53-dependent senescence or apoptosis
- Chromosome fusions if checkpoints fail

**Crisis:**
- Critically short telomeres
- Massive cell death
- Survivors often have genomic instability
- BFB (breakage-fusion-bridge) cycles

## Chromosome Instability in Disease

### Mechanisms

| Mechanism | Consequence | Disease Association |
|-----------|-------------|---------------------|
| Centrosome amplification | Multipolar spindles | Many solid tumors |
| Cohesin defects | Premature separation | Cornelia de Lange |
| SAC defects | Chromosome missegregation | Mosaic variegated aneuploidy |
| Telomere dysfunction | Fusions, rearrangements | Dyskeratosis congenita |
| BRCA1/2 loss | Recombination defects | Breast/ovarian cancer |`,
      keyTerms: [
        { term: 'topologically associating domain', definition: 'Self-interacting genomic region forming structural and regulatory unit' },
        { term: 'loop extrusion', definition: 'Process where cohesin progressively enlarges DNA loop until meeting boundary' },
        { term: 'CTCF', definition: 'Zinc finger protein defining TAD boundaries and mediating chromatin loops' },
        { term: 'ALT', definition: 'Alternative lengthening of telomeres; recombination-based telomere maintenance in some cancers' },
        { term: 'spindle assembly checkpoint', definition: 'Surveillance mechanism ensuring proper chromosome attachment before anaphase' },
        { term: 'breakage-fusion-bridge cycle', definition: 'Iterative chromosome breakage and fusion causing genomic instability' },
      ],
      clinicalNotes: 'TAD boundary disruption causes developmental disorders (limb malformations from WNT6 enhancer hijacking). Cohesinopathies include Cornelia de Lange and Roberts syndrome. Telomere biology disorders span bone marrow failure to pulmonary fibrosis.',
    },
    5: {
      level: 5,
      summary: 'Clinical chromosome analysis encompasses cytogenetic methods, molecular karyotyping, and emerging technologies for detecting structural variants, with applications in constitutional genetics, oncology, and prenatal diagnosis.',
      explanation: `## Clinical Cytogenetics Methods

### Conventional Cytogenetics

**G-banded Karyotype:**
- Resolution: 5-10 Mb
- Requires dividing cells
- Culture time: 72h (blood), 7-14d (amniocytes)
- Detects: Aneuploidies, large rearrangements

**High-Resolution Banding:**
- 550-850 bands
- Synchronized cultures
- Detects: Smaller deletions (~3-5 Mb)

### FISH (Fluorescence In Situ Hybridization)

**Applications:**
- Targeted detection of specific abnormalities
- Interphase analysis (no culture needed)
- Rapid aneuploidy screening (13, 18, 21, X, Y)

**Probe Types:**
| Type | Use |
|------|-----|
| Centromeric | Chromosome enumeration |
| Locus-specific | Deletion/duplication, translocation |
| Whole chromosome paint | Complex rearrangements |
| Subtelomeric | Cryptic rearrangements |

### Chromosomal Microarray (CMA)

**Technologies:**
- aCGH (array comparative genomic hybridization)
- SNP array (also detects copy-neutral LOH)

**Resolution:** 50-100 kb (clinical arrays)

**Advantages:**
- No cell culture needed
- Genome-wide screening
- Detects CNVs missed by karyotype

**Limitations:**
- Cannot detect balanced rearrangements
- Variants of uncertain significance (VUS)
- Requires parental testing for interpretation

### Optical Genome Mapping

**Technology:**
- Ultra-long DNA molecules (>150 kb)
- Fluorescent labeling at specific motifs
- Single-molecule imaging

**Capabilities:**
- Structural variant detection
- Balanced rearrangement identification
- Complex rearrangement resolution

## Prenatal Chromosome Analysis

### Testing Options

| Test | Timing | Procedure | Detection |
|------|--------|-----------|-----------|
| cfDNA screening | >10 weeks | Maternal blood | Common aneuploidies |
| CVS | 10-13 weeks | Invasive | Full karyotype + CMA |
| Amniocentesis | >15 weeks | Invasive | Full karyotype + CMA |

### cfDNA Screening Performance

| Condition | Detection Rate | False Positive Rate |
|-----------|---------------|---------------------|
| Trisomy 21 | >99% | 0.1% |
| Trisomy 18 | >97% | 0.2% |
| Trisomy 13 | >92% | 0.2% |
| Sex chromosomes | ~95% | 0.5-1% |

**Limitations:**
- Screening, not diagnostic
- Confined placental mosaicism
- Maternal findings (CNVs, mosaicism, cancer)
- Limited for rare aneuploidies, CNVs

## Cancer Cytogenetics

### Diagnostic/Prognostic Markers

**Hematologic Malignancies:**
| Abnormality | Disease | Significance |
|-------------|---------|--------------|
| t(9;22) BCR-ABL | CML, ALL | Diagnostic, TKI target |
| t(15;17) PML-RARA | APL | Diagnostic, ATRA responsive |
| t(8;21) | AML | Favorable prognosis |
| inv(16) | AML | Favorable prognosis |
| del(5q), -7 | MDS | High-risk |
| t(14;18) BCL2 | Follicular lymphoma | Diagnostic |

**Solid Tumors:**
| Abnormality | Tumor | Clinical Use |
|-------------|-------|--------------|
| MYCN amplification | Neuroblastoma | High-risk marker |
| 1p/19q codeletion | Oligodendroglioma | Diagnostic, favorable |
| EWSR1 rearrangement | Ewing sarcoma | Diagnostic |
| ALK rearrangement | NSCLC | Therapeutic target |

### Minimal Residual Disease

- FISH for fusion genes
- PCR more sensitive (<10^-4)
- Flow cytometry for immunophenotype
- NGS-based MRD increasingly used

## Emerging Technologies

### Long-Read Sequencing

**Applications:**
- Structural variant detection
- Repeat expansion sizing
- Phasing (haplotype resolution)
- Methylation (nanopore)

### Genome-Wide Structural Variant Detection

**Short-Read WGS:**
- Depth of coverage for CNVs
- Discordant read pairs for rearrangements
- Split reads for breakpoints
- Detects smaller variants than CMA

**Integration Approach:**
- Combine CMA, karyotype, FISH
- WGS for comprehensive SV detection
- Confirmation of novel findings`,
      keyTerms: [
        { term: 'chromosomal microarray', definition: 'Genome-wide screen for copy number variants using array technology' },
        { term: 'cell-free DNA', definition: 'Fragmented DNA in blood; fetal cfDNA used for prenatal screening' },
        { term: 'confined placental mosaicism', definition: 'Chromosomal abnormality in placenta but not fetus; causes cfDNA false positives' },
        { term: 'optical genome mapping', definition: 'Single-molecule imaging of ultra-long DNA for structural variant detection' },
        { term: 'variants of uncertain significance', definition: 'Genetic findings without clear clinical interpretation' },
        { term: 'minimal residual disease', definition: 'Small numbers of cancer cells remaining after treatment' },
      ],
      clinicalNotes: `Clinical practice points:
1. CMA is first-tier test for developmental delay/congenital anomalies (replaces karyotype)
2. Karyotype still needed for: Recurrent pregnancy loss, infertility, suspected balanced rearrangement
3. cfDNA has limitations - positive results require diagnostic confirmation
4. Cancer cytogenetics guides therapy selection and prognosis
5. Structural variants increasingly important in precision oncology
6. Long-read sequencing revolutionizing repeat expansion disorder diagnosis`,
    },
  },

  media: [
    {
      id: 'chromosome-structure',
      type: 'diagram',
      filename: 'chromosome-structure.svg',
      title: 'Chromosome Structure',
      description: 'Diagram showing centromere, telomeres, p and q arms, sister chromatids',
    },
    {
      id: 'karyotype-normal',
      type: 'image',
      filename: 'normal-karyotype.png',
      title: 'Normal Human Karyotype',
      description: 'G-banded karyotype showing 46,XX normal female',
    },
    {
      id: 'chromatin-organization',
      type: 'diagram',
      filename: 'chromatin-levels.svg',
      title: 'Levels of Chromatin Organization',
      description: 'From DNA double helix to metaphase chromosome',
    },
  ],

  citations: [
    {
      id: 'alberts-chromatin',
      type: 'textbook',
      title: 'Chromosomal DNA and Its Packaging in the Chromatin Fiber',
      authors: ['Alberts, B.', 'et al.'],
      source: 'Molecular Biology of the Cell',
      chapter: '4',
      license: 'Garland Science',
    },
    {
      id: 'rao-2014',
      type: 'article',
      title: 'A 3D Map of the Human Genome at Kilobase Resolution Reveals Principles of Chromatin Looping',
      authors: ['Rao, S.S.P.', 'et al.'],
      source: 'Cell',
      chapter: '159',
      page: '1665-1680',
    },
  ],

  crossReferences: [
    { targetId: 'concept-dna-structure', targetType: 'concept', relationship: 'parent', label: 'DNA Structure' },
    { targetId: 'condition-down-syndrome', targetType: 'condition', relationship: 'related', label: 'Down Syndrome' },
    { targetId: 'concept-cell-division', targetType: 'concept', relationship: 'related', label: 'Cell Division' },
  ],

  tags: {
    systems: ['genetics'],
    topics: ['cytogenetics', 'chromatin', 'genome organization'],
    keywords: ['chromosomes', 'karyotype', 'chromatin', 'centromere', 'telomere'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pediatrics'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default chromosomesContent;
