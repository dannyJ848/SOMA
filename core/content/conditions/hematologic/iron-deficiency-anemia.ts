/**
 * Iron Deficiency Anemia - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const ironDeficiencyAnemia: EducationalContent = {
  id: 'condition-iron-deficiency-anemia',
  type: 'condition',
  name: 'Iron Deficiency Anemia',
  alternateNames: ['IDA', 'Iron-Deficiency Anemia', 'Microcytic Anemia'],
  hpoId: 'HP:0001891',

  levels: {
    1: {
      level: 1,
      summary: 'Iron deficiency anemia is when your body does not have enough iron to make healthy red blood cells, causing fatigue and weakness.',
      explanation: `Iron is needed to make hemoglobin, the part of red blood cells that carries oxygen. Without enough iron, you cannot make enough healthy red blood cells.

**Symptoms:**
- Fatigue and weakness
- Pale skin
- Shortness of breath
- Dizziness
- Cold hands and feet
- Brittle nails
- Cravings for non-food items (ice, dirt)

**Causes:**
- Blood loss (periods, GI bleeding)
- Not enough iron in diet
- Inability to absorb iron
- Pregnancy

**Treatment:** Iron supplements, treating the underlying cause`,
      keyTerms: [
        { term: 'anemia', definition: 'When you do not have enough healthy red blood cells' },
        { term: 'hemoglobin', definition: 'The part of red blood cells that carries oxygen' },
        { term: 'iron', definition: 'A mineral needed to make hemoglobin' },
      ],
      analogies: ['Iron is like fuel for your red blood cells—without it, they cannot carry oxygen properly.'],
      examples: ['A woman with heavy periods who feels tired and looks pale may have iron deficiency anemia.'],
    },
    2: {
      level: 2,
      summary: 'Iron deficiency anemia presents with microcytic, hypochromic anemia and low iron studies, requiring identification of the underlying cause and iron replacement.',
      explanation: `## Diagnosis
**CBC Findings:**
- Low hemoglobin/hematocrit
- Low MCV (microcytic)
- Low MCH/MCHC (hypochromic)
- High RDW

**Iron Studies:**
| Parameter | Iron Deficiency |
|-----------|-----------------|
| Serum iron | Low |
| Ferritin | Low (<30 ng/mL) |
| TIBC | High |
| Transferrin saturation | Low (<20%) |

## Causes
- **Blood loss:** GI (occult), menstrual, urologic
- **Decreased absorption:** Celiac, gastric bypass, H. pylori
- **Increased demand:** Pregnancy, growth
- **Inadequate intake:** Vegetarian, elderly

## Treatment
**Oral Iron:**
- Ferrous sulfate 325mg (65mg elemental iron) daily
- Take on empty stomach with vitamin C
- Expect hemoglobin rise 1-2 g/dL in 2-4 weeks

**IV Iron:**
- For malabsorption, intolerance, severe anemia
- Ferric carboxymaltose, iron sucrose, ferumoxytol`,
      keyTerms: [
        { term: 'ferritin', definition: 'Storage form of iron; low levels indicate iron deficiency' },
        { term: 'TIBC', definition: 'Total iron-binding capacity; elevated in iron deficiency' },
        { term: 'microcytic', definition: 'Small red blood cells (low MCV)' },
      ],
    },
    3: {
      level: 3,
      summary: 'Iron deficiency progresses from depleted stores to iron-deficient erythropoiesis to frank anemia, with evaluation for underlying cause mandatory, especially GI sources in adults.',
      explanation: `## Iron Metabolism
- Absorption in duodenum (regulated by hepcidin)
- Transported by transferrin
- Stored as ferritin
- No active excretion mechanism

## Stages of Iron Deficiency
1. **Iron depletion:** Low ferritin, normal Hgb
2. **Iron-deficient erythropoiesis:** Low serum iron, TIBC high, early MCV drop
3. **Iron deficiency anemia:** Low Hgb, microcytosis, hypochromia

## Differential of Microcytic Anemia
| Condition | Iron | Ferritin | TIBC |
|-----------|------|----------|------|
| Iron deficiency | Low | Low | High |
| Anemia of chronic disease | Low | Normal/High | Low |
| Thalassemia | Normal | Normal | Normal |
| Sideroblastic | High | High | Low |

## GI Evaluation
**When to scope:**
- Men with IDA
- Postmenopausal women
- All patients without obvious source
- Upper and lower endoscopy
- Consider celiac serology, H. pylori`,
      keyTerms: [
        { term: 'hepcidin', definition: 'Hormone regulating iron absorption; elevated in inflammation' },
        { term: 'iron-deficient erythropoiesis', definition: 'Intermediate stage with inadequate iron for RBC production but before anemia' },
        { term: 'anemia of chronic disease', definition: 'Anemia from chronic inflammation with iron sequestration' },
      ],
      clinicalNotes: 'Ferritin <30 ng/mL is diagnostic of iron deficiency. In inflammation, ferritin can be falsely elevated—consider iron deficiency if ferritin <100 with high CRP/inflammatory state.',
    },
    4: {
      level: 4,
      summary: 'Complex iron deficiency management addresses functional iron deficiency, IV iron selection, coexisting conditions, and guidance from hepcidin and novel iron biomarkers.',
      explanation: `## Functional Iron Deficiency
- Adequate stores but unavailable for erythropoiesis
- Seen in chronic disease, heart failure, CKD
- Ferritin normal/high but TSAT low
- May benefit from IV iron

## IV Iron Formulations
| Agent | Dose | Infusion Time | Reactions |
|-------|------|---------------|-----------|
| Ferric carboxymaltose | 750-1000mg | 15-30 min | Hypophosphatemia |
| Iron sucrose | 200-300mg | 15-60 min | Fewer reactions |
| Ferumoxytol | 510mg x2 | 15 min | Black box for anaphylaxis |
| Low MW iron dextran | Full dose | Hours | Test dose no longer required |

## Special Populations
**CKD:**
- IV iron preferred (poor oral absorption)
- TSAT <20% and ferritin <500: Iron indicated

**Heart Failure:**
- IV iron improves symptoms and exercise capacity (FAIR-HF, AFFIRM-AHF)
- Ferritin <100 or TSAT <20%

**Inflammatory Conditions:**
- Hepcidin elevated, oral absorption poor
- IV iron may overcome block`,
      keyTerms: [
        { term: 'functional iron deficiency', definition: 'Adequate iron stores but impaired availability for erythropoiesis' },
        { term: 'hypophosphatemia', definition: 'Low phosphate levels; complication of ferric carboxymaltose' },
        { term: 'TSAT', definition: 'Transferrin saturation; ratio of serum iron to TIBC' },
      ],
      clinicalNotes: 'IV iron improves outcomes in heart failure with iron deficiency regardless of anemia status. Ferric carboxymaltose can cause symptomatic hypophosphatemia—monitor phosphate.',
    },
    5: {
      level: 5,
      summary: 'Precision approaches to iron deficiency integrate hepcidin diagnostics, novel oral iron formulations, understanding of iron-inflammation crosstalk, and personalized dosing strategies.',
      explanation: `## Hepcidin as Biomarker
- Distinguishes iron deficiency from inflammation
- Low hepcidin: True iron deficiency, good oral absorption
- High hepcidin: Inflammatory block, IV iron needed
- Assays becoming more available

## Novel Oral Iron
**Ferric maltol:**
- Better tolerated than ferrous sulfate
- Approved for IDA in IBD
- Does not chelate other medications

**Sucrosomial iron:**
- Phospholipid membrane protection
- Enhanced absorption

## Iron-Hepcidin Pathway Therapeutics
- Hepcidin antagonists for inflammatory anemia
- Ferroportin inhibitors
- Erythroferrone modulators

## Personalized Dosing
- Alternate day dosing may be more efficient (hepcidin surge)
- Lower doses with same total absorption
- Minimize GI side effects`,
      keyTerms: [
        { term: 'erythroferrone', definition: 'Hormone from erythroblasts that suppresses hepcidin during active erythropoiesis' },
        { term: 'ferric maltol', definition: 'Novel oral iron formulation with improved tolerability' },
        { term: 'alternate day dosing', definition: 'Iron dosing strategy avoiding hepcidin-induced absorption block' },
      ],
      clinicalNotes: 'Alternate-day oral iron dosing (e.g., 65mg every other day) may have equal or better absorption than daily dosing with fewer side effects. Hepcidin assays are increasingly used in research settings.',
    },
  },

  media: [],
  citations: [{ id: 'ash-ida-2020', type: 'article', title: 'ASH Clinical Practice Guidelines on Iron Deficiency', source: 'Blood Advances' }],
  crossReferences: [{ targetId: 'condition-anemia-chronic-disease', targetType: 'condition', relationship: 'related', label: 'Anemia of Chronic Disease' }],
  tags: { systems: ['hematologic'], topics: ['hematology'], keywords: ['anemia', 'iron deficiency', 'ferritin', 'microcytic'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] } },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default ironDeficiencyAnemia;
