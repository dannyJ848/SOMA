/**
 * Medication Education Database
 *
 * Comprehensive patient education about medications.
 * The goal: Every patient understands WHY they take each medication,
 * HOW it works in their body, and WHAT to watch for.
 */

import type { MedicationEducation } from './types.js';

// =============================================================================
// METFORMIN - The Foundation Diabetes Medication
// =============================================================================

const METFORMIN_EDUCATION: MedicationEducation = {
  id: 'metformin',
  genericName: 'Metformin',
  brandNames: ['Glucophage', 'Glucophage XR', 'Fortamet', 'Glumetza', 'Riomet'],
  drugClass: 'Biguanide',

  whyTakingThis: {
    purpose: {
      simple: 'Metformin helps lower your blood sugar in type 2 diabetes. It\'s often the first medication prescribed because it works well, is safe, and has been used for over 60 years.',
      detailed: 'Metformin is the first-line medication for type 2 diabetes because it effectively lowers blood sugar through multiple mechanisms. It reduces the amount of sugar your liver makes and helps your body use insulin more effectively. It does NOT cause low blood sugar when used alone.',
      comprehensive: 'Metformin is a biguanide antihyperglycemic that primarily inhibits hepatic gluconeogenesis through activation of AMP-activated protein kinase (AMPK). Secondary mechanisms include improved peripheral insulin sensitivity, reduced intestinal glucose absorption, and favorable effects on the gut microbiome. It reduces HbA1c by approximately 1-1.5% and has demonstrated cardiovascular mortality benefit in the UKPDS trial.',
      analogy: 'Think of your liver as a sugar factory that runs 24/7 in diabetes, even when you don\'t need the sugar. Metformin tells the factory to slow down production, so less sugar enters your bloodstream.',
      visualMetaphor: 'A factory with a dial being turned down from high to normal production',
    },

    whyThisOne: 'Metformin is recommended as the first diabetes medication for most people because: (1) It\'s highly effective at lowering blood sugar, (2) It doesn\'t cause low blood sugar when used alone, (3) It doesn\'t cause weight gain - may even help you lose a little weight, (4) It has a 60+ year safety record, (5) It may protect your heart, (6) It\'s very affordable.',

    consequenceOfNotTaking: {
      simple: 'Without metformin, your blood sugar will likely be higher, which can make you feel tired and increase your risk of diabetes complications over time.',
      detailed: 'If you stop metformin without a replacement, your liver will produce more glucose than needed, and your cells won\'t use insulin as effectively. Your HbA1c will likely increase, accelerating the blood vessel and nerve damage that causes diabetes complications. You may also notice symptoms of high blood sugar: increased thirst, frequent urination, and fatigue.',
      comprehensive: 'Discontinuation leads to rebound hyperglycemia from unregulated hepatic gluconeogenesis and worsened insulin resistance. Studies show HbA1c increases by 1-1.5% within 3-6 months of stopping metformin. This accelerates the pathophysiology of micro- and macrovascular complications. Additionally, you lose the potential cardiovascular mortality benefit demonstrated in the UKPDS metformin arm.',
    },

    missedDoseConsequence: 'Missing one dose occasionally isn\'t dangerous - your blood sugar may be slightly higher that day. However, missing doses regularly will significantly reduce the medication\'s effectiveness. Don\'t double up to make up for a missed dose.',
  },

  howItWorks: {
    mechanism: {
      simple: 'Metformin works mainly by telling your liver to make less sugar. Your liver can make sugar (even when you haven\'t eaten), and in diabetes, it makes too much. Metformin helps fix this.',
      detailed: 'Metformin has three main actions: (1) It reduces glucose production by the liver - your liver normally makes sugar between meals, but in diabetes it makes too much. Metformin reduces this by about 30%. (2) It improves insulin sensitivity - your cells respond better to insulin. (3) It slightly reduces sugar absorption from food in your intestines.',
      comprehensive: 'Metformin primarily inhibits hepatic gluconeogenesis through AMPK activation, reducing mitochondrial Complex I activity and altering the AMP:ATP ratio. This suppresses transcription of gluconeogenic enzymes (PEPCK, G6Pase). AMPK activation also improves insulin signaling in skeletal muscle (increased GLUT4 translocation) and reduces lipid synthesis. Recent research suggests gut-mediated mechanisms including GLP-1 secretion stimulation and microbiome modulation contribute to its effects. It does NOT stimulate insulin secretion.',
    },

    whereItActs: [
      {
        areaName: 'Liver',
        structureId: 'liver',
        howAffected: {
          simple: 'The liver makes sugar even when you haven\'t eaten. Metformin tells it to make less.',
          detailed: 'Your liver produces glucose through gluconeogenesis (making new glucose) and glycogenolysis (releasing stored glucose). In type 2 diabetes, the liver doesn\'t respond normally to insulin\'s signal to stop producing glucose. Metformin activates cellular energy sensors that reduce this glucose production.',
          comprehensive: 'Metformin concentrates in hepatocytes via OCT1 transporters. It inhibits mitochondrial Complex I, increasing the AMP:ATP ratio and activating AMPK. This leads to: 1) Suppression of CREB-CRTC2 transcriptional activity, reducing PEPCK and G6Pase expression, 2) Reduced acetyl-CoA carboxylase activity, decreasing lipogenesis, 3) Enhanced fatty acid oxidation. The net effect is a ~30% reduction in hepatic glucose output.',
        },
        relatedSymptoms: ['Lower fasting blood sugar', 'Better morning blood sugars'],
      },
      {
        areaName: 'Muscles',
        structureId: 'skeletal-muscle',
        howAffected: {
          simple: 'Muscles need sugar for energy, but in diabetes, they have trouble taking it in. Metformin helps muscles use insulin better to take in sugar.',
          detailed: 'Skeletal muscle is responsible for about 70-80% of glucose uptake after a meal. In type 2 diabetes, insulin resistance in muscles means they don\'t take up glucose efficiently. Metformin improves the signaling pathway that insulin uses to tell muscles to take up glucose.',
          comprehensive: 'Metformin improves skeletal muscle insulin sensitivity through AMPK-mediated enhancement of insulin signaling. AMPK activation increases GLUT4 translocation to the cell membrane, facilitating glucose uptake. Additionally, AMPK promotes mitochondrial biogenesis and fatty acid oxidation, reducing intramyocellular lipid accumulation that contributes to insulin resistance.',
        },
        relatedSymptoms: ['Better blood sugar control after meals', 'May improve exercise tolerance'],
      },
      {
        areaName: 'Intestines',
        structureId: 'small-intestine',
        howAffected: {
          simple: 'Metformin slightly slows how much sugar your gut absorbs from food.',
          detailed: 'Metformin may slightly reduce glucose absorption in the small intestine and affects the gut microbiome in ways that improve glucose metabolism. Some of the GI side effects (nausea, diarrhea) are thought to come from these gut effects.',
          comprehensive: 'Intestinal effects of metformin include: 1) Reduced glucose absorption, 2) Increased glucose utilization by enterocytes, 3) Enhanced GLP-1 secretion from L-cells, 4) Modulation of the gut microbiome - increased Akkermansia muciniphila and short-chain fatty acid-producing bacteria. These gut-based mechanisms may account for much of metformin\'s glucose-lowering effect.',
        },
        relatedSymptoms: ['GI side effects (nausea, diarrhea) - usually improve with time'],
      },
    ],

    timeToEffect: {
      whenYouMightFeel: 'Most people don\'t "feel" metformin working in terms of energy or symptoms. You\'ll know it\'s working by checking your blood sugar. Some people notice reduced appetite.',
      whenFullEffect: 'Blood sugar improvement begins within days, but the full effect takes about 2-3 weeks. Maximum benefit on HbA1c is seen after 2-3 months of consistent use.',
      bePatient: 'Give metformin time to work. If you don\'t see improvement after 3 months of consistent use at full dose, talk to your doctor about adjustments.',
    },

    signsItsWorking: [
      'Lower fasting blood sugar (morning numbers)',
      'Lower HbA1c at your next blood test',
      'Blood sugar doesn\'t spike as high after meals',
      'Possibly feeling more energetic (from better blood sugar control)',
      'Stable or slight decrease in weight',
    ],
  },

  howToTake: {
    dosing: 'Usually starts at 500mg once or twice daily, gradually increased to 1000mg twice daily (2000mg total) as tolerated. Maximum dose is typically 2550mg/day for immediate-release or 2000mg/day for extended-release.',

    timing: {
      whenToTake: 'Immediate-release (regular metformin): Take with meals, usually with breakfast and dinner. Extended-release (Glucophage XR, etc.): Take once daily with evening meal.',
      whyThisTiming: 'Taking with food reduces GI side effects significantly. Evening dosing of extended-release provides better overnight and morning blood sugar control.',
      withOrWithoutFood: 'ALWAYS take with food. Taking on an empty stomach significantly increases nausea and stomach upset.',
      foodReason: 'Food slows absorption and reduces peak drug levels in the gut, dramatically reducing GI side effects. The medication works just as well when taken with food.',
    },

    missedDose: 'If you miss a dose, take it as soon as you remember with food. If it\'s almost time for your next dose, skip the missed dose and continue your regular schedule. Do NOT double dose.',

    storage: 'Store at room temperature, away from moisture and heat. Keep in original container. No refrigeration needed.',

    specialInstructions: [
      'Start at a low dose and increase gradually to minimize GI side effects',
      'Stay well hydrated',
      'Your doctor may temporarily stop metformin before procedures requiring IV contrast dye',
      'Tell your doctor if you\'re having surgery or any procedure with anesthesia',
      'Avoid excessive alcohol (increases risk of lactic acidosis)',
    ],
  },

  sideEffects: {
    common: [
      {
        effect: 'Nausea',
        frequency: 'common',
        whatItFeelsLike: 'Mild queasiness, especially when starting the medication or increasing the dose',
        whyItHappens: 'Metformin affects the gut and changes how glucose is absorbed. The gut needs time to adapt.',
        whenToWorry: 'If nausea is severe, prevents eating, causes vomiting, or doesn\'t improve after a few weeks',
        urgency: 'mention-at-next-visit',
      },
      {
        effect: 'Diarrhea',
        frequency: 'common',
        whatItFeelsLike: 'Loose stools, sometimes urgent, typically worse early in treatment',
        whyItHappens: 'Unabsorbed metformin in the gut draws water into the intestines. The gut microbiome is also changing.',
        whenToWorry: 'If severe, causes dehydration, has blood, or doesn\'t improve after several weeks',
        urgency: 'call-doctor-today',
      },
      {
        effect: 'Stomach upset/cramping',
        frequency: 'common',
        whatItFeelsLike: 'Mild abdominal discomfort, bloating, gas',
        whyItHappens: 'GI tract adjustment to the medication and its effects on glucose metabolism',
        whenToWorry: 'If severe or doesn\'t improve, especially if you have sharp pain',
        urgency: 'mention-at-next-visit',
      },
      {
        effect: 'Metallic taste',
        frequency: 'common',
        whatItFeelsLike: 'Unpleasant metallic or bitter taste in mouth',
        whyItHappens: 'Not fully understood, may relate to drug excretion in saliva',
        whenToWorry: 'Usually not concerning, but mention if it affects your eating',
        urgency: 'informational',
      },
    ],

    lessCommon: [
      {
        effect: 'Vitamin B12 deficiency',
        frequency: 'uncommon',
        whatItFeelsLike: 'May cause no symptoms for years, then fatigue, weakness, numbness/tingling, memory problems',
        whyItHappens: 'Metformin interferes with B12 absorption in the ileum. Develops slowly over years.',
        whenToWorry: 'Important to have B12 levels checked periodically, especially after years of use or if you have neuropathy symptoms',
        urgency: 'schedule-soon',
      },
      {
        effect: 'Reduced appetite',
        frequency: 'uncommon',
        whatItFeelsLike: 'Less hunger than usual, feeling full quickly',
        whyItHappens: 'GLP-1 effects and gut changes reduce appetite. Often considered a benefit for weight management.',
        whenToWorry: 'Only if extreme or causing significant weight loss you don\'t want',
        urgency: 'informational',
      },
    ],

    serious: [
      {
        effect: 'Lactic acidosis',
        frequency: 'very-rare',
        whatItFeelsLike: 'Unusual muscle pain, unusual weakness/tiredness, trouble breathing, unusual/unexpected stomach discomfort, feeling cold, dizziness/lightheadedness, suddenly slow or irregular heartbeat',
        whyItHappens: 'Very rare. Occurs when metformin accumulates (usually due to kidney failure) and causes lactic acid buildup. More likely with dehydration, heavy alcohol, kidney problems, or liver problems.',
        whenToWorry: 'These symptoms together are a medical emergency',
        urgency: 'emergency-911',
      },
      {
        effect: 'Hypoglycemia (low blood sugar)',
        frequency: 'very-rare',
        whatItFeelsLike: 'Shakiness, sweating, confusion, rapid heartbeat, irritability, hunger',
        whyItHappens: 'Metformin alone very rarely causes hypoglycemia. Risk increases when combined with insulin or sulfonylureas, or when not eating.',
        whenToWorry: 'If symptoms occur, especially if severe or you can\'t treat yourself',
        urgency: 'go-to-er-now',
      },
    ],

    managementTips: [
      {
        effect: 'GI side effects (nausea, diarrhea)',
        howToManage: [
          'Always take with food - this is the most important tip',
          'Start at low dose and increase slowly (500mg increase every 1-2 weeks)',
          'Try extended-release (XR) version - much gentler on stomach',
          'Take with your largest meal of the day',
          'Avoid high-fat meals right after taking metformin',
          'Give it time - most GI effects improve after 2-4 weeks',
        ],
        whenToCallDoctor: 'If GI side effects are severe, causing dehydration, or not improving after a month',
      },
      {
        effect: 'Metallic taste',
        howToManage: [
          'Use sugar-free mints or gum',
          'Brush teeth more frequently',
          'Stay well hydrated',
          'Usually diminishes over time',
        ],
        whenToCallDoctor: 'If affecting nutrition or quality of life significantly',
      },
      {
        effect: 'B12 deficiency prevention',
        howToManage: [
          'Eat B12-rich foods (meat, fish, eggs, dairy) or take a supplement',
          'Get B12 levels checked every 1-2 years',
          'Consider a B12 supplement, especially if vegetarian/vegan',
        ],
        whenToCallDoctor: 'If you develop numbness/tingling (could be B12 deficiency or diabetic neuropathy - need to differentiate)',
      },
    ],

    whenTheyImprove: 'Most GI side effects improve significantly within 2-4 weeks of starting or increasing the dose. Starting low and going slow helps prevent them. Extended-release formulations are much better tolerated. If side effects persist beyond 4-6 weeks, talk to your doctor about alternatives.',
  },

  interactions: {
    drugInteractions: [
      {
        otherMedication: 'Insulin or sulfonylureas (glipizide, glyburide)',
        whatHappens: 'Increased risk of low blood sugar (hypoglycemia) when combined',
        severity: 'moderate',
        whatToDo: 'Monitor blood sugar more closely. Know hypoglycemia symptoms. May need dose adjustments.',
      },
      {
        otherMedication: 'IV contrast dye (for CT scans, heart catheterization)',
        whatHappens: 'Rare risk of kidney damage plus lactic acidosis if metformin is continued',
        severity: 'major',
        whatToDo: 'Your doctor will likely stop metformin before the procedure and restart 48 hours after, once kidney function is confirmed okay.',
      },
      {
        otherMedication: 'Excessive alcohol',
        whatHappens: 'Increases risk of lactic acidosis. Both alcohol and metformin affect lactate metabolism.',
        severity: 'moderate',
        whatToDo: 'Limit alcohol. Avoid binge drinking. Occasional moderate alcohol is usually okay.',
      },
      {
        otherMedication: 'Carbonic anhydrase inhibitors (topiramate, zonisamide, acetazolamide)',
        whatHappens: 'May increase risk of lactic acidosis',
        severity: 'moderate',
        whatToDo: 'Can usually be used together with monitoring. Let your doctor know.',
      },
      {
        otherMedication: 'Cimetidine (Tagamet)',
        whatHappens: 'Increases metformin levels by reducing kidney excretion',
        severity: 'minor',
        whatToDo: 'Usually not a problem. Other acid reducers (omeprazole, famotidine) don\'t have this interaction.',
      },
    ],

    foodInteractions: [
      {
        food: 'High-fat meals',
        whatHappens: 'May increase GI side effects when taken right after high-fat meals',
        recommendation: 'You can still eat fats, but try taking metformin with your most balanced meal rather than a very fatty one.',
      },
      {
        food: 'Grapefruit',
        whatHappens: 'No significant interaction with metformin (unlike many other medications)',
        recommendation: 'Safe to eat grapefruit while taking metformin.',
      },
    ],

    supplementInteractions: [
      {
        substance: 'Vitamin B12',
        whatHappens: 'Metformin reduces B12 absorption - a supplement can help prevent deficiency',
        recommendation: 'Consider a B12 supplement, especially after years of metformin use.',
      },
      {
        substance: 'Fiber supplements',
        whatHappens: 'May reduce metformin absorption if taken at the same time',
        recommendation: 'Take fiber supplements at least 2 hours apart from metformin.',
      },
    ],

    alcoholInteraction: 'Occasional moderate alcohol (1 drink for women, 2 for men) is generally okay with metformin. However, heavy drinking or binge drinking increases the risk of lactic acidosis and low blood sugar. Alcohol also lowers blood sugar, so be careful.',

    activityPrecautions: [
      'No specific activity restrictions',
      'If you exercise intensely, monitor for low blood sugar (though rare with metformin alone)',
      'Stay well hydrated, especially in hot weather',
      'Tell surgeons and anesthesiologists you take metformin',
    ],
  },

  monitoring: {
    labTests: [
      {
        testName: 'Kidney function (creatinine/eGFR)',
        whyNeeded: 'Metformin is removed by the kidneys. If kidneys aren\'t working well, metformin can accumulate and increase lactic acidosis risk.',
        howOften: 'At least yearly. More often if you have kidney problems or are at risk.',
        whatResultsMean: 'eGFR should be >30 to continue metformin. If 30-45, dose may be reduced. If <30, metformin usually stopped.',
      },
      {
        testName: 'Vitamin B12 level',
        whyNeeded: 'Metformin can cause B12 deficiency over time, which causes anemia and nerve problems.',
        howOften: 'Every 2-3 years, or if you have symptoms of deficiency (fatigue, numbness/tingling).',
        whatResultsMean: 'If low, you\'ll need B12 supplementation. Important to distinguish from diabetic neuropathy.',
      },
      {
        testName: 'HbA1c',
        whyNeeded: 'To see if metformin is controlling your blood sugar adequately.',
        howOften: 'Every 3-6 months.',
        whatResultsMean: 'Goal is usually <7% for most adults. If not at goal, may need dose increase or additional medications.',
      },
    ],

    symptomsToTrack: [
      'Blood sugar levels (as recommended by your doctor)',
      'GI symptoms (should improve over time)',
      'Any unusual fatigue or weakness',
      'Numbness or tingling (could be B12 deficiency or diabetic neuropathy)',
    ],

    followUpSchedule: 'Typically see your doctor every 3-6 months when on metformin for diabetes. May be more frequent when starting or adjusting dose.',
  },

  questionsToAsk: [
    {
      question: 'Should I take the regular or extended-release version?',
      whyAsk: 'Extended-release (XR) causes fewer GI side effects and can be taken once daily.',
      whatAnswerMeans: 'Either can work. XR is often preferred for tolerability.',
      followUpQuestions: ['If I have GI side effects with regular metformin, can we switch to XR?'],
    },
    {
      question: 'What\'s my target dose, and how will we get there?',
      whyAsk: 'Starting low and increasing slowly minimizes side effects.',
      whatAnswerMeans: 'Usually aiming for 1500-2000mg daily, increased by 500mg every 1-2 weeks.',
      followUpQuestions: ['How long should I stay at each dose before increasing?'],
    },
    {
      question: 'Do I need to check my blood sugar at home, and how often?',
      whyAsk: 'Monitoring needs vary. Metformin alone rarely causes low blood sugar, so intensive monitoring may not be needed.',
      whatAnswerMeans: 'Depends on your overall treatment plan. May range from "not needed" to several times daily.',
      followUpQuestions: ['What numbers should concern me?'],
    },
    {
      question: 'What should I do if I have a procedure or surgery coming up?',
      whyAsk: 'Metformin may need to be temporarily stopped for procedures with contrast dye or major surgery.',
      whatAnswerMeans: 'Doctor will provide specific instructions based on the procedure.',
      followUpQuestions: ['How soon before and after the procedure should I stop/restart?'],
    },
  ],

  stoppingMedication: {
    canStopSuddenly: true,
    whyNotStopSuddenly: undefined,
    howToStop: 'Metformin can be stopped abruptly without tapering if needed. However, don\'t stop without talking to your doctor first - you need a plan for managing your blood sugar.',
    discussWithDoctor: [
      'Why do you want to stop?',
      'What will replace it for blood sugar control?',
      'What blood sugar monitoring is needed after stopping?',
      'Under what circumstances might you restart it?',
    ],
  },

  practicalInfo: {
    genericAvailable: true,
    costRange: 'Very affordable - one of the least expensive diabetes medications. Often $4 for a month\'s supply at many pharmacies.',
    assistancePrograms: [
      'Many $4 generic programs at major pharmacies',
      'Patient assistance programs rarely needed due to low cost',
    ],
    costSavingTips: [
      'Generic metformin is just as effective as brand name',
      'Check $4 generic lists at major pharmacies (Walmart, Costco, etc.)',
      'Extended-release generic is also affordable',
      'No significant cost difference between immediate and extended-release generics',
    ],
  },

  anatomyLinks: [
    { structureId: 'liver', structureName: 'Liver', relevance: 'Primary site of action - reduces glucose production', viewPreset: 'anterior' },
    { structureId: 'small-intestine', structureName: 'Small Intestine', relevance: 'Where metformin is absorbed and has local effects', viewPreset: 'anterior' },
    { structureId: 'skeletal-muscle', structureName: 'Skeletal Muscle', relevance: 'Improves insulin sensitivity for glucose uptake', viewPreset: 'anterior' },
    { structureId: 'kidneys', structureName: 'Kidneys', relevance: 'Where metformin is eliminated - kidney function must be monitored', viewPreset: 'posterior' },
  ],
};

// =============================================================================
// LISINOPRIL - Understanding Your Blood Pressure Medication
// =============================================================================

const LISINOPRIL_EDUCATION: MedicationEducation = {
  id: 'lisinopril',
  genericName: 'Lisinopril',
  brandNames: ['Prinivil', 'Zestril'],
  drugClass: 'ACE Inhibitor (Angiotensin-Converting Enzyme Inhibitor)',

  whyTakingThis: {
    purpose: {
      simple: 'Lisinopril lowers your blood pressure by relaxing your blood vessels. This protects your heart, kidneys, and brain from damage caused by high blood pressure.',
      detailed: 'Lisinopril is an ACE inhibitor that blocks a hormone system (RAAS) that raises blood pressure. By blocking this system, blood vessels relax and widen, blood pressure drops, and the workload on your heart decreases. It also protects your kidneys and heart beyond just lowering blood pressure.',
      comprehensive: 'Lisinopril inhibits angiotensin-converting enzyme (ACE), preventing conversion of angiotensin I to the potent vasoconstrictor angiotensin II. This causes vasodilation, reduced aldosterone secretion (natriuresis), decreased sympathetic activity, and cardioprotective/renoprotective effects beyond blood pressure lowering. Indicated for hypertension, heart failure, post-MI cardioprotection, and diabetic nephropathy.',
    },

    whyThisOne: 'ACE inhibitors like lisinopril are first-line blood pressure medications because they: (1) Effectively lower blood pressure, (2) Protect the kidneys, especially in diabetes, (3) Protect the heart, especially after heart attacks or in heart failure, (4) Have a well-established safety record, (5) Are affordable as generics.',

    consequenceOfNotTaking: {
      simple: 'Without blood pressure medication, your blood pressure stays high, silently damaging your blood vessels, heart, brain, kidneys, and eyes over years.',
      detailed: 'High blood pressure is called the "silent killer" because it causes no symptoms while damaging organs. Without treatment, it significantly increases your risk of heart attack, stroke, kidney failure, vision loss, and heart failure. The damage accumulates over years.',
      comprehensive: 'Uncontrolled hypertension accelerates atherosclerosis, causes left ventricular hypertrophy, promotes chronic kidney disease, and is the leading modifiable risk factor for stroke. Each 20/10 mmHg increase in blood pressure doubles cardiovascular mortality. ACE inhibitors provide benefits beyond blood pressure control through RAAS inhibition, reducing end-organ damage.',
    },

    missedDoseConsequence: 'Missing one dose occasionally isn\'t dangerous - blood pressure may be slightly higher that day. However, consistent doses are important for steady blood pressure control. Don\'t double up to make up for a missed dose.',
  },

  howItWorks: {
    mechanism: {
      simple: 'Your body has a system that tightens blood vessels and raises blood pressure when it thinks you need more blood flow. Lisinopril blocks this system, allowing blood vessels to relax and widen.',
      detailed: 'Lisinopril blocks an enzyme called ACE (angiotensin-converting enzyme). ACE normally converts angiotensin I into angiotensin II - a powerful chemical that tightens blood vessels. By blocking ACE, less angiotensin II is made, so blood vessels relax, blood pressure drops, and the heart doesn\'t have to work as hard.',
      comprehensive: 'Lisinopril competitively inhibits ACE, preventing cleavage of the decapeptide angiotensin I to the octapeptide angiotensin II. Effects include: vasodilation (both arterial and venous), reduced aldosterone secretion, decreased preload and afterload, natriuresis, reduced sympathetic tone, and prevention of maladaptive cardiac and vascular remodeling. ACE also degrades bradykinin; ACE inhibition increases bradykinin levels, contributing to vasodilation but also the cough side effect.',
    },

    whereItActs: [
      {
        areaName: 'Blood vessels throughout body',
        structureId: 'circulatory-system',
        howAffected: {
          simple: 'Blood vessels relax and widen, making it easier for blood to flow through. This lowers blood pressure.',
          detailed: 'With less angiotensin II, the smooth muscle in blood vessel walls relaxes. The vessels dilate (widen), reducing resistance to blood flow. Both arteries and veins are affected. This reduces the pressure the heart has to pump against.',
          comprehensive: 'ACE inhibition reduces angiotensin II-mediated vasoconstriction in both resistance arterioles (reducing afterload) and venous capacitance vessels (reducing preload). Additionally, increased bradykinin stimulates nitric oxide and prostaglandin release, further promoting vasodilation. Long-term use reverses vascular hypertrophy and reduces arterial stiffness.',
        },
        relatedSymptoms: ['Lower blood pressure readings', 'May feel dizzy at first as body adjusts'],
      },
      {
        areaName: 'Heart',
        structureId: 'heart',
        howAffected: {
          simple: 'With lower blood pressure, your heart doesn\'t have to work as hard to pump blood. This protects it from wearing out.',
          detailed: 'The heart pumps against the pressure in your arteries. When blood pressure is lower, each heartbeat requires less effort. ACE inhibitors also prevent harmful remodeling of the heart muscle that occurs with prolonged high blood pressure or after heart attacks.',
          comprehensive: 'Reduced afterload decreases myocardial oxygen demand and wall stress. ACE inhibition prevents angiotensin II-mediated cardiac hypertrophy and fibrosis. In heart failure and post-MI, ACE inhibitors reduce mortality by preventing adverse ventricular remodeling. The SOLVD, SAVE, and HOPE trials demonstrated these cardioprotective benefits.',
        },
        relatedSymptoms: ['Heart doesn\'t have to work as hard', 'Prevents heart enlargement', 'Improves survival in heart failure'],
      },
      {
        areaName: 'Kidneys',
        structureId: 'kidneys',
        howAffected: {
          simple: 'ACE inhibitors are especially good for protecting kidneys, which is important if you have diabetes or kidney problems.',
          detailed: 'The kidneys are particularly sensitive to angiotensin II. ACE inhibitors dilate the blood vessels leaving the kidney filters (efferent arterioles), reducing pressure inside the filters (glomeruli). This protects the delicate filtering units from damage.',
          comprehensive: 'ACE inhibition preferentially dilates efferent arterioles (via reduced angiotensin II), decreasing intraglomerular pressure and reducing proteinuria. This slows progression of diabetic nephropathy and other proteinuric kidney diseases. Landmark trials (HOPE, RENAAL) demonstrated renoprotective effects. Initial creatinine increase (up to 30%) is acceptable and reflects hemodynamic changes, not kidney damage.',
        },
        relatedSymptoms: ['Reduced protein in urine', 'Slows kidney disease progression', 'Creatinine may rise slightly (usually okay)'],
      },
    ],

    timeToEffect: {
      whenYouMightFeel: 'You won\'t feel your blood pressure dropping - high blood pressure usually has no symptoms. You may feel slightly dizzy or lightheaded in the first few days as your body adjusts.',
      whenFullEffect: 'Blood pressure lowering begins within hours. Full effect is usually seen within 1-2 weeks. Kidney-protective effects develop over months to years.',
      bePatient: 'Blood pressure control often requires adjustments. If your blood pressure isn\'t at goal after 2-4 weeks, your doctor may increase the dose or add another medication.',
    },

    signsItsWorking: [
      'Lower blood pressure readings (target usually <130/80)',
      'Stable kidney function tests',
      'Reduced protein in urine if you had proteinuria',
      'Heart working more efficiently (if you have heart failure or have had a heart attack)',
    ],
  },

  howToTake: {
    dosing: 'Usually starts at 5-10mg once daily. Can be increased to 40mg daily. Lower starting doses (2.5-5mg) for heart failure, post-MI, or if at risk for hypotension.',

    timing: {
      whenToTake: 'Once daily, at the same time each day. Morning or evening is fine.',
      whyThisTiming: 'ACE inhibitors have a long duration of action (24+ hours), so once daily dosing works. Consistency helps maintain steady blood pressure control.',
      withOrWithoutFood: 'Can be taken with or without food. No significant effect of food on absorption.',
      foodReason: 'Lisinopril absorption is not significantly affected by food, so you can choose whatever timing fits your routine best.',
    },

    missedDose: 'Take it as soon as you remember. If it\'s almost time for your next dose, skip the missed dose. Never double up. One missed dose is not dangerous.',

    storage: 'Store at room temperature. Protect from moisture. Keep in original container.',

    specialInstructions: [
      'Blood pressure may drop more when starting - be careful standing up quickly',
      'Stay hydrated, especially in hot weather',
      'Avoid potassium supplements and salt substitutes unless directed by your doctor',
      'Tell your doctor if you become pregnant - ACE inhibitors can harm the fetus',
      'Report any signs of infection, especially fever and sore throat',
    ],
  },

  sideEffects: {
    common: [
      {
        effect: 'Dry cough',
        frequency: 'common',
        whatItFeelsLike: 'Persistent dry, tickling cough that doesn\'t produce mucus. Often worse at night.',
        whyItHappens: 'ACE inhibitors prevent breakdown of bradykinin, which accumulates in the lungs and airways, triggering a cough reflex.',
        whenToWorry: 'If cough is severe enough to disturb sleep or daily life. It\'s not dangerous, but it may mean you need a different medication.',
        urgency: 'schedule-soon',
      },
      {
        effect: 'Dizziness or lightheadedness',
        frequency: 'common',
        whatItFeelsLike: 'Feeling lightheaded, especially when standing up quickly',
        whyItHappens: 'Blood pressure is lower, and sometimes drops more than intended. Usually improves as your body adjusts.',
        whenToWorry: 'If you faint, or if dizziness is severe or persistent',
        urgency: 'call-doctor-today',
      },
      {
        effect: 'Elevated potassium',
        frequency: 'common',
        whatItFeelsLike: 'Often no symptoms, but high levels can cause muscle weakness, numbness, or heart rhythm problems',
        whyItHappens: 'ACE inhibitors reduce aldosterone, which normally helps kidneys excrete potassium',
        whenToWorry: 'This is monitored with blood tests. Symptoms of high potassium need urgent attention.',
        urgency: 'call-doctor-today',
      },
    ],

    lessCommon: [
      {
        effect: 'Increased creatinine (kidney function change)',
        frequency: 'uncommon',
        whatItFeelsLike: 'No symptoms - detected on blood test',
        whyItHappens: 'Reflects hemodynamic changes in kidney blood flow. Small increases (up to 30%) are expected and acceptable.',
        whenToWorry: 'If creatinine rises more than 30% or continues to rise, the medication may need to be stopped.',
        urgency: 'schedule-soon',
      },
      {
        effect: 'Headache',
        frequency: 'uncommon',
        whatItFeelsLike: 'Mild headache, usually improves with time',
        whyItHappens: 'Related to blood pressure changes and vasodilation',
        whenToWorry: 'Severe headache, especially with visual changes, needs urgent evaluation',
        urgency: 'mention-at-next-visit',
      },
    ],

    serious: [
      {
        effect: 'Angioedema (swelling of face, lips, tongue, throat)',
        frequency: 'rare',
        whatItFeelsLike: 'Swelling of lips, face, tongue, or throat. Can cause difficulty breathing or swallowing.',
        whyItHappens: 'Bradykinin accumulation causes vascular leakage in susceptible individuals. More common in Black patients.',
        whenToWorry: 'This is a medical emergency, especially if affecting breathing or swallowing',
        urgency: 'emergency-911',
      },
      {
        effect: 'Severe allergic reaction',
        frequency: 'very-rare',
        whatItFeelsLike: 'Rash, hives, difficulty breathing, rapid heartbeat',
        whyItHappens: 'Allergic reaction to the medication',
        whenToWorry: 'Any signs of serious allergic reaction need immediate attention',
        urgency: 'emergency-911',
      },
      {
        effect: 'Dangerous drop in blood pressure',
        frequency: 'rare',
        whatItFeelsLike: 'Severe dizziness, fainting, feeling very weak',
        whyItHappens: 'More likely if dehydrated, on multiple blood pressure medications, or starting with high doses',
        whenToWorry: 'Fainting or near-fainting, especially with other symptoms',
        urgency: 'go-to-er-now',
      },
    ],

    managementTips: [
      {
        effect: 'Dry cough',
        howToManage: [
          'Wait 2-4 weeks - sometimes improves on its own',
          'Sucking lozenges may provide temporary relief',
          'If persistent and bothersome, talk to your doctor',
          'Switching to an ARB (like losartan) usually resolves the cough',
        ],
        whenToCallDoctor: 'If cough is severe, disrupts sleep, or doesn\'t improve after a few weeks',
      },
      {
        effect: 'Dizziness when standing',
        howToManage: [
          'Stand up slowly, especially in the morning',
          'Sit on the edge of the bed before standing',
          'Stay well hydrated',
          'Avoid standing in hot environments for long periods',
        ],
        whenToCallDoctor: 'If you faint or feel like you might faint',
      },
    ],

    whenTheyImprove: 'Most side effects like dizziness improve within the first 2 weeks as your body adjusts. The cough, unfortunately, often persists as long as you take the medication - if it\'s intolerable, switching to an ARB usually resolves it.',
  },

  interactions: {
    drugInteractions: [
      {
        otherMedication: 'Potassium supplements or potassium-sparing diuretics (spironolactone, eplerenone)',
        whatHappens: 'Dangerous increase in potassium levels (hyperkalemia)',
        severity: 'major',
        whatToDo: 'Avoid potassium supplements unless directed by doctor. Frequent monitoring if combined.',
      },
      {
        otherMedication: 'NSAIDs (ibuprofen, naproxen)',
        whatHappens: 'Reduces blood pressure lowering effect and increases kidney risk',
        severity: 'moderate',
        whatToDo: 'Use acetaminophen for pain instead when possible. Occasional NSAID use is usually okay.',
      },
      {
        otherMedication: 'Lithium',
        whatHappens: 'ACE inhibitors can increase lithium levels to dangerous range',
        severity: 'major',
        whatToDo: 'Requires more frequent lithium level monitoring. May need lithium dose adjustment.',
      },
      {
        otherMedication: 'Other blood pressure medications',
        whatHappens: 'Additive blood pressure lowering - can cause too-low blood pressure',
        severity: 'moderate',
        whatToDo: 'This is often intentional to achieve blood pressure goals. Monitor for dizziness.',
      },
    ],

    foodInteractions: [
      {
        food: 'Salt substitutes (potassium chloride)',
        whatHappens: 'These are high in potassium and can cause dangerous hyperkalemia',
        recommendation: 'Avoid salt substitutes. Use herbs and spices for flavor instead.',
      },
      {
        food: 'High-potassium foods (bananas, oranges, potatoes)',
        whatHappens: 'Can contribute to elevated potassium, though normal dietary intake is usually okay',
        recommendation: 'Normal diet is fine. Don\'t take potassium supplements without doctor guidance.',
      },
    ],

    supplementInteractions: [
      {
        substance: 'Potassium supplements',
        whatHappens: 'High risk of dangerous hyperkalemia',
        recommendation: 'Don\'t take without doctor approval. Most people don\'t need them.',
      },
    ],

    alcoholInteraction: 'Alcohol can add to the blood pressure lowering effect, potentially causing dizziness or fainting. Moderate alcohol is usually okay, but be careful, especially when starting the medication.',

    activityPrecautions: [
      'Be careful when standing up quickly, especially at first',
      'Avoid getting overheated or dehydrated',
      'Stay well hydrated during exercise',
      'Normal activities are fine once you know how the medication affects you',
    ],
  },

  monitoring: {
    labTests: [
      {
        testName: 'Blood pressure',
        whyNeeded: 'To ensure the medication is controlling your blood pressure adequately',
        howOften: 'Check at each doctor visit. Home monitoring recommended for many patients.',
        whatResultsMean: 'Target is usually <130/80. Your doctor will adjust treatment if not at goal.',
      },
      {
        testName: 'Potassium level',
        whyNeeded: 'ACE inhibitors can raise potassium to dangerous levels',
        howOften: 'Within 1-2 weeks of starting, after dose changes, then periodically (usually every 6-12 months)',
        whatResultsMean: 'Normal is 3.5-5.0 mEq/L. Above 5.5 is concerning and may require medication adjustment.',
      },
      {
        testName: 'Kidney function (creatinine/eGFR)',
        whyNeeded: 'To monitor for significant kidney changes and adjust dosing',
        howOften: 'Within 1-2 weeks of starting, after dose changes, then periodically',
        whatResultsMean: 'Small creatinine increases (up to 30%) are expected and okay. Larger increases need evaluation.',
      },
    ],

    symptomsToTrack: [
      'Blood pressure readings (if you have a home monitor)',
      'Dizziness or lightheadedness',
      'Cough (persistent, dry)',
      'Any swelling of face, lips, or tongue (seek emergency care)',
    ],

    followUpSchedule: 'Typically every 3-6 months once stable. More frequently when starting or adjusting dose.',
  },

  questionsToAsk: [
    {
      question: 'What should my blood pressure target be?',
      whyAsk: 'Targets vary by age and health conditions.',
      whatAnswerMeans: 'Usually <130/80, but may be different for you.',
      followUpQuestions: ['Should I get a home blood pressure monitor?'],
    },
    {
      question: 'If I develop a cough, can I switch to a different medication?',
      whyAsk: 'The dry cough is a common reason people stop ACE inhibitors.',
      whatAnswerMeans: 'Yes, ARBs (like losartan) work similarly without the cough.',
      followUpQuestions: ['How long should I try to tolerate the cough before switching?'],
    },
  ],

  stoppingMedication: {
    canStopSuddenly: true,
    howToStop: 'Can be stopped abruptly without tapering. However, your blood pressure will rise without treatment.',
    discussWithDoctor: [
      'Why do you want to stop?',
      'What will replace it to control blood pressure?',
      'Are there alternatives with fewer side effects?',
    ],
  },

  practicalInfo: {
    genericAvailable: true,
    costRange: 'Very affordable as a generic - often $4 for a month\'s supply',
    assistancePrograms: [
      '$4 generic programs at major pharmacies',
    ],
    costSavingTips: [
      'Generic lisinopril is very affordable',
      'Check $4 generic lists at major pharmacies',
    ],
  },

  anatomyLinks: [
    { structureId: 'heart', structureName: 'Heart', relevance: 'Reduces heart workload, protects from damage', viewPreset: 'anterior' },
    { structureId: 'kidneys', structureName: 'Kidneys', relevance: 'Protects kidney filters, slows kidney disease', viewPreset: 'posterior' },
    { structureId: 'circulatory-system', structureName: 'Blood Vessels', relevance: 'Where vasodilation occurs to lower blood pressure', viewPreset: 'anterior' },
  ],
};

// =============================================================================
// ATORVASTATIN - Your Cholesterol Fighter
// =============================================================================

const ATORVASTATIN_EDUCATION: MedicationEducation = {
  id: 'atorvastatin',
  genericName: 'Atorvastatin',
  brandNames: ['Lipitor'],
  drugClass: 'HMG-CoA Reductase Inhibitor (Statin)',

  whyTakingThis: {
    purpose: {
      simple: 'Atorvastatin lowers your cholesterol - especially the "bad" LDL cholesterol that clogs arteries. This protects you from heart attacks and strokes.',
      detailed: 'Atorvastatin is a statin that reduces LDL ("bad") cholesterol by blocking its production in the liver. But statins do more than just lower numbers - they stabilize dangerous plaques in arteries, reduce inflammation, and significantly reduce your risk of heart attack and stroke.',
      comprehensive: 'Atorvastatin is a competitive inhibitor of HMG-CoA reductase, the rate-limiting enzyme in hepatic cholesterol synthesis. Reduced intracellular cholesterol upregulates LDL receptors, increasing clearance of circulating LDL. Beyond LDL reduction (~30-50%), pleiotropic effects include: improved endothelial function, reduced inflammation (hs-CRP), plaque stabilization through reduced macrophage activity, and antithrombotic effects. The ASCOT-LLA, CARDS, TNT, and SPARCL trials demonstrated significant cardiovascular event reduction.',
      analogy: 'Think of your arteries as pipes that can get clogged with gunk (plaque). Atorvastatin does two things: it slows down how much gunk gets added, and it helps stabilize the gunk that\'s already there so it doesn\'t break off and cause a blockage.',
      visualMetaphor: 'A factory (liver) with its cholesterol production line being slowed down',
    },

    whyThisOne: 'Atorvastatin is one of the most commonly prescribed statins because it\'s highly effective at lowering LDL cholesterol (by 30-50%), has a strong track record of preventing heart attacks and strokes, is available as an affordable generic, and is generally well-tolerated.',

    consequenceOfNotTaking: {
      simple: 'Without the statin, your LDL cholesterol will rise again, and plaque will continue to build up in your arteries, increasing your risk of heart attack and stroke.',
      detailed: 'Stopping your statin allows LDL cholesterol to return to pre-treatment levels within weeks. The benefits of plaque stabilization are lost. Studies show increased cardiovascular events in people who discontinue statins, especially those with established heart disease.',
      comprehensive: 'Statin discontinuation leads to loss of all pleiotropic benefits within days and LDL rebound within weeks. The PRIMO study demonstrated increased cardiovascular events after discontinuation. Particularly dangerous in acute coronary syndrome - peri-procedural statin discontinuation increases 30-day mortality. The "legacy effect" of statins is modest; ongoing treatment is necessary for continued benefit.',
    },

    missedDoseConsequence: 'Missing one dose occasionally isn\'t a big deal - cholesterol control is about consistent long-term use, not individual doses. Just take your next dose as scheduled. Don\'t double up.',
  },

  howItWorks: {
    mechanism: {
      simple: 'Your liver makes most of the cholesterol in your body. Atorvastatin blocks an enzyme the liver needs to make cholesterol, so your liver makes less. It then pulls more cholesterol out of your blood to compensate, lowering your blood cholesterol level.',
      detailed: 'Atorvastatin inhibits HMG-CoA reductase, a key enzyme in cholesterol production. When the liver makes less cholesterol, it responds by pulling LDL cholesterol from the bloodstream (by making more LDL receptors). Statins also stabilize existing plaques and reduce inflammation in blood vessels.',
      comprehensive: 'Atorvastatin competitively inhibits HMG-CoA reductase, reducing mevalonate production and downstream cholesterol synthesis. Intrahepatic cholesterol depletion triggers SREBP-2-mediated upregulation of LDL receptor expression, enhancing plasma LDL clearance. The mevalonate pathway inhibition also affects isoprenoid intermediates, explaining pleiotropic effects: reduced Rho/ROCK signaling (improved endothelial NO), reduced prenylation of Rac1 (anti-inflammatory), and reduced tissue factor expression (antithrombotic).',
    },

    whereItActs: [
      {
        areaName: 'Liver',
        structureId: 'liver',
        howAffected: {
          simple: 'The liver is where most cholesterol is made. Atorvastatin works here to reduce cholesterol production.',
          detailed: 'The liver is the primary site of cholesterol synthesis and LDL receptor expression. By blocking cholesterol production here, the liver responds by increasing uptake of LDL from the bloodstream.',
          comprehensive: 'Hepatocytes are the primary site of HMG-CoA reductase activity and statin action. Atorvastatin\'s liver-selective uptake is mediated by OATP1B1 transporter. Reduced intracellular cholesterol activates SREBP-2, increasing LDL receptor mRNA and protein. The liver also clears statins via CYP3A4, explaining drug interactions.',
        },
        relatedSymptoms: ['Lower LDL cholesterol', 'Rarely: elevated liver enzymes (usually mild and reversible)'],
      },
      {
        areaName: 'Blood vessels (arteries)',
        structureId: 'circulatory-system',
        howAffected: {
          simple: 'Statins help keep arteries healthy by reducing inflammation and stabilizing plaques so they\'re less likely to rupture.',
          detailed: 'Beyond lowering cholesterol, statins improve endothelial function, reduce inflammation in vessel walls, and stabilize atherosclerotic plaques. This reduces the risk of plaque rupture - the event that triggers most heart attacks.',
          comprehensive: 'Statins improve endothelial function within days (before significant LDL lowering) through increased eNOS activity and NO bioavailability. They reduce oxidized LDL, decrease macrophage lipid content in plaques, reduce MMP activity (stabilizing fibrous cap), and decrease inflammatory markers. IVUS studies show regression of atherosclerotic plaque with high-intensity statin therapy.',
        },
        relatedSymptoms: ['Reduced inflammation markers', 'Plaque stabilization (not directly felt)', 'Reduced cardiovascular events'],
      },
      {
        areaName: 'Muscles',
        structureId: 'skeletal-muscle',
        howAffected: {
          simple: 'Muscles can sometimes be affected by statins, causing aches or weakness in a small number of people.',
          detailed: 'Some patients experience muscle symptoms with statins. This is usually mild achiness, but rarely can be more serious. The exact mechanism isn\'t fully understood but may involve effects on cellular energy production.',
          comprehensive: 'Statin-associated muscle symptoms (SAMS) affect 5-10% of patients. Proposed mechanisms include: CoQ10 depletion affecting mitochondrial function, reduced isoprenoid synthesis affecting muscle cell membrane function, and increased muscle susceptibility to exercise-induced damage. Severe myopathy/rhabdomyolysis is rare (<0.1%). Risk factors include high statin dose, drug interactions (CYP3A4 inhibitors), hypothyroidism, and genetic variants (SLCO1B1).',
        },
        relatedSymptoms: ['Some patients: muscle aches, weakness, cramps (usually mild)'],
      },
    ],

    timeToEffect: {
      whenYouMightFeel: 'You won\'t feel your cholesterol going down - it has no symptoms. The benefits are measured by blood tests and, more importantly, by preventing heart attacks and strokes over years.',
      whenFullEffect: 'LDL cholesterol starts dropping within 1-2 weeks. Maximum effect on cholesterol levels is seen by 4-6 weeks. The cardiovascular protection benefits accumulate over months to years.',
      bePatient: 'Statins are about long-term protection. The benefit comes from taking them consistently over years - think of it as ongoing maintenance for your arteries.',
    },

    signsItsWorking: [
      'Lower LDL cholesterol on blood tests',
      'Improved cholesterol ratios (LDL/HDL)',
      'Lower inflammatory markers (hs-CRP) if measured',
      'Most importantly: NOT having a heart attack or stroke (the benefit you don\'t feel)',
    ],
  },

  howToTake: {
    dosing: 'Doses range from 10mg to 80mg once daily. Starting dose depends on your cardiovascular risk and LDL level. Most people are on 20-40mg.',

    timing: {
      whenToTake: 'Once daily. Atorvastatin can be taken at any time of day because of its long duration of action, though many people take it in the evening.',
      whyThisTiming: 'The body makes most cholesterol at night, so evening dosing was traditionally recommended. However, atorvastatin has a long half-life, so timing matters less than for some other statins.',
      withOrWithoutFood: 'Can be taken with or without food.',
      foodReason: 'Food has minimal effect on atorvastatin absorption, so take it however is most convenient for you.',
    },

    missedDose: 'Take it when you remember, unless it\'s almost time for your next dose. Then just skip the missed dose and continue your regular schedule. Don\'t double up.',

    storage: 'Store at room temperature, away from moisture and heat.',

    specialInstructions: [
      'Avoid grapefruit juice in large amounts - it can increase statin levels and side effects',
      'Report any unusual muscle pain, tenderness, or weakness',
      'Tell your doctor about all other medications',
      'Continue taking even if you feel fine - the benefit is long-term',
    ],
  },

  sideEffects: {
    common: [
      {
        effect: 'Muscle aches (myalgia)',
        frequency: 'common',
        whatItFeelsLike: 'Generalized muscle soreness, achiness, or discomfort. May feel like you\'ve overdone it at the gym.',
        whyItHappens: 'The exact mechanism isn\'t fully understood but may involve effects on muscle cell energy production.',
        whenToWorry: 'If pain is severe, you have muscle weakness, your urine turns dark, or you have fever with muscle pain',
        urgency: 'call-doctor-today',
      },
      {
        effect: 'Joint pain',
        frequency: 'common',
        whatItFeelsLike: 'Aching in joints, may move around',
        whyItHappens: 'Related to the same mechanisms as muscle effects',
        whenToWorry: 'If severe or significantly limiting activity',
        urgency: 'mention-at-next-visit',
      },
      {
        effect: 'Mild digestive issues',
        frequency: 'common',
        whatItFeelsLike: 'Nausea, upset stomach, constipation, or diarrhea',
        whyItHappens: 'GI side effects are typically mild and may improve over time',
        whenToWorry: 'If severe or persistent',
        urgency: 'mention-at-next-visit',
      },
    ],

    lessCommon: [
      {
        effect: 'Elevated liver enzymes',
        frequency: 'uncommon',
        whatItFeelsLike: 'Usually no symptoms - detected on blood tests. Rarely: fatigue, loss of appetite, dark urine, yellowing of skin/eyes',
        whyItHappens: 'The liver processes statins, and occasionally enzymes elevate. This is usually mild and reversible.',
        whenToWorry: 'Significant elevation or symptoms of liver problems (yellowing, dark urine, severe fatigue)',
        urgency: 'call-doctor-today',
      },
      {
        effect: 'Memory issues or confusion',
        frequency: 'rare',
        whatItFeelsLike: 'Fuzzy thinking, memory lapses, difficulty concentrating',
        whyItHappens: 'Reported by some patients, but studies haven\'t consistently confirmed this. May be coincidental with aging.',
        whenToWorry: 'If significant cognitive changes occur after starting statin',
        urgency: 'schedule-soon',
      },
      {
        effect: 'New-onset diabetes',
        frequency: 'uncommon',
        whatItFeelsLike: 'May notice increased thirst, urination (or no symptoms - detected on blood tests)',
        whyItHappens: 'Statins slightly increase blood sugar. Risk is higher in those already predisposed to diabetes.',
        whenToWorry: 'The cardiovascular benefits usually outweigh this small risk, but blood sugar should be monitored',
        urgency: 'mention-at-next-visit',
      },
    ],

    serious: [
      {
        effect: 'Rhabdomyolysis',
        frequency: 'very-rare',
        whatItFeelsLike: 'Severe muscle pain, extreme weakness, dark cola-colored urine',
        whyItHappens: 'Massive muscle breakdown releasing myoglobin that can damage kidneys. Very rare (<0.1%), more likely with drug interactions or very high doses.',
        whenToWorry: 'These symptoms are a medical emergency',
        urgency: 'go-to-er-now',
      },
      {
        effect: 'Severe liver injury',
        frequency: 'very-rare',
        whatItFeelsLike: 'Yellowing of skin/eyes (jaundice), dark urine, severe fatigue, nausea',
        whyItHappens: 'Rare idiosyncratic liver reaction',
        whenToWorry: 'Any signs of liver failure need immediate attention',
        urgency: 'go-to-er-now',
      },
    ],

    managementTips: [
      {
        effect: 'Muscle aches',
        howToManage: [
          'Try CoQ10 supplements (100-200mg daily) - some evidence this helps',
          'Stay hydrated',
          'Light stretching and regular exercise (counterintuitively helps)',
          'Take vitamin D if deficient - deficiency worsens muscle symptoms',
          'Ask about trying a different statin or lower dose',
        ],
        whenToCallDoctor: 'If muscle pain is severe, you have weakness, dark urine, or fever',
      },
      {
        effect: 'GI symptoms',
        howToManage: [
          'Taking with food may help nausea',
          'Increase fiber and water for constipation',
          'Usually improves over time',
        ],
        whenToCallDoctor: 'If symptoms are severe or persistent',
      },
    ],

    whenTheyImprove: 'Many muscle symptoms improve over time or with dose adjustment. If symptoms don\'t improve, discuss alternatives with your doctor - different statins affect people differently, and there are non-statin options if needed.',
  },

  interactions: {
    drugInteractions: [
      {
        otherMedication: 'Certain antibiotics (clarithromycin, erythromycin)',
        whatHappens: 'Increase atorvastatin levels, raising risk of muscle problems',
        severity: 'major',
        whatToDo: 'Atorvastatin may need to be held during antibiotic course. Tell your doctor.',
      },
      {
        otherMedication: 'Certain antifungals (itraconazole, ketoconazole)',
        whatHappens: 'Significantly increases atorvastatin levels',
        severity: 'major',
        whatToDo: 'Avoid combination or use with extreme caution. Tell your doctor.',
      },
      {
        otherMedication: 'Cyclosporine (immunosuppressant)',
        whatHappens: 'Greatly increases atorvastatin levels and muscle damage risk',
        severity: 'major',
        whatToDo: 'Avoid combination. Alternative statins or doses may be needed.',
      },
      {
        otherMedication: 'Gemfibrozil (another cholesterol medication)',
        whatHappens: 'Increases risk of severe muscle damage',
        severity: 'major',
        whatToDo: 'Generally avoid combination. If needed, use lowest effective statin dose.',
      },
      {
        otherMedication: 'Amiodarone (heart rhythm medication)',
        whatHappens: 'Increases atorvastatin levels',
        severity: 'moderate',
        whatToDo: 'Atorvastatin dose may be limited. Your doctor will manage this.',
      },
      {
        otherMedication: 'Warfarin (blood thinner)',
        whatHappens: 'Statins can increase warfarin effect, raising bleeding risk',
        severity: 'moderate',
        whatToDo: 'INR monitoring may be needed when starting or changing statin dose.',
      },
      {
        otherMedication: 'Colchicine (gout medication)',
        whatHappens: 'Both can affect muscles; combination may increase muscle risk',
        severity: 'moderate',
        whatToDo: 'Usually can be used together with monitoring. Report any muscle symptoms.',
      },
    ],

    foodInteractions: [
      {
        food: 'Grapefruit juice',
        whatHappens: 'Can increase atorvastatin levels by inhibiting the enzyme that breaks it down',
        recommendation: 'Avoid large amounts (more than 1 quart daily). Occasional small amounts are usually fine.',
      },
      {
        food: 'Alcohol',
        whatHappens: 'Both processed by liver. Heavy alcohol use with statins may increase liver damage risk.',
        recommendation: 'Moderate alcohol is usually okay. Heavy drinking is not recommended with any statin.',
      },
    ],

    supplementInteractions: [
      {
        substance: 'Red yeast rice',
        whatHappens: 'Contains natural statins (lovastatin). Combining is like double-dosing.',
        recommendation: 'Do not take with prescription statins - increases side effect risk.',
      },
      {
        substance: 'Niacin (high-dose)',
        whatHappens: 'Both affect muscles. Combination may increase myopathy risk.',
        recommendation: 'Can be used together under medical supervision with low niacin doses.',
      },
      {
        substance: 'CoQ10',
        whatHappens: 'Statins may lower CoQ10 levels. Some take CoQ10 to counteract muscle symptoms.',
        recommendation: 'CoQ10 supplementation is safe and may help with muscle symptoms.',
      },
    ],

    alcoholInteraction: 'Moderate alcohol consumption is generally acceptable. However, heavy drinking increases the risk of liver problems when taking statins. Also, alcohol can raise triglycerides.',

    activityPrecautions: [
      'Regular exercise is encouraged and improves statin benefits',
      'If you do intense exercise, stay well hydrated to protect muscles and kidneys',
      'Report new muscle pain after starting new exercise routines',
      'Continue normal activities - statins shouldn\'t limit your lifestyle',
    ],
  },

  monitoring: {
    labTests: [
      {
        testName: 'Lipid panel',
        whyNeeded: 'To see how well the statin is lowering your cholesterol and to adjust dose if needed.',
        howOften: '6-12 weeks after starting or changing dose, then annually.',
        whatResultsMean: 'Looking for LDL reduction to target (<70 for high-risk, <100 for others). May also track total cholesterol, HDL, triglycerides.',
      },
      {
        testName: 'Liver function tests (ALT, AST)',
        whyNeeded: 'Statins rarely affect the liver. Testing ensures liver is tolerating the medication.',
        howOften: 'No longer routinely required unless symptoms or risk factors. May check at baseline and as needed.',
        whatResultsMean: 'Mild elevation (less than 3x normal) is usually acceptable. Higher elevations may require stopping the statin.',
      },
      {
        testName: 'Creatine kinase (CK)',
        whyNeeded: 'Only if you have muscle symptoms. Measures muscle breakdown.',
        howOften: 'Not routine. Check if you develop significant muscle symptoms.',
        whatResultsMean: 'Elevated CK with symptoms may indicate myopathy. Very high CK with dark urine suggests rhabdomyolysis.',
      },
    ],

    symptomsToTrack: [
      'Muscle pain, tenderness, or weakness (especially new or unusual)',
      'Dark-colored urine (could indicate muscle breakdown)',
      'Unusual fatigue',
      'Yellowing of skin or eyes',
      'Any severe abdominal pain',
    ],

    followUpSchedule: 'Usually recheck lipids 6-12 weeks after starting or changing dose. Once stable, annual follow-up is typical.',
  },

  questionsToAsk: [
    {
      question: 'What\'s my LDL target, and am I meeting it?',
      whyAsk: 'Targets vary based on your risk factors. Knowing your target helps you understand if treatment is working.',
      whatAnswerMeans: 'High-risk patients (heart disease, diabetes) often target LDL <70. Others may aim for <100.',
      followUpQuestions: ['Should my dose be increased if I\'m not at target?'],
    },
    {
      question: 'How long will I need to take this medication?',
      whyAsk: 'Understanding the long-term nature of treatment helps with commitment.',
      whatAnswerMeans: 'Usually lifelong for those at elevated cardiovascular risk. Stopping allows cholesterol to rise again.',
      followUpQuestions: ['What happens if I stop taking it?'],
    },
    {
      question: 'What should I do if I develop muscle pain?',
      whyAsk: 'Muscle symptoms are the most common reason people want to stop statins.',
      whatAnswerMeans: 'Mild aches are common and often manageable. Severe pain needs prompt evaluation.',
      followUpQuestions: ['Can I try a different statin?', 'Would CoQ10 help?'],
    },
  ],

  stoppingMedication: {
    canStopSuddenly: true,
    howToStop: 'Atorvastatin can be stopped without tapering, but should only be stopped after discussion with your doctor. Cholesterol will rise again.',
    discussWithDoctor: [
      'Why do you want to stop?',
      'Have you tried dose reduction or a different statin?',
      'What alternatives exist?',
      'What is your cardiovascular risk without treatment?',
    ],
  },

  practicalInfo: {
    genericAvailable: true,
    costRange: 'Very affordable as generic - often $4-10 for a month\'s supply.',
    assistancePrograms: [
      '$4 generic programs at major pharmacies',
      'Manufacturer assistance programs for brand Lipitor (rarely needed)',
    ],
    costSavingTips: [
      'Generic atorvastatin is just as effective as brand Lipitor',
      'Check $4 generic lists at Walmart, Costco, etc.',
      'Ask your doctor if lower-priced equivalent statins would work for you',
    ],
  },

  anatomyLinks: [
    { structureId: 'liver', structureName: 'Liver', relevance: 'Where atorvastatin works to reduce cholesterol production', viewPreset: 'anterior' },
    { structureId: 'heart', structureName: 'Heart', relevance: 'Reduces heart attack risk by lowering cholesterol and stabilizing plaques', viewPreset: 'anterior' },
    { structureId: 'circulatory-system', structureName: 'Blood Vessels', relevance: 'Where cholesterol plaques form; statins stabilize them', viewPreset: 'anterior' },
    { structureId: 'brain', structureName: 'Brain', relevance: 'Reduces stroke risk', viewPreset: 'lateral-right' },
  ],
};

// =============================================================================
// MEDICATION DATABASE EXPORTS
// =============================================================================

export const MEDICATION_EDUCATION: Record<string, MedicationEducation> = {
  'metformin': METFORMIN_EDUCATION,
  'lisinopril': LISINOPRIL_EDUCATION,
  'atorvastatin': ATORVASTATIN_EDUCATION,
};

// Helper functions
export function getMedicationEducation(id: string): MedicationEducation | undefined {
  return MEDICATION_EDUCATION[id];
}

export function getAllMedicationEducation(): MedicationEducation[] {
  return Object.values(MEDICATION_EDUCATION);
}

export function searchMedicationEducation(query: string): MedicationEducation[] {
  const lower = query.toLowerCase();
  return Object.values(MEDICATION_EDUCATION).filter(m =>
    m.genericName.toLowerCase().includes(lower) ||
    m.brandNames.some(b => b.toLowerCase().includes(lower)) ||
    m.drugClass.toLowerCase().includes(lower)
  );
}
