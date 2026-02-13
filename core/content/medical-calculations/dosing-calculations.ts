import { EducationalContent } from '../types';

export const dosingCalculations: EducationalContent = {
  id: 'calculation-dosing',
  type: 'concept',
  name: 'Drug Dosing Calculations',
  alternateNames: ['Medication Dosing', 'Dose Calculations', 'Therapeutic Dosing', 'mg/kg dosing'],

  levels: {
    1: {
      level: 1,
      summary: 'Drug dosing calculations help determine the right amount of medicine to give based on body weight, age, and other factors to ensure safety and effectiveness.',
      explanation: `## Why Do We Need Dose Calculations?

Medicines work best when given in the right amount. Too little may not help, and too much can be dangerous. Doctors calculate doses based on:
- Body weight
- Age
- Condition being treated
- How well kidneys and liver work

## Weight-Based Dosing

Many medicines are dosed as milligrams per kilogram (mg/kg) of body weight.

**Example:**
If a medicine is dosed at 10 mg/kg and a child weighs 20 kg:
10 mg/kg x 20 kg = 200 mg dose

## Common Dosing Terms

- **mg**: milligrams (1/1000 of a gram)
- **kg**: kilograms (about 2.2 pounds)
- **mL**: milliliters (liquid measurement)
- **mcg**: micrograms (1/1000 of a milligram)

## Converting Pounds to Kilograms

To use weight-based dosing, you need weight in kilograms:
Weight in kg = Weight in pounds / 2.2

Example: 110 pounds / 2.2 = 50 kg

## Important Safety Checks

- Double-check calculations
- Verify maximum safe doses
- Consider age-appropriate limits
- Check for drug allergies
- Review other medications being taken

## When to Ask for Help

Always ask a doctor or pharmacist if:
- The calculation seems unusual
- You are unsure about the dose
- The patient has kidney or liver problems
- Multiple medicines are being used together`,
      keyTerms: [
        { term: 'dose', definition: 'The amount of medicine to be taken at one time' },
        { term: 'mg/kg', definition: 'Milligrams per kilogram; a way to calculate medicine based on body weight' },
        { term: 'maximum dose', definition: 'The highest safe amount of medicine that should not be exceeded' },
        { term: 'therapeutic dose', definition: 'The amount of medicine that produces the desired effect' },
      ],
      analogies: [
        'Drug dosing is like following a recipe - you need the right amount of ingredients for the dish to turn out well.',
        'Think of medicine like fertilizer for plants - too little does not help, too much can burn the plant.',
      ],
      examples: [
        'A child who weighs 30 kg needs amoxicillin 40 mg/kg/day. The daily dose is 30 x 40 = 1200 mg per day.',
        'An adult weighing 70 kg needs medication dosed at 5 mg/kg. The dose is 70 x 5 = 350 mg.',
      ],
    },
    2: {
      level: 2,
      summary: 'Drug dosing calculations involve weight-based dosing, body surface area calculations, renal and hepatic dose adjustments, and therapeutic drug monitoring to optimize efficacy and minimize toxicity.',
      explanation: `## Weight-Based Dosing

Formula:
---
Dose = Weight (kg) x Dose per kg
---

Important considerations:
- Use ideal body weight (IBW) for obese patients in some cases
- Use actual body weight if underweight
- Maximum doses often cap the calculation

**Ideal Body Weight (IBW) Calculations:**

Men: IBW = 50 kg + (2.3 x inches over 5 feet)
Women: IBW = 45.5 kg + (2.3 x inches over 5 feet)

**Adjusted Body Weight (for obesity):**
---
ABW = IBW + 0.4 x (Actual - IBW)
---

## Body Surface Area (BSA) Dosing

Used for chemotherapy and some pediatric medications:

Mosteller formula:
---
BSA (m2) = sqrt([Height (cm) x Weight (kg)] / 3600)
---

Du Bois formula:
---
BSA (m2) = 0.007184 x Weight^0.425 x Height^0.725
---

## Renal Dose Adjustments

When creatinine clearance is reduced:

| CrCl (mL/min) | Adjustment |
|---------------|------------|
| 50-80 | Normal or slight reduction |
| 30-49 | Usually 50-75% of normal |
| 15-29 | Usually 25-50% of normal |
| <15 | Often 25% or avoid |

## Loading Doses vs Maintenance Doses

**Loading Dose:**
- Higher initial dose to reach therapeutic level quickly
- Based on volume of distribution
- Formula: LD = Target Concentration x Vd

**Maintenance Dose:**
- Ongoing dose to maintain steady level
- Based on clearance
- Formula: MD = Target Concentration x Clearance

## Pediatric Dosing Considerations

- Neonates: Immature drug metabolism
- Weight-based for most drugs
- Some drugs use age-based dosing
- Developmental changes affect pharmacokinetics

## Common Dosing Errors to Avoid

- Decimal point errors (0.5 vs 5.0)
- Unit confusion (mg vs mcg vs g)
- Weight calculation errors
- Frequency errors (daily vs twice daily)
- Maximum dose violations`,
      keyTerms: [
        { term: 'ideal body weight', definition: 'Estimated weight based on height and sex; used for dosing in obesity' },
        { term: 'body surface area', definition: 'Measurement of body size correlated with metabolic mass; used for chemotherapy dosing' },
        { term: 'loading dose', definition: 'Initial higher dose to quickly achieve therapeutic drug levels' },
        { term: 'maintenance dose', definition: 'Regular ongoing dose to maintain stable drug concentration' },
        { term: 'therapeutic range', definition: 'Drug concentration range producing desired effects without toxicity' },
      ],
      analogies: [
        'Loading dose is like filling a bucket faster initially, then just adding enough to replace what evaporates.',
      ],
      examples: [
        'Carboplatin chemotherapy dosed by AUC using Calvert formula: Dose = Target AUC x (GFR + 25).',
        'Vancomycin requires therapeutic drug monitoring with target trough 15-20 mcg/mL for serious infections.',
      ],
    },
    3: {
      level: 3,
      summary: 'Pharmacokinetic principles guide drug dosing calculations incorporating volume of distribution, clearance, half-life, and bioavailability, with individualized adjustments for renal function, hepatic function, and drug-drug interactions.',
      explanation: `## Pharmacokinetic Principles

**Volume of Distribution (Vd):**
Theoretical volume into which drug distributes
---
Vd = Amount of Drug / Plasma Concentration
---

Factors affecting Vd:
- Lipophilicity (fat-soluble drugs have larger Vd)
- Protein binding (highly bound drugs have smaller Vd)
- Tissue binding
- Body composition

**Clearance (Cl):**
Volume of blood cleared of drug per unit time
---
Cl = Rate of Elimination / Plasma Concentration
---

Types:
- Renal clearance
- Hepatic clearance
- Total clearance (sum of all routes)

**Half-Life (t1/2):**
Time for drug concentration to decrease by 50%
---
t1/2 = (0.693 x Vd) / Clearance
---

**Steady-State Concentration (Css):**
Reached after approximately 5 half-lives

## Dosing Equations

**Loading Dose:**
---
LD = (Vd x Target Css) / Bioavailability
---

**Maintenance Dose Rate:**
---
MD = (Cl x Target Css) / Bioavailability
---

Or for intermittent dosing:
---
Dose = (Target Css x Vd x tau) / F
---
Where tau = dosing interval, F = bioavailability

## Therapeutic Drug Monitoring (TDM)

Drugs requiring TDM:
- Narrow therapeutic index
- Significant pharmacokinetic variability
- Toxicity difficult to distinguish from disease
- Correlation between concentration and effect

Examples: Vancomycin, aminoglycosides, phenytoin, digoxin, lithium, immunosuppressants

**Pharmacokinetic Calculations for TDM:**

One-compartment model steady-state:
---
Css = (F x Dose) / (Cl x tau)
---

Adjusting dose for new target:
---
New Dose = Current Dose x (Target / Current) x (tau_new / tau_old)
---

## Renal Impairment Dosing

**General Approach:**
1. Calculate creatinine clearance (Cockcroft-Gault)
2. Determine degree of renal impairment
3. Consult dosing guidelines for specific drug

**Dosing Methods:**
- Interval extension: Same dose, longer intervals
- Dose reduction: Reduced dose, same interval
- Combination: Adjust both

**Drugs significantly affected by renal function:**
- Aminoglycosides
- Vancomycin
- Many beta-lactams
- Digoxin
- Lithium
- Low molecular weight heparins
- Metformin (contraindicated if eGFR <30)

## Hepatic Impairment Dosing

More complex than renal dosing:
- Hepatic function harder to quantify
- Multiple metabolic pathways
- Protein binding changes

Child-Pugh classification:
- Class A (mild): Usually normal dose
- Class B (moderate): Caution, consider dose reduction
- Class C (severe): Avoid or significant reduction`,
      keyTerms: [
        { term: 'volume of distribution', definition: 'Theoretical volume in which drug distributes throughout the body' },
        { term: 'clearance', definition: 'Volume of blood cleared of drug per unit time' },
        { term: 'half-life', definition: 'Time required for drug concentration to decrease by 50%' },
        { term: 'bioavailability', definition: 'Fraction of administered drug reaching systemic circulation' },
        { term: 'steady state', definition: 'State where drug input equals elimination; stable concentration' },
        { term: 'therapeutic index', definition: 'Ratio of toxic dose to therapeutic dose; narrow index = risky' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced dosing strategies incorporate population pharmacokinetics, Bayesian forecasting, and individualized dosing algorithms while accounting for special populations including obese patients, elderly, pediatrics, and critically ill patients with altered pharmacokinetics.',
      explanation: `## Population Pharmacokinetics

Uses nonlinear mixed-effects modeling to describe:
- Typical pharmacokinetic parameters
- Inter-individual variability
- Intra-individual variability
- Covariates affecting pharmacokinetics

Software: NONMEM, Monolix, Phoenix NLME

**Applications:**
- Characterize drug behavior in populations
- Identify covariates (weight, age, renal function)
- Design dosing regimens
- Special population dosing

## Bayesian Dosing

Combines population data with individual patient data:

**Bayesian Theorem:**
---
P(Parameters|Data) ∝ P(Data|Parameters) x P(Parameters)
---

**Process:**
1. Start with population parameters (prior)
2. Collect patient drug concentrations (data)
3. Calculate individual parameters (posterior)
4. Optimize dosing

**Advantages:**
- Fewer blood samples needed
- More accurate individual predictions
- Can use sparse data
- Widely used for vancomycin, aminoglycosides

## Obesity Dosing Considerations

**Pharmacokinetic Changes in Obesity:**

| Parameter | Effect | Clinical Impact |
|-----------|--------|-----------------|
| Vd (lipophilic drugs) | Increased | May need higher loading dose |
| Vd (hydrophilic drugs) | Minimal change | Use adjusted body weight |
| Clearance | Often increased | May need higher maintenance |
| Protein binding | May decrease | Increased free drug fraction |

**Weight Selection:**
- Loading doses: Often use actual body weight (ABW) for lipophilic drugs
- Maintenance: May use adjusted body weight
- Highly hydrophilic: Use ideal body weight (IBW)

**Specific Drug Considerations:**

Vancomycin:
- Use ABW for initial dose
- Monitor levels closely
- May need more frequent dosing

Enoxaparin:
- Use actual body weight up to limit
- Anti-Xa monitoring recommended if BMI >40

## Critically Ill Patients

**Altered Pharmacokinetics:**
- Increased Vd (capillary leak, fluid resuscitation)
- Variable clearance (organ dysfunction, altered perfusion)
- Hypoalbuminemia (increased free fraction)
- Drug interactions with supportive care meds

**Dosing Strategies:**
- Higher initial doses (expanded Vd)
- More frequent therapeutic drug monitoring
- Extended or continuous infusions for time-dependent antibiotics
- Loading doses often critical

**Antibiotic Dosing in Critical Illness:**

Extended infusion beta-lactams:
- Higher time above MIC
- Improved outcomes in severe sepsis
- Piperacillin-tazobactam, meropenem, cefepime

Continuous infusion vancomycin:
- Target AUC/MIC 400-600
- May improve efficacy in severe infections

## Pediatric Pharmacokinetics

**Developmental Changes:**

Neonates:
- Immature renal function (GFR 50% of adult at birth)
- Immature hepatic enzymes
- Higher body water content (larger Vd for hydrophilic drugs)
- Lower protein binding

Children:
- Higher metabolic clearance (per kg) than adults
- Weight-based dosing often appropriate
- Maturation of clearance by age 2-3 years

**Pediatric Dosing Equations:**

Young\'s Rule (age-based):
---
Child Dose = (Age / (Age + 12)) x Adult Dose
---

Clark\'s Rule (weight-based):
---
Child Dose = (Weight in lbs / 150) x Adult Dose
---

Preferred: Allometric scaling using BSA or weight-based dosing from pediatric studies

## Elderly Patients

**Pharmacokinetic Changes:**

| Parameter | Change | Impact |
|-----------|--------|--------|
| Renal function | Decreased | Reduced clearance of renally eliminated drugs |
| Hepatic mass/blood flow | Decreased | Reduced hepatic clearance |
| Body water | Decreased | Smaller Vd for hydrophilic drugs |
| Body fat | Increased | Larger Vd for lipophilic drugs |
| Protein binding | Often decreased | More free drug |
| Albumin | Often decreased | More free acidic drugs |

**Dosing Considerations:**
- Start low, go slow
- Monitor renal function regularly
- Consider Beers criteria for potentially inappropriate medications
- Increased risk of drug-drug interactions`,
      keyTerms: [
        { term: 'population pharmacokinetics', definition: 'Study of pharmacokinetic variability in populations using nonlinear mixed-effects modeling' },
        { term: 'Bayesian dosing', definition: 'Individualized dosing using Bayesian statistics to combine population data with patient data' },
        { term: 'allometric scaling', definition: 'Dosing adjustment based on body size using power functions' },
        { term: 'MIC', definition: 'Minimum inhibitory concentration; lowest drug concentration preventing bacterial growth' },
        { term: 'AUC', definition: 'Area under the concentration-time curve; measure of total drug exposure' },
      ],
      clinicalNotes: 'Bayesian dosing software (BestDose, PrecisePK) is increasingly used for vancomycin and aminoglycosides, requiring fewer blood samples while improving target attainment. In obesity, use actual body weight for loading doses of lipophilic drugs, adjusted body weight for maintenance. In critically ill patients, consider extended or continuous infusions for beta-lactams to optimize pharmacodynamic targets.',
    },
    5: {
      level: 5,
      summary: 'Precision dosing integrates pharmacokinetic-pharmacodynamic modeling, pharmacogenomics, and real-time adaptive algorithms to optimize drug therapy, with emerging applications in model-informed precision dosing and artificial intelligence-assisted therapeutic decision-making.',
      explanation: `## Model-Informed Precision Dosing (MIPD)

Framework combining:
- Mechanistic pharmacokinetic models
- Patient-specific covariates
- Therapeutic drug monitoring
- Bayesian forecasting

**Implementation:**
1. Population model selection
2. Individual parameter estimation
3. Dose optimization for target
4. Continuous learning from outcomes

**Clinical Applications:**
- Vancomycin (AUC-guided)
- Aminoglycosides
- Immunosuppressants (tacrolimus, mycophenolate)
- Antiepileptics
- Oncology (busulfan, 5-FU)

## Pharmacogenomic-Guided Dosing

**CYP2D6 and Opioids:**
- Ultra-rapid metabolizers: Increased toxicity risk (codeine → morphine)
- Poor metabolizers: Reduced efficacy
- FDA warnings for codeine and tramadol in children

**CYP2C19 and Clopidogrel:**
- Poor metabolizers: Reduced active metabolite
- Increased cardiovascular events
- Alternative: Prasugrel or ticagrelor

**TPMT and Thiopurines:**
- Deficient metabolizers: Severe myelosuppression
- Dose reduction or alternative therapy
- Pre-treatment testing recommended

**HLA-B*5701 and Abacavir:**
- Hypersensitivity reaction
- Mandatory pre-treatment screening

**DPD and 5-Fluorouracil:**
- Dihydropyrimidine dehydrogenase deficiency
- Life-threatening toxicity
- Dose reduction algorithms

## AUC-Guided Vancomycin

Transition from trough-based to AUC/MIC-based dosing:

**Rationale:**
- AUC/MIC better predictor of efficacy
- Reduces nephrotoxicity vs high troughs
- Bayesian methods enable AUC estimation from single levels

**Target:**
- AUC/MIC 400-600 for most infections
- MIC typically assumed 1 mcg/mL
- AUC 400-600 mg·hr/L

**Implementation:**
- First-order Bayesian estimation
- Single steady-state level sufficient
- Dose adjustment algorithms
- Software tools: Vancomycin Calculator, PrecisePK

## Artificial Intelligence in Dosing

**Machine Learning Applications:**

Dose prediction:
- Neural networks for warfarin dosing
- Random forests for heparin dosing
- Deep learning for vancomycin

Outcome prediction:
- Toxicity risk stratification
- Efficacy probability
- Individualized target selection

**Advantages:**
- Captures complex interactions
- Learns from large datasets
- Continuous improvement
- May outperform traditional models

**Challenges:**
- Black box nature
- Validation requirements
- Regulatory approval
- Integration with clinical workflow

## Special Scenarios

**Obesity Pharmacokinetics:**

Allometric scaling for weight:
---
Cl or V = θ x (Weight / 70)^exponent
---

Exponent typically:
- 1 for clearance
- 1 for blood flows
- 0.75 for metabolic processes
- 1 for Vd of hydrophilic drugs

**Continuous Renal Replacement Therapy (CRRT):**
- Significantly increased drug clearance
- Dosing guidelines vary by modality
- Higher doses often needed
- Therapeutic drug monitoring critical

**ECMO:**
- Drug sequestration in circuit
- Altered pharmacokinetics
- Limited data for most drugs
- TDM essential

**Extracorporeal Therapies:**
- Dialysis clearance
- Therapeutic plasma exchange
- Molecular adsorbent recirculating system (MARS)

## Regulatory and Implementation

**FDA Guidance:**
- Population PK encouraged in drug development
- Model-informed drug development (MIDD)
- Pediatric study designs using modeling
- Dosing in organ impairment

**Clinical Implementation Barriers:**
- Software availability
- Education and training
- Workflow integration
- Cost-effectiveness

**Future Directions:**
- Real-time biosensors
- Closed-loop dosing systems
- Integration of multi-omics data
- Point-of-care pharmacokinetic testing`,
      keyTerms: [
        { term: 'model-informed precision dosing', definition: 'Framework using pharmacokinetic models and Bayesian methods for individualized dosing' },
        { term: 'AUC/MIC', definition: 'Pharmacodynamic target for antibiotics; area under curve to minimum inhibitory concentration ratio' },
        { term: 'pharmacogenomics', definition: 'Study of how genetic variation affects drug response' },
        { term: 'allometric scaling', definition: 'Method to adjust pharmacokinetic parameters for body size' },
        { term: 'MIDD', definition: 'Model-Informed Drug Development; FDA approach incorporating modeling in drug development' },
      ],
      clinicalNotes: 'Transition to AUC-guided vancomycin dosing is now recommended by consensus guidelines to reduce nephrotoxicity. Pharmacogenomic testing for CYP2C19 before clopidogrel, TPMT before thiopurines, and HLA-B*5701 before abacavir can prevent serious adverse events. Bayesian dosing software enables precision dosing with fewer blood draws. Model-informed precision dosing is the future of individualized pharmacotherapy.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],

  tags: {
    systems: ['pharmacology'],
    topics: ['clinical-calculations', 'pharmacy', 'therapeutics'],
    keywords: ['dosing', 'pharmacokinetics', 'drug calculations', 'weight-based dosing', 'TDM'],
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
