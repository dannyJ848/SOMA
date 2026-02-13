/**
 * Nutrition and Supplements - Educational Content
 *
 * Comprehensive content covering nutrition science, dietary supplements,
 * evidence-based evaluation, and distinguishing science from marketing claims.
 */

import { EducationalContent } from "../types";

export const nutritionSupplementsContent: EducationalContent = {
  id: "integrative-medicine-nutrition-supplements",
  type: "concept",
  name: "Nutrition and Supplements",
  alternateNames: [
    "Dietary Supplements",
    "Nutritional Supplements",
    "Vitamins and Minerals",
    "Nutraceuticals",
  ],

  levels: {
    1: {
      level: 1,
      summary:
        "Vitamins, minerals, and other supplements are products people take to add nutrients to their diet. While some can be helpful, getting nutrients from food is usually best.",
      explanation: `**What are dietary supplements?**
Dietary supplements are products you take by mouth that contain ingredients meant to add to your diet. They come in many forms:
- Pills and tablets
- Capsules
- Powders
- Liquids
- Gummies

**Common types of supplements:**

*Vitamins:*
- Vitamin D: For bones and immune system
- Vitamin C: For immune health and healing
- B vitamins: For energy and nerves
- Vitamin A: For eyes and skin

*Minerals:*
- Calcium: For strong bones
- Iron: For healthy blood
- Zinc: For immune system
- Magnesium: For muscles and nerves

*Other supplements:*
- Fish oil: For heart and brain
- Probiotics: For gut health
- Protein powders: For building muscle
- Fiber: For digestion

**Important things to know:**

*Food first:*
Most people can get all the nutrients they need from eating a variety of healthy foods. Supplements work best when you cannot get enough from food.

*More is not always better:*
Taking too much of some vitamins and minerals can actually hurt you. For example, too much vitamin A can be harmful.

*Not all supplements are created equal:*
Some products do not contain what the label says. Look for products tested by outside groups.

*Talk to your doctor:*
Before taking any supplement, especially if you:
- Take medicines
- Have health problems
- Are pregnant or nursing
- Are planning surgery`,
      keyTerms: [
        {
          term: "vitamin",
          definition: "A nutrient your body needs in small amounts to work properly",
        },
        {
          term: "mineral",
          definition: "A nutrient from the earth that your body needs for many functions",
        },
        {
          term: "supplement",
          definition: "A product taken to add nutrients to what you eat",
        },
      ],
      analogies: [
        "Think of supplements like backup singers - they can support the main act (your diet), but they cannot replace it.",
        "Taking supplements without eating well is like putting premium gas in a car with a broken engine - it will not fix the real problem.",
      ],
      examples: [
        "A person who does not drink milk might need calcium supplements to keep their bones strong.",
        "Someone who lives in a cloudy climate and stays indoors a lot might benefit from vitamin D supplements.",
      ],
    },
    2: {
      level: 2,
      summary:
        "Dietary supplements include vitamins, minerals, amino acids, enzymes, and botanicals regulated under DSHEA. Evidence for benefits varies widely, and understanding deficiency versus optimization is key to appropriate use.",
      explanation: `**Supplement Categories:**

*Vitamins:*
- Fat-soluble (A, D, E, K): Stored in body, toxicity possible
- Water-soluble (B vitamins, C): Excreted if excess, daily intake needed

*Minerals:*
- Macro minerals: Calcium, magnesium, potassium, sodium
- Trace minerals: Iron, zinc, copper, selenium, iodine

*Amino acids and proteins:*
- Essential amino acids
- Branched-chain amino acids (BCAAs)
- Creatine
- Protein powders (whey, casein, plant-based)

*Other categories:*
- Omega-3 fatty acids
- Probiotics and prebiotics
- Fiber supplements
- Enzymes

**When Supplements May Be Needed:**

*Documented deficiency:*
- Iron deficiency anemia
- Vitamin D insufficiency
- B12 deficiency (especially in vegans, elderly)
- Folate during pregnancy

*Increased requirements:*
- Pregnancy and lactation
- Malabsorption conditions
- Post-bariatric surgery
- Certain medications that deplete nutrients

*Dietary restrictions:*
- Vegans (B12, potentially iron, calcium, omega-3s)
- Dairy-free diets (calcium, vitamin D)
- Limited sun exposure (vitamin D)

**Evidence Evaluation:**

*Supplements with good evidence:*
- Folic acid: Neural tube defect prevention
- Vitamin D: Bone health in deficiency
- Calcium: Bone health (with vitamin D)
- Iron: Iron deficiency anemia
- Omega-3s: Triglyceride reduction (high doses)

*Supplements with limited evidence:*
- Multivitamins: Not proven to prevent disease in healthy adults
- Antioxidants: No benefit, possible harm in some studies
- Most "immune boosters": Little evidence for healthy people

**Marketing vs. Science:**

*Red flags in marketing:*
- "Breakthrough" or "miracle" claims
- Cures or treats diseases
- "All natural" as a safety guarantee
- Celebrity endorsements
- "Doctors do not want you to know"

*What science actually shows:*
- Few supplements benefit healthy people with adequate diets
- Specific deficiencies require specific treatments
- Megadoses rarely help and may harm
- Quality varies significantly between products

**Quality Assurance:**

*Third-party verification:*
- USP Verified
- NSF International
- ConsumerLab
- Informed Choice/Sport

*What verification means:*
- Contains what label says
- No harmful contaminants
- Proper manufacturing processes
- Does NOT guarantee effectiveness`,
      keyTerms: [
        {
          term: "DSHEA",
          definition: "Dietary Supplement Health and Education Act of 1994 - law that regulates supplements differently than drugs",
        },
        {
          term: "RDA",
          definition: "Recommended Dietary Allowance - the daily amount of a nutrient needed by most healthy people",
        },
        {
          term: "UL",
          definition: "Tolerable Upper Intake Level - the maximum daily amount unlikely to cause harm",
        },
        {
          term: "bioavailability",
          definition: "How well a nutrient is absorbed and used by the body",
        },
      ],
      analogies: [
        "The body handles excess water-soluble vitamins like draining overflow from a sink - it just goes out. But fat-soluble vitamins are like filling a storage tank - too much stays and can cause problems.",
        "Third-party testing for supplements is like home inspection when buying a house - it does not guarantee the house is right for you, but it confirms basic quality and safety.",
      ],
      examples: [
        "A vegan who does not eat any animal products needs B12 supplements because this vitamin is only found naturally in animal foods.",
        "A woman planning pregnancy should take folic acid to reduce the risk of neural tube defects in her baby.",
      ],
    },
    3: {
      level: 3,
      summary:
        "Evidence-based supplement use requires understanding of nutrient bioavailability, pharmacokinetics, drug-nutrient interactions, and critical appraisal of research. Most healthy individuals with adequate diets do not benefit from routine supplementation.",
      explanation: `**Nutrient Bioavailability:**

*Factors affecting absorption:*
- Chemical form (e.g., ferrous vs. ferric iron)
- Matrix effects (food vs. isolated supplement)
- Nutrient interactions (calcium inhibits iron absorption)
- Individual factors (age, gut health, genetics)
- Timing (with/without food)

*Bioavailability examples:*
- Iron: Heme (meat) > non-heme; enhanced by vitamin C
- Calcium: Carbonate needs acid, citrate does not
- Magnesium: Oxide poorly absorbed vs. glycinate
- Vitamin D: D3 more effective than D2
- B12: Sublingual may help in malabsorption

**Drug-Nutrient Interactions:**

*Medications affecting nutrients:*
- PPIs: Reduce B12, magnesium, calcium absorption
- Metformin: Reduces B12 absorption
- Diuretics: Affect potassium, magnesium
- Antibiotics: Kill gut bacteria producing vitamin K
- Anticonvulsants: Increase vitamin D metabolism

*Nutrients affecting medications:*
- Vitamin K: Opposes warfarin
- Calcium: Reduces thyroid medication absorption
- Fiber: Can reduce drug absorption
- Grapefruit: Inhibits CYP3A4 (though technically a food)

**Evidence by Supplement Category:**

*Vitamin D:*
- Deficiency (<20 ng/mL): Supplementation clearly beneficial
- Insufficiency (20-30 ng/mL): Benefits debated
- Optimal levels: Controversy exists
- High doses (>4000 IU): May increase fall risk in elderly

*Omega-3 Fatty Acids:*
- Triglyceride reduction: 2-4 g/day prescription omega-3s
- Cardiovascular prevention: Mixed evidence
- EPA vs. DHA: Different effects
- Fish vs. supplements: Fish may have additional benefits

*Probiotics:*
- Strain-specific effects
- Antibiotic-associated diarrhea: Some evidence
- IBS: Modest benefits
- Immune function: Limited evidence
- "General gut health": Marketing exceeds science

*Multivitamins:*
- Physicians' Health Study II: No CVD or cancer benefit
- May provide "nutritional insurance"
- Not a substitute for healthy diet
- Prenatal vitamins: Different formulation, specific purpose

**Special Populations:**

*Pregnancy:*
- Folic acid: 400-800 mcg before conception and early pregnancy
- Iron: Often needed due to increased demands
- DHA: Brain development
- Avoid: Excess vitamin A (teratogenic)

*Elderly:*
- B12: Absorption decreases with age
- Vitamin D: Reduced skin synthesis
- Calcium: Bone health
- Caution with calcium + D: Possible CVD risk in some studies

*Athletes:*
- Iron: Common deficiency, especially in female athletes
- Vitamin D: Often low
- Protein: Timing and amount evidence
- Creatine: Performance enhancement for specific activities
- Most "sports supplements": Little evidence

**Critical Appraisal:**

*Study quality issues:*
- Observational vs. interventional
- Industry funding
- Surrogate vs. clinical endpoints
- Dose and duration
- Population studied

*Red flags in research:*
- Small sample sizes
- Uncontrolled studies
- Biomarker outcomes only
- Conflict of interest
- Publication in non-peer-reviewed venues`,
      keyTerms: [
        {
          term: "bioavailability",
          definition: "Fraction of administered dose that reaches systemic circulation in active form",
        },
        {
          term: "nutrient-nutrient interaction",
          definition: "When one nutrient affects absorption or metabolism of another",
        },
        {
          term: "surrogate endpoint",
          definition: "Biomarker used instead of clinical outcome - may not translate to health benefits",
        },
        {
          term: "number needed to treat (NNT)",
          definition: "Number of patients who need treatment for one to benefit - helps assess clinical significance",
        },
      ],
      clinicalNotes:
        "Key clinical points: 1) Test before supplementing when feasible (vitamin D, B12, iron studies), 2) Address deficiencies with appropriate doses and forms, 3) Most healthy patients with balanced diets do not need multivitamins, 4) Be aware of drug-nutrient interactions, especially with PPIs, metformin, warfarin, and thyroid medications, 5) Recommend third-party verified products.",
    },
    4: {
      level: 4,
      summary:
        "Advanced supplement evaluation integrates pharmacokinetic principles, genetic factors affecting nutrient metabolism, interpretation of biochemical markers, and evidence-based prescribing for specific clinical scenarios.",
      explanation: `**Pharmacokinetics of Nutrients:**

*Absorption mechanisms:*
- Active transport (B12 via intrinsic factor)
- Facilitated diffusion (vitamin C via SVCT)
- Passive diffusion (fat-soluble vitamins)
- Carrier-mediated (iron via DMT1, ferroportin)

*Distribution and storage:*
- Fat-soluble vitamins: Adipose tissue, liver
- B12: Liver stores (years of supply)
- Iron: Ferritin, hemosiderin
- Calcium: Bone (99%), intracellular, plasma

*Metabolism and excretion:*
- Vitamin D: Hepatic 25-hydroxylation, renal 1-alpha hydroxylation
- Folate: Reduction, methylation
- B12: Enterohepatic circulation
- Minerals: Renal and fecal excretion

**Genetic Factors:**

*MTHFR polymorphisms:*
- C677T and A1298C variants
- Reduced folate metabolism
- Clinical significance debated
- Methylfolate may help some patients

*Vitamin D receptor (VDR) polymorphisms:*
- Affect response to supplementation
- Influence bone density response
- Research ongoing

*Other relevant variants:*
- FADS: Omega-3 conversion
- BCO1: Beta-carotene to vitamin A
- FUT2: B12 status
- SLC23A1: Vitamin C transport

**Laboratory Interpretation:**

*Vitamin D:*
- 25(OH)D: Best marker of status
- 1,25(OH)2D: Not useful for deficiency screening
- <20 ng/mL: Deficiency
- 20-30 ng/mL: Insufficiency
- Assay variability exists

*B12 assessment:*
- Serum B12: Can be normal despite deficiency
- Methylmalonic acid (MMA): More sensitive
- Homocysteine: Rises with B12 and folate deficiency
- Holotranscobalamin: Earliest marker

*Iron studies:*
- Ferritin: Storage iron (affected by inflammation)
- TIBC/transferrin: Increases in deficiency
- Serum iron: Variable, less useful alone
- sTfR: Not affected by inflammation
- Ferritin + CRP: Account for acute phase reactant

**Clinical Scenarios:**

*Post-bariatric surgery:*
- High risk for multiple deficiencies
- Lifelong monitoring required
- B12: Often need injections
- Iron: May need IV iron
- Fat-soluble vitamins: Malabsorption varies by procedure
- Calcium and vitamin D: Critical for bone health

*Chronic kidney disease:*
- Vitamin D: Active form often needed (calcitriol)
- Iron: Complex assessment (functional deficiency)
- Phosphorus: Often need binders
- Calcimimetics: Affect PTH and calcium

*Inflammatory conditions:*
- Ferritin interpretation complicated
- Vitamin D levels may be low due to inflammation
- B vitamins: Increased utilization
- Omega-3s: Anti-inflammatory potential

*Malabsorption syndromes:*
- Celiac: Iron, calcium, vitamin D, folate, B12
- Crohn's: B12 (terminal ileum), fat-soluble vitamins
- Short bowel: Depends on segment removed
- Pancreatic insufficiency: Fat-soluble vitamins

**Drug Interactions - Detailed:**

*Warfarin and vitamin K:*
- Consistent intake more important than avoidance
- Sudden changes affect INR
- Supplements should be disclosed
- Some multivitamins contain vitamin K

*Thyroid medications:*
- Calcium, iron, magnesium reduce absorption
- Separate by 4 hours
- Coffee also reduces absorption
- Consistency in timing important

*Bisphosphonates:*
- Calcium, magnesium, iron, aluminum reduce absorption
- Take with water only
- 30-60 minutes before food
- Separate from supplements

**Evidence Synthesis:**

*Cardiovascular outcomes:*
- VITAL trial: Vitamin D no benefit for CVD
- REDUCE-IT: High-dose EPA reduced events (prescription omega-3)
- STRENGTH: Omega-3 carboxylic acids no benefit
- Calcium controversy: Some studies suggest CVD risk

*Cancer prevention:*
- SELECT trial: Selenium and vitamin E no benefit, possible harm
- VITAL: Vitamin D no cancer prevention in general population
- Observational data differs from trial results

*Cognitive function:*
- B vitamins: May slow atrophy in elevated homocysteine
- Vitamin D: Insufficient evidence
- Omega-3s: Mixed results`,
      keyTerms: [
        {
          term: "MTHFR",
          definition: "Methylenetetrahydrofolate reductase - enzyme in folate metabolism with common genetic variants",
        },
        {
          term: "holotranscobalamin",
          definition: "Bioavailable B12 bound to transcobalamin - earliest marker of deficiency",
        },
        {
          term: "sTfR",
          definition: "Soluble transferrin receptor - iron status marker not affected by inflammation",
        },
        {
          term: "functional iron deficiency",
          definition: "Insufficient iron availability for erythropoiesis despite adequate stores (common in CKD)",
        },
      ],
      clinicalNotes:
        "Approach to supplement prescribing: 1) Identify clinical indication and evidence level, 2) Choose appropriate form for bioavailability, 3) Consider genetic factors when relevant, 4) Use proper laboratory assessment, 5) Check for drug-nutrient interactions, 6) Set monitoring parameters, 7) Reassess periodically. High-yield scenarios: post-bariatric, CKD, malabsorption, pregnancy, and elderly patients require proactive assessment.",
    },
    5: {
      level: 5,
      summary:
        "Comprehensive nutrition and supplementation practice requires integration of nutrigenomics, precision nutrition approaches, regulatory science, public health implications, and leadership in evidence-based policy development.",
      explanation: `**Precision Nutrition:**

*Nutrigenomics applications:*
- MTHFR-guided folate supplementation
- APOE and fat metabolism
- FTO and weight management response
- CYP variants and vitamin D metabolism
- Personalized recommendations: Promise vs. current evidence

*Metabolomics:*
- Comprehensive nutritional assessment
- Biomarker discovery
- Response prediction
- Research tool vs. clinical application

*Microbiome considerations:*
- Individual variation in nutrient metabolism
- Probiotic strain specificity
- Prebiotic effects
- Fecal transplant for recurrent C. diff (not supplementation)

**Regulatory Landscape:**

*DSHEA framework analysis:*
- Structure/function claims vs. disease claims
- New Dietary Ingredient (NDI) requirements
- FDA enforcement capacity
- FTC advertising oversight
- State regulation variation

*International comparison:*
- EU: Health claims regulation (EFSA evaluation)
- Canada: Natural Health Products framework
- Australia: TGA complementary medicines
- Codex Alimentarius standards

*Quality assurance evolution:*
- cGMP requirements (2007)
- Third-party certification programs
- Supply chain integrity
- DNA barcoding for botanicals
- Blockchain applications

**Public Health Considerations:**

*Fortification policy:*
- Folic acid: Neural tube defect prevention
- Vitamin D: Controversy over optimal levels
- Iodine: Global deficiency prevention
- Iron: Benefits and risks

*Population-level evidence:*
- Most supplements: No benefit in well-nourished populations
- Targeted interventions: Pregnancy, elderly, specific deficiencies
- Harm potential: Over-supplementation risks

*Health equity:*
- Supplement access and cost
- Marketing targeting vulnerable populations
- Cultural considerations
- Evidence-based public health messaging

**Research Priorities:**

*NCCIH strategic plan alignment:*
- Mechanism studies
- Biomarker development
- Personalized approaches
- Safety monitoring
- Implementation research

*Key research gaps:*
- Long-term safety data
- Genetic modifier effects
- Optimal dosing strategies
- Real-world effectiveness
- Cost-effectiveness analyses

*Trial design considerations:*
- Baseline status measurement
- Appropriate endpoints
- Duration adequacy
- Population selection
- Pragmatic vs. explanatory trials

**Clinical Leadership:**

*Evidence-based practice:*
- Systematic review interpretation
- Guideline development and application
- Quality improvement initiatives
- Provider education programs

*Patient communication:*
- Health literacy considerations
- Shared decision-making
- Marketing claim debunking
- Disclosure encouragement

*Health system integration:*
- EHR documentation
- Clinical decision support
- Pharmacist collaboration
- Registered dietitian referral

**Advanced Clinical Scenarios:**

*Refeeding syndrome:*
- Phosphate, potassium, magnesium depletion
- Thiamine requirement
- Monitoring protocol
- Prevention strategies

*Parenteral nutrition:*
- Micronutrient requirements
- Monitoring parameters
- Trace element considerations
- Transition to enteral/oral

*Critical illness:*
- Altered requirements
- Immune-enhancing formulas: Evidence mixed
- Antioxidant supplementation: Generally not recommended
- Thiamine in sepsis

*Oncology:*
- Antioxidant controversy during treatment
- Cachexia management
- Specific deficiency risk
- Survivorship considerations

**Future Directions:**

*Emerging technologies:*
- AI-driven personalization
- Continuous monitoring (CGM models for nutrients)
- Digital therapeutics integration
- Telemedicine nutrition counseling

*Policy evolution:*
- Mandatory adverse event reporting
- Pre-market safety requirements
- Advertising standards
- Third-party testing requirements

*Research evolution:*
- Real-world evidence integration
- Pragmatic trial designs
- International collaboration
- Open science initiatives

**Decision Framework:**

*Prescribing checklist:*
1. Clear indication with evidence support
2. Appropriate form and dose
3. Drug interaction check
4. Quality product recommendation
5. Monitoring plan established
6. Duration defined
7. Reassessment scheduled

*When NOT to supplement:*
- Healthy diet with adequate intake
- Marketing-driven "optimization"
- Megadose antioxidants
- Unproven "anti-aging" protocols
- Products with quality concerns

*Referral indications:*
- Complex malabsorption
- Eating disorders
- Refeeding risk
- Multiple deficiencies
- Failure of standard approaches`,
      keyTerms: [
        {
          term: "nutrigenomics",
          definition: "Study of how genetic variations affect nutrient metabolism and response to dietary interventions",
        },
        {
          term: "EFSA",
          definition: "European Food Safety Authority - evaluates health claims for foods and supplements in EU",
        },
        {
          term: "refeeding syndrome",
          definition: "Metabolic disturbances during nutrition reintroduction after starvation, involving electrolyte shifts",
        },
        {
          term: "precision nutrition",
          definition: "Tailoring dietary recommendations based on individual genetics, microbiome, and metabolomics",
        },
      ],
      clinicalNotes: `Summary for clinical practice:

Core Principles:
1. Food first - supplements supplement, not replace
2. Test before treating when possible
3. Treat documented deficiency with appropriate forms/doses
4. Consider drug-nutrient interactions
5. Recommend verified products

High-Yield Clinical Scenarios:
- Pregnancy: Folic acid, prenatal vitamins
- Post-bariatric: Comprehensive protocol
- CKD: Active vitamin D, iron management
- Malabsorption: Targeted replacement
- Elderly: B12, vitamin D, calcium

Red Flags - When to Avoid:
- Megadose antioxidants
- "Immune boosters" without evidence
- Products making disease claims
- Unverified quality
- Interactions with critical medications

Resources:
- Office of Dietary Supplements (NIH)
- Linus Pauling Institute Micronutrient Center
- Natural Medicines Database
- Academy of Nutrition and Dietetics

System-Level Improvements:
- Integrate RD consultation
- EHR supplement documentation
- Clinical decision support
- Quality product lists
- Patient education materials`,
    },
  },

  media: [
    {
      id: "vitamin-absorption-diagram",
      type: "diagram",
      filename: "vitamin_absorption.svg",
      title: "Vitamin Absorption Mechanisms",
      description: "Diagram showing absorption pathways for different vitamin types",
    },
    {
      id: "supplement-evaluation-checklist",
      type: "diagram",
      filename: "supplement_evaluation_checklist.svg",
      title: "Supplement Evaluation Checklist",
      description: "Clinical decision support for supplement assessment",
    },
  ],

  citations: [
    {
      id: "ods-nih",
      type: "website",
      title: "Office of Dietary Supplements",
      source: "National Institutes of Health",
      url: "https://ods.od.nih.gov/",
    },
    {
      id: "lpi-micronutrients",
      type: "website",
      title: "Micronutrient Information Center",
      source: "Linus Pauling Institute, Oregon State University",
      url: "https://lpi.oregonstate.edu/mic",
    },
    {
      id: "uspstf-supplements",
      type: "website",
      title: "Vitamin, Mineral, and Multivitamin Supplementation",
      source: "U.S. Preventive Services Task Force",
      url: "https://www.uspreventiveservicestaskforce.org/",
    },
  ],

  crossReferences: [
    {
      targetId: "integrative-medicine-herbal-supplements",
      targetType: "concept",
      relationship: "related",
      label: "Herbal Supplements",
    },
    {
      targetId: "integrative-medicine-evidence-overview",
      targetType: "concept",
      relationship: "parent",
      label: "Evidence-Based Complementary Therapies",
    },
    {
      targetId: "nutrition-basics",
      targetType: "concept",
      relationship: "related",
      label: "Nutrition Basics",
    },
  ],

  tags: {
    systems: ["integrative", "gastrointestinal", "endocrine"],
    topics: [
      "nutrition",
      "dietary supplements",
      "vitamins",
      "minerals",
      "patient safety",
      "evidence-based medicine",
    ],
    clinicalRelevance: "high",
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ["medicine", "family medicine", "preventive medicine"],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: "published",
};

export default nutritionSupplementsContent;
