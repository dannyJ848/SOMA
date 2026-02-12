/**
 * Iron Deficiency Anemia - Comprehensive Educational Content
 *
 * Comprehensive content covering iron metabolism, causes of deficiency,
 * clinical presentation, diagnosis, and treatment.
 */

import { EducationalContent } from '../../../types';

export const ironDeficiencyAnemia: EducationalContent = {
  id: 'condition-iron-deficiency-anemia',
  type: 'condition',
  name: 'Iron Deficiency Anemia',
  alternateNames: ['IDA', 'Iron Deficiency', 'Hypochromic Microcytic Anemia'],
  hpoId: 'HP:0001891',

  levels: {
    1: {
      level: 1,
      summary: 'Iron deficiency anemia happens when your body does not have enough iron to make healthy red blood cells, causing tiredness and weakness.',
      explanation: `Iron is essential for making hemoglobin, the part of red blood cells that carries oxygen. Without enough iron, your body cannot make enough healthy red blood cells.

**Common Causes:**
- Not eating enough iron-rich foods
- Blood loss (heavy periods, bleeding in stomach or intestines)
- Pregnancy (baby needs iron too)
- Poor absorption of iron from food

**Symptoms:**
- Feeling very tired and weak
- Pale skin
- Shortness of breath
- Headaches
- Dizziness
- Cold hands and feet
- Craving for ice or dirt (pica)
- Brittle nails

**Foods High in Iron:**
- Red meat
- Chicken and fish
- Beans and lentils
- Spinach and other leafy greens
- Fortified cereals
- Vitamin C helps your body absorb iron

**Treatment:**
- Iron pills (most common)
- Iron-rich diet
- Finding and treating the cause of blood loss
- Sometimes iron through an IV (severe cases)`,
      keyTerms: [
        { term: 'hemoglobin', definition: 'The protein in red blood cells that carries oxygen' },
        { term: 'pica', definition: 'Craving for non-food items like ice, dirt, or clay' },
        { term: 'anemia', definition: 'A condition where you have too few red blood cells' },
      ],
      analogies: [
        'Iron is like the raw material a factory needs to build cars (red blood cells). Without enough raw material, the factory cannot build enough cars to do the job.',
      ],
      examples: [
        'A woman with very heavy periods feels tired all the time and finds it hard to concentrate at work.',
        'A vegetarian who does not eat enough iron-rich plant foods develops pale skin and gets short of breath when climbing stairs.',
      ],
    },
    2: {
      level: 2,
      summary: 'Iron deficiency anemia is the most common anemia worldwide; caused by blood loss, inadequate intake, or malabsorption; diagnosed by low ferritin and treated with iron replacement.',
      explanation: `Iron deficiency anemia results from an imbalance between iron supply and demand.

**Iron Metabolism:**
- Total body iron: 3-5 g
- Distribution: Hemoglobin (65%), storage (30%), myoglobin/enzymes (5%)
- Absorption: Duodenum and proximal jejunum
- Transport: Transferrin
- Storage: Ferritin (tissues), hemosiderin

**Causes of Iron Deficiency:**
- Blood loss (most common in adults):
  - GI: Ulcers, cancer, hemorrhoids, angiodysplasia
  - Gynecologic: Menorrhagia
  - Other: Hematuria, epistaxis
- Increased requirements: Pregnancy, growth
- Inadequate intake: Poor diet, vegetarian/vegan
- Malabsorption: Celiac, H. pylori, bariatric surgery

**Laboratory Diagnosis:**
- Low hemoglobin
- Low MCV (microcytic), low MCH (hypochromic)
- Low ferritin (<30 ng/mL diagnostic)
- Low iron, high TIBC, low transferrin saturation
- Elevated RDW
- Reticulocyte count low

**Peripheral Smear:**
- Microcytic, hypochromic cells
- Target cells
- Pencil cells

**Treatment:**
- Oral iron: Ferrous sulfate, ferrous gluconate, ferrous fumarate
- IV iron: For malabsorption, intolerance, severe deficiency
- Treat underlying cause`,
      keyTerms: [
        { term: 'ferritin', definition: 'Iron storage protein; most sensitive test for iron deficiency' },
        { term: 'TIBC', definition: 'Total iron binding capacity; elevated in iron deficiency' },
        { term: 'transferrin saturation', definition: 'Iron divided by TIBC; <15% suggests deficiency' },
      ],
    },
    3: {
      level: 3,
      summary: 'Iron deficiency requires investigation for blood loss in adults; ferritin <30 ng/mL is diagnostic, though higher values can still indicate deficiency with inflammation.',
      explanation: `Comprehensive evaluation of iron deficiency includes assessment of iron status and investigation for underlying causes.

**Stages of Iron Deficiency:**
1. Storage iron depletion: Low ferritin, normal Hgb
2. Iron-deficient erythropoiesis: Low ferritin, low Fe, high TIBC, normal Hgb
3. Iron deficiency anemia: All above plus anemia

**Diagnostic Approach:**
- Ferritin: Most sensitive and specific
  - <30 ng/mL: Iron deficiency (diagnostic)
  - 30-100 ng/mL: Indeterminate, check TSAT
  - >100 ng/mL: Less likely but possible with inflammation
- Soluble transferrin receptor (sTfR): Elevated in IDA, normal in ACD
- sTfR/log ferritin index: >2 suggests IDA vs ACD
- Reticulocyte hemoglobin content (CHr): Early marker

**Differential Diagnosis of Microcytic Anemia:**
- Iron deficiency: Low ferritin, high TIBC
- Thalassemia: Normal/high ferritin, normal TIBC, strong family history
- Anemia of chronic disease: Normal/high ferritin, low TIBC
- Sideroblastic anemia: High ferritin, ringed sideroblasts

**Investigation for Blood Loss:**
- All men and postmenopausal women need GI evaluation
- Premenopausal women: Consider GI if severe, refractory, or symptoms
- Stool guaiac or FIT
- EGD and colonoscopy
- Consider capsule endoscopy if negative

**Oral Iron Therapy:**
- Ferrous sulfate 325 mg TID or daily (recent data suggests alternate day)
- Vitamin C enhances absorption
- Common side effects: GI upset, constipation, dark stools
- Heparin: Proper-heparin test for malabsorption`,
      keyTerms: [
        { term: 'sTfR', definition: 'Soluble transferrin receptor; elevated in iron deficiency' },
        { term: 'CHr', definition: 'Reticulocyte hemoglobin content; early marker of iron deficiency' },
        { term: 'ACD', definition: 'Anemia of chronic disease; functional iron deficiency' },
      ],
    },
    4: {
      level: 4,
      summary: 'Iron deficiency in adults mandates GI evaluation; oral iron dosing has evolved (alternate-day may improve absorption and tolerance); IV iron is safe and effective for refractory cases.',
      explanation: `Evidence-based management of iron deficiency incorporates new understanding of iron absorption and treatment strategies.

**Iron Absorption Physiology:**
- Hepcidin: Master regulator, inhibits ferroportin
  - Increased by inflammation (explains ACD)
  - Decreased by iron deficiency, hypoxia, anemia
- Ferroportin: Only known iron exporter
- Duodenal cytochrome B (DcytB): Reduces Fe3+ to Fe2+
- DMT1: Transports Fe2+ into enterocyte
- Heme carrier protein 1 (HCP1): For heme iron

**Updated Oral Iron Dosing:**
- Traditional: 325 mg ferrous sulfate TID (195 mg elemental iron)
- New evidence: Alternate-day dosing may be superior
  - Reduces hepcidin induction
  - Improves fractional absorption
  - Fewer GI side effects
- Single daily dose also effective with better tolerance
- Iron polymaltose complex: Better tolerated, less effective

**IV Iron Indications:**
- Oral iron intolerance
- Malabsorption (celiac, gastritis, bariatric surgery)
- Ongoing blood loss exceeding oral absorption
- Chronic kidney disease (with ESA)
- Heart failure with iron deficiency
- Need for rapid replenishment

**IV Iron Formulations:**
- Iron sucrose: Multiple doses required
- Ferric carboxymaltose: Single dose (up to 1500 mg)
- Iron dextran: Single dose, higher anaphylaxis risk
- Ferumoxytol: Single dose, can cause hypophosphatemia

**Heart Failure and Iron Deficiency:**
- Prevalence: 30-50% of HF patients
- Independent predictor of mortality
- IV iron improves symptoms and quality of life (CONFIRM-HF, FAIR-HF)
- Ferric carboxymaltose approved for HF with iron deficiency`,
      keyTerms: [
        { term: 'hepcidin', definition: 'Liver-produced peptide that regulates iron by blocking ferroportin' },
        { term: 'ferroportin', definition: 'Iron exporter on enterocytes and macrophages' },
        { term: 'ferric carboxymaltose', definition: 'IV iron formulation allowing single high-dose administration' },
      ],
    },
    5: {
      level: 5,
      summary: 'Iron deficiency management integrates hepcidin biology, GI investigation, and appropriate use of oral vs. IV iron; IV iron is standard in heart failure and CKD with expanding indications.',
      explanation: `Advanced management of iron deficiency requires understanding of iron homeostasis and emerging therapeutics.

**Molecular Regulation of Iron:**
- Iron-responsive elements (IRE) and proteins (IRP):
  - Regulate translation of ferritin, transferrin receptor
  - IRP binds IRE when iron low
  - Decreases ferritin translation, increases TfR translation
- Hepcidin-ferroportin axis:
  - Hepcidin binds ferroportin → internalization and degradation
  - Iron refractory iron deficiency anemia (IRIDA): TMPRSS6 mutations

**Causes of Refractory Iron Deficiency:**
- IRIDA (TMPRSS6 mutation): High hepcidin despite deficiency
- Celiac disease: May be subclinical
- H. pylori gastritis: Impaired acidification
- Autoimmune gastritis: Parietal cell antibodies
- Helicobacter pylori
- Gastric bypass: Bypass of duodenum
- IV iron needed in most cases

**IV Iron Safety:**
- Hypersensitivity reactions: Rare with newer formulations
  - Iron dextran: Highest risk (dextran antibody)
  - Iron sucrose, FCM, ferumoxytol: Lower risk
- Hypophosphatemia: Particularly with ferric carboxymaltose
  - Due to FGF23-mediated phosphate wasting
  - Usually asymptomatic, can be severe
- Premedication: Not routinely needed with non-dextran iron

**Special Populations:**
- Pregnancy: IV iron in second/third trimester for intolerance or severe deficiency
- CKD: IV iron standard with ESAs; target TSAT 20-50%
- Heart failure: Ferric carboxymaltose for FERRIC-HF criteria
- IBD: IV iron preferred due to inflammation affecting absorption

**Novel Therapeutics:**
- Oral ferric citrate: Used in CKD, absorbs differently
- Transferrin receptor-targeted therapies
- Hepcidin antagonists for ACD`,
      keyTerms: [
        { term: 'IRIDA', definition: 'Iron-refractory iron deficiency anemia from TMPRSS6 mutation' },
        { term: 'FGF23', definition: 'Fibroblast growth factor 23; causes hypophosphatemia with some IV iron' },
        { term: 'TMPRSS6', definition: 'Gene encoding matriptase-2; regulates hepcidin' },
      ],
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['hematologic'],
    topics: ['anemia', 'iron', 'nutrition'],
    keywords: ['iron deficiency', 'anemia', 'ferritin', 'iron'],
    clinicalRelevance: 'high',
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default ironDeficiencyAnemia;
