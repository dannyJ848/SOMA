import { ClinicalTrialsEducationalContent } from '../types';

export const randomizedTrialsContent: ClinicalTrialsEducationalContent = {
  id: 'randomized-trials',
  type: 'topic',
  name: 'Randomized Clinical Trials',
  alternateNames: ['RCT', 'Randomized Controlled Trials', 'RCTs'],
  levels: {
    1: {
      level: 1,
      summary: 'Randomization is one of the most important concepts in clinical research. It assigns participants to treatment groups by chance, similar to flipping a coin. This helps ensure groups are similar at the start, reduces bias, and creates fair comparisons.',
      explanation: `Randomization is the foundation of rigorous clinical research.

**What Is Randomization?**

Randomization means that neither the participant nor the doctor chooses which treatment group the participant will be in. Instead, a computer program or other random method makes this assignment.

**Why Is Randomization Important?**

Randomization helps ensure that treatment groups are similar at the start of a trial:
- Both known and unknown factors are evenly distributed
- Fair comparison between treatments
- Reduces bias in results
- Makes results more trustworthy

**How Randomization Works**

1. Participant agrees to join the trial
2. Computer assigns them to a group by chance
3. Participant receives the assigned treatment
4. Researchers compare outcomes between groups

**A Simple Example**

Imagine testing a new headache medicine:
- 100 people with headaches join the study
- Computer randomly assigns:
  - 50 people receive the new medicine
  - 50 people receive a placebo
- Researchers compare who got better in each group

Without randomization, people with worse headaches might choose the new medicine, making it seem less effective than it really is.

**Types of Randomization**

Simple randomization:
- Each participant has equal chance of being in any group
- Like flipping a coin for each person
- Can result in groups of different sizes

Blocked randomization:
- Groups kept balanced throughout enrollment
- After every 4 participants, groups are equal
- Prevents researchers from guessing assignment

Stratified randomization:
- Balances important characteristics between groups
- Separate randomization for different groups
- Example: Separate lists for men and women`,
      keyTerms: [
        { term: 'randomization', definition: 'Assigning participants to groups by chance' },
        { term: 'bias', definition: 'Systematic error that skews results in one direction' },
        { term: 'placebo', definition: 'An inactive substance that looks like real treatment' },
        { term: 'allocation concealment', definition: 'Preventing prediction of upcoming assignments' }
      ],
      analogies: [
        'Randomization is like shuffling a deck of cards before dealing - it ensures fair distribution.',
        'Without randomization, clinical trials are like letting people choose their own lottery numbers - some combinations would be overrepresented.'
      ],
      examples: [
        'The Women\'s Health Initiative randomized over 160,000 women to hormone therapy or placebo, providing definitive evidence on benefits and risks.',
        'In the Polyp Prevention Trial, participants were randomized to calcium supplements or placebo, showing a 20% reduction in adenoma recurrence.'
      ],
      patientCounselingPoints: [
        'Randomization ensures that your treatment assignment is fair and not influenced by your preferences or your doctor\'s preferences.',
        'You cannot choose which treatment you receive in a randomized trial, but this is what makes the results scientifically valid.',
        'Random allocation balances both known and unknown factors across groups, creating equivalent comparison groups.'
      ]
    },
    2: {
      level: 2,
      summary: 'Types of randomization include simple (coin flip), blocked (keeps groups balanced), and stratified (balances important factors). Blocked randomization prevents researchers from guessing assignments and maintains group balance throughout enrollment.',
      explanation: `Different randomization methods serve different purposes in clinical trials.

**Simple Randomization**

Like flipping a coin for each participant:
- Each participant has equal chance of being in any group
- No pattern or sequence
- Completely unpredictable

Advantages:
- Easy to understand
- Unpredictable

Disadvantages:
- Groups may become unbalanced
- Especially problematic in small trials

**Blocked Randomization**

Groups are kept balanced throughout enrollment.

Example with blocks of 4:
- Each block has 2 participants in Treatment A and 2 in Treatment B
- Possible arrangements: AABB, ABAB, ABBA, BAAB, BABA, BBAA
- After every 4 participants, groups are balanced

Advantages:
- Groups stay balanced
- Prevents researchers from guessing assignment

Disadvantages:
- Slightly more complex
- Potential for selection bias if block size is known

**Stratified Randomization**

Balances important characteristics between groups.

Common stratification factors:
- Age groups
- Gender
- Disease severity
- Study site (for multi-center trials)

How it works:
- Separate randomization lists for each stratum
- Ensures balance on important factors
- Example: Separate lists for men and women

**Covariate Adaptive Randomization (Minimization)**

Changes assignment probabilities based on characteristics:
- Assigns each participant to achieve best balance
- Not truly random but achieves similar goals
- Used when many factors need balancing

**Examples:**
- If most older participants are in Treatment A
- Next older participant more likely assigned to Treatment B`,
      keyTerms: [
        { term: 'blocked randomization', definition: 'Randomization in small blocks that ensure balanced allocation' },
        { term: 'stratification', definition: 'Separate randomization by participant characteristics' },
        { term: 'block size', definition: 'Number of participants in each randomization block' },
        { term: 'minimization', definition: 'Assignment method that achieves balance on multiple factors' }
      ],
      analogies: [
        'Blocked randomization is like dealing cards in packs of 4 - you know each pack has equal numbers of each suit.',
        'Stratified randomization is like having separate lottery drawings for different subgroups.'
      ],
      examples: [
        'The ALLHAT trial used blocked randomization to ensure balanced allocation across 4 antihypertensive treatments.',
        'Cancer trials often stratify by stage to ensure early and late stage patients are balanced across arms.'
      ],
      patientCounselingPoints: [
        'Your assignment in a trial is determined by a random process similar to flipping a coin.',
        'Researchers use blocked randomization to keep groups balanced as the study progresses.',
        'Stratification ensures important patient characteristics are evenly distributed between groups.'
      ]
    },
    3: {
      level: 3,
      summary: 'Implementation of randomization includes generating sequences before trial start, allocation concealment to prevent prediction, and variable block sizes to maintain blinding. Central randomization and web-based systems provide secure 24/7 randomization.',
      explanation: `Implementing randomization in practice requires careful planning and secure systems.

**Randomization Sequences**

Generating the sequence:
- Generated by independent statistician
- Created before trial starts
- Documented in protocol
- Securely stored

Random number generation:
- True random: Physical processes (atmospheric noise)
- Pseudo-random: Computer algorithms, seed-based
- Most commonly used (statistically indistinguishable from random)

**Allocation Concealment**

Closely related to randomization, this prevents prediction of assignments.

Why it matters:
- Even with randomization, if next assignment can be predicted, researchers might steer certain participants
- Creates selection bias
- Undermines randomization

Methods:
- Central randomization: Call or web request to independent center (gold standard)
- SNOSE: Sequentially Numbered, Opaque, Sealed Envelopes
- Pharmacy randomization: Pharmacy prepares identical packets

**Block Size Considerations**

Fixed block sizes:
- Simple to implement
- Predictable balance
- If discovered, can lead to prediction

Variable block sizes:
- Example: Randomly choose block sizes of 2, 4, or 6
- Unpredictable
- Prevents assignment prediction
- Maintains approximate balance

**Web-Based Randomization Systems**

Modern trials often use web-based systems:
- 24/7 availability
- Instant allocation
- Automatic tracking
- Stratification built-in
- Audit trail maintained`,
      keyTerms: [
        { term: 'allocation concealment', definition: 'Preventing prediction of upcoming assignments' },
        { term: 'SNOSE', definition: 'Sequentially Numbered, Opaque, Sealed Envelopes for randomization' },
        { term: 'IWRS', definition: 'Interactive Web Response System for trial randomization' },
        { term: 'central randomization', definition: 'Randomization managed by independent center for allocation concealment' }
      ],
      analogies: [
        'Allocation concealment is like keeping the next poker card face-down until it\'s dealt.',
        'Variable block sizes are like changing the dealing pattern so players can\'t anticipate the next card.'
      ],
      examples: [
        'The CTSN trial used central randomization with automated 24/7 allocation across multiple clinical centers.',
        'Many oncology trials use variable block sizes to maintain blinding since clinicians can predict outcomes based on typical treatment patterns.'
      ],
      patientCounselingPoints: [
        'Randomization is managed by a separate system to ensure fair allocation and maintain the scientific validity of the trial.',
        'Your treatment assignment is only revealed after you have agreed to participate and completed baseline procedures.',
        'Web-based randomization systems allow rapid enrollment and reduce the chance of assignment errors.'
      ]
    },
    4: {
      level: 4,
      summary: 'Advanced randomization techniques include cluster randomization (groups rather than individuals), response-adaptive randomization (adjusts based on accumulating results), and biomarker-stratified designs. These methods address complex research questions in specialized settings.',
      explanation: `Advanced randomization techniques address specialized research scenarios.

**Cluster Randomization**

Groups (clusters) rather than individuals are randomized:
- Hospitals randomized to different protocols
- Schools assigned to different interventions
- Clinics assigned to different implementation strategies

When to use:
- Interventions naturally applied to groups
- System-wide protocols
- Community-based interventions
- Contamination concerns

Design considerations:
- ICC (Intracluster Correlation Coefficient): Higher ICC requires larger sample
- Design effect: DEFF = 1 + (m - 1) x ICC
- Increases required sample size

**Response-Adaptive Randomization**

Assignment probabilities change based on accumulating results.

Ethical rationale:
- More participants assigned to better-performing treatment
- Fewer participants exposed to inferior treatment
- Particularly valuable in life-threatening conditions

Methods:
- Play-the-Winner: Probability increases with successes
- Thompson Sampling: Bayesian approach
- Randomized Play-the-Winner: Uses balls in urn metaphor

Challenges:
- Logistical complexity
- Statistical issues (requires specialized methods)
- Ethical concerns about unequal treatment
- Not widely accepted for pivotal trials

**Biomarker-Stratified Randomization**

Enrichment designs:
- Only biomarker-positive participants enrolled
- Increases chance of showing effect
- Example: HER2-positive breast cancer

Biomarker-stratified design:
- Both biomarker-positive and -negative enrolled
- Separate randomization for each group
- Tests if treatment works differently based on biomarker

Adaptive enrichment:
- Pre-planned interim analysis
- May restrict enrollment to biomarker-positive if interaction shown`,
      keyTerms: [
        { term: 'cluster randomization', definition: 'Randomizing groups rather than individuals to group-level interventions' },
        { term: 'ICC', definition: 'Intracluster Correlation Coefficient - measures similarity within clusters' },
        { term: 'design effect', definition: 'Increase in required sample size due to clustering' },
        { term: 'adaptive randomization', definition: 'Randomization where assignment probabilities change based on accumulating results' }
      ],
      analogies: [
        'Cluster randomization is like testing different teaching methods in different classrooms rather than assigning individual students.',
        'Response-adaptive randomization is like a casino that adjusts odds based on recent outcomes - though trials aim to help patients, not make money.'
      ],
      examples: [
        'The RECOVERY trial used cluster randomization to evaluate corticosteroids in COVID-19 patients across different hospitals.',
        'BATTLE trials in oncology used adaptive randomization based on biomarker responses to assign targeted therapies.'
      ],
      patientCounselingPoints: [
        'Some trials randomize groups like clinics or hospitals rather than individuals when testing system-level interventions.',
        'Adaptive randomization can help more participants get effective treatments as the trial learns which treatments work better.',
        'Biomarker-based randomization helps identify which patients are most likely to benefit from a treatment.'
      ]
    },
    5: {
      level: 5,
      summary: 'Statistical analysis of randomized trials includes Intent-to-Treat analysis (preserves randomization), handling missing data with multiple imputation, subgroup analysis with interaction tests, and multiplicity adjustments. Non-inferiority trials require careful definition of the margin.',
      explanation: `Proper analysis of randomized trials requires specialized statistical methods.

**Analysis Populations**

Intent-to-Treat (ITT):
- Analyze all participants according to their assigned group
- Preserves randomization
- Reflects real-world use
- Prevents bias from post-randomization events
- Conservative estimate of effect

Per-Protocol (PP):
- Analyze only participants who followed the protocol
- Used for non-inferiority trials
- Supplemental to ITT analysis
- Concerns: Breaks randomization, can introduce bias

As-Treated (AT):
- Analyze participants by treatment actually received
- Used for safety analyses
- Usually supportive, not primary analysis

**Handling Missing Data**

Missing data mechanisms:
- MCAR (Missing Completely at Random): Unbiased if handled appropriately
- MAR (Missing at Random): Related to observed variables, can be handled
- MNAR (Missing Not at Random): Difficult to handle, requires sensitivity analyses

Methods:
- Multiple imputation: Creates multiple plausible datasets (preferred)
- Mixed effects models: Handles missing data under MAR
- Complete case analysis: Valid only if MCAR

**Subgroup Analysis**

Risks:
- Increased Type I error from multiple comparisons
- Most subgroups not powered for comparison
- Should be hypothesis-generating, not confirmatory

Appropriate approaches:
- Pre-specified in protocol
- Interaction tests preferred
- Post-hoc analyses clearly labeled exploratory

**Non-Inferiority Analysis**

Null and alternative hypotheses:
- Superiority: H0: no difference, H1: treatment is better
- Non-inferiority: H0: treatment worse by more than margin, H1: treatment not worse by more than margin

Non-inferiority margin considerations:
- Clinically acceptable difference
- Fraction of active control effect
- Statistical justification
- Regulatory acceptance

**Multiplicity Adjustments**

When to adjust:
- Multiple primary endpoints
- Multiple treatment groups
- Multiple time points

Methods:
- Bonferroni: Divide alpha by number of tests (conservative)
- Hierarchical testing: Pre-specified order, test subsequent only if previous significant
- Gatekeeping: Primary must be significant before secondary tested`,
      keyTerms: [
        { term: 'ITT', definition: 'Intent-to-Treat analysis - all participants analyzed as assigned' },
        { term: 'MAR', definition: 'Missing at Random - missingness explained by observed variables' },
        { term: 'family-wise error rate', definition: 'Probability of any Type I error among multiple tests' },
        { term: 'non-inferiority margin', definition: 'Largest acceptable difference that still shows non-inferiority' }
      ],
      analogies: [
        'ITT analysis is like including all players who started the game in team statistics, regardless of whether they finished.',
        'Multiple imputation is like getting multiple expert opinions on missing data and combining them.',
        'Non-inferiority is like proving a new car is "good enough" compared to the established standard.'
      ],
      examples: [
        'The ATLANTIS trial used ITT analysis as the primary analysis, with PP analysis as sensitivity analysis.',
        'The LEAP trial used non-inferiority design with a 10% margin to test early peanut introduction for allergy prevention.',
        'The EMPA-REG OUTCOME trial used hierarchical testing for multiple endpoints with cardiovascular death as the primary endpoint.'
      ],
      patientCounselingPoints: [
        'Researchers analyze everyone according to their assigned treatment, even if they didn\'t take it exactly as prescribed - this preserves the benefits of randomization.',
        'Modern statistical methods handle missing data in ways that reduce bias compared to just analyzing complete cases.',
        'Subgroup analyses help researchers understand if treatments work differently for different types of patients, but these are exploratory.',
        'Non-inferiority trials aim to show that a new treatment is "not unacceptably worse" than an established treatment.'
      ]
    }
  }
};

export default randomizedTrialsContent;
