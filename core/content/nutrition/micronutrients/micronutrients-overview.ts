import type { EducationalContent } from '../../types';

/**
 * Micronutrients Overview
 *
 * Comprehensive guide to vitamins and minerals, covering fat-soluble vitamins (A, D, E, K),
 * water-soluble vitamins (B-complex, C), major minerals, trace minerals, deficiency states,
 * toxicity risks, and clinical applications.
 */

export const micronutrientsOverview: EducationalContent = {
  id: 'nutrition-micronutrients-overview',
  type: 'topic',
  name: 'Micronutrients: Vitamins and Minerals',
  nameEs: 'Micronutrientes: Vitaminas y Minerales',
  alternateNames: ['Vitamins', 'Minerals', 'Essential Micronutrients', 'Trace Elements'],

  levels: {
    1: {
      level: 1,
      summary: 'Micronutrients are tiny but mighty vitamins and minerals your body needs in small amounts to stay healthy, fight germs, build strong bones, and help you see, think, and grow.',
      explanation: `Micronutrients are the "small" nutrients (micro means tiny!) that your body needs in much smaller amounts than macronutrients, but they're super important! Even though you only need a pinch of each one, without them your body can't work properly.

**VITAMINS - The Helper Nutrients**

Vitamins are special nutrients that help your body do specific jobs. There are 13 different vitamins!

**Fat-Soluble Vitamins (A, D, E, K)** - Stored in Your Body's Fat:

1. **Vitamin A** - The Vision Vitamin
   - Helps you see in the dark and keeps your eyes healthy
   - Found in: Carrots, sweet potatoes, spinach, milk, eggs
   - Fun fact: Carrots really do help you see better!

2. **Vitamin D** - The Sunshine Vitamin
   - Builds strong bones and teeth
   - Your skin makes it when you play in the sun!
   - Found in: Sunlight, milk, fish, eggs

3. **Vitamin E** - The Protector Vitamin
   - Protects your cells from damage
   - Found in: Nuts, seeds, vegetable oils, spinach

4. **Vitamin K** - The Clotting Vitamin
   - Helps your blood clot so cuts stop bleeding
   - Found in: Leafy greens like spinach, kale, broccoli

**Water-Soluble Vitamins (B vitamins and C)** - Don't Get Stored Much:

5. **B Vitamins** - The Energy Helpers (there are 8 different B vitamins!)
   - Turn your food into energy
   - Help your brain and nerves work
   - Found in: Meat, eggs, milk, whole grains, beans

6. **Vitamin C** - The Healing Vitamin
   - Helps cuts and scrapes heal
   - Fights off germs when you're sick
   - Found in: Oranges, strawberries, peppers, broccoli

**MINERALS - The Building Blocks**

Minerals come from rocks and soil! Plants absorb them, and you get them by eating plants and animals.

**Major Minerals** (Need More Than a Pinch):

1. **Calcium** - Makes bones and teeth strong
   - Found in: Milk, cheese, yogurt, broccoli

2. **Iron** - Carries oxygen in your blood
   - Found in: Red meat, beans, spinach, fortified cereals

3. **Magnesium** - Helps muscles and nerves work
   - Found in: Nuts, seeds, whole grains, bananas

4. **Potassium** - Keeps your heart beating right
   - Found in: Bananas, potatoes, beans, yogurt

**Trace Minerals** (Need Just a Tiny Amount):

5. **Zinc** - Helps you heal and grow
   - Found in: Meat, shellfish, beans, nuts

6. **Iodine** - Helps your body use energy
   - Found in: Iodized salt, seafood, dairy

**Why Eating Colorful Foods Matters:**
- Red/Orange: Vitamin A (carrots, sweet potatoes, tomatoes)
- Green: Vitamins K, C, folate, iron (spinach, broccoli, kale)
- Yellow: Vitamin C (citrus fruits, peppers)
- Purple/Blue: Antioxidants (berries, grapes)

**Spanish Translation:**
Los micronutrientes son vitaminas y minerales pequeños pero poderosos que tu cuerpo necesita en pequeñas cantidades para mantenerse saludable, combatir gérmenes, construir huesos fuertes, y ayudarte a ver, pensar y crecer.`,
      keyTerms: [
        {
          term: 'micronutrients',
          definition: 'Tiny nutrients your body needs in small amounts but are very important - vitamins and minerals',
          etymology: 'Micro means "small" - you only need small amounts compared to macronutrients!'
        },
        {
          term: 'vitamins',
          definition: 'Special nutrients that help your body work properly; you need 13 different vitamins',
          etymology: 'From "vita" meaning life - vitamins are essential for life!'
        },
        {
          term: 'minerals',
          definition: 'Nutrients that come from rocks and soil; help build bones, carry oxygen, and keep your body working',
          relatedTerms: ['calcium', 'iron', 'zinc']
        },
        {
          term: 'deficiency',
          definition: 'When your body doesn\'t have enough of a vitamin or mineral and you can get sick',
          relatedTerms: ['scurvy', 'anemia']
        }
      ],
      analogies: [
        'Micronutrients are like the oil in a machine - you only need a little bit, but without it nothing works right!',
        'Fat-soluble vitamins are like a squirrel storing nuts for winter - your body saves them. Water-soluble vitamins are like water through a strainer - your body uses what it needs and the rest leaves in your pee.',
        'Minerals are like the raw materials in a construction site - calcium builds the frame (bones), iron carries supplies (oxygen), and zinc fixes broken parts (healing).'
      ],
      examples: [
        'Sailors on long ocean voyages used to get scurvy (bleeding gums, weakness) because they had no fresh fruits with vitamin C. When they brought limes on ships, scurvy went away!',
        'If you don\'t get enough vitamin D, your bones can become soft and bendy - that\'s why milk has vitamin D added to it.',
        'Night blindness (trouble seeing in the dark) can be caused by not eating enough vitamin A - that\'s why your parents tell you to eat your carrots!'
      ],
      patientCounselingPoints: [
        'Eat a rainbow of colorful fruits and vegetables every day to get all your vitamins and minerals',
        'Drink milk or eat dairy products for calcium and vitamin D to build strong bones',
        'Play outside in the sunshine for 10-15 minutes to help your body make vitamin D',
        'If you see a cut bleeding for a long time, you might need more vitamin K from green vegetables'
      ]
    },

    2: {
      level: 2,
      summary: 'Micronutrients include 13 essential vitamins (4 fat-soluble: A, D, E, K; 9 water-soluble: B-complex, C) and 15+ essential minerals (major and trace elements) required in milligram or microgram amounts for enzymatic, structural, and regulatory functions.',
      explanation: `Micronutrients are organic (vitamins) and inorganic (minerals) compounds required in small quantities (milligrams or micrograms) with specific biochemical functions.

**FAT-SOLUBLE VITAMINS (A, D, E, K)**

*Characteristics:*
- Absorbed with dietary fat via micelles
- Stored in liver and adipose tissue
- Excretion is slow; toxicity possible with excessive intake
- Don't need daily consumption (body stores last longer)

**Vitamin A (Retinoids, Carotenoids)**
- Active forms: Retinol, retinal, retinoic acid
- Provitamin: Beta-carotene (from plants, converted to retinol)
- Functions: Vision (rhodopsin), cell differentiation, immune function, reproduction
- Sources: Liver, dairy, eggs (retinol); carrots, sweet potatoes, spinach (carotenoids)
- RDA: 900 mcg RAE (men), 700 mcg RAE (women)
- Deficiency: Night blindness, xerophthalmia, impaired immunity
- Toxicity: Teratogenic, hepatotoxic, bone abnormalities

**Vitamin D (Calciferols)**
- Forms: D2 (ergocalciferol, plant), D3 (cholecalciferol, animal/skin synthesis)
- Functions: Calcium/phosphorus absorption, bone health, immune modulation
- Sources: Sunlight (skin synthesis), fatty fish, fortified milk, eggs
- RDA: 600 IU (15 mcg); 800 IU if >70 years
- Deficiency: Rickets (children), osteomalacia (adults), muscle weakness
- Toxicity: Hypercalcemia, kidney stones, soft tissue calcification

**Vitamin E (Tocopherols, Tocotrienols)**
- Primary form: α-tocopherol
- Functions: Lipid antioxidant, membrane protection, immune function
- Sources: Vegetable oils, nuts, seeds, wheat germ, leafy greens
- RDA: 15 mg (22.4 IU) α-tocopherol
- Deficiency: Rare; hemolytic anemia, neurological problems
- Toxicity: Increased bleeding risk, possible increased mortality

**Vitamin K (Phylloquinone K1, Menaquinones K2)**
- Functions: Blood coagulation (factors II, VII, IX, X), bone metabolism (osteocalcin)
- Sources: Leafy greens (K1), fermented foods/gut bacteria (K2)
- AI: 120 mcg (men), 90 mcg (women)
- Deficiency: Bleeding, hemorrhagic disease of newborn
- Toxicity: Minimal; antagonizes warfarin

**WATER-SOLUBLE VITAMINS (B-COMPLEX, C)**

*Characteristics:*
- Readily absorbed, not extensively stored
- Excess typically excreted in urine
- Need regular dietary intake
- Generally low toxicity risk

**B Vitamins (8 vitamins) - Coenzymes in Energy Metabolism:**

1. **B1 (Thiamine)** - TPP coenzyme
   - Functions: Carbohydrate metabolism, nerve function
   - Sources: Pork, whole grains, legumes, fortified cereals
   - RDA: 1.2 mg (men), 1.1 mg (women)
   - Deficiency: Beriberi, Wernicke-Korsakoff syndrome

2. **B2 (Riboflavin)** - FAD/FMN coenzymes
   - Functions: Energy metabolism, antioxidant regeneration
   - Sources: Dairy, eggs, meat, almonds, fortified cereals
   - RDA: 1.3 mg (men), 1.1 mg (women)
   - Deficiency: Cheilosis, glossitis, photophobia

3. **B3 (Niacin)** - NAD+/NADP+ coenzymes
   - Functions: Energy metabolism, DNA repair, lipid regulation
   - Sources: Poultry, fish, beef, peanuts, fortified grains
   - RDA: 16 mg NE (men), 14 mg NE (women)
   - Deficiency: Pellagra (4 D's: dermatitis, diarrhea, dementia, death)
   - Toxicity: Flushing, hepatotoxicity at pharmacological doses

4. **B5 (Pantothenic Acid)** - Coenzyme A precursor
   - Functions: Fatty acid synthesis, energy metabolism
   - Sources: Widespread in foods
   - AI: 5 mg
   - Deficiency: Rare

5. **B6 (Pyridoxine)** - PLP coenzyme
   - Functions: Amino acid metabolism, neurotransmitter synthesis, hemoglobin
   - Sources: Poultry, fish, potatoes, bananas, chickpeas
   - RDA: 1.3 mg (adults 19-50)
   - Deficiency: Peripheral neuropathy, microcytic anemia
   - Toxicity: Sensory neuropathy at high doses (>200 mg)

6. **B7 (Biotin)** - Carboxylase coenzyme
   - Functions: Fatty acid synthesis, gluconeogenesis, amino acid catabolism
   - Sources: Eggs (cooked), liver, nuts, seeds
   - AI: 30 mcg
   - Deficiency: Dermatitis, alopecia (rare)

7. **B9 (Folate/Folic Acid)** - THF coenzyme
   - Functions: DNA/RNA synthesis, cell division, homocysteine metabolism
   - Sources: Dark leafy greens, legumes, fortified grains, liver
   - RDA: 400 mcg DFE (600 in pregnancy)
   - Deficiency: Megaloblastic anemia, neural tube defects
   - Toxicity: May mask B12 deficiency

8. **B12 (Cobalamin)** - Methylcobalamin, adenosylcobalamin
   - Functions: Myelin synthesis, DNA synthesis, methionine cycle
   - Sources: Meat, fish, dairy, eggs, fortified foods
   - RDA: 2.4 mcg
   - Deficiency: Megaloblastic anemia, subacute combined degeneration
   - Requires intrinsic factor for absorption

**Vitamin C (Ascorbic Acid)**
- Functions: Collagen synthesis, antioxidant, iron absorption, immune function
- Sources: Citrus, berries, peppers, broccoli, tomatoes
- RDA: 90 mg (men), 75 mg (women); +35 mg for smokers
- Deficiency: Scurvy (bleeding gums, poor wound healing)
- Toxicity: GI distress, kidney stones (oxalate)

**MINERALS**

**Major Minerals (>100 mg/day requirement):**

1. **Calcium** - Bone/teeth structure, muscle contraction, nerve signaling
   - RDA: 1000-1200 mg; Sources: Dairy, fortified plant milks, sardines, kale

2. **Phosphorus** - Bone/teeth, ATP, DNA/RNA, acid-base balance
   - RDA: 700 mg; Sources: Widespread in protein foods

3. **Magnesium** - 300+ enzymatic reactions, muscle/nerve function
   - RDA: 420 mg (men), 320 mg (women); Sources: Nuts, seeds, whole grains, leafy greens

4. **Sodium** - Fluid balance, nerve impulse, nutrient absorption
   - AI: 1500 mg; UL: 2300 mg; Sources: Salt, processed foods

5. **Potassium** - Membrane potential, cardiac rhythm, blood pressure
   - AI: 3400 mg (men), 2600 mg (women); Sources: Bananas, potatoes, beans, yogurt

6. **Chloride** - Gastric acid, fluid balance
   - AI: 2300 mg; Sources: Salt

**Trace Minerals (<100 mg/day requirement):**

1. **Iron** - Hemoglobin, myoglobin, electron transport
   - RDA: 8 mg (men), 18 mg (women); Sources: Red meat, beans, fortified cereals

2. **Zinc** - 300+ enzymes, immune function, wound healing
   - RDA: 11 mg (men), 8 mg (women); Sources: Oysters, meat, beans, nuts

3. **Iodine** - Thyroid hormone synthesis
   - RDA: 150 mcg; Sources: Iodized salt, seafood, dairy

4. **Selenium** - Selenoproteins (antioxidant), thyroid metabolism
   - RDA: 55 mcg; Sources: Brazil nuts, seafood, organ meats

5. **Copper** - Iron metabolism, collagen, antioxidant enzymes
   - RDA: 900 mcg; Sources: Shellfish, nuts, seeds, organ meats

6. **Manganese** - Antioxidant, bone formation, metabolism
   - AI: 2.3 mg (men), 1.8 mg (women); Sources: Nuts, whole grains, tea

7. **Fluoride** - Tooth/bone mineralization
   - AI: 4 mg (men), 3 mg (women); Sources: Fluoridated water, tea

8. **Chromium** - Insulin potentiation (proposed)
   - AI: 35 mcg (men), 25 mcg (women); Sources: Broccoli, whole grains, meat

9. **Molybdenum** - Enzyme cofactor
   - RDA: 45 mcg; Sources: Legumes, grains, nuts

**Spanish Translation:**
Los micronutrientes incluyen 13 vitaminas esenciales (4 liposolubles: A, D, E, K; 9 hidrosolubles: complejo B, C) y más de 15 minerales esenciales (mayores y oligoelementos) requeridos en cantidades de miligramos o microgramos para funciones enzimáticas, estructurales y reguladoras.`,
      keyTerms: [
        {
          term: 'fat-soluble vitamins',
          definition: 'Vitamins A, D, E, K that dissolve in fat, are stored in body tissues, and can accumulate to toxic levels'
        },
        {
          term: 'water-soluble vitamins',
          definition: 'B-complex vitamins and vitamin C that dissolve in water, are not extensively stored, and require regular intake'
        },
        {
          term: 'RAE (Retinol Activity Equivalents)',
          definition: 'Unit measuring vitamin A activity: 1 mcg RAE = 1 mcg retinol = 12 mcg beta-carotene',
          pronunciation: 'R-A-E'
        },
        {
          term: 'DFE (Dietary Folate Equivalents)',
          definition: 'Unit measuring folate activity accounting for higher bioavailability of folic acid: 1 mcg DFE = 1 mcg food folate = 0.6 mcg folic acid',
          pronunciation: 'D-F-E'
        }
      ],
      analogies: [
        'Fat-soluble vitamins are like money in a savings account - your body stores them for later use. Water-soluble vitamins are like cash you spend daily - use it or lose it.',
        'Minerals are the raw materials: calcium is the concrete for your bones, iron is the delivery truck for oxygen, and zinc is the construction crew that repairs damage.'
      ],
      examples: [
        'Taking vitamin A supplements during pregnancy can cause birth defects - too much of a fat-soluble vitamin is dangerous',
        'B12 deficiency can take years to develop because the liver stores a 3-5 year supply',
        'Just 1-2 Brazil nuts per day provides the full RDA for selenium'
      ],
      clinicalNotes: 'Adequate Intake (AI) used when RDA cannot be determined; Tolerable Upper Intake Level (UL) is maximum daily intake unlikely to cause adverse effects. Fat malabsorption conditions (celiac, Crohn\'s, cystic fibrosis) increase risk of fat-soluble vitamin deficiencies.'
    },

    3: {
      level: 3,
      summary: 'Micronutrient biochemistry involves specific absorption mechanisms, transport proteins, storage compartments, and cellular functions as enzyme cofactors, antioxidants, structural components, and signaling molecules, with characteristic deficiency and toxicity syndromes.',
      explanation: `**VITAMIN ABSORPTION AND METABOLISM**

**Fat-Soluble Vitamin Absorption:**
1. Dietary fat → bile salts emulsify → micelle formation
2. Vitamins A, D, E, K enter micelles → passive diffusion into enterocytes
3. Incorporation into chylomicrons → lymphatic system → bloodstream
4. Liver uptake and storage (stellate cells for A; hepatocytes for D, E, K)
5. Transport: Retinol-binding protein (RBP) for A; lipoproteins for E; vitamin K-dependent proteins

**Vitamin A Detailed Metabolism:**
- Retinyl esters → retinol (in enterocytes) → re-esterified → chylomicrons
- Liver storage: Retinyl palmitate in stellate cells (90% of body vitamin A)
- Mobilization: Retinol + RBP + transthyretin → circulation
- Target tissues: Retinol → retinal (vision) or retinoic acid (gene regulation)
- Rhodopsin cycle: 11-cis-retinal + opsin → rhodopsin; light → all-trans-retinal → signal cascade
- Gene regulation: Retinoic acid binds RAR/RXR nuclear receptors → transcription

**Vitamin D Activation Pathway:**
1. Skin: 7-dehydrocholesterol + UV-B → pre-D3 → cholecalciferol (D3)
2. Liver: 25-hydroxylase → 25(OH)D (calcidiol; storage form; measured for status)
3. Kidney: 1α-hydroxylase → 1,25(OH)2D (calcitriol; active hormone)
4. Regulation: PTH ↑ 1α-hydroxylase; high Ca2+/PO4 ↑ 24-hydroxylase (inactivation)
5. Actions: Binds VDR → increases intestinal Ca2+/PO4 absorption, bone resorption, renal Ca2+ reabsorption

**Vitamin K Mechanism:**
- Cofactor for γ-glutamyl carboxylase
- Carboxylates glutamate residues → γ-carboxyglutamate (Gla)
- Gla domains create Ca2+-binding sites essential for coagulation factor function
- Vitamin K cycle: Quinone → hydroquinone (active) → epoxide → quinone (recycled by VKORC1)
- Warfarin inhibits VKORC1 → depletes functional vitamin K

**Water-Soluble Vitamin Absorption:**
- Most: Specific Na+-coupled active transporters in small intestine
- B12 unique: Requires intrinsic factor (IF) from parietal cells → IF-B12 complex → ileal receptor (cubilin) → absorption

**B Vitamin Coenzyme Functions:**

*B1 (Thiamine) as TPP (Thiamine Pyrophosphate):*
- Pyruvate dehydrogenase: Pyruvate → acetyl-CoA (glycolysis to TCA entry)
- α-ketoglutarate dehydrogenase: TCA cycle
- Transketolase: Pentose phosphate pathway
- Branched-chain α-keto acid dehydrogenase: BCAA catabolism

*B2 (Riboflavin) as FAD/FMN:*
- Electron transport chain: Complex I, II
- Fatty acid β-oxidation
- Glutathione reductase: Regenerates reduced glutathione (antioxidant)

*B3 (Niacin) as NAD+/NADP+:*
- NAD+: Glycolysis, TCA cycle, β-oxidation (oxidized form)
- NADH: Electron transport chain (reduced form)
- NADP+: Fatty acid synthesis, pentose phosphate pathway
- PARP: DNA repair, cell signaling

*B6 (Pyridoxine) as PLP (Pyridoxal Phosphate):*
- Transamination: Amino acid ↔ α-keto acid
- Decarboxylation: Amino acids → neurotransmitters (serotonin, dopamine, GABA, histamine)
- Glycogen phosphorylase: Glycogenolysis
- δ-ALA synthase: Heme synthesis (rate-limiting)

*B9 (Folate) as THF (Tetrahydrofolate):*
- One-carbon metabolism: Transfers methyl, formyl, methylene groups
- dTMP synthesis: dUMP + N5,N10-methylene-THF → dTMP (DNA)
- Purine synthesis: Formyl groups for adenine, guanine
- Homocysteine → methionine: N5-methyl-THF + homocysteine → THF + methionine (requires B12)

*B12 (Cobalamin):*
- Methylcobalamin: Homocysteine → methionine (with folate); methionine → SAM (methylation)
- Adenosylcobalamin: Methylmalonyl-CoA → succinyl-CoA (propionate metabolism, odd-chain fatty acids)
- Deficiency traps folate as N5-methyl-THF ("methyl trap") → functional folate deficiency

**Vitamin C (Ascorbic Acid) Functions:**
- Collagen synthesis: Hydroxylates proline, lysine (prolyl/lysyl hydroxylase cofactor) → stable triple helix
- Antioxidant: Scavenges free radicals; regenerates vitamin E
- Iron absorption: Reduces Fe3+ → Fe2+ (absorbable form)
- Neurotransmitter synthesis: Dopamine → norepinephrine (dopamine β-hydroxylase)
- Carnitine synthesis: Needed for fatty acid transport into mitochondria

**MINERAL ABSORPTION AND FUNCTION**

**Iron Absorption:**
- Heme iron: Absorbed intact via HCP1; 15-35% bioavailability
- Non-heme iron: Must be reduced Fe3+ → Fe2+ (by ascorbic acid, stomach acid) → DMT1 transporter; 2-20% bioavailability
- Regulation: Hepcidin (liver hormone) ↓ ferroportin (export from enterocytes) when iron replete
- Storage: Ferritin (intracellular); hemosiderin (aggregated ferritin)
- Transport: Transferrin (serum); transferrin receptor-mediated endocytosis into cells

**Calcium Absorption:**
- Active transport (duodenum): Vitamin D-dependent; TRPV6 channel → calbindin → basolateral Ca2+ pump
- Passive diffusion (jejunum, ileum): Paracellular; concentration-dependent
- Regulation: Calcitriol ↑ absorption; phytates, oxalates ↓ absorption
- Hormonal control: PTH (↑ bone resorption, ↑ renal reabsorption, ↑ calcitriol synthesis); calcitonin (↓ bone resorption)

**Zinc Functions:**
- Metalloenzyme cofactor: >300 enzymes (carbonic anhydrase, alkaline phosphatase, alcohol dehydrogenase)
- Zinc finger transcription factors: DNA binding domains
- Immune function: T-cell maturation, cytokine production
- Taste/smell: Gustin (salivary enzyme)
- Insulin storage: Hexameric insulin-zinc crystals in β-cells

**Iodine and Thyroid Function:**
- Iodide uptake: NIS (Na+-I- symporter) concentrates iodide 20-40× in thyroid
- Organification: Thyroid peroxidase (TPO) + H2O2 oxidizes I- → iodination of tyrosines on thyroglobulin
- T3/T4 synthesis: MIT + DIT → T3; DIT + DIT → T4
- Peripheral conversion: 5'-deiodinase converts T4 → T3 (active form)
- Deficiency: ↓ T3/T4 → ↑ TSH → goiter; severe deficiency → cretinism

**Selenium Selenoproteins:**
- Glutathione peroxidases (GPx 1-4): H2O2 + 2 GSH → 2 H2O + GSSG
- Thioredoxin reductases: Maintain cellular redox state
- Deiodinases: T4 → T3 conversion
- Incorporation: Selenocysteine (21st amino acid; UGA codon with SECIS element)

**Spanish Translation:**
La bioquímica de micronutrientes involucra mecanismos específicos de absorción, proteínas de transporte, compartimentos de almacenamiento y funciones celulares como cofactores enzimáticos, antioxidantes, componentes estructurales y moléculas de señalización.`,
      keyTerms: [
        {
          term: 'rhodopsin',
          definition: 'Light-sensitive protein in retinal rod cells; consists of opsin protein + 11-cis-retinal (vitamin A derivative)',
          pronunciation: 'roh-DOP-sin'
        },
        {
          term: 'calcitriol',
          definition: '1,25-dihydroxyvitamin D; active hormone form regulating calcium homeostasis',
          pronunciation: 'kal-SIT-ree-ol'
        },
        {
          term: 'γ-carboxyglutamate (Gla)',
          definition: 'Modified amino acid created by vitamin K-dependent carboxylation; creates Ca2+-binding sites in coagulation factors',
          pronunciation: 'GAM-uh kar-box-ee-GLOO-tuh-mate'
        },
        {
          term: 'intrinsic factor',
          definition: 'Glycoprotein secreted by gastric parietal cells; binds B12 enabling ileal absorption',
          pronunciation: 'in-TRIN-zik'
        }
      ],
      analogies: [
        'Vitamin K is like a molecular stapler that modifies proteins so they can grab onto calcium ions',
        'The B vitamins are like a coordinated assembly line - each one handles a specific step in energy production'
      ],
      clinicalNotes: 'Proton pump inhibitors (PPIs) impair B12 absorption by reducing stomach acid needed to release B12 from food proteins. Long-term PPI use (>2 years) increases deficiency risk. Metformin directly interferes with ileal B12 absorption.'
    },

    4: {
      level: 4,
      summary: 'Clinical micronutrient deficiencies and toxicities present with characteristic syndromes requiring recognition for diagnosis and treatment, with specific at-risk populations, drug-nutrient interactions, and evidence-based supplementation strategies.',
      explanation: `**VITAMIN DEFICIENCY SYNDROMES**

**Vitamin A Deficiency:**
*Progression of Ocular Manifestations:*
1. Night blindness (nyctalopia): Impaired rhodopsin regeneration
2. Conjunctival xerosis: Dry conjunctiva; loss of goblet cells
3. Bitot's spots: Keratinized conjunctival patches (pathognomonic)
4. Corneal xerosis: Dry, hazy cornea
5. Keratomalacia: Corneal ulceration and necrosis → blindness

*Systemic Effects:*
- Follicular hyperkeratosis: Keratotic papules on extensor surfaces
- Impaired immunity: ↓ T-cell proliferation, ↓ antibody responses
- Growth retardation in children
- Increased infection susceptibility (measles, diarrhea, respiratory infections)

*High-Risk Populations:* Developing countries (leading cause preventable blindness); fat malabsorption; strict vegans (if inadequate provitamin A)

*Treatment:* WHO protocol: 200,000 IU day 1, 2, and at 2 weeks (50,000 IU if <6 months); monitor for hepatotoxicity

**Vitamin D Deficiency:**
*Rickets (Children):*
- Skeletal deformities: Bowed legs, rachitic rosary (costochondral beading), frontal bossing
- Delayed fontanelle closure, delayed dentition
- Growth retardation, muscle weakness
- Radiographic: Cupping/fraying of metaphyses, osteopenia

*Osteomalacia (Adults):*
- Bone pain, muscle weakness (proximal myopathy)
- Pseudofractures (Looser's zones): Incomplete stress fractures
- Increased fracture risk
- Lab: ↓ 25(OH)D, ↓ Ca2+, ↓ PO4, ↑ PTH, ↑ alkaline phosphatase

*Risk Factors:* Dark skin, limited sun exposure, obesity (sequestration in adipose), CKD (↓ 1α-hydroxylase), liver disease, malabsorption

*Treatment:* Ergocalciferol or cholecalciferol 50,000 IU weekly × 8 weeks, then maintenance 1,000-2,000 IU/day; treat until 25(OH)D >30 ng/mL

**Thiamine (B1) Deficiency:**
*Beriberi:*
- Dry beriberi: Peripheral neuropathy (symmetric, distal, motor > sensory), muscle wasting
- Wet beriberi: High-output cardiac failure (dilated cardiomyopathy, edema, tachycardia)
- Infantile beriberi: In breastfed infants of deficient mothers; acute heart failure, aphonia

*Wernicke Encephalopathy:* (Medical emergency!)
- Triad: Confusion, ataxia, ophthalmoplegia (nystagmus, lateral rectus palsy)
- Pathology: Hemorrhagic necrosis of mammillary bodies, periaquaductal gray
- Treatment: Thiamine 500 mg IV TID × 3 days, then 250 mg IV/IM daily until eating; BEFORE giving glucose (prevents precipitation)

*Korsakoff Syndrome:*
- Chronic sequel of Wernicke's: Anterograde amnesia, confabulation, apathy
- Often irreversible despite thiamine repletion

*Risk:* Alcoholism (↓ absorption, ↓ storage, ↑ requirement), bariatric surgery, hyperemesis gravidarum, prolonged diuretic use

**Niacin (B3) Deficiency - Pellagra:**
*4 D's:*
1. Dermatitis: Photosensitive, hyperpigmented rash on sun-exposed areas (Casal's necklace)
2. Diarrhea: Malabsorption, glossitis, stomatitis
3. Dementia: Depression, psychosis, memory loss
4. Death: If untreated

*Causes:* Corn-based diets (niacin bound; requires lime processing to release), carcinoid syndrome (tryptophan → serotonin instead of niacin), Hartnup disease (tryptophan malabsorption), isoniazid, 5-FU

*Treatment:* Nicotinamide 50-100 mg TID (avoid nicotinic acid form - causes flushing); dramatic improvement within days

**Pyridoxine (B6) Deficiency:**
- Peripheral neuropathy (sensory > motor)
- Seborrheic dermatitis, cheilosis, glossitis
- Microcytic, hypochromic anemia (↓ heme synthesis)
- Seizures in infants (↓ GABA synthesis)
- Elevated homocysteine

*Causes:* Isoniazid (forms hydrazone with PLP), cycloserine, penicillamine, alcoholism

*Prevention:* 25-50 mg/day B6 with INH therapy

**Folate Deficiency:**
- Megaloblastic anemia: Hypersegmented neutrophils, macro-ovalocytes
- Glossitis, diarrhea, weight loss
- Neural tube defects if deficient periconceptionally
- Elevated homocysteine (↑ CVD risk)
- Normal MMA (distinguishes from B12 deficiency)

*Risk:* Pregnancy, alcoholism, phenytoin, methotrexate, sulfasalazine, malabsorption

*Treatment:* 1-5 mg/day oral; must rule out B12 deficiency first (folate treats anemia but worsens neuro)

**Vitamin B12 Deficiency:**
*Hematologic:*
- Megaloblastic anemia: Identical to folate deficiency
- Pancytopenia if severe

*Neurologic:* (Irreversible if prolonged!)
- Subacute combined degeneration: Demyelination of posterior columns (vibration/proprioception loss) + lateral corticospinal tracts (spastic paresis)
- Peripheral neuropathy: "Stocking-glove" paresthesias
- Cognitive decline, depression, psychosis

*Lab:* ↑ MMA, ↑ homocysteine (both elevated; only homocysteine elevated in folate deficiency)

*Causes:*
- Pernicious anemia: Anti-IF or anti-parietal cell antibodies
- Gastrectomy, ileal resection/disease
- Veganism (no animal products)
- Metformin, PPIs, H2 blockers
- Diphyllobothrium latum (fish tapeworm)

*Treatment:* 1,000 mcg IM daily × 1 week, then weekly × 4 weeks, then monthly lifelong; or 1,000-2,000 mcg oral daily (high-dose can bypass IF)

**Vitamin C Deficiency - Scurvy:**
- Gingival bleeding, petechiae, perifollicular hemorrhage
- Poor wound healing, reopening of old wounds
- Corkscrew hairs, hyperkeratotic papules
- Subperiosteal hemorrhage → bone pain
- Anemia (impaired iron absorption)

*Risk:* Severe dietary restriction, alcoholism, elderly, mental illness

*Treatment:* 100-200 mg/day; improvement within days

**MINERAL DEFICIENCY SYNDROMES**

**Iron Deficiency:**
*Stages:*
1. Depleted stores: ↓ Ferritin (normal CBC)
2. Iron-deficient erythropoiesis: ↓ Transferrin saturation (normal Hgb)
3. Iron-deficiency anemia: Microcytic, hypochromic; ↑ RDW

*Clinical:*
- Fatigue, pallor, tachycardia, dyspnea on exertion
- Pica (especially ice - pagophagia)
- Koilonychia (spoon nails)
- Glossitis, angular cheilitis
- Restless legs syndrome

*Causes:* Blood loss (GI, menstrual), ↓ intake, ↓ absorption (celiac, H. pylori, PPI), ↑ demand (pregnancy, growth)

*Treatment:* Ferrous sulfate 325 mg (65 mg elemental) BID-TID on empty stomach with vitamin C; IV iron if intolerant or malabsorption; investigate source of blood loss

**Zinc Deficiency:**
- Growth retardation, delayed sexual maturation
- Alopecia, dermatitis (especially perioral, acral)
- Diarrhea, impaired wound healing
- Taste/smell dysfunction (hypogeusia, anosmia)
- Impaired immunity (↓ T-cells, ↑ infections)
- Acrodermatitis enteropathica: Genetic Zn malabsorption

*Risk:* Malabsorption, chronic diarrhea, vegetarians (phytates), alcoholism, sickle cell, TPN without adequate Zn

*Treatment:* Zinc sulfate 220 mg (50 mg elemental) daily

**Iodine Deficiency:**
- Goiter: Diffuse thyroid enlargement (compensatory hypertrophy)
- Hypothyroidism: Fatigue, weight gain, cold intolerance
- Cretinism: Severe deficiency in pregnancy → intellectual disability, deaf-mutism, spastic diplegia, stunted growth
- Increased miscarriage, stillbirth risk

*Endemic regions:* Inland mountainous areas without iodized salt

*Treatment:* Iodized salt (76 mcg I per 1g salt); KI supplementation in pregnancy (220 mcg)

**MICRONUTRIENT TOXICITIES**

**Vitamin A Toxicity:**
*Acute:* Nausea, headache, dizziness, blurred vision, papilledema (pseudotumor cerebri)
*Chronic:* Alopecia, dry skin, hepatotoxicity (cirrhosis), bone pain, hypercalcemia
*Teratogenic:* >10,000 IU/day in first trimester → craniofacial, cardiac, CNS defects

*Treatment:* Discontinue supplement; avoid if pregnant; do NOT give tetracyclines (synergistic pseudotumor cerebri risk)

**Vitamin D Toxicity:**
- Hypercalcemia: Nausea, constipation, polyuria, confusion, arrhythmias
- Nephrocalcinosis, kidney stones
- Soft tissue calcification

*Cause:* Excessive supplementation (>10,000 IU/day chronically); granulomatous diseases (extrarenal 1α-hydroxylase)

*Treatment:* Stop supplement; hydration; loop diuretics; glucocorticoids if severe

**Iron Toxicity:**
*Acute overdose:* (Pediatric emergency!)
- 5 stages: GI bleeding → apparent recovery → shock/metabolic acidosis → hepatotoxicity → strictures
- Treatment: Deferoxamine chelation; whole bowel irrigation

*Chronic (Hemochromatosis):*
- Hepatic cirrhosis, diabetes ("bronze diabetes"), cardiomyopathy, arthropathy, hypopituitarism
- HFE gene mutations (C282Y, H63D)
- Treatment: Phlebotomy to ferritin <50

**Spanish Translation:**
Las deficiencias clínicas de micronutrientes y toxicidades se presentan con síndromes característicos que requieren reconocimiento para diagnóstico y tratamiento, con poblaciones específicas en riesgo, interacciones medicamento-nutriente y estrategias de suplementación basadas en evidencia.`,
      keyTerms: [
        {
          term: 'keratomalacia',
          definition: 'Corneal necrosis and perforation due to severe vitamin A deficiency; leading cause of preventable blindness',
          pronunciation: 'ker-ah-toh-mah-LAY-shah'
        },
        {
          term: 'Wernicke encephalopathy',
          definition: 'Acute thiamine deficiency causing confusion, ataxia, ophthalmoplegia; medical emergency requiring immediate IV thiamine',
          pronunciation: 'VER-ni-kee en-sef-ah-LOP-ah-thee'
        },
        {
          term: 'pernicious anemia',
          definition: 'Autoimmune destruction of gastric parietal cells → loss of intrinsic factor → B12 malabsorption',
          pronunciation: 'per-NISH-us'
        },
        {
          term: 'subacute combined degeneration',
          definition: 'B12 deficiency-induced demyelination of dorsal columns and corticospinal tracts causing sensory ataxia and spastic weakness',
          pronunciation: 'sub-ah-KYOOT kom-BINED'
        }
      ],
      clinicalNotes: 'CRITICAL: Give thiamine BEFORE glucose in at-risk patients (alcoholic, malnourished) to prevent precipitating Wernicke encephalopathy. Rule out B12 deficiency before treating with folate (folate corrects anemia but worsens neurological damage).'
    },

    5: {
      level: 5,
      summary: 'Evidence-based micronutrient recommendations require critical appraisal of observational studies, RCTs of supplementation, biomarker interpretation, and understanding of personalized needs based on genetics, disease states, medications, and life stage, with most benefit from food-based approaches over isolated supplements.',
      explanation: `**CRITICAL APPRAISAL OF MICRONUTRIENT EVIDENCE**

**1. VITAMIN D: PARADIGM SHIFT**

*Observational Data vs. RCT Results:*
- Observational: Low 25(OH)D associated with ↑ cancer, CVD, diabetes, autoimmune disease, infections, all-cause mortality
- Proposed mechanisms: VDR in most tissues; anti-proliferative, immunomodulatory, anti-inflammatory effects

*Major RCTs:*
- **VITAL (2019):** 25,871 participants; vitamin D3 2,000 IU + omega-3 vs. placebo
  - Primary: No reduction in cancer or major CVD events at 5.3 years
  - Secondary: 17% reduction in cancer mortality (emerging at 2+ years); 22% reduction in autoimmune disease
- **D2d (2019):** 2,423 pre-diabetics; vitamin D3 4,000 IU vs. placebo
  - No significant reduction in diabetes incidence (HR 0.88, p=0.12)
- **DO-HEALTH (2020):** Elderly; no benefit for fractures, infections, or cognitive decline

*Meta-Analyses:*
- Respiratory infections: Modest benefit (NNT ~33); greatest effect in deficient individuals (<25 nmol/L)
- Falls: No benefit in meta-analysis contradicting earlier data
- Mortality: Small reduction in cancer-specific mortality

*Current Interpretation:*
- Reverse causality likely explains many observational associations (illness → ↓ outdoor activity → ↓ vitamin D)
- Treating deficiency beneficial; supplementing replete individuals has minimal benefit
- Optimal level: 20 ng/mL sufficient for bone (IOM); 30 ng/mL for extra-skeletal effects (Endocrine Society) - debate continues

*Clinical Approach:*
- Screen high-risk: Dark skin, institutionalized, limited sun, obesity, malabsorption, CKD
- Target 25(OH)D: 30-50 ng/mL reasonable
- Supplementation: 1,000-2,000 IU/day for most; higher if obese or malabsorption
- Megadoses (50,000 IU monthly) may be less effective than daily dosing

**2. ANTIOXIDANT VITAMINS: PROMISE UNFULFILLED**

*Observational Hypothesis:*
- Free radical theory of aging and disease
- High intake of vitamins E, C, beta-carotene associated with ↓ CVD, cancer

*RCT Reality:*
- **ATBC Trial (1994):** Finnish male smokers; beta-carotene 20 mg → 18% ↑ lung cancer
- **CARET (1996):** Smokers/asbestos; beta-carotene + vitamin A → 28% ↑ lung cancer; stopped early
- **HOPE-TOO (2005):** Vitamin E 400 IU → ↑ heart failure
- **SELECT (2011):** Vitamin E 400 IU → 17% ↑ prostate cancer
- **PHS II (2008):** Vitamin E, C no benefit for CVD or cancer

*Mechanisms of Harm:*
- Pro-oxidant effects at high doses
- Interference with exercise-induced adaptations (ROS signaling)
- β-carotene metabolites may promote carcinogenesis in high-risk individuals

*Recommendations:*
- Obtain antioxidants from food (complex matrix, lower doses, multiple compounds)
- Do NOT supplement with high-dose isolated antioxidants for disease prevention
- Exception: AREDS2 formula for AMD (specific indication, tested doses)

**3. B VITAMINS AND HOMOCYSTEINE: HYPOTHESIS DISPROVEN**

*Hypothesis:*
- Elevated homocysteine → ↑ CVD, stroke, dementia
- B6, B9, B12 lower homocysteine → should reduce events

*RCTs:*
- **HOPE-2 (2006):** Folate + B6 + B12 lowered homocysteine 25% → no ↓ MI or stroke
- **VITATOPS (2010):** Stroke patients; vitamins → no ↓ recurrent stroke
- Multiple trials: Consistently null despite ↓ homocysteine

*Interpretation:*
- Homocysteine is biomarker, not causal
- Treat deficiency (anemia, neuropathy), NOT elevated homocysteine per se

*Exception:*
- Folate fortification → 25-30% ↓ neural tube defects (proven benefit)
- 400-800 mcg folate periconceptionally remains critical recommendation

**4. IRON SUPPLEMENTATION: INDIVIDUALIZED APPROACH**

*Routine Supplementation:*
- Pregnancy: Universal recommendation (27 mg elemental); prevents anemia, improves birth weight
- Infants: 1 mg/kg from 4-6 months (breastfed) or iron-fortified formula
- Blood donors: Frequent donors benefit; reduces depletion

*Emerging Concerns:*
- High iron associated with ↑ oxidative stress, ↑ infections (in endemic malaria regions)
- Hepcidin-guided therapy may optimize dosing

*Intravenous Iron:*
- Indications: Intolerance to oral, malabsorption, CKD, IBD, heart failure
- Formulations: Iron sucrose, ferric carboxymaltose, iron dextran
- Safety: Modern formulations safer than old iron dextran; monitor for hypersensitivity

**5. PERSONALIZED MICRONUTRIENT NEEDS**

*Genetic Polymorphisms:*

**MTHFR 677C>T:**
- Reduced enzyme activity → ↑ homocysteine if folate marginal
- Prevalence: 10% homozygous, 40% heterozygous
- Clinical utility: Low; adequate folate intake overcomes polymorphism
- Do NOT routinely screen; methylfolate supplementation unproven benefit

**VDR Polymorphisms:**
- Affect vitamin D receptor function, calcium absorption
- May modify response to supplementation
- Clinical application: Not ready for practice

**FUT2 (Secretor Status):**
- Non-secretors have ↓ B12 absorption
- May need higher intake

*Microbiome Influence:*
- Vitamin K2, biotin, folate production by gut bacteria
- Antibiotic disruption may necessitate temporary supplementation
- Prebiotic fibers support vitamin-producing bacteria

**6. SPECIAL POPULATIONS**

**Bariatric Surgery:**
*Lifelong Requirements (per ASMBS 2024):*
- Multivitamin with minerals (2 tablets daily)
- Calcium citrate 1,200-1,500 mg + vitamin D 3,000 IU
- Vitamin B12: 1,000 mcg sublingual or 3,000 mcg oral or IM monthly
- Iron: 45-60 mg elemental (menstruating women, documented deficiency)
- Monitor: Every 3-6 months first year, then annually

*Procedure-Specific:*
- RYGB: Highest deficiency risk (bypass duodenum); need all above
- Sleeve: Lower risk but still require supplementation
- Bands: Least metabolic impact; standard multivitamin often sufficient

**Chronic Kidney Disease:**
*Altered Metabolism:*
- Vitamin D: ↓ 1α-hydroxylase → deficiency despite adequate 25(OH)D
- Calcitriol or analogs (paricalcitol) for secondary hyperparathyroidism
- Vitamin B6: Increased losses with dialysis
- Vitamin C: Limit to <200 mg/day (oxalate accumulation risk)

*Avoid:*
- Vitamin A supplementation (accumulates)
- Phosphorus-containing supplements

**Elderly:**
*Increased Risk:*
- B12: ↓ stomach acid, ↓ IF, medications; crystalline form (supplements, fortified foods) better absorbed
- Vitamin D: ↓ skin synthesis, ↓ sun exposure, ↓ renal activation
- Calcium: ↓ absorption efficiency, ↓ intake

*Recommendations:*
- B12: 2.4-1,000 mcg/day (food-bound may not be absorbed)
- Vitamin D: 800-1,000 IU minimum; check 25(OH)D
- Calcium: 1,200 mg (preferably from food to avoid CV concerns from supplements)

**Vegetarians/Vegans:**
*At Risk:*
- B12: Mandatory supplementation (no reliable plant sources)
- Iron: ↑ needs (phytate inhibition, non-heme form); vitamin C enhances absorption
- Zinc: 50% higher RDA due to phytates
- Iodine: If no iodized salt or sea vegetables
- Vitamin D: If limited sun exposure (plant sources minimal)
- Omega-3: ALA (flax) → EPA/DHA conversion inefficient; consider algae oil

**Pregnancy/Lactation:**
*Critical Nutrients:*
- Folate: 600 mcg DFE (prevent NTD); start preconceptionally
- Iron: 27 mg (↑ blood volume, fetal needs)
- Iodine: 220 mcg pregnancy, 290 mcg lactation (fetal brain development)
- Choline: 450 mg (often inadequate; brain development)
- Vitamin D: 600-2,000 IU

*Avoid:*
- Vitamin A: <10,000 IU (teratogenic); beta-carotene safer
- High-dose supplements not formulated for pregnancy

**7. DRUG-NUTRIENT INTERACTIONS - COMPREHENSIVE**

*Medications Causing Deficiency:*
- **Metformin:** B12 (30% at 10-12 years); screen annually
- **PPIs/H2 blockers:** B12, magnesium, calcium (long-term)
- **Loop diuretics:** Thiamine, magnesium, potassium
- **Thiazides:** Magnesium, potassium; ↑ calcium (beneficial for bones)
- **Phenytoin, carbamazepine:** Folate, vitamin D (↑ metabolism)
- **Isoniazid:** B6 (forms hydrazone); supplement 25-50 mg
- **Orlistat:** Fat-soluble vitamins (blocks fat absorption)
- **Colchicine:** B12 (damages ileal mucosa)
- **Cholestyramine:** Fat-soluble vitamins (binds in gut)

*Nutrients Affecting Medication:*
- **Warfarin:** Vitamin K antagonism (maintain consistent intake, not avoid)
- **Levothyroxine:** Calcium, iron ↓ absorption (separate by 4 hours)
- **Antibiotics:** Calcium, iron, zinc ↓ absorption (fluoroquinolones, tetracyclines)
- **Levodopa:** Vitamin B6 (without carbidopa) ↑ peripheral metabolism
- **Methotrexate:** Folate antagonist (supplement 1 mg daily except day of MTX dose)

**8. FUTURE DIRECTIONS**

*Precision Nutrition:*
- Integration of genomics, metabolomics, microbiome, wearables
- Individualized DRI based on genetic variants, disease risk, baseline status
- Real-time monitoring (wearable micronutrient sensors in development)

*Novel Biomarkers:*
- Functional assays over static levels (e.g., methylmalonic acid > serum B12)
- Red blood cell micronutrients reflect tissue status better than serum

*Food Fortification 2.0:*
- Biofortification: Breeding/engineering crops with ↑ nutrients (golden rice with vitamin A)
- Targeted fortification based on population gaps

*Sustainability:*
- Micronutrient security in plant-based diets (environmental imperative)
- Reducing reliance on animal products while preventing deficiency

**Spanish Translation:**
Las recomendaciones de micronutrientes basadas en evidencia requieren evaluación crítica de estudios observacionales, ensayos clínicos de suplementación, interpretación de biomarcadores y comprensión de necesidades personalizadas basadas en genética, estados de enfermedad, medicamentos y etapa de vida.`,
      keyTerms: [
        {
          term: 'MTHFR polymorphism',
          definition: 'Genetic variant in methylenetetrahydrofolate reductase affecting folate metabolism and homocysteine levels; common (677C>T) but clinical significance often overstated',
          pronunciation: 'M-T-H-F-R'
        },
        {
          term: 'hepcidin',
          definition: 'Liver hormone regulating systemic iron homeostasis; inhibits ferroportin reducing intestinal absorption and macrophage iron release; elevated in inflammation causing functional iron deficiency',
          pronunciation: 'HEP-sid-in'
        },
        {
          term: 'holotranscobalamin',
          definition: 'Transcobalamin II-bound B12; the biologically available fraction; may be superior marker of B12 status compared to total serum B12'
        },
        {
          term: 'reverse causality',
          definition: 'Epidemiological phenomenon where the outcome causes the exposure rather than vice versa; major confounder in observational nutrition studies (e.g., illness → ↓ vitamin D, not ↓ vitamin D → illness)'
        }
      ],
      clinicalNotes: 'USPSTF 2021 Recommendations: Insufficient evidence to recommend routine vitamin supplementation for chronic disease prevention in non-pregnant adults (Grade I). Exception: Folic acid 400-800 mcg for women planning/capable of pregnancy (Grade A). Screen vitamin D in high-risk populations. Individualize based on diet, risk factors, and documented deficiency.'
    }
  },

  media: [],
  citations: [
    {
      id: 'iom-vitamins',
      type: 'textbook',
      title: 'Dietary Reference Intakes: The Essential Guide to Nutrient Requirements',
      source: 'Institute of Medicine',
      url: 'https://www.nap.edu/catalog/11537'
    },
    {
      id: 'vital-trial',
      type: 'article',
      title: 'Vitamin D Supplements and Prevention of Cancer and Cardiovascular Disease',
      authors: ['Manson JE', 'Cook NR', 'Lee IM', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa1809944'
    }
  ],
  crossReferences: [
    { targetId: 'nutrition-vitamins-fat-soluble', targetType: 'concept', relationship: 'child', label: 'Fat-Soluble Vitamins' },
    { targetId: 'nutrition-vitamins-water-soluble', targetType: 'concept', relationship: 'child', label: 'Water-Soluble Vitamins' },
    { targetId: 'nutrition-minerals-major', targetType: 'concept', relationship: 'child', label: 'Major Minerals' },
    { targetId: 'nutrition-minerals-trace', targetType: 'concept', relationship: 'child', label: 'Trace Minerals' },
    { targetId: 'condition-scurvy', targetType: 'condition', relationship: 'related', label: 'Scurvy' },
    { targetId: 'condition-rickets', targetType: 'condition', relationship: 'related', label: 'Rickets' },
    { targetId: 'condition-anemia', targetType: 'condition', relationship: 'related', label: 'Anemia' }
  ],
  tags: {
    systems: ['musculoskeletal', 'nervous', 'immune', 'hematologic', 'endocrine'],
    topics: ['nutrition', 'micronutrients', 'vitamins', 'minerals', 'deficiency', 'metabolism'],
    keywords: ['vitamins', 'minerals', 'deficiency', 'toxicity', 'supplementation', 'B12', 'vitamin D', 'iron', 'calcium'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      shelf: ['medicine', 'pediatrics', 'surgery']
    }
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
  contributors: ['Claude Opus 4.5']
};
