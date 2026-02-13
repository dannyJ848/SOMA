import { LegacyEducationalContent } from '../../types'

export const screeningMenContent: LegacyEducationalContent = {
  title: 'Health Screenings for Men',
  category: 'preventive-care',
  levels: {
    1: {
      description: 'Learn what health screenings are and why they matter for men.',
      content: `
# What Are Health Screenings?

Health screenings are medical tests that check for diseases or health problems before you have symptoms. Think of them as preventive maintenance for your body—like changing your oil before your car breaks down.

## Why Screenings Matter

\`\`\`Life-saving example:
Colorectal cancer screening can detect:
- Precancerous polyps (can be removed before cancer develops)
- Early-stage cancer (much more treatable)
- Result: 60-70% reduction in colorectal cancer deaths
\`\`\`

## Common Screenings for Men

### Heart and Blood Vessel Health
- **Blood pressure**: Checks for hypertension
- **Cholesterol**: Measures fats in blood that can clog arteries

### Cancer Screenings
- **Colorectal**: Checks colon and rectum for cancer
- **Prostate**: Prostate-specific antigen (PSA) blood test
- **Lung**: For current or former smokers

### Diabetes
- **Blood sugar**: Tests for diabetes or prediabetes

### Other Important Screenings
- **Abdominal aortic aneurysm**: One-time ultrasound for men 65+ who smoked
- **Skin cancer**: Annual skin checks by dermatologist

## When to Start Screenings

Your age determines when most screenings begin:

| Age | Key Screenings to Discuss |
|-----|---------------------------|
| 18-39 | Blood pressure, weight/BMI, cholesterol if at risk |
| 40-49 | Blood pressure, cholesterol, diabetes if at risk, colorectal at 45 |
| 50-64 | All above, plus prostate and lung (if applicable) |
| 65+ | All above, plus abdominal aortic aneurysm |

## Your Screening Checklist

Before your next visit, check:
- [ ] Am I up to date on blood pressure screening?
- [ ] When was my last cholesterol test?
- [ ] Have I started colorectal cancer screening?
- [ ] Should I discuss prostate screening with my doctor?

## Remember

Screenings save lives by finding problems early, when they're most treatable. Ask your doctor which screenings are right for you based on your age, health history, and risk factors.

---

**Level 1 Complete**: You now understand the basics of health screenings for men.
      `,
      keyTakeaways: [
        'Screenings detect disease before symptoms appear',
        'Key screenings include blood pressure, cholesterol, diabetes, and cancer screenings',
        'Screening recommendations are based on age and risk factors'
      ],
      nextLevel: 'Learn detailed screening schedules and what to expect from each test.'
    },
    intermediate: {
      title: 'Screening Schedules and Test Details',
      description: 'Detailed information about when and how often men should have specific health screenings.',
      content: `
# Your Complete Screening Schedule

Understanding when to get screened and what each test involves helps you stay on top of preventive care.

## Cardiovascular Screenings

### Blood Pressure

| Age | Frequency | Target |
|-----|-----------|--------|
| 18+ | Every 3-5 years (if normal) | Less than 120/80 |
| 40+ | Annually | |
| High BP | Every 6-12 months | |

**What to expect**: Arm cuff, takes 1-2 minutes, painless

### Cholesterol (Lipid Panel)

| Age | Risk Factors | Frequency |
|-----|--------------|-----------|
| 20-35 | None | Every 5 years |
| 20-35 | Risk factors present | Every 1-2 years |
| 35+ | All men | Every 5 years (more often if elevated) |

**What to expect**: Fasting blood draw (no food 8-12 hours), results in 1-2 days

**What it measures**:
- Total cholesterol: Below 200 mg/dL
- LDL (bad): Below 100 mg/dL
- HDL (good): Above 40 mg/dL
- Triglycerides: Below 150 mg/dL

## Cancer Screenings

### Colorectal Cancer

**Starting age**: 45 for average risk

**Options**:

| Test | Frequency | Pros | Cons |
|------|-----------|------|------|
| Colonoscopy | Every 10 years | Gold standard, examines entire colon | Prep required, sedation |
| FIT stool test | Annually | Non-invasive, at home | Less sensitive, requires annual testing |
| Cologuard | Every 3 years | At home, detects DNA changes | Higher false positive rate |
| CT colonography | Every 5 years | No sedation | Still need prep, radiation exposure |

**Screening stops at age 75** for average risk (shared decision-making 76-85)

### Prostate Cancer (PSA)

**Starting discussion age**:
- Average risk: Age 50
- African American or family history: Age 45
- BRCA mutation: Age 40

**Frequency**: Every 2-4 years if screening chosen

**What to expect**: Simple blood test, no preparation needed

**Important**: This is a shared decision—discuss benefits and risks with your doctor

### Lung Cancer

**Eligibility**:
- Age 50-80
- Current smoker or quit within past 15 years
- 20 pack-year smoking history (1 pack/day for 20 years)

**Test**: Low-dose CT scan annually

**What to expect**: 10-minute scan, painless, no needles

## Diabetes Screening

**Starting age**: 35 (more often if overweight or risk factors)

**Frequency**: Every 3 years (or as directed)

**Tests**:
- **A1C**: Measures average blood sugar over 3 months (5.7% or higher = prediabetes)
- **Fasting glucose**: No food for 8+ hours (100-125 mg/dL = prediabetes)
- **Glucose tolerance test**: Drink sugary solution, measure blood sugar response

## Other Important Screenings

### Abdominal Aortic Aneurysm (AAA)

**One-time screening**:
- Men aged 65-75 who ever smoked
- Ultrasound of abdomen
- Takes about 10 minutes, painless

### Skin Cancer

**Frequency**: Annual full-body skin exam by dermatologist

**Self-exams**: Monthly self-check of moles and spots

**ABCDE rule for concerning spots**:
- **A**symmetry: One half doesn't match the other
- **B**order: Irregular, ragged edges
- **C**olor: Different colors within same spot
- **D**iameter: Larger than pencil eraser (6mm)
- **E**volving: Changing in size, shape, or color

## Risk Factors Requiring Earlier Screening

\`\`\`
Start screenings earlier if you have:
- Family history of early heart disease (before 55 in father/brother)
- Family history of colon cancer before age 60
- Overweight or obese (BMI ≥25)
- Tobacco use (current or former)
- Physical inactivity
- Unhealthy diet
- Diabetes or prediabetes
- High blood pressure
\`\`\`

---

**Level 2 Complete**: You have a detailed understanding of screening schedules.
      `,
      keyTakeaways: [
        'Most cardiovascular screenings start at age 20-35, depending on risk factors',
        'Colorectal cancer screening now starts at age 45 for average risk',
        'PSA screening is a shared decision, not automatic for all men'
      ],
      nextLevel: 'Explore how your personal risk factors affect screening recommendations.'
    },
    advanced: {
      title: 'Risk-Based Screening Personalization',
      description: 'Learn how family history, lifestyle, and medical history personalize your screening needs.',
      content: `
# Personalizing Your Screenings

Your risk profile determines when you start screening and how often you're tested. One size does not fit all.

## Family History Impact

### Cardiovascular Disease Family History

**Significant family history**:
- Heart attack, angina, or stroke in first-degree relative before age 55 (male) or 65 (female)

**Screening adjustments**:
- Cholesterol: Start at age 20 (instead of 35)
- Blood pressure: Every 1-2 years from age 20
- Consider advanced lipid testing (Lp(a), apoB)
- Consider coronary calcium score at age 40+

### Colorectal Cancer Family History

| Family History | Starting Age | Frequency |
|----------------|--------------|-----------|
| No family history | 45 | Every 10 years |
| One 1st-degree relative with CRC at 60+ | 45 | Every 10 years |
| One 1st-degree relative with CRC <60 | 40 (or 10 years before diagnosis) | Every 5 years |
| Two+ 1st-degree relatives with CRC | 40 (or 10 years before earliest diagnosis) | Every 5 years |
| Known genetic syndrome (Lynch, FAP) | 20-25 (or 2-5 years before earliest case) | Every 1-2 years |

### Prostate Cancer Family History

**Screening adjustments**:
- One first-degree relative: Start discussion at 45
- Multiple relatives or early-onset (<50): Start discussion at 40
- Consider genetic counseling for BRCA or HOXB13 mutations

## Lifestyle-Based Risk Adjustment

### Tobacco Use

\`\`\`
Current or former smokers (quit <15 years ago):
- Lung cancer screening: Start at 50 with 20+ pack-year history
- Abdominal aortic aneurysm: One-time screen at 65
- Cardiovascular screening: More frequent monitoring
- COPD assessment: Spirometry if symptomatic
\`\`\`

### Alcohol Use

\`\`\`
Heavy alcohol use (>14 drinks/week):
- Liver function tests: Annually
- Blood pressure monitoring: Every 6 months
- Complete blood count: Annually (check for anemia)
- Consider screening for alcohol use disorder
\`\`\`

### Obesity (BMI ≥30)

\`\`\`
Additional screening considerations:
- Diabetes: Start at age 35, every 1-2 years
- Fatty liver disease: Consider liver ultrasound if labs abnormal
- Sleep apnea screening: Discuss symptoms with doctor
- Osteoarthritis monitoring: Joint evaluation as needed
\`\`\`

### Occupational Exposures

| Exposure | Additional Screening |
|----------|---------------------|
| Asbestos | Lung cancer CT, pulmonary function |
| Silica | TB screening, lung monitoring |
| Chemicals (benzene, etc.) | Blood counts, liver/kidney function |
| Shift work | Metabolic syndrome screening |

## Medical History Modifications

### Previous Abnormal Findings

\`\`\`
Elevated PSA (but no cancer):
- Repeat every 1-2 years
- Consider free/total PSA ratio
- MRI before repeat biopsy

Prediabetes (A1C 5.7-6.4%):
- Retest every 6-12 months
- Lifestyle intervention essential
- Consider metformin in high-risk cases

High cholesterol (LDL ≥160):
- Retest in 1-3 months with lifestyle changes
- Consider statin therapy based on ASCVD risk
- May need annual testing once stable
\`\`\`

### History of Precancerous Lesions

\`\`\`
Colon polyps:
- Hyperplastic: Routine screening interval
- Adenomatous: Repeat colonoscopy in 3-5 years
- Advanced adenoma: Repeat in 3 years
- Multiple adenomas: Repeat in 1-3 years

Actinic keratosis (precancerous skin):
- Dermatology visits every 6-12 months
- Aggressive sun protection
\`\`\`

## Racial and Ethnic Risk Factors

### African American Men

\`\`\`
Increased risk → Earlier screening:
- Prostate cancer: Start discussion at 45
- Colorectal cancer: Strongly consider starting at 40-45
- Hypertension: Start monitoring at 18
- Diabetes: Start at 35, may need more frequent testing
\`\`\`

### Ashkenazi Jewish Heritage

\`\`\`
Genetic considerations:
- Increased risk of BRCA mutations
- Discuss genetic counseling for family history
- Colorectal cancer screening: Consider starting at 40
\`\`\`

## Calculated Risk Assessment

### ASCVD (Atherosclerotic Cardiovascular Disease) Risk

\`\`\`
10-year risk estimation considers:
- Age, sex, race
- Total cholesterol, HDL
- Systolic blood pressure
- Hypertension treatment
- Diabetes
- Smoking

Results guide:
- Statin therapy decisions
- Screening intensity
- Lifestyle intervention urgency

<5%: Low risk
5-7.4%: Borderline
7.5-19.9%: Intermediate
≥20%: High risk
\`\`\`

### Shared Decision-Making Tools

When screening decisions are nuanced, use these frameworks:

1. **Define the decision**: What test are we considering?
2. **Know your numbers**: What's your actual risk?
3. **Understand the trade-offs**: Benefits vs. harms
4. **Consider your values**: What matters most to you?
5. **Make the choice**: Decision aligned with your preferences

---

**Level 3 Complete**: You understand how to personalize screening based on your risk profile.
      `,
      keyTakeaways: [
        'Family history often requires starting screenings 10 years earlier',
        'Lifestyle factors like smoking and obesity significantly affect screening schedules',
        'Racial and ethnic background influences risk and screening recommendations'
      ],
      nextLevel: 'Dive into the clinical evidence behind screening recommendations.'
    },
    expert: {
      title: 'Screening Evidence and Clinical Trials',
      description: 'Examine the research behind screening guidelines and understand benefits, harms, and controversies.',
      content: `
# The Science Behind Screening

Understanding the evidence helps you make truly informed decisions about which screenings are right for you.

## Key Concepts in Screening Evidence

### Number Needed to Screen (NNS)

How many people must be screened to prevent one death over a given time period:

| Screening | NNS | Time Period | NNS to Prevent ONE Death |
|-----------|-----|-------------|--------------------------|
| Colonoscopy | ~1,000 | 10 years | Colorectal cancer death |
| Lung CT (high risk) | ~320 | 6-7 years | Lung cancer death |
| AAA ultrasound | ~500 | One-time | AAA rupture death |
| Breast mammography | ~500-2,000 | Varies | Breast cancer death |

### Lead Time Bias

\`\`\`
Screening-detected cancer appears to have better survival because:
- Detection → Treatment → Measured from earlier point
- Survival looks longer even if death occurs at same time

This is why:
- Mortality (death rate) is preferred over survival as endpoint
- Randomized controlled trials are essential
\`\`\`

### Overdiagnosis

Detection of tumors that would never cause harm:

\`\`\`
Example: Prostate cancer
- Autopsy studies: 30% of men 70+ have prostate cancer
- Only ~3% die from it
- Many detected cancers would never cause symptoms
- Treatment of these cancers is harm without benefit
\`\`\`

## Major Screening Trials

### Colorectal Cancer

**Flexible Sigmoidoscopy Trials**:

| Trial | Participants | Mortality Reduction |
|-------|--------------|---------------------|
| PLCO (US) | 154,900 | 21% in distal colon |
| NORCCAP (Norway) | 55,700 | 27% overall |
| SCORE (Italy) | 34,300 | 26% overall |

**FOBT Trials**:
- Minnesota: 33% mortality reduction with annual testing
- UK trials: 13-15% reduction with biennial testing

**Evidence quality**: HIGH - Consistent RCTs showing clear benefit

### Prostate Cancer (PSA Screening)

**PLCO Trial (US)**:
- 76,693 men aged 55-74
- No mortality benefit after 13+ years
- Issues: High contamination (control group got screened)

**ERSPC Trial (Europe)**:
- 182,160 men aged 50-74
- 21% relative reduction in prostate cancer mortality
- NNS = 781 over 13 years
- Number Needed to Treat = 27 (to prevent one death)
- Significant overdiagnosis: ~40% of detected cancers

**Interpretation**:
- Modest benefit at population level
- Significant risk of overdiagnosis and overtreatment
- Importance of shared decision-making clear

### Lung Cancer

**National Lung Screening Trial (NLST)**:
- 53,454 high-risk current/former smokers
- Low-dose CT vs. chest X-ray
- 20% relative reduction in lung cancer mortality
- NNS = 320 over 6 years
- **Harms**: 96% false positives over 3 rounds of screening

**NELSON Trial (Europe)**:
- Similar results, confirmed NLST findings
- Demonstrated benefit in both sexes
- Better risk stratification possible

### Abdominal Aortic Aneurysm

**UK Multicentre Aneurysm Screening Study**:
- 67,800 men aged 65-74
- 42% reduction in aneurysm-related mortality
- NNS = ~500
- Cost-effective for men who ever smoked
- Minimal harms

### Breast Cancer (Mammography) - For Understanding

**Canadian National Breast Screening Study**:
- No mortality benefit after 25 years
- Significant overdiagnosis (22%)

**Other trials**: Show modest benefit (~15-20%)
- Ongoing controversy about true magnitude of benefit
- Illustrates complexity of screening evidence

## Understanding Screening Statistics

### Relative vs. Absolute Risk

\`\`\`
Example: 20% relative reduction
- Without screening: 5 deaths per 1,000
- With screening: 4 deaths per 1,000
- Absolute reduction: 1 per 1,000 (0.1%)
- Relative reduction: 20% (4/5)

Both matter:
- Relative risk compares groups
- Absolute risk shows your actual benefit
\`\`\`

### Sensitivity, Specificity, and PPV

\`\`\`
Sensitivity: True positive rate
- Ability to detect disease when present

Specificity: True negative rate
- Ability to rule out disease when absent

Positive Predictive Value (PPV):
- Probability that positive test = actual disease
- Depends on prevalence in population being screened

Example: PSA
- Sensitivity: High (detects most cancers)
- Specificity: Low (many false positives)
- PPV: Low (~25-30% on first test)
\`\`\`

## Controversies in Screening

### PSA Screening: The Controversy

\`\`\`
Arguments FOR:
- Only available screening test for prostate cancer
- Early detection enables more treatment options
- ERSPC showed mortality benefit
- Prostate cancer mortality has declined since PSA era

Arguments AGAINST:
- Significant overdiagnosis (40%+)
- Treatment complications: incontinence, impotence
- False positives lead to unnecessary biopsies
- PLCO showed no benefit
- Many men treated for cancers that wouldn't harm them

Current Consensus:
- Shared decision-making for men 55-69
- Individual decision based on values and preferences
- Not recommended for 70+ (average risk)
\`\`\`

### Thyroid Ultrasound Screening

\`\`\`
Not recommended because:
- High prevalence of thyroid nodules
- Most are benign
- Overdiagnosis leads to unnecessary surgery
- Complications from surgery (nerve damage, calcium issues)
- No evidence mortality benefit
\`\`\`

### Skin Cancer Screening

\`\`\`
Evidence: Insufficient (USPSTF I statement)
- No RCTs conducted
- Melanoma mortality has plateaued
- Unclear if screening or awareness drives detection
- May detect slow-growing lesions that wouldn't cause harm

Clinical practice:
- Most dermatologists support skin exams
- Focus on high-risk individuals
- Educate on self-examination
\`\`\`

## Grades of Recommendation

Understanding USPSTF grades:

| Grade | Meaning | Implication |
|-------|---------|-------------|
| A | High certainty, substantial net benefit | Offer or provide |
| B | High certainty, moderate net benefit | Offer or provide |
| C | Moderate certainty, small net benefit | Offer selectively |
| D | Moderate certainty, no benefit or harm | Discourage |
| I | Evidence insufficient | Discuss, individualize |

---

**Level 4 Complete**: You understand the clinical evidence behind screening recommendations.
      `,
      keyTakeaways: [
        'Number Needed to Screen shows how many must be tested to prevent one death',
        'Overdiagnosis detects tumors that would never cause harm',
        'Screening controversies reflect complex benefit-harm trade-offs'
      ],
      nextLevel: 'Master advanced screening concepts and future directions.'
    },
    master: {
      title: 'Advanced Screening Strategies',
      description: 'Integrate comprehensive screening approaches with emerging technologies and personalized medicine.',
      content: `
# Mastering Health Screenings

Advanced screening integrates evidence-based guidelines with personalized risk assessment and emerging technologies.

## The Screening Framework

### Wilson and Jungner Criteria (1968)

Still-valid principles for screening programs:

1. **Condition should be important health problem**
2. **Natural history should be understood**
3. **Recognizable latent or early symptomatic stage**
4. **Valid and reliable test available**
5. **Test acceptable to target population**
6. **Agreed treatment for recognized disease**
7. **Facilities for diagnosis and treatment available**
8. **Reasonable chance of better outcome with early detection**

### Modern Additions

9. **Cost-effectiveness**: Benefit justifies cost
10. **Equity**: Access across all populations
11. **Minimal harm**: Physical and psychological

## Risk-Stratified Screening

### Moving Beyond Age-Based Screening

\`\`\`
Current approach:
- Everyone of age X gets screened

Future/ideal approach:
- Screen based on individual risk
- Use multiple risk factors
- Genetic information
- Biomarker profiles
\`\`\`

### Examples of Risk Stratification

**Lung Cancer**:
- Current: Age + smoking history
- Enhanced: Add genetic risk, COPD, family history, occupational exposure

**Colorectal Cancer**:
- Current: Age-based with family history modifications
- Enhanced: Polygenic risk scores, microbiome markers, lifestyle score

## Emerging Screening Technologies

### Liquid Biopsy

\`\`\`
What: Detect cancer DNA in blood

Potential:
- Screen for multiple cancers simultaneously
- Detect cancer before imaging visible
- Minimal invasiveness (blood test)

Challenges:
- False positives (detect clonal hematopoiesis)
- Overdiagnosis concerns
- Cost-effectiveness unclear
- May detect cancers of uncertain significance

Status: Under investigation for multi-cancer detection
\`\`\`

### Artificial Intelligence in Screening

\`\`\`
Current applications:
- Radiology: AI辅助影像判读
- Dermatology: Skin lesion image analysis
- Pathology: Slide interpretation
- Risk prediction: Algorithms identify high-risk

Future potential:
- Personalized screening intervals
- Dynamic risk updating
- Predictive screening recommendations

Concerns:
- Algorithm bias and equity
- Validation in diverse populations
- Integration into clinical workflow
\`\`\`

### Wearable Technology Integration

\`\`\`
Current capabilities:
- Heart rate monitoring (AFib detection)
- Sleep assessment
- Activity tracking

Future screening potential:
- Arrhythmia detection beyond AFib
- Sleep disorder screening
- Early heart failure detection
- Blood pressure trends

Evidence base: Growing but not yet guideline-level
\`\`\`

## Screening in Special Populations

### Life Expectancy Considerations

\`\`\`
Screening makes sense when:
- Life expectancy >5-10 years
- Time to benefit is within expected lifespan

General guidance:
- Stop screening when life expectancy <10 years
- Consider stopping at age 75-80 for average health
- Individualize based on fitness and goals of care

Tools:
- ePrognosis calculators
- Lee-Schonberg criteria
\`\`\`

### Comorbidities

\`\`\`
Advanced COPD (oxygen-dependent):
- May limit lung cancer screening benefit
- Still consider if otherwise fit

Advanced heart failure:
- Reconsider cancer screening intensity
- Focus on symptom management

Dementia:
- Generally deprioritize cancer screening
- Focus on quality of life
\`\`\`

### Immunocompromised Populations

\`\`\`
HIV:
- More aggressive cervical/anal cancer screening
- Consider lung cancer at younger age
- Screen for anal dysplasia (MSM)

Organ transplant (immunosuppression):
- Skin cancer: More frequent dermatology visits
- Consider colonoscopy at shorter intervals
- Lung cancer screening at lower smoking threshold
\`\`\`

## Ethical Considerations

### Overdiagnosis and Overtreatment

\`\`\`
The problem:
- Screening detects indolent disease
- Patients treated for conditions that wouldn't harm them
- Treatment causes harm without benefit

Mitigation strategies:
- Active surveillance (prostate, thyroid)
- Watchful waiting approaches
- Better risk stratification
- Informed consent about overdiagnosis risk
\`\`\`

### Equity and Access

\`\`\`
Disparities in screening:
- Lower rates in underserved populations
- Geographic variation in access
- Insurance coverage variations
- Cultural and language barriers

Solutions:
- Community outreach programs
- Patient navigation
- Mobile screening units
- Culturally tailored education
- Address social determinants of health
\`\`\`

### Resource Allocation

\`\`\`
Cost-effectiveness considerations:
- Not all screenings provide equal value
- Resources are finite
- Population health vs. individual benefit

High-value screenings:
- Blood pressure: Very low cost, high benefit
- Colonoscopy: Higher cost, high benefit
- Low-dose CT (lung): Moderate cost, moderate benefit in high-risk

Low-value screenings:
- Routine ECG in low-risk: No benefit, adds cost
- Annual comprehensive lab panel: No evidence benefit
- Whole-body imaging: More harm than benefit
\`\`\`

## Your Personalized Screening Plan

### Building Your Strategy

\`\`\`
Step 1: Know your baseline risk
- Age, sex, race/ethnicity
- Family history
- Personal medical history
- Lifestyle factors

Step 2: Identify guideline-recommended screenings
- USPSTF recommendations
- Specialty society guidelines
- Age-appropriate schedule

Step 3: Personalize based on risk
- Earlier start for family history
- More frequent for abnormal findings
- Consider additional testing for high risk

Step 4: Apply life expectancy context
- Benefit timing vs. expected lifespan
- Personal values and goals
- Quality of life priorities

Step 5: Engage shared decision-making
- Discuss benefits and harms
- Consider your values
- Make informed choices

Step 6: Create tracking system
- Document screening dates and results
- Set reminders for next screenings
- Update as risks change
\`\`\`

### Dynamic Risk Assessment

\`\`\`
Screening needs change over time:

Changes INCREASING screening need:
- New family diagnosis
- Development of risk factors (weight gain, smoking)
- New symptoms
- Abnormal screening results

Changes DECREASING screening need:
- Significant comorbidities
- Declining functional status
- Personal choice to focus on comfort
- Very limited life expectancy

Annual review with your doctor
\`\`\`

## Future Directions

### Precision Prevention

\`\`\`
Integrating:
- Genomic risk scores
- Epigenetic markers
- Proteomic profiles
- Microbiome analysis
- Environmental exposure data

Goal: Truly individualized screening
\`\`\`

### Multi-Cancer Detection Tests

\`\`\`
Liquid biopsy approaches:
- One blood test for multiple cancers
- Earlier detection for cancers without screening
- Currently investigational

Challenges:
- Clinical utility validation
- Cost-effectiveness
- False positive management
- Access and equity
\`\`\`

---

**Level 5 Complete**: You have mastered comprehensive screening strategies for men.
      `,
      keyTakeaways: [
        'Screening criteria balance benefits, harms, and costs',
        'Emerging technologies like liquid biopsy and AI may transform screening',
        'Personalized screening considers life expectancy, values, and changing risk'
      ],
      nextLevel: null
    }
  }
}
