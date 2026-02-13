/**
 * Thrombophilia - Comprehensive Educational Content
 *
 * Inherited and acquired conditions predisposing to venous
 * and/or arterial thrombosis.
 */

import { EducationalContent } from '../../../types';

export const thrombophilia: EducationalContent = {
  id: 'condition-thrombophilia',
  type: 'condition',
  name: 'Thrombophilia',
  alternateNames: ['Hypercoagulable state', 'Prothrombotic disorder'],

  levels: {
    1: {
      level: 1,
      summary: 'Thrombophilia means the blood clots too easily, which can cause dangerous blood clots in the legs, lungs, or other parts of the body.',
      explanation: `Thrombophilia is a condition where the blood tends to form clots more easily than it should.

**Why It Happens:**
- Sometimes inherited from parents (born with it)
- Sometimes develops later in life (acquired)
- Blood clotting system is out of balance

**Common Causes:**
- Factor V Leiden mutation
- Prothrombin gene mutation
- Antiphospholipid syndrome
- Cancer

**Problems It Can Cause:**
- Deep vein thrombosis (blood clot in leg)
- Pulmonary embolism (blood clot in lung)
- Pregnancy problems

**Treatment:**
- Blood thinners (anticoagulants)
- Length of treatment depends on the cause
- Some people need lifelong treatment`,
      keyTerms: [
        { term: 'thrombophilia', definition: 'A condition where blood clots more easily than normal', pronunciation: 'throm-boh-FIL-ee-ah' },
        { term: 'blood clot', definition: 'A clump of blood that changes from liquid to a gel-like state' },
        { term: 'anticoagulant', definition: 'A medicine that helps prevent blood clots' },
      ],
      analogies: [
        'Normal blood clotting is like having good brakes on a car - they work when needed and release when done. In thrombophilia, the brakes stick on, causing clots when they should not.',
      ],
      examples: [
        'A 30-year-old woman develops a blood clot in her leg while taking birth control pills. Testing shows she has Factor V Leiden, making her more prone to clots.',
      ],
    },
    2: {
      level: 2,
      summary: 'Thrombophilias are inherited or acquired conditions disrupting the balance between procoagulant and anticoagulant pathways, leading to venous and sometimes arterial thrombosis.',
      explanation: `Thrombophilia encompasses disorders predisposing to inappropriate clot formation.

**Inherited Thrombophilias:**
| Disorder | Prevalence | VTE Risk |
|----------|------------|----------|
| Factor V Leiden (heterozygous) | 5% | 3-8x |
| Prothrombin G20210A | 2% | 2-3x |
| Protein C deficiency | 0.3% | 10x |
| Protein S deficiency | 0.1% | 10x |
| Antithrombin deficiency | 0.02% | 25-50x |

**Acquired Thrombophilias:**
- Antiphospholipid syndrome
- Cancer (Trousseau syndrome)
- Myeloproliferative neoplasms
- Nephrotic syndrome
- Hormonal (OCPs, HRT, pregnancy)

**Clinical Manifestations:**
- Deep vein thrombosis
- Pulmonary embolism
- Unusual site thrombosis (cerebral, splanchnic)
- Recurrent pregnancy loss (APS)
- Warfarin-induced skin necrosis (protein C/S deficiency)

**When to Test:**
- Unprovoked VTE <50 years
- VTE at unusual sites
- Recurrent VTE
- Family history of VTE
- Recurrent pregnancy loss

**Treatment:**
- Acute VTE: Anticoagulation (heparin then oral)
- Duration depends on provoking factors and thrombophilia type
- Indefinite anticoagulation for severe thrombophilias with unprovoked VTE`,
      keyTerms: [
        { term: 'Factor V Leiden', definition: 'Most common inherited thrombophilia; resistance to activated protein C' },
        { term: 'antiphospholipid syndrome', definition: 'Acquired autoimmune thrombophilia with antiphospholipid antibodies' },
        { term: 'VTE', definition: 'Venous thromboembolism; includes DVT and PE' },
        { term: 'protein C', definition: 'Natural anticoagulant that inactivates factors Va and VIIIa' },
      ],
      analogies: [
        'The coagulation system is like a seesaw - thrombophilias tip the balance toward clotting by either increasing procoagulant factors or decreasing natural anticoagulants.',
      ],
    },
    3: {
      level: 3,
      summary: 'Thrombophilia testing must be appropriately timed and interpreted in clinical context, with management focused on individualized duration and intensity of anticoagulation.',
      explanation: `## Overview

Thrombophilia testing has limited utility and should be reserved for situations where results will change management.

## Inherited Thrombophilias

**Factor V Leiden:**
- Point mutation (R506Q)
- Resistance to APC-mediated inactivation
- Homozygotes: 50-80x VTE risk

**Prothrombin G20210A:**
- 3'-UTR mutation
- Elevated prothrombin levels
- Modest VTE risk

**Antithrombin Deficiency:**
- Type I: Quantitative (low antigen)
- Type II: Qualitative (normal antigen, low activity)
- Highest VTE risk among inherited thrombophilias
- Heparin resistance possible

**Protein C Deficiency:**
- Type I: Low antigen and activity
- Type II: Normal antigen, low activity
- Homozygous: Neonatal purpura fulminans
- Warfarin skin necrosis risk

**Protein S Deficiency:**
- Free PS is active form
- Pregnancy reduces levels
- Complex interpretation

## Acquired Thrombophilias

**Antiphospholipid Syndrome:**
- Lupus anticoagulant, anticardiolipin, anti-beta2GP1
- Criteria: Clinical (VTE or pregnancy morbidity) + lab (positive x2, 12 weeks apart)
- Arterial and venous thrombosis
- Pregnancy: Recurrent loss, preeclampsia, IUGR

**Cancer-Associated:**
- 4-7x VTE risk
- Mucin-secreting adenocarcinomas (pancreatic, GI)
- Trousseau syndrome: Migratory superficial thrombophlebitis
- DOAC or LMWH for treatment

## Testing Considerations

**When NOT to Test:**
- Acute VTE (levels affected)
- On anticoagulation (warfarin affects protein C/S, heparin affects AT)
- First provoked VTE with clear risk factor
- Isolated arterial thrombosis (usually not thrombophilia)

**Appropriate Timing:**
- >2 weeks off anticoagulation
- Not during acute illness
- Not during pregnancy

## Management Principles

**Duration of Anticoagulation:**
| Scenario | Duration |
|----------|----------|
| Provoked VTE (major risk factor) | 3 months |
| Unprovoked VTE | Consider extended |
| Unprovoked + thrombophilia | Often extended |
| Recurrent VTE | Indefinite |
| Severe thrombophilia (AT def, APS) | Often indefinite |

**Thrombophilia Impact:**
- Does NOT change acute treatment
- May influence duration decision
- Family screening controversial`,
      keyTerms: [
        { term: 'APC resistance', definition: 'Activated protein C resistance; mechanism of Factor V Leiden' },
        { term: 'lupus anticoagulant', definition: 'Antiphospholipid antibody causing prolonged aPTT but clinical thrombosis' },
        { term: 'purpura fulminans', definition: 'Severe skin necrosis from DIC; seen in homozygous protein C deficiency' },
        { term: 'Trousseau syndrome', definition: 'Migratory thrombophlebitis associated with occult malignancy' },
      ],
      clinicalNotes: 'Lupus anticoagulant paradoxically prolongs aPTT in vitro but causes thrombosis in vivo. Test with dilute Russell viper venom time (dRVVT) or sensitive aPTT.',
    },
    4: {
      level: 4,
      summary: 'Thrombophilia management requires understanding the pathophysiology of specific defects, appropriate diagnostic testing, and evidence-based anticoagulation decisions.',
      explanation: `## Pathophysiology of Natural Anticoagulants

**Antithrombin:**
- Serine protease inhibitor
- Inactivates thrombin, Xa, IXa, XIa
- Heparin accelerates activity 1000x
- Deficiency: Heparin resistance possible

**Protein C Pathway:**
- Thrombin binds thrombomodulin → activates PC
- APC + protein S inactivates Va, VIIIa
- Factor V Leiden: Mutant Va resistant to APC

**Protein S:**
- Cofactor for APC
- 40% free (active), 60% bound to C4BP
- Inflammation increases C4BP → functional deficiency

## Laboratory Testing Details

**Functional vs Antigenic Assays:**
| Test | Measure | Interference |
|------|---------|--------------|
| AT activity | Function | Heparin, DOACs |
| AT antigen | Quantity | None |
| PC activity | Function | Warfarin |
| PC antigen | Quantity | None |
| Free PS | Quantity | Warfarin, pregnancy |
| APC resistance | FVL screen | DOACs, FVIII |
| Prothrombin gene | DNA | None |

**Antiphospholipid Testing:**
- Lupus anticoagulant: dRVVT or aPTT-based
- Anticardiolipin IgG/IgM: ELISA
- Anti-beta2GP1 IgG/IgM: ELISA
- Confirmatory mixing studies

## APS Categories

**Triple Positive:**
- All 3 antibody types positive
- Highest thrombotic risk
- Consider lifelong anticoagulation after first VTE

**Single/Double Positive:**
- Lower risk but still significant
- Risk-based decisions on duration

**Obstetric APS:**
- Low-dose aspirin + prophylactic heparin
- Throughout pregnancy and 6 weeks postpartum

## Severe Thrombophilias

**Definition:**
- Antithrombin deficiency
- Protein C or S homozygous/compound heterozygous
- Factor V Leiden homozygous
- Combined defects
- Triple-positive APS

**Management:**
- Often indefinite anticoagulation after first unprovoked VTE
- Family screening more justified
- Pregnancy requires specialized management

## Special Situations

**Pregnancy:**
- Cannot test for inherited thrombophilias (levels change)
- Prophylaxis decisions based on prior history
- LMWH preferred anticoagulant
- Switch to UFH near delivery

**Cancer:**
- LMWH or DOAC (edoxaban, rivaroxaban) preferred
- Apixaban emerging data
- Duration: While cancer active, minimum 6 months

**Warfarin Skin Necrosis:**
- Protein C/S deficiency + warfarin initiation
- PC/PS fall faster than factors II, X
- Transient hypercoagulable state
- Prevention: Bridge with heparin, start warfarin slowly`,
      keyTerms: [
        { term: 'thrombomodulin', definition: 'Endothelial receptor that converts thrombin to protein C activator' },
        { term: 'triple positive APS', definition: 'LA + aCL + anti-beta2GP1 positive; highest risk category' },
        { term: 'C4BP', definition: 'C4b-binding protein; binds protein S reducing its availability' },
        { term: 'dRVVT', definition: 'Dilute Russell viper venom time; sensitive test for lupus anticoagulant' },
      ],
      clinicalNotes: 'Never start warfarin without heparin bridge in protein C/S deficiency - risk of skin necrosis. Overlap for minimum 5 days with INR therapeutic for 2 days.',
    },
    5: {
      level: 5,
      summary: 'Contemporary thrombophilia management integrates selective testing strategies, individualized anticoagulation duration decisions, and specialized care for high-risk populations.',
      explanation: `## Evidence-Based Testing Approach

**Guidelines Consensus:**
- Routine testing after first provoked VTE: NOT recommended
- Testing after unprovoked VTE: Selective, may influence duration
- Testing does NOT change acute management

**When Testing May Help:**
- Unusual site thrombosis (cerebral, splanchnic)
- Young age (<50) with unprovoked VTE
- Family counseling in severe thrombophilia kindreds
- Recurrent pregnancy loss
- Arterial + venous events (suggests APS)

**Test Selection:**
- Standard panel: FVL, PT gene, AT, PC, PS, APS antibodies
- Extended: FVIII levels (if persistently elevated >150%)
- Consider homocysteine in unusual cases

## Anticoagulation Duration Decisions

**Risk-Benefit Framework:**
- Recurrence risk off anticoagulants
- Major bleeding risk on anticoagulants
- Patient preferences
- Thrombophilia type (modest impact)

**Predictive Scores:**
- HERDOO2 (women): D-dimer, BMI, age, post-thrombotic signs
- Vienna prediction model: D-dimer, sex, location
- DASH score: D-dimer, age, sex, hormonal

**Thrombophilia Influence:**
| Thrombophilia | Impact on Duration |
|---------------|--------------------|
| Factor V Leiden heterozygous | Minimal |
| Prothrombin gene heterozygous | Minimal |
| Protein C/S heterozygous | Modest |
| Antithrombin deficiency | Significant |
| Triple-positive APS | Strong |
| Homozygous/combined defects | Strong |

## APS Management Updates

**Thrombotic APS:**
- Warfarin INR 2-3 remains standard
- DOACs inferior in triple-positive (TRAPS trial)
- Rivaroxaban may be considered in non-high-risk APS

**Obstetric APS:**
- LDA + prophylactic LMWH standard
- Refractory cases: Add hydroxychloroquine, IVIG, prednisone
- Continue for 6 weeks postpartum

**Catastrophic APS:**
- Rare, life-threatening
- Anticoagulation + steroids + plasma exchange or IVIG
- High mortality

## Novel Considerations

**Extended Half-Life Anticoagulants:**
- Factor XI inhibitors (in development)
- May reduce bleeding vs VKA/DOACs
- Target intrinsic pathway

**Direct Thrombin Inhibitors:**
- Dabigatran
- Avoid in APS

**Laboratory Advances:**
- Thrombin generation assays (research)
- Global hemostasis assessment
- Personalized risk profiling

## Special Populations

**Pediatrics:**
- Rare VTE
- Often provoked (CVL, infection)
- Limited duration
- Severe thrombophilia: Prophylaxis considerations

**Cerebral Venous Thrombosis:**
- Full anticoagulation despite hemorrhage risk
- Screen for thrombophilia after acute phase
- Duration often 6-12 months

**Splanchnic Vein Thrombosis:**
- Screen for MPNs (JAK2)
- Screen for thrombophilia
- PNH in Budd-Chiari
- Duration individualized`,
      keyTerms: [
        { term: 'HERDOO2', definition: 'Clinical score helping predict recurrence risk in women after first unprovoked VTE' },
        { term: 'TRAPS trial', definition: 'Trial showing rivaroxaban inferiority to warfarin in triple-positive APS' },
        { term: 'catastrophic APS', definition: 'Acute multi-organ failure from widespread thrombosis; high mortality' },
        { term: 'Vienna model', definition: 'Prediction model using D-dimer to estimate VTE recurrence risk' },
      ],
      clinicalNotes: `**Board Pearls:**
- Factor V Leiden = most common inherited thrombophilia (5% prevalence)
- Antithrombin deficiency = highest VTE risk among inherited thrombophilias
- Do NOT test during acute VTE or on anticoagulation
- Lupus anticoagulant: Prolonged aPTT but clinical thrombosis (paradox)
- Triple-positive APS: Warfarin preferred over DOACs (TRAPS trial)
- Warfarin skin necrosis: Protein C/S deficiency; always bridge with heparin
- Thrombophilia testing rarely changes acute management
- Cancer-associated VTE: LMWH or DOAC, minimum 6 months`,
    },
  },

  media: [
    {
      id: 'coag-cascade',
      type: 'diagram',
      filename: 'coagulation-anticoagulation-balance.svg',
      title: 'Procoagulant-Anticoagulant Balance',
      description: 'Natural anticoagulant pathways and thrombophilia targets',
    },
  ],

  citations: [
    {
      id: 'connors-2017',
      type: 'article',
      title: 'Thrombophilia Testing and Venous Thrombosis',
      authors: ['Connors JM'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMra1700365',
    },
  ],

  crossReferences: [
    { targetId: 'condition-deep-vein-thrombosis', targetType: 'condition', relationship: 'related', label: 'Deep Vein Thrombosis' },
    { targetId: 'condition-pulmonary-embolism', targetType: 'condition', relationship: 'related', label: 'Pulmonary Embolism' },
  ],

  tags: {
    systems: ['hematologic'],
    topics: ['thrombosis', 'coagulation', 'hematology'],
    keywords: ['thrombophilia', 'Factor V Leiden', 'APS', 'hypercoagulable'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine'],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default thrombophilia;
