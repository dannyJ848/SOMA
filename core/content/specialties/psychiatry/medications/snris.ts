/**
 * Serotonin-Norepinephrine Reuptake Inhibitors (SNRIs)
 *
 * Comprehensive educational content on SNRIs,
 * their mechanism, uses, and clinical considerations.
 */

import { EducationalContent } from '../../../types';

export const snrisContent: EducationalContent = {
  id: 'psychiatry-snris',
  type: 'topic',
  name: 'Serotonin-Norepinephrine Reuptake Inhibitors',
  alternateNames: ['SNRIs', 'Dual Reuptake Inhibitors'],

  levels: {
    1: {
      level: 1,
      summary: 'SNRIs are medications that treat depression, anxiety, and pain by increasing both serotonin and norepinephrine in the brain.',
      explanation: `SNRIs are antidepressants that work on two brain chemicals instead of just one.

**What They Treat:**
- Depression
- Anxiety disorders
- Chronic pain conditions
- Fibromyalgia
- Diabetic nerve pain

**How They Work:**
- Block the reuptake of two chemicals: serotonin AND norepinephrine
- Both chemicals help regulate mood and pain
- The "dual action" may help when single-action medications don't work

**Common SNRIs:**
- Venlafaxine (Effexor)
- Duloxetine (Cymbalta)
- Desvenlafaxine (Pristiq)
- Levomilnacipran (Fetzima)

**Advantages:**
- May work better for some people than SSRIs
- Can help with physical symptoms of depression (fatigue, pain)
- Good for depression with chronic pain
- Multiple FDA-approved uses

**Side Effects:**
- Similar to SSRIs: nausea, headache, sexual problems
- May raise blood pressure (especially venlafaxine)
- Can cause sweating
- Should not stop suddenly (taper slowly)

**Important:**
- Takes 2-4 weeks to start working
- Blood pressure should be monitored
- Don't combine with MAOIs`,
      keyTerms: [
        { term: 'norepinephrine', definition: 'A brain chemical that affects alertness, energy, and the body\'s stress response' },
        { term: 'dual action', definition: 'Working on two brain chemicals (serotonin and norepinephrine) instead of one' },
        { term: 'fibromyalgia', definition: 'A chronic pain condition that SNRIs can help treat' },
      ],
      analogies: [
        'If SSRIs turn up the volume on one speaker (serotonin), SNRIs turn up the volume on two speakers (serotonin and norepinephrine) for fuller sound.',
        'Norepinephrine is like the brain\'s energy and alertness chemical - adding it can help with fatigue and motivation.',
      ],
      examples: [
        'Someone with depression and chronic back pain might benefit from duloxetine, which helps both.',
        'If an SSRI isn\'t fully helping depression, switching to an SNRI might provide additional benefit.',
      ],
    },
    2: {
      level: 2,
      summary: 'SNRIs inhibit both serotonin and norepinephrine reuptake, offering treatment for depression, anxiety disorders, and chronic pain conditions. They require blood pressure monitoring and careful discontinuation.',
      explanation: `**Mechanism:**
- Block both SERT (serotonin transporter) and NET (norepinephrine transporter)
- Relative potency varies by agent
- Norepinephrine effects may help energy, concentration, pain

**Available SNRIs:**

| Drug | Brand | Starting Dose | Usual Range | Notes |
|------|-------|---------------|-------------|-------|
| Venlafaxine | Effexor XR | 37.5-75mg | 75-225mg | BP monitoring |
| Duloxetine | Cymbalta | 30mg | 60-120mg | Pain indications |
| Desvenlafaxine | Pristiq | 50mg | 50mg | Active metabolite of venlafaxine |
| Levomilnacipran | Fetzima | 20mg | 40-120mg | More NE selective |

**FDA-Approved Indications:**

*Venlafaxine:*
- Major Depressive Disorder
- Generalized Anxiety Disorder
- Social Anxiety Disorder
- Panic Disorder

*Duloxetine:*
- Major Depressive Disorder
- Generalized Anxiety Disorder
- Diabetic Peripheral Neuropathy
- Fibromyalgia
- Chronic Musculoskeletal Pain

*Desvenlafaxine:*
- Major Depressive Disorder

*Levomilnacipran:*
- Major Depressive Disorder

**Side Effects:**

*Common:*
- Nausea (often transient)
- Headache
- Insomnia or sedation
- Sexual dysfunction
- Sweating
- Dry mouth
- Constipation

*Norepinephrine-related:*
- Increased blood pressure (dose-related)
- Tachycardia
- Urinary hesitancy
- Activation/anxiety (initial)

**Monitoring:**
- Blood pressure (especially venlafaxine)
- Heart rate
- Sexual function
- Mood changes in youth (black box warning)

**Discontinuation:**
- Taper slowly (similar to SSRIs)
- Venlafaxine notorious for difficult discontinuation
- Symptoms: Dizziness, nausea, irritability, "brain zaps"
- Switch to fluoxetine bridge if problematic

**Drug Interactions:**
- MAOIs: Contraindicated (serotonin syndrome)
- Other serotonergic drugs: Caution
- CYP2D6 substrates (varies by SNRI)`,
      keyTerms: [
        { term: 'NET', definition: 'Norepinephrine transporter, blocked by SNRIs' },
        { term: 'diabetic neuropathy', definition: 'Nerve damage from diabetes causing pain, treated by duloxetine' },
        { term: 'brain zaps', definition: 'Electric shock sensations that can occur during SNRI discontinuation' },
      ],
    },
    3: {
      level: 3,
      summary: 'SNRIs have dose-dependent norepinephrine effects with serotonin effects at lower doses. Duloxetine is preferred for pain comorbidities, venlafaxine for anxiety disorders. Blood pressure monitoring and careful tapering are essential clinical considerations.',
      explanation: `**Pharmacology:**

*Mechanism:*
- Serotonin transporter (SERT) inhibition
- Norepinephrine transporter (NET) inhibition
- No significant direct receptor binding (unlike TCAs)

*Relative Potency:*
- Venlafaxine: 5-HT >> NE (NE at higher doses ~150mg+)
- Duloxetine: 5-HT > NE (more balanced)
- Levomilnacipran: NE > 5-HT (most NE selective)
- Desvenlafaxine: Similar to venlafaxine

*Pharmacokinetics:*
- Venlafaxine: Short half-life, XR formulation needed
- Duloxetine: 12-hour half-life, avoid in severe hepatic/renal
- Desvenlafaxine: Active metabolite, minimal CYP interactions
- Levomilnacipran: Renal elimination

**Clinical Selection:**

*Depression:*
- All SNRIs effective
- May choose if SSRI partial response
- Consider for melancholic features (energy, motivation)

*Anxiety Disorders:*
- Venlafaxine: Most anxiety indications (GAD, SAD, panic)
- Duloxetine: GAD approved
- Start low to avoid initial anxiety increase

*Pain Conditions:*
- Duloxetine: FDA approvals for neuropathy, fibromyalgia, chronic pain
- Mechanism: Descending pain modulation (NE and 5-HT)
- Often first-line for depression + chronic pain

**Cardiovascular Effects:**

*Hypertension:*
- Dose-related, more with venlafaxine
- Mechanism: NET inhibition peripherally
- Monitor BP at baseline and with dose increases
- May need antihypertensive or switch agents

*Other:*
- Tachycardia
- QTc generally not significantly affected
- Caution in uncontrolled hypertension

**Hepatic and Renal Considerations:**

*Duloxetine:*
- Avoid in severe hepatic impairment
- Avoid in severe renal impairment (CrCl <30)
- Hepatotoxicity rare but possible

*Venlafaxine/Desvenlafaxine:*
- Reduce dose in hepatic impairment
- Reduce dose in renal impairment

**Discontinuation Details:**

*Risk Factors:*
- Venlafaxine highest risk (short half-life)
- Higher doses, longer duration increase risk
- Abrupt cessation

*Symptoms:*
- Dizziness, vertigo
- Paresthesias ("brain zaps")
- Nausea, vomiting
- Anxiety, irritability
- Insomnia
- Flu-like symptoms

*Management:*
- Taper over weeks (10-25% reductions)
- If severe: Fluoxetine cross-taper (long half-life)
- May take months for some patients

**Comparison to SSRIs:**

*Potential Advantages:*
- Dual mechanism
- Pain conditions
- Possibly more effective for some patients

*Disadvantages:*
- BP monitoring needed
- More difficult discontinuation
- Not clearly more effective overall`,
      keyTerms: [
        { term: 'descending pain modulation', definition: 'Brain pathways using NE and 5-HT that naturally inhibit pain signals' },
        { term: 'melancholic features', definition: 'Depression subtype with loss of pleasure, psychomotor changes - may respond to NE agents' },
        { term: 'cross-taper', definition: 'Gradually switching from one medication to another to avoid discontinuation' },
      ],
    },
    4: {
      level: 4,
      summary: 'SNRI therapeutic effects involve synergistic serotonergic and noradrenergic mechanisms in mood, anxiety, and pain circuits. Dose-response for NET engagement varies by agent, with clinical implications for efficacy and side effects. Pharmacogenomic and phenotypic factors influence response.',
      explanation: `**Neurobiological Mechanisms:**

*Serotonin System:*
- SERT blockade → Increased synaptic 5-HT
- Similar timeline and adaptations as SSRIs
- 5-HT1A autoreceptor desensitization

*Norepinephrine System:*
- NET blockade → Increased synaptic NE
- Alpha-2 autoreceptor adaptations
- Locus coeruleus effects
- May provide additional antidepressant action

*Synergistic Effects:*
- 5-HT and NE interact in raphe and LC
- 5-HT modulates NE release and vice versa
- May explain enhanced efficacy for some patients

*Pain Mechanism:*
- Descending inhibitory pathways from brain to spinal cord
- NE and 5-HT inhibit pain transmission
- Dorsal horn modulation
- Explains efficacy in neuropathic and chronic pain

**Dose-Response for NET:**

*Venlafaxine:*
- Low doses (37.5-75mg): Primarily SERT
- Moderate (150mg): NET engagement increases
- High (225mg+): Substantial NET inhibition
- Clinical implication: May need higher doses for full dual action

*Duloxetine:*
- More balanced at starting doses
- 60mg provides significant NET inhibition
- Pain effects evident at standard doses

*Levomilnacipran:*
- NET > SERT ratio
- More NE effects from the start
- May be more activating

**Comparative Efficacy:**

*Meta-analyses:*
- SNRIs vs. SSRIs: Small advantage for SNRIs in some analyses
- Effect size difference: ~0.1 (modest)
- Not all patients benefit from dual action

*When to Consider SNRIs:*
- SSRI non-response
- Prominent fatigue, concentration problems
- Chronic pain comorbidity
- Melancholic depression features

**Pharmacogenomics:**

*CYP2D6:*
- Venlafaxine metabolized to desvenlafaxine via CYP2D6
- Poor metabolizers: Higher venlafaxine, lower desvenlafaxine
- May have more side effects, less NE effect
- Desvenlafaxine: Bypasses CYP2D6

*Clinical Utility:*
- Testing available
- May help explain poor response or intolerance
- Consider desvenlafaxine in CYP2D6 poor metabolizers

**Switching and Augmentation:**

*Switching to SNRI from SSRI:*
- Can often cross-taper
- Watch for serotonergic effects during overlap
- Consider washout for paroxetine due to CYP2D6 inhibition

*Augmentation of SNRI:*
- Bupropion: Adds dopamine, no serotonin syndrome risk
- Mirtazapine: Enhances NE and 5-HT differently ("California rocket fuel")
- Atypical antipsychotic: Standard augmentation option
- Lithium: Traditional augmentation

**Treatment-Resistant Depression:**

*SNRI Role:*
- Reasonable switch after SSRI failure
- Venlafaxine studied in TRD
- May combine with other mechanisms
- Consider before ECT, ketamine`,
      keyTerms: [
        { term: 'locus coeruleus', definition: 'Brain region that is the main source of norepinephrine' },
        { term: 'alpha-2 autoreceptor', definition: 'Presynaptic receptor regulating NE release; adapts with chronic SNRI use' },
        { term: 'California rocket fuel', definition: 'Colloquial term for venlafaxine + mirtazapine combination' },
      ],
      clinicalNotes: 'Monitor BP especially with venlafaxine. Higher doses needed for full NE effect (venlafaxine). Duloxetine for pain comorbidities. Taper very slowly when discontinuing. CYP2D6 status affects venlafaxine metabolism. Consider desvenlafaxine to bypass CYP2D6.',
    },
    5: {
      level: 5,
      summary: 'Contemporary SNRI research explores optimal NE engagement, precision medicine approaches, and novel dual-action agents. Understanding of descending pain modulation informs their unique role in depression with chronic pain, while triple reuptake inhibitors and other novel mechanisms are under development.',
      explanation: `**Optimizing NE Engagement:**

*Neuroimaging Studies:*
- PET studies of NET occupancy
- Venlafaxine: Dose-dependent NET occupancy
- 150mg: ~20% NET occupancy
- 225mg: ~40% NET occupancy
- Clinical correlation with NE effects under study

*Clinical Implications:*
- Standard doses may not provide full dual action
- Consider higher doses for NE-responsive symptoms
- Balance with side effect burden

**Precision Approaches:**

*Phenotypic Selection:*
- Fatigue-predominant depression
- Chronic pain comorbidity
- Psychomotor retardation
- Concentration difficulties
- These may predict SNRI response

*Biomarkers:*
- NE metabolites (MHPG) studied
- Limited clinical utility currently
- Neuroimaging markers under investigation

*Pharmacogenomics:*
- CYP2D6 genotype affects venlafaxine
- May guide initial agent selection
- Predict side effects or response
- Commercial testing available

**Novel Dual-Action Agents:**

*Milnacipran:*
- Available for fibromyalgia in US
- More NE relative to 5-HT
- Used as antidepressant in other countries

*Triple Reuptake Inhibitors (TRIs):*
- Add dopamine reuptake inhibition
- Theoretically enhanced efficacy
- Development challenges (abuse potential)
- None approved yet

*Vilazodone/Vortioxetine:*
- SSRI plus receptor modulation
- Different dual-action approach
- May have different clinical profiles

**Pain and Mood Intersection:**

*Central Sensitization:*
- Shared mechanisms in depression and chronic pain
- Neuroplasticity alterations
- SNRIs address both

*Network Effects:*
- Prefrontal-limbic in depression
- Descending modulation in pain
- Overlapping circuits

*Clinical Integration:*
- SNRIs as first-line for depression + chronic pain
- May reduce need for opioids
- Preventive potential in chronic pain development

**Cardiovascular Considerations:**

*NE and CV System:*
- NET inhibition increases peripheral NE
- Blood pressure elevation
- Heart rate increase
- Long-term CV outcomes unclear

*Risk-Benefit:*
- Balance CV effects against depression/pain treatment
- Monitor and manage
- May need antihypertensive co-therapy
- Consider alternatives in high CV risk

**Discontinuation Science:**

*Mechanism:*
- Rapid decrease in synaptic monoamines
- Receptor adaptations
- Noradrenergic withdrawal symptoms

*Research:*
- Very gradual tapers (liquid formulations)
- Longer taper durations
- Symptom-guided tapering
- Need for better protocols

**Future Directions:**

1. Biomarkers for SNRI response prediction
2. Optimal dosing for NE engagement
3. Novel dual-action mechanisms
4. Understanding discontinuation
5. Pain prevention applications
6. CV safety long-term
7. Precision medicine integration
8. Comparative effectiveness studies`,
      keyTerms: [
        { term: 'triple reuptake inhibitor', definition: 'Agent blocking 5-HT, NE, and dopamine transporters; under development' },
        { term: 'central sensitization', definition: 'Increased responsiveness of CNS neurons to normal input, shared in depression and chronic pain' },
        { term: 'NET occupancy', definition: 'Percentage of norepinephrine transporters blocked; dose-dependent for SNRIs' },
      ],
      clinicalNotes: `Current practice:
- SNRIs effective for depression, anxiety, and pain
- Venlafaxine: Multiple anxiety indications, BP monitoring essential
- Duloxetine: First-line for depression + chronic pain
- Taper slowly, especially venlafaxine
- Higher doses for full NE engagement (venlafaxine)

Emerging:
- Pharmacogenomic-guided selection
- Biomarker prediction of response
- Novel dual-action mechanisms
- Better discontinuation protocols

Key points:
- Dual action may benefit specific phenotypes
- Pain indication unique advantage
- BP monitoring required
- Discontinuation can be challenging
- CYP2D6 affects venlafaxine metabolism`,
    },
  },

  media: [
    {
      id: 'snri-mechanism-diagram',
      type: 'diagram',
      filename: 'snri_mechanism.svg',
      title: 'SNRI Mechanism of Action',
      description: 'How SNRIs block both serotonin and norepinephrine reuptake',
    },
  ],

  citations: [
    {
      id: 'stahl-snris',
      type: 'textbook',
      title: "Stahl's Essential Psychopharmacology",
      authors: ['Stahl SM'],
      source: 'Cambridge University Press',
      chapter: 'Antidepressants',
    },
  ],

  crossReferences: [
    { targetId: 'psychiatry-ssris', targetType: 'topic', relationship: 'related', label: 'SSRIs' },
    { targetId: 'psychiatry-major-depressive-disorder', targetType: 'condition', relationship: 'see-also', label: 'MDD' },
    { targetId: 'psychiatry-generalized-anxiety-disorder', targetType: 'condition', relationship: 'see-also', label: 'GAD' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['psychiatry', 'pharmacology', 'medications'],
    keywords: ['SNRI', 'antidepressant', 'norepinephrine', 'serotonin', 'chronic pain'],
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

export default snrisContent;
