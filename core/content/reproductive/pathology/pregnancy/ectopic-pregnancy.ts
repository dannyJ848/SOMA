/**
 * Ectopic Pregnancy - Reproductive System
 *
 * Comprehensive content on ectopic pregnancy including diagnosis
 * and management approaches.
 */

import { EducationalContent } from '../../../types';

export const ectopicPregnancy: EducationalContent = {
  id: 'reproductive-ectopic-pregnancy',
  type: 'condition',
  name: 'Ectopic Pregnancy',
  alternateNames: ['Tubal Pregnancy', 'Extrauterine Pregnancy'],

  levels: {
    1: {
      level: 1,
      summary: 'Ectopic pregnancy is when a fertilized egg implants outside the uterus, usually in a fallopian tube. It is a medical emergency that cannot become a normal pregnancy and requires treatment.',
      explanation: `## What Is Ectopic Pregnancy?

An ectopic pregnancy occurs when a fertilized egg implants and grows outside the main cavity of the uterus. Most occur in the fallopian tube.

### Why It Is Dangerous

- Cannot develop into a normal baby
- Fallopian tube can rupture
- Severe internal bleeding
- Life-threatening emergency
- Requires immediate treatment

### Common Location

- 95% in fallopian tube
- Can occur in ovary, cervix, abdomen
- Previous tubal surgery increases risk
- Can occur after tubal ligation

### Risk Factors

- Prior ectopic pregnancy
- Pelvic inflammatory disease
- Tubal surgery
- Endometriosis
- Infertility treatments
- Smoking
- Age over 35

### Warning Signs

- Missed period (pregnant)
- Vaginal spotting or bleeding
- Lower abdominal pain (one side)
- Shoulder pain (if internal bleeding)
- Dizziness or fainting
- Rectal pressure

### Treatment

The ectopic pregnancy must be removed. Options include:
- Medication (methotrexate) if caught early
- Surgery (laparoscopy) to remove pregnancy
- Sometimes tube must be removed
- Blood transfusion if ruptured

### Future Pregnancies

- Can have normal pregnancy later
- 10% risk of another ectopic
- Early ultrasound recommended
- Fertility may be affected`,
      keyTerms: [
        { term: 'ectopic', definition: 'In an abnormal location' },
        { term: 'fallopian tube', definition: 'Tube that carries egg from ovary to uterus' },
        { term: 'rupture', definition: 'Breaking open; medical emergency' },
        { term: 'methotrexate', definition: 'Medication that stops cell growth' },
        { term: 'laparoscopy', definition: 'Surgery using small incisions and camera' },
      ],
      analogies: [
        'An ectopic pregnancy is like a plant growing in the wrong place - it cannot thrive and can damage its surroundings.',
      ],
      examples: [
        'Ectopic pregnancy occurs in about 2% of all pregnancies',
        'Rupture causes approximately 3% of pregnancy-related deaths',
        'Methotrexate successfully treats about 90% of unruptured ectopic pregnancies',
      ],
      patientCounselingPoints: [
        'Seek immediate care if you have positive pregnancy test with abdominal pain or bleeding',
        'Early diagnosis allows medical treatment instead of surgery',
        'You can have healthy pregnancies after an ectopic pregnancy',
        'Tell your doctor about any history of ectopic pregnancy in future pregnancies',
      ],
    },
    2: {
      level: 2,
      summary: 'Ectopic pregnancy diagnosis involves serial hCG levels and transvaginal ultrasound. The discriminatory zone helps determine when an intrauterine pregnancy should be visible. Treatment options include methotrexate or surgical management based on clinical stability, hCG level, and ultrasound findings.',
      explanation: `## Ectopic Pregnancy Overview

### Pathophysiology

**Tubal Factors:**
- Delayed transport of embryo
- Altered tubal environment
- Ciliary dysfunction
- Scarring/obstruction

**Risk Factors:**
| High Risk | Moderate Risk |
|-----------|---------------|
| Prior ectopic | Infertility |
| Tubal surgery | Multiple partners |
| PID history | Smoking |
| Known tubal disease | Age >35 |

### Clinical Presentation

**Symptoms:**
- Amenorrhea (6-8 weeks)
- Abdominal/pelvic pain
- Vaginal bleeding
- Syncope (if ruptured)
- Shoulder pain (diaphragmatic irritation)

**Signs:**
- Adnexal tenderness/mass
- Cervical motion tenderness
- Uterine size smaller than dates
- Hypotension/tachycardia (if ruptured)
- Peritoneal signs

**Differential:**
- Intrauterine pregnancy (normal/abnormal)
- Threatened abortion
- Corpus luteum cyst
- Ovarian torsion
- Appendicitis
- PID

### Diagnostic Workup

**Laboratory:**
- Serum hCG (quantitative)
- CBC (anemia, hemodynamic status)
- Type and Rh
- Progesterone (low in ectopic)

**Transvaginal Ultrasound:**
- Discriminatory zone: 1500-2000 mIU/mL
- IUP should be visible above this level
- Empty uterus with hCG >discriminatory: suspicious
- Gestational sac with yolk sac = IUP
- Tubal mass/adnexal mass
- Free fluid (hemoperitoneum)

**Serial hCG:**
- Normal: Increases 50% every 48 hours (early)
- Abnormal rise: Ectopic or failed IUP
- Plateau or decline: Ectopic or miscarriage

### Management Options

**Expectant:**
- Declining hCG, asymptomatic
- Close monitoring
- Success ~70%
- Strict criteria

**Medical (Methotrexate):**
- Single-dose: 50 mg/m2 IM
- Follow hCG days 4 and 7
- If <15% decline: second dose
- Success ~90%

**Criteria for Methotrexate:**
- Hemodynamically stable
- Unruptured
- hCG <5000
- No fetal cardiac activity
- No contraindications
- Reliable follow-up

**Surgical:**
- Salpingostomy (conserves tube)
- Salpingectomy (removes tube)
- Laparoscopic preferred
- Emergency if ruptured

### Contraindications to Methotrexate

- Hemodynamic instability
- Breastfeeding
- Blood dyscrasias
- Hepatic/renal/hematologic dysfunction
- Active pulmonary disease
- Peptic ulcer disease
- Immunodeficiency
- Ruptured ectopic

### Follow-up

**After Methotrexate:**
- hCG until zero
- Avoid folate (competes with methotrexate)
- Avoid alcohol
- Avoid intercourse
- Avoid sun exposure
- No pregnancy for 3 months

**After Surgery:**
- hCG until zero (if salpingostomy)
- Rhogam if Rh negative
- Future pregnancy planning`,
      keyTerms: [
        { term: 'discriminatory zone', definition: 'hCG level above which IUP should be visible on ultrasound' },
        { term: 'salpingostomy', definition: 'Incision into fallopian tube to remove pregnancy' },
        { term: 'salpingectomy', definition: 'Removal of fallopian tube' },
        { term: 'hemoperitoneum', definition: 'Blood in abdominal cavity' },
        { term: 'Rhogam', definition: 'Medication to prevent Rh sensitization' },
      ],
      clinicalNotes: 'The discriminatory zone is the serum hCG level above which an intrauterine pregnancy should be visible on transvaginal ultrasound. If the uterus is empty and hCG is above the discriminatory zone, an ectopic pregnancy should be strongly suspected.',
    },
    3: {
      level: 3,
      summary: 'Ectopic pregnancy management requires individualized approach considering fertility desires, clinical status, and hCG trends. Persistent ectopic after salpingostomy or failed methotrexate requires additional treatment. Future fertility counseling is essential.',
      explanation: `## Detailed Management

### Surgical Techniques

**Laparoscopic Salpingostomy:**
- Linear incision on antimesenteric border
- Evacuation of pregnancy
- Irrigation
- Leave tube in situ
- Risk of persistent ectopic
- 8-15% need additional treatment

**Laparoscopic Salpingectomy:**
- Complete tube removal
- Preferred if:
  - Tube ruptured
  - Severe damage
  - Large ectopic
  - No fertility desire
- No persistent tissue risk

**Emergency Laparotomy:**
- If hemodynamically unstable
- Massive hemorrhage
- No laparoscopic expertise
- Faster control

### Persistent Ectopic Pregnancy

**After Salpingostomy:**
- Residual trophoblastic tissue
- Rising or plateaued hCG
- Occurs 8-15% of cases
- Treat with methotrexate
- May need repeat surgery

**Monitoring:**
- Weekly hCG post-salpingostomy
- Until negative
- Early treatment if rising

### Fertility After Ectopic

**Intrauterine Pregnancy Rates:**
- 60-80% with one tube
- Similar after salpingostomy or salpingectomy
- Depends on remaining tube status
- IVF option if both tubes damaged

**Recurrent Ectopic Risk:**
- 10-27% after first ectopic
- 25% after two ectopics
- Early ultrasound essential
- IVF may reduce risk

**Counseling:**
- Conception possible
- Early monitoring needed
- Risk of infertility
- IVF alternatives

### Special Situations

**Heterotopic Pregnancy:**
- IUP + ectopic simultaneously
- 1:30,000 spontaneous
- 1:100 IVF
- Do not miss IUP when treating ectopic

**Cervical Ectopic:**
- Rare
- High bleeding risk
- Methotrexate first-line
- Foley balloon tamponade
- Uterine artery embolization
- Hysterectomy if failed

**Ovarian Ectopic:**
- Rare
- Surgery preferred
- Ovarian preservation

**Interstitial Ectopic:**
- Cornual implantation
- Late rupture (12-16 weeks)
- Massive hemorrhage
- Surgery required
- May need resection

**Abdominal Ectopic:**
- Rare
- Advanced gestation possible
- High maternal/fetal mortality
- Surgery required

### Rh-Negative Patients

**Rhogam Indication:**
- All Rh-negative women
- 50 mcg if <12 weeks
- 300 mcg if >=12 weeks
- Prevent sensitization

**After Methotrexate:**
- Lower threshold
- Any bleeding
- Usually 300 mcg

### Follow-up Care

**Contraception:**
- 3 months after methotrexate
- Until hCG negative
- Any method acceptable
- Plan next pregnancy

**Future Pregnancy:**
- Early prenatal care
- hCG to document rise
- Ultrasound at 5-6 weeks
- Confirm intrauterine location
- Serial monitoring

**Emotional Support:**
- Pregnancy loss
- Fear of recurrence
- Future fertility anxiety
- Support groups
- Counseling`,
      keyTerms: [
        { term: 'heterotopic pregnancy', definition: 'Simultaneous intrauterine and ectopic pregnancy' },
        { term: 'trophoblast', definition: 'Cells that form placenta; can persist after treatment' },
        { term: 'sensitization', definition: 'Development of antibodies against Rh factor' },
        { term: 'IVF', definition: 'In vitro fertilization; fertility treatment' },
        { term: 'cornual', definition: 'Pertaining to the area where tube enters uterus' },
      ],
      clinicalNotes: 'After methotrexate treatment for ectopic pregnancy, hCG levels should be monitored until they reach zero. A rise between days 4 and 7 after treatment indicates need for a second dose of methotrexate or surgical intervention.',
    },
    4: {
      level: 4,
      summary: 'Advanced ectopic pregnancy management includes complex surgical cases, recurrent ectopic prevention strategies, and psychosocial support. Interstitial and cervical ectopics present unique challenges requiring specialized management.',
      explanation: `## Advanced Topics

### Interstitial Ectopic Management

**Characteristics:**
- Implantation in interstitial portion of tube
- 2-4% of tubal ectopics
- Late presentation (12-16 weeks)
- High rupture risk
- Massive hemorrhage

**Diagnosis:**
- "Interstitial line sign"
- Eccentric gestational sac
- Myometrial thickness <5 mm
- 3D ultrasound helpful

**Treatment:**
- Surgery preferred
- Cornual resection
- May require hysterectomy
- Methotrexate if early/unruptured
- Uterine artery embolization

**Fertility:**
- Uterine rupture risk in future pregnancy
- Cesarean delivery recommended
- Close monitoring

### Cervical Ectopic Management

**Characteristics:**
- Rare (0.15% of ectopics)
- Life-threatening hemorrhage
- Risk of hysterectomy

**Conservative Management:**
- Methotrexate (systemic or local)
- Foley balloon tamponade
- Uterine artery embolization
- Packing
- Blood products available

**Surgical:**
- Hysterectomy if failed conservative
- Shapiro maneuver
- Trachelectomy (rare)

**Fertility:**
- Cervical incompetence risk
- Cerclage in future pregnancies
- High-risk obstetric care

### Cesarean Scar Ectopic

**Increasing Incidence:**
- Related to rising C-section rate
- Implantation in previous scar
- Risk of placenta accreta
- Risk of uterine rupture

**Diagnosis:**
- Early ultrasound
- Empty uterus/cervix
- Deficient myometrium at scar
- "Collar" sign

**Management:**
- Termination recommended
- Methotrexate (systemic or local)
- Uterine artery embolization
- Hysteroscopic resection
- Laparoscopic resection

### Recurrent Ectopic Prevention

**Risk Reduction:**
- Treat PID promptly
- Smoking cessation
- Chlamydia screening
- Safe sex practices

**Assisted Reproductive Technology:**
- IVF may reduce ectopic risk
- Still 1-2% ectopic rate with IVF
- Embryo transfer techniques

**Early Monitoring:**
- Preconception counseling
- Early hCG after conception
- Ultrasound at 5-6 weeks
- Serial monitoring

### Psychosocial Aspects

**Pregnancy Loss:**
- Grief counseling
- Ectopic is pregnancy loss
- Support groups
- Religious considerations

**Future Anxiety:**
- Fear of recurrence
- Fertility concerns
- Need for early monitoring
- Emotional support

**Partner Support:**
- Couples counseling
- Shared experience
- Communication
- Decision-making support

### Quality Metrics

**Diagnosis:**
- Time to diagnosis
- Use of ultrasound
- Appropriate hCG monitoring
- Avoidance of rupture

**Treatment:**
- Methotrexate success rate
- Surgical approach
- Complication rates
- Follow-up completion

**Outcomes:**
- Subsequent fertility
- Recurrence rate
- Patient satisfaction
- Psychological outcomes`,
      keyTerms: [
        { term: 'interstitial line sign', definition: 'Ultrasound finding of echogenic line extending to gestational sac in interstitial ectopic' },
        { term: 'trachelectomy', definition: 'Surgical removal of cervix' },
        { term: 'cerclage', definition: 'Stitch placed to keep cervix closed during pregnancy' },
        { term: 'placenta accreta', definition: 'Abnormal attachment of placenta to uterine wall' },
        { term: 'cesarean scar ectopic', definition: 'Ectopic pregnancy implanted in previous cesarean section scar' },
      ],
      clinicalNotes: 'Cesarean scar ectopic pregnancy is becoming more common with the rising cesarean delivery rate. These pregnancies should be terminated as they carry high risks of placenta accreta, uterine rupture, and life-threatening hemorrhage.',
    },
    5: {
      level: 5,
      summary: 'Expert ectopic pregnancy care involves complex case management, fertility preservation in challenging cases, and research into prevention and early detection. Global access to appropriate care remains a priority.',
      explanation: `## Expert Topics

### Complex Surgical Cases

**Conservative Surgery:**
- Segmental resection + anastomosis
- Tubal reconstructive surgery
- Fertility preservation priority
- Microsurgical techniques

**Emergency Management:**
- Massive transfusion protocols
- Interventional radiology
- Damage control surgery
- Multidisciplinary approach

### Research Frontiers

**Early Detection:**
- Biomarkers
- Better imaging
- Risk prediction models
- Point-of-care tests

**Prevention:**
- Chlamydia screening programs
- PID prevention
- Smoking cessation
- Contraception access

**Treatment:**
- Novel medical therapies
- Improved surgical techniques
- Fertility preservation
- Regenerative medicine

### Global Health

**Burden:**
- Leading cause of maternal death first trimester
- Higher in developing countries
- Limited diagnostic resources
- Limited surgical access

**Interventions:**
- Ultrasound access
- Methotrexate availability
- Surgical training
- Task-shifting

**Telemedicine:**
- Remote diagnosis
- Expert consultation
- Follow-up care
- Resource-limited settings

### Fertility Preservation

**Tubal Reconstruction:**
- Microsurgery
- Neosalpingostomy
- Anastomosis
- IVF alternatives

**Ovarian Ectopic:**
- Ovarian preservation
- Reconstruction
- Fertility impact

**Future Technologies:**
- Bioengineered tubes
- Stem cell therapy
- In vitro fertilization advances

### Patient Education

**Awareness:**
- Risk factor knowledge
- Warning signs
- When to seek care
- Importance of follow-up

**Empowerment:**
- Shared decision-making
- Treatment options
- Fertility planning
- Advocacy

### Survivorship

**Physical Recovery:**
- Post-treatment care
- Return to activities
- Future pregnancy planning
- Medical management

**Emotional Recovery:**
- Grief support
- Anxiety management
- Relationship counseling
- Support groups

**Future Planning:**
- Contraception
- Preconception care
- Early pregnancy monitoring
- Recurrence prevention`,
      keyTerms: [
        { term: 'neosalpingostomy', definition: 'Creating new opening in blocked fallopian tube' },
        { term: 'anastomosis', definition: 'Surgical connection between two structures' },
        { term: 'damage control surgery', definition: 'Abbreviated surgery to control bleeding; definitive repair later' },
        { term: 'task-shifting', definition: 'Delegating medical tasks to less specialized workers' },
        { term: 'bioengineered', definition: 'Artificially produced using biological components' },
      ],
      clinicalNotes: `Key Clinical Pearls:

1. A pregnancy of unknown location (PUL) with hCG above the discriminatory zone and empty uterus should be treated as an ectopic pregnancy until proven otherwise.

2. Methotrexate is highly effective for unruptured ectopic pregnancy with success rates of 90% when appropriate selection criteria are met.

3. Women with one fallopian tube removed due to ectopic pregnancy have approximately 60-80% chance of subsequent intrauterine pregnancy, similar to rates after conservative surgery.

4. Women with a history of ectopic pregnancy have approximately 10-27% risk of another ectopic in future pregnancies and require early ultrasound confirmation of intrauterine location.

5. Heterotopic pregnancy (intrauterine + ectopic) should be suspected in women undergoing assisted reproduction who have risk factors for ectopic pregnancy.`,
    },
  },

  media: [
    {
      id: 'ectopic-locations',
      type: 'diagram',
      filename: 'ectopic-locations.svg',
      title: 'Ectopic Pregnancy Locations',
      description: 'Sites of ectopic implantation',
    },
  ],

  citations: [
    {
      id: 'acog-ectopic',
      type: 'article',
      title: 'Medical Management of Ectopic Pregnancy: ACOG Practice Bulletin',
      authors: ['ACOG'],
      source: 'Obstetrics & Gynecology',
    },
  ],

  crossReferences: [
    { targetId: 'reproductive-preeclampsia-pathology', targetType: 'condition', relationship: 'related', label: 'Preeclampsia' },
    { targetId: 'reproductive-gestational-diabetes', targetType: 'condition', relationship: 'related', label: 'Gestational Diabetes' },
  ],

  tags: {
    systems: ['reproductive'],
    topics: ['pathology', 'obstetrics', 'emergency-medicine'],
    keywords: ['ectopic pregnancy', 'methotrexate', 'tubal pregnancy', 'pregnancy of unknown location'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-28T00:00:00.000Z',
  updatedAt: '2026-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default ectopicPregnancy;
