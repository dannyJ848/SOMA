/**
 * Kidney Transplantation - Comprehensive Educational Content
 *
 * Covers recipient evaluation, donor selection, immunosuppression,
 * rejection, and long-term management.
 */

import { EducationalContent } from '../../types';

export const kidneyTransplantation: EducationalContent = {
  id: 'process-kidney-transplantation',
  type: 'process',
  name: 'Kidney Transplantation',
  alternateNames: ['Renal Transplant', 'Kidney Transplant', 'Renal Transplantation'],

  levels: {
    1: {
      level: 1,
      summary: 'A kidney transplant is a surgery where a healthy kidney from another person is placed into someone whose kidneys have failed.',
      explanation: `When kidneys completely fail, a person needs either dialysis or a kidney transplant to survive. A kidney transplant can give someone a better quality of life than dialysis.

**What Is a Kidney Transplant?**
A surgeon places a healthy kidney from a donor into your body. The new kidney does the work your old kidneys cannot do anymore.

**Where Does the New Kidney Come From?**

1. **Living Donor**
   - A family member, friend, or even a stranger donates one of their kidneys
   - People can live healthy lives with just one kidney
   - Best outcomes because the kidney is healthiest

2. **Deceased Donor**
   - A kidney from someone who has just died
   - The person agreed to be an organ donor
   - Waiting list can be several years

**Where Does the New Kidney Go?**
- The new kidney is placed in your lower belly (pelvis)
- Your old kidneys usually stay in place (unless they are causing problems)
- The new kidney is connected to your blood vessels and bladder

**After Transplant:**
- You will take medications every day to prevent rejection
- "Rejection" means your body sees the new kidney as foreign and attacks it
- Regular checkups and blood tests are important
- Most transplanted kidneys last 10-20 years or more

**Benefits of Transplant vs. Dialysis:**
- More freedom (no dialysis schedule)
- Better quality of life
- Often live longer
- Can eat a less restricted diet
- More energy

**Not Everyone Can Get a Transplant:**
- You need to be healthy enough for surgery
- Some conditions make transplant risky
- You must be able to take medications every day`,
      keyTerms: [
        { term: 'transplant', definition: 'Moving an organ from one person to another' },
        { term: 'donor', definition: 'A person who gives an organ to another person' },
        { term: 'recipient', definition: 'A person who receives an organ' },
        { term: 'rejection', definition: 'When your body attacks the new kidney because it sees it as foreign' },
      ],
      analogies: [
        'Getting a kidney transplant is like getting a replacement part for a machine - the new part does the job the old broken part cannot do anymore.',
        'Taking anti-rejection medications is like telling your bodys security guards to let the new kidney stay and work in peace.',
      ],
      examples: [
        'A mother might donate one of her kidneys to her child who has kidney failure.',
        'Someone on dialysis for 3 years gets a call that a matching kidney is available from a deceased donor.',
      ],
    },
    2: {
      level: 2,
      summary: 'Kidney transplantation offers superior survival and quality of life compared to dialysis, requiring careful donor-recipient matching, lifelong immunosuppression, and monitoring for rejection and complications.',
      explanation: `## Overview of Kidney Transplantation

**Survival Benefit:**
- Transplant recipients live longer than those on dialysis
- Living donor transplant > deceased donor transplant > dialysis
- Pre-emptive transplant (before dialysis) has best outcomes

**Types of Donors:**

| Donor Type | Wait Time | Outcomes | Notes |
|------------|-----------|----------|-------|
| Living related | Variable | Best | HLA matching often good |
| Living unrelated | Variable | Excellent | Emotionally related, paired exchange |
| Deceased | 3-7 years | Good | Depends on organ quality |

## Evaluation Process

**Recipient Evaluation:**
- Medical history and physical exam
- Cardiac evaluation (stress test, echo)
- Cancer screening
- Infection screening (HIV, hepatitis, TB)
- Psychosocial evaluation
- Financial/insurance assessment

**Contraindications:**
- Active cancer (usually need 2-5 year remission)
- Active infection
- Severe, uncorrectable cardiac disease
- Active substance abuse
- Inability to adhere to medications

**Donor Evaluation (Living):**
- Must be healthy with normal kidney function
- GFR >80 mL/min
- No diabetes, hypertension, or proteinuria
- Psychological evaluation
- Independent donor advocate

## Matching and Allocation

**Blood Type Compatibility:**
- ABO blood type must be compatible
- ABO-incompatible transplant possible with special protocols

**HLA Matching:**
- Human Leukocyte Antigens - markers on cells
- Better match = lower rejection risk
- 6 antigens typically matched (A, B, DR)

**Crossmatch:**
- Mixing donor cells with recipient serum
- Positive crossmatch = antibodies against donor (higher rejection risk)
- Negative crossmatch required for transplant

**Panel Reactive Antibodies (PRA):**
- Measures how sensitized a patient is
- High PRA = antibodies against many donors (harder to find match)
- Caused by previous transplants, transfusions, pregnancy

## Immunosuppression

**Goals:**
- Prevent rejection
- Minimize medication side effects
- Allow normal immune function against infections

**Induction Therapy (at transplant):**
- High-dose immunosuppression
- Options: Thymoglobulin (ATG), basiliximab, alemtuzumab

**Maintenance Therapy:**
- Calcineurin inhibitor (tacrolimus or cyclosporine)
- Antiproliferative (mycophenolate or azathioprine)
- Steroids (often tapered or stopped)

**Common Medication Side Effects:**
| Drug | Side Effects |
|------|--------------|
| Tacrolimus | Tremor, diabetes, nephrotoxicity |
| Mycophenolate | GI upset, bone marrow suppression |
| Prednisone | Weight gain, diabetes, bone loss |

## Rejection

**Types:**
1. **Hyperacute**: Minutes to hours; preformed antibodies (rare now with crossmatching)
2. **Acute cellular**: T-cells attack the kidney (weeks to months)
3. **Acute antibody-mediated**: Antibodies attack the kidney
4. **Chronic**: Gradual loss of function over months to years

**Signs of Rejection:**
- Rising creatinine
- Decreased urine output
- Pain over transplant
- Often asymptomatic!

**Diagnosis:**
- Blood tests (creatinine, drug levels)
- Kidney biopsy (gold standard)

**Treatment:**
- Pulse steroids for cellular rejection
- Plasmapheresis, IVIG for antibody-mediated
- Increased immunosuppression

## Long-term Care

**Regular Monitoring:**
- Labs every 1-3 months when stable
- Drug level monitoring (tacrolimus trough)
- Annual skin cancer screening
- Vaccinations (avoid live vaccines)

**Life After Transplant:**
- Return to work, exercise, travel
- Pregnancy possible (plan with transplant team)
- Average kidney lifespan: 12-20 years (living donor)`,
      keyTerms: [
        { term: 'HLA', definition: 'Human Leukocyte Antigens; proteins on cells that the immune system uses to recognize self vs foreign' },
        { term: 'crossmatch', definition: 'Test mixing donor cells with recipient blood to check for antibodies' },
        { term: 'PRA', definition: 'Panel Reactive Antibodies; percentage of donors a patient would react against' },
        { term: 'tacrolimus', definition: 'Calcineurin inhibitor; main immunosuppressive medication after transplant', pronunciation: 'tah-KROW-lih-mus' },
        { term: 'induction therapy', definition: 'Powerful immunosuppression given at time of transplant' },
        { term: 'sensitization', definition: 'Development of antibodies against donor antigens from exposure' },
      ],
      analogies: [
        'HLA matching is like finding a lock and key that fit - the better the match, the less likely the body will reject the new kidney.',
        'Immunosuppression is like turning down your bodys alarm system so it doesnt attack the new kidney.',
      ],
    },
    3: {
      level: 3,
      summary: 'Kidney transplantation requires detailed immunologic assessment, individualized immunosuppression protocols, and vigilant monitoring for rejection, infection, and malignancy in the context of multidisciplinary care.',
      explanation: `## Immunology of Transplantation

### HLA System
**Major Histocompatibility Complex (MHC):**
- Class I (HLA-A, -B, -C): Present peptides to CD8+ T cells
- Class II (HLA-DR, -DQ, -DP): Present peptides to CD4+ T cells
- Most important for matching: HLA-A, -B, -DR

**Degrees of Matching:**
- 6-antigen match (A, B, DR): Best outcomes
- Zero-mismatch: Identical at all loci; prioritized in allocation
- Complete mismatch: Still possible, more immunosuppression needed

### Sensitization and Antibodies

**Donor-Specific Antibodies (DSA):**
- Preformed: From prior sensitization (transfusions, pregnancy, prior transplant)
- De novo: Develop after transplant (indicates subclinical rejection)

**Detection Methods:**
- Complement-dependent cytotoxicity (CDC) crossmatch: Traditional
- Flow cytometry crossmatch: More sensitive
- Single antigen bead assay (Luminex): Identifies specific HLA antibodies

**Calculated PRA (cPRA):**
- Estimates percentage of incompatible donors based on unacceptable antigens
- Higher cPRA = more priority on waitlist (harder to match)

### Desensitization

**For highly sensitized patients or incompatible donors:**
- Plasmapheresis or immunoadsorption
- IVIG
- Rituximab (anti-CD20)
- Eculizumab (complement inhibitor)
- Imlifidase (IgG-degrading enzyme - investigational)

## Surgical Considerations

### Technique
- Kidney placed retroperitoneally in iliac fossa
- Renal artery anastomosed to external iliac artery
- Renal vein to external iliac vein
- Ureter to bladder (ureteroneocystostomy)

### Early Complications
| Complication | Presentation | Management |
|--------------|--------------|------------|
| Delayed graft function | Need dialysis post-transplant | Supportive; biopsy if prolonged |
| Vascular thrombosis | No urine, pain, graft loss | Emergent surgery |
| Urine leak | Drainage around incision | Stenting, surgical repair |
| Lymphocele | Swelling, hydronephrosis | Drainage, marsupialization |
| Hematoma | Pain, drop in hemoglobin | Usually conservative |

## Immunosuppression Protocols

### Induction Agents

**Depleting Antibodies:**
- Thymoglobulin (ATG): Rabbit anti-thymocyte globulin
- Alemtuzumab: Anti-CD52; profound lymphocyte depletion

**Non-Depleting:**
- Basiliximab: IL-2 receptor blocker
- Lower immunosuppression intensity

**Choice based on risk:**
- Low immunologic risk: Basiliximab
- High immunologic risk: ATG or alemtuzumab

### Maintenance Immunosuppression

**Triple Therapy (Standard):**
1. Tacrolimus (target trough 8-12 ng/mL early, 5-8 ng/mL later)
2. Mycophenolate mofetil (1g BID or MPA 720mg BID)
3. Prednisone (taper to 5mg daily or off)

**Calcineurin Inhibitor Sparing:**
- Belatacept: Co-stimulation blocker (IV monthly)
- Avoids CNI nephrotoxicity
- Higher acute rejection rates but similar long-term outcomes

**mTOR Inhibitors (sirolimus, everolimus):**
- Alternative to CNI
- Antitumor properties
- Side effects: Hyperlipidemia, poor wound healing, proteinuria

### Drug Interactions
- CYP3A4 and P-glycoprotein metabolize tacrolimus
- Inhibitors (azole antifungals, diltiazem) increase levels
- Inducers (rifampin, phenytoin) decrease levels

## Rejection

### Banff Classification (2019)
**Acute T-cell Mediated Rejection (TCMR):**
- Tubulitis (mononuclear cells in tubules)
- Interstitial inflammation
- Intimal arteritis (severe)
- Graded IA, IB, IIA, IIB, III

**Antibody-Mediated Rejection (ABMR):**
- Microcirculation inflammation (glomerulitis, peritubular capillaritis)
- C4d staining (complement deposition)
- DSA presence
- Acute vs. chronic active

### Treatment of Rejection

**TCMR:**
- Pulse methylprednisolone (500mg-1g × 3 days)
- Optimize maintenance immunosuppression
- ATG for steroid-resistant or severe (Banff IIA or higher)

**ABMR:**
- Plasmapheresis (removes antibodies)
- IVIG (immunomodulation)
- Rituximab (B-cell depletion)
- Bortezomib (plasma cell depletion - off-label)
- Eculizumab (complement inhibition - off-label)
- Often refractory; chronic ABMR leading cause of late graft loss

## Infection Prophylaxis

**Standard Prophylaxis:**
- TMP-SMX: Pneumocystis and Nocardia (lifelong or 6-12 months)
- Valganciclovir: CMV (3-6 months; based on donor/recipient serology)
- Nystatin or fluconazole: Candida (1-3 months)

**BK Virus:**
- Polyomavirus; reactivates with immunosuppression
- Nephropathy mimics rejection
- Screen with plasma BK PCR
- Treatment: Reduce immunosuppression`,
      keyTerms: [
        { term: 'DSA', definition: 'Donor-Specific Antibodies; antibodies against the donors HLA antigens' },
        { term: 'Banff classification', definition: 'Standardized system for grading kidney transplant rejection on biopsy' },
        { term: 'C4d', definition: 'Complement fragment deposited in antibody-mediated rejection' },
        { term: 'belatacept', definition: 'Co-stimulation blocker; CNI-free maintenance immunosuppression' },
        { term: 'desensitization', definition: 'Protocols to reduce antibody levels allowing transplant across HLA barriers' },
        { term: 'BK nephropathy', definition: 'Viral infection of transplanted kidney causing dysfunction; treated by reducing immunosuppression' },
      ],
      clinicalNotes: 'Always consider both rejection and BK nephropathy in a patient with rising creatinine - both can look similar. Biopsy is essential. DSA monitoring helps detect subclinical rejection early. CMV D+/R- recipients are highest risk for CMV disease; extend prophylaxis. Drug interactions with tacrolimus are common and clinically significant.',
    },
    4: {
      level: 4,
      summary: 'Advanced transplant care requires managing complex immunologic scenarios, optimizing long-term graft survival, addressing recurrent disease, and integrating novel therapies to improve outcomes in high-risk populations.',
      explanation: `## High-Risk Transplantation

### ABO-Incompatible Transplantation

**Indication:** Willing living donor with incompatible blood type

**Protocol:**
1. Pre-transplant plasmapheresis to reduce anti-A/B titers
2. Rituximab (B-cell depletion)
3. IVIG
4. Target isohemagglutinin titer <1:8-16 at transplant

**Outcomes:**
- Graft survival now comparable to ABO-compatible
- Higher early rejection risk, requires intensive monitoring
- Risk of antibody-mediated rejection

### HLA-Incompatible Transplantation

**Desensitization for DSA-positive crossmatch:**
- Plasmapheresis + low-dose IVIG (multiple sessions)
- Rituximab
- Post-transplant plasmapheresis and monitoring

**Outcomes:**
- Increased ABMR risk
- Survival benefit compared to remaining on dialysis
- Requires specialized center expertise

### Highly Sensitized Patients

**Strategies:**
- National kidney sharing programs (increase donor pool)
- Paired kidney exchange chains
- Deceased donor desensitization protocols
- Acceptable mismatch program (identify low-risk epitopes)

**HLA Epitope Matching:**
- Beyond antigen-level matching
- Eplet analysis identifies molecular mismatches
- May better predict outcomes than traditional matching

## Paired Kidney Exchange

**Concept:**
- Incompatible pairs swap donors
- Enables transplantation for otherwise incompatible pairs
- Chains: Altruistic donor initiates multiple transplants

**National Programs:**
- UNOS Kidney Paired Donation Program
- National Kidney Registry
- Alliance for Paired Kidney Donation

**Logistics:**
- Simultaneous surgeries preferred
- Shipment of kidneys for national exchanges
- Ethical considerations around chain breaks

## Long-Term Graft Survival

### Causes of Late Graft Loss

| Cause | Contribution | Prevention/Treatment |
|-------|--------------|---------------------|
| Chronic ABMR | 40-50% | DSA monitoring, treat early ABMR |
| Death with functioning graft | 30-40% | CVD risk management |
| Recurrent disease | 10-15% | Disease-specific (see below) |
| BK nephropathy | 5% | Screening, reduce immunosuppression |
| CNI toxicity | Variable | Minimize CNI, belatacept |

### Chronic Allograft Nephropathy

**Pathology:**
- Interstitial fibrosis and tubular atrophy (IF/TA)
- Arteriolar hyalinosis
- Transplant glomerulopathy (chronic ABMR)

**Management:**
- Optimize blood pressure (ACEi/ARBs)
- Treat proteinuria
- Monitor for DSA; treat active ABMR
- Consider CNI minimization

### Recurrent Disease

**High Recurrence Risk:**
| Disease | Recurrence Rate | Impact |
|---------|-----------------|--------|
| FSGS (primary) | 30-50% | Graft loss common |
| IgA nephropathy | 30-60% | Usually indolent |
| Membranous nephropathy | 10-30% | Variable |
| MPGN/C3G | 50-80% | Aggressive |
| Atypical HUS | 50-90% (without eculizumab) | Graft loss without prophylaxis |

**Disease-Specific Protocols:**
- FSGS: Plasmapheresis at time of transplant; rituximab
- aHUS: Eculizumab prophylaxis
- Lupus nephritis: Wait for remission; low recurrence

### Cardiovascular Disease

**Leading cause of death post-transplant:**
- Traditional risk factors (HTN, DM, dyslipidemia)
- Immunosuppression-related (CNI → HTN, steroids → DM)
- CKD-MBD persists

**Management:**
- Aggressive risk factor control
- Statin therapy (ALERT trial: reduced cardiac events)
- Aspirin for secondary prevention
- Target BP <130/80 mmHg

## Immunosuppression Optimization

### CNI Minimization/Withdrawal

**Rationale:**
- CNI nephrotoxicity contributes to chronic allograft injury
- Long-term exposure associated with CV events

**Strategies:**
- Belatacept conversion (BENEFIT trial: superior eGFR at 7 years)
- mTOR inhibitor substitution
- CNI dose reduction with enhanced monitoring

**Risks:**
- Increased acute rejection with aggressive minimization
- Careful patient selection essential

### Steroid Withdrawal

**Benefits:**
- Avoid long-term steroid complications (osteoporosis, diabetes, weight gain)

**Risks:**
- Higher acute rejection in some studies

**Current Practice:**
- Early steroid withdrawal protocols (day 5-7)
- Successful in low-risk recipients with ATG induction

### Biomarker-Guided Immunosuppression

**Gene Expression Profiles:**
- Molecular microscope: Gene expression on biopsy samples
- AlloMap (heart), kSORT (kidney): Blood-based rejection detection

**Donor-Derived Cell-Free DNA (dd-cfDNA):**
- Elevated in rejection
- May allow surveillance without biopsy
- Emerging as standard monitoring tool

## Special Populations

### Pediatric Transplantation
- Living donor preferred
- Attention to growth and development
- Transition to adult care

### Elderly Recipients (>65)
- Benefit from transplant over dialysis
- Careful cardiac evaluation
- Consider less aggressive immunosuppression

### Re-Transplantation
- Higher sensitization (PRA)
- DSA risk higher
- Desensitization often needed
- Outcomes can be excellent with proper matching

### Combined Organ Transplants
- Simultaneous pancreas-kidney (SPK): Type 1 DM with ESKD
- Liver-kidney: Cirrhosis with CKD
- Heart-kidney: Heart failure with CKD`,
      keyTerms: [
        { term: 'paired kidney exchange', definition: 'System where incompatible donor-recipient pairs swap donors to achieve compatible transplants' },
        { term: 'eplet', definition: 'Molecular epitope on HLA antigens; basis for epitope-level matching' },
        { term: 'dd-cfDNA', definition: 'Donor-derived cell-free DNA; noninvasive marker of graft injury' },
        { term: 'chronic ABMR', definition: 'Antibody-mediated rejection causing transplant glomerulopathy and late graft loss' },
        { term: 'transplant glomerulopathy', definition: 'Pathologic finding of duplicated GBM; indicates chronic antibody-mediated injury' },
        { term: 'BENEFIT trial', definition: 'Landmark study showing belatacept superiority for long-term graft function' },
      ],
      clinicalNotes: 'ABO- and HLA-incompatible transplantation expands donor pool significantly - refer complex cases to specialized centers. DSA monitoring with dd-cfDNA may detect rejection earlier than creatinine rise. Belatacept conversion preserves GFR but requires adherence to IV infusion schedule. Recurrent FSGS risk requires pre-emptive plasmapheresis strategy.',
    },
    5: {
      level: 5,
      summary: 'Expert transplant nephrology integrates precision immunology, tolerance induction strategies, regenerative medicine approaches, and systems-level optimization to maximize graft and patient survival while minimizing immunosuppression burden.',
      explanation: `## Precision Transplant Immunology

### Molecular Diagnostics

**Molecular Microscope (MMDx):**
- Microarray analysis of biopsy gene expression
- Machine learning classification of rejection subtypes
- Detects early injury before histologic changes
- Guides treatment intensity

**Torque Teno Virus (TTV):**
- Ubiquitous virus; levels reflect immune status
- Low TTV = over-immunosuppression (infection risk)
- High TTV = under-immunosuppression (rejection risk)
- Investigational for immunosuppression titration

**Cell-Based Biomarkers:**
- Regulatory T-cell monitoring
- B-cell subset analysis
- NK cell phenotyping
- May predict tolerance-prone patients

### Epitope Matching and Prediction

**HLAMatchmaker:**
- Algorithm defining immunogenic epitopes (eplets)
- Predicts DSA development risk
- Guides unacceptable antigen listing

**Virtual Crossmatch:**
- Predicts crossmatch result from single antigen bead data
- Expedites deceased donor offers
- Reduces unnecessary crossmatches

**PIRCHE (Predicted Indirectly ReCognizable HLA Epitopes):**
- Predicts indirect pathway allorecognition
- May identify additional risk beyond direct pathway

## Tolerance Induction

### Clinical Tolerance Protocols

**Combined Kidney and Bone Marrow Transplant:**
- ITN protocols at Stanford, Northwestern, MGH
- Goal: Mixed chimerism and operational tolerance
- Some patients successfully withdrawn from all immunosuppression
- Requires conditioning regimen (risk of GVHD, infection)

**Regulatory T-cell Therapy:**
- Ex vivo expansion of recipient Tregs
- ONE Study: Feasibility demonstrated
- Phase 2 trials ongoing

### Barriers to Tolerance

**Heterologous Immunity:**
- Memory T cells from prior infections cross-react with alloantigens
- Resistant to tolerance protocols

**Humoral Memory:**
- Long-lived plasma cells produce DSA
- Difficult to target with current therapies

### Biomarkers of Tolerance

**Tolerance Signatures:**
- Gene expression profiles in operationally tolerant patients
- IOT (Indices of Tolerance) study
- May identify candidates for IS withdrawal

## Novel Therapeutics

### Targeted Antibody Therapies

**Anti-CD38 (Daratumumab):**
- Depletes plasma cells
- Case reports in refractory ABMR
- May reduce DSA production

**Obinutuzumab:**
- Anti-CD20 with enhanced B-cell depletion
- May be superior to rituximab

**Tocilizumab (Anti-IL-6R):**
- Reduces DSA and chronic ABMR progression
- Phase 2 data promising

### Complement Inhibition

**Terminal Pathway:**
- Eculizumab (C5 inhibitor): Used in aHUS, refractory ABMR
- Ravulizumab: Long-acting C5 inhibitor

**Proximal Pathway:**
- C1 esterase inhibitor: For ABMR (investigational)
- Factor B/D inhibitors: In development

### Gene Editing and Regenerative Medicine

**CRISPR-Edited Organs:**
- Xenotransplantation from genetically modified pigs
- Recent pig-to-human kidney xenotransplants (brain-dead recipients)
- Potential to solve organ shortage

**Organoids and Bioengineered Kidneys:**
- Stem cell-derived kidney organoids in development
- Decellularized kidney scaffolds reseeded with recipient cells
- Long-term vision: Personalized kidney generation

## Systems-Level Quality Improvement

### Organ Procurement Optimization

**Normothermic Machine Perfusion:**
- Ex vivo assessment and resuscitation of marginal kidneys
- Expanded criteria donors, DCD kidneys
- Reduced delayed graft function

**Hypothermic Machine Perfusion:**
- Standard for many programs
- May improve DCD kidney outcomes

### Allocation Optimization

**Longevity Matching:**
- KDPI: Kidney Donor Profile Index (organ quality score)
- EPTS: Estimated Post-Transplant Survival (recipient score)
- Goal: Match best kidneys to longest-surviving recipients

**Kidney Accelerated Placement Project:**
- Expedited placement of high-KDPI kidneys
- Reduces cold ischemia time and discards

### Post-Transplant Care Models

**Integrated Care Programs:**
- Nephrologist, transplant surgeon, pharmacy, social work
- Telemedicine for remote monitoring
- Medication adherence support

**Transition to Community Care:**
- Clear protocols for transitioning to local nephrologist
- Continued surveillance for rejection and malignancy
- Communication with transplant center for complex issues

## Disparities and Ethics

### Access Disparities

**Racial Disparities:**
- Black patients: Longer wait times, higher sensitization, lower living donation rates
- Hispanic patients: Lower transplant rates relative to ESKD burden
- Causes: Social determinants, implicit bias, geographic factors

**Addressing Disparities:**
- Living donor navigator programs
- Community outreach and education
- Policy initiatives (removing race from eGFR)
- Equitable allocation algorithms

### Ethical Considerations

**Living Donation Ethics:**
- Donor autonomy and informed consent
- Independent donor advocacy
- Financial neutrality (donor should not bear costs)

**Xenotransplantation Ethics:**
- Animal welfare considerations
- Infection risk (porcine retroviruses)
- First-in-human trial ethics

**Global Organ Trafficking:**
- Transplant tourism concerns
- Declaration of Istanbul
- Ethical frameworks for international transplantation`,
      keyTerms: [
        { term: 'MMDx', definition: 'Molecular Microscope Diagnostic System; gene expression analysis for rejection classification' },
        { term: 'TTV', definition: 'Torque Teno Virus; marker of immune status potentially useful for immunosuppression titration' },
        { term: 'operational tolerance', definition: 'Long-term graft acceptance without immunosuppression; achieved in some clinical protocols' },
        { term: 'PIRCHE', definition: 'Algorithm predicting indirect pathway HLA epitope recognition' },
        { term: 'xenotransplantation', definition: 'Transplantation of organs from other species; genetically modified pigs being developed' },
        { term: 'normothermic machine perfusion', definition: 'Ex vivo organ perfusion at body temperature for assessment and resuscitation' },
      ],
      clinicalNotes: `Key clinical pearls:
1. Molecular diagnostics (MMDx, dd-cfDNA) are becoming standard for rejection surveillance
2. Tolerance induction remains investigational but protocols show promise in selected patients
3. Xenotransplantation with gene-edited pig kidneys has entered early human trials
4. Machine perfusion expands usable donor pool by rescuing marginal kidneys
5. Tocilizumab and anti-CD38 agents show promise for refractory ABMR
6. Address disparities actively - living donor navigator programs improve equity
7. TTV monitoring may enable personalized immunosuppression in the future`,
    },
  },

  media: [
    {
      id: 'transplant-anatomy',
      type: 'diagram',
      filename: 'transplant-anatomy.svg',
      title: 'Kidney Transplant Surgical Anatomy',
      description: 'Diagram showing placement of transplanted kidney in the iliac fossa',
    },
    {
      id: 'rejection-classification',
      type: 'diagram',
      filename: 'rejection-classification.svg',
      title: 'Banff Classification of Rejection',
      description: 'Flowchart of acute rejection categories and histologic findings',
    },
  ],

  citations: [
    {
      id: 'kdigo-transplant-2009',
      type: 'article',
      title: 'KDIGO Clinical Practice Guideline for the Care of Kidney Transplant Recipients',
      authors: ['KDIGO Transplant Work Group'],
      source: 'American Journal of Transplantation',
      url: 'https://kdigo.org/guidelines/transplant/',
    },
    {
      id: 'banff-2019',
      type: 'article',
      title: 'The Banff 2019 Kidney Meeting Report',
      authors: ['Loupy A', 'et al.'],
      source: 'American Journal of Transplantation',
    },
    {
      id: 'brenner-rector-transplant',
      type: 'textbook',
      title: 'Kidney Transplantation',
      source: "Brenner and Rector's The Kidney",
      chapter: '69-72',
    },
  ],

  crossReferences: [
    { targetId: 'condition-chronic-kidney-disease', targetType: 'condition', relationship: 'related', label: 'CKD' },
    { targetId: 'process-dialysis', targetType: 'process', relationship: 'related', label: 'Dialysis' },
    { targetId: 'condition-acute-kidney-injury', targetType: 'condition', relationship: 'related', label: 'AKI' },
    { targetId: 'condition-glomerulonephritis', targetType: 'condition', relationship: 'related', label: 'Glomerulonephritis (recurrent disease)' },
  ],

  tags: {
    systems: ['urinary', 'renal', 'immune'],
    topics: ['nephrology', 'transplantation', 'immunology', 'surgery'],
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

export default kidneyTransplantation;
