/**
 * Tooth Decay (Dental Caries) - Comprehensive Educational Content
 *
 * Covers the caries process, demineralization-remineralization balance,
 * risk factors, prevention strategies, and treatment of dental caries.
 */

import { EducationalContent } from '../types';

export const toothDecay: EducationalContent = {
  id: 'condition-tooth-decay',
  type: 'condition',
  name: 'Tooth Decay',
  nameEs: 'Caries Dental',
  alternateNames: [
    'Dental Caries',
    'Cavities',
    'Dental Decay',
    'Caries',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Tooth decay, also called cavities or caries, is damage to your teeth that happens when bacteria in your mouth make acids that eat away at the hard outer layer (enamel). It\'s one of the most common health problems worldwide.',
      explanation: `**What Causes Tooth Decay?**

Tooth decay is caused by a battle happening right on your teeth every day:

**The Good Guys:**
- Your saliva (contains minerals that repair teeth)
- Fluoride from toothpaste and water
- Healthy foods that help your teeth

**The Bad Guys:**
- Bacteria in your mouth (there are always some!)
- Sugary foods and drinks
- Acid attacks that dissolve tooth enamel

**How Cavities Form:**

1. **Bacteria + Sugar = Acid**
   - Bacteria in plaque love sugar
   - When they eat sugar, they make acid
   - This acid attacks your tooth enamel

2. **The Acid Attack**
   - Every time you eat or drink (except water), acid is produced
   - The acid removes minerals from your enamel
   - This is called demineralization

3. **The Battle**
   - Your saliva tries to repair the damage (remineralization)
   - If you eat sugar often, the acid attacks win
   - A cavity forms when the damage can't be repaired

4. **The Cavity Grows**
   - Once the enamel is damaged, bacteria get inside
   - The cavity grows bigger and deeper
   - It can reach the nerve and cause pain

**Who Gets Cavities?**
- People who eat lots of sweets
- People who don't brush well
- People with dry mouth
- People who don't see a dentist regularly

**How to Prevent Cavities:**
- Brush twice a day with fluoride toothpaste
- Floss every day
- Limit sugary snacks and drinks
- Use dental sealants (especially for children)
- Visit your dentist regularly

**Remember:**
Once a cavity forms, it can't heal on its own. A dentist needs to fix it. But you can stop cavities before they start!`,
      keyTerms: [
        { term: 'cavity', definition: 'A hole in your tooth caused by decay' },
        { term: 'enamel', definition: 'The hard outer layer of your tooth that protects it from decay' },
        { term: 'demineralization', definition: 'When acid removes minerals from tooth enamel' },
        { term: 'remineralization', definition: 'When saliva repairs tooth enamel by putting minerals back' },
        { term: 'plaque', definition: 'A sticky film of bacteria that forms on teeth' },
      ],
      analogies: [
        'A cavity is like a pothole in a road - once it starts, it keeps getting bigger until it\'s fixed.',
        'The acid attack on your teeth is like waves on a beach - each wave takes a little sand away until you\'re left with a hole.',
        'Your saliva is like a repair crew that fixes small cracks in the road.',
      ],
      examples: [
        'Drinking soda all day gives bacteria constant fuel to make acid.',
        'Bottled water doesn\'t contain fluoride - tap water often does.',
        'A small cavity might not hurt, but it will get worse over time.',
      ],
      patientCounselingPoints: [
        'The frequency of sugar intake matters more than the amount - snacking all day is worse than eating dessert once',
        'Cavities don\'t usually hurt until they\'re large - don\'t wait for pain to see a dentist',
        'Children are more prone to cavities because their enamel is softer',
        'Chewing sugar-free gum after meals can help prevent cavities',
      ],
    },
    2: {
      level: 2,
      summary: 'Dental caries is a multifactorial disease involving acid-producing bacteria, fermentable carbohydrates, and susceptible host teeth. The disease results from demineralization exceeding remineralization, leading to irreversible loss of tooth structure.',
      explanation: `## The Caries Process

**Etiology: Keyes Circle (Three Factors Required)**

1. **Host (Susceptible Tooth)**
   - Tooth morphology (pits and fissures)
   - Enamel composition and structure
   - Salivary flow and composition
   - Tooth position in arch

2. **Microflora (Cariogenic Bacteria)**
   - Streptococcus mutans (primary)
   - Lactobacilli (aciduric)
   - Other acid-producing species

3. **Substrate (Fermentable Carbohydrates)**
   - Simple sugars (sucrose, glucose, fructose)
   - Cooked starches
   - Frequency more important than amount

4. **Time** (enabling the interaction)

**Demineralization-Remineralization Balance:**

| Factor | Demineralization | Remineralization |
|--------|------------------|------------------|
| Process | Acid removes minerals | Saliva deposits minerals |
| Critical pH | Below 5.5 | Above 5.5 |
| Result | Early caries | Repair/reversal |

**Stephan Curve:**
- pH drops to <5.5 within minutes of sugar intake
- Remains critical for 20-30 minutes
- Saliva buffers pH back to neutral (~7.0)
- Frequent sugar intake = prolonged acid exposure

## Types of Caries

**By Location:**
1. **Pit and fissure caries**
   - Occlusal surfaces of molars/premolars
   - Lingual surface of maxillary incisors
   - Most common type in children/adolescents
   - Sealants highly effective for prevention

2. **Smooth surface caries**
   - Proximal surfaces (between teeth)
   - Facial/lingual smooth surfaces
   - Begins as white spot lesion
   - Progresses from gingival margin

3. **Root surface caries**
   - Exposed root surface
   - Associated with gingival recession
   - More common in older adults
   - Progresses rapidly due to lack of enamel

4. **Recurrent caries**
   - At margins of existing restorations
   - Caused by microleakage, poor margins
   - More resistant enamel adjacent to filling

**By Progression:**
- **Incipient caries**: Early lesion, reversible
- **Cavitated caries**: Surface breakdown, irreversible
- **Rampant caries**: Widespread, rapid progression
- **Early childhood caries**: Severe caries in young children

## Clinical Presentation

**Enamel Caries:**
| Stage | Appearance | Reversibility |
|-------|------------|---------------|
| White spot | Chalky white, opaque | Potentially reversible |
| Brown spot | Darker, stained | Possibly reversible |
| Cavitation | Actual cavity | Irreversible |

**Dentin Caries:**
| Zone | Description |
|------|-------------|
| Outer | Infected, cannot remineralize |
| Inner | Affected, can remineralize |
| Transparent zone | Advanced lesion |

**Symptoms:**
- Early: Asymptomatic
- Moderate: Sensitivity to sweets, temperature
- Advanced: Pain, especially with hot/cold
- Severe: Spontaneous pain, pulp involvement

## Diagnosis

**Visual Examination:**
- Clean, dry teeth essential
- ICDAS (International Caries Detection and Assessment System)
  - Code 0: Sound
  - Code 1: First visual change in enamel
  - Code 2: Distinct visual change in enamel
  - Code 3: Localized enamel breakdown
  - Code 4: Underlying dark shadow from dentin
  - Code 5: Distinct cavity with visible dentin
  - Code 6: Extensive cavitated lesion

**Radiographic Examination:**
- Bitewings: Gold standard for proximal caries
- Lesion depth as percentage of dentin thickness:
  - Outer 1/2 dentin: Restoration optional
  - Inner 1/2 dentin: Restoration indicated
- Limitations: Cannot detect earliest lesions

**Adjunctive Diagnostic Aids:**
- **DIAGNOdent**: Laser fluorescence
- **VELscope**: Tissue fluorescence
- **Cariview**: Light-induced fluorescence

## Caries Risk Assessment (CAMBRA)

**Risk Factors:**
| High Risk | Low Risk |
|-----------|----------|
| Active caries | No caries |
| High S. mutans count | Low bacteria count |
| Frequent sugar intake | Infrequent sugar |
| Low saliva flow | Normal saliva |
| Inadequate fluoride exposure | Adequate fluoride |
| Deep pits/fissures | Smooth anatomy |
| Socioeconomic factors | Good access to care |

**Risk-Based Prevention:**

| Risk Level | Recall | Fluoride | Sealants |
|------------|--------|----------|----------|
| High | 3-4 months | Prescription strength | Indicated |
| Moderate | 6 months | Over-the-counter | Consider |
| Low | 6-12 months | Over-the-counter | Optional |

## Treatment

**Non-Cavitated Lesions (Preventive):**
- Fluoride varnish application
- Improved oral hygiene
- Dietary counseling
- Chlorhexidine for high bacteria counts
- Xylitol products

**Cavitated Lesions (Restorative):**
- **Small lesions**: Composite resin, glass ionomer
- **Moderate lesions**: Composite, amalgam
- **Large lesions**: Full coverage (crown)

**Minimum Intervention Dentistry:**
- Preserve healthy tooth structure
- Sealing rather than restoring early lesions
- Atraumatic restorative treatment (ART)
- Resin infiltration of early lesions`,
      keyTerms: [
        { term: 'cariogenic', definition: 'Causing dental caries; usually refers to acid-producing bacteria' },
        { term: 'demineralization', definition: 'Loss of minerals from tooth enamel due to acid attack' },
        { term: 'remineralization', definition: 'Repair of early caries by deposition of minerals from saliva' },
        { term: 'critical pH', definition: 'pH below which enamel demineralizes (approximately 5.5)' },
        { term: 'white spot lesion', definition: 'Early caries appearing as chalky white area; may be reversible' },
        { term: 'ICDAS', definition: 'International Caries Detection and Assessment System; standardized caries coding' },
      ],
      analogies: [
        'The Stephan curve is like a tide that goes out and comes in - each time you eat, the acidic tide goes out and takes some beach (enamel) with it.',
        'Caries is like a seesaw - demineralization on one side, remineralization on the other. We want remineralization to win.',
      ],
      clinicalNotes: 'ICDAS provides standardized caries detection. White spot lesions can remineralize if the biofilm is controlled. Fluoride enhances remineralization and makes enamel more resistant to acid. Sealants reduce occlusal caries by >80%.',
      patientCounselingPoints: [
        'Frequency of sugar intake matters more than total amount - each snack causes an acid attack',
        'Cheese at the end of a meal can help neutralize acid',
        'Chewing sugar-free gum with xylitol helps prevent cavities',
      ],
    },
    3: {
      level: 3,
      summary: 'Dental caries is a biofilm-mediated, diet-modulated, multifactorial, non-communicable, dynamic disease resulting in net mineral loss of dental hard tissues. It is driven by acidogenic and aciduric bacteria within dental plaque biofilm.',
      explanation: `## Molecular Pathogenesis

**Ecological Plaque Hypothesis:**
- Caries results from shift in biofilm ecology
- From symbiotic to pathogenic dominance
- Selective pressure from frequent carbohydrate exposure
- Aciduric species (S. mutans, lactobacilli) thrive

**Specific Plaque Hypothesis:**
- Certain bacteria are cariogenic
- Mutans streptococci: Principal etiologic agents
- S. mutans: Key pathogen
- Lactobacilli: Secondary invaders, progressors

**Virulence Factors of S. mutans:**

| Factor | Function | Significance |
|--------|----------|--------------|
| Glucosyltransferases | Synthesize glucans from sucrose | Biofilm adhesion |
| Glucan-binding proteins | Bind glucans | Biofilm accumulation |
| Acidogenicity | Produce acid from carbohydrates | pH drop |
| Aciduricity | Tolerate low pH | Survival in acid |
| Intracellular polysaccharides | Store carbohydrates | Continued acid production |

**Biofilm Formation:**
1. Pellicle formation (acquired enamel pellicle)
2. Initial colonization (S. sanguinis, S. oralis)
3. Co-aggregation with S. mutans
4. Glucan-mediated biofilm accumulation
5. Acid production creating cariogenic environment

**Chemistry of Demineralization:**

*Enamel Dissolution:*
- Ca₁₀(PO₄)₆(OH)₂ + 8H⁺ → 10Ca²⁺ + 6HPO₄²⁻ + 2H₂O
- Rate depends on pH, saturation, fluoride
- Critical pH: 5.5 for enamel, 6.2 for dentin
- Fluoridated apatite less soluble: Critical pH ~4.5

*De- and Remineralization Dynamics:*
- Surface layer remains relatively intact
- Subsurface demineralization (surface zone is hypermineralized)
- Pores filled with water and dissolved ions
- Remineralization from surface inward

**White Spot Lesion Formation:**
- Porosity increases in subsurface region
- Light scattering creates white appearance
- Surface layer remains relatively mineralized
- Zone of destruction: Body of lesion
- Dark zone: Slight remineralization
- Transparent zone: Advancing front

## Histopathology

**Enamel Caries:**

*Zones (from surface inward):*
1. **Translucent zone**: Advancing front, slight demineralization
2. **Dark zone**: Demineralization + remineralization
3. **Body of lesion**: Maximum demineralization (pores ~25% volume)
4. **Surface zone**: Relatively intact, hypermineralized from remineralization

**Dentin Caries:**

*Zones (from DEJ outward):*
1. **Normal dentin**: Unaffected
2. **Sub-transparent dentin**: Slight demineralization
3. **Transparent dentin**: Sclerosis, hypermineralized
4. **Translucent dentin**: Demineralization, collagen intact
5. **Infected dentin**: Bacteria present, collagen destroyed (cannot remineralize)
6. **Affected dentin**: Demineralized but collagen intact (can remineralize)

**Caries Progression Through Enamel:**
- Lateral spread at DEJ before advancing
- Cone-shaped lesion (base at DEJ)
- Faster progression in dentin

**Dentine Reaction:**
- Sclerotic dentin: Tubules obliterated by mineral deposition
- Reactive dentin: Tertiary dentin formation
- Pulp inflammation: Reversible to irreversible pulpitis

## Caries Risk Assessment Models

**CAMBRA (Caries Management by Risk Assessment):**

*Risk Factors:*
- Disease indicators (existing lesions, white spots)
- Biological factors (bacteria, saliva, diet)
- Protective factors (fluoride, antibacterials)

*Risk Categories:*

| Risk | Characteristics |
|------|----------------|
| Low | No new lesions, low bacteria, good fluoride, good diet |
| Moderate | Some new lesions, moderate bacteria, some fluoride |
| High | Multiple lesions, high bacteria, poor diet, low fluoride |
| Extreme | Rampant caries, xerostomia, special needs, radiation |

*Prevention by Risk Level:*

| Risk | Fluoride | Antibacterial | Diet | Recall |
|------|----------|---------------|------|--------|
| Low | OTC paste | None | Monitor | 12 mo |
| Moderate | OTC paste | Chlorhexidine PRN | Counsel | 6 mo |
| High | Rx paste (5000 ppm) | Chlorhexidine | Strict | 3-4 mo |
| Extreme | Rx + varnish | Chlorhexidine + high xylitol | Strict | 3 mo |

## Fluoride Mechanisms

**Systemic Fluoride (Pre-eruptive):**
- Incorporation into developing enamel crystals
- Formation of fluorapatite (more acid-resistant)
- Reduced solubility
- Enhanced crystal growth

**Topical Fluoride (Post-eruptive):**
- Surface enhancement: Fluorapatite formation
- Remineralization: Accelerates mineral deposition
- Inhibition: Interferes with bacterial metabolism
- Surface effects: Reduces enamel solubility

**Forms:**
- Toothpaste (1000-1500 ppm)
- Prescription toothpaste (5000 ppm)
- Varnish (22,600 ppm)
- Gel/APF (12,300 ppm)
- Rinse (230 ppm)
- Water (0.7-1.2 ppm optimal)

**Fluorosis:**
- Mild: White flecks, opaque areas (cosmetic only)
- Moderate: Brown staining, pitting
- Severe: Significant pitting and staining
- Risk: Excessive fluoride during development (8 years and younger)

## Contemporary Caries Management

**Medical Management:**
- Treat as infectious disease
- Bacterial reduction (chlorhexidine, povidone iodine)
- pH elevation (xylitol, arginine bicarbonate)
- Remineralization (fluoride, CPP-ACP)

**Surgical Management:**
- Remove infected dentin only
- Preserve affected dentin
- Minimally invasive techniques
- Biomimetic materials

**Non-Restorative Cavity Control:**
- Sealed cavities (Hall Technique)
- Atraumatic Restorative Treatment (ART)
- Selective caries removal
- Stepwise excavation

**Indications for Restoration:**
- Cavitation with breakdown
- Lesion extends into dentin
- Lesion not cleansable (pit/fissure)
- Patient symptoms
- Esthetic concerns`,
      keyTerms: [
        { term: 'ecological plaque hypothesis', definition: 'Caries results from shift in biofilm ecology due to environmental changes' },
        { term: 'aciduric', definition: 'Able to tolerate and grow in acidic conditions' },
        { term: 'acidogenic', definition: 'Producing acid' },
        { term: 'sclerotic dentin', definition: 'Transparent dentin with mineral-filled tubules; response to chronic irritation' },
        { term: 'CAMBRA', definition: 'Caries Management by Risk Assessment; systematic approach to caries prevention' },
        { term: 'CPP-ACP', definition: 'Casein phosphopeptide-amorphous calcium phosphate; remineralization agent' },
        { term: 'Hall Technique', definition: 'Sealing carious primary molars without excavation' },
      ],
      clinicalNotes: 'Infected dentin is irreversibly demineralized with collagen degradation - must be removed. Affected dentin can remineralize if sealed. Over 90% of posterior surfaces have some form of caries or restoration by adulthood. Fluoride varnish is the most effective professionally-applied fluoride treatment.',
      patientCounselingPoints: [
        'Chew xylitol gum (5-10g/day) to reduce S. mutans counts',
        'Prescription fluoride toothpaste (5000 ppm) if high caries risk',
        'Frequent snacking is the #1 dietary risk factor',
      ],
    },
    4: {
      level: 4,
      summary: 'Current cariology research focuses on the oral microbiome dysbiosis model, genetic susceptibility markers, enamel proteomics, and novel biomimetic remineralization strategies. The disease is now understood through ecological and molecular frameworks rather than simple specific pathogen models.',
      explanation: `## Advanced Concepts in Cariology

**Microbiome Dysbiosis Model:**

*Beyond S. mutans:*
- Caries is polymicrobial, not single-pathogen
- Keystone pathogens: S. mutans, but also others
- Pathogen synergism: Metabolic cross-feeding
- Acid production by non-mutans streptococci
- Scardovia wiggsiae: Aciduric, caries-associated
- Actinomyces: Root caries association
- Veillonella: Lactate consumer, but contributes to dysbiosis
- Candida albicans: Fungal contributor, especially in early childhood caries

*Biofilm Architecture:*
- EPS matrix: Glucans provide structure, diffusion barrier
- Microenvironments: pH gradients within biofilm
- Persister cells: Survive antimicrobials
- Quorum sensing: Coordinates gene expression

*Metabolic Activity:*
- Acid production from diverse substrates
- Intracellular polysaccharides: Sustained acid production
- Competitive sugar metabolism: Aciduric species advantage
- Bacteriocin production: Interbacterial competition

**Genetic Susceptibility:**

*Enamel Formation Genes:*
- AMELX: Amelogenin (X-linked)
- ENAM: Enamelin
- AMBN: Ameloblastin
- MMP20: Enamelysin
- KLK4: Kallikrein-4
- FAM83H: Enamel calcification

*Saliva Composition Genes:*
- CA6: Carbonic anhydrase (pH buffering)
- AQP5: Aquaporin (salivary flow)
- MUC5B, MUC7: Mucins
- AMY1: Amylase copy number variation

*Taste and Dietary Preference:*
- TAS1R2, TAS1R3: Sweet taste receptors
- Genetic preference for sweets
- Influences caries risk

*Immune Response Genes:*
- IL-1 polymorphisms: Inflammatory response
- DEFB1: Defensin beta-1 (antimicrobial peptide)
- FcγR receptors: Antibody response

**Enamel Proteomics:**

*Mature Enamel:*
- Most protein removed during maturation
- Residual proteins: Key biomarkers
- Enamel defects reveal developmental insults
- Enamel thickness variation

*Protein Retention:*
- Enamelins, amelogenin remnants
- Near DEJ: More protein content
- Influences acid resistance
- Affects bonding to restorative materials

**Advanced Remineralization:**

*CPP-ACP (Recaldent):*
- Casein phosphopeptide stabilizes calcium-phosphate
- Maintains supersaturation
- Delivers ions to enamel surface
- Clinical: MI Paste, Tooth Mousse
- Evidence: Moderate efficacy for white spot lesions

*Biomimetic Approaches:*
- P11-4 peptide: Self-assembling scaffold
- Artificial enamel: Not yet clinically available
- Hierarchical structure replication
- Challenges: Prism orientation, long-term stability

*Nanohydroxyapatite:*
- Particle size: 20-100 nm
- Incorporates into enamel structure
- Clinical: Some toothpastes
- Evidence: Emerging

*Silver Diamine Fluoride (SDF):*
- 38% SDF: FDA-cleared for hypersensitivity
- 38% SDF: Off-label for caries arrest
- Mechanism: Silver (antimicrobial) + fluoride (remineralization)
- Efficacy: >80% caries arrest
- Drawback: Black staining of lesions
- Indications: Arrest lesions in uncooperative patients, elderly

**Diagnosis Advances:**

*Quantitative Light-Induced Fluorescence (QLF):*
- Detects early demineralization
- Quantifies lesion volume over time
- Sensitivity > visual examination
- Limitation: Requires clean, dry teeth

*Optical Coherence Tomography (OCT):*
- Cross-sectional imaging
- Detects lesion depth
- No ionizing radiation
- Limitation: Cost

*Near-Infrared (NIR) Transillumination:*
- Detects proximal lesions
- Sensitive to lesion depth
- Complementary to radiographs

*Salivary Diagnostics:*
- S. mutans counts (culture or PCR)
- Acid production capacity
- Buffer capacity
- Flow rate measurement
- Biomarkers: MMP-8, IL-1β

**Medical Management:**

*Antimicrobials:*
- Chlorhexidine (0.12%): Short-term reduction
- Povidone iodine (10%): S. mutans reduction
- Fluoride + antibacterial synergy

*pH Modifiers:*
- Arginine bicarbonate: Neutralizes acid
- Xylitol: Reduces S. mutans, stimulates saliva
- Bicarbonate chewing gum: Raises pH

*Behavioral Interventions:*
- Motivational interviewing
- Sugar reduction counseling
- Oral hygiene coaching
- Habit modification

**Emerging Therapies:**

*Vaccines:*
- S. mutans antigen targets
- Glucosyltransferase inhibition
- Animal studies only
- Challenges: Autoimmunity concerns, multiple pathogens

*Probiotics:*
- L. rhamnosus, L. reuteri
- Mechanism: Competitive exclusion
- Evidence: Limited but promising
- S. salivarius (M18): Produces bacteriocins

*Photodynamic Therapy:*
- Photosensitizer + light
- Produces reactive oxygen species
- Kills cariogenic bacteria
- Adjunctive use

*Laser Caries Detection:*
- DIAGNOdent: 655 nm laser
- Fluorescence of bacterial metabolites
- Limitations: Staining, calculus produce false positives`,
      keyTerms: [
        { term: 'dysbiosis', definition: 'Microbial imbalance; shift from health-associated to disease-associated community' },
        { term: 'keystone pathogen', definition: 'Low-abundance species that disproportionately affects community structure and function' },
        { term: 'EPS', definition: 'Extracellular polymeric substance; biofilm matrix material' },
        { term: 'SDF', definition: 'Silver diamine fluoride; caries-arresting agent causing black staining' },
        { term: 'QLF', definition: 'Quantitative light-induced fluorescence; early caries detection method' },
      ],
      clinicalNotes: 'SDF is a game-changer for managing caries in patients unable to tolerate conventional treatment. CPP-ACP products are most effective for white spot lesions. Genetic testing for caries risk is not yet clinically useful but emerging. CAMBRA is now standard of care for caries management.',
    },
    5: {
      level: 5,
      summary: 'Contemporary cariology integrates omics technologies, systems biology approaches, and precision medicine. Emerging frontiers include microbiome engineering, epigenetic modulation of cariogenicity, and artificial intelligence for caries prediction and personalized prevention.',
      explanation: `## Frontiers in Cariology

### Systems Biology Approaches

**Multi-Omics Integration:**
- Metagenomics: Microbial composition
- Metatranscriptomics: Active genes
- Metaproteomics: Expressed enzymes
- Metabolomics: Metabolic end products
- Integration reveals functional dysbiosis

**Machine Learning for Risk Prediction:**
- Integration of clinical, genetic, microbiome data
- Neural networks for lesion progression prediction
- Individualized caries risk algorithms
- Precision prevention protocols

**Network Analysis:**
- Microbial co-occurrence networks
- Metabolic cross-feeding pathways
- Critical node identification
- Microbial keystone species

### Novel Therapeutic Horizons

**Microbiome Engineering:**
- Probiotic design from healthy oral microbiome
- Prebiotic targeting of beneficial species
- Synbiotic approaches
- Phage therapy against cariogenic bacteria
- Enzyme inhibitors: Glucosyltransferase blockers
- Quorum sensing interference

**Gene Editing Approaches:**
- CRISPR-Cas targeting S. mutans virulence genes
- Commensal modification for probiotic function
- Challenges: Delivery, off-target effects, regulation

**Imune Modulation:**
- Passive immunization: Monoclonal antibodies against S. mutans adhesins
- Active immunization: Caries vaccines (developmental)
- Secretory IgA enhancement
- Mucosal vaccination routes

**Epigenetic Modulation:**
- Histone deacetylase inhibitors
- MicroRNA targeting
- Enzyme gene expression modulation
- Phenotypic switching of bacteria

### Advanced Biomaterials

**Smart Materials:**
- pH-responsive release of ions
- Multifunctional nanoparticles
- Bioactive glass composites
- Self-healing materials

**Regenerative Approaches:**
- Enamel regeneration biomimetics
- Stem cell applications
- 3D printing of enamel-like structures
- Layer-by-layer crystal growth

**Minimally Invasive Technologies:**
- Resin infiltration (ICON): Early lesions
- Enamel microabrasion: White spot improvement
- Icon of proximal lesions: No drilling
- Guided enamel regeneration: Concept stage

### Salivary Diagnostics Revolution

**Point-of-Care Testing:**
- Chairside pathogen detection
- Biomarker quantification (IL-1β, MMP-8)
- Genetic susceptibility screening
- Metabolite profiling

**Digital Health Integration:**
- Smartphone-based caries screening
- Home monitoring devices
- AI-powered image analysis
- Tele-dentistry for remote monitoring

**Liquid Biopsy Applications:**
- Circulating bacterial DNA
- Exosomal biomarkers
- Enzymatic activity assays
- Predictive analytics

### Clinical Translation Challenges

**Evidence-Based Practice:**
- Moving beyond tradition
- Personalized protocols
- Risk-stratified care
- Outcomes measurement

**Implementation Science:**
- Translating research to practice
- Provider adoption barriers
- Patient acceptance
- Cost-effectiveness
- Reimbursement models

**Regulatory Landscape:**
- Combination product regulations
- Device vs. drug classification
- AI/algorithm validation
- Direct-to-consumer testing

**Ethical Considerations:**
- Genetic testing disclosure
- Microbiome manipulation risks
- Equitable access to advanced care
- Data privacy in AI applications

### Future Clinical Practice Vision

**Pre-Caries Detection:**
- Identify at-risk patients before lesions
- Preventive intervention at earliest signs
- Microbiome manipulation
- Personalized fluoride protocols

**Non-Restorative Management:**
- Sealing rather than restoring
- Medical management of lesions
- Monitoring instead of intervening
- Biomarker-guided recall intervals

**Precision Cariology:**
- Genetic risk profiling
- Microbiome composition analysis
- Metabolic phenotype assessment
- Targeted intervention selection
- Outcome prediction

**Integrated Care:**
- Medical-dental collaboration
- Caries as systemic disease marker
- Dietitian-nutritionist involvement
- Behavioral health integration

**Population Health:**
- School-based screening/prevention
- Community water fluoridation advocacy
- Screening in primary care
- Public health surveillance

### Research Priorities

**Short-term (1-3 years):**
- Validate salivary diagnostics
- Refine SDF protocols (stain reduction)
- Optimize CAMBRA implementation
- Expand resin infiltration applications

**Mid-term (3-7 years):**
- Microbiome-based therapies
- Point-of-care genetic testing
- AI-driven risk assessment
- Non-invasive early lesion management

**Long-term (7+ years):**
- Enamel regeneration clinical application
- Caries vaccine development
- Personalized microbiome engineering
- Integration with systemic health monitoring`,
      keyTerms: [
        { term: 'metatranscriptomics', definition: 'Study of gene expression in microbial communities' },
        { term: 'network analysis', definition: 'Mathematical analysis of relationships and interactions in complex systems' },
        { term: 'phage therapy', definition: 'Use of bacteriophages to treat bacterial infections' },
        { term: 'liquid biopsy', definition: 'Analysis of biomarkers in body fluids for disease detection' },
      ],
      clinicalNotes: `Future clinical practice:
1. Salivary diagnostics will become routine for caries risk assessment
2. Microbiome testing will guide personalized prevention
3. SDF will be standard for managing caries in special populations
4. AI will assist with early caries detection and monitoring
5. Non-restorative management will expand as biomaterials improve
6. Medical and dental care integration will improve systemic health outcomes`,
    },
  },

  media: [
    {
      id: 'caries-progression',
      type: 'diagram',
      filename: 'caries-progression.svg',
      title: 'Caries Progression',
      description: 'Progression of caries from early demineralization to cavitation',
    },
    {
      id: 'stehan-curve',
      type: 'diagram',
      filename: 'stephan-curve.svg',
      title: 'Stephan Curve',
      description: 'pH changes in plaque following sugar intake',
    },
  ],

  citations: [
    {
      id: 'fejerskov-caries',
      type: 'textbook',
      title: 'Dental Caries: The Disease and its Clinical Management',
      authors: ['Fejerskov, O.', 'Kidd, E.'],
      source: 'Wiley-Blackwell',
      chapter: 'Chapters 1-10',
    },
    {
      id: 'young-caries-management',
      type: 'textbook',
      title: 'Dental Caries: Principles and Management',
      authors: ['Young, D.A.', 'Featherstone, J.D.B.'],
      source: 'Wiley',
      chapter: 'Chapters 1-15',
    },
    {
      id: 'cambra-guidelines',
      type: 'article',
      title: 'Caries Management by Risk Assessment',
      authors: ['Young, D.A.', 'Buchanan, W.'],
      source: 'Journal of the California Dental Association',
      chapter: '2019',
    },
  ],

  crossReferences: [
    { targetId: 'structure-tooth-structure', targetType: 'structure', relationship: 'related', label: 'Tooth Structure' },
    { targetId: 'procedure-dental-hygiene-basics', targetType: 'topic', relationship: 'related', label: 'Dental Hygiene' },
    { targetId: 'topic-fluoride', targetType: 'topic', relationship: 'related', label: 'Fluoride' },
    { targetId: 'condition-oral-systemic-health', targetType: 'condition', relationship: 'related', label: 'Oral Systemic Health' },
  ],

  tags: {
    systems: ['dental'],
    structures: ['enamel', 'dentin', 'tooth'],
    topics: ['pathology', 'microbiology', 'nutrition', 'prevention'],
    keywords: ['caries', 'cavities', 'tooth decay', 'demineralization', 'remineralization', 'S. mutans', 'fluoride'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default toothDecay;
