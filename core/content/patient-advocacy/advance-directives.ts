/**
 * Advance Directives - Comprehensive Educational Content
 *
 * Covers advance directives including living wills, healthcare proxies,
 * and how to document healthcare wishes for future medical decisions.
 */

import { EducationalContent } from '../types';

export const advanceDirectives: EducationalContent = {
  id: 'concept-advance-directives',
  type: 'concept',
  name: 'Advance Directives',
  alternateNames: ['Living Will', 'Advance Healthcare Directive', 'Medical Directive'],

  levels: {
    1: {
      level: 1,
      summary: 'Advance directives are written plans that tell doctors what kind of care you want if you get very sick and can\'t speak for yourself.',
      explanation: `An advance directive is a special paper where grown-ups write down what kind of medical care they want if they ever get very sick and can't talk to the doctors themselves.

**Why Have an Advance Directive?**

- It tells doctors and family what you want
- It helps your family know your wishes
- Doctors can take care of you the way you want

**What's in an Advance Directive?**

- What treatments you want or don't want
- Who should make decisions for you if you can't
- Special wishes about your care

**When Is It Used?**

Advance directives are only used when someone is:
- Very, very sick
- Unable to talk or communicate
- Unable to make decisions themselves

**Who Makes Them?**

Adults (usually people 18 and older) make advance directives. They talk with their family and doctors about what's important to them.

Think of it like leaving instructions for how you want things done - just in case!`,
      keyTerms: [
        { term: 'advance directive', definition: 'A written plan about what medical care you want if you can\'t speak for yourself' },
        { term: 'living will', definition: 'A type of advance directive that says what treatments you do or don\'t want' },
        { term: 'healthcare proxy', definition: 'A person you choose to make medical decisions for you if you can\'t' },
      ],
      analogies: [
        'An advance directive is like leaving a note for a babysitter with instructions about what to do.',
        'It\'s like writing down your preferences for a substitute teacher before you\'re absent.',
      ],
      examples: [
        'Grandma wrote down that she wants to be comfortable and not have painful treatments if she gets very sick.',
        'Uncle Joe picked Aunt Mary to talk to doctors for him if he can\'t talk to them himself.',
      ],
    },
    2: {
      level: 2,
      summary: 'Advance directives are legal documents that allow adults to specify their healthcare wishes and designate decision-makers for times when they cannot communicate or make decisions themselves.',
      explanation: `## Understanding Advance Directives

### What Are Advance Directives?

Advance directives are legal documents that let you:
- State what medical treatments you want or don't want
- Name someone to make healthcare decisions for you
- Express your values and goals for medical care

### Types of Advance Directives

**Living Will:**
- Specifies treatments you want or don't want
- Applies to end-of-life situations
- Examples: CPR, ventilators, feeding tubes

**Healthcare Proxy (Healthcare Power of Attorney):**
- Names a person to make medical decisions for you
- This person speaks for you when you cannot
- Also called a "healthcare agent" or "surrogate"

**POLST/MOLST:**
- Physician Orders for Life-Sustaining Treatment
- Medical orders for seriously ill patients
- More specific than a living will

### Why They Matter

- Ensures your wishes are followed
- Reduces burden on family members
- Helps avoid family conflicts
- Guides doctors when you can't communicate

### Creating an Advance Directive

1. Think about your values and what matters to you
2. Talk with your family about your wishes
3. Discuss with your doctor
4. Complete the proper forms for your state
5. Share copies with your doctor, hospital, and family
6. Review and update periodically

### When They Apply

Advance directives are used when you:
- Are unconscious
- Have a terminal illness and cannot communicate
- Have severe dementia
- Are otherwise unable to make or communicate decisions

### Important Points

- You can change your advance directive at any time
- You need to be mentally competent when you create it
- Different states have different forms and requirements
- Having a conversation is as important as the document`,
      keyTerms: [
        { term: 'living will', definition: 'Document specifying which medical treatments you do or do not want' },
        { term: 'healthcare proxy', definition: 'Person designated to make healthcare decisions on your behalf' },
        { term: 'POLST', definition: 'Physician Orders for Life-Sustaining Treatment - medical orders based on patient wishes' },
        { term: 'terminal illness', definition: 'A disease that cannot be cured and will likely lead to death' },
        { term: 'life-sustaining treatment', definition: 'Medical treatments that keep someone alive, like ventilators or feeding tubes' },
      ],
      analogies: [
        'An advance directive is like a will for your healthcare - it tells people what you want when you can\'t tell them yourself.',
        'A healthcare proxy is like naming a co-pilot who can take the controls if you\'re unable to fly.',
      ],
    },
    3: {
      level: 3,
      summary: 'Advance directives encompass living wills, healthcare proxy designations, and POLST forms, governed by state-specific laws and ethical principles of autonomy, requiring proper execution and integration into clinical care.',
      explanation: `## Legal and Ethical Framework

### Types and Purposes

| Document | Function | When Used | Legal Requirements |
|----------|----------|-----------|-------------------|
| Living Will | Treatment preferences | Terminal/incapacitated | State-specific form |
| Healthcare Proxy | Decision-maker designation | When unable to decide | Notarization varies |
| POLST/MOLST | Medical orders | Serious illness | Physician signature |
| Advance Directive | Combined document | Either situation | State-specific |

### Ethical Foundations

**Respect for Autonomy:**
- Right to self-determination
- Extends decision-making authority to future incapacity
- Honors personal values and preferences

**Substituted Judgment:**
- Surrogate decides based on patient's known wishes
- Uses patient's values, not surrogate's preferences
- Distinct from best interest standard

### Legal Requirements

**Federal Law:**
- Patient Self-Determination Act (1990)
- Requires healthcare facilities to inform patients of rights
- Must ask about existing directives
- Document in medical record

**State Variations:**
- Form requirements differ by state
- Witness and notarization requirements
- Scope of proxy authority
- Out-of-state recognition

### POLST Paradigm

**Characteristics:**
- Medical order, not just directive
- Completed with healthcare provider
- For seriously ill patients
- Portable across settings
- Actionable by EMS

**Elements:**
- CPR preferences
- Medical intervention level
- Artificially administered nutrition
- Signature of patient/representative and provider

### Execution Requirements

**Capacity at Time of Signing:**
- Understanding of document's purpose
- Appreciation of consequences
- Reasoning ability
- Expression of choice

**Witness Requirements (vary by state):**
- Number of witnesses (usually 2)
- Disqualification of interested parties
- Healthcare provider restrictions

### Clinical Integration

**Documentation:**
- Medical record inclusion
- Advance directive alert in EHR
- Accessible to care team
- Updated with patient status changes

**Activation:**
- Determination of incapacity
- Verification of directive applicability
- Communication with healthcare proxy
- Ethics consultation when needed`,
      keyTerms: [
        { term: 'Patient Self-Determination Act', definition: 'Federal law requiring healthcare facilities to inform patients of advance directive rights' },
        { term: 'substituted judgment', definition: 'Decision-making standard using patient\'s own values and previously expressed wishes' },
        { term: 'capacity', definition: 'Ability to understand information, appreciate consequences, reason, and express a choice' },
        { term: 'POLST paradigm', definition: 'Program creating actionable medical orders from advance care planning conversations' },
      ],
      clinicalNotes: 'Document advance directive discussions. Verify directives are accessible in EHR. Conduct capacity assessments before activation. Engage ethics consultation for complex situations.',
    },
    4: {
      level: 4,
      summary: 'Advance directives require sophisticated understanding of state-specific legal requirements, capacity assessment, surrogate decision-making standards, and clinical implementation challenges to ensure patient wishes are honored while navigating complex ethical and practical considerations.',
      explanation: `## Legal Framework

### Statutory Variations

**Living Will Statutes:**
- Triggering conditions (terminal, persistent vegetative state, irreversible)
- Scope of treatments addressable
- Revocation procedures
- Provider obligations and immunities

**Healthcare Proxy Statutes:**
- Scope of authority
- Limitations (mental health, pregnancy)
- Default surrogate hierarchies
- Conflict resolution mechanisms

**Out-of-State Recognition:**
- Full faith and credit issues
- Varying state approaches
- Portable document initiatives

### Capacity Assessment

**Clinical Standards:**
| Element | Assessment | Documentation |
|---------|------------|---------------|
| Understanding | Explain condition/options | Patient's restatement |
| Appreciation | Apply to own situation | Personal implications |
| Reasoning | Weigh options | Logical process |
| Expression | Communicate choice | Clear statement |

**Special Considerations:**
- Decision-specific capacity
- Fluctuating capacity
- Mild cognitive impairment
- Cultural communication factors

### Surrogate Decision-Making

**Hierarchy of Standards:**
1. Explicit prior directive
2. Substituted judgment (known values)
3. Best interest (objective evaluation)

**Conflict Resolution:**
- Consensus-building approaches
- Ethics committee involvement
- Mediation services
- Legal guardianship (last resort)

### POLST Implementation

**Appropriate Populations:**
- Serious illness with 1-2 year prognosis
- Progressive frailty
- Advanced chronic illness
- Preference for comfort-focused care

**Quality Elements:**
- Conversation-based
- Consistent with goals of care
- Regularly reviewed
- Accessible across settings

### Documentation and Communication

**EHR Integration:**
- Discrete data fields
- Alert mechanisms
- Document imaging
- Care plan integration
- Interoperability considerations

**Care Transitions:**
- Handoff communication
- EMS access to orders
- Nursing facility documentation
- Hospital admission reconciliation

### Challenging Scenarios

**Pregnant Patients:**
- State law restrictions
- Fetal viability considerations
- Ethical complexity

**Dementia Progression:**
- Early-stage documentation
- Later-stage application
- Evolving preferences questions

**Surrogate Unavailability:**
- Emergency decisions
- Statutory surrogates
- Ethics committee authority`,
      keyTerms: [
        { term: 'decision-specific capacity', definition: 'Principle that capacity is evaluated relative to the specific decision at hand' },
        { term: 'best interest standard', definition: 'Decision-making framework weighing objective benefits and burdens when patient wishes unknown' },
        { term: 'statutory surrogate', definition: 'Person authorized by law to make healthcare decisions based on defined hierarchy' },
        { term: 'ethics committee', definition: 'Hospital committee providing consultation on difficult ethical decisions in patient care' },
      ],
      clinicalNotes: 'Assess capacity for each significant decision. Document surrogate identification and contact. Use ethics consultation for conflicts. Ensure POLST is accessible across settings.',
    },
    5: {
      level: 5,
      summary: 'Advance directives require integration of bioethics, legal expertise, clinical skills, and systems thinking to navigate complex scenarios involving capacity, surrogate conflicts, cultural considerations, and healthcare system implementation while honoring patient autonomy.',
      explanation: `## Advanced Practice Considerations

### Ethical Analysis Framework

**Principlist Approach:**
| Principle | Application | Tensions |
|-----------|-------------|----------|
| Autonomy | Honor expressed wishes | Capacity questions |
| Beneficence | Act in patient's interest | Define "interest" |
| Non-maleficence | Avoid harm | Treatment vs. non-treatment |
| Justice | Fair resource allocation | Access to planning |

**Advance Directive Limitations:**
- Cannot anticipate all scenarios
- Preferences may evolve
- Interpretation challenges
- Implementation gaps

### Research Evidence

**Outcomes Research:**
- Advance directive completion rates (~30% US adults)
- Association with goal-concordant care
- Impact on family distress
- Healthcare utilization effects

**Quality Improvement:**
- Systematic approaches increase completion
- Conversation quality matters more than documents
- Electronic prompts and tools
- Patient activation strategies

### Complex Clinical Scenarios

**Case Type: Conflicting Directives**
- Old document vs. recent statements
- Multiple documents from different states
- Proxy disagreement with written directive

**Case Type: Capacity Fluctuation**
- Delirious states
- Psychiatric conditions
- Medication effects
- Situational factors

**Case Type: Cultural Considerations**
- Family-centered decision-making
- Non-disclosure traditions
- Spiritual beliefs about end-of-life
- Language and interpreter needs

### System Implementation

**Program Development:**
- Staff training and competency
- Workflow integration
- Technology solutions
- Quality monitoring
- Regulatory compliance

**Metrics:**
- Documentation rates
- Conversation quality indicators
- Goal-concordant care measures
- Family satisfaction
- Clinician distress

### Policy and Advocacy

**Access and Equity:**
- Disparities in advance care planning
- Health literacy barriers
- Cultural adaptation of materials
- Community-based initiatives

**Reform Priorities:**
- Interstate portability
- Registry development
- Integration with healthcare reform
- Research funding

### Emerging Directions

**Technology:**
- Digital advance directive platforms
- Video advance directives
- AI-assisted interpretation
- Interoperable registries

**Practice Models:**
- Respecting Choices and similar programs
- Primary palliative care integration
- Community health worker roles
- Telehealth planning sessions

**Research Frontiers:**
- Preference stability studies
- Implementation science
- Equity interventions
- Outcome measurement refinement`,
      keyTerms: [
        { term: 'goal-concordant care', definition: 'Healthcare aligned with patient\'s informed preferences and goals' },
        { term: 'Respecting Choices', definition: 'Evidence-based advance care planning program developed at Gundersen Health System' },
        { term: 'video advance directive', definition: 'Recorded statement of patient preferences supplementing written documents' },
        { term: 'advance directive registry', definition: 'Database for storing and retrieving advance directive documents across healthcare settings' },
      ],
      clinicalNotes: `Implementation priorities:
1. Implement systematic advance care planning in primary care
2. Train clinicians in goals of care conversations
3. Ensure EHR captures and displays directives prominently
4. Develop POLST programs for seriously ill populations
5. Address health equity in advance care planning access
6. Use Respecting Choices or similar evidence-based approaches
7. Include advance care planning in quality metrics
8. Engage ethics consultation for complex cases`,
    },
  },

  media: [
    {
      id: 'advance-directive-types',
      type: 'diagram',
      filename: 'advance-directive-overview.svg',
      title: 'Types of Advance Directives',
      description: 'Visual overview of different advance directive documents and their purposes',
    },
  ],

  citations: [
    {
      id: 'nih-advance-directives',
      type: 'website',
      title: 'Advance Care Planning: Healthcare Directives',
      source: 'National Institute on Aging',
      url: 'https://www.nia.nih.gov/health/advance-care-planning-healthcare-directives',
      accessedDate: '2026-01-24',
    },
    {
      id: 'polst-org',
      type: 'website',
      title: 'POLST',
      source: 'National POLST',
      url: 'https://polst.org/',
      accessedDate: '2026-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'concept-healthcare-proxy', targetType: 'concept', relationship: 'related', label: 'Healthcare Proxy' },
    { targetId: 'concept-patient-bill-of-rights', targetType: 'concept', relationship: 'related', label: 'Patient Bill of Rights' },
    { targetId: 'concept-informed-consent', targetType: 'concept', relationship: 'related', label: 'Informed Consent' },
  ],

  tags: {
    systems: ['healthcare-system'],
    topics: ['patient-advocacy', 'end-of-life-care', 'legal-rights', 'medical-ethics'],
    keywords: ['advance directive', 'living will', 'healthcare proxy', 'POLST', 'end-of-life planning'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default advanceDirectives;
