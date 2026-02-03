/**
 * Genetic Risk Assessment - Comprehensive Educational Content
 *
 * Covers methods for assessing genetic risk including pedigree analysis,
 * risk calculation tools, and communication of risk information.
 */

import { EducationalContent } from "../../types";

export const riskAssessmentContent: EducationalContent = {
  id: "concept-risk-assessment",
  type: "concept",
  name: "Genetic Risk Assessment",
  alternateNames: [
    "Risk Calculation",
    "Genetic Risk Evaluation",
    "Family Risk Assessment",
  ],

  levels: {
    1: {
      level: 1,
      summary:
        "Genetic risk assessment helps determine your chances of developing a genetic condition or passing one to your children based on your family history and sometimes genetic testing.",
      explanation: `When you visit a genetic counselor or doctor about a genetic condition, they will help figure out your "risk" - your chance of being affected by or carrying a genetic condition.

**What information is used?**

1. **Family History**
   The most important tool is gathering information about your family:
   - Who has had health conditions
   - What age they were diagnosed
   - How people are related to you

2. **Your Personal Health**
   - Your own health conditions
   - Your age
   - Other factors like ancestry

3. **Genetic Test Results** (if available)
   - Your own test results
   - Test results from family members

**How is risk expressed?**

Risk can be described in different ways:
- As a percentage (like "50% chance")
- As a fraction (like "1 in 4")
- As words (like "high risk" or "low risk")
- Compared to the general population ("twice the average risk")

**What does risk mean?**

It is important to understand that:
- Risk is a probability, not a certainty
- A 30% risk means most people (70%) will NOT be affected
- Even low risks are not zero
- Risk may change with new information

**Using risk information:**

Knowing your risk helps you:
- Decide whether to have genetic testing
- Plan medical screenings
- Make decisions about prevention
- Understand what might happen in your family`,
      keyTerms: [
        {
          term: "risk",
          definition:
            "The chance or probability that something will happen, like developing a disease",
        },
        {
          term: "family history",
          definition:
            "Information about health conditions in your relatives that helps determine your risk",
        },
        {
          term: "probability",
          definition:
            "How likely something is to happen, often expressed as a percentage or fraction",
        },
        {
          term: "carrier",
          definition:
            "Someone who has one copy of a gene change and can pass it to their children",
        },
      ],
      analogies: [
        "Risk is like a weather forecast - a 30% chance of rain means it probably will not rain, but you might want to bring an umbrella.",
        "Family history is like a puzzle - the more pieces you have, the clearer the picture of your risk becomes.",
        "Risk percentages are like odds in a game - they tell you what is likely but cannot predict what will actually happen.",
      ],
      examples: [
        "If your mother has a BRCA gene mutation, your risk of inheriting it is 50% (1 in 2).",
        "If both parents carry the gene for cystic fibrosis, each child has a 25% (1 in 4) chance of having the condition.",
        "A woman with a strong family history of breast cancer might have a 30% lifetime risk compared to the average 12% risk.",
      ],
    },
    2: {
      level: 2,
      summary:
        "Genetic risk assessment integrates family history analysis, inheritance pattern recognition, empiric risk data, and risk models to quantify the probability of carrying a genetic variant or developing a hereditary condition.",
      explanation: `Genetic risk assessment is a systematic process for determining the likelihood of genetic conditions in individuals and families.

**Components of Risk Assessment:**

**1. Pedigree Construction and Analysis**

A pedigree is a family tree diagram showing health information:

| Symbol | Meaning |
|--------|---------|
| Square | Male |
| Circle | Female |
| Filled | Affected |
| Half-filled | Carrier |
| Diagonal line | Deceased |
| Arrow | Proband (person being evaluated) |

Key observations:
- Vertical transmission → autosomal dominant
- Horizontal (siblings) → autosomal recessive
- Males only → X-linked
- Maternal only → mitochondrial

**2. Types of Risk**

| Risk Type | Definition | Example |
|-----------|------------|---------|
| Prior risk | Baseline risk before additional information | Population carrier frequency |
| Conditional risk | Probability given specific conditions | Risk if parent is carrier |
| Joint risk | Combination of independent probabilities | Carrier × carrier |
| Posterior risk | Updated risk after new information | After negative test |
| Recurrence risk | Chance the condition will occur again | In future pregnancy |

**3. Inheritance-Based Risks**

| Pattern | Recurrence Risk | Carrier Risk |
|---------|-----------------|--------------|
| Autosomal dominant | 50% | N/A |
| Autosomal recessive | 25% (both parents carriers) | 2/3 for unaffected sibs |
| X-linked recessive | 50% of males (carrier mother) | 50% of daughters |

**4. Risk Models**

When pedigree alone is insufficient, models help estimate risk:

| Model | Application |
|-------|-------------|
| Claus tables | BRCA probability |
| BRCAPRO | BRCA mutation probability |
| Tyrer-Cuzick | Breast cancer risk |
| PREMM5 | Lynch syndrome probability |
| Couch/Myriad | BRCA mutation probability |

**5. Communicating Risk**

Best practices:
- Use multiple formats (%, fractions, visual aids)
- Provide absolute rather than relative risk when possible
- Compare to general population
- Address uncertainty
- Check understanding

**6. Factors Modifying Risk**

Risk estimates may be affected by:
- Incomplete family history
- Small family size
- Reduced penetrance
- Variable expressivity
- Phenocopies (non-genetic cases)`,
      keyTerms: [
        {
          term: "pedigree",
          definition:
            "A diagram showing family relationships and health history used to identify inheritance patterns",
        },
        {
          term: "proband",
          definition:
            "The individual through whom a family is ascertained for genetic evaluation",
          pronunciation: "PROH-band",
        },
        {
          term: "recurrence risk",
          definition:
            "The probability that a genetic condition will occur again in a family",
        },
        {
          term: "phenocopy",
          definition:
            "A condition that appears similar to a genetic disorder but has non-genetic causes",
        },
        {
          term: "empiric risk",
          definition:
            "Risk estimates based on observed data from populations rather than theoretical calculations",
        },
      ],
      analogies: [
        "A pedigree is like a medical family tree - it shows not just relationships but also health patterns.",
        "Risk models are like calculators that combine multiple factors to give a personalized estimate.",
        "Posterior risk is like updating the weather forecast after seeing new satellite data.",
      ],
    },
    3: {
      level: 3,
      summary:
        "Advanced genetic risk assessment employs Bayesian analysis, penetrance-adjusted calculations, risk model selection, and statistical methods to provide accurate probability estimates that account for test performance characteristics and clinical modifiers.",
      explanation: `## Quantitative Risk Calculation

### Bayesian Analysis

**Principle:**
Combines prior probability with new information to calculate posterior probability.

**Formula:**
\`\`\`
Posterior probability = (Prior × Conditional) / Σ(Prior × Conditional for all hypotheses)
\`\`\`

**Example - Carrier Risk Calculation:**

Scenario: Woman with affected brother (CF), negative expanded CF screen

| Hypothesis | Prior | Conditional | Joint |
|------------|-------|-------------|-------|
| Carrier | 2/3 | 0.10 (test miss) | 0.067 |
| Non-carrier | 1/3 | 1.0 (true neg) | 0.333 |
| **Total** | | | 0.400 |

Posterior carrier risk: 0.067/0.400 = **16.7%** (reduced from 67%)

### Test Performance Integration

**Sensitivity and Specificity:**
- Sensitivity: P(positive test | affected)
- Specificity: P(negative test | unaffected)
- Detection rate: % of cases identified by test

**Impact on Risk:**

| Test Result | Effect on Risk |
|-------------|----------------|
| Positive | Confirms high risk (PPV) |
| Negative | Reduces but may not eliminate risk |

**Residual Risk After Negative Test:**
\`\`\`
Residual risk = Prior risk × (1 - Sensitivity) / [(Prior × (1-Sens)) + ((1-Prior) × Spec)]
\`\`\`

### Penetrance Adjustments

**Age-Dependent Penetrance:**

For conditions like BRCA, penetrance increases with age:

| Age | Cumulative Penetrance |
|-----|----------------------|
| 30 | 3-5% |
| 40 | 15-20% |
| 50 | 35-40% |
| 60 | 50-55% |
| 70 | 60-70% |

**Calculation:**
- Unaffected individual at age X has "survived" to that age without cancer
- Reduces posterior probability of carrying mutation
- More significant for older unaffected individuals

### Risk Model Applications

**BRCAPRO:**
- Bayesian model for BRCA1/2 probability
- Incorporates:
  - Breast and ovarian cancer in relatives
  - Ages at diagnosis
  - Bilateral breast cancer
  - Ashkenazi ancestry

**PREMM5:**
- Lynch syndrome probability
- Uses:
  - Colorectal and endometrial cancer
  - Other Lynch-associated tumors
  - Ages at diagnosis
  - Family structure

**CanRisk/BOADICEA:**
- Multiple genes (BRCA1/2, PALB2, CHEK2, ATM)
- Polygenic risk score integration
- Breast density
- Risk-reducing interventions

### Complex Inheritance Risk

**Consanguinity:**
- Increases homozygosity
- Coefficient of inbreeding (F)
- First cousins: F = 1/16
- AR condition risk increased by: 1/4 × F × carrier frequency

**Multifactorial Conditions:**

| Relationship | Approximate Risk |
|--------------|------------------|
| MZ twin | High concordance |
| First-degree relative | 2-10× population |
| Second-degree relative | Lower increase |

### Statistical Confidence

**Confidence Intervals:**
- Risk estimates have uncertainty
- Wider intervals with limited family information
- Narrower with more data

**Likelihood Ratios:**
- Positive LR: Increases probability when test positive
- Negative LR: Decreases probability when test negative
- Higher/lower LRs more informative`,
      keyTerms: [
        {
          term: "Bayesian analysis",
          definition:
            "Statistical method combining prior probability with new evidence to update risk estimates",
        },
        {
          term: "conditional probability",
          definition:
            "Probability of an event given that another event has occurred",
        },
        {
          term: "residual risk",
          definition:
            "Remaining risk after accounting for negative test results",
        },
        {
          term: "coefficient of inbreeding",
          definition:
            "Probability that an individual inherits two alleles identical by descent",
        },
        {
          term: "positive predictive value",
          definition:
            "Probability of disease given a positive test result",
        },
        {
          term: "age-dependent penetrance",
          definition:
            "Penetrance that increases with age for adult-onset conditions",
        },
      ],
      clinicalNotes:
        "Bayesian calculations are essential when test sensitivity is less than 100%. Always consider residual risk after negative testing. Risk models have limitations - use appropriate model for clinical question and acknowledge uncertainties. Document methodology used in risk calculation.",
    },
    4: {
      level: 4,
      summary:
        "Expert-level risk assessment integrates multiple genetic testing modalities, accounts for complex family structures and genetic modifiers, employs simulation methods for challenging pedigrees, and addresses health equity in model application.",
      explanation: `## Advanced Risk Modeling

### Multi-Gene Risk Integration

**Panel Testing Considerations:**
- Each gene has different penetrance
- Moderate-penetrance genes contribute to risk
- Polygenic background modifies monogenic risk

**Combined Risk Calculation:**

| Component | Approach |
|-----------|----------|
| Monogenic | Gene-specific penetrance |
| Polygenic | PRS contribution |
| Clinical | Non-genetic risk factors |
| Combined | Integrated models (e.g., CanRisk) |

### Polygenic Risk Scores

**Components:**
- Multiple SNPs with small effects
- Weighted by effect size
- Population-specific development

**Integration with Monogenic Risk:**

For BRCA1/2 carriers:
- PRS modifies absolute risk
- Top quintile PRS: Higher than average penetrance
- Bottom quintile PRS: Lower than average penetrance

**Current Limitations:**
- Primarily validated in European populations
- Clinical utility still being established
- Not diagnostic - probabilistic only

### Complex Pedigree Analysis

**Challenges:**

| Situation | Approach |
|-----------|----------|
| Uncertain paternity | Sensitivity analysis |
| Missing information | Multiple assumptions |
| Large kindreds | Software analysis |
| Multiple conditions | Consider pleiotropy vs. phenocopy |

**Software Tools:**

| Tool | Application |
|------|-------------|
| Linkage | Segregation analysis |
| MENDEL | General genetic analysis |
| BOADICEA/CanRisk | Breast/ovarian cancer |
| PancPRO | Pancreatic cancer |

### Simulation Methods

**Monte Carlo Simulation:**
- Useful for complex pedigrees
- Generates probability distributions
- Accounts for multiple uncertainties

**Applications:**
- Aggregate risk from multiple sources
- Confidence interval estimation
- Sensitivity analysis

### Model Validation and Selection

**Considerations:**

| Factor | Question |
|--------|----------|
| Calibration | Does predicted risk match observed? |
| Discrimination | Can model distinguish high vs. low risk? |
| Population | Was it validated in relevant population? |
| Clinical use | Is it actionable? |

**Model Comparisons:**
- Different models may give different risks
- Choose model appropriate for:
  - Clinical question
  - Available data
  - Patient population

### De Novo Mutation Risk

**Considerations:**
- Apparent negative family history
- Parental age effects
- Gonadal mosaicism

**Risk Calculation:**
| Scenario | Recurrence Risk |
|----------|-----------------|
| Confirmed de novo in proband | 1-6% (gonadal mosaicism) |
| De novo in parent (somatic mosaicism) | <50% for offspring |
| Unknown (no parental testing) | Consider both scenarios |

## Health Equity Considerations

### Population Differences

**Allele Frequency Variation:**
- Risk models developed in specific populations
- May not generalize across ancestries
- VUS rates higher in underrepresented groups

**Addressing Disparities:**

| Issue | Approach |
|-------|----------|
| Model ancestry | Use ancestry-appropriate model or acknowledge limitation |
| VUS disparities | Pursue functional studies, reclassification |
| Risk factor differences | Consider population-specific data |

### Access to Assessment

**Barriers:**
- Genetic counselor availability
- Insurance coverage
- Health literacy
- Cultural factors

**Solutions:**
- Telegenetics
- Multilingual resources
- Community engagement
- Provider education

## Documentation and Communication

### Risk Documentation

**Required Elements:**
- Method used (model, Bayesian, etc.)
- Inputs and assumptions
- Confidence/limitations
- Date (may need updating)

### Patient Communication

**Effective Strategies:**

| Strategy | Example |
|----------|---------|
| Multiple formats | "30%, or about 1 in 3" |
| Visual aids | Pictograph showing 30/100 |
| Comparison | "3 times the average" |
| Framing | Both positive and negative frames |
| Check understanding | Teach-back method |

### Updating Risk

**Triggers for Recalculation:**
- New family history information
- New test results
- Model updates
- Patient age changes (age-dependent conditions)
- Reclassification of variants`,
      keyTerms: [
        {
          term: "polygenic risk score",
          definition:
            "Aggregate risk from multiple common genetic variants, each with small effect",
        },
        {
          term: "Monte Carlo simulation",
          definition:
            "Computational method using random sampling to estimate probability distributions",
        },
        {
          term: "gonadal mosaicism",
          definition:
            "Presence of mutation in gonadal cells but not other tissues, allowing transmission to offspring",
        },
        {
          term: "model calibration",
          definition:
            "Agreement between predicted and observed outcomes in a population",
        },
        {
          term: "discrimination",
          definition:
            "Ability of a model to distinguish between those who will and will not develop disease",
        },
        {
          term: "sensitivity analysis",
          definition:
            "Evaluation of how changes in assumptions affect calculated risk",
        },
      ],
      clinicalNotes:
        "Document model choice and rationale. When multiple models give different results, discuss with patient. PRS should not yet drive clinical decisions in isolation but may refine risk estimates. Update risk calculations when significant new information becomes available. Consider population-specific data when available.",
    },
    5: {
      level: 5,
      summary:
        "State-of-the-art genetic risk assessment integrates whole genome data, dynamic risk models, machine learning approaches, and implementation science to deliver actionable, personalized risk information across diverse populations and clinical contexts.",
      explanation: `## Genomic Era Risk Assessment

### Whole Genome Approaches

**Comprehensive Variant Assessment:**
- Single gene → Multi-gene panels → WES/WGS
- Each level adds information and complexity
- Integration challenge: Multiple findings per individual

**Incidental/Secondary Findings:**
| Category | Impact on Risk |
|----------|----------------|
| Primary finding | Direct answer to clinical question |
| Secondary finding | Actionable finding in ACMG genes |
| Pharmacogenomic | Drug response prediction |
| Carrier status | Reproductive implications |

### Machine Learning in Risk Prediction

**Applications:**

| Application | Approach |
|-------------|----------|
| Variant pathogenicity | Neural networks (e.g., AlphaMissense) |
| Risk prediction | Ensemble methods |
| Image analysis | CNN for pathology/imaging |
| Natural language | Extraction from EHR text |

**Current Limitations:**
- Training data biases
- Interpretability ("black box")
- Validation requirements
- Regulatory uncertainty

### Dynamic Risk Models

**Concept:**
Risk changes over time with:
- Age
- New family history
- Screening results
- Lifestyle changes
- New genetic information

**Implementation:**
- EHR-integrated tools
- Patient-facing apps
- Automated recalculation triggers
- Provider alerts for significant changes

### Integrated Risk Platforms

**Features:**
| Component | Function |
|-----------|----------|
| Genetic data | WGS/WES, PRS |
| Family history | Structured pedigree |
| Clinical data | EHR integration |
| Imaging | Density, findings |
| Biomarkers | Blood-based markers |
| Output | Unified risk score |

**Examples:**
- CanRisk (breast/ovarian)
- AskRisk (multiple conditions)
- Custom institutional platforms

## Implementation Science

### Clinical Decision Support

**Integration Points:**

| Point | Application |
|-------|-------------|
| Ordering | Suggest appropriate testing |
| Result delivery | Interpret and recommend |
| Prescribing | Pharmacogenomic alerts |
| Surveillance | Screening reminders |

**Alert Design:**
- Severity tiering
- Actionable recommendations
- Override tracking
- Feedback loops

### Outcomes Research

**Key Metrics:**

| Metric | Assessment |
|--------|------------|
| Calibration | Predicted vs. observed risk |
| Clinical utility | Impact on outcomes |
| Patient outcomes | Decision quality, anxiety |
| Health system | Cost-effectiveness |

**Study Designs:**
- Prospective cohort
- Randomized trials of risk communication
- Implementation hybrid designs
- Health economic analyses

### Population-Level Implementation

**Screening Programs:**
- Population-based genetic screening proposals
- Cost-effectiveness considerations
- Infrastructure requirements
- Ethical framework

**Examples:**
| Program | Focus |
|---------|-------|
| Ashkenazi panel | Population with founder mutations |
| Universal Lynch | CRC tumor testing |
| Familial hypercholesterolemia | Cascade screening |

## Emerging Frontiers

### Liquid Biopsy Integration

**cfDNA Applications:**
- Cancer early detection
- Multi-cancer early detection (MCED) tests
- Integration with genetic risk

**Risk Framework:**
| Genetic Risk | cfDNA Result | Management |
|--------------|--------------|------------|
| High | Positive | Urgent workup |
| High | Negative | Continued surveillance |
| Low | Positive | Standard workup |
| Low | Negative | Routine care |

### Pharmacogenomic Risk

**Beyond Drug Response:**
- Drug-gene interaction risk
- Polypharmacy complexity
- Preventive applications

### Microbiome and Exposome

**Emerging Integration:**
- Gut microbiome affects drug metabolism
- Environmental exposures modify genetic risk
- Early-stage integration into models

## Ethical and Social Considerations

### Uncertainty Communication

**Challenges:**
- Models have inherent uncertainty
- Population vs. individual prediction
- Patient interpretation varies

**Best Practices:**
- Explicit uncertainty acknowledgment
- Range rather than point estimate
- Decision-making despite uncertainty
- Shared decision-making framework

### Algorithmic Fairness

**Concerns:**
| Issue | Impact |
|-------|--------|
| Training data bias | Inaccurate predictions for minorities |
| Variable missing data | Systematic exclusion |
| Outcome definitions | May differ across populations |

**Mitigation:**
- Diverse training cohorts
- Stratified validation
- Transparency in limitations
- Ongoing monitoring

### Return of Risk Information

**Considerations:**
| Factor | Question |
|--------|----------|
| Actionability | Can risk be modified? |
| Patient preference | What does patient want to know? |
| Timing | When is information useful? |
| Context | How to deliver appropriately? |

### Professional Education

**Training Needs:**
- Statistical literacy
- Model interpretation
- Uncertainty communication
- Technology competency
- Equity awareness

**Continuing Education:**
- Rapidly evolving field
- New models and tools
- Population data updates
- Implementation skills`,
      keyTerms: [
        {
          term: "dynamic risk model",
          definition:
            "Risk prediction that updates automatically as new information becomes available over time",
        },
        {
          term: "AlphaMissense",
          definition:
            "AI model predicting pathogenicity of missense variants using deep learning",
        },
        {
          term: "multi-cancer early detection",
          definition:
            "Blood-based tests designed to detect signals from multiple cancer types",
        },
        {
          term: "algorithmic fairness",
          definition:
            "Ensuring prediction models perform equitably across different populations",
        },
        {
          term: "exposome",
          definition:
            "Totality of environmental exposures from conception onward affecting health",
        },
        {
          term: "implementation hybrid design",
          definition:
            "Research design simultaneously testing clinical effectiveness and implementation strategies",
        },
      ],
      clinicalNotes: `Implementation priorities:
1. Integrate risk models into clinical workflow via EHR
2. Monitor model performance in local population
3. Update to newer models as validation data supports
4. Document limitations and communicate uncertainty explicitly
5. Track outcomes to assess real-world performance
6. Address equity in model selection and application
7. Train providers in interpretation and communication
8. Engage patients in shared decision-making about risk-based management`,
    },
  },

  media: [
    {
      id: "risk-calculation-diagram",
      type: "diagram",
      filename: "genetic-risk-calculation.svg",
      title: "Genetic Risk Calculation Methods",
      description:
        "Overview of approaches to calculating genetic risk",
    },
    {
      id: "bayesian-example",
      type: "diagram",
      filename: "bayesian-calculation.svg",
      title: "Bayesian Risk Calculation Example",
      description:
        "Step-by-step example of Bayesian carrier risk calculation",
    },
  ],

  citations: [
    {
      id: "young-2019",
      type: "textbook",
      title: "Risk Calculation in Genetic Counseling",
      authors: ["Young, I.D."],
      source: "Introduction to Risk Calculation in Genetic Counseling",
      chapter: "Multiple",
      license: "Oxford University Press",
    },
    {
      id: "lee-2019",
      type: "article",
      title:
        "BOADICEA: a comprehensive breast cancer risk prediction model",
      authors: ["Lee, A.", "et al."],
      source: "Genetics in Medicine",
      chapter: "21",
      page: "1708-1718",
    },
  ],

  crossReferences: [
    {
      targetId: "concept-genetic-counseling-overview",
      targetType: "concept",
      relationship: "parent",
      label: "Genetic Counseling Overview",
    },
    {
      targetId: "concept-autosomal-dominant",
      targetType: "concept",
      relationship: "related",
      label: "Autosomal Dominant Inheritance",
    },
    {
      targetId: "concept-autosomal-recessive",
      targetType: "concept",
      relationship: "related",
      label: "Autosomal Recessive Inheritance",
    },
  ],

  tags: {
    systems: ["genetics"],
    topics: [
      "risk assessment",
      "genetic counseling",
      "probability",
      "Bayesian analysis",
    ],
    keywords: [
      "risk calculation",
      "pedigree",
      "penetrance",
      "recurrence risk",
      "risk model",
    ],
    clinicalRelevance: "high",
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ["medicine", "obstetrics-gynecology"],
    },
  },

  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

export default riskAssessmentContent;
