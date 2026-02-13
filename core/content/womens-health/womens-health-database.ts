/**
 * Biological Self - Women's Health Database
 * Comprehensive clinical reference for women's health conditions and screening
 */

// --- Types ---

export type WomensHealthCategory =
  | 'menstrual-disorders'
  | 'contraception'
  | 'breast-health'
  | 'pelvic-floor'
  | 'menopause'
  | 'sexual-health'
  | 'pregnancy-related'
  | 'gynecologic-cancer'
  | 'bone-health';

export interface WomensHealthEntry {
  id: string;
  name: string;
  category: WomensHealthCategory;
  description: string;
  epidemiology: string;
  pathophysiology: string;
  clinicalPresentation: string[];
  diagnosticWorkup: string[];
  management: string[];
  keyPearls: string[];
  references: string[];
}

// --- Compact Helper ---

function wh(
  id: string, name: string, category: WomensHealthCategory,
  description: string, epidemiology: string, pathophysiology: string,
  clinicalPresentation: string[], diagnosticWorkup: string[],
  management: string[], keyPearls: string[], references: string[],
): WomensHealthEntry {
  return {
    id, name, category, description, epidemiology, pathophysiology,
    clinicalPresentation, diagnosticWorkup, management, keyPearls, references,
  };
}

// --- Women's Health Database ---

export const WOMENS_HEALTH_ENTRIES: Record<string, WomensHealthEntry> = {};

const entries: WomensHealthEntry[] = [

  // ============================================================
  // MENSTRUAL DISORDERS (6)
  // ============================================================

  wh('primary-amenorrhea', 'Primary Amenorrhea', 'menstrual-disorders',
    'Absence of menarche by age 15 with secondary sexual characteristics or by age 13 without them.',
    'Affects ~0.1% of females; most common cause is gonadal dysgenesis (Turner syndrome) accounting for ~30% of cases.',
    'Failure at any level of the hypothalamic-pituitary-ovarian axis or anatomic outflow tract. Constitutional delay, gonadal dysgenesis, Mullerian agenesis, and hypothalamic dysfunction are the primary etiologies.',
    ['No menses by age 15 with breast development or age 13 without', 'Evaluate for secondary sexual characteristics (Tanner staging)', 'Short stature may suggest Turner syndrome', 'Cyclic pelvic pain without menses suggests outflow obstruction'],
    ['Pregnancy test (always first)', 'FSH, LH, estradiol, prolactin, TSH', 'Karyotype if elevated FSH', 'Pelvic ultrasound to confirm uterine anatomy', 'MRI if Mullerian anomaly suspected'],
    ['Treat underlying cause', 'Estrogen replacement for hypogonadism to promote development and bone health', 'Surgical correction for anatomic anomalies (e.g., imperforate hymen, transverse vaginal septum)', 'Progesterone withdrawal challenge to assess estrogen status', 'Psychological support and genetic counseling as appropriate'],
    ['Always rule out pregnancy first regardless of reported sexual history', 'Turner syndrome (45,X) is most common cause with elevated FSH', 'Mullerian agenesis (MRKH) presents with absent uterus, normal ovaries, normal 46,XX karyotype', 'Constitutional delay is a diagnosis of exclusion'],
    ['ACOG Practice Bulletin No. 651 - Menstruation in Girls and Adolescents', 'Klein DA et al. Am Fam Physician. 2019;100(1):39-48'],
  ),

  wh('secondary-amenorrhea', 'Secondary Amenorrhea', 'menstrual-disorders',
    'Absence of menses for 3 months with previously regular cycles or 6 months with irregular cycles.',
    'Affects 3-5% of reproductive-age women. Functional hypothalamic amenorrhea and PCOS are the most common non-pregnant causes.',
    'Disruption of the HPO axis from hypothalamic suppression (stress, weight loss, exercise), pituitary dysfunction (hyperprolactinemia), ovarian failure, or uterine causes (Asherman syndrome).',
    ['Cessation of previously established menses', 'Associated symptoms vary by etiology: galactorrhea, hot flashes, hirsutism, weight changes', 'History of disordered eating, excessive exercise, or significant stress', 'Medications: antipsychotics, opioids, hormonal contraceptives'],
    ['Pregnancy test', 'FSH, LH, estradiol, prolactin, TSH', 'Progesterone withdrawal test', 'Pelvic ultrasound', 'MRI of sella if elevated prolactin or suspected pituitary pathology', 'Anti-Mullerian hormone if ovarian insufficiency suspected'],
    ['Address underlying cause: weight restoration, stress reduction', 'Estrogen-progestin therapy for hypoestrogenic states to protect bone', 'Dopamine agonist (cabergoline) for hyperprolactinemia', 'Hysteroscopic lysis of adhesions for Asherman syndrome', 'Fertility treatment when desired'],
    ['Functional hypothalamic amenorrhea from the female athlete triad (energy deficiency, amenorrhea, low BMD) requires energy restoration', 'Prolactinoma is the most common pituitary cause', 'Premature ovarian insufficiency (POI) diagnosed by FSH >40 on two occasions', 'Always assess bone density in prolonged amenorrhea'],
    ['Gordon CM et al. J Clin Endocrinol Metab. 2017;102(5):1413-1439', 'ACOG Committee Opinion No. 740'],
  ),

  wh('dysmenorrhea', 'Dysmenorrhea', 'menstrual-disorders',
    'Painful menstruation classified as primary (no pelvic pathology) or secondary (due to underlying disease).',
    'Primary dysmenorrhea affects 50-90% of reproductive-age women; leading cause of recurrent short-term school/work absence in young women.',
    'Primary: excess prostaglandin (PGF2-alpha) production from endometrial tissue causes myometrial hypercontractility, ischemia, and sensitization of pain fibers. Secondary: caused by endometriosis, adenomyosis, fibroids, or pelvic inflammatory disease.',
    ['Cramping suprapubic pain beginning hours before or with menses', 'Lasts 48-72 hours, often worst on day 1-2', 'May radiate to back or thighs', 'Associated nausea, diarrhea, headache, fatigue', 'Secondary: worsening over time, menorrhagia, dyspareunia, intermenstrual pain'],
    ['Clinical diagnosis for primary dysmenorrhea in typical presentation', 'Pelvic exam to exclude secondary causes', 'Pelvic ultrasound if secondary dysmenorrhea suspected', 'Consider laparoscopy for endometriosis if refractory'],
    ['NSAIDs first-line: ibuprofen 400-600 mg q6h or naproxen 500 mg then 250 mg q6-8h, start 1-2 days before menses', 'Hormonal contraceptives (combined OCP, hormonal IUD) to suppress ovulation and thin endometrium', 'Nonpharmacologic: heat therapy, exercise, TENS', 'Treat underlying condition in secondary dysmenorrhea', 'Surgical options for refractory secondary cases'],
    ['Start NSAIDs before pain onset for best efficacy', 'Primary dysmenorrhea that does not respond to NSAIDs + OCP should raise suspicion for endometriosis', 'Hormonal IUD (levonorgestrel) is effective for both primary and secondary dysmenorrhea', 'Onset of dysmenorrhea years after menarche suggests secondary cause'],
    ['Ferries JA. Am Fam Physician. 2005;71(2):285-291', 'ACOG Committee Opinion No. 760'],
  ),

  wh('menorrhagia', 'Menorrhagia / Heavy Menstrual Bleeding', 'menstrual-disorders',
    'Excessive menstrual blood loss (>80 mL/cycle) or prolonged bleeding (>7 days) interfering with quality of life.',
    'Affects 10-35% of reproductive-age women. Most common gynecologic reason for outpatient visits and a leading indication for hysterectomy.',
    'Classified by PALM-COEIN: structural causes (Polyps, Adenomyosis, Leiomyoma, Malignancy) and non-structural causes (Coagulopathy, Ovulatory dysfunction, Endometrial, Iatrogenic, Not classified). Anovulatory bleeding is most common in adolescents and perimenopausal women.',
    ['Menstrual periods lasting >7 days or requiring pad/tampon change hourly', 'Passing clots >1 inch in diameter', 'Iron deficiency anemia symptoms: fatigue, dyspnea, palpitations', 'Flooding through clothing or nighttime soaking'],
    ['CBC with iron studies', 'TSH, coagulation studies (especially in adolescents: von Willebrand screen)', 'Pregnancy test', 'Pelvic ultrasound (transvaginal preferred)', 'Endometrial biopsy if age ≥45, or younger with risk factors for endometrial hyperplasia', 'Saline infusion sonohysterography for intracavitary lesions'],
    ['Hormonal management: combined OCP, levonorgestrel IUD (first-line for many), oral progestins', 'Tranexamic acid 1300 mg TID during menses for non-hormonal option', 'Iron supplementation for anemia', 'Surgical: endometrial ablation, polypectomy, myomectomy', 'Hysterectomy as definitive treatment for refractory cases'],
    ['PALM-COEIN is the FIGO classification system for abnormal uterine bleeding', 'Von Willebrand disease is the most common inherited bleeding disorder; screen adolescents with menorrhagia at menarche', 'Levonorgestrel IUD reduces menstrual blood loss by ~90%', 'Always rule out pregnancy and endometrial pathology in appropriate age groups'],
    ['Munro MG et al. Int J Gynaecol Obstet. 2011;113(1):3-13', 'NICE Guideline NG88: Heavy menstrual bleeding'],
  ),

  wh('pcos', 'Polycystic Ovary Syndrome', 'menstrual-disorders',
    'Heterogeneous endocrine disorder defined by oligo-anovulation, hyperandrogenism, and polycystic ovarian morphology (Rotterdam criteria: 2 of 3).',
    'Most common endocrine disorder in reproductive-age women, affecting 6-12%. Leading cause of anovulatory infertility.',
    'Insulin resistance and compensatory hyperinsulinemia drive ovarian androgen overproduction. Excess androgens disrupt folliculogenesis causing anovulation. GnRH pulse frequency increase raises LH:FSH ratio, further promoting thecal androgen synthesis.',
    ['Irregular menses (oligomenorrhea or amenorrhea)', 'Hyperandrogenism: hirsutism (Ferriman-Gallwey score ≥4-6), acne, androgenic alopecia', 'Obesity (50-80%), acanthosis nigricans', 'Infertility due to anovulation', 'Mood disorders and obstructive sleep apnea frequently comorbid'],
    ['Total and free testosterone, DHEA-S', 'TSH, prolactin (exclude other causes)', '17-hydroxyprogesterone (exclude non-classic CAH)', 'Fasting glucose, insulin, oral glucose tolerance test', 'Lipid panel', 'Pelvic ultrasound: ≥12 antral follicles per ovary or ovarian volume >10 mL', 'Endometrial biopsy if prolonged amenorrhea (>6 months) to exclude hyperplasia'],
    ['Lifestyle modification: weight loss of 5-10% improves ovulation and metabolic parameters', 'Combined OCP for cycle regulation and hyperandrogenism', 'Spironolactone 50-200 mg/day for hirsutism/acne (must use contraception)', 'Metformin for insulin resistance (adjunct, not primary)', 'Letrozole (first-line) or clomiphene for ovulation induction', 'Screen for metabolic syndrome, type 2 diabetes, depression, and OSA'],
    ['Rotterdam criteria require exclusion of other causes (thyroid, prolactin, CAH)', 'Letrozole has replaced clomiphene as first-line for ovulation induction per ASRM', 'Unopposed estrogen from chronic anovulation increases endometrial cancer risk', 'PCOS increases lifetime risk for type 2 diabetes, CVD, and endometrial cancer', 'Diagnosis can be made clinically; ultrasound alone is insufficient'],
    ['Rotterdam ESHRE/ASRM PCOS Consensus Workshop Group. Hum Reprod. 2004;19(1):41-47', 'Teede HJ et al. International PCOS Guidelines. 2023'],
  ),

  wh('endometriosis', 'Endometriosis', 'menstrual-disorders',
    'Estrogen-dependent chronic inflammatory condition with endometrial-like tissue outside the uterus causing pain and infertility.',
    'Affects 6-10% of reproductive-age women; found in 25-50% of women with infertility and 70-80% with chronic pelvic pain.',
    'Leading theories: retrograde menstruation (Sampson), coelomic metaplasia, lymphatic/vascular spread. Ectopic endometrial implants incite chronic inflammation, adhesion formation, and fibrosis. Estrogen-dependent growth and resistance to progesterone perpetuate disease.',
    ['Cyclic or chronic pelvic pain, often progressive', 'Dysmenorrhea (often severe, starting before menses)', 'Deep dyspareunia', 'Dyschezia and dysuria (bowel/bladder involvement)', 'Subfertility', 'Exam may show uterosacral nodularity, fixed retroverted uterus, adnexal mass (endometrioma)'],
    ['Clinical history and exam are most important', 'Pelvic ultrasound (detects endometriomas but not superficial disease)', 'MRI for deep infiltrating endometriosis', 'CA-125 elevated in some cases but not diagnostic', 'Laparoscopy with histologic confirmation remains gold standard (but empiric medical treatment preferred initially)'],
    ['NSAIDs for pain relief', 'Hormonal suppression: combined OCP (continuous), progestins, levonorgestrel IUD', 'GnRH agonists (leuprolide) or antagonists (elagolix) with add-back therapy', 'Laparoscopic excision or ablation of implants', 'Endometrioma excision (cystectomy preferred over drainage)', 'Hysterectomy with bilateral salpingo-oophorectomy for definitive refractory cases', 'Fertility: IVF often most effective; excision may improve natural conception'],
    ['Average diagnostic delay is 7-10 years from symptom onset', 'Endometriomas should be excised (cystectomy), not just drained, to reduce recurrence', 'Normal imaging does not rule out endometriosis', 'Empiric hormonal therapy is appropriate before surgical confirmation', 'Elagolix is the first oral GnRH antagonist FDA-approved for endometriosis pain'],
    ['Zondervan KT et al. N Engl J Med. 2020;382(13):1244-1256', 'ACOG Practice Bulletin No. 114'],
  ),

  // ============================================================
  // CONTRACEPTION (6)
  // ============================================================

  wh('combined-oral-contraceptives', 'Combined Oral Contraceptives', 'contraception',
    'Estrogen-progestin pill taken daily to prevent pregnancy through ovulation suppression.',
    'Most commonly used reversible contraceptive in the US. ~25% of contracepting women use COCs.',
    'Ethinyl estradiol (20-35 mcg) + progestin suppress GnRH pulsatility, preventing LH surge and ovulation. Progestin thickens cervical mucus and thins endometrium. Estrogen stabilizes endometrium and potentiates progestin effect.',
    ['Typical use failure rate: 7-9%; perfect use: 0.3%', 'Menstrual regulation with predictable withdrawal bleeding', 'Improvement in dysmenorrhea, menorrhagia, acne', 'Non-contraceptive benefits: reduced ovarian and endometrial cancer risk', 'Side effects: nausea, breast tenderness, headache, breakthrough bleeding'],
    ['Blood pressure measurement before initiation', 'No routine labs required for healthy women', 'Screen for contraindications using US MEC criteria', 'Assess for migraine with aura (absolute contraindication)', 'Review medication interactions (enzyme-inducing drugs reduce efficacy)'],
    ['Prescribe based on US Medical Eligibility Criteria (MEC)', 'Quick start method: begin same day regardless of cycle phase with backup 7 days', 'Continuous or extended cycling to reduce menstrual frequency', 'If missed pill: take as soon as remembered; emergency contraception if ≥2 missed in first week with intercourse', 'Switch to progestin-only or non-hormonal method if contraindication develops'],
    ['Absolute contraindications: smoking ≥35 yo, migraine with aura, VTE history, breast cancer, uncontrolled HTN', 'VTE risk is 3-4x baseline but still low (3-9 per 10,000 woman-years)', 'Drospirenone-containing pills may have slightly higher VTE risk', 'No increased risk of infertility after discontinuation; fertility returns within 1-3 months', 'Non-contraceptive benefits include 50% reduction in ovarian cancer risk with 5+ years use'],
    ['Curtis KM et al. US Medical Eligibility Criteria for Contraceptive Use, 2016. MMWR', 'ACOG Practice Bulletin No. 110'],
  ),

  wh('levonorgestrel-iud', 'Levonorgestrel Intrauterine Device', 'contraception',
    'Long-acting reversible progestin-releasing intrauterine device; among the most effective reversible contraceptives.',
    'IUD use increasing globally. ~12% of contracepting US women use IUDs. Available in multiple doses: 52 mg (Mirena/Liletta), 19.5 mg (Kyleena), 13.5 mg (Skyla).',
    'Local progestin effect: thickens cervical mucus, thins endometrium, impairs sperm motility. Partial ovulation suppression with 52 mg device. Foreign body reaction adds contraceptive effect.',
    ['Typical and perfect use failure rate: 0.1-0.4%', 'Duration: 52 mg approved for 5-8 years; lower doses 3-5 years', 'Reduced menstrual bleeding (amenorrhea in 20-50% with 52 mg at 1 year)', 'Insertion discomfort, cramping', 'Initial irregular bleeding/spotting that improves over 3-6 months'],
    ['Pregnancy test to exclude current pregnancy', 'No cervical cancer screening required prior to insertion', 'Bimanual exam to assess uterine position and size', 'Screen for cervical infection if at risk (can insert same day and treat)'],
    ['Insert at any point in cycle (not cycle-dependent)', 'Quick start: effective within 7 days (or immediately if within 7 days of menses onset)', 'NSAIDs or lidocaine for insertion pain management', 'String check at 4-6 weeks post-insertion', 'Remove or replace at expiration; fertility returns immediately after removal'],
    ['Safe for nulliparous women, adolescents, and immediately postpartum/postabortion', 'First-line treatment for menorrhagia in addition to contraception', 'Ectopic pregnancy is rare but a higher proportion of failures are ectopic', 'Perforation risk is ~1 per 1000 insertions', 'ACOG and AAP recommend LARC as first-line for all women including adolescents'],
    ['ACOG Practice Bulletin No. 186: Long-Acting Reversible Contraception', 'Diedrich JT et al. Am J Obstet Gynecol. 2017;217(5):561.e1-561.e8'],
  ),

  wh('copper-iud', 'Copper Intrauterine Device', 'contraception',
    'Non-hormonal LARC method using copper ions to prevent fertilization; also the most effective emergency contraception.',
    'Used by ~2% of contracepting women globally. Paragard (TCu380A) approved for up to 10 years in the US.',
    'Copper ions are toxic to sperm and ova, impairing motility and viability. Sterile inflammatory reaction in the endometrium creates a hostile environment for implantation. No effect on ovulation.',
    ['Typical and perfect use failure rate: 0.8%', 'Duration: FDA-approved 10 years (evidence supports up to 12)', 'Increased menstrual bleeding and cramping, especially first 3-6 months', 'No hormonal side effects', 'Can be used as emergency contraception up to 5 days after unprotected intercourse (>99% effective)'],
    ['Pregnancy test', 'Bimanual exam', 'Screen for cervical infection if at risk', 'No hormonal contraindications to assess'],
    ['Insert at any point in cycle', 'For emergency contraception: insert within 5 days of unprotected intercourse', 'NSAIDs for increased menstrual pain and bleeding', 'Remove if Wilson disease or copper allergy', 'Fertility returns immediately upon removal'],
    ['Most effective emergency contraceptive available (>99%)', 'Ideal for women who want hormone-free long-term contraception', 'Contraindicated in Wilson disease and copper allergy', 'Menstrual bleeding increases 50-75% on average', 'Compatible with breastfeeding'],
    ['ACOG Practice Bulletin No. 186', 'Cleland K et al. Hum Reprod. 2012;27(7):1994-2000'],
  ),

  wh('etonogestrel-implant', 'Etonogestrel Subdermal Implant', 'contraception',
    'Single-rod subdermal progestin implant (Nexplanon) providing up to 3-5 years of highly effective contraception.',
    'Most effective reversible contraceptive available. Used by ~4% of contracepting US women. Failure rate lowest of all reversible methods.',
    'Etonogestrel suppresses ovulation via inhibition of LH surge. Thickens cervical mucus and thins endometrium as secondary mechanisms.',
    ['Typical and perfect use failure rate: 0.01%', 'Duration: FDA-approved 3 years (evidence supports 5 years in normal-weight women)', 'Irregular bleeding is most common side effect and leading cause of discontinuation', 'Insertion/removal in office under local anesthesia', 'Non-palpable implant requires imaging for localization'],
    ['Pregnancy test', 'No other pre-insertion testing required', 'Palpate for proper placement after insertion'],
    ['Insert subdermally in medial upper arm', 'Quick start: backup method for 7 days if not inserted during menses days 1-5', 'Manage irregular bleeding with short course of combined OCP or NSAIDs', 'Replace at 3-5 years', 'Removal via small incision with local anesthesia; deep implants may need ultrasound-guided removal'],
    ['Most effective reversible contraceptive (>99.9%)', 'Unpredictable bleeding is the primary reason for dissatisfaction', 'Safe in women with contraindications to estrogen', 'Efficacy may decrease in women >130% ideal body weight (limited data)', 'Radiopaque for localization if non-palpable'],
    ['ACOG Practice Bulletin No. 186', 'McNicholas C et al. Am J Obstet Gynecol. 2017;217(5):e1-e6'],
  ),

  wh('depot-medroxyprogesterone', 'Depot Medroxyprogesterone Acetate (DMPA)', 'contraception',
    'Injectable progestin-only contraceptive given every 3 months.',
    'Used by ~3% of contracepting US women. Subcutaneous (104 mg) and intramuscular (150 mg) formulations available.',
    'Suppresses ovulation through inhibition of gonadotropin secretion. Thickens cervical mucus and induces endometrial atrophy.',
    ['Typical use failure rate: 4-6%; perfect use: 0.2%', 'Injection every 11-13 weeks', 'Amenorrhea in ~50% after 1 year (often desired)', 'Weight gain (average 5-8 lbs over 2 years)', 'Return to fertility may be delayed 6-10 months after discontinuation'],
    ['Pregnancy test', 'Blood pressure', 'No routine labs needed', 'Assess bone health risk factors for prolonged use'],
    ['IM injection in deltoid or gluteal muscle every 13 weeks', 'Subcutaneous injection in anterior thigh or abdomen', 'Grace period: up to 2 weeks late without backup', 'Self-injection option with subcutaneous formulation', 'Counsel regarding bone density concerns with prolonged use (>2 years)'],
    ['Black box warning for bone mineral density loss (partially reversible after discontinuation)', 'Do not use >2 years unless other methods inadequate (FDA guidance, though ACOG is less restrictive)', 'Delayed return to fertility (average 10 months from last injection)', 'Protective against endometrial cancer and endometriosis', 'No estrogen; safe in breastfeeding and women with estrogen contraindications'],
    ['ACOG Committee Opinion No. 602', 'Curtis KM et al. US Selected Practice Recommendations, 2016'],
  ),

  wh('emergency-contraception', 'Emergency Contraception', 'contraception',
    'Methods used after unprotected intercourse to prevent pregnancy; includes copper IUD, ulipristal, and levonorgestrel.',
    'Plan B (levonorgestrel) available OTC without age restriction. Ella (ulipristal) requires prescription. Copper IUD is most effective but requires provider placement.',
    'Levonorgestrel: delays/inhibits ovulation. Ulipristal: progesterone receptor modulator that delays ovulation even after LH surge onset. Copper IUD: toxic to sperm and prevents implantation.',
    ['Copper IUD: >99% effective up to 5 days; most effective option', 'Ulipristal (ella): 85% reduction in expected pregnancies, effective up to 5 days, maintains efficacy throughout window', 'Levonorgestrel (Plan B): 89% reduction if taken within 72 hours, decreasing efficacy to 5 days', 'Yuzpe method (combined OCP): least effective, most side effects'],
    ['Determine timing of unprotected intercourse', 'Pregnancy test if concern for existing pregnancy', 'Review ongoing contraceptive needs'],
    ['Copper IUD: insert within 5 days; provides ongoing contraception', 'Ulipristal 30 mg single dose (prescription); do not start hormonal contraception for 5 days after', 'Levonorgestrel 1.5 mg single dose (OTC); can quick-start hormonal method immediately after', 'Offer ongoing contraceptive method at same visit', 'Follow-up pregnancy test if no menses within 3 weeks'],
    ['Copper IUD is the most effective EC and transitions to long-term contraception', 'Ulipristal is more effective than levonorgestrel, especially days 3-5', 'Levonorgestrel efficacy decreases significantly in women >75 kg; ulipristal or copper IUD preferred', 'EC does not disrupt an established pregnancy (not an abortifacient)', 'EC can be used multiple times in a cycle if needed'],
    ['Turok DK et al. N Engl J Med. 2021;384(2):140-148', 'ACOG Practice Bulletin No. 152'],
  ),

  // ============================================================
  // BREAST HEALTH (4)
  // ============================================================

  wh('breast-cancer-screening-guidelines', 'Breast Cancer Screening', 'breast-health',
    'Evidence-based screening strategies including mammography, clinical breast exam, and risk-based MRI.',
    'Breast cancer is the most common cancer in women (1 in 8 lifetime risk). ~280,000 new cases and ~43,000 deaths annually in the US. 5-year survival for localized disease >99%.',
    'Mammographic screening detects cancers before clinical detection, reducing mortality by 15-30%. Digital breast tomosynthesis (3D mammography) improves cancer detection and reduces recall rates, especially in dense breast tissue.',
    ['USPSTF: biennial mammography ages 40-74 (2024 update lowered start age to 40)', 'ACS: annual mammography starting age 45; biennial at age 55', 'ACR: annual mammography starting age 40', 'High-risk women (≥20% lifetime risk): annual mammography + breast MRI starting age 25-30', 'Breast density notification laws in most states'],
    ['Screening mammography (2D or 3D tomosynthesis)', 'Breast MRI for high-risk women', 'Risk assessment tools: Tyrer-Cuzick, Gail model', 'Genetic testing for BRCA1/2 and other high-penetrance genes in appropriate patients', 'Diagnostic mammography and ultrasound for palpable findings'],
    ['Follow age-appropriate screening guidelines', 'Risk assessment at age 25-30 to determine if enhanced screening needed', 'MRI alternating with mammography every 6 months for high-risk patients', 'Dense breast tissue: consider supplemental screening with ultrasound or MRI', 'Chemoprevention with tamoxifen or aromatase inhibitor for women at ≥3% 5-year risk'],
    ['2024 USPSTF now recommends starting screening mammography at age 40', 'Breast density is both a risk factor for cancer and reduces mammographic sensitivity', 'BRCA1 carriers have 55-72% lifetime breast cancer risk; BRCA2: 45-69%', 'Mammographic screening reduces breast cancer mortality by ~20% over 10 years', 'MRI sensitivity is ~95% vs ~40% for mammography in high-risk women'],
    ['USPSTF Final Recommendation Statement: Breast Cancer Screening, 2024', 'Monticciolo DL et al. ACR/SBI Breast Cancer Screening Recommendations. JACR. 2024'],
  ),

  wh('benign-breast-disease', 'Benign Breast Disease', 'breast-health',
    'Spectrum of non-malignant breast conditions including fibrocystic changes, fibroadenomas, cysts, and proliferative lesions.',
    'Benign breast conditions are extremely common; fibrocystic changes affect ~50% of women clinically and ~90% histologically. Fibroadenoma is the most common solid breast mass in women under 30.',
    'Fibrocystic changes: exaggerated stromal and epithelial response to hormonal fluctuations. Fibroadenomas: hormone-responsive proliferation of stromal and epithelial elements. Relative risk of cancer: non-proliferative (1x), proliferative without atypia (1.5-2x), atypical hyperplasia (4-5x).',
    ['Breast pain (mastalgia), often cyclic and bilateral', 'Palpable lumps: rubbery mobile mass (fibroadenoma), smooth fluctuant mass (cyst)', 'Nipple discharge: bilateral milky or green (usually benign); unilateral bloody/serous (requires evaluation)', 'Premenstrual breast swelling and tenderness'],
    ['Clinical breast exam', 'Ultrasound for women <30 or palpable mass evaluation', 'Diagnostic mammography for women ≥30', 'BI-RADS classification guides management', 'Core needle biopsy for BI-RADS 4-5 or suspicious findings', 'Fine needle aspiration for simple cysts'],
    ['Reassurance and observation for simple cysts and typical fibroadenomas', 'Supportive bra, evening primrose oil, reducing caffeine for mastalgia', 'NSAIDs or topical diclofenac for mastalgia', 'Cyst aspiration for symptomatic cysts', 'Excision of fibroadenomas if symptomatic, enlarging, or >2 cm', 'Close surveillance for atypical hyperplasia (annual mammography + consideration of chemoprevention)'],
    ['Triple test concordance (clinical, imaging, pathology) guides management', 'Fibrocystic changes are the most common cause of breast lumps in women 30-50', 'Fibroadenomas typically involute after menopause', 'Atypical ductal hyperplasia on core biopsy requires surgical excision (upgrade rate to cancer ~20%)', 'Bloody nipple discharge must be evaluated to rule out intraductal papilloma or DCIS'],
    ['Santen RJ. N Engl J Med. 2005;353(3):275-285', 'ACOG Practice Bulletin No. 164'],
  ),

  wh('mastitis', 'Mastitis and Breast Abscess', 'breast-health',
    'Inflammatory condition of breast tissue, commonly associated with lactation; may progress to breast abscess.',
    'Lactational mastitis affects 2-10% of breastfeeding women, most commonly in the first 6 weeks postpartum. Non-lactational mastitis is less common.',
    'Usually begins with milk stasis and skin flora (S. aureus most common) invasion through nipple fissures. Inflammatory cascade leads to cellulitis of breast tissue. Untreated may progress to phlegmon or abscess formation.',
    ['Unilateral breast pain, warmth, erythema, swelling', 'Fever, malaise, myalgias', 'Tender firm wedge-shaped area of induration', 'Purulent nipple discharge with infection', 'Fluctuant mass suggests abscess formation', 'Non-lactational: consider inflammatory breast cancer in non-resolving cases'],
    ['Clinical diagnosis in typical presentation', 'Breast milk culture if recurrent, hospital-acquired, or not responding to initial antibiotics', 'Ultrasound if abscess suspected or not improving in 48-72 hours', 'Mammography or biopsy for non-lactational mastitis not responding to antibiotics to exclude inflammatory breast cancer'],
    ['Continue breastfeeding or pumping (essential to prevent abscess)', 'Dicloxacillin 500 mg QID or cephalexin 500 mg QID x 10-14 days', 'TMP-SMX or clindamycin if MRSA suspected', 'NSAIDs for pain and inflammation', 'Warm compresses, massage toward nipple before feeds', 'Abscess: ultrasound-guided needle aspiration (preferred) or incision and drainage'],
    ['Continued breastfeeding is safe and essential for resolution', 'Abscess develops in ~3-11% of mastitis cases', 'MRSA is an increasingly common cause; culture milk if not responding to initial antibiotic', 'Non-resolving inflammation must be biopsied to rule out inflammatory breast cancer', 'Prevention: proper latch technique, frequent feeding, avoiding engorgement'],
    ['Amir LH. BMJ. 2014;348:g1722', 'ABM Clinical Protocol #4: Mastitis. Breastfeed Med. 2022'],
  ),

  wh('breast-mass-evaluation', 'Breast Mass Evaluation', 'breast-health',
    'Systematic approach to evaluating palpable breast masses using age-based imaging and tissue sampling.',
    'Most palpable breast masses are benign. In women under 40, ~90% are benign; in women over 50, malignancy rates increase to ~50% of biopsied masses.',
    'Palpable masses may represent cysts, fibroadenomas, carcinoma, fat necrosis, phyllodes tumor, or other pathology. Age, clinical features, and imaging characteristics guide the likelihood of malignancy.',
    ['New palpable mass or thickening', 'Characteristics: hard vs. soft, mobile vs. fixed, regular vs. irregular borders', 'Associated skin changes: dimpling, retraction, peau d\'orange', 'Axillary lymphadenopathy', 'Nipple discharge or inversion of recent onset'],
    ['Age <30: ultrasound first; mammography if suspicious', 'Age ≥30: diagnostic mammography + ultrasound', 'BI-RADS scoring determines next steps', 'Core needle biopsy for solid masses (BI-RADS 4-5)', 'FNA for simple-appearing cysts', 'MRI if mammography and US inconclusive in high-risk patients'],
    ['Benign concordant lesions: observation with clinical follow-up at 6-12 months', 'Indeterminate or discordant results: excisional biopsy', 'Malignant: refer to breast surgery and multidisciplinary oncology', 'Simple cysts: reassurance or aspiration if symptomatic', 'Complex cysts or solid components: biopsy required'],
    ['Never ignore a palpable mass even with negative imaging (3-5% of mammographically occult masses are malignant)', 'Triple assessment (clinical exam, imaging, tissue sampling) is the standard of care', 'Dominant mass in a woman ≥30 needs tissue diagnosis', 'Cystic masses that resolve completely with aspiration and have non-bloody fluid can be observed', 'Phyllodes tumor should be suspected in rapidly growing fibroadenoma-like mass'],
    ['Salzman B et al. Am Fam Physician. 2012;86(2):161-167', 'NCCN Guidelines: Breast Cancer Screening and Diagnosis'],
  ),

  // ============================================================
  // PELVIC FLOOR (3)
  // ============================================================

  wh('pelvic-organ-prolapse', 'Pelvic Organ Prolapse', 'pelvic-floor',
    'Descent of pelvic organs (uterus, bladder, rectum) into the vaginal canal due to pelvic floor support failure.',
    'Affects up to 50% of parous women on exam; symptomatic in ~3-6%. Lifetime risk of surgery for prolapse is ~12%. Prevalence increases with age.',
    'Weakening or damage to pelvic floor muscles, connective tissue, and ligaments from vaginal delivery, chronic straining, aging, and estrogen decline. Types: anterior (cystocele), posterior (rectocele), apical (uterine/vault prolapse), enterocele.',
    ['Vaginal bulge or pressure ("something falling out")', 'Urinary symptoms: incomplete emptying, frequency, stress incontinence', 'Bowel symptoms: splinting to defecate, incomplete evacuation', 'Sexual dysfunction, dyspareunia', 'Symptoms worsen with standing, lifting, and straining; improve when supine', 'POP-Q staging (0-IV) standardizes assessment'],
    ['Pelvic exam with Valsalva to assess maximum prolapse', 'POP-Q examination for staging', 'Post-void residual if urinary symptoms', 'Urodynamic testing before surgical repair if incontinence present', 'No routine imaging required'],
    ['Conservative: pelvic floor muscle training (Kegel exercises), pessary fitting', 'Pessary is first-line for women who prefer non-surgical management or are poor surgical candidates', 'Topical vaginal estrogen to improve tissue quality', 'Surgical: native tissue repair, sacrocolpopexy (gold standard for apical), anterior/posterior colporrhaphy', 'Obliterative surgery (colpocleisis) for women not desiring vaginal intercourse'],
    ['Pessary should be offered to all women before surgery', 'Vaginal delivery is the strongest modifiable risk factor', 'Recurrence rate after surgery is 30% (re-operation ~10%)', 'FDA removed transvaginal mesh for prolapse repair from market in 2019', 'Sacrocolpopexy (abdominal/robotic) has lowest recurrence rates for apical prolapse'],
    ['Barber MD, Maher C. Nat Rev Dis Primers. 2013;19:3223', 'ACOG Practice Bulletin No. 214'],
  ),

  wh('stress-urinary-incontinence', 'Stress Urinary Incontinence', 'pelvic-floor',
    'Involuntary urine leakage with increased abdominal pressure (coughing, sneezing, exercise, lifting).',
    'Affects 15-35% of adult women. Most common type of incontinence in women under 60. Prevalence increases with age and parity.',
    'Urethral hypermobility from weakened pelvic floor support allows the urethra to descend during increased abdominal pressure. Intrinsic sphincter deficiency results from sphincter weakness itself. Often both mechanisms coexist.',
    ['Urine leakage with physical activity, coughing, sneezing, laughing, lifting', 'No leakage at rest or with urgency (differentiates from urgency incontinence)', 'Positive cough stress test on exam', 'Pad usage as severity measure', 'Impact on quality of life, exercise, social activities'],
    ['Urinalysis to exclude UTI', 'Voiding diary (frequency-volume chart)', 'Cough stress test (with full bladder, direct visualization)', 'Post-void residual', 'Urodynamic studies before surgery or if diagnosis unclear', 'Consider cystoscopy if hematuria or prior surgery'],
    ['Pelvic floor muscle training (PFMT/Kegels) for 3-6 months (first-line; 60-70% improvement)', 'Pessary (incontinence ring or dish) for activity-related leakage', 'Topical vaginal estrogen for postmenopausal women', 'Weight loss (5-10% body weight reduces episodes by 50%)', 'Midurethral sling (retropubic TVT or transobturator TOT) is gold standard surgical treatment', 'Bulking agents (periurethral injection) for intrinsic sphincter deficiency or poor surgical candidates'],
    ['PFMT with biofeedback-guided training has highest success rates', 'Midurethral sling has 80-90% cure rate at 5 years', 'Weight loss of 8% reduces incontinence episodes by 47%', 'Mixed incontinence (stress + urgency) is common; treat the predominant symptom first', 'Duloxetine used in some countries for SUI but not FDA-approved for this indication in US'],
    ['Dumoulin C et al. Cochrane Database Syst Rev. 2018;10:CD005654', 'ACOG/AUGS Practice Bulletin No. 155'],
  ),

  wh('overactive-bladder', 'Overactive Bladder / Urgency Incontinence', 'pelvic-floor',
    'Urinary urgency with or without urgency incontinence, usually with frequency and nocturia, in the absence of infection.',
    'Affects 12-17% of adults, increasing with age. Women affected more than men. Urgency incontinence (wet OAB) occurs in ~1/3 of patients.',
    'Detrusor overactivity from uninhibited contractions during filling. May be neurogenic (MS, stroke, spinal cord injury) or idiopathic. Afferent nerve sensitization and urothelial signaling abnormalities contribute.',
    ['Sudden compelling desire to void (urgency)', 'Frequency (>8 voids per day)', 'Nocturia (≥2 voids per night)', 'Urgency incontinence: leakage with urgency sensation', 'Triggers: running water, cold, hand washing, key-in-lock'],
    ['Urinalysis to exclude UTI', 'Voiding diary (minimum 3 days)', 'Post-void residual', 'Urodynamics if diagnosis uncertain or prior to invasive treatment', 'Cystoscopy if hematuria, recurrent UTI, or concern for bladder pathology'],
    ['Behavioral therapy first-line: bladder training (timed voiding with progressive intervals), urge suppression techniques, fluid management', 'Pelvic floor muscle training', 'Antimuscarinics: oxybutynin, tolterodine, solifenacin (avoid in elderly due to cognitive effects)', 'Beta-3 agonist: mirabegron 25-50 mg or vibegron 75 mg (preferred in elderly, no anticholinergic effects)', 'Third-line: onabotulinumtoxinA (Botox) 100 units intravesical injection', 'Sacral neuromodulation (InterStim) or tibial nerve stimulation'],
    ['Behavioral therapy is as effective as medication with no side effects', 'Avoid antimuscarinics in elderly (increased dementia risk)', 'Mirabegron/vibegron preferred over antimuscarinics in patients >65 years', 'Botox injection lasts 6-9 months; 6% risk of urinary retention', 'Always exclude UTI and polyuria (diabetes, excessive intake) before diagnosing OAB'],
    ['Gormley EA et al. AUA/SUFU Guideline on OAB. J Urol. 2023', 'ACOG Practice Bulletin No. 155'],
  ),

  // ============================================================
  // MENOPAUSE (3)
  // ============================================================

  wh('menopause-vasomotor-symptoms', 'Menopause and Vasomotor Symptoms', 'menopause',
    'Hot flashes and night sweats occurring due to estrogen decline during the menopausal transition, affecting ~80% of women.',
    'Natural menopause occurs at median age 51. Vasomotor symptoms (VMS) last a median of 7.4 years. ~80% of women experience VMS; 25% describe them as severe.',
    'Estrogen withdrawal narrows the thermoneutral zone in the hypothalamus. KNDy neurons (kisspeptin/neurokinin B/dynorphin) in the arcuate nucleus are key modulators. Small temperature changes trigger heat dissipation responses (flushing, sweating).',
    ['Sudden sensation of heat spreading over chest, neck, face', 'Flushing, perspiration, palpitations', 'Night sweats disrupting sleep', 'Episodes last 1-5 minutes, occurring multiple times daily', 'Triggers: warm environments, spicy foods, alcohol, stress, caffeine'],
    ['Clinical diagnosis based on symptoms in age-appropriate women', 'FSH not required for diagnosis in women ≥45 with typical symptoms', 'FSH >25-30 with amenorrhea confirms menopause in ambiguous cases', 'TSH to exclude thyroid disease', 'Evaluate for other causes of flushing if atypical: carcinoid, pheochromocytoma'],
    ['Hormone therapy (HT) is most effective treatment (75% reduction in VMS)', 'Systemic estrogen + progestin (if uterus present) or estrogen alone (post-hysterectomy)', 'Start lowest effective dose: conjugated equine estrogen 0.3-0.625 mg or estradiol 0.5-1 mg', 'Fezolinetant 45 mg daily (NK3 receptor antagonist): first non-hormonal FDA-approved VMS treatment', 'SSRIs/SNRIs: paroxetine 7.5 mg (only FDA-approved), venlafaxine 75 mg', 'Gabapentin 300 mg TID, clonidine 0.1 mg patch', 'Cognitive behavioral therapy and clinical hypnosis have evidence for VMS'],
    ['HT within 10 years of menopause or age <60 has favorable risk-benefit ratio', 'Fezolinetant is a game-changer for women who cannot or prefer not to use HT', 'Bioidentical and compounded hormones are not safer than FDA-approved products', 'Transdermal estrogen avoids first-pass hepatic effects and has lower VTE risk', 'Duration of HT should be individualized; no mandatory stopping point'],
    ['The NAMS 2022 Hormone Therapy Position Statement. Menopause. 2022;29(7):767-794', 'Johnson KA et al. N Engl J Med. 2023;389:1821-1831 (fezolinetant)'],
  ),

  wh('hormone-replacement-therapy', 'Hormone Replacement Therapy', 'menopause',
    'Systemic estrogen-based therapy for menopausal symptoms, bone protection, and quality of life with individualized risk-benefit analysis.',
    'HT use declined after WHI (2002) but evidence reinterpretation supports use in appropriate candidates. ~5-6% of postmenopausal US women currently use HT.',
    'Estrogen replacement addresses the hormonal deficiency underlying menopausal symptoms. Progestin is required with an intact uterus to prevent endometrial hyperplasia from unopposed estrogen. Routes: oral, transdermal patch/gel, vaginal.',
    ['Relief of vasomotor symptoms (hot flashes, night sweats)', 'Prevention and treatment of genitourinary syndrome of menopause', 'Bone density preservation and fracture prevention', 'Improvement in sleep, mood, and quality of life', 'Risks: VTE (oral > transdermal), breast cancer (slight increase with combined HT after 3-5 years), stroke'],
    ['Mammography current per guidelines', 'Lipid panel, glucose', 'Assess personal and family history of VTE, breast cancer, CVD', 'Endometrial evaluation (ultrasound or biopsy) if abnormal bleeding', 'Bone density (DXA) at baseline if indicated'],
    ['Estrogen + progestin for women with uterus; estrogen alone for post-hysterectomy', 'Formulations: conjugated estrogen, estradiol (oral, patch, gel, spray)', 'Progestins: medroxyprogesterone acetate, micronized progesterone (preferred), levonorgestrel IUD', 'Transdermal estradiol preferred for lower VTE and metabolic risk', 'Initiate within the "window of opportunity" (<60 yo or <10 years from menopause)', 'Bazedoxifene/conjugated estrogen (Duavee) as tissue-selective estrogen complex alternative'],
    ['Timing hypothesis: HT initiated <10 years from menopause may be cardioprotective', 'Micronized progesterone has better safety profile than synthetic progestins', 'Transdermal estradiol does not increase VTE risk (unlike oral)', 'Breast cancer risk with estrogen-alone was not increased in WHI (actually trended toward reduction)', 'No mandatory duration limit; reassess annually; many women benefit from extended use'],
    ['Manson JE et al. N Engl J Med. 2013;369:1230-1240 (WHI 13-yr follow-up)', 'The NAMS 2022 Hormone Therapy Position Statement'],
  ),

  wh('genitourinary-syndrome-menopause', 'Genitourinary Syndrome of Menopause', 'menopause',
    'Chronic progressive vulvovaginal, sexual, and urinary symptoms due to postmenopausal estrogen deficiency (formerly vulvovaginal atrophy).',
    'Affects 50-70% of postmenopausal women. Unlike VMS, GSM does not improve without treatment and worsens over time. Significantly underreported and undertreated.',
    'Estrogen deprivation causes thinning of vaginal epithelium, decreased blood flow, reduced glycogen and lactobacilli, increased pH (>5.0), and loss of tissue elasticity. Urethral and bladder trigone share embryologic origin and are similarly affected.',
    ['Vaginal dryness, burning, irritation', 'Dyspareunia (painful intercourse)', 'Decreased lubrication and arousal', 'Recurrent UTIs', 'Urinary frequency, urgency, dysuria', 'Pale, thin, dry vaginal mucosa with petechiae on exam', 'Loss of labial fullness, introital narrowing'],
    ['Clinical diagnosis based on symptoms and physical exam', 'Vaginal pH >5.0 (normal premenopausal: 3.5-4.5)', 'Vaginal maturation index showing parabasal cell predominance', 'Urinalysis and culture if urinary symptoms', 'No routine labs or imaging needed'],
    ['Vaginal moisturizers (Replens) 2-3 times/week', 'Lubricants with intercourse', 'Low-dose vaginal estrogen: cream, tablet (Vagifem), ring (Estring) - first-line pharmacologic', 'Vaginal DHEA (prasterone) 6.5 mg nightly', 'Ospemifene 60 mg daily (oral SERM for dyspareunia)', 'Systemic HT if also treating VMS', 'Vaginal estrogen is safe in most breast cancer survivors (discuss with oncologist)', 'Laser/radiofrequency treatments (insufficient evidence for routine recommendation)'],
    ['GSM is chronic and progressive; it does not resolve without treatment', 'Low-dose vaginal estrogen has minimal systemic absorption and does not require progestin opposition', 'Vaginal estrogen is first-line and can be used long-term', 'Safe in most women with history of breast cancer (ACOG endorses; some oncologists prefer non-estrogen options)', 'Over-the-counter moisturizers and lubricants are appropriate first steps', 'Ospemifene is the only oral non-estrogen FDA-approved treatment for GSM-related dyspareunia'],
    ['Gandhi J et al. Am J Obstet Gynecol. 2016;215(6):704-711', 'ACOG Committee Opinion No. 659'],
  ),

  // ============================================================
  // SEXUAL HEALTH (3)
  // ============================================================

  wh('dyspareunia', 'Dyspareunia', 'sexual-health',
    'Recurrent genital pain associated with sexual intercourse, classified as superficial (introital) or deep.',
    'Affects 10-20% of US women. More common in postmenopausal women (up to 45%). Often underreported due to stigma.',
    'Superficial: vulvar/vestibular causes (provoked vestibulodynia, GSM, lichen sclerosus, vaginismus). Deep: endometriosis, adenomyosis, pelvic adhesions, ovarian pathology, interstitial cystitis. Often multifactorial with biopsychosocial components.',
    ['Pain with initial penetration (superficial) or deep thrusting (deep)', 'Burning, stinging, or tearing sensation at introitus', 'Deep pelvic aching or cramping', 'Pain may persist after intercourse', 'Associated decreased desire and arousal, relationship strain', 'Postmenopausal: vaginal dryness and tissue fragility'],
    ['Detailed sexual and pain history (onset, location, timing, duration)', 'Vulvar inspection for lesions, erythema, fissures', 'Cotton swab (Q-tip) test for provoked vestibulodynia', 'Speculum exam assessing vaginal atrophy, discharge, lesions', 'Bimanual exam for deep tenderness, masses, endometriosis nodularity', 'Pelvic ultrasound or MRI if deep dyspareunia'],
    ['Treat underlying cause', 'GSM: vaginal estrogen, moisturizers, lubricants', 'Provoked vestibulodynia: topical lidocaine, pelvic floor PT, cognitive behavioral therapy, vestibulectomy for refractory cases', 'Deep: medical/surgical treatment of endometriosis or other pathology', 'Pelvic floor physical therapy for myofascial component', 'Couple-based sex therapy and counseling', 'Gradual desensitization with dilators if vaginismus component'],
    ['Always use the cotton swab test to localize pain', 'Provoked vestibulodynia is the most common cause in premenopausal women', 'GSM is the most common cause in postmenopausal women', 'Pelvic floor PT is beneficial for nearly all causes of dyspareunia', 'Multidisciplinary approach (gynecology, PT, psychology) has best outcomes', 'Lichen sclerosus must be treated with potent topical steroids to prevent scarring'],
    ['Steege JF, Zolnoun DA. N Engl J Med. 2009;360(23):2449-2457', 'ACOG Practice Bulletin No. 213'],
  ),

  wh('vaginismus', 'Vaginismus / Genito-Pelvic Pain/Penetration Disorder', 'sexual-health',
    'Involuntary pelvic floor muscle contraction causing difficulty or inability to achieve vaginal penetration.',
    'Estimated prevalence 5-17% of women in clinical settings. Often presents in young women attempting first intercourse or tampon use.',
    'Involuntary contraction of pubococcygeus and other pelvic floor muscles in anticipation of or during attempted penetration. May be primary (lifelong) or secondary (acquired after trauma, infection, surgery). Fear-pain-avoidance cycle perpetuates condition.',
    ['Inability or extreme difficulty with vaginal penetration (intercourse, exam, tampons)', 'Anticipatory anxiety and fear of pain', 'Involuntary tightening of vaginal muscles on attempted entry', 'May have normal arousal and desire', 'Physical exam may show visible muscle guarding, inability to insert single finger'],
    ['Careful history in a supportive, non-judgmental setting', 'Gentle pelvic exam (may not be possible initially; do not force)', 'Assessment for vulvar pathology (vestibulodynia, lichen sclerosus)', 'Screen for sexual trauma history', 'Pelvic floor muscle assessment by specialized physical therapist'],
    ['Pelvic floor physical therapy with myofascial release and biofeedback (first-line)', 'Progressive vaginal dilator therapy (graduated sizes over weeks-months)', 'Cognitive behavioral therapy addressing fear-avoidance, catastrophizing', 'Topical lidocaine 2-5% before penetration attempts or exams', 'Botulinum toxin injection into pelvic floor muscles for refractory cases', 'Partner involvement in therapy when appropriate'],
    ['DSM-5 combined vaginismus and dyspareunia into genito-pelvic pain/penetration disorder', 'Treatment success rates with multidisciplinary approach are 75-100%', 'Never force an exam; build trust gradually', 'Often coexists with provoked vestibulodynia', 'Anxiety and trauma history are common but not universal; avoid assuming causation', 'Botox injection into pelvic floor muscles is emerging for refractory cases'],
    ['Crowley T et al. BMJ. 2009;338:b2284', 'Pacik PT et al. J Sex Med. 2019;16(11):1761-1767'],
  ),

  wh('sti-screening-women', 'STI Screening in Women', 'sexual-health',
    'Guideline-based screening for sexually transmitted infections tailored to risk factors, age, and pregnancy status.',
    'CDC estimates 26 million new STIs annually in the US. Women bear disproportionate burden of long-term complications (PID, infertility, ectopic pregnancy, cervical cancer).',
    'STIs are transmitted through sexual contact (vaginal, oral, anal). Women are biologically more susceptible to STI acquisition due to larger mucosal surface area and cervical ectopy. Many STIs are asymptomatic in women, enabling undetected transmission and complications.',
    ['Many STIs are asymptomatic in women', 'Abnormal vaginal discharge, odor', 'Dysuria, pelvic pain, dyspareunia', 'Genital lesions (ulcers, warts, vesicles)', 'Intermenstrual or postcoital bleeding', 'Screening in pregnancy prevents neonatal transmission'],
    ['Chlamydia/gonorrhea NAAT (urine or cervical/vaginal swab): annually for sexually active women <25 and older women with risk factors', 'HIV: at least once for ages 15-65; repeat based on risk', 'Syphilis RPR/VDRL: at-risk populations and all pregnant women', 'Hepatitis B and C: risk-based and one-time universal HCV screening for all adults', 'Trichomoninas: consider in symptomatic women and those with HIV', 'HPV co-testing with Pap every 5 years ages 30-65 or primary HPV testing every 5 years', 'Pregnancy: HIV, syphilis, hepatitis B, chlamydia/gonorrhea at first prenatal visit'],
    ['Treat per CDC STI Treatment Guidelines 2021', 'Expedited partner therapy (EPT) for chlamydia and gonorrhea where legally permitted', 'Chlamydia: doxycycline 100 mg BID x 7 days (now preferred over azithromycin)', 'Gonorrhea: ceftriaxone 500 mg IM single dose (1 g if ≥150 kg)', 'Test of cure at 4 weeks for pharyngeal gonorrhea and in pregnancy', 'Retest chlamydia and gonorrhea at 3 months after treatment', 'HPV vaccination through age 26 (shared decision-making 27-45)'],
    ['Doxycycline 100 mg BID x 7 days replaced azithromycin as first-line for chlamydia (2021 CDC update)', 'Chlamydia screening in young women prevents 50% of PID cases', 'Doxy-PEP (doxycycline 200 mg within 72 hours post-exposure) reduces STI incidence in high-risk populations', 'HPV vaccination prevents ~90% of HPV-related cancers', 'Universal HCV screening is now recommended for all adults ≥18 years', 'Gonorrhea resistance to azithromycin is increasing; ceftriaxone monotherapy is now standard'],
    ['Workowski KA et al. CDC STI Treatment Guidelines, 2021. MMWR', 'USPSTF Recommendation Statements: Chlamydia/Gonorrhea, HIV, HCV, Syphilis'],
  ),

  // ============================================================
  // PREGNANCY-RELATED (4)
  // ============================================================

  wh('preeclampsia', 'Preeclampsia', 'pregnancy-related',
    'Pregnancy-specific hypertensive disorder after 20 weeks gestation with end-organ dysfunction; a leading cause of maternal and fetal morbidity.',
    'Affects 3-8% of pregnancies worldwide. Leading cause of maternal mortality in developed countries. Risk factors: nulliparity, chronic HTN, diabetes, obesity, multiple gestation, prior preeclampsia.',
    'Abnormal placentation with inadequate spiral artery remodeling leads to placental ischemia. Release of anti-angiogenic factors (sFlt-1) and inflammatory mediators cause widespread endothelial dysfunction, resulting in hypertension, proteinuria, and multi-organ damage.',
    ['BP ≥140/90 on two occasions ≥4 hours apart after 20 weeks', 'Proteinuria (≥300 mg/24h or urine protein/creatinine ratio ≥0.3)', 'Severe features: BP ≥160/110, platelets <100K, creatinine >1.1, LFTs >2x normal, pulmonary edema, cerebral/visual symptoms', 'Headache, visual changes, RUQ/epigastric pain', 'HELLP syndrome: Hemolysis, Elevated Liver enzymes, Low Platelets'],
    ['Serial BP monitoring', 'CBC with platelets, LFTs, creatinine, uric acid', '24-hour urine or spot protein/creatinine ratio', 'Fetal surveillance: NST, BPP, Doppler velocimetry', 'Growth ultrasound every 3-4 weeks'],
    ['Low-dose aspirin 81-162 mg starting 12-16 weeks for high-risk women (prevention)', 'Delivery is definitive treatment', '≥37 weeks: deliver', '<37 weeks without severe features: expectant management with close monitoring', '<34 weeks with severe features: betamethasone for fetal lung maturity then deliver', 'Magnesium sulfate for seizure prophylaxis (severe preeclampsia and intrapartum/postpartum)', 'Antihypertensives: labetalol, nifedipine, hydralazine for acute severe HTN'],
    ['Low-dose aspirin prevents 24% of preeclampsia in high-risk women', 'Delivery is the only cure; symptoms may worsen postpartum before improving', 'Magnesium sulfate prevents 50% of eclamptic seizures', 'HELLP can occur without hypertension or proteinuria', 'Lifetime CVD risk is doubled after preeclampsia; cardiology follow-up recommended', 'Blood pressure monitoring should continue for 72 hours postpartum (peak risk)'],
    ['ACOG Practice Bulletin No. 222: Gestational Hypertension and Preeclampsia', 'USPSTF: Low-Dose Aspirin for Preeclampsia Prevention, 2021'],
  ),

  wh('gestational-diabetes', 'Gestational Diabetes Mellitus', 'pregnancy-related',
    'Glucose intolerance first recognized during pregnancy, associated with macrosomia, birth complications, and future maternal diabetes risk.',
    'Affects 6-9% of pregnancies. Prevalence increasing parallel to obesity epidemic. 50% of women with GDM develop type 2 diabetes within 5-10 years.',
    'Pregnancy-induced insulin resistance from placental hormones (human placental lactogen, cortisol, progesterone) exceeds pancreatic beta-cell compensatory capacity. Results in maternal hyperglycemia and fetal hyperinsulinemia driving macrosomia and metabolic complications.',
    ['Usually asymptomatic; detected by screening', 'Risk factors: obesity, age >25, prior GDM, family history of DM, PCOS, high-risk ethnicity', 'Macrosomia, polyhydramnios on ultrasound', 'Fetal complications: macrosomia, shoulder dystocia, neonatal hypoglycemia, hyperbilirubinemia'],
    ['Universal screening at 24-28 weeks', 'One-step: 75 g OGTT (IADPSG criteria)', 'Two-step: 50 g GCT then 100 g OGTT if abnormal (ACOG preferred)', 'Early screening if high risk factors (first prenatal visit)', 'Fasting glucose ≥92, 1-hr ≥180, 2-hr ≥153 (IADPSG)', 'Self-monitoring of blood glucose 4x daily (fasting and 1 or 2-hr postprandial)'],
    ['Medical nutrition therapy and exercise (first-line, effective in 80-90%)', 'Glucose targets: fasting <95, 1-hr postprandial <140, 2-hr <120 mg/dL', 'Insulin therapy if targets not met (preferred pharmacologic treatment)', 'Metformin and glyburide are alternatives but may cross placenta', 'Fetal surveillance: growth ultrasound, weekly NST from 32-36 weeks based on severity', 'Delivery: consider induction at 39-40 weeks (37-39 if on insulin with poor control)', 'Postpartum: 75 g OGTT at 4-12 weeks; screen for diabetes every 1-3 years'],
    ['GDM is the strongest predictor of future type 2 diabetes in women', 'Lifestyle intervention reduces progression to T2DM by 50%', 'A1C is not used for GDM diagnosis due to physiologic changes in pregnancy', 'Insulin does not cross the placenta; fetal hyperinsulinemia is from fetal pancreas responding to maternal glucose', 'Breastfeeding reduces future diabetes risk in both mother and child'],
    ['ACOG Practice Bulletin No. 190: Gestational Diabetes Mellitus', 'IADPSG Consensus Panel. Diabetes Care. 2010;33(3):676-682'],
  ),

  wh('ectopic-pregnancy', 'Ectopic Pregnancy', 'pregnancy-related',
    'Implantation of a fertilized ovum outside the endometrial cavity, most commonly in the fallopian tube; a life-threatening emergency if ruptured.',
    'Occurs in ~2% of pregnancies. Leading cause of first-trimester maternal mortality. Risk factors: prior ectopic, PID, tubal surgery, IUD, assisted reproduction.',
    'Most commonly tubal (~95%), also ovarian, cervical, abdominal, or cesarean scar. Implantation in the tube cannot sustain growth; progressive trophoblast invasion erodes into tubal vessels causing hemorrhage. Rupture is a surgical emergency.',
    ['Classic triad: abdominal pain, vaginal bleeding, amenorrhea (present in ~50%)', 'Unilateral pelvic or lower abdominal pain', 'Vaginal bleeding typically light, dark', 'Shoulder pain (diaphragmatic irritation from hemoperitoneum)', 'Adnexal tenderness or mass on exam', 'Hemodynamic instability if ruptured'],
    ['Quantitative serum beta-hCG (abnormal rise: <53% increase in 48 hrs)', 'Transvaginal ultrasound: no intrauterine pregnancy with hCG above discriminatory zone (1500-3000 mIU/mL)', 'Progesterone <5 ng/mL suggests nonviable pregnancy', 'CBC, type and Rh, coagulation panel', 'Culdocentesis if ultrasound unavailable and rupture suspected'],
    ['Expectant management: selected stable patients with declining hCG <200 and no cardiac activity', 'Methotrexate (single or multi-dose protocol) for unruptured, hemodynamically stable, hCG <5000, no cardiac activity, mass <3.5 cm', 'Surgery: laparoscopic salpingostomy (tube-sparing) or salpingectomy', 'Emergent laparotomy if hemodynamically unstable', 'RhoGAM if Rh-negative', 'Serial hCG monitoring until undetectable after all treatment modalities'],
    ['Ectopic pregnancy is the leading cause of first-trimester maternal death', 'hCG that does not rise appropriately or decline as expected is ectopic until proven otherwise', 'A negative ultrasound with hCG above discriminatory zone is highly suspicious for ectopic', 'Methotrexate requires reliable follow-up and patient compliance for serial hCG monitoring', 'IUD users have lower overall pregnancy rate, but if pregnant, higher proportion are ectopic', 'Heterotopic pregnancy (simultaneous IUP + ectopic) is rare naturally (1:30,000) but more common with ART (1:100)'],
    ['ACOG Practice Bulletin No. 193: Tubal Ectopic Pregnancy', 'Hendriks E et al. Am Fam Physician. 2020;101(10):599-606'],
  ),

  wh('postpartum-hemorrhage', 'Postpartum Hemorrhage', 'pregnancy-related',
    'Cumulative blood loss ≥1000 mL or bleeding with hemodynamic instability within 24 hours of delivery; the leading cause of maternal mortality worldwide.',
    'Occurs in 3-5% of deliveries. Accounts for ~25% of maternal deaths globally. Uterine atony is the cause in 70-80% of cases.',
    'The "4 T\'s": Tone (uterine atony), Tissue (retained placenta), Trauma (lacerations, uterine rupture), Thrombin (coagulopathy). Risk factors: prolonged labor, overdistended uterus, chorioamnionitis, magnesium use, grand multiparity.',
    ['Excessive vaginal bleeding after delivery', 'Boggy, poorly contracted uterus (atony)', 'Ongoing bleeding despite contracted uterus (laceration or retained tissue)', 'Tachycardia, hypotension, pallor', 'Quantitative blood loss measurement more accurate than visual estimation'],
    ['Quantitative blood loss measurement (weighing blood-soaked materials)', 'Assess uterine tone immediately', 'Inspect for lacerations (cervical, vaginal, perineal)', 'Manual exploration for retained placental tissue', 'CBC, coagulation studies, fibrinogen (critical: <200 mg/dL predicts severe hemorrhage)', 'Type and crossmatch', 'Point-of-care ultrasound for retained tissue'],
    ['Active management of third stage (oxytocin with delivery of anterior shoulder or after placenta)', 'Uterine atony: bimanual massage, oxytocin 10-40 units IV, methylergonovine 0.2 mg IM, carboprost (Hemabate) 0.25 mg IM, misoprostol 600-1000 mcg', 'Tranexamic acid 1 g IV within 3 hours of onset (reduces death by 31%)', 'Uterine tamponade (Bakri balloon)', 'Surgical: uterine compression sutures (B-Lynch), uterine artery ligation, hysterectomy if refractory', 'Massive transfusion protocol: 1:1:1 ratio PRBC:FFP:platelets'],
    ['Tranexamic acid should be given within 3 hours of hemorrhage onset (WOMAN trial)', 'Fibrinogen <200 mg/dL is the best predictor of severe PPH progression', 'Active management of third stage reduces PPH by 50-70%', 'Quantitative blood loss measurement is more accurate and should replace visual estimation', 'Hemorrhage is often underestimated; clinical team should have staged response protocols (OB hemorrhage bundles)', 'uterine atony is most common cause but always evaluate for the other T\'s systematically'],
    ['ACOG Practice Bulletin No. 183: Postpartum Hemorrhage', 'WOMAN Trial Collaborators. Lancet. 2017;389:2105-2116'],
  ),

  // ============================================================
  // GYNECOLOGIC CANCER (4)
  // ============================================================

  wh('cervical-cancer-screening', 'Cervical Cancer Screening', 'gynecologic-cancer',
    'Evidence-based screening with cytology and/or HPV testing to detect precancerous cervical lesions.',
    'Cervical cancer incidence has decreased 70% since Pap smear introduction. ~14,000 new cases and ~4,000 deaths annually in the US. HPV causes >99% of cervical cancers.',
    'Persistent high-risk HPV infection (types 16, 18 cause ~70%) leads to CIN progression: CIN1 (60-80% regress) to CIN2/3 (high-grade, ~30-50% progress to invasive cancer over 10-30 years). Screening detects and treats precancerous lesions.',
    ['Cervical cancer is largely preventable with screening and vaccination', 'Most cervical dysplasia is asymptomatic', 'Symptoms of invasive cancer: postcoital bleeding, intermenstrual bleeding, watery/bloody vaginal discharge', 'Advanced disease: pelvic pain, leg edema, renal failure from obstruction'],
    ['Age 21-29: cytology (Pap) alone every 3 years', 'Age 30-65: cytology + HPV co-testing every 5 years, primary HPV testing every 5 years, or cytology alone every 3 years', 'Discontinue at age 65 if adequate prior screening and no history of CIN2+', 'After hysterectomy with removal of cervix (no history of CIN2+): discontinue', 'Immunocompromised: screen within 1 year of sexual debut or age 21; annually until 3 negative then every 3 years', 'Colposcopy with biopsy for abnormal results per ASCCP management guidelines'],
    ['HPV vaccination: 9-valent (Gardasil 9) ages 9-26 routine, 27-45 shared decision', 'ASCCP risk-based management algorithms for abnormal results', 'CIN1: observation in most cases', 'CIN2/3: excisional treatment (LEEP/cone biopsy) or ablation', 'Surveillance after treatment: HPV-based testing at 1 year, then per ASCCP guidelines', 'Invasive cancer: staging, multidisciplinary oncology (surgery, radiation, chemotherapy)'],
    ['Primary HPV testing alone is now a preferred screening strategy (USPSTF 2018)', 'HPV vaccination prevents ~90% of HPV-related cancers when given before exposure', 'HPV 16 alone causes ~55% of cervical cancers', 'ASCCP risk-based management uses cumulative risk to guide colposcopy thresholds', 'Screening should not begin before age 21 regardless of sexual activity onset', 'Adenocarcinoma in situ is best treated with cold knife conization, not LEEP'],
    ['USPSTF Recommendation: Cervical Cancer Screening, 2018', 'Perkins RB et al. 2019 ASCCP Risk-Based Management Guidelines. J Low Genit Tract Dis. 2020'],
  ),

  wh('endometrial-cancer', 'Endometrial Cancer', 'gynecologic-cancer',
    'Most common gynecologic malignancy in developed countries; typically presents with postmenopausal bleeding.',
    'Most common gynecologic cancer with ~65,000 new cases/year in the US. Median age at diagnosis 63. 5-year survival 81% overall (95% for stage I). Incidence rising due to obesity epidemic.',
    'Type I (80%): endometrioid, estrogen-dependent, associated with unopposed estrogen exposure (obesity, PCOS, tamoxifen, nulliparity). Arises through endometrial hyperplasia pathway. Type II (20%): serous, clear cell, not estrogen-dependent, more aggressive, p53-driven.',
    ['Postmenopausal bleeding (>90% present this way)', 'Abnormal uterine bleeding in premenopausal women (irregular, heavy)', 'Endometrial thickening on ultrasound (>4 mm postmenopausal threshold)', 'Advanced: pelvic pain, weight loss, bowel/bladder symptoms', 'Risk factors: obesity, diabetes, hypertension, nulliparity, late menopause, tamoxifen, Lynch syndrome'],
    ['Transvaginal ultrasound (endometrial thickness)', 'Endometrial biopsy (office Pipelle) - sensitivity ~95% for cancer', 'Hysteroscopy with directed biopsy if office biopsy insufficient', 'Dilation and curettage if stenotic cervix', 'CT chest/abdomen/pelvis or MRI for staging', 'Genetic testing for Lynch syndrome (all endometrial cancers per NCCN or age <60/risk criteria)'],
    ['Surgical staging: total hysterectomy with bilateral salpingo-oophorectomy, sentinel lymph node mapping', 'Adjuvant therapy based on stage, grade, and histologic type', 'Stage IA grade 1-2: observation after surgery', 'Stage IB-II or high-grade: vaginal brachytherapy +/- external beam radiation', 'Stage III-IV: chemotherapy (carboplatin/paclitaxel) +/- radiation', 'Fertility-sparing: high-dose progestin therapy for select young patients with grade 1 stage IA', 'Immune checkpoint inhibitors (pembrolizumab + lenvatinib) for advanced/recurrent MMR-deficient tumors'],
    ['Any postmenopausal bleeding requires evaluation to exclude endometrial cancer', 'Endometrial thickness ≤4 mm has >99% negative predictive value for cancer', 'Lynch syndrome accounts for 3-5% of endometrial cancers; universal screening recommended', 'Obesity is the strongest modifiable risk factor (each 5 kg/m2 BMI increase = 50% risk increase)', 'Tamoxifen acts as an estrogen agonist on the endometrium; annual surveillance not recommended (evaluate only if bleeding)', 'MSI-high/dMMR tumors respond to immunotherapy'],
    ['ACOG Practice Bulletin No. 149: Endometrial Cancer', 'NCCN Guidelines: Uterine Neoplasms, Version 1.2024'],
  ),

  wh('ovarian-cancer', 'Ovarian Cancer', 'gynecologic-cancer',
    'Malignant neoplasm of the ovary, often diagnosed at advanced stage due to nonspecific symptoms; the deadliest gynecologic cancer.',
    'Fifth leading cause of cancer death in women. ~20,000 new cases and ~13,000 deaths annually in the US. 5-year survival: stage I 90%, stage III/IV 30%. 70% diagnosed at stage III-IV.',
    'Most common type is high-grade serous carcinoma, now believed to originate in the fallopian tube fimbria. BRCA1/2 mutations account for 15-20%. Tumor disseminates by peritoneal spread. No effective screening exists for average-risk women.',
    ['Insidious onset with nonspecific symptoms', 'Bloating, pelvic/abdominal pain, early satiety, urinary frequency', 'Symptoms present most days for <12 months suggest evaluation', 'Ascites, abdominal distension in advanced disease', 'Adnexal mass on exam or imaging', 'Paraneoplastic: hypercalcemia (granulosa cell), virilization'],
    ['CA-125 (elevated in 80% of advanced epithelial ovarian cancer; normal in 50% of early stage)', 'Transvaginal ultrasound for adnexal mass characterization', 'CT chest/abdomen/pelvis for staging', 'HE4 and ROMA score may improve specificity in postmenopausal women', 'Genetic testing (BRCA1/2, Lynch genes) for all epithelial ovarian cancers', 'No effective screening for average-risk women (USPSTF recommends against routine screening)'],
    ['Surgical: total abdominal hysterectomy, bilateral salpingo-oophorectomy, omentectomy, lymph node dissection, maximal cytoreductive surgery (goal: no visible residual disease)', 'Chemotherapy: carboplatin + paclitaxel (IV or IP/IV) for 6 cycles', 'PARP inhibitors (olaparib, niraparib) for maintenance in BRCA-mutated and HRD-positive tumors', 'Bevacizumab as adjunct in advanced disease', 'Neoadjuvant chemotherapy with interval debulking for unresectable disease', 'Risk-reducing salpingo-oophorectomy for BRCA carriers at age 35-40 (BRCA1) or 40-45 (BRCA2)'],
    ['No effective screening exists for average-risk ovarian cancer; USPSTF recommends against screening', 'Risk-reducing salpingo-oophorectomy reduces ovarian cancer risk by 80% in BRCA carriers', 'Opportunistic salpingectomy at time of benign gynecologic surgery may reduce risk', 'Complete cytoreduction is the strongest surgical prognostic factor', 'BRCA-mutated tumors respond better to platinum chemotherapy and PARP inhibitors', 'Oral contraceptives reduce ovarian cancer risk by 40-50% with ≥5 years use'],
    ['NCCN Guidelines: Ovarian Cancer, Version 1.2024', 'Armstrong DK et al. J Clin Oncol. 2021;39(13):1506 (GOG-252)'],
  ),

  wh('vulvar-cancer', 'Vulvar Cancer', 'gynecologic-cancer',
    'Malignant neoplasm of the vulva, most commonly squamous cell carcinoma, with two distinct pathways: HPV-related and HPV-independent.',
    'Accounts for ~6% of gynecologic cancers. ~6,500 new cases/year in the US. Incidence increasing, especially in younger women (HPV-related). Median age at diagnosis 68 years.',
    'HPV-dependent pathway (30-40%): high-risk HPV causes VIN (usual type/HSIL), progressing to basaloid/warty carcinoma; occurs in younger women. HPV-independent pathway (60-70%): associated with lichen sclerosus and differentiated VIN, progressing to keratinizing SCC; occurs in older women.',
    ['Vulvar pruritus (most common symptom)', 'Palpable lump, mass, or ulceration', 'Bleeding, pain, dysuria', 'Visible lesion: raised, ulcerated, pigmented, or white', 'May be incidental finding on exam for lichen sclerosus', 'Inguinal lymphadenopathy in advanced disease'],
    ['Thorough vulvar examination with bright light', 'Biopsy of all suspicious vulvar lesions (punch biopsy under local anesthesia)', 'Staging: CT or PET/CT for lymph node assessment', 'Sentinel lymph node biopsy for tumors >1 mm invasion', 'Colposcopy of cervix and vagina (multi-site HPV-related disease)'],
    ['VIN/HSIL: wide local excision, topical imiquimod, or laser ablation', 'Early invasive (<2 cm, ≤1 mm invasion): wide local excision with 1 cm margins', 'Larger tumors: radical vulvectomy (increasingly radical wide local excision preferred) + inguinofemoral lymphadenectomy or sentinel node biopsy', 'Advanced: chemoradiation (cisplatin-based) with possible surgery', 'Lichen sclerosus: long-term potent topical steroids to reduce malignant transformation risk'],
    ['Any persistent vulvar lesion must be biopsied to exclude malignancy', 'Lichen sclerosus carries 3-5% lifetime risk of vulvar SCC; requires long-term surveillance', 'Sentinel lymph node biopsy has replaced routine inguinofemoral lymphadenectomy for early-stage disease', 'HPV vaccination may reduce HPV-related vulvar cancer incidence', 'Wound complications are common after vulvar surgery; meticulous wound care is essential', 'Multidisciplinary care including psychosexual counseling improves quality of life'],
    ['NCCN Guidelines: Vulvar Cancer, Version 2.2024', 'Koh WJ et al. J Natl Compr Canc Netw. 2017;15(1):92-120'],
  ),

  // ============================================================
  // BONE HEALTH (2)
  // ============================================================

  wh('osteoporosis', 'Osteoporosis', 'bone-health',
    'Systemic skeletal disease characterized by low bone mass and microarchitectural deterioration, increasing fracture risk.',
    'Affects ~10 million Americans (80% women). 50% of postmenopausal women will have an osteoporotic fracture. Hip fractures carry 20% 1-year mortality. Costs ~$19 billion/year in the US.',
    'Bone remodeling imbalance: osteoclastic resorption exceeds osteoblastic formation. Estrogen deficiency (menopause) is the primary driver in women, accelerating bone loss to 2-3%/year in the first 5-7 years postmenopause. Secondary causes include glucocorticoids, hyperparathyroidism, hyperthyroidism, celiac disease.',
    ['Often asymptomatic until fracture occurs ("silent disease")', 'Fragility fractures: vertebral (most common), hip, distal radius (Colles)', 'Loss of height (>4 cm suggests vertebral compression fractures)', 'Thoracic kyphosis (dowager\'s hump)', 'Back pain (acute vertebral fracture)', 'Risk assessment: FRAX tool integrates clinical risk factors'],
    ['DXA (dual-energy X-ray absorptiometry) of hip and lumbar spine', 'Screen: all women ≥65; postmenopausal <65 with risk factors (USPSTF)', 'T-score interpretation: >-1.0 normal, -1.0 to -2.5 osteopenia, ≤-2.5 osteoporosis', 'FRAX calculator: 10-year fracture probability', 'Vertebral fracture assessment (VFA) on DXA', 'Secondary causes workup: CBC, CMP, 25-OH vitamin D, TSH, PTH, celiac serologies, 24-hr urine calcium'],
    ['Lifestyle: weight-bearing exercise, fall prevention, smoking cessation, moderate alcohol', 'Calcium 1000-1200 mg/day (diet + supplements), vitamin D 800-1000 IU/day', 'Pharmacologic treatment if T-score ≤-2.5, hip fracture, FRAX hip ≥3% or major osteoporotic ≥20%', 'First-line: oral bisphosphonates (alendronate 70 mg weekly, risedronate 35 mg weekly)', 'Alternatives: IV zoledronic acid 5 mg annually, denosumab 60 mg SC q6mo', 'Anabolic agents for severe osteoporosis: teriparatide, abaloparatide, romosozumab (build bone first, then consolidate with antiresorptive)', 'Drug holiday after 5 years oral or 3 years IV bisphosphonate in moderate-risk patients'],
    ['Bisphosphonates reduce vertebral fracture risk by 40-70% and hip fracture by 40%', 'Romosozumab (sclerostin inhibitor) is the most potent bone builder available', 'Anabolic-first then antiresorptive strategy provides maximum bone gain', 'Denosumab discontinuation causes rapid bone loss and rebound vertebral fractures; must transition to bisphosphonate', 'Atypical femoral fracture and osteonecrosis of the jaw are rare complications of prolonged antiresorptive therapy', 'Vertebral fractures are the most common osteoporotic fracture and often clinically silent'],
    ['USPSTF Recommendation: Osteoporosis Screening, 2018', 'Shoback D et al. JCEM. 2020;105(3):587-594'],
  ),

  wh('osteoporosis-prevention', 'Osteoporosis Prevention and Bone Health', 'bone-health',
    'Strategies to optimize peak bone mass and minimize age-related bone loss throughout the female lifespan.',
    'Peak bone mass achieved by age 25-30 determines osteoporosis risk. 50% of peak bone mass is genetically determined; 50% is modifiable through lifestyle. Women lose up to 20% of bone density in the 5-7 years after menopause.',
    'Bone mass accrual is maximal during adolescence (25% of adult bone formed during the 2-year pubertal growth spurt). Estrogen, mechanical loading, calcium, and vitamin D are critical for bone formation. After peak bone mass, gradual remodeling favoring resorption accelerates at menopause.',
    ['Prevention starts in childhood and adolescence', 'Adequate calcium intake: 1000-1300 mg/day (age-dependent)', 'Vitamin D sufficiency: 600-1000 IU/day', 'Weight-bearing and resistance exercise', 'Risk factor identification: family history, medications, early menopause', 'Assess for secondary causes of bone loss in younger women'],
    ['25-hydroxyvitamin D level (goal ≥30 ng/mL, minimum ≥20)', 'DXA screening based on age and risk factors', 'FRAX assessment for fracture risk in postmenopausal women', 'Basic metabolic panel, CBC, TSH if indicated', 'Bone turnover markers (CTX, P1NP) for monitoring response to therapy'],
    ['Dietary calcium from dairy, fortified foods, leafy greens', 'Calcium supplementation only to fill dietary gaps (not to exceed 1200 mg total)', 'Vitamin D3 supplementation 1000-2000 IU/day for insufficiency', 'Weight-bearing exercise: walking, jogging, stairs, dancing (30+ min most days)', 'Resistance training 2-3 times per week', 'Balance exercises and fall prevention in older adults', 'Avoid smoking, excess alcohol (>2 drinks/day), and excess caffeine', 'Minimize glucocorticoid use; add bone protection if prednisone ≥2.5 mg daily for ≥3 months'],
    ['Adolescence is the critical window for peak bone mass accrual', 'Exercise is the only intervention that both builds bone and prevents falls', 'Calcium supplements may modestly increase cardiovascular risk; dietary calcium is preferred', 'Vitamin D deficiency is extremely common (40% of US adults)', 'Female athlete triad (energy deficiency, amenorrhea, low BMD) requires energy restoration, not just calcium', 'Each standard deviation decrease in BMD doubles fracture risk'],
    ['NOF Clinician\'s Guide to Prevention and Treatment of Osteoporosis, 2022', 'Weaver CM et al. Osteoporos Int. 2016;27:1281-1386'],
  ),

  // ============================================================
  // ADDITIONAL ENTRIES (2)
  // ============================================================

  wh('uterine-fibroids', 'Uterine Fibroids (Leiomyomata)', 'menstrual-disorders',
    'Benign smooth muscle tumors of the myometrium; the most common pelvic tumor in women.',
    'Affect up to 70-80% of women by age 50. Prevalence 2-3x higher in Black women. Account for ~30% of hysterectomies. Annual healthcare costs exceed $34 billion in the US.',
    'Monoclonal smooth muscle neoplasms driven by estrogen, progesterone, and growth factors. Classified by location: intramural (most common), submucosal (most symptomatic), subserosal, pedunculated. FIGO classification system (0-8) based on relation to endometrium and serosa.',
    ['Heavy menstrual bleeding (most common symptom, especially submucosal)', 'Pelvic pressure, bloating, increased abdominal girth', 'Urinary frequency or retention from bladder compression', 'Constipation from rectal compression', 'Dyspareunia', 'Infertility or pregnancy complications (submucosal)'],
    ['Pelvic ultrasound (transvaginal and transabdominal)', 'Saline infusion sonohysterography for intracavitary assessment', 'MRI for precise mapping before myomectomy or uterine artery embolization', 'CBC and iron studies for anemia assessment', 'Endometrial biopsy if abnormal bleeding and age ≥45 or risk factors'],
    ['Expectant management if asymptomatic', 'Hormonal: combined OCP, levonorgestrel IUD (best for bleeding, not bulk symptoms), GnRH agonists/antagonists', 'Tranexamic acid for bleeding', 'Uterine artery embolization (UAE) for bleeding and bulk symptoms', 'Myomectomy (hysteroscopic for submucosal, laparoscopic/open for others) if fertility desired', 'Hysterectomy for definitive treatment when fertility not desired', 'MRI-guided focused ultrasound (MRgFUS) and radiofrequency ablation as emerging options'],
    ['Submucosal fibroids have the greatest impact on bleeding and fertility', 'GnRH antagonist (relugolix combination tablet) is a new oral medical option avoiding depot injections', 'UAE preserves the uterus but is not recommended before planned pregnancy', 'Power morcellation carries rare risk of disseminating occult leiomyosarcoma (FDA warning)', 'Fibroids regress after menopause due to estrogen decline', 'Racial disparities in fibroid prevalence, severity, and access to treatment are significant'],
    ['Stewart EA. N Engl J Med. 2015;372(17):1646-1655', 'ACOG Practice Bulletin No. 228'],
  ),

  wh('adenomyosis', 'Adenomyosis', 'menstrual-disorders',
    'Presence of endometrial glands and stroma within the myometrium causing uterine enlargement, pain, and heavy bleeding.',
    'Prevalence varies widely (5-70%) depending on diagnostic criteria. Most common in parous women aged 40-50. Increasingly diagnosed non-invasively with improved imaging.',
    'Endometrial tissue invades the myometrium, inducing smooth muscle hypertrophy and hyperplasia. Results in a diffusely enlarged, boggy uterus. May be focal (adenomyoma) or diffuse. Often coexists with endometriosis and fibroids.',
    ['Heavy menstrual bleeding (menorrhagia)', 'Severe dysmenorrhea, often worsening over years', 'Chronic pelvic pain', 'Diffusely enlarged, boggy, tender uterus on exam', 'Dyspareunia', 'May contribute to infertility and adverse pregnancy outcomes'],
    ['Transvaginal ultrasound: heterogeneous myometrium, myometrial cysts, asymmetric uterine wall thickening, fan-shaped shadowing', 'MRI: junctional zone thickness >12 mm is diagnostic', 'No serum biomarker; CA-125 may be mildly elevated', 'Definitive diagnosis historically required histologic examination of hysterectomy specimen'],
    ['Levonorgestrel IUD (first-line medical treatment for bleeding and pain)', 'Combined OCP continuous regimen', 'GnRH agonists for temporary symptom control or preoperative volume reduction', 'NSAIDs and tranexamic acid for symptom management', 'Hysterectomy is definitive treatment', 'Uterine-sparing surgery (adenomyomectomy) emerging for fertility preservation', 'UAE and MRgFUS under investigation'],
    ['MRI with junctional zone >12 mm is the most accurate non-invasive diagnostic criterion', 'Often coexists with endometriosis (up to 80% of cases)', 'Levonorgestrel IUD significantly reduces bleeding and pain', 'Historically diagnosed only at hysterectomy; non-invasive diagnosis now possible with expert ultrasound/MRI', 'Adenomyosis may impair IVF implantation rates; GnRH agonist pretreatment may improve outcomes', 'Distinguish from fibroids: adenomyosis is poorly defined, diffuse; fibroids are well-circumscribed'],
    ['Chapron C et al. N Engl J Med. 2020;382(13):1244-1256', 'ACOG Committee Opinion No. 822'],
  ),

];

// Populate the record
for (const entry of entries) {
  WOMENS_HEALTH_ENTRIES[entry.id] = entry;
}

// --- Utility Functions ---

/** Search women's health entries by keyword across id, name, description, and keyPearls. */
export function searchWomensHealthEntries(query: string): WomensHealthEntry[] {
  const q = query.toLowerCase();
  return Object.values(WOMENS_HEALTH_ENTRIES).filter(e =>
    e.id.toLowerCase().includes(q) ||
    e.name.toLowerCase().includes(q) ||
    e.description.toLowerCase().includes(q) ||
    e.keyPearls.some(p => p.toLowerCase().includes(q))
  );
}

/** Filter women's health entries by one or more categories. */
export function filterByCategory(categories: WomensHealthCategory[]): WomensHealthEntry[] {
  return Object.values(WOMENS_HEALTH_ENTRIES).filter(e => categories.includes(e.category));
}

/** Look up a single women's health entry by its id. */
export function getEntryById(id: string): WomensHealthEntry | undefined {
  return WOMENS_HEALTH_ENTRIES[id];
}

/** Get total count of women's health entries. */
export function getWomensHealthCount(): number {
  return Object.keys(WOMENS_HEALTH_ENTRIES).length;
}
