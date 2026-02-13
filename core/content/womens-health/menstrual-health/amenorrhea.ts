import { WomensHealthContent, LegacyWomensHealthContent } from '../types';

export const amenorrhea: WomensHealthContent = {
  id: 'amenorrhea',
  title: 'Amenorrhea',
  category: 'Menstrual Health',
  complexityLevels: [
    {
      level: 1,
      title: 'What is Amenorrhea?',
      content: `Amenorrhea means not having menstrual periods. It's not a disease itself, but a sign that something else might be going on.

**Two Types of Amenorrhea:**

**Primary Amenorrhea:**
- Never had a period by age 15
- Or never had a period 3 years after breast development started

**Secondary Amenorrhea:**
- Had periods before, but they stopped for 3+ months
- Not pregnant

**Common Causes:**

**For Primary Amenorrhea:**
- Genetics or chromosome differences
- Problems with reproductive organs
- Hormone imbalances from birth
- Delayed development

**For Secondary Amenorrhea:**
- Pregnancy (most common cause)
- Stress
- Significant weight loss or gain
- Too much exercise
- Thyroid problems
- Certain medications
- Polycystic ovary syndrome (PCOS)
- Perimenopause

**When to See a Doctor:**

**See a doctor if:**
- You're 15 and haven't had a period
- You've had periods before but stopped for 3+ months
- You stopped having periods but are not pregnant
- You have other symptoms like acne or hair growth

**What to Expect at the Doctor:**
- Questions about your health history
- Physical exam
- Possibly blood tests
- Sometimes imaging tests

**Remember:** Amenorrhea is often treatable. Finding the cause is the first step.
      `,
      keyPoints: [
        'Amenorrhea means absence of menstrual periods',
        'Primary amenorrhea: never had a period by age 15',
        'Secondary amenorrhea: periods stop for 3+ months',
        'Most causes are treatable once identified',
      ],
      vocabulary: [
        { term: 'Amenorrhea', definition: 'Absence of menstrual periods' },
        { term: 'Primary', definition: 'Present from the beginning or from birth' },
        { term: 'Secondary', definition: 'Developing after something else has occurred' },
        { term: 'Perimenopause', definition: 'Transition phase before menopause' }
      ],
      quiz: [
        {
          question: 'What is the definition of primary amenorrhea?',
          options: [
            'Not having a period for 3 months',
            'Never having a period by age 15',
            'Having irregular periods',
            'Having painful periods',
          ],
          correctAnswer: 1,
          explanation: 'Primary amenorrhea is defined as never having had a menstrual period by age 15, or by 3 years after thelarche (breast development) begins.',
        },
        {
          question: 'What is the most common cause of secondary amenorrhea?',
          options: [
            'Too much exercise',
            'Pregnancy',
            'Thyroid problems',
            'Stress',
          ],
          correctAnswer: 1,
          explanation: 'Pregnancy is the most common cause of secondary amenorrhea in women of reproductive age. All other causes should only be considered after pregnancy is ruled out.',
        }
      ]
    },
    {
      level: 2,
      title: 'Causes and Evaluation of Amenorrhea',
      content: `Amenorrhea requires systematic evaluation to identify the underlying cause. The approach differs significantly between primary and secondary amenorrhea.

**Primary Amenorrhea: Differential Diagnosis**

**Anatomic Causes:**
- **Imperforate hymen:** Outflow tract obstruction
- **Müllerian agenesis:** Absence of vagina and uterus (MRKH syndrome)
- **Androgen insensitivity:** XY chromosomes but female appearance
- **Transverse vaginal septum:** Internal blockage

**Hormonal Causes:**
- **Hypogonadotropic:** Low FSH/LH
  - Kallmann syndrome (no sense of smell)
  - Hypothalamic dysfunction
  - Pituitary disorders

- **Hypergonadotropic:** High FSH/LH
  - Turner syndrome (45,X)
  - Ovarian failure (premature or genetic)
  - Galactosemia complications

**Secondary Amenorrhea: Differential Diagnosis**

**Pregnancy-Related:**
- Pregnancy (most common)
- Ectopic pregnancy
- Recent pregnancy/delivery

**Hypothalamic-Pituitary Causes:**
- Stress
- Excessive exercise
- Weight loss or eating disorders
- Tumors (prolactinoma, craniopharyngioma)
- Sheehan syndrome (pituitary infarction)

**Ovarian Causes:**
- **PCOS:** Most common endocrine cause
- **POI:** Premature ovarian insufficiency
- Ovarian failure from chemotherapy/radiation

**Other Endocrine Causes:**
- **Thyroid disorders:** Hypo- or hyperthyroidism
- **Adrenal disorders:** Cushing syndrome, CAH
- **Diabetes:** Poorly controlled

**Iatrogenic Causes:**
- Combined hormonal contraceptives (withdrawal bleeding)
- Depot medroxyprogesterone
- Chemotherapy
- Radiation

**Diagnostic Evaluation:**

**Step 1: Rule out Pregnancy**
- Urine or serum hCG

**Step 2: History**
- Age at menarche (if applicable)
- Previous menstrual pattern
- Growth and development
- Sexual history
- Medications
- Stress, exercise, weight changes
- Symptoms of other conditions

**Step 3: Physical Examination**
- Height, weight, BMI
- Tanner staging for breast development
- Hair distribution
- Thyroid examination
- Pelvic examination (if indicated)

**Step 4: Laboratory Tests**
- **FSH and LH:** Determine ovarian function
- **TSH:** Thyroid function
- **Prolactin:** Pituitary function
- **Estradiol:** Estrogen status
- **Progesterone challenge:** Test estrogen effect

**Step 5: Imaging**
- **Pelvic ultrasound:** Uterus and ovaries
- **MRI:** For pituitary/hypothalamic lesions

**Interpreting FSH Levels:**

| FSH Level | Interpretation |
|-----------|----------------|
| High | Ovarian failure (POI, menopause) |
| Low/Normal | Hypothalamic/pituitary issue |
| Normal with high LH | PCOS |

**Progestin Challenge Test:**
- Give medroxyprogesterone 10mg x 10 days
- Bleeding = adequate estrogen, anovulation
- No bleeding = low estrogen or outflow obstruction
      `,
      keyPoints: [
        'Primary and secondary amenorrhea have different causes and evaluations',
        'Pregnancy must always be ruled out first in secondary amenorrhea',
        'FSH levels help differentiate ovarian from hypothalamic-pituitary causes',
        'Progestin challenge test helps assess estrogen status',
      ],
      vocabulary: [
        { term: 'FSH', definition: 'Follicle-Stimulating Hormone - stimulates ovarian follicles' },
        { term: 'LH', definition: 'Luteinizing Hormone - triggers ovulation' },
        { term: 'Prolactinoma', definition: 'Benign tumor that produces prolactin' },
        { term: 'Progestin Challenge', definition: 'Test to determine if estrogen is present' }
      ],
      quiz: [
        {
          question: 'What does an elevated FSH level indicate in amenorrhea?',
          options: [
            'Hypothalamic dysfunction',
            'Pituitary tumor',
            'Ovarian failure',
            'Pregnancy',
          ],
          correctAnswer: 2,
          explanation: 'Elevated FSH indicates ovarian failure, as the pituitary is producing more FSH in an attempt to stimulate unresponsive ovaries. This is seen in menopause, premature ovarian insufficiency, and genetic conditions like Turner syndrome.',
        },
        {
          question: 'What is the purpose of a progestin challenge test?',
          options: [
            'To confirm pregnancy',
            'To determine if estrogen levels are adequate',
            'To measure FSH levels',
            'To diagnose PCOS',
          ],
          correctAnswer: 1,
          explanation: 'The progestin challenge test helps determine if a woman has adequate estrogen. If bleeding occurs after taking progesterone, it indicates estrogen is present and the endometrium is responsive. No bleeding suggests low estrogen or outflow obstruction.',
        }
      ]
    },
    {
      level: 3,
      title: 'Pathophysiology and Clinical Management',
      content: `Amenorrhea results from disruption of the hypothalamic-pituitary-ovarian (HPO) axis, anatomic abnormalities, or outflow tract obstruction. Understanding the level of disruption guides management.

**HPO Axis Physiology:**

**Normal Sequence:**
1. Hypothalamus releases GnRH
2. Pituitary releases FSH and LH
3. Ovaries produce estrogen and progesterone
4. Endometrium responds with proliferation and secretion
5. Menstruation occurs if no pregnancy

**Levels of Disruption:**

**Level 1: Hypothalamic**
- Decreased GnRH pulsatility
- Causes: stress, exercise, weight loss, Kallmann syndrome
- Lab: Low/normal FSH and LH, low estrogen

**Level 2: Pituitary**
- Inadequate gonadotropin release
- Causes: prolactinoma, Sheehan syndrome, craniopharyngioma
- Lab: Low/normal FSH and LH, low estrogen
- Additional: Elevated prolactin if prolactinoma

**Level 3: Ovarian**
- Ovarian failure or dysfunction
- Causes: POI, PCOS, Turner syndrome, damage
- Lab: High FSH and LH (failure) or high LH (PCOS)

**Level 4: Outflow Tract**
- Anatomic obstruction
- Causes: imperforate hymen, Asherman syndrome, cervical stenosis
- Lab: Normal hormone levels

**Specific Conditions:**

**Functional Hypothalamic Amenorrhea (FHA):**
- Energy deficit → decreased GnRH pulsatility
- Reversible with lifestyle changes
- Associated with bone loss
- Requires balanced approach to weight/exercise

**Premature Ovarian Insufficiency (POI):**
- Loss of ovarian function before age 40
- Affects 1% of women
- Spontaneous pregnancy possible in 5-10%
- Requires hormone replacement until natural menopause age

**Polycystic Ovary Syndrome (PCOS):**
- Androgen excess + oligomenorrhea/amenorrhea
- Insulin resistance often present
- Multiple small ovarian follicles on ultrasound
- Lifestyle modifications first-line

**Hyperprolactinemia:**
- Prolactin >20-30 ng/mL suppresses GnRH
- Most commonly caused by prolactinoma
- Medications can also elevate prolactin
- Dopamine agonists are treatment

**Management Approaches:**

**Primary Amenorrhea Management:**

| Cause | Treatment |
|-------|-----------|
| Outflow obstruction | Surgery to create passage |
| Gonadal dysgenesis | Hormone replacement |
| Hypogonadotropic | Pulsatile GnRH or gonadotropins |
| Androgen insensitivity | Gonadectomy after puberty |

**Secondary Amenorrhea Management:**

**FHA:**
- Increase caloric intake
- Moderate exercise
- Cognitive behavioral therapy
- Consider transdermal estrogen if bone density loss

**PCOS:**
- Weight loss if overweight
- Combined oral contraceptives
- Metformin for insulin resistance
- Ovulation induction if fertility desired

**POI:**
- Hormone replacement therapy
- Calcium and vitamin D
- Emotional support and counseling
- Consider egg donation for fertility

**Hyperprolactinemia:**
- Dopamine agonist therapy (cabergoline, bromocriptine)
- Address medication causes if applicable
- Monitor prolactin levels
- MRI for adenoma detection

**Monitoring Considerations:**

**Bone Health:**
- Estrogen deficiency leads to bone loss
- DEXA scanning if amenorrhea >6-12 months
- Calcium 1000-1200 mg/day
- Vitamin D 600-800 IU/day

**Cardiovascular Health:**
- Estrogen has protective effects
- Monitor lipid profile
- Exercise and heart-healthy diet

**Fertility Considerations:**
- Some causes reversible
- Others require assisted reproduction
- Donor eggs for POI
- Referral to reproductive endocrinology

**Long-Term Health Risks of Untreated Amenorrhea:**
- Osteoporosis
- Cardiovascular disease
- Genitourinary atrophy
- Potential infertility
- Psychological effects
      `,
      keyPoints: [
        'Amenorrhea can occur at any level of the HPO axis',
        'Treatment depends on underlying cause and patient goals',
        'Estrogen deficiency causes long-term health consequences',
        'Fertility may still be possible depending on the cause',
      ],
      vocabulary: [
        { term: 'FHA', definition: 'Functional Hypothalamic Amenorrhea - reversible suppression of GnRH' },
        { term: 'POI', definition: 'Premature Ovarian Insufficiency - ovarian failure before age 40' },
        { term: 'Sheehan Syndrome', definition: 'Pituitary infarction after postpartum hemorrhage' },
        { term: 'Asherman Syndrome', definition: 'Intrauterine adhesions causing amenorrhea' }
      ],
      quiz: [
        {
          question: 'What characterizes Functional Hypothalamic Amenorrhea?',
          options: [
            'Permanent ovarian failure',
            'Reversible suppression of GnRH due to energy deficit',
            'Pituitary tumor',
            'Anatomic obstruction',
          ],
          correctAnswer: 1,
          explanation: 'FHA is characterized by reversible suppression of GnRH pulsatility due to energy deficit from stress, exercise, or weight loss. Unlike ovarian failure, it can often be reversed with lifestyle modifications.',
        },
        {
          question: 'What is the primary treatment for hyperprolactinemia causing amenorrhea?',
          options: [
            'Oral contraceptives',
            'Dopamine agonist therapy',
            'Thyroid hormone replacement',
            'Surgery immediately',
          ],
          correctAnswer: 1,
          explanation: 'Dopamine agonists like cabergoline or bromocriptine are first-line treatment for hyperprolactinemia. They inhibit prolactin secretion and typically restore normal menstrual function.',
        }
      ]
    },
    {
      level: 4,
      title: 'Advanced Evaluation and Special Populations',
      content: `Comprehensive evaluation of amenorrhea requires systematic application of diagnostic algorithms and consideration of special populations with unique presentations and management needs.

**Diagnostic Algorithms:**

**Primary Amenorrhea Algorithm:**

1. No periods by age 15 or 3 years post-thelarche
   ↓
2. Check FSH, LH, TSH, Prolactin
   ↓
3. Elevated FSH? → Ovarian failure → Karyotype (Turner, etc.)
   ↓
4. Normal/Low FSH → Check breast development
   ↓
   No breasts → Low estrogen → GnRH stimulation test
   Breasts present → Check progesterone challenge
   ↓
   No bleeding → Anatomic evaluation (MRI, ultrasound)
   Bleeding → Hypothalamic/pituitary cause

**Secondary Amenorrhea Algorithm:**

1. Rule out pregnancy
   ↓
2. Check TSH, Prolactin, FSH
   ↓
3. Abnormal TSH → Thyroid dysfunction
   Elevated Prolactin → MRI, dopamine agonist
   ↓
4. Elevated FSH → Ovarian failure → Check karyotype if <40
   ↓
5. Normal/Low FSH → Progesterone challenge
   ↓
   No bleeding → Low estrogen or outflow obstruction
   Bleeding → PCOS, FHA, other causes

**Genetic and Chromosomal Testing:**

**Indications for Karyotype:**
- Primary amenorrhea with elevated FSH
- Short stature
- Physical stigmata of genetic syndromes
- Premature ovarian insufficiency before age 30

**Common Genetic Findings:**
- **45,X (Turner syndrome):** Streak ovaries, short stature
- **46,XY (Swyer syndrome):** Complete gonadal dysgenesis
- **Mosaicism:** 45,X/46,XX variants
- **X chromosome deletions:** Premature ovarian insufficiency

**Gene-Specific Testing:**
- **FMR1 premutation:** Fragile X-associated POI
- **FOXL2:** BPES type I with POI
- **NOBOX, FIGLA:** Autoimmune POI associations

**Imaging Modalities:**

**Pelvic Ultrasound:**
- First-line for anatomic evaluation
- Assess uterine presence and size
- Identify ovarian morphology
- Detect endometrial thickness

**MRI Indications:**
- Pituitary/hypothalamic lesions
- Müllerian anomalies
- Complex anatomic abnormalities
- Pre-surgical planning

**Hysteroscopy:**
- Asherman syndrome diagnosis and treatment
- Intrauterine adhesions
- Evaluation of uterine cavity

**Special Populations:**

**Athletes:**
- Prevalence: Up to 69% in elite athletes
- Threshold: Energy availability <30 kcal/kg lean mass/day
- Relative energy deficiency in sport (RED-S)
- Effects beyond menstrual: bone, cardiovascular, immune

**Management:**
- Increase energy availability
- Reduce training intensity
- Transdermal estrogen if persistent
- Multidisciplinary approach

**Eating Disorders:**

**Anorexia Nervosa:**
- Severe hypothalamic suppression
- Reversible with weight restoration
- May require refeeding program
- Psychological treatment essential

**Bulimia Nervosa:**
- Weight may be normal
- Amenorrhea still possible
- Focus on normalization of eating patterns

**Women with Disabilities:**
- Higher prevalence of menstrual problems
- Consider menstrual suppression if hygiene issues
- Individualized approach based on:
  - Type of disability
  - Caregiver support
  - Patient preferences

**Adolescents:**
- Delayed puberty vs. primary amenorrhea
- Evaluate by age 13 if no breast development
- Evaluate by age 15 with breast development but no menses
- Consider constitutional delay

**Perimenopause:**
- Age >40 with amenorrhea
- Check FSH to confirm
- Discuss symptom management
- Cardiovascular risk assessment

**Pregnancy After Amenorrhea:**

**FHA:**
- Spontaneous pregnancy possible with recovery
- May require assisted reproduction

**PCOS:**
- Lifestyle modifications first
- Ovulation induction with letrozole or clomiphene
- Metformin as adjunct

**POI:**
- Spontaneous pregnancy 5-10% (especially with primary diagnosis)
- Donor egg IVF most reliable
- Consider adoption

**Long-Term Health Surveillance:**

**Bone Health Monitoring:**
- DEXA at diagnosis if >6 months amenorrhea
- Repeat every 1-2 years if persistent
- Calcium and vitamin D optimization
- Weight-bearing exercise

**Cardiovascular Monitoring:**
- Lipid profile annually
- Blood pressure monitoring
- Early intervention for risk factors

**Psychological Support:**
- Body image concerns
- Infertility grief
- Identity issues
- Depression and anxiety screening`,
      keyPoints: [
        'Systematic diagnostic algorithms ensure efficient evaluation',
        'Genetic testing is indicated in primary amenorrhea with elevated FSH',
        'Athletes and eating disorder patients need specialized approaches',
        'Long-term health monitoring focuses on bone and cardiovascular health',
      ],
      vocabulary: [
        { term: 'Thelarche', definition: 'Onset of breast development' },
        { term: 'Mosaicism', definition: 'Presence of two or more cell lines with different genetic makeup' },
        { term: 'RED-S', definition: 'Relative Energy Deficiency in Sport - syndrome affecting multiple body systems' },
        { term: 'Gonadal Dysgenesis', definition: 'Defective development of gonads' }
      ],
      quiz: [
        {
          question: 'When should genetic testing be ordered for amenorrhea?',
          options: [
          'In all cases of primary amenorrhea',
          'In primary amenorrhea with elevated FSH or POI before age 30',
          'Only if pregnancy is desired',
          'Only if imaging is abnormal',
          ],
          correctAnswer: 1,
          explanation: 'Genetic testing (karyotype and specific gene testing) is indicated for primary amenorrhea with elevated FSH and for premature ovarian insufficiency occurring before age 30, as these have higher likelihood of genetic causes.',
        },
        {
          question: 'What is the energy availability threshold that often leads to menstrual dysfunction in athletes?',
          options: [
          '<45 kcal/kg lean mass/day',
          '<30 kcal/kg lean mass/day',
          '<20 kcal/kg lean mass/day',
          '<10 kcal/kg lean mass/day',
          ],
          correctAnswer: 1,
          explanation: 'Energy availability below 30 kcal/kg lean mass/day is associated with menstrual dysfunction in athletes. This threshold identifies the point at which the body conserves energy by suppressing reproductive function.',
        }
      ]
    },
    {
      level: 5,
      title: 'Complex Amenorrhea and Emerging Research',
      content: `Complex presentations of amenorrhea require integration of endocrine, genetic, metabolic, and psychosocial factors. Emerging research continues to refine our understanding and management approaches.

**Molecular Mechanisms of Hypothalamic Suppression:**

**Kisspeptin System:**
- **KISS1 neurons:** Primary regulators of GnRH secretion
- **KISS1R (GPR54):** Receptor for kisspeptin
- **Energy sensing:** Leptin and ghrelin modulate kisspeptin
- **Inhibition by stress:** Cortisol suppresses kisspeptin expression

**Leptin as Metabolic Gate:**
- Threshold of ~6-10 ng/mL needed for menstrual function
- Signals adequate energy stores
- Directly stimulates GnRH neurons
- Leptin resistance may contribute to hypothalamic amenorrhea

**Neuroendocrine-Immune Interactions:**
- **Cytokines:** IL-1, IL-6, TNF-α inhibit GnRH
- **Stress activation:** HPA axis suppresses HPO axis
- **CRH and cortisol:** Inhibit kisspeptin and GnRH
- **Allopregnanolone:** May mediate stress effects

**Genetic Architecture of Amenorrhea:**

**Next-Generation Sequencing Findings:**
- **POI-associated genes:** Over 60 identified
- **Oligogenic inheritance:** Multiple genes contributing
- **Variable expressivity:** Same mutation, different presentations
- **Penetrance factors:** Environment modifies genetic risk

**Key Genes in Amenorrhea:**

| Gene | Function | Associated Condition |
|------|----------|---------------------|
| FMR1 | X chromosome | Fragile X-associated POI |
| BMP15 | Oocyte development | POI |
| NOBOX | Folliculogenesis | POI |
| FIGLA | Follicle formation | POI |
| STAG3 | Meiosis | POI |
| HFM1 | Meiotic recombination | POI |
| KAL1 | GnRH neuron migration | Kallmann syndrome |
| TAC3/TACR3 | GnRH secretion | Normosmic hypogonadism |
| FGFR1 | GnRH development | Kallmann variant |

**Epigenetic Modifications:**
- DNA methylation changes in amenorrhea
- Histone modifications affecting gene expression
- Transgenerational effects possible
- Potential for therapeutic targeting

**Premature Ovarian Insufficiency (POI) Updates:**

**Pathophysiology:**
- Follicle depletion vs. dysfunction
- Autoimmune mechanisms (20-30%)
- Enzymatic defects
- Gonadotropin receptor mutations
- Accelerated follicular atresia

**Diagnostic Advances:**
- **AMH:** Anti-Müllerian hormone as marker
- **Inhibin B:** Early follicle pool indicator
- **AFC:** Antral follicle count
- **Ovarian volume:** Ultrasound parameter

**Management Controversies:**
- HRT vs. COCs for estrogen replacement
- Duration of therapy (until average menopause age)
- Monitoring for associated autoimmune conditions
- Fertility preservation options

**Treatment-Resistant Amenorrhea:**

**Refractory FHA:**
- **Transdermal estrogen:** Preferred over oral
- **Pulsatile GnRH:** If pituitary responsive
- **Gonadotropin therapy:** If hypothalamic but pituitary intact
- **Ghrelin mimetics:** Under investigation

**Novel Therapeutic Approaches:**
- **Kisspeptin analogs:** Phase I/II trials
- **Leptin replacement:** For hypothalamic amenorrhea with leptin deficiency
- **Neurokinin B antagonists:** Under investigation
- **Ghrelin agonists:** Appetite stimulation

**Long-Term Health Consequences:**

**Skeletal System:**
- Peak bone mass acquisition impaired
- Microarchitectural changes beyond BMD
- Fracture risk elevated even after recovery
- Trabecular bone score abnormalities

**Cardiovascular System:**
- Endothelial dysfunction
- Impaired flow-mediated dilation
- Increased arterial stiffness
- Lipid profile changes

**Neurocognitive Effects:**
- Possible hippocampal changes
- Memory and executive function affected
- Reversibility uncertain

**Psychiatric Comorbidity:**
- Depression: 40-50% prevalence
- Anxiety: 30-40% prevalence
- Eating disorders: up to 30%
- Obsessive-compulsive features

**Specialized Testing in Complex Cases:**

**Dynamic Endocrine Testing:**
- **GnRH stimulation test:** Differentiates hypothalamic vs. pituitary
- **ACTH stimulation:** Adrenal function
- **Overnight dexamethasone suppression:** Cushing syndrome
- **Mixed meal tolerance:** Insulin dynamics

**Autoimmune Evaluation:**
- **Adrenal antibodies:** 21-hydroxylase
- **Ovarian antibodies:** Controversial utility
- **Thyroid antibodies:** TPO, Tg
- **General autoimmunity screen:** ANA, RF

**Future Directions:**
- **Ovarian tissue cryopreservation:** Experimental for POI
- **In vitro activation (IVA):** Ovarian stimulation techniques
- **Stem cell therapies:** Theoretical approaches
- **Artificial ovary development:** Research stage
- **Personalized medicine:** Genetic risk profiling
      `,
      keyPoints: [
        'Kisspeptin and leptin systems are key regulators of GnRH secretion',
        'Over 60 genes have been associated with premature ovarian insufficiency',
        'Treatment-resistant cases may benefit from novel hormonal approaches',
        'Long-term consequences extend beyond bone to cardiovascular and cognitive health',
      ],
      vocabulary: [
        { term: 'AMH', definition: 'Anti-Müllerian Hormone - marker of ovarian reserve' },
        { term: 'Epigenetic', definition: 'Heritable changes in gene expression without DNA sequence changes' },
        { term: 'Iva', definition: 'In vitro activation - technique to stimulate dormant ovarian follicles' },
        { term: 'Transgenerational', definition: 'Effects that span multiple generations' }
      ],
      quiz: [
        {
          question: 'What is the role of kisspeptin in the reproductive axis?',
          options: [
          'Directly stimulates ovarian follicles',
          'Primary regulator of GnRH secretion from the hypothalamus',
          'Inhibits prolactin production',
          'Metabolizes estrogen',
          ],
          correctAnswer: 1,
          explanation: 'Kisspeptin, produced by KISS1 neurons, is now recognized as the primary upstream regulator of GnRH secretion. It integrates metabolic and hormonal signals to control reproductive function.',
        },
        {
          question: 'What is the serum leptin threshold generally needed for normal menstrual function?',
          options: [
          '<2 ng/mL',
          '6-10 ng/mL',
          '20-30 ng/mL',
          '>50 ng/mL',
          ],
          correctAnswer: 1,
          explanation: 'A serum leptin level of approximately 6-10 ng/mL is typically required for normal menstrual function. This represents an energy threshold that signals adequate energy stores for reproduction.',
        }
      ]
    }
  ],
  relatedTopics: [
    'menstrual-cycle',
    'menstrual-disorders',
    'pcos',
    'infertility',
  ],
  lastUpdated: '2025-01-25',
  references: [
    'ACOG Practice Bulletin No. 165 and 178',
    'ESHRE Guidelines on POI',
    'Fertility and Sterility reviews on hypothalamic amenorrhea',
  ]
};
