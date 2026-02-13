/**
 * High-Risk Pregnancy Signs
 *
 * Educational content covering warning signs in pregnancy, risk factors for
 * complications, emergency versus urgent symptoms, preeclampsia recognition,
 * and evidence-based surveillance strategies for high-risk pregnancies.
 */

import { EducationalContent } from '../../types';

export const highRiskPregnancySignsContent: EducationalContent = {
  id: 'topic-high-risk-pregnancy-signs',
  type: 'topic',
  name: 'High-Risk Pregnancy Signs',
  nameEs: 'Senales de Embarazo de Alto Riesgo',
  alternateNames: ['Pregnancy warning signs', 'Danger signs in pregnancy', 'Pregnancy complications recognition'],

  levels: {
    1: {
      level: 1,
      summary:
        'Some pregnancies have a higher chance of problems. Knowing the warning signs helps you get help fast and keeps you and your baby safe.',
      explanation: `Most pregnancies go well, but sometimes problems happen. The most important thing is to recognize warning signs early so you can get medical help right away.

**Go to the Emergency Room Immediately If You Have:**
- Heavy vaginal bleeding (soaking a pad in an hour)
- Severe headache that does not go away with rest or Tylenol
- Sudden swelling of your face or hands
- Vision changes: seeing spots, blurry vision, or flashing lights
- Severe abdominal pain that does not stop
- Seizures or loss of consciousness
- Gush of fluid from the vagina before 37 weeks
- Your baby stops moving or moves much less than normal
- Difficulty breathing or chest pain
- Fever over 100.4 F (38 C)

**Call Your Doctor the Same Day If You Have:**
- Vaginal bleeding that is light (spotting) but does not stop
- Painful urination or blood in urine
- Persistent vomiting and you cannot keep fluids down
- A bad headache or one that keeps coming back
- More swelling than usual in your legs or feet
- Contractions before 37 weeks (regular tightening or cramping)
- Feeling sad, hopeless, or having thoughts of harming yourself

**What Makes a Pregnancy High Risk?**
Some things make complications more likely:
- Being younger than 17 or older than 35
- Having diabetes, high blood pressure, or other health conditions before pregnancy
- Being very overweight or very underweight
- Having had problems in a past pregnancy
- Carrying twins or more
- Smoking, drinking alcohol, or using drugs
- Certain infections during pregnancy

**Understanding Preeclampsia**
Preeclampsia is one of the most serious pregnancy complications. It involves high blood pressure and can harm your organs.
- Usually starts after 20 weeks of pregnancy
- Warning signs: severe headache, vision changes, upper belly pain, sudden swelling
- It can get worse quickly, so do not wait to call your doctor
- The only cure is delivering the baby, but medications can manage it until delivery is safe

**Keeping Track of Your Baby's Movement**
- Starting around 28 weeks, count your baby's kicks each day
- You should feel at least 10 movements in 2 hours
- Do this at the same time each day, when baby is usually active
- If movement decreases, drink something cold, lie on your side, and count again
- If you still do not feel enough movement, call your doctor right away

**Blood Pressure Monitoring**
- Normal: less than 120/80
- Elevated: 120-129/less than 80
- High: 140/90 or higher (this needs attention in pregnancy)
- Very high: 160/110 or higher (this is an emergency in pregnancy)`,
      keyTerms: [
        { term: 'preeclampsia', definition: 'A serious pregnancy condition causing high blood pressure and possible damage to organs like the liver and kidneys; usually starts after 20 weeks' },
        { term: 'preterm labor', definition: 'Labor that starts before 37 weeks of pregnancy; the baby may be born too early and need special care' },
        { term: 'placental abruption', definition: 'When the placenta separates from the wall of the uterus before delivery, causing bleeding and putting mother and baby in danger' },
        { term: 'high-risk pregnancy', definition: 'A pregnancy that has a greater chance of complications because of the mother\'s health, age, or other factors' },
        { term: 'eclampsia', definition: 'Seizures that happen in a pregnant woman with high blood pressure; a medical emergency' },
        { term: 'kick counts', definition: 'A way to check on your baby by counting how many times you feel the baby move during a set period of time' },
      ],
      analogies: [
        'Think of blood pressure in pregnancy like a pressure gauge on a water pipe. A little pressure is normal, but too much can damage the pipe. Preeclampsia means the pressure is getting dangerously high.',
        'Kick counts are like checking in on your baby. Just as you would peek into a sleeping child\'s room, counting movements lets you know your baby is doing well.',
        'Warning signs are like smoke alarms. They do not always mean a fire, but you should never ignore them. Check it out quickly, and most of the time, everything will be fine.',
      ],
      patientCounselingPoints: [
        'It is always better to call your doctor and have everything be fine than to wait and have a real problem get worse. No question is too small.',
        'If you have a severe headache, vision changes, or upper belly pain together, go to the emergency room. These can be signs of preeclampsia, which can get dangerous quickly.',
        'Decreased baby movement does not always mean something is wrong, but it always needs to be checked. Trust your instincts.',
        'Keep a list of emergency numbers on your phone: your doctor, the hospital labor and delivery unit, and 911.',
      ],
    },
    2: {
      level: 2,
      summary:
        'High-risk pregnancy involves identifiable risk factors, recognizable warning signs, and specific conditions including preeclampsia, preterm labor, placental abnormalities, and fetal growth restriction that require enhanced monitoring and timely intervention.',
      explanation: `**Risk Factor Assessment**
| Category | Risk Factors |
|----------|-------------|
| Demographic | Age <17 or >35; BMI <18.5 or >30; racial disparities in outcomes |
| Medical history | Chronic hypertension, diabetes, autoimmune disease, renal disease, thrombophilia |
| Obstetric history | Prior preterm birth, preeclampsia, stillbirth, cesarean, cervical insufficiency |
| Current pregnancy | Multiple gestation, bleeding, abnormal screening, substance use |
| Social factors | Domestic violence, food insecurity, limited prenatal care access, mental health conditions |

**Hypertensive Disorders of Pregnancy**
| Condition | Definition | Timing |
|-----------|-----------|--------|
| Chronic hypertension | BP >= 140/90 before 20 weeks or pre-pregnancy | Pre-existing |
| Gestational hypertension | BP >= 140/90 after 20 weeks without proteinuria or end-organ damage | After 20 weeks |
| Preeclampsia without severe features | BP >= 140/90 + proteinuria (>= 300 mg/24h) or end-organ dysfunction | After 20 weeks |
| Preeclampsia with severe features | BP >= 160/110, thrombocytopenia, elevated liver enzymes, renal insufficiency, pulmonary edema, cerebral/visual symptoms | After 20 weeks |
| Eclampsia | Seizures in setting of preeclampsia | Any time peripartum |
| HELLP syndrome | Hemolysis, Elevated Liver enzymes, Low Platelets | Variant of severe preeclampsia |

**Preeclampsia Warning Signs**
- Severe persistent headache not relieved by acetaminophen
- Visual disturbances: scotomata, photophobia, blurred vision
- Right upper quadrant or epigastric pain (liver capsule distension)
- Rapid weight gain (>5 lbs/week due to edema)
- Nausea/vomiting in second half of pregnancy
- Oliguria (<500 mL/24 hours)

**Preterm Labor Recognition**
| Sign | Description |
|------|-----------|
| Regular contractions | 4+ in 20 minutes or 8+ in 60 minutes before 37 weeks |
| Cervical change | Progressive dilation or effacement on exam |
| Pelvic pressure | Low, heavy feeling in pelvis |
| Backache | Low back pain that comes and goes rhythmically |
| Vaginal discharge change | Increase in mucus, watery, or bloody discharge |
| Rupture of membranes | Gush or trickle of fluid from vagina |

**Placental Complications**
| Condition | Presentation | Management |
|-----------|-------------|-----------|
| Placenta previa | Painless vaginal bleeding (2nd-3rd trimester) | Pelvic rest; serial ultrasound; cesarean delivery if persists |
| Placental abruption | Painful bleeding; rigid uterus; fetal distress | Emergency delivery if severe; monitoring if mild and preterm |
| Vasa previa | Painless bleeding at membrane rupture; fetal bradycardia | Prenatal diagnosis by ultrasound; planned cesarean before labor |
| Placenta accreta spectrum | Often asymptomatic until delivery; hemorrhage risk | MRI/US diagnosis; planned cesarean hysterectomy at 34-36 weeks |

**Fetal Growth Restriction (FGR)**
- Estimated fetal weight <10th percentile for gestational age
- Causes: placental insufficiency, maternal disease, infection, chromosomal abnormalities
- Monitoring: serial growth ultrasounds, umbilical artery Doppler, NST/BPP
- Delivery timing depends on severity and gestational age

**Gestational Age-Based Urgency**
| Gestational Age | Key Concerns |
|----------------|-------------|
| First trimester | Ectopic pregnancy; molar pregnancy; miscarriage |
| 14-20 weeks | Cervical insufficiency; second-trimester loss |
| 20-28 weeks | Preeclampsia onset; preterm labor; cervical shortening |
| 28-34 weeks | Preterm labor; fetal growth restriction; preeclampsia |
| 34-37 weeks | Late preterm delivery decisions; preeclampsia management |
| 37+ weeks | Postterm considerations; decreased fetal movement |`,
      keyTerms: [
        { term: 'HELLP syndrome', definition: 'A severe variant of preeclampsia characterized by Hemolysis, Elevated Liver enzymes, and Low Platelet count; a medical emergency requiring prompt delivery' },
        { term: 'placenta previa', definition: 'A condition where the placenta covers the cervical opening, causing painless vaginal bleeding and requiring cesarean delivery' },
        { term: 'cervical insufficiency', definition: 'Painless cervical dilation in the second trimester leading to pregnancy loss; may be treated with cervical cerclage' },
        { term: 'vasa previa', definition: 'Fetal blood vessels crossing over the cervical os unprotected by the umbilical cord or placenta; rupture causes rapid fetal hemorrhage' },
        { term: 'placenta accreta spectrum', definition: 'Abnormal attachment of the placenta to the uterine wall ranging from accreta (surface) to increta (muscle) to percreta (through uterus); causes life-threatening hemorrhage at delivery' },
        { term: 'fetal growth restriction', definition: 'Failure of the fetus to reach its growth potential, typically defined as estimated fetal weight below the 10th percentile; indicates placental insufficiency in many cases' },
      ],
      patientCounselingPoints: [
        'Preeclampsia can develop even in women with no prior health problems. Knowing the warning signs (severe headache, vision changes, upper belly pain, rapid swelling) can save your life.',
        'If you have had a preterm birth before, talk to your doctor about progesterone treatment and cervical length monitoring in your next pregnancy.',
        'Placenta previa diagnosed early in pregnancy often resolves as the uterus grows. Your doctor will monitor it with ultrasound.',
        'Fetal growth restriction does not mean you did anything wrong. It is often caused by how the placenta formed, which is not in your control.',
      ],
    },
    3: {
      level: 3,
      summary:
        'High-risk pregnancy management integrates pathophysiology of preeclampsia, preterm birth prediction, placental pathology, antenatal surveillance modalities, and evidence-based timing of delivery for major obstetric complications.',
      explanation: `**Preeclampsia Pathophysiology**
- Two-stage model:
  - **Stage 1 (placental):** Defective trophoblast invasion of spiral arteries; failure of vascular remodeling; placental ischemia/hypoxia
  - **Stage 2 (maternal):** Release of anti-angiogenic factors (sFlt-1, sEng) into maternal circulation; endothelial dysfunction; end-organ damage
- Angiogenic imbalance: sFlt-1 (anti-angiogenic) rises; PlGF (pro-angiogenic) falls
- sFlt-1/PlGF ratio: emerging clinical biomarker; ratio >38 predicts preeclampsia; ratio <38 rules out preeclampsia for 1 week
- Endothelial dysfunction leads to: vasoconstriction (hypertension), increased permeability (edema, proteinuria), coagulation activation (DIC risk)

**Preeclampsia Prevention Evidence**
| Intervention | Recommendation | Evidence |
|-------------|---------------|---------|
| Low-dose aspirin (81-162 mg) | Start at 12-16 weeks in high-risk women | ASPRE trial: 62% reduction in preterm preeclampsia |
| Calcium supplementation | 1.5-2 g/day in low-calcium populations | WHO: significant reduction in preeclampsia (RR 0.45) |
| Exercise | Regular moderate exercise | Reduces risk by ~30% (meta-analysis) |
| Vitamin D | Maintain adequate levels | Observational association; RCTs inconclusive |

**Preterm Birth Prediction and Prevention**
| Modality | Measurement | Clinical Use |
|----------|-------------|-------------|
| Transvaginal cervical length | <25 mm at 16-24 weeks = high risk | Universal or risk-based screening |
| Fetal fibronectin (fFN) | Negative predictive value 99.5% at 7-14 days | Rule-out test for symptomatic preterm labor |
| PAMG-1 (PartoSure) | Detects placental protein in cervicovaginal secretions | Alternative to fFN; higher PPV |
| History | Prior spontaneous preterm birth strongest predictor | Guides progesterone and cerclage decisions |

**Prevention Strategies:**
| Intervention | Indication | Evidence |
|-------------|-----------|---------|
| Vaginal progesterone (200 mg nightly) | Short cervix (<25 mm) | Reduces preterm birth by ~45% |
| 17-OHPC (IM weekly) | Prior singleton spontaneous PTB | PROLONG trial questioned earlier MFMU data; FDA withdrawal; debate ongoing |
| Cervical cerclage | History of cervical insufficiency; short cervix + prior PTB | Reduces preterm birth in selected populations |
| Cervical pessary | Short cervix | Mixed evidence; some trials positive (Spain), others negative (UK) |

**Antenatal Corticosteroids**
| Gestational Age | Indication | Evidence |
|----------------|-----------|---------|
| 24-34 weeks | Preterm delivery expected within 7 days | Single course: reduces RDS by 34%, IVH by 46%, NEC by 54%, death by 31% |
| 34-36+6 weeks | Late preterm delivery expected within 7 days | ALPS trial: reduces respiratory morbidity but increases neonatal hypoglycemia |
| Rescue course | If >14 days since first course and <34 weeks | Single rescue course if delivery remains imminent |

**Antenatal Surveillance Methods**
| Test | Components | Interpretation |
|------|-----------|---------------|
| Non-stress test (NST) | Fetal heart rate reactivity; 2 accelerations in 20 min | Reactive = reassuring; nonreactive = further evaluation |
| Biophysical profile (BPP) | NST + 4 ultrasound parameters (tone, movement, breathing, fluid) | Score 8-10 = normal; 6 = equivocal; 0-4 = abnormal |
| Modified BPP | NST + amniotic fluid index (AFI) | Combines two most sensitive parameters |
| Umbilical artery Doppler | Systolic/diastolic ratio; absent or reversed end-diastolic flow | Abnormal suggests placental insufficiency; guides delivery timing |
| Contraction stress test | Fetal heart rate response to contractions | Late decelerations = positive (concerning); rare use today |

**Delivery Timing for Common Complications**
| Condition | Recommended Delivery |
|-----------|---------------------|
| Chronic HTN, well-controlled | 37-39 weeks (depending on medications, control) |
| Gestational HTN | 37 weeks |
| Preeclampsia without severe features | 37 weeks |
| Preeclampsia with severe features | 34 weeks (after steroids if <34 weeks) |
| HELLP syndrome | Delivery after stabilization regardless of GA |
| GDM, diet-controlled | 39-41 weeks |
| GDM, medication-controlled | 39 weeks |
| FGR with normal Dopplers | 37-38 weeks |
| FGR with abnormal Dopplers | 34-37 weeks (individualized) |
| Placenta previa | 36-37 weeks (planned cesarean) |`,
      keyTerms: [
        { term: 'sFlt-1/PlGF ratio', definition: 'Ratio of soluble fms-like tyrosine kinase-1 (anti-angiogenic) to placental growth factor (pro-angiogenic); elevated ratio predicts preeclampsia; ratio below 38 reliably rules out preeclampsia for at least one week' },
        { term: 'fetal fibronectin', definition: 'Extracellular matrix protein detectable in cervicovaginal secretions; negative test has 99.5% NPV for preterm delivery within 7-14 days, making it an excellent rule-out test' },
        { term: 'ASPRE trial', definition: 'Combined Multimarker Screening and Randomized Patient Treatment with Aspirin for Evidence-Based Preeclampsia Prevention; demonstrated 62% reduction in preterm preeclampsia with 150 mg aspirin at bedtime' },
        { term: 'biophysical profile', definition: 'Antenatal surveillance test combining NST with four ultrasound parameters (fetal breathing, movement, tone, amniotic fluid); scored 0-10; assesses fetal well-being' },
        { term: 'antenatal corticosteroids', definition: 'Betamethasone or dexamethasone administered to mothers at risk of preterm delivery; accelerates fetal lung maturation and reduces neonatal morbidity and mortality' },
        { term: 'PROLONG trial', definition: 'Confirmatory trial of 17-OHPC for preterm birth prevention that failed to replicate earlier MFMU results; led to FDA advisory committee voting against continued approval' },
      ],
    },
    4: {
      level: 4,
      summary:
        'Advanced high-risk pregnancy management encompasses molecular preeclampsia biomarkers, precision preterm birth risk assessment, maternal morbidity surveillance, critical care obstetrics, and evidence-based protocols for multiorgan complications.',
      explanation: `**Preeclampsia Biomarkers and Prediction Models**
| Biomarker | Role | Clinical Application |
|-----------|------|---------------------|
| sFlt-1 | Soluble VEGF receptor; traps VEGF and PlGF | Elevated in preeclampsia; sFlt-1/PlGF ratio for diagnosis and prognosis |
| PlGF | Pro-angiogenic factor from trophoblasts | Low levels predict preeclampsia weeks before clinical onset |
| sEng (soluble endoglin) | Inhibits TGF-beta signaling; causes endothelial dysfunction | Elevated in severe preeclampsia/HELLP |
| PP13 (placental protein 13) | Galectin; involved in implantation | Low first-trimester levels predict later preeclampsia |
| PAPP-A | Pregnancy-associated plasma protein A | Low first-trimester levels associated with preeclampsia and FGR |
| Uterine artery Doppler | Pulsatility index (PI) at 11-14 weeks | Elevated PI with bilateral notching predicts preeclampsia |

**Integrated First-Trimester Screening (FMF Algorithm):**
- Combines: maternal risk factors + mean arterial pressure + uterine artery PI + PAPP-A + PlGF
- Detection rate: 75% for preterm preeclampsia at 10% FPR
- Guides aspirin prophylaxis (start before 16 weeks)

**Severe Hypertension Management Protocol**
| Stage | Action |
|-------|--------|
| BP >= 160/110 confirmed (within 15 min) | Treat within 30-60 minutes (ACOG safety bundle) |
| First-line agents | IV labetalol 20 mg, then 40 mg, then 80 mg q10 min (max 300 mg) OR IV hydralazine 5-10 mg q20 min OR Oral nifedipine 10-20 mg q20 min |
| Seizure prophylaxis | IV magnesium sulfate: 4-6 g loading dose over 20 min, then 1-2 g/hr maintenance |
| Monitoring | Continuous fetal monitoring; hourly maternal vitals; I&O; reflexes; MgSO4 toxicity signs |
| Magnesium toxicity | Loss of reflexes (8-12 mg/dL), respiratory depression (12-15 mg/dL), cardiac arrest (>15 mg/dL); antidote: calcium gluconate 1 g IV |

**Maternal Early Warning Systems**
| Parameter | Trigger Value |
|-----------|-------------|
| Systolic BP | > 160 or < 90 mmHg |
| Diastolic BP | > 100 mmHg |
| Heart rate | > 120 or < 50 bpm |
| Respiratory rate | > 30 or < 10/min |
| SpO2 | < 95% |
| Oliguria | < 35 mL/hr for 2 hours |
| Altered mental status | Any acute change |
| Maternal concern | Nurse or patient concern ("something is not right") |

**Obstetric Hemorrhage Protocols**
| Stage | Blood Loss | Actions |
|-------|-----------|---------|
| Stage 0 | Cumulative assessment | Quantitative blood loss measurement ongoing |
| Stage 1 | > 500 mL (vaginal) or > 1,000 mL (cesarean) | Uterotonic agents; fundal massage; IV access; type and screen |
| Stage 2 | Continued bleeding; vital sign changes | Activate massive transfusion protocol; tranexamic acid 1g IV; uterine tamponade balloon; surgical team |
| Stage 3 | > 1,500 mL or DIC | B-lynch suture; uterine artery ligation; interventional radiology; hysterectomy |

**Tranexamic Acid in Obstetric Hemorrhage:**
- WOMAN trial: 1g IV within 3 hours of birth reduced death from bleeding by 19% (no increase in thromboembolism)
- Most effective when given early; benefit decreases after 3 hours
- Fixed dose 1g IV over 10 minutes; repeat if bleeding continues after 30 minutes

**Maternal Mortality Review: Preventable Causes**
| Cause | Contribution to Maternal Death | Preventability |
|-------|-------------------------------|---------------|
| Hemorrhage | 11% | 70-90% preventable with protocols |
| Hypertensive disorders | 7-8% | 60-70% preventable with timely treatment |
| Cardiovascular conditions | 15-17% | Many modifiable risk factors |
| Infection/sepsis | 12-13% | Early recognition and treatment |
| Mental health/substance use | 22-23% | Screening, treatment, follow-up |
| Thromboembolism | 9% | Prophylaxis in high-risk patients |`,
      keyTerms: [
        { term: 'FMF algorithm', definition: 'Fetal Medicine Foundation first-trimester preeclampsia screening algorithm combining maternal factors, mean arterial pressure, uterine artery Doppler, PAPP-A, and PlGF; detects 75% of preterm preeclampsia at 10% false positive rate' },
        { term: 'maternal early warning system', definition: 'Standardized vital sign-based trigger system for identifying deteriorating obstetric patients; established thresholds prompt clinical assessment and escalation of care' },
        { term: 'tranexamic acid', definition: 'Antifibrinolytic agent; WOMAN trial demonstrated 19% reduction in death from postpartum hemorrhage when given within 3 hours; 1g IV fixed dose' },
        { term: 'massive transfusion protocol', definition: 'Standardized approach to hemorrhagic shock using fixed ratios of packed red blood cells, fresh frozen plasma, and platelets (typically 1:1:1) to prevent dilutional coagulopathy' },
        { term: 'soluble endoglin', definition: 'Anti-angiogenic protein that inhibits TGF-beta signaling; elevated in severe preeclampsia and HELLP syndrome; contributes to endothelial dysfunction' },
        { term: 'WOMAN trial', definition: 'World Maternal Antifibrinolytic trial; largest RCT of tranexamic acid in postpartum hemorrhage; demonstrated reduced death from bleeding with no increase in adverse events' },
      ],
      clinicalNotes:
        'Severe hypertension in pregnancy (BP >= 160/110) must be treated within 30-60 minutes to prevent stroke; this is the most common preventable cause of maternal death from hypertensive disorders. Magnesium sulfate is the only evidence-based seizure prophylaxis; phenytoin and benzodiazepines are inferior. The sFlt-1/PlGF ratio is now validated for clinical use in ruling out preeclampsia (ratio < 38) and predicting it (ratio > 85); it is incorporated into UK NICE guidelines but not yet standard in the US. Quantitative blood loss measurement (weighing pads, graduated drapes) rather than visual estimation should be standard for all deliveries; visual estimation underestimates blood loss by 30-50%.',
    },
    5: {
      level: 5,
      summary:
        'Expert management of high-risk pregnancy integrates molecular pathogenesis of placental disease, precision biomarker-guided clinical decisions, maternal critical care, quality improvement in maternal safety, and the intersection of health equity with maternal outcomes.',
      explanation: `**Molecular Pathogenesis of Preeclampsia**
| Mechanism | Detail |
|-----------|--------|
| Defective decidualization | Impaired uterine NK cell-mediated spiral artery remodeling; HLA-C/KIR interaction |
| Trophoblast invasion failure | Shallow extravillous trophoblast invasion; retained muscularis in spiral arteries |
| Placental hypoxia | Intermittent perfusion causes ischemia-reperfusion injury; xanthine oxidase activation; ROS generation |
| Syncytiotrophoblast stress | Release of microparticles, cell-free DNA, and anti-angiogenic factors into maternal circulation |
| Endothelial dysfunction | sFlt-1 sequesters VEGF; reduced NO production; increased endothelin-1; vascular permeability |
| Complement activation | Classical and alternative pathway activation; C5a promotes inflammation; eculizumab under investigation |
| Coagulation cascade | Platelet activation; fibrin deposition; DIC in severe cases; antithrombin consumption |

**Immunological Basis of Preeclampsia**
- Regulatory T cells (Tregs): reduced in preeclampsia; fail to maintain maternal tolerance to fetal antigens
- KIR/HLA-C interaction: maternal KIR AA genotype + fetal HLA-C2 = highest preeclampsia risk
- Decidual NK cells: normally remodel spiral arteries; dysfunction leads to poor placentation
- First pregnancy risk: primipaternity exposure; partner-specific immune adaptation
- Seminal fluid exposure: theorized to prime maternal immune tolerance; short sexual cohabitation increases risk

**Precision Medicine in Preeclampsia**
| Application | Status |
|-------------|--------|
| sFlt-1/PlGF ratio for clinical triage | NICE recommended; PROGNOSIS study validated; implemented in EU; emerging in US |
| Multi-marker first-trimester prediction | FMF algorithm (MAP + UtA PI + PAPP-A + PlGF); clinical use in UK, Australia |
| Aspirin timing optimization | Bedtime dosing (100-150 mg) before 16 weeks; ASPRE protocol |
| Statin therapy (pravastatin) | Preclinical and pilot data: reduces sFlt-1, improves endothelial function; StAmP trial results pending |
| Therapeutic apheresis for sFlt-1 removal | Case reports; removes circulating sFlt-1; prolongs pregnancy in early severe preeclampsia |
| Complement inhibition (eculizumab) | Case reports in HELLP/aHUS overlap; not standard therapy |

**Maternal Sepsis: Surviving Sepsis Adaptations**
| Parameter | Non-Pregnant | Pregnancy Adaptation |
|-----------|-------------|---------------------|
| Heart rate | > 90 bpm | Baseline 90-100 bpm in 3rd trimester; >110-120 more concerning |
| Blood pressure | SBP < 90 mmHg | Normal BP lower in pregnancy; SBP < 85-90 concerning |
| Respiratory rate | > 20/min | Physiological tachypnea in pregnancy; >22-24 more specific |
| WBC | > 12,000 | Pregnancy leukocytosis normal (up to 15,000; up to 30,000 in labor) |
| Lactate | > 2 mmol/L | Same threshold applies; >4 mmol/L = septic shock |

**Unique Sepsis Sources in Obstetrics:**
- Chorioamnionitis (most common antepartum)
- Endometritis (most common postpartum)
- Pyelonephritis (urinary tract)
- Wound infection (cesarean site)
- Necrotizing fasciitis (rare but devastating)
- Group A streptococcus (puerperal sepsis; historical significance)

**Health Equity and Maternal Outcomes**
| Disparity | Data |
|-----------|------|
| Black maternal mortality | 3-4x higher than White women in the US |
| Contributing factors | Structural racism, weathering, implicit bias, care access, comorbidity burden, insurance gaps |
| Severe maternal morbidity | Black and Indigenous women at highest risk |
| Interventions | Implicit bias training, diverse workforce, community-based doula programs, Medicaid extension to 12 months postpartum, maternal safety bundles |
| California model (CMQCC) | Statewide quality improvement; reduced maternal mortality by 55% over 10 years |
| UK MBRRACE reports | Confidential maternal death inquiries; identify systemic failures; drive policy change |

**Emerging Technologies in High-Risk Pregnancy**
| Technology | Application |
|------------|-----------|
| Remote blood pressure monitoring | FDA-cleared devices with auto-reporting; reduces missed diagnoses |
| Wearable contraction monitoring | Electromyography-based devices for preterm labor detection |
| AI-based CTG interpretation | Machine learning for fetal heart rate pattern analysis; reduces inter-observer variability |
| Cell-free DNA/RNA in maternal blood | Beyond aneuploidy: prediction of preeclampsia, preterm birth, placenta accreta |
| Digital health platforms | Integrated symptom tracking, telehealth, and clinical decision support for high-risk pregnancy |`,
      keyTerms: [
        { term: 'KIR/HLA-C interaction', definition: 'Maternal killer immunoglobulin-like receptor genotype interacting with fetal HLA-C; the AA KIR genotype with fetal HLA-C2 creates highest preeclampsia risk by impairing decidual NK cell-mediated spiral artery remodeling' },
        { term: 'CMQCC', definition: 'California Maternal Quality Care Collaborative; statewide maternal safety program that reduced California maternal mortality by 55% through standardized hemorrhage, hypertension, and sepsis bundles' },
        { term: 'weathering hypothesis', definition: 'Theory that cumulative exposure to racial discrimination and chronic stress accelerates biological aging and increases disease burden; proposed explanation for Black-White maternal mortality disparities' },
        { term: 'therapeutic apheresis for sFlt-1', definition: 'Experimental approach using dextran sulfate apheresis columns to remove circulating sFlt-1 from maternal blood in early severe preeclampsia; case reports show pregnancy prolongation' },
        { term: 'PROGNOSIS study', definition: 'Prospective validation study of the sFlt-1/PlGF ratio for ruling out (ratio <38) and predicting (ratio >38) preeclampsia within one and four weeks, respectively; foundational study for clinical biomarker implementation' },
      ],
      clinicalNotes: `**Expert Integration:**
- The sFlt-1/PlGF ratio has the strongest evidence base of any preeclampsia biomarker and is cost-effective for clinical triage (NICE DG49). Its adoption in the US lags Europe, but clinical practice is shifting. A ratio <38 essentially rules out preeclampsia for 1 week (NPV >99%).
- Maternal mortality disparities are driven by structural factors, not biological differences. The CMQCC model demonstrates that system-level quality improvement can dramatically reduce mortality. Key elements: standardized bundles, quantitative blood loss, simulation-based team training, and equity-focused data review.
- Pravastatin for preeclampsia prevention is the most promising pharmacological pipeline agent; preclinical data show reduced sFlt-1 production from trophoblasts. The StAmP and STAMP-2 trials will determine clinical efficacy.
- Maternal sepsis recognition requires pregnancy-adapted vital sign thresholds. A heart rate of 100 may be normal in the third trimester, but a heart rate of 120 with low-grade fever should trigger sepsis evaluation. The modified obstetric early warning score (MOEWS) performs better than generic SIRS criteria in obstetric populations.
- Remote blood pressure monitoring with automatic clinical alerts has the potential to transform postpartum preeclampsia detection, which accounts for 40% of hypertensive maternal deaths. Implementation requires equity-focused distribution of devices.`,
    },
  },

  media: [],

  citations: [
    { id: 'acog-pb-222', type: 'guideline', title: 'Gestational Hypertension and Preeclampsia: ACOG Practice Bulletin 222', authors: ['ACOG Committee on Practice Bulletins'], source: 'Obstetrics & Gynecology', url: 'https://doi.org/10.1097/AOG.0000000000003891' },
    { id: 'aspre-trial', type: 'article', title: 'Aspirin vs Placebo in Pregnancies at High Risk for Preterm Preeclampsia', authors: ['Rolnik, D.L.', 'Wright, D.', 'Poon, L.C.'], source: 'New England Journal of Medicine', url: 'https://doi.org/10.1056/NEJMoa1704559' },
    { id: 'woman-trial', type: 'article', title: 'Effect of Early Tranexamic Acid Administration on Mortality, Hysterectomy, and Other Morbidities in Women with Post-partum Haemorrhage', authors: ['WOMAN Trial Collaborators'], source: 'The Lancet', url: 'https://doi.org/10.1016/S0140-6736(17)30638-4' },
  ],

  crossReferences: [
    { targetId: 'topic-gestational-diabetes', targetType: 'topic', relationship: 'related', label: 'Gestational Diabetes' },
    { targetId: 'topic-postpartum-recovery', targetType: 'topic', relationship: 'related', label: 'Postpartum Recovery' },
  ],

  tags: {
    systems: ['cardiovascular', 'reproductive', 'renal'],
    topics: ['obstetrics', 'maternal-fetal medicine', 'emergency medicine', 'critical care'],
    keywords: ['preeclampsia', 'high-risk pregnancy', 'preterm labor', 'placental abruption', 'HELLP', 'eclampsia', 'warning signs', 'maternal safety'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['obstetrics', 'emergency medicine', 'family medicine'] },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
