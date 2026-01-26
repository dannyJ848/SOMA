/**
 * Quality of Life Focus - Educational Content
 *
 * Explains the patient-centered approach of palliative care that prioritizes
 * quality of life, well-being, and what matters most to patients and families.
 */

import { EducationalContent } from '../types';

export const qualityOfLifeFocus: EducationalContent = {
  id: 'concept-quality-of-life',
  type: 'concept',
  name: 'Quality of Life Focus',
  alternateNames: ['Patient-Centered Care', 'Well-Being in Serious Illness', 'Living Well with Illness'],

  levels: {
    1: {
      level: 1,
      summary: 'Quality of life means how good your days feel - not just being free of pain, but also feeling happy, connected to loved ones, and able to do things that matter to you.',
      explanation: `**What Is Quality of Life?**

Quality of life means how good your everyday life feels. It is not just about being sick or healthy - it is about the whole picture of your life.

Quality of life includes:
- **How your body feels**: Are you in pain? Can you eat and sleep?
- **How your heart feels**: Are you happy? Worried? Peaceful?
- **Your relationships**: Can you spend time with people you love?
- **Doing what matters**: Can you do activities that are important to you?
- **Feeling like yourself**: Do you still feel like who you are?

**Why Quality of Life Matters in Serious Illness**

When someone is very sick, doctors often focus on fighting the disease. But palliative care asks a different question: "What makes life feel worth living for you?"

Some people want to:
- Spend time with family
- Be comfortable and free of pain
- Stay at home as much as possible
- Keep doing favorite hobbies
- Make memories with loved ones

Everyone's answer is different, and that is okay! The goal is to help you live YOUR best life, whatever that means to you.

**How Palliative Care Helps Quality of Life**

- Controls pain and other uncomfortable symptoms
- Helps with worry, sadness, and fear
- Supports your whole family
- Helps you make choices about your care
- Focuses on what YOU want most`,
      keyTerms: [
        { term: 'quality of life', definition: 'How good and satisfying your daily life feels overall' },
        { term: 'well-being', definition: 'A state of feeling good in body and mind' },
        { term: 'patient-centered', definition: 'Care that is designed around what the patient wants and needs' },
      ],
      analogies: [
        'Quality of life is like a recipe - it has many ingredients. Health is one ingredient, but so is happiness, love, and doing things you enjoy. Everyone has their own favorite recipe.',
        'Think of life as a garden. Quality of life is not just about having no weeds (no illness) - it is about growing the flowers that make you happiest.',
      ],
      examples: [
        'A grandmother might say her quality of life is good when she can read stories to her grandchildren, even if she needs help with other things.',
        'A man might feel good about his quality of life because he can still watch his favorite sports with friends, even while getting treatment.',
      ],
    },
    2: {
      level: 2,
      summary: 'Quality of life is a multidimensional concept encompassing physical, emotional, social, and spiritual well-being. Palliative care measures and optimizes each domain based on individual patient values and preferences.',
      explanation: `## Understanding Quality of Life

Quality of life (QOL) in healthcare refers to a person's overall well-being and ability to enjoy life. It is subjective - only the patient can truly define what quality of life means for them.

### Domains of Quality of Life

**Physical Well-Being**
- Freedom from pain and discomfort
- Ability to perform daily activities
- Energy and strength
- Sleep quality
- Appetite and nutrition
- Physical function and mobility

**Emotional/Psychological Well-Being**
- Mood and happiness
- Freedom from anxiety and depression
- Sense of meaning and purpose
- Hope (which can exist even without cure)
- Feeling of dignity and respect
- Peace and acceptance

**Social Well-Being**
- Connection with family and friends
- Ability to maintain relationships
- Support from others
- Intimacy and closeness
- Feeling valued by others

**Spiritual Well-Being**
- Sense of meaning and purpose
- Connection to beliefs or faith
- Inner peace
- Reconciliation and forgiveness
- Legacy and what you leave behind

### Measuring Quality of Life

Healthcare teams use questionnaires to understand how patients are doing:
- Questions about symptoms (pain, fatigue, nausea)
- Questions about daily activities
- Questions about emotional state
- Questions about relationships and support

This helps the team focus on what matters most to each patient.

### Quality of Life vs. Quantity of Life

One of the hardest decisions in serious illness is balancing:
- **Quantity**: How much time might a treatment give?
- **Quality**: How will that time feel?

Some treatments extend life but with significant side effects. Some patients choose quality over quantity. Others want every possible day. There is no right answer - only YOUR right answer.

### How Palliative Care Improves Quality of Life

1. **Symptom Management**: Aggressive treatment of pain, nausea, fatigue
2. **Emotional Support**: Help with anxiety, depression, fear
3. **Communication**: Understanding illness, making informed decisions
4. **Care Coordination**: Reducing burden of medical appointments
5. **Family Support**: Helping loved ones cope
6. **Goal Alignment**: Ensuring care matches what patients want`,
      keyTerms: [
        { term: 'domains', definition: 'Different areas or aspects of life that contribute to overall well-being' },
        { term: 'subjective', definition: 'Based on personal feelings and experiences, not just measurable facts' },
        { term: 'quantity of life', definition: 'How long a person lives, measured in time' },
        { term: 'dignity', definition: 'Being treated with respect and maintaining self-worth' },
        { term: 'legacy', definition: 'What someone leaves behind - memories, values, impact on others' },
      ],
      analogies: [
        'Quality of life is like a symphony - it needs many instruments (physical, emotional, social, spiritual) playing together in harmony to create beautiful music.',
      ],
    },
    3: {
      level: 3,
      summary: 'Quality of life assessment utilizes validated instruments measuring physical, functional, psychological, social, and existential domains. Integration of patient-reported outcomes into clinical care enables personalized, value-concordant treatment planning.',
      explanation: `## Quality of Life: Clinical Framework

### Theoretical Models

**Wilson and Cleary Model**
Hierarchical model linking:
1. Biological/physiological factors
2. Symptom status
3. Functional status
4. General health perceptions
5. Overall quality of life

**PROMIS Framework**
Patient-Reported Outcomes Measurement Information System:
- Physical health
- Mental health
- Social health
Validated across multiple populations with computer adaptive testing

### Validated Assessment Instruments

**Generic QOL Instruments**

*SF-36/SF-12*
- 36 or 12 items measuring 8 domains
- Physical and mental component scores
- Widely used comparator

*EQ-5D*
- 5 dimensions: mobility, self-care, usual activities, pain/discomfort, anxiety/depression
- Utility weights for cost-effectiveness analysis
- Visual analog scale

**Palliative Care-Specific Instruments**

*FACIT-Pal (Functional Assessment of Chronic Illness Therapy - Palliative)*
- 46 items across 5 domains
- Physical, social, emotional, functional, palliative concerns
- Validated in palliative populations

*EORTC QLQ-C30 with PAL module*
- European cancer-specific instrument
- Core questionnaire plus palliative module (QLQ-C15-PAL)
- 15 items for patients with advanced disease

*McGill Quality of Life Questionnaire*
- 16 items emphasizing existential domain
- Physical, psychological, existential, support
- Developed specifically for palliative care

*QUAL-E (Quality of Life at End of Life)*
- Domains: life completion, relationship with healthcare, symptoms, preparation, connectedness

### Patient-Reported Outcomes in Practice

**Routine Monitoring**
- ESAS-r for symptom screening at each visit
- Trending over time to identify changes
- Actionable thresholds (e.g., pain >4/10)

**Shared Decision-Making**
- What matters conversations
- Trade-off discussions (quality vs. quantity)
- Values clarification exercises

**Quality Improvement**
- PRO-based triggers for intervention
- Population-level monitoring
- Benchmarking and outcomes measurement

### Factors Affecting Quality of Life

**Modifiable Factors**
- Symptom burden (treatable)
- Depression and anxiety (treatable)
- Social support (can be enhanced)
- Information needs (addressable)
- Care coordination (improvable)

**Less Modifiable Factors**
- Disease progression
- Prior function
- Personality and coping style

### Special Populations

**Cognitive Impairment**
- Use proxy assessment with caution
- Behavioral observation scales
- Focus on observable comfort markers

**Cultural Considerations**
- QOL domains may differ across cultures
- Family-centered vs. patient-centered frameworks
- Spiritual/religious importance varies

**Pediatric Palliative Care**
- Developmentally appropriate assessment
- Parent proxy and child self-report
- Play and school as functional domains`,
      keyTerms: [
        { term: 'FACIT-Pal', definition: 'Functional Assessment of Chronic Illness Therapy - Palliative, validated QOL questionnaire' },
        { term: 'EQ-5D', definition: 'EuroQol 5-dimension questionnaire, generates utility scores for health economics' },
        { term: 'PRO', definition: 'Patient-Reported Outcome - health data coming directly from the patient' },
        { term: 'proxy assessment', definition: 'Someone else (family, caregiver) reporting on patient\'s quality of life' },
        { term: 'utility weight', definition: 'Numerical value representing quality of a health state for economic analysis' },
      ],
      clinicalNotes: 'Implement routine ESAS-r or similar PRO screening at every palliative care encounter. Use results to drive clinical decision-making and track quality improvement. Remember that QOL is subjective - ask patients what matters most to them.',
    },
    4: {
      level: 4,
      summary: 'Quality of life measurement in palliative care requires understanding psychometric properties of instruments, integration with clinical decision support systems, application in comparative effectiveness research, and use in value-based healthcare models.',
      explanation: `## Advanced Quality of Life Assessment

### Psychometric Considerations

**Validity Types**
- Content validity: Does instrument cover relevant domains?
- Criterion validity: Correlation with gold standard
- Construct validity: Correlation with related measures
- Responsiveness: Ability to detect clinically meaningful change

**Reliability**
- Internal consistency (Cronbach's alpha >0.70)
- Test-retest reliability
- Inter-rater reliability for observer-rated measures

**Minimal Clinically Important Difference (MCID)**
- Smallest change patients perceive as meaningful
- Used to interpret individual changes and trial results
- Examples:
  - ESAS: 0.5-1 point on individual items
  - FACT-G: 3-7 points total score
  - EQ-5D VAS: 8-12 points

### Electronic PRO (ePRO) Implementation

**Benefits**
- Real-time data collection
- Reduced missing data
- Automated scoring and trending
- Integration with clinical workflows
- Remote monitoring capability

**Basch et al., JCO 2017**
- ePRO symptom monitoring in metastatic cancer
- Improved quality of life
- Extended survival (5.2 months improvement)
- Fewer ED visits and hospitalizations

**Implementation Considerations**
- Patient digital literacy
- Technology access (devices, internet)
- Clinical workflow integration
- Alert thresholds and response protocols
- Provider burden and alert fatigue

### Quality of Life in Clinical Trials

**FDA Guidance on PROs**
- PRO can support labeling claims
- Requires validated instrument
- Prespecified endpoints
- Adequate sample size for PRO analysis

**Endpoint Types**
- Responder analysis (% achieving MCID)
- Time to deterioration
- Area under curve
- Mixed-effects models for repeated measures

**Missing Data Challenges**
- Death (informative censoring)
- Dropout due to toxicity
- Cognitive decline
- Strategies: joint modeling, principal stratum analysis

### Quality of Life and Healthcare Value

**Value Equation**
Value = Outcomes / Cost

QOL outcomes increasingly important:
- Quality-adjusted life years (QALYs)
- Cost per QALY analysis
- QALY thresholds for coverage ($50,000-$150,000/QALY)

**Palliative Care Value Proposition**
- Equivalent or better QOL outcomes
- Lower healthcare costs
- Better goal-concordant care
- Improved patient/family satisfaction

### Response Shift Phenomenon

**Definition**
Change in internal standards, values, or conceptualization of QOL over time with illness experience.

**Types**
- Recalibration: Change in internal scale
- Reprioritization: Change in domain importance
- Reconceptualization: Change in definition of QOL

**Clinical Implications**
- Patients may report stable QOL despite objective decline
- Represents adaptation and coping
- Challenges interpretation of longitudinal data
- Then-test methods to detect

### Quality of Life Across Disease Trajectories

**Cancer Trajectory**
- Often stable until late decline
- Treatment-related fluctuations
- Terminal phase rapid decline

**Organ Failure Trajectory (Heart, Lung, Kidney)**
- Gradual decline with exacerbations
- Unpredictable timing of death
- Multiple recovery points before final decline

**Frailty/Dementia Trajectory**
- Prolonged gradual decline
- Low baseline with slow deterioration
- Death often from intercurrent illness

**Implications for QOL Assessment**
- Timing of measurement matters
- Trajectory-specific instruments
- Prognostic awareness affects QOL`,
      keyTerms: [
        { term: 'MCID', definition: 'Minimal Clinically Important Difference - smallest meaningful change to patients' },
        { term: 'QALY', definition: 'Quality-Adjusted Life Year - measure combining quantity and quality of life' },
        { term: 'response shift', definition: 'Change in patient\'s internal standards for evaluating quality of life' },
        { term: 'ePRO', definition: 'Electronic Patient-Reported Outcomes - digital collection of patient data' },
        { term: 'joint modeling', definition: 'Statistical method handling longitudinal PRO data with informative dropout' },
      ],
      clinicalNotes: 'When interpreting QOL data, consider response shift - patients may adapt their internal standards over time. Use MCID thresholds for clinical interpretation. Implement ePRO systems with appropriate alert protocols and response workflows to translate PRO data into improved care.',
    },
    5: {
      level: 5,
      summary: 'Optimizing quality of life in serious illness requires integrating precision palliation approaches, addressing existential and spiritual dimensions, implementing system-level PRO measurement, and advancing research on QOL in value-based care frameworks.',
      explanation: `## Quality of Life: Advanced Clinical and Research Perspectives

### Precision Palliation

**Concept**
Matching palliative interventions to individual patient characteristics:
- Symptom phenotypes
- Psychological profiles
- Social determinants
- Prognostic subgroups
- Treatment preferences

**Emerging Approaches**
- Pharmacogenomics for opioid selection
- Predictive models for symptom trajectory
- Tailored psychological interventions
- Adaptive intervention designs

### Existential and Spiritual Quality of Life

**Existential Concerns**
- Meaninglessness and purpose
- Isolation and connection
- Freedom and responsibility
- Death and mortality

**Spiritual Assessment Tools**
- FICA: Faith, Importance, Community, Address
- HOPE: Hope, Organized religion, Personal spirituality, Effects
- SPIRIT: Spiritual belief system, Personal spirituality, Integration, Rituals, Implications, Terminal events

**Meaning-Centered Psychotherapy (MCP)**
Breitbart model:
- 7 sessions addressing sources of meaning
- Historical, attitudinal, creative, experiential sources
- Randomized trials show improved spiritual well-being
- Reduced depression and hopelessness

**Dignity Therapy**
Chochinov intervention:
- Generativity document created with patient
- Legacy and life review
- Improved dignity, meaning, and purpose
- Helpful for families post-death

### System-Level PRO Implementation

**Learning Health System Approach**
- Routine PRO collection in all serious illness care
- Data aggregation and analysis
- Feedback to clinicians and systems
- Quality improvement cycles
- Comparative effectiveness research

**PRO-Based Care Models**
*Memorial Sloan Kettering Model*
- Electronic symptom monitoring
- Automated alerts to nursing
- Telephone follow-up protocol
- Demonstrated survival benefit

*Epic/ESAS Integration*
- PRO collection via patient portal
- Flowsheet integration
- Alert notifications
- Dashboard displays

**Population Health Applications**
- Risk stratification using PRO data
- Care management program triggers
- Quality measurement and reporting
- Value-based contract metrics

### Research Frontiers

**Missing Data and Attrition**
Advanced methods:
- Joint models for longitudinal and survival data
- Pattern mixture models
- Selection models
- Sensitivity analyses

**Heterogeneity of Treatment Effects**
- Individual patient data meta-analysis
- Predictive enrichment strategies
- Adaptive trial designs
- N-of-1 trials in palliative care

**Composite Outcomes**
- Quality and quantity integration
- Q-TWiST (Quality-adjusted Time Without Symptoms and Toxicity)
- Restricted mean survival time adjustments
- Win ratio methods

### Quality of Life in Value-Based Care

**Alternative Payment Models**
- Bundled payments including QOL metrics
- Outcomes-based contracts with PRO endpoints
- Population health management incentives
- MIPS quality measures

**QOL as Quality Indicator**
- NQF-endorsed PRO measures
- CMS hospice quality reporting
- AHRQ patient experience measures
- Accreditation standards

**Health Technology Assessment**
- NICE threshold: GBP20,000-30,000/QALY
- ICER analyses in US
- Value frameworks (ASCO, NCCN, ESMO)
- Real-world evidence for QOL

### Special Topics

**Caregiver Quality of Life**
- Distinct construct from patient QOL
- Instruments: CRA, ZBI, CQOLC
- Intervention targets
- Bereavement outcomes

**Quality of Dying and Death**
- QODD questionnaire
- Post-death assessment by family
- Good death frameworks
- Quality improvement applications

**Digital Health and QOL**
- Wearables for symptom monitoring
- Conversational AI for assessment
- Virtual reality for symptom management
- Telehealth integration

### Implementation Science

**Barriers to PRO Implementation**
- Workflow integration
- Provider engagement
- Patient burden
- Technology access
- Data interpretation

**Facilitators**
- Leadership commitment
- EHR integration
- Actionable thresholds
- Clear response protocols
- Feedback to providers

**RE-AIM Framework**
- Reach: What proportion of patients?
- Effectiveness: What are outcomes?
- Adoption: How many settings use it?
- Implementation: How well is it delivered?
- Maintenance: Is it sustained?`,
      keyTerms: [
        { term: 'precision palliation', definition: 'Tailoring palliative interventions to individual patient characteristics' },
        { term: 'Dignity Therapy', definition: 'Brief intervention creating generativity document addressing legacy and meaning' },
        { term: 'Q-TWiST', definition: 'Quality-adjusted Time Without Symptoms and Toxicity - composite outcome measure' },
        { term: 'QODD', definition: 'Quality of Dying and Death questionnaire - post-death family assessment' },
        { term: 'Learning Health System', definition: 'Healthcare system that continuously generates and applies evidence' },
        { term: 'RE-AIM', definition: 'Framework for evaluating implementation: Reach, Effectiveness, Adoption, Implementation, Maintenance' },
      ],
      clinicalNotes: `Advanced implementation recommendations:
1. Integrate PROs into EHR with automated alerts at clinically meaningful thresholds
2. Implement dignity therapy or meaning-centered psychotherapy for existential distress
3. Use formal spiritual assessment (FICA/HOPE) and chaplaincy referral
4. Track caregiver quality of life alongside patient metrics
5. Participate in learning health system data networks
6. Consider value-based payment models that incorporate PRO endpoints
7. Apply implementation science frameworks (RE-AIM) to PRO programs`,
    },
  },

  media: [
    {
      id: 'qol-domains-diagram',
      type: 'diagram',
      filename: 'quality-of-life-domains.svg',
      title: 'Quality of Life Domains',
      description: 'Visual representation of physical, emotional, social, and spiritual domains of quality of life',
    },
  ],

  citations: [
    {
      id: 'facit-measurement',
      type: 'website',
      title: 'FACIT Measurement System',
      source: 'FACIT.org',
      url: 'https://www.facit.org/',
    },
    {
      id: 'basch-2016',
      type: 'article',
      title: 'Symptom Monitoring With Patient-Reported Outcomes During Routine Cancer Treatment',
      authors: ['Basch, E.', 'Deal, A.M.', 'Dueck, A.C.', 'et al.'],
      source: 'Journal of Clinical Oncology',
      url: 'https://doi.org/10.1200/JCO.2015.63.0830',
    },
    {
      id: 'chochinov-dignity',
      type: 'article',
      title: 'Dignity Therapy: A Novel Psychotherapeutic Intervention',
      authors: ['Chochinov, H.M.'],
      source: 'Journal of Clinical Oncology',
      url: 'https://doi.org/10.1200/JCO.2005.08.391',
    },
  ],

  crossReferences: [
    { targetId: 'concept-palliative-vs-hospice', targetType: 'concept', relationship: 'related', label: 'Palliative vs Hospice Care' },
    { targetId: 'concept-goals-of-care', targetType: 'concept', relationship: 'related', label: 'Goals of Care Conversations' },
    { targetId: 'symptom-overview', targetType: 'topic', relationship: 'related', label: 'Symptom Management' },
    { targetId: 'concept-comfort-care', targetType: 'concept', relationship: 'related', label: 'Comfort Care Measures' },
  ],

  tags: {
    systems: ['palliative-care'],
    topics: ['quality of life', 'patient-centered care', 'patient-reported outcomes', 'well-being'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default qualityOfLifeFocus;
