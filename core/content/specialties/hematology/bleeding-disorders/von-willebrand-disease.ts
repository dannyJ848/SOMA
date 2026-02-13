/**
 * von Willebrand Disease - Comprehensive Educational Content
 *
 * The most common inherited bleeding disorder, caused by deficiency
 * or dysfunction of von Willebrand factor.
 */

import { EducationalContent } from '../../../types';

export const vonWillebrandDisease: EducationalContent = {
  id: 'condition-von-willebrand-disease',
  type: 'condition',
  name: 'von Willebrand Disease',
  alternateNames: ['VWD', 'von Willebrands disease'],

  levels: {
    1: {
      level: 1,
      summary: 'von Willebrand disease is the most common inherited bleeding disorder, causing easy bruising, nosebleeds, and heavy periods.',
      explanation: `von Willebrand disease (VWD) is a condition where the blood has trouble forming clots because of a problem with a protein called von Willebrand factor.

**What Happens:**
- von Willebrand factor helps platelets stick together and to blood vessel walls
- When it is missing or does not work right, bleeding takes longer to stop

**Common Signs:**
- Bruising easily
- Frequent nosebleeds
- Heavy or long menstrual periods
- Bleeding a lot after dental work or surgery
- Bleeding gums

**Who Gets It:**
- Affects both males and females equally
- Most common inherited bleeding disorder
- Often runs in families

**Treatment:**
- Desmopressin (DDAVP) - helps release VWF
- VWF replacement products
- Medications to prevent clot breakdown`,
      keyTerms: [
        { term: 'von Willebrand factor', definition: 'A protein that helps platelets stick together to stop bleeding', pronunciation: 'von VILL-eh-brand' },
        { term: 'platelets', definition: 'Small blood cells that help form clots' },
        { term: 'desmopressin', definition: 'A medicine that helps release von Willebrand factor' },
      ],
      analogies: [
        'von Willebrand factor is like glue that helps platelets stick to a wound. Without enough glue, the platelets cannot stay in place to stop the bleeding.',
      ],
      examples: [
        'A teenage girl has extremely heavy periods lasting 10 days. She also bruises easily. Testing shows she has type 1 von Willebrand disease.',
      ],
    },
    2: {
      level: 2,
      summary: 'VWD results from quantitative (types 1, 3) or qualitative (type 2) defects in VWF, causing mucocutaneous bleeding and prolonged bleeding after procedures.',
      explanation: `von Willebrand disease encompasses a spectrum of disorders affecting von Willebrand factor.

**VWF Functions:**
- Primary hemostasis: Platelet adhesion to subendothelium
- Carrier for factor VIII (protects from degradation)

**Types:**
| Type | Defect | Frequency | Inheritance |
|------|--------|-----------|-------------|
| 1 | Partial quantitative | 75% | AD |
| 2A | Decreased HMW multimers | 15% | AD |
| 2B | Increased platelet binding | 5% | AD |
| 2M | Decreased platelet binding | Rare | AD |
| 2N | Decreased FVIII binding | Rare | AR |
| 3 | Complete absence | 1% | AR |

**Clinical Features:**
- Mucocutaneous bleeding predominant
- Menorrhagia (most common in women)
- Epistaxis
- Easy bruising
- GI bleeding (especially type 2A)
- Post-procedural bleeding

**Diagnosis:**
- VWF antigen (VWF:Ag)
- VWF activity (VWF:RCo or VWF:GPIbM)
- Factor VIII level
- VWF multimer analysis (for type 2)
- Bleeding history/BAT score

**Treatment:**
- DDAVP (type 1, some type 2)
- VWF concentrates (types 2B, 3, DDAVP non-responders)
- Antifibrinolytics (tranexamic acid)
- Hormonal therapy for menorrhagia`,
      keyTerms: [
        { term: 'VWF:RCo', definition: 'Ristocetin cofactor activity; measures VWF function' },
        { term: 'multimers', definition: 'Large polymers of VWF; high molecular weight forms most functional' },
        { term: 'DDAVP', definition: 'Desmopressin; releases stored VWF from endothelium' },
        { term: 'type 2B', definition: 'VWD with increased platelet binding, causing thrombocytopenia; DDAVP contraindicated' },
      ],
      analogies: [
        'VWF multimers are like long chains that create a strong net to catch platelets. In type 2A, the chains are too short and the net has holes.',
      ],
    },
    3: {
      level: 3,
      summary: 'VWD diagnosis requires distinguishing types through VWF activity:antigen ratio, multimer analysis, and specialized assays to guide type-specific treatment.',
      explanation: `## Overview

VWD is the most common inherited bleeding disorder, affecting up to 1% of the population with clinically significant disease in ~1/1000.

## Pathophysiology

**VWF Structure:**
- Large multimeric glycoprotein
- Synthesized in endothelium and megakaryocytes
- Stored in Weibel-Palade bodies and alpha granules
- HMW multimers most hemostatically active

**VWF Functions:**
1. Platelet adhesion via GPIb
2. Platelet aggregation (bridge)
3. Factor VIII carrier (increases half-life 5-fold)

## Diagnosis

**Initial Labs:**
- VWF:Ag (quantitative)
- VWF:RCo or VWF:GPIbM (activity)
- Factor VIII level
- CBC (check platelets for 2B)

**Interpretation:**

| Type | VWF:Ag | VWF:Act | Ratio | FVIII |
|------|--------|---------|-------|-------|
| 1 | Low | Low | Normal | Low/Normal |
| 2A | Low/Normal | Very low | <0.6 | Low/Normal |
| 2B | Low | Low | <0.6 | Low/Normal |
| 2M | Low/Normal | Low | <0.6 | Normal |
| 2N | Normal | Normal | Normal | Very low |
| 3 | Absent | Absent | - | Very low |

**Confirmatory Tests:**
- Multimer analysis (type 2A vs 2M)
- RIPA (ristocetin-induced platelet aggregation) - enhanced in 2B
- VWF:FVIIIB (type 2N)
- Genetic testing

## Treatment by Type

**Type 1:**
- DDAVP first line (0.3 mcg/kg IV/SQ)
- Trial to confirm response
- VWF concentrates if poor response
- Tachyphylaxis with repeated dosing

**Type 2A:**
- DDAVP may partially effective
- VWF concentrates often needed

**Type 2B:**
- DDAVP contraindicated (worsens thrombocytopenia)
- VWF concentrates only

**Type 2M:**
- DDAVP trial
- VWF concentrates if inadequate

**Type 2N:**
- VWF concentrates (must contain FVIII)
- DDAVP inadequate (releases VWF but does not fix binding)

**Type 3:**
- VWF concentrates only
- May need prophylaxis for severe cases

## Specific Products

**VWF Concentrates:**
- Humate-P (plasma-derived VWF/FVIII)
- Alphanate (plasma-derived)
- Wilate (plasma-derived, high purity)
- Vonvendi (recombinant VWF)

**Adjunctive Therapy:**
- Tranexamic acid for mucosal bleeding
- Aminocaproic acid alternative
- Topical thrombin/fibrin sealants

## Special Scenarios

**Menorrhagia:**
- Combined oral contraceptives
- Progestin-containing IUD
- Tranexamic acid during menses
- DDAVP intranasal

**Pregnancy:**
- VWF rises in pregnancy (may normalize in type 1)
- Monitor levels during pregnancy
- Regional anesthesia: VWF and FVIII >50%
- Postpartum bleeding risk (VWF falls after delivery)`,
      keyTerms: [
        { term: 'VWF:GPIbM', definition: 'Modern VWF activity assay using recombinant GPIb mutant; replacing ristocetin-based assays' },
        { term: 'Weibel-Palade bodies', definition: 'Endothelial storage granules containing VWF' },
        { term: 'RIPA', definition: 'Ristocetin-induced platelet aggregation; enhanced at low dose in type 2B' },
        { term: 'tachyphylaxis', definition: 'Diminishing response with repeated DDAVP dosing due to storage pool depletion' },
      ],
      clinicalNotes: 'Blood type affects VWF levels; type O has ~25% lower VWF. Always interpret VWF levels in context of blood type. Repeat testing if initial results borderline.',
    },
    4: {
      level: 4,
      summary: 'VWD management requires understanding VWF biology, type-specific treatment selection, and special considerations for procedures and pregnancy.',
      explanation: `## VWF Biology

**Gene and Structure:**
- VWF gene: Chromosome 12 (178 kb)
- Pseudogene on chromosome 22 complicates sequencing
- Mature VWF: 2050 amino acids
- Forms dimers then multimers

**Biosynthesis:**
- Propeptide cleaved (VWFpp)
- Multimers formed in Golgi
- HMW multimers most active
- ADAMTS13 cleaves UL-VWF on endothelium

**Functional Domains:**
- D assemblies: Multimerization, FVIII binding (D-D3)
- A1: GPIb binding
- A2: ADAMTS13 cleavage site
- A3: Collagen binding
- C domains: RGD for platelet GPIIb/IIIa

## Type 2 Variants - Detailed

**2A - Loss of HMW Multimers:**
- Group 1: Defective synthesis
- Group 2: Increased proteolysis
- Absent HMW on gel
- GI bleeding common (angiodysplasia)

**2B - Gain of Function:**
- Increased GPIb affinity
- Spontaneous binding depletes HMW and platelets
- Thrombocytopenia (variable)
- Enhanced RIPA at low-dose ristocetin
- Differential: Platelet-type (pseudo) VWD

**2M - Qualitative Dysfunction:**
- Decreased GPIb binding despite normal multimers
- Or decreased collagen binding (2M-CB)
- Multimers normal on gel

**2N - FVIII Binding Defect:**
- Mimics mild hemophilia A
- AR inheritance (unlike hemophilia)
- Normal VWF levels, very low FVIII
- VWF:FVIIIB assay diagnostic

## Acquired VWD

**Causes:**
- Lymphoproliferative disorders
- Myeloproliferative disorders
- MGUS/myeloma
- Aortic stenosis (Heyde syndrome)
- Hypothyroidism
- Autoimmune

**Mechanisms:**
- Antibodies (neutralizing or clearing)
- Adsorption to tumor cells
- Proteolysis under shear stress

**Treatment:**
- Treat underlying condition
- VWF concentrates
- IVIG (if antibodies)
- Aortic valve replacement for Heyde syndrome

## Procedure Management

**Risk Assessment:**
- Bleeding score (BAT)
- Baseline VWF/FVIII levels
- Prior bleeding history

**Target Levels:**
| Procedure | VWF:RCo | FVIII | Duration |
|-----------|---------|-------|----------|
| Minor | >30% | >30% | 1-3 days |
| Major | >50% | >50% | 5-10 days |
| CNS | >100% | >100% | 7-14 days |

**DDAVP Protocol:**
- Test dose before procedure
- 0.3 mcg/kg IV over 30 min
- Measure response at 1 hour
- Good responder: 2-4x increase

**VWF Concentrate Dosing:**
- 40-80 VWF:RCo units/kg
- Half-life ~12 hours
- Check levels to guide dosing`,
      keyTerms: [
        { term: 'ADAMTS13', definition: 'Metalloprotease that cleaves VWF; regulates multimer size' },
        { term: 'Heyde syndrome', definition: 'Acquired VWD from aortic stenosis with GI bleeding from angiodysplasia' },
        { term: 'VWFpp', definition: 'VWF propeptide; ratio to VWF:Ag indicates VWF clearance vs synthesis issue' },
        { term: 'platelet-type VWD', definition: 'Similar to 2B but defect in platelet GPIb, not VWF' },
      ],
      clinicalNotes: 'Heyde syndrome (AS + GI bleeding) suggests acquired VWD. VWF:Ag normalizes after valve replacement. Distinguish 2B from platelet-type by mixing patient plasma with normal platelets.',
    },
    5: {
      level: 5,
      summary: 'Contemporary VWD management integrates genetic diagnosis, personalized product selection, and emerging therapies while optimizing outcomes for surgery and pregnancy.',
      explanation: `## Precision Diagnosis

**Genetic Testing:**
- Confirms diagnosis in unclear cases
- Identifies type 2 variants
- Prenatal diagnosis for type 3
- Challenges: Pseudogene, large gene

**Advanced Assays:**
- VWF:GPIbM (recombinant, more reliable)
- VWF:CB (collagen binding - identifies 2M-CB)
- VWFpp/VWF:Ag ratio (clearance assessment)
- ADAMTS13 activity (exclude TTP)

## Treatment Advances

**Recombinant VWF (Vonvendi):**
- No FVIII included
- May combine with rFVIII if needed
- Reduces FVIII accumulation with repeated dosing
- Approved for on-demand and prophylaxis

**VWF Gene Therapy:**
- Investigational
- Challenges: Large gene, complex processing
- Early clinical trials

**Emerging Approaches:**
- DDAVP alternatives (longer-acting)
- Subcutaneous VWF
- Gene editing

## Menorrhagia Management

**Assessment:**
- Pictorial blood assessment chart (PBAC)
- Ferritin/CBC
- Endometrial evaluation if indicated

**Treatment Options:**
| Intervention | Efficacy | Considerations |
|--------------|----------|----------------|
| Tranexamic acid | Good | During menses only |
| DDAVP nasal | Moderate | For type 1 responders |
| Combined OCP | Good | Continuous for HMB |
| LNG-IUD | Excellent | Long-term option |
| VWF concentrates | Excellent | Reserve for severe |
| Endometrial ablation | Good | If family complete |

## Pregnancy Management

**VWF Changes:**
- Levels rise throughout pregnancy
- Type 1 may normalize by 3rd trimester
- Types 2 and 3 less responsive

**Monitoring:**
- Check VWF/FVIII at 28-32 weeks
- Repeat at 36-38 weeks
- Plan based on levels

**Delivery:**
- Regional anesthesia: VWF:RCo and FVIII >50%
- If levels inadequate: VWF concentrate
- DDAVP: Category B, minimal transfer

**Postpartum:**
- VWF drops within 48 hours
- Delayed PPH risk (days 7-21)
- Extended tranexamic acid or VWF coverage

## Special Populations

**Pediatrics:**
- Diagnosis challenging (levels variable)
- Family history important
- DDAVP safe >2 years (fluid restrict)
- Prophylaxis rare (mostly type 3)

**Elderly:**
- VWF rises with age
- Type 1 may improve
- Acquired VWD more common

**Surgery:**
- Individualized planning
- Loading dose then maintenance
- Monitor VWF and FVIII levels
- Watch for tachyphylaxis with DDAVP

## Outcomes and Quality

**Bleeding Assessment Tools:**
- ISTH BAT standardizes assessment
- Abnormal score: >4 males, >6 females
- Useful for diagnosis and monitoring

**Quality of Life:**
- VWD impacts daily activities
- Menorrhagia significantly affects women
- HTC comprehensive care improves outcomes

**Research Priorities:**
- Gene therapy
- Long-acting VWF
- Improved diagnostics
- Patient-reported outcomes`,
      keyTerms: [
        { term: 'PBAC', definition: 'Pictorial blood assessment chart; quantifies menstrual blood loss' },
        { term: 'ISTH BAT', definition: 'Bleeding assessment tool standardized by ISTH for diagnosis' },
        { term: 'Vonvendi', definition: 'Recombinant VWF (vonicog alfa); contains no FVIII' },
        { term: 'LNG-IUD', definition: 'Levonorgestrel intrauterine device; effective for menorrhagia' },
      ],
      clinicalNotes: `**Board Pearls:**
- VWD is most common inherited bleeding disorder
- VWF carries FVIII (protects from degradation) and mediates platelet adhesion
- Type 1 = quantitative (75%), types 2 = qualitative variants
- Type 2B: DDAVP contraindicated (worsens thrombocytopenia)
- Type 2N: Mimics hemophilia A but autosomal recessive
- Type 3: Absent VWF, very low FVIII, most severe bleeding
- DDAVP releases stored VWF; tachyphylaxis limits repeated use
- Blood type O associated with lower VWF levels
- Acquired VWD: Consider MGUS, AS (Heyde), MPN`,
    },
  },

  media: [
    {
      id: 'vwf-multimer',
      type: 'diagram',
      filename: 'vwf-multimer-analysis.svg',
      title: 'VWF Multimer Analysis',
      description: 'Gel showing normal vs type 2A patterns',
    },
  ],

  citations: [
    {
      id: 'leebeek-eikenboom-2016',
      type: 'article',
      title: 'von Willebrand disease',
      authors: ['Leebeek FWG', 'Eikenboom JCJ'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMra1601561',
    },
  ],

  crossReferences: [
    { targetId: 'condition-hemophilia', targetType: 'condition', relationship: 'related', label: 'Hemophilia' },
    { targetId: 'process-platelet-adhesion', targetType: 'pathway', relationship: 'related', label: 'Platelet Adhesion' },
  ],

  tags: {
    systems: ['hematologic'],
    topics: ['bleeding disorder', 'coagulation', 'hematology'],
    keywords: ['von Willebrand', 'VWF', 'DDAVP', 'menorrhagia'],
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

export default vonWillebrandDisease;
