/**
 * Dialysis Basics - Clinical Educational Content
 *
 * Covers hemodialysis, peritoneal dialysis, vascular access,
 * adequacy measures, and complications.
 */

import { EducationalContent } from '../../types';

export const dialysisBasics: EducationalContent = {
  id: 'clinical-dialysis-basics',
  type: 'concept',
  name: 'Dialysis Basics',
  alternateNames: ['Renal Replacement Therapy', 'Hemodialysis', 'Peritoneal Dialysis', 'Kidney Dialysis'],

  levels: {
    1: {
      level: 1,
      summary: 'Dialysis is a treatment that does the work of failing kidneys by filtering waste and extra fluid from your blood.',
      explanation: `When your kidneys stop working properly, they cannot clean your blood or remove extra water. Dialysis is a medical treatment that does these jobs for you.

**There are Two Main Types:**

1. **Hemodialysis ("Hemo")**
   - Your blood is pumped through a special machine
   - The machine filters out waste and extra fluid
   - Clean blood returns to your body
   - Usually done at a dialysis center, 3 times a week
   - Each treatment takes about 3-4 hours

2. **Peritoneal Dialysis ("PD")**
   - Uses the lining of your belly (peritoneum) as a filter
   - Special fluid is put into your belly through a tube
   - Waste moves from your blood into the fluid
   - The fluid is then drained out
   - Can be done at home, even while you sleep

**Why People Need Dialysis:**
- Kidneys have failed or are close to failing
- Waste products build up in the blood
- Extra fluid causes swelling and breathing problems
- Potassium levels get dangerously high
- Too much acid builds up in the body

Dialysis does not cure kidney disease, but it keeps people alive while they wait for a kidney transplant or if they are not candidates for transplant.`,
      keyTerms: [
        { term: 'dialysis', definition: 'A treatment that filters waste and fluid from blood when kidneys fail' },
        { term: 'hemodialysis', definition: 'Dialysis that uses a machine to filter blood outside the body', pronunciation: 'hee-mo-dye-AL-ih-sis' },
        { term: 'peritoneal dialysis', definition: 'Dialysis that uses the belly lining as a filter', pronunciation: 'pair-ih-toh-NEE-al' },
        { term: 'kidney failure', definition: 'When kidneys can no longer filter blood properly' },
        { term: 'transplant', definition: 'Surgery to put a healthy kidney from another person into your body' },
      ],
      analogies: [
        'Hemodialysis is like a washing machine for your blood - dirty blood goes in, clean blood comes out.',
        'Peritoneal dialysis is like a coffee maker - fluid goes in, sits to collect waste, then drains out.',
        'The dialyzer filter works like a spaghetti strainer - small particles pass through, big particles stay behind.',
      ],
      examples: [
        'Most people on hemodialysis go to a clinic Monday, Wednesday, and Friday for their treatments.',
        'Peritoneal dialysis can be done while you sleep using a machine called a cycler.',
        'Some people do peritoneal dialysis during the day, exchanging fluid 4 times daily.',
      ],
    },
    2: {
      level: 2,
      summary: 'Dialysis is renal replacement therapy that removes waste products, corrects electrolyte imbalances, and manages fluid status in patients with end-stage kidney disease through hemodialysis or peritoneal dialysis modalities.',
      explanation: `**Indications for Dialysis (AEIOU):**
- **A**cidosis (severe, refractory)
- **E**lectrolyte abnormalities (hyperkalemia)
- **I**ntoxications (lithium, methanol, ethylene glycol, salicylates)
- **O**verload (fluid, refractory pulmonary edema)
- **U**remia (symptomatic - pericarditis, encephalopathy, bleeding)

**Hemodialysis:**

**Principles:**
- Blood pumped through extracorporeal circuit at 200-400 mL/min
- Dialysate solution flows counter-current to blood
- Diffusion: Waste moves down concentration gradient
- Ultrafiltration: Fluid removed by pressure gradient
- Clearance measured by urea reduction ratio (URR) or Kt/V

**Access Types:**
1. **Arteriovenous Fistula (AVF):** Gold standard
   - Surgical connection of artery to vein
   - Matures in 6-12 weeks
   - Lowest infection rate, longest patency

2. **Arteriovenous Graft (AVG):**
   - Synthetic tube connecting artery and vein
   - Can be used in 2-3 weeks
   - Higher thrombosis and infection rates than AVF

3. **Central Venous Catheter:**
   - Temporary or tunneled (perm-cath)
   - Immediate use
   - Highest infection and thrombosis risk

**Peritoneal Dialysis:**

**Principles:**
- Peritoneum acts as semipermeable membrane
- Dialysate instilled into peritoneal cavity
- Dwell time allows diffusion and osmosis
- Dextrose or icodextrin creates osmotic gradient for fluid removal
- Exchanges done manually (CAPD) or with cycler (APD)

**Access:**
- Tenckhoff catheter placed into peritoneum
- Healing period: 2-3 weeks before use

**Modalities:**
- **CAPD (Continuous Ambulatory):** 4-5 exchanges daily, manual
- **APD (Automated):** Cycler performs exchanges overnight`,
      keyTerms: [
        { term: 'Kt/V', definition: 'Dialysis adequacy measure; K (clearance) x t (time) / V (volume)', pronunciation: 'K-T-over-V' },
        { term: 'AVF', definition: 'Arteriovenous fistula; surgical connection of artery to vein for dialysis access' },
        { term: 'dialysate', definition: 'Fluid used in dialysis to draw waste from blood through osmosis and diffusion' },
        { term: 'ultrafiltration', definition: 'Removal of fluid during dialysis using pressure gradient' },
        { term: 'uremia', definition: 'Buildup of urea and other waste products in blood due to kidney failure' },
      ],
      analogies: [
        'The dialyzer membrane is like a fine mesh screen - it lets small waste molecules through but keeps blood cells and proteins in.',
        'Osmosis in PD is like using a sponge to soak up water - the sugary dialysate pulls water across the peritoneal membrane.',
        'Blood flow through an AV fistula is like a river - the high flow rate allows efficient dialysis.',
      ],
    },
    3: {
      level: 3,
      summary: 'Dialysis utilizes principles of diffusion, convection, and ultrafiltration across semipermeable membranes, with modality selection based on patient factors, vascular anatomy, lifestyle considerations, and dialysis adequacy targets.',
      explanation: `**Physiology of Dialysis:**

**Transport Mechanisms:**
1. **Diffusion:** Movement down concentration gradient
   - Small molecules (urea, creatinine, potassium) efficiently cleared
   - Larger molecules (beta-2 microglobulin) poorly cleared by diffusion

2. **Convection (Solvent Drag):** Solutes carried with fluid
   - Important in high-flux dialysis and hemofiltration
   - Better middle molecule clearance

3. **Ultrafiltration:** Fluid removal by transmembrane pressure
   - Rate determined by hydrostatic pressure gradient
   - Must balance interdialytic weight gain vs hypotension risk

**Hemodialysis Technical Details:**

**Dialyzer Specifications:**
- Membrane surface area: 1.0-2.5 m²
- Membrane types:
  - Low-flux: Cellulose-based, limited middle molecule clearance
  - High-flux: Synthetic, better clearance of larger molecules
- KoA (mass transfer coefficient x area): Determines efficiency

**Dialysate Composition:**
- Sodium: 135-145 mEq/L (variable programs available)
- Potassium: 0-4 mEq/L (based on serum K+)
- Calcium: 2.5 mEq/L (maintain positive calcium balance)
- Bicarbonate: 35-40 mEq/L (correct acidosis)
- Glucose: 100-200 mg/dL
- Temperature: 35.5-37.5°C

**Vascular Access Physiology:**

**AVF Requirements:**
- Blood flow > 600 mL/min for effective dialysis
- Vein diameter > 4 mm, depth < 6 mm for cannulation
- Rule of 6s at 6 weeks: Diameter 6 mm, depth 6 mm, flow 600 mL/min

**Access Monitoring:**
- Physical exam: Thrill (palpable vibration) should be present
- Monthly flow monitoring
- Declining flow suggests stenosis

**Peritoneal Dialysis Physiology:**

**Peritoneal Membrane Characteristics:**
- Surface area: ~1-2 m² (varies with body size)
- Three pore model:
  - Small pores (radius 40-50 Å): Water and solutes
  - Large pores (radius 250 Å): Proteins
  - Ultrasmall pores (aquaporins): Water only

**Transport Types (PET Classification):**
- **High transporters:** Fast solute transfer, poor ultrafiltration
- **Low transporters:** Slow solute transfer, good ultrafiltration
- **High average/Low average:** Intermediate

**Osmotic Agents:**
- Dextrose: 1.5%, 2.5%, 4.25% solutions
- Icodextrin: Glucose polymer, provides sustained ultrafiltration
- Amino acid solutions: Nutritional support

**Dialysis Adequacy:**

**Hemodialysis:**
- Kt/V urea target: > 1.2 per treatment (3x/week)
- URR target: > 65%
- Calculated from pre/post BUN, treatment time, UF volume

**Peritoneal Dialysis:**
- Weekly Kt/V target: > 1.7
- Includes renal residual function (important in early ESRD)

**Preservation of Residual Function:**
- Associated with better outcomes
- ACE inhibitors may slow loss
- Avoid nephrotoxins`,
      keyTerms: [
        { term: 'high-flux dialysis', definition: 'Hemodialysis using highly permeable membranes for better middle molecule clearance' },
        { term: 'PET', definition: 'Peritoneal equilibration test; measures solute transport characteristics of peritoneal membrane' },
        { term: 'middle molecules', definition: 'Solutes with molecular weight 500-5000 Daltons; poorly cleared by low-flux dialysis' },
        { term: 'interdialytic weight gain', definition: 'Weight gain between dialysis sessions from fluid intake' },
        { term: 'KoA', definition: 'Mass transfer coefficient x membrane area; measure of dialyzer efficiency' },
      ],
      clinicalNotes: 'AVF is preferred access due to lower infection and mortality rates. Catheters should be avoided when possible. Residual renal function significantly impacts dialysis adequacy and patient outcomes - preserve with ACE inhibitors and avoid nephrotoxins.',
    },
    4: {
      level: 4,
      summary: 'Comprehensive dialysis management requires understanding of access complications, intradialytic complications, long-term complications, and individualized prescription adjustments based on adequacy measures and patient tolerance.',
      explanation: `**Hemodialysis Complications:**

**Intradialytic Hypotension:**
- Most common complication (20-30% of treatments)
- Causes: Excessive ultrafiltration, autonomic dysfunction, cardiac disease
- Risk factors: Large interdialytic weight gain, high ultrafiltration rate, diabetes
- Prevention: Sodium profiling, cool dialysate, sequential UF, midodrine
- Treatment: Trendelenburg, stop UF, saline bolus

**Muscle Cramps:**
- Caused by rapid fluid removal, hyponatremia
- Treatment: Hypertonic saline or mannitol, stretch, reduce UF rate

**Dialysis Disequilibrium Syndrome:**
- Rare, occurs in new patients or severe uremia
- Brain edema from rapid osmotic shifts
- Symptoms: Headache, nausea, seizures, coma
- Prevention: Short initial treatments, reduced blood flow

**Access Complications:**

**Stenosis:**
- Venous stenosis most common at graft/vein anastomosis or central veins
- Signs: Decreased thrill, prolonged bleeding post-cannulation, high venous pressure
- Diagnosis: Duplex ultrasound, fistulogram
- Treatment: Angioplasty, stenting, surgical revision

**Thrombosis:**
- Graft: 1-2 episodes per year
- Fistula: Lower rate (0.5/year)
- Treatment: Thrombectomy, often with angioplasty of underlying stenosis

**Infection:**
- AVF: Very low rate
- Graft: Higher risk
- Catheter: Major risk - exit site, tunnel, bacteremia
- Empiric antibiotics: Cover Staph aureus

**Steal Syndrome:**
- Ischemia distal to AV access due to blood diversion
- Grades: Mild (cold hand) to severe (rest pain, tissue loss)
- Treatment: Banding, ligation if severe

**Long-Term HD Complications:**

**Cardiovascular:**
- Left ventricular hypertrophy
- Intradialytic hypertension
- Arrhythmias
- Sudden cardiac death (leading cause of death in ESRD)

**Bone Disease:**
- Secondary hyperparathyroidism
- Adynamic bone disease (oversuppression of PTH)
- Vascular calcification

**Anemia:**
- Erythropoietin deficiency
- Iron deficiency (functional and absolute)
- Hemolysis

**Peritoneal Dialysis Complications:**

**Peritonitis:**
- 1 episode every 1-2 years
- Presentation: Cloudy effluent, abdominal pain, fever
- Diagnosis: Cell count > 100/µL with > 50% neutrophils
- Empiric therapy: Cover gram-positive and gram-negative
- Most common organisms: Staph epidermidis, Staph aureus, gram-negatives

**Catheter-Related Infections:**
- Exit site infection: Erythema, purulence at exit
- Tunnel infection: Tenderness over subcutaneous tunnel
- Treatment: Antibiotics, often need catheter removal

**Mechanical Complications:**
- Hernias (incisional, inguinal, umbilical)
- Leaks (hydrothorax, abdominal wall)
- Catheter malfunction (fibrin, omentum wrapping)

**Metabolic Complications:**
- Hyperglycemia (from dextrose absorption)
- Hypertriglyceridemia
- Obesity
- Protein loss (5-15 g/day)

**Encapsulating Peritoneal Sclerosis (EPS):**
- Rare, serious complication
- Sclerotic membrane encases bowel
- Risk factors: Long duration PD, peritonitis episodes
- Treatment: Immunosuppression, surgery

**Dialysis Prescription Individualization:**

**Hemodialysis:**
- Frequency: 3x/week standard; 4-6x/week for large patients or inadequate clearance
- Duration: 3.5-4.5 hours
- Blood flow: 300-450 mL/min
- Dialysate flow: 500-800 mL/min
- UF rate: < 10-13 mL/kg/hour to minimize hypotension

**Extended/Nocturnal HD:**
- 6-8 hours, 3-6 nights/week
- Better phosphate and volume control
- Improved blood pressure, sleep
- Lower mortality in observational studies

**Peritoneal Dialysis Prescription:**
- Dwell volumes: 1.5-2.5 L (based on body size)
- Exchange frequency: Based on transport type and needs
- Dextrose concentration: Minimize high concentrations to preserve membrane`,
      keyTerms: [
        { term: 'dialysis disequilibrium syndrome', definition: 'Neurological syndrome from rapid osmotic shifts during dialysis; brain edema' },
        { term: 'steal syndrome', definition: 'Ischemia of the hand distal to an AV access due to blood flow diversion' },
        { term: 'encapsulating peritoneal sclerosis', definition: 'Sclerotic thickening of peritoneum encasing bowel; serious late complication of PD' },
        { term: 'secondary hyperparathyroidism', definition: 'Excess PTH secretion in response to hypocalcemia, hyperphosphatemia, and low vitamin D in CKD' },
        { term: 'erythropoietin', definition: 'Hormone that stimulates red blood cell production; deficient in kidney failure' },
      ],
      clinicalNotes: 'Intradialytic hypotension is the most common acute complication - minimize by limiting interdialytic weight gain to < 4-5% body weight and avoiding excessive ultrafiltration rates. Peritonitis in PD is diagnosed by effluent cell count > 100 with > 50% neutrophils - cloudy bag is the key clinical sign.',
    },
    5: {
      level: 5,
      summary: 'Advanced dialysis management encompasses home dialysis modalities, intensive hemodialysis protocols, complications specific to special populations, transition to transplant, and end-of-life decision making in the dialysis population.',
      explanation: `**Home Dialysis Programs:**

**Home Hemodialysis (HHD):**
- Short daily (2-3 hours, 5-6 days/week)
- Nocturnal (6-8 hours, 3-6 nights/week)
- Requires trained partner, home modifications
- Advantages: Flexibility, better volume/phosphate control, survival benefit

**Peritoneal Dialysis Advances:**
- Remote monitoring: Cloud-based cycler data transmission
- Assisted PD: Nurse-assisted exchanges for frail patients
- Incremental PD: Start with fewer exchanges, increase as residual function declines

**Intensive HD Protocols:**

**Frequent Hemodialysis Network Trials:**
- Daily dialysis (6x/week) vs conventional (3x/week)
- Improved blood pressure control, LV mass reduction
- No survival benefit in RCT (underpowered)
- Higher vascular access complications with frequent HD

**Optimal Start:**
- Planned transition to dialysis
- AVF creation when eGFR 15-20 mL/min
- PD catheter placed before needed
- Education about all modalities
- "Urgent start" PD possible immediately after catheter placement

**Special Populations:**

**Elderly:**
- Frailty assessment important
- Conservative management (no dialysis) reasonable option
- Higher mortality on dialysis in elderly with comorbidities
- Shared decision-making essential

**Diabetes:**
- Higher cardiovascular mortality
- Autonomic dysfunction increases hypotension risk
- PD: Higher peritonitis risk, ultrafiltration failure
- Intensive glycemic control less beneficial in ESRD

**Pregnancy:**
- Intensive HD (5-6x/week) preferred
- Target pre-dialysis BUN < 50 mg/dL
- Fetal outcomes better than standard HD
- PD possible but becomes difficult as uterus enlarges

**Cardiovascular Disease:**
- Leading cause of death in ESRD
- Sudden cardiac death 50% of cardiac deaths
- Implantable defibrillators may not improve outcomes
- Volume control most important intervention

**Infectious Disease Considerations:**

**Hepatitis B:**
- Isolation precautions required
- Universal vaccination recommended
- Antiviral prophylaxis for non-immune patients

**Hepatitis C:**
- Direct-acting antivirals highly effective
- Treat before transplant

**Antibiotic Dosing:**
- Renally cleared drugs: Dose after HD, or supplemental dose
- PD: Intraperitoneal administration for peritonitis

**Transition to Transplant:**

**Evaluation Process:**
- Medical: Cardiovascular, cancer screening, infections
- Psychosocial: Support system, adherence
- Sensitization: PRA levels, donor-specific antibodies

**Transplant Types:**
- Deceased donor: Waitlist varies by region (3-7 years)
- Living donor: Preemptive (before dialysis) preferred
- ABO-incompatible and paired exchange programs

**Immunosuppression:**
- Induction: Anti-thymocyte globulin or basiliximab
- Maintenance: Tacrolimus, mycoprolate, prednisone
- Steroid-minimizing protocols

**Contraindications to Transplant:**
- Active malignancy (most)
- Active infection
- Severe cardiac disease
- Ongoing substance abuse
- Poor adherence

**Conservative Management (No Dialysis):**

**Appropriate Candidates:**
- Elderly with significant comorbidities
- Severe frailty
- Advanced dementia
- Patient preference after informed consent

**Components:**
- Medication management
- Symptom control
- Advance care planning
- Palliative care involvement
- Expected survival: Days to months (variable)

**Outcomes Comparison:**
- Elderly with high comorbidity: No survival advantage to dialysis
- Quality of life may be better with conservative management
- Requires honest, empathic discussions

**Quality Metrics and Outcomes:**

**CMS Quality Measures:**
- Kt/V adequacy
- Hypercalcemia control
- Fluid weight management
- Anemia management
- Vascular access type

**Patient-Reported Outcomes:**
- KDQOL (Kidney Disease Quality of Life)
- Fatigue scales
- Depression screening

**Innovation in Dialysis:**

**Wearable/Implantable Devices:**
- WAK (Wearable Artificial Kidney): Portable HD
- Implantable artificial kidney: Bioengineered with silicon filters

**Xenotransplantation:**
- Gene-edited pig kidneys
- Clinical trials beginning

**Bioartificial Kidney:**
- Combines hemofilter with renal tubule cells
- Potential for endocrine function restoration`,
      keyTerms: [
        { term: 'conservative management', definition: 'Non-dialytic care for ESRD focusing on symptom control and quality of life' },
        { term: 'preemptive transplant', definition: 'Kidney transplant performed before initiation of dialysis' },
        { term: 'sudden cardiac death', definition: 'Unexpected death from cardiac causes; leading cause of death in ESRD' },
        { term: 'incremental dialysis', definition: 'Starting with less intensive dialysis and increasing as residual function declines' },
        { term: 'frailty', definition: 'Multidimensional syndrome of decreased reserve and resistance to stressors; common in elderly dialysis patients' },
      ],
      clinicalNotes: `Advanced practice pearls:
1. Home dialysis (HD or PD) is underutilized but offers better outcomes and quality of life
2. Conservative management (no dialysis) is a valid option for elderly, frail patients - median survival 6-12 months vs dialysis 1-2 years, but quality of life may be better
3. Pregnancy on dialysis requires intensive HD (5-6x/week) - outcomes approach general population
4. Transplant evaluation should begin when eGFR < 30 - preemptive transplant is best outcome
5. Residual renal function significantly impacts outcomes - preserve with ACE inhibitors, avoid nephrotoxins
6. Sudden cardiac death accounts for 50% of cardiac deaths in dialysis - volume control is key prevention`,
    },
  },

  media: [
    {
      id: 'dialysis-machine',
      type: 'diagram',
      filename: 'hemodialysis-machine.svg',
      title: 'Hemodialysis Machine Schematic',
      description: 'Blood and dialysate flow through the dialyzer',
    },
  ],

  citations: [
    {
      id: 'daugirdas-handbook',
      type: 'textbook',
      title: 'Handbook of Dialysis',
      authors: ['Daugirdas, J.T.'],
      source: 'Lippincott Williams & Wilkins',
    },
    {
      id: 'kdigo-dialysis',
      type: 'article',
      title: 'KDIGO 2020 Clinical Practice Guideline for Diabetes Management in CKD',
      source: 'Kidney International',
    },
  ],

  crossReferences: [
    { targetId: 'clinical-kidney-transplantation', targetType: 'concept', relationship: 'related', label: 'Kidney Transplantation' },
    { targetId: 'condition-chronic-kidney-disease', targetType: 'condition', relationship: 'related', label: 'Chronic Kidney Disease' },
    { targetId: 'condition-acute-kidney-injury', targetType: 'condition', relationship: 'related', label: 'Acute Kidney Injury' },
  ],

  tags: {
    systems: ['renal'],
    topics: ['clinical', 'procedures', 'chronic-disease'],
    keywords: ['dialysis', 'hemodialysis', 'peritoneal dialysis', 'ESRD', 'renal replacement therapy'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default dialysisBasics;
