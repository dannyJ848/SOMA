import { ClinicalTrialsContent } from '../types';

export const phaseTrialsContent: ClinicalTrialsContent = {
  id: 'phase-trials',
  title: 'Clinical Trial Phases',
  category: 'clinical-trials',
  levels: [
    {
      level: 1,
      title: 'Introduction to Clinical Trial Phases',
      content: `
# Introduction to Clinical Trial Phases

Clinical trials are research studies that test how well new medical approaches work in people. Each trial is conducted in phases, each designed to answer different research questions.

## Why Are Phases Important?

Phases help ensure that treatments are both safe and effective before they become widely available. This step-by-step approach protects participants while gathering crucial data.

## The Four Main Phases

- **Phase 1**: Tests safety and dosage
- **Phase 2**: Tests effectiveness and side effects
- **Phase 3**: Compares against standard treatments
- **Phase 4**: Monitors long-term effects after approval

## Key Points

- Not all treatments make it through every phase
- Each phase builds on information from previous phases
- Participant numbers increase as phases progress
- Most treatments take 10-15 years to complete all phases
      `,
      keyPoints: [
        'Clinical trials are conducted in phases to ensure safety and effectiveness',
        'Each phase answers different research questions',
        'The process typically takes 10-15 years',
        'Participant numbers increase with each phase'
      ],
      vocabulary: [
        { term: 'Clinical Trial', definition: 'A research study involving human participants' },
        { term: 'Phase', definition: 'A stage of clinical testing with specific goals' },
        { term: 'FDA', definition: 'Food and Drug Administration - oversees drug approval in the US' }
      ]
    },
    {
      level: 2,
      title: 'Understanding Each Phase',
      content: `
# Understanding Each Clinical Trial Phase

## Phase I: First-in-Human Studies

**Purpose**: To test safety and find the right dosage

- Usually involves 20-100 healthy volunteers
- May include people with the condition for terminal illnesses
- Determines how the drug is absorbed, metabolized, and excreted
- Identifies common side effects

**Duration**: Several months

## Phase II: Efficacy Testing

**Purpose**: To test if the treatment works and continue safety assessment

- Typically involves 100-300 people with the condition
- Measures effectiveness against the targeted disease
- Continues to monitor safety
- Helps determine optimal dose for Phase III

**Duration**: Several months to 2 years

## Phase III: Large-Scale Testing

**Purpose**: To compare new treatment against standard of care

- Involves 300-3,000+ participants
- Conducted at multiple locations (multi-center)
- Provides the primary evidence for effectiveness
- Monitors for rare side effects
- Required for FDA approval

**Duration**: 1-4 years

## Phase IV: Post-Marketing Surveillance

**Purpose**: To monitor long-term safety and effectiveness

- Conducted after FDA approval
- Involves thousands of participants
- Identifies rare or long-term side effects
- Compares against other approved treatments
- May lead to additional uses or warnings

**Duration**: Ongoing
      `,
      keyPoints: [
        'Phase I involves 20-100 participants and focuses on safety',
        'Phase II involves 100-300 participants and tests effectiveness',
        'Phase III involves 300-3,000+ participants for large-scale comparison',
        'Phase IV monitors long-term effects after approval'
      ],
      vocabulary: [
        { term: 'First-in-Human', definition: 'The first time a treatment is tested in people' },
        { term: 'Multi-center', definition: 'Conducted at multiple locations' },
        { term: 'Standard of Care', definition: 'The currently accepted best treatment' }
      ]
    },
    {
      level: 3,
      title: 'Phase Transition Criteria and Decision Points',
      content: `
# Phase Transition Criteria and Decision Points

## Moving Between Phases

Treatments must meet specific criteria to advance to the next phase. This "go/no-go" decision-making process ensures resources are focused on promising treatments.

## Phase I to Phase II Transition

**Criteria for advancement**:
- Acceptable safety profile
- No dose-limiting toxicities
- Pharmacokinetic data supports continued testing
- Some evidence of biological activity

**Common reasons for stopping**:
- Unacceptable side effects
- Poor absorption or metabolism
- No evidence of biological effect

## Phase II to Phase III Transition

**Criteria for advancement**:
- Demonstrated efficacy in target population
- Manageable side effect profile
- Dose established for Phase III
- Competitive advantage over existing treatments

**Phase II trial designs**:
- **Phase IIa**: Proof of concept (dose-finding)
- **Phase IIb**: Confirmatory therapeutic efficacy

## Phase III Success Rates

- Approximately 60-70% of treatments entering Phase III succeed
- Common failure reasons:
  - Not more effective than standard treatment
  - Unexpected safety issues
  - Inability to demonstrate statistical significance
  - Poor trial design or execution

## Accelerated Paths

Some treatments receive accelerated approval pathways:
- **Breakthrough Therapy**: For serious conditions with early evidence of substantial improvement
- **Fast Track**: For serious conditions that fill unmet medical needs
- **Priority Review**: FDA aims to review within 6 months instead of 10
      `,
      keyPoints: [
        'Each phase has specific criteria for advancement',
        '60-70% of treatments succeed in Phase III',
        'Phase II has two subtypes: IIa (proof of concept) and IIb (confirmatory)',
        'Accelerated pathways exist for serious conditions'
      ],
      vocabulary: [
        { term: 'Go/No-Go Decision', definition: 'A decision point to continue or stop a treatment development' },
        { term: 'Dose-Limiting Toxicity', definition: 'Side effects severe enough to limit dosage' },
        { term: 'Pharmacokinetics', definition: 'How the body absorbs, distributes, and eliminates a drug' }
      ]
    },
    {
      level: 4,
      title: 'Special Phase Considerations and Variations',
      content: `
# Special Phase Considerations and Variations

## Phase 0: Exploratory Studies

**Purpose**: Early human testing before traditional Phase I

- Very small doses (subtherapeutic)
- 10-15 participants
- No therapeutic benefit expected
- Tests pharmacokinetics and pharmacodynamics
- Helps decide whether to proceed to Phase I

**Benefits**:
- Requires fewer resources
- Provides early human data
- Reduces risk of later phase failures

## Adaptive Clinical Trials

Traditional trials have fixed designs. Adaptive trials can be modified based on interim data:

**Adaptive elements**:
- Sample size re-estimation
- Dropping ineffective treatment arms
- Adjusting patient population
- Modifying dosing regimens

**Advantages**:
- More efficient
- Expose fewer participants to ineffective treatments
- Faster decision-making

**Challenges**:
- Complex statistical design
- Risk of introducing bias
- Regulatory acceptance requires careful planning

## Master Protocols

**Basket Trials**: Test one drug on multiple diseases with a common molecular feature

**Umbrella Trials**: Test multiple drugs on one disease type based on molecular subtypes

**Platform Trials**: Continuous trials that can add or remove treatment arms over time

## Special Population Considerations

**Pediatric Trials**:
- Often require separate testing
- Age-appropriate formulations needed
- Different dosing and safety considerations
- Pediatric Research Equity Act (PREA) requires pediatric studies

**Geriatric Trials**:
- Age-related changes in drug metabolism
- Multiple comorbidities
- Polypharmacy considerations
      `,
      keyPoints: [
        'Phase 0 allows early human testing with minimal risk',
        'Adaptive trials can be modified based on interim data',
        'Basket, umbrella, and platform trials represent innovative designs',
        'Special populations require tailored trial approaches'
      ],
      vocabulary: [
        { term: 'Basket Trial', definition: 'Tests one drug on multiple diseases with common molecular features' },
        { term: 'Umbrella Trial', definition: 'Tests multiple drugs on one disease based on molecular subtypes' },
        { term: 'Platform Trial', definition: 'Continuous trial that can add/remove treatment arms over time' }
      ]
    },
    {
      level: 5,
      title: 'Advanced Phase Development Strategies',
      content: `
# Advanced Phase Development Strategies

## Seamless Phase I/II and II/III Designs

Traditional phases have clear boundaries. Seamless designs eliminate or blur these boundaries:

**Phase I/II Seamless**:
- Continuous dose-escalation to efficacy testing
- No pause for protocol development
- Saves 6-12 months in development time

**Phase II/III Seamless**:
- Goes directly from dose-finding to confirmatory trial
- Single protocol for both phases
- Requires careful statistical planning

## Sample Size Optimization

**Adaptive Sample Size**:
- Interim analysis determines if more participants needed
- Conditional power calculations guide decisions
- Protects statistical validity while allowing flexibility

**Group Sequential Design**:
- Pre-planned interim analyses
- Can stop early for:
  - Efficacy (overwhelming benefit)
  - Futility (unlikely to show benefit)
  - Safety (unacceptable toxicity)

## Bayesian Approaches in Phase Development

**Traditional (Frequentist)**:
- Fixed sample sizes
- Binary accept/reject decisions
- P-value thresholds

**Bayesian**:
- Updates probability of success as data accumulates
- Incorporates prior knowledge
- More flexible decision-making
- Smaller sample sizes possible

**Challenges**:
- Regulatory acceptance evolving
- Requires pre-specified priors
- More complex statistical analysis

## Platform Trial Operations

**Master Protocol Advantages**:
- Shared control arm reduces total participants needed
- Infrastructure reused across multiple therapies
- Faster initiation of new treatment arms
- Cost-effective for rare diseases

**Operational Considerations**:
- Centralized IRB review
- Standardized data collection
- Centralized monitoring
- Shared biorepository

## Real-World Evidence Integration

**Pragmatic Clinical Trials**:
- Test effectiveness in real-world settings
- Broader inclusion criteria
- Less intensive monitoring
- Informative for Phase IV and post-marketing

**Hybrid Designs**:
- Combine explanatory and pragmatic elements
- Balance internal and external validity
- Increasingly important for value-based healthcare
      `,
      keyPoints: [
        'Seamaseless designs combine phases to save time',
        'Group sequential designs allow early stopping',
        'Bayesian approaches offer more flexible decision-making',
        'Platform trials optimize resources through shared infrastructure'
      ],
      vocabulary: [
        { term: 'Conditional Power', definition: 'Probability of success given current trial data' },
        { term: 'Group Sequential Design', definition: 'Trial with pre-planned interim analyses for early stopping' },
        { term: 'Pragmatic Trial', definition: 'Tests effectiveness in real-world settings' }
      ]
    }
  ]
};
