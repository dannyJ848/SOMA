/**
 * Turner Syndrome - Comprehensive Educational Content
 */

import { EducationalContent } from "../../../types";

export const turnerSyndromeContent: EducationalContent = {
  id: "condition-turner-syndrome",
  type: "condition",
  name: "Turner Syndrome",
  alternateNames: ["Monosomy X", "45,X", "Gonadal Dysgenesis"],
  hpoId: "HP:0000137",

  levels: {
    1: {
      level: 1,
      summary: "Turner syndrome is a condition affecting girls and women where one X chromosome is missing or partially missing, causing short stature and other health issues.",
      explanation: `Turner syndrome occurs when a girl is born with only one complete X chromosome instead of two. It only affects females and occurs in about 1 in 2,500 female births.

**Common features:**
- Short stature (usually under 5 feet)
- Ovaries do not develop properly
- May have heart or kidney problems
- Characteristic physical features (webbed neck, low hairline)

**What it means for health:**
- Most girls need growth hormone treatment
- Puberty often does not occur naturally
- Usually cannot have children naturally
- Need monitoring for heart and other health issues

**Important to know:**
- Intelligence is usually normal
- With proper medical care, can live healthy lives
- Hormone treatment helps with development
- Fertility options exist (donor eggs, adoption)`,
      keyTerms: [
        { term: "Turner syndrome", definition: "Condition in females caused by missing or incomplete X chromosome" },
        { term: "monosomy", definition: "Having only one copy of a chromosome instead of two" },
        { term: "short stature", definition: "Being much shorter than average for age and sex" },
      ],
      analogies: [
        "Having one X chromosome is like having only one of a pair of instruction manuals - development happens differently.",
        "Growth hormone treatment is like adding extra fertilizer to help a plant grow taller.",
      ],
      examples: [
        "A girl with Turner syndrome takes daily growth hormone injections to help her reach a taller adult height.",
        "A teenager with Turner syndrome takes estrogen to help develop secondary sex characteristics during puberty.",
      ],
    },
    2: {
      level: 2,
      summary: "Turner syndrome (45,X and variants) results from complete or partial monosomy of the X chromosome, causing gonadal dysgenesis, short stature, and associated congenital anomalies requiring comprehensive multidisciplinary management.",
      explanation: `Turner syndrome affects approximately 1 in 2,000-2,500 live female births, with many more affected pregnancies ending in miscarriage.

**Karyotype Types:**
| Type | Frequency | Features |
|------|-----------|----------|
| 45,X | 45% | Classic features |
| Mosaicism (45,X/46,XX) | 30% | Often milder |
| Isochromosome Xq | 15% | Variable |
| Other structural | 10% | Depends on content |

**Clinical Features:**
| Feature | Frequency |
|---------|-----------|
| Short stature | 95-100% |
| Gonadal dysgenesis | 90% |
| Lymphedema (newborn) | 25% |
| Webbed neck | 25% |
| Coarctation of aorta | 10-15% |
| Bicuspid aortic valve | 15-30% |
| Horseshoe kidney | 10% |
| Hearing loss | 30-50% |

**Management:**
| Issue | Intervention |
|-------|-------------|
| Short stature | Growth hormone |
| Puberty induction | Estrogen/progesterone |
| Cardiovascular | Regular imaging surveillance |
| Fertility | Donor egg, adoption |
| Autoimmune | Thyroid monitoring, celiac screening |

**Outcomes:**
- Normal intelligence (may have specific learning differences)
- Life expectancy reduced ~10-15 years (cardiovascular risk)
- Quality of life improved with comprehensive care`,
      keyTerms: [
        { term: "gonadal dysgenesis", definition: "Underdevelopment of ovaries, resulting in \"streak gonads\"" },
        { term: "coarctation", definition: "Narrowing of the aorta; requires surgical correction" },
        { term: "isochromosome", definition: "Abnormal chromosome with two copies of one arm" },
        { term: "streak gonad", definition: "Non-functional fibrous tissue where ovary should be" },
      ],
      analogies: [
        "Streak gonads are like a seed that never developed into a plant - the structure is there but not functional.",
        "Coarctation is like a kink in a garden hose - blood cannot flow through properly.",
      ],
    },
    3: {
      level: 3,
      summary: "Turner syndrome pathophysiology involves haploinsufficiency of X chromosome genes escaping inactivation, with phenotypic variability influenced by karyotype, mosaicism distribution, and parental origin of retained X chromosome.",
      explanation: `## Molecular Basis

### Gene Dosage
- SHOX haploinsufficiency: Short stature
- Genes escaping X-inactivation: Require two copies
- PAR regions: Critical for development

### Karyotype-Phenotype Correlations
| Karyotype | Expected Phenotype |
|-----------|-------------------|
| 45,X | Classic features |
| 46,X,i(Xq) | Similar to 45,X |
| 45,X/46,XX | Often milder |
| 45,X/46,XY | Gonadoblastoma risk |

### Y Chromosome Material
- Present in ~5-10% of TS
- Increased gonadoblastoma risk
- Gonadectomy consideration

## Cardiovascular

### Congenital
- Bicuspid aortic valve: 15-30%
- Coarctation: 10-15%
- Other: Elongated transverse arch

### Acquired
- Aortic root dilation
- Dissection risk (especially in pregnancy)
- Hypertension common

### Surveillance
- Baseline cardiac imaging
- Repeat q5-10 years (more frequent if abnormal)
- Blood pressure monitoring

## Endocrine Management

### Growth Hormone
- Start early (often age 4-6)
- Continue until near-adult height
- Gain: 5-8 cm average

### Puberty
- Estrogen starting ~12-14 years
- Gradual dose increase
- Progesterone added later

### Fertility
- Spontaneous pregnancy rare (2-5%)
- Cardiac evaluation essential before pregnancy
- Donor oocyte IVF option`,
      keyTerms: [
        { term: "SHOX gene", definition: "Short stature homeobox gene; haploinsufficiency causes short stature in TS" },
        { term: "gonadoblastoma", definition: "Tumor arising in dysgenetic gonad; risk with Y chromosome material" },
        { term: "PAR", definition: "Pseudoautosomal region; area of X-Y homology" },
        { term: "aortic root dilation", definition: "Enlargement of first part of aorta; dissection risk" },
      ],
      clinicalNotes: "Screen for Y chromosome material in all TS patients - gonadectomy indicated if present. Aortic dissection risk highest with bicuspid valve, coarctation, or dilation. Pre-pregnancy cardiac evaluation mandatory.",
    },
    4: {
      level: 4,
      summary: "Advanced Turner syndrome management encompasses individualized cardiovascular risk stratification, fertility preservation strategies, transition optimization, and emerging targeted therapeutics.",
      explanation: `## Cardiovascular Risk

### Risk Stratification
| Risk Factor | Impact |
|-------------|--------|
| Bicuspid valve + dilation | Highest risk |
| Coarctation | Significant |
| Hypertension | Additive |
| Pregnancy | Acute increase |

### Imaging Protocol
| Scenario | Frequency |
|----------|-----------|
| No structural disease | Every 5-10 years |
| Bicuspid valve | Every 3-5 years |
| Dilation | Annually or more |

### Pregnancy Counseling
- Pre-pregnancy cardiac workup essential
- Aortic diameter >25 mm/m²: High risk
- Consider discouraging pregnancy if very high risk

## Fertility

### Ovarian Reserve Assessment
- AMH levels
- Antral follicle count
- Best preserved in mosaic TS

### Preservation Options
- Oocyte cryopreservation if viable
- Ovarian tissue cryopreservation (experimental)
- Generally low success in 45,X

### Reproductive Options
| Option | Consideration |
|--------|---------------|
| Donor oocyte | Cardiac risk evaluation |
| Gestational carrier | Eliminates maternal cardiac risk |
| Adoption | No medical restrictions |

## Transition

### Adult Care Needs
- Cardiology
- Endocrinology
- Audiology
- Gynecology

### Psychosocial
- Body image
- Relationships
- Employment
- Independent living

## Emerging Therapeutics

### SHOX-Targeted
- Research into molecular approaches
- Gene therapy potential

### Cardiovascular
- Optimal BP management
- Statin therapy research`,
      keyTerms: [
        { term: "AMH", definition: "Anti-Mullerian hormone; marker of ovarian reserve" },
        { term: "aortic size index", definition: "Aortic diameter indexed to body surface area; predicts risk" },
        { term: "gestational carrier", definition: "Woman who carries pregnancy for another person" },
      ],
      clinicalNotes: "Aortic dissection risk highest in pregnancy - thorough pre-conception evaluation required. Early discussion of fertility options important. Transition planning should start in adolescence.",
    },
    5: {
      level: 5,
      summary: "State-of-the-art Turner syndrome care integrates precision cardiovascular monitoring, advanced reproductive technologies, multidisciplinary transitional care models, and research participation for novel therapeutics.",
      explanation: `## Precision Cardiovascular

### Advanced Imaging
- Cardiac MRI for aortic assessment
- 4D flow for hemodynamics
- CT angiography when needed

### Risk Prediction
- Integrated risk models
- Genetic modifiers research
- Biomarker development

### Surgical Considerations
- Prophylactic aortic surgery thresholds
- Valve repair vs. replacement
- Endovascular options emerging

## Reproductive Technologies

### Research Advances
- iPSC-derived oocytes (experimental)
- Ovarian tissue engineering
- Uterine transplantation (selected cases)

### Ethical Framework
- Pregnancy risk disclosure
- Shared decision-making
- Third-party reproduction counseling

## Lifespan Care

### Multidisciplinary Models
| Age | Focus |
|-----|-------|
| Pediatric | Growth, cardiac screening |
| Adolescent | Puberty, transition |
| Adult | Cardiovascular, fertility |
| Aging | Bone health, cognition |

### Quality Metrics
- Care coordination
- Surveillance completion
- Patient-reported outcomes

## Research Participation

### Current Focus
- Cardiovascular risk factors
- Neurocognitive outcomes
- Quality of life optimization

### Clinical Trials
- GH optimization
- Cardiovascular protection
- Fertility preservation`,
      keyTerms: [
        { term: "4D flow MRI", definition: "Advanced cardiac imaging assessing blood flow patterns" },
        { term: "iPSC-derived oocytes", definition: "Experimental approach creating eggs from induced pluripotent stem cells" },
        { term: "care coordination", definition: "Systematic integration of care across multiple specialists" },
      ],
      clinicalNotes: "Establish ongoing care with TS specialist team. Regular cardiac surveillance lifelong. Discuss fertility early to allow informed planning. Encourage research participation.",
    },
  },

  media: [],
  citations: [],
  crossReferences: [
    { targetId: "concept-chromosomal-disorders-overview", targetType: "concept", relationship: "parent", label: "Chromosomal Disorders" },
  ],
  tags: {
    systems: ["genetics", "endocrinology", "cardiology"],
    topics: ["chromosomal disorders", "sex chromosome abnormalities"],
    keywords: ["Turner syndrome", "45X", "short stature", "gonadal dysgenesis"],
    clinicalRelevance: "high",
    examRelevance: { usmle: true, nbme: true, shelf: ["pediatrics", "medicine"] },
  },
  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

export default turnerSyndromeContent;
