import { LegacyEducationalContent } from '../../types'

export const wellMaleExamContent: LegacyEducationalContent = {
  title: 'Well Male Exam',
  category: 'preventive-care',
  levels: {
    1: {
      description: 'Learn what to expect during a routine wellness visit.',
      content: `
# Your Wellness Visit: What to Expect

A well male exam is a routine check-up with your healthcare provider to monitor your overall health, even when you're feeling fine.

## What Happens During the Visit

- **Blood pressure check**: Quick and painless arm cuff measurement
- **Weight and height**: To calculate your body mass index (BMI)
- **Heart and lung exam**: Listening with a stethoscope
- **Abdominal exam**: Checking your organs
- **Skin check**: Looking for unusual spots or growths
- **Discussion about your lifestyle**: Diet, exercise, smoking, alcohol

## How Often Should You Go?

- **Ages 18-39**: Every 2-3 years if healthy
- **Ages 40-49**: Every 1-2 years
- **Ages 50+**: Annually

## Tips for Your Visit

1. Write down any questions beforehand
2. Bring a list of current medications
3. Be honest about your lifestyle habits
4. Mention any changes in your health

## Remember

Preventive care catches problems early, when they're most treatable. Don't wait for symptoms to appear.

---

**Level 1 Complete**: You now understand the basics of a well male exam.
      `,
      keyTakeaways: [
        'Well exams are preventive visits to maintain health',
        'Frequency increases with age',
        'Being honest with your doctor helps them care for you better'
      ],
      nextLevel: 'Ready to dive deeper? Learn about specific screenings and assessments.'
    },
    intermediate: {
      title: 'Understanding Screening Tests',
      description: 'Learn about the specific tests and assessments performed during well male exams.',
      content: `
# Screening Tests Explained

Your well male exam includes several important screening tests based on your age and risk factors.

## Vital Signs Assessment

| Test | What It Checks | Normal Range |
|------|----------------|--------------|
| Blood Pressure | Force of blood against arteries | Less than 120/80 mmHg |
| Heart Rate | Beats per minute | 60-100 bpm |
| BMI | Weight relative to height | 18.5-24.9 |
| Temperature | Body heat regulation | 97-99°F |

## Blood Tests

Your doctor may recommend:

- **Complete Blood Count (CBC)**: Checks for anemia, infection
- **Lipid Panel**: Cholesterol levels (HDL, LDL, triglycerides)
- **Blood Glucose**: Screens for diabetes/prediabetes
- **Thyroid Function**: Metabolism regulation

## Physical Examination Components

### Head and Neck
- Lymph node check
- Thyroid palpation
- Oral cavity inspection

### Cardiovascular
- Heart sounds for murmurs or irregularities
- Pulses in extremities
- Signs of swelling (edema)

### Abdominal
- Liver and spleen size
- Any areas of tenderness
- Hernia check (groin area)

### Neurological Basics
- Reflex testing
- Sensation checks
- Coordination assessment

## Age-Specific Additions

### Starting at 35
- Cholesterol screening every 5 years
- Diabetes screening every 3 years

### Starting at 45
- Diabetes screening every 3 years
- Colorectal cancer screening discussions

### Starting at 50
- Prostate cancer screening discussion
- Colonoscopy recommendations
- Lung cancer screening (if smoker)

---

**Level 2 Complete**: You now understand the specific screening tests and their purpose.
      `,
      keyTakeaways: [
        'Blood tests screen for diabetes, cholesterol, and other conditions',
        'Physical exams assess multiple body systems',
        'Screening recommendations increase with age'
      ],
      nextLevel: 'Explore how risk factors personalize your screening schedule.'
    },
    advanced: {
      title: 'Risk Factors and Personalized Screening',
      description: 'Understand how your personal health profile affects screening recommendations.',
      content: `
# Personalized Screening Based on Risk Factors

Not everyone needs the same screening schedule. Your personal risk factors determine what tests you need and when.

## Major Risk Factor Categories

### 1. Family History

\`\`\`
Risk increases if first-degree relative (parent, sibling) had:
- Heart disease before age 55
- Colon cancer before age 60
- Prostate cancer
- Diabetes
- Stroke
\`\`\`

**Impact**: May start screenings 5-10 years earlier

### 2. Lifestyle Factors

| Factor | Risk Level | Screening Adjustment |
|--------|------------|---------------------|
| Smoking (current/former) | High | Lung cancer screening at 50+, earlier COPD monitoring |
| Alcohol >14 drinks/week | Moderate | Liver function tests annually |
| Sedentary lifestyle | Moderate | Metabolic syndrome screening |
| Poor diet | Moderate | Earlier diabetes screening |

### 3. Occupational Exposures

- Chemical exposure → Liver/kidney function monitoring
- Dust/chemical inhalation → Pulmonary function tests
- Shift work → Metabolic health monitoring

### 4. Medical History

Previous conditions requiring enhanced monitoring:

- **Prediabetes**: Glucose testing every 6-12 months
- **High cholesterol**: Lipid panel annually
- **Hypertension**: BP checks every 3-6 months
- **Skin cancer history**: Dermatology exams annually

## Evidence-Based Screening Guidelines

### U.S. Preventive Services Task Force (USPSTF) Recommendations

| Screening | Age to Start | Frequency | Grade |
|-----------|--------------|-----------|-------|
| Blood Pressure | 18 | Every 3-5 years | A |
| Cholesterol | 35 (risk factors) | Every 5 years | A |
| Diabetes | 35-70 (overweight) | Every 3 years | B |
| Colorectal Cancer | 45-75 | Every 10 years (colonoscopy) | A |
| Abdominal Aneurysm | 65-75 (one-time, ever smoked) | Once | B |

### Understanding Grades

- **A**: High certainty, substantial benefit
- **B**: High certainty, moderate benefit
- **C**: Moderate benefit, individual decision
- **D**: Moderate certainty, no benefit or harm
- **I**: Insufficient evidence

## Calculated Risk Assessment Tools

### ASCVD Risk Calculator
- Estimates 10-year risk of heart disease/stroke
- Used to determine statin therapy
- Accounts for: age, sex, race, BP, cholesterol, smoking, diabetes

### PSA Decision Aid
- Personalized risk assessment
- Benefits vs. harms of screening
- Shared decision-making tool

---

**Level 3 Complete**: You understand how risk factors personalize preventive care.
      `,
      keyTakeaways: [
        'Family history and lifestyle significantly impact screening needs',
        'USPSTF grades indicate the strength of evidence for screenings',
        'Risk calculators help personalize prevention strategies'
      ],
      nextLevel: 'Examine the clinical evidence behind screening recommendations.'
    },
    expert: {
      title: 'Clinical Evidence and Guidelines',
      description: 'Deep dive into the research studies and evidence supporting preventive care recommendations.',
      content: `
# Evidence-Based Preventive Care

Understanding the research behind screening recommendations helps you make informed healthcare decisions.

## Number Needed to Screen (NNS)

The NNS represents how many people need to be screened over a period of time to prevent one death or adverse outcome.

### Key NNS Data

| Screening | NNS to Prevent One Death | Time Period |
|-----------|-------------------------|-------------|
| Colonoscopy (45-75) | ~1,000 | 10 years |
| AAA ultrasound (65-75 smokers) | ~500 | One-time |
| Lung cancer CT (high-risk) | ~320 | Annual × 3 years |
| Blood pressure screening | ~700 | 5 years |

### Understanding NNS

- **Lower NNS** = More efficient screening
- **Higher NNS** = More people screened for each benefit
- **Context matters**: Consider harms, costs, patient values

## Major Clinical Trials Influencing Guidelines

### Colorectal Cancer Screening

- **Mandel et al. (1993)**: FOBT screening reduced mortality by 33%
- **Flexible sigmoidoscopy trials**: 21-26% mortality reduction
- **Colonoscopy observational data**: 67-88% reduction in distal CRC incidence

### Prostate Cancer Screening

**PLCO Trial (USA)**:
- No mortality benefit after 13 years
- NNS = 1,411 over 10 years
- High false positive rate (as high as 70% after one test)

**ERSPC Trial (Europe)**:
- 21% relative risk reduction in mortality
- NNS = 781 over 13 years
- 27 men needed treatment to prevent one death

**Takeaway**: Shared decision-making essential due to trade-offs

### Abdominal Aortic Aneurysm

**UK Multicentre Aneurysm Screening Study**:
- 42% reduction in aneurysm-related mortality
- Cost-effective in men 65-75 who ever smoked
- NNS = ~500

### Lung Cancer Screening

**National Lung Screening Trial (NLST)**:
- 20% relative reduction in lung cancer mortality
- Low-dose CT vs. chest X-ray
- High false positive rate (96% over 3 rounds)
- NNS = 320

## Controversies in Screening

### Prostate Cancer (PSA)

\`\`\`
Arguments FOR:
- PSA is the only available screening test
- Early detection improves treatment options
- Mortality benefit shown in ERSPC trial

Arguments AGAINST:
- Overdiagnosis of indolent tumors
- Treatment complications (incontinence, impotence)
- False positives leading to unnecessary biopsies
\`\`\`

Current stance: Shared decision-making for men 55-69

### Testicular Cancer

\`\`\`
Why no formal screening recommendation:
- Incidence: 5-6 per 100,000 men (relatively rare)
- Most detected by patient self-exam
- No evidence clinical exam improves outcomes
- No RCTs conducted
\`\`\`

Current stance: Patient education on self-awareness

## Understanding Sensitivity and Specificity

### Mammography as a Model (for understanding concepts)

- **Sensitivity**: True positive rate (ability to detect disease)
- **Specificity**: True negative rate (ability to rule out disease)

Ideal test has high sensitivity AND high specificity

Real-world trade-offs:
- High sensitivity → More false positives
- High specificity → May miss some cases

---

**Level 4 Complete**: You understand the clinical evidence supporting screening guidelines.
      `,
      keyTakeaways: [
        'Number Needed to Screen quantifies screening efficiency',
        'Major trials (PLCO, ERSPC, NLST) shape current guidelines',
        'Screening controversies reflect complex benefit-harm trade-offs'
      ],
      nextLevel: 'Master advanced prevention strategies and future directions.'
    },
    master: {
      title: 'Advanced Prevention Strategies',
      description: 'Integrate comprehensive prevention strategies with emerging technologies and personalized medicine approaches.',
      content: `
# Mastering Preventive Care for Men

Advanced prevention integrates evidence-based guidelines with personalized medicine and emerging technologies.

## The Prevention Hierarchy

### Primary Prevention
\`\`\`
Goal: Prevent disease before it occurs

Strategies:
- Vaccination (HPV, hepatitis, influenza, pneumococcal, shingles)
- Lifestyle modification
- Chemoprevention (aspirin for CVD, finasteride for prostate)
- Occupational hazard mitigation
\`\`\`

### Secondary Prevention
\`\`\`
Goal: Detect disease early, at pre-symptomatic stage

Strategies:
- All screening tests discussed
- Biomarker monitoring
- Genetic testing for high-risk individuals
- Imaging surveillance for known high-risk groups
\`\`\`

### Tertiary Prevention
\`\`\`
Goal: Reduce complications and recurrence

Strategies:
- Disease management programs
- Cardiac rehabilitation
- Cancer survivorship care plans
- Medication adherence optimization
\`\`\`

## Genetic Risk Assessment

### Hereditary Cancer Syndromes

**BRCA1/2 in Men**:
- Breast cancer: Lifetime risk 1-2% (vs 0.1% general)
- Prostate cancer: Earlier onset, more aggressive
- Pancreatic cancer: Increased risk
- Recommendation: Genetic counseling with family history

**Lynch Syndrome (HNPCC)**:
- Colorectal cancer: 40-80% lifetime risk
- Recommend colonoscopy every 1-2 years starting at 20-25
- Also consider: Urothelial cancer screening

### Polygenic Risk Scores

Emerging tool combining:
- Multiple genetic variants
- Each with small effect
- Combined risk stratification
- May personalize screening in future

## Biomarker-Based Prevention

### Coronary Calcium Score (CAC)

\`\`\`
What: CT scan measuring calcium in coronary arteries

Evidence:
- MESA study: CAC predicts events beyond traditional risk factors
- Zero CAC: Low short-term risk (may defer statin)
- High CAC: High risk, may intensify prevention

Guidance:
- Consider for intermediate risk (ASCVD 7.5-20%)
- Shared decision-making for lower risk
\`\`\`

### Lipoprotein(a) Testing

\`\`\`
What: Genetically determined, Lp(a) increases thrombosis risk

Evidence:
- Independent risk factor for CVD
- Largely unaffected by lifestyle
- Screening may identify high-risk for earlier intervention

Consider testing:
- Strong family history of premature CVD
- Personal history of premature CVD
- Family history of elevated Lp(a)
\`\`\`

## Precision Prevention Timeline

### Age 18-29
- Establish care relationship
- Baseline health metrics
- Vaccination update
- Lifestyle counseling
- Risk factor assessment

### Age 30-39
- Continue above
- Cholesterol screening (if risk factors)
- Blood pressure every 2 years
- Diabetes screening (if overweight/risk factors)

### Age 40-49
- Cholesterol every 5 years
- Diabetes screening every 3 years
- Colorectal cancer screening at 45
- Prostate cancer discussion at 45 (African American) or 50 (average risk)

### Age 50-64
- Annual wellness visit
- All screenings above
- Consider CAC scoring (intermediate risk)
- Vaccinations: Shingles at 50, pneumococcal if indicated
- Lung cancer screening if smoker

### Age 65+
- AAA screening (if ever smoked)
- Abdominal exam for hernia
- Fall risk assessment
- Cognitive health discussion
- Comprehensive medication review

## Emerging Technologies

### Wearable Health Monitoring

\`\`\`
Current capabilities:
- Heart rate and rhythm (AFib detection)
- Sleep quality assessment
- Activity tracking
- Blood oxygen monitoring

Future potential:
- Continuous blood pressure
- Blood glucose monitoring
- Early warning systems
\`\`\`

### AI in Screening

\`\`\`
Applications:
- Skin cancer image analysis
- Retinal imaging for diabetic retinopathy
- ECG interpretation
- Risk prediction algorithms

Cautions:
- Validation required
- Integration into clinical workflow
- Equity considerations
\`\`\`

## Shared Decision-Making Framework

### The 5-Step Process

1. **Team up**: Doctor and patient as partners
2. **Test understanding**: Assess patient knowledge
3. **Evidence sharing**: Present benefits and harms clearly
4. **Patient preference**: Explore values and concerns
5. **Decision**: Make an informed choice together

### Example: PSA Screening Decision

\`\`\`
Discuss:
- Your individual risk factors
- Potential benefits: Early detection
- Potential harms: False positives, overdiagnosis, treatment complications
- Your values: Anxiety about cancer vs. tolerance for uncertainty
- Your preferences: Would you treat early prostate cancer?

Result: Informed choice aligned with your values
\`\`\`

---

**Level 5 Complete**: You have mastered comprehensive preventive care strategies for men.
      `,
      keyTakeaways: [
        'Prevention operates at three levels: primary, secondary, and tertiary',
        'Genetic risk and biomarkers enable increasingly personalized prevention',
        'Shared decision-making remains central to value-concordant preventive care'
      ],
      nextLevel: null
    }
  }
}
