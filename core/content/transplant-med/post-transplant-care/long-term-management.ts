/**
 * Long-Term Management
 *
 * Comprehensive coverage of long-term care for transplant recipients,
 * including cardiovascular risk management, malignancy surveillance, and quality of life.
 */

import { EducationalContent } from '../../types';

export const longTermManagement: EducationalContent = {
  id: 'transplant-long-term-management',
  type: 'concept',
  name: 'Long-Term Management',
  alternateNames: ['Transplant Survivorship', 'Chronic Transplant Care', 'Post-Transplant Follow-up', 'Graft Preservation'],

  levels: {
    1: {
      level: 1,
      summary: 'Long-term management after transplant involves regular medical care, healthy lifestyle choices, and ongoing monitoring to keep both the transplanted organ and the patient healthy for years to come.',
      explanation: `**What Is Long-Term Management?**

After the first year, transplant care continues for the rest of your life. The goal is to keep your transplanted organ working well and to keep you healthy overall.

**Key Parts of Long-Term Care:**

1. **Regular Medical Visits**
   - Blood tests to check organ function
   - Medication level checks
   - Blood pressure monitoring
   - Usually every 3-6 months

2. **Taking Medications**
   - Anti-rejection medicines every day
   - Other medications as needed
   - Never skip doses
   - Refill prescriptions on time

3. **Healthy Living**
   - Eat a balanced diet
   - Exercise regularly
   - Maintain healthy weight
   - Do not smoke
   - Limit alcohol

4. **Watching for Problems**
   - Cancer screening
   - Heart health checks
   - Bone health (DEXA scans)
   - Infection prevention

**Common Long-Term Concerns:**

- Side effects from medications
- Risk of infections
- Risk of certain cancers
- Heart disease risk
- Bone thinning
- Weight gain

**Staying Healthy:**

- Keep all appointments
- Take medications exactly as prescribed
- Report any new symptoms
- Get recommended cancer screenings
- Stay active and eat well
- Avoid people who are sick
- Keep vaccinations up to date

**Quality of Life:**

Most transplant recipients return to:
- Work or school
- Exercise and sports (with approval)
- Travel
- Normal daily activities
- Family planning (with medical guidance)

Life after transplant can be very good with proper care!`,
      keyTerms: [
        { term: 'survivorship', definition: 'Living well after transplant with ongoing medical care' },
        { term: 'graft function', definition: 'How well the transplanted organ is working' },
        { term: 'cancer screening', definition: 'Tests to check for cancer before symptoms appear' },
        { term: 'DEXA scan', definition: 'Test to measure bone density' },
      ],
      analogies: [
        'Long-term transplant care is like maintaining a classic car - regular tune-ups keep it running smoothly for years.',
        'Think of your transplant team as your personal coaches, helping you stay in the best shape possible.',
      ],
      examples: [
        'A kidney transplant patient sees the transplant team every 3 months for blood work and medication adjustments.',
        'A transplant recipient gets annual skin cancer checks due to increased risk from immunosuppression.',
      ],
    },
    2: {
      level: 2,
      summary: 'Long-term transplant management focuses on preserving graft function while minimizing complications of chronic immunosuppression, including cardiovascular disease, malignancy, infection, and metabolic syndrome.',
      explanation: `**Long-Term Follow-Up Schedule:**

| Time Post-Transplant | Visit Frequency | Key Assessments |
|---------------------|-----------------|-----------------|
| Year 1 | Every 1-3 months | Close monitoring, medication adjustments |
| Years 2-5 | Every 3-6 months | Graft function, complications screening |
| >5 years | Every 6-12 months | Long-term outcomes, cancer surveillance |

**Chronic Immunosuppression Complications:**

*Cardiovascular Disease:*
- Leading cause of death with functioning graft
- Traditional risk factors + transplant-specific risks
- Accelerated atherosclerosis
- Regular cardiac risk assessment

*Metabolic Syndrome:*
- Post-transplant diabetes (20-30%)
- Hypertension (70-90%)
- Dyslipidemia (60-80%)
- Obesity
- Central fat distribution

*Malignancy:*
- 2-4x increased cancer risk
- Skin cancer most common
- Post-transplant lymphoproliferative disorder (PTLD)
- Colorectal, lung, kidney, thyroid cancers
- Related to duration and intensity of immunosuppression

*Chronic Kidney Disease:*
- Even in non-renal transplants
- CNI nephrotoxicity
- Requires nephrology co-management

*Bone Disease:*
- Osteoporosis from steroids
- Avascular necrosis
- Fracture risk increased

**Graft-Specific Long-Term Issues:**

*Kidney:*
- Chronic allograft nephropathy
- Proteinuria
- Cardiovascular disease leading cause of death
- Return to dialysis or retransplant

*Liver:*
- Chronic rejection (ductopenic)
- Disease recurrence (hepatitis C, autoimmune)
- Hepatocellular carcinoma surveillance (if applicable)

*Heart:*
- Cardiac allograft vasculopathy
- Graft dysfunction
- Malignancy risk

*Lung:*
- Bronchiolitis obliterans syndrome (BOS)
- Chronic lung allograft dysfunction
- Highest retransplant need

*Pancreas:*
- Graft pancreatitis
- Exocrine drainage complications
- Islet function decline

**Quality of Life Considerations:**

- Return to work/school: >80% by 1 year
- Physical function improvement
- Psychological adjustment
- Body image concerns
- Financial burden
- Social relationships

**Transition to Adult Care (Pediatric):**
- Usually age 18-21
- Self-management skills
- Adherence challenges
- Risk of graft loss during transition`,
      keyTerms: [
        { term: 'chronic allograft nephropathy', definition: 'Progressive kidney dysfunction months to years after transplant' },
        { term: 'cardiac allograft vasculopathy', definition: 'Chronic rejection of heart transplant affecting coronary arteries' },
        { term: 'PTLD', definition: 'Post-transplant lymphoproliferative disorder, EBV-related lymphoma' },
        { term: 'bronchiolitis obliterans syndrome', definition: 'Chronic lung rejection causing airway obstruction' },
        { term: 'metabolic syndrome', definition: 'Cluster of conditions: high BP, sugar, cholesterol, abdominal obesity' },
        { term: 'avascular necrosis', definition: 'Bone death from impaired blood supply, associated with steroids' },
      ],
      analogies: [
        'Chronic immunosuppression is like having a houseguest who helps with one problem but makes a mess in other rooms - beneficial overall but requires ongoing cleanup.',
        'Long-term graft surveillance is like regular roof inspections - finding small leaks before they cause major damage.',
      ],
      examples: [
        'A kidney transplant recipient at 5 years has annual cancer screening and quarterly labs to monitor graft function.',
        'Heart transplant patient undergoes annual coronary angiography to screen for cardiac allograft vasculopathy.',
      ],
    },
    3: {
      level: 3,
      summary: 'Long-term transplant outcomes are determined by the balance between adequate immunosuppression to prevent rejection and minimization to reduce complications. Cardiovascular disease, malignancy, and infection are the leading causes of late morbidity and mortality.',
      explanation: `**Cardiovascular Risk Management:**

*Risk Factor Modification:*

Hypertension:
- Target <130/80 mmHg (KDIGO guidelines)
- ACE inhibitors/ARBs preferred (renal protection, proteinuria)
- Calcium channel blockers (consider CNI interactions)
- Beta-blockers as indicated

Dyslipidemia:
- Statins first-line (atorvastatin, pravastatin)
- Target: LDL <100 mg/dL, <70 if high risk
- Fibrates for hypertriglyceridemia
- Monitor for myopathy with CNIs

Diabetes Management:
- Target HbA1c <7% (individualize)
- Metformin if eGFR >30
- Sulfonylureas (hypoglycemia risk)
- Insulin often required
- SGLT2 inhibitors: limited data, eGFR considerations

*Smoking Cessation:*
- Absolute requirement
- Increases cardiovascular risk, cancer, graft failure
- Support resources essential

*Exercise:*
- Cardiac rehabilitation post-heart transplant
- Regular aerobic exercise
- Resistance training
- Improves cardiovascular risk, bone health, mood

**Malignancy Surveillance:**

*Skin Cancer:*
- Highest risk malignancy
- SCC > BCA (unlike general population)
- Dermatology visits every 6-12 months
- Patient self-examination education
- Sun protection critical
- Reduce immunosuppression if frequent

*PTLD (Post-Transplant Lymphoproliferative Disorder):*
- EBV-driven B-cell proliferation
- Risk factors: EBV D+/R-, intense immunosuppression
- Presentation: lymphadenopathy, extranodal, GI, CNS
- Treatment: reduce immunosuppression, rituximab, chemotherapy
- Prevention: antiviral prophylaxis, EBV monitoring

*Solid Organ Cancers:*

| Cancer Type | Risk Increase | Screening |
|-------------|---------------|-----------|
| Colorectal | 2x | Colonoscopy every 5 years (earlier if polyps) |
| Lung | 2x | Consider low-dose CT if high risk |
| Kidney | 5-100x | Ultrasound surveillance |
| Thyroid | 3x | Thyroid exam, ultrasound if nodules |
| Cervical | 3x | Pap smear annually |
| Prostate | Similar | Standard screening |

*Cancer Prevention:*
- HPV vaccination (pre-transplant preferred)
- Smoking cessation
- Weight management
- Limited alcohol
- Sun protection

**Bone Health Management:**

*Assessment:*
- DEXA scan at 1 year, then every 2 years
- Fracture risk assessment (FRAX)
- Vitamin D level monitoring

*Prevention and Treatment:*
- Calcium 1000-1200 mg daily
- Vitamin D supplementation (target >30 ng/mL)
- Bisphosphonates if osteoporosis/fracture
- Weight-bearing exercise
- Smoking cessation
- Limit steroids when possible

*Steroid-Induced Osteoporosis:*
- Greatest bone loss in first 6-12 months
- Trabecular bone most affected
- Avascular necrosis risk (hips, knees, shoulders)

**Renal Function Preservation:**

*Non-Renal Transplants:*
- CKD develops in 15-30%
- CNI nephrotoxicity
- Regular creatinine monitoring
- Nephrology referral if eGFR <30
- Consider CNI minimization/conversion

*Proteinuria Management:*
- ACE inhibitors/ARBs
- CNI reduction if possible
- Evaluate for recurrent disease

**Immunosuppression Optimization:**

*Minimization Strategies:*
- Steroid withdrawal after stable period
- CNI reduction (with mTOR inhibitors)
- Belatacept conversion (kidney)
- Individualized based on rejection history

*Risk Stratification:*
- High risk: maintain intensity
- Low risk: consider minimization
- Balance rejection vs complication risk

*Non-Adherence:*
- Major cause of late graft loss
- More common in adolescents, young adults
- Simplified regimens help
- Education and support essential`,
      keyTerms: [
        { term: 'KDIGO', definition: 'Kidney Disease Improving Global Outcomes, guideline organization' },
        { term: 'SCC', definition: 'Squamous cell carcinoma, most common skin cancer post-transplant' },
        { term: 'PTLD', definition: 'Post-transplant lymphoproliferative disorder, spectrum from benign to lymphoma' },
        { term: 'FRAX', definition: 'Fracture risk assessment tool' },
        { term: 'EBV D+/R-', definition: 'EBV donor positive, recipient negative (highest PTLD risk)' },
        { term: 'rituximab', definition: 'Anti-CD20 monoclonal antibody for PTLD treatment' },
        { term: 'CKD', definition: 'Chronic kidney disease' },
        { term: 'CNI nephrotoxicity', definition: 'Kidney damage from calcineurin inhibitors' },
      ],
    },
    4: {
      level: 4,
      summary: 'Long-term transplant management requires a multidisciplinary approach addressing medical, psychosocial, and quality of life domains. Cardiovascular risk reduction through aggressive risk factor modification is paramount. Cancer surveillance protocols are essential given the 2-4 fold increased malignancy risk.',
      explanation: `**Cardiovascular Disease Prevention:**

*Aggressive Risk Factor Targets:*

Blood pressure:
- <130/80 mmHg for all transplant recipients
- <125/75 if proteinuria present
- Home blood pressure monitoring
- Resistant hypertension evaluation

Lipid management:
- Statins: cardioprotective beyond lipid lowering
- High-intensity statins for high risk
- Ezetimibe for additional LDL reduction
- PCSK9 inhibitors for refractory cases (limited data)
- Monitor CPK, liver enzymes

Diabetes:
- Comprehensive diabetes education
- Continuous glucose monitoring when appropriate
- Early insulin to achieve targets
- Screen for complications (retinopathy, neuropathy)

*Aspirin Therapy:*
- Consider for secondary prevention
- Primary prevention controversial
- Balance bleeding risk (especially early post-transplant)

*Cardiac Evaluation:*
- ECG annually
- Echocardiogram if indicated
- Stress testing for symptoms
- Coronary calcium scoring (if low kidney function)

**Infection Prevention in Late Post-Transplant Period:**

*Community-Acquired Infections:*
- Respiratory viruses (influenza, RSV, COVID-19)
- Pneumococcal disease
- Urinary tract infections
- Travel-related infections

*Vaccination Schedule:*

Annual:
- Influenza (inactivated)
- COVID-19

Every 5 years:
- Pneumococcal (PCV20 or PPSV23)

One-time:
- Shingrix (shingles) - approved for immunosuppressed
- Hepatitis B (if non-immune)
- Tdap booster

Contraindicated (live vaccines):
- MMR, varicella, intranasal influenza, yellow fever

*Travel Medicine:*
- Avoid live vaccines
- Malaria prophylaxis if needed
- Food and water precautions
- Avoid endemic fungal areas
- Travel clinic consultation

**Mental Health and Quality of Life:**

*Common Issues:*
- Anxiety and depression (25-40%)
- Post-traumatic stress
- Body image concerns
- Financial stress
- Medication fatigue

*Interventions:*
- Regular screening (PHQ-9, GAD-7)
- Mental health referrals
- Support groups
- Peer mentorship
- Financial counseling

*Medication Adherence:*
- Simplified regimens (once-daily when possible)
- Pill organizers, smartphone apps
- Pharmacy auto-refill
- Family involvement
- Education reinforcement

**Pregnancy and Family Planning:**

*Preconception Counseling:*
- Timing: stable graft function, >1-2 years post-transplant
- Medication review (teratogens: MMF, sirolimus, ACEi)
- Switch to pregnancy-safe agents
- High-risk pregnancy management

*Pregnancy Outcomes:*
- Successful pregnancies possible
- Increased risk: preeclampsia, preterm delivery, low birth weight
- Graft function monitoring essential
- Delivery timing individualized

*Contraception:*
- Options not limited (except IUD if immunosuppressed)
- Plan pregnancy carefully
- Men also need counseling (teratogenic drug exposure)

**Health Maintenance Screening:**

| Condition | Screening | Frequency |
|-----------|-----------|-----------|
| Skin cancer | Dermatology exam | Every 6-12 months |
| Colorectal cancer | Colonoscopy | Every 5 years |
| Cervical cancer | Pap smear | Annually |
| Breast cancer | Mammogram | Annually (age 40+) |
| Prostate cancer | PSA | Standard guidelines |
| Osteoporosis | DEXA | Every 2 years |
| Dental health | Dental exam | Every 6 months |
| Eye health | Eye exam | Annually (diabetes, steroids) |

**Transition of Care:**

*From Pediatric to Adult:*
- Begin preparation at age 16-18
- Self-management skills
- Graduated responsibility
- Dedicated transition clinics
- Higher graft loss risk during transition

*To Non-Transplant Providers:*
- >5 years post-transplant, stable
- Local follow-up with annual transplant visit
- Clear communication protocols
- Emergency contact information`,
      keyTerms: [
        { term: 'resistant hypertension', definition: 'Blood pressure uncontrolled on 3 medications including diuretic' },
        { term: 'PCSK9 inhibitors', definition: 'Monoclonal antibodies for refractory hyperlipidemia' },
        { term: 'PHQ-9', definition: 'Patient Health Questionnaire-9, depression screening tool' },
        { term: 'preeclampsia', definition: 'Pregnancy complication: hypertension and proteinuria' },
        { term: 'transition clinic', definition: 'Specialized clinic for adolescents moving to adult care' },
        { term: 'Shingrix', definition: 'Recombinant zoster vaccine, approved for immunosuppressed adults' },
      ],
      clinicalNotes: `Long-term transplant management requires comprehensive care addressing the multisystem effects of chronic immunosuppression. Cardiovascular disease prevention with aggressive risk factor modification is the highest priority. Cancer surveillance must be diligent, with dermatology visits every 6-12 months and age-appropriate screening for internal malignancies. Quality of life outcomes are generally good but require attention to mental health, medication adherence, and financial concerns. Transition from pediatric to adult care is a high-risk period requiring structured preparation. Family planning should be addressed with all patients of reproductive age.`,
    },
    5: {
      level: 5,
      summary: 'Long-term transplant outcomes are improving through personalized immunosuppression, precision medicine approaches, and advanced surveillance. Novel biomarkers, machine learning risk prediction, and regenerative therapies may further extend graft survival. The field increasingly focuses on patient-reported outcomes, cost-effectiveness, and sustainable care models.',
      explanation: `**Precision Medicine in Long-Term Care:**

*Pharmacogenomic-Guided Therapy:*

CYP3A5 genotyping:
- Guides tacrolimus dosing
- Reduces time to therapeutic levels
- May improve early outcomes
- Cost-effectiveness established

CYP2C19 testing:
- Voriconazole metabolism
- Predicts toxicity vs efficacy
- Clinical implementation growing

*Immune Monitoring:*

Donor-specific antibody surveillance:
- Serial monitoring for de novo DSA
- Predicts antibody-mediated rejection
- Guides immunosuppression intensity
- Protocols increasingly standardized

Gene expression profiling:
- AlloMap (heart) validated for surveillance
- Kidney assays in development
- May reduce biopsy frequency
- Predicts outcomes beyond histology

*Biomarker-Guided Management:*

dd-cfDNA:
- Graft injury detection
- Distinguishes rejection from other causes
- Serial monitoring feasible
- Cost-effectiveness analysis favorable

Proteomic/metabolomic signatures:
- Early rejection prediction
- Tolerance signatures
- Research applications
- Clinical validation ongoing

**Advanced Immunosuppression Strategies:**

*Belatacept Conversion:*
- Kidney transplant >1 year
- CNI nephrotoxicity or metabolic issues
- BENEFIT and BENEFIT-EXT long-term data
- Improved renal function, cardiovascular profile
- Higher rejection risk in some

*mTOR Inhibitor Conversion:*
- CNI minimization/elimination
- Malignancy indication
- Cardiac allograft vasculopathy
- Proteinuria contraindication

*Tolerance Protocols:*
- Operational tolerance identification
- Biomarker signatures
- Drug minimization trials
- Research settings primarily

**Regenerative Medicine Approaches:**

*Mesenchymal Stem Cells:*
- Immunomodulatory properties
- Phase II trials in kidney transplant
- May promote tolerance
- Early stage

*Extracorporeal Photopheresis:*
- For chronic rejection
- Cutaneous T-cell lymphoma treatment
- Limited solid organ data
- Specialized centers

*Gene Therapy:*
- Hepatitis C cure has improved liver outcomes
- Future applications for tolerance
- Experimental stage

**Health Economics and Sustainability:**

*Cost of Transplant Care:*
- First year: highest cost
- Maintenance: $15,000-30,000/year (medications)
- Late complications costly
- Medicare coverage (kidney: 36 months)

*Cost-Effective Strategies:*
- Generic immunosuppression
- Telemedicine for stable patients
- Risk-stratified surveillance
- Preventive care emphasis

*Value-Based Care:*
- Transplant outcomes in quality metrics
- Bundled payments
- Shared savings models
- Patient-reported outcomes integration

**Long-Term Outcomes Data:**

*Graft Survival:*

| Organ | 5-Year Graft Survival | 10-Year Graft Survival |
|-------|----------------------|------------------------|
| Kidney (deceased donor) | 80-85% | 50-60% |
| Kidney (living donor) | 90-95% | 70-80% |
| Liver | 75-80% | 60-70% |
| Heart | 75-80% | 50-60% |
| Lung | 50-55% | 25-30% |
| Pancreas | 75-80% | 60-70% |

*Patient Survival:*
- Generally follows graft survival
- Cardiovascular disease leading cause of death
- Improved with modern immunosuppression
- Recipient age affects outcomes

**Patient-Reported Outcomes:**

*Quality of Life Metrics:*
- SF-36, EQ-5D instruments
- Generally good outcomes
- Return to work: 70-85%
- Physical function improves
- Mental health challenges persist

*Patient Preferences:*
- Treatment burden tolerance
- Risk tolerance for rejection vs complications
- Shared decision-making
- Goal-concordant care

**Future Directions:**

*Biopreservation:*
- Extended organ preservation
- Ex vivo perfusion
- Organ repair/modification
- Improved graft quality

*Xenotransplantation:*
- Genetically modified pig organs
- Clinical trials beginning
- Could address organ shortage
- New immunosuppression challenges

*Artificial Organs:*
- Total artificial heart
- Wearable/implantable devices
- Bridge to transplant/recovery
- Destination therapy

*3D Bioprinting:*
- Tissue engineering
- Organoids for drug testing
- Vascularization challenges
- Long-term goal: organ replacement

*Global Health Equity:*
- Expanding access globally
- Task-shifting models
- Telemedicine applications
- Sustainable care models

**Research Frontiers:**

*Senolytics:*
- Clear senescent cells
- Reduce inflammaging
- May improve graft longevity
- Early research

*Gut Microbiome:*
- Influences immunosuppression metabolism
- Affects rejection risk
- Potential for manipulation
- Active research area

*Exosomes:*
- Cell-to-cell communication
- Potential therapeutics
- Biomarker applications
- Investigational`,
      keyTerms: [
        { term: 'operational tolerance', definition: 'Stable graft function without immunosuppression' },
        { term: 'belatacept', definition: 'CTLA4-Ig fusion protein, CNI-free immunosuppression' },
        { term: 'extracorporeal photopheresis', definition: 'Leukapheresis and UV light treatment for immune modulation' },
        { term: 'senolytics', definition: 'Drugs that selectively eliminate senescent cells' },
        { term: 'xenotransplantation', definition: 'Transplantation of organs between species' },
        { term: 'inflammaging', definition: 'Chronic low-grade inflammation with aging' },
        { term: 'goal-concordant care', definition: 'Medical care aligned with patient goals and values' },
        { term: 'task-shifting', definition: 'Delegating healthcare tasks to less specialized workers' },
      ],
      clinicalNotes: `Long-term transplant care is evolving toward precision medicine with pharmacogenomic-guided dosing, biomarker-based surveillance, and personalized immunosuppression intensity. Belatacept and mTOR inhibitors provide alternatives to CNI-based therapy for appropriate candidates. Patient-reported outcomes and cost-effectiveness are increasingly important considerations. Emerging technologies including xenotransplantation, 3D bioprinting, and regenerative medicine may transform the field. The ultimate goal is extending graft and patient survival while optimizing quality of life through sustainable, patient-centered care models.`,
    },
  },

  media: [
    {
      id: 'long-term-complications',
      type: 'diagram',
      filename: 'long-term-complications.png',
      title: 'Long-Term Transplant Complications',
      description: 'Overview of chronic immunosuppression complications by organ system',
    },
    {
      id: 'survival-curves',
      type: 'diagram',
      filename: 'graft-survival.png',
      title: 'Graft Survival by Organ Type',
      description: 'Comparative long-term graft survival data',
    },
  ],

  citations: [
    {
      id: 'kdigo-transplant-guidelines',
      type: 'article',
      title: 'KDIGO Clinical Practice Guideline for the Care of Kidney Transplant Recipients',
      authors: ['Kidney Disease: Improving Global Outcomes'],
      source: 'American Journal of Transplantation',
      accessedDate: '2026-01-28',
    },
    {
      id: 'ishtl-cardiac-vasculopathy',
      type: 'article',
      title: 'ISHLT Consensus Statement on Cardiac Allograft Vasculopathy',
      authors: ['Mehra MR'],
      source: 'Journal of Heart and Lung Transplantation',
      accessedDate: '2026-01-28',
    },
    {
      id: 'transplant-malignancy',
      type: 'article',
      title: 'Cancer Incidence in Solid Organ Transplant Recipients',
      authors: ['Engels EA', 'Pfeiffer RM'],
      source: 'Journal of the American Medical Association',
      accessedDate: '2026-01-28',
    },
  ],

  crossReferences: [
    {
      targetId: 'transplant-post-transplant-care',
      targetType: 'concept',
      relationship: 'parent',
      label: 'Post-Transplant Care',
    },
    {
      targetId: 'transplant-rejection-surveillance',
      targetType: 'concept',
      relationship: 'related',
      label: 'Rejection Surveillance',
    },
    {
      targetId: 'transplant-infection-prophylaxis',
      targetType: 'concept',
      relationship: 'related',
      label: 'Infection Prophylaxis',
    },
  ],

  tags: {
    systems: ['immune', 'cardiovascular'],
    topics: ['transplant', 'survivorship', 'long-term-care', 'outcomes'],
    keywords: ['long-term', 'survivorship', 'graft survival', 'cardiovascular', 'malignancy', 'bone health', 'quality of life'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      shelf: ['surgery', 'medicine'],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
