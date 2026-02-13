/**
 * Psychiatric Medications - Patient Education Content
 *
 * Comprehensive education about psychiatric medications including
 * antidepressants, antipsychotics, mood stabilizers, and anxiolytics.
 */

import { EducationalContent } from '../../types';

export const psychiatricMedicationsContent: EducationalContent = {
  id: 'mental-health-psychiatric-medications',
  type: 'topic',
  name: 'Psychiatric Medications',
  alternateNames: ['Psychotropic Medications', 'Mental Health Medications', 'Psych Meds'],

  levels: {
    1: {
      level: 1,
      summary: 'Psychiatric medications help treat mental health conditions by affecting brain chemistry. They work best when combined with therapy and lifestyle changes.',
      explanation: `**What Are Psychiatric Medications?**

Psychiatric medications are medicines that help treat mental health conditions like depression, anxiety, bipolar disorder, and schizophrenia. They work by affecting chemicals in the brain called neurotransmitters.

**Main Types:**

**Antidepressants:**
- Help with depression and anxiety
- Take several weeks to work fully
- Common types: SSRIs (like Prozac, Zoloft, Lexapro)
- Do NOT cause addiction

**Anti-Anxiety Medications:**
- Help reduce anxiety quickly
- Some (benzodiazepines) are for short-term use only
- Others (buspirone) are for long-term use
- Antidepressants often used for long-term anxiety

**Mood Stabilizers:**
- Help with bipolar disorder
- Keep moods from going too high or too low
- Examples: lithium, valproate, lamotrigine

**Antipsychotics:**
- Help with schizophrenia and severe mood symptoms
- Reduce hallucinations and delusions
- Also used for bipolar disorder and severe depression
- Examples: risperidone, quetiapine, aripiprazole

**ADHD Medications:**
- Help with focus and impulse control
- Stimulants (Adderall, Ritalin) most common
- Non-stimulants available too

**Important Things to Know:**

- Tell your doctor about ALL medications you take
- Do not stop suddenly - work with your doctor
- Side effects often improve over time
- Finding the right medication takes time
- Medications work best with therapy

**Common Questions:**

*Will I need medication forever?*
It depends on your condition. Some people take medications long-term, others only for a period.

*Are they addictive?*
Most psychiatric medications are not addictive. Some (like benzodiazepines) require careful use.

*Can I drink alcohol?*
Ask your doctor - many medications should not be mixed with alcohol.`,
      keyTerms: [
        { term: 'antidepressant', definition: 'Medication that helps treat depression and often anxiety too' },
        { term: 'SSRI', definition: 'A common type of antidepressant that affects serotonin' },
        { term: 'mood stabilizer', definition: 'Medication that helps keep moods stable in bipolar disorder' },
        { term: 'neurotransmitter', definition: 'Chemical messenger in the brain that affects mood and behavior' },
      ],
      analogies: [
        'Psychiatric medications are like glasses for the brain - they help it work better.',
        'Finding the right medication is like finding the right key for a lock - it takes some trying.',
        'Antidepressants are like fertilizer for the brain - they help it grow healthier over time.',
      ],
      examples: [
        'Someone with depression might take an SSRI like sertraline, noticing improvement after 4-6 weeks.',
        'A person with bipolar disorder might take lithium to prevent mood swings.',
        'Someone with schizophrenia might take an antipsychotic to reduce hearing voices.',
      ],
    },
    2: {
      level: 2,
      summary: 'Psychiatric medications include antidepressants (SSRIs, SNRIs), antipsychotics (typical, atypical), mood stabilizers (lithium, anticonvulsants), and anxiolytics. Selection depends on diagnosis, side effects, and patient factors.',
      explanation: `**Understanding Psychiatric Medications:**

**Antidepressants:**

*SSRIs (Selective Serotonin Reuptake Inhibitors):*
- First-line for depression and anxiety
- Examples: fluoxetine (Prozac), sertraline (Zoloft), escitalopram (Lexapro)
- Side effects: GI upset, sexual dysfunction, initial anxiety
- Takes 4-6 weeks for full effect

*SNRIs (Serotonin-Norepinephrine Reuptake Inhibitors):*
- Examples: venlafaxine (Effexor), duloxetine (Cymbalta)
- May help with pain conditions too
- Side effects similar to SSRIs plus blood pressure concerns

*Other Antidepressants:*
- Bupropion: No sexual side effects, helps with energy, smoking cessation
- Mirtazapine: Helps with sleep, appetite, less sexual dysfunction
- Tricyclics: Older, more side effects, still used
- MAOIs: Dietary restrictions, used for treatment-resistant

**Antipsychotics:**

*Second-Generation (Atypical):*
- Examples: risperidone, olanzapine, quetiapine, aripiprazole
- Used for schizophrenia, bipolar, severe depression
- Side effects: Weight gain, metabolic effects, sedation

*First-Generation (Typical):*
- Examples: haloperidol, chlorpromazine
- More movement side effects (EPS)
- Still used in specific situations

**Mood Stabilizers:**

*Lithium:*
- Gold standard for bipolar disorder
- Reduces suicide risk
- Requires blood level monitoring
- Side effects: Tremor, thyroid effects, kidney concerns

*Anticonvulsants:*
- Valproate: For mania, requires monitoring
- Lamotrigine: For bipolar depression prevention
- Carbamazepine: Drug interactions concern

**Anxiolytics:**

*Benzodiazepines:*
- Examples: lorazepam, clonazepam, alprazolam
- Fast-acting for anxiety
- Risk: Dependence, withdrawal
- Short-term use recommended

*Non-Benzodiazepines:*
- Buspirone: No dependence, takes weeks to work
- Hydroxyzine: Antihistamine, sedating
- Beta-blockers: For performance anxiety

**ADHD Medications:**

*Stimulants:*
- Methylphenidate (Ritalin, Concerta)
- Amphetamines (Adderall, Vyvanse)
- Fast-acting, highly effective

*Non-Stimulants:*
- Atomoxetine
- Guanfacine, clonidine

**Important Considerations:**
- Start low, go slow
- Monitor for side effects
- Drug interactions matter
- Do not stop suddenly
- Pregnancy considerations`,
      keyTerms: [
        { term: 'SNRI', definition: 'Antidepressant that affects both serotonin and norepinephrine' },
        { term: 'atypical antipsychotic', definition: 'Newer antipsychotic with different side effect profile' },
        { term: 'benzodiazepine', definition: 'Fast-acting anti-anxiety medication with dependence risk' },
        { term: 'metabolic effects', definition: 'Weight gain, diabetes risk, and cholesterol changes' },
        { term: 'EPS', definition: 'Extrapyramidal symptoms - movement side effects from antipsychotics' },
      ],
      analogies: [
        'SSRIs keep serotonin in the synapse longer, like a dam holding back water.',
        'Mood stabilizers are like guardrails keeping mood on the road.',
      ],
    },
    3: {
      level: 3,
      summary: 'Psychiatric medications work through specific receptor mechanisms. SSRIs block SERT; antipsychotics block D2 receptors; lithium affects intracellular signaling. Selection involves balancing efficacy, side effects, interactions, and patient factors. Monitoring protocols vary by medication class.',
      explanation: `**Mechanisms of Action:**

**Antidepressants:**

*SSRIs:*
- Block serotonin transporter (SERT)
- Increase synaptic serotonin
- Downstream: Receptor downregulation, neuroplasticity
- Takes weeks: Not just serotonin reuptake

*SNRIs:*
- Block SERT and norepinephrine transporter (NET)
- Dose-dependent NE effects (venlafaxine)
- May help fatigue, concentration, pain

*Bupropion:*
- DA and NE reuptake inhibitor
- No serotonin effects
- Unique side effect profile

*Mirtazapine:*
- Alpha-2 antagonist
- 5-HT2A, 5-HT3 antagonist
- H1 antagonist (sedation, weight)

*Tricyclics:*
- Block SERT, NET variably
- Anticholinergic, antihistaminic
- Cardiac effects (QTc)
- Lethal in overdose

*MAOIs:*
- Inhibit monoamine oxidase A/B
- Dietary tyramine restriction
- Drug interactions (serotonin syndrome)
- Used for treatment-resistant, atypical depression

**Antipsychotics:**

*Mechanism:*
- D2 receptor antagonism (primary)
- 5-HT2A antagonism (atypicals)
- Multiple receptor effects

*Key Agents:*
- Risperidone: Potent D2, prolactin elevation
- Olanzapine: Broad receptor, metabolic effects
- Quetiapine: Lower D2 affinity, sedating
- Aripiprazole: D2 partial agonist
- Clozapine: Unique efficacy, agranulocytosis risk

*Side Effects:*
- Metabolic: Weight, glucose, lipids
- EPS: Dystonia, akathisia, parkinsonism
- Tardive dyskinesia: Late-onset
- Prolactin elevation: Some agents
- QTc prolongation: Varies

**Mood Stabilizers:**

*Lithium:*
- Inositol depletion
- GSK-3beta inhibition
- Neuroprotection
- Monitoring: Levels (0.6-1.2), renal, thyroid
- Toxicity: >1.5 mEq/L

*Valproate:*
- GABA enhancement
- Histone deacetylase inhibition
- Monitoring: Levels, LFTs, CBC
- Teratogenic (neural tube defects)

*Lamotrigine:*
- Sodium channel, glutamate
- Stevens-Johnson risk (slow titration)
- Good for bipolar depression

*Carbamazepine:*
- Sodium channel
- CYP450 inducer (interactions)
- HLA-B*15:02 screening (SJS)

**Benzodiazepines:**

*Mechanism:*
- GABA-A positive allosteric modulators
- Enhance GABA inhibition
- Fast onset, various half-lives

*Concerns:*
- Tolerance, dependence
- Withdrawal syndrome
- Cognitive effects
- Fall risk in elderly

**Prescribing Principles:**
- Start low, titrate slowly
- Adequate trial (4-8 weeks)
- Monitor response and side effects
- Consider interactions
- Discontinuation protocols`,
      keyTerms: [
        { term: 'SERT', definition: 'Serotonin transporter - target of SSRIs' },
        { term: 'D2 receptor', definition: 'Dopamine receptor - primary target of antipsychotics' },
        { term: 'GSK-3beta', definition: 'Enzyme inhibited by lithium, involved in neuroprotection' },
        { term: 'tardive dyskinesia', definition: 'Late-onset movement disorder from chronic antipsychotic use' },
        { term: 'serotonin syndrome', definition: 'Dangerous excess serotonin from drug combinations' },
      ],
      clinicalNotes: 'Always check for drug interactions. Monitor metabolic parameters with antipsychotics. Lithium requires level monitoring and renal/thyroid checks. Slow titration for lamotrigine to prevent SJS. Taper benzodiazepines gradually. Pregnancy category varies by medication.',
    },
    4: {
      level: 4,
      summary: 'Psychiatric medications affect multiple receptor systems and downstream signaling. Treatment selection incorporates pharmacogenomics, comorbidities, and patient preferences. Augmentation and combination strategies address partial response. Long-term management requires balancing efficacy, tolerability, and safety.',
      explanation: `**Advanced Pharmacology:**

**Antidepressant Mechanisms Beyond Reuptake:**

*Neuroplasticity Hypothesis:*
- BDNF upregulation
- Hippocampal neurogenesis
- Synaptic plasticity
- Explains delayed onset

*Receptor Adaptations:*
- 5-HT1A autoreceptor desensitization
- Postsynaptic receptor changes
- Downstream signaling cascades

*Inflammation:*
- Some patients have elevated inflammatory markers
- Antidepressants may have anti-inflammatory effects
- Potential biomarker for treatment selection

**Antipsychotic Pharmacology:**

*D2 Occupancy:*
- 65-80% occupancy: Therapeutic range
- >80%: EPS risk increases
- Threshold guides dosing

*Fast-Off D2 Hypothesis (Atypicals):*
- Faster dissociation from D2
- Lower sustained blockade
- May explain lower EPS

*Clozapine Uniqueness:*
- Low D2 affinity
- D4, 5-HT2A, muscarinic effects
- Uniquely effective in treatment-resistant
- May involve glutamate system

**Treatment Algorithms:**

*Depression:*
1. SSRI or SNRI (first-line)
2. Switch to different agent
3. Augmentation: Bupropion, aripiprazole, lithium, thyroid
4. TCA or MAOI
5. ECT, ketamine/esketamine

*Bipolar Mania:*
1. Lithium or valproate
2. Atypical antipsychotic
3. Combination

*Bipolar Depression:*
1. Quetiapine or lurasidone
2. Lamotrigine
3. Lithium
4. Caution with antidepressants

*Schizophrenia:*
1. Atypical antipsychotic
2. Switch agents
3. Clozapine (after 2 failures)

**Pharmacogenomics:**

*CYP450 Metabolism:*
- CYP2D6: Many antidepressants, antipsychotics
- CYP2C19: Escitalopram, sertraline
- Poor, intermediate, extensive, ultrarapid metabolizers
- Clinical utility emerging

*Pharmacodynamic Genes:*
- SLC6A4 (SERT): 5-HTTLPR
- HTR2A: Response prediction
- Limited clinical utility currently

**Special Populations:**

*Pregnancy:*
- Risk-benefit analysis
- SSRIs: Generally acceptable (PPHN, third trimester)
- Valproate: Contraindicated
- Lithium: Cardiac risk, often continued
- Antipsychotics: Metabolic, neonatal effects

*Elderly:*
- Start low, go slow
- Increased sensitivity
- Fall risk
- Drug interactions with medical medications
- Anticholinergic burden

*Pediatric:*
- FDA black box warning (suicidality monitoring)
- Fluoxetine most studied
- Close monitoring required

**Long-Term Considerations:**

*Maintenance Treatment:*
- Duration depends on condition, episode number
- Relapse prevention
- Side effect management

*Discontinuation:*
- Gradual taper
- SSRI discontinuation syndrome
- Relapse risk
- Monitoring plan`,
      keyTerms: [
        { term: 'BDNF', definition: 'Brain-derived neurotrophic factor - upregulated by antidepressants' },
        { term: 'CYP2D6', definition: 'Cytochrome P450 enzyme metabolizing many psychiatric medications' },
        { term: 'augmentation', definition: 'Adding a second medication to enhance response' },
        { term: 'treatment-resistant', definition: 'Failure to respond to adequate trials of standard treatments' },
        { term: 'discontinuation syndrome', definition: 'Symptoms occurring when stopping certain medications abruptly' },
      ],
      clinicalNotes: 'Pharmacogenomic testing may help with CYP450 metabolizer status. Consider augmentation before switching for partial responders. Clozapine underutilized in treatment-resistant schizophrenia. Long-acting injectable antipsychotics improve adherence. Address metabolic side effects proactively.',
    },
    5: {
      level: 5,
      summary: 'Contemporary psychopharmacology research explores novel mechanisms (glutamate, GABA, inflammation), precision medicine approaches, and rapid-acting agents. Digital tools aid monitoring and adherence. Integration of pharmacology with neuroscience informs mechanism-based treatment selection.',
      explanation: `**Novel Mechanisms:**

*Glutamate System:*
- Ketamine: NMDA antagonist, rapid antidepressant
- Esketamine (Spravato): FDA-approved for TRD
- Mechanism: AMPA activation, BDNF, synaptogenesis
- Challenge: Dissociation, abuse potential

*GABA System:*
- Neurosteroids: Brexanolone (postpartum), zuranolone
- GABA-A positive allosteric modulators
- Rapid onset
- Novel mechanism

*Psychedelics:*
- Psilocybin: 5-HT2A agonist, breakthrough designation for TRD
- MDMA: For PTSD (Phase 3 positive)
- Require therapeutic context
- May "reset" neural circuits

*Inflammation:*
- Anti-inflammatory augmentation
- Celecoxib, minocycline studies
- Subset with elevated CRP may respond
- Precision medicine target

**Precision Psychopharmacology:**

*Biomarker Development:*
- Inflammatory markers (CRP)
- EEG markers (theta cordance)
- fMRI patterns
- Not yet validated clinically

*Pharmacogenomics Integration:*
- CYP450 panel testing
- Clinical utility guidelines emerging
- FDA table of pharmacogenomic associations
- Combinatorial panels vs single genes

*Treatment Matching:*
- Clinical phenotypes
- Anxious vs non-anxious depression
- Atypical features
- Melancholic features
- Research ongoing

**Drug Development:**

*NMDA Modulators:*
- Beyond ketamine
- Glycine site modulators
- AMPA potentiators

*New Mechanisms:*
- Muscarinic agonists (KarXT for schizophrenia)
- TAAR1 agonists
- Kappa opioid antagonists
- Orexin antagonists (sleep/depression interface)

*Reformulations:*
- Long-acting injectables expansion
- Novel delivery systems
- Extended-release formulations

**Digital Integration:**

*Measurement-Based Care:*
- PHQ-9, GAD-7 regular monitoring
- Treatment adjustment based on scores
- Improves outcomes

*Digital Adjuncts:*
- Medication reminders
- Side effect tracking
- Mood monitoring apps
- Integration with EHR

*Pharmacovigilance:*
- Real-world safety data
- Post-marketing surveillance
- Big data approaches

**Deprescribing:**

*Principles:*
- Assess indication
- Reduce polypharmacy
- Taper gradually
- Monitor for discontinuation effects

*Challenges:*
- Withdrawal vs relapse
- Long-term antidepressant discontinuation
- Benzodiazepine tapers
- Patient anxiety about stopping

**Implementation Science:**

*Guidelines:*
- APA, CANMAT, NICE, BAP guidelines
- Algorithm-based care
- Evidence-practice gaps

*Collaborative Care:*
- Psychiatric consultation
- Primary care integration
- Care managers
- Measurement-based

*Global Considerations:*
- Essential medicines list
- Cost-effectiveness
- Availability
- Task-sharing models`,
      keyTerms: [
        { term: 'esketamine', definition: 'Nasal spray ketamine formulation FDA-approved for treatment-resistant depression' },
        { term: 'KarXT', definition: 'Muscarinic agonist combination being developed for schizophrenia' },
        { term: 'measurement-based care', definition: 'Using rating scales to guide treatment decisions' },
        { term: 'deprescribing', definition: 'Systematic process of reducing or stopping medications' },
        { term: 'combinatorial pharmacogenomics', definition: 'Testing multiple genes to inform medication selection' },
      ],
      clinicalNotes: `Current best practices:
- Measurement-based care improves outcomes
- Pharmacogenomics useful for drug metabolism
- Long-acting injectables for adherence concerns
- Address metabolic effects proactively

Emerging developments:
- Esketamine for TRD
- Psilocybin, MDMA (Phase 3)
- Novel mechanisms (muscarinic, TAAR1)
- Precision approaches

Key challenges:
- Individual response prediction
- Tolerability and adherence
- Long-term side effects
- Access to novel treatments`,
    },
  },

  media: [
    {
      id: 'psych-meds-classes',
      type: 'diagram',
      filename: 'psychiatric_medication_classes.svg',
      title: 'Psychiatric Medication Classes',
      description: 'Overview of major psychiatric medication classes and their uses',
    },
  ],

  citations: [
    {
      id: 'stahl-psychopharmacology',
      type: 'textbook',
      title: 'Stahl\'s Essential Psychopharmacology',
      authors: ['Stahl SM'],
      source: 'Cambridge University Press',
    },
  ],

  crossReferences: [
    { targetId: 'mental-health-depression', targetType: 'condition', relationship: 'see-also', label: 'Depression' },
    { targetId: 'mental-health-psychotherapy', targetType: 'topic', relationship: 'related', label: 'Psychotherapy Types' },
    { targetId: 'mental-health-combination-treatment', targetType: 'topic', relationship: 'related', label: 'Combination Treatment' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['mental-health', 'psychiatry', 'pharmacology'],
    keywords: ['antidepressants', 'antipsychotics', 'mood stabilizers', 'SSRI', 'psychiatric medications'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['psychiatry', 'medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default psychiatricMedicationsContent;
