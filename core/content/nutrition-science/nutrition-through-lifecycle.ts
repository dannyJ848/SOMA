/**
 * Nutrition Through Lifecycle - Nutrition Science
 *
 * Comprehensive content on nutritional requirements and considerations
 * across all life stages from infancy through elderly, including
 * pregnancy, lactation, and age-specific recommendations.
 */

import { EducationalContent } from '../types';

export const nutritionThroughLifecycle: EducationalContent = {
  id: 'nutrition-lifecycle',
  type: 'topic',
  name: 'Nutrition Through the Lifecycle',
  alternateNames: ['Lifecycle Nutrition', 'Nutrition Across the Lifespan', 'Developmental Nutrition'],

  levels: {
    1: {
      level: 1,
      summary: 'Nutrition needs change throughout life. Pregnant women need extra nutrients for baby growth. Babies need breast milk or formula. Children need balanced food to grow. Teens need energy for growth spurts. Adults need to maintain health. Older adults need to prevent muscle loss and stay strong.',
      explanation: `## Nutrition Changes Throughout Life

Your body's nutrition needs change as you grow and age. What's healthy for a baby isn't right for a teenager, and what works for a young adult may not suit an older person.

**Pregnancy and Breastfeeding:**
- Eat extra calories for baby growth
- Take prenatal vitamins with folic acid
- Include iron, calcium, and omega-3 fats
- Stay hydrated with water
- Avoid alcohol, raw fish, unpasteurized cheese

**Babies and Infants:**
- Breast milk or formula for first 6 months
- Start solid foods around 6 months
- Introduce one new food at a time
- Avoid honey, choking hazards, cow's milk before 1 year

**Children:**
- Balanced meals with fruits, vegetables, grains, protein
- Regular meals and healthy snacks
- Limit sugary drinks and treats
- Milk for bone growth

**Teenagers:**
- Extra calories during growth spurts
- Calcium for bone development
- Iron for girls (menstruation)
- Protein for muscle growth

**Adults:**
- Maintain healthy weight
- Balance calorie intake with activity
- Include all food groups
- Limit processed foods

**Older Adults:**
- Prevent muscle loss with protein
- Get enough calcium and vitamin D
- Stay hydrated
- B12 supplements may be needed

Remember: Nutrition needs change throughout life - adjust your eating to match your life stage!`,
      keyTerms: [
        { term: 'folic acid', definition: 'B vitamin that helps prevent birth defects of the brain and spine' },
        { term: 'breast milk', definition: 'Natural food for infants, providing perfect nutrition and immune protection' },
        { term: 'growth spurt', definition: 'Rapid growth period in childhood or adolescence requiring extra nutrition' },
        { term: 'osteoporosis', definition: 'Weak and brittle bones that can break easily, especially in older adults' },
        { term: 'menopause', definition: 'Time when women stop having periods, affecting bone health and metabolism' },
      ],
      analogies: [
        'Pregnancy nutrition is like building a house - you need good materials for a strong foundation.',
        'Child growth is like a plant - it needs the right nutrients at the right time to thrive.',
        'Aging is like maintaining a car - regular care (nutrition) keeps it running smoothly.',
      ],
      examples: [
        'A pregnant woman takes folic acid to prevent birth defects',
        'A baby starts eating solid foods at 6 months, beginning with rice cereal',
        'A teenager going through a growth spurt needs more calories and protein',
        'An older adult drinks milk and takes vitamin D to prevent bone loss',
      ],
      patientCounselingPoints: [
        'Pregnant women should take prenatal vitamins with folic acid before and during pregnancy',
        'Breast milk or formula should be the only food for babies until 6 months',
        'Children should eat meals with family to develop healthy eating habits',
        'Teen athletes need extra calories and protein to support training',
        'Older adults should focus on protein, calcium, and vitamin D for bone health',
      ],
    },
    2: {
      level: 2,
      summary: 'Lifecycle nutrition addresses changing nutritional requirements from conception through older adulthood. Key periods include pregnancy (increased micronutrients), infancy (breast milk/formula), childhood (balanced growth), adolescence (growth spurts), adulthood (maintenance), and older adulthood (preventing sarcopenia and osteoporosis).',
      explanation: `## Pregnancy and Lactation

**Pregnancy Nutrition:**

**Key Nutrient Needs:**
- Folic acid: 400-800 mcg/day (prevents neural tube defects)
- Iron: 27 mg/day (increased blood volume)
- Calcium: 1000 mg/day (fetal bone development)
- DHA: 200-300 mg/day (brain/eye development)
- Iodine: 220 mcg/day (thyroid function)
- Calories: +300 in 2nd trimester, +450 in 3rd trimester

**Foods to Avoid:**
- High-mercury fish (shark, swordfish, king mackerel)
- Raw or undercooked meat, eggs, fish
- Unpasteurized dairy products
- Excess caffeine (>200 mg/day)
- Alcohol completely

**Breastfeeding Nutrition:**
- +500 kcal/day additional energy
- +330 mg/day calcium (1000 mg total)
- Continue prenatal vitamins
- Adequate hydration (3-4 L/day)
- DHA continues to support infant brain development

## Infancy and Early Childhood

**Breastfeeding:**
- Exclusive for first 6 months
- Continue to 12+ months with complementary foods
- Benefits: Immune protection, reduced infection risk, cognitive benefits
- Vitamin D supplementation (400 IU) recommended for breastfed infants

**Formula Feeding:**
- Iron-fortified infant formula until 12 months
- Cow's milk after 12 months
- Follow preparation instructions carefully
- Avoid homemade formula recipes

**Introduction to Solid Foods (6 months):**
- Iron-rich foods first (iron-fortified cereal, pureed meats)
- Introduce one new food every 3-5 days
- Texture progression: pureed to mashed to finger foods
- Avoid: Honey (botulism risk), choking hazards, cow's milk

**Toddler and Preschool Nutrition:**
- Regular meals and 2-3 healthy snacks daily
- Family meals promote healthy eating patterns
- Limit juice (4 oz/day max for toddlers)
- Full-fat dairy until age 2

## School Age and Adolescence

**School-Age Children (6-12 years):**
- Balanced meals with all food groups
- Breakfast supports school performance
- Adequate calcium for bone building
- Limit sugary drinks and screen time eating

**Adolescence (13-18 years):**
- Increased calorie and protein needs
- Peak bone mass development (calcium critical)
- Iron needs increase (especially menstruating females)
- Sports nutrition for active teens
- Body image awareness (eating disorder prevention)

## Adulthood and Older Age

**Adult Nutrition (19-50 years):**
- Maintain healthy weight
- Prevent chronic disease
- Preconception nutrition for women
- Regular physical activity

**Older Adult Nutrition (65+ years):**
- Prevent sarcopenia (1.0-1.2 g/kg protein)
- Prevent osteoporosis (calcium 1200 mg, vitamin D 800-1000 IU)
- B12 supplementation (absorption decreases)
- Adequate hydration (thirst mechanism blunted)
- Nutrient-dense foods (calorie needs decrease)`,
      keyTerms: [
        { term: 'neural tube defects', definition: 'Birth defects of brain/spine prevented by adequate folic acid intake' },
        { term: 'DHA', definition: 'Omega-3 fatty acid important for fetal brain and eye development' },
        { term: 'exclusive breastfeeding', definition: 'Giving only breast milk, no other food or drink for first 6 months' },
        { term: 'sarcopenia', definition: 'Age-related loss of muscle mass and strength' },
        { term: 'osteoporosis', definition: 'Bone disease causing increased fracture risk' },
        { term: 'peak bone mass', definition: 'Maximum bone density achieved in early adulthood' },
      ],
      analogies: [
        'Pregnancy is like building a foundation - nutrients are the bricks for baby development.',
        'Childhood growth is like a rocket launch - needs fuel (nutrition) at the right time.',
        'Aging bones are like a bank - you deposit calcium when young to withdraw when old.',
      ],
      examples: [
        'Folic acid supplementation reduces neural tube defect risk by 70%',
        'Breastfed infants have fewer ear infections and lower SIDS risk',
        'Teen athletes need 1.2-1.5 g/kg protein during heavy training',
        'Older adults lose 3-5% muscle mass per decade without adequate protein and exercise',
      ],
      patientCounselingPoints: [
        'Start folic acid 400 mcg at least 1 month before trying to conceive',
        'Breast milk is ideal but formula is a safe and nutritious alternative',
        'Introduce vegetables before fruits to help children accept savory flavors',
        'Teen girls need extra iron due to menstruation - consider supplements if deficient',
        'Older adults should aim for 25-30 g protein per meal to prevent muscle loss',
      ],
    },
    3: {
      level: 3,
      summary: 'Advanced lifecycle nutrition encompasses developmental programming, maternal-fetal epigenetic effects, specialized pediatric nutrition protocols, adolescent eating disorder management, adult preventive nutrition strategies, and geriatric nutrition addressing sarcopenia, frailty, and cognitive decline.',
      explanation: `## Developmental Programming and Epigenetics

**Fetal Origins of Adult Disease:**
- Maternal nutrition programs fetal metabolism
- Low birth weight associated with adult chronic disease
- Epigenetic mechanisms (DNA methylation, histone modification)
- Critical periods of development with nutritional influence

**Specific Developmental Effects:**
- Protein restriction: Altered nephron number (hypertension risk)
- Iron deficiency: Impaired cognitive development
- High maternal glucose: Fetal hyperinsulinemia (future obesity/diabetes)
- Omega-3 deficiency: Altered neurodevelopment

## Pediatric Nutrition Management

**Growth Assessment:**
- WHO growth standards (0-2 years) and CDC (2-20 years)
- Weight-for-height, BMI-for-age percentiles
- Growth velocity (crossing percentiles warrants evaluation)
- Failure to thrive: Weight-for-height <5th percentile

**Failure to Thrive Evaluation:**
- Organic causes: Malabsorption, chronic disease, endocrine disorders
- Non-organic: Inadequate intake, feeding difficulties, psychosocial
- Caloric requirements for catch-up growth: 120-150 kcal/kg/day
- Monitor weekly weight gain

**Pediatric Allergies:**
- Food allergy prevalence: 6-8% in children
- Common allergens: Milk, egg, peanut, tree nuts, fish, shellfish, soy, wheat
- Introduction timeline: Early (4-6 months) may prevent allergy
- Breastfeeding may reduce atopic disease risk

**Adolescent Eating Disorders:**
- Anorexia nervosa: Restriction, low weight, body image disturbance
- Bulimia nervosa: Binge/purge, normal weight
- ARFID: Avoidant/restrictive eating without body image concern
- Treatment: Medical stabilization, nutritional rehabilitation, therapy
- Refeeding syndrome risk with severe malnutrition

## Adult Preventive Nutrition

**Preconception Nutrition:**
- Folic acid: 400-800 mcg starting 3+ months before conception
- Achieve healthy weight before pregnancy
- Optimize iron stores (ferritin >30 ng/mL)
- Reduce alcohol, caffeine
- Screen for and manage diabetes

**Cardiovascular Prevention:**
- DASH and Mediterranean diets evidence-based
- Saturated fat <10% of calories, trans fat minimized
- Sodium <2300 mg/day (<1500 mg for high-risk groups)
- Omega-3 from fish: 2 servings/week

**Cancer Prevention:**
- Maintain healthy weight
- Limit processed meats, red meat
- Increase fruits, vegetables, whole grains
- Alcohol moderation (1 drink/day women, 2 men)
- Physical activity 150 minutes/week moderate

## Geriatric Nutrition

**Sarcopenia Prevention:**
- Protein: 1.0-1.2 g/kg/day (higher than RDA)
- Even distribution: 25-30 g per meal for MPS stimulation
- Resistance exercise 2-3x/week synergistic with protein
- HMB supplement may help (3 g/day)
- Vitamin D adequate for muscle function

**Frailty Assessment:**
- Unintentional weight loss (>10 lb/year)
- Exhaustion
- Low physical activity
- Slow walking speed
- Weak grip strength
- 3+ criteria = frail; 1-2 = pre-frail
- Nutritional intervention: 30-35 kcal/kg, 1.2-1.5 g/kg protein
- Consider oral nutritional supplements

**Cognitive Decline and Nutrition:**
- MIND diet: Mediterranean-DASH for neurodegenerative delay
- B vitamins (B6, B12, folate) for homocysteine reduction
- Omega-3 (DHA) for cognitive preservation
- Antioxidant-rich foods (berries, leafy greens)
- Limit saturated fats, refined carbohydrates`,
      keyTerms: [
        { term: 'developmental programming', definition: 'Fetal/early life nutritional effects on adult disease risk' },
        { term: 'failure to thrive', definition: 'Weight falling below 5th percentile or crossing two major percentiles downward' },
        { term: 'ARFID', definition: 'Avoidant/Restrictive Food Intake Disorder; eating without body image concerns' },
        { term: 'sarcopenia', definition: 'Age-related loss of muscle mass, strength, and function' },
        { term: 'frailty', definition: 'Syndrome of decreased reserve and resistance to stressors' },
        { term: 'MIND diet', definition: 'Mediterranean-DASH Intervention for Neurodegenerative Delay' },
      ],
      analogies: [
        'Developmental programming is like setting a thermostat - early nutrition sets the metabolism point.',
        'Failure to thrive is like a plant not getting enough sun - needs investigation and correction.',
        'Frailty is like a house with structural damage - needs reinforcement before collapse.',
      ],
      examples: [
        'Barker hypothesis: Low birth weight associated with adult cardiovascular disease',
        'Early peanut introduction (4-6 months) reduces allergy risk in high-risk infants',
        'MIND diet reduces Alzheimer risk by 35% in observational studies',
        'HMB supplementation preserves muscle in older adults during bed rest',
      ],
      clinicalNotes: 'Periconception folic acid reduces neural tube defects by 70%. Hyperemesis may require thiamine before dextrose to prevent Wernicke encephalopathy. Non-organic failure to thrive with normal history/exam usually requires social work. Frailty responds to combined protein (1.2-1.5 g/kg) and resistance exercise.',
    },
    4: {
      level: 4,
      summary: 'Expert-level lifecycle nutrition integrates molecular mechanisms of developmental programming with clinical management across all life stages. Includes epigenetic influences, DOHaD (Developmental Origins of Health and Disease) research applications, specialized therapeutic diets for pediatric conditions, advanced eating disorder protocols, and precision nutrition for healthy aging.',
      explanation: `## Epigenetic Mechanisms in Development

**DNA Methylation:**
- Methyl group addition to CpG dinucleotides
- Gene expression silencing (typically at promoter regions)
- Maternal nutrition affects methylation patterns
- Critical windows: Periconception, embryonic, fetal periods

- Specific nutrients:
  +- Folate: Methyl donor for SAM synthesis
  +- Choline: Methyl donor, betaine-homocysteine pathway
  +- Vitamin B12: Cofactor for methionine synthase
  +- Methionine: Precursor for SAM
  +- Betaine: Alternative methyl donor

**Histone Modifications:**
- Acetylation: Gene activation (HATs add, HDACs remove)
- Methylation: Context-dependent (H3K4me3 active, H3K27me3 repressive)
- Nutrition affects acetyl-CoA availability for acetylation
- Butyrate (fiber fermentation) inhibits HDACs

**Non-coding RNAs:**
- MicroRNAs regulate gene expression post-transcriptionally
- Maternal diet affects placental miRNA expression
- Potential mechanism for developmental programming

## DOHaD Clinical Applications

**Specific Programming Examples:**
- Maternal protein restriction:
  +- Reduced nephron number (Brenner hypothesis)
  +- Altered pancreatic beta-cell mass
  +- Hypertension, glucose metabolism
  +- Animal models demonstrate epigenetic mechanisms

- Maternal high-fat diet:
  +- Fetal leptin resistance
  +- Altered hypothalamic appetite regulation
  +- Increased offspring obesity risk
  +- Sex-specific effects

- Maternal hyperglycemia:
  +- Fetal hyperinsulinemia (adipogenesis)
  +- Macrosomia, birth trauma
  +- Childhood obesity, metabolic syndrome
  +- Epigenetic changes in glucose metabolism

## Specialized Pediatric Nutrition

**Inborn Errors of Metabolism:**
- PKU (Phenylketonuria):
  +- Phenylalanine hydroxylase deficiency
  +- Low-phenylalanine diet (medical formula)
  +- Tyrosine becomes essential
  +- Lifelong management

- Galactosemia:
  +- GALT enzyme deficiency
  +- Eliminate lactose/galactose
  +- Calcium/vitamin D supplementation needed
  +- Soy-based formula

- Organic Acidemias:
  +- Avoidance of specific amino acids
  +- Medical formula essential
  +- Frequent monitoring needed

**Pediatric IBD Nutrition:**
- Crohn disease: Elemental diet for induction
- Growth failure risk: Malabsorption, inflammation
- Nutritional deficiencies: Iron, B12, fat-soluble vitamins
- Exclusive enteral nutrition (EEN) for remission

## Advanced Geriatric Nutrition

**Anabolic Resistance:**
- Blunted MPS response to protein in older adults
- Requires higher protein dose (2.5 g leucine) per meal
- Resistance exercise sensitizes muscle to protein
- Timing: Even distribution across meals

**Nutritional Management of Sarcopenia:**
- Protein: 1.2-1.5 g/kg/day
- Leucine threshold: 2.5-3 g per meal
- HMB: 3 g/day (anti-catabolic)
- Vitamin D: Maintain >30 ng/mL
- Omega-3: May improve anabolic response
- Creatine: 0.1 g/kg/day (muscle mass)

**Cognitive Decline Interventions:**
- MIND diet components:
  +- Berries (anthocyanins): 2+ servings/week
  +- Leafy greens: 6+ servings/week
  +- Nuts: 5+ servings/week
  +- Fish: 1+ servings/week
  +- Beans: 3+ servings/week
  +- Whole grains: 3+ servings/day
  +- Olive oil: Primary fat source
  +- Limit: Red meat, butter, cheese, sweets, fried/fast food

- B vitamins for homocysteine:
  +- B12: 500 mcg/day
  +- Folate: 400-800 mcg/day
  +- B6: 25-50 mg/day
  +- Efficacy depends on baseline status`,
      keyTerms: [
        { term: 'DOHaD', definition: 'Developmental Origins of Health and Disease; early life origins of adult disease' },
        { term: 'DNA methylation', definition: 'Epigenetic modification adding methyl groups to DNA, typically silencing gene expression' },
        { term: 'PKU', definition: 'Phenylketonuria; inborn error requiring phenylalanine-restricted diet' },
        { term: 'anabolic resistance', definition: 'Blunted muscle protein synthesis response in older adults' },
        { term: 'MPS', definition: 'Muscle Protein Synthesis; process of building muscle protein' },
        { term: 'HMB', definition: 'Beta-hydroxy beta-methylbutyrate; leucine metabolite that reduces muscle breakdown' },
      ],
      analogies: [
        'Epigenetics is like software on genetic hardware - nutrition changes the code.',
        'Anabolic resistance is like a lock that needs more key (protein) to open.',
        'MIND diet is like fertilizer for your brain - feeds neurons and reduces inflammation.',
      ],
      examples: [
        'Dutch Hunger Winter: Prenatal exposure linked to adult obesity, schizophrenia',
        'Agouti mouse model: Maternal B12/choline/folate alters offspring coat color and obesity',
        'EEN induces remission in 80% of pediatric Crohn without steroids',
        'HMB + resistance exercise preserves muscle in older adults during bed rest',
      ],
      clinicalNotes: 'Periconception nutrition critical for epigenetic programming. EEN (exclusive enteral nutrition) is first-line for pediatric Crohn remission. Anabolic resistance requires higher protein leucine content in older adults. MIND diet shows strongest evidence for cognitive protection.',
    },
    5: {
      level: 5,
      summary: 'Expert-level lifecycle nutrition encompasses cutting-edge research in developmental programming, personalized nutrition approaches across life stages, and emerging therapeutic interventions. Includes transgenerational epigenetic effects, microbiome influences, precision public health strategies, and emerging clinical applications of DOHaD research.',
      explanation: `## Transgenerational Epigenetic Inheritance

**Evidence for Epigenetic Transmission:**
- Animal models: Diet effects persist 2-3 generations
- Human cohort studies: Famine exposure effects in grandchildren
- Mechanisms: Germ cell epigenome, sperm miRNA, uterine environment

- Dutch Hunger Winter:
  +- Prenatal exposure: Adult metabolic disease
  +- Transgenerational effects observed in F2 generation
  +- Epigenetic changes at imprinted genes

- Overnutrition studies:
  +- Paternal obesity: Altered sperm miRNA
  +- Maternal obesity: Multigenerational metabolic effects
  +- Sex-specific transmission patterns

## Microbiome Development Across Lifecycle

**Infant Microbiome Establishment:**
- Birth mode: C-section vs. vaginal delivery differences
- Early feeding: Breastfed vs. formula-fed microbiota
- Antibiotic exposure: Long-term microbiome disruption
- Critical window: First 2-3 years of life

**Microbiome-Nutrition Interactions:**
- SCFA production influences host metabolism
- Bile acid metabolism by gut bacteria
- TMAO production from choline/carnitine
- Microbiome affects nutrient bioavailability

**Interventions:**
- Prebiotics: HMOs in breast milk, fiber diversity
- Probiotics: Specific strains for conditions
- FMT: Microbiome restoration research
- Diet: Most powerful modulator

## Precision Lifecycle Nutrition

**Genetic-Nutrient Interactions:**
- MTHFR polymorphisms: Folate requirements, homocysteine
- APOE epsilon4: Alzheimer risk, fat response
- FTO: Obesity risk, protein diet interaction
- LCT persistence: Lactose tolerance genetics

**Biomarker-Guided Interventions:**
- Ferritin: Iron supplementation thresholds
- Vitamin D: 25(OH)D targets
- Homocysteine: B vitamin dosing
- Omega-3 index: DHA/EPA status

**Personalized Approaches:**
- Nutrigenomics: Gene expression response to nutrients
- Metabolomics: Individual metabolic profiles
- Microbiome: Personalized dietary response
- Epigenetics: Reversible modification potential

## Emerging Therapeutic Frontiers

**Pregnancy Interventions:**
- Myo-inositol for GDM prevention
- Vitamin D for asthma prevention
- Omega-3 for preterm birth prevention
- Probiotics for allergy prevention

**Pediatric Advances:**
- Microbiome-directed therapies
- Personalized nutrition for growth disorders
- Gene therapy for metabolic disorders
- Pharmacologic nutrition

**Healthy Aging Strategies:**
- Senolytics: Removing senescent cells
- NAD+ precursors: Cellular energy metabolism
- Mitochondrial-targeted nutrients
- Anti-glycation agents

**Public Health Applications:**
- First 1000 days initiatives
- Epigenetic risk assessment
- Lifecycle nutrition policies
- Intergenerational prevention programs`,
      keyTerms: [
        { term: 'transgenerational epigenetics', definition: 'Heritable epigenetic changes across generations without DNA sequence changes' },
        { term: 'HMOs', definition: 'Human milk oligosaccharides; prebiotic sugars in breast milk' },
        { term: 'TMAO', definition: 'Trimethylamine N-oxide; microbial metabolite linked to CVD risk' },
        { term: 'MTHFR', definition: 'Methylenetetrahydrofolate reductase; enzyme affecting folate metabolism' },
        { term: 'senolytics', definition: 'Drugs that selectively eliminate senescent (aging) cells' },
        { term: 'NAD+', definition: 'Nicotinamide adenine dinucleotide; cellular redox cofactor' },
      ],
      analogies: [
        'Transgenerational epigenetics is like genetic inheritance without mutation - nutrition affects descendants.',
        'Microbiome is like an organ within an organ - it processes nutrients we cannot.',
        'First 1000 days is like laying a foundation - determines the building lifespan.',
      ],
      examples: [
        'Dutch Hunger Winter: F1 and F2 generations show metabolic effects',
        'C-section infants receive maternal vaginal microbiome transfer',
        'MTHFR C677T: Homocysteine elevation with low folate intake',
        'Rapamycin extends lifespan in animal models via autophagy',
      ],
      clinicalNotes: 'First 1000 days represents critical window for developmental programming. Transgenerational effects demonstrated in human cohorts (famine studies). Microbiome-directed therapies show promise for allergic diseases. Senolytics in human trials for age-related conditions.',
    },
  },

  media: [
    {
      id: 'lifecycle-timeline',
      type: 'diagram',
      filename: 'lifecycle-timeline.svg',
      title: 'Nutrition Across the Lifecycle',
      description: 'Nutritional needs at different life stages',
    },
    {
      id: 'pregnancy-nutrients',
      type: 'diagram',
      filename: 'pregnancy-nutrients.svg',
      title: 'Key Pregnancy Nutrients',
      description: 'Critical nutrients during pregnancy',
    },
  ],

  citations: [
    {
      id: 'lifecycle-position-paper',
      type: 'article',
      title: 'Nutrition Across the Lifespan: A Position Paper',
      authors: ['EA Academy', 'Nutrition Society'],
      source: 'Nutrition Reviews',
    },
    {
      id: 'doha-dutch-hunger',
      type: 'article',
      title: 'Adult health after prenatal famine exposure',
      authors: ['Roseboom TJ', 'Painter RC'],
      source: 'Trends in Endocrinology & Metabolism',
    },
    {
      id: 'mind-diet-alzheimers',
      type: 'article',
      title: 'MIND diet slows cognitive decline with Alzheimer',
      authors: ['Morris MC', 'Tangney CC'],
      source: 'Alzheimer & Dementia',
    },
  ],

  crossReferences: [
    { targetId: 'nutrition-macronutrients', targetType: 'topic', relationship: 'related', label: 'Macronutrients' },
    { targetId: 'nutrition-micronutrients', targetType: 'topic', relationship: 'related', label: 'Micronutrients' },
    { targetId: 'pediatric-nutrition', targetType: 'topic', relationship: 'related', label: 'Pediatric Nutrition' },
    { targetId: 'geriatric-nutrition', targetType: 'topic', relationship: 'related', label: 'Geriatric Nutrition' },
  ],

  tags: {
    systems: ['reproductive', 'pediatric', 'geriatric', 'metabolic'],
    topics: ['nutrition', 'lifecycle', 'preventive-medicine', 'developmental'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['pediatrics', 'obgyn', 'geriatrics'],
    },
  },

  createdAt: '2026-01-26T00:00:00.000Z',
  updatedAt: '2026-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default nutritionThroughLifecycle;
