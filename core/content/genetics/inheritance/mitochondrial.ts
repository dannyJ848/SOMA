/**
 * Mitochondrial Inheritance - Comprehensive Educational Content
 */

import { EducationalContent } from "../../types";

export const mitochondrialInheritanceContent: EducationalContent = {
  id: "concept-mitochondrial-inheritance",
  type: "concept",
  name: "Mitochondrial Inheritance",
  alternateNames: ["Maternal Inheritance", "mtDNA Inheritance", "Extranuclear Inheritance"],

  levels: {
    1: {
      level: 1,
      summary: "Mitochondrial inheritance means a genetic condition is passed only from mothers to their children through mitochondria, the energy factories inside cells.",
      explanation: `Mitochondria are tiny structures inside your cells that produce energy. They have their own DNA, separate from the DNA in the cell nucleus.

**How is it different?**
- Regular DNA comes from both parents
- Mitochondrial DNA comes ONLY from the mother
- All children of an affected mother can be affected
- Affected fathers cannot pass it to their children

**Why only mothers?**
- Eggs contain many mitochondria
- Sperm contribute almost no mitochondria
- So children get their mitochondria from mom only

**What can go wrong?**
Mitochondrial conditions often affect:
- Muscles (weakness, cramps)
- Brain (seizures, developmental problems)
- Heart (heart problems)
- Other organs needing lots of energy

**Important features:**
- Affects both males and females
- Severity can vary widely, even in the same family
- Some cells may have normal mitochondria, some abnormal (heteroplasmy)`,
      keyTerms: [
        { term: "mitochondria", definition: "Structures inside cells that produce energy; have their own DNA" },
        { term: "mitochondrial DNA", definition: "Small circular DNA inside mitochondria; inherited only from mother" },
        { term: "maternal inheritance", definition: "Pattern where conditions pass only from mothers to children" },
        { term: "heteroplasmy", definition: "Having a mix of normal and abnormal mitochondria in cells" },
      ],
      analogies: [
        "Mitochondria are like batteries in your cells - mitochondrial diseases are like having some bad batteries mixed in.",
        "Maternal inheritance is like a recipe book that only gets passed from mothers to children.",
        "Heteroplasmy is like having some rotten apples mixed with good ones - the more rotten ones, the worse the barrel.",
      ],
      examples: [
        "MELAS is a mitochondrial disorder causing strokes, seizures, and muscle weakness that a mother passes to all her children.",
        "A man with a mitochondrial condition will not pass it to his children because they get their mitochondria from their mother.",
      ],
    },
    2: {
      level: 2,
      summary: "Mitochondrial inheritance follows maternal transmission of mtDNA, with phenotype influenced by heteroplasmy levels, tissue-specific energy demands, and threshold effects, affecting multi-system energy-dependent organs.",
      explanation: `Mitochondrial DNA (mtDNA) is a 16.5 kb circular genome encoding essential respiratory chain components.

**Mitochondrial Genetics:**
| Feature | Description |
|---------|-------------|
| Genome | 16,569 bp circular |
| Genes | 37 genes (13 protein, 22 tRNA, 2 rRNA) |
| Copies | 100-1000s per cell |
| Inheritance | Maternal only |

**Key Concepts:**

**Heteroplasmy:**
- Mix of mutant and normal mtDNA
- Proportion varies between cells and tissues
- Changes with cell division

**Threshold Effect:**
- Minimum mutant load to cause disease
- Varies by tissue (60-90% typically)
- High energy tissues affected first

**Affected Systems:**
| System | Examples |
|--------|----------|
| CNS | Seizures, stroke-like episodes, ataxia |
| Muscle | Myopathy, exercise intolerance |
| Heart | Cardiomyopathy, conduction defects |
| Eye | Optic neuropathy, retinopathy |
| Endocrine | Diabetes, short stature |
| GI | Pseudo-obstruction |

**Common Mitochondrial Syndromes:**
| Syndrome | Mutation | Features |
|----------|----------|----------|
| MELAS | m.3243A>G | Stroke, seizures, lactic acidosis |
| MERRF | m.8344A>G | Myoclonus, epilepsy |
| Leigh syndrome | Various | Early-onset neurodegeneration |
| LHON | m.11778G>A, etc. | Optic neuropathy |
| NARP | m.8993T>G/C | Neuropathy, ataxia, RP |

**Diagnosis:**
- Elevated lactate
- Muscle biopsy (ragged red fibers)
- mtDNA testing (blood, muscle, urine)`,
      keyTerms: [
        { term: "heteroplasmy", definition: "Coexistence of mutant and normal mtDNA; proportion affects severity" },
        { term: "threshold effect", definition: "Minimum mutant mtDNA proportion needed to cause disease" },
        { term: "MELAS", definition: "Mitochondrial Encephalomyopathy, Lactic Acidosis, Stroke-like episodes" },
        { term: "ragged red fibers", definition: "Muscle biopsy finding showing abnormal mitochondria accumulation" },
      ],
      analogies: [
        "Heteroplasmy is like a box of chocolates with some spoiled ones - the more spoiled chocolates, the worse it tastes.",
        "The threshold effect is like a dam - once water (mutant mtDNA) reaches a certain level, it overflows (symptoms appear).",
      ],
    },
    3: {
      level: 3,
      summary: "Mitochondrial disorders result from mtDNA mutations affecting oxidative phosphorylation, with heteroplasmy dynamics, bottleneck effects in oogenesis, and nuclear gene interactions determining phenotype and recurrence risk.",
      explanation: `## mtDNA Biology

### Genome Organization
| Component | Number | Function |
|-----------|--------|----------|
| Protein-coding | 13 | OXPHOS subunits |
| tRNA | 22 | Translation |
| rRNA | 2 | Translation |
| D-loop | 1 | Replication control |

### OXPHOS Complexes
| Complex | mtDNA-encoded | Nuclear |
|---------|---------------|---------|
| I | 7 | 38 |
| II | 0 | 4 |
| III | 1 | 10 |
| IV | 3 | 10 |
| V | 2 | ~14 |

## Heteroplasmy Dynamics

### Mitotic Segregation
- Random distribution during cell division
- Heteroplasmy level can change over time
- Tissue-specific selection possible

### Germline Bottleneck
- Reduction in mtDNA copies during oogenesis
- Random sampling effect
- Explains variable heteroplasmy in offspring
- Can shift from low to high mutant load (or vice versa)

### Tissue Distribution
| Tissue | Sample Accuracy |
|--------|-----------------|
| Muscle | Best for most mutations |
| Blood | May miss/underestimate |
| Urine | Good for m.3243A>G |
| Buccal | Variable |

## Nuclear-Mitochondrial Interaction

### Nuclear Genes Affecting mtDNA
| Gene | Function | Disease |
|------|----------|---------|
| POLG | mtDNA polymerase | PEO, Alpers |
| TWINKLE | mtDNA helicase | PEO |
| OPA1 | Mitochondrial fusion | DOA |
| MFN2 | Mitochondrial fusion | CMT2A |

### Inheritance Pattern
- Primary mtDNA mutation: Maternal
- Nuclear gene mutation: Mendelian (usually AD or AR)

## Recurrence Risk Counseling

### Maternal mtDNA Mutation
| Scenario | Risk to Offspring |
|----------|-------------------|
| All children affected | Mother is homoplasmic mutant |
| Variable | Mother is heteroplasmic |
| None | Father affected |

### Prediction Challenges
- Bottleneck makes prediction difficult
- Tissue tested may not reflect germline
- Empiric data limited`,
      keyTerms: [
        { term: "oxidative phosphorylation", definition: "Mitochondrial process generating ATP; affected in mtDNA disease" },
        { term: "germline bottleneck", definition: "Reduction in mtDNA during egg development causing heteroplasmy shifts" },
        { term: "mitotic segregation", definition: "Random distribution of mitochondria during cell division" },
        { term: "POLG", definition: "Nuclear gene encoding mtDNA polymerase; mutations cause PEO and Alpers" },
      ],
      clinicalNotes: "Blood heteroplasmy may underestimate disease burden - muscle or urine often better. Germline bottleneck makes precise recurrence risk prediction difficult. Nuclear gene involvement should be considered, especially with PEO phenotype.",
    },
    4: {
      level: 4,
      summary: "Advanced mitochondrial disease management integrates multi-tissue heteroplasmy assessment, emerging reproductive options including mitochondrial replacement, and evolving therapeutic approaches targeting mitochondrial function.",
      explanation: `## Diagnostic Approach

### Testing Strategy
| Step | Test | Purpose |
|------|------|---------|
| 1 | Lactate, CK | Screening |
| 2 | mtDNA sequencing (blood/urine) | Common mutations |
| 3 | Muscle biopsy | Histology + mtDNA |
| 4 | mtDNA deletion analysis | Single deletions |
| 5 | Nuclear gene panel | POLG, etc. |

### Heteroplasmy Quantification
- NGS-based quantification
- Tissue selection important
- Serial monitoring in some cases

## Reproductive Options

### Standard Options
| Option | Consideration |
|--------|---------------|
| Natural conception | Unpredictable heteroplasmy |
| PGT-M | Limited by heteroplasmy assessment |
| Donor egg | Eliminates maternal mtDNA |

### Mitochondrial Replacement Therapy (MRT)
**Techniques:**
- Maternal spindle transfer
- Pronuclear transfer
- Polar body transfer

**Status:**
- Approved in UK (selected cases)
- Research in other countries
- Ethical debates ongoing

**Limitations:**
- Carryover mtDNA possible
- Long-term outcomes unknown
- Limited availability

## Therapeutic Approaches

### Supportive Care
| Symptom | Treatment |
|---------|-----------|
| Seizures | Anti-epileptics (avoid valproate) |
| Cardiomyopathy | Standard heart failure management |
| Diabetes | Standard management |
| Exercise intolerance | Supervised exercise program |

### Supplements
- CoQ10 (controversial efficacy)
- L-carnitine
- B vitamins
- Limited evidence for most

### Emerging Therapies
| Approach | Mechanism | Status |
|----------|-----------|--------|
| Elamipretide | Cardiolipin protection | Phase 3 |
| Gene therapy | mtDNA manipulation | Research |
| Heteroplasmy shifting | Reduce mutant mtDNA | Research |`,
      keyTerms: [
        { term: "mitochondrial replacement therapy", definition: "Reproductive technique replacing maternal mtDNA with donor mitochondria" },
        { term: "maternal spindle transfer", definition: "MRT technique transferring nuclear DNA to enucleated donor oocyte" },
        { term: "elamipretide", definition: "Peptide targeting cardiolipin to improve mitochondrial function" },
        { term: "heteroplasmy shifting", definition: "Therapeutic approach to reduce proportion of mutant mtDNA" },
      ],
      clinicalNotes: "Avoid valproate in POLG mutations - risk of liver failure. MRT available in UK for selected cases. Supplement evidence limited but low risk. Multi-system involvement requires coordinated care.",
    },
    5: {
      level: 5,
      summary: "State-of-the-art mitochondrial disease care integrates precision diagnosis, mitochondrial replacement advances, emerging gene therapy approaches, and global research initiatives to address these challenging multisystem disorders.",
      explanation: `## Precision Diagnosis

### Comprehensive Approach
| Level | Analysis |
|-------|----------|
| mtDNA | Full sequencing, deletion screening |
| Nuclear | Large panel or exome |
| Functional | Enzymology, respirometry |
| Multi-tissue | Heteroplasmy comparison |

### Emerging Technologies
- Long-read mtDNA sequencing
- Single-cell heteroplasmy
- Metabolomics profiling

## Gene Therapy Approaches

### Strategies
| Approach | Target | Status |
|----------|--------|--------|
| Allotopic expression | Nuclear-encoded mtDNA | Research |
| mtDNA editing | Direct mtDNA correction | Preclinical |
| Heteroplasmy shifting | Degrade mutant mtDNA | Preclinical |
| Nuclear gene therapy | POLG, etc. | Research |

### Challenges
- Mitochondrial delivery
- Multi-copy genome
- Tissue distribution
- Heteroplasmy variability

## MRT Updates

### Clinical Experience
- UK births reported
- Carryover levels monitored
- Long-term follow-up ongoing

### Ethical Framework
- Three-parent terminology debated
- Germline modification concerns
- Access and equity
- Child welfare

## Research Networks

### Organizations
| Network | Focus |
|---------|-------|
| NAMDC | US clinical network |
| GENOMIT | European consortium |
| TREAT-NMD | Rare disease alliance |

### Clinical Trials
- Natural history studies
- Therapeutic trials
- Biomarker development

## Future Directions

### Therapeutics
- Precision approaches based on specific mutation
- Combination therapies
- Biomarker-guided trials

### Prevention
- Expanded carrier screening (nuclear genes)
- Improved recurrence prediction
- MRT refinement`,
      keyTerms: [
        { term: "allotopic expression", definition: "Expressing mtDNA genes from nucleus for mitochondrial delivery" },
        { term: "mtDNA editing", definition: "Using molecular tools to modify mitochondrial DNA directly" },
        { term: "NAMDC", definition: "North American Mitochondrial Disease Consortium" },
        { term: "three-parent baby", definition: "Colloquial term for children born through MRT" },
      ],
      clinicalNotes: "Connect patients with mitochondrial disease networks for research opportunities. Gene therapy for mtDNA diseases is technically challenging but advancing. MRT outcomes being monitored - counsel about uncertainties.",
    },
  },

  media: [],
  citations: [],
  crossReferences: [
    { targetId: "concept-autosomal-dominant", targetType: "concept", relationship: "sibling", label: "Autosomal Dominant" },
    { targetId: "concept-autosomal-recessive", targetType: "concept", relationship: "sibling", label: "Autosomal Recessive" },
  ],
  tags: {
    systems: ["genetics", "neurology"],
    topics: ["inheritance patterns", "mitochondrial disease"],
    keywords: ["mitochondrial", "maternal inheritance", "mtDNA", "heteroplasmy"],
    clinicalRelevance: "high",
    examRelevance: { usmle: true, nbme: true, shelf: ["medicine", "neurology"] },
  },
  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

export default mitochondrialInheritanceContent;
