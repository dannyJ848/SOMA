/**
 * Anxiety Disorders - GAD, Panic Disorder, Social Anxiety, PTSD, OCD
 *
 * Comprehensive coverage of anxiety spectrum disorders including fear circuitry
 * (amygdala, prefrontal cortex), CBT mechanisms, SSRI/benzodiazepine pharmacology,
 * fear extinction, and trauma neurobiology.
 */

import { EducationalContent } from '../types';

export const anxietyDisorders: EducationalContent = {
  id: 'psychiatry-anxiety-disorders',
  type: 'condition',
  name: 'Anxiety Disorders',
  nameEs: 'Trastornos de Ansiedad',
  alternateNames: [
    'Anxiety Spectrum Disorders',
    'Neurotic Disorders (historical)',
    'Fear and Anxiety-Related Disorders',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Anxiety disorders happen when the brain\'s alarm system gets stuck in the "on" position, making a person feel scared or worried even when there is no real danger.',
      explanation: `## When Your Brain's Alarm System Gets Stuck

### Your Built-In Alarm System

Everyone has a built-in alarm system in their brain. When you are in real danger -- like a car speeding toward you -- this alarm goes off instantly. Your heart races, you breathe faster, and your muscles tense up so you can get out of the way. This is called the **fight-or-flight response**, and it can save your life.

But in people with anxiety disorders, this alarm system is too sensitive. It goes off even when there is no real danger, like ringing a fire alarm when someone is just making toast.

### Types of Anxiety Disorders

**Generalized Anxiety Disorder (GAD)**:
Think of it like having a worry machine that never turns off. A person with GAD worries about everything -- school, health, money, family, the future -- almost every day, for months. The worrying feels impossible to control and comes with physical symptoms like muscle tension, trouble sleeping, and feeling restless.

**Panic Disorder**:
Imagine your alarm system suddenly goes off at full blast for no reason. That is a **panic attack**. Your heart pounds, you cannot breathe, you feel dizzy, and you might think you are dying. Panic attacks peak in about 10 minutes and usually pass within 20-30 minutes. People with panic disorder live in fear of the next attack.

**Social Anxiety Disorder**:
This is more than just being shy. People with social anxiety have intense fear of being judged, embarrassed, or humiliated in social situations. They might avoid parties, class presentations, or even eating in front of others.

**PTSD (Post-Traumatic Stress Disorder)**:
After experiencing something truly terrifying (an accident, violence, disaster), a person's brain can get stuck replaying the event. They have **flashbacks** (feeling like the event is happening again), nightmares, and avoid anything that reminds them of what happened. They feel "on edge" all the time.

**OCD (Obsessive-Compulsive Disorder)**:
The brain gets stuck in a loop. **Obsessions** are unwanted, distressing thoughts that keep coming back (for example, "What if I left the stove on?"). **Compulsions** are repetitive actions the person does to try to reduce the anxiety (checking the stove over and over). The person knows the behavior does not make sense, but they feel unable to stop.

### Getting Help

Anxiety disorders are among the most treatable mental health conditions:
- **Therapy** (especially CBT -- Cognitive Behavioral Therapy) teaches you to challenge anxious thoughts and gradually face your fears
- **Medication** can help calm the alarm system
- **Relaxation techniques** like deep breathing and mindfulness can lower anxiety in the moment`,
      keyTerms: [
        {
          term: 'Anxiety',
          definition:
            'A feeling of worry, nervousness, or fear about something that might happen; in anxiety disorders, this feeling is excessive and hard to control',
          pronunciation: 'ang-ZY-eh-tee',
        },
        {
          term: 'Fight-or-flight response',
          definition:
            'The body\'s automatic reaction to danger that makes your heart race, breathing speed up, and muscles tense so you can fight or run away',
        },
        {
          term: 'Panic attack',
          definition:
            'A sudden episode of intense fear with physical symptoms like a pounding heart, shortness of breath, and dizziness, usually peaking within 10 minutes',
        },
        {
          term: 'PTSD',
          definition:
            'Post-Traumatic Stress Disorder -- a condition where the brain gets stuck replaying a terrifying event, causing flashbacks, nightmares, and constant vigilance',
        },
        {
          term: 'OCD',
          definition:
            'Obsessive-Compulsive Disorder -- a condition where the brain gets stuck in a loop of unwanted thoughts (obsessions) and repetitive behaviors (compulsions)',
        },
      ],
      analogies: [
        'An anxiety disorder is like having a fire alarm that goes off when someone makes toast -- the alarm system works, but it is way too sensitive.',
        'GAD is like having a worry machine that runs 24/7 and cannot be turned off.',
        'A panic attack is like your brain suddenly hitting a panic button at full blast even though nothing dangerous is happening.',
        'OCD is like a song stuck on repeat in your brain -- you cannot stop the loop no matter how hard you try.',
      ],
      patientCounselingPoints: [
        'Anxiety disorders are very common and very treatable -- you are not alone.',
        'Having anxiety does not mean you are weak; your brain alarm system is just too sensitive.',
        'Treatment works for most people -- therapy and/or medication can make a big difference.',
        'Avoiding things that make you anxious usually makes the anxiety worse over time.',
      ],
    },

    2: {
      level: 2,
      summary:
        'Anxiety disorders are defined by DSM-5 criteria and include GAD, panic disorder, social anxiety disorder, PTSD, and OCD. Treatment involves SSRIs as first-line medication, benzodiazepines for acute relief, and CBT as first-line psychotherapy.',
      explanation: `## Anxiety Disorders: DSM-5 Criteria and First-Line Treatment

### Generalized Anxiety Disorder (GAD)

**DSM-5 criteria**:
- Excessive anxiety and worry about multiple events/activities, occurring more days than not for at least **6 months**
- Difficulty controlling the worry
- **3 or more** of: restlessness, fatigue, concentration difficulties, irritability, muscle tension, sleep disturbance
- Causes clinically significant distress or functional impairment
- Not attributable to substances or another medical condition

**Epidemiology**: Lifetime prevalence ~6%; F:M ratio 2:1; mean onset late 20s-30s; highly chronic course

### Panic Disorder

**DSM-5 criteria**:
- Recurrent **unexpected panic attacks** (abrupt surge of intense fear peaking within minutes)
- Panic attack symptoms (4+ required): palpitations, sweating, trembling, shortness of breath, choking sensation, chest pain, nausea, dizziness, chills/heat, paresthesias, derealization/depersonalization, fear of losing control, fear of dying
- At least 1 month of persistent concern about additional attacks OR maladaptive behavioral changes (avoidance)
- Often comorbid with **agoraphobia** (fear of situations where escape may be difficult)

### Social Anxiety Disorder (Social Phobia)

**DSM-5 criteria**:
- Marked fear or anxiety about social situations where scrutiny by others is possible
- Fear of acting in a way that will be negatively evaluated
- Social situations almost always provoke anxiety
- Avoided or endured with intense distress
- Duration at least **6 months**
- Specify: "performance only" subtype

### Post-Traumatic Stress Disorder (PTSD)

**DSM-5 criteria** (moved from anxiety disorders to "Trauma- and Stressor-Related Disorders"):
- Exposure to actual or threatened death, serious injury, or sexual violence
- **4 symptom clusters**:
  1. **Intrusion**: Flashbacks, nightmares, intrusive memories, psychological/physiological reactivity to cues
  2. **Avoidance**: Avoiding trauma-related thoughts, feelings, or external reminders
  3. **Negative cognitions and mood**: Distorted blame, persistent negative emotions, detachment, anhedonia
  4. **Arousal/reactivity**: Hypervigilance, exaggerated startle, irritability, reckless behavior, sleep disturbance, concentration problems
- Duration **>1 month**; specify "delayed expression" if onset >6 months after trauma

### Obsessive-Compulsive Disorder (OCD)

**DSM-5 criteria** (reclassified to "Obsessive-Compulsive and Related Disorders"):
- **Obsessions**: Recurrent, persistent, intrusive thoughts, urges, or images that cause marked anxiety
- **Compulsions**: Repetitive behaviors or mental acts performed in response to obsessions or according to rigid rules, aimed at reducing distress
- Time-consuming (>1 hour/day) or causes significant distress/impairment
- Common themes: contamination/cleaning, symmetry/ordering, forbidden thoughts, harm/checking

### Pharmacotherapy

**SSRIs (First-line for all anxiety disorders)**:
- Sertraline, paroxetine, fluoxetine, escitalopram
- Start low, go slow (anxiety patients are more sensitive to activating side effects)
- Full response may take 8-12 weeks (longer than for depression)
- Higher doses often needed for OCD (e.g., fluoxetine 60-80mg vs. 20mg for depression)

**SNRIs**:
- Venlafaxine XR and duloxetine for GAD and social anxiety
- Second-line or when comorbid pain conditions exist

**Benzodiazepines**:
- Rapid relief of acute anxiety; useful as short-term bridge while SSRIs take effect
- Examples: lorazepam, clonazepam, alprazolam
- Mechanism: Positive allosteric modulators of GABA-A receptors, enhancing chloride conductance
- Risks: Dependence, tolerance, withdrawal seizures, cognitive impairment, respiratory depression (especially with opioids)
- Generally avoided as long-term monotherapy

**Other agents**:
- **Buspirone**: 5-HT1A partial agonist for GAD; no dependence risk; takes 2-4 weeks
- **Hydroxyzine**: Antihistamine for acute anxiety
- **Prazosin**: Alpha-1 antagonist for PTSD nightmares
- **Propranolol**: Beta-blocker for performance anxiety
- **Clomipramine**: TCA, most effective pharmacotherapy for OCD (but side effect burden limits use)

### Cognitive Behavioral Therapy (CBT)

CBT is first-line psychotherapy for all anxiety disorders:
- **Cognitive restructuring**: Identifying and challenging distorted automatic thoughts (catastrophizing, overestimating threat, underestimating coping ability)
- **Exposure therapy**: Gradual, systematic confrontation with feared situations/stimuli
  - In vivo exposure (real-life situations)
  - Imaginal exposure (for trauma memories in PTSD)
  - Interoceptive exposure (deliberately inducing feared physical sensations in panic disorder)
- **Response prevention**: For OCD -- resisting compulsive behaviors after exposure to obsessional triggers (ERP -- Exposure and Response Prevention)
- **Behavioral experiments**: Testing anxious predictions in real life

Combined SSRI + CBT is often more effective than either alone.`,
      keyTerms: [
        {
          term: 'Agoraphobia',
          definition:
            'Fear of situations where escape may be difficult or help unavailable in the event of a panic attack; often comorbid with panic disorder',
          pronunciation: 'AG-or-ah-FOH-bee-ah',
          etymology: 'Greek: agora (marketplace) + phobos (fear)',
        },
        {
          term: 'Benzodiazepine',
          definition:
            'A class of medications that enhance GABA-A receptor activity for rapid anxiety relief; effective but carries risks of dependence, tolerance, and withdrawal',
          pronunciation: 'BEN-zoh-dy-AZ-eh-peen',
          relatedTerms: ['Lorazepam', 'Clonazepam', 'Alprazolam'],
        },
        {
          term: 'Exposure and Response Prevention',
          definition:
            'The gold-standard CBT technique for OCD involving systematic exposure to obsessional triggers while preventing the compulsive response',
          relatedTerms: ['ERP', 'Exposure therapy'],
        },
        {
          term: 'Cognitive restructuring',
          definition:
            'A CBT technique that helps patients identify and challenge distorted automatic thoughts such as catastrophizing and overestimating threat',
        },
        {
          term: 'Flashback',
          definition:
            'A dissociative reaction in PTSD where the person feels or acts as if the traumatic event is recurring; can range from brief sensory intrusions to complete loss of awareness of present surroundings',
        },
        {
          term: 'Buspirone',
          definition:
            'A 5-HT1A partial agonist used for GAD; no dependence risk unlike benzodiazepines, but requires 2-4 weeks to take effect',
          pronunciation: 'byoo-SPYE-rone',
        },
      ],
      clinicalNotes:
        'Start SSRIs at half the usual dose in anxiety patients to avoid initial activation/jitteriness. Benzodiazepines should generally be time-limited (2-4 weeks) and avoided in patients with substance use history. Clonazepam (longer half-life) is preferred over alprazolam (short-acting, higher abuse potential). OCD often requires SSRI doses 2-3x higher than standard antidepressant doses. PTSD treatment should include trauma-focused psychotherapy (CPT or prolonged exposure) as first-line. The Yale-Brown Obsessive Compulsive Scale (Y-BOCS) monitors OCD severity.',
    },

    3: {
      level: 3,
      summary:
        'Anxiety disorders involve dysregulated fear circuitry centered on the amygdala-prefrontal cortex axis, with impaired fear extinction, aberrant threat detection, and disrupted GABA/glutamate balance. PTSD involves noradrenergic hyperactivation and hippocampal-dependent memory reconsolidation deficits.',
      explanation: `## Neurocircuitry and Neurobiology of Anxiety Disorders

### Fear Circuitry: The Amygdala-Prefrontal Axis

The brain's fear response involves a critical circuit:

**Amygdala** (central hub of fear processing):
- **Basolateral amygdala (BLA)**: Receives sensory input and forms associations between stimuli and threat (fear conditioning)
- **Central nucleus of the amygdala (CeA)**: Outputs to brainstem nuclei to generate the fear response:
  - **Periaqueductal gray (PAG)**: Freezing behavior
  - **Lateral hypothalamus**: Sympathetic activation (tachycardia, hypertension)
  - **Parabrachial nucleus**: Respiratory changes (dyspnea, hyperventilation)
  - **Locus coeruleus**: Norepinephrine release (arousal, vigilance)
  - **Bed nucleus of the stria terminalis (BNST)**: Sustained anxiety (vs. acute fear from CeA)

**Prefrontal cortex (PFC)** -- top-down regulation:
- **Ventromedial PFC (vmPFC)** and **infralimbic cortex**: Suppress amygdala activity; essential for fear extinction
- **Dorsolateral PFC (dlPFC)**: Cognitive reappraisal of threat
- In anxiety disorders, PFC regulation of the amygdala is **impaired** -- the "brake" on the fear response is weak

**Hippocampus**:
- Provides contextual information (where and when a threat occurred)
- Encodes safety signals -- recognizing that a context is safe
- In PTSD, hippocampal dysfunction leads to **context-inappropriate fear responses** (fear generalizes beyond the trauma context)

### Fear Conditioning and Extinction

**Fear conditioning** (Pavlovian):
- A neutral stimulus (tone) is paired with an aversive stimulus (shock)
- After conditioning, the tone alone activates the amygdala and triggers the fear response
- This is a model for how trauma creates anxiety triggers

**Fear extinction** (the neural basis of exposure therapy):
- Repeated presentation of the conditioned stimulus WITHOUT the aversive outcome
- Does **not** erase the original fear memory; instead, creates a NEW inhibitory memory (extinction memory)
- Requires vmPFC-mediated inhibition of the amygdala
- Extinction memory is **context-dependent** and can be disrupted by stress, sleep deprivation, or context change (explaining relapse)

**Impaired fear extinction in anxiety disorders**:
- PTSD patients show reduced vmPFC activation during extinction
- Reduced hippocampal volume impairs contextual safety signaling
- Fear memories are overly consolidated and resistant to modification

### GABAergic and Glutamatergic Systems

**GABA (primary inhibitory neurotransmitter)**:
- GABA-A receptors: Ligand-gated chloride channels; benzodiazepine site is an allosteric modulatory site
  - Alpha-1 subunit: Sedation (targeted by zolpidem)
  - Alpha-2/3 subunits: Anxiolytic effects (targeted by next-generation selective anxiolytics)
- GABA-B receptors: G-protein coupled; baclofen is an agonist
- Reduced GABA levels in anxiety disorders (demonstrated on MRS neuroimaging)
- Neurosteroids (allopregnanolone) are endogenous positive allosteric modulators of GABA-A

**Glutamate (primary excitatory neurotransmitter)**:
- Excessive glutamatergic signaling contributes to anxiety and excitotoxicity
- NMDA receptors in the amygdala are critical for fear conditioning
- **D-cycloserine** (partial NMDA agonist) enhances fear extinction when given before exposure therapy sessions

### Noradrenergic System in PTSD

- The **locus coeruleus-norepinephrine (LC-NE) system** is hyperactive in PTSD
- Elevated norepinephrine leads to hyperarousal, hypervigilance, exaggerated startle, insomnia
- NE enhances **fear memory consolidation** via beta-adrenergic receptors in the amygdala
- **Prazosin** (alpha-1 antagonist) reduces trauma-related nightmares by blocking NE-mediated activation during REM sleep
- **Propranolol** given shortly after trauma was investigated for PTSD prevention (disrupting reconsolidation), with mixed results

### Serotonergic Modulation

- Serotonin from the **dorsal raphe nucleus** modulates amygdala and PFC activity
- **5-HT1A receptors**: Inhibitory; agonism (buspirone) is anxiolytic; these receptors are downregulated in anxiety disorders
- **5-HT2A receptors**: On pyramidal neurons; activation can be anxiogenic in some contexts
- **5-HT transporter (SERT)**: Target of SSRIs; chronic SSRI treatment increases serotonergic tone, enhancing PFC-mediated amygdala inhibition
- Chronic SSRI use also promotes **neuroplasticity** in fear extinction circuits (BDNF upregulation in hippocampus and PFC)

### OCD: Cortico-Striato-Thalamo-Cortical Circuit

OCD involves a distinct circuit from other anxiety disorders:
- **Orbitofrontal cortex (OFC)**: Error detection and "something is wrong" signals -- hyperactive in OCD
- **Caudate nucleus** (striatum): Normally filters and gates OFC signals; dysfunctional in OCD
- **Thalamus**: Relay station; inadequately filtered signals loop back to cortex
- Result: A self-reinforcing loop where the brain continuously signals "danger/error" despite no actual threat
- Successful treatment (SSRI or CBT) normalizes hyperactivity in this circuit

**Serotonin in OCD**:
- OCD responds preferentially to serotonergic agents (SSRIs, clomipramine) but NOT to noradrenergic agents (desipramine)
- Higher SSRI doses are needed, suggesting a different serotonergic mechanism than depression
- Glutamate modulators (memantine, riluzole, NAC) are being investigated as augmentation strategies`,
      keyTerms: [
        {
          term: 'Basolateral amygdala',
          definition:
            'The input region of the amygdala that receives sensory information and forms fear associations through Pavlovian conditioning; the site of fear memory formation',
          pronunciation: 'BAY-zoh-LAT-er-al ah-MIG-dah-lah',
        },
        {
          term: 'Fear extinction',
          definition:
            'The process of forming a new inhibitory memory that suppresses (but does not erase) a conditioned fear response; mediated by the vmPFC and the neural basis of exposure therapy',
        },
        {
          term: 'Ventromedial prefrontal cortex',
          definition:
            'The brain region responsible for top-down inhibition of the amygdala during fear extinction; hypoactive in PTSD and anxiety disorders, resulting in impaired fear regulation',
          relatedTerms: ['vmPFC', 'Infralimbic cortex'],
        },
        {
          term: 'D-cycloserine',
          definition:
            'A partial NMDA receptor agonist that enhances fear extinction learning when administered before exposure therapy sessions; augments glutamatergic synaptic plasticity in the amygdala',
          pronunciation: 'D-SY-kloh-SAIR-een',
        },
        {
          term: 'Locus coeruleus',
          definition:
            'The brainstem nucleus that is the primary source of norepinephrine in the brain; hyperactive in PTSD, driving hyperarousal, hypervigilance, and enhanced fear memory consolidation',
          pronunciation: 'LOH-kus seh-ROO-lee-us',
        },
        {
          term: 'Cortico-striato-thalamo-cortical circuit',
          definition:
            'The neural loop (OFC to caudate to thalamus back to OFC) that is dysfunctional in OCD, creating a self-reinforcing cycle of error detection signals and compulsive behavior',
          relatedTerms: ['CSTC circuit', 'Basal ganglia circuit'],
        },
        {
          term: 'GABA-A receptor',
          definition:
            'A ligand-gated chloride channel that mediates fast inhibitory neurotransmission; contains the benzodiazepine binding site; alpha-2/3 subunits mediate anxiolytic effects while alpha-1 mediates sedation',
        },
      ],
      clinicalNotes:
        'Neuroimaging in PTSD consistently shows amygdala hyperactivation, vmPFC hypoactivation, and reduced hippocampal volume. D-cycloserine augmentation of exposure therapy has shown benefit in some trials (social anxiety, OCD, specific phobias) but results are inconsistent; timing relative to exposure session appears critical. In OCD, deep brain stimulation of the ventral capsule/ventral striatum and anterior limb of the internal capsule is FDA-approved under a Humanitarian Device Exemption for refractory cases. Gamma knife capsulotomy remains an option for the most treatment-resistant OCD.',
    },

    4: {
      level: 4,
      summary:
        'Advanced understanding encompasses memory reconsolidation as a therapeutic target, neuroimmune contributions to PTSD (microglial priming, neuroinflammation), the role of the endocannabinoid system in fear extinction, interoceptive models of panic, and computational models of anxiety as aberrant predictive processing.',
      explanation: `## Advanced Mechanisms and Translational Research

### Memory Reconsolidation: A Therapeutic Window

**Reconsolidation** is the process by which retrieved memories become transiently labile and must be restabilized:

1. A stored memory is **reactivated** by a reminder cue
2. The memory enters a **labile state** requiring protein synthesis for restabilization
3. During this window (~6 hours), the memory trace can be **modified or disrupted**
4. Pharmacological agents (propranolol, anisomycin) or behavioral interventions during reconsolidation can permanently weaken the emotional component of a fear memory

**Clinical applications**:
- **Propranolol + reactivation**: Administering propranolol during memory reactivation reduces the emotional intensity of traumatic memories (Brunet et al.)
- Unlike extinction (new competing memory), reconsolidation may actually **modify the original trace**
- Boundary conditions: Reconsolidation is triggered only when there is a **prediction error** (something unexpected during retrieval); fully expected retrievals do not destabilize the memory
- MDMA-assisted therapy may work partly by facilitating reconsolidation in a state of reduced amygdala reactivity and enhanced prefrontal engagement

### Neuroimmune Mechanisms in PTSD

**Microglial priming**:
- Traumatic stress activates microglia, the brain's resident immune cells
- Primed microglia show an exaggerated inflammatory response to subsequent stressors
- Elevated IL-6, TNF-alpha, and CRP are found in PTSD patients
- Microglial activation is particularly prominent in the hippocampus and PFC

**Stress-induced sterile inflammation**:
- Trauma activates the NLRP3 inflammasome via DAMPs (damage-associated molecular patterns)
- IL-1beta and IL-18 release further activates the HPA axis and sympathetic nervous system
- This creates a positive feedback loop: stress causes inflammation, inflammation increases stress sensitivity

**Accelerated biological aging**:
- PTSD is associated with shortened telomere length and accelerated epigenetic aging (DNA methylation clocks)
- GrimAge and PhenoAge acceleration correlate with PTSD severity
- May explain increased cardiovascular, metabolic, and neurodegenerative disease in PTSD

### The Endocannabinoid System in Fear and Anxiety

The **endocannabinoid system (ECS)** plays a critical role in fear extinction and stress adaptation:

- **CB1 receptors** on GABAergic and glutamatergic terminals in the amygdala, PFC, and hippocampus modulate neurotransmitter release
- **Anandamide (AEA)** and **2-AG** are the primary endocannabinoids
- CB1 signaling in the BLA is **required** for fear extinction (CB1 knockout mice show impaired extinction)
- Stress and PTSD are associated with reduced endocannabinoid tone (low AEA levels)
- **FAAH inhibitors** (fatty acid amide hydrolase inhibitors) increase anandamide levels and enhance fear extinction
- Exogenous cannabinoids (CBD, THC) modulate anxiety in a dose-dependent manner:
  - Low-dose THC/CBD: Anxiolytic via CB1 and 5-HT1A agonism
  - High-dose THC: Anxiogenic
  - CBD: Partial agonist at 5-HT1A, negative allosteric modulator at CB1, enhances anandamide signaling by inhibiting FAAH

### Interoceptive Models of Panic Disorder

Panic disorder may arise from **aberrant interoception** -- misprocessing of internal body signals:

- The **insular cortex** is the primary interoceptive cortex; hyperactivation to visceral signals in panic disorder
- Patients with panic disorder show heightened sensitivity to CO2 inhalation, sodium lactate infusion, and cholecystokinin-4 (CCK-4) -- all provoke panic attacks in vulnerable individuals
- **Suffocation false alarm theory** (Donald Klein): Panic attacks represent a hypersensitive brainstem CO2/pH chemoreceptor triggering a suffocation alarm
- **Interoceptive conditioning**: Internal sensations (rapid heartbeat, dizziness) become conditioned stimuli for panic attacks (explaining why panic attacks seem to come "out of nowhere")
- **Interoceptive exposure** in CBT directly targets this by deliberately inducing feared sensations (hyperventilation, spinning, breathing through a straw)

### Computational Psychiatry Models of Anxiety

**Predictive processing framework**:
- The brain is a prediction machine that constantly generates models of expected sensory input
- Anxiety disorders reflect **biased priors** -- overestimation of threat probability and magnitude
- **Prediction error signaling** is aberrant: neutral stimuli generate excessive "surprise" signals
- The amygdala functions as a precision-weighting mechanism for threat-related prediction errors

**Reinforcement learning models**:
- Anxiety involves excessive Pavlovian bias: habitual avoidance responses override goal-directed behavior
- Impaired safety learning reflects reduced updating of threat predictions in response to disconfirming evidence
- Computational parameters (learning rate, decay rate, uncertainty estimation) can be estimated from behavioral tasks and correlate with clinical severity and treatment response

**Bayesian models of OCD**:
- OCD may reflect excessive uncertainty weighting -- the brain is never "confident enough" that a threat has been neutralized
- High precision on prediction errors leads to chronic hypothesis testing (checking behaviors)
- Computational modeling of decision-making under uncertainty reveals distinct profiles in OCD vs. GAD

### Advanced Pharmacology

**Glutamate system**:
- **Riluzole** (glutamate release inhibitor): Augmentation for treatment-resistant OCD and GAD
- **Memantine** (NMDA antagonist): Augmentation for OCD
- **N-acetylcysteine (NAC)**: Modulates glutamate via cystine-glutamate antiporter; evidence in OCD, trichotillomania

**Novel GABA-A subunit-selective agents**:
- Alpha-2/3 selective PAMs are under development for anxiolysis without sedation, tolerance, or dependence
- Neurosteroids (zuranolone) modulate extrasynaptic GABA-A receptors (delta subunit) involved in tonic inhibition

**Neuropeptide targets**:
- **CRH receptor antagonists**: Targeting the stress response upstream
- **Neuropeptide Y (NPY) agonists**: NPY is anxiolytic; low NPY predicts PTSD vulnerability (combat studies)
- **Oxytocin**: Enhances social safety signaling; mixed evidence for social anxiety
- **Orexin/hypocretin antagonists**: May address hyperarousal in PTSD`,
      keyTerms: [
        {
          term: 'Memory reconsolidation',
          definition:
            'The process by which retrieved memories become transiently labile and require protein synthesis for restabilization; provides a therapeutic window to modify or weaken traumatic fear memories',
        },
        {
          term: 'Endocannabinoid system',
          definition:
            'The signaling system comprising CB1/CB2 receptors, endocannabinoids (anandamide, 2-AG), and their metabolic enzymes; essential for fear extinction and stress adaptation; endocannabinoid tone is reduced in PTSD',
          relatedTerms: ['CB1 receptor', 'Anandamide', '2-AG', 'FAAH'],
        },
        {
          term: 'Interoception',
          definition:
            'The perception of internal body signals; aberrant interoceptive processing in the insular cortex underlies the "false alarm" model of panic disorder',
          pronunciation: 'IN-ter-oh-SEP-shun',
        },
        {
          term: 'Predictive processing',
          definition:
            'A computational framework positing that anxiety disorders reflect biased priors (overestimating threat) and aberrant precision-weighting of prediction errors, leading to excessive "surprise" responses to neutral stimuli',
        },
        {
          term: 'NLRP3 inflammasome',
          definition:
            'A multiprotein complex that activates inflammatory cascades (IL-1beta, IL-18) in response to stress-induced DAMPs; a key link between trauma exposure and neuroinflammation in PTSD',
          pronunciation: 'N-L-R-P-three in-FLAM-ah-some',
        },
        {
          term: 'Microglial priming',
          definition:
            'A state in which trauma-activated microglia become sensitized to produce exaggerated inflammatory responses to subsequent stressors, perpetuating neuroinflammation in PTSD',
        },
      ],
      clinicalNotes:
        'Reconsolidation-based interventions are still primarily experimental; the therapeutic window requires careful timing (reactivation must precede intervention by minutes, not hours). Endocannabinoid-based therapies face regulatory hurdles; medical cannabis for PTSD has limited high-quality RCT evidence despite widespread clinical use. The computational psychiatry approach is generating clinically useful biomarkers -- computational parameters from behavioral tasks predict treatment response to CBT vs. pharmacotherapy. NAC (1200-2400 mg/day) has a favorable safety profile and emerging evidence for OCD and related disorders.',
    },

    5: {
      level: 5,
      summary:
        'Frontier approaches include MDMA-assisted therapy for PTSD (Phase III data), closed-loop neuromodulation, psychedelic-enhanced extinction, transdiagnostic dimensional models (RDoC), optogenetic mapping of fear circuits, and CRISPR-based gene editing of epigenetic marks in stress-response genes.',
      explanation: `## Frontier Research in Anxiety Disorders

### MDMA-Assisted Therapy for PTSD

MDMA (3,4-methylenedioxymethamphetamine) has been studied as a catalyst for trauma-focused psychotherapy:

**Pharmacology relevant to PTSD**:
- Releases serotonin, norepinephrine, and dopamine via reversal of their respective transporters
- Releases **oxytocin** and **prolactin**, enhancing social bonding and trust
- **Reduces amygdala reactivity** to threat stimuli (fMRI evidence)
- **Increases vmPFC-amygdala connectivity**, enhancing top-down fear regulation
- Increases **BDNF** and may facilitate memory reconsolidation
- Produces a state of reduced defensive responding while maintaining emotional engagement -- ideal for trauma processing

**Clinical evidence (MAPS trials)**:
- Phase III MAPP1 trial (2021): 67% of PTSD patients no longer met diagnostic criteria at 2 months (vs. 32% placebo + therapy)
- Phase III MAPP2 trial (2023): Replicated findings with 71.2% clinically meaningful improvement
- FDA advisory committee review (2024) raised concerns about trial methodology (functional unblinding, expectancy effects)
- If approved, would be first psychedelic-assisted therapy with FDA approval
- Protocol: 3 MDMA-assisted therapy sessions (8 hours each) with preparation and integration sessions

**Mechanism debate**:
- Memory reconsolidation facilitation (reduced amygdala fear response during retrieval)
- Enhanced fear extinction (increased vmPFC engagement)
- Social-emotional processing (oxytocin-mediated safety signaling)
- Increased psychological flexibility and self-compassion
- Likely a combination of all mechanisms operating synergistically

### Closed-Loop Neuromodulation

**Adaptive deep brain stimulation (aDBS)**:
- Traditional DBS delivers constant stimulation; aDBS adjusts in real-time based on neural biomarkers
- Local field potentials (LFPs) from implanted electrodes detect pathological oscillatory states
- Stimulation is delivered only when aberrant activity is detected
- For PTSD/anxiety: Targeting the amygdala or BNST with closed-loop feedback from theta/gamma oscillations
- First-in-human trials for mood disorders at UCSF (Scangos et al., 2021) showed personalized, biomarker-driven stimulation of the ventral capsule produced rapid mood improvement

**Transcranial focused ultrasound (tFUS)**:
- Non-invasive neuromodulation with millimeter-level spatial precision
- Can target deep structures (amygdala, insula) that TMS cannot reach
- Early studies show amygdala-targeted tFUS reduces threat-related amygdala reactivity
- Potential for non-invasive, precise modulation of fear circuits

**Real-time fMRI neurofeedback**:
- Patients learn to volitionally modulate activity in target brain regions
- Amygdala downregulation training shows promise for PTSD and anxiety
- PFC upregulation training enhances cognitive control over emotional responses
- Challenges: Cost, accessibility, and individual differences in neurofeedback aptitude

### Psychedelic-Enhanced Fear Extinction

**Psilocybin for anxiety**:
- NYU and Johns Hopkins trials for existential anxiety in terminal illness showed dramatic, lasting reductions in anxiety and depression
- Mechanism: 5-HT2A-mediated disruption of rigid, threat-focused cognitive patterns; enhanced cognitive flexibility
- May reset the "precision weighting" of threat predictions

**Psilocybin + exposure therapy**:
- Theoretical rationale: Psilocybin enhances neuroplasticity, potentially creating an optimal window for fear extinction learning
- Preclinical data: Psilocybin enhances fear extinction in rodents
- Clinical trials underway combining psilocybin with structured exposure therapy for specific phobias and PTSD

**LSD microdosing**:
- Sub-perceptual doses (10-20 mcg) may reduce amygdala reactivity without hallucinogenic effects
- Limited controlled evidence; several RCTs underway
- Safety and efficacy remain to be established

### Transdiagnostic Dimensional Models: RDoC

The **Research Domain Criteria (RDoC)** framework moves beyond categorical DSM diagnoses to dimensional constructs:

**Relevant RDoC domains for anxiety**:
- **Negative Valence Systems**: Acute threat (fear), potential threat (anxiety), loss, frustrative nonreward
- **Positive Valence Systems**: Reward learning, reward valuation (affected in comorbid depression)
- **Cognitive Systems**: Attention, cognitive control, working memory (biased toward threat in anxiety)
- **Social Processes**: Affiliation, attachment, social communication (disrupted in social anxiety, PTSD)
- **Arousal/Regulatory Systems**: Arousal, circadian rhythms, sleep-wakefulness (disrupted in PTSD, GAD)

**Clinical implications**:
- Allows targeting specific dysfunctional dimensions rather than categorical diagnoses
- May explain why the same treatments (SSRIs, CBT) work across multiple "disorders"
- Biomarker-guided treatment: Match patient's dimensional profile to optimal intervention
- Network analysis of symptoms reveals individual-specific maintaining mechanisms

### Optogenetic and Chemogenetic Dissection of Fear Circuits

Preclinical tools providing unprecedented circuit-level understanding:

- **Optogenetics**: Light-sensitive ion channels (channelrhodopsin, halorhodopsin) inserted into specific neuron populations allow millisecond-precision activation or silencing
- Key findings:
  - Activation of BLA glutamatergic projections to CeA is sufficient to produce freezing behavior
  - Silencing BLA-to-CeA projections blocks fear expression
  - Activation of PFC-to-BLA projections reduces conditioned fear (modeling extinction)
  - Different CeA outputs mediate different defensive behaviors (freezing vs. flight)
  - Distinct BLA neuronal ensembles encode fear and extinction memories (they are interleaved, not anatomically segregated)

### Epigenetic Therapies and Gene Editing

**CRISPR-based approaches** (preclinical):
- CRISPR-dCas9 (catalytically dead Cas9) fused to epigenetic modifiers can alter gene expression without changing DNA sequence
- Targeting the FKBP5 locus: Reversing stress-induced demethylation to restore normal glucocorticoid sensitivity
- Targeting NR3C1 (glucocorticoid receptor): Restoring expression silenced by early-life adversity

**HDAC inhibitors**:
- Enhance histone acetylation at fear extinction gene promoters
- Vorinostat and other HDAC inhibitors enhance extinction in animal models
- May be combined with exposure therapy to boost extinction learning

**miRNA-based therapeutics**:
- Antisense oligonucleotides targeting specific miRNAs that regulate fear-related gene expression
- miR-153 targets SNAP-25 and affects synaptic vesicle release in amygdala circuits`,
      keyTerms: [
        {
          term: 'MDMA-assisted therapy',
          definition:
            'A therapeutic approach combining MDMA administration with structured psychotherapy for PTSD; Phase III trials showed 67-71% clinically meaningful improvement; reduces amygdala reactivity while enhancing vmPFC engagement and oxytocin release',
          pronunciation: 'M-D-M-A',
        },
        {
          term: 'Closed-loop neuromodulation',
          definition:
            'Adaptive neurostimulation systems that detect pathological neural activity in real-time and deliver targeted stimulation only when needed; includes adaptive DBS, transcranial focused ultrasound, and fMRI neurofeedback',
        },
        {
          term: 'Transcranial focused ultrasound',
          definition:
            'A non-invasive neuromodulation technique with millimeter-precision targeting of deep brain structures (amygdala, insula) that are inaccessible to TMS',
          relatedTerms: ['tFUS', 'Low-intensity focused ultrasound'],
        },
        {
          term: 'RDoC',
          definition:
            'Research Domain Criteria -- an NIMH framework that replaces categorical psychiatric diagnoses with dimensional constructs (negative valence, positive valence, cognitive, social, arousal systems) spanning genetics to behavior',
        },
        {
          term: 'Optogenetics',
          definition:
            'A technique using light-sensitive ion channels in genetically targeted neurons to achieve millisecond-precision activation or silencing of specific neural circuits; has revealed that distinct amygdala ensembles encode fear and extinction memories',
        },
        {
          term: 'Epigenetic therapy',
          definition:
            'Therapeutic approaches targeting epigenetic modifications (DNA methylation, histone acetylation) to reverse stress-induced gene expression changes; HDAC inhibitors enhance fear extinction in preclinical models',
        },
      ],
      clinicalNotes:
        'MDMA-assisted therapy is not yet FDA-approved as of early 2025; the 2024 advisory committee vote was against approval, citing methodological concerns. If approved, it would require specialized training and a supervised clinical setting. Closed-loop DBS is in early clinical trials; the Scangos et al. (2021) case report demonstrated personalized, biomarker-driven stimulation with rapid effects. Transcranial focused ultrasound for psychiatric indications is in Phase I/II trials. Pharmacogenomic testing (CYP2D6, CYP2C19) should be considered in anxiety patients with multiple SSRI failures or unexpected side effects. RDoC-informed approaches are reshaping clinical trial design but are not yet standard in clinical practice.',
    },
  },

  media: [],
  citations: [
    {
      id: 'stahl-anxiety',
      type: 'textbook',
      title: 'Stahl\'s Essential Psychopharmacology',
      authors: ['Stephen M. Stahl'],
      source: 'Cambridge University Press',
      chapter: 'Chapters 9-12',
      license: 'Proprietary',
    },
    {
      id: 'dsm5-tr-anxiety',
      type: 'textbook',
      title: 'Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision (DSM-5-TR)',
      authors: ['American Psychiatric Association'],
      source: 'American Psychiatric Publishing',
      license: 'Proprietary',
    },
    {
      id: 'milad-quirk-2012',
      type: 'article',
      title: 'Fear Extinction as a Model for Translational Neuroscience',
      authors: ['Mohammed R. Milad', 'Gregory J. Quirk'],
      source: 'Annual Review of Psychology',
      url: 'https://doi.org/10.1146/annurev.psych.121208.131631',
    },
    {
      id: 'maps-mapp1',
      type: 'article',
      title: 'MDMA-assisted therapy for severe PTSD: a randomized, double-blind, placebo-controlled phase 3 study',
      authors: ['Jennifer M. Mitchell et al.'],
      source: 'Nature Medicine',
      url: 'https://doi.org/10.1038/s41591-021-01336-3',
    },
  ],
  crossReferences: [
    {
      targetId: 'psychiatry-mood-disorders',
      targetType: 'condition',
      relationship: 'related',
      label: 'Mood Disorders (high comorbidity with anxiety)',
    },
    {
      targetId: 'psychiatry-psychotic-disorders',
      targetType: 'condition',
      relationship: 'related',
      label: 'Psychotic Disorders (anxiety as prodromal symptom)',
    },
    {
      targetId: 'physiology-neurotransmission',
      targetType: 'process',
      relationship: 'related',
      label: 'Neurotransmission (GABA, glutamate, serotonin pathways)',
    },
  ],
  tags: {
    systems: ['nervous', 'endocrine', 'immune'],
    topics: ['psychiatry', 'psychopharmacology', 'neuroscience', 'behavioral science'],
    keywords: [
      'anxiety',
      'GAD',
      'panic disorder',
      'social anxiety',
      'PTSD',
      'OCD',
      'fear conditioning',
      'fear extinction',
      'amygdala',
      'prefrontal cortex',
      'GABA',
      'benzodiazepine',
      'SSRI',
      'CBT',
      'exposure therapy',
      'MDMA',
      'endocannabinoid',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['psychiatry', 'medicine'],
    },
  },

  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
  contributors: ['SOMA Medical Education Team'],
};
