import { WomensHealthContent, LegacyWomensHealthContent } from '../types';

export const breastCancerScreening: WomensHealthContent = {
  id: 'breast-cancer-screening',
  title: 'Breast Cancer Screening',
  category: 'Breast Health',
  complexityLevels: [
    {
      level: 1,
      title: 'Understanding Breast Cancer Screening',
      content: `Breast cancer screening helps find cancer early, when it's most treatable. Understanding screening recommendations is an important part of women's healthcare.

**What is Breast Cancer Screening?**

Screening means testing for cancer in people who have no symptoms. The goal is to find cancer early, when treatment is most effective.

**Screening Tests:**

**1. Mammogram**
- A specialized X-ray of the breast
- The most important screening test for breast cancer
- Can find tumors that are too small to feel
- Currently the gold standard for breast cancer screening

**2. Clinical Breast Exam**
- A physical exam of the breasts by a healthcare provider
- May find lumps that you can't feel yourself
- Complements mammography

**3. Breast Self-Awareness**
- Knowing what's normal for your breasts
- Being aware of how your breasts normally look and feel
- Reporting any changes to your doctor

**Why is Screening Important?**

**Early Detection Saves Lives:**
- Breast cancer found early is more easily treated
- Early-stage cancers have better survival rates
- More treatment options available
- Less extensive treatment may be needed

**Screening Recommendations:**

While recommendations vary slightly among organizations, general guidelines are:

**Average Risk Women:**

| Age | Recommendation |
|-----|---------------|
| 40-49 | Discuss with doctor, consider starting mammograms |
| 50-74 | Mammogram every 1-2 years |
| 75+ | Individual decision based on health |

**What Determines Your Screening Schedule?**

Several factors affect when and how often you should be screened:
- Your age
- Your personal health history
- Your family history of breast cancer
- Your genetic factors
- Your personal preferences

**What to Expect During a Mammogram:**

**Before the Procedure:**
- Schedule when your breasts are not tender
- Avoid using deodorant, powder, or lotion on your chest
- You'll undress from the waist up
- You may wear a gown

**During the Procedure:**
- Each breast is compressed between two plates
- Usually 2-3 pictures taken of each breast
- Compression lasts a few seconds for each picture
- Some discomfort is normal
- The entire visit usually takes about 30 minutes

**After the Procedure:**
- You can return to normal activities immediately
- You'll receive results within a few weeks
- Most mammograms are normal
- If something needs follow-up, you'll be contacted

**Understanding Your Results:**

**Normal Result:**
- No signs of cancer found
- Continue routine screening
- Maintain breast awareness

**Abnormal Result:**
- Don't panic - most abnormal findings are NOT cancer
- May need additional imaging or tests
- Common reasons for callbacks:
  - Dense breast tissue
  - Need for better images
  - Areas that need closer look
  - Calcifications that need evaluation

**Benefits of Screening:**

- Finds cancer early
- Reduces deaths from breast cancer
- Provides peace of mind when normal
- More treatment options when cancer is found early

**Limitations of Screening:**

- Not all cancers are found on mammograms
- Some cancers develop between screenings
- May find things that look abnormal but aren't cancer
- May lead to additional testing

**What You Can Do:**

- Know your risk factors
- Discuss screening with your doctor
- Follow recommended screening schedule
- Be familiar with your breasts
- Report any changes promptly
- Make healthy lifestyle choices`,
      keyPoints: [
        'Breast cancer screening helps find cancer early when treatment is most effective',
        'Mammography is the gold standard screening test for breast cancer',
        'Screening recommendations start at age 40-50 for average-risk women',
        'Most abnormal mammogram findings are not cancer',
        'Screening should be individualized based on risk factors and preferences'
      ],
      vocabulary: [
        { term: 'Mammogram', definition: 'A specialized X-ray examination of the breast used for screening and diagnosis' },
        { term: 'Screening', definition: 'Testing for disease in people who have no symptoms' },
        { term: 'Average Risk', definition: 'Having no personal or strong family history of breast cancer and no genetic mutations known to increase risk' },
        { term: 'Calcifications', definition: 'Small deposits of calcium in the breast tissue that can be seen on mammograms' }
      ],
      quiz: [
        {
          question: 'What is the main benefit of breast cancer screening?',
          options: [
            'Prevents breast cancer from developing',
            'Finds cancer early when treatment is most effective',
            'Eliminates the need for treatment',
            'Guarantees you won\'t get breast cancer'
          ],
          correctAnswer: 1,
          explanation: 'The main benefit of breast cancer screening is finding cancer early, when treatment is most effective. Early detection leads to better outcomes and more treatment options.'
        },
        {
          question: 'What is the gold standard test for breast cancer screening?',
          options: [
            'Ultrasound',
            'MRI',
            'Mammogram',
            'Blood test'
          ],
          correctAnswer: 2,
          explanation: 'Mammography is the gold standard test for breast cancer screening. It has been proven to reduce breast cancer deaths through large clinical trials.'
        },
        {
          question: 'What should you avoid using on the day of your mammogram?',
          options: [
            'Water',
            'Deodorant, powder, or lotion on your chest',
            'Soap',
            'All medications'
          ],
          correctAnswer: 1,
          explanation: 'You should avoid using deodorant, powder, or lotion on your chest and underarms on the day of your mammogram because these can appear as white spots on the X-ray and look like calcifications.'
        }
      ]
    },
    {
      level: 2,
      title: 'Screening Guidelines and Recommendations',
      content: `Different organizations have slightly different breast cancer screening recommendations. Understanding these guidelines helps you make informed decisions.

**Major Organization Guidelines:**

**American Cancer Society (ACS) 2023:**

| Age Group | Recommendation |
|-----------|---------------|
| Women 40-44 | Option to start annual screening |
| Women 45-54 | Annual mammograms recommended |
| Women 55+ | Option to continue annually or switch to every 2 years |
| Continue screening | As long as in good health |

**U.S. Preventive Services Task Force (USPSTF) 2023:**

| Age Group | Recommendation |
|-----------|---------------|
| Women 40-49 | Individual decision, discuss with doctor |
| Women 50-74 | Mammogram every 2 years |
| Women 75+ | No recommendation (evidence insufficient) |

**American College of Radiology (ACR) & Society of Breast Imaging:**

| Age Group | Recommendation |
|-----------|---------------|
| Women 40+ | Annual mammograms |
| Women 25-30 (high risk) | Annual MRI + mammogram |

**American College of Obstetricians and Gynecologists (ACOG):**

| Age Group | Recommendation |
|-----------|---------------|
| Women 40-49 | Offer mammography every 1-2 years |
| Women 50-75 | Mammography every 1-2 years |
| Women 75+ | Shared decision making |

**Why Do Guidelines Differ?**

Organizations weigh benefits and harms differently:

**Benefits of Screening:**
- Reduced breast cancer deaths
- Less extensive treatment needed
- Peace of mind
- Early detection

**Potential Harms:**
- False positives
- Unnecessary biopsies
- Overdiagnosis (treating cancers that wouldn't cause harm)
- Radiation exposure (small risk)
- Anxiety

**Understanding the Evidence:**

**Age 40-49:**
- Breast cancer is less common than in older women
- Breast tissue is often denser (harder to interpret)
- More false positives
- More years of life potentially saved

**Age 50-74:**
- Breast cancer is more common
- Benefits clearly outweigh harms
- Strongest evidence for screening
- Less dense breast tissue (easier to interpret)

**Age 75+:**
- Limited research data
- Life expectancy becomes important
- Comorbidities affect decision
- Individualize based on health

**High-Risk Screening:**

**Women at High Risk Need Different Screening:**

**Who is High Risk?**
- BRCA1 or BRCA2 mutation carriers
- Strong family history
- Prior chest radiation therapy
- Certain genetic syndromes
- Previous atypical hyperplasia or LCIS

**Enhanced Screening for High Risk:**
- Annual mammogram starting at age 25-30
- Annual breast MRI
- MRI and mammogram 6 months apart
- Consider clinical breast exams

**Dense Breast Tissue Considerations:**

**What are Dense Breasts?**
- More glandular and fibrous tissue than fatty tissue
- Both dense tissue and tumors appear white on mammograms
- Makes interpretation more difficult
- Very common, especially in younger women

**Additional Screening Options for Dense Breasts:**
- 3D mammography (tomosynthesis)
- Breast ultrasound
- Breast MRI (for high risk)
- Discuss options with your doctor

**Screening Frequency:**

**Annual vs Biennial (Every 2 Years):**

| Factor | Annual | Every 2 Years |
|--------|--------|---------------|
| Cancers detected | More | Fewer |
| False positives | More | Fewer |
| Radiation exposure | More | Less |
| Interval cancers | Fewer | More |
| Cost | More | Less |

**Making Your Decision:**

**Discuss with Your Doctor:**
- Your personal risk factors
- Your family history
- Your values and preferences
- Your comfort level with screening
- Your previous screening experiences

**Questions to Ask:**
- When should I start screening?
- How often should I be screened?
- What type of screening is best for me?
- What are my risk factors?
- What if I have dense breasts?
- When can I stop screening?

**When to Stop Screening:**

**Considerations:**
- Life expectancy (generally <10 years)
- Ability to tolerate treatment
- Personal preference
- Chronic health conditions

**Generally Continue Screening If:**
- Good health and life expectancy >10 years
- Would pursue treatment if cancer found
- Personal desire for screening

**Special Situations:**

**Pregnant Women:**
- Generally delay routine screening until after pregnancy
- If symptoms develop, diagnostic imaging may be needed
- Shielding can be used if imaging necessary

**Breastfeeding Women:**
- Can have mammograms
- May reduce accuracy slightly
- Express milk before exam if more comfortable

**Women with Breast Implants:**
- Special techniques needed
- Additional views may be taken
- Inform the technologist about implants
- Screening still effective

**Women with Disabilities:**
- Accommodations available
- Discuss positioning needs
- Same screening recommendations apply
- May need specialized facilities`,
      keyPoints: [
        'Major organizations recommend starting mammograms between ages 40-50 for average-risk women',
        'Screening recommendations differ based on how organizations weigh benefits vs harms',
        'High-risk women need enhanced screening including MRI',
        'Dense breast tissue makes mammogram interpretation more difficult',
        'Screening decisions should be individualized based on risk factors and preferences'
      ],
      vocabulary: [
        { term: 'False Positive', definition: 'A screening test result that suggests cancer when no cancer is present' },
        { term: 'Overdiagnosis', definition: 'Diagnosis of a cancer that would never cause symptoms or death in a person\'s lifetime' },
        { term: 'Biennial', definition: 'Occurring every two years' },
        { term: 'Interval Cancer', definition: 'A cancer diagnosed between routine screening examinations' }
      ],
      quiz: [
        {
          question: 'What is the main difference between annual and biennial (every 2 years) mammography screening?',
          options: [
            'Annual screening detects fewer cancers',
            'Annual screening has more false positives but detects more cancers',
            'Biennial screening has no interval cancers',
            'There is no difference in outcomes'
          ],
          correctAnswer: 1,
          explanation: 'Annual mammography detects more cancers but results in more false positives compared to biennial screening. This is the trade-off between the two screening frequencies.'
        },
        {
          question: 'Why does dense breast tissue affect mammogram interpretation?',
          options: [
            'Dense tissue is transparent on X-rays',
            'Both dense tissue and tumors appear white on mammograms',
            'Dense tissue makes the breast too large to image',
            'Dense tissue contains more calcium'
          ],
          correctAnswer: 1,
          explanation: 'Both dense breast tissue and tumors appear white on mammograms, making it difficult to distinguish between normal dense tissue and potential abnormalities. This is like trying to find a snowball in a snowy field.'
        },
        {
          question: 'For a healthy woman with a life expectancy greater than 10 years, at what age might she consider stopping mammography screening?',
          options: [
            'There is no specific age to stop if she\'s healthy',
            'Age 65',
            'Age 70',
            'Age 75'
          ],
          correctAnswer: 0,
          explanation: 'There is no specific age to stop screening. The decision should be based on overall health, life expectancy (generally continue if >10 years), and personal preferences.'
        }
      ]
    },
    {
      level: 3,
      title: 'Screening Tests and Technologies',
      content: `Various screening tests are available for breast cancer detection, each with different advantages and limitations.

**Mammography:**

**Digital Mammography (2D):**
- Standard screening technique
- X-rays create digital images
- Can be manipulated by radiologist
- Widely available
- Proven to reduce mortality

**Digital Breast Tomosynthesis (3D Mammography):**

*How it works:*
- Takes multiple X-ray images from different angles
- Computer reconstructs 1-millimeter slices
- Creates 3D image of breast

*Advantages:*
- Detects more cancers (1-2 more per 1000 women)
- Reduces false positives
- Better for dense breasts
- Helps localize abnormalities
- Fewer callbacks for additional imaging

*Considerations:*
- Slightly higher radiation dose (still low)
- May not be covered by all insurance
- More expensive than 2D
- Becoming more widely available

**Breast Ultrasound:**

**How it works:**
- Uses sound waves to create images
- No radiation
- Real-time imaging

**Uses:**
- Diagnostic evaluation of lumps
- Screening adjunct for dense breasts
- Guiding biopsies
- Evaluating abnormalities found on mammogram

**Advantages:**
- No radiation
- Good for dense breasts
- Distinguishes cysts from solid masses
- Widely available
- Comfortable (no compression)

**Limitations:**
- Operator dependent
- Not approved as standalone screening test
- Higher false positive rate
- Microcalcifications not seen
- Longer exam time than mammogram

**Breast MRI:**

**How it works:**
- Uses magnetic fields and radio waves
- Contrast (gadolinium) injected
- Multiple images acquired

**Indications:**
- High-risk screening (BRCA, strong family history)
- Diagnostic problem solving
- Assessing extent of known cancer
- Monitoring response to chemotherapy
- Evaluating implants

**Advantages:**
- Very sensitive (detects 95%+ of cancers)
- Excellent for dense breasts
- No radiation
- Can see both breasts at once
- Excellent for high-risk screening

**Limitations:**
- Expensive
- Lower specificity (more false positives)
- IV contrast needed
- Claustrophobic for some
- Not available everywhere
- Longer exam time

**Contrast-Enhanced Mammography:**

**How it works:**
- Iodine-based contrast injected
- Low-energy and high-energy images taken
- Subtraction shows enhancement

**Uses:**
- Diagnostic evaluation
- Dense breast screening
- Problem solving

**Advantages:**
- Less expensive than MRI
- More available than MRI
- Better than standard mammography for dense breasts
- Can see microcalcifications

**Limitations:**
- IV contrast needed
- Radiation exposure
- Newer technology
- Not yet widely available

**Molecular Breast Imaging:**

**How it works:**
- Radioactive tracer injected
- Special gamma camera detects tracer
- Cancer takes up more tracer

**Uses:**
- Dense breast screening
- High-risk women who cannot have MRI
- Diagnostic problem solving

**Advantages:**
- Useful for dense breasts
- Not affected by breast implants
- Less expensive than MRI

**Limitations:**
- Radiation exposure
- Lower spatial resolution
- Limited availability
- Lower sensitivity than MRI

**Comparison of Screening Modalities:**

| Modality | Sensitivity | Specificity | Radiation | Best Use |
|----------|-------------|-------------|-----------|----------|
| 2D Mammogram | 70-85% | 85-95% | Yes | Standard screening |
| 3D Mammogram | 80-90% | 88-95% | Slight higher | Dense breasts, standard screening |
| Ultrasound | 80-90% | 70-90% | No | Adjunct screening, diagnostic |
| MRI | 90-98% | 70-85% | No | High-risk screening |
| CEM | 85-95% | 80-90% | Yes | Dense breasts, diagnostic |
| MBI | 85-90% | 75-85% | Yes | Dense breasts, cannot have MRI |

**Screening Workflow:**

**Routine Screening:**
1. Woman arrives for appointment
2. Technologist positions breast
3. Compression applied
4. Images acquired
5. Images checked for quality
6. Repeat if needed
7. Exam complete

**Abnormal Screening Pathway:**
1. Abnormal screening result
2. Called back for diagnostic imaging
3. Additional mammogram views
4. Ultrasound often added
5. Possibly MRI
6. If suspicious, biopsy recommended
7. Pathology determines diagnosis

**Understanding BI-RADS:**

**Breast Imaging Reporting and Data System:**

| Category | Meaning | Follow-up |
|----------|---------|-----------|
| 0 | Incomplete | More imaging needed |
| 1 | Negative | Routine screening |
| 2 | Benign | Routine screening |
| 3 | Probably benign | Short-interval follow-up (6 months) |
| 4 | Suspicious | Biopsy recommended |
| 5 | Highly suspicious | Biopsy strongly recommended |
| 6 | Known cancer | Treatment planning |

**Quality in Screening:**

**What Makes a Good Screening Program:**

*Technical Quality:*
- Proper equipment maintenance
- Quality control procedures
- Trained technologists
- Board-certified radiologists

*Interpretive Quality:*
- Specialized breast imagers
- Double reading (two radiologists)
- Audit of performance
- Continuing education

*Patient-Centered Care:*
- Comfort and respect
- Clear communication
- Prompt results
- Easy access
- Financial counseling

**Screening Accuracy:**

*Mammogram Performance:*
- Sensitivity: 70-90% (detects 70-90% of cancers)
- Specificity: 85-95% (85-95% of negative results are truly negative)
- False negative rate: 10-30%
- False positive rate: 5-15% over 10 years

**Factors Affecting Accuracy:**
- Breast density
- Tumor characteristics
- Radiologist experience
- Quality of equipment
- Technique used`,
      keyPoints: [
        '3D mammography detects more cancers and reduces false positives compared to 2D mammography',
        'Breast MRI is the most sensitive screening test but is reserved for high-risk women due to cost and false positives',
        'Breast ultrasound is useful as an adjunct to mammography, especially in dense breasts',
        'BI-RADS provides standardized categories for breast imaging results',
        'Screening test performance varies based on breast density and tumor characteristics'
      ],
      vocabulary: [
        { term: 'Sensitivity', definition: 'The ability of a test to correctly identify those who have the disease (true positive rate)' },
        { term: 'Specificity', definition: 'The ability of a test to correctly identify those who do not have the disease (true negative rate)' },
        { term: 'False Negative', definition: 'A test result that is negative when the person actually has the disease' },
        { term: 'Double Reading', definition: 'Having two radiologists independently interpret the same screening examination' }
      ],
      quiz: [
        {
          question: 'Which screening modality has the highest sensitivity for detecting breast cancer?',
          options: [
            '2D Mammography',
            'Breast ultrasound',
            'Breast MRI',
            'Clinical breast exam'
          ],
          correctAnswer: 2,
          explanation: 'Breast MRI has the highest sensitivity (90-98%) for detecting breast cancer, which is why it\'s recommended for high-risk screening. However, it has lower specificity leading to more false positives.'
        },
        {
          question: 'What does a BI-RADS category 3 mean?',
          options: [
            'No evidence of cancer, return to routine screening',
            'Probably benign, short-interval follow-up recommended',
            'Suspicious, biopsy recommended',
            'Known cancer, treatment needed'
          ],
          correctAnswer: 1,
          explanation: 'BI-RADS category 3 means \"probably benign\" with short-interval follow-up (usually 6 months) recommended. The risk of malignancy is less than 2% in this category.'
        },
        {
          question: 'What is the primary limitation of breast ultrasound as a screening test?',
          options: [
            'Too expensive',
            'Higher false positive rate and operator dependence',
            'Cannot distinguish cysts from solid masses',
            'Not useful in dense breasts'
          ],
          correctAnswer: 1,
          explanation: 'Breast ultrasound has a higher false positive rate and is operator dependent. It cannot reliably detect microcalcifications and is not approved as a standalone screening test.'
        }
      ]
    },
    {
      level: 4,
      title: 'Risk Assessment and Personalized Screening',
      content: `Personalized breast cancer screening considers individual risk factors to optimize screening strategies.

**Assessing Breast Cancer Risk:**

**Risk Categories:**

| Category | Definition | Lifetime Risk | Screening Approach |
|----------|------------|---------------|-------------------|
| Average | No high-risk features | < 12.5% | Standard screening |
| Intermediate | Some risk factors | 15-20% | Consider earlier/frequent screening |
| High | Strong risk factors | > 20-25% | Enhanced screening with MRI |
| Very High | Genetic mutation | > 50% | Intensive screening ± prevention |

**Risk Assessment Tools:**

**1. Gail Model:**

*Assesses:*
- Current age
- Age at menarche (first period)
- Age at first live birth
- Number of breast biopsies
- Presence of atypical hyperplasia
- Race/ethnicity
- First-degree relatives with breast cancer

*Output:*
- 5-year risk
- Lifetime risk

*Use:*
- Determines if chemoprevention is indicated
- Guides screening decisions
- Insurance coverage for MRI

*Limitations:*
- Doesn't include second-degree relatives
- Doesn't account for paternal side
- Not accurate for BRCA carriers
- Doesn't consider age of relatives' diagnosis

**2. Tyrer-Cuzick Model:**

*Includes:*
- All Gail factors plus:
- Second-degree relatives
- Paternal family history
- Age of relatives at diagnosis
- BRCA status if tested
- Hormone replacement therapy use
- Body mass index

*Advantages:*
- More accurate for strong family histories
- Can incorporate genetic testing results
- Better for high-risk assessment

**3. BRCAPRO Model:**

*Purpose:*
- Estimates probability of BRCA mutation
- Uses family pedigree
- Bayesian calculation

*Considers:*
- All affected relatives
- Ages at diagnosis
- Breast and ovarian cancer
- Ashkenazi Jewish ancestry
- Male breast cancer

**4. BOADICEA Model:**

*Features:*
- Comprehensive pedigree analysis
- Polygenic risk scores
- Multiple genes (BRCA, PALB2, CHEK2, ATM)
- Tumor characteristics
- Can incorporate genetic test results

**Genetic Risk Factors:**

**High-Penetrance Genes:**

| Gene | Breast Cancer Risk | Associated Risks |
|------|-------------------|-----------------|
| BRCA1 | 55-75% lifetime | Ovarian cancer |
| BRCA2 | 45-70% lifetime | Ovarian, male breast, pancreatic |
| TP53 | 90% lifetime (Li-Fraumeni) | Multiple cancers |
| PTEN | 85% lifetime (Cowden) | Thyroid, endometrial |
| CDH1 | 40-60% lifetime | Gastric cancer |
| STK11 | 45-55% lifetime (Peutz-Jeghers) | Multiple cancers |

**Moderate-Penetrance Genes:**

| Gene | Risk Increase |
|------|---------------|
| PALB2 | 2-3x |
| CHEK2 | 2x (1100delC) |
| ATM | 2x |
| BRIP1 | 2x |

**Family History Risk:**

**First-Degree Relative (mother, sister, daughter):**
- One relative: ~2x risk
- Two relatives: ~3-4x risk
- Risk higher if diagnosed before menopause
- Risk higher if bilateral disease

**Second-Degree Relatives:**
- Grandmother, aunt, niece
- Slightly increased risk
- Multiple relatives increase risk

**Other Risk Factors:**

**Reproductive:**
- Early menarche (<12)
- Late menopause (>55)
- Late first pregnancy (>30)
- Nulliparity (no children)
- No breastfeeding

**Hormonal:**
- Combined hormone replacement therapy
- Oral contraceptives (slight increase)
- DES exposure

**Breast Changes:**
- Atypical hyperplasia (4-5x risk)
- LCIS (lobular carcinoma in situ)
- Previous breast cancer
- Previous chest radiation

**Lifestyle:**
- Alcohol consumption
- Overweight/obesity (postmenopausal)
- Physical inactivity
- Dense breast tissue

**Risk-Adapted Screening:**

**Average Risk (<15% lifetime):**
- Annual mammogram starting at 40-50
- Continue until 75 (or based on health)
- Consider 3D mammography if available

**Intermediate Risk (15-20% lifetime):**
- Annual mammogram starting at 40
- Consider breast MRI if other risk factors
- May add breast ultrasound for dense breasts

**High Risk (>20% lifetime):**
- Annual mammogram starting at 30 (or 10 years before earliest family case)
- Annual breast MRI
- Alternate mammogram and MRI every 6 months
- Consider clinical breast exams

**Very High Risk (BRCA, TP53):**
- Annual MRI starting at 25
- Annual mammogram starting at 30 (not for TP53)
- Consider risk-reducing medications
- Discuss risk-reducing surgery
- Genetic counseling

**Dense Breast Tissue:**

**Categories:**
- A: Almost entirely fatty (<25% dense)
- B: Scattered fibroglandular densities (25-50%)
- C: Heterogeneously dense (51-75%)
- D: Extremely dense (>75%)

**Implications:**
- Masks cancers on mammogram
- Increases cancer risk
- May warrant supplemental screening

**Supplemental Screening Options for Dense Breasts:**
- 3D mammography
- Automated breast ultrasound
- Handheld ultrasound
- Consider MRI if other risk factors

**Chemoprevention:**

**Tamoxifen:**
- Reduces risk by ~50% in high-risk women
- 5 years of treatment
- Side effects: hot flashes, blood clots, endometrial cancer
- Premenopausal and postmenopausal women

**Raloxifene:**
- Similar risk reduction
- Postmenopausal women only
- Fewer side effects than tamoxifen
- Doesn't increase endometrial cancer

**Aromatase Inhibitors:**
- Exemestane, anastrozole
- Postmenopausal women only
- Risk reduction ~50%
- Side effects: joint pain, osteoporosis

**Risk-Reducing Surgery:**

**Bilateral Mastectomy:**
- Reduces risk by >90%
- Consider for very high risk
- Major surgery with permanent effects
- Discuss reconstruction options

**Bilateral Salpingo-Oophorectomy:**
- Removes ovaries and tubes
- Reduces ovarian cancer risk
- Reduces breast cancer risk in BRCA carriers
- Surgical menopause

**Shared Decision Making:**

**When Discussing Risk:**
- Explain both absolute and relative risk
- Use visual aids
- Allow for questions
- Respect personal values
- Consider quality of life
- Discuss anxiety and worry

**Personalized Screening Plan:**

**Should Include:**
- Risk assessment
- Recommended screening tests
- Screening frequency
- When to start
- When to stop
- Lifestyle recommendations
- Chemoprevention if appropriate
- Follow-up plan`,
      keyPoints: [
        'Risk assessment models (Gail, Tyrer-Cuzick, BRCAPRO, BOADICEA) help determine screening intensity',
        'BRCA mutations confer 45-75% lifetime breast cancer risk requiring enhanced screening',
        'Family history significantly affects risk, especially if first-degree relatives diagnosed before menopause',
        'Dense breast tissue increases cancer risk and masks tumors on mammography',
        'High-risk women may benefit from chemoprevention or risk-reducing surgery'
      ],
      vocabulary: [
        { term: 'Penetrance', definition: 'The proportion of individuals carrying a particular variant who express the associated trait or disease' },
        { term: 'First-Degree Relative', definition: 'A parent, sibling, or child who shares approximately 50% of their genes with you' },
        { term: 'Chemoprevention', definition: 'The use of medications to reduce the risk of developing cancer' },
        { term: 'Li-Fraumeni Syndrome', definition: 'A rare inherited disorder caused by TP53 mutation that greatly increases risk of many cancers' }
      ],
      quiz: [
        {
          question: 'What is the approximate lifetime risk of breast cancer for a BRCA1 mutation carrier?',
          options: [
            '20-30%',
            '55-75%',
            '90-100%',
            '10-15%'
          ],
          correctAnswer: 1,
          explanation: 'BRCA1 mutation carriers have a 55-75% lifetime risk of developing breast cancer, which is significantly higher than the average population risk of about 12-13%.'
        },
        {
          question: 'At what age should MRI screening begin for BRCA mutation carriers?',
          options: [
            'Age 40',
            'Age 30',
            'Age 50',
            'Age 18'
          ],
          correctAnswer: 1,
          explanation: 'For BRCA mutation carriers, annual breast MRI screening should begin at age 25 (with mammogram added at age 30), which is 10 years before the earliest family cancer diagnosis.'
        },
        {
          question: 'Which medication can reduce breast cancer risk by about 50% in high-risk women?',
          options: [
            'Aspirin',
            'Tamoxifen',
            'Vitamin D',
            'Calcium supplements'
          ],
          correctAnswer: 1,
          explanation: 'Tamoxifen can reduce breast cancer risk by approximately 50% in high-risk women when taken for 5 years. Raloxifene and aromatase inhibitors also provide significant risk reduction.'
        }
      ]
    },
    {
      level: 5,
      title: 'Controversies, Outcomes, and Future Directions',
      content: `Breast cancer screening involves complex trade-offs and ongoing debates about optimal approaches.

**The Overdiagnosis Controversy:**

**What is Overdiagnosis?**

Overdiagnosis occurs when screening detects tumors that would never have caused symptoms or death in a person's lifetime. These are:

- Real cancers by pathological criteria
- But not destined to progress
- Would remain dormant or regress
- Result in unnecessary treatment

**Magnitude of Overdiagnosis:**

Estimates vary widely due to:
- Different study methodologies
- Different definitions
- Difficult measuring something "not observed"

| Study | Overdiagnosis Estimate | Notes |
|-------|----------------------|-------|
| Canadian trials | 20-30% | Long-term follow-up |
| European studies | 10-20% | Modern screening |
| US studies | 15-25% | Include DCIS |
| Cochrane review | 30% | Controversial estimate |

**DCIS (Ductal Carcinoma In Situ):**

*Definition:*
- Cancer cells in ducts, not invaded
- Detected almost exclusively by screening
- Accounts for ~20-25% of screen-detected "cancers"
- Unknown what percentage progresses

*Dilemma:*
- All DCIS currently treated
- Overtreatment likely occurring
- Active surveillance trials ongoing
- Molecular classification being studied

**The Benefits vs Harms Balance:**

**Benefits of Screening:**

*Absolute Risk Reduction:*
- Approximately 15-20% reduction in breast cancer mortality
- For every 1000 women screened regularly:
  - 4-8 breast cancer deaths prevented
  - 6-10 years of life gained per 1000 women screened

*Relative Risk Reduction:*
- 20% reduction in breast cancer death
- Effect increases over time
- Greatest benefit in women 50-69

**Harms of Screening:**

*False Positives:*
- Cumulative risk over 10 years: ~50%
- Causes anxiety and distress
- Requires additional testing
- May result in unnecessary biopsy

*Overdiagnosis:*
- Estimated 10-30% of screen-detected cancers
- Leads to unnecessary treatment
- Surgery, radiation, chemotherapy
- Physical and psychological impact

*Radiation:*
- Very small risk from screening radiation
- Estimated 1-3 cancers caused per 10,000 women screened
- Benefit outweighs risk for most women

*False Reassurance:*
- False negatives (missed cancers)
- Interval cancers (diagnosed between screens)
- May delay diagnosis if symptoms ignored

**Screening Controversies:**

**Age 40-49 Screening:**

*Arguments For:*
- Breast cancer is leading cause of death
- Years of life saved greater
- Tumors more aggressive in younger women
- Dense breasts don't preclude screening
- Women's preferences for early detection

*Arguments Against:*
- Lower absolute benefit
- Higher false positive rate
- More years of screening radiation
- Cost-effectiveness debated
- Overdiagnosis concerns

**Current Consensus:**
- Decision should be individualized
- Women should be informed of benefits/harms
- Shared decision making recommended
- Access to screening should be available

**Screening Interval:**

*Annual vs Biennial:*

| Factor | Annual | Biennial |
|--------|--------|----------|
| Mortality reduction | Slightly greater | Still substantial |
| False positives | Higher | Lower |
| Interval cancers | Lower | Higher |
| Cost | Higher | Lower |
| Radiation | Higher | Lower |

**Age to Stop Screening:**

*Arguments for Continuing:*
- Breast cancer incidence increases with age
- Treatment benefits extend to older women
- Life expectancy varies considerably
- Chronologic age not good marker

*Arguments for Stopping:*
- Competing mortality causes
- Limited benefit in very old
- Overdiagnosis higher
- Comorbidities affect treatment

**Screening Outcomes:**

**Mammography Performance Metrics:**

*Sensitivity:* 70-90%
- Higher in older women
- Lower in dense breasts
- Higher for larger tumors

*Specificity:* 85-95%
- Lower in younger women
- Lower with supplemental screening
- Varies by radiologist

*Positive Predictive Value (PPV):*
- Screening mammogram: 5-10%
- Diagnostic mammogram: 20-30%
- Biopsy recommendation: 25-40%

**False Positive Recall:**
- Cumulative 10-year risk: ~50%
- Causes significant anxiety
- May reduce future screening adherence
- Economic costs

**Interval Cancer Rate:**
- 10-30% of cancers diagnosed between screens
- Often more aggressive
- More common in younger women
- Higher with biennial screening

**Emerging Screening Approaches:**

**Artificial Intelligence:**

*Applications:*
- Triaging normal vs abnormal
- Prioritizing suspicious cases
- Measuring breast density
- Risk assessment
- Quality improvement

*Potential Benefits:*
- Improved accuracy
- Reduced radiologist workload
- Standardized assessment
- Personalized screening intervals

*Challenges:*
- Validation needed
- Regulatory approval
- Integration into workflow
- Liability concerns
- Cost

**Liquid Biopsy:**

*Approach:*
- Blood test for cancer signals
- Circulating tumor DNA
- Circulating tumor cells
- Exosomes
- Proteomics

*Current Status:*
- Early-stage detection research
- Not yet proven for screening
- May complement imaging
- May guide screening intervals

**Risk-Adapted Screening:**

*Approach:*
- Stratify women by risk
- Different screening for different risk groups
- Use all risk factors (genetic, familial, hormonal, lifestyle)
- Personalized screening intervals

*Examples:*
- WISDOM trial (Women Informed to Screen Optionally, Wisely)
- Comparing annual vs biennial screening
- Risk-stratified approach
- Personalized screening intervals

**Molecular Classification:**

*Goal:*
- Identify tumors needing treatment
- Distinguish indolent from aggressive
- Guide treatment decisions
- Reduce overtreatment

*Challenges:*
- Pre-diagnosis classification difficult
- Tumor heterogeneity
- Need for better biomarkers
- Integration into screening

**Shared Decision Making:**

**Essential Elements:**

1. **Discuss absolute benefits**
   - Not relative risk reduction
   - Number needed to screen
   - Context of other risks

2. **Discuss harms**
   - False positive rate
   - Overdiagnosis possibility
   - Radiation exposure
   - Procedure risks

3. **Discuss uncertainty**
   - Scientific debates
   - Individual variability
   - Evolving guidelines

4. **Elicit patient values**
   - Risk tolerance
   - Prior experiences
   - Anxiety levels
   - Personal preferences

5. **Make recommendation**
   - Based on risk factors
   - Based on values
   - Offer different approaches
   - Allow revisiting decision

**Future Directions:**

**Improved Risk Prediction:**
- Polygenic risk scores
- Combined models
- Better biomarkers
- Earlier identification

**Better Screening Tests:**
- More sensitive
- More specific
- Less invasive
- Lower cost
- More acceptable

**Personalized Screening:**
- Risk-adapted intervals
- Individualized modalities
- Start/stop based on biology not age
- Dynamic risk assessment

**Focus on Outcomes:**
- Mortality reduction
- Quality of life
- Less overtreatment
- More patient satisfaction
- Cost-effectiveness`,
      keyPoints: [
        'Overdiagnosis affects 10-30% of screen-detected cancers, leading to unnecessary treatment',
        'The benefits of screening include approximately 15-20% reduction in breast cancer mortality',
        'Approximately 50% of women will have at least one false positive over 10 years of screening',
        'Shared decision making is essential given the complex benefits and harms of screening',
        'Future directions include AI, liquid biopsy, and risk-adapted screening approaches'
      ],
      vocabulary: [
        { term: 'Overdiagnosis', definition: 'Detection of tumors that would never cause symptoms or death in a person\'s lifetime' },
        { term: 'Interval Cancer', definition: 'Cancer diagnosed between scheduled screening examinations' },
        { term: 'Absolute Risk Reduction', definition: 'The actual difference in event rates between control and treated groups' },
        { term: 'Positive Predictive Value', definition: 'The probability that a person with a positive test actually has the disease' }
      ],
      quiz: [
        {
          question: 'What is the estimated percentage of women who will have at least one false positive mammogram over 10 years of regular screening?',
          options: [
            'Less than 10%',
            'About 25%',
            'About 50%',
            'Almost 100%'
          ],
          correctAnswer: 2,
          explanation: 'Approximately 50% of women will have at least one false positive mammogram over 10 years of regular screening, leading to additional testing, anxiety, and potential biopsy.'
        },
        {
          question: 'What is the approximate mortality reduction from breast cancer screening?',
          options: [
            'Less than 5%',
            '15-20%',
            '50-60%',
            'Almost 100%'
          ],
          correctAnswer: 1,
          explanation: 'Breast cancer screening provides approximately 15-20% reduction in breast cancer mortality. This means for every 1000 women screened regularly, 4-8 breast cancer deaths are prevented.'
        },
        {
          question: 'Which statement best describes the current understanding of DCIS (ductal carcinoma in situ)?',
          options: [
            'All DCIS will progress to invasive cancer if untreated',
            'No DCIS would ever progress to invasive cancer',
            'Some but not all DCIS would progress to invasive cancer, but we don\'t know which',
            'DCIS is not a real cancer'
          ],
          correctAnswer: 2,
          explanation: 'Some but not all DCIS would progress to invasive cancer, but current limitations in molecular classification mean we cannot reliably determine which cases require treatment and which can be safely monitored. Active surveillance trials are ongoing.'
        }
      ]
    }
  ],
  relatedTopics: ['breast-exam', 'breast-anatomy', 'cancer-screening', 'womens-health-screening'],
  lastUpdated: '2025-01-25',
  references: [
    { title: 'USPSTF Breast Cancer Screening Recommendations', url: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/breast-cancer-screening' },
    { title: 'American Cancer Society Breast Cancer Screening Guidelines', url: 'https://www.cancer.org/cancer/breast-cancer/screening-tests-and-early-detection.html' },
    { title: 'ACR Practice Parameter for Breast Cancer Screening', url: 'https://www.acr.org/-/media/ACR/Files/Practice-Parameters/BC-Screening.pdf' },
    { title: 'Overdiagnosis in Breast Cancer Screening - Cochrane Review', url: 'https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD001877.pub6/full' },
    { title: 'NCCN Guidelines for Breast Cancer Screening and Diagnosis', url: 'https://www.nccn.org/professionals/physician_gls/default.aspx' }
  ]
};
