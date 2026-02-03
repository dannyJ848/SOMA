/**
 * Vegetarian Diets - Nutrition Science
 *
 * Comprehensive content on plant-based and vegetarian diets including
 * types of vegetarian diets, nutrients of concern, meal planning,
 * health benefits, and special considerations for different life stages.
 */

import { EducationalContent } from '../types';

export const vegetarianDiets: EducationalContent = {
  id: 'nutrition-vegetarian-diets',
  type: 'topic',
  name: 'Vegetarian Diets',
  alternateNames: ['Plant-Based Diets', 'Vegetarianism', 'Vegan Nutrition'],

  levels: {
    1: {
      level: 1,
      summary: 'Vegetarian diets focus on plant foods like vegetables, fruits, grains, beans, and nuts. Some vegetarians eat dairy and eggs, while vegans eat only plants. With good planning, vegetarian diets can be very healthy and provide all the nutrients your body needs.',
      explanation: `## What Is a Vegetarian Diet?

A vegetarian diet is based on plant foods. There are different types:

**Types of Vegetarians:**
- **Lacto-ovo vegetarians:** Eat dairy products and eggs
- **Lacto vegetarians:** Eat dairy but not eggs
- **Ovo vegetarians:** Eat eggs but not dairy
- **Vegans:** Eat only plant foods, no animal products at all
- **Flexitarians:** Mostly vegetarian but occasionally eat meat

## Foods Vegetarians Eat

**Plant Proteins:**
- Beans and lentils
- Nuts and seeds
- Tofu and soy products
- Whole grains
- Vegetables

**Other Plant Foods:**
- Fruits
- Vegetables
- Breads, pasta, rice
- Plant milks (soy, almond, oat)
- Healthy oils (olive, canola)

## Important Nutrients

**Protein**
- Found in beans, nuts, tofu, and whole grains
- Your body needs protein to build muscles
- Eat different plant proteins to get all the building blocks you need

**Iron**
- Found in beans, spinach, and fortified cereals
- Eat with vitamin C (like oranges) to help your body absorb it
- Dried fruits also have iron

**Calcium**
- Dairy products have lots of calcium
- If you don\'t eat dairy, choose fortified plant milks
- Broccoli, kale, and tofu also have calcium

**Vitamin B12**
- Only found naturally in animal foods
- Vegans need to eat fortified foods or take supplements
- Very important for preventing anemia

## Benefits of Vegetarian Diets

- Lower risk of heart disease
- Lower risk of high blood pressure
- Lower risk of type 2 diabetes
- Help maintain healthy weight
- Environmentally friendly

## Tips for Healthy Vegetarian Eating

1. **Eat a variety** of different plant foods
2. **Combine proteins** like beans and rice
3. **Include fortified foods** like cereals and plant milks
4. **Take B12 supplement** if you\'re vegan
5. **Eat colorful fruits and vegetables** every day

## Sample Meals

**Breakfast:**
- Oatmeal with berries and nuts
- Or toast with avocado and eggs (if you eat eggs)

**Lunch:**
- Bean and vegetable soup
- Salad with nuts and seeds
- Whole grain bread

**Dinner:**
- Tofu stir-fry with vegetables and rice
- Or bean burrito with cheese and salsa
- Or pasta with marinara sauce and beans

Vegetarian diets can be very healthy when planned well!`,
      keyTerms: [
        { term: 'vegetarian', definition: 'Person who does not eat meat, poultry, or fish; some vegetarians eat dairy and eggs' },
        { term: 'vegan', definition: 'Person who does not eat any animal products including meat, dairy, eggs, and honey' },
        { term: 'lacto-ovo vegetarian', definition: 'Vegetarian who eats dairy products and eggs but no meat, poultry, or fish' },
        { term: 'plant-based', definition: 'Diet that focuses on foods from plants; may or may not include some animal products' },
        { term: 'complete protein', definition: 'Food that contains all the essential amino acids your body needs' },
      ],
      analogies: [
        'Eating a variety of plant foods is like building with different colored LEGOs - you need different types to build something complete.',
        'Protein combining is like having all the pieces to a puzzle - some foods have some pieces, others have the rest.',
        'B12 is like a special key that only comes from animal products - vegans need to find another way to get this key.',
      ],
      examples: [
        'Beans and rice together make a complete protein with all essential amino acids',
        'Fortified breakfast cereals are an important source of B12 for many vegetarians',
        'Eating vitamin C-rich foods with iron-rich plant foods helps your body absorb more iron',
        'Many athletes follow vegetarian diets and still get plenty of protein for strength and performance',
      ],
      patientCounselingPoints: [
        'If you\'re vegan, take a B12 supplement or eat B12-fortified foods daily',
        'Combine different plant proteins throughout the day - you don\'t need to combine them at every meal',
        'Eat iron-rich plant foods with vitamin C to boost absorption',
        'Choose fortified plant milks for calcium and vitamin D',
        'Include a variety of protein sources like beans, nuts, tofu, and whole grains',
      ],
    },
    2: {
      level: 2,
      summary: 'Vegetarian diets can provide all necessary nutrients with proper planning. Plant-based diets are associated with reduced risk of chronic diseases but require attention to protein quality, vitamin B12, iron, calcium, omega-3 fatty acids, and zinc intake.',
      explanation: `## Types of Vegetarian Diets

**Classification:**

| Type | Includes | Excludes |
|------|----------|----------|
| Vegan | Only plant foods | All animal products |
| Lacto-ovo vegetarian | Plants + dairy + eggs | Meat, poultry, fish |
| Lacto vegetarian | Plants + dairy | Meat, poultry, fish, eggs |
| Ovo vegetarian | Plants + eggs | Meat, poultry, fish, dairy |
| Pesco-vegetarian | Plants + fish + dairy + eggs | Meat, poultry |
| Flexitarian | Primarily plant foods, occasional meat | Regular meat consumption |

## Health Benefits of Vegetarian Diets

**Well-Established Benefits:**
- Lower body mass index (BMI)
- Reduced risk of heart disease
- Lower blood pressure
- Reduced risk of type 2 diabetes
- Lower rates of certain cancers (colorectal)
- Improved longevity

**Possible Mechanisms:**
- Higher fiber intake
- Lower saturated fat intake
- Higher antioxidant intake
- Lower calorie density
- Improved insulin sensitivity
- Reduced inflammation

## Protein in Vegetarian Diets

**Complete vs. Incomplete Proteins:**

---
Complete plant proteins:
  +- Soy products (tofu, tempeh, edamame)
  +- Quinoa
  +- Buckwheat
  +- Amaranth
  +- Chia seeds
  +- Hemp seeds

Protein combining:
  +- Old advice: Combine at every meal
  +- Current understanding: Combine throughout day
  +- Examples:
  |  +- Beans + rice
  |  +- Hummus + pita
  |  +- Peanut butter + bread
  |  +- Lentils + nuts
  +- Plant variety ensures adequate amino acids

Protein needs:
  +- General: 0.8 g/kg/day
  +- Vegetarians: May need 10-20% more (digestibility)
  +- Athletes: 1.2-2.0 g/kg/day
  +- Pregnancy/lactation: 1.1-1.3 g/kg/day
---

## Key Nutrients of Concern

**Vitamin B12:**

| Issue | Details |
|-------|---------|
| Sources | Only animal products, fortified foods, supplements |
| Deficiency | Anemia, nerve damage, cognitive impairment |
| Who\'s at risk | All vegans, some vegetarians |
| Recommendations | Supplement (25-100 mcg/day) or B12-fortified foods (3 mcg/day) |

**Iron:**
- Plant iron (non-heme) is less bioavailable than heme iron
- Absorption enhancers: Vitamin C, citric acid
- Absorption inhibitors: Phytates, tannins, calcium
- Needs: Vegetarians may need 1.8x the RDA (32 mg vs 18 mg for menstruating women)
- Good sources: Lentils, beans, tofu, spinach, fortified cereals

**Calcium:**
- Vegans without fortified foods may be deficient
- Good plant sources: Calcium-set tofu, fortified plant milks, kale, bok choy, figs
- Absorption from some plants (spinach, Swiss chard) reduced by oxalates
- Recommendations: 1000-1300 mg/day depending on age

**Omega-3 Fatty Acids:**
- ALA from plants: Flax, walnuts, chia
- EPA/DHA primarily from fish
- Conversion of ALA to EPA/DHA is inefficient (~5-10%)
- Recommendations: Include ALA sources; consider algal DHA supplement

**Zinc:**
- Plant zinc less bioavailable (phytates)
- Needs: May need 50% more than omnivores
- Good sources: Legumes, nuts, seeds, whole grains, fortified cereals
- Preparation: Soaking, sprouting, leavening improves absorption

**Iodine:**
- Plant sources vary by soil iodine content
- Sea vegetables variable (may be excessive)
- Recommendations: Use iodized salt or supplement (150 mcg/day)

## Meal Planning Strategies

**Daily Pattern:**

---
Vegetarian food groups:
  +- Whole grains (6-8 servings/day)
  +- Vegetables (4+ servings/day)
  +- Fruits (3+ servings/day)
  +- Legumes, nuts, seeds (3+ servings/day)
  +- Dairy/fortified alternatives (2-3 servings/day)
  +- Healthy fats (moderate amounts)

Sample day:
  +- Breakfast:
  |  +- Oatmeal with flaxseed and berries
  |  +- Fortified plant milk or cow's milk
  |  +- Walnuts
  +- Lunch:
  |  +- Bean and vegetable soup
  |  +- Whole grain bread
  |  +- Fruit
  +- Snack:
  |  +- Hummus with vegetables
  |  +- Nuts or seeds
  +- Dinner:
     +- Tofu stir-fry with brown rice
     +- Mixed vegetables
     +- Fruit for dessert
---`,
      keyTerms: [
        { term: 'heme iron', definition: 'Iron from animal sources; well-absorbed' },
        { term: 'non-heme iron', definition: 'Iron from plant sources; less well-absorbed but absorption can be enhanced with vitamin C' },
        { term: 'essential amino acids', definition: 'Nine amino acids that cannot be made by the body and must come from the diet' },
        { term: 'phytates', definition: 'Compounds in plants that can bind minerals and reduce their absorption' },
        { term: 'AL', definition: 'Alpha-linolenic acid; plant-based omega-3 fatty acid' },
        { term: 'bioavailability', definition: 'The proportion of a nutrient that is absorbed and utilized by the body' },
      ],
      analogies: [
        'Non-heme iron is like trying to get water from a shallow well - it\'s there but you need extra effort (vitamin C) to get it.',
        'Phytates are like the security guards of the plant world - they protect minerals but make them harder for us to access.',
        'Amino acid combining is like making a complete sentence - you need all the right words (amino acids) to make sense.',
      ],
      examples: [
        'A lacto-ovo vegetarian gets adequate B12 from eggs and dairy, but a vegan needs fortified foods or supplements',
        'Eating an orange with spinach salad increases iron absorption by 3-4 times',
        'Tofu made with calcium sulfate provides 200-300 mg of calcium per serving',
        'Flaxseed (ground) provides 2.4 g of ALA omega-3 per tablespoon',
      ],
      patientCounselingPoints: [
        'Vegans must take a B12 supplement or eat fortified foods regularly - deficiency can cause permanent nerve damage',
        'Eat iron-rich plant foods with vitamin C foods to boost absorption',
        'Choose fortified plant milks and cereals to ensure adequate calcium, vitamin D, and B12',
        'Include ground flaxseed, walnuts, or chia seeds daily for omega-3 fatty acids',
        'Variety is key - eating many different plant foods ensures adequate nutrient intake',
      ],
    },
    3: {
      level: 3,
      summary: 'Vegetarian diets require attention to protein quality, micronutrient bioavailability, and strategic food combining. Well-planned plant-based diets provide health benefits and are appropriate across all life stages, but require knowledge of key nutrients and supplementation strategies.',
      explanation: `## Protein Quality and Amino Acid Requirements

**Amino Acid Scoring:**

---
Essential amino acids (9):
  +- Histidine
  +- Isoleucine
  +- Leucine
  +- Lysine (often limiting in grains)
  +- Methionine (often limiting in legumes)
  +- Phenylalanine
  +- Threonine
  +- Tryptophan
  +- Valine

Limiting amino acids in plant foods:
  +- Grains: Lysine limited
  +- Legumes: Methionine limited
  +- Nuts/seeds: Lysine limited
  +- Complementary: Grains + legumes = complete

DIAAS (Digestible Indispensable Amino Acid Score):
  +- Whey: 118
  +- Pea protein: 82
  +- Soy protein: 91
  +- Wheat: 48
  +- Ratios >100 indicate complete protein

Practical implication:
  - Variety throughout day (not necessarily at each meal)
  - Soy, quinoa are complete alone
  - Most plant proteins complementary when varied
  - Vegetarians need slightly higher intake (digestibility)
---

## Vitamin B12 Physiology

**Absorption and Metabolism:**

---
Dietary B12 (animal sources only):
  +- Bound to protein in food
  +- Stomach acid + pepsin: Release B12
  +- Saliva: R-protein binds B12
  +- Pancreatic proteases: B12 transferred to intrinsic factor
  +- Intrinsic factor (from gastric parietal cells): Essential for absorption
  +- Ileum: IF-B12 complex absorbed
  +- Transport: Transcobalamin II in blood

Why B12 is problematic for vegans:
  +- No reliable plant sources (except fortified)
  +- Algal sources: Variable B12 content (often analogs, not active)
  +- Fermented foods: Unreliable, variable
  +- Soil contamination: Not reliable source
  +- Deficiency develops slowly (liver stores 3-5 years)

B12 analogs in plant foods:
  +- Look like B12 in lab tests
  +- Not biologically active
  +- Can interfere with true B12 absorption
  +- Another reason not to rely on "natural" plant sources

Supplementation strategies:
  +- Cyanocobalamin: Stable, well-absorbed, inexpensive
  +- Methylcobalamin: Active form, more expensive
  +- Dosage: 25-100 mcg/day OR 1000-2000 mcg twice weekly
  +- Why high dose works: Passive absorption (1% of dose) without IF
---

**B12 Deficiency Manifestations:**

---
Hematologic:
  +- Megaloblastic anemia
  +- Macrocytosis (MCV >100)
  +- Hypersegmented neutrophils
  +- Pancytopenia (severe cases)

Neurologic:
  +- Peripheral neuropathy
  +- Subacute combined degeneration of spinal cord
  |  +- Dorsal columns (position sense)
  |  +- Lateral corticospinal tracts (motor)
  +- Cognitive impairment
  +- Psychiatric symptoms

Masking by folate:
  +- High folate intake corrects anemia
  +- Neurologic damage progresses
  +- B12 deficiency can be "silent" hematologically

Screening in vegetarians/vegans:
  +- Serum B12: Can be normal with deficiency
  +- MMA (methylmalonic acid): More sensitive
  +- Homocysteine: Elevated (also folate/B6)
  +- Holotranscobalamin: Early marker
---

## Iron Biochemistry in Plant-Based Diets

**Absorption Factors:**

---
Non-heme iron absorption:
  Base absorption: 5-12% (variable)

Enhancers:
  +- Ascorbic acid: Dose-dependent enhancement
  |  +- 50 mg vitamin C: ~3x absorption
  +- Organic acids: Citric, lactic, malic
  +- MFP factor (meat, fish, poultry): Not applicable to vegans
  +- Reduced iron (Fe2+): Better absorbed than Fe3+

Inhibitors:
  +- Phytates (myo-inositol hexaphosphate):
  |  +- Found in: Grains, legumes, nuts, seeds
  |  +- Inhibition: Dose-dependent
  +- Polyphenols:
  |  +- Found in: Tea, coffee, wine, certain vegetables
  |  +- Bind iron in GI tract
  +- Calcium:
  |  +- Doses >300 mg inhibit heme and non-heme iron
  |  +- Competitive absorption
  +- Soy protein: Moderate inhibition

Practical strategies:
  +- Combine iron-rich + vitamin C-rich foods
  +- Separate calcium supplements from iron-rich meals
  +- Avoid tea/coffee with meals (drink between meals)
  +- Food preparation: Soaking, sprouting, fermenting reduces phytates
  +- Cast iron cookware: Increases iron content of acidic foods
---

**Vegetarian Iron Requirements:**

---
Increased needs (Institute of Medicine):
  +- Men 19-50: 8 mg/day (same as omnivores)
  +- Women 19-50: 18 mg/day (omnivores) -> 32 mg/day (vegetarians)
  +- Pregnancy: 27 mg/day (omnivores) -> 49 mg/day (vegetarians)
  +- Rationale: Bioavailability adjustment (assumes 14% for non-heme vs 18% for heme)

Iron status monitoring:
  +- Ferritin: Best indicator of iron stores
  +- Serum iron: Variable, not diagnostic alone
  +- TIBC: Increases in iron deficiency
  +- Transferrin saturation: <15% suggests deficiency
  +- Hemoglobin: Late marker (already anemic)

Good plant sources:
  +- Legumes: Lentils (3.3 mg/cup), beans (2-4 mg/cup)
  +- Tofu: Variable (2-8 mg/cup, depending on processing)
  +- Tempeh: 4.8 mg/cup
  +- Pumpkin seeds: 2.5 mg/oz
  +- Spinach: 6.4 mg/cup cooked (but high oxalate = poor absorption)
  +- Fortified cereals: Up to 18 mg/serving
---

## Omega-3 Fatty Acids

**Conversion and Requirements:**

---
Essential fatty acids:
  +- LA (linoleic acid): Omega-6 (abundant in plant foods)
  +- ALA (alpha-linolenic acid): Omega-3 (limited in plant foods)

ALA to long-chain conversion:
  +- ALA -> EPA: 5-10% conversion
  +- ALA -> DHA: 2-5% conversion
  +- Limiting step: Delta-6 desaturase enzyme

Factors reducing conversion:
  +- High LA intake (omega-6 competes)
  +- Trans fats
  +- Alcohol
  +- Certain genetic variants (FADS polymorphisms)
  +- Aging

ALA-rich foods:
  +- Flaxseed (ground): 2.4 g/tablespoon
  +- Chia seeds: 2.5 g/tablespoon
  +- Walnuts: 1.3 g/ounce
  +- Hemp seeds: 1 g/tablespoon
  +- Canola oil: 1.3 g/tablespoon

DHA/EPA for vegetarians:
  +- Algal oil: Direct source of DHA (and EPA)
  +- DHA-only supplements: Available
  +- Recommendation: 200-300 mg DHA + EPA daily
  +- Especially important for:
     +- Pregnancy/lactation (fetal brain/eye development)
     +- Vegetarians with low fish intake
     +- Those with FADS polymorphisms
---

## Other Nutrients of Concern

**Zinc:**

---
Bioavailability challenge:
  +- Phytates: Strong chelator of zinc
  +- Absorption: Vegetarians ~15-35% lower
  +- Adaptation: Upregulated absorption over time

Enhancing zinc absorption:
  +- Soaking beans, grains (reduces phytate)
  +- Sprouting (activates phytase)
  +- Leavening bread (yeast produces phytase)
  +- Sourdough fermentation (best for phytate reduction)
  +- Food preparation matters!

Good plant sources:
  +- Pumpkin seeds: 2.2 mg/oz
  +- Cashews: 1.6 mg/oz
  +- Chickpeas: 2.5 mg/cup
  +- Oats: 2.3 mg/cup
  +- Tofu: 2-4 mg/cup
  +- Fortified cereals: Variable

Vegetarian RDA:
  +- Men: 11 mg/day -> 16.5 mg (estimated requirement)
  +- Women: 8 mg/day -> 12 mg (estimated requirement)
  +- Pregnancy: 11 mg/day -> 16.5 mg
---

**Iodine:**

---
Challenge for vegans:
  +- Plant content depends on soil iodine
  +- Organic produce may be lower (no iodate fertilizer)
  +- Sea vegetables: Variable (may be excessive)

Reliable sources:
  +- Iodized salt: ~150 mcg per 1/4 tsp
  +- Seaweed: Variable (kombu can be excessive, nori moderate)
  +- Dairy: Often high (from iodophor cleaning, feed)
  +- Eggs: Moderate (from feed)

Iodized salt note:
  +- Sea salt, kosher salt: Usually NOT iodized
  +- Pink Himalayan: Minimal iodine
  +- Check label for "iodized"

Vegan concern:
  +- Avoiding dairy and iodized salt
  +- Sea vegetables unreliable
  +- Supplement recommended: 150 mcg/day
  +- Upper limit: 1100 mcg/day

Excess iodine risks:
  +- Thyroid dysfunction
  +- Hyperthyroidism (Jod-Basedow)
  +- Hypothyroidism (Wolff-Chaikoff effect)
  +- Autoimmune thyroid disease
---
`,
      keyTerms: [
        { term: 'DIAAS', definition: 'Digestible Indispensable Amino Acid Score; method evaluating protein quality based on ileal digestibility of individual amino acids' },
        { term: 'intrinsic factor', definition: 'Glycoprotein secreted by parietal cells required for vitamin B12 absorption in the ileum' },
        { term: 'methylmalonic acid', definition: 'Metabolite that accumulates in B12 deficiency; more sensitive marker than serum B12' },
        { term: 'subacute combined degeneration', definition: 'Demyelination of dorsal columns and lateral corticospinal tracts from B12 deficiency' },
        { term: 'Delta-6 desaturase', definition: 'Rate-limiting enzyme converting ALA to long-chain omega-3 fatty acids; inhibited by excess omega-6' },
        { term: 'phytase', definition: 'Enzyme that breaks down phytates; activated by soaking, sprouting, fermentation' },
        { term: 'Wolff-Chaikoff effect', definition: 'Transient inhibition of thyroid hormone synthesis from acute iodine excess' },
      ],
      analogies: [
        'B12 absorption is like a security checkpoint with multiple gates - each step must work properly, and vegans bypass the first gate entirely.',
        'Non-heme iron absorption is like trying to fill a bucket with a hole - you need to pour extra (vitamin C) to make up for losses.',
        'FADS polymorphisms are like having a slower assembly line - some people convert plant omega-3s less efficiently.',
      ],
      examples: [
        'Long-term vegan with neurologic B12 deficiency despite normal serum levels (diagnosed by elevated MMA)',
        'Indian vegetarian population with high B12 deficiency rates despite some dairy intake',
        'Vegetarian woman developing iron-deficiency anemia with borderline ferritin',
        'Pescatarian avoiding fish due to mercury concerns requiring algal DHA supplement',
      ],
      clinicalNotes: 'Vegans require B12 supplementation regardless of symptoms - deficiency develops slowly over years. Use MMA testing if B12 deficiency suspected with normal serum B12. Iron deficiency is common in vegetarian women; combine iron-rich foods with vitamin C. Algal DHA supplements provide direct source of long-chain omega-3 without concerns about fish contaminants.',
    },
    4: {
      level: 4,
      summary: 'Advanced vegetarian nutrition encompasses personalized approaches based on genetics, life stage considerations, management of therapeutic diets, and evidence-based strategies for chronic disease prevention and treatment through plant-based dietary patterns.',
      explanation: `## Personalized Plant-Based Nutrition

**Genetic Variants Affecting Vegetarian Diets:**

---
FADS (Fatty Acid Desaturase) polymorphisms:
  +- Genes: FADS1, FADS2
  +- Function: Convert plant ALA to EPA/DHA
  +- Variants affect enzyme efficiency
  +- Inefficient converters:
  |  +- Higher DHA requirement
  |  +- More likely to be deficient on plant-only omega-3
  |  +- May benefit from algal DHA supplementation
  +- Testing not routine but may explain interindividual variation

MTHFR polymorphisms:
  +- Affect folate metabolism
  +- Vegetarians: Generally high folate intake
  +- C677T variant: Reduced enzyme activity
  +- Implications:
  |  +- Active folate (5-MTHF) may be preferred
  |  +- B12 interaction important
  |  +- Homocysteine elevation possible
  +- Consider in unexplained homocysteine elevation

TPMT variants:
  +- Affect methionine metabolism
  +- Relevance to B12/folate
  +- Not routinely tested

AMT1 gene variations:
  +- Taste receptor for amino acids
  +- May affect food preferences
  +- Influence protein food choices

Clinical application:
  +- Not routine, but explains variation
     in nutrient needs and responses
---

## Lifecycle Nutrition for Vegetarians

**Pregnancy and Lactation:**

---
Increased needs:
  +- Protein: +25 g/day (total 71 g/day)
  +- Iron: 27 mg/day (49 mg if strict vegetarian)
  +- Folate: 600 mcg DFE
  +- B12: 2.8 mcg/day (supplement critical for vegans)
  +- DHA: 200-300 mg/day (algal supplement)
  +- Iodine: 220 mcg/day (pregnancy), 290 mcg (lactation)
  +- Zinc: 11 mg/day (may need 16.5 mg)
  +- Calcium: 1000 mg/day

Special considerations:
  +- B12: Non-negotiable for vegans
  |  +- Deficiency -> neural tube defects, developmental delays
  |  +- Breast milk B12 reflects maternal status
  +- Iron: Increased needs but absorption improves in pregnancy
  +- DHA: Critical for fetal brain/eye development
  |  +- Algal supplements safe and effective
  +- Iodine: Supplementation often needed

Breastfeeding concerns:
  +- B12 in breast milk: Dependent on maternal status
  +- Deficient infants:
  |  +- Failure to thrive
  |  +- Developmental regression
  |  +- Irritability, apathy
  |  +- Potential permanent neurologic damage
  +- Vegan mothers: Must supplement B12

Lactation diet quality:
  +- Generally superior to omnivorous (more fruits/vegetables)
  +- DHA: Supplementation recommended
  +- B12: Continue supplementation
  +- Monitor infant growth
---

**Infancy and Childhood:**

---
Vegetarian infants:
  +- Breast milk or formula: Essential first year
  |  +- Breastfed vegan infants: B12 supplement for mother
  |  +- Soy formula: Appropriate for vegan infants
  +- Cow's milk: Not before 12 months
  +- Solid foods introduction (around 6 months):
  |  +- Iron-fortified cereal or pureed legumes
  |  +- Mashed fruits, vegetables
  |  +- Tofu, yogurt (if lacto-ovo)
  |  +- Nut/seed butters (thin, no choking risk)
  +- Growth monitoring: Essential

Vegan children:
  +- B12: Supplement (or fortified foods)
  +- Vitamin D: Supplement (400 IU)
  +- Iron: Attention to intake
  +- Calcium: Fortified milks, calcium-set tofu
  +- DHA: Consider supplement
  +- Protein: Adequate with varied diet
  +- Energy: May need higher volume (low density)

Growth patterns:
  +- Normal growth possible with well-planned diet
  +- Slightly slower growth initially reported
  +- Catch-up with proper attention
  +- Monitor growth curves

Adolescent vegetarians:
  +- Rapid growth increases needs
  +- Peak bone mass critical: Calcium + vitamin D
  +- Iron needs high (menstruation + growth)
  +- Eating disorder risk: Screen for restrictive eating
  +- B12 critical for vegan teens
---

## Therapeutic Applications

**Cardiovascular Disease:**

---
Plant-based diet effects:
  +- Blood pressure: 4-7 mmHg reduction
  +- Cholesterol: LDL reduction 15-30%
  |  +- Soluble fiber: Bile acid binding
  |  +- Reduced saturated fat
  |  +- Plant stanols/sterols
  |  +- Soy protein (modest effect)
  +- Inflammation: CRP reduction
  +- Endothelial function: Improved
  +- Weight management: Easier weight maintenance

Ornish diet (CVD reversal):
  +- Very low fat, plant-based
  +- Stress management, exercise
  +- Proven regression of CAD
  +- Intensive lifestyle intervention

Esselstyn program:
  +- No oil, whole food plant-based
  +- Angina reduction
  +- Disease stabilization/reversal
  +- Strict adherence required

Mediterranean vegetarian:
  +- Olive oil, nuts
  +- PREDIMED: Plant-based had excellent outcomes
  +- More sustainable than very low fat
  +- Excellent CVD prevention
---

**Diabetes:**

---
Plant-based diet benefits:
  +- Insulin sensitivity improvement
  +- HbA1c reduction: 0.5-1.5%
  +- Weight loss: Easier with plant foods
  +- Satiety: Higher fiber, lower calorie density
  +- Complications: Reduced progression

Mechanisms:
  +- Weight loss
  +- Reduced intramyocellular lipid
  +- Microbiome changes
  +- Reduced inflammation
  +- Improved insulin signaling

Dietary approaches:
  +- Whole food plant-based: Ideal
  +- ADA supports plant-based diets
  +- High fiber: Monitor initially (GI tolerance)
  +- Carbohydrate quality > quantity

Medication adjustments:
  +- May need reduced hypoglycemic meds
  +- Monitor for hypoglycemia initially
  +- Close monitoring with medication changes
---

**Cancer Prevention:**

---
Evidence-based associations:
  +- Red/processed meat: Colorectal cancer risk
  |  +- Plant-based eliminates this risk
  +- Fiber: Colorectal cancer protection
  +- Fruits/vegetables: Overall cancer risk reduction
  +- Phytochemicals: Anticancer properties
  |  +- Cruciferous: Sulforaphane (broccoli, kale)
  |  +- Lycopene: Tomatoes
  |  +- Resveratrol: Grapes
  |  +- Curcumin: Turmeric
  |  +- Many others under investigation
  +- Obesity reduction: Indirect benefit

Mechanisms:
  +- Antioxidant effects
  +- Anti-inflammatory
  +- Hormonal modulation
  +- Enhanced detoxification
  +- Apoptosis induction in cancer cells

Limitations:
  +- Not all cancers diet-related
  +- Genetics play role
  +- Plant-based not guarantee
---
`,
      keyTerms: [
        { term: 'FADS polymorphisms', definition: 'Genetic variants affecting conversion of plant ALA to long-chain EPA/DHA omega-3 fatty acids' },
        { term: '5-MTHF', definition: '5-methyltetrahydrofolate; active form of folate that bypasses MTHFR enzyme deficiency' },
        { term: 'DHA', definition: 'Docosahexaenoic acid; long-chain omega-3 fatty acid critical for brain and eye development' },
        { term: 'plant stanols/sterols', definition: 'Plant compounds that block cholesterol absorption; can lower LDL by 10-15%' },
        { term: 'phytochemicals', definition: 'Bioactive compounds in plants with potential health benefits beyond basic nutrition' },
        { term: 'sulforaphane', definition: 'Compound in cruciferous vegetables with anticancer properties via Nrf2 activation' },
      ],
      analogies: [
        'FADS polymorphisms are like having a slower assembly line - some people convert plant nutrients less efficiently.',
        'Phytochemicals are like the plant\'s immune system that benefits us when we eat them.',
        'Breast milk B12 levels are like a mirror - they reflect the mother\'s stores exactly.',
      ],
      examples: [
        'Vegan infants exclusively breastfed by B12-deficient mother developed failure to thrive and developmental delay',
        'Ornish program participants with CAD showed regression of atherosclerosis on plant-based diet',
        'Type 2 diabetics adopting plant-based diet reduced HbA1c by 1.2% and reduced medication needs',
        'FADS1/2 "efficient converter" haplotype associated with better DHA status on vegetarian diet',
      ],
      clinicalNotes: 'Vegan pregnancy requires B12 supplementation - deficiency causes irreversible neurological damage in infant. B12 status should be checked in pregnancy with MMA if serum B12 borderline. Children on vegan diets need monitoring of growth, B12, iron, and vitamin D. Plant-based diets effectively support CVD risk reduction and diabetes management.',
    },
    5: {
      level: 5,
      summary: 'Expert-level vegetarian nutrition encompasses emerging research on plant bioactives, microbiome interactions, precision nutrition approaches, and management of complex clinical scenarios including therapeutic applications for chronic disease and optimization across diverse populations.',
      explanation: `## Advanced Plant Bioactives

**Beyond Basic Nutrients:**

---
Polyphenols and health:
  +- Flavonoids:
  |  +- Quercetin: Anti-inflammatory, antiviral
  |  +- Kaempferol: Cancer prevention potential
  |  +- Catechins: Cardiovascular, metabolic benefits
  |  +- Anthocyanins: Cognitive, vascular benefits
  +- Stilbenes:
  |  +- Resveratrol: Sirtuin activation, longevity pathways
  +- Lignans:
  |  +- Enterolactone/enterodiol: Hormone modulation
  +- Curcuminoids:
     +- Curcumin: Anti-inflammatory, NF-κB inhibition
     +- Bioavailability challenges (piperine helps)

Sulfur compounds:
  +- Cruciferous vegetables:
  |  +- Glucosinolates -> Isothiocyanates
  |  +- Sulforaphane: Nrf2 activation (detoxification)
  |  +- Indole-3-carbinol: Estrogen metabolism
  |  +- DIM: Hormonal balance
  +- Allium vegetables:
     +- Organosulfur compounds
     +- Cardiovascular, anticancer effects

Carotenoids:
  +- Provitamin A: Beta-carotene, alpha-carotene
  +- Non-provitamin A: Lycopene, lutein, zeaxanthin
  +- Absorption enhanced by fat

Bioavailability factors:
  +- Food matrix effects
  +- Processing/cooking effects
  +- Microbiome metabolism
  +- Genetic variation in metabolism
  +- Dose-response relationships

Emerging research:
  +- Senolytics: Quercetin, fisetin clearing senescent cells
  +- Autophagy activation: spermidine, polyamines
  +- Mitochondrial function: Urolithin A (from ellagitannins)
  +- Epigenetic modulation: Various plant compounds
---

## Microbiome and Plant-Based Diets

**Diet-Microbiome Interactions:**

---
Vegetarian microbiome characteristics:
  +- Increased diversity (generally)
  +- Prevotella dominance (vs. Bacteroides in omnivores)
  +- Increased fiber-fermenting species
  +- Higher short-chain fatty acid production
  +- Lower bile-tolerant organisms

SCFA production:
  +- Butyrate:
  |  +- Colonocyte fuel
  |  +- Anti-inflammatory (HDAC inhibition)
  |  +- Tight junction enhancement
  |  +- Butyrate producers: Faecalibacterium prausnitzii
  +- Propionate:
  |  +- Gluconeogenesis substrate
  |  +- Satiety hormone stimulation
  |  +- Cholesterol synthesis inhibition
  +- Acetate:
     +- Substrate for lipogenesis
     +- Cross-feeding for other bacteria

TMAO production:
  +- Omnivores: Higher from dietary carnitine, choline
  +- Vegetarians: Lower baseline (microbiome adapted)
  +- Cardiovascular risk association
  +- Omnivore microbiome produces more TMA from choline

Phytochemical metabolism:
  +- Microbiome converts plant compounds to active metabolites
  +- Examples:
  |  +- Soy daidzein -> equol (only 30-50% of population)
  |  +- Ellagitannins -> urolithin A (varied conversion)
  |  +- Lignans -> enterolactone, enterodiol
  +- Interindividual variation in microbiome affects benefits

Personalized nutrition implications:
  +- Microbiome composition affects nutrient extraction
  +- Predicts dietary response (glycemic, lipid)
  +- Explains interindividual variation
  +- Future: Microbiome-guided recommendations
---

## Precision Vegetarian Nutrition

**Emerging Assessment Tools:**

---
Metabolomics:
  +- Objective measure of dietary intake
  +- Identifies phytochemical metabolites
  +- Detects compliance with plant-based diet
  +- Predicts disease risk
  +- Personalizes recommendations

Genomics:
  +- Nutrigenomics: Diet-gene interactions
  +- APOE genotype: Tailor fat composition
  +- TCF7L2: Diabetes risk, carbohydrate response
  +- FADS: Omega-3 conversion efficiency
  +- MicroRNA regulation by plant compounds

Epigenetics:
  +- Plant compounds modify DNA methylation
  +- Histone modifications
  +- ncRNA regulation
  +- Transgenerational effects

Wearable technology:
  +- Continuous glucose monitoring
  +- Personalized food response
  +- Real-time feedback
  +- AI-driven recommendations

Integrative approaches:
  +- Multi-omic data integration
  +- Machine learning predictions
  +- Personalized food recommendations
  +- Dynamic adjustment based on response
---

## Specialized Therapeutic Applications

**Autoimmune Diseases:**

---
Plant-based diets in autoimmunity:
  +- Rheumatoid arthritis:
  |  +- Vegan diet showed improvement in studies
  |  +- Reduced inflammatory markers
  |  +- Possible mechanisms:
  |  |  +- Reduced arachidonic acid intake
  |  |  +- Increased antioxidant intake
  |  |  +- Microbiome changes
  |  |  +- Weight reduction
  |  +- Gluten-free: May help some patients
  +- Multiple sclerosis:
  |  +- Swank diet (low saturated fat): Evidence
  |  +- Plant-based: Potential benefit
  |  +- Vitamin D status critical
  +- Inflammatory bowel disease:
  |  +- Exclusion diets sometimes help
  |  +- Specific Carbohydrate Diet, low-FODMAP
  |  +- Plant-based possible with care
  |  +- Watch for restrictive patterns
  +- General principles:
     +- Emphasize anti-inflammatory plant foods
     +- Omega-3 from ALA + algal DHA
     +- Adequate but not excessive fiber during flares
     +- Individual triggers vary
---

**Mental Health:**

---
Plant-based diets and mental health:
  +- Depression risk:
  |  +- Plant-based associated with lower risk
  |  +- Possible mechanisms:
  |  |  +- Reduced inflammation
  |  |  +- Improved gut microbiome
  |  |  +- Antioxidant effects
  |  |  +- Higher fiber (short-chain fatty acids)
  |  |  +- Blood sugar stabilization
  |  +- But: Confounding factors (lifestyle)
  +- Anxiety: Similar associations
  +- Cognitive function:
  |  +- MIND diet (Mediterranean-DASH)
  |  +- Plant-based components
  |  +- Reduced dementia risk
  +- Considerations:
     +- B12 critical for mental health
     +- Deficiency causes depression, psychosis
     +- Omega-3 status important
     +- Avoid overly restrictive eating

Caution:
  +- Orthorexia: Obsession with healthy eating
  +- May be more common in health-conscious
  +- Plant-based diet can mask ED
  +- Screen for restrictive patterns
---
`,
      keyTerms: [
        { term: 'polyphenols', definition: 'Diverse group of plant compounds with antioxidant and anti-inflammatory properties' },
        { term: 'sulforaphane', definition: 'Isothiocyanate compound from cruciferous vegetables that activates Nrf2 antioxidant response' },
        { term: 'TMAO', definition: 'Trimethylamine N-oxide; gut microbiome-derived metabolite associated with cardiovascular disease' },
        { term: 'senolytics', definition: 'Compounds that selectively induce death in senescent (dysfunctional) cells' },
        { term: 'autophagy', definition: 'Cellular self-cleaning process; plant compounds like spermidine can activate it' },
        { term: 'equol', definition: 'Isoflavone metabolite produced by gut microbiome; only 30-50% of people are producers' },
        { term: 'orthorexia', definition: 'Unhealthy obsession with eating "pure" or "clean" food; can overlap with plant-based eating' },
      ],
      analogies: [
        'Senolytics are like targeted demolition crews for cells that have stopped working properly.',
        'The microbiome is like an internal pharmacy - it transforms plant compounds into active medicines.',
        'TMAO production is like a gut bacteria fingerprint - it tells us what your microbiome has been doing.',
      ],
      examples: [
        'Equol-producers (from soy isoflavones) have lower breast cancer incidence in some studies',
        'Urolithin A from pomegranate improves mitochondrial function but only in 40% of people (specific microbiome)',
        'Swank diet (low sat fat, plant-based) reduced MS disability progression',
        'Vegetarian diet reduced RA disease activity (DAS28) in randomized trials',
      ],
      clinicalNotes: `Expert Clinical Pearls:

1. **B12 in vegans:** Check MMA and homocysteine if clinical suspicion despite normal serum B12; deficiency can develop over years

2. **Pregnant vegans:** Must supplement B12 (250 mcg/day), DHA (300 mg), ensure adequate iron, calcium, iodine, and vitamin D

3. **Athletes on plant-based:** Creatine (5 g/day) may be beneficial due to low dietary intake

4. **Eating disorders:** Screen for orthorexia in those adopting plant-based diets; ensure dietary expansion not restriction

5. **Microbiome:** Differences in vegetarian microbiome (Prevotella, SCFA producers) may explain health benefits

6. **Genetic testing:** FADS variants explain differential response to plant omega-3s; inefficient converters need algal DHA`,
    },
  },

  media: [
    {
      id: 'vegetarian-food-groups',
      type: 'diagram',
      filename: 'vegetarian-food-groups.svg',
      title: 'Vegetarian Food Groups',
      description: 'Plant-based protein sources and food groups for vegetarians',
    },
    {
      id: 'protein-combining',
      type: 'diagram',
      filename: 'protein-combining.svg',
      title: 'Plant Protein Combinations',
      description: 'Complementary plant proteins for complete amino acid profile',
    },
  ],

  citations: [
    {
      id: 'academy-position-vegetarian',
      type: 'article',
      title: 'Position of the Academy of Nutrition and Dietetics: Vegetarian Diets',
      authors: ['VR Melina', 'WS Craig', 'S Levin'],
      source: 'Journal of the Academy of Nutrition and Dietetics',
    },
    {
      id: 'dietary-guidelines-americans',
      type: 'article',
      title: 'Dietary Guidelines for Americans, 2020-2025',
      authors: ['U.S. Department of Agriculture', 'U.S. Department of Health and Human Services'],
      source: 'USDA/HHS',
      url: 'https://www.dietaryguidelines.gov',
    },
  ],

  crossReferences: [
    { targetId: 'nutrition-macronutrients', targetType: 'topic', relationship: 'related', label: 'Macronutrients' },
    { targetId: 'nutrition-micronutrients', targetType: 'topic', relationship: 'related', label: 'Micronutrients' },
    { targetId: 'nutrition-through-lifecycle', targetType: 'topic', relationship: 'related', label: 'Lifecycle Nutrition' },
  ],

  tags: {
    systems: ['gastrointestinal', 'endocrine'],
    topics: ['nutrition', 'preventive-medicine', 'chronic-disease', 'lifestyle-medicine'],
    clinicalRelevance: 'medium',
    examRelevance: {
      usmle: false,
      nbme: false,
      shelf: ['family-medicine', 'medicine'],
    },
  },

  createdAt: '2026-01-26T00:00:00.000Z',
  updatedAt: '2026-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default vegetarianDiets;
