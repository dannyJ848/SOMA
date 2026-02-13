/**
 * Condition Education Database
 *
 * Comprehensive patient education about medical conditions.
 * This is the "attending physician in your pocket" - giving patients
 * the depth of understanding they deserve but rarely receive.
 */

import type { ConditionEducation } from './types.js';

// =============================================================================
// TYPE 2 DIABETES - Comprehensive Patient Education
// =============================================================================

const TYPE_2_DIABETES_EDUCATION: ConditionEducation = {
  id: 'type-2-diabetes',
  conditionName: 'Type 2 Diabetes',
  medicalName: 'Type 2 Diabetes Mellitus',
  icdCode: 'E11',

  whyMeSection: {
    whatItIs: {
      simple: 'Type 2 diabetes means your body has trouble using sugar (glucose) for energy. It\'s like having a lock and key problem - insulin is the key that lets sugar into your cells, but in diabetes, the locks are rusty and the keys don\'t work as well.',
      detailed: 'Type 2 diabetes is a metabolic condition where your cells become resistant to insulin - the hormone that normally helps glucose enter cells. Your pancreas tries to compensate by making more insulin, but eventually can\'t keep up. The result is elevated blood sugar levels that, over time, can damage blood vessels and organs.',
      comprehensive: 'Type 2 diabetes mellitus is characterized by peripheral insulin resistance and progressive pancreatic beta-cell dysfunction. Initially, insulin resistance in skeletal muscle, adipose tissue, and liver triggers compensatory hyperinsulinemia. Over time, beta-cell exhaustion leads to relative and eventually absolute insulin deficiency. Chronic hyperglycemia promotes glucotoxicity and lipotoxicity, further impairing beta-cell function and insulin sensitivity in a vicious cycle.',
      analogy: 'Think of insulin as a delivery person with a key, and your cells as houses. In type 2 diabetes, the locks on the houses have changed - the delivery person has the right key, but it doesn\'t fit as well anymore. So sugar (the packages) pile up in the bloodstream instead of being delivered to your cells.',
      visualMetaphor: 'Rusty locks on cell doors, insulin keys struggling to open them, glucose molecules waiting outside',
    },

    howCommon: {
      prevalence: 'About 37 million Americans have diabetes, and 90-95% of them have type 2. That\'s about 1 in 10 adults. Worldwide, it affects over 400 million people.',
      affectedPopulations: 'It\'s more common in people over 45, though it\'s increasingly affecting younger adults and even children. Certain ethnic groups (African American, Hispanic/Latino, American Indian, Asian American, Pacific Islander) have higher rates.',
      patientReassurance: 'You are definitely not alone. Type 2 diabetes is one of the most common chronic conditions in the world. Millions of people successfully manage it every day and live full, active lives.',
    },

    whyItHappened: {
      knownCauses: [
        {
          cause: 'Insulin resistance',
          explanation: {
            simple: 'Your body\'s cells stop responding well to insulin, so sugar can\'t get in as easily.',
            detailed: 'Over time, especially with excess weight and inactivity, your cells become less sensitive to insulin\'s signals. The receptors on cell surfaces that normally respond to insulin become less effective.',
            comprehensive: 'Insulin resistance develops through multiple mechanisms: lipid accumulation in muscle and liver cells, chronic low-grade inflammation from adipose tissue, endoplasmic reticulum stress, mitochondrial dysfunction, and alterations in insulin signaling pathways (IRS proteins, PI3K, Akt).',
          },
          isModifiable: true,
          whatYouCanDo: 'Exercise, weight loss, and dietary changes can significantly improve insulin sensitivity.',
        },
        {
          cause: 'Pancreas can\'t keep up',
          explanation: {
            simple: 'Your pancreas makes insulin, but after years of working extra hard to overcome insulin resistance, it gets tired and can\'t make enough.',
            detailed: 'The beta cells in your pancreas that produce insulin become exhausted from years of overwork. They may also be damaged by high blood sugar levels themselves. Eventually, they can\'t produce enough insulin to overcome the resistance.',
            comprehensive: 'Progressive beta-cell dysfunction involves multiple factors: glucotoxicity (glucose-induced oxidative stress), lipotoxicity (free fatty acid toxicity), islet amyloid deposition, ER stress, inflammatory cytokines, and eventual beta-cell apoptosis. The rate of decline is approximately 4-5% per year after diagnosis.',
          },
          isModifiable: true,
          whatYouCanDo: 'Early treatment and good blood sugar control can help preserve remaining beta-cell function.',
        },
        {
          cause: 'Genetic predisposition',
          explanation: {
            simple: 'If diabetes runs in your family, you\'re more likely to develop it. Your genes influence how your body handles sugar.',
            detailed: 'There are over 400 genetic variants associated with type 2 diabetes risk. These genes affect insulin production, insulin signaling, and beta-cell function. Having a parent with diabetes doubles your risk.',
            comprehensive: 'Type 2 diabetes has strong heritability (~40-70%). Key genes include TCF7L2 (strongest known risk), PPARG, KCNJ11, WFS1, HNF1B, and genes in incretin pathways. However, genetic risk alone is usually insufficient - environmental factors trigger disease in genetically susceptible individuals.',
          },
          isModifiable: false,
          whatYouCanDo: 'While you can\'t change your genes, knowing your family history helps you be proactive about prevention.',
        },
      ],

      riskFactorsThatApply: [
        {
          factor: 'Excess weight, especially around the belly',
          howItContributes: 'Fat cells, especially abdominal (visceral) fat, release inflammatory chemicals and hormones that interfere with insulin signaling. They also release excess free fatty acids that worsen insulin resistance.',
          isModifiable: true,
          reductionStrategy: 'Even losing 5-7% of body weight (about 10-14 lbs for someone who weighs 200 lbs) can dramatically improve blood sugar control.',
          strengthOfRisk: 'major',
        },
        {
          factor: 'Physical inactivity',
          howItContributes: 'Muscles are a major site of glucose uptake. Without regular use, they become less efficient at taking up sugar from the blood. Exercise directly improves insulin sensitivity.',
          isModifiable: true,
          reductionStrategy: 'Aim for 150 minutes per week of moderate activity like brisk walking. Even short walks after meals help.',
          strengthOfRisk: 'major',
        },
        {
          factor: 'Diet high in processed foods and sugar',
          howItContributes: 'These foods cause rapid blood sugar spikes, stressing the pancreas. They also tend to be high in calories, promoting weight gain, and may directly contribute to insulin resistance.',
          isModifiable: true,
          reductionStrategy: 'Focus on whole foods: vegetables, lean proteins, whole grains, healthy fats. Reduce sugary drinks and highly processed foods.',
          strengthOfRisk: 'major',
        },
        {
          factor: 'Age (45+)',
          howItContributes: 'Insulin resistance tends to increase with age, partly due to decreased muscle mass and increased fat mass. Beta-cell function also naturally declines over time.',
          isModifiable: false,
          strengthOfRisk: 'moderate',
        },
        {
          factor: 'Family history',
          howItContributes: 'If your parent or sibling has type 2 diabetes, your risk is 2-3 times higher. This reflects shared genetic factors and often shared lifestyle factors.',
          isModifiable: false,
          reductionStrategy: 'Use this knowledge as motivation - you may need to work harder than others at prevention, but it\'s still possible.',
          strengthOfRisk: 'major',
        },
        {
          factor: 'History of gestational diabetes',
          howItContributes: 'If you had diabetes during pregnancy, it shows your body was already struggling with insulin regulation. This is a strong predictor of future type 2 diabetes.',
          isModifiable: false,
          reductionStrategy: 'Extra important to maintain healthy weight and activity levels after pregnancy.',
          strengthOfRisk: 'major',
        },
        {
          factor: 'Polycystic ovary syndrome (PCOS)',
          howItContributes: 'PCOS is associated with insulin resistance. Women with PCOS have significantly higher rates of developing type 2 diabetes.',
          isModifiable: false,
          reductionStrategy: 'Managing PCOS with lifestyle and medication helps reduce diabetes risk.',
          strengthOfRisk: 'moderate',
        },
        {
          factor: 'Sleep problems (sleep apnea, insufficient sleep)',
          howItContributes: 'Poor sleep disrupts hormones that regulate appetite and blood sugar. Sleep apnea causes intermittent oxygen deprivation that promotes insulin resistance.',
          isModifiable: true,
          reductionStrategy: 'Address sleep apnea with CPAP if needed. Aim for 7-9 hours of quality sleep.',
          strengthOfRisk: 'moderate',
        },
      ],

      notYourFault: 'Developing type 2 diabetes is NOT a moral failing or a sign of weakness. It results from a complex interplay of genetics, environment, and metabolic factors - many of which were set in motion long before you could have known. While lifestyle plays a role, genetics and biology are major factors. Some people with "perfect" lifestyles develop diabetes, while others with significant risk factors never do. What matters now is not blame, but what you do going forward.',
    },
  },

  bodyMechanism: {
    whatGoesWrong: {
      simple: 'When you eat, food breaks down into sugar (glucose) that enters your blood. Normally, insulin acts like a key to let sugar into your cells for energy. In type 2 diabetes, the keys don\'t work well, so sugar builds up in the blood instead of getting into cells.',
      detailed: 'The problem occurs in two main areas: First, your muscles, fat, and liver cells become resistant to insulin\'s effects - they don\'t respond well to the signal to take up glucose. Second, your pancreas tries to compensate by making more insulin, but over time, the insulin-producing beta cells wear out and can\'t keep up. The result is high blood sugar (hyperglycemia) after meals and eventually even when fasting.',
      comprehensive: 'Type 2 diabetes involves dysfunction at multiple organ sites: 1) Skeletal muscle: impaired insulin-stimulated glucose uptake (accounts for ~70-80% of postprandial glucose disposal), 2) Adipose tissue: increased lipolysis releasing free fatty acids, 3) Liver: increased gluconeogenesis and glycogenolysis (inappropriate glucose production), 4) Pancreatic beta cells: impaired glucose-stimulated insulin secretion and eventual cell death, 5) Gut: impaired incretin effect (GLP-1, GIP), 6) Kidney: increased glucose reabsorption, 7) Brain: dysregulated appetite centers. This "ominous octet" creates a self-perpetuating cycle of metabolic dysfunction.',
    },

    affectedAreas: [
      {
        areaName: 'Pancreas',
        structureId: 'pancreas',
        howAffected: {
          simple: 'The cells that make insulin (beta cells) get overworked and tired. Eventually they can\'t make enough insulin.',
          detailed: 'The beta cells in your pancreatic islets must work overtime to produce extra insulin to overcome resistance. This chronic stress leads to beta cell exhaustion and death. High blood sugar itself further damages these cells.',
          comprehensive: 'Beta-cell mass decreases by approximately 50-60% by the time of diagnosis. Mechanisms include glucotoxicity-induced oxidative stress, lipotoxicity, ER stress, inflammatory cytokines (IL-1β), and accumulation of islet amyloid polypeptide (IAPP). The rate of beta-cell decline continues post-diagnosis at ~4%/year.',
        },
        relatedSymptoms: ['Needing more medication over time', 'Eventually may need insulin injections'],
      },
      {
        areaName: 'Blood vessels',
        structureId: 'circulatory-system',
        howAffected: {
          simple: 'High blood sugar damages the walls of blood vessels, making them stiffer and more clogged. This affects blood flow throughout your body.',
          detailed: 'Chronic hyperglycemia damages the endothelium (inner lining) of blood vessels through several mechanisms. Sugar sticks to proteins (glycation), creating substances called AGEs that cause inflammation and vessel stiffness. This accelerates atherosclerosis and microvascular disease.',
          comprehensive: 'Vascular complications arise from: 1) Formation of advanced glycation end-products (AGEs) that cross-link collagen and activate RAGE receptors, 2) Activation of protein kinase C (PKC), 3) Increased flux through the polyol pathway (sorbitol accumulation), 4) Hexosamine pathway activation, 5) Oxidative stress from mitochondrial superoxide production. Macrovascular disease (coronary, cerebral, peripheral arteries) and microvascular disease (retina, kidney, nerves) result.',
        },
        relatedSymptoms: ['Risk of heart attack, stroke', 'Eye problems', 'Kidney disease', 'Foot problems', 'Erectile dysfunction'],
      },
      {
        areaName: 'Eyes (retina)',
        structureId: 'eye-retina',
        howAffected: {
          simple: 'The tiny blood vessels in the back of your eye can be damaged by high blood sugar, affecting your vision.',
          detailed: 'The retina has the highest metabolic rate of any tissue and is especially vulnerable to high blood sugar. Damage to small blood vessels causes them to leak or become blocked. New, fragile vessels may grow and bleed.',
          comprehensive: 'Diabetic retinopathy progresses through stages: 1) Non-proliferative: microaneurysms, hemorrhages, hard exudates, cotton-wool spots, 2) Proliferative: neovascularization from hypoxia-induced VEGF release, vitreous hemorrhage, tractional retinal detachment. Macular edema can occur at any stage. Duration and glycemic control are major risk factors.',
        },
        relatedSymptoms: ['Blurry vision', 'Floaters', 'Vision loss if not treated'],
      },
      {
        areaName: 'Kidneys',
        structureId: 'kidneys',
        howAffected: {
          simple: 'Your kidneys filter your blood. High blood sugar damages the tiny filtering units, so they start leaking protein and eventually stop working as well.',
          detailed: 'The glomeruli (kidney filters) are highly susceptible to damage from high blood sugar and high blood pressure. Initially, they become "leaky" and allow protein into the urine. Over time, scar tissue forms, reducing kidney function.',
          comprehensive: 'Diabetic nephropathy involves: glomerular hyperfiltration (early), mesangial expansion, glomerular basement membrane thickening, podocyte injury and loss, tubular damage, and interstitial fibrosis. Key mediators include TGF-β, RAAS activation, AGEs, and oxidative stress. Progression: normoalbuminuria → microalbuminuria → macroalbuminuria → declining GFR → ESRD.',
        },
        relatedSymptoms: ['Protein in urine', 'Swelling in legs/feet', 'Fatigue as kidneys decline', 'May need dialysis if severe'],
      },
      {
        areaName: 'Nerves',
        structureId: 'peripheral-nervous-system',
        howAffected: {
          simple: 'High blood sugar damages nerves, especially in your feet and hands. This causes numbness, tingling, or pain.',
          detailed: 'Peripheral nerves are vulnerable to high blood sugar through direct metabolic effects and damage to the small blood vessels that nourish them. The longest nerves are affected first (feet before hands). Autonomic nerves controlling internal organs can also be affected.',
          comprehensive: 'Diabetic neuropathy occurs via: polyol pathway activation (sorbitol accumulation causing osmotic stress), AGE formation, PKC activation, oxidative stress, and vasa nervorum damage. Types include: 1) Distal symmetric polyneuropathy (most common), 2) Autonomic neuropathy, 3) Mononeuropathies, 4) Diabetic amyotrophy. Risk factors include duration, glycemic control, and height (longer nerves).',
        },
        relatedSymptoms: ['Numbness, tingling in feet/hands', 'Burning pain', 'Balance problems', 'Stomach/bladder problems if autonomic nerves affected'],
      },
      {
        areaName: 'Heart',
        structureId: 'heart',
        howAffected: {
          simple: 'Diabetes increases your risk of heart disease because of damage to blood vessels and the heart muscle itself.',
          detailed: 'People with diabetes have 2-4 times the risk of heart disease. High blood sugar accelerates atherosclerosis (artery clogging), damages the heart muscle directly, and is associated with other risk factors (high blood pressure, abnormal cholesterol).',
          comprehensive: 'Cardiovascular risk in diabetes involves: 1) Accelerated atherosclerosis with more diffuse, calcified, and unstable plaques, 2) Diabetic cardiomyopathy (myocardial fibrosis, diastolic dysfunction independent of CAD), 3) Association with atherogenic dyslipidemia (small dense LDL, high triglycerides, low HDL), 4) Hypertension, 5) Hypercoagulability and platelet dysfunction. The "metabolic memory" effect means early damage persists even after glycemic control is achieved.',
        },
        relatedSymptoms: ['Chest pain/pressure', 'Shortness of breath', 'Heart attack', 'Heart failure'],
      },
    ],

    symptomExplanations: [
      {
        symptom: 'Frequent urination',
        whyYouFeelThis: {
          simple: 'When blood sugar is high, your kidneys work overtime to remove the extra sugar. They do this by pulling water from your body to flush it out, so you make more urine.',
          detailed: 'Normally, your kidneys reabsorb all filtered glucose. But when blood glucose exceeds about 180 mg/dL (the "renal threshold"), the kidneys can\'t reabsorb it all. The excess glucose spills into urine and brings water with it (osmotic diuresis).',
          comprehensive: 'Glucose is freely filtered at the glomerulus and reabsorbed in the proximal tubule via SGLT2 (90%) and SGLT1 (10%) transporters. When filtered glucose exceeds the transport maximum (~375 mg/min), glucosuria occurs. Glucose creates an osmotic gradient preventing water reabsorption, causing polyuria.',
        },
        whatMakesItBetterWorse: {
          better: ['Good blood sugar control', 'Medications that lower blood sugar'],
          worse: ['High blood sugar', 'Eating large amounts of carbohydrates', 'Missing medications'],
        },
        whenToWorry: 'If you\'re urinating so frequently that you\'re dehydrated, very thirsty all the time, or have significant weight loss, see your doctor. These could be signs of very high blood sugar.',
      },
      {
        symptom: 'Excessive thirst',
        whyYouFeelThis: {
          simple: 'Because you\'re losing so much water through urination, your body becomes dehydrated. This triggers intense thirst to try to replace the lost fluid.',
          detailed: 'The osmotic diuresis from elevated blood sugar causes fluid loss and dehydration. Your brain\'s thirst center detects the increased blood concentration and triggers a strong thirst response.',
          comprehensive: 'Polydipsia results from increased serum osmolality detected by hypothalamic osmoreceptors. Additionally, intracellular dehydration occurs as water shifts to the hyperosmolar extracellular space. The thirst response is appropriate compensation for fluid losses.',
        },
        whatMakesItBetterWorse: {
          better: ['Good blood sugar control', 'Staying hydrated (with water, not sugary drinks)'],
          worse: ['High blood sugar', 'Drinking sugary beverages', 'Hot weather'],
        },
        whenToWorry: 'If you\'re drinking gallons of water and still feel extremely thirsty, or if you\'re unable to keep up with fluid losses, seek medical attention.',
      },
      {
        symptom: 'Fatigue',
        whyYouFeelThis: {
          simple: 'Even though there\'s plenty of sugar in your blood, it can\'t get into your cells properly to make energy. Your cells are "starving" even though there\'s food all around them.',
          detailed: 'Glucose is your cells\' primary fuel. When insulin resistance prevents glucose from entering cells efficiently, they can\'t produce optimal energy (ATP). Your muscles, brain, and other organs don\'t get the fuel they need.',
          comprehensive: 'Fatigue in diabetes is multifactorial: 1) Cellular energy deficit from impaired glucose uptake, 2) Increased gluconeogenesis consumes energy, 3) Sleep disruption from nocturia, 4) Depression (common comorbidity), 5) Anemia (from CKD or medication), 6) Hypothyroidism (more common in diabetes). Additionally, glycemic variability (swings between high and low) causes symptomatic fatigue.',
        },
        whatMakesItBetterWorse: {
          better: ['Stable blood sugars', 'Regular exercise', 'Good sleep', 'Treating depression if present'],
          worse: ['Very high or very low blood sugars', 'Blood sugar swings', 'Poor sleep', 'Stress'],
        },
        whenToWorry: 'If fatigue is severe enough to interfere with daily activities, is accompanied by confusion or weakness, or doesn\'t improve with better blood sugar control, see your doctor.',
      },
      {
        symptom: 'Blurry vision',
        whyYouFeelThis: {
          simple: 'High blood sugar changes the shape of your eye\'s lens, causing blurry vision. This is usually temporary when blood sugar is controlled.',
          detailed: 'The lens of your eye absorbs glucose (it doesn\'t need insulin). When blood sugar is high, excess glucose enters the lens and is converted to sorbitol, which doesn\'t easily leave. The sorbitol draws in water by osmosis, swelling the lens and changing its focusing ability.',
          comprehensive: 'Transient refractive changes occur due to osmotic shifts in the lens from sorbitol accumulation via the aldose reductase pathway. This is distinct from diabetic retinopathy (chronic microvascular damage). The lens swelling is usually myopic (nearsighted). It can take 6-8 weeks of stable glycemia for vision to fully normalize, so new glasses should be delayed.',
        },
        whatMakesItBetterWorse: {
          better: ['Stable, well-controlled blood sugar (may take weeks to improve)'],
          worse: ['Rapidly changing blood sugar levels', 'Consistently high blood sugar'],
        },
        whenToWorry: 'If you have sudden vision loss, flashes of light, a "curtain" over part of your vision, or many new floaters, seek emergency care - these could indicate a retinal problem.',
      },
      {
        symptom: 'Slow-healing wounds',
        whyYouFeelThis: {
          simple: 'High blood sugar impairs your immune system\'s ability to fight infection and slows down the healing process.',
          detailed: 'Healing requires a healthy immune response, good blood flow, and collagen formation - all of which are impaired by high blood sugar. Elevated glucose also feeds bacteria, making infections more likely.',
          comprehensive: 'Impaired wound healing in diabetes involves: 1) Neutrophil dysfunction (impaired chemotaxis, phagocytosis, oxidative burst), 2) Impaired macrophage function (reduced cytokine release, antigen presentation), 3) Microangiopathy reducing tissue perfusion, 4) Neuropathy causing unnoticed injury, 5) Impaired collagen synthesis and cross-linking from AGEs, 6) Reduced growth factor expression, 7) Hyperglycemic environment promoting bacterial growth.',
        },
        whatMakesItBetterWorse: {
          better: ['Good blood sugar control', 'Proper wound care', 'Good nutrition'],
          worse: ['High blood sugar', 'Poor circulation', 'Smoking'],
        },
        whenToWorry: 'Any foot wound that doesn\'t start improving within a few days, any spreading redness/warmth around a wound, fever, or a wound with bad smell needs prompt medical attention.',
      },
    ],

    dailyLifeImpact: [
      {
        activity: 'Eating meals',
        howAffected: 'You need to be more thoughtful about what and when you eat to avoid blood sugar spikes.',
        adaptations: ['Count carbohydrates or follow a balanced plate method', 'Eat at regular times', 'Choose whole grains over refined', 'Pair carbs with protein and healthy fats to slow absorption'],
      },
      {
        activity: 'Exercise',
        howAffected: 'Exercise affects blood sugar - this is actually good, but you need to understand how your body responds.',
        adaptations: ['Check blood sugar before exercise if taking insulin or certain medications', 'Carry a fast-acting carb for lows', 'Stay hydrated', 'Exercise can lower blood sugar for up to 24 hours'],
      },
      {
        activity: 'Traveling',
        howAffected: 'Time zone changes, different foods, and disrupted routines can affect blood sugar management.',
        adaptations: ['Carry supplies in carry-on luggage', 'Bring more than enough medication', 'Carry a doctor\'s letter for medications/supplies', 'Check blood sugar more often', 'Keep snacks available'],
      },
      {
        activity: 'Sick days',
        howAffected: 'Illness raises blood sugar even if you\'re not eating - stress hormones cause your liver to release extra glucose.',
        adaptations: ['Have a sick day plan from your doctor', 'Check blood sugar more frequently', 'Stay hydrated', 'Never stop diabetes medication without consulting doctor', 'Know when to seek help'],
      },
      {
        activity: 'Work/career',
        howAffected: 'Diabetes is manageable in almost any career, but some accommodations may help.',
        adaptations: ['Take short breaks for blood sugar checks if needed', 'Keep snacks at your desk for lows', 'Know your rights - diabetes is protected under ADA', 'For high-risk jobs, work with your doctor on safety plans'],
      },
    ],
  },

  diseaseJourney: {
    naturalHistory: {
      simple: 'Type 2 diabetes usually starts slowly and gets worse over time if not managed. But with good care, many people keep it under control for decades.',
      detailed: 'The disease typically progresses through stages: prediabetes (insulin resistance with blood sugar slightly elevated), early diabetes (usually manageable with lifestyle and oral medications), and progressive diabetes (may require multiple medications and eventually insulin). The rate of progression varies enormously based on genetics and management.',
      comprehensive: 'The natural history involves a long pre-clinical phase of progressive insulin resistance and compensatory hyperinsulinemia. Clinical diabetes manifests when beta-cell function declines below ~50% of normal. Without intervention, beta-cell function continues to decline (~4%/year in UKPDS), typically requiring treatment intensification every 3-5 years. However, aggressive early intervention (achieving HbA1c <6.5%) and weight loss can induce "remission" in some patients, particularly early in disease.',
    },

    prognosis: {
      category: 'manageable-stable',
      explanation: {
        simple: 'With proper treatment and self-care, most people with type 2 diabetes live long, healthy lives. It requires ongoing attention, but it doesn\'t have to limit you.',
        detailed: 'Type 2 diabetes is a chronic condition, but outcomes have improved dramatically with modern treatment. Good blood sugar control significantly reduces the risk of complications. Many people maintain excellent quality of life for decades.',
        comprehensive: 'Prognosis is highly variable depending on glycemic control, cardiovascular risk management, and early detection/treatment of complications. Intensive glucose control (UKPDS, ACCORD, ADVANCE) reduces microvascular complications by 25-40%. Cardiovascular mortality has decreased ~40% over recent decades. Life expectancy reduction is now estimated at 3-10 years depending on control and comorbidities, dramatically improved from historical estimates.',
      },
      factorsAffectingOutcome: [
        'How well blood sugar is controlled (HbA1c)',
        'Blood pressure control',
        'Cholesterol management',
        'Smoking status',
        'Weight management',
        'Regular screening for complications',
        'Medication adherence',
        'Engagement with healthcare team',
      ],
      whatYouCanControl: [
        'Diet and eating habits',
        'Physical activity level',
        'Taking medications as prescribed',
        'Monitoring blood sugar as recommended',
        'Attending regular check-ups',
        'Not smoking',
        'Managing stress',
        'Getting adequate sleep',
      ],
    },

    timeline: [
      {
        timeframe: 'First few weeks after diagnosis',
        whatToExpect: 'Learning phase - understanding the condition, starting medications, learning to monitor. Blood sugar may improve quickly with lifestyle changes.',
        milestones: ['First meeting with diabetes educator', 'Learning to check blood sugar', 'Understanding carbohydrates', 'Starting initial medications'],
      },
      {
        timeframe: 'First 3-6 months',
        whatToExpect: 'Stabilization phase - finding what works for you. Your healthcare team will adjust medications. You\'ll develop routines.',
        milestones: ['First HbA1c check (shows average of past 3 months)', 'Medication adjustments as needed', 'Eye exam baseline', 'Foot exam'],
      },
      {
        timeframe: 'First year',
        whatToExpect: 'Establishing long-term patterns. Most people see significant improvement in blood sugar. Annual comprehensive exams establish your baseline.',
        milestones: ['HbA1c at goal (<7% for most people)', 'All baseline screenings complete', 'Understanding your patterns', 'Building confidence in self-management'],
      },
      {
        timeframe: 'Ongoing (years 2-10)',
        whatToExpect: 'Maintenance phase. Regular monitoring, occasional medication adjustments. May need treatment intensification over time as disease progresses.',
        milestones: ['Annual comprehensive exams', 'Medication adjustments every few years typical', 'Continued screening for complications', 'Staying engaged with healthy lifestyle'],
      },
      {
        timeframe: 'Long-term (10+ years)',
        whatToExpect: 'With good control, many people have minimal complications even after decades. May need more medications including possibly insulin. Vigilance for complications continues.',
        milestones: ['Continue regular screening', 'Address any complications early', 'Adjust goals based on overall health', 'Legacy effect - good early control pays dividends'],
      },
    ],

    hopeAndReality: 'Here\'s the honest truth: Type 2 diabetes is a serious condition that requires ongoing attention. But it\'s also one of the most manageable chronic diseases. The tools we have today - medications, monitoring technology, and understanding of lifestyle interventions - are better than ever. Many people with type 2 diabetes live full, active lives well into old age without significant complications. The key is engagement: staying involved with your healthcare team, making sustainable lifestyle changes, and taking medications consistently. This is not a death sentence - it\'s a call to action.',
  },

  treatmentRationale: {
    whyTreat: {
      simple: 'Treating diabetes protects your blood vessels and organs from damage. It helps you feel better now and prevents serious problems in the future.',
      detailed: 'High blood sugar is a slow poison for your blood vessels and nerves. Every major complication of diabetes - heart disease, stroke, kidney failure, blindness, amputation - can be significantly reduced or prevented with good blood sugar control. Treatment also helps with day-to-day symptoms like fatigue, thirst, and frequent urination.',
      comprehensive: 'Treatment goals are both symptomatic relief (resolution of polyuria, polydipsia, fatigue, weight loss) and prevention of long-term complications. Landmark trials (DCCT, UKPDS, ADVANCE) demonstrated that intensive glucose control reduces microvascular complications by 25-40%. The "legacy effect" shows that benefits of early good control persist for decades. Additionally, cardiovascular risk reduction through comprehensive management (glucose, BP, lipids) has dramatically improved outcomes.',
    },

    goals: [
      {
        goal: 'HbA1c below 7% for most adults',
        whyImportant: 'HbA1c reflects your average blood sugar over 3 months. Keeping it below 7% dramatically reduces risk of complications.',
        howMeasured: 'Blood test every 3-6 months',
        realisticTimeframe: '3-6 months to reach goal in most cases',
      },
      {
        goal: 'Fasting blood sugar 80-130 mg/dL',
        whyImportant: 'Morning blood sugar reflects how well your overnight glucose production is controlled.',
        howMeasured: 'Home blood sugar monitor before breakfast',
        realisticTimeframe: 'Varies - may take medication adjustments',
      },
      {
        goal: 'Blood sugar <180 mg/dL after meals',
        whyImportant: 'Post-meal spikes contribute to HbA1c and may independently increase cardiovascular risk.',
        howMeasured: 'Home blood sugar monitor 2 hours after first bite of meal',
        realisticTimeframe: 'Dietary changes can show quick results',
      },
      {
        goal: 'Blood pressure <130/80 mmHg',
        whyImportant: 'High blood pressure multiplies the damage from high blood sugar. Together they are especially hard on kidneys and heart.',
        howMeasured: 'Blood pressure checks at visits and home monitoring',
        realisticTimeframe: '1-2 months with medication and lifestyle changes',
      },
      {
        goal: 'LDL cholesterol <100 mg/dL (or <70 if heart disease)',
        whyImportant: 'Diabetes dramatically increases cardiovascular risk. Statins reduce that risk by about 25-35%.',
        howMeasured: 'Fasting lipid panel',
        realisticTimeframe: '6-8 weeks after starting statin',
      },
    ],

    approaches: [
      {
        name: 'Lifestyle changes (foundation of treatment)',
        type: 'lifestyle',
        whatItDoes: {
          simple: 'Eating better and moving more improves how your body uses insulin and can lower blood sugar by itself.',
          detailed: 'A healthy diet reduces blood sugar spikes and can improve insulin sensitivity. Exercise independently improves glucose uptake by muscles and enhances insulin sensitivity. Weight loss can dramatically improve blood sugar control.',
          comprehensive: 'Lifestyle intervention targets multiple mechanisms: dietary modification reduces glycemic load and improves insulin secretion patterns; exercise increases GLUT4 translocation and mitochondrial density in skeletal muscle; weight loss reduces adipokine-mediated inflammation and hepatic insulin resistance. In early disease, lifestyle alone may achieve remission.',
        },
        whyRecommended: 'Everyone with type 2 diabetes benefits from lifestyle changes. For some, it\'s enough by itself. For others, it makes medications work better.',
        prosAndCons: {
          benefits: ['No side effects', 'Improves overall health', 'Can reduce need for medications', 'You\'re in control', 'Benefits beyond diabetes'],
          drawbacks: ['Requires sustained effort', 'Results can be slow', 'May not be enough alone', 'Challenging to maintain long-term'],
        },
      },
      {
        name: 'Metformin',
        type: 'medication',
        whatItDoes: {
          simple: 'Metformin helps your liver make less sugar and helps your body use insulin better. It\'s the most common first diabetes medicine.',
          detailed: 'Metformin primarily works by reducing glucose production by the liver (which makes too much in diabetes). It also improves insulin sensitivity in muscles. It doesn\'t cause low blood sugar when used alone.',
          comprehensive: 'Metformin\'s primary mechanism is hepatic gluconeogenesis inhibition via activation of AMPK and modulation of the mitochondrial respiratory chain. Secondary effects include improved peripheral insulin sensitivity and reduced intestinal glucose absorption. It does not stimulate insulin secretion, hence low hypoglycemia risk. Also reduces cardiovascular events and has potential longevity benefits.',
        },
        whyRecommended: 'First-line medication for almost everyone due to effectiveness, safety record, low cost, weight neutrality, and cardiovascular benefits.',
        alternatives: ['Other oral medications if metformin not tolerated'],
        prosAndCons: {
          benefits: ['Well-established safety record (60+ years)', 'Inexpensive', 'Doesn\'t cause weight gain', 'Cardiovascular benefits', 'Low hypoglycemia risk'],
          drawbacks: ['GI side effects (diarrhea, nausea) in some', 'Cannot use with kidney disease', 'B12 deficiency with long-term use'],
        },
      },
      {
        name: 'SGLT2 inhibitors (empagliflozin, dapagliflozin, etc.)',
        type: 'medication',
        whatItDoes: {
          simple: 'These medicines make your kidneys filter out extra sugar into your urine, lowering blood sugar.',
          detailed: 'SGLT2 inhibitors block glucose reabsorption in the kidneys, causing you to urinate out about 50-80 grams of glucose daily. This lowers blood sugar and also causes modest weight loss and blood pressure reduction.',
          comprehensive: 'SGLT2 inhibitors block the sodium-glucose cotransporter 2 in the proximal tubule, reducing the renal threshold for glycosuria. Beyond glucose lowering, they improve cardiovascular and renal outcomes through mechanisms including reduced preload, improved cardiac energetics (ketone utilization), reduced inflammation, and tubuloglomerular feedback modulation. They reduce HF hospitalization by ~30% and slow CKD progression.',
        },
        whyRecommended: 'Especially important if you have heart disease, heart failure, or kidney disease - they provide protection beyond just lowering sugar.',
        alternatives: ['GLP-1 agonists offer similar cardiorenal benefits'],
        prosAndCons: {
          benefits: ['Weight loss (~3-4 kg)', 'Blood pressure reduction', 'Protects heart and kidneys', 'Low hypoglycemia risk'],
          drawbacks: ['Increased urinary infections', 'Genital yeast infections', 'Rare risk of ketoacidosis', 'Cost'],
        },
      },
      {
        name: 'GLP-1 receptor agonists (semaglutide, liraglutide, etc.)',
        type: 'medication',
        whatItDoes: {
          simple: 'These medicines copy a natural gut hormone that helps release insulin, slows stomach emptying, and reduces appetite. They cause significant weight loss.',
          detailed: 'GLP-1 agonists mimic incretin hormones released by your gut after eating. They stimulate insulin secretion in a glucose-dependent manner, suppress glucagon, slow gastric emptying, and reduce appetite. Most are injections (weekly or daily) though there\'s now an oral form.',
          comprehensive: 'GLP-1 RAs activate GLP-1 receptors on pancreatic beta cells (enhancing glucose-stimulated insulin secretion), alpha cells (suppressing glucagon), gastric parietal cells (slowing emptying), and hypothalamic nuclei (reducing appetite). They also have cardioprotective effects: reduce atherosclerosis, inflammation, and reduce MACE events by 12-26%. Weight loss averages 5-15% depending on agent.',
        },
        whyRecommended: 'Excellent for people who need significant weight loss, have heart disease, or need strong glucose lowering beyond metformin.',
        alternatives: ['SGLT2 inhibitors offer alternative cardiorenal benefits'],
        prosAndCons: {
          benefits: ['Significant weight loss (5-15%)', 'Cardiovascular protection', 'Strong glucose lowering', 'Low hypoglycemia risk'],
          drawbacks: ['Injections (mostly)', 'Nausea, especially initially', 'Cost', 'Rare pancreatitis risk'],
        },
      },
      {
        name: 'Insulin',
        type: 'medication',
        whatItDoes: {
          simple: 'Insulin is the hormone your body isn\'t making enough of. Injecting insulin directly replaces what\'s missing.',
          detailed: 'Insulin replaces the hormone your pancreas can\'t produce adequately. There are many types: long-acting (works all day), mealtime (covers food), and combinations. Many people eventually need insulin as the disease progresses.',
          comprehensive: 'Exogenous insulin therapy becomes necessary when beta-cell function is insufficient for glycemic control despite other agents. Basal insulin (glargine, detemir, degludec) provides 24-hour coverage suppressing hepatic glucose output. Prandial insulin (lispro, aspart, glulisine) covers meal-related glucose excursions. Premixed formulations combine both. Titration algorithms adjust doses based on fasting and pre-meal glucose targets.',
        },
        whyRecommended: 'Used when other medications aren\'t enough, when blood sugar is very high at diagnosis, or in certain situations like pregnancy or hospitalization.',
        prosAndCons: {
          benefits: ['Most effective at lowering blood sugar', 'Natural hormone', 'Can always achieve control', 'Many formulations to match lifestyle'],
          drawbacks: ['Injections', 'Requires more monitoring', 'Hypoglycemia risk', 'Weight gain', 'Complexity'],
        },
      },
    ],

    untreatedOutcome: 'Without treatment, diabetes causes progressive damage to blood vessels and nerves. Over years, this leads to serious complications: heart attack and stroke (2-4 times more likely), kidney failure (diabetes is the #1 cause of dialysis), blindness (leading cause of adult blindness), amputations (leading cause of non-traumatic amputations), and nerve damage causing chronic pain or numbness. Very high blood sugar can cause diabetic ketoacidosis or hyperosmolar syndrome - life-threatening emergencies. The good news: these outcomes are largely preventable with treatment.',
  },

  livingWith: {
    dailyManagement: [
      {
        task: 'Take medications as prescribed',
        frequency: 'Daily (timing varies by medication)',
        whyImportant: 'Medications only work if you take them consistently. Skipping doses lets blood sugar rise.',
        howToDo: 'Use a pill organizer, set phone reminders, keep medications visible (not hidden in a cabinet).',
        tips: ['Take at the same time daily', 'Refill before you run out', 'Don\'t stop without asking your doctor'],
      },
      {
        task: 'Check blood sugar (if recommended)',
        frequency: 'Varies - your doctor will advise (may be daily, several times daily, or not needed)',
        whyImportant: 'Monitoring helps you understand how food, activity, and medications affect your blood sugar.',
        howToDo: 'Wash hands, prick finger with lancet, apply blood to strip, record result.',
        tips: ['Rotate finger sites', 'Check before meals to guide food choices', 'Log results to show your doctor'],
      },
      {
        task: 'Eat balanced meals',
        frequency: 'Every meal',
        whyImportant: 'Food is the main thing that raises blood sugar. Balanced meals prevent spikes.',
        howToDo: 'Use the "plate method": half the plate vegetables, quarter protein, quarter starch/grain. Choose whole grains over refined.',
        tips: ['Don\'t skip meals', 'Watch portion sizes', 'Pair carbs with protein', 'Limit sugary drinks'],
      },
      {
        task: 'Stay physically active',
        frequency: 'Most days - aim for 150 minutes/week',
        whyImportant: 'Exercise directly lowers blood sugar and improves insulin sensitivity for up to 24-48 hours.',
        howToDo: 'Brisk walking, swimming, biking - whatever you enjoy and will sustain. Include some resistance training.',
        tips: ['Start slowly if you\'ve been inactive', 'Even 10-minute walks help', 'Check feet for blisters after activity'],
      },
      {
        task: 'Check your feet',
        frequency: 'Daily',
        whyImportant: 'Diabetes can reduce feeling in feet, so you might not notice cuts or blisters that can become serious infections.',
        howToDo: 'Look at the tops, bottoms, and between toes. Use a mirror for hard-to-see areas. Feel for areas of warmth or tenderness.',
        tips: ['Wear comfortable, well-fitting shoes', 'Never go barefoot', 'See a podiatrist if problems arise'],
      },
    ],

    lifestyleChanges: [
      {
        change: 'Reduce refined carbohydrates and added sugars',
        category: 'diet',
        whyItHelps: {
          simple: 'Refined carbs (white bread, white rice, sugary foods) cause rapid blood sugar spikes. Reducing them keeps blood sugar more stable.',
          detailed: 'Foods high on the glycemic index are rapidly digested, causing sharp glucose spikes that stress insulin response. Replacing with lower-glycemic options (whole grains, legumes, vegetables) results in slower, more gradual glucose absorption.',
          comprehensive: 'Lower glycemic index/load diets improve glycemic control, reduce postprandial hyperglycemia, and may preserve beta-cell function by reducing glucotoxicity. Meta-analyses show ~0.4% HbA1c reduction with low-GI diets. Fiber intake (25-30g/day) slows glucose absorption and improves satiety.',
        },
        howToImplement: ['Choose whole grain bread over white', 'Replace white rice with brown rice or quinoa', 'Limit sugary drinks - even fruit juice', 'Read labels for hidden sugars', 'Use the "plate method" to portion carbs'],
        evidenceStrength: 'strong',
        expectedBenefit: 'Can reduce HbA1c by 0.3-0.5% and help with weight management',
      },
      {
        change: 'Increase physical activity',
        category: 'exercise',
        whyItHelps: {
          simple: 'Exercise helps your cells use sugar for energy without needing as much insulin. It\'s like opening a back door for sugar to enter cells.',
          detailed: 'Exercise increases glucose uptake by muscles through both insulin-dependent and insulin-independent pathways. Muscle contractions activate GLUT4 transporters directly. Regular exercise also increases mitochondria and improves overall metabolic health.',
          comprehensive: 'Exercise acutely increases muscle glucose uptake via AMPK-mediated GLUT4 translocation (insulin-independent). Chronic exercise increases muscle insulin sensitivity, mitochondrial density, and capillary density. Meta-analyses show ~0.7% HbA1c reduction with structured exercise. Both aerobic and resistance training are beneficial.',
        },
        howToImplement: ['Start with walking - it\'s free and low-risk', 'Aim for 150 min/week of moderate activity', 'Include resistance exercises 2-3 times/week', 'Break up sitting time - stand every 30 minutes', 'Find activities you enjoy'],
        evidenceStrength: 'strong',
        expectedBenefit: 'Can reduce HbA1c by 0.5-0.7%, helps with weight, improves cardiovascular health',
      },
      {
        change: 'Lose excess weight (if applicable)',
        category: 'diet',
        whyItHelps: {
          simple: 'Extra weight, especially around the belly, makes insulin resistance worse. Losing even a little weight significantly improves blood sugar.',
          detailed: 'Adipose tissue, especially visceral fat, releases inflammatory cytokines and free fatty acids that cause insulin resistance. Weight loss reduces this burden and can dramatically improve blood sugar - some people achieve "remission" with sufficient weight loss.',
          comprehensive: 'Weight loss of 5-10% improves insulin sensitivity, reduces hepatic steatosis, and improves beta-cell function. The DiRECT trial showed 46% of patients achieved diabetes remission with ~15kg weight loss. Mechanisms include reduced adipokine-mediated inflammation, decreased free fatty acid flux, and improved adiponectin levels.',
        },
        howToImplement: ['Aim for 5-10% initial weight loss', 'Create modest calorie deficit (500 cal/day = 1 lb/week)', 'Focus on sustainable changes, not crash diets', 'Consider weight loss medications if needed', 'Bariatric surgery is highly effective for severe obesity'],
        evidenceStrength: 'strong',
        expectedBenefit: 'Every 1 kg (2.2 lbs) lost reduces HbA1c by ~0.1%. Significant weight loss can put diabetes into remission.',
      },
      {
        change: 'Quit smoking',
        category: 'habits',
        whyItHelps: {
          simple: 'Smoking makes insulin resistance worse and dramatically increases the risk of all diabetes complications, especially heart disease and poor circulation.',
          detailed: 'Smoking causes endothelial dysfunction, accelerates atherosclerosis, and worsens insulin resistance. It increases cardiovascular risk (already elevated in diabetes) by an additional 2-3 fold. It also impairs wound healing.',
          comprehensive: 'Nicotine directly impairs insulin signaling. Smoking accelerates all macro- and microvascular complications. Compared to non-smokers with diabetes, smokers have 2-fold increased mortality, dramatically higher rates of nephropathy, retinopathy, and amputation. Cessation significantly reduces risk.',
        },
        howToImplement: ['Talk to your doctor about quit aids (patches, medications)', 'Set a quit date', 'Tell family and friends for support', 'Identify triggers and have a plan', 'Don\'t give up if you slip - keep trying'],
        evidenceStrength: 'strong',
        expectedBenefit: 'Reduces cardiovascular risk, improves circulation, helps wound healing. Never too late to benefit.',
      },
      {
        change: 'Prioritize sleep',
        category: 'sleep',
        whyItHelps: {
          simple: 'Poor sleep disrupts hormones that control blood sugar and appetite. It makes insulin resistance worse and makes you crave unhealthy foods.',
          detailed: 'Sleep deprivation increases cortisol and reduces insulin sensitivity. It also increases ghrelin (hunger hormone) and decreases leptin (satiety hormone). Sleep apnea, common in diabetes, causes intermittent hypoxia that worsens insulin resistance.',
          comprehensive: 'Sleep restriction impairs glucose tolerance through multiple mechanisms: increased sympathetic activity, elevated cortisol, altered growth hormone and melatonin, and impaired insulin signaling. Obstructive sleep apnea (OSA), present in 40-70% of type 2 diabetes patients, independently worsens insulin resistance via intermittent hypoxia.',
        },
        howToImplement: ['Aim for 7-9 hours per night', 'Keep consistent sleep/wake times', 'Screen for sleep apnea if you snore or feel tired despite sleeping', 'Avoid screens before bed', 'Create a cool, dark sleep environment'],
        evidenceStrength: 'moderate',
        expectedBenefit: 'Improves insulin sensitivity, helps with weight management, improves energy and mood',
      },
      {
        change: 'Manage stress',
        category: 'stress',
        whyItHelps: {
          simple: 'Stress hormones (cortisol, adrenaline) directly raise blood sugar. Chronic stress also makes it harder to eat well and exercise.',
          detailed: 'Stress activates the hypothalamic-pituitary-adrenal axis and sympathetic nervous system, releasing cortisol and catecholamines. These hormones increase hepatic glucose production and worsen insulin resistance. Stress also triggers emotional eating.',
          comprehensive: 'Chronic stress causes sustained cortisol elevation, promoting gluconeogenesis, visceral adiposity, and insulin resistance. Psychological distress is associated with poorer glycemic control and increased complications. Mind-body interventions (mindfulness, yoga) have shown modest improvements in HbA1c (~0.3%) and quality of life.',
        },
        howToImplement: ['Identify major stressors and address what you can', 'Regular physical activity reduces stress', 'Mindfulness meditation - even 10 minutes helps', 'Connect with supportive people', 'Consider counseling if overwhelmed'],
        evidenceStrength: 'moderate',
        expectedBenefit: 'May improve blood sugar by 0.2-0.3%, improves quality of life and mental health',
      },
    ],

    warningSignsToWatch: [
      {
        sign: 'Blood sugar consistently above 250 mg/dL',
        whatItMightMean: 'Your diabetes may be poorly controlled, or you may have an infection or other illness raising blood sugar',
        urgency: 'call-doctor-today',
        actionToTake: 'Call your doctor\'s office today. Check for ketones if you have type 1 or were told to. Stay hydrated.',
      },
      {
        sign: 'Blood sugar above 300 mg/dL with nausea, vomiting, or confusion',
        whatItMightMean: 'You may be developing diabetic ketoacidosis (DKA) or hyperosmolar syndrome - both serious conditions',
        urgency: 'go-to-er-now',
        actionToTake: 'Go to the emergency room immediately. These can be life-threatening.',
      },
      {
        sign: 'Symptoms of low blood sugar: shakiness, sweating, confusion, fast heartbeat',
        whatItMightMean: 'Your blood sugar may be too low (hypoglycemia) - this can be dangerous',
        urgency: 'go-to-er-now',
        actionToTake: 'If conscious: eat 15g fast carbs (4 glucose tabs, 4 oz juice), wait 15 min, recheck. If severe/unconscious: call 911.',
      },
      {
        sign: 'Chest pain, pressure, or shortness of breath',
        whatItMightMean: 'Possible heart attack - remember, diabetes increases heart disease risk and can cause "silent" heart attacks',
        urgency: 'emergency-911',
        actionToTake: 'Call 911 immediately. Do not drive yourself.',
      },
      {
        sign: 'Sudden weakness on one side, slurred speech, face drooping',
        whatItMightMean: 'Possible stroke - diabetes increases stroke risk',
        urgency: 'emergency-911',
        actionToTake: 'Call 911 immediately. Note the time symptoms started.',
      },
      {
        sign: 'Foot wound that won\'t heal or looks infected (red, warm, swollen, draining)',
        whatItMightMean: 'Diabetic foot infection - can progress rapidly and lead to amputation if not treated',
        urgency: 'call-doctor-today',
        actionToTake: 'Call your doctor immediately. May need same-day evaluation. Keep foot elevated.',
      },
      {
        sign: 'New vision changes: blurry vision, floaters, dark spots, or vision loss',
        whatItMightMean: 'Possible diabetic eye disease - retinopathy, macular edema, or vitreous hemorrhage',
        urgency: 'call-doctor-today',
        actionToTake: 'If sudden significant vision loss, go to ER. Otherwise, call your eye doctor today.',
      },
    ],

    whenToGetHelp: [
      {
        situation: 'Blood sugar over 300 mg/dL with confusion, vomiting, or fruity breath',
        urgency: 'emergency-911',
        whereTogo: 'emergency-room',
        whatToSay: 'I have diabetes and my blood sugar is very high. I\'m having [symptoms]. I may have DKA or HHS.',
      },
      {
        situation: 'Severe low blood sugar (unable to treat yourself, confusion, loss of consciousness)',
        urgency: 'emergency-911',
        whereTogo: 'emergency-room',
        whatToSay: 'I have diabetes and I\'m having severe low blood sugar. They\'re unresponsive/confused.',
      },
      {
        situation: 'Chest pain or suspected heart attack',
        urgency: 'emergency-911',
        whereTogo: 'emergency-room',
        whatToSay: 'I\'m having chest pain/pressure. I have diabetes which increases my heart attack risk.',
      },
      {
        situation: 'Foot wound with spreading redness, fever, or drainage',
        urgency: 'go-to-er-now',
        whereTogo: 'emergency-room',
        whatToSay: 'I have diabetes and a foot wound that looks infected. It\'s getting worse rapidly.',
      },
      {
        situation: 'Blood sugars consistently out of range despite taking medications',
        urgency: 'schedule-soon',
        whereTogo: 'call-doctor',
        whatToSay: 'My blood sugars have been running high/low consistently. I\'m taking my medications as prescribed but need help adjusting my treatment.',
      },
      {
        situation: 'New symptoms like numbness, tingling, or burning in feet',
        urgency: 'mention-at-next-visit',
        whereTogo: 'call-doctor',
        whatToSay: 'I\'ve developed new numbness/tingling in my feet that I want to discuss.',
      },
    ],

    emotionalSupport: {
      commonFeelings: [
        'Overwhelmed by all the self-management tasks',
        'Frustrated when blood sugar doesn\'t respond as expected',
        'Anxious about complications',
        'Guilty about food choices or "cheating"',
        'Burned out from constant attention to diabetes',
        'Depressed - diabetes doubles the risk of depression',
        'Isolated - feeling like others don\'t understand',
      ],
      copingStrategies: [
        'Remember: You\'re doing hard work. Be kind to yourself.',
        'Focus on what you can control, accept what you can\'t.',
        'Celebrate small wins - a good blood sugar reading, a healthy meal choice.',
        'Connect with others who understand - support groups can help.',
        'Give yourself "diabetes breaks" - sometimes it\'s okay to not think about it.',
        'If you\'re struggling emotionally, talk to your doctor - help is available.',
        'Perfectionism is the enemy of good. You don\'t need perfect blood sugars.',
      ],
      supportResources: [
        'American Diabetes Association (diabetes.org) - information and support',
        'Local diabetes support groups - ask your doctor or hospital',
        'Certified Diabetes Care and Education Specialists (CDCES) - for one-on-one support',
        'Mental health professionals who understand chronic illness',
        'Online communities (JDRF, DiabetesDaily, TuDiabetes)',
        'Family involvement - educate loved ones so they can support you',
      ],
    },
  },

  doctorQuestions: {
    atDiagnosis: [
      {
        question: 'What type of diabetes do I have, and how sure are you?',
        whyAsk: 'Type 1 and type 2 have different treatments. Sometimes the type isn\'t immediately clear.',
        whatAnswerMeans: 'Type 2 is most common in adults. If there\'s uncertainty, additional tests (antibodies, C-peptide) may help clarify.',
        followUpQuestions: ['Should I have any tests to confirm the type?', 'Could this be something else?'],
      },
      {
        question: 'How severe is my diabetes right now?',
        whyAsk: 'Understanding where you\'re starting helps set realistic expectations.',
        whatAnswerMeans: 'HbA1c <8% is often manageable with lifestyle and oral meds. Very high (>10%) may need more intensive treatment.',
        followUpQuestions: ['What is my HbA1c?', 'Do I have any signs of complications already?'],
      },
      {
        question: 'What\'s my treatment plan, and why this approach?',
        whyAsk: 'Understanding the rationale helps with adherence and self-management.',
        whatAnswerMeans: 'Most start with lifestyle changes ± metformin. Additional medications depend on your specific situation.',
        followUpQuestions: ['What are the alternatives?', 'What side effects should I expect?'],
      },
      {
        question: 'What should my blood sugar targets be?',
        whyAsk: 'Goals vary by individual. You need to know YOUR targets.',
        whatAnswerMeans: 'Standard goal is HbA1c <7%, but this may be adjusted based on age, health, and hypoglycemia risk.',
        followUpQuestions: ['What fasting and after-meal numbers should I aim for?', 'How often should I check?'],
      },
      {
        question: 'What lifestyle changes will help most?',
        whyAsk: 'Lifestyle is the foundation. Knowing where to focus effort is key.',
        whatAnswerMeans: 'Usually diet, exercise, and weight loss if needed. Specifics depend on your current habits.',
        followUpQuestions: ['Can I see a dietitian?', 'Are there specific foods I should avoid?'],
      },
    ],

    aboutTreatment: [
      {
        question: 'What are the side effects of this medication, and what should I watch for?',
        whyAsk: 'Knowing what to expect prevents unnecessary worry and helps you recognize problems.',
        whatAnswerMeans: 'Every medication has potential side effects. Most are manageable. Know the serious ones to watch for.',
        followUpQuestions: ['Will side effects improve with time?', 'What should I do if I have this side effect?'],
      },
      {
        question: 'How long until I see this medication working?',
        whyAsk: 'Some medications work quickly, others take weeks. Knowing prevents premature discouragement.',
        whatAnswerMeans: 'Metformin: 2-4 weeks. GLP-1s: days to weeks. Full effect often takes 2-3 months.',
        followUpQuestions: ['How will I know if it\'s working?', 'When should we reassess?'],
      },
      {
        question: 'Can I ever reduce or stop my medications?',
        whyAsk: 'Understanding the long-term picture helps with motivation.',
        whatAnswerMeans: 'With significant weight loss and lifestyle changes, some people can reduce medications. Complete "remission" is possible for some.',
        followUpQuestions: ['What would I need to achieve to reduce medications?', 'Is diabetes ever "cured"?'],
      },
      {
        question: 'Why did you choose this medication over others?',
        whyAsk: 'Understanding the rationale helps you feel confident in the plan.',
        whatAnswerMeans: 'Medication choice depends on your other health conditions, weight, cost, side effect profile, and preferences.',
        followUpQuestions: ['What are the alternatives?', 'Does this medication have benefits beyond blood sugar?'],
      },
    ],

    ongoingCare: [
      {
        question: 'How often should I have diabetes check-ups and what tests do I need?',
        whyAsk: 'Regular monitoring catches problems early when they\'re most treatable.',
        whatAnswerMeans: 'Typically: HbA1c every 3-6 months, annual comprehensive exam, annual eye exam, regular foot checks.',
        followUpQuestions: ['When is my next HbA1c due?', 'Do I need a referral for an eye exam?'],
      },
      {
        question: 'How are my kidneys doing?',
        whyAsk: 'Diabetes is the #1 cause of kidney failure. Early detection is crucial.',
        whatAnswerMeans: 'Kidney function is checked with creatinine (eGFR) and urine albumin. Normal is eGFR >60 and no albumin.',
        followUpQuestions: ['Should I be on medication to protect my kidneys?', 'How can I keep my kidneys healthy?'],
      },
      {
        question: 'Am I on track with my diabetes management?',
        whyAsk: 'Regular feedback helps you adjust your efforts.',
        whatAnswerMeans: 'Look at HbA1c trend, blood pressure, cholesterol, and whether you\'re meeting targets.',
        followUpQuestions: ['What should I focus on improving?', 'What am I doing well?'],
      },
      {
        question: 'Are there any new treatments I should know about?',
        whyAsk: 'Diabetes treatment is rapidly evolving. New options may benefit you.',
        whatAnswerMeans: 'Recent advances include SGLT2 inhibitors, GLP-1 agonists, continuous glucose monitors, and new insulins.',
        followUpQuestions: ['Would any of these newer medications help me?', 'Should I use a continuous glucose monitor?'],
      },
    ],

    prognosis: [
      {
        question: 'What\'s my risk of developing complications?',
        whyAsk: 'Understanding risk helps motivate prevention and know what to watch for.',
        whatAnswerMeans: 'Risk depends on blood sugar control, blood pressure, cholesterol, smoking, and duration of diabetes.',
        followUpQuestions: ['What can I do to lower my risk?', 'What screening do I need for complications?'],
      },
      {
        question: 'Will I eventually need insulin?',
        whyAsk: 'Many people worry about this. Understanding helps reduce fear.',
        whatAnswerMeans: 'Type 2 diabetes is progressive. Many people eventually need insulin, especially after 10-15 years. This is not a failure.',
        followUpQuestions: ['What usually triggers the need for insulin?', 'Is there anything I can do to delay it?'],
      },
      {
        question: 'What is the realistic outlook with good management?',
        whyAsk: 'Hope and realistic expectations are both important.',
        whatAnswerMeans: 'With good management, most people live long, healthy lives with minimal complications. This is a very manageable disease.',
        followUpQuestions: ['What does "good management" look like specifically for me?'],
      },
    ],
  },

  anatomyLinks: [
    { structureId: 'pancreas', structureName: 'Pancreas', relevance: 'Where insulin is produced', viewPreset: 'anterior' },
    { structureId: 'liver', structureName: 'Liver', relevance: 'Regulates blood sugar, affected by insulin resistance', viewPreset: 'anterior' },
    { structureId: 'kidneys', structureName: 'Kidneys', relevance: 'Filter blood, affected by diabetes, newer medications work here', viewPreset: 'posterior' },
    { structureId: 'heart', structureName: 'Heart', relevance: 'Increased risk of heart disease in diabetes', viewPreset: 'anterior' },
    { structureId: 'eye', structureName: 'Eyes', relevance: 'Retina vulnerable to diabetic damage', viewPreset: 'lateral-left' },
    { structureId: 'peripheral-nervous-system', structureName: 'Peripheral Nerves', relevance: 'Can be damaged causing neuropathy', viewPreset: 'anterior' },
    { structureId: 'foot', structureName: 'Feet', relevance: 'At risk for ulcers and infections', viewPreset: 'anterior' },
  ],

  relatedMedications: ['metformin', 'glipizide', 'glyburide', 'sitagliptin', 'empagliflozin', 'dapagliflozin', 'liraglutide', 'semaglutide', 'insulin-glargine', 'insulin-lispro'],
  relatedTests: ['hemoglobin-a1c', 'fasting-glucose', 'oral-glucose-tolerance-test', 'urine-microalbumin', 'creatinine', 'lipid-panel'],
  relatedConditions: ['hypertension', 'hyperlipidemia', 'obesity', 'metabolic-syndrome', 'diabetic-retinopathy', 'diabetic-nephropathy', 'diabetic-neuropathy', 'coronary-artery-disease'],
};

// =============================================================================
// HYPERTENSION - The Silent Killer Explained
// =============================================================================

const HYPERTENSION_EDUCATION: ConditionEducation = {
  id: 'hypertension',
  conditionName: 'High Blood Pressure',
  medicalName: 'Essential Hypertension',
  icdCode: 'I10',

  whyMeSection: {
    whatItIs: {
      simple: 'High blood pressure means the force of blood pushing against your artery walls is too strong. It\'s like having too much water pressure in a garden hose - over time, the hose wears out faster.',
      detailed: 'Blood pressure is measured as two numbers: systolic (when the heart beats) over diastolic (when the heart rests). Normal is below 120/80 mmHg. High blood pressure (130/80 or higher) puts extra strain on your heart and blood vessels, increasing the risk of heart attack, stroke, and kidney disease.',
      comprehensive: 'Essential hypertension represents chronically elevated arterial pressure, defined as ≥130 mmHg systolic or ≥80 mmHg diastolic per 2017 ACC/AHA guidelines. It results from complex interactions between cardiac output, peripheral vascular resistance, and the renin-angiotensin-aldosterone system (RAAS). Primary hypertension (~95% of cases) has no single identifiable cause but involves genetic predisposition, dietary factors (sodium, potassium), vascular remodeling, and sympathetic nervous system activation.',
      analogy: 'Think of your blood vessels as pipes. Blood pressure is the force of water running through those pipes. If the pressure is too high for too long, the pipes get damaged, develop weak spots, and may eventually leak or burst. The heart also has to work harder to pump against the high pressure, causing it to enlarge and weaken over time.',
      visualMetaphor: 'A pressure gauge on a pipe showing the needle in the red danger zone',
    },

    howCommon: {
      prevalence: 'About 47% of American adults - nearly half the population - have high blood pressure. That\'s over 100 million people. It becomes more common with age: 76% of people over 65 have hypertension.',
      affectedPopulations: 'Hypertension is more common in Black Americans, people over 55, those who are overweight, those with family history, and people who consume high-sodium diets or excessive alcohol.',
      patientReassurance: 'High blood pressure is extremely common and very treatable. With proper management, most people with hypertension live long, healthy lives. The key is consistent treatment.',
    },

    whyItHappened: {
      knownCauses: [
        {
          cause: 'Arterial stiffening',
          explanation: {
            simple: 'As we age, our blood vessels become less flexible. Stiff arteries can\'t expand easily when blood pumps through them, so pressure builds up.',
            detailed: 'Arteries normally stretch when the heart pumps blood into them, then recoil between beats. With aging, loss of elastin and accumulation of collagen makes arterial walls stiffer. This arterial stiffening increases systolic pressure and pulse pressure.',
            comprehensive: 'Vascular aging involves progressive replacement of elastin with collagen, fragmentation of elastic lamellae, increased smooth muscle tone, and endothelial dysfunction. This decreases arterial compliance, particularly in central elastic arteries (aorta). The result is increased characteristic impedance and earlier return of reflected pressure waves, augmenting systolic pressure while maintaining or reducing diastolic pressure.',
          },
          isModifiable: false,
          whatYouCanDo: 'While aging is inevitable, exercise and avoiding smoking help maintain arterial flexibility.',
        },
        {
          cause: 'Excess sodium intake',
          explanation: {
            simple: 'Eating too much salt makes your body hold onto water, which increases the volume of blood your heart has to pump.',
            detailed: 'High sodium intake causes fluid retention, expanding blood volume. This increases venous return to the heart, raising cardiac output and blood pressure. In salt-sensitive individuals (about 50% of hypertensives), this effect is pronounced.',
            comprehensive: 'Sodium intake affects blood pressure through volume expansion, increased sympathetic activity, and direct vascular effects. Salt sensitivity is determined by impaired renal sodium excretion and blunted pressure-natriuresis relationship. The INTERSALT study demonstrated a ~3.7 mmHg systolic increase per 2.3g/day sodium intake. DASH-Sodium trial showed reducing sodium to 1.5g/day lowered BP by 8-14 mmHg.',
          },
          isModifiable: true,
          whatYouCanDo: 'Reduce sodium to under 2,300 mg/day (ideally 1,500 mg). This means avoiding processed foods, not adding salt, and reading labels.',
        },
        {
          cause: 'Excess weight',
          explanation: {
            simple: 'Extra body weight means extra blood vessels to supply, making your heart work harder. Fat tissue also produces hormones that raise blood pressure.',
            detailed: 'Obesity increases blood pressure through multiple mechanisms: increased blood volume to supply larger tissue mass, activation of the sympathetic nervous system and RAAS, insulin resistance, and production of pro-inflammatory adipokines that cause vascular dysfunction.',
            comprehensive: 'Obesity-related hypertension involves: 1) Increased cardiac output to perfuse expanded tissue mass, 2) Sympathetic activation from leptin and hyperinsulinemia, 3) RAAS activation with increased angiotensinogen from adipose tissue, 4) Renal compression from visceral fat causing sodium retention, 5) Endothelial dysfunction from adipokines and free fatty acids. Each 5% weight loss typically reduces BP by 3-5 mmHg.',
          },
          isModifiable: true,
          whatYouCanDo: 'Losing even 5-10 pounds can lower blood pressure. Focus on sustainable diet changes rather than crash diets.',
        },
        {
          cause: 'Genetic factors',
          explanation: {
            simple: 'High blood pressure often runs in families. If your parents had it, you\'re more likely to develop it too.',
            detailed: 'Blood pressure is approximately 30-50% heritable. Many genes contribute small effects - variations in genes affecting sodium handling, the RAAS system, sympathetic nervous system, and vascular function all play roles.',
            comprehensive: 'Hypertension has polygenic inheritance with ~30-50% heritability. Genome-wide association studies have identified >100 loci associated with blood pressure, including genes affecting: renal sodium handling (ENaC subunits, WNK kinases), RAAS (ACE, AGT, AGTR1), natriuretic peptides, and vascular function. Rare monogenic forms (Liddle syndrome, GRA) demonstrate causative pathways but explain <1% of cases.',
          },
          isModifiable: false,
          whatYouCanDo: 'You can\'t change your genes, but knowing your family history means you can be extra vigilant about prevention.',
        },
      ],

      riskFactorsThatApply: [
        {
          factor: 'Age',
          howItContributes: 'Blood vessels naturally stiffen with age. Over 65, arterial stiffness is the dominant cause of elevated systolic blood pressure.',
          isModifiable: false,
          strengthOfRisk: 'major',
        },
        {
          factor: 'Excess sodium intake',
          howItContributes: 'Most Americans consume 3,400+ mg sodium daily - far more than the recommended 2,300 mg. High sodium directly raises blood pressure.',
          isModifiable: true,
          reductionStrategy: 'Read labels, cook at home, avoid processed foods, and limit restaurant meals. Processed foods contribute 70% of dietary sodium.',
          strengthOfRisk: 'major',
        },
        {
          factor: 'Low potassium intake',
          howItContributes: 'Potassium helps counteract sodium\'s effects. Most people don\'t eat enough potassium-rich foods like fruits and vegetables.',
          isModifiable: true,
          reductionStrategy: 'Eat more bananas, potatoes, tomatoes, leafy greens, and other high-potassium foods.',
          strengthOfRisk: 'moderate',
        },
        {
          factor: 'Physical inactivity',
          howItContributes: 'Regular exercise keeps blood vessels flexible and helps maintain healthy weight and stress levels.',
          isModifiable: true,
          reductionStrategy: 'Aim for 150 minutes of moderate exercise per week. Walking counts!',
          strengthOfRisk: 'major',
        },
        {
          factor: 'Excess weight',
          howItContributes: 'Every 2.2 lbs (1 kg) of weight loss lowers blood pressure by about 1 mmHg.',
          isModifiable: true,
          reductionStrategy: 'Focus on gradual, sustainable weight loss through diet and exercise.',
          strengthOfRisk: 'major',
        },
        {
          factor: 'Excessive alcohol',
          howItContributes: 'More than 1-2 drinks daily raises blood pressure and can interfere with medications.',
          isModifiable: true,
          reductionStrategy: 'Limit to 1 drink/day for women, 2/day for men. Consider reducing further.',
          strengthOfRisk: 'moderate',
        },
        {
          factor: 'Chronic stress',
          howItContributes: 'Stress hormones constrict blood vessels and increase heart rate. Chronic stress leads to sustained elevation.',
          isModifiable: true,
          reductionStrategy: 'Regular exercise, adequate sleep, mindfulness, and stress management techniques.',
          strengthOfRisk: 'moderate',
        },
        {
          factor: 'Sleep apnea',
          howItContributes: 'Repeated oxygen deprivation and sleep disruption activate stress hormones that raise blood pressure. 50% of sleep apnea patients have hypertension.',
          isModifiable: true,
          reductionStrategy: 'Get evaluated for sleep apnea if you snore heavily. CPAP treatment can significantly lower blood pressure.',
          strengthOfRisk: 'major',
        },
      ],

      notYourFault: 'Many factors that cause high blood pressure are beyond your control - genetics, age, and even the environments we grew up in influence our risk. Our modern food supply is loaded with sodium. While lifestyle plays a role, don\'t blame yourself. What matters now is working with your healthcare team to manage it effectively.',
    },
  },

  bodyMechanism: {
    whatGoesWrong: {
      simple: 'Your blood vessels are under too much pressure all the time. Over years, this damages the blood vessels themselves, the heart that has to pump against the pressure, and the organs that depend on healthy blood flow.',
      detailed: 'High blood pressure causes two types of damage: direct mechanical stress on blood vessel walls (causing stiffening, thickening, and damage), and forcing the heart to work harder (causing it to enlarge and weaken over time). This affects every organ, but especially the brain, heart, kidneys, and eyes.',
      comprehensive: 'Chronic hypertension causes: 1) Vascular remodeling - intimal hyperplasia, medial hypertrophy, increased collagen, and decreased elastin, leading to increased peripheral resistance in a vicious cycle; 2) Cardiac changes - left ventricular hypertrophy, diastolic dysfunction, and eventually systolic heart failure; 3) Microvascular damage - arteriolar sclerosis in kidneys (nephrosclerosis), brain (increasing stroke/dementia risk), and retina; 4) Accelerated atherosclerosis from endothelial injury and lipid infiltration; 5) Aneurysm formation in weakened vessel walls.',
    },

    affectedAreas: [
      {
        areaName: 'Heart',
        structureId: 'heart',
        howAffected: {
          simple: 'Your heart has to pump harder against high pressure. Over time, the heart muscle thickens and can weaken.',
          detailed: 'The left ventricle thickens (left ventricular hypertrophy) to overcome the increased resistance. Initially this is compensatory, but eventually the heart muscle becomes stiff, can\'t fill properly (diastolic dysfunction), and may weaken (heart failure). Hypertension is a leading cause of heart failure.',
          comprehensive: 'Chronic pressure overload triggers concentric left ventricular hypertrophy via mechanotransduction and neurohormonal activation. Increased wall thickness normalizes wall stress (LaPlace\'s Law) but creates stiff, less compliant ventricle. Eventually, cardiomyocyte apoptosis and fibrosis lead to dilated cardiomyopathy and systolic failure. LVH is an independent predictor of cardiovascular events; regression with BP control improves outcomes.',
        },
        relatedSymptoms: ['Often no symptoms until late', 'Shortness of breath with exertion', 'Fatigue', 'Swelling in legs'],
      },
      {
        areaName: 'Brain',
        structureId: 'brain',
        howAffected: {
          simple: 'High blood pressure damages brain blood vessels, increasing risk of stroke and contributing to memory problems.',
          detailed: 'Hypertension causes small vessel disease in the brain - damage to tiny blood vessels that can cause silent mini-strokes and contribute to vascular dementia. It also increases risk of hemorrhagic stroke (bleeding) and ischemic stroke (blockage).',
          comprehensive: 'Cerebrovascular effects of hypertension include: 1) Large vessel atherosclerosis increasing ischemic stroke risk, 2) Small vessel disease causing lacunar infarcts and white matter hyperintensities, 3) Microhemorrhages and hemorrhagic stroke from weakened small vessels and aneurysms, 4) Impaired cerebral autoregulation, 5) Blood-brain barrier dysfunction. Hypertension is the strongest modifiable risk factor for stroke, and BP control is associated with reduced cognitive decline and dementia.',
        },
        relatedSymptoms: ['Usually silent until stroke occurs', 'Gradual memory changes over years', 'Headache (only with very high BP)'],
      },
      {
        areaName: 'Kidneys',
        structureId: 'kidneys',
        howAffected: {
          simple: 'High pressure damages the tiny filtering units in your kidneys, reducing their ability to clean your blood.',
          detailed: 'The kidneys filter blood through millions of tiny units called glomeruli. High pressure damages these delicate structures (nephrosclerosis), causing progressive loss of kidney function. At the same time, kidney damage makes blood pressure harder to control, creating a vicious cycle.',
          comprehensive: 'Hypertensive nephrosclerosis involves arteriolar sclerosis and glomerulosclerosis. Afferent arteriolar damage (hyaline arteriolosclerosis) transmits elevated pressure to glomeruli, causing hyperfiltration injury. Over time, global glomerulosclerosis and tubular atrophy develop. The kidney-hypertension relationship is bidirectional: renal sodium handling affects BP, and BP damages kidneys. ACE inhibitors and ARBs provide renoprotection beyond BP lowering.',
        },
        relatedSymptoms: ['Usually no symptoms until advanced', 'May cause protein in urine', 'Eventually fatigue, swelling, nausea'],
      },
      {
        areaName: 'Eyes',
        structureId: 'eye',
        howAffected: {
          simple: 'The tiny blood vessels in the back of your eyes can be damaged by high blood pressure, affecting your vision.',
          detailed: 'High blood pressure causes changes in retinal blood vessels that can be seen during an eye exam (hypertensive retinopathy). Severe hypertension can cause bleeding, swelling, and vision loss. The retina is the only place where blood vessels can be directly observed, making eye exams valuable for assessing hypertension severity.',
          comprehensive: 'Hypertensive retinopathy progresses through stages: 1) Mild - arteriolar narrowing, 2) Moderate - arteriovenous nicking, focal spasm, 3) Severe - hemorrhages, exudates, cotton-wool spots, 4) Malignant - papilledema indicating hypertensive emergency. Retinal microvascular changes are associated with cognitive decline, stroke, and cardiovascular mortality independent of BP levels. Modern staging uses Keith-Wagener-Barker classification.',
        },
        relatedSymptoms: ['Often no symptoms', 'Blurry vision if severe', 'Vision loss in malignant hypertension'],
      },
      {
        areaName: 'Blood vessels throughout body',
        structureId: 'circulatory-system',
        howAffected: {
          simple: 'High pressure damages the inner lining of arteries throughout your body, accelerating atherosclerosis (hardening of the arteries).',
          detailed: 'The endothelium (inner lining of arteries) is damaged by the constant high pressure. This makes arteries more susceptible to fatty plaque buildup (atherosclerosis), leading to coronary artery disease, peripheral artery disease, and aortic aneurysms.',
          comprehensive: 'Mechanical stress from hypertension causes endothelial dysfunction, reducing nitric oxide bioavailability and promoting a pro-atherogenic, pro-thrombotic state. Increased wall shear stress activates inflammatory pathways and promotes LDL infiltration. Hypertension accelerates all stages of atherosclerosis and increases plaque instability. Aortic wall stress promotes aneurysm formation and dissection.',
        },
        relatedSymptoms: ['Chest pain if coronary arteries affected', 'Leg pain with walking if peripheral arteries affected', 'Often silent'],
      },
    ],

    symptomExplanations: [
      {
        symptom: 'Usually no symptoms at all',
        whyYouFeelThis: {
          simple: 'High blood pressure is called the "silent killer" because it rarely causes symptoms until serious damage has occurred. Your body adapts to the high pressure, so you don\'t feel it.',
          detailed: 'The body\'s baroreceptors (pressure sensors) reset over time to accept higher pressures as normal. Blood vessels gradually remodel to withstand higher pressure. This adaptation means you don\'t feel the elevated pressure - only the damage it causes becomes apparent later.',
          comprehensive: 'Baroreceptor resetting occurs within hours to days of sustained BP elevation. Structural and functional adaptation of the vasculature occurs over weeks to months. This explains why patients can have severely elevated BP (180+/110+ mmHg) with no symptoms, and why rapid BP lowering can cause symptoms. Only very high pressures (malignant hypertension) overwhelm compensatory mechanisms.',
        },
        whatMakesItBetterWorse: {
          better: ['Treatment to lower blood pressure', 'Lifestyle changes'],
          worse: ['Uncontrolled blood pressure over years', 'Other risk factors like diabetes, smoking'],
        },
        whenToWorry: 'The lack of symptoms IS the worry - it means the only way to know if you have high blood pressure is to measure it. That\'s why regular blood pressure checks are so important.',
      },
      {
        symptom: 'Headache (only with very high blood pressure)',
        whyYouFeelThis: {
          simple: 'Severe high blood pressure can cause headaches, especially in the morning, as pressure builds in the brain\'s blood vessels.',
          detailed: 'At very high pressures (usually above 180/120 mmHg), the brain\'s blood vessels become congested, and there may be swelling. This causes a characteristic throbbing headache, often worse in the morning and at the back of the head.',
          comprehensive: 'Headache in hypertensive crisis results from cerebral hyperperfusion and edema when BP exceeds the upper limit of cerebral autoregulation (~180 mmHg MAP in chronic hypertension). Posterior reversible encephalopathy syndrome (PRES) represents the extreme of this continuum. In chronic stable hypertension, headache is not more common than in normotensives and is not a reliable symptom.',
        },
        whatMakesItBetterWorse: {
          better: ['Lowering blood pressure (gradually)'],
          worse: ['Extremely high blood pressure', 'Hypertensive emergency'],
        },
        whenToWorry: 'If you have a severe headache with blood pressure above 180/120, especially with vision changes, confusion, or chest pain, this is a medical emergency.',
      },
    ],

    dailyLifeImpact: [
      {
        activity: 'Taking medications',
        howAffected: 'Most people with high blood pressure need daily medication, sometimes multiple pills.',
        adaptations: ['Use pill organizers', 'Set phone reminders', 'Take at the same time daily', 'Don\'t stop without doctor guidance'],
      },
      {
        activity: 'Diet',
        howAffected: 'Dietary changes are a cornerstone of treatment - particularly reducing sodium.',
        adaptations: ['Read nutrition labels', 'Cook more at home', 'Limit processed foods', 'Eat more fruits, vegetables, whole grains (DASH diet)', 'Limit alcohol'],
      },
      {
        activity: 'Exercise',
        howAffected: 'Regular exercise helps lower blood pressure and is strongly recommended.',
        adaptations: ['Aim for 150 minutes of moderate activity weekly', 'Include both cardio and resistance training', 'Check with doctor if BP is very elevated before starting', 'Avoid breath-holding during lifting'],
      },
      {
        activity: 'Monitoring',
        howAffected: 'Regular blood pressure checks are essential to know if treatment is working.',
        adaptations: ['Get a home blood pressure monitor', 'Check at consistent times', 'Keep a log to share with your doctor', 'Know your target numbers'],
      },
    ],
  },

  diseaseJourney: {
    naturalHistory: {
      simple: 'Without treatment, high blood pressure silently damages your organs over years and decades, eventually leading to heart attacks, strokes, kidney failure, or heart failure.',
      detailed: 'Untreated hypertension progresses through stages of increasing organ damage. The heart enlarges and eventually weakens. Blood vessels stiffen and become diseased. Kidneys lose function. The brain accumulates damage. At some point, these become clinically apparent as heart attack, stroke, heart failure, or kidney failure.',
      comprehensive: 'The Framingham Heart Study demonstrated that untreated hypertension dramatically increases lifetime cardiovascular risk. Men with stage 2 hypertension at age 50 have ~30% 10-year CVD risk. Progression involves structural and functional changes: LVH develops over years, precedes HF by decade+. Renal function declines ~4 mL/min/year with uncontrolled BP vs ~1 mL/min/year with control. Each 20/10 mmHg increment doubles CVD risk.',
    },

    prognosis: {
      category: 'manageable-stable',
      explanation: {
        simple: 'With treatment, high blood pressure can usually be well-controlled. Taking medication and making lifestyle changes can bring your pressure to safe levels and dramatically reduce your risk of complications.',
        detailed: 'Blood pressure treatment is one of the most successful interventions in medicine. Lowering systolic BP by just 10 mmHg reduces stroke risk by ~30% and heart disease risk by ~20%. Most people can achieve goal BP with medications, and many can maintain it for life.',
        comprehensive: 'Meta-analyses demonstrate consistent CVD risk reduction with BP lowering: ~25% stroke reduction and ~15-20% CHD reduction per 10 mmHg systolic reduction. The SPRINT trial showed intensive control (SBP <120) reduced CVD events by 25% and mortality by 27% compared to standard control (<140). However, benefits must be balanced against treatment burden, side effects, and J-curve concerns in certain populations.',
      },
      factorsAffectingOutcome: [
        'Degree of blood pressure control achieved',
        'Duration of uncontrolled hypertension before treatment',
        'Presence of other risk factors (diabetes, smoking, high cholesterol)',
        'Existing organ damage at diagnosis',
        'Medication adherence',
        'Lifestyle modifications',
      ],
      whatYouCanControl: [
        'Taking medications as prescribed',
        'Dietary sodium intake',
        'Body weight',
        'Physical activity level',
        'Alcohol consumption',
        'Smoking cessation',
        'Regular blood pressure monitoring',
        'Following up with your healthcare team',
      ],
    },

    timeline: [
      {
        timeframe: 'Diagnosis and initial weeks',
        whatToExpect: 'Starting medications, learning to monitor BP at home, making initial lifestyle changes. BP may take time to reach goal.',
        milestones: ['Get a home BP monitor', 'Start medication(s)', 'Learn the DASH diet basics', 'Baseline tests (kidney function, potassium)'],
      },
      {
        timeframe: 'First 3-6 months',
        whatToExpect: 'Medication adjustments to reach target BP. Developing new diet and exercise habits.',
        milestones: ['BP reaching target range', 'Medication dose optimization', 'Follow-up labs to check medication effects', 'Establishing exercise routine'],
      },
      {
        timeframe: 'Long-term management (years)',
        whatToExpect: 'Maintenance phase - continuing medications and lifestyle changes, regular monitoring.',
        milestones: ['Annual check-ups', 'Kidney function monitoring', 'Screening for complications', 'Occasional medication adjustments'],
      },
    ],

    hopeAndReality: 'High blood pressure is one of the most treatable chronic conditions. The medications work well and have decades of evidence behind them. While you may need to take pills every day for life, doing so can add years of healthy life. Many people live into their 80s and 90s with well-controlled blood pressure. The key is consistent treatment - every day, every dose matters.',
  },

  treatmentRationale: {
    whyTreat: {
      simple: 'Treating high blood pressure prevents heart attacks, strokes, heart failure, and kidney disease. It adds years to your life.',
      detailed: 'Blood pressure treatment is proven to dramatically reduce your risk of cardiovascular events. Lowering BP by just 10 mmHg systolic reduces stroke risk by about 30% and heart attack risk by about 20%. Treating hypertension is one of the most effective things you can do for your long-term health.',
      comprehensive: 'Meta-analyses consistently demonstrate that BP lowering reduces CVD events proportionally to the magnitude of BP reduction, with benefits seen across all baseline BP levels ≥115/75. The "lower is better" principle holds down to at least 120 mmHg systolic in most patients, though J-curve concerns exist for some populations (elderly, CAD). Treatment prevents end-organ damage progression and, in some cases, allows regression of LVH and proteinuria.',
    },

    goals: [
      {
        goal: 'Blood pressure below 130/80 mmHg',
        whyImportant: 'This target reduces cardiovascular risk to near-optimal levels for most adults.',
        howMeasured: 'Blood pressure readings at doctor visits and home monitoring',
        realisticTimeframe: '1-3 months with medication and lifestyle changes',
      },
      {
        goal: 'Consistent medication adherence',
        whyImportant: 'Medications only work if you take them. Missing doses allows BP to rise.',
        howMeasured: 'Refill frequency, patient reporting, consistent BP control',
        realisticTimeframe: 'Ongoing - develop routines in the first few weeks',
      },
      {
        goal: 'Healthy lifestyle maintenance',
        whyImportant: 'Lifestyle changes can lower BP as much as a single medication and improve overall health.',
        howMeasured: 'Sodium intake, exercise frequency, weight, alcohol consumption',
        realisticTimeframe: 'Gradual improvements over months',
      },
    ],

    approaches: [
      {
        name: 'Lifestyle modifications (foundation)',
        type: 'lifestyle',
        whatItDoes: {
          simple: 'Eating better (especially less salt), exercising, losing weight, and limiting alcohol can lower blood pressure significantly - sometimes as much as a medication.',
          detailed: 'The DASH diet combined with low sodium can lower BP by 11+ mmHg. Regular aerobic exercise lowers BP by 5-8 mmHg. Losing 1 kg of weight lowers BP by about 1 mmHg. These effects are additive.',
          comprehensive: 'Lifestyle modifications provide BP reductions that rival pharmacotherapy: DASH diet (~6 mmHg), sodium reduction to <1.5g/day (~6 mmHg), weight loss (~1 mmHg per kg), aerobic exercise (~5-8 mmHg), moderation of alcohol (~4 mmHg), and potassium supplementation (~4 mmHg). These are additive and should be first-line for stage 1 hypertension without compelling indications, and adjunctive for all hypertension.',
        },
        whyRecommended: 'No side effects, improves overall health, can reduce medication needs, and may be sufficient for mild hypertension.',
        prosAndCons: {
          benefits: ['No medication side effects', 'Improves overall health', 'Can reduce or eliminate need for medications', 'Addresses root causes'],
          drawbacks: ['Requires sustained effort', 'May not be enough for moderate-severe hypertension', 'Results take time'],
        },
      },
      {
        name: 'ACE inhibitors (lisinopril, enalapril, etc.)',
        type: 'medication',
        whatItDoes: {
          simple: 'These medications relax blood vessels by blocking a hormone system that raises blood pressure.',
          detailed: 'ACE inhibitors block the renin-angiotensin system, preventing the formation of angiotensin II - a powerful blood vessel constrictor. This relaxes blood vessels and reduces blood pressure. They also protect the kidneys and heart.',
          comprehensive: 'ACE inhibitors inhibit angiotensin-converting enzyme, reducing formation of angiotensin II (vasoconstrictor) and aldosterone (promotes sodium retention). Effects include vasodilation, natriuresis, and cardiac/renal protection beyond BP lowering. Indicated especially for HF, post-MI, CKD, and diabetes with proteinuria. Main side effect is dry cough (bradykinin accumulation); angioedema is rare but serious.',
        },
        whyRecommended: 'First-line treatment, especially if you have diabetes, kidney disease, or heart failure. Well-tolerated and inexpensive.',
        alternatives: ['ARBs (angiotensin receptor blockers) if you develop cough'],
        prosAndCons: {
          benefits: ['Effective', 'Inexpensive', 'Protects kidneys and heart', 'Once-daily dosing'],
          drawbacks: ['Dry cough in ~10% of patients', 'Can raise potassium', 'Cannot use in pregnancy', 'Rare angioedema risk'],
        },
      },
      {
        name: 'Calcium channel blockers (amlodipine, etc.)',
        type: 'medication',
        whatItDoes: {
          simple: 'These medications relax blood vessel walls by blocking calcium from entering muscle cells.',
          detailed: 'Calcium is needed for blood vessel muscles to contract. Calcium channel blockers prevent calcium from entering these cells, causing vessel walls to relax and widen. This lowers blood pressure.',
          comprehensive: 'Dihydropyridine CCBs (amlodipine, nifedipine) preferentially act on vascular smooth muscle, causing arterial vasodilation and reduced peripheral resistance. Non-dihydropyridines (diltiazem, verapamil) also slow cardiac conduction and rate. CCBs are effective across age groups and ethnicities, and are particularly effective in elderly and Black patients. Main side effects are peripheral edema (dose-dependent) and constipation.',
        },
        whyRecommended: 'Very effective, especially in older adults and Black patients. Often combined with ACE inhibitors.',
        prosAndCons: {
          benefits: ['Very effective', 'Good for elderly and Black patients', 'Once-daily dosing', 'No metabolic side effects'],
          drawbacks: ['Can cause ankle swelling', 'Some cause constipation', 'Grapefruit interaction'],
        },
      },
      {
        name: 'Thiazide diuretics (hydrochlorothiazide, chlorthalidone)',
        type: 'medication',
        whatItDoes: {
          simple: 'These "water pills" help your kidneys remove extra sodium and water, reducing blood volume and pressure.',
          detailed: 'Thiazides work in the kidneys to increase excretion of sodium and water. Acutely this reduces blood volume; chronically the main effect is reduced peripheral vascular resistance. They are inexpensive and effective.',
          comprehensive: 'Thiazides inhibit the sodium-chloride cotransporter in the distal convoluted tubule, causing natriuresis and diuresis. Initial BP lowering is from volume reduction; chronic effect is from reduced vascular resistance. ALLHAT trial demonstrated non-inferior outcomes to newer agents. Chlorthalidone has longer half-life and possibly better outcomes than HCTZ. Side effects include hypokalemia, hyperuricemia, glucose intolerance.',
        },
        whyRecommended: 'Inexpensive, proven effective in large trials, good for combination therapy.',
        prosAndCons: {
          benefits: ['Inexpensive', 'Long track record', 'Once-daily', 'Reduces stroke and heart failure'],
          drawbacks: ['Can lower potassium', 'May raise blood sugar slightly', 'Can raise uric acid', 'Increased urination'],
        },
      },
    ],

    untreatedOutcome: 'Untreated high blood pressure silently damages organs for years until a catastrophic event occurs. The lifetime risk of stroke is doubled or tripled. Heart attack risk increases 2-3 fold. Heart failure risk increases 2-3 fold. Kidney failure becomes far more likely. Dementia risk increases. Each year of uncontrolled BP allows more damage to accumulate. The tragedy is that this is almost entirely preventable with treatment.',
  },

  livingWith: {
    dailyManagement: [
      {
        task: 'Take blood pressure medications',
        frequency: 'Daily, at the same time(s) each day',
        whyImportant: 'Medications only control BP while you take them. Missing doses allows BP to rise and increases damage.',
        howToDo: 'Use a pill organizer, set phone alarms, pair with another daily habit (like brushing teeth).',
        tips: ['Never run out - refill early', 'If you miss a dose, take it when you remember unless it\'s almost time for the next one', 'Don\'t double up'],
      },
      {
        task: 'Monitor blood pressure at home',
        frequency: 'Per your doctor\'s recommendation (often 1-2 times daily initially, then periodically)',
        whyImportant: 'Home monitoring gives a true picture of your BP and helps guide treatment decisions.',
        howToDo: 'Sit quietly for 5 minutes. Rest arm at heart level. Take 2 readings 1 minute apart. Record both.',
        tips: ['Use a validated automatic upper-arm cuff', 'Don\'t measure right after exercise, caffeine, or stress', 'Bring your log to appointments'],
      },
      {
        task: 'Follow a heart-healthy diet',
        frequency: 'Every meal',
        whyImportant: 'Diet is as powerful as medication for BP control. Reducing sodium is especially important.',
        howToDo: 'Follow DASH diet principles: lots of fruits, vegetables, whole grains, lean protein. Limit sodium to <2,300 mg (ideally <1,500 mg).',
        tips: ['Read labels - aim for <600mg sodium per meal', 'Cook at home more', 'Avoid adding salt', 'Limit processed foods'],
      },
      {
        task: 'Exercise regularly',
        frequency: 'Most days - aim for 150 minutes per week of moderate activity',
        whyImportant: 'Regular exercise can lower BP by 5-8 mmHg and helps maintain healthy weight.',
        howToDo: 'Brisk walking, swimming, cycling - anything that raises your heart rate. Include some resistance training.',
        tips: ['Start slowly if you\'ve been inactive', 'Find activities you enjoy', 'Include both cardio and strength training'],
      },
    ],

    lifestyleChanges: [
      {
        change: 'Reduce sodium intake',
        category: 'diet',
        whyItHelps: {
          simple: 'Less salt means less fluid retention and lower blood pressure. Most people see noticeable improvement.',
          detailed: 'Reducing sodium from the typical 3,400+ mg to under 2,300 mg (ideally 1,500 mg) can lower BP by 5-6 mmHg in hypertensives. Processed foods contribute ~70% of dietary sodium.',
          comprehensive: 'DASH-Sodium trial demonstrated ~8 mmHg systolic reduction with 1,500 mg sodium diet vs typical American diet. Salt sensitivity varies - approximately 50% of hypertensives are salt-sensitive. Even in salt-resistant individuals, lower sodium potentiates effects of antihypertensives and may improve vascular function.',
        },
        howToImplement: ['Read nutrition labels', 'Choose low-sodium options', 'Cook at home', 'Use herbs/spices instead of salt', 'Limit restaurant and processed foods'],
        evidenceStrength: 'strong',
        expectedBenefit: 'Can lower BP by 5-6 mmHg with significant reduction',
      },
      {
        change: 'Follow the DASH diet',
        category: 'diet',
        whyItHelps: {
          simple: 'This diet is specifically designed to lower blood pressure. It\'s rich in fruits, vegetables, and low-fat dairy.',
          detailed: 'DASH emphasizes fruits, vegetables, whole grains, and low-fat dairy while limiting saturated fat and cholesterol. It\'s high in potassium, magnesium, calcium, and fiber. The DASH trial showed 5.5 mmHg BP reduction with this diet alone.',
          comprehensive: 'The DASH trial demonstrated ~5.5 mmHg systolic reduction vs control diet, with greater effect in hypertensives (~11 mmHg). DASH combined with sodium reduction produced ~11.5 mmHg reduction. The diet works through multiple mechanisms: increased potassium, magnesium, and calcium; reduced saturated fat; and increased nitrate/nitrite from vegetables.',
        },
        howToImplement: ['4-5 servings of fruits daily', '4-5 servings of vegetables daily', '2-3 servings of low-fat dairy daily', 'Limit red meat', 'Whole grains over refined'],
        evidenceStrength: 'strong',
        expectedBenefit: 'Can lower BP by 6-11 mmHg, especially combined with low sodium',
      },
      {
        change: 'Regular aerobic exercise',
        category: 'exercise',
        whyItHelps: {
          simple: 'Exercise strengthens your heart and keeps blood vessels flexible. It directly lowers blood pressure.',
          detailed: 'Regular aerobic exercise reduces BP by 5-8 mmHg in hypertensives through improved endothelial function, reduced sympathetic activity, and structural vascular changes.',
          comprehensive: 'Exercise training reduces BP through: acute post-exercise hypotension, improved endothelial function with increased NO bioavailability, reduced sympathetic tone, favorable vascular remodeling, and decreased arterial stiffness. Meta-analyses show ~5-8 mmHg reduction with aerobic exercise. Both endurance and resistance training are beneficial.',
        },
        howToImplement: ['Aim for 150 minutes/week of moderate activity', 'Walking, swimming, cycling are excellent', 'Include 2-3 days of resistance training', 'Be consistent rather than intense'],
        evidenceStrength: 'strong',
        expectedBenefit: 'Can lower BP by 5-8 mmHg',
      },
      {
        change: 'Weight loss (if overweight)',
        category: 'diet',
        whyItHelps: {
          simple: 'Losing weight reduces the strain on your heart and blood vessels. Even modest weight loss helps.',
          detailed: 'Every kilogram (2.2 lbs) of weight loss reduces BP by approximately 1 mmHg. Weight loss also improves the effectiveness of BP medications.',
          comprehensive: 'Weight reduction decreases sympathetic activity, RAAS activation, and inflammation while improving insulin sensitivity and endothelial function. The Look AHEAD trial showed significant BP reduction with intensive lifestyle intervention. Approximately 1 mmHg reduction per kg weight loss.',
        },
        howToImplement: ['Modest calorie deficit (500 cal/day = 1 lb/week)', 'Focus on sustainable changes', 'Combine diet and exercise', 'Consider programs like WW or professional guidance'],
        evidenceStrength: 'strong',
        expectedBenefit: '~1 mmHg per kg (2.2 lbs) lost',
      },
      {
        change: 'Limit alcohol',
        category: 'habits',
        whyItHelps: {
          simple: 'More than moderate alcohol raises blood pressure and can interfere with medications.',
          detailed: 'Heavy alcohol intake raises BP by 5-10 mmHg and can cause resistance to antihypertensives. Reduction in heavy drinkers can significantly lower BP.',
          comprehensive: 'Alcohol has biphasic effects on BP: moderate intake may lower BP acutely, but chronic intake >2 drinks/day raises BP through multiple mechanisms including increased sympathetic activity, cortisol, and endothelin. PATHS trial showed ~4 mmHg reduction with alcohol moderation in heavy drinkers.',
        },
        howToImplement: ['No more than 1 drink/day for women, 2/day for men', 'Consider further reduction', 'Avoid binge drinking'],
        evidenceStrength: 'moderate',
        expectedBenefit: 'Can lower BP by 2-4 mmHg if reducing from heavy intake',
      },
    ],

    warningSignsToWatch: [
      {
        sign: 'Blood pressure above 180/120 mmHg',
        whatItMightMean: 'Hypertensive crisis - blood pressure has reached dangerous levels',
        urgency: 'go-to-er-now',
        actionToTake: 'Rest for 5 minutes and recheck. If still elevated, go to emergency room, especially if you have symptoms.',
      },
      {
        sign: 'Severe headache with very high blood pressure',
        whatItMightMean: 'Could indicate hypertensive emergency with brain involvement',
        urgency: 'emergency-911',
        actionToTake: 'Call 911 immediately. This could be a stroke or hypertensive encephalopathy.',
      },
      {
        sign: 'Chest pain or shortness of breath',
        whatItMightMean: 'Could be heart attack or heart failure - complications of hypertension',
        urgency: 'emergency-911',
        actionToTake: 'Call 911 immediately. Do not drive yourself.',
      },
      {
        sign: 'Sudden weakness, numbness, or difficulty speaking',
        whatItMightMean: 'Possible stroke',
        urgency: 'emergency-911',
        actionToTake: 'Call 911 immediately. Note the time symptoms started.',
      },
      {
        sign: 'Swelling in legs, ankles, or feet',
        whatItMightMean: 'Could be side effect of calcium channel blocker or sign of heart/kidney problems',
        urgency: 'schedule-soon',
        actionToTake: 'Contact your doctor within a few days. It may need medication adjustment.',
      },
      {
        sign: 'Persistent dry cough',
        whatItMightMean: 'Common side effect of ACE inhibitors',
        urgency: 'mention-at-next-visit',
        actionToTake: 'Mention at your next appointment. Can usually switch to an ARB.',
      },
      {
        sign: 'Dizziness or fainting when standing up',
        whatItMightMean: 'Blood pressure may be dropping too low, especially when standing (orthostatic hypotension)',
        urgency: 'call-doctor-today',
        actionToTake: 'Check your BP sitting and standing. Contact your doctor - medication adjustment may be needed.',
      },
    ],

    whenToGetHelp: [
      {
        situation: 'Blood pressure above 180/120 with symptoms (headache, chest pain, vision changes, confusion)',
        urgency: 'emergency-911',
        whereTogo: 'emergency-room',
        whatToSay: 'I have hypertension and my blood pressure is [X/Y]. I\'m having [symptoms]. I may be having a hypertensive emergency.',
      },
      {
        situation: 'Blood pressure above 180/120 without symptoms',
        urgency: 'go-to-er-now',
        whereTogo: 'emergency-room',
        whatToSay: 'My blood pressure is very high. I need it checked and possibly treated.',
      },
      {
        situation: 'Blood pressure consistently above goal despite taking medications',
        urgency: 'schedule-soon',
        whereTogo: 'call-doctor',
        whatToSay: 'My blood pressure has been running above goal. Here are my home readings from the past week.',
      },
      {
        situation: 'Side effects from blood pressure medications',
        urgency: 'schedule-soon',
        whereTogo: 'call-doctor',
        whatToSay: 'I\'m having [side effect] from my blood pressure medication. Should I continue taking it?',
      },
    ],

    emotionalSupport: {
      commonFeelings: [
        'Frustrated that I feel fine but have to take medication',
        'Anxious about the silent damage high blood pressure causes',
        'Overwhelmed by dietary restrictions',
        'Discouraged when blood pressure is hard to control',
        'Resistant to taking pills for the rest of my life',
      ],
      copingStrategies: [
        'Remember: Treatment gives you control over your health destiny',
        'Focus on adding healthy foods, not just removing unhealthy ones',
        'Celebrate your BP readings when they\'re at goal',
        'Make medication-taking a habit, not a chore',
        'Remember that millions of people manage this successfully every day',
        'Think of treatment as protection, not restriction',
      ],
      supportResources: [
        'American Heart Association (heart.org)',
        'Million Hearts initiative (millionhearts.hhs.gov)',
        'Local cardiac rehab programs',
        'Registered dietitians for DASH diet guidance',
        'Support groups for chronic disease management',
      ],
    },
  },

  doctorQuestions: {
    atDiagnosis: [
      {
        question: 'What is my target blood pressure?',
        whyAsk: 'Targets vary based on age, other conditions, and risk factors.',
        whatAnswerMeans: 'Most adults should aim for <130/80. Some elderly patients may have higher targets.',
        followUpQuestions: ['What if I can\'t reach that target?', 'Should I get a home monitor?'],
      },
      {
        question: 'Do I have any organ damage from high blood pressure already?',
        whyAsk: 'Existing damage affects treatment decisions and prognosis.',
        whatAnswerMeans: 'Tests like kidney function, heart evaluation, and eye exam can reveal damage.',
        followUpQuestions: ['What tests will you do to check?', 'Is any damage reversible with treatment?'],
      },
      {
        question: 'Can I try lifestyle changes before medication?',
        whyAsk: 'For mild hypertension without complications, lifestyle may be enough initially.',
        whatAnswerMeans: 'If BP is <140/90 without other risk factors, a 3-month lifestyle trial may be reasonable.',
        followUpQuestions: ['What lifestyle changes will help most?', 'How long before we know if it\'s enough?'],
      },
    ],

    aboutTreatment: [
      {
        question: 'Why did you choose this particular medication?',
        whyAsk: 'Understanding the rationale helps with adherence and knowing what to expect.',
        whatAnswerMeans: 'Medication choice depends on other conditions, age, race, side effect profile, and cost.',
        followUpQuestions: ['Are there alternatives if I have side effects?', 'What side effects should I watch for?'],
      },
      {
        question: 'Will I need to take blood pressure medication forever?',
        whyAsk: 'Understanding long-term expectations helps with planning and acceptance.',
        whatAnswerMeans: 'Usually yes - hypertension is typically lifelong. But significant lifestyle changes may allow dose reduction.',
        followUpQuestions: ['Can I ever reduce my medication?', 'What would need to happen?'],
      },
      {
        question: 'What should I do if I miss a dose?',
        whyAsk: 'Knowing how to handle missed doses prevents errors.',
        whatAnswerMeans: 'Usually take it when you remember unless it\'s close to the next dose. Never double up.',
        followUpQuestions: ['Will my blood pressure spike if I miss one dose?', 'What if I forget frequently?'],
      },
    ],

    ongoingCare: [
      {
        question: 'How often should I check my blood pressure at home?',
        whyAsk: 'Home monitoring is important for good control, but frequency varies.',
        whatAnswerMeans: 'Often daily or twice daily when starting treatment, then periodically once stable.',
        followUpQuestions: ['What numbers should concern me?', 'Should I call if readings are high?'],
      },
      {
        question: 'What can I do if my blood pressure is still high despite medications?',
        whyAsk: 'Resistant hypertension (BP above goal on 3+ medications) affects 10-15% of patients.',
        whatAnswerMeans: 'Options include checking for secondary causes, optimizing doses, adding medications, and ensuring adherence.',
        followUpQuestions: ['Could there be a treatable cause?', 'Should I see a specialist?'],
      },
    ],

    prognosis: [
      {
        question: 'If I control my blood pressure well, what\'s my outlook?',
        whyAsk: 'Understanding benefits motivates treatment adherence.',
        whatAnswerMeans: 'Well-controlled BP dramatically reduces stroke, heart attack, and kidney failure risk. Most people do very well.',
        followUpQuestions: ['How much does treatment reduce my risk?', 'Can damage be reversed?'],
      },
      {
        question: 'What happens if I don\'t take my medication?',
        whyAsk: 'Understanding consequences reinforces the importance of treatment.',
        whatAnswerMeans: 'Risk of stroke, heart attack, heart failure, and kidney failure increases significantly over time.',
        followUpQuestions: ['How fast does damage occur?', 'Will I feel anything if I stop?'],
      },
    ],
  },

  anatomyLinks: [
    { structureId: 'heart', structureName: 'Heart', relevance: 'Pumps blood; hypertension causes enlargement and failure', viewPreset: 'anterior' },
    { structureId: 'brain', structureName: 'Brain', relevance: 'Stroke and dementia risk from hypertension', viewPreset: 'lateral-right' },
    { structureId: 'kidneys', structureName: 'Kidneys', relevance: 'Damaged by high pressure; also affect BP regulation', viewPreset: 'posterior' },
    { structureId: 'eye', structureName: 'Eyes', relevance: 'Retinal vessels show hypertensive damage', viewPreset: 'anterior' },
    { structureId: 'circulatory-system', structureName: 'Blood Vessels', relevance: 'Directly damaged by high pressure', viewPreset: 'anterior' },
  ],

  relatedMedications: ['lisinopril', 'amlodipine', 'losartan', 'hydrochlorothiazide', 'metoprolol', 'carvedilol'],
  relatedTests: ['basic-metabolic-panel', 'urinalysis', 'echocardiogram', 'renal-ultrasound'],
  relatedConditions: ['heart-failure', 'chronic-kidney-disease', 'stroke', 'coronary-artery-disease', 'atrial-fibrillation'],
};

// =============================================================================
// CONDITION DATABASE EXPORTS
// =============================================================================
// COPD - When Breathing Becomes Work
// =============================================================================

const COPD_EDUCATION: ConditionEducation = {
  id: 'copd',
  conditionName: 'COPD (Chronic Obstructive Pulmonary Disease)',
  medicalName: 'Chronic Obstructive Pulmonary Disease',
  icdCode: 'J44.9',

  whyMeSection: {
    whatItIs: {
      simple: 'COPD is a lung disease that makes it hard to breathe. Your airways become inflamed and damaged, trapping air in your lungs and making it difficult to get air in and out.',
      detailed: 'COPD includes two main conditions: chronic bronchitis (inflammation of airways with excess mucus) and emphysema (destruction of the tiny air sacs where oxygen enters your blood). Most people have elements of both. The damage is progressive and irreversible, but treatment can slow progression and improve symptoms.',
      comprehensive: 'COPD is characterized by persistent airflow limitation due to small airway disease (obstructive bronchiolitis) and parenchymal destruction (emphysema), with relative contributions varying between individuals. Pathophysiology involves chronic inflammation from inhaled noxious particles (primarily cigarette smoke), leading to structural changes: mucus hypersecretion, ciliary dysfunction, airway wall thickening, and alveolar wall destruction with loss of elastic recoil. This creates expiratory flow limitation, air trapping, and hyperinflation. FEV1/FVC <0.70 post-bronchodilator confirms diagnosis per GOLD criteria.',
      analogy: 'Imagine trying to breathe through a straw that\'s partly clogged with mucus, while also having a balloon that won\'t fully deflate. That\'s what COPD feels like - the airways are narrowed and the lungs can\'t empty properly, so you feel like you can\'t get a full breath.',
      visualMetaphor: 'A comparison showing healthy open airways vs. narrowed, mucus-filled airways; and healthy grape-like air sacs vs. destroyed, floppy emphysematous sacs',
    },

    howCommon: {
      prevalence: 'COPD affects about 16 million Americans and is the third leading cause of death in the US. Millions more likely have it but haven\'t been diagnosed.',
      affectedPopulations: 'Most common in people over 40 with significant smoking history. Also affects people with long-term exposure to occupational dust, chemicals, or indoor air pollution. Alpha-1 antitrypsin deficiency causes early-onset COPD in some.',
      patientReassurance: 'While COPD can\'t be cured, it CAN be managed effectively. Many people with COPD live active, fulfilling lives with proper treatment. The earlier you start treatment and stop smoking, the better your outcome.',
    },

    whyItHappened: {
      knownCauses: [
        {
          cause: 'Cigarette smoking',
          explanation: {
            simple: 'Smoking is the cause in about 85-90% of COPD cases. The chemicals in cigarette smoke damage your airways and air sacs over years.',
            detailed: 'Cigarette smoke triggers chronic inflammation in the lungs. Over time, this damages the airways (causing chronic bronchitis) and destroys the delicate air sacs where oxygen exchange happens (causing emphysema). The damage accumulates with years of smoking.',
            comprehensive: 'Cigarette smoke contains >4000 chemicals including oxidants and particulates that overwhelm pulmonary antioxidant defenses. This triggers recruitment of inflammatory cells (neutrophils, macrophages, CD8+ lymphocytes) that release proteases (MMP-9, MMP-12, neutrophil elastase) causing elastin and collagen degradation. Concurrently, oxidative stress and protease-antiprotease imbalance lead to epithelial cell apoptosis, impaired repair mechanisms, and progressive structural damage. Approximately 15-20% of smokers develop clinically significant COPD, suggesting genetic susceptibility factors.',
          },
          isModifiable: true,
          whatYouCanDo: 'Quitting smoking is the single most important thing you can do. It\'s never too late - quitting at any stage slows progression and improves symptoms.',
        },
        {
          cause: 'Occupational exposure',
          explanation: {
            simple: 'Long-term exposure to dust, chemicals, and fumes at work can cause COPD, even in non-smokers.',
            detailed: 'Coal miners, grain workers, textile workers, and those exposed to industrial dust, cadmium, silica, or welding fumes have increased COPD risk. These exposures cause the same type of airway inflammation as smoking.',
            comprehensive: 'Occupational exposures account for 10-20% of COPD cases. High-risk industries include mining, construction, textile manufacturing, and agriculture. Organic dusts (grain, cotton) can cause both airways disease and interstitial changes. Inorganic dusts (silica, coal) cause airway inflammation and fibrosis. Dose-response relationships are established; OSHA regulations aim to reduce exposure.',
          },
          isModifiable: true,
          whatYouCanDo: 'Use proper respiratory protection at work. Work with your employer to minimize exposure. Consider job modification if exposure is significant.',
        },
        {
          cause: 'Alpha-1 antitrypsin deficiency',
          explanation: {
            simple: 'A small number of people have a genetic condition that makes their lungs vulnerable to damage, causing COPD at younger ages.',
            detailed: 'Alpha-1 antitrypsin (AAT) is a protein that protects the lungs from damage by enzymes released during inflammation. People with AAT deficiency lack this protection, leading to early emphysema, especially in smokers.',
            comprehensive: 'AAT deficiency is an autosomal codominant condition affecting 1-2% of COPD patients. The Pi*ZZ genotype results in <15% normal AAT levels, leading to unopposed neutrophil elastase activity and panacinar emphysema, typically presenting ages 30-40. Liver disease can also occur from AAT polymer accumulation. Suspect in COPD onset <45 years, strong family history, lower-lobe predominant emphysema, or associated liver disease. AAT augmentation therapy is available for severe deficiency.',
          },
          isModifiable: false,
          whatYouCanDo: 'Get tested if you developed COPD young or have a family history. Augmentation therapy is available. Absolutely avoid smoking.',
        },
      ],

      riskFactorsThatApply: [
        {
          factor: 'Smoking history',
          howItContributes: 'Pack-years (packs per day × years smoked) correlates with COPD risk. Heavy long-term smoking causes the most damage.',
          isModifiable: true,
          reductionStrategy: 'Quit smoking immediately. Use nicotine replacement, medications, and support programs. Every smoke-free day helps.',
          strengthOfRisk: 'major',
        },
        {
          factor: 'Age',
          howItContributes: 'COPD typically develops after age 40 as cumulative damage becomes apparent. Lung function naturally declines with age.',
          isModifiable: false,
          strengthOfRisk: 'major',
        },
        {
          factor: 'Childhood respiratory infections',
          howItContributes: 'Severe respiratory infections in childhood can impair lung development and increase adult COPD risk.',
          isModifiable: false,
          strengthOfRisk: 'moderate',
        },
        {
          factor: 'Secondhand smoke exposure',
          howItContributes: 'Living or working with smokers increases risk even if you don\'t smoke yourself.',
          isModifiable: true,
          reductionStrategy: 'Avoid environments with secondhand smoke. Encourage household members to quit.',
          strengthOfRisk: 'moderate',
        },
        {
          factor: 'Indoor air pollution',
          howItContributes: 'Burning biomass fuels (wood, animal dung, crop residues) for cooking or heating in poorly ventilated homes causes COPD, especially in developing countries.',
          isModifiable: true,
          reductionStrategy: 'Improve ventilation, use cleaner fuels, cook outside when possible.',
          strengthOfRisk: 'major',
        },
      ],

      notYourFault: 'If you smoked, you were dealing with a powerfully addictive substance, often starting when you were young. If your COPD is from occupational exposure, you were just doing your job. What matters now is working with your healthcare team to manage your condition as well as possible.',
    },
  },

  bodyMechanism: {
    whatGoesWrong: {
      simple: 'Your airways become inflamed and narrow, and the tiny air sacs in your lungs get damaged. This makes it hard to get air in and especially out of your lungs.',
      detailed: 'COPD affects two main areas: (1) The bronchial tubes become inflamed, swollen, and produce excess mucus (chronic bronchitis). (2) The tiny air sacs (alveoli) where oxygen enters your blood are destroyed and merge into larger, less efficient spaces (emphysema). Both make breathing harder.',
      comprehensive: 'Pathological changes occur at multiple levels: large airways show goblet cell hyperplasia and squamous metaplasia; small airways (<2mm) show inflammation, fibrosis, and mucus plugging - the major site of airflow obstruction; parenchyma shows alveolar wall destruction with loss of elastic attachments that normally tether airways open, and loss of alveolar surface area for gas exchange. Air trapping and hyperinflation result from expiratory flow limitation - lungs can\'t empty properly, residual volume increases, and inspiratory capacity decreases. Dynamic hyperinflation during exertion worsens dyspnea.',
    },

    affectedAreas: [
      {
        areaName: 'Bronchial tubes (airways)',
        structureId: 'bronchi',
        howAffected: {
          simple: 'Your airways become inflamed, swollen, and filled with mucus, making the passages narrower.',
          detailed: 'The bronchial tubes become chronically inflamed, their walls thicken, and they produce excessive mucus. The muscles around the airways may also tighten (bronchoconstriction). This narrows the airways and makes it harder for air to flow.',
          comprehensive: 'Chronic bronchitis involves airway inflammation with neutrophil and CD8+ T-cell infiltration, goblet cell metaplasia, mucus gland hypertrophy (Reid index >0.5), and submucosal fibrosis. Small airways (<2mm) show more severe changes: peribronchiolar fibrosis, inflammatory exudates, and luminal occlusion by mucus. This represents the major site of airflow limitation in COPD.',
        },
        relatedSymptoms: ['Chronic cough', 'Mucus production', 'Wheezing', 'Shortness of breath'],
      },
      {
        areaName: 'Alveoli (air sacs)',
        structureId: 'lungs',
        howAffected: {
          simple: 'The tiny air sacs where oxygen enters your blood become damaged and destroyed, merging into larger spaces that don\'t work as well.',
          detailed: 'Healthy lungs have millions of tiny, grape-like air sacs (alveoli) with thin walls surrounded by blood vessels. In emphysema, these walls break down, creating larger but fewer air sacs. This reduces the surface area for oxygen exchange and causes the lungs to lose their elastic recoil.',
          comprehensive: 'Emphysema is defined by permanent enlargement of airspaces distal to terminal bronchioles with wall destruction without obvious fibrosis. Centriacinar emphysema (upper-lobe predominant, associated with smoking) affects respiratory bronchioles. Panacinar emphysema (lower-lobe predominant, associated with AAT deficiency) involves entire acinus. Loss of alveolar attachments reduces elastic recoil, causing airway collapse during expiration. Reduced alveolar surface area impairs gas exchange, contributing to hypoxemia.',
        },
        relatedSymptoms: ['Shortness of breath', 'Low oxygen levels', 'Barrel chest appearance', 'Using accessory muscles to breathe'],
      },
      {
        areaName: 'Respiratory muscles',
        structureId: 'diaphragm',
        howAffected: {
          simple: 'Your breathing muscles have to work harder because of air trapping, which can cause them to weaken over time.',
          detailed: 'As COPD progresses, air gets trapped in the lungs (hyperinflation). This pushes the diaphragm down into a flattened position where it works less efficiently. The muscles between your ribs and in your neck start helping with breathing, which requires more energy.',
          comprehensive: 'Hyperinflation places the diaphragm at mechanical disadvantage: shortened muscle fibers generate less force (length-tension relationship), and the flattened dome reduces the zone of apposition. Increased work of breathing and accessory muscle recruitment increase oxygen consumption. Chronic respiratory muscle dysfunction develops in advanced COPD. Pulmonary rehabilitation targeting respiratory muscle training can improve function.',
        },
        relatedSymptoms: ['Fatigue', 'Using neck and chest muscles to breathe', 'Barrel-shaped chest', 'Pursed-lip breathing'],
      },
      {
        areaName: 'Heart',
        structureId: 'heart',
        howAffected: {
          simple: 'Over time, COPD can strain your heart, especially the right side that pumps blood to your lungs.',
          detailed: 'Low oxygen levels cause blood vessels in the lungs to constrict, making it harder for the right side of the heart to pump. This can lead to right heart failure (cor pulmonale) in advanced COPD.',
          comprehensive: 'Hypoxic pulmonary vasoconstriction and pulmonary vascular remodeling increase pulmonary vascular resistance. The right ventricle hypertrophies to compensate (cor pulmonale) but eventually fails, causing peripheral edema and elevated JVP. COPD also increases cardiovascular risk through systemic inflammation, sympathetic activation, and shared risk factors. Cardiovascular disease is a leading cause of death in COPD patients.',
        },
        relatedSymptoms: ['Swelling in ankles/legs', 'Fatigue', 'Worsening shortness of breath'],
      },
    ],

    symptomExplanations: [
      {
        symptom: 'Shortness of breath (dyspnea)',
        whyYouFeelThis: {
          simple: 'Your lungs can\'t move air in and out efficiently. You feel like you can\'t get enough air, especially during activity.',
          detailed: 'Air gets trapped in your lungs because damaged airways collapse during exhalation. This "air trapping" means there\'s less room for fresh air. Your breathing muscles work harder but move less air. During activity, this worsens dramatically.',
          comprehensive: 'Dyspnea in COPD results from: 1) Increased resistive work (airway narrowing), 2) Increased elastic work (hyperinflation), 3) Respiratory muscle dysfunction (mechanical disadvantage), 4) Increased ventilatory demand (V/Q mismatch requires higher minute ventilation), 5) Dynamic hyperinflation during exercise (can\'t exhale completely before next breath). Dyspnea severity correlates with degree of hyperinflation more than FEV1.',
        },
        whatMakesItBetterWorse: {
          better: ['Pursed-lip breathing', 'Leaning forward with arms supported', 'Bronchodilators', 'Oxygen therapy', 'Rest'],
          worse: ['Physical activity', 'Respiratory infections', 'Cold air', 'Air pollution', 'High altitude', 'Lying flat'],
        },
        whenToWorry: 'Sudden severe worsening, shortness of breath at rest, blue lips or fingertips, confusion, or inability to speak in full sentences.',
      },
      {
        symptom: 'Chronic cough',
        whyYouFeelThis: {
          simple: 'Your airways produce more mucus than normal, and your body tries to clear it by coughing.',
          detailed: 'Inflammation causes your airways to produce excess mucus. Since the cilia (tiny hair-like structures that sweep mucus out) are damaged by smoking or inflammation, coughing becomes the main way to clear mucus.',
          comprehensive: 'Chronic bronchitis is defined as productive cough on most days for 3+ months in 2 consecutive years. Goblet cell hyperplasia and mucous gland hypertrophy produce excessive mucus. Ciliary dysfunction from epithelial damage impairs mucociliary clearance. Cough becomes the primary clearance mechanism. Mucus hypersecretion is associated with faster FEV1 decline and increased exacerbation risk.',
        },
        whatMakesItBetterWorse: {
          better: ['Adequate hydration', 'Controlled cough techniques', 'Airway clearance devices', 'Mucolytics'],
          worse: ['Respiratory infections', 'Dry air', 'Irritants', 'Lying down'],
        },
        whenToWorry: 'Coughing up blood, fever with increased mucus production, significantly increased or changed mucus (especially if green/yellow).',
      },
      {
        symptom: 'Wheezing',
        whyYouFeelThis: {
          simple: 'Air passing through narrowed airways makes a whistling sound, like air through a partly closed tube.',
          detailed: 'When airways are narrowed by inflammation, muscle tightness, and mucus, air rushing through creates turbulence and vibration. This produces the characteristic whistling or musical sound of wheezing.',
          comprehensive: 'Wheezing results from oscillation of airway walls and air-liquid interfaces due to turbulent flow through narrowed airways. In COPD, expiratory wheezing predominates due to dynamic airway compression. Inspiratory wheezing may indicate upper airway involvement. Absence of wheezing doesn\'t indicate good airflow - severe obstruction may produce "silent chest."',
        },
        whatMakesItBetterWorse: {
          better: ['Bronchodilators', 'Corticosteroids during exacerbations', 'Avoiding triggers'],
          worse: ['Exacerbations', 'Allergens', 'Cold air', 'Exercise'],
        },
        whenToWorry: 'Sudden severe wheezing with inability to breathe, or if wheezing disappears during severe breathing difficulty (may indicate critical obstruction).',
      },
    ],

    dailyLifeImpact: [
      {
        activity: 'Walking and climbing stairs',
        howAffected: 'Even short walks or a few stairs may cause significant breathlessness, requiring rest breaks.',
        adaptations: ['Pace yourself', 'Use pursed-lip breathing', 'Plan routes with rest spots', 'Consider mobility aids if needed', 'Use handrails'],
      },
      {
        activity: 'Daily tasks (showering, dressing)',
        howAffected: 'Activities requiring arm raising (washing hair, dressing) can cause breathlessness because they use breathing muscles.',
        adaptations: ['Sit while showering or dressing', 'Use long-handled tools', 'Keep frequently used items at waist level', 'Do tasks slowly with rest breaks'],
      },
      {
        activity: 'Eating',
        howAffected: 'Large meals can press on the diaphragm, and eating uses energy and oxygen. Some people lose weight due to increased breathing effort.',
        adaptations: ['Eat smaller, more frequent meals', 'Rest before eating', 'Choose nutrient-dense foods', 'Eat slowly', 'Avoid gas-producing foods'],
      },
      {
        activity: 'Sleep',
        howAffected: 'Lying flat may worsen breathlessness. Oxygen levels often drop during sleep.',
        adaptations: ['Sleep with head elevated', 'Use supplemental oxygen at night if prescribed', 'Treat sleep apnea if present', 'Keep bedroom cool'],
      },
    ],
  },

  diseaseJourney: {
    naturalHistory: {
      simple: 'COPD is a progressive disease. Without treatment and continued smoking, lung function declines faster than normal. With treatment and smoking cessation, the decline slows significantly.',
      detailed: 'Healthy adults lose about 20-30 mL of lung capacity (FEV1) per year after age 30. In COPD with continued smoking, this can be 60+ mL per year. Quitting smoking returns the rate closer to normal. The disease typically progresses through stages of increasing symptoms and limitations.',
      comprehensive: 'COPD natural history follows accelerated FEV1 decline in susceptible smokers (Fletcher-Peto curve). Average FEV1 decline in COPD is 30-60 mL/year vs 20-30 mL/year in healthy non-smokers. Smoking cessation returns decline rate toward normal but doesn\'t recover lost function. Disease trajectory includes: mild (may be undiagnosed), moderate (exertional dyspnea), severe (dyspnea with minimal activity, frequent exacerbations), very severe (respiratory failure, cor pulmonale). Exacerbations accelerate decline and increase mortality. BODE index (BMI, Obstruction, Dyspnea, Exercise capacity) predicts mortality.',
    },

    prognosis: {
      category: 'manageable-progressive',
      explanation: {
        simple: 'COPD is a lifelong condition that tends to worsen over time, but the rate of decline can be slowed with treatment and lifestyle changes. Many people live for many years with COPD.',
        detailed: 'Prognosis varies widely depending on disease severity, continued smoking, exacerbation frequency, and overall health. Quitting smoking is the most important factor in slowing progression. People with mild-moderate COPD who quit smoking can have near-normal life expectancy.',
        comprehensive: 'Prognosis correlates with FEV1, but exercise capacity (6MWT), BMI, dyspnea (mMRC), and exacerbation history are equally important - hence the BODE index. 4-year survival: BODE 0-2: 80%; BODE 7-10: 20%. Frequent exacerbators (≥2/year) have worse prognosis. Mortality causes: respiratory failure (35%), cardiovascular disease (25%), cancer (20%). Smoking cessation improves survival at any stage.',
      },
      factorsAffectingOutcome: [
        'Smoking cessation (most important)',
        'Disease stage at diagnosis',
        'Frequency of exacerbations',
        'Adherence to treatment',
        'Exercise capacity',
        'Nutritional status',
        'Presence of other conditions',
      ],
      whatYouCanControl: [
        'Quitting smoking',
        'Taking medications as prescribed',
        'Getting vaccinations',
        'Attending pulmonary rehabilitation',
        'Staying physically active',
        'Avoiding exacerbation triggers',
        'Learning breathing techniques',
        'Monitoring for exacerbations early',
      ],
    },

    timeline: [
      {
        timeframe: 'At diagnosis',
        whatToExpect: 'Spirometry testing confirms diagnosis. Staging determines severity. Start bronchodilator treatment. Get vaccinations. Smoking cessation is priority #1.',
        milestones: ['Understand your stage', 'Start inhalers', 'Create quit smoking plan', 'Get flu and pneumonia vaccines'],
      },
      {
        timeframe: 'First year',
        whatToExpect: 'Adjusting medications for optimal symptom control. Learning breathing techniques. Starting pulmonary rehabilitation if appropriate.',
        milestones: ['Optimal inhaler regimen', 'Complete pulmonary rehab', 'Establish action plan for exacerbations', 'Monitor for exacerbations'],
      },
      {
        timeframe: 'Long-term management',
        whatToExpect: 'Ongoing monitoring with spirometry. Adjusting treatment as needed. Managing exacerbations. Addressing comorbidities.',
        milestones: ['Annual spirometry', 'Regular provider visits', 'Managing exacerbations effectively', 'Maintaining activity level'],
      },
    ],

    hopeAndReality: 'COPD is a serious condition, but it\'s not a death sentence. Millions of people live full, active lives with COPD. The key is treatment adherence, staying active, and most importantly - if you smoke, quitting. Many patients tell me their COPD diagnosis was actually a wake-up call that led to healthier choices. You can\'t undo lung damage, but you can protect what you have.',
  },

  treatmentRationale: {
    whyTreat: {
      simple: 'Treatment can\'t cure COPD, but it reduces symptoms, improves your ability to exercise and do daily activities, prevents exacerbations, and may slow disease progression.',
      detailed: 'COPD treatment aims to: relieve breathlessness, improve exercise tolerance, prevent and treat exacerbations, improve quality of life, and reduce mortality. While we can\'t reverse lung damage, treatment makes a significant difference in how you feel and function.',
      comprehensive: 'Goals per GOLD guidelines: relieve symptoms, improve exercise tolerance, improve health status, prevent disease progression, prevent and treat exacerbations, reduce mortality. Pharmacotherapy reduces symptoms and exacerbation frequency. Pulmonary rehabilitation improves exercise capacity and quality of life. Supplemental oxygen improves survival in severe hypoxemia. Smoking cessation is the only intervention proven to slow FEV1 decline.',
    },

    goals: [
      {
        goal: 'Reduce breathlessness',
        whyImportant: 'Breathlessness limits activity and quality of life. Reducing it allows you to do more.',
        howMeasured: 'mMRC dyspnea scale, CAT (COPD Assessment Test) score, patient-reported symptoms',
        realisticTimeframe: 'Improvement often noticed within days to weeks of starting bronchodilators',
      },
      {
        goal: 'Prevent exacerbations',
        whyImportant: 'Exacerbations damage lungs further, increase hospitalization risk, and can be life-threatening. Prevention is crucial.',
        howMeasured: 'Number of exacerbations per year, hospitalizations',
        realisticTimeframe: 'Ongoing - risk can be reduced with proper treatment and vaccinations',
      },
      {
        goal: 'Maintain activity level',
        whyImportant: 'Staying active maintains muscle strength, improves breathing efficiency, and prevents deconditioning.',
        howMeasured: '6-minute walk test, daily activity levels',
        realisticTimeframe: 'Pulmonary rehabilitation shows benefits in 6-12 weeks',
      },
    ],

    approaches: [
      {
        name: 'Bronchodilators (cornerstone of treatment)',
        type: 'medication',
        whatItDoes: {
          simple: 'These medications relax the muscles around your airways, opening them up and making breathing easier.',
          detailed: 'Short-acting bronchodilators (SABAs, SAMAs) provide quick relief. Long-acting bronchodilators (LABAs, LAMAs) provide 12-24 hour control and are the foundation of COPD treatment.',
          comprehensive: 'Bronchodilators reduce airway smooth muscle tone via β2-agonism (sympathomimetic) or muscarinic antagonism (anticholinergic). In COPD, improvements in FEV1 don\'t fully capture benefit - reduction in hyperinflation, improved inspiratory capacity, and reduced dynamic hyperinflation during exercise explain symptomatic improvement. LABAs and LAMAs reduce exacerbations. Combination LABA/LAMA provides additive bronchodilation.',
        },
        whyRecommended: 'First-line treatment for all COPD patients. Improves symptoms, exercise capacity, and reduces exacerbations.',
        alternatives: ['Different bronchodilator classes if one isn\'t tolerated'],
        prosAndCons: {
          benefits: ['Improves breathlessness', 'Improves exercise tolerance', 'Reduces exacerbations', 'Generally well-tolerated'],
          drawbacks: ['Must remember to use regularly', 'Inhaler technique important', 'Some cardiovascular effects (more with SABAs)'],
        },
      },
      {
        name: 'Inhaled corticosteroids (ICS)',
        type: 'medication',
        whatItDoes: {
          simple: 'These reduce inflammation in the airways. They\'re often combined with bronchodilators for people with frequent exacerbations.',
          detailed: 'ICS reduce airway inflammation and exacerbation risk in patients with higher eosinophil counts or frequent exacerbations. They\'re usually used in combination with bronchodilators, not alone.',
          comprehensive: 'ICS reduce exacerbations in COPD patients with elevated blood eosinophils (≥300 cells/μL) or history of frequent exacerbations. The FLAME, IMPACT, and ETHOS trials refined ICS positioning: most beneficial in exacerbation-prone patients with eosinophilic phenotype. ICS increase pneumonia risk in COPD (unlike in asthma). Triple therapy (ICS/LABA/LAMA) reduces exacerbations and mortality in appropriate patients. ICS withdrawal can be considered in non-exacerbating patients.',
        },
        whyRecommended: 'For patients with frequent exacerbations or elevated eosinophils. Reduces exacerbation frequency.',
        prosAndCons: {
          benefits: ['Reduces exacerbations', 'Especially effective in eosinophilic COPD', 'Combination inhalers simplify regimen'],
          drawbacks: ['Increased pneumonia risk', 'Oral thrush if technique poor', 'Not all COPD patients benefit'],
        },
      },
      {
        name: 'Pulmonary rehabilitation',
        type: 'therapy',
        whatItDoes: {
          simple: 'A supervised exercise and education program that teaches you how to breathe better, exercise safely, and manage your condition.',
          detailed: 'Pulmonary rehabilitation includes supervised exercise training, breathing techniques, education about COPD, nutrition counseling, and psychological support. It\'s one of the most effective treatments for improving quality of life.',
          comprehensive: 'Pulmonary rehabilitation is a comprehensive intervention including exercise training (aerobic and strength), patient education, breathing retraining, nutritional intervention, and psychosocial support. Benefits include improved exercise capacity (6MWT improvement ~40m), reduced dyspnea, improved quality of life (SGRQ improvement ~8 units), and reduced hospitalization. Benefits persist for 6-12 months post-program. GOLD Grade A evidence for symptomatic patients.',
        },
        whyRecommended: 'One of the most effective treatments available. Benefits patients at all stages.',
        prosAndCons: {
          benefits: ['Significantly improves quality of life', 'Improves exercise capacity', 'Reduces hospitalizations', 'No medication side effects'],
          drawbacks: ['Requires commitment and time', 'May not be available everywhere', 'Benefits wane if not maintained'],
        },
      },
      {
        name: 'Supplemental oxygen',
        type: 'combination',
        whatItDoes: {
          simple: 'For patients with low oxygen levels, supplemental oxygen improves survival and allows more activity.',
          detailed: 'Long-term oxygen therapy (LTOT) is prescribed for patients with severe hypoxemia (oxygen saturation ≤88% or PaO2 ≤55 mmHg at rest). Using oxygen at least 15 hours daily improves survival.',
          comprehensive: 'LTOT criteria: PaO2 ≤55 mmHg or SpO2 ≤88% at rest, or PaO2 56-59 with cor pulmonale/polycythemia. Two landmark trials (NOTT, MRC) demonstrated survival benefit with ≥15 hours daily use. LOTT trial showed no benefit for moderate hypoxemia. Ambulatory oxygen may improve exercise capacity. Compliance is challenging; nasal prongs preferred over masks.',
        },
        whyRecommended: 'For severe hypoxemia, oxygen is life-saving. It improves survival and may allow more activity.',
        prosAndCons: {
          benefits: ['Improves survival in severe hypoxemia', 'May improve energy and mental clarity', 'Can allow more activity'],
          drawbacks: ['Requires equipment (concentrators, tanks)', 'Lifestyle adjustments', 'Fire safety considerations'],
        },
      },
    ],

    untreatedOutcome: 'Without treatment, COPD typically progresses faster. Symptoms worsen, exacerbations become more frequent and severe, and daily activities become increasingly limited. Respiratory failure and early death are more likely. Treatment can\'t reverse COPD, but it significantly improves quality and length of life.',
  },

  livingWith: {
    dailyManagement: [
      {
        task: 'Use inhalers correctly',
        frequency: 'As prescribed - usually daily maintenance inhalers plus rescue inhaler as needed',
        whyImportant: 'Inhalers only work if used correctly. Poor technique means medication doesn\'t reach your lungs.',
        howToDo: 'Follow your specific inhaler instructions. Key steps: shake if needed, breathe out fully, coordinate press and inhalation, hold breath 10 seconds, rinse mouth after ICS.',
        tips: ['Have your technique checked regularly', 'Use a spacer if recommended', 'Keep a rescue inhaler accessible', 'Track refills to ensure adherence'],
      },
      {
        task: 'Monitor for exacerbations',
        frequency: 'Daily awareness',
        whyImportant: 'Early detection and treatment of exacerbations prevents worsening and hospitalization.',
        howToDo: 'Watch for increased breathlessness, more cough, change in mucus color/amount. Know your action plan.',
        tips: ['Keep a symptom diary', 'Have an action plan from your doctor', 'Keep rescue medications at home', 'Know when to call for help'],
      },
      {
        task: 'Stay active',
        frequency: 'Daily - even if just short walks',
        whyImportant: 'Exercise maintains strength, improves breathing efficiency, and prevents deconditioning.',
        howToDo: 'Walking is excellent. Start slowly, use pursed-lip breathing, rest as needed. Gradually increase.',
        tips: ['Use pursed-lip breathing during activity', 'Warm up and cool down', 'Avoid very cold or humid air', 'Exercise with others for motivation'],
      },
      {
        task: 'Breathing exercises',
        frequency: 'Multiple times daily',
        whyImportant: 'Pursed-lip breathing and diaphragmatic breathing reduce breathlessness and anxiety.',
        howToDo: 'Pursed-lip: breathe in through nose (2 counts), out through pursed lips (4 counts) like blowing out a candle.',
        tips: ['Practice when calm so it becomes automatic', 'Use during activity and when breathless', 'Combine with activity pacing'],
      },
    ],

    lifestyleChanges: [
      {
        change: 'Quit smoking',
        category: 'habits',
        whyItHelps: {
          simple: 'Quitting is the single most important thing you can do. It slows lung function decline and improves symptoms.',
          detailed: 'Smoking cessation is the only intervention proven to slow COPD progression. Benefits begin immediately: within weeks, cough and breathing improve. Long-term, it reduces exacerbations and mortality.',
          comprehensive: 'Smoking cessation returns FEV1 decline rate toward normal, reducing from 60+ mL/year to ~30 mL/year in COPD patients. LUNG Health Study showed sustained quitters had slower decline and lower mortality. Combination therapy (NRT + bupropion or varenicline) doubles quit rates. Brief interventions by healthcare providers are effective.',
        },
        howToImplement: ['Set a quit date', 'Use nicotine replacement and/or medications', 'Get support (quitline, counseling)', 'Remove smoking triggers from your environment'],
        evidenceStrength: 'strong',
        expectedBenefit: 'Slows disease progression, reduces exacerbations, improves survival',
      },
      {
        change: 'Get vaccinated',
        category: 'habits',
        whyItHelps: {
          simple: 'Flu and pneumonia can cause severe exacerbations in COPD. Vaccines significantly reduce this risk.',
          detailed: 'Respiratory infections are the leading cause of COPD exacerbations. Annual flu vaccine and pneumococcal vaccines reduce exacerbations, hospitalizations, and death.',
          comprehensive: 'Influenza vaccination reduces COPD exacerbations by ~50% and mortality by ~70% in older COPD patients. Both PPSV23 and PCV13/15/20 are recommended per CDC guidelines. COVID-19 vaccination is particularly important given COPD patients\' increased severe illness risk.',
        },
        howToImplement: ['Annual flu shot every fall', 'Pneumonia vaccines as recommended', 'COVID-19 vaccines and boosters', 'Ask about shingles and pertussis vaccines'],
        evidenceStrength: 'strong',
        expectedBenefit: 'Significant reduction in exacerbations and hospitalizations',
      },
      {
        change: 'Avoid triggers',
        category: 'habits',
        whyItHelps: {
          simple: 'Air pollution, dust, fumes, and cold air can worsen symptoms and trigger exacerbations.',
          detailed: 'Environmental triggers irritate already damaged airways. Avoiding them reduces symptoms and exacerbation risk.',
          comprehensive: 'Environmental exposures (PM2.5, ozone, NO2) are associated with increased COPD exacerbations and mortality. Indoor air quality matters - avoid smoke, strong cleaning products, and dust. Cold air triggers bronchoconstriction; covering mouth/nose helps.',
        },
        howToImplement: ['Check air quality reports', 'Avoid outdoor exercise on high pollution days', 'Use HEPA filters indoors', 'Cover mouth with scarf in cold weather', 'Avoid strong fumes'],
        evidenceStrength: 'moderate',
        expectedBenefit: 'Reduces symptoms and may prevent exacerbations',
      },
    ],

    warningSignsToWatch: [
      {
        sign: 'Increased breathlessness despite treatment',
        whatItMightMean: 'Possible exacerbation starting or worsening COPD',
        urgency: 'call-doctor-today',
        actionToTake: 'Use your action plan. Start rescue medications if prescribed. Contact your doctor.',
      },
      {
        sign: 'Change in mucus (more, thicker, green/yellow)',
        whatItMightMean: 'Possible respiratory infection or exacerbation',
        urgency: 'call-doctor-today',
        actionToTake: 'This often indicates infection. You may need antibiotics and/or steroids per your action plan.',
      },
      {
        sign: 'Fever with worsening respiratory symptoms',
        whatItMightMean: 'Respiratory infection likely',
        urgency: 'call-doctor-today',
        actionToTake: 'Contact your doctor for evaluation. May need antibiotics.',
      },
      {
        sign: 'Severe breathlessness, can\'t speak in sentences',
        whatItMightMean: 'Severe exacerbation requiring emergency care',
        urgency: 'emergency-911',
        actionToTake: 'Call 911. This is a medical emergency.',
      },
      {
        sign: 'Blue lips or fingertips (cyanosis)',
        whatItMightMean: 'Dangerously low oxygen level',
        urgency: 'emergency-911',
        actionToTake: 'Call 911 immediately. Use supplemental oxygen if available.',
      },
      {
        sign: 'Confusion or extreme drowsiness',
        whatItMightMean: 'Possible CO2 buildup (respiratory failure)',
        urgency: 'emergency-911',
        actionToTake: 'Call 911. This suggests respiratory failure.',
      },
      {
        sign: 'Ankle swelling',
        whatItMightMean: 'Possible right heart strain from COPD',
        urgency: 'schedule-soon',
        actionToTake: 'Schedule appointment. May indicate cor pulmonale.',
      },
    ],

    whenToGetHelp: [
      {
        situation: 'Severe breathing difficulty, can\'t catch breath',
        urgency: 'emergency-911',
        whereTogo: 'emergency-room',
        whatToSay: 'I have COPD and I\'m having severe difficulty breathing. I can\'t get enough air.',
      },
      {
        situation: 'Exacerbation not responding to home action plan',
        urgency: 'go-to-er-now',
        whereTogo: 'emergency-room',
        whatToSay: 'I have COPD and am having an exacerbation. My home medications aren\'t helping after [X hours/days].',
      },
      {
        situation: 'Symptoms worsening over days (exacerbation starting)',
        urgency: 'call-doctor-today',
        whereTogo: 'call-doctor',
        whatToSay: 'My COPD symptoms are worsening - more breathlessness, increased/changed mucus. I think I may need treatment.',
      },
    ],

    emotionalSupport: {
      commonFeelings: [
        'Fear and anxiety about breathing',
        'Guilt about smoking history',
        'Frustration about limitations',
        'Depression about progressive disease',
        'Social isolation due to activity limitations',
        'Anxiety about the future',
      ],
      copingStrategies: [
        'Remember: COPD is treatable - focus on what you can control',
        'Join a support group - others understand what you\'re experiencing',
        'Learn relaxation techniques - anxiety worsens breathlessness',
        'Stay connected - isolation worsens depression and outcomes',
        'Focus on what you CAN do, not what you can\'t',
        'Set realistic goals and celebrate achievements',
        'Consider counseling if depression or anxiety persist',
      ],
      supportResources: [
        'COPD Foundation (copdfoundation.org)',
        'American Lung Association (lung.org)',
        'Better Breathers clubs (local support groups)',
        'Pulmonary rehabilitation programs',
        'Online communities and forums',
      ],
    },
  },

  doctorQuestions: {
    atDiagnosis: [
      {
        question: 'What stage is my COPD?',
        whyAsk: 'Understanding your stage (GOLD 1-4) helps you know where you are and what to expect.',
        whatAnswerMeans: 'Stage is based on FEV1: GOLD 1 (mild), GOLD 2 (moderate), GOLD 3 (severe), GOLD 4 (very severe).',
        followUpQuestions: ['What does this mean for my daily life?', 'Can I slow the progression?'],
      },
      {
        question: 'Is there anything that suggests a genetic cause like alpha-1 antitrypsin deficiency?',
        whyAsk: 'AAT deficiency affects treatment and has implications for family members.',
        whatAnswerMeans: 'Testing is recommended for all COPD patients. If positive, specific treatments and family screening are indicated.',
        followUpQuestions: ['Should I be tested?', 'What if it\'s positive?'],
      },
    ],

    aboutTreatment: [
      {
        question: 'Am I using my inhalers correctly?',
        whyAsk: 'Incorrect technique is extremely common and means the medication doesn\'t work properly.',
        whatAnswerMeans: 'Your doctor or pharmacist should watch you demonstrate your inhaler technique.',
        followUpQuestions: ['Can you watch me use it?', 'Would a spacer help?'],
      },
      {
        question: 'Should I attend pulmonary rehabilitation?',
        whyAsk: 'Pulmonary rehab is one of the most effective treatments but is underutilized.',
        whatAnswerMeans: 'Most COPD patients benefit from pulmonary rehab, especially if symptomatic.',
        followUpQuestions: ['Where is the nearest program?', 'What does it involve?'],
      },
    ],

    ongoingCare: [
      {
        question: 'What should I do at the first sign of an exacerbation?',
        whyAsk: 'Having an action plan allows early treatment, which improves outcomes.',
        whatAnswerMeans: 'You should have a written plan with specific steps, including medications to start.',
        followUpQuestions: ['Can I have a written action plan?', 'What medications should I keep at home?'],
      },
      {
        question: 'Do I need supplemental oxygen?',
        whyAsk: 'Oxygen therapy is life-saving for those who need it, but unnecessary for others.',
        whatAnswerMeans: 'Oxygen is indicated for severe hypoxemia (SpO2 ≤88% or specific blood gas criteria).',
        followUpQuestions: ['Should I have my oxygen level checked?', 'Would I need it all the time or just with activity?'],
      },
    ],

    prognosis: [
      {
        question: 'What can I do to slow the progression of my COPD?',
        whyAsk: 'Understanding what you can control empowers you to take action.',
        whatAnswerMeans: 'Smoking cessation is most important. Exercise, vaccination, and treatment adherence all help.',
        followUpQuestions: ['What about diet?', 'How often should I be monitored?'],
      },
    ],
  },

  anatomyLinks: [
    { structureId: 'lungs', structureName: 'Lungs', relevance: 'Where airway narrowing and air sac destruction occur', viewPreset: 'anterior' },
    { structureId: 'bronchi', structureName: 'Bronchial Tubes', relevance: 'Airways that become inflamed and narrowed', viewPreset: 'anterior' },
    { structureId: 'diaphragm', structureName: 'Diaphragm', relevance: 'Main breathing muscle that becomes less efficient with hyperinflation', viewPreset: 'anterior' },
    { structureId: 'heart', structureName: 'Heart', relevance: 'Right side can be strained by COPD (cor pulmonale)', viewPreset: 'anterior' },
  ],

  relatedMedications: ['albuterol', 'ipratropium', 'tiotropium', 'fluticasone-salmeterol', 'budesonide-formoterol', 'roflumilast'],
  relatedTests: ['spirometry', 'chest-xray', 'arterial-blood-gas', 'alpha-1-antitrypsin'],
  relatedConditions: ['asthma', 'heart-failure', 'lung-cancer', 'pulmonary-hypertension', 'anxiety', 'depression'],
};

// =============================================================================
// HEART FAILURE - When the Heart Can't Keep Up
// =============================================================================

const HEART_FAILURE_EDUCATION: ConditionEducation = {
  id: 'heart-failure',
  conditionName: 'Heart Failure',
  medicalName: 'Congestive Heart Failure',
  icdCode: 'I50.9',

  whyMeSection: {
    whatItIs: {
      simple: 'Heart failure means your heart can\'t pump blood as well as it should. This causes fluid to back up in your lungs and body, and your organs don\'t get enough blood flow.',
      detailed: 'Heart failure is a syndrome where the heart muscle is either too weak to pump effectively (systolic/HFrEF) or too stiff to fill properly (diastolic/HFpEF). Either way, the heart can\'t meet the body\'s demands, leading to fatigue, shortness of breath, and fluid retention.',
      comprehensive: 'Heart failure is a clinical syndrome resulting from structural or functional cardiac abnormalities impairing ventricular filling or ejection. Classified by ejection fraction: HFrEF (EF ≤40%), HFmrEF (EF 41-49%), HFpEF (EF ≥50%). Pathophysiology involves neurohormonal activation (RAAS, sympathetic nervous system, natriuretic peptides) which initially compensates but ultimately causes progressive remodeling and decline. Clinical staging (ACC/AHA A-D) and NYHA functional classification guide management.',
      analogy: 'Think of your heart as a pump and your body as a house with plumbing. If the pump weakens, water pressure drops throughout the house (fatigue, dizziness) and water backs up in the pipes (fluid in lungs and legs). Heart failure treatment aims to help the pump work better and reduce the backup.',
      visualMetaphor: 'A comparison of a strong pump with good flow vs. a weak pump with fluid backing up in pipes',
    },

    howCommon: {
      prevalence: 'About 6 million Americans have heart failure, and 900,000 new cases are diagnosed each year. It\'s the most common reason for hospitalization in people over 65.',
      affectedPopulations: 'Risk increases with age (most common after 65). More common in those with hypertension, coronary artery disease, diabetes, obesity, and prior heart attacks. African Americans have higher rates and worse outcomes.',
      patientReassurance: 'Heart failure sounds scary, but treatments have improved dramatically. Many people with heart failure live active, fulfilling lives with proper treatment. Early diagnosis and consistent treatment make a huge difference.',
    },

    whyItHappened: {
      knownCauses: [
        {
          cause: 'Coronary artery disease / Heart attack',
          explanation: {
            simple: 'Blocked arteries starve heart muscle of blood, killing it. The surviving muscle has to work harder, and the damaged areas don\'t pump.',
            detailed: 'A heart attack damages or kills heart muscle, replacing it with scar tissue that can\'t contract. The remaining healthy muscle compensates at first but eventually weakens. This is the most common cause of HFrEF.',
            comprehensive: 'Ischemic cardiomyopathy results from coronary atherosclerosis causing myocardial infarction with irreversible myocyte death, or chronic ischemia causing "hibernating" myocardium. Post-MI remodeling involves infarct expansion, ventricular dilation, and compensatory hypertrophy of non-infarcted segments. This accounts for ~60-70% of systolic HF cases. Revascularization may improve function in viable myocardium.',
          },
          isModifiable: true,
          whatYouCanDo: 'Control risk factors for heart disease: blood pressure, cholesterol, diabetes, smoking, weight. Take aspirin and statins if prescribed.',
        },
        {
          cause: 'Long-standing high blood pressure',
          explanation: {
            simple: 'When blood pressure is high for years, the heart has to work harder to pump against it. Eventually, the heart muscle thickens and stiffens, then weakens.',
            detailed: 'Hypertension forces the heart to pump against increased resistance. The left ventricle thickens (hypertrophy) to compensate, but the thickened muscle becomes stiff, impairing filling (diastolic dysfunction). Eventually, the muscle may weaken (systolic dysfunction).',
            comprehensive: 'Hypertensive heart disease causes concentric LV hypertrophy, diastolic dysfunction, left atrial enlargement, and eventually systolic dysfunction. Pressure overload triggers myocyte hypertrophy via angiotensin II and other mediators. The Framingham Heart Study showed hypertension is the most attributable cause of HF at the population level. HFpEF is particularly associated with hypertension.',
          },
          isModifiable: true,
          whatYouCanDo: 'Control blood pressure consistently. Take medications as prescribed. The DASH diet and exercise help.',
        },
        {
          cause: 'Heart valve problems',
          explanation: {
            simple: 'Leaky or narrow heart valves make the heart work inefficiently. Over time, this extra work weakens the heart.',
            detailed: 'Regurgitant valves (leaking) cause volume overload - the heart has to pump extra blood. Stenotic valves (narrow) cause pressure overload - the heart has to pump harder. Both lead to remodeling and eventual failure.',
            comprehensive: 'Valvular heart disease causes HF through volume overload (regurgitation) or pressure overload (stenosis). Mitral regurgitation causes LV dilation and eccentric hypertrophy. Aortic stenosis causes concentric hypertrophy and diastolic dysfunction, progressing to systolic failure. Severe valve disease often requires surgical or transcatheter intervention. Primary vs secondary (functional) valve disease has different implications.',
          },
          isModifiable: true,
          whatYouCanDo: 'Get evaluated if you have a heart murmur. Valve repair or replacement can prevent or improve heart failure.',
        },
        {
          cause: 'Cardiomyopathy (heart muscle disease)',
          explanation: {
            simple: 'Sometimes the heart muscle itself is diseased due to genetics, alcohol, viral infection, or unknown causes.',
            detailed: 'Cardiomyopathies are diseases of the heart muscle itself. Dilated cardiomyopathy (enlarged, weakened) can be genetic, post-viral, or idiopathic. Other types include hypertrophic (thickened) and restrictive (stiff) cardiomyopathies.',
            comprehensive: 'Non-ischemic cardiomyopathies include: dilated (DCM) - caused by genetics (~30-40%), toxins (alcohol, chemotherapy), viral/inflammatory, peripartum, or idiopathic; hypertrophic (HCM) - genetic sarcomeric mutations, can cause HFpEF or outflow obstruction; restrictive - amyloidosis, sarcoidosis, hemochromatosis. Tachycardia-mediated cardiomyopathy is reversible with rate control. Stress cardiomyopathy (Takotsubo) is usually reversible.',
          },
          isModifiable: false,
          whatYouCanDo: 'Avoid excess alcohol and cardiotoxic drugs. Get genetic screening if family history suggests inherited heart disease.',
        },
        {
          cause: 'Atrial fibrillation',
          explanation: {
            simple: 'An irregular, often rapid heartbeat makes the heart less efficient at pumping. Over time, this can weaken the heart.',
            detailed: 'Atrial fibrillation causes loss of atrial contraction (reducing cardiac output by 15-25%) and often rapid ventricular rates. Persistent rapid rates lead to tachycardia-mediated cardiomyopathy.',
            comprehensive: 'AF contributes to HF through: loss of atrial systole (particularly problematic in HFpEF where atrial contribution to filling is more important), tachycardia-mediated cardiomyopathy from chronic rapid rates (>100-110 bpm), and increased thromboembolic risk. AF and HF often coexist and worsen each other. Rate and rhythm control strategies, plus anticoagulation, are key.',
          },
          isModifiable: true,
          whatYouCanDo: 'Control heart rate and rhythm. Take blood thinners to prevent stroke. Rhythm control (ablation) may help select patients.',
        },
      ],

      riskFactorsThatApply: [
        {
          factor: 'High blood pressure',
          howItContributes: 'Forces heart to work harder. Most important population-attributable risk factor.',
          isModifiable: true,
          reductionStrategy: 'Maintain blood pressure at goal (<130/80 for most). Take medications consistently.',
          strengthOfRisk: 'major',
        },
        {
          factor: 'Coronary artery disease',
          howItContributes: 'Starves heart muscle of blood. Prior heart attack directly damages pump function.',
          isModifiable: true,
          reductionStrategy: 'Control cholesterol, don\'t smoke, manage diabetes, take aspirin and statins if prescribed.',
          strengthOfRisk: 'major',
        },
        {
          factor: 'Diabetes',
          howItContributes: 'Accelerates coronary disease, causes direct heart muscle damage (diabetic cardiomyopathy).',
          isModifiable: true,
          reductionStrategy: 'Control blood sugar. SGLT2 inhibitors reduce HF risk independent of diabetes control.',
          strengthOfRisk: 'major',
        },
        {
          factor: 'Obesity',
          howItContributes: 'Increases workload on heart, promotes hypertension and diabetes, causes metabolic stress on heart.',
          isModifiable: true,
          reductionStrategy: 'Gradual weight loss through diet and exercise. Even modest loss helps.',
          strengthOfRisk: 'major',
        },
        {
          factor: 'Age',
          howItContributes: 'Heart function naturally declines. Years of risk factor exposure accumulate.',
          isModifiable: false,
          strengthOfRisk: 'major',
        },
        {
          factor: 'Family history',
          howItContributes: 'Genetic factors affect heart muscle disease risk and response to damage.',
          isModifiable: false,
          strengthOfRisk: 'moderate',
        },
        {
          factor: 'Heavy alcohol use',
          howItContributes: 'Alcohol is directly toxic to heart muscle, causing alcoholic cardiomyopathy.',
          isModifiable: true,
          reductionStrategy: 'Limit alcohol. If you have alcoholic cardiomyopathy, complete abstinence may allow recovery.',
          strengthOfRisk: 'moderate',
        },
        {
          factor: 'Smoking',
          howItContributes: 'Accelerates coronary disease, raises blood pressure, damages blood vessels.',
          isModifiable: true,
          reductionStrategy: 'Quit smoking. Benefits begin immediately.',
          strengthOfRisk: 'major',
        },
      ],

      notYourFault: 'Heart failure often results from a lifetime of common conditions like high blood pressure and coronary disease, combined with genetic factors. You may have had these conditions without symptoms for years. What matters now is working with your healthcare team on optimal treatment - modern medications can dramatically improve heart failure outcomes.',
    },
  },

  bodyMechanism: {
    whatGoesWrong: {
      simple: 'Your heart can\'t pump blood effectively, so fluid backs up in your lungs and body, and your organs don\'t get enough blood.',
      detailed: 'In heart failure, either the heart muscle is weak (HFrEF) or stiff (HFpEF). Either way, the heart can\'t fill and pump efficiently. The body tries to compensate by retaining fluid and activating stress hormones, but these compensations eventually backfire and make things worse.',
      comprehensive: 'HF pathophysiology involves the heart\'s inability to generate adequate cardiac output at normal filling pressures. Compensatory mechanisms include: 1) Frank-Starling mechanism (stretch increases contractility, but eventually fails), 2) Neurohormonal activation - RAAS causes vasoconstriction and sodium retention, SNS increases heart rate and contractility but also oxygen demand and remodeling, 3) Ventricular remodeling - dilation and hypertrophy initially compensate but progressively worsen function. This neurohormonal paradigm explains why ACE inhibitors, beta-blockers, and MRAs improve outcomes.',
    },

    affectedAreas: [
      {
        areaName: 'Heart muscle',
        structureId: 'heart',
        howAffected: {
          simple: 'The heart muscle is either too weak to pump (systolic failure) or too stiff to fill properly (diastolic failure).',
          detailed: 'In HFrEF, the left ventricle dilates and contracts poorly - the ejection fraction (percentage of blood pumped per beat) falls below 40%. In HFpEF, the ventricle is stiff and doesn\'t relax properly, so it can\'t fill with blood during diastole.',
          comprehensive: 'HFrEF involves decreased contractility with reduced EF, eccentric remodeling, and chamber dilation. Myocyte loss, dysfunction, and replacement fibrosis occur. HFpEF involves concentric remodeling, impaired relaxation (prolonged tau), increased chamber stiffness, and elevated filling pressures despite preserved EF. Both cause elevated LV end-diastolic pressure, transmitted backward to the pulmonary circulation.',
        },
        relatedSymptoms: ['Fatigue', 'Low exercise tolerance', 'Low blood pressure in advanced cases'],
      },
      {
        areaName: 'Lungs',
        structureId: 'lungs',
        howAffected: {
          simple: 'When the heart can\'t pump blood forward, it backs up into the lungs, causing fluid accumulation and difficulty breathing.',
          detailed: 'Elevated pressures in the left heart transmit backward to the pulmonary veins and capillaries. This forces fluid into the lung tissue (pulmonary edema), impairing gas exchange and causing shortness of breath.',
          comprehensive: 'Left-sided failure causes pulmonary venous hypertension. When pulmonary capillary wedge pressure exceeds plasma oncotic pressure (~25 mmHg), transudation into interstitium occurs (interstitial edema), then into alveoli (alveolar edema). This impairs gas exchange, reduces lung compliance, and triggers dyspnea. Pulmonary edema can be acute (flash pulmonary edema) or chronic (exertional dyspnea, orthopnea, PND).',
        },
        relatedSymptoms: ['Shortness of breath', 'Orthopnea (worse lying down)', 'Paroxysmal nocturnal dyspnea (waking up breathless)', 'Cough'],
      },
      {
        areaName: 'Kidneys',
        structureId: 'kidneys',
        howAffected: {
          simple: 'Reduced blood flow to the kidneys makes them retain salt and water, worsening fluid overload.',
          detailed: 'When cardiac output drops, the kidneys perceive decreased blood flow and respond by activating the RAAS system, causing sodium and water retention. This creates a vicious cycle of worsening fluid overload.',
          comprehensive: 'Cardiorenal syndrome involves bidirectional dysfunction. Reduced cardiac output decreases renal perfusion, activating RAAS and causing sodium retention. Venous congestion increases renal interstitial pressure, further impairing filtration. Renal dysfunction limits diuretic response. Aggressive decongestion can improve renal function by reducing venous congestion.',
        },
        relatedSymptoms: ['Decreased urine output', 'Fluid retention', 'Worsening kidney function tests'],
      },
      {
        areaName: 'Legs and body tissues',
        structureId: 'lower-extremities',
        howAffected: {
          simple: 'Fluid backs up in your body, causing swelling especially in the legs and ankles.',
          detailed: 'Right-sided heart failure and chronic left heart failure cause elevated venous pressures throughout the body. Combined with sodium retention, this forces fluid into tissues, causing edema. Gravity means it accumulates in dependent areas - legs when upright, sacrum when lying down.',
          comprehensive: 'Peripheral edema results from elevated central venous pressure and decreased plasma oncotic pressure (hemodilution). Sodium and water retention expand extracellular volume. Third-spacing in peritoneal cavity (ascites), pleural space (pleural effusions), and pericardium can occur. Total body fluid overload correlates with worse prognosis. Weight gain often precedes clinical decompensation.',
        },
        relatedSymptoms: ['Leg/ankle swelling', 'Abdominal swelling (ascites)', 'Weight gain from fluid'],
      },
      {
        areaName: 'Liver',
        structureId: 'liver',
        howAffected: {
          simple: 'Blood backing up from the right heart can cause liver congestion and tenderness.',
          detailed: 'The liver receives blood from the inferior vena cava, which drains into the right heart. When the right heart fails, blood backs up into the liver, causing congestion, enlargement, and sometimes liver dysfunction.',
          comprehensive: 'Hepatic congestion from elevated CVP causes hepatomegaly and tenderness (Kussmaul sign). Chronic congestion leads to cardiac cirrhosis with elevated bilirubin and transaminases. Acute congestion can cause "shock liver" with markedly elevated transaminases. The Model for End-Stage Liver Disease (MELD) score, developed for liver disease, also predicts outcomes in heart failure.',
        },
        relatedSymptoms: ['Right upper abdominal discomfort', 'Enlarged liver', 'Abnormal liver tests'],
      },
    ],

    symptomExplanations: [
      {
        symptom: 'Shortness of breath (especially with activity or lying down)',
        whyYouFeelThis: {
          simple: 'Fluid in your lungs makes it harder to breathe. It\'s worse lying down because fluid redistributes from your legs to your lungs.',
          detailed: 'Elevated left heart pressures force fluid into the lung tissue. During activity, the heart can\'t increase output adequately while pressures rise further. Lying down, blood redistributes from legs to central circulation, worsening pulmonary congestion.',
          comprehensive: 'Dyspnea results from increased work of breathing (reduced lung compliance from edema, increased airway resistance), stimulation of pulmonary J-receptors, respiratory muscle fatigue, and reduced oxygen delivery. Orthopnea reflects redistribution of ~300-500mL blood from legs to central circulation with recumbency. Paroxysmal nocturnal dyspnea occurs when fluid gradually redistributes during sleep, waking the patient.',
        },
        whatMakesItBetterWorse: {
          better: ['Sitting up or standing', 'Diuretics', 'Sleeping with head elevated', 'Oxygen in severe cases'],
          worse: ['Lying flat', 'Exertion', 'Excess salt/fluid intake', 'Missing medications'],
        },
        whenToWorry: 'Sudden severe breathlessness, can\'t lie down at all, waking up gasping, chest pain with breathlessness, or coughing up pink frothy sputum.',
      },
      {
        symptom: 'Leg and ankle swelling (edema)',
        whyYouFeelThis: {
          simple: 'Fluid builds up in your body and collects in your legs and ankles because of gravity.',
          detailed: 'Elevated venous pressure and sodium retention cause fluid to leak from blood vessels into tissues. Gravity pulls this fluid to the lowest parts of your body - legs and ankles when standing/sitting, sacrum when lying down.',
          comprehensive: 'Peripheral edema results from elevated hydrostatic pressure (CVP, lower extremity venous pressure) and sodium retention with expanded extracellular volume. Pitting edema indicates >2-3L excess fluid. Severity graded 1-4+ by depth and rebound time. Weight monitoring is more sensitive than clinical edema assessment for detecting early congestion.',
        },
        whatMakesItBetterWorse: {
          better: ['Elevating legs', 'Diuretics', 'Compression stockings', 'Salt restriction'],
          worse: ['Standing/sitting for long periods', 'High sodium intake', 'Missing diuretic doses', 'Progression of heart failure'],
        },
        whenToWorry: 'Rapid weight gain (>2-3 lbs in a day or >5 lbs in a week), swelling that doesn\'t go down overnight, or swelling with new shortness of breath.',
      },
      {
        symptom: 'Fatigue',
        whyYouFeelThis: {
          simple: 'Your heart can\'t pump enough blood to meet your body\'s needs, so you feel tired.',
          detailed: 'Reduced cardiac output means muscles and organs don\'t get adequate oxygen and nutrients. Skeletal muscle may atrophy from disuse and poor perfusion. The body diverts blood from muscles to vital organs.',
          comprehensive: 'Fatigue in HF is multifactorial: reduced cardiac output and muscle perfusion, skeletal muscle myopathy (reduced mitochondrial function, fiber type shift), neurohormonal activation causing catabolic state, anemia of chronic disease, and depression. Fatigue severity correlates poorly with hemodynamic measures, suggesting peripheral and central mechanisms.',
        },
        whatMakesItBetterWorse: {
          better: ['Rest', 'Optimized heart failure treatment', 'Graduated exercise (pulmonary rehab)', 'Treating anemia if present'],
          worse: ['Exertion', 'Anemia', 'Poor sleep', 'Depression'],
        },
        whenToWorry: 'Fatigue with lightheadedness, near-fainting, or actual fainting episodes.',
      },
    ],

    dailyLifeImpact: [
      {
        activity: 'Physical activity',
        howAffected: 'Exercise capacity is limited by breathlessness and fatigue. Activities that were once easy may become difficult.',
        adaptations: ['Pace yourself', 'Take rest breaks', 'Use aids if needed (wheelchair for long distances)', 'Cardiac rehabilitation can improve tolerance'],
      },
      {
        activity: 'Sleep',
        howAffected: 'Difficulty lying flat, waking up breathless, needing to urinate frequently at night (from fluid redistribution).',
        adaptations: ['Sleep with head elevated (extra pillows or adjustable bed)', 'Take diuretics earlier in the day', 'Limit evening fluids'],
      },
      {
        activity: 'Diet',
        howAffected: 'Must restrict sodium and often fluids. May lose appetite due to GI congestion.',
        adaptations: ['Learn to read nutrition labels', 'Cook at home for better sodium control', 'Small frequent meals if appetite poor', 'Weigh daily'],
      },
      {
        activity: 'Work and social activities',
        howAffected: 'Fatigue and activity limitations may affect work capacity and social life.',
        adaptations: ['Discuss accommodations with employer', 'Plan rest periods', 'Prioritize important activities', 'Stay socially connected'],
      },
    ],
  },

  diseaseJourney: {
    naturalHistory: {
      simple: 'Heart failure is usually a progressive condition, but modern treatments can significantly slow or even reverse decline. Some people remain stable for many years.',
      detailed: 'Untreated heart failure typically worsens over time with periodic decompensations (episodes of worsening symptoms requiring intensified treatment). However, guideline-directed medical therapy can improve heart function, reduce symptoms, and prolong life substantially.',
      comprehensive: 'Natural history depends on etiology, EF, and treatment. Untreated HFrEF has ~50% 5-year mortality. GDMT with ACE/ARB/ARNI, beta-blocker, MRA, and SGLT2i reduces mortality by 50-70% cumulatively. Some patients experience reverse remodeling with EF improvement. Trajectory varies: gradual decline, sudden death, or refractory HF. Frequent hospitalizations predict poor prognosis. Palliative care appropriate for advanced HF.',
    },

    prognosis: {
      category: 'manageable-progressive',
      explanation: {
        simple: 'Heart failure is serious, but outcomes have improved dramatically with modern treatment. Many people live for years with good quality of life.',
        detailed: 'Prognosis depends on the cause, severity, treatment adherence, and response to therapy. With optimal medical therapy, 5-year survival exceeds 70% for many patients. Some patients\' hearts even improve with treatment (reverse remodeling).',
        comprehensive: 'Prognostic factors include: etiology (ischemic worse than non-ischemic), LVEF (worse outcomes with lower EF in HFrEF; HFpEF outcomes depend more on comorbidities), NYHA class, natriuretic peptide levels, renal function, blood pressure (low is concerning), and comorbidities. Seattle Heart Failure Model and other calculators estimate survival. Achieving target doses of GDMT, avoiding hospitalizations, and rehabilitation improve outcomes.',
      },
      factorsAffectingOutcome: [
        'Cause of heart failure (ischemic vs non-ischemic)',
        'Ejection fraction',
        'Response to treatment',
        'Adherence to medications and diet',
        'Frequency of hospitalizations',
        'Other health conditions (diabetes, kidney disease)',
        'Access to specialized heart failure care',
      ],
      whatYouCanControl: [
        'Taking all medications as prescribed',
        'Following sodium and fluid restrictions',
        'Weighing yourself daily',
        'Recognizing early warning signs',
        'Staying active within limits',
        'Attending cardiac rehabilitation',
        'Getting vaccinations',
        'Avoiding alcohol and tobacco',
      ],
    },

    timeline: [
      {
        timeframe: 'At diagnosis',
        whatToExpect: 'Evaluation to determine cause (echocardiogram, possibly other tests). Start guideline-directed medications. Education about diet and monitoring.',
        milestones: ['Echocardiogram', 'Start ACE/ARB/ARNI', 'Start beta-blocker', 'Learn sodium restriction', 'Get scale for daily weights'],
      },
      {
        timeframe: 'First 3-6 months',
        whatToExpect: 'Medication titration to target doses. Monitoring for improvement. May see symptom improvement and even heart function improvement.',
        milestones: ['Reach target medication doses', 'Symptoms stabilize or improve', 'Establish routine monitoring', 'Consider cardiac rehab'],
      },
      {
        timeframe: 'Long-term management',
        whatToExpect: 'Ongoing monitoring and medication adjustment. Goal is to stay stable and out of the hospital.',
        milestones: ['Regular follow-up visits', 'Monitor for decompensation', 'Device evaluation if indicated (ICD, CRT)', 'Address comorbidities'],
      },
    ],

    hopeAndReality: 'Heart failure used to be a rapidly fatal diagnosis. Today, we have medications that can significantly improve heart function and survival. Some patients\' hearts get stronger with treatment. The key is consistent treatment, monitoring, and catching problems early. Many of my patients with heart failure are living full, active lives years after diagnosis.',
  },

  treatmentRationale: {
    whyTreat: {
      simple: 'Treatment reduces symptoms, prevents hospitalizations, and helps you live longer. Some medications can actually help your heart get stronger.',
      detailed: 'Heart failure treatment has two goals: (1) Make you feel better by reducing fluid overload and improving heart function, (2) Help you live longer by blocking harmful hormones and preventing further damage. Modern medications do both.',
      comprehensive: 'GDMT for HFrEF targets neurohormonal activation and remodeling. ACE/ARB/ARNI, beta-blockers, and MRAs all reduce mortality 20-30% individually; effects are additive. SGLT2 inhibitors add further mortality benefit. Together, GDMT can reduce HF mortality by 60-70% compared to no treatment. Device therapy (ICD, CRT) provides additional benefit in selected patients. For HFpEF, diuretics improve symptoms; SGLT2 inhibitors reduce hospitalizations.',
    },

    goals: [
      {
        goal: 'Reduce symptoms and improve quality of life',
        whyImportant: 'You deserve to feel well and do the activities you enjoy.',
        howMeasured: 'Symptom questionnaires, functional capacity, reduced dyspnea and edema',
        realisticTimeframe: 'Diuretics work within days; full benefit of other medications over weeks to months',
      },
      {
        goal: 'Prevent hospitalizations',
        whyImportant: 'Each hospitalization is disruptive and associated with worse outcomes. Staying out of the hospital is a key goal.',
        howMeasured: 'Number of hospitalizations per year',
        realisticTimeframe: 'Ongoing - GDMT reduces hospitalizations by 30-40%',
      },
      {
        goal: 'Improve or preserve heart function',
        whyImportant: 'Reverse remodeling can improve ejection fraction and outcomes.',
        howMeasured: 'Echocardiogram showing improved EF or stable function',
        realisticTimeframe: '6-12 months for maximum reverse remodeling',
      },
      {
        goal: 'Prolong survival',
        whyImportant: 'Heart failure medications significantly extend life.',
        howMeasured: 'Survival, quality-adjusted life years',
        realisticTimeframe: 'Benefits accumulate over years',
      },
    ],

    approaches: [
      {
        name: 'ACE inhibitors, ARBs, or ARNI (sacubitril/valsartan)',
        type: 'medication',
        whatItDoes: {
          simple: 'These medications block harmful hormones that make heart failure worse. They help your heart pump better and reduce strain.',
          detailed: 'ACE inhibitors and ARBs block the renin-angiotensin system that\'s overactivated in heart failure, causing harmful vasoconstriction, sodium retention, and remodeling. ARNI (Entresto) adds neprilysin inhibition, boosting helpful natriuretic peptides.',
          comprehensive: 'ACE inhibitors (enalapril, lisinopril) block angiotensin II formation, reducing vasoconstriction, aldosterone, and remodeling. ARBs block AT1 receptors directly. ARNI combines valsartan with sacubitril (neprilysin inhibitor), raising beneficial NPs while blocking RAAS. PARADIGM-HF showed ARNI reduced mortality 20% vs ACE inhibitor in HFrEF. These are first-line for all HFrEF patients.',
        },
        whyRecommended: 'Reduces mortality by ~20%, improves symptoms, slows progression. Cornerstone of heart failure treatment.',
        prosAndCons: {
          benefits: ['Reduces death and hospitalization', 'Improves symptoms', 'Promotes reverse remodeling', 'Well-established benefit'],
          drawbacks: ['Can lower blood pressure', 'Can raise potassium', 'Cough with ACE inhibitors', 'ARNI cost'],
        },
      },
      {
        name: 'Beta-blockers (carvedilol, metoprolol succinate, bisoprolol)',
        type: 'medication',
        whatItDoes: {
          simple: 'These medications slow your heart rate and protect your heart from harmful stress hormones.',
          detailed: 'In heart failure, the body\'s fight-or-flight response is chronically activated, which further damages the heart. Beta-blockers block this response, allowing the heart to rest and recover.',
          comprehensive: 'Beta-blockers counter chronic sympathetic activation in HF. Initially may transiently worsen symptoms due to negative inotropy, but long-term reduce mortality 30-35% by slowing HR, reducing myocardial oxygen demand, and promoting reverse remodeling. Only carvedilol, metoprolol succinate, and bisoprolol have mortality benefit in HFrEF. Start low, go slow titration. Contraindicated in decompensated HF.',
        },
        whyRecommended: 'Reduces mortality by ~30%, improves heart function over time. Essential for all stable HFrEF patients.',
        prosAndCons: {
          benefits: ['Major mortality reduction', 'Improves heart function', 'Reduces hospitalizations', 'Inexpensive'],
          drawbacks: ['May worsen symptoms initially', 'Fatigue, dizziness', 'Must be started/titrated carefully', 'Cannot use if severely decompensated'],
        },
      },
      {
        name: 'Mineralocorticoid receptor antagonists (spironolactone, eplerenone)',
        type: 'medication',
        whatItDoes: {
          simple: 'These medications block aldosterone, a hormone that causes fluid retention and heart scarring.',
          detailed: 'Aldosterone is elevated in heart failure and causes sodium retention, potassium loss, and harmful fibrosis in the heart. MRAs block these effects.',
          comprehensive: 'MRAs block aldosterone\'s effects on distal nephron (reducing sodium retention and potassium wasting) and cardiac fibroblasts (reducing fibrosis). RALES and EMPHASIS-HF showed ~30% mortality reduction in HFrEF. Watch potassium and renal function. Gynecomastia with spironolactone; eplerenone is more selective.',
        },
        whyRecommended: 'Further reduces mortality ~30% when added to ACE inhibitor and beta-blocker.',
        prosAndCons: {
          benefits: ['Additional mortality benefit', 'Reduces hospitalizations', 'Mild diuretic effect', 'Inexpensive (spironolactone)'],
          drawbacks: ['Can raise potassium', 'Gynecomastia with spironolactone', 'Need to monitor labs'],
        },
      },
      {
        name: 'SGLT2 inhibitors (dapagliflozin, empagliflozin)',
        type: 'medication',
        whatItDoes: {
          simple: 'These newer medications were developed for diabetes but significantly benefit heart failure, even in non-diabetics.',
          detailed: 'SGLT2 inhibitors cause glucose and sodium excretion by the kidneys, reducing fluid overload and having direct protective effects on the heart. They reduce hospitalizations and death in heart failure.',
          comprehensive: 'SGLT2 inhibitors reduce glucose reabsorption in proximal tubule, causing glucosuria and osmotic diuresis. Cardiorenal benefits extend beyond diabetes: DAPA-HF and EMPEROR-Reduced showed ~25% reduction in CV death/HF hospitalization in HFrEF regardless of diabetes status. DELIVER showed benefit in HFpEF. Mechanisms include: natriuresis, reduced preload, improved myocardial energetics, and reduced inflammation. Now guideline-recommended for all HF.',
        },
        whyRecommended: 'Reduces hospitalizations and death. Benefits all heart failure patients, with or without diabetes.',
        prosAndCons: {
          benefits: ['Reduces death and hospitalization', 'Works in HFrEF and HFpEF', 'Modest weight loss', 'Kidney protection'],
          drawbacks: ['Genital yeast infections', 'May need to adjust diuretics', 'Cost', 'Rare ketoacidosis'],
        },
      },
      {
        name: 'Diuretics',
        type: 'medication',
        whatItDoes: {
          simple: 'These "water pills" help your kidneys remove excess fluid, reducing swelling and breathing problems.',
          detailed: 'Diuretics don\'t improve survival but are essential for symptom relief. Loop diuretics (furosemide, bumetanide, torsemide) are most commonly used in heart failure.',
          comprehensive: 'Loop diuretics inhibit Na-K-2Cl cotransporter in ascending limb, producing robust natriuresis. No mortality benefit, but essential for congestion relief. Dose titrated to maintain euvolemia. Diuretic resistance common in advanced HF - may need IV diuretics, combination therapy (add thiazide), or ultrafiltration. Thiazides (metolazone, HCTZ) useful for sequential nephron blockade.',
        },
        whyRecommended: 'Relieves congestion symptoms. Doesn\'t improve survival but essential for quality of life.',
        prosAndCons: {
          benefits: ['Rapidly improves breathlessness and swelling', 'Patient can often adjust dose based on weight'],
          drawbacks: ['No mortality benefit', 'Can cause dehydration if over-diuresed', 'Electrolyte depletion'],
        },
      },
    ],

    untreatedOutcome: 'Without treatment, heart failure is a progressive, fatal condition. Symptoms worsen, hospitalizations become frequent, and life expectancy is shortened dramatically. Modern treatment can change this trajectory entirely.',
  },

  livingWith: {
    dailyManagement: [
      {
        task: 'Weigh yourself daily',
        frequency: 'Every morning, after urinating, before eating',
        whyImportant: 'Weight gain from fluid retention often precedes symptoms by days. Catching it early allows adjustment.',
        howToDo: 'Same time, same scale, same amount of clothing. Record it.',
        tips: ['Keep a log', 'Know your "dry weight"', 'Call if gain >2-3 lbs in a day or >5 lbs in a week'],
      },
      {
        task: 'Take medications as prescribed',
        frequency: 'Daily, on schedule',
        whyImportant: 'Heart failure medications only work if taken consistently. Missing doses allows disease progression.',
        howToDo: 'Use a pill organizer. Take at the same time daily. Don\'t stop without doctor guidance.',
        tips: ['Never stop beta-blocker suddenly', 'Understand why each medication matters', 'Report side effects rather than stopping'],
      },
      {
        task: 'Limit sodium intake',
        frequency: 'Every meal',
        whyImportant: 'Sodium causes fluid retention. Excess sodium can trigger decompensation.',
        howToDo: 'Aim for <2,000mg (ideally <1,500mg) sodium daily. Read labels. Cook at home.',
        tips: ['Processed/restaurant food is high in sodium', 'Don\'t add salt', 'Use herbs and spices for flavor'],
      },
      {
        task: 'Monitor fluid intake',
        frequency: 'Daily',
        whyImportant: 'Excess fluids can worsen congestion, especially in advanced heart failure.',
        howToDo: 'Your doctor will advise if you need a specific limit (typically 1.5-2L/day if restricted).',
        tips: ['Count all fluids (soup, ice, etc.)', 'Spread intake throughout day', 'Suck on ice chips or hard candy for dry mouth'],
      },
    ],

    lifestyleChanges: [
      {
        change: 'Low-sodium diet',
        category: 'diet',
        whyItHelps: {
          simple: 'Less sodium means less fluid retention, less swelling, and easier breathing.',
          detailed: 'Sodium causes your body to hold onto water. Limiting sodium reduces fluid overload and diuretic requirements.',
          comprehensive: 'Sodium restriction (<2g/day) reduces extracellular fluid volume and congestion. Observational data suggest benefit; SODIUM-HF trial showed reduction in clinical events with low-sodium diet. Combined with diuretics, allows lower diuretic doses and fewer electrolyte disturbances.',
        },
        howToImplement: ['Read nutrition labels', 'Cook at home', 'Avoid processed foods', 'Don\'t add salt', 'Choose fresh over canned'],
        evidenceStrength: 'moderate',
        expectedBenefit: 'Reduced congestion, fewer symptoms, less diuretic requirement',
      },
      {
        change: 'Regular exercise (cardiac rehabilitation)',
        category: 'exercise',
        whyItHelps: {
          simple: 'Exercise improves your heart\'s efficiency and your muscles\' ability to use oxygen.',
          detailed: 'Cardiac rehabilitation includes supervised exercise, education, and support. It improves exercise capacity, quality of life, and reduces hospitalizations.',
          comprehensive: 'Exercise training in HF improves peak VO2, 6MWT, quality of life, and reduces hospitalization (HF-ACTION trial). Benefits occur through improved skeletal muscle function, autonomic balance, and possibly myocardial function. Start low, progress gradually under supervision.',
        },
        howToImplement: ['Ask about cardiac rehabilitation', 'Start with walking', 'Progress gradually', 'Exercise with supervision initially'],
        evidenceStrength: 'strong',
        expectedBenefit: 'Improved exercise tolerance and quality of life, reduced hospitalizations',
      },
      {
        change: 'Avoid alcohol',
        category: 'habits',
        whyItHelps: {
          simple: 'Alcohol can weaken the heart muscle and worsen heart failure.',
          detailed: 'Alcohol is directly toxic to heart muscle and can cause or worsen cardiomyopathy. Even moderate amounts may be harmful in some patients.',
          comprehensive: 'Alcoholic cardiomyopathy is reversible with abstinence in many cases. For other etiologies, alcohol\'s negative inotropic effect and potential to trigger arrhythmias are concerns. Complete abstinence is recommended for alcoholic cardiomyopathy; very limited use for others.',
        },
        howToImplement: ['Complete abstinence if alcoholic cardiomyopathy', 'Limit to rare occasions if other etiology', 'Discuss with your doctor'],
        evidenceStrength: 'moderate',
        expectedBenefit: 'May allow heart recovery, prevents further damage',
      },
      {
        change: 'Get vaccinated',
        category: 'habits',
        whyItHelps: {
          simple: 'Infections can trigger heart failure decompensation. Vaccines reduce this risk.',
          detailed: 'Respiratory infections often precipitate heart failure hospitalizations. Flu and pneumonia vaccines significantly reduce this risk.',
          comprehensive: 'Influenza vaccination reduces HF hospitalization and mortality. Both pneumococcal vaccines (PPSV23 and PCV) are recommended. COVID-19 vaccination is important given increased severe illness risk in HF.',
        },
        howToImplement: ['Annual flu shot', 'Pneumonia vaccines as recommended', 'COVID-19 vaccines and boosters'],
        evidenceStrength: 'strong',
        expectedBenefit: 'Reduced hospitalizations and mortality',
      },
    ],

    warningSignsToWatch: [
      {
        sign: 'Weight gain >2-3 lbs in one day or >5 lbs in a week',
        whatItMightMean: 'Fluid retention, possible decompensation starting',
        urgency: 'call-doctor-today',
        actionToTake: 'Call your doctor or use your action plan (may increase diuretic temporarily).',
      },
      {
        sign: 'Increased shortness of breath',
        whatItMightMean: 'Worsening heart failure, fluid in lungs',
        urgency: 'call-doctor-today',
        actionToTake: 'If gradual worsening, call doctor. If sudden and severe, go to ER.',
      },
      {
        sign: 'New or worsening swelling',
        whatItMightMean: 'Fluid retention',
        urgency: 'call-doctor-today',
        actionToTake: 'Check your weight and compare to recent values. Call your doctor.',
      },
      {
        sign: 'Unable to lie flat to sleep',
        whatItMightMean: 'Significant pulmonary congestion',
        urgency: 'call-doctor-today',
        actionToTake: 'This suggests worsening fluid overload. Contact your doctor promptly.',
      },
      {
        sign: 'Waking up at night gasping for air',
        whatItMightMean: 'Paroxysmal nocturnal dyspnea - significant congestion',
        urgency: 'call-doctor-today',
        actionToTake: 'Classic sign of left heart failure. Need urgent evaluation.',
      },
      {
        sign: 'Severe breathing difficulty at rest',
        whatItMightMean: 'Acute decompensation or pulmonary edema',
        urgency: 'emergency-911',
        actionToTake: 'Call 911. This is a medical emergency.',
      },
      {
        sign: 'Chest pain',
        whatItMightMean: 'Could be heart attack or other cardiac emergency',
        urgency: 'emergency-911',
        actionToTake: 'Call 911 immediately.',
      },
      {
        sign: 'Fainting or near-fainting',
        whatItMightMean: 'Could be arrhythmia, low blood pressure, or dehydration',
        urgency: 'go-to-er-now',
        actionToTake: 'Needs urgent evaluation.',
      },
    ],

    whenToGetHelp: [
      {
        situation: 'Severe breathing difficulty, especially at rest',
        urgency: 'emergency-911',
        whereTogo: 'emergency-room',
        whatToSay: 'I have heart failure and I\'m having severe difficulty breathing.',
      },
      {
        situation: 'Gradual worsening over days with weight gain',
        urgency: 'call-doctor-today',
        whereTogo: 'call-doctor',
        whatToSay: 'My heart failure symptoms are worsening. I\'ve gained [X] pounds since [date]. I\'m more short of breath.',
      },
      {
        situation: 'Medication questions or side effects',
        urgency: 'schedule-soon',
        whereTogo: 'call-doctor',
        whatToSay: 'I\'m having [side effect] from my heart failure medications and want to discuss it.',
      },
    ],

    emotionalSupport: {
      commonFeelings: [
        'Fear about the diagnosis and future',
        'Frustration with limitations',
        'Depression and anxiety (common in heart failure)',
        'Feeling like a burden on family',
        'Grief over lost abilities',
      ],
      copingStrategies: [
        'Remember: heart failure is treatable and many people live well with it',
        'Focus on what you CAN do, not what you can\'t',
        'Stay connected with friends and family',
        'Join a support group',
        'Seek help for depression or anxiety - it\'s common and treatable',
        'Cardiac rehabilitation provides both physical and emotional support',
      ],
      supportResources: [
        'American Heart Association (heart.org)',
        'Heart Failure Society of America (hfsa.org)',
        'Mended Hearts support groups',
        'Cardiac rehabilitation programs',
        'Social workers at your cardiology practice',
      ],
    },
  },

  doctorQuestions: {
    atDiagnosis: [
      {
        question: 'What is my ejection fraction?',
        whyAsk: 'EF determines your type of heart failure (HFrEF vs HFpEF) and guides treatment.',
        whatAnswerMeans: 'Normal is 50-70%. HFrEF is ≤40%, HFpEF is ≥50%, HFmrEF is 41-49%.',
        followUpQuestions: ['What type of heart failure do I have?', 'What medications are right for my type?'],
      },
      {
        question: 'What caused my heart failure?',
        whyAsk: 'The cause affects treatment and prognosis. Some causes are treatable.',
        whatAnswerMeans: 'Common causes include CAD, hypertension, valve disease, cardiomyopathy.',
        followUpQuestions: ['Is there a treatable cause?', 'Do I need any procedures?'],
      },
      {
        question: 'What is my NYHA class?',
        whyAsk: 'This describes your functional limitation and guides treatment intensity.',
        whatAnswerMeans: 'Class I (no symptoms) to Class IV (symptoms at rest). Helps track progression.',
        followUpQuestions: ['What stage of heart failure do I have?', 'What\'s my prognosis?'],
      },
    ],

    aboutTreatment: [
      {
        question: 'Am I on all the guideline-recommended medications?',
        whyAsk: 'Multiple medications each provide survival benefit. Being on all of them matters.',
        whatAnswerMeans: 'For HFrEF: should be on ARNI (or ACE/ARB), beta-blocker, MRA, and SGLT2 inhibitor if tolerated.',
        followUpQuestions: ['If I\'m not on one, why not?', 'Are my doses at target?'],
      },
      {
        question: 'What should I do if I gain weight or feel worse?',
        whyAsk: 'Having an action plan allows early intervention and may prevent hospitalization.',
        whatAnswerMeans: 'You should have clear instructions, possibly including adjusting your diuretic.',
        followUpQuestions: ['Can I have a written action plan?', 'At what point should I call you?'],
      },
    ],

    ongoingCare: [
      {
        question: 'Do I need an ICD or pacemaker?',
        whyAsk: 'Devices prevent sudden death and may improve heart function in selected patients.',
        whatAnswerMeans: 'ICD for primary prevention if EF ≤35% after 3 months of GDMT. CRT if EF ≤35% with wide QRS.',
        followUpQuestions: ['What are the benefits and risks?', 'When would I need to decide?'],
      },
      {
        question: 'Should I attend cardiac rehabilitation?',
        whyAsk: 'Cardiac rehab improves symptoms, exercise capacity, and quality of life.',
        whatAnswerMeans: 'Most heart failure patients benefit from cardiac rehabilitation.',
        followUpQuestions: ['Is there a program near me?', 'What does it involve?'],
      },
    ],

    prognosis: [
      {
        question: 'What is my outlook?',
        whyAsk: 'Understanding prognosis helps with planning and decision-making.',
        whatAnswerMeans: 'Depends on many factors. Modern treatment has greatly improved survival.',
        followUpQuestions: ['What can I do to improve my prognosis?', 'Should we discuss advance directives?'],
      },
    ],
  },

  anatomyLinks: [
    { structureId: 'heart', structureName: 'Heart', relevance: 'The pump that\'s weakened or stiffened', viewPreset: 'anterior' },
    { structureId: 'lungs', structureName: 'Lungs', relevance: 'Where fluid accumulates causing breathlessness', viewPreset: 'anterior' },
    { structureId: 'kidneys', structureName: 'Kidneys', relevance: 'Retain fluid in response to low cardiac output', viewPreset: 'posterior' },
    { structureId: 'liver', structureName: 'Liver', relevance: 'Can become congested from right heart failure', viewPreset: 'anterior' },
  ],

  relatedMedications: ['lisinopril', 'carvedilol', 'metoprolol', 'spironolactone', 'furosemide', 'sacubitril-valsartan', 'dapagliflozin'],
  relatedTests: ['echocardiogram', 'bnp', 'basic-metabolic-panel', 'chest-xray', 'cardiac-mri'],
  relatedConditions: ['coronary-artery-disease', 'hypertension', 'atrial-fibrillation', 'chronic-kidney-disease', 'diabetes'],
};

// =============================================================================
// ASTHMA
// =============================================================================

const ASTHMA_EDUCATION: ConditionEducation = {
  id: 'asthma',
  conditionName: 'Asthma',
  medicalName: 'Bronchial Asthma',
  icdCode: 'J45',

  whyMeSection: {
    whatItIs: {
      simple: 'Asthma makes your airways narrow and swell, making it hard to breathe. It can cause wheezing, coughing, and chest tightness.',
      detailed: 'Asthma is a chronic lung condition where the airways become inflamed and narrowed, especially in response to certain triggers. The airways also produce extra mucus. This combination makes breathing difficult and causes symptoms like wheezing, coughing, and shortness of breath.',
      comprehensive: 'Asthma is a chronic inflammatory disease of the airways characterized by variable airflow obstruction and bronchial hyperresponsiveness. The inflammation causes periodic episodes of wheezing, breathlessness, chest tightness, and coughing. These episodes are usually associated with widespread but variable airflow obstruction that is often reversible either spontaneously or with treatment.',
      analogy: 'Think of your airways like flexible tubes. In asthma, the tubes get inflamed and puffy (like a sore throat), the muscles around them squeeze tight (like wringing a wet towel), and they fill with mucus (like a clogged drain). All of this makes the tubes smaller and harder to breathe through.',
      visualMetaphor: 'Breathing through a straw that someone keeps pinching smaller and smaller.',
    },

    howCommon: {
      prevalence: 'About 25 million Americans have asthma - that\'s about 1 in 13 people. It\'s one of the most common chronic conditions.',
      affectedPopulations: 'Asthma can develop at any age. It\'s common in children but many adults develop it too. It runs in families with allergies, eczema, or asthma.',
      patientReassurance: 'You\'re definitely not alone. With proper treatment, the vast majority of people with asthma live completely normal, active lives - including Olympic athletes!',
    },

    whyItHappened: {
      knownCauses: [
        {
          cause: 'Genetic predisposition',
          explanation: {
            simple: 'Asthma runs in families.',
            detailed: 'If your parents or siblings have asthma, allergies, or eczema, you\'re more likely to develop asthma. Your genes influence how reactive your airways are.',
            comprehensive: 'Multiple genes contribute to asthma susceptibility, particularly those involved in immune function (IL-4, IL-13, TSLP), airway reactivity, and epithelial barrier function. Heritability is estimated at 35-95%.',
          },
          isModifiable: false,
        },
        {
          cause: 'Allergic tendency (atopy)',
          explanation: {
            simple: 'Having allergies increases your chance of asthma.',
            detailed: 'People with allergic conditions like hay fever or eczema are more prone to developing asthma because their immune system is already overreactive.',
            comprehensive: 'The atopic march describes the progression from eczema in infancy to allergic rhinitis and asthma in childhood. Up to 80% of asthma patients have allergies, sharing a common type 2 inflammatory pathway.',
          },
          isModifiable: false,
        },
        {
          cause: 'Environmental exposures',
          explanation: {
            simple: 'Things in the air can irritate airways and trigger asthma.',
            detailed: 'Exposure to tobacco smoke, air pollution, dust mites, mold, and other irritants can both cause asthma to develop and trigger attacks.',
            comprehensive: 'Occupational exposures, respiratory viral infections in early childhood, and air pollution contribute to asthma development. The hygiene hypothesis suggests reduced microbial exposure may increase allergic disease risk.',
          },
          isModifiable: true,
          whatYouCanDo: 'Avoid smoke exposure, use air filtration, control dust mites and mold in your home.',
        },
      ],

      riskFactorsThatApply: [
        {
          factor: 'Family history of asthma or allergies',
          howItContributes: 'Genetic factors influence airway reactivity and immune responses.',
          isModifiable: false,
          strengthOfRisk: 'major',
        },
        {
          factor: 'Personal history of allergies',
          howItContributes: 'Allergic rhinitis, eczema, and food allergies are all linked to increased asthma risk through shared inflammatory pathways.',
          isModifiable: false,
          strengthOfRisk: 'major',
        },
        {
          factor: 'Smoking or secondhand smoke exposure',
          howItContributes: 'Smoke directly damages airways and triggers inflammation. Prenatal and childhood exposure are particularly harmful.',
          isModifiable: true,
          reductionStrategy: 'Quit smoking and avoid secondhand smoke completely.',
          strengthOfRisk: 'major',
        },
        {
          factor: 'Obesity',
          howItContributes: 'Extra weight increases systemic inflammation and puts mechanical pressure on airways, making asthma harder to control.',
          isModifiable: true,
          reductionStrategy: 'Weight loss can significantly improve asthma control.',
          strengthOfRisk: 'moderate',
        },
        {
          factor: 'Occupational exposures',
          howItContributes: 'Some workplace chemicals, dust, or fumes can trigger or cause asthma.',
          isModifiable: true,
          reductionStrategy: 'Use protective equipment, work with occupational health to reduce exposures.',
          strengthOfRisk: 'moderate',
        },
      ],

      notYourFault: 'Developing asthma is NOT a character flaw or something you did wrong. It\'s a medical condition caused by the way your immune system and airways are wired - largely determined by genetics. Many athletes, executives, and successful people have asthma. What matters is not why you got it, but how well you manage it.',
    },
  },

  bodyMechanism: {
    whatGoesWrong: {
      simple: 'In asthma, your airways overreact to things that don\'t bother most people. They get inflamed, swell up, and produce mucus, making the tubes smaller and harder to breathe through.',
      detailed: 'The airways of people with asthma are chronically inflamed even when you feel fine. When exposed to triggers, three things happen: 1) The inflammation worsens and airways swell, 2) Muscles around the airways tighten (bronchospasm), 3) Extra mucus is produced. All of this narrows the airways and makes breathing difficult.',
      comprehensive: 'Asthma pathophysiology involves chronic airway inflammation driven primarily by Th2 lymphocytes, mast cells, and eosinophils. Key mediators include IL-4, IL-5, IL-13, and histamine. This leads to structural changes (airway remodeling including subepithelial fibrosis and smooth muscle hypertrophy), bronchial hyperresponsiveness to direct and indirect stimuli, and variable airflow obstruction that is partially or fully reversible.',
    },

    affectedAreas: [
      {
        areaName: 'Airways (bronchi and bronchioles)',
        structureId: 'bronchi',
        howAffected: {
          simple: 'The tubes that carry air to and from your lungs become narrow, swollen, and filled with mucus.',
          detailed: 'Your airways become inflamed and hypersensitive. The lining swells, the muscles around them tighten, and they produce excess thick mucus. All of this obstructs airflow.',
          comprehensive: 'Chronic airway inflammation leads to epithelial damage, goblet cell hyperplasia (excess mucus), smooth muscle hypertrophy and contraction, and subepithelial fibrosis. This creates variable airflow obstruction.',
        },
        relatedSymptoms: ['Wheezing', 'Coughing', 'Shortness of breath', 'Chest tightness'],
      },
      {
        areaName: 'Lungs',
        structureId: 'lungs',
        howAffected: {
          simple: 'Air gets trapped in your lungs when you can\'t exhale fully through narrowed airways.',
          detailed: 'During asthma attacks, the obstruction makes it particularly hard to exhale. Air becomes trapped in the lungs (hyperinflation), which paradoxically makes it even harder to take a deep breath.',
          comprehensive: 'Airflow obstruction is typically worse during expiration, leading to dynamic hyperinflation and increased functional residual capacity. This increases work of breathing and sensation of dyspnea.',
        },
        relatedSymptoms: ['Feeling like you can\'t get a full breath', 'Prolonged exhalation', 'Air trapping'],
      },
    ],

    symptomExplanations: [
      {
        symptom: 'Wheezing',
        whyYouFeelThis: {
          simple: 'Wheezing is air whistling through narrow airways, like wind whistling through a crack.',
          detailed: 'When airways are narrowed by swelling, mucus, or muscle tightening, air being forced through creates turbulent flow and a whistling or squeaky sound.',
          comprehensive: 'Turbulent airflow through narrowed airways produces polyphonic musical sounds, typically heard during expiration but sometimes during inspiration in severe cases.',
        },
        whatMakesItBetterWorse: {
          better: ['Rescue inhaler', 'Removing yourself from triggers', 'Rest', 'Sitting upright'],
          worse: ['Exercise', 'Cold air', 'Allergen exposure', 'Respiratory infections', 'Smoke'],
        },
        whenToWorry: 'Severe wheezing that doesn\'t improve with rescue inhaler, or wheezing that suddenly stops during an attack (may mean airways are too tight to move air).',
      },
      {
        symptom: 'Shortness of breath',
        whyYouFeelThis: {
          simple: 'Narrowed airways make it hard to move air in and out, so you feel breathless.',
          detailed: 'The combination of inflammation, muscle tightening, and mucus blocks airflow. Your lungs trap air, making it hard to take a satisfying breath. Your brain senses the extra work required.',
          comprehensive: 'Dyspnea results from increased airway resistance, dynamic hyperinflation, and stimulation of pulmonary stretch receptors. Air trapping increases work of breathing and activates respiratory drive.',
        },
        whatMakesItBetterWorse: {
          better: ['Rest', 'Rescue inhaler', 'Pursed lip breathing', 'Calm, slow breathing', 'Sitting up'],
          worse: ['Physical activity', 'Trigger exposure', 'Lying flat', 'Anxiety (creates feedback loop)'],
        },
        whenToWorry: 'Breathing hard at rest, unable to speak in full sentences, tripod positioning (leaning forward on hands), blue lips or fingernails.',
      },
      {
        symptom: 'Coughing',
        whyYouFeelThis: {
          simple: 'Your body is trying to clear mucus and irritation from your airways.',
          detailed: 'Inflammation and excess mucus trigger cough receptors in your airways. In some people, coughing is the main or only asthma symptom ("cough-variant asthma").',
          comprehensive: 'Cough in asthma results from increased cough receptor sensitivity in inflamed airways, mucus hypersecretion, and postnasal drip from concurrent allergic rhinitis.',
        },
        whatMakesItBetterWorse: {
          better: ['Controller medications over time', 'Avoiding triggers', 'Staying hydrated'],
          worse: ['Nighttime and early morning', 'Exercise', 'Cold air', 'Respiratory infections', 'Laughing hard'],
        },
        whenToWorry: 'Coughing that prevents sleep night after night, coughing up blood, or cough with fever and colored sputum (may indicate infection).',
      },
    ],

    dailyLifeImpact: [
      {
        activity: 'Exercise and sports',
        howAffected: 'Exercise can trigger symptoms (exercise-induced bronchoconstriction), but with proper management, you can be fully active.',
        adaptations: ['Use rescue inhaler 15 minutes before exercise if prescribed', 'Warm up gradually', 'Consider swimming (warm humid air is easier)', 'Have rescue inhaler available'],
      },
      {
        activity: 'Sleep',
        howAffected: 'Asthma symptoms often worsen at night, disrupting sleep.',
        adaptations: ['Use controller medications consistently', 'Keep bedroom free of allergens', 'Elevate head of bed slightly', 'Keep rescue inhaler at bedside'],
      },
      {
        activity: 'Work and school',
        howAffected: 'Symptoms may be triggered by workplace or school environments.',
        adaptations: ['Identify and avoid triggers', 'Keep rescue inhaler with you', 'Communicate with employer/school about accommodations if needed'],
      },
      {
        activity: 'Travel',
        howAffected: 'New environments may have different triggers.',
        adaptations: ['Bring enough medication plus extra', 'Carry rescue inhaler in carry-on', 'Research air quality and allergens at destination'],
      },
    ],
  },

  diseaseJourney: {
    naturalHistory: {
      simple: 'Asthma is a lifelong condition for most adults, but with proper treatment, symptoms can be well controlled and you can live a completely normal life.',
      detailed: 'Asthma is chronic, meaning it doesn\'t go away, but its severity can change over time. Some children "outgrow" symptoms, though the underlying tendency remains. For adults, asthma typically requires ongoing management, but most people achieve excellent control.',
      comprehensive: 'Asthma natural history is variable. Childhood asthma may remit in adolescence but often recurs in adulthood. Adult-onset asthma is typically persistent. Severity can fluctuate with exposures, hormonal changes, and treatment adherence. With guideline-based management, most patients achieve good control.',
    },

    prognosis: {
      category: 'manageable-variable',
      explanation: {
        simple: 'Asthma is very manageable. Most people with asthma live completely normal, active lives with proper treatment.',
        detailed: 'With appropriate treatment, the vast majority of people with asthma can achieve good symptom control, maintain normal activity levels, and have normal or near-normal lung function. Severity may fluctuate over time.',
        comprehensive: 'Prognosis is generally excellent with guideline-directed therapy. Severe asthma (~5-10% of patients) may be harder to control despite optimal treatment. Risk factors for poor outcomes include delayed or inadequate treatment, poor adherence, continued smoking, and severe exacerbations.',
      },
      factorsAffectingOutcome: [
        'Consistent use of controller medications',
        'Effective trigger avoidance',
        'Early treatment of symptoms and exacerbations',
        'Not smoking',
        'Maintaining healthy weight',
        'Regular follow-up with healthcare provider',
      ],
      whatYouCanControl: [
        'Taking controller medications every day as prescribed',
        'Carrying and using rescue inhaler appropriately',
        'Identifying and avoiding your triggers',
        'Quitting smoking if you smoke',
        'Getting annual flu shot',
        'Monitoring symptoms and adjusting as directed',
      ],
    },

    timeline: [
      {
        timeframe: 'During an asthma attack',
        whatToExpect: 'Symptoms come on over minutes to hours. Rescue inhaler should provide relief within 5-15 minutes.',
        milestones: ['Use rescue inhaler as directed', 'Remove yourself from triggers', 'If not improving, seek help'],
      },
      {
        timeframe: 'Starting controller medications',
        whatToExpect: 'Controller medications take days to weeks to reach full effect since they reduce underlying inflammation.',
        milestones: ['Some improvement in 1-2 weeks', 'Maximum benefit by 4-8 weeks', 'Need fewer rescue inhaler uses'],
      },
      {
        timeframe: 'Well-controlled asthma',
        whatToExpect: 'With good control, you should have minimal symptoms, sleep well, be fully active, and rarely need rescue inhaler.',
        milestones: ['Rescue inhaler use ≤2 times per week', 'No nighttime symptoms', 'No activity limitations', 'Normal or near-normal lung function'],
      },
      {
        timeframe: 'Long-term management',
        whatToExpect: 'Asthma requires ongoing attention, but most people maintain excellent quality of life. Treatment may be stepped up or down based on control.',
        milestones: ['Regular check-ups (every 3-12 months)', 'Adjust medications as needed', 'Annual flu vaccine', 'Written action plan'],
      },
    ],

    hopeAndReality: 'Here\'s the honest truth: Asthma is a chronic condition that requires ongoing management - you can\'t cure it. But the great news is that with modern treatments, almost everyone with asthma can achieve excellent control. Many Olympic athletes, presidents, and celebrities have asthma and lead remarkable lives. The key is taking controller medications consistently (not just when you feel bad), knowing your triggers, and having a plan for when symptoms occur. You can do virtually anything with well-controlled asthma.',
  },

  treatmentRationale: {
    whyTreat: {
      simple: 'Treatment keeps inflammation down and airways open so you can breathe normally, sleep well, and be fully active without attacks.',
      detailed: 'Asthma treatment has two goals: 1) Control underlying inflammation with daily controller medications to prevent symptoms, and 2) Provide quick relief during symptoms with rescue medications. Consistent treatment prevents attacks, protects your lungs, and lets you live normally.',
      comprehensive: 'Treatment aims to achieve and maintain symptom control, minimize exacerbation risk, prevent airway remodeling from chronic inflammation, maintain normal lung function and activity levels, and minimize medication side effects. Guidelines recommend stepwise approach based on control assessment.',
    },

    goals: [
      {
        goal: 'Minimal daytime symptoms',
        whyImportant: 'You shouldn\'t be limited by symptoms during your daily activities.',
        howMeasured: 'Symptoms ≤2 days per week',
        realisticTimeframe: 'Weeks with proper controller treatment',
      },
      {
        goal: 'No nighttime awakening',
        whyImportant: 'Asthma should not disrupt your sleep.',
        howMeasured: 'No waking due to asthma symptoms',
        realisticTimeframe: 'Usually improves within 2-4 weeks of starting controller',
      },
      {
        goal: 'Minimal rescue inhaler use',
        whyImportant: 'Needing rescue medication frequently means your asthma isn\'t controlled.',
        howMeasured: 'Using rescue inhaler ≤2 times per week (not counting pre-exercise use)',
        realisticTimeframe: 'Weeks to months depending on starting severity',
      },
      {
        goal: 'Normal activities including exercise',
        whyImportant: 'You should be able to do everything you want without asthma limiting you.',
        howMeasured: 'No activity limitations due to asthma',
        realisticTimeframe: 'Variable - may require finding right medication combination',
      },
      {
        goal: 'Prevent severe attacks',
        whyImportant: 'Attacks requiring ER visits, hospitalizations, or oral steroids indicate poor control.',
        howMeasured: 'No exacerbations requiring systemic steroids or emergency care',
        realisticTimeframe: 'Ongoing goal',
      },
    ],

    approaches: [
      {
        name: 'Inhaled corticosteroids (ICS) - Controller medications',
        type: 'medication',
        whatItDoes: {
          simple: 'Daily inhaled steroids reduce the inflammation in your airways that causes asthma symptoms.',
          detailed: 'Inhaled corticosteroids are the most effective controller medications. They reduce airway inflammation, decrease mucus production, and make airways less reactive to triggers. Effects build over days to weeks.',
          comprehensive: 'ICS suppress airway inflammation by reducing eosinophilia, mast cell numbers, cytokine production, and airway hyperresponsiveness. They also reduce vascular permeability and mucus secretion. Evidence-based cornerstone of persistent asthma treatment.',
        },
        whyRecommended: 'Foundation of asthma treatment for anyone with persistent symptoms. Reduces symptoms, prevents attacks, and may prevent airway remodeling.',
        alternatives: ['Leukotriene modifiers for very mild asthma or if ICS not tolerated'],
        prosAndCons: {
          benefits: ['Most effective at controlling inflammation', 'Reduces symptoms and attacks', 'Safe for long-term use', 'Local delivery minimizes systemic effects'],
          drawbacks: ['Must be taken daily even when feeling well', 'Potential for thrush or hoarse voice (rinse mouth after use)', 'Effects take days to weeks to fully develop'],
        },
      },
      {
        name: 'Short-acting bronchodilators (SABA) - Rescue medications',
        type: 'medication',
        whatItDoes: {
          simple: 'Rescue inhalers quickly relax the muscles around your airways, opening them up within minutes.',
          detailed: 'Short-acting beta-agonists like albuterol work within minutes by relaxing the smooth muscle that squeezes around your airways during an attack.',
          comprehensive: 'SABAs activate beta-2 adrenergic receptors on airway smooth muscle, causing rapid bronchodilation via cAMP-mediated pathways. Onset within 5 minutes, duration 4-6 hours.',
        },
        whyRecommended: 'Everyone with asthma needs a rescue inhaler for quick relief of symptoms. Should be carried at all times.',
        alternatives: ['Combination ICS-formoterol can be used as both controller and reliever in some regimens'],
        prosAndCons: {
          benefits: ['Works within minutes', 'Highly effective for acute symptoms', 'Safe when used appropriately', 'Easy to carry'],
          drawbacks: ['Does NOT treat underlying inflammation', 'Frequent use indicates poor control', 'Side effects include tremor, rapid heartbeat'],
        },
      },
      {
        name: 'Trigger avoidance',
        type: 'lifestyle',
        whatItDoes: {
          simple: 'Avoiding things that trigger your asthma prevents attacks before they start.',
          detailed: 'Identifying and avoiding your personal triggers (allergens, irritants, exercise, cold air) reduces the frequency and severity of symptoms.',
          comprehensive: 'Environmental control measures reduce allergen and irritant exposure, decreasing airway inflammation and exacerbation risk. Most effective when combined with pharmacotherapy.',
        },
        whyRecommended: 'Prevention is better than treatment. Reduces medication needs and improves quality of life.',
        alternatives: ['Allergy immunotherapy if allergen avoidance is not practical'],
        prosAndCons: {
          benefits: ['Reduces symptoms without medication', 'No side effects', 'Empowering to take control'],
          drawbacks: ['Requires identifying your specific triggers', 'Some triggers are hard to avoid', 'May require environmental changes'],
        },
      },
    ],

    untreatedOutcome: 'Without treatment, asthma symptoms typically persist or worsen over time. Repeated episodes of inflammation can cause permanent changes to your airways (remodeling), making asthma harder to control. Uncontrolled asthma leads to poor sleep, limited activities, missed work or school, frequent ER visits, and risk of severe attacks that can be life-threatening. Good news: these outcomes are highly preventable with proper treatment.',
  },

  livingWith: {
    dailyManagement: [
      {
        task: 'Take controller medication every day',
        frequency: 'Once or twice daily as prescribed',
        whyImportant: 'Controller medications prevent symptoms and attacks by reducing underlying inflammation. They only work if you take them consistently, even when feeling well.',
        howToDo: 'Use at the same time(s) every day. Rinse mouth after inhaled steroids. Link to daily routine like brushing teeth.',
        tips: ['Set a phone reminder', 'Don\'t stop when you feel better - that\'s when it\'s working!', 'Keep track to show your doctor'],
      },
      {
        task: 'Carry rescue inhaler always',
        frequency: 'Have it with you at all times',
        whyImportant: 'You never know when you might encounter a trigger or have symptoms. Quick access to your rescue inhaler can prevent a minor episode from becoming a severe attack.',
        howToDo: 'Keep one with you (purse, pocket, backpack). Have backup at home, work, school, car.',
        tips: ['Check expiration dates', 'Know how many doses are left', 'Replace before it runs out'],
      },
      {
        task: 'Know and avoid your triggers',
        frequency: 'Ongoing awareness',
        whyImportant: 'Prevention is the best treatment. Avoiding triggers means fewer symptoms and less medication needed.',
        howToDo: 'Keep a symptom diary to identify patterns. Common triggers include allergens (dust, pets, pollen, mold), irritants (smoke, strong smells), cold air, exercise, and infections.',
        tips: ['Check pollen and air quality forecasts', 'Consider allergy testing', 'Control indoor allergens'],
      },
      {
        task: 'Monitor symptoms and peak flow',
        frequency: 'Daily awareness, formal monitoring as directed',
        whyImportant: 'Tracking symptoms helps you and your doctor assess control and catch worsening early.',
        howToDo: 'Notice how you\'re breathing each day. Use peak flow meter if prescribed, especially when symptoms change.',
        tips: ['Know your personal best peak flow', 'Follow your action plan zones', 'Report changes to your doctor'],
      },
    ],

    lifestyleChanges: [
      {
        change: 'Quit smoking and avoid all smoke exposure',
        category: 'habits',
        whyItHelps: {
          simple: 'Smoke is one of the worst things for asthma. It makes airways more irritated and medications less effective.',
          detailed: 'Tobacco smoke directly irritates airways, increases inflammation, reduces response to corticosteroids, and accelerates decline in lung function.',
          comprehensive: 'Active and passive smoking exacerbates asthma through oxidative stress, increased airway inflammation, enhanced bronchial hyperresponsiveness, and steroid resistance via reduced histone deacetylase activity.',
        },
        howToImplement: ['Talk to your doctor about cessation aids', 'Avoid secondhand smoke completely', 'Don\'t allow smoking in your home or car'],
        evidenceStrength: 'strong',
        expectedBenefit: 'Better symptom control, fewer attacks, improved medication effectiveness',
      },
      {
        change: 'Exercise regularly',
        category: 'exercise',
        whyItHelps: {
          simple: 'Regular exercise improves your lung function and overall fitness, making breathing easier.',
          detailed: 'Despite exercise sometimes triggering symptoms, regular physical activity improves cardiovascular fitness, respiratory muscle strength, and overall asthma control.',
          comprehensive: 'Exercise training improves aerobic fitness, reduces perceived dyspnea, and may have anti-inflammatory effects. Exercise-induced bronchoconstriction can be managed with pre-treatment and appropriate warm-up.',
        },
        howToImplement: ['Use rescue inhaler 15 min before if prescribed', 'Warm up gradually for 10-15 minutes', 'Consider swimming - warm humid air is well tolerated', 'Avoid exercising in cold, dry air or high pollution'],
        evidenceStrength: 'strong',
        expectedBenefit: 'Improved fitness, potentially better asthma control, ability to tolerate higher activity levels',
      },
      {
        change: 'Maintain healthy weight',
        category: 'diet',
        whyItHelps: {
          simple: 'Extra weight makes asthma harder to control and medications less effective.',
          detailed: 'Obesity is associated with more severe asthma, poorer medication response, and increased inflammation. Weight loss can significantly improve asthma control.',
          comprehensive: 'Obesity increases asthma severity through mechanical effects on airways, systemic inflammation, and altered adipokine profiles. Weight loss improves lung function, airway hyperresponsiveness, and asthma control.',
        },
        howToImplement: ['Focus on balanced nutrition', 'Regular physical activity', 'Talk to your doctor about weight management strategies'],
        evidenceStrength: 'strong',
        expectedBenefit: 'Better asthma control, improved medication effectiveness',
      },
      {
        change: 'Get vaccinated annually',
        category: 'habits',
        whyItHelps: {
          simple: 'Respiratory infections can trigger severe asthma attacks. Vaccines reduce this risk.',
          detailed: 'Influenza and other respiratory infections are major triggers for asthma exacerbations. Annual flu vaccination significantly reduces this risk.',
          comprehensive: 'Viral respiratory infections, particularly influenza, are common precipitants of severe exacerbations. Vaccination reduces infection-triggered exacerbations and is recommended for all asthma patients.',
        },
        howToImplement: ['Get annual flu shot', 'Stay up to date on COVID-19 vaccines', 'Consider pneumonia vaccine if recommended'],
        evidenceStrength: 'strong',
        expectedBenefit: 'Fewer severe asthma attacks triggered by infections',
      },
    ],

    warningSignsToWatch: [
      {
        sign: 'Using rescue inhaler more than twice a week',
        whatItMightMean: 'Your asthma is not well controlled. You may need a controller medication or a higher dose.',
        urgency: 'schedule-soon',
        actionToTake: 'Contact your doctor to discuss your treatment plan. You shouldn\'t be relying heavily on your rescue inhaler.',
      },
      {
        sign: 'Waking at night with asthma symptoms',
        whatItMightMean: 'Nighttime symptoms are a sign of poor asthma control.',
        urgency: 'schedule-soon',
        actionToTake: 'Contact your doctor - you likely need a change in your controller medication.',
      },
      {
        sign: 'Symptoms limiting your normal activities',
        whatItMightMean: 'Asthma should not prevent you from doing what you want to do.',
        urgency: 'schedule-soon',
        actionToTake: 'Talk to your doctor about optimizing your treatment.',
      },
      {
        sign: 'Peak flow dropping into yellow or red zone',
        whatItMightMean: 'Your airways are narrowing and an attack may be coming.',
        urgency: 'call-doctor-today',
        actionToTake: 'Follow your asthma action plan for yellow or red zone.',
      },
      {
        sign: 'Rescue inhaler not providing relief',
        whatItMightMean: 'This may be a severe attack that needs emergency treatment.',
        urgency: 'emergency-911',
        actionToTake: 'If rescue inhaler isn\'t helping after proper use, this is an emergency. Seek immediate care.',
      },
    ],

    whenToGetHelp: [
      {
        situation: 'Rescue inhaler not relieving symptoms after 2-3 uses',
        urgency: 'go-to-er-now',
        whereTogo: 'emergency-room',
        whatToSay: 'I\'m having an asthma attack that isn\'t responding to my rescue inhaler.',
      },
      {
        situation: 'Severe shortness of breath - can\'t speak in full sentences',
        urgency: 'emergency-911',
        whereTogo: 'emergency-room',
        whatToSay: 'Severe asthma attack - can\'t breathe.',
      },
      {
        situation: 'Blue lips or fingernails',
        urgency: 'emergency-911',
        whereTogo: 'emergency-room',
        whatToSay: 'Asthma attack - I\'m turning blue.',
      },
      {
        situation: 'Symptoms worsening over several days despite treatment',
        urgency: 'call-doctor-today',
        whereTogo: 'call-doctor',
        whatToSay: 'My asthma symptoms have been getting worse over the past few days despite using my medications.',
      },
      {
        situation: 'Using rescue inhaler frequently (more than 2x per week)',
        urgency: 'schedule-soon',
        whereTogo: 'call-doctor',
        whatToSay: 'I\'m using my rescue inhaler a lot - I think my asthma isn\'t well controlled.',
      },
    ],

    emotionalSupport: {
      commonFeelings: [
        'Frustration with having a chronic condition',
        'Anxiety about having attacks, especially in public',
        'Fear about exercise or physical activity',
        'Embarrassment about using inhalers',
        'Worry about being a burden during activities',
      ],
      copingStrategies: [
        'Remember: well-controlled asthma should not limit your life',
        'Many successful athletes and public figures have asthma',
        'Using your inhaler is not a sign of weakness - it\'s smart self-care',
        'Anxiety can worsen symptoms, so learning relaxation techniques helps',
        'Connect with others who have asthma',
        'Focus on what you CAN do with good control',
      ],
      supportResources: [
        'American Lung Association (lung.org)',
        'Asthma and Allergy Foundation of America (aafa.org)',
        'Your asthma educator or respiratory therapist',
        'Local support groups',
        'School nurse or workplace health services',
      ],
    },
  },

  doctorQuestions: {
    atDiagnosis: [
      {
        question: 'What type of asthma do I have?',
        whyAsk: 'Asthma has different patterns (allergic, exercise-induced, etc.) that affect treatment.',
        whatAnswerMeans: 'Helps you understand your triggers and what treatments will work best.',
        followUpQuestions: ['Should I get allergy testing?', 'What are my specific triggers?'],
      },
      {
        question: 'Do I need a controller medication?',
        whyAsk: 'If you have symptoms more than twice a week, you likely need daily controller treatment.',
        whatAnswerMeans: 'Assessment of your asthma severity and appropriate treatment level.',
        followUpQuestions: ['How long until it works?', 'What about side effects?'],
      },
      {
        question: 'Can you show me how to use my inhalers correctly?',
        whyAsk: 'Incorrect technique is very common and dramatically reduces medication effectiveness.',
        whatAnswerMeans: 'Ensures you\'re getting the full dose of medication to your airways.',
        followUpQuestions: ['Should I use a spacer?', 'Can I see written instructions?'],
      },
    ],

    aboutTreatment: [
      {
        question: 'Can you write me an asthma action plan?',
        whyAsk: 'A written plan tells you exactly what to do when symptoms change - critical for safety.',
        whatAnswerMeans: 'Clear instructions for green (good), yellow (caution), and red (emergency) zones.',
        followUpQuestions: ['When should I call you versus go to the ER?'],
      },
      {
        question: 'What should I do before exercise?',
        whyAsk: 'Exercise-induced symptoms are common but very manageable with proper preparation.',
        whatAnswerMeans: 'Specific instructions for pre-treatment and warm-up.',
        followUpQuestions: ['Are there any activities I should avoid?'],
      },
      {
        question: 'Are my medications at the right doses?',
        whyAsk: 'Asthma treatment should be "stepped" up or down based on your control.',
        whatAnswerMeans: 'Assessment of whether you need more, less, or different treatment.',
        followUpQuestions: ['How often should we reassess?'],
      },
    ],

    ongoingCare: [
      {
        question: 'How often should I follow up?',
        whyAsk: 'Regular monitoring helps maintain control and catch problems early.',
        whatAnswerMeans: 'Typically every 3-12 months depending on your control level.',
        followUpQuestions: ['What symptoms should prompt an earlier visit?'],
      },
      {
        question: 'Should I see a specialist?',
        whyAsk: 'Allergists or pulmonologists may help if asthma is difficult to control.',
        whatAnswerMeans: 'Assessment of whether specialty care would benefit you.',
        followUpQuestions: ['What additional testing might help?'],
      },
    ],

    prognosis: [
      {
        question: 'Can my asthma get better over time?',
        whyAsk: 'Understanding the expected course helps with planning.',
        whatAnswerMeans: 'Severity may change, but asthma typically requires ongoing management.',
        followUpQuestions: ['What factors affect my long-term outlook?'],
      },
      {
        question: 'What can I do to have the best outcomes?',
        whyAsk: 'Empowers you to take control of your health.',
        whatAnswerMeans: 'Key actions: medication adherence, trigger avoidance, not smoking, healthy weight.',
        followUpQuestions: ['Are there new treatments I should know about?'],
      },
    ],
  },

  anatomyLinks: [
    { structureId: 'lungs', structureName: 'Lungs', relevance: 'Asthma affects the airways within the lungs', viewPreset: 'anterior' },
    { structureId: 'bronchi', structureName: 'Bronchi', relevance: 'The airways that become inflamed and narrowed in asthma', viewPreset: 'anterior' },
  ],

  relatedMedications: ['albuterol', 'fluticasone', 'budesonide', 'montelukast', 'prednisone', 'salmeterol'],
  relatedTests: ['spirometry', 'peak-flow', 'allergy-testing', 'fractional-exhaled-nitric-oxide'],
  relatedConditions: ['allergic-rhinitis', 'eczema', 'gerd', 'copd', 'sinusitis'],
};

// =============================================================================
// CORONARY ARTERY DISEASE
// =============================================================================

const CORONARY_ARTERY_DISEASE_EDUCATION: ConditionEducation = {
  id: 'coronary-artery-disease',
  conditionName: 'Coronary Artery Disease',
  medicalName: 'Atherosclerotic Coronary Heart Disease',
  icdCode: 'I25',

  whyMeSection: {
    whatItIs: {
      simple: 'The arteries that supply blood to your heart become narrowed or blocked by plaque buildup, which can cause chest pain or heart attacks.',
      detailed: 'Coronary artery disease (CAD) develops when cholesterol and other substances build up in the walls of your heart\'s arteries (atherosclerosis), narrowing them and reducing blood flow to the heart muscle. This can cause chest pain (angina) during exertion, and if an artery becomes completely blocked, a heart attack.',
      comprehensive: 'Coronary artery disease is the result of atherosclerosis in the coronary arteries. Plaques form from lipid accumulation, inflammatory cell infiltration, smooth muscle proliferation, and calcification. These plaques can cause stable angina through flow-limiting stenosis, or acute coronary syndromes (unstable angina, NSTEMI, STEMI) through plaque rupture and thrombosis.',
      analogy: 'Think of your heart\'s arteries like the pipes in your home. Over time, gunk can build up inside the pipes, narrowing them and reducing water flow. In CAD, fatty deposits (plaque) build up inside your coronary arteries, restricting blood flow to your heart muscle.',
      visualMetaphor: 'Pipes with rust and buildup narrowing the opening over time.',
    },

    howCommon: {
      prevalence: 'CAD is the leading cause of death worldwide. About 20 million Americans have it. About 1 in 20 adults over 20 has CAD.',
      affectedPopulations: 'More common with age, in men (though women catch up after menopause), and in people with risk factors like high cholesterol, high blood pressure, diabetes, smoking, and family history.',
      patientReassurance: 'CAD is extremely common, and modern treatment is very effective. With proper management, most people with CAD live long, active lives and many never have a heart attack.',
    },

    whyItHappened: {
      knownCauses: [
        {
          cause: 'Atherosclerosis (plaque buildup)',
          explanation: {
            simple: 'Fatty deposits gradually build up inside your heart\'s arteries over many years.',
            detailed: 'Cholesterol, inflammatory cells, and other substances accumulate in artery walls, forming plaques that narrow the arteries. This process begins in childhood and progresses over decades.',
            comprehensive: 'Atherosclerosis begins with endothelial injury from risk factors like hypertension, smoking, and diabetes. LDL cholesterol infiltrates the artery wall, becomes oxidized, and triggers an inflammatory response. Macrophages engulf lipids to become foam cells. Over time, smooth muscle cells migrate and produce a fibrous cap over a lipid-rich core.',
          },
          isModifiable: true,
          whatYouCanDo: 'Lower LDL cholesterol with statins and diet, control blood pressure, quit smoking, manage diabetes.',
        },
        {
          cause: 'Inflammation',
          explanation: {
            simple: 'Inflammation in your arteries helps plaques form and can make them unstable.',
            detailed: 'The immune system plays a major role in atherosclerosis. Chronic low-grade inflammation promotes plaque formation and can trigger plaque rupture leading to heart attacks.',
            comprehensive: 'Vascular inflammation involves innate and adaptive immunity. Inflammatory markers like CRP, IL-6, and IL-1β are associated with cardiovascular risk. Anti-inflammatory therapies show promise in reducing events.',
          },
          isModifiable: true,
          whatYouCanDo: 'Statins have anti-inflammatory effects. Healthy diet and exercise reduce inflammation. Avoid smoking.',
        },
      ],

      riskFactorsThatApply: [
        {
          factor: 'High LDL cholesterol',
          howItContributes: 'LDL ("bad") cholesterol is the primary driver of plaque formation. It deposits in artery walls and starts the atherosclerosis process.',
          isModifiable: true,
          reductionStrategy: 'Statins can reduce LDL by 30-50%. Add diet changes, ezetimibe, or PCSK9 inhibitors for additional lowering.',
          strengthOfRisk: 'major',
        },
        {
          factor: 'High blood pressure',
          howItContributes: 'Hypertension damages the artery lining, promotes plaque formation, and can destabilize existing plaques. It also increases heart workload.',
          isModifiable: true,
          reductionStrategy: 'Goal is usually <130/80 with lifestyle and medications.',
          strengthOfRisk: 'major',
        },
        {
          factor: 'Smoking',
          howItContributes: 'Smoking damages artery walls, promotes inflammation, increases clotting tendency, and reduces HDL ("good") cholesterol. Risk doubles or triples with smoking.',
          isModifiable: true,
          reductionStrategy: 'Quitting reduces risk by 50% within one year. Talk to your doctor about cessation aids.',
          strengthOfRisk: 'major',
        },
        {
          factor: 'Diabetes',
          howItContributes: 'High blood sugar damages blood vessels, accelerates atherosclerosis, and is associated with worse outcomes. CAD is the leading cause of death in people with diabetes.',
          isModifiable: true,
          reductionStrategy: 'Tight glucose control, certain diabetes medications (SGLT2 inhibitors, GLP-1 agonists) provide cardiovascular benefit.',
          strengthOfRisk: 'major',
        },
        {
          factor: 'Family history of early heart disease',
          howItContributes: 'If your father/brother had CAD before age 55, or mother/sister before 65, your risk is significantly increased due to shared genetic and environmental factors.',
          isModifiable: false,
          reductionStrategy: 'Can\'t change genes, but knowing your risk should motivate aggressive risk factor control.',
          strengthOfRisk: 'major',
        },
        {
          factor: 'Obesity',
          howItContributes: 'Excess weight promotes inflammation, raises LDL, lowers HDL, increases blood pressure, and promotes diabetes.',
          isModifiable: true,
          reductionStrategy: 'Even modest weight loss (5-10%) improves cardiovascular risk factors.',
          strengthOfRisk: 'moderate',
        },
        {
          factor: 'Physical inactivity',
          howItContributes: 'Sedentary lifestyle promotes obesity, raises LDL, lowers HDL, and increases diabetes risk.',
          isModifiable: true,
          reductionStrategy: '150 minutes/week of moderate activity significantly reduces risk.',
          strengthOfRisk: 'moderate',
        },
      ],

      notYourFault: 'Developing CAD is NOT a moral failing. While lifestyle plays a role, genetics and other factors beyond your control significantly contribute. Some people do everything "right" and still develop CAD, while others with many risk factors don\'t. What matters now is how you manage it going forward - and modern treatment is very effective.',
    },
  },

  bodyMechanism: {
    whatGoesWrong: {
      simple: 'Fat and cholesterol build up inside the arteries that supply blood to your heart. When these arteries get too narrow, your heart doesn\'t get enough blood and oxygen, especially during activity.',
      detailed: 'Atherosclerotic plaques develop in your coronary arteries over decades. These plaques narrow the artery, reducing blood flow. When your heart works harder (exercise, stress), it needs more blood - but narrowed arteries can\'t deliver enough. This causes chest pain (angina). If a plaque ruptures and a blood clot forms, it can completely block the artery, causing a heart attack.',
      comprehensive: 'Atherosclerosis progresses through stages: fatty streak → fibroatheroma → complicated plaque. Stable plaques typically have thick fibrous caps and cause stable angina from flow-limiting stenosis. Vulnerable plaques have thin caps, large lipid cores, and are prone to rupture. Plaque rupture exposes thrombogenic material, triggering platelet aggregation and thrombus formation, causing acute coronary syndromes.',
    },

    affectedAreas: [
      {
        areaName: 'Coronary arteries',
        structureId: 'coronary-arteries',
        howAffected: {
          simple: 'These arteries supply blood to your heart muscle. Plaque buildup narrows them, reducing blood flow.',
          detailed: 'The three main coronary arteries (left anterior descending, left circumflex, and right coronary artery) and their branches become progressively narrowed by atherosclerotic plaques.',
          comprehensive: 'Atherosclerotic lesions typically develop at branch points and areas of disturbed flow. Plaque burden may be underestimated by angiography due to positive remodeling (outward expansion). IVUS and OCT reveal more disease than angiography alone.',
        },
        relatedSymptoms: ['Angina (chest pain)', 'Shortness of breath with exertion', 'Heart attack if completely blocked'],
      },
      {
        areaName: 'Heart muscle (myocardium)',
        structureId: 'heart',
        howAffected: {
          simple: 'When coronary arteries are narrowed, your heart muscle doesn\'t get enough blood, especially during activity.',
          detailed: 'Reduced blood flow causes ischemia - the heart muscle is temporarily starved of oxygen. Brief ischemia causes angina. Prolonged complete blockage causes heart attack (myocardial infarction), where heart muscle actually dies.',
          comprehensive: 'Myocardial ischemia occurs when oxygen demand exceeds supply. Ischemia causes metabolic changes, regional wall motion abnormalities, and eventually ST changes on ECG and anginal symptoms. Infarction results from prolonged ischemia (>20 minutes), causing irreversible myocyte necrosis.',
        },
        relatedSymptoms: ['Chest pain/pressure', 'Shortness of breath', 'Reduced exercise tolerance', 'Heart failure if significant damage'],
      },
    ],

    symptomExplanations: [
      {
        symptom: 'Angina (chest pain or pressure)',
        whyYouFeelThis: {
          simple: 'When your heart isn\'t getting enough blood, you feel discomfort in your chest. It\'s your heart\'s way of saying "I need more oxygen."',
          detailed: 'During activity, your heart muscle needs more oxygen. If the coronary arteries are narrowed and can\'t deliver enough, the muscle becomes ischemic and produces pain signals.',
          comprehensive: 'Myocardial ischemia causes anaerobic metabolism, lactate accumulation, and release of adenosine and other metabolites that stimulate cardiac afferent nerves. This produces the characteristic visceral sensation of angina.',
        },
        whatMakesItBetterWorse: {
          better: ['Rest', 'Nitroglycerin (dilates arteries)', 'Sitting up'],
          worse: ['Physical exertion', 'Emotional stress', 'Cold weather', 'Large meals', 'Climbing stairs'],
        },
        whenToWorry: 'New chest pain, pain at rest, pain lasting more than a few minutes, pain not relieved by rest or nitroglycerin, or pain that\'s different from your usual angina - these may indicate unstable angina or heart attack. Call 911.',
      },
      {
        symptom: 'Shortness of breath',
        whyYouFeelThis: {
          simple: 'When your heart can\'t pump efficiently due to lack of blood flow, fluid can back up into your lungs, making breathing harder.',
          detailed: 'Ischemia impairs heart pumping function. When the left ventricle can\'t contract properly, blood backs up, filling pressures rise, and fluid leaks into the lungs.',
          comprehensive: 'Ischemic left ventricular dysfunction causes elevated left ventricular end-diastolic pressure, which transmits to the pulmonary circulation, causing pulmonary congestion and dyspnea.',
        },
        whatMakesItBetterWorse: {
          better: ['Rest', 'Sitting upright', 'Treatment of ischemia'],
          worse: ['Exertion', 'Lying flat', 'Significant ischemia'],
        },
        whenToWorry: 'Sudden severe shortness of breath, or breathlessness at rest, especially with chest discomfort - this is an emergency.',
      },
      {
        symptom: 'Fatigue with activity',
        whyYouFeelThis: {
          simple: 'If your heart can\'t get enough blood, it can\'t pump efficiently, so your muscles and body don\'t get the oxygen they need.',
          detailed: 'Reduced cardiac output from ischemia means less blood flow to working muscles, causing fatigue during activities that used to be easy.',
          comprehensive: 'Chronically reduced cardiac reserve from CAD limits exercise capacity. Patients may unconsciously limit activity, developing deconditioning that worsens exercise intolerance.',
        },
        whatMakesItBetterWorse: {
          better: ['Rest', 'Cardiac rehabilitation', 'Optimized medical therapy'],
          worse: ['Exertion', 'Deconditioning', 'Progression of disease'],
        },
        whenToWorry: 'Progressive decline in exercise tolerance or new inability to do usual activities.',
      },
    ],

    dailyLifeImpact: [
      {
        activity: 'Exercise and physical activity',
        howAffected: 'May be limited by angina or shortness of breath during exertion.',
        adaptations: ['Take nitroglycerin before activities that cause angina', 'Warm up gradually', 'Participate in cardiac rehabilitation', 'Learn your limits but stay as active as safely possible'],
      },
      {
        activity: 'Work',
        howAffected: 'Most people with CAD can continue working, though very strenuous jobs may need modification.',
        adaptations: ['Pace yourself', 'Avoid extremes of temperature', 'Take breaks as needed', 'Discuss with doctor if job requires heavy labor'],
      },
      {
        activity: 'Diet',
        howAffected: 'Need to focus on heart-healthy eating to control cholesterol, blood pressure, and weight.',
        adaptations: ['Mediterranean diet', 'Limit saturated fat and sodium', 'Eat more fish, vegetables, whole grains', 'Control portions'],
      },
      {
        activity: 'Emotional health',
        howAffected: 'Anxiety about having heart disease is common and normal.',
        adaptations: ['Cardiac rehabilitation includes psychological support', 'Depression is common after heart events - seek help', 'Support groups help', 'Controlled exercise reduces anxiety'],
      },
    ],
  },

  diseaseJourney: {
    naturalHistory: {
      simple: 'CAD is a chronic condition that develops over decades and tends to progress over time. But with modern treatment, progression can be slowed or even halted.',
      detailed: 'Atherosclerosis begins in childhood and progresses silently for decades. By middle age, many people have significant plaque. Without treatment, plaques grow and can rupture, causing heart attacks. With aggressive treatment, plaques can stabilize and even shrink slightly.',
      comprehensive: 'Atherosclerosis progresses through phases: initiation (endothelial dysfunction), fatty streak formation, fibrous plaque development, and complicated lesions. Progression rate varies by risk factor burden. Statins can induce plaque regression. Most events occur from rupture of non-obstructive plaques, explaining why symptom severity doesn\'t predict risk.',
    },

    prognosis: {
      category: 'manageable-progressive',
      explanation: {
        simple: 'With proper treatment, most people with CAD live long, active lives. Many never have a heart attack. The key is taking your medications and managing risk factors.',
        detailed: 'CAD prognosis has improved dramatically with modern treatment. Statins, aspirin, blood pressure control, and revascularization when needed can reduce risk of heart attack and death by 25-35% or more. Quality of life is usually excellent with treatment.',
        comprehensive: 'Contemporary secondary prevention reduces cardiovascular events by 30-50%. Outcomes depend on extent of disease, left ventricular function, completeness of revascularization, and risk factor control. Five-year survival exceeds 90% for many patients on optimal medical therapy.',
      },
      factorsAffectingOutcome: [
        'Medication adherence (especially statin and aspirin)',
        'Smoking cessation',
        'Blood pressure and cholesterol control',
        'Diabetes management',
        'Regular exercise',
        'Extent and location of disease',
        'Heart function (ejection fraction)',
      ],
      whatYouCanControl: [
        'Taking all medications as prescribed',
        'Quitting smoking completely',
        'Following a heart-healthy diet',
        'Exercising regularly (cardiac rehab is excellent)',
        'Controlling blood pressure and diabetes',
        'Attending regular follow-up appointments',
        'Knowing warning signs and when to call 911',
      ],
    },

    timeline: [
      {
        timeframe: 'At diagnosis',
        whatToExpect: 'Start on medications (statin, aspirin, possibly others). May need stress testing or heart catheterization to assess severity.',
        milestones: ['Begin aspirin and high-dose statin', 'Control blood pressure', 'Risk factor assessment', 'Determine if procedures needed'],
      },
      {
        timeframe: 'First few months',
        whatToExpect: 'Medications working to lower cholesterol and stabilize plaques. Angina should improve with medication. May undergo procedures if needed.',
        milestones: ['LDL cholesterol at goal (often <70)', 'Symptoms controlled', 'Complete cardiac rehabilitation', 'Risk factor targets achieved'],
      },
      {
        timeframe: 'Long-term (years)',
        whatToExpect: 'Lifelong treatment to prevent heart attacks and slow progression. Most people do well and live full lives.',
        milestones: ['Continue all medications', 'Annual check-ups with lipid panel', 'Periodic stress testing as needed', 'Stay active and healthy'],
      },
    ],

    hopeAndReality: 'Here\'s the honest truth: CAD is a chronic condition that you\'ll manage for life, and it can cause serious problems like heart attacks if not treated. BUT - the great news is that modern treatment is remarkably effective. If you take your medications consistently, control your risk factors, and stay active, your chances of living a long, healthy life are excellent. Many people with CAD never have a heart attack. The key is partnership with your medical team and commitment to your treatment plan.',
  },

  treatmentRationale: {
    whyTreat: {
      simple: 'Treatment prevents heart attacks and helps you live longer and better. Medications stabilize plaques so they\'re less likely to rupture and cause a heart attack.',
      detailed: 'Treatment has two goals: 1) Relieve symptoms (angina) so you can be active, and 2) Prevent heart attacks and death by stabilizing plaques, preventing blood clots, and protecting the heart. Modern treatment is very effective at both.',
      comprehensive: 'Secondary prevention aims to reduce recurrent events through risk factor modification, antiplatelet therapy, lipid lowering, and blood pressure control. Statins provide plaque stabilization, lipid lowering, and anti-inflammatory effects. Antiplatelet agents prevent thrombosis. Revascularization relieves symptoms and may improve outcomes in specific settings.',
    },

    goals: [
      {
        goal: 'Prevent heart attack and cardiovascular death',
        whyImportant: 'This is the most important goal - keeping you alive and preventing permanent heart damage.',
        howMeasured: 'No heart attacks, no need for emergency procedures',
        realisticTimeframe: 'Lifelong goal - treatment reduces risk significantly',
      },
      {
        goal: 'Control angina symptoms',
        whyImportant: 'You should be able to do your usual activities without chest pain.',
        howMeasured: 'Angina frequency, ability to exercise, need for nitroglycerin',
        realisticTimeframe: 'Weeks to months with proper treatment',
      },
      {
        goal: 'LDL cholesterol well below 70 mg/dL',
        whyImportant: 'Lower LDL means less plaque growth and even some plaque regression. The lower, the better for high-risk patients.',
        howMeasured: 'Blood tests every 3-12 months',
        realisticTimeframe: 'Months - statins work quickly',
      },
      {
        goal: 'Blood pressure <130/80',
        whyImportant: 'High blood pressure accelerates atherosclerosis and increases heart attack risk.',
        howMeasured: 'Home and office blood pressure readings',
        realisticTimeframe: 'Weeks to months with lifestyle and medication',
      },
    ],

    approaches: [
      {
        name: 'Statin therapy (high-intensity)',
        type: 'medication',
        whatItDoes: {
          simple: 'Statins lower your "bad" cholesterol (LDL) and stabilize plaques so they\'re less likely to rupture.',
          detailed: 'Statins reduce LDL cholesterol by 30-50%, but their benefits go beyond cholesterol lowering. They stabilize plaques by reducing inflammation and the lipid core.',
          comprehensive: 'Statins inhibit HMG-CoA reductase, reducing hepatic cholesterol synthesis and upregulating LDL receptors. Pleiotropic effects include endothelial function improvement, plaque stabilization via reduced inflammation and MMP activity, and anti-thrombotic effects.',
        },
        whyRecommended: 'Most important medication for CAD. Reduces heart attacks and death by 25-35%. Benefits all patients with CAD regardless of starting cholesterol.',
        alternatives: ['Ezetimibe added to statin for more LDL lowering', 'PCSK9 inhibitors for very high risk or statin intolerant'],
        prosAndCons: {
          benefits: ['Dramatically reduces cardiovascular events', 'Stabilizes plaques', 'Well-studied and proven', 'Generic options available'],
          drawbacks: ['Muscle aches in some people', 'Rarely liver issues', 'Must take indefinitely'],
        },
      },
      {
        name: 'Aspirin',
        type: 'medication',
        whatItDoes: {
          simple: 'Aspirin prevents blood clots that cause heart attacks.',
          detailed: 'Aspirin blocks platelets from sticking together and forming clots on top of ruptured plaques.',
          comprehensive: 'Aspirin irreversibly inhibits platelet cyclooxygenase-1 (COX-1), reducing thromboxane A2 synthesis and inhibiting platelet aggregation. Benefits are well-established in secondary prevention.',
        },
        whyRecommended: 'Reduces heart attacks by about 20% in people with established CAD. Simple, inexpensive, and effective.',
        alternatives: ['P2Y12 inhibitor (clopidogrel, ticagrelor) if aspirin allergic', 'Dual antiplatelet therapy after stent'],
        prosAndCons: {
          benefits: ['Significantly reduces heart attacks', 'Inexpensive', 'Well-tolerated by most'],
          drawbacks: ['Increased bleeding risk', 'GI upset in some', 'Must balance with bleeding risk'],
        },
      },
      {
        name: 'Blood pressure medications (ACE inhibitors/ARBs)',
        type: 'medication',
        whatItDoes: {
          simple: 'Lower blood pressure to reduce stress on your heart and arteries.',
          detailed: 'ACE inhibitors and ARBs lower blood pressure, but also protect the heart and blood vessels through other mechanisms beyond blood pressure lowering.',
          comprehensive: 'ACE inhibitors/ARBs reduce cardiovascular events through blood pressure lowering, direct vascular protection, and prevention of cardiac remodeling. Particularly beneficial in patients with LV dysfunction, diabetes, or CKD.',
        },
        whyRecommended: 'Blood pressure control is essential. These drug classes have additional heart-protective benefits.',
        alternatives: ['Beta-blockers (also used for angina)', 'Calcium channel blockers', 'Multiple classes often needed'],
        prosAndCons: {
          benefits: ['Protects heart and blood vessels', 'Well-tolerated', 'Multiple proven options'],
          drawbacks: ['May cause dizziness initially', 'ACE inhibitors can cause cough', 'Need to monitor kidney function'],
        },
      },
      {
        name: 'Cardiac rehabilitation',
        type: 'lifestyle',
        whatItDoes: {
          simple: 'A supervised exercise and education program that helps you safely increase activity and learn to manage your heart disease.',
          detailed: 'Cardiac rehab includes monitored exercise, risk factor education, dietary counseling, and psychological support. It\'s one of the most effective treatments for CAD.',
          comprehensive: 'Cardiac rehabilitation reduces cardiovascular mortality by 20-30%. Benefits come from exercise training, risk factor modification, psychosocial support, and medication optimization. Grossly underutilized despite strong evidence.',
        },
        whyRecommended: 'Proven to reduce death and improve quality of life. Helps you exercise safely and confidently.',
        alternatives: ['Home-based cardiac rehab programs available'],
        prosAndCons: {
          benefits: ['Reduces death and hospitalizations', 'Improves exercise capacity', 'Builds confidence', 'Comprehensive approach'],
          drawbacks: ['Requires time commitment', 'May need transportation', 'Insurance coverage varies'],
        },
      },
    ],

    untreatedOutcome: 'Without treatment, CAD typically progresses. Plaques continue to grow and become more dangerous. Risk of heart attack increases over time. Heart attacks can be fatal, or cause permanent heart damage leading to heart failure. The good news: treatment dramatically reduces these risks. With modern therapy, most people with CAD live long, active lives.',
  },

  livingWith: {
    dailyManagement: [
      {
        task: 'Take all medications daily',
        frequency: 'Daily, as prescribed',
        whyImportant: 'Your medications prevent heart attacks and save lives. Skipping them increases your risk. Statin and aspirin are especially critical - never stop without talking to your doctor.',
        howToDo: 'Use a pill organizer. Take at the same time each day. Set phone reminders.',
        tips: ['Never stop statin or aspirin without asking your doctor', 'If you have side effects, report them - often there are alternatives', 'Refill before you run out'],
      },
      {
        task: 'Know the warning signs of heart attack',
        frequency: 'Always be aware',
        whyImportant: 'Fast treatment during a heart attack saves heart muscle and lives. Know when to call 911.',
        howToDo: 'Learn the signs: chest pain/pressure, shortness of breath, pain in arm/jaw/back, sweating, nausea. Don\'t ignore them.',
        tips: ['Time is muscle - faster treatment = less damage', 'Don\'t drive yourself - call 911', 'Take aspirin if you can while waiting'],
      },
      {
        task: 'Follow heart-healthy diet',
        frequency: 'Every meal',
        whyImportant: 'Diet affects cholesterol, blood pressure, weight, and diabetes control - all important for CAD.',
        howToDo: 'Mediterranean diet: fish, olive oil, vegetables, fruits, whole grains, nuts. Limit red meat, processed food, saturated fat, sodium.',
        tips: ['Focus on what TO eat, not just what to avoid', 'Meal prep helps', 'Small changes add up'],
      },
      {
        task: 'Stay physically active',
        frequency: 'Most days - goal 150 minutes/week',
        whyImportant: 'Exercise improves cholesterol, blood pressure, weight, and mood. It reduces cardiovascular risk.',
        howToDo: 'Start with cardiac rehab if available. Walking is excellent. Gradually increase duration and intensity.',
        tips: ['Warm up before exercise', 'Use nitroglycerin before if prescribed', 'Know your limits but push appropriately', 'It\'s safe to exercise - your heart needs it'],
      },
    ],

    lifestyleChanges: [
      {
        change: 'Quit smoking completely',
        category: 'habits',
        whyItHelps: {
          simple: 'Quitting smoking is THE most impactful thing you can do. It cuts your heart attack risk by 50% within one year.',
          detailed: 'Smoking directly damages arteries, promotes inflammation and clotting, and reduces HDL. Every cigarette is harmful. Quitting has immediate benefits.',
          comprehensive: 'Smoking cessation reduces cardiovascular mortality by 36% even in patients with established CAD. Benefits begin within days of quitting. Medications (varenicline, bupropion, NRT) double success rates.',
        },
        howToImplement: ['Talk to your doctor about cessation medications - they double success', 'Set a quit date', 'Combine medication with behavioral support', 'Don\'t give up if you relapse - keep trying'],
        evidenceStrength: 'strong',
        expectedBenefit: '50% reduction in heart attack risk within one year; reduced mortality',
      },
      {
        change: 'Adopt a Mediterranean diet',
        category: 'diet',
        whyItHelps: {
          simple: 'This diet is proven to reduce heart attacks in people with CAD. It\'s delicious and sustainable.',
          detailed: 'The Mediterranean diet reduces cardiovascular events by about 30%. It improves cholesterol, blood pressure, and inflammation.',
          comprehensive: 'PREDIMED trial showed 30% reduction in cardiovascular events with Mediterranean diet supplemented with olive oil or nuts. Benefits occur through improved lipids, reduced inflammation, better endothelial function, and possibly gut microbiome changes.',
        },
        howToImplement: ['More fish (2+ times/week), olive oil, vegetables, fruits, whole grains, nuts', 'Less red meat, processed meat, butter, sweets', 'Use olive oil as main fat', 'Enjoy meals socially'],
        evidenceStrength: 'strong',
        expectedBenefit: '30% reduction in cardiovascular events; improved risk factors',
      },
      {
        change: 'Regular aerobic exercise',
        category: 'exercise',
        whyItHelps: {
          simple: 'Exercise improves cholesterol, blood pressure, weight, and blood sugar. It makes your heart stronger and more efficient.',
          detailed: 'Regular exercise raises HDL, lowers blood pressure, improves insulin sensitivity, and reduces stress. Cardiac rehab is an excellent structured way to start.',
          comprehensive: 'Exercise training improves endothelial function, promotes coronary collaterals, reduces inflammation, and improves autonomic balance. Cardiac rehabilitation reduces mortality by 20-30%.',
        },
        howToImplement: ['Start with cardiac rehabilitation', 'Aim for 150 minutes/week moderate activity', 'Include both cardio and resistance training', 'Be consistent'],
        evidenceStrength: 'strong',
        expectedBenefit: 'Improved fitness, reduced symptoms, lower mortality',
      },
      {
        change: 'Manage stress',
        category: 'stress',
        whyItHelps: {
          simple: 'Stress can trigger angina and may contribute to heart disease progression. Learning to manage it helps.',
          detailed: 'Psychological stress activates fight-or-flight responses that can trigger ischemia and may promote atherosclerosis long-term.',
          comprehensive: 'Stress is associated with increased cardiovascular events through neuroendocrine pathways, inflammation, and behavioral factors. Stress management programs show benefit in CAD patients.',
        },
        howToImplement: ['Cardiac rehab includes stress management', 'Consider mindfulness or relaxation training', 'Address depression or anxiety with your doctor', 'Stay socially connected'],
        evidenceStrength: 'moderate',
        expectedBenefit: 'Improved quality of life, possibly reduced events',
      },
    ],

    warningSignsToWatch: [
      {
        sign: 'Chest pain, pressure, or discomfort',
        whatItMightMean: 'Could be angina (your usual symptom) or could be a heart attack if new or different.',
        urgency: 'call-doctor-today',
        actionToTake: 'If it\'s your usual angina that responds to rest and nitroglycerin, monitor closely and tell your doctor. If new, different, at rest, or lasting >5 min, call 911.',
      },
      {
        sign: 'Chest pain at rest or lasting more than a few minutes',
        whatItMightMean: 'May be unstable angina or heart attack - both are emergencies.',
        urgency: 'emergency-911',
        actionToTake: 'Call 911 immediately. Chew aspirin if you can. Don\'t drive yourself.',
      },
      {
        sign: 'Chest pain with sweating, shortness of breath, nausea, or arm/jaw pain',
        whatItMightMean: 'Classic heart attack warning signs.',
        urgency: 'emergency-911',
        actionToTake: 'Call 911 immediately. This is an emergency.',
      },
      {
        sign: 'Angina more frequent, severe, or with less activity than before',
        whatItMightMean: 'May indicate worsening of your CAD or unstable angina.',
        urgency: 'call-doctor-today',
        actionToTake: 'Contact your doctor urgently. This pattern needs evaluation.',
      },
      {
        sign: 'Unusual fatigue or shortness of breath',
        whatItMightMean: 'Can be symptoms of heart problems, especially in women.',
        urgency: 'call-doctor-today',
        actionToTake: 'Let your doctor know, especially if new or progressive.',
      },
    ],

    whenToGetHelp: [
      {
        situation: 'Chest pain lasting more than a few minutes, or not relieved by nitroglycerin',
        urgency: 'emergency-911',
        whereTogo: 'emergency-room',
        whatToSay: 'I have coronary artery disease and I\'m having chest pain that won\'t go away.',
      },
      {
        situation: 'Symptoms of heart attack (chest pain, arm/jaw pain, shortness of breath, sweating)',
        urgency: 'emergency-911',
        whereTogo: 'emergency-room',
        whatToSay: 'I think I\'m having a heart attack.',
      },
      {
        situation: 'Angina pattern changing - more frequent or with less exertion',
        urgency: 'call-doctor-today',
        whereTogo: 'call-doctor',
        whatToSay: 'My angina is getting worse. I\'m having chest pain with less activity than before.',
      },
      {
        situation: 'Side effects from medications',
        urgency: 'schedule-soon',
        whereTogo: 'call-doctor',
        whatToSay: 'I\'m having side effects from my heart medication. Can we discuss alternatives? (Don\'t stop medications without discussing)',
      },
    ],

    emotionalSupport: {
      commonFeelings: [
        'Fear and anxiety about having a heart attack',
        'Worry about activity - "Is this safe?"',
        'Depression - common after heart problems',
        'Frustration with lifestyle changes',
        'Feeling like a burden on family',
        'Grief over lost sense of health',
      ],
      copingStrategies: [
        'Remember: most people with CAD live long, active lives with treatment',
        'Cardiac rehabilitation provides both physical and emotional support',
        'Depression after heart problems is very common - and very treatable',
        'Staying active is good for your mood AND your heart',
        'Talk to your doctor if anxiety or depression is interfering with your life',
        'Joining a support group connects you with others who understand',
        'Focus on what you CAN do, not what you can\'t',
      ],
      supportResources: [
        'American Heart Association (heart.org)',
        'Mended Hearts support groups',
        'Cardiac rehabilitation programs',
        'Your cardiologist\'s nurse or care coordinator',
        'Mental health professionals experienced with cardiac patients',
      ],
    },
  },

  doctorQuestions: {
    atDiagnosis: [
      {
        question: 'How severe is my coronary artery disease?',
        whyAsk: 'Understanding the extent of disease helps you understand your situation and treatment needs.',
        whatAnswerMeans: 'Will describe which arteries are affected and how much narrowing. "Triple vessel disease" or "left main disease" is more serious.',
        followUpQuestions: ['Do I need a stress test or heart catheterization?', 'What do my test results mean?'],
      },
      {
        question: 'What is my heart function (ejection fraction)?',
        whyAsk: 'Heart function affects treatment and prognosis.',
        whatAnswerMeans: 'Normal ejection fraction is 55-70%. Lower numbers mean the heart is pumping less efficiently.',
        followUpQuestions: ['Has my heart been damaged?', 'Will it improve?'],
      },
      {
        question: 'What are my most important risk factors to address?',
        whyAsk: 'Prioritize what will have the biggest impact for YOU.',
        whatAnswerMeans: 'Helps focus your efforts on what matters most.',
        followUpQuestions: ['What are my cholesterol and blood pressure goals?'],
      },
    ],

    aboutTreatment: [
      {
        question: 'Do I need a procedure (stent or bypass surgery)?',
        whyAsk: 'Understanding when procedures help and when medications alone are fine.',
        whatAnswerMeans: 'Procedures are indicated for certain patterns of disease or symptoms that don\'t respond to medications.',
        followUpQuestions: ['What are the benefits and risks?', 'What happens if I don\'t have a procedure?'],
      },
      {
        question: 'Why is each of my medications important?',
        whyAsk: 'Understanding why you take each medication improves adherence.',
        whatAnswerMeans: 'Each medication has a specific purpose in preventing events or controlling symptoms.',
        followUpQuestions: ['What happens if I miss doses?', 'Are there interactions I should know about?'],
      },
      {
        question: 'Should I take aspirin, and what about bleeding risk?',
        whyAsk: 'Balancing benefits and risks of aspirin therapy.',
        whatAnswerMeans: 'For established CAD, aspirin benefits usually outweigh bleeding risk, but individual assessment matters.',
        followUpQuestions: ['What signs of bleeding should I watch for?'],
      },
    ],

    ongoingCare: [
      {
        question: 'How often should I follow up?',
        whyAsk: 'Regular monitoring helps catch problems early.',
        whatAnswerMeans: 'Usually every 3-12 months depending on stability. More frequent if recent event or procedure.',
        followUpQuestions: ['What tests do I need regularly?', 'What symptoms should prompt an earlier visit?'],
      },
      {
        question: 'Should I attend cardiac rehabilitation?',
        whyAsk: 'Cardiac rehab is proven to reduce death and improve quality of life.',
        whatAnswerMeans: 'Almost everyone with CAD benefits from cardiac rehabilitation.',
        followUpQuestions: ['How do I get enrolled?', 'What does it involve?'],
      },
    ],

    prognosis: [
      {
        question: 'What is my outlook with treatment?',
        whyAsk: 'Understanding your prognosis helps with planning.',
        whatAnswerMeans: 'Most people with treated CAD do well. Prognosis depends on extent of disease, heart function, and how well risk factors are controlled.',
        followUpQuestions: ['What can I do to improve my outlook?'],
      },
      {
        question: 'What warning signs should I never ignore?',
        whyAsk: 'Knowing when to seek help can save your life.',
        whatAnswerMeans: 'Know the signs of heart attack and unstable angina. When in doubt, call 911.',
        followUpQuestions: ['Should I keep aspirin with me?', 'Can we create a plan for emergencies?'],
      },
    ],
  },

  anatomyLinks: [
    { structureId: 'heart', structureName: 'Heart', relevance: 'The organ whose arteries are affected by CAD', viewPreset: 'anterior' },
    { structureId: 'coronary-arteries', structureName: 'Coronary Arteries', relevance: 'The arteries narrowed by atherosclerosis', viewPreset: 'anterior' },
  ],

  relatedMedications: ['aspirin', 'atorvastatin', 'rosuvastatin', 'metoprolol', 'lisinopril', 'nitroglycerin', 'clopidogrel'],
  relatedTests: ['lipid-panel', 'stress-test', 'coronary-angiogram', 'echocardiogram', 'coronary-ct-angiography'],
  relatedConditions: ['heart-failure', 'hypertension', 'type-2-diabetes', 'hyperlipidemia', 'peripheral-artery-disease'],
};

// =============================================================================
// DEPRESSION (MAJOR DEPRESSIVE DISORDER)
// =============================================================================

const DEPRESSION_EDUCATION: ConditionEducation = {
  id: 'depression',
  conditionName: 'Depression',
  medicalName: 'Major Depressive Disorder',
  icdCode: 'F32',

  whyMeSection: {
    whatItIs: {
      simple: 'Depression is more than feeling sad. It\'s a medical condition that affects how you feel, think, and handle daily activities, lasting for weeks or longer.',
      detailed: 'Major depressive disorder is a common but serious mental health condition causing persistent feelings of sadness, hopelessness, and loss of interest in activities you once enjoyed. It affects your thoughts, feelings, behavior, and physical health, and can interfere with your ability to work, sleep, eat, and enjoy life.',
      comprehensive: 'Major depressive disorder is characterized by persistent depressed mood or anhedonia (loss of interest/pleasure), accompanied by neurovegetative symptoms including sleep and appetite changes, fatigue, psychomotor changes, worthlessness or guilt, concentration difficulties, and recurrent thoughts of death or suicidal ideation. Symptoms must persist for at least two weeks and cause clinically significant distress or functional impairment.',
      analogy: 'Imagine your brain has a "mood thermostat" that normally keeps your emotions in a comfortable range. In depression, this thermostat gets stuck at a very low setting, making it hard to feel warm, motivated, or interested in anything - even when good things happen.',
      visualMetaphor: 'Like wearing heavy, dark-tinted glasses that make everything look dim and bleak, and drain your energy.',
    },

    howCommon: {
      prevalence: 'Depression is very common. About 1 in 6 people will experience depression at some point. Over 21 million American adults have at least one major depressive episode per year.',
      affectedPopulations: 'Affects people of all ages, genders, and backgrounds, though rates are higher in women, young adults, and those with chronic medical conditions or family history.',
      patientReassurance: 'You are not alone, and this is not your fault. Depression is one of the most common and most treatable mental health conditions. The vast majority of people get significantly better with proper treatment.',
    },

    whyItHappened: {
      knownCauses: [
        {
          cause: 'Brain chemistry and biology',
          explanation: {
            simple: 'The chemicals in your brain that affect mood aren\'t working quite right.',
            detailed: 'Neurotransmitters like serotonin, norepinephrine, and dopamine play roles in mood regulation. In depression, these systems may be imbalanced. Brain imaging shows changes in how certain brain regions function.',
            comprehensive: 'The monoamine hypothesis implicates deficiencies in serotonergic, noradrenergic, and dopaminergic neurotransmission. However, the pathophysiology is complex - neuroimaging shows prefrontal-limbic dysregulation, reduced hippocampal volume, and altered connectivity. Neuroplasticity changes, HPA axis hyperactivity, and neuroinflammation all contribute.',
          },
          isModifiable: true,
          whatYouCanDo: 'Antidepressant medications can help restore balance to brain chemistry. Exercise also has positive effects on brain function.',
        },
        {
          cause: 'Life events and stress',
          explanation: {
            simple: 'Difficult life events can trigger depression in people who are vulnerable.',
            detailed: 'Trauma, loss, major life changes, chronic stress, relationship problems, or ongoing difficulties can trigger or worsen depression, especially in those with underlying vulnerability.',
            comprehensive: 'Psychosocial stressors interact with genetic vulnerability and neurobiological factors (gene-environment interactions) to precipitate depressive episodes. Early life adversity particularly increases vulnerability.',
          },
          isModifiable: true,
          whatYouCanDo: 'Therapy can help process difficult experiences and build coping skills. Social support and stress management are protective.',
        },
        {
          cause: 'Genetics and family history',
          explanation: {
            simple: 'Depression tends to run in families.',
            detailed: 'If close family members have had depression, you\'re more likely to develop it, suggesting a genetic component. However, genes don\'t determine destiny - environment matters too.',
            comprehensive: 'Twin studies show heritability of major depression around 37-40%. Depression is polygenic - multiple genes of small effect contribute. Genetic factors likely influence neurotransmitter systems, stress response, and neuroplasticity.',
          },
          isModifiable: false,
        },
        {
          cause: 'Medical conditions and medications',
          explanation: {
            simple: 'Some physical illnesses and medications can cause or worsen depression.',
            detailed: 'Chronic illnesses like heart disease, diabetes, thyroid problems, and chronic pain are associated with higher depression rates. Some medications can also affect mood.',
            comprehensive: 'Medical comorbidity is common. Inflammatory conditions, neurological diseases, endocrine disorders, and chronic pain are particularly associated with depression. Some medications (steroids, interferon, certain antihypertensives) can precipitate depression.',
          },
          isModifiable: true,
          whatYouCanDo: 'Managing medical conditions and working with your doctor on medication choices can help.',
        },
      ],

      riskFactorsThatApply: [
        {
          factor: 'Family history of depression',
          howItContributes: 'Having a parent or sibling with depression increases your risk about 2-3 times, due to shared genetic factors and possibly shared environment.',
          isModifiable: false,
          strengthOfRisk: 'major',
        },
        {
          factor: 'Previous depressive episode',
          howItContributes: 'Depression tends to recur. After one episode, there\'s about 50% chance of another. Risk increases with each episode.',
          isModifiable: false,
          strengthOfRisk: 'major',
        },
        {
          factor: 'Chronic medical conditions',
          howItContributes: 'Physical illness is stressful, and some conditions (heart disease, diabetes, stroke, chronic pain) directly affect brain function and increase depression risk.',
          isModifiable: true,
          reductionStrategy: 'Optimally managing medical conditions can reduce depression risk. Tell your doctor if depression develops.',
          strengthOfRisk: 'major',
        },
        {
          factor: 'Trauma and adverse life events',
          howItContributes: 'Trauma, loss, abuse, or major stressors can trigger depression, especially in vulnerable individuals.',
          isModifiable: true,
          reductionStrategy: 'Therapy, particularly trauma-focused approaches, can help. Social support is protective.',
          strengthOfRisk: 'moderate',
        },
        {
          factor: 'Isolation and lack of social support',
          howItContributes: 'Humans need connection. Loneliness and weak social networks are risk factors for depression.',
          isModifiable: true,
          reductionStrategy: 'Maintaining social connections, even small ones, is protective.',
          strengthOfRisk: 'moderate',
        },
        {
          factor: 'Substance use',
          howItContributes: 'Alcohol is a depressant. Substance use can cause, worsen, or mask depression.',
          isModifiable: true,
          reductionStrategy: 'Reducing or stopping alcohol and substances helps depression treatment work.',
          strengthOfRisk: 'moderate',
        },
      ],

      notYourFault: 'Depression is NOT a character flaw, weakness, or something you can just "snap out of." It\'s a medical condition with biological causes - as real as diabetes or heart disease. You didn\'t choose this. Many highly successful, strong people experience depression. Seeking help is a sign of strength, not weakness. You deserve treatment, and treatment works.',
    },
  },

  bodyMechanism: {
    whatGoesWrong: {
      simple: 'Depression affects brain chemistry and certain brain areas, causing changes in mood, thinking, energy, sleep, and appetite.',
      detailed: 'In depression, several brain systems don\'t function normally - the circuits controlling mood, pleasure (reward), motivation, sleep, and appetite. This is why depression causes both emotional symptoms (sadness, hopelessness) AND physical symptoms (fatigue, sleep problems, appetite changes).',
      comprehensive: 'Depression involves dysregulation of monoamine neurotransmitter systems (serotonin, norepinephrine, dopamine), HPA axis hyperactivity (elevated cortisol), reduced neuroplasticity and hippocampal volume, altered prefrontal-limbic connectivity (emotional regulation), reward circuit dysfunction (anhedonia), and increased neuroinflammation. These changes explain the diverse symptom profile.',
    },

    affectedAreas: [
      {
        areaName: 'Brain - mood and emotional regulation',
        structureId: 'brain',
        howAffected: {
          simple: 'The brain circuits that control mood and emotions aren\'t working properly.',
          detailed: 'The prefrontal cortex (thinking, planning) and limbic system (emotions) don\'t communicate well. This leads to negative bias, rumination, and difficulty regulating emotions.',
          comprehensive: 'Prefrontal-limbic dysregulation manifests as reduced prefrontal cortical activity and hyperactive amygdala response to negative stimuli. Anterior cingulate cortex function is altered. These changes underlie emotional dysregulation, negative cognitive bias, and rumination.',
        },
        relatedSymptoms: ['Persistent sadness', 'Hopelessness', 'Guilt', 'Negative thinking', 'Difficulty with decisions'],
      },
      {
        areaName: 'Brain - reward and pleasure system',
        structureId: 'brain',
        howAffected: {
          simple: 'The brain\'s reward system doesn\'t respond normally, making things feel less pleasurable.',
          detailed: 'The brain\'s ability to experience pleasure and motivation is reduced. Activities that used to feel rewarding now feel empty.',
          comprehensive: 'Ventral striatal and nucleus accumbens hypoactivity, with reduced dopaminergic signaling in reward pathways, underlies anhedonia - a core feature of depression.',
        },
        relatedSymptoms: ['Loss of interest (anhedonia)', 'Lack of motivation', 'Activities feel meaningless'],
      },
      {
        areaName: 'Whole body - energy and physical symptoms',
        structureId: 'body',
        howAffected: {
          simple: 'Depression affects your whole body, not just mood - causing fatigue, sleep problems, and physical symptoms.',
          detailed: 'The brain changes in depression affect systems throughout the body - sleep regulation, appetite, energy, immune function. This is why depression causes physical symptoms too.',
          comprehensive: 'Neurovegetative symptoms reflect HPA axis dysregulation, circadian rhythm disruption, altered inflammatory markers, and autonomic nervous system changes. Depression is associated with increased cardiovascular risk and immune dysfunction.',
        },
        relatedSymptoms: ['Fatigue', 'Sleep problems (too much or too little)', 'Appetite changes', 'Aches and pains', 'Slowed or agitated movements'],
      },
    ],

    symptomExplanations: [
      {
        symptom: 'Persistent sadness or emptiness',
        whyYouFeelThis: {
          simple: 'Mood regulation circuits in your brain aren\'t working well, keeping you stuck in a low mood state.',
          detailed: 'The brain systems that normally maintain emotional balance are disrupted. Negative emotions are amplified, positive emotions are dampened, and it\'s hard to shift out of this state.',
          comprehensive: 'Prefrontal-limbic dysregulation, reduced serotonergic and noradrenergic transmission, and negative cognitive bias all contribute to persistent depressed mood.',
        },
        whatMakesItBetterWorse: {
          better: ['Treatment (medication, therapy)', 'Social connection', 'Exercise', 'Accomplishing small tasks'],
          worse: ['Isolation', 'Rumination', 'Stress', 'Sleep deprivation', 'Alcohol'],
        },
        whenToWorry: 'Thoughts of death, wanting to die, or thoughts of suicide are serious warning signs that need immediate attention. Call 988 (Suicide & Crisis Lifeline) or go to an emergency room.',
      },
      {
        symptom: 'Loss of interest or pleasure (anhedonia)',
        whyYouFeelThis: {
          simple: 'Your brain\'s reward system isn\'t responding normally, making enjoyable activities feel empty.',
          detailed: 'Depression affects the brain\'s ability to feel pleasure or interest. Things that used to bring joy now feel meaningless or not worth the effort.',
          comprehensive: 'Dopaminergic reward pathway dysfunction, particularly in the ventral striatum and prefrontal cortex, underlies anhedonia. This is a core depression symptom and often the hardest to treat.',
        },
        whatMakesItBetterWorse: {
          better: ['Behavioral activation (doing activities even when you don\'t feel like it)', 'Treatment', 'Gradual re-engagement'],
          worse: ['Avoidance', 'Waiting until you "feel like" doing things', 'Isolation'],
        },
        whenToWorry: 'Complete inability to feel ANY pleasure, or losing interest in activities essential for survival (eating, caring for yourself or children).',
      },
      {
        symptom: 'Fatigue and low energy',
        whyYouFeelThis: {
          simple: 'Depression drains your energy, even if you\'re sleeping. Everything feels like enormous effort.',
          detailed: 'Both the mental burden of depression and its physical effects (sleep disruption, stress hormones, inflammation) cause profound fatigue. It\'s not laziness - your body is fighting a battle.',
          comprehensive: 'Fatigue in depression involves sleep architecture disruption, HPA axis hyperactivity, elevated inflammatory markers, possible mitochondrial dysfunction, and psychomotor retardation.',
        },
        whatMakesItBetterWorse: {
          better: ['Gradual activity (start very small)', 'Treatment', 'Good sleep hygiene', 'Not oversleeping'],
          worse: ['Inactivity', 'Poor sleep', 'Oversleeping', 'Isolation'],
        },
        whenToWorry: 'Extreme fatigue preventing basic self-care (eating, hygiene, getting out of bed).',
      },
      {
        symptom: 'Sleep problems',
        whyYouFeelThis: {
          simple: 'Depression disrupts the brain\'s sleep-wake systems, causing insomnia or oversleeping.',
          detailed: 'The same brain systems affected in depression also regulate sleep. This is why sleep problems are both a symptom of depression and something that makes depression worse.',
          comprehensive: 'Circadian rhythm disruption, HPA axis hyperactivity, and altered neurotransmitter function affect sleep architecture. Polysomnographic findings include reduced slow-wave sleep, shortened REM latency, and increased REM density.',
        },
        whatMakesItBetterWorse: {
          better: ['Consistent sleep schedule', 'Good sleep hygiene', 'Treatment'],
          worse: ['Irregular schedule', 'Oversleeping', 'Caffeine/alcohol', 'Screens before bed'],
        },
        whenToWorry: 'Going days without sleep, or sleeping so much you can\'t function.',
      },
    ],

    dailyLifeImpact: [
      {
        activity: 'Work and productivity',
        howAffected: 'Concentration problems, fatigue, and lack of motivation make work difficult. Even simple tasks feel overwhelming.',
        adaptations: ['Break tasks into small steps', 'Communicate with supervisor if possible', 'Focus on one thing at a time', 'Be patient with yourself'],
      },
      {
        activity: 'Relationships',
        howAffected: 'Depression can strain relationships. You may withdraw, feel like a burden, or have less energy for others.',
        adaptations: ['Tell trusted people what you\'re going through', 'Accept support when offered', 'Small connections count (texts, brief visits)', 'It\'s okay to ask for help'],
      },
      {
        activity: 'Self-care',
        howAffected: 'Basic self-care (showering, eating, cleaning) can feel impossible when depressed.',
        adaptations: ['Do the minimum - it counts', 'Set very low bars (brush teeth = success)', 'Reduce decision-making', 'Accept "good enough"'],
      },
      {
        activity: 'Enjoyable activities',
        howAffected: 'Anhedonia makes previously enjoyable activities feel pointless or not worth the effort.',
        adaptations: ['Do activities anyway (behavioral activation)', 'Start very small', 'Don\'t wait until you "feel like it"', 'Pleasure often returns with action'],
      },
    ],
  },

  diseaseJourney: {
    naturalHistory: {
      simple: 'Depression episodes typically last 6-12 months without treatment, but treatment usually shortens this significantly. Many people have more than one episode in their lifetime.',
      detailed: 'A depressive episode averages 6-9 months but varies widely. With treatment, most people improve within 2-3 months. About 50% of people who have one episode will have another. Some people have chronic depression.',
      comprehensive: 'Untreated major depressive episodes last a median of 6-9 months, though duration is highly variable. Approximately 80% remit within 1 year. Recurrence is common - 50% after first episode, 70-80% after two episodes. Residual symptoms increase recurrence risk. Maintenance treatment reduces relapse.',
    },

    prognosis: {
      category: 'manageable-variable',
      explanation: {
        simple: 'Depression is very treatable. Most people get significantly better with proper treatment. It\'s one of the most treatable mental health conditions.',
        detailed: 'With appropriate treatment, 70-80% of people with depression experience significant improvement. Finding the right treatment may take some time. Recurrence is possible but can be managed with continued treatment or prompt re-treatment.',
        comprehensive: 'First-line treatments (antidepressants, psychotherapy) achieve response in 60-70% and remission in 40-50%. Treatment-resistant depression requires more intensive approaches. Long-term management focusing on achieving remission and preventing relapse is essential. Prognosis is generally good with sustained treatment.',
      },
      factorsAffectingOutcome: [
        'Getting treatment (the single most important factor)',
        'Treatment adherence',
        'Social support',
        'Severity and chronicity of depression',
        'Presence of other conditions (medical or psychiatric)',
        'Lifestyle factors (exercise, sleep, substances)',
      ],
      whatYouCanControl: [
        'Seeking help',
        'Taking medications as prescribed',
        'Attending therapy',
        'Being honest with your treatment team',
        'Staying connected to supportive people',
        'Maintaining healthy habits (even imperfectly)',
        'Returning for help if symptoms come back',
      ],
    },

    timeline: [
      {
        timeframe: 'Starting treatment (weeks 1-4)',
        whatToExpect: 'Antidepressants take 2-6 weeks to show full effect. You might notice side effects before benefits. Therapy starts building skills.',
        milestones: ['Start medication', 'First therapy sessions', 'Begin monitoring symptoms', 'Side effects may occur (usually temporary)'],
      },
      {
        timeframe: 'Early treatment (months 1-3)',
        whatToExpect: 'Gradual improvement. Physical symptoms (sleep, energy, appetite) often improve before mood. May need medication adjustments.',
        milestones: ['Starting to feel somewhat better', 'Finding right medication/dose', 'Learning coping skills in therapy', 'Side effects typically improve'],
      },
      {
        timeframe: 'Continued treatment (months 3-6)',
        whatToExpect: 'Significant improvement for most people. Focus on getting to full remission, not just "better."',
        milestones: ['Feeling much better', 'Returning to activities', 'More good days than bad', 'Building momentum'],
      },
      {
        timeframe: 'Maintenance (6+ months)',
        whatToExpect: 'Continue treatment for at least 6-12 months after feeling better to prevent relapse. Discuss long-term plan with doctor.',
        milestones: ['Maintaining improvements', 'Applying skills learned', 'Continued medication if recommended', 'Plan for recognizing recurrence'],
      },
    ],

    hopeAndReality: 'Here\'s the honest truth: Depression is painful and can be disabling, but it is also one of the most treatable conditions in medicine. The darkness you feel now is not permanent - it\'s a symptom of an illness that responds to treatment. Most people who get proper treatment feel significantly better. It may take some time to find the right approach, and you may have setbacks, but recovery is the expectation, not the exception. Many people who\'ve been through severe depression go on to live full, meaningful lives. The key is getting help and sticking with treatment even when it\'s hard.',
  },

  treatmentRationale: {
    whyTreat: {
      simple: 'Treatment helps restore normal brain function so you can feel like yourself again, function in daily life, and enjoy things again.',
      detailed: 'Depression is not something you should just "push through" or wait out. Treatment works - it reduces symptoms faster, prevents complications, and reduces the risk of recurrence. Untreated depression often worsens and has significant consequences.',
      comprehensive: 'Evidence-based treatment reduces symptom burden, shortens episode duration, improves function, reduces suicide risk, and prevents adverse outcomes (cardiovascular events, poor medical outcomes). Early, aggressive treatment targeting remission improves long-term prognosis.',
    },

    goals: [
      {
        goal: 'Achieve remission (not just improvement)',
        whyImportant: 'The goal is feeling well and functioning normally - not just "less bad." Partial recovery leaves you at higher risk for relapse.',
        howMeasured: 'Symptom questionnaires (like PHQ-9), your sense of yourself, ability to do daily activities',
        realisticTimeframe: '2-3 months with effective treatment, sometimes longer',
      },
      {
        goal: 'Return to normal functioning',
        whyImportant: 'Being able to work, maintain relationships, care for yourself, and enjoy life.',
        howMeasured: 'Work/school attendance, relationships, daily activities, quality of life',
        realisticTimeframe: 'Varies - often improves alongside or slightly after mood',
      },
      {
        goal: 'Prevent recurrence',
        whyImportant: 'Staying well is as important as getting well. Recurrence is common but can be reduced.',
        howMeasured: 'No new depressive episodes, or rapid response if one occurs',
        realisticTimeframe: 'Ongoing - may need continued treatment',
      },
      {
        goal: 'Safety',
        whyImportant: 'Reducing suicidal thoughts and keeping you safe is always a priority.',
        howMeasured: 'No suicidal ideation, safety plan in place, reduced hopelessness',
        realisticTimeframe: 'Immediate and ongoing concern',
      },
    ],

    approaches: [
      {
        name: 'Antidepressant medication',
        type: 'medication',
        whatItDoes: {
          simple: 'Helps restore balance to brain chemicals that affect mood, making it easier to feel better and function.',
          detailed: 'Different antidepressant classes work on serotonin, norepinephrine, and/or dopamine to improve mood regulation. They take 2-6 weeks to reach full effect.',
          comprehensive: 'SSRIs increase synaptic serotonin availability; SNRIs affect both serotonin and norepinephrine; other classes (bupropion, mirtazapine, TCAs, MAOIs) have different mechanisms. Beyond monoamines, antidepressants promote neuroplasticity (BDNF), normalize HPA axis, and have anti-inflammatory effects.',
        },
        whyRecommended: 'Strong evidence for effectiveness, especially for moderate to severe depression. Usually first-line treatment.',
        alternatives: ['Different antidepressant class if first doesn\'t work', 'Augmentation strategies', 'Therapy alone for mild depression'],
        prosAndCons: {
          benefits: ['Effective for most people', 'Many options available', 'Generally well-tolerated', 'Work while you sleep'],
          drawbacks: ['Takes weeks to work', 'Side effects (usually temporary)', 'May need trials to find right medication', 'Shouldn\'t stop suddenly'],
        },
      },
      {
        name: 'Psychotherapy (cognitive behavioral therapy, interpersonal therapy)',
        type: 'therapy',
        whatItDoes: {
          simple: 'Helps you understand and change thought patterns and behaviors that worsen depression, and develop skills to stay well.',
          detailed: 'Cognitive behavioral therapy (CBT) addresses negative thinking patterns. Interpersonal therapy focuses on relationships and communication. Other effective therapies exist. All provide tools that last beyond treatment.',
          comprehensive: 'CBT targets cognitive distortions (negative automatic thoughts, core beliefs) and behavioral avoidance through cognitive restructuring and behavioral activation. IPT addresses interpersonal role disputes, transitions, deficits, and grief. Both have robust evidence bases.',
        },
        whyRecommended: 'Effective alone for mild depression, enhances medication effects for moderate-severe. Reduces relapse risk. Teaches lasting skills.',
        alternatives: ['Different therapy type', 'Group therapy', 'Online/app-based therapy'],
        prosAndCons: {
          benefits: ['Skills last beyond treatment', 'Reduces relapse', 'No medication side effects', 'Addresses underlying patterns'],
          drawbacks: ['Takes time and effort', 'Requires regular appointments', 'Finding a good therapist can be hard', 'May be costly'],
        },
      },
      {
        name: 'Combination treatment (medication + therapy)',
        type: 'combination',
        whatItDoes: {
          simple: 'Uses both medication and therapy together, which often works better than either alone.',
          detailed: 'Medication helps improve brain chemistry while therapy provides tools and addresses patterns. Together they attack the problem from multiple angles.',
          comprehensive: 'Meta-analyses show combined treatment is more effective than either monotherapy, particularly for moderate-severe depression and for preventing relapse.',
        },
        whyRecommended: 'Best evidence for moderate-to-severe depression. More effective than either alone.',
        alternatives: ['Start with one and add the other if needed'],
        prosAndCons: {
          benefits: ['Most effective approach', 'Faster improvement', 'Lower relapse rates'],
          drawbacks: ['More appointments/commitment', 'Higher cost', 'More to manage'],
        },
      },
      {
        name: 'Lifestyle interventions',
        type: 'lifestyle',
        whatItDoes: {
          simple: 'Exercise, sleep, social connection, and routine all support brain health and recovery from depression.',
          detailed: 'Regular exercise has significant antidepressant effects. Good sleep hygiene, social engagement, and structured routine support recovery and prevent relapse.',
          comprehensive: 'Exercise increases BDNF, improves neuroplasticity, and has anti-inflammatory effects. Circadian rhythm regularity (social rhythm therapy) stabilizes mood. Social support is protective. These are evidence-based adjuncts.',
        },
        whyRecommended: 'Supports other treatments. Empowering - something you can do yourself. No side effects.',
        alternatives: ['Start with whatever is manageable - don\'t wait until you can do it "right"'],
        prosAndCons: {
          benefits: ['You can start today', 'No side effects', 'Benefits mood and physical health', 'Builds self-efficacy'],
          drawbacks: ['Hard to do when depressed', 'Not a substitute for treatment in moderate-severe depression'],
        },
      },
    ],

    untreatedOutcome: 'Without treatment, depressive episodes often last longer, are more severe, and are more likely to recur. Untreated depression increases risk of suicide, substance abuse, relationship breakdown, job loss, and worsening of medical conditions. Depression doesn\'t usually just "go away on its own" - and even when it lifts, untreated episodes predict worse outcomes. Treatment dramatically changes this trajectory.',
  },

  livingWith: {
    dailyManagement: [
      {
        task: 'Take medication as prescribed',
        frequency: 'Daily, same time each day',
        whyImportant: 'Antidepressants need to stay at consistent levels to work. Missing doses or stopping suddenly can cause problems.',
        howToDo: 'Set a daily alarm. Use a pill organizer. Link it to a daily habit (like brushing teeth).',
        tips: ['Don\'t skip doses even when feeling better', 'Don\'t stop suddenly - always taper with doctor guidance', 'If side effects bother you, talk to your doctor instead of stopping'],
      },
      {
        task: 'Maintain sleep schedule',
        frequency: 'Daily - same bed and wake time',
        whyImportant: 'Sleep and mood are closely connected. Irregular sleep makes depression worse.',
        howToDo: 'Set a consistent bedtime and wake time, even on weekends. Resist sleeping in even if you had a bad night.',
        tips: ['Get morning light', 'Avoid long naps', 'Don\'t stay in bed when not sleeping', 'No screens before bed'],
      },
      {
        task: 'Some physical activity',
        frequency: 'Daily - even small amounts help',
        whyImportant: 'Exercise has significant antidepressant effects. Movement helps even when you don\'t feel like it.',
        howToDo: 'Start VERY small - a 5-minute walk counts. Gradually increase. Don\'t wait until you feel motivated.',
        tips: ['Something is always better than nothing', 'Walking is enough', 'Exercise with someone if possible', 'Do it when energy is highest'],
      },
      {
        task: 'Stay connected to people',
        frequency: 'Daily contact with someone',
        whyImportant: 'Isolation worsens depression. Human connection helps, even small interactions.',
        howToDo: 'Text counts. Brief phone calls count. In-person if possible. Accept help when offered.',
        tips: ['Tell at least one trusted person what you\'re going through', 'Don\'t wait until you feel like socializing', 'Small connections matter'],
      },
      {
        task: 'Attend therapy appointments',
        frequency: 'Usually weekly initially',
        whyImportant: 'Therapy works, but it takes regular attendance and active participation.',
        howToDo: 'Treat appointments as non-negotiable. Do homework between sessions. Be honest with your therapist.',
        tips: ['Go even when you don\'t feel like it', 'The work between sessions matters', 'It\'s okay to talk about not wanting to go'],
      },
    ],

    lifestyleChanges: [
      {
        change: 'Regular exercise',
        category: 'exercise',
        whyItHelps: {
          simple: 'Exercise has real antidepressant effects - for mild depression, it can be as effective as medication.',
          detailed: 'Exercise increases brain chemicals that improve mood (endorphins, BDNF), reduces inflammation, improves sleep, and gives a sense of accomplishment.',
          comprehensive: 'Exercise training increases BDNF and neuroplasticity, reduces HPA axis activity and inflammation, improves sleep quality, and provides behavioral activation. Meta-analyses show moderate effect sizes comparable to antidepressants for mild-moderate depression.',
        },
        howToImplement: ['Start tiny - 5-10 minutes of walking', 'Gradually increase', 'Any movement counts', 'Don\'t wait until you feel like it', 'Try walking with someone'],
        evidenceStrength: 'strong',
        expectedBenefit: 'Improved mood, energy, sleep. Can be as effective as medication for mild depression.',
      },
      {
        change: 'Consistent sleep schedule',
        category: 'habits',
        whyItHelps: {
          simple: 'Sleep and depression are deeply connected. Regulating your sleep helps regulate your mood.',
          detailed: 'The same brain systems affected in depression also regulate sleep. Consistent sleep-wake times stabilize your circadian rhythm and support mood.',
          comprehensive: 'Social rhythm therapy and chronotherapeutic interventions demonstrate circadian stabilization benefits. Sleep deprivation worsens depression while sleep regularization supports recovery.',
        },
        howToImplement: ['Same wake time every day, even weekends', 'Same bedtime', 'Get morning light', 'Avoid sleeping in even after bad nights'],
        evidenceStrength: 'strong',
        expectedBenefit: 'Better sleep quality, more stable mood, improved energy',
      },
      {
        change: 'Reduce or eliminate alcohol',
        category: 'habits',
        whyItHelps: {
          simple: 'Alcohol is a depressant. It may feel like it helps briefly, but it makes depression worse.',
          detailed: 'Alcohol interferes with antidepressants, disrupts sleep, lowers inhibitions (increasing risk), and worsens mood after initial effects wear off.',
          comprehensive: 'Alcohol has depressant effects, interferes with medication metabolism, disrupts sleep architecture, increases impulsivity (suicide risk), and has bidirectional relationship with depression.',
        },
        howToImplement: ['Consider stopping entirely while treating depression', 'If reducing, set clear limits', 'Avoid drinking alone', 'Tell your doctor about alcohol use'],
        evidenceStrength: 'strong',
        expectedBenefit: 'Better medication effectiveness, improved sleep, more stable mood',
      },
      {
        change: 'Behavioral activation - doing activities',
        category: 'habits',
        whyItHelps: {
          simple: 'Depression makes you want to withdraw. But doing activities (even without motivation) actually helps mood.',
          detailed: 'Waiting until you "feel like" doing things rarely works. Action often precedes motivation. Doing activities breaks the depression cycle of withdrawal.',
          comprehensive: 'Behavioral activation addresses depression-maintaining patterns of avoidance. RCTs show it\'s an effective treatment component. Activity scheduling and mastery/pleasure monitoring are key techniques.',
        },
        howToImplement: ['Schedule activities in advance', 'Start very small', 'Don\'t wait to feel motivated', 'Notice (small) positive effects', 'Include both necessary and pleasant activities'],
        evidenceStrength: 'strong',
        expectedBenefit: 'Breaks the depression cycle, gradual return of pleasure and motivation',
      },
    ],

    warningSignsToWatch: [
      {
        sign: 'Thoughts of death, suicide, or self-harm',
        whatItMightMean: 'Depression is severe. These thoughts are symptoms of the illness, not reality. You need immediate support.',
        urgency: 'emergency-911',
        actionToTake: 'Call 988 (Suicide & Crisis Lifeline), go to an emergency room, or call 911. Don\'t be alone. This is a medical emergency.',
      },
      {
        sign: 'Making plans or preparations for suicide',
        whatItMightMean: 'This is a psychiatric emergency.',
        urgency: 'emergency-911',
        actionToTake: 'Call 911 or go to the nearest emergency room immediately. Do not be alone.',
      },
      {
        sign: 'Symptoms significantly worsening',
        whatItMightMean: 'May need medication adjustment or more intensive treatment.',
        urgency: 'call-doctor-today',
        actionToTake: 'Contact your doctor or therapist today. Don\'t wait for your next appointment.',
      },
      {
        sign: 'Unable to care for yourself or others',
        whatItMightMean: 'Depression is severe enough to need more intensive treatment.',
        urgency: 'call-doctor-today',
        actionToTake: 'Contact your treatment provider urgently. May need medication adjustment or higher level of care.',
      },
      {
        sign: 'Sudden improvement with plans to stop treatment',
        whatItMightMean: 'Sometimes people feel better when they\'ve made a decision to attempt suicide. Don\'t stop treatment without discussing.',
        urgency: 'call-doctor-today',
        actionToTake: 'Continue treatment. Tell your doctor about the improvement. Don\'t stop medications suddenly.',
      },
    ],

    whenToGetHelp: [
      {
        situation: 'Thoughts of suicide, wanting to die, or self-harm',
        urgency: 'emergency-911',
        whereTogo: 'emergency-room',
        whatToSay: 'I\'m having thoughts of suicide and I need help.',
      },
      {
        situation: 'Made a plan or have access to means for suicide',
        urgency: 'emergency-911',
        whereTogo: 'emergency-room',
        whatToSay: 'I\'ve made a plan to hurt myself and need help right now.',
      },
      {
        situation: 'Symptoms getting significantly worse',
        urgency: 'call-doctor-today',
        whereTogo: 'call-doctor',
        whatToSay: 'My depression is getting worse despite treatment. I need an urgent appointment.',
      },
      {
        situation: 'Unable to function at work/home',
        urgency: 'call-doctor-today',
        whereTogo: 'call-doctor',
        whatToSay: 'I\'m unable to function because of my depression. I need to be seen soon.',
      },
      {
        situation: 'Medication side effects bothering you',
        urgency: 'schedule-soon',
        whereTogo: 'call-doctor',
        whatToSay: 'I\'m having side effects from my antidepressant. Can we discuss options? (Don\'t stop taking it without guidance.)',
      },
    ],

    emotionalSupport: {
      commonFeelings: [
        'Hopelessness - feeling like things will never get better (this is a symptom, not reality)',
        'Shame and guilt about having depression',
        'Fear of being a burden to others',
        'Frustration when improvement is slow',
        'Self-criticism and negative self-talk',
        'Feeling like you should be able to just "snap out of it"',
        'Isolation and loneliness even when not alone',
      ],
      copingStrategies: [
        'Remember: depression lies. The hopelessness is a symptom, not truth.',
        'Depression is a medical condition - you wouldn\'t blame yourself for having diabetes',
        'Talk back to negative thoughts - are they really true?',
        'Do one small thing, then one more - momentum builds',
        'Tell at least one person what you\'re going through',
        'Celebrate tiny victories - getting up, showering, showing up',
        'Be patient with yourself - recovery takes time',
        'If one treatment doesn\'t work, there are many others to try',
        'You\'ve survived every bad day so far - you can get through this one too',
      ],
      supportResources: [
        '988 Suicide & Crisis Lifeline (call or text 988)',
        'Crisis Text Line (text HOME to 741741)',
        'Depression and Bipolar Support Alliance (dbsalliance.org)',
        'National Alliance on Mental Illness (nami.org)',
        'Therapy apps (Woebot, Wysa) for between-session support',
        'Support groups (in-person or online)',
        'Your therapist, psychiatrist, or primary care doctor',
      ],
    },
  },

  doctorQuestions: {
    atDiagnosis: [
      {
        question: 'What type of depression do I have, and how severe is it?',
        whyAsk: 'Knowing the severity helps understand what treatment is recommended.',
        whatAnswerMeans: 'Mild depression might start with therapy alone. Moderate-severe usually needs medication. Severe with safety concerns may need intensive treatment.',
        followUpQuestions: ['What do my scores on the questionnaire mean?'],
      },
      {
        question: 'What caused my depression?',
        whyAsk: 'Understanding contributing factors can guide treatment.',
        whatAnswerMeans: 'Often a combination of biology, stressors, and circumstances. Knowing specific triggers can help.',
        followUpQuestions: ['Are there medical conditions that could be contributing?'],
      },
      {
        question: 'What treatment do you recommend, and why?',
        whyAsk: 'Understanding the rationale helps with buy-in and expectations.',
        whatAnswerMeans: 'Options include medication, therapy, or both. Combined treatment often works best.',
        followUpQuestions: ['Why this medication specifically?', 'What type of therapy?'],
      },
    ],

    aboutTreatment: [
      {
        question: 'How long until the medication works?',
        whyAsk: 'Setting realistic expectations prevents discouragement.',
        whatAnswerMeans: 'Most antidepressants take 2-6 weeks to show full effect. Some effects may come sooner.',
        followUpQuestions: ['What should I notice first?', 'When should I call if it\'s not working?'],
      },
      {
        question: 'What side effects should I expect, and what should I report?',
        whyAsk: 'Being prepared for side effects helps you stick with treatment.',
        whatAnswerMeans: 'Many side effects are temporary and manageable. Some require attention.',
        followUpQuestions: ['What can I do about [specific side effect]?'],
      },
      {
        question: 'How long will I need to take medication?',
        whyAsk: 'Planning and setting expectations.',
        whatAnswerMeans: 'Usually continue for at least 6-12 months AFTER feeling better to prevent relapse. May be longer for recurrent depression.',
        followUpQuestions: ['What happens when it\'s time to stop?'],
      },
      {
        question: 'Should I do therapy too?',
        whyAsk: 'Combined treatment often works better.',
        whatAnswerMeans: 'Usually recommended, especially to learn skills and reduce relapse risk.',
        followUpQuestions: ['Can you recommend a therapist?', 'What type of therapy is best?'],
      },
    ],

    ongoingCare: [
      {
        question: 'What should I do if I have thoughts of suicide?',
        whyAsk: 'Having a safety plan is important.',
        whatAnswerMeans: 'Know the warning signs and have a plan. 988 is always available.',
        followUpQuestions: ['Can we make a written safety plan together?'],
      },
      {
        question: 'How will we monitor my progress?',
        whyAsk: 'Regular monitoring helps track improvement and catch problems.',
        whatAnswerMeans: 'Usually involves regular appointments, symptom questionnaires, and checking in.',
        followUpQuestions: ['How often should I come in?', 'What should prompt an earlier visit?'],
      },
      {
        question: 'What if this treatment doesn\'t work?',
        whyAsk: 'Knowing there are other options reduces fear and hopelessness.',
        whatAnswerMeans: 'There are many medication options, therapy types, and other treatments. Something will help.',
        followUpQuestions: ['How long do we try before switching?'],
      },
    ],

    prognosis: [
      {
        question: 'Will I always have depression?',
        whyAsk: 'Understanding your long-term outlook.',
        whatAnswerMeans: 'Many people have a single episode. Others have recurrent depression but can manage it. Long-term treatment may reduce recurrence.',
        followUpQuestions: ['What can I do to reduce the chance of it coming back?'],
      },
      {
        question: 'How will I know I\'m getting better?',
        whyAsk: 'Knowing what to look for tracks progress and builds hope.',
        whatAnswerMeans: 'Often physical symptoms improve first (sleep, energy), then mood. Look for more good hours, then good days.',
        followUpQuestions: ['What\'s a realistic timeline?'],
      },
    ],
  },

  anatomyLinks: [
    { structureId: 'brain', structureName: 'Brain', relevance: 'Where depression affects mood, thinking, and regulation', viewPreset: 'lateral' },
  ],

  relatedMedications: ['sertraline', 'escitalopram', 'fluoxetine', 'bupropion', 'venlafaxine', 'duloxetine', 'mirtazapine'],
  relatedTests: ['thyroid-panel', 'vitamin-d', 'basic-metabolic-panel', 'cbc'],
  relatedConditions: ['anxiety-disorders', 'insomnia', 'chronic-pain', 'substance-use-disorder', 'bipolar-disorder'],
};

// =============================================================================
// ANXIETY DISORDERS (GENERALIZED ANXIETY DISORDER)
// =============================================================================

const ANXIETY_EDUCATION: ConditionEducation = {
  id: 'anxiety-disorders',
  conditionName: 'Anxiety Disorders',
  medicalName: 'Generalized Anxiety Disorder',
  icdCode: 'F41.1',

  whyMeSection: {
    whatItIs: {
      simple: 'Anxiety disorders cause excessive worry and fear that\'s hard to control. Everyone worries sometimes, but anxiety disorders are when worry takes over and interferes with daily life.',
      detailed: 'Generalized anxiety disorder (GAD) involves persistent, excessive worry about many things - work, health, family, everyday matters - that\'s out of proportion to the actual situation. This worry is hard to control and comes with physical symptoms like restlessness, fatigue, and muscle tension.',
      comprehensive: 'Generalized anxiety disorder is characterized by persistent excessive anxiety and worry about various domains, occurring more days than not for at least 6 months. The anxiety is difficult to control and associated with three or more of: restlessness, fatigue, concentration difficulty, irritability, muscle tension, and sleep disturbance.',
      analogy: 'Imagine your brain\'s alarm system is set too sensitively - it keeps going off for small things that aren\'t real dangers. Your brain treats everyday situations like emergencies, keeping you in a constant state of alertness.',
      visualMetaphor: 'Like having your internal alarm system stuck in the "on" position, always scanning for danger.',
    },

    howCommon: {
      prevalence: 'Anxiety disorders are the most common mental health conditions. About 40 million American adults (19%) have an anxiety disorder. GAD affects about 6 million adults.',
      affectedPopulations: 'Affects people of all ages but often starts in adolescence or early adulthood. More common in women than men (about 2:1 ratio).',
      patientReassurance: 'Anxiety disorders are extremely common and very treatable. The vast majority of people who get treatment experience significant improvement. You are not alone in this.',
    },

    whyItHappened: {
      knownCauses: [
        {
          cause: 'Brain chemistry and biology',
          explanation: {
            simple: 'The brain circuits that detect and respond to threats are overactive.',
            detailed: 'Neurotransmitters like serotonin, GABA, and norepinephrine regulate anxiety. In anxiety disorders, these systems may be imbalanced, making the brain\'s "threat detector" too sensitive.',
            comprehensive: 'Anxiety involves hyperactivity of the amygdala and fear circuitry, reduced prefrontal cortical regulation, altered GABAergic and serotonergic function, and HPA axis dysregulation.',
          },
          isModifiable: true,
          whatYouCanDo: 'Medications and therapy can help rebalance brain chemistry and retrain the threat response system.',
        },
        {
          cause: 'Genetics',
          explanation: {
            simple: 'Anxiety tends to run in families.',
            detailed: 'If close family members have anxiety, you\'re more likely to develop it. Genetics influence how sensitive your nervous system is to stress.',
            comprehensive: 'Twin studies show heritability of 30-40% for anxiety disorders. Genetic factors influence temperament, stress reactivity, and neurotransmitter systems.',
          },
          isModifiable: false,
        },
        {
          cause: 'Life experiences',
          explanation: {
            simple: 'Stressful or traumatic experiences can trigger or worsen anxiety.',
            detailed: 'Childhood adversity, trauma, prolonged stress, and learned behaviors can all contribute to developing anxiety disorders.',
            comprehensive: 'Environmental factors including early life stress, trauma, parenting styles, and current stressors interact with genetic vulnerability to influence anxiety disorder development.',
          },
          isModifiable: true,
          whatYouCanDo: 'Therapy can help process past experiences and build healthier coping patterns.',
        },
      ],

      riskFactorsThatApply: [
        {
          factor: 'Family history of anxiety disorders',
          howItContributes: 'Genetic factors influence nervous system sensitivity and stress response.',
          isModifiable: false,
          strengthOfRisk: 'major',
        },
        {
          factor: 'Temperament (behavioral inhibition)',
          howItContributes: 'People who were shy, cautious, or easily upset as children are more prone to anxiety.',
          isModifiable: false,
          strengthOfRisk: 'major',
        },
        {
          factor: 'Stressful life events',
          howItContributes: 'Major stressors, changes, or accumulated smaller stressors can trigger anxiety.',
          isModifiable: true,
          reductionStrategy: 'Stress management, social support, and building resilience help.',
          strengthOfRisk: 'moderate',
        },
        {
          factor: 'Chronic medical conditions',
          howItContributes: 'Having a serious illness or chronic health problems increases anxiety.',
          isModifiable: true,
          reductionStrategy: 'Managing medical conditions and addressing anxiety directly both help.',
          strengthOfRisk: 'moderate',
        },
        {
          factor: 'Caffeine and stimulants',
          howItContributes: 'Stimulants can trigger or worsen anxiety symptoms.',
          isModifiable: true,
          reductionStrategy: 'Reducing or eliminating caffeine often helps.',
          strengthOfRisk: 'minor',
        },
      ],

      notYourFault: 'Anxiety is NOT weakness, being "uptight," or lack of willpower. It\'s a real medical condition involving brain chemistry and circuitry. You can\'t just "relax" or "stop worrying" any more than someone with diabetes can just "think" their blood sugar normal. Treatment works, and seeking help is a sign of strength.',
    },
  },

  bodyMechanism: {
    whatGoesWrong: {
      simple: 'Your brain\'s threat detection system is too sensitive and stays activated even when there\'s no real danger. This causes constant worry and physical symptoms.',
      detailed: 'In anxiety, the amygdala (brain\'s alarm center) is overactive while the prefrontal cortex (rational thinking) has less control. This keeps your body in a "fight or flight" state - heart racing, muscles tense, mind racing - even when you\'re safe.',
      comprehensive: 'Anxiety disorders involve amygdala hyperreactivity to threat cues, reduced prefrontal-amygdala connectivity (impaired top-down regulation), altered GABA and serotonin neurotransmission, and persistent sympathetic nervous system activation. This creates a self-perpetuating cycle of worry, physiological arousal, and avoidance.',
    },

    affectedAreas: [
      {
        areaName: 'Brain - amygdala and fear circuits',
        structureId: 'brain',
        howAffected: {
          simple: 'The brain\'s "alarm center" is overactive, constantly signaling danger.',
          detailed: 'The amygdala, which detects threats, fires too easily and too often. The prefrontal cortex, which normally calms it down, has reduced ability to regulate.',
          comprehensive: 'Amygdala hyperreactivity to potential threats, reduced prefrontal cortical regulation, and altered connectivity between these regions characterize anxiety disorders.',
        },
        relatedSymptoms: ['Worry', 'Fear', 'Dread', 'Hypervigilance'],
      },
      {
        areaName: 'Nervous system - fight or flight',
        structureId: 'nervous-system',
        howAffected: {
          simple: 'Your body\'s emergency response stays on, causing physical symptoms.',
          detailed: 'The sympathetic nervous system (fight-or-flight) stays activated, releasing stress hormones and causing physical symptoms like rapid heartbeat, sweating, and muscle tension.',
          comprehensive: 'Chronic sympathetic activation and HPA axis dysregulation lead to elevated cortisol, norepinephrine release, and peripheral physiological symptoms.',
        },
        relatedSymptoms: ['Rapid heartbeat', 'Sweating', 'Trembling', 'Shortness of breath', 'Muscle tension'],
      },
    ],

    symptomExplanations: [
      {
        symptom: 'Excessive worry',
        whyYouFeelThis: {
          simple: 'Your brain keeps trying to anticipate and prevent problems, but it can\'t turn off.',
          detailed: 'The worry is your brain\'s attempt to feel prepared and in control. But in anxiety, this protective mechanism goes into overdrive and becomes counterproductive.',
          comprehensive: 'Worry represents cognitive hypervigilance and attempts at threat anticipation. In GAD, this process is excessive, uncontrollable, and generalizes across multiple domains.',
        },
        whatMakesItBetterWorse: {
          better: ['Treatment', 'Relaxation techniques', 'Cognitive restructuring', 'Scheduled worry time'],
          worse: ['Trying to suppress worry', 'Avoidance', 'Uncertainty', 'Stress'],
        },
        whenToWorry: 'When worry consumes most of your day, prevents normal functioning, or comes with suicidal thoughts.',
      },
      {
        symptom: 'Physical tension and restlessness',
        whyYouFeelThis: {
          simple: 'Your body is in a constant state of readiness for danger.',
          detailed: 'Fight-or-flight activation keeps your muscles tense and ready to act. This chronic tension causes muscle pain, headaches, and an inability to relax.',
          comprehensive: 'Chronic sympathetic activation and elevated cortisol maintain muscle tension, psychomotor agitation, and the subjective experience of restlessness.',
        },
        whatMakesItBetterWorse: {
          better: ['Exercise', 'Progressive muscle relaxation', 'Deep breathing', 'Massage'],
          worse: ['Sitting still trying to relax', 'Lack of physical activity', 'Caffeine'],
        },
        whenToWorry: 'When physical symptoms are severe or constant.',
      },
      {
        symptom: 'Sleep problems',
        whyYouFeelThis: {
          simple: 'It\'s hard to sleep when your brain won\'t stop scanning for threats.',
          detailed: 'Anxiety keeps your mind active and body tense, making it hard to fall asleep or stay asleep. Racing thoughts and physical arousal interfere with rest.',
          comprehensive: 'Hyperarousal, cognitive hypervigilance, and elevated cortisol disrupt sleep onset and maintenance. Poor sleep then worsens anxiety in a vicious cycle.',
        },
        whatMakesItBetterWorse: {
          better: ['Consistent sleep schedule', 'Relaxation before bed', 'Treating anxiety'],
          worse: ['Caffeine', 'Screens before bed', 'Trying to force sleep', 'Worrying about sleep'],
        },
        whenToWorry: 'Chronic insomnia significantly affecting daily function.',
      },
    ],

    dailyLifeImpact: [
      {
        activity: 'Work and concentration',
        howAffected: 'Worry is distracting. Racing thoughts make it hard to focus or make decisions.',
        adaptations: ['Break tasks into small steps', 'Use lists', 'Limit multitasking', 'Schedule worry time'],
      },
      {
        activity: 'Relationships',
        howAffected: 'Anxiety can cause irritability, need for reassurance, or avoidance of social situations.',
        adaptations: ['Communicate about your anxiety', 'Set realistic expectations', 'Don\'t isolate'],
      },
      {
        activity: 'Physical health',
        howAffected: 'Chronic anxiety takes a toll - fatigue, muscle tension, headaches, GI symptoms.',
        adaptations: ['Exercise regularly', 'Practice relaxation', 'Maintain good sleep habits'],
      },
    ],
  },

  diseaseJourney: {
    naturalHistory: {
      simple: 'Without treatment, anxiety disorders often become chronic. With treatment, most people improve significantly and can manage their symptoms long-term.',
      detailed: 'Anxiety disorders can wax and wane but tend to be chronic without treatment. Most people who receive appropriate treatment experience substantial improvement within weeks to months.',
      comprehensive: 'GAD follows a chronic course with symptom fluctuation related to stress. Spontaneous remission is uncommon. Evidence-based treatments (CBT, SSRIs) achieve response rates of 60-70%. Relapse may occur but is manageable with continued or resumed treatment.',
    },

    prognosis: {
      category: 'manageable-stable',
      explanation: {
        simple: 'Anxiety is very treatable. Most people who get treatment feel significantly better and can manage their anxiety long-term.',
        detailed: 'With proper treatment (therapy, medication, or both), the majority of people with anxiety disorders improve substantially. Treatment teaches skills that last, though some people benefit from ongoing support.',
        comprehensive: 'CBT achieves response rates of 50-60%, medications similarly effective. Combination may be superior. Long-term outcomes are good with treatment adherence. Maintenance strategies help prevent relapse.',
      },
      factorsAffectingOutcome: [
        'Getting treatment',
        'Treatment adherence',
        'Practicing skills learned in therapy',
        'Avoiding avoidance (facing fears)',
        'Limiting alcohol and caffeine',
        'Managing stress',
      ],
      whatYouCanControl: [
        'Seeking help',
        'Taking medications as prescribed',
        'Attending therapy and doing homework',
        'Practicing relaxation techniques',
        'Facing anxiety-provoking situations gradually',
        'Limiting caffeine and alcohol',
        'Regular exercise',
        'Good sleep habits',
      ],
    },

    timeline: [
      {
        timeframe: 'Starting treatment',
        whatToExpect: 'Medications take 2-4 weeks to show effects. Therapy starts teaching skills right away.',
        milestones: ['Begin medication', 'Start learning CBT techniques', 'Track anxiety patterns'],
      },
      {
        timeframe: 'First 2-3 months',
        whatToExpect: 'Gradual improvement. Learning to challenge anxious thoughts and face fears.',
        milestones: ['Anxiety less intense', 'More good days', 'Using coping skills'],
      },
      {
        timeframe: 'Ongoing',
        whatToExpect: 'Continued practice of skills. Some ongoing or intermittent treatment may help maintain gains.',
        milestones: ['Managing anxiety well', 'Catching early warning signs', 'Returning for help if needed'],
      },
    ],

    hopeAndReality: 'Anxiety disorders are among the most treatable mental health conditions. The skills you learn in therapy stay with you forever. Most people who commit to treatment see real, lasting improvement. You don\'t have to live controlled by worry - there\'s a path forward, and it works.',
  },

  treatmentRationale: {
    whyTreat: {
      simple: 'Treatment helps calm your overactive alarm system and teaches you skills to manage worry. You don\'t have to feel this way.',
      detailed: 'Treatment works on multiple levels: medication can help rebalance brain chemistry, while therapy (especially CBT) retrains your brain to respond differently to anxiety triggers. Together they break the cycle.',
      comprehensive: 'Evidence-based treatments target both biological (neurotransmitter dysfunction) and psychological (cognitive distortions, avoidance behaviors) factors. CBT provides lasting skills; medications provide symptom relief. Combined treatment may optimize outcomes.',
    },

    goals: [
      {
        goal: 'Reduce worry and anxiety to manageable levels',
        whyImportant: 'You should be able to get through your day without excessive worry.',
        howMeasured: 'Anxiety questionnaires, daily functioning',
        realisticTimeframe: 'Weeks to months',
      },
      {
        goal: 'Eliminate avoidance behaviors',
        whyImportant: 'Avoidance maintains anxiety. Facing fears reduces them.',
        howMeasured: 'Doing activities you\'ve avoided',
        realisticTimeframe: 'Gradual over treatment',
      },
      {
        goal: 'Improve daily functioning',
        whyImportant: 'Work, relationships, and enjoyment of life should improve.',
        howMeasured: 'Return to normal activities',
        realisticTimeframe: 'Months',
      },
      {
        goal: 'Learn lasting coping skills',
        whyImportant: 'Skills from therapy help manage anxiety long-term.',
        howMeasured: 'Using techniques independently',
        realisticTimeframe: 'Throughout treatment',
      },
    ],

    approaches: [
      {
        name: 'Cognitive Behavioral Therapy (CBT)',
        type: 'therapy',
        whatItDoes: {
          simple: 'Helps you identify and change anxious thinking patterns and face fears gradually.',
          detailed: 'CBT teaches you to recognize cognitive distortions (catastrophizing, overestimating threat), challenge them with evidence, and gradually face situations you\'ve been avoiding.',
          comprehensive: 'CBT targets cognitive distortions through cognitive restructuring and behavioral avoidance through exposure. These techniques modify maladaptive schemas and reduce fear through habituation and inhibitory learning.',
        },
        whyRecommended: 'Strong evidence base. Skills last beyond treatment. Reduces relapse risk.',
        alternatives: ['Acceptance and commitment therapy (ACT)', 'Mindfulness-based approaches'],
        prosAndCons: {
          benefits: ['Very effective', 'Skills last long-term', 'No medication side effects', 'Empowering'],
          drawbacks: ['Requires time and effort', 'Homework between sessions', 'May need to face fears'],
        },
      },
      {
        name: 'SSRI/SNRI medications',
        type: 'medication',
        whatItDoes: {
          simple: 'Helps rebalance brain chemicals that affect anxiety.',
          detailed: 'SSRIs and SNRIs increase serotonin (and norepinephrine) in the brain, which helps reduce anxiety and worry over time.',
          comprehensive: 'SSRIs/SNRIs are first-line pharmacotherapy for GAD. They modulate serotonergic neurotransmission and, with chronic use, produce downstream effects including reduced amygdala reactivity.',
        },
        whyRecommended: 'Well-tolerated, effective, safe for long-term use.',
        alternatives: ['Buspirone', 'Benzodiazepines (short-term only)'],
        prosAndCons: {
          benefits: ['Effective for most people', 'Also helps depression if present', 'Safe long-term'],
          drawbacks: ['Takes 2-4 weeks to work', 'Side effects possible', 'Need to taper off'],
        },
      },
      {
        name: 'Relaxation techniques',
        type: 'lifestyle',
        whatItDoes: {
          simple: 'Helps calm your body\'s stress response.',
          detailed: 'Techniques like deep breathing, progressive muscle relaxation, and mindfulness directly activate the relaxation response, counteracting anxiety.',
          comprehensive: 'Relaxation training activates parasympathetic nervous system and reduces sympathetic arousal. Regular practice can reduce baseline anxiety levels.',
        },
        whyRecommended: 'No side effects. Can use anytime. Complements other treatments.',
        alternatives: ['Yoga', 'Tai chi', 'Biofeedback'],
        prosAndCons: {
          benefits: ['Free', 'Can use anywhere', 'No side effects', 'Empowering'],
          drawbacks: ['Requires practice', 'Not a complete treatment alone for moderate-severe anxiety'],
        },
      },
    ],

    untreatedOutcome: 'Without treatment, anxiety tends to be chronic and can worsen over time. Untreated anxiety increases risk of depression, substance abuse, and impaired quality of life. It can interfere with work, relationships, and physical health. Treatment is very effective - there\'s no reason to suffer unnecessarily.',
  },

  livingWith: {
    dailyManagement: [
      {
        task: 'Take medication as prescribed',
        frequency: 'Daily',
        whyImportant: 'SSRIs need consistent levels to work. Missing doses can cause symptoms.',
        howToDo: 'Same time each day. Set reminders.',
        tips: ['Don\'t stop suddenly', 'Give it time to work', 'Report side effects'],
      },
      {
        task: 'Practice relaxation techniques',
        frequency: 'Daily',
        whyImportant: 'Regular practice builds the skill and reduces baseline anxiety.',
        howToDo: 'Deep breathing, progressive muscle relaxation, or mindfulness for 10-20 minutes.',
        tips: ['Start small', 'Same time each day', 'Use apps if helpful'],
      },
      {
        task: 'Limit caffeine',
        frequency: 'Ongoing',
        whyImportant: 'Caffeine can trigger or worsen anxiety symptoms.',
        howToDo: 'Reduce gradually to avoid withdrawal headaches.',
        tips: ['Read labels - caffeine is in many products', 'Afternoon caffeine affects sleep'],
      },
      {
        task: 'Exercise regularly',
        frequency: 'Most days',
        whyImportant: 'Exercise is a powerful anti-anxiety treatment.',
        howToDo: '30 minutes of moderate activity. Walking counts.',
        tips: ['Burns off stress hormones', 'Helps sleep', 'Mood benefits'],
      },
    ],

    lifestyleChanges: [
      {
        change: 'Regular exercise',
        category: 'exercise',
        whyItHelps: {
          simple: 'Exercise burns off stress hormones and naturally reduces anxiety.',
          detailed: 'Physical activity releases endorphins, reduces cortisol, improves sleep, and provides distraction from worry.',
          comprehensive: 'Exercise has anxiolytic effects through multiple mechanisms: reduced sympathetic tone, improved HPA axis regulation, increased BDNF, and psychological benefits.',
        },
        howToImplement: ['Start with walking', 'Aim for 30 minutes most days', 'Any movement helps'],
        evidenceStrength: 'strong',
        expectedBenefit: 'Reduced anxiety, better sleep, improved mood',
      },
      {
        change: 'Reduce caffeine',
        category: 'diet',
        whyItHelps: {
          simple: 'Caffeine is a stimulant that can mimic and worsen anxiety symptoms.',
          detailed: 'Caffeine increases heart rate, causes jitteriness, and can trigger panic attacks in sensitive people.',
          comprehensive: 'Caffeine is an adenosine receptor antagonist that increases catecholamine release and can exacerbate anxiety symptoms.',
        },
        howToImplement: ['Reduce gradually', 'Track sources (coffee, tea, soda, chocolate)', 'Switch to decaf'],
        evidenceStrength: 'moderate',
        expectedBenefit: 'Less physical anxiety, better sleep',
      },
      {
        change: 'Mindfulness meditation',
        category: 'stress',
        whyItHelps: {
          simple: 'Mindfulness trains you to stay present instead of worrying about the future.',
          detailed: 'Regular mindfulness practice changes how you relate to anxious thoughts - observing them without being controlled by them.',
          comprehensive: 'Mindfulness-based interventions show efficacy for anxiety through attention training, decentering from thoughts, and reduced experiential avoidance.',
        },
        howToImplement: ['Start with 5-10 minutes daily', 'Use apps like Headspace or Calm', 'Be patient - it\'s a skill'],
        evidenceStrength: 'moderate',
        expectedBenefit: 'Better able to manage worry, reduced rumination',
      },
    ],

    warningSignsToWatch: [
      {
        sign: 'Panic attacks',
        whatItMightMean: 'Anxiety may be escalating or panic disorder developing.',
        urgency: 'call-doctor-today',
        actionToTake: 'Contact your doctor to discuss. Panic attacks are very treatable.',
      },
      {
        sign: 'Avoiding more and more situations',
        whatItMightMean: 'Avoidance maintains and worsens anxiety.',
        urgency: 'schedule-soon',
        actionToTake: 'Discuss with your therapist - may need to work on exposure.',
      },
      {
        sign: 'Suicidal thoughts',
        whatItMightMean: 'Anxiety can co-occur with severe depression.',
        urgency: 'emergency-911',
        actionToTake: 'Call 988 or go to emergency room immediately.',
      },
    ],

    whenToGetHelp: [
      {
        situation: 'Suicidal thoughts',
        urgency: 'emergency-911',
        whereTogo: 'emergency-room',
        whatToSay: 'I\'m having thoughts of suicide and need help.',
      },
      {
        situation: 'Anxiety preventing normal functioning',
        urgency: 'call-doctor-today',
        whereTogo: 'call-doctor',
        whatToSay: 'My anxiety is severe and I can\'t function normally. I need help.',
      },
      {
        situation: 'Treatment not helping',
        urgency: 'schedule-soon',
        whereTogo: 'call-doctor',
        whatToSay: 'My current treatment isn\'t helping my anxiety. Can we discuss other options?',
      },
    ],

    emotionalSupport: {
      commonFeelings: [
        'Frustration with constant worry',
        'Shame about being anxious',
        'Exhaustion from anxiety',
        'Fear of being judged',
        'Loneliness',
      ],
      copingStrategies: [
        'Anxiety is a medical condition, not a character flaw',
        'You\'re not alone - anxiety is extremely common',
        'Treatment works - this can get better',
        'Practice self-compassion',
        'Connect with others who understand',
      ],
      supportResources: [
        'Anxiety and Depression Association of America (adaa.org)',
        '988 Suicide & Crisis Lifeline',
        'NAMI (nami.org)',
        'Online support groups',
      ],
    },
  },

  doctorQuestions: {
    atDiagnosis: [
      {
        question: 'What type of anxiety disorder do I have?',
        whyAsk: 'Different types may have different treatments.',
        whatAnswerMeans: 'Helps understand your specific pattern.',
        followUpQuestions: ['Is it generalized anxiety, social anxiety, or panic disorder?'],
      },
      {
        question: 'What treatment do you recommend?',
        whyAsk: 'Understanding the plan helps.',
        whatAnswerMeans: 'Usually CBT, medication, or both.',
        followUpQuestions: ['Should I do therapy, medication, or both?'],
      },
    ],

    aboutTreatment: [
      {
        question: 'How long until the medication works?',
        whyAsk: 'Setting expectations.',
        whatAnswerMeans: '2-4 weeks for SSRIs.',
        followUpQuestions: ['What should I notice first?'],
      },
      {
        question: 'What kind of therapy is best for anxiety?',
        whyAsk: 'CBT is most evidence-based.',
        whatAnswerMeans: 'CBT is first-line; other options exist.',
        followUpQuestions: ['Can you recommend a therapist?'],
      },
    ],

    ongoingCare: [
      {
        question: 'How long will I need treatment?',
        whyAsk: 'Planning for the future.',
        whatAnswerMeans: 'Often 6-12 months minimum; some need longer.',
        followUpQuestions: ['What helps prevent relapse?'],
      },
    ],

    prognosis: [
      {
        question: 'Will my anxiety ever go away completely?',
        whyAsk: 'Understanding realistic expectations.',
        whatAnswerMeans: 'Most people improve significantly; some anxiety is normal.',
        followUpQuestions: ['What can I do to maintain gains?'],
      },
    ],
  },

  anatomyLinks: [
    { structureId: 'brain', structureName: 'Brain', relevance: 'Where anxiety affects the fear and worry circuits', viewPreset: 'lateral' },
  ],

  relatedMedications: ['sertraline', 'escitalopram', 'venlafaxine', 'buspirone', 'duloxetine'],
  relatedTests: ['thyroid-panel', 'basic-metabolic-panel'],
  relatedConditions: ['depression', 'panic-disorder', 'social-anxiety-disorder', 'ptsd', 'ocd'],
};


// =============================================================================

export const CONDITION_EDUCATION: Record<string, ConditionEducation> = {
  'type-2-diabetes': TYPE_2_DIABETES_EDUCATION,
  'hypertension': HYPERTENSION_EDUCATION,
  'copd': COPD_EDUCATION,
  'heart-failure': HEART_FAILURE_EDUCATION,
  'asthma': ASTHMA_EDUCATION,
  'coronary-artery-disease': CORONARY_ARTERY_DISEASE_EDUCATION,
  'depression': DEPRESSION_EDUCATION,
  'anxiety-disorders': ANXIETY_EDUCATION,
};

// Helper functions
export function getConditionEducation(id: string): ConditionEducation | undefined {
  return CONDITION_EDUCATION[id];
}

export function getAllConditionEducation(): ConditionEducation[] {
  return Object.values(CONDITION_EDUCATION);
}

export function searchConditionEducation(query: string): ConditionEducation[] {
  const lower = query.toLowerCase();
  return Object.values(CONDITION_EDUCATION).filter(c =>
    c.conditionName.toLowerCase().includes(lower) ||
    c.medicalName.toLowerCase().includes(lower)
  );
}
