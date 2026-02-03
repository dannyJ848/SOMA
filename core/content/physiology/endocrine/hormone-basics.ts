/**
 * Hormone Basics - Endocrine Physiology
 *
 * Comprehensive coverage of hormone signaling fundamentals:
 * - Chemical classification of hormones
 * - Receptor types and signal transduction
 * - Feedback loops and regulatory mechanisms
 * - Hormone transport and metabolism
 */

import { EducationalContent } from '../../types';

export const HORMONE_BASICS: EducationalContent = {
  id: 'physiology-hormone-basics',
  type: 'concept',
  name: 'Hormone Basics and Feedback Loops',
  alternateNames: ['Endocrine Signaling Fundamentals', 'Hormonal Regulation'],

  levels: {
    1: {
      level: 1,
      summary: 'Hormones are chemical messengers that travel through your blood to tell different parts of your body what to do, like speeding up or slowing down.',
      explanation: `**What Are Hormones?**
Think of hormones as text messages sent through your bloodstream. Special glands make these messages and send them out, and cells throughout your body "read" them and respond.

**How Hormones Work:**
1. A gland releases a hormone into your blood
2. The hormone travels throughout your body
3. Only certain cells can "read" the message (they have special receivers called receptors)
4. Those cells change what they're doing based on the message

**Types of Hormone Messages:**
- **Speed up**: Make your heart beat faster, give you energy
- **Slow down**: Help you calm down and rest
- **Build up**: Help you grow taller or build muscle
- **Break down**: Help your body use stored energy

**Feedback Loops - The Body's Thermostat:**
Your body uses feedback loops to keep hormone levels just right, like a thermostat:
- When the room (your body) gets cold, the heater (hormone gland) turns on
- When it gets warm enough, the heater turns off
- This keeps the temperature (hormone level) steady

**Why This Matters:**
- Too much or too little of a hormone can make you feel sick
- Doctors check hormone levels to find problems
- Many medicines work by changing how hormones work`,
      keyTerms: [
        { term: 'hormone', definition: 'A chemical messenger made by glands that travels in your blood to tell cells what to do' },
        { term: 'gland', definition: 'A part of your body that makes and releases hormones or other substances' },
        { term: 'receptor', definition: 'A special part on cells that can receive hormone messages, like a lock that fits a specific key' },
        { term: 'feedback loop', definition: 'A system where the result of something affects whether it keeps happening, like a thermostat' },
      ],
      analogies: [
        'Hormones are like text messages sent through your bloodstream - only phones (cells) with the right app (receptor) can read them.',
        'Feedback loops are like a thermostat - when your house gets warm enough, the heater turns off automatically.',
        'Glands are like factories that make and ship hormone messages to the whole body.',
      ],
      examples: [
        'When you eat sugar, your pancreas sends insulin (a hormone) to tell cells to absorb the sugar.',
        'When you get scared, your adrenal glands release adrenaline to help you run faster.',
        'Growth hormone helps children grow taller during sleep.',
      ],
    },
    2: {
      level: 2,
      summary: 'Hormones are signaling molecules produced by endocrine glands that regulate metabolism, growth, and reproduction through specific receptor interactions and negative feedback mechanisms.',
      explanation: `**Chemical Classes of Hormones:**

| Class | Made From | Examples | How They Work |
|-------|-----------|----------|---------------|
| Peptide/Protein | Amino acids | Insulin, Growth hormone, TSH | Bind to cell surface receptors |
| Steroid | Cholesterol | Cortisol, Estrogen, Testosterone | Enter cells and change gene activity |
| Amine | Single amino acids | Thyroid hormones, Adrenaline | Both surface and nuclear receptors |

**Receptor Types:**

1. **Cell Surface Receptors** (water-soluble hormones)
   - G-protein coupled receptors (most common)
   - Tyrosine kinase receptors (insulin, growth factors)
   - Work in seconds to minutes

2. **Nuclear Receptors** (fat-soluble hormones)
   - Located inside cells
   - Change which genes are turned on/off
   - Work in hours to days

**Feedback Loop Types:**

**Negative Feedback (most common):**
- High hormone levels signal to stop making more
- Example: High thyroid hormone tells the brain to stop stimulating the thyroid
- Purpose: Maintains balance (homeostasis)

**Positive Feedback (rare):**
- High levels signal to make even more
- Example: During childbirth, oxytocin causes contractions, which releases more oxytocin
- Purpose: Drives a process to completion

**Hormone Axes:**
Many hormones work in chains called axes:
- Hypothalamus releases hormone A
- This tells the pituitary to release hormone B
- This tells a target gland to release hormone C
- Hormone C feeds back to turn off the hypothalamus and pituitary

**Common Hormone Axes:**
- HPT: Hypothalamus-Pituitary-Thyroid
- HPA: Hypothalamus-Pituitary-Adrenal
- HPG: Hypothalamus-Pituitary-Gonadal`,
      keyTerms: [
        { term: 'peptide hormone', definition: 'A hormone made of amino acid chains that cannot enter cells directly', pronunciation: 'PEP-tide' },
        { term: 'steroid hormone', definition: 'A hormone made from cholesterol that can pass through cell membranes' },
        { term: 'negative feedback', definition: 'When high hormone levels signal the body to produce less hormone' },
        { term: 'positive feedback', definition: 'When high hormone levels signal the body to produce even more hormone' },
        { term: 'hormone axis', definition: 'A chain of glands that signal each other to regulate hormone levels' },
      ],
      analogies: [
        'A hormone axis is like a chain of command - the general (hypothalamus) tells the captain (pituitary) who tells the soldiers (target gland).',
        'Negative feedback is like cruise control in a car - when you go too fast, it automatically slows down.',
        'Nuclear receptors are like doors with keys - steroid hormones have the key to enter the nucleus.',
      ],
    },
    3: {
      level: 3,
      summary: 'Endocrine signaling involves hormone biosynthesis, transport via binding proteins, receptor-mediated signal transduction through second messenger cascades or nuclear transcription factors, and termination via negative feedback loops at multiple levels of the hypothalamic-pituitary axis.',
      explanation: `**Hormone Biosynthesis:**

*Peptide Hormones:*
1. Gene transcription → mRNA
2. Translation → preprohormone
3. Signal peptide cleavage → prohormone
4. Proteolytic processing → active hormone
5. Storage in secretory granules
6. Regulated exocytosis upon stimulation

*Steroid Hormones:*
1. Cholesterol uptake (LDL receptors, StAR protein)
2. Side chain cleavage (CYP11A1)
3. Sequential hydroxylation reactions
4. No storage - synthesized on demand
5. Diffuse directly across plasma membrane

*Thyroid Hormones:*
1. Iodide trapping (NIS)
2. Organification (thyroid peroxidase)
3. Coupling reactions on thyroglobulin
4. Endocytosis and lysosomal proteolysis
5. T4/T3 release into circulation

**Signal Transduction Mechanisms:**

| Receptor Type | Second Messenger | Kinase Cascade | Examples |
|--------------|------------------|----------------|----------|
| Gs-coupled GPCR | cAMP | PKA | TSH, ACTH, Glucagon |
| Gq-coupled GPCR | IP3, DAG, Ca2+ | PKC | GnRH, TRH, Oxytocin |
| Gi-coupled GPCR | ↓cAMP | - | Somatostatin |
| Tyrosine kinase | - | JAK/STAT, MAPK | Insulin, GH, Prolactin |
| Nuclear receptor | - | Gene transcription | Steroids, T3, Vitamin D |

**Hormone Transport:**

*Binding Proteins:*
- Thyroid-binding globulin (TBG): T4, T3
- Cortisol-binding globulin (CBG/transcortin): Cortisol
- Sex hormone-binding globulin (SHBG): Testosterone, Estradiol
- Albumin: Nonspecific, low affinity

*Free Hormone Hypothesis:*
Only unbound (free) hormone is biologically active and available for receptor binding.

**Feedback Mechanisms:**

*Levels of Feedback:*
1. **Ultra-short loop**: Hormone inhibits own release (autocrine)
2. **Short loop**: Pituitary hormone inhibits hypothalamus
3. **Long loop**: Target gland hormone inhibits hypothalamus and pituitary

*Feedback Interpretation:*
| Primary Gland Status | Pituitary Hormone | Target Hormone |
|---------------------|-------------------|----------------|
| Primary hyperfunction | Low (suppressed) | High |
| Primary hypofunction | High (stimulated) | Low |
| Secondary hyperfunction | High | High |
| Secondary hypofunction | Low | Low |

**Hormone Clearance:**
- Peptides: Receptor-mediated endocytosis, proteolysis (minutes)
- Steroids: Hepatic conjugation, renal excretion (hours)
- Thyroid hormones: Deiodination, glucuronidation (days)`,
      keyTerms: [
        { term: 'StAR protein', definition: 'Steroidogenic Acute Regulatory protein that transports cholesterol into mitochondria for steroid synthesis' },
        { term: 'second messenger', definition: 'Intracellular molecules (cAMP, IP3, Ca2+) that relay signals from surface receptors' },
        { term: 'free hormone hypothesis', definition: 'Principle that only unbound hormone is biologically active' },
        { term: 'long loop feedback', definition: 'Target gland hormone inhibiting both hypothalamus and pituitary' },
        { term: 'preprohormone', definition: 'Initial translation product of hormone gene, containing signal peptide' },
      ],
      clinicalNotes: 'Conditions affecting binding proteins alter total hormone levels but not free hormone or clinical status. For example, pregnancy increases TBG, raising total T4 but maintaining normal free T4. When assessing endocrine function, measure both the pituitary hormone (TSH, ACTH, LH/FSH) and target gland hormone to localize pathology as primary (gland) or secondary/tertiary (pituitary/hypothalamus).',
    },
    4: {
      level: 4,
      summary: 'Hormone action involves complex receptor pharmacology including receptor desensitization, downregulation, and crosstalk; pulsatile secretion patterns are critical for physiologic response; and feedback regulation occurs through genomic and non-genomic mechanisms with tissue-specific modulation.',
      explanation: `**Receptor Pharmacology:**

*Receptor States:*
- Resting (inactive, responsive)
- Active (ligand-bound, signaling)
- Desensitized (ligand-bound, non-signaling)
- Internalized (removed from surface)
- Degraded or recycled

*Desensitization Mechanisms:*
1. **Homologous**: Same hormone causes desensitization
   - Receptor phosphorylation by GRKs (G-protein receptor kinases)
   - β-arrestin binding blocks G-protein coupling
   - Example: Continuous GnRH → LH/FSH suppression

2. **Heterologous**: Different signals cause desensitization
   - PKA/PKC phosphorylation of multiple receptor types
   - Allows signaling integration

*Receptor Regulation:*
- **Downregulation**: Decreased receptor number (chronic stimulation)
- **Upregulation**: Increased receptor number (chronic absence of ligand)
- **Sensitization**: Increased receptor affinity or signaling efficiency

**Pulsatility and Rhythms:**

*Pulsatile Secretion:*
| Hormone | Pulse Frequency | Amplitude Modulation |
|---------|-----------------|---------------------|
| GnRH | Every 60-90 min | Fast = LH; Slow = FSH |
| GH | Every 3-4 hours | Sleep, exercise, fasting |
| ACTH/Cortisol | Every 60-90 min | Diurnal variation |
| Insulin | Every 5-10 min | Meal-driven |

*Circadian Rhythms:*
- Cortisol: Peak 6-8 AM, nadir midnight
- GH: Peak during slow-wave sleep
- TSH: Peak midnight, nadir noon
- Melatonin: Peak 2-4 AM

*Ultradian and Infradian Rhythms:*
- Menstrual cycle: ~28 days
- Seasonal variations: Vitamin D, testosterone

**Second Messenger Amplification:**

The receptor cascade provides enormous amplification:
1. One hormone-receptor complex → activates ~100 G-proteins
2. Each G-protein → activates adenylyl cyclase
3. Each cyclase → produces ~1000 cAMP molecules
4. cAMP activates PKA → phosphorylates multiple targets
5. Net amplification: >10^6 fold

**Non-Genomic Steroid Actions:**

Traditional view: Steroids work only through nuclear receptors (hours)
Reality: Rapid effects (seconds-minutes) also occur:
- Membrane-associated steroid receptors
- Direct ion channel modulation (GABA-A by neurosteroids)
- Second messenger activation
- Examples: Rapid aldosterone effects on Na+/H+ exchange, progesterone acrosome reaction

**Crosstalk and Integration:**

*Receptor Crosstalk:*
- GPCR-tyrosine kinase interactions
- Steroid receptor-growth factor synergy
- Cytokine-hormone interactions

*Metabolic Integration:*
- Insulin resistance: Decreased insulin receptor signaling despite normal receptor number
- Involves serine phosphorylation of IRS-1 by inflammatory kinases
- Links obesity, inflammation, and diabetes

**Hormone Resistance Syndromes:**

| Syndrome | Defect | Phenotype |
|----------|--------|-----------|
| Thyroid hormone resistance | Mutant TRβ | High T4, inappropriately normal TSH |
| Androgen insensitivity | AR mutations | 46,XY female phenotype |
| Pseudohypoparathyroidism | Gsα mutations | PTH resistance, hypocalcemia |
| MODY-2 | Glucokinase mutation | Mild hyperglycemia, low insulin |`,
      keyTerms: [
        { term: 'receptor desensitization', definition: 'Loss of receptor responsiveness despite continued hormone binding' },
        { term: 'pulsatility', definition: 'Pattern of hormone secretion in discrete bursts rather than continuous release' },
        { term: 'GRK', definition: 'G-protein receptor kinase that phosphorylates active GPCRs, initiating desensitization' },
        { term: 'non-genomic steroid actions', definition: 'Rapid steroid effects not requiring nuclear receptor transcription' },
        { term: 'hormone resistance', definition: 'Syndrome where target tissues fail to respond normally to hormone' },
      ],
      clinicalNotes: 'Understanding pulsatility is clinically relevant: continuous GnRH agonist administration suppresses gonadotropins (used in prostate cancer, precocious puberty), while pulsatile GnRH restores fertility in hypothalamic amenorrhea. Hormone resistance syndromes present with elevated hormone levels but symptoms of deficiency. Receptor desensitization explains why continuous exposure to some hormones diminishes their effect.',
    },
    5: {
      level: 5,
      summary: 'Advanced endocrine physiology integrates transcriptomic regulation, epigenetic programming, hormone metabolism by tissue-specific enzymes, mathematical modeling of feedback systems, and understanding of hormone action in aging, circadian disruption, and endocrine-disrupting chemical exposure.',
      explanation: `**Transcriptional Regulation by Nuclear Receptors:**

*Nuclear Receptor Superfamily Structure:*
- A/B domain: Activation function-1 (AF-1), ligand-independent
- C domain: DNA-binding domain (zinc fingers)
- D domain: Hinge region, nuclear localization
- E domain: Ligand-binding domain, AF-2
- F domain: Variable C-terminal

*Coregulator Complexes:*
- **Coactivators**: SRC-1, SRC-2, SRC-3, CBP/p300
  - HAT activity (histone acetylation)
  - Chromatin remodeling
  - Mediator complex recruitment
- **Corepressors**: NCoR, SMRT
  - HDAC recruitment
  - Transcriptional silencing

*Selective Receptor Modulators:*
Ligands that act as agonists in some tissues, antagonists in others:
- SERMs (tamoxifen): Antagonist in breast, agonist in bone
- Mechanism: Differential coregulator recruitment
- Therapeutic applications: Tissue-selective hormone action

**Epigenetic Programming:**

*Developmental Programming:*
- Early life hormone exposure patterns gene expression
- Intrauterine environment affects adult disease risk
- Example: Fetal cortisol exposure programs HPA axis setpoint

*Mechanisms:*
- DNA methylation of hormone receptor genes
- Histone modifications at hormone-responsive elements
- Non-coding RNA regulation

*Clinical Relevance:*
- Polycystic ovary syndrome: Intrauterine androgen exposure
- Metabolic syndrome: Low birth weight, catch-up growth
- Transgenerational effects: DES exposure

**Peripheral Hormone Metabolism:**

*Tissue-Specific Activation:*

| Prohormone | Active Form | Enzyme | Key Tissues |
|------------|-------------|--------|-------------|
| T4 | T3 | D1, D2 deiodinases | Liver, thyroid, CNS |
| Cortisone | Cortisol | 11β-HSD1 | Liver, adipose |
| DHEA | Testosterone | 3β-HSD, 17β-HSD | Peripheral tissues |
| Testosterone | DHT | 5α-reductase | Prostate, skin |
| 25(OH)D | 1,25(OH)2D | CYP27B1 | Kidney, immune cells |

*Tissue-Specific Inactivation:*
- 11β-HSD2 (kidney): Cortisol → Cortisone (protects MR)
- D3 deiodinase: T4 → rT3 (metabolic adaptation)
- UGT/SULT enzymes: Conjugation and excretion

**Mathematical Modeling of Feedback:**

*Ultradian Pulse Generation:*
The GnRH pulse generator represents a neural oscillator:
- Kisspeptin-neurokinin B-dynorphin (KNDy) neurons
- Reciprocal excitation/inhibition
- Pulse frequency encoding of LH vs FSH

*Feedback Dynamics:*
Transfer function analysis of HPA axis:
- Feedforward gain: CRH → ACTH → Cortisol
- Feedback gain: Cortisol → CRH/ACTH suppression
- Time delays: Minutes (fast feedback) to hours (genomic)
- System can oscillate if feedback is disrupted

*Allostatic Load:*
- Chronic stress alters setpoint of feedback
- Higher baseline cortisol with blunted responses
- Predicts cardiovascular and metabolic disease

**Endocrine Disruptors:**

*Mechanisms of Disruption:*
1. Receptor agonism/antagonism
2. Altered hormone synthesis
3. Modified hormone metabolism
4. Disrupted transport protein binding

*Key Disruptors and Effects:*

| Compound | Source | Primary Target | Health Effects |
|----------|--------|----------------|----------------|
| BPA | Plastics | ER, AR | Reproductive, metabolic |
| Phthalates | Plastics | AR, PPARγ | Male reproductive |
| PCBs | Industrial | TR, ER | Neurodevelopmental |
| Dioxins | Combustion | AhR | Multiple systems |
| Atrazine | Herbicide | Aromatase | Reproductive |

*Mixture Effects:*
- Low-dose effects below traditional NOAEL
- Non-monotonic dose-response curves
- Synergistic and additive effects in mixtures
- Timing of exposure critical (developmental windows)

**Aging and Endocrine Function:**

*Somatopause:*
- GH declines 14% per decade after age 30
- IGF-1 decreases proportionally
- Sarcopenia, increased adiposity
- GH replacement: Benefits vs cancer risk

*Menopause/Andropause:*
- Ovarian failure: Estrogen/progesterone deficiency
- Testicular: Gradual testosterone decline (1-2%/year)
- HRT considerations: WHI findings, individualization

*Adrenopause:*
- DHEA peaks at 25, declines 2-3%/year
- Role in immune function, cognition unclear
- Supplementation not recommended

*Thyroid:*
- TSH setpoint increases with age
- Age-specific reference ranges needed
- Subclinical hypothyroidism: Treat or not?`,
      keyTerms: [
        { term: 'coactivator', definition: 'Protein complex that enhances nuclear receptor transcriptional activity through chromatin remodeling' },
        { term: 'SERM', definition: 'Selective Estrogen Receptor Modulator - tissue-specific agonist or antagonist' },
        { term: 'KNDy neurons', definition: 'Kisspeptin-Neurokinin B-Dynorphin expressing neurons that generate GnRH pulses' },
        { term: 'allostatic load', definition: 'Cumulative physiological burden from chronic stress affecting hormonal setpoints' },
        { term: '11β-HSD', definition: '11-beta hydroxysteroid dehydrogenase - enzyme interconverting cortisol and cortisone' },
      ],
      clinicalNotes: 'The tissue-specific metabolism of hormones has major therapeutic implications: 5α-reductase inhibitors (finasteride) treat BPH by blocking DHT formation locally; 11β-HSD1 inhibitors are being developed for metabolic syndrome. Endocrine-disrupting chemicals represent an emerging health concern with implications for developmental programming, reproductive health, and metabolic disease. Understanding feedback dynamics helps interpret dynamic testing (ACTH stimulation, dexamethasone suppression) and design hormone replacement regimens. The shift toward age-specific hormone reference ranges reflects recognition that "normal aging" involves altered hormonal setpoints.',
    },
  },

  media: [
    {
      id: 'hormone-feedback-loops',
      type: 'diagram',
      filename: 'hormone-feedback-loops.svg',
      title: 'Negative Feedback in the Hypothalamic-Pituitary Axis',
      description: 'Illustration of short, long, and ultra-short feedback loops',
    },
    {
      id: 'receptor-types',
      type: 'diagram',
      filename: 'hormone-receptor-types.svg',
      title: 'Types of Hormone Receptors',
      description: 'GPCR, tyrosine kinase, and nuclear receptor signaling',
    },
    {
      id: 'signal-transduction',
      type: 'diagram',
      filename: 'second-messenger-cascades.svg',
      title: 'Second Messenger Signaling Cascades',
      description: 'cAMP, IP3/DAG, and calcium signaling pathways',
    },
  ],

  citations: [
    {
      id: 'boron-medical-physiology',
      type: 'textbook',
      title: 'Endocrine System',
      source: 'Medical Physiology, Boron & Boulpaep, 3rd Edition',
      chapter: '47-55',
      license: 'Copyrighted',
    },
    {
      id: 'williams-endocrinology',
      type: 'textbook',
      title: 'Principles of Endocrinology',
      source: 'Williams Textbook of Endocrinology, 14th Edition',
      chapter: '1-3',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'physiology-thyroid-function', targetType: 'topic', relationship: 'related', label: 'Thyroid Function' },
    { targetId: 'physiology-adrenal-function', targetType: 'topic', relationship: 'related', label: 'Adrenal Function' },
    { targetId: 'physiology-pituitary-function', targetType: 'topic', relationship: 'related', label: 'Pituitary Function' },
    { targetId: 'anatomy-hypothalamus', targetType: 'structure', relationship: 'related', label: 'Hypothalamus' },
    { targetId: 'clinical-endocrine-testing', targetType: 'topic', relationship: 'see-also', label: 'Endocrine Testing' },
  ],

  tags: {
    systems: ['endocrine'],
    topics: ['physiology', 'signal transduction', 'feedback regulation'],
    keywords: ['hormones', 'receptors', 'feedback loops', 'GPCR', 'nuclear receptors', 'second messengers'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['endocrinology', 'medicine', 'physiology'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
