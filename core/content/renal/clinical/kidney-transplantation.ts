/**
 * Kidney Transplantation - Clinical Educational Content
 *
 * Covers transplant evaluation, surgical technique, immunosuppression,
 * rejection, and long-term management.
 */

import { EducationalContent } from '../../types';

export const kidneyTransplantation: EducationalContent = {
  id: 'clinical-kidney-transplantation',
  type: 'concept',
  name: 'Kidney Transplantation',
  alternateNames: ['Renal Transplant', 'Kidney Transplant', 'Renal Allograft', 'Organ Transplantation'],

  levels: {
    1: {
      level: 1,
      summary: 'Kidney transplantation is a surgery that places a healthy kidney from another person into someone whose kidneys have failed.',
      explanation: `A kidney transplant is the best treatment for most people with kidney failure. Instead of dialysis cleaning your blood a few times a week, a new kidney works full-time.

**Where Do Kidneys Come From?**

1. **Living Donors**
   - Usually a family member or close friend
   - Can also be an altruistic stranger
   - One kidney is enough to live a healthy life
   - The donor\'s remaining kidney grows larger to compensate

2. **Deceased Donors**
   - People who have died and chose to donate their organs
   - Added to the national waiting list
   - Wait time varies from months to years

**The Surgery:**
- The new kidney is placed in the lower belly
- Your own kidneys usually stay in place
- The new kidney\'s blood vessels are connected to your blood vessels
- The ureter (tube that drains urine) is connected to your bladder

**After Transplant:**
- You take medications to prevent rejection
- These are called immunosuppressants
- You need regular check-ups with the transplant team
- Most people live much longer and better than on dialysis

A kidney transplant is not a cure for kidney disease, but it gives you the closest thing to a normal life.`,
      keyTerms: [
        { term: 'transplant', definition: 'Surgery to place an organ from one person into another' },
        { term: 'living donor', definition: 'A person who gives one of their kidneys while alive' },
        { term: 'immunosuppressants', definition: 'Medications that prevent the body from attacking the new kidney' },
        { term: 'rejection', definition: 'When the immune system attacks the transplanted kidney' },
        { term: 'ureter', definition: 'The tube that carries urine from the kidney to the bladder' },
      ],
      analogies: [
        'A kidney transplant is like getting a new engine for your car - it replaces the broken one and runs much better.',
        'Immunosuppressants are like security guards that keep peace between the new kidney and your body\'s defense system.',
        'The waiting list is like a line at a popular restaurant - you wait your turn based on how sick you are and how long you have been waiting.',
      ],
      examples: [
        'A parent might donate a kidney to their child who has kidney failure.',
        'Someone on the deceased donor list might wait 3-5 years for a kidney.',
        'After transplant, people take medications every day for the rest of their life.',
      ],
    },
    2: {
      level: 2,
      summary: 'Kidney transplantation provides superior outcomes compared to dialysis, involving donor evaluation, recipient selection, surgical techniques, and lifelong immunosuppression management to prevent allograft rejection.',
      explanation: `**Types of Kidney Transplants:**

**Living Donor Transplant:**
- Preemptive (before dialysis): Best outcomes
- Reduced cold ischemia time
- Elective scheduling
- Genetic relationship improves matching
- Options: Directed, non-directed, paired exchange

**Deceased Donor Transplant:**
- Standard criteria donor (SCD)
- Extended criteria donor (ECD): Age > 60 or age 50-59 with comorbidities
- Donation after cardiac death (DCD)
- Cold ischemia time limit: < 24-30 hours

**Recipient Evaluation:**

**Absolute Contraindications:**
- Active malignancy (with exceptions)
- Active infection
- Severe irreversible cardiac disease
- Severe pulmonary hypertension
- Ongoing substance abuse
- Poor adherence history

**Relative Contraindications:**
- Advanced age
- Significant comorbidities
- Obesity (BMI > 35-40)
- HIV (no longer absolute with HAART)
- Hepatitis C (treatable)

**Medical Evaluation Components:**
- Cardiovascular: Stress testing, echo
- Cancer screening: Age-appropriate
- Infectious: Hepatitis B/C, HIV, TB, CMV, EBV
- Psychosocial: Support system, understanding, adherence
- Anatomic: Vesicoureteral reflux, bladder function

**Donor Evaluation:**
- Blood type compatibility
- HLA typing and crossmatch
- Medical evaluation: Renal function, comorbidities
- Psychosocial: Voluntary, informed consent
- Anatomic: Vascular anatomy (CT angiography)

**Surgical Technique:**

**Recipient Operation:**
- Retroperitoneal placement in iliac fossa
- Renal artery anastomosis to external iliac artery
- Renal vein anastomosis to external iliac vein
- Ureter reimplanted into bladder (extravesical technique)
- Ureteral stent often placed

**Post-Operative Course:**
- Hospital stay: 3-5 days
- Foley catheter: 3-5 days
- Immediate graft function vs delayed graft function
- Close monitoring of urine output and creatinine`,
      keyTerms: [
        { term: 'allograft', definition: 'Tissue or organ transplanted from one individual to another of the same species' },
        { term: 'HLA', definition: 'Human leukocyte antigen; proteins on cell surfaces that determine immune matching', pronunciation: 'each-el-ay' },
        { term: 'crossmatch', definition: 'Test mixing recipient serum with donor lymphocytes to check for pre-formed antibodies' },
        { term: 'cold ischemia time', definition: 'Time organ is preserved on ice without blood flow; longer times worse outcomes' },
        { term: 'delayed graft function', definition: 'Need for dialysis in first week after transplant; common in DCD and ECD kidneys' },
      ],
      analogies: [
        'HLA matching is like finding a compatible blood type but much more complex - the better the match, the less likely rejection.',
        'Immunosuppression is like dimming the immune system\'s "alarm system" so it does not notice the new kidney.',
        'A living donor transplant is like ordering takeout - planned and fresh; deceased donor is like a surprise delivery.',
      ],
    },
    3: {
      level: 3,
      summary: 'Transplant immunology involves HLA matching, crossmatching, immunosuppressive protocols, and surveillance for rejection, requiring integration of immunological principles with clinical management strategies.',
      explanation: `**Transplant Immunology:**

**HLA System:**
- Class I: HLA-A, HLA-B, HLA-C (expressed on all nucleated cells)
- Class II: HLA-DR, HLA-DQ, HLA-DP (expressed on antigen-presenting cells)
- Inherited from parents (one haplotype from each)
- Sibling chance of HLA match: 25% identical, 50% one haplotype, 25% none

**Crossmatching:**
- CDC (complement-dependent cytotoxicity): Positive = contraindication
- Flow cytometry: More sensitive, detects low-level antibodies
- DSA (donor-specific antibodies): Pre-formed antibodies against donor HLA
- Virtual crossmatch: Predictive based on recipient antibody profile

**Immunosuppression Protocols:**

**Induction Therapy:**
- Goal: Prevent acute rejection in high-risk period
- Options:
  - Basiliximab (anti-IL-2 receptor, Simulect)
  - Anti-thymocyte globulin (ATG, Thymoglobulin)
  - Alemtuzumab (Campath)
- ATG used for high immunologic risk, DCD kidneys, delayed graft function

**Maintenance Immunosuppression:**

**Calcineurin Inhibitors:**
- Tacrolimus (Prograf): Primary agent
- Cyclosporine (Neoral): Alternative
- Mechanism: Block IL-2 production
- Narrow therapeutic window, nephrotoxic
- Levels monitored closely

**Antiproliferative Agents:**
- Mycophenolate mofetil (Cellcept): Primary
- Mycophenolic acid (Myfortic)
- Azathioprine (Imuran): Older alternative
- Mechanism: Block lymphocyte proliferation

**Steroids:**
- Prednisone: Historically universal
- Steroid-minimizing/avoiding protocols now common
- Acute rejection treatment

**mTOR Inhibitors:**
- Sirolimus (Rapamune)
- Everolimus (Zortress)
- Mechanism: Block IL-2 signaling
- Use limited due to side effects

**Common Protocols:**
- Tacrolimus + Mycophenolate +/- Steroids (most common)
- Steroid-free protocols in selected patients
- Belatacept-based (costimulation blockade) for CNI avoidance

**Acute Rejection:**

**Types:**
1. **T-cell mediated (cellular):**
   - T cells attack graft
   - Responds to steroids
   - Biopsy: Lymphocytic infiltrate, tubulitis

2. **Antibody-mediated (humoral):**
   - Antibodies against donor HLA
   - More difficult to treat
   - Biopsy: C4d staining, microvascular inflammation
   - Requires plasmapheresis, IVIG, rituximab

**Banff Classification:**
- Standardized scoring system for rejection
- Grades: Borderline, IA, IB, IIA, IIB, III

**Diagnosis:**
- Rising creatinine
- Graft tenderness, fever (classic, now uncommon)
- Biopsy: Gold standard

**Treatment:**
- Pulse steroids: 250-500 mg methylprednisolone x 3 days
- ATG for steroid-resistant
- Plasmapheresis + IVIG for antibody-mediated`,
      keyTerms: [
        { term: 'DSA', definition: 'Donor-specific antibody; antibody against donor HLA antigens' },
        { term: 'calcineurin inhibitor', definition: 'Drug class including tacrolimus and cyclosporine that blocks IL-2 production' },
        { term: 'C4d', definition: 'Complement split product; marker of antibody-mediated rejection on biopsy' },
        { term: 'tacrolimus', definition: 'Primary calcineurin inhibitor used in transplant immunosuppression' },
        { term: 'mycophenolate', definition: 'Antiproliferative agent that inhibits purine synthesis in lymphocytes' },
      ],
      clinicalNotes: 'Tacrolimus trough levels typically targeted at 8-12 ng/mL early post-transplant, tapered to 4-6 ng/mL long-term. Mycophenolate dose limited by GI side effects and leukopenia. ATG induction preferred for high-risk patients and DCD kidneys.',
    },
    4: {
      level: 4,
      summary: 'Comprehensive transplant management involves monitoring for rejection and complications, managing immunosuppression side effects, preventing and treating infections, and addressing long-term cardiovascular and metabolic complications.',
      explanation: `**Surveillance and Monitoring:**

**Early Post-Transplant (0-3 months):**
- Creatinine 2-3x weekly initially
- Tacrolimus levels with each visit
- BK virus PCR monthly
- CMV prophylaxis (valganciclovir) for high-risk
- Urine culture surveillance

**Late Post-Transplant:**
- Creatinine monthly
- Tacrolimus levels every 1-3 months
- Annual BK PCR
- Cancer screening per guidelines

**Protocol Biopsies:**
- Controversial; some centers perform at 3-12 months
- Detect subclinical rejection
- Assess chronic changes

**Infectious Complications:**

**Timeline of Infection:**
- **Month 0-1:** Donor-derived, surgical site, hospital-acquired
- **Month 1-6:** Opportunistic (CMV, PJP, fungal), reactivation
- **Month 6+:** Community-acquired, chronic viral, malignancy-related

**Cytomegalovirus (CMV):**
- Risk: Donor+/Recipient- highest
- Manifestations: Fever, leukopenia, transaminitis, pneumonitis, colitis
- Prevention: Valganciclovir prophylaxis 3-6 months
- Treatment: IV ganciclovir or oral valganciclovir

**BK Polyomavirus:**
- Reactivation in 10-30% of kidney recipients
- BK nephropathy: 1-10%
- Graft loss risk if untreated
- Monitoring: Monthly PCR first 6 months
- Treatment: Reduce immunosuppression, IVIG, cidofovir rarely

**Pneumocystis jirovecii (PJP):**
- Prevention: TMP-SMX for 6-12 months
- Alternative: Dapsone, atovaquone, pentamidine

**Fungal:**
- Candida (thrush, UTIs)
- Aspergillus (pneumonia)
- Prophylaxis: Nystatin or fluconazole (variable practice)

**Malignancy Risk:**

**Skin Cancer:**
- Squamous cell carcinoma most common
- 100x increased risk
- Sun protection essential
- Regular dermatology screening

**PTLD (Post-Transplant Lymphoproliferative Disorder):**
- Associated with EBV
- Reduce immunosuppression first step
- May require chemotherapy, rituximab

**Other Cancers:**
- Cervical, anal (HPV-related)
- Kaposi sarcoma (HHV-8)
- Colon, breast, prostate (routine screening)

**Metabolic Complications:**

**New-Onset Diabetes After Transplant (NODAT):**
- Incidence: 10-30%
- Risk factors: Steroids, tacrolimus, obesity, hepatitis C
- Management: Metformin (if eGFR > 30), insulin, lifestyle

**Dyslipidemia:**
- Steroids, mTOR inhibitors worsen lipids
- Statins (but interaction with CNIs)

**Hypertension:**
- Calcineurin inhibitors cause vasoconstriction
- Target < 130/80

**Bone Disease:**
- Pre-existing renal osteodystrophy
- Steroid-induced bone loss
- Bisphosphonates, vitamin D

**Cardiovascular Disease:**
- Leading cause of death with functioning graft
- Aggressive risk factor modification
- Statin therapy universal

**Chronic Allograft Injury (CAI):**

**Formerly "Chronic Rejection":**
- Progressive fibrosis and atrophy
- Multifactorial: Immunologic and non-immunologic

**Causes:**
- Antibody-mediated injury
- Calcineurin inhibitor toxicity
- Hypertension
- Hyperlipidemia
- BK nephropathy
- Recurrent disease

**Management:**
- Optimize immunosuppression
- Convert CNI to mTOR or belatacept
- Control BP, lipids
- No proven effective therapy

**Recurrent Disease:**
- FSGS: 20-50% recurrence
- Membranous GN: 10-30%
- IgA nephropathy: Common histologically, rarely causes failure
- Diabetic nephropathy: Universal long-term

**Pregnancy After Transplant:**
- Timing: > 1 year post-transplant, stable graft function
- Immunosuppression: Continue tacrolimus, mycophenolate (pregnancy category D)
- Convert mycophenolate to azathioprine pre-conception
- Prednisone safe
- 80-90% live birth rate
- Preeclampsia risk 30%
- Graft function usually stable

**Graft Failure:**
- Return to dialysis or re-transplant
- Immunosuppression typically tapered
- Graft nephrectomy if symptomatic (ongoing rejection, hematuria)` ,
      keyTerms: [
        { term: 'BK virus', definition: 'Polyomavirus that causes nephropathy in kidney transplant recipients' },
        { term: 'NODAT', definition: 'New-onset diabetes after transplant' },
        { term: 'PTLD', definition: 'Post-transplant lymphoproliferative disorder; EBV-associated lymphoid proliferation' },
        { term: 'chronic allograft injury', definition: 'Progressive fibrosis and loss of kidney function months to years post-transplant' },
        { term: 'valganciclovir', definition: 'Oral antiviral used for CMV prevention and treatment' },
      ],
      clinicalNotes: 'CMV prophylaxis with valganciclovir is standard for high-risk (D+/R-) patients for at least 6 months. BK virus monitoring is essential - monthly PCR for first 6 months, then every 3 months. Reduce immunosuppression if BK viremia persists > 10,000 copies. Skin cancer screening is critical - transplant patients have 100x increased risk of squamous cell carcinoma.',
    },
    5: {
      level: 5,
      summary: 'Advanced transplant medicine encompasses desensitization protocols, ABO-incompatible transplantation, paired exchange programs, novel immunosuppression strategies, and management of highly sensitized patients including re-transplantation considerations.',
      explanation: `**Sensitization and Desensitization:**

**Highly Sensitized Patients:**
- PRA > 80% or cPRA > 95%
- Previous transplants, pregnancies, transfusions
- Longer wait times, higher rejection risk

**Desensitization Protocols:**
- High-dose IVIG
- Plasmapheresis
- Rituximab (anti-CD20)
- Bortezomib (proteasome inhibitor)
- Goal: Reduce DSA levels to enable transplant

**ABO-Incompatible Transplantation:**
- Pre-transplant desensitization
- Rituximab, plasmapheresis
- Splenectomy rarely needed now
- Outcomes approach ABO-compatible

**Paired Exchange (Kidney Swap):**
- Incompatible donor-recipient pairs exchange donors
- Chain transplants (non-directed donors)
- National registry (UNOS) and local programs
- Increases living donor transplants

**Novel Immunosuppression:**

**Costimulation Blockade:**
- Belatacept (Nulojix): Blocks CD28-B7 interaction
- Avoids CNI nephrotoxicity
- Monthly IV infusion
- Better renal function but higher rejection risk
- EBV seropositive patients only (PTLD risk)

**Tofacitinib (JAK inhibitor):**
- Oral alternative
- Investigational in transplant

**Complement Inhibition:**
- Eculizumab: For antibody-mediated rejection
- Very expensive
- Limited availability

**Operational Tolerance:**
- Rare patients maintaining graft function without immunosuppression
- Research into biomarkers and protocols to induce tolerance
- Not yet standard of care

**Xenotransplantation:**
- Pig-to-human kidney transplants
- Gene-edited pigs (knockout of carbohydrate antigens)
- Clinical trials beginning
- Potential solution to organ shortage

**Machine Perfusion:**
- Hypothermic machine perfusion (HMP)
- Normothermic machine perfusion (NMP)
- Extends preservation time
- Improves graft function, especially ECD/DCD kidneys
- Allows assessment of organ viability

**Re-Transplantation:**

**Indications:**
- Graft failure (rejection, chronic allograft injury)
- Recurrent disease

**Challenges:**
- Higher sensitization
- Surgical complexity
- Psychosocial evaluation

**Outcomes:**
- Second graft survival slightly less than first
- Third+ grafts: Diminishing returns

**Ethical Considerations:**

**Organ Allocation:**
- Utility vs equity
- Age matching
- Geographic disparities
- Financial barriers

**Living Donor Risks:**
- Long-term single kidney outcomes excellent
- Mortality risk: 0.03%
- Psychosocial evaluation critical
- Insurance and follow-up concerns

**Financial Toxicity:**
- Lifetime medication costs
- Insurance coverage gaps
- Medicare coverage limited to 3 years
- Non-adherence due to cost

**Expanded Donor Pools:**

**Hepatitis C Positive Donors:**
- DAA (direct-acting antiviral) treatment post-transplant
- Excellent outcomes
- Expansion of donor pool

**HIV-Positive Donors to HIV-Positive Recipients:**
- HOPE Act (2013) allows this
- Outcomes similar to HIV-negative transplant

**Research Frontiers:**

**Stem Cell Therapies:**
- Treg (regulatory T-cell) therapy
- Mesenchymal stem cells
- Goal: Induce tolerance, minimize immunosuppression

**Bioartificial Kidney:**
- Implantable device with renal tubule cells
- Combines filtration with metabolic/reabsorptive functions
- Clinical trials planned

**Organ Bioengineering:**
- Decellularized scaffolds
- 3D bioprinting
- Long-term research endeavors`,
      keyTerms: [
        { term: 'cPRA', definition: 'Calculated panel reactive antibody; probability of positive crossmatch with random donor' },
        { term: 'rituximab', definition: 'Anti-CD20 monoclonal antibody used in desensitization and PTLD' },
        { term: 'belatacept', definition: 'Costimulation blocker that prevents T-cell activation without calcineurin inhibition' },
        { term: 'operational tolerance', definition: 'Stable graft function in the absence of immunosuppressive medications' },
        { term: 'HOPE Act', definition: 'HIV Organ Policy Equity Act allowing organ transplants between HIV-positive donors and recipients' },
      ],
      clinicalNotes: `Advanced transplant pearls:
1. Highly sensitized patients (cPRA > 95%) may wait years for compatible organs - desensitization or paired exchange expands options
2. Belatacept offers CNI-free immunosuppression with better renal function but requires monthly infusions and EBV seropositivity
3. ABO-incompatible transplantation with modern desensitization achieves outcomes comparable to ABO-compatible
4. Machine perfusion is revolutionizing marginal organ use - ECD and DCD kidneys show improved function with HMP
5. Xenotransplantation may solve organ shortage - gene-edited pig kidneys in clinical trials
6. Financial toxicity is real - medication non-adherence due to cost is a major cause of graft loss; social work involvement essential`,
    },
  },

  media: [
    {
      id: 'transplant-surgery',
      type: 'diagram',
      filename: 'kidney-transplant-surgery.svg',
      title: 'Kidney Transplant Surgical Anatomy',
      description: 'Vascular and ureteral anastomoses in renal transplantation',
    },
  ],

  citations: [
    {
      id: 'kdigo-transplant',
      type: 'article',
      title: 'KDIGO Clinical Practice Guideline for the Care of Kidney Transplant Recipients',
      source: 'Kidney International',
    },
    {
      id: 'morris-transplantation',
      type: 'textbook',
      title: 'Kidney Transplantation: Principles and Practice',
      authors: ['Morris, P.J.'],
      source: 'Elsevier',
    },
  ],

  crossReferences: [
    { targetId: 'clinical-dialysis-basics', targetType: 'concept', relationship: 'related', label: 'Dialysis Basics' },
    { targetId: 'condition-chronic-kidney-disease', targetType: 'condition', relationship: 'related', label: 'Chronic Kidney Disease' },
    { targetId: 'condition-acute-kidney-injury', targetType: 'condition', relationship: 'related', label: 'Acute Kidney Injury' },
  ],

  tags: {
    systems: ['renal', 'immune'],
    topics: ['clinical', 'surgery', 'immunology'],
    keywords: ['transplant', 'kidney transplant', 'immunosuppression', 'rejection', 'organ donation'],
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

export default kidneyTransplantation;
