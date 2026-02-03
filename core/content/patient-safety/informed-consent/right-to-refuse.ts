import { EducationalContent } from '../../types';

export const rightToRefuseContent: EducationalContent = {
  id: 'right-to-refuse',
  type: 'concept',
  name: 'Right to Refuse Treatment',
  nameEs: 'Derecho a Rechazar Tratamiento',
  alternateNames: ['Treatment Refusal', 'Refusal of Care', 'Declining Treatment'],
  levels: {
    1: {
      level: 1,
      summary: 'You have the right to say no to medical treatment, even if doctors recommend it. This is part of making your own healthcare choices.',
      explanation: `## Your Right to Say No

You have the right to say no to medical treatment, even if doctors recommend it. This is part of making your own healthcare choices.

### You Can Refuse Treatment

- It is your body and your choice
- Doctors must respect your decision
- You do not have to explain why
- You can change your mind later

### What Happens If You Refuse

- Doctors will explain what might happen
- They may ask you to sign a form
- They will still provide other care
- You can ask questions anytime

### Getting Information First

Before refusing, you should understand:
- Why the treatment is recommended
- What could happen without it
- Other options available
- How urgent the situation is

### When It Is Complicated

Sometimes refusing treatment affects others:
- Infectious diseases that could spread
- When caring for children
- Mental health emergencies

### Your Wishes Matter

Even in serious situations, your wishes are important. Doctors will work with you to find the best approach.`,
      keyTerms: [
        { term: 'Right to refuse', definition: 'Your choice to decline medical treatment' },
        { term: 'Against medical advice', definition: 'Leaving or refusing care doctors recommend' },
        { term: 'Informed refusal', definition: 'Saying no after understanding the risks' }
      ],
      analogies: [
        'Refusing treatment is like saying no to a recommendation - it is your choice'
      ],
      examples: [
        'A patient chooses not to have surgery and tries physical therapy instead',
        'Someone declines a blood transfusion for religious reasons'
      ]
    },
    2: {
      level: 2,
      summary: 'The right to refuse treatment is a fundamental patient right protected by law. Patients may refuse for any reason including personal values, religious beliefs, or concerns about side effects, but should understand the consequences of refusal.',
      explanation: `## Understanding Treatment Refusal

The right to refuse treatment is a fundamental patient right protected by law. Patients may refuse for any reason including personal values, religious beliefs, or concerns about side effects, but should understand the consequences of refusal.

### Legal Foundation

**Constitutional Rights:**
- Bodily integrity
- Privacy rights
- Liberty interests
- Religious freedom

**Common Law:**
- Right to be free from unwanted touching
- Battery protection
- Informed consent requirements

### Reasons for Refusal

**Valid Reasons Include:**
- Religious beliefs (Jehovah\'s Witnesses and blood)
- Personal values and preferences
- Concerns about side effects
- Quality of life considerations
- Financial concerns
- Distrust of medical system

**Cannot Refuse For:**
- Discriminatory reasons (race, etc.)
- When court-ordered (some mental health)
- Public health emergencies (rare)

### Informed Refusal Process

**Provider Responsibilities:**
- Explain consequences of refusal
- Document discussion
- Offer alternatives
- Ensure decision is voluntary
- Continue other appropriate care

**Patient Acknowledgment:**
- Understand risks of refusal
- Know symptoms to watch for
- Know when to seek help
- Have follow-up plan

### Against Medical Advice (AMA)

**Leaving Hospital AMA:**
- Patient chooses to leave despite recommendation
- Usually requires signed form
- Does not absolve hospital of all responsibility
- May affect insurance coverage

**Documentation:**
- Capacity assessment
- Risks explained
- Offer to continue care
- Follow-up instructions given

### Limits on Refusal

**Public Health:**
- Quarantine for contagious disease
- Court-ordered treatment (TB, etc.)
- Rare circumstances

**Third-Party Harm:**
- Pregnancy (varies by state)
- Child endangerment
- Dependent care obligations`,
      keyTerms: [
        { term: 'Bodily integrity', definition: 'Right to control what happens to your body' },
        { term: 'Against medical advice', definition: 'Leaving care despite provider recommendation' },
        { term: 'Informed refusal', definition: 'Declining after understanding consequences' },
        { term: 'Jehovah\'s Witness', definition: 'Religious group that refuses blood transfusions' }
      ],
      analogies: [
        'Refusing treatment is your right, like choosing not to buy something a salesperson recommends'
      ],
      examples: [
        'A cancer patient chooses palliative care instead of aggressive chemotherapy',
        'A patient with a broken leg leaves AMA because of family obligations at home'
      ]
    },
    3: {
      level: 3,
      summary: 'Treatment refusal requires careful assessment of decision-making capacity, understanding of consequences, and documentation. Providers must balance respect for autonomy with beneficence, particularly when refusal may lead to serious harm or death.',
      explanation: `## Clinical Management of Refusal

Treatment refusal requires careful assessment of decision-making capacity, understanding of consequences, and documentation. Providers must balance respect for autonomy with beneficence, particularly when refusal may lead to serious harm or death.

### Capacity Assessment for Refusal

**Higher Standard for Refusing Life-Sustaining Treatment:**
- Must clearly understand consequences
- Appreciate finality of decision
- Reasoning not distorted by mental illness
- Consistent with values and prior statements

**Red Flags:**
- Suicidal intent
- Reversible cause (delirium, depression)
- Lack of understanding
- Undue influence from others

### Therapeutic Privilege Exception

**Rarely Invoked:**
- Withholding information believed harmful
- May override informed consent
- Ethically controversial
- Legal risk if challenged

**Modern Approach:**
- Honest disclosure preferred
- Support patient through bad news
- Better long-term outcomes
- Trust preservation

### Negotiating Refusals

**Understand Reasons:**
- Explore patient concerns
- Address misconceptions
- Find acceptable alternatives
- Build trust

**Compromise Options:**
- Partial treatment
- Trial period
- Delayed decision
- Different approach

**When to Accept:**
- Patient has capacity
- Consequences understood
- Decision is voluntary
- Reasonable basis for refusal

### Religious and Cultural Refusals

**Jehovah\'s Witnesses:**
- Refuse blood transfusions
- Accept bloodless surgery techniques
- Organized advance directives
- Hospital liaison committees

**Christian Scientists:**
- Prefer prayer-based healing
- May refuse most medical care
- Varying individual practice
- Legal exemptions in some states

**Other Faiths:**
- Islam - certain medications during Ramadan
- Hinduism - cows sacred, some medications
- Cultural beliefs about body integrity

### Provider Conscience

**Right to Refuse Providing Care:**
- Based on moral/religious objections
- Must refer patient to willing provider
- Emergency care cannot be refused
- State laws vary on protections

**Accommodation Requirements:**
- Notify employer in advance
- Refer to alternative provider
- Cannot abandon patient
- Documentation needed`,
      keyTerms: [
        { term: 'Therapeutic privilege', definition: 'Withholding information believed harmful' },
        { term: 'Life-sustaining treatment', definition: 'Medical care that keeps a person alive' },
        { term: 'Conscientious objection', definition: 'Refusing to provide care based on beliefs' },
        { term: 'Beneficence', definition: 'Acting in patient best interest' }
      ]
    },
    4: {
      level: 4,
      summary: 'Life-sustaining treatment refusal raises complex ethical issues requiring careful evaluation of patient understanding, assessment for depression or cognitive impairment, and attention to family dynamics. Emergency situations and minor patients present additional challenges.',
      explanation: `## Complex Refusal Scenarios

Life-sustaining treatment refusal raises complex ethical issues requiring careful evaluation of patient understanding, assessment for depression or cognitive impairment, and attention to family dynamics. Emergency situations and minor patients present additional challenges.

### Life-Sustaining Treatment Refusal

**Assessment Requirements:**
- Multiple capacity evaluations
- Psychiatric consultation if indicated
- Exploration of underlying reasons
- Consistency with prior values
- Reversible causes ruled out

**Depression Evaluation:**
- Hopelessness vs rational decision
- Treatable depression present?
- Would decision change with treatment?
- Time-limited trial of treatment

**Documentation Needs:**
- Detailed capacity assessment
- Specific risks explained
- Alternatives offered
- Family involvement noted
- Ethics consultation if obtained

### Emergency Situations

**Presumed Consent:**
- Unconscious patient
- Life-threatening emergency
- No surrogate available
- Reasonable person would consent

**Limitations:**
- Known advance directive
- Prior clear refusal documented
- Religious objection known
- Surrogate available

**Good Samaritan:**
- Implied consent for emergency care
- Cannot refuse if unconscious
- Emergency exception to consent

### Pediatric Refusals

**Parental Authority:**
- Parents generally decide for children
- Not absolute
- Best interest standard applies
- State can override if neglect

**Mature Minor Exception:**
- Some states recognize
- Age and capacity dependent
- Usually for specific situations
- Contraception, mental health, substance treatment

**Refusals Jeopardizing Child:**
- Court-ordered treatment
- Temporary custody
- Life-threatening situations
- Religious exemptions limited

### Pregnancy and Refusal

**Legal Complexity:**
- Maternal rights vs fetal rights
- Varies significantly by state
- Supreme Court precedent limited
- Evolving legal landscape

**Ethical Considerations:**
- Autonomy of pregnant person
- Potential fetal harm
- Forced cesarean sections
- Substance use during pregnancy

**Approach:**
- Presume capacity
- Negotiate if possible
- Legal consultation
- Ethics committee involvement

### Psychiatric Holds

**Involuntary Treatment:**
- Danger to self
- Danger to others
- Gravely disabled
- Due process protections

**Medication Refusal:**
- Can be overridden on hold
- Must follow legal procedures
- Capacity often impaired
- Right to appeal`,
      keyTerms: [
        { term: 'Presumed consent', definition: 'Assumed agreement in emergencies' },
        { term: 'Mature minor', definition: 'Adolescent with capacity to make some decisions' },
        { term: 'Gravely disabled', definition: 'Unable to provide basic needs due to mental illness' },
        { term: '5150 hold', definition: '72-hour psychiatric hold (California term)' }
      ],
      clinicalNotes: 'Refusing life-sustaining treatment requires thorough capacity assessment - depression must be ruled out. Emergency presumption of consent does not apply if advance directive or known refusal exists. Pregnancy creates complex legal situation - consult legal counsel before overriding maternal refusal. Parental refusals endangering children may require CPS involvement or court order.'
    },
    5: {
      level: 5,
      summary: 'Treatment refusal at end of life intersects with physician-assisted death debates, futility disputes, and resource allocation. Evolving legal standards, cultural competency, and structured approaches to conflict resolution guide clinical practice in this ethically complex domain.',
      explanation: `## Advanced Refusal Issues

Treatment refusal at end of life intersects with physician-assisted death debates, futility disputes, and resource allocation. Evolving legal standards, cultural competency, and structured approaches to conflict resolution guide clinical practice in this ethically complex domain.

### Medical Futility

**Definition Challenges:**
- Quantitative: very low probability of success
- Qualitative: outcome not worth pursuing
- Physiologic: cannot achieve intended effect
- No universal agreement

**Provider-Initiated Refusal:**
- Unilateral DNR orders (controversial)
- Ethics consultation recommended
- Legal risk varies by state
- Communication essential

**Dispute Resolution:**
- Second opinions
- Ethics committee consultation
- Transfer to another provider
- Court involvement (rare)

### Physician-Assisted Death

**US Legal Status:**
- Oregon Death with Dignity Act (1997)
- Washington, Vermont, California, Colorado, etc.
- Medical aid in dying (MAID)
- Strict eligibility requirements

**Requirements (typical):**
- Terminal illness (6 months or less)
- Adult with capacity
- Self-administration only
- Two-provider confirmation
- Waiting periods

**Distinctions:**
- Not euthanasia (patient self-administers)
- Not suicide (underlying disease cause)
- Voluntary stopping of eating/drinking alternative
- Palliative sedation different

### Advance Directive Refusals

**Living Will Limitations:**
- Cannot anticipate all scenarios
- Language may be vague
- Surrogate may interpret differently
- Provider interpretation varies

**POLST Paradigm:**
- Medical orders following conversation
- Actionable across settings
- Specific interventions addressed
- Requires ongoing review

**Out-of-Hospital DNR:**
- Portable orders
- EMT/hospital recognition
- Standardized forms
- Bracelet or paperwork

### Cultural and Religious Diversity

**Collectivist Cultures:**
- Family decision-making
- Disclosure preferences vary
- Autonomy understood differently
- Negotiate approach

**Hmong Culture:**
- Spiritual causes of illness
- Surgery risks soul
- Specific preferences
- Shaman involvement

**Orthodox Judaism:**
- Sabbath observance affecting care
- End-of-life distinctions
- Pikuach nefesh (saving life)
- Rabbi consultation

### Conflict Resolution

** mediation Approaches:**
- Identify underlying interests
- Explore misconceptions
- Find creative solutions
- Preserve relationships

**Ethics Consultation:**
- Structured process
- Multiple perspectives
- Recommendations not binding
- Documentation support

**Legal Pathways:****
- Court-appointed guardian
- Injunction for treatment
- Declaratory judgment
- Last resort option`,
      keyTerms: [
        { term: 'Medical futility', definition: 'Treatment with no reasonable chance of success' },
        { term: 'Medical aid in dying', definition: 'Legally authorized prescription of lethal medication' },
        { term: 'POLST', definition: 'Portable medical orders for life-sustaining treatment' },
        { term: 'Palliative sedation', definition: 'Sedation to relieve refractory suffering' }
      ],
      clinicalNotes: 'Futility disputes require ethics consultation and careful documentation. MAID laws vary significantly by jurisdiction - know local requirements. Cultural humility essential when treatment refusal stems from different values. POLST forms are medical orders and should be honored but can be reviewed if circumstances change.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['patient-safety', 'informed-consent'],
    keywords: ['right to refuse', 'treatment refusal', 'autonomy', 'against medical advice', 'informed refusal']
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
