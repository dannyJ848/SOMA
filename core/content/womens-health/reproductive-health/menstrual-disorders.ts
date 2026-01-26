import { WomensHealthContent, LegacyWomensHealthContent } from '../types';

export const menstrualDisorders: LegacyWomensHealthContent = {
  id: 'condition-menstrual-disorders',
  type: 'condition',
  name: 'Menstrual Disorders',
  alternateNames: ['Period problems', 'Abnormal uterine bleeding', 'Menstrual irregularities'],

  levels: {
    1: {
      level: 1,
      summary: 'Menstrual disorders are problems with your period, including periods that are too heavy, too painful, too frequent, or missing altogether.',
      explanation: `Your period should come regularly and be manageable. When something is wrong, you might notice:

**Too Heavy (Menorrhagia):**
- Soaking through a pad or tampon every hour
- Bleeding for more than 7 days
- Passing large blood clots

**Too Painful (Dysmenorrhea):**
- Cramps so bad you can't do normal activities
- Pain that doesn't get better with over-the-counter medicine

**Irregular Timing:**
- Periods that come too often (less than 21 days apart)
- Periods that are too far apart (more than 35 days)
- Missing periods when you're not pregnant

**When to See a Doctor:**
- Bleeding that soaks more than one pad per hour
- Periods lasting more than 7 days
- Severe pain that affects your daily life
- No period for 3 months (if you're not pregnant)`,
      keyTerms: [
        { term: 'heavy period', definition: 'Bleeding more than normal, soaking through pads quickly or passing large clots' },
        { term: 'cramps', definition: 'Pain in your lower belly during your period caused by your uterus contracting' },
        { term: 'irregular periods', definition: 'Periods that don\'t come at the same time each month or skip months' },
      ],
      analogies: ['Think of your period like a regular train schedule - when trains come too early, too late, are overcrowded, or break down, something needs to be fixed.'],
      examples: ['Missing school or work because of severe cramps', 'Having to change your pad every hour', 'Going 3 months without a period when not pregnant'],
    },
    2: {
      level: 2,
      summary: 'Menstrual disorders include abnormalities in cycle frequency, duration, regularity, and volume of bleeding, with common causes including hormonal imbalances, structural abnormalities, and clotting disorders.',
      explanation: `**Types of Menstrual Disorders:**

*Abnormal Bleeding:*
- **Menorrhagia:** Heavy bleeding (>80 mL per cycle) or >7 days
- **Metrorrhagia:** Bleeding between periods
- **Menometrorrhagia:** Heavy, irregular bleeding
- **Oligomenorrhea:** Infrequent periods (>35 day cycles)
- **Amenorrhea:** Absence of periods

*Painful Periods:*
- **Primary Dysmenorrhea:** Painful cramps without underlying disease
- **Secondary Dysmenorrhea:** Pain caused by conditions like endometriosis or fibroids

**Common Causes:**
- Hormonal imbalances (thyroid, PCOS)
- Uterine fibroids or polyps
- Endometriosis
- Clotting disorders
- Infections
- Pregnancy complications
- Medications (blood thinners, hormones)

**Evaluation:**
- Menstrual history and symptom diary
- Pregnancy test
- Blood tests (CBC, thyroid, hormones)
- Pelvic ultrasound`,
      keyTerms: [
        { term: 'menorrhagia', definition: 'Abnormally heavy or prolonged menstrual bleeding', pronunciation: 'men-or-AY-jee-ah' },
        { term: 'dysmenorrhea', definition: 'Painful menstruation, including cramping', pronunciation: 'dis-men-or-EE-ah' },
        { term: 'amenorrhea', definition: 'Absence of menstrual periods', pronunciation: 'ay-men-or-EE-ah' },
        { term: 'oligomenorrhea', definition: 'Infrequent menstrual periods, typically >35 days apart', pronunciation: 'ol-ig-oh-men-or-EE-ah' },
      ],
      analogies: ['The menstrual cycle is like a thermostat - when hormones are out of balance, the heating and cooling cycles become erratic.'],
    },
    3: {
      level: 3,
      summary: 'Menstrual disorders are classified using the PALM-COEIN system for abnormal uterine bleeding, with systematic evaluation addressing structural (polyps, adenomyosis, leiomyoma, malignancy) and non-structural (coagulopathy, ovulatory dysfunction, endometrial, iatrogenic, not classified) etiologies.',
      explanation: `**PALM-COEIN Classification (FIGO):**

*Structural Causes (PALM):*
- **P**olyps: Localized endometrial overgrowths
- **A**denomyosis: Endometrial tissue within myometrium
- **L**eiomyoma: Uterine fibroids (submucosal most likely to cause bleeding)
- **M**alignancy: Endometrial cancer or hyperplasia

*Non-Structural Causes (COEIN):*
- **C**oagulopathy: Von Willebrand disease, platelet disorders
- **O**vulatory dysfunction: PCOS, thyroid disease, hyperprolactinemia
- **E**ndometrial: Local endometrial hemostatic dysfunction
- **I**atrogenic: Anticoagulants, hormonal contraceptives, IUDs
- **N**ot yet classified: Arteriovenous malformations, cesarean scar defects

**Evaluation Protocol:**
1. Exclude pregnancy
2. History: PBAC score, cycle pattern, medications
3. Labs: CBC, ferritin, TSH, coagulation screen (if heavy since menarche)
4. Imaging: Transvaginal ultrasound, saline-infusion sonography, or hysteroscopy

**Dysmenorrhea Pathophysiology:**
- Primary: Prostaglandin excess causes myometrial hypercontractility and ischemia
- Secondary: Underlying pathology (endometriosis, adenomyosis, fibroids, PID)`,
      keyTerms: [
        { term: 'PALM-COEIN', definition: 'FIGO classification system for abnormal uterine bleeding causes' },
        { term: 'adenomyosis', definition: 'Presence of endometrial glands and stroma within the myometrium', pronunciation: 'ad-eh-no-my-OH-sis' },
        { term: 'PBAC', definition: 'Pictorial Blood Assessment Chart; score >100 suggests heavy menstrual bleeding' },
        { term: 'saline-infusion sonography', definition: 'Ultrasound with saline instillation to evaluate uterine cavity', pronunciation: 'SIS' },
      ],
      clinicalNotes: 'Screen for bleeding disorders in adolescents with heavy menstrual bleeding since menarche. Von Willebrand disease affects 5-20% of women with menorrhagia.',
    },
    4: {
      level: 4,
      summary: 'Management of menstrual disorders requires systematic diagnostic evaluation, appropriate medical therapy (hormonal and non-hormonal), and judicious use of surgical interventions, with treatment tailored to etiology, severity, fertility goals, and patient preferences.',
      explanation: `**Diagnostic Workup:**

*First-Line:*
- Pregnancy test (always)
- CBC, ferritin (anemia assessment)
- TSH
- Coagulation screen if: heavy since menarche, family history, easy bruising

*Second-Line:*
- Hormonal panel (FSH, LH, estradiol, prolactin) for amenorrhea/oligomenorrhea
- Transvaginal ultrasound
- Endometrial biopsy if: age >45, risk factors for hyperplasia, failed medical management

*Third-Line:*
- Saline-infusion sonohysterography
- Hysteroscopy with directed biopsy
- MRI for adenomyosis or complex fibroids

**Medical Management:**

*Heavy Menstrual Bleeding:*
- Tranexamic acid: Reduces bleeding 40-50%
- NSAIDs: Reduce bleeding 20-40%, prostaglandin inhibition
- Combined hormonal contraceptives: Endometrial atrophy
- Progestin-only options: Oral progestins, LNG-IUD (most effective medical option)
- GnRH agonists/antagonists: Short-term, preoperative

*Dysmenorrhea:*
- NSAIDs: First-line, prostaglandin synthesis inhibition
- Hormonal contraceptives: Suppression of ovulation and endometrial development
- Continuous hormonal regimens for severe cases

**Surgical Options:**
- Polypectomy/myomectomy
- Endometrial ablation (contraindicated if future fertility desired)
- Hysterectomy (definitive)
- Uterine artery embolization for fibroids`,
      keyTerms: [
        { term: 'tranexamic acid', definition: 'Antifibrinolytic that reduces menstrual blood loss by stabilizing clots', pronunciation: 'tran-ex-AM-ik' },
        { term: 'LNG-IUD', definition: 'Levonorgestrel intrauterine device; releases progestin locally, highly effective for heavy bleeding' },
        { term: 'endometrial ablation', definition: 'Destruction of the uterine lining to reduce or stop menstrual bleeding' },
        { term: 'hysteroscopy', definition: 'Direct visualization of the uterine cavity using a camera inserted through the cervix' },
      ],
      clinicalNotes: 'LNG-IUD reduces menstrual blood loss by 90% and is first-line for heavy bleeding in women not seeking immediate fertility. Tranexamic acid can be used with hormonal therapy. Endometrial biopsy is mandatory before ablation to rule out malignancy.',
    },
    5: {
      level: 5,
      summary: 'Evidence-based management of menstrual disorders requires understanding of current guidelines, special populations (adolescents, perimenopause, anticoagulated patients), emerging therapies, and appropriate surgical selection based on comparative effectiveness data.',
      explanation: `**Special Populations:**

*Adolescents:*
- Anovulatory cycles common in first 2 years post-menarche
- Screen for bleeding disorders if heavy since menarche (Von Willebrand, platelet dysfunction)
- NSAIDs and combined hormonal contraceptives first-line
- Avoid endometrial ablation

*Perimenopause:*
- Higher risk of endometrial hyperplasia/cancer
- Lower threshold for endometrial biopsy
- Progestin therapy for anovulatory bleeding
- Consider LNG-IUD

*Anticoagulated Patients:*
- Tranexamic acid may be used (relative contraindication with thrombotic history)
- LNG-IUD effective
- Balance bleeding control with anticoagulation needs

**Evidence-Based Comparisons:**

*Heavy Menstrual Bleeding (Cochrane Reviews):*
- LNG-IUD superior to oral progestins, tranexamic acid, and mefenamic acid
- Endometrial ablation: 80-90% satisfaction at 1 year, 20-40% require subsequent hysterectomy by 5 years
- UAE vs. myomectomy: Similar quality of life, UAE higher reintervention rate

*Dysmenorrhea:*
- NSAIDs superior to placebo; no clear superiority among agents
- Combined hormonal contraceptives reduce primary dysmenorrhea
- Extended-cycle regimens may be more effective

**Emerging Therapies:**
- GnRH antagonists (elagolix, relugolix): Oral, dose-dependent suppression
- Selective progesterone receptor modulators
- Intrauterine ultrasound therapy
- MRI-guided focused ultrasound for fibroids

**Surgical Decision-Making:**
- Fertility desired: Conservative management, myomectomy if indicated
- Fertility complete: LNG-IUD trial before ablation
- Ablation failure: Hysterectomy
- Diffuse adenomyosis: Hysterectomy often required`,
      keyTerms: [
        { term: 'GnRH antagonist', definition: 'Oral medications that suppress estrogen without initial flare (elagolix, relugolix)' },
        { term: 'UAE', definition: 'Uterine artery embolization; interventional radiology procedure to treat fibroids' },
        { term: 'SPRM', definition: 'Selective progesterone receptor modulator; can reduce fibroid size and bleeding' },
        { term: 'MRgFUS', definition: 'MRI-guided focused ultrasound; non-invasive thermal ablation of fibroids' },
      ],
      clinicalNotes: 'ACOG recommends LNG-IUD as first-line medical therapy for heavy menstrual bleeding. Endometrial ablation is NOT for patients desiring future pregnancy. When counseling about hysterectomy, include option of ovarian conservation in premenopausal women to avoid surgical menopause.',
    },
  },
  media: [],
  citations: [
    {
      id: 'acog-aub-pb',
      type: 'article',
      title: 'ACOG Practice Bulletin: Abnormal Uterine Bleeding',
      source: 'American College of Obstetricians and Gynecologists',
      url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletin',
      license: 'Copyright ACOG',
    },
  ],
  crossReferences: [
    { targetId: 'concept-menstrual-cycle-explained', targetType: 'concept', relationship: 'related', label: 'Menstrual Cycle' },
    { targetId: 'condition-fibroids', targetType: 'condition', relationship: 'related', label: 'Uterine Fibroids' },
    { targetId: 'condition-endometriosis', targetType: 'condition', relationship: 'related', label: 'Endometriosis' },
    { targetId: 'condition-pcos', targetType: 'condition', relationship: 'related', label: 'PCOS' },
  ],
  tags: {
    systems: ['reproductive'],
    topics: ['gynecology', 'patient-education', 'womens-health'],
    keywords: ['abnormal uterine bleeding', 'heavy periods', 'menorrhagia', 'dysmenorrhea', 'irregular periods'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, shelf: ['obgyn'] },
  },
  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};
