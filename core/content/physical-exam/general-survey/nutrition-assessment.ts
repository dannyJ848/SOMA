/**
 * Nutrition Assessment - Physical Examination
 *
 * Comprehensive content on nutritional status assessment through physical
 * examination findings, including signs of malnutrition, obesity, and
 * micronutrient deficiencies.
 */

import { EducationalContent } from '../../types';

export const nutritionAssessment: EducationalContent = {
  id: 'physical-exam-general-survey-nutrition',
  type: 'concept',
  name: 'Nutritional Assessment',
  alternateNames: ['Nutrition Status', 'Nutritional Evaluation', 'Malnutrition Assessment'],

  levels: {
    1: {
      level: 1,
      summary: 'Doctors can tell a lot about how well-nourished someone is by looking at their body, skin, hair, and nails.',
      explanation: `Just like a plant shows signs when it's not getting enough water or sunlight, our bodies show signs when we're not getting the right nutrition. Doctors can assess nutrition by looking at different parts of the body.

**What Doctors Look For:**

**Body Size and Shape:**
- Is the person too thin, too heavy, or just right?
- Being very thin can mean not enough food or illness
- Being very heavy can also cause health problems

**Appearance of Face:**
- Swollen belly but thin arms and legs (severe malnutrition)
- Pale skin (might not have enough iron)
- Dry, cracked lips (vitamin deficiency)

**Hair:**
- Dry, brittle hair that falls out easily
- Hair color changes
- Sparse or thin hair

**Skin:**
- Dry, flaky skin
- Pale skin
- Easy bruising
- Rashes or discoloration

**Nails:**
- Spoon-shaped nails
- Pale or white nails
- Brittle nails that break easily

**Muscles:**
- Weak muscles
- Loss of muscle mass
- Trouble with physical activities

**Why This Matters:**
Good nutrition helps:
- Body grow and repair
- Fight infections
- Have energy for daily activities
- Think and learn clearly

**What Helps:**
- Eating a variety of healthy foods
- Fruits and vegetables
- Protein (meat, beans, nuts)
- Drinking enough water
- Taking vitamins if needed`,
      keyTerms: [
        { term: 'malnutrition', definition: 'When the body doesn\'t get enough nutrients or the right kind of food' },
        { term: 'nutrient', definition: 'Something in food that helps the body grow and work properly' },
        { term: 'vitamin', definition: 'A nutrient found in food that the body needs in small amounts' },
        { term: 'protein', definition: 'A nutrient that helps build muscles and repair the body' },
      ],
      analogies: [
        'Your body is like a car - it needs the right fuel (food) to run properly.',
        'Malnutrition is like building a house without enough materials - things don\'t work as they should.',
      ],
      examples: [
        'A child who doesn\'t get enough protein might have swollen feet, a big belly, and thin arms.',
        'Someone who doesn\'t get enough iron might have pale skin and feel very tired.',
        'People who don\'t get enough vitamin C can get bleeding gums and bruise easily.',
      ],
    },
    2: {
      level: 2,
      summary: 'Nutritional assessment through physical examination involves evaluating body habitus, tissue integrity, and specific signs that indicate macro- and micronutrient deficiencies.',
      explanation: `## Components of Nutritional Assessment

### Body Habitus Assessment

**BMI (Body Mass Index) Categories:**
| Category | BMI (kg/m²) | Physical Findings |
|----------|-------------|-------------------|
| Underweight | <18.5 | Muscle wasting, fat loss, bone prominence |
| Normal | 18.5-24.9 | Balanced body composition |
| Overweight | 25-29.9 | Increased adipose tissue |
| Obese | ≥30 | Marked fat deposition, strain on joints |
| Morbidly obese | ≥40 | Severe obesity, mobility impairment |

**Waist Circumference:**
- Men >40 inches (102 cm): Increased risk
- Women >35 inches (88 cm): Increased risk
- Indicates visceral adiposity (metabolic syndrome risk)

### Signs of Malnutrition

**Protein-Energy Malnutrition:**
- **Marasmus**: Severe calorie deprivation
  - Extreme wasting of muscle and fat
  - "Skin and bones" appearance
  - Loose, hanging skin folds
  - Prominent bones (ribs, spine)

- **Kwashiorkor**: Protein deficiency with adequate calories
  - Edema (swelling), especially in legs and abdomen
  - Hepatomegaly (fatty liver)
  - Thin, dry, discolored hair
  - Flaky paint rash (depigmented skin)
  - Moon facies

### Skin and Hair Findings

**Hair Changes:**
| Finding | Suggestive Deficiency |
|---------|----------------------|
| Dry, brittle | Essential fatty acids, zinc |
| Sparse, thin | Protein, general malnutrition |
| Flag sign (band of discoloration) | Protein-calorie malnutrition |
| Easy pluckability | Protein deficiency |

**Skin Changes:**
| Finding | Suggestive Deficiency |
|---------|----------------------|
| Dry, flaky (xerosis) | Vitamin A, EFAs, general malnutrition |
| Follicular hyperkeratosis | Vitamin A, EFAs |
| Petechiae, purpura | Vitamin C |
| Poor wound healing | Vitamin C, protein, zinc |
| Hyperpigmentation | Niacin, general B vitamins |

### Nail Findings

**Nail Changes:**
| Finding | Suggestive Deficiency |
|---------|----------------------|
| Koilonychia (spoon nails) | Iron |
| Brittle nails | Biotin, iron |
| Leukonychia (white nails) | Protein, zinc |
| Muehrcke lines (white bands) | Hypoalbuminemia |

### Other Physical Signs

**Oral Cavity:**
- Angular stomatitis (cracked mouth corners): Iron, riboflavin
- Glossitis (smooth tongue): Iron, B12, folate, niacin
- Swollen, bleeding gums: Vitamin C (scurvy)

**Musculoskeletal:**
- Muscle wasting: Protein-calorie malnutrition
- Bone deformities: Vitamin D (rickets), calcium
- Bone pain, fractures: Vitamin D, calcium

**General:**
- Edema: Protein deficiency (kwashiorkor)
- Fatigue, weakness: Multiple deficiencies
- Poor growth in children: Multiple deficiencies`,
      keyTerms: [
        { term: 'BMI', definition: 'Body Mass Index; a measure of body fat based on height and weight' },
        { term: 'marasmus', definition: 'Severe malnutrition causing extreme wasting of muscle and fat', pronunciation: 'mah-RAZ-mus' },
        { term: 'kwashiorkor', definition: 'Protein deficiency causing edema and fatty liver', pronunciation: 'kwash-ee-OR-kor' },
        { term: 'koilonychia', definition: 'Spoon-shaped nails; iron deficiency sign', pronunciation: 'koy-loh-NIK-ee-ah' },
        { term: 'glossitis', definition: 'Inflamed, smooth tongue; vitamin deficiency sign', pronunciation: 'gloss-EYE-tis' },
        { term: 'scurvy', definition: 'Disease from vitamin C deficiency causing bleeding gums and bruising' },
      ],
      analogies: [
        'Marasmus is like a house with no building materials - everything is weak and thin.',
        'Kwashiorkor is like a house with materials put together wrong - fluids leak where they shouldn\'t.',
      ],
    },
    3: {
      level: 3,
      summary: 'Nutritional assessment integrates anthropometric measurements, physical examination findings, and recognition of specific deficiency patterns to diagnose macro- and micronutrient disorders.',
      explanation: `## Systematic Nutritional Assessment

### Anthropometric Measurements

**Standard Measurements:**
| Measurement | Technique | Clinical Significance |
|-------------|-----------|----------------------|
| Height | Stadiometer, without shoes | Growth tracking, BMI calculation |
| Weight | Calibrated scale | Acute and chronic nutritional status |
| BMI | Weight (kg)/Height (m)² | Categorizes underweight to obese |
| Mid-upper arm circumference (MUAC) | Tape at midpoint | Muscle and fat stores |
| Waist circumference | Midpoint between iliac crest and rib | Visceral fat, metabolic risk |
| Triceps skinfold | Calipers at triceps | Fat stores |

**MUAC Interpretation (Adults):**
| Category | MUAC (cm) |
|----------|-----------|
| Severe malnutrition | <23.0 |
| Moderate malnutrition | 23.0-<25.0 |
| Mild malnutrition | 25.0-<27.5 |
| Normal | ≥27.5 |

**MUAC Interpretation (Children 6-59 months):**
| Category | MUAC (mm) |
|----------|-----------|
| Severe acute malnutrition | <115 |
| Moderate acute malnutrition | 115-124 |
| Normal | ≥125 |

### Physical Examination for Malnutrition

**Global Assessment (Subjective Global Assessment):**
1. **Weight change**: Percentage and time frame
2. **Dietary intake**: Changes, type
3. **GI symptoms**: Nausea, vomiting, diarrhea, anorexia
4. **Functional capacity**: Changes in activity
5. **Metabolic demand**: Stressors, illness

**Physical Findings Grading:**
| Finding | Mild | Moderate | Severe |
|---------|------|----------|--------|
| Loss of subcutaneous fat | Slight | Marked | Severe |
| Muscle wasting | Mild | Moderate | Severe |
| Ankle edema | None | Slight | Marked |
| Sacral edema | None | Present | Marked |

### Micronutrient Deficiency Patterns

**Iron Deficiency:**
- Pallor (conjunctiva, mucous membranes)
- Koilonychia (spoon nails)
- Angular stomatitis
- Glossitis (smooth, red tongue)
- Plummer-Vinson syndrome (esophageal webs)

**Vitamin B12 Deficiency:**
- Glossitis (beefy red tongue)
- Pallor
- Peripheral neuropathy
- Position sense loss
- Hyperreflexia or hyporeflexia
- Mental status changes

**Folate Deficiency:**
- Similar to B12 but without neuropathy
- No posterior column signs
- Mental changes possible

**Niacin (B3) Deficiency - Pellagra:**
- 3 D's: Diarrhea, Dermatitis, Dementia
- Photosensitive, hyperpigmented rash
- Casal's necklace (dermatitis on neck)
- Glossitis
- Neurologic symptoms

**Vitamin C Deficiency - Scurvy:**
- Bleeding gums, tooth loss
- Perifollicular hemorrhages
- Corkscrew hairs
- Poor wound healing
- Bone pain, subperiosteal hemorrhage
- Anemia

**Vitamin D Deficiency:**
- Children: Rickets (bone deformities, fractures)
- Adults: Osteomalacia (bone pain, fractures)
- Proximal muscle weakness
- Difficulty rising from chair
- Tetany (hypocalcemia)

**Vitamin A Deficiency:**
- Night blindness (first sign)
- Xerosis, xerophthalmia
- Bitot spots (conjunctival)
- Corneal ulceration, keratomalacia
- Follicular hyperkeratosis

**Thiamine (B1) Deficiency - Beriberi:**
- **Dry beriberi**: Neuropathy, muscle wasting
- **Wet beriberi**: High-output heart failure, edema
- Wernicke encephalopathy: Ataxia, ophthalmoplegia, confusion

**Zinc Deficiency:**
- Acrodermatitis enteropathica
- Periorificial and acral dermatitis
- Diarrhea
- Alopecia
- Impaired wound healing
**Selenium Deficiency:**
- Keshan disease (cardiomyopathy)
- Skeletal muscle myopathy
- Hair and nail changes

### Obesity Assessment

**Body Fat Distribution Patterns:**
- **Android (apple)**: Visceral fat, increased cardiometabolic risk
- **Gynecoid (pear)**: Subcutaneous fat, lower risk

**Complications of Obesity (Physical Exam Findings):**
- Acanthosis nigricans (insulin resistance)
- Skin tags
- Striae
- Panniculus (overhanging abdominal fold)
- Hepatomegaly (fatty liver)
- Joint changes (osteoarthritis)
- Edema (venous insufficiency, heart failure)`,
      keyTerms: [
        { term: 'anthropometric', definition: 'Relating to measurements of the human body', pronunciation: 'an-throw-poh-MET-rik' },
        { term: 'MUAC', definition: 'Mid-Upper Arm Circumference; screening tool for malnutrition' },
        { term: 'pellagra', definition: 'Niacin deficiency disease with diarrhea, dermatitis, and dementia', pronunciation: 'puh-LAG-rah' },
        { term: 'Wernicke encephalopathy', definition: 'Thiamine deficiency causing ataxia, ophthalmoplegia, confusion' },
        { term: 'acanthosis nigricans', definition: 'Dark, velvety skin patches in folds; insulin resistance marker' },
      ],
      clinicalNotes: 'Subjective Global Assessment (SGA) combines history and physical exam to classify nutritional status as well-nourished, moderately malnourished, or severely malnourished.',
    },
    4: {
      level: 4,
      summary: 'Advanced nutritional assessment integrates comprehensive physical findings with anthropometric data to identify specific deficiency syndromes, recognize patterns of malnutrition, and guide targeted nutritional interventions.',
      explanation: `## Comprehensive Physical Assessment of Nutrition

### Severe Protein-Energy Malnutrition

**Marasmus (Adaptive Starvation):**
- Metabolic adaptation to calorie deprivation
- Preserved protein at expense of growth
- Physical findings:
  - Severe wasting with loss of subcutaneous fat
  - "Old man" facies (loss of buccal fat pads)
  - Temporal and intercostal muscle wasting
  - Prominent clavicles, ribs, vertebrae
  - Loose, redundant skin
  - Reduced basal metabolic rate (adaptation)
- Laboratory: Decreased visceral proteins, decreased insulin, IGF-1

**Kwashiorkor (Protein Deficiency):**
- Inadequate protein with adequate carbohydrate intake
- Physical findings:
  - Edema (due to hypoalbuminemia, decreased oncotic pressure)
  - Hepatomegaly (fatty liver from impaired lipoprotein synthesis)
  - Moon facies (edema + fat redistribution)
  - Thin, sparse, depigmented hair (flag sign)
  - Flaky paint dermatosis (hypopigmented, desquamating)
  - Apathetic, irritable mood
  - Anorexia, diarrhea
- Laboratory: Low albumin, low transferrin, fatty liver

**Marasmic Kwashiorkor:**
- Features of both syndromes
- Worst prognosis

### Specific Deficiency Syndromes

**Scurvy (Vitamin C Deficiency):**
- Pathophysiology: Impaired collagen synthesis (proline/hydroxyproline hydroxylation)
- Physical findings:
  - Perifollicular hemorrhages (corkscrew hairs)
  - Bleeding gums, loose teeth
  - Subperiosteal hemorrhage (bone pain)
  - Poor wound healing
  - Petechiae, ecchymoses
  - Anemia (folate deficiency + bleeding)
- At-risk: Alcoholics, malabsorption, limited diet

**Pellagra (Niacin Deficiency):**
- Pathophysiology: Impaired NAD/NADP synthesis
- Classic triad: Diarrhea, Dermatitis, Dementia (4th D: Death if untreated)
- Physical findings:
  - Photosensitive, hyperpigmented rash (Casal's necklace on neck)
  - Dermatitis in sun-exposed areas (face, neck, dorsal hands)
  - Glossitis (beefy red tongue, later atrophic)
  - Angular stomatitis
  - Neurologic: Confusion, memory loss, psychosis
- Associated with: Corn-based diets (niacin bound), alcoholism, carcinoid

**Beriberi (Thiamine Deficiency):**
- **Wet Beriberi**: High-output heart failure
  - Cardiomegaly, tachycardia
  - Edema (peripheral, pulmonary)
  - Bounding pulses, wide pulse pressure
  - Vasodilation, warm extremities
- **Dry Beriberi**: Neuropathy and muscle wasting
  - Symmetric peripheral neuropathy (stocking-glove)
  - Muscle atrophy, weakness
  - Wernicke-Korsakoff syndrome
- Associated with: Alcoholism, polished rice diet, malabsorption

**Rickets/Osteomalacia (Vitamin D Deficiency):**
- **Rickets (Children)**:
  - Craniotabes (soft skull bones)
  - Rachitic rosary (costochondral junction enlargement)
  - Harrison groove (deformation from diaphragm pulling)
  - Bowing of long bones
  - Growth plate widening (X-ray)
- **Osteomalacia (Adults)**:
  - Bone pain, proximal muscle weakness
  - Difficulty rising from chair (positive Gower sign in children)
  - Pseudofractures (Looser zones)
  - Pathologic fractures

**Micronutrient Dermatoses:**
| Deficiency | Dermatologic Finding | Distribution |
|------------|---------------------|-------------|
| Zinc | Acrodermatitis enteropathica | Periorificial, acral |
| Essential fatty acids | Scaly, dry rash | Generalized |
| Biotin | Alopecia, dermatitis | Generalized |
| Vitamin A | Follicular hyperkeratosis | Extensor surfaces |
| Niacin | Photosensitive dermatitis | Sun-exposed areas |
| Vitamin C | Perifollicular hemorrhages | Lower extremities |

### Assessment in Special Populations

**Elderly Nutrition Assessment:**
- "Anorexia of aging": Decreased appetite, early satiety
- Sarcopenia: Age-related muscle loss
- Physical findings:
  - Decreased muscle mass (mid-arm circumference)
  - Loss of subcutaneous fat
  - Impaired mobility
  - Cognitive changes (B12 deficiency)
- Geriatric Failure to Thrive:
  - Unintentional weight loss
  - Decreased functional ability
  - Poor nutrition intake

**Critical Illness Nutrition:**
- Stress ulcer prophylaxis reduces micronutrient absorption
- Refeeding syndrome:
  - Severe hypophosphatemia
  - Fluid shifts, cardiac arrhythmias
  - Thiamine deficiency unmasked
- Physical exam limited by critical illness; rely on lab and pre-illness status`,
      keyTerms: [
        { term: 'flag sign', definition: 'Band of discoloration in hair indicating past episode of malnutrition' },
        { term: 'Casal\'s necklace', definition: 'Dermatitis in necklace distribution; characteristic of pellagra' },
        { term: 'rachitic rosary', definition: 'Enlarged costochondral joints in rickets; resembles rosary beads' },
        { term: 'craniotabes', definition: 'Soft, pliable skull bones in rickets; ping-pong ball sensation' },
        { term: 'sarcopenia', definition: 'Age-related loss of muscle mass and strength', pronunciation: 'sar-koh-PEE-nee-ah' },
        { term: 'refeeding syndrome', definition: 'Metabolic disturbances from rapid nutrition in severely malnourished' },
      ],
      clinicalNotes: 'In alcoholics, multiple deficiencies often coexist (thiamine, folate, B12, vitamin D, zinc). Always treat thiamine before glucose to avoid precipitating Wernicke encephalopathy.',
    },
    5: {
      level: 5,
      summary: 'Expert-level nutritional assessment integrates pattern recognition of complex deficiency syndromes with understanding of pathophysiology, enabling targeted diagnosis and management of nutrition disorders across diverse clinical contexts.',
      explanation: `## Advanced Concepts in Nutritional Assessment

### Redefining Malnutrition (GLIM Criteria)

**Global Leadership Initiative on Malnutrition:**
Requires at least ONE phenotypic criterion AND ONE etiologic criterion:

**Phenotypic Criteria:**
1. Unintentional weight loss:
   - >10% over 6 months OR
   - >5% over 1 month
2. Low BMI:
   - <20 if <70 years OR
   - <22 if >70 years
3. Reduced muscle mass:
   - Reduced muscle mass by DXA, BIA, or anthropometry

**Etiologic Criteria:**
1. Reduced food intake or assimilation
2. Inflammation (acute or chronic)
3. Disease burden

**Severity Grading:**
- Severe: Major weight loss + low BMI + severe muscle loss
- Moderate: Meets 2 phenotypic + 1 etiologic criteria

### Complex Deficiency Syndromes

**Alcoholic Malnutrition:**
| Deficiency | Physical Finding | Clinical Significance |
|------------|-----------------|----------------------|
| Thiamine (B1) | Wernicke, neuropathy | Medical emergency |
| Folate | Macrocytic anemia | Common |
| B12 | Neuropathy, anemia | Malabsorption |
| Vitamin D | Bone pain, fractures | Osteomalacia |
| Zinc | Dermatitis, dysgeusia | Taste changes |
| Magnesium | Arrhythmias, tremor | Withdrawal |

**Bariatric Surgery Nutrition:**
| Deficiency | Timeframe | Physical Findings |
|------------|-----------|-------------------|
| Thiamine | Weeks-months | Wernicke, neuropathy |
| B12 | Months-years | Neuropathy, anemia |
| Iron | Months-years | Pallor, koilonychia |
| Copper | Years | Anemia, neuropathy |
| Folate | Months | Glossitis, anemia |
| Calcium/D | Months-years | Bone pain, fractures |

**Malabsorption Syndromes:**

*Celiac Disease:*
- Iron, folate, B12 deficiency
- Fat-soluble vitamin deficiency (A, D, E, K)
- Short stature, failure to thrive (children)
- Dermatitis herpetiformis

*Inflammatory Bowel Disease:*
- Iron deficiency (blood loss, malabsorption)
- B12 deficiency (terminal ileum disease)
- Vitamin D deficiency
- Zinc deficiency (fluid losses)

*Pancreatic Insufficiency:*
- Fat-soluble vitamin deficiency
- Weight loss, steatorrhea
- Edema (protein loss)

*Short Bowel Syndrome:*
- Dependent on remaining length and location
- Jejunum: Iron, folate, B12 deficiency
- Ileum: B12, bile salt deficiency
- Colon: Fluid/electrolyte losses

### Interaction of Nutrition and Organ Systems

**Hepatic Nutrition Assessment:**
- Fatty liver (malnutrition, alcohol, obesity)
- Decreased synthetic function (albumin, coagulation factors)
- Muscle wasting, ascites
- Nutrient deficiencies (A, D, E, K, folate, B12)

**Renal Nutrition Assessment:**
- Protein-energy wasting
- Volume overload (edema)
- Electrolyte abnormalities (K, phosphate)
- Vitamin D deficiency (failed activation)
- Uremic symptoms (anorexia, nausea)

**Cardiac Cachexia:**
- NYHA class III-IV heart failure
- Neurohormonal activation (cachexia, TNF-α)
- Muscle wasting, weight loss despite adequate intake
- Poor prognosis

**Cancer Cachexia:**
- Multifactorial (decreased intake, inflammation, metabolic changes)
- Weight loss, muscle wasting
- Anorexia, early satiety
- Poor response to nutritional support

### Specialized Assessment Techniques

**Body Composition Analysis:**
| Method | What It Measures | Advantages | Limitations |
|--------|------------------|------------|-------------|
| DXA | Fat mass, lean mass, bone density | Gold standard, regional | Cost, radiation |
| BIA | Total body water, fat-free mass | Portable, inexpensive | Affected by hydration |
| CT/MRI | Visceral fat, muscle area | Precise, regional | Cost, access |
| Anthropometry | Skinfold thickness, circumference | Inexpensive, bedside | Operator-dependent |

**Muscle Function Testing:**
- Handgrip strength:
  - Men <28 kg, Women <18 kg = sarcopenia
  - Predicts morbidity, mortality
- Gait speed:
  - >1.0 m/s = normal
  - 0.8-1.0 m/s = mildly impaired
  - <0.8 m/s = severely impaired

### Nutrition-Focused Physical Exam Framework

**Head-to-Toe Approach:**
1. **General appearance**: Wasting, obesity, distress
2. **Hair**: Texture, loss, flag sign
3. **Face**: Pallor, moon facies, wasting
4. **Eyes**: Conjunctival pallor, Bitot spots (vitamin A)
5. **Mouth**: Angular stomatitis, glossitis, gum disease
6. **Skin**: Xerosis, dermatoses, bruising, edema
7. **Nails**: Koilonychia, leukonychia, brittleness
8. **Musculoskeletal**: Muscle wasting, tenderness
9. **Neurologic**: Neuropathy, ataxia, cognition

### Clinical Pearls

**Red Flags for Malnutrition:**
- >5% weight loss in 1 month
- >10% weight loss in 6 months
- BMI <18.5 or >40
-MUAC <23 cm
- Albumin <3.0 g/dL (with inflammation)
- Inability to rise from chair without arm support

**Refeeding Syndrome Risk Factors:**
- BMI <16
- Unintentional weight loss >15% in 3-6 months
- Little/no nutrition for >10 days
- Low electrolytes (K, PO4, Mg) before feeding`,
      keyTerms: [
        { term: 'GLIM criteria', definition: 'Global Leadership Initiative on Malnutrition diagnostic criteria' },
        { term: 'Wernicke-Korsakoff', definition: 'Thiamine deficiency syndrome: acute (Wernicke) and chronic (Korsakoff) manifestations' },
        { term: 'steatorrhea', definition: 'Fatty, foul-smelling stools from fat malabsorption', pronunciation: 'stee-ah-toh-REE-ah' },
        { term: 'dermatitis herpetiformis', definition: 'Blistering rash associated with celiac disease; gluten sensitivity' },
        { term: 'cachexia', definition: 'Complex metabolic syndrome with muscle wasting, not reversible with nutrition alone', pronunciation: 'kuh-KEK-see-ah' },
      ],
      clinicalNotes: `Expert Clinical Pearls:
1. Albumin is a poor acute nutritional marker (half-life 18-20 days, affected by inflammation)
2. Prealbumin (transthyretin) has shorter half-life (2-3 days) but still inflammation-sensitive
3. Physical exam findings lag behind biochemical deficiencies
4. Single micronutrient deficiencies are rare; multiple deficiencies commonly coexist
5. In alcoholics, always give thiamine BEFORE glucose (to prevent Wernicke)
6. Obese patients can be malnourished (micronutrient deficiencies)
7. Functional testing (grip strength, gait speed) predicts outcomes better than anthropometry alone
8. Weight loss with normal or increased appetite suggests hypermetabolism (malignancy, thyrotoxicosis)
9. Weight loss with decreased appetite suggests anorexia, malabsorption, or psychological causes`,
    },
  },

  media: [
    {
      id: 'malnutrition-comparison',
      type: 'diagram',
      filename: 'marasmus-vs-kwashiorkor.svg',
      title: 'Marasmus vs Kwashiorkor',
      description: 'Physical differences between protein and calorie malnutrition',
    },
    {
      id: 'micronutrient-dermatoses',
      type: 'diagram',
      filename: 'micronutrient-skin-findings.svg',
      title: 'Micronutrient Deficiency Skin Findings',
      description: 'Distribution patterns of various deficiency-related skin changes',
    },
  ],

  citations: [
    {
      id: 'bates-nutrition',
      type: 'textbook',
      title: 'The Nutritional Assessment',
      authors: ['Bickley, L.S.'],
      source: "Bates' Guide to Physical Examination and History Taking",
      chapter: '6',
    },
    {
      id: 'gim-criteria',
      type: 'article',
      title: 'Global Leadership Initiative on Malnutrition (GLIM)',
      authors: ['Cederholm, T.', 'Jensen, G.L.'],
      source: 'JPEN Journal of Parenteral and Enteral Nutrition',
    },
  ],

  crossReferences: [
    { targetId: 'physical-exam-skin-inspection', targetType: 'topic', relationship: 'related', label: 'Skin Examination' },
    { targetId: 'condition-scurvy', targetType: 'condition', relationship: 'related', label: 'Scurvy' },
    { targetId: 'condition-obesity', targetType: 'condition', relationship: 'related', label: 'Obesity' },
  ],

  tags: {
    systems: ['gastrointestinal', 'integumentary'],
    topics: ['physical-examination', 'nutrition', 'clinical-assessment'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pediatrics', 'family-medicine'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default nutritionAssessment;
