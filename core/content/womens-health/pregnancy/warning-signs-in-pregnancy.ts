import { LegacyWomensHealthContent } from '../types';

export const warningSingsInPregnancy: LegacyWomensHealthContent = {
  id: 'concept-warning-signs-in-pregnancy',
  type: 'concept',
  name: 'Warning Signs in Pregnancy',
  alternateNames: ['Pregnancy danger signs', 'When to call your doctor', 'Obstetric emergencies'],

  levels: {
    1: {
      level: 1,
      summary: 'Some symptoms during pregnancy need immediate medical attention. Knowing these warning signs can help keep you and your baby safe.',
      explanation: `**Call 911 or Go to Emergency Room:**
- Chest pain
- Trouble breathing
- Seizures
- Thoughts of hurting yourself or others

**Call Your Doctor Right Away:**

*Bleeding:*
- Any vaginal bleeding (more than spotting)
- Blood clots passing

*Pain:*
- Severe headache that won't go away
- Severe belly pain
- Pain or burning when you pee

*Changes in Baby's Movement:*
- Baby is moving less than normal
- Baby has stopped moving

*Other Serious Signs:*
- Blurry vision or seeing spots
- Swelling of face or hands (especially sudden)
- Leaking fluid from vagina
- Fever over 100.4F
- Vomiting that won't stop
- Dizziness or fainting

**Remember:**
- Trust your instincts - if something feels wrong, call
- It's always better to check than to wait
- Don't worry about bothering your doctor
- Keep your doctor's number handy`,
      keyTerms: [
        { term: 'vaginal bleeding', definition: 'Blood coming from your vagina, which can be a sign of serious problems in pregnancy' },
        { term: 'decreased fetal movement', definition: 'When your baby is moving less than usual, which may signal a problem' },
        { term: 'preterm labor', definition: 'Labor that starts before 37 weeks of pregnancy' },
      ],
      analogies: ['Think of warning signs like smoke alarms - they alert you to danger so you can get help quickly.'],
      examples: ['Waking up with a severe headache and blurry vision', 'Noticing your baby hasn\'t kicked all day when they usually kick often'],
    },
    2: {
      level: 2,
      summary: 'Pregnancy warning signs indicate potentially serious conditions requiring prompt evaluation, including preeclampsia, hemorrhage, infection, and fetal compromise.',
      explanation: `**Cardiovascular/Neurological Emergencies:**
- Severe headache (preeclampsia, stroke)
- Visual disturbances (scotomata, blurry vision)
- Chest pain or shortness of breath (PE, cardiomyopathy)
- Seizures (eclampsia)

**Bleeding Concerns:**

*Early Pregnancy:*
- Ectopic pregnancy: Lower abdominal pain, bleeding, shoulder pain
- Threatened/inevitable miscarriage: Cramping, bleeding

*Later Pregnancy:*
- Placenta previa: Painless vaginal bleeding
- Placental abruption: Painful bleeding, uterine tenderness
- Bloody show vs. hemorrhage distinction

**Preeclampsia Symptoms:**
- Severe headache
- Visual changes (spots, lights, blurry vision)
- Right upper quadrant or epigastric pain
- Rapid swelling (face, hands)
- Blood pressure ≥140/90

**Preterm Labor Signs:**
- Regular contractions before 37 weeks
- Low back pain (persistent or crampy)
- Pelvic pressure
- Vaginal discharge change
- Menstrual-like cramps

**Rupture of Membranes:**
- Gush or continuous leak of fluid
- May be confused with urine
- Warrants evaluation regardless of amount

**Fetal Concerns:**
- Decreased fetal movement
- Teach kick counts: 10 movements in 2 hours
- If decreased movement, immediate evaluation

**Infection Signs:**
- Fever >100.4F (38C)
- Chills
- Burning with urination
- Foul-smelling vaginal discharge`,
      keyTerms: [
        { term: 'preeclampsia', definition: 'High blood pressure condition in pregnancy that can affect organs', pronunciation: 'pree-ih-KLAMP-see-ah' },
        { term: 'placental abruption', definition: 'Placenta separating from uterus before delivery, causing bleeding and danger to baby' },
        { term: 'ectopic pregnancy', definition: 'Pregnancy growing outside the uterus, usually in fallopian tube', pronunciation: 'ek-TOP-ik' },
        { term: 'kick counts', definition: 'Method of tracking baby\'s movements to monitor wellbeing' },
      ],
    },
    3: {
      level: 3,
      summary: 'Obstetric emergencies require systematic evaluation and triage, with understanding of pathophysiology guiding recognition and initial stabilization before definitive management.',
      explanation: `**Hemorrhage Evaluation:**

*First Trimester:*
- Quantify bleeding (pad count, saturation)
- Evaluate for ectopic pregnancy (transvaginal ultrasound, beta-hCG)
- Complete vs. incomplete miscarriage assessment
- Hemodynamic stability assessment

*Second/Third Trimester:*
- Stable vaginal exam ONLY after placenta previa excluded
- Ultrasound to assess placental location
- Kleihauer-Betke if Rh negative
- Type and crossmatch
- Continuous fetal monitoring

*Placental Abruption:*
- Classic triad: Painful bleeding, uterine tenderness, fetal distress
- May have concealed hemorrhage (no vaginal bleeding)
- DIC risk with severe abruption
- Emergency delivery may be needed

**Hypertensive Emergencies:**

*Severe Preeclampsia Criteria:*
- BP ≥160/110 (two measurements 4 hours apart, or single if very high)
- Thrombocytopenia (<100,000)
- Liver dysfunction (AST/ALT 2x normal)
- Renal insufficiency (creatinine >1.1 or doubling)
- Pulmonary edema
- Cerebral or visual symptoms

*Management:*
- Magnesium sulfate for seizure prophylaxis
- Antihypertensives (labetalol, hydralazine, nifedipine)
- Delivery timing based on severity and gestational age

**Preterm Labor Evaluation:**
- Digital cervical exam for dilation/effacement
- Fetal fibronectin (if 24-34 weeks, <3cm dilated)
- Cervical length by transvaginal ultrasound
- Monitoring for contraction pattern

**Fetal Status Assessment:**
- Non-stress test for decreased fetal movement
- Category interpretation (I, II, III)
- Biophysical profile if NST non-reactive
- Emergency cesarean for Category III tracing`,
      keyTerms: [
        { term: 'DIC', definition: 'Disseminated intravascular coagulation; clotting disorder that can occur with severe abruption' },
        { term: 'fetal fibronectin', definition: 'Protein test that helps predict preterm delivery risk' },
        { term: 'Category III tracing', definition: 'Abnormal fetal heart pattern indicating severe fetal compromise requiring urgent delivery' },
        { term: 'magnesium sulfate', definition: 'Medication used to prevent seizures in preeclampsia and for fetal neuroprotection' },
      ],
      clinicalNotes: 'Digital cervical exam is contraindicated in known placenta previa or before ultrasound in second/third trimester bleeding. Magnesium sulfate therapeutic range is 4-7 mEq/L; monitor for toxicity (loss of reflexes, respiratory depression).',
    },
    4: {
      level: 4,
      summary: 'Advanced obstetric emergency management requires understanding of pathophysiology, resuscitation principles, medication dosing, and decision-making regarding timing and mode of delivery.',
      explanation: `**Obstetric Hemorrhage Management:**

*Quantitative Blood Loss:*
- Accurate measurement (graduated drapes, weighing)
- Postpartum hemorrhage: >1000 mL regardless of delivery route
- Anticipate with risk factors

*Resuscitation:*
- Two large-bore IVs
- Crystalloid initially
- Massive transfusion protocol (1:1:1 PRBC:FFP:platelets)
- Tranexamic acid (1g within 3 hours)
- Fibrinogen replacement (cryoprecipitate if <200)

*Uterine Atony Protocol:*
- Fundal massage
- Oxytocin 20-40 units in 1L LR
- Methylergonovine (if no hypertension)
- Carboprost (if no asthma)
- Misoprostol (rectal or sublingual)
- Bakri balloon
- Surgical options (B-Lynch, hysterectomy)

**Hypertensive Crisis:**

*Treatment Thresholds:*
- Treat within 30-60 minutes of severe range BP (≥160/110)
- Goal: 140-150/90-100

*Medications:*
- Labetalol: 20 mg IV, then 40 mg, then 80 mg
- Hydralazine: 5-10 mg IV q20 min
- Nifedipine IR: 10-20 mg PO q20 min

*HELLP Syndrome:*
- Hemolysis, Elevated Liver enzymes, Low Platelets
- May occur without hypertension
- Delivery is definitive treatment
- DIC risk; corticosteroids if remote from term

**Eclampsia:**
- Magnesium loading: 4-6g IV over 20 minutes
- Maintenance: 1-2g/hour
- Manage airway, prevent injury
- Delivery once stabilized

**Cord Prolapse:**
- Elevate presenting part manually
- Knee-chest or Trendelenburg position
- Emergency cesarean
- Avoid handling cord (causes spasm)

**Shoulder Dystocia:**
- Call for help immediately
- McRoberts maneuver
- Suprapubic pressure
- Rotational maneuvers (Rubin, Woods)
- Posterior arm delivery
- Document thoroughly (timing, maneuvers)`,
      keyTerms: [
        { term: 'massive transfusion protocol', definition: 'Predetermined blood product replacement for severe hemorrhage' },
        { term: 'HELLP syndrome', definition: 'Hemolysis, Elevated Liver enzymes, Low Platelets; variant of severe preeclampsia' },
        { term: 'McRoberts maneuver', definition: 'Hyperflexion of maternal thighs for shoulder dystocia' },
        { term: 'B-Lynch suture', definition: 'Uterine compression suture for postpartum hemorrhage' },
      ],
      clinicalNotes: 'Time goals: Severe BP treatment within 60 minutes, tranexamic acid within 3 hours of delivery for PPH. Shoulder dystocia is a bony problem - fundal pressure is contraindicated (increases impaction). Documentation of timing and maneuvers is critical for medicolegal purposes.',
    },
    5: {
      level: 5,
      summary: 'Expert obstetric emergency care involves systems-level preparedness, simulation training, root cause analysis, addressing disparities in emergency outcomes, and implementation of evidence-based bundles.',
      explanation: `**Systems Preparedness:**

*Obstetric Hemorrhage Bundle (CMQCC):*
- Readiness: Cart, protocols, massive transfusion access
- Recognition: Quantitative blood loss, vital sign triggers
- Response: Staged interventions, escalation pathways
- Reporting/Learning: Debriefing, quality review

*Hypertension Bundle (AIM):*
- Treatment within 60 minutes goal
- Standardized medication kits
- Simulation training for eclampsia

**Quality Metrics:**
- Time to treatment for severe hypertension
- Quantitative blood loss implementation
- Maternal morbidity/mortality rates
- Near-miss reviews

**Simulation Training:**
- Regular team-based drills
- Shoulder dystocia scenarios
- Eclampsia response
- Hemorrhage protocols
- Debriefing for improvement

**Root Cause Analysis Themes:**
- Delayed recognition of deterioration
- Communication failures
- Implicit bias affecting care
- Protocol non-adherence
- Handoff errors

**Disparities in Outcomes:**

*Documented Disparities:*
- Black women 3-4x higher maternal mortality
- Higher severe morbidity rates
- Delayed treatment for pain, symptoms
- Differences in perceived symptom validity

*Mitigation Strategies:*
- Standardized protocols reduce bias
- Early warning systems
- Patient advocacy and voice
- Implicit bias training
- Diverse care teams

**Special Situations:**

*Perimortem Cesarean:*
- Begin within 4 minutes of arrest
- Delivery by 5 minutes (improves maternal resuscitation)
- Continue resuscitation throughout
- Left lateral tilt during compressions

*Amniotic Fluid Embolism:*
- Sudden cardiovascular collapse
- Hypoxia, DIC
- Supportive care; no specific treatment
- Early recognition critical

*Uterine Rupture:*
- Risk with prior cesarean, especially with labor
- Sudden pain, loss of contractions, fetal bradycardia
- Immediate laparotomy

**Communication in Crisis:**
- Closed-loop communication
- Designated team leader
- Clear role assignments
- Family communication plan`,
      keyTerms: [
        { term: 'CMQCC', definition: 'California Maternal Quality Care Collaborative; develops evidence-based bundles' },
        { term: 'AIM', definition: 'Alliance for Innovation on Maternal Health; national maternal safety initiative' },
        { term: 'perimortem cesarean', definition: 'Cesarean delivery during maternal cardiac arrest to improve resuscitation outcomes' },
        { term: 'amniotic fluid embolism', definition: 'Rare catastrophic event when amniotic fluid enters maternal circulation' },
      ],
      clinicalNotes: 'Every labor unit should have hemorrhage and hypertension emergency protocols with medications readily accessible. Simulation training improves team performance. Perimortem cesarean should begin within 4 minutes of arrest if no ROSC - this aids both maternal and fetal survival.',
    },
  },
  media: [],
  citations: [
    {
      id: 'acog-hypertension-pb',
      type: 'article',
      title: 'ACOG Practice Bulletin: Gestational Hypertension and Preeclampsia',
      source: 'American College of Obstetricians and Gynecologists',
      license: 'Copyright ACOG',
    },
    {
      id: 'cmqcc-bundles',
      type: 'website',
      title: 'Maternal Quality Improvement Toolkits',
      source: 'California Maternal Quality Care Collaborative',
      url: 'https://www.cmqcc.org/resources-tool-kits/toolkits',
      license: 'Open access',
    },
  ],
  crossReferences: [
    { targetId: 'concept-prenatal-care-schedule', targetType: 'concept', relationship: 'related', label: 'Prenatal Care' },
    { targetId: 'concept-labor-and-delivery-overview', targetType: 'concept', relationship: 'related', label: 'Labor and Delivery' },
    { targetId: 'concept-postpartum-care', targetType: 'concept', relationship: 'related', label: 'Postpartum Care' },
  ],
  tags: {
    systems: ['reproductive'],
    topics: ['obstetrics', 'patient-education', 'womens-health', 'emergencies'],
    keywords: ['preeclampsia', 'hemorrhage', 'warning signs', 'pregnancy emergency', 'obstetric emergency'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, shelf: ['obgyn'] },
  },
  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};
