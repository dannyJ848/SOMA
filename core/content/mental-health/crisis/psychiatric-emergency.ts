/**
 * Psychiatric Emergency - Patient Education Content
 */

import { EducationalContent } from '../../types';

export const psychiatricEmergencyContent: EducationalContent = {
  id: 'mental-health-psychiatric-emergency',
  type: 'topic',
  name: 'Psychiatric Emergency',
  alternateNames: ['Mental Health Emergency', 'Psychiatric Crisis'],

  levels: {
    1: {
      level: 1,
      summary: 'A psychiatric emergency is when someone needs immediate help for their mental health. Knowing when to seek emergency care and what to expect can help you get the right help.',
      explanation: `**What Is a Psychiatric Emergency?**

A psychiatric emergency is when someone needs immediate mental health care. This could be because they are a danger to themselves or others, or they cannot take care of themselves.

**When to Seek Emergency Help:**

- Thinking about or planning suicide
- Harming oneself
- Threatening to harm others
- Severe confusion or disorientation
- Seeing or hearing things that are not there (and it is distressing)
- Unable to care for basic needs (eating, staying safe)
- Dangerous behavior

**Where to Go:**

- Call 988 (Suicide & Crisis Lifeline)
- Call 911 if there is immediate danger
- Go to the nearest emergency room
- Contact a mobile crisis team if available

**What to Expect at the Emergency Room:**

1. You will be checked in (triage)
2. A nurse will assess your vital signs
3. A mental health professional will talk with you
4. They will ask about:
   - What brought you in
   - Your mental health history
   - Medications you take
   - Your safety
5. You may need to wait for evaluation
6. A plan will be made (go home with follow-up, stay for observation, or admission)

**Your Rights:**

- You have the right to be treated with respect
- You can ask questions about your care
- In most cases, voluntary treatment is preferred
- If you are a danger, you may be held for safety

**After the Emergency:**

- Follow the discharge plan
- Take medications as prescribed
- Attend follow-up appointments
- Have emergency numbers ready
- Tell someone you trust what happened`,
      keyTerms: [
        { term: 'psychiatric emergency', definition: 'A mental health situation requiring immediate care' },
        { term: 'triage', definition: 'The process of determining priority for treatment' },
        { term: 'voluntary', definition: 'When someone agrees to treatment' },
        { term: 'involuntary hold', definition: 'When someone is kept for safety even if they do not agree' },
      ],
      analogies: [],
      examples: [],
    },
    2: {
      level: 2,
      summary: 'Psychiatric emergencies include suicidal crisis, acute psychosis, severe agitation, and inability to care for oneself. Emergency evaluation involves risk assessment, medical clearance, and disposition planning. Understanding the process reduces fear and facilitates appropriate care-seeking.',
      explanation: `**Types of Psychiatric Emergencies:**

**Suicidal Crisis:**
- Active suicidal ideation with plan/intent
- Recent suicide attempt
- Imminent risk of self-harm

**Acute Psychosis:**
- Severe hallucinations or delusions
- Disorganized behavior
- Inability to care for self
- First episode psychosis

**Severe Agitation/Violence:**
- Aggressive behavior
- Threat to others
- Unable to be de-escalated

**Severe Intoxication/Withdrawal:**
- Alcohol withdrawal (seizure risk)
- Drug intoxication with psychiatric symptoms
- Dangerous level of impairment

**Manic Episode:**
- Severe sleep deprivation
- Dangerous behavior
- Psychotic symptoms

**Catatonia:**
- Not moving or speaking
- Medical emergency
- Can be life-threatening

**Emergency Department Process:**

*Triage:*
- Initial safety assessment
- Vital signs
- Chief complaint
- Priority assignment

*Medical Clearance:*
- Rule out medical causes
- Vital signs, labs (if indicated)
- Medical stability for psychiatric evaluation

*Psychiatric Evaluation:*
- History and mental status exam
- Risk assessment
- Collateral information (family, records)
- Formulation and plan

*Disposition Options:*
- Discharge with safety plan and follow-up
- Extended observation (23 hours)
- Voluntary inpatient admission
- Involuntary hold if criteria met

**Involuntary Hospitalization:**

*Criteria (varies by state):*
- Danger to self
- Danger to others
- Gravely disabled (unable to care for self)
- Due to mental illness

*Process:*
- Physician certification
- Time-limited (typically 72 hours initially)
- Right to hearing/review
- Legal protections

**What Helps:**

*For Patients:*
- Try to communicate your needs
- Bring medication list if possible
- Have a support person if available
- Ask questions

*For Family/Friends:*
- Provide collateral information
- Stay calm
- Advocate for your loved one
- Take care of yourself too`,
      keyTerms: [
        { term: 'medical clearance', definition: 'Ruling out physical causes of psychiatric symptoms' },
        { term: 'disposition', definition: 'The plan for where the patient goes after emergency evaluation' },
        { term: 'gravely disabled', definition: 'Unable to care for basic needs due to mental illness' },
        { term: 'collateral information', definition: 'Information from family, friends, or records' },
      ],
      analogies: [],
    },
    3: {
      level: 3,
      summary: 'Psychiatric emergency evaluation involves rapid assessment of dangerousness, medical stability, and psychiatric diagnosis. Treatment includes de-escalation, pharmacological intervention if needed, and appropriate disposition. Legal frameworks govern involuntary treatment. Alternative to ED include mobile crisis and crisis stabilization.',
      explanation: `**Emergency Assessment:**

**Immediate Safety:**
- Assess for weapons, dangerous items
- Determine staff safety needs
- Sitter/observation if needed
- Verbal de-escalation first

**Rapid Assessment:**

*Key Questions:*
- Why now? What precipitated?
- Danger to self (suicide, self-harm)?
- Danger to others?
- Able to care for self?
- Psychiatric history
- Substance use
- Medical issues

*Mental Status Exam:*
- Appearance and behavior
- Speech
- Mood and affect
- Thought process and content
- Perceptions
- Cognition
- Insight and judgment

**Medical Evaluation:**

*When Needed:*
- Altered mental status
- First presentation
- Elderly
- Medical complaints
- Abnormal vital signs
- Intoxication/withdrawal

*Components:*
- Vital signs
- Physical exam (focused)
- Labs if indicated (toxicology, metabolic)
- Medical stability determination

**De-escalation:**

*Verbal De-escalation:*
- Calm, non-threatening approach
- Simple language
- Offer choices
- Listen to concerns
- Set limits clearly

*Environment:*
- Low stimulation
- Safe space
- Appropriate staffing

**Pharmacological Intervention:**

*Indications:*
- Severe agitation
- Verbal de-escalation ineffective
- Safety concern

*Options:*
- Oral preferred when possible
- IM if needed for safety
- Common: Haloperidol, lorazepam, olanzapine
- Monitor for adverse effects

**Restraint/Seclusion:**

*Last Resort:*
- When other methods fail
- Immediate danger
- Least restrictive intervention
- Time-limited
- Continuous monitoring
- Debriefing afterward

**Disposition:**

*Discharge:*
- Safe to go home
- Support available
- Follow-up arranged
- Safety plan completed

*Observation:*
- Need brief stabilization
- Unclear diagnosis
- Awaiting sobriety

*Inpatient:*
- Ongoing danger
- Unable to care for self
- Needs stabilization

**Legal Framework:**

*Involuntary Criteria (varies):*
- Danger to self
- Danger to others
- Grave disability
- Due to mental disorder

*Patient Rights:*
- Least restrictive treatment
- Legal review/hearing
- Notification of rights
- Advocacy access`,
      keyTerms: [
        { term: 'de-escalation', definition: 'Techniques to calm someone who is agitated' },
        { term: 'sitter', definition: 'Staff member providing continuous observation' },
        { term: 'restraint', definition: 'Physical or chemical restriction of movement for safety' },
        { term: 'emergency hold', definition: 'Legal mechanism for brief involuntary psychiatric detention' },
      ],
      clinicalNotes: 'Verbal de-escalation should be attempted before medication. Restraint is last resort with strict monitoring. Medical clearance needed for altered mental status. Document risk assessment and clinical rationale. Know your state involuntary commitment laws.',
    },
    4: {
      level: 4,
      summary: 'Psychiatric emergency management requires integrating medical and psychiatric assessment, applying de-escalation principles, utilizing pharmacology appropriately, and navigating legal requirements. Quality care involves trauma-informed approaches and system coordination.',
      explanation: `**Integrated Assessment:**

*Differential Diagnosis:*

Medical mimics:
- Delirium
- Metabolic (glucose, electrolytes)
- Infectious
- Neurological
- Endocrine
- Medication effects
- Substance intoxication/withdrawal

Psychiatric:
- Exacerbation of existing condition
- New-onset psychiatric illness
- Adjustment crisis

Combined:
- Medical illness triggering psychiatric symptoms
- Psychiatric illness with medical complications

*Red Flags for Medical Etiology:*
- Acute onset
- Age >40 without psychiatric history
- Altered vital signs
- Disorientation
- Visual hallucinations
- Abnormal neurological exam

**Agitation Management:**

*BETA Protocol:*
- B: Behavior (assess level and trajectory)
- E: Environment (safe, low stimulation)
- T: Talk (verbal de-escalation)
- A: Assessment (medical, psychiatric)

*Project BETA Guidelines:*
- Verbal de-escalation primary
- Medication as collaborative intervention
- Oral preferred over IM
- Monotherapy preferred
- Avoid over-sedation

*Pharmacological Options:*

First-line oral:
- Olanzapine 5-10mg
- Risperidone 2mg
- Lorazepam 1-2mg

IM options:
- Olanzapine IM (not with benzodiazepines)
- Haloperidol + lorazepam + diphenhydramine
- Ziprasidone IM

Monitor:
- Vital signs
- Level of consciousness
- Extrapyramidal symptoms
- Respiratory status

**Suicide Assessment:**

*Comprehensive Evaluation:*
- Ideation (passive vs active, frequency)
- Plan specificity
- Intent
- Means access
- Risk factors
- Protective factors
- Recent changes

*Disposition Factors:*
- Can patient collaborate with safety plan?
- Support available?
- Access to means reduced?
- Follow-up available?
- Gut feeling

**Trauma-Informed Care:**

*Principles:*
- Safety (physical and emotional)
- Trustworthiness
- Choice and collaboration
- Empowerment
- Cultural sensitivity

*Application:*
- Explain what you are doing
- Offer choices when possible
- Attend to privacy
- Recognize trauma history

**System Issues:**

*ED Boarding:*
- Patients waiting for inpatient beds
- Safety concerns
- Quality of care
- Staff burnout

*Alternatives:*
- Mobile crisis diversion
- Crisis stabilization units
- Psychiatric emergency services
- Medical clearance protocols

*Coordination:*
- Communication with outpatient providers
- Discharge planning
- Follow-up contact
- Care transitions`,
      keyTerms: [
        { term: 'Project BETA', definition: 'Best practices for Evaluation and Treatment of Agitation' },
        { term: 'boarding', definition: 'Extended ED stays waiting for inpatient placement' },
        { term: 'trauma-informed care', definition: 'Approach recognizing impact of trauma on patients' },
        { term: 'psychiatric emergency services', definition: 'Specialized units for psychiatric emergencies' },
      ],
      clinicalNotes: 'Always consider medical causes of psychiatric presentation. Verbal de-escalation first. Project BETA guides agitation management. Suicide assessment requires integration of multiple factors. Trauma-informed care improves outcomes. Document thoroughly.',
    },
    5: {
      level: 5,
      summary: 'Contemporary psychiatric emergency care emphasizes alternatives to ED, evidence-based agitation management, rapid-acting treatments for acute presentations, and system redesign. Research addresses optimal de-escalation, reducing restraint use, and improving care transitions.',
      explanation: `**Emergency Psychiatry Research:**

*Agitation Management:*
- Comparative effectiveness studies
- De-escalation training outcomes
- Reducing restraint/seclusion
- Patient experience

*Suicide Risk:*
- Brief interventions in ED
- Safety planning effectiveness
- Caring contacts post-ED
- Prediction models

*Psychosis:*
- Early psychosis identification
- Rapid treatment protocols
- Medical mimics recognition

**System Redesign:**

*Psychiatric Emergency Services:*
- Dedicated psychiatric emergency spaces
- Specialized staffing
- Reduced boarding
- Better outcomes

*EmPATH Units:*
- Emergency Psychiatric Assessment, Treatment, and Healing
- Alternative to ED
- 24-hour stabilization
- Better environment

*Alternatives to ED:*
- Mobile crisis
- Crisis stabilization
- 23-hour observation
- Telehealth evaluation

**Rapid Treatment:**

*Ketamine for Severe Agitation:*
- IM or IV
- Rapid onset
- Safety considerations
- Dissociative effects

*Rapid Tranquilization:*
- Updated protocols
- Monitoring requirements
- Adverse event prevention

**Technology:**

*Telehealth:*
- Telepsychiatry in ED
- Remote consultation
- Rural access
- After-hours coverage

*Decision Support:*
- Risk assessment tools
- Protocol integration
- Documentation aids

**Quality and Safety:**

*Metrics:*
- Time to evaluation
- Restraint rates
- Adverse events
- Patient satisfaction
- Follow-up rates

*Improvement:*
- Trauma-informed training
- De-escalation programs
- Environment modification
- Peer support integration

**Workforce:**

*Specialized Training:*
- Emergency psychiatry fellowships
- Nurse education
- Social work in ED
- Peer specialists

*Burnout Prevention:*
- High-stress environment
- Secondary trauma
- Support programs

**Policy:**

*Standards:*
- Screening requirements
- Medical clearance guidelines
- Boarding limits
- Transfer protocols

*Legal:*
- Involuntary commitment laws
- Restraint regulations
- Documentation requirements
- Patient rights

**Research Directions:**

*Implementation:*
- Scaling EmPATH model
- Crisis continuum integration
- Training effectiveness
- Quality metrics

*Clinical:*
- Optimal medications
- De-escalation techniques
- Brief interventions
- Prediction and prevention`,
      keyTerms: [
        { term: 'EmPATH', definition: 'Emergency Psychiatric Assessment, Treatment, and Healing unit model' },
        { term: 'telepsychiatry', definition: 'Remote psychiatric evaluation via video' },
        { term: 'rapid tranquilization', definition: 'Quick pharmacological management of severe agitation' },
        { term: 'secondary trauma', definition: 'Trauma experienced by those caring for traumatized patients' },
      ],
      clinicalNotes: `Current best practices:
- De-escalation before medication
- Trauma-informed approach
- Safety planning before discharge
- Follow-up within 24-72 hours

Emerging approaches:
- EmPATH units
- Telepsychiatry in ED
- Crisis alternatives to ED
- Ketamine for severe agitation

Key challenges:
- ED boarding
- Workforce capacity
- Care transitions
- System coordination`,
    },
  },

  media: [],

  citations: [
    {
      id: 'project-beta',
      type: 'article',
      title: 'Project BETA: Best Practices for Evaluation and Treatment of Agitation',
      authors: ['Nordstrom K', 'et al'],
      source: 'Western Journal of Emergency Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'mental-health-suicidal-ideation', targetType: 'topic', relationship: 'related', label: 'Suicidal Ideation' },
    { targetId: 'mental-health-crisis-resources', targetType: 'topic', relationship: 'related', label: 'Crisis Resources' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['mental-health', 'psychiatry', 'emergency'],
    keywords: ['psychiatric emergency', 'agitation', 'crisis', 'emergency department'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['psychiatry', 'emergency-medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default psychiatricEmergencyContent;
