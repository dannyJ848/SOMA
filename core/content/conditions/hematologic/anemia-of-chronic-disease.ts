/**
 * Anemia of Chronic Disease - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const anemiaOfChronicDisease: EducationalContent = {
  id: 'condition-anemia-chronic-disease',
  type: 'condition',
  name: 'Anemia of Chronic Disease',
  alternateNames: ['Anemia of Inflammation', 'Anemia of Chronic Disorders', 'ACD'],
  hpoId: 'HP:0001903',

  levels: {
    1: {
      level: 1,
      summary: 'Anemia of chronic disease is a type of anemia that happens when you have a long-term illness like arthritis, infection, or cancer.',
      explanation: `When your body is fighting a long-term illness or inflammation, it changes how it uses iron. This can lead to anemia (not enough healthy red blood cells) even if you have enough iron in your body.

**What causes it:**
- Long-term infections (like tuberculosis or HIV)
- Autoimmune diseases (like rheumatoid arthritis or lupus)
- Chronic kidney disease
- Cancer
- Other inflammatory conditions

**Symptoms:**
- Feeling tired and weak
- Pale skin
- Shortness of breath with activity
- Symptoms may be mild because the anemia develops slowly

**What is happening in the body:**
- Your immune system is activated from the chronic illness
- This affects how your body makes red blood cells
- Your body stores iron instead of using it to make blood cells

**Treatment:**
- Treat the underlying condition
- Sometimes iron supplements or other medications
- In severe cases, medications to boost red blood cell production`,
      keyTerms: [
        { term: 'anemia', definition: 'When you do not have enough healthy red blood cells to carry oxygen' },
        { term: 'inflammation', definition: 'Your body\'s response to illness or injury that causes swelling and immune system activation' },
        { term: 'chronic disease', definition: 'A health condition that lasts a long time or keeps coming back' },
      ],
      analogies: ['In anemia of chronic disease, your body hoards iron like a squirrel storing nuts for winter—it locks iron away instead of using it.'],
      examples: ['Someone with rheumatoid arthritis who feels tired may have anemia of chronic disease from the ongoing inflammation.'],
    },
    2: {
      level: 2,
      summary: 'Anemia of chronic disease is the second most common anemia after iron deficiency, characterized by mild to moderate anemia, low serum iron, normal/high ferritin, and low TIBC due to inflammatory cytokine effects.',
      explanation: `## Overview
Anemia of chronic disease (ACD), also called anemia of inflammation, occurs in association with:
- Chronic infections
- Autoimmune diseases
- Cancer
- Chronic kidney disease

## Laboratory Findings

**CBC:**
- Mild to moderate anemia (Hgb 8-10 g/dL typically)
- Normocytic or mildly microcytic
- Normal or low RBC count

**Iron Studies Pattern:**

| Test | Result |
|------|--------|
| Serum iron | Low |
| Ferritin | Normal or High |
| TIBC | Low |
| Transferrin saturation | Low |

**Key:** Ferritin is normal or high (unlike iron deficiency)

## Pathophysiology

**Hepcidin-Mediated Iron Sequestration:**
- Inflammation increases hepcidin
- Hepcidin blocks iron absorption in gut
- Hepcidin traps iron in macrophages
- Iron unavailable for erythropoiesis

**Decreased Erythropoiesis:**
- Cytokines suppress EPO production
- Cytokines reduce bone marrow response to EPO
- Shortened RBC survival

## Causes

**Inflammatory Conditions:**
- Rheumatoid arthritis
- Lupus
- Inflammatory bowel disease
- Sarcoidosis

**Chronic Infections:**
- Osteomyelitis
- Tuberculosis
- HIV
- Hepatitis C

**Malignancy:**
- Solid tumors
- Lymphoma
- Multiple myeloma

**Other:**
- Chronic kidney disease (additional mechanisms)

## Treatment

**Primary Approach:**
- Treat underlying condition
- Anemia often improves with disease control

**Specific Therapies:**
- IV iron (functional iron deficiency may coexist)
- ESAs for CKD, some cancers
- Treat inflammation (biologics may improve anemia)`,
      keyTerms: [
        { term: 'hepcidin', definition: 'Liver-produced hormone that regulates iron; increased by inflammation, causing iron sequestration' },
        { term: 'functional iron deficiency', definition: 'Adequate iron stores but iron is unavailable for erythropoiesis' },
        { term: 'ESA', definition: 'Erythropoiesis-stimulating agent; medication that boosts red blood cell production' },
      ],
      clinicalNotes: 'Ferritin can be elevated as an acute phase reactant in inflammation. In inflammatory states, ferritin <100 ng/mL may still indicate iron deficiency. Check CRP or ESR to assess inflammation.',
    },
    3: {
      level: 3,
      summary: 'Anemia of chronic disease results from inflammatory cytokine-mediated hepcidin elevation causing iron sequestration in macrophages, decreased intestinal iron absorption, impaired erythropoietin production, and reduced bone marrow responsiveness.',
      explanation: `## Pathophysiology in Detail

**Hepcidin: The Central Mediator**
- Produced by hepatocytes
- Upregulated by IL-6 (via JAK/STAT pathway)
- Binds to ferroportin (iron export channel)
- Causes ferroportin degradation
- Traps iron in macrophages and enterocytes

**Three-Mechanism Model:**

1. **Iron Restrictive Erythropoiesis:**
   - Hepcidin-mediated ferroportin degradation
   - Iron trapped in macrophages
   - Decreased dietary iron absorption
   - Serum iron low, marrow iron absent

2. **Blunted Erythropoietic Response:**
   - TNF-alpha and IL-1 suppress EPO production
   - IFN-gamma inhibits erythroid progenitors
   - Reduced bone marrow sensitivity to EPO

3. **Shortened RBC Survival:**
   - Macrophage activation increases phagocytosis
   - RBC lifespan shortened to 60-90 days

## Diagnostic Approach

**Iron Studies Pattern:**

| Parameter | ACD | Iron Deficiency |
|-----------|-----|-----------------|
| Serum iron | Low | Low |
| Ferritin | Normal/High | Low |
| TIBC | Low | High |
| Transferrin saturation | Low | Low |
| sTfR | Normal | High |

**Additional Tests:**
- CRP or ESR (to confirm inflammation)
- Soluble transferrin receptor (sTfR): Normal in ACD, high in IDA
- sTfR/log ferritin ratio: Helps distinguish

**Bone Marrow (rarely needed):**
- Normal or increased iron stores
- Absent iron in erythroid precursors (iron restriction)

## Differential Diagnosis

**ACD + Iron Deficiency:**
- Common in chronic diseases with blood loss
- Ferritin may be normal (not high)
- sTfR elevated
- May need trial of iron therapy

**Thalassemia Trait:**
- Normal iron studies
- Very low MCV often present
- Mentzer index (MCV/RBC count) useful
- Hemoglobin electrophoresis

## Treatment Strategies

**Treat Underlying Disease:**
- Control inflammation (DMARDs, biologics)
- Treat infection
- Cancer therapy

**Iron Supplementation:**
- Oral iron often ineffective (hepcidin blocks absorption)
- IV iron may bypass hepcidin blockade
- Consider if functional iron deficiency (ferritin <100, TSAT <20%)

**Erythropoiesis-Stimulating Agents:**
- Indicated with CKD
- Cancer-related anemia (with chemotherapy)
- Goal Hgb 10-11 g/dL (not normalize)

**Investigational:**
- Hepcidin antagonists (in development)
- Anti-IL-6 therapies`,
      keyTerms: [
        { term: 'ferroportin', definition: 'Cellular iron export channel; degraded by hepcidin binding' },
        { term: 'iron-restrictive erythropoiesis', definition: 'Anemia where iron is present but unavailable for hemoglobin synthesis' },
        { term: 'sTfR', definition: 'Soluble transferrin receptor; elevated in iron deficiency, normal in anemia of chronic disease' },
      ],
      clinicalNotes: 'The sTfR/log ferritin ratio helps distinguish ACD from iron deficiency when ferritin is in the intermediate range (30-100 ng/mL). A ratio <1 suggests ACD; >2 suggests iron deficiency.',
    },
    4: {
      level: 4,
      summary: 'Advanced management of anemia of inflammation addresses functional iron deficiency, combination iron/ESA therapy, hepcidin-modulating strategies, and special populations including CKD, cancer, and autoimmune disease with attention to cardiovascular risks.',
      explanation: `## Functional Iron Deficiency in ACD

**Definition:**
- Adequate iron stores (ferritin ≥100)
- Insufficient iron for erythropoiesis (TSAT <20%)
- Common in inflammatory states

**Diagnosis:**
- Ferritin 100-500 ng/mL
- TSAT <20%
- sTfR may be elevated
- Percentage of hypochromatic RBCs >2.5%

**Treatment:**
- IV iron preferred (bypasses hepcidin)
- Oral iron ineffective
- Improves ESA response in CKD

## CKD-Related Anemia

**Pathophysiology:**
- Primary EPO deficiency
- Uremic inhibitors
- Iron restriction from inflammation
- Shortened RBC survival

**Treatment Approach:**

| Hgb Level | Action |
|-----------|--------|
| <10 g/dL | Evaluate/treat |
| 10-11 g/dL | ESA may be considered |
| >11 g/dL | Avoid ESA (CV risk) |

**ESAs in CKD:**
- Epoetin alfa, darbepoetin alfa
- Start when Hgb 9-10 if symptomatic
- Avoid normalization (Hgb >11)
- Iron replete first (TSAT >20%, ferritin >100)

**IV Iron in CKD:**
- Ferric carboxymaltose, iron sucrose
- TSAT <20% and ferritin <500: give iron
- Avoid routine iron if ferritin >500

## Cancer-Related Anemia

**Chemotherapy-Induced:**
- ESAs reduce transfusion needs
- Start when Hgb <10 g/dL
- Avoid Hgb >11 g/dL
- Discontinue after chemotherapy

**Contraindications:**
- Curative intent treatment
- Not receiving chemotherapy
- ESA may stimulate tumor growth

**Black Box Warning:**
- Tumor progression
- Thromboembolism
- Mortality

## Autoimmune Disease

**Rheumatoid Arthritis:**
- Anemia correlates with disease activity
- Treat inflammation (DMARDs, biologics)
- TNF inhibitors may improve anemia
- IV iron if TSAT <20%

**IBD:**
- Iron deficiency common (blood loss + malabsorption)
- ACD component from inflammation
- IV iron often needed (oral poorly tolerated)
- Treat underlying IBD

## Hepcidin-Targeted Therapies

**Anti-Hepcidin Strategies:**

| Agent | Mechanism | Status |
|-------|-----------|--------|
| Rusfertide | Hepcidin antagonist | Phase 3 |
| Vamifeport | Ferroportin stabilizer | Phase 2 |
| Anti-IL-6 | Reduces hepcidin production | Approved (tocilizumab) |
| Luspatercept | Late-stage erythropoiesis stimulator | Approved (beta-thalassemia) |

## Cardiovascular Risk

**ESA Safety:**
- TREAT trial: Higher target Hgb increased stroke
- Normalization (Hgb >11) increases CV events
- Balance benefits vs risks

**Anemia itself as CV risk:**
- Worsens heart failure
- Increases mortality
- Moderate correction beneficial

## Monitoring

**Response Assessment:**
- Hgb rise of 1 g/dL over 4 weeks
- Reticulocytosis with IV iron
- Iron studies after IV iron

**Frequency:**
- CKD: Monthly during ESA initiation, then q3 months
- Cancer: Every 2-3 weeks during chemotherapy
- Autoimmune: With disease activity monitoring`,
      keyTerms: [
        { term: 'functional iron deficiency', definition: 'Adequate iron stores but insufficient iron available for erythropoiesis despite adequate stores' },
        { term: 'percentage of hypochromatic RBCs', definition: 'Laboratory measure of red cells with insufficient hemoglobin; >2.5% indicates iron-restricted erythropoiesis' },
        { term: 'TREAT trial', definition: 'Trial showing higher Hgb targets with ESA in CKD increased stroke risk without improving quality of life' },
      ],
      clinicalNotes: 'In CKD, avoid Hgb targets >11 g/dL with ESAs due to increased stroke and cardiovascular mortality. In cancer-related anemia, ESAs should only be used with myelosuppressive chemotherapy and discontinued when chemotherapy completes.',
    },
    5: {
      level: 5,
      summary: 'Precision management of anemia of inflammation integrates hepcidin diagnostics, novel hepcidin-targeted therapeutics, individualized ESA and iron dosing based on biomarker response, and understanding of inflammation-anemia interplay in various disease states.',
      explanation: `## Precision Diagnostics

**Hepcidin as Biomarker:**
- Distinguishes ACD from iron deficiency
- Guides IV iron vs ESA therapy
- Prognostic in various diseases
- Assays becoming clinically available

**Hepcidin Interpretation:**

| Hepcidin | Ferritin | Interpretation |
|----------|----------|----------------|
| High | High | Pure ACD |
| Low | Low | Iron deficiency |
| Intermediate | Intermediate | Mixed/functional deficiency |

**Novel Biomarkers:**
- Growth differentiation factor 15 (GDF15)
- Twisted gastrulation protein (TWSG1)
- Erythroferrone (ERFE): Suppresses hepcidin during erythropoiesis

## Hepcidin-Targeted Therapeutics

**Direct Hepcidin Inhibitors:**

**Rusfertide (PTG-300):**
- Hepcidin antisense (spiegelmer)
- Phase 3 for polycythemia vera
- Increases iron availability
- Potential for ACD

**Antibody Approaches:**
- Anti-hepcidin antibodies (LY2787106)
- Anti-IL-6 (already approved: tocilizumab, siltuximab)
- Reduce hepcidin production

**Ferroportin Stabilizers:**
- Vamifeport (VIT-2763)
- Prevents ferroportin degradation
- Oral agent in development

## Modified ESA Molecules

**Peginesatide:**
- PEGylated ESA
- Withdrawn (cardiovascular safety)

**Hypoxia-Inducible Factor Prolyl Hydroxylase Inhibitors (HIF-PHIs):**
- Roxadustat, daprodustat, vadadustat
- Stimulate endogenous EPO production
- Improve iron mobilization
- Approved in some countries for CKD

**HIF-PHI Advantages:**
- Oral administration
- Improves iron availability
- May reduce need for IV iron

**HIF-PHI Concerns:**
- Theoretical tumor promotion
- Pulmonary hypertension signal
- Cardiovascular outcomes under investigation

## Individualized Therapy

**Biomarker-Guided ESA Dosing:**
- Hyporesponders: TSAT <20%, ferritin <100
- Check iron before escalating ESA
- Maximize iron stores first

**Pharmacogenomics:**
- EPO receptor polymorphisms
- Varying response to ESAs
- Not yet clinically useful

## Disease-Specific Approaches

**Heart Failure:**
- Anemia common (mixed etiology)
- IV iron improves symptoms (FAIR-HF)
- ESA not routinely recommended
- SGLT2 inhibitors may help

**Critical Care:**
- Anemia multifactorial
- Restrictive transfusion strategy (Hgb <7)
- ESAs not beneficial
- Iron studies often misleading

**Elderly:**
- Unexplained anemia common
- "Unexplained anemia of elderly"
- May be relative EPO deficiency
- Low-dose ESA under investigation

**COVID-19:**
- Cytokine storm causes high hepcidin
- Significant iron restriction
- Heparin (anti-inflammatory) may improve anemia
- Outcomes worse with anemia

## Future Directions

**Combination Therapies:**
- Hepcidin inhibitor + ESA
- HIF-PHI + oral iron
- Anti-IL-6 + ESAs

**Anemia as Risk Factor:**
- Not just symptom but contributor
- Treatment may improve outcomes
- Ongoing research on optimal targets

**Personalized Iron Dosing:**
- Weight-based vs fixed dosing
- Single vs divided doses
- Ferric carboxymaltose: Hypophosphatemia risk
- Iron isomaltoside: Lower phosphate risk`,
      keyTerms: [
        { term: 'ERFE', definition: 'Erythroferrone; hormone produced by erythroblasts that suppresses hepcidin during active erythropoiesis' },
        { term: 'HIF-PHI', definition: 'Hypoxia-inducible factor prolyl hydroxylase inhibitor; stimulates endogenous EPO production and iron availability' },
        { term: 'spiegelmer', definition: 'Mirror-image oligonucleotide that binds targets; rusfertide is a hepcidin spiegelmer' },
        { term: 'unexplained anemia of elderly', definition: 'Anemia in older adults without clear cause; may represent age-related EPO resistance or mild inflammation' },
      ],
      clinicalNotes: 'Hepcidin assays are increasingly available and can help distinguish iron deficiency from anemia of inflammation when ferritin is in the intermediate range. HIF-PHIs represent a novel oral approach for CKD anemia that improves both EPO production and iron availability.',
    },
  },

  media: [],
  citations: [
    { id: 'ash-acd-2020', type: 'article', title: 'ASH Guidelines for Anemia of Chronic Disease', source: 'Blood Advances' },
    { id: 'goodnough-acd', type: 'article', title: 'Anemia of Chronic Disease', source: 'UpToDate' },
  ],
  crossReferences: [
    { targetId: 'condition-iron-deficiency-anemia', targetType: 'condition', relationship: 'related', label: 'Iron Deficiency Anemia' },
    { targetId: 'condition-b12-folate-deficiency', targetType: 'condition', relationship: 'related', label: 'B12/Folate Deficiency' },
  ],
  tags: { systems: ['hematologic'], topics: ['hematology', 'inflammation'], keywords: ['anemia of chronic disease', 'hepcidin', 'functional iron deficiency', 'anemia of inflammation'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] } },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default anemiaOfChronicDisease;
