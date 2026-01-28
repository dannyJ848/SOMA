import { EducationalContent } from '../types';

export const bmiCalculator: EducationalContent = {
  id: 'calculation-bmi',
  type: 'concept',
  name: 'Body Mass Index Calculator',
  alternateNames: ['BMI', 'Quetelet Index', 'Body Mass Index'],

  levels: {
    1: {
      level: 1,
      summary: 'BMI is a simple calculation using your height and weight to estimate if you have a healthy body weight for your height.',
      explanation: `## What is BMI?

BMI stands for Body Mass Index. It is a number calculated from your height and weight that helps doctors understand if your weight is healthy.

## How to Calculate BMI

The formula is simple:
BMI = Weight (kg) / Height (m) squared

Or in pounds and inches:
BMI = Weight (lbs) x 703 / Height (inches) squared

## BMI Categories

- Underweight: Less than 18.5
- Healthy weight: 18.5 to 24.9
- Overweight: 25 to 29.9
- Obese: 30 or higher

## What BMI Means

Your BMI gives an estimate of whether your weight is in a healthy range for your height. However, it does not measure body fat directly or tell us where fat is located on your body.

## Important Limitations

- BMI does not distinguish between muscle and fat
- Athletes may have high BMI due to muscle, not fat
- Older adults may have healthy BMI but still have too much body fat
- It does not account for differences between men and women

## Next Steps

If your BMI is outside the healthy range, talk to your doctor. They can help you understand what it means for your health and create a plan if needed.`,
      keyTerms: [
        { term: 'BMI', definition: 'Body Mass Index; a number calculated from height and weight' },
        { term: 'underweight', definition: 'BMI less than 18.5; may indicate insufficient body weight' },
        { term: 'overweight', definition: 'BMI between 25 and 29.9; above healthy weight range' },
        { term: 'obese', definition: 'BMI 30 or higher; significantly above healthy weight range' },
      ],
      analogies: [
        'BMI is like a general guide for fitting clothes - it gives a starting point, but does not account for individual differences like muscle versus fat.',
        'Think of BMI like a speed limit sign - it is a general guideline for what is considered safe, but individual circumstances matter.',
      ],
      examples: [
        'A person who is 5 feet 6 inches tall and weighs 150 pounds has a BMI of about 24.2, which is in the healthy range.',
        'An athlete with lots of muscle might have a BMI of 27 (overweight category) but actually be very healthy with low body fat.',
      ],
    },
    2: {
      level: 2,
      summary: 'Body Mass Index (BMI) is a screening tool that uses height and weight to estimate body fatness and categorize weight status, with recognized limitations in certain populations.',
      explanation: `## BMI Calculation

**Metric Formula:**
BMI = weight (kg) / [height (m)]^2

**Imperial Formula:**
BMI = weight (lb) / [height (in)]^2 x 703

## BMI Categories (CDC/WHO Standards)

| Category | BMI Range |
|----------|-----------|
| Underweight | <18.5 |
| Normal weight | 18.5-24.9 |
| Overweight | 25.0-29.9 |
| Obesity Class I | 30.0-34.9 |
| Obesity Class II | 35.0-39.9 |
| Obesity Class III | >=40.0 |

## Clinical Significance

BMI correlates with:
- Cardiovascular disease risk
- Type 2 diabetes risk
- Certain cancer risks
- Metabolic syndrome
- All-cause mortality

## Limitations of BMI

**Populations where BMI may be inaccurate:**
- Athletes (high muscle mass)
- Elderly (loss of muscle mass)
- Pregnant women
- Children (use BMI-for-age percentiles)
- Certain ethnic groups (different body composition at same BMI)

**What BMI does not measure:**
- Body fat percentage
- Distribution of fat (visceral vs subcutaneous)
- Muscle mass
- Bone density
- Overall health status

## Alternative Measurements

- Waist circumference (indicates abdominal obesity)
- Waist-to-hip ratio
- Body fat percentage (DEXA, bioimpedance)
- Skinfold thickness measurements

## Clinical Application

BMI is used as an initial screening tool. A complete assessment includes:
- Waist circumference measurement
- Blood pressure
- Fasting glucose or HbA1c
- Lipid panel
- Family history
- Physical activity level`,
      keyTerms: [
        { term: 'body mass index', definition: 'A person\'s weight in kilograms divided by the square of height in meters' },
        { term: 'visceral fat', definition: 'Fat stored around internal organs; more metabolically active and harmful' },
        { term: 'subcutaneous fat', definition: 'Fat stored just beneath the skin' },
        { term: 'metabolic syndrome', definition: 'Cluster of conditions including high blood sugar, abnormal cholesterol, abdominal obesity, and high blood pressure' },
      ],
      analogies: [
        'BMI is like using a ruler to measure volume - it gives a rough estimate but cannot capture three-dimensional differences.',
      ],
      examples: [
        'A patient 170 cm tall weighing 75 kg has BMI = 75 / (1.70)^2 = 75 / 2.89 = 25.9 (overweight category).',
        'Waist circumference greater than 40 inches in men or 35 inches in women indicates increased health risk even with normal BMI.',
      ],
    },
    3: {
      level: 3,
      summary: 'BMI is a population-level screening tool for adiposity with well-documented associations with metabolic disease risk, though individual assessment requires additional anthropometric and clinical measures.',
      explanation: `## Mathematical Basis of BMI

BMI was developed by Adolphe Quetelet in the 1830s as part of "social physics." The formula assumes:
- Weight scales with the cube of height (volume)
- But was simplified to square of height for population-level fitting

**Derivation:**
If weight ∝ volume and volume ∝ height^3, then:
Weight/Height^3 would be constant

However, empirically, Weight/Height^2 fits population data better because:
- Humans are not geometrically similar
- Taller individuals tend to have relatively narrower builds

## Epidemiological Evidence

**BMI and Mortality (J-curve relationship):**
- Lowest all-cause mortality: BMI 20-25
- Mortality increases above BMI 27.5
- Mortality increases below BMI 18.5
- Modified by smoking status, age, and disease

**BMI and Disease Risk:**

| BMI Range | Diabetes Risk | Hypertension Risk | CVD Risk |
|-----------|---------------|-------------------|----------|
| 18.5-24.9 | Baseline | Baseline | Baseline |
| 25.0-29.9 | 2-3x higher | 1.5-2x higher | 1.5x higher |
| 30.0-34.9 | 5-7x higher | 2-3x higher | 2x higher |
| >=35 | 12x higher | 3-4x higher | 2.5x higher |

## Population-Specific Considerations

**Asian Populations:**
- Lower BMI cutoff for obesity-related risks
- WHO Western Pacific guidelines: increased risk at BMI >=23
- High risk at BMI >=27.5

**African American Populations:**
- Lower body fat percentage at same BMI compared to White populations
- Higher muscle mass
- Different BMI-disease risk relationship

**Elderly:**
- U-shaped mortality curve shifted higher
- BMI 25-30 associated with lower mortality
- Sarcopenia confounds BMI interpretation

## BMI in Children and Adolescents

Uses BMI-for-age percentiles:
- Underweight: <5th percentile
- Healthy weight: 5th to <85th percentile
- Overweight: 85th to <95th percentile
- Obese: >=95th percentile

Based on CDC growth charts from 1963-1994 reference population.

## Waist Circumference Thresholds

| Risk Level | Men | Women |
|------------|-----|-------|
| Increased | >40 inches (102 cm) | >35 inches (88 cm) |
| High | >102 cm | >88 cm |

Combined BMI and waist circumference better predicts metabolic risk than either alone.`,
      keyTerms: [
        { term: 'Quetelet index', definition: 'Original name for BMI; developed by Belgian mathematician Adolphe Quetelet' },
        { term: 'allometric scaling', definition: 'Study of relationship between body size and shape; weight scales with height^2 in humans rather than height^3' },
        { term: 'sarcopenia', definition: 'Age-related loss of muscle mass and strength' },
        { term: 'adiposity', definition: 'The state of being severely overweight; excess body fat' },
      ],
    },
    4: {
      level: 4,
      summary: 'BMI serves as a practical screening metric with validated population-level associations, though contemporary clinical assessment increasingly incorporates body composition analysis, waist circumference, and ethnic-specific risk thresholds for metabolic disease prediction.',
      explanation: `## Advanced BMI Interpretation

**The Obesity Paradox:**
- Some studies show overweight/obese BMI associated with lower mortality in certain conditions (heart failure, chronic kidney disease, elderly)
- Possible explanations:
  - Selection bias (survivorship)
  - BMI cannot distinguish muscle from fat
  - Cardiac cachexia in chronic disease
  - Greater metabolic reserve

**BMI and Body Composition:**

Typical body fat percentages at given BMI:
| BMI | Men (% fat) | Women (% fat) |
|-----|-------------|---------------|
| 18.5 | 10-13% | 20-23% |
| 25 | 18-21% | 28-31% |
| 30 | 25-28% | 35-38% |

**Limitations in Clinical Practice:**

1. **Muscular individuals:** Bodybuilders may have BMI >30 with <10% body fat
2. **Normal weight obesity:** BMI <25 but high body fat percentage (>30% in men, >40% in women)
3. **Sarcopenic obesity:** Low muscle mass with excess fat; common in elderly

## Metabolic Implications of Adiposity

**Adipose Tissue as Endocrine Organ:**
- Adipokines (leptin, adiponectin)
- Inflammatory cytokines (IL-6, TNF-alpha)
- Relationship between BMI and insulin resistance

**Visceral Adipose Tissue (VAT):**
- More strongly correlates with metabolic disease than BMI
- Waist circumference correlates with VAT (r=0.7-0.8)
- VAT releases free fatty acids directly to liver via portal circulation

## Ethnic-Specific Cutoffs

**WHO Recommendations for Asian Populations:**
- Overweight: BMI >=23 (vs 25)
- Obesity: BMI >=27.5 (vs 30)

**Rationale:**
- Higher body fat percentage at lower BMI
- Increased visceral adiposity
- Higher risk of type 2 diabetes at lower BMI

**Pacific Islander Considerations:**
- May have higher muscle mass
- Traditional BMI cutoffs may overestimate risk

## Clinical Decision Making

**When to Use Additional Measurements:**

1. BMI 25-30 with metabolic risk factors
   - Add waist circumference
   - Consider body composition analysis

2. Athletes or very muscular individuals
   - Body fat percentage measurement
   - Waist circumference

3. Elderly patients
   - Assess sarcopenia
   - Consider body composition

4. Significant recent weight change
   - Track body composition changes
   - Monitor muscle mass preservation

**BMI in Research vs Practice:**
- Research: Useful for population-level comparisons
- Practice: Individual assessment requires additional measures
- Insurance/Policy: Often used despite limitations`,
      keyTerms: [
        { term: 'obesity paradox', definition: 'Observational finding that overweight/obese BMI sometimes associated with lower mortality in certain diseases' },
        { term: 'normal weight obesity', definition: 'Condition of having normal BMI but excessive body fat percentage' },
        { term: 'sarcopenic obesity', definition: 'Coexistence of low muscle mass and excess adiposity; common in aging' },
        { term: 'visceral adipose tissue', definition: 'Fat stored within abdominal cavity around organs; highly metabolically active' },
        { term: 'adipokines', definition: 'Cell signaling proteins secreted by adipose tissue' },
      ],
      clinicalNotes: 'In clinical practice, BMI should be combined with waist circumference measurement. For Asian patients, use lower BMI thresholds (>=23 for overweight, >=27.5 for obesity). In elderly patients, BMI 25-30 may be protective. Consider body composition analysis in athletes and those with discordant BMI and metabolic parameters.',
    },
    5: {
      level: 5,
      summary: 'Contemporary obesity assessment integrates BMI with advanced anthropometrics, body composition analysis, and ethnic-specific thresholds, while recognizing BMI\'s utility as a population screening tool alongside its significant limitations for individual metabolic risk stratification.',
      explanation: `## Contemporary Obesity Assessment Framework

** Edmonton Obesity Staging System (EOSS):**
Stages obesity by medical, mental, and functional impact rather than BMI alone:
- Stage 0: No obesity-related risk factors
- Stage 1: Subclinical risk factors
- Stage 2: Established obesity-related disease
- Stage 3: Significant organ damage
- Stage 4: Severe disability

**Body Composition Assessment Methods:**

| Method | Accuracy | Cost | Availability |
|--------|----------|------|--------------|
| DEXA | Gold standard | High | Moderate |
| CT/MRI (abdominal) | Reference for VAT | Very high | Low |
| Bioimpedance | Moderate | Low | High |
| Air displacement plethysmography (Bod Pod) | Good | Moderate | Low |
| Skinfold | Moderate | Low | High |
| Anthropometric indices | Low-moderate | Very low | Universal |

## Novel Anthropometric Indices

**Body Roundness Index (BRI):**
- Based on waist circumference and height
- Estimates body roundness and visceral adiposity
- May predict metabolic risk better than BMI

**A Body Shape Index (ABSI):**
- ABSI = WC / (BMI^(2/3) x height^(1/2))
- Accounts for WC not explained by BMI and height
- Predicts mortality independent of BMI

**Visceral Adiposity Index (VAI):**
- Incorporates BMI, WC, triglycerides, HDL
- Estimates visceral fat function
- Gender-specific formulas

## BMI in Special Clinical Scenarios

**Chronic Kidney Disease:**
- Reverse epidemiology: higher BMI associated with lower mortality
- Possible mechanisms: nutritional reserve, protection from protein-energy wasting
- Obesity paradox most pronounced in dialysis patients

**Heart Failure:**
- Obesity paradox well-documented
- Overweight/obese patients have better outcomes
- Cachexia associated with poor prognosis

**Cancer:**
- BMI associated with increased cancer risk (13 types identified by IARC)
- But during treatment, higher BMI may confer survival advantage
- Complex relationship varies by cancer type

**COVID-19:**
- Obesity (BMI >30) identified as risk factor for severe disease
- Mechanisms: impaired immune function, mechanical respiratory compromise, chronic inflammation

## Precision Medicine Approaches

**Genetic Factors:**
- FTO gene variants associated with obesity
- MC4R mutations cause monogenic obesity
- BMI heritability estimated at 40-70%

**Pharmacogenomics of Weight Management:**
- Variants in dopamine pathways may affect response to appetite suppressants
- Melanocortin pathway genetics influence weight loss surgery outcomes

**Gut Microbiome:**
- Firmicutes/Bacteroidetes ratio correlates with obesity
- Microbiome composition affects energy extraction from food
- Potential for microbiome-modifying therapies

## Policy and Public Health Considerations

**BMI as Policy Tool:**
- WHO uses BMI for global obesity surveillance
- CDC uses for population health monitoring
- Insurance companies use for risk stratification

**Limitations in Policy:**
- Does not capture metabolic health
- Ethnic variations not accounted for
- Stigmatization concerns

**Alternative Approaches:**
- Canadian guidelines: obesity as chronic disease (EOSS)
- Focus on health outcomes rather than weight alone
- Weight-inclusive approaches`,
      keyTerms: [
        { term: 'Edmonton Obesity Staging System', definition: 'Classification system staging obesity by medical, mental, and functional impact' },
        { term: 'body roundness index', definition: 'Novel anthropometric index estimating visceral adiposity based on waist circumference and height' },
        { term: 'reverse epidemiology', definition: 'Phenomenon where traditional risk factors show opposite associations in certain chronic diseases' },
        { term: 'A Body Shape Index', definition: 'Anthropometric measure that adjusts waist circumference for BMI and height' },
        { term: 'visceral adiposity index', definition: 'Index incorporating anthropometric and metabolic parameters to estimate visceral fat function' },
      ],
      clinicalNotes: 'Modern obesity assessment requires going beyond BMI. Use Edmonton Obesity Staging System for comprehensive assessment. Consider body composition analysis when BMI does not correlate with metabolic parameters. Be aware of obesity paradox in chronic diseases. For Asian populations, use BMI >=23 as overweight threshold. Waist circumference should be measured in all patients with BMI >=25.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],

  tags: {
    systems: ['endocrine', 'metabolic'],
    topics: ['clinical-calculations', 'nutrition', 'preventive-medicine'],
    keywords: ['BMI', 'body mass index', 'obesity', 'anthropometrics', 'weight management'],
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
