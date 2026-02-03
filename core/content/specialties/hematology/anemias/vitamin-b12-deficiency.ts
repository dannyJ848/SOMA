/**
 * Vitamin B12 Deficiency Anemia - Comprehensive Educational Content
 *
 * A macrocytic anemia resulting from impaired DNA synthesis due to vitamin B12
 * (cobalamin) deficiency, with potential for serious neurological complications.
 */

import { EducationalContent } from '../../../types';

export const vitaminB12DeficiencyAnemia: EducationalContent = {
  id: 'condition-vitamin-b12-deficiency-anemia',
  type: 'condition',
  name: 'Vitamin B12 Deficiency Anemia',
  alternateNames: ['Cobalamin deficiency', 'Pernicious anemia', 'Megaloblastic anemia'],

  levels: {
    1: {
      level: 1,
      summary: 'Vitamin B12 deficiency anemia happens when your body does not have enough vitamin B12 to make healthy red blood cells.',
      explanation: `Vitamin B12 deficiency anemia is like trying to follow a recipe without all the instructions - your body cannot make red blood cells properly without vitamin B12.

**Why B12 Matters:**
Vitamin B12 helps your body make DNA, which is the instruction manual inside every cell. Without enough B12, your bone marrow makes red blood cells that are too big and do not work well.

**What Causes It:**
- Not eating enough foods with B12 (meat, fish, eggs, dairy)
- A stomach problem that stops your body from absorbing B12
- A condition called pernicious anemia where your immune system attacks your stomach
- Some medicines or stomach surgeries

**Common Signs:**
- Feeling very tired and weak
- Shortness of breath
- Pale or yellowish skin
- Tingling or numbness in hands and feet
- Trouble walking or balance problems
- Memory problems or confusion
- Sore, red tongue

**How It's Treated:**
- B12 shots (injections)
- High-dose B12 pills
- Eating more foods with B12`,
      keyTerms: [
        { term: 'vitamin B12', definition: 'A vitamin found in animal foods that your body needs to make red blood cells and keep nerves healthy' },
        { term: 'pernicious anemia', definition: 'A condition where your immune system damages your stomach so you cannot absorb B12', pronunciation: 'per-NISH-us' },
        { term: 'DNA', definition: 'The instructions inside every cell that tell it how to work' },
      ],
      analogies: [
        'Think of B12 like the instructions for building furniture. Without the instructions, you might build something that looks wrong and does not work right.',
        'Making blood cells without B12 is like copying a book with pages missing - the copies turn out wrong.',
      ],
      examples: [
        'A strict vegan who does not take supplements might develop B12 deficiency because plants do not contain B12.',
        'An older person whose stomach no longer makes enough acid might not be able to absorb B12 from food.',
      ],
    },
    2: {
      level: 2,
      summary: 'Vitamin B12 deficiency causes megaloblastic anemia due to impaired DNA synthesis, and can cause irreversible neurological damage if untreated.',
      explanation: `Vitamin B12 (cobalamin) deficiency is a common cause of macrocytic anemia that can affect both the blood and nervous system. It is important to recognize and treat early because neurological damage can be permanent.

**Pathophysiology:**
B12 is a cofactor for two important enzymes:
1. **Methionine synthase**: Converts homocysteine to methionine, regenerating tetrahydrofolate
2. **Methylmalonyl-CoA mutase**: Converts methylmalonyl-CoA to succinyl-CoA

Without B12:
- DNA synthesis is impaired (trapped folate hypothesis)
- Red blood cells grow too large (megaloblastic)
- Myelin synthesis is disrupted (neurological damage)

**Causes:**
- **Pernicious anemia**: Autoimmune destruction of gastric parietal cells/intrinsic factor
- **Dietary deficiency**: Strict vegetarian/vegan diet
- **Malabsorption**: Gastrectomy, ileal resection, Crohn disease
- **Medications**: Metformin, PPIs, H2 blockers
- **Other**: Bacterial overgrowth, tapeworm (Diphyllobothrium latum)

**Clinical Features:**

*Hematologic:*
- Fatigue, weakness, pallor
- Glossitis (beefy red tongue)
- Mild jaundice (from ineffective erythropoiesis)

*Neurologic (can occur without anemia):*
- Peripheral neuropathy (numbness, tingling)
- Subacute combined degeneration of spinal cord
- Ataxia, loss of position sense
- Cognitive changes, dementia

**Laboratory Findings:**
- Macrocytic anemia (MCV >100 fL, often >110 fL)
- Low serum B12 (<200 pg/mL)
- Elevated homocysteine and methylmalonic acid
- Hypersegmented neutrophils (>5 lobes)
- Elevated LDH and indirect bilirubin

**Treatment:**
- Intramuscular B12: 1000 mcg daily x 7 days, then weekly x 4, then monthly
- High-dose oral B12 (1000-2000 mcg/day) can be effective
- Lifelong treatment if pernicious anemia`,
      keyTerms: [
        { term: 'megaloblastic', definition: 'Large, abnormal red blood cell precursors with immature nuclei due to impaired DNA synthesis', pronunciation: 'meg-ah-loh-BLAS-tik' },
        { term: 'intrinsic factor', definition: 'A protein made by stomach cells that is required for B12 absorption in the ileum' },
        { term: 'subacute combined degeneration', definition: 'Spinal cord damage affecting both posterior columns (position sense) and lateral columns (movement)' },
        { term: 'methylmalonic acid', definition: 'A compound that builds up when B12 is deficient; more specific for B12 deficiency than homocysteine' },
        { term: 'hypersegmented neutrophils', definition: 'White blood cells with more than 5 nuclear lobes; a classic sign of megaloblastic anemia' },
      ],
      analogies: [
        'Intrinsic factor is like a key that unlocks the door to let B12 into your body. Without the key, B12 cannot get in.',
        'Megaloblastic cells are like cars on an assembly line that grow bigger and bigger because they cannot complete the final step.',
      ],
    },
    3: {
      level: 3,
      summary: 'Vitamin B12 deficiency results in megaloblastic anemia through impaired thymidylate synthesis, with diagnostic evaluation requiring understanding of B12 absorption physiology and the distinction from folate deficiency.',
      explanation: `## B12 Physiology and Metabolism

**Dietary Sources and Requirements:**
- Found in animal products only
- Daily requirement: 2.4 mcg (adults)
- Body stores: 2-5 mg (liver primarily)
- Time to deficiency: 3-5 years with complete cessation of intake

**Absorption Pathway:**
1. Dietary B12 bound to food proteins
2. Gastric acid and pepsin release B12
3. B12 binds to R-proteins (haptocorrins) in saliva/stomach
4. Pancreatic proteases release B12 from R-proteins
5. B12 binds intrinsic factor (IF) in duodenum
6. IF-B12 complex absorbed in terminal ileum via cubilin receptor
7. B12 released and binds transcobalamin II (TCII) for delivery

**Cellular Metabolism:**
- Methylcobalamin: Cytoplasmic, methionine synthase cofactor
- Adenosylcobalamin: Mitochondrial, methylmalonyl-CoA mutase cofactor

## Pathophysiology

**Methyl-Trap Hypothesis:**
- B12 deficiency traps folate as methyltetrahydrofolate
- Tetrahydrofolate cannot be regenerated
- Thymidylate synthesis impaired
- DNA synthesis slowed, RNA and protein synthesis continue
- Nuclear-cytoplasmic asynchrony (large cell, immature nucleus)

**Neurological Damage:**
- Methylmalonyl-CoA accumulates
- Abnormal fatty acids incorporated into myelin
- Subacute combined degeneration: Posterior and lateral columns
- May be irreversible if treatment delayed >6 months

## Etiology

**Pernicious Anemia:**
- Autoimmune gastritis targeting parietal cells
- Anti-intrinsic factor antibodies (specific, 50-70% sensitive)
- Anti-parietal cell antibodies (sensitive, not specific)
- Associated with other autoimmune diseases
- Increased risk of gastric carcinoid and adenocarcinoma

**Food-Cobalamin Malabsorption:**
- Most common cause in elderly
- Inability to release B12 from food proteins
- Normal IF, can absorb crystalline B12
- Causes: Atrophic gastritis, H. pylori, PPIs, metformin

**Other Causes:**
| Cause | Mechanism |
|-------|-----------|
| Gastrectomy | Loss of IF |
| Ileal resection | Loss of absorption site |
| Crohn disease | Ileal damage |
| Bacterial overgrowth | B12 consumption |
| Diphyllobothrium latum | B12 consumption |
| Nitrous oxide | Inactivates B12 |

## Diagnosis

**Laboratory Findings:**
| Test | Result | Notes |
|------|--------|-------|
| CBC | Macrocytic anemia | MCV often >110 fL |
| Reticulocyte count | Low | Inappropriate |
| Serum B12 | <200 pg/mL | May be borderline normal |
| Methylmalonic acid | Elevated | Specific for B12 |
| Homocysteine | Elevated | Also elevated in folate deficiency |
| LDH | Markedly elevated | Ineffective erythropoiesis |
| Indirect bilirubin | Elevated | Hemolysis |

**Peripheral Smear:**
- Macro-ovalocytes
- Hypersegmented neutrophils (>5 lobes, or >5% with 5 lobes)
- Anisocytosis, poikilocytosis
- Howell-Jolly bodies (if severe)

**Additional Testing:**
- Anti-IF antibodies: High specificity
- Anti-parietal cell antibodies: High sensitivity
- Gastrin level: Elevated in pernicious anemia
- Schilling test: Historical, rarely performed

## Treatment

**Replacement Therapy:**

*Intramuscular:*
- 1000 mcg daily x 7 days
- Then 1000 mcg weekly x 4 weeks
- Then 1000 mcg monthly (lifelong)

*Oral High-Dose:*
- 1000-2000 mcg daily
- ~1% absorbed by passive diffusion (independent of IF)
- Adequate for maintenance, possibly initial therapy

**Monitoring:**
- Reticulocyte count: Peaks 5-7 days
- Hemoglobin: Improves over 6-8 weeks
- MCV normalizes in 8-10 weeks
- Neurological symptoms: Variable recovery

**Cautions:**
- Hypokalemia can occur with rapid correction
- Do not give folate alone (masks anemia, worsens neuro)`,
      keyTerms: [
        { term: 'intrinsic factor', definition: 'Glycoprotein secreted by gastric parietal cells essential for B12 absorption in terminal ileum' },
        { term: 'transcobalamin II', definition: 'Transport protein that delivers B12 to tissues; deficiency causes severe B12 deficiency despite normal serum levels', pronunciation: 'trans-koh-BAL-ah-min' },
        { term: 'methylmalonic acid', definition: 'Substrate of methylmalonyl-CoA mutase that accumulates in B12 deficiency; more specific than homocysteine' },
        { term: 'methyl-trap hypothesis', definition: 'Theory that B12 deficiency traps folate as methyltetrahydrofolate, causing functional folate deficiency' },
        { term: 'nuclear-cytoplasmic asynchrony', definition: 'Characteristic of megaloblastic cells: large cytoplasm with immature nucleus due to delayed DNA synthesis' },
      ],
      clinicalNotes: 'Anti-IF antibodies are highly specific for pernicious anemia but only 50-70% sensitive. A negative result does not exclude the diagnosis. Always check B12 level in unexplained macrocytosis, neuropsychiatric symptoms, or pancytopenia.',
    },
    4: {
      level: 4,
      summary: 'B12 deficiency diagnosis requires integration of clinical findings with a hierarchy of testing strategies, recognizing limitations of serum B12 levels and the importance of functional markers in borderline cases.',
      explanation: `## Advanced Pathophysiology

**Molecular Mechanisms:**

*Methionine Synthase Reaction:*
\`\`\`
Homocysteine + 5-methylTHF → Methionine + THF (catalyzed by methylcobalamin)
\`\`\`
- Regenerates THF for thymidylate synthesis
- Provides methyl groups for SAM (S-adenosylmethionine)

*Methylmalonyl-CoA Mutase:*
\`\`\`
Methylmalonyl-CoA → Succinyl-CoA (catalyzed by adenosylcobalamin)
\`\`\`
- Part of odd-chain fatty acid and amino acid metabolism
- Mitochondrial reaction

**Neurological Damage Mechanisms:**
1. Methylmalonyl-CoA accumulation → abnormal fatty acid synthesis
2. Impaired SAM-dependent methylation of myelin basic protein
3. Reduced myelin lipid synthesis
4. Possible role of elevated homocysteine in endothelial damage

**Subacute Combined Degeneration:**
- Posterior columns: Loss of position/vibration sense
- Lateral columns: Upper motor neuron signs (spasticity, hyperreflexia)
- Peripheral neuropathy may mask upper motor neuron findings
- Can occur with normal or near-normal hemoglobin

## Diagnostic Algorithm

**Serum B12 Limitations:**
- Assay variability significant
- Falsely low: Pregnancy, folate deficiency, multiple myeloma
- Falsely normal: Liver disease, myeloproliferative disorders, TCII deficiency

**Functional Markers:**

| Marker | B12 Deficiency | Folate Deficiency |
|--------|----------------|-------------------|
| Homocysteine | Elevated | Elevated |
| Methylmalonic acid | Elevated | Normal |
| Serum B12 | Low | Normal |
| RBC folate | Normal/Low* | Low |

*Low due to impaired cellular folate uptake

**Diagnostic Hierarchy:**

1. **Serum B12 <200 pg/mL**: Deficiency confirmed
2. **Serum B12 200-300 pg/mL**: Indeterminate, check MMA
3. **Elevated MMA**: B12 deficiency confirmed
4. **Normal MMA**: B12 deficiency unlikely

**HoloTC (Holotranscobalamin):**
- Active B12 fraction (bound to TCII)
- Earlier marker than total B12
- Not widely available
- May be useful in borderline cases

## Special Populations

**Elderly:**
- Food-cobalamin malabsorption most common
- Atrophic gastritis affects 20-50% of elderly
- Neuropsychiatric symptoms may mimic dementia
- Lower threshold for supplementation

**Gastric Surgery:**
- Post-gastrectomy: Supplement immediately
- Gastric bypass: High risk, prophylaxis essential
- Monitoring annually

**Pregnancy:**
- B12 demands increased
- Deficiency can cause neural tube defects
- Exclusively breastfed infants of deficient mothers at risk
- Supplement vegan mothers

**Nitrous Oxide:**
- Irreversibly oxidizes B12
- Acute myelopathy after recreational/surgical exposure
- Risk increased with marginal B12 status
- Case reports of severe neuro damage after single anesthetic

## Pernicious Anemia Deep Dive

**Autoimmune Features:**
- Type A chronic atrophic gastritis
- Anti-parietal cell antibodies (90% sensitive)
- Anti-intrinsic factor antibodies (50-70% sensitive)
- Associated conditions: Thyroid disease, vitiligo, Addison disease

**Cancer Risk:**
- Gastric carcinoid tumors (from ECL cell hyperplasia)
- Gastric adenocarcinoma (3-fold increased risk)
- Consider surveillance endoscopy

**Genetic Factors:**
- HLA-DRB1*03 and DRB1*04 associations
- Family clustering
- Not classic Mendelian inheritance

## Treatment Nuances

**Oral vs Parenteral:**

Arguments for high-dose oral:
- 1% passive absorption bypasses IF
- Studies show equivalence for maintenance
- Patient convenience, no injections
- May be adequate for initial therapy in uncomplicated cases

Arguments for parenteral:
- Guaranteed absorption
- Traditional approach
- Preferred for neurological involvement
- Better for acute severe cases

**Treatment Response:**
- Reticulocytosis: Days 3-5, peaks day 7
- Hemoglobin: 1-2 g/dL increase per week
- Neurological: Variable, may take months
- Hypersegmented neutrophils: Persist for 2 weeks

**Complications of Treatment:**
- Hypokalemia (intracellular shift)
- Hyperuricemia (cell turnover)
- Iron deficiency may become apparent
- Thrombocytosis (transient)

## Distinguishing B12 from Folate Deficiency

| Feature | B12 Deficiency | Folate Deficiency |
|---------|----------------|-------------------|
| Neurological findings | Common | Absent |
| Time to deficiency | 3-5 years | 3-4 months |
| MMA | Elevated | Normal |
| Serum B12 | Low | Normal |
| Serum folate | Normal/low | Low |
| RBC folate | Normal/low | Low |
| Response to B12 | Yes | No |
| Response to folate | Partial (masks anemia) | Yes |`,
      keyTerms: [
        { term: 'holotranscobalamin', definition: 'B12 bound to transcobalamin II; represents the biologically active fraction and earliest marker of deficiency' },
        { term: 'food-cobalamin malabsorption', definition: 'Inability to release B12 from food proteins despite normal IF; most common cause of B12 deficiency in elderly' },
        { term: 'subacute combined degeneration', definition: 'Demyelination of posterior and lateral columns of spinal cord causing sensory ataxia and upper motor neuron signs' },
        { term: 'ECL cell hyperplasia', definition: 'Enterochromaffin-like cell proliferation due to chronic hypergastrinemia in pernicious anemia; precursor to carcinoid' },
        { term: 'SAM', definition: 'S-adenosylmethionine; universal methyl donor synthesized from methionine; reduced in B12 deficiency' },
      ],
      clinicalNotes: 'Nitrous oxide exposure can precipitate acute B12 deficiency in patients with marginal stores. Consider B12 testing before elective surgery in at-risk patients. Neurological damage from B12 deficiency may progress despite hematological correction if treatment is delayed.',
    },
    5: {
      level: 5,
      summary: 'Contemporary B12 deficiency management integrates emerging understanding of cobalamin metabolism, novel diagnostic approaches, and recognition of population-level screening implications, with particular attention to at-risk groups and treatment optimization.',
      explanation: `## Molecular and Genetic Perspectives

**Cobalamin Processing Pathway:**

1. **Absorption defects:**
   - Intrinsic factor deficiency (GIF mutations)
   - Imerslund-Grasbeck syndrome (CUBN, AMN mutations)
   - Transcobalamin II deficiency (TCN2 mutations)

2. **Intracellular processing defects (cobalamin complementation groups):**
   - cblA (MMAA): Adenosylcobalamin synthesis
   - cblB (MMAB): Adenosylcobalamin synthesis
   - cblC (MMACHC): Most common; combined homocystinuria and methylmalonic aciduria
   - cblD (MMADHC): Variable phenotype
   - cblE (MTRR): Methionine synthase reductase
   - cblF (LMBRD1): Lysosomal cobalamin transport
   - cblG (MTR): Methionine synthase
   - cblJ (ABCD4): Lysosomal export

**Clinical Implications of Genetic Disorders:**
- Present in infancy/childhood with metabolic crisis
- cblC: Most common; neurological, ophthalmological, hematological findings
- May respond to high-dose hydroxocobalamin
- Genetic testing for unexplained cases, especially pediatric

## Contemporary Diagnostic Approach

**Limitations of Current Testing:**

*Serum B12:*
- Assay variability: CV 10-30% between methods
- 5-10% of deficient patients have "normal" levels
- Affected by binding protein abnormalities

*Methylmalonic Acid:*
- Elevated in renal insufficiency
- Reference ranges vary by method
- Most specific readily available test

**Emerging Biomarkers:**

| Marker | Advantages | Limitations |
|--------|------------|-------------|
| HoloTC | Early marker, less affected by inflammation | Limited availability |
| Combined indicators (4cB12) | Integrates multiple markers | Complex, research stage |
| cB12 score | Validated combined indicator | Not routine |

**4cB12 Score:**
- Combines: B12, holoTC, MMA, homocysteine
- Continuous variable
- Better classification in indeterminate cases
- May replace arbitrary cutoffs

## Population Health Considerations

**Screening Recommendations:**

*High-risk groups requiring screening:*
- Strict vegetarians/vegans
- Post-bariatric surgery patients
- Elderly with unexplained neurological/psychiatric symptoms
- Metformin users (consider after 5 years)
- HIV patients
- Autoimmune disease patients

*Fortification debate:*
- Mandatory folic acid fortification (US, Canada)
- B12 fortification not mandated
- Concerns: Masking B12 deficiency with folate
- May increase colorectal cancer with high folate/low B12

**Metformin-Associated Deficiency:**
- Mechanism: Calcium-dependent IF-B12-cubilin interaction
- Dose and duration dependent
- Up to 30% of long-term users
- ADA recommends periodic monitoring
- Calcium supplementation may reduce risk

## Treatment Optimization

**Formulation Considerations:**

| Form | Characteristics |
|------|-----------------|
| Cyanocobalamin | Stable, inexpensive, requires conversion |
| Hydroxocobalamin | Longer tissue retention, used in cyanide poisoning |
| Methylcobalamin | Active form, theoretical advantages, less stable |
| Adenosylcobalamin | Active form, not widely available |

**Route Selection:**

*Evidence for oral therapy:*
- Cochrane review: High-dose oral as effective as parenteral
- BOLUS trial: Oral adequate for symptomatic patients
- 1-2% absorbed passively, bypassing IF
- Cost-effective, patient-friendly

*When to prefer parenteral:*
- Severe neurological involvement
- Very low levels (<100 pg/mL)
- Malabsorption syndromes
- Patient preference/adherence concerns
- Initial therapy for severe deficiency

**Duration:**
- Lifelong if pernicious anemia or irreversible cause
- Dietary deficiency: May stop once replete and diet corrected
- Post-surgical: Lifelong

## Complex Clinical Scenarios

**B12 Deficiency with Concurrent Iron Deficiency:**
- May mask macrocytosis (normocytic or microcytic)
- Dimorphic blood picture
- Treat both simultaneously
- Monitor for reticulocyte response to each

**B12 Deficiency and Folate Deficiency:**
- Combined deficiency possible (malnutrition, malabsorption)
- Always give B12 first or concurrently
- Folate alone can precipitate/worsen neurological damage

**Renal Insufficiency and MMA:**
- MMA elevated in renal failure
- Less reliable marker
- HoloTC may be more useful
- Clinical judgment required

**Pregnancy:**
- Deficiency associated with:
  - Neural tube defects
  - Preeclampsia
  - Recurrent pregnancy loss
  - Low birth weight
- Screen high-risk women
- Supplement vegans: 2.6 mcg/day (may need more)
- B12 in breast milk dependent on maternal status

## Future Directions

**Research Areas:**
- Point-of-care testing
- Improved combined diagnostic algorithms
- Genetic screening for inborn errors
- Optimal fortification strategies
- Long-term outcomes of oral therapy

**Novel Therapeutics:**
- Intranasal cobalamin (FDA approved, variable absorption)
- Sublingual preparations (limited evidence)
- Development of IF-independent absorption strategies

## Quality and Safety Metrics

**Performance Measures:**
- MMA testing in indeterminate B12 levels
- Neurological examination in all B12 deficiency
- Anti-IF antibodies in unexplained B12 deficiency
- Surveillance endoscopy discussion in pernicious anemia
- Monitoring of high-risk populations

**Avoiding Pitfalls:**
- Never give folate without ruling out B12 deficiency
- Consider B12 deficiency in any unexplained neuropsychiatric presentation
- Test before and after starting supplements (difficult to interpret later)
- Monitor potassium with treatment initiation
- Document neurological status at baseline`,
      keyTerms: [
        { term: 'cobalamin complementation groups', definition: 'Classification of genetic disorders of intracellular B12 metabolism based on cell fusion complementation studies' },
        { term: 'cblC disease', definition: 'Most common inborn error of B12 metabolism (MMACHC gene); causes combined methylmalonic aciduria and homocystinuria' },
        { term: 'holotranscobalamin (holoTC)', definition: 'B12 bound to transcobalamin II; earliest marker of B12 deficiency, not affected by pregnancy or oral contraceptives' },
        { term: '4cB12/cB12 score', definition: 'Combined indicator of B12 status integrating multiple biomarkers for improved diagnostic accuracy' },
        { term: 'food-cobalamin malabsorption', definition: 'Inability to liberate B12 from food proteins; distinct from pernicious anemia, responds to crystalline B12' },
      ],
      clinicalNotes: `**Board-Relevant Pearls:**
- MMA is elevated and homocysteine is elevated in B12 deficiency; only homocysteine elevated in folate deficiency
- Anti-IF antibodies are highly specific but only 50-70% sensitive
- Neurological findings can occur without anemia and may be irreversible
- Nitrous oxide exposure can precipitate acute B12 deficiency
- High-dose oral B12 is effective even without intrinsic factor (1% passive absorption)
- Folate alone can correct anemia but worsen neurological damage
- Metformin-associated B12 deficiency is calcium-dependent and dose-related
- Consider malignancy surveillance in pernicious anemia (carcinoid, adenocarcinoma)`,
    },
  },

  media: [
    {
      id: 'b12-absorption-pathway',
      type: 'diagram',
      filename: 'b12-absorption-pathway.svg',
      title: 'Vitamin B12 Absorption Pathway',
      description: 'Steps from dietary intake to cellular delivery of cobalamin',
    },
    {
      id: 'megaloblastic-smear',
      type: 'histology',
      filename: 'megaloblastic-blood-smear.jpg',
      title: 'Peripheral Blood Smear in Megaloblastic Anemia',
      description: 'Macro-ovalocytes and hypersegmented neutrophils',
    },
    {
      id: 'subacute-combined-degeneration',
      type: 'diagram',
      filename: 'subacute-combined-degeneration.svg',
      title: 'Subacute Combined Degeneration',
      description: 'Spinal cord pathology showing posterior and lateral column involvement',
    },
  ],

  citations: [
    {
      id: 'green-2017',
      type: 'article',
      title: 'Vitamin B12 deficiency',
      authors: ['Green R', 'Allen LH', 'Bjorke-Monsen AL'],
      source: 'Nature Reviews Disease Primers',
      url: 'https://doi.org/10.1038/nrdp.2017.40',
    },
    {
      id: 'stabler-2013',
      type: 'article',
      title: 'Vitamin B12 deficiency',
      authors: ['Stabler SP'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMcp1113996',
    },
    {
      id: 'williams-hematology-b12',
      type: 'textbook',
      title: 'Cobalamin and Folate Deficiency',
      source: 'Williams Hematology',
      chapter: '41',
    },
  ],

  crossReferences: [
    { targetId: 'condition-folate-deficiency', targetType: 'condition', relationship: 'related', label: 'Folate Deficiency' },
    { targetId: 'condition-pernicious-anemia', targetType: 'condition', relationship: 'related', label: 'Pernicious Anemia' },
    { targetId: 'structure-stomach-parietal-cells', targetType: 'structure', relationship: 'related', label: 'Gastric Parietal Cells' },
    { targetId: 'structure-terminal-ileum', targetType: 'structure', relationship: 'related', label: 'Terminal Ileum' },
  ],

  tags: {
    systems: ['hematologic', 'nervous'],
    topics: ['anemia', 'vitamin deficiency', 'megaloblastic anemia', 'hematology', 'neurology'],
    keywords: ['macrocytic', 'megaloblastic', 'cobalamin', 'intrinsic factor', 'pernicious anemia'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'neurology', 'family medicine'],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default vitaminB12DeficiencyAnemia;
