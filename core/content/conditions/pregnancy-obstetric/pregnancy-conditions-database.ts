/**
 * Pregnancy & Obstetric Conditions Database
 *
 * Comprehensive reference of 15 pregnancy-specific conditions with
 * clinical summaries, patient education, and emergency guidance.
 * Covers gestational, antepartum, intrapartum, and postpartum conditions.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type PregnancyCategory =
  | 'gestational-metabolic'
  | 'hypertensive'
  | 'placental'
  | 'preterm'
  | 'postpartum'
  | 'early-pregnancy'
  | 'fetal';

export interface PregnancyConditionEntry {
  id: string;
  name: string;
  nameEs: string;
  category: PregnancyCategory;
  icd11: string;
  description: string;
  riskFactors: string[];
  pathophysiology: string;
  symptoms: string[];
  diagnostics: string[];
  treatment: string;
  lifestyle: string;
  emergencySigns: string[];
  patientExplanation: string;
}

// ---------------------------------------------------------------------------
// Compact helper
// ---------------------------------------------------------------------------

function preg(
  id: string, name: string, nameEs: string,
  category: PregnancyCategory, icd11: string, description: string,
  riskFactors: string[], pathophysiology: string,
  symptoms: string[], diagnostics: string[],
  treatment: string, lifestyle: string,
  emergencySigns: string[], patientExplanation: string,
): PregnancyConditionEntry {
  return {
    id, name, nameEs, category, icd11, description,
    riskFactors, pathophysiology, symptoms, diagnostics,
    treatment, lifestyle, emergencySigns, patientExplanation,
  };
}

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const PREGNANCY_CONDITIONS: Record<string, PregnancyConditionEntry> = {

  // ---- Gestational-Metabolic (2) -------------------------------------------

  'gestational-diabetes': preg(
    'gestational-diabetes', 'Gestational Diabetes Mellitus (GDM)', 'Diabetes mellitus gestacional',
    'gestational-metabolic', 'JA63',
    'Glucose intolerance first recognized during pregnancy, typically developing in the second or third trimester due to increasing insulin resistance.',
    ['Obesity (BMI >30)', 'Age >25', 'Family history of type 2 diabetes', 'Prior GDM', 'PCOS', 'Hispanic, African American, Native American, or Asian ethnicity', 'Prior macrosomic infant (>4000 g)', 'Glycosuria'],
    'Placental hormones (human placental lactogen, progesterone, cortisol, growth hormone) create progressive insulin resistance to ensure fetal glucose supply. When maternal pancreatic beta-cells cannot compensate with increased insulin secretion, hyperglycemia results. Chronic fetal hyperglycemia causes fetal hyperinsulinemia, driving macrosomia and neonatal hypoglycemia.',
    ['Often asymptomatic—detected by screening', 'Polyuria', 'Polydipsia', 'Fatigue', 'Recurrent vaginal candidiasis', 'Larger-than-expected fundal height'],
    ['Universal screening at 24-28 weeks gestation', 'One-step: 75 g OGTT (IADPSG criteria)', 'Two-step: 50 g GCT then 100 g OGTT if screen positive', 'Early screening if high-risk factors present', 'Fasting plasma glucose', 'HbA1c (adjunctive)'],
    'Medical nutrition therapy and exercise are first-line. Target fasting glucose <95 mg/dL, 1-h postprandial <140 mg/dL, 2-h postprandial <120 mg/dL. Insulin is first-line pharmacotherapy if diet fails. Metformin or glyburide considered in select cases. Antenatal fetal surveillance starting 32-36 weeks. Delivery timing: 39-40 weeks if well-controlled; 37-39 weeks if requiring medication.',
    'Structured meal plan with consistent carbohydrate intake spread across 3 meals and 2-3 snacks, moderate exercise 30 min/day most days, daily glucose self-monitoring (4 times/day), weight gain per IOM guidelines, postpartum glucose screening at 4-12 weeks and annually thereafter.',
    ['Fingerstick glucose >200 mg/dL', 'Symptoms of DKA (rare but possible): nausea, vomiting, abdominal pain, fruity breath', 'Decreased fetal movement', 'Signs of preeclampsia (headache, visual changes, edema)'],
    'Gestational diabetes means your body cannot make enough extra insulin to keep blood sugar normal during pregnancy. Pregnancy hormones from the placenta block insulin from working properly. This does not mean you had diabetes before or did anything wrong—it is caused by the demands of pregnancy. Controlling blood sugar with diet, exercise, and sometimes insulin protects your baby from growing too large and helps prevent birth complications. After delivery, blood sugar usually returns to normal, but you will need regular screening because GDM increases your lifetime risk of type 2 diabetes.',
  ),

  'hyperemesis-gravidarum': preg(
    'hyperemesis-gravidarum', 'Hyperemesis Gravidarum', 'Hiperemesis gravidica',
    'gestational-metabolic', 'JA60.0',
    'Severe, persistent nausea and vomiting in pregnancy causing weight loss, dehydration, electrolyte imbalance, and ketonuria, extending beyond typical morning sickness.',
    ['First pregnancy', 'History of HG in prior pregnancy', 'Molar pregnancy', 'Multiple gestation', 'Family history of HG', 'Female fetus', 'Hyperthyroidism', 'Helicobacter pylori infection', 'History of motion sickness or migraines'],
    'Exact etiology unknown but likely multifactorial. Rising beta-hCG levels (peak at 9-12 weeks) stimulate the chemoreceptor trigger zone. Estrogen slows gastric motility. Progesterone relaxes the lower esophageal sphincter. Serotonin receptor activation in the GI tract contributes. Genetic susceptibility via GDF15 and IGFBP7 pathways recently identified.',
    ['Intractable nausea and vomiting (>3 episodes/day)', 'Weight loss >5% of pre-pregnancy weight', 'Inability to tolerate oral intake', 'Dehydration (dry mucous membranes, decreased urine output)', 'Ptyalism (excessive salivation)', 'Fatigue and weakness', 'Dizziness or syncope'],
    ['Clinical diagnosis based on severity', 'Weight change from pre-pregnancy baseline', 'Urinalysis (ketonuria, specific gravity)', 'BMP (electrolytes, renal function)', 'Hepatic panel (mildly elevated transaminases in 50%)', 'TSH and free T4 (transient hyperthyroidism common)', 'Pelvic ultrasound to rule out molar pregnancy or multiple gestation', 'PUQE score (Pregnancy-Unique Quantification of Emesis)'],
    'Stepwise approach: dietary modifications and ginger/vitamin B6 first; add doxylamine-pyridoxine (Diclegis/Bonjesta). Second-line: ondansetron, metoclopramide, promethazine. IV fluid resuscitation with dextrose and thiamine (give thiamine BEFORE dextrose to prevent Wernicke encephalopathy). Severe cases: TPN, corticosteroids (methylprednisolone). Hospitalization for intractable symptoms or metabolic derangement.',
    'Small, frequent meals every 1-2 hours; bland, high-protein foods; avoid triggers (strong smells, fatty foods); stay upright after eating; ginger tea or candies; acupressure wristbands; adequate rest; emotional support and reassurance that it usually resolves by 16-20 weeks.',
    ['Inability to keep any fluids down for 24 hours', 'Dark urine or no urine output', 'Dizziness or fainting', 'Rapid heart rate', 'Blood in vomit', 'Weight loss >10%', 'Confusion (possible Wernicke encephalopathy)'],
    'Hyperemesis gravidarum is much more than morning sickness—it is severe nausea and vomiting that can make you lose weight and become dehydrated. It is caused by the high levels of pregnancy hormones, especially in early pregnancy. The good news is that it usually improves by the 4th or 5th month. There are safe medications that can help, and IV fluids can be given if you cannot keep anything down. It is important to seek care early rather than "pushing through," because dehydration can affect both you and your baby.',
  ),

  // ---- Hypertensive (3) ----------------------------------------------------

  'gestational-hypertension': preg(
    'gestational-hypertension', 'Gestational Hypertension', 'Hipertension gestacional',
    'hypertensive', 'JA22',
    'New-onset hypertension (BP >=140/90 mmHg) after 20 weeks gestation without proteinuria or other features of preeclampsia.',
    ['Nulliparity', 'Age >35', 'Obesity', 'African American ethnicity', 'Multiple gestation', 'Prior gestational hypertension', 'Family history of preeclampsia', 'Assisted reproduction'],
    'Incompletely understood but involves abnormal placental vascular development with incomplete spiral artery remodeling. Unlike preeclampsia, endothelial dysfunction is less severe—no significant proteinuria or end-organ damage at diagnosis. Up to 50% of cases diagnosed before 34 weeks progress to preeclampsia.',
    ['Elevated blood pressure on two occasions at least 4 hours apart', 'Often asymptomatic—detected at prenatal visit', 'Mild lower extremity edema (nonspecific)', 'Headache (should raise concern for progression)'],
    ['Serial blood pressure monitoring', 'Urine protein-to-creatinine ratio or 24-hour urine protein (<300 mg)', 'CBC with platelet count', 'Hepatic transaminases', 'Serum creatinine', 'Fetal growth ultrasound', 'Antenatal surveillance (NST/BPP) starting at diagnosis'],
    'Expectant management with close surveillance if mild and remote from term. No antihypertensives unless severe range (>=160/110); first-line: labetalol, nifedipine, or hydralazine for acute severe hypertension. Low-dose aspirin if diagnosed <37 weeks. Delivery at 37+0 weeks per ACOG guidelines. Magnesium sulfate if severe features develop. Postpartum BP monitoring for 72 hours and at 7-10 days.',
    'Regular prenatal visits (weekly or biweekly after diagnosis), home BP monitoring twice daily, low-sodium diet, adequate rest, monitor for warning signs of preeclampsia, weight monitoring, moderate walking as tolerated.',
    ['BP >=160/110 mmHg on repeat measurement', 'Severe headache unrelieved by acetaminophen', 'Visual disturbances (blurred vision, scotomata)', 'Right upper quadrant or epigastric pain', 'Sudden edema of face or hands', 'Decreased fetal movement'],
    'Gestational hypertension means your blood pressure is elevated during pregnancy even though it was normal before. It usually appears in the second half of pregnancy. While it can be mild, it needs careful monitoring because it can sometimes develop into preeclampsia, a more serious condition. Regular prenatal visits, home blood pressure checks, and knowing the warning signs help your doctor keep you and your baby safe. Delivery is the definitive treatment, and your blood pressure typically returns to normal within 12 weeks after birth.',
  ),

  'preeclampsia': preg(
    'preeclampsia', 'Preeclampsia / Eclampsia', 'Preeclampsia / Eclampsia',
    'hypertensive', 'JA24',
    'Multisystem disorder of pregnancy characterized by new-onset hypertension and proteinuria or end-organ dysfunction after 20 weeks gestation, with eclampsia representing the convulsive manifestation.',
    ['Nulliparity', 'Prior preeclampsia', 'Chronic hypertension', 'Pregestational diabetes', 'Obesity', 'Multiple gestation', 'Autoimmune disease (SLE, APS)', 'Chronic kidney disease', 'Advanced maternal age (>35)', 'Family history of preeclampsia', 'In vitro fertilization', 'Interpregnancy interval >10 years'],
    'Abnormal placentation: defective trophoblast invasion of spiral arteries leads to incomplete vascular remodeling, causing placental hypoperfusion and oxidative stress. The ischemic placenta releases anti-angiogenic factors (sFlt-1, soluble endoglin) that overwhelm pro-angiogenic factors (VEGF, PlGF), causing systemic endothelial dysfunction. This leads to vasospasm, increased vascular permeability, end-organ ischemia, and activation of the coagulation cascade. Eclampsia seizures result from cerebral vasospasm, ischemia, and vasogenic edema.',
    ['Hypertension >=140/90 mmHg', 'Proteinuria (>=300 mg/24h or protein/creatinine ratio >=0.3)', 'Headache (severe, persistent, frontal)', 'Visual disturbances (scotomata, blurred vision, photophobia)', 'Right upper quadrant or epigastric pain', 'Sudden facial or hand edema', 'Nausea and vomiting in late pregnancy', 'Hyperreflexia with clonus', 'Eclampsia: tonic-clonic seizures', 'SEVERE features: BP >=160/110, platelets <100k, liver transaminases 2x normal, creatinine >1.1, pulmonary edema, cerebral or visual symptoms'],
    ['Serial blood pressure measurements', 'Urine protein-to-creatinine ratio or 24-hour urine protein', 'CBC with platelet count', 'Comprehensive metabolic panel (creatinine, AST, ALT, LDH)', 'Uric acid (often elevated)', 'sFlt-1/PlGF ratio (emerging biomarker)', 'Fetal assessment: ultrasound (growth, fluid), umbilical artery Doppler, NST/BPP', 'CT or MRI brain if atypical seizure or focal neurologic deficit'],
    'Without severe features and <37 weeks: expectant management with close surveillance, twice-weekly labs and fetal testing, antenatal corticosteroids if <34 weeks. Delivery at 37 weeks. With severe features: delivery after maternal stabilization regardless of gestational age if >=34 weeks; if <34 weeks, consider 48h for corticosteroids if stable. Magnesium sulfate for seizure prophylaxis (4-6 g IV load, 1-2 g/h maintenance) and for eclamptic seizures. Antihypertensives for severe-range BP: IV labetalol, IV hydralazine, or oral nifedipine. Low-dose aspirin (81 mg) starting at 12-16 weeks for prevention in high-risk women.',
    'Frequent prenatal visits (1-2x/week with severe features), daily home BP monitoring, daily fetal movement counts, immediate reporting of warning symptoms, left lateral rest, adequate hydration, low-sodium diet, avoid NSAIDs, plan for delivery at appropriate facility with NICU.',
    ['Blood pressure >=160/110 mmHg', 'Severe persistent headache', 'Visual changes (flashing lights, blind spots)', 'Right upper quadrant pain', 'Seizure (eclampsia—call 911)', 'Shortness of breath (pulmonary edema)', 'Decreased fetal movement', 'Vaginal bleeding'],
    'Preeclampsia is a pregnancy complication where your blood pressure rises and can damage organs like your kidneys and liver. It happens because the placenta does not develop its blood supply properly, which releases substances that harm your blood vessels throughout your body. It can be mild or severe, and in rare cases can cause seizures (called eclampsia). That is why your doctor checks your blood pressure and urine at every prenatal visit. The only cure is delivery, but medications can manage blood pressure and prevent seizures until your baby is ready. Taking a daily low-dose aspirin early in pregnancy can reduce the risk if you are in a high-risk group.',
  ),

  'hellp-syndrome': preg(
    'hellp-syndrome', 'HELLP Syndrome', 'Sindrome de HELLP',
    'hypertensive', 'JA24.0',
    'Life-threatening variant of severe preeclampsia characterized by Hemolysis, Elevated Liver enzymes, and Low Platelets, requiring urgent delivery.',
    ['Prior HELLP or preeclampsia', 'Multiparity (unlike preeclampsia)', 'Age >25', 'White ethnicity', 'Chronic hypertension', 'Antiphospholipid syndrome'],
    'Considered a severe form of preeclampsia involving endothelial activation and microangiopathic hemolytic anemia. Fibrin deposition in hepatic sinusoids causes periportal necrosis, elevated transaminases, and risk of subcapsular hematoma or hepatic rupture. Platelet consumption occurs via endothelial damage and DIC-like process. Fragmented RBCs (schistocytes) reflect mechanical hemolysis from damaged microvasculature.',
    ['Right upper quadrant or epigastric pain (most common presenting symptom)', 'Nausea and vomiting', 'Malaise and fatigue', 'Hypertension (may be absent in 15-20%)', 'Jaundice', 'Headache', 'Visual changes', 'Hematuria or bleeding (from thrombocytopenia)', 'Rapid clinical deterioration'],
    ['CBC: platelets <100,000/microL', 'Peripheral blood smear: schistocytes, burr cells', 'LDH >600 IU/L (hemolysis marker)', 'AST/ALT elevated (often >70 IU/L)', 'Total bilirubin >1.2 mg/dL (indirect predominance)', 'Haptoglobin decreased', 'PT/INR, fibrinogen (DIC screen)', 'Mississippi classification: Class 1 (platelets <=50k), Class 2 (50-100k), Class 3 (100-150k)', 'Liver ultrasound if subcapsular hematoma suspected'],
    'Delivery is definitive treatment. Stabilize mother: magnesium sulfate for seizure prophylaxis, antihypertensives for severe BP, correct coagulopathy (platelets, FFP, cryoprecipitate as needed). Corticosteroids (dexamethasone 10 mg IV q12h) to improve platelet count and for fetal lung maturity if <34 weeks. If >=34 weeks: deliver after stabilization. If <34 weeks: consider 24-48h delay for corticosteroids if maternal condition stable. Blood products readily available. Monitor for hepatic rupture, DIC, renal failure, placental abruption. Postpartum: labs should improve within 48-72 hours; if not, consider other diagnoses (TTP, HUS, AFLP).',
    'Hospitalization required—no outpatient management. Close monitoring of labs every 6-12 hours. Awareness of symptoms for future pregnancies (5-19% recurrence risk). Postpartum follow-up to confirm lab normalization. Long-term cardiovascular risk assessment.',
    ['Worsening right upper quadrant pain', 'Signs of hepatic rupture: shoulder pain, hypotension, distended abdomen', 'Bleeding from IV sites or gums (DIC)', 'Seizure', 'Altered mental status', 'Severe hypertension unresponsive to treatment', 'Sudden visual loss'],
    'HELLP syndrome is a serious complication of pregnancy related to preeclampsia. The name stands for what happens in your blood: your red blood cells break apart (Hemolysis), liver enzymes become Elevated (meaning liver damage), and your platelet count drops Low (making it hard to clot blood). It can come on suddenly and make you feel very ill, often with pain in the upper right part of your belly. HELLP requires urgent delivery to protect your life. Your medical team will monitor you very closely and may give medications to stabilize your condition before delivery. Most women recover fully after delivery, though labs may take a few days to return to normal.',
  ),

  // ---- Placental (3) -------------------------------------------------------

  'placenta-previa': preg(
    'placenta-previa', 'Placenta Previa', 'Placenta previa',
    'placental', 'JA42',
    'Abnormal placental implantation that partially or completely covers the internal cervical os, the leading cause of painless third-trimester bleeding.',
    ['Prior cesarean delivery (strongest risk factor)', 'Prior placenta previa', 'Multiple gestation', 'Multiparity', 'Advanced maternal age', 'Smoking', 'Cocaine use', 'Prior uterine surgery (curettage, myomectomy)', 'Assisted reproduction'],
    'The placenta implants in the lower uterine segment rather than the fundus. As the lower uterine segment thins and dilates in the third trimester, the placenta detaches from the underlying decidua, disrupting maternal blood vessels at the placental–uterine interface. Bleeding is maternal in origin (not fetal). With lower segment development, some low-lying placentas "migrate" upward; complete previa at 20 weeks resolves in ~90% by term.',
    ['Painless bright-red vaginal bleeding (hallmark)', 'Typically in third trimester (peak 34 weeks)', 'Initial sentinel bleed often self-limited', 'Recurrent bleeding episodes of increasing severity', 'Soft non-tender uterus', 'High-presenting fetal part or malpresentation', 'May be asymptomatic if discovered incidentally on ultrasound'],
    ['Transvaginal ultrasound (gold standard—safe and accurate)', 'Transabdominal ultrasound (screening)', 'MRI if concurrent accreta spectrum suspected', 'Classification: complete (covers os), partial (partially covers os), marginal (edge within 2 cm of os), low-lying (within 2 cm but not reaching os)', 'Type and screen/crossmatch', 'CBC, coagulation studies', 'Kleihauer-Betke test if Rh-negative'],
    'Asymptomatic: expectant management with pelvic rest, serial ultrasounds, antenatal corticosteroids at 36-37 weeks. Symptomatic but stable: hospitalization, IV access, blood product availability, tocolysis if concurrent contractions (avoid beta-agonists—use magnesium), Rh immunoglobulin if indicated. Delivery: scheduled cesarean at 36-37+6 weeks for stable complete previa, or earlier if uncontrollable hemorrhage. Emergency cesarean for massive hemorrhage regardless of gestational age. Accreta spectrum workup essential if prior cesarean.',
    'Strict pelvic rest (no intercourse, tampons, or douching), avoid strenuous activity and heavy lifting, maintain close proximity to hospital with blood bank, arrange emergency transport plan, keep hospital bag ready, know blood type, attend all follow-up appointments.',
    ['Active bright-red vaginal bleeding', 'Soaking more than one pad per hour', 'Dizziness, lightheadedness, or fainting', 'Contractions or cramping with bleeding', 'Decreased fetal movement'],
    'Placenta previa means your placenta is covering the opening of your cervix (the door to your uterus). As your pregnancy progresses and the cervix begins to prepare for birth, the placenta can separate slightly, causing painless bright-red bleeding. Many low-lying placentas move out of the way as the uterus grows, which is why your doctor rechecks with ultrasound. If the placenta stays over the cervix, a cesarean delivery is planned before labor begins to prevent serious bleeding. The most important thing is to avoid anything in the vagina and to go to the hospital immediately if you have any vaginal bleeding.',
  ),

  'placental-abruption': preg(
    'placental-abruption', 'Placental Abruption', 'Desprendimiento prematuro de placenta',
    'placental', 'JA43',
    'Premature separation of a normally implanted placenta from the uterine wall before delivery, causing maternal hemorrhage and fetal compromise.',
    ['Chronic hypertension or preeclampsia (most common)', 'Prior abruption (10-17% recurrence)', 'Trauma (MVA, domestic violence)', 'Cocaine or methamphetamine use', 'Smoking', 'Advanced maternal age', 'Premature rupture of membranes', 'Polyhydramnios with rapid decompression', 'Short umbilical cord', 'Thrombophilia'],
    'Rupture of maternal decidual vessels creates a retroplacental hematoma that dissects the placenta away from the uterine wall. Hemorrhage may be revealed (vaginal bleeding), concealed (trapped behind placenta), or mixed. Severe abruption causes consumptive coagulopathy (DIC) as tissue thromboplastin enters the maternal circulation. Fetal compromise results from loss of placental surface area for gas exchange. Couvelaire uterus occurs when blood infiltrates the myometrium.',
    ['Painful vaginal bleeding (classic presentation)', 'Uterine tenderness and rigidity (woody/board-like uterus)', 'Concealed hemorrhage: pain and uterine irritability without visible bleeding', 'High-frequency contractions or uterine hypertonus', 'Fetal distress (tachycardia, decelerations, or absent heart tones)', 'Maternal hemodynamic instability in severe cases', 'Back pain (posterior placenta)'],
    ['Clinical diagnosis—do NOT delay delivery for imaging', 'Ultrasound: sensitivity only 50% (absence does not exclude)', 'Retroplacental clot may be visible', 'Continuous fetal monitoring (category III tracing)', 'CBC, fibrinogen (critical—<200 mg/dL predicts severe coagulopathy)', 'PT/INR, D-dimer', 'Type and crossmatch', 'Kleihauer-Betke test'],
    'Severity-based approach. Mild (partial, stable, remote from term): hospitalization, close monitoring, antenatal corticosteroids if <34 weeks, delivery at 37 weeks if stable. Moderate-to-severe: immediate delivery regardless of gestational age. Vaginal delivery if maternal/fetal status allows and rapid progress; otherwise emergency cesarean. Aggressive fluid and blood product resuscitation (MTP activation for massive hemorrhage). Replace fibrinogen (cryoprecipitate) to maintain >200 mg/dL. Rh immunoglobulin if indicated. Postpartum: monitor for DIC, renal failure, Sheehan syndrome.',
    'Smoking cessation (essential), avoid cocaine and stimulant drugs, control blood pressure before and during pregnancy, seat belt use (lap belt below uterus), report any domestic violence, attend regular prenatal visits, report abdominal pain or bleeding immediately.',
    ['Any vaginal bleeding with abdominal pain', 'Severe constant abdominal or back pain', 'Uterine tenderness or rigidity', 'Decreased or absent fetal movement', 'Dizziness, rapid heartbeat, or fainting (shock)', 'Gush of fluid (concurrent membrane rupture)'],
    'Placental abruption means the placenta separates from the wall of the uterus before the baby is born. This is an emergency because the placenta is your baby\'s lifeline for oxygen and nutrients. Separation causes bleeding—sometimes visible, sometimes hidden inside. You may feel sudden, constant pain with a very firm belly. The severity ranges from mild (small area of separation) to life-threatening. If abruption is suspected, your medical team will monitor you and your baby closely and may need to deliver urgently. Controlling blood pressure, not smoking, and avoiding drugs like cocaine help reduce the risk.',
  ),

  'ectopic-pregnancy': preg(
    'ectopic-pregnancy', 'Ectopic Pregnancy', 'Embarazo ectopico',
    'early-pregnancy', 'JA00',
    'Implantation of a fertilized ovum outside the endometrial cavity, most commonly in the fallopian tube (>95%), representing a life-threatening surgical emergency if ruptured.',
    ['Prior ectopic pregnancy (10-25% recurrence)', 'Prior tubal surgery or tubal ligation', 'Pelvic inflammatory disease (Chlamydia, gonorrhea)', 'Endometriosis', 'IUD in situ (does not increase absolute risk but if pregnancy occurs, more likely ectopic)', 'Assisted reproduction (IVF)', 'Smoking', 'Age >35', 'DES exposure in utero'],
    'Damaged or dysfunctional fallopian tube epithelium (from infection, surgery, or inflammation) impairs ovum transport, allowing implantation in the tube. The tubal wall lacks the decidual response and distensibility of the uterus. As the trophoblast invades, it erodes into tubal vessels. Growth eventually causes tubal distension and rupture with intraperitoneal hemorrhage. Rarely, ectopic implantation occurs in the ovary, cervix, cesarean scar, or abdomen.',
    ['Amenorrhea or missed period (6-8 weeks)', 'Unilateral pelvic or lower abdominal pain', 'Vaginal bleeding or spotting (usually scant, dark)', 'Shoulder-tip pain (diaphragmatic irritation from hemoperitoneum)', 'Adnexal tenderness on exam', 'Cervical motion tenderness', 'Rupture: sudden severe pain, syncope, tachycardia, hypotension'],
    ['Serum quantitative beta-hCG (serial measurements 48 hours apart—abnormal rise <53% or plateau)', 'Transvaginal ultrasound (empty uterus with hCG >3510 mIU/mL = discriminatory zone)', 'Findings: adnexal mass, tubal ring sign, free fluid in cul-de-sac', 'CBC (baseline, monitor for dropping Hgb)', 'Blood type and Rh status', 'Progesterone <5 ng/mL suggests nonviable pregnancy', 'Diagnostic laparoscopy if equivocal'],
    'Medical: methotrexate (single-dose or multi-dose protocol) for unruptured ectopic if: hemodynamically stable, no fetal cardiac activity, beta-hCG <5000 mIU/mL, mass <3.5 cm, reliable follow-up. Monitor weekly hCG until undetectable. Surgical: laparoscopic salpingostomy (tube-sparing) or salpingectomy (tube removal). Emergency laparotomy for ruptured ectopic with hemodynamic instability. Rh immunoglobulin if Rh-negative. Contraception counseling; future fertility: ~60% intrauterine pregnancy rate after one ectopic.',
    'Report any pelvic pain or abnormal bleeding in early pregnancy, keep all follow-up appointments for serial hCG monitoring after treatment, avoid intercourse and heavy activity during methotrexate treatment, avoid alcohol and folate supplements during methotrexate therapy, screening for STIs and treatment to prevent recurrence.',
    ['Sudden severe one-sided pelvic or abdominal pain', 'Shoulder pain (indicates intraperitoneal bleeding)', 'Dizziness, fainting, or lightheadedness', 'Heavy vaginal bleeding with positive pregnancy test', 'Rapid heart rate, pale skin, weakness (shock)'],
    'An ectopic pregnancy happens when a fertilized egg attaches outside the uterus, almost always in a fallopian tube. The tube cannot stretch like the uterus, so the pregnancy cannot develop normally and can rupture, causing dangerous internal bleeding. Warning signs include one-sided pelvic pain, abnormal vaginal bleeding, and dizziness. If caught early, it can be treated with medication (methotrexate) that stops the pregnancy from growing. If it has ruptured or is large, surgery is needed. Having an ectopic pregnancy does not mean you cannot have a normal pregnancy in the future—most women do.',
  ),

  // ---- Preterm (2) ---------------------------------------------------------

  'preterm-labor': preg(
    'preterm-labor', 'Preterm Labor', 'Trabajo de parto pretermino',
    'preterm', 'JB04',
    'Regular uterine contractions causing cervical change between 20+0 and 36+6 weeks of gestation, the leading cause of neonatal morbidity and mortality worldwide.',
    ['Prior preterm birth (strongest risk factor)', 'Short cervical length (<25 mm on TVU)', 'Multiple gestation', 'Uterine anomalies (septate, bicornuate)', 'Cervical insufficiency or prior cervical surgery (LEEP, cone)', 'Infection (chorioamnionitis, BV, UTI)', 'Polyhydramnios', 'Placental abruption or previa', 'Smoking', 'Low pre-pregnancy BMI', 'African American ethnicity', 'Short interpregnancy interval (<18 months)', 'Periodontal disease'],
    'Multiple pathways converge on a common final pathway of uterine activation. Infection/inflammation triggers decidual activation, prostaglandin release, and matrix metalloproteinase-mediated cervical remodeling. Uteroplacental ischemia causes placental stress signals. Uterine overdistension (multiples, polyhydramnios) mechanically activates contraction-associated proteins. Premature activation of the maternal or fetal HPA axis increases CRH and cortisol, upregulating prostaglandins and oxytocin receptors. The result is progressive cervical effacement, dilation, and coordinated myometrial contractions.',
    ['Regular uterine contractions (>=4/20 min or >=8/60 min)', 'Lower abdominal cramping or menstrual-like cramps', 'Low back pain (constant or rhythmic)', 'Pelvic pressure or heaviness', 'Vaginal discharge change (mucoid, bloody show)', 'Cervical dilation and/or effacement on exam'],
    ['Digital cervical exam (dilation, effacement, station)', 'Fetal fibronectin (fFN) from vaginal swab (negative = <1% delivery in 2 weeks, high NPV)', 'Transvaginal cervical length (>=30 mm reassuring, <25 mm high risk)', 'Continuous electronic fetal monitoring and tocodynamometry', 'Urinalysis and urine culture', 'GBS culture', 'Vaginal/cervical swab for BV, gonorrhea, chlamydia', 'Amniocentesis if intraamniotic infection suspected (glucose, WBC, gram stain, culture)'],
    'Tocolysis to delay delivery 48 hours for corticosteroid effect (not for prolonged use): nifedipine (preferred first-line), indomethacin (<32 weeks, max 48h), magnesium sulfate (also for neuroprotection). Antenatal corticosteroids: betamethasone 12 mg IM x2, 24h apart (24+0 to 33+6 weeks) or single rescue course if >14 days since first. Magnesium sulfate for fetal neuroprotection if <32 weeks (reduces cerebral palsy risk). GBS prophylaxis if status unknown or positive. Antibiotics for confirmed infection. Progesterone supplementation (17-OHPC or vaginal) for prevention in high-risk patients with singleton pregnancy and prior preterm birth. Cervical cerclage for short cervix or cervical insufficiency.',
    'Recognize preterm labor symptoms, hydration, smoking cessation, regular prenatal care, treatment of UTIs and vaginal infections, dental health, stress reduction, avoid prolonged standing (>4 hours), adequate nutrition, compliance with progesterone supplementation if prescribed.',
    ['Contractions every 10 minutes or more frequently', 'Gush of fluid from vagina (rupture of membranes)', 'Vaginal bleeding', 'Persistent low back pain with cramping', 'Pelvic pressure that feels like baby pushing down', 'Change in vaginal discharge (watery, mucoid, or bloody)'],
    'Preterm labor means your body is trying to deliver your baby too early—before 37 weeks. Babies born prematurely may need special care because their lungs, brain, and other organs are not fully developed. If you notice regular cramping, back pain, or a change in discharge, contact your doctor right away. There are medications that can temporarily stop contractions and, most importantly, help your baby\'s lungs mature faster if early delivery cannot be prevented. Many preterm births can be prevented with good prenatal care, treating infections, and sometimes using progesterone supplementation.',
  ),

  'premature-rupture-of-membranes': preg(
    'premature-rupture-of-membranes', 'Premature Rupture of Membranes (PROM/PPROM)', 'Ruptura prematura de membranas',
    'preterm', 'JB05',
    'Rupture of fetal membranes before the onset of labor. Preterm PROM (PPROM) occurs before 37 weeks and is the leading identifiable cause of preterm birth.',
    ['Prior PPROM (recurrence 16-32%)', 'Genital tract infection (BV, GBS, Chlamydia)', 'Smoking', 'Short cervical length', 'Prior cervical surgery', 'Amniocentesis (1% risk)', 'Polyhydramnios', 'Multiple gestation', 'Nutritional deficiencies (vitamin C, zinc, copper)', 'Low socioeconomic status'],
    'Fetal membranes (amnion and chorion) normally resist rupture through tensile strength from collagen and elastin fibers. Pathologic weakening occurs via: (1) ascending infection causing inflammatory cytokine release and activation of matrix metalloproteinases (MMPs) that degrade collagen; (2) mechanical stress from uterine overdistension; (3) apoptotic pathways triggered by oxidative stress; (4) decreased membrane collagen content. Focal areas of weakness ("restricted zone of altered morphology") near cervix are most susceptible. After rupture, ascending infection risk increases dramatically, with chorioamnionitis the primary concern.',
    ['Sudden gush or persistent leakage of clear fluid from vagina', 'Continuous dampness despite changing pads', 'Fluid may be clear, yellow-tinged, or blood-tinged', 'May have mild contractions', 'Foul-smelling discharge if infection present', 'Fever and tachycardia (signs of chorioamnionitis)'],
    ['Sterile speculum exam (pooling of fluid in posterior fornix)', 'Nitrazine test (turns blue—amniotic fluid is alkaline, pH 7.1-7.3)', 'Fern test (arborization pattern on dried slide)', 'AmniSure (PAMG-1) or ROM Plus (definitive point-of-care tests)', 'Avoid digital cervical exam until active labor (increases infection risk)', 'Ultrasound for oligohydramnios (reduced amniotic fluid)', 'GBS culture', 'CBC, CRP (infection markers)', 'Amniocentesis if infection suspected (intraamniotic glucose <14 mg/dL, elevated WBC, positive gram stain)'],
    'Term PROM (>=37 weeks): induction of labor (oxytocin or prostaglandins), GBS prophylaxis if indicated; expectant management up to 12-24 hours if no infection. PPROM (24-33+6 weeks): expectant management with latency antibiotics (ampicillin + erythromycin x7 days, extending latency period ~1 week), antenatal corticosteroids (betamethasone), magnesium sulfate if <32 weeks for neuroprotection, GBS prophylaxis, daily monitoring for chorioamnionitis (temperature, fetal heart rate, uterine tenderness, labs). Deliver for chorioamnionitis, non-reassuring fetal status, placental abruption, or umbilical cord prolapse. PPROM 34-36+6 weeks: delivery recommended per ACOG. Periviable PPROM (<24 weeks): counseling regarding prognosis; expectant management or delivery based on shared decision-making.',
    'Bed rest or activity restriction as directed, monitor temperature twice daily, watch for foul-smelling discharge or uterine tenderness, count fetal movements daily, avoid intercourse and baths (showers OK), maintain adequate hydration, stay near delivery facility, keep hospital bag ready.',
    ['Fever or chills (>=100.4 F / 38 C)', 'Foul-smelling vaginal discharge', 'Uterine tenderness or contractions', 'Decreased fetal movement', 'Vaginal bleeding', 'Cord prolapse: feeling something in vagina after gush of fluid—call 911, assume knee-chest position'],
    'Premature rupture of membranes means your "water broke" before labor started. The bag of fluid around your baby protects against infection and supports lung development. If this happens before 37 weeks (preterm PROM), it is more concerning because the baby may not be fully ready to be born. Antibiotics are given to prevent infection and buy time for steroid medicine to help the baby\'s lungs mature. Your medical team will monitor you and your baby closely for signs of infection. At full term, labor usually starts on its own within 24 hours of membrane rupture; if not, it can be safely induced.',
  ),

  // ---- Postpartum (2) ------------------------------------------------------

  'postpartum-hemorrhage': preg(
    'postpartum-hemorrhage', 'Postpartum Hemorrhage', 'Hemorragia posparto',
    'postpartum', 'JA44',
    'Excessive bleeding after delivery: classically >500 mL after vaginal birth or >1000 mL after cesarean. The leading cause of maternal death worldwide.',
    ['Uterine atony (most common cause—70-80%)', 'Prolonged or augmented labor', 'Overdistended uterus (macrosomia, multiples, polyhydramnios)', 'Grand multiparity', 'Chorioamnionitis', 'Retained placental tissue or membranes', 'Placenta accreta spectrum', 'Genital tract lacerations', 'Coagulopathy (DIC, von Willebrand disease)', 'Prior PPH', 'Magnesium sulfate use', 'Uterine-relaxing anesthetics'],
    'The "4 Ts" framework: Tone (uterine atony—most common; the postpartum uterus fails to contract around spiral arteries at the placental site, allowing blood to pour from the 500-800 mL/min uteroplacental circulation). Tissue (retained placenta or clots prevent contraction). Trauma (cervical, vaginal, or perineal lacerations; uterine rupture; uterine inversion). Thrombin (coagulation disorders—DIC, dilutional coagulopathy, inherited or acquired). After placental separation, myometrial contraction ("physiologic ligatures") compresses spiral arteries; failure at any step causes hemorrhage.',
    ['Heavy vaginal bleeding that does not slow after delivery', 'Boggy, poorly contracted uterus on palpation (atony)', 'Tachycardia (often earliest sign)', 'Hypotension and dizziness', 'Pallor and diaphoresis', 'Large blood clots', 'Signs of shock: confusion, cool extremities, oliguria', 'Occult bleeding: rising fundal height, vaginal hematoma, intra-abdominal bleeding'],
    ['Quantitative blood loss measurement (calibrated drapes, weighted sponges)', 'Vital signs and shock index (HR/SBP >0.9 abnormal)', 'Bimanual uterine assessment for atony', 'Inspect cervix, vagina, perineum for lacerations', 'Manual uterine exploration for retained products', 'CBC, fibrinogen (<300 mg/dL early warning; <200 mg/dL critical)', 'Coagulation studies (PT, PTT)', 'Type and crossmatch', 'Ultrasound for retained products or uterine abnormality', 'Point-of-care testing: thromboelastography (TEG) or ROTEM'],
    'Systematic approach: Bimanual uterine massage (first step for atony). Uterotonics: oxytocin infusion (first-line), methylergonovine (IM, avoid in hypertension), carboprost/hemabate (IM, avoid in asthma), misoprostol (sublingual/rectal). Tranexamic acid (TXA) 1g IV within 3 hours (WOMAN trial). Tamponade: intrauterine balloon (Bakri), uterine packing. Surgical: uterine compression sutures (B-Lynch), uterine artery ligation, internal iliac artery ligation. Uterine artery embolization (interventional radiology). Hysterectomy as life-saving last resort. Massive transfusion protocol (1:1:1 RBC:FFP:platelets). Correct fibrinogen with cryoprecipitate (target >200 mg/dL). Replace calcium. Cell salvage where available.',
    'Active management of third stage of labor (routine oxytocin, controlled cord traction, uterine massage), recognize and report heavy bleeding immediately, postpartum uterine massage education, iron supplementation postpartum, avoid aspirin/NSAIDs if coagulopathy, early ambulation to reduce venous stasis, ensure IV access maintained for 24 hours if risk factors present.',
    ['Soaking more than one pad per hour', 'Passing large blood clots', 'Feeling lightheaded, dizzy, or faint', 'Rapid heart rate or shortness of breath', 'Feeling cold or clammy', 'Blurred vision or confusion', 'Abdominal pain or distension after cesarean'],
    'Postpartum hemorrhage means heavy bleeding after your baby is born. The most common cause is the uterus not contracting firmly enough to close off the blood vessels where the placenta was attached. Think of the uterus as a muscle that needs to clamp down to stop bleeding. Your medical team watches for this carefully and has medications that help the uterus contract. In rare cases, other treatments or procedures may be needed. The key is early recognition—do not be shy about reporting heavy bleeding, dizziness, or a racing heart after delivery. Modern medicine has many effective tools to treat PPH when caught early.',
  ),

  'postpartum-depression': preg(
    'postpartum-depression', 'Postpartum Depression', 'Depresion posparto',
    'postpartum', 'JA89',
    'Major depressive episode occurring during pregnancy or within 4 weeks postpartum (DSM-5 peripartum onset specifier), though clinically recognized up to 12 months postpartum. Distinct from the "baby blues."',
    ['Prior depression or anxiety', 'Prior PPD', 'Family history of depression', 'History of PMDD', 'Inadequate social support', 'Stressful life events', 'Intimate partner violence', 'Unplanned pregnancy', 'Pregnancy or delivery complications', 'Breastfeeding difficulties', 'NICU admission of infant', 'Young maternal age', 'Thyroid dysfunction'],
    'Multifactorial etiology involving biological, psychological, and social factors. Rapid postpartum decline in estrogen and progesterone disrupts serotonergic, noradrenergic, and GABAergic neurotransmission. Allopregnanolone (a neurosteroid progesterone metabolite and positive GABA-A modulator) drops sharply after placental delivery; impaired neurosteroid sensitivity is a key mechanism (basis for brexanolone/zuranolone therapy). HPA axis dysregulation with elevated cortisol. Inflammatory cytokine elevation. Sleep deprivation compounds neurobiological vulnerability. Psychosocial stressors amplify risk in biologically predisposed individuals.',
    ['Persistent sadness, emptiness, or hopelessness lasting >=2 weeks', 'Loss of interest or pleasure in activities', 'Difficulty bonding with the baby', 'Excessive crying', 'Withdrawal from family and friends', 'Appetite changes (usually decreased)', 'Insomnia or hypersomnia (beyond normal newborn sleep disruption)', 'Severe fatigue or loss of energy', 'Feelings of worthlessness or excessive guilt', 'Difficulty concentrating or making decisions', 'Anxiety or panic attacks (common comorbidity)', 'Intrusive thoughts of harming self or baby', 'Recurrent thoughts of death or suicide'],
    ['Universal screening with Edinburgh Postnatal Depression Scale (EPDS >=13 = positive) or PHQ-9 (>=10 = positive)', 'Screen at first prenatal visit, third trimester, and postpartum visits (1, 2, 4, 6 weeks and beyond)', 'Differentiate from baby blues (resolves by 2 weeks, less severe)', 'TSH (rule out thyroid dysfunction)', 'CBC (rule out anemia)', 'Clinical interview assessing DSM-5 criteria for major depressive episode', 'Safety assessment: suicidality and infanticidal ideation', 'Screen for bipolar disorder before starting antidepressants (MDQ)'],
    'Mild: psychotherapy (CBT, IPT—both evidence-based for PPD). Moderate-to-severe: SSRIs first-line (sertraline preferred—low breast milk transfer; also paroxetine, fluoxetine). Combination therapy (SSRI + psychotherapy) most effective. Brexanolone (IV allopregnanolone, 60-hour infusion, REMS program) for moderate-to-severe PPD. Zuranolone (oral neuroactive steroid, 14-day course) FDA-approved 2023 for PPD—rapid onset. Severe/refractory: SNRIs, augmentation strategies. Psychiatric emergency (psychosis, active suicidality): hospitalization, mood stabilizer if bipolar features, antipsychotic if psychotic. Electroconvulsive therapy (ECT) safe and effective for severe/refractory PPD. Breastfeeding: most SSRIs compatible; shared decision-making. Partner and family education essential.',
    'Social support mobilization, adequate sleep (partner shares nighttime duties), physical activity (30 min/day), balanced nutrition, limit isolation, peer support groups, couples therapy if relationship strain, gradual return to pleasurable activities, mindfulness and stress reduction, avoid alcohol.',
    ['Thoughts of harming yourself or your baby', 'Thoughts of suicide or not wanting to live', 'Inability to care for yourself or your baby', 'Hearing voices or seeing things (postpartum psychosis—emergency)', 'Paranoia or bizarre behavior', 'Severe insomnia (no sleep for days)', 'Panic attacks interfering with daily functioning'],
    'Postpartum depression is a real medical condition, not a sign of weakness or being a bad parent. Dramatic hormone changes after birth, combined with sleep loss and the stress of caring for a newborn, can trigger depression in any new mother. It goes far beyond the "baby blues"—it can make you feel hopeless, disconnected from your baby, and unable to function. The good news is it is very treatable. Therapy, medication, and support can help you feel like yourself again. New faster-acting treatments are now available. The most important step is telling your doctor or someone you trust how you are feeling. You deserve help, and getting better is good for you and your baby.',
  ),

  // ---- Early Pregnancy (1) -------------------------------------------------

  'miscarriage': preg(
    'miscarriage', 'Miscarriage / Spontaneous Abortion', 'Aborto espontaneo',
    'early-pregnancy', 'JA03',
    'Loss of pregnancy before 20 weeks gestation, occurring in approximately 10-20% of clinically recognized pregnancies. Most common in the first trimester.',
    ['Advanced maternal age (>35: 20% risk; >40: 40% risk; >45: >50%)', 'Prior miscarriage (recurrent if >=3)', 'Chromosomal abnormalities (50-60% of first-trimester losses)', 'Uterine anomalies (septate uterus, fibroids)', 'Antiphospholipid syndrome', 'Uncontrolled diabetes or thyroid disease', 'Smoking', 'Heavy alcohol or caffeine use', 'BMI >30', 'Infections (TORCH, BV)', 'Cervical insufficiency (second trimester losses)'],
    'First trimester: most commonly due to embryonic chromosomal aneuploidy (trisomy, monosomy, triploidy) from errors in meiosis. Abnormal karyotype prevents normal development. Second trimester: structural uterine abnormalities, cervical insufficiency, thrombophilias, and infection are more common. Immunologic: antiphospholipid antibodies cause placental thrombosis and infarction. Hormonal: inadequate progesterone from corpus luteum may impair decidualization (luteal phase defect—controversial). Recurrent loss warrants evaluation for parental balanced translocation, antiphospholipid syndrome, uterine anomalies, and endocrine disorders.',
    ['Vaginal bleeding (ranging from spotting to heavy)', 'Cramping or lower abdominal pain', 'Passage of tissue or clots', 'Disappearance of pregnancy symptoms (nausea, breast tenderness)', 'Types: threatened (bleeding, cervix closed, viable); inevitable (cervix dilating, membranes intact); incomplete (partial tissue passage); complete (all tissue passed); missed (embryonic demise without symptoms); septic (infected products)'],
    ['Pelvic ultrasound (transvaginal): empty gestational sac (anembryonic), absent fetal cardiac activity, crown-rump length >=7mm without heartbeat', 'Serial quantitative beta-hCG (abnormal: <53% rise in 48h, plateau, or decline)', 'Blood type and Rh status', 'CBC if significant bleeding', 'Recurrent loss workup: karyotype of products of conception, parental karyotype, antiphospholipid antibodies (lupus anticoagulant, anticardiolipin, anti-beta2-GP1), TSH, HbA1c, uterine imaging (HSG, SHG, MRI)'],
    'Expectant management: await spontaneous passage (effective in ~80% of incomplete miscarriage within 2-6 weeks). Medical: misoprostol 800 mcg vaginally (complete expulsion 80-90% within 48h). Surgical: uterine aspiration (manual vacuum or suction curettage) for heavy bleeding, hemodynamic instability, infected products, or patient preference. Anti-D immunoglobulin for Rh-negative patients. Recurrent loss: aspirin + heparin for antiphospholipid syndrome, cerclage for cervical insufficiency, surgical correction of uterine septum, progesterone supplementation in early pregnancy (evidence modest). Emotional support and bereavement counseling.',
    'Allow yourself to grieve, accept support from partner and loved ones, no intercourse or tampons until bleeding stops, follow up in 1-2 weeks, wait for at least one menstrual cycle before trying again (WHO recommends >=6 months for optimal outcomes), genetic counseling if recurrent, avoid self-blame—most miscarriages are due to random chromosomal events beyond anyone\'s control.',
    ['Very heavy bleeding (soaking >1 pad/hour for >2 hours)', 'Severe abdominal or pelvic pain', 'Fever (>=100.4 F) suggesting infection', 'Dizziness, fainting, or lightheadedness', 'Foul-smelling vaginal discharge', 'Prolonged bleeding >2 weeks after diagnosis'],
    'Miscarriage is very common—about 1 in 5 known pregnancies ends this way, usually in the first three months. Most of the time it happens because of a random chromosome problem in the embryo that prevented normal development. It is not caused by exercise, stress, or something you did wrong. There are three options for management: waiting for your body to pass the tissue naturally, using medication to help, or a brief procedure. All three are safe and effective. If you experience recurrent miscarriages, your doctor can test for treatable causes. Grief after a miscarriage is normal and valid, and support is available.',
  ),

  // ---- Fetal (2) -----------------------------------------------------------

  'rh-incompatibility': preg(
    'rh-incompatibility', 'Rh Incompatibility', 'Incompatibilidad Rh',
    'fetal', 'KA87',
    'Maternal alloimmunization against fetal Rh(D)-positive red blood cells, potentially causing hemolytic disease of the fetus and newborn (HDFN) in subsequent pregnancies.',
    ['Rh(D)-negative mother with Rh(D)-positive fetus', 'Prior sensitizing event without RhIG prophylaxis (delivery, miscarriage, ectopic, amniocentesis, trauma)', 'Prior affected pregnancy', 'Blood transfusion with Rh-positive blood (rare today)'],
    'During pregnancy or delivery, small amounts of fetal Rh(D)-positive blood enter the Rh(D)-negative maternal circulation (fetomaternal hemorrhage). The maternal immune system recognizes the D antigen as foreign and produces anti-D IgG antibodies (sensitization). In subsequent pregnancies with an Rh-positive fetus, maternal IgG crosses the placenta and coats fetal RBCs, causing extravascular hemolysis in the fetal spleen. Progressive fetal anemia leads to extramedullary hematopoiesis, hepatomegaly, hypoalbuminemia, and eventually hydrops fetalis (severe edema, ascites, pleural/pericardial effusions). Neonatal hyperbilirubinemia from ongoing hemolysis can cause kernicterus.',
    ['Usually asymptomatic in mother', 'First affected pregnancy: often mild', 'Subsequent pregnancies: worsening severity', 'Fetal signs detected on ultrasound: increased MCA Doppler peak systolic velocity (earliest non-invasive sign of fetal anemia), hydrops fetalis (skin edema, ascites, pleural effusions, pericardial effusion), polyhydramnios, hepatosplenomegaly, placental edema', 'Neonatal: jaundice within 24 hours, anemia, hepatosplenomegaly, hydrops'],
    ['Blood type and Rh status at first prenatal visit', 'Antibody screen (indirect Coombs test) at first visit and 28 weeks', 'If antibody positive: titer every 4 weeks (critical titer >=1:16 or >=1:32 depending on lab)', 'Cell-free fetal DNA (cffDNA) from maternal blood to determine fetal Rh status non-invasively', 'MCA Doppler peak systolic velocity (>1.5 MoM suggests moderate-severe anemia)', 'Amniocentesis for delta OD450 (Liley curve)—rarely needed now', 'Cordocentesis (percutaneous umbilical blood sampling) for fetal hematocrit and direct transfusion'],
    'Prevention (key strategy): RhIG (anti-D immunoglobulin, RhoGAM) 300 mcg IM at 28 weeks gestation AND within 72 hours of delivery of Rh-positive infant. Additional doses after sensitizing events (amniocentesis, CVS, trauma, bleeding, miscarriage, ectopic, external cephalic version). Kleihauer-Betke test to quantify fetomaternal hemorrhage if large bleed suspected (additional RhIG doses as needed). Already sensitized: RhIG is no longer effective. Serial MCA Doppler surveillance. Intrauterine transfusion (IUT) of Rh-negative, O-negative, CMV-negative, irradiated packed RBCs via cordocentesis for severe fetal anemia. Early delivery if fetal compromise. Neonatal: phototherapy, exchange transfusion for severe hyperbilirubinemia, IVIG.',
    'Know your blood type and Rh status, ensure you receive RhIG at the recommended times, report any vaginal bleeding during pregnancy, attend all scheduled prenatal appointments, carry your blood type card, inform all healthcare providers of Rh-negative status.',
    ['Decreased fetal movement (sign of severe fetal anemia)', 'Rapidly increasing abdominal girth (hydrops, polyhydramnios)', 'Yellowing of skin or eyes in newborn within first 24 hours', 'Newborn lethargy or poor feeding'],
    'Rh incompatibility happens when a mother has Rh-negative blood and her baby has Rh-positive blood (inherited from the father). If the baby\'s blood cells cross into the mother\'s bloodstream, her immune system may develop antibodies against them. These antibodies can attack the baby\'s blood cells in future pregnancies, causing anemia. The great news is that this problem is almost entirely preventable with a simple injection called RhoGAM, given during pregnancy and after delivery. This shot prevents your immune system from making the antibodies in the first place. This is why your blood type is checked at the very first prenatal visit.',
  ),

  'intrauterine-growth-restriction': preg(
    'intrauterine-growth-restriction', 'Intrauterine Growth Restriction (IUGR)', 'Restriccion del crecimiento intrauterino (RCIU)',
    'fetal', 'JB06',
    'Failure of the fetus to reach its genetically determined growth potential, defined as estimated fetal weight <10th percentile for gestational age with evidence of pathologic growth. Also termed fetal growth restriction (FGR).',
    ['Preeclampsia and hypertensive disorders', 'Chronic maternal disease (SLE, renal disease, cyanotic heart disease)', 'Antiphospholipid syndrome', 'Smoking', 'Substance use (alcohol, cocaine, heroin)', 'Maternal malnutrition', 'Multiple gestation', 'Placental insufficiency', 'Congenital infections (TORCH: CMV, toxoplasmosis, rubella)', 'Chromosomal abnormalities (trisomy 13, 18, triploidy)', 'Uterine anomalies', 'High altitude', 'Thrombophilias'],
    'Two main patterns: Asymmetric (most common, ~70-80%): caused by placental insufficiency. Abnormal placentation leads to reduced uteroplacental blood flow. The fetus adapts by redistributing cardiac output to brain, heart, and adrenals ("brain-sparing") at the expense of abdominal organs, subcutaneous fat, and liver glycogen. Abdominal circumference is disproportionately small. Symmetric (~20-30%): early global insult (chromosomal abnormality, early infection, teratogen exposure) reduces cell number uniformly. Head and body are proportionally small. Placental insufficiency ultimately leads to fetal hypoxia, lactic acidosis, and if severe, cardiovascular decompensation with abnormal Doppler findings (absent or reversed end-diastolic flow in umbilical artery, abnormal ductus venosus).',
    ['Small fundal height for gestational age (SFH <GA in cm)', 'Often detected on routine ultrasound', 'Decreased fetal movement (late sign of compromise)', 'Oligohydramnios (reduced amniotic fluid)', 'Mother may not gain expected weight'],
    ['Serial ultrasound biometry (AC most sensitive; EFW <10th percentile)', 'Customized growth charts (adjusting for maternal height, weight, ethnicity, parity)', 'Umbilical artery Doppler (elevated S/D ratio, absent or reversed end-diastolic flow)', 'MCA Doppler (decreased PI = brain-sparing, MCA/UA ratio <1 = cerebroplacental ratio abnormal)', 'Ductus venosus Doppler (absent or reversed a-wave = severe—imminent fetal demise)', 'Amniotic fluid index or deepest vertical pocket', 'NST and BPP', 'Workup for etiology: TORCH serologies, karyotype/microarray (amniocentesis), antiphospholipid antibodies, uterine artery Doppler screening at 20-24 weeks'],
    'No proven therapy reverses IUGR—management focuses on surveillance and optimal delivery timing. Mild (EFW 3rd-10th percentile, normal Doppler): serial growth ultrasounds every 2-3 weeks, weekly or biweekly NST/BPP, deliver at 37-38 weeks. Moderate (EFW <3rd percentile or abnormal umbilical artery Doppler): more intensive surveillance every 1-2 weeks, antenatal corticosteroids if <34 weeks, deliver at 34-37 weeks. Severe (absent/reversed end-diastolic flow): daily monitoring, corticosteroids, deliver by 32-34 weeks (or sooner if ductus venosus abnormal or BPP <=4). Magnesium sulfate for neuroprotection if <32 weeks. Low-dose aspirin (150 mg) starting at 12-16 weeks for prevention in high-risk patients. Deliver in tertiary center with NICU.',
    'Smoking cessation (critical—smoking is the most modifiable risk factor), avoid alcohol and drugs, adequate nutrition (protein and calorie intake), low-dose aspirin if prescribed, rest (left lateral position improves uterine blood flow), manage underlying conditions, attend all surveillance appointments, daily fetal movement counts.',
    ['Decreased or absent fetal movement', 'No fetal movement for 2 hours during normally active period', 'Sudden decrease in belly size', 'Severe headache or visual changes (may indicate worsening preeclampsia)'],
    'Intrauterine growth restriction means your baby is not growing as well as expected in the womb. The most common cause is the placenta not delivering enough nutrients and oxygen to the baby. Think of the placenta as a supply line—if the flow is reduced, the baby grows more slowly. Your doctor will monitor your baby closely with ultrasounds and heart rate tests to make sure the baby is coping well. While there is no medicine to make the baby grow faster, careful monitoring lets the doctor choose the safest time to deliver. Not smoking is the single most important thing you can do to help blood flow to your baby.',
  ),

};

// ---------------------------------------------------------------------------
// Utility functions
// ---------------------------------------------------------------------------

/** Get a single condition by ID. */
export function getPregnancyCondition(id: string): PregnancyConditionEntry | undefined {
  return PREGNANCY_CONDITIONS[id];
}

/** Search conditions by name, category, or any text field (case-insensitive). */
export function searchPregnancyConditions(query: string): PregnancyConditionEntry[] {
  const q = query.toLowerCase();
  return Object.values(PREGNANCY_CONDITIONS).filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.nameEs.toLowerCase().includes(q) ||
    c.category.toLowerCase().includes(q) ||
    c.description.toLowerCase().includes(q) ||
    c.pathophysiology.toLowerCase().includes(q) ||
    c.treatment.toLowerCase().includes(q) ||
    c.patientExplanation.toLowerCase().includes(q),
  );
}

/** Filter conditions by category. */
export function getPregnancyByCategory(category: PregnancyCategory): PregnancyConditionEntry[] {
  return Object.values(PREGNANCY_CONDITIONS).filter(c => c.category === category);
}

/** Return the total number of pregnancy conditions in the database. */
export function getPregnancyConditionCount(): number {
  return Object.keys(PREGNANCY_CONDITIONS).length;
}

/** Get all conditions with a specific risk factor (case-insensitive). */
export function getPregnancyByRiskFactor(riskFactor: string): PregnancyConditionEntry[] {
  const rf = riskFactor.toLowerCase();
  return Object.values(PREGNANCY_CONDITIONS).filter(c =>
    c.riskFactors.some(r => r.toLowerCase().includes(rf)),
  );
}
