import type { EducationalContent } from '../../../types';

export const macrocyticAnemia: EducationalContent = {
  id: 'macrocytic-anemia',
  type: 'condition',
  name: 'Macrocytic Anemia',
  alternateNames: ['Megaloblastic Anemia', 'Vitamin B12 Deficiency', 'Folate Deficiency', 'Pernicious Anemia'],
  levels: {
    1: {
      level: 1,
      summary: 'Macrocytic anemia is when red blood cells are larger than normal, usually caused by not having enough vitamin B12 or folate to make proper blood cells.',
      explanation: `Macrocytic anemia happens when your body makes red blood cells that are too big. Imagine if a factory was supposed to make standard-sized balloons, but instead made extra-large ones. These oversized blood cells do not work as well as normal cells and do not last as long in the bloodstream.

The main causes are not getting enough of two important vitamins: vitamin B12 and folate (also called folic acid). These vitamins help create the instructions for making blood cells. Without them, the cells grow too large and become defective.

Vitamin B12 comes from animal foods like meat, eggs, and milk. Some people cannot absorb B12 properly due to a stomach problem called pernicious anemia. Folate is found in leafy green vegetables, beans, and fortified cereals. Pregnant women especially need extra folate to help their baby develop properly.

People with macrocytic anemia feel tired and weak. They might also have problems with their nerves, like tingling in their hands and feet, if they lack vitamin B12.`,
      keyTerms: [
        { term: 'macrocytic', definition: 'Having larger than normal cells; red blood cells bigger than they should be' },
        { term: 'vitamin B12', definition: 'A vitamin found in animal foods that helps make DNA and keeps nerves healthy' },
        { term: 'folate', definition: 'A B vitamin found in green vegetables that helps cells grow and divide' }
      ],
      analogies: [
        'Macrocytic red blood cells are like oversized balloons that are more likely to pop and do not fit through small spaces well',
        'Without B12 and folate, blood cells are like incomplete puzzle pieces - they are too big and do not fit together properly'
      ],
      examples: [
        'A strict vegan who does not take B12 supplements might develop macrocytic anemia over several years',
        'A pregnant woman who does not get enough folate might develop this type of anemia'
      ]
    },
    2: {
      level: 2,
      summary: 'Macrocytic anemia is characterized by enlarged red blood cells (MCV >100 fL), most commonly due to vitamin B12 or folate deficiency causing megaloblastic changes in bone marrow.',
      explanation: `Macrocytic anemia is defined by a mean corpuscular volume (MCV) greater than 100 femtoliters, indicating that red blood cells are larger than normal. This category is divided into megaloblastic and non-megaloblastic macrocytic anemias based on bone marrow findings.

Megaloblastic anemia results from impaired DNA synthesis, most commonly due to vitamin B12 (cobalamin) or folate deficiency. In this condition, RNA synthesis and cytoplasmic development proceed normally while nuclear maturation is delayed, creating large, immature-appearing cells called megaloblasts. These defective cells are destroyed in the bone marrow (ineffective erythropoiesis), leading to anemia.

Vitamin B12 deficiency causes include:
- Dietary deficiency: vegans, elderly with poor nutrition
- Pernicious anemia: autoimmune destruction of gastric parietal cells and intrinsic factor
- Gastric surgery: post-gastrectomy, bariatric surgery
- Malabsorption: celiac disease, Crohn disease, bacterial overgrowth, fish tapeworm
- Medications: metformin, proton pump inhibitors, H2 blockers

Folate deficiency causes include:
- Dietary insufficiency: elderly, alcoholics, malnutrition
- Increased demand: pregnancy, hemolytic anemia, malignancy
- Malabsorption: tropical sprue, celiac disease
- Medications: methotrexate, trimethoprim, phenytoin, sulfasalazine

Non-megaloblastic causes include liver disease, alcoholism, hypothyroidism, myelodysplastic syndromes, and medications like hydroxyurea.`,
      keyTerms: [
        { term: 'MCV (Mean Corpuscular Volume)', definition: 'Measurement of average red blood cell size; >100 fL indicates macrocytosis' },
        { term: 'megaloblastic', definition: 'Abnormal, large, immature red blood cell precursors seen in B12 or folate deficiency' },
        { term: 'intrinsic factor', definition: 'Protein made by stomach cells that binds B12 for absorption in the intestine' },
        { term: 'pernicious anemia', definition: 'Autoimmune disease causing loss of intrinsic factor and B12 malabsorption' },
        { term: 'ineffective erythropoiesis', definition: 'Premature destruction of developing red blood cells within the bone marrow' }
      ],
      analogies: [
        'Megaloblastic changes are like a construction crew that finishes the building exterior but forgets to complete the internal wiring',
        'Think of DNA as the instruction manual - without B12 and folate, the manual has missing pages and the factory makes defective products'
      ],
      examples: [
        'A 70-year-old with fatigue, MCV 115 fL, and history of gastric bypass surgery - likely B12 deficiency',
        'An alcoholic with macrocytic anemia may have multiple contributing factors including folate deficiency and liver disease'
      ]
    },
    3: {
      level: 3,
      summary: 'Megaloblastic anemia pathophysiology involves disrupted DNA synthesis due to impaired thymidylate and methionine synthesis, affecting all rapidly dividing cells and causing pancytopenia and hypersegmented neutrophils.',
      explanation: `Megaloblastic anemia represents a defect in DNA synthesis affecting all rapidly dividing cells. The biochemical basis involves two critical pathways requiring folate and vitamin B12 as cofactors.

Folate metabolism and DNA synthesis:
Dietary folate (polyglutamate) is converted to monoglutamate for absorption, then reconverted to polyglutamate for intracellular retention. Tetrahydrofolate (THF) serves as a one-carbon donor in several reactions, most critically the conversion of deoxyuridylate (dUMP) to deoxythymidylate (dTMP) catalyzed by thymidylate synthase. Without adequate folate, dUMP accumulates and is incorrectly incorporated into DNA, leading to strand breaks and impaired cell division.

The methyl trap hypothesis explains B12 deficiency effects:
The only known human reaction requiring B12 involves homocysteine methylation to methionine, catalyzed by methionine synthase. This reaction requires methyl-THF as the methyl donor. When B12 is deficient, methyl-THF cannot be converted to THF, trapping folate in the methylated form and preventing DNA synthesis despite adequate total folate levels. This explains why B12 deficiency causes functional folate deficiency.

Cellular consequences extend beyond erythropoiesis:
- All rapidly dividing cells affected: bone marrow, gastrointestinal epithelium, germ cells
- Characteristic morphology: large cells with immature nuclei relative to cytoplasm
- Pancytopenia common due to trilineage involvement
- Hypersegmented neutrophils (5+ lobes) pathognomonic
- Elevated LDH from ineffective erythropoiesis and intramedullary hemolysis

Neurological manifestations in B12 deficiency result from impaired methionine synthesis and accumulation of methylmalonic acid (MMA), causing:
- Demyelination of dorsal columns and lateral corticospinal tracts
- Peripheral neuropathy
- Cognitive changes and dementia

These neurological changes can occur without anemia, emphasizing the need for B12 testing in suggestive clinical presentations regardless of hematologic findings.`,
      keyTerms: [
        { term: 'thymidylate synthase', definition: 'Enzyme converting dUMP to dTMP; requires methylene-THF as cofactor' },
        { term: 'methyl trap hypothesis', definition: 'Concept that B12 deficiency traps folate as methyl-THF, preventing DNA synthesis' },
        { term: 'homocysteine', definition: 'Amino acid elevated in B12 and folate deficiency; cardiovascular risk factor' },
        { term: 'methylmalonic acid', definition: 'Metabolite elevated specifically in B12 deficiency; causes neurological toxicity' },
        { term: 'pancytopenia', definition: 'Deficiency of all three blood cell types: red cells, white cells, and platelets' }
      ]
    },
    4: {
      level: 4,
      summary: 'Diagnostic evaluation includes MCV, peripheral smear for hypersegmented neutrophils, serum B12 and folate levels, methylmalonic acid and homocysteine for borderline cases, and intrinsic factor antibodies for pernicious anemia diagnosis.',
      explanation: `The diagnostic approach to macrocytic anemia begins with confirming macrocytosis (MCV >100 fL) and examining the peripheral blood smear. The presence of macro-ovalocytes (large, oval red cells) and hypersegmented neutrophils (neutrophils with 5 or more nuclear lobes, or >5% with 5+ lobes) suggests megaloblastic anemia.

Initial laboratory evaluation:
- Complete blood count with indices and peripheral smear
- Reticulocyte count (often inappropriately low for degree of anemia)
- LDH and indirect bilirubin (elevated from ineffective erythropoiesis)
- Serum B12 and folate levels

Interpretation of B12 and folate levels:
- B12 <200 pg/mL: deficiency likely
- B12 200-400 pg/mL: indeterminate; check MMA and homocysteine
- Folate <2 ng/mL: deficiency likely
- Folate 2-4 ng/mL: borderline; consider RBC folate (better reflects tissue stores)

MMA and homocysteine interpretation:
- B12 deficiency: elevated MMA and homocysteine
- Folate deficiency: elevated homocysteine only (normal MMA)
- Combined deficiency: both elevated

Pernicious anemia evaluation:
- Anti-intrinsic factor antibodies: highly specific (>95%) but only 50-70% sensitive
- Anti-parietal cell antibodies: more sensitive (85-90%) but less specific
- Gastric biopsy: atrophic gastritis with loss of parietal cells
- Schilling test: rarely used now; measures B12 absorption with and without intrinsic factor

Additional testing based on clinical suspicion:
- Celiac serology (tTG-IgA) for malabsorption
- Holotranscobalamin (active B12): may detect deficiency earlier than total B12
- Bone marrow biopsy: rarely needed; shows megaloblastic changes, giant metamyelocytes, hypercellularity

Differential diagnosis of non-megaloblastic macrocytosis:
- Liver disease: target cells, acanthocytes, normal neutrophil segmentation
- Alcohol: often with thrombocytopenia, elevated MCV may precede anemia
- Hypothyroidism: check TSH
- MDS: dysplastic features, cytopenias, possible blasts
- Medications: hydroxyurea, zidovudine, chemotherapy`,
      keyTerms: [
        { term: 'hypersegmented neutrophils', definition: 'Neutrophils with 5 or more nuclear lobes; characteristic of megaloblastic anemia' },
        { term: 'macro-ovalocytes', definition: 'Large, oval red blood cells typical of megaloblastic anemia' },
        { term: 'methylmalonic acid', definition: 'Metabolite requiring B12 for conversion; elevated levels confirm B12 deficiency' },
        { term: 'holotranscobalamin', definition: 'The biologically active fraction of circulating B12 bound to transcobalamin' },
        { term: 'parietal cell antibodies', definition: 'Autoantibodies against gastric parietal cells; associated with pernicious anemia' }
      ],
      clinicalNotes: `Clinical pearls for macrocytic anemia:

1. Check B12 levels in ALL patients with macrocytic anemia - do not assume folate deficiency
2. Neurological symptoms from B12 deficiency can be irreversible if treatment delayed; prioritize B12 repletion
3. Never treat macrocytic anemia with folate alone without ruling out B12 deficiency - this can worsen neurological damage
4. MCV >120 fL strongly suggests megaloblastic etiology
5. Normal B12 does not exclude deficiency; check MMA if clinical suspicion high

Treatment protocols:

Vitamin B12 deficiency:
- Oral: 1000-2000 mcg daily (effective even without intrinsic factor due to passive absorption)
- Intramuscular: 1000 mcg daily x 7 days, then weekly x 4-8 weeks, then monthly for life
- Sublingual/nasal alternatives available for maintenance
- Lifelong treatment required for pernicious anemia

Folate deficiency:
- Oral folic acid 1 mg daily for 4 months, or until underlying cause corrected
- Higher doses (5 mg) for malabsorption states
- Prophylaxis for pregnancy: 400-800 mcg daily

Response to treatment:
- Reticulocyte peak at days 5-8
- Hemoglobin rise by 1-2 g/dL per week
- Neutrophil hypersegmentation corrects within 7-10 days
- Neurological improvement may take months; may be incomplete if delayed

Monitoring:
- Recheck hemoglobin in 4-8 weeks
- B12 levels not useful during replacement (elevated by therapy)
- MMA and homocysteine normalize with adequate treatment`
    },
    5: {
      level: 5,
      summary: 'Advanced concepts include TCN2 gene variants affecting B12 transport, anti-IF antibody assays, nitrous oxide-induced megaloblastosis, and the role of elevated homocysteine in cardiovascular and neurodegenerative disease.',
      explanation: `Contemporary research has expanded understanding of B12 and folate metabolism, revealing genetic variants, novel diagnostic approaches, and broader clinical implications of deficiency states.

Transcobalamin genetics and metabolism:
Vitamin B12 circulates bound to three proteins:
- Haptocorrin (transcobalamin I): binds 70-80% of circulating B12; function unclear
- Transcobalamin (transcobalamin II): binds 10-20%; delivers B12 to cells via receptor-mediated endocytosis
- Albumin: binds remaining B12

TCN2 gene variants affect B12 distribution and cellular delivery. The TCN2 776C>G polymorphism (arginine to proline at codon 259) reduces transcobalamin II affinity for B12 and is associated with B12 deficiency despite normal total levels. Homozygous variants may require higher supplementation doses.

Hereditary folate malabsorption involves mutations in the proton-coupled folate transporter (PCFT/SLC46A1), causing severe folate deficiency beginning in infancy. Cerebral folate deficiency involves defects in folate receptor-alpha or blocking autoantibodies, causing neurological deterioration despite normal serum folate.

Diagnostic advances:
- Automated chemiluminescence assays have largely replaced microbiological assays
- Holotranscobalamin (active B12) may detect deficiency earlier, especially in pregnancy and renal failure
- Serum MMA normalized for renal function (eGFR) improves diagnostic accuracy
- Next-generation sequencing panels for congenital megaloblastic anemia include MTHFR, MTR, MTRR, MMACHC (cobalamin C disease)

Nitrous oxide (N2O) toxicity:
N2O irreversibly oxidizes the cobalt in B12, inactivating methionine synthase. Chronic recreational use or repeated anesthesia exposure can cause:
- Megaloblastic anemia
- Subacute combined degeneration of the cord
- Peripheral neuropathy
- Treatment requires high-dose B12 and cessation of N2O exposure

Cardiovascular and neurodegenerative implications:
Elevated homocysteine is an independent risk factor for:
- Cardiovascular disease (controversial causality)
- Stroke
- Cognitive decline and dementia
- Neural tube defects in offspring

Folic acid fortification programs have reduced neural tube defects by 20-50% but raised concerns about masking B12 deficiency and potential cancer promotion.`,
      keyTerms: [
        { term: 'transcobalamin II', definition: 'The primary transport protein delivering B12 to cells; encoded by TCN2 gene' },
        { term: 'PCFT', definition: 'Proton-coupled folate transporter; mutations cause hereditary folate malabsorption' },
        { term: 'cerebral folate deficiency', definition: 'Condition with low CSF folate despite normal serum levels; causes neurological dysfunction' },
        { term: 'subacute combined degeneration', definition: 'Demyelination of dorsal columns and lateral corticospinal tracts from B12 deficiency' },
        { term: 'methionine synthase', definition: 'B12-dependent enzyme converting homocysteine to methionine; inactivated by nitrous oxide' }
      ],
      clinicalNotes: `Advanced clinical considerations:

Rare B12 deficiency causes:
- Inborn errors of cobalamin metabolism (cblC, cblD, cblF disorders) present in infancy with failure to thrive, hematologic abnormalities, and multisystem involvement
- TCblR deficiency (transcobalamin receptor defect) causes megaloblastic anemia unresponsive to standard B12 therapy
- Imerslund-Grasbeck syndrome: selective B12 malabsorption with proteinuria due to cubilin or amnionless mutations

Special populations:
- Pregnancy: increased B12 and folate requirements; deficiency associated with neural tube defects, preterm birth, preeclampsia
- Elderly: atrophic gastritis common (10-30%); decreased acid production impairs B12 absorption
- Post-bariatric surgery: routine lifelong B12 supplementation required
- Vegetarians/vegans: B12 supplementation essential; algae and fermented foods are unreliable sources

Emerging therapies:
- Recombinant intrinsic factor for pernicious anemia
- Modified release oral B12 formulations
- Folate receptor-targeted imaging and therapy for cancer

Research frontiers:
- Role of B12/folate in epigenetic regulation through methylation
- B12 deficiency and Parkinson disease risk
- Optimal B12 levels for cognitive health in aging`
    }
  },
  media: [],
  citations: [
    { id: '1', type: 'textbook', title: 'Hoffman Hematology: Basic Principles and Practice', authors: ['Hoffman R', 'Benz EJ', 'Silberstein LE'], source: 'Elsevier', chapter: 'Chapter 38: Megaloblastic Anemias' },
    { id: '2', type: 'textbook', title: 'Williams Hematology', authors: ['Kaushansky K', 'Lichtman MA', 'Prchal JT'], source: 'McGraw-Hill', chapter: 'Chapter 41: Folate, Cobalamin, and Megaloblastic Anemias' }
  ],
  crossReferences: [
    { targetId: 'vitamin-b12-deficiency', targetType: 'condition', relationship: 'child' },
    { targetId: 'folate-deficiency', targetType: 'condition', relationship: 'child' },
    { targetId: 'pernicious-anemia', targetType: 'condition', relationship: 'child' }
  ],
  tags: {
    systems: ['hematology', 'blood'],
    topics: ['anemia', 'vitamin deficiencies', 'megaloblastic anemia'],
    keywords: ['macrocytic', 'MCV', 'vitamin B12', 'folate', 'megaloblastic', 'pernicious anemia'],
    clinicalRelevance: 'high'
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
