/**
 * Healthcare Proxy - Educational Content
 *
 * Guidance for caregivers on understanding healthcare proxy,
 * advance directives, and medical decision-making authority.
 */

import { EducationalContent } from "../../types";

export const healthcareProxy: EducationalContent = {
  id: "caregiver-healthcare-proxy",
  type: "concept",
  name: "Healthcare Proxy",
  alternateNames: ["Medical Power of Attorney", "Healthcare Agent", "Advance Directive"],

  levels: {
    1: {
      level: 1,
      summary: "A healthcare proxy is a document that names someone to make medical decisions for you if you cannot speak for yourself.",
      explanation: `A healthcare proxy is an important part of planning for the future.

**What Is a Healthcare Proxy?**
- A legal document
- Names someone to make medical decisions
- Takes effect only when you cannot decide yourself
- Also called medical power of attorney or healthcare agent

**Why It Matters**
- Ensures your wishes are followed
- Takes burden off family to guess
- Prevents family disagreements
- Doctors know who to talk to

**Who Should Be Your Healthcare Proxy?**
- Someone you trust completely
- Someone who will follow your wishes
- Someone who can handle tough decisions
- Someone who can speak up to doctors
- Usually a family member or close friend

**What the Proxy Can Decide**
- Whether to have surgery
- What treatments to try
- Whether to continue life support
- Where to receive care
- End-of-life care decisions

**Related Documents**

**Living Will**
- Written instructions about your wishes
- States what treatments you want or do not want
- Especially about end-of-life care

**Advance Directive**
- Includes healthcare proxy AND living will
- Complete set of instructions

**Important Steps**
1. Choose your proxy carefully
2. Talk about your wishes
3. Complete the forms
4. Give copies to doctors and proxy
5. Review periodically`,
      keyTerms: [
        { term: "healthcare proxy", definition: "A person you choose to make medical decisions for you if you cannot make them yourself" },
        { term: "advance directive", definition: "Documents stating your healthcare wishes, including healthcare proxy and living will" },
        { term: "living will", definition: "Written instructions about what medical treatments you want or do not want" },
      ],
      analogies: [
        "A healthcare proxy is like having a voice when you cannot speak - they say what you would say.",
        "Think of advance directives as your medical instruction manual - so others know how to care for you.",
      ],
      examples: [
        "Maria is the healthcare proxy for her father. When he had his stroke, she could tell the doctors his wishes about treatment.",
        "Tom talked to his wife about his end-of-life wishes and wrote them in his living will, then named her as his healthcare proxy.",
      ],
    },
    2: {
      level: 2,
      summary: "Healthcare proxy documents designate decision-making authority for medical care, working alongside living wills and POLST forms to ensure patient wishes are honored when they cannot communicate.",
      explanation: `**Types of Advance Directives**

| Document | Purpose | When Used |
|----------|---------|-----------|
| Healthcare proxy | Names decision-maker | When patient cannot decide |
| Living will | States treatment preferences | End-of-life situations |
| POLST/MOLST | Medical orders for current treatment | Serious illness |
| DNR order | No CPR if heart stops | Medical emergency |

**Healthcare Proxy Details**

**Requirements to Create**
- Must have mental capacity
- Must be voluntary
- Witnesses required (varies by state)
- Notarization (some states)
- Specific forms (some states)

**Choosing a Proxy**
- Knows your values and wishes
- Can handle stressful decisions
- Will advocate for you
- Available when needed
- Good communicator

**Proxy Responsibilities**
- Learn your wishes in advance
- Make decisions you would make
- Communicate with medical team
- May access medical records
- Consider quality of life

**Living Will Considerations**

**Common Choices Addressed**
- Life-sustaining treatment
- Mechanical ventilation
- Artificial nutrition and hydration
- CPR preferences
- Comfort care priorities

**Limitations**
- Cannot cover every situation
- May need interpretation
- Healthcare proxy fills gaps
- Should be discussed, not just written

**POLST (Physician Orders for Life-Sustaining Treatment)**

**Differs from Other Directives**
- Is a medical order (not just wishes)
- Completed with healthcare provider
- For serious illness only
- Travels with patient
- Pink form (recognizable)

**Topics Covered**
- CPR preferences
- Medical interventions level
- Artificially administered nutrition

**Having Conversations**

**With Your Loved One**
- What gives life meaning?
- What would be unacceptable quality of life?
- Who do they trust to decide?
- What matters most at end of life?

**With Healthcare Team**
- Ensure documents are in medical record
- Discuss how wishes apply to current situation
- Update as condition changes`,
      keyTerms: [
        { term: "POLST", definition: "Physician Orders for Life-Sustaining Treatment - medical orders for seriously ill patients about CPR and interventions" },
        { term: "DNR", definition: "Do Not Resuscitate - order indicating no CPR should be performed if heart stops" },
        { term: "capacity", definition: "Ability to understand and make informed decisions about medical care" },
        { term: "surrogate decision-maker", definition: "Person authorized to make healthcare decisions when patient cannot" },
      ],
      analogies: ["Advance directives are like a GPS for your medical care - they give directions so others know where you want to go."],
    },
    3: {
      level: 3,
      summary: "Healthcare proxy execution requires understanding legal frameworks, capacity assessment, surrogate decision-making standards, and integration with clinical care planning.",
      explanation: `## Legal Framework

**State Law Variation**
- Execution requirements differ
- Hierarchy of surrogates varies
- Scope of authority varies
- Recognition across states

**Document Requirements**
| Element | Typical Requirements |
|---------|---------------------|
| Principal identification | Full legal name |
| Agent designation | Named, contact info |
| Alternate agent | Backup if primary unavailable |
| Scope | General or limited |
| Execution | Signatures, witnesses, notary |

**Triggering the Proxy**
- Determination of incapacity
- Usually by attending physician
- Decision-specific in some states
- Can be temporary

## Capacity Assessment

**Legal Standard**
- Understand medical condition
- Understand proposed treatment
- Understand consequences
- Communicate a choice

**Clinical Assessment**
- Cognitive evaluation
- Decision-specific
- Can fluctuate
- Documentation critical

**Partial Capacity**
- May have capacity for some decisions
- Less complex decisions maintained
- Supported decision-making
- Respect remaining autonomy

## Surrogate Decision-Making

**Decision-Making Standards**
| Standard | Description | Application |
|----------|-------------|-------------|
| Expressed wishes | What patient stated | Clear prior statements |
| Substituted judgment | What patient would want | Known values, beliefs |
| Best interests | What is objectively best | No knowledge of wishes |

**Surrogate Hierarchy (typical)**
1. Court-appointed guardian
2. Healthcare agent/proxy
3. Spouse/domestic partner
4. Adult children
5. Parents
6. Adult siblings

## Clinical Integration

**Documentation**
- Advance directives in medical record
- Alerts in EHR
- POLST prominently displayed
- Code status orders

**Care Planning**
- Integrate wishes into care plan
- Regular review and update
- Family meetings as needed
- Ethics consultation if conflicts

**Emergency Situations**
- POLST provides immediate guidance
- Emergency personnel follow orders
- Hospital documents honored
- Communication critical

## Conflict Resolution

**Sources of Conflict**
- Family disagreement
- Proxy vs. healthcare team
- Unclear patient wishes
- Changing circumstances

**Resolution Approaches**
- Communication and education
- Family meetings
- Ethics consultation
- Legal counsel
- Court involvement (rare)`,
      keyTerms: [
        { term: "substituted judgment", definition: "Making decisions based on what the patient would have wanted, not what others think is best" },
        { term: "best interests standard", definition: "Decision-making standard used when patient wishes are unknown" },
        { term: "surrogate hierarchy", definition: "Legal order of who can make decisions when no healthcare proxy exists" },
        { term: "ethics consultation", definition: "Hospital service helping resolve difficult ethical issues in patient care" },
      ],
      clinicalNotes: "Document advance directive status in medical record. Ensure healthcare proxy understands patient wishes. Use substituted judgment standard for decisions. Access ethics consultation for conflicts. Update documentation as condition changes.",
    },
    4: {
      level: 4,
      summary: "Evidence-based advance care planning integrates communication interventions, decision aid research, surrogate support strategies, and quality measurement within diverse healthcare settings.",
      explanation: `## Advance Care Planning Research

**Effectiveness Evidence**
- Improved documentation rates
- Better goal-concordant care
- Reduced unwanted interventions
- Improved family outcomes

**Intervention Approaches**
| Approach | Evidence | Components |
|----------|----------|------------|
| Respecting Choices | Strong | Facilitator-led conversations |
| Conversation Project | Moderate | Starter kit, community |
| POLST programs | Strong | Medical orders, training |
| Video decision aids | Moderate | Visual information |

**Key Components**
- Ongoing conversations (not one-time)
- Documentation and communication
- Periodic review
- Surrogate preparation

## Surrogate Support

**Surrogate Experience**
- Decision-making burden documented
- Post-decision distress common
- Preparation helps
- Support needs identified

**Interventions**
- Decision aids for surrogates
- Support during decision-making
- Post-decision support
- Bereavement services

**Shared Decision-Making**
- Clinician-surrogate partnership
- Information exchange
- Deliberation
- Decision implementation

## Quality Measurement

**Process Measures**
- ACP documentation rates
- Healthcare proxy completion
- POLST completion
- Conversation documentation

**Outcome Measures**
- Goal-concordant care
- Surrogate decision satisfaction
- Surrogate psychological outcomes
- Healthcare utilization

**System Metrics**
- EHR integration
- Alert systems
- Training completion
- Quality benchmarking

## Special Populations

**Dementia**
- Early planning critical
- Capacity assessment challenges
- Ongoing reassessment
- Proxy preparation

**Serious Illness**
- POLST appropriate
- Prognosis-based planning
- Care coordination
- Transitions support

**Cultural Considerations**
- Family decision-making norms
- Disclosure preferences
- Religious considerations
- Language access

## Implementation

**Healthcare System Integration**
- EHR documentation
- Alert systems
- Workflow integration
- Provider training

**Community Programs**
- Conversation Project
- Community education
- Faith community engagement
- Employer programs

**Policy Supports**
- Medicare ACP billing codes
- Quality incentives
- State requirements
- Accreditation standards`,
      keyTerms: [
        { term: "Respecting Choices", definition: "Evidence-based advance care planning program with facilitator-led conversations" },
        { term: "goal-concordant care", definition: "Care that matches patient\"s expressed values and preferences" },
        { term: "advance care planning billing", definition: "Medicare codes allowing reimbursement for ACP conversations" },
        { term: "surrogate preparation", definition: "Helping healthcare proxies understand their role and patient wishes before decisions needed" },
        { term: "ACP documentation", definition: "Recording advance care planning discussions and decisions in medical record" },
      ],
      clinicalNotes: "Implement systematic advance care planning. Use evidence-based approaches. Support surrogates in decision-making. Track quality metrics. Address cultural factors. Bill for ACP services appropriately.",
    },
    5: {
      level: 5,
      summary: "Advance care planning research examines implementation science, surrogate decision-making psychology, health systems integration, and policy frameworks while addressing disparities in ACP access and quality.",
      explanation: `## Implementation Science

**Evidence-Practice Gap**
- Low ACP completion rates persist
- Documentation issues
- Portability challenges
- Provider training gaps

**Implementation Strategies**
- System redesign
- Workflow integration
- Provider training
- Patient engagement
- Technology supports

**Sustainability**
- Funding models
- Workforce capacity
- Quality assurance
- Outcome tracking

## Decision-Making Research

**Surrogate Decision Psychology**
- Cognitive load effects
- Emotional influences
- Accuracy of prediction
- Decision regret

**Improving Decisions**
- Preparation before crisis
- Communication supports
- Decision aids
- Post-decision support

**Research Directions**
- Shared decision-making models
- Technology integration
- Communication interventions
- Long-term outcomes

## Policy Framework

**Federal Policy**
- PSDA (Patient Self-Determination Act)
- Medicare ACP reimbursement
- Quality measures
- Research funding

**State Variation**
- Execution requirements
- POLST programs
- Surrogate hierarchy
- Portability

**Advocacy**
- Universal ACP
- Coverage expansion
- Quality improvement
- Research investment

## Health Equity

**Disparities**
- ACP completion rates
- Quality of conversations
- Goal-concordant care
- Surrogate support

**Contributing Factors**
- Historical mistrust
- Cultural differences
- Language barriers
- Access to care

**Interventions**
- Community-based programs
- Cultural adaptation
- Language access
- Trust building

**Research Needs**
- Disparity mechanisms
- Effective interventions
- Outcome equity
- Community engagement

## Future Directions

**Innovation**
- Technology platforms
- AI-assisted planning
- Interoperability
- Patient-facing tools

**Research Priorities**
- Implementation effectiveness
- Outcome measurement
- Equity interventions
- Long-term follow-up

**Systems Change**
- Healthcare integration
- Community partnerships
- Policy advancement
- Quality improvement`,
      keyTerms: [
        { term: "Patient Self-Determination Act", definition: "Federal law requiring healthcare facilities to inform patients about advance directives" },
        { term: "ACP disparities", definition: "Differences in advance care planning completion and quality by race, ethnicity, and socioeconomic status" },
        { term: "interoperability", definition: "Ability of health systems to share advance directive information across settings" },
        { term: "serious illness conversation", definition: "Evidence-based approach to discussing prognosis, goals, and values with seriously ill patients" },
        { term: "portable medical orders", definition: "Orders like POLST that travel with patients across settings" },
      ],
      clinicalNotes: `Systems implementation:
1. Implement evidence-based ACP programs
2. Integrate into clinical workflows
3. Address equity in ACP access
4. Support surrogates throughout process
5. Track quality metrics
6. Advocate for policy supports`,
    },
  },

  media: [
    { id: "healthcare-proxy-guide", type: "diagram", filename: "advance-directives-overview.svg", title: "Advance Directives Overview", description: "Visual guide to types of advance directives" },
  ],

  citations: [
    { id: "conversation-project", type: "website", title: "The Conversation Project", source: "Institute for Healthcare Improvement", url: "https://theconversationproject.org/" },
    { id: "polst-paradigm", type: "website", title: "National POLST", source: "National POLST", url: "https://polst.org/" },
  ],

  crossReferences: [
    { targetId: "caregiver-power-of-attorney", targetType: "concept", relationship: "related", label: "Power of Attorney" },
    { targetId: "caregiver-difficult-conversations", targetType: "concept", relationship: "related", label: "Difficult Conversations" },
  ],

  tags: { systems: ["caregiver-support"], topics: ["healthcare proxy", "advance directives", "living will", "POLST", "end-of-life"], clinicalRelevance: "critical" },

  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

export default healthcareProxy;
