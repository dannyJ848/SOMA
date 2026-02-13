/**
 * Acute Stress Disorder
 *
 * Comprehensive educational content on acute stress disorder,
 * its diagnosis, and early intervention approaches.
 */

import { EducationalContent } from '../../../types';

export const acuteStressDisorderContent: EducationalContent = {
  id: 'psychiatry-acute-stress-disorder',
  type: 'condition',
  name: 'Acute Stress Disorder',
  alternateNames: ['ASD', 'Acute Stress Reaction'],

  levels: {
    1: {
      level: 1,
      summary: 'Acute stress disorder is a short-term condition that can occur in the first month after experiencing a traumatic event, causing severe anxiety, flashbacks, and difficulty functioning.',
      explanation: `Acute stress disorder happens when someone has severe stress reactions in the days and weeks after a scary or dangerous event.

**What Can Cause It:**

- Car accidents
- Violent attacks
- Natural disasters
- Seeing someone get seriously hurt
- Any event where you felt in danger

**What It Feels Like:**

- Feeling numb or disconnected from reality
- Having trouble remembering parts of what happened
- Feeling like you're in a dream
- Flashbacks or nightmares about the event
- Avoiding anything that reminds you of it
- Being jumpy and on edge
- Trouble sleeping
- Difficulty concentrating

**Important to Know:**

- These reactions are NORMAL after trauma
- Most people recover on their own
- Symptoms last from 3 days to 1 month
- If symptoms last longer than a month, it may become PTSD
- Getting help early can prevent long-term problems

**What Helps:**

- Talk to someone you trust
- Stay connected with family and friends
- Take care of basic needs (sleep, food, exercise)
- See a mental health professional if symptoms are severe
- Know that healing takes time`,
      keyTerms: [
        { term: 'trauma', definition: 'A very scary or dangerous event that overwhelms your ability to cope' },
        { term: 'dissociation', definition: 'Feeling disconnected from yourself or like things aren\'t real' },
        { term: 'flashback', definition: 'Suddenly feeling like the traumatic event is happening again' },
      ],
      analogies: [
        'Acute stress disorder is like your brain being in shock after a big event - it needs time to process what happened.',
        'Dissociation is like your mind pressing the "pause" button because everything feels too overwhelming.',
      ],
      examples: [
        'After a car accident, someone might feel like they\'re watching themselves from outside their body.',
        'A person might have trouble remembering details of an assault even though they were conscious.',
      ],
    },
    2: {
      level: 2,
      summary: 'Acute stress disorder is diagnosed when trauma-related symptoms including intrusion, dissociation, avoidance, and arousal occur within 3 days to 1 month after trauma exposure, often predicting PTSD development.',
      explanation: `**Diagnostic Criteria (DSM-5):**

Exposure to actual or threatened death, serious injury, or sexual violence, followed by ≥9 symptoms from 5 categories:

*Intrusion:*
- Intrusive memories
- Distressing dreams
- Flashbacks
- Intense distress to reminders

*Negative Mood:*
- Inability to experience positive emotions

*Dissociative:*
- Altered sense of reality
- Inability to remember important trauma aspects

*Avoidance:*
- Avoiding trauma-related thoughts/feelings
- Avoiding external reminders

*Arousal:*
- Sleep disturbance
- Irritability
- Hypervigilance
- Concentration problems
- Exaggerated startle

**Timing:**
- Onset: 3 days to 1 month after trauma
- Duration: 3 days to 1 month
- If >1 month → consider PTSD diagnosis

**Relationship to PTSD:**
- About 50% of those with ASD develop PTSD
- ASD is a risk factor for PTSD
- But many develop PTSD without prior ASD

**Treatment:**

*Psychological First Aid:*
- Immediate support
- Practical assistance
- Connection to resources
- Not formal therapy

*Trauma-Focused CBT:*
- Brief intervention (5-6 sessions)
- Exposure-based
- Cognitive restructuring
- Most effective early intervention

*What NOT to Do:*
- Psychological debriefing (not effective, may be harmful)
- Forcing people to talk about trauma
- Medicating everyone

*Medication (if needed):*
- Short-term for severe symptoms
- Sleep aids if significant insomnia
- SSRIs if transitioning to chronic symptoms`,
      keyTerms: [
        { term: 'psychological first aid', definition: 'Evidence-informed support for people immediately after trauma' },
        { term: 'dissociative symptoms', definition: 'Feeling detached from reality or having memory gaps for the trauma' },
        { term: 'psychological debriefing', definition: 'Forcing discussion of trauma soon after; NOT recommended' },
      ],
    },
    3: {
      level: 3,
      summary: 'ASD diagnosis requires at least 9 of 14 symptoms across intrusion, negative mood, dissociation, avoidance, and arousal clusters within 3 days to 1 month post-trauma, with early trauma-focused CBT being the evidence-based preventive intervention.',
      explanation: `**DSM-5 Criteria in Detail:**

A. Exposure to trauma (death, injury, sexual violence):
- Direct experience
- Witnessing
- Learning about (close family/friend)
- Repeated professional exposure (not via media)

B. Nine or more symptoms from five categories (beginning or worsening after trauma):

*Intrusion (4 possible):*
1. Recurrent, intrusive distressing memories
2. Recurrent distressing dreams
3. Dissociative reactions (flashbacks)
4. Intense/prolonged distress to internal/external cues

*Negative Mood (1 possible):*
5. Persistent inability to experience positive emotions

*Dissociative (2 possible):*
6. Altered sense of reality (self or surroundings)
7. Inability to remember important trauma aspect

*Avoidance (2 possible):*
8. Efforts to avoid distressing memories, thoughts, feelings
9. Efforts to avoid external reminders

*Arousal (5 possible):*
10. Sleep disturbance
11. Irritable behavior, angry outbursts
12. Hypervigilance
13. Concentration problems
14. Exaggerated startle response

C. Duration: 3 days to 1 month after trauma
D. Clinically significant distress or impairment
E. Not attributable to substance or medical condition

**Distinguishing Features:**

*ASD vs. PTSD:*
- ASD: 3 days - 1 month post-trauma
- PTSD: >1 month post-trauma
- ASD emphasizes dissociative symptoms
- Similar symptom clusters

*ASD vs. Normal Stress Response:*
- Many trauma survivors have acute symptoms
- ASD diagnosis requires functional impairment
- Many recover without intervention

**Predictors of PTSD Development:**

From ASD:
- Severity of ASD symptoms
- Peritraumatic dissociation
- Prior trauma history
- Lack of social support
- Ongoing stressors

**Evidence-Based Early Intervention:**

*Trauma-Focused CBT (within 3 months):*
- 4-5 sessions
- Psychoeducation
- Breathing retraining
- Imaginal exposure
- In vivo exposure
- Cognitive restructuring
- Reduces PTSD rates

*Timing:*
- Not immediately (allow natural recovery)
- Target those with persistent symptoms (2+ weeks)
- Stepped care approach

**Pharmacological Considerations:**

- No medications FDA-approved for ASD
- Avoid prophylactic benzodiazepines (may increase PTSD risk)
- Short-term sleep aids if necessary
- Consider SSRIs if symptoms persist

**Not Recommended:**

- Single-session debriefing (no benefit, potential harm)
- Universal intervention for all trauma-exposed
- Early benzodiazepine treatment`,
      keyTerms: [
        { term: 'peritraumatic dissociation', definition: 'Dissociation occurring during or immediately after trauma; predicts PTSD' },
        { term: 'stepped care', definition: 'Matching treatment intensity to symptom severity' },
        { term: 'watchful waiting', definition: 'Monitoring without intervention, allowing natural recovery' },
      ],
    },
    4: {
      level: 4,
      summary: 'ASD represents an acute stress response with strong dissociative component, serving as a window for secondary prevention of PTSD through targeted early intervention, though the diagnostic category\'s predictive utility remains debated.',
      explanation: `**Neurobiological Perspective:**

*Acute Stress Response:*
- HPA axis activation (cortisol surge)
- Noradrenergic activation (norepinephrine)
- Prefrontal-amygdala disconnection
- Hippocampal functioning impaired
- Memory encoding disrupted (peritraumatic)

*Dissociation Neurobiology:*
- Parasympathetic activation (freeze response)
- Opioid system activation
- Prefrontal shutdown
- Depersonalization/derealization circuitry

*Transition to PTSD:*
- Failed cortisol containment
- Sensitized amygdala
- Impaired extinction learning
- Consolidation of traumatic memories

**Predictive Validity Issues:**

*Sensitivity/Specificity:*
- ~50% with ASD develop PTSD
- Many with PTSD didn't have ASD
- Modest predictive power
- Led to DSM-5 changes (reduced dissociation emphasis)

*Alternative Predictors:*
- Peritraumatic distress
- Acute PTSD symptom severity
- Prior trauma history
- Social support level
- Ongoing stressors

**Early Intervention Research:**

*Trauma-Focused CBT:*
- Meta-analyses support efficacy
- NNT ~4 to prevent one PTSD case
- 4-6 sessions sufficient
- Exposure component important

*Timing Considerations:*
- Too early may interfere with natural recovery
- Too late may miss window
- 2-4 weeks post-trauma optimal
- Target those with persistent symptoms

*Novel Approaches:*
- Brief eclectic psychotherapy
- Written exposure therapy
- Internet-delivered CBT
- Single prolonged exposure session

**Pharmacological Prevention:**

*Hydrocortisone:*
- Administered in ED
- May reduce PTSD (some studies)
- Modulates memory consolidation
- Not yet standard of care

*Propranolol:*
- Beta-blocker
- Blocks noradrenergic memory consolidation
- Mixed results
- Timing crucial

*Not Effective:*
- Benzodiazepines (may be harmful)
- SSRIs for prevention (treatment, yes; prevention, unclear)

**Special Considerations:**

*High-Risk Populations:*
- First responders
- Military
- Assault survivors
- ICU patients
- Burn victims

*Screening:*
- Acute Stress Disorder Scale (ASDS)
- Stanford Acute Stress Reaction Questionnaire
- Primary Care PTSD Screen

*Stepped Care Model:*
1. Psychological first aid (all trauma-exposed)
2. Watchful waiting with monitoring
3. Early intervention for persistent symptoms
4. Full treatment for ASD/PTSD`,
      keyTerms: [
        { term: 'secondary prevention', definition: 'Preventing disorder development in those at risk' },
        { term: 'NNT', definition: 'Number needed to treat; ~4 for early CBT in ASD' },
        { term: 'peritraumatic distress', definition: 'Intense emotional response during trauma; predicts PTSD' },
      ],
      clinicalNotes: 'Screen at-risk individuals 2-4 weeks post-trauma. Offer trauma-focused CBT for persistent symptoms. Avoid benzodiazepines. Most recover without intervention. Provide psychoeducation about normal stress responses. Address practical needs and social support.',
    },
    5: {
      level: 5,
      summary: 'Contemporary ASD research focuses on optimizing secondary prevention timing and methods, identifying biomarkers for PTSD risk stratification, and developing targeted early interventions including pharmacological prophylaxis and abbreviated psychological treatments.',
      explanation: `**Nosological Considerations:**

*DSM-5 Changes:*
- Reduced emphasis on dissociation
- More symptom categories
- Acknowledges limitations in predicting PTSD
- Bridge between normal response and chronic disorder

*ICD-11:*
- "Acute Stress Reaction" (not a disorder)
- Self-limiting response to trauma
- Different conceptualization

*Research Frameworks:*
- Dimensional approaches
- Trajectory analysis (resilient, recovery, chronic, delayed)
- Risk factor identification

**Biomarker Research:**

*Predicting PTSD Development:*
- Peritraumatic cortisol (low levels → higher risk)
- Heart rate in ED (elevated → higher risk)
- Genetic variants (FKBP5, COMT)
- Epigenetic changes
- Inflammatory markers (CRP, IL-6)

*Neuroimaging:*
- Amygdala reactivity post-trauma
- Hippocampal volume (pre-existing vulnerability)
- Prefrontal function
- Resting-state connectivity

**Prevention Optimization:**

*Timing Studies:*
- Immediate intervention may interfere with natural processing
- 2-4 weeks optimal for CBT
- Pharmacological timing crucial (memory consolidation window)

*Intervention Development:*

Written Exposure Therapy:
- 5 sessions of written narrative
- No in-person processing
- Comparable to PE
- Scalable

Single-Session Interventions:
- Prolonged Exposure condensed
- Under investigation
- Could increase access

Digital/Remote Delivery:
- Internet CBT effective
- App-based monitoring
- Telehealth barriers reduced

*Pharmacological Prevention Trials:*

Hydrocortisone:
- ED administration studies
- 10mg IV within 6 hours
- Reduced PTSD in some studies
- Mechanism: Memory modulation

Propranolol:
- Within 6 hours of trauma
- Blocks noradrenergic consolidation
- Inconsistent results
- Reconsolidation approaches

Ketamine:
- ED administration feasibility
- NMDA antagonism
- Early data only

Oxytocin:
- Social processing enhancement
- May enhance early intervention
- Research ongoing

**Special Populations:**

*ICU Survivors:*
- High ASD/PTSD rates
- ICU diaries
- Early mobilization
- Family involvement
- Sedation protocols

*Traumatic Injury:*
- Stepped collaborative care
- Pain management important
- Opioid effects on memory
- Rehabilitation integration

*Mass Casualty Events:*
- Population-based approaches
- Skills for Psychological Recovery
- Community resilience programs
- Avoid pathologizing normal responses

**Future Directions:**

1. Biomarker-guided prevention (who needs intervention)
2. Optimized timing protocols
3. Scalable interventions (digital, brief)
4. Pharmacological prophylaxis refinement
5. Integration with emergency care
6. Precision approaches (matching intervention to individual)
7. Global implementation strategies

**Implementation Challenges:**

- Identifying those at risk
- Engaging trauma survivors
- Training first responders
- Healthcare system integration
- Resource limitations
- Cultural considerations`,
      keyTerms: [
        { term: 'trajectory analysis', definition: 'Examining different patterns of symptom course after trauma' },
        { term: 'memory consolidation window', definition: 'Hours after trauma when memories are being stabilized and may be modifiable' },
        { term: 'stepped collaborative care', definition: 'Integrated model combining monitoring with treatment escalation as needed' },
      ],
      clinicalNotes: `Current practice:
- Psychological first aid for acute trauma
- Screen at 2-4 weeks for persistent symptoms
- Trauma-focused CBT for ASD
- Avoid benzodiazepines
- Address practical needs and safety

Emerging:
- Biomarker-guided risk stratification
- Brief/single-session interventions
- Pharmacological prevention (research stage)
- Digital delivery options

Key points:
- Most trauma survivors are resilient
- Target intervention to those at risk
- Early intervention can prevent PTSD
- Avoid forcing trauma processing
- Integrate with medical care for injury`,
    },
  },

  media: [
    {
      id: 'asd-timeline-diagram',
      type: 'diagram',
      filename: 'asd_timeline.svg',
      title: 'ASD to PTSD Timeline',
      description: 'Progression from acute to chronic trauma response',
    },
  ],

  citations: [
    {
      id: 'dsm-5-asd',
      type: 'textbook',
      title: 'Diagnostic and Statistical Manual of Mental Disorders, 5th Edition',
      authors: ['American Psychiatric Association'],
      source: 'American Psychiatric Publishing',
      chapter: 'Trauma- and Stressor-Related Disorders',
    },
  ],

  crossReferences: [
    { targetId: 'psychiatry-ptsd', targetType: 'condition', relationship: 'related', label: 'PTSD' },
    { targetId: 'psychiatry-generalized-anxiety-disorder', targetType: 'condition', relationship: 'related', label: 'GAD' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['psychiatry', 'trauma disorders'],
    keywords: ['acute stress', 'trauma', 'dissociation', 'early intervention', 'prevention'],
    clinicalRelevance: 'high',
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

export default acuteStressDisorderContent;
