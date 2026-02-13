/**
 * Diagnostic Genetic Testing - Comprehensive Educational Content
 */

import { EducationalContent } from "../../types";

export const diagnosticTestingContent: EducationalContent = {
  id: "concept-diagnostic-testing",
  type: "concept",
  name: "Diagnostic Genetic Testing",
  alternateNames: ["Confirmatory Testing", "Diagnostic Genomics"],

  levels: {
    1: {
      level: 1,
      summary: "Diagnostic genetic testing helps find the cause of symptoms or health problems you already have by looking for changes in your genes.",
      explanation: `When you have symptoms of a health condition, doctors sometimes use genetic testing to find out the exact cause. This is called diagnostic testing.

**When is diagnostic testing used?**
- To confirm or rule out a suspected genetic condition
- When symptoms suggest a condition that can be caused by gene changes
- When doctors need to know the exact genetic cause to plan treatment
- When a child has developmental delays or birth defects

**How does it work?**
1. A doctor recognizes symptoms that might be caused by a genetic condition
2. A sample (usually blood) is collected
3. The laboratory examines specific genes related to the symptoms
4. Results show if there is a genetic explanation

**What can results tell you?**
- **Positive result**: A genetic cause was found, which confirms the diagnosis
- **Negative result**: No genetic cause was found in the genes tested (but other causes are still possible)
- **Uncertain result**: A change was found but it is not clear if it causes the condition

**Why is this important?**
Finding the genetic cause can:
- End the search for a diagnosis
- Help predict what to expect
- Guide treatment choices
- Show if other family members might be at risk`,
      keyTerms: [
        { term: "diagnostic testing", definition: "Genetic tests done to find the cause of symptoms a person already has" },
        { term: "diagnosis", definition: "Identifying the specific condition causing health problems" },
        { term: "symptoms", definition: "Signs of a health problem, like pain or delayed development" },
      ],
      analogies: [
        "Diagnostic testing is like being a detective - you have clues (symptoms) and you are looking for the culprit (genetic cause).",
        "It is like finding out exactly why a car is not running well, so you can fix the right part.",
      ],
      examples: [
        "A child with muscle weakness gets tested to see if they have a genetic form of muscular dystrophy.",
        "An adult with unusual heart rhythms gets genetic testing to find if there is a hereditary cause.",
      ],
    },
    2: {
      level: 2,
      summary: "Diagnostic genetic testing confirms or identifies the etiology of clinical features by detecting pathogenic variants in genes associated with the patient\"s phenotype, guiding prognosis and management.",
      explanation: `Diagnostic genetic testing is performed in individuals with symptoms or clinical findings suggestive of a genetic condition.

**Indications:**
| Clinical Scenario | Testing Approach |
|-------------------|------------------|
| Classic presentation | Single gene or small panel |
| Non-specific features | Broad panel or exome |
| Dysmorphic features | Chromosomal microarray ± exome |
| Metabolic presentation | Biochemical + targeted genetic |

**Testing Strategy:**
1. Clinical evaluation and phenotyping
2. Test selection based on differential diagnosis
3. Result interpretation in clinical context
4. Management based on molecular diagnosis

**Benefits of Molecular Diagnosis:**
- Ends diagnostic odyssey
- Informs prognosis
- Guides treatment selection
- Enables family cascade testing
- Provides reproductive options information
- Connects to support resources

**Result Interpretation:**
| Finding | Interpretation |
|---------|---------------|
| Pathogenic variant | Explains phenotype |
| Negative | Phenocopy, untested gene, or non-genetic |
| VUS | Cannot confirm diagnosis |

**Diagnostic Yield:**
Varies by phenotype and testing approach:
- Single gene (classic presentation): 30-70%
- Gene panel: 15-40%
- Exome sequencing: 25-40%`,
      keyTerms: [
        { term: "phenotype", definition: "The observable characteristics or symptoms of a condition", pronunciation: "FEE-no-type" },
        { term: "diagnostic odyssey", definition: "Prolonged journey through multiple tests and specialists before diagnosis" },
        { term: "molecular diagnosis", definition: "Identification of the specific genetic cause of a condition" },
        { term: "phenocopy", definition: "A condition that looks like a genetic disorder but has a different cause" },
      ],
      analogies: [
        "A molecular diagnosis is like finding the exact broken part in a complex machine.",
        "The diagnostic odyssey is like wandering through a maze - genetic testing can provide the map.",
      ],
    },
    3: {
      level: 3,
      summary: "Diagnostic genetic testing employs phenotype-driven test selection, integrating clinical exome/genome sequencing for heterogeneous presentations, with interpretation requiring correlation of variant pathogenicity with clinical features.",
      explanation: `## Diagnostic Approach

### Phenotype-Driven Testing
1. Detailed clinical characterization (HPO terms)
2. Differential diagnosis development
3. Evidence-based test selection
4. Iterative refinement based on results

### Testing Modalities
| Test | Indication | Yield |
|------|------------|-------|
| Single gene | Classic phenotype | 30-70% |
| Gene panel | Heterogeneous condition | 15-40% |
| Exome | Undiagnosed, multi-system | 25-40% |
| Genome | Comprehensive need | 30-50% |
| Microarray | Developmental delay, MCA | 15-20% |

### Interpretation Framework
**Clinical Correlation Required:**
- Does variant explain phenotype?
- Is gene-disease association established?
- Does inheritance pattern fit?
- Are all features explained?

**Partial Diagnoses:**
- Variant explains some but not all features
- Consider dual diagnoses (5-7% of diagnosed cases)

## Special Considerations

### Mosaicism
- May explain milder or atypical presentation
- Requires deep sequencing for detection
- Tissue-specific testing may be needed

### De Novo Variants
- Common in developmental disorders (~40%)
- Trio testing (proband + parents) helpful
- Recurrence risk usually low (gonadal mosaicism consideration)`,
      keyTerms: [
        { term: "HPO terms", definition: "Human Phenotype Ontology; standardized vocabulary for describing clinical features" },
        { term: "trio testing", definition: "Sequencing patient and both parents simultaneously to identify inheritance" },
        { term: "dual diagnosis", definition: "Two separate genetic conditions contributing to phenotype in same individual" },
        { term: "mosaicism", definition: "Presence of two genetically different cell populations in one individual" },
      ],
      clinicalNotes: "Consider trio exome/genome for sporadic severe phenotypes - higher diagnostic yield and variant interpretation accuracy. Negative testing should prompt reconsideration of phenotype and potential reanalysis.",
    },
    4: {
      level: 4,
      summary: "Advanced diagnostic testing integrates multi-platform approaches, functional validation strategies, and systematic reanalysis protocols to maximize diagnostic yield while addressing complex inheritance patterns and novel gene discoveries.",
      explanation: `## Advanced Diagnostic Strategies

### Multi-Platform Integration
| Platform | Complement |
|----------|------------|
| Short-read NGS | Copy number, structural |
| Long-read | Repeat expansions, complex SV |
| RNA-seq | Splice validation |
| Methylation | Episignature confirmation |

### Diagnostic Odyssey Analysis
**When Initial Testing Negative:**
1. Re-phenotype with updated clinical data
2. Review for missed variant types
3. Reanalyze with updated gene-disease knowledge
4. Consider research collaboration
5. Plan periodic reanalysis

### Functional Validation
**When Needed:**
- VUS in candidate gene
- Novel gene with limited evidence
- Unexpected phenotype correlation

**Methods:**
- Patient cell studies
- Model organism validation
- In vitro functional assays

### Health System Implementation
- EHR variant tracking
- Systematic reanalysis programs
- Multidisciplinary review
- Patient communication of updates`,
      keyTerms: [
        { term: "functional validation", definition: "Laboratory studies demonstrating variant impact on gene/protein function" },
        { term: "reanalysis", definition: "Re-examination of existing genomic data with updated knowledge" },
        { term: "structural variant", definition: "Large-scale DNA changes including deletions, duplications, inversions, translocations" },
      ],
      clinicalNotes: "Systematic reanalysis of negative exome/genome cases yields additional 10-15% diagnoses over time. Document phenotype updates to improve future analysis.",
    },
    5: {
      level: 5,
      summary: "State-of-the-art diagnostic testing leverages AI-enhanced interpretation, international data sharing, rapid sequencing for critically ill patients, and gene therapy eligibility assessment in a precision medicine framework.",
      explanation: `## Cutting-Edge Diagnostics

### Rapid Diagnostics
**Critically Ill Patients:**
- Rapid whole genome: 24-72 hours
- Demonstrated impact on NICU/PICU management
- Cost-effectiveness supported by evidence
- Insurance coverage expanding

### AI Integration
| Application | Tool Examples |
|-------------|--------------|
| Variant prioritization | Exomiser, AMELIE |
| Phenotype matching | Face2Gene, PEDIA |
| Splicing prediction | SpliceAI |
| Literature mining | Automated curation |

### Gene Therapy Readiness
**Eligibility Assessment:**
- Variant type compatibility
- Irreversibility assessment
- Trial availability matching
- Timing considerations

### Research Translation
- N-of-1 trials for ultra-rare
- Gene-specific treatment development
- Regulatory pathways for individualized therapy

### Outcome Metrics
| Metric | Target |
|--------|--------|
| Diagnostic yield | 40-50% |
| Time to diagnosis | Minimized |
| Clinical impact | Documented |
| Family satisfaction | Measured |`,
      keyTerms: [
        { term: "rapid whole genome", definition: "Expedited genomic analysis with 24-72 hour turnaround for critically ill patients" },
        { term: "N-of-1 trial", definition: "Experimental treatment trial designed for single patient with unique condition" },
        { term: "gene therapy eligibility", definition: "Assessment of whether patient\"s genetic variant type is amenable to gene-targeted treatment" },
      ],
      clinicalNotes: "Rapid genome sequencing in NICU/PICU changes management in 30-40% of diagnosed cases. Maintain variant-level detail in records for future gene therapy matching.",
    },
  },

  media: [],
  citations: [],
  crossReferences: [
    { targetId: "concept-genetic-testing-overview", targetType: "concept", relationship: "parent", label: "Genetic Testing Overview" },
  ],
  tags: {
    systems: ["genetics"],
    topics: ["genetic testing", "diagnosis"],
    keywords: ["diagnostic testing", "exome", "genome"],
    clinicalRelevance: "high",
    examRelevance: { usmle: true, nbme: true, shelf: ["medicine", "pediatrics"] },
  },
  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

export default diagnosticTestingContent;
