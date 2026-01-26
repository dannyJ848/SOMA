/**
 * Prenatal Genetic Testing - Comprehensive Educational Content
 */

import { EducationalContent } from "../../types";

export const prenatalTestingContent: EducationalContent = {
  id: "concept-prenatal-testing",
  type: "concept",
  name: "Prenatal Genetic Testing",
  alternateNames: ["Prenatal Diagnosis", "Antenatal Testing"],

  levels: {
    1: {
      level: 1,
      summary: "Prenatal genetic testing checks for genetic conditions in a baby during pregnancy, using either screening tests or diagnostic tests.",
      explanation: `Prenatal genetic testing gives parents information about their baby\"s health before birth.

**Two main types:**

1. **Screening tests**: Tell you the chance (risk) of certain conditions
   - Blood tests and ultrasound
   - Safe for pregnancy (no risk to baby)
   - Cannot give a definite yes or no answer

2. **Diagnostic tests**: Give a definite answer
   - CVS or amniocentesis
   - Small risk of miscarriage
   - Can confirm or rule out conditions

**What conditions can be tested?**
- Down syndrome and other chromosome conditions
- Some genetic diseases (if family history)
- Neural tube defects

**Common screening options:**
- First trimester screening (11-14 weeks)
- Cell-free DNA screening (after 10 weeks)
- Quad screen (15-20 weeks)

**Diagnostic options:**
- CVS (chorionic villus sampling): 10-13 weeks
- Amniocentesis: 15+ weeks

**Important to know:**
- Screening tells you risk, not a definite answer
- Diagnostic testing gives definite answers but has small risks
- All testing is optional
- Results help you prepare and plan`,
      keyTerms: [
        { term: "screening test", definition: "A test that shows the chance of a condition but cannot give a definite answer" },
        { term: "diagnostic test", definition: "A test that gives a definite yes or no answer about a condition" },
        { term: "amniocentesis", definition: "A test where fluid around the baby is collected with a needle to check for genetic conditions" },
        { term: "CVS", definition: "Chorionic villus sampling; a test where a small piece of placenta is collected to check genetics" },
      ],
      analogies: [
        "Screening is like a weather forecast - it tells you the chance of rain but cannot guarantee it.",
        "Diagnostic testing is like actually going outside - you know for certain if it is raining.",
      ],
      examples: [
        "A 38-year-old pregnant woman has cell-free DNA screening to check for Down syndrome risk.",
        "After a high-risk screening result, a couple chooses amniocentesis to get a definite answer.",
      ],
    },
    2: {
      level: 2,
      summary: "Prenatal genetic testing includes screening options (cfDNA, serum screening) and diagnostic procedures (CVS, amniocentesis), with test selection guided by gestational age, indication, and patient preference.",
      explanation: `Prenatal genetic testing provides information about fetal genetic status through screening or diagnostic approaches.

**Screening Options:**
| Test | Timing | Conditions | Detection Rate |
|------|--------|------------|---------------|
| cfDNA (NIPT) | ≥10 weeks | Trisomy 21, 18, 13, sex chr | 99% for T21 |
| First trimester combined | 11-14 weeks | T21, T18 | 85-90% |
| Quad screen | 15-20 weeks | T21, T18, NTD | 80-85% |
| Sequential/integrated | Combined above | Multiple | 90-95% |

**Diagnostic Options:**
| Test | Timing | Procedure Risk |
|------|--------|---------------|
| CVS | 10-13 weeks | ~0.2-0.3% |
| Amniocentesis | ≥15 weeks | ~0.1-0.3% |

**Indications for Diagnostic Testing:**
- Positive screening result
- Parental structural chromosome abnormality
- Previous affected pregnancy
- Known familial genetic condition
- Abnormal ultrasound findings
- Patient choice

**Result Types:**
| Result | Meaning |
|--------|---------|
| Normal chromosomes | Reassuring |
| Aneuploidy | Chromosome number abnormality |
| Structural abnormality | Deletion, duplication, rearrangement |
| Mosaicism | Mixed cell population |

**Decision Framework:**
- Screening: Information without procedure risk
- Diagnostic: Definitive answer with small risk`,
      keyTerms: [
        { term: "cfDNA/NIPT", definition: "Cell-free DNA or Non-Invasive Prenatal Testing; screens fetal DNA in maternal blood" },
        { term: "aneuploidy", definition: "Abnormal number of chromosomes (e.g., trisomy)" },
        { term: "mosaicism", definition: "Presence of two cell populations with different chromosome content" },
        { term: "neural tube defect", definition: "Birth defect of brain or spine (spina bifida, anencephaly)" },
      ],
      analogies: [
        "cfDNA testing is like finding baby\"s fingerprints in mother\"s blood - it gives clues but is not the same as examining the baby directly.",
        "Mosaicism is like having two different color threads woven into the same fabric.",
      ],
    },
    3: {
      level: 3,
      summary: "Comprehensive prenatal genetic evaluation integrates ultrasound findings with cfDNA performance characteristics, diagnostic procedure selection, and microarray versus karyotype analysis, requiring nuanced counseling about confined placental mosaicism and result implications.",
      explanation: `## Screening Performance

### cfDNA Technical Basis
- Fetal fraction: Proportion of cfDNA from placenta
- Minimum ~4% for accurate results
- Factors: gestational age, maternal BMI, fetoplacental health

### Performance Characteristics
| Condition | Sensitivity | PPV Low Risk | PPV High Risk |
|-----------|-------------|--------------|---------------|
| Trisomy 21 | 99% | 50-80% | >95% |
| Trisomy 18 | 97% | 40-70% | >90% |
| Trisomy 13 | 92% | 20-50% | >80% |
| Sex chr. | 90-95% | Variable | Variable |

### Non-Reportable Results
- Low fetal fraction
- Assay failure
- Associated with adverse outcomes in some studies
- Requires follow-up

## Diagnostic Considerations

### Microarray vs. Karyotype
| Analysis | Advantages | Limitations |
|----------|------------|-------------|
| Karyotype | Balanced rearrangements | Resolution ~5 Mb |
| Microarray | Higher resolution CNV | Misses balanced |

### Indications for Microarray
- Abnormal ultrasound
- IUFD evaluation
- First-line diagnostic increasingly

### VOUS in Prenatal Setting
- Copy number variants of uncertain significance
- Challenging for counseling
- May require parental studies

## Confined Placental Mosaicism

### Types
| Type | Location | Clinical Impact |
|------|----------|-----------------|
| Type I | Cytotrophoblast | Usually benign |
| Type II | Mesenchyme | Usually benign |
| Type III | Both | Higher risk concerns |

### Clinical Implications
- Explains cfDNA false positives
- May indicate fetal mosaicism risk
- Uniparental disomy possible`,
      keyTerms: [
        { term: "fetal fraction", definition: "Proportion of cell-free DNA derived from placenta/fetus" },
        { term: "positive predictive value", definition: "Probability that positive screening result indicates true condition" },
        { term: "confined placental mosaicism", definition: "Chromosomal mosaicism present in placenta but not fetus" },
        { term: "VOUS", definition: "Variant of uncertain significance in copy number analysis" },
      ],
      clinicalNotes: "Low fetal fraction results warrant follow-up due to association with adverse outcomes. Confirm positive cfDNA with diagnostic testing before irreversible decisions. Microarray VOUS requires careful counseling and parental studies.",
    },
    4: {
      level: 4,
      summary: "Advanced prenatal genetics incorporates expanded cfDNA applications, fetal exome sequencing for structural anomalies, genome-wide analyses, and complex counseling scenarios including discordant results and incidental findings.",
      explanation: `## Expanded Screening

### Extended cfDNA Applications
| Application | Status | Considerations |
|-------------|--------|---------------|
| Microdeletions | Available | Lower PPV than aneuploidy |
| Rare aneuploidies | Available | High false positive |
| Single gene | Emerging | Select conditions |

### Genome-Wide cfDNA
- Detects additional CNVs
- Higher incidental findings
- Limited outcome data

## Fetal Exome Sequencing

### Indications
- Multiple anomalies on ultrasound
- Unexplained structural anomaly
- Family history of genetic condition
- Normal microarray

### Yield
| Scenario | Diagnostic Yield |
|----------|------------------|
| Single anomaly | 10-15% |
| Multiple anomalies | 30-40% |
| NT >3.5 mm | 20-30% |

### Counseling Challenges
- VUS rate higher
- Uncertain phenotype correlation
- Time constraints
- Rapid turnaround needed

## Complex Scenarios

### Discordant Results
| Scenario | Approach |
|----------|----------|
| Positive cfDNA, normal amnio | CPM likely; monitor |
| Negative cfDNA, abnormal US | Diagnostic testing indicated |

### Multiple Gestation
- Vanishing twin affects cfDNA
- Zygosity impacts interpretation
- Individual diagnostic testing

### Incidental Findings
- Maternal malignancy signal
- Parental consanguinity
- Unexpected aneuploidy`,
      keyTerms: [
        { term: "fetal exome sequencing", definition: "NGS analysis of fetal sample for Mendelian conditions" },
        { term: "vanishing twin", definition: "Early pregnancy loss of one twin, can affect cfDNA results" },
        { term: "rapid exome", definition: "Expedited sequencing for prenatal diagnosis with shortened TAT" },
      ],
      clinicalNotes: "Fetal exome increasingly offered for unexplained structural anomalies. Establish clear protocols for incidental cfDNA findings including maternal malignancy signals.",
    },
    5: {
      level: 5,
      summary: "State-of-the-art prenatal genetics integrates fetal genome sequencing, ethical frameworks for expanded testing, population-level screening programs, and emerging technologies while addressing disparities and global implementation challenges.",
      explanation: `## Fetal Genome Sequencing

### Current Status
- Research/select clinical settings
- Technical feasibility established
- Interpretation challenges remain

### Applications
| Application | Status |
|-------------|--------|
| Severe anomalies | Clinical use |
| Uncertain findings | Research |
| Screening application | Debated |

## Ethical Framework

### Expanded Testing Considerations
| Issue | Framework |
|-------|-----------|
| Disability selection | Nondirectiveness |
| Minor conditions | Proportionality |
| Adult-onset findings | Autonomy preservation |
| Variants of uncertain significance | Appropriate disclosure |

### Reproductive Autonomy
- Information provision
- Nondirective counseling
- Support all decisions

## Population Programs

### cfDNA as Primary Screening
| Factor | Consideration |
|--------|---------------|
| Performance | Superior to serum for T21 |
| Cost | Decreasing |
| False positives | Fewer invasive procedures |
| Health system | Infrastructure needs |

### Universal Coverage
- Insurance mandates expanding
- First trimester implementation
- Equity considerations

## Global Perspectives

### Resource Variation
- Ultrasound availability
- Testing access
- Counseling capacity

### Cultural Considerations
- Termination access/views
- Disability perspectives
- Family decision-making

## Emerging Technologies

### Non-Invasive Diagnosis
- fetal cell isolation
- Single circulating cell analysis
- Research stage

### Prenatal Therapy
- Gene therapy research
- In utero intervention
- Stem cell approaches`,
      keyTerms: [
        { term: "fetal genome sequencing", definition: "Comprehensive WGS of fetal sample for prenatal diagnosis" },
        { term: "non-invasive prenatal diagnosis", definition: "Future goal of diagnostic accuracy from maternal blood" },
        { term: "prenatal gene therapy", definition: "Emerging approach treating genetic conditions before birth" },
      ],
      clinicalNotes: "Prenatal WGS requires extensive pre-test counseling about possible findings. Stay current with evolving professional society guidelines on cfDNA indications. Address equity in access to prenatal testing.",
    },
  },

  media: [],
  citations: [],
  crossReferences: [
    { targetId: "concept-genetic-testing-overview", targetType: "concept", relationship: "parent", label: "Genetic Testing Overview" },
  ],
  tags: {
    systems: ["genetics", "obstetrics"],
    topics: ["prenatal testing", "screening", "diagnosis"],
    keywords: ["prenatal", "NIPT", "amniocentesis", "CVS"],
    clinicalRelevance: "high",
    examRelevance: { usmle: true, nbme: true, shelf: ["obstetrics-gynecology"] },
  },
  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

export default prenatalTestingContent;
