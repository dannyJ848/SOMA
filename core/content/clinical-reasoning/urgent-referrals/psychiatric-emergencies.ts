/**
 * Psychiatric Emergencies
 *
 * Acute mental health conditions requiring immediate intervention to prevent
 * harm to self or others, or severe functional impairment.
 */

import { EducationalContent } from '../../types';

export const psychiatricEmergenciesContent: EducationalContent = {
  id: 'psychiatric-emergencies',
  type: 'concept',
  name: 'Psychiatric Emergencies',
  alternateNames: ['Mental Health Emergencies', 'Behavioral Emergencies', 'Psychiatric Crisis'],

  levels: {
    1: {
      level: 1,
      summary: 'Psychiatric emergencies are serious mental health situations where someone might hurt themselves or others, and need immediate help.',
      explanation: `Psychiatric emergencies are situations where a person is in crisis and needs help right away. These are serious situations that can be life-threatening.

**Call 911 Immediately If:**

**Someone Says They Want to Hurt Themselves**
- Talking about wanting to die
- Looking for ways to kill themselves
- Saying they have no reason to live
- Giving away possessions

**Someone Says They Want to Hurt Others**
- Threatening to hurt or kill someone
- Having weapons and talking about using them
- Making specific plans to harm others

**Someone Cannot Care for Themselves**
- Not eating or drinking for days
- So confused they do not know where they are
- Catatonic (frozen, not moving or responding)

**Severe Agitation or Violence**
- Breaking things, hitting people
- Out of control and dangerous
- Under influence of drugs causing violent behavior

**Go to Emergency Room For:**

**First-Time Psychotic Symptoms**
- Hearing voices that are not there
- Believing things that are not true
- Seeing things that are not there
- Severe paranoia

**Severe Medication Side Effects**
- Rigid muscles, high fever (may be neuroleptic malignant syndrome)
- Severe restlessness (akathisia)

**What to Do:**
- Stay calm and listen
- Do not leave the person alone if they are suicidal
- Call for help - do not try to handle dangerous situations alone
- Remove weapons, medications, or other means of self-harm if safe to do so
- The emergency room can provide immediate evaluation and safety`,
      keyTerms: [
        { term: 'suicidal ideation', definition: 'Thinking about wanting to die or kill oneself' },
        { term: 'psychosis', definition: 'Losing touch with reality, such as hearing voices or having false beliefs' },
        { term: 'catatonia', definition: 'A state where a person does not move or respond to the world around them' },
        { term: 'agitation', definition: 'A state of extreme restlessness, anxiety, or emotional upset' },
      ],
      analogies: [
        'A psychiatric emergency is like a heart attack of the mind - it needs immediate attention just like a medical emergency.',
        'It is like a fire in your house - you call for help immediately because waiting can make it much worse.',
      ],
      examples: [
        'A teenager who has been depressed tells their friend they have been collecting pills to end their life - this requires immediate intervention.',
        'Someone who has never had mental health problems suddenly hears voices telling them to hurt themselves - this needs emergency evaluation.',
      ],
    },
    2: {
      level: 2,
      summary: 'Psychiatric emergencies involve acute disturbances in thought, mood, or behavior that pose imminent risk of harm to self or others, or represent severe impairment requiring immediate intervention.',
      explanation: `Psychiatric emergencies require prompt assessment and intervention to ensure safety and stabilize the patient. Understanding the signs and appropriate responses is critical for healthcare providers and families.

**Categories of Psychiatric Emergencies:**

**1. Suicidal Crisis**
- Active suicidal ideation with plan and intent
- Recent suicide attempt
- Suicidal ideation with access to lethal means
- Protective factor removal (divorce, job loss, bereavement)

**Risk Factors:**
- Previous suicide attempts
- Mental illness (depression, bipolar, psychosis)
- Substance use
- Chronic medical illness
- Recent losses
- Access to firearms

**2. Homicidal/Violent Behavior**
- Threats to kill others
- Command hallucinations to harm others
- Acute paranoia with violent ideation
- Substance-induced aggression

**3. Acute Psychosis**
- First episode psychosis
- Severe exacerbation of chronic psychosis
- Delusional disorder with dangerous beliefs
- Substance-induced psychosis

**4. Severe Mood Disturbances**
- Mania with impaired judgment
- Severe depression with psychomotor retardation
- Mixed affective states
- Postpartum psychiatric disorders

**5. Cognitive Emergencies**
- Delirium with agitation
- Wernicke encephalopathy
- Severe catatonia
- Neuroleptic malignant syndrome

**6. Substance-Related Emergencies**
- Acute intoxication with danger
- Severe withdrawal (alcohol, benzodiazepines)
- Drug-induced psychosis
- Overdose with altered mental status

**Assessment Framework:**

**Safety Assessment:**
- Suicidal ideation, plan, intent, means
- Homicidal ideation
- Ability to care for self
- Protective factors

**Mental Status Examination:**
- Appearance, behavior, cooperation
- Speech, mood, affect
- Thought process and content
- Perceptual disturbances
- Cognition, insight, judgment

**Medical Clearance:**
- Rule out organic causes
- Vital signs
- Laboratory studies if indicated
- Toxicology screen

**Treatment Settings:**

**Emergency Department:**
- Immediate safety concerns
- Medical clearance needed
- Voluntary or involuntary hold initiation

**Crisis Stabilization Units:**
- Short-term (24-72 hours)
- Less restrictive than inpatient
- Focus on safety and stabilization

**Inpatient Psychiatric Unit:**
- Continued danger to self/others
- Severe symptoms requiring 24-hour care
- Medication stabilization needed

**Involuntary Treatment:**
Criteria vary by jurisdiction but generally include:
- Imminent danger to self or others
- Unable to care for basic needs
- Gravely disabled`,
      keyTerms: [
        { term: 'command hallucination', definition: 'A voice that tells a person to perform specific actions, potentially dangerous' },
        { term: 'neuroleptic malignant syndrome', definition: 'Life-threatening reaction to antipsychotic medications causing fever, muscle rigidity, and confusion (NMS)' },
        { term: 'delirium', definition: 'Acute confusional state with fluctuating consciousness, often due to medical cause' },
        { term: 'Wernicke encephalopathy', definition: 'Brain disorder caused by thiamine deficiency, often in alcohol use disorder' },
        { term: 'postpartum psychosis', definition: 'Severe psychiatric episode occurring after childbirth requiring emergency treatment' },
      ],
      analogies: [
        'Psychiatric emergency assessment is like being an air traffic controller - you must quickly determine which situations are most dangerous and need immediate priority.',
        'It is like triage in a disaster - you identify who needs help first based on severity and risk.',
      ],
      examples: [
        'A patient with schizophrenia who stops taking medication and now believes the FBI is trying to kill them, carrying a weapon for protection.',
        'A new mother who has not slept in days, is hearing voices telling her to harm her baby, and appears confused and agitated.',
      ],
    },
    3: {
      level: 3,
      summary: 'Psychiatric emergency management requires systematic risk assessment using validated tools, differentiation of medical versus psychiatric etiologies, and evidence-based pharmacological and non-pharmacological interventions.',
      explanation: `## Psychiatric Emergency Assessment and Management

### Suicide Risk Assessment

**The Columbia Suicide Severity Rating Scale (C-SSRS):**
- Ideation severity (5 levels)
- Intent (degree of expectation to die)
- Plan (specificity of proposed method)
- Behavior (preparatory acts, interrupted/aborted attempts)

**Risk Stratification:**
| Risk Level | Characteristics | Disposition |
|------------|-----------------|-------------|
| High | Plan, intent, means, recent attempt | Inpatient hospitalization |
| Moderate | Ideation with some planning | Crisis unit or intensive outpatient |
| Low | Passive ideation, no plan/intent | Outpatient with close follow-up |

**Protective Factors:**
- Children in the home
- Religious beliefs
- Future-oriented goals
- Strong social support
- Fear of death
- Responsibility to others

### Emergency Pharmacotherapy

**Acute Agitation:**

**Benzodiazepines:**
- Lorazepam 1-2 mg IM/PO/IV (rapid onset, predictable)
- Midazolam 5-10 mg IM (very rapid onset)
- Diazepam (avoid IM - erratic absorption)

**Antipsychotics:**
- Olanzapine 10 mg IM (effective, well-tolerated)
- Haloperidol 5 mg IM/IV (avoid if NMS, QTc risk)
- Ziprasidone 20 mg IM (monitor QTc)
- Aripiprazole 9.75 mg IM (lower QTc risk)

**Ketamine:**
- 4-5 mg/kg IM or 1-2 mg/kg IV
- Rapid sedation, preserves airway reflexes
- Dissociative effects, emergence reactions

**Combining Agents:**
- Olanzapine and lorazepam: Synergistic but avoid if oversedation concern
- Typical approach: Start with one agent, reassess

**Acute Psychosis:**
- Olanzapine 10 mg IM or haloperidol 5 mg IM
- Consider adjunctive lorazepam
- Monitor for EPS, QTc

**Catatonia:**
- Lorazepam challenge: 2 mg IV/IM
- If responsive, scheduled lorazepam
- ECT if refractory

### Medical Evaluation of Psychiatric Symptoms

**Delirium vs. Psychosis:**
| Feature | Delirium | Psychosis |
|---------|----------|-----------|
| Onset | Acute (hours-days) | Subacute/chronic |
| Consciousness | Altered/fluctuating | Clear |
| Attention | Impaired | Intact |
| Hallucinations | Visual > auditory | Auditory > visual |
| Cause | Medical/toxic | Primary psychiatric |

**Workup for New Psychosis:**
- CBC, CMP, LFTs, TSH
- Urine toxicology
- CT/MRI brain (first episode, abnormal neuro exam)
- Lumbar puncture (if infectious concern)
- B12, folate, syphilis serology

**Serotonin Syndrome vs. NMS:**
| Feature | Serotonin Syndrome | NMS |
|---------|-------------------|-----|
| Trigger | Serotonergic drugs | Dopamine antagonists |
| Onset | Hours | Days |
| Mental status | Agitation/delirium | Stupor/mutism |
| Vitals | Tachycardic, hypertensive | Stable or labile |
| Reflexes | Hyperreflexia/clonus | Normal or decreased |

### Specific Emergency Presentations

** excited Catatonia:**
- Severe agitation, bizarre movements
- Potential for exhaustion and death
- Requires urgent lorazepam or ECT

**Malignant Catatonia:**
- Catatonia + autonomic instability + fever
- High mortality
- ICU-level care, lorazepam, ECT

**Neuroleptic Malignant Syndrome:**
- Fever, rigidity, autonomic instability, altered mental status
- Elevated CK, leukocytosis
- Stop offending agent, supportive care, dantrolene or bromocriptine

**Serotonin Syndrome:**
- Triad: Mental status changes, autonomic instability, neuromuscular abnormalities
- Cyproheptadine (serotonin antagonist)
- Supportive care, benzodiazepines

**Akathisia:**
- Subjective inner restlessness, objective movements
- Often misdiagnosed as worsening psychiatric symptoms
- Treatment: Beta-blockers, benzodiazepines, anticholinergics

### Legal and Ethical Considerations

**Involuntary Commitment Criteria:**
1. Mental illness diagnosis
2. Danger to self or others, or gravely disabled
3. Least restrictive alternative

**Capacity Assessment:**
- Understanding of condition
- Appreciation of consequences
- Reasoning about treatment
- Expression of choice

**Duty to Warn (Tarasoff Obligations):**
- Identify specific victim
- Communicable threat
- Duty to protect intended victim

### Disposition Planning

**Criteria for Inpatient Admission:**
- Imminent suicide or homicide risk
- Grossly impaired self-care
- Severe symptoms requiring 24-hour care
- Need for medication stabilization
- Lack of outpatient support/safety

**Crisis Intervention:**
- Safety planning
- Lethal means counseling
- Crisis hotline numbers
- Follow-up appointment within 24-72 hours
- Mobile crisis team involvement`,
      keyTerms: [
        { term: 'C-SSRS', definition: 'Columbia Suicide Severity Rating Scale - standardized suicide risk assessment tool' },
        { term: 'catatonia', definition: 'Neuropsychiatric syndrome with psychomotor abnormalities including immobility or excessive movement' },
        { term: 'akathisia', definition: 'Movement disorder characterized by subjective feeling of inner restlessness and objective movements' },
        { term: 'ECT', definition: 'Electroconvulsive Therapy - procedure using electrical stimulation to treat severe mental illness' },
        { term: 'Tarasoff', definition: 'Legal duty of mental health professionals to protect identifiable potential victims of patient violence' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced psychiatric emergency management involves complex differential diagnosis, management of treatment-resistant conditions, coordination of care across specialties, and understanding of forensic and systems issues in crisis care.',
      explanation: `## Advanced Psychiatric Emergency Management

### Complex Diagnostic Presentations

**Psychiatric Presentations of Medical Conditions:**

**Neurological:**
- Temporal lobe epilepsy (ictal/interictal psychosis)
- Multiple sclerosis (pseudobulbar affect)
- Huntington disease (psychiatric symptoms often precede motor)
- Wilson disease (psychiatric presentation in young adults)
- Limbic encephalitis (autoimmune)

**Endocrine:**
- Hyperthyroidism (anxiety, mania)
- Hypothyroidism (depression, psychosis)
- Cushing syndrome (depression, psychosis)
- Addison disease (apathy, depression)
- Pheochromocytoma (anxiety, panic)

**Infectious:**
- Neurosyphilis
- HIV encephalopathy
- Herpes encephalitis
- Neuroborreliosis (Lyme)
- COVID-19 related neuropsychiatric effects

**Autoimmune:**
- Anti-NMDA receptor encephalitis
- Lupus cerebritis
- Hashimoto encephalopathy
- Susac syndrome

**Toxic/Metabolic:**
- Heavy metal poisoning
- Porphyria
- Hepatic encephalopathy
- Uremia
- Vitamin deficiencies (B12, thiamine, folate)

### Treatment-Resistant Emergency Presentations

**Refractory Agitation:**
- Consider underlying causes (pain, delirium)
- Ketamine sedation
- Droperidol (black box warning for QTc)
- Coordinate with anesthesia if needed
- Physical restraints as bridge to chemical sedation

**Treatment-Resistant Catatonia:**
- High-dose lorazepam (up to 24 mg/day)
- ECT (often life-saving)
- NMDA receptor modulators (amantadine, memantine)
- Zolpidem (paradoxical response diagnostic and therapeutic)

**Severe Self-Injurious Behavior:**
- Borderline personality disorder
- Intellectual disability
- Autism spectrum disorder
- Consider specialized residential treatment
- Behavioral interventions, protective equipment

### Special Populations

**Pediatric Psychiatric Emergencies:**

**Crisis Presentations:**
- Suicidal ideation (increasing in adolescents)
- Aggressive outbursts
- School refusal with psychiatric overlay
- First episode psychosis (lower medication doses)

**Considerations:**
- Developmental factors in assessment
- Family involvement essential
- Safety planning with parents
- School coordination

**Geriatric Psychiatric Emergencies:**

**Unique Presentations:**
- Late-life suicide (higher lethality)
- Delirium superimposed on dementia
- Late-onset psychosis (medical workup crucial)
- Caregiver burden crisis

**Considerations:**
- Medication sensitivity (start low, go slow)
- Drug interactions
- Medical comorbidities
- Social isolation

**Perinatal Psychiatric Emergencies:**

**Postpartum Depression:**
- Screen all postpartum women
- Risk to infant if untreated
- Treatment: SSRIs, psychotherapy
- Breastfeeding considerations

**Postpartum Psychosis:**
- Emergency (0.1-0.2% of births)
- Rapid onset, delirium-like features
- Risk of infanticide
- Hospitalization, antipsychotics, mood stabilizers

### Forensic Issues in Emergency Psychiatry

**Competency to Stand Trial:**
- Current ability to understand proceedings
- Assist in own defense
- Different from criminal responsibility
- Restoration if incompetent

**Criminal Responsibility (Insanity Defense):**
- Mental state at time of offense
- M'Naghten standard (did not know right from wrong)
- ALI standard (lacks substantial capacity)
- GBMI (Guilty But Mentally Ill) alternative

**Competency Evaluations in Emergency Setting:**
- Brief assessment if legal matter pending
- Formal evaluation often deferred
- Documentation of current mental state

### Systems of Care

**Psychiatric Emergency Services (PES):**
- Specialized ED for psychiatric patients
- Extended observation (up to 23 hours)
- Crisis stabilization
- Alternative to inpatient admission

**Mobile Crisis Teams:**
- Respond to community locations
- De-escalation in home/school
- Diversion from ED
- Follow-up connection

**Crisis Residential Programs:**
- Short-term residential alternative to hospital
- Voluntary typically
- Less restrictive environment

**Involuntary Outpatient Commitment:**
- Court-ordered outpatient treatment
- Assisted outpatient treatment (AOT)
- Conditions of community stay

### Quality and Safety

**Seclusion and Restraint:**
- Last resort after verbal de-escalation
- Continuous monitoring
- Time-limited orders
- Debriefing after use
- Regulatory requirements

**Medication Errors in Psychiatry:**
- QTc prolongation
- Anticholinergic burden
- Drug interactions
- High-alert medications

**Ligature Risks:**
- Environmental safety in psychiatric units
- Door handles, shower heads, bed frames
- Continuous assessment

### Psychiatric Aspects of Trauma

**Acute Stress Disorder:**
- Days to 1 month post-trauma
- Dissociative symptoms prominent
- Early intervention may prevent PTSD

**Trauma-Informed Care in Emergency Settings:**
- Recognize trauma history impact
- Avoid re-traumatization
- Safety and empowerment focus`,
      keyTerms: [
        { term: 'anti-NMDA receptor encephalitis', definition: 'Autoimmune disorder causing psychiatric symptoms, seizures, and autonomic instability' },
        { term: 'M\'Naghten standard', definition: 'Legal test for insanity based on inability to distinguish right from wrong' },
        { term: 'assisted outpatient treatment', definition: 'Court-ordered outpatient psychiatric treatment for patients with serious mental illness (AOT)' },
        { term: 'ligature', definition: 'Anything used for binding or tying that could be used for self-harm' },
        { term: 'pseudobulbar affect', definition: 'Neurological condition causing uncontrollable laughing or crying' },
      ],
      clinicalNotes: 'Psychiatric emergencies often involve complex interactions between biological, psychological, and social factors. A thorough medical evaluation is essential for first-episode presentations or atypical symptoms. Always consider organic causes before attributing symptoms to primary psychiatric illness, especially in new onset or atypical presentations.',
    },
    5: {
      level: 5,
      summary: 'Expert-level psychiatric emergency practice encompasses precision psychiatry approaches, management of complex pharmacological interactions, leadership in crisis systems development, and integration of emerging technologies in emergency mental health care.',
      explanation: `## Expert-Level Psychiatric Emergency Management

### Precision Psychiatry in Emergency Settings

**Pharmacogenomic-Guided Treatment:**

**CYP450 Metabolism:**
- CYP2D6 poor metabolizers: Reduced atomoxetine, increased beta-blocker effects
- CYP2C19 poor metabolizers: Increased diazepam, citalopram levels
- CYP3A4/5 variation: Affects many psychiatric medications

**Pharmacodynamic Variants:**
- HTR2A and HTR2C: Antipsychotic response and side effects
- DRD2: Dopamine receptor variants and antipsychotic efficacy
- COMT: Cognitive effects of antipsychotics

**Point-of-Care Testing:**
- Rapid genetic testing in ED
- Dosing guidance based on genotype
- Adverse effect prediction

### Complex Psychopharmacology

**Management of Serotonergic Medication Interactions:**

**Serotonin Syndrome Risk Combinations:**
- SSRI/SNRI + tramadol
- SSRI + MAOI (contraindicated)
- SSRI + triptans (theoretical concern)
- SSRI + St. John\'s Wort

**Switching Antidepressants:**
- Cross-tapering strategies
- Washout periods (MAOIs)
- Monitoring for discontinuation syndrome

**Psychiatric Medications in Medical Illness:**

**Renal Impairment:**
- Lithium (contraindicated in severe CKD)
- Gabapentin (dose adjustment)
- Pregabalin (dose adjustment)

**Hepatic Impairment:**
- Avoid or reduce lorazepam, oxazepam, temazepam (safe)
- Reduce antipsychotic doses
- Valproate contraindicated in severe hepatic impairment

**Cardiac Disease:**
- Avoid TCAs in arrhythmia, conduction disease
- Monitor QTc with antipsychotics
- Consider orthostatic hypotension risk

### Advanced Crisis Intervention Models

**Crisis Now Model:**
- 24/7 crisis call center
- Mobile crisis dispatch
- Crisis receiving/stabilization facilities
- Residential crisis beds

**988 Suicide and Crisis Lifeline:**
- National crisis number
- Local call routing
- Chat/text options
- Follow-up services

**Hospital Diversion Programs:**
- Police-based crisis intervention teams (CIT)
- Community-based crisis services
- Peer support integration
- Transportation alternatives

### Technology in Psychiatric Emergencies

**Digital Phenotyping:**
- Smartphone data for mood/psychosis prediction
- Speech analysis for mania detection
- Activity patterns for depression

**Telepsychiatry in Crisis:**
- Remote consultation to EDs
- Crisis telehealth services
- Rural access improvement
- Post-discharge follow-up

**AI and Machine Learning:**

**Suicide Risk Prediction:**
- Natural language processing of clinical notes
- EHR-based risk algorithms
- Limitations and ethical concerns

**Decision Support:**
- Medication interaction checking
- Treatment recommendation systems
- Diagnostic assistance

### Emerging Treatments

**Ketamine in Emergency Psychiatry:**

**Suicidal Ideation:**
- IV ketamine 0.5 mg/kg over 40 minutes
- Rapid reduction in suicidal thoughts (hours)
- Requires monitoring infrastructure
- Nasal esketamine option

**Agitation:**
- IM ketamine for severe agitation
- Rapid onset, airway preservation
- Dissociative emergence phenomenon

**Psychedelic-Assisted Therapy:**

**MDMA-Assisted Therapy:**
- Phase 3 trials for PTSD
- Emergency consideration: Acute reactions
- De-escalation, supportive care

**Psilocybin:**
- Research for depression, anxiety
- Acute panic/psychosis risk
- Set and setting importance

**Neuromodulation:**

**Emergency ECT:**
- Catatonia, malignant catatonia
- Severe depression with suicidality
- Neuroleptic malignant syndrome
- High efficacy, rapid response

**TMS:**
- Less applicable in emergency setting
- Outpatient depression treatment

### Quality Improvement and Research

**Psychiatric Emergency Quality Metrics:**

**Patient Safety:**
- Restraint and seclusion rates
- Medication errors
- Falls and injuries
- Suicide attempts in ED

**Clinical Outcomes:**
- Time to psychiatric evaluation
- Length of stay
- Readmission rates
- Follow-up appointment rates

**Patient Experience:**
- Satisfaction surveys
- Trauma-informed care measures
- Cultural competency

**Research Ethics in Crisis Settings:**

**Informed Consent Challenges:**
- Capacity fluctuations
- Proxy consent
- Exception from informed consent

**Vulnerable Populations:**
- Extra protections needed
- Incarcerated individuals
- Cognitively impaired
- Minors

### Systems Leadership

**Developing Crisis Systems:**

**Gap Analysis:**
- Identify service needs
- Resource mapping
- Bottleneck identification

**Stakeholder Engagement:**
- Hospitals
- Law enforcement
- Community providers
- Lived experience advisors
- Payers

**Funding Models:**
- Medicaid crisis services
- State mental health funds
- Certified Community Behavioral Health Clinics (CCBHC)
- Value-based contracting

**Workforce Development:**
- Psychiatry emergency fellowships
- C-L psychiatry training
- Peer workforce
- Crisis counselor training

### Legal and Policy Expertise

**Involuntary Treatment Law:**
- State-by-state variations
- Outpatient commitment statutes
- Emergency hold provisions
- Appeals processes

**Mental Health Parity:**
- Parity Act requirements
- Non-quantitative treatment limitations
- Litigation strategies

**Criminal Justice Integration:**
- Sequential intercept model
- Jail diversion programs
- Forensic assertive community treatment
- Re-entry services

### Global Mental Health

**Psychiatric Emergencies in Low-Resource Settings:**
- WHO mental health gap action program (mhGAP)
- Task-shifting to non-specialists
- Community-based crisis response
- Scalable interventions`,
      keyTerms: [
        { term: 'digital phenotyping', definition: 'Using data from personal digital devices to measure behavior and mental states' },
        { term: 'esketamine', definition: 'S-enantiomer of ketamine, FDA-approved nasal spray for treatment-resistant depression' },
        { term: 'CCBHC', definition: 'Certified Community Behavioral Health Clinic - model integrating crisis and ongoing services' },
        { term: 'mhGAP', definition: 'WHO Mental Health Gap Action Programme - scaling up services in low-resource settings' },
        { term: 'sequential intercept model', definition: 'Framework for identifying intervention points to prevent justice involvement' },
      ],
      clinicalNotes: `Expert psychiatric emergency practice requires:
1. Integration of biological, psychological, and social factors
2. Understanding of complex pharmacology and pharmacogenomics
3. Systems thinking and leadership skills
4. Comfort with uncertainty and rapid decision-making
5. Trauma-informed and culturally responsive care
6. Advocacy for patient-centered crisis systems

The field is evolving toward precision psychiatry, technology integration, and community-based alternatives to hospitalization. The goal is to provide the right care at the right time in the right place.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'apa-practice-guideline',
      type: 'article',
      title: 'The American Psychiatric Association Practice Guideline for the Assessment and Treatment of Patients With Suicidal Behaviors',
      source: 'American Psychiatric Association',
      url: 'https://psychiatryonline.org/guidelines',
    },
    {
      id: 'C-SSRS-screening',
      type: 'article',
      title: 'Columbia Suicide Severity Rating Scale (C-SSRS)',
      authors: ['Posner K', 'et al.'],
      source: 'Columbia University Medical Center',
      url: 'https://cssrs.columbia.edu/',
    },
    {
      id: 'acep-agitation',
      type: 'article',
      title: 'Clinical Policy: Management of Agitated or Violent Patients',
      source: 'American College of Emergency Physicians',
    },
  ],

  crossReferences: [
    { targetId: 'cardiac-referral-criteria', targetType: 'concept', relationship: 'sibling', label: 'Cardiac Referral Criteria' },
    { targetId: 'neurological-referrals', targetType: 'concept', relationship: 'sibling', label: 'Neurological Referrals' },
    { targetId: 'oncologic-urgencies', targetType: 'concept', relationship: 'sibling', label: 'Oncologic Urgencies' },
  ],

  tags: {
    systems: ['nervous', 'psychiatric'],
    topics: ['emergency-medicine', 'psychiatry', 'clinical-reasoning'],
    keywords: ['psychiatric', 'emergency', 'suicide', 'psychosis', 'agitation', 'crisis'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['psychiatry', 'emergency-medicine'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default psychiatricEmergenciesContent;
