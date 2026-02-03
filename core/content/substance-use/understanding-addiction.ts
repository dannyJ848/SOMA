/**
 * Understanding Addiction - Brain Science and Recovery
 *
 * Educational content about addiction as a medical condition,
 * including brain science, tolerance, dependence, withdrawal,
 * and recovery as a process.
 */

import { EducationalContent } from '../types';

export const understandingAddictionContent: EducationalContent = {
  id: 'substance-use-understanding-addiction',
  type: 'concept',
  name: 'Understanding Addiction',
  alternateNames: ['Substance Use Disorder', 'Addiction Science', 'The Disease of Addiction'],

  levels: {
    1: {
      level: 1,
      summary: 'Addiction is a medical condition that affects the brain, making it very hard to stop using a substance even when it causes problems. It is not a choice or a sign of weakness.',
      explanation: `Addiction is a medical condition, just like diabetes or heart disease. It changes how the brain works, making it very hard for someone to stop using a substance even when they want to.

**Why Does Addiction Happen?**

Your brain has a "reward system" that makes you feel good when you do things you need to survive, like eating or spending time with loved ones. Drugs and alcohol "hijack" this system by flooding it with feel-good chemicals.

Over time, the brain changes:
- It needs more of the substance to feel the same effect (tolerance)
- It feels terrible without the substance (withdrawal)
- The person starts to need the substance just to feel normal

**Important Facts:**

- **Addiction is NOT a choice** - No one chooses to become addicted
- **Addiction is NOT a moral failing** - It's a brain condition
- **Addiction CAN be treated** - Many people recover and live healthy lives
- **Anyone can develop addiction** - It doesn't matter how smart or strong you are

**Why Some People Get Addicted and Others Don't:**

- Genes play a role (it can run in families)
- Starting substance use at a young age increases risk
- Stress and trauma make addiction more likely
- Mental health conditions increase risk

**Recovery Is Possible:**

Addiction is a treatable condition. With the right support and treatment, people can and do recover. Recovery is a process, not an event - it takes time and often involves setbacks, but each day matters.`,
      keyTerms: [
        { term: 'addiction', definition: 'A medical condition where someone cannot stop using a substance even when it causes harm' },
        { term: 'tolerance', definition: 'When you need more of a substance to get the same effect' },
        { term: 'withdrawal', definition: 'Feeling sick when you stop using a substance your body has gotten used to' },
        { term: 'recovery', definition: 'The process of getting better from addiction and learning to live without substances' },
      ],
      analogies: [
        'Addiction is like being stuck in a deep hole - you didn\'t choose to fall in, and climbing out takes help and effort.',
        'The brain on addiction is like a thermostat that\'s been reset - it now thinks it needs the drug to be at "normal" temperature.',
        'Recovery is like physical therapy after an injury - it takes time, practice, and support, but healing is possible.',
      ],
      examples: [
        'Someone might start taking pain pills after surgery and find they cannot stop even after the pain is gone.',
        'A person might keep drinking alcohol even though it\'s affecting their job and relationships.',
        'Someone in recovery might go to meetings and counseling to help them stay on track.',
      ],
    },
    2: {
      level: 2,
      summary: 'Addiction is a chronic brain disorder involving changes in the reward, motivation, and memory systems. It develops through cycles of tolerance and dependence, and recovery involves healing these brain changes over time.',
      explanation: `**The Brain Science of Addiction:**

Addiction changes three key brain systems:

1. **Reward System** (Dopamine)
   - Drugs release much more dopamine than natural rewards
   - The brain reduces its own dopamine production
   - Normal activities no longer feel pleasurable

2. **Stress System** (Cortisol, norepinephrine)
   - Becomes overactive during withdrawal
   - Creates anxiety, irritability, discomfort
   - Drives continued use to feel "normal"

3. **Decision-Making System** (Prefrontal cortex)
   - Executive function becomes impaired
   - Harder to resist cravings
   - Reduced ability to consider consequences

**Key Terms:**

**Tolerance** - The brain adapts to the drug, requiring higher doses:
- Happens because receptors become less sensitive
- Can develop in days to weeks
- Increases overdose risk when tolerance drops (after breaks in use)

**Physical Dependence** - The body has adapted to the drug's presence:
- Brain chemistry is altered
- Stopping causes physical symptoms (withdrawal)
- Different from addiction (dependence can occur without addiction)

**Psychological Dependence** - Mental and emotional reliance:
- Feeling unable to cope without the substance
- Strong cravings and preoccupation
- Using to manage emotions

**Withdrawal** - What happens when a dependent person stops:
- Symptoms vary by substance
- Can be uncomfortable or dangerous
- Usually temporary but may require medical help

**The Cycle of Addiction:**
1. Initial use produces strong pleasure
2. Tolerance develops; more is needed
3. Dependence forms; use continues to avoid withdrawal
4. Control is lost; use despite negative consequences
5. Attempts to quit fail without proper support

**Recovery:**
- Brain healing takes time (months to years)
- Multiple approaches often needed
- Relapse is part of the process for many people
- Support systems are crucial`,
      keyTerms: [
        { term: 'dopamine', definition: 'A brain chemical involved in pleasure, motivation, and reward; heavily affected by addictive substances', pronunciation: 'DOH-pah-meen' },
        { term: 'physical dependence', definition: 'When the body has adapted to a substance and needs it to function normally' },
        { term: 'psychological dependence', definition: 'Mental and emotional need for a substance to cope with daily life' },
        { term: 'prefrontal cortex', definition: 'The front part of the brain responsible for decision-making, impulse control, and judgment' },
        { term: 'relapse', definition: 'A return to substance use after a period of not using; often part of the recovery process' },
      ],
      analogies: [
        'Tolerance is like needing to turn up the volume on headphones - the brain gets used to the signal and needs more to notice it.',
        'The addicted brain is like a car with a stuck accelerator and weak brakes - the drive to use is strong while the ability to stop is weakened.',
      ],
    },
    3: {
      level: 3,
      summary: 'Substance use disorder involves neuroadaptations in the mesocorticolimbic dopamine system, stress/anti-reward circuits, and executive function networks, leading to compulsive use despite harm.',
      explanation: `**Neurobiology of Addiction:**

**Mesocorticolimbic Dopamine System:**
- VTA (ventral tegmental area) → nucleus accumbens → prefrontal cortex
- Drugs of abuse increase dopamine 2-10x more than natural rewards
- Cocaine blocks dopamine reuptake; opioids inhibit GABAergic interneurons
- Amphetamines reverse dopamine transporters

**Neuroadaptations with Chronic Use:**

*Reward Deficit State:*
- Downregulation of D2 dopamine receptors
- Decreased dopamine release and synthesis
- Elevated reward thresholds (anhedonia)
- Reduced response to natural rewards

*Anti-Reward System Activation:*
- Increased CRF (corticotropin-releasing factor) in amygdala
- Elevated norepinephrine (locus coeruleus)
- Dynorphin (kappa-opioid) system upregulation
- Creates dysphoria and negative emotional state

*Prefrontal Cortex Dysfunction:*
- Reduced gray matter and activity in dorsolateral PFC
- Impaired executive function and impulse control
- Decreased ability to inhibit drug-seeking behavior
- Altered decision-making in orbitofrontal cortex

**DSM-5 Criteria for Substance Use Disorder:**

Diagnosis requires 2+ criteria in 12-month period:
1. Taking larger amounts or longer than intended
2. Persistent desire or unsuccessful efforts to cut down
3. Great deal of time obtaining, using, or recovering
4. Craving
5. Failure to fulfill major role obligations
6. Continued use despite social/interpersonal problems
7. Important activities given up or reduced
8. Use in physically hazardous situations
9. Continued use despite physical/psychological problems
10. Tolerance
11. Withdrawal

Severity: Mild (2-3), Moderate (4-5), Severe (6+)

**Withdrawal Syndromes:**

| Substance | Onset | Duration | Danger Level |
|-----------|-------|----------|--------------|
| Alcohol | 6-24 hrs | 5-7 days | High (seizures, DTs) |
| Opioids | 8-24 hrs | 5-10 days | Uncomfortable, rarely fatal |
| Benzodiazepines | 1-4 days | 2-4 weeks | High (seizures) |
| Stimulants | Hours-days | 1-2 weeks | Low physical danger |
| Cannabis | 1-2 days | 1-2 weeks | Low |

**Risk Factors for Addiction:**

*Genetic (40-60% heritability):*
- Dopamine receptor variants (DRD2)
- Alcohol metabolism genes (ADH, ALDH)
- Opioid receptor polymorphisms

*Environmental:*
- Early age of first use
- Adverse childhood experiences (ACEs)
- Peer substance use
- Availability and access

*Psychiatric Comorbidity:*
- Depression, anxiety, PTSD, ADHD
- 50% of those with mental illness have substance use disorder
- "Self-medication" hypothesis`,
      keyTerms: [
        { term: 'mesocorticolimbic pathway', definition: 'The brain\'s reward circuit connecting VTA, nucleus accumbens, and prefrontal cortex' },
        { term: 'neuroadaptation', definition: 'Changes in brain structure and function in response to repeated drug exposure' },
        { term: 'anti-reward system', definition: 'Brain stress systems that become overactive in addiction, driving negative emotional states' },
        { term: 'CRF', definition: 'Corticotropin-releasing factor; stress hormone elevated in withdrawal and addiction' },
        { term: 'DSM-5', definition: 'Diagnostic and Statistical Manual of Mental Disorders, 5th edition; provides diagnostic criteria' },
      ],
      clinicalNotes: 'Assess for co-occurring mental health conditions in all patients with substance use disorder. Use validated screening tools (AUDIT, DAST, CAGE). Recognize that tolerance and withdrawal alone do not equal addiction (e.g., patients on prescribed opioids for chronic pain).',
    },
    4: {
      level: 4,
      summary: 'Addiction involves a three-stage cycle (binge/intoxication, withdrawal/negative affect, preoccupation/anticipation) with distinct neurobiological substrates, genetic contributions, and epigenetic modifications that perpetuate compulsive use.',
      explanation: `**Three-Stage Cycle Model (Koob & Volkow):**

**Stage 1: Binge/Intoxication**
*Neurobiology:*
- Acute dopamine surge in nucleus accumbens
- Opioid system activation (endogenous opioids)
- Cannabinoid system involvement
- GABA modulation (alcohol, benzodiazepines)

*Key Structures:*
- Ventral striatum (reward)
- Ventral pallidum
- Dorsal striatum (habit formation with chronicity)

*Transition to Habit:*
- Shift from ventral to dorsal striatum
- Goal-directed → stimulus-response behavior
- Compulsive quality emerges

**Stage 2: Withdrawal/Negative Affect**
*Neurobiology:*
- Dopamine deficit state
- CRF elevation in extended amygdala
- Norepinephrine hyperactivity
- Dynorphin/kappa-opioid activation
- Decreased GABA function

*Key Structures:*
- Extended amygdala (central nucleus, BNST)
- Habenula (encodes negative reward prediction)

*Allostatic Shift:*
- Hedonic set point shifts downward
- Use becomes necessary to reach "normal"
- Negative reinforcement dominates

**Stage 3: Preoccupation/Anticipation**
*Neurobiology:*
- Hyperactive glutamatergic projections
- Prefrontal cortex hypofunction
- Enhanced stress reactivity
- Conditioned cue responses

*Key Structures:*
- Prefrontal cortex (OFC, dlPFC, ACC)
- Hippocampus (contextual memory)
- Insula (interoception, craving)
- Basolateral amygdala (cue conditioning)

**Molecular Mechanisms:**

*Transcription Factors:*
- DeltaFosB accumulation in nucleus accumbens
- Persists for weeks-months after cessation
- Increases sensitivity to drugs
- Modulates dendritic spine morphology

*Epigenetic Changes:*
- Histone acetylation at reward gene promoters
- DNA methylation changes
- MicroRNA alterations
- Long-lasting changes in gene expression

*Synaptic Plasticity:*
- LTP and LTD alterations in VTA and NAc
- AMPA receptor trafficking
- Dendritic spine changes
- Metaplasticity effects

**Genetic Architecture:**

*Heritability by Substance:*
- Alcohol: 50-60%
- Opioids: 43-54%
- Cocaine: 42-79%
- Cannabis: 45-78%

*Identified Risk Genes:*
- ADH1B, ALDH2 (alcohol metabolism)
- OPRM1 (mu-opioid receptor)
- CHRNA5 (nicotinic receptor)
- GABRA2 (GABA receptor)
- DRD2/ANKK1 (dopamine)

*Gene-Environment Interaction:*
- MAOA variants moderate effect of childhood maltreatment
- Serotonin transporter interacts with stress exposure
- Importance of developmental timing

**Neurocognitive Deficits:**
- Working memory impairment
- Response inhibition deficits
- Reward-based decision-making dysfunction
- Delayed discounting (preference for immediate rewards)
- Impaired error processing`,
      keyTerms: [
        { term: 'extended amygdala', definition: 'Brain region including central amygdala and BNST; critical for negative emotional states in withdrawal' },
        { term: 'allostasis', definition: 'Process of achieving stability through change; in addiction, refers to shifted homeostatic set point' },
        { term: 'DeltaFosB', definition: 'Transcription factor that accumulates with chronic drug use and increases drug sensitivity' },
        { term: 'delayed discounting', definition: 'Tendency to prefer smaller immediate rewards over larger delayed rewards; elevated in addiction' },
        { term: 'BNST', definition: 'Bed nucleus of the stria terminalis; key structure in extended amygdala for sustained anxiety states' },
      ],
      clinicalNotes: 'The three-stage model helps explain why addiction treatment must address all stages: pharmacotherapy for withdrawal, behavioral interventions for craving and cue reactivity, and long-term support for executive function recovery. Cognitive deficits may persist for months after cessation, affecting treatment engagement.',
    },
    5: {
      level: 5,
      summary: 'Contemporary addiction neuroscience integrates systems-level circuit analysis, precision medicine approaches, and pharmacogenomics to develop targeted interventions across the addiction cycle, with emerging focus on neuromodulation and novel pharmacological targets.',
      explanation: `**Systems Neuroscience Framework:**

*Circuit-Based Targets:*

**Reward/Saliency Circuit (binge stage):**
- VTA → NAc dopamine projection
- Therapeutic targets: D2 partial agonists, opioid antagonists
- Neuromodulation: DBS to NAc (experimental)

**Stress/Anti-Reward Circuit (withdrawal stage):**
- CRF-CRF1 receptor antagonists (unsuccessful to date)
- Kappa-opioid receptor antagonists (promising)
- Alpha-2 agonists (clonidine, lofexidine)
- Glucocorticoid receptor modulation

**Executive/Cognitive Circuit (preoccupation stage):**
- Prefrontal cortex-targeted interventions
- Cognitive enhancers (modafinil, mixed results)
- TMS to dlPFC (under investigation)
- Cognitive remediation therapy

**Precision Medicine Approaches:**

*Pharmacogenomics in Practice:*
- OPRM1 A118G: Reduced naltrexone response in Asp40 carriers
- ADH1B/ALDH2: Protective variants more common in Asian populations
- DRD4 VNTR: Moderates response to behavioral interventions
- CYP2B6: Affects bupropion metabolism for smoking cessation

*Biomarker Development:*
- PET imaging: D2/D3 receptor availability, dopamine release
- fMRI: Cue-reactivity patterns, resting-state connectivity
- EEG: Error-related negativity, reward positivity
- Blood-based: Metabolomics, inflammatory markers

**Novel Pharmacological Targets:**

*Glutamatergic Modulation:*
- N-acetylcysteine (NAC): Restores glutamate homeostasis
- Gabapentin/pregabalin: Modulate glutamate release
- Ketamine: Emerging interest for alcohol use disorder

*GABA System:*
- GABA-B agonists (baclofen): Alcohol, cocaine (mixed results)
- Positive allosteric modulators (fewer abuse liability than benzodiazepines)

*Orexin/Hypocretin System:*
- Orexin receptor antagonists (suvorexant-like drugs)
- Reduce stress-induced relapse in animal models
- Human trials ongoing

*Cannabinoid System:*
- CBD: Reduces cue-induced craving
- FAAH inhibitors: Enhance endocannabinoid signaling

**Neuromodulation:**

*Transcranial Magnetic Stimulation (TMS):*
- FDA-approved for smoking cessation (H-coil to insula/PFC)
- Under investigation for cocaine, alcohol, opioids
- Targets dlPFC for executive function, insula for craving

*Transcranial Direct Current Stimulation (tDCS):*
- Anodal stimulation to dlPFC
- Reduces craving in short-term studies
- Cost-effective, scalable

*Deep Brain Stimulation (DBS):*
- Nucleus accumbens targeting
- Case reports/small series for refractory addiction
- Ethical considerations significant

**Implementation Science:**

*Treatment Integration:*
- SBIRT (Screening, Brief Intervention, Referral to Treatment)
- Medication for opioid use disorder (MOUD) in primary care
- Collaborative care models
- Telehealth for medication management

*Stigma Reduction:*
- Language matters: "Person with substance use disorder" vs "addict"
- Addiction as medical condition framing
- Criminalization vs public health approaches
- Harm reduction integration

**Current Research Priorities:**

*NIH HEAL Initiative Focus Areas:*
1. Enhanced overdose reversal strategies
2. Novel pain management (reduce opioid need)
3. Medications development for OUD and stimulant use
4. Implementation science for evidence-based treatment

*Emerging Directions:*
- Psychedelic-assisted therapy (psilocybin for alcohol use disorder)
- Vaccine development (anti-drug antibodies)
- Gene therapy approaches
- Digital therapeutics and mobile interventions
- Precision matching of treatment to patient characteristics`,
      keyTerms: [
        { term: 'pharmacogenomics', definition: 'Study of how genetic variants affect drug response; emerging in addiction treatment' },
        { term: 'SBIRT', definition: 'Screening, Brief Intervention, and Referral to Treatment; evidence-based approach for primary care' },
        { term: 'HEAL Initiative', definition: 'NIH Helping to End Addiction Long-term; major federal research initiative' },
        { term: 'harm reduction', definition: 'Approach focusing on reducing negative consequences of substance use without requiring abstinence' },
        { term: 'orexin system', definition: 'Neuropeptide system involved in arousal and reward; emerging target for addiction treatment' },
      ],
      clinicalNotes: `Current evidence-based approaches:
- Medications for OUD (buprenorphine, methadone, naltrexone) reduce mortality by 50%+
- Medications for alcohol use disorder (naltrexone, acamprosate, disulfiram) significantly reduce drinking
- Varenicline is most effective pharmacotherapy for nicotine dependence
- No FDA-approved medications for stimulant use disorder (contingency management has best evidence)
- Combination of medication + behavioral treatment is optimal for most patients
- Treatment retention is a major challenge; each retention strategy matters
- Low-threshold access to treatment saves lives (same-day starts, walk-in clinics)`,
    },
  },

  media: [
    {
      id: 'brain-reward-system-diagram',
      type: 'diagram',
      filename: 'brain_reward_system.svg',
      title: 'The Brain\'s Reward System',
      description: 'Illustration of the mesocorticolimbic dopamine pathway and how drugs of abuse affect it',
    },
    {
      id: 'addiction-cycle-diagram',
      type: 'diagram',
      filename: 'three_stage_addiction_cycle.svg',
      title: 'Three-Stage Cycle of Addiction',
      description: 'Koob and Volkow model showing binge/intoxication, withdrawal/negative affect, and preoccupation/anticipation stages',
    },
  ],

  citations: [
    {
      id: 'koob-volkow-2016',
      type: 'article',
      title: 'Neurobiology of addiction: a neurocircuitry analysis',
      authors: ['Koob GF', 'Volkow ND'],
      source: 'Lancet Psychiatry',
      chapter: '3(8):760-773',
      accessedDate: '2025-01-24',
    },
    {
      id: 'nida-drugs-brain',
      type: 'website',
      title: 'Drugs, Brains, and Behavior: The Science of Addiction',
      source: 'National Institute on Drug Abuse',
      url: 'https://nida.nih.gov/publications/drugs-brains-behavior-science-addiction',
      accessedDate: '2025-01-24',
    },
    {
      id: 'dsm5-sud',
      type: 'textbook',
      title: 'Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition',
      authors: ['American Psychiatric Association'],
      source: 'American Psychiatric Publishing',
      chapter: 'Substance-Related and Addictive Disorders',
    },
  ],

  crossReferences: [
    { targetId: 'substance-use-alcohol', targetType: 'topic', relationship: 'related', label: 'Alcohol Use Disorder' },
    { targetId: 'substance-use-opioids', targetType: 'topic', relationship: 'related', label: 'Opioid Use Disorder' },
    { targetId: 'substance-use-treatment', targetType: 'topic', relationship: 'see-also', label: 'Treatment Options' },
    { targetId: 'psychiatry-brain-chemistry', targetType: 'concept', relationship: 'see-also', label: 'Brain Chemistry and Mental Health' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['psychiatry', 'substance use', 'addiction medicine', 'neuroscience'],
    keywords: ['addiction', 'substance use disorder', 'dopamine', 'withdrawal', 'tolerance', 'recovery'],
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
  contributors: ['Biological Self Content Team'],
};

export default understandingAddictionContent;
