/**
 * Carrier Screening - Comprehensive Educational Content
 */

import { EducationalContent } from "../../types";

export const carrierScreeningContent: EducationalContent = {
  id: "concept-carrier-screening",
  type: "concept",
  name: "Carrier Screening",
  alternateNames: ["Carrier Testing", "Preconception Carrier Screening"],

  levels: {
    1: {
      level: 1,
      summary: "Carrier screening tests check if you carry a gene change that could be passed to your children and cause a genetic condition.",
      explanation: `Carrier screening is a genetic test that shows if you carry a gene change for certain conditions, even though you are healthy yourself.

**What is a carrier?**
A carrier has one working copy and one non-working copy of a gene. Carriers are usually completely healthy because one working copy is enough.

**Why does carrier status matter?**
If both parents are carriers of the same condition:
- Each pregnancy has a 25% (1 in 4) chance of having an affected child
- Each pregnancy has a 50% (1 in 2) chance of having a carrier child
- Each pregnancy has a 25% (1 in 4) chance of having a non-carrier child

**When is carrier screening done?**
- Before pregnancy (ideal timing)
- During early pregnancy
- When planning a pregnancy

**What conditions are screened?**
Common conditions include:
- Cystic fibrosis
- Sickle cell disease
- Tay-Sachs disease
- Spinal muscular atrophy
- Many others depending on the test

**What happens with results?**
- If you are not a carrier: Low risk (but not zero)
- If you are a carrier: Partner should be tested
- If both are carriers: Options include additional testing or reproductive options`,
      keyTerms: [
        { term: "carrier", definition: "A person who has one gene change that does not cause symptoms but can be passed to children" },
        { term: "autosomal recessive", definition: "A pattern where two copies of a gene change (one from each parent) cause the condition" },
        { term: "carrier screening", definition: "Testing to see if you carry gene changes that could affect your children" },
      ],
      analogies: [
        "Being a carrier is like having a recipe with one correct page and one with a typo - you can still make the dish, but you might pass the typo to your children.",
        "Carrier screening is like checking if both parents have a piece of the same puzzle - problems only happen if both pieces come together in a child.",
      ],
      examples: [
        "A couple planning pregnancy gets carrier screening for cystic fibrosis before trying to conceive.",
        "A pregnant woman learns she is a sickle cell carrier, so her partner gets tested too.",
      ],
    },
    2: {
      level: 2,
      summary: "Carrier screening identifies heterozygous carriers of autosomal recessive and X-linked conditions, enabling reproductive risk assessment and informed decision-making about prenatal diagnosis or assisted reproduction.",
      explanation: `Carrier screening tests individuals without symptoms or family history to identify carriers of recessive conditions.

**Screening Approaches:**
| Approach | Description |
|----------|-------------|
| Ethnicity-based | Conditions common in specific populations |
| Expanded | Panels testing for many conditions regardless of ethnicity |
| Universal | Same panel offered to all patients |

**Common Conditions Screened:**
| Condition | Carrier Frequency |
|-----------|------------------|
| Cystic fibrosis | 1 in 25 (Caucasian) |
| SMA | 1 in 40-50 |
| Sickle cell | 1 in 10-12 (African descent) |
| Tay-Sachs | 1 in 30 (Ashkenazi Jewish) |
| Fragile X | 1 in 250 (females) |

**Screening Results:**
| Result | Meaning | Action |
|--------|---------|--------|
| Negative | Carrier risk reduced | Reassurance |
| Carrier identified | Partner testing needed | Test partner |
| Both carriers | Reproductive risk 25% | Options counseling |

**Reproductive Options if Both Carriers:**
- Natural conception with prenatal diagnosis
- IVF with preimplantation genetic testing (PGT-M)
- Donor gametes
- Adoption
- Accept risk and proceed

**Timing:**
- Optimal: Before pregnancy
- Acceptable: Early pregnancy
- Partner: As soon as carrier identified`,
      keyTerms: [
        { term: "expanded carrier screening", definition: "Testing for many conditions in a single panel regardless of ethnicity" },
        { term: "residual risk", definition: "Remaining carrier risk after negative screening (tests are not 100% sensitive)" },
        { term: "heterozygous", definition: "Having two different alleles at a gene locus (carrier state)" },
        { term: "PGT-M", definition: "Preimplantation genetic testing for monogenic disorders using IVF" },
      ],
      analogies: [
        "Residual risk is like a weather forecast - even if it says no rain, there is still a small chance of getting wet.",
        "Expanded carrier screening is like checking for many ingredients at once instead of one at a time.",
      ],
    },
    3: {
      level: 3,
      summary: "Carrier screening panels employ next-generation sequencing to detect pathogenic variants in hundreds of genes, with result interpretation requiring understanding of detection rates, residual risk calculations, and variant classification nuances.",
      explanation: `## Screening Panel Design

### Condition Selection Criteria
| Criterion | Consideration |
|-----------|---------------|
| Carrier frequency | >1 in 100 typically included |
| Severity | Significant morbidity/mortality |
| Defined phenotype | Well-characterized condition |
| Test accuracy | Sufficient detection rate |
| Actionability | Options available |

### Technical Considerations

**Detection Rates:**
| Condition | Detection Rate |
|-----------|---------------|
| CF | 90-97% (population-dependent) |
| SMA | ~95% (SMN1 copy number) |
| Fragile X | >99% (CGG repeat analysis) |
| Hemoglobinopathies | >95% (MCV helps) |

**Residual Risk Calculation:**
- Prior carrier risk × (1 - detection rate)
- Varies by ethnicity
- Report should include residual risk

## Interpretation Challenges

### Variants of Uncertain Significance
- Common in expanded panels
- Do not use for risk assessment
- May require additional evaluation

### Complex Alleles
| Condition | Complexity |
|-----------|------------|
| CF | Variable expressivity alleles |
| SMA | Silent carriers (2+0) |
| Fragile X | Intermediate alleles |

### X-Linked Conditions
- Female carriers may have symptoms
- 50% risk to male offspring
- Fragile X most common

## Counseling Considerations

### Pre-Test
- Residual risk concept
- VUS possibility
- Partner testing needed if positive
- Reproductive options overview

### Post-Test (Carrier Identified)
- Autosomal recessive risk if both carriers
- X-linked risk if female carrier
- Partner testing urgency
- Family implications`,
      keyTerms: [
        { term: "detection rate", definition: "Percentage of carriers identified by the screening test" },
        { term: "silent carrier", definition: "Individual who is a carrier by mechanism not detected by standard testing" },
        { term: "complex allele", definition: "Variant with multiple changes affecting interpretation" },
        { term: "variable expressivity", definition: "Range of severity in individuals with same genotype" },
      ],
      clinicalNotes: "Calculate ethnicity-specific residual risk for negative results. Document that VUS should not be used for carrier risk assessment. SMN1 silent carriers exist - counsel about residual risk.",
    },
    4: {
      level: 4,
      summary: "Advanced carrier screening interpretation addresses population-specific detection rates, compound heterozygosity risk, couple-based result integration, and reproductive timing pressures, with program implementation requiring quality metrics and outcome tracking.",
      explanation: `## Advanced Interpretation

### Population-Specific Considerations
| Factor | Impact |
|--------|--------|
| Allele spectrum | Detection rates vary |
| Carrier frequencies | Risk calculations differ |
| Mixed ancestry | Complex interpretation |
| Underrepresented groups | Higher uncertainty |

### Couple-Based Analysis
**When Both Tested:**
- Same condition carrier × carrier = 25% risk
- Different conditions = not at increased risk for either
- Consider consanguinity impact

### Compound Heterozygosity
- Two different pathogenic variants in same gene
- Both may come from carrier screening
- Clinical significance varies by combination

## Reproductive Timing

### Pregnancy Already Established
| GA | Options |
|-----|---------|
| <10 weeks | CVS possible |
| 10-14 weeks | CVS preferred |
| >15 weeks | Amniocentesis |
| Late | Limited time for decisions |

### Time-Sensitive Decisions
- Insurance authorization delays
- Laboratory turnaround
- Procedure scheduling
- Psychological processing

## Program Implementation

### Quality Metrics
| Metric | Target |
|--------|--------|
| Uptake rate | Track over time |
| Partner testing | Should approach 100% |
| Counseling completion | Pre- and post-test |
| Outcome tracking | Affected pregnancies detected |

### Laboratory Selection
- Comprehensive panel
- Ancestry-appropriate
- Deletion/duplication analysis included
- Couple analysis available
- Residual risk reporting`,
      keyTerms: [
        { term: "couple-based analysis", definition: "Evaluating both partners\" results together to determine reproductive risk" },
        { term: "ancestry-appropriate", definition: "Testing panel including variants common in patient\"s ethnic background" },
        { term: "program implementation", definition: "Systematic approach to offering carrier screening in clinical practice" },
      ],
      clinicalNotes: "Develop efficient partner testing workflows when carrier identified. Track time from initial positive to complete couple assessment. Ensure reproductive timing allows for all options.",
    },
    5: {
      level: 5,
      summary: "State-of-the-art carrier screening integrates universal expanded panels, emerging biotechnologies, population-level implementation, and cost-effectiveness considerations while addressing equity in diverse populations and evolving professional guidelines.",
      explanation: `## Universal Expanded Screening

### Professional Guidance
- ACOG: All patients should be offered expanded carrier screening
- ACMG: Universal panel approach supported
- Implementation varies by setting

### Panel Evolution
| Era | Approach |
|-----|----------|
| Historical | Ethnicity-based, few conditions |
| Current | Expanded (100-300+ genes) |
| Emerging | Comprehensive (500+ genes) |

## Emerging Technologies

### Genomic Approaches
- WGS-based carrier screening
- CNV detection improvement
- Repeat expansion inclusion

### Reproductive Technologies
- Improved PGT-M methods
- Genome editing (research)

## Population Health

### Screening Programs
| Setting | Approach |
|---------|----------|
| General obstetrics | Universal offer |
| Reproductive specialty | Standard of care |
| Primary care | Emerging |
| Direct-to-consumer | Quality variable |

### Health Economics
- Cost per carrier couple detected
- Downstream cost avoidance
- Coverage landscape

## Equity Considerations

### Diverse Populations
| Challenge | Approach |
|-----------|----------|
| Data gaps | Include in research |
| VUS rates | Functional studies |
| Detection rates | Population-specific reporting |
| Access | Alternative delivery models |

### Global Perspectives
- Consanguineous populations
- High-prevalence conditions
- Resource-limited settings
- International guidelines`,
      keyTerms: [
        { term: "universal expanded screening", definition: "Offering comprehensive carrier panel to all patients regardless of ancestry" },
        { term: "population health", definition: "Health outcomes approach at population level" },
        { term: "carrier couple detection", definition: "Identification of couples where both partners carry same condition" },
      ],
      clinicalNotes: "Implement universal expanded screening per professional guidelines. Address equity through ensuring panels represent diverse populations. Track outcomes to demonstrate program value.",
    },
  },

  media: [],
  citations: [],
  crossReferences: [
    { targetId: "concept-genetic-testing-overview", targetType: "concept", relationship: "parent", label: "Genetic Testing Overview" },
    { targetId: "concept-autosomal-recessive", targetType: "concept", relationship: "related", label: "Autosomal Recessive Inheritance" },
  ],
  tags: {
    systems: ["genetics", "obstetrics"],
    topics: ["carrier screening", "reproductive genetics"],
    keywords: ["carrier", "preconception", "prenatal"],
    clinicalRelevance: "high",
    examRelevance: { usmle: true, nbme: true, shelf: ["obstetrics-gynecology"] },
  },
  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

export default carrierScreeningContent;
