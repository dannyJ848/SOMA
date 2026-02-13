/**
 * Prenatal Nutrition
 *
 * Educational content covering nutritional needs during pregnancy, essential
 * vitamins and minerals, dietary guidelines, food safety, weight gain
 * recommendations, and clinical nutrition management.
 */

import { EducationalContent } from '../../types';

export const prenatalNutritionContent: EducationalContent = {
  id: 'topic-prenatal-nutrition',
  type: 'topic',
  name: 'Prenatal Nutrition',
  nameEs: 'Nutricion Prenatal',
  alternateNames: ['Pregnancy nutrition', 'Maternal diet', 'Nutrition during pregnancy'],

  levels: {
    1: {
      level: 1,
      summary:
        'Eating well during pregnancy helps your baby grow and keeps you healthy. You do not need to eat for two, but you do need the right nutrients every day.',
      explanation: `Good nutrition during pregnancy gives your baby the building blocks to grow a healthy brain, bones, and body. Here is what you need to know.

**How Much More to Eat**
- First trimester: No extra calories needed
- Second trimester: About 340 extra calories per day (a yogurt and a banana)
- Third trimester: About 450 extra calories per day (a small sandwich)
- You do not need to double your food. "Eating for two" means eating twice as well, not twice as much

**Foods to Eat Every Day**
- **Fruits and vegetables:** At least 5 servings; different colors give different vitamins
- **Whole grains:** Brown rice, whole wheat bread, oatmeal for energy and fiber
- **Lean protein:** Chicken, beans, eggs, fish, lean beef for building baby's muscles and organs
- **Dairy or calcium-rich foods:** Milk, yogurt, cheese, or calcium-fortified alternatives for strong bones
- **Healthy fats:** Avocado, nuts, olive oil for baby's brain development

**The Most Important Vitamins and Minerals**
| Nutrient | Why You Need It | Good Sources |
|----------|----------------|-------------|
| Folic acid | Prevents birth defects of the brain and spine | Prenatal vitamin, leafy greens, fortified cereal |
| Iron | Makes extra blood for you and baby; prevents anemia | Red meat, beans, spinach, fortified cereal |
| Calcium | Builds baby's bones and teeth | Milk, yogurt, cheese, tofu, fortified orange juice |
| DHA (omega-3) | Helps baby's brain and eye development | Salmon, sardines, DHA supplements |
| Vitamin D | Helps calcium work and supports immune system | Sunlight, fortified milk, eggs, supplements |
| Iodine | Supports baby's brain and thyroid | Iodized salt, dairy, seafood |

**Prenatal Vitamins**
- Take a prenatal vitamin every day, starting before pregnancy if possible
- Look for one with at least 400-800 mcg of folic acid and 27 mg of iron
- If it makes your stomach upset, try taking it with food or at bedtime
- A prenatal vitamin fills gaps but does not replace healthy eating

**Foods to Avoid or Limit**
- **Raw or undercooked meat, eggs, and fish** (risk of bacteria)
- **High-mercury fish:** Shark, swordfish, king mackerel, tilefish
- **Unpasteurized dairy and juice** (risk of Listeria)
- **Deli meats and hot dogs** unless heated until steaming
- **Alcohol:** No amount is known to be safe during pregnancy
- **Caffeine:** Limit to 200 mg per day (about one 12-oz coffee)
- **Raw sprouts** (risk of bacteria)

**Staying Hydrated**
- Drink at least 8-10 glasses of water per day
- Water helps form the amniotic fluid around your baby
- It also helps prevent constipation, swelling, and urinary infections

**Dealing with Common Issues**
- **Morning sickness:** Eat small, frequent meals; try bland foods like crackers and toast; ginger tea may help
- **Constipation:** Eat high-fiber foods, drink plenty of water, and stay active
- **Heartburn:** Eat smaller meals, avoid spicy and fried foods, do not lie down right after eating
- **Cravings:** Occasional treats are fine; if you crave non-food items (dirt, ice, chalk), tell your doctor right away`,
      keyTerms: [
        { term: 'folic acid', definition: 'A B vitamin that prevents serious birth defects of the baby\'s brain and spine; found in prenatal vitamins and leafy greens' },
        { term: 'anemia', definition: 'A condition where you do not have enough healthy red blood cells to carry oxygen; common in pregnancy if you do not get enough iron' },
        { term: 'DHA', definition: 'An omega-3 fatty acid that helps build your baby\'s brain and eyes; found in fish like salmon' },
        { term: 'prenatal vitamin', definition: 'A daily supplement made especially for pregnant women that contains extra folic acid, iron, and other nutrients' },
        { term: 'Listeria', definition: 'A type of bacteria found in unpasteurized dairy and some deli meats that can cause a serious infection during pregnancy' },
        { term: 'pica', definition: 'An unusual craving to eat things that are not food, like ice, dirt, or clay; can be a sign of iron deficiency' },
      ],
      analogies: [
        'Think of prenatal vitamins as an insurance policy. Healthy eating is the main plan, and the vitamin fills in any gaps to make sure your baby gets everything needed.',
        'Your body builds your baby the way a construction crew builds a house. Protein is the lumber, calcium is the foundation, and folic acid is the blueprint for the brain.',
        'Iron in pregnancy is like fuel for a delivery truck. You need extra to carry oxygen to your growing baby through all the new blood your body is making.',
      ],
      patientCounselingPoints: [
        'You do not need expensive superfoods. Simple, affordable foods like beans, eggs, oatmeal, and frozen vegetables provide excellent nutrition for pregnancy.',
        'If morning sickness makes it hard to eat, focus on whatever stays down. Crackers, toast, and small sips of ginger tea are good starting points.',
        'If you crave non-food items like ice, dirt, or starch, tell your doctor. This can be a sign of iron deficiency and is treatable.',
        'It is okay to have treats sometimes. One cup of coffee a day and the occasional dessert are fine. Focus on overall patterns, not perfection.',
      ],
    },
    2: {
      level: 2,
      summary:
        'Prenatal nutrition requires increased intake of specific macro- and micronutrients to support fetal development, with evidence-based guidelines for weight gain, supplementation, and food safety to optimize maternal and fetal outcomes.',
      explanation: `**Macronutrient Requirements**
| Nutrient | Non-Pregnant | Pregnant | Role |
|----------|-------------|---------|------|
| Protein | 46 g/day | 71 g/day (+ 25g) | Fetal tissue growth, placental development, maternal blood volume expansion |
| Carbohydrates | 130 g/day | 175 g/day | Primary energy source; fetal brain glucose requirement |
| Fat | 20-35% of calories | 20-35% of calories | Cell membrane development, hormone synthesis, fat-soluble vitamin absorption |
| Fiber | 25 g/day | 28 g/day | Prevents constipation, regulates blood sugar |
| Water | 2.7 L/day | 3.0 L/day | Amniotic fluid, increased blood volume, nutrient transport |

**Micronutrient Requirements and Supplementation**
| Nutrient | RDA in Pregnancy | Key Functions | Deficiency Consequences |
|----------|-----------------|---------------|----------------------|
| Folic acid | 600 mcg DFE | Neural tube closure (days 21-28) | Neural tube defects (spina bifida, anencephaly) |
| Iron | 27 mg | Hemoglobin synthesis, fetal iron stores | Iron deficiency anemia, preterm birth, low birth weight |
| Calcium | 1,000 mg | Fetal skeletal mineralization | Maternal bone loss; preeclampsia risk |
| Vitamin D | 600 IU (many experts recommend 1,000-2,000 IU) | Calcium absorption, immune function | Rickets, preeclampsia, gestational diabetes risk |
| Iodine | 220 mcg | Thyroid hormone synthesis, fetal brain development | Cretinism, intellectual disability, goiter |
| DHA | 200-300 mg | Fetal brain and retinal development | Suboptimal neurodevelopmental outcomes |
| Choline | 450 mg | Neural tube development, brain methylation | Emerging evidence for neural tube defects |
| Vitamin B12 | 2.6 mcg | DNA synthesis, neurological function | Megaloblastic anemia, neurological deficits |
| Zinc | 11 mg | Cell division, immune function | Growth restriction, preterm birth |

**Gestational Weight Gain (IOM/NASEM Guidelines)**
| Pre-Pregnancy BMI | Category | Recommended Total Gain | Rate in 2nd/3rd Trimester |
|-------------------|----------|----------------------|--------------------------|
| < 18.5 | Underweight | 28-40 lbs (12.5-18 kg) | ~1 lb/week |
| 18.5-24.9 | Normal | 25-35 lbs (11.5-16 kg) | ~1 lb/week |
| 25.0-29.9 | Overweight | 15-25 lbs (7-11.5 kg) | ~0.6 lb/week |
| >= 30.0 | Obese | 11-20 lbs (5-9 kg) | ~0.5 lb/week |

**Fish and Seafood Safety**
| Category | Examples | Recommendation |
|----------|---------|---------------|
| Best choices (2-3 servings/week) | Salmon, tilapia, shrimp, pollock, catfish, sardines | Low mercury; rich in DHA |
| Good choices (1 serving/week) | Tuna (albacore), halibut, snapper, mahi-mahi | Moderate mercury |
| Avoid | Shark, swordfish, king mackerel, tilefish, bigeye tuna | High mercury |

**Food Safety During Pregnancy**
| Risk | Source | Prevention |
|------|--------|-----------|
| Listeriosis | Unpasteurized dairy, deli meats, soft cheeses, smoked fish | Heat deli meats until steaming; avoid unpasteurized products |
| Toxoplasmosis | Raw/undercooked meat, cat litter, contaminated soil | Cook meat thoroughly; wear gloves for gardening; avoid cat litter |
| Salmonella | Raw eggs, undercooked poultry | Cook eggs and poultry thoroughly |
| E. coli | Raw sprouts, undercooked ground beef | Avoid raw sprouts; cook ground beef to 160 F |

**Vegetarian and Vegan Pregnancy**
| Nutrient of Concern | Plant Sources | Supplementation Needed? |
|---------------------|-------------|----------------------|
| Iron | Legumes, fortified cereals, spinach (with vitamin C for absorption) | Often yes; non-heme iron less bioavailable |
| Vitamin B12 | None (plant foods) | Yes; essential supplement for vegans |
| DHA | Algae-based supplements | Yes; no plant food sources of preformed DHA |
| Calcium | Tofu, fortified plant milk, kale, broccoli | Possibly, depending on intake |
| Zinc | Legumes, nuts, seeds, whole grains | Possibly; absorption reduced by phytates |
| Protein | Legumes, tofu, tempeh, seitan, quinoa, nuts | Plan to meet 71 g/day from varied sources |

**Nausea and Vomiting Management**
| Severity | Characteristics | Management |
|----------|----------------|-----------|
| Mild NVP | Occasional nausea; able to eat and drink | Small, frequent meals; avoid triggers; ginger; vitamin B6 (25 mg TID) |
| Moderate NVP | Frequent nausea; reduced intake | Vitamin B6 + doxylamine (Diclegis); dietary modification |
| Hyperemesis gravidarum | Persistent vomiting; >5% weight loss; dehydration | IV fluids; antiemetics (ondansetron); hospitalization; TPN if severe |`,
      keyTerms: [
        { term: 'neural tube defect', definition: 'A birth defect of the brain or spine (such as spina bifida or anencephaly) that occurs when the neural tube fails to close properly in early pregnancy; prevented by adequate folic acid' },
        { term: 'dietary folate equivalent (DFE)', definition: 'Measurement unit for folate that accounts for the higher bioavailability of synthetic folic acid compared to natural food folate; 1 mcg DFE = 1 mcg food folate or 0.6 mcg synthetic folic acid' },
        { term: 'hyperemesis gravidarum', definition: 'Severe nausea and vomiting in pregnancy causing weight loss of more than 5%, dehydration, and electrolyte imbalance; requires medical treatment' },
        { term: 'methylmercury', definition: 'An organic form of mercury found in certain large predatory fish; crosses the placenta and is neurotoxic to the developing fetal brain' },
        { term: 'non-heme iron', definition: 'The form of iron found in plant foods; less readily absorbed than heme iron from animal sources; absorption enhanced by pairing with vitamin C' },
        { term: 'choline', definition: 'An essential nutrient important for fetal brain development and neural tube closure; found in eggs, liver, and soybeans; inadequately supplied in most prenatal vitamins' },
      ],
      patientCounselingPoints: [
        'Weight gain during pregnancy is normal and necessary. The recommended amount depends on your starting weight. Talk to your provider about your personal target.',
        'Fish is an excellent source of DHA for baby\'s brain, but choose low-mercury options like salmon and shrimp. Two to three servings per week is ideal.',
        'Vegetarian and vegan diets can be healthy during pregnancy with proper planning. Vitamin B12 and DHA supplementation are essential for vegans.',
        'If nausea makes it hard to take your prenatal vitamin, try a gummy version or take it at a different time of day with food.',
      ],
    },
    3: {
      level: 3,
      summary:
        'Prenatal nutrition involves coordinated metabolic adaptations in maternal physiology, evidence-based micronutrient supplementation, and understanding of nutrient transport mechanisms across the placenta that directly influence fetal growth and developmental programming.',
      explanation: `**Maternal Metabolic Adaptations to Pregnancy**
- **First trimester (anabolic phase):** Increased lipogenesis and glycogen storage; building nutrient reserves
- **Second/third trimester (catabolic phase):** Accelerated lipolysis and insulin resistance; preferential glucose shunting to fetus
- Plasma volume expansion (~50%): dilutional effects on hemoglobin (physiological anemia of pregnancy) and albumin
- GFR increases 50%: increased renal clearance of glucose, amino acids, and water-soluble vitamins
- Progesterone effects: decreased GI motility (increased nutrient absorption time but also constipation)

**Placental Nutrient Transport**
| Nutrient | Transport Mechanism | Transporter |
|----------|-------------------|------------|
| Glucose | Facilitated diffusion (concentration gradient) | GLUT1 (basal), GLUT3 (apical) |
| Amino acids | Active transport (against gradient) | System A, System L, System y+ |
| Fatty acids | Facilitated transport + passive diffusion | FATP, FABPpm, FAT/CD36 |
| Iron | Receptor-mediated endocytosis | Transferrin receptor 1 (TfR1) |
| Calcium | Active transcellular transport | TRPV6, calbindin-D9k, PMCA |
| Folate | Receptor-mediated endocytosis | Folate receptor alpha (FRα) |
| IgG | Receptor-mediated transcytosis | FcRn (neonatal Fc receptor) |

**Iron Metabolism in Pregnancy**
- Total iron requirement: ~1,000 mg over pregnancy (300 mg fetal, 500 mg expanded RBC mass, 200 mg obligatory losses)
- Hepcidin suppression in pregnancy: increases intestinal iron absorption and placental iron transfer
- Ferritin is the best marker of iron stores; levels <30 ng/mL suggest depleted stores
- Iron supplementation: 27 mg/day (routine); 60-120 mg/day if deficient
- IV iron (ferric carboxymaltose, iron sucrose) for severe deficiency or intolerance of oral iron
- Excess iron supplementation in iron-replete women may increase oxidative stress and gestational diabetes risk

**Folate Metabolism and Neural Tube Defects**
- Critical period: neural tube closure occurs days 21-28 post-conception (often before pregnancy recognition)
- 5-MTHF (methyltetrahydrofolate) is the bioactive form; folic acid is synthetic and requires DHFR conversion
- MTHFR polymorphisms (C677T, A1298C): impair folate metabolism; ~10-15% population homozygous for C677T
- Women with MTHFR variants may benefit from methylfolate (5-MTHF) rather than folic acid
- High-risk women (prior NTD, antiepileptic use): 4,000 mcg (4 mg) folic acid daily starting 1-3 months preconception
- Folate fortification of grain products (since 1998 in US): reduced NTD incidence by 25-30%

**Vitamin D in Pregnancy: Evidence and Controversies**
| Topic | Detail |
|-------|--------|
| Current RDA | 600 IU/day (IOM); many experts advocate 1,000-4,000 IU |
| Deficiency definition | 25(OH)D < 20 ng/mL; insufficiency 20-30 ng/mL |
| Prevalence of deficiency | 18-84% depending on population, season, and skin pigmentation |
| Associations with deficiency | Preeclampsia, GDM, preterm birth, SGA, bacterial vaginosis |
| NICHD vitamin D study | 4,000 IU/day safe and effective at achieving sufficiency; no adverse effects |
| Universal screening | Not recommended by ACOG; screen high-risk women |

**Omega-3 Fatty Acids and Neurodevelopment**
- DHA (docosahexaenoic acid) accumulates rapidly in fetal brain during third trimester
- 70% of fetal brain DHA accretion occurs in the last 10 weeks of gestation
- EPA (eicosapentaenoic acid) has anti-inflammatory properties; may reduce preterm birth risk
- Cochrane review (2018): omega-3 supplementation reduced early preterm birth (<34 weeks) by 42%
- Fish oil (EPA+DHA) preferred over flaxseed (ALA); ALA conversion to DHA is <5%

**Iodine Deficiency: A Global Concern**
- Iodine is essential for thyroid hormone synthesis (T3, T4)
- Thyroid hormones are critical for fetal brain myelination and neuronal migration
- Severe deficiency: cretinism (intellectual disability, growth failure, deafness)
- Mild-moderate deficiency: suboptimal cognitive development
- WHO recommends 250 mcg/day in pregnancy; US RDA is 220 mcg/day
- Most prenatal vitamins contain 150 mcg; ensure iodine content when selecting

**Special Dietary Considerations**
| Condition | Nutritional Management |
|-----------|----------------------|
| Celiac disease | Strict gluten-free diet; monitor iron, folate, calcium, vitamin D |
| Inflammatory bowel disease | Nutrient-dense diet; monitor for malabsorption; folate, iron, B12 supplementation |
| Bariatric surgery history | Higher risk of micronutrient deficiency; monitor B12, iron, calcium, fat-soluble vitamins; smaller frequent meals |
| Multiple gestation | Additional 300 kcal/day per fetus; higher protein, iron, and folate needs |
| Adolescent pregnancy | Competing growth demands; higher calcium and calorie needs |`,
      keyTerms: [
        { term: 'hepcidin', definition: 'Master regulatory hormone of iron homeostasis; suppressed in pregnancy to increase intestinal iron absorption and placental iron transfer to meet expanded demands' },
        { term: 'MTHFR polymorphism', definition: 'Genetic variant (commonly C677T) in methylenetetrahydrofolate reductase enzyme; reduces conversion of folic acid to its active form; affects 10-15% of the population' },
        { term: 'placental GLUT1', definition: 'Glucose transporter type 1; facilitates glucose transfer across the placental basal membrane down a concentration gradient; upregulated in gestational diabetes' },
        { term: 'cretinism', definition: 'Severe congenital condition caused by maternal iodine deficiency resulting in profound intellectual disability, growth failure, and deafness in the offspring' },
        { term: 'physiological anemia of pregnancy', definition: 'Dilutional decrease in hemoglobin concentration due to plasma volume expanding faster than red blood cell mass; hemoglobin < 11 g/dL in first/third trimester or < 10.5 in second trimester is pathological' },
        { term: 'System A amino acid transporter', definition: 'Active placental transporter for neutral amino acids (alanine, serine, glycine); upregulated by insulin and IGF-1; a key determinant of fetal growth' },
      ],
    },
    4: {
      level: 4,
      summary:
        'Advanced prenatal nutrition encompasses nutrient-gene interactions, placental nutrient sensing pathways, clinical management of nutritional complications, and evidence-based supplementation strategies for special populations.',
      explanation: `**Placental Nutrient Sensing and Growth Regulation**
| Pathway | Function | Dysregulation |
|---------|----------|--------------|
| mTOR (mechanistic target of rapamycin) | Integrates nutrient, energy, and growth factor signals; regulates amino acid transporter expression | Reduced activity in FGR; increased in GDM/macrosomia |
| AMPK | Energy sensor; activated by low ATP/AMP ratio | Increased in nutrient restriction; inhibits mTOR |
| IGF-1/IGF-2 axis | Placental and fetal growth regulation | IGF-2 imprinting abnormalities in Beckwith-Wiedemann; FGR with reduced IGF-1 |
| PPARgamma | Lipid metabolism, trophoblast differentiation | Dysregulated in preeclampsia; altered fatty acid transport |
| O-GlcNAc signaling | Nutrient-sensitive post-translational modification | Links maternal hyperglycemia to altered gene expression |

**Nutrient-Gene Interactions (Nutrigenomics)**
| Interaction | Mechanism | Clinical Implication |
|------------|-----------|---------------------|
| Folate-MTHFR C677T | Reduced 5-MTHF production; impaired homocysteine remethylation | Consider methylfolate supplementation; higher NTD risk if folate-deficient |
| Iron-HFE variants | Hemochromatosis gene variants alter iron absorption | May increase iron overload risk with routine supplementation |
| Vitamin D-VDR polymorphisms | Vitamin D receptor variants affect calcium absorption and immune function | May explain variable response to vitamin D supplementation |
| Omega-3-FADS1/FADS2 | Fatty acid desaturase gene variants affect LC-PUFA synthesis | Reduced endogenous DHA synthesis; greater dependence on dietary DHA |
| Choline-PEMT | Phosphatidylethanolamine N-methyltransferase variants reduce endogenous choline synthesis | 75% of women carry variants increasing dietary choline requirements |

**Clinical Management of Iron Deficiency Anemia**
| Parameter | Mild | Moderate | Severe |
|-----------|------|----------|--------|
| Hemoglobin | 10-11 g/dL | 8-10 g/dL | < 8 g/dL |
| Ferritin | 15-30 ng/mL | < 15 ng/mL | < 15 ng/mL |
| Treatment | Oral iron 60 mg elemental/day | Oral iron 120 mg/day or IV iron | IV iron; consider transfusion if symptomatic |
| Monitoring | CBC at 4 weeks | CBC at 2-4 weeks | CBC weekly; ferritin at 4-6 weeks |

**IV Iron Preparations in Pregnancy:**
| Agent | Dose | Infusion Time | Advantage |
|-------|------|--------------|-----------|
| Iron sucrose | 200-300 mg per session | 15-30 min | Well-studied in pregnancy |
| Ferric carboxymaltose (Injectafer) | 750 mg single dose (repeat x1) | 15 min | Fewer total infusions needed |
| Low-molecular-weight iron dextran | Total dose infusion (up to 1,000 mg) | 1-4 hours | Single visit; requires test dose |
| Ferumoxytol | 510 mg x 2 doses | 15 min | Fast infusion; MRI interference |

**Preeclampsia Prevention Through Nutrition**
| Intervention | Evidence |
|-------------|---------|
| Calcium supplementation (1-2 g/day) | WHO: reduces preeclampsia in low-calcium populations (RR 0.45); less clear in calcium-replete populations |
| Low-dose aspirin | Not nutritional; but interacts with omega-3/thromboxane pathway |
| Vitamin D (adequate levels) | Observational: deficiency associated with preeclampsia; RCTs inconclusive |
| L-arginine | Precursor to nitric oxide; small trials show benefit; not standard |
| Antioxidants (vitamin C + E) | Multiple large RCTs: NO benefit for preeclampsia prevention; not recommended |

**Nutritional Management of Hyperemesis Gravidarum**
| Phase | Approach |
|-------|---------|
| Acute (dehydration) | IV fluids (normal saline with KCl); thiamine 100 mg IV before dextrose (prevent Wernicke); correct electrolytes |
| Stabilization | Advance diet slowly; small frequent meals; avoid triggers; anti-emetics |
| Refractory | Enteral feeding (NG or NJ tube); TPN only as last resort (infection, liver dysfunction risk) |
| Micronutrient monitoring | Thiamine, electrolytes, liver function, ketones |

**Wernicke Encephalopathy Risk:**
- Thiamine deficiency from prolonged vomiting + dextrose administration
- Triad: confusion, ataxia, ophthalmoplegia
- Prevention: give thiamine BEFORE any dextrose-containing IV fluids in hyperemesis
- Irreversible if not treated promptly

**Microbiome and Prenatal Nutrition**
| Factor | Effect on Maternal/Infant Microbiome |
|--------|--------------------------------------|
| High-fiber diet | Increased microbial diversity; higher SCFA production; anti-inflammatory |
| Probiotic supplementation | May reduce GDM risk, preeclampsia risk; strain-specific effects |
| Fermented foods | Increase microbial diversity; beneficial metabolites |
| Western diet (high fat, low fiber) | Reduced diversity; pro-inflammatory; associated with adverse pregnancy outcomes |
| Prebiotic supplementation (inulin, FOS) | Supports Bifidobacterium and Lactobacillus growth |`,
      keyTerms: [
        { term: 'mTOR nutrient sensing', definition: 'Mechanistic target of rapamycin; a placental signaling pathway that integrates nutrient availability, energy status, and growth factor signals to regulate amino acid transporter expression and fetal growth' },
        { term: 'nutrigenomics', definition: 'The study of how genetic variation affects individual nutrient requirements and metabolism; examples include MTHFR variants affecting folate metabolism and FADS variants affecting omega-3 synthesis' },
        { term: 'Wernicke encephalopathy', definition: 'Neurological emergency caused by thiamine (vitamin B1) deficiency; in pregnancy, can be precipitated by hyperemesis gravidarum combined with dextrose administration without thiamine supplementation' },
        { term: 'ferric carboxymaltose', definition: 'IV iron preparation allowing rapid high-dose iron replacement (750 mg per infusion); increasingly used in pregnancy for moderate-severe iron deficiency when oral iron is insufficient or not tolerated' },
        { term: 'PEMT variant', definition: 'Phosphatidylethanolamine N-methyltransferase gene polymorphism present in approximately 75% of women; reduces endogenous choline synthesis and increases dietary choline requirements during pregnancy' },
        { term: 'FADS1/FADS2', definition: 'Fatty acid desaturase genes controlling conversion of essential fatty acids to long-chain PUFAs (DHA, ARA); common variants reduce endogenous synthesis, making dietary DHA intake more critical' },
      ],
      clinicalNotes:
        'In hyperemesis gravidarum, always administer thiamine before any dextrose-containing IV fluids to prevent Wernicke encephalopathy; this is a commonly missed step. Ferric carboxymaltose has transformed management of moderate-severe iron deficiency anemia in pregnancy, reducing the need for multiple infusion visits. The PEMT variant affecting choline synthesis is present in the majority of women, yet most prenatal vitamins contain little or no choline; recommending egg consumption or choline supplementation (450 mg/day) should be standard. Antioxidant supplementation (vitamins C and E) for preeclampsia prevention has been definitively shown to be ineffective in multiple large RCTs and should not be recommended.',
    },
    5: {
      level: 5,
      summary:
        'Expert prenatal nutrition integrates placental nutrient transport molecular biology, developmental origins of health and disease (DOHaD), precision nutrition guided by metabolomics and genomics, global food fortification policy, and translational research on maternal diet and offspring epigenetic programming.',
      explanation: `**Developmental Origins of Health and Disease (DOHaD)**
| Concept | Evidence |
|---------|---------|
| Barker hypothesis | Fetal undernutrition programs cardiovascular disease, diabetes, and obesity in adulthood |
| Dutch Hunger Winter (1944-45) | Famine exposure in early pregnancy: increased cardiovascular disease and schizophrenia; late pregnancy: glucose intolerance and small size |
| Thrifty phenotype | Nutrient-deprived fetus programs energy-conserving metabolism; mismatch with postnatal abundance drives metabolic disease |
| Predictive adaptive response | Fetus "predicts" postnatal environment based on maternal nutrition; mismatch increases disease risk |
| Epigenetic mechanisms | DNA methylation, histone modification, and miRNA changes at IGF2, LEP, RXRA, and HIF3A loci |

**Placental Transport: Molecular Regulation**
| Regulatory Factor | Target | Mechanism |
|-------------------|--------|-----------|
| Insulin | System A, GLUT | mTOR activation; upregulates transporter expression |
| IGF-1 | System A, System L | Stimulates amino acid transporter activity via PI3K/Akt |
| Cortisol | 11beta-HSD2 | Placental enzyme converts cortisol to inactive cortisone; protects fetus |
| Leptin | GLUT1, fatty acid transporters | Autocrine/paracrine regulation of placental nutrient handling |
| Adiponectin | System A (inverse) | Inhibits insulin-stimulated amino acid transport; reduced in obese/GDM pregnancies |
| Placental miRNAs | Transporter mRNA stability | Post-transcriptional regulation of transporter expression |

**Precision Nutrition in Pregnancy**
| Approach | Status |
|----------|--------|
| Metabolomic profiling | Identifies biomarker patterns predicting GDM, preeclampsia, preterm birth; allows targeted intervention |
| Pharmacogenomic-guided supplementation | MTHFR genotype-guided folate form; FADS genotype-guided DHA dosing |
| Microbiome-guided nutrition | Gut microbiome composition predicts individual glycemic response to foods (Zeevi model); not yet validated in pregnancy |
| CGM-guided dietary counseling | Real-time glucose data to personalize carbohydrate recommendations |
| AI-assisted dietary planning | Machine learning models integrating genetics, microbiome, metabolomics, and dietary data |

**Global Micronutrient Deficiency and Fortification**
| Nutrient | Global Burden | Fortification Strategy |
|----------|-------------|----------------------|
| Iron | 40% of pregnant women anemic worldwide | Flour fortification; supplementation programs |
| Folate | NTDs: 300,000 cases/year globally | Mandatory folic acid flour fortification in 87 countries; reduces NTDs by 25-50% |
| Iodine | 1.8 billion at risk; 19 million newborns/year at risk of brain damage | Universal salt iodization; 88% of global households use iodized salt |
| Vitamin A | 19 million pregnant women deficient globally | Supplementation in high-risk areas; fortification of cooking oil and sugar |
| Zinc | 17% of global population at risk | Crop biofortification (HarvestPlus); supplementation |

**Emerging Research Areas**
| Area | Findings |
|------|---------|
| Maternal ketone metabolism | Mild ketonemia in pregnancy is physiological; fetal brain can use ketones; implications for low-carb diets |
| Circadian nutrition | Timing of nutrient intake affects placental clock genes and fetal growth patterns |
| One-carbon metabolism | Folate, B12, choline, betaine, and methionine form an interconnected metabolic network; deficiency in any component affects all |
| Environmental chemicals and nutrition | BPA, phthalates, and pesticides can disrupt nutrient absorption and metabolism; organic produce may reduce exposure |
| Maternal microbiome transfer | Vaginal delivery + breastfeeding optimizes infant microbiome colonization; maternal diet during pregnancy shapes transferred microbiome |
| Human milk composition programming | Maternal diet during pregnancy influences breast milk fatty acid profile, HMO composition, and micronutrient content |

**Advanced Supplementation Evidence**
| Supplement | Evidence Summary |
|-----------|-----------------|
| Multiple micronutrient supplements (MMS) | WHO: MMS superior to iron-folic acid alone for reducing SGA and low birth weight in LMICs; UNIMMAP formulation |
| Probiotics (L. rhamnosus GG) | RCT evidence for GDM reduction in some populations; effects are strain-specific |
| Vitamin K | Neonatal IM injection standard; maternal supplementation does not replace neonatal prophylaxis |
| Magnesium | Low evidence for pregnancy cramps; antenatal MgSO4 is neuroprotective in preterm delivery (separate indication) |
| Coenzyme Q10 | Small trials suggest preeclampsia risk reduction; insufficient evidence for routine use |`,
      keyTerms: [
        { term: 'Barker hypothesis', definition: 'The foundational theory of DOHaD proposing that adverse fetal nutrition permanently programs physiology and metabolism, increasing risk of cardiovascular disease, type 2 diabetes, and obesity in adult life' },
        { term: 'Dutch Hunger Winter', definition: 'Natural experiment from the 1944-45 famine in the Netherlands; demonstrated timing-specific effects of prenatal malnutrition on adult disease risk, providing seminal evidence for developmental programming' },
        { term: 'UNIMMAP', definition: 'UNICEF/WHO multiple micronutrient supplement formulation containing 15 vitamins and minerals; superior to iron-folic acid alone for reducing small-for-gestational-age births in low-income settings' },
        { term: 'one-carbon metabolism', definition: 'Interconnected metabolic network involving folate, vitamin B12, choline, betaine, and methionine that provides methyl groups for DNA methylation, nucleotide synthesis, and amino acid metabolism' },
        { term: 'predictive adaptive response', definition: 'Evolutionary concept where the fetus adjusts its developmental trajectory based on maternal nutritional cues to match the predicted postnatal environment; mismatch between prenatal and postnatal environments drives metabolic disease' },
      ],
      clinicalNotes: `**Expert Integration:**
- The DOHaD paradigm fundamentally connects prenatal nutrition to lifelong health outcomes. The strongest evidence comes from the Dutch Hunger Winter cohort and the Pune Maternal Nutrition Study, showing that both undernutrition and overnutrition program offspring metabolic disease.
- Multiple micronutrient supplementation (MMS) is now WHO-recommended over iron-folic acid alone in LMIC settings, based on evidence from the MMS in Pregnancy outcomes pooled analysis showing reduced SGA by 12%.
- Precision prenatal nutrition guided by metabolomics, pharmacogenomics, and CGM represents the frontier of clinical care. MTHFR-guided folate form selection and FADS-guided DHA dosing are the most immediately translatable applications.
- Mandatory folic acid fortification is one of the most successful public health nutrition interventions ever implemented, yet 100+ countries still lack fortification policies. Advocacy for global fortification is a public health priority.
- The one-carbon metabolism network concept highlights that folate supplementation alone may be insufficient; choline and B12 status must be addressed concurrently, particularly in vegan women and populations with high B12 deficiency prevalence.`,
    },
  },

  media: [],

  citations: [
    { id: 'acog-nutrition-2022', type: 'guideline', title: 'Nutrition During Pregnancy: ACOG Committee Opinion', authors: ['ACOG Committee on Obstetric Practice'], source: 'Obstetrics & Gynecology', url: 'https://doi.org/10.1097/AOG.0000000000004966' },
    { id: 'cochrane-omega3-2018', type: 'article', title: 'Omega-3 Fatty Acid Addition During Pregnancy', authors: ['Middleton, P.', 'Gomersall, J.C.'], source: 'Cochrane Database of Systematic Reviews', url: 'https://doi.org/10.1002/14651858.CD003402.pub3' },
    { id: 'barker-lancet-1989', type: 'article', title: 'Weight in Infancy and Death from Ischaemic Heart Disease', authors: ['Barker, D.J.P.', 'Osmond, C.'], source: 'The Lancet', url: 'https://doi.org/10.1016/S0140-6736(89)92530-2' },
  ],

  crossReferences: [
    { targetId: 'topic-gestational-diabetes', targetType: 'topic', relationship: 'related', label: 'Gestational Diabetes' },
    { targetId: 'topic-breastfeeding-support', targetType: 'topic', relationship: 'related', label: 'Breastfeeding Support' },
  ],

  tags: {
    systems: ['digestive', 'endocrine', 'reproductive'],
    topics: ['obstetrics', 'nutrition', 'preventive medicine', 'public health'],
    keywords: ['prenatal nutrition', 'folic acid', 'iron', 'DHA', 'prenatal vitamin', 'weight gain', 'food safety', 'pregnancy diet', 'micronutrients'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['obstetrics', 'preventive medicine', 'family medicine'] },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
