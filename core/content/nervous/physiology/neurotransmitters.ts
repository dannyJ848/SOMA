/**
 * Neurotransmitters
 *
 * Chemical messengers of the nervous system including synthesis,
 * release, receptor binding, and termination of signaling.
 */

import { EducationalContent } from '../../types';

export const NEUROTRANSMITTERS: EducationalContent = {
  id: 'nervous-neurotransmitters',
  type: 'concept',
  name: 'Neurotransmitters',
  alternateNames: ['Chemical messengers', 'Neural signaling molecules', 'Synaptic transmitters'],

  levels: {
    1: {
      level: 1,
      summary: 'Neurotransmitters are chemical messengers that carry signals between nerve cells, controlling everything from muscle movement to mood and memory.',
      explanation: `**What Are Neurotransmitters?**

Neurotransmitters are chemicals that nerve cells use to talk to each other. When a nerve signal reaches the end of a nerve cell, it triggers the release of these chemicals, which then affect the next cell.

**Major Neurotransmitters:**

1. **Acetylcholine**
   - Controls muscle movement
   - Important for memory and attention
   - Lost in Alzheimer's disease

2. **Dopamine**
   - Involved in pleasure and reward
   - Controls movement
   - Linked to Parkinson's disease and addiction

3. **Serotonin**
   - Affects mood and sleep
   - Involved in appetite
   - Target of many antidepressants

4. **Norepinephrine**
   - Part of the "fight or flight" response
   - Affects alertness and attention
   - Involved in stress responses

5. **GABA**
   - The main "calming" chemical
   - Reduces brain activity
   - Target of anti-anxiety medications

6. **Glutamate**
   - The main "activating" chemical
   - Important for learning and memory
   - Too much can damage brain cells

**How They Work:**

1. Stored in tiny packets (vesicles) at nerve endings
2. Released when a nerve signal arrives
3. Cross the tiny gap (synapse) to the next cell
4. Bind to receptors on the next cell
5. Cause that cell to either fire or not fire
6. Are then removed or broken down

**Why This Matters:**

- Many drugs work by affecting neurotransmitters
- Mental health conditions involve neurotransmitter imbalances
- Understanding helps explain addiction, mood, and movement`,
      keyTerms: [
        { term: 'dopamine', definition: 'A neurotransmitter involved in pleasure, reward, and movement control' },
        { term: 'serotonin', definition: 'A neurotransmitter that affects mood, sleep, and appetite' },
        { term: 'GABA', definition: 'The main inhibitory neurotransmitter that calms brain activity' },
        { term: 'receptor', definition: 'A protein on a cell that a neurotransmitter binds to, triggering a response' },
      ],
      analogies: [
        'Neurotransmitters are like text messages between cells - each one carries a specific type of instruction.',
        'GABA is like the brakes on a car, while glutamate is like the gas pedal.',
      ],
      examples: [
        'Caffeine works by blocking the effects of adenosine, a neurotransmitter that makes you sleepy.',
        'SSRIs (like Prozac) work by keeping serotonin active longer, helping with depression.',
      ],
    },
    2: {
      level: 2,
      summary: 'Neurotransmitters are classified by their chemical structure and function, with distinct synthesis, release, receptor binding, and inactivation mechanisms that are targets for pharmacological intervention.',
      explanation: `**Classification:**

*By Chemical Structure:*
| Category | Examples |
|----------|----------|
| Amino acids | Glutamate, GABA, glycine |
| Monoamines | Dopamine, norepinephrine, serotonin |
| Acetylcholine | Acetylcholine |
| Peptides | Endorphins, substance P |
| Purines | Adenosine, ATP |
| Gases | Nitric oxide |

*By Function:*
| Type | Effect | Main Examples |
|------|--------|---------------|
| Excitatory | Promote firing | Glutamate |
| Inhibitory | Prevent firing | GABA, glycine |
| Modulatory | Modify responses | Dopamine, serotonin |

**Acetylcholine:**

*Synthesis:*
- Choline + Acetyl-CoA → ACh (via choline acetyltransferase)

*Locations:*
- Neuromuscular junction (muscle control)
- Autonomic ganglia
- Parasympathetic endings
- Basal forebrain (memory)

*Receptors:*
| Type | Mechanism | Location |
|------|-----------|----------|
| Nicotinic | Ion channel (Na+, K+) | NMJ, autonomic ganglia |
| Muscarinic (M1-5) | G-protein coupled | Heart, smooth muscle, brain |

*Termination:*
- Acetylcholinesterase breaks down ACh rapidly

**Catecholamines (DA, NE, Epi):**

*Synthesis Pathway:*
\`\`\`
Tyrosine → L-DOPA → Dopamine → Norepinephrine → Epinephrine
   TH        AADC       DBH           PNMT
\`\`\`

*Dopamine:*
- Pathways: Nigrostriatal (movement), mesolimbic (reward), mesocortical (cognition)
- Receptors: D1-5 (all G-protein coupled)
- Termination: Reuptake (DAT), MAO, COMT

*Norepinephrine:*
- Locations: Locus coeruleus, sympathetic neurons
- Receptors: α1, α2, β1, β2, β3
- Functions: Alertness, stress response

**Serotonin (5-HT):**

*Synthesis:*
- Tryptophan → 5-HTP → Serotonin
- TPH is rate-limiting enzyme

*Locations:*
- Raphe nuclei (brainstem)
- GI tract (95% of body's serotonin)

*Receptors:*
- 14+ subtypes (5-HT1A, 5-HT2A, 5-HT3, etc.)
- Most are G-protein coupled
- 5-HT3 is an ion channel

*Termination:*
- Reuptake (SERT) - target of SSRIs
- MAO breakdown

**Amino Acid Transmitters:**

*Glutamate (excitatory):*
| Receptor | Type | Function |
|----------|------|----------|
| AMPA | Ion channel | Fast EPSP |
| NMDA | Ion channel | Plasticity, learning |
| Kainate | Ion channel | Modulatory |
| mGluR | G-protein | Modulatory |

*GABA (inhibitory):*
| Receptor | Type | Function |
|----------|------|----------|
| GABA-A | Ion channel (Cl-) | Fast IPSP |
| GABA-B | G-protein | Slow IPSP |

**Clinical Correlations:**

| Condition | Neurotransmitter Change |
|-----------|------------------------|
| Parkinson's | ↓Dopamine (substantia nigra) |
| Depression | May involve ↓5-HT, NE |
| Anxiety | May involve ↓GABA function |
| Schizophrenia | ↑Dopamine (mesolimbic) |
| Myasthenia gravis | Antibodies to ACh receptors |
| Alzheimer's | ↓ACh (basal forebrain) |`,
      keyTerms: [
        { term: 'monoamines', definition: 'Class of neurotransmitters including dopamine, norepinephrine, and serotonin' },
        { term: 'DAT', definition: 'Dopamine transporter; reuptakes dopamine from synapse' },
        { term: 'SERT', definition: 'Serotonin transporter; target of SSRI antidepressants' },
        { term: 'NMDA receptor', definition: 'Glutamate receptor important for learning and memory' },
      ],
      analogies: [
        'The catecholamine synthesis pathway is like an assembly line - each enzyme adds to the previous product.',
        'Reuptake transporters are like recycling systems - they recover neurotransmitter for reuse.',
      ],
    },
    3: {
      level: 3,
      summary: 'Neurotransmitter systems involve regulated synthesis, vesicular storage, calcium-triggered release, receptor signal transduction, and precise termination mechanisms that provide targets for therapeutic intervention.',
      explanation: `**Synthesis Regulation:**

*Catecholamine Synthesis:*
\`\`\`
Tyrosine Hydroxylase (TH):
- Rate-limiting enzyme
- Requires BH4 cofactor
- Inhibited by catecholamines (end-product)
- Phosphorylation increases activity
- Regulated by neuronal activity
\`\`\`

*Serotonin Synthesis:*
| Enzyme | Isoform | Location |
|--------|---------|----------|
| TPH1 | Peripheral | GI tract, pineal |
| TPH2 | Central | Raphe nuclei |

Tryptophan is essential amino acid → dietary influence on 5-HT

**Vesicular Storage:**

*Vesicular Transporters:*
| Transporter | Substrates | Inhibitors |
|-------------|------------|------------|
| VMAT2 | DA, NE, 5-HT, histamine | Reserpine |
| VAChT | ACh | Vesamicol |
| VGAT | GABA, glycine | - |
| VGLUT | Glutamate | - |

*Vesicle Function:*
- Concentrate neurotransmitter (10,000x)
- Protect from degradation
- Ready-releasable pool

**Release Mechanisms:**

*Calcium-Dependent Exocytosis:*
\`\`\`
Action potential → Cav2.1/2.2 opening
    ↓
Ca2+ influx (localized)
    ↓
Ca2+ binds synaptotagmin
    ↓
SNARE complex zippering
    ↓
Membrane fusion
    ↓
Neurotransmitter release
\`\`\`

*Quantal Release:*
- Neurotransmitter released in packets (quanta)
- Each vesicle = one quantum
- Mini EPSPs/IPSPs from spontaneous release

**Receptor Pharmacology:**

*Dopamine Receptors:*
| Family | Members | G-protein | Effect |
|--------|---------|-----------|--------|
| D1-like | D1, D5 | Gs | ↑cAMP |
| D2-like | D2, D3, D4 | Gi | ↓cAMP |

*Serotonin Receptor Diversity:*
| Receptor | Coupling | Key Function |
|----------|----------|--------------|
| 5-HT1A | Gi | Autoreceptor, anxiety |
| 5-HT2A | Gq | Hallucinogen target |
| 5-HT2C | Gq | Appetite, mood |
| 5-HT3 | Ion channel | Nausea/vomiting |
| 5-HT4 | Gs | GI motility |

*GABA-A Receptor Complexity:*
\`\`\`
Subunit Composition:
- Pentameric (5 subunits)
- Multiple α, β, γ, δ subunits
- Most common: α1β2γ2

Binding Sites:
- GABA site (agonist)
- Benzodiazepine site (α/γ interface)
- Barbiturate site
- Alcohol site
- Steroid site
\`\`\`

**Termination Mechanisms:**

*Reuptake:*
| Transporter | Neurotransmitter | Drug Targets |
|-------------|------------------|--------------|
| DAT | Dopamine | Cocaine, amphetamine |
| NET | Norepinephrine | Tricyclics, SNRIs |
| SERT | Serotonin | SSRIs, TCAs |
| GAT1 | GABA | Tiagabine |
| EAAT | Glutamate | - |

*Enzymatic Degradation:*
| Enzyme | Substrate | Location |
|--------|-----------|----------|
| AChE | ACh | Synaptic cleft |
| MAO-A | NE, 5-HT | Mitochondria |
| MAO-B | Dopamine | Mitochondria |
| COMT | Catecholamines | Synaptic/intracellular |

**Neuromodulation:**

*Characteristics:*
- Slower, longer-lasting effects
- Diffuse release (volume transmission)
- G-protein coupled receptors
- Modify responses to other transmitters

*Examples:*
| Modulator | Source | Function |
|-----------|--------|----------|
| Dopamine | VTA, SN | Reward, motivation |
| Norepinephrine | LC | Arousal, attention |
| Serotonin | Raphe | Mood, satiety |
| Acetylcholine | BF, PPT | Attention, memory |
| Histamine | TMN | Wakefulness |`,
      keyTerms: [
        { term: 'VMAT2', definition: 'Vesicular monoamine transporter 2; loads dopamine, NE, 5-HT into vesicles' },
        { term: 'autoreceptor', definition: 'Presynaptic receptor that provides negative feedback on transmitter release' },
        { term: 'volume transmission', definition: 'Diffuse, non-synaptic neurotransmitter release affecting broader regions' },
        { term: 'COMT', definition: 'Catechol-O-methyltransferase; degrades catecholamines' },
      ],
      clinicalNotes: 'COMT inhibitors (entacapone) extend L-DOPA effects in Parkinson disease. MAO-B inhibitors (selegiline, rasagiline) reduce dopamine breakdown. 5-HT2A antagonism contributes to atypical antipsychotic effects. GABA-A receptor subunit composition determines drug sensitivity (e.g., α1 for sedation, α2/3 for anxiolysis).',
    },
    4: {
      level: 4,
      summary: 'Advanced neurotransmitter pharmacology encompasses receptor subtypes and their specific roles, cotransmission, peptide signaling, and the synaptic mechanisms underlying neurological and psychiatric disorders.',
      explanation: `**Receptor Subtypes and Function:**

*Dopamine D2 Receptor Variants:*
\`\`\`
D2 Long (D2L):
- Predominantly postsynaptic
- Target of antipsychotics
- Striatum, prefrontal cortex

D2 Short (D2S):
- Predominantly presynaptic autoreceptor
- Regulates DA release
- Alternative splicing product
\`\`\`

*Glutamate Receptor Details:*
| Receptor | Subunits | Unique Properties |
|----------|----------|-------------------|
| AMPA | GluA1-4 | GluA2 determines Ca2+ permeability |
| NMDA | GluN1 + GluN2A-D | Requires glycine co-agonist |
| Kainate | GluK1-5 | Pre- and postsynaptic |

*NMDA Receptor Complexity:*
\`\`\`
Requirements for Activation:
1. Glutamate binding (GluN2)
2. Glycine/D-serine binding (GluN1)
3. Membrane depolarization (Mg2+ removal)

Properties:
- High Ca2+ permeability
- Slow kinetics
- Coincidence detector
- Key for LTP/LTD
\`\`\`

**Cotransmission:**

*Classical Cotransmitter Pairs:*
| Neuron Type | Primary | Cotransmitter |
|-------------|---------|---------------|
| Sympathetic | NE | NPY, ATP |
| Parasympathetic | ACh | VIP |
| Motor neuron | ACh | Glutamate |
| GABA interneurons | GABA | Various peptides |
| Dopaminergic | DA | Glutamate (some) |

*Functional Implications:*
- Different release dynamics
- Distinct postsynaptic effects
- Activity-dependent differential release

**Neuropeptides:**

*Opioid System:*
| Peptide | Precursor | Receptor Preference |
|---------|-----------|---------------------|
| β-endorphin | POMC | μ |
| Enkephalins | Proenkephalin | δ |
| Dynorphins | Prodynorphin | κ |

*Pain and Reward Peptides:*
| Peptide | Function |
|---------|----------|
| Substance P | Pain transmission |
| CGRP | Vasodilation, migraine |
| Orexin/hypocretin | Arousal, appetite |
| Oxytocin | Social bonding |
| Vasopressin | Social behavior, stress |

**Synaptic Pathology:**

*Parkinson's Disease:*
\`\`\`
Pathophysiology:
- Loss of dopaminergic neurons (SNpc)
- >60% loss before symptoms
- Lewy bodies (α-synuclein)

Synaptic Changes:
- Decreased DA in striatum
- D2 receptor supersensitivity
- Altered corticostriatal plasticity
\`\`\`

*Schizophrenia - Dopamine Hypothesis:*
| Circuit | DA State | Symptoms |
|---------|----------|----------|
| Mesolimbic | ↑ | Positive (hallucinations) |
| Mesocortical | ↓ | Negative/cognitive |
| Tuberoinfundibular | ↓ (drug-induced) | Hyperprolactinemia |

*Glutamate Hypothesis (Schizophrenia):*
- NMDA receptor hypofunction
- PCP, ketamine model psychosis
- Explains cognitive symptoms
- Novel drug targets

**Pharmacological Targets:**

*Antidepressant Mechanisms:*
| Class | Primary Target | Secondary Effects |
|-------|----------------|-------------------|
| SSRIs | SERT | 5-HT receptor changes |
| SNRIs | SERT + NET | NE effects |
| MAOIs | MAO-A, MAO-B | Multiple monoamines |
| TCAs | NET > SERT | Receptor blocking |

*Adaptive Changes:*
\`\`\`
Chronic SSRI Treatment:
Week 1-2: SERT blocked, 5-HT increased
↓
Autoreceptor (5-HT1A) downregulation
↓
Enhanced 5-HT release
↓
Postsynaptic receptor changes
↓
Clinical improvement (weeks)
\`\`\`

*Ketamine/Esketamine:*
\`\`\`
Mechanism:
- NMDA receptor blockade
- Rapid (hours) antidepressant effect
- Triggers glutamate release
- AMPA receptor activation
- BDNF release
- Synaptogenesis

Clinical:
- Treatment-resistant depression
- Rapid onset vs traditional agents
\`\`\`

**Addiction Neurobiology:**

*Reward Circuit:*
\`\`\`
VTA (dopamine) → NAc → PFC

Drug Effects:
- Cocaine: DAT blockade
- Amphetamine: Reverse DAT, VMAT release
- Opioids: Disinhibit VTA (via GABA neurons)
- Alcohol: Multiple (GABA, glutamate, opioid)
\`\`\`

*Plasticity in Addiction:*
| Change | Location | Consequence |
|--------|----------|-------------|
| LTP in VTA | DA neurons | Sensitization |
| LTD in NAc | D2-MSNs | Compulsive seeking |
| PFC changes | Glutamatergic | Impaired control |`,
      keyTerms: [
        { term: 'cotransmission', definition: 'Release of multiple neurotransmitters from the same neuron' },
        { term: 'GluA2', definition: 'AMPA receptor subunit that, when present, reduces calcium permeability' },
        { term: 'POMC', definition: 'Pro-opiomelanocortin; precursor to β-endorphin and other peptides' },
        { term: 'autoreceptor desensitization', definition: 'Reduced autoreceptor function with chronic agonist, enhancing release' },
      ],
      clinicalNotes: 'The lag in antidepressant efficacy relates to receptor adaptation over weeks. NMDA receptor antagonists (ketamine) work rapidly through different mechanisms. Parkinson treatment aims to restore dopaminergic tone while avoiding motor complications. Understanding cotransmission explains why blocking one system often has complex effects.',
    },
    5: {
      level: 5,
      summary: 'Expert understanding of neurotransmitter systems encompasses advanced pharmacogenomics, novel therapeutic targets, circuit-specific neuromodulation, and the molecular basis of neuropsychiatric therapeutics.',
      explanation: `**Pharmacogenomics:**

*Genetic Variability in Drug Response:*
| Gene | Variants | Clinical Impact |
|------|----------|-----------------|
| CYP2D6 | PM, IM, NM, UM | TCA, SSRI metabolism |
| CYP2C19 | PM, NM, RM | Citalopram, clopidogrel |
| COMT | Val158Met | Prefrontal DA, cognition |
| SLC6A4 (SERT) | 5-HTTLPR | SSRI response (debated) |
| HTR2A | rs7997012 | Antidepressant response |

*Clinical Implementation:*
\`\`\`
CYP2D6 Poor Metabolizer:
- Higher drug levels
- Increased side effects
- Consider dose reduction or alternative

CYP2D6 Ultrarapid Metabolizer:
- Lower drug levels
- Reduced efficacy
- Consider dose increase or alternative

FDA Guidelines:
- Dosing recommendations in drug labels
- CPIC guidelines available
\`\`\`

**Novel Therapeutic Targets:**

*Psychedelic Mechanisms:*
| Compound | Primary Target | Therapeutic Potential |
|----------|----------------|----------------------|
| Psilocybin | 5-HT2A agonist | Depression, addiction |
| MDMA | 5-HT/DA/NE release | PTSD |
| LSD | 5-HT2A, D2 | Under investigation |

*5-HT2A Signaling Complexity:*
\`\`\`
Biased Agonism:
- Different agonists activate different pathways
- G-protein vs β-arrestin signaling
- May explain psychedelic vs non-hallucinogenic effects

New Drug Development:
- Non-hallucinogenic 5-HT2A agonists
- Therapeutic effects without perceptual disturbance
- TBG, tabernanthalog
\`\`\`

*TAAR1 (Trace Amine-Associated Receptor 1):*
| Feature | Details |
|---------|---------|
| Ligands | Trace amines, amphetamines |
| Distribution | VTA, prefrontal cortex |
| Effects | Modulates DA, glutamate |
| Drugs | Ulotaront (schizophrenia trials) |

**Circuit-Specific Neuromodulation:**

*Optogenetic Dissection:*
\`\`\`
Example: Depression Circuits
- VTA DA neurons to NAc: Reward/anhedonia
- Lateral habenula: Aversion, punishment
- mPFC: Cognitive control

Findings:
- Activating VTA→NAc: Pro-resilience
- Inhibiting lateral habenula: Antidepressant-like
- Circuit-specific interventions
\`\`\`

*DBS Targets for Psychiatry:*
| Target | Indication | Evidence |
|--------|------------|----------|
| SCC (Area 25) | Depression | Mixed trials |
| NAc | OCD, depression | Case series |
| VC/VS | OCD | FDA approved |
| MFB | Depression | Preliminary |

**Synaptic Plasticity and Therapeutics:**

*Rapid Antidepressants:*
\`\`\`
Ketamine Mechanism (Refined):
1. NMDA blockade on GABA interneurons
2. Disinhibition of glutamate neurons
3. AMPA receptor activation
4. BDNF release
5. mTORC1 activation
6. Synaptogenesis (hours)

Alternatives in Development:
- AMPA potentiators
- mGluR modulators
- GABA-NAM
- 5-HT2A agonists
\`\`\`

*Psychoplastogens:*
- Compounds promoting neural plasticity
- Potential for rapid, lasting effects
- Challenge: Maintain plasticity benefits
- Avoid side effects (hallucinogenic, abuse)

**Neuroinflammation and Neurotransmitters:**

*Cytokine Effects:*
| Cytokine | NT Effect |
|----------|-----------|
| IL-1β, IL-6, TNF-α | ↑IDO → ↓tryptophan → ↓5-HT |
| IL-1β | ↑glutamate release |
| TNF-α | ↓BDNF |

*Clinical Implications:*
- Inflammation-depression link
- CRP predicts SSRI response
- Anti-inflammatory adjuncts
- Immunomodulatory strategies

**Precision Psychiatry:**

*Biomarker Development:*
| Biomarker | Application | Status |
|-----------|-------------|--------|
| CRP | Treatment selection | Clinical |
| EEG biomarkers | Antidepressant response | Research |
| Neuroimaging | Treatment prediction | Research |
| Genetic panels | Drug metabolism | Clinical |

*Future Directions:*
\`\`\`
Integrated Approach:
- Genetics (pharmacogenomics)
- Imaging (circuit function)
- Biomarkers (inflammation, HPA)
- Clinical features
↓
Individualized Treatment Selection
\`\`\`

**Emerging Concepts:**

*Gut-Brain Axis:*
- Gut microbiome produces neurotransmitters
- 5-HT: 90% made in gut
- GABA, dopamine production
- Vagal signaling

*Glial Involvement:*
| Cell Type | Function |
|-----------|----------|
| Astrocytes | Glutamate uptake, gliotransmission |
| Microglia | Neuroinflammation, synaptic pruning |
| Oligodendrocytes | Myelination, metabolic support |

*Extrasynaptic Transmission:*
- GABA spillover to extrasynaptic receptors
- Tonic inhibition (δ-containing GABA-A)
- Different pharmacology (neurosteroids)
- Target for anxiety, epilepsy`,
      keyTerms: [
        { term: 'biased agonism', definition: 'Ligands activating specific downstream pathways at a receptor' },
        { term: 'psychoplastogen', definition: 'Compound that rapidly promotes neural plasticity' },
        { term: 'TAAR1', definition: 'Trace amine-associated receptor 1; novel target for schizophrenia' },
        { term: 'tonic inhibition', definition: 'Sustained GABA-A receptor activation by ambient GABA' },
      ],
      clinicalNotes: 'Pharmacogenomic testing is increasingly standard for psychiatric prescribing. Psilocybin has received breakthrough therapy designation for depression. Ketamine/esketamine demonstrates that rapid synaptic plasticity can produce rapid antidepressant effects. The gut-brain axis represents a frontier for novel interventions. Understanding circuit-specific neuromodulation informs both drug development and neuromodulation therapies.',
    },
  },

  media: [
    {
      id: 'neurotransmitters-1',
      type: 'diagram',
      filename: 'neurotransmitter-pathways.svg',
      title: 'Major Neurotransmitter Pathways',
      description: 'Brain circuits using major neurotransmitter systems',
    },
    {
      id: 'synapse-detail-1',
      type: 'diagram',
      filename: 'synaptic-transmission-detail.svg',
      title: 'Synaptic Transmission Mechanisms',
      description: 'Detailed view of transmitter release and action',
    },
  ],

  citations: [
    {
      id: 'stahl-neuropharmacology',
      type: 'textbook',
      title: 'Stahl\'s Essential Psychopharmacology',
      authors: ['Stahl, SM'],
      source: 'Cambridge University Press',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'nervous-neurophysiology-basics', targetType: 'concept', relationship: 'related', label: 'Neurophysiology Basics' },
    { targetId: 'nervous-nerve-conduction', targetType: 'concept', relationship: 'related', label: 'Nerve Conduction' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['neuroscience', 'pharmacology'],
    keywords: ['neurotransmitter', 'dopamine', 'serotonin', 'GABA', 'glutamate', 'synapse', 'receptor'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'psychiatry', 'pharmacology'],
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
