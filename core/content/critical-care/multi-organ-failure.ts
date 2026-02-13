/**
 * Multi-Organ Failure - Educational Content
 *
 * Comprehensive guide to understanding multi-organ dysfunction syndrome (MODS),
 * causes, recognition, and management approaches.
 */

import { EducationalContent } from '../types';

export const multiOrganFailure: EducationalContent = {
  id: 'critical-care-multi-organ-failure',
  type: 'concept',
  name: 'Multi-Organ Failure',
  alternateNames: ['MODS', 'Multi-Organ Dysfunction Syndrome', 'Multiple Organ Failure', 'Sequential Organ Failure'],

  levels: {
    1: {
      level: 1,
      summary: 'Multi-organ failure happens when two or more organs in the body stop working well at the same time, usually because of a serious illness or injury.',
      explanation: `## What is Multi-Organ Failure?

Our bodies have many organs that work together, like a team. The heart pumps blood, the lungs bring in oxygen, the kidneys clean the blood, and the liver processes nutrients and removes toxins.

Multi-organ failure (also called MODS) happens when two or more of these organs start failing at the same time. This usually happens when the body is very sick or injured.

## Why Does This Happen?

When something seriously harms the body, it can set off a chain reaction:

**Common causes:**
- Severe infections (sepsis)
- Major injuries from accidents
- Severe burns
- Big surgeries with complications
- Heart attacks or strokes
- Severe bleeding

**How it spreads:**
1. One organ gets damaged (like the lungs)
2. This stresses other organs
3. The body's defense system can go into overdrive
4. This causes inflammation everywhere
5. Other organs start having trouble

## Which Organs Are Affected?

The organs that most commonly fail include:

- **Lungs**: Trouble breathing, need a ventilator
- **Kidneys**: Cannot filter blood, may need dialysis
- **Heart**: Cannot pump strongly enough, low blood pressure
- **Liver**: Cannot process toxins, turns yellow (jaundice)
- **Brain**: Confusion, unconsciousness
- **Blood clotting**: Too much bleeding or clots forming

## How Serious Is It?

Multi-organ failure is very serious. The more organs that fail, and the more severe the failure, the harder it is to recover.

**Positive signs:**
- Organs starting to work better
- Less support needed from machines
- Blood tests improving
- Patient more alert

**Concerning signs:**
- More organs failing
- Needing more medications and machines
- Blood tests getting worse

## Treatment

There is no single medicine that fixes all organs. Instead, doctors:

1. **Find and treat the cause** (like antibiotics for infection)
2. **Support each failing organ:**
   - Ventilator for lungs
   - Dialysis for kidneys
   - Medications for heart
   - Fluids and blood products
3. **Prevent complications:**
   - Blood clots
   - Infections from hospital
   - Skin breakdown
4. **Provide nutrition** when the patient cannot eat
5. **Give time for organs to heal**

## Recovery

Recovery from multi-organ failure takes time:
- Some patients recover completely
- Some have lasting effects
- The process can take weeks or months
- Rehabilitation is often needed`,
      keyTerms: [
        { term: 'multi-organ failure', definition: 'When two or more organs in the body stop working properly at the same time' },
        { term: 'organ', definition: 'A body part that does a specific important job, like the heart, lungs, kidneys, or liver' },
        { term: 'dialysis', definition: 'A machine that cleans the blood when the kidneys cannot do their job' },
        { term: 'ventilator', definition: 'A breathing machine that helps the lungs when they are not working well' },
      ],
      analogies: [
        'The body is like a factory with different departments. If the power plant (heart) has problems, other departments cannot work. If the waste department (kidneys) fails, garbage builds up everywhere.',
        'Organs are like dominoes - when one falls, it can knock down others nearby.',
        'Treating multi-organ failure is like being a juggler with many balls - doctors have to keep supporting each organ while trying to fix the original problem.',
      ],
      examples: [
        'An elderly man gets pneumonia that turns into sepsis. First his lungs fail and he needs a ventilator. Then his kidneys stop making urine and he needs dialysis. His heart needs medication to keep blood pressure up.',
        'After a severe car accident with major bleeding, a young woman is treated in the ICU. Her body becomes inflamed, and over the next few days, her lungs, kidneys, and clotting system all start having problems.',
      ],
    },

    2: {
      level: 2,
      summary: 'Multi-Organ Dysfunction Syndrome (MODS) occurs when dysfunction in two or more organ systems develops progressively, often following a severe insult such as sepsis, trauma, or major surgery. Management focuses on organ support while treating the underlying cause.',
      explanation: `## Understanding Multi-Organ Dysfunction Syndrome

MODS (also called MOF - Multi-Organ Failure) is when two or more organ systems fail to maintain normal function, requiring intervention to support life.

### The Body's Response

When the body faces a major insult (infection, injury, surgery), it triggers:

1. **Inflammatory Response**: Body releases chemicals to fight the problem
2. **Systemic Inflammation**: When these chemicals spread throughout the body
3. **Organ Damage**: Inflammation damages blood vessels and tissues everywhere
4. **Organ Dysfunction**: Organs cannot do their jobs
5. **Cascade Effect**: Failing organs stress other organs

## Common Causes

| Primary Cause | How It Leads to MODS |
|---------------|---------------------|
| Sepsis | Infection causes whole-body inflammation |
| Trauma | Major tissue damage triggers inflammation |
| Pancreatitis | Pancreas enzymes leak and cause damage |
| Major surgery | Surgical stress + complications |
| Burns | Massive inflammation + infection risk |
| Shock | Organs damaged from poor blood flow |

## Organ Systems Affected

### Respiratory System (Lungs)
- **What fails**: Gas exchange
- **Signs**: Low oxygen levels, rapid breathing
- **Support**: Oxygen, ventilator
- **Term**: ARDS (Acute Respiratory Distress Syndrome)

### Cardiovascular System (Heart/Blood Vessels)
- **What fails**: Blood pressure, cardiac output
- **Signs**: Low BP, fast heart rate, cold extremities
- **Support**: Fluids, vasopressors, inotropes
- **Term**: Circulatory failure/shock

### Renal System (Kidneys)
- **What fails**: Filtering blood, making urine
- **Signs**: No urine, rising creatinine
- **Support**: Dialysis (CRRT)
- **Term**: Acute Kidney Injury (AKI)

### Hepatic System (Liver)
- **What fails**: Processing toxins, making proteins
- **Signs**: Jaundice, bleeding, confusion
- **Support**: Supportive care
- **Term**: Acute liver failure

### Neurological System (Brain)
- **What fails**: Consciousness, thinking
- **Signs**: Confusion, coma
- **Support**: Treat underlying cause
- **Term**: Encephalopathy

### Hematologic System (Blood)
- **What fails**: Clotting balance
- **Signs**: Bleeding, clots forming
- **Support**: Blood products
- **Term**: DIC (Disseminated Intravascular Coagulation)

## Measuring Organ Dysfunction

### SOFA Score (Sequential Organ Failure Assessment)
Measures dysfunction in 6 systems (0-4 points each, max 24):

| System | What's Measured |
|--------|-----------------|
| Respiratory | PaO2/FiO2 ratio |
| Cardiovascular | Blood pressure, vasopressor need |
| Renal | Creatinine, urine output |
| Hepatic | Bilirubin |
| Neurological | Glasgow Coma Scale |
| Coagulation | Platelets |

**Interpretation**:
- Higher score = more organ dysfunction
- Increasing score = worsening condition
- Score helps predict survival

## Treatment Principles

### 1. Treat the Underlying Cause
- Antibiotics for sepsis
- Surgery for perforated bowel
- Control bleeding
- Drain abscesses

### 2. Support Failing Organs
Each organ gets specific support while healing

### 3. Prevent Complications
- Blood clots (DVT prophylaxis)
- Infections (sterile technique)
- Stress ulcers (acid suppression)
- Skin breakdown (turning, pressure relief)
- Weakness (early mobility when possible)

### 4. Provide Nutrition
- Early enteral nutrition preferred
- Parenteral if gut not working

### 5. Monitor Closely
- Vital signs continuously
- Laboratory tests regularly
- Daily assessment of each organ`,
      keyTerms: [
        { term: 'MODS', definition: 'Multi-Organ Dysfunction Syndrome - progressive failure of multiple organ systems' },
        { term: 'SOFA score', definition: 'Sequential Organ Failure Assessment - scoring system that measures organ dysfunction severity' },
        { term: 'ARDS', definition: 'Acute Respiratory Distress Syndrome - severe lung failure from inflammation' },
        { term: 'DIC', definition: 'Disseminated Intravascular Coagulation - abnormal clotting throughout the body' },
        { term: 'vasopressor', definition: 'Medication that raises blood pressure by tightening blood vessels' },
        { term: 'CRRT', definition: 'Continuous Renal Replacement Therapy - slow, continuous dialysis for kidney failure in ICU' },
      ],
      analogies: [
        'SOFA score is like a report card for the body\'s organs - each organ gets a grade, and the total score shows how sick the patient is.',
        'The inflammatory cascade in MODS is like a fire alarm that sets off all the sprinklers in the building - designed to help, but causes damage when it goes everywhere.',
      ],
      clinicalNotes: 'Rising SOFA score indicates worsening organ dysfunction and higher mortality risk. Early source control and organ support are the cornerstones of treatment. No specific therapy reverses MODS - support organs while treating the cause.',
    },

    3: {
      level: 3,
      summary: 'MODS represents a continuum of organ dysfunction driven by inflammatory and immune dysregulation. SOFA scoring quantifies severity, while management centers on source control, organ-specific support, and prevention of secondary insults.',
      explanation: `## Pathophysiology of MODS

### Two-Hit Hypothesis

**First Hit:**
- Initial insult (sepsis, trauma, surgery, pancreatitis)
- Activates inflammatory response
- Primes immune system

**Second Hit:**
- Secondary insult (nosocomial infection, transfusion, repeat surgery)
- Amplified inflammatory response
- Progression to MODS

### Inflammatory Mediators

**Pro-inflammatory:**
- TNF-alpha, IL-1, IL-6
- Complement activation (C3a, C5a)
- Reactive oxygen species
- Nitric oxide

**Anti-inflammatory (later):**
- IL-10, IL-4
- TGF-beta
- Leads to immunosuppression

### Endothelial Dysfunction

Central to MODS pathophysiology:
- Glycocalyx degradation
- Increased permeability (capillary leak)
- Loss of vasomotor tone
- Microvascular thrombosis
- Tissue hypoperfusion

### Mitochondrial Dysfunction

- Cytopathic hypoxia
- Impaired oxidative phosphorylation
- Tissue cannot utilize delivered oxygen
- ATP depletion

## SOFA Score in Detail

| System | 0 | 1 | 2 | 3 | 4 |
|--------|---|---|---|---|---|
| Resp (P/F) | ≥400 | <400 | <300 | <200 with vent | <100 with vent |
| Coag (Plts K) | ≥150 | <150 | <100 | <50 | <20 |
| Liver (Bili) | <1.2 | 1.2-1.9 | 2.0-5.9 | 6.0-11.9 | >12 |
| CV | MAP ≥70 | MAP <70 | Dopa ≤5 | Dopa >5, Epi/Norepi ≤0.1 | >0.1 |
| CNS (GCS) | 15 | 13-14 | 10-12 | 6-9 | <6 |
| Renal (Cr) | <1.2 | 1.2-1.9 | 2.0-3.4 | 3.5-4.9 | >5.0 |

### SOFA Score Interpretation

- Initial SOFA: Baseline severity
- Delta SOFA: Change over time
- Maximum SOFA: Worst during ICU stay
- Mean SOFA: Average burden

**Mortality Correlation:**
- SOFA 0-6: ~10%
- SOFA 7-9: ~15-20%
- SOFA 10-12: ~40-50%
- SOFA >12: ~80-95%

## Organ-Specific Management

### Respiratory Failure (ARDS)

**Diagnosis:**
- Acute onset
- Bilateral infiltrates
- P/F ratio <300
- Not cardiogenic

**Management:**
- Lung-protective ventilation (6 mL/kg IBW)
- Plateau pressure ≤30 cmH2O
- PEEP titration
- Prone positioning if P/F <150
- Neuromuscular blockade in severe cases

### Acute Kidney Injury

**KDIGO Classification:**
| Stage | Creatinine | Urine Output |
|-------|------------|--------------|
| 1 | 1.5-1.9x or ≥0.3 rise | <0.5 mL/kg/h x 6-12h |
| 2 | 2.0-2.9x baseline | <0.5 mL/kg/h x ≥12h |
| 3 | ≥3x or ≥4.0 or RRT | <0.3 mL/kg/h x ≥24h or anuria ≥12h |

**Management:**
- Avoid nephrotoxins
- Optimize hemodynamics
- CRRT vs IHD
- Timing of RRT initiation (STARRT-AKI, AKIKI)

### Cardiovascular Dysfunction

**Manifestations:**
- Hypotension despite fluids
- Elevated lactate
- Myocardial depression (septic cardiomyopathy)

**Management:**
- Fluid resuscitation (assess responsiveness)
- Norepinephrine first-line
- Add vasopressin if needed
- Inotropes (dobutamine) for myocardial dysfunction
- Hydrocortisone for refractory shock

### Hepatic Dysfunction

**Manifestations:**
- Hyperbilirubinemia
- Coagulopathy
- Hypoglycemia
- Hepatic encephalopathy

**Management:**
- Treat underlying cause
- Supportive care
- Lactulose for encephalopathy
- Vitamin K, FFP for bleeding

### Hematologic (DIC)

**Pathophysiology:**
- Systemic activation of coagulation
- Consumption of clotting factors and platelets
- Fibrinolysis
- Microvascular thrombosis + bleeding

**Management:**
- Treat underlying cause
- Platelets if <10K or bleeding
- FFP/cryoprecipitate if bleeding
- Avoid heparin usually (unless thrombosis predominates)

## Supportive Care Bundle

### ICU Liberation (ABCDEF Bundle)
- **A**ssess pain
- **B**oth SAT and SBT
- **C**hoice of sedation
- **D**elirium assessment
- **E**arly mobility
- **F**amily engagement

### Nutrition
- Early enteral nutrition (within 48h)
- Trophic vs full feeds (EDEN trial - no difference)
- Avoid overfeeding

### VTE Prophylaxis
- LMWH or UFH unless contraindicated
- Mechanical prophylaxis

### Stress Ulcer Prophylaxis
- PPI or H2 blocker
- Consider risk/benefit (pneumonia risk)

### Glucose Control
- Target 140-180 mg/dL
- Avoid hypoglycemia`,
      keyTerms: [
        { term: 'two-hit hypothesis', definition: 'Theory that MODS develops from initial insult followed by secondary event amplifying the inflammatory response' },
        { term: 'cytopathic hypoxia', definition: 'Cellular inability to use oxygen despite adequate delivery due to mitochondrial dysfunction' },
        { term: 'glycocalyx', definition: 'Protective layer lining blood vessels; damaged in MODS leading to capillary leak' },
        { term: 'KDIGO', definition: 'Kidney Disease: Improving Global Outcomes - classification system for acute kidney injury' },
        { term: 'delta SOFA', definition: 'Change in SOFA score over time; used to track disease trajectory' },
      ],
      clinicalNotes: 'Rising SOFA by 2+ points from baseline defines sepsis. ARDS management focuses on lung protection. STARRT-AKI showed no benefit to early RRT initiation. ABCDEF bundle implementation reduces delirium, ventilator days, and mortality.',
    },

    4: {
      level: 4,
      summary: 'Advanced MODS management integrates understanding of systemic inflammatory response, precision organ support strategies, evidence-based ICU care bundles, and prognostic assessment while addressing heterogeneity in patient trajectories.',
      explanation: `## Advanced Pathophysiology

### Immune Dysregulation Paradigm

**Traditional View:** Uncontrolled hyperinflammation

**Current Understanding:**
- Early hyperinflammation AND concurrent immunosuppression
- Balance determines outcome
- Individual variability in response

**Biomarkers of Immune Status:**
- HLA-DR expression on monocytes (low = immunoparalysis)
- Lymphocyte counts (lymphopenia = worse outcomes)
- Cytokine profiles (IL-6, IL-10)

### Endothelial Activation and Glycocalyx

**Glycocalyx Degradation:**
- Syndecan-1, heparan sulfate released
- Can measure as biomarkers
- Contributes to capillary leak and edema

**Endothelial Activation Markers:**
- Angiopoietin-2 (destabilizing)
- sTie2
- VCAM, ICAM

### Microbiome Disruption

- ICU patients develop dysbiosis rapidly
- Loss of beneficial bacteria
- Overgrowth of pathogenic species
- Contributes to secondary infections and inflammation

## Organ Crosstalk

### Lung-Kidney Axis
- ARDS leads to AKI through hypoxia, inflammation
- AKI leads to pulmonary edema, cytokine accumulation
- Mechanical ventilation affects renal blood flow

### Gut-Liver-Immune Axis
- Gut barrier dysfunction
- Bacterial translocation
- Hepatic clearance impairment
- Immune priming

### Brain-Organ Communication
- Encephalopathy affects autonomic function
- Sympathetic overactivation
- Inflammation crosses blood-brain barrier

## Precision Organ Support

### Advanced Hemodynamic Monitoring

**Fluid Responsiveness:**
- Pulse pressure variation (PPV >13%)
- Stroke volume variation (SVV >10%)
- Passive leg raise (PLR >10% CO change)

**Cardiac Function:**
- Echocardiography: EF, diastolic function
- PA catheter when needed: CO, SVR, PCWP
- Septic cardiomyopathy: Reversible LV dysfunction

**Tissue Perfusion:**
- Lactate trends (more important than single values)
- Central venous-arterial CO2 gap
- Capillary refill time
- Mottling score

### Renal Replacement Therapy

**Timing:**
| Trial | Result |
|-------|--------|
| AKIKI (2016) | No benefit to early RRT |
| IDEAL-ICU (2018) | No benefit to early RRT in septic shock |
| STARRT-AKI (2020) | No benefit to early RRT |

**Current Approach:**
- Start for urgent indications (hyperkalemia, acidosis, volume overload)
- May delay in stable patients

**CRRT vs IHD:**
- CRRT preferred in hemodynamic instability
- No mortality difference in stable patients (ATN trial)

### Mechanical Ventilation Optimization

**Driving Pressure:**
- Pplat - PEEP
- Target <15 cmH2O
- Better mortality predictor than VT alone

**PEEP Optimization:**
- Multiple strategies (ARDSNet tables, best compliance, EIT, esophageal pressure)
- No single method clearly superior

**Rescue Therapies:**
- Prone positioning (PROSEVA: NNT 6 for severe ARDS)
- Neuromuscular blockade (controversial: ACURASYS vs ROSE)
- ECMO (EOLIA: possible benefit in severe refractory ARDS)

## Evidence-Based ICU Bundles

### Updated Sepsis Bundle

**Hour-1 Elements:**
- Lactate measurement
- Blood cultures
- Broad-spectrum antibiotics
- Crystalloid 30 mL/kg for hypotension/lactate ≥4
- Vasopressors for MAP <65 despite fluids

### VAP Prevention Bundle

- HOB elevation ≥30 degrees
- Oral care with chlorhexidine
- Subglottic secretion drainage
- Sedation vacations and SBT
- Peptic ulcer prophylaxis
- DVT prophylaxis

### ABCDEF Bundle Implementation

**A - Assess, prevent, manage pain:**
- Pain scales (CPOT, BPS)
- Analgesia-first sedation

**B - Both SAT and SBT:**
- Daily coordination
- Reduces ventilator days

**C - Choice of sedation:**
- Light sedation targets (RASS 0 to -2)
- Dexmedetomidine may have benefits

**D - Delirium assessment:**
- CAM-ICU or ICDSC daily
- Prevention strategies

**E - Early mobility:**
- PT/OT involvement
- Even on ventilator when safe

**F - Family engagement:**
- Family presence at rounds
- Communication, support

## Prognostication in MODS

### Scoring Systems

| Score | Components | Use |
|-------|------------|-----|
| SOFA | 6 organ systems | Severity, trajectory |
| APACHE II | Age, chronic health, acute physiology | ICU mortality prediction |
| SAPS 3 | Pre-ICU + admission variables | Hospital mortality |
| MODS Score | Similar to SOFA | Alternative scoring |

### Trajectory Matters

- Static SOFA: Baseline severity
- Rising SOFA: Poor prognosis
- Falling SOFA: Improving
- Velocity of change may be most important

### Biomarkers

| Marker | Significance |
|--------|--------------|
| Lactate | Tissue hypoperfusion |
| Procalcitonin | Bacterial infection, guide abx duration |
| Troponin | Myocardial injury/stress |
| BNP/NT-proBNP | Cardiac strain |
| NGAL, KIM-1 | Early AKI markers |`,
      keyTerms: [
        { term: 'organ crosstalk', definition: 'Bidirectional communication and influence between failing organ systems' },
        { term: 'immunoparalysis', definition: 'Acquired immunosuppression following hyperinflammatory phase of critical illness' },
        { term: 'dysbiosis', definition: 'Disruption of normal gut microbiome composition' },
        { term: 'driving pressure', definition: 'Plateau pressure minus PEEP; correlates with ARDS mortality' },
        { term: 'SOFA trajectory', definition: 'Change in SOFA score over time; rising trajectory indicates poor prognosis' },
      ],
      clinicalNotes: 'STARRT-AKI confirms no benefit to early RRT in AKI without urgent indications. Driving pressure <15 cmH2O is an important ventilation target. ABCDEF bundle implementation reduces delirium by 50% and mortality by 15-20%. SOFA trajectory is more prognostic than single measurements.',
    },

    5: {
      level: 5,
      summary: 'Expert MODS management requires integration of evolving pathophysiology concepts, precision monitoring, individualized organ support, and recognition of heterogeneous phenotypes while navigating ethical considerations and long-term outcomes.',
      explanation: `## Evolving Concepts in MODS

### PIRO Model

**P - Predisposition:**
- Genetics (SNPs in cytokine genes)
- Comorbidities
- Age
- Immunosuppression

**I - Insult:**
- Type, severity, timing
- Microbial virulence (in sepsis)
- Injury severity score (in trauma)

**R - Response:**
- Inflammatory markers
- Coagulation activation
- Metabolic response
- Individual variability

**O - Organ Dysfunction:**
- Pattern of dysfunction
- Trajectory
- Response to support

### MODS Phenotypes

**Emerging Research:**
- Hyperinflammatory vs hypoinflammatory
- Adaptive vs maladaptive phenotypes
- Different responses to interventions

**Sepsis Phenotypes (Seymour 2019):**
| Phenotype | Characteristics | Mortality |
|-----------|-----------------|-----------|
| Alpha | Minimal organ dysfunction | 2% |
| Beta | Older, renal dysfunction | 5% |
| Gamma | Inflammation, pulmonary | 24% |
| Delta | Liver dysfunction, shock | 32% |

### Persistent Inflammation, Immunosuppression, and Catabolism (PICS)

**Definition:**
- Prolonged ICU stays
- Ongoing inflammation (high CRP)
- Immunosuppression (lymphopenia)
- Protein catabolism

**Outcomes:**
- Failure to recover
- Recurrent infections
- Prolonged ventilator dependence
- Poor functional outcomes

## Precision Medicine Approaches

### Biomarker-Guided Therapy

**Current Applications:**
- Procalcitonin for antibiotic duration
- Lactate for resuscitation endpoints
- BNP for fluid management (limited evidence)

**Emerging:**
- Adrenomedullin for vascular integrity
- Pentraxin-3 for severity
- Cell-free DNA for tissue damage
- Transcriptomic signatures for phenotyping

### Immunomodulation

**Hyperinflammation (early):**
- Anti-cytokine therapies (mostly failed in trials)
- Blood purification (CytoSorb - limited evidence)

**Immunoparalysis (late):**
- IFN-gamma (small trials)
- GM-CSF (GRID trial ongoing)
- PD-1/PD-L1 inhibitors (case reports)

### Extracorporeal Organ Support

**ECMO:**
- VV-ECMO for ARDS
- VA-ECMO for cardiac failure
- ECCO2R for ultra-protective ventilation

**Liver Support:**
- MARS (Molecular Adsorbent Recirculating System)
- Prometheus
- Limited mortality benefit in RCTs

## Evidence Gaps and Controversies

### Fluid Management

**Questions:**
- Optimal fluid type (balanced vs saline)
- Optimal volume strategy
- When to de-resuscitate

**Evidence:**
- SMART: Balanced may reduce MAKE
- BaSICS: No difference
- CLASSIC: Restrictive fluids non-inferior in septic shock

### RRT Timing

**No benefit to early RRT:**
- AKIKI, IDEAL-ICU, STARRT-AKI all negative
- Start for conventional indications
- Avoid harm of unnecessary RRT

### Nutrition Targets

**Controversies:**
- Caloric targets (full vs permissive underfeeding)
- Protein targets (standard vs high)
- Timing of parenteral nutrition

**Evidence:**
- TARGET: Higher calories - no benefit
- PermiT: Underfeeding - no benefit
- EPaNIC: Early parenteral nutrition harmful

### Corticosteroids

**Septic Shock:**
- APROCCHSS: Benefit with HC + fludrocortisone
- ADRENAL: No mortality benefit with HC alone
- Consensus: Consider for refractory shock

**ARDS:**
- Dexa-ARDS: Dexamethasone reduced mortality in moderate-severe ARDS
- COVID-19 trials: Benefit in hypoxic patients

## Quality and Systems Approach

### ICU Telemedicine

- Remote intensivist coverage
- May improve outcomes in hospitals without 24/7 coverage
- Complements, does not replace, bedside care

### Checklists and Rounds

- Structured ICU rounds
- Daily goals checklist
- Multidisciplinary approach
- Reduces errors and improves outcomes

### Handoff Protocols

- I-PASS framework
- Reduces communication errors
- Improves continuity

## Long-Term Outcomes

### Post-Intensive Care Syndrome (PICS)

**Physical:**
- ICU-acquired weakness
- Functional decline
- Persistent organ dysfunction

**Cognitive:**
- Memory deficits
- Executive dysfunction
- Attention problems

**Psychological:**
- PTSD (10-50%)
- Depression (30%)
- Anxiety (30%)

### Survivorship Programs

- ICU follow-up clinics
- Rehabilitation referral
- Cognitive screening
- Psychological support
- Medication reconciliation

### PICS-F (Family)

- Family caregivers also affected
- Depression, anxiety, PTSD
- Financial strain
- Support needed

## Ethical Considerations

### Goals of Care

- Early discussions with families
- Shared decision-making
- Consider patient values and preferences
- Palliative care integration

### Withdrawal of Life-Sustaining Therapy

- When prognosis is futile
- Family-centered approach
- Comfort measures prioritized
- Organ donation consideration when appropriate

### Resource Allocation

- ICU capacity constraints
- Fair allocation principles
- Triage considerations
- Societal discussions needed`,
      keyTerms: [
        { term: 'PIRO model', definition: 'Framework categorizing MODS by Predisposition, Insult, Response, and Organ dysfunction' },
        { term: 'PICS', definition: 'Post-Intensive Care Syndrome - long-term physical, cognitive, and psychological impairments after critical illness' },
        { term: 'transcriptomic signatures', definition: 'Gene expression patterns that may identify patient phenotypes and treatment responses' },
        { term: 'MARS', definition: 'Molecular Adsorbent Recirculating System - extracorporeal liver support device' },
        { term: 'PICS-F', definition: 'Post-Intensive Care Syndrome-Family - impact on caregivers and family members' },
      ],
      clinicalNotes: `Expert practice points:
1. MODS heterogeneity suggests need for phenotype-specific approaches
2. PICS affects >50% of ICU survivors - plan for long-term follow-up
3. Immunomodulation for late immunoparalysis is an active research area
4. Early palliative care integration improves goal-concordant care
5. Systems-level interventions (checklists, handoffs, telemedicine) improve outcomes
6. Family-centered care includes support for PICS-F`,
    },
  },

  media: [
    {
      id: 'mods-cascade',
      type: 'diagram',
      filename: 'mods-cascade.svg',
      title: 'MODS Pathophysiology Cascade',
      description: 'Diagram showing progression from initial insult to multi-organ dysfunction',
    },
    {
      id: 'sofa-score-diagram',
      type: 'diagram',
      filename: 'sofa-score.svg',
      title: 'SOFA Score Components',
      description: 'Visual breakdown of SOFA score organ systems and criteria',
    },
  ],

  citations: [
    {
      id: 'sofa-original',
      type: 'article',
      title: 'The SOFA (Sepsis-related Organ Failure Assessment) score to describe organ dysfunction/failure',
      authors: ['Vincent, J.L.', 'et al.'],
      source: 'Intensive Care Medicine',
      url: 'https://doi.org/10.1007/BF01709751',
    },
    {
      id: 'mods-pathophysiology',
      type: 'textbook',
      title: 'Multiple Organ Failure: Pathophysiology, Prevention, and Therapy',
      authors: ['Deitch, E.A.', 'Vincent, J.L.', 'Windsor, A.'],
      source: 'Springer',
    },
  ],

  crossReferences: [
    { targetId: 'critical-care-sepsis', targetType: 'topic', relationship: 'related', label: 'Sepsis Recognition and Treatment' },
    { targetId: 'critical-care-shock-management', targetType: 'topic', relationship: 'related', label: 'Shock Types and Management' },
    { targetId: 'critical-care-mechanical-ventilation', targetType: 'topic', relationship: 'related', label: 'Mechanical Ventilation' },
    { targetId: 'critical-care-icu-basics', targetType: 'topic', relationship: 'see-also', label: 'ICU Basics' },
  ],

  tags: {
    systems: ['multi-system', 'critical-care'],
    topics: ['MODS', 'organ failure', 'SOFA score', 'critical care'],
    keywords: ['multi-organ failure', 'MODS', 'SOFA', 'ARDS', 'AKI', 'organ dysfunction', 'PICS'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default multiOrganFailure;
