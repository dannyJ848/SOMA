/**
 * Panic Disorder
 *
 * Comprehensive educational content on panic disorder,
 * panic attacks, and their treatment.
 */

import { EducationalContent } from '../../../types';

export const panicDisorderContent: EducationalContent = {
  id: 'psychiatry-panic-disorder',
  type: 'condition',
  name: 'Panic Disorder',
  alternateNames: ['Panic Attack Disorder', 'Episodic Paroxysmal Anxiety'],

  levels: {
    1: {
      level: 1,
      summary: 'Panic disorder causes sudden, intense episodes of fear called panic attacks, along with ongoing worry about having more attacks.',
      explanation: `A panic attack is a sudden wave of intense fear that comes on quickly and includes scary physical symptoms. With panic disorder, these attacks happen again and again, and you start to worry about when the next one will happen.

**What a Panic Attack Feels Like:**

- Racing or pounding heart
- Sweating
- Trembling or shaking
- Feeling short of breath
- Chest pain or discomfort
- Feeling dizzy or lightheaded
- Numbness or tingling
- Chills or hot flashes
- Nausea or upset stomach
- Feeling like things aren't real
- Fear of losing control or "going crazy"
- Fear of dying

**Important Facts:**

- Panic attacks are NOT dangerous, even though they feel terrifying
- They usually peak within 10 minutes and pass within 20-30 minutes
- Your body is having a "false alarm" - it thinks there's danger when there isn't
- You are NOT having a heart attack (though it can feel like it)
- You are NOT going to die from a panic attack
- You are NOT going crazy

**What is Panic Disorder?**

Having one panic attack doesn't mean you have panic disorder. Panic disorder is when:
- You have panic attacks that happen out of the blue
- You worry a lot about having more attacks
- You avoid places or situations because of fear of attacks

**The Good News:**

Panic disorder is VERY treatable! With the right help, most people get much better. Treatment includes:
- Learning what panic attacks really are (they're not dangerous)
- Therapy to face fears gradually
- Sometimes medication to reduce attacks
- Breathing and relaxation techniques`,
      keyTerms: [
        { term: 'panic attack', definition: 'A sudden episode of intense fear with physical symptoms like racing heart and shortness of breath' },
        { term: 'fight or flight', definition: 'Your body\'s natural alarm system that gets activated during panic attacks' },
        { term: 'agoraphobia', definition: 'Fear of places or situations where escape might be difficult if you have a panic attack' },
      ],
      analogies: [
        'A panic attack is like your body\'s fire alarm going off when there\'s no fire - it\'s scary but not actually dangerous.',
        'Your body is like a car alarm that\'s too sensitive - it goes off even when nothing bad is happening.',
      ],
      examples: [
        'Someone having a panic attack in a grocery store might feel their heart racing and think they\'re dying, but it passes and they\'re okay.',
        'A person might avoid driving on highways because they once had a panic attack while driving.',
      ],
    },
    2: {
      level: 2,
      summary: 'Panic disorder involves recurrent unexpected panic attacks plus persistent concern about future attacks or maladaptive behavioral changes, often accompanied by agoraphobia.',
      explanation: `**Understanding Panic Attacks:**

A panic attack is an abrupt surge of intense fear or discomfort that peaks within minutes and includes 4+ symptoms:

*Physical Symptoms:*
- Palpitations, pounding heart, or accelerated heart rate
- Sweating
- Trembling or shaking
- Shortness of breath or feeling smothered
- Chest pain or discomfort
- Nausea or abdominal distress
- Dizziness, unsteadiness, lightheadedness, or faintness
- Chills or hot flashes
- Numbness or tingling (paresthesias)

*Cognitive Symptoms:*
- Derealization (feeling unreal) or depersonalization (detachment from self)
- Fear of losing control or "going crazy"
- Fear of dying

**Panic Disorder Diagnosis:**
- Recurrent unexpected panic attacks (at least 2)
- At least 1 month of persistent concern about additional attacks OR
- Significant maladaptive behavior change related to attacks
- Not due to substances or medical conditions

**Expected vs. Unexpected Attacks:**
- Unexpected: Come "out of the blue" with no obvious trigger
- Expected: Occur in response to a feared situation (as in phobias)
- Panic disorder requires unexpected attacks

**Agoraphobia:**

Often co-occurs with panic disorder. Fear/avoidance of 2+ situations:
- Public transportation
- Open spaces
- Enclosed places
- Standing in line or crowds
- Being outside the home alone

**The Fear-Avoidance Cycle:**
1. Panic attack occurs
2. Person becomes afraid of symptoms
3. Avoids situations associated with attacks
4. Avoidance maintains fear
5. More attacks occur

**Causes:**

*Biological:*
- Sensitive fear circuitry (amygdala)
- CO2 hypersensitivity
- Genetic factors (40% heritability)
- Noradrenergic hyperactivity

*Psychological:*
- Anxiety sensitivity (fear of anxiety symptoms)
- Catastrophic misinterpretation of body sensations
- Interoceptive conditioning

**Treatment:**

*Cognitive Behavioral Therapy (CBT):*
- Psychoeducation
- Cognitive restructuring (challenging catastrophic thoughts)
- Interoceptive exposure (deliberately triggering symptoms)
- In vivo exposure (confronting avoided situations)
- Very effective - often 80%+ response

*Medications:*
- SSRIs (first-line)
- SNRIs
- Benzodiazepines (short-term, for acute attacks)
- TCAs (imipramine)`,
      keyTerms: [
        { term: 'anxiety sensitivity', definition: 'Fear of anxiety-related sensations, believing they will have harmful consequences' },
        { term: 'interoceptive exposure', definition: 'Deliberately inducing feared bodily sensations to reduce fear of them' },
        { term: 'catastrophic cognition', definition: 'Interpreting normal body sensations as signs of serious danger' },
      ],
      analogies: [
        'Interoceptive exposure is like getting used to a scary movie by watching it repeatedly - the fear decreases with familiarity.',
      ],
    },
    3: {
      level: 3,
      summary: 'Panic disorder involves dysregulation of fear circuitry, particularly the amygdala and locus coeruleus, with treatment centered on CBT with interoceptive exposure and/or SSRIs.',
      explanation: `**DSM-5 Diagnostic Criteria:**

A. Recurrent unexpected panic attacks (abrupt surge of intense fear/discomfort, peaks within minutes, 4+ symptoms)
B. At least one attack followed by 1+ month of:
   - Persistent concern about additional attacks or consequences
   - Significant maladaptive change in behavior related to attacks
C. Not attributable to substances or another medical condition
D. Not better explained by another mental disorder

**Panic Attack Specifier:**
- Can occur in any disorder
- Note "with panic attacks" as specifier

**Agoraphobia (separate diagnosis):**
- Marked fear/anxiety about 2+ agoraphobic situations
- Situations feared due to thoughts that escape might be difficult or help unavailable
- Situations almost always provoke fear
- Active avoidance or endured with marked distress
- Fear out of proportion to actual danger
- Persistent (6+ months)
- Causes significant distress/impairment

**Neurobiological Model:**

*Fear Network:*
- Amygdala: Central hub, hyperreactive
- Locus coeruleus: Noradrenergic, arousal
- Hypothalamus: HPA axis activation
- Periaqueductal gray: Defensive behaviors
- Hippocampus: Contextual memory

*Suffocation False Alarm Theory:*
- Hypersensitivity to CO2/pH changes
- Medullary chemoreceptors
- CO2 inhalation provokes attacks

*Noradrenergic Hypothesis:*
- Locus coeruleus hyperactivity
- Yohimbine provokes attacks
- Clonidine (alpha-2 agonist) reduces attacks

*Serotonergic:*
- Modulates fear network
- SSRIs reduce attacks
- PAG serotonin involved

*GABAergic:*
- Benzodiazepines effective
- GABA-A receptor changes
- Neurosteroid alterations

**Cognitive Model:**

*Anxiety Sensitivity:*
- Fear of anxiety symptoms themselves
- Predicts panic development
- Target of treatment

*Interoceptive Conditioning:*
- Body sensations become conditioned stimuli
- Trigger fear response
- Explain "out of the blue" attacks

*Catastrophic Misinterpretation:*
- "My heart is racing → I'm having a heart attack"
- Cognitive restructuring targets this

**Treatment:**

*CBT for Panic Disorder:*
- Psychoeducation (panic is not dangerous)
- Cognitive restructuring
- Interoceptive exposure (hyperventilation, spinning, etc.)
- In vivo exposure (avoided situations)
- 80-90% response rate
- Effects maintained at follow-up

*Pharmacotherapy:*
- SSRIs: First-line (escitalopram, sertraline, paroxetine)
- SNRIs: Venlafaxine
- Start low (can initially worsen anxiety)
- 4-6 weeks for effect
- TCAs: Imipramine effective but more side effects
- Benzodiazepines: Alprazolam, clonazepam (rapid but risks)
- Duration: 6-12 months after response`,
      keyTerms: [
        { term: 'locus coeruleus', definition: 'Brainstem nucleus, main source of norepinephrine, involved in arousal and panic', pronunciation: 'LO-kus seh-ROO-lee-us' },
        { term: 'suffocation false alarm', definition: 'Theory that panic results from hypersensitivity to suffocation signals (CO2)' },
        { term: 'periaqueductal gray', definition: 'Midbrain region mediating defensive behaviors and panic responses' },
      ],
    },
    4: {
      level: 4,
      summary: 'Panic disorder pathophysiology involves amygdala-centered fear network dysfunction, noradrenergic and serotonergic dysregulation, and CO2 hypersensitivity, with CBT demonstrating neurobiological changes and SSRIs modulating fear circuitry.',
      explanation: `**Neuroimaging Findings:**

*Structural:*
- Amygdala volume: Some studies show enlargement
- Reduced prefrontal volume (some studies)
- Insular cortex changes (interoception)

*Functional:*
- Amygdala hyperactivity to threat cues
- Increased insular activation (interoception)
- Reduced prefrontal regulation
- Anterior cingulate abnormalities
- Brainstem activation during attacks

*Connectivity:*
- Altered amygdala-prefrontal connectivity
- Changes in salience network

**Neurochemical Systems:**

*Noradrenergic:*
- Locus coeruleus hyperactivity
- Elevated plasma norepinephrine, MHPG
- Yohimbine (alpha-2 antagonist) provokes attacks
- Clonidine (alpha-2 agonist) blocks attacks
- Beta-blockers reduce peripheral symptoms only

*Serotonergic:*
- 5-HT1A receptor alterations
- SSRIs effective (increase 5-HT)
- 5-HT modulates fear network
- Tryptophan depletion can trigger attacks

*GABAergic:*
- Reduced GABA-A/BDZ receptor binding (PET)
- Benzodiazepine efficacy
- Neurosteroid changes (allopregnanolone)

*Glutamatergic:*
- mGluR2/3 receptor alterations
- Glutamate release in amygdala

*HPA Axis:*
- Variable cortisol findings
- CRH sensitivity

**CO2 Hypersensitivity:**
- 35% CO2 inhalation provokes attacks in panic patients
- Medullary chemoreceptors
- Orexin neurons (lateral hypothalamus)
- Acid-sensing ion channels (ASIC1a)
- Sodium lactate infusion also provokes attacks

**Genetic Factors:**
- Heritability ~40%
- Polygenic
- COMT, 5-HTTLPR associations (inconsistent)
- CO2 sensitivity heritable

**CBT Mechanisms and Neurobiological Changes:**

*Interoceptive Exposure:*
- Deliberate symptom provocation
- Habituation
- Inhibitory learning
- Changes amygdala reactivity

*Neuroimaging After CBT:*
- Reduced amygdala reactivity
- Increased prefrontal activity
- Normalized connectivity

**Pharmacotherapy Details:**

*SSRIs:*
- Start at half typical dose (can worsen initially)
- Paroxetine, sertraline, fluoxetine, escitalopram FDA-approved
- Full dose for 4-6 weeks before assessing
- Duration: 6-12+ months

*Benzodiazepines:*
- Rapid efficacy
- Alprazolam, clonazepam most studied
- Tolerance, dependence, withdrawal
- Rebound panic on discontinuation
- Reserve for:
  - Bridge therapy while awaiting SSRI effect
  - Acute severe attacks
  - Treatment-resistant cases

*TCAs:*
- Imipramine well-studied
- Anticholinergic, cardiac effects
- Less used now due to SSRI availability

*Other:*
- Mirtazapine
- MAOIs (effective but dietary restrictions)
- Gabapentin, pregabalin (limited data)`,
      keyTerms: [
        { term: 'ASIC1a', definition: 'Acid-sensing ion channel type 1a, involved in CO2 sensitivity and panic' },
        { term: 'orexin', definition: 'Neuropeptide system involved in arousal and panic; orexin antagonists under investigation' },
        { term: 'inhibitory learning', definition: 'Learning that feared outcomes do not occur, central to exposure therapy' },
      ],
      clinicalNotes: 'CBT with interoceptive exposure is highly effective and first-line. SSRIs effective but start low. Avoid benzodiazepines long-term if possible. Rule out medical causes (thyroid, cardiac, respiratory). Caffeine, stimulants worsen panic. Hyperventilation during panic maintains symptoms.',
    },
    5: {
      level: 5,
      summary: 'Contemporary panic disorder research emphasizes fear learning and extinction mechanisms, D-cycloserine augmentation of exposure, precision approaches to treatment selection, and novel targets including orexin and glutamatergic systems.',
      explanation: `**Fear Learning and Extinction:**

*Pavlovian Conditioning Model:*
- Panic as conditioned fear response
- Interoceptive cues as CS
- Panic attack as UR/CR
- Extinction = new inhibitory learning

*Extinction Mechanisms:*
- Does not erase original fear memory
- Creates new "safe" memory
- Context-dependent
- Involves prefrontal inhibition of amygdala
- NMDA-dependent in amygdala

*Return of Fear:*
- Spontaneous recovery
- Renewal (context change)
- Reinstatement (stress)
- Implications for relapse

**Enhancing Exposure Therapy:**

*D-Cycloserine Augmentation:*
- Partial NMDA agonist
- Enhances extinction learning
- Given before exposure sessions
- Meta-analyses show small-moderate effect
- Timing crucial (give before, not after)

*Reconsolidation-Based Approaches:*
- Reactivate fear memory, then interfere
- Propranolol studies
- Potential for more durable effects

*Other Augmentation:*
- Yohimbine (increases arousal, enhances extinction)
- Cortisol administration
- Exercise before exposure

**Precision Medicine Approaches:**

*Predictors of Treatment Response:*
- Anxiety sensitivity predicts CBT response
- Expectancy of benefit
- Homework compliance
- Neuroimaging: Prefrontal-amygdala connectivity

*Biomarkers:*
- CO2 sensitivity as phenotype
- HRV as predictor
- Genetic markers (limited utility currently)

*Treatment Selection:*
- High anxiety sensitivity → emphasize interoceptive exposure
- Agoraphobia-predominant → in vivo exposure essential
- Pharmacotherapy: Consider CYP genotyping

**Novel Therapeutics:**

*Glutamatergic:*
- mGluR modulators under investigation
- Ketamine for refractory panic (limited data)
- D-cycloserine augmentation (above)

*Orexin System:*
- Orexin neurons link arousal and panic
- Orexin antagonists (suvorexant) may help
- Research ongoing

*Cannabinoid:*
- CBD has anxiolytic properties
- Endocannabinoid system modulates fear
- FAAH inhibitors (development issues)

*Neurosteroids:*
- Allopregnanolone analogs (e.g., zuranolone)
- GABA-A modulation
- Primarily studied in depression, potential for anxiety

*Other Targets:*
- GLP-1 agonists (anxiety effects noted)
- Neuropeptide S antagonists
- CRH antagonists (challenging development)

**Neuromodulation:**

*TMS:*
- Right DLPFC stimulation
- Some positive studies
- Not yet standard care

*Other:*
- tDCS (research)
- Vagus nerve stimulation (research)

**Digital Therapeutics:**

*Computerized CBT:*
- Effective for panic
- Increases access
- Can augment in-person therapy

*Virtual Reality:*
- For agoraphobia exposure
- Increasingly accessible
- Effective in studies

*Apps and Monitoring:*
- Panic tracking
- Guided breathing
- Symptom monitoring
- Digital phenotyping potential

**Future Directions:**

1. Personalized treatment selection using biomarkers
2. Optimizing fear extinction (timing, dose, context)
3. Novel pharmacological augmentation of exposure
4. Reconsolidation-based interventions
5. Preventing panic disorder in high-risk individuals
6. Integration of digital tools
7. Transdiagnostic approaches to fear/panic`,
      keyTerms: [
        { term: 'D-cycloserine', definition: 'Partial NMDA agonist that enhances fear extinction learning when given with exposure therapy' },
        { term: 'reconsolidation', definition: 'Process by which reactivated memories become labile and can be modified' },
        { term: 'renewal', definition: 'Return of extinguished fear when context changes from extinction context' },
      ],
      clinicalNotes: `Current clinical practice:
- CBT with interoceptive and in vivo exposure is gold standard
- SSRIs first-line pharmacotherapy
- Combined treatment often used
- Benzodiazepines for severe acute symptoms only, short-term
- Address agoraphobia concurrently

Emerging practices:
- D-cycloserine augmentation of exposure (research promising)
- Virtual reality for agoraphobia exposure
- Digital CBT programs
- Intensive/concentrated treatment formats

Research priorities:
- Enhancing and maintaining extinction
- Predictors of treatment response
- Prevention in high-risk individuals
- Novel drug targets (orexin, glutamate)
- Optimal combination strategies`,
    },
  },

  media: [
    {
      id: 'panic-attack-diagram',
      type: 'diagram',
      filename: 'panic_attack_symptoms.svg',
      title: 'Panic Attack Symptoms',
      description: 'Visualization of physical and cognitive symptoms during a panic attack',
    },
    {
      id: 'fear-circuit-diagram',
      type: 'diagram',
      filename: 'fear_circuit.svg',
      title: 'Fear Circuit in Panic Disorder',
      description: 'Neural pathways involved in panic attacks',
    },
  ],

  citations: [
    {
      id: 'dsm-5-panic',
      type: 'textbook',
      title: 'Diagnostic and Statistical Manual of Mental Disorders, 5th Edition',
      authors: ['American Psychiatric Association'],
      source: 'American Psychiatric Publishing',
      chapter: 'Anxiety Disorders',
    },
    {
      id: 'craske-panic',
      type: 'textbook',
      title: 'Mastery of Your Anxiety and Panic',
      authors: ['Craske MG', 'Barlow DH'],
      source: 'Oxford University Press',
    },
  ],

  crossReferences: [
    { targetId: 'psychiatry-generalized-anxiety-disorder', targetType: 'condition', relationship: 'related', label: 'Generalized Anxiety Disorder' },
    { targetId: 'psychiatry-specific-phobias', targetType: 'condition', relationship: 'related', label: 'Specific Phobias' },
    { targetId: 'psychiatry-ssris', targetType: 'topic', relationship: 'see-also', label: 'SSRIs' },
    { targetId: 'psychiatry-anxiolytics', targetType: 'topic', relationship: 'see-also', label: 'Anxiolytics' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['psychiatry', 'anxiety disorders'],
    keywords: ['panic', 'panic attack', 'agoraphobia', 'anxiety', 'CBT'],
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

export default panicDisorderContent;
