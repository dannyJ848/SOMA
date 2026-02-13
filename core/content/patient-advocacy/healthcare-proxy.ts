/**
 * Healthcare Proxy - Comprehensive Educational Content
 *
 * Covers healthcare proxies, how to designate one, their responsibilities,
 * and how they work with advance directives.
 */

import { EducationalContent } from '../types';

export const healthcareProxy: EducationalContent = {
  id: 'concept-healthcare-proxy',
  type: 'concept',
  name: 'Healthcare Proxy',
  alternateNames: ['Healthcare Agent', 'Medical Power of Attorney', 'Healthcare Surrogate', 'Healthcare Representative'],

  levels: {
    1: {
      level: 1,
      summary: 'A healthcare proxy is a person you choose to make medical decisions for you if you become too sick to make them yourself.',
      explanation: `A healthcare proxy is a trusted person who can talk to doctors and make medical decisions for you if you ever become too sick to talk or decide for yourself.

**Who Can Be a Healthcare Proxy?**

- A family member (like a parent, spouse, or adult child)
- A close friend you trust
- Anyone you believe will follow your wishes

**What Does a Healthcare Proxy Do?**

- Talks to doctors for you
- Makes decisions about your care
- Tries to do what you would want

**Why Is This Important?**

Sometimes people get very sick and can't tell doctors what they want. Having a healthcare proxy means someone you trust can speak for you.

**When Does the Proxy Make Decisions?**

Only when you can't make decisions yourself, like if you:
- Are unconscious (deeply asleep and can't wake up)
- Are too confused to understand medical information
- Cannot communicate in any way

When you can speak for yourself, YOU make your own decisions. The proxy is just there in case you need them.`,
      keyTerms: [
        { term: 'healthcare proxy', definition: 'A person you choose to make medical decisions for you when you cannot' },
        { term: 'unconscious', definition: 'A deep sleep where you cannot wake up or respond' },
        { term: 'medical decisions', definition: 'Choices about what treatments and care you receive' },
      ],
      analogies: [
        'A healthcare proxy is like a substitute player who goes in the game when you can\'t play.',
        'It\'s like having a backup driver who knows where you want to go if you can\'t drive anymore.',
      ],
      examples: [
        'If Grandpa is in the hospital and too sick to talk, Grandma (his healthcare proxy) talks to the doctors for him.',
        'Mom and Dad might pick each other as healthcare proxies to make decisions if one of them gets very sick.',
      ],
    },
    2: {
      level: 2,
      summary: 'A healthcare proxy is a legally designated person authorized to make medical decisions on your behalf when you are unable to do so, serving as your voice in healthcare settings.',
      explanation: `## Understanding Healthcare Proxies

### What Is a Healthcare Proxy?

A healthcare proxy (also called healthcare agent or medical power of attorney) is a person you legally designate to make healthcare decisions for you if you become incapacitated - meaning you cannot make or communicate decisions yourself.

### Choosing Your Proxy

**Important Qualities:**
- Someone you trust completely
- Willing to speak up for you, even under pressure
- Available when needed
- Understands your values and wishes
- Able to make difficult decisions

**Who to Consider:**
- Spouse or partner
- Adult child
- Sibling
- Close friend
- Other trusted person

**Who NOT to Choose:**
- Your doctor (conflict of interest)
- Someone who lives far away (may be hard to reach)
- Someone who cannot handle stressful situations
- Someone who strongly disagrees with your wishes

### How to Designate a Proxy

1. Choose your proxy and discuss it with them
2. Complete your state's healthcare proxy form
3. Sign the form (witnesses/notarization as required)
4. Give copies to your proxy, doctor, and family
5. Keep the original in a safe but accessible place

### Proxy Responsibilities

**What a proxy can decide:**
- Whether to accept or refuse treatments
- Which doctors and hospitals to use
- Access to medical records
- End-of-life care decisions

**What guides their decisions:**
- Your stated wishes (best guide)
- Your values and beliefs
- What you would want (substituted judgment)
- Your best interests (if wishes unknown)

### When the Proxy Acts

Your proxy only makes decisions when a doctor determines you cannot:
- Understand medical information
- Appreciate the consequences
- Make rational decisions
- Communicate your choices

### Important Points

- You can change or cancel your proxy designation anytime
- Discuss your wishes thoroughly with your proxy
- Update your proxy document if circumstances change
- Your proxy should know where documents are kept`,
      keyTerms: [
        { term: 'incapacitated', definition: 'Unable to make or communicate decisions due to illness or injury' },
        { term: 'medical power of attorney', definition: 'Legal document naming someone to make healthcare decisions for you' },
        { term: 'substituted judgment', definition: 'Making decisions based on what the patient would have wanted' },
        { term: 'fiduciary duty', definition: 'Legal obligation to act in someone else\'s best interest' },
      ],
      analogies: [
        'Your healthcare proxy is like having power of attorney, but specifically for medical matters.',
        'Think of your proxy as a translator who speaks for you when you cannot speak for yourself.',
      ],
    },
    3: {
      level: 3,
      summary: 'Healthcare proxy designation involves legal documentation, defined scope of authority, activation upon incapacity determination, and application of substituted judgment or best interest standards in medical decision-making.',
      explanation: `## Legal and Clinical Framework

### Legal Basis

**State Law Governance:**
- Each state has specific healthcare proxy statutes
- Different terminology (agent, proxy, surrogate, representative)
- Varying execution requirements
- Different scope of authority

**Common Requirements:**
| Element | Typical Requirement |
|---------|-------------------|
| Age | 18 or older |
| Capacity | Competent at signing |
| Written form | State-specific form |
| Witnesses | Usually 2 required |
| Notarization | Some states require |

### Scope of Authority

**Generally Included:**
- Consent to or refuse treatment
- Access medical records
- Choose healthcare providers
- Authorize transfer between facilities
- Make end-of-life decisions

**Potential Limitations:**
- Mental health treatment decisions (some states)
- Decisions during pregnancy (some states)
- Research participation
- Organ donation (unless specified)

### Activation of Proxy

**Incapacity Determination:**
- Usually requires physician assessment
- May require two physicians for some decisions
- Decision-specific (not global)
- Can be temporary or permanent

**Documentation:**
- Attending physician statement
- Medical record notation
- Communication to healthcare team
- Family/proxy notification

### Decision-Making Standards

**Hierarchy:**
1. **Expressed wishes**: Clear prior statements
2. **Substituted judgment**: What patient would want
3. **Best interest**: Objective benefit/burden analysis

**Proxy Responsibilities:**
- Follow known patient wishes
- Apply patient's values to new situations
- Consult with family members
- Work with healthcare team
- Consider patient's quality of life values

### Conflicts and Resolution

**Common Conflicts:**
- Proxy disagrees with family members
- Proxy's decision seems contrary to patient interest
- Healthcare team disagrees with proxy decision
- Proxy unavailable for urgent decisions

**Resolution Mechanisms:**
- Family meetings
- Ethics consultation
- Mediation
- Court intervention (rare)

### Documentation and Communication

**Medical Record:**
- Copy of proxy designation
- Contact information for proxy
- Notation of incapacity determination
- Documentation of proxy consultations

**Best Practices:**
- Verify proxy identity
- Confirm current contact information
- Document decision-making discussions
- Include proxy in care conferences`,
      keyTerms: [
        { term: 'incapacity determination', definition: 'Clinical assessment that a patient cannot make healthcare decisions' },
        { term: 'decision-specific capacity', definition: 'Evaluation of ability to make a particular decision rather than all decisions' },
        { term: 'ethics consultation', definition: 'Formal review by ethics committee to help resolve difficult care decisions' },
        { term: 'surrogate hierarchy', definition: 'Legal order of priority for decision-makers when no proxy is designated' },
      ],
      clinicalNotes: 'Verify healthcare proxy documentation on admission. Assess patient capacity before engaging proxy. Document all proxy consultations. Use ethics consultation for conflicts.',
    },
    4: {
      level: 4,
      summary: 'Healthcare proxy practice requires sophisticated understanding of state-specific legal requirements, capacity assessment protocols, surrogate decision-making standards, and clinical processes for managing complex scenarios including conflicts, urgency, and vulnerable populations.',
      explanation: `## Legal Complexity

### State Variations

**Designation Requirements:**
| State Category | Characteristics |
|----------------|-----------------|
| Specific form required | Must use state form |
| Notarization required | Formal execution needed |
| Witness restrictions | Detailed disqualifications |
| No formal requirements | Informal designation accepted |

**Scope Variations:**
- Life-sustaining treatment authority
- Mental health treatment limitations
- Pregnancy restrictions
- Research participation authority

### Capacity and Activation

**Assessment Elements:**
- Understanding of medical situation
- Appreciation of personal implications
- Reasoning about options
- Expression of consistent choice

**Special Contexts:**
| Situation | Considerations |
|-----------|---------------|
| Emergency | Presumed consent may apply |
| Fluctuating capacity | Document changes |
| Mild cognitive impairment | Decision-specific assessment |
| Psychiatric illness | Distinguish from competence |

### Surrogate Hierarchies

**When No Proxy Designated:**
Most states define statutory surrogate order:
1. Court-appointed guardian
2. Spouse or domestic partner
3. Adult child
4. Parent
5. Adult sibling
6. Close friend (some states)

**Variations:**
- Same-sex partner recognition
- Domestic partner definitions
- Friend qualifications
- Healthcare provider as surrogate

### Complex Scenarios

**Proxy-Family Conflict:**
- Facilitate communication
- Clarify decision-making authority
- Document patient's prior wishes
- Consider ethics consultation
- Rare: legal proceedings

**Proxy Decisions Contrary to Patient Interest:**
- Assess proxy understanding
- Review patient's known wishes
- Ethics committee involvement
- Court intervention for abuse

**Unavailable Proxy:**
- Alternate proxy provisions
- Statutory surrogate engagement
- Emergency treatment authority
- Documentation of attempts to reach proxy

### Special Populations

**Patients with Intellectual Disabilities:**
- May have capacity for some decisions
- Guardianship considerations
- Supported decision-making models
- Rights preservation focus

**Patients with Mental Illness:**
- Psychiatric advance directives
- State-specific authorities
- Capacity fluctuation management
- Least restrictive approach

### Institutional Requirements

**Admission Processes:**
- Screen for existing proxy documents
- Verify document validity
- Obtain current contact information
- Document in medical record

**Communication Protocols:**
- Notify proxy of significant changes
- Include in care planning
- Document all contacts
- Manage complex family dynamics`,
      keyTerms: [
        { term: 'statutory surrogate', definition: 'Person authorized by state law to make decisions when no proxy is designated' },
        { term: 'supported decision-making', definition: 'Model providing assistance while preserving individual\'s right to make own decisions' },
        { term: 'psychiatric advance directive', definition: 'Document specifying mental health treatment preferences during future incapacity' },
        { term: 'guardianship', definition: 'Court-appointed authority over another person\'s healthcare and/or financial decisions' },
      ],
      clinicalNotes: 'Know your state\'s proxy laws and surrogate hierarchy. Develop protocols for proxy engagement. Document capacity assessments thoroughly. Address conflicts early with family meetings and ethics support.',
    },
    5: {
      level: 5,
      summary: 'Healthcare proxy practice requires integration of legal expertise, clinical ethics, communication skills, and systems design to navigate complex surrogate decision-making scenarios while honoring patient autonomy and addressing health equity considerations.',
      explanation: `## Advanced Practice Framework

### Ethical Foundations

**Principles in Tension:**
| Principle | Application | Challenges |
|-----------|-------------|------------|
| Autonomy extension | Proxy honors patient wishes | Interpretation difficulties |
| Beneficence | Proxy promotes patient welfare | Define "welfare" |
| Nonmaleficence | Avoid harmful decisions | Treatment vs. non-treatment harm |
| Justice | Fair processes | Access to planning disparities |

**Substituted Judgment Critique:**
- Limited accuracy of surrogate predictions
- Patient preferences may change with illness
- Bias toward life-prolonging treatment
- Cultural assumptions embedded

### Research Evidence

**Decision-Making Quality:**
- Surrogates correctly predict patient preferences ~68%
- Improved with prior conversations
- Systematic overtreatment tendency
- Emotional burden on surrogates

**Surrogate Outcomes:**
- Post-decision anxiety and depression
- PTSD symptoms in ICU surrogates
- Guilt and doubt experiences
- Long-term psychological effects

### System Design

**Clinical Pathways:**
| Stage | Components |
|-------|------------|
| Pre-crisis | Advance care planning, proxy selection support |
| Admission | Proxy verification, relationship building |
| Incapacity | Capacity determination, proxy activation |
| Decision-making | Goals conversation, recommendation development |
| Conflict | Ethics consultation, mediation resources |

**Communication Infrastructure:**
- Structured family meetings
- Goals of care conversation training
- Interpreter services integration
- Remote participation options

### Complex Case Management

**Emerging Capacity:**
- Reassess frequently
- Transition decision-making back
- Document capacity return
- Reconcile proxy decisions

**Permanent Incapacity with Long Duration:**
- Ongoing proxy engagement
- Prevention of surrogate fatigue
- Regular goals reassessment
- Relationship maintenance

**End-of-Life Decisions:**
- Specific authority verification
- POLST/MOLST alignment
- Comfort care transitions
- Bereavement support planning

### Policy and Systems

**Institutional Requirements:**
- Proxy identification workflows
- Documentation standards
- Communication protocols
- Ethics consultation access

**Quality Indicators:**
- Advance directive/proxy documentation rates
- Timeliness of proxy notification
- Goals of care conversation completion
- Surrogate decision-maker distress

### Health Equity Considerations

**Access Disparities:**
- Lower advance care planning rates in minorities
- Cultural variation in surrogate decision-making norms
- Language barriers to planning
- Trust issues with healthcare system

**Equity-Focused Approaches:**
- Community-based planning programs
- Culturally adapted materials
- Community health worker involvement
- Trusted messenger engagement

### Future Directions

**Emerging Models:**
- Supported decision-making expansion
- Shared decision-making integration
- Technology for family engagement
- Surrogate support programs

**Research Priorities:**
- Surrogate decision-making accuracy improvement
- Intervention to reduce surrogate burden
- Equity-focused intervention development
- Implementation science applications`,
      keyTerms: [
        { term: 'surrogate decision-maker burden', definition: 'Psychological distress experienced by those making medical decisions for others' },
        { term: 'goals of care conversation', definition: 'Discussion exploring patient values, understanding, and preferences to guide care planning' },
        { term: 'shared decision-making', definition: 'Collaborative process integrating clinical evidence with patient/surrogate values and preferences' },
        { term: 'emerging capacity', definition: 'Situation where a previously incapacitated patient regains decision-making ability' },
      ],
      clinicalNotes: `Implementation priorities:
1. Implement systematic advance care planning including proxy designation
2. Train clinicians in goals of care conversations
3. Develop family meeting protocols with communication best practices
4. Create surrogate support resources
5. Ensure ethics consultation is accessible and timely
6. Monitor surrogate decision-maker outcomes
7. Address equity in advance care planning access
8. Integrate proxy documentation into admission and care planning workflows`,
    },
  },

  media: [
    {
      id: 'healthcare-proxy-selection',
      type: 'diagram',
      filename: 'choosing-healthcare-proxy.svg',
      title: 'Choosing a Healthcare Proxy',
      description: 'Guide to selecting an appropriate healthcare proxy',
    },
  ],

  citations: [
    {
      id: 'nih-healthcare-proxy',
      type: 'website',
      title: 'Advance Care Planning: Healthcare Directives',
      source: 'National Institute on Aging',
      url: 'https://www.nia.nih.gov/health/advance-care-planning-healthcare-directives',
      accessedDate: '2026-01-24',
    },
    {
      id: 'ama-surrogate',
      type: 'website',
      title: 'Surrogate Decision Making',
      source: 'American Medical Association',
      url: 'https://www.ama-assn.org/delivering-care/ethics/surrogate-decision-making',
      accessedDate: '2026-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'concept-advance-directives', targetType: 'concept', relationship: 'related', label: 'Advance Directives' },
    { targetId: 'concept-patient-bill-of-rights', targetType: 'concept', relationship: 'related', label: 'Patient Bill of Rights' },
    { targetId: 'concept-informed-consent', targetType: 'concept', relationship: 'related', label: 'Informed Consent' },
  ],

  tags: {
    systems: ['healthcare-system'],
    topics: ['patient-advocacy', 'end-of-life-care', 'legal-rights', 'medical-ethics', 'surrogate-decision-making'],
    keywords: ['healthcare proxy', 'healthcare agent', 'medical power of attorney', 'surrogate decision-maker'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default healthcareProxy;
