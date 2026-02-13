/**
 * DNR/DNI Orders - Educational Content
 *
 * Comprehensive content on Do Not Resuscitate and Do Not Intubate
 * orders, their meaning, and appropriate clinical use.
 */

import { EducationalContent } from '../../types';

export const dnrDniOrders: EducationalContent = {
  id: 'concept-dnr-dni',
  type: 'concept',
  name: 'DNR and DNI Orders',
  alternateNames: ['Do Not Resuscitate', 'Do Not Intubate', 'DNAR', 'AND', 'Allow Natural Death'],

  levels: {
    1: {
      level: 1,
      summary: 'DNR and DNI are doctor\'s orders that say not to do CPR or put you on a breathing machine if your heart or breathing stops, so you can pass away naturally and peacefully.',
      explanation: `**What Do DNR and DNI Mean?**

**DNR - Do Not Resuscitate**
This means: If your heart stops beating, the doctors and nurses will NOT do CPR (pressing on your chest and using electric shocks) to try to restart it.

**DNI - Do Not Intubate**
This means: If you stop breathing, the doctors will NOT put a tube in your throat and connect you to a breathing machine.

**Why Would Someone Choose DNR or DNI?**

Some people choose these because:
- They are very sick and treatments will not help them get better
- They do not want to go through CPR or be on machines
- They want to pass away peacefully and naturally
- They are ready and have accepted that their illness will lead to death

**What DNR and DNI Do NOT Mean**

Having a DNR or DNI does NOT mean:
- You will not get other medical care
- Doctors will stop treating your pain
- You will be left alone
- You are giving up

You still get:
- Medicine for pain
- Care for your symptoms
- Food and water if you want it
- Visits from doctors and nurses
- Love and support from family

**Who Decides About DNR and DNI?**

This is YOUR choice (or your family's if you cannot decide). The doctor will:
- Explain what could happen
- Answer your questions
- Write the order if you decide you want it
- Never force you to have a DNR or DNI

**Can You Change Your Mind?**

Yes! You can always change your mind. Just tell your doctor or nurse, and they will cancel the order.`,
      keyTerms: [
        { term: 'DNR', definition: 'Do Not Resuscitate - an order that says not to try CPR if the heart stops' },
        { term: 'DNI', definition: 'Do Not Intubate - an order that says not to put in a breathing tube' },
        { term: 'CPR', definition: 'Cardiopulmonary resuscitation - pressing on the chest and giving breaths to try to restart the heart' },
      ],
      analogies: [
        'Choosing a DNR is like deciding you do not want an alarm to wake you up - you are choosing to let things happen naturally instead of having someone try to bring you back.',
        'Think of DNR and DNI like saying "when my story ends, let it end peacefully" rather than trying to extend it in ways that might cause more suffering.',
      ],
      examples: [
        'An elderly grandmother with serious heart failure might choose DNR because she knows CPR would not give her more good time with her family.',
        'Someone with advanced cancer might choose both DNR and DNI because they want to focus on being comfortable, not on treatments that will not help.',
      ],
    },
    2: {
      level: 2,
      summary: 'DNR (Do Not Resuscitate) and DNI (Do Not Intubate) are medical orders that reflect patient decisions to forego specific interventions, allowing natural death while continuing other appropriate care.',
      explanation: `## Understanding DNR and DNI Orders

### What These Orders Mean

**DNR - Do Not Resuscitate (or DNAR - Do Not Attempt Resuscitation)**
An order not to perform cardiopulmonary resuscitation if the heart stops:
- No chest compressions
- No defibrillation (electric shocks)
- No resuscitation medications

**DNI - Do Not Intubate**
An order not to place an endotracheal tube for mechanical ventilation:
- No breathing tube insertion
- No mechanical ventilator
- May still use noninvasive support (BiPAP, CPAP)

### Why Patients Choose These Orders

**Medical Reasons**
- Terminal illness where resuscitation would not improve outcomes
- Low likelihood of successful resuscitation
- Poor quality of life expected after resuscitation
- Frailty or advanced age affecting resuscitation success

**Personal Reasons**
- Values that prioritize comfort over prolonging life
- Wish to die naturally when the time comes
- Fear of being on life support
- Acceptance of dying as part of life

### What These Orders Do NOT Mean

| DNR/DNI Does NOT Mean | Patients Still Receive |
|-----------------------|------------------------|
| No medical care | All other appropriate treatment |
| Abandonment | Symptom management |
| Giving up | Comfort care |
| Hastening death | Pain medication |
| No surgery or procedures | Antibiotics if appropriate |
| No hospital admission | Monitoring and nursing care |

### How the Decision Is Made

**Shared Decision-Making Process**
1. Physician explains patient's condition and prognosis
2. Physician explains what CPR/intubation involves
3. Physician shares likely outcomes of resuscitation
4. Patient expresses values and preferences
5. Together, they decide what aligns with patient's goals

**Who Can Make the Decision**
- Patient with decisional capacity
- Healthcare proxy/agent if patient lacks capacity
- Surrogate decision-maker (family) if no proxy

### The Order Itself

**Documentation**
- Written order in medical record
- Signed by physician
- Date and time recorded
- May include scope of order

**Different Terms Used**
- DNR: Do Not Resuscitate
- DNAR: Do Not Attempt Resuscitation
- AND: Allow Natural Death (preferred by some)
- No CPR
- No Code

### In Different Settings

**Hospital**
- DNR order in chart
- May have visual indicator (e.g., wristband)
- Communicated at shift changes

**Out of Hospital**
- Requires specific form (POLST, out-of-hospital DNR)
- Regular DNR order not valid for EMS
- May require specific state form`,
      keyTerms: [
        { term: 'resuscitation', definition: 'Emergency procedures to restore heartbeat and breathing', pronunciation: 'ree-SUS-ih-TAY-shun' },
        { term: 'intubation', definition: 'Placing a breathing tube through the mouth into the airway', pronunciation: 'IN-too-BAY-shun' },
        { term: 'shared decision-making', definition: 'Process where patient and provider together make healthcare choices' },
        { term: 'Allow Natural Death', definition: 'Alternative term for DNR that emphasizes natural dying process' },
      ],
      analogies: [
        'A DNR order is like telling someone not to catch you if you are falling asleep - you are ready to rest and do not want to be forced back awake.',
      ],
    },
    3: {
      level: 3,
      summary: 'DNR and DNI orders require careful communication, proper documentation, understanding of survival statistics, and clarification of scope to ensure goal-concordant care.',
      explanation: `## DNR/DNI: Clinical Framework

### Evidence for Resuscitation Decision-Making

**Survival After In-Hospital Cardiac Arrest (IHCA)**
- Overall survival to discharge: ~25%
- Survival varies significantly by:
  - Initial rhythm (shockable vs. non-shockable)
  - Witnessed vs. unwitnessed
  - Location (ICU vs. ward vs. OR)
  - Underlying cause
  - Patient factors (comorbidities, frailty)

**Predictors of Poor Outcome**
- Unwitnessed arrest
- Non-shockable rhythm (PEA, asystole)
- Multiple comorbidities
- Poor functional status before arrest
- Metastatic cancer
- Sepsis as underlying cause
- Prolonged CPR duration

**Survival Statistics to Share**
- Frame realistically but sensitively
- Consider functional outcomes, not just survival
- Many survivors have significant disability
- Neurologic outcomes often compromised

### Communication Best Practices

**How to Discuss DNR/DNI**

*Avoid*
- "Do you want us to do everything?"
- "Do you want us to let you die?"
- Rushed conversations
- Medical jargon without explanation

*Better Approach*
- "I'd like to talk about what we should do if your heart stops"
- "Given your illness, I want to make sure we focus on what matters most to you"
- Describe CPR realistically: chest compressions, rib fractures, intubation
- Share survival statistics in context

**REMAP Framework**
1. **R**eframe: Why discussing this now
2. **E**xpect emotion: Respond to feelings
3. **M**ap values: What matters most
4. **A**lign: Match recommendations to values
5. **P**lan: Document and communicate

### Clarifying Scope of DNR/DNI

**Important Distinctions**

*Full DNR*
- No CPR of any kind
- Some may still want defibrillation without compressions

*DNI Only*
- No intubation
- May still want CPR without intubation
- May accept non-invasive ventilation (BiPAP)

*Limited Code/Partial Code*
- Chemical code only (medications, no chest compressions)
- Not generally recommended (confusing, ethically unclear)

*DNR in the OR*
- May suspend DNR during surgery
- "Required reconsideration" before procedures
- Discuss with patient and surgeon
- Document decisions

### Documentation Standards

**Essential Elements**
1. Date and time
2. Name of physician ordering
3. Confirmation of discussion with patient/surrogate
4. Capacity assessment (or surrogate identification)
5. Specific scope of order
6. Patient/surrogate understanding confirmed
7. Plan for other treatments

**Communication**
- Visible in chart
- Communicated at handoffs
- Known to nursing staff
- May use physical markers (wristband)

### Ethical Considerations

**Patient Autonomy**
- Patient has right to refuse CPR
- Clinician cannot force DNR
- But also cannot be forced to perform futile CPR

**Futility and Unilateral DNR**
- In rare cases, CPR is physiologically futile
- Hospital policies for unilateral DNR vary
- Ethics consultation recommended
- Document reasoning thoroughly

**Surrogate Decision-Making**
- Substituted judgment standard
- If values unknown, best interests
- Family guilt and burden
- Support surrogates in decision

### Special Situations

**Emergency Department**
- Unknown patients
- Limited time for discussion
- May need to resuscitate and reassess

**Perioperative**
- "Required reconsideration" of DNR
- May suspend during and immediately after surgery
- Time-limited suspension
- Discuss with patient and surgical team`,
      keyTerms: [
        { term: 'IHCA', definition: 'In-Hospital Cardiac Arrest - cardiac arrest occurring in a hospital setting' },
        { term: 'shockable rhythm', definition: 'Heart rhythms (VF, pulseless VT) that may respond to defibrillation' },
        { term: 'required reconsideration', definition: 'Policy requiring discussion of DNR status before surgery' },
        { term: 'futility', definition: 'When a treatment cannot achieve its physiologic goal' },
      ],
      clinicalNotes: 'Never ask "do you want everything done?" - this frames DNR as giving up. Share survival statistics in context of patient situation. Clarify scope precisely (DNR only? DNI only? Both?). Required reconsideration before surgery. Document conversations, not just orders.',
    },
    4: {
      level: 4,
      summary: 'Advanced DNR/DNI practice involves nuanced prognostication, management of conflict situations, understanding of ethical frameworks for withholding resuscitation, and system-level quality improvement.',
      explanation: `## Advanced Clinical Considerations

### Prognostic Tools and Decision Support

**GO-FAR Score (Good Outcome Following Attempted Resuscitation)**
- Predicts neurologically intact survival after IHCA
- Variables: Age, admission diagnosis, pre-arrest status
- Helps frame realistic discussions
- Not for individual decision-making, but population guidance

**Arrest Variables Affecting Prognosis**
- Initial rhythm: VF/VT vs. PEA/asystole
- Witnessed vs. unwitnessed
- Time to CPR initiation
- Location (monitored vs. unmonitored)
- Etiology (cardiac vs. non-cardiac)

**Pre-Arrest Variables**
- Baseline functional status
- Comorbidity burden
- Cancer status (metastatic especially poor)
- Frailty
- Organ failures

### Complex Decision Scenarios

**When Family Wants "Everything"**
- Explore meaning of "everything"
- Understand underlying fears and values
- Provide realistic prognostic information
- Recommend what aligns with patient values
- Consider time-limited trial
- Ethics consultation if needed

**When Clinicians Believe CPR is Inappropriate**
- Distinguish value-based from physiologic futility
- Engage ethics consultation
- Hospital policy on unilateral DNR
- Second opinion
- Family meeting with clear communication

**DNR in Patients with Suicidal Ideation**
- DNR generally addresses natural causes
- Evaluate capacity carefully
- Psychiatric consultation
- May need to separate suicide prevention from EOL planning

### Ethical Frameworks

**Autonomy**
- Patient right to refuse CPR
- Informed consent for DNR
- Respect for prior expressed wishes

**Beneficence and Non-Maleficence**
- CPR that only prolongs dying may cause harm
- Balance chance of benefit vs. burden
- Consider suffering from failed resuscitation

**Justice**
- Resource allocation considerations
- Equal access to DNR discussions
- Avoiding disparities in EOL care

**Futility Considerations**
- Physiologic futility: CPR cannot work
- Qualitative futility: Outcome not worth achieving
- Most experts reject qualitative futility as unilateral decision
- Process-based approaches preferred

### DNR and Race/Ethnicity

**Research Findings**
- Disparities in DNR documentation
- African American and Hispanic patients less likely to have DNR
- Complex reasons: Trust, cultural values, access to discussions
- Need for culturally sensitive conversations

**Best Practices**
- Examine own biases
- Culturally humble approach
- Use interpreters appropriately
- Include family as patient prefers
- Avoid assumptions based on demographics

### System Implementation

**Quality Metrics**
- Proportion with documented code status
- Timing of discussions (not just before death)
- Documentation quality
- Goal-concordant care measures

**Implementation Strategies**
- Trigger-based discussions (ICU admission, etc.)
- Documentation standards
- Staff education
- Audit and feedback

### Special Populations

**Pediatrics**
- Parent decision-making
- Assent of mature minors
- Special emotional considerations
- Often different forms/processes

**Pregnancy**
- Separate consideration for mother and fetus
- Perimortem cesarean decision
- Ethical complexity
- Often requires specialized discussion

**Psychiatric Conditions**
- Capacity assessment critical
- Avoid hastily attributing to mental illness
- Consider competency evaluation
- Document thoroughly`,
      keyTerms: [
        { term: 'GO-FAR Score', definition: 'Prognostic tool predicting neurologically intact survival after in-hospital cardiac arrest' },
        { term: 'physiologic futility', definition: 'When treatment cannot achieve intended physiologic effect' },
        { term: 'qualitative futility', definition: 'When treatment may work but outcome deemed not worth achieving' },
        { term: 'perimortem cesarean', definition: 'Emergency cesarean delivery during maternal cardiac arrest' },
      ],
      clinicalNotes: 'Use prognostic tools to inform, not determine, decisions. When conflict arises, engage ethics consultation early. Be aware of disparities in DNR discussions. Separate code status from other goals of care. Document reasoning, not just decision. Revisit code status when clinical situation changes.',
    },
    5: {
      level: 5,
      summary: 'Expert-level practice encompasses policy leadership, ethical scholarship, quality improvement at population level, research contributions, and navigating the most complex clinical and ethical scenarios.',
      explanation: `## Expert Practice and Leadership

### Policy and Regulatory Considerations

**Institutional Policy Development**
- Unilateral DNR policy frameworks
- Ethics consultation requirements
- Documentation standards
- Scope and terminology standardization

**State/National Policy**
- POLST program development
- Out-of-hospital DNR standardization
- EMS protocols
- Liability protections

### Ethical Scholarship

**Futility Debates**
- Evolution from unilateral to process-based approaches
- Texas Advance Directives Act model
- Due process for futility determinations
- Patient rights vs. clinician integrity

**Allow Natural Death (AND) Movement**
- Reframing away from "Do Not"
- Focus on what IS done, not what is not
- Psychological impact of terminology
- Adoption and implementation

**Artificial Intelligence and Prognostication**
- Machine learning for cardiac arrest prediction
- Integration into decision support
- Ethical implications of algorithmic prognostication
- Maintaining human judgment

### Quality and Safety

**System-Level Metrics**
- Hospital-wide code status documentation rates
- Timing of discussions relative to death
- Unexpected cardiac arrests in patients with goals of comfort
- DNR order clarity and completeness

**High-Reliability Practices**
- Standardized handoff communication
- Visual identifiers
- EHR decision support
- Regular audits

**Reducing Unwanted CPR**
- Identifying at-risk patients
- Proactive discussions
- Care transition communication
- EMS-hospice coordination

### Research Priorities

**Outcomes Research**
- Long-term outcomes after successful resuscitation
- Quality of life post-arrest
- Surrogate decision-maker outcomes
- Impact of DNR on other treatment intensity

**Implementation Science**
- Effective strategies for increasing goal-concordant DNR
- Communication training effectiveness
- System-level interventions
- Equity in access to discussions

**Ethics Research**
- Patient and family perspectives on DNR discussions
- Clinician moral distress related to resuscitation decisions
- Cross-cultural perspectives on resuscitation
- Religious perspectives on allowing natural death

### Education and Workforce

**Training Program Design**
- Communication skills for DNR discussions
- Prognostic communication
- Cultural humility
- Managing conflict

**Competencies**
- Knowledge of survival statistics
- Skills in shared decision-making
- Attitudes of respect for patient autonomy
- Systems thinking for policy development

### Emerging Issues

**Extracorporeal CPR (eCPR)**
- ECMO during cardiac arrest
- Expanded resuscitation options
- Implications for DNR discussions
- Resource and access issues

**Cardiac Arrest Centers**
- Regionalized post-arrest care
- Transport decisions
- Prognostication timing
- Family presence during resuscitation

**Family Presence During Resuscitation**
- Evidence base
- Implementation challenges
- Staff support
- Bereavement considerations

### Complex Consultation Scenarios

**Withdrawal of DNR by Surrogate**
- Patient with capacity made decision
- Now incapacitated, surrogate wants to revoke
- Precedent autonomy considerations
- Ethics consultation

**Patient Wants DNR, Family Opposes**
- Patient autonomy takes precedence
- Support family understanding
- May need palliative care team
- Document patient capacity and decision

**Alternating Capacity**
- Patient with fluctuating capacity changes mind
- Which decision to follow?
- Assess capacity at each decision point
- Consider values over time`,
      keyTerms: [
        { term: 'Texas Advance Directives Act', definition: 'Model legislation providing process for unilateral DNR with due process protections' },
        { term: 'eCPR', definition: 'Extracorporeal cardiopulmonary resuscitation using ECMO during cardiac arrest' },
        { term: 'process-based futility', definition: 'Approach to futility disputes emphasizing fair process rather than unilateral decisions' },
        { term: 'high-reliability organization', definition: 'Organization using systems to minimize failures in critical processes' },
      ],
      clinicalNotes: `Expert-level considerations:
1. Lead institutional policy development on DNR/unilateral decisions
2. Contribute to ethics scholarship on resuscitation decisions
3. Develop quality metrics and improvement programs
4. Train clinicians in DNR discussions
5. Advocate for equity in access to DNR discussions
6. Navigate most complex conflict scenarios
7. Engage in research on outcomes and implementation`,
    },
  },

  media: [
    {
      id: 'dnr-decision-framework',
      type: 'diagram',
      filename: 'dnr-decision-framework.svg',
      title: 'DNR/DNI Decision Framework',
      description: 'Visual guide to the DNR/DNI decision-making process',
    },
  ],

  citations: [
    {
      id: 'go-far-score',
      type: 'article',
      title: 'A Novel Tool for Predicting Outcomes After IHCA',
      authors: ['Ebell, M.H.', 'Afonso, A.M.'],
      source: 'Journal of Hospital Medicine',
      url: 'https://doi.org/10.1002/jhm.2106',
    },
    {
      id: 'aha-cpr-guidelines',
      type: 'website',
      title: 'CPR & ECC Guidelines',
      source: 'American Heart Association',
      url: 'https://cpr.heart.org/',
    },
  ],

  crossReferences: [
    { targetId: 'concept-advance-directives', targetType: 'concept', relationship: 'parent', label: 'Advance Directives' },
    { targetId: 'concept-goals-of-care', targetType: 'concept', relationship: 'related', label: 'Goals of Care' },
    { targetId: 'concept-polst', targetType: 'concept', relationship: 'related', label: 'POLST Forms' },
    { targetId: 'concept-comfort-care', targetType: 'concept', relationship: 'related', label: 'Comfort Care' },
  ],

  tags: {
    systems: ['palliative-care', 'emergency-medicine', 'critical-care'],
    topics: ['DNR', 'DNI', 'resuscitation', 'code status', 'advance care planning'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default dnrDniOrders;
