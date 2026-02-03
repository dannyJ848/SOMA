/**
 * Advance Directives
 *
 * Planning for future healthcare decisions when you cannot speak for yourself.
 */

import { EducationalContent } from '../../types';

export const advanceDirectives: EducationalContent = {
  id: 'concept-advance-directives',
  type: 'concept',
  name: 'Advance Directives',
  alternateNames: ['Living Will', 'Healthcare Proxy', 'Advance Care Planning', 'POLST'],

  levels: {
    1: {
      level: 1,
      summary: 'An advance directive tells doctors what you want if you get so sick you cannot speak for yourself.',
      explanation: `**What Is an Advance Directive?**
An advance directive is like a plan you make now for your future healthcare. It tells doctors what you want if you are too sick to tell them yourself.

**Why Do You Need One?**
Sometimes people get very sick or hurt and cannot talk or make decisions. If this happens to you, doctors need to know:
- What treatments you would want
- What treatments you would not want
- Who should make decisions for you

**Two Main Parts:**

*Living Will:*
- Written instructions about what treatments you want or do not want
- Used when you cannot speak for yourself

*Healthcare Proxy (Power of Attorney):*
- A person you choose to make decisions for you
- They speak for you when you cannot

**What You Might Decide:**

| Question | Your Choice |
|----------|-------------|
| CPR (starting heart again) | Yes or No |
| Breathing machine | Yes or No |
| Feeding tube | Yes or No |
| Who decides for you | Name a person |

**Who Should Have One?**
Everyone! Even healthy people can have accidents or sudden illness.

**How to Make One:**
- Talk to your family about your wishes
- Fill out the forms (free from many places)
- Tell your doctor
- Give copies to people who need them

**Remember:**
- You can change your mind anytime
- Talk to people you trust about your wishes
- Your choices are respected`,
      keyTerms: [
        { term: 'advance directive', definition: 'A plan for your medical care if you cannot speak for yourself' },
        { term: 'living will', definition: 'Written instructions about what treatments you want' },
        { term: 'healthcare proxy', definition: 'A person you choose to make medical decisions for you' },
      ],
      analogies: [
        'An advance directive is like leaving instructions for a babysitter - you are telling them what to do when you are not there.',
        'Choosing a healthcare proxy is like choosing a backup driver - they take over when you cannot drive.',
      ],
      examples: [
        'A grandmother writes down that she does not want a breathing machine if she is very sick.',
        'A man chooses his sister to make medical decisions for him if he cannot.',
      ],
    },
    2: {
      level: 2,
      summary: 'Advance directives allow you to document your healthcare wishes and designate someone to make decisions if you become unable to do so.',
      explanation: `**Types of Advance Directives:**

*Living Will:*
- Written document with your treatment wishes
- Applies when you cannot make decisions
- Covers specific situations (terminal illness, permanent unconsciousness)
- Can specify treatments you want or refuse

*Healthcare Proxy/Durable Power of Attorney for Healthcare:*
- Names a person to make decisions for you
- Gives them authority when you cannot decide
- They should know your values and wishes
- Becomes active when you lack capacity

*POLST (Physician Orders for Life-Sustaining Treatment):*
- Medical orders, not just wishes
- For people with serious illness
- Signed by healthcare provider
- Transfers across settings
- More specific than living will

**What to Include:**

| Topic | Considerations |
|-------|----------------|
| CPR | Start heart if it stops |
| Ventilation | Breathing machine |
| Artificial nutrition | Feeding tube |
| Dialysis | Kidney machine |
| Comfort care | Pain management focus |
| Antibiotics | For infections |
| Hospitalization | Where to receive care |

**How to Create:**

*Step 1: Think About Your Values*
- What makes life meaningful to you?
- What would be worse than death?
- What matters most at end of life?

*Step 2: Have Conversations*
- Talk with family and loved ones
- Discuss with your doctor
- Share your values and specific wishes

*Step 3: Complete Documents*
- Get state-specific forms
- Fill out completely
- Sign and witness as required
- Some states require notarization

*Step 4: Share and Store*
- Give copies to your proxy
- Provide to your doctor
- Keep accessible copy
- Register in state registry if available

**Choosing a Healthcare Proxy:**

*Good Proxy Qualities:*
- Knows your values well
- Can make difficult decisions
- Available in emergency
- Willing to advocate for you
- Can handle stress

*Name an alternate in case your first choice is unavailable*

**Important Points:**
- Review and update periodically
- Update after major life events
- Verbal wishes may be honored in some situations
- Documents can be revoked anytime`,
      keyTerms: [
        { term: 'POLST', definition: 'Physician Orders for Life-Sustaining Treatment - medical orders for seriously ill patients' },
        { term: 'durable power of attorney', definition: 'Legal document giving someone authority to make decisions that remains valid if you become incapacitated' },
        { term: 'artificial nutrition', definition: 'Feeding through a tube rather than by mouth' },
        { term: 'comfort care', definition: 'Treatment focused on relieving suffering rather than curing disease' },
      ],
      analogies: [
        'Advance directives are like a GPS for your healthcare journey - they guide decisions when you cannot navigate yourself.',
      ],
    },
    3: {
      level: 3,
      summary: 'Advance care planning documents patient preferences and designates surrogates through legally recognized mechanisms that guide care when patients lack decision-making capacity.',
      explanation: `## Advance Care Planning Framework

**Legal Foundations:**

*Federal Law:*
- Patient Self-Determination Act (1990)
- Requires healthcare facilities to inform about advance directive rights
- Hospitals, nursing homes, home health, hospice

*State Variation:*
| Element | Varies By State |
|---------|-----------------|
| Form requirements | Different forms accepted |
| Witness requirements | Number, who qualifies |
| Notarization | Required or optional |
| Surrogate hierarchy | Default order if no proxy |
| POLST availability | Not all states |

**Document Types:**

*Living Will:*
- Instructional directive
- Specifies treatments in defined scenarios
- Common triggers: terminal illness, permanent unconsciousness
- May be narrow in application

*Healthcare Proxy:*
- Durable Power of Attorney for Healthcare
- Agent makes decisions
- Broader authority than living will
- Can respond to unforeseen situations

*POLST Paradigm:*
- Medical orders, immediately actionable
- Completed with healthcare provider
- For seriously ill patients
- More specific treatment guidance
- Travels with patient

**Decision-Making Hierarchy (when no proxy):**

Most states follow:
1. Court-appointed guardian
2. Spouse/domestic partner
3. Adult children
4. Parents
5. Adult siblings
6. Other relatives
7. Close friend (some states)

**Clinical Application:**

*Activation:*
- Two physicians confirm incapacity (typically)
- Proxy authority begins
- Living will provisions applied

*Interpretation Challenges:*
| Challenge | Approach |
|-----------|----------|
| Ambiguous language | Interpret based on values |
| Unforeseen scenario | Proxy judgment |
| Family disagreement | Ethics consultation |
| Document conflict | More recent usually prevails |

**Quality Advance Care Planning:**

*Elements:*
1. Values clarification
2. Prognosis understanding
3. Treatment option education
4. Goals of care articulation
5. Document completion
6. Communication with stakeholders
7. Periodic review

*Evidence-Based Interventions:*
- Respecting Choices program
- Five Wishes document
- Prepare for Your Care
- Conversation Project`,
      keyTerms: [
        { term: 'Patient Self-Determination Act', definition: 'Federal law requiring healthcare facilities to inform about advance directive rights' },
        { term: 'surrogate hierarchy', definition: 'Legal order of people authorized to make decisions when no proxy designated' },
        { term: 'goals of care', definition: 'Overall aims of medical treatment based on patient values and preferences' },
        { term: 'Respecting Choices', definition: 'Evidence-based advance care planning program' },
      ],
      clinicalNotes: 'Advance care planning is a process, not just document completion. Ongoing conversations about values and goals are more important than specific treatment choices.',
    },
    4: {
      level: 4,
      summary: 'Comprehensive advance care planning integrates values exploration, prognostic awareness, surrogate preparation, and documentation within a continuous communication process.',
      explanation: `## Advanced Advance Care Planning

**Conceptual Evolution:**

\`\`\`
Document-Focused (1990s)
         ↓
Conversation-Focused (2000s)
         ↓
Process-Focused (2010s)
         ↓
Communication-Centered (Current)
\`\`\`

**Evidence Base:**

*Research Findings:*
| Study | Finding |
|-------|---------|
| SUPPORT | Documents alone insufficient |
| Respecting Choices | Process improves outcomes |
| Systematic reviews | ACP increases documentation, may improve end-of-life care |

*Outcome Measures:*
- Document completion rates
- Concordance with wishes
- Surrogate understanding
- Healthcare utilization
- Patient/family satisfaction
- Caregiver bereavement

**Quality Framework:**

*High-Quality ACP Includes:*
1. Understanding current health status
2. Prognosis awareness
3. Values clarification
4. Treatment preference exploration
5. Surrogate identification and preparation
6. Documentation
7. Communication across settings
8. Periodic reassessment

**Surrogate Preparation:**

*Essential Elements:*
- Know patient values deeply
- Understand substituted judgment
- Recognize role is to represent patient, not self
- Prepared for emotional difficulty
- Know when to advocate

*PREPARE Framework:*
| Step | Content |
|------|---------|
| P | Prepare for decision-making |
| R | Recognize when surrogates needed |
| E | Explore patient preferences |
| P | Prepare surrogates |
| A | Articulate preferences |
| R | Record wishes |
| E | Evaluate and revise |

**System Implementation:**

*Healthcare System Elements:*
- EHR integration
- Retrieval at point of care
- Transfer across settings
- Quality metrics
- Staff training
- Patient engagement

*Challenges:*
| Challenge | Mitigation |
|-----------|------------|
| Document accessibility | Electronic registries |
| Staff time | Trained facilitators |
| Cultural variation | Culturally adapted approaches |
| Prognostic uncertainty | Values-based planning |

**Special Populations:**

*Dementia:*
- Early engagement while capacity exists
- Values history emphasis
- Proxy preparation critical
- Behavioral considerations

*Pediatric:*
- Family-centered
- Developmental considerations
- Shared decision-making
- Hope alongside planning

*Serious Mental Illness:*
- Psychiatric advance directives
- Capacity considerations
- Integration with treatment planning

**Medico-Legal Considerations:**

*Provider Obligations:*
- Honor valid directives
- Document if not honored with reasons
- Conscience clauses
- Transfer of care options

*Liability Protection:*
- Good faith adherence
- Reasonable interpretation
- Documentation of process`,
      keyTerms: [
        { term: 'substituted judgment', definition: 'Making decisions based on what the patient would have wanted' },
        { term: 'concordance', definition: 'Agreement between patient preferences and actual care' },
        { term: 'psychiatric advance directive', definition: 'Document specifying mental health treatment preferences' },
        { term: 'SUPPORT study', definition: 'Landmark study showing documents alone do not change care' },
      ],
      clinicalNotes: 'ACP quality depends more on conversations than documents. Surrogate preparation is often neglected but critical. System-level implementation requires sustained effort.',
    },
    5: {
      level: 5,
      summary: 'Optimal advance care planning integrates person-centered communication, health system infrastructure, cultural responsiveness, and quality improvement within an evolving understanding of autonomy and surrogate decision-making.',
      explanation: `## Comprehensive Advance Care Planning Science

**Theoretical Framework:**

*Autonomy Evolution:*
\`\`\`
Prospective Autonomy
(Prior self decides)
         ↓
Relational Autonomy
(Context-dependent)
         ↓
Narrative Identity
(Life story coherence)
         ↓
Communication-Centered
(Ongoing dialogue)
\`\`\`

**Research Frontiers:**

*Current Investigations:*
| Area | Questions |
|------|-----------|
| Outcomes | Does ACP improve care quality? |
| Mechanisms | How does ACP work? |
| Implementation | What makes ACP successful? |
| Populations | How to adapt for diverse groups? |

*Evidence Gaps:*
- Long-term outcome data
- Optimal timing and frequency
- Cultural adaptation effectiveness
- Technology impact

**Implementation Science:**

*Successful Programs:*
\`\`\`
Leadership Support
        ↓
Infrastructure (EHR, registries)
        ↓
Trained Facilitators
        ↓
Patient Engagement
        ↓
Quality Metrics
        ↓
Continuous Improvement
\`\`\`

*Spread Strategies:*
- Respecting Choices model
- Quality improvement collaboratives
- State-level initiatives
- Payer incentives

**Health Equity:**

*Disparities:*
- Completion rates vary by race/ethnicity
- Language access issues
- Cultural variation in autonomy concepts
- Trust barriers
- Access to care planning

*Equity Interventions:*
| Intervention | Approach |
|--------------|----------|
| Cultural adaptation | Community-engaged development |
| Language access | Translated materials, interpreters |
| Trust building | Community health workers |
| Access | Multiple entry points |

**Global Perspectives:**

*International Variation:*
| Region | Approach |
|--------|----------|
| US | Individual autonomy emphasis |
| Europe | Variable by country |
| Asia | Family-centered models |
| Latin America | Catholic influence |

*Universal Elements:*
- Respect for persons
- Communication emphasis
- Surrogate involvement
- Documentation value

**Technology and Innovation:**

*Current Applications:*
- Electronic registries
- Patient portals
- Video ACP
- Decision support tools
- Mobile applications

*Future Directions:*
- AI-assisted prognostication
- Natural language processing
- Interoperability across systems
- Real-time preference updates

**Policy Landscape:**

*Current:*
- Medicare ACP billing codes
- POLST legislation expansion
- Registry development
- Quality measures

*Emerging:*
- Portability requirements
- Default surrogate laws
- Notification requirements
- EHR mandates

**Surrogate Decision-Making Science:**

*Challenges:*
- Surrogates often do not know patient wishes
- Emotional burden significant
- Substituted judgment difficult
- Best interest default common

*Improvement Strategies:*
- Explicit surrogate preparation
- Values documentation
- Regular conversations
- Decision support tools

**Quality Metrics:**

*Process Measures:*
- Conversation documentation
- Surrogate identification
- Document completion
- Registry participation

*Outcome Measures:*
- Concordance with wishes
- Surrogate confidence
- Care intensity at end of life
- Patient/family satisfaction
- Bereavement outcomes`,
      keyTerms: [
        { term: 'prospective autonomy', definition: 'Autonomous choices made in advance for future scenarios' },
        { term: 'narrative identity', definition: 'Personal identity understood through life story coherence' },
        { term: 'care intensity', definition: 'Level of aggressive medical intervention, especially at end of life' },
        { term: 'implementation science', definition: 'Study of methods to promote adoption of evidence-based practices' },
      ],
      clinicalNotes: 'ACP represents a evolving field where evidence is still developing. Current best practices emphasize communication over documentation, surrogate preparation, and system-level implementation. Cultural adaptation and health equity remain significant challenges.',
    },
  },

  media: [],

  citations: [
    {
      id: 'nih-advance-directives',
      type: 'website',
      title: 'Advance Care Planning: Health Care Directives',
      source: 'National Institute on Aging',
      url: 'https://www.nia.nih.gov/health/advance-care-planning-health-care-directives',
    },
  ],

  crossReferences: [
    { targetId: 'concept-informed-consent', targetType: 'concept', relationship: 'related', label: 'Informed Consent' },
    { targetId: 'concept-right-to-refuse-treatment', targetType: 'concept', relationship: 'related', label: 'Right to Refuse Treatment' },
  ],

  tags: {
    systems: ['patient-safety'],
    topics: ['informed-consent', 'end-of-life-care', 'patient-rights'],
    clinicalRelevance: 'critical',
    keywords: ['advance directive', 'living will', 'healthcare proxy', 'POLST', 'end of life'],
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default advanceDirectives;
