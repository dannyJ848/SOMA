/**
 * Social Anxiety Disorder (Social Phobia)
 *
 * Comprehensive educational content on social anxiety disorder,
 * its neurobiology, and treatment approaches.
 */

import { EducationalContent } from '../../../types';

export const socialAnxietyDisorderContent: EducationalContent = {
  id: 'psychiatry-social-anxiety-disorder',
  type: 'condition',
  name: 'Social Anxiety Disorder',
  alternateNames: ['Social Phobia', 'SAD'],

  levels: {
    1: {
      level: 1,
      summary: 'Social anxiety disorder is an intense fear of social situations where you might be judged, embarrassed, or humiliated, leading to avoidance of these situations.',
      explanation: `Everyone feels nervous in some social situations, like giving a speech or meeting new people. But with social anxiety disorder, the fear is so intense that it interferes with daily life.

**What Social Anxiety Feels Like:**

- Intense fear of being watched, judged, or embarrassed
- Worrying for days or weeks before social events
- Avoiding social situations or enduring them with extreme distress
- Physical symptoms: blushing, sweating, trembling, nausea, difficulty speaking
- Fearing that others will notice your anxiety
- Replaying social situations in your mind, focusing on what went wrong

**Common Fears:**

- Speaking in public or in meetings
- Meeting new people
- Eating or drinking in front of others
- Being the center of attention
- Talking to authority figures
- Going to parties or social gatherings
- Making phone calls
- Using public restrooms

**Important to Know:**

- Social anxiety is NOT just being shy or introverted
- It's a real medical condition affecting about 7% of people
- It often starts in the teenage years
- It's NOT your fault and NOT a character flaw
- It's very treatable!

**How It Affects Life:**

- Difficulty making friends
- Problems at school or work
- Avoiding job interviews or promotions
- Relationship difficulties
- Missing out on experiences
- Sometimes leads to depression

**Treatment Works:**

- Cognitive Behavioral Therapy helps change negative thoughts and gradually face fears
- Medications (like SSRIs) can reduce anxiety
- Most people improve significantly with proper treatment
- You don't have to let fear control your life`,
      keyTerms: [
        { term: 'social anxiety', definition: 'Intense fear of social situations where you might be judged or embarrassed' },
        { term: 'avoidance', definition: 'Staying away from feared situations, which makes anxiety worse over time' },
        { term: 'self-consciousness', definition: 'Being overly aware of yourself and worried about how others see you' },
      ],
      analogies: [
        'Social anxiety is like having an overly harsh judge in your head that constantly criticizes your performance in social situations.',
        'Avoiding social situations because of anxiety is like not exercising a muscle - the avoidance makes the anxiety stronger over time.',
      ],
      examples: [
        'A person might skip class rather than risk being called on by the teacher.',
        'Someone might eat lunch alone in their car to avoid the cafeteria.',
        'A talented employee might turn down promotions to avoid giving presentations.',
      ],
    },
    2: {
      level: 2,
      summary: 'Social anxiety disorder involves marked fear of social situations where scrutiny or embarrassment may occur, leading to avoidance and significant impairment, with treatment including CBT and SSRIs.',
      explanation: `**Core Features:**

- Fear of one or more social situations where scrutiny by others is possible
- Fear of acting in a way that will be negatively evaluated
- Social situations almost always provoke fear or anxiety
- Social situations are avoided or endured with intense distress
- Fear is out of proportion to actual threat
- Persistent (6+ months)
- Causes significant distress or impairment

**Subtypes:**

*Performance Only (Previously "Non-generalized"):*
- Fear limited to public performance (speaking, performing)
- May function well in other social situations
- About 40% of cases

*Generalized:*
- Fear across multiple social situations
- More severe, more impairment
- Earlier onset
- More comorbidity

**Common Cognitive Distortions:**

- Mind reading: "They think I'm boring"
- Fortune telling: "I'll definitely embarrass myself"
- Catastrophizing: "If I blush, everyone will think I'm pathetic"
- All-or-nothing thinking: "If I'm not perfect, I'm a failure"
- Spotlight effect: Overestimating how much others notice you

**Physical Symptoms:**
- Blushing
- Sweating
- Trembling
- Rapid heart rate
- Nausea, stomach upset
- Muscle tension
- Difficulty speaking
- Mind going blank

**Epidemiology:**
- Lifetime prevalence: 7-13%
- Women slightly more affected
- Typical onset: Early to mid-teens
- Often chronic if untreated
- High comorbidity with depression, other anxiety disorders

**Causes:**

*Biological:*
- Genetic factors (30-40% heritability)
- Amygdala hyperreactivity
- Behavioral inhibition temperament

*Psychological:*
- Negative self-beliefs
- High self-focused attention
- Safety behaviors that maintain anxiety
- Negative interpretation biases

*Environmental:*
- Parenting style (overprotection, criticism)
- Bullying, negative social experiences
- Cultural factors

**Treatment:**

*Cognitive Behavioral Therapy (CBT):*
- Cognitive restructuring (challenging negative thoughts)
- Exposure to feared situations
- Reducing safety behaviors
- Social skills training (if needed)
- Video feedback (to correct distorted self-perception)

*Medications:*
- SSRIs: First-line (paroxetine, sertraline, escitalopram)
- SNRIs: Venlafaxine
- MAOIs: Phenelzine (very effective but dietary restrictions)
- Benzodiazepines: Short-term or situational
- Beta-blockers: Performance anxiety only

*Combined Treatment:*
- May be superior for some patients
- Medication can facilitate exposure`,
      keyTerms: [
        { term: 'safety behavior', definition: 'Actions taken to prevent feared outcomes that actually maintain anxiety (e.g., avoiding eye contact)' },
        { term: 'behavioral inhibition', definition: 'Temperament characterized by caution and fear of novel situations, a risk factor for social anxiety' },
        { term: 'spotlight effect', definition: 'Tendency to overestimate how much others notice our appearance and behavior' },
        { term: 'post-event processing', definition: 'Repeatedly reviewing social situations after they occur, focusing on perceived failures' },
      ],
    },
    3: {
      level: 3,
      summary: 'Social anxiety disorder involves amygdala hyperreactivity to social threat cues, excessive self-focused attention, and negative cognitive biases, with treatment targeting avoidance through exposure and cognitive restructuring.',
      explanation: `**DSM-5 Diagnostic Criteria:**

A. Marked fear/anxiety about social situations with possible scrutiny
B. Fear of negative evaluation (embarrassment, humiliation, rejection)
C. Social situations almost always provoke fear/anxiety
D. Avoided or endured with intense fear/anxiety
E. Fear out of proportion to actual threat
F. Persistent (6+ months)
G. Causes significant distress or functional impairment
H. Not attributable to substances or medical condition
I. Not better explained by another mental disorder
J. If medical condition present, fear is unrelated or excessive

*Specify: Performance only*

**Differential Diagnosis:**
- Shyness/introversion (no distress, no impairment)
- Panic disorder with agoraphobia (fears panic attacks, not scrutiny)
- Generalized anxiety disorder (worries not limited to social)
- Avoidant personality disorder (overlaps significantly)
- Autism spectrum disorder (social difficulties differ)
- Body dysmorphic disorder (specific focus on perceived defect)

**Neurobiological Mechanisms:**

*Amygdala:*
- Hyperreactivity to social threat cues (angry faces, criticism)
- Hyperreactivity to neutral faces (ambiguous as threatening)
- Normalizes with treatment

*Prefrontal Cortex:*
- Reduced regulatory control over amygdala
- Altered medial PFC activation (self-referential processing)

*Insula:*
- Heightened interoceptive awareness
- Links to anticipatory anxiety

*Dopamine System:*
- Reduced D2 binding in striatum
- May relate to social reward deficits

*Serotonin:*
- 5-HT1A abnormalities
- Target of SSRIs

**Psychological Models:**

*Clark & Wells Model:*
1. Negative beliefs about self and social standards
2. Anticipatory processing before social situations
3. In-situation: Self-focused attention, safety behaviors
4. Post-event processing (rumination)
5. Maintains negative beliefs (confirmatory)

*Rapee & Heimberg Model:*
- Mental representation of self as seen by audience
- Comparison to perceived audience expectations
- Negative evaluation predicted
- Anxiety and avoidance follow

**Treatment:**

*Cognitive Therapy:*
- Identify automatic negative thoughts
- Examine evidence
- Behavioral experiments
- Address anticipatory and post-event processing
- Video feedback to correct self-perception

*Exposure:*
- Gradual hierarchy
- In vivo exposure
- Simulated social situations
- Drop safety behaviors during exposure
- Social mishap exposures (deliberately "mess up")

*Attention Training:*
- Reduce self-focused attention
- External focus during social situations
- Attention bias modification (research tool)

**Pharmacotherapy:**

*SSRIs (First-line):*
- Paroxetine, sertraline, escitalopram, fluvoxamine (FDA approved)
- 50-60% response rates
- 4-6 weeks for effect
- Duration: 12+ months

*SNRIs:*
- Venlafaxine XR (FDA approved)
- Similar efficacy to SSRIs

*Other:*
- MAOIs: Phenelzine highly effective but dietary restrictions
- Benzodiazepines: Clonazepam (dependence risk)
- Beta-blockers: Propranolol for performance anxiety only
- Gabapentin, pregabalin: Some evidence`,
      keyTerms: [
        { term: 'anticipatory processing', definition: 'Worrying and negative predictions before a social situation occurs' },
        { term: 'post-event processing', definition: 'Ruminating on perceived failures after a social situation' },
        { term: 'video feedback', definition: 'Watching recordings of oneself to correct distorted self-perception' },
        { term: 'social mishap exposure', definition: 'Deliberately doing embarrassing things to learn consequences are manageable' },
      ],
    },
    4: {
      level: 4,
      summary: 'Social anxiety disorder pathophysiology involves dysregulation of amygdala-prefrontal circuits, dopaminergic reward systems, and oxytocin signaling, with CBT demonstrating neurobiological changes and pharmacotherapy targeting serotonergic systems.',
      explanation: `**Genetic Factors:**
- Heritability: 30-40%
- Polygenic architecture
- Overlap with other anxiety disorders
- Behavioral inhibition heritable
- Specific genes: 5-HTTLPR (inconsistent), COMT, oxytocin receptor

**Neuroimaging:**

*Structural:*
- Amygdala volume: Mixed findings
- Cortical thickness changes (ACC, PFC)
- Gray matter differences

*Functional:*
- Amygdala hyperactivation to:
  - Angry, critical, or neutral faces
  - Public speaking tasks
  - Anticipation of social evaluation
- Reduced ventromedial PFC activation
- Anterior cingulate abnormalities
- Insula hyperactivation

*Connectivity:*
- Altered amygdala-PFC connectivity
- Reduced default mode network coherence
- Changes normalize with treatment

**Neurotransmitter Systems:**

*Serotonin:*
- 5-HT1A receptor alterations
- 5-HTT (transporter) binding changes
- Target of SSRIs

*Dopamine:*
- Reduced D2 receptor binding (striatum) - PET studies
- Social reward processing deficits
- May explain anhedonic components

*GABA:*
- Benzodiazepine efficacy
- Reduced GABA levels reported

*Oxytocin:*
- "Social hormone"
- Intranasal oxytocin effects on amygdala
- May enhance exposure therapy
- Inconsistent results in clinical trials

**Cognitive Mechanisms:**

*Attention Biases:*
- Initial vigilance to threatening faces
- Followed by avoidance
- Self-focused attention during social situations
- ABM training targets these

*Interpretation Biases:*
- Ambiguous situations interpreted negatively
- Neutral faces seen as critical
- Cognitive bias modification targets this

*Memory Biases:*
- Better recall of negative social information
- Distorted memory of own performance

**Treatment Mechanisms:**

*CBT Effects:*
- Reduced amygdala reactivity
- Increased PFC activation
- Normalized connectivity
- Changes in attention biases
- Updated negative beliefs

*SSRI Effects:*
- Reduced amygdala reactivity
- Modulation of fear circuitry
- 4-6 weeks for effect (neuroplasticity)

**Treatment-Resistant Social Anxiety:**

*Definition:*
- Failure to respond to adequate trials
- At least one SSRI + CBT

*Options:*
- MAOI (phenelzine - consider if not tried)
- Augmentation: Buspirone, benzodiazepine
- Combine CBT + medication if not already
- Consider avoidant personality disorder overlap
- Address comorbidities

**Performance Anxiety:**

*Unique Considerations:*
- Beta-blockers effective for physical symptoms
- Does not address underlying anxiety
- Musicians, public speakers
- Situational use (before performance)
- Not for generalized social anxiety

*Treatment:*
- Propranolol 10-40mg 1 hour before
- SSRIs if broader anxiety
- Performance-focused CBT
- Virtual reality exposure for public speaking`,
      keyTerms: [
        { term: 'behavioral inhibition', definition: 'Early temperamental trait of wariness to novelty, predisposes to social anxiety' },
        { term: 'attention bias modification', definition: 'Training to shift attention away from threatening stimuli' },
        { term: 'oxytocin', definition: 'Neuropeptide involved in social bonding, under investigation for social anxiety' },
        { term: 'cognitive bias modification', definition: 'Training to change negative interpretation of ambiguous information' },
      ],
      clinicalNotes: 'CBT is first-line for social anxiety. SSRIs/SNRIs effective pharmacotherapy. Combine for severe cases. Performance-only type may respond to beta-blockers for situational use. Treatment resistance common - consider MAOI, combination approaches. Address comorbid depression, substance use (self-medication).',
    },
    5: {
      level: 5,
      summary: 'Contemporary social anxiety research integrates computational approaches to understanding self-referential processing, investigates oxytocin and novel pharmacological augmentation, and develops technology-enhanced interventions targeting specific cognitive mechanisms.',
      explanation: `**Self-Referential Processing:**

*Neural Basis:*
- Medial prefrontal cortex (self-representation)
- Cortical midline structures
- Overlap with default mode network
- Excessive self-focus in social anxiety

*Computational Models:*
- Predictive coding: Over-weighting of negative predictions
- Bayesian models of self-inference
- "Too much" or "too precise" self-models

*Treatment Implications:*
- External attention focus
- Challenging meta-awareness
- Mindfulness approaches

**Oxytocin Research:**

*Rationale:*
- Social bonding hormone
- Modulates amygdala reactivity
- Enhances positive social memory
- Reduces cortisol response to social stress

*Clinical Trials:*
- Intranasal oxytocin + exposure therapy
- Mixed results
- May work better in some subgroups
- Methodological challenges

*Current Status:*
- Not ready for clinical use
- Continuing research
- May require combination with behavioral intervention

**Novel Pharmacological Approaches:**

*Glutamatergic:*
- D-cycloserine to augment exposure
- Small-moderate effect sizes
- Timing critical (before exposure)
- May be more effective for severe cases

*Cannabinoid:*
- CBD anxiolytic effects
- May enhance extinction
- Clinical trials ongoing
- Regulatory challenges

*Psychedelics:*
- MDMA + therapy for social anxiety in autism (FDA breakthrough)
- Psilocybin (no specific SAD trials yet)
- Potential for lasting change

*Other:*
- Neuropeptide Y analogs
- FAAH inhibitors (endocannabinoid)
- Novel 5-HT targets

**Technology-Enhanced Treatment:**

*Virtual Reality:*
- Public speaking exposure well-validated
- Social interaction simulations
- Advantages: Control, repeatability, privacy
- Increasingly accessible (consumer VR)

*Internet/App-Based CBT:*
- Effective for social anxiety
- Increases access
- Guided superior to pure self-help
- Cost-effective

*Attention Bias Modification (ABM):*
- Train attention away from threat
- Mixed results in meta-analyses
- May work for specific subgroups
- Methodological refinements ongoing

*Cognitive Bias Modification - Interpretation (CBM-I):*
- Train positive interpretation of ambiguous scenarios
- Promising results
- Mechanism unclear (expectation vs. learning)

**Transdiagnostic Approaches:**

*Unified Protocol:*
- Targets emotion regulation across disorders
- May be effective for comorbid presentations
- Less disorder-specific

*Acceptance and Commitment Therapy (ACT):*
- Focus on values, acceptance
- Less emphasis on changing thoughts
- Comparable efficacy to CBT in some studies
- May suit some patients better

**Precision Medicine:**

*Treatment Selection:*
- Severity: Medication more often needed
- Comorbid depression: SSRIs address both
- Performance-only: Consider beta-blockers
- Avoidant PD overlap: Longer treatment needed

*Biomarkers:*
- Amygdala reactivity as predictor (research)
- Attention bias patterns
- D2 binding (research)
- Not yet clinically useful

**Special Populations:**

*Children/Adolescents:*
- Often overlooked (dismissed as shyness)
- Early intervention important
- School-based programs
- Parent involvement in treatment

*Autism Spectrum:*
- Social anxiety common comorbidity
- Treatment modifications needed
- MDMA research promising

*Performers/Musicians:*
- High prevalence
- Performance-specific interventions
- Balance anxiety reduction with optimal arousal

**Future Directions:**

1. Mechanism-based treatment matching
2. Combining pharmacological augmentation with CBT optimally
3. Digital delivery expansion
4. Understanding neural predictors of response
5. Prevention programs for behaviorally inhibited youth
6. Cross-cultural adaptations
7. Addressing treatment resistance
8. Long-term outcome studies`,
      keyTerms: [
        { term: 'predictive coding', definition: 'Theory that brain constantly generates predictions, social anxiety involves excessive negative predictions' },
        { term: 'cognitive bias modification', definition: 'Computerized training to modify attention or interpretation biases' },
        { term: 'Unified Protocol', definition: 'Transdiagnostic CBT targeting emotion regulation across emotional disorders' },
        { term: 'MDMA-assisted therapy', definition: 'Psychedelic therapy combining MDMA with psychotherapy, showing promise for social anxiety' },
      ],
      clinicalNotes: `Current clinical practice:
- CBT (individual or group) is gold standard
- SSRIs/SNRIs first-line pharmacotherapy
- Combined treatment for moderate-severe
- Beta-blockers for performance-only (situational)
- Internet-based CBT if in-person not accessible

Emerging approaches:
- VR for exposure (especially public speaking)
- D-cycloserine augmentation (severe cases)
- Mindfulness and acceptance-based approaches
- Digital/app-based programs

Research priorities:
- Optimizing exposure (timing, intensity)
- Pharmacological augmentation
- Identifying treatment responders
- Prevention in high-risk youth
- Cultural adaptations`,
    },
  },

  media: [
    {
      id: 'sad-cognitive-model-diagram',
      type: 'diagram',
      filename: 'social_anxiety_cognitive_model.svg',
      title: 'Cognitive Model of Social Anxiety',
      description: 'Clark and Wells model showing maintaining factors',
    },
  ],

  citations: [
    {
      id: 'dsm-5-sad',
      type: 'textbook',
      title: 'Diagnostic and Statistical Manual of Mental Disorders, 5th Edition',
      authors: ['American Psychiatric Association'],
      source: 'American Psychiatric Publishing',
      chapter: 'Anxiety Disorders',
    },
    {
      id: 'heimberg-cbt',
      type: 'textbook',
      title: 'Cognitive-Behavioral Group Therapy for Social Phobia',
      authors: ['Heimberg RG', 'Becker RE'],
      source: 'Guilford Press',
    },
  ],

  crossReferences: [
    { targetId: 'psychiatry-generalized-anxiety-disorder', targetType: 'condition', relationship: 'related', label: 'Generalized Anxiety Disorder' },
    { targetId: 'psychiatry-specific-phobias', targetType: 'condition', relationship: 'related', label: 'Specific Phobias' },
    { targetId: 'psychiatry-ssris', targetType: 'topic', relationship: 'see-also', label: 'SSRIs' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['psychiatry', 'anxiety disorders'],
    keywords: ['social anxiety', 'social phobia', 'performance anxiety', 'CBT', 'SSRIs'],
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

export default socialAnxietyDisorderContent;
