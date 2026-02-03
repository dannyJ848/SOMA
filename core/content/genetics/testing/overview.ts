/**
 * Genetic Testing Overview - Comprehensive Educational Content
 *
 * Covers types of genetic testing, technologies, applications,
 * and clinical considerations for test selection and interpretation.
 */

import { EducationalContent } from "../../types";

export const geneticTestingOverviewContent: EducationalContent = {
  id: "concept-genetic-testing-overview",
  type: "concept",
  name: "Genetic Testing Overview",
  alternateNames: ["Genetic Tests", "Genomic Testing", "DNA Testing"],

  levels: {
    1: {
      level: 1,
      summary:
        "Genetic testing examines your DNA to find changes that might affect your health, help diagnose conditions, or show if you could pass genetic conditions to your children.",
      explanation: `Genetic testing looks at your DNA - the instruction manual in your cells - to find changes that might affect your health or your family"s health.

**Why do people get genetic testing?**

- To find out if they have a genetic condition
- To learn if they might develop a condition in the future
- To see if they could pass a condition to their children
- To help doctors choose the best treatment
- To understand why a condition runs in their family

**Types of genetic tests:**

1. **Diagnostic testing**: When you already have symptoms, to find out what is causing them
2. **Predictive testing**: To learn your risk for a condition before symptoms appear
3. **Carrier testing**: To see if you carry a gene change that could affect your children
4. **Prenatal testing**: Testing during pregnancy to check the baby"s health
5. **Newborn screening**: Testing babies shortly after birth for certain treatable conditions

**How genetic testing works:**

1. A sample is collected (usually blood or saliva)
2. DNA is extracted from the sample
3. The laboratory looks for changes in the DNA
4. Results are sent to your healthcare provider
5. You discuss what the results mean for you

**What results might you get?**

- **Positive**: A genetic change was found
- **Negative**: No genetic change was found
- **Uncertain**: A change was found, but we do not know if it causes problems

**Important things to know:**

- Genetic testing is your choice
- Results may affect not just you but your family members too
- Not all genetic changes cause health problems
- Genetic counselors can help you understand results`,
      keyTerms: [
        {
          term: "genetic testing",
          definition:
            "Medical tests that look at your DNA to find changes that might affect health",
        },
        {
          term: "DNA",
          definition:
            "The instruction manual in your cells that determines how your body works",
        },
        {
          term: "carrier",
          definition:
            "Someone who has a gene change that does not affect them but could be passed to children",
        },
        {
          term: "diagnosis",
          definition:
            "Finding out what is causing health problems",
        },
      ],
      analogies: [
        "Genetic testing is like spell-checking a very long document - it looks for errors in your DNA instructions.",
        "DNA is like a recipe book with thousands of recipes; genetic testing checks if any recipes have typos.",
        "Being a carrier is like having a cookbook with an error you never use - it does not affect your cooking, but you might pass it to your children.",
      ],
      examples: [
        "A woman with breast cancer has genetic testing to see if a hereditary gene caused it.",
        "A couple planning a pregnancy gets carrier testing to see if both carry the gene for cystic fibrosis.",
        "A person whose parent had Huntington disease gets predictive testing to learn their own risk.",
      ],
    },
    2: {
      level: 2,
      summary:
        "Genetic testing encompasses diverse methodologies including sequencing, deletion/duplication analysis, and chromosomal studies, applied across diagnostic, predictive, carrier, prenatal, and pharmacogenomic contexts to inform clinical management.",
      explanation: `Genetic testing analyzes DNA, chromosomes, or gene products to identify heritable or acquired changes relevant to health and disease.

**Categories of Genetic Tests:**

| Category | Purpose | Timing |
|----------|---------|--------|
| Diagnostic | Confirm/rule out suspected condition | When symptomatic |
| Predictive/Presymptomatic | Identify future disease risk | Before symptoms |
| Carrier | Identify recessive gene carriers | Pre-conception or prenatal |
| Prenatal | Evaluate fetal genetic status | During pregnancy |
| Newborn screening | Identify treatable conditions | At birth |
| Pharmacogenomic | Guide medication selection/dosing | Before prescribing |

**Testing Technologies:**

**1. Gene Sequencing**
- Sanger sequencing: Gold standard for single genes
- Next-generation sequencing (NGS): Multiple genes simultaneously

**2. Deletion/Duplication Analysis**
- MLPA: Detects copy number changes in specific genes
- Array CGH: Genome-wide copy number analysis
- Important: Sequencing alone may miss deletions

**3. Chromosomal Analysis**
- Karyotype: Visualizes whole chromosomes
- FISH: Detects specific chromosomal regions
- Chromosomal microarray: High-resolution copy number analysis

**Test Selection Considerations:**

| Factor | Impact |
|--------|--------|
| Clinical presentation | Guides which genes/tests |
| Inheritance pattern | Single gene vs. panel vs. exome |
| Family history | Targeted vs. broad testing |
| Availability | Some tests not available everywhere |
| Cost and coverage | Insurance considerations |
| Turnaround time | Urgent vs. routine |

**Result Interpretation:**

| Result | Meaning | Next Steps |
|--------|---------|------------|
| Positive (Pathogenic) | Disease-causing variant found | Management based on condition |
| Likely Pathogenic | Probable disease-causing | Manage as positive |
| VUS | Uncertain significance | Do not change management |
| Likely Benign | Probably not disease-causing | Manage as negative |
| Negative | No variant found | Consider clinical management, other testing |

**Quality Considerations:**

- CLIA-certified laboratory
- Analytical validity (technical accuracy)
- Clinical validity (disease association)
- Clinical utility (impacts management)`,
      keyTerms: [
        {
          term: "next-generation sequencing",
          definition:
            "Technology that sequences multiple genes or entire genome simultaneously",
          pronunciation: "NGS",
        },
        {
          term: "karyotype",
          definition:
            "Visual display of an individual\"s chromosomes arranged by size and pattern",
          pronunciation: "KAIR-ee-oh-type",
        },
        {
          term: "VUS",
          definition:
            "Variant of Uncertain Significance; DNA change with unknown clinical impact",
        },
        {
          term: "CLIA",
          definition:
            "Clinical Laboratory Improvement Amendments; federal standards for laboratory testing",
        },
        {
          term: "analytical validity",
          definition:
            "How accurately a test detects the genetic change it is designed to find",
        },
      ],
      analogies: [
        "NGS is like searching many books at once instead of one page at a time.",
        "A VUS is like finding an unfamiliar word in a recipe - it might be important or just an unusual spelling.",
        "CLIA certification is like a restaurant health inspection - it ensures the lab meets quality standards.",
      ],
    },
    3: {
      level: 3,
      summary:
        "Comprehensive genetic testing utilizes targeted sequencing, multi-gene panels, exome/genome analysis, and chromosomal methods with test selection guided by clinical indication, expected diagnostic yield, variant interpretation frameworks, and evidence-based management implications.",
      explanation: `## Testing Methodologies

### Sequencing Approaches

**Sanger Sequencing:**
- Single gene/exon analysis
- High accuracy for point mutations
- Limited throughput
- Gold standard for confirmation

**Next-Generation Sequencing (NGS):**

| Type | Coverage | Application |
|------|----------|-------------|
| Targeted panel | Specific genes | Known phenotype |
| Clinical exome | ~5,000 genes | Diagnostic odyssey |
| Whole exome (WES) | ~20,000 genes | Broad approach |
| Whole genome (WGS) | All DNA | Most comprehensive |

**NGS Considerations:**
- Depth of coverage affects sensitivity
- Variant calling algorithms vary
- GC-rich and repetitive regions challenging
- Pseudogene interference possible

### Copy Number Analysis

**Methods:**
| Method | Resolution | Application |
|--------|------------|-------------|
| MLPA | Gene/exon level | Single gene CNV |
| Array CGH | ~10-100 kb | Genome-wide CNV |
| SNP array | ~10-100 kb | CNV + ROH detection |
| WGS | Single nucleotide | Comprehensive |

**Regions of Homozygosity (ROH):**
- Indicates consanguinity or uniparental disomy
- Guides AR gene analysis

### Chromosomal Studies

**Karyotype:**
- Resolution: 5-10 Mb
- Detects: Aneuploidy, translocations, large deletions/duplications
- Requires dividing cells

**Chromosomal Microarray (CMA):**
- Resolution: 10-100 kb
- Detects: CNVs, most aneuploidies
- Does not detect: Balanced translocations, low-level mosaicism

**FISH:**
- Targeted specific regions
- Detects: Aneuploidy, specific microdeletions
- Rapid turnaround

## Test Selection Framework

### Diagnostic Algorithm

\`\`\`
Clinical Presentation
        ↓
Specific Diagnosis Suspected?
    ↓ Yes                    ↓ No
Single gene/Panel        Exome/Genome
    ↓                        ↓
Positive? → Management   Positive? → Management
    ↓ No                     ↓ No
Expand testing          Phenotype-driven reanalysis
\`\`\`

### Yield Considerations

| Test Type | Approximate Yield | Indication |
|-----------|-------------------|------------|
| Single gene | 10-50% | Classic presentation |
| Gene panel | 15-40% | Genetically heterogeneous |
| WES | 25-40% | Undiagnosed, multi-system |
| WGS | 30-50% | Comprehensive analysis |

## Variant Interpretation

### ACMG/AMP Classification

| Category | Description | Clinical Action |
|----------|-------------|-----------------|
| Pathogenic | Disease-causing | Act on finding |
| Likely Pathogenic | >90% probability | Act on finding |
| VUS | Uncertain | Do not act; monitor |
| Likely Benign | <10% probability | Reassuring |
| Benign | Not disease-causing | Reassuring |

### Evidence Types

**Pathogenic:**
- Population frequency (absent or very rare)
- Computational predictions (multiple algorithms)
- Functional studies (if available)
- Segregation with disease
- De novo occurrence
- Well-established gene-disease association

### Challenging Variants

| Type | Challenge | Approach |
|------|-----------|----------|
| Missense | Many per exome | Multi-evidence evaluation |
| Splice site | Variable effect | In silico prediction, RNA studies |
| VUS | High number | Careful counseling; monitor reclassification |
| Novel gene | Limited evidence | Research collaboration |

## Quality Assurance

### Laboratory Standards

**Requirements:**
- CLIA certification
- CAP accreditation (often)
- State licensure (e.g., NY)
- Proficiency testing

### Reporting Standards

**Essential Elements:**
- Methodology description
- Genes/regions analyzed
- Limitations stated
- Variant classification
- Clinical interpretation
- Recommendations`,
      keyTerms: [
        {
          term: "whole exome sequencing",
          definition:
            "Sequencing of protein-coding regions of all genes (~20,000 genes)",
          pronunciation: "WES",
        },
        {
          term: "ACMG/AMP",
          definition:
            "American College of Medical Genetics/Association for Molecular Pathology; developed variant classification guidelines",
        },
        {
          term: "depth of coverage",
          definition:
            "Number of times each DNA position is read; higher coverage increases sensitivity",
        },
        {
          term: "regions of homozygosity",
          definition:
            "Stretches of DNA where both chromosomes are identical; suggests shared ancestry",
        },
        {
          term: "diagnostic yield",
          definition:
            "Percentage of tested individuals who receive a definitive diagnosis",
        },
        {
          term: "phenotype-driven reanalysis",
          definition:
            "Re-examination of sequencing data guided by updated clinical information",
        },
      ],
      clinicalNotes:
        "Always consider deletion/duplication analysis when sequencing is negative. Document variant classification and source. VUS should not change clinical management but should be tracked for reclassification. Periodic reanalysis of negative exome/genome studies may increase yield.",
    },
    4: {
      level: 4,
      summary:
        "Advanced genetic testing integration encompasses multi-platform strategies, emerging technologies, somatic-germline intersection, health system implementation, and variant curation infrastructure to optimize diagnostic and therapeutic applications.",
      explanation: `## Advanced Testing Strategies

### Multi-Platform Approach

**Sequential Testing:**
\`\`\`
Clinical Assessment → Targeted Test → Panel → Exome → Genome → Research
\`\`\`

**Parallel Testing:**
- When urgency requires
- Example: Critical newborn with suspected genetic condition

**Reflex Testing:**
- Automatic progression based on initial results
- Example: IHC → MLH1 methylation → Germline testing

### Emerging Technologies

**Long-Read Sequencing:**
| Feature | Advantage |
|---------|-----------|
| Read length | 10-100+ kb |
| Repeat expansion | Direct visualization |
| Structural variants | Improved detection |
| Phasing | Determines cis/trans |
| Methylation | Direct detection |

**Applications:**
- Repeat expansion disorders (HD, FMR1)
- Structural variant characterization
- Pharmacogenomics haplotyping
- Epigenetic analysis

**Optical Genome Mapping:**
- Ultra-long DNA visualization
- Structural variant detection
- Karyotype-level resolution
- Does not require cell culture

### RNA Sequencing

**Applications:**
| Use | Information Gained |
|-----|-------------------|
| Splice variant validation | Aberrant splicing detection |
| Expression analysis | Reduced expression from NMD |
| Fusion detection | Gene rearrangements |
| Allelic expression | Imbalance detection |

**Considerations:**
- Tissue-specific expression
- Sample handling critical
- Interpretation complexity

## Somatic-Germline Interface

### Tumor Profiling

**Platforms:**
- Large panel NGS (200-500+ genes)
- WES/WGS of tumor
- ctDNA panels

**Germline Implications:**
| Finding | Follow-up |
|---------|-----------|
| Suspected germline variant | Constitutional confirmation |
| High VAF pathogenic variant | May indicate germline |
| Positive family history | Germline testing regardless |

### Liquid Biopsy

**Circulating Tumor DNA (ctDNA):**
- Tumor profiling without biopsy
- Monitoring treatment response
- Minimal residual disease
- Resistance detection

**Challenges:**
- Sensitivity varies by tumor burden
- Germline/CHIP distinction
- False negatives with low shedding

## Variant Curation Infrastructure

### ClinVar and Beyond

**Resources:**
| Database | Content |
|----------|---------|
| ClinVar | Variant-disease assertions |
| ClinGen | Gene-disease validity |
| OMIM | Mendelian disease catalog |
| GnomAD | Population frequencies |
| HGMD | Published mutations |

### Expert Curation

**Gene-Specific Efforts:**
- Expert panels (ClinGen VCEPs)
- Specified evidence criteria
- Curated assertions

**Variant Reclassification:**
- Frequency: 5-10% per year
- Mostly VUS → Benign
- Important to track and communicate

## Implementation Considerations

### Health System Integration

**Key Components:**
| Component | Function |
|-----------|----------|
| EHR integration | Result delivery, alerts |
| Clinical decision support | Management recommendations |
| Variant tracking | Reclassification monitoring |
| Cascade management | Family testing coordination |

### Cost-Effectiveness

**Factors:**
- Diagnostic yield vs. cost per diagnosis
- Downstream healthcare savings
- Family cascade testing value
- Avoid diagnostic odyssey

**Evidence:**
- WES increasingly cost-effective for diagnostic odyssey
- First-line WES/WGS emerging for some indications

### Turnaround Time

| Test | Typical TAT |
|------|-------------|
| Single gene | 1-3 weeks |
| Panel | 2-4 weeks |
| Exome | 4-12 weeks |
| Rapid genome | 1-7 days |

### Reanalysis Programs

**Triggers:**
- New gene-disease associations
- Variant reclassification
- Updated phenotype
- Family testing results

**Yield:**
- Additional 10-15% diagnoses with systematic reanalysis
- Optimal interval: 1-3 years

## Special Populations

### Pediatric Testing

**Considerations:**
| Scenario | Approach |
|----------|----------|
| Critically ill neonate | Rapid genome |
| Developmental delay | Microarray ± WES |
| Metabolic | Targeted biochemical + genetic |

### Prenatal Testing

**Modalities:**
| Test | Resolution | Timing |
|------|------------|--------|
| cfDNA screening | Aneuploidy | 10+ weeks |
| CVS | Diagnostic | 10-13 weeks |
| Amniocentesis | Diagnostic | 15+ weeks |

### Deceased Individuals

**Considerations:**
- Sample availability (archived tissue, blood)
- Informed consent issues
- Family implications
- Correlation with autopsy findings`,
      keyTerms: [
        {
          term: "long-read sequencing",
          definition:
            "NGS technology producing reads of 10kb or longer, improving structural variant detection",
        },
        {
          term: "optical genome mapping",
          definition:
            "Technology visualizing ultra-long DNA molecules for structural variant detection",
        },
        {
          term: "CHIP",
          definition:
            "Clonal Hematopoiesis of Indeterminate Potential; acquired somatic mutations in blood cells",
        },
        {
          term: "ClinGen",
          definition:
            "Clinical Genome Resource; NIH-funded initiative curating gene-disease relationships",
        },
        {
          term: "variant allele frequency",
          definition:
            "Proportion of sequencing reads containing a variant; helps distinguish somatic/germline",
        },
        {
          term: "rapid genome",
          definition:
            "Expedited whole genome sequencing with 1-7 day turnaround for critically ill patients",
        },
      ],
      clinicalNotes:
        "Consider long-read sequencing for suspected repeat expansion disorders with negative standard testing. Implement systematic variant reclassification tracking. For tumor testing, always confirm suspected germline findings with dedicated constitutional testing. Rapid genome sequencing for NICU/PICU patients increasingly supported by evidence and coverage.",
    },
    5: {
      level: 5,
      summary:
        "State-of-the-art genetic testing encompasses population-scale genomic initiatives, artificial intelligence-enhanced interpretation, multi-omic integration, global data sharing frameworks, and precision medicine applications with focus on health equity and ethical implementation.",
      explanation: `## Population-Scale Genomics

### Large-Scale Initiatives

| Program | Scope | Goals |
|---------|-------|-------|
| All of Us | 1M+ participants | Precision medicine research |
| UK Biobank | 500K participants | Disease associations |
| gnomAD | 140K+ exomes | Population frequencies |
| TOPMed | 100K+ genomes | Rare variant catalogs |

**Applications:**
- Reference frequency databases
- Novel gene discovery
- Population-specific variation
- Ancestry-informed interpretation

### Return of Results at Scale

**Challenges:**
| Challenge | Approach |
|-----------|----------|
| Volume | Tiered/automated return |
| Interpretation | AI-assisted review |
| Counseling | Alternative delivery models |
| Follow-up | Health system coordination |

### Pharmacogenomics at Scale

**Pre-emptive Testing Programs:**
- Panel testing at healthcare entry
- EHR integration for lifetime use
- Point-of-care applications
- Population health impact

## Artificial Intelligence Applications

### Variant Interpretation

**Current Tools:**
| Tool | Application |
|------|-------------|
| AlphaMissense | Missense pathogenicity |
| SpliceAI | Splice prediction |
| PrimateAI | Conservation-based |
| CADD | Integrated deleteriousness |

**Integration:**
- Multiple algorithm consensus
- Evidence type weighting
- Expert review remains essential

### Phenotype Extraction

**NLP Applications:**
- HPO term extraction from notes
- Syndrome matching
- Research cohort identification

### Image Analysis

| Application | Use |
|-------------|-----|
| Facial analysis | Syndrome recognition |
| Pathology | Variant-histology correlation |
| Radiology | Phenotype characterization |

## Multi-Omic Integration

### Beyond DNA

| Data Type | Information |
|-----------|-------------|
| Transcriptomics | Expression, splicing |
| Proteomics | Protein levels, modifications |
| Metabolomics | Metabolic pathways |
| Epigenomics | Methylation, chromatin |

### Integrated Interpretation

**Approach:**
1. Genomic variants identified
2. Functional validation layers
3. Concordance assessment
4. Clinical correlation

**Example: Methylation Analysis**
- Confirms pathogenicity of regulatory variants
- Detects imprinting disorders
- Episignatures for syndrome diagnosis

## Global Data Sharing

### Frameworks

| Network | Function |
|---------|----------|
| GA4GH | Standards development |
| ClinVar | Variant aggregation |
| Matchmaker Exchange | Patient matching |
| DECIPHER | CNV sharing |

### Challenges

| Issue | Approach |
|-------|----------|
| Privacy | Federated queries |
| Consent | Dynamic consent models |
| Standards | Ontology harmonization |
| Equity | Diverse data inclusion |

## Precision Medicine Implementation

### Diagnostic Applications

**Efficiency Gains:**
- First-line WES/WGS increasingly supported
- Reduced diagnostic odyssey
- Healthcare cost reduction

**Quality Metrics:**
| Metric | Target |
|--------|--------|
| Diagnostic yield | 40-50% |
| Time to diagnosis | Reduced |
| Unnecessary tests avoided | Quantifiable |

### Therapeutic Applications

**Gene-Targeted Therapies:**
| Approach | Example |
|----------|---------|
| Gene replacement | Zolgensma (SMA) |
| Antisense oligonucleotides | Nusinersen (SMA) |
| Gene editing | Casgevy (SCD) |
| Variant-specific | Trikafta (CF) |

### Clinical Trial Matching

- Variant-based eligibility
- Basket/umbrella trial designs
- N-of-1 approaches

## Health Equity Considerations

### Access Disparities

| Barrier | Impact |
|---------|--------|
| Insurance coverage | Testing uptake |
| Provider availability | Counseling access |
| Geographic | Testing accessibility |
| Language/culture | Information access |

### Data Diversity

**Current Gaps:**
- Reference databases primarily European
- Higher VUS rates in underrepresented groups
- Model performance varies by ancestry

**Solutions:**
- Diverse cohort enrollment
- Community engagement
- Ancestry-specific resources
- Equity-focused implementation

## Future Directions

### Emerging Applications

| Technology | Application |
|------------|-------------|
| Single-cell sequencing | Mosaicism detection |
| Spatial transcriptomics | Tissue-level analysis |
| Nanopore portable | Point-of-care |
| Universal newborn screening | WGS at birth proposals |

### Regulatory Evolution

**FDA Considerations:**
- Laboratory-developed tests
- AI/ML-based tools
- Direct-to-consumer oversight
- Companion diagnostics

### Implementation Science

**Research Priorities:**
- Outcomes assessment
- Implementation strategies
- Cost-effectiveness
- Equity measurement

## Ethical Considerations

### Data Governance

| Issue | Framework |
|-------|-----------|
| Ownership | Patient control models |
| Secondary use | Consent frameworks |
| Commercial use | Benefit sharing |
| International transfer | Regulatory compliance |

### Incidental Findings Evolution

**Ongoing Debates:**
- Scope of reportable findings
- Patient choice architecture
- Recontact obligations
- Research vs. clinical distinctions`,
      keyTerms: [
        {
          term: "federated query",
          definition:
            "Data analysis approach where queries are sent to distributed databases without centralizing raw data",
        },
        {
          term: "episignature",
          definition:
            "DNA methylation pattern characteristic of specific genetic syndromes",
        },
        {
          term: "GA4GH",
          definition:
            "Global Alliance for Genomics and Health; develops data sharing standards",
        },
        {
          term: "AlphaMissense",
          definition:
            "AI model predicting pathogenicity of missense variants using deep learning",
        },
        {
          term: "Matchmaker Exchange",
          definition:
            "Network enabling matching of patients with similar phenotypes and genotypes across databases",
        },
        {
          term: "N-of-1 trial",
          definition:
            "Clinical trial design for single patient with unique genetic condition",
        },
      ],
      clinicalNotes: `Implementation priorities:
1. Advocate for first-line WES/WGS when appropriate based on diagnostic yield evidence
2. Participate in data sharing networks to improve interpretation
3. Track AI tool performance in local population
4. Implement systematic reanalysis programs
5. Address equity in testing access and result interpretation
6. Prepare for gene-targeted therapy matching as treatments expand
7. Engage with evolving regulatory frameworks
8. Contribute to outcomes research to demonstrate value`,
    },
  },

  media: [
    {
      id: "genetic-testing-types",
      type: "diagram",
      filename: "genetic-testing-types.svg",
      title: "Types of Genetic Testing",
      description:
        "Overview of different genetic testing categories and applications",
    },
    {
      id: "variant-classification",
      type: "diagram",
      filename: "variant-classification.svg",
      title: "ACMG/AMP Variant Classification",
      description:
        "Visual guide to the five-tier variant classification system",
    },
  ],

  citations: [
    {
      id: "richards-2015",
      type: "article",
      title:
        "Standards and guidelines for the interpretation of sequence variants",
      authors: ["Richards, S.", "et al."],
      source: "Genetics in Medicine",
      chapter: "17",
      page: "405-424",
    },
    {
      id: "acmg-testing",
      type: "website",
      title: "ACMG Practice Guidelines",
      source: "American College of Medical Genetics and Genomics",
      url: "https://www.acmg.net",
    },
  ],

  crossReferences: [
    {
      targetId: "concept-diagnostic-testing",
      targetType: "concept",
      relationship: "child",
      label: "Diagnostic Genetic Testing",
    },
    {
      targetId: "concept-predictive-testing",
      targetType: "concept",
      relationship: "child",
      label: "Predictive Genetic Testing",
    },
    {
      targetId: "concept-carrier-screening",
      targetType: "concept",
      relationship: "child",
      label: "Carrier Screening",
    },
    {
      targetId: "concept-genetic-counseling-overview",
      targetType: "concept",
      relationship: "related",
      label: "Genetic Counseling",
    },
  ],

  tags: {
    systems: ["genetics"],
    topics: [
      "genetic testing",
      "genomics",
      "variant interpretation",
      "precision medicine",
    ],
    keywords: [
      "NGS",
      "exome",
      "genome",
      "variant classification",
      "ACMG",
    ],
    clinicalRelevance: "critical",
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ["medicine", "pediatrics"],
    },
  },

  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

export default geneticTestingOverviewContent;
