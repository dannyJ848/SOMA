import { WomensHealthContent, LegacyWomensHealthContent } from '../types';

export const uterineFibroidsContent: LegacyWomensHealthContent = {
  id: 'condition-uterine-fibroids',
  type: 'condition',
  name: 'Uterine Fibroids',
  alternateNames: ['Leiomyomas', 'Myomas', 'Fibroid tumors'],

  levels: {
    1: {
      level: 1,
      summary: 'Uterine fibroids are non-cancerous growths in the uterus that are very common and often cause no symptoms, but can cause heavy bleeding or other problems in some women.',
      explanation: `**What Are Fibroids?**
Fibroids are benign (non-cancerous) growths made of muscle and tissue that develop in or on the uterus. They're very common - up to 80% of women have them by age 50.

**Symptoms (When They Occur):**
- Heavy or prolonged periods
- Bleeding between periods
- Pelvic pressure or pain
- Frequent urination
- Constipation
- Back pain
- Difficulty getting pregnant

**Many Women Have No Symptoms:**
- Often found during routine exams or ultrasounds
- May not need treatment if not causing problems

**Treatment Options:**
- Watchful waiting (if no symptoms)
- Medications for symptoms
- Procedures to shrink or remove fibroids
- Surgery (myomectomy or hysterectomy)

**Important Facts:**
- Fibroids are NOT cancer
- They often shrink after menopause
- Treatment depends on symptoms and future pregnancy plans
- Many options exist besides hysterectomy`,
      keyTerms: [
        { term: 'fibroids', definition: 'Non-cancerous growths in the uterus made of muscle and tissue' },
        { term: 'benign', definition: 'Not cancer, not dangerous' },
        { term: 'hysterectomy', definition: 'Surgery to remove the uterus' },
      ],
      analogies: ['Think of fibroids like knots in wood - they\'re a different texture from the surrounding tissue, come in different sizes, and are usually harmless.'],
      examples: ['Having very heavy periods that cause anemia', 'Needing to urinate frequently because a fibroid is pressing on the bladder'],
    },
    2: {
      level: 2,
      summary: 'Uterine fibroids are classified by location (submucosal, intramural, subserosal) which determines their impact on symptoms and fertility, with treatment options ranging from medical management to uterine-sparing procedures to hysterectomy.',
      explanation: `**Classification by Location:**

*Submucosal:*
- Protrude into uterine cavity
- Most likely to cause heavy bleeding
- Most impact on fertility
- Can be removed hysteroscopically

*Intramural:*
- Within the uterine wall
- Most common type
- May cause bleeding, bulk symptoms

*Subserosal:*
- Project outward from uterus
- Cause bulk/pressure symptoms
- Less impact on bleeding

*Pedunculated:*
- Attached by a stalk
- May cause acute pain if torsion occurs

**Symptoms by Type:**

*Bleeding:*
- Heavy menstrual bleeding (menorrhagia)
- Prolonged periods
- Iron deficiency anemia

*Bulk/Pressure:*
- Pelvic pressure/fullness
- Urinary frequency (anterior fibroid)
- Constipation (posterior fibroid)
- Abdominal enlargement

*Pain:*
- Pelvic pain
- Dysmenorrhea
- Acute pain (degeneration, torsion)

**Evaluation:**
- History and pelvic exam
- Transvaginal ultrasound (first-line imaging)
- Saline-infusion sonography (for cavity assessment)
- MRI (for surgical planning)
- CBC (for anemia)

**Treatment Options:**

*Medical:*
- Hormonal: CHC, progestins, LNG-IUD
- GnRH agonists/antagonists
- Tranexamic acid (for bleeding)

*Procedural:*
- Uterine artery embolization (UAE)
- MRI-guided focused ultrasound (MRgFUS)
- Hysteroscopic myomectomy

*Surgical:*
- Myomectomy (uterine-sparing)
- Hysterectomy (definitive)`,
      keyTerms: [
        { term: 'submucosal', definition: 'Fibroid growing into the uterine cavity' },
        { term: 'intramural', definition: 'Fibroid within the muscular wall of the uterus' },
        { term: 'subserosal', definition: 'Fibroid growing outward from the uterus' },
        { term: 'myomectomy', definition: 'Surgery to remove fibroids while preserving the uterus' },
      ],
    },
    3: {
      level: 3,
      summary: 'Fibroid management requires assessment of symptom severity, fertility goals, and fibroid characteristics to select from evidence-based medical, procedural, and surgical options.',
      explanation: `**Factors Guiding Treatment:**

*Patient Factors:*
- Symptom type and severity
- Desire for future pregnancy
- Proximity to menopause
- Surgical candidacy
- Patient preference

*Fibroid Factors:*
- Location (FIGO classification)
- Size and number
- Relationship to cavity

**FIGO Classification:**
- 0: Pedunculated intracavitary
- 1: <50% intramural
- 2: ≥50% intramural
- 3: Contacts endometrium, 100% intramural
- 4: Intramural
- 5: Subserosal ≥50% intramural
- 6: Subserosal <50% intramural
- 7: Subserosal pedunculated
- 8: Other (cervical, parasitic)

**Medical Management:**

*For Bleeding:*
- Tranexamic acid: 650-1300 mg TID during menses
- LNG-IUD: Effective if cavity not too distorted
- CHC: Continuous or cyclic

*For Shrinkage:*
- GnRH agonists: Leuprolide, max 6 months without add-back
- GnRH antagonists: Elagolix, relugolix-based combinations
- Often used preoperatively

**Uterine-Sparing Procedures:**

*Uterine Artery Embolization (UAE):*
- Interventional radiology procedure
- Particles block blood supply to fibroids
- 80-90% symptom improvement
- May affect fertility (controversial)

*MRI-Guided Focused Ultrasound:*
- Non-invasive, outpatient
- Thermal ablation of fibroids
- Limited to certain fibroid types
- Lower re-intervention rate than UAE

*Hysteroscopic Myomectomy:*
- For submucosal fibroids (Type 0, 1, 2)
- Outpatient procedure
- Preserves fertility

*Abdominal/Laparoscopic Myomectomy:*
- For intramural or subserosal fibroids
- Requires surgical skill
- Uterine rupture risk in future pregnancy (rare)

**Hysterectomy:**
- Definitive treatment
- When fertility not desired
- Failed other treatments
- Large or numerous fibroids`,
      keyTerms: [
        { term: 'UAE', definition: 'Uterine artery embolization; minimally invasive procedure blocking blood flow to fibroids' },
        { term: 'MRgFUS', definition: 'MRI-guided focused ultrasound; non-invasive thermal ablation' },
        { term: 'FIGO classification', definition: 'International system for categorizing fibroid location' },
        { term: 'relugolix', definition: 'Oral GnRH antagonist in combination product for fibroid symptoms' },
      ],
      clinicalNotes: 'UAE and MRgFUS are not recommended before fertility treatment - insufficient data on safety. Submucosal fibroids (Type 0-2) most impact fertility and are best treated hysteroscopically. Myomectomy requires discussion of future uterine rupture risk.',
    },
    4: {
      level: 4,
      summary: 'Advanced fibroid management involves patient-centered decision-making among multiple treatment modalities, addressing disparities in fibroid burden and treatment, and managing complex surgical scenarios.',
      explanation: `**Complex Surgical Decision-Making:**

*Myomectomy vs. Hysterectomy:*
- Patient preference paramount
- Fertility desire
- Recurrence risk with myomectomy (15-30% at 5 years)
- Reoperation rate after myomectomy
- Quality of life considerations

*Route of Hysterectomy:*
- Vaginal preferred when feasible
- Laparoscopic/robotic for large uteri
- Abdominal if very large or complex anatomy
- Minimize morcellation concerns

*Morcellation Controversy:*
- Power morcellation of fibroids
- Rare leiomyosarcoma (1 in 500-1000)
- Contained extraction bags
- Thorough consent discussion

**Fertility Considerations:**

*Which Fibroids Affect Fertility:*
- Submucosal (Type 0-2): Clear impact
- Intramural distorting cavity: Likely impact
- Subserosal/non-cavity-distorting: Unclear impact

*When to Treat Before Fertility:*
- Submucosal fibroids: Recommend removal
- Large intramural (>4-5 cm): Consider removal
- Recurrent pregnancy loss with fibroids: Consider removal

*Post-Myomectomy:*
- Wait 3-6 months before conception
- Cesarean delivery if myometrium entered

**Managing Fibroids in Pregnancy:**
- Most don't cause problems
- Degeneration: Pain, fever (supportive treatment)
- Growth: May enlarge, usually first half
- Delivery: Cesarean if obstruction

**Racial Disparities:**

*Increased Burden:*
- 3x higher incidence in Black women
- Earlier onset
- More severe symptoms
- Higher hysterectomy rates

*Contributing Factors:*
- Biological (vitamin D, genetics)
- Environmental (hair products, diet)
- Healthcare access
- Implicit bias in treatment recommendations

*Addressing Disparities:*
- Equal presentation of treatment options
- Access to uterine-sparing procedures
- Research in diverse populations

**Emerging Therapies:**

*Oriahnn (elagolix combination):*
- Approved for heavy bleeding
- Estrogen-progestin add-back included
- Reduces fibroid volume
- 2-year max use

*Myfembree (relugolix combination):*
- Once-daily oral medication
- Similar mechanism to Oriahnn
- May have fewer side effects`,
      keyTerms: [
        { term: 'morcellation', definition: 'Breaking tissue into pieces for laparoscopic removal; controversial for fibroids' },
        { term: 'leiomyosarcoma', definition: 'Rare malignant uterine tumor that can be mistaken for fibroid' },
        { term: 'red degeneration', definition: 'Fibroid hemorrhage causing acute pain, often in pregnancy' },
        { term: 'contained extraction', definition: 'Use of bag during morcellation to prevent tissue spread' },
      ],
      clinicalNotes: 'Counsel all patients about uterine-sparing options including UAE before proceeding to hysterectomy. Document shared decision-making. Black women have higher fibroid burden and deserve equal access to all treatment options.',
    },
    5: {
      level: 5,
      summary: 'Expert fibroid care involves addressing systemic disparities, implementing evidence-based quality measures, understanding emerging genetic and epigenetic research, and counseling through treatment uncertainty.',
      explanation: `**Disparities in Care:**

*Documented Inequities:*
- Black women: 2-3x higher hysterectomy rate
- Lower rates of minimally invasive surgery
- Less likely to be offered uterine-sparing options
- Longer time to diagnosis

*Root Causes:*
- Provider implicit bias
- Healthcare access
- Insurance coverage
- Patient awareness of options
- Research gaps

*Quality Improvement:*
- Standardized counseling about all options
- Track outcomes by race
- Remove barriers to UAE, myomectomy
- Diversify clinical trials

**Emerging Research:**

*Genetics:*
- MED12 mutations in 70% of fibroids
- Hereditary leiomyomatosis and renal cell cancer (HLRCC)
- Fumarate hydratase mutations
- Targeted therapy potential

*Epigenetics:*
- DNA methylation patterns
- Environmental influences
- Vitamin D deficiency role

*Novel Treatments:*
- Selective progesterone receptor modulators (SPRMs)
- Vitamin D supplementation
- Green tea extract (EGCG)
- Immunotherapy approaches (research)

**Quality Metrics:**

*Institutional:*
- Proportion offered uterine-sparing options
- Route of hysterectomy (minimally invasive %)
- Outcomes by race/ethnicity
- Re-intervention rates

*Patient-Reported:*
- Symptom improvement
- Quality of life
- Satisfaction with care
- Regret measures

**Counseling Through Uncertainty:**

*Treatment Selection:*
- No clear "best" option for many patients
- Trade-offs: Invasiveness vs. durability
- Future fertility considerations
- Recovery time, complications

*Long-term Outcomes:*
- Limited comparative effectiveness data
- Patient values matter
- Shared decision-making essential

*Communication:*
- Explain all options
- Use visual aids, decision aids
- Check understanding
- Document thoroughly

**Special Scenarios:**

*Giant Fibroids (>10 cm):*
- GnRH agonist pretreatment
- May require open surgery
- Consider multidisciplinary planning

*Diffuse Uterine Fibroids:*
- Multiple, scattered fibroids
- Myomectomy challenging
- UAE may be reasonable option
- Hysterectomy often needed

*Recurrent Fibroids:*
- Common after myomectomy
- Re-myomectomy possible but complex
- Consider definitive treatment if family complete`,
      keyTerms: [
        { term: 'MED12', definition: 'Gene commonly mutated in uterine fibroids' },
        { term: 'SPRM', definition: 'Selective progesterone receptor modulator; potential medical therapy for fibroids' },
        { term: 'HLRCC', definition: 'Hereditary leiomyomatosis and renal cell cancer syndrome; genetic condition with aggressive fibroids' },
        { term: 'shared decision-making', definition: 'Collaborative process where patients and providers choose treatments together' },
      ],
      clinicalNotes: 'Track your practice patterns by race - disparities often exist without awareness. SPRMs (ulipristal) were withdrawn due to liver toxicity but research continues. For patients with numerous fibroids desiring fertility, realistic counseling about myomectomy limitations is needed.',
    },
  },
  media: [],
  citations: [
    {
      id: 'acog-fibroids-pb',
      type: 'article',
      title: 'ACOG Practice Bulletin: Uterine Fibroids',
      source: 'American College of Obstetricians and Gynecologists',
      license: 'Copyright ACOG',
    },
  ],
  crossReferences: [
    { targetId: 'condition-menstrual-disorders', targetType: 'condition', relationship: 'related', label: 'Menstrual Disorders' },
    { targetId: 'condition-pelvic-pain', targetType: 'condition', relationship: 'related', label: 'Pelvic Pain' },
    { targetId: 'concept-fertility-basics', targetType: 'concept', relationship: 'related', label: 'Fertility' },
  ],
  tags: {
    systems: ['reproductive'],
    topics: ['gynecology', 'patient-education', 'womens-health'],
    keywords: ['fibroids', 'leiomyoma', 'heavy periods', 'myomectomy', 'uterine fibroids'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, shelf: ['obgyn'] },
  },
  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};
