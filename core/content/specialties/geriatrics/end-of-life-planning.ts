/**
 * End of Life Planning - Comprehensive Educational Content
 *
 * Covers advance care planning, advance directives, living wills,
 * medical power of attorney, goals of care discussions, palliative
 * care integration, and hospice care for geriatric patients.
 */

import { EducationalContent } from '../../types';

export const endOfLifePlanning: EducationalContent = {
  id: 'concept-end-of-life-planning',
  type: 'concept',
  name: 'End of Life Planning',
  alternateNames: [
    'Advance Care Planning',
    'Advance Directives',
    'Goals of Care',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'End of life planning means making decisions about your medical care before you get too sick to speak for yourself, so your wishes are known and followed.',
      explanation: `**What is End of Life Planning?**

End of life planning is having important conversations about what kind of medical care you would want if you became very sick and couldn't speak for yourself. It's a gift to your family because it makes difficult decisions easier for them.

**Why Plan Ahead?**

- **You decide**: You choose the kind of care you want
- **Helps your family**: Your loved ones won't have to guess what you would want
- **Reduces stress**: Families feel relieved when they know your wishes
- **Avoids conflicts**: Family members won't argue about what to do
- **Peace of mind**: Everyone knows the plan

**Important Documents**

**1. Living Will**
- A document that says what medical treatments you want or don't want
- Only used if you can't speak for yourself
- Examples: Decisions about breathing machines, feeding tubes, CPR

**2. Medical Power of Attorney (Healthcare Proxy)**
- You choose someone to make medical decisions for you if you can't
- Should be someone you trust completely
- This person should understand and agree with your wishes

**3. POLST/MOLST Form**
- Medical orders that stay with you
- For people with serious illness
- Tells emergency workers what treatments you want

**Important Conversations**

Talk with your family about:
- What matters most to you in life
- What quality of life means to you
- What would make life not worth living for you
- Your fears about being very sick or dying

**When to Have These Conversations**

- **When you're healthy**: Best time, before anyone is sick
- **When diagnosed with serious illness**: Important time to revisit plans
- **When health changes**: Plans may need to change

**Who Needs to Know**

- Your family
- Your doctor
- The person you chose as your decision-maker
- Your lawyer or healthcare facility

**Remember:**
These plans can be changed anytime as long as you can still make decisions. They only take effect when you can no longer speak for yourself.`,
      keyTerms: [
        { term: 'living will', definition: 'A written document that tells doctors what medical care you want if you cannot speak' },
        { term: 'medical power of attorney', definition: 'A legal document naming someone to make medical decisions for you if you can\'t' },
        { term: 'advance directive', definition: 'Any document that tells others your wishes for medical care if you become unable to decide' },
        { term: 'CPR', definition: 'Cardiopulmonary resuscitation; pressing on chest and using breaths to restart heart and breathing' },
        { term: 'healthcare proxy', definition: 'The person you choose to make medical decisions for you if you can\'t' },
      ],
      analogies: [
        'End of life planning is like leaving a map for your family - it shows them the way when they might feel lost.',
        'A healthcare proxy is like having a backup driver who knows exactly where you want to go if you\'re unable to drive.',
      ],
      examples: [
        'An elderly woman with heart disease writes down that she doesn\'t want to be put on a breathing machine permanently.',
        'A man chooses his daughter as his healthcare proxy because she understands his values and will respect his wishes.',
      ],
    },
    2: {
      level: 2,
      summary: 'Advance care planning involves discussing values, goals, and preferences for future medical care, documenting these in advance directives, and appointing a healthcare proxy to ensure patient-centered care at the end of life.',
      explanation: `## Advance Care Planning Components

### Values and Goals Discussion

Understanding what matters to the patient:
- Quality vs. quantity of life
- Independence and function
- Freedom from pain and suffering
- Ability to communicate
- Being at home vs. hospital
- Spiritual or religious considerations

### Legal Documents

**Advance Directive:**
- Umbrella term for documents expressing healthcare wishes
- Varies by state but typically includes:
  - Living will (treatment preferences)
  - Medical power of attorney (decision-maker)

**Living Will:**
- Documents specific treatment preferences
- Typically addresses:
  - Cardiopulmonary resuscitation (CPR)
  - Mechanical ventilation
  - Artificial nutrition and hydration
  - Dialysis
  - Antibiotics
- Activated only when patient lacks decision-making capacity

**Medical Power of Attorney:**
- Appoints healthcare proxy/agent
- Makes decisions when patient cannot
- Should understand patient's values
- Makes decisions based on patient's wishes, not their own preferences

**DNR/DNI Orders:**
- Do Not Resuscitate / Do Not Intubate
- Specific medical orders written by physician
- Must be accessible to emergency responders
- Different from living will (order vs. document)

**POLST (Physician Orders for Life-Sustaining Treatment):**
- Medical orders for seriously ill patients
- Covers:
  - Resuscitation (CPR)
  - Medical interventions (antibiotics, IV fluids)
  - Artificial nutrition
- Portable across care settings
- Signed by physician (or NP/PA in some states)
- Variations: MOLST (Medical Orders for Life-Sustaining Treatment), POST, MOST

## Decision-Making Capacity

**Key Elements:**
1. Understanding: Comprehends relevant information
2. Appreciation: Recognizes how information applies to their situation
3. Reasoning: Can explain their decision process
4. Communication: Can express a choice

**Capacity is:**
- Decision-specific (can manage finances but not medical decisions)
- Time-specific (can fluctuate with delirium, medications)
- Not the same as competency (legal term)

**Surrogate Decision-Making Hierarchy:**
1. Court-appointed guardian
2. Healthcare proxy (named in advance directive)
3. Spouse
4. Adult children (majority)
5. Parents
6. Adult siblings (majority)
7. Close friend

## Goals of Care Conversations

**Best Practices:**
- Start early, before crisis
- Use open-ended questions
- Allow silence for processing
- Include family if patient wishes
- Document thoroughly

**Key Questions:**
- "What is your understanding of your illness?"
- "What are your goals if time is short?"
- "What are your biggest fears?"
- "What does quality of life mean to you?"
- "What trade-offs are you willing to make?"

**Serious Illness Conversation Framework:**
1. Assess understanding
2. Discuss prognosis
3. Explore goals and values
4. Recommend treatment aligned with goals

## Common End-of-Life Scenarios

**Dementia:**
- Early planning crucial (while capacity intact)
- Eventually lose ability to eat safely (feeding tube decision)
- Difficulty with transitions (bathing, medical care)
- Eventually lose ability to communicate

**Organ Failure (Heart, Lung, Kidney):**
- Progressive decline with exacerbations
- Each hospitalization may not return to baseline
- Eventually face decisions about:
  - Dialysis (kidney)
  - Ventilation (lung)
  - VAD/Transplant (heart)

**Cancer:**
- More predictable trajectory
- Treatment often focused on extending life
- Eventually transition to comfort-focused care
- May maintain capacity longer than other illnesses

**Frailty:**
- Slow decline over years
- No single defining event
- Accumulation of small deficits
- Eventually becomes vulnerable to minor illnesses`,
      keyTerms: [
        { term: 'advance directive', definition: 'Legal documents expressing healthcare wishes and naming decision-maker' },
        { term: 'healthcare proxy', definition: 'Person appointed to make healthcare decisions when patient cannot' },
        { term: 'DNR', definition: 'Do Not Resuscitate order; no CPR if heart stops', pronunciation: 'D-N-R' },
        { term: 'POLST', definition: 'Physician Orders for Life-Sustaining Treatment; medical orders for seriously ill patients', pronunciation: 'PAHL-st' },
        { term: 'decision-making capacity', definition: 'Ability to understand information and make informed choices' },
        { term: 'surrogate', definition: 'Person who makes medical decisions for someone who cannot decide for themselves' },
      ],
      analogies: [
        'POLST is like a medical passport that travels with the patient and tells healthcare workers their wishes in an emergency.',
        'Decision-making capacity is like a dimmer switch - it can vary from bright to dim depending on the situation and time.',
      ],
    },
    3: {
      level: 3,
      summary: 'Advance care planning is a systematic process of understanding, reflecting on, and discussing goals for future medical care. It encompasses values clarification, documentation of preferences in legal forms, and ongoing communication with surrogates and healthcare providers.',
      explanation: `## Systematic Approach to Advance Care Planning

### Preparation Phase

**Identify the Patient:**
- Age >65 with chronic illness
- Anyone with serious life-limiting illness
- Patients undergoing high-risk procedures
- Hospitalized patients with functional decline

**Assemble the Team:**
- Patient (and family if desired)
- Primary clinician
- Social worker/case manager
- Chaplain (if desired)
- Legal counsel (if complex situation)

### Discussion Frameworks

**SPIKES Protocol for Breaking Bad News:**
1. **S**etting: Private environment, sitting down
2. **P**erception: "What do you understand about your illness?"
3. **I**nvitation: "How much information would you like?"
4. **K**nowledge: Give information in small chunks
5. **E**mpathy: Respond to emotions
6. **S**trategy/Summary: "Let's make a plan together"

**Serious Illness Conversation Guide:**
1. "What is your understanding of where you are with your illness?"
2. "What are your goals if time is short?"
3. "What are your fears?"
4. "What trade-offs are you willing to make?"
5. "Based on this, here is my recommendation..."

### Medical Interventions: Understanding Risks and Benefits

**CPR (Cardiopulmonary Resuscitation):**
- Success rates vary widely:
  - Out-of-hospital: <10% survival to discharge
  - In-hospital general: ~15-25%
  - In-hospital terminal illness: <5%
- Risks: Broken ribs, organ damage, brain damage
- Benefits: Survival for reversible causes

**Mechanical Ventilation:**
- Short-term: Recoverable acute illness
- Long-term: Permanent tracheostomy, ventilator dependence
- Quality considerations: Cannot speak, limited mobility

**Artificial Nutrition:**
- Feeding tube (PEG) for inability to swallow
- Evidence for benefit: Limited in dementia
- Risks: Infection, aspiration, discomfort

**Dialysis:**
- For kidney failure
- Consider functional status, life expectancy
- Time commitment: 3-4 hours, 3x/week
- Conservative management without dialysis is valid option

## Documentation Best Practices

**Advance Directive Components:**
- Naming of healthcare proxy
- Specific treatment preferences
- Values statement
- Documentation of conversation
- Signatures and witnesses per state law

**Electronic Health Record Integration:**
- Scan advance directive into record
- Flag in chart for easy access
- Update regularly
- Share across facilities

**Code Status:**
- Full Code: Full aggressive treatment
- DNR Only: No CPR but other treatments
- DNR/DNI: No CPR or intubation
- Comfort Measures Only: Focus on comfort

## Special Populations

**Dementia:**
- Plan early before capacity lost
- Discussions about feeding tubes (limited benefit)
- Goals may shift as disease progresses
- Family education about disease trajectory

**End-Stage Renal Disease:**
- Discuss dialysis vs. conservative management
- Consider functional status, comorbidities
- Some patients choose conservative management
- Important: Conservative ≠ no care

**Advanced Age (>85):**
- Higher risk of complications from aggressive care
- Value quality of life may outweigh quantity
- Importance of maintaining independence
- Often prioritize comfort over length

**Terminal Illness:**
- Prognosis <6 months qualifies for hospice
- Focus on symptom control
- Home death often preferred
- Family support crucial

## Prognostication

**Clinical Predictors of <6 Month Survival:**
- Palliative Performance Scale ≤40%
- Recurrent hospitalizations
- Dependence in ADLs
- Weight loss >10% in 6 months
- Serum albumin <2.5 g/dL
- Clinician "surprise" question: "Would you be surprised if this patient died within a year?"

**Prognosis Communication:**
- Use ranges, not exact numbers
- Frame hope in realistic terms
- Avoid false hope
- Discuss goals within realistic timeframe

**Life-Sustaining Treatment Decisions:**

| Treatment | Benefits | Burdens |
|-----------|----------|---------|
| ICU care | Reversible conditions | Invasive, expensive, uncomfortable |
| Ventilation | Life-saving for respiratory failure | Requires sedation, cannot speak |
| Dialysis | Extends life with kidney failure | Time-consuming, vascular access |
| Feeding tube | Nutrition when cannot swallow | Infection risk, may not extend life in dementia |

## Goals of Care Definitions

**Life-Sustaining:**
- Goal: Extend life at all costs
- Accepts: ICU, ventilation, dialysis, feeding tubes
- Patient profile: Values length of life, young family

**Limited/Curative:**
- Goal: Treat reversible conditions
- Accepts: Most treatments, may decline some
- Patient profile: Wants reasonable attempts but not suffering

**Comfort-Focused:**
- Goal: Quality of life, comfort
- Declines: Hospitalization, ICU, ventilation
- Accepts: Symptom management, hospice
- Patient profile: Advanced illness, prioritizes comfort

**Symptom Management Only:**
- Goal: Pure comfort
- Location: Home or inpatient hospice
- No disease-modifying treatments`,
      keyTerms: [
        { term: 'PEG tube', definition: 'Percutaneous endoscopic gastrostomy tube; feeding tube placed through abdomen into stomach', pronunciation: 'peg' },
        { term: 'Palliative Performance Scale', definition: 'Tool measuring functional status in palliative care; predicts survival', pronunciation: 'PPS' },
        { term: 'surprise question', definition: '"Would you be surprised if this patient died within [time period]?" - screening tool for palliative needs' },
        { term: 'ADLs', definition: 'Activities of Daily Living; basic self-care tasks (bathing, dressing, eating, toileting, transferring, continence)' },
        { term: 'conservative management', definition: 'Approach to kidney failure without dialysis; focuses on symptom control' },
        { term: 'ICU', definition: 'Intensive Care Unit; hospital unit for critically ill patients' },
      ],
      clinicalNotes: 'Document specific code status clearly in the medical record. Review advance directives with each hospitalization or significant change in health status. Ambiguous language leads to treatment inconsistent with patient wishes.',
    },
    4: {
      level: 4,
      summary: 'Comprehensive advance care planning integrates legal, ethical, and clinical considerations to ensure patient-centered care throughout the disease trajectory. It requires skillful communication, understanding of medical interventions, and coordination across care settings.',
      explanation: `## Ethical and Legal Framework

### Ethical Principles

**Beneficence:**
- Acting in patient's best interest
- Providing treatments that offer benefit
- Considering quality of life, not just length

**Non-maleficence:**
- Avoiding treatments that cause harm without benefit
- Recognizing when "treatment" becomes burden
- Withdrawing ineffective treatments is ethical (different from killing)

**Autonomy:**
- Respecting patient's right to self-determination
- Supporting informed decisions
- Honoring previously expressed wishes

**Justice:**
- Fair allocation of resources
- Avoiding discrimination in treatment decisions
- Considering family and societal impacts

### Legal Considerations

**Capacity Assessment:**

| Element | Assessment Approach |
|---------|---------------------|
| Understanding | Ask patient to repeat back medical information |
| Appreciation | Ask how information applies to their situation |
| Reasoning | "Tell me how you reached this decision" |
| Choice | Can patient express a consistent choice? |

**Standards for Surrogate Decision-Making:**

1. **Substituted Judgment**: What would patient want?
   - Requires knowledge of patient's values
   - Preferred standard when patient's wishes known

2. **Best Interest**: What is best for the patient?
   - Used when patient's wishes unknown
   - Consider benefits, burdens, quality of life

3. **Not acting against patient's known interests**
   - Surrogate cannot contradict known wishes

**State Laws:**
- Advance directive statutes vary
- Some states honor oral directives
- Witness requirements differ
- Emergency exception exists (treat first, ask later)

**Dispute Resolution:**
- Ethics committee consultation
- Mediation between parties
- Courts (last resort)

## Communication Challenges

**Family Conflict:**
- Identify source of disagreement
- Facilitate family meeting
- Focus on patient's values, not positions
- Consider ethics consultation

**Prognostic Uncertainty:**
- Acknowledge uncertainty honestly
- Use probability language
- Prepare for multiple scenarios
- Focus on goals, not predictions

**Emotional Overwhelm:**
- Allow emotional expression
- Normalize grief reactions
- May need multiple conversations
- Consider involving mental health

**Cultural Considerations:**
- Some cultures avoid discussing death
- Family-centered vs. individual decision-making
- Differing views on artificial nutrition
- Religious influences on treatment decisions

## Medical Interventions in Detail

### Cardiopulmonary Resuscitation (CPR)

**Success by Patient Category:**

| Patient Category | Survival to Discharge |
|------------------|----------------------|
| General inpatient | 15-25% |
| Out-of-hospital | <10% |
| Terminal illness | <5% |
| Metastatic cancer | ~1% |
| End-stage organ failure | <5% |
| Advanced dementia | <2% |

**Physical Reality of CPR:**
- Forceful chest compressions (often fractures ribs)
- Electric shocks to heart
- Breathing tube placement
- ICU admission
- May cause internal organ damage

### Mechanical Ventilation

**Considerations:**
- Short-term: Days to weeks (potentially reversible)
- Long-term: Tracheostomy, ventilator facility
- Cannot speak (or very difficult with trach)
- Limited mobility
- Requires 24-hour care
- Annual cost: >$100,000 for home ventilation

### Artificial Nutrition and Hydration

**Evidence by Condition:**

| Condition | Benefit of Feeding Tube |
|-----------|------------------------|
| Acute stroke (temporary dysphagia) | May help recovery |
| ALS | Maintains weight, extends life |
| Advanced dementia | Does NOT prolong life, does NOT improve comfort |
| Terminal cancer | May add burden without benefit |

**Alternatives:**
- Hand feeding for willing patients
- Assisted feeding
- Thickeners for liquids
- Focus on comfort, not lab values

### Dialysis Decision-Making

**Frailty Considerations:**
- Age alone is not contraindication
- Functional status matters more
- Comorbid conditions affect prognosis
- Quality of life often prioritized

**Conservative (Non-Dialytic) Management:**
- Valid medical option
- Focus on symptom control (edema, nausea, pruritus)
- Survival measured in months (vs. years with dialysis)
- May align with patient goals

## Disease-Specific Considerations

### Dementia

**Trajectory:**
- Gradual functional decline over 8-12 years
- Eventually loses ability to:
  - Ambulate (late stage)
  - Communicate verbally
  - Swallow safely (late stage)

**Planning Points:**
- Early: Make advance directive while competent
- Middle: Discuss feeding tubes (limited benefit)
- Late: Focus on comfort, hand feeding

**Feeding Tube Evidence:**
- Does NOT prevent aspiration
- Does NOT improve survival
- Does NOT improve wound healing
- Does increase use of restraints
- Hand feeding may be equally effective

### Heart Failure

**Trajectory:**
- Episodes of decompensation
- Each episode may not return to baseline
- Sudden death possible at any time
- Eventually consider LVAD, transplant, or comfort focus

**Device Considerations:**
- ICD (defibrillator): May prevent sudden death but at end of life may shock inappropriately
- Deactivation possible and ethically appropriate

### COPD

**Trajectory:**
- Gradual decline with exacerbations
- Eventually becomes oxygen-dependent
- Intubation may be burdensome
- Eventually face ventilation decisions

## Hospice and Palliative Care Integration

**Palliative Care:**
- Can be provided alongside curative treatment
- Focus on symptom relief, quality of life
- Appropriate at any stage of serious illness

**Hospice Eligibility (Medicare):**
- Prognosis ≤6 months if disease follows normal course
- Two physicians must certify
- Foregoes curative treatment
- Focus entirely on comfort

**Common Hospice Diagnoses:**
- Cancer (most common)
- Heart failure
- Dementia
- COPD
- Liver failure
- Renal failure

**Hospice Services:**
- Nursing care
- Medications for comfort
- Medical equipment
- Social work
- Chaplaincy
- Bereavement support (13 months)`,
      keyTerms: [
        { term: 'substituted judgment', definition: 'Decision standard: what would the patient decide if able?' },
        { term: 'best interest standard', definition: 'Decision standard: what would a reasonable person choose in this situation?' },
        { term: 'ICD', definition: 'Implantable Cardioverter Defibrillator; device that shocks heart out of dangerous rhythms' },
        { term: 'LVAD', definition: 'Left Ventricular Assist Device; mechanical pump for heart failure' },
        { term: 'ethics committee', definition: 'Hospital committee that provides guidance on difficult ethical decisions in patient care' },
        { term: 'prognostication', definition: 'The process of predicting the likely course of a disease' },
      ],
      clinicalNotes: 'CPR success is often overestimated by patients and families. Provide realistic numbers. Remember: DNR only addresses CPR, not other treatments. Clarify separately whether patient wants hospitalization, ICU, ventilation, dialysis, etc.',
    },
    5: {
      level: 5,
      summary: 'Expert advance care planning integrates comprehensive communication strategies, legal documentation, medical decision-making across disease trajectories, and seamless coordination between palliative approaches and disease-directed treatments to honor patient goals throughout the continuum of care.',
      explanation: `## Advanced Communication Techniques

### NURSE Framework for Responding to Emotion

**N**aming: "I can see this is very difficult for you"
**U**nderstanding: "This is not the news you were hoping for"
**R**especting: "You've shown great strength throughout"
**S**upporting: "I'm here with you through this"
**E**xplo**r**ing: "Tell me more about what you're feeling"

### Prognosis Communication

**Numeracy Approach:**
- Use ranges, not point estimates
- Contextualize: "Most people in your situation live from X to Y months"
- Frame hope: "I hope you're the exception, but we should plan for..."
- Address uncertainty explicitly

**Timing of End-of-Life Signs:**

| Sign | Median Time to Death |
|------|---------------------|
| Terminal phase (few functional abilities) | 3 months |
| Bedbound, minimal intake | 3-4 weeks |
| Death rattles, mottling | Days |
| Cheyne-Stokes breathing | Days-hours |
| Terminal apnea | Hours |

### Conflict Resolution

**Family Disagreement:**
1. Facilitate family meeting
2. Identify source of conflict (fear, guilt, misunderstanding)
3. Clarify medical facts
4. Refer back to patient's values
5. Consider time-limited trial of treatment
6. Ethics consultation if needed

**Clinician-Family Disagreement:**
1. Clarify what is being requested
2. Explain why it conflicts with medical judgment
3. Explore underlying concerns
4. Seek ethics committee input
5. Consider transferring care (rare)

### Special Situations

**Requests for "Everything":**
- Explore what "everything" means
- May reflect hope for recovery, not grasp of prognosis
- May reflect guilt or fear of "giving up"
- Discuss specific interventions and realistic outcomes

**Inappropriate Aggressive Care:**
- Verifying goals is not "giving up"
- Changing goals is not "killing"
- Withdrawing = stopping ongoing treatment
- Withholding = not starting treatment
- Ethically equivalent (same intent, different timing)

**ICD Deactivation:**
- Discuss before terminal phase
- Can be deactivated non-invasively with programmer
- May be appropriate as patient nears death
- Prevents uncomfortable shocks at end of life

**VAD/LVAD Decision-Making:**
- Bridge to transplant vs. destination therapy
- Eventually may face decision to turn off
- Distinct from euthanasia (allowing to die vs. killing)

## Quality Metrics and Systems

### Advance Care Planning Quality Measures

**Process Measures:**
- Advance directive documented in EHR
- Healthcare proxy identified
- Goals of care discussed for seriously ill
- Code status documented
- POLST for eligible patients

**Outcome Measures:**
- Care consistent with documented wishes
- ICU use in terminal illness
- Hospital deaths vs. home deaths
- Family satisfaction with end-of-life care

### Systems Integration

**Primary Care Integration:**
- Introduce advance care planning at age 50+
- Update with major health changes
- Electronic prompt for serious illness diagnosis

**Specialty Clinics:**
- Oncology: At diagnosis and progression
- Heart failure: NYHA Class III/IV
- Dialysis: At initiation and when complications develop
- Dementia: At diagnosis

**Hospital-Based:**
- Automatic triggers for palliative consult:
  - Repeated admissions within 30 days
  - ICU stay >7 days
  - Stage IV cancer diagnosis
  - Screening with "surprise question"

## Research and Evolving Practice

### Serious Illness Care Program

**Triggers:**
- Diagnosis of life-limiting illness
- Emergency department visit for serious illness
- Hospital admission with serious illness

**Components:**
- Dedicated nurse or social work coordinator
- Systematic identification of seriously ill patients
- Standardized conversation guide
- Documentation in EHR
- Follow-up conversations as illness progresses

**Outcomes:**
- Less aggressive care at end of life
- More hospice use
- Lower costs
- Better patient and family satisfaction

### Video Advance Directives

**Benefits:**
- Preserves patient's voice and expressions
- Clarifies wishes beyond written documents
- Can be reviewed by family and clinicians
- May be more powerful than written documents

**Limitations:**
- Legal recognition varies by state
- Cannot replace written advance directive
- May become outdated

### Medical Aid in Dying (MAID)

**Where Legal:**
- Several US states (California, Colorado, Oregon, Vermont, Washington, etc.)
- Canada, several European countries

**Requirements:**
- Terminal illness (<6 months)
- Decision-making capacity
- Voluntary request
- No coercion
- Waiting period
- Second physician confirmation

**Distinction from Euthanasia:**
- Patient self-administers medication
- Physician prescribes but does not administer
- Patient retains control`,
      keyTerms: [
        { term: 'NURSE mnemonic', definition: 'Framework for responding to emotions: Naming, Understanding, Respecting, Supporting, Exploring' },
        { term: 'time-limited trial', definition: 'Agreement to try a treatment for a defined period with predefined goals; reassess at end of trial' },
        { term: 'withholding vs withdrawing', definition: 'Not starting vs. stopping treatment; ethically equivalent with same intent' },
        { term: 'goals of care conversation', definition: 'Discussion about what matters most to patient and aligning treatment accordingly' },
        { term: 'surprise question', definition: '"Would you be surprised if this patient died within a year?" - screens for palliative care needs' },
        { term: 'MAID', definition: 'Medical Aid in Dying; physician-assisted dying for terminal patients where legal' },
      ],
      clinicalNotes: `Key practice points:

1. **Document specifics**: "Comfort measures" is vague. Specify what interventions patient wants or doesn't want.

2. **Regular updates**: Revisit goals when health changes significantly. Goals often shift from curative to comfort-focused.

3. **Address all interventions**: Code status is just one decision. Discuss hospitalization, ICU, intubation, dialysis, feeding tubes separately.

4. **Include the team**: Nurses, social workers, chaplains have important perspectives and relationships with families.

5. **Use community resources**: Hospice, home health, palliative care programs provide invaluable support.

6. **Self-care**: These conversations are emotionally demanding. Clinician support is essential.`,
    },
  },

  media: [
    {
      id: 'advance-directive-types',
      type: 'diagram',
      filename: 'advance-directive-types.svg',
      title: 'Types of Advance Directives',
      description: 'Comparison of living will, medical power of attorney, and POLST documents',
    },
    {
      id: 'goals-of-care-spectrum',
      type: 'diagram',
      filename: 'goals-of-care-spectrum.svg',
      title: 'Goals of Care Spectrum',
      description: 'Visual representation from life-sustaining to comfort-focused care',
    },
    {
      id: 'decision-making-flow',
      type: 'diagram',
      filename: 'surrogate-decision-making-flowchart.svg',
      title: 'Surrogate Decision-Making Hierarchy',
      description: 'Flowchart showing legal hierarchy for healthcare decision-makers',
    },
  ],

  citations: [
    {
      id: 'sia-advance-care-planning',
      type: 'article',
      title: 'Advance Care Planning: A Critical Component of End-of-Life Care',
      authors: ['Sudore RL', 'Lum HD', 'You JJ', 'et al.'],
      source: 'American Family Physician',
    },
    {
      id: 'hospice-medicare-conditions',
      type: 'article',
      title: 'Medicare Hospice Conditions of Participation',
      source: 'Centers for Medicare & Medicaid Services',
    },
    {
      id: 'palliative-care-quality',
      type: 'article',
      title: 'Quality Measures for Palliative and End-of-Life Care',
      authors: ['Kelley AS', 'Morrison RS'],
      source: 'Journal of Palliative Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'concept-aging-physiology', targetType: 'concept', relationship: 'related', label: 'Aging Physiology' },
    { targetId: 'concept-frailty-sarcopenia', targetType: 'concept', relationship: 'related', label: 'Frailty and Sarcopenia' },
    { targetId: 'concept-cognitive-impairment-assessment', targetType: 'concept', relationship: 'related', label: 'Cognitive Impairment' },
    { targetId: 'concept-palliative-care', targetType: 'concept', relationship: 'related', label: 'Palliative Care' },
  ],

  tags: {
    systems: ['multi-system'],
    topics: ['geriatrics', 'ethics', 'palliative care', 'end-of-life care', 'communication'],
    keywords: ['advance directive', 'living will', 'healthcare proxy', 'DNR', 'POLST', 'hospice', 'goals of care'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family medicine', 'psychiatry'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default endOfLifePlanning;
