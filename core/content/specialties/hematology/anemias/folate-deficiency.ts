/**
 * Folate Deficiency Anemia - Comprehensive Educational Content
 *
 * A macrocytic anemia resulting from impaired DNA synthesis due to folate
 * (vitamin B9) deficiency, often with rapid onset due to limited body stores.
 */

import { EducationalContent } from '../../../types';

export const folateDeficiencyAnemia: EducationalContent = {
  id: 'condition-folate-deficiency-anemia',
  type: 'condition',
  name: 'Folate Deficiency Anemia',
  alternateNames: ['Folic acid deficiency', 'Vitamin B9 deficiency', 'Megaloblastic anemia'],

  levels: {
    1: {
      level: 1,
      summary: 'Folate deficiency anemia happens when your body does not have enough folate (a B vitamin) to make healthy red blood cells.',
      explanation: `Folate deficiency anemia is like trying to build with materials that run out quickly - your body cannot make enough healthy red blood cells without folate.

**Why Folate Matters:**
Folate is a vitamin (also called B9 or folic acid) that helps your body make DNA and new cells. Without enough folate, red blood cells become too big and do not work properly.

**What Causes It:**
- Not eating enough fruits, vegetables, and grains
- Drinking too much alcohol
- Some medicines
- Pregnancy (baby needs lots of folate)
- Problems absorbing nutrients from food

**Common Signs:**
- Feeling very tired and weak
- Shortness of breath
- Pale skin
- Sore mouth and tongue
- Loss of appetite

**How It's Different from B12 Deficiency:**
Folate deficiency does NOT cause numbness, tingling, or balance problems like B12 deficiency can.

**How It's Treated:**
- Taking folate pills
- Eating more folate-rich foods (leafy greens, beans, oranges)
- Stopping alcohol if that's the cause`,
      keyTerms: [
        { term: 'folate', definition: 'A vitamin found in leafy greens and fruits that your body needs to make new cells', pronunciation: 'FOH-layt' },
        { term: 'folic acid', definition: 'The form of folate found in vitamins and fortified foods' },
        { term: 'DNA', definition: 'The instructions inside every cell that tell it how to work' },
      ],
      analogies: [
        'Think of folate like the paper you need to print instructions. Without paper, the printer cannot make copies of the instructions for new cells.',
        'Red blood cells without folate are like balloons blown up too big - they are larger than normal and do not work as well.',
      ],
      examples: [
        'A person who eats mostly processed foods and few vegetables might develop folate deficiency.',
        'A pregnant woman needs extra folate because her baby is growing rapidly and using lots of it.',
      ],
    },
    2: {
      level: 2,
      summary: 'Folate deficiency causes megaloblastic anemia through impaired DNA synthesis, typically developing within months due to limited body stores, and is distinguished from B12 deficiency by the absence of neurological findings.',
      explanation: `Folate (vitamin B9) deficiency is a common cause of macrocytic anemia that develops relatively quickly compared to B12 deficiency because body stores are limited.

**Pathophysiology:**
Folate is essential for one-carbon metabolism:
- Required for thymidylate synthesis (DNA building block)
- Necessary for purine synthesis
- Involved in amino acid metabolism (homocysteine to methionine)

Without folate:
- DNA synthesis is impaired
- Cells grow larger but cannot divide properly (megaloblastic)
- Rapidly dividing cells (bone marrow, GI tract) are most affected

**Causes:**
- **Dietary deficiency**: Poor diet, alcoholism, elderly
- **Increased requirements**: Pregnancy, lactation, hemolysis, malignancy
- **Malabsorption**: Celiac disease, tropical sprue, IBD, short gut
- **Drugs**: Methotrexate, trimethoprim, phenytoin, sulfasalazine

**Clinical Features:**

*Hematologic:*
- Fatigue, weakness, pallor
- Glossitis (sore, smooth tongue)
- Mild jaundice

*Key Difference from B12 Deficiency:*
- NO neurological findings
- Faster onset (3-4 months vs 3-5 years)
- Responds to folate supplementation

**Laboratory Findings:**
- Macrocytic anemia (MCV >100 fL)
- Low serum folate (<3 ng/mL)
- Low RBC folate (more reliable indicator of stores)
- Elevated homocysteine
- Normal methylmalonic acid (unlike B12 deficiency)
- Hypersegmented neutrophils

**Treatment:**
- Folic acid 1-5 mg PO daily
- Treat underlying cause
- Response is rapid: reticulocytosis in days

**IMPORTANT:** Always rule out B12 deficiency before treating with folate alone - folate can mask B12 deficiency anemia while neurological damage progresses.`,
      keyTerms: [
        { term: 'megaloblastic', definition: 'Large, abnormal red blood cell precursors with immature nuclei due to impaired DNA synthesis', pronunciation: 'meg-ah-loh-BLAS-tik' },
        { term: 'tetrahydrofolate', definition: 'The active form of folate in the body that participates in one-carbon transfers' },
        { term: 'thymidylate', definition: 'A DNA building block (nucleotide) that requires folate for synthesis', pronunciation: 'thy-MID-ih-layt' },
        { term: 'homocysteine', definition: 'An amino acid that accumulates when folate or B12 is deficient', pronunciation: 'hoh-moh-SIS-teen' },
      ],
      analogies: [
        'Folate is like the copy machine at work - without it, cells cannot copy their DNA instructions to make new cells.',
        'Body folate stores are like a small pantry that empties quickly, while B12 stores are like a large freezer that takes years to run out.',
      ],
    },
    3: {
      level: 3,
      summary: 'Folate deficiency results in megaloblastic anemia through impaired thymidylate and purine synthesis, with diagnosis requiring careful distinction from B12 deficiency and attention to the more reliable RBC folate as a marker of tissue stores.',
      explanation: `## Folate Physiology

**Dietary Sources and Requirements:**
- Found in leafy greens, citrus, legumes, fortified grains
- Daily requirement: 400 mcg (600 mcg pregnancy)
- Body stores: 10-15 mg (liver primarily)
- Time to deficiency: 3-4 months without intake

**Absorption and Metabolism:**
- Dietary folates are polyglutamate forms
- Intestinal conjugases convert to monoglutamate
- Absorbed in jejunum via proton-coupled folate transporter (PCFT)
- Circulates as 5-methyltetrahydrofolate (5-methylTHF)
- Cellular polyglutamation retains folate intracellularly

**Functions in One-Carbon Metabolism:**
1. Thymidylate synthase: dUMP to dTMP (requires 5,10-methyleneTHF)
2. Purine synthesis: Carbon atoms for purine ring
3. Methionine synthesis: 5-methylTHF to THF (requires B12)
4. Histidine catabolism: FIGLU to glutamate

## Pathophysiology

**Megaloblastic Change:**
- Impaired thymidylate synthesis
- dUTP accumulates, misincorporated into DNA
- Futile repair cycles damage DNA
- Delayed S-phase progression
- Nuclear-cytoplasmic asynchrony

**Tissue Effects:**
- Bone marrow: Megaloblastic erythropoiesis, ineffective hematopoiesis
- GI tract: Mucosal atrophy (rapidly dividing)
- Pregnancy: Neural tube defects risk

## Etiology

| Category | Examples |
|----------|----------|
| Dietary deficiency | Alcoholism, poverty, elderly, restrictive diets |
| Increased demand | Pregnancy, lactation, chronic hemolysis, malignancy, dialysis |
| Malabsorption | Celiac disease, tropical sprue, IBD, jejunal resection |
| Drug-induced | Methotrexate, trimethoprim, phenytoin, carbamazepine, sulfasalazine |
| Genetic | MTHFR polymorphisms, hereditary folate malabsorption |

**Drug Mechanisms:**
- Methotrexate: Inhibits dihydrofolate reductase
- Trimethoprim: DHFR inhibitor (bacterial selectivity)
- Phenytoin: Impairs absorption and increases catabolism
- Sulfasalazine: Inhibits PCFT

## Diagnosis

**Laboratory Testing:**

| Test | Result | Notes |
|------|--------|-------|
| Serum folate | <3 ng/mL | Reflects recent intake |
| RBC folate | <150 ng/mL | Reflects tissue stores |
| MCV | >100 fL | May be >110 fL |
| Homocysteine | Elevated | Also elevated in B12 deficiency |
| MMA | Normal | Elevated in B12 deficiency |
| LDH | Elevated | Ineffective erythropoiesis |

**Serum vs RBC Folate:**
- Serum folate: Fluctuates with recent intake, can be falsely low with fasting
- RBC folate: Reflects folate status over RBC lifespan (120 days)
- RBC folate more reliable for assessing true deficiency

**Peripheral Smear:**
- Macro-ovalocytes
- Hypersegmented neutrophils
- Anisocytosis, poikilocytosis

**FIGLU Test (Historical):**
- Formiminoglutamic acid excretion after histidine load
- Rarely used today

## Treatment

**Supplementation:**
- Folic acid 1-5 mg PO daily
- Higher doses for malabsorption
- IV available but rarely needed
- Duration depends on cause

**Response Monitoring:**
- Reticulocytosis: Days 3-5, peaks day 7-10
- Hemoglobin: Normalizes over weeks
- Hypersegmented neutrophils: Resolve in 2 weeks

**Special Considerations:**

*Always exclude B12 deficiency:*
- Folate can partially correct anemia
- Neurological damage from B12 deficiency continues
- Check B12 before starting folate

*Pregnancy:*
- Folate critical for neural tube closure (week 3-4)
- Supplementation should begin before conception
- 400 mcg daily for all women of childbearing age
- 4 mg daily for women with prior NTD

*Drug-Induced:*
- Leucovorin (folinic acid) for methotrexate toxicity
- Bypasses blocked DHFR step`,
      keyTerms: [
        { term: 'PCFT', definition: 'Proton-coupled folate transporter; primary intestinal folate absorption pathway' },
        { term: 'thymidylate synthase', definition: 'Enzyme converting dUMP to dTMP for DNA synthesis; requires methylenetetrahydrofolate' },
        { term: 'RBC folate', definition: 'Folate content of red blood cells; reflects tissue stores over 3-4 months, more reliable than serum folate' },
        { term: 'leucovorin', definition: 'Folinic acid; active folate form that bypasses dihydrofolate reductase, used for methotrexate rescue', pronunciation: 'loo-koh-VOR-in' },
        { term: 'FIGLU', definition: 'Formiminoglutamic acid; accumulates in folate deficiency during histidine metabolism' },
      ],
      clinicalNotes: 'Never treat suspected megaloblastic anemia with folate alone without excluding B12 deficiency. RBC folate is a more reliable indicator of tissue stores than serum folate. Women of childbearing age should receive 400 mcg folate daily to prevent neural tube defects.',
    },
    4: {
      level: 4,
      summary: 'Folate deficiency diagnosis and management requires integration of one-carbon metabolism understanding, recognition of drug interactions and genetic polymorphisms, with particular attention to the complex relationship with B12 metabolism and population-level prevention strategies.',
      explanation: `## Advanced Pathophysiology

**One-Carbon Metabolism Network:**

*Folate Cycle:*
\`\`\`
DHF → THF → 5,10-methyleneTHF → 5-methylTHF
         ↓                            ↓
    Purine synthesis            Methionine cycle
    dTMP synthesis              (requires B12)
\`\`\`

*Interconnection with B12:*
- 5-methylTHF requires B12-dependent methionine synthase to regenerate THF
- B12 deficiency "traps" folate as 5-methylTHF
- Explains hematological response to folate in B12 deficiency

**Genetic Considerations:**

*MTHFR Polymorphisms:*
- C677T: 10-15% homozygous in Caucasians
- Reduces MTHFR activity by 70%
- Elevated homocysteine, especially with low folate
- May increase NTD risk
- Thermolabile enzyme variant

*Other Genetic Variants:*
- DHFR variants: Altered methotrexate sensitivity
- PCFT (SLC46A1): Hereditary folate malabsorption
- RFC (SLC19A1): Reduced folate carrier polymorphisms
- Transcobalamin receptor (TCblR/CD320): Affects B12-folate interaction

## Drug-Folate Interactions

**Antifolate Mechanisms:**

| Drug | Mechanism | Clinical Notes |
|------|-----------|----------------|
| Methotrexate | DHFR inhibitor | Dose-dependent; rescue with leucovorin |
| Pemetrexed | Multiple targets (TS, DHFR, GARFT) | Requires folate supplementation |
| Trimethoprim | DHFR inhibitor (bacterial selective) | Risk with prolonged use |
| Pyrimethamine | DHFR inhibitor (protozoal selective) | Give with folinic acid |
| Phenytoin | Impaired absorption, increased catabolism | Monitor levels |
| Carbamazepine | Increased folate catabolism | Supplement during pregnancy |
| Sulfasalazine | PCFT inhibition | Monitor in IBD |
| Oral contraceptives | Possible impaired absorption | Controversial |

**Methotrexate Toxicity and Rescue:**

*Risk Factors for Toxicity:*
- Renal impairment (delayed clearance)
- Third-space fluid (sequestration)
- Drug interactions (NSAIDs, probenecid)
- Genetic variants (MTHFR, DHFR)

*Leucovorin Rescue:*
- Start 24-36 hours after high-dose MTX
- Continue until MTX level <0.05 mcmol/L
- Increased doses for elevated MTX levels
- Glucarpidase for severe toxicity (enzymatic MTX cleavage)

## Specific Clinical Contexts

**Alcoholism:**
- Multiple mechanisms:
  - Poor dietary intake
  - Impaired intestinal absorption
  - Decreased hepatic uptake and storage
  - Increased urinary excretion
  - Acetaldehyde accelerates folate degradation
- Often combined with thiamine, B12 deficiency
- Liver stores depleted first

**Pregnancy:**
- Folate requirements increase 5-10 fold
- Critical period: Days 21-28 (neural tube closure)
- Periconceptional supplementation essential
- RBC folate >400 ng/mL associated with lowest NTD risk
- Higher doses (4 mg) for:
  - Prior NTD pregnancy
  - Diabetes
  - Obesity
  - Anticonvulsant use
  - MTHFR homozygosity

**Chronic Hemolysis:**
- Increased erythropoiesis increases folate demand
- Can precipitate megaloblastic crisis in SCD, hereditary spherocytosis
- Prophylactic supplementation recommended

**Celiac Disease:**
- Jejunal villous atrophy impairs absorption
- Often combined with iron, B12 deficiency
- May present with anemia as primary symptom
- Reverses with gluten-free diet

## Diagnostic Challenges

**Interpreting Folate Levels:**

*Serum Folate Pitfalls:*
- Recent meal can normalize levels
- Hemolysis falsely elevates (RBC folate released)
- Falls rapidly with inadequate intake
- May be falsely normal in acute deficiency

*RBC Folate Pitfalls:*
- May be low in B12 deficiency (impaired cellular uptake)
- Affected by RBC age (recent transfusion)
- Assay variability between methods

**Algorithm:**
1. MCV elevated: Consider megaloblastic causes
2. Check B12 first (neurological consequences more severe)
3. Low B12: Treat as B12 deficiency
4. Normal B12: Check RBC folate
5. Equivocal: Check homocysteine, MMA
   - Both elevated: B12 deficiency
   - Homocysteine elevated, MMA normal: Folate deficiency

## Treatment Nuances

**Dosing Considerations:**
- Routine deficiency: 1 mg daily
- Malabsorption: 5 mg daily
- Prophylaxis: 0.4 mg daily (1 mg reasonable)
- Parenteral: Rarely needed, available

**Folic Acid vs Folate Forms:**
- Folic acid: Synthetic, requires reduction to DHF
- Folinic acid (leucovorin): Already reduced, bypasses DHFR
- 5-methylTHF (methylfolate): Active circulating form
- 5-methylTHF may be preferred for MTHFR variants (theoretical)

**Duration:**
- Dietary deficiency: 3-4 months to replete stores
- Ongoing risk factors: Indefinite
- Pregnancy: Through first trimester minimum

## Population Health: Fortification

**US Mandatory Fortification (1998):**
- Enriched cereal grains: 140 mcg/100g
- Resulted in 25-30% reduction in NTDs
- Increased average intake by ~100 mcg/day
- Successful public health intervention

**Controversies:**
- Masking B12 deficiency (less concern with current thresholds)
- Possible acceleration of colorectal cancer
- Epigenetic effects of high folate
- Adequacy of current fortification levels

**Global Variation:**
- 90+ countries have mandatory fortification
- Europe largely lacks mandatory fortification
- WHO recommends >400 mcg DFE for women of reproductive age`,
      keyTerms: [
        { term: 'MTHFR', definition: 'Methylenetetrahydrofolate reductase; enzyme with common polymorphisms affecting folate metabolism and homocysteine levels' },
        { term: 'methylfolate', definition: '5-methyltetrahydrofolate; the biologically active circulating form of folate, available as supplement' },
        { term: 'glucarpidase', definition: 'Carboxypeptidase enzyme that directly cleaves methotrexate; used for life-threatening MTX toxicity', pronunciation: 'gloo-KAR-pih-days' },
        { term: 'fortification', definition: 'Addition of nutrients to food supply; US mandates folate fortification of enriched grains since 1998' },
        { term: 'DFE', definition: 'Dietary Folate Equivalent; accounts for higher bioavailability of folic acid vs food folate (1 mcg folic acid = 1.7 mcg DFE)' },
      ],
      clinicalNotes: 'MTHFR polymorphism testing is not routinely recommended as treatment (folate supplementation) is the same regardless. However, homozygous individuals may benefit from methylfolate rather than folic acid. In methotrexate toxicity, leucovorin dose should be at least equal to MTX dose when levels are elevated.',
    },
    5: {
      level: 5,
      summary: 'Contemporary understanding of folate deficiency integrates molecular genetics, epigenetics, and precision medicine approaches, with implications for cancer therapy, pregnancy outcomes, and cardiovascular disease prevention strategies.',
      explanation: `## Molecular Perspectives

**One-Carbon Metabolism and Disease:**

*Epigenetic Implications:*
- S-adenosylmethionine (SAM) is universal methyl donor
- DNA methylation requires adequate folate/B12
- Aberrant methylation in cancer, development
- Fetal programming effects of maternal folate

*Cancer Dual Role:*

Folate deficiency:
- Uracil misincorporation into DNA
- Chromosome breaks
- Altered methylation patterns
- Increased cancer initiation

Folate excess:
- May promote existing neoplasms
- Provides one-carbon units for DNA synthesis
- Concern for accelerating colorectal cancer
- "Dual modulator" hypothesis

**Genetic Architecture:**

*Comprehensive Pathway Genetics:*
| Gene | Function | Clinical Relevance |
|------|----------|-------------------|
| MTHFR | 5,10-methyleneTHF to 5-methylTHF | Common variants; homocysteine |
| DHFR | DHF to THF | MTX sensitivity |
| TYMS | Thymidylate synthase | Fluoropyrimidine response |
| PCFT (SLC46A1) | Intestinal absorption | Hereditary malabsorption |
| RFC (SLC19A1) | Cellular uptake | MTX pharmacogenomics |
| FPGS | Polyglutamation | Drug retention |
| GGH | Polyglutamate hydrolysis | Drug resistance |
| MTRR | Methionine synthase reductase | B12-folate interaction |

*MTHFR in Detail:*
- C677T (rs1801133): Ala222Val, thermolabile
- A1298C (rs1801131): Glu429Ala
- Compound heterozygotes have intermediate phenotype
- Population frequencies vary (5-15% homozygous TT)
- Clinical significance debated
- Hyperhomocysteinemia more pronounced with low folate

## Contemporary Diagnostics

**Beyond Traditional Testing:**

*Homocysteine:*
- Sensitive marker of folate and B12 function
- Cardiovascular risk marker (controversial causality)
- Affected by renal function, genetics
- Fasting preferred but not essential

*Metabolomics:*
- Comprehensive one-carbon metabolite profiling
- Research tool, not routine
- May identify novel biomarkers

*Functional Testing:*
- dU suppression test: Research/historical
- Lymphocyte response: Not practical

**Algorithm for Complex Cases:**

1. Unexplained macrocytosis
2. Check B12, folate, methylmalonic acid, homocysteine
3. Consider:
   - Drug history (anticonvulsants, MTX)
   - Alcohol use
   - Malabsorption symptoms
   - Pregnancy planning
4. Bone marrow if diagnosis unclear (rarely needed)
5. Genetic testing if hereditary folate malabsorption suspected

## Precision Medicine Applications

**Pharmacogenomics:**

*Methotrexate Optimization:*
- MTHFR polymorphisms affect toxicity risk
- TYMS polymorphisms affect response
- RFC variants affect cellular uptake
- Not yet standard of care, but emerging

*Fluoropyrimidine Therapy:*
- TYMS expression predicts response
- MTHFR variants may affect toxicity
- DPYD testing now recommended (different pathway)

**Personalized Supplementation:**

*Methylfolate Consideration:*
- Theoretical advantage in MTHFR variants
- Already reduced form
- Expensive compared to folic acid
- Limited evidence of clinical superiority
- May be reasonable for:
  - MTHFR homozygotes with documented deficiency
  - Patients not responding to folic acid
  - Concurrent DHFR inhibitor use

## Special Clinical Scenarios

**Inflammatory Bowel Disease:**
- Malabsorption (jejunal involvement, resection)
- Sulfasalazine/methotrexate use
- Increased cellular turnover
- Monitor folate status
- Supplement if deficient or on risk medications

**Bariatric Surgery:**
- Proximal bypass reduces absorption surface
- Prophylactic supplementation recommended
- 400-800 mcg daily minimum
- Monitor annually

**Dialysis:**
- Water-soluble vitamins lost
- Routine supplementation often provided
- May affect homocysteine levels (CVD risk in ESRD)

**Psychiatric Disease:**
- Folate deficiency associated with depression
- Adjunctive methylfolate for SSRI augmentation
- MTHFR polymorphisms and treatment response (research)
- Mechanism: Affects SAM-dependent neurotransmitter synthesis

## Public Health and Prevention

**Fortification Evidence:**

*Neural Tube Defect Prevention:*
- 25-30% reduction post-fortification
- Greatest benefit in populations with low baseline intake
- Additional periconceptional supplementation still recommended
- Particularly for high-risk groups

*Ongoing Debates:*
- Optimal fortification level
- Universal vs targeted supplementation
- Colorectal cancer concerns (mixed evidence)
- B12 masking (largely resolved with current levels)

**Global Perspective:**
- 92 countries mandate fortification (as of 2023)
- WHO/CDC recommendations
- Persistent disparities in folate status
- Cost-effective intervention

## Research Frontiers

**Emerging Areas:**

1. **Microbiome-folate interactions:**
   - Bacterial folate synthesis and utilization
   - Effects of antibiotic exposure
   - Prebiotic/probiotic effects

2. **Epigenetic programming:**
   - Transgenerational effects of folate status
   - Critical windows of development
   - Cancer prevention vs promotion balance

3. **Cardiovascular disease:**
   - Homocysteine-lowering trials disappointing
   - Possible benefit in stroke prevention
   - MTHFR variants and risk stratification

4. **Novel therapeutic targets:**
   - One-carbon metabolism in cancer
   - Mitochondrial folate pathway
   - Antifolate drug development

## Quality Metrics

**Performance Indicators:**
- B12 checked before folate therapy initiated
- Folate supplementation in pregnancy
- Appropriate leucovorin rescue protocols
- Monitoring of high-risk populations (IBD, bariatric surgery)

**Avoiding Pitfalls:**
- Never treat megaloblastic anemia with folate alone
- Consider drug-induced causes
- RBC folate more reliable than serum
- Remember MTHFR testing rarely changes management
- High-dose folate in pregnancy for prior NTD only`,
      keyTerms: [
        { term: 'uracil misincorporation', definition: 'dUTP incorporation into DNA during folate deficiency leading to DNA strand breaks and chromosomal instability' },
        { term: 'dual modulator hypothesis', definition: 'Concept that folate may prevent cancer initiation but promote progression of existing neoplasms' },
        { term: 'SAM', definition: 'S-adenosylmethionine; universal methyl donor derived from methionine; dependent on folate/B12-mediated regeneration' },
        { term: 'FPGS', definition: 'Folylpolyglutamate synthase; adds glutamate residues to retain folate intracellularly' },
        { term: 'methylenetetrahydrofolate', definition: '5,10-methyleneTHF; active folate form for thymidylate synthesis, converted to 5-methylTHF by MTHFR' },
      ],
      clinicalNotes: `**Board-Relevant Pearls:**
- RBC folate reflects 3-4 months of stores; serum folate reflects recent intake
- Folate deficiency: elevated homocysteine, NORMAL MMA
- B12 deficiency: elevated homocysteine AND MMA
- MTHFR testing is not routinely indicated (treatment is supplementation regardless)
- Folate can correct anemia in B12 deficiency but neurological damage continues
- Neural tube defects: Prevention requires folate BEFORE conception
- 4 mg folate for women with prior NTD pregnancy
- Leucovorin bypasses DHFR for methotrexate rescue
- Glucarpidase directly cleaves MTX in life-threatening toxicity`,
    },
  },

  media: [
    {
      id: 'folate-metabolism',
      type: 'diagram',
      filename: 'folate-one-carbon-metabolism.svg',
      title: 'Folate One-Carbon Metabolism',
      description: 'Integration of folate and B12 in one-carbon transfer reactions',
    },
    {
      id: 'megaloblastic-smear-folate',
      type: 'histology',
      filename: 'megaloblastic-folate-smear.jpg',
      title: 'Peripheral Blood Smear in Folate Deficiency',
      description: 'Macro-ovalocytes and hypersegmented neutrophils',
    },
  ],

  citations: [
    {
      id: 'green-folate-2017',
      type: 'article',
      title: 'Folate deficiency beyond megaloblastic anemia',
      authors: ['Green R'],
      source: 'Hematology Am Soc Hematol Educ Program',
      url: 'https://doi.org/10.1182/asheducation-2017.1.159',
    },
    {
      id: 'czeizel-2011',
      type: 'article',
      title: 'Folate and neural tube defects',
      authors: ['Czeizel AE'],
      source: 'Birth Defects Research Part A',
      url: 'https://doi.org/10.1002/bdra.20781',
    },
    {
      id: 'williams-hematology-folate',
      type: 'textbook',
      title: 'Cobalamin and Folate Deficiency',
      source: 'Williams Hematology',
      chapter: '41',
    },
  ],

  crossReferences: [
    { targetId: 'condition-vitamin-b12-deficiency', targetType: 'condition', relationship: 'related', label: 'Vitamin B12 Deficiency' },
    { targetId: 'topic-neural-tube-defects', targetType: 'topic', relationship: 'related', label: 'Neural Tube Defects' },
    { targetId: 'topic-one-carbon-metabolism', targetType: 'pathway', relationship: 'related', label: 'One-Carbon Metabolism' },
  ],

  tags: {
    systems: ['hematologic'],
    topics: ['anemia', 'vitamin deficiency', 'megaloblastic anemia', 'hematology', 'pregnancy'],
    keywords: ['macrocytic', 'megaloblastic', 'folate', 'folic acid', 'homocysteine', 'neural tube defects'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'obstetrics', 'family medicine'],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default folateDeficiencyAnemia;
