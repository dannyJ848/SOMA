/**
 * Mutations and Variants - Comprehensive Educational Content
 *
 * Covers types of genetic mutations, variant classification,
 * and the relationship between genotype and phenotype.
 */

import { EducationalContent } from '../../types';

export const mutationsAndVariantsContent: EducationalContent = {
  id: 'concept-mutations-variants',
  type: 'concept',
  name: 'Mutations and Variants',
  alternateNames: ['Genetic Variants', 'DNA Mutations', 'Sequence Variants'],

  levels: {
    1: {
      level: 1,
      summary: 'Mutations are changes in DNA that can sometimes cause differences in how our bodies work.',
      explanation: `A mutation is a change in the DNA code - like a typo in a recipe book. Just like a typo might change a recipe, a mutation can change the instructions for how your body works.

Some mutations are harmful - they can cause diseases. But many mutations don't cause any problems at all. Some mutations can even be helpful!

There are different types of changes that can happen:

1. **Substitution**: One letter gets swapped for another (like spelling "cat" as "bat")
2. **Deletion**: A letter or letters get removed (like spelling "cat" as "ct")
3. **Insertion**: Extra letters get added (like spelling "cat" as "caat")

Everyone has thousands of small differences in their DNA compared to other people. Most of these differences don't cause any health problems - they just make us unique, like having different eye colors or hair colors.

Scientists now often use the word "variant" instead of "mutation." A variant just means "different from most people." Whether a variant causes problems depends on where it is in your DNA and what change it makes.`,
      keyTerms: [
        { term: 'mutation', definition: 'A change in the DNA code' },
        { term: 'variant', definition: 'Any difference in DNA compared to the most common version' },
        { term: 'harmful', definition: 'A change that can cause health problems' },
        { term: 'benign', definition: 'A change that doesn\'t cause any health problems' },
      ],
      analogies: [
        'A mutation is like a typo in a recipe - sometimes it doesn\'t matter, sometimes it ruins the dish.',
        'Our DNA is like a very long book, and variants are like having slightly different editions.',
        'Substitution is like autocorrect changing one word for another.',
      ],
      examples: [
        'A mutation in the gene for skin color can give you freckles.',
        'A mutation in a gene called CFTR can cause cystic fibrosis.',
        'Many people have a variant that makes them unable to roll their tongue.',
      ],
    },
    2: {
      level: 2,
      summary: 'Genetic variants range from single nucleotide changes to large chromosomal rearrangements, with clinical significance determined by their effect on protein function.',
      explanation: `Genetic variants are differences in DNA sequence between individuals. They range from single base changes to large structural alterations.

**Types of Variants**

**Point Mutations (Single Nucleotide Variants):**

| Type | Effect | Example |
|------|--------|---------|
| Silent/Synonymous | No amino acid change | Same protein made |
| Missense | Different amino acid | May alter protein function |
| Nonsense | Creates stop codon | Truncated protein |

**Small Insertions/Deletions (Indels):**
- If not divisible by 3: Frameshift mutation (shifts reading frame)
- If divisible by 3: In-frame insertion/deletion

**Larger Variants:**
- Copy number variants (CNVs): Deletions or duplications
- Inversions: DNA segment flipped
- Translocations: DNA moved between chromosomes

**Variant Classification**

Medical geneticists classify variants into five categories:
1. **Pathogenic**: Causes disease
2. **Likely pathogenic**: Probably causes disease
3. **Uncertain significance (VUS)**: Not enough information
4. **Likely benign**: Probably harmless
5. **Benign**: Harmless

**Factors Affecting Impact:**

- **Location**: In a gene vs. between genes
- **Type of change**: Loss of function vs. gain of function
- **Conservation**: Is this position the same across species?
- **Frequency**: Rare variants more likely to be harmful
- **Inheritance pattern**: Dominant disorders need only one copy

**Polymorphism vs. Mutation**

Historically:
- Polymorphism: Common variant (>1% frequency)
- Mutation: Rare variant, often disease-causing

Now "variant" is preferred for all, with pathogenicity classified separately.`,
      keyTerms: [
        { term: 'missense mutation', definition: 'Point mutation causing one amino acid to be replaced by another' },
        { term: 'nonsense mutation', definition: 'Point mutation creating a premature stop codon' },
        { term: 'frameshift mutation', definition: 'Insertion or deletion that shifts the reading frame of the gene' },
        { term: 'copy number variant', definition: 'Deletion or duplication of a segment of DNA' },
        { term: 'variant of uncertain significance', definition: 'Variant without enough evidence to classify as pathogenic or benign' },
        { term: 'polymorphism', definition: 'Common genetic variant present in >1% of the population', pronunciation: 'pol-ee-MOR-fiz-um' },
      ],
      analogies: [
        'A missense mutation is like changing one word in a sentence - it might still make sense or could be confusing.',
        'A nonsense mutation is like putting a period in the middle of a sentence. Everything after gets lost.',
        'A frameshift is like removing one letter from a sentence of 3-letter words: "THE CAT SAT" becomes "TEC ATS AT."',
      ],
    },
    3: {
      level: 3,
      summary: 'Variant pathogenicity depends on molecular consequences including protein stability, enzymatic activity, splicing effects, and regulatory element function, evaluated through computational prediction and functional assays.',
      explanation: `## Molecular Consequences of Variants

### Coding Sequence Variants

**Missense Variants:**
- Conservative: Similar amino acid properties (e.g., Leu→Ile)
- Non-conservative: Different properties (e.g., Gly→Glu)
- Critical residues: Active sites, binding domains, structural elements

**Nonsense/Frameshift:**
- Premature termination codon (PTC)
- Often triggers nonsense-mediated decay (NMD)
- If near C-terminus, may escape NMD → truncated protein

**Splicing Variants:**
| Location | Effect |
|----------|--------|
| Canonical splice sites (GT/AG) | Exon skipping, intron retention |
| Branch point | Exon skipping |
| Exonic splicing enhancers | Altered exon recognition |
| Deep intronic | Cryptic exon activation |

### Non-Coding Variants

**Regulatory Elements:**
- Promoter: Altered transcription factor binding
- Enhancers: Reduced/increased expression
- 5' UTR: Translation efficiency, uORFs
- 3' UTR: mRNA stability, miRNA binding

**Structural Elements:**
- Chromatin boundaries: TAD disruption
- Replication origins: DNA replication effects

## Variant Classification Framework (ACMG/AMP)

### Evidence Categories

**Pathogenic Evidence:**
- PVS1: Null variant in gene where LOF is mechanism
- PS1-4: Strong (functional studies, de novo, etc.)
- PM1-6: Moderate (critical domain, absent in controls, etc.)
- PP1-5: Supporting (segregation, computational, etc.)

**Benign Evidence:**
- BA1: Population frequency >5%
- BS1-4: Strong (frequency, functional, etc.)
- BP1-7: Supporting (in-frame, silent, etc.)

### Classification Rules

| Classification | Evidence Required |
|----------------|-------------------|
| Pathogenic | 1 Very Strong + 1 Strong; or 2 Strong |
| Likely Pathogenic | 1 Very Strong + 1 Moderate; or 1 Strong + 1-2 Moderate |
| Uncertain Significance | Insufficient/conflicting evidence |
| Likely Benign | 1 Strong + 1 Supporting; or 2 Supporting |
| Benign | 1 Stand-alone; or 2 Strong |

## Computational Prediction Tools

| Tool | Basis | Application |
|------|-------|-------------|
| SIFT | Sequence conservation | Missense tolerance |
| PolyPhen-2 | Conservation + structure | Missense pathogenicity |
| CADD | Machine learning, multiple features | General pathogenicity |
| SpliceAI | Deep learning | Splicing effects |
| REVEL | Ensemble method | Missense pathogenicity |

## Population Databases

- gnomAD: >140,000 exomes, >76,000 genomes
- ClinVar: Clinical variant interpretations
- LOVD: Gene-specific databases
- HGMD: Human Gene Mutation Database`,
      keyTerms: [
        { term: 'nonsense-mediated decay', definition: 'Surveillance pathway degrading mRNAs with premature stop codons', pronunciation: 'NMD' },
        { term: 'loss of function', definition: 'Variant eliminating or severely reducing normal gene/protein activity' },
        { term: 'ACMG criteria', definition: 'American College of Medical Genetics guidelines for variant classification' },
        { term: 'allele frequency', definition: 'Proportion of chromosomes carrying a specific variant in a population' },
        { term: 'gnomAD', definition: 'Genome Aggregation Database; large population variant reference' },
        { term: 'ClinVar', definition: 'NIH database of clinically relevant variants and interpretations' },
      ],
      clinicalNotes: 'VUS reports should not typically change clinical management but may warrant periodic reclassification review. Population databases have historically underrepresented non-European populations, affecting interpretation accuracy.',
    },
    4: {
      level: 4,
      summary: 'Advanced variant interpretation integrates genomic context, functional genomics data, disease mechanism knowledge, and evolving classification frameworks for clinical application.',
      explanation: `## Mechanism-Based Interpretation

### Loss of Function (LOF) vs. Gain of Function (GOF)

**LOF Mechanisms:**
- Haploinsufficiency: One functional copy insufficient
- Dominant negative: Mutant protein interferes with wild-type
- Compound heterozygosity in recessive disorders

**GOF Mechanisms:**
- Constitutive activation (oncogenes)
- Toxic gain (repeat expansions, misfolding)
- Altered specificity/regulation

**Interpretation Implications:**
| Mechanism | Truncating Variants | Missense Variants |
|-----------|---------------------|-------------------|
| Haploinsufficiency | Usually pathogenic | Domain-dependent |
| GOF | Often tolerated | Specific hotspots |
| Dominant negative | May be pathogenic | Specific mutations |

### Penetrance and Expressivity

**Incomplete Penetrance Factors:**
- Genetic modifiers
- Environmental interactions
- Sex-limited/influenced expression
- Age-dependent penetrance

**Variable Expressivity:**
- Same genotype → different phenotypes
- Somatic mosaicism effects
- Modifier genes
- Stochastic factors

## Functional Assays

### In Vitro Approaches

| Assay | Readout | Applicable Genes |
|-------|---------|------------------|
| Enzyme activity | Biochemical function | Metabolic enzymes |
| Binding assays | Protein interactions | Receptors, transcription factors |
| Trafficking | Subcellular localization | Membrane proteins |
| Splicing minigene | mRNA processing | Any gene |

### High-Throughput Functional Genomics

**Saturation Genome Editing:**
- Introduce all possible variants
- Measure phenotype (survival, growth)
- Assign functional scores
- Examples: BRCA1, TP53, LDLR

**Massively Parallel Reporter Assays:**
- Test regulatory element variants
- Measure transcriptional output
- Scale: Thousands of variants

## Somatic vs. Germline

### Key Differences

| Feature | Germline | Somatic |
|---------|----------|---------|
| Inheritance | Heritable | Not inherited |
| Tissue distribution | All cells | Subset of cells |
| Classification systems | ACMG/AMP | AMP/ASCO/CAP |
| Actionability focus | Prevention, screening | Treatment selection |

### Somatic Variant Considerations

**Tumor-Specific Factors:**
- Tumor purity
- Variant allele frequency
- Clonality assessment
- Driver vs. passenger

**Actionability Tiers:**
1. FDA-approved therapy, same cancer type
2. Standard of care therapy, different cancer type
3. Clinical trial eligibility
4. Preclinical evidence

## Special Variant Classes

### Repeat Expansions

| Disorder | Gene | Repeat | Pathogenic Threshold |
|----------|------|--------|---------------------|
| Huntington | HTT | CAG | >36 |
| Fragile X | FMR1 | CGG | >200 (full mutation) |
| Myotonic dystrophy 1 | DMPK | CTG | >50 |
| Friedreich ataxia | FXN | GAA | >66 (homozygous) |

**Detection Challenges:**
- Standard NGS may miss long repeats
- Specialized assays required (RP-PCR, Southern)
- Long-read sequencing increasingly useful

### Copy Number Variants

**Size-Dependent Interpretation:**
- Large CNVs: Gene content analysis
- Small CNVs: Exon-level impact
- Complex CNVs: Breakpoint analysis

**Dosage Sensitivity:**
- Haploinsufficiency scores (pLI, LOEUF)
- Triplosensitivity scores
- ClinGen dosage sensitivity curation`,
      keyTerms: [
        { term: 'haploinsufficiency', definition: 'Condition where one functional gene copy is insufficient for normal phenotype', pronunciation: 'hap-loh-in-suf-FISH-en-see' },
        { term: 'dominant negative', definition: 'Mutant protein interfering with wild-type protein function' },
        { term: 'penetrance', definition: 'Proportion of individuals with pathogenic variant who express the phenotype' },
        { term: 'saturation genome editing', definition: 'Systematic testing of all possible variants in a gene region' },
        { term: 'pLI score', definition: 'Probability of being loss-of-function intolerant; indicates haploinsufficiency likelihood' },
        { term: 'variant allele frequency', definition: 'Proportion of reads supporting variant vs. reference allele' },
      ],
      clinicalNotes: 'Somatic testing should always consider germline implications for variants in cancer predisposition genes. Functional data increasingly incorporated into clinical classification but requires careful interpretation of assay relevance.',
    },
    5: {
      level: 5,
      summary: 'Clinical variant interpretation requires integration of evolving databases, functional genomics, precision medicine applications, and awareness of health equity implications in genetic testing.',
      explanation: `## Precision Medicine Applications

### Pharmacogenomic Variants

**High-Evidence Gene-Drug Pairs (CPIC):**
| Gene | Drug | Variant Effect | Clinical Action |
|------|------|----------------|-----------------|
| CYP2D6 | Codeine | Poor metabolizer | Avoid (no analgesia) |
| CYP2C19 | Clopidogrel | Poor metabolizer | Alternative antiplatelet |
| TPMT | 6-MP, azathioprine | Reduced activity | Dose reduction |
| HLA-B*5701 | Abacavir | Hypersensitivity | Contraindicated |
| DPYD | 5-FU, capecitabine | Reduced activity | Dose reduction |

**Implementation Challenges:**
- Star allele nomenclature complexity
- Structural variants in CYP2D6
- Population-specific alleles
- Drug interaction effects

### Somatic Variants in Oncology

**Therapeutic Targeting:**
| Variant | Cancer(s) | Therapy |
|---------|-----------|---------|
| EGFR exon 19del, L858R | NSCLC | Osimertinib |
| BRAF V600E | Melanoma, CRC | Vemurafenib + cobimetinib |
| ALK fusions | NSCLC | Alectinib, lorlatinib |
| BRCA1/2 | Breast, ovarian, prostate | PARP inhibitors |
| NTRK fusions | Solid tumors | Larotrectinib, entrectinib |

**Resistance Mutations:**
- Acquired during therapy
- Guide subsequent treatment
- Examples: EGFR T790M, BRCA reversions

## Emerging Interpretation Frameworks

### Variant Curation Expert Panels (VCEPs)

**ClinGen VCEPs:**
- Gene-specific rule modifications
- Incorporate disease mechanism knowledge
- Improve classification consistency
- Examples: BRCA, Lynch syndrome genes, RASopathies

**VCEP Specification Process:**
1. Define gene-disease validity
2. Establish LOF as mechanism (or not)
3. Specify pathogenic domains
4. Set population frequency thresholds
5. Define functional assay standards

### Machine Learning Approaches

**Deep Learning Models:**
- AlphaMissense: Protein structure-based prediction
- PrimateAI: Primate conservation patterns
- ESM-1b: Protein language models
- EVE: Evolutionary model of variant effect

**Challenges:**
- Training data biases
- Interpretability limitations
- Calibration with clinical evidence
- Regulatory acceptance

## Health Equity Considerations

### Population Database Disparities

**gnomAD v4 Representation:**
| Population | Proportion | Clinical Impact |
|------------|------------|-----------------|
| European | ~50% | Well-represented |
| African | ~20% | Improving |
| Latino | ~15% | Improving |
| East Asian | ~10% | Moderate |
| South Asian | ~5% | Limited |

**Consequences:**
- VUS more common in underrepresented populations
- Benign variants misclassified as pathogenic
- Population-specific pathogenic variants missed

### Addressing Disparities

**Data Generation:**
- All of Us Research Program
- H3Africa
- GenomeAsia 100K
- Population-specific sequencing initiatives

**Clinical Practice:**
- Population-matched frequency assessment
- Caution with race-based adjustments
- Ancestry-informed interpretation

## Reinterpretation and Recontact

### Triggers for Reclassification

- New functional evidence
- Population data updates
- Family segregation information
- ClinVar/VCEP updates

### Variant Tracking Systems

**Laboratory Responsibilities:**
- Periodic reclassification assessment
- Updated ClinVar submissions
- Recontact policies

**Clinical Implications:**
- VUS → Pathogenic: May change management
- VUS → Benign: Resolve uncertainty
- Pathogenic → VUS/Benign: Reconsider diagnosis

### Patient Communication

**Best Practices:**
- Pre-test counseling includes reinterpretation possibility
- Systems for tracking variant status
- Clear recontact mechanisms
- Genetic counselor involvement`,
      keyTerms: [
        { term: 'ClinGen', definition: 'Clinical Genome Resource; NIH-funded consortium for genomic/clinical data curation' },
        { term: 'VCEP', definition: 'Variant Curation Expert Panel; develops gene-specific classification criteria' },
        { term: 'AlphaMissense', definition: 'Deep learning model predicting missense variant pathogenicity using protein structure' },
        { term: 'All of Us', definition: 'NIH precision medicine initiative collecting diverse population genomic data' },
        { term: 'pharmacogenomics', definition: 'Study of how genetic variation affects drug response', pronunciation: 'farm-ah-koh-jen-OM-iks' },
        { term: 'recontact', definition: 'Process of informing patients/providers when variant classification changes' },
      ],
      clinicalNotes: `Critical points for practice:
1. VUS rates higher in non-European populations - interpret cautiously
2. Pharmacogenomic testing increasingly pre-emptive, not reactive
3. ClinVar aggregates interpretations but quality varies
4. Machine learning predictions are supportive, not stand-alone evidence
5. Reinterpretation responsibilities evolving - document clearly
6. Consider referral to genetics when variant interpretation is unclear`,
    },
  },

  media: [
    {
      id: 'mutation-types',
      type: 'diagram',
      filename: 'mutation-types.svg',
      title: 'Types of Point Mutations',
      description: 'Silent, missense, nonsense, and frameshift mutations illustrated',
    },
    {
      id: 'acmg-classification',
      type: 'diagram',
      filename: 'acmg-classification.svg',
      title: 'ACMG Variant Classification',
      description: 'Five-tier classification system with evidence criteria',
    },
  ],

  citations: [
    {
      id: 'richards-2015',
      type: 'article',
      title: 'Standards and Guidelines for the Interpretation of Sequence Variants',
      authors: ['Richards, S.', 'Aziz, N.', 'Bale, S.', 'et al.'],
      source: 'Genetics in Medicine',
      chapter: '17',
      page: '405-424',
    },
    {
      id: 'karczewski-2020',
      type: 'article',
      title: 'The Mutational Constraint Spectrum Quantified from Variation in 141,456 Humans',
      authors: ['Karczewski, K.J.', 'et al.'],
      source: 'Nature',
      chapter: '581',
      page: '434-443',
    },
  ],

  crossReferences: [
    { targetId: 'concept-dna-structure', targetType: 'concept', relationship: 'parent', label: 'DNA Structure' },
    { targetId: 'concept-gene-expression', targetType: 'concept', relationship: 'related', label: 'Gene Expression' },
    { targetId: 'concept-genetic-testing', targetType: 'concept', relationship: 'related', label: 'Genetic Testing' },
  ],

  tags: {
    systems: ['genetics'],
    topics: ['molecular genetics', 'variant interpretation', 'clinical genetics'],
    keywords: ['mutation', 'variant', 'pathogenicity', 'ACMG', 'classification'],
    clinicalRelevance: 'critical',
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

export default mutationsAndVariantsContent;
