/**
 * Medication Adherence - Self-Management Skills
 *
 * Strategies and tools for taking medications correctly
 * and consistently in chronic disease management.
 */

import { EducationalContent } from '../../types';

export const MEDICATION_ADHERENCE: EducationalContent = {
  id: 'chronic-disease-medication-adherence',
  type: 'concept',
  name: 'Medication Adherence',
  alternateNames: ['Medication compliance', 'Taking medicines correctly', 'Sticking with medications'],

  levels: {
    1: {
      level: 1,
      summary: 'Taking your medicines the right way helps them work better and keeps you healthier.',
      explanation: `**Why Taking Medicine Correctly Matters**

When you have a chronic condition like diabetes, high blood pressure, or heart disease, your medicines help keep you healthy every day. Taking them the right way is important!

**What Can Go Wrong:**
- Taking too little means the medicine doesn't work well
- Missing doses can cause problems to come back
- Taking too much can be dangerous
- Taking at wrong times may make medicine less effective

**Simple Tips for Remembering:**

*1. Make It Part of Your Routine*
- Take medicines at the same time every day
- Link it to something you already do (breakfast, brushing teeth)
- Keep medicines where you'll see them

*2. Use Reminders*
- Set phone alarms
- Put sticky notes on your mirror
- Ask a family member to remind you
- Use a pill box with days of the week

*3. Stay Organized*
- Use a pill box to sort your medicines
- Keep a list of all your medicines
- Know what each medicine is for
- Refill before you run out

**Common Problems and Solutions:**

| Problem | Solution |
|---------|----------|
| I forget | Use alarms and pill boxes |
| Too many pills | Ask about combination pills |
| Side effects | Talk to your doctor - don't just stop! |
| Can't afford | Ask about generic versions or patient assistance |
| Hard to swallow | Ask about liquid forms |

**Very Important Rules:**
- Never stop taking medicine without asking your doctor first
- Don't share your medicines with anyone
- Tell all your doctors about all your medicines
- Ask questions if you don't understand something`,
      keyTerms: [
        { term: 'adherence', definition: 'Taking your medicines exactly as your doctor prescribed' },
        { term: 'dose', definition: 'The amount of medicine you should take at one time' },
        { term: 'refill', definition: 'Getting more medicine before you run out' },
        { term: 'side effect', definition: 'An unwanted effect from a medicine' },
      ],
      analogies: [
        'Taking your medicine regularly is like watering a plant - you need to do it consistently for it to stay healthy.',
        'Missing medicine doses is like missing steps while climbing stairs - you won\'t get where you need to go.',
      ],
      examples: [
        'Mrs. Garcia puts her blood pressure pill next to her coffee maker so she remembers to take it with breakfast.',
        'Tom uses a weekly pill box and fills it every Sunday night while watching TV.',
      ],
    },
    2: {
      level: 2,
      summary: 'Medication adherence involves taking the right medicine, at the right dose, at the right time, in the right way - and doing this consistently for optimal disease control.',
      explanation: `**Components of Medication Adherence:**

Adherence means following the "5 Rights":
1. **Right medication** - Taking what was prescribed
2. **Right dose** - Correct amount each time
3. **Right time** - When scheduled
4. **Right route** - How to take it (oral, inhaled, injected)
5. **Right frequency** - How often (daily, twice daily, etc.)

**Why Non-Adherence Is Common:**

*Intentional Non-Adherence:*
- Concerns about side effects
- Don't believe medicine is necessary
- Feeling better and thinking medicine not needed
- Cost concerns

*Unintentional Non-Adherence:*
- Forgetting
- Not understanding instructions
- Complex medication schedules
- Physical barriers (opening bottles, swallowing)

**Consequences of Poor Adherence:**

| Condition | Consequences of Non-Adherence |
|-----------|-------------------------------|
| Hypertension | Stroke, heart attack, kidney damage |
| Diabetes | High blood sugar, complications |
| Heart failure | Fluid buildup, hospitalization |
| COPD | More breathing problems, flare-ups |
| After heart attack | Another heart attack |

**Strategies for Better Adherence:**

*Simplification:*
- Ask about once-daily medications
- Combination pills (two medicines in one)
- Align medication times when possible
- Reduce total number of pills if possible

*Organization Tools:*
- Weekly pill organizers
- Monthly blister packs from pharmacy
- Automatic refills
- 90-day supplies when appropriate

*Reminder Systems:*
- Smartphone alarms
- Medication reminder apps
- Smart pill bottles
- Calendar marking

*Support Systems:*
- Family member involvement
- Pharmacist medication reviews
- Nurse care coordinators
- Support groups

**Managing Side Effects:**

Don't stop medicines because of side effects without talking to your doctor. Instead:
1. Report side effects to your healthcare team
2. Ask if there are alternative medicines
3. Ask if side effects will improve over time
4. Discuss timing changes (some work better at night)
5. Ask about ways to manage side effects

**Communicating with Healthcare Providers:**

Be honest about:
- Medicines you've missed
- Side effects you're experiencing
- Cost concerns
- Confusion about instructions
- Concerns about the medication`,
      keyTerms: [
        { term: 'non-adherence', definition: 'Not taking medications as prescribed' },
        { term: 'combination pill', definition: 'A single pill containing two or more medications' },
        { term: 'blister pack', definition: 'Medication packaging with individual doses sealed in plastic bubbles, often labeled by date/time' },
        { term: 'medication reconciliation', definition: 'Process of reviewing all medications to ensure accuracy and appropriateness' },
      ],
      analogies: [
        'Medication adherence is like following a recipe - changing ingredients or amounts can change the outcome.',
      ],
    },
    3: {
      level: 3,
      summary: 'Medication adherence encompasses primary (filling prescriptions), secondary (taking as prescribed), and persistence (continuing therapy), with multiple evidence-based interventions available to address each dimension.',
      explanation: `**Dimensions of Medication Adherence:**

*Primary Adherence:*
- Filling initial prescription
- 20-30% of new prescriptions never filled
- Electronic prescribing improves primary adherence

*Secondary Adherence:*
- Taking medication as prescribed once obtained
- Measured as proportion of doses taken correctly
- Various calculation methods (MPR, PDC)

*Persistence:*
- Continuing to take medication over time
- Measured as time to discontinuation
- Common discontinuation: 6-12 months

**Measuring Adherence:**

*Self-Report Measures:*
- Morisky Medication Adherence Scale (MMAS)
- Brief Medication Questionnaire
- Pros: Easy, inexpensive
- Cons: Overestimates adherence

*Objective Measures:*
| Method | What It Measures | Limitations |
|--------|------------------|-------------|
| Pharmacy refill data | Medication obtained | Not taking confirmed |
| Pill counts | Pills used | Not timing or method |
| Electronic monitors | Bottle openings | Expensive, not taking confirmed |
| Drug levels | Blood/urine levels | Invasive, white coat adherence |

*Adherence Calculations:*
- **Medication Possession Ratio (MPR)**: Days supply / days in period
- **Proportion of Days Covered (PDC)**: Days with medication available / days in period
- PDC preferred by quality organizations
- >80% often considered adherent threshold

**Evidence-Based Interventions:**

*Patient-Focused:*
- Health literacy assessment and education
- Motivational interviewing
- Teach-back method
- Shared decision-making
- Goal-setting

*Medication-Focused:*
- Regimen simplification
- Synchronizing refill dates
- Fixed-dose combinations
- Reduce pill burden

*System-Focused:*
- Reminder systems
- Electronic prescribing
- Pharmacist-led interventions
- Medication therapy management
- Integrated care models

**Condition-Specific Considerations:**

*Cardiovascular Disease:*
- Statins: ~50% adherent at 1 year
- Aspirin: Often stopped due to perceived low importance
- Beta-blockers: Side effects drive discontinuation

*Diabetes:*
- Oral agents: Better adherence than insulin
- Complexity with multiple daily injections
- Cost major barrier for insulin

*Asthma/COPD:*
- Maintenance inhalers often used less than prescribed
- Inhaler technique compounds adherence issues
- Controller vs. rescue medication confusion

**Special Populations:**

*Older Adults:*
- Polypharmacy challenges
- Cognitive impairment
- Physical dexterity limitations
- Caregiver involvement may help

*Low Health Literacy:*
- Simplified instructions
- Pictorial aids
- Teach-back confirmation
- Universal health literacy precautions`,
      keyTerms: [
        { term: 'proportion of days covered (PDC)', definition: 'Adherence measure calculating percentage of days patient has medication available' },
        { term: 'medication possession ratio (MPR)', definition: 'Sum of days supply obtained divided by total days in measurement period' },
        { term: 'polypharmacy', definition: 'Use of multiple medications, typically defined as 5 or more' },
        { term: 'medication therapy management', definition: 'Pharmacist-provided service to optimize medication use' },
        { term: 'motivational interviewing', definition: 'Counseling approach to resolve ambivalence and support behavior change' },
      ],
      clinicalNotes: 'PDC is the preferred adherence measure by CMS and other quality programs. Adherence interventions should be multi-faceted, addressing patient, medication, and system factors. Electronic monitoring provides most accurate data but is impractical for routine clinical care.',
    },
    4: {
      level: 4,
      summary: 'Medication non-adherence is a complex behavioral phenomenon influenced by patient, provider, health system, and medication factors, requiring comprehensive assessment and tailored multi-component interventions.',
      explanation: `**Theoretical Frameworks:**

*Health Belief Model:*
- Perceived susceptibility to complications
- Perceived severity of condition
- Perceived benefits of medication
- Perceived barriers to taking medication
- Cues to action
- Self-efficacy

*Information-Motivation-Behavioral Skills Model:*
- Information about disease and treatment
- Personal and social motivation
- Behavioral skills for adherence

*COM-B Model:*
- Capability (knowledge, skills)
- Opportunity (environmental support)
- Motivation (automatic and reflective)

**Determinants of Adherence:**

*Patient Factors:*
- Demographics (age, socioeconomic status)
- Health beliefs and illness perceptions
- Depression and mental health conditions
- Cognitive function
- Health literacy
- Social support
- Competing priorities

*Provider Factors:*
- Communication quality
- Prescribing complexity
- Follow-up frequency
- Relationship and trust

*Medication Factors:*
- Dosing frequency
- Side effect profile
- Route of administration
- Perceived efficacy
- Time to benefit

*Health System Factors:*
- Access to care
- Insurance coverage
- Pharmacy accessibility
- Care coordination
- Electronic health tools

**Cost-Related Non-Adherence:**

*Prevalence:*
- 10-30% of patients don't fill prescriptions due to cost
- More common with multiple chronic conditions
- Associated with poor outcomes and higher total costs

*Patient Strategies (may be harmful):*
- Not filling prescriptions
- Skipping doses to stretch supply
- Splitting pills (not always appropriate)
- Rationing insulin (dangerous)

*Healthcare System Responses:*
- Generic prescribing
- Value-based insurance design
- Patient assistance programs
- 340B drug pricing program

**Intervention Design:**

*Cochrane Review Findings:*
- Simple interventions (reminders, packaging) modestly effective
- Complex interventions (multiple components) more effective
- Effect sizes generally small to moderate
- Sustained adherence difficult to achieve

*Key Intervention Components:*

| Component | Evidence Level | Practical Considerations |
|-----------|---------------|-------------------------|
| Simplification | Moderate | Not always clinically feasible |
| Reminders | Moderate | Digital fatigue concern |
| Education | Low alone | Necessary but insufficient |
| Counseling | Moderate | Time and training required |
| Monitoring | Moderate | Privacy concerns |
| Team-based care | Moderate-High | Resource intensive |

**Digital Health for Adherence:**

*Smartphone Applications:*
- Medication reminders
- Refill tracking
- Education content
- Provider communication
- Mixed evidence for effectiveness

*Smart Medication Devices:*
- Electronic pill bottles (e.g., AdhereTech)
- Smart blister packs
- Connected inhalers
- Real-time adherence monitoring
- Cost and scalability limitations

*Text Message Interventions:*
- SMS reminders improve short-term adherence
- Bidirectional texting may be more effective
- Personalization improves engagement

**Quality Measurement:**

*Healthcare Effectiveness Data and Information Set (HEDIS):*
- Medication adherence measures for:
  - Diabetes medications
  - RAS antagonists (hypertension/heart failure)
  - Statins
- PDC ≥80% is quality threshold
- Tied to Medicare Star Ratings

*Clinical Implications:*
- Adherence is a modifiable factor in outcomes
- Systematic assessment should be routine
- Non-adherence should be addressed non-judgmentally
- Interventions should be tailored to barriers`,
      keyTerms: [
        { term: 'COM-B model', definition: 'Behavioral framework identifying Capability, Opportunity, and Motivation as determinants of behavior' },
        { term: 'cost-related non-adherence', definition: 'Not taking medications as prescribed due to financial barriers' },
        { term: 'value-based insurance design', definition: 'Insurance approach reducing cost barriers for high-value medications' },
        { term: 'HEDIS', definition: 'Healthcare Effectiveness Data and Information Set; standardized healthcare quality measures' },
        { term: '340B program', definition: 'Federal program requiring drug manufacturers to provide outpatient drugs to eligible health care organizations at reduced prices' },
      ],
      clinicalNotes: 'Cost-related non-adherence should be routinely assessed and addressed. Medication adherence measures are tied to healthcare quality ratings and reimbursement. Insulin rationing is a patient safety issue requiring proactive intervention. Digital adherence tools show promise but long-term effectiveness data are limited.',
    },
    5: {
      level: 5,
      summary: 'Medication adherence represents a complex adaptive behavior requiring precision medicine approaches that integrate individual patient characteristics, behavioral science, digital health technologies, and health system redesign to achieve sustained optimal medication-taking behavior.',
      explanation: `**Contemporary Understanding:**

Medication adherence has evolved from a compliance paradigm (patient follows orders) to an engagement paradigm (shared decision-making and self-management). Key shifts include:

- From "compliance" to "adherence" to "concordance"
- Recognition of patient autonomy and preferences
- Understanding of behavioral complexity
- Appreciation of health system contributions
- Integration of digital health capabilities

**Precision Adherence Medicine:**

*Phenotyping Non-Adherence:*
\`\`\`
Patient Phenotypes:
├── Intentional
│   ├── Cost-related
│   ├── Side effect-related
│   ├── Belief-related
│   └── Preference-related
└── Unintentional
    ├── Forgetting
    ├── Health literacy
    ├── Complexity-related
    └── Access-related
\`\`\`

Each phenotype requires different intervention strategies.

*Predictive Analytics:*
- Machine learning models predict non-adherence risk
- Variables: demographics, diagnosis, prior adherence, pharmacy patterns
- Enable proactive intervention before adherence decline
- Challenges: data quality, implementation, equity

**Behavioral Economics Approaches:**

*Loss Aversion:*
- Framing non-adherence in terms of losses
- Lottery-based incentives

*Default Effects:*
- Automatic refills as default
- Opt-out vs. opt-in enrollment

*Present Bias:*
- Immediate rewards for adherence
- Commitment devices

*Social Norms:*
- Peer comparison feedback
- Social support interventions

**Trials of Behavioral Economics:**

*HeartStrong Trial (JAMA Internal Medicine):*
- Financial incentives for post-MI medication adherence
- Lottery-based daily incentives
- Remote monitoring of pill bottle openings
- Results: Improved adherence but no clinical outcomes difference

*Way to Health Trials:*
- Multiple studies of incentive-based adherence
- Generally positive adherence effects
- Sustainability after incentive removal uncertain

**Implementation Science:**

*Framework Applications:*
- CFIR (Consolidated Framework for Implementation Research)
- RE-AIM (Reach, Effectiveness, Adoption, Implementation, Maintenance)
- Focus on scalable, sustainable interventions

*Spread and Scale Challenges:*
- Intervention effects attenuate in real-world settings
- Workforce requirements for intensive interventions
- Technology infrastructure needs
- Payment models

**Health Equity Considerations:**

*Structural Determinants:*
- Pharmacy deserts in underserved communities
- Uninsured/underinsured populations
- Immigration status and medication access
- Linguistic and cultural barriers
- Historical medical mistrust

*Addressing Disparities:*
- Community pharmacy engagement
- Community health worker integration
- Culturally tailored interventions
- Policy advocacy for drug pricing reform
- Health system resource allocation

**Future Directions:**

*Technology Integration:*
- AI-driven personalized reminders
- IoT-enabled medication tracking
- Integration with clinical decision support
- Predictive analytics for intervention targeting
- Virtual assistants for medication support

*Payment Reform:*
- Value-based contracts with adherence components
- Outcomes-based pharmaceutical pricing
- Expanded pharmacist services reimbursement
- Integration of adherence into quality measures

*Policy Innovations:*
- Drug pricing legislation
- Importation and reference pricing
- Expanded patient assistance programs
- Universal medication coverage models

**Clinical Implementation Excellence:**

*Best Practice Components:*
1. Systematic adherence assessment at each visit
2. Non-judgmental communication approach
3. Barrier-specific intervention selection
4. Simplification as first-line strategy
5. Team-based adherence support
6. Technology augmentation where appropriate
7. Social determinants screening and response
8. Continuous quality improvement

*Assessment Questions:*
- "Many people have trouble taking all their medications. How often do you miss doses?"
- "What makes it hard to take your medications?"
- "Are you able to afford all your medications?"
- "Are you having any problems or side effects from your medications?"

*Team Roles:*
| Team Member | Adherence Role |
|-------------|----------------|
| Physician/APP | Simplify regimen, address concerns |
| Pharmacist | MTM, counseling, synchronization |
| Nurse/Care Coordinator | Assessment, education, follow-up |
| Community Health Worker | Social support, navigation |
| Behavioral Health | Depression, motivation |`,
      keyTerms: [
        { term: 'concordance', definition: 'Partnership between patient and provider in medication decisions, respecting patient preferences and values' },
        { term: 'behavioral economics', definition: 'Application of psychological principles to understand economic decision-making, including health behaviors' },
        { term: 'medication synchronization', definition: 'Aligning refill dates for all medications to a single day each month' },
        { term: 'pharmacy desert', definition: 'Geographic area with limited access to pharmacy services' },
        { term: 'precision adherence', definition: 'Tailoring adherence interventions to individual patient phenotypes and barriers' },
      ],
      clinicalNotes: 'Behavioral economics interventions show short-term promise but sustainability remains uncertain. Address social determinants including medication cost proactively. Pharmacist-led interventions have strong evidence and should be leveraged. Digital health tools should complement, not replace, human interaction. Medication non-adherence discussions should be routine, non-judgmental, and solution-focused.',
    },
  },

  media: [
    {
      id: 'pill-organizer-guide',
      type: 'diagram',
      filename: 'pill-organizer-types.pdf',
      title: 'Guide to Pill Organizers',
      description: 'Overview of different pill organizer types and how to use them',
    },
    {
      id: 'medication-list-template',
      type: 'diagram',
      filename: 'my-medication-list.pdf',
      title: 'My Medication List Template',
      description: 'Printable template for tracking all medications',
    },
  ],

  citations: [
    {
      id: 'who-adherence',
      type: 'article',
      title: 'Adherence to Long-Term Therapies: Evidence for Action',
      source: 'World Health Organization',
    },
    {
      id: 'cochrane-adherence',
      type: 'article',
      title: 'Interventions for enhancing medication adherence',
      source: 'Cochrane Database of Systematic Reviews',
    },
  ],

  crossReferences: [
    { targetId: 'chronic-disease-symptom-monitoring', targetType: 'topic', relationship: 'related', label: 'Symptom Monitoring' },
    { targetId: 'chronic-disease-provider-communication', targetType: 'topic', relationship: 'related', label: 'Provider Communication' },
    { targetId: 'chronic-disease-care-team', targetType: 'topic', relationship: 'related', label: 'Working with Care Teams' },
  ],

  tags: {
    systems: ['general health'],
    topics: ['self-management', 'chronic disease', 'patient education', 'medications'],
    keywords: ['medication adherence', 'compliance', 'pill organizer', 'self-management'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
