/**
 * Selective Serotonin Reuptake Inhibitors (SSRIs)
 *
 * Comprehensive educational content on SSRIs,
 * their mechanism, uses, and clinical considerations.
 */

import { EducationalContent } from '../../../types';

export const ssrisContent: EducationalContent = {
  id: 'psychiatry-ssris',
  type: 'topic',
  name: 'Selective Serotonin Reuptake Inhibitors',
  alternateNames: ['SSRIs', 'Serotonin Reuptake Inhibitors'],

  levels: {
    1: {
      level: 1,
      summary: 'SSRIs are medications that help treat depression and anxiety by increasing the amount of serotonin available in the brain.',
      explanation: `SSRIs are one of the most commonly prescribed types of antidepressant medications.

**What They Treat:**
- Depression
- Anxiety disorders
- Panic disorder
- OCD (Obsessive-Compulsive Disorder)
- PTSD
- Some eating disorders

**How They Work:**
- Serotonin is a chemical messenger in the brain that affects mood
- SSRIs block serotonin from being reabsorbed, so more is available
- More serotonin helps improve mood and reduce anxiety

**Common SSRIs:**
- Fluoxetine (Prozac)
- Sertraline (Zoloft)
- Escitalopram (Lexapro)
- Paroxetine (Paxil)
- Citalopram (Celexa)

**What to Expect:**
- Takes 2-4 weeks to start working
- Full effect may take 6-8 weeks
- Usually taken once daily
- Should be taken consistently, not just when feeling bad

**Side Effects:**
- May cause nausea, headache at first
- Can affect sleep (insomnia or drowsiness)
- May affect sexual function
- Usually mild and often improve with time

**Important Safety:**
- Don't stop suddenly - taper with doctor's guidance
- Talk to doctor before taking with other medications
- In young people, watch for worsening mood (especially early on)`,
      keyTerms: [
        { term: 'serotonin', definition: 'A chemical messenger in the brain that helps regulate mood, sleep, and anxiety' },
        { term: 'reuptake', definition: 'The process where a nerve cell reabsorbs a chemical messenger after releasing it' },
        { term: 'antidepressant', definition: 'A medication used to treat depression and often anxiety disorders' },
      ],
      analogies: [
        'Serotonin is like a message being passed between brain cells. SSRIs keep the message in the conversation longer, so the brain gets more benefit from it.',
        'Taking an SSRI is like turning up the volume on a weak signal in your brain.',
      ],
      examples: [
        'Someone with depression might be prescribed sertraline 50mg daily and notice mood improvement after 3-4 weeks.',
        'A person with anxiety might take escitalopram every morning to help them feel calmer throughout the day.',
      ],
    },
    2: {
      level: 2,
      summary: 'SSRIs selectively inhibit serotonin reuptake, are first-line for depression and anxiety disorders, and have a generally favorable side effect profile compared to older antidepressants.',
      explanation: `**Mechanism:**
- Block serotonin transporter (SERT)
- Increase synaptic serotonin concentration
- Downstream effects on receptors and neuroplasticity explain delayed onset

**Available SSRIs:**

| Drug | Brand | Starting Dose | Usual Range |
|------|-------|---------------|-------------|
| Fluoxetine | Prozac | 10-20mg | 20-80mg |
| Sertraline | Zoloft | 25-50mg | 50-200mg |
| Paroxetine | Paxil | 10-20mg | 20-50mg |
| Citalopram | Celexa | 10-20mg | 20-40mg |
| Escitalopram | Lexapro | 5-10mg | 10-20mg |
| Fluvoxamine | Luvox | 50mg | 100-300mg |

**FDA-Approved Indications:**
- Major Depressive Disorder (all)
- Generalized Anxiety Disorder (escitalopram, paroxetine)
- Social Anxiety Disorder (paroxetine, sertraline)
- Panic Disorder (fluoxetine, paroxetine, sertraline)
- OCD (fluoxetine, sertraline, paroxetine, fluvoxamine)
- PTSD (sertraline, paroxetine)
- Premenstrual Dysphoric Disorder (fluoxetine, sertraline)
- Bulimia Nervosa (fluoxetine)

**Common Side Effects:**
- GI: Nausea, diarrhea (usually temporary)
- CNS: Headache, insomnia or somnolence
- Sexual: Decreased libido, delayed orgasm, erectile dysfunction
- Other: Sweating, weight changes

**Serious Concerns:**
- Serotonin syndrome (with other serotonergic drugs)
- Bleeding risk (platelet serotonin effect)
- Hyponatremia (especially in elderly)
- QTc prolongation (citalopram, escitalopram at high doses)
- Black box warning: Suicidality in youth (monitor closely)

**Discontinuation:**
- Taper slowly to avoid discontinuation syndrome
- Symptoms: Dizziness, "brain zaps," flu-like, irritability
- Paroxetine has highest risk (short half-life)
- Fluoxetine lowest risk (long half-life)

**Drug Interactions:**
- CYP450 inhibition varies by agent
- Avoid with MAOIs (serotonin syndrome risk)
- Caution with other serotonergic drugs`,
      keyTerms: [
        { term: 'SERT', definition: 'Serotonin transporter, the protein that SSRIs block' },
        { term: 'serotonin syndrome', definition: 'Dangerous condition from too much serotonin (agitation, tremor, hyperthermia)' },
        { term: 'discontinuation syndrome', definition: 'Symptoms that occur when stopping SSRIs too quickly' },
      ],
    },
    3: {
      level: 3,
      summary: 'SSRIs act by SERT inhibition with subsequent receptor adaptations and neuroplastic changes mediating therapeutic effects. Selection is guided by side effect profile, drug interactions, and comorbidities. Monitoring and gradual titration are essential.',
      explanation: `**Pharmacology:**

*Mechanism:*
- Highly selective SERT inhibition
- Increased synaptic 5-HT
- Acute: Autoreceptor (5-HT1A) activation limits release
- Chronic: Autoreceptor desensitization → full 5-HT enhancement
- Downstream: Receptor changes, BDNF increase, neuroplasticity

*Pharmacokinetics:*
- Well absorbed orally
- Highly protein-bound
- Hepatic metabolism (CYP450)
- Half-lives vary: Fluoxetine longest (~4-6 days active metabolite)

**CYP450 Interactions:**

| SSRI | CYP2D6 | CYP3A4 | CYP2C19 |
|------|--------|--------|---------|
| Fluoxetine | Strong | Moderate | - |
| Paroxetine | Strong | - | - |
| Sertraline | Mild | - | - |
| Citalopram | - | - | - |
| Escitalopram | - | - | - |
| Fluvoxamine | - | Strong | Moderate |

*Fluoxetine and paroxetine: Significant 2D6 inhibition*

**Clinical Use:**

*Depression:*
- First-line treatment
- 2-4 weeks for initial response
- 6-8 weeks for full effect
- Maintain 6-12 months after remission (first episode)
- Longer/lifelong for recurrent depression

*Anxiety Disorders:*
- Often first-line
- Start lower than depression doses
- May initially increase anxiety (transient)
- Full effect 4-8 weeks

*OCD:*
- Higher doses typically needed
- Fluoxetine 60-80mg, sertraline 150-200mg
- 8-12 weeks for response
- Often combine with ERP therapy

**Side Effect Management:**

*Sexual Dysfunction:*
- Most common reason for discontinuation
- Strategies: Wait, reduce dose, switch agents
- Bupropion has minimal sexual effects
- Sildenafil may help

*Weight:*
- Variable; paroxetine associated with weight gain
- Others: Neutral to mild weight change

*Bleeding:*
- Caution with NSAIDs, anticoagulants
- Platelet aggregation affected
- Consider PPI if GI bleeding risk

*Hyponatremia (SIADH):*
- Monitor sodium in elderly
- Risk factors: Age, diuretics, low baseline sodium

**Special Populations:**

*Pregnancy:*
- Paroxetine: Cardiac defects (avoid first trimester)
- Sertraline: Most data, often preferred
- Third trimester: Neonatal syndrome possible
- Balance risks of untreated depression

*Elderly:*
- Start low, go slow
- Citalopram max 20mg (QTc)
- Escitalopram max 10mg
- Monitor sodium

*Hepatic Impairment:*
- Reduce doses
- Caution with highly protein-bound agents`,
      keyTerms: [
        { term: '5-HT1A autoreceptor', definition: 'Presynaptic receptor that regulates serotonin release; desensitizes with chronic SSRI use' },
        { term: 'CYP2D6', definition: 'Liver enzyme metabolizing many drugs; strongly inhibited by fluoxetine, paroxetine' },
        { term: 'SIADH', definition: 'Syndrome of Inappropriate ADH; causes hyponatremia, can occur with SSRIs' },
      ],
    },
    4: {
      level: 4,
      summary: 'SSRI therapeutic effects involve complex adaptations beyond acute SERT blockade, including receptor downregulation, enhanced neuroplasticity, and neurogenesis. Individual differences in response relate to pharmacogenomics, and treatment selection considers efficacy equivalence alongside pharmacokinetic and tolerability differences.',
      explanation: `**Mechanism in Depth:**

*Acute Effects:*
- SERT occupancy >80% at therapeutic doses
- Increased synaptic 5-HT within hours
- BUT clinical effect takes weeks

*Adaptation Hypothesis:*
- 5-HT1A autoreceptor desensitization (days-weeks)
- Postsynaptic 5-HT receptor changes
- Increased BDNF expression
- Hippocampal neurogenesis
- Synaptic plasticity enhancement
- Gene expression changes

*Time Course:*
- PET studies: SERT occupancy immediate
- Clinical response: 2-4 weeks onset
- Full response: 6-8 weeks
- Continued improvement over months

**Receptor Pharmacology:**

*Selectivity:*
- True SSRIs: Highly selective for SERT vs. NET, DAT
- Some differences in receptor binding:
  - Paroxetine: Mild anticholinergic
  - Sertraline: Mild dopamine reuptake inhibition
  - Fluoxetine: 5-HT2C antagonism

*Clinical Implications:*
- Paroxetine: More sedating, more weight gain
- Fluoxetine: More activating
- Sertraline: Balanced profile

**Pharmacogenomics:**

*CYP2D6:*
- Poor metabolizers: Higher levels (paroxetine, fluoxetine)
- Ultrarapid metabolizers: Lower levels, may need higher doses
- Testing available but not routinely recommended

*CYP2C19:*
- Citalopram, escitalopram metabolism
- Poor metabolizers: Higher levels, QTc risk

*SERT Gene (SLC6A4):*
- 5-HTTLPR polymorphism studied
- Inconsistent results for response prediction
- Not clinically used

*Pharmacogenomic Testing:*
- Available (GeneSight, others)
- May help guide selection
- Not yet standard of care
- Limited evidence for improved outcomes

**Comparative Efficacy:**

*Meta-analyses (Cipriani et al., Lancet 2018):*
- Escitalopram, sertraline: Slightly more effective/tolerable
- All SSRIs effective vs. placebo
- Differences modest
- Individual response varies

*Choosing an SSRI:*
- Prior response (patient or family)
- Side effect profile
- Drug interactions
- Comorbidities
- Cost
- Pregnancy considerations

**Treatment Resistance:**

*Definition:*
- Failure of 2+ adequate antidepressant trials

*Strategies:*
- Optimize dose and duration
- Switch within or between classes
- Augmentation (atypical antipsychotic, lithium, thyroid)
- Add psychotherapy
- Consider TMS, esketamine, ECT

**Discontinuation Syndrome:**

*Mechanism:*
- Serotonin receptor adaptations
- Sudden removal of 5-HT enhancement
- Not the same as addiction/withdrawal

*Risk Factors:*
- Short half-life (paroxetine highest)
- Higher doses
- Longer duration
- Abrupt cessation

*Management:*
- Gradual taper (weeks to months)
- Fluoxetine bridging (for problematic tapers)
- Reinstate and taper more slowly if severe`,
      keyTerms: [
        { term: 'neurogenesis', definition: 'Formation of new neurons; occurs in hippocampus and may mediate antidepressant effects' },
        { term: 'BDNF', definition: 'Brain-derived neurotrophic factor; increased by antidepressants, supports neuroplasticity' },
        { term: '5-HTTLPR', definition: 'Serotonin transporter gene promoter polymorphism; studied but not clinically predictive' },
        { term: 'treatment resistance', definition: 'Failure to respond to 2+ adequate antidepressant trials' },
      ],
      clinicalNotes: 'Start low in anxiety. Full response takes 6-8 weeks. Watch for early worsening in youth. Sexual side effects common - discuss proactively. Taper when stopping (especially paroxetine). Check drug interactions. Avoid in first trimester (paroxetine). Monitor sodium in elderly.',
    },
    5: {
      level: 5,
      summary: 'Contemporary understanding of SSRI action involves network-level effects, inflammation modulation, and gut-brain axis interactions. Precision psychiatry approaches seek to predict response through biomarkers, while novel serotonergic agents attempt to improve efficacy and onset.',
      explanation: `**Beyond Monoamines:**

*Network Effects:*
- Default Mode Network normalization
- Amygdala-prefrontal connectivity changes
- Emotional processing modifications
- These changes correlate with clinical response

*Neuroplasticity:*
- BDNF-TrkB signaling cascade
- Synaptogenesis in prefrontal cortex
- Hippocampal neurogenesis
- Epigenetic modifications

*Inflammation:*
- SSRIs have anti-inflammatory effects
- Reduce IL-6, TNF-alpha, CRP
- May contribute to therapeutic action
- Baseline inflammation may predict response

*Gut-Brain Axis:*
- 5-HT produced in gut (~95%)
- Microbiome-serotonin interactions
- SSRIs affect gut microbiome
- Research emerging

**Precision Approaches:**

*Biomarker Research:*
- EEG markers (theta cordance, QEEG)
- fMRI predictors (rostral ACC activity)
- Inflammatory markers (CRP)
- Not yet clinically implemented

*Pharmacogenomics Status:*
- CYP testing available
- Utility debated
- Some insurers cover
- Guidelines inconsistent
- CPIC guidelines exist for specific drug-gene pairs

*Clinical Prediction:*
- Early symptom change (by week 2) predicts response
- Machine learning approaches in development
- Treatment matching algorithms emerging

**Novel Serotonergic Agents:**

*Vilazodone:*
- SSRI + 5-HT1A partial agonist
- May have faster onset
- May have less sexual side effects
- Nausea common

*Vortioxetine:*
- Multimodal: SERT inhibition + receptor modulation
- 5-HT1A agonist, 5-HT3 antagonist, 5-HT7 antagonist
- May improve cognitive symptoms
- Nausea dose-related

*Psychedelics:*
- Psilocybin (5-HT2A agonist) in trials
- Rapid, sustained antidepressant effects
- Different mechanism than SSRIs
- Neuroplasticity enhancement

**Augmentation Advances:**

*Atypical Antipsychotics:*
- Aripiprazole, brexpiprazole, quetiapine FDA-approved
- Effective but metabolic considerations

*Esketamine (Spravato):*
- FDA-approved for TRD
- Rapid onset
- Administered in clinic (REMS)
- May represent shift in treatment paradigm

*Novel Augmentation:*
- Anti-inflammatory agents (research)
- Nutraceuticals (omega-3, SAMe, methylfolate)
- Probiotics (research stage)

**Treatment Optimization:**

*Measurement-Based Care:*
- PHQ-9, GAD-7 at each visit
- Objective symptom tracking
- Faster time to remission
- Algorithm-guided adjustments

*Duration:*
- First episode: 6-12 months after remission
- Recurrent: 2 years or longer
- Multiple recurrences: Indefinite maintenance

*Sequencing:*
- Start with SSRI or SNRI
- Optimize before switching
- Consider augmentation after 2 failed trials
- TMS, esketamine, ECT for TRD

**Future Directions:**

1. Biomarker-guided treatment selection
2. Faster-acting agents
3. Precision dosing (pharmacogenomics)
4. Combination strategies from start
5. Prevention in high-risk individuals
6. Digital monitoring and intervention
7. Understanding treatment resistance
8. Novel targets beyond monoamines`,
      keyTerms: [
        { term: 'multimodal antidepressant', definition: 'Agent with multiple mechanisms beyond single transporter inhibition' },
        { term: 'measurement-based care', definition: 'Using standardized symptom scales to guide treatment decisions' },
        { term: 'CPIC', definition: 'Clinical Pharmacogenetics Implementation Consortium; provides drug-gene guidelines' },
        { term: 'TRD', definition: 'Treatment-resistant depression; failure of 2+ adequate antidepressant trials' },
      ],
      clinicalNotes: `Current practice:
- SSRIs remain first-line for depression/anxiety
- Escitalopram, sertraline often preferred
- Full response requires 6-8 weeks
- Measurement-based care improves outcomes
- Augmentation for partial response
- Taper when discontinuing

Emerging:
- Biomarker-guided selection (research)
- Pharmacogenomic testing (available, utility debated)
- Multimodal agents (vilazodone, vortioxetine)
- Rapid-acting options for TRD (esketamine)

Key points:
- All SSRIs roughly equivalent efficacy
- Individual differences in tolerability
- Drug interactions matter (CYP450)
- Sexual dysfunction requires proactive discussion
- Long-term treatment often needed`,
    },
  },

  media: [
    {
      id: 'ssri-mechanism-diagram',
      type: 'diagram',
      filename: 'ssri_mechanism.svg',
      title: 'SSRI Mechanism of Action',
      description: 'How SSRIs block serotonin reuptake at the synapse',
    },
  ],

  citations: [
    {
      id: 'stahl-ssris',
      type: 'textbook',
      title: "Stahl's Essential Psychopharmacology",
      authors: ['Stahl SM'],
      source: 'Cambridge University Press',
      chapter: 'Antidepressants',
    },
  ],

  crossReferences: [
    { targetId: 'psychiatry-snris', targetType: 'topic', relationship: 'related', label: 'SNRIs' },
    { targetId: 'psychiatry-major-depressive-disorder', targetType: 'condition', relationship: 'see-also', label: 'MDD' },
    { targetId: 'psychiatry-generalized-anxiety-disorder', targetType: 'condition', relationship: 'see-also', label: 'GAD' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['psychiatry', 'pharmacology', 'medications'],
    keywords: ['SSRI', 'antidepressant', 'serotonin', 'depression', 'anxiety'],
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

export default ssrisContent;
