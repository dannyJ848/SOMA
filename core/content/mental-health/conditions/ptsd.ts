/**
 * PTSD - Patient Education Content
 *
 * Comprehensive education about Post-Traumatic Stress Disorder including
 * symptoms, causes, and treatment approaches. Emphasizes that PTSD is
 * a treatable condition and recovery is possible.
 */

import { EducationalContent } from '../../types';

export const ptsdContent: EducationalContent = {
  id: 'mental-health-ptsd',
  type: 'condition',
  name: 'Post-Traumatic Stress Disorder',
  alternateNames: ['PTSD', 'Post-Traumatic Stress', 'Trauma Disorder'],

  levels: {
    1: {
      level: 1,
      summary: 'PTSD is a condition that can develop after experiencing or witnessing a terrifying event. It causes ongoing fear, nightmares, and distressing memories, but it is very treatable.',
      explanation: `**What Is PTSD?**

PTSD (Post-Traumatic Stress Disorder) can happen after someone goes through a very scary, dangerous, or life-threatening event. This could be:
- War or combat
- A serious accident
- Physical or sexual assault
- Natural disasters
- Witnessing violence
- Any event that made you fear for your life or safety

**Common Signs of PTSD:**

**Reliving the Trauma:**
- Nightmares about the event
- Flashbacks (feeling like it is happening again)
- Getting very upset when reminded of the event
- Physical reactions (racing heart, sweating) when triggered

**Avoiding Reminders:**
- Staying away from places, people, or things that remind you of the trauma
- Not wanting to talk about what happened
- Feeling numb or detached

**Being On Edge:**
- Being easily startled
- Feeling tense or "on guard" all the time
- Trouble sleeping
- Angry outbursts
- Difficulty concentrating

**Negative Changes in Thoughts and Feelings:**
- Feeling hopeless about the future
- Difficulty feeling positive emotions
- Feeling detached from family and friends
- Blaming yourself for what happened

**Important Facts:**

- PTSD is NOT a sign of weakness
- It is a normal response to abnormal events
- Many people develop PTSD - it is very common
- PTSD is highly treatable
- Most people get significantly better with treatment
- It is never too late to get help

**Treatment Options:**

- **Trauma-focused therapy**: Special types of counseling that help process the trauma
- **Medications**: Can help with symptoms like anxiety and sleep problems
- **Support groups**: Connecting with others who understand
- **Self-care**: Exercise, relaxation techniques, healthy routines

If you think you might have PTSD, please reach out to a mental health professional. Recovery is possible.`,
      keyTerms: [
        { term: 'PTSD', definition: 'A condition that can develop after a traumatic event, causing ongoing fear and distressing memories' },
        { term: 'trauma', definition: 'A deeply distressing or disturbing experience' },
        { term: 'flashback', definition: 'Suddenly feeling like the traumatic event is happening again' },
        { term: 'trigger', definition: 'Something that reminds you of the trauma and causes distress' },
      ],
      analogies: [
        'PTSD is like a car alarm that got stuck after a break-in - it keeps going off even when there is no danger.',
        'Trauma memories in PTSD are like files that never got properly saved - they keep popping up uncontrolled.',
        'Treatment helps turn down the volume on the alarm system so you can feel safe again.',
      ],
      examples: [
        'A veteran might hit the ground when hearing fireworks because it reminds them of combat.',
        'A car accident survivor might avoid driving or feel panicked as a passenger.',
        'Someone who experienced assault might have nightmares and avoid places that remind them of what happened.',
      ],
    },
    2: {
      level: 2,
      summary: 'PTSD involves persistent re-experiencing, avoidance, negative cognitions, and hyperarousal following trauma exposure. First-line treatments include trauma-focused psychotherapies (CPT, PE, EMDR) and SSRIs/SNRIs.',
      explanation: `**Understanding PTSD:**

PTSD is a trauma- and stressor-related disorder that can develop after exposure to actual or threatened death, serious injury, or sexual violence. Not everyone who experiences trauma develops PTSD - individual vulnerability, trauma type, and support systems all play a role.

**Diagnostic Symptom Clusters:**

**Intrusion Symptoms (at least 1):**
- Recurrent, involuntary distressing memories
- Recurrent distressing dreams
- Dissociative reactions (flashbacks)
- Intense psychological distress at reminders
- Marked physiological reactions to reminders

**Avoidance (at least 1):**
- Avoidance of distressing memories, thoughts, or feelings
- Avoidance of external reminders (people, places, activities)

**Negative Alterations in Cognition and Mood (at least 2):**
- Inability to remember important aspects of trauma
- Persistent negative beliefs about self, others, or world
- Distorted blame of self or others
- Persistent negative emotional state
- Diminished interest in activities
- Feeling detached from others
- Inability to experience positive emotions

**Alterations in Arousal and Reactivity (at least 2):**
- Irritable behavior and angry outbursts
- Reckless or self-destructive behavior
- Hypervigilance
- Exaggerated startle response
- Concentration problems
- Sleep disturbance

**Types of Trauma:**

- Combat and military trauma
- Sexual assault and abuse
- Physical assault
- Childhood abuse or neglect
- Accidents (motor vehicle, industrial)
- Natural disasters
- Witnessing death or violence
- Medical trauma
- Terrorism

**Risk Factors:**

- Severity and duration of trauma
- Perceived life threat
- Personal injury
- Interpersonal violence
- Prior trauma history
- Prior mental health problems
- Lack of social support
- Ongoing stressors

**Treatment Approaches:**

**Trauma-Focused Psychotherapy (First-Line):**
- Prolonged Exposure (PE): Gradually confronting trauma memories and avoided situations
- Cognitive Processing Therapy (CPT): Addressing stuck points in trauma-related thinking
- EMDR: Eye Movement Desensitization and Reprocessing

**Medications:**
- SSRIs (sertraline, paroxetine FDA-approved)
- SNRIs (venlafaxine)
- Prazosin for nightmares

**Combination and Support:**
- Often psychotherapy + medication
- Support groups
- Wellness practices`,
      keyTerms: [
        { term: 'hypervigilance', definition: 'Being constantly on alert for danger, scanning the environment' },
        { term: 'dissociation', definition: 'Feeling disconnected from yourself, your body, or reality' },
        { term: 'prolonged exposure', definition: 'Therapy that involves gradually facing trauma memories and avoided situations' },
        { term: 'CPT', definition: 'Cognitive Processing Therapy - helps change unhelpful trauma-related thoughts' },
        { term: 'EMDR', definition: 'Eye Movement Desensitization and Reprocessing - uses bilateral stimulation while processing trauma' },
      ],
      analogies: [
        'Trauma-focused therapy is like defusing a bomb - it makes the memories less explosive over time.',
        'Avoidance in PTSD is like a short-term painkiller that makes the problem worse long-term.',
      ],
    },
    3: {
      level: 3,
      summary: 'PTSD involves fear conditioning, impaired extinction, and altered amygdala-prefrontal-hippocampal circuitry. DSM-5 criteria require trauma exposure plus symptoms across four clusters. Evidence-based treatments include PE, CPT, EMDR, and sertraline/paroxetine.',
      explanation: `**DSM-5 Diagnostic Criteria:**

**Criterion A - Trauma Exposure:**
Exposure to actual or threatened death, serious injury, or sexual violence via:
1. Directly experiencing the event
2. Witnessing it happen to others
3. Learning it occurred to close family/friend
4. Repeated exposure to aversive details (first responders)

**Criterion B - Intrusion (1+ required):**
1. Recurrent involuntary intrusive memories
2. Recurrent distressing dreams
3. Dissociative reactions (flashbacks)
4. Intense distress at internal/external cues
5. Marked physiological reactions to cues

**Criterion C - Avoidance (1+ required):**
1. Avoidance of distressing memories, thoughts, feelings
2. Avoidance of external reminders

**Criterion D - Negative Cognitions and Mood (2+ required):**
1. Inability to remember important trauma aspects
2. Persistent negative beliefs
3. Distorted cognitions about cause/consequences
4. Persistent negative emotional state
5. Diminished interest in activities
6. Feeling detached/estranged
7. Persistent inability to experience positive emotions

**Criterion E - Arousal and Reactivity (2+ required):**
1. Irritable behavior/angry outbursts
2. Reckless or self-destructive behavior
3. Hypervigilance
4. Exaggerated startle
5. Concentration problems
6. Sleep disturbance

**Additional Criteria:**
- Duration >1 month
- Significant distress or impairment
- Not attributable to substances or medical condition

**Specifiers:**
- With dissociative symptoms (depersonalization/derealization)
- With delayed expression (criteria not met until 6+ months)

**Neurobiological Basis:**

*Fear Circuitry:*
- Amygdala hyperactivity (fear processing)
- Medial prefrontal cortex hypoactivity (fear regulation)
- Impaired fear extinction
- Hippocampal volume reduction (context processing)

*HPA Axis:*
- Paradoxically low cortisol in some patients
- Enhanced negative feedback
- Altered glucocorticoid receptor sensitivity

*Neurotransmitters:*
- Norepinephrine hyperactivity (hyperarousal)
- Serotonin dysregulation
- Endogenous opioid changes

**Evidence-Based Treatments:**

*Psychotherapy (First-Line):*

Prolonged Exposure (PE):
- Imaginal exposure: Repeatedly recounting trauma narrative
- In vivo exposure: Confronting avoided situations
- Processing: Discussing experience and insights
- Typically 8-15 sessions

Cognitive Processing Therapy (CPT):
- Identifies stuck points in trauma-related thinking
- Cognitive restructuring
- Written trauma account (optional)
- Typically 12 sessions

EMDR:
- Bilateral stimulation during trauma processing
- 8-phase protocol
- Similar efficacy to PE/CPT

*Pharmacotherapy:*
- Sertraline (FDA-approved): 50-200mg
- Paroxetine (FDA-approved): 20-60mg
- Venlafaxine: 75-225mg
- Prazosin for nightmares: Start 1mg, titrate to effect

**Comorbidities:**
- Depression (very common)
- Substance use disorders
- Other anxiety disorders
- Chronic pain
- Sleep disorders`,
      keyTerms: [
        { term: 'fear extinction', definition: 'Learning that a previously feared stimulus is no longer dangerous' },
        { term: 'imaginal exposure', definition: 'Repeatedly recounting the trauma memory in detail as part of PE therapy' },
        { term: 'stuck points', definition: 'Unhelpful beliefs about the trauma that maintain PTSD symptoms' },
        { term: 'bilateral stimulation', definition: 'Alternating left-right stimulation used in EMDR' },
        { term: 'prazosin', definition: 'Alpha-1 blocker used to treat trauma-related nightmares' },
      ],
      clinicalNotes: 'Assess for comorbid depression, substance use, and suicidality. Trauma-focused therapy is first-line but requires patient readiness. Stabilization may be needed first. Prazosin specifically helps with nightmares. Consider complex PTSD presentation in prolonged/repeated trauma.',
    },
    4: {
      level: 4,
      summary: 'PTSD pathophysiology involves impaired fear extinction, amygdala-vmPFC-hippocampal circuit dysfunction, and altered HPA axis. Treatment targets these mechanisms through exposure (extinction learning), cognitive restructuring, and pharmacological modulation of noradrenergic and serotonergic systems.',
      explanation: `**Pathophysiology - Integrated Model:**

*Fear Conditioning Model:*
- Classical conditioning: Trauma (US) paired with cues (CS)
- Conditioned fear response persists
- Impaired extinction learning
- Context-dependent extinction failure (renewal)

*Neural Circuit Abnormalities:*

Amygdala:
- Hyperreactivity to threat cues
- Enhanced fear acquisition
- Basolateral amygdala: Fear learning
- Central amygdala: Fear expression

Ventromedial Prefrontal Cortex:
- Hypoactivation
- Reduced top-down inhibition of amygdala
- Impaired extinction recall
- Target of exposure therapy

Hippocampus:
- Reduced volume (cause or consequence debated)
- Impaired context processing
- Fragmented trauma memories
- Failure of context-appropriate fear modulation

Insula:
- Hyperactivation
- Interoceptive processing
- Anticipatory anxiety

*HPA Axis Alterations:*
- Enhanced cortisol suppression (dexamethasone test)
- Low baseline cortisol (in some patients)
- Increased glucocorticoid receptor sensitivity
- Epigenetic changes in stress response genes

*Noradrenergic System:*
- Hyperactive locus coeruleus
- Elevated norepinephrine
- Contributes to hyperarousal, nightmares
- Target of prazosin (alpha-1 antagonist)

**Treatment Mechanisms:**

*Prolonged Exposure:*
- Activates fear memory
- Prolonged exposure allows habituation
- New inhibitory learning (extinction)
- Generalizes to other contexts
- vmPFC-amygdala connectivity strengthened

*Cognitive Processing Therapy:*
- Addresses maladaptive appraisals
- Stuck points: Assimilation (change beliefs about world) vs accommodation (change beliefs appropriately)
- Written account: Promotes trauma processing
- Cognitive restructuring: Evidence-based thinking

*EMDR Proposed Mechanisms:*
- Working memory taxation reduces memory vividness
- Bilateral stimulation may enhance interhemispheric communication
- Reconsolidation window activation
- Similar outcomes to PE/CPT

*Pharmacotherapy Mechanisms:*
- SSRIs: Amygdala modulation, neuroplasticity
- Prazosin: Blocks norepinephrine at alpha-1 receptors
- MDMA (investigational): Enhances extinction, reduces fear

**Treatment Algorithm:**

*Acute Stress (within 1 month):*
- Psychological first aid
- Brief CBT if needed
- Debriefing NOT recommended
- Monitor for PTSD development

*Established PTSD:*
1. Trauma-focused psychotherapy (PE, CPT, or EMDR)
2. SSRI/SNRI if therapy unavailable or preferred
3. Combination for partial response
4. Prazosin for nightmares
5. Augmentation strategies for treatment-resistant

**Complex PTSD:**

Associated with prolonged, repeated trauma (childhood abuse, captivity):
- Affect dysregulation
- Negative self-concept
- Relational difficulties
- May need stabilization before trauma processing
- Phase-based treatment approach`,
      keyTerms: [
        { term: 'fear acquisition', definition: 'Learning to associate neutral cues with threat' },
        { term: 'extinction recall', definition: 'Retrieving the memory that a stimulus is no longer dangerous' },
        { term: 'reconsolidation', definition: 'Process where reactivated memories become modifiable' },
        { term: 'assimilation', definition: 'Changing beliefs about the world to fit the trauma' },
        { term: 'complex PTSD', definition: 'PTSD with additional features following prolonged/repeated trauma' },
      ],
      clinicalNotes: 'PE, CPT, and EMDR have similar efficacy. Choice depends on patient preference and therapist training. Dropout rates are significant - address engagement. Consider comorbidity treatment sequencing. MDMA-assisted therapy showing promise in trials.',
    },
    5: {
      level: 5,
      summary: 'Contemporary PTSD research explores memory reconsolidation interventions, pharmacological augmentation of extinction, and precision medicine approaches. MDMA-assisted psychotherapy shows breakthrough potential. Biomarkers and computational models aim to predict treatment response and resilience.',
      explanation: `**Memory Reconsolidation Approaches:**

*Reconsolidation Window:*
- Retrieved memories become labile for ~6 hours
- Window for modification or disruption
- Propranolol during reconsolidation: Mixed results
- Mifepristone: Blocks glucocorticoid effects
- Clinical translation challenging

*Reconsolidation-Based Interventions:*
- Brief memory reactivation + intervention
- Post-retrieval extinction
- Pharmacological agents during reconsolidation
- Promising preclinical data, clinical trials ongoing

**Pharmacological Enhancement of Psychotherapy:**

*D-Cycloserine:*
- NMDA partial agonist
- Enhances extinction learning
- Given before exposure sessions
- Meta-analysis shows modest benefit
- Timing-dependent effects

*MDMA-Assisted Psychotherapy:*
- Breakthrough Therapy designation for PTSD
- Reduces fear, increases trust
- Enhances therapeutic alliance
- Phase 3 trials positive
- 2-3 MDMA sessions with psychotherapy
- Potential FDA approval pathway

*Ketamine:*
- Rapid effects on PTSD symptoms
- May enhance extinction
- Research stage for PTSD specifically

*Cannabinoids:*
- Endocannabinoid system in fear extinction
- THC, CBD under investigation
- Limited evidence currently

**Precision Medicine:**

*Biomarker Research:*
- Cortisol awakening response
- Startle response patterns
- Heart rate variability
- fMRI: Amygdala, vmPFC activity
- Inflammatory markers
- Not validated for clinical use

*Genetic Factors:*
- FKBP5 gene variants
- SLC6A4 (serotonin transporter)
- PACAP-PAC1 receptor system
- Gene × environment interactions
- Polygenic risk scores emerging

*Treatment Matching:*
- Predicting PE vs medication response
- Computational modeling of fear learning
- Personalized exposure protocols
- Research stage

**Novel Interventions:**

*Neuromodulation:*
- Transcranial magnetic stimulation (right DLPFC)
- Deep brain stimulation (investigational)
- Stellate ganglion block (sympathetic system)

*Digital Therapeutics:*
- Virtual reality exposure therapy
- Smartphone-based interventions
- Wearable monitoring for triggers

*Inflammation and Gut-Brain:*
- Elevated inflammation in PTSD
- Microbiome alterations
- Anti-inflammatory augmentation trials

**Prevention:**

*Early Intervention:*
- Psychological first aid
- Brief interventions for acute stress
- Identifying high-risk individuals
- Hydrocortisone administration (research)

*Resilience Factors:*
- Social support
- Prior coping efficacy
- Cognitive flexibility
- Physical fitness
- Meaning-making

**Complex PTSD and ICD-11:**

*ICD-11 Recognition:*
- PTSD core symptoms
- Plus: Affect dysregulation, negative self-concept, relationship difficulties
- Distinct from PTSD
- May require modified treatment approach

*Treatment Considerations:*
- Phase-based treatment
- Stabilization before trauma processing
- Affect regulation skills
- Attachment-focused interventions
- Longer treatment duration

**Clinical Integration:**

*Measurement-Based Care:*
- PCL-5 (PTSD Checklist)
- CAPS-5 (gold standard clinical interview)
- Regular symptom monitoring
- Treatment adjustment based on response

*Collaborative Care:*
- Integration with primary care
- Screening in medical settings
- Telehealth delivery
- Stepped care models`,
      keyTerms: [
        { term: 'MDMA-assisted psychotherapy', definition: 'Therapeutic use of MDMA to enhance PTSD treatment' },
        { term: 'post-retrieval extinction', definition: 'Extinction training after memory reactivation during reconsolidation window' },
        { term: 'stellate ganglion block', definition: 'Injection targeting sympathetic nervous system for PTSD' },
        { term: 'PCL-5', definition: 'PTSD Checklist for DSM-5 - self-report symptom measure' },
        { term: 'CAPS-5', definition: 'Clinician-Administered PTSD Scale - gold standard diagnostic interview' },
      ],
      clinicalNotes: `Current best practices:
- Trauma-focused therapy (PE, CPT, EMDR) first-line
- SSRIs for medication (sertraline, paroxetine)
- Prazosin for nightmares
- Address comorbidities

Emerging approaches:
- MDMA-assisted therapy (FDA review potential)
- Reconsolidation-based interventions
- VR exposure
- Precision medicine

Key challenges:
- Treatment dropout
- Partial response
- Complex presentations
- Dissemination of evidence-based treatments`,
    },
  },

  media: [
    {
      id: 'ptsd-symptoms-overview',
      type: 'diagram',
      filename: 'ptsd_symptoms.svg',
      title: 'PTSD Symptom Clusters',
      description: 'Visual overview of the four PTSD symptom categories',
    },
    {
      id: 'ptsd-treatment-pathway',
      type: 'diagram',
      filename: 'ptsd_treatment.svg',
      title: 'PTSD Treatment Algorithm',
      description: 'Decision tree for PTSD treatment selection',
    },
  ],

  citations: [
    {
      id: 'dsm5-ptsd',
      type: 'textbook',
      title: 'Diagnostic and Statistical Manual of Mental Disorders, 5th Edition',
      authors: ['American Psychiatric Association'],
      source: 'American Psychiatric Publishing',
      chapter: 'Trauma- and Stressor-Related Disorders',
    },
    {
      id: 'va-cpg-ptsd',
      type: 'article',
      title: 'VA/DoD Clinical Practice Guideline for PTSD',
      authors: ['Department of Veterans Affairs', 'Department of Defense'],
      source: 'VA/DoD',
      url: 'https://www.healthquality.va.gov/guidelines/MH/ptsd/',
    },
  ],

  crossReferences: [
    { targetId: 'mental-health-anxiety-disorders', targetType: 'condition', relationship: 'related', label: 'Anxiety Disorders' },
    { targetId: 'mental-health-depression', targetType: 'condition', relationship: 'related', label: 'Depression' },
    { targetId: 'mental-health-psychotherapy', targetType: 'topic', relationship: 'see-also', label: 'Psychotherapy Types' },
    { targetId: 'mental-health-safety-planning', targetType: 'topic', relationship: 'see-also', label: 'Safety Planning' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['mental-health', 'psychiatry', 'trauma'],
    keywords: ['PTSD', 'trauma', 'flashbacks', 'exposure therapy', 'EMDR', 'CPT'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['psychiatry'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default ptsdContent;
