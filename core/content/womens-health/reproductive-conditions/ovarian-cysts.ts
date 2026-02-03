import { WomensHealthContent, LegacyWomensHealthContent } from '../types';

export const ovarianCysts: WomensHealthContent = {
  id: 'ovarian-cysts',
  title: 'Ovarian Cysts',
  category: 'Reproductive Conditions',
  complexityLevels: [
    {
      level: 1,
      title: 'Understanding Ovarian Cysts',
      content: `Ovarian cysts are fluid-filled sacs that develop on or within the ovaries. They are very common and most are harmless.

**What are Ovarian Cysts?**

The ovaries are two small organs on each side of the uterus. Each month, during the menstrual cycle, a follicle (a small sac) grows in the ovary and releases an egg. Sometimes, this normal process doesn't work exactly as expected, leading to the formation of a cyst.

**Key Facts About Ovarian Cysts:**

- Most women will have at least one ovarian cyst during their lifetime
- The majority of ovarian cysts are benign (non-cancerous)
- Many cysts cause no symptoms and go away on their own
- They are most common during reproductive years
- They can vary in size from very small to quite large

**Types of Ovarian Cysts:**

**Functional Cysts (Most Common):**

1. **Follicular Cysts**
   - Form when the follicle doesn't release an egg
   - The follicle continues to grow
   - Usually disappear within 1-3 months

2. **Corpus Luteum Cysts**
   - Form after the egg is released
   - The sac that released the egg fills with fluid
   - Usually disappear within a few weeks

**Other Types of Cysts:**

- **Dermoid Cysts** - Contain tissue like hair, skin, or teeth
- **Endometriomas** - Related to endometriosis
- **Cystadenomas** - Can be filled with watery or mucus-like fluid

**Symptoms:**

Most ovarian cysts don't cause symptoms. When symptoms do occur, they may include:
- Pelvic pain - a dull or sharp ache in the lower abdomen
- Fullness or heaviness in the abdomen
- Bloating
- Pain during intercourse
- Painful bowel movements

**When to Seek Medical Attention:**

Call your doctor if you experience:
- Sudden, severe abdominal or pelvic pain
- Pain with fever and vomiting
- Faintness, dizziness, or weakness
- Rapid breathing

**Good News About Ovarian Cysts:**

- Most functional cysts disappear without treatment
- They rarely are cancerous, especially in younger women
- Regular check-ups can monitor them
- Many treatment options exist if they cause problems
`,
      keyPoints: [
        'Ovarian cysts are fluid-filled sacs on the ovaries',
        'Most ovarian cysts are functional and resolve without treatment',
        'The majority of ovarian cysts are benign (non-cancerous)',
        'Follicular and corpus luteum cysts are the most common types',
        'Sudden severe pain may indicate a cyst emergency'
      ],
      vocabulary: [
        { term: 'Ovary', definition: 'A female reproductive organ that produces eggs and hormones' },
        { term: 'Follicle', definition: 'A small sac in the ovary that contains an egg' },
        { term: 'Benign', definition: 'Not cancerous; not malignant' },
        { term: 'Pelvic', definition: 'Related to the lower part of the abdomen, containing the reproductive organs' }
      ],
      quiz: [
        {
          question: 'What is the most common type of ovarian cyst?',
          options: [
            'Dermoid cysts',
            'Functional cysts',
            'Endometriomas',
            'Cystadenomas'
          ],
          correctAnswer: 1,
          explanation: 'Functional cysts (follicular and corpus luteum cysts) are the most common type of ovarian cysts, related to the normal menstrual cycle.',
        },
        {
          question: 'What happens to most functional ovarian cysts?',
          options: [
            'They grow larger over time',
            'They disappear on their own within a few months',
            'They require surgical removal',
            'They become cancerous'
          ],
          correctAnswer: 1,
          explanation: 'Most functional cysts are harmless and disappear on their own within 1-3 months without any treatment.',
        },
        {
          question: 'Which symptom requires immediate medical attention?',
          options: [
            'Mild bloating',
            'Sudden severe abdominal pain with vomiting',
            'Occasional pelvic discomfort',
            'Fullness in the abdomen'
          ],
          correctAnswer: 1,
          explanation: 'Sudden severe abdominal or pelvic pain, especially with fever and vomiting, may indicate a cyst rupture or ovarian torsion, requiring immediate medical attention.',
        }
      ]
    },
    {
      level: 2,
      title: 'Symptoms and Diagnosis',
      content: `Understanding the symptoms and diagnostic process for ovarian cysts helps ensure appropriate evaluation and treatment.

**Symptoms of Ovarian Cysts:**

**No Symptoms (Asymptomatic):**
- Most ovarian cysts cause no symptoms
- Often discovered incidentally during pelvic exams or imaging

**Mild Symptoms:**
- Dull ache or pressure in the lower abdomen
- Sensation of fullness or bloating
- Mild pelvic discomfort
- Feeling of heaviness

**Moderate Symptoms:**
- Sharp or severe pelvic pain
- Pain during sexual intercourse (dyspareunia)
- Painful bowel movements or pressure on bowels
- Urinary urgency or frequency
- Irregular menstrual periods
- Abnormal bleeding

**Severe Symptoms (Emergency Warning Signs):**
These symptoms may indicate a serious complication:

| Symptom | Possible Complication |
|---------|----------------------|
| Sudden, severe abdominal/pelvic pain | Ruptured cyst |
| Pain with fever and vomiting | Infection |
| Faintness, dizziness, weakness | Internal bleeding |
| Rapid heartbeat, rapid breathing | Shock |
| Abdominal tenderness with rigidity | Peritonitis |

**Diagnostic Evaluation:**

**1. Medical History:**
Your doctor will ask about:
- Your symptoms and when they started
- Your menstrual cycle patterns
- Past ovarian cysts or other ovarian problems
- Family history of ovarian cancer
- Medications you're taking
- Pregnancy history

**2. Physical Examination:**
- Pelvic exam to feel for ovarian enlargement or masses
- Assessment of abdominal tenderness
- Check for signs of pregnancy or other conditions

**3. Imaging Studies:**

*Ultrasound (Primary Diagnostic Tool):*
- Transvaginal ultrasound - best for detailed ovarian imaging
- Abdominal ultrasound - additional view
- Determines cyst size, location, and characteristics
- Helps distinguish between simple and complex cysts

*Characteristics of Simple Cysts (likely benign):*
- Smooth, thin walls
- No internal solid components
- Fluid-filled appearance
- No blood flow within the cyst

*Characteristics of Complex Cysts (need more evaluation):*
- Thick walls or septations
- Solid areas within the cyst
- Both fluid and solid components
- Increased blood flow

**4. Additional Tests (when needed):**

| Test | When Used |
|------|-----------|
| Pregnancy test | Rule out ectopic pregnancy |
| CA-125 blood test | Screen for ovarian cancer risk |
| CT scan | Better visualization of complex cysts |
| MRI | Detailed characterization of complex masses |
| Hormone levels | Evaluate hormonal causes |

**5. Monitoring:**

For small, simple cysts without concerning features:
- Repeat ultrasound in 6-8 weeks
- Many will resolve spontaneously
- No treatment needed if asymptomatic

**Red Flags Requiring Further Evaluation:**

- Complex cyst appearance on ultrasound
- Large cysts (>5-10 cm)
- Persistent cysts that don't resolve
- Cysts that grow over time
- Family history of ovarian cancer
- Postmenopausal women with ovarian cysts

**Conditions That Can Mimic Ovarian Cysts:**

- Ectopic pregnancy
- Ovarian torsion
- Pelvic inflammatory disease
- Appendicitis
- Diverticulitis
- Urinary tract infection
- Endometriosis
- Uterine fibroids
`,
      keyPoints: [
        'Most ovarian cysts are asymptomatic and discovered incidentally',
        'Transvaginal ultrasound is the primary diagnostic tool for ovarian cysts',
        'Simple cysts with thin walls and fluid-only contents are likely benign',
        'Complex cysts with solid components or septations need further evaluation',
        'Sudden severe pain may indicate cyst rupture or ovarian torsion'
      ],
      vocabulary: [
        { term: 'Transvaginal Ultrasound', definition: 'An imaging test using a probe inserted into the vagina to view pelvic organs' },
        { term: 'Septations', definition: 'Walls or divisions within a cyst that create separate compartments' },
        { term: 'Asymptomatic', definition: 'Not showing any symptoms of disease' },
        { term: 'CA-125', definition: 'A blood test that measures a protein that may be elevated in ovarian cancer' }
      ],
      quiz: [
        {
          question: 'What is the primary imaging test used to diagnose ovarian cysts?',
          options: [
            'CT scan',
            'MRI',
            'Ultrasound',
            'X-ray'
          ],
          correctAnswer: 2,
          explanation: 'Ultrasound, particularly transvaginal ultrasound, is the primary imaging test for evaluating ovarian cysts.',
        },
        {
          question: 'Which characteristic suggests a cyst is more likely to be benign?',
          options: [
            'Solid components within the cyst',
            'Thick irregular walls',
            'Smooth thin walls with fluid-only content',
            'Septations dividing the cyst'
          ],
          correctAnswer: 2,
          explanation: 'Simple cysts with smooth, thin walls and fluid-only contents are more likely to be benign. Solid components, thick walls, and septations are concerning features.',
        },
        {
          question: 'Why is a pregnancy test often ordered when evaluating an ovarian cyst?',
          options: [
            'Pregnancy causes cysts to grow',
            'To rule out ectopic pregnancy which can cause similar symptoms',
            'Pregnancy tests detect ovarian cancer',
            'Hormones from pregnancy dissolve cysts'
          ],
          correctAnswer: 1,
          explanation: 'A pregnancy test is important to rule out ectopic pregnancy, which can present with similar symptoms and is a medical emergency.',
        }
      ]
    },
    {
      level: 3,
      title: 'Types and Causes',
      content: `Understanding the different types of ovarian cysts and their causes helps guide appropriate management.

**Classification of Ovarian Cysts:**

**I. Functional Cysts (Physiologic):**
These are related to the normal menstrual cycle and are the most common type.

*Follicular Cysts:*
- **Formation:** The follicle fails to rupture and release the egg
- **Timing:** Occurs during the first two weeks of the menstrual cycle
- **Size:** Usually 2-3 cm, rarely exceed 5 cm
- **Resolution:** Spontaneous regression within 4-8 weeks
- **Frequency:** Very common, especially during reproductive years

*Corpus Luteum Cysts:*
- **Formation:** After ovulation, the corpus luteum fills with fluid or blood
- **Timing:** Occurs during the luteal phase (second half of cycle)
- **Size:** Can be larger than follicular cysts, up to 6-8 cm
- **Resolution:** Usually regress within 2-3 menstrual cycles
- **Special cases:** Can persist in early pregnancy until placenta takes over hormone production

**II. Pathologic Cysts:**

*Dermoid Cysts (Mature Cystic Teratomas):*
- **Origin:** Germ cells that can develop into various tissue types
- **Contents:** Hair, skin, teeth, sebaceous material, sometimes bone or thyroid tissue
- **Age:** Most common in women 20-40 years old
- **Behavior:** Usually benign, but can grow large
- **Treatment:** Surgical removal recommended due to risk of complications

*Endometriomas (Chocolate Cysts):*
- **Origin:** Endometriosis involving the ovary
- **Contents:** Old, dark blood that resembles chocolate syrup
- **Association:** Part of endometriosis syndrome
- **Impact:** Can affect fertility and cause pain
- **Treatment:** May require surgical drainage/removal

*Cystadenomas:*
- **Serous Cystadenoma:**
  - Filled with watery fluid
  - Can become quite large
  - Mostly benign but some can be malignant

- **Mucinous Cystadenoma:**
  - Filled with thick, gelatinous material
  - Can grow very large (up to 30 cm)
  - Higher risk of malignancy than serous type

**III. Other Ovarian Masses:**

*Polycystic Ovary Syndrome (PCOS):*
- Multiple small follicles (cysts) in both ovaries
- Associated with hormonal imbalances
- Part of a metabolic syndrome
- Treated differently than isolated cysts

*Ovarian Cancer:*
- Rare, but risk increases with age
- Postmenopausal cysts have higher cancer risk
- Complex solid and cystic features concerning

**Causes and Risk Factors:**

**For Functional Cysts:**
- Normal menstrual cycle variation
- Ovulation induction medications (clomiphene, letrozole)
- Pregnancy (corpus luteum persists)
- Hormonal medications
- Gonadotropin-releasing hormone (GnRH) agonists

**For Pathologic Cysts:**
- **Genetic factors** - Family history of ovarian cysts
- **Hormonal imbalances** - Estrogen dominance
- **Endometriosis** - Risk for endometriomas
- **Pregnancy** - Corpus luteum cysts are common
- **Pelvic infections** - Can cause tubo-ovarian abscesses
- **Previous ovarian cysts** - Increased risk of recurrence

**Risk Factors for Developing Ovarian Cysts:**

| Risk Factor | Impact |
|-------------|--------|
| History of ovarian cysts | Increased risk of recurrence |
| Irregular menstrual cycles | Increased functional cysts |
| Infertility treatment | Increased functional cysts |
| Hypothyroidism | May increase cyst development |
| Endometriosis | Endometrioma risk |
| Pregnancy | Corpus luteum cysts common |
| Breastfeeding | Reduced risk of ovulation/cysts |

**Hormonal Influences:**

*Estrogen:*
- Stimulates follicular development
- Excess estrogen may contribute to cyst formation
- Birth control pills reduce functional cyst risk

*Progesterone:*
- Supports corpus luteum function
- Imbalance may lead to corpus luteum cysts
- Progesterone-only pills may increase functional cysts

*Gonadotropins (FSH and LH):*
- FSH stimulates follicular growth
- LH surge triggers ovulation
- Fertility medications increase multiple follicles

**Prevention Strategies:**

While not all cysts can be prevented, some strategies may help:
- **Hormonal contraception** - Reduces functional cyst development
- **Regular pelvic exams** - Early detection of concerning cysts
- **Awareness of symptoms** - Prompt evaluation of changes
- **Management of endometriosis** - May prevent endometriomas
`,
      keyPoints: [
        'Functional cysts (follicular and corpus luteum) are the most common type',
        'Dermoid cysts contain various tissue types including hair and teeth',
        'Endometriomas are associated with endometriosis and contain old blood',
        'Fertility medications increase the risk of functional cysts',
        'Hormonal birth control reduces the risk of functional cysts'
      ],
      vocabulary: [
        { term: 'Germ Cell', definition: 'A type of cell that can develop into many different cell types; dermoid cysts arise from these cells' },
        { term: 'Teratoma', definition: 'A type of tumor containing tissue types from multiple germ cell layers' },
        { term: 'Luteal Phase', definition: 'The second half of the menstrual cycle, after ovulation has occurred' },
        { term: 'Endometriosis', definition: 'A condition where tissue similar to the uterine lining grows outside the uterus' }
      ],
      quiz: [
        {
          question: 'What gives endometriomas their characteristic "chocolate cyst" appearance?',
          options: [
            'They contain chocolate-like secretions',
            'Old, dark blood that resembles chocolate syrup',
            'Chocolate-colored pigments in the cyst wall',
            'They are stained by menstrual blood products'
          ],
          correctAnswer: 1,
          explanation: 'Endometriomas contain old, dark blood from endometrial tissue that resembles chocolate syrup, giving them the nickname "chocolate cysts."',
        },
        {
          question: 'Which type of ovarian cyst can contain tissue such as hair and teeth?',
          options: [
            'Follicular cysts',
            'Corpus luteum cysts',
            'Endometriomas',
            'Dermoid cysts'
          ],
          correctAnswer: 3,
          explanation: 'Dermoid cysts (mature cystic teratomas) arise from germ cells and can contain various tissue types including hair, skin, teeth, and sometimes bone.',
        },
        {
          question: 'How does hormonal birth control affect ovarian cyst formation?',
          options: [
            'Increases the risk of functional cysts',
            'Has no effect on cyst formation',
            'Reduces the risk of functional cysts',
            'Only affects endometriomas'
          ],
          correctAnswer: 2,
          explanation: 'Hormonal birth control pills suppress ovulation, which reduces the risk of functional cyst formation by preventing follicular development.',
        }
      ]
    },
    {
      level: 4,
      title: 'Treatment and Management',
      content: `Management of ovarian cysts depends on the type of cyst, symptoms, patient age, and desire for future fertility.

**Treatment Decision Factors:**

- Age (premenopausal vs postmenopausal)
- Symptom presence and severity
- Cyst characteristics on imaging (simple vs complex)
- Size of the cyst
- Whether the cyst is new or persistent
- Family history of ovarian cancer
- Desire for future fertility
- Menopausal status

**Management Approaches:**

**I. Watchful Waiting (Expectant Management)**

*Indications:*
- Asymptomatic simple cysts < 5 cm in premenopausal women
- Asymptomatic simple cysts < 3 cm in postmenopausal women
- Functional cysts typical of menstrual cycle
- No concerning features on imaging

*Monitoring Protocol:*
- Repeat ultrasound in 6-8 weeks
- If cyst resolves: no further follow-up needed
- If cyst persists but stable: continue monitoring
- If cyst grows or changes: reconsider intervention

**II. Medical Management**

*Hormonal Contraceptives:*
- **Combined oral contraceptives** (estrogen + progesterone)
  - Suppress ovulation
  - Prevent new functional cysts
  - Don't shrink existing cysts
  - May reduce cyst recurrence

- **Progesterone-only options**
  - Pill, IUD, implant, injection
  - Less effective for cyst prevention
  - May still provide benefit

*Pain Management:*
- NSAIDs (ibuprofen, naproxen) for pain relief
- Heat therapy for discomfort
- Activity modification if needed

**III. Surgical Intervention**

*Indications for Surgery:*

| Indication | Details |
|-----------|---------|
| Large cysts | Usually > 5-10 cm depending on characteristics |
| Persistent cysts | Cysts that don't resolve after 2-3 cycles |
| Symptomatic cysts | Severe pain, bleeding, or pressure symptoms |
| Complex cysts | Solid components, septations, concerning features |
| Postmenopausal cysts | Any cyst, especially if new or enlarging |
| Suspicion of malignancy | Complex features, elevated CA-125 |
| Complications | Torsion, rupture, hemorrhage |

*Surgical Options:*

**1. Cystectomy (Cyst Removal):**
- Removes cyst while preserving ovarian tissue
- Preferred for women desiring fertility
- Can often be done laparoscopically
- Recovery: 1-2 weeks for laparoscopic

**2. Oophorectomy (Ovary Removal):**
- Removal of entire ovary
- Considered when:
  - Cyst involves entire ovary
  - Patient is postmenopausal
  - Suspicion of malignancy
  - Patient prefers definitive treatment
- May be unilateral (one ovary) or bilateral

**3. Laparoscopic Surgery:**
- Minimally invasive approach
- Small incisions (3-4)
- Camera-guided surgery
- Faster recovery
- Less pain
- Preferred for most cases

**4. Laparotomy (Open Surgery):**
- Larger incision
- Used for:
  - Very large cysts
  - Suspected cancer
  - Need for better visualization
  - Inability to safely do laparoscopically
- Longer recovery (4-6 weeks)

**Managing Complications:**

**Ovarian Torsion:**
- Surgical emergency
- Requires immediate intervention
- Detorsion and assessment of ovarian viability
- Cystectomy or oophorectomy as needed
- Ovaropexy (ovary fixation) may be considered

**Ruptured Cyst:**
- Management depends on hemodynamic stability
- Stable: Pain control, observation
- Unstable: Surgery for hemorrhage control

**Special Situations:**

**Pregnancy:**
- Most cysts in early pregnancy are corpus luteum cysts
- Usually resolve by 16-20 weeks
- Surgical intervention only if:
  - Large (> 6-8 cm)
  - Symptomatic
  - Concerning features
  - Torsion or rupture suspected
- Surgery ideally in second trimester

**Postmenopausal Women:**
- Lower threshold for surgical intervention
- Higher concern for malignancy
- CA-125 testing often obtained
- Surgical consultation usually recommended

**Women with Endometriosis:**
- Endometriomas may require surgery
- Consider fertility preservation
- May benefit from medical management
- Excision preferred over drainage (high recurrence)

**Follow-up After Treatment:**

- Monitor for recurrence
- Regular pelvic exams
- Ultrasound as indicated
- CA-125 if risk factors present
- Consider hormonal contraception to prevent recurrence
`,
      keyPoints: [
        'Watchful waiting is appropriate for most small, simple, asymptomatic cysts',
        'Hormonal contraceptives prevent new functional cysts but don\'t shrink existing ones',
        'Surgery is indicated for large, persistent, symptomatic, or complex cysts',
        'Laparoscopic surgery is preferred for most cases with faster recovery',
        'Postmenopausal women have a lower threshold for surgical intervention'
      ],
      vocabulary: [
        { term: 'Cystectomy', definition: 'Surgical removal of a cyst while preserving the surrounding tissue' },
        { term: 'Oophorectomy', definition: 'Surgical removal of an ovary' },
        { term: 'Ovarian Torsion', definition: 'Twisting of the ovary on its blood supply, causing severe pain and potential tissue death' },
        { term: 'Laparoscopy', definition: 'Minimally invasive surgery using small incisions and a camera' }
      ],
      quiz: [
        {
          question: 'What is the initial management approach for an asymptomatic simple cyst less than 5 cm in a premenopausal woman?',
          options: [
            'Immediate surgical removal',
            'Watchful waiting with repeat ultrasound in 6-8 weeks',
            'Hormonal treatment to shrink the cyst',
            'CA-125 testing every month'
          ],
          correctAnswer: 1,
          explanation: 'For asymptomatic simple cysts less than 5 cm in premenopausal women, watchful waiting with repeat ultrasound in 6-8 weeks is appropriate as many will resolve spontaneously.',
        },
        {
          question: 'Which surgical approach is preferred for most ovarian cyst removals?',
          options: [
            'Laparotomy (open surgery)',
            'Laparoscopic surgery',
            'Robotic surgery',
            'Vaginal surgery'
          ],
          correctAnswer: 1,
          explanation: 'Laparoscopic surgery is the preferred approach for most ovarian cyst removals because it is minimally invasive, results in faster recovery, and causes less pain.',
        },
        {
          question: 'How does hormonal birth control affect existing ovarian cysts?',
          options: [
            'It shrinks existing cysts',
            'It prevents new functional cysts but doesn\'t shrink existing ones',
            'It causes cysts to grow faster',
            'It has no effect on ovarian cysts'
          ],
          correctAnswer: 1,
          explanation: 'Hormonal birth control suppresses ovulation, preventing new functional cysts from forming, but does not shrink existing cysts.',
        }
      ]
    },
    {
      level: 5,
      title: 'Advanced Considerations and Special Cases',
      content: `This advanced section explores complex scenarios, special populations, and emerging management considerations.

**Advanced Diagnostic Considerations:**

**Risk of Malignancy Index (RMI):**

A scoring system used to assess ovarian cyst malignancy risk:

*RMI = Score A × Score B × Score C*

**Score A (Menopausal Status):**
- Premenopausal: 1
- Postmenopausal: 3

**Score B (Ultrasound Features):**
- 0: No suspicious features
- 1: One suspicious feature
- 2: Two or more suspicious features (multiloculated, solid areas, ascites, bilateral)

**Score C (CA-125 Level):**
- 1: < 35
- 2: 35-250
- 3: > 250

*Interpretation:*
- RMI < 200: Low risk (often managed conservatively or laparoscopically)
- RMI > 200: High risk (referral to gynecologic oncologist)

**IOTA (International Ovarian Tumor Analysis) Group:**

Standardized ultrasound terminology for ovarian masses:

*Benign Features:*
- Unilocular cyst
- Smooth walls
- No solid components
- No ascites
- Normal Doppler flow

*Malignant Features:*
- Irregular solid tumor
- Ascites
- Papillary projections
- Very strong blood flow
- Multilocular solid tumor

**Algorithmic Approaches:**

*Ovarian-Adnexal Reporting and Data System (O-RADS):**

| Category | Risk of Malignancy | Management |
|----------|-------------------|-------------|
| O-RADS 0 | Incomplete | Repeat imaging |
| O-RADS 1 | Normal | Routine care |
| O-RADS 2 | Almost certainly benign (< 1%) | Routine follow-up |
| O-RADS 3 | Low malignancy risk (1-10%) | Follow-up or MRI |
| O-RADS 4 | Intermediate risk (10-50%) | Surgical referral |
| O-RADS 5 | High risk (> 50%) | Surgical removal |

**Special Populations:**

**Pediatric and Adolescent Patients:**

*Unique Considerations:*
- Ovarian preservation is paramount
- High rate of functional cysts
- Germ cell tumors more common than epithelial
- Dermoid cysts common in this age group

*Management Approach:*
- More conservative threshold for surgery
- Cystectomy rather than oophorectomy when possible
- Fertility preservation always a consideration
- Laparoscopic approach preferred

**Pregnant Patients:**

*Physiologic Changes:*
- Corpus luteum cysts common in first trimester
- Simple cysts < 6 cm typically resolve
- Surgical complication rate higher in pregnancy

*Indications for Surgery:*
- Suspected torsion
- Rupture with hemodynamic instability
- Persisting symptomatic cysts > 6 cm
- Suspected malignancy (rare)

*Timing:*
- Second trimester (14-24 weeks) preferred
- Lower risk of miscarriage vs first trimester
- Lower risk of preterm labor vs third trimester

**Postmenopausal Patients:**

*Risk Assessment:*
- Higher baseline risk of malignancy
- Lower threshold for surgical intervention
- CA-125 more reliable (though not definitive)

*Management:*
- Any simple cyst > 3 cm warrants close follow-up
- Complex cysts usually require surgical evaluation
- Consideration for bilateral salpingo-oophorectomy

**HER2/neu, BRCA, and Genetic Considerations:**

*High-Risk Patients:*
- BRCA1/2 mutation carriers
- Lynch syndrome
- Family history of ovarian/breast cancer
- Consider risk-reducing salpingo-oophorectomy
- Any ovarian mass requires careful evaluation

**Fertility Preservation Strategies:**

**For Patients Undergoing Surgery:**

*Cystectomy Techniques:*
- Careful dissection to preserve ovarian tissue
- Avoiding excessive electrocautery
- Hemostasis with minimal tissue damage

*Ovarian Tissue Cryopreservation:*
- Consider for extensive ovarian involvement
- May be option for patients needing bilateral surgery

*Ovarian Transposition:*
- Moving ovaries away from radiation field (if radiation needed)

**Emerging Therapies:**

**Minimally Invasive Approaches:**

*Single-Port Laparoscopy:*
- Single incision through umbilicus
- Better cosmetic result
- Technically challenging

*Robotic Surgery:*
- Enhanced visualization
- Improved dexterity
- Longer operative time
- Higher cost

*Natural Orifice Surgery:*
- Transvaginal cyst removal
- No abdominal incisions
- Limited availability

**Medical Management Advances:**

*Dienogest:*
- Selective progesterone receptor modulator
- For endometrioma management
- Avoids surgery in select cases

*Aromatase Inhibitors:*
- Occasionally used for recurrent endometriomas
- Off-label use

**Surveillance Strategies:**

**For Low-Risk Patients:**
- Ultrasound every 6-12 months
- CA-125 monitoring (especially postmenopausal)
- Patient education on warning symptoms

**For High-Risk Patients (BRCA carriers):**
- Consider prophylactic surgery after childbearing
- Semiannual transvaginal ultrasound
- CA-125 monitoring (though limited sensitivity)
- Research protocols for novel biomarkers

**Quality of Life Considerations:**

- Chronic pain management for recurrent cysts
- Psychological impact of cancer worry
- Sexual function concerns
- Body image issues
- Fertility anxiety
`,
      keyPoints: [
        'The Risk of Malignancy Index (RMI) helps assess ovarian cyst malignancy risk using ultrasound features, menopausal status, and CA-125',
        'O-RADS provides a standardized system for ovarian cyst evaluation and management recommendations',
        'Ovarian preservation is a key priority in pediatric and adolescent patients',
        'Second trimester is the preferred timing for surgical intervention during pregnancy',
        'Fertility preservation techniques are important considerations for patients of reproductive age'
      ],
      vocabulary: [
        { term: 'O-RADS', definition: 'Ovarian-Adnexal Reporting and Data System - a standardized system for categorizing ovarian masses' },
        { term: 'Salpingo-oophorectomy', definition: 'Surgical removal of the fallopian tube and ovary' },
        { term: 'Dienogest', definition: 'A selective progesterone receptor modulator used in endometriosis treatment' },
        { term: 'Cryopreservation', definition: 'The process of preserving biological tissue at very low temperatures' }
      ],
      quiz: [
        {
          question: 'Which RMI score indicates high risk for malignancy requiring referral to a gynecologic oncologist?',
          options: [
            'RMI < 50',
            'RMI < 100',
            'RMI > 200',
            'RMI > 500'
          ],
          correctAnswer: 2,
          explanation: 'An RMI score greater than 200 indicates high risk for malignancy and warrants referral to a gynecologic oncologist.',
        },
        {
          question: 'During pregnancy, when is the preferred timing for ovarian cyst surgery if indicated?',
          options: [
            'First trimester',
            'Second trimester (14-24 weeks)',
            'Third trimester',
            'Immediately postpartum'
          ],
          correctAnswer: 1,
          explanation: 'The second trimester (14-24 weeks) is preferred for ovarian cyst surgery during pregnancy because it has lower risks of miscarriage compared to the first trimester and lower risk of preterm labor compared to the third trimester.',
        },
        {
          question: 'What size threshold warrants consideration for surgery in an asymptomatic postmenopausal woman with a simple cyst?',
          options: [
            'Greater than 2 cm',
            'Greater than 3 cm',
            'Greater than 5 cm',
            'Greater than 10 cm'
          ],
          correctAnswer: 1,
          explanation: 'In postmenopausal women, any simple cyst greater than 3 cm warrants close follow-up and consideration for surgical intervention due to higher malignancy risk.',
        }
      ]
    }
  ],
  relatedTopics: ['menstrual-disorders', 'endometriosis', 'pcos', 'fertility-overview', 'womens-health-screening'],
  lastUpdated: '2025-01-25',
  references: [
    { title: 'American College of Obstetricians and Gynecologists', url: 'https://www.acog.org/womens-healthcare/faqs/ovarian-cysts' },
    { title: 'Evaluation and Management of Ovarian Cysts', url: 'https://www.aafp.org/pubs/afp/issues/2016/1101/p844.html' },
    { title: 'Ovarian Cysts - Mayo Clinic', url: 'https://www.mayoclinic.org/diseases-conditions/ovarian-cysts' },
    { title: 'IOTA Group - Ovarian Tumor Analysis', url: 'https://www.iotagroup.org/' },
    { title: 'ACOG Practice Bulletin on Ovarian Cysts', url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletins' }
  ]
};
