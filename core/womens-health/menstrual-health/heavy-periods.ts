/**
 * Heavy Periods (Menorrhagia) - Comprehensive Educational Content
 *
 * Heavy menstrual bleeding affects quality of life and can indicate
 * underlying conditions. Women deserve to know what is normal and
 * when to seek help.
 */

import { EducationalContent } from '../../content/types';

export const HEAVY_PERIODS: EducationalContent = {
  id: 'heavy-periods-menorrhagia',
  type: 'condition',
  name: 'Heavy Periods (Menorrhagia)',
  alternateNames: ['Menorrhagia', 'Heavy menstrual bleeding', 'HMB', 'Hypermenorrhea'],

  levels: {
    1: {
      level: 1,
      summary: 'Heavy periods mean bleeding more than usual during your period - enough to affect your daily life or cause health problems.',
      explanation: `Everyone is different when it comes to periods, but some bleeding is considered "too heavy." Heavy periods can make you feel tired, limit what you can do, and affect your quality of life.

**Signs Your Period Might Be Too Heavy:**
- Soaking through a pad or tampon every hour for several hours
- Needing to use two products at once (pad plus tampon)
- Having to change protection during the night
- Passing blood clots larger than a quarter
- Period lasting more than 7 days
- Feeling very tired or short of breath during your period

**Why This Matters:**
Heavy bleeding can lead to low iron (anemia), which makes you feel tired, weak, and sometimes dizzy. Your body needs that blood!

**What Can Cause Heavy Periods:**
- Hormone imbalances (especially common in teens and near menopause)
- Growths in the uterus (fibroids or polyps - usually not cancer)
- Certain birth control methods (like copper IUD at first)
- Blood clotting problems
- Sometimes, no specific cause is found

**What You Can Do:**
1. Track your periods - how many pads/tampons you use, how often you change them
2. Talk to a doctor if your period is interfering with your life
3. Ask about treatment options - there are many effective ones!
4. Make sure you are getting enough iron in your diet

**Good News:**
Heavy periods are very treatable. Many options exist, from simple medications to procedures that can help significantly.`,
      keyTerms: [
        { term: 'heavy period', definition: 'Bleeding that is heavier than normal or lasts too long' },
        { term: 'anemia', definition: 'Low iron in your blood that makes you feel tired and weak' },
        { term: 'blood clots', definition: 'Thick, gel-like pieces of blood that pass during your period' },
        { term: 'fibroids', definition: 'Non-cancerous growths in the uterus that can cause heavy bleeding' },
      ],
      analogies: [
        'Think of your uterine lining like a sponge - sometimes the "sponge" gets too thick and releases too much when it sheds.',
      ],
      examples: [
        'If you are avoiding activities or calling in sick because of your period, that is a sign to talk to a doctor.',
        'Needing to set an alarm to change your pad at night means your bleeding is heavier than typical.',
      ],
    },
    2: {
      level: 2,
      summary: 'Heavy menstrual bleeding (menorrhagia) is defined as blood loss that interferes with quality of life, and affects about 1 in 5 women.',
      explanation: `**Defining Heavy Menstrual Bleeding:**

Medically, heavy bleeding is often defined as:
- More than 80 mL of blood loss per cycle (hard to measure at home)
- Bleeding for more than 7 days
- More practically: bleeding that affects your daily activities

**Using the PBAC Score:**
The Pictorial Blood Assessment Chart helps quantify blood loss:
- Light staining = 1 point
- Moderately soaked = 5 points
- Fully soaked = 20 points (tampon) or varying for pads
- Score >100 suggests heavy bleeding

**Common Causes:**

**Structural Causes (PALM):**
- **P**olyps - Growths on the uterine lining
- **A**denomyosis - Uterine lining grows into the muscle wall
- **L**eiomyomas (fibroids) - Non-cancerous muscle tumors
- **M**alignancy - Uterine cancer (rare, especially in younger women)

**Non-Structural Causes (COEIN):**
- **C**oagulopathy - Bleeding disorders (like von Willebrand disease)
- **O**vulatory dysfunction - Irregular hormone signals
- **E**ndometrial - Problems with the lining itself
- **I**atrogenic - Caused by medications or devices
- **N**ot otherwise classified

**Symptoms Beyond Bleeding:**
- Fatigue from anemia
- Shortness of breath with activity
- Pale skin
- Difficulty concentrating
- Cramps (often accompany heavy bleeding)

**When to See a Doctor:**
- Bleeding through a pad/tampon every 1-2 hours
- Passing clots larger than a quarter regularly
- Anemia symptoms
- Bleeding lasting more than 7 days
- Sudden change in your normal pattern

**Diagnostic Steps:**
1. Blood tests (check for anemia, thyroid, bleeding disorders)
2. Pelvic ultrasound (look for fibroids, polyps)
3. Sometimes additional tests based on findings`,
      keyTerms: [
        { term: 'menorrhagia', definition: 'The medical term for heavy menstrual bleeding', pronunciation: 'men-or-AY-jee-ah' },
        { term: 'PALM-COEIN', definition: 'Classification system for causes of abnormal bleeding' },
        { term: 'polyp', definition: 'A small growth on the uterine lining' },
        { term: 'adenomyosis', definition: 'When uterine lining tissue grows into the uterine muscle', pronunciation: 'ad-en-oh-my-OH-sis' },
        { term: 'coagulopathy', definition: 'A problem with blood clotting', pronunciation: 'co-ag-yoo-LAH-puh-thee' },
      ],
    },
    3: {
      level: 3,
      summary: 'Heavy menstrual bleeding is classified using the FIGO PALM-COEIN system and requires systematic evaluation to identify structural versus functional causes.',
      explanation: `**Pathophysiology of Heavy Bleeding:**

Normal menstruation involves coordinated:
- Vasoconstriction of spiral arteries
- Hemostatic plug formation
- Endometrial tissue breakdown and repair

Heavy bleeding results from disruption of these processes.

**PALM (Structural Causes):**

**Polyps:**
- Focal endometrial overgrowth
- May be hormone-sensitive
- Often cause intermenstrual bleeding too
- Diagnosis: Ultrasound, SIS, hysteroscopy

**Adenomyosis:**
- Endometrial glands/stroma within myometrium
- Causes uterine enlargement and tenderness
- Associated with dysmenorrhea
- Diagnosis: Ultrasound (heterogeneous myometrium), MRI

**Leiomyomas (Fibroids):**
- Location matters for bleeding:
  - Submucosal (into cavity): Most likely to cause HMB
  - Intramural: Variable effect
  - Subserosal: Usually do not cause HMB
- Size and number also affect bleeding

**Malignancy/Hyperplasia:**
- Endometrial hyperplasia (especially atypical)
- Endometrial carcinoma
- Risk factors: Obesity, PCOS, tamoxifen, age
- Always consider in postmenopausal bleeding or risk factors

**COEIN (Non-Structural Causes):**

**Coagulopathy:**
- Present in ~13% of women with HMB
- von Willebrand disease most common
- Screen if: HMB since menarche, family history, other bleeding symptoms

**Ovulatory Dysfunction:**
- Anovulation → unopposed estrogen → irregular, heavy shedding
- Common at extremes of reproductive age

**Endometrial:**
- Primary disorder of hemostasis/repair
- Often diagnosis of exclusion
- May involve prostaglandin imbalance, abnormal fibrinolysis

**Iatrogenic:**
- Anticoagulants
- Copper IUD (especially first 3-6 months)
- Hormone therapy

**Evaluation:**

**History:**
- Quantify bleeding (pads/tampons, clots, duration)
- Pattern (regular vs irregular)
- Associated symptoms (pain, pressure, intermenstrual bleeding)
- Bleeding history (dental procedures, surgeries)

**Laboratory:**
- CBC with iron studies
- TSH
- Consider: PT/PTT, von Willebrand panel, factor levels
- Pregnancy test

**Imaging:**
- Transvaginal ultrasound (first-line)
- Saline infusion sonography (SIS) for cavity evaluation
- MRI for adenomyosis or fibroid mapping

**Tissue Sampling:**
- Endometrial biopsy: >45 years, or younger with risk factors
- Hysteroscopy with directed biopsy if abnormality seen`,
      keyTerms: [
        { term: 'FIGO', definition: 'International Federation of Gynecology and Obstetrics' },
        { term: 'SIS', definition: 'Saline infusion sonography - ultrasound with fluid in uterus to see cavity' },
        { term: 'submucosal fibroid', definition: 'Fibroid growing into the uterine cavity, most likely to cause bleeding' },
        { term: 'von Willebrand disease', definition: 'Most common inherited bleeding disorder affecting women' },
        { term: 'spiral arteries', definition: 'Blood vessels in the endometrium that supply and shed during menstruation' },
      ],
      clinicalNotes: 'Approximately 1 in 10 women with HMB since menarche have an underlying bleeding disorder. The presence of regular cycles typically indicates ovulatory bleeding; irregular heavy bleeding suggests anovulation.',
    },
    4: {
      level: 4,
      summary: 'Management of HMB requires phenotype-specific treatment selection, balancing efficacy, fertility preservation, and patient preferences across medical, procedural, and surgical options.',
      explanation: `**Hemostatic Mechanisms in Menstruation:**

Normal menstrual hemostasis involves:
- Endothelin-mediated vasoconstriction
- Platelet aggregation at spiral artery stumps
- Tissue factor-initiated coagulation
- Balanced fibrinolysis (tPA vs PAI-1)
- Rapid re-epithelialization

**Molecular Pathology:**

**Excessive Fibrinolysis:**
- Increased tissue plasminogen activator (tPA)
- Decreased plasminogen activator inhibitor (PAI-1)
- Basis for tranexamic acid therapy

**Prostaglandin Imbalance:**
- Increased PGE2 and PGI2 (vasodilation)
- Decreased PGF2α and thromboxane (vasoconstriction)
- Basis for NSAID therapy

**Local Factors:**
- Abnormal endometrial expression of matrix metalloproteinases
- Altered vascular endothelial growth factor (VEGF)

**Coagulopathy Evaluation:**

**When to Screen:**
- HMB since menarche
- Family history of bleeding disorder
- Personal history: Easy bruising, bleeding gums, postoperative bleeding
- Failed response to hormonal treatment

**Testing:**
- von Willebrand factor antigen and activity
- Factor VIII
- Platelet function analyzer (PFA-100)
- Consider hematology referral

**Treatment Algorithm:**

**First-Line Medical Therapy:**

**Hormonal:**
- LNG-IUD (52mg): Most effective medical option
  - Reduces bleeding 71-96%
  - Also provides contraception
  - First-line for most women without structural abnormality
- Combined oral contraceptives
  - Extended cycle regimens often preferred
  - Reduce bleeding ~40-50%
- Oral progestins (cyclic or continuous)
  - Norethindrone, medroxyprogesterone

**Non-Hormonal:**
- Tranexamic acid
  - Antifibrinolytic
  - Reduces bleeding ~40-50%
  - Use during menstruation only
  - Avoid with thrombotic risk
- NSAIDs
  - Reduce bleeding ~20-40%
  - Also help with dysmenorrhea
  - Use during menstruation

**Second-Line / Adjunctive:**
- GnRH agonists/antagonists (short-term or with add-back)
- Danazol (androgenic side effects limit use)

**Surgical/Procedural:**

**Fertility-Sparing:**
- Hysteroscopic myomectomy (submucosal fibroids)
- Hysteroscopic polypectomy
- Endometrial ablation
  - Effective but precludes future pregnancy
  - Multiple techniques: radiofrequency, thermal, microwave

**Definitive:**
- Hysterectomy
  - Most definitive treatment
  - Consider route: vaginal, laparoscopic, robotic, abdominal
  - Indicated for failed medical/procedural treatment, large uteri, malignancy

**Uterine Artery Embolization:**
- For fibroids
- Reduces bleeding in ~85%
- Fertility implications uncertain

**Special Populations:**

**Adolescents:**
- Higher likelihood of bleeding disorder
- Hormonal therapy often first-line
- Avoid invasive procedures if possible

**Perimenopause:**
- Exclude hyperplasia/malignancy
- LNG-IUD excellent option
- Consider definitive treatment if near menopause

**Desire for Fertility:**
- Avoid ablation
- Medical therapy or fertility-sparing surgery
- Address fibroids/polyps surgically if affecting fertility`,
      keyTerms: [
        { term: 'LNG-IUD', definition: 'Levonorgestrel intrauterine device (Mirena, Liletta) - first-line HMB treatment' },
        { term: 'tranexamic acid', definition: 'Antifibrinolytic medication reducing menstrual blood loss' },
        { term: 'endometrial ablation', definition: 'Procedure destroying the uterine lining to reduce bleeding' },
        { term: 'uterine artery embolization', definition: 'Interventional procedure blocking blood supply to fibroids' },
        { term: 'PFA-100', definition: 'Platelet function analyzer screening test for platelet disorders' },
      ],
      clinicalNotes: 'The LNG-IUD is first-line for most HMB without structural abnormality (NICE, ACOG). For submucosal fibroids or polyps, hysteroscopic resection is preferred. Endometrial ablation has ~20% failure rate and should include reliable contraception or sterilization.',
    },
    5: {
      level: 5,
      summary: 'Evidence-based HMB management integrates guideline-directed therapy, procedural innovation, and shared decision-making with attention to quality metrics and value-based outcomes.',
      explanation: `**Current Evidence and Guidelines:**

**ACOG Practice Bulletin (Updated 2021):**
- LNG-IUD first-line medical therapy (Grade A)
- Tranexamic acid effective for non-structural HMB
- Endometrial biopsy: >45 years or with risk factors
- Hysteroscopy for suspected intracavitary pathology

**NICE Guidelines (Updated 2021):**
- First-line: LNG-IUD (if acceptable and no structural/histologic abnormality)
- Second-line: Tranexamic acid, NSAIDs, combined hormonal contraceptives, cyclic progestins
- Consider patient preferences regarding contraception

**Comparative Effectiveness:**

**Medical Therapy Efficacy:**
| Treatment | Blood Loss Reduction | Level of Evidence |
|-----------|---------------------|-------------------|
| LNG-IUD | 71-96% | High (RCTs) |
| Tranexamic acid | 40-50% | High |
| NSAIDs | 20-40% | High |
| COCs | 40-50% | Moderate |
| Oral progestins | Variable | Moderate |

**LNG-IUD Evidence:**
- ECLIPSE trial: LNG-IUD superior to usual care
- Improves quality of life, reduces surgical intervention
- Effective even with small fibroids (<3cm)

**Procedural Innovations:**

**Second-Generation Ablation:**
- Radiofrequency (NovaSure): ~90% satisfaction at 1 year
- Thermal balloon (ThermaChoice)
- Microwave
- Comparable efficacy; choice often based on training/availability

**Hysteroscopic Fibroid Removal:**
- Cold loop resection
- Morcellation devices (faster for large fibroids)
- Office-based approaches for small polyps

**Uterine-Sparing Surgery for Fibroids:**
- Laparoscopic/robotic myomectomy for intramural/subserosal
- Systematic review: reduces bleeding, high recurrence rate long-term

**Emerging Therapies:**

**GnRH Antagonists with Add-Back:**
- Elagolix, relugolix (with add-back estrogen/progestin)
- Reduce fibroid-related bleeding
- Avoid bone loss with add-back

**Uterine Fibroid Embolization:**
- Non-surgical option for fibroids
- ~85% have significant improvement
- Re-intervention rate ~15-20% at 5 years
- Not recommended if pregnancy desired

**Quality Metrics:**

**Patient-Centered Outcomes:**
- Menstrual-related quality of life (MMAS, PBAC)
- Sexual function
- Time to treatment effect
- Need for re-intervention

**Process Measures:**
- Time from presentation to diagnosis
- Use of guideline-recommended first-line therapy
- Rate of endometrial sampling before surgery (when indicated)

**Special Considerations:**

**Inherited Bleeding Disorders:**
- vWD treatment: DDAVP, vWF concentrate, antifibrinolytics
- LNG-IUD effective and commonly used
- Coordinate with hematology

**Anticoagulated Patients:**
- Manage anticoagulation around procedures
- Tranexamic acid may be contraindicated
- LNG-IUD often helpful

**Failed Medical Therapy:**
- Reassess diagnosis (missed structural cause?)
- Consider compliance issues
- Procedural options if fertility not desired
- Surgical consultation

**Preoperative Anemia Management:**
- Iron supplementation (oral vs IV)
- Consider GnRH agonist to induce amenorrhea preoperatively
- IV iron faster if severe anemia and urgent surgery

**Value-Based Care:**
- LNG-IUD cost-effective vs. surgery
- Endometrial ablation cost-effective vs. hysterectomy short-term
- Hysterectomy most definitive; consider age, severity, patient preference

**Documentation for Coding:**
- Document PBAC or equivalent
- Specify FIGO classification
- Note impact on quality of life
- Document failed treatments for surgical authorization`,
      keyTerms: [
        { term: 'ECLIPSE trial', definition: 'RCT demonstrating LNG-IUD superiority over usual care for HMB' },
        { term: 'MMAS', definition: 'Menorrhagia Multi-Attribute Scale - quality of life measure' },
        { term: 'NovaSure', definition: 'Radiofrequency endometrial ablation device' },
        { term: 'DDAVP', definition: 'Desmopressin - treatment for von Willebrand disease' },
        { term: 'elagolix', definition: 'Oral GnRH antagonist approved for fibroid-related bleeding' },
      ],
      clinicalNotes: `Clinical pearls for practice:
- Trial of medical therapy should precede most procedural interventions
- LNG-IUD can be placed even with small fibroids/mildly enlarged uteri
- Endometrial ablation requires reliable contraception - discuss at time of consent
- Document failed therapies carefully for insurance authorization of procedures
- IV iron (ferric carboxymaltose, ferumoxytol) rapidly corrects anemia pre-surgery
- Post-ablation syndrome (pain from occult pregnancy or hematometra) occurs in ~10%
- Consider patient's proximity to menopause in treatment planning`,
    },
  },

  media: [],

  citations: [
    {
      id: 'acog-hmb-2021',
      type: 'article',
      title: 'Management of Abnormal Uterine Bleeding Associated with Ovulatory Dysfunction',
      source: 'ACOG Practice Bulletin No. 136',
      license: 'Proprietary - Referenced',
    },
    {
      id: 'nice-hmb-2021',
      type: 'website',
      title: 'Heavy menstrual bleeding: assessment and management',
      source: 'NICE Guideline NG88',
      url: 'https://www.nice.org.uk/guidance/ng88',
      license: 'Open Government Licence',
    },
  ],

  crossReferences: [
    { targetId: 'normal-menstrual-cycle', targetType: 'topic', relationship: 'parent', label: 'Normal Menstrual Cycle' },
    { targetId: 'fibroids', targetType: 'condition', relationship: 'related', label: 'Uterine Fibroids' },
    { targetId: 'endometriosis', targetType: 'condition', relationship: 'related', label: 'Endometriosis' },
    { targetId: 'contraception', targetType: 'topic', relationship: 'related', label: 'Contraception Options' },
  ],

  tags: {
    systems: ['reproductive'],
    topics: ['womens-health', 'menstrual-health', 'gynecology'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      shelf: ['obstetrics-gynecology'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default HEAVY_PERIODS;
