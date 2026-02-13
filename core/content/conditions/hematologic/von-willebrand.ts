/**
 * Von Willebrand Disease - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const vonWillebrand: EducationalContent = {
  id: 'condition-von-willebrand-disease',
  type: 'condition',
  name: 'Von Willebrand Disease',
  nameEs: 'Enfermedad de Von Willebrand',
  alternateNames: ['VWD', 'von Willebrand Disorder', 'VWD'],
  hpoId: 'HP:0001892',

  levels: {
    1: {
      level: 1,
      summary: 'Von Willebrand disease is an inherited bleeding disorder where your blood does not clot properly, causing easy bruising, nosebleeds, and heavy menstrual periods.',
      explanation: `Von Willebrand disease (VWD) is the most common inherited bleeding disorder. It happens when you are missing or have a problem with a protein called von Willebrand factor, which helps your blood clot.

**What von Willebrand factor does:**
- Helps platelets stick together to form a clot
- Carries and protects factor VIII (another clotting protein)
- Without enough VWF, clots do not form properly

**Common symptoms:**
- Easy bruising
- Frequent or prolonged nosebleeds
- Heavy menstrual periods
- Bleeding gums
- Excessive bleeding after injury or surgery
- Blood in stool or urine (rare)

**Types:**
- Type 1: Low levels of VWF (most common, mild)
- Type 2: Abnormal VWF that does not work properly
- Type 3: Almost no VWF (severe)

**Who gets it:**
- Inherited from parents (autosomal, so affects both males and females)
- Type 1 and 2: Usually one affected parent
- Type 3: Both parents affected or carriers

**Treatment:**
- Desmopressin (DDAVP): Medicine that helps release stored VWF
- VWF replacement: Concentrate containing VWF
- Antifibrinolytics: Medications that help clots last longer
- Hormonal treatments for heavy periods

**Living with VWD:**
- Avoid aspirin and NSAIDs
- Medical alert bracelet
- Tell doctors and dentists before procedures
- Special care during pregnancy and childbirth`,
      keyTerms: [
        { term: 'von Willebrand factor', definition: 'Protein that helps blood clot by making platelets stick together' },
        { term: 'platelets', definition: 'Small blood cells that form clugs to stop bleeding' },
        { term: 'desmopressin', definition: 'Medicine that helps the body release stored von Willebrand factor' },
      ],
      analogies: ['Von Willebrand factor is like glue that helps platelets stick together at the site of injury—without enough glue, the clot falls apart.'],
      examples: ['A woman who has heavy menstrual periods needing to change pads hourly and frequent nosebleeds may have von Willebrand disease.'],
    },
    2: {
      level: 2,
      summary: 'VWD is an inherited bleeding disorder caused by deficiency or dysfunction of von Willebrand factor, characterized by mucocutaneous bleeding and classified into types 1 (quantitative), 2 (qualitative), and 3 (severe quantitative).',
      explanation: `## Overview

Most common inherited bleeding disorder (affects ~1% of population)
- Autosomal inheritance (affects males and females equally)
- Caused by VWF deficiency or dysfunction
- Clinical spectrum from mild to severe

## Clinical Features

**Mucocutaneous Bleeding:**
- Easy bruising
- Epistaxis (nosebleeds)
- Menorrhagia (heavy menstrual bleeding)
- Gingival bleeding
- GI bleeding (less common)

**Bleeding Assessment Tool (BAT):**
- Scores bleeding symptoms
- Helps distinguish normal from abnormal
- Guides diagnosis

## Classification

**Type 1 (80% of cases):**
- Quantitative VWF deficiency
- Partial reduction
- Usually mild bleeding
- Autosomal dominant

**Type 2 (15% of cases):**
- Qualitative VWF defect
- Normal levels but dysfunctional
- Subtypes: 2A, 2B, 2M, 2N
- Variable bleeding severity

**Type 3 (rare, <5%):**
- Severe quantitative deficiency
- Nearly absent VWF
- Severe bleeding similar to hemophilia
- Autosomal recessive

## Laboratory Diagnosis

**Initial Screening:**
- CBC, PT/INR: Usually normal
- aPTT: May be prolonged (low factor VIII)
- Bleeding time: Prolonged (rarely done now)

**VWF Testing:**

| Test | What it Measures |
|------|------------------|
| VWF antigen | Amount of VWF protein |
| VWF activity (ristocetin) | VWF platelet-binding function |
| Factor VIII level | Coagulation factor |

**Interpretation:**

| Type | VWF:Ag | VWF Activity | FVIII |
|------|--------|--------------|-------|
| Type 1 | Low | Low | Low/N |
| Type 2A | N/Low | Low | Low/N |
| Type 2B | Low | Low | Low |
| Type 2M | Normal | Low | Normal |
| Type 2N | Normal | Normal | Low |
| Type 3 | Very low | Very low | Very low |

## Treatment

**Desmopressin (DDAVP):**
- Releases stored VWF from endothelial cells
- Effective for Type 1 and some Type 2
- Dose: 0.3 mcg/kg IV or SC
- Max dose: 20 mcg
- Effect lasts 6-12 hours
- Can use nasal spray (Stimate)

**VWF-Containing Concentrates:**
- Humate-P, Wilate, Vonvendi
- For Type 3, Type 2B, or DDAVP non-responders
- Contains both VWF and FVIII
- Expensive

**Antifibrinolytics:**
- Tranexamic acid
- Aminocaproic acid
- Adjunct for mucosal bleeding
- Do NOT use with hematuria

**Hormonal:**
- Oral contraceptives for menorrhagia
- Levonorgestrel IUD

## Contraindications

**Avoid:**
- Aspirin and NSAIDs
- Blood thinners
- Intramuscular injections when possible`,
      keyTerms: [
        { term: 'VWF antigen', definition: 'Laboratory test measuring the amount of von Willebrand factor protein' },
        { term: 'ristocetin', definition: 'Antibiotic used in laboratory tests to measure VWF activity' },
        { term: 'DDAVP', definition: 'Desmopressin; synthetic hormone that releases stored VWF from endothelial cells' },
        { term: 'menorrhagia', definition: 'Heavy or prolonged menstrual bleeding' },
      ],
      clinicalNotes: 'DDAVP can cause hyponatremia and fluid retention. Monitor sodium levels, especially with repeated dosing. Fluid restriction is important. Avoid in children <2 due to seizure risk.',
    },
    3: {
      level: 3,
      summary: 'VWD encompasses quantitative deficiency (type 1), qualitative defects (type 2 with subtypes 2A, 2B, 2M, 2N), and severe deficiency (type 3); diagnosis requires VWF antigen, activity, and factor VIII testing, with treatment tailored to type and bleeding severity.',
      explanation: `## VWF Structure and Function

**Multimer Structure:**
- VWF circulates as multimers
- Larger multimers = more hemostatic activity
- Multimer size determines function

**Three Main Functions:**
1. Platelet adhesion: Binds GPIb on platelets
2. Platelet aggregation: Bridges platelets via GPIIb/IIIa
3. FVIII carrier: Protects FVIII from degradation

**Synthesis and Storage:**
- Produced by endothelial cells and megakaryocytes
- Stored in Weibel-Palade bodies (endothelial)
- Released with endothelial stimulation

## Type 2 Subtypes

**Type 2A:**
- Defective multimer assembly
- Loss of large multimers
- Decreased platelet binding
- Autosomal dominant

**Type 2B:**
- Gain of function: INCREASED platelet binding
- Binds platelets spontaneously
- Consumes large multimers
- Thrombocytopenia common
- Ristocetin activity INCREASED
- Mutations: GPIb binding domain (exon 28)

**Type 2M:**
- Defective platelet binding without loss of multimers
- Normal multimer distribution
- Decreased ristocetin activity

**Type 2N:**
- Defective FVIII binding
- Decreased FVIII half-life
- Mimics hemophilia A
- Recessive inheritance

## Diagnostic Approach

**When to Test:**
- Personal bleeding history (BAT score >3 in adult males, >5 in females)
- Family history of bleeding
- Abnormal screening labs
- Preoperative evaluation with bleeding history

**Laboratory Evaluation:**

| Test | Type 1 | Type 2A | Type 2B | Type 2M | Type 2N | Type 3 |
|------|--------|---------|---------|---------|---------|--------|
| VWF:Ag | Low | Low/N | Low | Normal | Normal | Very Low |
| VWF:RCo | Low | Low | Low | Low | Normal/N | Very Low |
| FVIII:C | Low/N | Low/N | Low | Normal | Low | Very Low |
| Multimers | Normal | Abn | Abn | Normal | Normal | Absent |
| Ristocetin | N | Decr | INCR | Decr | Normal | None |

**Special Tests:**
- VWF collagen binding (2M)
- VWF FVIII binding assay (2N)
- Ristocetin-induced platelet aggregation (2B)
- Multimer analysis (specialized lab)

## Treatment by Type

**Type 1:**
- First-line: DDAVP (most patients)
- Check response with trial dose
- VWF concentrate if DDAVP fails
- Antifibrinolytics adjunct

**Type 2A, 2M:**
- DDAVP: Variable response
- Many need VWF concentrates
- Type-specific testing guides therapy

**Type 2B:**
- DDAVP generally AVOIDED
- Can worsen thrombocytopenia
- VWF concentrates preferred
- Avoid platelet transfusions

**Type 2N:**
- May respond to DDAVP
- Often needs VWF concentrates
- FVIII levels determine treatment

**Type 3:**
- DDAVP ineffective (no stores)
- VWF concentrates required
- Treat like hemophilia

## DDAVP Details

**Mechanism:**
- Stimulates VWF release from endothelial stores
- Also increases FVIII
- Transient effect (6-12 hours)

**Dosing:**
- IV/SC: 0.3 mcg/kg (max 20-24 mcg)
- Intranasal (Stimate): 150 mcg/spray (one each nostril)
- Max: 300 mcg/dose

**Response Monitoring:**
- Check VWF and FVIII at 1 hour
- Good response: 3-5x baseline
- Tachyphylaxis with repeated use

**Side Effects:**
- Facial flushing
- Headache
- Fluid retention, hyponatremia
- Tachycardia

**Contraindications:**
- Age <2 years (seizure risk)
- Type 2B VWD
- Uncontrolled hypertension
- Heart failure

## VWF Concentrates

**Available Products:**

| Product | VWF:FVIII Ratio | Virus Inactivated |
|---------|-----------------|-------------------|
| Humate-P | 2.4:1 | Yes |
| Wilate | 1:1 | Yes |
| Vonvendi | Recombinant | Yes |
| Fiblogamma | Variable | Yes |

**Dosing:**
- 40-60 IU/kg VWF:RCo
- Repeat every 12-24 hours
- Monitor levels for major procedures

## Antifibrinolytics

**Tranexamic Acid:**
- 10-15 mg/kg q6-8h (oral/IV)
- Mucosal bleeding adjunct
- Menorrhagia
- Do NOT use with hematuria

**Aminocaproic Acid:**
- 50 mg/kg q6h
- Similar indications
- Less expensive

**Contraindications:**
- Active thrombosis
- DIC with fibrinolysis`,
      keyTerms: [
        { term: 'multimers', definition: 'Large complexes of VWF protein; larger multimers have more hemostatic activity' },
        { term: 'Weibel-Palade bodies', definition: 'Storage granules in endothelial cells that contain VWF' },
        { term: 'VWF:RCo', definition: 'Von Willebrand factor ristocetin cofactor activity; measures platelet-binding function' },
        { term: 'tachyphylaxis', definition: 'Decreased response with repeated dosing; occurs with DDAVP use' },
      ],
      clinicalNotes: 'Always perform a trial DDAVP challenge before relying on it for a procedure. Check VWF:Ag and VWF:RCo at baseline and 1 hour post-dose. A good response is 3-5x increase. Type 2B VWD is unique in that DDAVP is generally contraindicated because it can worsen thrombocytopenia.',
    },
    4: {
      level: 4,
      summary: 'Comprehensive VWD management addresses type-specific diagnosis, VWF half-life considerations, pregnancy, surgical prophylaxis, combination therapy, distinguishing acquired von Willebrand syndrome, and management of refractory bleeding.',
      explanation: `## Advanced Diagnostic Considerations

**VWF Propeptide (VWFpp):**
- Released stoichiometrically with VWF
- Shorter half-life than VWF
- VWFpp:VWF Ag ratio distinguishes:
  - Increased clearance: High ratio
  - Decreased synthesis: Low ratio
- Guides therapy (clearance vs production issues)

**VWF Collagen Binding (VWF:CB):**
- Assays VWF binding to collagen
- Multimer size dependent
- VWF:CB:VWF:Ag ratio <0.6 suggests loss of large multimers
- Useful for 2A, 2M subtyping

**Ristocetin-Induced Platelet Aggregation (RIPA):**
- Low-dose ristocetin for 2B
- Increased aggregation at low dose = 2B
- Normal VWF, increased RIPA confirms 2B

## Pregnancy Considerations

**Physiologic Changes:**
- VWF and FVIII increase 2-3x in pregnancy
- Peak in third trimester
- Many Type 1 patients normalize
- Returns to baseline postpartum

**Type-Specific Management:**

| Type | Pregnancy | Delivery | Postpartum |
|------|-----------|----------|------------|
| Type 1 | Often improves | Usually no treatment | Bleeding risk high (2-3 weeks) |
| Type 2 | Variable | Individualize | Treatment often needed |
| Type 3 | Treatment needed | VWF concentrate | Continued treatment |

**Postpartum Hemorrhage Risk:**
- Highest risk: First 2-3 weeks
- VWF levels drop rapidly after delivery
- Continue prophylaxis for 2-3 weeks
- Tranexamic acid adjunct

**Breastfeeding:**
- VWF concentrates compatible
- DDAVP compatible (monitor sodium)

## Surgical Prophylaxis

**Minor Procedures (Dental, etc.):**
- Tranexamic acid mouthwash (dental)
- Oral tranexamic acid
- DDAVP if responsive

**Major Surgery:**
- Target VWF:RCo >50-100 IU/dL
- Preoperative: 40-60 IU/kg VWF concentrate
- Postoperative: Daily for 5-7 days
- Monitor levels

**DDAVP for Surgery:**
- 0.3 mcg/kg 30 min pre-op
- Repeat q12-24h (max 2-3 doses)
- Monitor sodium

## Acquired von Willebrand Syndrome

**Causes:**
- Lymphoproliferative disorders (MGUS, WM)
- Cardiovascular (AS, VAD, LVAD)
- Myeloproliferative neoplasms
- Autoimmune (SLE, APS)
- Drugs (valproic acid, ciprofloxacin)

**Mechanisms:**
- Antibody inhibition
- Adsorption to malignant cells
- Mechanical destruction (shear stress)
- Decreased synthesis

**Diagnosis:**
- Adult with new bleeding
- No family history
- Underlying condition present
- VWF testing similar to inherited

**Treatment:**
- Treat underlying disease
- VWF concentrates
- IVIG (antibody-mediated)
- DDAVP often ineffective

## Refractory Bleeding

**DDAVP Failure:**
- Tachyphylaxis with repeated doses
- Consider VWF concentrates
- Check for Type 2B or platelet-type VWD

**VWF Concentrate Failure:**
- Inhibitors (rare in VWD)
- Check inhibitor assay
- Consider recombinant FVIIa
- High-dose VWF concentrate

**Combination Therapy:**
- VWF concentrate + tranexamic acid
- Avoid tranexamic acid with urinary bleeding

## Special Populations

**Pediatrics:**
- Age-adjusted normal values
- BAT scores higher in children
- DDAVP avoid <2 years
- Vaccination without prophylaxis if mild

**Elderly:**
- Increased thrombotic risk with VWF concentrate
- Individualize treatment
- Consider DDAVP cautiously

**Thrombophilia:**
- VWD + thrombophilia: Challenging
- Balance bleeding/clotting risks
- May accept lower VWF targets`,
      keyTerms: [
        { term: 'VWFpp', definition: 'Von Willebrand propeptide; released with VWF and helps distinguish clearance vs synthesis defects' },
        { term: 'acquired von Willebrand syndrome', definition: 'Acquired VWF deficiency from lymphoproliferative disorders, cardiovascular disease, or drugs' },
        { term: 'platelet-type VWD', definition: 'Gain-of-function platelet GPIb mutation mimicking Type 2B VWD' },
      ],
      clinicalNotes: 'In pregnancy, Type 1 VWD often improves significantly due to physiologic VWF increase. However, postpartum bleeding risk is high as VWF levels drop rapidly after delivery. Continue prophylaxis for 2-3 weeks postpartum. Acquired VWS is increasingly recognized in patients with aortic stenosis or LVAD—consider screening if bleeding.',
    },
    5: {
      level: 5,
      summary: 'Precision VWD care integrates novel diagnostics including VWF propeptide and genetic testing, type-specific therapy with extended half-life products, management of inhibitors and acquired forms, and personalized surgical planning based on pharmacokinetic profiling.',
      explanation: `## Advanced Diagnostics

**VWF Propeptide Utility:**

| VWFpp:Ag Ratio | Interpretation |
|----------------|----------------|
| >2.0 | Increased clearance |
| 1.5-2.0 | Borderline |
| <1.5 | Normal/decreased synthesis |

**Clinical Applications:**
- Distinguishes Type 1 variants
- Identifies rapid clearance patients
- Guides DDAVP vs concentrate use
- Monitors treatment response

**Genetic Testing:**

**VWF Gene Testing:**
- 52 exons, large gene
- NGS panels available
- Helpful for:
  - Type 2 subtyping
  - Type 3: Confirm diagnosis, prenatal testing
  - Family screening
  - Predicting phenotype

**Genotype-Phenotype Correlations:**
- Exon 28: Types 2A, 2B, 2M
- Exon 18-20: Type 2N
- Null alleles: Severe Type 1, Type 3
- Missense: Variable

**Bleeding Assessment Tool Evolution:**

**Pediatric BAT:**
- Age-specific norms
- Higher scores normal in children
- Helps distinguish true bleeding

**MCMDM-1 VWD Bleeding Questionnaire:**
- Validated in adults
- Incorporates family history
- Bleeding severity score
- Predicts VWD diagnosis

## Extended Half-Life Products

**Recombinant VWF (Vonvendi):**
- First recombinant VWF
- No plasma-derived
- FVIII-free formulation
- Longer half-life than some plasma products
- More expensive

**Pharmacokinetic-Guided Dosing:**
- Individual PK profiling
- Bayesian dose prediction
- Target-specific levels
- Reduces product consumption

**Advantages:**
- Reduced frequency
- Better perioperative control
- Cost-effective long-term

## Inhibitors in VWD

**Epidemiology:**
- Rare (<10% of Type 3)
- Less common than hemophilia inhibitors
- More common in Type 3 with null mutations

**Diagnosis:**
- Failure to respond to VWF concentrate
- Decreased VWF recovery
- Bethesda-type assay for VWF inhibitors

**Management:**

| Option | Indication |
|--------|------------|
| High-dose VWF | Low-titer inhibitors |
| Recombinant FVIIa | High-titer inhibitors |
| Immune tolerance | Persistent inhibitors |
| Rituximab | Refractory cases |

## Platelet-Type VWD

**Pathophysiology:**
- Gain-of-function GPIb mutation
- NOT a VWF defect
- Mimics Type 2B
- Autosomal dominant

**Diagnostic Clues:**
- Normal VWF genetic testing
- Ristocetin-induced platelet aggregation shows:
  - Patient platelets: Hyperresponsive
  - Normal platelets: Normal response to patient plasma
- Flow cytometry for GPIb mutations

**Treatment:**
- DDAVP generally AVOIDED
- VWF concentrates may work
- Platelet transfusions can help

## Novel Therapeutics

**Gene Therapy:**
- Preclinical stage
- Challenges: Large VWF gene
- Liver-directed approaches
- Future potential for Type 3

**RNA Therapies:**
- siRNA approaches
- Theoretical for Type 2B

**Subcutaneous Products:**
- In development
- Home prophylaxis potential

## Surgical Precision

**PK-Guided Dosing:**
- Preoperative PK assessment
- Calculate dose to achieve target
- Maintain trough >50% for major surgery
- Individualized half-life

**Point-of-Care Monitoring:**
- VWF:RCo POC devices
- Rapid turnaround
- Intraoperative decisions
- Not yet widely available

## Pregnancy Precision

**Individualized Care:**
- Baseline VWF in each trimester
- Predict postpartum drop
- Target >50 IU/dL for delivery
- Continue 2-3 weeks postpartum

**Type 3 Pregnancy:**
- High-risk management
- VWF concentrates throughout
- Schedule induction/C-section
- Anesthesia planning

**Fetal Considerations:**
- VWD does NOT affect fetal bleeding
- Neonatal bleeding risk if Type 3
- Monitor infant scalp, circumcision

## Quality of Life

**Menorrhagia Management:**
- Levonorgestrel IUD: First-line
- Tranexamic acid: Adjunct
- Combined oral contraceptives
- DDAVP: Limited role
- VWF concentrate: Severe cases

**Physical Activity:**
- Encourage normal activity
- Avoid contact sports if severe
- Prophylaxis for high-risk activities
- Joint bleeds rare (unlike hemophilia)

## Global Considerations

**Resource-Limited Settings:**
- DDAVP primary therapy
- Tranexamic acid widely available
- Creative resource allocation
- Telemedicine for follow-up

**VWD Registries:**
- International registries
- Phenotype-genotype correlations
- Treatment outcomes
- Rare variant characterization`,
      keyTerms: [
        { term: 'VWF propeptide', definition: 'Cleaved during VWF processing; ratio to mature VWF distinguishes clearance from synthesis defects' },
        { term: 'MCMDM-1 VWD', definition: 'Multicenter study on molecular and clinical markers for Type 1 VWD; validated bleeding questionnaire' },
        { term: 'Bayesian PK', definition: 'Statistical method using limited pharmacokinetic data to predict individual dosing needs' },
        { term: 'inhibitor', definition: 'Antibody against VWF that neutralizes its effect; rare complication of VWF concentrate therapy' },
      ],
      clinicalNotes: 'VWF propeptide testing is increasingly available and helps distinguish VWF clearance defects from production defects, guiding therapy selection. Recombinant VWF (Vonvendi) represents the first plasma-free option, important for patients with concerns about plasma-derived products. In Type 3 VWD, screen for inhibitors if bleeding response is inadequate to VWF concentrate.',
    },
  },

  media: [],
  citations: [
    { id: 'ash-vwd-2021', type: 'article', title: 'ASH Guidelines for von Willebrand Disease', source: 'Blood Advances' },
    { id: 'nhf-vwd', type: 'article', title: 'Guidelines for the Management of von Willebrand Disease', source: 'Haemophilia' },
  ],
  crossReferences: [
    { targetId: 'condition-hemophilia', targetType: 'condition', relationship: 'related', label: 'Hemophilia' },
    { targetId: 'condition-platelet-disorders', targetType: 'condition', relationship: 'related', label: 'Platelet Disorders' },
  ],
  tags: { systems: ['hematologic'], topics: ['hematology', 'coagulation'], keywords: ['von Willebrand', 'VWD', 'DDAVP', 'desmopressin', 'bleeding disorder', 'menorrhagia'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'pediatrics'] } },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default vonWillebrand;
