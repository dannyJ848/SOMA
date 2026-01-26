/**
 * Klinefelter Syndrome - Comprehensive Educational Content
 */

import { EducationalContent } from "../../../types";

export const klinefelterSyndromeContent: EducationalContent = {
  id: "condition-klinefelter-syndrome",
  type: "condition",
  name: "Klinefelter Syndrome",
  alternateNames: ["47,XXY", "XXY Syndrome"],
  hpoId: "HP:0000053",

  levels: {
    1: {
      level: 1,
      summary: "Klinefelter syndrome is a genetic condition in males who are born with an extra X chromosome (XXY instead of XY), affecting development and fertility.",
      explanation: `Klinefelter syndrome occurs when a male is born with an extra X chromosome. Instead of the usual XY, they have XXY. It affects about 1 in 500-650 males.

**Common features:**
- May be taller than average
- Smaller testicles
- Low testosterone levels
- Usually infertile
- May have breast tissue development
- May have learning differences

**What it means for health:**
- Testosterone treatment usually needed
- Most men are infertile, but some fertility treatments may help
- Increased risk for some conditions (diabetes, osteoporosis)

**Important to know:**
- Many men are not diagnosed until adulthood
- Intelligence is usually normal
- With treatment, can live normal, healthy lives
- Physical features are often subtle`,
      keyTerms: [
        { term: "Klinefelter syndrome", definition: "Condition in males with an extra X chromosome (47,XXY)" },
        { term: "testosterone", definition: "Male hormone needed for development and health" },
        { term: "infertility", definition: "Inability to have children naturally" },
      ],
      analogies: [
        "Having an extra X chromosome is like having an extra instruction set that slightly changes development.",
        "Testosterone replacement is like refilling a car\"s oil - it keeps everything running smoothly.",
      ],
      examples: [
        "A man discovers he has Klinefelter syndrome during an infertility evaluation.",
        "A teenager with Klinefelter syndrome starts testosterone therapy to help develop masculine features.",
      ],
    },
    2: {
      level: 2,
      summary: "Klinefelter syndrome (47,XXY) is the most common sex chromosome aneuploidy in males, characterized by primary hypogonadism, infertility, and variable phenotypic features requiring testosterone replacement and multidisciplinary care.",
      explanation: `Klinefelter syndrome occurs in 1:500-1:650 male births, making it one of the most common chromosomal conditions.

**Karyotype Variants:**
| Type | Frequency | Phenotype |
|------|-----------|-----------|
| 47,XXY | 80-90% | Classic KS |
| 46,XY/47,XXY | 10% | Often milder |
| 48,XXXY | Rare | More severe |
| 49,XXXXY | Very rare | Significant disability |

**Clinical Features:**
| Feature | Timing |
|---------|--------|
| Small testes | Childhood onward |
| Tall stature | Childhood |
| Gynecomastia | Puberty |
| Sparse body hair | Post-puberty |
| Infertility | Adulthood |
| Learning differences | Childhood |

**Hormone Profile:**
- Low testosterone
- Elevated FSH and LH
- Primary hypogonadism

**Associated Conditions:**
| Condition | Risk |
|-----------|------|
| Metabolic syndrome | Increased |
| Osteoporosis | Increased |
| Type 2 diabetes | Increased |
| Breast cancer | 20-50x increased |
| Autoimmune | Increased |

**Management:**
| Issue | Approach |
|-------|----------|
| Low testosterone | Testosterone replacement |
| Infertility | TESE + ICSI may help |
| Learning | Educational support |
| Gynecomastia | Surgery if bothersome |`,
      keyTerms: [
        { term: "primary hypogonadism", definition: "Low testosterone due to testicular dysfunction" },
        { term: "gynecomastia", definition: "Breast tissue development in males" },
        { term: "TESE", definition: "Testicular sperm extraction; surgical retrieval of sperm" },
        { term: "ICSI", definition: "Intracytoplasmic sperm injection; IVF technique using single sperm" },
      ],
      analogies: [
        "Primary hypogonadism is like a factory not producing enough product - the body signals for more but production cannot keep up.",
        "TESE is like finding a needle in a haystack - searching for the few sperm that may be present.",
      ],
    },
    3: {
      level: 3,
      summary: "Klinefelter syndrome results from meiotic nondisjunction producing 47,XXY, with phenotype determined by X chromosome gene dosage effects, testicular degeneration timing, and response to testosterone replacement.",
      explanation: `## Pathophysiology

### Mechanism
- Nondisjunction in meiosis I or II
- ~50% paternal, ~50% maternal origin
- Slightly associated with advanced maternal age

### Gene Dosage Effects
- Extra X genes escaping inactivation
- SHOX duplication: Tall stature
- Other PAR genes: Variable effects

### Testicular Changes
- Germ cell loss begins prenatally
- Fibrosis progressive from puberty
- Hyalinization of seminiferous tubules
- Leydig cell dysfunction

## Fertility

### Sperm Production
| Age | Finding |
|-----|---------|
| Prepubertal | May have spermatogonia |
| Adult (classic) | Azoospermia in 90%+ |
| Mosaic | 50% may have sperm |

### Fertility Options
| Approach | Success Rate |
|----------|--------------|
| TESE + ICSI | 30-50% sperm retrieval |
| Earlier intervention | Higher success (research) |
| Cryopreservation | Adolescent consideration |

### Offspring
- Chromosomally normal in most cases
- Low risk of XXY transmission

## Endocrine Management

### Testosterone Replacement
| Formulation | Considerations |
|-------------|----------------|
| Injections | Cost-effective |
| Gels | Steady levels |
| Patches | Less common |

### Monitoring
- Testosterone levels
- Hematocrit
- Bone density
- PSA (when appropriate)

### Goals
- Virilization
- Bone health
- Metabolic health
- Quality of life`,
      keyTerms: [
        { term: "seminiferous tubules", definition: "Structures in testes where sperm are produced" },
        { term: "spermatogonia", definition: "Precursor cells that develop into sperm" },
        { term: "azoospermia", definition: "Absence of sperm in ejaculate" },
        { term: "hyalinization", definition: "Degeneration of tissue into glass-like material" },
      ],
      clinicalNotes: "Earlier testosterone replacement may improve metabolic and bone outcomes. Discuss fertility preservation in adolescence before testicular decline complete. Screen for breast cancer awareness.",
    },
    4: {
      level: 4,
      summary: "Advanced Klinefelter management encompasses individualized testosterone optimization, fertility preservation timing, cardiometabolic risk reduction, and psychosocial support across the lifespan.",
      explanation: `## Testosterone Optimization

### Individualized Approach
| Factor | Consideration |
|--------|---------------|
| Baseline | Symptom severity |
| Goals | Virilization vs. fertility |
| Comorbidities | Cardiovascular risk |
| Patient preference | Formulation choice |

### Timing Debates
- Earlier initiation (pre-puberty) studied
- May improve body composition
- Fertility implications unclear

## Fertility Preservation

### Adolescent Consideration
| Age | Approach |
|-----|----------|
| 12-14 | Assessment of testicular sperm |
| 14-16 | Consider TESE if sperm present |
| Cryopreservation | If sperm found |

### Hormonal Manipulation
- FSH supplementation (research)
- Stop testosterone for retrieval attempt
- Re-initiate after procedures

## Cardiometabolic Health

### Risk Management
| Risk Factor | Intervention |
|-------------|--------------|
| Metabolic syndrome | Lifestyle, testosterone |
| Diabetes risk | Screening, prevention |
| Cardiovascular | Standard risk reduction |
| Osteoporosis | Testosterone, calcium/vitamin D |

### Breast Cancer
- 20-50x increased risk
- Awareness education
- Consider screening

## Psychosocial

### Neurodevelopment
- Language-based learning differences common
- Executive function challenges
- Individualized educational support

### Mental Health
- Increased anxiety/depression rates
- Body image concerns
- Infertility-related distress

### Transition
- Adult care coordination
- Employment support
- Relationship counseling`,
      keyTerms: [
        { term: "metabolic syndrome", definition: "Cluster of conditions including obesity, high blood pressure, abnormal lipids" },
        { term: "executive function", definition: "Cognitive skills including planning, organization, attention" },
        { term: "fertility preservation", definition: "Procedures to save reproductive potential for future use" },
      ],
      clinicalNotes: "Individualize testosterone approach based on patient goals and fertility wishes. Discuss adolescent fertility preservation before testicular decline. Address mental health proactively.",
    },
    5: {
      level: 5,
      summary: "State-of-the-art Klinefelter care integrates precision endocrine management, emerging fertility technologies, comprehensive cardiometabolic prevention, and research participation to optimize lifelong outcomes.",
      explanation: `## Precision Management

### Personalized Testosterone
- Pharmacogenomics (emerging)
- Dose optimization algorithms
- Long-term outcome tracking

### Novel Formulations
- Long-acting injectables
- Oral testosterone
- Selective androgen modulators (research)

## Fertility Advances

### Emerging Technologies
| Approach | Status |
|----------|--------|
| In vitro spermatogenesis | Research |
| Stem cell-derived sperm | Preclinical |
| Gene correction | Theoretical |

### Optimizing Current Approaches
- Timing studies
- Hormonal optimization
- Technical refinements

## Cardiometabolic Research

### Mechanisms
- Testosterone-independent effects
- X chromosome gene dosage
- Adipokine dysregulation

### Prevention Trials
- Lifestyle interventions
- Pharmacological approaches
- Long-term outcomes

## Quality of Life

### Patient-Reported Outcomes
- Standardized measures
- Treatment response
- Care optimization

### Support Networks
- Patient organizations
- Peer support
- Family resources

## Research Participation

### Current Focus
- Natural history studies
- Treatment optimization
- Novel interventions

### Clinical Trials
- Fertility technologies
- Endocrine approaches
- Neurocognitive outcomes`,
      keyTerms: [
        { term: "in vitro spermatogenesis", definition: "Laboratory production of sperm from precursor cells" },
        { term: "selective androgen receptor modulator", definition: "Drug with tissue-selective testosterone-like effects" },
        { term: "patient-reported outcomes", definition: "Health measures directly reported by patients about their experience" },
      ],
      clinicalNotes: "Encourage research participation to advance understanding and treatment. Monitor emerging fertility technologies. Comprehensive care team approach optimizes outcomes.",
    },
  },

  media: [],
  citations: [],
  crossReferences: [
    { targetId: "concept-chromosomal-disorders-overview", targetType: "concept", relationship: "parent", label: "Chromosomal Disorders" },
  ],
  tags: {
    systems: ["genetics", "endocrinology", "urology"],
    topics: ["chromosomal disorders", "sex chromosome abnormalities"],
    keywords: ["Klinefelter", "XXY", "hypogonadism", "infertility"],
    clinicalRelevance: "high",
    examRelevance: { usmle: true, nbme: true, shelf: ["medicine", "pediatrics"] },
  },
  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

export default klinefelterSyndromeContent;
