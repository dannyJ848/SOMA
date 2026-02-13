/**
 * Normal Variation - Anatomical Variations
 *
 * The spectrum of normal anatomical variation that occurs within
 * healthy populations without pathological significance.
 */

import { EducationalContent } from '../../types';

export const NORMAL_VARIATION: EducationalContent = {
  id: 'anatomy-anomalies-normal-variation',
  type: 'concept',
  name: 'Normal Variation',
  alternateNames: ['Physiologic Variation', 'Normal Anatomical Spectrum', 'Range of Normal'],

  levels: {
    1: {
      level: 1,
      summary: 'Normal variation refers to the natural differences in body structure that exist between healthy people, similar to how people have different heights or eye colors.',
      explanation: `**What Is Normal Variation?**

Normal variation means the natural differences that make each person's body unique. Just like some people are tall and some are short, our internal organs and structures can also be different in perfectly normal ways.

**Key Points:**

- Everyone is different inside and out
- These differences are completely normal and healthy
- They don't cause diseases or health problems
- Doctors learn to recognize them so they don't mistake them for problems

**Examples of Normal Variation:**

**Size Differences:**
- Heart size varies by body size
- Liver can be larger or smaller
- Kidneys come in different sizes
- Bones have different lengths and thicknesses

**Shape Differences:**
- Organs can have different shapes
- Bones may curve slightly differently
- Muscles attach in different patterns

**Position Differences:**
- Organs might sit slightly differently
- Blood vessels take different paths
- Nerves follow varied routes

**Number Differences:**
- Some people have extra small bones
- Blood vessels can branch differently
- Small anatomical parts may vary in number

**Why Does This Matter?**

Understanding normal variation is important because:

1. **Avoids Unnecessary Worry**: Your differences are normal
2. **Prevents Misdiagnosis**: Doctors won't mistake normal for disease
3. **Better Healthcare**: Treatment can be personalized to you
4. **Surgical Safety**: Surgeons know what to expect`,

      keyTerms: [
        { term: 'normal variation', definition: 'Natural differences between people that don\'t cause health problems' },
        { term: 'spectrum', definition: 'The full range of what\'s considered normal' },
        { term: 'anatomy', definition: 'The structure of the body and how parts are arranged' },
        { term: 'healthy', definition: 'Free from disease or illness' },
      ],

      analogies: [
        'Normal variation is like different types of trees - they\'re all trees but come in many shapes and sizes.',
        'Think of normal variation like different house styles - they all provide shelter but look different.',
      ],

      examples: [
        'Some people\'s hearts naturally sit a little more to the left than others.',
        'The liver can extend further below the ribs in some people.',
        'Blood vessels in the arm can take different paths to the same place.',
      ],

      patientCounselingPoints: [
        'The variations in your anatomy are unique to you and completely normal.',
        'If your doctor mentions a variation, it\'s usually just a note about your unique anatomy.',
        'Normal variations don\'t typically require treatment or monitoring.',
      ],
    },

    2: {
      level: 2,
      summary: 'Normal variation encompasses the range of anatomical differences found in healthy populations, representing the natural diversity of human anatomy without pathological significance.',
      explanation: `**Understanding Normal Variation**

Normal variation defines the spectrum of anatomical diversity that exists within healthy individuals. These variations are:

- Present from birth or develop normally
- Do not cause disease or dysfunction
- Occur across a continuous spectrum
- Must be distinguished from pathological changes

**Defining "Normal":**

**Statistical Definition:**
- Within 2 standard deviations of mean
- Present in >5% of population
- No associated pathology
- No functional impairment

**Clinical Definition:**
- Does not require treatment
- Does not increase disease risk
- Not associated with symptoms
- Compatible with normal life expectancy

**Categories of Normal Variation:**

**1. Morphometric Variation:**
| Structure | Normal Range | Clinical Relevance |
|-----------|--------------|-------------------|
| Heart size | 0.42-0.52 cm/kg | Adjusted to body size |
| Liver span | 6-12 cm (MCL) | Obesity affects span |
| Kidney length | 10-12 cm | Height correlated |
| Spleen length | 7-14 cm | Varies with body habitus |

**2. Topographic Variation:**
- Organ position within normal range
- Vascular routing variations
- Nerve course differences
- Relationship variations between structures

**3. Numerical Variation:**
| Variant | Normal Variant | Pathological |
|---------|----------------|--------------|
| Ribs | 11-13 pairs | <11 (agenesis), >13 |
| Vertebrae | 32-34 | Major hemivertebrae |
| Sesamoids | Variable | Symptomatic enlargement |
| Teeth | 28-32 (adults) | Agenesis, supernumerary |

**4. Structural Variation:**
- Fusion variants (sutures, bones)
- Shape variations (organs, bones)
- Attachment variations (muscles, ligaments)
- Configuration variations (branching patterns)`,

      keyTerms: [
        { term: 'morphometric', definition: 'Related to measurements of body form and structure' },
        { term: 'topographic', definition: 'Related to the position of structures in the body' },
        { term: 'spectrum', definition: 'The complete range of variation in a population' },
        { term: 'pathological', definition: 'Related to or caused by disease' },
        { term: 'clinical relevance', definition: 'Importance for patient care or medical decision-making' },
      ],

      analogies: [
        'Normal variation in organ size is like shoe sizes - there\'s a range that fits most people, and extremes on either end are rare.',
        'Topographic variation is like different routes to the same destination - the paths vary but reach the same place.',
      ],

      clinicalNotes: 'The challenge in clinical practice is distinguishing normal variation from early pathological change. Established reference ranges based on age, sex, and body size help in this distinction. Imaging often reveals variants that were previously unrecognized.',
    },

    3: {
      level: 3,
      summary: 'Normal variation represents the biological diversity resulting from genetic, developmental, and environmental influences that produce anatomical differences across populations while maintaining physiological homeostasis.',
      explanation: `**Biological Basis of Normal Variation:**

**Genetic Influences:**

*Population Genetics:*
- **Allelic variation**: Different gene variants produce phenotypic diversity
- **Polygenic traits**: Multiple genes contribute to anatomical features
- **Sexual dimorphism**: Male/female anatomical differences
- **Ethnic variation**: Geographically isolated gene pools

*Developmental Influences:*
- **Embryological timing**: Small temporal shifts affect outcome
- **In utero position**: Mechanical influences on development
- **Nutritional status**: Maternal nutrition affects fetal growth
- **Hormonal milieu**: Endocrine environment shapes development

**Quantitative Assessment of Variation:**

*Reference Ranges:*

| Measurement | Mean ± SD | Normal Range (95%) |
|-------------|-----------|-------------------|
| Left kidney length | 11.1 ± 0.9 cm | 9.3-12.9 cm |
| Right kidney length | 10.7 ± 1.0 cm | 8.7-12.7 cm |
| Liver span (MCL) | 10.5 ± 1.5 cm | 7.5-13.5 cm |
| Spleen length | 10.0 ± 1.5 cm | 7.0-13.0 cm |
| Cardiac diameter (chest X-ray) | 0.45 ± 0.05 | 0.35-0.55 |

*Allometric Scaling:*
- Organs scale with body size
- Brain: allometric exponent ~0.75
- Heart: allometric exponent ~0.98
- Liver: allometric exponent ~0.85
- Kidneys: allometric exponent ~0.82

**System-Specific Normal Variation:**

*Cardiovascular:*
- **Heart position**: Apex 5th ICS, MCL to anterior axillary line
- **Coronary dominance**: Right (60-70%), left (8-10%), codominant (20-30%)
- **Coronary artery course**: Variable length of main stems
- **Cardiac rotation**: Levorotation, dextrorotation within normal range

*Respiratory:*
- **Lung dimensions**: Height dependent
- **Bronchial branching**: Minor variations common
- **Diaphragm position**: Varies with inspiration
- **Lung fissure completeness**: Incomplete fissures common

*Gastrointestinal:*
- **Stomach shape**: J-shape to elongated variants
- **Colon length**: Significant variation (1.5-2.0 m)
- **Liver morphology:**
  - Right lobe predominance (most common)
  - Left lobe hypertrophy (some individuals)
  - Accessory lobes (common)

*Genitourinary:*
- **Kidney position**: T10-L3 range
- **Renal axis angle**: 0-30° from vertical
- **Uterine position**: Anteverted, midposition, retroverted
- **Ovarian position**: Variable within pelvis

*Musculoskeletal:*
- **Vertebral number**: Usually 7C, 12T, 5L, 5S
- **Rib number**: Typically 12 pairs
- **Sesamoid number**: Variable by site
- **Muscle fusion**: Variants common

**Distinguishing Normal from Abnormal:**

| Feature | Normal Variation | Abnormal Finding |
|---------|------------------|------------------|
| Symmetry | Subtle asymmetry common | Marked asymmetry |
| Position | Within expected range | Displaced |
| Size | Proportional to body | Disproportionate |
| Morphology | Smooth contours | Irregular, distorted |
| Function | Preserved | Impaired |
| Symptoms | None | Present |`,

      keyTerms: [
        { term: 'allometric scaling', definition: 'Relationship between organ size and body size across species or individuals' },
        { term: 'polygenic traits', definition: 'Characteristics influenced by multiple genes' },
        { term: 'sexual dimorphism', definition: 'Systematic difference in form between males and females' },
        { term: 'homeostasis', definition: 'Maintenance of stable internal conditions despite external changes' },
        { term: 'morphology', definition: 'The form and structure of organisms or their parts' },
      ],

      analogies: [
        'Allometric scaling is like how different car sizes need different engines - larger bodies need proportionally larger organs.',
        'Sexual dimorphism in anatomy is like different tool designs for different jobs - similar functions but different forms.',
      ],

      clinicalNotes: 'Reference values must be adjusted for age, sex, body size, and ethnicity. What is normal for one demographic may be abnormal for another. The concept of "normal" is a statistical range, not a single value.',
    },

    4: {
      level: 4,
      summary: 'Normal variation encompasses the complex interplay of genetic diversity, developmental plasticity, and environmental influences that produce anatomical heterogeneity while preserving physiological function and health.',
      explanation: `**Developmental Plasticity and Variation:**

*Developmental Origins of Variation:*

**Canalization:**
- Developmental buffering reduces variation
- Critical windows of susceptibility
- Genes control robustness vs. plasticity
- Trade-off between stability and adaptability

**Phenotypic Plasticity:**
- Single genotype produces multiple phenotypes
- Environment influences development
- Epigenetic mechanisms mediate effects
- Adaptive significance of variation

**Molecular Mechanisms:**

*Genetic Architecture:*
- **GWAS findings**: Hundreds of loci affect anatomy
- **Polygenic scores**: Predict morphological traits
- **Gene-gene interactions**: Epistasis
- **Gene-environment interactions**: Context-dependent effects

*Epigenetic Regulation:*
- **DNA methylation**: Tissue-specific patterns
- **Histone modifications**: Chromatin accessibility
- **Non-coding RNAs**: Post-transcriptional regulation
- **Transgenerational effects**: Inheritance of acquired traits

**Population-Level Variation:**

*Ancestral and Geographic Patterns:*

| Trait | Population Variation | Clinical Significance |
|-------|---------------------|----------------------|
| CYP450 enzymes | Metabolic differences | Drug dosing |
| HLA types | Ethnic distribution | Transplant matching |
| Cardiac dimensions | Ancestry-based | Diagnostic criteria |
| Bone density | Population differences | Fracture risk |
| Renal size | Height, ethnicity | Donor selection |

*Sex-Specific Variation:*

**Sexual Dimorphism Patterns:**
- **Cardiovascular**: Heart size, coronary artery diameter
- **Respiratory**: Lung volumes relative to size
- **Musculoskeletal**: Bone mass, muscle distribution
- **Abdominal**: Organ size, position relationships

**Hormonal Influences:**
- **Androgen effects**: Masculinization of anatomy
- **Estrogen effects**: Fat distribution, bone dimensions
- **Growth hormone**: Overall somatic growth
- **Thyroid hormone**: Metabolic and developmental effects

**Clinical Application of Normal Variation:**

*Imaging Interpretation:*

**Size-Based Criteria:**
- **CT/MR organometry**: Normal ranges established
- **Adjustment factors**: Age, sex, body surface area
- **Indexing**: To body size for accuracy
- **Longitudinal tracking**: Individual baselines

**Morphological Assessment:**
- **Contour evaluation**: Smooth vs. irregular
- **Symmetry assessment**: Paired structures
- **Relationship evaluation**: Normal spatial relationships
- **Signal characteristics**: Normal tissue properties

*Diagnostic Thresholds:*

**Upper Limits of Normal (ULN):**
- Right kidney length: 13 cm
- Left kidney length: 14 cm
- Liver span: 15 cm (tall males)
- Spleen length: 13 cm

**Lower Limits of Normal (LLN):**
- Kidney length: 9-10 cm
- Cortical thickness: 1.5-2.0 cm
- Organ parenchymal thickness: Organ-specific

**Age-Related Changes:**

*Developmental Variation:*
- **Neonatal**: Large head relative to body
- **Childhood**: Proportion changes
- **Puberty**: Sexual dimorphism emerges
- **Adult**: Stable proportions

*Involutional Changes:*
- **Brain**: Mild volume loss with age
- **Kidneys**: Progressive parenchymal loss
- **Liver**: Mild volume decrease
- **Spleen**: Age-related size change`,

      keyTerms: [
        { term: 'canalization', definition: 'Developmental buffering that reduces phenotypic variation despite genetic or environmental perturbations' },
        { term: 'phenotypic plasticity', definition: 'Ability of single genotype to produce different phenotypes in response to environmental conditions' },
        { term: 'GWAS', definition: 'Genome-wide association studies; identify genetic variants associated with traits' },
        { term: 'epistasis', definition: 'Interaction between genes where effect of one depends on presence of others' },
        { term: 'organometry', definition: 'Measurement and quantification of organ dimensions' },
      ],

      clinicalNotes: 'Normal variation must be distinguished from early disease. Age-appropriate reference ranges are essential. Population-specific norms improve diagnostic accuracy. Individual baselines, when available, provide the most sensitive reference for detecting change.',
    },

    5: {
      level: 5,
      summary: 'Normal variation represents the fundamental biological diversity that underpins human adaptation, with genetic, epigenetic, developmental, and environmental factors creating anatomical heterogeneity while maintaining physiological competence.',
      explanation: `**Theoretical Framework:**

*Evolutionary Medicine Perspective:*

**Balancing Selection:**
- **Heterozygote advantage**: Sickle cell trait example
- **Frequency-dependent selection**: Rare variants advantageous
- **Spatial/temporal variation**: Environment changes
- **Antagonistic pleiotropy**: Trade-offs across lifespan

**Adaptive Significance:**
- **Climate adaptation**: Body proportions (Allen's, Bergmann's rules)
- **Altitude adaptation**: Thoracic dimensions, vascular patterns
- **Dietary adaptation**: Enzyme variants, gut morphology
- **Pathogen resistance**: Immune system variation

**Genetic Architecture of Variation:**

*Heritability Estimates:*

| Trait | Heritability | Notes |
|-------|--------------|-------|
| Height | 0.8-0.9 | Very high genetic contribution |
| BMI | 0.4-0.7 | Significant environmental influence |
| Blood pressure | 0.3-0.5 | Polygenic + environment |
| Organ size | 0.3-0.6 | Varies by organ |
| Bone density | 0.6-0.8 | Strong genetic component |

*Polygenic Risk Scores:*
- **Morphological prediction**: Emerging capability
- **Clinical applications**: Anomaly risk assessment
- **Limitations**: Population specificity
- **Future directions**: Personalized reference ranges

**Developmental Biology of Variation:**

*Systems Biology Perspective:*

**Gene Regulatory Networks:**
- **Robustness mechanisms**: Feedback, redundancy
- **Modularity**: Independent trait development
- **Pleiotropy**: Genes affecting multiple traits
- **Epistasis**: Network interactions

**Developmental Constraints:**
- **Physical constraints**: Space, mechanical forces
- **Phylogenetic constraints**: Evolutionary history
- **Developmental pathways**: Limited variation within
- **Adaptive landscapes**: Peaks and valleys

**Clinical Implementation:**

*Precision Medicine Applications:*

**Personalized Reference Ranges:**
- **Genotype-based**: Genetic background consideration
- **Phenotype-based**: Individual baseline tracking
- **Ethnicity-adjusted**: Population-specific norms
- **Demographic-adjusted**: Age, sex considerations

**Anomaly Detection:**
- **Machine learning**: Pattern recognition
- **Big data**: Large normative datasets
- **AI-assisted**: Automated interpretation
- **Decision support**: Clinical integration

**Ethical and Social Considerations:**

*Defining "Normal":*
- **Statistical vs. clinical**: Differing definitions
- **Cultural factors**: Perception of variation
- **Stigmatization**: Labeling concerns
- **Medicalization**: Pathologizing normal

*Equity Considerations:*
- **Reference population**: Who defines normal?
- **Access to testing**: Disparities in care
- **Genetic privacy**: Variant implications
- **Discrimination**: Insurance, employment

**Research Frontiers:**

*Emerging Areas:*
- **Multi-omics integration**: Genomics, epigenomics, transcriptomics
- **Longitudinal studies**: Lifespan variation tracking
- **Intervention studies**: Modifying expression
- **Regenerative medicine**: Cellular-level understanding

*Technological Advances:*
- **High-throughput phenotyping**: Automated measurement
- **Biobanks**: Large-scale population data
- **Wearable technology**: Continuous monitoring
- **Digital twins**: Individual modeling`,

      keyTerms: [
        { term: 'balancing selection', definition: 'Natural selection maintaining genetic diversity in population' },
        { term: 'heterozygote advantage', definition: 'Survival advantage of heterozygotes over either homozygote' },
        { term: 'pleiotropy', definition: 'One gene influencing multiple phenotypic traits' },
        { term: 'adaptive landscape', definition: 'Visual representation of fitness relationships between phenotypes' },
        { term: 'Allen\'s rule', definition: 'Body protrusions like ears and limbs are shorter in colder climates' },
        { term: 'Bergmann\'s rule', definition: 'Body size increases with latitude in closely related species' },
      ],

      clinicalNotes: 'The definition of "normal" must be context-dependent, considering genetic background, demographic factors, and clinical context. Population-specific reference ranges improve diagnostic accuracy. As we understand more about genetic contributions to anatomical variation, personalized medicine approaches will become increasingly important.',
    },
  },

  media: [
    {
      id: 'normal-variation-1',
      type: 'diagram',
      filename: 'organ-size-reference.svg',
      title: 'Normal Organ Size Reference Ranges',
      description: 'Visual representation of normal organ dimensions adjusted for body size',
    },
  ],

  citations: [
    {
      id: 'standring-clinical',
      type: 'textbook',
      title: 'Clinical Anatomy',
      source: 'Gray\'s Anatomy, 42nd Edition',
      chapter: 'Clinical Anatomy',
      license: 'Copyrighted',
    },
    {
      id: 'moore-reference',
      type: 'textbook',
      title: 'Reference Values',
      source: 'Clinically Oriented Anatomy, Moore, 9th Edition',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'anatomy-anomalies-anatomical-variants', targetType: 'topic', relationship: 'related', label: 'Anatomical Variants' },
    { targetId: 'anatomy-anomalies-common-congenital', targetType: 'topic', relationship: 'related', label: 'Common Congenital Anomalies' },
  ],

  tags: {
    systems: ['all'],
    structures: [],
    topics: ['anatomy', 'normal variation', 'reference values', 'biometrics'],
    keywords: ['normal', 'variation', 'reference ranges', 'biometrics', 'anthropometry'],
    clinicalRelevance: 'medium',
    examRelevance: {
      usmle: true,
      nbme: false,
      shelf: ['radiology'],
    },
  },

  createdAt: '2025-01-25T00:00:00.000Z',
  updatedAt: '2025-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
