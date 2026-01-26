/**
 * Advance Directives - Educational Content
 *
 * Comprehensive content on advance directives and their role
 * in ensuring patient wishes are honored throughout care.
 */

import { EducationalContent } from '../../types';

export const advanceDirectives: EducationalContent = {
  id: 'concept-advance-directives',
  type: 'concept',
  name: 'Advance Directives',
  alternateNames: ['Advance Care Planning Documents', 'Healthcare Planning Documents'],

  levels: {
    1: {
      level: 1,
      summary: 'Advance directives are written documents that let you explain what kind of medical care you want if you become too sick to tell the doctors yourself.',
      explanation: `**What Are Advance Directives?**

An advance directive is a way to write down your wishes about medical care for the future. It helps your doctors and family know what you want if you cannot speak for yourself.

**Why Are Advance Directives Important?**

- You stay in control of your care
- Your family knows what you want
- Doctors can follow your wishes
- It can prevent arguments about your care
- It gives peace of mind

**Types of Advance Directives**

**1. Living Will**
A written document that says what treatments you do or do not want if you are very sick and cannot speak.

**2. Healthcare Proxy (Healthcare Power of Attorney)**
A document that names someone you trust to make medical decisions for you if you cannot.

**3. POLST Form**
A doctor's order form for people with serious illness that tells medical teams exactly what to do in an emergency.

**Who Needs an Advance Directive?**

Everyone 18 years or older should have one! You do not need to be sick. It is best to plan ahead while you are healthy.

**How Do I Make an Advance Directive?**

1. Think about what matters most to you
2. Talk to your family about your wishes
3. Get the forms (your doctor, hospital, or online can help)
4. Fill them out and sign them
5. Give copies to your doctor and family
6. Keep a copy for yourself

**Can I Change My Mind?**

Yes! You can change your advance directive at any time. Just make a new one and tell everyone about the change.`,
      keyTerms: [
        { term: 'advance directive', definition: 'A written document that explains your wishes for medical care if you cannot speak for yourself' },
        { term: 'healthcare proxy', definition: 'A person you choose to make medical decisions for you if you cannot' },
        { term: 'living will', definition: 'A document that says what treatments you want or do not want' },
      ],
      analogies: [
        'An advance directive is like leaving instructions for a babysitter - you write down what you want so they know how to take care of things when you are not available to tell them.',
        'Think of a healthcare proxy like giving someone the keys to your house - you trust them to take care of things the way you would.',
      ],
      examples: [
        'A healthy 45-year-old might fill out an advance directive saying they want to name their spouse as their healthcare proxy.',
        'An older person might write that if they cannot breathe on their own and will not get better, they do not want to be on a breathing machine.',
      ],
    },
    2: {
      level: 2,
      summary: 'Advance directives are legal documents that express a person\'s preferences for future medical care and designate a surrogate decision-maker, becoming active when the person loses capacity to make decisions.',
      explanation: `## Understanding Advance Directives

### What Are Advance Directives?

Advance directives are legal documents that allow adults to:
- Document their preferences for future medical care
- Name someone to make healthcare decisions if they cannot
- Provide guidance to families and medical teams

### Types of Advance Directives

**Healthcare Proxy (Healthcare Power of Attorney)**
- Names a trusted person (agent or proxy) to make medical decisions
- Agent should know your values and wishes
- Agent makes decisions only when you cannot
- Most important advance directive

**Living Will**
- Written statement of treatment preferences
- Often addresses specific scenarios (terminal illness, persistent unconsciousness)
- May specify wanted or unwanted interventions
- Works best when combined with healthcare proxy

**POLST (Physician Orders for Life-Sustaining Treatment)**
- Medical orders (not just wishes)
- Completed by healthcare provider with patient
- For people with serious illness
- Travels with patient across settings
- Called MOLST, POST, MOST in some states

### Key Legal Concepts

| Concept | Definition |
|---------|------------|
| Capacity | Ability to understand and make healthcare decisions |
| Competence | Legal determination of capacity |
| Surrogate | Person authorized to decide for someone who lacks capacity |
| Activation | When advance directive goes into effect |

### When Do Advance Directives Take Effect?

- Healthcare proxy: When you lack decisional capacity
- Living will: Usually when you lack capacity AND have terminal condition or permanent unconsciousness
- POLST: Immediately upon signing (medical orders)

### What Can Be Included?

**Common Preferences Addressed**
- CPR (cardiopulmonary resuscitation)
- Mechanical ventilation (breathing machines)
- Artificial nutrition and hydration
- Dialysis
- Antibiotics for life-threatening infection
- Transfer to hospital or ICU

### How to Complete Advance Directives

1. **Reflect** on your values and what matters to you
2. **Choose** a healthcare proxy who knows you well
3. **Talk** with your proxy about your wishes
4. **Complete** the appropriate forms for your state
5. **Sign** according to state requirements (witnesses, notary)
6. **Share** copies with proxy, doctors, family
7. **Review** regularly and update if wishes change

### State Variations

- Requirements vary by state (witnesses, notary, form type)
- Most states honor out-of-state documents
- Forms available from hospitals, doctors, online registries`,
      keyTerms: [
        { term: 'decisional capacity', definition: 'The ability to understand medical information and make informed healthcare decisions' },
        { term: 'healthcare proxy', definition: 'A legal document naming someone to make healthcare decisions on your behalf' },
        { term: 'POLST', definition: 'Physician Orders for Life-Sustaining Treatment - actionable medical orders for seriously ill patients' },
        { term: 'agent', definition: 'The person named in a healthcare proxy to make decisions' },
      ],
      analogies: [
        'A healthcare proxy is like assigning an understudy in a play - they learn your part so they can step in and act as you would.',
      ],
    },
    3: {
      level: 3,
      summary: 'Advance directives involve complex legal, ethical, and clinical considerations including proper execution requirements, interpretation challenges, documentation in medical records, and ensuring appropriate activation and surrogate guidance.',
      explanation: `## Advance Directives: Clinical Framework

### Legal Foundations

**Federal Law**
- Patient Self-Determination Act (1990)
  - Requires hospitals to inform patients of AD rights
  - Must document AD status in medical record
  - Cannot condition care on AD completion

**State Laws**
- Healthcare proxy statutes
- Living will statutes
- Default surrogate hierarchy (when no proxy named)
- POLST/MOLST regulations
- State-specific form requirements

### Healthcare Proxy Best Practices

**Selecting a Proxy**
- 18+ years old
- Knows patient values and preferences
- Able to make difficult decisions under pressure
- Willing to advocate for patient wishes
- Available when needed

**Proxy Responsibilities**
- Substituted judgment: What would patient want?
- Best interests: When values unknown
- Making decisions with medical team
- Accessing medical information (HIPAA)

**Limitations of Proxy Authority**
- Cannot generally consent to:
  - Psychiatric commitment
  - Sterilization
  - Abortion
  - Experimental treatment (varies)

### Living Will Interpretation

**Challenges**
- Often vague or scenario-specific
- May not match clinical situation
- Written when healthy, may not reflect later views
- Interpretation required by proxy/clinicians

**Best Practice**
- Combine with healthcare proxy
- Focus on values, not just procedures
- Discuss meaning with proxy
- Update periodically

### POLST Details

**Appropriate Patients**
- Serious illness or frailty
- Prognosis of 1-2 years or less
- Would not be surprised if died within year

**POLST Sections (typical)**
1. CPR (attempt/do not attempt)
2. Medical interventions (comfort/limited/full)
3. Artificial nutrition
4. (Sometimes antibiotics, hospitalization)

**POLST vs. Advance Directive**

| Feature | Advance Directive | POLST |
|---------|------------------|-------|
| Type | Legal document | Medical orders |
| Who completes | Patient/lawyer | Provider with patient |
| When active | When lose capacity | Immediately |
| Portability | May need to be found | Travels with patient |
| Population | All adults | Seriously ill |

### Documentation and Communication

**Medical Record Documentation**
- AD status in designated field
- Copy of documents in chart
- Summary of conversations
- POLST as active orders

**Communication Across Settings**
- Share at transitions (hospital, nursing home)
- Update in EMR
- Patient carries copies (wallet card, phone)
- State registries available in some states

### Clinical Challenges

**When AD Conflicts with Family**
- AD takes precedence if clear
- Explore family concerns
- Consider ethics consultation
- Document carefully

**When AD is Unclear**
- Use proxy's interpretation
- Consider what patient valued
- Ethics consultation if needed
- Document reasoning

**Activating vs. Not Activating**
- Requires clinical judgment
- Assess capacity in real-time
- AD only active when patient lacks capacity
- Patient with capacity can override AD`,
      keyTerms: [
        { term: 'Patient Self-Determination Act', definition: 'Federal law requiring healthcare facilities to inform patients of advance directive rights' },
        { term: 'substituted judgment', definition: 'Making decisions based on what the patient would have wanted' },
        { term: 'default surrogate', definition: 'Person designated by state law to make decisions when no healthcare proxy exists' },
        { term: 'HIPAA', definition: 'Federal law protecting health information privacy, with exceptions for healthcare proxies' },
      ],
      clinicalNotes: 'Always check for existing advance directives on admission. POLST is appropriate for seriously ill patients. A living will should never be used alone - always encourage proxy designation. When in doubt about AD interpretation, err on the side of treatment and seek ethics input.',
    },
    4: {
      level: 4,
      summary: 'Advanced advance directive practice requires expertise in legal nuances across jurisdictions, capacity assessment, surrogate guidance, resolution of conflicts, and integration of advance care planning into health system processes.',
      explanation: `## Advanced Legal and Ethical Considerations

### Capacity Assessment for Advance Directives

**Capacity to Execute AD**
- Lower threshold than capacity for complex medical decisions
- Must understand:
  - Purpose of document
  - Nature of proxy role
  - General preferences being expressed
- Document capacity assessment

**Contested Capacity**
- Family disagreement about patient capacity
- Fluctuating capacity
- Cognitive impairment
- Consider formal capacity evaluation
- May need guardianship if no AD and no capacity

### Surrogate Decision-Making Standards

**Substituted Judgment**
- What would this patient want?
- Based on patient's known values and preferences
- Prior statements, life patterns, religious beliefs
- Preferred standard when patient values known

**Best Interests**
- What is best for the patient?
- Used when patient values unknown
- Weighs benefits vs. burdens
- Quality of life considerations

**Challenges for Surrogates**
- Emotional burden of decisions
- Guilt about limiting treatment
- Family pressure
- Uncertainty about patient wishes
- Need for clinician guidance and support

### Conflict Resolution

**Conflict Types**
1. AD conflicts with current stated wishes (capacity present)
2. AD unclear or doesn't match clinical scenario
3. Proxy disagrees with AD
4. Family disagrees with proxy
5. Clinical team disagrees with proxy decisions

**Resolution Approaches**
- Clarify what AD actually says
- Explore underlying concerns
- Time-limited trials
- Ethics consultation
- Hospital legal counsel
- Rarely: court involvement

### Special Populations

**Dementia**
- Plan while capacity intact
- Values-focused discussions
- Proxy designation critical
- POLST for advanced dementia
- Precedent autonomy considerations

**Mental Illness**
- Psychiatric advance directives
- May specify treatment preferences
- Crisis planning
- Respecting past capable wishes

**Pediatrics**
- Parents as natural surrogates
- No advance directives for minors
- Adolescent assent
- Mature minor doctrine (varies by state)

### Health System Integration

**EMR Implementation**
- Standardized AD documentation fields
- Alerts for missing AD
- Scanned copies available
- AD status visible across departments

**State Registries**
- Electronic registries in some states
- Accessible by authorized providers
- Upload and retrieval of documents
- Interstate portability challenges

**Advance Care Planning Programs**
- Systematic outreach (Medicare AWV)
- Trained facilitators
- Group visits
- Community partnerships

### Quality Measures

**Process Measures**
- AD completion rates
- AD documentation in EMR
- AD discussion documentation
- POLST completion for eligible patients

**Outcome Measures**
- Goal-concordant care
- Intensity of end-of-life care
- Hospice utilization
- Patient/family satisfaction

### Legal Considerations

**Liability Concerns**
- Following valid AD protects from liability
- Good faith interpretation standard
- Document decision-making process
- Ethics consultation for unclear situations

**Criminal Law**
- AD withdrawal of life support is not homicide
- Provider protected when following AD
- Lethal intent vs. allowing natural death

**Guardianship**
- Court-appointed surrogate
- When no AD and no family or family conflict
- More restrictive than healthcare proxy`,
      keyTerms: [
        { term: 'precedent autonomy', definition: 'Concept that decisions made while capable should be honored even after losing capacity' },
        { term: 'psychiatric advance directive', definition: 'Document expressing preferences for mental health treatment during future crises' },
        { term: 'guardianship', definition: 'Court-appointed decision-maker for someone who lacks capacity and has no surrogate' },
        { term: 'AWV', definition: 'Annual Wellness Visit - Medicare preventive visit that includes advance care planning' },
      ],
      clinicalNotes: 'Support surrogates - they need guidance, not just questions. When proxy decisions seem unreasonable, explore before assuming bad intent. Capacity to complete an AD is lower than capacity for complex decisions. Build systems that flag patients without ADs and prompt discussion.',
    },
    5: {
      level: 5,
      summary: 'Expert-level practice encompasses leadership in advance care planning policy, health system transformation, legal-ethical consultation, research contributions, and advocacy for equity in advance care planning access.',
      explanation: `## Expert Practice and Leadership

### Legal-Ethical Expertise

**Complex Consultation Scenarios**
- AD that predates current medical advances
- Conflict between AD and best interests
- Surrogate making decisions perceived as harmful
- Cultural values conflicting with AD framework
- Emergency without accessible AD

**Ethics Committee Leadership**
- Case consultation for AD conflicts
- Policy development
- Education for staff
- Quality improvement

### Health System Transformation

**Building ACP Infrastructure**
1. EMR integration and optimization
2. Workflow integration (primary care, specialty, hospital)
3. Facilitator training and deployment
4. Quality metrics and dashboards
5. Community partnerships
6. State registry integration

**Sustainability Model**
- Medicare ACP billing codes (99497, 99498)
- Staff time for conversations
- Ongoing training
- Quality improvement cycles

**Implementation Frameworks**
- PDSA cycles for improvement
- Stakeholder engagement
- Champion networks
- Culture change strategies

### Research and Evidence

**Key Questions**
- Does ACP completion improve outcomes?
- What ACP approaches are most effective?
- How to ensure AD adherence in emergencies?
- What are barriers to ACP in underserved populations?
- How to support surrogate decision-makers?

**Evidence Base**
- ACP improves goal-concordant care
- POLST adherence in emergencies demonstrated
- ACP conversations valued by patients/families
- ACP reduces family distress after death
- Costs of care not consistently reduced

### Policy and Advocacy

**State-Level Advocacy**
- POLST adoption and standardization
- Registry development
- Out-of-hospital DNR policies
- Default surrogate hierarchy reform

**Federal Initiatives**
- Medicare ACP billing codes
- Interoperability standards
- National registry discussions
- Research funding

**Equity in ACP**
- Disparities in AD completion by race, income, education
- Language access for ACP
- Cultural adaptation of materials
- Community-based approaches
- Trust-building in underserved communities

### Workforce Development

**Training Programs**
- Facilitator certification (Respecting Choices, etc.)
- Communication skills training
- Legal/ethical education
- Train-the-trainer models

**Competencies**
- Knowledge: AD types, legal requirements, clinical integration
- Skills: Facilitating conversations, documenting, counseling surrogates
- Attitudes: Patient-centered, culturally humble, ethically grounded

### Emerging Issues

**Technology and ACP**
- Online AD completion platforms
- Video advance directives
- AI-assisted prognostication
- Blockchain for portability
- Telehealth ACP facilitation

**Evolving Legal Landscape**
- Out-of-state AD recognition
- Electronic signature acceptance
- Digital storage and access
- POLST standardization across states

**Medical Aid in Dying**
- Intersection with advance directives
- State-specific legal frameworks
- AD cannot request MAID (in most states)
- MAID separate from withdrawal of treatment

### Quality and Safety

**High-Reliability ACP**
- Systematic identification of patients needing ACP
- Standardized documentation
- Communication across settings
- Closing the loop on AD activation

**Safety Concerns**
- AD not found in emergency
- AD misinterpreted
- Surrogate not reachable
- AD overridden inappropriately
- AD followed when patient has capacity and objects`,
      keyTerms: [
        { term: 'ACP billing codes', definition: 'Medicare codes 99497/99498 for reimbursement of advance care planning discussions' },
        { term: 'Respecting Choices', definition: 'Evidence-based advance care planning facilitation program from Gundersen Health' },
        { term: 'high-reliability ACP', definition: 'System-level approach to ensuring ACP occurs consistently and correctly' },
        { term: 'PDSA cycle', definition: 'Plan-Do-Study-Act quality improvement methodology' },
      ],
      clinicalNotes: `Expert-level practice:
1. Lead ethics committees in AD-related consultations
2. Build and sustain health system ACP programs
3. Advocate for equity in ACP access
4. Contribute to research on ACP effectiveness
5. Train and mentor ACP facilitators
6. Engage in policy development at state and national levels
7. Navigate most complex legal-ethical scenarios with wisdom`,
    },
  },

  media: [
    {
      id: 'advance-directive-types',
      type: 'diagram',
      filename: 'advance-directive-types.svg',
      title: 'Types of Advance Directives',
      description: 'Visual overview of healthcare proxy, living will, and POLST',
    },
  ],

  citations: [
    {
      id: 'psda-1990',
      type: 'article',
      title: 'Patient Self-Determination Act of 1990',
      source: 'U.S. Congress',
      url: 'https://www.congress.gov/bill/101st-congress/house-bill/4449',
    },
    {
      id: 'nih-acp',
      type: 'website',
      title: 'Advance Care Planning',
      source: 'National Institute on Aging',
      url: 'https://www.nia.nih.gov/health/advance-care-planning',
    },
  ],

  crossReferences: [
    { targetId: 'concept-goals-of-care', targetType: 'concept', relationship: 'related', label: 'Goals of Care Conversations' },
    { targetId: 'concept-living-wills', targetType: 'concept', relationship: 'child', label: 'Living Wills' },
    { targetId: 'concept-polst', targetType: 'concept', relationship: 'child', label: 'POLST Forms' },
    { targetId: 'concept-dnr-dni', targetType: 'concept', relationship: 'related', label: 'DNR/DNI Orders' },
  ],

  tags: {
    systems: ['palliative-care', 'legal'],
    topics: ['advance directives', 'healthcare proxy', 'advance care planning', 'living will', 'POLST'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default advanceDirectives;
