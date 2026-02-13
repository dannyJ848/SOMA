/**
 * Hospice Referral - Educational Content
 *
 * Comprehensive content on hospice care referral process,
 * eligibility, and integration with palliative care.
 */

import { EducationalContent } from '../../types';

export const hospiceReferral: EducationalContent = {
  id: 'concept-hospice-referral',
  type: 'concept',
  name: 'Hospice Referral',
  nameEs: 'Referencia a Hospicio',
  alternateNames: ['Hospice Admission', 'Hospice Enrollment', 'Transition to Hospice'],

  levels: {
    1: {
      level: 1,
      summary: 'A hospice referral is when your doctor suggests hospice care, which focuses on comfort and quality of life when curing an illness is no longer possible.',
      explanation: `**What Is Hospice?**

Hospice is special care for people who are very sick and not going to get better. The focus is on:
- Being comfortable and free from pain
- Having the best quality of life possible
- Supporting both patient and family
- Helping with emotional and spiritual needs
- Allowing people to be at home if they want

**What Is a Hospice Referral?**

A hospice referral happens when:
- Your doctor thinks hospice would help you
- The focus of care changes from curing to comfort
- Someone from hospice comes to meet you
- You decide if you want hospice services

**Who Qualifies for Hospice?**

To get hospice care:
- A doctor must believe you have about 6 months or less to live
- The focus of care should be comfort, not curing
- You or your family must agree to hospice care

**Where Does Hospice Care Happen?**

- At home (most common)
- In a nursing home
- In a special hospice facility
- Sometimes in the hospital

**What Does Hospice Provide?**

**Medical Care**
- Doctors and nurses who visit regularly
- Help with pain and other symptoms
- Medical equipment (oxygen, hospital bed)
- Medications for comfort

**Support Services**
- Help with bathing and dressing
- Counseling and emotional support
- Spiritual support if you want it
- Support for family members

**Choosing Hospice Does NOT Mean**
- Giving up hope
- Getting no medical care
- Hurrying death
- Being abandoned

It DOES mean:
- Focusing on comfort
- Having extra support
- Living as fully as possible
- Being at peace with your situation`,
      keyTerms: [
        { term: 'hospice', definition: 'Special medical care for people with serious illness focusing on comfort and quality of life' },
        { term: 'referral', definition: 'When your doctor sends you to a special service like hospice' },
        { term: 'terminal illness', definition: 'An illness that cannot be cured and will likely lead to death' },
        { term: 'quality of life', definition: 'How good someone\'s life is day to day, including comfort and ability to do things' },
        { term: 'comfort care', definition: 'Medical care focused on relieving pain and symptoms rather than curing disease' },
        { term: 'palliative care', definition: 'Specialized medical care that helps with pain, symptoms, and stress of serious illness' },
      ],
      analogies: [
        'Hospice is like having a warm, supportive blanket wrapped around you during a difficult time - it doesn\'t change the situation, but it makes you much more comfortable.',
        'Think of hospice care like a dedicated team that comes to your home to make sure you have everything you need to be as comfortable as possible.',
      ],
      examples: [
        'Someone with advanced cancer whose treatments are no longer working might choose hospice to focus on being comfortable at home with family.',
        'A person with end-stage heart disease who has frequent hospital visits might choose hospice to avoid more hospital stays and stay home.',
      ],
    },
    2: {
      level: 2,
      summary: 'Hospice referral is the process of transitioning to comfort-focused care when a patient has a terminal prognosis of approximately six months or less, involving eligibility assessment and interdisciplinary support.',
      explanation: `## Understanding Hospice Referral

### Hospice Eligibility

**Medicare Hospice Benefit Criteria**
- Terminal illness with prognosis of 6 months or less
- Focus on comfort rather than cure
- Willingness to forego curative treatments
- (Similar criteria for Medicaid and most private insurance)

**Common Hospice Diagnoses**
- Cancer (all types)
- Heart disease (CHF, cardiomyopathy)
- Lung disease (COPD, pulmonary fibrosis)
- Dementia (advanced stages)
- Stroke/coma
- Liver disease
- Kidney disease (not seeking dialysis)
- ALS and other neurological diseases
- HIV/AIDS

### The Referral Process

**Making the Referral**
1. Prognosis determination (usually by attending physician)
2. Discussion with patient/family about hospice
3. Consent for referral
4. Contact chosen hospice agency
5. Hospice schedules admission visit

**Hospice Admission Visit**
- Comprehensive nursing assessment
- Review of medical history
- Medication reconciliation
- Discussion of goals and preferences
- Equipment and supply needs
- Team member introductions

**Timing of Referral**
- Earlier is generally better
- Allows relationship building
- Prevents crises
- More time for patient and family preparation
- Many patients enroll too late (within days of death)

### Hospice Services

**Core Services Required by Medicare**
- Physician services (medical director and attending)
- Nursing care (regular visits, 24/7 phone availability)
- Medical equipment and supplies
- Medications for terminal illness and related conditions
- Home health aide services
- Physical, occupational, speech therapy as needed
- Social work services
- Chaplaincy services
- Bereavement support for family

**Levels of Hospice Care**
1. **Routine Home Care**: Regular care at home or residence
2. **Continuous Home Care**: Crisis care at home (nursing 8+ hours/day)
3. **General Inpatient Care**: Symptom management in facility
4. **Respite Care**: Temporary relief for caregivers (up to 5 days)

### Discussing Hospice with Patients

**Key Elements**
- Frame as bringing in additional support
- Emphasize what hospice adds, not just what it replaces
- Acknowledge emotional difficulty of transition
- Allow questions and concerns
- Respect patient autonomy

**Common Patient Concerns**
- "Does this mean I'm giving up?"
- "Will I still see my regular doctor?"
- "What if I get better?"
- "Will I be in pain?"
- "Can I change my mind later?"`,
      keyTerms: [
        { term: 'terminal prognosis', definition: 'Expected outcome that life will end within a certain timeframe, usually 6 months for hospice' },
        { term: 'Medicare Hospice Benefit', definition: 'Insurance coverage for hospice care for eligible Medicare beneficiaries' },
        { term: 'bereavement support', definition: 'Grief counseling and support services for family after a patient dies' },
        { term: 'respite care', definition: 'Short-term care to give family caregivers a break' },
        { term: 'interdisciplinary team', definition: 'A group of different healthcare professionals who work together to coordinate patient care' },
        { term: 'medication reconciliation', definition: 'The process of comparing all current medications to identify and resolve conflicts' },
      ],
      analogies: [
        'Hospice referral is like calling in a specialized team when the situation becomes too complex for general management - they bring expertise and resources.',
        'Think of hospice as shifting from trying to fix every problem to focusing on making each day as comfortable and meaningful as possible.',
      ],
    },
    3: {
      level: 3,
      summary: 'Hospice referral requires accurate prognostication, understanding of hospice eligibility criteria, effective communication about goals of care, knowledge of insurance requirements, and coordination with hospice agencies.',
      explanation: `## Clinical Practice: Hospice Referral

### Prognostication for Hospice Eligibility

**General Prognostic Indicators**
- Progressive decline despite optimal therapy
- Functional decline (increasing dependence)
- Recurrent hospitalizations
- Weight loss and declining nutritional status
- Increasing symptom burden

**Diagnosis-Specific Guidelines**

*Cancer*
- Metastatic or locally advanced
- Progressive despite treatment
- Declining performance status (ECOG 3-4)
- PPS < 70%

*Heart Failure*
- NYHA Class IV
- Recurrent admissions for heart failure
- Ejection fraction < 20%
- Refusing or declining further cardiac interventions

*COPD*
- Severe obstruction (FEV1 < 30% predicted)
- Home oxygen dependent
- Recurrent exacerbations
- Weight loss and declining function
- Cor pulmonale

*Dementia*
- Functional Assessment Staging 7a or higher
- Unable to ambulate, dress, or bathe independently
- Minimal verbal communication
- Incontinence of bowel and bladder
- Complications (pneumonia, pressure ulcers, sepsis)

### Medicare Hospice Benefit Requirements

**Certification Requirements**
- Medical director certifies 6-month prognosis
- Attending physician agrees with prognosis
- Recertification required every 90 days (first two periods)
- Then every 60 days

**Documentation**
- Specific diagnosis indicating life-limiting illness
- Clinical findings supporting prognosis
- Decline trajectory documented
- Comorbidities considered

**What Hospice Covers**
- All care related to terminal illness
- Medications for comfort
- Medical equipment
- Supplies (diapers, gloves, etc.)
- Therapy services as needed
- Inpatient respite (5 days per episode)
- Bereavement support (13 months)

**What Hospice Does NOT Cover**
- Treatment aimed at cure
- Care for unrelated conditions
- Room and board (except inpatient for symptom management)
- Emergency services (for non-terminal conditions)

### Communication Strategies

**Framing the Conversation**
- "Hospice brings additional support"
- "Special care focused on comfort"
- "Can be provided at home"
- "You can change your mind"

**NURSE for Emotions**
- **N**aming: "I can see this is difficult"
- **U**nderstanding: "It's overwhelming to think about"
- **R**especting: "You've been so strong"
- **S**upporting: "We'll support you whatever you decide"
- **E**xploring: "Tell me more about your concerns"

**Exploring Readiness**
- "What is your understanding of your illness?"
- "What are you hoping for?"
- "What would be most important in the coming months?"
- "How do you feel about focusing on comfort?"

### Common Barriers to Referral

**Patient/Family Barriers**
- Perception of "giving up"
- Hope for a miracle
- Fear of abandonment
- Misunderstanding about hospice
- Family disagreement

**Clinician Barriers**
- Difficulty with prognosis
- Sense of failure
- Concern about patient reaction
- Time constraints
- Lack of familiarity with hospice

**System Barriers**
- Financial incentives for active treatment
- Fragmented care
- Lack of hospice relationships
- Regulatory burdens

### Coordination with Hospice

**Information to Provide**
- Reason for referral
- Relevant diagnoses and comorbidities
- Current medications
- Recent hospitalizations
- Family contacts
- Goals of care
- Advance directive status

**Follow-Up After Referral**
- Confirm hospice admission
- Continue involvement as attending physician
- Communicate with hospice team
- Adjust care plan as needed

### Reversing Hospice Election

**Patient Can Revoke**
- At any time, for any reason
- Returns to regular Medicare coverage
- May re-enroll later if eligible

**Common Reasons for Revocation**
- Patient feeling better
- Wanting to pursue new treatment
- Dissatisfaction with hospice
- Family pressure`,
      keyTerms: [
        { term: 'PPS', definition: 'Palliative Performance Scale - measure of functional status in palliative care' },
        { term: 'ECOG', definition: 'Eastern Cooperative Oncology Group performance status - measures patient function' },
        { term: 'NYHA Class IV', definition: 'Most severe heart failure - symptoms at rest' },
        { term: 'cor pulmonale', definition: 'Right heart failure caused by lung disease' },
        { term: 'NURSE framework', definition: 'Communication framework for responding to patient emotion: Name, Understand, Respect, Support, Explore' },
        { term: 'Functional Assessment Staging', definition: 'Tool used to stage dementia severity, guiding prognosis and hospice eligibility' },
      ],
      clinicalNotes: 'Prognosis is challenging - use clinical guidelines but recognize uncertainty. Earlier referral allows better support. Always frame hospice as bringing resources, not taking away care. Document prognosis carefully for certification requirements. Continue as attending physician if desired.',
    },
    4: {
      level: 4,
      summary: 'Advanced hospice referral practice involves managing complex prognostic uncertainty, navigating difficult conversations about end of life, understanding regulatory requirements, and coordinating transitions while maintaining therapeutic relationships.',
      explanation: `## Advanced Hospice Referral Practice

### Complex Prognostic Scenarios

**Uncertain Prognosis**
- Use "time-limited trial" of hospice
- Explain uncertainty honestly
- Focus on current quality of life
- Recertification will clarify trajectory

**"Hospice-Appropriate" Patients Not Enrolling**
- Explore barriers respectfully
- Revisit hospice information
- Address specific concerns
- May need multiple conversations
- Consider palliative care as bridge

**Requesting Hospice Too Late**
- Recognize patterns (last days of life)
- Still refer if possible
- Rapid response available
- Focus on family support
- Provide grief resources

### Regulatory and Legal Considerations

**Certification Requirements**
- Initial certification by hospice medical director
- Attending physician statement of prognosis
- Face-to-face visit required for third and later periods
- Detailed documentation of eligibility

**Common Audit Triggers**
- Long lengths of stay
- Live discharges (revocations)
- Certain diagnoses (dementia, debility)
- Inconsistent documentation

**Appropriate vs. Inappropriate Practices**
| Appropriate | Inappropriate |
|-------------|---------------|
| Honest prognosis discussion | Promising specific timeframes |
| Respecting patient autonomy | Pressuring toward hospice |
| Continuing appropriate care | Abandoning patient |
| Billing appropriately | Upcoding for reimbursement |
| Providing symptom management | Withholding comfort care |

### Communication Challenges

**When Patient/Family Not Ready**
- Do not force the conversation
- Plant seeds for future consideration
- Continue to focus on goals of care
- Reassess readiness periodically
- Involve palliative care if available

**When Family Disagrees**
- Facilitate family meeting
- Focus on patient values and wishes
- Explore sources of disagreement
- Consider ethics consultation
- Support surrogates making difficult decisions

**Discussing Prognosis Honestly**
- Use ranges: "weeks to months" rather than "3 months"
- Acknowledge uncertainty explicitly
- Frame around function and quality of life
- Check understanding
- Allow emotional response

### Special Populations

**Pediatrics**
- Different hospice eligibility criteria
- Concurrent care allowed (hospice + curative)
- Longer anticipated survival considered appropriate
- Family-centered care model
- Specialized pediatric hospice programs

**Non-Cancer Diagnoses**
- More prognostic uncertainty
- "Terminal" phase may be shorter
- May have exacerbations and recovery
- Need to explain variability clearly
- hospice appropriate when in declining phase

**Patients Without Caregivers**
- Home care may not be feasible
- Consider hospice facilities
- Nursing home hospice
- Group home options
- May limit hospice options

### Coordination and Transitions

**Maintaining Therapeutic Relationship**
- Continue as attending physician if desired
- Coordinate with hospice medical director
- Remain involved in care decisions
- Provide continuity for patient and family

**Information Transfer**
- Complete history and recent summaries
- Current medications and doses
- Goals of care discussions
- Family dynamics and concerns
- Advance directives

**After Enrollment**
- Confirm admission and initial plan
- Communicate with hospice team
- Remain available for questions
- Adjust to new care coordination model

### Outcomes and Quality

**Timing Indicators**
- Days of hospice care before death
- Longer hospice stays associated with:
  - Better symptom control
  - Increased home death
  - Higher family satisfaction
  - Lower healthcare costs

**Quality Metrics**
- Hospice enrollment rate before death
- Average length of stay
- Place of death (home vs. hospital)
- Family satisfaction with end-of-life care
- Rehospitalization after hospice enrollment`,
      keyTerms: [
        { term: 'live discharge', definition: 'Patient leaves hospice alive (revocation or long-term survival)' },
        { term: 'concurrent care', definition: 'Receiving both hospice and curative treatments simultaneously (for pediatrics)' },
        { term: 'face-to-face visit', definition: 'Required in-person assessment for hospice recertification after 180 days' },
        { term: 'time-limited trial', definition: 'Agreement to try an intervention for defined period with planned reassessment' },
        { term: 'prognostic uncertainty', definition: 'Difficulty in predicting the course and timeline of a life-limiting illness' },
        { term: 'surrogate decision-maker', definition: 'Person authorized to make healthcare decisions when the patient cannot' },
      ],
      clinicalNotes: 'Prognosis remains an inexact science - use guidelines but recognize individual variation. Document thoroughly for certification requirements. Earlier referral generally leads to better outcomes. Continue involvement with enrolled patients - hospice is an additional layer of care, not abandonment.',
    },
    5: {
      level: 5,
      summary: 'Expert-level hospice referral practice encompasses leadership in end-of-life care systems, research on referral patterns and outcomes, advocacy for policy reform, and advancing access to quality hospice care across diverse populations.',
      explanation: `## Expert Practice and System Leadership

### Research and Evidence

**Referral Patterns**
- Median hospice stay: ~17 days
- Many enroll in last 3 days of life
- Earlier referral associated with better outcomes
- Disparities by race, ethnicity, diagnosis
- Geographic variation in utilization

**Barriers to Timely Referral**
- Clinician prognostic discomfort
- Patient and family misconceptions
- Financial incentives for treatment
- Fragmented healthcare systems
- Cultural factors

**Impact of Early Referral**
- Improved symptom management
- Increased home deaths
- Higher family satisfaction
- Reduced ICU and hospital utilization
- Lower costs without worse survival

### Health System Design

**Hospice Integration Programs**
- Early palliative care leading to hospice
- Systematic identification of eligible patients
- EMR triggers for hospice discussions
- Standardized referral processes
- Quality metrics tracking

**Improving Referral Rates**
- Education for referring clinicians
- Prognostication tools and support
- Palliative care consultation integration
- Feedback on referral patterns
- Best practice dissemination

**Transitional Care Models**
- Bridge programs for uncertain prognosis
- Concurrent care models
- Palliative care to hospice pathways
- Hospital to home hospice transitions

### Policy and Advocacy

**Current Policy Issues**
- Medicare hospice benefit reform
- Concurrent care for non-pediatric patients
- Pre-hospice or bridge programs
- Payment reform for serious illness care
- Quality measure development

**Advocacy Priorities**
- Expand concurrent care
- Reduce regulatory burdens
- Improve hospice payment rates
- Expand hospice access in underserved areas
- Support family caregivers

**Ethical Considerations**
- Justice and access disparities
- Resource allocation
- Appropriateness criteria
- Balancing hope and realism

### Specialized Models

**Pediatric Concurrent Care**
- Affordable Care Act provision
- Children can receive curative and hospice simultaneously
- Reduced barriers to enrollment
- Better support for families
- Model for adult concurrent care

**Heart Failure-Specific Programs**
- Recognizing end-stage trajectory
- Managing device deactivation
- Navigating transplant vs. hospice
- Disease-specific prognostication

**Dementia Pathways**
- Earlier recognition of end-stage
- Family education on progression
- Nutrition and feeding decisions
- Managing behavioral symptoms

### Global Perspectives

**International Models**
- Variations in hospice philosophy
- Different funding mechanisms
- Cultural adaptations
- Integration with healthcare systems

**Cross-Cultural Adaptation**
- Respecting cultural beliefs about death
- Language-appropriate materials
- Community engagement
- Workforce diversity

### Future Directions

**Innovative Models**
- Outpatient hospice
- Telehealth hospice
- Community-based palliative care leading to hospice
- Specialized programs for specific diseases

**Research Priorities**
- Optimal timing of referral
- Concurrent care effectiveness
- Predictive models for prognosis
- Reducing disparities in access
- Improving referral communication

**Technology**
- Prognostic decision support
- Telehealth for hospice eligibility
- Remote monitoring for home hospice
- AI-assisted identification

### Training and Education

**Clinician Education**
- Communication skills training
- Prognostication workshops
- Hospice rotation requirements
- Continuing education

**Public Education**
- Hospice awareness campaigns
- Advance care planning
- Community partnerships
- Patient-facing resources

### Quality and Outcomes

**Measuring Referral Quality**
- Timing before death
- Patient and family satisfaction
- Goal-concordant care
- Symptom management outcomes
- Caregiver outcomes

**Benchmarking**
- Compare referral rates
- Length of stay distributions
- Diagnosis patterns
- Disparities assessment`,
      keyTerms: [
        { term: 'concurrent care model', definition: 'Providing curative treatments alongside hospice care' },
        { term: 'bridge program', definition: 'Transitional program between active treatment and hospice' },
        { term: 'healthcare utilization', definition: 'Use of healthcare services like hospitalizations, ER visits, ICU' },
        { term: 'disparities', definition: 'Unfair differences in access or outcomes based on race, income, geography' },
        { term: 'goal-concordant care', definition: 'Medical care that matches the patient\'s documented values and preferences' },
        { term: 'prognostic decision support', definition: 'Technology tools that help clinicians estimate disease trajectory and outcomes' },
      ],
      clinicalNotes: `Expert-level considerations:
1. Lead system initiatives to improve timely hospice referrals
2. Advocate for policy reforms including concurrent care
3. Research to improve prognostication and referral timing
4. Address disparities in hospice access and utilization
5. Develop innovative models bridging palliative care and hospice
6. Train next generation of clinicians in hospice referral
7. Use data to improve referral quality and timing`,
    },
  },

  media: [
    {
      id: 'hospice-referral-process',
      type: 'diagram',
      filename: 'hospice-referral-process.svg',
      title: 'Hospice Referral Process',
      description: 'Visual guide to the hospice referral and admission process',
    },
    {
      id: 'hospice-levels',
      type: 'diagram',
      filename: 'hospice-levels-of-care.svg',
      title: 'Hospice Levels of Care',
      description: 'Four levels of hospice care required by Medicare',
    },
  ],

  citations: [
    {
      id: 'medicare-hospice-benefit',
      type: 'website',
      title: 'Medicare Hospice Benefit',
      source: 'Centers for Medicare & Medicaid Services',
      url: 'https://www.cms.gov/Medicare/Medicare-benefit',
    },
    {
      id: 'nhpco-standards',
      type: 'website',
      title: 'Hospice Standards of Practice',
      source: 'National Hospice and Palliative Care Organization',
      url: 'https://www.nhpco.org/',
    },
    {
      id: 'temel-early-palliative',
      type: 'article',
      title: 'Early Palliative Care for Patients with Metastatic Non-Small-Cell Lung Cancer',
      authors: ['Temel, J.S.', 'Greer, J.A.', 'Muzikansky, A.'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1000678',
    },
  ],

  crossReferences: [
    { targetId: 'concept-palliative-vs-hospice', targetType: 'concept', relationship: 'related', label: 'Palliative vs Hospice Care' },
    { targetId: 'concept-goals-of-care', targetType: 'concept', relationship: 'related', label: 'Goals of Care Conversations' },
    { targetId: 'concept-comfort-care', targetType: 'concept', relationship: 'related', label: 'Comfort Care Measures' },
    { targetId: 'concept-living-wills', targetType: 'concept', relationship: 'related', label: 'Living Wills' },
  ],

  tags: {
    systems: ['palliative-care', 'end-of-life'],
    topics: ['hospice', 'referral', 'prognosis', 'end-of-life care', 'Medicare'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-02-13T00:00:00.000Z',
  version: 2,
  status: 'published',
};

export default hospiceReferral;
