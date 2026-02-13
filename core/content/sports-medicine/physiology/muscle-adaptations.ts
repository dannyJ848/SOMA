/**
 * Muscle Adaptations to Exercise - Comprehensive Educational Content
 *
 * Covers structural and functional adaptations of skeletal muscle to different
 * training modalities including hypertrophy, fiber type shifts, and neuromuscular changes.
 */

import { EducationalContent } from '../../types';

export const muscleAdaptations: EducationalContent = {
  id: 'sports-med-muscle-adaptations',
  type: 'concept',
  name: 'Muscle Adaptations to Exercise',
  alternateNames: ['Training Adaptations', 'Skeletal Muscle Plasticity', 'Exercise-Induced Muscle Changes'],

  levels: {
    1: {
      level: 1,
      summary: 'When you exercise regularly, your muscles get bigger, stronger, and better at doing their job.',
      explanation: `## How Exercise Changes Your Muscles

Your muscles are amazing - they can change and improve when you use them!

**What Happens When You Lift Weights**
- Your muscles get BIGGER (like inflating a balloon)
- They get STRONGER (can lift heavier things)
- You can see the changes after a few weeks of regular exercise

**What Happens When You Run or Bike**
- Your muscles get better at working for a long time
- They don't get tired as quickly
- They become better at using oxygen

**Why Does This Happen?**
Think of your muscles like a team that gets better with practice:
- When you challenge your muscles, tiny parts inside them get a little damaged
- Your body repairs them and makes them STRONGER
- This is like your body saying "let's be more prepared next time!"

**The Cool Part**
- Changes start happening in just 2-3 weeks
- The more you practice, the better your muscles get
- Different exercises create different changes
- Weight lifting = bigger, stronger muscles
- Running/swimming = muscles that last longer`,
      keyTerms: [
        { term: 'muscle', definition: 'The part of your body that helps you move by squeezing and relaxing' },
        { term: 'stronger', definition: 'Being able to push, pull, or lift more than before' },
        { term: 'endurance', definition: 'Being able to do something for a long time without getting tired' },
      ],
      analogies: [
        'Muscles are like sponges - they soak up the training you give them and grow.',
        'Building stronger muscles is like building with LEGOs - you add more pieces over time.',
        'Training your muscles is like teaching a dog tricks - with practice, they learn to do more.',
      ],
      examples: [
        'After practicing basketball for a month, your legs feel stronger when you jump.',
        'Swimmers develop shoulder muscles that help them pull through the water better.',
      ],
    },
    2: {
      level: 2,
      summary: 'Exercise causes muscles to adapt through hypertrophy (increased size) with resistance training and improved endurance capacity with aerobic training, involving changes in muscle fiber size, metabolism, and neural control.',
      explanation: `## Types of Muscle Adaptations

### Resistance Training Adaptations
**Hypertrophy (Muscle Growth):**
- Muscle fibers increase in size (cross-sectional area)
- More contractile proteins (actin and myosin)
- Typically visible after 6-8 weeks of training
- Maximum growth potential: 20-40% size increase

**Strength Gains:**
- Neural adaptations come first (weeks 1-4)
  - Better coordination between brain and muscles
  - More muscle fibers activated at once
- Structural changes come later (weeks 4+)
  - Bigger muscle fibers
  - More forceful contractions

### Endurance Training Adaptations
**Aerobic Improvements:**
- More mitochondria (energy factories) in muscle cells
- Better blood supply (more capillaries)
- Enhanced ability to use fat for fuel
- Improved oxygen extraction

**Fiber Type Changes:**
- Fast-twitch fibers can become more fatigue-resistant
- Shift from Type IIx to Type IIa (more oxidative)
- Slow-twitch fibers become more efficient

## Principles of Muscle Adaptation

**Specificity:**
- Muscles adapt to the specific demands placed on them
- Running improves running ability; lifting improves lifting

**Progressive Overload:**
- Muscles need increasing challenge to keep adapting
- More weight, more reps, or more difficult exercises

**Recovery:**
- Adaptations occur during rest, not during exercise
- Adequate sleep and nutrition essential
- Overtraining prevents proper adaptation

## Timeline of Changes

| Timeframe | Type of Adaptation |
|-----------|-------------------|
| Days 1-7 | Muscle soreness, initial neural changes |
| Weeks 2-4 | Improved coordination, early strength gains |
| Weeks 4-8 | Visible muscle growth, significant strength |
| Months 3-6 | Major body composition changes |
| 6+ months | Near-maximum adaptation potential |`,
      keyTerms: [
        { term: 'hypertrophy', definition: 'Increase in muscle size due to enlargement of individual muscle fibers' },
        { term: 'mitochondria', definition: 'Structures inside cells that produce energy; the "powerhouses" of the cell' },
        { term: 'capillaries', definition: 'Tiny blood vessels that deliver oxygen and nutrients to muscle fibers' },
        { term: 'muscle fiber', definition: 'Individual muscle cell; the basic unit of muscle tissue' },
        { term: 'progressive overload', definition: 'Gradually increasing training demands to continue muscle adaptation' },
        { term: 'neural adaptation', definition: 'Improvements in how the nervous system recruits and coordinates muscle fibers' },
      ],
      analogies: [
        'Muscle fibers are like ropes - resistance training makes each rope thicker and stronger.',
        'Mitochondria are like power plants - endurance training builds more power plants in your muscles.',
        'Neural adaptations are like upgrading your WiFi - better signal means better performance.',
      ],
    },
    3: {
      level: 3,
      summary: 'Skeletal muscle demonstrates remarkable plasticity in response to exercise, with resistance training inducing myofibrillar hypertrophy and neural adaptations, while endurance training promotes mitochondrial biogenesis, angiogenesis, and oxidative enzyme upregulation, governed by the SAID principle and requiring progressive overload.',
      explanation: `## Resistance Training Adaptations

### Morphological Changes
**Myofibrillar Hypertrophy:**
- Increased number of sarcomeres in parallel
- Enlarged cross-sectional area of muscle fibers
- Primarily Type II fibers exhibit greater hypertrophy
- Hyperplasia (fiber splitting) controversial in humans

**Architectural Changes:**
- Increased fascicle length with eccentric training
- Increased pennation angle with concentric-focused training
- Changes in muscle-tendon unit properties

### Neural Adaptations
**Motor Unit Recruitment:**
- Increased maximal motor unit recruitment
- Improved rate coding (firing frequency)
- Enhanced motor unit synchronization
- Reduced antagonist coactivation

**Neural Factors (Early Strength Gains):**
- Account for 40-60% of strength gains in first 8 weeks
- Cross-education effect (training one limb strengthens contralateral)
- Cortical and spinal adaptations

### Connective Tissue Adaptations
- Increased tendon stiffness and cross-sectional area
- Enhanced collagen synthesis
- Improved force transmission

## Endurance Training Adaptations

### Mitochondrial Biogenesis
**Molecular Signals:**
- AMPK activation
- PGC-1α upregulation
- NRF-1, NRF-2 transcription factor activation

**Outcomes:**
- 50-100% increase in mitochondrial volume
- Increased oxidative enzyme activity
- Enhanced fatty acid oxidation capacity

### Capillarization
- Increased capillary-to-fiber ratio
- VEGF-mediated angiogenesis
- Improved oxygen delivery and waste removal
- Enhanced diffusion distance

### Metabolic Adaptations
**Enzyme Changes:**
- Citrate synthase (marker of mitochondrial content)
- β-hydroxyacyl-CoA dehydrogenase (fat oxidation)
- Hexokinase, phosphofructokinase (glycolysis)

**Substrate Storage:**
- Increased muscle glycogen stores
- Increased intramuscular triglyceride stores

## Fiber Type Plasticity

### Fiber Type Classification
| Type | Characteristics | Training Response |
|------|-----------------|-------------------|
| Type I (Slow) | Oxidative, fatigue-resistant, small | Enhanced oxidative capacity |
| Type IIa | Oxidative-glycolytic, moderate | Shift from IIx, more oxidative |
| Type IIx | Glycolytic, fatigable, large | Convert to IIa with training |

### Training-Induced Shifts
- Endurance: IIx → IIa (more oxidative fast-twitch)
- Resistance: Mixed effects, enhanced within type
- Detraining: IIa → IIx shift

## Time Course of Adaptations

**Acute Phase (0-4 weeks):**
- Neural adaptations predominate
- Muscle protein synthesis elevated
- Minimal visible hypertrophy

**Intermediate Phase (4-12 weeks):**
- Measurable hypertrophy begins
- Continued neural optimization
- Significant strength gains

**Long-Term Phase (3-6+ months):**
- Maximal hypertrophy approaches limits
- Fiber type adaptations complete
- Performance plateaus without variation`,
      keyTerms: [
        { term: 'myofibrillar hypertrophy', definition: 'Increase in the number and size of myofibrils (contractile elements) within muscle fibers, increasing force production capacity' },
        { term: 'PGC-1α', definition: 'Peroxisome proliferator-activated receptor gamma coactivator 1-alpha; master regulator of mitochondrial biogenesis' },
        { term: 'motor unit recruitment', definition: 'Activation of motor neurons and their associated muscle fibers; follows the size principle from small to large' },
        { term: 'capillary-to-fiber ratio', definition: 'Number of capillaries per muscle fiber; increases with endurance training to improve oxygen delivery' },
        { term: 'citrate synthase', definition: 'Krebs cycle enzyme used as a marker of mitochondrial content and oxidative capacity' },
        { term: 'SAID principle', definition: 'Specific Adaptation to Imposed Demands; training adaptations are specific to the type of stress applied' },
      ],
      clinicalNotes: 'Understanding muscle adaptations guides rehabilitation programming. Neural adaptations explain early strength gains without visible hypertrophy - important for patient motivation. Detraining occurs faster than training (principle of reversibility).',
    },
    4: {
      level: 4,
      summary: 'Muscle plasticity involves mechanotransduction signaling through mTORC1 for hypertrophy and AMPK-PGC-1α for oxidative adaptations, with satellite cell involvement in regeneration and potentially hypertrophy, modulated by hormonal milieu, nutritional status, and genetic factors influencing training responsiveness.',
      explanation: `## Molecular Mechanisms of Hypertrophy

### Mechanotransduction
**Mechanical Signal Detection:**
- Focal adhesion kinase (FAK)
- Costameric proteins (dystrophin, integrins)
- Titin strain sensing
- Ion channel mechanosensitivity

**Downstream Signaling:**
\`\`\`
Mechanical tension
      ↓
Phosphatidic acid (PA) → mTORC1
IGF-1 (autocrine) → PI3K → Akt → mTORC1
                         ↓
                    mTORC1 activation
                         ↓
         p70S6K1 phosphorylation → ribosomal biogenesis
         4E-BP1 phosphorylation → cap-dependent translation
                         ↓
              Muscle Protein Synthesis (MPS)
\`\`\`

### Protein Synthesis Regulation
**Acute Response:**
- MPS increases 50-100% post-exercise
- Peak at 24-48 hours
- Returns to baseline by 48-72 hours
- Refractory period concept

**Chronic Adaptation:**
- Elevated baseline MPS in trained state
- Increased ribosomal content
- Enhanced translation efficiency

### Satellite Cell Biology
**Activation Cascade:**
- Hepatocyte growth factor (HGF) release with injury/tension
- Nitric oxide signaling
- Quiescent Pax7+ cells → activated MyoD+ cells

**Myonuclear Domain Theory:**
- Each myonucleus controls ~2000 μm³ cytoplasm
- Hypertrophy may require myonuclear addition
- Debate: Required vs. facilitative role

**Muscle Memory:**
- Nuclei acquired during hypertrophy retained during atrophy
- Facilitates retraining
- Epigenetic mechanisms proposed

## Endurance Adaptations: Molecular Basis

### AMPK-PGC-1α Axis
**AMPK Activation:**
- AMP:ATP ratio sensing
- LKB1-mediated phosphorylation
- CaMKKβ (calcium-dependent)

**PGC-1α Regulation:**
- AMPK: Direct phosphorylation
- p38 MAPK: Phosphorylation
- SIRT1: Deacetylation (NAD+-dependent)

**Transcriptional Targets:**
- NRF-1, NRF-2 → nuclear-encoded mitochondrial proteins
- TFAM → mtDNA transcription
- ERRα → metabolic genes
- PPARδ → fatty acid oxidation

### Mitochondrial Quality Control
**Biogenesis:**
- Nuclear-mitochondrial communication
- Protein import machinery
- mtDNA replication

**Dynamics:**
- Fusion: MFN1, MFN2, OPA1
- Fission: DRP1, FIS1
- Balance determines network function

**Mitophagy:**
- PINK1-Parkin pathway
- Selective removal of dysfunctional mitochondria

### Angiogenesis
**VEGF Signaling:**
- Hypoxia-induced (HIF-1α stabilization)
- Shear stress-induced
- PGC-1α-mediated expression
- VEGFR2 endothelial signaling

## Concurrent Training Interference

### Molecular Basis
**AMPK-mTORC1 Antagonism:**
- AMPK activates TSC2 → inhibits mTORC1
- Limits protein synthetic response
- Diminishes hypertrophic signaling

**Practical Implications:**
- Separation of training modalities (6-24 hrs)
- Sequencing considerations
- Periodization strategies

### Moderating Factors
- Training status (trained > untrained)
- Volume and intensity considerations
- Nutrition timing and composition
- Individual genetic variation

## Fiber Type Determination and Plasticity

### Molecular Control of Fiber Type
**Type I (Slow, Oxidative):**
- Calcineurin-NFAT pathway
- PGC-1α → oxidative genes
- MEF2 transcription factor

**Type II (Fast, Glycolytic):**
- Default pathway
- Enhanced by thyroid hormone
- Inhibited by oxidative signaling

### Training-Induced Shifts
**Isoform Transitions:**
IIx ↔ IIa ↔ I (with prolonged intense endurance training)

**Mechanisms:**
- Activity-dependent gene expression
- Epigenetic modifications
- MicroRNA regulation (miR-208b, miR-499)`,
      keyTerms: [
        { term: 'mechanotransduction', definition: 'Conversion of mechanical stimuli (tension, stretch) into biochemical signals that initiate cellular responses' },
        { term: 'mTORC1', definition: 'Mechanistic target of rapamycin complex 1; integrates mechanical and nutritional signals to regulate muscle protein synthesis' },
        { term: 'satellite cells', definition: 'Muscle stem cells located between sarcolemma and basal lamina; essential for regeneration and may contribute to hypertrophy' },
        { term: 'myonuclear domain', definition: 'Theoretical volume of cytoplasm regulated by a single myonucleus; may determine need for satellite cell contribution during hypertrophy' },
        { term: 'concurrent training interference', definition: 'Potential attenuation of strength/hypertrophy adaptations when endurance and resistance training are combined, mediated by AMPK inhibition of mTORC1' },
        { term: 'mitophagy', definition: 'Selective autophagy of mitochondria; quality control mechanism removing dysfunctional mitochondria' },
      ],
      clinicalNotes: 'Understanding molecular signals guides rehabilitation. Nutritional strategies (protein, leucine timing) can optimize mTORC1 activation. Satellite cell dysfunction contributes to sarcopenia and impaired healing in aging.',
    },
    5: {
      level: 5,
      summary: 'Cutting-edge understanding of muscle adaptation integrates single-fiber transcriptomics, epigenetic modifications, myokine signaling, and individual genetic variance in training response, with translational applications in sarcopenia, cachexia, and precision exercise medicine.',
      explanation: `## Advanced Molecular Mechanisms

### Single-Fiber Resolution Studies
**Transcriptomic Profiling:**
- Distinct gene expression signatures by fiber type
- Training-induced transcriptional reprogramming
- Cluster analysis reveals intermediate phenotypes
- Single-nucleus RNA-seq advances

**Proteomic Adaptations:**
- Contractile protein isoform switching
- Metabolic enzyme abundance changes
- Post-translational modifications (PTMs)
- Phosphoproteomics reveals signaling dynamics

### Epigenetic Regulation
**DNA Methylation:**
- Exercise induces hypomethylation of metabolic genes
- PGC-1α promoter demethylation
- GLUT4 expression regulation
- "Epigenetic memory" of training

**Histone Modifications:**
- H3K4me3: Active transcription marks at exercise-responsive genes
- HDAC4/5 nuclear export during exercise
- De-repression of MEF2 target genes

**MicroRNA Regulation:**
- myomiRs (miR-1, miR-133, miR-206)
- miR-23a: Targets PGC-1α (reduced with training)
- miR-494: Mitochondrial biogenesis regulation
- Circulating miRNAs as biomarkers

### Myokine Signaling
**IL-6 as Exercise Factor:**
- Released from contracting muscle
- Acute metabolic effects (glucose uptake, lipolysis)
- Immunomodulatory functions
- Intensity and duration dependent

**Emerging Myokines:**
- Irisin: PGC-1α-induced, browning of white fat
- Myostatin: Negative regulator (decreased with training)
- BDNF: Neurotrophic effects
- Meteorin-like: Anti-inflammatory

## Training Response Variability

### Genetic Determinants
**Candidate Genes:**
| Gene | Variant | Association |
|------|---------|-------------|
| ACTN3 | R577X | Power vs. endurance phenotype |
| ACE | I/D | Endurance performance, trainability |
| PPARGC1A | Gly482Ser | Aerobic capacity, mitochondrial function |
| VEGFA | Various | Angiogenic response |
| IL6 | -174G/C | Inflammatory response to exercise |

**Polygenic Scores:**
- Multiple variants of small effect
- Limited predictive validity currently
- Interactions with training and environment

### Responder Phenotypes
**High vs. Low Responders:**
- ~20% show minimal VO2max improvement
- Satellite cell responsiveness varies
- Molecular signatures differ
- Potentially modifiable factors

**HERITAGE Family Study Findings:**
- VO2max trainability ~50% heritable
- Wide individual variation (0-100% improvement)
- Baseline predictors under investigation

### Precision Exercise Medicine
**Individualized Prescription:**
- Molecular profiling pre-training
- Predictive algorithms (emerging)
- Adaptive programming based on response

## Clinical Applications

### Sarcopenia
**Molecular Pathophysiology:**
- Satellite cell dysfunction (reduced proliferation)
- Anabolic resistance (blunted MPS response)
- Increased myostatin expression
- Mitochondrial dysfunction

**Therapeutic Targets:**
- Resistance training: Primary intervention
- Protein/leucine supplementation
- Myostatin inhibitors (investigational)
- Senolytics (emerging)

### Cancer Cachexia
**Mechanisms:**
- Inflammatory cytokines (TNF-α, IL-1β)
- Activin A / myostatin pathway
- Proteolysis-inducing factor
- Autophagy dysregulation

**Exercise as Therapy:**
- Attenuates muscle wasting
- Reduces inflammation
- Improves functional capacity
- Timing relative to treatment critical

### Muscular Dystrophies
**Pathophysiology:**
- Dystrophin complex dysfunction
- Membrane instability
- Impaired regeneration
- Satellite cell exhaustion

**Exercise Considerations:**
- Low-intensity aerobic: Generally beneficial
- Resistance training: Controversial, eccentric caution
- Individualized approach essential

### Metabolic Disease
**Insulin Resistance:**
- Reduced GLUT4 expression
- Lipid accumulation (ceramides, DAGs)
- Mitochondrial dysfunction
- Exercise improves all parameters

**Exercise Prescription:**
- Combined aerobic + resistance optimal
- Contraction-mediated glucose uptake
- Independent of insulin signaling

## Emerging Frontiers

### Exercise Molecular Transducers of Physical Activity Consortium (MoTrPAC)
- Multi-tissue, multi-omic profiling
- Time course of molecular adaptations
- Sex and age differences
- Building molecular map of exercise response

### Blood-Based Biomarkers
**Training Load Monitoring:**
- Circulating miRNAs
- Cell-free mtDNA
- Metabolomics signatures
- Proteomics panels

### Novel Interventions
**Blood Flow Restriction (BFR):**
- Low-load training with metabolic stress
- mTORC1 activation despite low mechanical tension
- Clinical applications in rehabilitation

**Eccentric Training:**
- Enhanced mechanotransduction
- Fascicle lengthening
- Titin-based signaling
- Injury prevention potential`,
      keyTerms: [
        { term: 'epigenetic memory', definition: 'Lasting changes in DNA methylation or histone modifications that preserve training adaptations and facilitate retraining' },
        { term: 'myomiRs', definition: 'Muscle-specific microRNAs (miR-1, miR-133, miR-206) that regulate muscle development, differentiation, and adaptation' },
        { term: 'myokines', definition: 'Cytokines and peptides secreted by skeletal muscle during contraction that exert autocrine, paracrine, and endocrine effects' },
        { term: 'anabolic resistance', definition: 'Blunted muscle protein synthesis response to anabolic stimuli (exercise, protein) observed in aging and disease states' },
        { term: 'MoTrPAC', definition: 'Molecular Transducers of Physical Activity Consortium; NIH-funded initiative to create comprehensive molecular map of exercise response' },
        { term: 'blood flow restriction (BFR)', definition: 'Training technique using partial vascular occlusion to induce metabolic stress and hypertrophy with low mechanical loads' },
      ],
      clinicalNotes: `Advanced clinical applications:
1. Sarcopenia treatment: Resistance training + protein (1.2-1.6g/kg/day) + leucine remains evidence-based cornerstone
2. Cancer patients: Exercise during treatment improves outcomes; timing relative to chemotherapy matters
3. Anabolic resistance: Higher protein doses and resistance training volume may be needed in older adults
4. Genetic testing: Not yet clinically actionable for training prescription; environment/training dominate
5. BFR training: Useful in rehabilitation when high loads contraindicated (post-surgical, elderly)
6. Monitoring: Circulating biomarkers may guide training load prescription (research stage)`,
    },
  },

  media: [
    {
      id: 'hypertrophy-signaling',
      type: 'diagram',
      filename: 'hypertrophy-signaling-mtor.svg',
      title: 'mTORC1 Hypertrophy Signaling Pathway',
      description: 'Mechanical and nutritional signals converging on mTORC1 to regulate muscle protein synthesis',
    },
    {
      id: 'fiber-type-characteristics',
      type: 'diagram',
      filename: 'muscle-fiber-types.svg',
      title: 'Muscle Fiber Type Characteristics',
      description: 'Comparison of Type I, IIa, and IIx fiber properties',
    },
  ],

  citations: [
    {
      id: 'schoenfeld-hypertrophy',
      type: 'textbook',
      title: 'Science and Development of Muscle Hypertrophy',
      authors: ['Schoenfeld, B.J.'],
      source: 'Human Kinetics',
    },
    {
      id: 'egan-zierath-2013',
      type: 'article',
      title: 'Exercise metabolism and the molecular regulation of skeletal muscle adaptation',
      authors: ['Egan, B.', 'Zierath, J.R.'],
      source: 'Cell Metabolism',
    },
  ],

  crossReferences: [
    { targetId: 'sports-med-exercise-physiology-basics', targetType: 'concept', relationship: 'parent', label: 'Exercise Physiology Basics' },
    { targetId: 'sports-med-strength-training-for-injury-prevention', targetType: 'concept', relationship: 'related', label: 'Strength Training for Injury Prevention' },
  ],

  tags: {
    systems: ['musculoskeletal'],
    topics: ['muscle-adaptation', 'hypertrophy', 'exercise-physiology', 'training'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default muscleAdaptations;
