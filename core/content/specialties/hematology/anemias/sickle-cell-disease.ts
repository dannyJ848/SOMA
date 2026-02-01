/**
 * Sickle Cell Disease - Comprehensive Educational Content
 *
 * An inherited hemoglobinopathy caused by a point mutation in the beta-globin
 * gene, producing HbS that polymerizes under deoxygenation.
 */

import { EducationalContent } from '../../../types';

export const sickleCellDisease: EducationalContent = {
  id: 'condition-sickle-cell-disease',
  type: 'condition',
  name: 'Sickle Cell Disease',
  nameEs: 'Enfermedad de Celulas Falciformes',
  alternateNames: ['SCD', 'Sickle cell anemia', 'HbSS disease', 'Drepanocytosis'],
  hpoId: 'HP:0001907',

  levels: {
    1: {
      level: 1,
      summary: 'Sickle cell disease is an inherited blood disorder where red blood cells become stiff and shaped like a crescent moon, causing pain and blocking blood flow.',
      explanation: `Sickle cell disease is a condition you are born with that changes the shape of your red blood cells.

**What happens:**
Normal red blood cells are round and flexible like a donut. In sickle cell disease, the cells become hard and curved like a crescent moon or the letter C. These stiff cells get stuck in small blood vessels, blocking blood flow like a traffic jam.

**Why it hurts:**
When blood cannot flow properly, parts of your body do not get enough oxygen. This causes episodes of severe pain called "pain crises" that can last hours or days. The pain can happen in your chest, belly, joints, or bones.

**Other problems:**
- Feeling very tired (the sickle cells break apart easily, causing anemia)
- Getting infections more often (the spleen stops working properly)
- Jaundice (yellowing of eyes from broken blood cells)

**How you get it:**
Both parents must carry the sickle cell gene. If you get one copy, you have sickle cell trait (usually no symptoms). If you get two copies, you have sickle cell disease.

**Good news:**
Treatments including medicines, blood transfusions, and even bone marrow transplants can help people with sickle cell disease live longer and feel better.`,
      keyTerms: [
        { term: 'sickle cell', definition: 'A red blood cell that has become stiff and crescent-shaped instead of round' },
        { term: 'pain crisis', definition: 'Episodes of severe pain caused by sickle cells blocking blood vessels' },
        { term: 'sickle cell trait', definition: 'Carrying one copy of the sickle gene; usually causes no symptoms' },
      ],
      analogies: [
        'Normal red blood cells are like soft rubber discs that squeeze through tiny tubes easily; sickle cells are like rigid boomerangs that get jammed.',
        'A pain crisis is like a traffic jam in your blood vessels - nothing can get through until the blockage clears.',
      ],
      patientCounselingPoints: [
        'Stay well-hydrated to help prevent pain crises',
        'Avoid extreme temperatures and high altitudes',
        'Take penicillin daily as prescribed to prevent infections',
      ],
    },
    2: {
      level: 2,
      summary: 'Sickle cell disease is an autosomal recessive hemoglobinopathy where a glutamic acid to valine substitution in beta-globin produces HbS, leading to vaso-occlusive crises, chronic hemolytic anemia, and progressive organ damage.',
      explanation: `## Overview

Sickle cell disease (SCD) is caused by a single amino acid change in the beta-globin chain (glutamic acid to valine at position 6). This produces hemoglobin S (HbS), which polymerizes when deoxygenated, distorting red blood cells into rigid sickle shapes.

## Genotypes
| Genotype | Disease | Severity |
|----------|---------|----------|
| HbSS | Sickle cell anemia | Severe |
| HbSC | SC disease | Moderate |
| HbS/beta-thal | S-beta thalassemia | Variable |
| HbAS | Sickle trait | Usually asymptomatic |

## Major Complications
- **Vaso-occlusive crisis:** Severe pain from microvascular occlusion
- **Acute chest syndrome:** Pulmonary infiltrate + respiratory symptoms (leading cause of death)
- **Stroke:** Occurs in ~11% of children; screen with transcranial Doppler
- **Splenic sequestration:** Acute spleen enlargement trapping blood
- **Aplastic crisis:** Parvovirus B19 causing temporary marrow shutdown
- **Chronic hemolysis:** Baseline anemia (Hb 6-9 g/dL), jaundice, gallstones

## Screening and Diagnosis
- Newborn screening (universal in USA)
- Hemoglobin electrophoresis showing HbS predominance
- Peripheral smear: sickle cells, target cells, Howell-Jolly bodies (functional asplenia)

## Treatment
- Hydroxyurea: Increases fetal hemoglobin (HbF), reduces crises
- Chronic transfusions for stroke prevention
- Pain management during crises
- Bone marrow transplant: Only cure (matched sibling donor)`,
      keyTerms: [
        { term: 'HbS', definition: 'Hemoglobin S; the abnormal hemoglobin in sickle cell disease that polymerizes when deoxygenated' },
        { term: 'vaso-occlusive crisis', definition: 'Episodes of pain from sickle cells blocking small blood vessels' },
        { term: 'acute chest syndrome', definition: 'A pulmonary complication with infiltrate on CXR, fever, and respiratory symptoms; the leading cause of death in SCD' },
        { term: 'hydroxyurea', definition: 'Medication that increases fetal hemoglobin production, reducing sickling and crises' },
        { term: 'Howell-Jolly bodies', definition: 'Nuclear remnants in RBCs indicating splenic dysfunction' },
      ],
      analogies: [
        'HbS polymerization is like Velcro - the abnormal hemoglobin molecules stick together when oxygen is low, forming rigid rods inside the cell.',
      ],
    },
    3: {
      level: 3,
      summary: 'SCD pathophysiology involves HbS polymerization, endothelial dysfunction with chronic vasculopathy, neutrophil-mediated adhesion, and a hypercoagulable state, requiring multimodal management targeting disease modification and end-organ protection.',
      explanation: `## Molecular Pathophysiology

The Glu6Val substitution creates a hydrophobic contact point on deoxy-HbS. Upon deoxygenation, HbS tetramers polymerize into 14-strand fibers that deform the erythrocyte. Key modifiers:

- **HbF concentration:** HbF disrupts polymer formation; high HbF = milder disease
- **MCHC:** Higher intracellular HbS concentration accelerates polymerization (delay time inversely proportional to ~30th power of concentration)
- **Dehydration:** K-Cl cotransport and Gardos channel activation cause cell dehydration

## Vascular Biology

SCD is a chronic vasculopathy involving:
1. **Endothelial activation:** Free hemoglobin scavenges nitric oxide (NO); arginase depletes L-arginine
2. **Adhesion cascade:** Sickle RBCs, neutrophils, and platelets adhere to activated endothelium via P-selectin, VCAM-1, and integrins
3. **Sterile inflammation:** DAMPs from hemolysis activate innate immunity via TLR4
4. **Hypercoagulability:** Phosphatidylserine exposure, tissue factor release, thrombin generation

## Acute Complications Management

**Vaso-occlusive crisis:**
- IV fluids (avoid overhydration), multimodal analgesia (NSAIDs + opioids), incentive spirometry
- Transfuse for Hb drop, ACS, or refractory pain

**Acute chest syndrome:**
- Empiric antibiotics (cephalosporin + macrolide), exchange transfusion, bronchodilators
- Target HbS <30% with exchange transfusion

**Stroke:**
- Emergent exchange transfusion targeting HbS <30%
- Chronic transfusion program afterward (reduces recurrence from 67% to 10%)

## Disease-Modifying Therapies
| Agent | Mechanism | Key Trial |
|-------|-----------|-----------|
| Hydroxyurea | Increases HbF, reduces WBC/platelets | MSH trial |
| Voxelotor | HbS oxygen affinity modifier | HOPE trial |
| Crizanlizumab | Anti-P-selectin monoclonal antibody | SUSTAIN trial |
| L-glutamine | Reduces oxidative stress | Phase III |`,
      keyTerms: [
        { term: 'HbS polymerization', definition: 'The formation of rigid 14-strand fibers from deoxy-HbS that deform erythrocytes' },
        { term: 'nitric oxide depletion', definition: 'Free hemoglobin from hemolysis scavenges NO, causing vasoconstriction and endothelial dysfunction' },
        { term: 'exchange transfusion', definition: 'Removing patient blood while transfusing donor blood to rapidly lower HbS percentage' },
        { term: 'voxelotor', definition: 'HbS polymerization inhibitor that increases oxygen affinity of hemoglobin' },
        { term: 'crizanlizumab', definition: 'Anti-P-selectin antibody reducing vaso-occlusive crises by blocking cell adhesion' },
      ],
      clinicalNotes: 'In acute chest syndrome, do not delay exchange transfusion for worsening respiratory status. Hydroxyurea is first-line disease modification for all SCD patients aged 9 months and older. Transcranial Doppler screening should begin at age 2 for stroke prevention.',
    },
    4: {
      level: 4,
      summary: 'Advanced SCD management encompasses risk-stratified chronic transfusion protocols, iron chelation, curative gene therapy approaches, and management of chronic complications including pulmonary hypertension, nephropathy, and avascular necrosis.',
      explanation: `## Chronic Organ Damage

**Pulmonary hypertension:**
- Prevalence ~6-11% by RHC; elevated TRV on echo is a mortality predictor
- Mechanism: NO depletion, chronic thromboembolism, left heart disease
- Screen with TRV; RHC for confirmation; PH-specific therapy if WHO Group 1

**Sickle nephropathy:**
- Hyposthenuria (concentrating defect) is earliest manifestation
- Hyperfiltration → microalbuminuria → proteinuria → CKD
- ACEi/ARB for proteinuria; hydroxyurea may slow progression

**Avascular necrosis:**
- Femoral and humeral heads; prevalence ~10-50% by adulthood
- MRI for early detection; core decompression or arthroplasty

**Retinopathy:**
- More common in HbSC than HbSS (paradoxically)
- Annual dilated eye exams; laser photocoagulation for proliferative disease

## Transfusion Management

**Simple transfusion:** Target Hb 10 g/dL (avoid >10 to prevent hyperviscosity)
**Exchange transfusion:** Target HbS <30%; automated erythrocytapheresis preferred
**Iron overload:** Ferritin monitoring, liver MRI (FerriScan/R2*), chelation with deferasirox or deferoxamine

## Curative Therapies

**Hematopoietic stem cell transplant:**
- Matched sibling donor: ~95% event-free survival
- Haploidentical: Expanding with post-transplant cyclophosphamide
- Myeloablative conditioning required

**Gene therapy:**
- Lentiviral vector: Lovotibeglogene autotemcel (lovo-cel) adds anti-sickling beta-globin
- Gene editing: Exagamglogene autotemcel (exa-cel) uses CRISPR to reactivate HbF via BCL11A disruption
- Both FDA-approved (2023); transformative but costly

## Pregnancy in SCD
- High-risk: increased VTE, preeclampsia, fetal growth restriction
- Hydroxyurea contraindicated (teratogenic); chronic transfusions instead
- Prophylactic transfusions reduce maternal complications`,
      keyTerms: [
        { term: 'exagamglogene autotemcel', definition: 'CRISPR-based gene editing therapy that reactivates fetal hemoglobin by disrupting BCL11A enhancer' },
        { term: 'lovotibeglogene autotemcel', definition: 'Lentiviral gene therapy adding an anti-sickling beta-globin gene to autologous stem cells' },
        { term: 'TRV', definition: 'Tricuspid regurgitant velocity on echocardiography; elevated values predict mortality in SCD' },
        { term: 'hyposthenuria', definition: 'Inability to concentrate urine; earliest renal manifestation of SCD due to medullary ischemia' },
      ],
      clinicalNotes: 'Gene therapy (exa-cel and lovo-cel) represent the first non-transplant curative options for SCD. Iron overload from chronic transfusion is a major comorbidity; liver MRI is more accurate than ferritin for quantifying iron burden. In pregnancy, switch from hydroxyurea to chronic transfusion before conception.',
    },
    5: {
      level: 5,
      summary: 'Cutting-edge SCD research spans novel gene editing targets, anti-inflammatory pathways, biomarker-driven precision management, and health equity initiatives to improve global access to disease-modifying therapies.',
      explanation: `## Precision Medicine in SCD

**Genetic modifiers:**
- BCL11A, HBS1L-MYB locus, and alpha-thalassemia co-inheritance modify HbF levels
- Polygenic HbF scores predict clinical severity
- Pharmacogenomics: UGT1A1 polymorphisms affect bilirubin metabolism and gallstone risk

**Biomarker panels:**
- LDH, reticulocyte count, and bilirubin define hemolytic severity
- Elevated TRV, NT-proBNP predict mortality
- Urine albumin-to-creatinine ratio for early nephropathy
- Cell-free DNA as a marker of vaso-occlusive severity

## Novel Therapeutics Pipeline

**Pyruvate kinase activators (etavopivat, mitapivat):**
- Reduce 2,3-DPG, shifting O2 dissociation curve left
- Improve RBC hydration and reduce sickling

**Anti-complement therapy:**
- Iptacopan (Factor B inhibitor) targeting complement-mediated hemolysis
- Eculizumab in delayed hemolytic transfusion reactions

**Selectin inhibitors:**
- Rivipansel (pan-selectin): Mixed results in RESET trial
- Next-generation E-selectin antagonists in development

**Gene editing beyond BCL11A:**
- Direct correction of HbS mutation via base editing (no DSBs needed)
- Multiplexed editing: correct mutation + boost HbF simultaneously
- In vivo gene editing (lipid nanoparticle delivery to HSCs) eliminating need for myeloablation

## Global Health Perspective

- ~300,000 births with SCD annually, predominantly sub-Saharan Africa
- Newborn screening programs expanding but incomplete
- Hydroxyurea availability and cost remain barriers
- Point-of-care diagnostics (HemoTypeSC) enabling field diagnosis
- WHO resolution on SCD as a global health priority

## Long-term Outcomes

- Median survival now >50 years in high-income countries (was <20 years in 1970s)
- Transition from pediatric to adult care remains a vulnerable period
- Cognitive deficits from silent cerebral infarcts affect ~40% of children
- Chronic pain management: multimodal approach, avoid opioid stigmatization`,
      keyTerms: [
        { term: 'base editing', definition: 'Precision gene editing converting one DNA base to another without double-strand breaks; potential for direct HbS correction' },
        { term: 'etavopivat', definition: 'Pyruvate kinase activator that reduces 2,3-DPG and RBC sickling' },
        { term: 'silent cerebral infarcts', definition: 'Subclinical brain lesions on MRI affecting ~40% of SCD children; associated with cognitive decline' },
        { term: 'HemoTypeSC', definition: 'Point-of-care lateral flow assay for rapid SCD diagnosis in resource-limited settings' },
      ],
      clinicalNotes: `Key frontiers in SCD management:

1. Gene therapy access: FDA-approved but >$2M per treatment; equitable access is a major challenge
2. In vivo gene editing may eliminate the need for myeloablative conditioning and autologous transplant
3. Combination disease-modifying therapy (hydroxyurea + voxelotor + crizanlizumab) under investigation
4. Transition programs from pediatric to adult care reduce mortality during the high-risk 18-25 age window
5. Chronic pain in adults requires destigmatized, multimodal management including non-pharmacologic approaches`,
    },
  },

  media: [
    { id: 'scd-pathophysiology', type: 'diagram', filename: 'scd-hbs-polymerization.svg', title: 'HbS Polymerization and Sickling', description: 'Molecular mechanism of HbS polymer formation under deoxygenation' },
    { id: 'scd-complications', type: 'diagram', filename: 'scd-organ-damage.svg', title: 'SCD Chronic Organ Damage', description: 'Multi-organ complications of sickle cell disease' },
  ],
  citations: [
    { id: 'nih-scd-guidelines', type: 'article', title: 'Evidence-Based Management of Sickle Cell Disease: Expert Panel Report, 2014', authors: ['Yawn BP', 'et al.'], source: 'JAMA' },
    { id: 'piel-scd-lancet', type: 'article', title: 'Sickle Cell Disease', authors: ['Piel FB', 'Steinberg MH', 'Rees DC'], source: 'The Lancet' },
    { id: 'kato-scd-review', type: 'article', title: 'Sickle Cell Disease', authors: ['Kato GJ', 'et al.'], source: 'Nature Reviews Disease Primers' },
  ],
  crossReferences: [
    { targetId: 'condition-iron-deficiency-anemia', targetType: 'condition', relationship: 'sibling', label: 'Iron Deficiency Anemia' },
    { targetId: 'condition-thalassemia', targetType: 'condition', relationship: 'related', label: 'Thalassemia' },
    { targetId: 'topic-blood-transfusion-medicine', targetType: 'topic', relationship: 'related', label: 'Blood Transfusion Medicine' },
    { targetId: 'topic-anticoagulation-therapy', targetType: 'topic', relationship: 'see-also', label: 'Anticoagulation Therapy' },
  ],
  tags: {
    systems: ['hematology'],
    topics: ['pathology', 'genetics', 'therapeutics'],
    keywords: ['sickle cell', 'HbS', 'hemoglobinopathy', 'vaso-occlusive', 'hydroxyurea', 'gene therapy', 'CRISPR'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'pediatrics'] },
  },
  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default sickleCellDisease;
