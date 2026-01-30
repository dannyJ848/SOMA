/**
 * Comprehensive Preventive Care Guidelines Database
 * 35+ evidence-based preventive care guidelines covering:
 * - Cancer screening, Cardiovascular, Metabolic, Immunizations
 * - Lifestyle counseling, Age-specific, Sex-specific, Risk assessment
 * Based on USPSTF grades and major medical society recommendations.
 */

export interface PreventiveGuidelineEntry {
  id: string;
  name: string;
  nameEs: string;
  category: 'screening' | 'immunization' | 'lifestyle' | 'risk-assessment' | 'age-specific' | 'sex-specific';
  targetPopulation: string;
  ageRange?: string;
  frequency: string;
  guidelineSource: string;
  evidence: 'A' | 'B' | 'C' | 'D' | 'I';
  whatItDetects: string;
  howItsDone: string;
  benefits: string[];
  risks: string[];
  costConsiderations: string;
  patientTip: string;
}

// Compact helper to build entries
function prev(
  id: string, name: string, nameEs: string,
  category: PreventiveGuidelineEntry['category'],
  targetPopulation: string, ageRange: string | undefined,
  frequency: string, guidelineSource: string,
  evidence: PreventiveGuidelineEntry['evidence'],
  whatItDetects: string, howItsDone: string,
  benefits: string[], risks: string[],
  costConsiderations: string, patientTip: string
): PreventiveGuidelineEntry {
  return { id, name, nameEs, category, targetPopulation, ageRange, frequency, guidelineSource, evidence, whatItDetects, howItsDone, benefits, risks, costConsiderations, patientTip };
}

const guidelinesArray: PreventiveGuidelineEntry[] = [
  // ========== CANCER SCREENING (8) ==========
  prev("colonoscopy-fit", "Colorectal Cancer Screening (Colonoscopy/FIT)", "Deteccion de cancer colorrectal (Colonoscopia/FIT)",
    "screening", "Average-risk adults", "45-75",
    "Colonoscopy every 10 years, or FIT annually, or FIT-DNA every 1-3 years",
    "USPSTF 2021", "A",
    "Colorectal cancer and precancerous polyps",
    "Colonoscopy uses a flexible scope to examine the entire colon; FIT detects hidden blood in stool samples collected at home.",
    ["Early detection of colorectal cancer at treatable stages", "Removal of precancerous polyps prevents cancer", "FIT offers a non-invasive alternative"],
    ["Colonoscopy: perforation risk (~1 in 1000), sedation complications, bleeding after polyp removal", "FIT: false positives leading to unnecessary colonoscopy"],
    "Colonoscopy costs $1,000-$3,000 but covered as preventive; FIT is low-cost ($20-$50). ACA-compliant plans cover without copay.",
    "If you choose FIT, do it every year without fail. A positive FIT always needs a follow-up colonoscopy."
  ),
  prev("mammography", "Breast Cancer Screening (Mammography)", "Deteccion de cancer de mama (Mamografia)",
    "screening", "Women at average risk", "40-74",
    "Every 2 years (USPSTF); annually starting at 40 (ACR/ACS)",
    "USPSTF 2024", "B",
    "Breast cancer including ductal carcinoma in situ (DCIS)",
    "Low-dose X-ray images of compressed breast tissue; 3D tomosynthesis increasingly standard.",
    ["Reduces breast cancer mortality by 20-30%", "Detects cancers before they are palpable", "Earlier stage at diagnosis improves treatment options"],
    ["False positives leading to additional imaging and biopsies", "Overdiagnosis of slow-growing cancers", "Radiation exposure (minimal)", "Anxiety from false alarms"],
    "Covered without copay under ACA. Digital mammography $150-$300; 3D tomosynthesis may have additional fees at some facilities.",
    "Schedule your mammogram at a time when breasts are least tender (1-2 weeks after your period). Avoid deodorant on the day of the exam."
  ),
  prev("pap-smear-hpv", "Cervical Cancer Screening (Pap Smear/HPV)", "Deteccion de cancer cervical (Papanicolaou/VPH)",
    "screening", "Women with a cervix", "21-65",
    "Pap every 3 years (21-29), Pap+HPV co-test every 5 years or primary HPV test every 5 years (30-65)",
    "USPSTF 2018", "A",
    "Cervical dysplasia, precancerous changes, and cervical cancer; HPV high-risk strains",
    "Pap smear: cells are gently scraped from the cervix during a pelvic exam. HPV test checks for high-risk HPV DNA from the same sample.",
    ["Dramatic reduction in cervical cancer incidence and mortality", "Detects precancerous changes years before cancer develops", "HPV testing identifies high-risk infections early"],
    ["False positives leading to unnecessary colposcopy", "Discomfort during the procedure", "Overtreatment of CIN1 lesions that may resolve naturally"],
    "Covered without copay as preventive service. Typical cost $20-$50 for Pap; $30-$100 for HPV co-test if not covered.",
    "Try to schedule when you are not menstruating. Avoid douching or vaginal products for 48 hours before the test."
  ),
  prev("ldct-lung-cancer", "Low-Dose CT Lung Cancer Screening", "Deteccion de cancer de pulmon por TC de baja dosis",
    "screening", "Adults with significant smoking history", "50-80",
    "Annually while meeting eligibility criteria",
    "USPSTF 2021", "B",
    "Early-stage lung cancer, including non-small cell and small cell lung cancer",
    "Low-dose CT scan of the chest without contrast; takes about 15 seconds of breath-holding. No IV or preparation needed.",
    ["Reduces lung cancer mortality by 20% in high-risk populations", "Detects lung cancer at earlier, more treatable stages", "Quick and painless procedure"],
    ["High false-positive rate (nodules requiring follow-up)", "Radiation exposure (low but cumulative)", "Incidental findings causing anxiety", "Overdiagnosis of indolent cancers"],
    "Covered without copay for eligible individuals (20+ pack-year history, current or quit within 15 years). CT scan $200-$500 if self-pay.",
    "You qualify if you have a 20+ pack-year smoking history and currently smoke or quit within 15 years. Ask your doctor about shared decision-making."
  ),
  prev("psa-discussion", "Prostate Cancer Screening (PSA Discussion)", "Deteccion de cancer de prostata (Discusion de PSA)",
    "screening", "Men considering prostate cancer screening", "55-69",
    "Shared decision-making; if elected, PSA every 1-2 years",
    "USPSTF 2018", "C",
    "Elevated PSA levels that may indicate prostate cancer, BPH, or prostatitis",
    "Simple blood test measuring prostate-specific antigen (PSA) level. No fasting or special preparation required.",
    ["May detect aggressive prostate cancer early", "Informed men can make personalized decisions", "Low-cost blood test"],
    ["High false-positive rate", "Overdiagnosis of indolent cancers", "Biopsy complications (infection, bleeding)", "Overtreatment side effects (incontinence, erectile dysfunction)"],
    "PSA blood test costs $20-$50. Follow-up biopsies and MRI can be expensive ($2,000-$5,000). Coverage varies by plan.",
    "This is a shared decision. Discuss your family history and values with your doctor before deciding. Black men and those with family history may benefit more."
  ),
  prev("skin-cancer-screening", "Skin Cancer Screening", "Deteccion de cancer de piel",
    "screening", "General population; high-risk individuals emphasized", undefined,
    "No USPSTF recommendation for general population; annual skin exam for high-risk individuals",
    "USPSTF 2023", "I",
    "Melanoma, basal cell carcinoma, squamous cell carcinoma, and precancerous lesions such as actinic keratoses",
    "Full-body visual skin examination by a dermatologist. Dermoscopy may be used for suspicious lesions.",
    ["Early melanoma detection dramatically improves survival", "Identifies precancerous lesions for treatment", "Non-invasive visual exam"],
    ["False positives leading to unnecessary biopsies", "Anxiety about benign lesions", "Potential scarring from biopsies"],
    "Dermatology visit $150-$300; biopsies $100-$500 additional. Preventive skin checks may not be covered by all plans.",
    "Use the ABCDE rule monthly at home: Asymmetry, Border irregularity, Color variation, Diameter >6mm, Evolving. Photograph moles to track changes."
  ),
  prev("hepatocellular-carcinoma", "Hepatocellular Carcinoma Screening", "Deteccion de carcinoma hepatocelular",
    "screening", "Adults with cirrhosis or chronic hepatitis B", undefined,
    "Ultrasound with or without AFP every 6 months",
    "AASLD 2023", "B",
    "Hepatocellular carcinoma (liver cancer) in high-risk populations with cirrhosis or chronic HBV",
    "Abdominal ultrasound to visualize the liver plus optional alpha-fetoprotein (AFP) blood test.",
    ["Detects liver cancer at an earlier, potentially curable stage", "Ultrasound is non-invasive and widely available", "Improves survival when tumors found early"],
    ["False positives requiring CT/MRI follow-up", "AFP has limited sensitivity alone", "Ultrasound quality depends on operator and body habitus"],
    "Abdominal ultrasound $200-$500; AFP blood test $20-$50. Typically covered for high-risk patients.",
    "If you have cirrhosis or chronic hepatitis B, do not skip your 6-month liver ultrasound. Early liver cancer can be cured."
  ),
  prev("cervical-cancer-updated", "Cervical Cancer Screening (Updated Guidelines)", "Deteccion de cancer cervical (Guias actualizadas)",
    "screening", "Women and individuals with a cervix", "25-65",
    "Primary HPV testing every 5 years preferred (ACS 2020); alternative: co-testing every 5 years or cytology every 3 years",
    "ACS 2020 / USPSTF 2018", "A",
    "High-risk HPV infection and cervical precancer (CIN2+); updated to emphasize primary HPV testing",
    "Primary HPV test collects cervical cells and tests for high-risk HPV types. If positive, reflex cytology is performed on the same sample.",
    ["Primary HPV testing is more sensitive than cytology alone", "Fewer screening visits needed (every 5 years)", "Better detection of CIN3+ lesions"],
    ["HPV-positive results can cause anxiety even when cytology is normal", "Requires follow-up algorithms for HPV-positive/cytology-negative results"],
    "HPV primary testing cost similar to co-testing ($30-$100). Covered as preventive care under ACA.",
    "If your doctor offers a primary HPV test starting at age 25, it is the most up-to-date approach. A positive HPV test does not mean you have cancer."
  ),

  // ========== CARDIOVASCULAR (4) ==========
  prev("lipid-panel", "Lipid Panel Screening", "Deteccion con panel de lipidos",
    "screening", "Adults at risk for cardiovascular disease", "20-75",
    "Every 5 years for low-risk adults; more frequently if risk factors present",
    "USPSTF 2023 / ACC/AHA 2018", "B",
    "Dyslipidemia including elevated LDL, low HDL, elevated triglycerides, and total cholesterol abnormalities",
    "Fasting or non-fasting blood draw measuring total cholesterol, LDL, HDL, and triglycerides.",
    ["Identifies individuals at risk for heart attack and stroke", "Guides statin therapy decisions", "Non-fasting lipid panels now accepted for screening"],
    ["Fasting requirement can be inconvenient (if ordered fasting)", "May lead to medication use with side effects", "Anxiety about results"],
    "Lipid panel costs $15-$50. Covered as preventive screening under ACA. Statins are inexpensive generics ($4-$15/month).",
    "You can get a non-fasting lipid panel for initial screening. If triglycerides are high, your doctor may request a fasting sample."
  ),
  prev("blood-pressure-monitoring", "Blood Pressure Monitoring", "Monitoreo de presion arterial",
    "screening", "All adults", "18+",
    "At every healthcare visit; annually for normal BP; more frequently if elevated",
    "USPSTF 2015 (reaffirmed 2023)", "A",
    "Hypertension (sustained BP >=130/80 mmHg) and elevated blood pressure",
    "Sphygmomanometer (manual or automated) measurement of systolic and diastolic blood pressure at rest. Confirm with ambulatory or home monitoring.",
    ["Hypertension is the leading modifiable risk factor for CV disease", "Treatment reduces stroke risk by 35-40%", "Simple, painless, and quick"],
    ["White coat hypertension may lead to unnecessary treatment", "Measurement variability between visits"],
    "BP checks are free at pharmacies and included in any office visit. Home monitors cost $30-$80 and are often covered by FSA/HSA.",
    "Rest 5 minutes before measurement. Use the right cuff size. Check at the same time daily if monitoring at home. No caffeine 30 minutes before."
  ),
  prev("ascvd-risk-calculator", "ASCVD Risk Calculator Assessment", "Evaluacion de riesgo cardiovascular ASCVD",
    "risk-assessment", "Adults without established cardiovascular disease", "40-75",
    "Every 4-6 years or when risk factors change",
    "ACC/AHA 2018", "B",
    "10-year and lifetime risk of atherosclerotic cardiovascular events (heart attack, stroke)",
    "Online calculator using age, sex, race, total cholesterol, HDL, systolic BP, BP treatment status, diabetes status, and smoking status.",
    ["Identifies individuals who benefit most from statin therapy", "Personalizes prevention strategy", "Guides shared decision-making for moderate-risk patients"],
    ["May overestimate risk in some populations", "Does not account for all risk factors (e.g., family history, CRP)", "Calculator limitations in diverse populations"],
    "The calculator itself is free. Results guide decisions about medications and lifestyle changes that have their own costs.",
    "Ask your doctor to calculate your 10-year ASCVD risk at your next visit. A score >=7.5% often warrants statin discussion."
  ),
  prev("aaa-screening", "Abdominal Aortic Aneurysm (AAA) Screening", "Deteccion de aneurisma de aorta abdominal",
    "screening", "Men who have ever smoked", "65-75",
    "One-time screening ultrasound",
    "USPSTF 2019", "B",
    "Abdominal aortic aneurysm (aorta diameter >=3 cm) which can rupture and cause fatal hemorrhage",
    "Abdominal ultrasound measuring the diameter of the aorta. Non-invasive, painless, and takes about 15 minutes.",
    ["Detects AAA before rupture, which has >80% mortality", "One-time screening is sufficient for most", "Allows elective surgical repair if large"],
    ["False positives and small aneurysms requiring surveillance", "Anxiety about incidental findings", "Potential overtreatment of small aneurysms"],
    "Covered once for eligible men aged 65-75 who have smoked. Ultrasound costs $200-$500 if self-pay.",
    "If you are a man aged 65-75 who has ever smoked, you qualify for this one-time screening. It could save your life."
  ),

  // ========== METABOLIC (3) ==========
  prev("diabetes-screening", "Diabetes Screening (A1c/FPG)", "Deteccion de diabetes (A1c/Glucosa en ayunas)",
    "screening", "Adults who are overweight or obese, or have risk factors", "35-70",
    "Every 3 years if results are normal; annually if prediabetes is detected",
    "USPSTF 2021", "B",
    "Type 2 diabetes mellitus and prediabetes (impaired fasting glucose or impaired glucose tolerance)",
    "Hemoglobin A1c blood test (no fasting required), fasting plasma glucose (FPG), or oral glucose tolerance test (OGTT).",
    ["Early detection allows lifestyle intervention to prevent or delay diabetes", "Identifies prediabetes when reversal is possible", "Reduces long-term complications"],
    ["Anxiety about diagnosis", "False sense of security with normal results if risk factors persist", "Potential overdiagnosis at borderline values"],
    "A1c costs $20-$50; FPG $10-$30. Covered as preventive screening. Diabetes management costs $1,000+/year if diagnosed.",
    "An A1c of 5.7-6.4% means prediabetes. Losing 5-7% of body weight and exercising 150 min/week can prevent progression to diabetes."
  ),
  prev("prediabetes-identification", "Prediabetes Identification and Intervention", "Identificacion de prediabetes e intervencion",
    "screening", "Adults with BMI >=25 (>=23 for Asian Americans) or other risk factors", "35-70",
    "Screen every 3 years; refer to intensive lifestyle intervention if positive",
    "USPSTF 2021 / CDC DPP", "B",
    "Prediabetes (A1c 5.7-6.4%, FPG 100-125 mg/dL) indicating high risk for type 2 diabetes progression",
    "Same tests as diabetes screening (A1c, FPG, or OGTT). Positive results trigger referral to Diabetes Prevention Program (DPP).",
    ["58% reduction in diabetes progression with lifestyle intervention", "DPP programs available nationwide", "Weight loss of 5-7% is the target"],
    ["Stigma associated with prediabetes label", "Program adherence can be challenging", "Insurance coverage for DPP varies"],
    "CDC-recognized DPP programs are covered by Medicare and many insurers. Programs cost $400-$800 if self-pay. Prevention saves $10,000+/year vs. diabetes.",
    "If diagnosed with prediabetes, ask about the CDC Diabetes Prevention Program. It is a year-long lifestyle change program proven to work."
  ),
  prev("obesity-screening-bmi", "Obesity Screening and BMI Assessment", "Deteccion de obesidad y evaluacion de IMC",
    "screening", "All adults", "18+",
    "BMI at every healthcare visit; intensive counseling referral if BMI >=30",
    "USPSTF 2018", "B",
    "Overweight (BMI 25-29.9) and obesity (BMI >=30) as risk factors for diabetes, CVD, and cancer",
    "BMI calculated from height and weight (kg/m^2). Waist circumference may be measured additionally. Clinical assessment of obesity-related comorbidities.",
    ["Identifies patients who benefit from intensive behavioral interventions", "Links to structured weight management programs", "Addresses a root cause of many chronic diseases"],
    ["BMI is an imperfect measure (does not distinguish muscle from fat)", "Weight stigma in healthcare settings", "Potential for disordered eating if approached poorly"],
    "BMI measurement is included in any visit. Intensive behavioral counseling programs covered under ACA. GLP-1 medications $500-$1,500/month if prescribed.",
    "BMI is one tool, not the whole picture. Discuss waist circumference and overall health with your doctor, not just the number on the scale."
  ),

  // ========== IMMUNIZATIONS (6) ==========
  prev("covid19-vaccine", "COVID-19 Vaccine Schedule", "Calendario de vacunacion COVID-19",
    "immunization", "All individuals aged 6 months and older", "6 months+",
    "Updated (bivalent/XBB) vaccine annually per CDC recommendations; additional doses for immunocompromised",
    "CDC/ACIP 2024", "A",
    "Prevents severe COVID-19 illness, hospitalization, and death from SARS-CoV-2 variants",
    "Intramuscular injection in the deltoid (upper arm) or anterolateral thigh for young children.",
    ["Reduces severe disease, hospitalization, and death", "Updated formulations target circulating variants", "Safe across age groups including pregnancy"],
    ["Injection site pain and swelling", "Fatigue, headache, fever for 1-2 days", "Rare myocarditis risk in young males (primarily after mRNA vaccines)"],
    "Free through most insurance plans and government programs. Available at pharmacies, clinics, and health departments.",
    "Get your updated COVID-19 vaccine annually, similar to the flu shot. You can receive it at the same visit as your flu vaccine."
  ),
  prev("influenza-annual", "Influenza (Flu) Annual Vaccination", "Vacunacion anual contra la influenza",
    "immunization", "All individuals aged 6 months and older", "6 months+",
    "Annually, ideally by end of October each year",
    "CDC/ACIP Annual", "A",
    "Prevents influenza A and B infection, reducing severity, complications, and transmission",
    "Intramuscular injection or intranasal spray (FluMist for ages 2-49). High-dose formulation available for adults 65+.",
    ["Reduces flu illness by 40-60% in matched seasons", "Prevents flu-related hospitalization and death", "Protects vulnerable contacts through community immunity"],
    ["Injection site soreness", "Low-grade fever and malaise for 1-2 days", "Rare allergic reactions", "Cannot cause the flu (inactivated vaccine)"],
    "Covered without copay by most insurance. Available at pharmacies for $0-$40. Free at many public health clinics.",
    "Get vaccinated every fall. It takes 2 weeks to build immunity. The vaccine cannot give you the flu."
  ),
  prev("tdap-td", "Tdap/Td Vaccination (Tetanus, Diphtheria, Pertussis)", "Vacunacion Tdap/Td (Tetano, Difteria, Tos ferina)",
    "immunization", "All adults; pregnant individuals each pregnancy", "11+",
    "Tdap once as adolescent/adult, then Td booster every 10 years; Tdap each pregnancy (27-36 weeks)",
    "CDC/ACIP 2020", "A",
    "Prevents tetanus (lockjaw), diphtheria, and pertussis (whooping cough)",
    "Intramuscular injection in the deltoid muscle. Tdap contains pertussis component; Td is tetanus-diphtheria only.",
    ["Tetanus prevention after wounds", "Protects newborns from pertussis via maternal vaccination", "Community protection against whooping cough outbreaks"],
    ["Injection site pain and redness", "Low-grade fever", "Rare Arthus reaction with frequent boosters"],
    "Covered without copay as routine immunization. $25-$75 if self-pay at pharmacy.",
    "If you have not had Tdap as an adult, get one dose, then Td every 10 years. Pregnant individuals should get Tdap in every pregnancy."
  ),
  prev("shingrix-shingles", "Shingrix (Shingles/Herpes Zoster) Vaccine", "Vacuna Shingrix (Herpes zoster/Culebrilla)",
    "immunization", "Adults aged 50+ and immunocompromised adults 19+", "50+",
    "Two-dose series (0 and 2-6 months apart); no booster currently recommended",
    "CDC/ACIP 2017", "A",
    "Prevents herpes zoster (shingles) reactivation and postherpetic neuralgia (PHN)",
    "Intramuscular injection given as a 2-dose series, 2-6 months apart. Recombinant adjuvanted vaccine (not live).",
    ["Over 90% effective at preventing shingles", "Reduces postherpetic neuralgia risk significantly", "Effective even in immunocompromised adults (non-live vaccine)"],
    ["Strong local reactions (pain, redness, swelling) in 78%", "Systemic reactions (fatigue, myalgia, headache) in 45%", "Reactions are short-lived (2-3 days)"],
    "Covered by Medicare Part D and most commercial plans. May have copay $0-$50 per dose. Self-pay ~$150-$200 per dose.",
    "The side effects can be strong for 2-3 days but are worth it. Shingles pain can last months to years. Complete both doses."
  ),
  prev("pneumococcal-vaccine", "Pneumococcal Vaccination (PCV20/PPSV23)", "Vacunacion neumococica (PCV20/PPSV23)",
    "immunization", "Adults 65+; younger adults with risk factors", "19+",
    "PCV20 single dose preferred; or PCV15 followed by PPSV23 (at least 1 year later)",
    "CDC/ACIP 2023", "A",
    "Prevents pneumococcal pneumonia, bacteremia, and meningitis caused by Streptococcus pneumoniae",
    "Intramuscular injection. PCV20 (Prevnar 20) is preferred as a single dose for most adults 65+.",
    ["Prevents life-threatening pneumococcal infections", "PCV20 simplifies the schedule to one dose", "Reduces pneumonia hospitalizations in older adults"],
    ["Injection site pain", "Fatigue and myalgia", "Rare severe allergic reactions"],
    "Covered without copay for recommended adults. PCV20 costs $250-$350 self-pay.",
    "If you are 65 or older and have never had a pneumococcal vaccine, PCV20 (one shot) is now the easiest option. Ask your pharmacist."
  ),
  prev("hpv-vaccine", "HPV Vaccine (Gardasil 9)", "Vacuna contra VPH (Gardasil 9)",
    "immunization", "Adolescents and young adults", "9-26",
    "2-dose series if started before age 15 (0 and 6-12 months); 3-dose series if started at 15-26 (0, 2, 6 months)",
    "CDC/ACIP 2019", "A",
    "Prevents HPV-related cancers: cervical, anal, oropharyngeal, penile, vulvar, and vaginal cancers, plus genital warts",
    "Intramuscular injection in the deltoid. Gardasil 9 covers 9 HPV types (6, 11, 16, 18, 31, 33, 45, 52, 58).",
    ["Prevents up to 90% of HPV-related cancers", "Nearly 100% effective if given before HPV exposure", "Prevents genital warts"],
    ["Injection site pain", "Brief syncope (fainting) in adolescents", "Headache and mild fever"],
    "Covered without copay for ages 9-26 under ACA. Shared clinical decision for ages 27-45 (may not be covered). ~$250 per dose self-pay.",
    "Best given at ages 11-12 before any HPV exposure. The vaccine prevents cancer. Both boys and girls should receive it."
  ),

  // ========== LIFESTYLE (4) ==========
  prev("physical-activity-guidelines", "Physical Activity Guidelines", "Guias de actividad fisica",
    "lifestyle", "All adults and children", "6+",
    "Counseling at each wellness visit; reassess goals annually",
    "HHS Physical Activity Guidelines 2018 / USPSTF", "B",
    "Physical inactivity as a risk factor for cardiovascular disease, diabetes, obesity, depression, and cancer",
    "Healthcare providers counsel patients on achieving 150 minutes/week of moderate-intensity or 75 minutes/week of vigorous-intensity aerobic activity, plus muscle-strengthening 2+ days/week.",
    ["Reduces all-cause mortality by 30-40%", "Lowers risk of 7+ types of cancer", "Improves mental health and cognitive function", "Prevents and manages chronic diseases"],
    ["Musculoskeletal injury if not progressed gradually", "Rare cardiac events during vigorous exercise in sedentary individuals"],
    "Walking is free. Gym memberships $10-$100/month. Some insurers offer fitness reimbursements (SilverSneakers, etc.).",
    "Start where you are. Even 10 minutes of walking counts. Build up gradually to 150 minutes per week. Every minute of movement matters."
  ),
  prev("nutrition-counseling", "Nutrition Counseling", "Consejeria nutricional",
    "lifestyle", "Adults with obesity, CVD risk factors, or diet-related conditions", "18+",
    "Intensive behavioral counseling with ongoing support; reassess at each visit",
    "USPSTF 2020 / Dietary Guidelines 2020-2025", "B",
    "Poor dietary patterns contributing to obesity, cardiovascular disease, type 2 diabetes, and certain cancers",
    "Individualized dietary assessment and counseling by a registered dietitian or trained provider. May include meal planning, food diary review, and behavioral strategies.",
    ["Improves cardiovascular risk factors", "Supports healthy weight management", "Reduces diabetes risk", "Evidence-based dietary patterns (Mediterranean, DASH) reduce mortality"],
    ["Dietary changes can be difficult to sustain", "Conflicting nutrition information can cause confusion", "Restrictive diets may trigger disordered eating"],
    "Medical nutrition therapy covered by Medicare for diabetes and kidney disease. Many insurers cover dietitian visits. Self-pay $100-$200/session.",
    "Focus on whole foods, vegetables, fruits, whole grains, and lean proteins. Small, sustainable changes beat drastic diets."
  ),
  prev("tobacco-cessation", "Tobacco Cessation Counseling", "Consejeria para dejar de fumar",
    "lifestyle", "All adults who use tobacco products", "18+",
    "Ask about tobacco at every visit; offer cessation interventions at each encounter",
    "USPSTF 2021", "A",
    "Tobacco use as the leading cause of preventable death (480,000 US deaths/year)",
    "Behavioral counseling (individual, group, or telephone quitline 1-800-QUIT-NOW) combined with FDA-approved pharmacotherapy (NRT, bupropion, or varenicline).",
    ["Quitting at any age reduces mortality risk", "Within 1 year, heart disease risk drops by 50%", "Combined counseling + medication doubles quit rates", "Lung cancer risk decreases over time"],
    ["Nicotine withdrawal symptoms (irritability, cravings, weight gain)", "Medication side effects (NRT: skin irritation; varenicline: vivid dreams; bupropion: insomnia)"],
    "Quitlines are free. ACA requires coverage of cessation medications and counseling without copay. NRT patches $25-$50/month.",
    "Call 1-800-QUIT-NOW for free support. Combining medication with counseling gives you the best chance. Most people try several times before quitting for good."
  ),
  prev("alcohol-use-screening", "Alcohol Use Screening (AUDIT-C)", "Deteccion de uso de alcohol (AUDIT-C)",
    "lifestyle", "All adults", "18+",
    "Screen annually or at every new patient visit; brief intervention if positive",
    "USPSTF 2018", "B",
    "Unhealthy alcohol use including risky drinking, alcohol use disorder, and binge drinking",
    "AUDIT-C is a 3-question validated screening tool assessing frequency, quantity, and binge episodes. Positive screens (>=3 women, >=4 men) trigger brief intervention.",
    ["Identifies at-risk drinkers before dependence develops", "Brief interventions reduce alcohol consumption by 15-30%", "Prevents alcohol-related liver disease, cancers, and injuries"],
    ["Stigma may prevent honest reporting", "False positives in social drinkers", "Brief interventions may not be sufficient for severe AUD"],
    "Screening is part of routine visits at no extra cost. Brief interventions take 5-15 minutes. Treatment programs vary widely in cost.",
    "Be honest with your doctor about alcohol use. The AUDIT-C is non-judgmental and helps identify if your drinking may be affecting your health."
  ),

  // ========== AGE-SPECIFIC (5) ==========
  prev("well-child-visits", "Well-Child Visit Schedule", "Calendario de consultas del nino sano",
    "age-specific", "Infants, children, and adolescents", "0-21",
    "Newborn (3-5 days), 1, 2, 4, 6, 9, 12, 15, 18, 24, 30 months; then annually ages 3-21",
    "AAP Bright Futures 2024", "A",
    "Developmental delays, growth abnormalities, behavioral concerns, and vaccine-preventable diseases",
    "Comprehensive visit including growth measurements, developmental screening (ASQ), physical exam, immunizations, and anticipatory guidance for parents.",
    ["Early detection of developmental delays", "On-time vaccinations prevent serious diseases", "Parental education on safety and nutrition", "Vision and hearing screening at key ages"],
    ["Parental anxiety about developmental milestones", "Vaccine hesitancy concerns", "Time and transportation barriers for frequent visits"],
    "Covered without copay under ACA and Medicaid/CHIP. Typical visit costs $150-$300 if uninsured.",
    "Keep every well-child appointment even if your child seems healthy. These visits catch problems early and keep vaccinations on track."
  ),
  prev("adolescent-screening", "Adolescent Preventive Screening", "Deteccion preventiva del adolescente",
    "age-specific", "Adolescents and young adults", "11-21",
    "Annual wellness visit with age-appropriate screenings",
    "AAP / USPSTF / ACIP", "B",
    "Depression, substance use, STIs, risky behaviors, eating disorders, and vaccine-preventable diseases in adolescents",
    "Annual visit including PHQ-A for depression, CRAFFT for substance use, STI screening if sexually active, BMI assessment, HPV/meningococcal vaccines, and confidential health interview.",
    ["Identifies mental health issues during peak onset period", "Prevents STIs and unintended pregnancy", "Completes HPV and meningococcal vaccine series", "Builds independent healthcare skills"],
    ["Adolescents may not disclose risky behaviors", "Confidentiality concerns with parents", "Stigma around mental health and sexual health screening"],
    "Annual wellness visit covered without copay. STI testing and vaccines covered as preventive services under ACA.",
    "Adolescents deserve confidential time with their doctor. Encourage teens to ask questions and build a relationship with their healthcare provider."
  ),
  prev("adult-preventive-visit", "Adult Preventive Visit (Annual Wellness)", "Consulta preventiva del adulto",
    "age-specific", "All adults", "18-64",
    "Annual wellness visit; specific screenings vary by age and risk factors",
    "USPSTF / ACP / AHA", "B",
    "Age-appropriate screening for cardiovascular disease, cancer, metabolic conditions, mental health, and immunization status",
    "Comprehensive visit including vital signs, BMI, age-appropriate cancer screenings, lipid panel, glucose screening, immunization review, depression screening, and lifestyle counseling.",
    ["Centralized opportunity for all recommended screenings", "Updates immunizations", "Addresses preventive care gaps", "Establishes longitudinal care relationship"],
    ["Potential for unnecessary testing if guidelines not followed", "Patient time and copay barriers", "May generate anxiety about screening results"],
    "Annual preventive visit covered without copay under ACA. Additional tests ordered may have separate costs depending on insurance.",
    "Make an annual wellness visit even when you feel fine. Bring a list of your medications, family history updates, and any health questions."
  ),
  prev("medicare-wellness-visit", "Medicare Annual Wellness Visit (AWV)", "Visita anual de bienestar de Medicare",
    "age-specific", "Medicare beneficiaries", "65+",
    "Initial Welcome to Medicare visit within first 12 months; Annual Wellness Visit every year after",
    "CMS / Medicare 2024", "A",
    "Personalized prevention plan addressing cognitive decline, fall risk, depression, functional status, and advance care planning",
    "Health risk assessment questionnaire, review of medical/family history, cognitive assessment, functional ability assessment, fall risk screening, depression screening, and creation of a personalized prevention plan.",
    ["Covered at no cost to Medicare beneficiaries", "Personalized prevention plan updated annually", "Cognitive impairment detected early", "Advance care planning discussion included"],
    ["Does not replace a full physical exam (separate billable visit)", "Patients may confuse AWV with a comprehensive physical", "Cognitive screening may cause anxiety"],
    "Covered at $0 under Medicare Part B (no deductible or copay). Additional tests or referrals ordered may have separate costs.",
    "The Medicare AWV is free and different from a physical exam. Use it to create your annual prevention plan and update your advance directives."
  ),
  prev("geriatric-screening", "Geriatric Screening (Falls, Cognition, Function)", "Deteccion geriatrica (Caidas, Cognicion, Funcion)",
    "age-specific", "Older adults", "65+",
    "Annual falls assessment; cognitive screening at AWV; functional status review at each visit",
    "USPSTF 2018 / AGS 2024", "B",
    "Fall risk, cognitive impairment (MCI and dementia), functional decline, polypharmacy risks, and sensory deficits",
    "Falls: Timed Up and Go test, fall history, medication review. Cognition: Mini-Cog, MoCA, or MMSE. Function: ADL/IADL assessment. Medication reconciliation.",
    ["Falls are the leading cause of injury death in older adults", "Early cognitive impairment detection enables planning", "Medication review reduces polypharmacy adverse events", "Maintains independence longer"],
    ["Cognitive screening may cause distress", "False positives in educated or multilingual patients", "Screening without effective treatment for dementia raises ethical concerns"],
    "Screening is included in Medicare AWV. PT for falls prevention covered by Medicare. Cognitive evaluations may require specialist referral.",
    "Tell your doctor about any falls, even if you were not hurt. Ask for a medication review at every visit. Stay active to maintain balance and strength."
  ),

  // ========== SEX-SPECIFIC (3) ==========
  prev("osteoporosis-dexa", "Osteoporosis Screening (DEXA Scan)", "Deteccion de osteoporosis (Densitometria DEXA)",
    "sex-specific", "Women 65+; postmenopausal women under 65 with risk factors; men 70+ or with risk factors", "50+",
    "DEXA scan at age 65 for women (earlier if risk factors); repeat every 2 years if osteopenia; men 70+",
    "USPSTF 2018", "B",
    "Osteoporosis (T-score <=-2.5) and osteopenia (T-score -1.0 to -2.5) predicting fracture risk",
    "Dual-energy X-ray absorptiometry (DEXA) scan of the hip and lumbar spine. Painless, non-invasive, takes 10-15 minutes. Minimal radiation.",
    ["Identifies individuals at high fracture risk", "Guides pharmacologic treatment decisions", "FRAX calculator integrates DEXA with clinical risk factors"],
    ["Overdiagnosis of osteopenia in low-risk individuals", "Medication side effects (bisphosphonates: GI upset, rare jaw osteonecrosis)", "Radiation exposure (very low)"],
    "DEXA scan $100-$300; covered by Medicare every 2 years for women 65+. ACA covers for eligible women. Men may need prior authorization.",
    "Get your DEXA scan at 65 (earlier if you have risk factors like family history, smoking, or steroid use). Take calcium and vitamin D as recommended."
  ),
  prev("preconception-counseling", "Preconception Counseling", "Consejeria preconcepcional",
    "sex-specific", "Women and couples planning pregnancy", "15-44",
    "At least one visit 3-6 months before planned conception; ongoing as needed",
    "ACOG 2019 / CDC", "B",
    "Modifiable risk factors for adverse pregnancy outcomes including neural tube defects, gestational diabetes, and medication teratogenicity",
    "Comprehensive review of medical history, medications, immunizations, genetic carrier screening, folic acid supplementation, substance use, and chronic disease optimization.",
    ["Folic acid reduces neural tube defects by 50-70%", "Optimizes chronic disease management before pregnancy", "Identifies teratogenic medications for substitution", "Genetic carrier screening informs reproductive decisions"],
    ["Anxiety about identified risks", "Financial burden of genetic testing", "May delay desired pregnancy for medical optimization"],
    "Preconception visit often covered as preventive care. Genetic screening $100-$2,000 depending on scope. Folic acid supplements cost $5-$15/month.",
    "Start folic acid 400-800 mcg daily at least 1 month before conception. Review all medications with your doctor before becoming pregnant."
  ),
  prev("sti-screening", "STI Screening Guidelines", "Guias de deteccion de infecciones de transmision sexual",
    "sex-specific", "Sexually active individuals based on age, sex, and risk factors", "15-65",
    "Chlamydia/gonorrhea annually for women <25 and at-risk; HIV at least once for all 15-65; syphilis and hepatitis B/C per risk",
    "USPSTF 2023 / CDC 2021", "A",
    "Sexually transmitted infections: chlamydia, gonorrhea, syphilis, HIV, hepatitis B, hepatitis C, and trichomonas",
    "Nucleic acid amplification test (NAAT) for chlamydia/gonorrhea (urine or swab). Blood tests for HIV, syphilis, hepatitis B/C. Site-specific testing for extragenital infections.",
    ["Chlamydia/gonorrhea treatment prevents PID and infertility", "HIV early detection enables treatment and prevents transmission (U=U)", "Syphilis screening prevents congenital syphilis", "Hepatitis C is now curable"],
    ["Stigma and embarrassment may prevent screening", "False positives causing relationship distress", "Partner notification can be stressful"],
    "STI screening covered without copay under ACA. Rapid HIV tests available free at many community organizations. Self-pay STI panels $50-$300.",
    "STI screening is a normal part of healthcare. Ask your doctor which tests you need based on your sexual history. Many STIs have no symptoms."
  ),

  // ========== RISK ASSESSMENT (2) ==========
  prev("depression-screening-phq9", "Depression Screening (PHQ-9)", "Deteccion de depresion (PHQ-9)",
    "risk-assessment", "All adults; adolescents aged 12+", "12+",
    "Annually or at each primary care visit; repeat if symptoms or risk factors",
    "USPSTF 2016 (reaffirmed 2023)", "B",
    "Major depressive disorder, persistent depressive disorder, and suicidal ideation",
    "PHQ-9 is a 9-item self-administered questionnaire scoring 0-27. PHQ-2 (first 2 questions) used as initial screen; if positive (>=3), complete full PHQ-9.",
    ["Depression is the leading cause of disability worldwide", "Screening enables early treatment improving outcomes", "Validated tool with high sensitivity and specificity", "Tracks treatment response over time"],
    ["False positives may lead to unnecessary treatment", "Screening without adequate treatment resources is ineffective", "Cultural factors may affect responses"],
    "PHQ-9 screening is free and included in wellness visits. Depression treatment varies: therapy $100-$250/session; generic SSRIs $4-$15/month.",
    "Be honest on the questionnaire. A high score is not a diagnosis but a reason to talk further with your doctor. Depression is treatable."
  ),
  prev("ipv-screening", "Intimate Partner Violence (IPV) Screening", "Deteccion de violencia de pareja",
    "risk-assessment", "Women of reproductive age; all patients in appropriate clinical settings", "14-46",
    "At each new patient visit, annually, and during prenatal care",
    "USPSTF 2018", "B",
    "Physical, sexual, or psychological violence by a current or former intimate partner; reproductive coercion",
    "Validated screening tools (HITS, HARK, STaT, or direct questions) administered privately without partner present. Universal screening approach preferred over selective screening.",
    ["Connects victims to safety resources and advocacy services", "Identifies abuse before escalation", "Prenatal screening protects mother and fetus", "Brief interventions improve safety behaviors"],
    ["Screening without available resources may be harmful", "Patient may not disclose due to fear or shame", "Provider discomfort with topic may lead to inadequate follow-up"],
    "Screening is included in preventive visits at no extra cost. National Domestic Violence Hotline (1-800-799-7233) is free. Advocacy services vary by community.",
    "You deserve to feel safe. If someone is hurting you, help is available 24/7 at 1-800-799-7233 or text START to 88788. Conversations with your doctor are confidential."
  ),
];

export const PREVENTIVE_GUIDELINES: Record<string, PreventiveGuidelineEntry> = Object.fromEntries(
  guidelinesArray.map(g => [g.id, g])
);
