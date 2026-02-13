/**
 * Mood Disorders - Depression & Bipolar Disorder
 *
 * Comprehensive coverage of major depressive disorder, bipolar I/II,
 * monoamine hypothesis, HPA axis dysregulation, neuroplasticity,
 * inflammatory hypothesis, gut-brain axis, pharmacogenomics,
 * and emerging treatments (ketamine, psychedelic-assisted therapy, neuromodulation).
 */

import { EducationalContent } from '../types';

export const moodDisorders: EducationalContent = {
  id: 'psychiatry-mood-disorders',
  type: 'condition',
  name: 'Mood Disorders',
  nameEs: 'Trastornos del Estado de Animo',
  alternateNames: [
    'Affective Disorders',
    'Depressive Disorders',
    'Bipolar Spectrum Disorders',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Sometimes a person\'s mood gets "stuck" -- either stuck feeling very sad for weeks or swinging between extreme highs and deep lows. These are called mood disorders.',
      explanation: `## When Your Mood Gets Stuck

Everyone has good days and bad days. But for some people, their mood gets stuck in a way that makes daily life very hard. These conditions are called **mood disorders**.

### Depression -- Stuck on Sad

Imagine your brain has a brightness dial. For most people, the dial moves up and down throughout the day. With **depression**, the dial gets stuck on very low for weeks or months at a time.

A person with depression might:
- Feel sad or empty most of the day, nearly every day
- Lose interest in things they used to enjoy (sports, friends, hobbies)
- Feel exhausted even when they have not done much
- Have trouble sleeping -- either too much or too little
- Feel worthless or overly guilty about small things
- Have trouble concentrating at school or work
- In serious cases, think about not wanting to be alive

Depression is **not** just feeling a little down after a bad day. It is a real medical condition caused by changes in brain chemistry, just like diabetes is caused by changes in how the body handles sugar.

### Bipolar Disorder -- The Mood Roller Coaster

With **bipolar disorder**, the mood dial does not just get stuck on low -- it swings wildly between extreme highs (called **mania**) and deep lows (depression).

During a **manic episode**, a person might:
- Feel incredibly energetic, like they could conquer the world
- Sleep very little but not feel tired
- Talk very fast and jump from idea to idea
- Make risky decisions (spending sprees, dangerous activities)
- Feel invincible or believe they have special powers

After the high, they often crash into a depressive episode.

### Why Does This Happen?

Your brain uses chemical messengers called **neurotransmitters** to control mood. Think of these messengers as mail carriers. In mood disorders, the mail system is not working right -- some letters get lost, some get delivered too many times, and the system becomes unreliable.

### Getting Help

The good news is that mood disorders are very treatable. Treatment usually includes:
- **Therapy**: Talking with a trained professional about thoughts and feelings
- **Medication**: Pills that help fix the brain's chemical messaging system
- **Lifestyle changes**: Exercise, good sleep habits, and social support

With the right treatment, most people with mood disorders can feel much better.`,
      keyTerms: [
        {
          term: 'Depression',
          definition:
            'A mood disorder where a person feels very sad or empty for weeks or months, affecting their ability to function in daily life',
          pronunciation: 'deh-PRESS-shun',
        },
        {
          term: 'Bipolar disorder',
          definition:
            'A mood disorder where a person swings between extreme highs (mania) and deep lows (depression)',
          pronunciation: 'by-POH-lar dis-OR-der',
        },
        {
          term: 'Mania',
          definition:
            'A period of abnormally elevated mood, energy, and activity that lasts at least a week',
          pronunciation: 'MAY-nee-ah',
        },
        {
          term: 'Neurotransmitter',
          definition:
            'A chemical messenger in the brain that helps nerve cells communicate with each other',
          pronunciation: 'NOOR-oh-TRANS-mit-er',
        },
      ],
      analogies: [
        'Depression is like the brain\'s brightness dial getting stuck on the lowest setting.',
        'Bipolar disorder is like a mood roller coaster that goes from extreme highs to extreme lows without the person being able to control it.',
        'Neurotransmitters are like mail carriers in the brain -- mood disorders happen when the mail system stops working correctly.',
      ],
      patientCounselingPoints: [
        'Depression is a real medical condition, not a personal weakness or character flaw.',
        'Mood disorders are very treatable with therapy, medication, and lifestyle changes.',
        'If you or someone you know is struggling, talking to a doctor or counselor is an important first step.',
        'Recovery takes time -- it is normal for treatment to take several weeks to start working.',
      ],
    },

    2: {
      level: 2,
      summary:
        'Major depressive disorder and bipolar disorder are defined by specific DSM-5 criteria. They involve dysregulation of monoamine neurotransmitters (serotonin, norepinephrine, dopamine) and are treated with SSRIs, SNRIs, mood stabilizers, and psychotherapy.',
      explanation: `## Mood Disorders: DSM-5 Criteria & Basic Pharmacology

### Major Depressive Disorder (MDD)

The DSM-5 requires **5 or more** of the following symptoms present during the same 2-week period, with at least one being depressed mood or loss of interest (the mnemonic **SIG E CAPS** is helpful):

- **S**leep changes (insomnia or hypersomnia)
- **I**nterest loss (anhedonia)
- **G**uilt or worthlessness
- **E**nergy loss (fatigue)
- **C**oncentration difficulties
- **A**ppetite changes (weight loss or gain)
- **P**sychomotor agitation or retardation
- **S**uicidal ideation

The symptoms must cause **clinically significant distress** or impairment in social, occupational, or other important areas of functioning.

### Bipolar I vs Bipolar II

**Bipolar I Disorder**:
- At least one **manic episode** (elevated/irritable mood + increased energy for at least 7 days, or any duration if hospitalization is required)
- Manic episodes include: grandiosity, decreased need for sleep, pressured speech, flight of ideas, distractibility, increased goal-directed activity, risky behavior
- Mnemonic: **DIG FAST** (Distractibility, Indiscretion, Grandiosity, Flight of ideas, Activity increase, Sleep deficit, Talkativeness)

**Bipolar II Disorder**:
- At least one **hypomanic episode** (similar to mania but lasting only 4+ days, less severe, no psychotic features, does not require hospitalization)
- At least one **major depressive episode**
- Never had a full manic episode

### The Monoamine Hypothesis

The classic theory of depression proposes that it results from a **deficiency of monoamine neurotransmitters**, particularly:

- **Serotonin (5-HT)**: Regulates mood, sleep, appetite, and anxiety
- **Norepinephrine (NE)**: Controls alertness, energy, and attention
- **Dopamine (DA)**: Involved in motivation, pleasure, and reward

Evidence for this theory:
- Reserpine (depletes monoamines) causes depressive symptoms
- Antidepressants that increase monoamines improve depression
- However, this theory is oversimplified -- monoamine levels change quickly with medication, but clinical improvement takes weeks

### Medication Classes

**SSRIs (Selective Serotonin Reuptake Inhibitors)**:
- First-line treatment for depression and many anxiety disorders
- Examples: fluoxetine (Prozac), sertraline (Zoloft), escitalopram (Lexapro)
- Block the serotonin transporter (SERT), increasing serotonin in the synapse
- Side effects: GI upset, sexual dysfunction, initial anxiety, serotonin syndrome risk

**SNRIs (Serotonin-Norepinephrine Reuptake Inhibitors)**:
- Block both SERT and norepinephrine transporter (NET)
- Examples: venlafaxine (Effexor), duloxetine (Cymbalta)
- May help with pain conditions as well as depression
- Can raise blood pressure at higher doses

**Mood Stabilizers (for Bipolar Disorder)**:
- **Lithium**: Gold standard for bipolar I; requires blood level monitoring (0.6-1.2 mEq/L); narrow therapeutic window
- **Valproate (Depakote)**: Anticonvulsant also used as mood stabilizer; monitor liver function and levels
- **Lamotrigine (Lamictal)**: Especially effective for bipolar depression; must titrate slowly to avoid Stevens-Johnson syndrome
- **Carbamazepine**: Another anticonvulsant option

**Atypical Antipsychotics** (used as mood stabilizers):
- Quetiapine, olanzapine, aripiprazole, lurasidone
- Can be used for manic episodes, bipolar depression, or as adjuncts

### Psychotherapy

- **Cognitive Behavioral Therapy (CBT)**: Identifies and changes negative thought patterns
- **Interpersonal Therapy (IPT)**: Focuses on improving relationships and communication
- **Behavioral Activation**: Re-engages patients in rewarding activities
- Combined therapy + medication is often more effective than either alone`,
      keyTerms: [
        {
          term: 'Major Depressive Disorder',
          definition:
            'A clinical diagnosis requiring 5+ depressive symptoms for 2+ weeks, with functional impairment',
          pronunciation: 'MAY-jor deh-PRESS-iv dis-OR-der',
          relatedTerms: ['MDD', 'Clinical depression'],
        },
        {
          term: 'Anhedonia',
          definition:
            'Loss of interest or pleasure in activities that were previously enjoyable',
          pronunciation: 'an-hee-DOH-nee-ah',
          etymology: 'Greek: an- (without) + hedone (pleasure)',
        },
        {
          term: 'SSRI',
          definition:
            'Selective Serotonin Reuptake Inhibitor -- a class of antidepressants that increase serotonin availability by blocking its reuptake into the presynaptic neuron',
          relatedTerms: ['Fluoxetine', 'Sertraline', 'Escitalopram'],
        },
        {
          term: 'Hypomania',
          definition:
            'A milder form of mania lasting at least 4 days, without psychotic features or need for hospitalization; defines bipolar II disorder',
          pronunciation: 'HY-poh-MAY-nee-ah',
        },
        {
          term: 'Monoamine hypothesis',
          definition:
            'The theory that depression is caused by a deficiency of monoamine neurotransmitters (serotonin, norepinephrine, dopamine) in the brain',
        },
        {
          term: 'Lithium',
          definition:
            'The gold standard mood stabilizer for bipolar I disorder; requires blood level monitoring due to a narrow therapeutic window',
          pronunciation: 'LITH-ee-um',
        },
      ],
      clinicalNotes:
        'Screen for bipolar disorder before starting an antidepressant -- SSRIs/SNRIs given to an undiagnosed bipolar patient can trigger a manic episode. Always ask about history of manic or hypomanic symptoms. The PHQ-9 is a validated screening tool for depression severity. Suicidal ideation must be assessed at every visit.',
    },

    3: {
      level: 3,
      summary:
        'Mood disorders involve HPA axis dysregulation with cortisol excess, reduced BDNF and impaired neuroplasticity, disrupted serotonergic/noradrenergic/dopaminergic circuits, and progressive sensitization (kindling model). Lithium works through GSK-3beta inhibition and neuroprotection.',
      explanation: `## Neurobiological Mechanisms of Mood Disorders

### HPA Axis Dysregulation

The **hypothalamic-pituitary-adrenal (HPA) axis** is the body's central stress response system. In depression, this system becomes chronically overactive:

1. **Hypothalamus** releases excess **corticotropin-releasing hormone (CRH)**
2. **Anterior pituitary** releases excess **adrenocorticotropic hormone (ACTH)**
3. **Adrenal cortex** produces chronically elevated **cortisol**
4. Normal **negative feedback** (cortisol suppressing CRH and ACTH) is impaired

**Evidence**: ~50% of patients with severe depression show non-suppression on the **dexamethasone suppression test (DST)**, indicating impaired HPA feedback. Elevated CRH in cerebrospinal fluid is one of the most replicated findings in biological psychiatry.

**Consequences of chronic cortisol elevation**:
- Hippocampal neuronal damage and volume reduction
- Impaired neurogenesis in the dentate gyrus
- Prefrontal cortex dendritic remodeling
- Immune system dysregulation

### Neuroplasticity and BDNF

**Brain-Derived Neurotrophic Factor (BDNF)** is a critical protein for neuronal survival, growth, and synaptic plasticity.

The **neurotrophic hypothesis of depression** proposes:
- Stress and cortisol **decrease BDNF** expression, particularly in the hippocampus and prefrontal cortex
- Reduced BDNF leads to **neuronal atrophy**, decreased dendritic branching, and impaired synaptic connections
- Antidepressants **increase BDNF** over weeks (matching the clinical time course of improvement)
- This explains the **therapeutic lag** -- it takes time for neurotrophic effects to restore synaptic architecture

**Supporting evidence**:
- Postmortem studies show reduced BDNF in hippocampus and PFC of depressed patients
- Serum BDNF levels are reduced in depression and normalize with treatment
- Direct BDNF infusion into the hippocampus produces antidepressant-like effects in animal models
- The BDNF Val66Met polymorphism affects susceptibility to stress-induced depression

### Monoamine Pathways in Detail

**Serotonin (5-HT) Pathways**:
- Cell bodies originate in the **raphe nuclei** (brainstem)
- Project widely to cortex, limbic system, hypothalamus, and spinal cord
- At least 14 receptor subtypes (5-HT1A, 5-HT1B, 5-HT2A, 5-HT2C, 5-HT3, etc.)
- 5-HT1A autoreceptors initially limit the effect of SSRIs (desensitize over 2-3 weeks, contributing to therapeutic lag)

**Norepinephrine (NE) Pathways**:
- Cell bodies in the **locus coeruleus** (brainstem)
- Project to cortex, limbic structures, cerebellum, and spinal cord
- Alpha-1, alpha-2, beta-1, beta-2 receptor subtypes
- Alpha-2 autoreceptors regulate NE release (mirtazapine blocks these, increasing NE release)

**Dopamine (DA) Pathways**:
- **Mesolimbic pathway**: Ventral tegmental area (VTA) to nucleus accumbens -- involved in reward and motivation; hypoactive in depression (anhedonia)
- **Mesocortical pathway**: VTA to prefrontal cortex -- involved in cognition and executive function
- **Nigrostriatal pathway**: Substantia nigra to striatum -- motor function
- **Tuberoinfundibular pathway**: Hypothalamus to pituitary -- prolactin regulation
- Bupropion (Wellbutrin) is a norepinephrine-dopamine reuptake inhibitor (NDRI) that addresses dopaminergic deficits

### The Kindling Model of Bipolar Disorder

The **kindling model** (Robert Post) proposes that bipolar disorder becomes progressively more autonomous:

1. **Early episodes** are often triggered by clear psychosocial stressors
2. With each episode, the brain becomes **sensitized** -- less stress is needed to trigger the next episode
3. Eventually, episodes become **spontaneous** (no identifiable trigger)
4. Episode frequency may **accelerate** over time without treatment (rapid cycling)

This model supports:
- **Early intervention** in bipolar disorder
- **Continuous prophylactic treatment** rather than episodic treatment
- The use of mood stabilizers as **neuroprotective** agents

### Lithium: Mechanisms of Action

Lithium has multiple mechanisms:

1. **Inhibition of GSK-3beta** (glycogen synthase kinase-3 beta):
   - GSK-3beta is constitutively active and promotes apoptosis
   - Lithium inhibits GSK-3beta, promoting neuronal survival
   - This also increases beta-catenin signaling (Wnt pathway) and promotes neurogenesis

2. **Inositol depletion hypothesis**:
   - Lithium inhibits **inositol monophosphatase (IMPase)**
   - Depletes free inositol, reducing excessive phosphatidylinositol (PI) signaling
   - Dampens overactive intracellular signaling cascades in hyperexcitable neurons

3. **Neuroprotective effects**:
   - Increases BDNF expression
   - Increases Bcl-2 (anti-apoptotic protein)
   - Increases hippocampal and cortical gray matter volume on MRI
   - Reduces glutamate excitotoxicity

4. **Circadian rhythm stabilization**:
   - Inhibits GSK-3beta which phosphorylates clock proteins
   - Lengthens circadian period, stabilizing disrupted sleep-wake cycles`,
      keyTerms: [
        {
          term: 'HPA axis',
          definition:
            'The hypothalamic-pituitary-adrenal axis -- the neuroendocrine stress response system that becomes chronically overactive in depression, leading to elevated cortisol and impaired negative feedback',
          pronunciation: 'H-P-A AX-is',
        },
        {
          term: 'BDNF',
          definition:
            'Brain-Derived Neurotrophic Factor -- a protein essential for neuronal survival, dendritic growth, and synaptic plasticity; reduced in depression and increased by antidepressant treatment',
          pronunciation: 'B-D-N-F',
        },
        {
          term: 'Neuroplasticity',
          definition:
            'The brain\'s ability to reorganize itself by forming new neural connections; impaired in depression due to reduced neurotrophic support',
          pronunciation: 'NOOR-oh-plas-TIS-ih-tee',
        },
        {
          term: 'Kindling model',
          definition:
            'The theory that repeated mood episodes progressively sensitize the brain, making future episodes easier to trigger and eventually spontaneous',
        },
        {
          term: 'GSK-3beta',
          definition:
            'Glycogen synthase kinase-3 beta -- a constitutively active kinase that promotes apoptosis; inhibited by lithium, which contributes to its neuroprotective and mood-stabilizing effects',
          pronunciation: 'G-S-K three BAY-tah',
        },
        {
          term: 'Raphe nuclei',
          definition:
            'Brainstem nuclei containing serotonergic cell bodies that project widely throughout the brain; the origin of the serotonin system',
          pronunciation: 'RAH-fay NOO-clee-eye',
        },
        {
          term: 'Locus coeruleus',
          definition:
            'A brainstem nucleus containing noradrenergic cell bodies that is the primary source of norepinephrine in the brain',
          pronunciation: 'LOH-kus seh-ROO-lee-us',
        },
      ],
      clinicalNotes:
        'Hippocampal volume reduction is measurable on MRI in patients with recurrent depression and correlates with duration of untreated illness. Lithium is the only mood stabilizer with robust evidence for anti-suicidal effects. Monitor lithium levels, renal function (creatinine, GFR), thyroid function (TSH -- lithium causes hypothyroidism in ~20%), and calcium. Therapeutic range is 0.6-1.2 mEq/L; levels >1.5 are toxic (tremor, ataxia, renal failure, seizures). Valproate is teratogenic (neural tube defects) and must be avoided in pregnancy.',
    },

    4: {
      level: 4,
      summary:
        'Advanced understanding includes the inflammatory hypothesis of depression (elevated IL-6, TNF-alpha, CRP), gut-brain axis via the vagus nerve and microbial metabolites, epigenetic mechanisms (histone modification, DNA methylation), treatment-resistant depression algorithms, and the rapid-acting antidepressant mechanism of ketamine/esketamine via NMDA antagonism, AMPA activation, mTOR signaling, and synaptogenesis.',
      explanation: `## Advanced Pathophysiology of Mood Disorders

### The Inflammatory Hypothesis of Depression

Emerging evidence links depression to **systemic inflammation** and **neuroinflammation**:

**Peripheral inflammatory markers elevated in MDD**:
- **IL-6** (interleukin-6): Meta-analyses consistently show elevation
- **TNF-alpha** (tumor necrosis factor-alpha): Elevated and correlates with symptom severity
- **CRP** (C-reactive protein): Elevated in ~30% of depressed patients
- **IL-1beta**: Elevated in both serum and CSF

**Mechanisms linking inflammation to depression**:
1. **Tryptophan-kynurenine pathway**: Pro-inflammatory cytokines activate **indoleamine 2,3-dioxygenase (IDO)**, shunting tryptophan away from serotonin synthesis toward kynurenine. Downstream metabolites (quinolinic acid) are NMDA receptor agonists and neurotoxic.
2. **Microglial activation**: Activated microglia release pro-inflammatory cytokines, reactive oxygen species, and quinolinic acid, creating a neuroinflammatory environment
3. **Blood-brain barrier disruption**: Peripheral cytokines cross a compromised BBB and activate central inflammatory cascades
4. **HPA axis activation**: Cytokines stimulate CRH release, linking inflammation to cortisol excess
5. **Reduced BDNF**: Inflammatory signaling decreases BDNF transcription via NF-kappaB pathways

**Clinical implications**:
- Patients with inflammatory conditions (rheumatoid arthritis, IBD, psoriasis) have higher rates of depression
- Interferon-alpha therapy causes depression in ~30% of patients
- Anti-inflammatory agents (celecoxib, minocycline, infliximab) show antidepressant effects in patients with elevated CRP
- CRP may serve as a biomarker to guide treatment selection (elevated CRP predicts better response to nortriptyline vs. escitalopram)

### The Gut-Brain Axis

The bidirectional communication between the gastrointestinal microbiome and the brain represents a paradigm shift in understanding mood disorders:

**Communication pathways**:
1. **Vagus nerve**: The primary neural highway; gut bacteria influence vagal afferents. Vagotomy reduces the antidepressant-like effects of certain probiotics in animal models.
2. **Microbial metabolites**: Short-chain fatty acids (SCFAs -- butyrate, propionate, acetate) produced by gut bacteria influence BBB integrity, microglial function, and neurotransmitter production.
3. **Immune system**: Gut microbiota shape systemic immune tone; dysbiosis increases intestinal permeability ("leaky gut"), allowing bacterial endotoxins (LPS) to enter circulation and trigger systemic inflammation.
4. **Tryptophan metabolism**: ~95% of serotonin is produced in the gut; gut bacteria directly influence tryptophan availability and metabolism.
5. **HPA axis**: Germ-free animals show exaggerated HPA responses; colonization with specific bacteria (Lactobacillus, Bifidobacterium) normalizes the stress response.

**Evidence in depression**:
- Depressed patients show altered gut microbiome composition (reduced Lactobacillus, Bifidobacterium; increased Eggerthella)
- Fecal microbiota transplant from depressed patients to germ-free mice induces depressive-like behavior
- Certain probiotic strains ("psychobiotics") show modest antidepressant effects in clinical trials

### Epigenetic Mechanisms

**Epigenetics** provides a molecular framework for understanding how environmental stressors (childhood adversity, chronic stress) create lasting biological changes without altering DNA sequence:

1. **DNA methylation**: Early life stress increases methylation of the **NR3C1 gene** (glucocorticoid receptor) promoter in the hippocampus, reducing GR expression and impairing HPA axis negative feedback. This finding has been replicated in postmortem studies of suicide victims with childhood abuse.

2. **Histone modification**: Stress decreases histone acetylation at the **BDNF promoter** in the hippocampus, silencing BDNF expression. **HDAC inhibitors** (histone deacetylase inhibitors) have antidepressant-like effects in animal models.

3. **microRNAs**: Altered miRNA expression profiles in depression affect translation of stress-response and neuroplasticity genes. miR-16 regulates SERT expression and is modulated by SSRIs.

4. **Transgenerational transmission**: Epigenetic marks from parental stress exposure can be transmitted to offspring, potentially explaining familial clustering beyond pure genetic inheritance.

### Treatment-Resistant Depression (TRD) Algorithms

**Definition**: Failure to achieve adequate response after 2+ adequate antidepressant trials (adequate dose, adequate duration of 6-8 weeks, confirmed adherence).

**Systematic approach** (following STAR*D and current guidelines):

1. **Re-evaluate diagnosis**: Rule out bipolar disorder, substance use, medical conditions (hypothyroidism, anemia, sleep apnea), medication effects
2. **Optimize current treatment**: Ensure adequate dose and duration; check adherence; consider pharmacogenomic testing
3. **Switch**: Within class (SSRI to SSRI) or between classes (SSRI to SNRI, bupropion, mirtazapine)
4. **Augmentation strategies**:
   - **Lithium augmentation**: Well-established; 0.4-0.8 mEq/L target for augmentation
   - **Thyroid hormone (T3)**: 25-50 mcg/day; effective even in euthyroid patients
   - **Atypical antipsychotics**: Aripiprazole, quetiapine, brexpiprazole (FDA-approved adjuncts)
   - **L-methylfolate**: 15 mg/day for patients with MTHFR polymorphisms
5. **Ketamine/esketamine** (see below)
6. **Neuromodulation**: TMS, ECT, VNS (see Level 5)
7. **Combination therapy**: Mirtazapine + SNRI ("California rocket fuel"), bupropion + SSRI

### Ketamine and Esketamine: Rapid-Acting Antidepressants

**Ketamine** produces antidepressant effects within **hours**, a paradigm shift from the weeks required by conventional antidepressants.

**Mechanism (glutamate surge hypothesis)**:
1. Ketamine is a non-competitive **NMDA receptor antagonist**
2. At subanesthetic doses, it preferentially blocks NMDA receptors on **GABAergic interneurons** (which have a higher tonic firing rate)
3. This **disinhibits glutamatergic pyramidal neurons**, producing a transient **glutamate surge**
4. Glutamate activates **AMPA receptors**, which are the primary mediators of the antidepressant effect
5. AMPA activation triggers **BDNF release** from neurons
6. BDNF activates **TrkB receptors**, stimulating the **mTOR (mechanistic target of rapamycin) pathway**
7. mTOR signaling promotes rapid **synaptogenesis** -- formation of new dendritic spines and synaptic connections in the prefrontal cortex
8. This rapidly restores synaptic connectivity that was lost due to chronic stress and depression

**Key evidence**:
- Rapamycin (mTOR inhibitor) blocks ketamine's antidepressant effects in animal models, confirming mTOR dependence
- Ketamine increases dendritic spine density in PFC within 24 hours in animal models
- AMPA receptor blockade prevents ketamine's antidepressant effect
- NBQX (AMPA antagonist) reverses ketamine's behavioral effects

**Esketamine (Spravato)**:
- The S-enantiomer of ketamine; FDA-approved (2019) as nasal spray for TRD and MDD with suicidal ideation
- Administered in a certified clinic with 2-hour monitoring (dissociation, sedation, blood pressure)
- Typically given twice weekly for 4 weeks, then weekly, then biweekly
- Must be used alongside an oral antidepressant
- REMS (Risk Evaluation and Mitigation Strategy) program required`,
      keyTerms: [
        {
          term: 'Inflammatory hypothesis',
          definition:
            'The theory that depression involves systemic and neuroinflammation, with elevated cytokines (IL-6, TNF-alpha, CRP) driving neurobiological changes including tryptophan diversion, microglial activation, and reduced BDNF',
        },
        {
          term: 'Kynurenine pathway',
          definition:
            'The metabolic pathway activated by IDO that diverts tryptophan away from serotonin synthesis toward neurotoxic metabolites (quinolinic acid); a key link between inflammation and depression',
          pronunciation: 'KIN-yoo-reh-neen',
        },
        {
          term: 'Gut-brain axis',
          definition:
            'The bidirectional communication system between the gastrointestinal microbiome and the central nervous system, mediated by the vagus nerve, microbial metabolites, the immune system, and tryptophan metabolism',
        },
        {
          term: 'Epigenetics',
          definition:
            'Heritable changes in gene expression that do not involve alterations to the DNA sequence; includes DNA methylation, histone modification, and microRNA regulation; provides a mechanism for environmental stressors to create lasting biological vulnerability to depression',
          pronunciation: 'EP-ih-jeh-NET-iks',
        },
        {
          term: 'Treatment-resistant depression',
          definition:
            'Major depressive disorder that fails to respond adequately to at least 2 antidepressant trials of adequate dose and duration; affects approximately 30% of MDD patients',
        },
        {
          term: 'NMDA receptor',
          definition:
            'N-methyl-D-aspartate receptor -- an ionotropic glutamate receptor central to synaptic plasticity; ketamine blocks this receptor, paradoxically increasing downstream glutamate signaling and synaptogenesis',
          pronunciation: 'N-M-D-A',
        },
        {
          term: 'mTOR pathway',
          definition:
            'The mechanistic target of rapamycin signaling cascade; activated by ketamine-induced AMPA/BDNF/TrkB signaling to rapidly promote synaptogenesis and restore synaptic connectivity in the prefrontal cortex',
          pronunciation: 'M-tor',
        },
        {
          term: 'Esketamine',
          definition:
            'The S-enantiomer of ketamine; FDA-approved nasal spray (Spravato) for treatment-resistant depression and MDD with suicidal ideation; administered under medical supervision with REMS requirements',
          pronunciation: 'es-KET-ah-meen',
        },
      ],
      clinicalNotes:
        'CRP levels may guide antidepressant selection: patients with CRP >1 mg/L may respond better to dual-action or anti-inflammatory-augmented strategies. The STAR*D trial showed that only ~30% of patients remit with first-line SSRI, and cumulative remission after 4 treatment steps is ~67%. Ketamine IV infusion (0.5 mg/kg over 40 minutes) produces rapid antidepressant effects but typically requires repeated dosing; serial infusions (2-3x/week for 2-4 weeks) are standard. Dissociative side effects peak at 40 minutes and resolve within 2 hours. Abuse potential exists and long-term safety data are limited. Esketamine REMS requires dispensing only in certified clinics.',
    },

    5: {
      level: 5,
      summary:
        'Cutting-edge approaches include psychedelic-assisted therapy (psilocybin targeting 5-HT2A receptors and default mode network disruption), neuromodulation (TMS, ECT, VNS, DBS), precision psychiatry via pharmacogenomics (CYP450 polymorphisms, serotonin transporter variants), and digital phenotyping for early detection and monitoring.',
      explanation: `## Frontier Research and Emerging Paradigms in Mood Disorders

### Psychedelic-Assisted Therapy

**Psilocybin** has emerged as a potentially transformative treatment for treatment-resistant depression.

**Pharmacology**:
- Psilocybin is a prodrug, dephosphorylated to **psilocin** by alkaline phosphatase
- Psilocin is a **5-HT2A receptor agonist** (also active at 5-HT2C, 5-HT1A)
- 5-HT2A agonism on layer V pyramidal neurons in the cortex is the primary mechanism
- Downstream: increased glutamate release, AMPA activation, BDNF release (convergent with ketamine's distal mechanism)

**Neuroimaging findings**:
- Psilocybin acutely **decreases activity in the default mode network (DMN)**, particularly the medial prefrontal cortex and posterior cingulate cortex
- The DMN is hyperactive in depression and is associated with rumination and self-referential processing
- Psilocybin increases **functional connectivity between normally segregated brain networks** (neuronal "entropy")
- Post-treatment, there is a sustained **increase in global brain connectivity** and decreased DMN-amygdala coupling
- The degree of subjective "mystical experience" correlates with therapeutic outcome

**Clinical evidence**:
- COMPASS Pathways Phase IIb trial (2022): Single 25mg psilocybin dose showed significant reduction in depression scores at 3 weeks in TRD
- Imperial College London trials: Psilocybin therapy showed comparable efficacy to 6 weeks of escitalopram for moderate-severe MDD
- Durability: Effects may last 3-12 months after 1-2 sessions
- FDA granted **Breakthrough Therapy designation** for psilocybin in TRD (2018) and MDD (2019)

**Therapeutic framework**:
- Not simply pharmacological; requires structured **preparation, dosing session (6-8 hours with trained therapists), and integration sessions**
- The "set and setting" are critical to outcomes
- MDMA-assisted therapy for PTSD (Phase III trials completed) follows a similar model

### Neuromodulation Therapies

**Transcranial Magnetic Stimulation (TMS)**:
- FDA-cleared for TRD (2008) and OCD
- Uses electromagnetic coil to deliver focused magnetic pulses to the **left dorsolateral prefrontal cortex (L-DLPFC)**
- Standard protocol: 3000 pulses/session, 5 sessions/week for 4-6 weeks
- **Stanford Neuromodulation Therapy (SNT/SAINT)**: Accelerated intermittent theta-burst stimulation (iTBS) protocol -- 10 sessions/day for 5 days; 79% remission rate in open-label trial
- fMRI-guided targeting of L-DLPFC (based on anticorrelation with subgenual anterior cingulate cortex) improves outcomes
- Mechanism: Enhances prefrontal cortical activity, normalizes frontolimbic connectivity, increases dopamine release in the caudate

**Electroconvulsive Therapy (ECT)**:
- Most effective treatment for severe, treatment-resistant depression (~50-70% response rate)
- Indicated for: severe TRD, psychotic depression, catatonia, acute suicidality, depression in pregnancy
- Modern technique: Brief pulse or ultra-brief pulse, right unilateral electrode placement (reduces cognitive side effects)
- Mechanism: Generalized seizure increases BDNF, enhances neuroplasticity, normalizes HPA axis, modulates neurotransmitter systems, anti-inflammatory effects
- Maintenance ECT (weekly to monthly) prevents relapse
- Primary limitation: Retrograde amnesia (minimized with ultra-brief pulse RUL)

**Vagus Nerve Stimulation (VNS)**:
- FDA-approved for chronic TRD (2005)
- Implanted pulse generator stimulates left vagus nerve
- Vagal afferents project to nucleus tractus solitarius, locus coeruleus, and raphe nuclei, modulating NE and 5-HT systems
- Slow onset (months), but long-term benefits may increase over 1-2 years
- ~30% response rate at 1 year, increasing to ~50% at 2 years

**Deep Brain Stimulation (DBS)** -- investigational:
- Targets: Subgenual cingulate cortex (Brodmann area 25), ventral capsule/ventral striatum, medial forebrain bundle
- Small open-label studies show promising results in highly refractory cases
- Area 25 is hyperactive in depression and normalizes with successful treatment

### Precision Psychiatry and Pharmacogenomics

Pharmacogenomics aims to match patients to optimal treatments based on genetic profiles:

**CYP450 metabolism**:
- **CYP2D6**: Metabolizes many SSRIs (fluoxetine, paroxetine), venlafaxine, and TCAs. Ultra-rapid metabolizers may need higher doses; poor metabolizers need lower doses or alternative agents.
- **CYP2C19**: Primary metabolizer of escitalopram, citalopram, sertraline. Poor metabolizers of CYP2C19 have 2x higher escitalopram levels; FDA label recommends max 10mg in poor metabolizers.
- **CYP2B6**: Metabolizes bupropion. Polymorphisms affect hydroxybupropion levels.

**Pharmacodynamic genes**:
- **SLC6A4 (serotonin transporter)**: The 5-HTTLPR polymorphism (short vs. long allele) may influence SSRI response, though replication has been inconsistent
- **HTR2A**: 5-HT2A receptor polymorphisms predict response to citalopram and psilocybin
- **FKBP5**: Regulates glucocorticoid receptor sensitivity; polymorphisms predict antidepressant response and PTSD risk
- **COMT**: Val158Met polymorphism affects prefrontal dopamine metabolism

**Clinical pharmacogenomic panels** (GeneSight, Genomind):
- FDA caution: Analytic validity is established, but clinical validity (predicting response) is still evolving
- GUIDED trial (2019): Pharmacogenomic-guided treatment improved response rates (26% vs. 20%) but not remission rates
- Most useful for: identifying drug-drug interactions, CYP450 poor/ultra-rapid metabolizers, and avoiding adverse effects
- CPIC (Clinical Pharmacogenetics Implementation Consortium) guidelines available for specific drug-gene pairs

### Digital Phenotyping and Computational Psychiatry

**Digital phenotyping** uses smartphone sensor data and usage patterns to detect and monitor mood episodes:
- **Passive data**: GPS patterns (reduced mobility in depression), accelerometer (psychomotor changes), call/text frequency (social withdrawal), sleep patterns (screen on/off times), typing speed, voice prosody
- **Active data**: Ecological momentary assessment (EMA) via prompted surveys
- Machine learning algorithms can detect mood state changes 1-2 weeks before clinical recognition
- Potential for early warning systems and just-in-time interventions

**Computational psychiatry**:
- Applies reinforcement learning models to understand anhedonia (reduced prediction error signaling in depression)
- Bayesian frameworks for understanding cognitive distortions (overweighting negative priors)
- Network theory of psychopathology: symptoms as causally interconnected nodes rather than reflections of a latent disease entity
- Neuroimaging-based biotypes: Drysdale et al. (2017) identified 4 depression biotypes based on functional connectivity patterns, each predicting differential response to TMS

### Emerging Molecular Targets

- **GABA system**: GABAergic deficits in depression; brexanolone (neurosteroid GABA-A modulator) FDA-approved for postpartum depression; zuranolone (oral neurosteroid) for MDD
- **Opioid system**: Kappa-opioid receptor antagonists (aticaprant/JNJ-67953964) for anhedonia and TRD
- **Glutamate modulators beyond ketamine**: Rapastinel (GLYX-13, NMDA receptor modulator), D-cycloserine augmentation of psychotherapy
- **Psychoplastogens**: Non-hallucinogenic 5-HT2A agonists (tabernanthalog) that promote neuroplasticity without psychedelic effects
- **Anti-inflammatory approaches**: Targeted anti-cytokine therapy (infliximab for high-CRP depression), JAK inhibitors, microglial modulators`,
      keyTerms: [
        {
          term: 'Psilocybin',
          definition:
            'A prodrug converted to psilocin (5-HT2A agonist) that disrupts the default mode network, increases global brain connectivity, and produces rapid, sustained antidepressant effects; FDA Breakthrough Therapy designation for TRD and MDD',
          pronunciation: 'SY-loh-SY-bin',
        },
        {
          term: 'Default mode network',
          definition:
            'A network of brain regions (medial PFC, posterior cingulate, angular gyrus) active during self-referential thought and rumination; hyperactive in depression and disrupted by psilocybin',
          relatedTerms: ['DMN', 'Self-referential processing', 'Rumination'],
        },
        {
          term: 'Transcranial magnetic stimulation',
          definition:
            'A non-invasive neuromodulation technique using electromagnetic pulses to stimulate the left DLPFC; FDA-cleared for TRD with accelerated protocols (SAINT) showing 79% remission rates',
          relatedTerms: ['TMS', 'rTMS', 'theta-burst stimulation'],
        },
        {
          term: 'Pharmacogenomics',
          definition:
            'The study of how genetic variation (especially CYP450 enzymes and pharmacodynamic gene polymorphisms) affects drug metabolism and response, enabling personalized medication selection in psychiatry',
          pronunciation: 'FAR-mah-koh-jeh-NOM-iks',
        },
        {
          term: 'Digital phenotyping',
          definition:
            'The quantification of behavioral and physiological patterns from smartphone sensor data (GPS, accelerometer, call patterns, sleep) for real-time detection and monitoring of mood episodes',
        },
        {
          term: 'Psychoplastogen',
          definition:
            'A compound that rapidly promotes structural and functional neural plasticity (synaptogenesis, dendritic growth); includes ketamine, psilocybin, and novel non-hallucinogenic analogs (tabernanthalog)',
          pronunciation: 'SY-koh-PLAS-toh-jen',
        },
        {
          term: 'Deep brain stimulation',
          definition:
            'An investigational neurosurgical treatment for refractory depression involving implanted electrodes targeting the subgenual cingulate cortex (Brodmann area 25) or medial forebrain bundle',
          relatedTerms: ['DBS', 'Brodmann area 25'],
        },
      ],
      clinicalNotes:
        'Psilocybin therapy requires extensive screening (contraindicated in psychotic disorders, family history of psychosis, uncontrolled hypertension). TMS is well-tolerated (headache, scalp discomfort) with seizure risk <0.1%; the SAINT protocol represents a potential paradigm shift with 5-day treatment course. ECT remains the most effective acute treatment for severe depression with suicidality -- do not delay referral. Pharmacogenomic testing is most clinically useful when patients have had multiple medication failures or unexpected adverse effects. CYP2D6 and CYP2C19 genotyping has the strongest evidence base. Digital phenotyping raises significant privacy and data security concerns that must be addressed before widespread clinical implementation.',
    },
  },

  media: [],
  citations: [
    {
      id: 'stahl-psychopharm',
      type: 'textbook',
      title: 'Stahl\'s Essential Psychopharmacology',
      authors: ['Stephen M. Stahl'],
      source: 'Cambridge University Press',
      chapter: 'Chapters 6-8',
      license: 'Proprietary',
    },
    {
      id: 'dsm5-tr',
      type: 'textbook',
      title: 'Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision (DSM-5-TR)',
      authors: ['American Psychiatric Association'],
      source: 'American Psychiatric Publishing',
      license: 'Proprietary',
    },
    {
      id: 'duman-2016',
      type: 'article',
      title: 'Synaptic Plasticity and Depression: New Insights from Stress and Rapid-Acting Antidepressants',
      authors: ['Ronald S. Duman', 'George K. Aghajanian'],
      source: 'Nature Medicine',
      url: 'https://doi.org/10.1038/nm.4050',
    },
  ],
  crossReferences: [
    {
      targetId: 'psychiatry-anxiety-disorders',
      targetType: 'condition',
      relationship: 'related',
      label: 'Anxiety Disorders (common comorbidity)',
    },
    {
      targetId: 'psychiatry-psychotic-disorders',
      targetType: 'condition',
      relationship: 'related',
      label: 'Psychotic Disorders (psychotic features in severe mood episodes)',
    },
    {
      targetId: 'physiology-neurotransmission',
      targetType: 'process',
      relationship: 'related',
      label: 'Neurotransmission (underlying neurochemistry)',
    },
  ],
  tags: {
    systems: ['nervous', 'endocrine', 'immune'],
    topics: ['psychiatry', 'psychopharmacology', 'neuroscience', 'pathology'],
    keywords: [
      'depression',
      'bipolar disorder',
      'mania',
      'SSRI',
      'SNRI',
      'lithium',
      'ketamine',
      'esketamine',
      'psilocybin',
      'TMS',
      'ECT',
      'neuroplasticity',
      'BDNF',
      'HPA axis',
      'inflammation',
      'gut-brain axis',
      'pharmacogenomics',
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
