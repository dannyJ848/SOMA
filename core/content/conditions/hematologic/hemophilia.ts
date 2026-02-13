/**
 * Hemophilia A and B - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const hemophilia: EducationalContent = {
  id: 'condition-hemophilia',
  type: 'condition',
  name: 'Hemophilia A and B',
  nameEs: 'Hemofilia A y B',
  alternateNames: ['Factor VIII Deficiency', 'Factor IX Deficiency', 'Classic Hemophilia', 'Christmas Disease'],
  hpoId: 'HP:0001375',

  levels: {
    1: {
      level: 1,
      summary: 'Hemophilia is an inherited bleeding disorder where blood does not clot properly, causing prolonged bleeding, easy bruising, and joint problems.',
      explanation: `Hemophilia is a genetic condition that prevents blood from clotting properly. People with hemophilia are missing or have low levels of certain clotting proteins (factors) that help stop bleeding.

**Types of hemophilia:**
- Hemophilia A: Missing factor VIII (8) - most common
- Hemophilia B: Missing factor IX (9) - less common

**What causes it:**
- Inherited from parents (gene on X chromosome)
- Mainly affects males
- Females can be carriers

**Symptoms:**
- Easy bruising
- Prolonged bleeding from cuts
- Nosebleeds that are hard to stop
- Bleeding gums
- Blood in urine or stool
- Joint pain and swelling
- Heavy bleeding after injury or surgery

**Severity:**
- Mild: Some factor present, bleeding only with injury or surgery
- Moderate: Some factor present, bleeding with minor injury
- Severe: Almost no factor, spontaneous bleeding

**Common bleeding sites:**
- Joints (knees, ankles, elbows)
- Muscles
- Mouth and gums
- Nose

**Treatment:**
- Factor replacement (replacing the missing factor)
- Medicines that help clots form
- Physical therapy for joint problems
- Avoid certain medications (aspirin, blood thinners)

**Prevention:**
- Regular factor replacement (prophylaxis)
- Avoid activities with high injury risk
- Wear medical alert identification`,
      keyTerms: [
        { term: 'factor VIII', definition: 'Clotting protein missing in hemophilia A; needed for blood to clot properly' },
        { term: 'factor IX', definition: 'Clotting protein missing in hemophilia B; needed for blood to clot properly' },
        { term: 'prophylaxis', definition: 'Regular treatment to prevent bleeding episodes before they happen' },
      ],
      analogies: ['Clotting factors are like tools in a toolbox—hemophilia is like missing a wrench. You can try to fix things without it, but it does not work properly.'],
      examples: ['A boy with hemophilia who develops a swollen, painful knee after a minor fall may have bleeding into the joint.'],
    },
    2: {
      level: 2,
      summary: 'Hemophilia A and B are X-linked recessive bleeding disorders caused by factor VIII or IX deficiency, classified by factor level (severe <1%, moderate 1-5%, mild >5-40%), with spontaneous bleeding in severe disease including hemarthroses and muscle hematomas.',
      explanation: `## Overview

| Feature | Hemophilia A | Hemophilia B |
|---------|--------------|--------------|
| Deficiency | Factor VIII | Factor IX |
| Gene | F8 on Xq28 | F9 on Xq27.1 |
| Inheritance | X-linked recessive | X-linked recessive |
| Frequency | 1:5000 males | 1:30,000 males |

**Inheritance:**
- Affects mainly males
- Females are usually carriers
- 30% are de novo mutations

## Classification by Factor Level

| Severity | Factor Level | Bleeding Pattern |
|----------|--------------|-----------------|
| Severe | <1% (<0.01 IU/mL) | Spontaneous bleeds |
| Moderate | 1-5% (0.01-0.05 IU/mL) | Bleeds with mild trauma |
| Mild | >5-40% | Bleeds with surgery/trauma |

## Clinical Presentation

**Hemarthrosis (Joint Bleeding):**
- Most common manifestation in severe disease
- Knees, ankles, elbows most affected
- Acute: Pain, swelling, warmth, limited range
- Chronic: Arthropathy, contractures

**Muscle Hematomas:**
- Common in calves, thighs, buttocks
- Can cause compartment syndrome
- Nerve compression possible

**Other Bleeding:**
- Easy bruising
- Prolonged bleeding from minor cuts
- Epistaxis
- Oral bleeding
- GI bleeding (rare)
- Intracranial hemorrhage (rare but serious)

## Laboratory Diagnosis

**Screening Tests:**
- Prolonged aPTT
- Normal PT/INR
- Normal platelet count
- Normal thrombin time
- Normal bleeding time

**Specific Assays:**
- Factor VIII activity (Hemophilia A)
- Factor IX activity (Hemophilia B)
- Bethesda assay for inhibitors

**Differentiation:**
- Mixing study: aPTT corrects with factor deficiency
- Does not correct with inhibitor present

## Treatment Overview

**Factor Replacement:**

| Product | Hemophilia | Half-life |
|---------|------------|-----------|
| Plasma-derived FVIII | A | 8-12 hours |
| Recombinant FVIII | A | 8-12 hours |
| Extended half-life FVIII | A | 14-19 hours |
| Plasma-derived FIX | B | 18-24 hours |
| Recombinant FIX | B | 18-24 hours |
| Extended half-life FIX | B | 40-100 hours |

**Treatment Approaches:**
- On-demand: Treat bleeds as they occur
- Prophylaxis: Regular factor to prevent bleeds
- Perioperative: Cover surgery

**Dosing:**
- FVIII: 1 IU/kg raises level 2%
- FIX: 1 IU/kg raises level 1%
- Target: 50-100% for bleeds, >80% for surgery`,
      keyTerms: [
        { term: 'hemarthrosis', definition: 'Bleeding into a joint space; characteristic of severe hemophilia' },
        { term: 'aPTT', definition: 'Activated partial thromboplastin time; prolonged in hemophilia' },
        { term: 'inhibitor', definition: 'Antibody against factor VIII or IX that makes replacement less effective' },
        { term: 'prophylaxis', definition: 'Regular factor replacement to prevent bleeding episodes' },
      ],
      clinicalNotes: 'Intracranial hemorrhage is a leading cause of death in hemophilia. Any head injury requires immediate factor replacement and imaging. Prophylaxis, started early, prevents joint damage and is the standard of care for severe hemophilia.',
    },
    3: {
      level: 3,
      summary: 'Hemophilia pathogenesis involves X-linked recessive mutations causing FVIII or FIX deficiency with impaired thrombin generation; treatment includes prophylactic factor replacement, management of acute bleeds, recognition of hemarthropathy, and inhibitor development with Bethesda testing.',
      explanation: `## Pathophysiology

**Coagulation Cascade:**
- FVIII and FIX are intrinsic pathway factors
- Activated FX (tenase complex): FVIIIa + FIXa
- Critical for thrombin burst
- Deficiency: Poor fibrin clot formation

**Joint Damage Pathogenesis:**

**Acute Hemarthrosis:**
- Blood in joint space
- Inflammatory mediators released
- Iron deposition
- Synovial hypertrophy
- Cartilage damage

**Chronic Hemarthropathy:**
- Repeated bleeds
- Synovial inflammation
- Cartilage loss
- Subchondral bone cysts
- Joint destruction

**Target Joints:**
- Repeated bleeding in same joint
- Synovium becomes inflamed and hypervascular
- Vicious cycle of bleeding → damage → more bleeding

## Inhibitor Development

**Risk Factors:**
- Severe hemophilia (factor level <1%)
- Family history of inhibitors
- Large F8 gene deletions
- Intensive factor exposure (first 20-50 days)
- Age <3 years at first exposure

**Pathogenesis:**
- Factor protein recognized as foreign
- IgG antibodies (IgG4 mainly)
- Neutralize factor activity
- More common in Hemophilia A (30%) than B (3-5%)

**Bethesda Assay:**
- Measures inhibitor titer
- 1 Bethesda unit = neutralizes 50% factor in 2 hours
- Low titer: <5 BU
- High titer: ≥5 BU

**Management:**

| Titer | Approach |
|-------|----------|
| Low (<5 BU) | High-dose factor |
| High (≥5 BU) | Bypassing agents |

**Bypassing Agents:**
- Activated prothrombin complex concentrate (aPCC, FEIBA)
- Recombinant factor VIIa (NovoSeven)
- Used for bleeding in inhibitor patients

## Treatment Strategies

**Prophylaxis:**

**Standard:**
- FVIII: 25-40 IU/kg 3x/week
- FIX: 40-50 IU/kg 2x/week
- Maintains trough >1-3%

**Extended Half-Life:**
- Less frequent dosing possible
- FVIII EHL: 2x/week
- FIX EHL: Weekly or less

**PK-Guided:**
- Individual half-life
- Tailored dosing
- May reduce factor consumption

**Acute Bleed Management:**
- Treat early (within 2 hours)
- Target: 50-100% factor level
- Repeat doses based on half-life
- RICE (rest, ice, compression, elevation)
- Physical therapy after bleed

**Surgical Prophylaxis:**
- Preoperative: 50-100% factor level
- Maintain >50% for 5-7 days
- Higher for major surgery
- Monitor levels

## Joint Assessment

**Physical Exam:**
- Gilbert score: Joint physical exam
- Range of motion
- Swelling, crepitus
- Pain score

**Imaging:**
- X-ray: Arthropathy, space narrowing
- Ultrasound: Synovitis, acute bleed
- MRI: Early cartilage damage, synovitis

**HJHS (Hemophilia Joint Health Score):**
- Standardized joint assessment
- Used in clinical trials
- Tracks progression

## Carrier Testing

**Females:**
- 50% carrier risk if father affected
- 50% risk of passing gene
- May have low factor levels (30-70%)

**Testing:**
- Factor level testing
- Genetic testing for known mutation
- Prenatal testing available

**Symptomatic Carriers:**
- May have bleeding symptoms
- Menorrhagia
- Surgery requires factor coverage

## Gene Therapy

**Hemophilia A:**
- Valoctocogene roxaparvovec (val-rox)
- AAV5 vector
- Single infusion
- FVIII levels 20-40% achieved
- Durable (3+ years)

**Hemophilia B:**
- Etanacogene dezaparvovec (etranacogene dezaparvovec)
- AAV5 vector
- FIX levels ~30%
- Durable response

**Considerations:**
- Exclude pre-existing AAV antibodies
- Liver enzyme elevations common
- Steroids may be needed
- Not for pediatric patients (<18)
- Long-term effects unknown`,
      keyTerms: [
        { term: 'target joint', definition: 'Joint with repeated bleeding leading to chronic synovitis and increased risk of future bleeds' },
        { term: 'tenase complex', definition: 'Enzyme complex of FVIIIa and FIXa that activates factor X; impaired in hemophilia' },
        { term: 'AAV vector', definition: 'Adeno-associated virus vector used to deliver gene therapy for hemophilia' },
        { term: 'hemarthropathy', definition: 'Chronic joint disease from repeated hemarthrosis causing cartilage damage and arthritis' },
      ],
      clinicalNotes: 'Prophylaxis initiated before age 3 and before significant joint damage develops produces the best outcomes. PK-guided prophylaxis may reduce factor consumption while maintaining protection. Gene therapy is now FDA-approved for both Hemophilia A (val-rox) and B (etranacogene dezaparvovec), offering potential freedom from regular factor infusions.',
    },
    4: {
      level: 4,
      summary: 'Advanced hemophilia care incorporates immune tolerance induction for inhibitors, extended half-life factor products, individualized PK-guided prophylaxis, comprehensive joint management, non-factor therapies, and consideration of gene therapy eligibility.',
      explanation: `## Immune Tolerance Induction (ITI)

**Indications:**
- High-titer inhibitors
- Failed immune tolerance
- Goal: Eliminate inhibitor, restore tolerance

**Regimens:**

| Regimen | Protocol | Success Rate |
|---------|----------|--------------|
| Bonn | High-dose daily FVIII | 70-80% |
| Malmo | High-dose + immunosuppression | 70-80% |
| Low-dose | 25-50 IU/kg 3x/week | 40-70% |
| International | 50 IU/kg daily | 60-70% |

**Predictors of Success:**
- Historical peak titer <200 BU
- Current titer <10 BU
- Peak titer achieved >100 days after start
- Good venous access
- Younger age

**Duration:**
- Continue until negative titer + recovery
- Average: 1-3 years
- Some patients never achieve tolerance

**Failed ITI Options:**
- Continued prophylaxis with bypassing agents
- Emicizumab (Hemophilia A with inhibitors)
- Consider rituximab (limited data)

## Extended Half-Life Products

**FVIII EHL Options:**

| Product | Modification | Half-life | Dosing |
|---------|--------------|-----------|--------|
| Elocta/AFSTYLA | Fc fusion | 19 hours | Twice weekly |
| Adynovate | PEGylated | 14 hours | 2-3x/week |
| Esperoct | PEGylated | 19 hours | Twice weekly |
| Jivi | PEGylated | 19 hours | 2x/week |

**FIX EHL Options:**

| Product | Half-life | Dosing |
|---------|-----------|--------|
| Alprolix (rFIXFc) | 70-100 hours | Weekly |
| Idelvion (rFIX-FP) | 100 hours | Every 10-14 days |
| Rebinyn (glycoPEGylated) | 100 hours | Weekly |

**Clinical Considerations:**
- Individual PK varies widely
- May still need standard frequency
- Higher cost
- Not all patients benefit equally

## Non-Factor Therapies

**Emicizumab (Hemlibra):**

**Mechanism:**
- Bispecific monoclonal antibody
- Bridges FIXa and FX
- Mimics FVIII cofactor function
- Subcutaneous administration

**Indications:**
- Hemophilia A with inhibitors
- Hemophilia A without inhibitors (FDA expanded)

**Dosing:**
- Loading: 3 mg/kg weekly × 4 weeks
- Maintenance: 1.5 mg/kg weekly, 3 mg/kg q2weeks, or 6 mg/kg q4weeks
- Subcutaneous

**Benefits:**
- No intravenous access needed
- Protection from bleeds
- Improved QoL

**Considerations:**
- Cannot measure aPTT
- Do not use aPCC (FEIBA) >100 U/kg/24h (thrombosis risk)
- Requires breakthrough bleeding plan

**Fitusiran (Hemophilia A/B):**
- siRNA against antithrombin
- Phase 3 data positive
- Subcutaneous monthly
- Investigational

**Concizumab:**
- Anti-TFPI monoclonal antibody
- Subcutaneous daily
- Investigational

## Joint Health Management

**Comprehensive Approach:**

**Prevention:**
- Early prophylaxis (before joint damage)
- Physical activity modification
- Proper warm-up techniques

**Acute Hemarthrosis:**
- Immediate factor replacement
- Rest, ice, compression, elevation
- Avoid aspiration unless severe
- Physical therapy after resolution

**Chronic Arthropathy:**
- Physical therapy
- Pain management
- Orthopedic intervention
- Joint replacement when indicated

**Synovectomy:**
- Radioactive synovectomy (P32, Y90)
- Arthroscopic synovectomy
- Reduces recurrent bleeding

**Orthopedic Surgery:**
- Total joint replacement
- Requires specialized hemophilia team
- Factor coverage critical
- High success rates

## Gene Therapy Details

**Eligibility:**
- Severe hemophilia (factor <1%)
- Adults (≥18 for most trials)
- No advanced liver disease
- No significant joint disease (some trials)
- Negative AAV antibodies

**Contraindications:**
- Active hepatitis
- HIV uncontrolled
- Advanced fibrosis/cirrhosis
- Pre-existing AAV antibodies

**Expected Outcomes:**

| Therapy | Expected Level | Bleeding Reduction |
|---------|----------------|-------------------|
| Hemophilia A (val-rox) | 20-40% | >90% |
| Hemophilia B (etran) | 30-40% | >90% |

**Monitoring:**
- Factor levels
- Liver enzymes
- AAV vector DNA
- Ultrasound for liver

**Long-Term Unknowns:**
- Durability beyond 5-8 years
- Late effects
- Need for retreatment
- Pediatric use

## Special Populations

**Pediatrics:**
- Prophylaxis before joint damage
- Port-a-cath often needed
- Parents trained for home infusions
- Gene therapy not yet approved

**Elderly:**
- Comorbidities increase bleeding risk
- Afib, cardiovascular disease
- Balance anticoagulation needs
- Individualize factor targets

**Hepatitis C/HIV:**
- Many older patients infected from plasma products
- Screen and treat liver disease
- Consider in treatment decisions

**Pregnancy:**
- Carrier females may need factor
- Avoid epidural if low factor
- Genetic counseling

## Inhibitor Monitoring

**When to Test:**
- At diagnosis
- Every 5-10 exposure days (first 50)
- Before surgery
- When bleeding response is inadequate

**Testing Method:**
- Bethesda assay or Nijmegen modification
- Report in Bethesda units
- Distinguish low vs high titer`,
      keyTerms: [
        { term: 'ITI', definition: 'Immune tolerance induction; regular factor exposure to eliminate inhibitors' },
        { term: 'emicizumab', definition: 'Bispecific monoclonal antibody mimicking factor VIII; subcutaneous prophylaxis for hemophilia A' },
        { term: 'Fc fusion', definition: 'Protein engineering technique fusing factor to Fc portion of IgG to extend half-life' },
        { term: 'radioactive synovectomy', definition: 'Injection of radioactive isotope into joint to reduce synovial inflammation' },
      ],
      clinicalNotes: 'Emicizumab has revolutionized care for hemophilia A patients with inhibitors, offering subcutaneous protection and reducing bleed rates by >90%. When using emicizumab, be aware that aPTT cannot be used to monitor hemostasis. Avoid high-dose aPCC (>100 U/kg/24h) due to thrombotic risk—use rFVIIa for breakthrough bleeding instead.',
    },
    5: {
      level: 5,
      summary: 'Contemporary hemophilia management integrates gene therapy, extended half-life products, non-factor therapies, PK-guided prophylaxis, individualized inhibitor eradication, and comprehensive musculoskeletal care with evolving paradigms for gene editing and novel bypassing agents.',
      explanation: `## Gene Therapy Advances

**Long-Term Data (5-8 years):**

**Hemophilia A (val-rox):**
- Durable expression in most patients
- Some decline over time
- 70-80% maintain >5% FVIII
- Predictable kinetics by dose

**Hemophilia B (etranacogene):**
- More stable than A
- Mean FIX ~35% at 3 years
- Very durable responses

**Retreatment Considerations:**
- AAV immunity prevents readministration
- Novel capsids in development
- Liver-directed lipid nanoparticles
- CRISPR-based editing (future)

**Combination Approaches:**
- Gene therapy + emicizumab?
- Gene editing vs addition
- Neonatal administration (preclinical)

## Extended Half-Life Evolution

**Next-Generation Products:**

**FVIII:**
- Single-chain FVIII (rFVIIIFc)
- PEGylation variants
- Albumin fusion
- Fc mutations (increased FcRn binding)

**FIX:**
- FIX-Fc (Alprolix)
- FIX-albumin fusion (Idelvion)
- GlycoPEGylated (Rebinyn)
- Recombinant pegylated (Refixia)

**Individualized PK:**
- Population PK modeling
- Bayesian dose prediction
- Reduced clinic visits
- Cost-effectiveness analysis

## Novel Non-Factor Therapies

**Fitusiran (RNAi):**
- Targets antithrombin (AT)
- Monthly subcutaneous
- Increases thrombin generation
- Works in both A and B
- Phase 3 positive
- Concerns: DVT, requires monitoring

**Concizumab (Anti-TFPI):**
- Subcutaneous daily or weekly
- Phase 3 ongoing
- TFPI blockade
- May combine with other therapies

**Marstacimab (Anti-TFPI):**
- Subcutaneous weekly
- Phase 3 data positive
- Convenient dosing

**Darpin (Molecular Tweezers):**
- Novel protein scaffolds
- Bypass FVIII
- Early development

## Inhibitor Management

**Prevention:**
- Avoid intensive early exposure
- Consider immune tolerance protocols at first exposure
- Regulatory T-cell approaches (preclinical)
- Tolerogenic factor variants (theoretical)

**ITI Optimization:**
- Immune tolerance protocols standardized
- Combining with rituximab?
- Adding sirolimus?
- Treg expansion strategies

**Bypassing Agent Evolution:**
- NovoSeven: Established
- FEIBA: Established
- Sevenfact (recombinant FVIIa): New option
- eptacog beta (activated)

**Emicizumab Era:**
- Reduces bleed rates by >90%
- Intracranial hemorrhage protection
- Not complete hemostasis
- Requires breakthrough plan

## Precision Medicine

**PK-Guided Dosing:**
- MyPKFiT (Hemophilia A)
- myPKFIT (Hemophilia B)
- Web-based calculators
- Reduced factor consumption
- Individualized intervals

**Phenotype-Genotype Correlations:**
- Intron 22 inversion: 45% of severe A
- Nonsense mutations: Higher inhibitor risk
- Large deletions: High inhibitor risk
- Missense: Variable

**Bleeding Phenotype Prediction:**
- Factor level alone insufficient
- Other modifiers: TFPI, thrombin generation
- Global hemostasis assays
- Personalizing prophylaxis intensity

## Musculoskeletal Advances

**Imaging Biomarkers:**
- Ultrasound: Synovitis detection
- MRI: Cartilage assessment
- PET: Inflammation monitoring
- Portable ultrasound for home assessment

**Orthopedic Outcomes:**
- Joint replacement: Excellent results
- Lifespan: Joint replacements may need revision
- Minimally invasive approaches
- Computer navigation

**Prehabilitation:**
- Pre-surgical optimization
- Physical therapy
- Factor optimization
- Reduces complications

## Comprehensive Care Model

**Multidisciplinary Team:**
- Hematologist
- Orthopedist
- Physical therapist
- Social worker
- Psychologist
- Nurse coordinator
- Dentist

**Transition of Care:**
- Pediatric to adult
- Improving outcomes
- Structured programs
- Patient empowerment

**Quality Metrics:**
- Annual bleed rate (ABR)
- Joint health score
- School/work attendance
- QoL measures
- Patient-reported outcomes

## Future Directions

**Gene Editing:**
- CRISPR/Cas9 approaches
- Base editing
- Prime editing
- In vivo editing

**Universal Access:**
- Reducing cost of gene therapy
- Global health considerations
- Manufacturing innovations
- Biosimilars for factor products

**Women with Hemophilia:**
- Underrecognized population
- Symptomatic carriers
- Menorrhagia management
- Pregnancy considerations
- Genetic counseling

**Digital Health:**
- Infusion tracking apps
- Bleed diaries
- Telemedicine
- Wearable activity monitoring
- PK prediction tools`,
      keyTerms: [
        { term: 'AAV capsid', definition: 'Viral protein shell; different serotypes used to evade pre-existing immunity in gene therapy' },
        { term: 'intron 22 inversion', definition: 'Common F8 gene mutation causing severe hemophilia A; involves inversion of intron 22' },
        { term: 'population PK', definition: 'Pharmacokinetic modeling using population data to predict individual dosing needs' },
        { term: 'Treg', definition: 'Regulatory T-cell; type of T-cell that suppresses immune response; potential target for tolerance induction' },
      ],
      clinicalNotes: 'Gene therapy has transformed hemophilia care, offering potential freedom from regular infusions. Current products achieve 20-40% factor levels, converting severe hemophilia to a mild phenotype. Long-term durability beyond 5-8 years remains to be seen, and readministration is limited by AAV immunity. Next-generation approaches using novel capsids, lipid nanoparticles, or gene editing may overcome these limitations.',
    },
  },

  media: [],
  citations: [
    { id: 'ash-hemophilia-2021', type: 'article', title: 'ASH Guidelines for Management of Hemophilia', source: 'Blood Advances' },
    { id: 'wfH-guidelines', type: 'article', title: 'World Federation of Hemophilia Guidelines', source: 'Haemophilia' },
  ],
  crossReferences: [
    { targetId: 'condition-von-willebrand-disease', targetType: 'condition', relationship: 'related', label: 'von Willebrand Disease' },
    { targetId: 'condition-itp', targetType: 'condition', relationship: 'related', label: 'ITP' },
  ],
  tags: { systems: ['hematologic'], topics: ['hematology', 'coagulation', 'genetics'], keywords: ['hemophilia', 'factor VIII', 'factor IX', 'inhibitors', 'gene therapy', 'emicizumab', 'hemarthrosis'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'pediatrics'] } },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default hemophilia;
