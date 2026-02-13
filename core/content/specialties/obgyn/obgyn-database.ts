/**
 * Biological Self - OB/GYN Specialty Database
 * Comprehensive clinical reference for obstetrics and gynecology conditions
 */

// --- Types ---

export type OBGYNSubcategory =
  | 'obstetric' | 'gynecologic' | 'reproductive'
  | 'oncologic' | 'urogynecologic' | 'contraception';

export interface OBGYNEntry {
  id: string;
  name: string;
  nameEs: string;
  subcategory: OBGYNSubcategory;
  summary: string;
  clinicalFeatures: string[];
  diagnosticWorkup: string[];
  management: string;
  medications: string[];
  surgicalOptions: string[];
  patientCounseling: string;
  emergencySigns: string[];
  preventiveRecommendations: string;
  patientTip: string;
}

// --- Compact Helper ---

function ob(
  id: string, name: string, nameEs: string, subcategory: OBGYNSubcategory,
  summary: string, clinicalFeatures: string[], diagnosticWorkup: string[],
  management: string, medications: string[], surgicalOptions: string[],
  patientCounseling: string, emergencySigns: string[],
  preventiveRecommendations: string, patientTip: string,
): OBGYNEntry {
  return {
    id, name, nameEs, subcategory, summary, clinicalFeatures, diagnosticWorkup,
    management, medications, surgicalOptions, patientCounseling, emergencySigns,
    preventiveRecommendations, patientTip,
  };
}

// --- OB/GYN Database ---

export const OBGYN_ENTRIES: Record<string, OBGYNEntry> = {};

const entries: OBGYNEntry[] = [

  // ============================================================
  // OBSTETRIC (7)
  // ============================================================

  ob('prenatal-care', 'Prenatal Care Schedule', 'Calendario de control prenatal', 'obstetric',
    'Structured schedule of prenatal visits, labs, imaging, and screenings throughout pregnancy.',
    ['Monthly visits weeks 4-28, biweekly 28-36, weekly 36-delivery', 'Weight, blood pressure, fundal height, fetal heart tones each visit', 'First trimester dating ultrasound and genetic screening'],
    ['CBC, blood type/Rh, rubella, hepatitis B, HIV, syphilis, urinalysis at initial visit', 'Anatomy ultrasound at 18-22 weeks', 'Glucose tolerance test at 24-28 weeks', 'GBS culture at 35-37 weeks'],
    'Regular monitoring with escalating visit frequency; risk-stratified approach adds NST, BPP, or growth ultrasounds when indicated.',
    ['Prenatal vitamins with folic acid 0.4-0.8 mg', 'Iron supplementation if anemic', 'Tdap vaccine at 27-36 weeks'],
    [],
    'Consistent prenatal care reduces preterm birth, low birth weight, and maternal mortality. Keep all scheduled appointments even if you feel well.',
    ['Vaginal bleeding', 'Severe headache or vision changes', 'Decreased fetal movement', 'Leaking fluid or contractions before 37 weeks'],
    'Begin prenatal vitamins with folic acid at least 1 month before conception; optimize chronic conditions pre-pregnancy.',
    'Download a pregnancy tracking app to log symptoms and remember appointment questions.',
  ),

  ob('gestational-diabetes', 'Gestational Diabetes Mellitus', 'Diabetes mellitus gestacional', 'obstetric',
    'Glucose intolerance first diagnosed during pregnancy, increasing risk of macrosomia and delivery complications.',
    ['Usually asymptomatic; detected by screening', 'Risk factors: obesity, age >25, family history of DM, prior GDM', 'Associated with polyhydramnios and fetal macrosomia'],
    ['1-hour glucose challenge test (50 g) at 24-28 weeks; abnormal ≥130-140 mg/dL', '3-hour oral glucose tolerance test (100 g) for confirmation', 'Fasting glucose, HbA1c at initial visit if high risk'],
    'Dietary modification and glucose monitoring first; insulin therapy if targets not met (fasting <95, 1-hr postprandial <140, 2-hr <120 mg/dL).',
    ['Insulin (preferred pharmacologic agent)', 'Metformin or glyburide as alternatives', 'No oral agents in first trimester'],
    ['Cesarean delivery may be recommended if estimated fetal weight >4500 g', 'Induction at 39 weeks commonly considered'],
    'Most gestational diabetes resolves after delivery, but it increases lifetime risk of type 2 diabetes by 50%. Postpartum glucose testing is essential.',
    ['Glucose >200 mg/dL with symptoms', 'Ketones in urine', 'Decreased fetal movement'],
    'Maintain healthy weight before pregnancy; screen at 6-12 weeks postpartum with 75 g OGTT; rescreen every 1-3 years.',
    'Check your blood sugar four times daily: fasting and one hour after each meal.',
  ),

  ob('preeclampsia', 'Preeclampsia', 'Preeclampsia', 'obstetric',
    'Hypertensive disorder of pregnancy after 20 weeks with proteinuria or end-organ dysfunction, a leading cause of maternal morbidity.',
    ['Blood pressure ≥140/90 on two occasions 4 hours apart', 'Proteinuria ≥300 mg/24 hr or protein/creatinine ratio ≥0.3', 'Headache, visual disturbances, RUQ pain, edema', 'Severe features: BP ≥160/110, platelets <100k, elevated LFTs, renal insufficiency'],
    ['Serial blood pressure monitoring', 'CBC with platelets, LFTs, creatinine, uric acid', '24-hour urine protein or spot protein/creatinine ratio', 'Fetal assessment: NST, BPP, growth ultrasound'],
    'Delivery is the definitive treatment. Timing depends on severity and gestational age: ≥37 weeks deliver; <34 weeks with severe features consider corticosteroids then deliver.',
    ['Labetalol or nifedipine for blood pressure control', 'Magnesium sulfate for seizure prophylaxis', 'Betamethasone for fetal lung maturity if <37 weeks', 'Low-dose aspirin 81 mg for prevention in high-risk patients starting 12-16 weeks'],
    ['Cesarean delivery if indicated', 'Induction of labor at appropriate gestational age'],
    'Preeclampsia can progress rapidly. Report headaches, vision changes, or upper abdominal pain immediately. Blood pressure monitoring continues postpartum.',
    ['Systolic BP ≥160 or diastolic ≥110', 'Seizure (eclampsia)', 'Severe headache unresponsive to medication', 'Sudden vision loss', 'Epigastric or RUQ pain'],
    'Low-dose aspirin for women with risk factors; adequate calcium intake; regular prenatal visits for early detection.',
    'Purchase a home blood pressure cuff and check twice daily in the third trimester if you have risk factors.',
  ),

  ob('placenta-previa', 'Placenta Previa', 'Placenta previa', 'obstetric',
    'Placenta implants over or near the internal cervical os, risking painless vaginal bleeding in the second or third trimester.',
    ['Painless bright red vaginal bleeding, typically after 20 weeks', 'Soft non-tender uterus', 'May present as incidental finding on routine ultrasound', 'Risk factors: prior cesarean, multiparity, advanced maternal age'],
    ['Transabdominal and transvaginal ultrasound to confirm placental location', 'Serial ultrasounds to assess for resolution', 'CBC, type and screen, coagulation studies if bleeding'],
    'Expectant management with pelvic rest if preterm and stable; scheduled cesarean delivery at 36-37 weeks for persistent previa; emergent delivery for uncontrolled hemorrhage.',
    ['Tocolytics if preterm contractions', 'Betamethasone for fetal lung maturity if <37 weeks', 'RhoGAM if Rh-negative'],
    ['Cesarean delivery (vaginal delivery contraindicated with complete previa)', 'Possible hysterectomy for placenta accreta spectrum'],
    'Avoid intercourse, tampons, and vaginal exams. Report any vaginal bleeding immediately. Many low-lying placentas resolve as the uterus grows.',
    ['Heavy vaginal bleeding soaking a pad per hour', 'Cramping or contractions with bleeding', 'Dizziness, lightheadedness, or fainting'],
    'Avoid modifiable risk factors; ensure adequate blood type and screen early in pregnancy.',
    'Keep a hospital bag packed from 28 weeks onward in case of emergency bleeding.',
  ),

  ob('ectopic-pregnancy', 'Ectopic Pregnancy', 'Embarazo ectópico', 'obstetric',
    'Implantation outside the uterine cavity, most commonly in the fallopian tube; a surgical emergency if ruptured.',
    ['Unilateral pelvic pain, vaginal bleeding, amenorrhea', 'Adnexal tenderness or mass on exam', 'Shoulder pain if ruptured (diaphragmatic irritation)', 'Risk factors: prior ectopic, PID, tubal surgery, IUD'],
    ['Quantitative beta-hCG (abnormal rise: <53% increase in 48 hrs)', 'Transvaginal ultrasound: no intrauterine pregnancy with hCG >1500-2000', 'Progesterone level <5 ng/mL suggestive'],
    'Methotrexate for unruptured stable cases; surgical salpingostomy or salpingectomy for ruptured, hemodynamically unstable, or methotrexate-ineligible patients.',
    ['Methotrexate (single or multi-dose protocol)', 'RhoGAM if Rh-negative'],
    ['Laparoscopic salpingostomy (tube-sparing)', 'Laparoscopic salpingectomy (tube removal)', 'Emergent laparotomy if hemodynamically unstable'],
    'An ectopic pregnancy cannot become a viable pregnancy. Early treatment preserves future fertility. Follow-up hCG levels are essential after methotrexate.',
    ['Sudden severe abdominal pain', 'Dizziness or fainting (signs of internal bleeding)', 'Shoulder tip pain', 'Heavy vaginal bleeding'],
    'Early prenatal ultrasound to confirm intrauterine pregnancy; treat STIs to reduce PID risk.',
    'If you have had an ectopic pregnancy, seek early ultrasound confirmation in future pregnancies.',
  ),

  ob('miscarriage', 'Miscarriage / Early Pregnancy Loss', 'Aborto espontáneo / Pérdida temprana del embarazo', 'obstetric',
    'Spontaneous loss of pregnancy before 20 weeks; occurs in 10-20% of recognized pregnancies, most in the first trimester.',
    ['Vaginal bleeding ranging from spotting to heavy', 'Cramping or lower abdominal pain', 'Passage of tissue or clots', 'Types: threatened, inevitable, incomplete, complete, missed'],
    ['Quantitative beta-hCG with 48-hour trend', 'Transvaginal ultrasound to assess viability', 'CBC if significant bleeding', 'Chromosomal analysis of products of conception if recurrent'],
    'Expectant management for stable patients; medical management with misoprostol to complete evacuation; surgical evacuation (D&C) for heavy bleeding or patient preference.',
    ['Misoprostol 800 mcg vaginally for medical management', 'RhoGAM if Rh-negative', 'NSAIDs for pain', 'Methergine or misoprostol for persistent bleeding post-procedure'],
    ['Suction curettage / manual vacuum aspiration', 'Dilation and curettage if retained products'],
    'Miscarriage is common and usually not caused by anything you did or did not do. Most women go on to have successful pregnancies. Allow time to grieve.',
    ['Soaking more than one pad per hour', 'Fever or chills (possible infection)', 'Dizziness or fainting', 'Foul-smelling discharge'],
    'Optimize preconception health; folic acid supplementation; avoid alcohol and tobacco.',
    'It is okay to try again when you feel emotionally and physically ready; most doctors recommend waiting one full menstrual cycle.',
  ),

  ob('postpartum-hemorrhage', 'Postpartum Hemorrhage', 'Hemorragia posparto', 'obstetric',
    'Blood loss ≥1000 mL or bleeding with signs of hypovolemia after delivery; leading cause of maternal death worldwide.',
    ['Heavy vaginal bleeding after delivery', 'Boggy uterus (atony is #1 cause)', 'Tachycardia, hypotension, pallor', 'Four Ts: Tone (atony), Trauma (lacerations), Tissue (retained placenta), Thrombin (coagulopathy)'],
    ['Quantitative blood loss measurement', 'CBC, coagulation panel, fibrinogen', 'Bedside ultrasound for retained products', 'Type and crossmatch for transfusion'],
    'Uterine massage and uterotonics first line; tamponade (balloon) if refractory; surgical intervention for persistent hemorrhage; massive transfusion protocol if indicated.',
    ['Oxytocin 10-40 units IV (first line)', 'Methylergonovine 0.2 mg IM', 'Carboprost (Hemabate) 0.25 mg IM', 'Misoprostol 800-1000 mcg rectally', 'Tranexamic acid 1 g IV within 3 hours'],
    ['Bakri balloon tamponade', 'Uterine compression sutures (B-Lynch)', 'Uterine artery ligation', 'Hysterectomy as last resort'],
    'Postpartum hemorrhage is a medical emergency. Hospitals have protocols in place. Active management of third stage of labor reduces risk.',
    ['Any heavy bleeding after delivery', 'Feeling faint or dizzy', 'Racing heartbeat', 'Passing large clots'],
    'Active management of third stage of labor (oxytocin after delivery); identify risk factors antepartum; ensure blood bank availability.',
    'Alert your birth team if you feel lightheaded or notice heavy bleeding; your input matters for early detection.',
  ),

  // ============================================================
  // GYNECOLOGIC (6)
  // ============================================================

  ob('endometriosis', 'Endometriosis', 'Endometriosis', 'gynecologic',
    'Endometrial-like tissue growing outside the uterus causing chronic pelvic pain, dysmenorrhea, and infertility.',
    ['Cyclical pelvic pain worsening with menses', 'Dyspareunia (painful intercourse)', 'Heavy or irregular periods', 'Infertility (30-50% of affected women)', 'Painful bowel movements or urination during menstruation'],
    ['Clinical diagnosis based on history and exam', 'Pelvic ultrasound for endometriomas', 'MRI for deep infiltrating endometriosis', 'Definitive diagnosis via laparoscopy with biopsy (gold standard)'],
    'Stepwise approach: NSAIDs and hormonal therapy first; surgical excision or ablation for refractory cases or fertility; multidisciplinary pain management.',
    ['NSAIDs for pain', 'Combined oral contraceptives (continuous use)', 'Progestins (norethindrone, medroxyprogesterone)', 'GnRH agonists (leuprolide) with add-back therapy', 'GnRH antagonists (elagolix)'],
    ['Laparoscopic excision or ablation of implants', 'Excision of endometriomas', 'Hysterectomy with bilateral salpingo-oophorectomy for refractory disease'],
    'Endometriosis is a chronic condition requiring long-term management. Hormonal suppression slows progression. Fertility options should be discussed early.',
    ['Sudden severe pelvic pain (ruptured endometrioma)', 'Inability to urinate or have bowel movements', 'Fever suggesting secondary infection'],
    'Early evaluation of chronic pelvic pain; hormonal therapy to slow progression; fertility counseling.',
    'Keep a symptom diary tracking pain patterns with your menstrual cycle to help your doctor tailor treatment.',
  ),

  ob('uterine-fibroids', 'Uterine Fibroids', 'Fibromas uterinos', 'gynecologic',
    'Benign smooth muscle tumors of the uterus; most common pelvic tumor in women, often causing heavy bleeding and bulk symptoms.',
    ['Heavy or prolonged menstrual bleeding', 'Pelvic pressure or fullness', 'Urinary frequency (anterior fibroids)', 'Constipation (posterior fibroids)', 'Enlarged or irregular uterus on exam'],
    ['Pelvic ultrasound (first-line imaging)', 'MRI for surgical planning or complex cases', 'CBC to assess for iron-deficiency anemia', 'Saline infusion sonogram or hysteroscopy for submucosal fibroids'],
    'Observation if asymptomatic; medical therapy for bleeding; procedural options range from UAE to myomectomy to hysterectomy depending on symptoms, size, and fertility goals.',
    ['NSAIDs for pain', 'Tranexamic acid for heavy bleeding', 'Combined OCs or progestins', 'GnRH agonists for preoperative shrinkage', 'Elagolix with add-back therapy'],
    ['Uterine artery embolization (UAE)', 'Myomectomy (hysteroscopic, laparoscopic, or open)', 'Hysterectomy (definitive)', 'MRI-guided focused ultrasound'],
    'Fibroids are almost always benign. Treatment depends on symptoms and reproductive plans. Many women manage fibroids successfully without surgery.',
    ['Soaking through a pad every hour for several hours', 'Severe pelvic pain (fibroid degeneration or torsion)', 'Urinary retention'],
    'Regular gynecologic exams; iron supplementation if heavy bleeding; discuss fibroid management before conception.',
    'Track your periods on an app noting heaviness and pad/tampon counts to help quantify bleeding for your doctor.',
  ),

  ob('ovarian-cysts', 'Ovarian Cysts', 'Quistes ováricos', 'gynecologic',
    'Fluid-filled sacs on the ovary; most are functional and resolve spontaneously, but some require intervention.',
    ['Often asymptomatic, found incidentally', 'Unilateral pelvic or lower abdominal pain', 'Bloating or fullness', 'Acute severe pain if ruptured or torsion occurs'],
    ['Pelvic ultrasound with Doppler', 'Tumor markers (CA-125) if postmenopausal or complex cyst', 'Beta-hCG to rule out ectopic pregnancy', 'CT or MRI for indeterminate lesions'],
    'Simple cysts <5 cm in premenopausal women: observation with repeat ultrasound in 8-12 weeks. Complex or persistent cysts may need surgical evaluation.',
    ['NSAIDs for pain', 'Oral contraceptives to prevent new functional cysts (do not shrink existing cysts)'],
    ['Laparoscopic cystectomy', 'Oophorectomy if concern for malignancy', 'Emergent surgery for ovarian torsion'],
    'Most ovarian cysts are harmless and resolve on their own. However, sudden severe pain requires immediate evaluation to rule out torsion or rupture.',
    ['Sudden severe unilateral pelvic pain (torsion or rupture)', 'Dizziness or fainting with pain', 'Fever with pelvic pain'],
    'Annual gynecologic exam; ultrasound follow-up of indeterminate cysts; prompt evaluation of persistent pelvic pain.',
    'A simple cyst on ultrasound is usually nothing to worry about; your body makes them every month during ovulation.',
  ),

  ob('abnormal-uterine-bleeding', 'Abnormal Uterine Bleeding', 'Sangrado uterino anormal', 'gynecologic',
    'Menstrual bleeding that is abnormal in volume, duration, regularity, or frequency; evaluated using the PALM-COEIN classification.',
    ['Heavy menstrual bleeding (>80 mL or soaking through protection)', 'Intermenstrual bleeding', 'Prolonged periods (>7 days)', 'Irregular cycle intervals (<21 or >35 days)', 'Postmenopausal bleeding (any amount)'],
    ['CBC, ferritin, TSH, coagulation panel', 'Pelvic ultrasound', 'Endometrial biopsy if age ≥45, risk factors, or refractory bleeding', 'Saline infusion sonography or hysteroscopy', 'Beta-hCG to rule out pregnancy'],
    'Treat underlying cause (PALM-COEIN): Polyp, Adenomyosis, Leiomyoma, Malignancy, Coagulopathy, Ovulatory dysfunction, Endometrial, Iatrogenic, Not classified.',
    ['Tranexamic acid for acute heavy bleeding', 'Combined oral contraceptives', 'Progestins (oral or levonorgestrel IUD)', 'NSAIDs for volume reduction', 'Iron supplementation for anemia'],
    ['Hysteroscopic polypectomy', 'Endometrial ablation (if completed childbearing)', 'Myomectomy', 'Hysterectomy for refractory cases'],
    'Abnormal bleeding has many treatable causes. Postmenopausal bleeding always needs evaluation. Keeping a bleeding diary helps guide workup.',
    ['Soaking a pad or tampon every hour for several consecutive hours', 'Postmenopausal bleeding', 'Bleeding with dizziness or lightheadedness'],
    'Annual gynecologic exams; evaluation of any postmenopausal bleeding; iron studies with heavy menses.',
    'Use a menstrual cup or weigh pads to accurately measure blood loss and share the information with your provider.',
  ),

  ob('pelvic-inflammatory-disease', 'Pelvic Inflammatory Disease', 'Enfermedad pélvica inflamatoria', 'gynecologic',
    'Infection of the upper female genital tract (uterus, tubes, ovaries) usually caused by ascending STIs, risking infertility and chronic pain.',
    ['Lower abdominal and pelvic pain', 'Cervical motion tenderness on exam', 'Purulent vaginal or cervical discharge', 'Fever in severe cases', 'Adnexal tenderness'],
    ['Clinical diagnosis (CDC criteria: pelvic pain + cervical motion / uterine / adnexal tenderness)', 'NAAT for chlamydia and gonorrhea', 'WBC, ESR, CRP', 'Pelvic ultrasound if tubo-ovarian abscess suspected', 'Endometrial biopsy in unclear cases'],
    'Outpatient antibiotics for mild-moderate PID; inpatient IV antibiotics for severe cases, TOA, pregnancy, or failed outpatient therapy. Treat sexual partners.',
    ['Ceftriaxone 500 mg IM x1 + doxycycline 100 mg BID x14 days ± metronidazole', 'IV cefotetan + doxycycline or IV clindamycin + gentamicin for inpatient treatment'],
    ['CT-guided or ultrasound-guided drainage of tubo-ovarian abscess', 'Laparoscopy for diagnosis or abscess drainage', 'Surgical exploration if rupture suspected'],
    'Complete all antibiotics even if you feel better. Your sexual partner(s) must be treated to prevent reinfection. PID increases ectopic pregnancy and infertility risk.',
    ['High fever', 'Severe abdominal pain with rebound', 'Nausea and vomiting with inability to take oral medications', 'Signs of sepsis'],
    'STI screening and treatment; barrier contraception; prompt treatment of cervicitis.',
    'Both you and your partner need treatment; abstain from intercourse until both have completed antibiotics.',
  ),

  ob('cervical-dysplasia', 'Cervical Dysplasia / CIN', 'Displasia cervical / NIC', 'gynecologic',
    'Precancerous changes in cervical cells graded as CIN 1-3, detected by abnormal Pap smear and confirmed by colposcopy with biopsy.',
    ['Usually asymptomatic', 'Detected by abnormal Pap or positive HPV test', 'CIN 1: mild dysplasia (often regresses)', 'CIN 2-3: moderate to severe dysplasia (high-grade, may progress to cancer)'],
    ['Pap smear with HPV co-testing', 'Colposcopy with directed biopsies', 'Endocervical curettage', 'ASCCP risk-based management guidelines for triage'],
    'CIN 1: surveillance with repeat co-testing at 12 months. CIN 2-3: excisional treatment (LEEP or cold knife conization) recommended for most patients.',
    ['None specific; HPV vaccine for prevention'],
    ['LEEP (loop electrosurgical excision procedure)', 'Cold knife conization', 'Cryotherapy (less common now)', 'Hysterectomy for persistent CIN 3 with completed childbearing'],
    'CIN is not cancer but can progress without treatment. HPV vaccination prevents most cases. Follow-up after treatment is essential as recurrence is possible.',
    ['Post-procedure heavy bleeding', 'Fever or foul-smelling discharge after procedure'],
    'HPV vaccination (ideally ages 9-26); regular cervical cancer screening per guidelines; smoking cessation (smoking impairs HPV clearance).',
    'HPV vaccination is the best prevention; if you have CIN 1, your immune system will likely clear it within 1-2 years.',
  ),

  // ============================================================
  // REPRODUCTIVE (4)
  // ============================================================

  ob('infertility-evaluation', 'Infertility Evaluation', 'Evaluación de infertilidad', 'reproductive',
    'Systematic evaluation of couples unable to conceive after 12 months of unprotected intercourse (6 months if age ≥35).',
    ['Failure to conceive within expected timeframe', 'Irregular menstrual cycles', 'Known risk factors: age, endometriosis, prior pelvic surgery, male factor'],
    ['Ovulation assessment: mid-luteal progesterone, basal body temperature, OPKs', 'Semen analysis (male partner)', 'HSG (hysterosalpingogram) for tubal patency', 'Day 3 FSH, estradiol, AMH for ovarian reserve', 'Pelvic ultrasound with antral follicle count', 'TSH, prolactin'],
    'Address identified factors: ovulation induction for anovulation, surgery for tubal or uterine pathology, IUI or IVF for unexplained or male factor infertility.',
    ['Clomiphene citrate or letrozole for ovulation induction', 'Gonadotropins (FSH/LH injections)', 'Metformin as adjunct in PCOS', 'Progesterone for luteal support'],
    ['Hysteroscopic polypectomy or septum resection', 'Laparoscopic treatment of endometriosis', 'Varicocele repair (male partner)', 'IVF with or without ICSI'],
    'Infertility evaluation involves both partners from the start. Age is the most significant factor for female fertility. Many causes are treatable.',
    ['Not applicable for emergency presentation'],
    'Preconception counseling; folic acid supplementation; lifestyle optimization (weight, alcohol, tobacco); early referral if age ≥35.',
    'Start with the least invasive tests first; a semen analysis and ovulation tracking can identify common causes quickly.',
  ),

  ob('pcos', 'Polycystic Ovary Syndrome', 'Síndrome de ovario poliquístico', 'reproductive',
    'Common endocrine disorder diagnosed by Rotterdam criteria (2 of 3): oligo/anovulation, hyperandrogenism, polycystic ovarian morphology.',
    ['Irregular or absent menstrual periods', 'Hirsutism, acne, male-pattern hair loss', 'Obesity (50% of patients) and insulin resistance', 'Polycystic ovaries on ultrasound (≥12 follicles or volume >10 mL per ovary)', 'Infertility due to anovulation'],
    ['Total and free testosterone, DHEA-S', 'TSH and prolactin to exclude other causes', 'Fasting glucose, insulin, HbA1c, lipid panel', 'Pelvic ultrasound', '17-hydroxyprogesterone to rule out late-onset CAH'],
    'Lifestyle modification is cornerstone; hormonal contraception for menstrual regulation and hyperandrogenism; insulin sensitizers; ovulation induction for fertility.',
    ['Combined oral contraceptives for cycle regulation', 'Spironolactone for hirsutism and acne', 'Metformin for insulin resistance', 'Letrozole (first-line for ovulation induction)', 'Clomiphene citrate (alternative ovulation induction)'],
    ['Ovarian drilling (rarely used)', 'IVF for refractory infertility', 'Bariatric surgery for severe obesity with PCOS'],
    'PCOS is a lifelong condition requiring ongoing management. Weight loss of even 5-10% significantly improves symptoms and metabolic parameters.',
    ['Symptoms of diabetes (excessive thirst, urination)', 'Depression or anxiety symptoms', 'Prolonged amenorrhea without evaluation (endometrial cancer risk)'],
    'Screen for metabolic syndrome annually; endometrial protection with regular progestin withdrawal if not on OCs; depression screening.',
    'Even modest weight loss (5-10%) can restore ovulation and improve insulin sensitivity significantly.',
  ),

  ob('menopause-hrt', 'Menopause Management / HRT', 'Manejo de menopausia / TRH', 'reproductive',
    'Management of menopausal symptoms and long-term health risks; hormone replacement therapy for vasomotor symptoms in appropriate candidates.',
    ['Hot flashes and night sweats (vasomotor symptoms)', 'Vaginal dryness and dyspareunia', 'Sleep disturbances and mood changes', 'Accelerated bone loss', 'Diagnosis: 12 consecutive months of amenorrhea with no other cause'],
    ['Clinical diagnosis based on age and symptoms', 'FSH >30 mIU/mL if diagnosis uncertain (perimenopause)', 'DEXA scan for bone density', 'Lipid panel and metabolic screening'],
    'Shared decision-making for HRT: most effective for vasomotor symptoms within 10 years of menopause or before age 60. Non-hormonal options available.',
    ['Estrogen + progesterone (combined HRT if uterus intact)', 'Estrogen alone if post-hysterectomy', 'Low-dose vaginal estrogen for genitourinary syndrome', 'Paroxetine, venlafaxine, or gabapentin for non-hormonal vasomotor relief', 'Ospemifene for vaginal dryness'],
    ['Not typically surgical'],
    'HRT is the most effective treatment for hot flashes and vaginal symptoms. Benefits and risks should be individualized. The lowest effective dose for the shortest duration is recommended.',
    ['Unexpected vaginal bleeding on HRT', 'Chest pain or shortness of breath', 'Signs of DVT (leg swelling, pain)'],
    'DEXA screening at age 65 (earlier with risk factors); cardiovascular risk assessment; regular breast cancer screening.',
    'Vaginal moisturizers and lubricants can help dryness even without systemic hormones; use them regularly, not just during intercourse.',
  ),

  ob('recurrent-pregnancy-loss', 'Recurrent Pregnancy Loss', 'Pérdida recurrente del embarazo', 'reproductive',
    'Two or more failed clinical pregnancies; affects 1-2% of couples and warrants systematic evaluation.',
    ['History of two or more pregnancy losses before 20 weeks', 'May have no identifiable cause (50-75%)', 'Associated conditions: antiphospholipid syndrome, uterine anomalies, thyroid disease'],
    ['Karyotype of both partners', 'Antiphospholipid antibody panel (lupus anticoagulant, anticardiolipin, beta-2 glycoprotein)', 'TSH, prolactin', 'Pelvic ultrasound or saline sonogram for uterine anomalies', 'Chromosomal microarray on products of conception'],
    'Treat identified cause; antiphospholipid syndrome requires heparin plus aspirin in subsequent pregnancies; uterine anomalies may be surgically corrected; progesterone supplementation in select cases.',
    ['Low-dose aspirin + prophylactic heparin for antiphospholipid syndrome', 'Progesterone supplementation (vaginal or IM)', 'Levothyroxine if hypothyroid'],
    ['Hysteroscopic septum resection', 'Cervical cerclage for cervical insufficiency'],
    'Even without an identified cause, the prognosis for subsequent pregnancy is 60-75% with supportive care alone. Emotional support is important.',
    ['Heavy bleeding or passage of tissue in pregnancy', 'Fever or signs of infection after loss'],
    'Preconception evaluation and optimization; early prenatal care with next pregnancy; genetic counseling.',
    'Ask about a supportive early pregnancy program with frequent ultrasounds and reassurance visits in your next pregnancy.',
  ),

  // ============================================================
  // ONCOLOGIC (3)
  // ============================================================

  ob('cervical-cancer-screening', 'Cervical Cancer Screening (Pap/HPV)', 'Detección de cáncer cervical (Pap/VPH)', 'oncologic',
    'Systematic screening using cytology and/or HPV testing to detect cervical precancer and cancer early, when treatment is most effective.',
    ['Usually no symptoms at precancer stage', 'Abnormal vaginal bleeding or discharge when symptomatic', 'Risk factors: HPV infection, smoking, immunosuppression, early sexual activity'],
    ['Pap smear (cervical cytology)', 'HPV testing (high-risk types)', 'Co-testing (Pap + HPV) preferred for ages 30-65', 'Primary HPV testing alone emerging as preferred strategy'],
    'USPSTF guidelines: Pap every 3 years ages 21-29; Pap + HPV co-testing every 5 years or Pap alone every 3 years ages 30-65. Discontinue after 65 with adequate prior screening.',
    ['HPV vaccine (Gardasil 9) for prevention'],
    ['Colposcopy with biopsy for abnormal results', 'LEEP or conization for high-grade lesions', 'Hysterectomy for early-stage cervical cancer'],
    'Cervical cancer is one of the most preventable cancers through vaccination and regular screening. HPV vaccination is recommended for all adolescents starting at age 9-12.',
    ['Post-coital bleeding', 'Unexplained vaginal bleeding between periods', 'Pelvic pain with vaginal discharge'],
    'HPV vaccination; regular screening per guidelines; smoking cessation; safe sexual practices.',
    'If your Pap result is abnormal, do not panic; most abnormalities are minor and resolve with your immune system clearing HPV.',
  ),

  ob('ovarian-cancer-awareness', 'Ovarian Cancer Awareness', 'Concientización sobre cáncer de ovario', 'oncologic',
    'Ovarian cancer is often diagnosed at advanced stages due to vague symptoms; awareness of subtle signs and risk factors is critical.',
    ['Persistent bloating or abdominal distension', 'Pelvic or abdominal pain', 'Difficulty eating or early satiety', 'Urinary urgency or frequency', 'Fatigue, weight loss in advanced disease'],
    ['Pelvic ultrasound (transvaginal preferred)', 'CA-125 (elevated in ~80% of advanced epithelial ovarian cancer)', 'CT abdomen and pelvis for staging', 'Definitive diagnosis requires surgical biopsy', 'BRCA1/2 genetic testing for at-risk individuals'],
    'Primary treatment is surgical debulking followed by platinum-based chemotherapy. Early-stage disease may be managed with surgery alone in select cases.',
    ['Carboplatin + paclitaxel (standard first-line chemotherapy)', 'PARP inhibitors (olaparib, niraparib) for BRCA-positive or HRD-positive', 'Bevacizumab in advanced disease'],
    ['Total abdominal hysterectomy with bilateral salpingo-oophorectomy', 'Omentectomy and surgical debulking', 'Risk-reducing salpingo-oophorectomy for BRCA carriers'],
    'There is no reliable screening test for ovarian cancer. Awareness of persistent vague symptoms is key. Women with BRCA mutations should discuss risk-reducing surgery.',
    ['New persistent abdominal bloating or distension', 'Unexplained pelvic or abdominal pain lasting >2 weeks', 'Rapidly increasing abdominal girth'],
    'Genetic counseling if family history of ovarian or breast cancer; consider risk-reducing salpingo-oophorectomy for BRCA carriers after childbearing.',
    'If bloating, pelvic pain, or feeling full quickly persists for more than 2-3 weeks, see your gynecologist rather than attributing it to diet.',
  ),

  ob('endometrial-cancer', 'Endometrial Cancer', 'Cáncer de endometrio', 'oncologic',
    'Most common gynecologic malignancy; presents with postmenopausal bleeding in 90% of cases. Early detection confers excellent prognosis.',
    ['Postmenopausal bleeding (most common presentation)', 'Abnormal uterine bleeding in premenopausal women', 'Pelvic pain or pressure in advanced disease', 'Risk factors: obesity, unopposed estrogen, diabetes, PCOS, tamoxifen, Lynch syndrome'],
    ['Endometrial biopsy (first-line diagnostic test)', 'Transvaginal ultrasound (endometrial stripe >4 mm in postmenopausal women)', 'Hysteroscopy with directed biopsy', 'CT chest/abdomen/pelvis or MRI for staging', 'MSI/MMR testing and Lynch syndrome screening on tumor'],
    'Surgical staging with total hysterectomy, bilateral salpingo-oophorectomy, and lymph node assessment is standard. Adjuvant therapy based on stage and risk factors.',
    ['Progestin therapy (medroxyprogesterone or levonorgestrel IUD) for fertility-sparing in select early-stage cases', 'Adjuvant radiation or chemotherapy based on stage', 'Immune checkpoint inhibitors for MSI-high tumors (pembrolizumab)'],
    ['Total hysterectomy with bilateral salpingo-oophorectomy', 'Sentinel lymph node mapping', 'Tumor debulking for advanced disease'],
    'Any postmenopausal bleeding needs evaluation. When caught early, endometrial cancer has a 5-year survival rate over 90%. Weight management reduces risk significantly.',
    ['Any postmenopausal bleeding or spotting', 'Heavy or prolonged bleeding in premenopausal women not responding to treatment'],
    'Maintain healthy weight; endometrial protection with progesterone in women on estrogen therapy; Lynch syndrome screening if indicated.',
    'Never ignore bleeding after menopause, even a small amount; early evaluation leads to early diagnosis and excellent outcomes.',
  ),

  // ============================================================
  // UROGYNECOLOGIC (2)
  // ============================================================

  ob('pelvic-organ-prolapse', 'Pelvic Organ Prolapse', 'Prolapso de órganos pélvicos', 'urogynecologic',
    'Descent of pelvic organs (bladder, uterus, rectum) into the vaginal canal due to weakened pelvic floor support.',
    ['Vaginal bulge or pressure ("something falling out")', 'Urinary symptoms: incontinence, urgency, incomplete emptying', 'Difficulty with bowel movements (splinting required)', 'Sexual dysfunction', 'Worsening symptoms with standing or straining'],
    ['POP-Q staging on physical exam', 'Post-void residual measurement', 'Urodynamic testing if surgical planning', 'Pelvic floor muscle assessment'],
    'Conservative management first: pelvic floor physical therapy and pessary. Surgery for patients who fail or decline conservative therapy.',
    ['Vaginal estrogen cream for atrophic changes'],
    ['Pessary fitting (non-surgical)', 'Native tissue vaginal repair (anterior/posterior colporrhaphy)', 'Sacrocolpopexy (abdominal/laparoscopic/robotic)', 'Uterine-sparing procedures (Manchester, sacrospinous hysteropexy)', 'Vaginal hysterectomy with vault suspension'],
    'Prolapse is very common and not dangerous. A pessary is an effective non-surgical option. Pelvic floor exercises can slow progression.',
    ['Inability to urinate (complete obstruction)', 'New onset urinary retention', 'Ulceration of prolapsed tissue'],
    'Pelvic floor exercises (Kegels) during and after pregnancy; maintain healthy weight; treat chronic cough or constipation; proper lifting technique.',
    'A pessary is like a support device you can insert yourself; many women use one successfully for years without needing surgery.',
  ),

  ob('urinary-incontinence-female', 'Urinary Incontinence (Female)', 'Incontinencia urinaria (femenina)', 'urogynecologic',
    'Involuntary leakage of urine; classified as stress, urgency, or mixed type. Affects up to 50% of adult women.',
    ['Stress UI: leakage with cough, sneeze, exercise, or lifting', 'Urgency UI: sudden strong urge followed by leakage', 'Mixed: combination of both types', 'Nocturia and frequency', 'Risk factors: childbirth, obesity, menopause, pelvic surgery'],
    ['Voiding diary (3-day bladder record)', 'Urinalysis to exclude UTI', 'Post-void residual', 'Cough stress test on exam', 'Urodynamic testing for complex or pre-surgical evaluation'],
    'Behavioral therapy first (bladder training, pelvic floor exercises); medications for urgency UI; surgical options for stress UI refractory to conservative treatment.',
    ['Oxybutynin, tolterodine, or solifenacin for urgency UI', 'Mirabegron (beta-3 agonist) for urgency UI', 'Vaginal estrogen for atrophic urethritis', 'Duloxetine (off-label for stress UI in some countries)'],
    ['Mid-urethral sling for stress UI', 'Bulking agent injection (periurethral)', 'Botox injection into bladder wall for refractory urgency UI', 'Sacral neuromodulation (InterStim) for refractory urgency UI'],
    'Urinary incontinence is common, not a normal part of aging, and very treatable. Pelvic floor physical therapy is effective for most types.',
    ['New onset urinary retention', 'Hematuria with incontinence', 'Recurrent UTIs'],
    'Pelvic floor exercises during and after pregnancy; maintain healthy BMI; limit caffeine and alcohol; timed voiding.',
    'Start pelvic floor exercises today: contract as if stopping urine flow, hold 5 seconds, relax, repeat 10 times three times daily.',
  ),

  // ============================================================
  // CONTRACEPTION (3)
  // ============================================================

  ob('iud-counseling', 'IUD Counseling', 'Consejería sobre DIU', 'contraception',
    'Intrauterine devices are long-acting reversible contraceptives; copper (Paragard) or hormonal (Mirena, Kyleena, Liletta, Skyla) options available.',
    ['>99% effective contraception', 'Hormonal IUD: lighter periods or amenorrhea over time', 'Copper IUD: heavier periods initially, no hormones', 'Duration: 3-12 years depending on type', 'Rapid return to fertility after removal'],
    ['Pregnancy test before insertion', 'STI screening (can insert same day with treatment)', 'Pelvic exam to assess uterine position and size', 'No routine ultrasound required'],
    'Office-based insertion; consider NSAIDs pre-procedure for comfort; string check at 4-6 weeks post-insertion; remove when desired or at expiration.',
    ['Hormonal IUD: levonorgestrel 13.5-52 mg', 'NSAIDs before and after insertion for cramping', 'Misoprostol for cervical priming rarely needed'],
    ['Office insertion procedure', 'Ultrasound-guided reinsertion if strings not visible', 'Hysteroscopic removal if embedded'],
    'IUDs are among the most effective and convenient contraceptive methods. They do not increase infection risk after the insertion period and are safe for most women including nulliparous patients.',
    ['Severe cramping or pain weeks after insertion (perforation or expulsion)', 'Fever after insertion', 'Missing strings on self-check', 'Positive pregnancy test with IUD in place'],
    'Discuss LARC options with all reproductive-age women; IUD can be placed immediately postpartum or post-abortion.',
    'Check your IUD strings monthly after your period by reaching into your vagina and feeling for the threads at your cervix.',
  ),

  ob('hormonal-contraception', 'Hormonal Contraception Options', 'Opciones de anticoncepción hormonal', 'contraception',
    'Range of hormonal methods including pills, patch, ring, injection, implant, and hormonal IUD offering different durations and delivery routes.',
    ['Combined methods (estrogen + progestin): pill, patch, ring', 'Progestin-only methods: mini-pill, injection (DMPA), implant (Nexplanon), hormonal IUD', 'Non-contraceptive benefits: lighter periods, less dysmenorrhea, acne improvement, endometriosis management'],
    ['Blood pressure measurement', 'Screening for contraindications (US MEC criteria): migraines with aura, VTE history, breast cancer, smoking >35 years old for combined methods', 'BMI documentation', 'No routine lab work required for healthy patients'],
    'Shared decision-making using effectiveness, ease of use, side effects, non-contraceptive benefits, and patient preference. Quick-start method: begin same day as visit.',
    ['Combined OCs (many formulations)', 'Transdermal patch (Xulane)', 'Vaginal ring (NuvaRing, Annovera)', 'DMPA injection 150 mg IM every 12 weeks', 'Etonogestrel implant (Nexplanon) lasting 3 years', 'Norethindrone progestin-only pill'],
    ['Nexplanon insertion/removal (office procedure)', 'IUD insertion (see IUD counseling)'],
    'No single method is best for everyone. Effectiveness depends largely on consistent use for short-acting methods. LARCs (implant, IUD) are most effective because they do not require daily adherence.',
    ['Chest pain, shortness of breath (PE risk with combined methods)', 'Severe headache or vision changes', 'Severe leg pain or swelling (DVT risk)'],
    'Annual reassessment of contraceptive needs; blood pressure check with combined methods; transition planning for desired pregnancy.',
    'Set a daily phone alarm for pill-taking, or consider a long-acting method if remembering daily medication is challenging.',
  ),

  ob('emergency-contraception', 'Emergency Contraception', 'Anticoncepción de emergencia', 'contraception',
    'Post-coital methods to prevent pregnancy after unprotected intercourse or contraceptive failure; most effective the sooner taken.',
    ['Levonorgestrel pill: effective up to 72 hours (some efficacy to 120 hours)', 'Ulipristal acetate (ella): effective up to 120 hours', 'Copper IUD: most effective EC, up to 5 days after intercourse', 'None cause abortion of established pregnancy'],
    ['Pregnancy test if uncertain about existing pregnancy', 'No exam or labs required for oral EC', 'Pelvic exam only if copper IUD insertion planned'],
    'Oral EC available OTC (levonorgestrel) or by prescription (ulipristal). Copper IUD requires office visit but is most effective and provides ongoing contraception.',
    ['Levonorgestrel 1.5 mg single dose (Plan B)', 'Ulipristal acetate 30 mg single dose (ella)', 'Antiemetic if nausea occurs'],
    ['Copper IUD insertion (most effective EC method, >99%)'],
    'Emergency contraception is not an abortion pill; it prevents pregnancy from occurring. It is safe and more effective the sooner it is taken. Consider ongoing contraception to prevent future need.',
    ['Not applicable'],
    'Educate patients about EC availability in advance; consider advance prescription; discuss transition to regular contraception.',
    'Keep emergency contraception at home so it is available immediately when needed; it works best within the first 24 hours.',
  ),
];

// Populate the record
for (const entry of entries) {
  OBGYN_ENTRIES[entry.id] = entry;
}

// --- Utility Functions ---

/** Look up a single OB/GYN entry by its id. */
export function getOBGYNEntry(id: string): OBGYNEntry | undefined {
  return OBGYN_ENTRIES[id];
}

/** Search OB/GYN entries by keyword across name, nameEs, summary, and patientCounseling. */
export function searchOBGYN(query: string): OBGYNEntry[] {
  const q = query.toLowerCase();
  return Object.values(OBGYN_ENTRIES).filter(e =>
    e.name.toLowerCase().includes(q) ||
    e.nameEs.toLowerCase().includes(q) ||
    e.summary.toLowerCase().includes(q) ||
    e.patientCounseling.toLowerCase().includes(q) ||
    e.id.toLowerCase().includes(q)
  );
}

/** Get all OB/GYN entries in a given subcategory. */
export function getOBGYNBySubcategory(subcategory: OBGYNSubcategory): OBGYNEntry[] {
  return Object.values(OBGYN_ENTRIES).filter(e => e.subcategory === subcategory);
}

/** Get total count of OB/GYN entries. */
export function getOBGYNCount(): number {
  return Object.keys(OBGYN_ENTRIES).length;
}
