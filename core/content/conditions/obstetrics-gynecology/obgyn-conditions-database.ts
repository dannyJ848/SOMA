/**
 * Obstetrics & Gynecology Conditions Database
 *
 * Comprehensive reference of OB/GYN conditions with clinical summaries,
 * diagnostics, treatment protocols, and bilingual patient education.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type OBGYNCategory =
  | 'pregnancy-complications'
  | 'gynecologic-disorders'
  | 'reproductive-endocrine';

export interface OBGYNConditionEntry {
  id: string;
  name: string;
  nameEs: string;
  category: OBGYNCategory;
  icd11: string;
  description: string;
  descriptionEs: string;
  riskFactors: string[];
  pathophysiology: string;
  pathophysiologyEs: string;
  symptoms: string[];
  diagnostics: {
    tests: string[];
    imaging: string[];
    criteria: string[];
  };
  treatment: {
    medications: string[];
    procedures: string[];
    lifestyle: string[];
  };
  emergencySigns: string[];
  patientExplanation: string;
  patientExplanationEs: string;
}

// ---------------------------------------------------------------------------
// Compact helper
// ---------------------------------------------------------------------------

function obgyn(
  id: string, name: string, nameEs: string,
  category: OBGYNCategory, icd11: string,
  description: string, descriptionEs: string,
  riskFactors: string[],
  pathophysiology: string, pathophysiologyEs: string,
  symptoms: string[],
  tests: string[], imaging: string[], criteria: string[],
  medications: string[], procedures: string[], lifestyle: string[],
  emergencySigns: string[],
  patientExplanation: string, patientExplanationEs: string,
): OBGYNConditionEntry {
  return {
    id, name, nameEs, category, icd11,
    description, descriptionEs, riskFactors,
    pathophysiology, pathophysiologyEs, symptoms,
    diagnostics: { tests, imaging, criteria },
    treatment: { medications, procedures, lifestyle },
    emergencySigns, patientExplanation, patientExplanationEs,
  };
}

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const OBGYN_CONDITIONS: Record<string, OBGYNConditionEntry> = {

  'preeclampsia': obgyn(
    'preeclampsia', 'Preeclampsia', 'Preeclampsia',
    'pregnancy-complications', 'JA20.0',
    'Hypertensive disorder of pregnancy characterized by new-onset hypertension and end-organ dysfunction after 20 weeks gestation. Represents a spectrum from mild to severe, with potential progression to eclampsia (seizures) or HELLP syndrome. Delivery is the definitive cure.',
    'Trastorno hipertensivo del embarazo caracterizado por hipertensión de nuevo inicio y disfunción orgánica después de las 20 semanas de gestación. Representa un espectro de leve a grave, con posible progresión a eclampsia (convulsiones) o síndrome HELLP. El parto es la cura definitiva.',
    ['Nulliparity', 'Prior preeclampsia', 'Chronic hypertension', 'Diabetes', 'Obesity (BMI >30)', 'Multiple gestation', 'Age <20 or >35', 'Renal disease', 'Autoimmune disorders', 'Family history'],
    'Abnormal placentation leads to inadequate spiral artery remodeling and placental hypoxia. Release of anti-angiogenic factors (sFlt-1, soluble endoglin) causes widespread endothelial dysfunction, resulting in hypertension, proteinuria, and multi-organ damage (renal, hepatic, neurologic, hematologic).',
    'La placentación anormal conduce a una remodelación inadecuada de las arterias espirales e hipoxia placentaria. La liberación de factores antiangiogénicos (sFlt-1, endoglina soluble) causa disfunción endotelial generalizada, resultando en hipertensión, proteinuria y daño multiorgánico (renal, hepático, neurológico, hematológico).',
    ['Persistent headache', 'Visual changes (blurred vision, scotomata)', 'Right upper quadrant or epigastric pain', 'Nausea/vomiting', 'Sudden weight gain and edema', 'Decreased fetal movement', 'Shortness of breath'],
    ['Blood pressure ≥140/90 mmHg on two occasions 4h apart', 'Urinalysis (proteinuria ≥300mg/24h or protein/creatinine ratio ≥0.3)', 'CBC (platelet count, hemolysis)', 'Comprehensive metabolic panel (creatinine, liver enzymes)', 'Serum uric acid', 'LDH'],
    ['Ultrasound with Doppler (fetal growth, amniotic fluid, umbilical artery velocimetry)', 'Biophysical profile', 'Non-stress test for fetal monitoring'],
    ['BP ≥140/90 mmHg after 20 weeks with proteinuria or end-organ dysfunction', 'Severe features: BP ≥160/110, platelets <100k, Cr >1.1, LFTs >2x normal, pulmonary edema, cerebral symptoms'],
    ['Mild: low-dose aspirin 81mg daily (prophylaxis if high risk)', 'Severe: IV magnesium sulfate for seizure prophylaxis', 'Antihypertensives: labetalol, nifedipine, or hydralazine for BP ≥160/110', 'Antenatal corticosteroids if <34 weeks for fetal lung maturity'],
    ['Delivery timing based on gestational age and severity (≥37 weeks mild, ≥34 weeks severe)', 'Induction of labor or cesarean delivery', 'Postpartum monitoring for 48-72h (risk persists)', 'Blood pressure control postpartum'],
    ['Frequent BP monitoring', 'Reduce sodium intake', 'Left lateral positioning to improve placental perfusion', 'Daily fetal kick counts', 'Strict bed rest is no longer routinely recommended', 'Close outpatient follow-up'],
    ['Severe headache unrelieved by acetaminophen', 'Vision changes (loss of vision, bright flashes)', 'Severe abdominal pain', 'Seizure activity', 'Chest pain or difficulty breathing', 'Decreased or absent fetal movement', 'Vaginal bleeding'],
    'Preeclampsia is a serious pregnancy complication where high blood pressure and organ stress develop after 20 weeks. Think of it as your body reacting to the placenta not working properly, which affects your blood vessels throughout your body. Symptoms like severe headaches, vision changes, or upper belly pain are red flags. The only cure is delivering your baby, but the timing depends on how far along you are and how severe your symptoms are. Your doctors will monitor you closely to keep you and your baby safe until delivery is possible.',
    'La preeclampsia es una complicación grave del embarazo donde se desarrolla presión arterial alta y estrés orgánico después de las 20 semanas. Piense en ello como su cuerpo reaccionando a que la placenta no funciona correctamente, lo que afecta sus vasos sanguíneos en todo el cuerpo. Síntomas como dolores de cabeza severos, cambios en la visión o dolor en la parte superior del abdomen son señales de alerta. La única cura es dar a luz a su bebé, pero el momento depende de qué tan avanzado está su embarazo y qué tan graves son sus síntomas. Sus médicos la monitorearán de cerca para mantenerla a usted y a su bebé seguros hasta que el parto sea posible.',
  ),

  'ectopic-pregnancy': obgyn(
    'ectopic-pregnancy', 'Ectopic Pregnancy', 'Embarazo Ectópico',
    'pregnancy-complications', 'JA00',
    'Pregnancy implanted outside the uterine cavity, most commonly in the fallopian tube (95%). Represents a life-threatening emergency due to risk of tubal rupture and hemorrhage. Early diagnosis and treatment are critical to prevent morbidity and preserve fertility.',
    'Embarazo implantado fuera de la cavidad uterina, más comúnmente en la trompa de Falopio (95%). Representa una emergencia potencialmente mortal debido al riesgo de ruptura tubárica y hemorragia. El diagnóstico y tratamiento tempranos son críticos para prevenir morbilidad y preservar la fertilidad.',
    ['Prior ectopic pregnancy', 'Pelvic inflammatory disease (PID)', 'Prior tubal surgery', 'Endometriosis', 'Infertility treatments', 'Intrauterine device (IUD) use', 'Smoking', 'Advanced maternal age', 'Multiple sexual partners'],
    'Abnormal tubal motility or structural damage prevents the fertilized ovum from reaching the uterus. Implantation occurs in the fallopian tube, which lacks the capacity to accommodate growing gestational tissue. Progressive growth leads to tubal distention and eventual rupture with intraperitoneal hemorrhage, causing hemodynamic instability.',
    'La motilidad tubárica anormal o el daño estructural impiden que el óvulo fertilizado llegue al útero. La implantación ocurre en la trompa de Falopio, que carece de la capacidad para acomodar el tejido gestacional en crecimiento. El crecimiento progresivo conduce a la distensión tubárica y eventual ruptura con hemorragia intraperitoneal, causando inestabilidad hemodinámica.',
    ['Unilateral lower abdominal or pelvic pain', 'Vaginal bleeding (lighter than normal period)', 'Missed menstrual period', 'Shoulder pain (if ruptured with hemoperitoneum)', 'Dizziness or syncope', 'Nausea', 'Breast tenderness'],
    ['Serial serum β-hCG (fails to double every 48-72h)', 'Serum progesterone (<5 ng/mL suggests nonviable pregnancy)', 'CBC (assess for anemia if ruptured)', 'Blood type and Rh status', 'Quantitative β-hCG discriminatory zone (1500-2000 mIU/mL)'],
    ['Transvaginal ultrasound (empty uterus with β-hCG >1500-2000)', 'Adnexal mass or free fluid in pelvis', 'Absence of intrauterine gestational sac', 'Possible visualization of ectopic gestational sac with yolk sac or fetal pole'],
    ['β-hCG above discriminatory zone without intrauterine pregnancy', 'Adnexal mass with positive pregnancy test', 'Free fluid in pelvis with hemodynamic instability suggests rupture'],
    ['Methotrexate IM (single or multi-dose) if stable, unruptured, β-hCG <5000, no fetal cardiac activity', 'Post-methotrexate: avoid folate, NSAIDs, alcohol; serial β-hCG monitoring until undetectable', 'RhoGAM if Rh-negative'],
    ['Laparoscopy: salpingostomy (tube-sparing) or salpingectomy (tube removal) depending on tube condition', 'Emergency laparotomy if ruptured with hemodynamic instability', 'Expectant management (observation) if β-hCG <200 and declining, hemodynamically stable, minimal symptoms'],
    ['Pelvic rest (no intercourse, tampons, or douching during treatment)', 'Follow-up β-hCG weekly until undetectable', 'Avoid pregnancy for 3 months post-methotrexate', 'Emotional support and counseling for pregnancy loss'],
    ['Severe or worsening abdominal pain', 'Syncope or severe dizziness', 'Shoulder pain (sign of internal bleeding)', 'Heavy vaginal bleeding', 'Hypotension or tachycardia', 'Pallor and weakness'],
    'An ectopic pregnancy means the fertilized egg implanted outside your uterus, usually in your fallopian tube. Because the tube cannot stretch like the uterus, this is a medical emergency—if the tube ruptures, it can cause life-threatening internal bleeding. Symptoms like one-sided pelvic pain, light vaginal bleeding, and dizziness should prompt immediate evaluation. Treatment depends on how early it is caught: medication can sometimes dissolve the pregnancy, or surgery may be needed to remove it. While losing a pregnancy is difficult, early treatment helps protect your health and future fertility.',
    'Un embarazo ectópico significa que el óvulo fertilizado se implantó fuera de su útero, generalmente en su trompa de Falopio. Debido a que la trompa no puede estirarse como el útero, esto es una emergencia médica—si la trompa se rompe, puede causar sangrado interno potencialmente mortal. Síntomas como dolor pélvico unilateral, sangrado vaginal leve y mareos deben provocar evaluación inmediata. El tratamiento depende de qué tan temprano se detecte: la medicación a veces puede disolver el embarazo, o puede ser necesaria cirugía para eliminarlo. Aunque perder un embarazo es difícil, el tratamiento temprano ayuda a proteger su salud y fertilidad futura.',
  ),

  'endometriosis': obgyn(
    'endometriosis', 'Endometriosis', 'Endometriosis',
    'gynecologic-disorders', 'GA10',
    'Chronic inflammatory condition where endometrial-like tissue grows outside the uterus, commonly on ovaries, fallopian tubes, and pelvic peritoneum. Causes chronic pelvic pain, dysmenorrhea, and infertility. Severity ranges from minimal to severe with deep infiltrating disease.',
    'Condición inflamatoria crónica donde tejido similar al endometrio crece fuera del útero, comúnmente en los ovarios, trompas de Falopio y peritoneo pélvico. Causa dolor pélvico crónico, dismenorrea e infertilidad. La gravedad varía de mínima a severa con enfermedad infiltrante profunda.',
    ['Nulliparity', 'Early menarche', 'Short menstrual cycles', 'Heavy or prolonged periods', 'Family history (first-degree relative)', 'Müllerian anomalies', 'Low BMI'],
    'Retrograde menstruation allows endometrial cells to implant on pelvic structures. These ectopic implants respond to hormonal fluctuations, undergoing cyclical bleeding and inflammation. Chronic inflammation leads to adhesion formation, fibrosis, and anatomic distortion, causing pain and infertility.',
    'La menstruación retrógrada permite que las células endometriales se implanten en estructuras pélvicas. Estos implantes ectópicos responden a fluctuaciones hormonales, experimentando sangrado e inflamación cíclicos. La inflamación crónica conduce a la formación de adherencias, fibrosis y distorsión anatómica, causando dolor e infertilidad.',
    ['Severe dysmenorrhea (worsening over time)', 'Chronic pelvic pain', 'Dyspareunia (painful intercourse)', 'Dyschezia (painful bowel movements)', 'Dysuria', 'Infertility', 'Cyclic symptoms correlating with menstruation', 'Heavy menstrual bleeding'],
    ['CA-125 (may be elevated but nonspecific)', 'Pelvic exam (tender nodularity, fixed retroverted uterus, adnexal masses)'],
    ['Transvaginal ultrasound (endometriomas/"chocolate cysts" on ovaries)', 'MRI pelvis (for deep infiltrating endometriosis, bladder/bowel involvement)', 'Laparoscopy remains gold standard for definitive diagnosis'],
    ['Clinical diagnosis based on symptoms, especially in adolescents', 'Definitive diagnosis requires laparoscopy with histologic confirmation', 'rASRM staging (I-IV) based on surgical findings'],
    ['NSAIDs for pain management', 'Combined oral contraceptives (continuous or cyclic)', 'Progestins: norethindrone acetate, medroxyprogesterone', 'GnRH agonists (leuprolide) with add-back therapy for severe disease (limited to 6-12 months)', 'Aromatase inhibitors (letrozole) for refractory cases'],
    ['Laparoscopic excision or ablation of endometriotic implants', 'Cystectomy for endometriomas', 'Lysis of adhesions', 'Hysterectomy with bilateral salpingo-oophorectomy for severe refractory disease (definitive)', 'Fertility-sparing surgery for patients desiring pregnancy'],
    ['Heat therapy (heating pad) for pain relief', 'Regular exercise (may reduce estrogen levels)', 'Anti-inflammatory diet', 'Pelvic floor physical therapy', 'Stress management and counseling', 'Support groups'],
    ['Acute severe abdominal pain (concern for ovarian torsion or rupture)', 'Heavy uncontrolled vaginal bleeding', 'Signs of bowel obstruction (if deep infiltrating disease)', 'Urinary retention or hematuria'],
    'Endometriosis is a condition where tissue similar to your uterine lining grows in places it should not, like your ovaries or pelvic area. Each month during your period, this tissue bleeds just like your uterine lining does, but the blood has nowhere to go. This causes inflammation, pain, and sometimes scarring or cysts. Many women with endometriosis experience severe menstrual cramps, pelvic pain, pain during sex, and difficulty getting pregnant. Treatment options include pain medications, hormonal therapies to suppress your cycle, or surgery to remove the abnormal tissue. Finding the right treatment often takes time and patience.',
    'La endometriosis es una condición donde tejido similar al revestimiento de su útero crece en lugares donde no debería, como sus ovarios o área pélvica. Cada mes durante su período, este tejido sangra igual que su revestimiento uterino, pero la sangre no tiene adónde ir. Esto causa inflamación, dolor y a veces cicatrices o quistes. Muchas mujeres con endometriosis experimentan cólicos menstruales severos, dolor pélvico, dolor durante las relaciones sexuales y dificultad para quedar embarazadas. Las opciones de tratamiento incluyen medicamentos para el dolor, terapias hormonales para suprimir su ciclo, o cirugía para eliminar el tejido anormal. Encontrar el tratamiento correcto a menudo toma tiempo y paciencia.',
  ),

  'pcos': obgyn(
    'pcos', 'Polycystic Ovary Syndrome (PCOS)', 'Síndrome de Ovario Poliquístico (SOP)',
    'reproductive-endocrine', 'GA34.4',
    'Most common endocrine disorder in reproductive-age women, characterized by hyperandrogenism, ovulatory dysfunction, and polycystic ovarian morphology. Associated with metabolic syndrome, insulin resistance, and increased cardiovascular risk. Diagnosis requires 2 of 3 Rotterdam criteria.',
    'El trastorno endocrino más común en mujeres en edad reproductiva, caracterizado por hiperandrogenismo, disfunción ovulatoria y morfología ovárica poliquística. Asociado con síndrome metabólico, resistencia a la insulina y riesgo cardiovascular aumentado. El diagnóstico requiere 2 de 3 criterios de Rotterdam.',
    ['Obesity', 'Insulin resistance', 'Family history of PCOS', 'Type 2 diabetes', 'Metabolic syndrome', 'Premature adrenarche', 'Low birth weight'],
    'Insulin resistance leads to compensatory hyperinsulinemia, which stimulates ovarian androgen production. Elevated androgens disrupt normal follicular development, causing anovulation and accumulation of multiple immature follicles (polycystic appearance). LH:FSH ratio is often elevated. Chronic anovulation increases endometrial hyperplasia risk.',
    'La resistencia a la insulina conduce a hiperinsulinemia compensatoria, que estimula la producción ovárica de andrógenos. Los andrógenos elevados interrumpen el desarrollo folicular normal, causando anovulación y acumulación de múltiples folículos inmaduros (apariencia poliquística). La relación LH:FSH a menudo está elevada. La anovulación crónica aumenta el riesgo de hiperplasia endometrial.',
    ['Irregular or absent menstrual periods (oligomenorrhea or amenorrhea)', 'Hirsutism (excess facial/body hair)', 'Acne and oily skin', 'Male-pattern hair loss (androgenic alopecia)', 'Weight gain or difficulty losing weight', 'Acanthosis nigricans (dark skin patches)', 'Infertility'],
    ['Total and free testosterone (elevated)', 'DHEA-S (rule out adrenal causes)', 'LH and FSH (elevated LH:FSH ratio)', 'Fasting glucose and insulin (assess insulin resistance)', 'OGTT with 2-hour glucose', 'Lipid panel', 'TSH (rule out thyroid disorder)', 'Prolactin (rule out hyperprolactinemia)', '17-hydroxyprogesterone (rule out congenital adrenal hyperplasia)'],
    ['Transvaginal ultrasound (≥12 follicles 2-9mm per ovary or ovarian volume >10mL)', 'Ultrasound not required in adolescents if clinical criteria met'],
    ['Rotterdam criteria: 2 of 3 required: (1) oligo/anovulation, (2) hyperandrogenism (clinical or biochemical), (3) polycystic ovaries on ultrasound', 'Exclude other causes: thyroid disorder, hyperprolactinemia, Cushing syndrome, congenital adrenal hyperplasia'],
    ['Combined oral contraceptives (regulate cycles, reduce androgens)', 'Metformin (improve insulin sensitivity, restore ovulation)', 'Anti-androgens: spironolactone for hirsutism/acne', 'Clomiphene citrate or letrozole for ovulation induction (if desiring pregnancy)', 'Eflornithine cream for facial hirsutism'],
    ['Endometrial biopsy if prolonged amenorrhea (>12 months) or abnormal bleeding', 'Bariatric surgery (for severe obesity refractory to lifestyle interventions)'],
    ['Weight loss (5-10% can restore ovulation and improve symptoms)', 'Low glycemic index diet, reduce refined carbohydrates', 'Regular aerobic exercise (150 min/week)', 'Hair removal: laser, electrolysis, or topical treatments', 'Smoking cessation'],
    ['Heavy prolonged vaginal bleeding (risk of endometrial hyperplasia)', 'Severe uncontrolled acne or hirsutism causing psychological distress', 'Signs of severe insulin resistance or uncontrolled diabetes'],
    'PCOS is a hormonal imbalance that affects how your ovaries work. Your body makes too much insulin and male hormones (androgens), which interferes with ovulation—the release of an egg each month. This leads to irregular or absent periods, excess facial or body hair, acne, and difficulty getting pregnant. Many women with PCOS also struggle with weight gain and have a higher risk of diabetes and heart disease. The good news is that lifestyle changes—like losing even 5-10% of your body weight, eating a balanced diet, and exercising regularly—can significantly improve symptoms. Medications can help regulate your periods, reduce excess hair growth, and improve fertility when you are ready to conceive.',
    'El SOP es un desequilibrio hormonal que afecta cómo funcionan sus ovarios. Su cuerpo produce demasiada insulina y hormonas masculinas (andrógenos), lo que interfiere con la ovulación—la liberación de un óvulo cada mes. Esto conduce a períodos irregulares o ausentes, exceso de vello facial o corporal, acné y dificultad para quedar embarazada. Muchas mujeres con SOP también luchan con el aumento de peso y tienen un mayor riesgo de diabetes y enfermedades cardíacas. La buena noticia es que los cambios en el estilo de vida—como perder incluso el 5-10% de su peso corporal, comer una dieta balanceada y hacer ejercicio regularmente—pueden mejorar significativamente los síntomas. Los medicamentos pueden ayudar a regular sus períodos, reducir el crecimiento excesivo de vello y mejorar la fertilidad cuando esté lista para concebir.',
  ),

  'uterine-fibroids': obgyn(
    'uterine-fibroids', 'Uterine Fibroids (Leiomyoma)', 'Fibromas Uterinos (Leiomioma)',
    'gynecologic-disorders', 'GA10.0',
    'Benign smooth muscle tumors of the uterus, most common pelvic tumor in women. Classified by location: intramural (within muscle wall), submucosal (protruding into cavity), or subserosal (protruding outward). Often asymptomatic but can cause heavy bleeding, pain, and reproductive complications.',
    'Tumores benignos de músculo liso del útero, el tumor pélvico más común en mujeres. Clasificados por ubicación: intramural (dentro de la pared muscular), submucoso (protruye hacia la cavidad), o subseroso (protruye hacia afuera). A menudo asintomáticos pero pueden causar sangrado abundante, dolor y complicaciones reproductivas.',
    ['African American ethnicity', 'Reproductive age (peak 40s)', 'Nulliparity', 'Early menarche', 'Family history', 'Obesity', 'Hypertension', 'Low vitamin D'],
    'Fibroids arise from monoclonal proliferation of uterine smooth muscle cells, driven by estrogen and progesterone. They contain increased estrogen and progesterone receptors, explaining growth during reproductive years and regression after menopause. Submucosal fibroids distort the endometrial cavity, causing heavy menstrual bleeding and interfering with implantation.',
    'Los fibromas surgen de la proliferación monoclonal de células de músculo liso uterino, impulsada por estrógeno y progesterona. Contienen receptores aumentados de estrógeno y progesterona, explicando el crecimiento durante los años reproductivos y la regresión después de la menopausia. Los fibromas submucosos distorsionan la cavidad endometrial, causando sangrado menstrual abundante e interfiriendo con la implantación.',
    ['Heavy menstrual bleeding (menorrhagia)', 'Prolonged menstrual periods (>7 days)', 'Pelvic pressure or fullness', 'Frequent urination (bladder compression)', 'Constipation (rectal compression)', 'Back or leg pain', 'Dysmenorrhea', 'Painful intercourse', 'Reproductive issues (infertility, miscarriage)', 'Enlarged abdomen'],
    ['CBC (assess for anemia from heavy bleeding)', 'Pregnancy test (rule out pregnancy)', 'TSH (rule out thyroid disorder)', 'Endometrial biopsy (if abnormal bleeding, especially >45 years)'],
    ['Transvaginal ultrasound (first-line, defines size, number, location)', 'Saline infusion sonohysterography (evaluates submucosal fibroids and endometrial cavity)', 'MRI pelvis (gold standard for surgical planning, differentiates adenomyosis)'],
    ['Pelvic ultrasound showing hypoechoic masses arising from uterine wall', 'MRI confirming well-circumscribed T2 hypointense masses'],
    ['Tranexamic acid (reduces menstrual blood loss)', 'NSAIDs (reduce pain and bleeding)', 'Combined oral contraceptives or progestins (regulate bleeding)', 'GnRH agonists (leuprolide—temporary shrinkage, pre-surgical)', 'Levonorgestrel IUD (reduces bleeding, may shrink small fibroids)'],
    ['Myomectomy (surgical removal, preserves uterus for fertility)', 'Hysterectomy (definitive cure for completed childbearing)', 'Uterine artery embolization (UAE—blocks blood supply to fibroids)', 'Focused ultrasound surgery (FUS—non-invasive ablation)', 'Endometrial ablation (for submucosal fibroids causing bleeding)'],
    ['Maintain healthy weight', 'High-fiber diet, green vegetables', 'Regular exercise', 'Vitamin D supplementation if deficient', 'Iron supplementation for anemia'],
    ['Severe acute pelvic pain (may indicate fibroid degeneration or torsion of pedunculated fibroid)', 'Heavy uncontrolled bleeding causing hemodynamic instability', 'Sudden abdominal enlargement', 'Acute urinary retention', 'Severe anemia with dizziness or syncope'],
    'Uterine fibroids are non-cancerous growths in your uterus made of muscle and tissue. They are very common—many women have them without knowing it. Symptoms depend on their size and location: fibroids that bulge into the uterine cavity often cause very heavy or prolonged periods and can lead to anemia. Large fibroids can press on your bladder or bowel, causing frequent urination or constipation. Many fibroids do not need treatment, but if they cause significant symptoms, options range from medications that lighten periods to procedures that shrink or remove the fibroids. Hysterectomy is a definitive option if you have completed childbearing. Fibroids can affect fertility, but many women with fibroids have successful pregnancies.',
    'Los fibromas uterinos son crecimientos no cancerosos en su útero hechos de músculo y tejido. Son muy comunes—muchas mujeres los tienen sin saberlo. Los síntomas dependen de su tamaño y ubicación: los fibromas que sobresalen hacia la cavidad uterina a menudo causan períodos muy abundantes o prolongados y pueden llevar a anemia. Los fibromas grandes pueden presionar su vejiga o intestino, causando micción frecuente o estreñimiento. Muchos fibromas no necesitan tratamiento, pero si causan síntomas significativos, las opciones van desde medicamentos que aligeren los períodos hasta procedimientos que reducen o eliminan los fibromas. La histerectomía es una opción definitiva si ha completado su maternidad. Los fibromas pueden afectar la fertilidad, pero muchas mujeres con fibromas tienen embarazos exitosos.',
  ),

  'gestational-diabetes': obgyn(
    'gestational-diabetes', 'Gestational Diabetes', 'Diabetes Gestacional',
    'pregnancy-complications', '5A14',
    'Glucose intolerance with first recognition during pregnancy, typically diagnosed at 24-28 weeks. Increases risk of maternal and fetal complications including macrosomia, birth trauma, neonatal hypoglycemia, and future type 2 diabetes. Resolves postpartum but indicates increased lifetime diabetes risk.',
    'Intolerancia a la glucosa con primer reconocimiento durante el embarazo, típicamente diagnosticada a las 24-28 semanas. Aumenta el riesgo de complicaciones maternas y fetales incluyendo macrosomía, trauma del parto, hipoglucemia neonatal y diabetes tipo 2 futura. Se resuelve posparto pero indica un riesgo aumentado de diabetes de por vida.',
    ['Obesity (BMI >30)', 'Age >25', 'Prior gestational diabetes', 'Family history of diabetes', 'Prior macrosomic infant (>4000g)', 'Polycystic ovary syndrome', 'Hispanic, African American, Native American, Asian, Pacific Islander ethnicity', 'History of prediabetes (HbA1c 5.7-6.4%)'],
    'Pregnancy-induced insulin resistance peaks in the third trimester due to placental hormones (human placental lactogen, progesterone, cortisol). In women with inadequate pancreatic beta-cell reserve, hyperglycemia develops. Maternal hyperglycemia causes fetal hyperinsulinemia, leading to excessive growth (macrosomia) and metabolic complications.',
    'La resistencia a la insulina inducida por el embarazo alcanza su punto máximo en el tercer trimestre debido a hormonas placentarias (lactógeno placentario humano, progesterona, cortisol). En mujeres con reserva pancreática de células beta inadecuada, se desarrolla hiperglucemia. La hiperglucemia materna causa hiperinsulinemia fetal, llevando a crecimiento excesivo (macrosomía) y complicaciones metabólicas.',
    ['Often asymptomatic', 'Increased thirst (polydipsia)', 'Frequent urination (polyuria)', 'Fatigue', 'Blurred vision', 'Recurrent infections (candidiasis)'],
    ['One-step approach: 75g OGTT at 24-28 weeks (fasting ≥92, 1h ≥180, 2h ≥153 mg/dL)', 'Two-step approach: 50g glucose challenge (if ≥140 mg/dL, proceed to 100g OGTT)', '100g OGTT: fasting ≥95, 1h ≥180, 2h ≥155, 3h ≥140 (2+ abnormal values confirm diagnosis)', 'Early testing (<24 weeks) if high-risk factors present', 'HbA1c if diagnosed <24 weeks (≥6.5% suggests preexisting diabetes)'],
    ['Ultrasound for fetal growth assessment (every 3-4 weeks)', 'Non-stress testing (typically starting 32-34 weeks if well-controlled, earlier if insulin-requiring)', 'Biophysical profile if concerning NST or growth abnormalities'],
    ['OGTT meeting diagnostic thresholds during pregnancy', 'Exclude preexisting type 2 diabetes (fasting glucose ≥126 or HbA1c ≥6.5%)'],
    ['First-line: insulin (rapid-acting: lispro, aspart; long-acting: NPH, detemir, glargine)', 'Metformin or glyburide (second-line, if patient declines insulin or poor compliance)', 'Target glucose: fasting <95 mg/dL, 1h postprandial <140 mg/dL, 2h postprandial <120 mg/dL'],
    ['Timing of delivery: 39-40 weeks if well-controlled, earlier (37-38 weeks) if poor control or complications', 'Cesarean delivery considered if estimated fetal weight >4500g', 'Postpartum: discontinue medications, repeat OGTT at 6-12 weeks postpartum'],
    ['Medical nutrition therapy: carbohydrate-controlled diet (175g/day), distribute carbs across 3 meals and 2-3 snacks', 'Moderate exercise 30 min most days (walking, swimming)', 'Self-monitoring of blood glucose: fasting and 1-2h postprandial 4x daily', 'Weight gain: individualized based on pre-pregnancy BMI', 'Breastfeeding postpartum (improves insulin sensitivity)'],
    ['Fetal macrosomia (estimated fetal weight >90th percentile)', 'Polyhydramnios', 'Maternal hyperglycemia crisis (rare: fasting glucose >200 mg/dL)', 'Preeclampsia (coexisting condition)', 'Decreased fetal movement', 'Signs of preterm labor'],
    'Gestational diabetes means your body cannot produce enough insulin to handle the extra demands of pregnancy, causing your blood sugar to be too high. High blood sugar can cause your baby to grow too large (macrosomia), which can make delivery more difficult and risky. It also increases your baby\'s risk of low blood sugar after birth. The good news is that with proper management—a healthy diet, regular exercise, blood sugar monitoring, and sometimes insulin—you can keep your blood sugar in a safe range and have a healthy pregnancy. After delivery, your blood sugar usually returns to normal, but you will have an increased risk of developing type 2 diabetes later in life. Lifestyle changes and regular screening can help prevent this.',
    'La diabetes gestacional significa que su cuerpo no puede producir suficiente insulina para manejar las demandas adicionales del embarazo, causando que su azúcar en la sangre esté demasiado alta. El azúcar alta en la sangre puede causar que su bebé crezca demasiado grande (macrosomía), lo que puede hacer el parto más difícil y riesgoso. También aumenta el riesgo de que su bebé tenga azúcar baja en la sangre después del nacimiento. La buena noticia es que con el manejo adecuado—una dieta saludable, ejercicio regular, monitoreo de azúcar en la sangre y a veces insulina—puede mantener su azúcar en la sangre en un rango seguro y tener un embarazo saludable. Después del parto, su azúcar en la sangre generalmente vuelve a la normalidad, pero tendrá un riesgo aumentado de desarrollar diabetes tipo 2 más adelante en la vida. Los cambios en el estilo de vida y el tamizaje regular pueden ayudar a prevenir esto.',
  ),
};

// ---------------------------------------------------------------------------
// Utility functions
// ---------------------------------------------------------------------------

/** Get a single OB/GYN condition by ID. */
export function getOBGYNConditionById(id: string): OBGYNConditionEntry | undefined {
  return OBGYN_CONDITIONS[id];
}

/** Search conditions by name, category, or any text field (case-insensitive). */
export function searchOBGYNConditions(query: string): OBGYNConditionEntry[] {
  const q = query.toLowerCase();
  return Object.values(OBGYN_CONDITIONS).filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.nameEs.toLowerCase().includes(q) ||
    c.category.toLowerCase().includes(q) ||
    c.description.toLowerCase().includes(q) ||
    c.descriptionEs.toLowerCase().includes(q) ||
    c.pathophysiology.toLowerCase().includes(q) ||
    c.pathophysiologyEs.toLowerCase().includes(q) ||
    c.patientExplanation.toLowerCase().includes(q) ||
    c.patientExplanationEs.toLowerCase().includes(q),
  );
}

/** Filter conditions by category. */
export function getOBGYNByCategory(category: OBGYNCategory): OBGYNConditionEntry[] {
  return Object.values(OBGYN_CONDITIONS).filter(c => c.category === category);
}

/** Return the total number of OB/GYN conditions in the database. */
export function getOBGYNConditionCount(): number {
  return Object.keys(OBGYN_CONDITIONS).length;
}

/** Get all conditions with a specific risk factor (case-insensitive). */
export function getOBGYNByRiskFactor(riskFactor: string): OBGYNConditionEntry[] {
  const rf = riskFactor.toLowerCase();
  return Object.values(OBGYN_CONDITIONS).filter(c =>
    c.riskFactors.some(r => r.toLowerCase().includes(rf)),
  );
}
