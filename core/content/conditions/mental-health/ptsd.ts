/**
 * Post-Traumatic Stress Disorder - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const ptsd: EducationalContent = {
  id: 'condition-ptsd',
  type: 'condition',
  name: 'Post-Traumatic Stress Disorder',
  nameEs: 'Trastorno de Estrés Postraumático',
  alternateNames: ['PTSD', 'Post-Traumatic Stress Syndrome', 'Combat Stress', 'Shell Shock'],
  hpoId: 'HP:0100754',

  levels: {
    1: {
      level: 1,
      summary: 'PTSD is a condition that develops after experiencing or witnessing a terrifying event, causing flashbacks, nightmares, and severe anxiety that can last long after the event.',
      explanation: `PTSD can happen after any very scary, dangerous, or shocking event. While it is normal to feel stressed after trauma, PTSD is when these feelings continue and interfere with daily life.

**Common traumatic events that can lead to PTSD:**
- Serious accidents
- Natural disasters
- War or combat
- Physical or sexual assault
- Witnessing violence or death
- Life-threatening illnesses

**Symptoms of PTSD:**

**Re-experiencing (Reliving the event):**
- Flashbacks: feeling like the event is happening again
- Nightmares about the trauma
- Strong physical reactions to reminders (heart racing, sweating)
- Intrusive memories or images

**Avoidance:**
- Staying away from places, people, or activities that are reminders
- Avoiding thoughts or feelings about what happened
- Feeling emotionally numb

**Increased arousal (feeling "on edge"):**
- Being easily startled
- Feeling tense or "on guard"
- Trouble sleeping
- Irritability or anger outbursts
- Difficulty concentrating

**Treatment helps:**
- Therapy focused on processing the trauma
- Medications for anxiety and depression
- Support from understanding people
- Learning coping skills

**Important:** PTSD is not a sign of weakness. With treatment, people can and do recover.`,
      keyTerms: [
        { term: 'trauma', definition: "A deeply distressing or disturbing experience that overwhelms a person's ability to cope" },
        { term: 'flashback', definition: 'Vivid memories that make you feel like you are reliving the traumatic event' },
        { term: 'trigger', definition: 'Something that reminds you of the trauma and brings up symptoms' },
      ],
      analogies: [
        'PTSD is like having an alarm system that will not turn off—even when there is no danger, your body stays on high alert.',
        'Your brain after trauma is like a scratched record that keeps skipping and replaying the same song (the traumatic memory).',
      ],
      examples: [
        'A soldier who experiences loud noises like gunshots years after returning home, causing them to duck for cover.',
        'A car accident survivor who becomes too anxious to drive or even ride in a car.',
      ],
      patientCounselingPoints: [
        'PTSD is not your fault and does not mean you are weak',
        'Healing is possible with proper treatment',
        'Avoiding triggers actually makes PTSD worse in the long run',
        'Connecting with supportive people is important for recovery',
      ],
    },
    2: {
      level: 2,
      summary: 'PTSD develops after exposure to actual or threatened death, serious injury, or sexual violation, characterized by intrusion symptoms, avoidance, negative alterations, and arousal lasting >1 month.',
      explanation: `## Diagnostic Criteria (DSM-5)

**Stressor Criterion (A):**
- Exposure to actual or threatened death, serious injury, or sexual violence
- Can be: Direct experience, witnessing, learning about close family/friend, or repeated exposure to details (first responders)

**Four Symptom Clusters (need 1+ from each):**

**1. Intrusion (1+ symptom):**
- Recurrent, involuntary distressing memories
- Recurrent distressing dreams
- Flashbacks (dissociative reactions)
- Marked psychological distress at cues
- Marked physiological reactions to cues

**2. Avoidance (1+ symptom):**
- Avoiding trauma-related thoughts or feelings
- Avoiding external reminders (people, places, conversations, activities)

**3. Negative Alterations (2+ symptoms):**
- Inability to remember key aspects of trauma
- Persistent negative beliefs (world is dangerous, self is bad)
- Distorted blame of self or others
- Persistent negative emotional state (fear, horror, anger, guilt, shame)
- Diminished interest in activities
- Feeling detached or estranged
- Inability to experience positive emotions

**4. Arousal/Reactivity (2+ symptoms):**
- Irritable behavior or angry outbursts
- Reckless or self-destructive behavior
- Hypervigilance
- Exaggerated startle response
- Problems with concentration
- Sleep disturbance

**Duration:** >1 month
**Distress:** Causes significant distress or impairment

## Risk Factors

**Pre-Trauma:**
- Previous trauma
- Mental health history
- Family history of anxiety/depression
- Lower intelligence
- Female sex (twice the risk of men)

**Peri-Trauma:**
- Severity of trauma
- Perceived life threat
- Injury
- Dissociation during event
- Lack of social support

**Post-Trauma:**
- Additional life stressors
- Lack of social support
- Negative appraisals

## Treatment

**Psychotherapy (First-Line):**
- **Trauma-Focused CBT:** Gold standard
- **Prolonged Exposure (PE):** Facing avoided memories and situations
- **Cognitive Processing Therapy (CPT):** Challenging trauma-related beliefs
- **EMDR:** Eye movement desensitization and reprocessing
- **EMDR:** Eye movement desensitization and reprocessing

**Medications:**
- **SSRIs:** Sertraline, paroxetine (FDA-approved)
- **SNRIs:** Venlafaxine (FDA-approved)
- **Prazosin:** For trauma-related nightmares (off-label)
- **Benzodiazepines:** Avoid (can interfere with processing)

**Not Everyone Develops PTSD:**
- Most people recover naturally
- Acute Stress Disorder: Symptoms 3 days to 1 month
- PTSD: Symptoms >1 month`,
      keyTerms: [
        { term: 'hypervigilance', definition: 'State of increased alertness; constantly scanning for potential threats' },
        { term: 'dissociation', definition: 'Disconnection from thoughts, feelings, memories, or sense of identity' },
        { term: 'avoidance', definition: 'Staying away from reminders of the traumatic event; maintains PTSD' },
        { term: 'acute stress disorder', definition: 'Similar to PTSD but occurs within 3 days to 1 month after trauma' },
      ],
      patientCounselingPoints: [
        'Facing traumatic memories in therapy is hard but necessary for healing',
        'Avoidance is a natural response but maintains PTSD symptoms',
        'Nightmares and sleep problems often improve with treatment',
      ],
    },
    3: {
      level: 3,
      summary: 'PTSD involves fear conditioning, memory consolidation abnormalities, HPA axis alterations, and amygdala hyperactivity, requiring trauma-focused psychotherapy and often pharmacotherapy.',
      explanation: `## Pathophysiology

**Fear Conditioning:**
- Trauma creates strong fear associations
- Amygdala hyperactivity to trauma reminders
- Fear extinction learning impaired
- Generalization: neutral cues become threatening

**Memory Processing:**
- Traumatic memories encoded differently
- Hippocampal dysfunction affects context
- Memories feel "present" rather than "past"
- Flashbacks involve re-experiencing without temporal context

**Neuroanatomy:**
- **Amygdala:** Hyperactive to threat cues
- **Hippocampus:** Volume reduction, context processing impaired
- **Prefrontal Cortex:** Reduced top-down inhibition of amygdala
- **Anterior Cingulate:** Impaired fear extinction

**HPA Axis:**
- Dysregulated cortisol response
- Low cortisol in some chronic PTSD
- Enhanced negative feedback
- Noradrenergic hyperactivity

**Neurotransmitters:**
- **Norepinephrine:** Elevated, contributes to arousal/hyperarousal
- **Serotonin:** Dysregulated
- **GABA:** Reduced inhibitory tone
- **Glutamate:** Altered, potential target

**Genetics:**
- Heritability: ~30-40%
- FKBP5 polymorphism: HPA axis regulation
- SLC6A3 (dopamine transporter)
- Gene-environment interactions

## Evidence-Based Psychotherapies

| Therapy | Sessions | Key Components | Evidence |
|---------|----------|----------------|----------|
| Prolonged Exposure | 8-15 | In vivo + imaginal exposure | Strong |
| Cognitive Processing Therapy | 12 | Socratic questioning, writing | Strong |
| EMDR | 6-12 | Bilateral stimulation + recall | Moderate |
| Trauma-Focused CBT | 8-16 | Exposure + cognitive restructuring | Strong |

**Prolonged Exposure (PE):**
- Psychoeducation about fear and avoidance
- Breathing retraining
- **In vivo exposure:** Gradually facing avoided real-world situations
- **Imaginal exposure:** Revisiting traumatic memory repeatedly (processing)
- Processing: discussing emotional reactions to imaginal exposure

**Cognitive Processing Therapy (CPT):**
- Psychoeducation about thoughts and feelings
- Identifying "stuck points" (maladaptive beliefs)
- Socratic questioning to challenge beliefs
- Writing and reading trauma account
- Challenging beliefs about safety, trust, power, esteem, intimacy

**EMDR:**
- Recall traumatic memory while engaging in bilateral stimulation
- Eye movements (or taps, tones)
- Mechanism debated (working memory load? REM processes?)
- Comparable to exposure-based therapies

## Pharmacotherapy

**First-Line:**
- **Sertraline:** 25-200 mg/day
- **Paroxetine:** 20-60 mg/day
- **Venlafaxine XR:** 150-225 mg/day
- **Fluoxetine:** Off-label, commonly used

**For Specific Symptoms:**
- **Prazosin:** 1-15 mg for nightmares
- **Trazodone:** 25-100 mg for sleep
- **Benzodiazepines:** Generally avoided
- **Atypical antipsychotics:** Adjunctive for severe hyperarousal

**Medication Limitations:**
- Don't treat core trauma memories
- Help with depression, anxiety, sleep
- Often combined with psychotherapy`,
      keyTerms: [
        { term: 'fear conditioning', definition: 'Learning process where neutral cues become associated with fear through trauma' },
        { term: 'fear extinction', definition: 'Learning that a previously feared cue is no longer dangerous; impaired in PTSD' },
        { term: 'in vivo exposure', definition: 'Gradual real-world confrontation with feared situations' },
        { term: 'imaginal exposure', definition: 'Repeatedly recounting traumatic memory to reduce emotional distress' },
      ],
      clinicalNotes: 'Trauma-focused therapy is first-line treatment. Medications alone are insufficient for core PTSD symptoms. Prazosin helps nightmares—start low and titrate. Benzodiazepines may interfere with fear extinction and should be avoided.',
      patientCounselingPoints: [
        'Trauma-focused therapy may feel worse before it feels better',
        'Processing traumatic memories is necessary for recovery',
        'Dropout from therapy is common—sticking with it leads to recovery',
      ],
    },
    4: {
      level: 4,
      summary: 'Complex PTSD, treatment-resistant cases, and comorbid conditions require specialized approaches including dialectical behavior therapy, medication augmentation, and integrated treatment for substance use.',
      explanation: `## Complex PTSD (C-PTSD)

**Definition:**
- Exposure to prolonged, repeated trauma (typically interpersonal)
- Childhood abuse, domestic violence, war, captivity
- Differs from single-incident PTSD

**Additional Symptoms (Beyond PTSD):**
- Affective dysregulation
- Negative self-concept (shame, guilt)
- Interpersonal problems
- Dissociation

**Treatment Adaptations:**
- Phase-based approach: Stabilization → Trauma processing → Integration
- **Dialectical Behavior Therapy (DBT):** Skills for emotion regulation
- **Skills Training in Affective and Interpersonal Regulation (STAIR):** Preparation for trauma work
- Longer treatment duration often needed

## Dissociation in PTSD

**Types:**
- **Depersonalization:** Feeling detached from self
- **Derealization:** World feels unreal
- **Dissociative amnesia:** Gaps in trauma memory
- **Dissociative identity disorder:** Severe, chronic childhood trauma

**Treatment Implications:**
- Grounding skills essential
- Slower pace of exposure
- May need phase-based treatment
- Higher risk of treatment complications

## Treatment-Resistant PTSD

**Definition:**
- Failure to respond to adequate trial of trauma-focused therapy
- Persistent symptoms despite treatment

**Approaches:**
- **Re-evaluate:** Confirm diagnosis, comorbidities, treatment adherence
- **Try different modality:** PE → CPT → EMDR
- **Intensive outpatient programs:** Daily trauma-focused therapy
- **Medication augmentation:**
  - Add atypical antipsychotic (risperidone, quetiapine)
  - Add prazosin for nightmares
  - Consider topiramate

**Emerging Treatments:**
- **MDMA-assisted psychotherapy:** Phase 3 data positive, FDA approval pending
- **Ketamine:** Rapid symptom reduction, being studied
- **Hyperbaric oxygen:** Limited evidence
- **Transcranial magnetic stimulation (TMS):** Mixed results
- **Stellate ganglion block:** Investigational

## Comorbidity

**Substance Use Disorders (30-50%):**
- Self-medication hypothesis
- Alcohol for sleep/anxiety
- Integrated treatment needed
- Treat both disorders simultaneously
- May need stabilization before trauma-focused work

**Depression (50%):**
- SSRIs treat both
- May need higher doses
- Suicide risk assessment essential

**Traumatic Brain Injury (TBI):**
- Overlapping symptoms
- Both common in combat Veterans
- Neuropsychological testing helpful
- Graded exposure approach

**Chronic Pain:**
- Common after physical trauma
- Multidisciplinary treatment
- Consider pain psychology

## Military and Combat PTSD

**Unique Aspects:**
- Multiple traumatic exposures
- Moral injury (violating moral values)
- Unit cohesion protective
- Transition to civilian life challenges
- Veterans Affairs/DoD systems

**Treatment Considerations:**
- Military cultural competence
- Group therapy options
- Service dogs (emotional support)
- Peer support programs
- Vocational rehabilitation

## Suicide Risk

**Elevated in PTSD:**
- Impulsivity from hyperarousal
- Self-blame and guilt
- Comorbid depression
- Substance use

**Assessment and Management:**
- Routinely assess suicidal ideation
- Means restriction counseling
- Safety planning
- Crisis resources
- Hospitalization if imminent risk

## Special Populations

**Children:**
- Different symptom presentation
- Play therapy techniques
- Parent/caregiver involvement
- Trauma-Focused CBT adapted for age

**Older Adults:**
- Lifetime trauma accumulation
- Medical comorbidity
- Cognitive considerations
- Life review approaches

**Refugees/Torture Survivors:**
- Cultural considerations
- Language barriers
- Multiple losses
- Community-based approaches`,
      keyTerms: [
        { term: 'complex PTSD', definition: 'Disorder from prolonged, repeated trauma with additional symptoms beyond classic PTSD' },
        { term: 'moral injury', definition: 'Psychological distress from actions that violate moral code; common in combat PTSD' },
        { term: 'phase-based treatment', definition: 'Sequential approach: stabilization, trauma processing, integration' },
        { term: 'dissociative subtype', definition: 'PTSD with prominent depersonalization/derealization; high dissociation scores' },
      ],
      clinicalNotes: 'Patients with high dissociation or complex PTSD may need skills-focused work (DBT, STAIR) before trauma processing. MDMA-assisted therapy shows promise for treatment-resistant PTSD.',
    },
    5: {
      level: 5,
      summary: 'PTSD treatment incorporates novel pharmacotherapies, precision medicine approaches, neurobiological predictors of treatment response, and understanding trauma as a public health crisis.',
      explanation: `## Novel Pharmacotherapies

**MDMA-Assisted Psychotherapy:**
- **Mechanism:** Enhanced fear extinction, increased trust/openness
- **Protocol:** 3 sessions with MDMA + integrative therapy
- **Efficacy:** 67% no longer met PTSD criteria in Phase 3
- **Status:** FDA approval anticipated 2024-2025
- **Contraindications:** Cardiovascular disease, psychosis

**Ketamine:**
- Rapid reduction in PTSD symptoms
- May facilitate psychotherapy
- Intravenous or intranasal
- Questions about durability
- Being studied in combination with psychotherapy

**Other Novel Agents:**
- **MDMA analogs:** In development
- **Cannabinoids:** Mixed evidence, may help nightmares
- **Oxytocin:** Social bonding enhancement
- **D-cycloserine:** Fear extinction facilitator (mixed results)
- **Propranolol:** Reconsolidation blockade (inconsistent evidence)

## Neurobiological Predictors

**Treatment Response Prediction:**
- **fMRI:** Amygdala reactivity predicts exposure response
- **EEG:** Brain activity patterns may indicate prognosis
- **Genetic:** FKBP5, CRHR1 polymorphisms affect treatment
- **Inflammatory markers:** IL-6, TNF-alpha associated with severity
- **Heart rate variability:** Lower HRV predicts poorer response

**Not yet clinically actionable** but guiding research

## Precision Medicine Approaches

**Phenotyping:**
- **Dissociative subtype:** High depersonalization/derealization
- **Military vs. civilian trauma:** Different patterns
- **Type I vs. Type II trauma:** Single vs. repeated
- **Symptom clusters:** May predict treatment response

**Biomarker-Directed Treatment:**
- Hyperarousal-predominant → Prazosin, arousal-focused skills
- Dissociative-predominant → Grounding, phase-based treatment
- Guilt/shame-predominant → CPT-focused
- Depression-predominant → Higher-dose antidepressant

## Prevention and Early Intervention

**Acute Stress Management:**
- Psychological debriefing: NOT helpful, may be harmful
- Psychological First Aid: Supportive, non-intrusive
- Stress inoculation training: For high-risk professions

**Early Interventions:**
- **Stepped care:** Monitor, offer treatment if symptoms persist
- **Brief CBT:** 3-5 sessions, may prevent PTSD development
- **Hydrocortisone:** Single dose post-trauma (mixed evidence)
- **Beta-blockers:** Propranolol during reconsolidation window (experimental)

## Digital Therapeutics

**Internet-Based CBT:**
- Effective, increases access
- iCBT for PTSD: Guided or unguided
- Particularly useful for rural/underserved

**Virtual Reality Exposure:**
- Immersive exposure for combat PTSD
- Can be combined with physiologic monitoring
- Expensive but increasingly available

**Mobile Applications:**
- PTSD Coach (VA)
- CBT-i Coach (insomnia)
- Symptom monitoring and skills practice

**Digital Phenotyping:**
- Passive monitoring of symptoms via smartphone
- GPS, sleep, social activity, voice analysis
- Early relapse detection
- Privacy concerns

## Trauma-Informed Care

**Principles:**
- Safety: Physical and emotional
- Trustworthiness and transparency
- Peer support
- Collaboration and mutuality
- Empowerment, voice, and choice
- Cultural, historical, and gender issues

**Implementation:**
- Screen all patients for trauma history
- Universal precautions approach
- Avoid re-traumatization
- Staff training on trauma response

## Public Health Perspective

**Prevalence:**
- Lifetime prevalence: 7-9%
- Higher in high-risk groups (Veterans, refugees, first responders)
- Women twice the risk of men

**Economic Burden:**
- Direct healthcare costs
- Lost productivity
- Disability claims
- Criminal justice system involvement
- Estimated at $232 billion annually (US)

**Prevention Strategies:**
- Reduce exposure to trauma (violence prevention)
- Disaster preparedness
- High-risk profession training
- Social determinants of health

## Specialized Treatment Settings

**Residential Programs:**
- Daily trauma-focused therapy
- Skills training groups
- Safe environment for severe cases
- Typically 30-90 days

**Veterans Health Administration:**
- Extensive PTSD programs
- VBPT (Virtual PTSD Clinic)
- Peer support specialists
- Service dog programs
- Women-only programs

**Sexual Assault Centers:**
- Trauma-informed medical care
- SANE (Sexual Assault Nurse Examiner)
- Advocacy services
- Long-term therapy referral

## Future Directions

**Neuromodulation:**
- TMS for PTSD
- Deep brain stimulation (experimental)
- Vagus nerve stimulation

**Pharmacogenomics:**
- CYP2D6 testing for antidepressant metabolism
- HLA testing for medication selection
- Limited clinical utility currently

**Epigenetics:**
- Trauma effects across generations
- Possible intervention targets
- Research ongoing

**Artificial Intelligence:**
- Symptom prediction
- Treatment matching
- Crisis detection via digital patterns`,
      keyTerms: [
        { term: 'psychological first aid', definition: 'Supportive response model for recent trauma; evidence-based alternative to debriefing' },
        { term: 'MDMA-assisted psychotherapy', definition: 'Novel treatment combining MDMA with therapy; shows promise for treatment-resistant PTSD' },
        { term: 'trauma-informed care', definition: 'System-wide approach recognizing trauma impact and avoiding re-traumatization' },
        { term: 'dissociative subtype', definition: 'PTSD variant with high depersonalization/derealization; predicts treatment response' },
      ],
      clinicalNotes: `Key clinical pearls:

1. **Screening matters:** Many patients with PTSD never disclose trauma. Routine screening in high-risk populations improves detection.

2. **Trauma-focused therapy is first-line:** Medications alone are insufficient. Prolonged Exposure, CPT, and EMDR have strongest evidence.

3. **Prazosin for nightmares:** Start 1 mg at bedtime, titrate to effect (up to 15 mg). Check for orthostasis.

4. **Avoid benzodiazepines:** Can interfere with fear extinction, risk of dependence in PTSD population.

5. **Complex PTSD needs phase-based treatment:** Stabilization/skills first, then trauma processing. Don't rush exposure with dissociative patients.

6. **MDMA-assisted therapy coming:** Likely FDA approval soon. Most effective for treatment-resistant PTSD. Requires specialized certification.

7. **Suicide risk:** Elevated in PTSD. Always assess. Safety planning, means restriction, crisis resources.

8. **Comorbidity is the rule, not exception:** Treat PTSD and comorbid disorders simultaneously (especially substance use).

9. **Dissociation predicts poorer response:** Assess dissociation symptoms. May need different treatment approach.

10. **Cultural competence matters:** Understanding cultural context of trauma affects both assessment and treatment.`,
    },
  },

  media: [],
  citations: [
    { id: 'apa-ptsd-2017', type: 'article', title: 'APA Practice Guideline for Treatment of PTSD', source: 'American Psychiatric Association' },
    { id: 'nice-ptsd-2018', type: 'article', title: 'NICE Guidelines on PTSD', source: 'National Institute for Health and Care Excellence' },
    { id: 'va-dod-ptsd-2017', type: 'article', title: 'VA/DoD Clinical Practice Guideline for PTSD', source: 'Department of Veterans Affairs and Department of Defense' },
    { id: 'mdma-phase3-2021', type: 'article', title: 'MDMA-Assisted Psychotherapy for PTSD: A Randomized, Double-Blind, Dose-Response, Phase 3 Clinical Trial', source: 'Nature Medicine', authors: ['Mitchell JM', 'Wang Z', 'Carpenter R', 'et al.'] },
  ],
  crossReferences: [
    { targetId: 'condition-major-depressive-disorder', targetType: 'condition', relationship: 'related', label: 'Major Depressive Disorder' },
    { targetId: 'condition-generalized-anxiety-disorder', targetType: 'condition', relationship: 'related', label: 'Generalized Anxiety Disorder' },
  ],
  tags: {
    systems: ['neurological'],
    topics: ['psychiatry', 'mental health', 'trauma'],
    keywords: ['PTSD', 'trauma', 'flashback', 'nightmare', 'prolonged exposure', 'CPT'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['psychiatry'] },
  },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default ptsd;
