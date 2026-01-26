/**
 * Iron Deficiency Anemia - Comprehensive Educational Content
 *
 * The most common cause of anemia worldwide, resulting from inadequate iron
 * stores to support normal erythropoiesis.
 */

import { EducationalContent } from '../../../types';

export const ironDeficiencyAnemia: EducationalContent = {
  id: 'condition-iron-deficiency-anemia',
  type: 'condition',
  name: 'Iron Deficiency Anemia',
  alternateNames: ['IDA', 'Sideropenic anemia', 'Hypochromic microcytic anemia'],

  levels: {
    1: {
      level: 1,
      summary: 'Iron deficiency anemia happens when your body does not have enough iron to make healthy red blood cells.',
      explanation: `Iron deficiency anemia is like trying to build cars without enough steel - your body cannot make enough healthy red blood cells without iron.

**Why Iron Matters:**
Iron is a special mineral that helps red blood cells carry oxygen from your lungs to every part of your body. Without enough iron, your red blood cells become small and pale, and they cannot carry as much oxygen.

**What Causes It:**
- Not eating enough iron-rich foods (like meat, beans, and spinach)
- Losing blood (from periods, injuries, or stomach problems)
- Not absorbing iron well from food
- Needing extra iron (like during pregnancy or growth spurts)

**Common Signs:**
- Feeling tired and weak all the time
- Looking pale
- Feeling short of breath easily
- Headaches
- Feeling cold
- Craving to chew ice or other strange things (called pica)

**How It's Treated:**
- Eating more iron-rich foods
- Taking iron pills or liquid
- Finding and fixing what's causing the iron loss`,
      keyTerms: [
        { term: 'anemia', definition: 'A condition where you do not have enough healthy red blood cells' },
        { term: 'iron', definition: 'A mineral your body needs to make red blood cells' },
        { term: 'red blood cells', definition: 'Tiny cells in your blood that carry oxygen to your body' },
        { term: 'pica', definition: 'Unusual cravings to eat things like ice, dirt, or paper', pronunciation: 'PIE-kah' },
      ],
      analogies: [
        'Think of iron like the bricks needed to build houses (red blood cells). Without enough bricks, you cannot build enough houses, and the ones you do build are smaller and weaker.',
        'Red blood cells are like delivery trucks carrying oxygen. Without enough iron, your trucks are smaller and cannot carry as much.',
      ],
      examples: [
        'A teenage girl who has heavy periods might develop iron deficiency because she loses iron in her blood each month.',
        'A baby who only drinks milk without eating iron-rich foods might become iron deficient because milk has very little iron.',
      ],
    },
    2: {
      level: 2,
      summary: 'Iron deficiency anemia is a microcytic, hypochromic anemia caused by insufficient iron for hemoglobin synthesis, resulting in decreased oxygen-carrying capacity.',
      explanation: `Iron deficiency anemia (IDA) is the most common cause of anemia worldwide, affecting approximately 25% of the global population. It develops when iron stores become depleted and there is insufficient iron for normal red blood cell production.

**Pathophysiology:**
Iron is essential for hemoglobin synthesis. When iron is deficient:
1. Red blood cells are produced with less hemoglobin
2. Cells become smaller (microcytic) and paler (hypochromic)
3. Oxygen delivery to tissues is compromised

**Stages of Iron Deficiency:**
1. **Iron depletion**: Decreased ferritin, normal hemoglobin
2. **Iron-deficient erythropoiesis**: Low serum iron, elevated TIBC
3. **Iron deficiency anemia**: Low hemoglobin, microcytic indices

**Common Causes:**
- **Blood loss**: Menstruation, GI bleeding, surgery
- **Decreased intake**: Poor diet, vegetarian/vegan diets
- **Malabsorption**: Celiac disease, gastric bypass, achlorhydria
- **Increased demands**: Pregnancy, growth, endurance athletes

**Clinical Features:**
- General anemia symptoms: Fatigue, weakness, dyspnea on exertion, pallor
- Iron-specific: Pica, pagophagia (ice craving), glossitis, angular cheilitis
- Severe cases: Koilonychia (spoon nails), Plummer-Vinson syndrome

**Laboratory Findings:**
- Low hemoglobin and hematocrit
- Low MCV (<80 fL) and MCH
- Low serum iron and ferritin
- High TIBC (total iron-binding capacity)
- Low transferrin saturation (<20%)

**Treatment:**
- Oral iron supplementation (ferrous sulfate 325mg TID)
- Parenteral iron if oral fails or not tolerated
- Identify and treat underlying cause`,
      keyTerms: [
        { term: 'microcytic', definition: 'Red blood cells that are smaller than normal (MCV <80 fL)', pronunciation: 'my-kroh-SIT-ik' },
        { term: 'hypochromic', definition: 'Red blood cells that are paler than normal due to decreased hemoglobin', pronunciation: 'hy-poh-KROH-mik' },
        { term: 'ferritin', definition: 'A protein that stores iron in the body; the best indicator of iron stores', pronunciation: 'FAIR-ih-tin' },
        { term: 'TIBC', definition: 'Total iron-binding capacity; measures the blood\'s capacity to bind iron, elevated in IDA' },
        { term: 'koilonychia', definition: 'Spoon-shaped nails that curve upward; a sign of severe iron deficiency', pronunciation: 'koy-loh-NIK-ee-ah' },
      ],
      analogies: [
        'Ferritin is like your iron savings account - when it\'s low, you\'re running out of savings.',
        'TIBC is like having many empty delivery trucks waiting for packages (iron). When iron is low, you have lots of empty trucks.',
      ],
    },
    3: {
      level: 3,
      summary: 'Iron deficiency anemia represents a continuum from iron depletion to frank anemia, characterized by distinctive laboratory patterns and clinical manifestations reflecting impaired heme synthesis and tissue iron deficiency.',
      explanation: `## Iron Metabolism Overview

**Iron Homeostasis:**
- Total body iron: 3-4 grams (men), 2-3 grams (women)
- Distribution: Hemoglobin (65%), ferritin/hemosiderin (30%), myoglobin (4%), enzymes (1%)
- Daily iron loss: ~1mg (men), ~2mg (menstruating women)
- Dietary absorption: 1-2mg/day (heme iron better absorbed than non-heme)

**Absorption Regulation:**
- Occurs primarily in duodenum
- DMT1 (divalent metal transporter-1): Apical uptake
- Ferroportin: Basolateral export
- Hepcidin: Master regulator (inhibits ferroportin)

## Pathophysiology

**Sequential Depletion:**
1. **Stage I - Negative Iron Balance:**
   - Decreased storage iron
   - Ferritin <20 ng/mL
   - Normal hemoglobin, MCV

2. **Stage II - Iron-Deficient Erythropoiesis:**
   - Inadequate iron delivery to marrow
   - Serum iron ↓, TIBC ↑, saturation <20%
   - sTfR (soluble transferrin receptor) ↑
   - ZPP (zinc protoporphyrin) ↑
   - Hemoglobin still normal or slightly low

3. **Stage III - Iron Deficiency Anemia:**
   - Microcytic hypochromic anemia
   - MCV <80 fL, MCH <27 pg, MCHC <32 g/dL
   - RDW elevated (anisocytosis)
   - Reticulocyte count low/normal

**Peripheral Blood Smear:**
- Microcytosis, hypochromia
- Anisocytosis, poikilocytosis
- Target cells, elliptocytes (pencil cells)
- Thrombocytosis (reactive)

## Etiology

**Blood Loss:**
- GI: Peptic ulcer, gastritis, carcinoma, angiodysplasia, hookworm
- GU: Menorrhagia, hematuria
- Other: Frequent blood donation, hemodialysis

**Malabsorption:**
- Celiac disease (concurrent folate deficiency possible)
- H. pylori infection (reduced acid)
- Post-gastrectomy, gastric bypass
- Inflammatory bowel disease
- PPI use (reduced acid)

**Increased Requirements:**
- Pregnancy (1000mg additional iron needed)
- Lactation
- Rapid growth phases
- High-altitude adaptation

## Diagnostic Approach

**Essential Labs:**
| Test | Finding in IDA | Notes |
|------|---------------|-------|
| Hemoglobin | Decreased | <12 g/dL women, <13 g/dL men |
| MCV | <80 fL | May be normal early |
| Ferritin | <30 ng/mL | Best test; acute phase reactant |
| Serum iron | Decreased | Diurnal variation |
| TIBC | Increased | Indirect ferritin measure |
| Transferrin sat | <20% | Iron/TIBC ratio |
| sTfR | Elevated | Not affected by inflammation |
| Reticulocyte count | Low/normal | Inappropriate response |

**Additional Studies:**
- sTfR/log ferritin ratio: Distinguishes IDA from anemia of inflammation
- Bone marrow: Gold standard (absent stainable iron), rarely needed
- GI workup: EGD/colonoscopy in unexplained IDA

## Treatment

**Oral Iron:**
- Ferrous sulfate 325mg PO TID (65mg elemental iron per tablet)
- Take on empty stomach with vitamin C
- Avoid concurrent antacids, dairy, coffee, tea
- Expected response: Reticulocytosis in 7-10 days, Hb increase 1-2 g/dL per month

**Parenteral Iron:**
Indications: Oral intolerance, malabsorption, ongoing losses exceeding oral capacity
- Iron sucrose, ferric gluconate (hemodialysis)
- Ferumoxytol, ferric carboxymaltose, iron dextran (single large doses)

**Duration:**
- Continue 3-6 months after hemoglobin normalizes to replenish stores
- Monitor ferritin (target >50-100 ng/mL)`,
      keyTerms: [
        { term: 'hepcidin', definition: 'Liver-produced hormone that regulates iron absorption by blocking ferroportin; elevated in inflammation', pronunciation: 'HEP-sih-din' },
        { term: 'transferrin saturation', definition: 'Percentage of transferrin binding sites occupied by iron; calculated as serum iron/TIBC', pronunciation: 'trans-FAIR-in' },
        { term: 'sTfR', definition: 'Soluble transferrin receptor; marker of iron deficiency not affected by inflammation' },
        { term: 'RDW', definition: 'Red cell distribution width; measures variation in RBC size (anisocytosis); elevated in IDA' },
        { term: 'ZPP', definition: 'Zinc protoporphyrin; zinc substitutes for iron when iron deficient; elevated in IDA and lead poisoning' },
      ],
      clinicalNotes: 'Always search for the cause of IDA, especially in men and postmenopausal women where GI malignancy must be excluded. The sTfR/log ferritin ratio >2 suggests IDA even with concurrent inflammation.',
    },
    4: {
      level: 4,
      summary: 'Iron deficiency anemia requires integration of iron kinetics, hepcidin biology, and erythropoietic physiology to understand its pathogenesis, with diagnostic evaluation guided by clinical context and response to therapy being both diagnostic and therapeutic.',
      explanation: `## Advanced Iron Metabolism

**Systemic Iron Regulation:**

*Hepcidin-Ferroportin Axis:*
- Hepcidin (encoded by HAMP): Master regulator
- Binds ferroportin → internalization and degradation
- High hepcidin = decreased absorption and recycling
- Low hepcidin = increased absorption

*Hepcidin Regulation:*
- Increased by: Iron loading, inflammation (IL-6), BMP6
- Decreased by: Iron deficiency, hypoxia, erythropoietic drive (erythroferrone)
- Signal via BMP-SMAD pathway in hepatocytes

*Erythroferrone (ERFE):*
- Produced by erythroid precursors
- Suppresses hepcidin to increase iron availability
- Links erythropoiesis to iron homeostasis

**Cellular Iron Handling:**

*Iron Import:*
- Transferrin receptor 1 (TfR1): Ubiquitous, regulated by iron
- TfR2: Hepatocyte iron sensing
- DMT1: Intestinal and endosomal iron transport

*Iron Export:*
- Ferroportin: Only known iron exporter
- Requires hephaestin (enterocytes) or ceruloplasmin (macrophages) for oxidation

*Iron Storage:*
- Ferritin: Intracellular storage (up to 4500 iron atoms)
- Hemosiderin: Aggregated ferritin (in overload)

**IRP System (Iron Regulatory Proteins):**
- IRP1 and IRP2 bind iron-responsive elements (IREs)
- Low iron: IRPs bind IREs
  - TfR mRNA stabilized (increased uptake)
  - Ferritin translation blocked (decreased storage)
- High iron: IRPs degraded/inactive

## Clinical Correlations

**Differential Diagnosis of Microcytic Anemia:**

| Feature | IDA | Thalassemia | ACD | Sideroblastic |
|---------|-----|-------------|-----|---------------|
| Iron | Low | Normal/high | Low/normal | High |
| TIBC | High | Normal | Low | Normal |
| Ferritin | Low | Normal/high | Normal/high | High |
| RDW | High | Normal | Normal | High |
| Mentzer index | >13 | <13 | Variable | Variable |

*Mentzer Index = MCV/RBC count*

**Iron Deficiency with Inflammation:**

Challenge: Ferritin elevated by inflammation (acute phase reactant)

Diagnostic approaches:
- sTfR (not affected by inflammation)
- sTfR/log ferritin index >2 = IDA
- Reticulocyte hemoglobin (CHr) <28 pg = functional iron deficiency
- Percent hypochromic RBCs >5% = functional deficiency
- Hepcidin levels (research/specialty labs)

**Refractory Iron Deficiency Anemia:**

Causes:
- Iron-refractory iron deficiency anemia (IRIDA): TMPRSS6 mutations
- Undiagnosed malabsorption (celiac, autoimmune gastritis)
- Ongoing occult blood loss
- Concurrent H. pylori
- Non-adherence

IRIDA genetics:
- Autosomal recessive TMPRSS6 (matriptase-2) mutations
- Unable to suppress hepcidin appropriately
- Inappropriately high hepcidin despite iron deficiency
- Responds poorly to oral iron, requires IV iron

## Special Populations

**Pregnancy:**
- Iron requirements: 1000mg over pregnancy
- Hemodilution complicates diagnosis
- WHO criteria: Hb <11 g/dL (1st/3rd trimester), <10.5 g/dL (2nd)
- Screen at first prenatal visit
- Supplement: 30-60mg elemental iron daily

**Chronic Kidney Disease:**
- Functional iron deficiency (adequate stores, poor utilization)
- ESA therapy increases iron demands
- Target: TSAT >20%, ferritin >100 ng/mL (>200 for HD)
- IV iron often required

**Inflammatory Bowel Disease:**
- Multiple mechanisms: Blood loss, malabsorption, inflammation
- IV iron preferred (oral poorly tolerated and absorbed)
- Ferric carboxymaltose, iron isomaltoside

**Heart Failure:**
- Iron deficiency (with or without anemia) associated with worse outcomes
- IV iron improves symptoms and exercise capacity
- TSAT <20% or ferritin <100 (or 100-299 with TSAT <20%)

## Parenteral Iron Considerations

**Modern Formulations:**
| Agent | Dose | Test dose | Infusion time |
|-------|------|-----------|---------------|
| Iron sucrose | 100-200mg | No | 15-30 min |
| Ferric gluconate | 125-250mg | No | 1 hour |
| Iron dextran | Up to 1000mg | Yes | 4-6 hours |
| Ferumoxytol | 510mg x2 | No | 15 min |
| Ferric carboxymaltose | 750mg x2 | No | 15 min |
| Iron isomaltoside | 1000mg+ | No | 15-30 min |

**Adverse Effects:**
- Hypersensitivity reactions (low molecular weight safer)
- Hypophosphatemia (especially ferric carboxymaltose)
- Fish odor syndrome (iron dextran)
- Transient hypotension (fast infusion)
- Injection site reactions`,
      keyTerms: [
        { term: 'erythroferrone', definition: 'Hormone produced by erythroid precursors that suppresses hepcidin; links erythropoiesis to iron regulation', pronunciation: 'eh-rith-roh-FAIR-ohn' },
        { term: 'IRIDA', definition: 'Iron-refractory iron deficiency anemia; genetic disorder (TMPRSS6 mutation) with inappropriate hepcidin elevation' },
        { term: 'functional iron deficiency', definition: 'Inadequate iron supply to erythropoiesis despite adequate stores; seen in inflammation and CKD' },
        { term: 'CHr', definition: 'Reticulocyte hemoglobin content; early marker of iron-deficient erythropoiesis (<28 pg suggests iron deficiency)' },
        { term: 'IRP', definition: 'Iron regulatory proteins that post-transcriptionally regulate iron metabolism genes via iron-responsive elements' },
      ],
      clinicalNotes: 'In CKD patients on ESAs, functional iron deficiency is common even with normal ferritin. CHr <28 pg predicts response to IV iron. Ferric carboxymaltose-associated hypophosphatemia can cause osteomalacia with repeated dosing.',
    },
    5: {
      level: 5,
      summary: 'Contemporary management of iron deficiency anemia integrates molecular understanding of iron homeostasis with evidence-based diagnostics and therapeutics, recognizing the systemic impact of iron deficiency beyond erythropoiesis.',
      explanation: `## Molecular Pathophysiology

**Transcriptional Control of Iron Homeostasis:**

*Hepcidin Regulation Pathways:*

1. **BMP-SMAD Pathway (Iron-sensing):**
   - BMP6 (liver-derived, iron-induced)
   - BMP receptors + HJV (hemojuvelin) co-receptor
   - SMAD1/5/8 phosphorylation → SMAD4
   - Transcription of HAMP (hepcidin)
   - Mutations in HJV, HFE, TfR2 → hemochromatosis (low hepcidin)

2. **Inflammatory Pathway:**
   - IL-6 → JAK-STAT3 → HAMP transcription
   - Other cytokines: IL-1beta, IL-22
   - Explains anemia of inflammation pathophysiology

3. **Erythroid-Mediated Suppression:**
   - Erythroferrone (ERFE): BMP trap
   - GDF15, TWSG1 (less well characterized)
   - Inappropriately suppressed in beta-thalassemia → iron overload

4. **Hypoxia Pathway:**
   - HIF-2alpha → DMT1, ferroportin
   - EPAS1 → EPO → erythropoiesis
   - Indirect hepcidin suppression via erythroferrone

**Non-Hematopoietic Iron Functions:**

- Electron transport chain (Fe-S clusters)
- DNA synthesis (ribonucleotide reductase)
- Neurotransmitter synthesis
- Thyroid hormone metabolism
- Collagen synthesis (prolyl/lysyl hydroxylases)
- Immune function

## Clinical Implications

**Cognitive and Developmental Effects:**

*Pediatric:*
- Critical for brain development
- Dopaminergic system particularly affected
- Iron deficiency during critical windows → irreversible deficits
- Screen high-risk infants at 9-12 months

*Adults:*
- Restless leg syndrome (brain iron deficiency)
- Cognitive dysfunction independent of anemia
- Responds to iron even without anemia

**Cardiovascular Effects:**

*Heart Failure:*
- ~50% of HFrEF patients have iron deficiency
- Independent predictor of mortality
- FAIR-HF, CONFIRM-HF, AFFIRM-AHF trials: IV iron improves outcomes
- Guidelines: Test iron status in all HF patients
- Treat: Ferritin <100 or ferritin 100-299 with TSAT <20%

*Pulmonary Hypertension:*
- Iron deficiency common
- May worsen hemodynamics
- Trial data emerging

**Infections and Immunity:**

*Iron and Pathogens:*
- Many pathogens require iron
- Siderophores: Bacterial iron acquisition
- Nutritional immunity: Host iron sequestration
- Hepcidin elevation = protective mechanism

*Clinical Implications:*
- Avoid iron supplementation in active infection
- Malaria endemic regions: Caution with iron supplementation
- IV iron may increase infection risk in some settings

## Diagnostic Advances

**Novel Biomarkers:**

| Marker | Utility | Status |
|--------|---------|--------|
| Hepcidin | Distinguish IDA from ACD | Research/specialty |
| sTfR | Not affected by inflammation | Available |
| CHr/Ret-He | Functional iron deficiency | Available |
| % Hypochromic RBC | Functional deficiency | Available |
| ZPP | Iron vs lead poisoning | Available |
| Red cell ferritin | Research | Investigational |

**Algorithmic Approach:**

Uncomplicated case:
- Ferritin <30 ng/mL = IDA
- Trial of oral iron is both diagnostic and therapeutic

Complicated (inflammation, CKD, unclear):
- sTfR/log ferritin ratio >2 = IDA
- CHr <28 pg = functional deficiency
- Response to IV iron trial

## Therapeutic Advances

**Oral Iron Innovations:**

*Ferric Maltol:*
- Better tolerated than ferrous salts
- Absorbed via different pathway
- Approved for IDA in IBD
- Lower GI side effects

*Sucrosomial Iron:*
- Iron protected by phospholipid/sucrester matrix
- Absorbed by M cells and enterocytes
- May bypass DMT1
- Less hepcidin induction

**IV Iron Optimization:**

*High-dose single infusion:*
- Patient convenience, healthcare costs
- Ferric carboxymaltose, ferumoxytol, iron isomaltoside
- Appropriate for outpatient management

*Safety Considerations:*
- Hypersensitivity reactions rare with modern agents
- Fishbane reaction (flushing, back pain) - not allergic
- Hypophosphatemia monitoring with ferric carboxymaltose

**Emerging Therapies:**

*Hepcidin Modulators:*
- Anti-hepcidin antibodies
- BMP pathway inhibitors
- For IRIDA and inflammation-associated iron restriction

*Novel Oral Agents:*
- HIF-PHD inhibitors (roxadustat) - increase iron absorption
- Ferroportin agonists

## Special Scenarios

**Iron Deficiency Without Anemia:**

Recognition:
- Fatigue, cognitive issues, RLS without anemia
- Ferritin <30 ng/mL (or <50 ng/mL with symptoms)
- May warrant treatment

Evidence:
- RLS improves with iron (ferritin target >75)
- Athletic performance may improve
- PIVOTS trial: No benefit in non-anemic women (controversial)

**Post-Bariatric Surgery:**

Risk factors:
- Bypassed duodenum
- Reduced acid production
- Altered food intake
- Often concurrent B12, folate deficiency

Management:
- Lifelong monitoring
- Prophylactic supplementation (45-60mg/day)
- Often requires IV iron
- Chewable or liquid forms may be better absorbed

**Oncology:**

- Iron deficiency common (20-60% of cancer patients)
- Contributes to cancer-related fatigue
- ESAs require adequate iron
- IV iron can support ESA response
- Avoid in active infection

## Quality Metrics and Outcomes

**Performance Measures:**
- Document cause identification in all IDA
- GI evaluation in men and postmenopausal women
- Response assessment (CBC at 4-8 weeks)
- Ferritin monitoring (target >50-100 to replenish stores)
- Duration of therapy (3-6 months after Hb normalization)`,
      keyTerms: [
        { term: 'BMP-SMAD pathway', definition: 'Bone morphogenetic protein signaling cascade that activates hepcidin transcription in response to iron' },
        { term: 'nutritional immunity', definition: 'Host defense mechanism of sequestering iron from pathogens during infection via hepcidin elevation' },
        { term: 'sucrosomial iron', definition: 'Novel oral iron formulation using phospholipid carriers for improved absorption and tolerability' },
        { term: 'ferric maltol', definition: 'Oral iron formulation with improved GI tolerability, approved for IBD-associated iron deficiency' },
        { term: 'HIF-PHD inhibitors', definition: 'Drugs that stabilize hypoxia-inducible factors, increasing endogenous EPO and iron absorption' },
      ],
      clinicalNotes: `**Board-Relevant Pearls:**
- Ferritin <30 ng/mL has >90% specificity for IDA
- sTfR/log ferritin >2 distinguishes IDA from ACD
- In heart failure, iron deficiency (even without anemia) should be treated
- Ferric carboxymaltose can cause severe hypophosphatemia
- IRIDA: High hepcidin despite iron deficiency, poor oral iron response
- Reticulocyte response to iron begins in 3-5 days, hemoglobin in 2 weeks
- Continue iron 3-6 months after Hb normalizes to replenish stores`,
    },
  },

  media: [
    {
      id: 'ida-pathophysiology',
      type: 'diagram',
      filename: 'iron-deficiency-pathophysiology.svg',
      title: 'Iron Deficiency Anemia Pathophysiology',
      description: 'Stages of iron deficiency from depletion to anemia',
    },
    {
      id: 'iron-metabolism',
      type: 'diagram',
      filename: 'iron-metabolism-hepcidin.svg',
      title: 'Iron Homeostasis and Hepcidin Regulation',
      description: 'Systemic iron regulation including hepcidin-ferroportin axis',
    },
    {
      id: 'ida-smear',
      type: 'histology',
      filename: 'iron-deficiency-blood-smear.jpg',
      title: 'Peripheral Blood Smear in IDA',
      description: 'Microcytic hypochromic red cells with anisocytosis',
    },
  ],

  citations: [
    {
      id: 'camaschella-2019',
      type: 'article',
      title: 'Iron deficiency',
      authors: ['Camaschella C'],
      source: 'Blood',
      url: 'https://doi.org/10.1182/blood-2018-05-815944',
      license: 'Copyright ASH',
    },
    {
      id: 'auerbach-adamson-2016',
      type: 'article',
      title: 'Iron deficiency and treatment',
      authors: ['Auerbach M', 'Adamson JW'],
      source: 'American Journal of Hematology',
      url: 'https://doi.org/10.1002/ajh.24171',
    },
    {
      id: 'williams-hematology',
      type: 'textbook',
      title: 'Disorders of Iron Homeostasis',
      source: 'Williams Hematology',
      chapter: '43',
    },
  ],

  crossReferences: [
    { targetId: 'condition-anemia-inflammation', targetType: 'condition', relationship: 'related', label: 'Anemia of Inflammation' },
    { targetId: 'condition-thalassemia', targetType: 'condition', relationship: 'related', label: 'Thalassemia' },
    { targetId: 'structure-bone-marrow', targetType: 'structure', relationship: 'related', label: 'Bone Marrow' },
    { targetId: 'process-erythropoiesis', targetType: 'pathway', relationship: 'related', label: 'Erythropoiesis' },
  ],

  tags: {
    systems: ['hematologic'],
    topics: ['anemia', 'iron metabolism', 'nutritional deficiency', 'hematology'],
    keywords: ['microcytic', 'hypochromic', 'ferritin', 'hepcidin', 'iron deficiency'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pediatrics', 'family medicine'],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default ironDeficiencyAnemia;
