/**
 * Micronutrients - Nutrition Science
 *
 * Comprehensive content on vitamins and minerals including their
 * functions, dietary sources, deficiency manifestations, toxicity
 * symptoms, and clinical applications across the lifespan.
 */

import { EducationalContent } from '../types';

export const micronutrients: EducationalContent = {
  id: 'nutrition-micronutrients',
  type: 'topic',
  name: 'Micronutrients',
  alternateNames: ['Vitamins and Minerals', 'Micronutrition', 'Essential Nutrients'],

  levels: {
    1: {
      level: 1,
      summary: 'Micronutrients are vitamins and minerals your body needs in small amounts to work properly and stay healthy. They help your body grow, fight illness, and keep all your systems working.',
      explanation: `## What Are Micronutrients?

Your body needs two types of nutrients:
- **Macronutrients:** Carbs, proteins, and fats (needed in large amounts)
- **Micronutrients:** Vitamins and minerals (needed in small amounts)

Even though you only need tiny amounts of micronutrients, they are super important for your health!

### Vitamins

Vitamins help your body work properly. There are 13 essential vitamins:

**Fat-Soluble Vitamins** (stored in fat):
- **Vitamin A:** Helps your eyes see, especially at night
- **Vitamin D:** Helps your bones absorb calcium (from sunlight!)
- **Vitamin E:** Protects your cells
- **Vitamin K:** Helps your blood clot when you get a cut

**Water-Soluble Vitamins** (not stored, need daily):
- **Vitamin C:** Helps you fight colds and heal wounds
- **B Vitamins:** Give you energy and help your brain work

### Minerals

Minerals come from the earth and are in the foods we eat:

**Major Minerals** (needed in larger amounts):
- **Calcium:** Builds strong bones and teeth
- **Potassium:** Helps your heart beat properly
- **Magnesium:** Helps your muscles relax
- **Sodium:** Helps your body hold onto water

**Trace Minerals** (needed in tiny amounts):
- **Iron:** Carries oxygen in your blood
- **Zinc:** Helps you heal when you're hurt
- **Iodine:** Helps your brain and body grow

### Where to Find Micronutrients

| Micronutrient | Food Sources |
|---------------|--------------|
| Vitamin A | Carrots, sweet potatoes, spinach |
| Vitamin C | Oranges, strawberries, bell peppers |
| Vitamin D | Sunlight, fortified milk, fatty fish |
| Calcium | Milk, cheese, yogurt, leafy greens |
| Iron | Red meat, beans, fortified cereals |
| Potassium | Bananas, potatoes, tomatoes |

### What Happens If You Don't Get Enough?

**Vitamin Deficiencies:**
- Not enough Vitamin C → Bleeding gums, slow healing
- Not enough Vitamin D → Weak, soft bones
- Not enough Iron → Feeling tired, weak, pale
- Not enough Vitamin A → Trouble seeing at night

**Mineral Deficiencies:**
- Not enough Calcium → Weak bones
- Not enough Iodine → Poor growth, learning problems
- Not enough Iron → Anemia (feeling weak and tired)

### Tips for Getting Enough Micronutrients

1. **Eat a rainbow of colors** - Different colors mean different vitamins
2. **Choose whole foods** - Fruits, vegetables, whole grains
3. **Don't overcook vegetables** - Some vitamins are destroyed by heat
4. **Eat fresh when possible** - Fresh foods have more vitamins
5. **Include fortified foods** - Some cereals and milks have added vitamins

Remember: A balanced diet with lots of different foods usually gives you all the micronutrients you need!`,
      keyTerms: [
        { term: 'micronutrients', definition: 'Vitamins and minerals that your body needs in small amounts to stay healthy' },
        { term: 'vitamins', definition: 'Nutrients that help your body grow and work properly; found in foods' },
        { term: 'minerals', definition: 'Nutrients from the earth that help build bones and control body functions' },
        { term: 'deficiency', definition: 'Not having enough of a nutrient your body needs' },
        { term: 'fortified foods', definition: 'Foods with extra vitamins and minerals added to them' },
      ],
      analogies: [
        'Micronutrients are like the spark plugs in a car - tiny but essential for the engine to run.',
        'Vitamins are like the workers in a factory - each has a specific job that keeps everything running.',
        'Minerals are like the nuts and bolts that hold everything together.',
      ],
      examples: [
        'Sailors used to get scurvy (vitamin C deficiency) until they learned to bring oranges on long voyages',
        'Drinking milk (fortified with vitamin D) helps bones grow strong',
        'Eating spinach (rich in iron) helps prevent anemia and feeling tired',
        'People who don\'t get enough sunlight may need vitamin D supplements',
      ],
      patientCounselingPoints: [
        'Eat fruits and vegetables of different colors every day',
        'Include a vitamin C source with iron-rich foods to help absorption',
        'If you don\'t get much sun, ask your doctor about vitamin D',
        'Children and teens need extra calcium while their bones are growing',
        'Pregnant women need special vitamins like folic acid',
      ],
    },
    2: {
      level: 2,
      summary: 'Micronutrients are essential vitamins and minerals required in small quantities for proper physiological functioning. Deficiencies cause specific disorders, while excess intake can lead to toxicity, making balanced intake crucial for health.',
      explanation: `## Understanding Micronutrients

Micronutrients are nutrients required in amounts less than 100 mg/day. Unlike macronutrients (carbohydrates, proteins, fats), they don't provide energy but enable chemical reactions in the body.

## Vitamins

### Fat-Soluble Vitamins (A, D, E, K)

| Vitamin | Primary Functions | Deficiency | Toxicity | Food Sources |
|---------|------------------|------------|----------|--------------|
| A | Vision, immune function, skin health | Night blindness, dry skin | Liver damage, bone pain | Liver, carrots, sweet potatoes |
| D | Calcium absorption, bone health | Rickets, osteomalacia | Hypercalcemia, kidney stones | Sunlight, fatty fish, fortified milk |
| E | Antioxidant, cell protection | Nerve damage, muscle weakness | Bleeding risk | Nuts, seeds, vegetable oils |
| K | Blood clotting, bone metabolism | Easy bruising, bleeding | Interferes with anticoagulants | Leafy greens, broccoli |

### Water-Soluble Vitamins (B-complex, C)

| Vitamin | Primary Functions | Deficiency | Food Sources |
|---------|------------------|------------|--------------|
| B1 (Thiamine) | Energy metabolism, nerve function | Beriberi, Wernicke-Korsakoff | Pork, whole grains, legumes |
| B2 (Riboflavin) | Energy production, skin health | Cracked lips, skin rash | Dairy, eggs, leafy greens |
| B3 (Niacin) | Energy metabolism, DNA repair | Pellagra (diarrhea, dementia, dermatitis) | Meat, fish, peanuts |
| B5 (Pantothenic acid) | Energy metabolism, hormone synthesis | Fatigue, numbness | Widely distributed |
| B6 (Pyridoxine) | Amino acid metabolism, neurotransmitters | Anemia, depression, confusion | Meat, potatoes, bananas |
| B7 (Biotin) | Fat/carb metabolism | Hair loss, skin rash | Eggs, nuts, seeds |
| B9 (Folate) | DNA synthesis, red blood cell formation | Neural tube defects, megaloblastic anemia | Leafy greens, legumes, fortified grains |
| B12 (Cobalamin) | DNA synthesis, nerve function | Pernicious anemia, nerve damage | Animal products only |
| C | Collagen synthesis, antioxidant, immunity | Scurvy, poor wound healing | Citrus, berries, peppers |

## Minerals

### Major Minerals

| Mineral | Daily Needs | Functions | Deficiency | Food Sources |
|---------|-------------|-----------|------------|--------------|
| Calcium | 1000-1300 mg | Bones, teeth, muscle function | Osteoporosis, muscle cramps | Dairy, leafy greens, fortified foods |
| Phosphorus | 700 mg | Bones, energy metabolism | Rare (usually adequate) | Meat, dairy, cola |
| Magnesium | 310-420 mg | Enzyme reactions, muscle/nerve | Muscle cramps, arrhythmias | Nuts, whole grains, leafy greens |
| Sodium | 1500 mg (limit) | Fluid balance, nerve transmission | Hyponatremia | Salt, processed foods |
| Potassium | 2600-3400 mg | Fluid balance, heart rhythm | Hypokalemia, weakness | Bananas, potatoes, beans |
| Chloride | 2300 mg | Fluid balance, stomach acid | Rare | Salt, seaweed |

### Trace Minerals

| Mineral | Daily Needs | Functions | Deficiency | Food Sources |
|---------|-------------|-----------|------------|--------------|
| Iron | 8-18 mg | Oxygen transport, energy metabolism | Anemia, fatigue | Red meat, beans, fortified cereals |
| Zinc | 8-11 mg | Immune function, wound healing, taste | Poor immunity, hair loss | Meat, shellfish, legumes |
| Iodine | 150 mcg | Thyroid hormone production | Goiter, intellectual disability | Iodized salt, seafood |
| Selenium | 55 mcg | Antioxidant enzyme function | Muscle weakness, cardiomyopathy | Brazil nuts, seafood |
| Copper | 900 mcg | Iron metabolism, energy production | Anemia, neutropenia | Shellfish, nuts, seeds |
| Manganese | 2-5 mg | Bone formation, metabolism | Rare | Whole grains, nuts |
| Fluoride | 3-4 mg | Dental health | Tooth decay | Fluoridated water, tea |
| Chromium | 25-35 mcg | Insulin action | Impaired glucose tolerance | Broccoli, grapes |

## Absorption and Bioavailability

**Enhancers:**
- Vitamin C with non-heme iron (plant sources)
- Vitamin D with calcium
- Fat with fat-soluble vitamins (A, D, E, K)

**Inhibitors:**
- **Phytates** (grains, legumes): Bind minerals
- **Oxalates** (spinach, rhubarb): Reduce calcium absorption
- **Tannins** (tea, coffee): Reduce iron absorption
- **Calcium supplements:** Can interfere with iron absorption

## Special Considerations

**At Risk for Deficiencies:**
- Pregnant and breastfeeding women
- Infants and children
- Older adults
- Vegetarians and vegans (B12, iron, zinc)
- People with malabsorption conditions
- Those on restrictive diets

**Fortified Foods:**
- Breakfast cereals (B vitamins, iron)
- Milk (vitamin D, A)
- Salt (iodine)
- Plant milks (calcium, vitamin D, B12)
- Orange juice (calcium, vitamin D)`,
      keyTerms: [
        { term: 'antioxidant', definition: 'A substance that protects cells from damage caused by free radicals' },
        { term: 'bioavailability', definition: 'The amount of a nutrient that is absorbed and available for use by the body' },
        { term: 'fortified', definition: 'Having added vitamins and minerals not originally present in the food' },
        { term: 'scurvy', definition: 'Disease caused by vitamin C deficiency characterized by bleeding, bruising, and poor wound healing' },
        { term: 'rickets', definition: 'Bone disease in children caused by vitamin D deficiency leading to soft, weak bones' },
        { term: 'anemia', definition: 'Condition where you lack enough healthy red blood cells to carry adequate oxygen to your tissues' },
        { term: 'goiter', definition: 'Enlarged thyroid gland caused by iodine deficiency' },
        { term: 'neural tube defects', definition: 'Birth defects of the brain and spine prevented by adequate folate intake' },
      ],
      analogies: [
        'Vitamins are like tools in a toolbox - each has a specific purpose, and you need all of them for the job.',
        'Minerals are like the framework of a building - not visible from outside but essential for structural integrity.',
        'Bioavailability is like how much of the mail actually reaches your house versus getting lost in transit.',
      ],
      examples: [
        'Vitamin C deficiency (scurvy) among sailors was cured by carrying limes on voyages ("limey")',
        'Folate fortification of grains reduced neural tube defects by 25-50%',
        'Iodized salt virtually eliminated goiter in the United States',
        'Vitamin D fortification of milk eliminated rickets as a common childhood disease',
      ],
      patientCounselingPoints: [
        'Take fat-soluble vitamins (A, D, E, K) with meals containing fat for better absorption',
        'Don\'t take calcium and iron supplements at the same time - they interfere with each other',
        'Vegetarians and vegans should supplement with vitamin B12 or consume fortified foods',
        'If you take anticoagulants, be consistent with vitamin K intake and discuss supplements with your doctor',
        'Pregnant women should take a prenatal vitamin with folic acid before and during pregnancy',
      ],
    },
    3: {
      level: 3,
      summary: 'Micronutrient physiology encompasses enzyme cofactor functions, antioxidant defense systems, and mineral-based structural components. Deficiency states produce characteristic clinical syndromes, while toxicities require careful management, especially with fat-soluble vitamins.',
      explanation: `## Vitamin Physiology and Metabolism

### Fat-Soluble Vitamin Absorption

\`\`\`
Dietary fat → Mixed micelles (with bile salts) →
  Enterocyte absorption → Chylomicron formation →
    Lymphatic system → Systemic circulation →
      Liver (processing/storage) → Peripheral tissues
\`\`\`

**Vitamin A Metabolism:**
\`\`\`
Dietary sources:
  ├─ Preformed vitamin A (retinol, retinal, retinoic acid) - Animal sources
  └─ Provitamin A carotenoids (β-carotene) - Plant sources

Conversion:
  β-carotene → (15,15\'-monooxygenase) → Retinal →
    ├─ Retinol (storage) → Retinyl esters (liver)
    └─ Retinoic acid (active hormone)

Transport: RBP (retinol-binding protein) delivers to tissues
\`\`\`

**Vitamin D Metabolism:**
\`\`\`
Skin: 7-dehydrocholesterol + UVB → Cholecalciferol (D3)
Diet: Ergocalciferol (D2) from plants, Cholecalciferol (D3) from animals

Liver: D2/D3 → 25-hydroxyvitamin D [25(OH)D] (calcidiol)
Kidney: 25(OH)D → 1,25-dihydroxyvitamin D [1,25(OH)2D] (calcitriol)

Calcitriol actions:
  - ↑Intestinal calcium absorption
  - ↑Intestinal phosphorus absorption
  - Bone mineralization
  - Immune modulation
\`\`\`

**Vitamin E Function:**
- Lipid-soluble antioxidant in cell membranes
- Prevents lipid peroxidation chain reactions
- Regenerated by vitamin C
- α-tocopherol is the most active form

**Vitamin K Cycle:**
\`\`\`
Vitamin K (quinone) → Vitamin K epoxide → (reductase) → Vitamin K (quinone)
                  ↓
            Vitamin K hydroquinone (cofactor for γ-glutamyl carboxylase)

γ-Carboxylation activates clotting factors II, VII, IX, X and proteins C, S
\`\`\`

### Water-Soluble Vitamin Functions

**B Vitamin Coenzyme Roles:**

| Vitamin | Coenzyme Form | Key Reactions |
|---------|---------------|---------------|
| B1 (Thiamine) | TPP | Pyruvate dehydrogenase, transketolase |
| B2 (Riboflavin) | FAD, FMN | ETC complexes I and II, TCA cycle |
| B3 (Niacin) | NAD+, NADP+ | Glycolysis, TCA, ETC, pentose phosphate |
| B5 (Pantothenic acid) | CoA | TCA cycle, fatty acid metabolism |
| B6 (Pyridoxine) | PLP | Transamination, neurotransmitter synthesis |
| B7 (Biotin) | Carboxylase cofactor | Gluconeogenesis, fatty acid synthesis |
| B9 (Folate) | THF | One-carbon transfers, nucleotide synthesis |
| B12 (Cobalamin) | Methylcobalamin, deoxyadenosylcobalamin | Homocysteine to methionine, methylmalonyl-CoA mutase |

**Folate Cycle:**
\`\`\`
Dietary folate → (dihydrofolate reductase) →
  5-methyl-THF → (transfers methyl to) Homocysteine →
    Methionine → SAM (methyl donor) →
      DNA methylation, neurotransmitter synthesis

Vitamin B12 as cofactor for:
  - Methionine synthase (homocysteine → methionine)
  - Methylmalonyl-CoA mutase (propionate metabolism)
\`\`\`

**Vitamin C Functions:**
- Collagen synthesis (proline and lysine hydroxylation)
- Antioxidant (scavenges free radicals, regenerates vitamin E)
- Carnitine synthesis
- Tyrosine metabolism
- Enhances non-heme iron absorption (reduces Fe3+ to Fe2+)

## Mineral Physiology

### Electrolyte and Fluid Balance

\`\`\`
Sodium-Potassium Pump (Na+/K+-ATPase):
  - Maintains resting membrane potential
  - 3 Na+ out, 2 K+ in (against gradients)
  - Consumes ~1/3 of cellular ATP

Calcium regulation:
  - PTH ↑ serum Ca2+ (bone resorption, kidney reabsorption, calcitriol activation)
  - Calcitonin ↓ serum Ca2+ (inhibits bone resorption)
  - Vitamin D ↑ intestinal Ca2+ absorption
\`\`\`

### Iron Metabolism

\`\`\`
Absorption (duodenum):
  Heme iron (animal): Heme carrier protein 1 (HCP1)
  Non-heme iron (plant): DMT1 (enhanced by acid, vitamin C)

Transport:
  - Fe2+ → (ferroportin) → Blood
  - Fe2+ → (hephaestin/ceruloplasmin) → Fe3+ →
    - Transferrin (transport protein)
    - Tissues via transferrin receptor

Storage:
  - Ferritin (intracellular storage)
  - Hemosiderin (long-term storage)

Regulation:
  - Hepcidin (liver-produced hormone)
  - ↑Hepcidin → ↓Ferroportin → ↓Iron absorption/release
  - Inflammation → ↑Hepcidin → Anemia of chronic disease
\`\`\`

**Iron Cycle in RBCs:**
\`\`\`
Fe2+ + Heme → Hemoglobin (O2 transport)
RBC senescence → Hemolysis → Heme →
  - Fe2+ recycled to bone marrow
  - Protobufyrin → Bilirubin
\`\`\`

### Trace Element Functions

| Mineral | Enzyme/Molecule | Function |
|---------|----------------|----------|
| Zinc | >300 enzymes | DNA/RNA polymerase, alkaline phosphatase, alcohol dehydrogenase |
| Copper | Cytochrome c oxidase, SOD | ETC, antioxidant defense |
| Selenium | Glutathione peroxidase | Antioxidant, thyroid hormone metabolism |
| Iodine | Thyroid hormones (T3, T4) | Metabolic regulation |
| Molybdenum | Xanthine oxidase, sulfite oxidase | Purine metabolism, sulfite detoxification |
| Manganese | SOD, arginase | Antioxidant, urea cycle |

## Deficiency Syndromes

**Vitamin Deficiency Manifestations:**

| Vitamin | Deficiency Syndrome | Key Findings |
|---------|---------------------|--------------|
| A | Hypovitaminosis A | Night blindness, Bitot spots, xerophthalmia, keratomalacia |
| B1 | Beriberi (wet/dry) | Edema, heart failure OR neuropathy, Wernicke-Korsakoff |
| B3 | Pellagra | Dermatitis, diarrhea, dementia ("3 Ds") |
| B6 | Pyridoxine deficiency | Seizures, sideroblastic anemia, peripheral neuropathy |
| B9 | Folate deficiency | Megaloblastic anemia, ↑homocysteine |
| B12 | Cobalamin deficiency | Megaloblastic anemia, subacute combined degeneration |
| C | Scurvy | Bleeding gums, petechiae, cork-screw hairs, poor wound healing |
| D | Rickets (children) / Osteomalacia (adults) | Bone pain, fractures, muscle weakness |
| E | Vitamin E deficiency | Ataxia, areflexia, retinopathy |
| K | Vitamin K deficiency | Easy bruising, bleeding, elevated PT |

**Mineral Deficiency Syndromes:**

| Mineral | Deficiency Syndrome | Key Findings |
|---------|---------------------|--------------|
| Iron | Iron deficiency anemia | Microcytic, hypochromic anemia, fatigue, pica |
| Zinc | Zinc deficiency | Dermatitis, diarrhea, alopecia, hypogeusia |
| Iodine | Iodine deficiency | Goiter, cretinism (if severe in pregnancy) |
| Selenium | Selenium deficiency | Keshan disease (cardiomyopathy), Kashin-Beck disease |
| Copper | Copper deficiency | Anemia, neutropenia, myelopathy |

## Toxicity

**Fat-Soluble Vitamin Toxicity:**

| Vitamin | Toxicity Level | Manifestations |
|---------|---------------|----------------|
| A | Acute: >100× RDA | Headache, nausea, increased intracranial pressure |
| A | Chronic: >10× RDA | Dry skin, hepatomegaly, hyperostosis, teratogenic |
| D | Chronic: >4× RDA | Hypercalcemia, nephrolithiasis, calcinosis |
| E | >1000 mg/day | Bleeding risk, interacts with vitamin K |
| K | No known toxicity | Can antagonize anticoagulants |

**Mineral Toxicity:**

| Mineral | Toxicity Manifestations |
|---------|------------------------|
| Sodium | Hypertension, fluid overload |
| Calcium | Hypercalcemia, constipation, kidney stones |
| Iron | Hemochromatosis, liver damage, heart failure (acute fatal: 20-60 mg/kg) |
| Zinc | Copper deficiency, nausea, immune dysfunction |
| Selenium | Selenosis (garlic breath, hair loss, neuropathy) |
| Fluoride | Skeletal fluorosis, dental fluorosis |
| Iodine | Hyperthyroidism (Jod-Basedow) or hypothyroidism (Wolff-Chaikoff) |`,
      keyTerms: [
        { term: 'cofactor', definition: 'A non-protein chemical compound that is required for the protein\'s biological activity' },
        { term: 'retinol-binding protein', definition: 'Transport protein that carries vitamin A in the blood; low in liver disease and protein deficiency' },
        { term: 'calcitriol', definition: 'Active form of vitamin D (1,25-dihydroxyvitamin D); increases calcium absorption' },
        { term: 'hepcidin', definition: 'Liver-produced hormone that regulates iron homeostasis by controlling ferroportin degradation' },
        { term: 'transferrin', definition: 'Iron-binding transport protein in blood; saturation reflects iron status' },
        { term: 'megaloblastic anemia', definition: 'Anemia with large, immature red blood cells caused by folate or vitamin B12 deficiency' },
        { term: 'subacute combined degeneration', definition: 'Vitamin B12 deficiency causing demyelination of dorsal columns and lateral corticospinal tracts' },
        { term: 'Wernicke-Korsakoff', definition: 'Neuropsychiatric disorder from thiamine deficiency; Wernicke (acute) + Korsakoff (chronic)' },
      ],
      analogies: [
        'The folate cycle is like a merry-go-round where B12 is the operator that keeps the ride moving - without it, the cycle stops and passengers (homocysteine) pile up.',
        'Hepcidin is like a valve controlling iron release - inflammation closes the valve, causing anemia of chronic disease.',
        'Vitamin D activation is a two-step process: first the liver adds a team, then the kidney adds the star player to create the active hormone.',
      ],
      examples: [
        'Vegetarians develop B12 deficiency after 3-5 years without supplementation due to hepatic stores',
        'Alcoholics develop Wernicke encephalopathy from thiamine deficiency requiring IV thiamine before glucose',
        'Bariatric surgery patients need lifelong iron, B12, calcium, and vitamin D supplementation',
        'Isotretinoin (Accutane) is a vitamin A derivative requiring pregnancy prevention due to teratogenicity',
      ],
      clinicalNotes: 'Always give IV thiamine before glucose in suspected alcohol withdrawal to prevent Wernicke encephalopathy. Vitamin D status is assessed by 25(OH)D levels, not 1,25(OH)2D. Megaloblastic anemia from B12 deficiency can elevate methylmalonic acid (MMA), distinguishing it from folate deficiency.',
    },
    4: {
      level: 4,
      summary: 'Micronutrient disorders require systematic evaluation including dietary assessment, laboratory testing, and targeted repletion. Clinical applications include managing deficiency in malabsorption syndromes, avoiding drug-nutrient interactions, and optimizing micronutrient status in chronic disease.',
      explanation: `## Laboratory Assessment

### Vitamin Status Assessment

**Water-Soluble Vitamins:**

| Vitamin | Best Test | Interpretation |
|---------|-----------|----------------|
| B1 (Thiamine) | Erythrocyte transketolase activity | Low activity = deficiency |
| B6 (Pyridoxine) | Plasma PLP | <20 nmol/L = deficient |
| B9 (Folate) | RBC folate | <140 ng/mL = deficient |
| B12 (Cobalamin) | Serum B12 + MMA + Homocysteine | B12 low + MMA high = true deficiency |
| C (Ascorbate) | Leukocyte ascorbic acid | Gold standard (plasma reflects recent intake) |

**Fat-Soluble Vitamins:**

| Vitamin | Best Test | Interpretation |
|---------|-----------|----------------|
| A | Serum retinol | <20 μg/dL = deficient |
| D | 25-hydroxyvitamin D | <20 ng/mL = deficient, 20-30 = insufficient, >30 = optimal |
| E | Serum α-tocopherol | Adjusted for lipids |
| K | PTH/INR (clinical) | Prolonged INR without liver disease |

### Mineral Status Assessment

\`\`\`
Iron Studies Panel:
  Serum iron: Low in IDA, normal/high in anemia of chronic disease
  TIBC: High in IDA, normal/low in ACD
  Transferrin saturation: <15% = iron deficiency
  Ferritin: <30 ng/mL = iron deficiency (acute phase reactant)
  Reticulocyte count: Low in IDA (inadequate marrow response)

Differential Diagnosis of Microcytic Anemia:
  ├─ Iron deficiency: ↓Ferritin, ↑TIBC, ↑RDW
  ├─ Thalassemia: Normal/↑Ferritin, normal TIBC, ↓RDW
  ├─ Anemia of chronic disease: Normal/↑Ferritin, ↓TIBC
  └─ Sideroblastic anemia: ↑Ferritin, normal TIBC, ringed sideroblasts

Zinc Assessment:
  Plasma zinc: ↓in deficiency (but also ↓in inflammation)
  Urinary zinc: ↑in deficiency (poor retention)
  Alkaline phosphatase: Zinc-dependent enzyme (↓in deficiency)
\`\`\`

## Malabsorption Syndromes

### Specific Micronutrient Deficiencies

**Celiac Disease:**
\`\`\`
Villous atrophy → Reduced absorptive surface

Deficiencies:
  ├─ Iron (duodenum: proximal small bowel)
  ├─ Folate (jejunum: proximal-mid)
  ├─ B12 (terminal ileum: if extensive disease)
  ├─ Fat-soluble vitamins (fat malabsorption)
  ├─ Zinc, magnesium
  └─ Vitamin D (malabsorption + autoimmune effects)

Treatment: Gluten-free diet + repletion of identified deficiencies
\`\`\`

**Bariatric Surgery:**
\`\`\`
Roux-en-Y Gastric Bypass:
  Reduced stomach acid → ↓B12 absorption
  Bypass duodenum/proximal jejunum → ↓Iron, calcium
  Reduced food intake → General micronutrient deficiency

Sleeve Gastrectomy:
  Better iron/B12 absorption than RYGB
  Still at risk for deficiencies

Required Supplementation:
  - Multivitamin: Daily
  - Calcium: 1200-1500 mg/day (citrate better absorbed)
  - Vitamin D: 3000 IU/day (target >30 ng/mL)
  - B12: 350-500 mcg/day (or monthly injections)
  - Iron: If deficient (ferrous sulfate/fumarate)
  - Folate: 400-800 mcg/day
\`\`\`

**Inflammatory Bowel Disease:**
\`\`\`
Crohn Disease (terminal ileum involvement):
  ├─ B12 malabsorption (ileal resection >30cm = permanent deficiency)
  ├─ Fat malabsorption → Fat-soluble vitamin deficiency
  └─ Zinc deficiency (chronic diarrhea)

Ulcerative Colitis:
  ├─ Iron deficiency (chronic blood loss)
  └─ Folate deficiency (sulfasalazine interferes)

Monitoring: q6-12 months depending on disease activity
\`\`\`

## Drug-Nutrient Interactions

### Common Clinically Significant Interactions

\`\`\`
Warfarin + Vitamin K:
  Mechanism: Vitamin K is cofactor for clotting factor activation
  Effect: Vitamin K-rich foods or supplements ↓warfarin effect
  Management: Consistent vitamin K intake, monitor INR

Antibiotics + Vitamin K:
  Mechanism: Gut flora synthesize vitamin K
  Effect: Broad-spectrum antibiotics → ↓vitamin K production
  Clinical: Important if already vitamin K deficient

Metformin + Vitamin B12:
  Mechanism: Alters calcium-dependent B12 absorption in ileum
  Effect: Long-term use → B12 deficiency
  Management: Monitor B12 periodically, supplement if low

Isoniazid + Pyridoxine (B6):
  Mechanism: INH increases B6 excretion
  Effect: B6 deficiency → peripheral neuropathy
  Management: Prophylactic B6 (25-50 mg/day)

Antacids/PPIs + Minerals:
  Mechanism: ↓Gastric acid impairs absorption
  Effect: ↓Iron, calcium, magnesium, B12 absorption
  Management: Separate administration if possible

Methotrexate + Folate:
  Mechanism: MTX inhibits dihydrofolate reductase
  Effect: Folate deficiency
  Management: Folic acid supplementation (1 mg/day)

Tetracyclines + Divalent Cations:
  Mechanism: Chelation in GI tract
  Effect: ↓Tetracycline + ↓Mineral absorption
  Management: Separate administration by 2-3 hours

Orlistat + Fat-Soluble Vitamins:
  Mechanism: Fat malabsorption
  Effect: ↓A, D, E, K absorption
  Management: Take multivitamin 2 hours apart
\`\`\`

## Chronic Disease and Micronutrients

**Diabetes:**
\`\`\`
Deficiencies/excesses:
  ├─ Chromium: Supplementation modestly improves glycemic control
  ├─ Magnesium: ↓in diabetes; may improve insulin sensitivity
  ├─ Zinc: Excess may impair glucose tolerance
  ├─ Vitamin D: Deficiency associated with increased T2DM risk
  └─ B vitamins: Metformin causes B12 deficiency

Management: Periodic screening of B12, vitamin D; avoid high-dose supplements without indication
\`\`\`

**Chronic Kidney Disease:**
\`\`\`
Accumulated:
  ├─ Phosphorus: Hyperphosphatemia → vascular calcification
  └─ Potassium: Hyperkalemia → arrhythmia risk

Deficient:
  ├─ Iron: Anemia of CKD (low EPO + iron deficiency)
  ├─ Vitamin D: ↓1α-hydroxylation → low calcitriol
  └─ Calcium: Hypocalcemia from low vitamin D + hyperphosphatemia

Management:
  - Phosphate binders with meals
  - Potassium restriction
  - IV iron + EPO for anemia
  - Calcitriol or active vitamin D analogs
\`\`\`

**Heart Failure:**
\`\`\`
Loop diuretic use:
  ├─ Thiamine (B1) deficiency: "Wet beriberi" mimics HF exacerbation
  ├─ Magnesium depletion: Arrhythmia risk, digoxin toxicity
  └─ Zinc depletion: Taste changes, poor intake

ACE inhibitors:
  ├─ Zinc deficiency (increased urinary excretion)

Management: Consider thiamine 100 mg daily in chronic loop diuretic users; monitor Mg, K
\`\`\`

## Special Populations

**Pregnancy:**
\`\`\`
Increased Requirements:
  ├─ Folate: 600 mcg DFE (neural tube prevention)
  ├─ Iron: 27 mg (expansion of RBC mass, fetal needs)
  ├─ Iodine: 220 mcg (fetal brain development)
  ├─ Vitamin D: 600 IU (fetal bone development)
  ├─ Choline: 450 mg (fetal brain development, often in prenatal vitamin)
  └─ DHA: 200-300 mg (fetal neurodevelopment)

Recommended:
  - Prenatal vitamin with folic acid (start 1-3 months pre-conception)
  - Screen for anemia each trimester
  - Vitamin D level if at risk
  - No high-dose vitamin A (>3000 mcg RA) - teratogenic
\`\`\`

**Elderly:**
\`\`\`
At Risk For:
  ├─ B12: Atrophic gastritis → ↓acid → ↓B12 absorption
  ├─ Vitamin D: Reduced skin synthesis, less sun exposure
  ├─ Calcium: Malabsorption, medication interactions
  └─ Zinc: Poor intake, malabsorption

Management:
  - B12: Supplement (crystalline B12 better absorbed than protein-bound)
  - Vitamin D: 800-1000 IU daily
  - Calcium: 1200 mg daily (diet + supplement)
  - Screen for deficiencies in high-risk patients
\`\`\``,
      keyTerms: [
        { term: 'TIBC', definition: 'Total Iron Binding Capacity; measure of transferrin availability; elevated in iron deficiency' },
        { term: 'transferrin saturation', definition: 'Percentage of iron-binding sites on transferrin that are occupied; <15% indicates iron deficiency' },
        { term: 'MMA', definition: 'Methylmalonic acid; accumulates in B12 deficiency; distinguishes B12 from folate deficiency' },
        { term: 'anemia of chronic disease', definition: 'Anemia in inflammatory conditions characterized by low serum iron, low TIBC, and normal/high ferritin' },
        { term: 'acrodermatitis enteropathica', definition: 'Rare genetic disorder of zinc absorption causing periorificial and acral dermatitis' },
        { term: 'hypervitaminosis', definition: 'Condition of excessive vitamin accumulation causing toxic effects' },
      ],
      analogies: [
        'Ferritin is like a warehouse - it shows how much inventory (iron) you have in storage, not just what\'s on the shelves (in the blood).',
        'The MMA test is like tracking a package that wasn\'t delivered - high MMA means B12 deficiency because the "delivery truck" isn\'t working.',
        'CKD bone-mineral disorder is like a three-way tug-of-war between calcium, phosphorus, and PTH that no one wins.',
      ],
      examples: [
        'Pernicious anemia: Autoimmune destruction of parietal cells → no intrinsic factor → B12 malabsorption → lifelong B12 injections',
        'Bariatric surgery patient: B12 deficiency despite normal intake due to bypassed absorption site',
        'Heart failure on loop diuretics: Shoshin beriberi from thiamine deficiency resolved with IV thiamine',
        'Isoniazid therapy for TB: Prophylactic pyridoxine prevents neuropathy',
      ],
      clinicalNotes: 'Always check methylmalonic acid (MMA) when B12 is borderline low or normal but clinical suspicion for deficiency exists. Ferritin is an acute phase reactant and can be falsely elevated in inflammation; use transferrin saturation to assess iron status in inflammatory conditions. In CKD, use calcitriol or paricalcitol instead of cholecalciferol since the kidney cannot perform 1α-hydroxylation.',
    },
    5: {
      level: 5,
      summary: 'Advanced micronutrition encompasses genetic polymorphisms affecting requirements, functional testing for intracellular status, micronutrient-based therapeutics, and emerging applications in genomics and metabolomics for personalized nutrition approaches.',
      explanation: `## Genetic Variations in Micronutrient Metabolism

### Vitamin Transport and Metabolism Gene Variants

\`\`\`
Vitamin D:
  VDR (Vitamin D Receptor) polymorphisms:
    - Fok1, Bsm1, Taq1, Apa1 variants
    - Affect bone density, cancer risk, autoimmune disease susceptibility
    - Fok1 "f" allele: Less efficient transcription
    - Explain interindividual variation in vitamin D requirements

  CYP27B1 (1α-hydroxylase):
    - Loss-of-function: Vitamin D-dependent rickets type 1
    - Variants affect conversion to calcitriol

  CYP24A1 (24-hydroxylase):
    - Gain-of-function: Increased catabolism → functional deficiency
    - Idiopathic infantile hypercalcemia

Vitamin B12/Folate:
  MTHFR (Methylenetetrahydrofolate reductase):
    - C677T: Thermolabile variant, ~30-70% activity
    - TT genotype: ↑Homocysteine, ↓5-MTHF
    - Implications: Neural tube risk, CVD, depression
    - Management: Active folate (5-MTHF) supplementation

  TCN2 (Transcobalamin II):
    - P259R variant: Reduced cellular B12 delivery
    - Functional deficiency despite normal serum B12

  MTRR (Methionine Synthase Reductase):
    - A66G: Impaired regeneration of active B12
    - Interacts with MTHFR variants

Vitamin A:
  BCMO1 (Beta-carotene 15,15\'-monooxygenase):
    - R267S, T170M variants: Reduced conversion
    - Affects response to plant-based provitamin A

Iron:
  HFE (Hereditary Hemochromatosis):
    - C282Y: 85% of HH cases (homozygous)
    - H63D: Milder form, compound heterozygote
    - Impaired hepcidin regulation → iron overload

  TMPRSS6 (Matriptase-2):
    - Variants cause iron-refractory iron deficiency anemia (IRIDA)
    - Inappropriately high hepcidin despite iron deficiency
\`\`\`

## Functional Micronutrient Assessment

### Beyond Serum Levels

**Intracellular Assessment:**
\`\`\`
Spectrophotometric mineral analysis:
  - RBC magnesium vs serum magnesium (intracellular vs extracellular)
  - RBC zinc: Better reflects tissue status
  - Lymphocyte vitamins: Longer-term status vs serum

Limitations:
  - Limited standardization
  - Variable correlation with clinical outcomes
  - Insurance coverage issues
  - Clinical utility not established for many

Best applications:
  - Symptomatic patients with normal serum levels
  - Monitoring complex deficiencies
  - Research settings
\`\`\`

**Organix Testing (Urinary Organic Acids):**

\`\`\`
B-vitamin functional markers:
  ├─ Methylmalonate: B12 deficiency marker
  ├─ Xanthurenate: B6 deficiency marker
  ├─ β-Hydroxyisovalerate: Biotin deficiency marker
  ├─ Pyridoxate: B6 insufficiency
  ├─ FIGLU: Folate deficiency (impaired histidine metabolism)
  └─ Lactate/pyruvate ratio: Thiamine/B2 status

Clinical utility:
  - Detect functional deficiency before serum changes
  - Guide targeted repletion
  - Monitor treatment response

Cost/availability considerations:
  - Out-of-pocket expense
  - Variable insurance coverage
  - Requires interpretation expertise
\`\`\`

## Micronutrient-Based Therapeutics

### High-Dose Therapies

\`\`\`
Thiamine (B1):
  - Wernicke-Korsakoff: 500 mg IV TID × 3 days
  - Refractory HF: 100-300 mg daily (Shoshin beriberi)
  - Chronic alcoholism: 100 mg daily prophylaxis

Pyridoxine (B6):
  - INH neuropathy prophylaxis: 25-50 mg daily
  - Pyridoxine-dependent epilepsy: 100-500 mg/day
  - Morning sickness: 10-25 mg TID (do not exceed 100 mg/day in pregnancy)
  - Toxicity: >200 mg/day long-term → neuropathy

Niacin (B3):
  - Dyslipidemia: Immediate-release 1.5-3 g/day
  - Mechanism: Inhibits lipolysis, reduces VLDL synthesis
  - Flushing: Mechanism: PGD2 release; pre-treat with aspirin
  - Contra: DM, gout, peptic ulcer disease, liver disease

B12 (Cobalamin):
  - Pernicious anemia: 1000 mcg IM monthly (or high-dose oral 1000-2000 mcg daily)
  - Neuropathy: Initial daily IM loading, then maintenance
  - Cyanocobalamin vs methylcobalamin: Methyl form may be better absorbed

Vitamin C:
  - Scurvy: 100-300 mg TID × 1-2 weeks
  - Adjunct wound healing: 500-1000 mg daily
  - Upper limit: 2000 mg/day (osmotic diarrhea, oxalate stones)

Vitamin D:
  - Deficiency treatment: 6000-10,000 IU daily × 6-12 weeks
  - Maintenance: 1500-2000 IU daily
  - Target level: 40-60 ng/mL (controversial)
  - Upper limit: 4000 IU daily (but higher doses used short-term)

Active Vitamin D:
  - Calcitriol: 0.25-0.5 mcg daily (CKD, hypoparathyroidism)
  - Paricalcitol: CKD with secondary hyperparathyroidism
  - Do not use 25(OH)D levels to monitor (use PTH, Ca, PO4)
\`\`\`

### Intravenous Micronutrient Therapy

**Myers' Cocktail:**
\`\`\`
Components:
  - Magnesium, calcium, B-complex, vitamin C
  - Variations: Add glutathione, trace minerals

Proposed indications:
  - Fibromyalgia, chronic fatigue
  - Migraine, acute asthma
  - Athletic recovery

Evidence:
  - Limited high-quality studies
  - Small trials show benefit in fibromyalgia, asthma
  - Placebo-controlled studies lacking

Safety:
  - Generally safe when properly formulated
  - Calcium extravasation → tissue necrosis
  - Anaphylaxis rare (possible with preservatives)
\`\`\`

**High-Dose IV Vitamin C:**
\`\`\`
Pharmacologic dosing: 1.5-2 g/kg (~100-150 g)

Proposed mechanisms:
  - Pro-oxidant in tumor microenvironment (H2O2 generation)
  - Immune modulation
  - Collagen synthesis support

Current evidence:
  - Phase I trials in cancer: Safe, improved QOL
  - Ongoing phase II/III trials
  - Not standard of care

Contra:
  - G6PD deficiency (hemolysis risk)
  - CKD (oxalate nephropathy)
  - Iron overload (enhanced oxidative stress)
\`\`\`

## Micronutrients in Mental Health

\`\`\`
Evidence-based applications:
  ├─ B12/Folate: Adjunct in depression (especially with elevated homocysteine)
  ├─ Vitamin D: Supplementation for seasonal affective disorder
  ├─ Zinc: Adjunct in major depression, augmentation of antidepressants
  └─ Magnesium: Adjunct in anxiety, depression (mixed evidence)

Emerging research:
  - N-acetylcysteine (NAC): Glutathione precursor
    - Obsessive-compulsive disorder
    - Trichotillomania
    - Bipolar depression

  - Pyridoxal-5-phosphate (active B6):
    - Premenstrual syndrome
    - Carpal tunnel syndrome

  - Inositol (vitamin B8):
    - Panic disorder
    - PCOS (insulin sensitization)

Considerations:
  - Usually adjunctive, not monotherapy
  - Effects modest compared to pharmaceuticals
  - Optimal dosing unclear
  - Long-term safety data limited
\`\`\`

## Precision Micronutrition

\`\`\`
Current capabilities:
  - Genetic testing for key polymorphisms (MTHFR, VDR, HFE)
  - Organic acid testing for functional status
  - Targeted supplementation based on individual needs

Future directions:
  - Multi-omic integration (genomics + metabolomics + microbiome)
  - AI-driven dietary recommendations
  - Wearable-based nutritional status monitoring
  - Personalized nutrient timing optimization

Limitations:
  - Most variants have small effect sizes
  - Gene-environment interactions poorly understood
  - Clinical trials lacking for most genotype-guided interventions
  - Direct-to-consumer testing quality variable
  - Cost-effectiveness not established

Clinical approach:
  - Use validated tests when indicated
  - Focus on variants with clear clinical actionability
  - Start with nutrition-first approach
  - Reserve targeted testing for complex cases
  - Avoid over-testing and overtreatment
\`\`\``,
      keyTerms: [
        { term: 'MTHFR', definition: 'Methylenetetrahydrofolate reductase; key enzyme in folate metabolism; C677T polymorphism affects enzyme activity and homocysteine levels' },
        { term: 'functional deficiency', definition: 'Inadequate cellular micronutrient activity despite normal serum levels' },
        { term: 'organic acid testing', definition: 'Urinary measurement of organic acids that reflect B-vitamin-dependent metabolic pathway function' },
        { term: 'Shoshin beriberi', definition: 'Acute fulminant thiamine deficiency presenting as high-output heart failure with lactic acidosis' },
        { term: 'INH', definition: 'Isoniazid; anti-tubercular medication that increases B6 excretion, requiring prophylactic supplementation' },
        { term: 'pharmacologic dosing', definition: 'Administration of nutrients at doses exceeding nutritional needs for therapeutic effects' },
        { term: 'FIGLU', definition: 'Formiminoglutamic acid; urinary marker of folate deficiency that accumulates when histidine metabolism is impaired' },
      ],
      analogies: [
        'Functional testing is like checking the engine performance rather than just the oil level - serum levels show what\'s present, functional tests show what\'s working.',
        'MTHFR polymorphism is like having a slightly less efficient factory line - it still produces the product, but may need more raw materials or a different approach.',
        'High-dose IV vitamin therapy is like jump-starting a car - sometimes you need a more direct delivery method when oral routes aren\'t sufficient.',
      ],
      examples: [
        'MTHFR C677T homozygous: Elevated homocysteine, requiring active 5-MTHF rather than folic acid',
        'Hereditary hemochromatosis (HFE C282Y homozygous): Therapeutic phlebotomy to reduce iron stores',
        'Wernicke encephalopathy treatment: 500 mg IV thiamine before glucose to prevent precipitating irreversible brain damage',
        'IV vitamin C in clinical trials: Doses of 1.5 g/kg achieving millimolar plasma concentrations for potential anticancer effects',
      ],
      clinicalNotes: `Clinical Pearls:

1. **MTHFR variants:** Consider 5-MTHF (active folate) 400-800 mcg daily for C677T carriers, especially with elevated homocysteine or pregnancy

2. **B12 deficiency with normal levels:** Check MMA and homocysteine; neurologic symptoms may require initial IM loading despite normal serum

3. **Vitamin D dosing:** 10,000 IU/day for 8-12 weeks to replete, then maintenance 1500-2000 IU daily; check 25(OH)D at 3-4 weeks

4. **Alcohol use disorder:** Prophylactic thiamine 100 mg daily; consider higher dose in malnutrition or suspected deficiency

5. **Iron malabsorption:** Consider IV iron (iron dextran, ferric carboxymaltose) when oral fails or malabsorption present

6. **Bariatric surgery:** Lifelong micronutrient monitoring: B12, iron, folate, vitamin D, calcium, zinc at least annually`,
    },
  },

  media: [
    {
      id: 'vitamin-classification',
      type: 'diagram',
      filename: 'vitamin-classification.svg',
      title: 'Vitamin Classification',
      description: 'Fat-soluble vs water-soluble vitamins with functions',
    },
    {
      id: 'iron-metabolism',
      type: 'diagram',
      filename: 'iron-metabolism.svg',
      title: 'Iron Metabolism Pathways',
      description: 'Iron absorption, transport, storage, and regulation',
    },
    {
      id: 'deficiency-manifestations',
      type: 'diagram',
      filename: 'deficiency-manifestations.svg',
      title: 'Micronutrient Deficiency Signs',
      description: 'Physical signs of vitamin and mineral deficiencies',
    },
  ],

  citations: [
    {
      id: 'dietary-guidelines-americans',
      type: 'article',
      title: 'Dietary Guidelines for Americans, 2020-2025',
      authors: ['U.S. Department of Agriculture', 'U.S. Department of Health and Human Services'],
      source: 'USDA/HHS',
      url: 'https://www.dietaryguidelines.gov',
    },
    {
      id: 'wacker-weissman-vitamin-d',
      type: 'article',
      title: 'Vitamin D: Effects on Skeletal and Extraskeletal Health and the Need for Supplementation',
      authors: ['M Wacker', 'MF Holick'],
      source: 'Nutrients',
      url: 'https://doi.org/10.3390/nu60104472',
    },
    {
      id: 'allen-vitamin-b12',
      type: 'article',
      title: 'Cobalamin (Vitamin B-12)',
      authors: ['LH Allen'],
      source: 'Advances in Nutrition',
    },
  ],

  crossReferences: [
    { targetId: 'nutrition-macronutrients', targetType: 'topic', relationship: 'sibling', label: 'Macronutrients' },
    { targetId: 'nutrition-hydration', targetType: 'topic', relationship: 'sibling', label: 'Hydration' },
    { targetId: 'gastrointestinal-celiac', targetType: 'condition', relationship: 'related', label: 'Celiac Disease' },
    { targetId: 'hematologic-anemia', targetType: 'condition', relationship: 'related', label: 'Anemia' },
  ],

  tags: {
    systems: ['gastrointestinal', 'hematologic', 'endocrine'],
    topics: ['nutrition', 'biochemistry', 'preventive-medicine'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pediatrics', 'family-medicine'],
    },
  },

  createdAt: '2026-01-26T00:00:00.000Z',
  updatedAt: '2026-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default micronutrients;
