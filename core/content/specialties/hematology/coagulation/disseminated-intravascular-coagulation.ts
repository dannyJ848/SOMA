/**
 * Disseminated Intravascular Coagulation (DIC) - Comprehensive Educational Content
 *
 * A life-threatening consumptive coagulopathy characterized by systemic
 * activation of coagulation pathways leading to widespread microvascular
 * thrombosis and secondary bleeding.
 */

import { EducationalContent } from '../../../types';

export const disseminatedIntravascularCoagulation: EducationalContent = {
  id: 'condition-disseminated-intravascular-coagulation',
  type: 'condition',
  name: 'Disseminated Intravascular Coagulation',
  nameEs: 'Coagulacion Intravascular Diseminada',
  alternateNames: ['DIC', 'Consumptive coagulopathy', 'Defibrination syndrome'],
  hpoId: 'HP:0100786',

  levels: {
    1: {
      level: 1,
      summary: 'DIC is a dangerous condition where the blood clotting system goes haywire, forming tiny clots throughout the body and then running out of clotting materials, causing uncontrolled bleeding.',
      explanation: `DIC is a serious medical emergency that affects how your blood clots.

**What normally happens:**
Your blood has a careful balance. When you get a cut, clotting factors seal the wound. The rest of the time, your blood flows freely.

**What goes wrong in DIC:**
1. Something triggers clotting everywhere in the body at once (like a severe infection or injury)
2. Tiny blood clots form in small blood vessels throughout the body
3. These clots use up all the clotting factors and platelets
4. Now the body cannot stop bleeding from anywhere

**Think of it like this:**
Imagine your city's fire department responding to every single fire alarm at once, even false ones. All the trucks are dispatched, all the water is used up, and when a real fire happens, there is nothing left to fight it.

**What causes DIC:**
- Severe infections (sepsis)
- Major injuries or surgery
- Cancer
- Pregnancy complications
- Severe burns

**Why it is dangerous:**
The combination of organ damage from tiny clots AND uncontrolled bleeding makes DIC very serious and requires immediate hospital treatment.`,
      keyTerms: [
        { term: 'clotting factors', definition: 'Proteins in your blood that work together to stop bleeding' },
        { term: 'platelets', definition: 'Tiny blood cells that help form clots to stop bleeding' },
        { term: 'DIC', definition: 'A condition where the body forms too many tiny clots, then runs out of clotting ability' },
      ],
      analogies: [
        'DIC is like a fire department that sends all trucks to false alarms - when a real fire starts, there are no resources left.',
        'It is like using all the glue in the house to seal every tiny crack, then having nothing left when something big breaks.',
      ],
    },
    2: {
      level: 2,
      summary: 'DIC is a systemic activation of the coagulation cascade triggered by tissue factor exposure, causing microthrombi formation, consumption of clotting factors and platelets, and secondary fibrinolysis resulting in both thrombotic and hemorrhagic manifestations.',
      explanation: `## Pathophysiology Overview

DIC is always secondary to an underlying condition that triggers widespread coagulation activation:

**Common Triggers:**
| Category | Examples |
|----------|---------|
| Infection | Sepsis (especially gram-negative), meningococcemia |
| Obstetric | Placental abruption, amniotic fluid embolism, eclampsia |
| Malignancy | Acute promyelocytic leukemia (APL), mucin-secreting adenocarcinomas |
| Trauma | Massive tissue injury, burns, head injury |
| Other | Snake envenomation, transfusion reactions, pancreatitis |

**What Happens:**
1. Tissue factor released into bloodstream
2. Thrombin generated systemically
3. Fibrin deposited in microvasculature (organ damage)
4. Consumption of platelets, fibrinogen, and clotting factors
5. Secondary activation of fibrinolysis (plasmin generation)
6. D-dimers and FDPs released from fibrin breakdown

## Clinical Manifestations

**Thrombotic:** Organ dysfunction (renal failure, ARDS, liver failure, altered mental status)
**Hemorrhagic:** Oozing from IV sites, petechiae, purpura, mucosal bleeding, surgical site bleeding

## Diagnosis

| Test | Expected in DIC |
|------|----------------|
| Platelets | Low (consumed) |
| PT/INR | Prolonged |
| aPTT | Prolonged |
| Fibrinogen | Low (consumed) |
| D-dimer | Markedly elevated |
| Peripheral smear | Schistocytes (microangiopathic hemolysis) |

## Treatment
- **Treat the underlying cause** (most important!)
- Platelet transfusion if <10K or actively bleeding
- FFP/cryoprecipitate to replace factors and fibrinogen
- Heparin rarely used (only in chronic/subacute DIC with thrombotic predominance)`,
      keyTerms: [
        { term: 'tissue factor', definition: 'A protein released by damaged cells that triggers the coagulation cascade' },
        { term: 'D-dimer', definition: 'A breakdown product of cross-linked fibrin; markedly elevated in DIC' },
        { term: 'schistocytes', definition: 'Fragmented red blood cells seen on blood smear from mechanical shearing in clotted microvasculature' },
        { term: 'fibrinogen', definition: 'A clotting protein converted to fibrin by thrombin; consumed in DIC' },
        { term: 'cryoprecipitate', definition: 'A blood product rich in fibrinogen, factor VIII, and von Willebrand factor' },
      ],
    },
    3: {
      level: 3,
      summary: 'DIC pathogenesis involves tissue factor-mediated thrombin generation, impaired physiological anticoagulant pathways (antithrombin, protein C), and suppressed fibrinolysis from PAI-1 elevation, with the ISTH DIC score providing standardized diagnostic criteria.',
      explanation: `## Detailed Pathogenesis

**Three simultaneous mechanisms:**

**1. Massive thrombin generation:**
- Tissue factor (TF) on monocytes and endothelium binds factor VIIa
- TF-VIIa complex activates factor X, generating thrombin
- Thrombin converts fibrinogen to fibrin, activates platelets
- Cancer cells directly express TF; gram-negative LPS induces TF on monocytes

**2. Impaired anticoagulant pathways:**
- Antithrombin consumed by ongoing thrombin generation
- Protein C pathway impaired: thrombomodulin downregulated by TNF-alpha, protein C consumed
- TFPI overwhelmed by massive TF exposure

**3. Dysregulated fibrinolysis:**
- **Acute DIC (sepsis):** PAI-1 elevated by endotoxin → fibrinolysis suppressed → microthrombosis predominates
- **Acute DIC (APL, trauma):** Hyperfibrinolysis from t-PA release → bleeding predominates
- Understanding the fibrinolytic phenotype guides management

## ISTH DIC Scoring System

| Parameter | 0 points | 1 point | 2 points | 3 points |
|-----------|----------|---------|----------|----------|
| Platelets (x10^9/L) | >100 | 50-100 | <50 | - |
| D-dimer | No increase | Moderate increase | Strong increase | - |
| Prolonged PT (sec) | <3 | 3-6 | >6 | - |
| Fibrinogen (g/L) | >1.0 | - | <1.0 | - |

Score >=5: Compatible with overt DIC. Score <5: Suggestive, repeat in 24h.

## Specific DIC Scenarios

**Sepsis-associated DIC:**
- Thrombotic phenotype predominates (suppressed fibrinolysis)
- Purpura fulminans: symmetric limb gangrene from dermal microthrombosis
- Treatment: source control, antibiotics, supportive care

**APL-associated DIC:**
- Hyperfibrinolytic phenotype (severe bleeding)
- APL cells release annexin II (activates plasmin) and TF
- ATRA initiation rapidly improves coagulopathy
- Aggressive factor replacement: fibrinogen >150 mg/dL, platelets >30K

**Obstetric DIC:**
- Placental abruption: abrupt TF release
- Amniotic fluid embolism: TF-rich amniotic fluid activates coagulation
- Delivery of fetus/placenta is definitive treatment

## Differential Diagnosis
- TTP/HUS: ADAMTS13 <10% distinguishes TTP; platelets consumed but coagulation tests normal
- Severe liver disease: decreased factor synthesis (not consumption)
- Dilutional coagulopathy after massive transfusion`,
      keyTerms: [
        { term: 'PAI-1', definition: 'Plasminogen activator inhibitor-1; elevated in sepsis-associated DIC, suppressing fibrinolysis' },
        { term: 'ISTH DIC score', definition: 'Standardized scoring system using platelets, D-dimer, PT, and fibrinogen to diagnose overt DIC' },
        { term: 'purpura fulminans', definition: 'Rapidly progressive hemorrhagic skin necrosis from dermal vessel thrombosis; often in meningococcal DIC' },
        { term: 'ATRA', definition: 'All-trans retinoic acid; rapidly reverses APL-associated DIC coagulopathy' },
        { term: 'thrombomodulin', definition: 'Endothelial receptor that activates protein C; downregulated in DIC, impairing natural anticoagulation' },
      ],
      clinicalNotes: 'DIC is never a primary diagnosis - always identify and treat the trigger. In APL, do not wait for genetic confirmation to start ATRA if morphology is suggestive. The fibrinolytic phenotype (suppressed vs. enhanced) determines whether bleeding or thrombosis predominates.',
    },
    4: {
      level: 4,
      summary: 'Advanced DIC management involves phenotype-directed therapy, recombinant thrombomodulin and antithrombin replacement, management of specific etiologies including cancer-associated thrombotic microangiopathy, and emerging biomarkers for early detection.',
      explanation: `## Phenotype-Directed Management

**Thrombotic-predominant DIC (sepsis):**
- Aggressive source control and antibiotics
- Consider therapeutic-dose heparin only if macrovascular thrombosis present
- Recombinant thrombomodulin (ART-123/thrombomodulin alfa): Japan/Asia approved; Phase III trials in West
- Antithrombin concentrate if AT levels <50%
- Maintain platelets >20K, fibrinogen >100 mg/dL

**Hemorrhagic-predominant DIC (APL, trauma):**
- Aggressive factor replacement: cryoprecipitate for fibrinogen >150 mg/dL
- Platelet transfusion target >30-50K
- Antifibrinolytics (tranexamic acid) may be considered in hyperfibrinolytic DIC
- Avoid heparin

**Chronic/Compensated DIC (malignancy):**
- Low-grade DIC with Trousseau syndrome
- Therapeutic anticoagulation (LMWH preferred over warfarin)
- May persist until cancer is treated

## Advanced Diagnostics

**Beyond ISTH score:**
- Antithrombin activity: <50% correlates with severity and mortality
- Protein C levels: Prognostic marker
- Thrombin-antithrombin (TAT) complexes: Early marker of thrombin generation
- Plasmin-alpha2-antiplasmin (PAP) complexes: Quantify fibrinolysis
- Soluble fibrin monomers: Detect fibrin formation before D-dimer rises

**Thromboelastography (TEG/ROTEM):**
- Real-time assessment of coagulation phenotype
- Identifies hyperfibrinolysis (LY30 >3%) vs. suppressed fibrinolysis
- Guides targeted component therapy in trauma-associated DIC

## Special Populations

**Neonatal DIC:**
- Physiologically lower factor levels make diagnosis challenging
- Common triggers: necrotizing enterocolitis, sepsis, birth asphyxia
- Treatment thresholds differ from adults

**DIC in liver disease:**
- Difficult to distinguish from hepatic synthetic failure
- Factor VIII is elevated in liver disease (made by endothelium), consumed in DIC
- Thrombin generation assays may help differentiate

**COVID-19-associated coagulopathy:**
- Pulmonary immunothrombosis distinct from classic DIC
- D-dimer elevation with relatively preserved platelets and fibrinogen initially
- Prophylactic anticoagulation standard; therapeutic dose debated`,
      keyTerms: [
        { term: 'recombinant thrombomodulin', definition: 'Soluble form of endothelial thrombomodulin that restores protein C activation; approved in Japan for DIC' },
        { term: 'TAT complexes', definition: 'Thrombin-antithrombin complexes; early biomarker of systemic thrombin generation in DIC' },
        { term: 'thromboelastography', definition: 'Point-of-care viscoelastic test providing real-time assessment of clot formation, strength, and lysis' },
        { term: 'Trousseau syndrome', definition: 'Migratory thrombophlebitis and chronic DIC associated with occult malignancy' },
      ],
      clinicalNotes: 'Factor VIII level helps differentiate DIC from liver disease: consumed (low) in DIC, preserved or elevated in liver failure. TEG/ROTEM can rapidly identify the fibrinolytic phenotype and guide targeted component therapy. In cancer-associated DIC, LMWH is preferred over warfarin (warfarin failures and Trousseau flares are common).',
    },
    5: {
      level: 5,
      summary: 'Contemporary DIC research explores immunothrombosis mechanisms, NETs-mediated coagulation activation, precision biomarker panels for early intervention, and targeted therapies including recombinant ADAMTS13, anti-histone antibodies, and complement inhibition.',
      explanation: `## Immunothrombosis and DIC

**Neutrophil extracellular traps (NETs):**
- Activated neutrophils extrude chromatin webs studded with histones, elastase, and TF
- NETs provide scaffold for thrombus formation and directly activate factor XII
- Histone H3/H4 are directly cytotoxic to endothelium
- DNase I degrades NETs; under investigation as adjunctive therapy
- PAD4 inhibitors prevent NET formation; cl-amidine in preclinical models

**Complement-coagulation crosstalk:**
- Complement activation (C3a, C5a) amplifies coagulation through TF expression on monocytes
- Mannose-binding lectin pathway activates thrombin-activatable fibrinolysis inhibitor (TAFI)
- C5a inhibition (eculizumab) shows benefit in complement-mediated TMA overlapping with DIC

**Damage-associated molecular patterns (DAMPs):**
- Cell-free DNA, HMGB1, histones activate coagulation through TLR and RAGE receptors
- Cell-free DNA levels correlate with DIC severity and mortality
- Anti-HMGB1 antibodies reduce DIC in preclinical models

## Precision Diagnostics

**Multi-marker panels:**
- Combination of TAT, PAP, soluble fibrin, protein C, and AT for early DIC detection
- Machine learning models integrating clinical and laboratory data for real-time DIC prediction
- Point-of-care microfluidic assays for rapid coagulation phenotyping

**Genomic susceptibility:**
- Factor V Leiden and prothrombin G20210A may worsen thrombotic DIC
- Cytokine gene polymorphisms (TNF-alpha, IL-6) affect DIC severity in sepsis
- Pharmacogenomics of anticoagulant metabolism

## Novel Therapeutic Targets

| Target | Agent | Mechanism |
|--------|-------|-----------|
| NETs | DNase I | Degrades extracellular DNA scaffolds |
| Histones | Anti-histone Ab, heparin | Neutralize cytotoxic histones |
| TF pathway | NAPc2, ixolaris | Specific TF-VIIa inhibition |
| Complement | Eculizumab | C5 inhibition reducing immunothrombosis |
| Contact pathway | Lanadelumab | Anti-FXIIa for NET-mediated activation |
| PAR signaling | Vorapaxar | PAR-1 antagonism (adjunctive) |

## Outcomes and Quality Metrics

- DIC mortality remains 30-50% depending on underlying etiology
- Sepsis-associated DIC mortality reduced with early goal-directed therapy and source control
- Obstetric DIC has best prognosis when delivery is accomplished rapidly
- APL-associated DIC prognosis dramatically improved with early ATRA + arsenic trioxide
- Scoring systems (ISTH, JMHW) validated for prognosis, not just diagnosis`,
      keyTerms: [
        { term: 'neutrophil extracellular traps (NETs)', definition: 'Chromatin webs released by activated neutrophils that activate coagulation and trap pathogens' },
        { term: 'HMGB1', definition: 'High-mobility group box 1 protein; a DAMP that activates coagulation and inflammation through TLR4 and RAGE' },
        { term: 'NAPc2', definition: 'Nematode anticoagulant peptide c2; a specific tissue factor pathway inhibitor in clinical trials' },
        { term: 'PAD4', definition: 'Peptidylarginine deiminase 4; enzyme required for NET formation; therapeutic target for NET inhibition' },
      ],
      clinicalNotes: `Emerging clinical paradigms:

1. Immunothrombosis concept reframes DIC as dysregulated innate immune defense, not merely a coagulation disorder
2. NETs are a therapeutic target: DNase I and PAD4 inhibitors in preclinical/early clinical trials
3. Cell-free DNA and histone levels may become standard biomarkers for DIC severity and treatment response
4. Complement inhibition with eculizumab shows promise in complement-mediated TMA/DIC overlap
5. Machine learning-based DIC prediction tools may enable earlier intervention before overt coagulopathy develops`,
    },
  },

  media: [
    { id: 'dic-pathogenesis', type: 'diagram', filename: 'dic-pathogenesis.svg', title: 'DIC Pathogenesis', description: 'Three mechanisms: thrombin generation, anticoagulant failure, dysregulated fibrinolysis' },
  ],
  citations: [
    { id: 'levi-dic-nejm', type: 'article', title: 'Disseminated Intravascular Coagulation', authors: ['Levi M', 'Ten Cate H'], source: 'New England Journal of Medicine' },
    { id: 'isth-dic-guidelines', type: 'article', title: 'Guidance for Diagnosis and Treatment of DIC', authors: ['Wada H', 'et al.'], source: 'Journal of Thrombosis and Haemostasis' },
  ],
  crossReferences: [
    { targetId: 'condition-deep-vein-thrombosis', targetType: 'condition', relationship: 'related', label: 'Deep Vein Thrombosis' },
    { targetId: 'topic-anticoagulation-therapy', targetType: 'topic', relationship: 'related', label: 'Anticoagulation Therapy' },
    { targetId: 'topic-blood-transfusion-medicine', targetType: 'topic', relationship: 'related', label: 'Blood Transfusion Medicine' },
    { targetId: 'condition-hemophilia', targetType: 'condition', relationship: 'see-also', label: 'Hemophilia' },
  ],
  tags: {
    systems: ['hematology'],
    topics: ['pathology', 'critical care', 'therapeutics'],
    keywords: ['DIC', 'coagulopathy', 'consumptive', 'thrombosis', 'bleeding', 'tissue factor', 'fibrinolysis'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery', 'emergency medicine'] },
  },
  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default disseminatedIntravascularCoagulation;
