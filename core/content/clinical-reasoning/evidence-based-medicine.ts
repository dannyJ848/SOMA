/**
 * Evidence-Based Medicine Educational Content
 *
 * How doctors use research evidence in practice - finding, evaluating,
 * and applying scientific research to make the best medical decisions.
 */

import { EducationalContent } from '../types';

export const evidenceBasedMedicineContent: EducationalContent = {
  id: 'clinical-reasoning-evidence-based-medicine',
  type: 'concept',
  name: 'Evidence-Based Medicine',
  alternateNames: ['EBM', 'Evidence-Based Practice', 'Evidence-Based Healthcare'],

  levels: {
    1: {
      level: 1,
      summary: 'Evidence-based medicine is when doctors use the best scientific research to decide how to treat patients, combined with their experience and what the patient wants.',
      explanation: `# Using Science to Help Patients

Doctors want to give you the best care possible. Evidence-based medicine (EBM) is how they make sure they're using treatments that really work.

## What Is Evidence-Based Medicine?

Think of it as a three-legged stool:

1. **Best Research** - What science says works
2. **Doctor's Experience** - What they've learned from treating patients
3. **What You Want** - Your preferences and values

All three legs are important! If one is missing, the stool falls over.

## Why Evidence-Based Medicine Matters

### Before EBM

Doctors used to:
- Do things just because "that's how we've always done it"
- Trust experts who might be wrong
- Use treatments that didn't actually work
- Sometimes even cause harm with good intentions

### After EBM

Doctors now:
- Look at research to see what really works
- Stop using treatments that don't help
- Choose treatments based on proof, not just opinions
- Keep learning as new research comes out

## The Research Ladder

Not all research is equally good. Imagine a ladder:

### Top of the Ladder (Best Evidence)

**Systematic Reviews**
- Scientists look at ALL the studies on a topic
- Combine the results to find the truth
- Like reading 100 book reports instead of just one

**Randomized Controlled Trials**
- Scientists divide people into two groups randomly
- One group gets the treatment, one doesn't
- This proves if the treatment really works

### Middle of the Ladder (Okay Evidence)

**Cohort Studies**
- Scientists follow groups of people over time
- See what happens to them
- Good for finding connections

### Bottom of the Ladder (Weakest Evidence)

**Case Reports**
- Doctors describe one interesting patient
- Can teach us something new
- But not proof that something works

## How Doctors Use Evidence

### Step 1: Ask a Question

"What's the best treatment for ear infections?"

### Step 2: Look for Research

- Search medical databases
- Find studies on ear infections
- Look for the best studies (top of the ladder)

### Step 3: Read the Research

- Did the study include enough people?
- Was it done fairly?
- Do the results make sense?

### Step 4: Apply to You

The doctor thinks:
- Does this research apply to my patient?
- Are they similar to the people in the study?
- Is this what my patient wants?

## Why Studies Don't Always Apply

**Your situation is different:**

| Research Study | You |
|----------------|-----|
| Mostly adults | You're a child |
| Severe cases | Your case is mild |
| People in hospitals | You're at home |
| Took the medicine perfectly | You might forget doses |

That's why the doctor has to think carefully about whether the research applies to YOU.

## When Research Changes

Medical knowledge keeps growing:

**New research can show:**
- Treatments we thought worked... don't
- Treatments we thought were safe... aren't
- Better treatments than we had before

This means doctors always have to keep learning!

## Examples of Evidence-Based Medicine in Action

### Example 1: Stomach Ulcers

**Before:** Doctors thought ulcers were caused by stress and spicy food. Treatment was bland diet and medicines to reduce stomach acid.

**Research:** Scientists found bacteria cause most ulcers!

**Now:** Treatment is antibiotics to kill the bacteria. Much more effective!

### Example 2: Back Pain

**Before:** Doctors often prescribed bed rest.

**Research:** Studies showed staying active helps more than resting.

**Now:** Doctors recommend gentle movement, not bed rest.

### Example 3: Hormone Therapy

**Before:** Doctors gave hormones to all older women for heart health.

**Research:** Big studies showed this actually caused more harm than good.

**Now:** Hormones only used for specific reasons, not everyone.

## What This Means for You

**You can help by asking:**
- "Is this treatment based on research?"
- "How strong is the evidence?"
- "Are there other options with better evidence?"
- "What happens if we wait and see?"

**Remember:**
- Sometimes there's no research on your specific problem
- Doctor's experience still matters
- Your preferences are important too
- Medicine keeps changing - that's a good thing!`,
      keyTerms: [
        { term: 'evidence-based medicine (EBM)', definition: 'Using the best available research evidence along with doctor expertise and patient values to make medical decisions' },
        { term: 'research', definition: 'Studies done by scientists to find out if treatments work' },
        { term: 'systematic review', definition: 'A study that combines all other studies on a topic to find the real answer' },
        { term: 'randomized controlled trial', definition: 'A study where people are randomly assigned to different treatments to see which works best' },
      ],
      analogies: [
        'Evidence-based medicine is like buying a product - you read reviews (research), ask friends with experience (doctors), and think about what you need (your preferences).',
        'The evidence ladder is like a ladder to truth - studies at the top give you the best view.',
        'Medical research is like a puzzle - each study adds a piece, and over time we see the full picture.',
      ],
      examples: [
        'When deciding if antibiotics help ear infections, doctors look at studies comparing antibiotics to no treatment in children with ear infections.',
        'For back pain, doctors once prescribed bed rest. But research showed people who stayed active got better faster. Now doctors recommend movement instead.',
        'Scientists used to think hormone therapy prevented heart disease. Then a big study proved it actually increased risk. Now doctors use it much more carefully.',
      ],
      patientCounselingPoints: [
        'Ask your doctor if the treatment they recommend is based on research or their experience.',
        'It\'s okay to ask how strong the evidence is for a recommended treatment.',
        'Sometimes there isn\'t much research on a specific problem - in these cases, your doctor\'s experience is especially important.',
        'Medical recommendations change as new research comes out - this is normal and means medicine is improving.',
      ],
    },
    2: {
      level: 2,
      summary: 'Evidence-based medicine integrates the best available research evidence with clinical expertise and patient values to optimize healthcare decisions.',
      explanation: `# Evidence-Based Medicine: The Science of Good Medical Care

Evidence-based medicine (EBM) is the conscientious use of current best evidence in making decisions about the care of individual patients.

## The Three Pillars of EBM

EBM rests on three equal foundations:

### 1. Best Available Evidence

Research from medical studies, ranked by quality:
- Systematic reviews and meta-analyses (highest)
- Randomized controlled trials
- Clinical studies
- Expert opinion (lowest)

### 2. Clinical Expertise

The doctor's:
- Training and knowledge
- Experience with similar patients
- Understanding of local context
- Clinical judgment

### 3. Patient Values and Preferences

Your:
- Beliefs and expectations
- Concerns and fears
- Goals for treatment
- Life circumstances

All three are essential. Without any one, decisions are incomplete.

## The Hierarchy of Evidence

### Level 1: Systematic Reviews and Meta-Analyses

Studies that combine all available research on a question.

**Why it's strong:**
- Combines many studies
- Larger sample size
- Reduces bias
- Provides clear answers

**Example:** A review of 50 studies on aspirin for heart attack prevention.

### Level 2: Randomized Controlled Trials (RCTs)

The "gold standard" of single studies.

**How it works:**
- People randomly assigned to treatment groups
- One group gets treatment, one gets placebo
- Neither doctor nor patient knows who gets what (double-blind)
- Compares outcomes fairly

**Why it's strong:**
- Randomization prevents bias
- Comparison groups are similar
- Can prove cause and effect

### Level 3: Cohort Studies

Follows groups of people over time.

**Example:** Following 10,000 smokers and 10,000 non-smokers for 20 years to see who gets lung cancer.

**Strengths:**
- Good for studying long-term effects
- Can study rare outcomes
- More like real life

**Limitations:**
- Can't prove cause and effect as well
- Groups might be different from start

### Level 4: Case-Control Studies

Compares people with and without a condition.

**Example:** Comparing people with lung cancer to people without, asking about past smoking.

**Useful when:**
- Condition is rare
- Outcome takes many years

### Level 5: Case Series and Case Reports

Descriptions of individual patients.

**Useful for:**
- Discovering new diseases
- Recognizing rare side effects
- Generating questions for research

**Weak because:**
- No comparison group
- Could be coincidence

## The EBM Process

### Step 1: Formulate the Question

Use **PICO** format:

| Element | Meaning | Example |
|---------|---------|---------|
| **P** | Patient or problem | Adult with ear infection |
| **I** | Intervention | Antibiotics |
| **C** | Comparison | Placebo or watchful waiting |
| **O** | Outcome | Pain relief, cure rate |

**Good question:** "In adults with ear infections, do antibiotics reduce pain faster than watchful waiting?"

### Step 2: Acquire the Evidence

Search medical databases:
- PubMed (MEDLINE)
- Cochrane Library (systematic reviews)
- UpToDate (summarized evidence)
- Clinical guidelines

### Step 3: Appraise the Evidence

Ask critical questions:

**Is the study valid?**
- Was the method appropriate?
- Was it done fairly?
- Was there bias?

**Are the results reliable?**
- Was the sample large enough?
- Were the groups similar?
- Did they measure outcomes correctly?

**Can I apply this to my patient?**
- Is my patient similar to study subjects?
- Are the outcomes relevant?
- Do the benefits outweigh risks and costs?

### Step 4: Apply the Evidence

Consider:
- Does evidence apply to this patient?
- Are there barriers to use?
- What does the patient prefer?
- Are there alternatives?

### Step 5: Assess the Outcome

- Did it work?
- Any side effects?
- Patient satisfied?
- What did we learn?

## Understanding Research Results

### Absolute vs. Relative Risk

**Example:**
- Drug reduces heart attacks from 4% to 2% over 5 years

| Measure | Value |
|---------|-------|
| Relative risk reduction | 50% (4% to 2%) |
| Absolute risk reduction | 2% (4% - 2%) |
| Number needed to treat (NNT) | 50 |

**Why this matters:**
- "50% reduction" sounds impressive
- But only 2% fewer people have heart attacks
- 50 people need treatment for 1 to benefit

### Confidence Intervals

A range that likely contains the true value.

**Example:**
- Risk reduction: 25% (95% CI: 15-35%)
- Meaning: We're 95% confident the true reduction is between 15% and 35%

**Wide intervals = less certainty**
**Narrow intervals = more certainty**

### P-values

Probability the result occurred by chance.

**p < 0.05** = Less than 5% chance it's random
**This is the usual cutoff for "statistically significant"**

## Limitations of Evidence

### When Evidence is Weak

- Rare diseases
- New treatments
- Complex individual situations
- Ethical barriers to research

### When Evidence Changes

- New studies overturn old beliefs
- Guidelines get updated
- Doctors must keep learning

**Examples of changing evidence:**
- Hormone therapy: Once recommended for all older women, now used selectively
- Arthroscopy for knee arthritis: Once common, research showed no benefit
- Eggs and cholesterol: Once restricted, now considered okay in moderation

## Applying Evidence to Individuals

**Questions to ask:**

1. **Similarity:** Is my patient like the study subjects?
2. **Feasibility:** Can we do this treatment?
3. **Value:** Does the patient care about the outcome?
4. **Burden:** Is the treatment worth the effort?
5. **Cost:** Can the patient afford it?

## Shared Decision Making

EBM is not about forcing treatments based on evidence.

It's about:
- Presenting evidence clearly
- Helping patients understand options
- Incorporating patient preferences
- Making decisions together

**Example:** Even if research shows surgery is best for back pain, you might choose physical therapy because you want to avoid surgery risks.`,
      keyTerms: [
        { term: 'evidence-based medicine (EBM)', definition: 'The integration of best research evidence, clinical expertise, and patient values in making healthcare decisions' },
        { term: 'systematic review', definition: 'A study that uses systematic methods to identify, appraise, and synthesize all available evidence on a specific question' },
        { term: 'meta-analysis', definition: 'Statistical technique that combines results from multiple studies to produce a single summary estimate' },
        { term: 'randomized controlled trial', definition: 'Study where participants are randomly assigned to intervention or control groups; gold standard for single studies' },
        { term: 'PICO', definition: 'Framework for formulating clinical questions: Patient, Intervention, Comparison, Outcome' },
        { term: 'absolute risk reduction', definition: 'The actual difference in event rates between treatment and control groups' },
        { term: 'relative risk reduction', definition: 'The proportional difference in event rates between treatment and control groups; can be misleading' },
        { term: 'number needed to treat (NNT)', definition: 'Number of patients who need treatment for one to benefit; calculated as 1/absolute risk reduction' },
        { term: 'confidence interval', definition: 'Range of values within which the true value likely falls; narrower intervals indicate more precision' },
      ],
      analogies: [
        'Evidence-based medicine is like a three-legged stool - research evidence, clinical expertise, and patient values all provide essential support.',
        'The evidence hierarchy is like a ladder - higher levels give you a better view of the truth.',
        'Absolute vs. relative risk: If a sale offers "50% off" but the item only cost \$2, you save \$1. Relative sounds big (50%), but absolute is small (\$1).',
      ],
      examples: [
        'For ear infections in children: Research shows most get better on their own. Antibiotics help some children but cause side effects. EBM means discussing both options with parents.',
        'For heart attacks: Aspirin within 24 hours reduces mortality. Strong evidence from many RCTs. Standard of care for all patients unless allergic.',
        'For back surgery: Research shows it helps specific patients but not most. EBM means careful patient selection, not surgery for everyone.',
      ],
    },
    3: {
      level: 3,
      summary: 'Evidence-based medicine is the systematic integration of best research evidence, clinical expertise, and patient values to optimize clinical decisions, utilizing a structured approach to question formulation, literature appraisal, and evidence application.',
      explanation: `# Evidence-Based Medicine: Systematic Application of Research to Clinical Care

## Definition and Core Principles

Evidence-based medicine (EBM) is "the conscientious, explicit, and judicious use of current best evidence in making decisions about the care of individual patients."

**Core principle:** Integrate three components:

1. **Best available evidence** - From systematic research
2. **Clinical expertise** - Learned through experience and practice
3. **Patient values and preferences** - Unique concerns, expectations, and goals

The integration of all three leads to optimal clinical decisions.

## The EBM Process: Five Steps

### Step 1: Formulate an Answerable Question

**PICO Framework:**

| Element | Description | Example |
|---------|-------------|---------|
| **P** - Patient/Problem | Who is the patient? What is the problem? | 65-year-old with osteoarthritis knee pain |
| **I** - Intervention | What is the proposed treatment/test? | NSAID medication |
| **C** - Comparison | What are the alternatives? | Acetaminophen or physical therapy |
| **O** - Outcome | What matters to the patient? | Pain relief, functional improvement |

**Well-built question:** "In a 65-year-old with osteoarthritis of the knee, are NSAIDs more effective than acetaminophen for pain relief and functional improvement?"

### Step 2: Acquire the Evidence

**Search strategy:**
- Define key concepts
- Use appropriate databases
- Apply search filters
- Retrieve relevant articles

**Primary databases:**
- **PubMed/MEDLINE:** Broad biomedical literature
- **Cochrane Library:** Systematic reviews, RCTs
- **EMBASE:** European focus, drug literature
- **CINAHL:** Nursing and allied health

**Secondary resources:**
- **UpToDate/Dynamed:** Evidence summaries, expert review
- **Clinical guidelines:** Compiled recommendations
- **Clinical Evidence:** Summarized research

### Step 3: Critical Appraisal

**Validity: Is the study trustworthy?**

For **randomized controlled trials:**
- Was randomization truly random?
- Was allocation concealed?
- Were groups similar at baseline?
- Was blinding maintained?
- Was follow-up complete?
- Was analysis intention-to-treat?
- Were groups treated equally besides intervention?

For **systematic reviews:**
- Was the question focused?
- Was the search comprehensive?
- Was study quality assessed?
- Were results combined appropriately?

**Results: What did the study find?**

**Understanding effect sizes:**
- **Relative Risk (RR):** Ratio of event rates
  - RR = 1: No effect
  - RR < 1: Reduced risk
  - RR > 1: Increased risk

- **Absolute Risk Reduction (ARR):** Actual difference
  - ARR = Control event rate - Treatment event rate

- **Number Needed to Treat (NNT):** Patients needed for one benefit
  - NNT = 1/ARR

- **Number Needed to Harm (NNH):** Patients needed for one harm
  - NNH = 1/Absolute risk increase

**Precision: Confidence Intervals (CI)**
- Range of plausible values for the true effect
- Narrow CI = more precise
- Wide CI = less precise
- If CI crosses 1 (for ratios) or 0 (for differences), result may not be significant

**Relevance: Can I apply this to my patient?**

Consider:
- Is my patient similar to study subjects?
- Is the intervention available?
- Are the outcomes important to my patient?
- Do benefits outweigh harms and costs?
- Does this fit with patient values?

### Step 4: Apply the Evidence

**Individualizing care:**
- Adjust for patient characteristics
- Consider comorbidities
- Account for patient preferences
- Assess feasibility
- Evaluate cost

### Step 5: Assess Performance

**Evaluate:**
- Did the intervention help?
- Did we cause harm?
- Patient satisfied?
- What did we learn?
- How can we improve?

## Hierarchy of Evidence

| Level | Evidence Type | Strength | Notes |
|-------|---------------|----------|-------|
| 1a | Systematic reviews of RCTs | Highest | Cochrane reviews |
| 1b | Individual RCT | High | Gold standard for single studies |
| 2a | Cohort studies | Moderate | Good for rare outcomes or long-term effects |
| 2b | Case-control studies | Moderate | Useful for rare diseases |
| 3 | Case series/reports | Low | Can generate hypotheses |
| 4 | Expert opinion | Lowest | Weakest, fallible |

**Exceptions to hierarchy:**
- For questions of harm, observational studies sometimes better than RCTs
- For rare conditions, case series may be best available
- For prognostic questions, cohort studies often appropriate

## Understanding Study Designs

### Randomized Controlled Trials

**Key features:**
- Random allocation to groups
- Control group for comparison
- Blinding (double-blind optimal)
- Intention-to-treat analysis

**Limitations:**
- Expensive and time-consuming
- May not reflect real-world practice
- May not include complex patients
- Ethical limitations

### Observational Studies

**Cohort studies:**
- Follow groups over time
- Can study multiple outcomes
- Good for rare exposures
- Cannot prove causation

**Case-control studies:**
- Start with outcome, look back
- Efficient for rare outcomes
- Prone to recall bias
- Cannot prove causation

### Systematic Reviews and Meta-Analyses

**Systematic review:**
- Pre-specified question and methods
- Comprehensive search
- Quality assessment
- Systematic synthesis

**Meta-analysis:**
- Statistical combination of results
- Increases power
- Provides precise estimate
- Can resolve uncertainty

**Advantages:**
- Overcomes limitations of single studies
- Increases sample size
- Reduces random error
- Explores heterogeneity

## Clinical Practice Guidelines

**What they are:**
- Systematically developed statements
- Assist practitioner and patient decisions
- Based on best available evidence
- Consider benefits, harms, costs

**Grading systems:**

**GRADE approach:**
- **High quality:** Further research unlikely to change estimate
- **Moderate quality:** Further research may change estimate
- **Low quality:** Further research very likely to change estimate
- **Very low quality:** Any estimate is uncertain

**Using guidelines:**
- Guides, not rules
- Consider local context
- Individualize to patient
- Update as evidence evolves

## Limitations and Challenges

### Publication Bias

**The problem:**
- Positive studies more likely published
- Negative studies languish in file drawers
- Distorts true picture

**Solutions:**
- Trial registration
- Search for unpublished studies
- Funnel plot analysis
- Comprehensive search strategies

### Conflict of Interest

**Sources:**
- Industry funding
- Financial relationships
- Academic advancement
- Personal beliefs

**Impact:**
- Biased study design
- Selective reporting
- Favorable interpretation
- Overstated conclusions

**Mitigation:**
- Disclose conflicts
- Critical appraisal
- Look for independent confirmation
- Consider funding source

### Generalizability

**Limited by:**
- Study population differences
- Setting differences
- Protocol-driven care
- Exclusion of complex patients

**Solution:**
- Assess applicability
- Adjust for differences
- Use clinical judgment
- Monitor outcomes

## Shared Decision Making

EBM is not cookbook medicine. It requires:

1. **Presenting evidence:** Clear, balanced information
2. **Explaining uncertainty:** Limits of knowledge
3. **Exploring values:** What matters to patient
4. **Supporting deliberation:** Time for reflection
5. **Making decisions:** Collaborative choice

The evidence informs, but does not dictate, the decision.`,
      keyTerms: [
        { term: 'intention-to-treat analysis', definition: 'Analysis that includes all randomized participants in the groups to which they were assigned, regardless of whether they completed treatment' },
        { term: 'allocation concealment', definition: 'Procedure that prevents those enrolling patients from knowing which group the next patient will be assigned to, preventing selection bias' },
        { term: 'blinding', definition: 'Keeping participants, clinicians, and assessors unaware of which intervention a participant received to prevent bias' },
        { term: 'publication bias', definition: 'Tendency for studies with positive results to be published more frequently than studies with negative results' },
        { term: 'heterogeneity', definition: 'Variation in study outcomes beyond what would be expected by chance; may indicate true differences in effect' },
        { term: 'funnel plot', definition: 'Graphical tool to detect publication bias by plotting study size against effect size' },
        { term: 'clinical practice guideline', definition: 'Systematically developed statement to assist practitioner decisions about appropriate healthcare for specific clinical circumstances' },
      ],
      clinicalNotes: 'EBM requires both skills (searching, critical appraisal) and attitudes (humility, commitment to lifelong learning). The goal is not to follow evidence blindly but to use evidence intelligently as one tool among many in providing excellent patient care.',
    },
    4: {
      level: 4,
      summary: 'Advanced evidence-based medicine encompasses sophisticated literature search strategies, rigorous critical appraisal methodology, understanding of biostatistics, and nuanced application of evidence to individual patients while navigating research limitations.',
      explanation: `# Advanced Evidence-Based Medicine

## Critical Appraisal: Advanced Concepts

### Assessing Risk of Bias

**RCTs: Cochrane Risk of Bias Tool**

Domains:
1. **Random sequence generation:** Was allocation truly random?
2. **Allocation concealment:** Could enrollers predict assignment?
3. **Blinding of participants and personnel:** Was blinding effective?
4. **Blinding of outcome assessment:** Were assessors blinded?
5. **Incomplete outcome data:** Was attrition handled appropriately?
6. **Selective reporting:** Were all outcomes reported?
7. **Other bias:** Other sources identified?

**Observational studies: Newcastle-Ottawa Scale**

Selection (4 stars):
- Representativeness of exposed cohort
- Selection of non-exposed cohort
- Ascertainment of exposure
- Demonstration that outcome was not present at start

Comparability (2 stars):
- Study controls for key confounders

Outcome (3 stars):
- Blinding of outcome assessors
- Follow-up long enough
- Completeness of follow-up

### Understanding Bias

**Selection bias:** Systematic differences between groups
- Leads to incomparable groups
- Randomization addresses this in RCTs
- Observational studies vulnerable

**Information bias:** Systematic error in measurement
- Misclassification: Differential vs. non-differential
- Recall bias: Cases remember more than controls
- Observer bias: Knowledge of status influences measurement

**Confounding:** Third variable explains association
- Must be associated with both exposure and outcome
- Not on causal pathway
- Controlled through design (restriction, matching) or analysis (stratification, regression)

## Advanced Biostatistics for EBM

### Diagnostic Tests

**Sensitivity and Specificity**

| Measure | Definition | Formula | Clinical use |
|---------|------------|---------|--------------|
| Sensitivity | True positive rate | TP/(TP+FN) | Rule OUT disease (SnOUT) |
| Specificity | True negative rate | TN/(TN+FP) | Rule IN disease (SpIN) |

**Likelihood Ratios**

- **LR+: LR of a positive test**
  - LR+ = Sensitivity/(1-Specificity)
  - LR+ >10: Large increase in probability
  - LR+ 5-10: Moderate increase

- **LR-: LR of a negative test**
  - LR- = (1-Sensitivity)/Specificity
  - LR- <0.1: Large decrease in probability
  - LR- 0.1-0.2: Moderate decrease

**Predictive Values**

- **PPV: Positive Predictive Value**
  - Probability disease if test positive
  - Depends on prevalence
  - Higher in high-prevalence settings

- **NPV: Negative Predictive Value**
  - Probability no disease if test negative
  - Depends on prevalence
  - Higher in low-prevalence settings

### Treatment Effects

**Absolute measures:**
- **ARR:** Absolute Risk Reduction = Control event rate - Treatment event rate
- **NNT:** Number Needed to Treat = 1/ARR
- **ARI:** Absolute Risk Increase = Treatment event rate - Control event rate
- **NNH:** Number Needed to Harm = 1/ARI

**Relative measures:**
- **RR:** Relative Risk = Treatment event rate/Control event rate
- **RRR:** Relative Risk Reduction = (Control event rate - Treatment event rate)/Control event rate
- **OR:** Odds Ratio = (Treatment events/Treatment non-events)/(Control events/Control non-events)

**Odds Ratio vs. Relative Risk:**
- Similar when outcomes are rare (<10%)
- OR overestimates effect for common outcomes
- OR used in logistic regression, meta-analysis

### Precision and Confidence Intervals

**Interpretation:**
- 95% CI: Range containing true value 95% of the time
- If CI crosses null (1 for ratios, 0 for differences), not statistically significant
- Width reflects precision (narrower = more precise)

**P-values:**
- Probability of observed result if null hypothesis is true
- p < 0.05: Reject null hypothesis (conventional threshold)
- Statistical significance ≠ clinical significance
- Large samples can detect trivial differences

### Multiple Comparisons

**The problem:**
- Multiple tests increase chance of false positive
- With 20 tests at α=0.05, expect 1 false positive by chance

**Solutions:**
- **Bonferroni correction:** α divided by number of tests
- **False discovery rate:** Control proportion of false positives
- **Pre-specification:** Declare primary outcomes beforehand

### Subgroup Analyses

**Risks:**
- Reduced power
- Multiple testing
- Often underpowered
- Should be interpreted cautiously

**Guidelines for credible subgroup analysis:**
- Pre-specified
- Few subgroups tested
- Large effect size
- Biological plausibility
- Consistency across studies
- Confirmation in other studies

## Systematic Reviews and Meta-Analysis

### Conducting a Systematic Review

**PROTOCOL:**
- Define question (PICO)
- Specify inclusion/exclusion criteria
- Plan search strategy
- Pre-specify outcomes

**SEARCH:**
- Multiple databases
- Grey literature
- Hand searching
- Expert consultation
- Trial registries

**SELECTION:**
- Two independent reviewers
- Title/abstract screening
- Full-text review
- Inter-rater reliability (kappa)

**APPRAISAL:**
- Risk of bias assessment
- Quality rating
- Sensitivity to quality

**SYNTHESIS:**
- Narrative synthesis
- Meta-analysis if appropriate
- Exploration of heterogeneity

### Meta-Analysis Methods

**Fixed-effect model:**
- Assumes single true effect size
- Between-study variance = 0
- Uses only within-study variance
- Appropriate when studies similar

**Random-effects model:**
- Assumes distribution of true effects
- Incorporates between-study variance
- Wider confidence intervals
- Appropriate when studies heterogeneous

**Heterogeneity assessment:**
- **Cochran's Q:** Statistical test for heterogeneity
- **I² statistic:** Percentage of variance due to heterogeneity
  - I² = 0-25%: Low heterogeneity
  - I² = 25-50%: Moderate heterogeneity
  - I² = 50-75%: Substantial heterogeneity
  - I² = 75-100%: Considerable heterogeneity

**Publication bias assessment:**
- **Funnel plot:** Visual asymmetry
- **Egger's test:** Statistical test for small-study effects
- **Trim and fill:** Method to adjust for missing studies

### Network Meta-Analysis

**Concept:**
- Compare multiple interventions simultaneously
- Include both direct and indirect comparisons
- Requires transitivity assumption

**Transitivity:**
- Populations similar
- Interventions similar
- Outcomes measured similarly

**Limitations:**
- More complex
- More assumptions
- Requires statistical expertise

## GRADE Approach to Evidence Quality

### Domains that Decrease Quality

1. **Study design:** Start at high for RCTs, low for observational
2. **Risk of bias:** Limitations in design or execution
3. **Inconsistency:** Unexplained heterogeneity
4. **Indirectness:** Population, intervention, or outcomes differ
5. **Imprecision:** Sample size too small, wide confidence intervals
6. **Publication bias:** Likely selective reporting

### Domains that Increase Quality

1. **Large effect:** Very large or very small effect sizes
2. **Dose-response:** Gradient of effect with exposure
3. **Plausible confounding:** Would minimize demonstrated effect

### Evidence to Recommendation Framework

1. **Quality of evidence:** High, moderate, low, very low
2. **Balance of effects:** Benefits vs. harms
3. **Values and preferences:** Patient priorities
4. **Resource use:** Cost-effectiveness
5. **Strength:** Strong vs. weak recommendation

**Strong recommendation:**
- Most patients should receive
- Benefits clearly outweigh harms
- Strong evidence

**Weak recommendation:**
- Different choices for different patients
- Benefits closely balanced with harms
- Weaker evidence`,
      keyTerms: [
        { term: 'likelihood ratio', definition: 'Measure of how much a test result changes the probability of disease; LR+ >10 significantly increases, LR- <0.1 significantly decreases' },
        { term: 'odds ratio', definition: 'Ratio of odds of event in exposed vs. unexposed; approximates relative risk for rare outcomes but overestimates for common outcomes' },
        { term: 'heterogeneity', definition: 'Variation in study effects beyond chance; assessed by Q statistic and I²' },
        { term: 'I² statistic', definition: 'Percentage of total variation due to between-study heterogeneity rather than chance; ranges from 0-100%' },
        { term: 'funnel plot', definition: 'Scatter plot of study size vs. effect used to detect publication bias through visual asymmetry' },
        { term: 'network meta-analysis', definition: 'Meta-analysis comparing multiple interventions using both direct and indirect evidence, assuming transitivity' },
        { term: 'transitivity', definition: 'Assumption in network meta-analysis that different study populations and interventions are sufficiently similar for valid comparison' },
        { term: 'confounding', definition: 'Mixing of effects between exposure, outcome, and a third variable associated with both but not on causal pathway' },
      ],
      clinicalNotes: 'Advanced EBM requires understanding both the strengths and limitations of research evidence. Perfect evidence is rare, and clinical judgment remains essential for interpreting and applying evidence to individual patients.',
    },
    5: {
      level: 5,
      summary: 'Expert evidence-based medicine integrates sophisticated research methodology mastery, nuanced biostatistical interpretation, critical appraisal of evidence quality, and pragmatic application to individual patients while navigating the limitations and evolution of medical knowledge.',
      explanation: `# Expert Evidence-Based Medicine

## Research Methodology Mastery

### Advanced Trial Designs

**Cluster randomized trials:**
- Randomization at group level rather than individual
- Accounts for intracluster correlation
- Requires sample size adjustment
- Design effect: 1 + (m-1)×ICC

**Factorial designs:**
- Multiple interventions tested simultaneously
- Efficient for testing combinations
- Assumes independence of effects
- Can test for interactions

**Non-inferiority trials:**
- Tests if new treatment is not substantially worse
- Pre-specified non-inferiority margin
- Different statistical approach than superiority
- Methodological challenges in conduct

**Adaptive designs:**
- Pre-specified modifications during trial
- Seamless phase II/III transitions
- Sample size re-estimation
- Dropping inferior arms
- Ethical advantages, complexity challenges

### Observational Research: Advanced Concepts

**Propensity score methods:**
- Score estimating probability of exposure
- Balances groups on observed covariates
- Matching, stratification, weighting, or covariate adjustment
- Reduces but does not eliminate confounding

**Instrumental variable analysis:**
- Natural experiment to estimate causal effects
- Requires strong instrument
- Relevant to exposure, not associated with confounders
- Affects outcome only through exposure

**Regression discontinuity:**
- Exploits threshold-based treatment assignment
- Assumes smooth relationship around cutoff
- Provides local causal effect estimate
- Increasingly used in health policy research

**Negative control outcomes:**
- Outcomes that should not be affected by exposure
- Detect unmeasured confounding
- Strengthen causal inference

### Bias Mitigation Strategies

**Target trial emulation:**
- Frame observational question as RCT
- Define eligibility, treatment strategies, outcomes
- Mimic RCT design with observational data
- Reduces bias through clarity

**Negative control exposures:**
- Exposures that should not affect outcome
- Detect confounding or measurement error
- Similar to negative control outcomes

**Positive control analyses:**
- Known associations should be detected
- Tests whether study can find expected effects
- Absence suggests inadequate power or methods

## Advanced Biostatistics

### Regression Models

**Logistic regression:**
- Binary outcomes
- Produces odds ratios
- Assumes linearity in logit
- Can model multiple covariates

**Cox proportional hazards:**
- Time-to-event outcomes
- Produces hazard ratios
- Assumes proportional hazards
- Handles censoring

**Linear regression:**
- Continuous outcomes
- Produces mean differences
- Assumes normality of residuals
- Checks linearity, homoscedasticity

**Mixed effects models:**
- Handles clustered or repeated measures
- Random effects for grouping
- Fixed effects for exposures
- Accounts for within-group correlation

### Survival Analysis

**Kaplan-Meier estimator:**
- Non-parametric survival curve
- Accounts for censoring
- Log-rank test for comparison

**Hazard ratios:**
- Instantaneous risk ratio
- Assumes proportional hazards
- Interpretation depends on baseline risk

**Competing risks:**
- Multiple possible events
- Cumulative incidence functions
- Cause-specific hazards
- Fine-Gray subdistribution hazards

### Bayesian Approaches

**Bayesian statistics:**
- Incorporates prior knowledge
- Updates with observed data
- Produces posterior distributions
- Natural probability statements

**Advantages:**
- Incorporates prior evidence
- Handles small samples
- Intuitive probability statements
- Sequential learning

**Challenges:**
- Specifying priors
- Computational complexity
- Less familiar to clinicians
- Changing paradigm

## Critical Appraisal: Expert Level

### Risk of Bias in Context

**Understanding domain-specific biases:**

**Surgical trials:**
- Blinding challenges
- Learning curve effects
- Operator dependence
- Placebo surgery ethics

**Psychiatry trials:**
- Expectation effects
- Difficulty with blinding
- Subjective outcomes
- Placebo response variability

**Device trials:**
- Comparison to outdated devices
- Rapid obsolescence
- Operator learning curve
- Registry comparisons

### Real-World Evidence

**Data sources:**
- Electronic health records
- Claims databases
- Patient registries
- Wearable devices

**Advantages:**
- Large samples
- Reflects practice
- Long follow-up
- Lower cost

**Limitations:**
- Confounding by indication
- Missing data
- Inaccurate or incomplete data
- Selection bias

**Quality assessment:**
- RECAP-PC framework for registry studies
- Good research practices for RWE

## Applying Evidence to Complex Patients

### Guideline Discordance

**Reasons patients don't fit guidelines:**
- Multimorbidity
- Limited life expectancy
- Frailty
- Patient preferences
- Resource limitations

**Approach:**
- Assess applicability
- Weigh benefits/harms differently
- Consider disease interactions
- Prioritize what matters most
- Document reasoning

### Deprescribing

**Evidence for stopping:**
- Trials often exclude patients on existing drugs
- Limited evidence for stopping
- Benefits may not persist
- Harms may accumulate

**Approach:**
- Identify potentially inappropriate medications
- Assess deprescribing feasibility
- taper gradually
- Monitor for withdrawal or recurrence
- Adjust as needed

### Multimorbidity

**Challenges:**
- Guidelines usually single-disease
- Disease interactions
- Treatment burden
- Competing priorities
- Polypharmacy

**Strategies:**
- Treat patient, not diseases
- Consider overall prognosis
- Prioritize symptom relief
- Minimize treatment burden
- Align with patient goals

## Evidence-Based Medicine at Scale

### Learning Health Systems

**Concept:**
- Every encounter generates data
- Data inform decisions
- Outcomes feed back
- System continuously improves

**Requirements:**
- Data infrastructure
- Culture of inquiry
- Rapid learning cycles
- Implementation science

### Implementation Science

**Study of how to get evidence into practice:**

**Frameworks:**
- CFIR: Consolidated Framework for Implementation Research
- RE-AIM: Reach, Effectiveness, Adoption, Implementation, Maintenance
- TDF: Theoretical Domains Framework

**Barriers:**
- Knowledge gaps
- Attitudes and beliefs
- Organizational factors
- Resource constraints
- Habit and routine

**Strategies:**
- Education and training
- Audit and feedback
- Clinical decision support
- Reminders and alerts
- Financial incentives

### Knowledge Translation

**Getting research into practice:**

**Knowledge creation:**
- Primary research
- Systematic reviews
- Clinical practice guidelines
- Decision support tools

**Knowledge distillation:**
- Evidence summaries
- Point-of-care resources
- Decision aids
- Patient materials

**Knowledge application:**
- Practice change
- Policy development
- Quality improvement
- System redesign

## Limitations and Controversies

### Problems with Evidence

**Research fraud:**
- Occasional cases of fabrication
- Image manipulation
- Data falsification
- Retraction after publication

**P-hacking:**
- Multiple outcomes analyzed
- Subgroup exploration
- Presentation of significant only
- Publication contingent on p-values

**HARKing:**
- Hypothesizing After Results Known
- Framing exploratory as confirmatory
- Inflating apparent significance

**Industry sponsorship:**
- Funding source affects outcomes
- Publication bias more pronounced
- Selective reporting
- Spinning of negative results

### The Crisis of Replicability

**Problem:**
- Many findings fail to replicate
- Publication bias inflates apparent effects
- P-values misunderstood
- Flexibility in analysis

**Solutions:**
- Pre-registration of studies
- Registered reports
- Open data and materials
- Replication studies valued
- Focus on effect sizes, not p-values

### Moving Beyond P-Values

**ASA statement on p-values:**
- P-values do not measure probability hypothesis is true
- P-values do not measure effect size
- Scientific conclusions should not be based on p-values alone
- Proper inference requires full reporting

**Alternatives:**
- Confidence intervals
- Effect sizes
- Bayesian approaches
- False positive rates
- Minimum clinically important differences

## Future Directions

### Precision Medicine

**Genomics:**
- Pharmacogenomics
- Disease risk prediction
- Targeted therapies
- Challenges in interpretation

**Big data analytics:**
- Machine learning
- Pattern recognition
- Prediction modeling
- Clinical decision support

### Evidence Synthesis Evolution

**Living systematic reviews:**
- Continuously updated
- Incorporate new studies
- Dynamic evidence
- Technological challenges

**Rapid reviews:**
- Streamlined methods
- Turnaround in weeks
- Balanced rigor with speed
- Increasingly common

**Network meta-analysis:**
- Comparing all interventions
- Ranking treatments
- Indirect comparisons
- Transitivity assumption critical

### Open Science

**Principles:**
- Pre-registration
- Open data
- Open materials
- Preregistered reports
- Registered reports

**Benefits:**
- Reduces publication bias
- Increases transparency
- Enables replication
- Improves trust`,
      keyTerms: [
        { term: 'propensity score', definition: 'Probability of receiving treatment given observed covariates; used to balance groups in observational studies' },
        { term: 'instrumental variable', definition: 'Variable associated with exposure but not directly with outcome, used to estimate causal effects in presence of unmeasured confounding' },
        { term: 'HARKing', definition: 'Hypothesizing After Results Known; presenting exploratory findings as if they were pre-specified hypotheses' },
        { term: 'p-hacking', definition: 'Analyzing data multiple ways or testing multiple outcomes to find statistically significant results' },
        { term: 'implementation science', definition: 'Study of methods to promote adoption of evidence-based practices into routine care' },
        { term: 'learning health system', definition: 'Healthcare system that continuously learns from its data and experiences to improve care' },
        { term: 'living systematic review', definition: 'Systematic review that is continually updated as new research becomes available' },
        { term: 'competing risks', definition: 'Situation where multiple events can occur, preventing observation of the event of interest' },
      ],
      clinicalNotes: 'Expert EBM practitioners understand that evidence is a tool, not a mandate. They navigate limitations with sophistication, communicate uncertainty transparently, and integrate evidence with clinical acumen and patient values. The goal is not evidence-based medicine, but evidence-informed medicine.',
      patientCounselingPoints: [
        'Ask your doctor how strong the evidence is for a recommended treatment - some recommendations are based on many large studies, others on limited research.',
        'Guidelines are guides, not rules. Your individual circumstances may justify a different approach.',
        'Evidence changes over time. What was recommended 10 years ago may not be recommended today - this is progress, not failure.',
        'Sometimes there isn\'t clear evidence, and your doctor must use their best judgment. Ask them to explain their reasoning.',
        'If you\'re uncertain about a treatment, ask to see the evidence or get a second opinion.',
      ],
    },
  },

  media: [],
  citations: [
    {
      id: 'cite-sackett-1996',
      type: 'article',
      title: 'Evidence Based Medicine: What It Is and What It Isn\'t',
      authors: ['Sackett DL', 'Rosenberg WM', 'Gray JA', 'Haynes RB', 'Richardson WS'],
      source: 'BMJ',
      url: 'https://www.bmj.com/content/312/7023/71',
      license: 'Journal Article',
    },
    {
      id: 'cite-guyatt-2015',
      type: 'article',
      title: 'GRADE: An Emerging Consensus on Rating Quality of Evidence and Strength of Recommendations',
      authors: ['Guyatt GH', 'Oxman AD', 'Vist GE', 'Kunz R', 'Falck-Ytter Y', 'Alonso-Coello P', 'Schünemann HJ'],
      source: 'BMJ',
      url: 'https://www.bmj.com/content/336/7650/924',
      license: 'Journal Article',
    },
    {
      id: 'cite-cochrane-2019',
      type: 'textbook',
      title: 'Cochrane Handbook for Systematic Reviews of Interventions',
      authors: ['Higgins JPT', 'Thomas J', 'Chandler J', 'Cumpston M', 'Li T', 'Page MJ', 'Welch VA'],
      source: 'Cochrane',
      url: 'https://training.cochrane.org/handbook',
      license: 'Book',
    },
    {
      id: 'cite-ioannidis-2005',
      type: 'article',
      title: 'Why Most Published Research Findings Are False',
      authors: ['Ioannidis JPA'],
      source: 'PLOS Medicine',
      url: 'https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.0020124',
      license: 'Open Access',
    },
    {
      id: 'cite-usersguides-2020',
      type: 'article',
      title: 'Users\' Guides to the Medical Literature: A Manual for Evidence-Based Clinical Practice',
      authors: ['Guyatt G', 'Rennie D', 'Meade MO', 'Cook DJ'],
      source: 'JAMA',
      url: 'https://jamanetwork.com/collections/42213/users-guides-to-the-medical-literature',
      license: 'Journal Article',
    },
  ],
  crossReferences: [
    {
      targetId: 'clinical-reasoning-diagnostic-reasoning',
      targetType: 'concept',
      relationship: 'related',
      label: 'Diagnostic Reasoning',
    },
    {
      targetId: 'clinical-reasoning-clinical-decision-making',
      targetType: 'concept',
      relationship: 'related',
      label: 'Clinical Decision Making',
    },
  ],
  tags: {
    systems: [],
    topics: ['clinical-reasoning', 'evidence-based-medicine', 'research-methods', 'medical-education'],
    keywords: ['EBM', 'evidence hierarchy', 'critical appraisal', 'systematic review', 'meta-analysis', 'research methods'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      shelf: ['medicine', 'surgery', 'pediatrics', 'ob-gyn', 'psychiatry', 'family-medicine'],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
