import { WomensHealthContent, LegacyWomensHealthContent } from '../types';

export const pelvicInflammatoryDisease: WomensHealthContent = {
  id: 'pelvic-inflammatory-disease',
  title: 'Pelvic Inflammatory Disease (PID)',
  category: 'Reproductive Conditions',
  complexityLevels: [
    {
      level: 1,
      title: 'Understanding Pelvic Inflammatory Disease',
      content: `Pelvic Inflammatory Disease (PID) is an infection of a woman's reproductive organs. It's usually caused by sexually transmitted infections and can lead to serious complications if not treated.

**What is PID?**

PID is an infection that affects the:
- Uterus
- Fallopian tubes
- Ovaries
- The inside of the pelvis

The infection usually starts in the vagina and cervix, then moves up to the upper reproductive organs.

**What Causes PID?**

PID is most commonly caused by sexually transmitted infections (STIs):
- **Chlamydia** - the most common cause
- **Gonorrhea** - also very common
- Other bacteria that normally live in the vagina

**Who Gets PID?**

Any woman can get PID, but it's more common if you:
- Are sexually active and under age 25
- Have multiple sexual partners
- Have a new sexual partner
- Have had PID before
- Douche regularly (flushing the vagina with water or other liquids)
- Use an IUD for birth control (slightly increased risk in first 3 weeks)

**Symptoms of PID:**

Some women have no symptoms, but when symptoms occur, they may include:
- Pain in your lower abdomen or pelvis
- Heavy or foul-smelling vaginal discharge
- Bleeding between periods or after sex
- Pain during sex
- Fever or chills
- Painful urination

**Why PID is Serious:**

If not treated promptly, PID can cause:
- **Infertility** - difficulty getting pregnant
- **Ectopic pregnancy** - pregnancy outside the uterus, which can be life-threatening
- **Chronic pelvic pain** - pain that lasts for months or years
- **Tubo-ovarian abscess** - a pocket of pus that can rupture

**Prevention:**

You can reduce your risk of PID by:
- Practicing safe sex - using condoms correctly every time
- Getting tested for STIs regularly
- Limiting sexual partners
- Not douching
- Getting prompt treatment if you think you have an STI

**Treatment:**

PID is treated with antibiotics to clear the infection. It's important to:
- Take all the medicine exactly as prescribed
- Finish all the antibiotics even if you feel better
- Have your partner tested and treated if needed
- Avoid sex until treatment is complete
- Follow up with your doctor to make sure the infection is gone
`,
      keyPoints: [
        'PID is an infection of the upper female reproductive organs',
        'It is most commonly caused by chlamydia and gonorrhea infections',
        'Many women have no symptoms but can still develop complications',
        'Untreated PID can cause infertility, ectopic pregnancy, and chronic pain',
        'PID is treated with antibiotics and early treatment is important'
      ],
      vocabulary: [
        { term: 'Fallopian Tubes', definition: 'The tubes that carry eggs from the ovaries to the uterus' },
        { term: 'Sexually Transmitted Infection (STI)', definition: 'An infection passed from person to person through sexual contact' },
        { term: 'Ectopic Pregnancy', definition: 'A pregnancy that occurs outside the uterus, usually in a fallopian tube' },
        { term: 'Douche', definition: 'Washing or cleaning out the vagina with water or other fluids' }
      ],
      quiz: [
        {
          question: 'What is the most common cause of pelvic inflammatory disease?',
          options: [
            'Yeast infections',
            'Chlamydia and gonorrhea infections',
            'Bacterial vaginosis',
            'Urinary tract infections'
          ],
          correctAnswer: 1,
          explanation: 'Chlamydia and gonorrhea are the most common causes of PID. These sexually transmitted infections can ascend from the vagina and cervix to infect the upper reproductive organs.',
        },
        {
          question: 'What serious complication can occur from untreated PID?',
          options: [
            'Yeast infections',
            'Infertility',
            'Diabetes',
            'High blood pressure'
          ],
          correctAnswer: 1,
          explanation: 'Untreated PID can cause scarring of the fallopian tubes and other reproductive organs, leading to difficulty getting pregnant (infertility).',
        },
        {
          question: 'How is PID treated?',
          options: [
            'Surgery',
            'Antibiotics',
            'Hormones',
            'No treatment needed'
          ],
          correctAnswer: 1,
          explanation: 'PID is treated with antibiotics to clear the infection. It\'s important to take all medication exactly as prescribed and complete the full course.',
        }
      ]
    },
    {
      level: 2,
      title: 'Symptoms and Diagnosis',
      content: `Recognizing the symptoms of PID and getting an accurate diagnosis is crucial for preventing complications.

**Symptoms of Pelvic Inflammatory Disease:**

PID symptoms can range from mild to severe, and some women have no symptoms at all.

**Common Symptoms:**

**Pain:**
- Lower abdominal or pelvic pain
- Pain may be dull, aching, or sharp
- Pain often affects both sides of the pelvis
- Pain may worsen during intercourse
- Pain may worsen during bowel movements

**Vaginal Changes:**
- Increased or unusual vaginal discharge
- Foul-smelling discharge
- Discharge may be yellow or green
- Bleeding between menstrual periods
- Heavier menstrual bleeding
- Bleeding after sexual intercourse

**Systemic Symptoms:**
- Fever (usually > 100.4°F or 38°C)
- Chills
- Nausea and vomiting
- Fatigue and feeling generally unwell

**Urinary Symptoms:**
- Painful urination (dysuria)
- Increased urinary frequency
- Urgency to urinate

**Atypical and Mild Symptoms:**

Many women have atypical or mild symptoms that may not immediately suggest PID:
- Spotting between periods
- Mild lower abdominal discomfort
- Unusual vaginal discharge
- Pain only during intercourse
- No symptoms at all (asymptomatic)

**Silent PID:**

Up to one-third of PID cases may be "silent," meaning the woman has no symptoms. These women may only discover they had PID when they experience complications like infertility or ectopic pregnancy.

**When to Seek Medical Care:**

Seek prompt medical attention if you have:
- Severe lower abdominal pain
- Fever with pelvic pain
- Vaginal discharge with fever or pain
- Painful intercourse
- Bleeding between periods or after sex
- Any symptoms of PID and a history of STI

**Diagnostic Evaluation:**

**1. Medical History:**

Your doctor will ask about:
- Sexual history and practices
- History of STIs
- Current symptoms and when they started
- Menstrual history
- Contraceptive method
- Recent gynecologic procedures

**2. Physical Examination:**

*Pelvic Exam:*
- Tenderness when moving the cervix (cervical motion tenderness)
- Tenderness in the uterus and adnexa (areas near ovaries and tubes)
- Palpable masses or fullness
- Abnormal vaginal discharge

*Abdominal Exam:*
- Lower abdominal tenderness
- Rebound tenderness (pain when pressure is released)
- Guarding (protecting the abdomen from examination)

**3. Laboratory Tests:**

| Test | Purpose |
|------|---------|
| NAAT for Chlamydia/Gonorrhea | Identify causative organism |
| Complete Blood Count (CBC) | Check for infection (elevated white blood cells) |
| ESR/CRP | Inflammatory markers that are often elevated |
| Pregnancy test | Rule out ectopic pregnancy |
| Wet mount | Look for other vaginal infections |
| Urinalysis | Rule out urinary tract infection |

**4. Imaging Studies:**

*Pelvic Ultrasound:*
- Evaluate for abscess formation
- Check for thickened fallopian tubes
- Look for free fluid in the pelvis
- Rule out other causes of pain

*CT or MRI (less common):*
- Used when diagnosis unclear
- Better visualization of abscesses
- Rule out other abdominal conditions

**Differential Diagnosis:**

Other conditions that can mimic PID:
- Appendicitis
- Ectopic pregnancy
- Ovarian cyst rupture or torsion
- Endometriosis
- Urinary tract infection
- Gastroenteritis

**Diagnostic Criteria:**

The diagnosis of PID is typically made clinically based on:
- Lower abdominal tenderness
- Adnexal tenderness
- Cervical motion tenderness

Plus one or more of:
- Oral temperature > 101°F (38.3°C)
- Abnormal cervical or vaginal discharge
- Elevated inflammatory markers
- Laboratory evidence of cervical infection with chlamydia or gonorrhea
`,
      keyPoints: [
        'PID symptoms can range from mild to severe, and some women have no symptoms',
        'Cervical motion tenderness and adnexal tenderness are key exam findings',
        'The diagnosis is primarily clinical, based on symptoms and physical exam',
        'Testing for chlamydia and gonorrhea is essential to confirm the cause',
        'Imaging studies help rule out other conditions and check for complications'
      ],
      vocabulary: [
        { term: 'Cervical Motion Tenderness', definition: 'Pain felt when the cervix is moved during a pelvic exam' },
        { term: 'Adnexa', definition: 'The area adjacent to the uterus, including the fallopian tubes and ovaries' },
        { term: 'Cervicitis', definition: 'Inflammation of the cervix' },
        { term: 'Dysuria', definition: 'Painful or difficult urination' }
      ],
      quiz: [
        {
          question: 'What percentage of PID cases may be asymptomatic (silent PID)?',
          options: [
            'Less than 5%',
            'Up to one-third',
            'More than half',
            'Almost all cases'
          ],
          correctAnswer: 1,
          explanation: 'Up to one-third of PID cases may be asymptomatic, meaning the woman has no symptoms and may only discover the infection later when complications develop.',
        },
        {
          question: 'What is cervical motion tenderness (CMT)?',
          options: [
            'Pain when the uterus contracts',
            'Pain when the cervix is moved during examination',
            'Tenderness of the cervix to touch',
            'Abnormal cervical discharge'
          ],
          correctAnswer: 1,
          explanation: 'Cervical motion tenderness is pain felt when the cervix is moved during a pelvic exam. It\'s a classic finding in PID and suggests inflammation of the pelvic organs.',
        },
        {
          question: 'Why is a pregnancy test important when evaluating for PID?',
          options: [
            'PID causes pregnancy',
            'To rule out ectopic pregnancy which can have similar symptoms',
            'Pregnancy causes false positive PID tests',
            'Antibiotics cannot be given during pregnancy'
          ],
          correctAnswer: 1,
          explanation: 'A pregnancy test is important to rule out ectopic pregnancy, which can present with similar symptoms (pelvic pain, bleeding) and is a life-threatening emergency requiring different treatment.',
        }
      ]
    },
    {
      level: 3,
      title: 'Causes, Risk Factors and Transmission',
      content: `Understanding how PID develops and who is at risk helps with prevention and early detection.

**Pathogenesis: How PID Develops**

**Normal vs Infected:**

Normally, the cervix acts as a barrier, preventing bacteria from ascending into the upper reproductive tract. When bacteria bypass this barrier, they can infect the:

1. **Endometrium** (uterine lining)
2. **Fallopian tubes** (salpingitis)
3. **Ovaries** (oophoritis)
4. **Pelvic peritoneum** (lining of the pelvis)

**The Ascending Route:**

1. Vagina is colonized with pathogenic bacteria
2. Bacteria infect the cervix (cervicitis)
3. Bacteria ascend through the uterus
4. Infection spreads to fallopian tubes and beyond
5. Inflammation causes scarring and damage

**Causative Organisms:**

**Sexually Transmitted Pathogens:**

| Organism | Percentage of Cases | Notes |
|----------|-------------------|-------|
| *Chlamydia trachomatis* | 30-50% | Often asymptomatic infection |
| *Neisseria gonorrhoeae* | 30-50% | Can cause more severe symptoms |

**Other Organisms:**
- Anaerobic bacteria (40-60% of cases)
- *Gardnerella vaginalis*
- *Mycoplasma genitalium*
- *Mycoplasma hominis*
- Ureaplasma species
- *Haemophilus influenzae*
- Streptococci
- *Escherichia coli*

**Polymicrobial Infection:**

Most cases of PID are polymicrobial, meaning multiple types of bacteria are involved. STI organisms may "open the door" for other bacteria to ascend.

**Risk Factors:**

**Sexual and Reproductive Risk Factors:**

| Risk Factor | Relative Risk | Explanation |
|-------------|---------------|-------------|
| Age < 25 | 2-3x higher | Cervix more susceptible to infection |
| Multiple partners | 3-5x higher | Increased exposure to STIs |
| New partner | 2-3x higher | Unknown STI status |
| History of STI | 2-3x higher | Prior infection increases susceptibility |
| Prior PID | 3-4x higher | Re-infection or damage |
| IUD use (first 3 weeks) | Slightly increased | Bacterial introduction during insertion |
| Douching | 2x higher | Alters vaginal flora, can push bacteria upward |
| Partner with STI | High | Direct exposure |

**Behavioral Factors:**
- Inconsistent condom use
- Early age of first intercourse
- Frequent intercourse
- Sex during menstruation (may facilitate ascent)

**Biological Factors:**
- Younger age (incomplete cervical maturation)
- Altered vaginal flora (bacterial vaginosis)
- Cervical ectropion (exposed columnar epithelium)
- Compromised immune system

**The Role of the Menstrual Cycle:**

PID is more likely to occur during or shortly after menstruation:
- Cervical mucus is thinner (less barrier protection)
- Blood provides a medium for bacterial growth
- Uterine contractions may help bacteria ascend
- Cervical os is more open

**Bacterial Vaginosis and PID:**

BV-associated bacteria increase PID risk by:
- Disrupting protective vaginal flora
- Producing enzymes that degrade mucus barriers
- Facilitating STI acquisition
- Ascending with STI organisms

**Transmission:**

**Sexual Transmission:**
- Vaginal intercourse is the primary route of transmission for causative STIs
- Receptive anal intercourse may contribute to rectal carriage
- Oral sex is less commonly associated with PID

**Partner Factors:**
- Male partners may be asymptomatic carriers
- Untreated partners cause re-infection
- Partner treatment is essential to prevent recurrence

**Prevention Strategies:**

**Primary Prevention (preventing PID):**
- Condom use - reduces risk by 50% or more
- Regular STI screening
- Limiting sexual partners
- Mutual monogamy with tested partner
- Avoid douching
- Prompt STI treatment
- HPV vaccination (may reduce cervical susceptibility)

**Secondary Prevention (preventing complications):**
- Early recognition of symptoms
- Prompt treatment of STIs
- Complete treatment of PID
- Partner treatment and testing
- Follow-up care

**Special Populations:**

**Adolescents:**
- Higher risk due to biological and behavioral factors
- Cervical ectropion more common
- May not recognize symptoms
- May delay seeking care

**Postpartum Women:**
- Increased susceptibility after delivery
- Ascending infection possible during procedures
- May present with fever, uterine tenderness

**Post-abortion:**
- Risk increased after termination of pregnancy
- More likely with untreated cervicitis
- Prophylactic antibiotics reduce risk
`,
      keyPoints: [
        'Chlamydia and gonorrhea are the primary causes of PID, but most cases are polymicrobial',
        'PID occurs when bacteria ascend from the vagina and cervix to the upper reproductive tract',
        'Women under 25 have the highest risk due to biological susceptibility',
        'Multiple or new sexual partners significantly increase PID risk',
        'Bacterial vaginosis increases susceptibility to PID by disrupting normal vaginal flora'
      ],
      vocabulary: [
        { term: 'Polymicrobial', definition: 'Involving multiple types of microorganisms' },
        { term: 'Cervical Ectropion', definition: 'A condition where cells from inside the cervical canal are present on the outer surface of the cervix' },
        { term: 'Ascending Infection', definition: 'An infection that moves upward from the lower to the upper reproductive tract' },
        { term: 'Salpingitis', definition: 'Inflammation of the fallopian tubes' }
      ],
      quiz: [
        {
          question: 'Why does menstruation increase the risk of PID?',
          options: [
            'Blood attracts bacteria',
            'Cervical mucus is thinner and the cervix is more open',
            'Hormones suppress the immune system',
            'The uterus contracts and pushes bacteria out'
          ],
          correctAnswer: 1,
          explanation: 'During menstruation, cervical mucus is thinner providing less barrier protection, and the cervical os is more open, making it easier for bacteria to ascend into the upper reproductive tract.',
        },
        {
          question: 'What percentage of PID cases involve multiple types of bacteria (polymicrobial)?',
          options: [
            'Less than 10%',
            'About 30%',
            'Most cases',
            'Only cases with severe symptoms'
          ],
          correctAnswer: 2,
          explanation: 'Most cases of PID are polymicrobial, involving both sexually transmitted organisms (like chlamydia) and other bacteria that normally reside in the vagina.',
        },
        {
          question: 'How does bacterial vaginosis increase PID risk?',
          options: [
            'It directly causes PID',
            'It disrupts protective vaginal flora and can facilitate bacterial ascent',
            'It increases condom use failure',
            'It has no relationship to PID'
          ],
          correctAnswer: 1,
          explanation: 'Bacterial vaginosis disrupts the normal protective vaginal flora, produces enzymes that degrade mucus barriers, and can facilitate STI acquisition, all of which increase susceptibility to PID.',
        }
      ]
    },
    {
      level: 4,
      title: 'Treatment and Management',
      content: `Proper treatment of PID is essential to prevent serious long-term complications.

**Treatment Principles:**

**Goals of Treatment:**
1. Eradicate the infection
2. Relieve symptoms
3. Prevent complications
4. Prevent re-infection
5. Treat sexual partners

**When to Start Treatment:**

Treatment should be started immediately in women with:
- Clinical findings suggestive of PID
- Increased risk for STIs
- No other explanation for symptoms

**Why treat empirically:**
- Delaying treatment increases complication risk
- Lab results take time
- Clinical diagnosis is reasonably accurate
- Early treatment improves outcomes

**Antibiotic Regimens:**

**Outpatient Treatment (Mild to Moderate PID):**

*CDC Recommended Regimens:*

**Option 1: Ceftriaxone + Doxycycline + Metronidazole**
- Ceftriaxone 500 mg IM once
- Doxycycline 100 mg orally twice daily for 14 days
- Metronidazole 500 mg orally twice daily for 14 days
- With or without Azithromycin 1 g orally once

**Option 2: Cefoxitin + Probenecid + Doxycycline**
- Cefoxitin 2 g IM once + Probenecid 1 g orally once
- Doxycycline 100 mg orally twice daily for 14 days
- Plus metronidazole for 14 days if anaerobic coverage needed

**Inpatient Treatment (Severe PID):**

*Indications for Hospitalization:*
- Pregnancy
- Severe illness (nausea, vomiting, high fever)
- Tubo-ovarian abscess
- Inability to tolerate oral medications
- No clinical response to oral therapy
- Uncertain diagnosis

*Parenteral Regimens:*

**Option 1: Cefotetan + Doxycycline**
- Cefotetan 2 g IV every 12 hours
- Continue 24-48 hours after clinical improvement
- Then complete 14 days with doxycycline orally

**Option 2: Cefoxitin + Doxycycline**
- Cefoxitin 2 g IV every 6 hours
- Continue 24-48 hours after improvement
- Then complete 14 days with doxycycline

**Option 3: Ampicillin-Sulbactam + Doxycycline**
- Ampicillin-sulbactam 3 g IV every 6 hours
- Plus doxycycline as above

**Duration of Treatment:**
- Minimum 14 days of antibiotics
- Longer for severe cases or abscess
- Complete full course even if symptoms improve

**Adjunctive Therapies:**

**Pain Management:**
- NSAIDs (ibuprofen, naproxen)
- Acetaminophen
- Heat therapy
- Rest

**IV Fluids:**
- For hospitalized patients
- For dehydration from nausea/vomiting

**Anti-emetics:**
- For nausea and vomiting
- Allow tolerance of oral medications

**Sexual Partner Management:**

**Treatment of Partners:**
- All partners in the last 60 days should be evaluated
- Partners should be treated for chlamydia and gonorrhea
- Empiric treatment recommended even if tests pending
- Single-dose regimens available for partners

**Activity Restrictions:**
- No sexual intercourse until:
  - Treatment is completed
  - Symptoms have resolved
  - Partners are treated
  - Usually 2-3 weeks minimum

**Follow-up Care:**

**Re-evaluation:**
- Within 3 days to assess response
- Watch for worsening symptoms
- Consider hospitalization if not improving
- Repeat STI testing 3 months after treatment (test of cure)

**Monitoring for Complications:**
- Persistent fever
- Worsening pain
- Development of abscess
- Signs of peritonitis

**Management of Specific Complications:**

**Tubo-Ovarian Abscess (TOA):**
- Usually requires hospitalization
- IV antibiotics
- Consider drainage if large (>8-10 cm) or not responding
- Surgical intervention if ruptured

**Pregnancy:**
- Always hospitalized
- Antibiotics safe in pregnancy (avoid doxycycline)
- Consultation with obstetrician

**Treatment Failure:**
- Reconsider diagnosis
- Look for alternative diagnoses
- Consider abscess or resistant organisms
- May need surgical exploration

**Long-term Follow-up:**

**After PID Treatment:**
- Discuss fertility implications
- Monitor for chronic pain
- Regular STI screening
- Consider imaging if symptoms persist
- Evaluation for tubal factor infertility if trying to conceive

**Prevention of Recurrence:**
- Consistent condom use
- Partner treatment
- Regular STI screening
- Avoid douching
- Consider same-day partner therapy

**Treatment Outcomes:**

| Outcome | Likelihood | Notes |
|---------|-----------|-------|
| Clinical cure | 85-90% | With appropriate antibiotics |
| Fertility preservation | Best with early treatment | Decreases with each PID episode |
| Chronic pain risk | 15-30% | Higher with delayed treatment |
| Recurrence | 15-20% | Higher with persistent risk factors
`,
      keyPoints: [
        'Treatment for PID should be started empirically based on clinical findings',
        'Outpatient treatment is appropriate for most mild to moderate cases',
        'Hospitalization is indicated for pregnancy, severe illness, or tubo-ovarian abscess',
        'Antibiotic treatment should continue for at least 14 days',
        'Sexual partners must be treated to prevent re-infection'
      ],
      vocabulary: [
        { term: 'Empiric Treatment', definition: 'Treatment started based on clinical judgment before lab results confirm the diagnosis' },
        { term: 'Tubo-Ovarian Abscess', definition: 'A pocket of pus involving the fallopian tube and ovary' },
        { term: 'IV Antibiotics', definition: 'Antibiotics given directly into the bloodstream through a vein' },
        { term: 'Parenteral', definition: 'Administration of medication by route other than the digestive tract, such as intravenous' }
      ],
      quiz: [
        {
          question: 'What is the minimum recommended duration of antibiotic treatment for PID?',
          options: [
            '3-5 days',
            '7 days',
            '14 days',
            '21 days'
          ],
          correctAnswer: 2,
          explanation: 'Antibiotic treatment for PID should continue for at least 14 days to ensure complete eradication of the infection and prevent complications.',
        },
        {
          question: 'Which of the following is an indication for hospitalization for PID?',
          options: [
            'Being under age 25',
            'Having multiple sexual partners',
            'Pregnancy',
            'Mild symptoms'
          ],
          correctAnswer: 2,
          explanation: 'Pregnancy is an indication for hospitalization for PID to ensure both mother and baby receive appropriate care, as oral antibiotics may not be suitable and monitoring is crucial.',
        },
        {
          question: 'Why is it important to treat sexual partners when a woman is diagnosed with PID?',
          options: [
            'It\'s required by law',
            'To prevent re-infection of the treated woman',
            'Partners always have symptoms',
            'It\'s only recommended for married couples'
          ],
          correctAnswer: 1,
          explanation: 'Treating sexual partners is essential to prevent re-infection of the treated woman. If partners are not treated, the woman can become re-infected with the same organisms.',
        }
      ]
    },
    {
      level: 5,
      title: 'Complications and Advanced Considerations',
      content: `This advanced section examines the long-term sequelae of PID, special clinical situations, and emerging treatment considerations.

**Long-term Complications of PID:**

**1. Infertility:**

*Mechanisms:*
- Tubal scarring and obstruction
- Fimbrial damage impairing ovum pickup
- Peritubal adhesions
- Distorted tubo-ovarian anatomy

*Risk Factors:*
- Number of PID episodes:
  - 1 episode: ~10-15% infertility risk
  - 2 episodes: ~25-35% infertility risk
  - 3+ episodes: >50% infertility risk
- Delay in treatment
- Severity of infection
- Age at infection

**2. Ectopic Pregnancy:**

*Pathophysiology:*
- Partial tubal obstruction allows sperm passage but not embryo
- Impaired tubal motility
- Scarring causes embryo implantation in tube

*Risk:*
- 7-10x increased risk after PID
- Higher risk with multiple episodes
- Risk persists for years

**3. Chronic Pelvic Pain:**

*Characteristics:*
- Pain lasting > 6 months after acute PID
- Often cyclical, worsening with menses
- Associated with adhesions and scarring
- May involve dyspareunia

*Pathophysiology:*
- Adhesion formation
- Nerve entrapment
- Chronic inflammation
- Psychosocial factors

**4. Tubo-Ovarian Abscess (TOA):**

*Formation:*
- Walled-off collection of pus
- Usually bilateral
- May be multi-loculated

*Risk of Rupture:*
- Surgical emergency
- Can lead to sepsis
- Mortality rate if ruptured: 1-2%

**5. Pelvic Adhesions:**

*Impact:*
- Organ fixation
- Pain with movement
- Bowel obstruction (rare)
- Surgical complications

**Pathophysiology of Tubal Damage:**

**Acute Inflammatory Phase:**
- Mucosal edema and inflammation
- Exudate accumulation in tube lumen
- Destruction of ciliated epithelium
- Bacterial toxins damage tubal wall

**Chronic Phase:**
- Fibrosis and scarring
- Luminal obstruction
- Fimbrial agglutination
- Peritubal adhesion formation

**Histrologic Changes:**
- Loss of plicae (folds in tube)
- Luminal narrowing
- Adhesion formation
- Hydro- or pyosalpinx formation

**Special Clinical Situations:**

**1. PID in Adolescents:**

*Unique Considerations:*
- Higher infertility risk
- More likely to have severe disease
- Delayed presentation common
- Confidentiality concerns
- Consent for treatment issues

**2. HIV-Positive Women:**

*Considerations:*
- May have atypical presentations
- More severe disease
- Higher risk of complications
- May require longer treatment
- Drug interactions with antiretrovirals

**3. Pregnancy:**

*Complications:*
- Preterm birth
- Low birth weight
- Premature rupture of membranes
- Chorioamnionitis
- Postpartum infection

*Antibiotic Selection:*
- Avoid doxycycline (affects fetal bone/teeth)
- Use azithromycin or amoxicillin
- Metronidazole appears safe in 2nd/3rd trimester

**4. Postpartum and Post-Abortal PID:**

*Pathogenesis:*
- Ascending infection from procedure
- Compromised cervical barrier
- Hematogenous spread possible

*Treatment:*
- Broader antibiotic coverage
- Include anaerobic coverage
- Consider Enterococcus coverage

**Emerging Issues and Controversies:**

**Mycoplasma genitalium:**
- Increasingly recognized PID pathogen
- Resistant to many antibiotics
- Requires specific testing
- Treatment often with macrolides

**Antibiotic Resistance:**
- Rising quinolone resistance in gonorrhea
- Emerging concerns about doxycycline resistance
- May require alternative regimens

**Imaging Advances:**

*Role of MRI:*
- Better soft tissue characterization
- Differentiating TOA from other masses
- Assessing tubal patency

*Ultrasound Innovations:*
- 3D imaging of tubes
- Doppler assessment of blood flow
- Guidance for drainage procedures

**Fertility Considerations:**

**Evaluation After PID:**
- Hysterosalpingography (HSG) to assess tubes
- Laparoscopy for direct visualization
- Consider early fertility evaluation if trying to conceive

**Options for Tubal Infertility:**
- In vitro fertilization (IVF)
- Tubal surgery (rarely successful)
- Consider bypassing damaged tubes

**Prevention of Long-term Sequelae:**

**Optimizing Acute Treatment:**
- Early diagnosis and treatment
- Appropriate antibiotic regimen
- Adequate duration
- Partner treatment

**Prevention of Recurrence:**
- Risk reduction counseling
- Regular STI screening
- Prompt treatment of STIs
- Consistent condom use

**Prognostic Indicators:**

| Factor | Good Prognosis | Poor Prognosis |
|--------|---------------|----------------|
| Time to treatment | < 3 days | > 7 days |
| Number of episodes | First episode | Multiple episodes |
| Age | < 25 | > 30 |
| Severity | Mild | Severe/abscess |
| Organism | Chlamydia alone | Polymicrobial |
| Treatment completion | Full course | Incomplete |

**Prevention Impact:**

*Screening Programs:*
- Chlamydia screening in young women
- Reduces PID incidence by ~50%
- Cost-effective intervention
- Prevents sequelae

**Quality of Life Impact:**

- Chronic pain affects daily functioning
- Infertility causes psychological distress
- Sexual dysfunction common
- Relationship strain possible
- Healthcare costs significant

**Future Directions:**

- Chlamydia vaccine development
- Point-of-care diagnostics
- Improved antibiotics
- Better adhesion prevention
- Fertility preservation techniques
`,
      keyPoints: [
        'Infertility risk increases with each PID episode, exceeding 50% after three or more episodes',
        'Ectopic pregnancy risk is 7-10 times higher after PID due to tubal damage',
        'Chronic pelvic pain affects 15-30% of women after PID',
        'Mycoplasma genitalium is an emerging PID pathogen with antibiotic resistance concerns',
        'Chlamydia screening programs can reduce PID incidence by approximately 50%'
      ],
      vocabulary: [
        { term: 'Fimbriae', definition: 'Finger-like projections at the end of the fallopian tubes that help capture the egg' },
        { term: 'Pyosalpinx', definition: 'A fallopian tube filled with pus' },
        { term: 'Hydrosalpinx', definition: 'A fallopian tube filled with fluid, typically a result of chronic inflammation' },
        { term: 'Hysterosalpingography', definition: 'An X-ray procedure to evaluate the shape of the uterine cavity and patency of the fallopian tubes' }
      ],
      quiz: [
        {
          question: 'What is the approximate risk of infertility after three episodes of PID?',
          options: [
            'Less than 10%',
            'About 25%',
            'Greater than 50%',
            'Almost 100%'
          ],
          correctAnswer: 2,
          explanation: 'After three or more episodes of PID, the risk of infertility exceeds 50% due to cumulative damage to the fallopian tubes and other reproductive structures.',
        },
        {
          question: 'Why does PID increase ectopic pregnancy risk?',
          options: [
            'PID causes the fetus to implant outside the uterus',
            'Tubal scarring allows sperm passage but impairs embryo transport',
            'PID causes multiple ovulation',
            'PID increases hormone production'
          ],
          correctAnswer: 1,
          explanation: 'Tubal scarring from PID can allow sperm to pass through but impairs the transport of a fertilized embryo, causing it to implant in the fallopian tube rather than the uterus.',
        },
        {
          question: 'What emerging pathogen is causing concerns about antibiotic resistance in PID treatment?',
          options: [
            'Chlamydia trachomatis',
            'Neisseria gonorrhoeae',
            'Mycoplasma genitalium',
            'E. coli'
          ],
          correctAnswer: 2,
          explanation: 'Mycoplasma genitalium is an emerging PID pathogen that is often resistant to commonly used antibiotics, requiring specific testing and alternative treatment approaches.',
        }
      ]
    }
  ],

  relatedTopics: ['contraception', 'fertility-overview', 'womens-health-screening', 'infectious-disease', 'reproductive-conditions'],
  lastUpdated: '2025-01-25',
  references: [
    { title: 'CDC - Pelvic Inflammatory Disease', url: 'https://www.cdc.gov/std/tg2015/pid.htm' },
    { title: 'ACOG Practice Bulletin on Pelvic Inflammatory Disease', url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletins' },
    { title: 'Pelvic Inflammatory Disease - Diagnosis and Management', url: 'https://www.aafp.org/pubs/afp/issues/2018/0901/p277.html' },
    { title: 'Long-term Sequelae of Pelvic Inflammatory Disease', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4659558/' },
    { title: 'Mycoplasma genitalium Infections', url: 'https://www.cdc.gov/std/tg2015/mycoplasma.htm' }
  ]
};
