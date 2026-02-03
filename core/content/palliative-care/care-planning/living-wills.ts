/**
 * Living Wills - Educational Content
 *
 * Comprehensive content on living wills, their purpose,
 * creation, and role in expressing treatment preferences.
 */

import { EducationalContent } from '../../types';

export const livingWills: EducationalContent = {
  id: 'concept-living-wills',
  type: 'concept',
  name: 'Living Wills',
  alternateNames: ['Directive to Physicians', 'Declaration', 'Instructional Directive'],

  levels: {
    1: {
      level: 1,
      summary: 'A living will is a written document where you explain what medical treatments you want or do not want if you become too sick to tell the doctors yourself.',
      explanation: `**What Is a Living Will?**

A living will is a paper where you write down your wishes about medical care. It tells doctors what treatments you want or do not want if you are very sick and cannot speak for yourself.

**Why Is It Called a "Living Will"?**

It is called a "living" will because you make it while you are alive and it goes into effect while you are still living (unlike a regular will, which is for after you die).

**What Can You Put in a Living Will?**

You can say what you want about:
- **CPR** - If your heart stops, do you want doctors to try to restart it?
- **Breathing machines** - If you cannot breathe, do you want a machine to breathe for you?
- **Feeding tubes** - If you cannot eat, do you want food through a tube?
- **Pain medicine** - Do you want medicine to keep you comfortable?

**When Does a Living Will Work?**

A living will only works when:
- You cannot speak for yourself
- You are very sick and will not get better
- OR you are unconscious and will not wake up

**How Do I Make a Living Will?**

1. Get a form (from your doctor, hospital, or online)
2. Read it and think about what you want
3. Talk to your family about your choices
4. Fill out the form
5. Sign it with witnesses (some states need a notary too)
6. Give copies to your doctor and family

**Important Things to Know**

- You can change your living will anytime
- It is best to also name a healthcare proxy (someone to speak for you)
- A living will is different from a regular will about money and belongings`,
      keyTerms: [
        { term: 'living will', definition: 'A written paper that says what medical treatments you want if you cannot speak for yourself' },
        { term: 'CPR', definition: 'Cardiopulmonary resuscitation - emergency treatment to restart the heart and breathing' },
        { term: 'life support', definition: 'Medical treatments like breathing machines that keep your body working' },
      ],
      analogies: [
        'A living will is like leaving a note for someone taking care of your pet - it tells them exactly what you want done, even though you cannot be there to say it.',
        'Think of a living will like setting preferences on your phone - you decide ahead of time how you want things to work.',
      ],
      examples: [
        'Someone might write in their living will that they do not want CPR if their heart stops because they are already very sick with a disease that cannot be cured.',
        'A person might say in their living will that they want all pain medicine possible to stay comfortable, even if it makes them sleepy.',
      ],
    },
    2: {
      level: 2,
      summary: 'A living will is a legal document that specifies treatment preferences for situations when a person cannot communicate, typically addressing life-sustaining treatments in terminal or permanently unconscious conditions.',
      explanation: `## Understanding Living Wills

### What Is a Living Will?

A living will is a type of advance directive that:
- Documents treatment preferences in writing
- Addresses specific medical scenarios
- Becomes effective when patient lacks capacity
- Usually applies to terminal or irreversible conditions

### What Living Wills Typically Address

**Life-Sustaining Treatments**
- CPR (cardiopulmonary resuscitation)
- Mechanical ventilation (breathing machine)
- Artificial nutrition (feeding tube)
- Artificial hydration (IV fluids)
- Dialysis
- Antibiotics for serious infections

**Comfort Care**
- Pain medication
- Comfort measures
- Hospice care

### When Living Wills Take Effect

Most living wills require:
1. Patient lacks decisional capacity
2. AND one of:
   - Terminal condition (disease that will cause death)
   - Permanent unconsciousness (will not wake up)
   - End-stage condition (in some states)

### Limitations of Living Wills

**Challenges**
- Cannot anticipate every situation
- Language may be vague
- May not match actual clinical scenario
- Written when healthy, may not reflect later views
- May not be found in an emergency

**Why Healthcare Proxy Is Better**
- Can adapt to actual situation
- Can clarify patient values
- Available for any decision, not just specific scenarios
- Living will works best combined with proxy

### Creating a Living Will

**Step 1: Reflect on Values**
- What makes life meaningful?
- What would be worse than death?
- What are your hopes and fears?

**Step 2: Learn About Treatments**
- CPR: Success rates, what it involves
- Ventilators: Temporary vs. long-term
- Feeding tubes: Purpose and limitations

**Step 3: Complete the Document**
- Use state-specific form
- Answer questions thoughtfully
- Include personal statements about values

**Step 4: Make It Legal**
- Sign with witnesses (usually 2)
- Notarization (required in some states)
- Distribute copies

### State Variations

| Aspect | Varies By State |
|--------|-----------------|
| Form requirements | Specific form vs. any written document |
| Witnessing | Number of witnesses, who can witness |
| Notarization | Required, optional, or not needed |
| Activation conditions | Terminal, unconscious, end-stage |

### Reviewing and Updating

- Review every few years
- Update after major health changes
- Update if preferences change
- Make sure copies are distributed`,
      keyTerms: [
        { term: 'terminal condition', definition: 'An illness that will cause death regardless of treatment' },
        { term: 'permanent unconsciousness', definition: 'A condition where someone will never regain awareness (coma or vegetative state)' },
        { term: 'life-sustaining treatment', definition: 'Medical treatment that prolongs life but cannot cure the underlying condition' },
        { term: 'artificial nutrition', definition: 'Food or nutrition given through a tube rather than by eating' },
      ],
      analogies: [
        'A living will is like writing your own instruction manual - you explain how you want things handled in specific situations.',
      ],
    },
    3: {
      level: 3,
      summary: 'Living wills present clinical and legal complexities including activation criteria, interpretation challenges, state-specific requirements, and integration with other advance care planning documents.',
      explanation: `## Living Wills: Clinical and Legal Framework

### Legal History and Foundation

**Key Legal Cases**
- *Quinlan* (1976): Established right to refuse life support
- *Cruzan* (1990): Supreme Court confirmed right, suggested clear evidence standard
- State statutory development: Living will laws in all 50 states

### State Statutory Variations

**Form Requirements**
- Mandatory state form vs. any written statement
- Suggested form vs. required form
- Online registries in some states

**Activation Triggers**
- Terminal illness
- Permanent unconsciousness
- End-stage condition
- Irreversible condition

**Witnessing Requirements**
- 2 witnesses typically required
- Restrictions on who can witness (not family, not healthcare workers)
- Notarization requirements vary

### Clinical Interpretation Challenges

**Vague Language**
- "No heroic measures" - undefined
- "Reasonable hope of recovery" - subjective
- "Life-prolonging procedures" - what counts?

**Scenario Mismatch**
- Living will written for terminal cancer, patient now has acute stroke
- Document says "no ventilator" but patient needs temporary support post-surgery
- Values unclear from written preferences

**Best Practice for Interpretation**
1. Read entire document including personal statements
2. Consult healthcare proxy/family
3. Consider what patient valued
4. Err on side of treatment if unclear
5. Ethics consultation for complex cases

### Integration with Other Documents

**Living Will + Healthcare Proxy**
- Proxy provides flexibility
- Living will provides guidance to proxy
- Proxy can interpret in context
- Both recommended together

**Living Will + POLST**
- Living will: General preferences, legal document
- POLST: Specific orders, medical document
- POLST for seriously ill patients
- Both can coexist

### Specific Treatment Preferences

**CPR/Resuscitation**
- Discuss realistic outcomes (survival rates, functional status)
- CPR in hospital vs. out-of-hospital
- DNR only active when activated per document criteria

**Mechanical Ventilation**
- Temporary (post-surgery, acute illness) vs. chronic
- Time-limited trials
- Difference between NIV and invasive ventilation

**Artificial Nutrition/Hydration**
- Temporary (recovery expected) vs. long-term
- Tube types: NG tube, PEG tube
- Hydration: IV fluids, subcutaneous
- Ethical/religious considerations

**Comfort Care**
- Always permitted regardless of other choices
- Pain medication (fear of hastening death)
- Hospice care election
- Comfort-focused treatment

### Documentation and Communication

**Medical Record Documentation**
- Living will status in designated field
- Copy scanned into chart
- Summary of key preferences
- Note if activated or not

**Communication Challenges**
- Document not available in emergency
- EMS cannot follow living will
- Need for POLST for emergency situations`,
      keyTerms: [
        { term: 'Cruzan decision', definition: 'U.S. Supreme Court case affirming right to refuse treatment but allowing states to require clear evidence of wishes' },
        { term: 'time-limited trial', definition: 'Agreement to try a treatment for a defined period with reassessment of goals' },
        { term: 'DNR', definition: 'Do Not Resuscitate - order to not perform CPR' },
        { term: 'PEG tube', definition: 'Percutaneous endoscopic gastrostomy - feeding tube placed through abdominal wall' },
      ],
      clinicalNotes: 'Living wills should never be interpreted in isolation - context matters. Values-based statements in living wills are often more helpful than specific treatment preferences. Encourage patients to complete healthcare proxy in addition to living will. Document capacity assessment when living will is completed.',
    },
    4: {
      level: 4,
      summary: 'Advanced living will practice involves managing complex interpretive scenarios, navigating legal ambiguities, guiding surrogates when documents are unclear, and understanding evolving legal and ethical frameworks.',
      explanation: `## Advanced Practice Considerations

### Complex Interpretive Scenarios

**When Living Will Seems to Conflict with Best Interests**
- Document says no ventilator, but ventilator for temporary post-op
- Document says no feeding tube, but temporary tube for recovery
- Resolution: Consider context, temporary vs. permanent, patient values
- May need ethics consultation

**Precedent Autonomy Debates**
- If person with dementia seems happy, should earlier living will refusing treatment be followed?
- Philosophical controversy: Autonomy vs. current interests
- Legal approach: Living will generally takes precedence
- Practical approach: Values-based interpretation with proxy

**Changing Capacity**
- Patient with capacity can override living will
- Capacity assessment in real-time
- Document capacity status
- Living will resumes when capacity lost

### Surrogate Guidance When Document Unclear

**Interpretation Framework**
1. What does the document literally say?
2. What were the patient's values and goals?
3. What would patient likely want in this situation?
4. Consider statements to family over time
5. Err toward treatment if truly uncertain

**Supporting Surrogates**
- Acknowledge burden
- Provide information about likely outcomes
- Help distinguish patient wishes from surrogate preferences
- Suggest what most people with similar values would want
- Document discussion and reasoning

### Legal Edge Cases

**Out-of-State Documents**
- Most states recognize out-of-state living wills
- Apply rules of state where document was executed OR where patient is
- May need to verify form meets requirements
- Uniform Health-Care Decisions Act states

**Revocation**
- Oral revocation usually valid
- Physical destruction
- New inconsistent document
- Must have capacity to revoke
- Document apparent revocations

**Validity Challenges**
- Signed under duress
- Lack of capacity when signed
- Improper witnessing
- Undue influence

### Ethical Considerations

**Artificial Nutrition/Hydration**
- Religious perspectives (Catholic, Orthodox Jewish)
- Symbolic vs. medical meaning
- Distinction: Burden of treatment vs. value of life
- State laws restricting ANH withdrawal

**Time-Limited Trials**
- Living will says no ventilator, but trial might clarify prognosis
- Discuss with surrogate
- Trial allows for reassessment
- Clear endpoints and decision points

**Emergency Situations**
- Living will generally not followed by EMS
- Need for POLST/out-of-hospital DNR
- Hospital emergency: Assess document quickly
- Stabilize and assess if document unclear

### Quality and Systems Issues

**Document Availability**
- Centralized registries
- EHR documentation
- Patient-carried copies
- Family notification

**Clinician Education**
- Understanding of legal requirements
- Interpretation skills
- Communication with families
- Documentation standards

**Audit and Quality Improvement**
- Living will completion rates
- Appropriate activation
- Consistency with documented preferences
- Patient/family satisfaction`,
      keyTerms: [
        { term: 'precedent autonomy', definition: 'Concept that past autonomous decisions should guide care even after capacity loss' },
        { term: 'Uniform Health-Care Decisions Act', definition: 'Model legislation adopted by many states to standardize advance directive law' },
        { term: 'out-of-hospital DNR', definition: 'Order for EMS and community settings to not perform CPR' },
        { term: 'undue influence', definition: 'Improper pressure affecting someone\'s decision-making' },
      ],
      clinicalNotes: 'When living will is unclear, focus on patient values rather than literal language. Time-limited trials can bridge uncertainty. Know your state\'s specific requirements. Support surrogates who are struggling with interpretation. Document decision-making process thoroughly.',
    },
    5: {
      level: 5,
      summary: 'Expert-level practice encompasses leadership in policy development, ethical scholarship on living will limitations, health system optimization, and advocacy for improved advance care planning approaches.',
      explanation: `## Expert Practice and Scholarship

### Scholarly Perspectives on Living Wills

**Limitations Critique**
- Fagerlin and Schneider: "Enough: The Failure of the Living Will"
  - Low completion rates
  - People don't know what they want
  - Preferences change with illness
  - Proxies often override documents
  - Doctors often don't follow them

**Counterarguments**
- Living wills prompt important conversations
- Document values, not just treatments
- Combined with proxy, more effective
- Alternative is no documented wishes

**Contemporary Approaches**
- Values-based documents
- Video directives
- Conversation-focused (vs. form-focused)
- Integration into ongoing care relationships

### Policy and Regulatory Considerations

**State Policy Issues**
- Statutory reform needs
- POLST adoption barriers
- Registry development
- Interstate portability

**Federal Issues**
- Medicare documentation incentives
- EHR interoperability
- Research funding for ACP
- CMS conditions of participation

### Ethical Scholarship

**Key Debates**
- Autonomous choice vs. relational decision-making
- Precedent autonomy in dementia
- Surrogate role: Agent vs. decision-maker
- Cultural variations in autonomy

**Future Directions**
- Moving beyond forms to conversations
- Integration into primary care
- Community-based ACP
- Technology-assisted ACP

### Health System Leadership

**Optimizing Living Will Integration**

*Documentation Systems*
- EHR alerts for missing/expiring documents
- Standardized scanning and retrieval
- Cross-platform accessibility
- Auto-population of orders from documents

*Process Improvement*
- Trigger-based discussions
- Annual review prompts
- Transition of care protocols
- Staff education and competency

*Quality Metrics*
- Completion rates
- Document currency (age of document)
- Activation appropriateness
- Goal-concordant care

### Research Priorities

**Implementation Research**
- Effective strategies for increasing completion
- Ensuring document accessibility
- Training interventions for clinicians
- Family/surrogate preparation

**Outcomes Research**
- Does living will completion affect EOL care?
- Goal-concordance measurement
- Patient and family outcomes
- Cost implications

**Methods Innovation**
- Video documentation validity
- Digital signature acceptance
- AI-assisted document retrieval
- Predictive models for preferences

### Emerging Approaches

**Beyond the Form**
- Serious Illness Conversation Guide
- Prepare for Your Care website/tool
- ACP group visits
- Community ACP (church, senior center)

**Technology Innovation**
- Online document creation
- Video supplements
- Digital registries
- Blockchain for portability

**Cultural Adaptation**
- Culturally-specific materials
- Community health worker integration
- Family-centered approaches
- Multi-generational ACP

### Workforce and Education

**Training Needs**
- Legal requirements by state
- Communication skills
- Interpretation guidance
- Ethical reasoning

**Competency Assessment**
- Knowledge of documents and law
- Skills in discussion facilitation
- Attitudes toward end-of-life decisions
- System-level quality improvement`,
      keyTerms: [
        { term: 'PREPARE', definition: 'Evidence-based website and tool for advance care planning (prepareforyourcare.org)' },
        { term: 'Five Wishes', definition: 'Widely-used advance directive document combining proxy, living will, and values statements' },
        { term: 'Serious Illness Conversation Guide', definition: 'Ariadne Labs tool for structured goals of care discussions' },
        { term: 'goal-concordant care', definition: 'Care that aligns with documented patient goals and preferences' },
      ],
      clinicalNotes: `Expert-level considerations:
1. Advocate for policies moving beyond form-focused to conversation-focused ACP
2. Lead quality improvement for living will documentation and retrieval
3. Contribute to scholarship on living will limitations and alternatives
4. Train clinicians in interpretation and surrogate support
5. Develop culturally-adapted ACP approaches
6. Research effectiveness of living wills in achieving goal-concordant care
7. Engage in national policy discussions on advance care planning`,
    },
  },

  media: [
    {
      id: 'living-will-example',
      type: 'diagram',
      filename: 'living-will-example.svg',
      title: 'Living Will Components',
      description: 'Visual overview of typical living will sections and content',
    },
  ],

  citations: [
    {
      id: 'fagerlin-enough',
      type: 'article',
      title: 'Enough: The Failure of the Living Will',
      authors: ['Fagerlin, A.', 'Schneider, C.E.'],
      source: 'Hastings Center Report',
      url: 'https://doi.org/10.2307/3528399',
    },
    {
      id: 'prepare-care',
      type: 'website',
      title: 'PREPARE for Your Care',
      source: 'University of California, San Francisco',
      url: 'https://prepareforyourcare.org/',
    },
  ],

  crossReferences: [
    { targetId: 'concept-advance-directives', targetType: 'concept', relationship: 'parent', label: 'Advance Directives' },
    { targetId: 'concept-goals-of-care', targetType: 'concept', relationship: 'related', label: 'Goals of Care' },
    { targetId: 'concept-polst', targetType: 'concept', relationship: 'sibling', label: 'POLST Forms' },
    { targetId: 'concept-dnr-dni', targetType: 'concept', relationship: 'related', label: 'DNR/DNI Orders' },
  ],

  tags: {
    systems: ['palliative-care', 'legal'],
    topics: ['living will', 'advance directives', 'advance care planning', 'treatment preferences'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default livingWills;
