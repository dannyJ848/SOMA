/**
 * Psychiatric Emergencies - Warning Signs and Response
 *
 * Comprehensive content on recognizing psychiatric emergencies including
 * suicidal ideation, psychosis, severe agitation, and mental health crises.
 */

import { EducationalContent } from '../types';

export const psychiatricEmergencies: EducationalContent = {
  id: 'emergency-psychiatric-warning-signs',
  type: 'condition',
  name: 'Psychiatric Emergency Warning Signs',
  alternateNames: ['Mental Health Crisis', 'Behavioral Emergency', 'Suicidal Emergency', 'Psychiatric Crisis'],

  levels: {
    1: {
      level: 1,
      summary: 'Mental health emergencies are real emergencies that need help right away. Knowing the warning signs of suicide, psychosis, and other mental health crises can save lives.',
      explanation: `## When Mental Health Needs Emergency Help

Mental health problems are medical problems, just like heart attacks or broken bones. Sometimes they need emergency help too.

**Warning signs someone needs immediate help:**

1. **Talking about suicide or wanting to die:**
   - Saying things like "I wish I was dead" or "Everyone would be better off without me"
   - Talking about having no reason to live
   - Saying goodbye to people as if they won't see them again
   - Giving away important belongings

2. **Thinking about hurting others:**
   - Talking about wanting to hurt specific people
   - Making threats
   - Planning violence

3. **Very confused or seeing/hearing things that aren't there:**
   - Believing things that aren't real
   - Seeing or hearing things others don't
   - Extremely confused about where they are or who they are

4. **Completely out of control behavior:**
   - Extreme agitation or panic
   - Unable to be calmed down
   - Violent or destructive behavior
   - Very risky behavior (running into traffic, etc.)

5. **Not responding to the outside world:**
   - Not moving or talking at all
   - In a trance-like state
   - Not reacting to anything around them

## If Someone Talks About Suicide

**DO:**
- Take it seriously - always
- Stay calm and listen
- Ask directly: "Are you thinking about hurting yourself?"
- Stay with them
- Remove dangerous items if possible (medications, weapons)
- Call 988 (Suicide and Crisis Lifeline) or 911

**DON'T:**
- Leave them alone
- Promise to keep it secret
- Try to argue them out of it
- Act shocked or judgmental
- Ignore the warning signs

## Getting Help

**Call 911 if:**
- Someone is in immediate danger
- Someone has hurt themselves
- Someone is threatening violence
- You can't keep them safe

**Call 988 (Suicide & Crisis Lifeline) if:**
- Someone is talking about suicide
- You need help knowing what to do
- Someone is in crisis but not immediate danger

**Other resources:**
- Crisis Text Line: Text HOME to 741741
- Go to any emergency room
- Call a trusted adult, doctor, or counselor

## Helping Someone in Crisis

1. **Stay calm** - Your calm can help them feel calmer
2. **Listen without judging** - Let them talk
3. **Don't leave them alone** - Stay or get someone else to stay
4. **Get help** - You don't have to handle this alone
5. **Follow up** - Check on them after the crisis

**Remember:** You're not responsible for solving their problems. You're responsible for helping them get help.`,
      keyTerms: [
        { term: 'suicide', definition: 'When someone intentionally ends their own life; warning signs can be recognized and help can save lives' },
        { term: 'crisis', definition: 'A time when someone is in danger or extreme distress and needs immediate help' },
        { term: 'psychosis', definition: 'When someone has trouble telling what is real and what isn\'t, like hearing voices or believing things that aren\'t true', pronunciation: 'sy-KOH-sis' },
        { term: 'hallucination', definition: 'Seeing, hearing, or feeling things that aren\'t really there', pronunciation: 'hah-loo-sin-AY-shun' },
      ],
      analogies: [
        'A mental health crisis is like a severe injury to the mind - it needs emergency care just like a physical injury.',
        'Calling 988 for mental health is like calling 911 for your body - it connects you to people trained to help.',
        'Warning signs of suicide are like smoke detectors - they alert us before a tragedy so we can take action.',
      ],
      examples: [
        'A friend starts giving away their things and says "I won\'t need these anymore" - this is a warning sign. Ask them directly about suicide and call 988 for help.',
        'A family member is talking to people who aren\'t there and seems scared of things that don\'t exist - they need to be evaluated at an emergency room.',
      ],
    },

    2: {
      level: 2,
      summary: 'Psychiatric emergencies include suicidal crises, acute psychosis, severe agitation, and other conditions requiring immediate intervention. Proper assessment and de-escalation can be lifesaving.',
      explanation: `## Understanding Psychiatric Emergencies

Psychiatric emergencies require urgent assessment and intervention to ensure safety and initiate treatment. They can occur in people with or without known mental illness.

### Suicide Risk Assessment

**Warning signs (IS PATH WARM mnemonic):**
- **I**deation: Talking or thinking about suicide
- **S**ubstance abuse: Increased alcohol or drug use
- **P**urposelessness: Feeling like there's no reason to live
- **A**nxiety: Severe anxiety or agitation
- **T**rapped: Feeling like there's no way out
- **H**opelessness: Believing things will never get better
- **W**ithdrawal: Isolating from friends and family
- **A**nger: Rage, seeking revenge
- **R**ecklessness: Acting recklessly without thinking
- **M**ood changes: Dramatic mood shifts

**Higher risk factors:**
- Previous suicide attempts (strongest predictor)
- Access to lethal means (firearms, medications)
- Recent loss (job, relationship, death)
- Mental illness (depression, bipolar, schizophrenia)
- Substance use
- Chronic pain or illness
- Recent discharge from hospital
- Family history of suicide

**Protective factors:**
- Social support
- Children or family responsibilities
- Cultural or religious beliefs
- Engaged in treatment
- Reasons for living

### Acute Psychosis

**What is psychosis?**
Disruption in the ability to distinguish reality from non-reality.

**Features:**
- Hallucinations: Perceiving things not there (auditory most common)
- Delusions: Fixed false beliefs (paranoid, grandiose, referential)
- Disorganized thinking: Speech that doesn't make sense
- Disorganized behavior: Bizarre or unpredictable actions
- Negative symptoms: Flat affect, withdrawal, apathy

**Causes:**
- Psychiatric: Schizophrenia, bipolar disorder, severe depression
- Substance-induced: Intoxication or withdrawal (alcohol, meth, cocaine)
- Medical: Delirium, infection, metabolic, neurological
- Medications: Steroids, anticholinergics, dopamine agonists

**Red flags suggesting medical cause:**
- First episode after age 40
- Acute onset
- Visual hallucinations (more likely medical)
- Fluctuating consciousness
- Abnormal vital signs
- Recent illness or medication change

### Severe Agitation

**Causes of acute agitation:**
- Psychiatric illness exacerbation
- Intoxication or withdrawal
- Delirium (medical cause)
- Personality disorders in crisis
- Traumatic brain injury
- Dementia with behavioral disturbance

**De-escalation techniques:**
1. Ensure safety (yours and patient's)
2. Reduce stimulation (quiet room, fewer people)
3. Keep distance, avoid cornering
4. Speak calmly, use simple language
5. Acknowledge their feelings
6. Offer choices when possible
7. Set clear, consistent limits

**When physical restraint may be needed:**
- Imminent danger to self or others
- De-escalation has failed
- Only as last resort and for shortest time
- Never as punishment
- Requires continuous monitoring

### Panic Attacks

**Symptoms (peak within minutes):**
- Pounding heart, racing pulse
- Sweating, trembling
- Shortness of breath, chest pain
- Nausea, dizziness
- Numbness or tingling
- Fear of dying or "going crazy"
- Feeling of unreality

**Management:**
- Reassurance that it will pass
- Breathing techniques
- Grounding exercises (5-4-3-2-1 senses)
- Safe, quiet environment

**When it's NOT just a panic attack:**
- Chest pain with cardiac risk factors
- Shortness of breath with low oxygen
- Altered consciousness
- Focal neurological symptoms

### Substance Intoxication and Withdrawal

**Alcohol withdrawal:**
- Tremors, anxiety, sweating (6-24h after last drink)
- Seizures (peak at 24-48h)
- Delirium tremens (48-96h): Confusion, hallucinations, autonomic instability

**Opioid withdrawal:**
- Not life-threatening but very uncomfortable
- Anxiety, muscle aches, nausea, diarrhea
- Pupil dilation, goosebumps, yawning

**Benzodiazepine/barbiturate withdrawal:**
- Similar to alcohol, can be life-threatening
- Seizures, severe anxiety, tremors

**Stimulant intoxication:**
- Agitation, paranoia
- Tachycardia, hypertension
- Risk of stroke, cardiac events

## When to Seek Different Levels of Care

| Call 911 | Emergency Room | Crisis Line (988) | Outpatient |
|----------|---------------|-------------------|------------|
| Suicide attempt in progress | Suicide plan with intent | Suicidal thoughts, no plan | Chronic suicidal ideation, engaged in treatment |
| Violence or threats | First psychotic episode | Non-crisis mental health concerns | Mild to moderate symptoms |
| Medical emergency with psychiatric symptoms | Substance withdrawal complications | Need to talk to someone | Medication management |
| Can't ensure safety | Severe self-injury | Supporting someone in crisis | Therapy for ongoing issues |`,
      keyTerms: [
        { term: 'suicidal ideation', definition: 'Thoughts about suicide, ranging from fleeting thoughts to detailed planning', pronunciation: 'eye-dee-AY-shun' },
        { term: 'delirium', definition: 'Acute confusion and disorientation, usually from a medical cause, that fluctuates over time', pronunciation: 'deh-LEER-ee-um' },
        { term: 'delusion', definition: 'A fixed false belief that persists despite evidence to the contrary' },
        { term: 'de-escalation', definition: 'Techniques to calm an agitated person and reduce the risk of violence' },
        { term: 'delirium tremens', definition: 'Severe, potentially fatal alcohol withdrawal syndrome with confusion and hallucinations', pronunciation: 'deh-LEER-ee-um TREH-menz' },
        { term: 'lethal means', definition: 'Methods that could be used for suicide, like firearms or medications; removing access is a key prevention strategy' },
      ],
      analogies: [
        'Suicide risk factors are like warning lights on a dashboard - the more lights that are on, the more urgent the situation.',
        'De-escalation is like slowly releasing pressure from a balloon instead of letting it pop.',
        "Psychosis is like the brain's reality filter getting scrambled - information gets through that shouldn't.",
      ],
      clinicalNotes: 'Previous suicide attempt is the strongest predictor of future attempt. Access to lethal means (especially firearms) significantly increases risk of completed suicide. Always assess for medical causes of psychiatric symptoms, especially in new-onset psychosis or altered mental status.',
    },

    3: {
      level: 3,
      summary: 'Psychiatric emergencies require systematic risk assessment, differential diagnosis, and evidence-based interventions. Understanding the interface between medical and psychiatric conditions is essential for safe and effective management.',
      explanation: `## Suicide Risk Assessment

### Structured Assessment

**Columbia Suicide Severity Rating Scale (C-SSRS):**
- Standardized assessment tool
- Asks about ideation, intensity, behavior
- Validated across populations

**Key questions:**
1. Do you wish you were dead?
2. Have you actually had thoughts of killing yourself?
3. Have you thought about how you would do this?
4. Have you had any intention of acting on these thoughts?
5. Have you taken any steps toward a suicide attempt?

**Risk stratification:**

| Level | Features | Disposition |
|-------|----------|-------------|
| Low | Ideation without plan/intent, protective factors | Safety plan, outpatient follow-up |
| Moderate | Plan without intent, some risk factors | May need hospitalization |
| High | Plan with intent, preparation, recent attempt | Hospitalization indicated |
| Imminent | Active attempt, means available | Immediate intervention, 1:1 observation |

### Safety Planning

**Stanley-Brown Safety Plan:**
1. Warning signs (triggers)
2. Internal coping strategies
3. Social situations/people that distract
4. People to ask for help
5. Professionals/agencies to contact
6. Making the environment safe (means restriction)

**Means restriction:**
- Remove firearms from home (most lethal method)
- Lock medications, give to family member
- Limit access to other means
- Counseling on secure storage

### Medical Clearance in Psychiatric Emergencies

**Why medical evaluation matters:**
- Up to 25% of psychiatric presentations have underlying medical cause
- Missing medical cause can be fatal
- Medical conditions can mimic any psychiatric syndrome

**Medical workup considerations:**
- Vital signs (fever, tachycardia, hypertension)
- Blood glucose
- Basic metabolic panel
- Toxicology screen
- Thyroid function (new-onset anxiety, psychosis)
- Urinalysis
- Pregnancy test
- CT head (new focal findings, head trauma)

**High-yield findings:**
- Fever: Infection, NMS, serotonin syndrome, anticholinergic toxicity
- Tachycardia: Withdrawal, medication toxicity, thyroid, delirium
- Altered oxygen: Hypoxia causing confusion
- Hypoglycemia: Altered mental status, agitation

### Acute Psychosis Management

**First-episode psychosis:**
- Rule out medical/substance cause
- Lower threshold for medical workup
- Avoid diagnostic labeling initially
- Start low-dose antipsychotic
- Early intervention programs improve outcomes

**Agitation in psychosis:**
- Verbal de-escalation first
- Offer oral medications if possible
- IM if patient refuses oral and safety risk

**Medication options:**
- Antipsychotics: Haloperidol, olanzapine, ziprasidone, droperidol
- Benzodiazepines: Lorazepam, midazolam
- Combination: Antipsychotic + benzodiazepine often used

**Monitoring:**
- Respiratory status (especially with benzodiazepines)
- QTc (antipsychotics can prolong)
- Extrapyramidal symptoms
- Vital signs

### Catatonia

**Features (Bush-Francis criteria):**
- Immobility, mutism, staring
- Stupor or agitation
- Posturing, rigidity, waxy flexibility
- Negativism (resistance to passive movement)
- Echolalia, echopraxia

**Differential:**
- Psychiatric: Schizophrenia, mood disorders, autism
- Medical: Anti-NMDA receptor encephalitis, NMS, infections

**Treatment:**
- Benzodiazepines (lorazepam challenge - response suggests catatonia)
- ECT for refractory cases
- Stop neuroleptics if NMS suspected

### Alcohol and Substance-Related Emergencies

**Alcohol withdrawal severity (CIWA-Ar scale):**
- Nausea, tremor, sweating
- Anxiety, agitation, tactile/auditory/visual disturbances
- Headache, orientation
- Score ≥15: Moderate-severe, consider benzodiazepines

**Wernicke encephalopathy:**
- Classic triad: Confusion, ataxia, ophthalmoplegia (only 10% have all three)
- Give thiamine BEFORE glucose
- IV thiamine 500mg TID × 2-3 days

**Stimulant intoxication:**
- Supportive care
- Benzodiazepines for agitation, seizure prevention
- Antipsychotics if psychotic symptoms persist
- Cool if hyperthermic
- Monitor for cardiac complications

**Serotonin syndrome:**
- Altered mental status, autonomic instability, neuromuscular abnormalities
- Clonus, hyperreflexia, hyperthermia
- Distinguish from NMS (slower onset, rigidity, no clonus)
- Stop serotonergic agents, supportive care, cyproheptadine

### Special Populations

**Pediatric/adolescent:**
- Higher vigilance for suicide risk
- Parental/guardian involvement critical
- Involuntary hospitalization rules may differ
- Consider developmental factors

**Geriatric:**
- Higher medical cause of psychiatric symptoms
- Delirium common (infection, medications, metabolic)
- Lower threshold for workup
- Medication sensitivity (start low, go slow)

**Pregnant:**
- Assess risk to fetus (suicide, medications, substance use)
- Avoid benzodiazepines if possible (though not absolutely contraindicated)
- Consider ECT for severe cases
- Involve OB/GYN

**Intellectual disability:**
- May present atypically
- Collateral information essential
- Consider medical causes
- Modified de-escalation approaches`,
      keyTerms: [
        { term: 'C-SSRS', definition: 'Columbia Suicide Severity Rating Scale; validated tool for structured suicide risk assessment' },
        { term: 'means restriction', definition: 'Removing or limiting access to methods of suicide; one of most effective prevention strategies' },
        { term: 'catatonia', definition: 'Syndrome of motor abnormalities including immobility, mutism, or agitation; medical emergency if untreated', pronunciation: 'kat-ah-TOH-nee-ah' },
        { term: 'CIWA-Ar', definition: 'Clinical Institute Withdrawal Assessment for Alcohol-Revised; scale for monitoring alcohol withdrawal severity' },
        { term: 'serotonin syndrome', definition: 'Potentially fatal condition from excess serotonergic activity; features altered mental status, autonomic instability, neuromuscular changes' },
        { term: 'NMS', definition: 'Neuroleptic Malignant Syndrome; rare, life-threatening reaction to antipsychotics with rigidity, fever, autonomic instability' },
      ],
      clinicalNotes: 'Always give thiamine before glucose to prevent precipitating Wernicke encephalopathy. The classic triad is present in only 10% of cases. In agitated patients, verbal de-escalation should be attempted first. Catatonia requires benzodiazepine trial before diagnosing treatment-resistant psychosis.',
    },

    4: {
      level: 4,
      summary: 'Advanced psychiatric emergency management integrates pharmacological interventions, legal/ethical considerations, and systems-based approaches. Understanding evidence-based treatments, risk assessment tools, and complex presentations is essential.',
      explanation: `## Advanced Pharmacology in Psychiatric Emergencies

### Antipsychotic Selection for Acute Agitation

**First-generation (typical):**
- Haloperidol: 5-10mg IM, rapid onset, high potency
- Droperidol: Faster onset, more sedating, QTc concern

**Second-generation (atypical):**
- Olanzapine: 10mg IM, more sedating, less EPS
- Ziprasidone: 10-20mg IM, less sedating, QTc concern
- Aripiprazole: 9.75mg IM, less sedating, akathisia risk

**Considerations:**
- Don't combine IM olanzapine with benzodiazepines (respiratory depression)
- Monitor QTc with droperidol, ziprasidone
- Have anticholinergics available for EPS (benztropine, diphenhydramine)

### Benzodiazepine Use

**Acute agitation:**
- Lorazepam 2mg IM/IV, can repeat
- Midazolam 5mg IM (faster IM absorption than lorazepam)

**Alcohol/benzo withdrawal:**
- Symptom-triggered dosing with CIWA
- Diazepam loading for severe cases
- Phenobarbital as alternative or adjunct

**Catatonia:**
- Lorazepam challenge: 1-2mg IV, response within minutes
- May require high doses (up to 20-30mg/day)
- Response predicts treatment outcome

### Legal and Ethical Framework

**Involuntary hospitalization criteria (generally):**
- Mental illness present
- Danger to self or others, or
- Grave disability (unable to care for basic needs)
- Less restrictive options inadequate

**Emergency detention:**
- 72-hour hold (varies by state)
- Allows for evaluation and stabilization
- Judicial hearing required for longer hold

**Capacity evaluation:**
- Patient can understand information
- Appreciate consequences
- Reason about options
- Communicate a choice

**Right to refuse treatment:**
- Even involuntary patients retain many rights
- Forced medication requires court order in most jurisdictions
- Exception: Emergency situation with imminent danger

### Risk Assessment Instruments

**Columbia Suicide Severity Rating Scale (C-SSRS):**
- Distinguishes ideation from behavior
- Tracks changes over time
- Evidence-based, widely validated

**Manchester Self-Harm Rule:**
- Identifies patients safe for discharge
- Prior self-harm, prior psychiatric treatment, benzodiazepine use, current psychiatric treatment
- If none present, very low risk of repeat

**Static-99 (sexual offense risk):**
- Actuarial tool for sexual reoffense risk
- Used in forensic settings

### Complex Presentations

**Excited delirium:**
- Extreme agitation, hyperthermia, superhuman strength
- Associated with stimulant use, psychiatric illness
- High mortality risk
- Ketamine emerging as treatment option
- Requires rapid sedation and cooling

**Neuroleptic Malignant Syndrome (NMS):**
- Fever, rigidity, altered mental status, autonomic instability
- CPK markedly elevated
- Stop antipsychotics, supportive care
- Bromocriptine, dantrolene for severe cases
- Mortality ~10%

**Serotonin syndrome vs NMS:**

| Feature | Serotonin Syndrome | NMS |
|---------|-------------------|-----|
| Onset | Rapid (hours) | Gradual (days) |
| Muscle | Clonus, hyperreflexia | Lead-pipe rigidity |
| GI | Diarrhea | Often constipation |
| Pupils | Dilated | Normal |
| Medication trigger | Serotonergic | Neuroleptic |

**Malignant catatonia:**
- Severe form with autonomic instability
- Medical emergency
- ECT is definitive treatment

### Electroconvulsive Therapy (ECT)

**Emergency indications:**
- Severe depression with imminent suicide risk
- Catatonia not responding to benzodiazepines
- Malignant catatonia
- NMS (relative indication)
- Psychotic depression with inanition

**Procedure:**
- General anesthesia with muscle relaxation
- Electrical stimulus induces generalized seizure
- Series of treatments (6-12 typically)

**Side effects:**
- Confusion, headache post-procedure
- Memory disturbance (usually anterograde, temporary)

### Systems-Level Interventions

**Crisis stabilization units:**
- Alternative to ED for psychiatric emergencies
- Shorter stays (23-72 hours)
- Less restrictive environment
- May reduce hospitalization

**Mobile crisis teams:**
- Respond to psychiatric emergencies in community
- Can divert from ED when appropriate
- Provide on-site assessment and stabilization

**Psychiatric emergency services (PES):**
- Dedicated psychiatric emergency area
- Specialized staff and programming
- Extended observation capability

**Crisis intervention training (CIT) for police:**
- Training in mental illness recognition
- De-escalation techniques
- Reduces use of force, improves outcomes

### Forensic Considerations

**Duty to warn (Tarasoff):**
- If patient makes credible threat against identifiable third party
- Clinician has duty to warn potential victim
- Varies by jurisdiction

**Mandatory reporting:**
- Child abuse/neglect
- Elder abuse
- Certain infectious diseases

**Documentation in psychiatric emergencies:**
- Risk assessment rationale
- Clinical decision-making
- Patient's own words when appropriate
- Safety plan details`,
      keyTerms: [
        { term: 'excited delirium', definition: 'Syndrome of extreme agitation, hyperthermia, and autonomic instability; medical emergency with high mortality' },
        { term: 'capacity', definition: 'Legal ability to make medical decisions; requires understanding, appreciation, reasoning, and communication' },
        { term: 'ECT', definition: 'Electroconvulsive Therapy; effective treatment for severe depression, catatonia, and medication-resistant psychosis' },
        { term: 'Tarasoff duty', definition: 'Legal obligation to warn identifiable third party if patient makes credible threat; varies by jurisdiction' },
        { term: 'CIWA-Ar', definition: 'Clinical Institute Withdrawal Assessment for Alcohol-Revised; standardized scale for alcohol withdrawal severity' },
        { term: 'CIT', definition: 'Crisis Intervention Training; specialized police training in mental health crisis response' },
      ],
      clinicalNotes: 'Avoid combining IM olanzapine with benzodiazepines due to respiratory depression risk. Excited delirium requires rapid intervention - ketamine emerging as preferred agent due to speed and safety profile. ECT is underutilized for severe depression and catatonia; it remains the most effective acute treatment for severe mood disorders.',
    },

    5: {
      level: 5,
      summary: 'Expert-level psychiatric emergency care integrates current evidence, innovative approaches, population health strategies, and systems optimization. Understanding emerging treatments, prevention science, and policy implications is essential.',
      explanation: `## Evidence-Based Suicide Prevention

### Lethal Means Counseling

**Evidence:**
- Firearms account for 50% of suicide deaths
- Case fatality rate: Firearms 85%, drugs 2%
- Reducing access significantly reduces suicide rates
- Counseling about safe storage is effective intervention

**Implementation:**
- Routine assessment of access to lethal means
- Non-judgmental counseling on safe storage
- Involve family members in storage decisions
- Provide resources (gun locks, medication lock boxes)
- Follow-up on implementation

### Zero Suicide Framework

**Organizational approach:**
- Leadership commitment
- Workforce training
- Patient identification and engagement
- Evidence-based treatment
- Continuity of care (warm handoffs)
- Data-driven quality improvement

**Key elements:**
- Universal screening for suicidal ideation
- Pathway to care for identified patients
- Safety planning for all at-risk patients
- Lethal means counseling
- Caring contacts post-discharge

### High-Risk Transition Periods

**Post-discharge suicide risk:**
- First week post-psychiatric discharge: Highest risk
- First month: 50-100x population risk
- Interventions during transition are critical

**Evidence-based strategies:**
- Same-day appointment post-discharge
- Caring contacts (brief calls, texts, letters)
- Safety planning intervention
- Restricted discharge prescriptions
- Family involvement

### Novel Treatments for Suicidal Crisis

**Ketamine/esketamine:**
- Rapid reduction in suicidal ideation (hours)
- Spravato (esketamine) FDA-approved for TRD with suicidal ideation
- IV ketamine studied in ED settings
- Duration of benefit variable

**Lithium:**
- Only medication with replicated suicide prevention evidence
- Consider adding in high-risk patients
- Even at low doses may have anti-suicide effect

**Clozapine:**
- Reduces suicide in schizophrenia (InterSePT trial)
- Underutilized due to monitoring requirements

### Violence Risk Assessment

**Structured professional judgment tools:**
- HCR-20: Historical, Clinical, Risk Management factors
- Violence Risk Appraisal Guide (VRAG)
- Guides assessment but not replacement for clinical judgment

**Dynamic risk factors (modifiable):**
- Active psychosis (especially command hallucinations)
- Substance intoxication
- Acute stressors
- Treatment non-adherence
- Access to weapons

**Risk management:**
- Treatment of underlying illness
- Substance abuse treatment
- Threat assessment teams
- Coordination with law enforcement when appropriate

### Telepsychiatry in Emergencies

**Evidence:**
- Comparable outcomes to in-person evaluation
- Reduces wait times, especially in rural areas
- Improves access to psychiatric consultation

**Implementation considerations:**
- Privacy and security
- Backup plans for technology failure
- Physical examination limitations
- State licensure requirements
- Integration with EMS and ED workflows

### Emerging Models of Care

**988 Suicide and Crisis Lifeline:**
- National crisis number (launched 2022)
- Goal: Entry point for crisis care continuum
- Local crisis centers, specialized services

**Crisis receiving centers:**
- "No wrong door" approach
- Accept all presentations
- 23-hour observation capability
- Medical screening capacity
- Connection to ongoing care

**Crisis stabilization units:**
- Short-stay alternative to hospitalization
- Typically 3-5 days
- Intensive treatment
- Cost-effective

**Psychiatric urgent care:**
- Walk-in psychiatric services
- Medication evaluation
- Brief intervention
- Referral to ongoing care

### Quality Metrics in Psychiatric Emergency Care

**Wait times:**
- Psychiatric boarding is major issue
- Contributes to worse outcomes, staff burnout
- Metrics: Time to psychiatric evaluation, boarding time

**Screening rates:**
- Universal suicide screening compliance
- Depression screening in medical settings
- Substance use screening

**Follow-up:**
- Appointments kept within 7 days of discharge
- Caring contacts documented
- Safety planning completion

### Research Frontiers

**Predictive analytics:**
- Machine learning for suicide risk prediction
- Electronic health record-based algorithms
- Real-time risk alerts
- Ethical considerations (false positives, privacy)

**Biomarkers:**
- Neuroimaging correlates of suicidal ideation
- Blood-based markers under investigation
- Not yet clinically applicable

**Digital interventions:**
- Crisis text line data
- App-based safety planning
- Ecological momentary assessment
- Wearables for physiological monitoring

### Policy and Advocacy

**Mental Health Parity:**
- Legal requirement for equivalent coverage
- Enforcement challenges
- Prior authorization barriers

**Involuntary treatment reform:**
- Debate over criteria (dangerousness vs. need for treatment)
- Assisted outpatient treatment (AOT) programs
- Civil liberties balance

**Gun violence prevention:**
- Extreme Risk Protection Orders (Red Flag laws)
- Waiting periods reduce suicide
- Safe storage legislation

**Reducing stigma:**
- Language matters (died by suicide, not "committed")
- Contact-based education
- Media guidelines for reporting`,
      keyTerms: [
        { term: 'Zero Suicide', definition: 'Healthcare organizational approach to suicide prevention emphasizing leadership, training, identification, treatment, and follow-up' },
        { term: 'caring contacts', definition: 'Brief, non-demanding contacts (calls, texts, cards) to high-risk individuals post-discharge; evidence-based intervention' },
        { term: 'means restriction', definition: 'Public health and clinical strategy to reduce access to lethal means for suicide; most effective prevention approach' },
        { term: 'HCR-20', definition: 'Historical, Clinical, Risk Management-20; structured professional judgment tool for violence risk assessment' },
        { term: '988', definition: 'National Suicide and Crisis Lifeline number; launched 2022 as entry point for crisis care continuum' },
        { term: 'ERPO', definition: 'Extreme Risk Protection Order (Red Flag law); allows temporary removal of firearms from individuals at risk' },
      ],
      clinicalNotes: `Expert-level considerations:

1. **Means restriction:** Lethal means counseling should be routine in psychiatric care. Firearms are the most lethal method; reducing access through secure storage saves lives.

2. **Post-discharge period:** First week after psychiatric hospitalization is highest risk. Same-day follow-up appointments, caring contacts, and safety planning are evidence-based interventions.

3. **Ketamine/esketamine:** Emerging rapid-acting option for suicidal ideation. Esketamine (Spravato) is FDA-approved for treatment-resistant depression with suicidal ideation but requires REMS monitoring.

4. **Systems approach:** Zero Suicide framework provides organizational structure for suicide prevention. Telepsychiatry expands access to care, especially in underserved areas.

5. **Quality improvement:** Track metrics on wait times, screening rates, and follow-up. Psychiatric boarding is a major quality and safety issue requiring systems-level solutions.`,
    },
  },

  media: [
    {
      id: 'suicide-warning-signs',
      type: 'diagram',
      filename: 'suicide-warning-signs.svg',
      title: 'Suicide Warning Signs',
      description: 'Visual guide to recognizing warning signs of suicide',
    },
    {
      id: 'de-escalation-techniques',
      type: 'diagram',
      filename: 'de-escalation-techniques.svg',
      title: 'De-escalation Techniques',
      description: 'Step-by-step guide for verbal de-escalation',
    },
    {
      id: 'safety-plan-template',
      type: 'diagram',
      filename: 'safety-plan-template.svg',
      title: 'Safety Plan Template',
      description: 'Stanley-Brown Safety Planning Intervention template',
    },
  ],

  citations: [
    {
      id: 'apa-suicide-guidelines',
      type: 'article',
      title: 'APA Practice Guidelines for the Assessment and Treatment of Patients with Suicidal Behaviors',
      source: 'American Psychiatric Association',
      accessedDate: '2026-01-24',
    },
    {
      id: 'zero-suicide-framework',
      type: 'article',
      title: 'Zero Suicide Framework',
      source: 'Zero Suicide Institute',
      url: 'https://zerosuicide.edc.org/',
      accessedDate: '2026-01-24',
    },
    {
      id: 'stanley-brown-safety-planning',
      type: 'article',
      title: 'Safety Planning Intervention: A Brief Intervention to Mitigate Suicide Risk',
      authors: ['Stanley, B.', 'Brown, G.K.'],
      source: 'Cognitive and Behavioral Practice',
      accessedDate: '2026-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'system-nervous', targetType: 'system', relationship: 'related', label: 'Nervous System' },
    { targetId: 'emergency-when-to-seek-care', targetType: 'topic', relationship: 'see-also', label: 'When to Seek Care' },
    { targetId: 'emergency-first-response', targetType: 'topic', relationship: 'see-also', label: 'First Response Actions' },
    { targetId: 'emergency-neurological', targetType: 'topic', relationship: 'see-also', label: 'Neurological Emergencies' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['emergency medicine', 'patient education', 'warning signs', 'psychiatry', 'crisis intervention'],
    keywords: ['suicide', 'psychosis', 'crisis', 'agitation', 'mental health', 'safety planning', '988'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['psychiatry', 'emergency medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default psychiatricEmergencies;
