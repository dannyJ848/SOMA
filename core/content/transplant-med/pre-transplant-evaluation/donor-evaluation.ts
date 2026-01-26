import { EducationalContent } from '../../types';

export const donorEvaluation: EducationalContent = {
  id: 'donor-evaluation',
  type: 'concept',
  name: 'Living Donor Evaluation',
  alternateNames: ['Living Donor Assessment', 'Donor Screening'],

  levels: {
    1: {
      level: 1,
      summary: 'Living donors must complete a comprehensive medical and psychological evaluation to ensure donation is safe for them.',
      explanation: `Before someone can donate an organ while they are still alive, they must go through a careful evaluation process. This is called living donor evaluation.

**Why Evaluation is So Important**

The donor's safety is the #1 priority:
- Donation is major surgery with risks
- We must ensure the donor will be healthy afterward
- The donor must understand all risks
- No one should be pressured into donating

**The Evaluation Team**

*Independent Donor Team:*
- Different doctors than the recipient's doctors
- Separate from the recipient's care
- Protects the donor's interests
- Ensures voluntary, informed consent

*Team members:*
- Transplant surgeon (evaluates surgical risk)
- Nephrologist/hepatologist (organ-specific evaluation)
- Psychologist (mental health assessment)
- Social worker (social support assessment)
- Independent living donor advocate (protects donor's rights)

**What is Checked**

*Medical History:*
- Overall health status
- Previous surgeries and hospitalizations
- Current medications
- Family medical history
- Chronic conditions

*Physical Examination:*
- Vital signs (blood pressure, heart rate)
- Overall physical condition
- Organ-specific examination
- Signs of any underlying disease

*Basic Tests:*
- Blood tests (kidney/liver function)
- Urine tests (for kidney donors)
- Imaging (ultrasound, CT scan)
- ECG (heart tracing)

**Key Requirements**

*Health status:*
- Must be in excellent general health
- No major medical problems
- Normal organ function
- Blood pressure controlled (if elevated)

*Blood type:*
- Must be compatible with recipient
- Can be same blood type or O (universal donor)
- ABO incompatibility may be treatable with desensitization

*Psychological readiness:*
- Understands risks and benefits
- Not being pressured by anyone
- Emotionally prepared
- Coping mechanisms adequate

*Social support:*
- Family members support the decision
- Help available during recovery
- Time off work available
- Transportation to appointments`,
      keyTerms: [
        { term: 'Living Donor', definition: 'A healthy person who chooses to donate an organ or part of an organ to someone in need' },
        { term: 'Donor Evaluation', definition: 'Series of medical tests to ensure it\'s safe for someone to donate' },
        { term: 'Blood Type', definition: 'Type of blood (A, B, AB, O) that must be compatible between donor and recipient' },
        { term: 'Informed Consent', definition: 'Process of learning about risks and benefits before agreeing to a medical procedure' },
        { term: 'Independent Living Donor Advocate', definition: 'Professional whose job is to protect the donor\'s rights and welfare' }
      ],
      analogies: [
        'Living donor evaluation is like a pre-flight check - making sure the "plane" (donor) is safe for the journey.',
        'The independent donor advocate is like a guardian angel watching specifically for the donor\'s wellbeing.',
      ],
      examples: [
        'A mother wants to donate a kidney to her son. The independent team ensures she is doing this voluntarily and safely.',
        'Tests reveal a potential donor has high blood pressure. Treatment is started before donation proceeds.',
        'A psychological evaluation finds a donor feels pressured by family. The donation is postponed until this is resolved.',
      ],
    },
    2: {
      level: 2,
      summary: 'Donor evaluation includes blood tests, imaging, cardiac assessment, psychological testing, and social work assessment to ensure safety.',
      explanation: `Living donor evaluation is a comprehensive process involving multiple medical, surgical, and psychosocial assessments.

**Medical Evaluation Components**

*Blood Tests:*
- Complete blood count (CBC)
- Comprehensive metabolic panel
- Kidney function (creatinine, GFR)
- Liver function tests (AST, ALT, bilirubin)
- Blood sugar (glucose, HbA1c)
- Cholesterol and lipid profile

*Infectious Disease Screening:*
- HIV
- Hepatitis B and C
- Syphilis
- Tuberculosis (PPD or IGRA)
- CMV and EBV status
- Other region-specific tests

*Urinalysis:*
- Protein (proteinuria)
- Blood (hematuria)
- Glucose
- Infection signs
- Microscopic examination

*Imaging Studies:*
- Ultrasound of kidneys/liver
- CT angiography for vascular anatomy
- MRI if needed
- Assesses organ structure and anatomy

**Cardiac Evaluation**

*For all donors:*
- Resting ECG
- Echocardiogram (ultrasound of heart)

*Additional testing based on age/risk:*
- Stress test (age >45-50 typically)
- Nuclear stress test
- Coronary angiography if indicated

*Purpose:*
- Ensure heart can handle surgery
- Identify coronary artery disease
- Assess overall cardiac function

**Anatomic Considerations**

*Kidney anatomy:*
- Single renal artery preferred
- Multiple renal arteries (common)
- Kidney size and position
- Renal vein anatomy
- Stones or cysts

*Liver anatomy:*
- Liver volume (must be >30% remnant)
- Biliary anatomy
- Vascular anatomy
- Fat content (steatosis)
- Anomalies or variants

**Psychological Evaluation**

*Components:*
- Clinical interview
- Personality assessment
- Coping style assessment
- Risk factor identification (depression, anxiety)
- Understanding evaluation and decision

*Red flags:*
- Coercion (being pressured)
- Unrealistic expectations
- Current psychiatric illness
- Substance abuse
- Impulsive decision-making

**Social Work Assessment**

*Social support evaluation:*
- Who will help during recovery?
- Family member involvement
- Care for children/dependents during recovery
- Financial impact assessment

*Practical considerations:*
- Time off work available?
- Insurance coverage?
- Transportation to appointments?
- Housing situation appropriate?

*Independent Living Donor Advocate:*
- Protects donor's rights and welfare
- Separate from recipient's team
- Ensures voluntary, informed decision
- Addresses any concerns or conflicts of interest`,
      keyTerms: [
        { term: 'CT Scan', definition: 'Imaging test that creates detailed pictures of inside the body' },
        { term: 'MRI', definition: 'Magnetic Resonance Imaging - scan using magnets to create detailed images' },
        { term: 'Glomerular Filtration Rate (GFR)', definition: 'Measure of how well kidneys are working' },
        { term: 'Crossmatch', definition: 'Final test mixing donor and recipient blood to check for antibodies' },
        { term: 'Independent Donor Evaluation Team', definition: 'Medical professionals separate from the recipient\'s team who evaluate the donor' }
      ],
      analogies: [
        'Psychological evaluation is like a safety check for the donor\'s mental wellbeing - making sure they\'re emotionally prepared.',
        'Social work assessment ensures the donor won\'t be left alone without support during recovery.',
      ],
      examples: [
        'A donor\'s stress test shows mild coronary disease. Angiography is done and shows no significant blockages.',
        'CT scan shows donor has two renal arteries. This is acceptable for donation but noted for surgical planning.',
        'Social worker learns donor lives alone. Plans are made for family member to stay with them during recovery.',
      ],
    },
    3: {
      level: 3,
      summary: 'Donor evaluation criteria include GFR >80, no proteinuria, controlled blood pressure, adequate organ volume, and absence of absolute contraindications.',
      explanation: `Living donor evaluation uses specific medical criteria to determine who can safely donate.

**Absolute Contraindications to Living Donation**

*Kidney Donation:*
- Uncontrolled hypertension (>160/100 despite medications)
- Diabetes mellitus (type 1 or 2)
- Significant proteinuria (>300 mg/day, or albumin:creatinine >0.3)
- Active kidney disease (FSGS, glomerulonephritis)
- Renal artery stenosis
- Solitary kidney (only one kidney)
- Horseshoe kidney (technically challenging)
- Advanced nephrosclerosis

*Liver Donation:*
- Active liver disease (fatty liver disease, hepatitis)
- Cirrhosis of any cause
- Portal hypertension
- Abnormal liver function tests
- Insufficient future liver remnant (<30%)
- Hemochromatosis, alpha-1 antitrypsin deficiency
- Malignancy involving liver

*Any Donation:*
- Active malignancy (except some skin cancers)
- Active infection requiring treatment
- Pregnancy (may be considered after delivery)
- Severe cardiac disease (untreatable)
- Severe pulmonary disease
- Life expectancy <10 years due to comorbidities

**Medical Eligibility Criteria**

*Kidney Donation Criteria:*
- GFR >80 mL/min/1.73m² (or age-adjusted)
- Normal urinalysis (no protein, blood, glucose)
- Normal blood pressure or well-controlled (<140/90)
- No significant proteinuria
- Two normally functioning kidneys
- No history of kidney stones (or acceptable risk)
- No renal artery stenosis

*Liver Donation Criteria:*
- Normal liver function tests
- No evidence of liver disease
- Adequate liver volume for split
- Remnant liver volume >30%
- No significant steatosis (<10-30% acceptable)
- Normal biliary anatomy
- No portal hypertension

*Cardiac Criteria:*
- Normal ECG for age
- Normal echocardiogram
- Normal stress test if performed
- No significant coronary artery disease
- Normal blood pressure and heart rate

**Surgical Risk Assessment**

*ASA classification:*
- Most donors should be ASA I or II
- ASA III may be acceptable in some cases
- ASA IV or V generally not acceptable

*Anesthesia risk:*
- Mallampati score <4 (airway assessment)
- No significant comorbidities that increase anesthesia risk
- BMI <35 preferred (higher increases risk)

**Laboratory Testing**

*Kidney donation tests:*
- Creatinine <1.2 mg/dL (women) or <1.4 mg/dL (men)
- GFR >80 mL/min/1.73m²
- Urine protein <30 mg/dL (dipstick negative)
- 24-hour urine protein <300 mg
- No hematuria

*Liver donation tests:*
- AST, ALT <2x upper limit of normal
- Bilirubin normal
- INR normal (not on blood thinners)
- Platelets normal
- Albumin normal
- No evidence of liver disease

**Anatomic Imaging**

*Renal CT angiography:*
- Single renal artery preferred
- Multiple arteries acceptable
- Early branching favorable
- No renal artery stenosis
- Kidneys >10 cm length preferred

*Liver MRI/CT:*
- Liver volume adequate for split
- Fatty liver assessment
- Vascular anatomy
- Biliary anatomy
- No concerning lesions

**Age Considerations**

*Upper age limit:*
- Most centers: up to age 65-70
- Some centers up to age 75 with careful evaluation
- Physiologic age more important than chronologic
- Frailty assessment for older donors

*Lower age limit:*
- Must be at least 18 years old
- Some centers require >21 for liver donation`,
      keyTerms: [
        { term: 'Proteinuria', definition: 'Abnormal amount of protein in urine, indicating kidney damage' },
        { term: 'Hypertension', definition: 'High blood pressure that may increase risks for kidney donors' },
        { term: 'Hepatic Steatosis', definition: 'Fatty liver disease; mild fat (<10%) acceptable for donation' },
        { term: 'Remnant Liver', definition: 'Amount of liver remaining in donor after donation; must be at least 30% of original volume' },
        { term: 'Coercion', definition: 'Being pressured or forced to donate against one\'s will' }
      ],
      clinicalNotes: 'GFR must be >80 (or age-adjusted). Proteinuria >300 mg/day contraindicates. Liver steatosis >30% contraindicates. Remnant liver must be >30%. ASA I-II preferred. Age >70 requires special consideration. APOL1 testing for African American donors.',
    },
    4: {
      level: 4,
      summary: 'Advanced donor evaluation includes APOL1 testing, precise GFR measurement, assessment of anatomic variants, and risk stratification for long-term outcomes.',
      explanation: `Advanced living donor evaluation incorporates cutting-edge diagnostics to optimize safety and outcomes.

**Precise GFR Measurement**

*When indicated:*
- Borderline GFR (60-80 mL/min)
- Donor size mismatch concerns
- Discrepancy between eGFR and measured GFR
- Living donation requires accuracy

*Methods:*
- Iothalamate clearance (gold standard)
- iothalamate or iohexol clearance
- 24-hour urine creatinine clearance
- Nuclear medicine GFR measurement
- CT or MRI-based GFR

*Clinical scenarios:*
- Small donor, large recipient
- Older donor wanting donation
- Borderline function after adjustment

**APOL1 Genetic Testing**

*Why it matters:*
- APOL1 risk variants in African Americans
- Two risk alleles = high-risk genotype
- 2x higher risk of ESRD after donation
- Important for informed consent

*Testing indications:*
- All African American living donor candidates
- Others with African ancestry
- Donor preference after education

*Clinical implications:*
- High-risk genotype may contraindicate donation
- Discuss as part of informed consent
- Some centers exclude APOL1 high-risk donors
- Others allow with extensive counseling

**Anatomic Variants**

*Renal artery variants:*
- Multiple renal arteries (20-30% prevalence)
- Early branching arteries
- Retroaortic left renal vein
- Accessory renal arteries
- All acceptable with surgical adaptation

*Surgical implications:*
- Multiple arteries increase complexity
- Early branching may limit transplant technique
- Retroaortic vein requires modification

*Liver vascular anatomy:*
- Hepatic arterial variants common
- Portal vein variants important
- Anomalous biliary drainage
- Replaced or accessory hepatic arteries

*Complex anatomy:*
- May require specialized surgical techniques
- Experienced surgeons can adapt
- May increase operative time
- Usually not a contraindication

**Kidney Stone Assessment**

*History and imaging:*
- Previous kidney stones
- CT scan identifies calcifications
- Ultrasound may miss small stones
- Need for stone analysis if present

*Evaluation criteria:*
- Single stone >5 years ago acceptable
- Multiple stones concerning
- Current stone disease contraindicates
- Need for stone treatment first

*Risk factors:*
- Family history of stones
- Dietary factors
- Hydration status
- Metabolic evaluation

**Cardiovascular Risk Assessment**

*Advanced testing:*
- Coronary CT angiography (non-invasive)
- Cardiac MRI for function
- Stress echocardiography
- Dobutamine stress echo for accuracy

*Risk stratification:*
- Age >50 for all donors
- Additional risk factors (smoking, hypertension, diabetes)
- Family history of heart disease
- Lipid abnormalities

**Long-Term Risk Assessment**

*Lifetime ESRD risk:*
- General population: ~0.3% lifetime risk
- After donation: ~0.5-0.8% (about 2x increase)
- Still much lower than dialysis population
- Risk varies by donor characteristics

*Pregnancy considerations:*
- Future pregnancies after donation
- Preeclampsia risk slightly increased
- Need careful monitoring during pregnancy
- Generally successful pregnancies possible

*Mortality risk:*
- Kidney donation: ~0.03% mortality
- Liver donation: 0.2-0.5% mortality
- Risks acceptable with proper evaluation
- Lower than many other surgeries

**Ethical Considerations**

*Informed consent complexity:*
- Multiple sources of risk information
- Statistical risk vs. individual experience
- Long-term uncertainties
- Family implications

*Alternative options:*
- Deceased donor transplant
- Desensitization protocols
- Paired donation chains
- Waiting list for deceased donor`,
      keyTerms: [
        { term: 'Iothalamate Clearance', definition: 'Precise measurement of kidney filtration rate using a radioactive tracer' },
        { term: 'Solitary Kidney', definition: 'Being born with only one kidney or having lost one kidney' },
        { term: 'Horseshoe Kidney', definition: 'Congenital condition where the two kidneys are fused together' },
        { term: 'APOL1', definition: 'Gene variants associated with increased kidney disease risk in African Americans' },
        { term: 'Liver Remnant', definition: 'The portion of liver left in donor after donation; must be at least 30% of original volume' }
      ],
      clinicalNotes: 'Iothalamate clearance needed when GFR 60-80. APOL1 high-risk (2 risk alleles) increases ESRD risk 2x. Multiple renal arteries (20-30%) acceptable. Kidney donation mortality ~0.03%; liver ~0.2-0.5%. Preeclampsia risk slightly increased after donation.',
    },
    5: {
      level: 5,
      summary: 'Advanced donor evaluation includes complex anatomy assessment, financial counseling, long-term outcome data, and emerging alternatives to donation.',
      explanation: `Expert-level living donor evaluation encompasses nuanced assessment of complex scenarios and evolving practices.

**Complex Anatomic Variants**

*Kidney Anatomy Complexity:*
- Multiple renal arteries with early branching
- Polar arteries (supply upper or lower pole only)
- Retropelvic arteries (course behind renal vein)
- Circumaortic renal artery
- Renal vein anomalies

*Clinical implications:*
- May limit laparoscopic approach
- May require open conversion
- Increases surgical time and complexity
- Experienced surgeons can manage most variants
- Some centers exclude certain variants

*Liver Vascular Complexity:*
- Replaced right hepatic artery
- Accessory hepatic arteries
- Anomalous portal vein anatomy
- Variant hepatic venous drainage
- Complex biliary anatomy

*Surgical approaches:*
- Hand-assisted laparoscopy
- Hybrid techniques
- Open surgery when necessary
- Intraoperative ultrasound guidance
- Back-up surgical plans

**Risk-Benefit Optimization**

*Older donors (age >65):*
- Must have exceptional health
- No hypertension, diabetes, obesity
- Normal cardiac testing
- GFR >80 with minimal proteinuria
- Careful risk-benefit discussion

*Obese donors (BMI 30-35):*
- Acceptable with careful evaluation
- Higher surgical risk
- Longer recovery time
- May affect graft function
- Weight loss may be recommended

*Medical risk factors:*
- Controlled hypertension acceptable
- Well-controlled diabetes with no complications
- Previous pregnancies acceptable
- Previous abdominal surgery may complicate
- Each situation individualized

**Advanced Imaging Modalities**

*3D CT Reconstruction:*
- Vascular mapping
- Surgical planning
- Anomaly identification
- Patient-specific modeling

*MRI Elastography:*
- Quantitative liver fat measurement
- Identifies significant steatosis
- Helps with borderline cases
- More precise than ultrasound

*Functional MRI:*
- Liver function assessment
- Split function evaluation
- May identify focal abnormalities

**Controversial Issues**

*APOL1 disclosure ethics:*
- When to test? (some question universal screening)
- How to disclose? (impact on decision vs. coercion)
- What are alternatives? (deceased donor, desensitization)
- Long-term uncertainties remain

*Acceptable medical risk:*
- How much risk is acceptable?
- Who decides? (donor autonomy vs. protection)
- Evolving understanding of long-term risks
- Donor must be primary decision-maker

*Financial considerations:*
- Recipient's insurance covers donor costs
- Lost wages during recovery
- Childcare costs during recovery
- Some centers provide stipends
- No payment for organs (ethical principle)

*Long-Term Outcomes Data**

*Kidney donors 20+ year outcomes:*
- 97% survival at 20 years
- No significant decrease in lifespan
- Slightly higher risk of hypertension
- Slightly higher risk of preeclampsia
- Excellent quality of life

*Liver donors 15+ year outcomes:*
- Survival similar to matched controls
- Rare complications may emerge
- Generally healthy long-term
- Quality of life good

*Psychological outcomes:*
- 95% satisfied with decision
- Improved self-esteem in most
- Relationship strain in some cases
- Depression rare but possible
- Most would donate again

**Alternatives to Donation**

*For incompatible pairs:*
- Paired kidney donation
- ABO incompatible transplantation
- Desensitization protocols
- Non-directed donor chains

*For donor concerns:*
- Deceased donor transplant
- Desensitization for sensitized recipients
- Optimal medical management instead

*For recipient needs:*
- Waitlist strategies
- Expanded criteria donor organs
- Machine perfusion technologies
*Emerging Approaches*

*Minimally invasive donor surgery:*
- Single-port laparoscopy
- Retraperoscopic surgery
- Faster recovery
- Less pain
- May increase donation interest

*Remote evaluation:*
- Telemedicine screening
- Local testing, central review
- Expands donor pool
- More convenient for donors

*Enhanced recovery protocols:*
- Early ambulation
- Optimal pain management
- Shorter hospital stay
- Reduced complications
- Lower costs`,
      keyTerms: [
        { term: 'Polar Artery', definition: 'Renal artery supplying only the upper or lower pole of the kidney' },
        { term: 'Circumaortic Renal Artery', definition: 'Renal artery that circles the aorta before reaching the kidney' },
        { term: 'Hand-Assisted Laparoscopy', definition: 'Minimally invasive surgery using hand assistance through small incision' },
        { term: '3D CT Reconstruction', definition: 'Imaging technique creating detailed 3D models of blood vessels and organs' },
        { term: 'Retropelvic', definition: 'Located behind the renal vein; anatomic variant in kidney blood supply' }
      ],
      clinicalNotes: '3D CT aids vascular mapping. MRI elastography quantifies liver fat. Hand-assisted laparoscopy for complex anatomy. 20-year kidney donor survival 97%. APOL1 disclosure remains controversial. Recovery protocols reduce hospital stay. Telemedicine expands donor pool.',
    },
  },

  media: [
    {
      id: 'donor-evaluation-flowchart',
      type: 'diagram',
      filename: 'living-donor-evaluation.svg',
      title: 'Living Donor Evaluation Process',
      description: 'Flowchart showing the living donor evaluation process',
    },
  ],
  citations: [
    {
      id: 'live-donor-guidelines',
      type: 'article',
      title: 'Consensus Statement on the Practice of Living Kidney Donation',
      authors: ['Organ Procurement and Transplantation Network'],
      source: 'American Journal of Transplantation',
    },
  ],
  crossReferences: [
    { targetId: 'transplant-overview', targetType: 'concept', relationship: 'parent', label: 'Transplant Overview' },
    { targetId: 'candidacy', targetType: 'concept', relationship: 'related', label: 'Candidacy Determination' },
  ],
  tags: {
    systems: ['urinary', 'hepatobiliary'],
    topics: ['transplantation', 'surgery', 'ethics'],
    keywords: ['living donor', 'donor evaluation', 'GFR', 'APOL1', 'laparoscopic donation'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['surgery', 'medicine'] },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};
