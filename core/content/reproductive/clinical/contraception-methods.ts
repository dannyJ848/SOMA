/**
 * Contraception Methods - Reproductive Medicine
 *
 * Comprehensive content on contraceptive methods including hormonal,
 * barrier, intrauterine, permanent, and emergency contraception options
 * with mechanisms, efficacy, and clinical considerations.
 */

import { EducationalContent } from '../../types';

export const contraceptionMethods: EducationalContent = {
  id: 'reproductive-contraception-methods',
  type: 'concept',
  name: 'Contraception Methods',
  nameEs: 'Metodos Anticonceptivos',
  alternateNames: ['Birth Control', 'Family Planning', 'Fertility Control'],

  levels: {
    1: {
      level: 1,
      summary: 'Contraception methods are ways to prevent pregnancy. They work by stopping sperm from meeting an egg, preventing egg release, or making the uterus unsuitable for pregnancy.',
      explanation: `## What is Contraception?

Contraception means using methods or devices to prevent pregnancy when you have sex.

### Main Types of Birth Control

**1. Hormonal Methods**
These use hormones (like your body naturally makes) to prevent pregnancy:
- Birth control pills (taken every day)
- Patch (worn on skin, changed weekly)
- Shot (injection every 3 months)
- Implant (small rod under skin, lasts 3 years)
- Hormonal IUD (placed in uterus, lasts 3-7 years)

**2. Barrier Methods**
These physically block sperm:
- Condoms (worn by male or female)
- Diaphragm (cup that covers the cervix)
- Cervical cap (smaller cup)

**3. Intrauterine Devices (IUDs)**
Small devices placed in the uterus:
- Copper IUD (no hormones, lasts up to 10 years)
- Hormonal IUD (releases hormones, lasts 3-7 years)

**4. Permanent Methods**
For people who are sure they do not want more children:
- Tubal ligation ("tubes tied" for women)
- Vasectomy (for men)

**5. Emergency Contraception**
Used after unprotected sex to prevent pregnancy:
- Morning-after pill (within 3-5 days)
- Copper IUD (within 5 days)

### How Well Do They Work?

| Method | Effectiveness |
|--------|--------------|
| Implant/IUD | >99% |
| Shot/Pill/Patch | 91-94% |
| Condoms | 85% |
| Pulling out | 78% |
| No method | 85% chance of pregnancy each year |

### Choosing the Right Method

The best birth control depends on:
- Your health
- How often you have sex
- Whether you want children in the future
- How well you can remember to take/use it
- Side effects you can tolerate`,
      keyTerms: [
        { term: 'contraception', definition: 'Methods used to prevent pregnancy' },
        { term: 'hormones', definition: 'Chemical messengers that control body functions' },
        { term: 'IUD', definition: 'Intrauterine device - a small device placed inside the uterus' },
        { term: 'sperm', definition: 'Male reproductive cells that can fertilize an egg' },
        { term: 'uterus', definition: 'The womb where a baby grows during pregnancy' },
      ],
      analogies: [
        'Contraception is like a security system for pregnancy - different methods provide different levels of protection.',
        'Hormonal birth control is like telling your body "we are already pregnant" so it does not release eggs.',
      ],
      examples: [
        'Birth control pills must be taken at the same time every day to work best',
        'Condoms are the only method that also protects against sexually transmitted infections',
        'An IUD can be placed by a doctor and provide protection for years',
      ],
      patientCounselingPoints: [
        'No method is 100% perfect except abstinence',
        'The most effective method is the one you will use correctly every time',
        'You can switch methods if one does not work for you',
        'Talk to a doctor about which method fits your health and lifestyle',
      ],
    },
    2: {
      level: 2,
      summary: 'Contraceptive methods vary in mechanism, efficacy, and user requirements. Hormonal methods prevent ovulation and alter cervical mucus, barrier methods prevent sperm entry, and intrauterine devices create hostile environments for sperm or fertilization.',
      explanation: `## Understanding Contraceptive Methods

### Hormonal Contraception

**Mechanisms of Action:**
1. **Inhibition of Ovulation:** Prevents egg release from ovary
2. **Thickening Cervical Mucus:** Blocks sperm passage
3. **Endometrial Changes:** Alters uterine lining (secondary effect)

**Types and Schedules:**

| Method | Hormones | Schedule | Duration |
|--------|----------|----------|----------|
| Combined pills | Estrogen + Progestin | Daily | - |
| Progestin-only pills | Progestin only | Daily (same time) | - |
| Patch | Estrogen + Progestin | Weekly x3, then off | - |
| Vaginal ring | Estrogen + Progestin | 3 weeks in, 1 week out | - |
| Injection (DMPA) | Progestin only | Every 13 weeks | 3 months |
| Implant | Progestin only | Once placed | 3 years |
| Hormonal IUD | Progestin only | Once placed | 3-7 years |

**Effectiveness (Typical Use):**
- Pills, patch, ring: 91% (9% failure rate)
- Injection: 94% (6% failure rate)
- Implant: >99% (<1% failure rate)
- Hormonal IUD: >99% (<1% failure rate)

### Intrauterine Devices (IUDs)

**Copper IUD:**
- Mechanism: Copper is toxic to sperm; inflammatory response
- Duration: Up to 10-12 years
- Side effects: Heavier periods, more cramping
- Advantages: No hormones, emergency contraception use

**Hormonal IUDs:**
- Levonorgestrel-releasing (52mg, 19.5mg, 13.5mg)
- Mechanism: Thick cervical mucus, thin endometrium, may suppress ovulation
- Duration: 3-8 years depending on dose
- Side effects: Lighter periods (may stop completely), irregular bleeding initially

### Barrier Methods

**Male Condom:**
- Material: Latex, polyurethane, or lambskin
- Effectiveness: 85% typical use, 98% perfect use
- Additional benefit: STI prevention (latex/polyurethane)

**Female Condom:**
- Material: Nitrile or polyurethane
- Effectiveness: 79% typical use
- Covers vulva - better STI protection

**Diaphragm/Cervical Cap:**
- Used with spermicide
- Must be fitted by provider
- Effectiveness: 88% typical use

### Fertility Awareness Methods

**Tracking Signs:**
- Basal body temperature
- Cervical mucus changes
- Calendar/rhythm method
- Effectiveness: 76-88% typical use
- Requires training and daily monitoring

### Permanent Methods

**Female Sterilization (Tubal Ligation):**
- Occlusion or removal of fallopian tubes
- Effectiveness: >99%
- Considered permanent (reversal difficult)

**Male Sterilization (Vasectomy):**
- Cutting/sealing vas deferens
- Effectiveness: >99%
- Simpler than tubal ligation
- Requires backup method until sperm-free (8-12 weeks)`,
      keyTerms: [
        { term: 'ovulation', definition: 'Release of an egg from the ovary' },
        { term: 'progestin', definition: 'Synthetic form of progesterone hormone used in contraception' },
        { term: 'cervical mucus', definition: 'Fluid produced by the cervix that changes consistency during the menstrual cycle' },
        { term: 'vas deferens', definition: 'Tube that carries sperm from testes to urethra' },
        { term: 'spermicide', definition: 'Chemical that kills sperm' },
      ],
      analogies: [
        'The cervical mucus with hormonal contraception becomes like a thick wall that sperm cannot penetrate.',
        'An IUD works like a security guard inside the uterus, preventing sperm from surviving or fertilizing an egg.',
      ],
      examples: [
        'Combined oral contraceptives must be taken within the same 3-hour window each day for optimal efficacy',
        'The copper IUD can be used as emergency contraception up to 5 days after unprotected intercourse',
        'Progestin-only pills require taking at the exact same time daily (within 3 hours)',
      ],
      patientCounselingPoints: [
        'Long-acting reversible contraceptives (LARCs like IUDs and implants) are the most effective because they do not rely on daily user action',
        'Combined hormonal methods are not suitable for women over 35 who smoke due to cardiovascular risk',
        'Most contraceptives do not protect against sexually transmitted infections - condoms do',
        'Fertility returns quickly after stopping most methods, except injection (may take 6-18 months)',
      ],
    },
    3: {
      level: 3,
      summary: 'Contraceptive pharmacology involves estrogen and progestin formulations with varying routes, doses, and side effect profiles. Selection requires consideration of contraindications, drug interactions, and individual patient factors including medical history and lifestyle.',
      explanation: `## Contraceptive Pharmacology and Selection

### Hormonal Formulations

**Combined Hormonal Contraceptives (CHCs):**

Estrogen component:
- Ethinyl estradiol (most common): 20-50 mcg
- Estradiol valerate
- Estradiol (lower clot risk in some studies)

Progestin generations:
- **First generation:** Norethindrone, norethynodrel
- **Second generation:** Levonorgestrel, norgestrel (lower androgenic)
- **Third generation:** Desogestrel, norgestimate, gestodene (lower androgenic)
- **Fourth generation:** Drospirenone (anti-androgenic, anti-mineralocorticoid)
- **Newer:** Dienogest, nomegestrol acetate

**Progestin-Only Methods:**
- Norethindrone (POPs - progestin-only pills)
- Drospirenone (newer POP option)
- Depot medroxyprogesterone acetate (DMPA)
- Etonogestrel (implant)
- Levonorgestrel (hormonal IUDs)

### Mechanisms in Detail

**Combined Hormonal Contraceptives:**
---
Primary mechanism: Negative feedback on hypothalamus/pituitary
  -> Suppresses GnRH pulsatility
    -> Inhibits FSH/LH surge
      -> Prevents follicular development and ovulation

Secondary mechanisms:
  - Cervical mucus thickening (barrier to sperm)
  - Endometrial atrophy (reduces implantation potential)
  - Altered tubal motility (minimal contribution)
---

**Progestin-Only Methods:**
- POPs: Primarily cervical mucus effect; ovulation suppressed in ~50%
- DMPA/Implant: Primarily ovulation suppression
- Hormonal IUD: Local effects on mucus and endometrium

### Contraindications (CDC Medical Eligibility Criteria)

**Category 4 (Do Not Use) - Combined Hormonal:**
- Age >=35 and smoking >=15 cigarettes/day
- History of thromboembolism or thrombophilia
- Ischemic heart disease, stroke
- Migraine with aura (any age)
- Breast cancer or other estrogen-dependent cancer
- Severe cirrhosis, hepatocellular adenoma
- SBP >=160 or DBP >=100
- Postpartum <21 days (if not breastfeeding)
- Breastfeeding <1 month postpartum

**Category 3 (Use with Caution):**
- Age >=35 and smoking <15 cigarettes/day
- Migraine without aura (age >=35)
- Controlled hypertension
- History of bariatric surgery (malabsorptive)
- Postpartum 21-42 days if other VTE risk factors

### Drug Interactions

**Enzyme Inducers (reduce contraceptive efficacy):**
- Rifampin, rifabutin
- Certain anti-seizure medications (phenytoin, carbamazepine, phenobarbital, primidone, topiramate at high doses)
- St. John\'s Wort
- Griseofulvin

**Other Interactions:**
- Antibiotics (except rifampin): Do not reduce efficacy
- Lamotrigine: CHCs reduce lamotrigine levels
- Warfarin: CHCs may affect anticoagulation

### Side Effect Profiles

**Estrogen-Related:**
- Nausea, breast tenderness (usually resolve in 2-3 months)
- Fluid retention, bloating
- Increased risk of VTE (still lower than pregnancy)
- Improved: Acne, hirsutism, menstrual regularity

**Progestin-Related:**
- Irregular bleeding (common with POPs, DMPA, implants)
- Weight gain (more with DMPA: average 5-10 lbs in first year)
- Mood changes (variable by individual)
- Acne (androgenic progestins), improved (anti-androgenic)
- Decreased libido (some women)

### Non-Contraceptive Benefits

- Reduced risk: Endometrial cancer, ovarian cancer, colorectal cancer
- Improved: Dysmenorrhea, menorrhagia, PMS/PMDD, acne, hirsutism
- Treatment: PCOS, endometriosis, menstrual disorders`,
      keyTerms: [
        { term: 'thromboembolism', definition: 'Formation of blood clots that can travel to lungs or brain' },
        { term: 'androgenic', definition: 'Having male hormone-like effects such as acne or hair growth' },
        { term: 'GnRH', definition: 'Gonadotropin-releasing hormone from hypothalamus that controls reproductive hormones' },
        { term: 'VTE', definition: 'Venous thromboembolism - blood clots in veins' },
        { term: 'dysmenorrhea', definition: 'Painful menstrual periods' },
      ],
      analogies: [
        'The hypothalamic-pituitary-ovarian axis is like a thermostat system - hormonal contraception turns down the temperature setting so the system stays quiet.',
        'Progestin-only methods are like a partial mute button - they quiet some functions but not as completely as combined methods.',
      ],
      examples: [
        'Drospirenone has anti-mineralocorticoid activity similar to spironolactone, making it beneficial for bloating',
        'Women with migraine with aura have increased stroke risk with estrogen-containing methods',
        'The contraceptive patch delivers 60% more estrogen than a 35 mcg pill, increasing VTE risk slightly',
      ],
      clinicalNotes: 'Always screen for migraine with aura before prescribing combined hormonal contraceptives. Aura is characterized by reversible neurologic symptoms (visual scintillations, sensory changes, speech disturbance) preceding headache. Women with aura have elevated stroke risk and should use progestin-only or non-hormonal methods.',
    },
    4: {
      level: 4,
      summary: 'Clinical management of contraception requires addressing complex scenarios including postpartum, perimenopausal, and medically complex patients. Long-acting reversible contraceptives offer highest efficacy, while emergency contraception provides time-sensitive backup options with specific mechanisms.',
      explanation: `## Advanced Contraceptive Management

### Long-Acting Reversible Contraceptives (LARCs)

**LARCs: Most Effective Methods**

---
Efficacy Comparison (Failure rates per 100 women/year):

Highly effective (<1%):
  - Implant: 0.1%
  - Hormonal IUD: 0.1-0.4%
  - Copper IUD: 0.8%

Moderately effective (6-12%):
  - Injection: 6%
  - Pills, patch, ring: 9%

Less effective (>12%):
  - Condoms: 13%
  - Fertility awareness: 24%
  - Withdrawal: 20%
---

**IUD Insertion Considerations:**

Timing:
- Any time in menstrual cycle (if not pregnant)
- Postpartum: Immediately or after 4 weeks
- Post-abortion: Immediately
- Emergency contraception: Up to 5 days after unprotected sex

Contraindications:
- Pregnancy
- Active pelvic infection
- Unexplained vaginal bleeding
- Malignant gestational trophoblastic disease
- Cervical cancer (awaiting treatment)
- Uterine anomalies preventing proper placement
- Copper allergy/sensitivity (copper IUD only)
- Wilson disease (copper IUD)

### Special Populations

**Postpartum Contraception:**

Immediate postpartum (0-10 minutes):
- Immediate postpartum IUD (before placental delivery)
- Immediate postpartum tubal ligation (C-section or vaginal)

Postpartum period:
- Breastfeeding (Lactational Amenorrhea Method): Effective if <6 months, amenorrheic, exclusive breastfeeding
- Progestin-only methods: Safe immediately
- Combined methods: Delay until 3 weeks if not breastfeeding; 6 months if breastfeeding

**Adolescents:**
- LARCs recommended as first-line (AAP, ACOG, WHO)
- Confidential services important
- Counseling on STI protection
- Consent laws vary by state

**Perimenopause:**
- Continue contraception until menopause confirmed (12 months amenorrhea)
- Age >50 with amenorrhea: Can consider discontinuation after FSH >30 IU/L
- Combined methods limited by age/cardiovascular risks
- Progestin-only or copper IUD often preferred

**Medically Complex Patients:**

Cardiovascular disease:
- Avoid combined methods
- Progestin-only or copper IUD preferred

Diabetes:
- All methods generally safe
- Avoid combined if vascular complications

Epilepsy:
- Enzyme-inducing drugs reduce hormonal efficacy
- IUDs, DMPA, or non-hormonal preferred

Bariatric surgery:
- Malabsorptive procedures: Avoid oral contraceptives
- Restrictive procedures: Oral contraceptives acceptable

### Emergency Contraception (EC)

**Methods and Mechanisms:**

| Method | Timing | Mechanism | Efficacy |
|--------|--------|-----------|----------|
| Levonorgestrel 1.5mg | Within 72 hours (up to 120) | Delays/inhibits ovulation | 85% |
| Ulipristal acetate 30mg | Within 120 hours | Delays ovulation | 98% |
| Copper IUD | Within 120 hours | Sperm toxic, prevents implantation | >99% |

**Key Points:**
- NOT an abortifacient (works before implantation)
- Earlier use = more effective
- Not affected by body weight (some evidence ulipristal more effective in overweight women)
- Does not affect established pregnancy
- May alter next menstrual cycle
- Advance prescription increases timely use

**Access Issues:**
- Over-the-counter availability (levonorgestrel)
- Prescription required (ulipristal, copper IUD)
- Conscience clauses affecting pharmacy access

### Contraceptive Counseling

**Shared Decision-Making Framework:**

---
Counseling Components:
1. Efficacy information (typical and perfect use)
2. Side effects and their management
3. Non-contraceptive benefits
4. Return to fertility
5. STI protection
6. Cost and insurance coverage
7. User control and reversibility
8. Religious/cultural considerations
---

**Quick Start:**
- Start method at any time if reasonable certainty not pregnant
- No need to wait for next period
- Backup contraception for 7 days if not during first 5 days of cycle

**Managing Side Effects:**
- Breakthrough bleeding: Usually resolves in 3-6 months
- Mood changes: Trial different progestins
- Weight gain: Switch from DMPA to other methods
- Acne: Use anti-androgenic progestins`,
      keyTerms: [
        { term: 'abortifacient', definition: 'Substance that causes abortion; emergency contraception is NOT an abortifacient' },
        { term: 'lactational amenorrhea', definition: 'Natural infertility during exclusive breastfeeding' },
        { term: 'quick start', definition: 'Initiating contraception immediately regardless of cycle day' },
        { term: 'breakthrough bleeding', definition: 'Unscheduled bleeding while using hormonal contraception' },
        { term: 'ulipristal', definition: 'Selective progesterone receptor modulator used for emergency contraception' },
      ],
      clinicalNotes: 'When counseling on emergency contraception, emphasize that the copper IUD is the most effective method and provides ongoing contraception. For overweight/obese women (BMI >30), ulipristal or copper IUD are preferred over levonorgestrel due to potentially reduced efficacy of levonorgestrel at higher body weights.',
    },
    5: {
      level: 5,
      summary: 'Expert-level contraceptive care involves managing complex medical scenarios, understanding contraceptive pharmacogenomics, addressing health disparities in access, and integrating new technologies including male contraceptive development and novel delivery systems.',
      explanation: `## Advanced Topics in Contraception

### Complex Clinical Scenarios

**Cancer Patients:**

Fertility preservation before treatment:
- Oocyte/embryo cryopreservation
- Ovarian suppression with GnRH agonists (controversial benefit)
- Ovarian transposition

Contraception during/after treatment:
- Avoid combined methods with active breast cancer
- Progestin-only or copper IUD generally safe
- Teratogenic chemotherapy: Highly effective contraception essential

**Transgender and Gender Diverse Patients:**

Fertility considerations:
- Testosterone therapy does not reliably suppress ovulation
- Gender-affirming hormones affect fertility but do not eliminate risk
- Sperm/oocyte banking before transition

Contraceptive needs:
- Transgender men: May need contraception if uterus/ovaries present
- Testosterone not adequate contraception
- Avoid feminizing progestins if dysphoria concern
- Copper IUD often preferred

**Post-Bariatric Surgery:**

Malabsorptive procedures (Roux-en-Y, gastric bypass):
- Decreased absorption of oral medications
- Alternative routes: Patch, ring, injection, implant, IUD
- Extended venous thromboembolism risk

### Reproductive Justice and Access Disparities

**Health Equity Issues:**
- Contraceptive deserts (lack of providers)
- Insurance coverage gaps
- Cost barriers for uninsured
- Racial disparities in contraceptive counseling (coercion history)
- Forced contraception concerns (incarcerated, disabled populations)

**Patient-Centered Approaches:**
- Reproductive justice framework: Right to have children, not have children, and parent in safe environments
- Addressing historical trauma (sterilization abuse)
- Cultural competence in counseling
- Language access

### Emerging Contraceptive Technologies

**Male Contraceptive Development:**

Hormonal approaches:
- Testosterone + progestin combinations
- Dimethandrolone undecanoate (DMAU)
- Suppress spermatogenesis with exogenous androgens

Non-hormonal approaches:
- Gamendazole (interferes with sperm maturation)
- JQ1 (Bromodomain inhibitor, affects spermatogenesis)
- Eppin blocker (prevents sperm capacitation)
- Vasalgel/RISUG (reversible polymer injection)

**Novel Delivery Systems:**
- Self-administered monthly injections
- Microneedle patches
- biodegradable implants
- Smart intrauterine systems

**Immunological Approaches:**
- Anti-sperm vaccines (early research)
- HCG vaccine (immunization against pregnancy hormone)
- Significant ethical and safety concerns

### Contraceptive Pharmacogenomics

**Genetic Variation in Response:**
- CYP enzyme polymorphisms affecting metabolism
- Progestin selection based on genetic profile (investigational)
- Individual variation in side effects may have genetic basis

### Contraception and Chronic Disease Risk

**Metabolic Effects:**

Glucose metabolism:
- Most methods: Minimal effect
- DMPA: Possible slight increase in glucose, insulin resistance
- Monitor diabetics on DMPA

Lipid effects:
- Combined methods: Generally favorable HDL changes
- Progestin-only: Minimal effect

**Cancer Relationships:**

Protective:
- Endometrial cancer: 50% reduction with combination pills
- Ovarian cancer: 50% reduction, persists 10+ years after stopping
- Colorectal cancer: ~20% reduction

Possible increased risk:
- Breast cancer: Small increase (RR ~1.2) with current/recent use, returns to baseline after stopping
- Cervical cancer: Associated with long-term use (>5 years), related to HPV persistence

### Research Frontiers

**Personalized Contraception:**
- Biomarkers predicting side effects
- Menstrual cycle tracking apps for FABM improvement
- AI-assisted method selection algorithms

**Postpartum Contraception Innovations:**
- Automatic postpartum LARC insertion protocols
- Community health worker distribution models
- Immediate postpartum IUD acceptance interventions

**Global Health Implementation:**
- Task-shifting: Nurse/midwife IUD insertion
- Self-administered subcutaneous DMPA
- Mobile health for adherence support`,
      keyTerms: [
        { term: 'teratogenic', definition: 'Causing birth defects; medications that harm fetal development' },
        { term: 'gametogenesis', definition: 'Formation of gametes (sperm and eggs)' },
        { term: 'reproductive justice', definition: 'Framework addressing right to personal bodily autonomy and parenting in safe environments' },
        { term: 'pharmacogenomics', definition: 'Study of how genes affect drug response' },
        { term: 'spermatogenesis', definition: 'Process of sperm cell development' },
      ],
      clinicalNotes: `Key Clinical Pearls:

1. LARC First: CDC and ACOG recommend LARCs as first-line for all women, including adolescents and nulliparous women, due to superior efficacy and safety.

2. Immediate Postpartum IUD: Safe, effective, does not affect breastfeeding, but expulsion rate ~10-25% vs 2-5% for interval insertion.

3. Testosterone as Contraception: Testosterone therapy in transgender men can cause amenorrhea but does NOT reliably suppress ovulation. Contraception is needed if pregnancy is not desired.

4. Antibiotic Myth: Rifampin/rifabutin are the only antibiotics that reduce contraceptive efficacy. All other antibiotics do not affect hormonal contraception.

5. BMI and Emergency Contraception: Consider ulipristal or copper IUD over levonorgestrel for women with BMI >30 or weight >165 lbs due to potentially reduced efficacy.`,
    },
  },

  media: [
    {
      id: 'contraceptive-efficacy-chart',
      type: 'diagram',
      filename: 'contraceptive-efficacy.svg',
      title: 'Contraceptive Effectiveness Comparison',
      description: 'Visual comparison of failure rates for different methods',
    },
  ],

  citations: [
    {
      id: 'cdc-mec-2016',
      type: 'article',
      title: 'U.S. Medical Eligibility Criteria for Contraceptive Use',
      authors: ['CDC'],
      source: 'MMWR',
    },
    {
      id: 'larc-acog',
      type: 'article',
      title: 'ACOG Committee Opinion: Adolescents and Long-Acting Reversible Contraception',
      authors: ['ACOG'],
      source: 'Obstetrics & Gynecology',
    },
  ],

  crossReferences: [
    { targetId: 'reproductive-menstrual-cycle', targetType: 'concept', relationship: 'related', label: 'Menstrual Cycle' },
  ],

  tags: {
    systems: ['reproductive'],
    topics: ['contraception', 'family-planning', 'clinical-medicine'],
    keywords: ['birth control', 'IUD', 'hormonal contraception', 'emergency contraception'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-28T00:00:00.000Z',
  updatedAt: '2026-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default contraceptionMethods;
