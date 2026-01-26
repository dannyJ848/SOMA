/**
 * Chromosomal Disorders Overview - Comprehensive Educational Content
 */

import { EducationalContent } from "../../../types";

export const chromosomalDisordersOverviewContent: EducationalContent = {
  id: "concept-chromosomal-disorders-overview",
  type: "concept",
  name: "Chromosomal Disorders Overview",
  alternateNames: ["Chromosome Abnormalities", "Cytogenetic Disorders"],

  levels: {
    1: {
      level: 1,
      summary: "Chromosomal disorders occur when there are changes in the number or structure of chromosomes, which are the packages that hold our genes.",
      explanation: `Chromosomes are like organized filing cabinets that hold all your genes. Most people have 46 chromosomes arranged in 23 pairs. When there are too many, too few, or damaged chromosomes, it can cause health problems.

**Types of chromosome problems:**

1. **Too many chromosomes** - Having an extra chromosome (like Down syndrome with 3 copies of chromosome 21)
2. **Too few chromosomes** - Missing a chromosome (like Turner syndrome with only one X)
3. **Broken or rearranged chromosomes** - Parts moved, deleted, or duplicated

**How do these problems happen?**
- Usually occur by chance when egg or sperm cells form
- Most are not inherited from parents
- Some increase with parent age (especially maternal age)

**Common chromosomal disorders:**
- Down syndrome (extra chromosome 21)
- Turner syndrome (missing X chromosome in girls)
- Klinefelter syndrome (extra X chromosome in boys)

**How are they diagnosed?**
- Chromosome analysis (karyotype)
- Chromosomal microarray
- Sometimes detected during pregnancy`,
      keyTerms: [
        { term: "chromosome", definition: "Package of DNA containing many genes; humans normally have 46" },
        { term: "karyotype", definition: "Picture of all chromosomes arranged in order" },
        { term: "aneuploidy", definition: "Having the wrong number of chromosomes" },
      ],
      analogies: [
        "Chromosomes are like volumes in an encyclopedia set - having extra or missing volumes means the information is not complete or correct.",
        "A karyotype is like arranging books on a shelf by size - you can see if any are missing or doubled.",
      ],
      examples: [
        "Down syndrome occurs when there are 3 copies of chromosome 21 instead of 2.",
        "Turner syndrome occurs in girls who have only one X chromosome instead of two.",
      ],
    },
    2: {
      level: 2,
      summary: "Chromosomal disorders encompass numerical abnormalities (aneuploidy, polyploidy) and structural rearrangements (deletions, duplications, translocations), with phenotypes dependent on chromosomal content and gene dosage effects.",
      explanation: `Chromosomal disorders result from abnormalities in chromosome number or structure, affecting multiple genes simultaneously.

**Numerical Abnormalities:**
| Type | Description | Example |
|------|-------------|---------|
| Trisomy | Extra chromosome (47) | Down syndrome (trisomy 21) |
| Monosomy | Missing chromosome (45) | Turner syndrome (45,X) |
| Triploidy | 69 chromosomes | Usually lethal |
| Mosaicism | Mixed cell populations | Variable phenotype |

**Structural Abnormalities:**
| Type | Description | Clinical Impact |
|------|-------------|-----------------|
| Deletion | Missing segment | Gene loss |
| Duplication | Extra segment | Gene dosage increase |
| Translocation | Segment moved | May be balanced or unbalanced |
| Inversion | Segment reversed | Usually balanced |
| Ring | Circular chromosome | Variable |

**Mechanisms:**
- Nondisjunction: Chromosomes fail to separate during cell division
- Translocation: Chromosome breaks and reattaches elsewhere
- Deletion: Loss of chromosomal material

**Maternal Age Effect:**
| Age | Trisomy 21 Risk |
|-----|-----------------|
| 25 | 1 in 1,250 |
| 35 | 1 in 385 |
| 40 | 1 in 100 |
| 45 | 1 in 30 |

**Diagnosis:**
- Karyotype: Standard chromosomal analysis
- FISH: Targeted chromosome regions
- Microarray: High-resolution CNV detection`,
      keyTerms: [
        { term: "nondisjunction", definition: "Failure of chromosomes to separate during cell division" },
        { term: "translocation", definition: "Movement of chromosome segment to different location" },
        { term: "mosaicism", definition: "Presence of two genetically different cell populations" },
        { term: "balanced rearrangement", definition: "Structural change without net gain or loss of genetic material" },
      ],
      analogies: [
        "Nondisjunction is like shuffling cards incorrectly - some hands get extra cards while others are short.",
        "A balanced translocation is like rearranging furniture - everything is still there, just in different places.",
      ],
    },
    3: {
      level: 3,
      summary: "Chromosomal abnormalities produce phenotypes through gene dosage imbalance, position effects, and disruption of regulatory elements, with outcomes influenced by specific chromosomal content, mosaicism level, and associated genetic modifiers.",
      explanation: `## Mechanisms of Phenotype

### Dosage Imbalance
- Gene expression proportional to copy number
- Trisomic genes express ~150%
- Monosomic regions express ~50%
- Critical developmental genes most sensitive

### Position Effects
- Gene expression affected by chromosomal context
- Translocation breakpoints may disrupt regulation
- Genes near centromeres/telomeres affected

### Specific Chromosome Considerations

| Chromosome | Trisomy Viability | Key Features |
|------------|-------------------|--------------|
| 13 | ~10% survive to 1 year | Severe malformations |
| 18 | ~10% survive to 1 year | Multiple anomalies |
| 21 | Viable | Most common viable trisomy |
| X | Viable | Variable, often mild |
| Y | Viable (47,XYY) | Often undetected |

### Mosaicism Effects
- Phenotype correlates with proportion of abnormal cells
- Tissue distribution matters
- May be cryptic (not detected in blood)

## Detection Methods

### Karyotype
- Resolution: ~5-10 Mb
- Detects: Aneuploidy, large structural changes
- Requires: Cultured cells

### FISH
- Targeted probes
- Rapid results possible
- Limited scope

### Chromosomal Microarray (CMA)
- Resolution: ~10-100 kb
- Detects: CNVs, most aneuploidies
- Does not detect: Balanced rearrangements

### Clinical Indications for Testing
| Indication | Preferred Test |
|------------|---------------|
| Developmental delay | Microarray |
| Multiple congenital anomalies | Microarray ± karyotype |
| Suspected aneuploidy | Karyotype or microarray |
| Recurrent pregnancy loss | Parental karyotypes |`,
      keyTerms: [
        { term: "gene dosage", definition: "Effect of gene copy number on expression level and phenotype" },
        { term: "position effect", definition: "Altered gene expression due to chromosomal location change" },
        { term: "cryptic mosaicism", definition: "Mosaicism not detected in standard tissue samples" },
        { term: "CNV", definition: "Copy number variant; deletion or duplication of DNA segment" },
      ],
      clinicalNotes: "Microarray is first-line for unexplained developmental delay. Consider karyotype when balanced rearrangement suspected (recurrent losses, family history). Mosaicism may require testing multiple tissues.",
    },
    4: {
      level: 4,
      summary: "Advanced chromosomal analysis integrates genome sequencing for comprehensive variant detection, addresses complex structural rearrangements, and incorporates reproductive counseling for balanced carrier parents.",
      explanation: `## Complex Rearrangements

### Types
| Rearrangement | Detection | Reproductive Risk |
|---------------|-----------|-------------------|
| Reciprocal translocation | Karyotype | Variable unbalanced |
| Robertsonian translocation | Karyotype | Trisomy risk |
| Inversions | Karyotype | Usually low |
| Complex (≥3 breakpoints) | Multiple methods | Case-specific |

### Reproductive Counseling
- Segregation patterns
- Empiric risk data
- PGT-SR option
- Prenatal diagnosis

## Genomic Technologies

### Long-Read Sequencing
- Resolves complex rearrangements
- Detects insertions
- Phasing capability

### Optical Genome Mapping
- Structural variant detection
- No cell culture needed
- Complements other methods

## Special Situations

### Ring Chromosomes
- Variable phenotype
- Instability
- May show mosaicism

### Marker Chromosomes
- Small extra chromosomes
- Origin determination important
- Phenotype varies

### Uniparental Disomy
- Both homologs from one parent
- Imprinting disorders
- Homozygosity for recessive alleles`,
      keyTerms: [
        { term: "PGT-SR", definition: "Preimplantation genetic testing for structural rearrangements" },
        { term: "Robertsonian translocation", definition: "Fusion of two acrocentric chromosomes at centromeres" },
        { term: "marker chromosome", definition: "Small, unidentified extra chromosome" },
        { term: "uniparental disomy", definition: "Inheritance of both chromosome homologs from one parent" },
      ],
      clinicalNotes: "Robertsonian translocation carriers involving chromosome 21 have significant Down syndrome risk. PGT-SR can identify balanced embryos for translocation carriers.",
    },
    5: {
      level: 5,
      summary: "State-of-the-art chromosomal analysis leverages multi-platform integration, addresses chromothripsis and complex cancer cytogenetics, and informs prenatal management and emerging therapeutic approaches.",
      explanation: `## Multi-Platform Integration

### Comprehensive Analysis
| Platform | Contribution |
|----------|--------------|
| Karyotype | Balanced rearrangements |
| Microarray | CNV detection |
| WGS | Sequence-level breakpoints |
| Long-read | Complex SV resolution |
| OGM | Large-scale structure |

### Complex SV Characterization
- Chromothripsis: Chromosome shattering/reassembly
- Chromoanasynthesis: Replication-based rearrangements
- Chromoplexy: Chained translocations

## Prenatal Applications

### cfDNA Limitations
- Triploidy detection challenging
- Mosaicism may be missed
- Structural rearrangements not detected

### Diagnostic Indications
- Confirm positive screening
- Ultrasound anomalies
- Parental rearrangement

## Therapeutic Horizons

### Gene Therapy Considerations
- Chromosomal conditions not amenable to single-gene therapy
- Research into chromosome silencing (e.g., XIST for T21)
- Very early stage

### Prenatal Intervention
- Management of complications
- Delivery planning
- Postnatal preparation

## Cancer Cytogenetics
- Acquired chromosomal changes
- Prognostic significance
- Treatment implications`,
      keyTerms: [
        { term: "chromothripsis", definition: "Catastrophic chromosome shattering with random reassembly" },
        { term: "optical genome mapping", definition: "Technology for structural variant detection using long DNA molecules" },
        { term: "chromosome silencing", definition: "Research approach to inactivate extra chromosome" },
      ],
      clinicalNotes: "Integrate multiple platforms for comprehensive structural variant characterization. Cancer cytogenetics provides essential prognostic and therapeutic information.",
    },
  },

  media: [],
  citations: [],
  crossReferences: [
    { targetId: "concept-chromosomes", targetType: "concept", relationship: "related", label: "Chromosomes" },
    { targetId: "condition-down-syndrome", targetType: "condition", relationship: "child", label: "Down Syndrome" },
  ],
  tags: {
    systems: ["genetics"],
    topics: ["chromosomal disorders", "cytogenetics"],
    keywords: ["aneuploidy", "trisomy", "translocation", "karyotype"],
    clinicalRelevance: "high",
    examRelevance: { usmle: true, nbme: true, shelf: ["medicine", "pediatrics"] },
  },
  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

export default chromosomalDisordersOverviewContent;
