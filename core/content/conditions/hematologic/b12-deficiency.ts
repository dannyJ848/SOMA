/**
 * B12 and Folate Deficiency - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const b12Deficiency: EducationalContent = {
  id: 'condition-b12-folate-deficiency',
  type: 'condition',
  name: 'Vitamin B12 and Folate Deficiency',
  nameEs: 'Deficiencia de Vitamina B12 y Folato',
  alternateNames: ['Cobalamin Deficiency', 'Megaloblastic Anemia', 'Pernicious Anemia', 'Folic Acid Deficiency'],
  hpoId: 'HP:0001943',

  levels: {
    1: {
      level: 1,
      summary: 'Vitamin B12 and folate are nutrients your body needs to make healthy red blood cells. Without enough of them, you feel tired and weak.',
      explanation: `Vitamin B12 and folate are important nutrients that help your body create healthy red blood cells. When you do not have enough of either vitamin, your body produces abnormally large red blood cells that do not work properly.

**Vitamin B12 Deficiency:**

**Symptoms:**
- Fatigue and weakness
- Pale or yellowish skin
- Shortness of breath
- Numbness or tingling in hands and feet
- Difficulty walking
- Smooth, sore tongue
- Memory problems or confusion
- Mood changes

**Causes:**
- Not eating enough B12 (found in meat, fish, eggs, dairy)
- Stomach or intestine problems affecting absorption
- Pernicious anemia (autoimmune condition)
- Certain medications

**Folate Deficiency:**

**Symptoms:** Similar to B12 deficiency but without nerve problems

**Causes:**
- Not eating enough folate (found in leafy greens, beans, citrus)
- Alcohol use
- Pregnancy (increased need)
- Some medications

**Treatment:**
- B12 deficiency: B12 shots or high-dose pills
- Folate deficiency: Folate pills
- Treating the underlying cause`,
      keyTerms: [
        { term: 'vitamin B12', definition: 'A nutrient found in animal foods that helps make red blood cells and nerves' },
        { term: 'folate', definition: 'A B vitamin found in leafy vegetables and beans that helps cells grow and divide' },
        { term: 'megaloblastic anemia', definition: 'Anemia with large, immature red blood cells caused by B12 or folate deficiency' },
      ],
      analogies: ['Red blood cells need B12 and folate like a car needs fuel and oil—without them, they cannot function properly.'],
      examples: ['A strict vegetarian who does not take B12 supplements may develop B12 deficiency because B12 is mainly found in animal products.'],
    },
    2: {
      level: 2,
      summary: 'B12 and folate deficiency cause megaloblastic anemia with macrocytosis and hypersegmented neutrophils; B12 deficiency uniquely causes neurologic symptoms due to myelin damage.',
      explanation: `## Clinical Features

**Hematologic:**
- Macrocytic anemia (elevated MCV)
- Fatigue, pallor
- Smooth tongue (glossitis)
- Mild jaundice

**B12-Specific Neurologic:**
- Peripheral neuropathy (symmetric, glove-stocking)
- Subacute combined degeneration of spinal cord
- Ataxia, gait disturbance
- Cognitive changes, dementia
- Neuropsychiatric symptoms

## Laboratory Findings

**CBC:**
- Increased MCV (often >110 fL)
- Macroovalocytes
- Hypersegmented neutrophils (>5 lobes)
- Pancytopenia in severe cases

**Distinguishing Features:**

| Test | B12 Deficiency | Folate Deficiency |
|------|----------------|-------------------|
| Serum B12 | Low | Normal |
| Serum folate | Normal | Low |
| RBC folate | Low | Low |
| Neurologic symptoms | Yes | No |
| MMA | Elevated | Normal |
| Homocysteine | Elevated | Elevated |

## Causes

**B12 Deficiency:**
- Pernicious anemia (autoimmune)
- Gastric surgery, atrophic gastritis
- Celiac disease, Crohn disease
- Strict vegetarianism/veganism
- Medications (metformin, PPIs)

**Folate Deficiency:**
- Poor dietary intake
- Alcoholism
- Increased demand (pregnancy, hemolysis)
- Malabsorption
- Medications (methotrexate, trimethoprim)

## Treatment

**B12 Replacement:**
- Cyanocobalamin 1000 mcg IM daily for 1 week, then weekly
- Or high-dose oral (1000-2000 mcg daily)
- Lifelong for pernicious anemia

**Folate Replacement:**
- Folic acid 1 mg daily
- Always rule out B12 deficiency first`,
      keyTerms: [
        { term: 'macrocytosis', definition: 'Large red blood cells (MCV >100 fL)' },
        { term: 'hypersegmented neutrophils', definition: 'Neutrophils with more than 5 nuclear lobes; characteristic of megaloblastic anemia' },
        { term: 'MMA', definition: 'Methylmalonic acid; elevated in B12 deficiency, normal in folate deficiency' },
      ],
      clinicalNotes: 'Always exclude B12 deficiency before treating with folate, as folate can partially correct the anemia but not the neurologic damage, allowing neuropathy to progress.',
    },
    3: {
      level: 3,
      summary: 'Megaloblastic anemia from B12 or folate deficiency impairs DNA synthesis, causing nuclear-cytoplasmic asynchrony in hematopoietic cells; B12 deficiency uniquely affects myelin through abnormal propionate metabolism and MMA accumulation.',
      explanation: `## Pathophysiology

**DNA Synthesis Impairment:**
- B12 and folate are cofactors for thymidine synthesis
- Folate as 5,10-methylene-THF converts dUMP to dTMP
- B12 maintains folate in active form (methyl-THF to methylene-THF)
- Result: DNA replication impaired, RNA synthesis continues
- Nuclear-cytoplasmic asynchrony: immature nucleus, mature cytoplasm

**B12-Specific Neuropathy Mechanism:**
- B12 cofactor for methylmalonyl-CoA mutase
- Deficiency → MMA accumulation
- MMA replaces fatty acids in myelin
- Abnormal myelin → demyelination
- Posterior and lateral columns of spinal cord affected

## Laboratory Evaluation

**Initial Tests:**
- CBC with peripheral smear
- Serum B12 (screening)
- Serum folate
- RBC folate (better tissue status)

**Confirmatory Tests:**

| Test | B12 Deficiency | Folate Deficiency |
|------|----------------|-------------------|
| MMA | Elevated | Normal |
| Homocysteine | Elevated | Elevated |
| Holotranscobalamin | Low | Normal |

**Peripheral Smear Findings:**
- Macroovalocytes
- Hypersegmented neutrophils
- Anisocytosis, poikilocytosis
- Pancytopenia in severe cases

## Specific Causes

**Pernicious Anemia:**
- Autoimmune destruction of parietal cells
- Anti-intrinsic factor antibodies (specific)
- Anti-parietal cell antibodies (sensitive)
- Associated with other autoimmune diseases
- Atrophic gastritis on endoscopy

**B12 Malabsorption:**
- Gastric surgery (reduced acid/IF)
- Ileal resection or Crohn disease
- Celiac disease, tropical sprue
- Bacterial overgrowth
- Fish tapeworm (Diphyllobothrium)
- Medications: Metformin, PPIs, nitrous oxide

## Neurologic Manifestations

**Peripheral Neuropathy:**
- Symmetric, distal, sensorimotor
- Glove-stocking distribution
- Paresthesias, numbness
- Reduced vibration and position sense

**Subacute Combined Degeneration:**
- Dorsal columns: loss of proprioception, vibration
- Lateral columns: weakness, spasticity, Babinski
- Romberg positive, ataxia

**Cognitive/Psychiatric:**
- Memory loss, dementia
- Depression, psychosis
- "Megaloblastic madness"

## Treatment Strategies

**B12 Replacement:**

| Route | Indication | Dose |
|-------|------------|------|
| IM | Severe deficiency, neurologic symptoms | 1000 mcg daily × 1 week, then weekly |
| Oral | Mild deficiency, dietary insufficiency | 1000-2000 mcg daily |
| Nasal | Maintenance | 500 mcg weekly |

**Duration:** Lifelong for pernicious anemia, otherwise 1-2 months

**Folate Replacement:**
- Folic acid 1 mg daily
- Increased doses (4-5 mg) for malabsorption, pregnancy
- Continue until cause addressed

**Important:** Treat B12 first or concurrently if both deficient`,
      keyTerms: [
        { term: 'megaloblast', definition: 'Large, immature red blood cell precursor with nuclear-cytoplasmic asynchrony' },
        { term: 'pernicious anemia', definition: 'Autoimmune destruction of parietal cells causing intrinsic factor deficiency and B12 malabsorption' },
        { term: 'subacute combined degeneration', definition: 'Spinal cord demyelination from B12 deficiency affecting dorsal and lateral columns' },
        { term: 'intrinsic factor', definition: 'Gastric protein required for B12 absorption in terminal ileum' },
      ],
      clinicalNotes: 'Serum B12 can be falsely normal or low-normal in true deficiency. If clinical suspicion exists, check MMA and homocysteine. MMA is the most specific test for B12 deficiency.',
    },
    4: {
      level: 4,
      summary: 'Complex B12/folate management addresses borderline levels, functional deficiency, neurologic B12 deficiency without anemia, folate trap hypothesis, and special populations including pregnancy, renal disease, and nitrous oxide exposure.',
      explanation: `## Diagnostic Challenges

**Borderline B12 Levels (150-400 pg/mL):**
- May be true deficiency or subclinical
- Check MMA and homocysteine
- Elevated MMA confirms deficiency
- Holotranscobalamin (active B12) more sensitive

**B12 Deficiency Without Anemia:**
- Neurologic symptoms can precede anemia
- MMA essential for diagnosis
- Treat if neurologic signs and MMA elevated

**Folate Deficiency Masking B12:**
- Folate partially corrects hematologic abnormalities
- Neurologic damage progresses
- Always check B12 before folate replacement

## Special Populations

**Pregnancy:**
- Folate requirement: 600 mcg DFE daily
- Prevention of neural tube defects
- Start preconception, continue through pregnancy
- High-dose folate (4-5 mg) for previous NTD, certain medications

**Elderly:**
- Atrophic gastritis reduces absorption
- Up to 20% may have subclinical deficiency
- Oral high-dose (1000 mcg) effective
- Screen after bariatric surgery, PPI use

**Renal Failure:**
- Folate loss in dialysis
- Supplementation 1 mg daily
- Monitor B12 status

**Post-Bariatric Surgery:**
- High risk of B12 and folate deficiency
- Prophylactic B12 recommended
- Monitor levels annually

**Nitrous Oxide Exposure:**
- Inactivates B12 (oxidizes cobalt)
- Acute deficiency with repeated exposure
- Risk: Anesthesia, recreational use
- May cause myelopathy, neuropathy
- Treat with B12 replacement

## Folate Trap

**Classic Teaching:**
- B12 needed to convert methyl-THF to methylene-THF
- B12 deficiency "traps" folate as methyl-THF
- Functional folate deficiency results

**Current Understanding:**
- Folate trap contributes but not primary mechanism
- Both vitamins needed for thymidine synthesis
- Impaired DNA synthesis from combined deficiency

## Laboratory Interpretation

**MMA and Homocysteine Patterns:**

| MMA | Homocysteine | Interpretation |
|-----|--------------|----------------|
| High | High | B12 deficiency |
| Normal | High | Folate deficiency |
| High | Normal | Renal failure (MMA retention) |
| Normal | Normal | Unlikely B12/folate deficiency |

**False Negative B12:**
- Pregnancy (levels decrease normally)
- Myeloma, liver disease
- Transcobalamin II deficiency
- Recent B12 supplementation

**False Positive B12:**
- Liver disease releases stored B12
- Myeloproliferative neoplasms
- Recent B12 injection

## Treatment Nuances

**High-Dose Oral B12:**
- 1-2 mg achieves absorption via passive diffusion
- Bypasses intrinsic factor pathway
- Effective even in pernicious anemia
- More convenient than IM

**Monitoring Response:**
- Reticulocytosis in 1 week
- Hemoglobin rises 2-3 g/dL over 3-4 weeks
- MCV normalizes in 6-8 weeks
- Neurologic recovery: months, may be incomplete

**Refractory Cases:**
- Check compliance
- Evaluate for other causes of anemia
- Consider hereditary disorders
- Recheck malabsorption`,
      keyTerms: [
        { term: 'functional deficiency', definition: 'Tissue-level deficiency despite normal serum levels; detected by elevated MMA' },
        { term: 'holotranscobalamin', definition: 'Active form of B12 bound to transcobalamin II; early marker of deficiency' },
        { term: 'folate trap', definition: 'Theory that B12 deficiency traps folate as methyl-THF, causing functional folate deficiency' },
      ],
      clinicalNotes: 'Neurologic B12 deficiency can occur without macrocytic anemia. Always consider B12 deficiency in patients with unexplained neuropathy, gait disturbance, or cognitive changes. MMA is the most sensitive and specific test for B12 deficiency, including early stages.',
    },
    5: {
      level: 5,
      summary: 'Precision approaches to B12/folate disorders integrate novel biomarkers including holotranscobalamin and functional assays, understanding of genetic influences on metabolism, and personalized supplementation strategies based on absorption kinetics, comorbidities, and pharmacogenomics.',
      explanation: `## Advanced Diagnostics

**Novel Biomarkers:**

**Holotranscobalamin (HoloTC):**
- Active B12 fraction (bound to transcobalamin II)
- Earlier marker than serum B12
- Detects deficiency before serum B12 decreases
- Cutoff <70 pmol/L suggests deficiency

**Functional B12 Status:**
- MMA remains gold standard
- Combined HoloTC + MMA improves sensitivity
- Age-specific reference ranges needed

**Genetic Influences:**

**Transcobalamin Polymorphisms:**
- TCN2 776C>G affects cellular B12 delivery
- Homozygous variants may have functional deficiency
- Impacts response to supplementation

**MTHFR Polymorphisms:**
- C677T affects folate metabolism
- TT genotype: Reduced enzyme activity
- Impacts homocysteine, DNA methylation
- May require active folate (L-methylfolate)

**FUT2 Secretor Status:**
- Affects gut microbiome and B12 absorption
- Non-secretors at higher risk of deficiency

## Metabolic Pathways

**Methylmalonyl-CoA Pathway:**
- B12 cofactor for methylmalonyl-CoA mutase
- Converts methylmalonyl-CoA to succinyl-CoA
- Accumulated MMA inhibits mitochondrial fatty acid synthesis
- Results in abnormal myelin

**Homocysteine-Methionine Cycle:**
- B12 (methionine synthase) and folate interdependent
- Methionine synthase requires methylcobalamin
- Generates methionine and tetrahydrofolate
- Homocysteine elevation when pathway impaired

**Folate Cycle Complexity:**
- Multiple folate forms with different functions
- Methyl-THF, methylene-THF, formyl-THF
- Enzyme: MTHFR critical for folate cycling
- Implications for supplementation (L-methylfolate vs folic acid)

## Special Situations

**Inherited Disorders:**

**Imerslund-Grasbeck Syndrome:**
- Inherited B12 malabsorption
- CUBN or AMN mutations
- Proteinuria present
- Responds to high-dose B12

**Transcobalamin II Deficiency:**
- Severe deficiency in infancy
- Failure to thrive, immunodeficiency
- Requires aggressive B12 replacement

**Hereditary Folate Malabsorption:**
- SLC19A1 mutations
- Onset in infancy
- Oral folate ineffective
- Parenteral folate required

**Neuropsychiatric B12 Deficiency:**
- May present as psychosis, dementia
- Delirium mimics other conditions
- "Megaloblastic madness"
- Postpartum psychosis association
- Rapid response to B12 if recognized

**Nitrous Oxide Toxicity:**
- Inactivates cobalt in B12
- Acute functional deficiency
- Risk: Surgery, recreational use
- May cause subacute combined degeneration
- Treatment: B12 replacement

## Controversies

**B12 and Dementia:**
- Association vs causation unclear
- Trials of B12 supplementation disappointing
- May be most beneficial early in course
- Combined B-folate-B6 trials mixed

**Folate Fortification:**
- Reduced neural tube defects
- Masking B12 deficiency concern
- High folate with low B12 worse outcomes
- Unmetabolized folic acid effects

**Screening Recommendations:**
- Universal vs targeted screening
- Screen after age 50 or 65?
- Post-bariatric surgery mandatory
- PPI users: monitor periodically

## Personalized Treatment

**Dosing Considerations:**
- Absorption: 1% absorbed via passive diffusion at high doses
- Oral vs IM: Similar efficacy, patient preference
- Frequency: Daily vs weekly vs monthly based on severity

**Formulations:**
- Cyanocobalamin: Stable, inexpensive, requires conversion
- Methylcobalamin: Active form, better tissue levels
- Hydroxocobalamin: Longer half-life, used in Europe

**Folate Forms:**
- Folic acid: Synthetic, requires activation
- L-methylfolate: Active form, bypasses MTHFR
- Consider MTHFR genotype

## Monitoring and Prognosis

**Response Assessment:**
- Reticulocytosis at 1 week
- Hemoglobin rises over 4-6 weeks
- MCV normalizes in 8 weeks
- MMA normalizes in 1-2 weeks

**Neurologic Recovery:**
- More variable than hematologic
- Early treatment crucial
- May be incomplete if delayed
- Physical therapy important

**Long-Term Follow-up:**
- Pernicious anemia: Lifelong treatment
- Monitor levels periodically
- Screen for gastric cancer (pernicious anemia risk)
- Associated autoimmune conditions`,
      keyTerms: [
        { term: 'holotranscobalamin', definition: 'Bioactive fraction of B12 bound to transcobalamin II; earliest marker of B12 deficiency' },
        { term: 'MTHFR', definition: 'Methylenetetrahydrofolate reductase; enzyme critical for folate metabolism, common polymorphisms affect function' },
        { term: 'Imerslund-Grasbeck syndrome', definition: 'Inherited disorder causing selective B12 malabsorption with proteinuria due to CUBN or AMN mutations' },
        { term: 'unmetabolized folic acid', definition: 'Circulating folic acid that has not been converted to active forms; potential health effects unclear' },
      ],
      clinicalNotes: 'HoloTC is emerging as a superior early marker for B12 deficiency, detecting deficiency before serum B12 becomes abnormal. In patients with neuropsychiatric symptoms without anemia, always check MMA and homocysteine. MTHFR polymorphism testing may guide folate form choice (L-methylfolate vs folic acid).',
    },
  },

  media: [],
  citations: [
    { id: 'ash-b12-2020', type: 'article', title: 'ASH Guidelines for Vitamin B12 Deficiency', source: 'Blood Advances' },
    { id: 'nejm-b12', type: 'article', title: 'Vitamin B12 Deficiency', source: 'New England Journal of Medicine' },
  ],
  crossReferences: [
    { targetId: 'condition-iron-deficiency-anemia', targetType: 'condition', relationship: 'related', label: 'Iron Deficiency Anemia' },
    { targetId: 'condition-anemia-chronic-disease', targetType: 'condition', relationship: 'related', label: 'Anemia of Chronic Disease' },
  ],
  tags: { systems: ['hematologic'], topics: ['hematology', 'nutrition'], keywords: ['B12', 'folate', 'megaloblastic anemia', 'pernicious anemia', 'methylmalonic acid'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] } },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default b12Deficiency;
