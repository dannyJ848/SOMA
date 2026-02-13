/**
 * Predictive Genetic Testing - Comprehensive Educational Content
 */

import { EducationalContent } from "../../types";

export const predictiveTestingContent: EducationalContent = {
  id: "concept-predictive-testing",
  type: "concept",
  name: "Predictive Genetic Testing",
  alternateNames: ["Presymptomatic Testing", "Risk Assessment Testing"],

  levels: {
    1: {
      level: 1,
      summary: "Predictive genetic testing tells healthy people if they have gene changes that might cause disease later in life.",
      explanation: `Predictive genetic testing is for people who do not have symptoms of a genetic condition but want to know if they are at risk of developing one in the future.

**Why would someone get predictive testing?**
- A family member has a genetic condition
- To plan for the future
- To make decisions about health screening
- To decide about prevention options

**Important things to know:**
- A positive result does not mean you will definitely get the condition
- Testing is a personal choice - you can decide not to know
- Results affect not just you but your family too
- Genetic counseling helps you think through the decision

**Examples:**
- Testing for BRCA genes to learn breast cancer risk
- Testing for Huntington disease if a parent was affected
- Testing for hereditary heart conditions`,
      keyTerms: [
        { term: "predictive testing", definition: "Testing healthy people to see if they have genes that might cause disease later" },
        { term: "presymptomatic", definition: "Before any symptoms appear" },
        { term: "at-risk", definition: "Having a higher than average chance of developing a condition" },
      ],
      analogies: [
        "Predictive testing is like a weather forecast for your health - it tells you what might be coming, not what is certain.",
        "It is like looking at a map before a journey to see what obstacles might be ahead.",
      ],
      examples: [
        "A woman whose mother had breast cancer from a BRCA mutation gets tested to know her own risk.",
        "A person in their 30s with a family history of Huntington disease decides whether to learn their status.",
      ],
    },
    2: {
      level: 2,
      summary: "Predictive testing identifies pathogenic variants in asymptomatic individuals at risk for adult-onset hereditary conditions, enabling informed decisions about surveillance, prevention, and life planning.",
      explanation: `Predictive genetic testing is performed in healthy individuals with family history of hereditary conditions.

**Conditions Commonly Tested:**
| Category | Examples |
|----------|----------|
| Cancer syndromes | BRCA1/2, Lynch syndrome, Li-Fraumeni |
| Cardiac | HCM, LQTS, arrhythmogenic CMP |
| Neurological | Huntington disease, familial ALS |
| Other | ADPKD, hereditary hemochromatosis |

**Prerequisites:**
- Known pathogenic variant in family
- Genetic counseling before testing
- Assessment of psychological readiness
- Discussion of implications

**Outcomes of Positive Result:**
- Enhanced surveillance
- Prevention options (medications, surgery)
- Reproductive decisions
- Family cascade testing
- Life planning

**Outcomes of Negative Result:**
- Risk returns to general population level
- Surveillance per general guidelines
- Relief but may have survivor guilt

**Penetrance Considerations:**
- Not all carriers develop disease
- Risk modification possible for some conditions
- Results are probabilistic, not deterministic`,
      keyTerms: [
        { term: "cascade testing", definition: "Testing at-risk family members after a variant is found" },
        { term: "penetrance", definition: "Proportion of carriers who develop the condition" },
        { term: "surveillance", definition: "Regular monitoring to detect disease early" },
        { term: "risk-reducing surgery", definition: "Preventive removal of at-risk organs" },
      ],
      analogies: [
        "Penetrance is like probability - just because the forecast says 70% chance of rain does not mean it will definitely rain.",
        "Surveillance is like regular car maintenance - catching problems early before they become serious.",
      ],
    },
    3: {
      level: 3,
      summary: "Presymptomatic testing protocols incorporate psychological assessment, multi-session counseling, and careful result disclosure, with post-test management guided by gene-specific surveillance guidelines and risk-modification options.",
      explanation: `## Testing Protocols

### Huntington Disease Model
Multi-session protocol:
1. Initial session: Information, exploration of motivations
2. Psychological assessment
3. Neurological baseline
4. Decision-making session
5. Result disclosure (with support person)
6. Follow-up sessions

### Key Counseling Elements
| Element | Purpose |
|---------|---------|
| Motivation exploration | Ensure well-considered decision |
| Impact anticipation | Prepare for all outcomes |
| Support assessment | Ensure adequate resources |
| Timing evaluation | Avoid crisis periods |

### Psychological Considerations
**Assessment For:**
- Depression/anxiety
- Coping resources
- Support systems
- Prior trauma
- Unrealistic expectations

**Readiness Indicators:**
- Considered decision
- Emotional stability
- Clear motivations
- Support identified
- Understands implications

### Post-Test Management
**Positive Result:**
- Gene-specific surveillance protocols
- Prevention option discussion
- Family testing coordination
- Ongoing support

**Gene-Specific Surveillance Examples:**
| Condition | Key Surveillance |
|-----------|-----------------|
| BRCA | Breast MRI, mammogram, CA-125, consider RRSO |
| Lynch | Colonoscopy q1-2 years, consider GYN surveillance |
| HCM | Echo, consider ICD evaluation |
| Huntington | Multidisciplinary care, advance planning |`,
      keyTerms: [
        { term: "psychological assessment", definition: "Evaluation of mental health and readiness for test results" },
        { term: "result disclosure", definition: "Formal session where test results are communicated to patient" },
        { term: "RRSO", definition: "Risk-reducing salpingo-oophorectomy; preventive removal of ovaries and tubes" },
        { term: "ICD", definition: "Implantable cardioverter-defibrillator; device preventing sudden cardiac death" },
      ],
      clinicalNotes: "Multi-session protocols for conditions like HD reduce adverse psychological outcomes. Document psychological assessment and readiness evaluation before proceeding.",
    },
    4: {
      level: 4,
      summary: "Advanced presymptomatic testing addresses penetrance modification through genetic and lifestyle factors, integrates polygenic risk scores, and navigates testing of minors, reproductive considerations, and evolving management guidelines.",
      explanation: `## Penetrance Modifiers

### Genetic Modifiers
| Condition | Modifier | Effect |
|-----------|----------|--------|
| BRCA | Polygenic risk score | Refines risk estimates |
| HD | CAG repeat length | Earlier onset with longer |
| LQTS | Gene-specific | QTc differences by gene |

### Lifestyle Modifiers
- BRCA: Oophorectomy timing affects breast risk
- Lynch: Aspirin reduces colorectal cancer risk
- HCM: Exercise restrictions

## Special Populations

### Testing Minors
| Scenario | Recommendation |
|----------|---------------|
| Childhood-onset condition | Test when surveillance begins |
| Adult-onset, no intervention | Defer to adulthood |
| Mature minor request | Case-by-case evaluation |

### Reproductive Context
- Results before conception
- Impact on family planning
- PGT-M options
- Prenatal testing considerations

## Evolving Guidelines

### Risk-Adapted Surveillance
- Individual risk factors
- Modifying factors
- Shared decision-making
- Guideline updates tracking`,
      keyTerms: [
        { term: "penetrance modifier", definition: "Factor that changes the probability of disease expression in variant carriers" },
        { term: "PGT-M", definition: "Preimplantation genetic testing for monogenic disorders" },
        { term: "mature minor", definition: "Adolescent with demonstrated decision-making capacity" },
      ],
      clinicalNotes: "Polygenic risk scores increasingly used to refine penetrance estimates for BRCA carriers. Document rationale when testing minors for adult-onset conditions.",
    },
    5: {
      level: 5,
      summary: "State-of-the-art predictive testing integrates precision prevention approaches, emerging chemoprevention trials, and personalized risk communication while addressing insurance implications, return of results at scale, and health equity.",
      explanation: `## Precision Prevention

### Risk-Adapted Strategies
| Risk Level | Intervention Intensity |
|------------|----------------------|
| High (gene + PRS) | Maximum prevention |
| Moderate | Enhanced surveillance |
| Lower (gene + protective PRS) | Shared decision-making |

### Emerging Interventions
- PARP inhibitor prevention trials (BRCA-P)
- Immunoprevention research
- Targeted chemoprevention

## Population Screening Debates

### Population-Based Testing
| Argument | Consideration |
|----------|--------------|
| For | Earlier identification, more cascade |
| Against | Health system readiness, counseling capacity |

### DTC and Opportunistic Testing
- Quality variation
- Follow-up challenges
- Incidental findings

## Policy Considerations

### Insurance Impact
- GINA limitations (life, disability, LTC)
- Pre-test discussion essential
- State-level variation

### Health Equity
- Access disparities
- Diverse population data needs
- Culturally appropriate counseling

### Return of Results at Scale
- Alternative counseling models
- Digital tools
- Tiered approaches`,
      keyTerms: [
        { term: "BRCA-P trial", definition: "Ongoing study testing PARP inhibitor for cancer prevention in BRCA carriers" },
        { term: "population screening", definition: "Offering genetic testing to general population regardless of family history" },
        { term: "precision prevention", definition: "Tailoring preventive strategies to individual genetic risk profile" },
      ],
      clinicalNotes: "Address GINA limitations in pre-test counseling. Stay current with emerging prevention trials for high-risk patients. Consider equity in access to predictive testing programs.",
    },
  },

  media: [],
  citations: [],
  crossReferences: [
    { targetId: "concept-genetic-testing-overview", targetType: "concept", relationship: "parent", label: "Genetic Testing Overview" },
  ],
  tags: {
    systems: ["genetics"],
    topics: ["genetic testing", "prevention", "risk assessment"],
    keywords: ["presymptomatic", "predictive", "surveillance"],
    clinicalRelevance: "high",
    examRelevance: { usmle: true, nbme: true, shelf: ["medicine"] },
  },
  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

export default predictiveTestingContent;
