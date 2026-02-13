/**
 * Post-Traumatic Stress Disorder (PTSD)
 *
 * Comprehensive educational content on PTSD,
 * its neurobiology, diagnosis, and treatment.
 */

import { EducationalContent } from '../../../types';

export const ptsdContent: EducationalContent = {
  id: 'psychiatry-ptsd',
  type: 'condition',
  name: 'Post-Traumatic Stress Disorder',
  alternateNames: ['PTSD', 'Trauma Disorder', 'Post-Traumatic Syndrome'],

  levels: {
    1: {
      level: 1,
      summary: 'PTSD is a condition that can develop after experiencing or witnessing a very scary or dangerous event, causing ongoing fear, nightmares, and distress.',
      explanation: `PTSD happens when someone goes through something really scary or dangerous, and their mind has trouble recovering from it.

**What Can Cause PTSD:**

- Being in a war or combat
- Experiencing violence or assault
- Serious accidents
- Natural disasters
- Seeing someone get hurt or die
- Any event where you felt your life was in danger

**What PTSD Feels Like:**

- **Reliving the trauma**: Having nightmares or flashbacks that make you feel like it's happening again
- **Avoiding reminders**: Staying away from places, people, or things that remind you of what happened
- **Feeling on edge**: Being easily startled, having trouble sleeping, feeling angry or irritable
- **Negative thoughts**: Feeling guilty, hopeless, or numb

**Important to Know:**

- PTSD is NOT a sign of weakness
- Many people develop PTSD after trauma - it's a normal response to abnormal events
- PTSD is very treatable
- Getting help early can make a big difference
- With treatment, most people get better

**Getting Help:**

Treatment for PTSD includes:
- Talking to a therapist who specializes in trauma
- Learning coping skills
- Sometimes medication to help with symptoms
- Support from family and friends`,
      keyTerms: [
        { term: 'trauma', definition: 'A very scary or dangerous event that overwhelms your ability to cope' },
        { term: 'flashback', definition: 'Suddenly feeling like you are reliving the traumatic event' },
        { term: 'trigger', definition: 'Something that reminds you of the trauma and causes distress' },
      ],
      analogies: [
        'PTSD is like having an alarm system that got stuck in the "on" position after a break-in - it keeps going off even when there\'s no danger.',
        'A flashback is like your brain pressing "replay" on a scary movie without your permission.',
      ],
      examples: [
        'A car accident survivor might feel panicked every time they hear screeching tires.',
        'A veteran might have nightmares about combat and avoid fireworks because they sound like gunfire.',
      ],
    },
    2: {
      level: 2,
      summary: 'PTSD involves intrusion symptoms (flashbacks, nightmares), avoidance behaviors, negative changes in cognition and mood, and hyperarousal following exposure to actual or threatened death, injury, or sexual violence.',
      explanation: `**Trauma Exposure (Criterion A):**

Exposure to actual or threatened:
- Death
- Serious injury
- Sexual violence

Through:
- Direct experience
- Witnessing in person
- Learning about trauma to close family/friend
- Repeated exposure to trauma details (professionals)

**Four Symptom Clusters:**

*Intrusion (Criterion B) - at least 1:*
- Intrusive memories
- Nightmares
- Flashbacks
- Psychological distress to cues
- Physiological reactions to cues

*Avoidance (Criterion C) - at least 1:*
- Avoiding internal reminders (memories, thoughts)
- Avoiding external reminders (people, places, activities)

*Negative Cognition/Mood (Criterion D) - at least 2:*
- Inability to remember aspects of trauma
- Persistent negative beliefs about self/world
- Distorted blame of self or others
- Persistent negative emotional state
- Diminished interest in activities
- Detachment from others
- Inability to experience positive emotions

*Arousal/Reactivity (Criterion E) - at least 2:*
- Irritability, angry outbursts
- Reckless or self-destructive behavior
- Hypervigilance
- Exaggerated startle response
- Concentration problems
- Sleep disturbance

**Duration and Timing:**

- Symptoms last >1 month
- Causes significant distress/impairment
- Acute stress disorder: <1 month post-trauma
- PTSD: ≥1 month
- Delayed expression: Onset ≥6 months after trauma

**Treatment:**

*First-line - Trauma-focused psychotherapy:*
- Prolonged Exposure (PE)
- Cognitive Processing Therapy (CPT)
- EMDR

*Medications:*
- SSRIs (sertraline, paroxetine - FDA approved)
- SNRIs (venlafaxine)
- Prazosin for nightmares`,
      keyTerms: [
        { term: 'hypervigilance', definition: 'Being constantly on high alert for danger' },
        { term: 'dissociation', definition: 'Feeling detached from yourself or surroundings, like things aren\'t real' },
        { term: 'exposure therapy', definition: 'Treatment involving gradual, safe confrontation with trauma memories and reminders' },
        { term: 'EMDR', definition: 'Eye Movement Desensitization and Reprocessing, a therapy using eye movements while processing trauma' },
      ],
    },
    3: {
      level: 3,
      summary: 'PTSD pathophysiology involves fear circuit dysregulation with amygdala hyperreactivity, prefrontal hypofunction, hippocampal volume reduction, and HPA axis alterations, with evidence-based treatment centering on trauma-focused psychotherapy.',
      explanation: `**DSM-5 Diagnostic Criteria:**

A. Exposure to trauma (death, injury, or sexual violence):
- Direct experience
- Witnessing
- Learning about (close family/friend)
- Repeated professional exposure

B. Intrusion symptoms (≥1)
C. Avoidance symptoms (≥1)
D. Negative cognition/mood symptoms (≥2)
E. Arousal/reactivity symptoms (≥2)
F. Duration >1 month
G. Significant distress/impairment
H. Not due to substance or medical condition

**Specifiers:**
- With dissociative symptoms (depersonalization, derealization)
- With delayed expression (≥6 months post-trauma)

**Neurobiology:**

*Fear Circuitry:*
- Amygdala: Hyperactive to threat
- Prefrontal cortex (vmPFC): Reduced inhibition of amygdala
- Hippocampus: Volume reduction, context processing deficits
- Insula: Altered interoception

*Neuroimaging Findings:*
- Increased amygdala activation to trauma cues
- Decreased vmPFC activation
- Hippocampal volume reduction (meta-analyses confirm)
- Altered connectivity (salience network hyperconnectivity)

*HPA Axis:*
- Enhanced negative feedback (low cortisol)
- Increased glucocorticoid receptor sensitivity
- Blunted cortisol response to stress
- Differentiates from major depression

*Noradrenergic System:*
- Elevated norepinephrine
- Exaggerated startle
- Target of prazosin

**Risk and Protective Factors:**

*Risk:*
- Trauma severity
- Peritraumatic dissociation
- Prior trauma history
- Prior psychiatric history
- Female sex
- Low social support

*Protective:*
- Social support
- Active coping
- Self-efficacy
- Early intervention

**Evidence-Based Treatments:**

*Psychotherapy (First-line):*

Prolonged Exposure (PE):
- Imaginal exposure (trauma narrative)
- In vivo exposure (avoided situations)
- 8-15 sessions
- Strong evidence base

Cognitive Processing Therapy (CPT):
- Addresses stuck points (maladaptive beliefs)
- Written trauma account
- 12 sessions
- Equal efficacy to PE

EMDR:
- Bilateral stimulation during trauma processing
- 8 phases
- Comparable to PE/CPT
- Mechanism debated

*Pharmacotherapy:*
- Sertraline, paroxetine (FDA approved)
- Venlafaxine (strong evidence)
- Prazosin (nightmares, off-label)
- Second-line: Mirtazapine, TCAs

*Combined Treatment:*
- Psychotherapy alone often sufficient
- Medication can reduce symptoms for therapy engagement
- No clear advantage of combination`,
      keyTerms: [
        { term: 'peritraumatic', definition: 'Occurring during or immediately after the traumatic event' },
        { term: 'vmPFC', definition: 'Ventromedial prefrontal cortex, involved in fear extinction and emotion regulation' },
        { term: 'imaginal exposure', definition: 'Revisiting trauma memory in imagination as therapeutic technique' },
        { term: 'stuck points', definition: 'Maladaptive beliefs formed after trauma (targeted in CPT)' },
      ],
    },
    4: {
      level: 4,
      summary: 'PTSD involves complex neurobiological alterations including fear conditioning abnormalities, extinction deficits, HPA axis dysregulation, and structural/functional brain changes, with treatment focusing on extinction-based mechanisms and cognitive restructuring.',
      explanation: `**Pathophysiology:**

*Fear Conditioning Model:*
- Trauma = Unconditioned stimulus
- Neutral cues become conditioned (triggers)
- Overgeneralization of fear
- Impaired extinction learning
- Context processing deficits

*Neural Mechanisms:*

Amygdala:
- Hyperreactivity to threat and trauma cues
- Enhanced fear conditioning
- Lateral amygdala: Acquisition
- Central amygdala: Expression

vmPFC/mPFC:
- Hypoactivation
- Impaired fear extinction
- Deficient top-down control
- Treatment increases activity

Hippocampus:
- Volume reduction (cause vs. consequence debated)
- Deficient context encoding
- Generalization of fear
- PTSD-related atrophy vs. pre-existing vulnerability

Insula:
- Altered interoception
- Threat anticipation
- Awareness of bodily states

*HPA Axis Alterations:*
- Lower basal cortisol (some studies)
- Enhanced negative feedback
- GR hypersensitivity
- Exaggerated ACTH response
- FKBP5 gene associations

*Noradrenergic Hyperactivity:*
- Elevated plasma and CSF norepinephrine
- Locus coeruleus hyperactivity
- Exaggerated startle
- Sleep fragmentation
- Target of prazosin (alpha-1 antagonist)

**Genetic Factors:**

- Heritability: 30-40%
- FKBP5 polymorphisms (HPA axis)
- SLC6A4 (serotonin transporter)
- COMT
- ADCYAP1R1 (PAC1 receptor)
- Epigenetic changes (DNA methylation)

**Psychotherapy Mechanisms:**

*Prolonged Exposure:*
- Habituation (emotional processing theory)
- Inhibitory learning
- Violation of expectancy
- Prevents negative reinforcement of avoidance

*CPT:*
- Modifies maladaptive cognitions
- Addresses assimilated (self-blame) and over-accommodated beliefs
- Socratic questioning
- Practice challenging stuck points

*EMDR:*
- Taxing working memory during recall
- Reduces vividness and emotionality
- Reconsolidation may play role
- Bilateral stimulation mechanism unclear

**Pharmacotherapy Details:**

*First-line:*
- Sertraline 50-200mg (FDA approved)
- Paroxetine 20-60mg (FDA approved)
- Venlafaxine 75-225mg

*Prazosin:*
- Alpha-1 antagonist
- Reduces trauma nightmares
- Titrate slowly (1mg to 15-20mg)
- Monitor for orthostatic hypotension

*NOT Recommended:*
- Benzodiazepines (may interfere with extinction, dependence)
- Atypical antipsychotics (limited evidence, metabolic risk)
- Marijuana (may worsen avoidance, cognitive effects)

**Special Populations:**

*Complex PTSD (ICD-11):*
- Repeated/prolonged trauma
- Additional symptoms: Affect dysregulation, negative self-concept, relational difficulties
- May need phase-based treatment

*Dissociative Subtype:*
- Depersonalization, derealization
- May need stabilization before trauma processing
- Consider modified exposure approach`,
      keyTerms: [
        { term: 'fear extinction', definition: 'Learning that a conditioned stimulus no longer predicts threat' },
        { term: 'glucocorticoid receptor sensitivity', definition: 'Enhanced GR function in PTSD leads to increased negative feedback' },
        { term: 'stuck points', definition: 'Maladaptive beliefs about trauma (e.g., "It was my fault") targeted in CPT' },
        { term: 'complex PTSD', definition: 'ICD-11 diagnosis for PTSD with additional affect, self, and relational disturbances' },
      ],
      clinicalNotes: 'Trauma-focused psychotherapy is first-line. PE and CPT have strongest evidence. SSRIs/SNRIs for pharmacotherapy. Prazosin for nightmares. Avoid benzodiazepines. Screen for suicidality. Address comorbidities. Consider dissociative subtype.',
    },
    5: {
      level: 5,
      summary: 'Contemporary PTSD research focuses on precision approaches including biomarkers, novel pharmacological targets (MDMA, ketamine), neuromodulation, and early intervention paradigms, with growing understanding of individual differences in trauma response and recovery.',
      explanation: `**Precision Medicine Approaches:**

*Biomarker Development:*
- Pre-trauma predictors (GR sensitivity, startle)
- Acute phase markers (cortisol, heart rate)
- Neuroimaging classifiers
- Polygenic risk scores
- Epigenetic markers (FKBP5 methylation)

*Predicting Treatment Response:*
- Pre-treatment amygdala reactivity
- Baseline symptom profiles
- Fear extinction capacity
- Neuroinflammatory markers

**Novel Pharmacological Approaches:**

*MDMA-Assisted Therapy:*
- Phase 3 trials complete
- Combined with psychotherapy (3 sessions)
- Reduces fear, enhances therapeutic alliance
- 71% no longer meet PTSD criteria (vs 48% placebo)
- FDA breakthrough therapy designation

*Ketamine/Esketamine:*
- Rapid symptom reduction
- NMDA antagonism
- Glutamate and plasticity
- Durability unclear
- Not yet standard of care for PTSD

*Cannabinoids:*
- Endocannabinoid system modulates fear
- Nabilone: Some evidence for nightmares
- CBD: Under investigation
- THC: Concerning data (may worsen)

*Other Targets:*
- PACAP/PAC1 receptor (stress response)
- Neuropeptide Y (resilience factor)
- Oxytocin (social processing)
- Stellate ganglion block

**Neuromodulation:**

*TMS:*
- Right DLPFC (reduces hyperarousal)
- Multiple protocols under investigation
- Modest evidence, growing interest

*Neurofeedback:*
- Amygdala downregulation (rtfMRI)
- Alpha asymmetry training
- Emerging evidence

**Early Intervention:**

*Acute Stress Disorder:*
- Trauma-focused CBT within 3 months
- Prevents PTSD development
- Brief interventions effective

*Secondary Prevention:*
- Psychological first aid
- Watchful waiting (most recover naturally)
- Target those with persistent symptoms
- Debriefing NOT effective (may be harmful)

**Treatment Optimization:**

*Enhancing Extinction:*
- D-cycloserine (NMDA partial agonist)
- Hydrocortisone (may enhance consolidation)
- Sleep after exposure (memory consolidation)
- Exercise augmentation

*Reconsolidation-Based Approaches:*
- Propranolol during memory reactivation
- Mixed results
- Boundary conditions being defined

*Technology Integration:*
- Virtual reality exposure
- Prolonged exposure apps
- Telehealth delivery (effective)
- Ecological momentary intervention

**Special Topics:**

*Moral Injury:*
- Transgressing moral code or witnessing transgression
- Shame, guilt (distinct from fear)
- May require different therapeutic approach
- Adaptive disclosure, Acceptance and Commitment Therapy

*Military and Veteran Populations:*
- Barriers to care (stigma, access)
- Comorbidities common (TBI, pain, SUD)
- Evidence-based treatments effective
- Complementary approaches (yoga, acupuncture)

*Childhood Trauma:*
- Developmental considerations
- TF-CBT (Trauma-Focused CBT for children)
- Attachment-based approaches
- Complex presentation common

**Research Priorities:**

1. Biomarkers for risk stratification and treatment matching
2. Novel rapidly-acting treatments
3. Prevention and early intervention optimization
4. Understanding resilience mechanisms
5. Personalized treatment algorithms
6. Long-term outcomes and maintenance
7. Global mental health applications`,
      keyTerms: [
        { term: 'MDMA-assisted therapy', definition: 'Novel treatment combining MDMA with psychotherapy, showing breakthrough results' },
        { term: 'moral injury', definition: 'Psychological impact of transgressing or witnessing transgression of moral code' },
        { term: 'reconsolidation', definition: 'Memory destabilization upon retrieval, offering window for modification' },
        { term: 'psychological first aid', definition: 'Evidence-informed approach for acute trauma support' },
      ],
      clinicalNotes: `Current practice:
- Trauma-focused psychotherapy (PE, CPT, EMDR) first-line
- SSRIs/SNRIs for pharmacotherapy
- Prazosin for nightmares
- Avoid benzodiazepines
- Address comorbidities (depression, SUD)

Emerging:
- MDMA-assisted therapy (pending approval)
- Ketamine trials ongoing
- Precision approaches in development
- Telehealth delivery effective

Key considerations:
- Not everyone with trauma develops PTSD
- Natural recovery common
- Treatment engagement can be challenging
- Cultural factors in trauma response
- Suicide risk assessment essential`,
    },
  },

  media: [
    {
      id: 'ptsd-neurobiology-diagram',
      type: 'diagram',
      filename: 'ptsd_neurobiology.svg',
      title: 'Neurobiology of PTSD',
      description: 'Fear circuit abnormalities in PTSD',
    },
    {
      id: 'ptsd-treatment-algorithm',
      type: 'diagram',
      filename: 'ptsd_treatment_algorithm.svg',
      title: 'PTSD Treatment Algorithm',
      description: 'Evidence-based treatment approach',
    },
  ],

  citations: [
    {
      id: 'dsm-5-ptsd',
      type: 'textbook',
      title: 'Diagnostic and Statistical Manual of Mental Disorders, 5th Edition',
      authors: ['American Psychiatric Association'],
      source: 'American Psychiatric Publishing',
      chapter: 'Trauma- and Stressor-Related Disorders',
    },
  ],

  crossReferences: [
    { targetId: 'psychiatry-acute-stress-disorder', targetType: 'condition', relationship: 'related', label: 'Acute Stress Disorder' },
    { targetId: 'psychiatry-generalized-anxiety-disorder', targetType: 'condition', relationship: 'related', label: 'GAD' },
    { targetId: 'psychiatry-major-depressive-disorder', targetType: 'condition', relationship: 'related', label: 'MDD' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['psychiatry', 'trauma disorders'],
    keywords: ['PTSD', 'trauma', 'flashback', 'hyperarousal', 'exposure therapy'],
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
