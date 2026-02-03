/**
 * Complex Inheritance - Comprehensive Educational Content
 */

import { EducationalContent } from "../../types";

export const complexInheritanceContent: EducationalContent = {
  id: "concept-complex-inheritance",
  type: "concept",
  name: "Complex Inheritance",
  alternateNames: ["Multifactorial Inheritance", "Polygenic Inheritance", "Non-Mendelian Inheritance"],

  levels: {
    1: {
      level: 1,
      summary: "Complex inheritance describes conditions caused by a combination of multiple genes and environmental factors, explaining why many common diseases run in families but do not follow simple inheritance patterns.",
      explanation: `Many health conditions are caused by a combination of several genes working together, plus environmental factors. This is called complex or multifactorial inheritance.

**What makes it different from simple inheritance?**
- Multiple genes involved, not just one
- Environment plays a role (diet, exercise, exposures)
- Does not follow predictable patterns like dominant or recessive
- Risk increases with affected family members but is not as clear-cut

**Common examples:**
- Heart disease
- Type 2 diabetes
- High blood pressure
- Most cancers
- Asthma and allergies
- Mental health conditions

**How do we know risk?**
- More affected relatives = higher risk
- Closer relatives affected = higher risk
- Early-onset in relatives = higher risk
- But exact risk is hard to calculate

**What you can do:**
- Cannot change your genes
- CAN modify environmental factors
- Healthy lifestyle reduces risk
- Screening and early detection help`,
      keyTerms: [
        { term: "complex inheritance", definition: "Conditions caused by multiple genes plus environmental factors" },
        { term: "multifactorial", definition: "Involving many factors, both genetic and environmental" },
        { term: "polygenic", definition: "Involving multiple genes rather than just one" },
        { term: "environmental factors", definition: "Non-genetic influences like diet, exercise, and exposures" },
      ],
      analogies: [
        "Complex inheritance is like a recipe needing many ingredients - the final dish depends on all of them, not just one.",
        "Risk for complex diseases is like weather forecasting - we can estimate likelihood but cannot predict exactly what will happen.",
        "Genes load the gun, but environment pulls the trigger - you inherit risk, but lifestyle choices affect whether disease develops.",
      ],
      examples: [
        "Type 2 diabetes runs in families, but diet and exercise strongly affect whether someone develops it.",
        "A person with several family members who had heart attacks is at higher risk but can reduce that risk through lifestyle changes.",
      ],
    },
    2: {
      level: 2,
      summary: "Complex inheritance involves multiple genetic variants with small effects interacting with environmental factors, resulting in continuous trait distributions and empiric recurrence risks based on family history patterns.",
      explanation: `Complex traits result from the combined effects of multiple genes (polygenic) and environmental factors (multifactorial).

**Characteristics:**
| Feature | Simple Mendelian | Complex |
|---------|------------------|---------|
| Genes involved | One | Many (often 100s+) |
| Effect size | Large | Small per variant |
| Inheritance pattern | Predictable | Not clear-cut |
| Environmental role | Usually minimal | Significant |
| Recurrence risk | Calculable | Empiric |

**Genetic Architecture:**
- Many variants with small effects
- Some may have moderate effects
- Variants often common in population
- Heritability measures genetic contribution

**Recurrence Risk Factors:**
| Factor | Effect on Risk |
|--------|----------------|
| Number of affected relatives | Higher = more risk |
| Closeness of relationship | Closer = more risk |
| Severity in relative | More severe = more risk |
| Age of onset | Earlier = more risk |
| Sex (for some conditions) | Rarer sex affected = more risk |

**Common Complex Conditions:**
| Condition | Heritability | Key Environmental Factors |
|-----------|--------------|---------------------------|
| Type 2 diabetes | 40-70% | Diet, obesity, activity |
| Coronary artery disease | 40-60% | Diet, smoking, activity |
| Schizophrenia | 60-80% | In utero factors, cannabis |
| Hypertension | 30-50% | Salt, obesity, activity |
| Autism | 60-90% | Variable/unclear |

**Threshold Model:**
- Liability = genetic + environmental factors
- Disease occurs when threshold exceeded
- Explains discontinuous (yes/no) phenotypes from continuous liability`,
      keyTerms: [
        { term: "heritability", definition: "Proportion of phenotypic variation attributable to genetic factors" },
        { term: "empiric recurrence risk", definition: "Risk estimates based on observed family data, not calculated from genetics" },
        { term: "liability threshold", definition: "Model where disease occurs when combined genetic/environmental burden exceeds threshold" },
        { term: "polygenic risk score", definition: "Sum of risk variant effects predicting disease risk" },
      ],
      analogies: [
        "The liability threshold is like filling a bucket - disease occurs when the bucket (threshold) overflows.",
        "Heritability is like the nature portion of nature vs. nurture - it tells us how much genes contribute, not whether a specific person will be affected.",
      ],
    },
    3: {
      level: 3,
      summary: "Complex trait genetics integrates GWAS-identified variants, polygenic scores, gene-environment interactions, and missing heritability concepts to understand disease architecture and predict individual risk.",
      explanation: `## Genetic Architecture

### Variant Discovery
**GWAS (Genome-Wide Association Studies):**
- Identify common variants associated with traits
- Usually small effect sizes (OR 1.1-1.5)
- Statistical significance threshold: p < 5×10⁻⁸
- Thousands of loci for many traits

### Variant Types
| Type | MAF | Effect | Contribution |
|------|-----|--------|--------------|
| Common (GWAS) | >5% | Small | ~30% heritability |
| Low frequency | 0.5-5% | Small-moderate | Variable |
| Rare | <0.5% | Larger | Case-specific |

### Missing Heritability
- GWAS explains fraction of heritability
- Remaining variance attributed to:
  - Rare variants
  - Structural variants
  - Gene-gene interactions
  - Gene-environment interactions
  - Overestimated heritability

## Polygenic Risk Scores (PRS)

### Construction
\`\`\`
PRS = Σ (effect size × genotype) for all variants
\`\`\`

### Applications
| Application | Status |
|-------------|--------|
| Research | Established |
| Stratification | Growing |
| Clinical use | Emerging |

### Limitations
- Ancestry specificity
- Limited discrimination at individual level
- Environmental factors not captured
- Best for population stratification

## Gene-Environment Interaction

### Concepts
| Term | Definition |
|------|------------|
| Gene-environment interaction (G×E) | Genetic effect differs by environment |
| Gene-environment correlation | Genotype influences environment exposure |
| Epigenetics | Environmental effects on gene expression |

### Examples
| Condition | Gene | Environment | Interaction |
|-----------|------|-------------|-------------|
| Lung cancer | Multiple | Smoking | Multiplicative |
| T2D | TCF7L2 | Diet/obesity | Enhanced risk |
| PTSD | FKBP5 | Trauma | Epigenetic changes |

## Recurrence Risk Estimation

### Empiric Data
| Relationship | Typical Risk (varies by condition) |
|--------------|-----------------------------------|
| General population | 1-5% (depending on condition) |
| First-degree relative affected | 2-10× population |
| Multiple affected relatives | Higher |

### Threshold Model Implications
- Risk increases non-linearly with affected relatives
- Sex-limited threshold differences (e.g., pyloric stenosis)`,
      keyTerms: [
        { term: "GWAS", definition: "Genome-wide association study; identifies variants associated with traits" },
        { term: "missing heritability", definition: "Gap between estimated heritability and variance explained by known variants" },
        { term: "gene-environment interaction", definition: "Genetic effect that varies depending on environmental exposure" },
        { term: "MAF", definition: "Minor allele frequency; how common a variant is in the population" },
      ],
      clinicalNotes: "PRS have limited individual predictive value - best for population stratification. Consider gene-environment interactions in counseling. Empiric risks are population averages - individual risk may differ.",
    },
    4: {
      level: 4,
      summary: "Advanced complex trait genetics addresses PRS clinical implementation challenges, Mendelian randomization for causal inference, population stratification issues, and integration with clinical risk factors.",
      explanation: `## PRS Clinical Translation

### Current Applications
| Setting | Use | Evidence |
|---------|-----|----------|
| CAD | Risk stratification | Growing |
| Breast cancer | Modifying BRCA risk | Emerging |
| Research | Phenotype prediction | Established |

### Implementation Challenges
| Challenge | Issue |
|-----------|-------|
| Ancestry transferability | European-derived PRS perform poorly in other populations |
| Clinical utility | Added value over clinical factors often modest |
| Communication | How to explain probabilistic risk |
| Actionability | What to do with result |

### Validation Requirements
- Independent cohorts
- Multi-ancestry validation
- Clinical utility assessment
- Implementation studies

## Causal Inference

### Mendelian Randomization
- Uses genetic variants as instrumental variables
- Exploits random allocation at conception
- Infers causality of risk factors

### Applications
| Question | Finding |
|----------|---------|
| LDL → CAD | Causal |
| BMI → T2D | Causal |
| HDL → CAD | Not clearly causal |
| Vitamin D → diseases | Complex |

## Population Genetics Considerations

### Stratification
- Population structure confounds associations
- Principal components used for adjustment
- Ancestry-specific analyses important

### Admixed Populations
- Multiple ancestry contributions
- Local ancestry can affect risk
- Complex PRS application

## Integration Approaches

### Combined Risk Models
| Component | Example |
|-----------|---------|
| Clinical factors | Age, sex, smoking, BP |
| Family history | Number and closeness |
| Biomarkers | Lipids, glucose |
| Genetics | PRS |

### Improvement Assessment
- C-statistic change
- Net reclassification improvement
- Clinical utility analysis`,
      keyTerms: [
        { term: "Mendelian randomization", definition: "Method using genetic variants to infer causal relationships" },
        { term: "population stratification", definition: "Confounding from population substructure affecting genetic associations" },
        { term: "ancestry-specific PRS", definition: "Polygenic score developed and validated in specific ancestral population" },
        { term: "net reclassification improvement", definition: "Measure of how well a new risk factor improves classification" },
      ],
      clinicalNotes: "PRS adds modest value to clinical risk factors for most conditions. Ancestry mismatch is major limitation of current PRS. Mendelian randomization supports many clinical risk factor interventions. Combined models likely more useful than genetics alone.",
    },
    5: {
      level: 5,
      summary: "State-of-the-art complex trait genetics integrates multi-ancestry genomics, whole genome approaches, systems biology, and precision prevention frameworks while addressing equity in genomic medicine.",
      explanation: `## Multi-Ancestry Genomics

### Diversity Initiatives
| Program | Focus |
|---------|-------|
| All of Us | US diverse populations |
| H3Africa | African genomics |
| PAGE | Multi-ethnic cohorts |
| GenomeAsia | Asian populations |

### Trans-Ancestry Methods
- Meta-analysis across populations
- Fine-mapping improvement
- Multi-ancestry PRS development
- Ancestry-specific discovery

## Whole Genome Approaches

### Beyond Common Variants
| Approach | Target | Status |
|----------|--------|--------|
| WGS | Rare variants | Growing |
| Structural variants | CNVs, inversions | Emerging |
| Regulatory variants | Non-coding effects | Research |

### Integrative Analysis
- Gene-based tests
- Pathway analysis
- Network approaches
- Multi-omic integration

## Precision Prevention

### Risk Stratification
| Risk Category | Intervention |
|---------------|--------------|
| High genetic risk | Enhanced screening, intensive prevention |
| Moderate risk | Standard prevention, consider screening |
| Low risk | General population recommendations |

### Examples in Practice
| Condition | Genetic Component | Prevention Strategy |
|-----------|-------------------|---------------------|
| CAD | PRS | Statins, lifestyle based on combined risk |
| Breast cancer | PRS + monogenic | Screening intensity, chemoprevention |
| T2D | PRS | Lifestyle intervention targeting |

## Systems Biology

### Beyond Individual Variants
- Gene regulatory networks
- Protein interaction networks
- Metabolic pathways
- Cell type specificity

### Applications
- Drug target identification
- Mechanism understanding
- Biomarker discovery

## Equity Considerations

### Current Gaps
| Issue | Impact |
|-------|--------|
| Discovery bias | Most GWAS in Europeans |
| PRS performance | Worse in non-Europeans |
| Clinical implementation | Benefits not equally distributed |

### Solutions
- Diversify research cohorts
- Develop ancestry-specific tools
- Community engagement
- Equitable implementation frameworks

## Future Directions

### Technologies
- Large biobanks
- Long-read sequencing
- Single-cell genomics
- Spatial transcriptomics

### Clinical Integration
- EHR-linked genomics
- Decision support
- Dynamic risk updating
- Feedback loops for improvement`,
      keyTerms: [
        { term: "trans-ancestry", definition: "Analysis combining data across multiple ancestral populations" },
        { term: "multi-omic integration", definition: "Combining genomic, transcriptomic, proteomic, and other data types" },
        { term: "precision prevention", definition: "Tailoring preventive strategies to individual genetic and environmental risk" },
        { term: "discovery bias", definition: "Over-representation of certain populations in genetic discovery, limiting generalizability" },
      ],
      clinicalNotes: "Address ancestry limitations when discussing PRS with patients. Combined clinical-genetic models likely more useful than genetics alone. Advocate for diverse research participation. Precision prevention is emerging but requires validation.",
    },
  },

  media: [],
  citations: [],
  crossReferences: [
    { targetId: "concept-autosomal-dominant", targetType: "concept", relationship: "sibling", label: "Autosomal Dominant" },
    { targetId: "concept-autosomal-recessive", targetType: "concept", relationship: "sibling", label: "Autosomal Recessive" },
  ],
  tags: {
    systems: ["genetics"],
    topics: ["inheritance patterns", "polygenic", "complex traits"],
    keywords: ["multifactorial", "polygenic risk score", "GWAS", "heritability"],
    clinicalRelevance: "high",
    examRelevance: { usmle: true, nbme: true, shelf: ["medicine"] },
  },
  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

export default complexInheritanceContent;
