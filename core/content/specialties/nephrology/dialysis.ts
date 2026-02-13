/**
 * Dialysis - Comprehensive Educational Content
 *
 * Covers hemodialysis, peritoneal dialysis, CRRT,
 * with pathophysiology, technical aspects, and management.
 */

import { EducationalContent } from '../../types';

export const dialysis: EducationalContent = {
  id: 'process-dialysis',
  type: 'process',
  name: 'Dialysis',
  alternateNames: ['Renal Replacement Therapy', 'RRT', 'Hemodialysis', 'Peritoneal Dialysis', 'HD', 'PD'],

  levels: {
    1: {
      level: 1,
      summary: 'Dialysis is a treatment that does the job of your kidneys when they can no longer work properly.',
      explanation: `When your kidneys stop working, waste products and extra water build up in your blood. This can make you very sick. Dialysis is a treatment that cleans your blood the way healthy kidneys would.

**Why Do People Need Dialysis?**
- Their kidneys have failed (end-stage kidney disease)
- They are waiting for a kidney transplant
- Their kidneys are temporarily not working (acute kidney injury)

**Types of Dialysis:**

**1. Hemodialysis (HD)**
Blood is cleaned using a machine outside your body.
- Blood flows through a tube to a special filter (dialyzer)
- The filter removes waste and extra water
- Clean blood returns to your body
- Usually done 3 times a week for 3-4 hours

**2. Peritoneal Dialysis (PD)**
Blood is cleaned inside your body using your belly.
- A special fluid goes into your belly through a tube
- The fluid pulls waste and extra water from your blood
- After a few hours, the fluid drains out
- Can be done at home, every day

**What Does Dialysis Remove?**
- Waste products (like creatinine and urea)
- Extra salt and water
- Toxins

**What Dialysis Cannot Do:**
- Make hormones like healthy kidneys do
- Work 24/7 like real kidneys
- Cure kidney disease

**Living with Dialysis:**
- You can still work, travel, and enjoy life
- You will need to follow a special diet
- Taking medications on time is important
- Regular blood tests help doctors adjust your treatment`,
      keyTerms: [
        { term: 'dialysis', definition: 'A treatment that cleans your blood when your kidneys cannot' },
        { term: 'hemodialysis', definition: 'Dialysis using a machine to clean blood outside your body', pronunciation: 'HEE-moh-dye-AL-ih-sis' },
        { term: 'peritoneal dialysis', definition: 'Dialysis using the lining of your belly to clean blood', pronunciation: 'pair-ih-toh-NEE-ul' },
        { term: 'dialyzer', definition: 'The special filter used in hemodialysis to clean blood' },
      ],
      analogies: [
        'A dialyzer works like a coffee filter - it lets clean fluid through but keeps the waste behind.',
        'Peritoneal dialysis is like soaking a sponge in dirty water - the sponge (dialysis fluid) absorbs the bad stuff from your blood.',
      ],
      examples: [
        'Someone with diabetes whose kidneys have stopped working might need hemodialysis three times a week at a dialysis center.',
        'A person who wants to do dialysis at home while they sleep might choose peritoneal dialysis.',
      ],
    },
    2: {
      level: 2,
      summary: 'Dialysis uses diffusion, convection, and ultrafiltration to remove uremic toxins and excess fluid, with hemodialysis and peritoneal dialysis as the two main modalities for end-stage kidney disease.',
      explanation: `## Principles of Dialysis

**Three Main Mechanisms:**

1. **Diffusion**
   - Solutes move from high to low concentration
   - Removes small molecules (urea, creatinine, potassium)
   - Driven by concentration gradient

2. **Convection (Solvent Drag)**
   - Solutes move with water through membrane
   - Removes middle molecules (beta-2 microglobulin)
   - Important in hemofiltration/hemodiafiltration

3. **Ultrafiltration**
   - Removal of excess water
   - Driven by pressure gradient
   - Controlled in HD by transmembrane pressure

## Hemodialysis (HD)

### Components
- **Vascular access**: Where blood enters/exits
- **Dialyzer**: Artificial kidney (semipermeable membrane)
- **Dialysis machine**: Controls blood and dialysate flow
- **Dialysate**: Fluid that pulls waste from blood

### Typical Prescription
- Frequency: 3 times per week
- Duration: 3-4 hours per session
- Blood flow: 300-500 mL/min
- Dialysate flow: 500-800 mL/min

### Vascular Access Types
| Type | Description | Maturation | Pros | Cons |
|------|-------------|------------|------|------|
| AV Fistula | Artery connected to vein | 2-6 months | Best long-term, lowest infection | Slow maturation |
| AV Graft | Synthetic tube connecting artery/vein | 2-4 weeks | Faster to use | More infections, clotting |
| Catheter | Tube in large vein (jugular, femoral) | Immediate | Quick access | Highest infection risk |

### Common Complications
- **Hypotension**: Most common; from rapid fluid removal
- **Cramps**: Related to fluid shifts
- **Access problems**: Clotting, stenosis, infection
- **Dialysis disequilibrium**: Headache, nausea from rapid urea removal

## Peritoneal Dialysis (PD)

### Mechanism
- Peritoneum acts as the dialysis membrane
- Dialysate instilled via catheter into peritoneal cavity
- Dwell time allows diffusion and ultrafiltration
- Fluid then drained and replaced

### Types
**CAPD (Continuous Ambulatory PD)**
- 4-5 exchanges per day
- Manual bag exchanges
- Done during waking hours

**APD (Automated PD)**
- Machine does exchanges overnight
- Patient connected to cycler 8-10 hours
- More freedom during day

### Typical Prescription
- Dwell time: 4-6 hours (CAPD) or 1-2 hours (APD)
- Volume: 2-2.5 L per exchange
- Glucose concentration: 1.5%, 2.5%, or 4.25% (higher = more ultrafiltration)

### Complications
- **Peritonitis**: Most important complication
  - Cloudy effluent, abdominal pain
  - WBC >100/mm³ with >50% neutrophils
- **Catheter problems**: Infection, malposition
- **Hernias**: From increased abdominal pressure
- **Membrane failure**: Loss of ultrafiltration over years

## Indications for Dialysis

**"AEIOU" for Urgent Dialysis:**
- **A**cidosis (severe, refractory)
- **E**lectrolytes (hyperkalemia refractory to treatment)
- **I**ngestions (certain toxins)
- **O**verload (volume, refractory pulmonary edema)
- **U**remia (encephalopathy, pericarditis, bleeding)

**Chronic Dialysis Initiation:**
- Usually when eGFR 5-10 mL/min with symptoms
- Earlier if uncontrolled complications
- Patient education and access planning months before`,
      keyTerms: [
        { term: 'diffusion', definition: 'Movement of solutes from high to low concentration across a membrane' },
        { term: 'ultrafiltration', definition: 'Removal of water driven by pressure difference across a membrane' },
        { term: 'AV fistula', definition: 'Surgical connection between artery and vein; preferred hemodialysis access' },
        { term: 'peritoneum', definition: 'The membrane lining the abdominal cavity; used as dialysis membrane in PD' },
        { term: 'peritonitis', definition: 'Infection of the peritoneal cavity; major complication of PD', pronunciation: 'pair-ih-toh-NY-tis' },
        { term: 'dwell time', definition: 'Time dialysate stays in peritoneal cavity for exchange to occur' },
      ],
      analogies: [
        'An AV fistula is like a highway on-ramp - it creates a bigger, stronger blood vessel that can handle the high flow needed for dialysis.',
        'The peritoneum in PD is like a tea bag - it lets small molecules pass through while keeping blood cells inside.',
      ],
    },
    3: {
      level: 3,
      summary: 'Dialysis adequacy depends on solute clearance and fluid removal, assessed by Kt/V and clinical parameters, with modality selection based on patient factors, lifestyle, and clinical considerations.',
      explanation: `## Dialysis Adequacy

### Hemodialysis Adequacy

**Kt/V (Urea Clearance):**
- K = dialyzer clearance (mL/min)
- t = time on dialysis (minutes)
- V = volume of distribution of urea (total body water)
- Target: spKt/V ≥1.4 per session (KDOQI)

**URR (Urea Reduction Ratio):**
- URR = (Pre-BUN - Post-BUN) / Pre-BUN × 100%
- Target: ≥70%

**Factors Affecting Adequacy:**
- Blood flow rate (higher = better clearance)
- Dialysate flow rate
- Dialyzer surface area and membrane type
- Treatment time
- Access recirculation (reduces effective clearance)

### Peritoneal Dialysis Adequacy

**Weekly Kt/V:**
- Target: ≥1.7 per week
- Includes both peritoneal and residual kidney clearance

**Peritoneal Equilibration Test (PET):**
- Classifies membrane transport characteristics
- High transporter: Fast equilibration, poor UF
- Low transporter: Slow equilibration, good UF

| Transport Type | D/P Creatinine (4hr) | Clinical Implications |
|----------------|---------------------|----------------------|
| High | >0.81 | Short dwells (APD), more glucose absorption |
| High-average | 0.65-0.81 | Flexible |
| Low-average | 0.50-0.64 | Longer dwells work well |
| Low | <0.50 | Long dwells needed, excellent UF |

## Advanced Hemodialysis Concepts

### Dialyzer Technology

**Membrane Types:**
- Low-flux: Smaller pore size, less middle molecule clearance
- High-flux: Larger pores, better middle molecule clearance
- High-efficiency: Large surface area, high clearance rates

**Biocompatibility:**
- Synthetic membranes (polysulfone, polyethersulfone): More biocompatible
- Complement activation and leukocyte effects minimized

### Dialysate Composition

| Component | Typical Concentration | Purpose |
|-----------|----------------------|---------|
| Sodium | 138-145 mEq/L | Match serum; sodium modeling possible |
| Potassium | 0-4 mEq/L | Individualized based on patient K+ |
| Bicarbonate | 32-40 mEq/L | Correct acidosis |
| Calcium | 2.5-3.0 mEq/L | Avoid hypocalcemia; lower if hypercalcemic |
| Glucose | 100-200 mg/dL | Prevent hypoglycemia |

### Fluid Management

**Dry Weight:**
- Target post-dialysis weight
- Lowest weight tolerated without hypotension or symptoms
- Assessed by clinical exam, bioimpedance

**Ultrafiltration Rate:**
- Goal: <10-13 mL/kg/hr (higher rates increase mortality)
- Limit interdialytic weight gain to <4% of dry weight

### Anticoagulation

- **Heparin**: Standard; loading dose + continuous infusion
- **Citrate**: Regional anticoagulation for bleeding risk
- **Heparin-free**: Saline flushes; for active bleeding

## Peritoneal Dialysis Technical Aspects

### Catheter Types
- **Tenckhoff**: Standard, double-cuff
- **Swan-neck**: Pre-curved for better exit site direction
- **Coiled**: May reduce omental wrapping

### Dialysate Solutions

**Osmotic Agents:**
- Dextrose (glucose): Standard; causes glucose absorption
- Icodextrin: Glucose polymer; sustained UF, good for long dwells
- Amino acids: Nutritional benefit

### Complications Management

**Peritonitis:**
- Diagnosis: Cloudy effluent + WBC >100/μL (>50% PMNs)
- Initial: Empiric coverage for gram-positive and gram-negative
- Culture-directed therapy for 2-3 weeks
- Catheter removal if: Refractory, fungal, tunnel infection

**Encapsulating Peritoneal Sclerosis (EPS):**
- Rare, serious complication after years on PD
- Fibrous encasement of bowel
- Presents with obstruction, malnutrition
- Treatment: Surgery, immunosuppression

## Continuous Renal Replacement Therapy (CRRT)

### Modalities

| Modality | Mechanism | Use Case |
|----------|-----------|----------|
| CVVH | Convection (hemofiltration) | Toxin removal, sepsis |
| CVVHD | Diffusion (hemodialysis) | Electrolyte correction |
| CVVHDF | Both | Most common; balanced approach |

### Prescription
- Effluent dose: 20-25 mL/kg/hr
- Blood flow: 150-250 mL/min
- Filter lifespan: 24-72 hours typically

### Anticoagulation Options
- Regional citrate: Preferred for ICU (fewer bleeding complications)
- Systemic heparin: If citrate contraindicated
- None: For coagulopathic patients`,
      keyTerms: [
        { term: 'Kt/V', definition: 'Measure of dialysis adequacy; K×time/volume of urea distribution' },
        { term: 'PET', definition: 'Peritoneal Equilibration Test; assesses membrane transport characteristics' },
        { term: 'high-flux', definition: 'Dialyzer membrane with larger pores for middle molecule clearance' },
        { term: 'dry weight', definition: 'Target post-dialysis weight without excess fluid' },
        { term: 'icodextrin', definition: 'Glucose polymer dialysate solution providing sustained ultrafiltration' },
        { term: 'CVVHDF', definition: 'Continuous venovenous hemodiafiltration; CRRT using both convection and diffusion' },
      ],
      clinicalNotes: 'Target spKt/V ≥1.4 in HD and weekly Kt/V ≥1.7 in PD. High transporters on PET do better with APD (short dwells). Ultrafiltration rates >13 mL/kg/hr are associated with increased mortality. In peritonitis, never wait for culture - start empiric antibiotics immediately.',
    },
    4: {
      level: 4,
      summary: 'Advanced dialysis management requires optimization of solute clearance, volume management, cardiovascular risk reduction, and individualized modality selection including home HD and intensive dialysis regimens.',
      explanation: `## Optimizing Hemodialysis Outcomes

### Intensive Hemodialysis Regimens

**Short Daily HD:**
- 5-6 sessions per week, 2-3 hours each
- Improved BP control, phosphorus clearance
- Better quality of life scores
- FHN trial: Reduced LV mass, improved physical health

**Nocturnal HD:**
- 3-6 nights per week, 6-8 hours
- Superior phosphorus and middle molecule clearance
- Liberalized diet, reduced medications
- Challenge: Vascular access durability

**Home Hemodialysis:**
- Any intensive regimen at home
- Patient empowerment, flexibility
- Training: 4-8 weeks typically
- Growing uptake with improved technology

### Cardiovascular Management

**Intradialytic Hypotension (IDH):**
Definition: SBP drop ≥20 mmHg or symptoms requiring intervention

Prevention strategies:
- Limit UF rate (<10 mL/kg/hr)
- Sodium profiling (controversial)
- Lower dialysate temperature (35-36°C)
- Midodrine pre-treatment
- Food restriction during HD
- Isolated UF before diffusive clearance

**Sudden Cardiac Death:**
- Leading cause of death in dialysis
- Highest risk in first HD day after weekend
- Associated with large K+ and volume shifts
- Strategies: β-blockers, ICDs in select patients

**Dialysis-Related Amyloidosis:**
- β2-microglobulin accumulation
- Carpal tunnel syndrome, bone cysts, spondyloarthropathy
- Reduced with high-flux membranes, longer/more frequent HD

### Volume Assessment

**Clinical Assessment:**
- Edema, JVD, lung crackles
- Blood pressure trends

**Objective Tools:**
- Bioimpedance spectroscopy (BIS)
- Lung ultrasound (B-lines)
- Relative blood volume monitoring
- Inferior vena cava diameter

### Vascular Access Management

**Fistula First/Catheter Last:**
- AVF preferred for long-term outcomes
- AV graft if veins inadequate
- Catheter only when no other option or temporary need

**Access Surveillance:**
- Physical exam each session
- Access flow monitoring (Qa)
- Intervention if flow <400-500 mL/min or declining trend

**Access Infections:**
- Catheter-related bloodstream infection (CRBSI)
- S. aureus most common pathogen
- Treatment: Antibiotics ± catheter exchange or removal

## Advanced Peritoneal Dialysis

### Prescription Optimization

**Incremental PD:**
- Start with less intensive prescription when residual kidney function (RKF) present
- Adjust as RKF declines
- Preserves peritoneal membrane

**Assisted PD:**
- Helper (family, healthcare worker) performs exchanges
- Expands PD access to elderly, disabled
- Cost-effective alternative to in-center HD

### Ultrafiltration Failure

**Causes:**
- High transporter status (glucose absorption)
- Membrane failure (long-term PD)
- Mechanical issues (catheter malposition, leaks)

**Management:**
- PET to classify transport
- Icodextrin for long dwell
- Short rapid cycles (APD)
- Combination PD + HD if needed
- Transition to HD if refractory

### PD in Special Situations

**Acute PD:**
- Feasible with urgent-start catheters
- Lower flows initially (1L exchanges)
- Viable alternative when HD access unavailable

**PD and Diabetes:**
- Glucose absorption: 100-200 g/day with dextrose
- Insulin in dialysate possible
- Icodextrin to reduce glucose exposure

## CRRT in Critical Illness

### Timing of Initiation

**STARRT-AKI Trial (2020):**
- Early vs. delayed strategy in critically ill AKI
- No mortality difference
- Delayed strategy: Less RRT exposure, no harm

**Current Practice:**
- Urgent indications (AEIOU) → immediate
- Non-urgent: Clinical judgment, trajectory assessment

### Dosing Controversies

**RENAL and ATN Trials:**
- Higher dose (35-40 mL/kg/hr) no better than standard (20-25 mL/kg/hr)
- Current recommendation: 20-25 mL/kg/hr delivered dose
- Prescribe slightly higher to account for downtime

### Anticoagulation in CRRT

**Regional Citrate (Preferred):**
- Citrate chelates calcium in circuit
- Calcium infused centrally to replace
- Metabolized to bicarbonate (contributes to alkalosis)
- Monitor: Ionized Ca (circuit and systemic), total/ionized Ca ratio

**Citrate Accumulation:**
- Rising total/ionized calcium ratio >2.5
- Seen in liver failure, shock
- Management: Reduce citrate, consider heparin

### Drug Dosing in CRRT
- Many drugs cleared by CRRT
- Adjustments needed for antibiotics, antivirals, sedatives
- Consider modality, effluent rate, sieving coefficient
- Consult pharmacy for complex cases

## Choosing a Dialysis Modality

### Patient Factors

| Factor | Favors HD | Favors PD |
|--------|-----------|-----------|
| Living situation | Access to center | Home capable |
| Schedule | Fixed schedule preferred | Flexibility desired |
| Comorbidities | Severe heart failure | Abdominal surgery history |
| Cognition | Impaired (staff-assisted) | Intact (self-care) |
| Residual kidney function | Not preserved as well | Better preserved initially |

### Outcomes Comparison
- Short-term: PD may have survival advantage first 1-2 years
- Long-term: Similar or slight HD advantage after 2-3 years
- Quality of life: Often better with PD and home HD
- Cost: PD less expensive in most healthcare systems`,
      keyTerms: [
        { term: 'nocturnal hemodialysis', definition: 'Extended hemodialysis (6-8 hours) performed during sleep' },
        { term: 'intradialytic hypotension', definition: 'Blood pressure drop during hemodialysis requiring intervention' },
        { term: 'β2-microglobulin amyloidosis', definition: 'Amyloid deposition from long-term dialysis; causes bone and joint disease' },
        { term: 'bioimpedance spectroscopy', definition: 'Objective measure of body fluid status using electrical impedance' },
        { term: 'incremental PD', definition: 'Starting PD with reduced prescription when residual kidney function present' },
        { term: 'regional citrate anticoagulation', definition: 'CRRT anticoagulation using citrate in circuit and systemic calcium replacement' },
      ],
      clinicalNotes: 'Target UF rate <10 mL/kg/hr to reduce intradialytic hypotension and mortality. Intensive HD (short daily or nocturnal) improves many outcomes but requires dedicated patients. Citrate is preferred CRRT anticoagulation but watch for accumulation in liver failure. Preserve residual kidney function in PD with ACEi/ARBs and avoiding nephrotoxins.',
    },
    5: {
      level: 5,
      summary: 'Expert dialysis care integrates precision medicine approaches, emerging technologies, dialysis unit quality metrics, and multidisciplinary care models to optimize outcomes and patient experience across the dialysis population.',
      explanation: `## Precision Dialysis Medicine

### Individualized Prescriptions

**Pharmacokinetic Modeling:**
- Mathematical modeling of solute removal
- Personalized Kt/V targets based on body composition
- Consideration of residual kidney function

**Genetic Factors:**
- ACE polymorphisms and intradialytic hypotension risk
- APOE genotype and vascular access outcomes
- Pharmacogenomics for ESA and phosphate binder response

### Biomarker-Guided Care

**Inflammation Markers:**
- CRP, IL-6: Associated with mortality
- May guide nutrition, infection screening
- Emerging: Procalcitonin for peritonitis diagnosis

**Cardiac Biomarkers:**
- Troponin: Elevated in dialysis; prognostic significance
- BNP/NT-proBNP: Volume assessment; very high levels prognostic

### Targeted Solute Removal

**Protein-Bound Uremic Toxins:**
- Indoxyl sulfate, p-cresyl sulfate: Cardiovascular toxicity
- Poorly removed by conventional HD
- Adsorption technologies in development

**Middle Molecules:**
- β2-microglobulin, FGF-23
- Better removal with high-flux membranes, hemodiafiltration
- MCO (medium cut-off) membranes emerging

## Emerging Technologies

### Next-Generation Dialysis

**Medium Cut-Off (MCO) Membranes:**
- Enhanced middle molecule clearance
- Reduced inflammation markers in trials
- Positioned between high-flux HD and HDF

**Hemodiafiltration (HDF):**
- Convection-enhanced therapy
- High-volume HDF: Improved survival in some studies (CONVINCE trial)
- Requires high-quality water and dialysate

**Sorbent-Based Technologies:**
- Portable/wearable artificial kidney concepts
- Regeneration of dialysate for continuous use
- Currently investigational

### Wearable and Implantable Devices

**Wearable Artificial Kidney (WAK):**
- Continuous, ambulatory dialysis
- Phase 2 trials ongoing
- Challenges: Anticoagulation, access, device reliability

**Implantable Bioartificial Kidney:**
- Silicon nanopore membrane + renal tubule cells
- Powered by blood pressure (no external power)
- Preclinical development

### Digital Health in Dialysis

**Remote Monitoring:**
- Home HD vital signs and treatment data
- PD cycler data transmission
- Early detection of volume overload, access issues

**AI Applications:**
- Prediction of intradialytic hypotension
- Personalized dry weight recommendations
- Peritonitis risk stratification

## Quality Improvement

### Dialysis Facility Metrics

**CMS Quality Incentive Program Measures:**
- Kt/V adequacy
- Hypercalcemia rate
- Vascular access type (fistula vs. catheter)
- Hospitalization rate
- Standardized mortality ratio (SMR)
- Standardized hospitalization ratio (SHR)

**Infection Control:**
- Catheter-related bloodstream infection rate
- Peritonitis rate (PD)
- Hepatitis B/C screening and vaccination

### Shared Decision-Making

**Advance Care Planning:**
- Discuss goals of care at initiation
- Time-limited trials of dialysis
- Conservative kidney management as option

**Patient-Reported Outcomes (PROs):**
- KDQOL-SF: Kidney disease quality of life
- Symptom burden assessment
- Increasingly incorporated into care

## Special Populations

### Elderly and Frail Patients

**Conservative Kidney Management:**
- May be appropriate alternative to dialysis
- Survival similar to dialysis in very elderly with high comorbidity
- Focus on symptom management, quality of life

**Dialysis Considerations:**
- Incremental dialysis to start
- Assisted PD as option
- Careful fluid removal to avoid falls

### Pediatric Dialysis

**Technical Considerations:**
- Smaller blood volumes (priming with blood/albumin)
- Growth and nutrition paramount
- Peritoneal dialysis often preferred

**Psychosocial:**
- School integration
- Transition planning to adult care
- Developmental support

### Dialysis in Pregnancy

**Intensive Dialysis:**
- Daily or near-daily HD (36+ hours/week)
- Improved fetal outcomes with intensive regimen
- Target BUN <50 mg/dL

**Monitoring:**
- Frequent ultrasounds
- Heparin-free or low-dose
- Close collaboration with MFM

## Palliative Care Integration

### Symptom Management

**Common Symptoms:**
- Fatigue (ubiquitous, multifactorial)
- Pruritus (uremic, phosphorus, dry skin)
- Restless legs (iron, dopamine agonists)
- Pain (neuropathic, musculoskeletal, ischemic)

**Palliative Dialysis:**
- Reduce dialysis intensity for comfort
- Focus on fluid removal over clearance
- Time-limited trials with clear endpoints

### Dialysis Withdrawal

**Process:**
- Patient-initiated decision
- Family and care team discussions
- Transition to hospice
- Mean survival after withdrawal: 7-10 days

**Support:**
- Symptom management (opioids, anxiolytics)
- Spiritual care
- Bereavement support for families

## Global and Health System Perspectives

### Dialysis Access Disparities

**United States:**
- Late referral more common in minorities
- AVF rates lower in Black patients
- Home dialysis uptake lower in underserved communities

**Global:**
- Dialysis unavailable in many LMICs
- Peritoneal dialysis: Cost-effective option
- International Society of Nephrology initiatives

### Payment Models

**Bundled Payment (US):**
- Single payment covers dialysis and routine medications
- Incentivizes efficiency
- Quality metrics tied to payment

**Future:**
- Value-based care models
- Outcomes-based contracts
- Integration with transplant and CKD care`,
      keyTerms: [
        { term: 'MCO membrane', definition: 'Medium cut-off dialysis membrane enhancing middle molecule clearance' },
        { term: 'hemodiafiltration', definition: 'Dialysis modality combining diffusion and high-volume convection' },
        { term: 'wearable artificial kidney', definition: 'Investigational portable dialysis device for continuous ambulatory treatment' },
        { term: 'conservative kidney management', definition: 'Supportive care without dialysis for ESKD; appropriate for some frail elderly' },
        { term: 'SMR', definition: 'Standardized Mortality Ratio; facility-level outcome metric comparing observed to expected deaths' },
        { term: 'dialysis withdrawal', definition: 'Patient decision to stop dialysis; requires palliative care support' },
      ],
      clinicalNotes: `Key clinical pearls:
1. MCO membranes and high-volume HDF may improve outcomes through enhanced middle molecule removal
2. Wearable/implantable artificial kidneys remain investigational but represent future direction
3. Early palliative care integration improves symptom management and care planning
4. Conservative kidney management is a valid choice for appropriate patients - discuss proactively
5. Quality metrics drive facility performance - track and optimize Kt/V, access, infections
6. Home modalities (PD, home HD) offer quality of life benefits and should be offered broadly
7. In pregnancy, intensive daily HD improves fetal outcomes - target 36+ hours/week`,
    },
  },

  media: [
    {
      id: 'dialysis-principles',
      type: 'diagram',
      filename: 'dialysis-principles.svg',
      title: 'Principles of Dialysis',
      description: 'Diagram showing diffusion, convection, and ultrafiltration mechanisms',
    },
    {
      id: 'vascular-access-types',
      type: 'diagram',
      filename: 'vascular-access.svg',
      title: 'Vascular Access Types for Hemodialysis',
      description: 'Comparison of AV fistula, AV graft, and central venous catheter',
    },
  ],

  citations: [
    {
      id: 'kdoqi-hemodialysis-2015',
      type: 'article',
      title: 'KDOQI Clinical Practice Guideline for Hemodialysis Adequacy: 2015 Update',
      authors: ['NKF KDOQI'],
      source: 'American Journal of Kidney Diseases',
      url: 'https://www.kidney.org/professionals/guidelines/hemodialysis2015',
    },
    {
      id: 'ispd-guidelines-2022',
      type: 'article',
      title: 'ISPD Peritoneal Dialysis Guidelines',
      authors: ['ISPD'],
      source: 'Peritoneal Dialysis International',
    },
    {
      id: 'brenner-rector-dialysis',
      type: 'textbook',
      title: 'Dialysis',
      source: "Brenner and Rector's The Kidney",
      chapter: '64-68',
    },
  ],

  crossReferences: [
    { targetId: 'condition-chronic-kidney-disease', targetType: 'condition', relationship: 'related', label: 'CKD' },
    { targetId: 'condition-acute-kidney-injury', targetType: 'condition', relationship: 'related', label: 'AKI' },
    { targetId: 'process-kidney-transplantation', targetType: 'process', relationship: 'related', label: 'Kidney Transplant' },
    { targetId: 'condition-potassium-disorders', targetType: 'condition', relationship: 'related', label: 'Hyperkalemia' },
  ],

  tags: {
    systems: ['urinary', 'renal'],
    topics: ['nephrology', 'critical care', 'procedures', 'chronic disease management'],
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

export default dialysis;
