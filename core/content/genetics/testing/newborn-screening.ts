/**
 * Newborn Screening - Comprehensive Educational Content
 */

import { EducationalContent } from "../../types";

export const newbornScreeningContent: EducationalContent = {
  id: "concept-newborn-screening",
  type: "concept",
  name: "Newborn Screening",
  alternateNames: ["NBS", "Heel Stick Test", "Newborn Genetic Screening"],

  levels: {
    1: {
      level: 1,
      summary: "Newborn screening tests all babies shortly after birth to find certain conditions that can be treated early to prevent serious health problems.",
      explanation: `Newborn screening is a public health program that tests all babies soon after birth. The goal is to find certain conditions before symptoms appear so treatment can start right away.

**How is the test done?**
- A few drops of blood from the baby\"s heel (heel stick)
- Hearing test
- Heart oxygen test (pulse oximetry)
- Tests are done in the first 24-48 hours of life

**What conditions are screened?**
Every state screens for different conditions, but common ones include:
- Phenylketonuria (PKU) - a metabolic condition
- Hypothyroidism - thyroid problem
- Sickle cell disease
- Cystic fibrosis
- Hearing loss
- Heart defects

**Why is early detection important?**
Many conditions can be treated if found early:
- Special diets can prevent intellectual disability in PKU
- Medication can prevent growth problems in hypothyroidism
- Early intervention improves outcomes

**What happens with results?**
- Most results are normal
- If abnormal, the baby needs more testing to confirm
- A positive screen does NOT mean the baby definitely has the condition
- Follow-up testing gives the final answer`,
      keyTerms: [
        { term: "newborn screening", definition: "Tests done on all babies shortly after birth to find treatable conditions" },
        { term: "heel stick", definition: "Blood sample collected from a baby\"s heel" },
        { term: "positive screen", definition: "A result that needs follow-up testing (does not mean diagnosis)" },
        { term: "early intervention", definition: "Starting treatment before symptoms appear" },
      ],
      analogies: [
        "Newborn screening is like a safety net - it catches conditions before they can cause harm.",
        "A positive screen is like a yellow flag - it means we need to look closer, not that something is definitely wrong.",
      ],
      examples: [
        "A baby with PKU detected through newborn screening is started on a special diet and develops normally.",
        "Hearing loss found at birth allows early hearing aids and speech therapy to help the child develop language.",
      ],
    },
    2: {
      level: 2,
      summary: "Newborn screening uses dried blood spot analysis and point-of-care testing to identify infants with treatable metabolic, endocrine, hematologic, and other conditions before clinical symptoms develop.",
      explanation: `Newborn screening (NBS) is a mandated public health program providing presymptomatic detection of conditions where early treatment improves outcomes.

**Screening Modalities:**
| Test | Method | Conditions |
|------|--------|------------|
| DBS (dried blood spot) | MS/MS, enzymatic, DNA | Metabolic, CF, SCD, etc. |
| Hearing | OAE, ABR | Congenital hearing loss |
| CCHD | Pulse oximetry | Critical heart defects |

**RUSP (Recommended Uniform Screening Panel):**
- Core conditions (~35 currently)
- Secondary conditions
- Updated periodically by federal advisory committee
- State implementation varies

**Condition Categories:**
| Category | Examples |
|----------|----------|
| Amino acid disorders | PKU, MSUD |
| Fatty acid oxidation | MCAD, VLCAD |
| Organic acid disorders | Propionic acidemia |
| Endocrine | Congenital hypothyroidism, CAH |
| Hemoglobin | Sickle cell disease |
| Other | CF, SCID, SMA |

**Screening vs. Diagnosis:**
| Screening Result | Action |
|------------------|--------|
| Normal | No further testing |
| Abnormal | Confirmatory testing required |
| Borderline | May repeat or proceed to confirmation |

**Confirmatory Testing:**
- Biochemical analysis
- Genetic testing
- Functional studies
- Clinical evaluation`,
      keyTerms: [
        { term: "RUSP", definition: "Recommended Uniform Screening Panel; federal list of conditions recommended for newborn screening" },
        { term: "tandem mass spectrometry", definition: "Technology enabling detection of many metabolic conditions from single blood spot" },
        { term: "SCID", definition: "Severe Combined Immunodeficiency; immune deficiency detectable by NBS" },
        { term: "critical congenital heart defect", definition: "Serious heart problem detectable by pulse oximetry screening" },
      ],
      analogies: [
        "The RUSP is like a standard checklist - it tells states what conditions are important to include.",
        "Tandem mass spectrometry is like having multiple detectors working at once - finding many conditions from one sample.",
      ],
    },
    3: {
      level: 3,
      summary: "Newborn screening programs employ tiered algorithms with defined cut-offs, leveraging second-tier testing and rapid confirmatory pathways to balance sensitivity with positive predictive value while addressing challenges of emerging conditions and false positives.",
      explanation: `## Screening Algorithms

### Tiered Approach
1. First tier: High-throughput screening
2. Second tier: Reduce false positives
3. Confirmatory: Definitive diagnosis

### Example: Cystic Fibrosis
1. IRT (immunoreactive trypsinogen) elevated
2. DNA analysis for CFTR mutations
3. Sweat chloride confirmation

### Performance Metrics
| Metric | Goal |
|--------|------|
| Sensitivity | >99% for serious conditions |
| Specificity | Minimize false positives |
| PPV | Varies by condition |
| Time to result | Days; urgent for acute conditions |

## Emerging Conditions

### Recently Added
| Condition | Detection Method |
|-----------|------------------|
| SCID | TREC assay |
| SMA | SMN1 copy number |
| X-ALD | C26:0-LPC |
| Pompe | GAA enzyme activity |
| MPS I | α-L-iduronidase |

### Genomic Screening Proposals
- WGS/WES for all newborns (research)
- Expanded conditions possible
- Ethical debates ongoing

## Follow-Up Systems

### Critical Elements
| Element | Purpose |
|---------|---------|
| Tracking | No lost-to-follow-up |
| Timeliness | Prevent deterioration |
| Specialist access | Expert confirmation |
| Family communication | Anxiety management |

### Short-Term Follow-Up
- Confirmatory testing
- Diagnostic evaluation
- Treatment initiation

### Long-Term Follow-Up
- Outcome tracking
- Variant reclassification
- Carrier identification implications

## Challenges

### False Positives
- Parental anxiety
- Healthcare costs
- Bonding effects (usually transient)

### Missed Cases
- Screening limitations
- Sample timing
- Second screen policies`,
      keyTerms: [
        { term: "second-tier testing", definition: "Additional laboratory analysis reducing false positives before confirmatory testing" },
        { term: "TREC assay", definition: "T-cell receptor excision circles; marker for SCID screening" },
        { term: "short-term follow-up", definition: "System ensuring timely confirmatory testing and treatment for screen-positive infants" },
        { term: "cut-off", definition: "Threshold value determining positive vs. negative screening result" },
      ],
      clinicalNotes: "Ensure robust short-term follow-up systems for screen-positive results. Second-tier testing significantly reduces false positives for conditions like CF and CAH.",
    },
    4: {
      level: 4,
      summary: "Advanced newborn screening encompasses genomic pilot programs, condition-specific treatment protocols, long-term outcome surveillance, and health system integration while addressing health disparities and policy considerations.",
      explanation: `## Genomic NBS Pilots

### Current Projects
| Program | Scope |
|---------|-------|
| BabySeq | WGS research |
| NC NEXUS | Targeted conditions |
| Guardian | Expanded WGS |
| Screen4Rare | International |

### Considerations
| Issue | Approach |
|-------|----------|
| Conditions selected | Treatable, early-onset |
| Consent | Informed vs. state mandate |
| VUS | Non-disclosure typically |
| Incidental findings | Predefined policies |

## Treatment Protocols

### Acute Metabolic Conditions
- Emergency protocols required
- Metabolic specialist involvement
- Family emergency letters

### Gene Therapy Era
| Condition | Treatment | NBS Impact |
|-----------|-----------|------------|
| SMA | Onasemnogene | Pre-symptomatic treatment best |
| ADA-SCID | Gene therapy | Identifies candidates |

## Outcome Surveillance

### Long-Term Follow-Up Needs
- Development tracking
- Treatment effectiveness
- Side effects monitoring
- Quality of life

### Registries
- Condition-specific databases
- Treatment outcomes
- Natural history data

## Health System Integration

### Electronic Systems
- Result delivery
- Alert management
- Outcome tracking
- Population surveillance

### Quality Assurance
| Metric | Standard |
|--------|----------|
| Collection timing | 24-48 hours |
| Transit time | Minimized |
| Result reporting | Defined timeframes |
| Follow-up completion | Near 100% |`,
      keyTerms: [
        { term: "genomic newborn screening", definition: "Application of WGS/WES to newborn screening, currently research" },
        { term: "emergency protocol", definition: "Urgent management plan for acute metabolic decompensation" },
        { term: "long-term follow-up", definition: "Systematic tracking of outcomes for individuals identified through NBS" },
      ],
      clinicalNotes: "SMA treatment outcomes are significantly better when started presymptomatically through NBS detection. Implement metabolic emergency protocols for screen-positive acute conditions.",
    },
    5: {
      level: 5,
      summary: "State-of-the-art newborn screening integrates precision public health approaches, health economic analyses, international harmonization efforts, and emerging biotechnologies while addressing fundamental ethical questions about population-based genomic testing.",
      explanation: `## Precision Public Health

### Population-Based Genomics
| Approach | Status |
|----------|--------|
| Traditional NBS | Established |
| Genomic NBS | Pilots ongoing |
| Comprehensive sequencing | Research/ethical debate |

### Implementation Science
- Uptake and equity
- System readiness
- Outcome measurement
- Cost-effectiveness

## Health Economics

### Value Proposition
| Component | Measurement |
|-----------|-------------|
| Direct costs | Testing, follow-up |
| Avoided costs | Disability, mortality |
| QALY gains | Improved outcomes |
| Family benefits | Reproductive information |

### Cost-Effectiveness Studies
- Vary by condition
- Generally favorable for RUSP conditions
- Gene therapy era recalculations needed

## International Perspectives

### Harmonization
| Challenge | Approach |
|-----------|----------|
| Condition lists | International benchmarking |
| Technical standards | ISO/CLSI guidelines |
| Follow-up systems | Best practice sharing |

### Global Disparities
- Access variation
- Resource constraints
- Priority conditions differ

## Ethical Framework

### Fundamental Questions
| Question | Considerations |
|----------|----------------|
| Scope expansion | Benefit-risk balance |
| Mandatory vs. voluntary | Autonomy vs. public health |
| Incidental findings | Disclosure policies |
| Data retention | Research vs. privacy |

### Carrier Detection
- Increasingly identified
- Family communication
- Reproductive implications

## Future Directions

### Emerging Technologies
- Point-of-care testing
- Dried blood spot genomics
- Artificial intelligence

### Policy Evolution
- RUSP process improvement
- State variation reduction
- Coverage expansion`,
      keyTerms: [
        { term: "precision public health", definition: "Application of precision medicine approaches at population level" },
        { term: "QALY", definition: "Quality-Adjusted Life Year; measure of health outcome incorporating quantity and quality" },
        { term: "ISO/CLSI standards", definition: "International standards for laboratory testing quality" },
      ],
      clinicalNotes: "Advocate for state implementation of full RUSP conditions. Address disparities in NBS access and follow-up. Participate in outcome tracking to build evidence for existing and emerging conditions.",
    },
  },

  media: [],
  citations: [],
  crossReferences: [
    { targetId: "concept-genetic-testing-overview", targetType: "concept", relationship: "parent", label: "Genetic Testing Overview" },
  ],
  tags: {
    systems: ["genetics", "pediatrics"],
    topics: ["newborn screening", "public health", "early intervention"],
    keywords: ["NBS", "heel stick", "PKU", "RUSP"],
    clinicalRelevance: "critical",
    examRelevance: { usmle: true, nbme: true, shelf: ["pediatrics"] },
  },
  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

export default newbornScreeningContent;
