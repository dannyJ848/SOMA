/**
 * Abnormal Uterine Bleeding
 *
 * Comprehensive coverage of AUB including classification,
 * evaluation, and management.
 */

import { EducationalContent } from '../../../types';

export const abnormalUterineBleeding: EducationalContent = {
  id: 'obgyn-conditions-aub',
  type: 'condition',
  name: 'Abnormal Uterine Bleeding',
  alternateNames: ['AUB', 'Heavy Menstrual Bleeding', 'Dysfunctional Uterine Bleeding'],

  levels: {
    1: {
      level: 1,
      summary: 'Abnormal uterine bleeding is when periods are too heavy, too long, too frequent, or happen at unexpected times.',
      explanation: `**What is normal?**
- Period every 24-38 days
- Bleeding for 4-8 days
- Using about 3-6 pads or tampons per day

**When is bleeding abnormal?**
- Periods that last longer than 8 days
- Bleeding so heavy you soak through a pad/tampon in an hour
- Bleeding between periods
- Periods that come more often than every 24 days
- Bleeding after menopause

**Common causes:**
- Hormone imbalances (very common in teens and near menopause)
- Fibroids (non-cancerous growths)
- Polyps (small growths in the uterus)
- Birth control effects
- Pregnancy problems
- Thyroid problems
- Rarely, cancer

**When to see a doctor:**
- Bleeding through pads/tampons very quickly
- Periods that last more than 7 days
- Feeling tired or weak (could be anemia)
- Bleeding after sex
- Any bleeding after menopause`,
      keyTerms: [
        { term: 'abnormal uterine bleeding', definition: 'Periods that are heavier, longer, or more irregular than normal' },
        { term: 'anemia', definition: 'Low blood count from losing too much blood; causes tiredness' },
        { term: 'polyp', definition: 'A small, usually harmless growth that can form inside the uterus' },
      ],
      analogies: [
        'Normal periods are like a monthly schedule that follows a predictable pattern; abnormal bleeding is when that schedule goes haywire.',
      ],
      examples: [
        'A woman who needs to change her pad every hour for several hours has abnormally heavy bleeding.',
      ],
    },
    2: {
      level: 2,
      summary: 'Abnormal uterine bleeding is classified using the PALM-COEIN system, which categorizes causes as structural (Polyp, Adenomyosis, Leiomyoma, Malignancy) or non-structural (Coagulopathy, Ovulatory dysfunction, Endometrial, Iatrogenic, Not classified).',
      explanation: `**FIGO Definition of Normal:**
- Cycle length: 24-38 days
- Cycle regularity: ±7-9 days variation
- Duration: ≤8 days
- Volume: Patient-perceived normal

**PALM-COEIN Classification:**

**Structural (PALM):**
- **P**olyp: Endometrial or cervical
- **A**denomyosis: Endometrium in myometrium
- **L**eiomyoma: Fibroids (submucosal most symptomatic)
- **M**alignancy: Endometrial cancer, hyperplasia

**Non-structural (COEIN):**
- **C**oagulopathy: Bleeding disorders (von Willebrand)
- **O**vulatory dysfunction: Anovulation/oligo-ovulation
- **E**ndometrial: Primary endometrial cause
- **I**atrogenic: Medications, IUD
- **N**ot classified: AV malformation, others

**Evaluation:**

*All patients:*
- History (bleeding pattern, medications, symptoms)
- Pregnancy test
- CBC (assess for anemia)
- Physical and pelvic exam

*Additional based on findings:*
- TSH (thyroid)
- Coagulation studies (heavy bleeding since menarche)
- Transvaginal ultrasound (structural causes)
- Endometrial biopsy (>45 years or risk factors)

**Initial Management:**

*Acute heavy bleeding:*
- High-dose hormonal therapy (IV estrogen or high-dose progestins)
- Tranexamic acid
- Consider transfusion if severe

*Chronic management:*
- Hormonal: OCPs, progestins, IUD
- Non-hormonal: NSAIDs, tranexamic acid
- Surgical: Ablation, myomectomy, hysterectomy`,
      keyTerms: [
        { term: 'PALM-COEIN', definition: 'Classification system for causes of abnormal uterine bleeding' },
        { term: 'endometrial biopsy', definition: 'Sampling of uterine lining to check for cancer or precancer' },
        { term: 'tranexamic acid', definition: 'Non-hormonal medication that reduces bleeding by stabilizing clots' },
      ],
    },
    3: {
      level: 3,
      summary: 'AUB evaluation requires systematic assessment using PALM-COEIN, age-appropriate endometrial sampling, and targeted imaging to guide phenotype-specific medical or surgical management.',
      explanation: `**Systematic Evaluation:**

*Clinical Assessment:*
- Characterize bleeding pattern
- Associated symptoms (pain, pressure)
- Reproductive history
- Medication/contraceptive history
- Family history (bleeding disorders)

*Risk Stratification for Malignancy:*
- Age >45 years
- Obesity
- Anovulation/PCOS
- Tamoxifen use
- Diabetes
- Family history (Lynch syndrome)

**Imaging:**

*Transvaginal Ultrasound:*
- First-line imaging
- Assess endometrial thickness
- Identify fibroids, polyps
- Ovarian assessment

*Saline Infusion Sonography:*
- Improved cavity assessment
- Better for polyps, submucosal fibroids
- Guides hysteroscopic planning

*MRI:*
- Fibroid mapping
- Adenomyosis diagnosis
- Preoperative planning

**Endometrial Sampling:**

*Indications:*
- Age ≥45 with AUB
- Age <45 with risk factors
- Persistent bleeding despite treatment
- Failed medical management

*Methods:*
- Office endometrial biopsy (Pipelle)
- Hysteroscopy with biopsy
- D&C (less common now)

**Management by Cause:**

*Ovulatory Dysfunction (AUB-O):*
- Most common cause in reproductive age
- Hormonal regulation: OCPs, progestins
- Address underlying cause (PCOS, thyroid)

*Structural Causes:*
- Polyps: Hysteroscopic polypectomy
- Submucosal fibroids: Hysteroscopic resection
- Intramural/subserosal fibroids: Medical or myomectomy
- Adenomyosis: Medical, ablation, or hysterectomy

*Coagulopathy (AUB-C):*
- Screen if: Heavy bleeding since menarche, family history
- von Willebrand disease most common
- Hematology referral
- Tranexamic acid, hormonal therapy
- DDAVP for vWD

**Medical Options:**

| Treatment | Mechanism | Bleeding Reduction |
|-----------|-----------|-------------------|
| LNG-IUD | Local progestin | 80-90% |
| Combined OCP | Ovarian suppression | 40-50% |
| Cyclic progestin | Endometrial stabilization | 30-40% |
| Tranexamic acid | Antifibrinolytic | 40-50% |
| NSAIDs | Prostaglandin inhibition | 20-30% |`,
      keyTerms: [
        { term: 'saline infusion sonography', definition: 'Ultrasound with saline in uterine cavity for enhanced visualization' },
        { term: 'AUB-O', definition: 'Abnormal uterine bleeding due to ovulatory dysfunction' },
        { term: 'von Willebrand disease', definition: 'Most common inherited bleeding disorder; affects up to 13% of women with heavy periods' },
      ],
      clinicalNotes: 'Heavy menstrual bleeding since menarche should prompt evaluation for bleeding disorders. Up to 13% of women with heavy periods have von Willebrand disease. LNG-IUD is highly effective first-line therapy for many causes of AUB.',
    },
    4: {
      level: 4,
      summary: 'AUB management requires integration of medical and surgical options based on etiology, reproductive goals, and patient preferences, with attention to quality of life and long-term outcomes.',
      explanation: `**Advanced Diagnostics:**

*Hysteroscopy:*
- Direct visualization of cavity
- See-and-treat approach
- Outpatient office vs. operating room
- Definitive for polyps, submucosal fibroids

*Endometrial Sampling Adequacy:*
- "Insufficient tissue" requires follow-up
- Consider hysteroscopy if persistent symptoms
- Correlate with imaging

*Genetic Testing:*
- Lynch syndrome screening in young endometrial cancer
- Family history assessment
- MSI/MMR testing on biopsy

**Surgical Management:**

*Endometrial Ablation:*
- Destroys endometrial lining
- Not for those desiring pregnancy
- 80-90% improvement, 15-20% failure
- Sterilization recommended concurrently
- Various techniques: Radiofrequency, thermal, cryotherapy

*Hysteroscopic Procedures:*
- Polypectomy
- Myomectomy (FIGO 0-2)
- Endometrial resection
- Outpatient feasibility increasing

*Hysterectomy:*
- Definitive treatment
- Minimally invasive preferred
- Consider BSO counseling
- Risk-benefit discussion

**Specific Situations:**

*Acute Heavy Bleeding:*
- Hemodynamic assessment
- IV estrogen (if available) or high-dose progestin
- Tranexamic acid IV/PO
- Foley balloon tamponade (temporizing)
- Surgical if refractory
- Transfusion per guidelines

*Adolescent AUB:*
- Anovulation most common
- Lower threshold for bleeding disorder workup
- Hormonal therapy first-line
- Avoid early surgery if possible

*Perimenopausal:*
- Increased anovulation
- Higher malignancy risk
- Liberal endometrial sampling
- Bridge to menopause medically if appropriate

*Postmenopausal Bleeding:*
- Always warrants evaluation
- Endometrial thickness threshold (4-5 mm)
- Biopsy or hysteroscopy
- 10% will have malignancy

**Quality of Life:**

*Impact Assessment:*
- Validated questionnaires
- Work/school missed
- Social limitations
- Sexual function
- Mental health

*Patient-Centered Outcomes:*
- Bleeding improvement
- Satisfaction with treatment
- Side effect profile
- Return to normal activities`,
      keyTerms: [
        { term: 'endometrial ablation', definition: 'Procedure destroying uterine lining to reduce or stop bleeding; not for fertility' },
        { term: 'Lynch syndrome', definition: 'Hereditary cancer syndrome with increased endometrial cancer risk at young age' },
        { term: 'see-and-treat hysteroscopy', definition: 'Diagnostic and therapeutic hysteroscopy in single procedure' },
      ],
      clinicalNotes: 'Postmenopausal bleeding requires evaluation - about 10% have endometrial cancer. The threshold endometrial thickness (4-5 mm) on ultrasound guides need for biopsy. Never attribute postmenopausal bleeding to "just hormones" without evaluation.',
    },
    5: {
      level: 5,
      summary: 'Contemporary AUB care emphasizes evidence-based algorithms, minimally invasive approaches, shared decision-making, and attention to health equity in diagnosis and treatment access.',
      explanation: `**Guideline Updates:**

*ACOG 2021 Recommendations:*
- Systematic PALM-COEIN classification
- LNG-IUD first-line for many causes
- Liberal sampling over age 45
- Bleeding disorder screening criteria

*NICE Guidelines:*
- LNG-IUD as first treatment offer
- Tranexamic/NSAID if hormones declined
- Second-line: Other hormonal options
- Surgical for refractory or structural

**Treatment Algorithms:**

*No Structural Cause:*
1. Patient desires contraception → LNG-IUD or combined hormonal
2. Contraception not needed → Tranexamic acid, cyclic progestin
3. Consider underlying cause treatment (thyroid, PCOS)
4. Refractory → Ablation or hysterectomy

*Structural Cause:*
- Polyps → Hysteroscopic removal
- Submucosal fibroids → Hysteroscopic if appropriate
- Other fibroids → Medical or myomectomy
- Adenomyosis → Medical, then ablation or hysterectomy

**Emerging Approaches:**

*Medical:*
- GnRH antagonists (elagolix, relugolix)
- Extended oral regimens
- Novel delivery systems

*Surgical:*
- Office hysteroscopy expansion
- Enhanced recovery protocols
- Robotic approaches

*Technology:*
- AI-assisted imaging
- Point-of-care bleeding assessment
- Patient-reported outcome apps

**Disparities and Access:**

*Known Disparities:*
- Black women: Higher fibroid burden, more hysterectomies
- Lower SES: Delayed diagnosis, limited treatment options
- Rural: Access to specialists limited
- Insurance: Coverage for newer treatments variable

*Improving Equity:*
- Telemedicine consultation
- Office-based procedures
- Protocol standardization
- Patient navigation programs

**Quality Metrics:**

*Process:*
- PALM-COEIN documentation
- Appropriate sampling rates
- Minimally invasive surgery rates
- Time to treatment

*Outcomes:*
- Bleeding improvement
- Quality of life change
- Surgical complication rates
- Patient satisfaction

**Shared Decision-Making:**

*Key Discussion Points:*
- Natural history of condition
- All treatment options
- Success rates and failure rates
- Side effects and risks
- Impact on fertility
- Recovery time
- Cost considerations

*Decision Aids:*
- Visual bleeding assessment
- Treatment comparison tools
- Patient testimonials
- Recovery expectations

**Research Needs:**

*Identified Gaps:*
- Optimal treatment sequencing
- Long-term outcomes data
- Comparative effectiveness
- Patient-reported outcomes
- Implementation science
- Disparities research`,
      keyTerms: [
        { term: 'LNG-IUD', definition: 'Levonorgestrel intrauterine device; highly effective first-line treatment for AUB' },
        { term: 'comparative effectiveness', definition: 'Research comparing real-world outcomes of different treatments' },
        { term: 'patient navigation', definition: 'Programs helping patients access appropriate care and overcome barriers' },
      ],
      clinicalNotes: 'The LNG-IUD should be offered as first-line treatment for most causes of heavy menstrual bleeding - it is as effective as surgical options for many women. Shared decision-making is essential given the range of options with different trade-offs.',
    },
  },

  media: [
    {
      id: 'palm-coein-diagram',
      type: 'diagram',
      filename: 'palm-coein-classification.svg',
      title: 'PALM-COEIN Classification',
      description: 'Visual guide to the AUB classification system',
    },
  ],

  citations: [
    {
      id: 'acog-aub',
      type: 'article',
      title: 'Management of Abnormal Uterine Bleeding',
      source: 'ACOG Practice Bulletin No. 128',
      authors: ['American College of Obstetricians and Gynecologists'],
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'obgyn-conditions-fibroids', targetType: 'condition', relationship: 'related', label: 'Uterine Fibroids' },
    { targetId: 'obgyn-physiology-menstrual-cycle', targetType: 'process', relationship: 'related', label: 'Menstrual Cycle' },
  ],

  tags: {
    systems: ['reproductive'],
    topics: ['gynecology', 'bleeding', 'menstruation'],
    keywords: ['AUB', 'heavy periods', 'abnormal bleeding', 'menorrhagia'],
    clinicalRelevance: 'high',
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
