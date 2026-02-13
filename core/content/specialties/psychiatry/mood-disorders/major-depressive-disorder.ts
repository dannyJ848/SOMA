/**
 * Major Depressive Disorder (MDD)
 *
 * Comprehensive educational content on clinical depression,
 * its neurobiology, diagnosis, and treatment.
 */

import { EducationalContent } from '../../../types';

export const majorDepressiveDisorderContent: EducationalContent = {
  id: 'psychiatry-major-depressive-disorder',
  type: 'condition',
  name: 'Major Depressive Disorder',
  alternateNames: ['Clinical Depression', 'MDD', 'Unipolar Depression'],

  levels: {
    1: {
      level: 1,
      summary: 'Depression is a medical condition that affects how you feel, think, and handle daily activities, causing persistent sadness and loss of interest in things you used to enjoy.',
      explanation: `Depression is more than just feeling sad sometimes. It's a real medical condition that affects your brain and body, making it hard to feel happy or interested in things.

**What Depression Feels Like:**

- Feeling sad, empty, or hopeless most of the time
- Not enjoying things that used to be fun
- Feeling very tired, even after sleeping
- Trouble sleeping or sleeping too much
- Changes in appetite (eating too much or too little)
- Feeling worthless or guilty for no clear reason
- Trouble concentrating or making decisions
- Thoughts about death or hurting yourself

**Important Things to Know:**

- Depression is NOT your fault
- Depression is NOT a sign of weakness
- Depression is NOT something you can just "snap out of"
- Depression IS a medical condition, like diabetes or asthma
- Depression IS very treatable

**What Causes Depression:**

Depression happens when certain chemicals in your brain (called neurotransmitters) get out of balance. This can happen because of:
- Genes you inherit from your family
- Stressful life events
- Medical conditions
- Sometimes, no obvious reason at all

**Getting Help:**

If you or someone you know might have depression, it's important to talk to a doctor. Depression can be treated with:
- Talking to a therapist (counseling)
- Medication that helps balance brain chemicals
- Exercise and healthy habits
- Support from family and friends

With treatment, most people with depression feel much better!`,
      keyTerms: [
        { term: 'depression', definition: 'A medical condition that causes ongoing feelings of sadness and loss of interest' },
        { term: 'neurotransmitter', definition: 'Chemical messengers in the brain that affect mood' },
        { term: 'therapy', definition: 'Talking with a trained professional to help with mental health' },
      ],
      analogies: [
        'Depression is like having a heavy weight on you all the time that makes everything harder.',
        'Just like you would see a doctor for a broken bone, you should see a doctor for depression - both need treatment to heal.',
        'Brain chemicals in depression are like a recipe with the wrong amount of ingredients - medication helps get the balance right.',
      ],
      examples: [
        'A person with depression might stop enjoying their favorite hobby, like playing video games or spending time with friends.',
        'Someone with depression might sleep 12 hours but still feel exhausted.',
        'A student with depression might struggle to concentrate in class even though they used to do well.',
      ],
    },
    2: {
      level: 2,
      summary: 'Major Depressive Disorder is a mood disorder characterized by persistent depressed mood or loss of interest, along with symptoms like sleep and appetite changes, fatigue, and difficulty concentrating, lasting at least two weeks.',
      explanation: `Major Depressive Disorder (MDD) is one of the most common mental health conditions, affecting about 7% of adults each year.

**Core Symptoms (at least one required):**
- Depressed mood most of the day, nearly every day
- Markedly diminished interest or pleasure (anhedonia)

**Additional Symptoms:**
- Sleep changes (insomnia or hypersomnia)
- Appetite/weight changes
- Fatigue or loss of energy
- Psychomotor agitation or retardation
- Feelings of worthlessness or excessive guilt
- Difficulty concentrating or indecisiveness
- Recurrent thoughts of death or suicidal ideation

**Diagnosis requires:**
- At least 5 symptoms for 2+ weeks
- Symptoms cause significant distress or impairment
- Not due to substance use or medical condition

**Types of Depression:**
- Single episode vs. recurrent
- With anxious distress
- With melancholic features (worse in morning, early awakening)
- With atypical features (increased sleep/appetite, mood reactivity)
- With seasonal pattern (Seasonal Affective Disorder)
- Postpartum depression

**Causes - The Biopsychosocial Model:**

*Biological:*
- Neurotransmitter imbalances (serotonin, norepinephrine, dopamine)
- Genetic factors (40% heritability)
- HPA axis dysregulation
- Inflammation

*Psychological:*
- Negative thinking patterns
- Low self-esteem
- Perfectionism
- History of trauma

*Social:*
- Stressful life events
- Lack of social support
- Relationship problems
- Financial stress

**Treatment Options:**
- Psychotherapy (CBT, IPT)
- Antidepressant medications (SSRIs, SNRIs)
- Combination therapy (most effective)
- Exercise
- Light therapy (for seasonal depression)
- ECT (for severe cases)`,
      keyTerms: [
        { term: 'anhedonia', definition: 'Loss of interest or pleasure in activities that were once enjoyed', pronunciation: 'an-heh-DOH-nee-ah' },
        { term: 'psychomotor retardation', definition: 'Slowing of movement and thinking' },
        { term: 'HPA axis', definition: 'Hypothalamic-pituitary-adrenal axis, the stress response system' },
        { term: 'CBT', definition: 'Cognitive Behavioral Therapy, a type of talk therapy that addresses negative thought patterns' },
      ],
      analogies: [
        'The HPA axis in depression is like a thermostat stuck in the "on" position, constantly releasing stress hormones.',
      ],
    },
    3: {
      level: 3,
      summary: 'MDD involves dysfunction in monoaminergic neurotransmitter systems, HPA axis dysregulation, and altered neural circuitry, with diagnosis based on DSM-5 criteria and treatment typically combining pharmacotherapy and psychotherapy.',
      explanation: `**DSM-5 Diagnostic Criteria:**

A. Five or more symptoms during the same 2-week period (must include criterion 1 or 2):
1. Depressed mood (subjective or observed)
2. Anhedonia
3. Weight/appetite change (>5% in one month)
4. Insomnia or hypersomnia
5. Psychomotor agitation or retardation (observable)
6. Fatigue or loss of energy
7. Worthlessness or excessive guilt
8. Diminished concentration or indecisiveness
9. Recurrent thoughts of death, suicidal ideation, or attempt

B. Significant functional impairment
C. Not attributable to substance or medical condition
D. Not better explained by psychotic disorder
E. No history of manic/hypomanic episode

**Severity Specifiers:**
- Mild: Few symptoms beyond minimum, minor impairment
- Moderate: Intermediate
- Severe: Most symptoms, marked impairment

**Neurobiological Mechanisms:**

*Monoamine Hypothesis:*
- Reduced serotonergic, noradrenergic, and dopaminergic transmission
- Evidence: Antidepressants increase monoamine availability
- Limitations: Delayed therapeutic effect suggests downstream mechanisms

*Neuroplasticity Hypothesis:*
- Reduced BDNF in hippocampus
- Hippocampal atrophy
- Prefrontal cortex volume reduction
- Antidepressants restore neuroplasticity

*HPA Axis Dysfunction:*
- Elevated cortisol
- Non-suppression on dexamethasone suppression test
- CRH hypersecretion
- Glucocorticoid receptor resistance

*Inflammation:*
- Elevated IL-6, TNF-alpha, CRP
- Sickness behavior model
- Anti-inflammatory effects of some antidepressants

**Neural Circuitry:**
- Prefrontal cortex: Reduced activity and volume
- Amygdala: Hyperactivity
- Hippocampus: Volume reduction, neurogenesis impairment
- Default Mode Network: Hyperconnectivity (rumination)
- Reward circuit: Hypoactivity (anhedonia)

**Pharmacological Treatment:**
- First-line: SSRIs, SNRIs, bupropion, mirtazapine
- Onset: 2-4 weeks for initial response, 6-12 weeks for full effect
- Treatment duration: 6-12 months after remission (first episode)
- Augmentation strategies: Add lithium, atypical antipsychotic, or second antidepressant

**Psychotherapy:**
- CBT: Addresses cognitive distortions
- Interpersonal Therapy (IPT): Focuses on relationships
- Behavioral Activation: Increases rewarding activities
- MBCT: Prevents relapse through mindfulness`,
      keyTerms: [
        { term: 'BDNF', definition: 'Brain-derived neurotrophic factor, a protein supporting neuron survival and growth' },
        { term: 'Default Mode Network', definition: 'Brain network active during self-referential thinking, hyperactive in depression' },
        { term: 'remission', definition: 'Resolution of depressive symptoms' },
        { term: 'treatment-resistant depression', definition: 'Depression that has not responded to at least two adequate antidepressant trials' },
      ],
    },
    4: {
      level: 4,
      summary: 'MDD pathophysiology involves complex interactions between genetic vulnerability, monoamine and glutamatergic dysfunction, HPA axis dysregulation, neuroinflammation, and impaired neuroplasticity, with treatment targeting multiple systems.',
      explanation: `**Genetic Factors:**
- Heritability: ~40%
- Polygenic: hundreds of small-effect variants
- Key genes: SLC6A4 (serotonin transporter), BDNF, FKBP5
- Gene-environment interactions (5-HTTLPR x stress)
- GWAS findings: OLFM4, NEGR1, VRK2, TCAF2

**Neurotransmitter Systems:**

*Serotonergic:*
- Reduced 5-HT synthesis (tryptophan depletion studies)
- Altered 5-HT1A autoreceptor function
- 5-HT transporter polymorphisms
- Target of SSRIs

*Noradrenergic:*
- Locus coeruleus changes
- Reduced NE availability
- Target of SNRIs, TCAs

*Dopaminergic:*
- Mesolimbic hypofunction (anhedonia)
- VTA-NAc circuit dysfunction
- Target of bupropion

*Glutamatergic:*
- Elevated glutamate in some brain regions
- NMDA receptor dysfunction
- Target of ketamine/esketamine
- Rapid synaptogenesis via AMPA activation

*GABAergic:*
- Reduced GABA in cortex (MRS studies)
- Altered GABA-A receptor function
- Target of neurosteroid therapies (brexanolone)

**HPA Axis:**
- Elevated CRH in CSF
- Adrenal hypertrophy
- Cortisol hypersecretion
- Impaired negative feedback
- Glucocorticoid receptor dysfunction
- FKBP5 variants affect stress sensitivity

**Neuroinflammation:**
- Elevated peripheral cytokines (IL-6, TNF-alpha, IL-1beta)
- Microglial activation
- Kynurenine pathway activation
  - Tryptophan → Kynurenine → Quinolinic acid (neurotoxic)
  - Reduced serotonin synthesis
- Blood-brain barrier permeability changes

**Structural Neuroimaging:**
- Hippocampal volume reduction (meta-analyses confirm)
- Prefrontal cortex thinning
- Amygdala volume changes (inconsistent findings)
- White matter hyperintensities (vascular depression)

**Functional Neuroimaging:**
- Subgenual anterior cingulate hyperactivity
- DLPFC hypoactivity
- Amygdala hyperreactivity to negative stimuli
- DMN hyperconnectivity (rumination)
- Reduced reward-related striatal activity

**Treatment Algorithms:**

*Step 1:* SSRI or SNRI or bupropion
*Step 2:* Switch or augment
*Step 3:* TCA or MAOI or combination
*Step 4:* ECT or TMS or esketamine

**Novel Treatments:**
- Esketamine (Spravato): FDA-approved for TRD
- Psilocybin: Breakthrough therapy designation
- Brexanolone: GABA modulator for postpartum depression
- SAINT protocol: Accelerated TMS`,
      keyTerms: [
        { term: 'FKBP5', definition: 'Gene affecting glucocorticoid receptor sensitivity, linked to stress vulnerability' },
        { term: 'kynurenine pathway', definition: 'Tryptophan metabolic pathway affected by inflammation, reducing serotonin' },
        { term: 'subgenual anterior cingulate', definition: 'Brain region consistently hyperactive in depression, target of DBS' },
        { term: 'SAINT protocol', definition: 'Stanford Accelerated Intelligent Neuromodulation Therapy, intensive TMS protocol' },
      ],
      clinicalNotes: 'Treatment resistance is common - only ~30% achieve remission with first medication. Measurement-based care using scales like PHQ-9 improves outcomes. Consider medical causes (thyroid, anemia, sleep apnea). Suicide risk assessment is essential. ECT remains most effective treatment for severe depression.',
    },
    5: {
      level: 5,
      summary: 'Contemporary understanding of MDD integrates network neuroscience, precision medicine approaches, and novel treatment modalities including glutamatergic agents and neuromodulation, moving toward mechanism-based classification and personalized treatment selection.',
      explanation: `**Network Neuroscience of Depression:**

*Triple Network Model:*
- Default Mode Network (DMN): Hyperconnectivity, rumination
- Salience Network: Impaired switching
- Central Executive Network: Hypoconnectivity

*Connectivity Patterns:*
- Increased DMN-CEN connectivity predicts poor treatment response
- Subgenual ACC connectivity patterns distinguish responders
- Resting-state fMRI may predict treatment response

**Computational Psychiatry:**
- Reinforcement learning deficits
- Altered reward prediction errors
- Pessimistic learning bias
- Bayesian models of inference

**Biomarker Development:**

*Treatment Response Prediction:*
- EEG: Theta cordance, rostral ACC activity
- fMRI: Subgenual ACC activity
- Inflammatory markers: CRP predicts response to SSRIs vs. bupropion
- Pharmacogenomics: CYP2D6/2C19 for drug metabolism

*Diagnostic Biomarkers:*
- No validated blood-based biomarkers yet
- Multi-modal approaches combining imaging, EEG, blood markers
- Machine learning classification efforts

**Precision Psychiatry Approaches:**

*Stratification by Symptom Profile:*
- Anxious depression: Consider duloxetine, buspirone augmentation
- Atypical features: MAOIs historically superior
- Melancholic features: TCAs, ECT effective
- Anhedonia-predominant: Bupropion, augmentation with dopaminergic agents

*Inflammatory Subtype:*
- CRP >3 mg/L predicts better response to bupropion vs. escitalopram
- Anti-inflammatory augmentation under investigation

**Glutamatergic Mechanisms:**

*Ketamine/Esketamine:*
- NMDA antagonist
- Rapid onset (hours to days)
- Mechanism: AMPA activation → BDNF release → synaptogenesis
- mTOR signaling activation
- Requires clinic administration for esketamine
- Durability requires repeated dosing

*Novel Glutamatergic Targets:*
- Rapastinel (failed Phase III)
- AMPA modulators
- mGluR modulators

**Psychedelic-Assisted Therapy:**

*Psilocybin:*
- 5-HT2A agonist
- Breakthrough therapy designation for TRD
- Mechanism: Increased neuroplasticity, decreased DMN integrity, psychological insight
- Single or few doses with therapy
- Durability appears months

*Other Psychedelics:*
- Ayahuasca studies
- LSD microdosing (limited data)
- DMT research ongoing

**Neuromodulation:**

*ECT:*
- Most effective treatment for severe depression
- Response rates 50-70%
- Mechanism: Neuroplasticity, BDNF increase, network reset
- Modern techniques minimize cognitive side effects

*TMS:*
- FDA-approved for TRD
- Standard: 10 Hz left DLPFC
- Newer protocols: Theta burst, bilateral, SAINT
- SAINT: 90% remission in open-label study

*Other Modalities:*
- DBS to subgenual ACC (investigational)
- Vagus nerve stimulation (FDA-approved)
- Focused ultrasound (investigational)
- Trigeminal nerve stimulation

**Emerging Targets:**

*Neurosteroids:*
- Brexanolone (IV allopregnanolone) for postpartum depression
- Zuranolone (oral) Phase III positive

*Opioid System:*
- ALKS-5461 (buprenorphine/samidorphan): Mixed results
- Kappa antagonists under investigation

*Circadian Targets:*
- Agomelatine (melatonin receptor agonist)
- Triple chronotherapy (sleep deprivation + light + sleep phase advance)

**Future Directions:**
- Closed-loop neuromodulation
- Digital phenotyping for early detection
- Microbiome interventions
- Combination biomarker panels
- Transdiagnostic treatment matching`,
      keyTerms: [
        { term: 'triple network model', definition: 'Framework of three brain networks (DMN, salience, executive) disrupted in depression' },
        { term: 'theta cordance', definition: 'EEG measure that may predict antidepressant response' },
        { term: 'SAINT protocol', definition: 'Stanford Accelerated Intelligent Neuromodulation Therapy, intensive TMS with 90% remission in studies' },
        { term: 'neurosteroid', definition: 'Steroid synthesized in brain, modulators of GABA receptors' },
      ],
      clinicalNotes: `Current clinical practice points:
- Measurement-based care (PHQ-9, GAD-7) improves outcomes
- First-line: SSRIs, SNRIs, bupropion based on profile
- Pharmacogenomic testing available but utility still emerging
- TMS available for TRD, insurance coverage improving
- Esketamine (Spravato) for TRD requires REMS program
- ECT remains most effective for severe/urgent cases
- Suicide risk assessment at every visit, especially with treatment changes
- Consider comorbidities: anxiety, substance use, personality disorders

The field is moving toward:
1. Biotype-based treatment selection
2. Earlier use of neuromodulation
3. Integration of digital tools
4. Rapid-acting treatments for acute suicidality`,
    },
  },

  media: [
    {
      id: 'mdd-neurobiology-diagram',
      type: 'diagram',
      filename: 'mdd_neurobiology.svg',
      title: 'Neurobiology of Depression',
      description: 'Diagram showing neurotransmitter systems, neural circuits, and HPA axis in depression',
    },
    {
      id: 'mdd-treatment-algorithm',
      type: 'diagram',
      filename: 'mdd_treatment_algorithm.svg',
      title: 'MDD Treatment Algorithm',
      description: 'Stepped approach to depression treatment',
    },
  ],

  citations: [
    {
      id: 'dsm-5',
      type: 'textbook',
      title: 'Diagnostic and Statistical Manual of Mental Disorders, 5th Edition',
      authors: ['American Psychiatric Association'],
      source: 'American Psychiatric Publishing',
      chapter: 'Depressive Disorders',
    },
    {
      id: 'stahl-depression',
      type: 'textbook',
      title: "Stahl's Essential Psychopharmacology",
      authors: ['Stahl SM'],
      source: 'Cambridge University Press',
      chapter: 'Mood Disorders',
    },
  ],

  crossReferences: [
    { targetId: 'psychiatry-brain-chemistry-mental-health', targetType: 'topic', relationship: 'related', label: 'Brain Chemistry and Mental Health' },
    { targetId: 'psychiatry-bipolar-disorder', targetType: 'condition', relationship: 'related', label: 'Bipolar Disorder' },
    { targetId: 'psychiatry-ssris', targetType: 'topic', relationship: 'see-also', label: 'SSRIs' },
    { targetId: 'psychiatry-snris', targetType: 'topic', relationship: 'see-also', label: 'SNRIs' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['psychiatry', 'mood disorders', 'pharmacology'],
    keywords: ['depression', 'MDD', 'antidepressants', 'serotonin', 'mood'],
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

export default majorDepressiveDisorderContent;
