/**
 * Anxiolytics
 *
 * Comprehensive educational content on anxiolytic medications,
 * their mechanisms, uses, and clinical considerations.
 */

import { EducationalContent } from '../../../types';

export const anxiolyticsContent: EducationalContent = {
  id: 'psychiatry-anxiolytics',
  type: 'topic',
  name: 'Anxiolytics',
  alternateNames: ['Anti-Anxiety Medications', 'Anxiolytic Drugs'],

  levels: {
    1: {
      level: 1,
      summary: 'Anxiolytics are medications that reduce anxiety. They include fast-acting options like benzodiazepines and longer-term treatments like buspirone.',
      explanation: `Anxiolytics help reduce feelings of anxiety and panic.

**Types of Anxiolytics:**

*Benzodiazepines (fast-acting):*
- Work quickly (minutes to hours)
- Examples: Alprazolam (Xanax), Lorazepam (Ativan), Diazepam (Valium)
- Good for short-term use or panic attacks
- Can be habit-forming if used long-term

*Buspirone (slower-acting):*
- Takes weeks to work
- Not habit-forming
- Good for long-term anxiety treatment

*Other options:*
- Antidepressants (SSRIs, SNRIs) are often first-line for chronic anxiety
- Hydroxyzine (antihistamine with anti-anxiety effects)
- Beta-blockers for physical symptoms of anxiety

**How Benzodiazepines Work:**
- Enhance a calming brain chemical called GABA
- Work within 30-60 minutes
- Also help with sleep and muscle tension

**Important Cautions:**

*Benzodiazepines:*
- Can cause dependence
- Shouldn't be used long-term if possible
- Don't mix with alcohol (dangerous)
- Can cause drowsiness
- Should not stop suddenly after long use

*Buspirone:*
- Takes 2-4 weeks to work
- Must be taken daily
- Fewer side effects
- No dependence risk

**Best Practices:**
- Use benzodiazepines for short-term or as-needed use
- Antidepressants often better for chronic anxiety
- Therapy (CBT) works well with or without medication`,
      keyTerms: [
        { term: 'GABA', definition: 'A brain chemical that calms nerve activity; benzodiazepines enhance its effects' },
        { term: 'benzodiazepine', definition: 'A fast-acting anti-anxiety medication that enhances GABA' },
        { term: 'dependence', definition: 'When the body becomes used to a medication and has withdrawal if stopped' },
      ],
      analogies: [
        'Benzodiazepines are like pressing the brake pedal on an anxious brain - they slow things down quickly.',
        'Buspirone is more like slowly adjusting the thermostat - it takes time but provides steady relief.',
      ],
      examples: [
        'Someone with a panic attack might take lorazepam to calm down quickly.',
        'A person with chronic anxiety might take buspirone every day for long-term relief.',
      ],
    },
    2: {
      level: 2,
      summary: 'Anxiolytics include benzodiazepines (GABA-A positive allosteric modulators) for acute anxiety and buspirone (5-HT1A partial agonist) for chronic anxiety. First-line treatment for most anxiety disorders is SSRIs/SNRIs.',
      explanation: `**Classification:**

*Benzodiazepines:*
- Mechanism: GABA-A receptor positive allosteric modulator
- Rapid onset, effective for acute anxiety
- Risk of dependence, tolerance

*Azapirones:*
- Buspirone: 5-HT1A partial agonist
- Delayed onset (2-4 weeks)
- No dependence risk

*Other Classes Used:*
- SSRIs/SNRIs: First-line for most anxiety disorders
- Hydroxyzine: Antihistamine with anxiolytic effects
- Gabapentinoids: Pregabalin, gabapentin
- Beta-blockers: Performance anxiety (propranolol)

**Benzodiazepines:**

| Drug | Brand | Onset | Half-life | Potency |
|------|-------|-------|-----------|---------|
| Alprazolam | Xanax | Fast | 6-12h | High |
| Lorazepam | Ativan | Medium | 10-20h | High |
| Clonazepam | Klonopin | Medium | 18-50h | High |
| Diazepam | Valium | Fast | 20-100h | Low |

*Uses:*
- Acute anxiety, panic attacks
- Procedural sedation
- Alcohol withdrawal
- Seizures
- Muscle relaxation

*Side Effects:*
- Sedation, cognitive impairment
- Coordination problems
- Disinhibition (paradoxical)
- Respiratory depression (especially with opioids)
- Dependence with chronic use

*Withdrawal:*
- Anxiety, insomnia, irritability
- Tremor, sweating
- Seizures (severe cases)
- Taper slowly to avoid

**Buspirone:**

*Dosing:*
- Start 5mg 2-3x daily
- Increase every 2-3 days
- Usual range: 15-60mg/day

*Properties:*
- No sedation
- No cognitive impairment
- No dependence
- No withdrawal
- Takes 2-4 weeks for effect

*Limitations:*
- Not effective for acute anxiety
- Less effective in prior benzodiazepine users
- Must be taken consistently

**Treatment Approach:**

*First-line (most anxiety disorders):*
- SSRIs or SNRIs
- CBT

*Benzodiazepines:*
- Short-term use while SSRIs start working
- As-needed for panic attacks
- Avoid long-term daily use if possible

*Buspirone:*
- Augment SSRI in GAD
- Alternative if SSRI not tolerated
- Good long-term option

**Special Considerations:**

*Elderly:*
- Benzodiazepines: Higher fall risk, cognitive effects
- Use lowest doses, shortest duration
- Avoid long-acting agents

*Substance Use History:*
- Caution with benzodiazepines
- Buspirone preferred
- Monitor closely if benzos needed`,
      keyTerms: [
        { term: 'positive allosteric modulator', definition: 'A drug that enhances receptor function by binding to a different site than the main ligand' },
        { term: '5-HT1A partial agonist', definition: 'Buspirone mechanism; partially activates serotonin 1A receptors' },
        { term: 'half-life', definition: 'Time for drug concentration to decrease by half; longer = less frequent dosing' },
      ],
    },
    3: {
      level: 3,
      summary: 'Benzodiazepines enhance GABA-A receptor chloride conductance, producing anxiolytic, sedative, muscle relaxant, and anticonvulsant effects. Chronic use leads to neuroadaptive changes underlying tolerance and dependence. Selection is based on pharmacokinetics and clinical indication.',
      explanation: `**Benzodiazepine Pharmacology:**

*GABA-A Receptor:*
- Ligand-gated chloride channel
- Five subunits (typically 2 alpha, 2 beta, 1 gamma)
- Benzodiazepine binding site: alpha/gamma interface
- Increases frequency of channel opening (vs. barbiturates: duration)

*Subunit-Specific Effects:*
- Alpha-1: Sedation, amnesia, anticonvulsant
- Alpha-2, Alpha-3: Anxiolytic, muscle relaxant
- Explains different clinical profiles

*Pharmacokinetics by Agent:*

| Drug | Bioavail | Onset | Half-life | Metabolism |
|------|----------|-------|-----------|------------|
| Alprazolam | 90% | Fast | 6-12h | CYP3A4 |
| Lorazepam | 90% | Medium | 10-20h | Glucuronidation |
| Clonazepam | 90% | Medium | 18-50h | CYP3A4 |
| Diazepam | 100% | Fast | 20-100h* | CYP3A4, 2C19 |

*Active metabolites (desmethyldiazepam) extend duration

*Clinical Selection:*
- Fast onset: Acute anxiety, panic (alprazolam, diazepam)
- Short half-life: Elderly, hepatic impairment (lorazepam)
- Long half-life: Once daily, easier taper (clonazepam)

**Tolerance and Dependence:**

*Tolerance:*
- Develops to sedative, anticonvulsant effects
- Less tolerance to anxiolytic effect
- Mechanism: Receptor downregulation, subunit changes

*Physical Dependence:*
- Develops with chronic use (2-4+ weeks daily)
- Worse with high potency, short half-life
- Risk factors: High dose, long duration, history of SUD

*Withdrawal:*
- Mild: Anxiety, insomnia, tremor
- Moderate: Perceptual changes, autonomic instability
- Severe: Seizures, delirium (can be life-threatening)
- Taper 10-25% per week (slower if long-term)

**Buspirone Pharmacology:**

*Mechanism:*
- 5-HT1A partial agonist
- Presynaptic: Reduces serotonin firing initially
- Postsynaptic: Partial agonism
- Time course explains delayed onset

*Pharmacokinetics:*
- Extensive first-pass metabolism (CYP3A4)
- Half-life: 2-3 hours
- Requires multiple daily dosing

*Clinical Use:*
- GAD (FDA-approved)
- Augmentation of SSRIs
- Not effective for panic disorder
- Prior benzodiazepine users may respond less

**Other Agents:**

*Hydroxyzine:*
- H1 antihistamine with anxiolytic effect
- Immediate relief
- Non-dependence forming
- Side effects: Sedation, dry mouth, QTc prolongation

*Pregabalin/Gabapentin:*
- Alpha-2-delta calcium channel modulators
- Pregabalin: FDA-approved for GAD (Europe)
- Gabapentinoid misuse concern growing

*Beta-Blockers:*
- Propranolol for performance anxiety
- Blocks peripheral symptoms (tremor, tachycardia)
- Does not address cognitive anxiety

**Treatment of Anxiety Disorders:**

*GAD:*
- First-line: SSRI/SNRI
- Buspirone: Effective, augmentation or monotherapy
- Benzodiazepines: Short-term, avoid long-term

*Panic Disorder:*
- First-line: SSRI/SNRI + CBT
- Benzodiazepines: Acute attacks, short-term bridge
- Buspirone: Not effective

*Social Anxiety:*
- First-line: SSRI/SNRI + CBT
- Benzodiazepines: PRN for situational
- Beta-blockers: Performance situations

*Specific Phobias:*
- First-line: Exposure therapy
- Benzodiazepines: May interfere with extinction learning`,
      keyTerms: [
        { term: 'alpha subunit', definition: 'GABA-A receptor subunit determining benzodiazepine effects; alpha-1 (sedation) vs alpha-2/3 (anxiolytic)' },
        { term: 'glucuronidation', definition: 'Metabolic pathway not using CYP450; lorazepam uses this, safer in hepatic impairment' },
        { term: 'extinction learning', definition: 'Process in exposure therapy; benzodiazepines may impair this' },
      ],
    },
    4: {
      level: 4,
      summary: 'Benzodiazepine effects are mediated through specific GABA-A alpha subunits, with alpha-2/3 responsible for anxiolysis and alpha-1 for sedation. Dependence involves neuroadaptive changes requiring careful tapering. Buspirone\'s 5-HT1A mechanism offers an alternative without dependence liability.',
      explanation: `**Benzodiazepine Receptor Pharmacology:**

*GABA-A Structure:*
- Pentameric chloride channel
- Most common: 2 alpha, 2 beta, 1 gamma
- Benzodiazepine site: alpha-gamma interface
- Requires gamma-2 subunit for benzodiazepine sensitivity

*Subunit-Specific Effects:*

| Alpha Subunit | Effect | Distribution |
|---------------|--------|--------------|
| Alpha-1 | Sedation, amnesia, ataxia | Widespread |
| Alpha-2 | Anxiolytic, muscle relaxant | Limbic, spinal |
| Alpha-3 | Anxiolytic, muscle relaxant | Thalamus, limbic |
| Alpha-5 | Memory (antagonist may enhance) | Hippocampus |

*Drug Development Implications:*
- Selective alpha-2/3 agonists: Anxiolytic without sedation
- In development but challenging
- Current drugs non-selective

**Neuroadaptation and Dependence:**

*Mechanisms:*
- GABA-A receptor internalization
- Subunit expression changes
- Glutamate system upregulation
- NMDA receptor sensitization

*Withdrawal Neurobiology:*
- Reduced GABAergic inhibition
- Enhanced glutamatergic excitation
- Autonomic instability
- Seizure risk

*Tapering Guidelines:*
- 10-25% reduction every 1-2 weeks
- Slower for long-term users
- Switch to long-acting (diazepam, clonazepam) for short-acting
- Adjuncts: Carbamazepine, gabapentin may help

**Buspirone in Depth:**

*5-HT1A Pharmacology:*
- Presynaptic 5-HT1A: Autoreceptor on raphe neurons
- Initial: Reduces serotonin firing
- Chronic: Autoreceptor desensitization → Normalized firing
- Postsynaptic: Partial agonism in limbic areas

*Why Delayed Onset:*
- Initial reduction then restoration of serotonergic tone
- Receptor adaptations
- Similar timeline to SSRIs

*Compared to Benzodiazepines:*
- No GABA effect → No sedation, no dependence
- Less effective in prior benzodiazepine users (no cross-tolerance)
- Does not work for acute anxiety

**Advanced Treatment Strategies:**

*Benzodiazepine Alternatives:*
- SSRIs/SNRIs: First-line, delayed onset
- Buspirone: GAD, augmentation
- Hydroxyzine: Acute, no dependence
- Pregabalin: GAD evidence (Europe)
- CBT: Essential component

*When to Use Benzodiazepines:*
- Acute crisis, panic attacks
- Short-term bridge (2-4 weeks while SSRI starts)
- Severe, impairing anxiety
- Procedural anxiety
- Alcohol withdrawal

*De-prescribing:*
- Increasingly important
- Collaborative approach
- Very slow tapers (months)
- Address underlying anxiety
- Psychological support during taper

**Special Populations:**

*Elderly:*
- Beers criteria: Avoid in older adults
- Increased fall risk
- Cognitive impairment
- Paradoxical reactions
- If needed: Low dose, short half-life, brief duration

*Pregnancy:*
- Benzodiazepines: Risk of oral cleft (debated), neonatal syndrome
- Buspirone: Limited data, possibly safer
- SSRIs often preferred

*Substance Use Disorders:*
- Benzodiazepine risk: Misuse, overdose (especially with opioids)
- Buspirone: Preferred if possible
- If benzos needed: Structure, monitoring, limited supply

*Hepatic Impairment:*
- Lorazepam, oxazepam: Glucuronidation, no active metabolites
- Avoid long-acting agents`,
      keyTerms: [
        { term: 'gamma-2 subunit', definition: 'GABA-A receptor component essential for benzodiazepine sensitivity' },
        { term: 'Beers criteria', definition: 'List of potentially inappropriate medications in older adults; includes benzodiazepines' },
        { term: 'autoreceptor desensitization', definition: 'Mechanism underlying delayed buspirone effect' },
      ],
      clinicalNotes: 'SSRIs first-line for most anxiety disorders. Use benzodiazepines short-term or PRN. Buspirone for chronic anxiety without dependence risk. Taper benzodiazepines slowly after regular use. Lorazepam preferred in hepatic impairment. Avoid benzos in elderly and SUD history when possible.',
    },
    5: {
      level: 5,
      summary: 'Contemporary anxiolytic research pursues subunit-selective GABA-A modulators, novel targets like orexin and glutamate systems, and biomarkers for treatment selection. The benzodiazepine crisis drives deprescribing research while precision approaches aim to optimize treatment for individual patients.',
      explanation: `**Novel GABA-A Modulators:**

*Alpha-2/3 Selective Agonists:*
- TPA023, MK-0777: Anxiolytic without sedation
- Development challenges: Subunit selectivity difficult
- Limited clinical success to date

*Neurosteroids:*
- Allopregnanolone analogs (brexanolone for postpartum)
- GABA-A positive modulators
- Different mechanism than benzodiazepines
- Zuranolone: Oral neurosteroid in development

*Alternative Binding Sites:*
- GABA-A modulation through novel sites
- Imidazopyridines, cyclopyrrolones
- May have different side effect profiles

**Beyond GABA:**

*Glutamate System:*
- mGluR modulators
- Ketamine/esketamine: Rapid anxiolytic effects
- Riluzole: Glutamate modulator, some anxiety data

*Orexin Antagonists:*
- Suvorexant, lemborexant (approved for insomnia)
- Potential anxiety applications
- Role in stress response

*Cannabinoid System:*
- CBD: Anxiolytic properties
- CB1 modulation
- Limited clinical evidence
- Regulatory challenges

*Serotonin:*
- Vilazodone, vortioxetine: Multimodal
- 5-HT1A agonism component
- May have anxiolytic advantages

**Benzodiazepine Crisis:**

*Scope:*
- Widespread long-term use
- Increasing overdose deaths (especially with opioids)
- Elderly harm
- Dependence epidemic

*Responses:*
- Prescribing guidelines
- PDMP monitoring
- Deprescribing initiatives
- Education campaigns

**Deprescribing Research:**

*Best Practices:*
- Very slow tapers (10-25% monthly or slower)
- Patient education and engagement
- Address underlying anxiety
- CBT support during tapering
- Consider adjuncts (gabapentinoids, carbamazepine)

*Challenges:*
- Withdrawal discomfort
- Anxiety return
- Patient reluctance
- Prescriber uncertainty

*Novel Approaches:*
- Flumazenil tapers (research)
- Pharmacotherapy adjuncts
- Digital therapeutics support

**Precision Anxiolytics:**

*Biomarkers:*
- Neuroimaging predictors
- Genetic factors
- Physiological measures (HRV, startle)
- Not yet clinically implemented

*Phenotyping:*
- Different anxiety presentations
- Autonomic vs. cognitive predominance
- Treatment matching potential

*Pharmacogenomics:*
- CYP3A4 for alprazolam, clonazepam
- Limited clinical utility currently
- Benzodiazepine sensitivity variation

**Digital and Novel Therapeutics:**

*App-Based CBT:*
- Effective for anxiety
- Scalable
- May reduce medication need

*Biofeedback:*
- HRV training
- Neurofeedback
- Augment pharmacotherapy

*Virtual Reality:*
- Exposure therapy
- Relaxation training

**Future Directions:**

1. Subunit-selective GABA modulators
2. Novel mechanisms (orexin, glutamate)
3. Benzodiazepine alternatives
4. Deprescribing optimization
5. Precision treatment selection
6. Digital therapeutics integration
7. Prevention strategies
8. Biomarker development

**Clinical Decision Framework:**

*Acute anxiety:*
- Short-term benzodiazepine acceptable
- Avoid if SUD history
- Hydroxyzine alternative

*Chronic anxiety:*
- SSRI/SNRI first-line
- Buspirone adjunct/alternative
- Avoid long-term benzodiazepines

*Treatment resistance:*
- Optimize first-line
- Augmentation strategies
- CBT if not already included
- Consider novel agents`,
      keyTerms: [
        { term: 'neurosteroid', definition: 'Steroid synthesized in brain that modulates GABA-A receptors differently than benzodiazepines' },
        { term: 'orexin', definition: 'Neuropeptide system involved in arousal and stress; antagonists may have anxiolytic potential' },
        { term: 'deprescribing', definition: 'Systematic process of discontinuing medications that may cause harm' },
      ],
      clinicalNotes: `Current practice:
- SSRIs/SNRIs first-line for anxiety disorders
- CBT essential component
- Benzodiazepines for short-term/acute use
- Buspirone for chronic anxiety without dependence
- Deprescribing important for long-term benzodiazepine users

Emerging:
- Novel GABA modulators
- Neurosteroid therapies
- Digital therapeutics
- Precision approaches

Key points:
- Benzodiazepine crisis is real
- Long-term use problematic
- Taper slowly when discontinuing
- Multiple effective alternatives exist
- Combine medication with psychotherapy`,
    },
  },

  media: [
    {
      id: 'anxiolytic-comparison',
      type: 'diagram',
      filename: 'anxiolytic_comparison.svg',
      title: 'Anxiolytic Medication Comparison',
      description: 'Comparing mechanisms, onset, and dependence risk',
    },
  ],

  citations: [
    {
      id: 'stahl-anxiolytics',
      type: 'textbook',
      title: "Stahl's Essential Psychopharmacology",
      authors: ['Stahl SM'],
      source: 'Cambridge University Press',
      chapter: 'Anxiolytics and Sedative-Hypnotics',
    },
  ],

  crossReferences: [
    { targetId: 'psychiatry-generalized-anxiety-disorder', targetType: 'condition', relationship: 'see-also', label: 'GAD' },
    { targetId: 'psychiatry-panic-disorder', targetType: 'condition', relationship: 'see-also', label: 'Panic Disorder' },
    { targetId: 'psychiatry-ssris', targetType: 'topic', relationship: 'related', label: 'SSRIs' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['psychiatry', 'pharmacology', 'medications'],
    keywords: ['anxiolytic', 'benzodiazepine', 'buspirone', 'GABA', 'anxiety'],
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

export default anxiolyticsContent;
