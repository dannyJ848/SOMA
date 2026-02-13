/**
 * POLST Forms - Educational Content
 *
 * Comprehensive content on Physician Orders for Life-Sustaining Treatment
 * (POLST) and related paradigm forms.
 */

import { EducationalContent } from '../../types';

export const polstForms: EducationalContent = {
  id: 'concept-polst',
  type: 'concept',
  name: 'POLST Forms',
  alternateNames: ['Physician Orders for Life-Sustaining Treatment', 'MOLST', 'POST', 'MOST', 'COLST'],

  levels: {
    1: {
      level: 1,
      summary: 'A POLST form is a special doctor\'s order that tells all healthcare providers what treatments you do or do not want, especially in an emergency.',
      explanation: `**What Is a POLST Form?**

POLST stands for "Physician Orders for Life-Sustaining Treatment." It is a bright-colored form (usually pink or green) that:
- Is filled out by your doctor WITH you
- Contains real medical orders (not just wishes)
- Tells emergency workers and hospital staff exactly what to do
- Follows you from place to place

**Who Needs a POLST?**

POLST is for people who:
- Have a serious illness
- Are frail or elderly
- Might have a medical emergency
- Want to make sure their wishes are followed

You do NOT need a POLST if you are young and healthy.

**What Does a POLST Form Cover?**

**Section A: CPR (If Your Heart Stops)**
- YES, attempt CPR
- NO, do not attempt CPR (Allow Natural Death)

**Section B: Medical Care**
- Full Treatment (try everything)
- Limited Treatment (some treatments, go to hospital)
- Comfort-Focused Treatment (stay comfortable, usually no hospital)

**Section C: Artificial Nutrition**
- Whether you want a feeding tube if you cannot eat

**How Is POLST Different from Other Forms?**

| POLST | Living Will/Advance Directive |
|-------|------------------------------|
| Doctor's orders | Your wishes |
| Works right away | Works when you cannot speak |
| For seriously ill people | For all adults |
| Bright colored form | Regular paper |
| EMS must follow it | EMS may not follow it |

**How Do I Get a POLST?**

1. Talk to your doctor about your illness and what you want
2. Together, fill out the form
3. Both you and your doctor sign it
4. Keep the original where it can be found (refrigerator, front of chart)
5. Give copies to your family and caregivers`,
      keyTerms: [
        { term: 'POLST', definition: 'A special form with doctor\'s orders about what treatments you want in an emergency' },
        { term: 'life-sustaining treatment', definition: 'Medical treatments that keep you alive when you are very sick' },
        { term: 'comfort-focused treatment', definition: 'Care that helps you feel as comfortable as possible' },
      ],
      analogies: [
        'A POLST is like a permission slip that follows you everywhere - it tells anyone who takes care of you exactly what you want.',
        'Think of POLST like a prescription that never expires - wherever you go, healthcare workers will know what to do.',
      ],
      examples: [
        'A person with advanced heart failure might have a POLST that says no CPR but yes to going to the hospital for breathing help.',
        'Someone with end-stage cancer might have a POLST saying comfort care only - no hospital, just keep them comfortable at home.',
      ],
    },
    2: {
      level: 2,
      summary: 'POLST (Physician Orders for Life-Sustaining Treatment) is a portable medical order form for patients with serious illness that translates patient preferences into actionable orders across care settings.',
      explanation: `## Understanding POLST

### What Is POLST?

POLST is a medical order form that:
- Documents treatment preferences as actionable orders
- Is completed by a healthcare provider with the patient
- Is designed for patients with serious illness
- Travels with the patient across settings
- Must be followed by healthcare providers, including EMS

### The POLST Paradigm

**National POLST Program**
- Standardized approach across states
- Similar forms with different names by state:
  - POLST (many states)
  - MOLST (New York, etc.)
  - POST (West Virginia, etc.)
  - MOST (North Carolina, etc.)
  - COLST (Colorado)

### Who Should Have a POLST?

**Appropriate Patients**
- Serious illness or frailty
- Prognosis of approximately 1-2 years or less
- Current health status warrants planning for emergencies

**NOT For**
- Healthy adults
- People who want full treatment (POLST not needed)
- Substitute for advance directives in healthy people

### POLST Form Sections

**Section A: Resuscitation**
- Attempt CPR/Resuscitation
- Do Not Attempt CPR/Allow Natural Death

**Section B: Medical Interventions**
- Full Treatment: Use all available treatments, ICU, intubation
- Selective/Limited Treatment: Hospitalize, IV fluids/antibiotics, but avoid ICU/intubation
- Comfort-Focused Treatment: Manage symptoms, usually no hospitalization

**Section C: Artificial Nutrition**
- Long-term (PEG tube) vs. trial period vs. no artificial nutrition
- Often most complex section

### How POLST Is Different from Advance Directives

| Feature | POLST | Advance Directive |
|---------|-------|-------------------|
| Document type | Medical orders | Legal document |
| Who completes | Provider + patient | Patient (or with lawyer) |
| When active | Immediately | When patient lacks capacity |
| Scope | Specific treatments | General preferences |
| Portability | Designed to travel | May not be available |
| Following required | Yes, medical orders | Guide for decision-making |
| Population | Seriously ill | All adults |

### The POLST Process

**Having the Conversation**
1. Clinician explains current health status
2. Discuss prognosis and what to expect
3. Explore patient values and goals
4. Discuss treatment options
5. Complete form together
6. Patient (or surrogate) and provider sign

**Form Management**
- Keep original with patient (posted, chart front)
- Copy to medical record
- Update state registry if available
- Review when health status changes
- Can void and complete new form anytime

### POLST and Emergency Medical Services (EMS)

- EMS personnel trained to recognize POLST
- Must follow orders on valid POLST form
- Gives legal protection for not resuscitating
- Must have original or state-recognized copy
- Verbal rescinding of DNR generally accepted`,
      keyTerms: [
        { term: 'POLST paradigm', definition: 'The national program promoting portable medical orders for seriously ill patients' },
        { term: 'portable orders', definition: 'Medical orders that transfer across different care settings' },
        { term: 'comfort-focused treatment', definition: 'POLST category prioritizing symptom management over life-prolonging interventions' },
        { term: 'EMS', definition: 'Emergency Medical Services - paramedics and ambulance services' },
      ],
      analogies: [
        'POLST is like a medical passport - it contains your healthcare "credentials" that are recognized wherever you go.',
      ],
    },
    3: {
      level: 3,
      summary: 'POLST implementation requires understanding of appropriate patient populations, clinical conversation techniques, proper form completion, regulatory requirements, and quality assurance processes.',
      explanation: `## POLST: Clinical Framework

### Patient Selection

**National POLST Recommendations**
POLST is appropriate when any of these apply:
- Surprise Question negative: "Would not be surprised if died within 1 year"
- Advanced illness (cancer, COPD, CHF, ESRD, dementia)
- Increasing frailty
- Frequent hospitalizations
- Nursing home residence

**Not Appropriate For**
- Healthy individuals
- Those who want full treatment (no orders needed)
- Minors (usually; some states have pediatric versions)
- Substitute for goals of care discussions

### Clinical Conversation

**Conducting the POLST Conversation**
1. **Prepare**: Review medical history, prognosis, prior goals discussions
2. **Set Up**: Explain purpose of POLST, confirm who should be present
3. **Assess Understanding**: What does patient know about their illness?
4. **Share Prognosis**: If patient wishes, share realistic expectations
5. **Explore Values**: What matters most? What would be unacceptable?
6. **Discuss Options**: Review each POLST section in context of values
7. **Make Decisions**: Together, complete the form
8. **Document**: Sign, date, distribute

**Section-by-Section Guidance**

*Section A: CPR*
- Explain what CPR involves
- Share realistic outcomes for this patient
- If DNR, often guides Section B choices

*Section B: Medical Interventions*
- Full Treatment: ICU, intubation, full code
- Selective Treatment: Hospitalize, IV, antibiotics; avoid ICU/intubation
- Comfort-Focused: Symptom management, usually no hospital

*Section C: Artificial Nutrition*
- Most nuanced section
- Trial vs. long-term
- Evidence in various conditions
- Cultural/religious considerations

### Legal and Regulatory Framework

**State Variations**
- Form name and design
- Who can sign (MD, DO, NP, PA varies)
- Surrogate signature requirements
- Registry systems
- Reciprocity across state lines

**Legal Protection**
- Providers protected when following valid POLST
- Good faith standard
- Must have properly completed form
- Original or state-recognized copy required

### Quality Assurance

**Best Practices**
- Form matches goals of care discussion
- Patient (or appropriate surrogate) signature
- Provider signature (authorized signer)
- Current and reflects current health status
- Properly stored and accessible

**Common Problems**
- Form completed without conversation
- Section B doesn't match Section A
- Surrogate signs when patient has capacity
- Outdated form doesn't reflect changes
- Form not available when needed

### POLST in Care Transitions

**Key Transitions**
- Hospital to home/SNF
- SNF to hospital
- Home to hospice
- Any emergency

**Communication**
- Share POLST at transitions
- Verify form is current
- Copy in medical record
- Visible to all providers
- Update registry if applicable

### Relationship to Other Documents

**POLST + Advance Directive**
- Both recommended
- Advance directive for healthy individuals
- POLST when serious illness develops
- POLST more specific and actionable
- Both contribute to goals of care

**POLST + Hospice**
- POLST not required for hospice
- But often aligned with hospice philosophy
- Usually Section A: DNR, Section B: Comfort
- May still have POLST in hospice`,
      keyTerms: [
        { term: 'Surprise Question', definition: 'Screening tool asking if death within a year would be surprising' },
        { term: 'selective treatment', definition: 'POLST category allowing hospitalization and some treatments, avoiding ICU/intubation' },
        { term: 'care transition', definition: 'Movement of patient between care settings or providers' },
        { term: 'POLST registry', definition: 'State database storing POLST forms for access by healthcare providers' },
      ],
      clinicalNotes: 'POLST requires a conversation, not just form completion. Section B should logically follow from Section A and patient goals. Use the Surprise Question to identify appropriate patients. Ensure POLST travels with patient at every transition. Update when clinical status or preferences change.',
    },
    4: {
      level: 4,
      summary: 'Advanced POLST practice involves navigating complex clinical scenarios, managing conflicts and revisions, understanding regulatory nuances, and leading quality improvement initiatives.',
      explanation: `## Advanced POLST Considerations

### Complex Clinical Scenarios

**POLST for Dementia**
- Capacity assessment is key
- Early-stage: Patient can participate
- Mid/late-stage: Surrogate decision-making
- Evidence base for treatments in advanced dementia
- FAST Stage 7 considerations

**POLST and Surgery**
- "Required reconsideration" concept
- May suspend during perioperative period
- Time-limited suspension
- Document discussions
- Resume post-procedure

**Conflicting POLST and Advance Directive**
- POLST is more recent and specific
- Generally POLST takes precedence
- But explore discrepancies
- May need new goals of care discussion

**Patient Requests Full Treatment but has Poor Prognosis**
- Honor patient autonomy
- Ensure realistic expectations
- Document discussion
- May still complete POLST for full treatment
- Revisit as illness progresses

### Surrogate Decision-Making on POLST

**When Surrogate Signs**
- Patient lacks capacity
- Appropriate surrogate identified
- Substituted judgment standard
- Document surrogate relationship and basis

**Surrogate Hierarchy (typical)**
1. Healthcare agent/proxy
2. Court-appointed guardian
3. Spouse/domestic partner
4. Adult child
5. Parent
6. Sibling
7. Other relative/close friend

**Surrogate Challenges**
- Disagreement among family
- Surrogate making choices that seem harmful
- Surrogate unavailable
- When to seek guardianship

### POLST Revision and Voiding

**When to Update**
- Change in health status
- Change in patient preferences
- After hospitalization
- At care transitions
- Regularly (annually or per state guidance)

**Voiding a POLST**
- Draw line through form and write VOID
- Destroy copies if possible
- Document in medical record
- Complete new form if needed

**Patient Changes Mind**
- Oral revocation generally valid
- Document immediately
- Complete new POLST or void old one

### Regulatory and Legal Nuances

**Who Can Sign**
- Varies by state (MD, DO, NP, PA)
- Some states require MD/DO
- Know your state requirements
- Tele-health completion (state-specific)

**Electronic POLST**
- Emerging in some states
- Registry integration
- Authenticity assurance
- Access considerations

**Interstate POLST**
- No guaranteed reciprocity
- Many states accept out-of-state
- Best practice: Complete new form in new state
- Carry explanation of POLST with traveler

### Quality Improvement

**Metrics**
- POLST completion rates (for appropriate patients)
- Conversation quality indicators
- Form completeness
- Alignment of care with POLST orders
- Family/surrogate satisfaction

**Common Quality Issues**
- POLST without goals conversation
- Form completed by staff, not provider
- Missing signatures
- Section inconsistencies
- Outdated forms

**Improvement Strategies**
- EMR integration
- Trigger-based reminders
- Staff education
- Audit and feedback
- Family engagement

### Ethical Considerations

**Informed Consent for POLST**
- Patient/surrogate must understand choices
- Realistic prognostic information
- Values-concordant decision
- Not coerced

**When Clinician Disagrees with Choice**
- Share perspective
- Explore patient values
- May complete POLST for full treatment
- Document discussion

**POLST and Moral Distress**
- Staff distress when care seems non-beneficial
- Importance of goals conversation, not just form
- Support for healthcare team`,
      keyTerms: [
        { term: 'required reconsideration', definition: 'Policy to review DNR/POLST status before surgery or procedures' },
        { term: 'substituted judgment', definition: 'Surrogate deciding based on what patient would have wanted' },
        { term: 'FAST Stage 7', definition: 'Advanced dementia stage with minimal function, appropriate for POLST' },
        { term: 'electronic POLST', definition: 'Digital POLST forms integrated with registries and EHRs' },
      ],
      clinicalNotes: 'Know your state\'s specific POLST requirements. Required reconsideration before procedures. Update POLST at care transitions and status changes. When conflict arises, return to goals of care conversation. Quality improvement should focus on conversation quality, not just completion rates.',
    },
    5: {
      level: 5,
      summary: 'Expert-level practice encompasses leadership in POLST program development, policy advocacy, research contributions, quality metrics development, and addressing systemic challenges in POLST implementation.',
      explanation: `## Expert Practice and Program Leadership

### POLST Program Development

**State Program Implementation**
- Coalition building (medical, legal, advocacy groups)
- Legislative and regulatory framework
- Form design and standardization
- Training curriculum development
- Registry development
- Quality assurance processes
- Sustainability planning

**National POLST Standards**
- Form content and format
- Appropriate patient population
- Conversation standards
- Quality assurance
- Registry standards

### Policy and Advocacy

**State Policy Issues**
- Scope of practice for form completion
- Surrogate signature authority
- Registry implementation and funding
- EMS protocols
- Facility requirements

**National Issues**
- Interstate recognition
- CMS expectations
- Interoperability standards
- Research funding
- Workforce development

### Research Agenda

**Key Questions**
- Does POLST improve goal-concordant care?
- What are POLST completion barriers?
- How accurate is POLST in emergencies?
- What conversation approaches work best?
- How should POLST registries function?

**Evidence Base**
- POLST orders generally followed
- Most POLST patients have preferences other than full treatment
- Concerns about completion without conversation
- Registry access improves availability
- Quality varies widely

### Quality Metrics Development

**Structure Measures**
- POLST program exists
- Training available
- Registry functional
- EMS protocols updated

**Process Measures**
- Completion rate for appropriate patients
- Conversation documentation
- Form completeness
- Signature requirements met
- Regular review/updating

**Outcome Measures**
- Goal-concordant care
- Unwanted hospitalizations
- Unwanted resuscitation attempts
- Patient/family satisfaction
- Healthcare utilization

### Technology and Innovation

**Electronic POLST (ePOLST)**
- Integration with EHR
- Digital signatures
- Registry auto-population
- Cross-platform access
- Interoperability challenges

**Registry Development**
- State-based registries
- Provider access mechanisms
- Patient/family access
- Data security
- Integration with other systems

### Workforce Development

**Training Needs**
- Clinical conversation skills
- Prognostic communication
- Cultural competency
- Form completion mechanics
- Legal requirements

**Competency Assessment**
- Knowledge of POLST purpose and use
- Conversation skills
- Documentation quality
- Appropriate patient identification

### Addressing Systemic Challenges

**Equity Considerations**
- Access to POLST conversations
- Language barriers
- Cultural appropriateness
- Implicit bias in recommendations
- Health literacy

**Misuse Prevention**
- POLST without conversation
- Coercion or pressure
- Failure to update
- Inappropriate population (healthy individuals)
- Surrogate misunderstanding

**Emergency Setting Challenges**
- Form availability
- Verification of authenticity
- Time pressure
- Family presence
- Transition communication

### Ethical Leadership

**Balancing Autonomy and Protection**
- Respecting patient choices
- Preventing coerced DNR
- Ensuring informed decisions
- Protecting vulnerable populations

**Research Ethics**
- Studying seriously ill populations
- Outcome measure selection
- Retrospective vs. prospective studies
- Community engagement

### Future Directions

**Evolving Paradigm**
- Beyond form-focused to conversation-focused
- Integration with serious illness care
- Community-based implementation
- Technology-enhanced approaches

**National Coordination**
- POLST standardization
- Registry interoperability
- Research collaboration
- Policy harmonization`,
      keyTerms: [
        { term: 'National POLST', definition: 'National organization providing standards and support for state POLST programs' },
        { term: 'ePOLST', definition: 'Electronic POLST with digital completion and registry integration' },
        { term: 'goal-concordant care', definition: 'Healthcare aligned with patient\'s stated values and preferences' },
        { term: 'interoperability', definition: 'Ability of different systems to exchange and use information' },
      ],
      clinicalNotes: `Expert-level practice:
1. Lead state or institutional POLST program development
2. Advocate for policy supporting POLST effectiveness
3. Develop and track quality metrics
4. Contribute to research on POLST outcomes
5. Train and mentor clinicians in POLST conversations
6. Address equity and access issues
7. Navigate technology and registry implementation
8. Engage in national POLST community`,
    },
  },

  media: [
    {
      id: 'polst-form-example',
      type: 'diagram',
      filename: 'polst-form-example.svg',
      title: 'POLST Form Overview',
      description: 'Visual representation of POLST form sections and options',
    },
  ],

  citations: [
    {
      id: 'national-polst',
      type: 'website',
      title: 'National POLST',
      source: 'National POLST',
      url: 'https://polst.org/',
    },
    {
      id: 'polst-evidence',
      type: 'article',
      title: 'POLST: An Improvement over Traditional Advance Directives',
      authors: ['Hickman, S.E.', 'Keevern, E.', 'Hammes, B.J.'],
      source: 'Cleveland Clinic Journal of Medicine',
      url: 'https://doi.org/10.3949/ccjm.81a.14012',
    },
  ],

  crossReferences: [
    { targetId: 'concept-advance-directives', targetType: 'concept', relationship: 'parent', label: 'Advance Directives' },
    { targetId: 'concept-dnr-dni', targetType: 'concept', relationship: 'related', label: 'DNR/DNI Orders' },
    { targetId: 'concept-goals-of-care', targetType: 'concept', relationship: 'related', label: 'Goals of Care' },
    { targetId: 'concept-palliative-vs-hospice', targetType: 'concept', relationship: 'related', label: 'Palliative vs Hospice Care' },
  ],

  tags: {
    systems: ['palliative-care', 'emergency-medicine'],
    topics: ['POLST', 'advance care planning', 'medical orders', 'end-of-life'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default polstForms;
