/**
 * Huntington Disease - Comprehensive Educational Content
 */

import { EducationalContent } from "../../../types";

export const huntingtonDiseaseContent: EducationalContent = {
  id: "condition-huntington-disease",
  type: "condition",
  name: "Huntington Disease",
  alternateNames: ["HD", "Huntington\"s Chorea", "Huntington Disease"],
  hpoId: "HP:0002072",

  levels: {
    1: {
      level: 1,
      summary: "Huntington disease is an inherited brain disorder that causes progressive loss of movement control, thinking ability, and psychiatric symptoms, usually starting in middle adulthood.",
      explanation: `Huntington disease (HD) is a genetic condition that affects the brain. It gradually worsens over time.

**What happens in HD?**
- Parts of the brain slowly break down
- Causes problems with movement, thinking, and emotions
- Usually starts between ages 30-50
- Progresses over 15-20 years

**Main symptoms:**
- Involuntary movements (chorea)
- Difficulty walking and balance
- Trouble thinking and making decisions
- Personality changes, depression, irritability

**How is it inherited?**
- Caused by a mutation in the HTT gene
- Autosomal dominant - only one copy needed
- If a parent has HD, each child has a 50% chance

**Important to know:**
- Presymptomatic testing is available
- Decision to test is personal and complex
- No cure yet, but treatments help symptoms
- Research is actively ongoing`,
      keyTerms: [
        { term: "Huntington disease", definition: "Inherited brain disease causing movement, thinking, and psychiatric problems" },
        { term: "chorea", definition: "Involuntary, jerky movements seen in HD", pronunciation: "kor-EE-ah" },
        { term: "presymptomatic testing", definition: "Genetic testing before symptoms appear to learn if you have the gene" },
      ],
      analogies: [
        "HD is like a program error in the brain\"s software - it causes the system to slowly malfunction.",
        "Presymptomatic testing is like learning tomorrow\"s weather years in advance - some want to know, others prefer not to.",
      ],
      examples: [
        "A 40-year-old notices involuntary movements and difficulty at work - testing confirms HD.",
        "A person whose parent had HD decides after much thought to have presymptomatic testing.",
      ],
    },
    2: {
      level: 2,
      summary: "Huntington disease is an autosomal dominant neurodegenerative disorder caused by CAG repeat expansion in the HTT gene, with a triad of motor, cognitive, and psychiatric symptoms and complex implications for predictive testing.",
      explanation: `Huntington disease affects approximately 1 in 10,000 people worldwide.

**Genetics:**
| Repeat Length | Status |
|---------------|--------|
| <27 CAG | Normal |
| 27-35 CAG | Intermediate (may expand in offspring) |
| 36-39 CAG | Reduced penetrance |
| ≥40 CAG | Full penetrance |

**Clinical Triad:**
| Domain | Features |
|--------|----------|
| Motor | Chorea, dystonia, rigidity, bradykinesia |
| Cognitive | Executive dysfunction, dementia |
| Psychiatric | Depression, apathy, irritability, OCD |

**Disease Stages:**
1. Presymptomatic: Gene positive, no symptoms
2. Prodromal: Subtle changes
3. Early: Independent living possible
4. Moderate: Needs assistance
5. Advanced: Full care required

**Anticipation:**
- CAG repeats may expand through generations
- Longer repeats = earlier onset
- Paternal transmission: Greater expansion risk

**Testing Considerations:**
| Type | Purpose |
|------|---------|
| Diagnostic | Confirm symptomatic individuals |
| Presymptomatic | At-risk individuals, extensive counseling |
| Prenatal | PGT-M or CVS/amniocentesis |`,
      keyTerms: [
        { term: "CAG repeat", definition: "DNA sequence repeated multiple times; expansion causes HD" },
        { term: "anticipation", definition: "Earlier onset and/or increased severity in successive generations" },
        { term: "penetrance", definition: "Proportion of individuals with mutation who develop disease" },
        { term: "bradykinesia", definition: "Slowness of movement seen in later HD" },
      ],
      analogies: [
        "CAG repeats are like a stuttering record - when it stutters too many times, the music becomes distorted.",
        "Anticipation is like a snowball rolling downhill - it can get bigger with each generation.",
      ],
    },
    3: {
      level: 3,
      summary: "Huntington disease pathogenesis involves mutant huntingtin protein aggregation, selective striatal neurodegeneration, and complex CAG repeat-disease relationships, with presymptomatic testing following established genetic counseling protocols.",
      explanation: `## Molecular Pathogenesis

### Huntingtin Protein
- Ubiquitously expressed
- Mutant form: Polyglutamine (polyQ) expansion
- Gain of toxic function
- Aggregate formation

### Neuropathology
- Striatum (caudate, putamen) primarily affected
- Medium spiny neurons most vulnerable
- Cortical atrophy progressive
- Characteristic intranuclear inclusions

### Disease Mechanisms
| Pathway | Effect |
|---------|--------|
| Protein aggregation | Cellular toxicity |
| Transcription dysregulation | Gene expression changes |
| Mitochondrial dysfunction | Energy failure |
| Excitotoxicity | Glutamate toxicity |

## Genotype-Phenotype

### Repeat Length Correlation
| CAG | Approximate Onset Age |
|-----|----------------------|
| 40-50 | ~45 years |
| 50-60 | ~35 years |
| >60 | ~20 years (juvenile HD) |

### Juvenile HD
- Onset <20 years
- Usually paternal transmission
- Rigidity > chorea
- Seizures common

## Presymptomatic Testing Protocol

### Guidelines (Based on HD Society)
1. Initial contact and information
2. Neurological examination
3. Psychological assessment
4. Genetic counseling sessions
5. Decision and support
6. Result disclosure (if proceeds)
7. Follow-up

### Exclusions/Deferrals
- Major psychiatric instability
- Coercion
- Minor (generally defer)
- Testing at-risk parent before child

## Management

### Symptomatic Treatment
| Symptom | Options |
|---------|---------|
| Chorea | Tetrabenazine, deutetrabenazine |
| Depression | SSRIs |
| Irritability | Mood stabilizers, atypicals |
| Cognitive | Supportive strategies |`,
      keyTerms: [
        { term: "huntingtin protein", definition: "Protein encoded by HTT gene; mutant form causes HD" },
        { term: "striatum", definition: "Brain region (caudate and putamen) primarily affected in HD" },
        { term: "polyglutamine", definition: "Chain of glutamine amino acids; expanded in HD and related diseases" },
        { term: "tetrabenazine", definition: "Medication depleting dopamine to reduce chorea" },
      ],
      clinicalNotes: "Presymptomatic testing requires careful multi-session protocol. Exclude psychiatric instability before proceeding. Testing minors generally deferred. Partner/support person involvement essential.",
    },
    4: {
      level: 4,
      summary: "Advanced HD management addresses biomarker-guided clinical trials, emerging disease-modifying therapies, complex predictive testing scenarios, and comprehensive family planning options.",
      explanation: `## Disease-Modifying Research

### HTT-Lowering Strategies
| Approach | Mechanism | Status |
|----------|-----------|--------|
| ASO (antisense) | mRNA degradation | Phase 3 |
| RNAi | Gene silencing | Phase 1/2 |
| Zinc finger repressors | Transcription block | Preclinical |
| CRISPR | Gene editing | Preclinical |

### Biomarkers
| Biomarker | Use |
|-----------|-----|
| CSF NfL | Neurodegeneration marker |
| MRI volumetry | Disease progression |
| Mutant huntingtin | Target engagement |

### Trial Design
- Premanifest and early symptomatic
- Long duration required
- Functional outcomes

## Complex Testing Scenarios

### Non-Disclosure Testing
- Patient at risk from untested parent
- Uses linkage analysis
- Preserves parental autonomy

### Intermediate Alleles
- Counseling challenges
- Expansion risk to offspring
- Limited personal risk

### Prenatal Options
| Option | Timing | Information |
|--------|--------|-------------|
| PGT-M | Pre-implantation | Direct testing |
| CVS/Amnio | 10-15+ weeks | Direct testing |
| Exclusion | Either | Uses linkage, 50% uninformative |

## Comprehensive Care

### Multidisciplinary Team
- Neurology
- Psychiatry
- Physical therapy
- Speech therapy
- Nutrition
- Social work
- Genetics

### Advance Care Planning
- Early discussions
- Progressive communication needs
- End-of-life preferences`,
      keyTerms: [
        { term: "antisense oligonucleotide", definition: "Synthetic nucleotide reducing mutant huntingtin production" },
        { term: "NfL", definition: "Neurofilament light chain; marker of neurodegeneration" },
        { term: "non-disclosure testing", definition: "Testing approach preserving parental autonomy when parent has not tested" },
        { term: "exclusion testing", definition: "Prenatal test using linkage without revealing parental status" },
      ],
      clinicalNotes: "HTT-lowering therapies are the most promising disease-modifying approach but trials ongoing. Non-disclosure testing requires specialized genetic counseling. Advance care planning crucial given progressive nature.",
    },
    5: {
      level: 5,
      summary: "State-of-the-art HD care integrates emerging gene therapy approaches, precision trial enrollment, advocacy and research networks, and ethical frameworks for presymptomatic populations in the context of potential disease modification.",
      explanation: `## Gene Therapy Horizon

### Current Landscape
| Therapy | Target | Phase |
|---------|--------|-------|
| Tominersen | Total HTT | Phase 3 (paused) |
| WVE-003 | Mutant HTT selective | Phase 1/2 |
| AMT-130 | Gene silencing | Phase 1/2 |

### Lessons Learned
- Allele selectivity important
- Safety considerations
- Patient selection
- Biomarker guidance

### Future Approaches
- In vivo gene editing
- Allele-selective targeting
- Combination approaches

## Precision Medicine

### Stratification
| Factor | Use |
|--------|-----|
| CAG length | Progression rate |
| CAG-age product | Predicted onset |
| Biomarkers | Trial selection |
| Genetic modifiers | Risk refinement |

### Modifier Genes
- MSH3, FAN1: DNA repair genes
- May affect age of onset
- Research applications

## Research Networks

### Organizations
- HDSA (Huntington\"s Disease Society of America)
- EHDN (European HD Network)
- Enroll-HD (global observational study)

### Patient Participation
- Observational studies
- Clinical trials
- Biobank contributions

## Ethical Considerations

### Presymptomatic Testing in Therapy Era
- May shift toward testing if treatment available
- Preserve autonomy
- Informed decision-making

### Equity and Access
- Global therapy access
- Insurance implications
- Support for gene-positive individuals

### Communication
- Managing hope and uncertainty
- Trial result communication
- Family implications`,
      keyTerms: [
        { term: "allele-selective", definition: "Targeting only the mutant HTT allele while preserving normal" },
        { term: "CAG-age product", definition: "Measure estimating disease progression based on repeat length and age" },
        { term: "Enroll-HD", definition: "Global observational study of HD tracking natural history" },
      ],
      clinicalNotes: "Encourage participation in Enroll-HD and clinical trials. HTT-lowering therapies show promise but results mixed. Allele-selective approaches may improve safety. Support informed decision-making about presymptomatic testing as therapeutic landscape evolves.",
    },
  },

  media: [],
  citations: [],
  crossReferences: [
    { targetId: "concept-autosomal-dominant", targetType: "concept", relationship: "related", label: "Autosomal Dominant Inheritance" },
    { targetId: "concept-predictive-testing", targetType: "concept", relationship: "related", label: "Predictive Testing" },
  ],
  tags: {
    systems: ["genetics", "neurology", "psychiatry"],
    topics: ["single gene disorders", "neurodegenerative disease"],
    keywords: ["Huntington", "chorea", "CAG repeat", "presymptomatic"],
    clinicalRelevance: "critical",
    examRelevance: { usmle: true, nbme: true, shelf: ["medicine", "neurology"] },
  },
  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

export default huntingtonDiseaseContent;
