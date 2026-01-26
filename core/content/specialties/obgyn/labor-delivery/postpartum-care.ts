/**
 * Postpartum Care
 *
 * Comprehensive coverage of postpartum care including physical recovery,
 * breastfeeding support, mental health, and complications.
 */

import { EducationalContent } from '../../../types';

export const postpartumCare: EducationalContent = {
  id: 'obgyn-labor-postpartum',
  type: 'process',
  name: 'Postpartum Care',
  alternateNames: ['Postnatal Care', 'Fourth Trimester', 'Puerperium'],

  levels: {
    1: {
      level: 1,
      summary: 'Postpartum care is the support and medical care a mother receives after giving birth.',
      explanation: `After a baby is born, the mother's body needs time to heal and adjust. This period is called the postpartum period or "fourth trimester."

**What to expect after delivery:**

*Physical changes:*
- Vaginal bleeding (like a heavy period) for 2-6 weeks
- Cramping as the uterus shrinks back to normal size
- Breast changes as milk comes in
- Tiredness from labor and caring for a newborn
- Soreness from delivery (vaginal or C-section)

*Emotional changes:*
- "Baby blues" (feeling weepy or overwhelmed) - very common
- Joy mixed with exhaustion
- Bonding with baby takes time

**Important things to know:**

*Call your doctor if you have:*
- Very heavy bleeding (soaking a pad in 1 hour)
- Fever over 100.4F (38C)
- Severe headache that won't go away
- Thoughts of harming yourself or baby
- Pain or redness in legs

*Recovery timeline:*
- Most women feel better by 6 weeks
- Full recovery can take several months
- It's okay to ask for help!`,
      keyTerms: [
        { term: 'postpartum', definition: 'The period after giving birth' },
        { term: 'baby blues', definition: 'Feeling emotional, tearful, or overwhelmed after birth; very common and usually goes away' },
        { term: 'lochia', definition: 'Vaginal bleeding and discharge after delivery' },
      ],
      analogies: [
        'The body after birth is like a house after a big renovation - it takes time for everything to settle back into place.',
      ],
      examples: [
        'A new mom might cry easily for no reason during the first week - this is the baby blues and usually gets better on its own.',
      ],
    },
    2: {
      level: 2,
      summary: 'Postpartum care addresses maternal physical recovery, lactation support, contraception counseling, and screening for complications including hemorrhage, infection, and mood disorders.',
      explanation: `**The Postpartum Period:**

*Timeline:*
- Immediate (first 24 hours): Close monitoring
- Early (1-7 days): Hospital stay and early home period
- Late (1-6 weeks): Recovery continues
- Extended (6 weeks - 1 year): Fourth trimester

**Physical Recovery:**

*Uterine Involution:*
- Uterus returns to pre-pregnancy size over 6 weeks
- Afterpains (cramping) especially with breastfeeding
- Lochia changes: red → pink → white over weeks

*Perineal Care:*
- Ice packs, sitz baths
- Pain medication as needed
- Watch for signs of infection

*Cesarean Recovery:*
- Incision care
- Limited lifting
- Longer recovery (4-6 weeks)

**Breastfeeding Support:**
- Colostrum first, milk "comes in" days 2-5
- Frequent feeding (8-12 times per day)
- Signs of good feeding: wet diapers, weight gain
- Common issues: Engorgement, sore nipples, latch problems

**Mental Health Screening:**

*Baby Blues:*
- 50-80% of new mothers
- Peaks around day 5
- Resolves by 2 weeks

*Postpartum Depression:*
- 10-15% of mothers
- Persists beyond 2 weeks
- Needs treatment

*Warning Signs to Report:*
- Inability to care for self or baby
- Thoughts of self-harm or harming baby
- Severe anxiety or panic
- Confusion or psychotic symptoms`,
      keyTerms: [
        { term: 'uterine involution', definition: 'The process of the uterus returning to its pre-pregnancy size' },
        { term: 'postpartum depression', definition: 'Depression occurring after childbirth; more severe than baby blues and requires treatment' },
        { term: 'engorgement', definition: 'Breasts becoming overly full and painful when milk comes in' },
      ],
    },
    3: {
      level: 3,
      summary: 'Postpartum care encompasses physiological recovery monitoring, lactation management, contraception initiation, and systematic screening for maternal morbidity including venous thromboembolism, infection, hypertensive disorders, and perinatal mood disorders.',
      explanation: `**Physiological Changes:**

*Cardiovascular:*
- Blood volume decreases over 2-6 weeks
- Cardiac output normalizes by 2 weeks
- Diuresis in first days postpartum
- VTE risk elevated for 6-12 weeks

*Endocrine:*
- hCG negative by 3-4 weeks
- Estrogen/progesterone drop rapidly
- Prolactin elevated if breastfeeding
- Ovulation suppressed by lactation (LAM)

*Hematologic:*
- Physiologic anemia may persist
- Coagulation factors remain elevated
- Iron supplementation often needed

**Postpartum Visits:**

*ACOG Recommendations:*
- Contact within 3 weeks
- Comprehensive visit by 12 weeks
- Ongoing care as needed
- Earlier follow-up if complications

*Visit Components:*
- Physical exam (wound, breasts, uterus)
- Mood screening (PHQ-9, EPDS)
- Contraception counseling/initiation
- Chronic disease management
- Birth spacing counseling

**Contraception Options:**

*Immediately Postpartum:*
- Postplacental IUD
- Implant
- Progestin-only methods

*After 4-6 Weeks:*
- Combined hormonal methods (if not breastfeeding)
- All methods available

*Lactational Amenorrhea (LAM):*
- Exclusive breastfeeding
- <6 months postpartum
- Amenorrheic
- 98% effective if all criteria met

**Perinatal Mood Disorders:**

*Edinburgh Postnatal Depression Scale (EPDS):*
- 10 questions
- Score ≥10 suggests depression
- Question 10 screens for self-harm
- Universal screening recommended

*Risk Factors:*
- History of depression/anxiety
- Lack of social support
- Traumatic delivery
- NICU admission
- Preterm birth

*Treatment:*
- Therapy (CBT, IPT)
- Medications (SSRIs generally safe with breastfeeding)
- Support groups
- Severe cases: Brexanolone (IV)`,
      keyTerms: [
        { term: 'EPDS', definition: 'Edinburgh Postnatal Depression Scale; validated screening tool for postpartum depression' },
        { term: 'lactational amenorrhea method', definition: 'Natural contraception method based on exclusive breastfeeding; 98% effective with strict criteria' },
        { term: 'brexanolone', definition: 'IV allopregnanolone derivative approved for postpartum depression' },
      ],
      clinicalNotes: 'Postpartum depression is underdiagnosed. Universal screening at obstetric and pediatric visits improves detection. Question 10 on EPDS (self-harm thoughts) requires immediate assessment if positive.',
    },
    4: {
      level: 4,
      summary: 'Comprehensive postpartum care integrates evidence-based practices for lactation support, contraceptive access, chronic disease management, and early detection of severe maternal morbidity during the vulnerable 12-week postpartum period.',
      explanation: `**Severe Maternal Morbidity Prevention:**

*High-Risk Monitoring:*
- Preeclampsia: BP monitoring, symptom education
- Hemorrhage: Anemia management, uterine assessment
- Cardiomyopathy: Symptoms education, echo if indicated
- Infection: Wound checks, fever protocol

*Postpartum Hypertension:*
- Can occur or worsen after delivery
- BP check within 72 hours recommended
- Continue/initiate treatment if elevated
- Preeclampsia can present postpartum

*VTE Prevention:*
- Risk assessment tools (Caprini, institutional)
- Mechanical prophylaxis (SCDs)
- Pharmacologic if high risk
- Extended prophylaxis post-cesarean (high-risk)

**Lactation Medicine:**

*Physiology:*
- Prolactin → milk production
- Oxytocin → milk let-down
- Supply-demand driven
- Frequent emptying essential

*Common Problems:*
- Engorgement: Frequent feeding, expression, cold compresses
- Mastitis: Continued feeding, antibiotics if indicated
- Low supply: Assess latch, frequency, consider galactagogues
- Thrush: Antifungal treatment

*Medications in Breastfeeding:*
- Most medications compatible
- LactMed database for evidence
- Risk-benefit discussion
- Rarely need to discontinue breastfeeding

**Contraception Access:**

*LARC Promotion:*
- Most effective methods
- Immediate postpartum insertion safe
- Reduces unintended pregnancy
- Removes access barriers

*Postpartum LARC Benefits:*
- High uptake when offered
- Reduces short interval pregnancy
- Cost-effective
- Particularly benefits vulnerable populations

**Interpregnancy Interval:**

*Recommendations:*
- Optimal: 18-24 months between pregnancies
- Minimum: 6 months
- Short intervals increase risks
- Counseling before discharge

*Risks of Short Interval:*
- Preterm birth
- Low birth weight
- Uterine rupture (if prior cesarean)
- Maternal depletion`,
      keyTerms: [
        { term: 'postpartum cardiomyopathy', definition: 'Heart failure developing in late pregnancy or early postpartum; requires cardiology care' },
        { term: 'LactMed', definition: 'NIH database providing evidence-based information on drugs and breastfeeding' },
        { term: 'interpregnancy interval', definition: 'Time between delivery and next conception; optimal 18-24 months' },
      ],
      clinicalNotes: 'The postpartum period is a critical window for chronic disease management. Women with gestational diabetes need glucose testing at 4-12 weeks. Those with preeclampsia need cardiovascular risk counseling and BP monitoring.',
    },
    5: {
      level: 5,
      summary: 'Contemporary postpartum care adopts a "fourth trimester" framework emphasizing continuous rather than episodic care, addressing the full spectrum of physical, emotional, and social needs with attention to health equity.',
      explanation: `**Fourth Trimester Framework:**

*Paradigm Shift:*
- From single 6-week visit to ongoing care
- Recognizes postpartum as high-risk period
- Addresses social determinants
- Team-based approach

*Components:*
- Ongoing contact (text, telehealth, visits)
- Early assessment (1-3 weeks)
- Comprehensive visit (4-12 weeks)
- Transition to well-woman care
- Pediatric visit coordination

**Maternal Mortality Reduction:**

*US Maternal Mortality Crisis:*
- Rate increasing (23.8 per 100,000 in 2020)
- Racial disparities (Black women 2-3x higher)
- >50% of deaths postpartum
- Majority deemed preventable

*Contributing Factors:*
- Delayed recognition of warning signs
- Healthcare access barriers
- Implicit bias
- System failures

*Prevention Strategies:*
- Postpartum warning sign education
- 24/7 triage availability
- Care coordination
- Implicit bias training
- Quality improvement programs

**Perinatal Mental Health:**

*Universal Screening:*
- EPDS, PHQ-9, or GAD-7
- Multiple time points
- Partner screening consideration
- Pediatric visit screening

*Postpartum Psychosis:*
- Rare (1-2 per 1000)
- Psychiatric emergency
- Risk: prior bipolar, prior psychosis
- Immediate psychiatric referral
- Risk of infanticide

*Brexanolone:*
- IV neuroactive steroid
- Approved for PPD
- 60-hour infusion
- REMS program
- Rapid response

**Health Equity:**

*Disparities in Postpartum Care:*
- Lower follow-up rates in Medicaid
- Racial disparities in PPD treatment
- Contraceptive access inequities
- Breastfeeding support disparities

*Equity Interventions:*
- Extended Medicaid (12 months postpartum)
- Doula support programs
- Community health workers
- Group prenatal care continuation
- Implicit bias training

**Postpartum Transition:**

*Chronic Disease Management:*
- Gestational diabetes → screen for T2DM
- Gestational hypertension → cardiovascular risk
- Preeclampsia → future HTN, CVD risk
- Cholestasis → monitor liver function

*Preconception Counseling:*
- When to try again
- Optimizing health before next pregnancy
- Managing chronic conditions
- Genetic counseling if indicated

*Long-term Follow-up:*
- Annual well-woman care
- Cardiovascular risk assessment
- Mental health support
- Metabolic screening`,
      keyTerms: [
        { term: 'fourth trimester', definition: 'Framework recognizing the first 12 weeks postpartum as critical period requiring enhanced support' },
        { term: 'postpartum psychosis', definition: 'Psychiatric emergency with rapid onset psychotic symptoms; risk of infanticide' },
        { term: 'maternal mortality', definition: 'Death during pregnancy or within 1 year postpartum; major US public health crisis' },
      ],
      clinicalNotes: 'Extended Medicaid coverage to 12 months postpartum is now recommended and being implemented in many states. This addresses coverage gaps that contribute to maternal mortality. Every postpartum contact is an opportunity for intervention.',
    },
  },

  media: [
    {
      id: 'postpartum-warning-signs',
      type: 'diagram',
      filename: 'postpartum-warning-signs.svg',
      title: 'Postpartum Warning Signs',
      description: 'Visual guide to urgent symptoms requiring medical attention',
    },
  ],

  citations: [
    {
      id: 'acog-postpartum',
      type: 'article',
      title: 'Optimizing Postpartum Care',
      source: 'ACOG Committee Opinion No. 736',
      authors: ['American College of Obstetricians and Gynecologists'],
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'obgyn-labor-overview', targetType: 'process', relationship: 'parent', label: 'Labor Overview' },
    { targetId: 'obgyn-contraception-overview', targetType: 'topic', relationship: 'related', label: 'Contraception' },
  ],

  tags: {
    systems: ['reproductive'],
    topics: ['obstetrics', 'postpartum', 'mental health'],
    keywords: ['postpartum', 'fourth trimester', 'breastfeeding', 'postpartum depression'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['obgyn'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
