import { EducationalContent } from '../../types';

export const capacityDecisionMakingContent: EducationalContent = {
  id: 'capacity-decision-making',
  type: 'concept',
  name: 'Capacity and Decision-Making',
  nameEs: 'Capacidad y Toma de Decisiones',
  alternateNames: ['Decision-Making Capacity', 'Mental Capacity', 'Competency'],
  levels: {
    1: {
      level: 1,
      summary: 'Decision-making capacity means you can understand information about your health and make choices. If someone cannot make decisions, a family member may help.',
      explanation: `## Understanding Decision-Making

Decision-making capacity means you can understand information about your health and make choices. If someone cannot make decisions, a family member may help.

### What is Capacity?

Having capacity means you can:
- Understand what the doctor tells you
- Think about your options
- Make a choice based on what matters to you
- Tell others your decision

### When Someone Needs Help

Sometimes people cannot make their own decisions because:
- They are very confused
- They have severe memory problems
- They are unconscious
- They have serious mental illness

### Who Can Help?

- Family members
- Someone chosen in advance (power of attorney)
- A court-appointed guardian
- Doctors in emergencies

### Planning Ahead

You can plan for the future:
- Choose someone to make decisions for you
- Write down your wishes
- Tell your family what you want

### Doctors Will Check

Doctors check if you can make decisions before asking for consent. They want to protect your rights.`,
      keyTerms: [
        { term: 'Capacity', definition: 'Ability to understand and make decisions' },
        { term: 'Power of attorney', definition: 'Legal document naming someone to make decisions' },
        { term: 'Guardian', definition: 'Person appointed by court to make decisions' },
        { term: 'Advance directive', definition: 'Document stating your healthcare wishes' }
      ],
      analogies: [
        'Capacity is like having the keys to start your car - you need them to drive'
      ],
      examples: [
        'An elderly person with dementia has their adult child make healthcare decisions',
        'Someone chooses their sister as power of attorney before surgery'
      ]
    },
    2: {
      level: 2,
      summary: 'Decision-making capacity is the ability to understand medical information and make informed choices. It is decision-specific and can change over time. When capacity is impaired, surrogate decision-makers step in following legal hierarchies.',
      explanation: `## Capacity Assessment Basics

Decision-making capacity is the ability to understand medical information and make informed choices. It is decision-specific and can change over time. When capacity is impaired, surrogate decision-makers step in following legal hierarchies.

### Elements of Capacity

**Four Key Abilities:**
1. **Understand**: Grasp the medical situation and options
2. **Appreciate**: Recognize how it applies to you personally
3. **Reason**: Weigh risks and benefits logically
4. **Express**: Communicate a choice clearly

### Decision-Specific Nature

Capacity is not all-or-nothing:
- Can vary by decision complexity
- May be present for some choices but not others
- Simpler decisions require less capacity
- Can fluctuate over time

### Assessing Capacity

**Clinical Assessment:**
- Conversation about the decision
- Cognitive screening if needed
- Observation of reasoning
- Documentation of findings

**Not the Same as:**
- Intelligence
- Education level
- Making "good" decisions
- Agreeing with doctor

### When Capacity is Questionable

**Temporary Impairment:**
- Delirium (confusion from illness)
- Medication effects
- Severe pain
- Emotional crisis
- Wait if possible for improvement

**Chronic Impairment:**
- Dementia
- Developmental disability
- Severe mental illness
- Brain injury

### Surrogate Decision-Makers

**Hierarchy (varies by state):**
1. Court-appointed guardian
2. Healthcare power of attorney
3. Spouse or domestic partner
4. Adult children
5. Parents
6. Adult siblings

**Decision Standard:**
- Substituted judgment (what patient would want)
- Best interest (if wishes unknown)`,
      keyTerms: [
        { term: 'Substituted judgment', definition: 'Deciding based on what patient would want' },
        { term: 'Best interest', definition: 'Choosing what seems best for the patient' },
        { term: 'Delirium', definition: 'Sudden confusion, often reversible' },
        { term: 'Surrogate', definition: 'Person making decisions for another' }
      ],
      analogies: [
        'Capacity is like a dimmer switch that can be bright for simple decisions but dim for complex ones'
      ],
      examples: [
        'A patient can choose what to eat but cannot understand surgery risks',
        'Confusion from infection clears after treatment, restoring decision-making ability'
      ]
    },
    3: {
      level: 3,
      summary: 'Capacity assessment requires structured evaluation of understanding, appreciation, reasoning, and choice expression. Various tools exist for formal assessment, and determination of incapacity has significant legal and ethical implications requiring careful documentation.',
      explanation: `## Clinical Assessment of Capacity

Capacity assessment requires structured evaluation of understanding, appreciation, reasoning, and choice expression. Various tools exist for formal assessment, and determination of incapacity has significant legal and ethical implications requiring careful documentation.

### Structured Assessment

**MacCAT-T (MacArthur Competency Assessment Tool-Treatment):**
- Understanding (6 items)
- Appreciation (4 items)
- Reasoning (4 items)
- Expressing choice (1 item)
- Takes 15-20 minutes

**Aid to Capacity Evaluation (ACE):**
- Seven questions
- Focuses on specific decision
- Clinical interview format

**Mini-Mental State Exam (MMSE):**
- Screening tool, not capacity assessment
- Scores below 19 suggest need for formal evaluation
- Does not substitute for decision-specific assessment

### Understanding Component

**Assessment:**
- Can patient paraphrase information?
- Do they grasp key facts?
- Can they explain in their own words?

**Barriers:**
- Language
- Hearing impairment
- Cognitive deficits
- Emotional distress

### Appreciation Component

**Assessment:**
- Does patient recognize they have the condition?
- Do they believe treatment could help them?
- Can they apply information to self?

**Impaired Appreciation:**
- Anosognosia (unawareness of illness)
- Delusions affecting judgment
- Denial as pathological defense

### Reasoning Component

**Assessment:**
- Can patient compare options?
- Do they use consequences in thinking?
- Is the process logical?
- Can they articulate why they chose?

**Impaired Reasoning:**
- Concrete thinking
- Impulsive decisions
- Cannot weigh risks/benefits
- Distracted by irrelevant factors

### Documentation Requirements

**Must Include:**
- Specific decision being assessed
- Findings for each capacity element
- Basis for conclusion
- Surrogate identified if lacking capacity
- Urgency of decision

**Legal Protection:**
- Clear documentation protects provider
- Shows due process followed
- Demonstrates respect for autonomy`,
      keyTerms: [
        { term: 'MacCAT-T', definition: 'Structured capacity assessment tool' },
        { term: 'Anosognosia', definition: 'Lack of awareness of one\'s own condition' },
        { term: 'Due process', definition: 'Fair procedure following established rules' },
        { term: 'Advance directive', definition: 'Document expressing healthcare wishes' }
      ]
    },
    4: {
      level: 4,
      summary: 'Capacity assessment in clinical practice requires balancing respect for autonomy with protection from harm. Common challenging scenarios include fluctuating capacity, executive dysfunction, depression, and the influence of family dynamics on decision-making.',
      explanation: `## Complex Capacity Scenarios

Capacity assessment in clinical practice requires balancing respect for autonomy with protection from harm. Common challenging scenarios include fluctuating capacity, executive dysfunction, depression, and the influence of family dynamics on decision-making.

### Fluctuating Capacity

**Causes:**
- Delirium (waxing and waning)
- Medication timing
- Fatigue patterns
- Circadian variations
- Pain levels

**Approach:**
- Assess at optimal times
- Multiple assessments
- Simple decisions when impaired
- Urgent decisions may require surrogate

### Executive Dysfunction

**Characteristics:**
- Preserved understanding
- Impaired planning and organization
- Poor insight
- Socially inappropriate choices
- Preserved verbal skills mask deficits

**Frontal Lobe Conditions:**
- Traumatic brain injury
- Frontotemporal dementia
- Stroke
- Brain tumors

**Assessment Challenges:**
- May appear capable in conversation
- Real-world functioning impaired
- Need functional assessment
- Collateral information essential

### Depression and Capacity

**Impact on Decision-Making:**
- Hopelessness colors perception
- Undervaluing future benefits
- Passive acceptance of recommendations
- Suicidal ideation affecting choices

**Assessment:**
- Is depression causing incapacity?
- Would treatment restore capacity?
- Urgency of decision
- Risk of delaying

**Treatment First Approach:**
- Often appropriate if not urgent
- Antidepressants or ECT
- Reassess after improvement
- Surrogate if immediate need

### Undue Influence

**Family Dynamics:**
- Financial motivations
- Caregiver burden
- Estranged relationships
- Cultural expectations

**Signs of Undue Influence:**
- Patient defers completely to family
- Decision inconsistent with values
- Family answers for patient
- Patient looks to family before answering

**Protective Measures:**
- Interview patient alone
- Assess understanding privately
- Explore patient\'s own values
- Ethics consultation if needed

### Refusing Lifesaving Treatment

**Higher Scrutiny Required:**
- Ensure not suicidal intent
- Verify understanding of consequences
- Check for reversible causes
- Multiple assessments

**Different from Suicide:**
- Natural disease process
- Refusing intervention
- Not actively causing death
- Accepting natural outcome`,
      keyTerms: [
        { term: 'Executive function', definition: 'Cognitive processes for planning and decision-making' },
        { term: 'Undue influence', definition: 'Pressure that overcomes free will' },
        { term: 'Collateral information', definition: 'Information from family or records' },
        { term: 'Frontotemporal dementia', definition: 'Dementia affecting frontal and temporal lobes' }
      ],
      clinicalNotes: 'Executive dysfunction can be missed in standard capacity assessment - ask about real-world functioning. Depression may impair capacity but often improves with treatment; consider delaying non-urgent decisions. Always interview patient alone to screen for undue influence. Document specific findings, not just "patient has capacity."'
    },
    5: {
      level: 5,
      summary: 'Capacity determination intersects with legal competency proceedings, involuntary treatment laws, and end-of-life decision-making. Advanced directives, supported decision-making models, and evolving concepts of legal capacity require nuanced understanding of autonomy and protection.',
      explanation: `## Advanced Topics in Capacity

Capacity determination intersects with legal competency proceedings, involuntary treatment laws, and end-of-life decision-making. Advanced directives, supported decision-making models, and evolving concepts of legal capacity require nuanced understanding of autonomy and protection.

### Legal Competency vs Clinical Capacity

**Clinical Capacity:**
- Decision-specific
- Determined by clinicians
- Can change
- Time-limited

**Legal Competency:**
- Global determination
- Court decision
- Presumed stable
- Long-lasting effect

**Relationship:**
- Clinical capacity assessment informs courts
- Courts may override clinical findings
- Guardianship can be limited or plenary
- Restoring competency when possible

### Supported Decision-Making

**Alternative to Guardianship:**
- Person retains legal capacity
- Uses supporters for help
- Formal agreements
- Growing legal recognition

**Implementation:**
- Identify trusted supporters
- Define areas of support
- Document preferences
- Review and revise

**Benefits:**
- Preserves autonomy
- Less restrictive
- Promotes self-determination
- UN Convention on Rights of Persons with Disabilities

### Involuntary Treatment

**Mental Health:**
- Danger to self or others
- Gravely disabled
- Due process protections
- Least restrictive alternative

**Medical Treatment:**
- Rare circumstances
- Life-threatening emergencies
- Substituted consent standards
- State-specific laws

**Ethical Tension:**
- Autonomy vs beneficence
- Recovery-oriented care
- Trauma-informed approaches
- Historical abuses

### Advance Care Planning

**Types of Directives:**
- Living will
- Healthcare power of attorney
- POLST/MOLST forms
- Values statements

**Limitations:**
- Cannot anticipate all scenarios
- Interpretation challenges
- Surrogate may know wishes better
- Need for ongoing conversation

**Physician Orders for Life-Sustaining Treatment:**
- Medical orders
- Portable across settings
- Specific interventions
- Requires capacity or surrogate

### Neurodiversity and Capacity

**Autism Spectrum:**
- May need communication accommodations
- Different decision-making process
- Preserved capacity with support
- Sensory considerations

**Intellectual Disability:**
- Varying levels of capacity
- Supported decision-making
- Graduated autonomy
- Rights-based approach

### Research and Innovation

**Decision Aids for Capacity:**
- Simplified information
- Visual supports
- Extended time
- Reassessment tools

**Technology:**
- Cognitive aids
- Communication devices
- Assessment apps
- Remote evaluation

**Policy Directions:**
- UN CRPD implementation
- Reducing guardianship
- Expanding supported decision-making
- Person-centered planning`,
      keyTerms: [
        { term: 'Supported decision-making', definition: 'Using helpers while retaining legal capacity' },
        { term: 'Plenary guardianship', definition: 'Guardian controls all decisions' },
        { term: 'POLST', definition: 'Physician Orders for Life-Sustaining Treatment' },
        { term: 'Neurodiversity', definition: 'Variations in brain function as normal differences' }
      ],
      clinicalNotes: 'Supported decision-making increasingly recognized as alternative to guardianship. Legal competency requires court involvement - clinicians assess clinical capacity. POLST forms are medical orders, not just preferences. Neurodiversity movement challenges traditional capacity assumptions - accommodations may enable autonomous decision-making.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['patient-safety', 'informed-consent'],
    keywords: ['capacity', 'decision-making', 'competency', 'surrogate', 'guardianship']
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
